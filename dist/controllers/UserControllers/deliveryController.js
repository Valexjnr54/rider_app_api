"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmDelivery = exports.deleteDelivery = exports.updateDelivery = exports.viewSingleDelivery = exports.viewAllDelivery = exports.createDeliveryRequest = void 0;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const cloudinary_1 = __importDefault(require("../../utils/cloudinary"));
const fs_1 = __importDefault(require("fs"));
const emailSender_1 = require("../../utils/emailSender");
const sendSMS_1 = require("../../utils/sendSMS");
const pushNotification_1 = require("../../utils/pushNotification");
const prisma = new models_1.PrismaClient();
async function createDeliveryRequest(request, response) {
    const { package_name, phone_number, pickup_location, delivery_location, price, pickup_latitude, pickup_longitude, delivery_latitude, delivery_longitude } = request.body;
    const user_id = request.user.userId;
    // Check if user_id is not present or undefined
    if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_user = await prisma.user.findUnique({ where: { id: user_id } });
        const role = check_user?.role;
        // Check if the role is not 'User'
        if (role !== 'User') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        // Validation rules
        const validationRules = [
            (0, express_validator_1.body)('package_name').notEmpty().withMessage('Package Name is required'),
            (0, express_validator_1.body)('phone_number').notEmpty().withMessage('Phone Number is required'),
            (0, express_validator_1.body)('pickup_location').notEmpty().withMessage('Pickup Location is required'),
            (0, express_validator_1.body)('delivery_location').notEmpty().withMessage('Delivery Location is required'),
            (0, express_validator_1.body)('price').notEmpty().withMessage('Estimated Delivery Price is required'),
            (0, express_validator_1.body)('pickup_latitude').notEmpty().withMessage('Pickup Latitude is required'),
            (0, express_validator_1.body)('pickup_longitude').notEmpty().withMessage('Pickup Longitude is required'),
            (0, express_validator_1.body)('delivery_latitude').notEmpty().withMessage('Delivery Latitude is required'),
            (0, express_validator_1.body)('delivery_longitude').notEmpty().withMessage('Delivery Longitude is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        let imageUrl = '';
        if (request.file) {
            const profile_image = request.file.path;
            // Upload image to Cloudinary
            const uploadedImageUrl = await (0, cloudinary_1.default)(profile_image, 'rider_app/images/delivery_images');
            if (uploadedImageUrl) {
                imageUrl = uploadedImageUrl;
            }
            // Delete the local file after uploading
            fs_1.default.unlink(profile_image, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${profile_image}`);
                }
                else {
                    console.log(`File deleted: ${profile_image}`);
                }
            });
        }
        else {
            // Handle case when no file is provided
            return response.status(400).json({ message: 'Package Image is required' });
        }
        const min = 100000;
        const max = 999999;
        const delivery_code = Math.floor(Math.random() * (max - min + 1)) + min;
        // Create coordinate object
        const pickup_coordinate = {
            latitude: parseFloat(pickup_latitude),
            longitude: parseFloat(pickup_longitude), // Convert to number if needed
        };
        const delivery_coordinate = {
            latitude: parseFloat(delivery_latitude),
            longitude: parseFloat(delivery_longitude), // Convert to number if needed
        };
        // Retrieve the list of riders with their current positions
        const riders = await prisma.rider.findMany({
            where: {
                status: "Active",
                is_verified: true,
                current_position: {
                    not: {
                        equals: null
                    }
                }
            }
        });
        if (riders.length === 0) {
            return response.status(404).json({ message: 'No Rider available' });
        }
        // Create a new delivery entry in the database
        const newDelivery = await prisma.delivery.create({
            data: {
                package_name,
                phone_number,
                user_id,
                pickup_location,
                delivery_location,
                delivery_code,
                estimated_delivery_price: price,
                package_image: imageUrl,
                pickup_coordinate,
                delivery_coordinate
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                pickup_coordinate: true,
                delivery_coordinate: true,
                estimated_delivery_price: true,
                delivery_code: true,
                package_image: true,
                is_delivered: true,
                is_pickedup: true,
                status: true,
                rider_id: true,
                user: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                    }
                },
                rider: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                        avg_rating: true,
                        bank_details: true,
                        current_position: true,
                        device_token: true,
                    }
                }
            },
        });
        // Calculate the distance between each rider's current position and the pickup coordinates
        let nearestRider = null;
        let shortestDistance = Infinity;
        for (const rider of riders) {
            const distance = calculateDistance({ latitude: rider.current_position.latitude, longitude: rider.current_position.longitude }, { latitude: pickup_coordinate.latitude, longitude: pickup_coordinate.longitude });
            if (distance < shortestDistance) {
                shortestDistance = distance;
                nearestRider = rider;
            }
        }
        // Function to calculate distance between two coordinates using Haversine formula
        function calculateDistance(coord1, coord2) {
            const earthRadiusKm = 6371; // Radius of the Earth in kilometers
            const dLat = degreesToRadians(coord2.latitude - coord1.latitude);
            const dLon = degreesToRadians(coord2.longitude - coord1.longitude);
            const lat1 = degreesToRadians(coord1.latitude);
            const lat2 = degreesToRadians(coord2.latitude);
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return earthRadiusKm * c;
        }
        function degreesToRadians(degrees) {
            return degrees * (Math.PI / 180);
        }
        if (!nearestRider) {
            return response.status(404).json({ message: 'No rider nearby' });
        }
        const url = `${process.env.ROOT_URL}/rider/order/${newDelivery.id}`;
        const message = `Dear ${nearestRider.fullname}, there's a new order waiting for you on Riderverse. A user in ${pickup_location} needs your expertise to deliver ${package_name} to ${delivery_location}.

    Visit ${url} for more details

    Powered by RiderVerse.net
    `;
        (0, emailSender_1.sendDeliveryRequest)(nearestRider.email, nearestRider, newDelivery);
        (0, sendSMS_1.createDeliverySMS)(nearestRider.phone_number, message);
        if (nearestRider.device_token !== null) {
            const delivery_id = newDelivery.id;
            (0, pushNotification_1.sendDeliveryPushNotification)(nearestRider.device_token, 'Delivery Request', message, delivery_id);
        }
        else {
            console.error('Device token is null. Push notification cannot be sent.');
        }
        return response.status(200).json({ message: 'Delivery Request created', data: newDelivery });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.createDeliveryRequest = createDeliveryRequest;
async function viewAllDelivery(request, response) {
    const user_id = request.user.userId;
    // Check if user_id is not present or undefined
    if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_user = await prisma.user.findUnique({ where: { id: user_id } });
        const role = check_user?.role;
        // Check if the role is not 'User'
        if (role !== 'User') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const allDelivery = await prisma.delivery.findMany({
            where: {
                user_id: user_id
            }, select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                package_image: true,
                is_pickedup: true,
                is_delivered: true,
                status: true,
                rider_id: true,
                user: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                    }
                },
                rider: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                        avg_rating: true,
                        bank_details: true,
                        current_position: true,
                        device_token: true,
                    }
                }
            },
        });
        if (allDelivery.length <= 0) {
            return response.status(404).json({ message: 'No Delivery Found' });
        }
        return response.status(200).json({ data: allDelivery });
    }
    catch (error) {
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.viewAllDelivery = viewAllDelivery;
async function viewSingleDelivery(request, response) {
    const user_id = request.user.userId;
    const id = parseInt(request.query.id, 10);
    // Check if user_id is not present or undefined
    if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_user = await prisma.user.findUnique({ where: { id: user_id } });
        const role = check_user?.role;
        // Check if the role is not 'User'
        if (role !== 'User') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const singleDelivery = await prisma.delivery.findUnique({
            where: {
                id: id,
                user_id: user_id
            }, select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                package_image: true,
                is_pickedup: true,
                is_delivered: true,
                status: true,
                rider_id: true,
                user: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                    }
                },
                rider: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                        avg_rating: true,
                        bank_details: true,
                        current_position: true,
                        device_token: true,
                    }
                }
            },
        });
        if (!singleDelivery) {
            return response.status(404).json({ message: 'No Delivery Found' });
        }
        return response.status(200).json({ data: singleDelivery });
    }
    catch (error) {
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.viewSingleDelivery = viewSingleDelivery;
async function updateDelivery(request, response) {
    const { package_name, phone_number, pickup_location, delivery_location, price } = request.body;
    const user_id = request.user.userId;
    const id = parseInt(request.query.id, 10);
    // Check if user_id is not present or undefined
    if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_user = await prisma.user.findUnique({ where: { id: user_id } });
        const role = check_user?.role;
        // Check if the role is not 'User'
        if (role !== 'User') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        // Validation rules
        const validationRules = [
            (0, express_validator_1.body)('package_name').notEmpty().withMessage('Package Name is required'),
            (0, express_validator_1.body)('phone_number').notEmpty().withMessage('Phone Number is required'),
            (0, express_validator_1.body)('pickup_location').notEmpty().withMessage('Pickup Location is required'),
            (0, express_validator_1.body)('delivery_location').notEmpty().withMessage('Delivery Location is required'),
            (0, express_validator_1.body)('price').notEmpty().withMessage('Estimated Delivery Price is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map((rule) => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        let imageUrl = '';
        if (request.file) {
            const profile_image = request.file.path;
            // Upload image to Cloudinary
            const uploadedImageUrl = await (0, cloudinary_1.default)(profile_image, 'rider_app/images/delivery_images');
            if (uploadedImageUrl) {
                imageUrl = uploadedImageUrl;
            }
            // Delete the local file after uploading
            fs_1.default.unlink(profile_image, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${profile_image}`);
                }
                else {
                    console.log(`File deleted: ${profile_image}`);
                }
            });
        }
        // Create a new delivery entry in the database
        const updateDelivery = await prisma.delivery.update({
            where: {
                id,
                user_id
            },
            data: {
                package_name,
                phone_number,
                user_id,
                pickup_location,
                delivery_location,
                estimated_delivery_price: price,
                ...(imageUrl && { package_image: imageUrl }),
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                package_image: true,
                is_delivered: true,
                is_pickedup: true,
                status: true,
                rider_id: true,
                user: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                    }
                },
                rider: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                        avg_rating: true,
                        bank_details: true,
                        current_position: true,
                        device_token: true,
                    }
                }
            },
        });
        if (!updateDelivery) {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        return response.status(200).json({ message: 'Delivery Request updated', data: updateDelivery });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.updateDelivery = updateDelivery;
async function deleteDelivery(request, response) {
    const user_id = request.user.userId;
    const id = parseInt(request.query.id, 10);
    // Check if user_id is not present or undefined
    if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_user = await prisma.user.findUnique({ where: { id: user_id } });
        const role = check_user?.role;
        // Check if the role is not 'User'
        if (role !== 'User') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        // Create a new delivery entry in the database
        const deleteDelivery = await prisma.delivery.delete({
            where: {
                id,
                user_id
            },
        });
        if (!deleteDelivery) {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        return response.status(204).json({ message: 'Delivery Request was deleted successfully' });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.deleteDelivery = deleteDelivery;
async function confirmDelivery(request, response) {
    const user_id = request.user.userId;
    const delivery_id = parseInt(request.query.delivery_id, 10);
    const rider_id = parseInt(request.query.rider_id, 10);
    // Check if rider_id is not present or undefined
    if (!user_id) {
        response.status(403).json({ message: 'Unauthorized User' });
        return;
    }
    try {
        // Retrieve the user by user_id
        const check_user = await prisma.user.findUnique({ where: { id: user_id } });
        const role = check_user?.role;
        // Check if the role is not 'User'
        if (role !== 'User') {
            response.status(403).json({ message: 'Unauthorized User' });
            return;
        }
        const check_exist = await prisma.delivery.findUnique({
            where: {
                id: delivery_id,
            }
        });
        const userId = check_exist?.user_id;
        const riderId = check_exist?.rider_id;
        if (userId != user_id) {
            return response.status(400).json({ message: "This delivery does not belong to this user" });
        }
        if (riderId != rider_id) {
            return response.status(400).json({ message: "Rider not assigned to this delivery" });
        }
        const updatePickup = await prisma.delivery.update({
            where: {
                id: delivery_id,
                user_id: user_id,
            },
            data: {
                is_delivered: true,
                status: 'Delivered'
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                rider_id: true,
                package_image: true,
                is_pickedup: true,
                is_delivered: true,
                status: true,
                user: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                    }
                },
                rider: true
            }
        });
        const riderAccount = await prisma.bank_details.findFirst({
            where: {
                rider_id: rider_id,
            }
        });
        return response.status(200).json({ message: "Package Picked", data: updatePickup });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.confirmDelivery = confirmDelivery;

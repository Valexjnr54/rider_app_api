"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDelivery = exports.updateDelivery = exports.viewSingleDelivery = exports.viewAllDelivery = exports.createDeliveryRequest = void 0;
const models_1 = require("../../models");
const express_validator_1 = require("express-validator");
const cloudinary_1 = __importDefault(require("../../utils/cloudinary"));
const fs_1 = __importDefault(require("fs"));
const emailSender_1 = require("../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function createDeliveryRequest(request, response) {
    const { package_name, phone_number, pickup_location, delivery_location, price, landmark } = request.body;
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
            (0, express_validator_1.body)('landmark').notEmpty().withMessage('Landmark is required'),
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
        // Create a new delivery entry in the database
        const newDelivery = await prisma.delivery.create({
            data: {
                package_name,
                phone_number,
                user_id,
                pickup_location,
                delivery_location,
                estimated_delivery_price: price,
                package_image: imageUrl,
                landmark: landmark
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                landmark: true,
                package_image: true,
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
                    }
                }
            },
        });
        const riders = await prisma.rider.findMany({
            where: {
                operating_areas: {
                    array_contains: landmark
                }
            }, select: {
                id: true,
                fullname: true,
                username: true,
                email: true,
                phone_number: true,
                profile_image: true,
                avg_rating: true,
            }
        });
        riders.forEach(rider => {
            (0, emailSender_1.sendDeliveryRequest)(rider.email, rider, newDelivery);
        });
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
                    }
                }
            },
        });
        if (allDelivery.length > 0) {
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
    const id = parseInt(request.params.id, 10);
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
    const id = parseInt(request.params.id, 10);
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
    const id = parseInt(request.params.id, 10);
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

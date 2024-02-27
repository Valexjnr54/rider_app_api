"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectDelivery = exports.acceptDelivery = exports.updateIpAddressCurrentPosition = exports.confirmDelivery = exports.deliveryCode = exports.allOperatingArea = void 0;
const models_1 = require("../models");
const express_validator_1 = require("express-validator");
const pushNotification_1 = require("../utils/pushNotification");
const emailSender_1 = require("../utils/emailSender");
const sendSMS_1 = require("../utils/sendSMS");
const prisma = new models_1.PrismaClient();
async function allOperatingArea(request, response) {
    try {
        const allOperatingArea = await prisma.operating_areas.findMany({
            select: {
                id: true,
                name: true,
                status: true,
                createdAt: true,
                updatedAt: true
            }
        });
        if (allOperatingArea.length <= 0) {
            return response.status(404).json({ message: 'No Record Found' });
        }
        return response.status(200).json({ message: 'All Operating Areas', data: allOperatingArea });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.allOperatingArea = allOperatingArea;
async function deliveryCode(request, response) {
    const delivery_code = parseInt(request.query.delivery_code, 10);
    try {
        const delivery = await prisma.delivery.findUnique({
            where: {
                delivery_code
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
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
                        bank_details: true
                    }
                }
            },
        });
        if (!delivery) {
            return response.status(404).json({ message: 'Delivery Does not Exist' });
        }
        return response.status(200).json({ message: 'Delivery Details', data: delivery });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.deliveryCode = deliveryCode;
async function confirmDelivery(request, response) {
    const delivery_code = parseInt(request.query.delivery_code, 10);
    try {
        const delivery = await prisma.delivery.update({
            data: {
                is_delivered: true,
                status: 'Delivered'
            },
            where: {
                delivery_code
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
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
                    }
                }
            },
        });
        if (!delivery) {
            return response.status(404).json({ message: 'No Record Found' });
        }
        return response.status(200).json({ message: 'Delivery Details', data: delivery });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.confirmDelivery = confirmDelivery;
async function updateIpAddressCurrentPosition(request, response) {
    const { ip_address, current_position } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)('ip_address').notEmpty().withMessage('IP Address is required'),
            (0, express_validator_1.body)('current_position').notEmpty().withMessage('Current Coordinate is required'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Check if the email is already registered
        const existingRider = await prisma.rider.findUnique({ where: { ip_address } });
        if (!existingRider) {
            return response.status(404).json({ message: 'Rider not Found' });
        }
        const updateDetail = await prisma.rider.update({
            where: {
                ip_address
            },
            data: {
                current_position
            },
            select: {
                id: true,
                fullname: true,
                email: true,
                username: true,
                phone_number: true,
                ip_address: true,
                current_position: true,
            }
        });
        return response.status(200).json({ message: 'Rider Current Position updated', data: updateDetail });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
exports.updateIpAddressCurrentPosition = updateIpAddressCurrentPosition;
async function acceptDelivery(request, response) {
    const { ip_address, delivery_id } = request.body;
    // Check if rider_id is not present or undefined
    if (!ip_address) {
        response.status(403).json({ message: 'Unauthorized User' });
        return;
    }
    try {
        // Retrieve the user by rider_id
        const check_user = await prisma.rider.findUnique({ where: { ip_address } });
        const role = check_user?.role;
        const rider_id = check_user?.id;
        // Check if the role is not 'User'
        if (role !== 'Rider') {
            response.status(403).json({ message: 'Unauthorized User' });
            return;
        }
        const updateDeliveryRecord = await prisma.delivery.update({
            where: {
                id: delivery_id
            },
            data: {
                rider_id: rider_id
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                pickup_coordinate: true,
                delivery_coordinate: true,
                delivery_code: true,
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
                        ip_address: true,
                        current_position: true,
                        device_token: true,
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
                        ip_address: true,
                        current_position: true,
                        device_token: true,
                    }
                }
            }
        });
        if (updateDeliveryRecord) {
            // const url = `${process.env.ROOT_URL}/rider/order/${delivery_id}`
            const message = `Dear ${updateDeliveryRecord.user.fullname}, a rider is on his way to pickup your package ${updateDeliveryRecord.package_name}. . Powered by RiderVerse.net`;
            if (updateDeliveryRecord.user.device_token !== null) {
                const delivery_id = updateDeliveryRecord.id;
                (0, pushNotification_1.sendDeliveryPushNotification)(updateDeliveryRecord.user.device_token, "Delivery request accepted", message, delivery_id);
            }
            else {
                console.error('Device token is null. Push notification cannot be sent.');
            }
        }
        else {
            return response.status(400).json({ message: 'Request Failed' });
        }
        return response.status(200).json({ message: 'Delivery Request updated', data: updateDeliveryRecord });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.acceptDelivery = acceptDelivery;
async function rejectDelivery(request, response) {
    const { ip_address, delivery_id } = request.body;
    // Check if rider_id is not present or undefined
    if (!ip_address) {
        response.status(403).json({ message: 'Unauthorized User' });
        return;
    }
    try {
        // Retrieve the user by rider_id
        const check_user = await prisma.rider.findUnique({ where: { ip_address } });
        const role = check_user?.role;
        const rider_id = check_user?.id;
        // Check if the role is not 'User'
        if (role !== 'Rider') {
            response.status(403).json({ message: 'Unauthorized User' });
            return;
        }
        const riders = await prisma.rider.findMany({
            where: {
                id: {
                    not: rider_id,
                },
                status: "Active",
                is_verified: true,
            }
        });
        const delivery = await prisma.delivery.findUnique({
            where: {
                id: delivery_id
            }
        });
        // Calculate the distance between each rider's current position and the pickup coordinates
        let nearestRider = null;
        let shortestDistance = Infinity;
        for (const rider of riders) {
            const distance = calculateDistance({ latitude: rider.current_position.latitude, longitude: rider.current_position.longitude }, { latitude: (delivery?.pickup_coordinate).latitude, longitude: (delivery?.pickup_coordinate).longitude });
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
            return response.status(404).json({ message: 'No riders available' });
        }
        const url = `${process.env.ROOT_URL}/rider/order/${delivery?.id}`;
        const message = `Dear ${nearestRider.fullname}, there's a new order waiting for you on Riderverse. A user in ${delivery?.pickup_location} needs your expertise to deliver ${delivery?.package_name} to ${delivery?.delivery_location}.

    Visit ${url} for more details

    Powered by RiderVerse.net
    `;
        if (delivery !== null) {
            (0, emailSender_1.sendDeliveryRequest)(nearestRider.email, nearestRider, delivery);
            (0, sendSMS_1.createDeliverySMS)(nearestRider.phone_number, message);
        }
        if (nearestRider.device_token !== null) {
            if (delivery !== null) {
                const delivery_id = delivery.id;
                (0, pushNotification_1.sendDeliveryPushNotification)(nearestRider.device_token, 'Delivery Request', message, delivery_id);
            }
        }
        else {
            console.error('Device token is null. Push notification cannot be sent.');
        }
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.rejectDelivery = rejectDelivery;

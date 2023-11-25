"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickDelivery = void 0;
const models_1 = require("../../models");
const prisma = new models_1.PrismaClient();
async function pickDelivery(request, response) {
    const rider_id = request.user.riderId;
    const delivery_id = parseInt(request.query.delivery_id, 10);
    // Check if rider_id is not present or undefined
    if (!rider_id) {
        response.status(403).json({ message: 'Unauthorized User' });
        return;
    }
    try {
        // Retrieve the user by user_id
        const check_rider = await prisma.rider.findUnique({ where: { id: rider_id } });
        const role = check_rider?.role;
        // Check if the role is not 'User'
        if (role !== 'Rider') {
            response.status(403).json({ message: 'Unauthorized User' });
            return;
        }
        const check_exist = await prisma.delivery.findUnique({
            where: {
                id: delivery_id,
            }
        });
        const riderId = check_exist?.rider_id;
        if (riderId != rider_id) {
            return response.status(404).json({ message: "Rider not assigned this delivery" });
        }
        const updatePickup = await prisma.delivery.update({
            where: {
                id: delivery_id,
                rider_id: rider_id,
            },
            data: {
                is_pickedup: true,
                status: 'Pending'
            },
            select: {
                id: true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                package_image: true,
                is_pickedup: true,
                is_delivered: true,
                user: {
                    select: {
                        id: true,
                        fullname: true,
                        username: true,
                        email: true,
                        phone_number: true,
                        profile_image: true,
                    }
                }
            }
        });
        return response.status(200).json({ message: "Package Picked", data: updatePickup });
    }
    catch (error) {
        return response.status(500).json({ message: error });
    }
}
exports.pickDelivery = pickDelivery;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allOperatingArea = void 0;
const models_1 = require("../models");
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

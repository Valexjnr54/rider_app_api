// src/routes/userRoutes.ts
import express from 'express';
import { 
    acceptDelivery, 
    allOperatingArea, 
    confirmDelivery, 
    deliveryCode, 
    rejectDelivery, 
    updateIpAddressCurrentPosition 
} from '../controllers/miscellaneousController';

export const router = express.Router();

router.get('/operating_areas', allOperatingArea)
router.get('/delivery-detail', deliveryCode)
router.get('/confirm-delivery', confirmDelivery)
router.put('/update-current-location',  updateIpAddressCurrentPosition);
router.put('/accept-delivery-notification',  acceptDelivery);
router.put('/reject-delivery-notification',  rejectDelivery);
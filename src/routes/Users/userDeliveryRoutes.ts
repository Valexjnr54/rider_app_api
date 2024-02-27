// src/routes/userRoutes.ts
import express from 'express';
import { confirmDelivery, createDeliveryRequest, deleteDelivery, updateDelivery, viewAllDelivery, viewSingleDelivery } from '../../controllers/UserControllers/deliveryController';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { upload } from '../../middlewares/multerMiddleware';

export const userDeliveryRouter = express.Router();

// userRouter.put('/profile', authenticateJWT, updateUserProfile);
userDeliveryRouter.post('/create-delivery', authenticateJWT, upload.single('package_image'), createDeliveryRequest);
userDeliveryRouter.get('/view-all-delivery', authenticateJWT, viewAllDelivery);
userDeliveryRouter.get('/view-single-delivery', authenticateJWT, viewSingleDelivery);
userDeliveryRouter.put('/update-delivery', authenticateJWT, upload.single('package_image'), updateDelivery);
userDeliveryRouter.delete('/delete-delivery', authenticateJWT, deleteDelivery);
userDeliveryRouter.put('/confirm-delivery', authenticateJWT, confirmDelivery);
// export default userRouter;

// src/routes/userRoutes.ts
import express from 'express';
import { allOperatingArea } from '../controllers/miscellaneousController';

export const router = express.Router();

router.get('/operating_areas', allOperatingArea)



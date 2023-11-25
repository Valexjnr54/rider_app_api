import { Request, Response } from 'express';
import { PrismaClient, User } from '../models';
import { Config } from '../config/config';
import { body, validationResult } from 'express-validator';
import fs from 'fs';

const prisma = new PrismaClient();

export async function allOperatingArea(request: Request, response: Response) {
  try {
    const allOperatingArea = await prisma.operating_areas.findMany({
        select:{
            id:true,
            name:true,
            status:true,
            createdAt: true,
            updatedAt: true
        }
    })

    if(allOperatingArea.length <= 0){
        return response.status(404).json({ message: 'No Record Found'})
    }
    
    return response.status(200).json({ message: 'All Operating Areas', data: allOperatingArea });
  } catch (error) {
    return response.status(500).json({ message: error})
  }
}
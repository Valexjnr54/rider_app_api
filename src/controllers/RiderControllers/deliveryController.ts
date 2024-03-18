import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { sendDeliveryCodeSMS, createDeliverySMS } from '../../utils/sendSMS';
import { sendDeliveryRequest } from '../../utils/emailSender';
import { sendDeliveryPushNotification } from '../../utils/pushNotification';

interface Coordinate {
  latitude: number;
  longitude: number;
}

const prisma = new PrismaClient();

export async function viewAllDelivery(request: Request, response: Response) {
    const rider_id = request.user.riderId;
  
    // Check if rider_id is not present or undefined
    if (!rider_id) {
      return response.status(403).json({ message: 'Unauthorized User' });
    }
  
    try {
      // Retrieve the rider by rider_id
      const check_rider = await prisma.rider.findUnique({ where: { id: rider_id } });
      const role = check_rider?.role;
  
      // Check if the role is not 'rider'
      if (role !== 'Rider') {
        return response.status(403).json({ message: 'Unauthorized User' });
      }
  
      const allDelivery = await prisma.delivery.findMany({
        select: {
          id:true,
          package_name: true,
          phone_number: true,
          pickup_location: true,
          delivery_location: true,
          estimated_delivery_price: true,
          package_image: true,
          is_pickedup:true,
          is_delivered:true,
          status:true,
          rider_id:true,
          user:{
            select: {
              id:true,
              fullname:true,
              username:true,
              email:true,
              phone_number:true,
              profile_image:true,
            }
          },
          rider:{
            select:{
              id:true,
              fullname:true,
              username:true,
              email:true,
              phone_number:true,
              profile_image:true,
              avg_rating:true,
              bank_details:true,
            }
          }
        },
      });
      if(allDelivery.length <= 0){
        return response.status(404).json({ message: 'No Delivery Found' });
      }
      return response.status(200).json({ data: allDelivery });
    } catch (error) {
      return response.status(500).json({ message: 'Internal Server Error' });
    }
}
  
export async function viewSingleDelivery(request: Request, response: Response) {
  const rider_id = request.user.riderId;
  const id: number = parseInt(request.query.id as string, 10)


  // Check if rider_id is not present or undefined
  if (!rider_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the rider by rider_id
    const check_rider = await prisma.rider.findUnique({ where: { id: rider_id } });
    const role = check_rider?.role;

    // Check if the role is not 'rider'
    if (role !== 'Rider') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const singleDelivery = await prisma.delivery.findUnique({
      where: {
        id: id,
      },select: {
        id:true,
        package_name: true,
        phone_number: true,
        pickup_location: true,
        delivery_location: true,
        estimated_delivery_price: true,
        package_image: true,
        is_pickedup:true,
        is_delivered:true,
        status:true,
        rider_id:true,
        user:{
          select: {
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            profile_image:true,
          }
        },
        rider:{
          select:{
            id:true,
            fullname:true,
            username:true,
            email:true,
            phone_number:true,
            profile_image:true,
            avg_rating:true,
            bank_details:true,
          }
        }
      },
    });
    if (!singleDelivery) {
      return response.status(404).json({ message: 'No Delivery Found' });
    }
    return response.status(200).json({ data: singleDelivery });
  } catch (error) {
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function pickDelivery(request: Request, response: Response) {
    const rider_id = request.user.riderId;
    const delivery_id = parseInt(request.query.delivery_id as string, 10);

    // Check if rider_id is not present or undefined
    if (!rider_id) {
        response.status(403).json({ message: 'Unauthorized User' });
        return;
    }

    try {
        // Retrieve the user by rider_id
        const check_rider = await prisma.rider.findUnique({ where: { id: rider_id } });
        const role = check_rider?.role;

        // Check if the role is not 'User'
        if (role !== 'Rider') {
            response.status(403).json({ message: 'Unauthorized User' });
            return;
        }

        const check_exist = await prisma.delivery.findUnique({
            where:{
                id: delivery_id,
            }
        })
        const riderId = check_exist?.rider_id;
        if (riderId != rider_id) {
            return response.status(404).json({ message: "Rider not assigned this delivery"})
        }

        const updatePickup = await prisma.delivery.update({
            where:{
                id: delivery_id,
                rider_id: rider_id,
            },
            data:{
                is_pickedup: true,
                status: 'Pending'
            },
            select:{
                id:true,
                package_name: true,
                phone_number: true,
                pickup_location: true,
                delivery_location: true,
                estimated_delivery_price: true,
                package_image: true,
                is_pickedup: true,
                is_delivered: true,
                status:true,
                rider_id:true,
                delivery_code:true,
                user:{
                    select: {
                      id:true,
                      fullname:true,
                      username:true,
                      email:true,
                      phone_number:true,
                      profile_image:true,
                    }
                }
            }
        })
        
        const url = `${process.env.ROOT_URL}/confirm-delivery`
        const message = `Dear ${updatePickup.user.fullname}, a delivery Package is on its way to ${updatePickup.phone_number} now, please use this delivery code ${updatePickup.delivery_code} to confirm your delivery. When the Package gets to you, click on the link ${url} and input the delivery code to confirm delivery. 
        Powered by RidersVerse.net`

        sendDeliveryCodeSMS(updatePickup.user.phone_number,message)
        return response.status(200).json({ message: "Package Picked", data: updatePickup})
    } catch (error) {
        return response.status(500).json({ message: error})
    }
}

export async function acceptDelivery(request:Request, response:Response) {
  const rider_id = request.user.riderId;
  const delivery_id = parseInt(request.query.delivery_id as string, 10);

  // Check if rider_id is not present or undefined
  if (!rider_id) {
    response.status(403).json({ message: 'Unauthorized User' });
    return;
  }

  try {
      // Retrieve the user by rider_id
      const check_user = await prisma.rider.findUnique({ where: { id: rider_id } });
      const role = check_user?.role;
  
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
            id:true,
            package_name: true,
            phone_number: true,
            pickup_location: true,
            delivery_location: true,
            pickup_coordinate:true,
            delivery_coordinate:true,
            delivery_code:true,
            estimated_delivery_price: true,
            package_image: true,
            is_delivered:true,
            is_pickedup:true,
            status:true,
            rider_id:true,
            user:{
              select: {
                id:true,
                fullname:true,
                username:true,
                email:true,
                phone_number:true,
                profile_image:true,
                current_position:true,
                device_token: true,
              }
            },
            rider:{
              select:{
                id:true,
                fullname:true,
                username:true,
                email:true,
                phone_number:true,
                profile_image:true,
                avg_rating:true,
                bank_details:true,
                current_position:true,
                device_token: true,
              }
            }
          }
      });

      if (updateDeliveryRecord) {
  
      // const url = `${process.env.ROOT_URL}/rider/order/${delivery_id}`
  
      const message = `Dear ${updateDeliveryRecord.user.fullname}, a rider is on his way to pickup your package ${updateDeliveryRecord.package_name}. . Powered by RiderVerse.net`

      if(updateDeliveryRecord.user.device_token !== null)
      {
        const delivery_id = updateDeliveryRecord.id
        sendDeliveryPushNotification(updateDeliveryRecord.user.device_token,"Delivery request accepted", message, delivery_id)
      }else {
        console.error('Device token is null. Push notification cannot be sent.');
      }

      } else {
          return response.status(400).json({message: 'Request Failed'})
      }

      return response.status(200).json({ message: 'Delivery Request updated', data: updateDeliveryRecord });
  } catch (error) {
      return response.status(500).json({message: error});
  }
}

export async function rejectDelivery(request:Request, response:Response) {
  const rider_id = request.user.riderId;
  const delivery_id = parseInt(request.query.delivery_id as string, 10);

  // Check if rider_id is not present or undefined
  if (!rider_id) {
    response.status(403).json({ message: 'Unauthorized User' });
    return;
  }

  try {
      // Retrieve the user by rider_id
      const check_user = await prisma.rider.findUnique({ where: { id: rider_id } });
      const role = check_user?.role;
  
      // Check if the role is not 'User'
      if (role !== 'Rider') {
          response.status(403).json({ message: 'Unauthorized User' });
          return;
      }

      const riders = await prisma.rider.findMany({
        where:{
          id: {
            not: rider_id,
          },
          status: "Active",
          is_verified: true,
          current_position: {
            not: {
              equals: null
            }
          }
        }
      });

      const delivery = await prisma.delivery.findUnique({
        where:{
          id: delivery_id
        }
      });

      // Calculate the distance between each rider's current position and the pickup coordinates
      let nearestRider = null;
      let shortestDistance = Infinity;

      for (const rider of riders) {
          const distance = calculateDistance(
              { latitude: (rider.current_position as unknown as Coordinate).latitude, longitude: (rider.current_position as unknown as Coordinate).longitude },
              { latitude: (delivery?.pickup_coordinate as unknown as Coordinate).latitude, longitude: (delivery?.pickup_coordinate as unknown as Coordinate).longitude }
          );

          if (distance < shortestDistance) {
              shortestDistance = distance;
              nearestRider = rider;
          }
      }
      // Function to calculate distance between two coordinates using Haversine formula
      function calculateDistance(coord1: Coordinate, coord2: Coordinate): any {
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

      function degreesToRadians(degrees: number): number {
        return degrees * (Math.PI / 180);
      }

      if (!nearestRider) {
        return response.status(404).json({ message:'No riders available' });
      }

    const url = `${process.env.ROOT_URL}/rider/order/${delivery?.id}`

    const message = `Dear ${nearestRider.fullname}, there's a new order waiting for you on Riderverse. A user in ${delivery?.pickup_location} needs your expertise to deliver ${delivery?.package_name} to ${delivery?.delivery_location}.

    Visit ${url} for more details

    Powered by RiderVerse.net
    `

    if (delivery !== null) {
      sendDeliveryRequest(nearestRider.email, nearestRider, delivery)
      createDeliverySMS(nearestRider.phone_number,message)
    }

    if (nearestRider.device_token !== null) {
      if (delivery !== null) {
        const delivery_id = delivery.id
        sendDeliveryPushNotification(nearestRider.device_token,'Delivery Request', message, delivery_id)
      }
    } else {
        console.error('Device token is null. Push notification cannot be sent.');
    }
  } catch (error) {
      return response.status(500).json({message: error});
  }
}
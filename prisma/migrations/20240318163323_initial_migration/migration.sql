-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Available', 'Pending', 'Delivered', 'Rejected', 'Approved', 'Inactive', 'Active', 'Suspend');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('User', 'Rider', 'Admin');

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Admin',
    "profile_image" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "device_token" TEXT,
    "current_position" JSONB,
    "role" "Role" NOT NULL DEFAULT 'User',
    "profile_image" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rider" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "device_token" TEXT,
    "current_position" JSONB,
    "role" "Role" NOT NULL DEFAULT 'Rider',
    "profile_image" TEXT NOT NULL,
    "avg_rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "password" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Inactive',
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "package_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "pickup_location" TEXT NOT NULL,
    "delivery_location" TEXT NOT NULL,
    "pickup_coordinate" JSONB NOT NULL,
    "delivery_coordinate" JSONB NOT NULL,
    "estimated_delivery_price" TEXT NOT NULL,
    "package_image" TEXT NOT NULL,
    "rider_id" INTEGER,
    "delivery_code" INTEGER,
    "is_pickedup" BOOLEAN NOT NULL DEFAULT false,
    "is_delivered" BOOLEAN NOT NULL DEFAULT false,
    "status" "Status" NOT NULL DEFAULT 'Available',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operating_areas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Available',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Operating_areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank_details" (
    "id" SERIAL NOT NULL,
    "rider_id" INTEGER NOT NULL,
    "bank_name" TEXT NOT NULL,
    "account_name" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bank_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rider_rating" (
    "id" SERIAL NOT NULL,
    "rider_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rider_rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rider_credentials" (
    "id" SERIAL NOT NULL,
    "rider_id" INTEGER NOT NULL,
    "nin" TEXT NOT NULL,
    "nin_image" TEXT,
    "driver_license" TEXT NOT NULL,
    "driver_license_image" TEXT,
    "plate_number" TEXT NOT NULL,
    "vehicle_image" TEXT,
    "status" "Status" NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rider_credentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "User_device_token_key" ON "User"("device_token");

-- CreateIndex
CREATE UNIQUE INDEX "Rider_username_key" ON "Rider"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Rider_email_key" ON "Rider"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Rider_phone_number_key" ON "Rider"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Rider_device_token_key" ON "Rider"("device_token");

-- CreateIndex
CREATE UNIQUE INDEX "Delivery_delivery_code_key" ON "Delivery"("delivery_code");

-- CreateIndex
CREATE UNIQUE INDEX "Bank_details_rider_id_key" ON "Bank_details"("rider_id");

-- CreateIndex
CREATE UNIQUE INDEX "Rider_credentials_nin_key" ON "Rider_credentials"("nin");

-- CreateIndex
CREATE UNIQUE INDEX "Rider_credentials_driver_license_key" ON "Rider_credentials"("driver_license");

-- CreateIndex
CREATE UNIQUE INDEX "Rider_credentials_plate_number_key" ON "Rider_credentials"("plate_number");

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_rider_id_fkey" FOREIGN KEY ("rider_id") REFERENCES "Rider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank_details" ADD CONSTRAINT "Bank_details_rider_id_fkey" FOREIGN KEY ("rider_id") REFERENCES "Rider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rider_rating" ADD CONSTRAINT "Rider_rating_rider_id_fkey" FOREIGN KEY ("rider_id") REFERENCES "Rider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rider_rating" ADD CONSTRAINT "Rider_rating_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rider_credentials" ADD CONSTRAINT "Rider_credentials_rider_id_fkey" FOREIGN KEY ("rider_id") REFERENCES "Rider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

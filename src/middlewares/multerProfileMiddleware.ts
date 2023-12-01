import multer from 'multer';
const storage = multer.memoryStorage();

  export const upload = multer({ storage: storage });

  export const riderCredentials = upload.fields([
    { name: 'nin_image', maxCount: 1 },
    { name: 'driver_license_image', maxCount: 1 },
    { name: 'vehicle_image', maxCount: 1 },
  ]);
//   module.exports = upload;
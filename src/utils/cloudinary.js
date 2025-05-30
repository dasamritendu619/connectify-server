import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (filePath) => {
    try {
        if (!filePath) return null;
        // Upload image on cloudinary
        const responce = await cloudinary.uploader.upload(filePath,{resource_type:"auto",folder:"/connectify"});
        // Remove image from local storage
        fs.unlinkSync(filePath);
        return responce;
    } catch (error) {
        // Remove image from local storage
        fs.unlinkSync(filePath);
        return null;
    }
}

const deleteFromCloudinary = async (public_id) => {
  try {
    // Delete image from cloudinary
    const publicArr = public_id.split("/");
    const publicId = publicArr[1]+"/"+publicArr[2];
    const responce = await cloudinary.uploader.destroy(publicId);
    return responce;
  } catch (error) {
    return null;
  }
}

export {uploadOnCloudinary,deleteFromCloudinary}
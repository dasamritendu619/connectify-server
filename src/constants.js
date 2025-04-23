const DB_NAME = 'Connectify';
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_URI;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

const DEFAULT_AVATAR = 'https://res.cloudinary.com/dqufodszt/image/upload/v1745393003/connectify/illustration-businessman_53876-5856_1_-min_qkfjho_ptm569.jpg';
const DEFAULT_COVER_PHOTO= 'https://res.cloudinary.com/dqufodszt/image/upload/v1745393063/connectify/CM-hero-bg_2x_rtcdou_wdalf8.jpg';
const DEFAULT_GROUP_ICON = 'https://res.cloudinary.com/dqufodszt/image/upload/v1745394024/connectify/image_qg6trs_gyxonr.png'; 
const DEFAULT_GROUP_BANNER='https://res.cloudinary.com/dqufodszt/image/upload/v1745394081/connectify/group_cover_jc1vab.webp';
const CONNECTIFY_LOGO = 'https://res.cloudinary.com/dqufodszt/image/upload/v1745392511/connectify/pwa-192x192_h90iup.png'


export { 
    DB_NAME, 
    PORT, 
    DB_URL, 
    CLOUDINARY_CLOUD_NAME, 
    CLOUDINARY_API_KEY, 
    CLOUDINARY_API_SECRET,
    DEFAULT_AVATAR,
    DEFAULT_COVER_PHOTO,
    DEFAULT_GROUP_ICON,
    DEFAULT_GROUP_BANNER,
    CONNECTIFY_LOGO,
};

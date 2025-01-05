const env = import.meta.env

export const VITE_DEVELOPMENT_MODE = env.VITE_DEVELOPMENT_MODE === 'true'
export const VITE_API_URL = env.VITE_API_URL ?? ''
export const VITE_CLOUDINARY_CLOUD_NAME = env.VITE_CLOUDINARY_CLOUD_NAME ?? ''
export const VITE_CLOUDINARY_API_KEY = env.VITE_CLOUDINARY_API_KEY ?? ''
export const VITE_GOOGLE_CLIENT_ID = env.VITE_GOOGLE_CLIENT_ID ?? ''

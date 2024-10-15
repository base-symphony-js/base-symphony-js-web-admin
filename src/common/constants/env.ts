/*
 * Copyright (c) 2024 Luis Solano. All rights reserved.
 * Licensed under the MIT License. See the LICENSE file in the root of this repository for more information.
 */
const env = import.meta.env

export const VITE_API_URL = env.VITE_API_URL ?? ''

export const VITE_CLOUDINARY_CLOUD_NAME = env.VITE_CLOUDINARY_CLOUD_NAME ?? ''
export const VITE_CLOUDINARY_API_KEY = env.VITE_CLOUDINARY_API_KEY ?? ''

export const VITE_GOOGLE_CLIENT_ID = env.VITE_GOOGLE_CLIENT_ID ?? ''

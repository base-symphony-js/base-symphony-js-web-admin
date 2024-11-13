import { VITE_CLOUDINARY_CLOUD_NAME } from '@common'

export interface ICloudinarySignature {
  api_key: string
  timestamp: string
  signature: string
  folder: string
}

export const cloudinaryUploadFile = async (
  signature: ICloudinarySignature,
  file: File,
) => {
  let url = ''
  try {
    const formData = new FormData()
    formData.append('file', file!)
    formData.append('api_key', signature.api_key)
    formData.append('timestamp', signature.timestamp)
    formData.append('signature', signature.signature)
    formData.append('folder', signature.folder)
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      },
    )
    const data = await response.json()
    url = data.url
  } catch (error) {
    console.log(error)
  }
  return url
}

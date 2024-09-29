import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const apiInterceptor = async () => {
  // Add a request interceptor
  api.interceptors.request.use(
    config => {
      return config
    },
    error => {
      return Promise.reject(error)
    },
  )

  // Add a response interceptor
  api.interceptors.response.use(
    response => {
      return response
    },
    error => {
      return Promise.reject(error)
    },
  )
}

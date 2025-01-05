import { api } from '@config'
import { IDataResponse, IRequest } from '@interfaces'

export const apiGetProfile = async () => {
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = '/profile'
    const response = await api.get(url)
    dataResponse.success = response.status >= 200 || response.status < 300
    dataResponse.statusCode = response.status
    dataResponse.message = response.data?.message
    dataResponse.data = response.data?.data
    return dataResponse
  } catch (error) {
    if (!error.response) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`
      dataResponse.data = error
    } else {
      dataResponse.statusCode = error.response.status
      dataResponse.message = error.response.data?.message || error.message
      dataResponse.data = error.response.data?.data || null
    }
    return dataResponse
  }
}

export const apiUpdateProfile = async (request: IRequest) => {
  const { body } = request
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = '/profile'
    const response = await api.put(url, body)
    dataResponse.success = response.status >= 200 || response.status < 300
    dataResponse.statusCode = response.status
    dataResponse.message = response.data?.message
    dataResponse.data = response.data?.data
    return dataResponse
  } catch (error) {
    if (!error.response) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`
      dataResponse.data = error
    } else {
      dataResponse.statusCode = error.response.status
      dataResponse.message = error.response.data?.message || error.message
      dataResponse.data = error.response.data?.data || null
    }
    return dataResponse
  }
}

export const apiUpdateEmailSendOtp = async (request: IRequest) => {
  const { body } = request
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = '/profile/email/send-otp'
    const response = await api.put(url, body)
    dataResponse.success = response.status >= 200 || response.status < 300
    dataResponse.statusCode = response.status
    dataResponse.message = response.data?.message
    dataResponse.data = response.data?.data
    return dataResponse
  } catch (error) {
    if (!error.response) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`
      dataResponse.data = error
    } else {
      dataResponse.statusCode = error.response.status
      dataResponse.message = error.response.data?.message || error.message
      dataResponse.data = error.response.data?.data || null
    }
    return dataResponse
  }
}

export const apiUpdateEmail = async (request: IRequest) => {
  const { body } = request
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = '/profile/email'
    const response = await api.put(url, body)
    dataResponse.success = response.status >= 200 || response.status < 300
    dataResponse.statusCode = response.status
    dataResponse.message = response.data?.message
    dataResponse.data = response.data?.data
    return dataResponse
  } catch (error) {
    if (!error.response) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`
      dataResponse.data = error
    } else {
      dataResponse.statusCode = error.response.status
      dataResponse.message = error.response.data?.message || error.message
      dataResponse.data = error.response.data?.data || null
    }
    return dataResponse
  }
}

export const apiUpdatePassword = async (request: IRequest) => {
  const { body } = request
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = '/profile/password'
    const response = await api.put(url, body)
    dataResponse.success = response.status >= 200 || response.status < 300
    dataResponse.statusCode = response.status
    dataResponse.message = response.data?.message
    dataResponse.data = response.data?.data
    return dataResponse
  } catch (error) {
    if (!error.response) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`
      dataResponse.data = error
    } else {
      dataResponse.statusCode = error.response.status
      dataResponse.message = error.response.data?.message || error.message
      dataResponse.data = error.response.data?.data || null
    }
    return dataResponse
  }
}

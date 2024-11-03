import { api } from '@config'
import { IDataResponse, IRequest } from '@interfaces'

export const apiGetUsers = async (_request: IRequest) => {
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = '/security/users'
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

export const apiGetUser = async (request: IRequest) => {
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = `/security/users/${request.params?.idUser}`
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

export const apiDisableUser = async (request: IRequest) => {
  const { params } = request
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = `/security/users/${params.idUser}/disable`
    const response = await api.patch(url)
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

export const apiUnlockedUser = async (request: IRequest) => {
  const { params } = request
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = `/security/users/${params.idUser}/unlock`
    const response = await api.patch(url)
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

export const apiDeleteUser = async (request: IRequest) => {
  const { params } = request
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = `/security/users/${params.idUser}`
    const response = await api.delete(url)
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

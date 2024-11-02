import { api } from '@config'
import { IDataResponse } from '@interfaces'

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
      const msg = error.response.data?.message || error.message
      dataResponse.statusCode = error.response.status
      dataResponse.message = `${msg}: ` + error.response.data?.data?.toString()
      dataResponse.data = error.response.data?.data || null
    }
    return dataResponse
  }
}

export const apiGetRoles = async () => {
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = '/profile/roles'
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
      const msg = error.response.data?.message || error.message
      dataResponse.statusCode = error.response.status
      dataResponse.message = `${msg}: ` + error.response.data?.data?.toString()
      dataResponse.data = error.response.data?.data || null
    }
    return dataResponse
  }
}

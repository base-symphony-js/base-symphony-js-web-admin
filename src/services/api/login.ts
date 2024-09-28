import { api } from '../../common'

interface IRequest {
  params?: object
  body?: object
  query?: object
}

interface IDataResponse {
  success: boolean
  statusCode: number
  message: string
  data: any
}

export const apiLogin = async (request: IRequest) => {
  const { body } = request
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = 'http://localhost:3000/api/auth/login/email-and-pass'
    const response = await api.post(url, body)
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

export const apiGetProfile = async () => {
  const dataResponse: IDataResponse = {
    success: false,
    statusCode: 0,
    message: 'Error interno en la aplicación',
    data: null,
  }
  try {
    const url = 'http://localhost:3000/api/profile'
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

export interface IDataResponse {
  success: boolean
  statusCode: number
  message: string
  data: any
}

export interface IRequest {
  params?: any
  body?: any
  query?: any
}

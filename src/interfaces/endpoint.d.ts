export interface IDataResponse {
  success: boolean
  statusCode: number
  message: string
  data: any
}

export interface IRequest {
  params?: object
  body?: object
  query?: object
}

export interface IApiResponse<T> {
  tsmessage: string;
  statusCode: number;
  success: boolean;
  data: T;
}

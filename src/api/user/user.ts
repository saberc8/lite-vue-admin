import { createAxiosByInterceptors } from '@/utils/request'
import { IUserLogin } from './types'
const request = createAxiosByInterceptors({
  baseURL: import.meta.env.VITE_BASE_API,
})

export const appList = (params: any): Promise<any> =>
  request.get('/app', { params })
  
export const userLogin = (data: IUserLogin): Promise<any> => request.post('/login', data)
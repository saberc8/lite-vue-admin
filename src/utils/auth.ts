import { useUserStoreHook } from '@/store/modules/user'

const TOKEN_KEY = 'TOKEN_KEY'
/** 获取`token` */
export function getToken() {
  return localStorage.getItem(TOKEN_KEY) || ''
}

export function setToken(token: string) {
  return localStorage.setItem(TOKEN_KEY, token)
}

/** 删除`token`以及key值为`user-info`的session信息 */
export function removeToken() {
  localStorage.removeItem(TOKEN_KEY)
  const { SET_USERNAME } = useUserStoreHook()
  SET_USERNAME('')
}

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
  return 'Bearer ' + token
}

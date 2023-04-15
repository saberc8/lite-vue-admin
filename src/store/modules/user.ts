import { defineStore } from 'pinia'
import { store } from '@/store'
import { userLogin } from '@/api/user/user'
import { IUserLogin } from '@/api/user/types'
import { setToken } from '@/utils/auth'
import router from '@/router'

export const useUserStore = defineStore({
  id: 'pure-user',
  state: () => ({
    // 用户名
    username: '',
  }),
  actions: {
    /** 存储用户名 */
    SET_USERNAME(username: string) {
      this.username = username
    },
    async userLoginFn(data: IUserLogin) {
      const res = await userLogin(data)
      console.log(res)
      setToken(res.token)
      router.push('/base/dashboard')
    }
  },
})

export function useUserStoreHook() {
  return useUserStore(store)
}

import { UserConfigExport, ConfigEnv, loadEnv } from "vite";
import vue from '@vitejs/plugin-vue'

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, root)
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = env
  const isBuild = command === 'build'
  console.log(env, isBuild)
  return{
    plugins: [vue()],
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        { find: '@', replacement: '/src' },
      ],
    },
    server: {
      https: false,
      host: true,
      port: VITE_PORT,
      proxy: VITE_PROXY,
    },
  }
}

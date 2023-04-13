import { UserConfigExport, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd()

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, root)
  const { VITE_PORT, VITE_BASE_URL, VITE_PROXY } = env
  const isBuild = command === 'build'
  console.log(env, isBuild)
  return {
    plugins: [
      vue(),
      AutoImport({
        // dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
        imports: [
          // 插件预设支持导入的api
          'vue',
          'vue-router',
          'pinia',
        ],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    base: VITE_BASE_URL,
    root,
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    server: {
      https: false,
      host: true,
      port: VITE_PORT,
      proxy: VITE_PROXY,
    },
  }
}

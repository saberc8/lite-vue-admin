import { UserConfigExport, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from "path"
/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd()

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, root)
  const { VITE_PORT, VITE_BASE_URL, VITE_API_URL } = env
  const isBuild = command === 'build'
  console.log(env, isBuild)
  return {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
        // dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
        imports: [
          // 插件预设支持导入的api
          'vue',
          'vue-router',
          'pinia',
        ],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      vue(),
    ],
    base: VITE_BASE_URL,
    root,
    resolve: {
      alias: {
        '@': pathResolve("src"),
      },
    },
    server: {
      https: false,
      host: true,
      port: VITE_PORT as unknown as number,
      proxy: {
        '/api': {
          target: VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      }
    },
  }
}

// core
import { createApp } from "vue"
import App from "@/App.vue"
import store from "@/store/zstp"
import router from "@/router/zstp"
import "@/router/zstp/permission"
// load
import { loadSvg } from "@/icons/zstp"
import { loadPlugins } from "@/plugins/zstp"
import { loadDirectives } from "@/directives/zstp"
// css
import "uno.css"
import "normalize.css"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "vxe-table/lib/style.css"
import "vxe-table-plugin-element/dist/style.css"
import "@/styles/zstp/index.scss"
// 引入 echarts
import * as echarts from "echarts"

const app = createApp(App)

/** 加载插件 */
loadPlugins(app)
/** 加载全局 SVG */
loadSvg(app)
/** 加载自定义指令 */
loadDirectives(app)

// 全局挂载 echarts
app.config.globalProperties.$echarts = echarts
app.use(store).use(router)
router.isReady().then(() => {
  app.mount("#app")
})

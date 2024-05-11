import { type RouteRecordRaw, createRouter } from "vue-router"
import { history, flatMultiLevelRoutes } from "./helper"
import routeSettings from "@/config/route"

const Layouts = () => import("@/layouts/index.vue")

/**
 * 常驻路由
 * 除了 redirect/403/404/login 等隐藏页面，其他页面建议设置 Name 属性
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layouts,
    meta: {
      hidden: true
    },
    children: [
      {
        path: ":path(.*)",
        component: () => import("@/views/redirect/index.vue")
      }
    ]
  },
  {
    path: "/403",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/",
    redirect: "/show"
  },
  {
    path: "/construction",
    component: Layouts,
    redirect: "/construction/ontology",
    name: "Construction",
    meta: { title: "图谱构建", svgIcon: "unocss", alwaysShow: true },
    children: [
      {
        path: "ontology",
        component: () => import("@/views/construction/ontology.vue"),
        name: "Ontology",
        meta: { title: "本体构建", keepAlive: true }
      },
      {
        path: "structure",
        component: () => import("@/views/construction/structure.vue"),
        name: "Structure",
        meta: { title: "结构化构建", keepAlive: true }
      },
      {
        path: "unstructured",
        component: () => import("@/views/construction/unstructured.vue"),
        name: "Unstructured",
        meta: { title: "非结构化构建", keepAlive: true }
      }
    ]
  },
  {
    path: "/show",
    component: Layouts,
    redirect: "/show/statistic",
    name: "Show",
    meta: { title: "图谱展示", svgIcon: "menu", alwaysShow: true },
    children: [
      {
        path: "statistic",
        component: () => import("@/views/show/statistic.vue"),
        name: "Statistic",
        meta: { title: "数据统计", keepAlive: true }
      },
      {
        path: "allData",
        component: () => import("@/views/show/allData.vue"),
        name: "AllData",
        meta: { title: "图谱数据", keepAlive: true }
      }
    ]
  },
  {
    path: "/application",
    component: Layouts,
    redirect: "/application",
    name: "Display",
    meta: { title: "图谱应用", elIcon: "Menu", alwaysShow: true },
    children: [
      {
        path: "singleEntity",
        component: () => import("@/views/application/singleEntity.vue"),
        name: "SingleEntity",
        meta: { title: "单实体查询", keepAlive: true }
      },
      {
        path: "path",
        component: () => import("@/views/application/path.vue"),
        name: "Path",
        meta: { title: "路径查询", keepAlive: true }
      },
      {
        path: "nlp",
        component: () => import("@/views/application/nlp.vue"),
        name: "Nlp",
        meta: { title: "智能问答", keepAlive: true }
      },
      {
        path: "graphLang",
        component: () => import("@/views/application/graphLang.vue"),
        name: "GraphLang",
        meta: { title: "图语言查询", keepAlive: true }
      },
      {
        path: "multiElement",
        component: () => import("@/views/application/multiElement.vue"),
        name: "MultiElement",
        meta: { title: "多要素检索", keepAlive: true }
      }
    ]
  },
  {
    path: "/management",
    component: Layouts,
    redirect: "/management/data",
    name: "Management",
    meta: { title: "图谱管理", elIcon: "Grid", alwaysShow: true },
    children: [
      {
        path: "data",
        component: () => import("@/views/management/data.vue"),
        name: "Data",
        meta: { title: "图数据管理", keepAlive: true }
      },
      {
        path: "map",
        component: () => import("@/views/management/map.vue"),
        name: "Map",
        meta: { title: "可视化管理", keepAlive: true }
      },
      {
        path: "sourceData",
        component: () => import("@/views/management/sourceData.vue"),
        name: "SourceData",
        meta: { title: "源数据管理", keepAlive: true }
      },
      {
        path: "update",
        component: () => import("@/views/management/update.vue"),
        name: "Update",
        meta: { title: "数据更新", keepAlive: true }
      },
      {
        path: "log",
        component: () => import("@/views/management/log.vue"),
        name: "Log",
        meta: { title: "处理日志", keepAlive: true }
      },
      {
        path: "fusion",
        component: () => import("@/views/management/fusion.vue"),
        name: "Fusion",
        meta: { title: "知识融合", keepAlive: true }
      }
    ]
  }
]

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: "/permission",
    component: Layouts,
    redirect: "/permission/page",
    name: "Permission",
    meta: {
      title: "权限",
      svgIcon: "lock",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      alwaysShow: true // 将始终显示根菜单
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/permission/page.vue"),
        name: "PagePermission",
        meta: {
          title: "页面级",
          roles: ["admin"] // 或者在子导航中设置角色
        }
      },
      {
        path: "directive",
        component: () => import("@/views/permission/directive.vue"),
        name: "DirectivePermission",
        meta: {
          title: "按钮级" // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
        }
      }
    ]
  }
]

const router = createRouter({
  history,
  routes: routeSettings.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router

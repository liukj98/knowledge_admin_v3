import { l as k, _ as g } from "./index-CzugHdgO.js"
import { S as b } from "./SwitchRoles-C-Xx5Bfv.js"
import {
  l as y,
  ah as l,
  ap as P,
  m as s,
  p as x,
  U as a,
  q as r,
  P as m,
  M as o,
  O as t,
  S as e,
  u as _,
  R as p
} from "./vue-CdwtzrMo.js"
import "./element-BVm2vh5v.js"
import "./vxe-GP29SH2o.js"
const u = (n) => {
    if (Array.isArray(n) && n.length > 0) {
      const { roles: f } = k()
      return f.some((v) => n.includes(v))
    } else return console.error("need roles! Like checkPermission(['admin','editor'])"), !1
  },
  w = { class: "app-container" },
  z = { class: "margin-top-30" },
  B = { class: "margin-top-15" },
  C = { class: "margin-top-30" },
  N = y({
    __name: "directive",
    setup(n) {
      return (f, v) => {
        const i = l("el-tag"),
          c = l("el-tab-pane"),
          h = l("el-tabs"),
          d = P("permission")
        return (
          s(),
          x("div", w, [
            a(b),
            r("div", z, [
              r("div", null, [
                m(
                  (s(),
                  o(
                    i,
                    { type: "success", size: "large", effect: "plain" },
                    {
                      default: t(() => [e(` 这里采用了 v-permission="['admin']" 所以只有 admin 可以看见这句话 `)]),
                      _: 1
                    }
                  )),
                  [[d, ["admin"]]]
                )
              ]),
              r("div", null, [
                m(
                  (s(),
                  o(
                    i,
                    { type: "success", size: "large", effect: "plain" },
                    {
                      default: t(() => [e(` 这里采用了 v-permission="['editor']" 所以只有 editor 可以看见这句话 `)]),
                      _: 1
                    }
                  )),
                  [[d, ["editor"]]]
                )
              ]),
              r("div", B, [
                m(
                  (s(),
                  o(
                    i,
                    { type: "success", size: "large", effect: "plain" },
                    {
                      default: t(() => [
                        e(` 这里采用了 v-permission="['admin', 'editor']" 所以 admin 和 editor 都可以看见这句话 `)
                      ]),
                      _: 1
                    }
                  )),
                  [[d, ["admin", "editor"]]]
                )
              ])
            ]),
            r("div", C, [
              a(
                i,
                { type: "warning", size: "large" },
                {
                  default: t(() => [
                    e(
                      " 例如 Element Plus 的 el-tab-pane 或 el-table-column 以及其它动态渲染 Dom 的场景不适合使用 v-permission，这种情况下你可以通过 v-if 和 checkPermission 来实现： "
                    )
                  ]),
                  _: 1
                }
              ),
              a(
                h,
                { type: "border-card", class: "margin-top-15" },
                {
                  default: t(() => [
                    _(u)(["admin"])
                      ? (s(),
                        o(
                          c,
                          { key: 0, label: "admin" },
                          {
                            default: t(() => [
                              e(" 这里采用了 "),
                              a(i, null, { default: t(() => [e(`v-if="checkPermission(['admin'])"`)]), _: 1 }),
                              e(" 所以只有 admin 可以看见这句话 ")
                            ]),
                            _: 1
                          }
                        ))
                      : p("", !0),
                    _(u)(["editor"])
                      ? (s(),
                        o(
                          c,
                          { key: 1, label: "editor" },
                          {
                            default: t(() => [
                              e(" 这里采用了 "),
                              a(i, null, { default: t(() => [e(`v-if="checkPermission(['editor'])"`)]), _: 1 }),
                              e(" 所以只有 editor 可以看见这句话 ")
                            ]),
                            _: 1
                          }
                        ))
                      : p("", !0),
                    _(u)(["admin", "editor"])
                      ? (s(),
                        o(
                          c,
                          { key: 2, label: "admin 和 editor" },
                          {
                            default: t(() => [
                              e(" 这里采用了 "),
                              a(i, null, {
                                default: t(() => [e(`v-if="checkPermission(['admin', 'editor'])"`)]),
                                _: 1
                              }),
                              e(" 所以 admin 和 editor 都可以看见这句话 ")
                            ]),
                            _: 1
                          }
                        ))
                      : p("", !0)
                  ]),
                  _: 1
                }
              )
            ])
          ])
        )
      }
    }
  }),
  U = g(N, [["__scopeId", "data-v-6781473c"]])
export { U as default }

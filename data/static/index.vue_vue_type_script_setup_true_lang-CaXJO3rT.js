import { h as g } from "./index-CzugHdgO.js"
import { z as T } from "./element-BVm2vh5v.js"
import {
  l as v,
  ah as o,
  m as c,
  M as p,
  O as e,
  U as r,
  p as C,
  a7 as B,
  u as i,
  q as _,
  T as M,
  F as V
} from "./vue-CdwtzrMo.js"
const E = v({
  __name: "index",
  setup(b) {
    const { themeList: u, activeThemeName: h, setTheme: f } = g(),
      w = ({ clientX: n, clientY: a }, m) => {
        const d = Math.hypot(Math.max(n, window.innerWidth - n), Math.max(a, window.innerHeight - a)),
          t = document.documentElement.style
        t.setProperty("--v3-theme-x", n + "px"),
          t.setProperty("--v3-theme-y", a + "px"),
          t.setProperty("--v3-theme-r", d + "px")
        const s = () => {
          f(m)
        }
        document.startViewTransition ? document.startViewTransition(s) : s()
      }
    return (n, a) => {
      const m = o("el-icon"),
        d = o("el-tooltip"),
        t = o("el-dropdown-item"),
        s = o("el-dropdown-menu"),
        x = o("el-dropdown")
      return (
        c(),
        p(
          x,
          { trigger: "click" },
          {
            dropdown: e(() => [
              r(s, null, {
                default: e(() => [
                  (c(!0),
                  C(
                    V,
                    null,
                    B(
                      i(u),
                      (l, k) => (
                        c(),
                        p(
                          t,
                          {
                            key: k,
                            disabled: i(h) === l.name,
                            onClick: (y) => {
                              w(y, l.name)
                            }
                          },
                          { default: e(() => [_("span", null, M(l.title), 1)]), _: 2 },
                          1032,
                          ["disabled", "onClick"]
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              })
            ]),
            default: e(() => [
              _("div", null, [
                r(
                  d,
                  { effect: "dark", content: "主题模式", placement: "bottom" },
                  { default: e(() => [r(m, { size: 20 }, { default: e(() => [r(i(T))]), _: 1 })]), _: 1 }
                )
              ])
            ]),
            _: 1
          }
        )
      )
    }
  }
})
export { E as _ }

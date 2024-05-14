import { e as p, _ } from "./index-CzugHdgO.js"
import {
  l as u,
  r as m,
  d as h,
  ah as c,
  m as v,
  p as S,
  q as t,
  T as f,
  u as w,
  U as s,
  O as b,
  aH as I,
  aI as V
} from "./vue-CdwtzrMo.js"
const g = (e) => (I("data-v-ea9bc851"), (e = e()), V(), e),
  x = { class: "switch-roles" },
  R = g(() => t("span", null, "切换用户（模拟重新登录）：", -1)),
  B = u({
    __name: "SwitchRoles",
    setup(e) {
      const o = p(),
        a = m(o.roles[0])
      return (
        h(a, (l) => {
          o.changeRoles(l)
        }),
        (l, n) => {
          const r = c("el-radio-button"),
            d = c("el-radio-group")
          return (
            v(),
            S("div", null, [
              t("div", null, "你的角色：" + f(w(o).roles), 1),
              t("div", x, [
                R,
                s(
                  d,
                  { modelValue: a.value, "onUpdate:modelValue": n[0] || (n[0] = (i) => (a.value = i)) },
                  {
                    default: b(() => [
                      s(r, { label: "editor", value: "editor" }),
                      s(r, { label: "admin", value: "admin" })
                    ]),
                    _: 1
                  },
                  8,
                  ["modelValue"]
                )
              ])
            ])
          )
        }
      )
    }
  }),
  k = _(B, [["__scopeId", "data-v-ea9bc851"]])
export { k as S }

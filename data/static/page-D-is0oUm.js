import { S as a } from "./SwitchRoles-C-Xx5Bfv.js"
import { l as o, ah as s, m as n, p as r, U as e, O as p, S as c } from "./vue-CdwtzrMo.js"
import { _ } from "./index-CzugHdgO.js"
import "./element-BVm2vh5v.js"
import "./vxe-GP29SH2o.js"
const m = { class: "app-container" },
  i = o({
    __name: "page",
    setup(l) {
      return (d, f) => {
        const t = s("el-tag")
        return (
          n(),
          r("div", m, [
            e(a),
            e(
              t,
              { type: "warning", size: "large" },
              { default: p(() => [c("当前页面只有 admin 角色可见，切换角色后将不能进入该页面")]), _: 1 }
            )
          ])
        )
      }
    }
  }),
  w = _(i, [["__scopeId", "data-v-88619f1f"]])
export { w as default }

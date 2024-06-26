import { A as r, B as s, C as i, D as u, F as o, G as d } from "./element-BVm2vh5v.js"
import { l as p, ah as _, m as f, p as y, q as c, U as a, O as n, u as l, F as m, S as t } from "./vue-CdwtzrMo.js"
const g = { class: "mb-4" },
  h = { class: "mb-4" },
  b = { class: "mb-4" },
  C = p({
    __name: "multiElement",
    setup(v) {
      return (w, D) => {
        const e = _("el-button")
        return (
          f(),
          y(
            m,
            null,
            [
              c("div", g, [
                a(e, null, { default: n(() => [t("Default")]), _: 1 }),
                a(e, { type: "primary" }, { default: n(() => [t("Primary")]), _: 1 }),
                a(e, { type: "success" }, { default: n(() => [t("Success")]), _: 1 }),
                a(e, { type: "info" }, { default: n(() => [t("Info")]), _: 1 }),
                a(e, { type: "warning" }, { default: n(() => [t("Warning")]), _: 1 }),
                a(e, { type: "danger" }, { default: n(() => [t("Danger")]), _: 1 })
              ]),
              c("div", h, [
                a(e, { plain: "" }, { default: n(() => [t("Plain")]), _: 1 }),
                a(e, { type: "primary", plain: "" }, { default: n(() => [t("Primary")]), _: 1 }),
                a(e, { type: "success", plain: "" }, { default: n(() => [t("Success")]), _: 1 }),
                a(e, { type: "info", plain: "" }, { default: n(() => [t("Info")]), _: 1 }),
                a(e, { type: "warning", plain: "" }, { default: n(() => [t("Warning")]), _: 1 }),
                a(e, { type: "danger", plain: "" }, { default: n(() => [t("Danger")]), _: 1 })
              ]),
              c("div", b, [
                a(e, { round: "" }, { default: n(() => [t("Round")]), _: 1 }),
                a(e, { type: "primary", round: "" }, { default: n(() => [t("Primary")]), _: 1 }),
                a(e, { type: "success", round: "" }, { default: n(() => [t("Success")]), _: 1 }),
                a(e, { type: "info", round: "" }, { default: n(() => [t("Info")]), _: 1 }),
                a(e, { type: "warning", round: "" }, { default: n(() => [t("Warning")]), _: 1 }),
                a(e, { type: "danger", round: "" }, { default: n(() => [t("Danger")]), _: 1 })
              ]),
              c("div", null, [
                a(e, { icon: l(r), circle: "" }, null, 8, ["icon"]),
                a(e, { type: "primary", icon: l(s), circle: "" }, null, 8, ["icon"]),
                a(e, { type: "success", icon: l(i), circle: "" }, null, 8, ["icon"]),
                a(e, { type: "info", icon: l(u), circle: "" }, null, 8, ["icon"]),
                a(e, { type: "warning", icon: l(o), circle: "" }, null, 8, ["icon"]),
                a(e, { type: "danger", icon: l(d), circle: "" }, null, 8, ["icon"])
              ])
            ],
            64
          )
        )
      }
    }
  })
export { C as default }

import { k as a } from "./index-CzugHdgO.js"
import { Z as r } from "./vue-CdwtzrMo.js"
function s(e) {
  return a({ url: "table", method: "post", data: e })
}
function g(e) {
  return a({ url: `table/${e}`, method: "delete" })
}
function c(e) {
  return a({ url: "table", method: "put", data: e })
}
function d(e) {
  return a({ url: "table", method: "get", params: e })
}
const u = {
  total: 0,
  currentPage: 1,
  pageSizes: [10, 20, 50],
  pageSize: 10,
  layout: "total, sizes, prev, pager, next, jumper"
}
function h(e = {}) {
  const t = r({ ...u, ...e })
  return {
    paginationData: t,
    handleCurrentChange: (n) => {
      t.currentPage = n
    },
    handleSizeChange: (n) => {
      t.pageSize = n
    }
  }
}
export { c as a, s as c, g as d, d as g, h as u }

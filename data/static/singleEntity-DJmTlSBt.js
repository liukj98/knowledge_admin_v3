import {
  ah as n,
  m as i,
  p as o,
  q as r,
  P as x,
  ak as b,
  U as c,
  O as d,
  F as p,
  a7 as u,
  S as m,
  aL as y,
  T as L
} from "./vue-CdwtzrMo.js"
import { _ as T } from "./pic_mf-CnlkaxcS.js"
import { _ as w } from "./index-CzugHdgO.js"
import "./element-BVm2vh5v.js"
import "./vxe-GP29SH2o.js"
const S = (function () {
    let e = 0
    return function (t, h) {
      clearTimeout(e), (e = setTimeout(t, h))
    }
  })(),
  N = {
    name: "HomeView",
    data() {
      return {
        radio1: 1,
        form: { source: "", target: "" },
        params: { page: 1, pageSize: 10 },
        value: 0,
        total: 1,
        area: "",
        question: "",
        province: "",
        title: "",
        search: [],
        academiesList: [],
        AList: [],
        RecommendList: []
      }
    },
    watch: {
      title() {
        S(() => {
          this.fetchData()
        }, 600)
      }
    },
    methods: {
      getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16)
      },
      goToAll() {
        this.$router.push("/profile/all")
      },
      highlightHTML: function (e, t) {
        return (
          t &&
            ((e = String(e)),
            (t = String(t)),
            (e = e.replace(new RegExp(t, "g"), `<span style="color:tomato;font-weight:bold">${t}</span>`))),
          e
        )
      },
      handleChange(e) {
        ;(this.area = e[0]), (this.province = e[1])
      },
      loadAcademiesList() {
        this.form.source && this.form.target
          ? this.$router.push({ path: "/profile/two", query: { source: this.form.source, target: this.form.target } })
          : this.$message.warning("搜索内容不能为空哦！")
      },
      questioning(e) {
        e === void 0 && this.question === ""
          ? this.$message.warning("搜索内容不能为空哦！")
          : e
            ? this.$router.push("/search/nlp?nlp=" + e)
            : this.$router.push("/search/nlp?nlp=" + this.question)
      },
      load(e) {
        e === void 0 && this.title === ""
          ? this.$message.warning("搜索内容不能为空哦！")
          : e
            ? this.$router.push("/search?name=" + e)
            : this.$router.push("/search?name=" + this.title)
      },
      searchName() {},
      async fetchData() {
        if (this.title !== "") {
          const e = await requests({
            url: "/academies/search",
            method: "GET",
            params: { name: this.title, page: 1, pageSize: 5 }
          })
          this.search = e.data.records
        }
      }
    }
  },
  $ = { class: "searchcontainer" },
  q = y(
    '<div class="big-pic" data-v-3934272a><div class="middle-pic" data-v-3934272a><p class="title" data-v-3934272a>单实体查询</p><p class="introduce" data-v-3934272a> 基于构建的武器装备知识图谱，进行实体查询、路径查找、智能问答。<br data-v-3934272a> ①实体查询:输入武器装备名称信息，查询该实体在知识图谱中的关联子图并进行展示；<br data-v-3934272a> ②路径查找:指定起始实体和目标实体，在知识图谱中查找两个实体的所有关联路径；<br data-v-3934272a> ③智能问答:对用户输入问题进行语义识别，并对问题做出智能回答 </p><div class="mf" data-v-3934272a><img src="' +
      T +
      '" data-v-3934272a></div></div></div>',
    1
  ),
  C = { class: "bottom_bg" },
  M = { style: { "text-align": "center", "flex-direction": "column", "align-items": "center" } },
  k = { class: "search-content", style: { width: "400px" } },
  V = ["onClick", "innerHTML"],
  H = { style: { "text-align": "center", "margin-top": "40px", color: "#6c6b6b" } }
function D(e, t, h, E, a, l) {
  const g = n("Search"),
    f = n("el-icon"),
    _ = n("el-button"),
    v = n("router-link")
  return (
    i(),
    o("div", $, [
      q,
      r("div", C, [
        r("div", M, [
          x(
            r(
              "input",
              {
                "onUpdate:modelValue": t[0] || (t[0] = (s) => (a.title = s)),
                type: "text",
                placeholder: "请输入想查询的实体名称",
                class: "search"
              },
              null,
              512
            ),
            [[b, a.title, void 0, { trim: !0 }]]
          ),
          c(
            _,
            { type: "submit", class: "btnsearch", onClick: t[1] || (t[1] = (s) => l.load()) },
            { default: d(() => [c(f, null, { default: d(() => [c(g)]), _: 1 })]), _: 1 }
          ),
          r("div", k, [
            (i(!0),
            o(
              p,
              null,
              u(
                a.search,
                (s) => (
                  i(),
                  o(
                    "a",
                    {
                      key: s.id,
                      class: "content",
                      onClick: (R) => l.load(s.academyName),
                      innerHTML: l.highlightHTML(s.academyName, a.title)
                    },
                    null,
                    8,
                    V
                  )
                )
              ),
              128
            ))
          ])
        ]),
        r("div", H, [
          m(" 搜索推荐 : "),
          (i(!0),
          o(
            p,
            null,
            u(
              a.RecommendList,
              (s) => (
                i(),
                o("span", { key: s.id }, [
                  c(
                    v,
                    { class: "s", to: "/profile/index/?id=" + s.id, style: { "{padding": "2px", color: "#e4e7ea}" } },
                    { default: d(() => [m(L(s.academyName), 1)]), _: 2 },
                    1032,
                    ["to"]
                  )
                ])
              )
            ),
            128
          ))
        ])
      ])
    ])
  )
}
const G = w(N, [
  ["render", D],
  ["__scopeId", "data-v-3934272a"]
])
export { G as default }

import {
  ah as i,
  m as l,
  p as c,
  q as n,
  U as o,
  O as r,
  S as m,
  F as y,
  a7 as w,
  aL as S,
  P as u,
  ak as f,
  T as L
} from "./vue-CdwtzrMo.js"
import { _ as T } from "./pic_mf-CnlkaxcS.js"
import { _ as k } from "./index-CzugHdgO.js"
import "./element-BVm2vh5v.js"
import "./vxe-GP29SH2o.js"
const q = (function () {
    let e = 0
    return function (t, d) {
      clearTimeout(e), (e = setTimeout(t, d))
    }
  })(),
  V = {
    name: "HomeView",
    data() {
      return {
        radio1: 1,
        form: { source: "", target: "" },
        params: { page: 1, pageSize: 10 },
        options: [
          { value: 0, label: "实体查询" },
          { value: 1, label: "路径查找" },
          { value: 2, label: "智能问答" }
        ],
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
        q(() => {
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
  C = S(
    '<div class="big-pic" data-v-6c3225af><div class="middle-pic" data-v-6c3225af><p class="title" data-v-6c3225af>路径查询</p><p class="introduce" data-v-6c3225af> 基于构建的武器装备知识图谱，进行实体查询、路径查找、智能问答。<br data-v-6c3225af> ①实体查询:输入武器装备名称信息，查询该实体在知识图谱中的关联子图并进行展示；<br data-v-6c3225af> ②路径查找:指定起始实体和目标实体，在知识图谱中查找两个实体的所有关联路径；<br data-v-6c3225af> ③智能问答:对用户输入问题进行语义识别，并对问题做出智能回答 </p><div class="mf" data-v-6c3225af><img src="' +
      T +
      '" data-v-6c3225af></div></div></div>',
    1
  ),
  N = { class: "bottom_bg" },
  A = { style: { "text-align": "center" } },
  D = { style: { "text-align": "center", "margin-top": "40px", color: "#6c6b6b" } }
function M(e, t, d, R, s, h) {
  const p = i("el-form-item"),
    _ = i("el-form"),
    g = i("Search"),
    v = i("el-icon"),
    b = i("el-button"),
    x = i("router-link")
  return (
    l(),
    c("div", $, [
      C,
      n("div", N, [
        n("div", A, [
          o(
            _,
            { ref: "form", model: s.form, style: { display: "inline-block", "margin-top": "100px" } },
            {
              default: r(() => [
                o(
                  p,
                  { style: { display: "inline-block" } },
                  {
                    default: r(() => [
                      u(
                        n(
                          "input",
                          {
                            "onUpdate:modelValue": t[0] || (t[0] = (a) => (s.form.source = a)),
                            class: "search_two",
                            placeholder: "请输入起点"
                          },
                          null,
                          512
                        ),
                        [[f, s.form.source, void 0, { trim: !0 }]]
                      )
                    ]),
                    _: 1
                  }
                ),
                o(
                  p,
                  { style: { display: "inline-block" } },
                  {
                    default: r(() => [
                      u(
                        n(
                          "input",
                          {
                            "onUpdate:modelValue": t[1] || (t[1] = (a) => (s.form.target = a)),
                            class: "search_two",
                            placeholder: "请输入终点"
                          },
                          null,
                          512
                        ),
                        [[f, s.form.target, void 0, { trim: !0 }]]
                      )
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            },
            8,
            ["model"]
          ),
          o(
            b,
            { type: "submit", class: "btnsearch_two", onClick: h.loadAcademiesList },
            { default: r(() => [o(v, null, { default: r(() => [o(g)]), _: 1 })]), _: 1 },
            8,
            ["onClick"]
          )
        ]),
        n("div", D, [
          m(" 搜索推荐 : "),
          (l(!0),
          c(
            y,
            null,
            w(
              s.RecommendList,
              (a) => (
                l(),
                c("span", { key: a.id }, [
                  o(
                    x,
                    { class: "s", to: "/profile/index/?id=" + a.id, style: { "{padding": "2px", color: "#e4e7ea}" } },
                    { default: r(() => [m(L(a.academyName), 1)]), _: 2 },
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
const H = k(V, [
  ["render", M],
  ["__scopeId", "data-v-6c3225af"]
])
export { H as default }

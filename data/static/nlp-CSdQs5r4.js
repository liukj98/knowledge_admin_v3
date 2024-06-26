import { k as C, _ as x, i as z } from "./index-CzugHdgO.js"
import {
  ah as _,
  m as c,
  p as d,
  q as r,
  P as L,
  ak as j,
  U as f,
  O as b,
  F as N,
  a7 as q,
  R as y,
  M as O,
  aL as I,
  T as v,
  aH as A,
  aI as V,
  S as D
} from "./vue-CdwtzrMo.js"
import { _ as R } from "./pic_mf-CnlkaxcS.js"
import { E as F } from "./element-BVm2vh5v.js"
import "./vxe-GP29SH2o.js"
function M(e) {
  return C({ url: "/nlp/getAnswer", method: "get", params: e })
}
const T = {
    name: "HomeView",
    data() {
      return {
        page: 1,
        pageSize: 10,
        total: 1,
        searchList: [],
        echart: null,
        nodes: [],
        datas: [],
        links: [],
        radio1: 1,
        form: { source: "", target: "" },
        params: { page: 1, pageSize: 10 },
        value: 0,
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
        delay(() => {
          this.fetchData()
        }, 600)
      }
    },
    mounted() {
      this.load()
    },
    methods: {
      drawChart() {
        for (let a = 0; a < this.nodes.length; a++) this.nodes[a].angle = (360 / this.nodes.length) * a
        this.echart = z(this.$refs.graphchart)
        const e = {
          color: ["#90ca74", "#538FF6", "#ec6565"],
          tooltip: { show: !0 },
          legend: { show: !0, data: [] },
          edgeLabel: { normal: { show: !0, textStyle: { fontSize: 10 } } },
          series: [
            {
              type: "graph",
              layout: "force",
              legendHoverLink: !0,
              hoverAnimation: !0,
              coordinateSystem: null,
              xAxisIndex: 0,
              yAxisIndex: 0,
              force: { repulsion: 100, gravity: 0.03, edgeLength: 150, layoutAnimation: !0 },
              roam: !0,
              nodeScaleRatio: 0.6,
              draggable: !0,
              focusNodeAdjacency: !0,
              edgeSymbol: ["none", "none"],
              edgeSymbolSize: 10,
              itemStyle: {
                normal: {
                  label: { show: !0 },
                  borderType: "solid",
                  borderColor: "rgba(83,111,196,0.4)",
                  borderWidth: 2,
                  opacity: 1
                },
                emphasis: {}
              },
              lineStyle: {
                normal: { color: "rgba(114,190,220,0.8)", width: "3", type: "solid", curveness: 0.3, opacity: 1 },
                emphasis: {}
              },
              label: {
                normal: {
                  show: !0,
                  position: "inside",
                  textStyle: {
                    color: "#333333",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontFamily: "sans-serif",
                    fontSize: 12
                  }
                },
                emphasis: {}
              },
              edgeLabel: { normal: { show: !1 }, emphasis: {} },
              data: this.datas,
              categories: [
                { name: "1", symbol: "roundRect", label: {} },
                { name: "2", symbol: "circle" },
                { name: "0", symbol: "roundRect" }
              ],
              links: this.links
            }
          ]
        }
        this.echart.setOption(e)
      },
      handleSizeChange(e) {
        ;(this.pageSize = e), this.load()
      },
      handleCurrentChange(e) {
        ;(this.page = e), this.load()
      },
      getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16)
      },
      handleChange(e) {
        ;(this.area = e[0]), (this.province = e[1])
      },
      loadAcademiesList() {
        this.form.source && this.form.target
          ? this.$router.push({ path: "/profile/two", query: { source: this.form.source, target: this.form.target } })
          : this.$message.warning("搜索内容不能为空哦！")
      },
      generateGraphData(e) {
        const a = [],
          i = [],
          l = [],
          o = { symbolSize: 50, category: "2" },
          s = e.graph,
          p = e.answer,
          u = Object.keys(s)
        let g, m
        for (const n of u) s[n].relationId == -1 && ((g = s[n].id), (m = s[n].name))
        const t = Object.keys(p)
        for (const n of t) {
          const h = { subjectName: m, objectName: p[n], relation: n }
          a.push(h)
        }
        for (const n of u)
          if (s[n].relationId == -1) {
            const h = { symbolSize: 70, category: "1", name: s[n].name, id: s[n].id }
            i.push(h)
          } else {
            const h = { ...o, name: s[n].name, id: s[n].id },
              w = s[n].id,
              k = { source: g, target: w, value: s[n].name }
            i.push(h), l.push(k)
          }
        return { searchList: a, datas: i, links: l }
      },
      async questioning() {
        try {
          const e = await M({ question: this.question }),
            { data: a } = e,
            { searchList: i, datas: l, links: o } = this.generateGraphData(a)
          ;(this.datas = l), (this.links = o), (this.searchList = i), this.drawChart()
        } catch {
          F.error("查找失败")
        }
      },
      load() {
        this.title === ""
          ? this.$message.warning("搜索内容不能为空哦！")
          : this.$router.push("/search?name=" + this.title),
          this.nlp && this.drawChart()
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
  S = (e) => (A("data-v-4398a343"), (e = e()), V(), e),
  B = { class: "searchcontainer" },
  E = I(
    '<div class="big-pic" data-v-4398a343><div class="middle-pic" data-v-4398a343><p class="title" data-v-4398a343>智能问答</p><p class="introduce" data-v-4398a343> 基于构建的武器装备知识图谱，进行实体查询、路径查找、智能问答。<br data-v-4398a343> ①实体查询:输入武器装备名称信息，查询该实体在知识图谱中的关联子图并进行展示；<br data-v-4398a343> ②路径查找:指定起始实体和目标实体，在知识图谱中查找两个实体的所有关联路径；<br data-v-4398a343> ③智能问答:对用户输入问题进行语义识别，并对问题做出智能回答 </p><div class="mf" data-v-4398a343><img src="' +
      R +
      '" data-v-4398a343></div></div></div>',
    1
  ),
  G = { class: "bottom_bg" },
  H = { style: { "text-align": "center" } },
  U = S(() =>
    r(
      "div",
      { style: { "text-align": "center", "margin-top": "40px", color: "#6c6b6b" } },
      [D(" 搜索推荐 : "), r("span", { style: { color: "#e6a23c" } }, "仁爱礁位置和坐标")],
      -1
    )
  ),
  W = { key: 0, class: "wrapper" },
  K = { class: "section" },
  P = { class: "a" },
  J = { key: 0, class: "main", style: { "text-align": "center" } },
  Q = { class: "echart-block" },
  X = { ref: "graphchart", style: { height: "100%", width: "100%" } },
  Y = { class: "res" },
  Z = S(() => r("div", { style: { height: "80px" } }, null, -1))
function $(e, a, i, l, o, s) {
  const p = _("Search"),
    u = _("el-icon"),
    g = _("el-button"),
    m = _("el-pagination")
  return (
    c(),
    d("div", B, [
      E,
      r("div", G, [
        r("div", H, [
          L(
            r(
              "input",
              {
                "onUpdate:modelValue": a[0] || (a[0] = (t) => (o.question = t)),
                type: "text",
                placeholder: "请输入问题",
                class: "search"
              },
              null,
              512
            ),
            [[j, o.question, void 0, { trim: !0 }]]
          ),
          f(
            g,
            { "el-icon": "search", class: "btnsearch", onClick: a[1] || (a[1] = (t) => s.questioning()) },
            { default: b(() => [f(u, null, { default: b(() => [f(p)]), _: 1 })]), _: 1 }
          )
        ]),
        U,
        o.searchList.length !== 0
          ? (c(),
            d("div", W, [
              r("div", K, [
                (c(!0),
                d(
                  N,
                  null,
                  q(
                    o.searchList,
                    (t) => (
                      c(),
                      d("div", { key: t == null ? void 0 : t.relation, class: "main1" }, [
                        r(
                          "div",
                          P,
                          v(t == null ? void 0 : t.subjectName) + "的" + v(t == null ? void 0 : t.relation),
                          1
                        ),
                        r("div", null, v(t == null ? void 0 : t.objectName), 1)
                      ])
                    )
                  ),
                  128
                )),
                o.searchList.length === 0 ? (c(), d("div", J, "暂无搜索结果")) : y("", !0)
              ]),
              r("div", Q, [r("div", X, null, 512)]),
              r("div", Y, [
                r("div", null, [
                  o.searchList.length !== 0
                    ? (c(),
                      O(
                        m,
                        {
                          key: 0,
                          style: { "margin-left": "500px" },
                          background: "",
                          "current-page": o.page,
                          "page-size": o.pageSize,
                          "page-sizes": [5, 7, 10, 20],
                          layout: "total, sizes, prev, pager, next, jumper",
                          total: o.total,
                          onSizeChange: s.handleSizeChange,
                          onCurrentChange: s.handleCurrentChange
                        },
                        null,
                        8,
                        ["current-page", "page-size", "total", "onSizeChange", "onCurrentChange"]
                      ))
                    : y("", !0)
                ])
              ]),
              Z
            ]))
          : y("", !0)
      ])
    ])
  )
}
const ne = x(T, [
  ["render", $],
  ["__scopeId", "data-v-4398a343"]
])
export { ne as default }

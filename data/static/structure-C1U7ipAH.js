import { _ as f } from "./index-CzugHdgO.js"
import { ah as a, m as g, p as x, q as e, U as t, O as l, S as i, aH as v, aI as b } from "./vue-CdwtzrMo.js"
import "./element-BVm2vh5v.js"
import "./vxe-GP29SH2o.js"
const y = {
    name: "DataImport",
    data() {
      return {
        options: [
          { value: "选项1", label: "机构" },
          { value: "选项2", label: "人员" },
          { value: "选项3", label: "装备" },
          { value: "选项4", label: "物资" },
          { value: "选项5", label: "设施" },
          { value: "选项2", label: "环境" },
          { value: "选项3", label: "事件" },
          { value: "选项4", label: "行动" }
        ],
        value: "",
        file: "",
        fileList: [],
        fileName: ""
      }
    },
    methods: {
      submitFile(s) {
        ;/\.(xlsx|xls|XLSX|XLS)$/.test(s.name) ||
          (this.$message({ type: "error", message: "上传文件只能为excel文件，且为xlsx,xls格式" }),
          (this.filelist = []),
          (this.file = "")),
          (this.file = s.raw),
          (this.filename = s.name)
      },
      importData() {
        this.file === ""
          ? this.$message({ type: "error", message: "上传文件不能为空" })
          : this.$message({ type: "success", message: "上传成功！" })
      }
    }
  },
  o = (s) => (v("data-v-8ae3945b"), (s = s()), b(), s),
  j = { class: "import_bg" },
  I = { class: "import_title_bg" },
  S = o(() =>
    e(
      "div",
      { class: "middle-pic" },
      [
        e("p", { class: "title" }, "结构化图谱构建"),
        e(
          "p",
          { class: "introduce" },
          " 对知识图谱本体、关系的类型和属性进行定义和建模，从结构化数据和非结构化数据抽取包含的知识三元组 "
        )
      ],
      -1
    )
  ),
  w = { class: "gjlc" },
  $ = o(() => e("p", { class: "gjlc_p" }, "构建流程", -1)),
  k = { class: "grid-content" },
  C = o(() => e("span", { class: "g_span" }, "结构化图谱构建", -1)),
  L = { style: { "text-align": "center", "margin-top": "20px", "margin-bottom": "30px" } },
  N = o(() =>
    e(
      "p",
      { style: { "font-size": "16px" } },
      [
        i(" 请下载"),
        e("a", { href: "http://8.130.118.133/file/file/example1.xlsx", style: { color: "#538ff6" } }, "示例表格"),
        i("，按照表格对应列及格式填写数据！ ")
      ],
      -1
    )
  ),
  B = o(() => e("i", { class: "el-icon-upload" }, null, -1)),
  D = o(() =>
    e(
      "div",
      { class: "el-upload__text", style: { height: "100px" } },
      [i(" 将文件拖到此处，或"), e("em", { style: { color: "#538ff6" } }, "点击上传")],
      -1
    )
  ),
  V = o(() => e("div", { class: "el-upload__tip" }, "请上传.xlsx文件或.xls文件，且不超过1M", -1)),
  X = { class: "grid-content" },
  z = o(() => e("span", { class: "g_span" }, "构建结果展示", -1)),
  F = { style: { "text-align": "center", "margin-top": "20px", "margin-bottom": "5px" } }
function q(s, E, H, M, d, p) {
  const c = a("el-step"),
    r = a("el-steps"),
    m = a("el-upload"),
    u = a("el-button"),
    n = a("el-card"),
    _ = a("el-col"),
    h = a("el-row")
  return (
    g(),
    x("div", j, [
      e("div", I, [
        S,
        e("div", w, [
          t(
            r,
            { active: 3, simple: "", class: "gjlc_step" },
            {
              default: l(() => [
                $,
                t(c, { title: "01 查看示例文档", icon: "el-icon-edit", class: "gjlc_steps" }),
                t(c, { title: "02 上传文件", icon: "el-icon-upload", class: "gjlc_steps" }),
                t(c, { title: "03 图谱构建完成", icon: "el-icon-success", class: "gjlc_steps" })
              ]),
              _: 1
            }
          )
        ])
      ]),
      t(h, null, {
        default: l(() => [
          t(
            _,
            { span: 12 },
            {
              default: l(() => [
                e("div", k, [
                  t(
                    n,
                    { style: { "margin-left": "30px", "margin-right": "10px", "margin-top": "32px" } },
                    {
                      default: l(() => [
                        C,
                        e("div", L, [
                          N,
                          t(
                            m,
                            {
                              ref: "upload",
                              class: "upload-demo",
                              "auto-upload": !1,
                              drag: "",
                              accept: ".xls,.xlsx",
                              limit: "1",
                              "on-change": p.submitFile,
                              "file-list": d.fileList,
                              name: "file",
                              action: "",
                              multiple: ""
                            },
                            { tip: l(() => [V]), default: l(() => [B, D]), _: 1 },
                            8,
                            ["on-change", "file-list"]
                          ),
                          t(
                            u,
                            { size: "medium", class: "btn", onClick: p.importData },
                            { default: l(() => [i("导入数据")]), _: 1 },
                            8,
                            ["onClick"]
                          )
                        ])
                      ]),
                      _: 1
                    }
                  )
                ])
              ]),
              _: 1
            }
          ),
          t(
            _,
            { span: 12 },
            {
              default: l(() => [
                e("div", X, [
                  t(
                    n,
                    { style: { "margin-left": "10px", "margin-right": "30px", "margin-top": "32px" } },
                    { default: l(() => [z, e("div", F, [t(n, { style: { height: "300px" } })])]), _: 1 }
                  )
                ])
              ]),
              _: 1
            }
          )
        ]),
        _: 1
      })
    ])
  )
}
const G = f(y, [
  ["render", q],
  ["__scopeId", "data-v-8ae3945b"]
])
export { G as default }

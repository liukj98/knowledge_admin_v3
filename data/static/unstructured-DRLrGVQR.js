import { _ as w } from "./index-CzugHdgO.js"
import {
  ah as l,
  m as _,
  p as m,
  q as e,
  U as t,
  O as o,
  F as $,
  a7 as j,
  M as k,
  S as n,
  aH as I,
  aI as S
} from "./vue-CdwtzrMo.js"
import "./element-BVm2vh5v.js"
import "./vxe-GP29SH2o.js"
const V = {
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
      submitTxt(s) {
        ;/\.(txt|TXT)$/.test(s.name) ||
          (this.$message({ type: "error", message: "上传文件只能为excel文件，且为xlsx,xls格式" }),
          (this.filelist = []),
          (this.file = "")),
          (this.file = s.raw),
          (this.filename = s.name)
      },
      importFile() {
        this.file === ""
          ? this.$message({ type: "error", message: "上传文件不能为空" })
          : this.value === ""
            ? this.$message({ type: "error", message: "请选择实体类型" })
            : this.$message({ type: "success", message: "上传成功！" })
      },
      importData() {
        this.file === ""
          ? this.$message({ type: "error", message: "上传文件不能为空" })
          : this.$message({ type: "success", message: "上传成功！" })
      }
    }
  },
  a = (s) => (I("data-v-4b8d6df1"), (s = s()), S(), s),
  F = { class: "import_bg" },
  L = { class: "import_title_bg" },
  T = a(() =>
    e(
      "div",
      { class: "middle-pic" },
      [
        e("p", { class: "title" }, "非结构化图谱构建"),
        e(
          "p",
          { class: "introduce" },
          " 对知识图谱本体、关系的类型和属性进行定义和建模，从结构化数据和非结构化数据抽取包含的知识三元组 "
        )
      ],
      -1
    )
  ),
  B = { class: "gjlc" },
  C = a(() => e("p", { class: "gjlc_p" }, "构建流程", -1)),
  N = { class: "grid-content" },
  X = a(() => e("span", { class: "g_span" }, "非结构化图谱构建", -1)),
  z = { class: "selected_div" },
  D = { style: { "text-align": "center", "margin-top": "20px", "margin-bottom": "30px" } },
  M = a(() =>
    e(
      "p",
      { style: { "font-size": "16px" } },
      [
        n(" 请查看"),
        e(
          "a",
          {
            href: "http://8.130.118.133/file/file/example.txt",
            target: "view_window",
            style: { color: "#538ff6" },
            download: "example2.txt"
          },
          "示例文档"
        ),
        n("，按照示例文档格式上传数据！ ")
      ],
      -1
    )
  ),
  U = a(() => e("i", { class: "el-icon-upload" }, null, -1)),
  q = a(() =>
    e(
      "div",
      { class: "el-upload__text" },
      [n("将文件拖到此处，或"), e("em", { style: { color: "#538ff6" } }, "点击上传")],
      -1
    )
  ),
  E = a(() => e("div", { class: "el-upload__tip" }, "请上传.txt文件，且不超过1M", -1))
function H(s, d, O, A, c, r) {
  const p = l("el-step"),
    u = l("el-steps"),
    f = l("el-option"),
    h = l("el-select"),
    g = l("el-upload"),
    x = l("el-button"),
    v = l("el-card"),
    b = l("el-col"),
    y = l("el-row")
  return (
    _(),
    m("div", F, [
      e("div", L, [
        T,
        e("div", B, [
          t(
            u,
            { active: 3, simple: "", class: "gjlc_step" },
            {
              default: o(() => [
                C,
                t(p, { title: "01 查看示例文档", icon: "el-icon-edit", class: "gjlc_steps" }),
                t(p, { title: "02 上传文件", icon: "el-icon-upload", class: "gjlc_steps" }),
                t(p, { title: "03 图谱构建完成", icon: "el-icon-success", class: "gjlc_steps" })
              ]),
              _: 1
            }
          )
        ])
      ]),
      t(y, null, {
        default: o(() => [
          t(
            b,
            { span: 12 },
            {
              default: o(() => [
                e("div", N, [
                  t(
                    v,
                    { style: { "margin-left": "10px", "margin-right": "30px", "margin-top": "32px" } },
                    {
                      default: o(() => [
                        X,
                        e("div", z, [
                          t(
                            h,
                            {
                              modelValue: c.value,
                              "onUpdate:modelValue": d[0] || (d[0] = (i) => (c.value = i)),
                              class: "select",
                              placeholder: "请选择实体类型"
                            },
                            {
                              default: o(() => [
                                (_(!0),
                                m(
                                  $,
                                  null,
                                  j(
                                    c.options,
                                    (i) => (
                                      _(),
                                      k(f, { key: i.value, label: i.label, value: i.value }, null, 8, [
                                        "label",
                                        "value"
                                      ])
                                    )
                                  ),
                                  128
                                ))
                              ]),
                              _: 1
                            },
                            8,
                            ["modelValue"]
                          )
                        ]),
                        e("div", D, [
                          M,
                          t(
                            g,
                            {
                              ref: "upload",
                              class: "upload-demo",
                              "auto-upload": !1,
                              drag: "",
                              accept: ".txt",
                              limit: "1",
                              "on-change": r.submitTxt,
                              "file-list": c.fileList,
                              name: "file",
                              action: "",
                              multiple: ""
                            },
                            { tip: o(() => [E]), default: o(() => [U, q]), _: 1 },
                            8,
                            ["on-change", "file-list"]
                          ),
                          t(
                            x,
                            { size: "medium", class: "btn", onClick: r.importFile },
                            { default: o(() => [n("导入文件")]), _: 1 },
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
          )
        ]),
        _: 1
      })
    ])
  )
}
const Q = w(V, [
  ["render", H],
  ["__scopeId", "data-v-4b8d6df1"]
])
export { Q as default }

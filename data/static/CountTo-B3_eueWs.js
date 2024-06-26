import { _ as n } from "./index-CzugHdgO.js"
import { l as o, m as u, p as i, q as c } from "./vue-CdwtzrMo.js"
const d = o({
    name: "numberScroll",
    props: {
      time: { type: Number, default: 2 },
      value: { type: Number, default: 0 },
      thousandSign: { type: Boolean, default: () => !1 }
    },
    data() {
      return { oldValue: 0 }
    },
    watch: {
      value: function () {
        this.numberScroll(this.$refs.numberScroll)
      }
    },
    methods: {
      numberScroll(a) {
        const r = ((this.value - this.oldValue) * 10) / (this.time * 100)
        let e = 0,
          t = this.oldValue,
          l = setInterval(() => {
            ;(t += r),
              t > this.value && (clearInterval(l), (t = this.value), (l = null)),
              e !== t &&
                ((e = parseInt(t)),
                (this.oldValue = e),
                this.thousandSign
                  ? (a.innerHTML = e.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,"))
                  : (a.innerHTML = e.toString()))
          }, 10)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.numberScroll(this.$refs.numberScroll)
      })
    }
  }),
  m = { class: "number-scroll-grow" },
  p = ["data-time", "data-value"]
function h(a, s, r, e, t, l) {
  return (
    u(),
    i("span", m, [
      c(
        "span",
        { ref: "numberScroll", "data-time": a.time, class: "number-scroll", "data-value": a.value },
        " 0 ",
        8,
        p
      )
    ])
  )
}
const v = n(d, [
  ["render", h],
  ["__scopeId", "data-v-d2a2dfab"]
])
export { v as N }

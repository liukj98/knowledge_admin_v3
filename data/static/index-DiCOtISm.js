import {
  aA as nt,
  Z as ot,
  r as P,
  d as Ne,
  E as We,
  c as ke,
  z as Se,
  e as R,
  m as u,
  p as M,
  l as D,
  ah as k,
  q as E,
  U as d,
  O as _,
  W as Be,
  M as C,
  Q as ue,
  u as v,
  aB as at,
  R as I,
  aC as me,
  aD as xe,
  a7 as j,
  T as B,
  a2 as ce,
  F as q,
  H as de,
  a9 as st,
  S as G,
  I as U,
  aE as He,
  w as fe,
  aF as rt,
  aG as Ue,
  b as qe,
  J as Xe,
  aH as Ke,
  aI as Ge,
  s as lt,
  a8 as le,
  aJ as ne,
  n as ct,
  aK as it,
  P as _e,
  V as he
} from "./vue-CdwtzrMo.js"
import {
  g as ut,
  S as Je,
  D as Q,
  s as Ae,
  a as dt,
  u as ge,
  b as J,
  L as ee,
  _ as F,
  c as Ye,
  r as ft,
  d as Ce,
  e as pt
} from "./index-CzugHdgO.js"
import {
  f as re,
  h as vt,
  j as mt,
  g as _t,
  k as ht,
  E as pe,
  l as gt,
  n as je,
  u as bt,
  r as wt,
  o as yt,
  p as kt,
  q as St,
  s as xt
} from "./element-BVm2vh5v.js"
import { _ as Ct } from "./index.vue_vue_type_script_setup_true_lang-CaXJO3rT.js"
import "./vxe-GP29SH2o.js"
function Et(n) {
  n ? Ae(dt) : Ae(Je)
}
const oe = nt("app", () => {
    const n = ot({ opened: ut() !== Je, withoutAnimation: !1 }),
      e = P(Q.Desktop)
    return (
      Ne(
        () => n.opened,
        (s) => Et(s)
      ),
      {
        device: e,
        sidebar: n,
        toggleSidebar: (s) => {
          ;(n.opened = !n.opened), (n.withoutAnimation = s)
        },
        closeSidebar: (s) => {
          ;(n.opened = !1), (n.withoutAnimation = s)
        },
        toggleDevice: (s) => {
          e.value = s
        }
      }
    )
  }),
  Mt = 992,
  Tt = () => {
    const n = oe(),
      { listenerRouteChange: e } = ge(),
      t = () => document.body.getBoundingClientRect().width - 1 < Mt,
      a = () => {
        if (!document.hidden) {
          const o = t()
          n.toggleDevice(o ? Q.Mobile : Q.Desktop), o && n.closeSidebar(!0)
        }
      }
    e(() => {
      n.device === Q.Mobile && n.sidebar.opened && n.closeSidebar(!1)
    }),
      We(() => {
        window.addEventListener("resize", a)
      }),
      ke(() => {
        t() && (n.toggleDevice(Q.Mobile), n.closeSidebar(!0))
      }),
      Se(() => {
        window.removeEventListener("resize", a)
      })
  },
  $t = { defense: !0, color: "#c0c4cc", opacity: 0.5, size: 16, family: "serif", angle: -20, width: 300, height: 200 },
  Ie = P(document.body)
function Vt(n = Ie) {
  let e,
    t,
    a = null
  const o = { watermarkElMutationObserver: void 0, parentElMutationObserver: void 0, parentElResizeObserver: void 0 },
    s = (m, b = {}) => {
      if (!n.value) {
        console.warn("请在 DOM 挂载完成后再调用 setWatermark 方法设置水印")
        return
      }
      ;(e = m), (t = { ...$t, ...b }), a ? l() : r(), i(n.value)
    },
    r = () => {
      const m = n.value.tagName.toLowerCase() === Ie.value.tagName.toLowerCase(),
        b = m ? "fixed" : "absolute",
        T = m ? "" : "relative"
      ;(a = document.createElement("div")),
        (a.style.pointerEvents = "none"),
        (a.style.top = "0"),
        (a.style.left = "0"),
        (a.style.position = b),
        (a.style.zIndex = "99999")
      const { clientWidth: A, clientHeight: O } = n.value
      l({ width: A, height: O }), (n.value.style.position = T), n.value.appendChild(a)
    },
    l = (m = {}) => {
      a &&
        (e && (a.style.background = `url(${c()}) left top repeat`),
        m.width && (a.style.width = `${m.width}px`),
        m.height && (a.style.height = `${m.height}px`))
    },
    c = () => {
      const { color: m, opacity: b, size: T, family: A, angle: O, width: N, height: V } = t,
        w = document.createElement("canvas")
      ;(w.width = N), (w.height = V)
      const S = w.getContext("2d")
      return (
        S &&
          ((S.fillStyle = m),
          (S.globalAlpha = b),
          (S.font = `${T}px ${A}`),
          S.rotate((Math.PI / 180) * O),
          S.fillText(e, 0, V / 2)),
        w.toDataURL()
      )
    },
    f = () => {
      if (!(!n.value || !a)) {
        y()
        try {
          n.value.removeChild(a)
        } catch {
          console.warn("水印元素已不存在，请重新创建")
        } finally {
          a = null
        }
      }
    },
    p = re(() => {
      f(), r(), i(n.value)
    }, 100),
    i = (m) => {
      t.defense ? !o.watermarkElMutationObserver && !o.parentElMutationObserver && h(m) : y("mutation"),
        o.parentElResizeObserver || g(m)
    },
    y = (m = "all") => {
      let b, T, A
      ;(m === "mutation" || m === "all") &&
        ((b = o.watermarkElMutationObserver) == null || b.disconnect(),
        (o.watermarkElMutationObserver = void 0),
        (T = o.parentElMutationObserver) == null || T.disconnect(),
        (o.parentElMutationObserver = void 0)),
        (m === "resize" || m === "all") &&
          ((A = o.parentElResizeObserver) == null || A.disconnect(), (o.parentElResizeObserver = void 0))
    },
    h = (m) => {
      const b = re((T) => {
        T.forEach(
          re((A) => {
            switch (A.type) {
              case "attributes":
                A.target === a && p()
                break
              case "childList":
                A.removedNodes.forEach((O) => {
                  O === a && m.appendChild(a)
                })
                break
            }
          }, 100)
        )
      }, 100)
      ;(o.watermarkElMutationObserver = new MutationObserver(b)),
        (o.parentElMutationObserver = new MutationObserver(b)),
        o.watermarkElMutationObserver.observe(a, { attributes: !0, childList: !1, subtree: !1 }),
        o.parentElMutationObserver.observe(m, { attributes: !1, childList: !0, subtree: !1 })
    },
    g = (m) => {
      const b = re(() => {
        const { clientWidth: T, clientHeight: A } = m
        l({ width: T, height: A })
      }, 500)
      ;(o.parentElResizeObserver = new ResizeObserver(b)), o.parentElResizeObserver.observe(m)
    }
  return (
    Se(() => {
      f()
    }),
    { setWatermark: s, clearWatermark: f }
  )
}
const Ze = oe(),
  Lt = R(() => Ze.device === Q.Mobile),
  Rt = R(() => Ze.device === Q.Desktop)
function ae() {
  return { isMobile: Lt, isDesktop: Rt }
}
const be = J(),
  At = R(() => be.layoutMode === ee.Left),
  It = R(() => be.layoutMode === ee.Top),
  Dt = R(() => be.layoutMode === ee.LeftTop),
  Pt = (n) => {
    be.layoutMode = n
  }
function se() {
  return { isLeft: At, isTop: It, isLeftTop: Dt, setLayoutMode: Pt }
}
const Ft = {},
  Ot = { class: "layout-footer" }
function zt(n, e) {
  return u(), M("footer", Ot, "知识图谱")
}
const Nt = F(Ft, [
    ["render", zt],
    ["__scopeId", "data-v-b66c5cdc"]
  ]),
  Wt = { class: "app-main" },
  Bt = { class: "app-scrollbar" },
  Ht = D({
    __name: "AppMain",
    setup(n) {
      const e = Ye(),
        t = J()
      return (a, o) => {
        const s = k("router-view"),
          r = k("el-backtop")
        return (
          u(),
          M("section", Wt, [
            E("div", Bt, [
              d(s, null, {
                default: _(({ Component: l, route: c }) => [
                  d(
                    Be,
                    { name: "el-fade-in", mode: "out-in" },
                    {
                      default: _(() => [
                        (u(),
                        C(
                          at,
                          { include: v(e).cachedViews },
                          [(u(), C(ue(l), { key: c.path, class: "app-container-grow" }))],
                          1032,
                          ["include"]
                        ))
                      ]),
                      _: 2
                    },
                    1024
                  )
                ]),
                _: 1
              }),
              v(t).showFooter ? (u(), C(Nt, { key: 0 })) : I("", !0)
            ]),
            d(r),
            d(r, { target: ".app-scrollbar" })
          ])
        )
      }
    }
  }),
  Ee = F(Ht, [["__scopeId", "data-v-2efaa580"]]),
  Ut = D({
    __name: "index",
    props: { isActive: { type: Boolean, default: !1 } },
    emits: ["toggleClick"],
    setup(n, { emit: e }) {
      const t = n,
        a = e,
        o = () => {
          a("toggleClick")
        }
      return (s, r) => {
        const l = k("el-icon")
        return (
          u(),
          M("div", { onClick: o }, [
            d(
              l,
              { size: 20, class: "icon" },
              { default: _(() => [t.isActive ? (u(), C(v(vt), { key: 0 })) : (u(), C(v(mt), { key: 1 }))]), _: 1 }
            )
          ])
        )
      }
    }
  }),
  qt = F(Ut, [["__scopeId", "data-v-f3ab76f7"]])
function Xt(n) {
  for (var e = [], t = 0; t < n.length; ) {
    const a = n[t]
    if (a === "*" || a === "+" || a === "?") {
      e.push({ type: "MODIFIER", index: t, value: n[t++] })
      continue
    }
    if (a === "\\") {
      e.push({ type: "ESCAPED_CHAR", index: t++, value: n[t++] })
      continue
    }
    if (a === "{") {
      e.push({ type: "OPEN", index: t, value: n[t++] })
      continue
    }
    if (a === "}") {
      e.push({ type: "CLOSE", index: t, value: n[t++] })
      continue
    }
    if (a === ":") {
      for (var o = "", s = t + 1; s < n.length; ) {
        const r = n.charCodeAt(s)
        if ((r >= 48 && r <= 57) || (r >= 65 && r <= 90) || (r >= 97 && r <= 122) || r === 95) {
          o += n[s++]
          continue
        }
        break
      }
      if (!o) throw new TypeError("Missing parameter name at ".concat(t))
      e.push({ type: "NAME", index: t, value: o }), (t = s)
      continue
    }
    if (a === "(") {
      var l = 1,
        c = "",
        s = t + 1
      if (n[s] === "?") throw new TypeError('Pattern cannot start with "?" at '.concat(s))
      for (; s < n.length; ) {
        if (n[s] === "\\") {
          c += n[s++] + n[s++]
          continue
        }
        if (n[s] === ")") {
          if ((l--, l === 0)) {
            s++
            break
          }
        } else if (n[s] === "(" && (l++, n[s + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(s))
        c += n[s++]
      }
      if (l) throw new TypeError("Unbalanced pattern at ".concat(t))
      if (!c) throw new TypeError("Missing pattern at ".concat(t))
      e.push({ type: "PATTERN", index: t, value: c }), (t = s)
      continue
    }
    e.push({ type: "CHAR", index: t, value: n[t++] })
  }
  return e.push({ type: "END", index: t, value: "" }), e
}
function Kt(n, e) {
  e === void 0 && (e = {})
  for (
    var t = Xt(n),
      a = e.prefixes,
      o = a === void 0 ? "./" : a,
      s = "[^".concat(Yt(e.delimiter || "/#?"), "]+?"),
      r = [],
      l = 0,
      c = 0,
      f = "",
      p = function (w) {
        if (c < t.length && t[c].type === w) return t[c++].value
      },
      i = function (w) {
        const S = p(w)
        if (S !== void 0) return S
        const W = t[c],
          x = W.type,
          L = W.index
        throw new TypeError("Unexpected ".concat(x, " at ").concat(L, ", expected ").concat(w))
      },
      y = function () {
        for (var w = "", S; (S = p("CHAR") || p("ESCAPED_CHAR")); ) w += S
        return w
      };
    c < t.length;

  ) {
    const h = p("CHAR"),
      g = p("NAME"),
      m = p("PATTERN")
    if (g || m) {
      var b = h || ""
      o.indexOf(b) === -1 && ((f += b), (b = "")),
        f && (r.push(f), (f = "")),
        r.push({ name: g || l++, prefix: b, suffix: "", pattern: m || s, modifier: p("MODIFIER") || "" })
      continue
    }
    const T = h || p("ESCAPED_CHAR")
    if (T) {
      f += T
      continue
    }
    f && (r.push(f), (f = ""))
    const A = p("OPEN")
    if (A) {
      var b = y(),
        O = p("NAME") || "",
        N = p("PATTERN") || "",
        V = y()
      i("CLOSE"),
        r.push({
          name: O || (N ? l++ : ""),
          pattern: O && !N ? s : N,
          prefix: b,
          suffix: V,
          modifier: p("MODIFIER") || ""
        })
      continue
    }
    i("END")
  }
  return r
}
function Gt(n, e) {
  return Jt(Kt(n, e), e)
}
function Jt(n, e) {
  e === void 0 && (e = {})
  const t = jt(e),
    a = e.encode,
    o =
      a === void 0
        ? function (c) {
            return c
          }
        : a,
    s = e.validate,
    r = s === void 0 ? !0 : s,
    l = n.map(function (c) {
      if (typeof c == "object") return new RegExp("^(?:".concat(c.pattern, ")$"), t)
    })
  return function (c) {
    for (var f = "", p = 0; p < n.length; p++) {
      const i = n[p]
      if (typeof i == "string") {
        f += i
        continue
      }
      const y = c ? c[i.name] : void 0,
        h = i.modifier === "?" || i.modifier === "*",
        g = i.modifier === "*" || i.modifier === "+"
      if (Array.isArray(y)) {
        if (!g) throw new TypeError('Expected "'.concat(i.name, '" to not repeat, but got an array'))
        if (y.length === 0) {
          if (h) continue
          throw new TypeError('Expected "'.concat(i.name, '" to not be empty'))
        }
        for (let m = 0; m < y.length; m++) {
          var b = o(y[m], i)
          if (r && !l[p].test(b))
            throw new TypeError(
              'Expected all "'.concat(i.name, '" to match "').concat(i.pattern, '", but got "').concat(b, '"')
            )
          f += i.prefix + b + i.suffix
        }
        continue
      }
      if (typeof y == "string" || typeof y == "number") {
        var b = o(String(y), i)
        if (r && !l[p].test(b))
          throw new TypeError(
            'Expected "'.concat(i.name, '" to match "').concat(i.pattern, '", but got "').concat(b, '"')
          )
        f += i.prefix + b + i.suffix
        continue
      }
      if (!h) {
        const T = g ? "an array" : "a string"
        throw new TypeError('Expected "'.concat(i.name, '" to be ').concat(T))
      }
    }
    return f
  }
}
function Yt(n) {
  return n.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
}
function jt(n) {
  return n && n.sensitive ? "" : "i"
}
const Zt = { key: 0, class: "no-redirect" },
  Qt = ["onClick"],
  en = D({
    __name: "index",
    setup(n) {
      const e = me(),
        t = xe(),
        { listenerRouteChange: a } = ge(),
        o = P([]),
        s = () => {
          o.value = e.matched.filter((c) => {
            let f, p
            return ((f = c.meta) == null ? void 0 : f.title) && ((p = c.meta) == null ? void 0 : p.breadcrumb) !== !1
          })
        },
        r = (c) => Gt(c)(e.params),
        l = (c) => {
          const { redirect: f, path: p } = c
          if (f) {
            t.push(f)
            return
          }
          t.push(r(p))
        }
      return (
        a((c) => {
          c.path.startsWith("/redirect/") || s()
        }, !0),
        (c, f) => {
          const p = k("el-breadcrumb-item"),
            i = k("el-breadcrumb")
          return (
            u(),
            C(i, null, {
              default: _(() => [
                (u(!0),
                M(
                  q,
                  null,
                  j(
                    o.value,
                    (y, h) => (
                      u(),
                      C(
                        p,
                        { key: y.path },
                        {
                          default: _(() => [
                            y.redirect === "noRedirect" || h === o.value.length - 1
                              ? (u(), M("span", Zt, B(y.meta.title), 1))
                              : (u(), M("a", { key: 1, onClick: ce((g) => l(y), ["prevent"]) }, B(y.meta.title), 9, Qt))
                          ]),
                          _: 2
                        },
                        1024
                      )
                    )
                  ),
                  128
                ))
              ]),
              _: 1
            })
          )
        }
      )
    }
  }),
  tn = F(en, [["__scopeId", "data-v-616d4c33"]]),
  ve = (n) => /^(https?:|mailto:|tel:)/.test(n),
  nn = ["href"],
  on = D({
    __name: "SidebarItemLink",
    props: { to: {} },
    setup(n) {
      const e = n
      return (t, a) => {
        const o = k("router-link")
        return v(ve)(e.to)
          ? (u(), M("a", { key: 0, href: e.to, target: "_blank", rel: "noopener" }, [de(t.$slots, "default")], 8, nn))
          : (u(), C(o, { key: 1, to: e.to }, { default: _(() => [de(t.$slots, "default")]), _: 3 }, 8, ["to"]))
      }
    }
  })
function K(n) {
  if (typeof n != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(n))
}
function De(n, e) {
  for (var t = "", a = 0, o = -1, s = 0, r, l = 0; l <= n.length; ++l) {
    if (l < n.length) r = n.charCodeAt(l)
    else {
      if (r === 47) break
      r = 47
    }
    if (r === 47) {
      if (!(o === l - 1 || s === 1))
        if (o !== l - 1 && s === 2) {
          if (t.length < 2 || a !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
            if (t.length > 2) {
              const c = t.lastIndexOf("/")
              if (c !== t.length - 1) {
                c === -1 ? ((t = ""), (a = 0)) : ((t = t.slice(0, c)), (a = t.length - 1 - t.lastIndexOf("/"))),
                  (o = l),
                  (s = 0)
                continue
              }
            } else if (t.length === 2 || t.length === 1) {
              ;(t = ""), (a = 0), (o = l), (s = 0)
              continue
            }
          }
          e && (t.length > 0 ? (t += "/..") : (t = ".."), (a = 2))
        } else t.length > 0 ? (t += "/" + n.slice(o + 1, l)) : (t = n.slice(o + 1, l)), (a = l - o - 1)
      ;(o = l), (s = 0)
    } else r === 46 && s !== -1 ? ++s : (s = -1)
  }
  return t
}
function an(n, e) {
  const t = e.dir || e.root,
    a = e.base || (e.name || "") + (e.ext || "")
  return t ? (t === e.root ? t + a : t + n + a) : a
}
var te = {
  resolve: function () {
    for (var e = "", t = !1, a, o = arguments.length - 1; o >= -1 && !t; o--) {
      var s
      o >= 0 ? (s = arguments[o]) : (a === void 0 && (a = process.cwd()), (s = a)),
        K(s),
        s.length !== 0 && ((e = s + "/" + e), (t = s.charCodeAt(0) === 47))
    }
    return (e = De(e, !t)), t ? (e.length > 0 ? "/" + e : "/") : e.length > 0 ? e : "."
  },
  normalize: function (e) {
    if ((K(e), e.length === 0)) return "."
    const t = e.charCodeAt(0) === 47,
      a = e.charCodeAt(e.length - 1) === 47
    return (e = De(e, !t)), e.length === 0 && !t && (e = "."), e.length > 0 && a && (e += "/"), t ? "/" + e : e
  },
  isAbsolute: function (e) {
    return K(e), e.length > 0 && e.charCodeAt(0) === 47
  },
  join: function () {
    if (arguments.length === 0) return "."
    for (var e, t = 0; t < arguments.length; ++t) {
      const a = arguments[t]
      K(a), a.length > 0 && (e === void 0 ? (e = a) : (e += "/" + a))
    }
    return e === void 0 ? "." : te.normalize(e)
  },
  relative: function (e, t) {
    if ((K(e), K(t), e === t || ((e = te.resolve(e)), (t = te.resolve(t)), e === t))) return ""
    for (var a = 1; a < e.length && e.charCodeAt(a) === 47; ++a);
    for (var o = e.length, s = o - a, r = 1; r < t.length && t.charCodeAt(r) === 47; ++r);
    for (var l = t.length, c = l - r, f = s < c ? s : c, p = -1, i = 0; i <= f; ++i) {
      if (i === f) {
        if (c > f) {
          if (t.charCodeAt(r + i) === 47) return t.slice(r + i + 1)
          if (i === 0) return t.slice(r + i)
        } else s > f && (e.charCodeAt(a + i) === 47 ? (p = i) : i === 0 && (p = 0))
        break
      }
      const y = e.charCodeAt(a + i),
        h = t.charCodeAt(r + i)
      if (y !== h) break
      y === 47 && (p = i)
    }
    let g = ""
    for (i = a + p + 1; i <= o; ++i)
      (i === o || e.charCodeAt(i) === 47) && (g.length === 0 ? (g += "..") : (g += "/.."))
    return g.length > 0 ? g + t.slice(r + p) : ((r += p), t.charCodeAt(r) === 47 && ++r, t.slice(r))
  },
  _makeLong: function (e) {
    return e
  },
  dirname: function (e) {
    if ((K(e), e.length === 0)) return "."
    for (var t = e.charCodeAt(0), a = t === 47, o = -1, s = !0, r = e.length - 1; r >= 1; --r)
      if (((t = e.charCodeAt(r)), t === 47)) {
        if (!s) {
          o = r
          break
        }
      } else s = !1
    return o === -1 ? (a ? "/" : ".") : a && o === 1 ? "//" : e.slice(0, o)
  },
  basename: function (e, t) {
    if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string')
    K(e)
    let a = 0,
      o = -1,
      s = !0,
      r
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e) return ""
      let l = t.length - 1,
        c = -1
      for (r = e.length - 1; r >= 0; --r) {
        const f = e.charCodeAt(r)
        if (f === 47) {
          if (!s) {
            a = r + 1
            break
          }
        } else
          c === -1 && ((s = !1), (c = r + 1)),
            l >= 0 && (f === t.charCodeAt(l) ? --l === -1 && (o = r) : ((l = -1), (o = c)))
      }
      return a === o ? (o = c) : o === -1 && (o = e.length), e.slice(a, o)
    } else {
      for (r = e.length - 1; r >= 0; --r)
        if (e.charCodeAt(r) === 47) {
          if (!s) {
            a = r + 1
            break
          }
        } else o === -1 && ((s = !1), (o = r + 1))
      return o === -1 ? "" : e.slice(a, o)
    }
  },
  extname: function (e) {
    K(e)
    for (var t = -1, a = 0, o = -1, s = !0, r = 0, l = e.length - 1; l >= 0; --l) {
      const c = e.charCodeAt(l)
      if (c === 47) {
        if (!s) {
          a = l + 1
          break
        }
        continue
      }
      o === -1 && ((s = !1), (o = l + 1)), c === 46 ? (t === -1 ? (t = l) : r !== 1 && (r = 1)) : t !== -1 && (r = -1)
    }
    return t === -1 || o === -1 || r === 0 || (r === 1 && t === o - 1 && t === a + 1) ? "" : e.slice(t, o)
  },
  format: function (e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e)
    return an("/", e)
  },
  parse: function (e) {
    K(e)
    const t = { root: "", dir: "", base: "", ext: "", name: "" }
    if (e.length === 0) return t
    let a = e.charCodeAt(0),
      o = a === 47,
      s
    o ? ((t.root = "/"), (s = 1)) : (s = 0)
    for (var r = -1, l = 0, c = -1, f = !0, p = e.length - 1, i = 0; p >= s; --p) {
      if (((a = e.charCodeAt(p)), a === 47)) {
        if (!f) {
          l = p + 1
          break
        }
        continue
      }
      c === -1 && ((f = !1), (c = p + 1)), a === 46 ? (r === -1 ? (r = p) : i !== 1 && (i = 1)) : r !== -1 && (i = -1)
    }
    return (
      r === -1 || c === -1 || i === 0 || (i === 1 && r === c - 1 && r === l + 1)
        ? c !== -1 && (l === 0 && o ? (t.base = t.name = e.slice(1, c)) : (t.base = t.name = e.slice(l, c)))
        : (l === 0 && o
            ? ((t.name = e.slice(1, r)), (t.base = e.slice(1, c)))
            : ((t.name = e.slice(l, r)), (t.base = e.slice(l, c))),
          (t.ext = e.slice(r, c))),
      l > 0 ? (t.dir = e.slice(0, l - 1)) : o && (t.dir = "/"),
      t
    )
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
}
te.posix = te
const sn = te
const Qe = _t(sn),
  rn = { key: 2 },
  ln = D({
    __name: "SidebarItem",
    props: { item: {}, basePath: { default: "" } },
    setup(n) {
      const e = n,
        t = R(() => {
          let l
          return (l = e.item.meta) == null ? void 0 : l.alwaysShow
        }),
        a = R(() => {
          let l
          return (
            ((l = e.item.children) == null
              ? void 0
              : l.filter((c) => {
                  let f
                  return !((f = c.meta) != null && f.hidden)
                })) ?? []
          )
        }),
        o = R(() => a.value.length),
        s = R(() => {
          const l = o.value
          switch (!0) {
            case l > 1:
              return null
            case l === 1:
              return a.value[0]
            default:
              return { ...e.item, path: "" }
          }
        }),
        r = (l) => {
          switch (!0) {
            case ve(l):
              return l
            case ve(e.basePath):
              return e.basePath
            default:
              return Qe.resolve(e.basePath, l)
          }
        }
      return (l, c) => {
        const f = k("SvgIcon"),
          p = k("el-menu-item"),
          i = k("SidebarItem", !0),
          y = k("el-sub-menu")
        return !t.value && s.value && !s.value.children
          ? (u(),
            M(
              q,
              { key: 0 },
              [
                s.value.meta
                  ? (u(),
                    C(
                      on,
                      { key: 0, to: r(s.value.path) },
                      {
                        default: _(() => [
                          d(
                            p,
                            { index: r(s.value.path) },
                            st(
                              {
                                default: _(() => [
                                  s.value.meta.svgIcon
                                    ? (u(), C(f, { key: 0, name: s.value.meta.svgIcon }, null, 8, ["name"]))
                                    : s.value.meta.elIcon
                                      ? (u(), C(ue(s.value.meta.elIcon), { key: 1, class: "el-icon" }))
                                      : I("", !0)
                                ]),
                                _: 2
                              },
                              [
                                s.value.meta.title
                                  ? { name: "title", fn: _(() => [G(B(s.value.meta.title), 1)]), key: "0" }
                                  : void 0
                              ]
                            ),
                            1032,
                            ["index"]
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ["to"]
                    ))
                  : I("", !0)
              ],
              64
            ))
          : (u(),
            C(
              y,
              { key: 1, index: r(e.item.path), teleported: "" },
              {
                title: _(() => {
                  let h, g, m
                  return [
                    (h = e.item.meta) != null && h.svgIcon
                      ? (u(), C(f, { key: 0, name: e.item.meta.svgIcon }, null, 8, ["name"]))
                      : (g = e.item.meta) != null && g.elIcon
                        ? (u(), C(ue(e.item.meta.elIcon), { key: 1, class: "el-icon" }))
                        : I("", !0),
                    (m = e.item.meta) != null && m.title ? (u(), M("span", rn, B(e.item.meta.title), 1)) : I("", !0)
                  ]
                }),
                default: _(() => [
                  e.item.children
                    ? (u(!0),
                      M(
                        q,
                        { key: 0 },
                        j(
                          a.value,
                          (h) => (
                            u(), C(i, { key: h.path, item: h, "base-path": r(h.path) }, null, 8, ["item", "base-path"])
                          )
                        ),
                        128
                      ))
                    : I("", !0)
                ]),
                _: 1
              },
              8,
              ["index"]
            ))
      }
    }
  }),
  cn = F(ln, [["__scopeId", "data-v-871eecd2"]]),
  un = "/v3-admin-vite/static/logo-BY3URNHQ.png",
  dn = "/v3-admin-vite/static/logo-text-1-CHuEm79x.png",
  fn = "/v3-admin-vite/static/logo-text-2-CVewf8RJ.png",
  pn = ["src"],
  vn = ["src"],
  mn = D({
    __name: "index",
    props: { collapse: { type: Boolean, default: !0 } },
    setup(n) {
      const e = n,
        { isLeft: t, isTop: a } = se()
      return (o, s) => {
        const r = k("router-link")
        return (
          u(),
          M(
            "div",
            { class: U(["layout-logo-container", { collapse: e.collapse, "layout-mode-top": v(a) }]) },
            [
              d(
                Be,
                { name: "layout-logo-fade" },
                {
                  default: _(() => [
                    e.collapse
                      ? (u(),
                        C(
                          r,
                          { key: "collapse", to: "/" },
                          { default: _(() => [E("img", { src: v(un), class: "layout-logo" }, null, 8, pn)]), _: 1 }
                        ))
                      : (u(),
                        C(
                          r,
                          { key: "expand", to: "/" },
                          {
                            default: _(() => [
                              E("img", { src: v(t) ? v(dn) : v(fn), class: "layout-logo-text" }, null, 8, vn)
                            ]),
                            _: 1
                          }
                        ))
                  ]),
                  _: 1
                }
              )
            ],
            2
          )
        )
      }
    }
  }),
  Me = F(mn, [["__scopeId", "data-v-18112349"]]),
  ie = (n) => {
    let e = ""
    try {
      e = getComputedStyle(document.documentElement).getPropertyValue(n)
    } catch (t) {
      console.error(t)
    }
    return e
  },
  Pe = (n, e) => {
    try {
      document.documentElement.style.setProperty(n, e)
    } catch (t) {
      console.error(t)
    }
  },
  _n = () => {
    ft(), location.reload()
  },
  hn = D({
    __name: "index",
    setup(n) {
      He((w) => ({
        "7512f1ca": N.value,
        "5e631f98": V.value,
        "5f183ec2": A.value,
        "6aacdfea": O.value,
        a99c0206: T.value
      }))
      const e = ie("--v3-sidebar-menu-bg-color"),
        t = ie("--v3-sidebar-menu-text-color"),
        a = ie("--v3-sidebar-menu-active-text-color"),
        { isMobile: o } = ae(),
        { isLeft: s, isTop: r } = se(),
        l = me(),
        c = oe(),
        f = Ce(),
        p = J(),
        i = R(() => {
          const {
            meta: { activeMenu: w },
            path: S
          } = l
          return w || S
        }),
        y = R(() =>
          f.routes.filter((w) => {
            let S
            return !((S = w.meta) != null && S.hidden)
          })
        ),
        h = R(() => !c.sidebar.opened),
        g = R(() => s.value && p.showLogo),
        m = R(() => (s.value ? e : void 0)),
        b = R(() => (s.value ? t : void 0)),
        T = R(() => (s.value ? a : void 0)),
        A = R(() => (r.value ? "var(--v3-navigationbar-height)" : "var(--v3-sidebar-menu-item-height)")),
        O = R(() => (r.value ? "transparent" : "var(--v3-sidebar-menu-hover-bg-color)")),
        N = R(() => (r.value ? "0px" : "2px")),
        V = R(() => (r.value ? "none" : "block"))
      return (w, S) => {
        const W = k("el-menu"),
          x = k("el-scrollbar")
        return (
          u(),
          M(
            "div",
            { class: U({ "has-logo": g.value }) },
            [
              g.value ? (u(), C(Me, { key: 0, collapse: h.value }, null, 8, ["collapse"])) : I("", !0),
              d(
                x,
                { "wrap-class": "scrollbar-wrapper" },
                {
                  default: _(() => [
                    d(
                      W,
                      {
                        "default-active": i.value,
                        collapse: h.value && !v(r),
                        "background-color": m.value,
                        "text-color": b.value,
                        "active-text-color": T.value,
                        "unique-opened": !0,
                        "collapse-transition": !1,
                        mode: v(r) && !v(o) ? "horizontal" : "vertical"
                      },
                      {
                        default: _(() => [
                          (u(!0),
                          M(
                            q,
                            null,
                            j(
                              y.value,
                              (L) => (
                                u(),
                                C(cn, { key: L.path, item: L, "base-path": L.path }, null, 8, ["item", "base-path"])
                              )
                            ),
                            128
                          ))
                        ]),
                        _: 1
                      },
                      8,
                      ["default-active", "collapse", "background-color", "text-color", "active-text-color", "mode"]
                    )
                  ]),
                  _: 1
                }
              )
            ],
            2
          )
        )
      }
    }
  }),
  Te = F(hn, [["__scopeId", "data-v-fd7996dd"]]),
  gn = { class: "card-header" },
  bn = { class: "card-title" },
  wn = { class: "card-time" },
  yn = { key: 0, class: "card-avatar" },
  kn = ["src"],
  Sn = { class: "card-body" },
  xn = D({
    __name: "NotifyList",
    props: { list: {} },
    setup(n) {
      const e = n
      return (t, a) => {
        const o = k("el-empty"),
          s = k("el-tag"),
          r = k("el-card")
        return e.list.length === 0
          ? (u(), C(o, { key: 0 }))
          : (u(!0),
            M(
              q,
              { key: 1 },
              j(
                e.list,
                (l, c) => (
                  u(),
                  C(
                    r,
                    { key: c, shadow: "never", class: "card-container" },
                    {
                      header: _(() => [
                        E("div", gn, [
                          E("div", null, [
                            E("span", null, [
                              E("span", bn, B(l.title), 1),
                              l.extra
                                ? (u(),
                                  C(
                                    s,
                                    { key: 0, type: l.status, effect: "plain", size: "small" },
                                    { default: _(() => [G(B(l.extra), 1)]), _: 2 },
                                    1032,
                                    ["type"]
                                  ))
                                : I("", !0)
                            ]),
                            E("div", wn, B(l.datetime), 1)
                          ]),
                          l.avatar
                            ? (u(), M("div", yn, [E("img", { src: l.avatar, width: "34" }, null, 8, kn)]))
                            : I("", !0)
                        ])
                      ]),
                      default: _(() => [E("div", Sn, B(l.description ?? "No Data"), 1)]),
                      _: 2
                    },
                    1024
                  )
                )
              ),
              128
            ))
      }
    }
  }),
  Cn = F(xn, [["__scopeId", "data-v-64257dd7"]]),
  En = [
    {
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
      title: "V3 Admin Vite 上线啦",
      datetime: "一年前",
      description:
        "一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术"
    },
    {
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
      title: "V3 Admin 上线啦",
      datetime: "两年前",
      description: "一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus 和 Pinia"
    }
  ],
  Mn = [
    {
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "来自楚门的世界",
      description: "如果再也不能见到你，祝你早安、午安和晚安",
      datetime: "1998-06-05"
    },
    {
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "来自大话西游",
      description: "如果非要在这份爱上加上一个期限，我希望是一万年",
      datetime: "1995-02-04"
    },
    {
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      title: "来自龙猫",
      description: "心存善意，定能途遇天使",
      datetime: "1988-04-16"
    }
  ],
  Tn = [
    { title: "任务名称", description: "这家伙很懒，什么都没留下", extra: "未开始", status: "info" },
    { title: "任务名称", description: "这家伙很懒，什么都没留下", extra: "进行中", status: "primary" },
    { title: "任务名称", description: "这家伙很懒，什么都没留下", extra: "已超时", status: "danger" }
  ],
  $n = { class: "notify" },
  Vn = { class: "notify-history" },
  Fe = 99,
  Ln = 350,
  Rn = D({
    __name: "index",
    setup(n) {
      const e = R(() => a.value.reduce((s, r) => s + r.list.length, 0)),
        t = P("通知"),
        a = P([
          { name: "通知", type: "primary", list: En },
          { name: "消息", type: "danger", list: Mn },
          { name: "待办", type: "warning", list: Tn }
        ]),
        o = () => {
          pe.success(`跳转到${t.value}历史页面`)
        }
      return (s, r) => {
        const l = k("el-icon"),
          c = k("el-tooltip"),
          f = k("el-badge"),
          p = k("el-scrollbar"),
          i = k("el-tab-pane"),
          y = k("el-tabs"),
          h = k("el-button"),
          g = k("el-popover")
        return (
          u(),
          M("div", $n, [
            d(
              g,
              { placement: "bottom", width: Ln, trigger: "click" },
              {
                reference: _(() => [
                  d(
                    f,
                    { value: e.value, max: Fe, hidden: e.value === 0 },
                    {
                      default: _(() => [
                        d(
                          c,
                          { effect: "dark", content: "消息通知", placement: "bottom" },
                          { default: _(() => [d(l, { size: 20 }, { default: _(() => [d(v(ht))]), _: 1 })]), _: 1 }
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ["value", "hidden"]
                  )
                ]),
                default: _(() => [
                  d(
                    y,
                    {
                      modelValue: t.value,
                      "onUpdate:modelValue": r[0] || (r[0] = (m) => (t.value = m)),
                      class: "demo-tabs",
                      stretch: ""
                    },
                    {
                      default: _(() => [
                        (u(!0),
                        M(
                          q,
                          null,
                          j(
                            a.value,
                            (m, b) => (
                              u(),
                              C(
                                i,
                                { name: m.name, key: b },
                                {
                                  label: _(() => [
                                    G(B(m.name) + " ", 1),
                                    d(f, { value: m.list.length, max: Fe, type: m.type }, null, 8, ["value", "type"])
                                  ]),
                                  default: _(() => [
                                    d(
                                      p,
                                      { height: "400px" },
                                      { default: _(() => [d(Cn, { list: m.list }, null, 8, ["list"])]), _: 2 },
                                      1024
                                    )
                                  ]),
                                  _: 2
                                },
                                1032,
                                ["name"]
                              )
                            )
                          ),
                          128
                        ))
                      ]),
                      _: 1
                    },
                    8,
                    ["modelValue"]
                  ),
                  E("div", Vn, [
                    d(h, { link: "", onClick: o }, { default: _(() => [G("查看" + B(t.value) + "历史", 1)]), _: 1 })
                  ])
                ]),
                _: 1
              }
            )
          ])
        )
      }
    }
  }),
  An = F(Rn, [["__scopeId", "data-v-530289d9"]]),
  Oe = [
    [
      "requestFullscreen",
      "exitFullscreen",
      "fullscreenElement",
      "fullscreenEnabled",
      "fullscreenchange",
      "fullscreenerror"
    ],
    [
      "webkitRequestFullscreen",
      "webkitExitFullscreen",
      "webkitFullscreenElement",
      "webkitFullscreenEnabled",
      "webkitfullscreenchange",
      "webkitfullscreenerror"
    ],
    [
      "webkitRequestFullScreen",
      "webkitCancelFullScreen",
      "webkitCurrentFullScreenElement",
      "webkitCancelFullScreen",
      "webkitfullscreenchange",
      "webkitfullscreenerror"
    ],
    [
      "mozRequestFullScreen",
      "mozCancelFullScreen",
      "mozFullScreenElement",
      "mozFullScreenEnabled",
      "mozfullscreenchange",
      "mozfullscreenerror"
    ],
    [
      "msRequestFullscreen",
      "msExitFullscreen",
      "msFullscreenElement",
      "msFullscreenEnabled",
      "MSFullscreenChange",
      "MSFullscreenError"
    ]
  ],
  Y = (() => {
    if (typeof document > "u") return !1
    const n = Oe[0],
      e = {}
    for (const t of Oe)
      if ((t == null ? void 0 : t[1]) in document) {
        for (const [o, s] of t.entries()) e[n[o]] = s
        return e
      }
    return !1
  })(),
  ze = { change: Y.fullscreenchange, error: Y.fullscreenerror }
let H = {
  request(n = document.documentElement, e) {
    return new Promise((t, a) => {
      const o = () => {
        H.off("change", o), t()
      }
      H.on("change", o)
      const s = n[Y.requestFullscreen](e)
      s instanceof Promise && s.then(o).catch(a)
    })
  },
  exit() {
    return new Promise((n, e) => {
      if (!H.isFullscreen) {
        n()
        return
      }
      const t = () => {
        H.off("change", t), n()
      }
      H.on("change", t)
      const a = document[Y.exitFullscreen]()
      a instanceof Promise && a.then(t).catch(e)
    })
  },
  toggle(n, e) {
    return H.isFullscreen ? H.exit() : H.request(n, e)
  },
  onchange(n) {
    H.on("change", n)
  },
  onerror(n) {
    H.on("error", n)
  },
  on(n, e) {
    const t = ze[n]
    t && document.addEventListener(t, e, !1)
  },
  off(n, e) {
    const t = ze[n]
    t && document.removeEventListener(t, e, !1)
  },
  raw: Y
}
Object.defineProperties(H, {
  isFullscreen: { get: () => !!document[Y.fullscreenElement] },
  element: { enumerable: !0, get: () => document[Y.fullscreenElement] ?? void 0 },
  isEnabled: { enumerable: !0, get: () => !!document[Y.fullscreenEnabled] }
})
Y || (H = { isEnabled: !1 })
const Z = H,
  In = D({
    __name: "index",
    props: {
      element: { default: "html" },
      openTips: { default: "全屏" },
      exitTips: { default: "退出全屏" },
      content: { type: Boolean, default: !1 }
    },
    setup(n) {
      const e = n,
        t = P(!1),
        a = R(() => (t.value ? e.exitTips : e.openTips)),
        o = R(() => (t.value ? "fullscreen-exit" : "fullscreen")),
        s = () => {
          const y = document.querySelector(e.element) || void 0
          Z.isEnabled ? Z.toggle(y) : pe.warning("您的浏览器无法工作")
        },
        r = () => {
          ;(t.value = Z.isFullscreen), t.value || (document.body.className = "")
        }
      fe((y) => {
        Z.isEnabled && Z.on("change", r),
          y(() => {
            Z.isEnabled && Z.off("change", r)
          })
      })
      const l = P(!1),
        c = R(() => (l.value ? "内容区复原" : "内容区放大")),
        f = R(() => (l.value ? "fullscreen-exit" : "fullscreen")),
        p = () => {
          ;(l.value = !l.value), (document.body.className = l.value ? "content-large" : "")
        },
        i = () => {
          l.value && p(), (document.body.className = "content-full"), s()
        }
      return (y, h) => {
        const g = k("SvgIcon"),
          m = k("el-tooltip"),
          b = k("el-dropdown-item"),
          T = k("el-dropdown-menu"),
          A = k("el-dropdown")
        return (
          u(),
          M("div", null, [
            y.content
              ? (u(),
                C(
                  A,
                  { key: 1, disabled: t.value },
                  {
                    dropdown: _(() => [
                      d(T, null, {
                        default: _(() => [
                          d(b, { onClick: p }, { default: _(() => [G(B(c.value), 1)]), _: 1 }),
                          d(b, { onClick: i }, { default: _(() => [G("内容区全屏")]), _: 1 })
                        ]),
                        _: 1
                      })
                    ]),
                    default: _(() => [d(g, { name: f.value }, null, 8, ["name"])]),
                    _: 1
                  },
                  8,
                  ["disabled"]
                ))
              : (u(),
                C(
                  m,
                  { key: 0, effect: "dark", content: a.value, placement: "bottom" },
                  { default: _(() => [d(g, { name: o.value, onClick: s }, null, 8, ["name"])]), _: 1 },
                  8,
                  ["content"]
                ))
          ])
        )
      }
    }
  }),
  et = F(In, [["__scopeId", "data-v-03889db8"]]),
  Dn = ["onMouseenter"],
  Pn = { class: "result-item-title" },
  Fn = D({
    __name: "SearchResult",
    props: rt({ list: {}, isPressUpOrDown: { type: Boolean } }, { modelValue: { required: !0 }, modelModifiers: {} }),
    emits: ["update:modelValue"],
    setup(n, { expose: e }) {
      const t = Ue(n, "modelValue"),
        a = n,
        o = qe(),
        s = P(0),
        r = (p) => {
          const i = p.name === t.value
          return { background: i ? "var(--el-color-primary)" : "", color: i ? "#ffffff" : "" }
        },
        l = (p) => {
          a.isPressUpOrDown || (t.value = p.name)
        },
        c = () => {
          s.value = Number((window.innerHeight * 0.4).toFixed(1))
        },
        f = (p) => {
          let g
          const i = (g = o == null ? void 0 : o.proxy) == null ? void 0 : g.$refs[`resultItemRef${p}`]
          if (!i) return 0
          const h = i[0].offsetTop + 128
          return h > s.value ? h - s.value : 0
        }
      return (
        We(() => {
          window.addEventListener("resize", c)
        }),
        ke(() => {
          c()
        }),
        Se(() => {
          window.removeEventListener("resize", c)
        }),
        e({ getScrollTop: f }),
        (p, i) => {
          const y = k("SvgIcon")
          return (
            u(),
            M("div", null, [
              (u(!0),
              M(
                q,
                null,
                j(p.list, (h, g) => {
                  let m, b, T
                  return (
                    u(),
                    M(
                      "div",
                      {
                        key: g,
                        ref_for: !0,
                        ref: `resultItemRef${g}`,
                        class: "result-item",
                        style: Xe(r(h)),
                        onMouseenter: (A) => l(h)
                      },
                      [
                        (m = h.meta) != null && m.svgIcon
                          ? (u(), C(y, { key: 0, name: h.meta.svgIcon }, null, 8, ["name"]))
                          : (b = h.meta) != null && b.elIcon
                            ? (u(), C(ue(h.meta.elIcon), { key: 1, class: "el-icon" }))
                            : I("", !0),
                        E("span", Pn, B((T = h.meta) == null ? void 0 : T.title), 1),
                        t.value && t.value === h.name ? (u(), C(y, { key: 2, name: "keyboard-enter" })) : I("", !0)
                      ],
                      44,
                      Dn
                    )
                  )
                }),
                128
              ))
            ])
          )
        }
      )
    }
  }),
  On = F(Fn, [["__scopeId", "data-v-e83699da"]]),
  $e = (n) => (Ke("data-v-c0301a15"), (n = n()), Ge(), n),
  zn = { class: "search-footer" },
  Nn = { class: "search-footer-item" },
  Wn = $e(() => E("span", null, "确认", -1)),
  Bn = { class: "search-footer-item" },
  Hn = $e(() => E("span", null, "切换", -1)),
  Un = { class: "search-footer-item" },
  qn = $e(() => E("span", null, "关闭", -1)),
  Xn = { class: "search-footer-total" },
  Kn = D({
    __name: "SearchFooter",
    props: { total: {} },
    setup(n) {
      const e = n,
        { isMobile: t } = ae()
      return (a, o) => {
        const s = k("SvgIcon")
        return (
          u(),
          M("div", zn, [
            v(t)
              ? I("", !0)
              : (u(),
                M(
                  q,
                  { key: 0 },
                  [
                    E("span", Nn, [d(s, { name: "keyboard-enter" }), Wn]),
                    E("span", Bn, [d(s, { name: "keyboard-up" }), d(s, { name: "keyboard-down" }), Hn]),
                    E("span", Un, [d(s, { name: "keyboard-esc" }), qn])
                  ],
                  64
                )),
            E("span", Xn, "共 " + B(e.total) + " 项", 1)
          ])
        )
      }
    }
  }),
  Gn = F(Kn, [["__scopeId", "data-v-c0301a15"]]),
  Jn = E("p", null, "搜索结果", -1),
  Yn = D({
    __name: "SearchModal",
    props: { modelValue: { type: Boolean, required: !0 }, modelModifiers: {} },
    emits: ["update:modelValue"],
    setup(n) {
      const e = Ue(n, "modelValue"),
        t = xe(),
        { isMobile: a } = ae(),
        o = P(null),
        s = P(null),
        r = P(null),
        l = P(""),
        c = lt([]),
        f = P(void 0),
        p = P(!1),
        i = R(() => (a.value ? "80vw" : "40vw")),
        y = R(() => gt(Ce().routes)),
        h = re(() => {
          let S
          const V = g(y.value)
          c.value = V.filter((W) => {
            let x, L
            return l.value
              ? (L = (x = W.meta) == null ? void 0 : x.title) == null
                ? void 0
                : L.toLocaleLowerCase().includes(l.value.toLocaleLowerCase().trim())
              : !1
          })
          const w = (S = c.value) == null ? void 0 : S.length
          f.value = w > 0 ? c.value[0].name : void 0
        }, 500),
        g = (V, w = []) => (
          V.forEach((S) => {
            w.push(S), S.children && g(S.children, w)
          }),
          w
        ),
        m = () => {
          ;(e.value = !1),
            setTimeout(() => {
              ;(l.value = ""), (c.value = [])
            }, 200)
        },
        b = (V) => {
          let S
          if (!r.value) return
          const w = r.value.getScrollTop(V)
          ;(S = s.value) == null || S.setScrollTop(w)
        },
        T = () => {
          p.value = !0
          const { length: V } = c.value
          if (V === 0) return
          const w = c.value.findIndex((S) => S.name === f.value)
          if (w === 0) {
            const S = c.value[V - 1].name
            f.value === S && V > 1 ? ((f.value = c.value[V - 2].name), b(V - 2)) : ((f.value = S), b(V - 1))
          } else (f.value = c.value[w - 1].name), b(w - 1)
        },
        A = () => {
          p.value = !0
          const { length: V } = c.value
          if (V === 0) return
          const w = c.value.map((S) => S.name).lastIndexOf(f.value)
          if (w === V - 1) {
            const S = c.value[0].name
            f.value === S && V > 1 ? ((f.value = c.value[1].name), b(1)) : ((f.value = S), b(0))
          } else (f.value = c.value[w + 1].name), b(w + 1)
        },
        O = () => {
          let W
          const { length: V } = c.value
          if (V === 0) return
          const w = f.value,
            S = (W = c.value.find((x) => x.name === w)) == null ? void 0 : W.path
          if (S && ve(S)) {
            window.open(S, "_blank", "noopener, noreferrer")
            return
          }
          if (!w) {
            pe.warning("无法通过搜索进入该菜单，请为对应的路由设置唯一的 Name")
            return
          }
          try {
            t.push({ name: w })
          } catch {
            pe.error("该菜单有必填的动态参数，无法通过搜索进入")
            return
          }
          m()
        },
        N = () => {
          p.value = !1
        }
      return (V, w) => {
        const S = k("SvgIcon"),
          W = k("el-input"),
          x = k("el-empty"),
          L = k("el-dialog")
        return (
          u(),
          C(
            L,
            {
              modelValue: e.value,
              "onUpdate:modelValue": w[2] || (w[2] = (z) => (e.value = z)),
              onOpened:
                w[3] ||
                (w[3] = (z) => {
                  let $
                  return ($ = o.value) == null ? void 0 : $.focus()
                }),
              onClosed:
                w[4] ||
                (w[4] = (z) => {
                  let $
                  return ($ = o.value) == null ? void 0 : $.blur()
                }),
              onKeydown: [le(T, ["up"]), le(A, ["down"]), le(O, ["enter"])],
              onKeyup: le(N, ["up", "down"]),
              "before-close": m,
              width: i.value,
              top: "5vh",
              class: "search-modal__private",
              "append-to-body": ""
            },
            {
              footer: _(() => [d(Gn, { total: c.value.length }, null, 8, ["total"])]),
              default: _(() => [
                d(
                  W,
                  {
                    ref_key: "inputRef",
                    ref: o,
                    modelValue: l.value,
                    "onUpdate:modelValue": w[0] || (w[0] = (z) => (l.value = z)),
                    onInput: v(h),
                    placeholder: "搜索菜单",
                    size: "large",
                    clearable: ""
                  },
                  { prefix: _(() => [d(S, { name: "search" })]), _: 1 },
                  8,
                  ["modelValue", "onInput"]
                ),
                c.value.length === 0
                  ? (u(), C(x, { key: 0, description: "暂无搜索结果", "image-size": 100 }))
                  : (u(),
                    M(
                      q,
                      { key: 1 },
                      [
                        Jn,
                        d(
                          v(je),
                          { ref_key: "scrollbarRef", ref: s, "max-height": "40vh", always: "" },
                          {
                            default: _(() => [
                              d(
                                On,
                                {
                                  ref_key: "searchResultRef",
                                  ref: r,
                                  modelValue: f.value,
                                  "onUpdate:modelValue": w[1] || (w[1] = (z) => (f.value = z)),
                                  list: c.value,
                                  isPressUpOrDown: p.value,
                                  onClick: O
                                },
                                null,
                                8,
                                ["modelValue", "list", "isPressUpOrDown"]
                              )
                            ]),
                            _: 1
                          },
                          512
                        )
                      ],
                      64
                    ))
              ]),
              _: 1
            },
            8,
            ["modelValue", "width"]
          )
        )
      }
    }
  }),
  jn = D({
    __name: "index",
    setup(n) {
      const e = P(!1),
        t = () => {
          e.value = !0
        }
      return (a, o) => {
        const s = k("SvgIcon"),
          r = k("el-tooltip")
        return (
          u(),
          M("div", null, [
            d(
              r,
              { effect: "dark", content: "搜索菜单", placement: "bottom" },
              { default: _(() => [d(s, { name: "search", onClick: t })]), _: 1 }
            ),
            d(Yn, { modelValue: e.value, "onUpdate:modelValue": o[0] || (o[0] = (l) => (e.value = l)) }, null, 8, [
              "modelValue"
            ])
          ])
        )
      }
    }
  }),
  Zn = F(jn, [["__scopeId", "data-v-08a5029a"]]),
  Qn = { class: "navigation-bar" },
  eo = { class: "right-menu" },
  to = { class: "right-menu-avatar" },
  no = { target: "_blank", href: "https://github.com/un-pany/v3-admin-vite" },
  oo = { target: "_blank", href: "https://gitee.com/un-pany/v3-admin-vite" },
  ao = D({
    __name: "index",
    setup(n) {
      const { isMobile: e } = ae(),
        { isTop: t } = se(),
        a = oe(),
        o = pt(),
        s = J(),
        { showNotify: r, showThemeSwitch: l, showScreenfull: c, showSearchMenu: f } = ne(s),
        p = () => {
          a.toggleSidebar(!1)
        }
      return (i, y) => {
        const h = k("el-avatar"),
          g = k("el-dropdown-item"),
          m = k("el-dropdown-menu"),
          b = k("el-dropdown")
        return (
          u(),
          M("div", Qn, [
            !v(t) || v(e)
              ? (u(),
                C(qt, { key: 0, "is-active": v(a).sidebar.opened, class: "hamburger", onToggleClick: p }, null, 8, [
                  "is-active"
                ]))
              : I("", !0),
            !v(t) || v(e) ? (u(), C(tn, { key: 1, class: "breadcrumb" })) : I("", !0),
            v(t) && !v(e) ? (u(), C(Te, { key: 2, class: "sidebar" })) : I("", !0),
            E("div", eo, [
              v(f) ? (u(), C(Zn, { key: 0, class: "right-menu-item" })) : I("", !0),
              v(c) ? (u(), C(et, { key: 1, class: "right-menu-item" })) : I("", !0),
              v(l) ? (u(), C(Ct, { key: 2, class: "right-menu-item" })) : I("", !0),
              v(r) ? (u(), C(An, { key: 3, class: "right-menu-item" })) : I("", !0),
              d(
                b,
                { class: "right-menu-item" },
                {
                  dropdown: _(() => [
                    d(m, null, {
                      default: _(() => [
                        E("a", no, [d(g, null, { default: _(() => [G("GitHub")]), _: 1 })]),
                        E("a", oo, [d(g, null, { default: _(() => [G("Gitee")]), _: 1 })])
                      ]),
                      _: 1
                    })
                  ]),
                  default: _(() => [
                    E("div", to, [
                      d(h, { icon: v(bt), size: 30 }, null, 8, ["icon"]),
                      E("span", null, B(v(o).username), 1)
                    ])
                  ]),
                  _: 1
                }
              )
            ])
          ])
        )
      }
    }
  }),
  Ve = F(ao, [["__scopeId", "data-v-35904977"]]),
  so = { class: "select-layout-mode" },
  ro = D({
    __name: "SelectLayoutMode",
    setup(n) {
      const { isLeft: e, isTop: t, isLeftTop: a, setLayoutMode: o } = se()
      return (s, r) => {
        const l = k("el-aside"),
          c = k("el-header"),
          f = k("el-main"),
          p = k("el-container"),
          i = k("el-tooltip")
        return (
          u(),
          M("div", so, [
            d(
              i,
              { content: "左侧模式" },
              {
                default: _(() => [
                  d(
                    p,
                    {
                      class: U(["layout-mode left", { active: v(e) }]),
                      onClick: r[0] || (r[0] = (y) => v(o)(v(ee).Left))
                    },
                    { default: _(() => [d(l), d(p, null, { default: _(() => [d(c), d(f)]), _: 1 })]), _: 1 },
                    8,
                    ["class"]
                  )
                ]),
                _: 1
              }
            ),
            d(
              i,
              { content: "顶部模式" },
              {
                default: _(() => [
                  d(
                    p,
                    {
                      class: U(["layout-mode top", { active: v(t) }]),
                      onClick: r[1] || (r[1] = (y) => v(o)(v(ee).Top))
                    },
                    { default: _(() => [d(c), d(f)]), _: 1 },
                    8,
                    ["class"]
                  )
                ]),
                _: 1
              }
            ),
            d(
              i,
              { content: "混合模式" },
              {
                default: _(() => [
                  d(
                    p,
                    {
                      class: U(["layout-mode left-top", { active: v(a) }]),
                      onClick: r[2] || (r[2] = (y) => v(o)(v(ee).LeftTop))
                    },
                    { default: _(() => [d(c), d(p, null, { default: _(() => [d(l), d(f)]), _: 1 })]), _: 1 },
                    8,
                    ["class"]
                  )
                ]),
                _: 1
              }
            )
          ])
        )
      }
    }
  }),
  lo = F(ro, [["__scopeId", "data-v-c73872da"]]),
  tt = (n) => (Ke("data-v-1fc3e29f"), (n = n()), Ge(), n),
  co = { class: "setting-container" },
  io = tt(() => E("h4", null, "布局配置", -1)),
  uo = tt(() => E("h4", null, "功能配置", -1)),
  fo = { class: "setting-name" },
  po = D({
    __name: "index",
    setup(n) {
      const { isLeft: e } = se(),
        t = J(),
        {
          showTagsView: a,
          showLogo: o,
          fixedHeader: s,
          showFooter: r,
          showNotify: l,
          showThemeSwitch: c,
          showScreenfull: f,
          showSearchMenu: p,
          cacheTagsView: i,
          showWatermark: y,
          showGreyMode: h,
          showColorWeakness: g
        } = ne(t),
        m = {
          显示标签栏: a,
          "显示 Logo": o,
          "固定 Header": s,
          "显示页脚 Footer": r,
          显示消息通知: l,
          显示切换主题按钮: c,
          显示全屏按钮: f,
          显示搜索按钮: p,
          是否缓存标签栏: i,
          开启系统水印: y,
          显示灰色模式: h,
          显示色弱模式: g
        }
      return (
        fe(() => {
          !e.value && (s.value = !0)
        }),
        (b, T) => {
          const A = k("el-divider"),
            O = k("el-switch"),
            N = k("el-button")
          return (
            u(),
            M("div", co, [
              io,
              d(lo),
              d(A),
              uo,
              (u(),
              M(
                q,
                null,
                j(m, (V, w, S) =>
                  E("div", { class: "setting-item", key: S }, [
                    E("span", fo, B(w), 1),
                    d(
                      O,
                      {
                        modelValue: V.value,
                        "onUpdate:modelValue": (W) => (V.value = W),
                        disabled: !v(e) && w === "固定 Header"
                      },
                      null,
                      8,
                      ["modelValue", "onUpdate:modelValue", "disabled"]
                    )
                  ])
                ),
                64
              )),
              d(N, { type: "danger", icon: v(wt), onClick: v(_n) }, { default: _(() => [G("重 置")]), _: 1 }, 8, [
                "icon",
                "onClick"
              ])
            ])
          )
        }
      )
    }
  }),
  vo = F(po, [["__scopeId", "data-v-1fc3e29f"]]),
  mo = { class: "scroll-container" },
  _o = 200,
  ho = D({
    __name: "ScrollPane",
    props: { tagRefs: {} },
    setup(n) {
      const e = n,
        t = me(),
        a = J(),
        { listenerRouteChange: o } = ge(),
        s = P(),
        r = P()
      let l = 0
      const c = ({ scrollLeft: h }) => {
          l = h
        },
        f = ({ deltaY: h }) => {
          ;/^-/.test(h.toString()) ? i("left") : i("right")
        },
        p = () => {
          const h = r.value.clientWidth,
            g = s.value.wrapRef.clientWidth,
            m = h - g - l
          return { scrollbarContentRefWidth: h, scrollbarRefWidth: g, lastDistance: m }
        },
        i = (h, g = _o) => {
          let m = 0
          const { scrollbarContentRefWidth: b, scrollbarRefWidth: T, lastDistance: A } = p()
          T > b || (h === "left" ? (m = Math.max(0, l - g)) : (m = Math.min(l + g, l + A)), s.value.setScrollLeft(m))
        },
        y = () => {
          const h = e.tagRefs
          for (let g = 0; g < h.length; g++)
            if (t.path === h[g].$props.to.path) {
              const m = h[g].$el,
                b = m.offsetWidth,
                T = m.offsetLeft,
                { scrollbarRefWidth: A } = p()
              if (T < l) {
                const N = l - T
                i("left", N)
                return
              }
              const O = A + l - b
              if (T > O) {
                const N = T - O
                i("right", N)
                return
              }
            }
        }
      return (
        o(() => {
          ct(y)
        }),
        (h, g) => {
          const m = k("el-icon")
          return (
            u(),
            M("div", mo, [
              d(
                m,
                { class: "arrow left", onClick: g[0] || (g[0] = (b) => i("left")) },
                { default: _(() => [d(v(yt))]), _: 1 }
              ),
              d(
                v(je),
                { ref_key: "scrollbarRef", ref: s, onWheelPassive: f, onScroll: c },
                {
                  default: _(() => [
                    E(
                      "div",
                      { ref_key: "scrollbarContentRef", ref: r, class: "scrollbar-content" },
                      [de(h.$slots, "default", {}, void 0, !0)],
                      512
                    )
                  ]),
                  _: 3
                },
                512
              ),
              d(
                m,
                { class: "arrow right", onClick: g[1] || (g[1] = (b) => i("right")) },
                { default: _(() => [d(v(kt))]), _: 1 }
              ),
              v(a).showScreenfull ? (u(), C(et, { key: 0, content: !0, class: "screenfull" })) : I("", !0)
            ])
          )
        }
      )
    }
  }),
  go = F(ho, [["__scopeId", "data-v-93122cdc"]]),
  bo = { class: "tags-view-container" },
  wo = D({
    __name: "index",
    setup(n) {
      const e = qe(),
        t = xe(),
        a = me(),
        o = Ye(),
        s = Ce(),
        { listenerRouteChange: r } = ge(),
        l = P([]),
        c = P(!1),
        f = P(0),
        p = P(0),
        i = P({})
      let y = []
      const h = (x) => x.path === a.path,
        g = (x) => {
          let L
          return (L = x.meta) == null ? void 0 : L.affix
        },
        m = (x, L = "/") => {
          const z = []
          return (
            x.forEach(($) => {
              if (g($)) {
                const X = Qe.resolve(L, $.path)
                z.push({ fullPath: X, path: X, name: $.name, meta: { ...$.meta } })
              }
              if ($.children) {
                const X = m($.children, $.path)
                z.push(...X)
              }
            }),
            z
          )
        },
        b = () => {
          y = m(s.routes)
          for (const x of y) x.name && o.addVisitedView(x)
        },
        T = (x) => {
          x.name && (o.addVisitedView(x), o.addCachedView(x))
        },
        A = (x) => {
          o.delCachedView(x), t.replace({ path: "/redirect" + x.path, query: x.query })
        },
        O = (x) => {
          o.delVisitedView(x), o.delCachedView(x), h(x) && w(o.visitedViews, x)
        },
        N = () => {
          const x = i.value.fullPath
          x !== a.path && x !== void 0 && t.push(x), o.delOthersVisitedViews(i.value), o.delOthersCachedViews(i.value)
        },
        V = (x) => {
          o.delAllVisitedViews(), o.delAllCachedViews(), !y.some((L) => L.path === a.path) && w(o.visitedViews, x)
        },
        w = (x, L) => {
          const z = x.slice(-1)[0],
            $ = z == null ? void 0 : z.fullPath
          $ !== void 0
            ? t.push($)
            : L.name === "Dashboard"
              ? t.push({ path: "/redirect" + L.path, query: L.query })
              : t.push("/")
        },
        S = (x, L) => {
          const $ = e.proxy.$el.getBoundingClientRect().left,
            we = e.proxy.$el.offsetWidth - 105,
            Re = L.clientX - $ + 15
          ;(p.value = Re > we ? we : Re), (f.value = L.clientY), (c.value = !0), (i.value = x)
        },
        W = () => {
          c.value = !1
        }
      return (
        Ne(c, (x) => {
          x ? document.body.addEventListener("click", W) : document.body.removeEventListener("click", W)
        }),
        ke(() => {
          b(),
            r(async (x) => {
              T(x)
            }, !0)
        }),
        (x, L) => {
          const z = k("el-icon")
          return (
            u(),
            M("div", bo, [
              d(
                go,
                { class: "tags-view-wrapper", "tag-refs": l.value },
                {
                  default: _(() => [
                    (u(!0),
                    M(
                      q,
                      null,
                      j(
                        v(o).visitedViews,
                        ($) => (
                          u(),
                          C(
                            v(it),
                            {
                              ref_for: !0,
                              ref_key: "tagRefs",
                              ref: l,
                              key: $.path,
                              class: U([{ active: h($) }, "tags-view-item"]),
                              to: { path: $.path, query: $.query },
                              onMouseup: ce((X) => !g($) && O($), ["middle"]),
                              onContextmenu: ce((X) => S($, X), ["prevent"])
                            },
                            {
                              default: _(() => {
                                let X
                                return [
                                  G(B((X = $.meta) == null ? void 0 : X.title) + " ", 1),
                                  g($)
                                    ? I("", !0)
                                    : (u(),
                                      C(
                                        z,
                                        { key: 0, size: 12, onClick: ce((we) => O($), ["prevent", "stop"]) },
                                        { default: _(() => [d(v(St))]), _: 2 },
                                        1032,
                                        ["onClick"]
                                      ))
                                ]
                              }),
                              _: 2
                            },
                            1032,
                            ["class", "to", "onMouseup", "onContextmenu"]
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 1
                },
                8,
                ["tag-refs"]
              ),
              _e(
                E(
                  "ul",
                  { class: "contextmenu", style: Xe({ left: p.value + "px", top: f.value + "px" }) },
                  [
                    E("li", { onClick: L[0] || (L[0] = ($) => A(i.value)) }, "刷新"),
                    g(i.value)
                      ? I("", !0)
                      : (u(), M("li", { key: 0, onClick: L[1] || (L[1] = ($) => O(i.value)) }, "关闭")),
                    E("li", { onClick: N }, "关闭其它"),
                    E("li", { onClick: L[2] || (L[2] = ($) => V(i.value)) }, "关闭所有")
                  ],
                  4
                ),
                [[he, c.value]]
              )
            ])
          )
        }
      )
    }
  }),
  Le = F(wo, [["__scopeId", "data-v-e12a26c9"]]),
  yo = D({
    __name: "index",
    props: { buttonTop: { default: 350 } },
    setup(n) {
      He((o) => ({ 57869733: t }))
      const t = n.buttonTop + "px",
        a = P(!1)
      return (o, s) => {
        const r = k("el-icon"),
          l = k("el-drawer")
        return (
          u(),
          M(
            q,
            null,
            [
              E("div", { class: "handle-button", onClick: s[0] || (s[0] = (c) => (a.value = !0)) }, [
                d(r, { size: 24 }, { default: _(() => [d(v(xt))]), _: 1 })
              ]),
              d(
                l,
                {
                  modelValue: a.value,
                  "onUpdate:modelValue": s[1] || (s[1] = (c) => (a.value = c)),
                  size: "300px",
                  "with-header": !1
                },
                { default: _(() => [de(o.$slots, "default", {}, void 0, !0)]), _: 3 },
                8,
                ["modelValue"]
              )
            ],
            64
          )
        )
      }
    }
  }),
  ko = F(yo, [["__scopeId", "data-v-6935ad0e"]]),
  So = D({
    __name: "LeftMode",
    setup(n) {
      const { isMobile: e } = ae(),
        t = oe(),
        a = J(),
        { showTagsView: o, fixedHeader: s } = ne(a),
        r = R(() => ({
          hideSidebar: !t.sidebar.opened,
          openSidebar: t.sidebar.opened,
          withoutAnimation: t.sidebar.withoutAnimation,
          mobile: e.value
        })),
        l = () => {
          t.closeSidebar(!1)
        }
      return (c, f) => (
        u(),
        M(
          "div",
          { class: U([r.value, "app-wrapper"]) },
          [
            r.value.mobile && r.value.openSidebar
              ? (u(), M("div", { key: 0, class: "drawer-bg", onClick: l }))
              : I("", !0),
            d(v(Te), { class: "sidebar-container" }),
            E(
              "div",
              { class: U([{ hasTagsView: v(o) }, "main-container"]) },
              [
                E(
                  "div",
                  { class: U([{ "fixed-header": v(s) }, "layout-header"]) },
                  [d(v(Ve)), _e(d(v(Le), null, null, 512), [[he, v(o)]])],
                  2
                ),
                d(v(Ee), { class: "app-main" })
              ],
              2
            )
          ],
          2
        )
      )
    }
  }),
  xo = F(So, [["__scopeId", "data-v-6fea05d2"]]),
  Co = { class: "app-wrapper" },
  Eo = { class: "fixed-header layout-header" },
  Mo = { class: "content" },
  To = D({
    __name: "TopMode",
    setup(n) {
      const e = J(),
        { showTagsView: t, showLogo: a } = ne(e)
      return (o, s) => (
        u(),
        M("div", Co, [
          E("div", Eo, [
            E("div", Mo, [
              v(a) ? (u(), C(v(Me), { key: 0, collapse: !1, class: "logo" })) : I("", !0),
              d(v(Ve), { class: "navigation-bar" })
            ]),
            _e(d(v(Le), null, null, 512), [[he, v(t)]])
          ]),
          E("div", { class: U([{ hasTagsView: v(t) }, "main-container"]) }, [d(v(Ee), { class: "app-main" })], 2)
        ])
      )
    }
  }),
  $o = F(To, [["__scopeId", "data-v-214c1b76"]]),
  Vo = { class: "fixed-header layout-header" },
  Lo = { class: "content" },
  Ro = D({
    __name: "LeftTopMode",
    setup(n) {
      const e = oe(),
        t = J(),
        { showTagsView: a, showLogo: o } = ne(t),
        s = R(() => ({ hideSidebar: !e.sidebar.opened }))
      return (r, l) => (
        u(),
        M(
          "div",
          { class: U([s.value, "app-wrapper"]) },
          [
            E("div", Vo, [
              v(o) ? (u(), C(v(Me), { key: 0, collapse: !1, class: "logo" })) : I("", !0),
              E("div", Lo, [d(v(Ve)), _e(d(v(Le), null, null, 512), [[he, v(a)]])])
            ]),
            E(
              "div",
              { class: U([{ hasTagsView: v(a) }, "main-container"]) },
              [d(v(Te), { class: "sidebar-container" }), d(v(Ee), { class: "app-main" })],
              2
            )
          ],
          2
        )
      )
    }
  }),
  Ao = F(Ro, [["__scopeId", "data-v-134c0ec9"]]),
  ye = "--v3-tagsview-height",
  Io = D({
    __name: "index",
    setup(n) {
      Tt()
      const { setWatermark: e, clearWatermark: t } = Vt(),
        { isMobile: a } = ae(),
        { isLeft: o, isTop: s, isLeftTop: r } = se(),
        l = J(),
        { showSettings: c, showTagsView: f, showWatermark: p, showGreyMode: i, showColorWeakness: y } = ne(l),
        h = R(() => ({ showGreyMode: i.value, showColorWeakness: y.value })),
        g = ie(ye)
      return (
        fe(() => {
          f.value ? Pe(ye, g) : Pe(ye, "0px")
        }),
        fe(() => {
          p.value ? e("V3 Admin Vite") : t()
        }),
        (m, b) => (
          u(),
          M(
            "div",
            { class: U(h.value) },
            [
              v(o) || v(a)
                ? (u(), C(xo, { key: 0 }))
                : v(s)
                  ? (u(), C($o, { key: 1 }))
                  : v(r)
                    ? (u(), C(Ao, { key: 2 }))
                    : I("", !0),
              v(c) ? (u(), C(v(ko), { key: 3 }, { default: _(() => [d(v(vo))]), _: 1 })) : I("", !0)
            ],
            2
          )
        )
      )
    }
  }),
  No = F(Io, [["__scopeId", "data-v-8b901b05"]])
export { No as default }

import {
  d as ut,
  Z as Ht,
  ag as p,
  ah as It,
  l as Dt,
  A as gt,
  e as Pe,
  n as de,
  as as Wp,
  r as Xe,
  R as Ot,
  a5 as Un,
  G as Yt,
  c as pr,
  Y as or,
  b as Ff,
  z as eu,
  av as If,
  a6 as _p,
  aw as jp
} from "./vue-CdwtzrMo.js"
import { g as Nf, a as qp, d as Yp } from "./element-BVm2vh5v.js"
const Gp = {
    cookies: { path: "/" },
    treeOptions: { parentKey: "parentId", key: "id", children: "children" },
    parseDateFormat: "yyyy-MM-dd HH:mm:ss",
    firstDayOfWeek: 1
  },
  Ra = Gp
function Up(e, t, r) {
  if (e)
    if (e.forEach) e.forEach(t, r)
    else for (let a = 0, n = e.length; a < n; a++) t.call(r, e[a], a, e)
}
const Nr = Up,
  Xp = Object.prototype.toString,
  Pf = Xp,
  Kp = Pf
function Zp(e) {
  return function (t) {
    return "[object " + e + "]" === Kp.call(t)
  }
}
const Gi = Zp,
  Jp = Gi,
  Qp = Array.isArray || Jp("Array"),
  Bt = Qp
function eh(e, t) {
  return e && e.hasOwnProperty ? e.hasOwnProperty(t) : !1
}
const ra = eh,
  th = ra
function rh(e, t, r) {
  if (e) for (const a in e) th(e, a) && t.call(r, e[a], a, e)
}
const Ui = rh,
  ah = Bt,
  nh = Nr,
  ih = Ui
function lh(e, t, r) {
  return e && (ah(e) ? nh : ih)(e, t, r)
}
const ar = lh
function oh(e) {
  return function (t) {
    return typeof t === e
  }
}
const Xn = oh,
  uh = Xn,
  ch = uh("function"),
  Hr = ch,
  sh = ar
function fh(e, t) {
  const r = Object[e]
  return function (a) {
    const n = []
    if (a) {
      if (r) return r(a)
      sh(
        a,
        t > 1
          ? function (s) {
              n.push(["" + s, a[s]])
            }
          : function () {
              n.push(arguments[t])
            }
      )
    }
    return n
  }
}
const tu = fh,
  vh = tu,
  dh = vh("keys", 1),
  ka = dh,
  ph = Pf,
  hh = Ui,
  gh = Nr
function oo(e, t) {
  const r = e.__proto__.constructor
  return t ? new r(t) : new r()
}
function fl(e, t) {
  return t ? $f(e, t) : e
}
function $f(e, t) {
  if (e)
    switch (ph.call(e)) {
      case "[object Object]": {
        const r = Object.create(Object.getPrototypeOf(e))
        return (
          hh(e, function (o, d) {
            r[d] = fl(o, t)
          }),
          r
        )
      }
      case "[object Date]":
      case "[object RegExp]":
        return oo(e, e.valueOf())
      case "[object Array]":
      case "[object Arguments]": {
        const a = []
        return (
          gh(e, function (o) {
            a.push(fl(o, t))
          }),
          a
        )
      }
      case "[object Set]": {
        const n = oo(e)
        return (
          n.forEach(function (o) {
            n.add(fl(o, t))
          }),
          n
        )
      }
      case "[object Map]": {
        const s = oo(e)
        return (
          s.forEach(function (o, d) {
            s.set(d, fl(o, t))
          }),
          s
        )
      }
    }
  return e
}
function mh(e, t) {
  return e && $f(e, t)
}
const ru = mh,
  bh = Nr,
  xh = ka,
  Ch = Bt,
  yh = ru,
  Ec = Object.assign
function Sc(e, t, r) {
  for (var a = t.length, n, s = 1; s < a; s++)
    (n = t[s]),
      bh(
        xh(t[s]),
        r
          ? function (o) {
              e[o] = yh(n[o], r)
            }
          : function (o) {
              e[o] = n[o]
            }
      )
  return e
}
const wh = function (e) {
    if (e) {
      const t = arguments
      if (e === !0) {
        if (t.length > 1) return (e = Ch(e[1]) ? [] : {}), Sc(e, t, !0)
      } else return Ec ? Ec.apply(Object, t) : Sc(e, t)
    }
    return e
  },
  aa = wh,
  Eh = Ra,
  Sh = Nr,
  Oh = ar,
  Th = Hr,
  Dh = aa,
  xn = function () {}
function Mh() {
  Sh(arguments, function (e) {
    Oh(e, function (t, r) {
      xn[r] = Th(t)
        ? function () {
            const a = t.apply(xn.$context, arguments)
            return (xn.$context = null), a
          }
        : t
    })
  })
}
function Rh(e) {
  return Dh(Eh, e)
}
xn.VERSION = "3.5.22"
xn.mixin = Mh
xn.setup = Rh
const kh = xn
function Fh(e, t, r) {
  for (let a = e.length - 1; a >= 0; a--) t.call(r, e[a], a, e)
}
const au = Fh,
  Ih = au,
  Nh = ka
function Ph(e, t, r) {
  Ih(Nh(e), function (a) {
    t.call(r, e[a], a, e)
  })
}
const Lf = Ph
function $h(e) {
  return e === null
}
const Fa = $h,
  Lh = Fa
function Ah(e, t) {
  return function (r) {
    return Lh(r) ? t : r[e]
  }
}
const Kn = Ah,
  Vh = ar,
  Bh = Hr,
  Hh = Kn
function zh(e, t, r) {
  const a = {}
  if (e)
    if (t)
      Bh(t) || (t = Hh(t)),
        Vh(e, function (n, s) {
          a[s] = t.call(r, n, s, e)
        })
    else return e
  return a
}
const Wh = zh
function _h(e) {
  return e ? e.constructor === Object : !1
}
const Zn = _h,
  Oc = Bt,
  Tc = Zn,
  jh = ar
function Af(e, t) {
  return (Tc(e) && Tc(t)) || (Oc(e) && Oc(t))
    ? (jh(t, function (r, a) {
        e[a] = Af(e[a], r)
      }),
      e)
    : t
}
const qh = function (e) {
    e || (e = {})
    for (var t = arguments, r = t.length, a, n = 1; n < r; n++) (a = t[n]), a && Af(e, a)
    return e
  },
  Yh = qh,
  Gh = ar
function Uh(e, t, r) {
  const a = []
  if (e && arguments.length > 1) {
    if (e.map) return e.map(t, r)
    Gh(e, function () {
      a.push(t.apply(r, arguments))
    })
  }
  return a
}
const Jn = Uh,
  Xh = ra,
  Kh = Bt
function Zh(e, t, r, a, n) {
  return function (s, o, d) {
    if (s && o) {
      if (e && s[e]) return s[e](o, d)
      if (t && Kh(s)) {
        for (let l = 0, f = s.length; l < f; l++) if (!!o.call(d, s[l], l, s) === a) return [!0, !1, l, s[l]][r]
      } else for (const h in s) if (Xh(s, h) && !!o.call(d, s[h], h, s) === a) return [!0, !1, h, s[h]][r]
    }
    return n
  }
}
const Bl = Zh,
  Jh = Bl,
  Qh = Jh("some", 1, 0, !0, !1),
  Vf = Qh,
  eg = Bl,
  tg = eg("every", 1, 1, !1, !0),
  Bf = tg,
  rg = ra
function ag(e, t) {
  if (e) {
    if (e.includes) return e.includes(t)
    for (const r in e) if (rg(e, r) && t === e[r]) return !0
  }
  return !1
}
const Xi = ag,
  Dc = Bt,
  Mc = Xi
function ng(e, t) {
  let r,
    a = 0
  if (Dc(e) && Dc(t)) {
    for (r = t.length; a < r; a++) if (!Mc(e, t[a])) return !1
    return !0
  }
  return Mc(e, t)
}
const Hf = ng,
  Rc = ar,
  ig = Xi,
  lg = Hr,
  og = Kn
function ug(e, t, r) {
  const a = []
  if (t) {
    lg(t) || (t = og(t))
    let n,
      s = {}
    Rc(e, function (o, d) {
      ;(n = t.call(r, o, d, e)), s[n] || ((s[n] = 1), a.push(o))
    })
  } else
    Rc(e, function (o) {
      ig(a, o) || a.push(o)
    })
  return a
}
const zf = ug,
  cg = Jn
function sg(e) {
  return cg(e, function (t) {
    return t
  })
}
const nu = sg,
  fg = zf,
  vg = nu
function dg() {
  for (var e = arguments, t = [], r = 0, a = e.length; r < a; r++) t = t.concat(vg(e[r]))
  return fg(t)
}
const pg = dg,
  hg = "undefined",
  na = hg,
  gg = na,
  mg = Xn,
  bg = mg(gg),
  ha = bg,
  xg = Fa,
  Cg = ha
function yg(e) {
  return xg(e) || Cg(e)
}
const Ja = yg,
  wg = /(.+)?\[(\d+)\]$/,
  Wf = wg
function Eg(e) {
  return e
    ? e.splice && e.join
      ? e
      : ("" + e)
          .replace(/(\[\d+\])\.?/g, "$1.")
          .replace(/\.$/, "")
          .split(".")
    : []
}
const iu = Eg,
  Sg = Wf,
  Og = iu,
  Tg = ra,
  Dg = ha,
  _f = Ja
function Mg(e, t, r) {
  if (_f(e)) return r
  const a = kg(e, t)
  return Dg(a) ? r : a
}
function Rg(e, t) {
  const r = t ? t.match(Sg) : ""
  return r ? (r[1] ? (e[r[1]] ? e[r[1]][r[2]] : void 0) : e[r[2]]) : e[t]
}
function kg(e, t) {
  if (e) {
    let r,
      a,
      n,
      s = 0
    if (e[t] || Tg(e, t)) return e[t]
    if (((a = Og(t)), (n = a.length), n)) {
      for (r = e; s < n; s++) if (((r = Rg(r, a[s])), _f(r))) return s === n - 1 ? r : void 0
    }
    return r
  }
}
const Ki = Mg,
  kc = Nr,
  Fg = nu,
  Fc = Jn,
  Ic = Bt,
  Ig = Hr,
  Ng = Zn,
  Nc = ha,
  Pg = Fa,
  $g = Ja,
  Lg = Ki,
  Ag = Kn,
  Vg = "asc",
  Bg = "desc"
function Ao(e, t) {
  return Nc(e) ? 1 : Pg(e) ? (Nc(t) ? -1 : 1) : e && e.localeCompare ? e.localeCompare(t) : e > t ? 1 : -1
}
function Hg(e, t, r) {
  return function (a, n) {
    const s = a[e],
      o = n[e]
    return s === o ? (r ? r(a, n) : 0) : t.order === Bg ? Ao(o, s) : Ao(s, o)
  }
}
function zg(e, t, r, a) {
  const n = []
  return (
    (r = Ic(r) ? r : [r]),
    kc(r, function (s, o) {
      if (s) {
        let d = s,
          l
        Ic(s) ? ((d = s[0]), (l = s[1])) : Ng(s) && ((d = s.field), (l = s.order)),
          n.push({ field: d, order: l || Vg }),
          kc(
            t,
            Ig(d)
              ? function (f, h) {
                  f[o] = d.call(a, f.data, h, e)
                }
              : function (f) {
                  f[o] = d ? Lg(f.data, d) : f.data
                }
          )
      }
    }),
    n
  )
}
function Wg(e, t, r) {
  if (e) {
    if ($g(t)) return Fg(e).sort(Ao)
    for (
      var a,
        n = Fc(e, function (d) {
          return { data: d }
        }),
        s = zg(e, n, t, r),
        o = s.length - 1;
      o >= 0;

    )
      (a = Hg(o, s[o], a)), o--
    return a && (n = n.sort(a)), Fc(n, Ag("data"))
  }
  return []
}
const lu = Wg,
  _g = lu,
  jg = _g,
  qg = jg
function Yg(e, t) {
  return e >= t ? e : (e = e >> 0) + Math.round(Math.random() * ((t || 9) - e))
}
const jf = Yg,
  Gg = tu,
  Ug = Gg("values", 0),
  Qn = Ug,
  Xg = jf,
  Kg = Qn
function Zg(e) {
  for (var t, r = [], a = Kg(e), n = a.length - 1; n >= 0; n--) (t = n > 0 ? Xg(0, n) : 0), r.push(a[t]), a.splice(t, 1)
  return r
}
const qf = Zg,
  Jg = qf
function Qg(e, t) {
  const r = Jg(e)
  return arguments.length <= 1 ? r[0] : (t < r.length && (r.length = t || 0), r)
}
const em = Qg
function tm(e) {
  return function (t) {
    if (t) {
      const r = e(t && t.replace ? t.replace(/,/g, "") : t)
      if (!isNaN(r)) return r
    }
    return 0
  }
}
const Yf = tm,
  rm = Yf,
  am = rm(parseFloat),
  En = am,
  Pc = En
function nm(e, t, r) {
  const a = [],
    n = arguments.length
  if (e) {
    if (((t = n >= 2 ? Pc(t) : 0), (r = n >= 3 ? Pc(r) : e.length), e.slice)) return e.slice(t, r)
    for (; t < r; t++) a.push(e[t])
  }
  return a
}
const Sn = nm,
  im = ar
function lm(e, t, r) {
  const a = []
  if (e && t) {
    if (e.filter) return e.filter(t, r)
    im(e, function (n, s) {
      t.call(r, n, s, e) && a.push(n)
    })
  }
  return a
}
const om = lm,
  um = Bl,
  cm = um("", 0, 2, !0),
  sm = cm,
  fm = Bl,
  vm = fm("find", 1, 3, !0),
  dm = vm,
  pm = Bt,
  hm = Qn
function gm(e, t, r) {
  if (e) {
    pm(e) || (e = hm(e))
    for (let a = e.length - 1; a >= 0; a--) if (t.call(r, e[a], a, e)) return e[a]
  }
}
const mm = gm,
  bm = ka
function xm(e, t, r) {
  if (e) {
    let a,
      n,
      s = 0,
      o = null,
      d = r,
      l = arguments.length > 2,
      f = bm(e)
    if (e.length && e.reduce)
      return (
        (n = function () {
          return t.apply(o, arguments)
        }),
        l ? e.reduce(n, d) : e.reduce(n)
      )
    for (l && ((s = 1), (d = e[f[0]])), a = f.length; s < a; s++) d = t.call(o, d, e[f[s]], s, e)
    return d
  }
}
const Cm = xm,
  ym = Bt
function wm(e, t, r, a) {
  if (ym(e) && e.copyWithin) return e.copyWithin(t, r, a)
  let n,
    s,
    o = t >> 0,
    d = r >> 0,
    l = e.length,
    f = arguments.length > 3 ? a >> 0 : l
  if (o < l && ((o = o >= 0 ? o : l + o), o >= 0 && ((d = d >= 0 ? d : l + d), (f = f >= 0 ? f : l + f), d < f)))
    for (n = 0, s = e.slice(d, f); o < l && !(s.length <= n); o++) e[o] = s[n++]
  return e
}
const Em = wm,
  Sm = Bt
function Om(e, t) {
  let r,
    a = [],
    n = t >> 0 || 1
  if (Sm(e))
    if (n >= 0 && e.length > n) for (r = 0; r < e.length; ) a.push(e.slice(r, r + n)), (r += n)
    else a = e.length ? [e] : e
  return a
}
const Tm = Om,
  Dm = Jn,
  Mm = Kn
function Rm(e, t) {
  return Dm(e, Mm(t))
}
const Gf = Rm,
  km = Hr,
  $c = Ja,
  Fm = Ki,
  Im = Nr
function Nm(e) {
  return function (t, r) {
    if (t && t.length) {
      var a, n
      return (
        Im(t, function (s, o) {
          r && (s = km(r) ? r(s, o, t) : Fm(s, r)), !$c(s) && ($c(a) || e(a, s)) && ((n = o), (a = s))
        }),
        t[n]
      )
    }
    return a
  }
}
const Uf = Nm,
  Pm = Uf,
  $m = Pm(function (e, t) {
    return e < t
  }),
  Xf = $m,
  Lm = Gf,
  Am = Xf
function Vm(e) {
  let t,
    r,
    a,
    n = []
  if (e && e.length)
    for (
      t = 0,
        r = Am(e, function (s) {
          return s ? s.length : 0
        }),
        a = r ? r.length : 0;
      t < a;
      t++
    )
      n.push(Lm(e, t))
  return n
}
const Kf = Vm,
  Bm = Kf
function Hm() {
  return Bm(arguments)
}
const zm = Hm,
  Wm = Qn,
  _m = ar
function jm(e, t) {
  const r = {}
  return (
    (t = t || []),
    _m(Wm(e), function (a, n) {
      r[a] = t[n]
    }),
    r
  )
}
const qm = jm,
  Zf = Bt,
  Ym = Nr
function Jf(e, t) {
  let r = []
  return (
    Ym(e, function (a) {
      r = r.concat(Zf(a) ? (t ? Jf(a, t) : a) : [a])
    }),
    r
  )
}
function Gm(e, t) {
  return Zf(e) ? Jf(e, t) : []
}
const Um = Gm,
  Xm = Jn,
  Km = Bt
function Zm(e, t) {
  for (var r = 0, a = t.length; e && r < a; ) e = e[t[r++]]
  return a && e ? e : 0
}
function Jm(e, t) {
  for (var r, a = arguments, n = [], s = [], o = 2, d = a.length; o < d; o++) n.push(a[o])
  if (Km(t)) {
    for (d = t.length - 1, o = 0; o < d; o++) s.push(t[o])
    t = t[d]
  }
  return Xm(e, function (l) {
    if ((s.length && (l = Zm(l, s)), (r = l[t] || t), r && r.apply)) return r.apply(l, n)
  })
}
const Qm = Jm
function eb(e, t) {
  try {
    delete e[t]
  } catch {
    e[t] = void 0
  }
}
const Qf = eb,
  tb = Bt,
  rb = au,
  ab = Lf
function nb(e, t, r) {
  return e && (tb(e) ? rb : ab)(e, t, r)
}
const ev = nb,
  ib = Xn,
  lb = ib("object"),
  Hl = lb,
  ob = Qf,
  ub = Zn,
  cb = Hl,
  sb = Bt,
  fb = Fa,
  vb = aa,
  db = Ui
function pb(e, t, r) {
  if (e) {
    let a,
      n = arguments.length > 1 && (fb(t) || !cb(t)),
      s = n ? r : t
    if (ub(e))
      db(
        e,
        n
          ? function (o, d) {
              e[d] = t
            }
          : function (o, d) {
              ob(e, d)
            }
      ),
        s && vb(e, s)
    else if (sb(e)) {
      if (n) for (a = e.length; a > 0; ) a--, (e[a] = t)
      else e.length = 0
      s && e.push.apply(e, s)
    }
  }
  return e
}
const tv = pb,
  hb = Qf,
  gb = Hr,
  mb = Bt,
  bb = ar,
  xb = Nr,
  Cb = ev,
  yb = tv,
  wb = Ja
function Eb(e) {
  return function (t, r) {
    return r === e
  }
}
function Sb(e, t, r) {
  if (e) {
    if (!wb(t)) {
      let a = [],
        n = []
      return (
        gb(t) || (t = Eb(t)),
        bb(e, function (s, o, d) {
          t.call(r, s, o, d) && a.push(o)
        }),
        mb(e)
          ? Cb(a, function (s, o) {
              n.push(e[s]), e.splice(s, 1)
            })
          : ((n = {}),
            xb(a, function (s) {
              ;(n[s] = e[s]), hb(e, s)
            })),
        n
      )
    }
    return yb(e)
  }
  return e
}
const rv = Sb,
  Ob = Ra,
  Tb = lu,
  Db = ru,
  Mb = Ja,
  Vo = ar,
  Rb = rv,
  kb = aa
function Fb(e, t) {
  Vo(e, function (r) {
    r[t] && !r[t].length && Rb(r, t)
  })
}
function Ib(e, t) {
  let r = kb({}, Ob.treeOptions, t),
    a = r.strict,
    n = r.key,
    s = r.parentKey,
    o = r.children,
    d = r.mapChildren,
    l = r.sortKey,
    f = r.reverse,
    h = r.data,
    D = [],
    I = {},
    N = {},
    F,
    q,
    $
  return (
    l && ((e = Tb(Db(e), l)), f && (e = e.reverse())),
    Vo(e, function (B) {
      ;(F = B[n]), (N[F] = !0)
    }),
    Vo(e, function (B) {
      ;(F = B[n]),
        h ? ((q = {}), (q[h] = B)) : (q = B),
        ($ = B[s]),
        (I[F] = I[F] || []),
        (I[$] = I[$] || []),
        I[$].push(q),
        (q[n] = F),
        (q[s] = $),
        (q[o] = I[F]),
        d && (q[d] = I[F]),
        (!a || (a && Mb($))) && (N[$] || D.push(q))
    }),
    a && Fb(e, o),
    D
  )
}
const Nb = Ib,
  Pb = Ra,
  $b = ar,
  Lb = aa
function av(e, t, r) {
  const a = r.children,
    n = r.data,
    s = r.clear
  return (
    $b(t, function (o) {
      const d = o[a]
      n && (o = o[n]), e.push(o), d && d.length && av(e, d, r), s && delete o[a]
    }),
    e
  )
}
function Ab(e, t) {
  return av([], e, Lb({}, Pb.treeOptions, t))
}
const Vb = Ab
function Bb(e) {
  return function (t, r, a, n) {
    const s = a || {},
      o = s.children || "children"
    return e(null, t, r, n, [], [], o, s)
  }
}
const zl = Bb,
  Hb = zl
function nv(e, t, r, a, n, s, o, d) {
  if (t) {
    let l, f, h, D, I, N
    for (f = 0, h = t.length; f < h; f++) {
      if (((l = t[f]), (D = n.concat(["" + f])), (I = s.concat([l])), r.call(a, l, f, t, D, e, I)))
        return { index: f, item: l, path: D, items: t, parent: e, nodes: I }
      if (o && l && ((N = nv(l, l[o], r, a, D.concat([o]), I, o)), N)) return N
    }
  }
}
const zb = Hb(nv),
  Wb = zb,
  _b = zl,
  jb = ar
function iv(e, t, r, a, n, s, o, d) {
  let l, f
  jb(t, function (h, D) {
    ;(l = n.concat(["" + D])),
      (f = s.concat([h])),
      r.call(a, h, D, t, l, e, f),
      h && o && (l.push(o), iv(h, h[o], r, a, l, f, o))
  })
}
const qb = _b(iv),
  lv = qb,
  Yb = zl,
  Gb = Jn
function ov(e, t, r, a, n, s, o, d) {
  let l,
    f,
    h,
    D = d.mapChildren || o
  return Gb(t, function (I, N) {
    return (
      (l = n.concat(["" + N])),
      (f = s.concat([I])),
      (h = r.call(a, I, N, t, l, e, f)),
      h && I && o && I[o] && (h[D] = ov(I, I[o], r, a, l, f, o, d)),
      h
    )
  })
}
const Ub = Yb(ov),
  Xb = Ub,
  Kb = lv
function Zb(e, t, r, a) {
  const n = []
  return (
    e &&
      t &&
      Kb(
        e,
        function (s, o, d, l, f, h) {
          t.call(a, s, o, d, l, f, h) && n.push(s)
        },
        r
      ),
    n
  )
}
const Jb = Zb,
  Qb = zl,
  ex = Nr,
  tx = aa
function uv(e, t, r, a, n, s, o, d, l) {
  let f,
    h,
    D,
    I,
    N,
    F = [],
    q = l.original,
    $ = l.data,
    B = l.mapChildren || d,
    w = l.isEvery
  return (
    ex(r, function (x, M) {
      ;(f = s.concat(["" + M])),
        (h = o.concat([x])),
        (I = (e && !w) || a.call(n, x, M, r, f, t, h)),
        (N = d && x[d]),
        I || N
          ? (q ? (D = x) : ((D = tx({}, x)), $ && (D[$] = x)),
            (D[B] = uv(I, x, x[d], a, n, f, h, d, l)),
            (I || D[B].length) && F.push(D))
          : I && F.push(D)
    }),
    F
  )
}
const rx = Qb(function (e, t, r, a, n, s, o, d) {
    return uv(0, e, t, r, a, n, s, o, d)
  }),
  ax = rx
function nx(e, t) {
  if (e.indexOf) return e.indexOf(t)
  for (let r = 0, a = e.length; r < a; r++) if (t === e[r]) return r
}
const cv = nx
function ix(e, t) {
  if (e.lastIndexOf) return e.lastIndexOf(t)
  for (let r = e.length - 1; r >= 0; r--) if (t === e[r]) return r
  return -1
}
const sv = ix,
  lx = Xn,
  ox = lx("number"),
  ga = ox,
  ux = ga
function cx(e) {
  return ux(e) && isNaN(e)
}
const sx = cx,
  fx = Xn,
  vx = fx("string"),
  Ia = vx,
  dx = Gi,
  px = dx("Date"),
  Qa = px,
  hx = parseInt,
  Zi = hx
function gx(e) {
  return Date.UTC(e.y, e.M || 0, e.d || 1, e.H || 0, e.m || 0, e.s || 0, e.S || 0)
}
const mx = gx
function bx(e) {
  return e.getTime()
}
const Gr = bx,
  Ol = Zi,
  Lc = mx,
  xx = Gr,
  Cx = Ia,
  yx = Qa
function Ji(e) {
  return "(\\d{" + e + "})"
}
function wx(e) {
  return e < 10 ? e * 100 : e < 100 ? e * 10 : e
}
function Ac(e) {
  return isNaN(e) ? e : Ol(e)
}
const kn = Ji(2),
  Bn = Ji("1,2"),
  fv = Ji("1,7"),
  vv = Ji("3,4"),
  dv = ".{1}",
  si = dv + Bn,
  pv = "(([zZ])|([-+]\\d{2}:?\\d{2}))",
  Vc = [vv, si, si, si, si, si, dv + fv, pv],
  Bo = []
for (let uo = Vc.length - 1; uo >= 0; uo--) {
  for (var Bc = "", Cn = 0; Cn < uo + 1; Cn++) Bc += Vc[Cn]
  Bo.push(new RegExp("^" + Bc + "$"))
}
function Ex(e) {
  for (var t, r = {}, a = 0, n = Bo.length; a < n; a++)
    if (((t = e.match(Bo[a])), t)) {
      ;(r.y = t[1]), (r.M = t[2]), (r.d = t[3]), (r.H = t[4]), (r.m = t[5]), (r.s = t[6]), (r.S = t[7]), (r.Z = t[8])
      break
    }
  return r
}
const Hc = [
    ["yyyy", vv],
    ["yy", kn],
    ["MM", kn],
    ["M", Bn],
    ["dd", kn],
    ["d", Bn],
    ["HH", kn],
    ["H", Bn],
    ["mm", kn],
    ["m", Bn],
    ["ss", kn],
    ["s", Bn],
    ["SSS", Ji(3)],
    ["S", fv],
    ["Z", pv]
  ],
  hv = {},
  gv = ["\\[([^\\]]+)\\]"]
for (var Cn = 0; Cn < Hc.length; Cn++) {
  const co = Hc[Cn]
  ;(hv[co[0]] = co[1] + "?"), gv.push(co[0])
}
const Sx = new RegExp(gv.join("|"), "g"),
  zc = {}
function Ox(e, t) {
  let r = zc[t]
  if (!r) {
    const a = [],
      n = t.replace(/([$(){}*+.?\\^|])/g, "\\$1").replace(Sx, function (h, D) {
        const I = h.charAt(0)
        return I === "[" ? D : (a.push(I), hv[h])
      })
    r = zc[t] = { _i: a, _r: new RegExp(n) }
  }
  const s = {},
    o = e.match(r._r)
  if (o) {
    for (let d = r._i, l = 1, f = o.length; l < f; l++) s[d[l - 1]] = o[l]
    return s
  }
  return s
}
function Tx(e) {
  if (/^[zZ]/.test(e.Z)) return new Date(Lc(e))
  const t = e.Z.match(/([-+])(\d{2}):?(\d{2})/)
  return t ? new Date(Lc(e) - (t[1] === "-" ? -1 : 1) * Ol(t[2]) * 36e5 + Ol(t[3]) * 6e4) : new Date("")
}
function Dx(e, t) {
  if (e) {
    const r = yx(e)
    if (r || (!t && /^[0-9]{11,15}$/.test(e))) return new Date(r ? xx(e) : Ol(e))
    if (Cx(e)) {
      const a = t ? Ox(e, t) : Ex(e)
      if (a.y)
        return (
          a.M && (a.M = Ac(a.M) - 1),
          a.S && (a.S = wx(Ac(a.S.substring(0, 3)))),
          a.Z ? Tx(a) : new Date(a.y, a.M || 0, a.d || 1, a.H || 0, a.m || 0, a.s || 0, a.S || 0)
        )
    }
  }
  return new Date("")
}
const zr = Dx
function Mx() {
  return new Date()
}
const Wl = Mx,
  Rx = Qa,
  kx = zr,
  Fx = Wl
function Ix(e) {
  let t,
    r = e ? kx(e) : Fx()
  return Rx(r) ? ((t = r.getFullYear()), t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0)) : !1
}
const mv = Ix,
  Nx = Bt,
  Px = ra
function $x(e, t, r) {
  if (e) {
    if (Nx(e)) for (let a = 0, n = e.length; a < n && t.call(r, e[a], a, e) !== !1; a++);
    else for (const s in e) if (Px(e, s) && t.call(r, e[s], s, e) === !1) break
  }
}
const Lx = $x,
  Ax = Bt,
  Vx = ra
function Bx(e, t, r) {
  if (e) {
    let a, n
    if (Ax(e)) for (a = e.length - 1; a >= 0 && t.call(r, e[a], a, e) !== !1; a--);
    else for (n = Vx(e), a = n.length - 1; a >= 0 && t.call(r, e[n[a]], n[a], e) !== !1; a--);
  }
}
const Hx = Bx,
  zx = Bt,
  Wx = Ia,
  _x = ra
function jx(e, t) {
  return function (r, a) {
    if (r) {
      if (r[e]) return r[e](a)
      if (Wx(r) || zx(r)) return t(r, a)
      for (const n in r) if (_x(r, n) && a === r[n]) return n
    }
    return -1
  }
}
const bv = jx,
  qx = bv,
  Yx = cv,
  Gx = qx("indexOf", Yx),
  Ux = Gx,
  Xx = bv,
  Kx = sv,
  Zx = Xx("lastIndexOf", Kx),
  xv = Zx,
  Jx = Bt,
  Qx = Ia,
  eC = ar
function tC(e) {
  let t = 0
  return Qx(e) || Jx(e)
    ? e.length
    : (eC(e, function () {
        t++
      }),
      t)
}
const Cv = tC,
  rC = ga
function aC(e) {
  return rC(e) && isFinite(e)
}
const nC = aC,
  iC = Bt,
  lC = Fa,
  oC = function (e) {
    return !lC(e) && !isNaN(e) && !iC(e) && e % 1 === 0
  },
  yv = oC,
  uC = Bt,
  cC = yv,
  sC = Fa
function fC(e) {
  return !sC(e) && !isNaN(e) && !uC(e) && !cC(e)
}
const vC = fC,
  dC = Xn,
  pC = dC("boolean"),
  wv = pC,
  hC = Gi,
  gC = hC("RegExp"),
  ou = gC,
  mC = Gi,
  bC = mC("Error"),
  Ev = bC
function xC(e) {
  return e ? e.constructor === TypeError : !1
}
const CC = xC
function yC(e) {
  for (const t in e) return !1
  return !0
}
const Sv = yC,
  wC = na,
  EC = typeof Symbol !== wC
function SC(e) {
  return EC && Symbol.isSymbol ? Symbol.isSymbol(e) : typeof e == "symbol"
}
const Ov = SC,
  OC = Gi,
  TC = OC("Arguments"),
  DC = TC,
  MC = Ia,
  RC = ga
function kC(e) {
  return !!(e && MC(e.nodeName) && RC(e.nodeType))
}
const FC = kC,
  IC = na,
  NC = typeof document === IC ? 0 : document,
  uu = NC,
  PC = uu
function $C(e) {
  return !!(e && PC && e.nodeType === 9)
}
const LC = $C,
  AC = na,
  VC = typeof window === AC ? 0 : window,
  Tv = VC,
  BC = Tv
function HC(e) {
  return BC && !!(e && e === e.window)
}
const zC = HC,
  WC = na,
  _C = typeof FormData !== WC
function jC(e) {
  return _C && e instanceof FormData
}
const qC = jC,
  YC = na,
  GC = typeof Map !== YC
function UC(e) {
  return GC && e instanceof Map
}
const XC = UC,
  KC = na,
  ZC = typeof WeakMap !== KC
function JC(e) {
  return ZC && e instanceof WeakMap
}
const QC = JC,
  ey = na,
  ty = typeof Set !== ey
function ry(e) {
  return ty && e instanceof Set
}
const ay = ry,
  ny = na,
  iy = typeof WeakSet !== ny
function ly(e) {
  return iy && e instanceof WeakSet
}
const oy = ly,
  uy = Hr,
  cy = Ia,
  sy = Bt,
  fy = ra
function vy(e) {
  return function (t, r, a) {
    if (t && uy(r)) {
      if (sy(t) || cy(t)) return e(t, r, a)
      for (const n in t) if (fy(t, n) && r.call(a, t[n], n, t)) return n
    }
    return -1
  }
}
const Dv = vy,
  dy = Dv,
  py = dy(function (e, t, r) {
    for (let a = 0, n = e.length; a < n; a++) if (t.call(r, e[a], a, e)) return a
    return -1
  }),
  cu = py,
  Wc = ga,
  _c = Bt,
  jc = Ia,
  hy = ou,
  gy = Qa,
  my = wv,
  by = ha,
  qc = ka,
  xy = Bf
function Mv(e, t, r, a, n, s, o) {
  if (e === t) return !0
  if (e && t && !Wc(e) && !Wc(t) && !jc(e) && !jc(t)) {
    if (hy(e)) return r("" + e, "" + t, n, s, o)
    if (gy(e) || my(e)) return r(+e, +t, n, s, o)
    let d,
      l,
      f,
      h = _c(e),
      D = _c(t)
    if (h || D ? h && D : e.constructor === t.constructor)
      return (
        (l = qc(e)),
        (f = qc(t)),
        a && (d = a(e, t, n)),
        l.length === f.length
          ? by(d)
            ? xy(l, function (I, N) {
                return I === f[N] && Mv(e[I], t[f[N]], r, a, h || D ? N : I, e, t)
              })
            : !!d
          : !1
      )
  }
  return r(e, t, n, s, o)
}
const Rv = Mv
function Cy(e, t) {
  return e === t
}
const kv = Cy,
  yy = Rv,
  wy = kv
function Ey(e, t) {
  return yy(e, t, wy)
}
const Fv = Ey,
  Yc = ka,
  Sy = cu,
  Gc = Fv,
  Oy = Vf,
  Ty = Hf
function Dy(e, t) {
  const r = Yc(e),
    a = Yc(t)
  if (a.length) {
    if (Ty(r, a))
      return Oy(a, function (n) {
        return (
          Sy(r, function (s) {
            return s === n && Gc(e[s], t[n])
          }) > -1
        )
      })
  } else return !0
  return Gc(e, t)
}
const My = Dy,
  Uc = Rv,
  Xc = kv,
  Ry = Hr,
  ky = ha
function Fy(e, t, r) {
  return Ry(r)
    ? Uc(
        e,
        t,
        function (a, n, s, o, d) {
          const l = r(a, n, s, o, d)
          return ky(l) ? Xc(a, n) : !!l
        },
        r
      )
    : Uc(e, t, Xc)
}
const Iy = Fy,
  Ny = Ov,
  Py = Qa,
  $y = Bt,
  Ly = ou,
  Ay = Ev,
  Vy = Fa
function By(e) {
  return Vy(e)
    ? "null"
    : Ny(e)
      ? "symbol"
      : Py(e)
        ? "date"
        : $y(e)
          ? "array"
          : Ly(e)
            ? "regexp"
            : Ay(e)
              ? "error"
              : typeof e
}
let Hy = By,
  zy = 0
function Wy(e) {
  return [e, ++zy].join("")
}
const _y = Wy,
  jy = Dv,
  qy = jy(function (e, t, r) {
    for (let a = e.length - 1; a >= 0; a--) if (t.call(r, e[a], a, e)) return a
    return -1
  }),
  Yy = qy,
  Gy = Zn,
  Uy = Ia
function Xy(e) {
  if (Gy(e)) return e
  if (Uy(e))
    try {
      return JSON.parse(e)
    } catch {}
  return {}
}
const Ky = Xy,
  Zy = Ja
function Jy(e) {
  return Zy(e) ? "" : JSON.stringify(e)
}
const Qy = Jy,
  ew = tu,
  tw = ew("entries", 2),
  rw = tw,
  aw = Hr,
  nw = Bt,
  iw = ar,
  lw = cu
function ow(e, t) {
  return function (r, a) {
    let n,
      s,
      o = {},
      d = [],
      l = this,
      f = arguments,
      h = f.length
    if (!aw(a)) {
      for (s = 1; s < h; s++) (n = f[s]), d.push.apply(d, nw(n) ? n : [n])
      a = 0
    }
    return (
      iw(r, function (D, I) {
        ;((
          a
            ? a.call(l, D, I, r)
            : lw(d, function (N) {
                return N === I
              }) > -1
        )
          ? e
          : t) && (o[I] = D)
      }),
      o
    )
  }
}
const Iv = ow,
  uw = Iv,
  cw = uw(1, 0),
  sw = cw,
  fw = Iv,
  vw = fw(0, 1),
  dw = vw,
  pw = Qn
function hw(e) {
  return pw(e)[0]
}
const gw = hw,
  mw = Qn
function bw(e) {
  const t = mw(e)
  return t[t.length - 1]
}
const xw = bw,
  Cw = Wf,
  yw = iu,
  vl = ra
function ww(e, t) {
  if (e) {
    if (vl(e, t)) return !0
    let r,
      a,
      n,
      s,
      o,
      d,
      l = yw(t),
      f = 0,
      h = l.length
    for (
      o = e;
      f < h &&
      ((d = !1),
      (r = l[f]),
      (s = r ? r.match(Cw) : ""),
      s
        ? ((a = s[1]),
          (n = s[2]),
          a ? o[a] && vl(o[a], n) && ((d = !0), (o = o[a][n])) : vl(o, n) && ((d = !0), (o = o[n])))
        : vl(o, r) && ((d = !0), (o = o[r])),
      d);
      f++
    )
      if (f === h - 1) return !0
  }
  return !1
}
const Ew = ww,
  Kc = Zi,
  Sw = iu,
  Ow = ra,
  Zc = /(.+)?\[(\d+)\]$/
function Tw(e, t, r, a, n) {
  if (e[t]) r && (e[t] = n)
  else {
    let s,
      o,
      d = t ? t.match(Zc) : null
    if (r) o = n
    else {
      const l = a ? a.match(Zc) : null
      l && !l[1] ? (o = new Array(Kc(l[2]) + 1)) : (o = {})
    }
    return (
      d
        ? d[1]
          ? ((s = Kc(d[2])),
            e[d[1]]
              ? r
                ? (e[d[1]][s] = o)
                : e[d[1]][s]
                  ? (o = e[d[1]][s])
                  : (e[d[1]][s] = o)
              : ((e[d[1]] = new Array(s + 1)), (e[d[1]][s] = o)))
          : (e[d[2]] = o)
        : (e[t] = o),
      o
    )
  }
  return e[t]
}
function Dw(e, t, r) {
  if (e) {
    if ((e[t] || Ow(e, t)) && !Jc(t)) e[t] = r
    else
      for (let a = e, n = Sw(t), s = n.length, o = 0; o < s; o++)
        if (!Jc(n[o])) {
          const d = o === s - 1
          a = Tw(a, n[o], d, d ? null : n[o + 1], r)
        }
  }
  return e
}
function Jc(e) {
  return e === "__proto__" || e === "constructor" || e === "prototype"
}
const Mw = Dw,
  Rw = Sv,
  kw = Hl,
  Fw = Hr,
  Iw = Kn,
  Nw = ar
function Pw(e) {
  return function () {
    return Rw(e)
  }
}
function $w(e, t, r) {
  let a,
    n = {}
  return (
    e &&
      (t && kw(t) ? (t = Pw(t)) : Fw(t) || (t = Iw(t)),
      Nw(e, function (s, o) {
        ;(a = t ? t.call(r, s, o, e) : s), n[a] ? n[a].push(s) : (n[a] = [s])
      })),
    n
  )
}
const Nv = $w,
  Lw = Nv,
  Aw = Ui
function Vw(e, t, r) {
  const a = Lw(e, t, r || this)
  return (
    Aw(a, function (n, s) {
      a[s] = n.length
    }),
    a
  )
}
const Bw = Vw
function Hw(e, t, r) {
  let a,
    n,
    s = [],
    o = arguments
  if ((o.length < 2 && ((t = o[0]), (e = 0)), (a = e >> 0), (n = t >> 0), a < t))
    for (r = r >> 0 || 1; a < n; a += r) s.push(a)
  return s
}
const zw = Hw,
  Qc = ka,
  Ww = Sn,
  _w = Xi,
  jw = Nr,
  qw = aa
function Yw(e, t) {
  if (e && t) {
    const r = qw.apply(this, [{}].concat(Ww(arguments, 1))),
      a = Qc(r)
    jw(Qc(e), function (n) {
      _w(a, n) && (e[n] = r[n])
    })
  }
  return e
}
const Gw = Yw,
  Uw = Uf,
  Xw = Uw(function (e, t) {
    return e > t
  }),
  Kw = Xw
function Zw(e) {
  return (e.split(".")[1] || "").length
}
const _l = Zw,
  Jw = Zi
function Qw(e, t) {
  if (e.repeat) return e.repeat(t)
  const r = isNaN(t) ? [] : new Array(Jw(t))
  return r.join(e) + (r.length > 0 ? e : "")
}
const Qi = Qw
function eE(e, t) {
  return e.substring(0, t) + "." + e.substring(t, e.length)
}
const Pv = eE,
  dl = Qi,
  so = Pv
function tE(e) {
  const t = "" + e,
    r = t.match(/^([-+]?)((\d+)|((\d+)?[.](\d+)?))e([-+]{1})([0-9]+)$/)
  if (r) {
    const a = e < 0,
      n = a ? "-" : "",
      s = r[3] || "",
      o = r[5] || "",
      d = r[6] || "",
      l = r[7],
      f = r[8],
      h = f - d.length,
      D = f - s.length,
      I = f - o.length
    return l === "+"
      ? s
        ? n + s + dl("0", f)
        : h > 0
          ? n + o + d + dl("0", h)
          : n + o + so(d, f)
      : s
        ? D > 0
          ? n + "0." + dl("0", Math.abs(D)) + s
          : n + so(s, D)
        : I > 0
          ? n + "0." + dl("0", Math.abs(I)) + o + d
          : n + so(o, I) + d
  }
  return t
}
const en = tE,
  es = _l,
  ts = en
function rE(e, t) {
  const r = ts(e),
    a = ts(t)
  return (parseInt(r.replace(".", "")) * parseInt(a.replace(".", ""))) / Math.pow(10, es(r) + es(a))
}
const $v = rE,
  aE = $v,
  rs = En,
  nE = en
function iE(e) {
  return function (t, r) {
    let a = rs(t),
      n = a
    if (a) {
      r = r >> 0
      let s = nE(a),
        o = s.split("."),
        d = o[0],
        l = o[1] || "",
        f = l.substring(0, r + 1),
        h = d + (f ? "." + f : "")
      if (r >= l.length) return rs(h)
      if (((h = a), r > 0)) {
        const D = Math.pow(10, r)
        n = Math[e](aE(h, D)) / D
      } else n = Math[e](h)
    }
    return n
  }
}
const su = iE,
  lE = su,
  oE = lE("round"),
  fu = oE,
  uE = su,
  cE = uE("ceil"),
  Lv = cE,
  sE = su,
  fE = sE("floor"),
  Av = fE,
  vE = Ja,
  dE = ga,
  pE = en
function hE(e) {
  return dE(e) ? pE(e) : "" + (vE(e) ? "" : e)
}
const Pr = hE,
  gE = fu,
  mE = Pr,
  bE = Qi,
  xE = Pv
function CE(e, t) {
  t = t >> 0
  const r = mE(gE(e, t)),
    a = r.split("."),
    n = a[0],
    s = a[1] || "",
    o = t - s.length
  return t ? (o > 0 ? n + "." + s + bE("0", o) : n + xE(s, Math.abs(o))) : n
}
const vu = CE,
  yE = Ra,
  wE = fu,
  EE = Lv,
  SE = Av,
  OE = ga,
  TE = Pr,
  DE = vu,
  ME = en,
  RE = aa
function kE(e, t) {
  let r = RE({}, yE.commafyOptions, t),
    a = r.digits,
    n = OE(e),
    s,
    o,
    d,
    l,
    f
  return (
    n
      ? ((s = (r.ceil ? EE : r.floor ? SE : wE)(e, a)),
        (o = ME(a ? DE(s, a) : s).split(".")),
        (l = o[0]),
        (f = o[1]),
        (d = l && s < 0),
        d && (l = l.substring(1, l.length)))
      : ((s = TE(e).replace(/,/g, "")), (o = s ? [s] : []), (l = o[0])),
    o.length
      ? (d ? "-" : "") +
        l.replace(new RegExp("(?=(?!(\\b))(.{" + (r.spaceNumber || 3) + "})+$)", "g"), r.separator || ",") +
        (f ? "." + f : "")
      : s
  )
}
const FE = kE,
  IE = Zi,
  NE = Yf,
  PE = NE(IE),
  $E = PE,
  LE = $v,
  as = En
function AE(e, t) {
  const r = as(e),
    a = as(t)
  return LE(r, a)
}
const du = AE,
  ns = _l,
  is = en,
  ls = du
function VE(e, t) {
  const r = is(e),
    a = is(t),
    n = Math.pow(10, Math.max(ns(r), ns(a)))
  return (ls(e, n) + ls(t, n)) / n
}
const Vv = VE,
  BE = Vv,
  os = En
function HE(e, t) {
  return BE(os(e), os(t))
}
const zE = HE,
  us = _l,
  cs = en,
  ss = En,
  WE = vu
function _E(e, t) {
  const r = ss(e),
    a = ss(t),
    n = cs(r),
    s = cs(a),
    o = us(n),
    d = us(s),
    l = Math.pow(10, Math.max(o, d)),
    f = o >= d ? o : d
  return parseFloat(WE((r * l - a * l) / l, f))
}
const jE = _E,
  fs = _l,
  vs = en,
  qE = du
function YE(e, t) {
  const r = vs(e),
    a = vs(t),
    n = fs(r),
    s = fs(a),
    o = s - n,
    d = o < 0,
    l = Math.pow(10, d ? Math.abs(o) : o)
  return qE(r.replace(".", "") / a.replace(".", ""), d ? 1 / l : l)
}
const Bv = YE,
  GE = Bv,
  ds = En
function UE(e, t) {
  return GE(ds(e), ds(t))
}
const XE = UE,
  fo = Vv,
  KE = Hr,
  ZE = ar,
  JE = Ki
function QE(e, t, r) {
  let a = 0
  return (
    ZE(
      e,
      t
        ? KE(t)
          ? function () {
              a = fo(a, t.apply(r, arguments))
            }
          : function (n) {
              a = fo(a, JE(n, t))
            }
        : function (n) {
            a = fo(a, n)
          }
    ),
    a
  )
}
const Hv = QE,
  eS = Bv,
  tS = Cv,
  rS = Hv
function aS(e, t, r) {
  return eS(rS(e, t, r), tS(e))
}
const nS = aS,
  iS = "first",
  el = iS,
  lS = "last",
  jl = lS
function oS(e) {
  return e.getFullYear()
}
const tl = oS,
  uS = 864e5,
  rl = uS
function cS(e) {
  return e.getMonth()
}
const ql = cS,
  sS = Qa,
  fS = Gr
function vS(e) {
  return sS(e) && !isNaN(fS(e))
}
const Ur = vS,
  ps = el,
  dS = jl,
  pS = rl,
  hS = tl,
  hs = Gr,
  gs = ql,
  gS = zr,
  mS = Ur,
  bS = ga
function zv(e, t, r) {
  const a = t && !isNaN(t) ? t : 0
  if (((e = gS(e)), mS(e))) {
    if (r === ps) return new Date(hS(e), gs(e) + a, 1)
    if (r === dS) return new Date(hs(zv(e, a + 1, ps)) - 1)
    if ((bS(r) && e.setDate(r), a)) {
      const n = e.getDate()
      if ((e.setMonth(gs(e) + a), n !== e.getDate())) return e.setDate(1), new Date(hs(e) - pS)
    }
  }
  return e
}
const al = zv,
  xS = el,
  ms = jl,
  bs = tl,
  CS = al,
  yS = zr,
  wS = Ur
function ES(e, t, r) {
  let a
  if (((e = yS(e)), wS(e) && (t && ((a = t && !isNaN(t) ? t : 0), e.setFullYear(bs(e) + a)), r || !isNaN(r)))) {
    if (r === xS) return new Date(bs(e), 0, 1)
    if (r === ms) return e.setMonth(11), CS(e, 0, ms)
    e.setMonth(r)
  }
  return e
}
const Yl = ES,
  SS = al,
  OS = zr,
  TS = Ur
function DS(e) {
  const t = e.getMonth()
  return t < 3 ? 1 : t < 6 ? 2 : t < 9 ? 3 : 4
}
function MS(e, t, r) {
  let a,
    n = t && !isNaN(t) ? t * 3 : 0
  return (e = OS(e)), TS(e) ? ((a = (DS(e) - 1) * 3), e.setMonth(a), SS(e, n, r)) : e
}
const RS = MS,
  xs = el,
  kS = jl,
  FS = Zi,
  IS = tl,
  NS = ql,
  PS = Gr,
  $S = zr,
  LS = Ur
function Wv(e, t, r) {
  if (((e = $S(e)), LS(e) && !isNaN(t))) {
    if ((e.setDate(e.getDate() + FS(t)), r === xs)) return new Date(IS(e), NS(e), e.getDate())
    if (r === kS) return new Date(PS(Wv(e, 1, xs)) - 1)
  }
  return e
}
const _v = Wv
function AS(e) {
  return e.toUpperCase()
}
const jv = AS,
  VS = rl,
  BS = VS * 7,
  qv = BS,
  HS = Ra,
  vo = rl,
  zS = qv,
  WS = Gr,
  _S = zr,
  jS = Ur,
  Cs = ga
function qS(e, t, r, a) {
  if (((e = _S(e)), jS(e))) {
    let n = Cs(r),
      s = Cs(a),
      o = WS(e)
    if (n || s) {
      const d = s ? a : HS.firstDayOfWeek,
        l = e.getDay(),
        f = n ? r : l
      if (l !== f) {
        let h = 0
        d > l ? (h = -(7 - d + l)) : d < l && (h = d - l),
          f > d ? (o += ((f === 0 ? 7 : f) - d + h) * vo) : f < d ? (o += (7 - d + f + h) * vo) : (o += h * vo)
      }
    }
    return t && !isNaN(t) && (o += t * zS), new Date(o)
  }
  return e
}
const Yv = qS,
  YS = Ra,
  GS = qv,
  US = ga,
  XS = Ur,
  KS = Yv,
  ys = Gr
function ZS(e) {
  return function (t, r) {
    const a = US(r) ? r : YS.firstDayOfWeek,
      n = KS(t, 0, a, a)
    if (XS(n)) {
      const s = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
        o = e(n),
        d = o.getDay()
      return d > a && o.setDate(7 - d + a + 1), d < a && o.setDate(a - d + 1), Math.floor((ys(s) - ys(o)) / GS + 1)
    }
    return NaN
  }
}
const Gv = ZS,
  JS = Gv,
  QS = JS(function (e) {
    return new Date(e.getFullYear(), 0, 1)
  }),
  Uv = QS,
  eO = tl,
  tO = ql
function rO(e) {
  return new Date(eO(e), tO(e), e.getDate())
}
const aO = rO,
  nO = Gr,
  iO = aO
function lO(e) {
  return nO(iO(e))
}
const oO = lO,
  uO = rl,
  cO = el,
  ws = oO,
  sO = Yl,
  fO = zr,
  vO = Ur
function dO(e) {
  return (e = fO(e)), vO(e) ? Math.floor((ws(e) - ws(sO(e, 0, cO))) / uO) + 1 : NaN
}
const Xv = dO,
  pO = Pr,
  hO = ha,
  gO = Qi
function mO(e, t, r) {
  const a = pO(e)
  return (
    (t = t >> 0),
    (r = hO(r) ? " " : "" + r),
    a.padStart
      ? a.padStart(t, r)
      : t > a.length
        ? ((t -= a.length), t > r.length && (r += gO(r, t / r.length)), r.slice(0, t) + a)
        : a
  )
}
const Kv = mO,
  fi = Ra,
  bO = jv,
  xO = tl,
  Es = ql,
  CO = zr,
  yO = Uv,
  wO = Xv,
  EO = aa,
  SO = Ur,
  OO = Hr,
  sa = Kv
function Ba(e, t, r, a) {
  const n = t[r]
  return n ? (OO(n) ? n(a, r, e) : n[a]) : a
}
const TO = /\[([^\]]+)]|y{2,4}|M{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|Z{1,2}|W{1,2}|D{1,3}|[aAeEq]/g
function DO(e, t, r) {
  if (e) {
    if (((e = CO(e)), SO(e))) {
      const a = t || fi.parseDateFormat || fi.formatString,
        n = e.getHours(),
        s = n < 12 ? "am" : "pm",
        o = EO({}, fi.parseDateRules || fi.formatStringMatchs, r ? r.formats : null),
        d = function (x, M) {
          return ("" + xO(e)).substr(4 - M)
        },
        l = function (x, M) {
          return sa(Es(e) + 1, M, "0")
        },
        f = function (x, M) {
          return sa(e.getDate(), M, "0")
        },
        h = function (x, M) {
          return sa(n, M, "0")
        },
        D = function (x, M) {
          return sa(n <= 12 ? n : n - 12, M, "0")
        },
        I = function (x, M) {
          return sa(e.getMinutes(), M, "0")
        },
        N = function (x, M) {
          return sa(e.getSeconds(), M, "0")
        },
        F = function (x, M) {
          return sa(e.getMilliseconds(), M, "0")
        },
        q = function (x, M) {
          const L = (e.getTimezoneOffset() / 60) * -1
          return Ba(e, o, x, (L >= 0 ? "+" : "-") + sa(L, 2, "0") + (M === 1 ? ":" : "") + "00")
        },
        $ = function (x, M) {
          return sa(Ba(e, o, x, yO(e, (r ? r.firstDay : null) || fi.firstDayOfWeek)), M, "0")
        },
        B = function (x, M) {
          return sa(Ba(e, o, x, wO(e)), M, "0")
        },
        w = {
          yyyy: d,
          yy: d,
          MM: l,
          M: l,
          dd: f,
          d: f,
          HH: h,
          H: h,
          hh: D,
          h: D,
          mm: I,
          m: I,
          ss: N,
          s: N,
          SSS: F,
          S: F,
          ZZ: q,
          Z: q,
          WW: $,
          W: $,
          DDD: B,
          D: B,
          a: function (x) {
            return Ba(e, o, x, s)
          },
          A: function (x) {
            return Ba(e, o, x, bO(s))
          },
          e: function (x) {
            return Ba(e, o, x, e.getDay())
          },
          E: function (x) {
            return Ba(e, o, x, e.getDay())
          },
          q: function (x) {
            return Ba(e, o, x, Math.floor((Es(e) + 3) / 3))
          }
        }
      return a.replace(TO, function (x, M) {
        return M || (w[x] ? w[x](x, x.length) : x)
      })
    }
    return "Invalid Date"
  }
  return ""
}
const Zv = DO,
  MO = Gr,
  RO = Wl,
  kO =
    Date.now ||
    function () {
      return MO(RO())
    },
  Jv = kO,
  FO = Gr,
  IO = Jv,
  NO = zr,
  PO = Qa,
  $O = function (e, t) {
    if (e) {
      const r = NO(e, t)
      return PO(r) ? FO(r) : r
    }
    return IO()
  },
  LO = $O,
  Ss = Zv
function AO(e, t, r) {
  return e && t ? ((e = Ss(e, r)), e !== "Invalid Date" && e === Ss(t, r)) : !1
}
const VO = AO,
  BO = Gv,
  HO = BO(function (e) {
    return new Date(e.getFullYear(), e.getMonth(), 1)
  }),
  zO = HO,
  WO = Yl,
  _O = zr,
  jO = Ur,
  qO = mv
function YO(e, t) {
  return (e = _O(e)), jO(e) ? (qO(WO(e, t)) ? 366 : 365) : NaN
}
const GO = YO,
  UO = rl,
  XO = el,
  KO = jl,
  Os = Gr,
  Ts = al,
  ZO = zr,
  JO = Ur
function QO(e, t) {
  return (e = ZO(e)), JO(e) ? Math.floor((Os(Ts(e, t, KO)) - Os(Ts(e, t, XO))) / UO) + 1 : NaN
}
const eT = QO,
  Ds = Gr,
  tT = Wl,
  Ms = zr,
  Rs = Ur,
  ks = [
    ["yyyy", 31536e6],
    ["MM", 2592e6],
    ["dd", 864e5],
    ["HH", 36e5],
    ["mm", 6e4],
    ["ss", 1e3],
    ["S", 0]
  ]
function rT(e, t) {
  let r,
    a,
    n,
    s,
    o,
    d,
    l = { done: !1, time: 0 }
  if (((e = Ms(e)), (t = t ? Ms(t) : tT()), Rs(e) && Rs(t) && ((r = Ds(e)), (a = Ds(t)), r < a)))
    for (s = l.time = a - r, l.done = !0, d = 0, o = ks.length; d < o; d++)
      (n = ks[d]),
        s >= n[1]
          ? d === o - 1
            ? (l[n[0]] = s || 0)
            : ((l[n[0]] = Math.floor(s / n[1])), (s -= l[n[0]] * n[1]))
          : (l[n[0]] = 0)
  return l
}
const aT = rT,
  nT = Pr,
  iT = ha,
  lT = Qi
function oT(e, t, r) {
  const a = nT(e)
  return (
    (t = t >> 0),
    (r = iT(r) ? " " : "" + r),
    a.padEnd
      ? a.padEnd(t, r)
      : t > a.length
        ? ((t -= a.length), t > r.length && (r += lT(r, t / r.length)), a + r.slice(0, t))
        : a
  )
}
const uT = oT,
  cT = Pr,
  sT = Qi
function fT(e, t) {
  return sT(cT(e), t)
}
const vT = fT,
  dT = Pr
function pT(e) {
  return e && e.trimRight ? e.trimRight() : dT(e).replace(/[\s\uFEFF\xA0]+$/g, "")
}
const Qv = pT,
  hT = Pr
function gT(e) {
  return e && e.trimLeft ? e.trimLeft() : hT(e).replace(/^[\s\uFEFF\xA0]+/g, "")
}
const ed = gT,
  mT = Qv,
  bT = ed
function xT(e) {
  return e && e.trim ? e.trim() : mT(bT(e))
}
const td = xT,
  CT = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
  rd = CT,
  yT = Pr,
  wT = ka
function ET(e) {
  const t = new RegExp("(?:" + wT(e).join("|") + ")", "g")
  return function (r) {
    return yT(r).replace(t, function (a) {
      return e[a]
    })
  }
}
const ad = ET,
  ST = rd,
  OT = ad,
  TT = OT(ST),
  DT = TT,
  Fs = rd,
  MT = ad,
  RT = ar,
  nd = {}
RT(Fs, function (e, t) {
  nd[Fs[t]] = t
})
const kT = MT(nd),
  FT = kT
function IT(e, t, r) {
  return e.substring(t, r)
}
const id = IT
function NT(e) {
  return e.toLowerCase()
}
const ld = NT,
  PT = Pr,
  Ha = id,
  vi = jv,
  $T = ld,
  po = {}
function LT(e) {
  if (((e = PT(e)), po[e])) return po[e]
  let t = e.length,
    r = e.replace(/([-]+)/g, function (a, n, s) {
      return s && s + n.length < t ? "-" : ""
    })
  return (
    (t = r.length),
    (r = r
      .replace(/([A-Z]+)/g, function (a, n, s) {
        const o = n.length
        return (
          (n = $T(n)),
          s
            ? o > 2 && s + o < t
              ? vi(Ha(n, 0, 1)) + Ha(n, 1, o - 1) + vi(Ha(n, o - 1, o))
              : vi(Ha(n, 0, 1)) + Ha(n, 1, o)
            : o > 1 && s + o < t
              ? Ha(n, 0, o - 1) + vi(Ha(n, o - 1, o))
              : n
        )
      })
      .replace(/(-[a-zA-Z])/g, function (a, n) {
        return vi(Ha(n, 1, n.length))
      })),
    (po[e] = r),
    r
  )
}
const AT = LT,
  VT = Pr,
  Fn = id,
  za = ld,
  ho = {}
function BT(e) {
  if (((e = VT(e)), ho[e])) return ho[e]
  if (/^[A-Z]+$/.test(e)) return za(e)
  let t = e
    .replace(/^([a-z])([A-Z]+)([a-z]+)$/, function (r, a, n, s) {
      const o = n.length
      return o > 1 ? a + "-" + za(Fn(n, 0, o - 1)) + "-" + za(Fn(n, o - 1, o)) + s : za(a + "-" + n + s)
    })
    .replace(/^([A-Z]+)([a-z]+)?$/, function (r, a, n) {
      const s = a.length
      return za(Fn(a, 0, s - 1) + "-" + Fn(a, s - 1, s) + (n || ""))
    })
    .replace(/([a-z]?)([A-Z]+)([a-z]?)/g, function (r, a, n, s, o) {
      const d = n.length
      return d > 1 && (a && (a += "-"), s)
        ? (a || "") + za(Fn(n, 0, d - 1)) + "-" + za(Fn(n, d - 1, d)) + s
        : (a || "") + (o ? "-" : "") + za(n) + (s || "")
    })
  return (
    (t = t.replace(/([-]+)/g, function (r, a, n) {
      return n && n + a.length < t.length ? "-" : ""
    })),
    (ho[e] = t),
    t
  )
}
const HT = BT,
  zT = Pr
function WT(e, t, r) {
  const a = zT(e)
  return (arguments.length === 1 ? a : a.substring(r)).indexOf(t) === 0
}
const _T = WT,
  jT = Pr
function qT(e, t, r) {
  const a = jT(e),
    n = arguments.length
  return n > 1 && (n > 2 ? a.substring(0, r).indexOf(t) === r - 1 : a.indexOf(t) === a.length - 1)
}
const YT = qT,
  GT = Ra,
  UT = Pr,
  XT = td,
  KT = Ki
function ZT(e, t, r) {
  return UT(e).replace((r || GT).tmplRE || /\{{2}([.\w[\]\s]+)\}{2}/g, function (a, n) {
    return KT(t, XT(n))
  })
}
const od = ZT,
  JT = od
function QT(e, t) {
  return JT(e, t, { tmplRE: /\{([.\w[\]\s]+)\}/g })
}
const eD = QT
function tD() {}
const rD = tD,
  Is = Sn
function aD(e, t) {
  const r = Is(arguments, 2)
  return function () {
    return e.apply(t, Is(arguments).concat(r))
  }
}
const nD = aD,
  Ns = Sn
function iD(e, t) {
  let r = !1,
    a = null,
    n = Ns(arguments, 2)
  return function () {
    return r || ((a = e.apply(t, Ns(arguments).concat(n))), (r = !0)), a
  }
}
const lD = iD,
  oD = Sn
function uD(e, t, r) {
  let a = 0,
    n = []
  return function () {
    const s = arguments
    a++, a <= e && n.push(s[0]), a >= e && t.apply(r, [n].concat(oD(s)))
  }
}
const cD = uD,
  sD = Sn
function fD(e, t, r) {
  let a = 0,
    n = []
  return (
    (r = r || this),
    function () {
      const s = arguments
      a++, a < e && (n.push(s[0]), t.apply(r, [n].concat(sD(s))))
    }
  )
}
const vD = fD
function dD(e, t, r) {
  var a,
    n,
    s = r || {},
    o = !1,
    d = 0,
    l = "leading" in s ? s.leading : !0,
    f = "trailing" in s ? s.trailing : !1,
    h = function () {
      ;(o = !0), e.apply(n, a), (d = setTimeout(D, t))
    },
    D = function () {
      ;(d = 0), !o && f === !0 && h()
    },
    I = function () {
      const F = d !== 0
      return clearTimeout(d), (a = null), (n = null), (o = !1), (d = 0), F
    },
    N = function () {
      ;(a = arguments), (n = this), (o = !1), d === 0 && (l === !0 ? h() : f === !0 && (d = setTimeout(D, t)))
    }
  return (N.cancel = I), N
}
const pD = dD
function hD(e, t, r) {
  let a,
    n,
    s = r || {},
    o = !1,
    d = 0,
    l = typeof r == "boolean",
    f = "leading" in s ? s.leading : l,
    h = "trailing" in s ? s.trailing : !l,
    D = function () {
      ;(o = !0), (d = 0), e.apply(n, a)
    },
    I = function () {
      f === !0 && (d = 0), !o && h === !0 && D()
    },
    N = function () {
      const q = d !== 0
      return clearTimeout(d), (a = null), (n = null), (d = 0), q
    },
    F = function () {
      ;(o = !1), (a = arguments), (n = this), d === 0 ? f === !0 && D() : clearTimeout(d), (d = setTimeout(I, t))
    }
  return (F.cancel = N), F
}
const gD = hD,
  mD = Sn
function bD(e, t) {
  const r = mD(arguments, 2),
    a = this
  return setTimeout(function () {
    e.apply(a, r)
  }, t)
}
const xD = bD,
  CD = decodeURIComponent,
  ud = CD,
  Ps = ud,
  yD = Nr,
  wD = Ia
function ED(e) {
  let t,
    r = {}
  return (
    e &&
      wD(e) &&
      yD(e.split("&"), function (a) {
        ;(t = a.split("=")), (r[Ps(t[0])] = Ps(t[1] || ""))
      }),
    r
  )
}
const cd = ED,
  SD = encodeURIComponent,
  sd = SD,
  Tl = sd,
  fd = ar,
  vd = Bt,
  dd = Fa,
  OD = ha,
  pd = Zn
function hd(e, t, r) {
  let a,
    n = []
  return (
    fd(e, function (s, o) {
      ;(a = vd(s)),
        pd(s) || a
          ? (n = n.concat(hd(s, t + "[" + o + "]", a)))
          : n.push(Tl(t + "[" + (r ? "" : o) + "]") + "=" + Tl(dd(s) ? "" : s))
    }),
    n
  )
}
function TD(e) {
  let t,
    r = []
  return (
    fd(e, function (a, n) {
      OD(a) || ((t = vd(a)), pd(a) || t ? (r = r.concat(hd(a, n, t))) : r.push(Tl(n) + "=" + Tl(dd(a) ? "" : a)))
    }),
    r.join("&").replace(/%20/g, "+")
  )
}
const DD = TD,
  MD = na,
  RD = typeof location === MD ? 0 : location,
  Gl = RD,
  pl = Gl
function kD() {
  return pl ? pl.origin || pl.protocol + "//" + pl.host : ""
}
const gd = kD,
  $s = Gl,
  FD = cd,
  ID = gd
function Ls(e) {
  return FD(e.split("?")[1] || "")
}
function ND(e) {
  let t,
    r,
    a,
    n,
    s = "" + e
  return (
    s.indexOf("//") === 0 ? (s = ($s ? $s.protocol : "") + s) : s.indexOf("/") === 0 && (s = ID() + s),
    (a = s.replace(/#.*/, "").match(/(\?.*)/)),
    (n = {
      href: s,
      hash: "",
      host: "",
      hostname: "",
      protocol: "",
      port: "",
      search: a && a[1] && a[1].length > 1 ? a[1] : ""
    }),
    (n.path = s
      .replace(/^([a-z0-9.+-]*:)\/\//, function (o, d) {
        return (n.protocol = d), ""
      })
      .replace(/^([a-z0-9.+-]*)(:\d+)?\/?/, function (o, d, l) {
        return (r = l || ""), (n.port = r.replace(":", "")), (n.hostname = d), (n.host = d + r), "/"
      })
      .replace(/(#.*)/, function (o, d) {
        return (n.hash = d.length > 1 ? d : ""), ""
      })),
    (t = n.hash.match(/#((.*)\?|(.*))/)),
    (n.pathname = n.path.replace(/(\?|#.*).*/, "")),
    (n.origin = n.protocol + "//" + n.host),
    (n.hashKey = (t && (t[2] || t[1])) || ""),
    (n.hashQuery = Ls(n.hash)),
    (n.searchQuery = Ls(n.search)),
    n
  )
}
const md = ND,
  As = Gl,
  PD = gd,
  $D = xv
function LD() {
  if (As) {
    const e = As.pathname,
      t = $D(e, "/") + 1
    return PD() + (t === e.length ? e : e.substring(0, t))
  }
  return ""
}
const AD = LD,
  Vs = Gl,
  VD = md
function BD() {
  return Vs ? VD(Vs.href) : {}
}
const HD = BD,
  bd = Ra,
  go = uu,
  Bs = ud,
  Hs = sd,
  zD = Bt,
  zs = Hl,
  xd = Qa,
  WD = ha,
  _D = Xi,
  jD = ka,
  Dl = aa,
  mo = Nr,
  qD = Wl,
  hl = Gr,
  YD = Yl,
  GD = al,
  UD = _v
function Ws(e, t) {
  const r = parseFloat(t),
    a = qD(),
    n = hl(a)
  switch (e) {
    case "y":
      return hl(YD(a, r))
    case "M":
      return hl(GD(a, r))
    case "d":
      return hl(UD(a, r))
    case "h":
    case "H":
      return n + r * 60 * 60 * 1e3
    case "m":
      return n + r * 60 * 1e3
    case "s":
      return n + r * 1e3
  }
  return n
}
function bo(e) {
  return (xd(e) ? e : new Date(e)).toUTCString()
}
function Za(e, t, r) {
  if (go) {
    let a,
      n,
      s,
      o,
      d,
      l,
      f = [],
      h = arguments
    return (
      zD(e) ? (f = e) : h.length > 1 ? (f = [Dl({ name: e, value: t }, r)]) : zs(e) && (f = [e]),
      f.length > 0
        ? (mo(f, function (D) {
            ;(a = Dl({}, bd.cookies, D)),
              (s = []),
              a.name &&
                ((n = a.expires),
                s.push(Hs(a.name) + "=" + Hs(zs(a.value) ? JSON.stringify(a.value) : a.value)),
                n &&
                  (isNaN(n)
                    ? (n = n.replace(/^([0-9]+)(y|M|d|H|h|m|s)$/, function (I, N, F) {
                        return bo(Ws(F, N))
                      }))
                    : /^[0-9]{11,13}$/.test(n) || xd(n)
                      ? (n = bo(n))
                      : (n = bo(Ws("d", n))),
                  (a.expires = n)),
                mo(["expires", "path", "domain", "secure"], function (I) {
                  WD(a[I]) || s.push(a[I] && I === "secure" ? I : I + "=" + a[I])
                })),
              (go.cookie = s.join("; "))
          }),
          !0)
        : ((o = {}),
          (d = go.cookie),
          d &&
            mo(d.split("; "), function (D) {
              ;(l = D.indexOf("=")), (o[Bs(D.substring(0, l))] = Bs(D.substring(l + 1) || ""))
            }),
          h.length === 1 ? o[e] : o)
    )
  }
  return !1
}
function XD(e) {
  return _D(Cd(), e)
}
function _s(e) {
  return Za(e)
}
function js(e, t, r) {
  return Za(e, t, r), Za
}
function qs(e, t) {
  Za(e, "", Dl({ expires: -1 }, bd.cookies, t))
}
function Cd() {
  return jD(Za())
}
function KD() {
  return Za()
}
Dl(Za, { has: XD, set: js, setItem: js, get: _s, getItem: _s, remove: qs, removeItem: qs, keys: Cd, getJSON: KD })
const ZD = Za,
  JD = na,
  xo = uu,
  Co = Tv,
  QD = aa,
  eM = Nr
function Ys(e) {
  try {
    const t = "__xe_t"
    return e.setItem(t, 1), e.removeItem(t), !0
  } catch {
    return !1
  }
}
function gl(e) {
  return navigator.userAgent.indexOf(e) > -1
}
function tM() {
  let e,
    t,
    r,
    a = !1,
    n = !1,
    s = !1,
    o = { isNode: !1, isMobile: a, isPC: !1, isDoc: !!xo }
  if (!Co && typeof process !== JD) o.isNode = !0
  else {
    ;(r = gl("Edge")),
      (t = gl("Chrome")),
      (a = /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent)),
      o.isDoc &&
        ((e = xo.body || xo.documentElement),
        eM(["webkit", "khtml", "moz", "ms", "o"], function (d) {
          o["-" + d] = !!e[d + "MatchesSelector"]
        }))
    try {
      n = Ys(Co.localStorage)
    } catch {}
    try {
      s = Ys(Co.sessionStorage)
    } catch {}
    QD(o, {
      edge: r,
      firefox: gl("Firefox"),
      msie: !r && o["-ms"],
      safari: !t && !r && gl("Safari"),
      isMobile: a,
      isPC: !a,
      isLocalStorage: n,
      isSessionStorage: s
    })
  }
  return o
}
const rM = tM,
  yd = kh,
  Gs = aa,
  aM = Ui,
  nM = Lf,
  iM = Wh,
  lM = Yh,
  oM = Jn,
  uM = Vf,
  cM = Bf,
  sM = Hf,
  fM = Nr,
  vM = au,
  dM = zf,
  pM = pg,
  hM = nu,
  gM = qg,
  mM = lu,
  bM = qf,
  xM = em,
  CM = Sn,
  yM = om,
  wM = sm,
  EM = Xi,
  SM = dm,
  OM = mm,
  TM = Cm,
  DM = Em,
  MM = Tm,
  RM = zm,
  kM = Kf,
  FM = qm,
  IM = Um,
  NM = Gf,
  PM = Qm,
  $M = Nb,
  LM = Vb,
  AM = Wb,
  VM = lv,
  BM = Xb,
  HM = Jb,
  zM = ax,
  WM = cv,
  _M = sv,
  jM = ra,
  qM = Bt,
  YM = Fa,
  GM = sx,
  UM = ha,
  XM = Hr,
  KM = Hl,
  ZM = Ia,
  JM = Zn,
  QM = mv,
  eR = Qa,
  tR = Ja,
  rR = ar,
  aR = Lx,
  nR = Hx,
  iR = Ux,
  lR = xv,
  oR = ka,
  uR = Qn,
  cR = ru,
  sR = Cv,
  fR = ev,
  vR = rv,
  dR = tv,
  pR = nC,
  hR = vC,
  gR = yv,
  mR = wv,
  bR = ga,
  xR = ou,
  CR = Ev,
  yR = CC,
  wR = Sv,
  ER = Ov,
  SR = DC,
  OR = FC,
  TR = LC,
  DR = zC,
  MR = qC,
  RR = XC,
  kR = QC,
  FR = ay,
  IR = oy,
  NR = My,
  PR = Fv,
  $R = Iy,
  LR = Hy,
  AR = _y,
  VR = cu,
  BR = Yy,
  HR = Ky,
  zR = Qy,
  WR = rw,
  _R = sw,
  jR = dw,
  qR = gw,
  YR = xw,
  GR = Ew,
  UR = Ki,
  XR = Mw,
  KR = Nv,
  ZR = Bw,
  JR = zw,
  QR = Gw,
  ek = jf,
  tk = Xf,
  rk = Kw,
  ak = FE,
  nk = fu,
  ik = Lv,
  lk = Av,
  ok = vu,
  uk = $E,
  ck = En,
  sk = en,
  fk = zE,
  vk = jE,
  dk = du,
  pk = XE,
  hk = Hv,
  gk = nS,
  mk = Yl,
  bk = RS,
  xk = al,
  Ck = _v,
  yk = zr,
  wk = Zv,
  Ek = Jv,
  Sk = LO,
  Ok = Ur,
  Tk = VO,
  Dk = Yv,
  Mk = Xv,
  Rk = Uv,
  kk = zO,
  Fk = GO,
  Ik = eT,
  Nk = aT,
  Pk = uT,
  $k = Kv,
  Lk = vT,
  Ak = td,
  Vk = Qv,
  Bk = ed,
  Hk = DT,
  zk = FT,
  Wk = AT,
  _k = HT,
  jk = _T,
  qk = YT,
  Yk = od,
  Gk = eD,
  Us = Pr,
  Uk = rD,
  Xk = Kn,
  Kk = nD,
  Zk = lD,
  Jk = cD,
  Qk = vD,
  eF = pD,
  tF = gD,
  rF = xD,
  aF = cd,
  nF = DD,
  iF = md,
  lF = AD,
  oF = HD,
  uF = ZD,
  cF = rM
Gs(yd, {
  assign: Gs,
  objectEach: aM,
  lastObjectEach: nM,
  objectMap: iM,
  merge: lM,
  uniq: dM,
  union: pM,
  sortBy: gM,
  orderBy: mM,
  shuffle: bM,
  sample: xM,
  some: uM,
  every: cM,
  slice: CM,
  filter: yM,
  find: SM,
  findLast: OM,
  findKey: wM,
  includes: EM,
  arrayIndexOf: WM,
  arrayLastIndexOf: _M,
  map: oM,
  reduce: TM,
  copyWithin: DM,
  chunk: MM,
  zip: RM,
  unzip: kM,
  zipObject: FM,
  flatten: IM,
  toArray: hM,
  includeArrays: sM,
  pluck: NM,
  invoke: PM,
  arrayEach: fM,
  lastArrayEach: vM,
  toArrayTree: $M,
  toTreeArray: LM,
  findTree: AM,
  eachTree: VM,
  mapTree: BM,
  filterTree: HM,
  searchTree: zM,
  hasOwnProp: jM,
  eqNull: tR,
  isNaN: GM,
  isFinite: pR,
  isUndefined: UM,
  isArray: qM,
  isFloat: hR,
  isInteger: gR,
  isFunction: XM,
  isBoolean: mR,
  isString: ZM,
  isNumber: bR,
  isRegExp: xR,
  isObject: KM,
  isPlainObject: JM,
  isDate: eR,
  isError: CR,
  isTypeError: yR,
  isEmpty: wR,
  isNull: YM,
  isSymbol: ER,
  isArguments: SR,
  isElement: OR,
  isDocument: TR,
  isWindow: DR,
  isFormData: MR,
  isMap: RR,
  isWeakMap: kR,
  isSet: FR,
  isWeakSet: IR,
  isLeapYear: QM,
  isMatch: NR,
  isEqual: PR,
  isEqualWith: $R,
  getType: LR,
  uniqueId: AR,
  getSize: sR,
  indexOf: iR,
  lastIndexOf: lR,
  findIndexOf: VR,
  findLastIndexOf: BR,
  toStringJSON: HR,
  toJSONString: zR,
  keys: oR,
  values: uR,
  entries: WR,
  pick: _R,
  omit: jR,
  first: qR,
  last: YR,
  each: rR,
  forOf: aR,
  lastForOf: nR,
  lastEach: fR,
  has: GR,
  get: UR,
  set: XR,
  groupBy: KR,
  countBy: ZR,
  clone: cR,
  clear: dR,
  remove: vR,
  range: JR,
  destructuring: QR,
  random: ek,
  min: rk,
  max: tk,
  commafy: ak,
  round: nk,
  ceil: ik,
  floor: lk,
  toFixed: ok,
  toNumber: ck,
  toNumberString: sk,
  toInteger: uk,
  add: fk,
  subtract: vk,
  multiply: dk,
  divide: pk,
  sum: hk,
  mean: gk,
  now: Ek,
  timestamp: Sk,
  isValidDate: Ok,
  isDateSame: Tk,
  toStringDate: yk,
  toDateString: wk,
  getWhatYear: mk,
  getWhatQuarter: bk,
  getWhatMonth: xk,
  getWhatWeek: Dk,
  getWhatDay: Ck,
  getYearDay: Mk,
  getYearWeek: Rk,
  getMonthWeek: kk,
  getDayOfYear: Fk,
  getDayOfMonth: Ik,
  getDateDiff: Nk,
  trim: Ak,
  trimLeft: Bk,
  trimRight: Vk,
  escape: Hk,
  unescape: zk,
  camelCase: Wk,
  kebabCase: _k,
  repeat: Lk,
  padStart: $k,
  padEnd: Pk,
  startsWith: jk,
  endsWith: qk,
  template: Yk,
  toFormatString: Gk,
  toString: Us,
  toValueString: Us,
  noop: Uk,
  property: Xk,
  bind: Kk,
  once: Zk,
  after: Jk,
  before: Qk,
  throttle: eF,
  debounce: tF,
  delay: rF,
  unserialize: aF,
  serialize: nF,
  parseUrl: iF,
  getBaseURL: lF,
  locat: oF,
  browse: cF,
  cookie: uF
})
const wd = yd
const u = Nf(wd)
const at = "vxe-icon-",
  C = {
    size: null,
    zIndex: 999,
    version: 0,
    emptyCell: "　",
    table: {
      fit: !0,
      showHeader: !0,
      animat: !0,
      delayHover: 250,
      autoResize: !0,
      minHeight: 144,
      resizeConfig: { refreshDelay: 250 },
      radioConfig: { strict: !0 },
      checkboxConfig: { strict: !0 },
      tooltipConfig: { enterable: !0 },
      validConfig: { showMessage: !0, autoClear: !0, message: "inline", msgMode: "single" },
      columnConfig: { maxFixedSize: 4 },
      sortConfig: { showIcon: !0, iconLayout: "vertical" },
      filterConfig: { showIcon: !0 },
      treeConfig: {
        rowField: "id",
        parentField: "parentId",
        childrenField: "children",
        hasChildField: "hasChild",
        mapChildrenField: "_X_ROW_CHILD",
        indent: 20,
        showIcon: !0
      },
      expandConfig: { showIcon: !0 },
      editConfig: { showIcon: !0, showAsterisk: !0 },
      importConfig: { modes: ["insert", "covering"] },
      exportConfig: { modes: ["current", "selected"] },
      printConfig: { modes: ["current", "selected"] },
      mouseConfig: { extension: !0 },
      keyboardConfig: { isEsc: !0 },
      areaConfig: { selectCellByHeader: !0 },
      clipConfig: { isCopy: !0, isCut: !0, isPaste: !0 },
      fnrConfig: { isFind: !0, isReplace: !0 },
      scrollX: { gt: 60 },
      scrollY: { gt: 100 }
    },
    export: { types: {} },
    icon: {
      LOADING: at + "spinner roll vxe-loading--default-icon",
      TABLE_SORT_ASC: at + "caret-up",
      TABLE_SORT_DESC: at + "caret-down",
      TABLE_FILTER_NONE: at + "funnel",
      TABLE_FILTER_MATCH: at + "funnel",
      TABLE_EDIT: at + "edit",
      TABLE_TITLE_PREFIX: at + "question-circle-fill",
      TABLE_TITLE_SUFFIX: at + "question-circle-fill",
      TABLE_TREE_LOADED: at + "spinner roll",
      TABLE_TREE_OPEN: at + "caret-right rotate90",
      TABLE_TREE_CLOSE: at + "caret-right",
      TABLE_EXPAND_LOADED: at + "spinner roll",
      TABLE_EXPAND_OPEN: at + "arrow-right rotate90",
      TABLE_EXPAND_CLOSE: at + "arrow-right",
      TABLE_CHECKBOX_CHECKED: at + "checkbox-checked",
      TABLE_CHECKBOX_UNCHECKED: at + "checkbox-unchecked",
      TABLE_CHECKBOX_INDETERMINATE: at + "checkbox-indeterminate",
      TABLE_RADIO_CHECKED: at + "radio-checked",
      TABLE_RADIO_UNCHECKED: at + "radio-unchecked",
      BUTTON_DROPDOWN: at + "arrow-down",
      BUTTON_LOADING: at + "spinner roll",
      SELECT_LOADED: at + "spinner roll",
      SELECT_OPEN: at + "caret-down rotate180",
      SELECT_CLOSE: at + "caret-down",
      PAGER_HOME: at + "home-page",
      PAGER_END: at + "end-page",
      PAGER_JUMP_PREV: at + "arrow-double-left",
      PAGER_JUMP_NEXT: at + "arrow-double-right",
      PAGER_PREV_PAGE: at + "arrow-left",
      PAGER_NEXT_PAGE: at + "arrow-right",
      PAGER_JUMP_MORE: at + "ellipsis-h",
      INPUT_CLEAR: at + "error-circle-fill",
      INPUT_PWD: at + "eye-fill",
      INPUT_SHOW_PWD: at + "eye-fill-close",
      INPUT_PREV_NUM: at + "caret-up",
      INPUT_NEXT_NUM: at + "caret-down",
      INPUT_DATE: at + "calendar",
      INPUT_SEARCH: at + "search",
      MODAL_ZOOM_IN: at + "square",
      MODAL_ZOOM_OUT: at + "maximize",
      MODAL_CLOSE: at + "close",
      MODAL_INFO: at + "info-circle-fill",
      MODAL_SUCCESS: at + "success-circle-fill",
      MODAL_WARNING: at + "warnion-circle-fill",
      MODAL_ERROR: at + "error-circle-fill",
      MODAL_QUESTION: at + "question-circle-fill",
      MODAL_LOADING: at + "spinner roll",
      TOOLBAR_TOOLS_REFRESH: at + "repeat",
      TOOLBAR_TOOLS_REFRESH_LOADING: at + "repeat roll",
      TOOLBAR_TOOLS_IMPORT: at + "upload",
      TOOLBAR_TOOLS_EXPORT: at + "download",
      TOOLBAR_TOOLS_PRINT: at + "print",
      TOOLBAR_TOOLS_FULLSCREEN: at + "fullscreen",
      TOOLBAR_TOOLS_MINIMIZE: at + "minimize",
      TOOLBAR_TOOLS_CUSTOM: at + "custom-column",
      TOOLBAR_TOOLS_FIXED_LEFT: at + "fixed-left",
      TOOLBAR_TOOLS_FIXED_LEFT_ACTIVED: at + "fixed-left-fill",
      TOOLBAR_TOOLS_FIXED_RIGHT: at + "fixed-right",
      TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVED: at + "fixed-right-fill",
      FORM_PREFIX: at + "question-circle-fill",
      FORM_SUFFIX: at + "question-circle-fill",
      FORM_FOLDING: at + "arrow-up rotate180",
      FORM_UNFOLDING: at + "arrow-up"
    },
    grid: {
      formConfig: { enabled: !0 },
      pagerConfig: { enabled: !0 },
      toolbarConfig: { enabled: !0 },
      proxyConfig: {
        enabled: !0,
        autoLoad: !0,
        message: !0,
        props: { list: null, result: "result", total: "page.total", message: "message" }
      }
    },
    tooltip: { trigger: "hover", theme: "dark", enterDelay: 500, leaveDelay: 300 },
    pager: {},
    form: { validConfig: { showMessage: !0, autoPos: !0 }, tooltipConfig: { enterable: !0 }, titleAsterisk: !0 },
    input: {
      startDate: new Date(1900, 0, 1),
      endDate: new Date(2100, 0, 1),
      startDay: 1,
      selectDay: 1,
      digits: 2,
      controls: !0
    },
    textarea: {},
    select: { multiCharOverflow: 8 },
    toolbar: { custom: { allowFixed: !0, showFooter: !0 } },
    button: {},
    radio: { strict: !0 },
    radioButton: { strict: !0 },
    radioGroup: { strict: !0 },
    checkbox: {},
    switch: {},
    modal: {
      top: 15,
      showHeader: !0,
      minWidth: 340,
      minHeight: 140,
      lockView: !0,
      mask: !0,
      duration: 3e3,
      marginSize: 0,
      dblclickZoom: !0,
      showTitleOverflow: !0,
      animat: !0,
      showClose: !0,
      draggable: !0,
      storageKey: "VXE_MODAL_POSITION"
    },
    list: { scrollY: { enabled: !0, gt: 100 } },
    i18n: function (e) {
      return e
    }
  }
function pu(e, t) {
  return "[vxe-table v".concat("4.5.21", "] ").concat(C.i18n(e, t))
}
function Ed(e) {
  return function (t, r) {
    const a = pu(t, r)
    return console[e](a), a
  }
}
var Sd = Ed("warn"),
  rr = Ed("error"),
  di = {},
  Ci = {
    mixin: function (e) {
      return (
        u.each(e, function (t, r) {
          return Ci.add(r, t)
        }),
        Ci
      )
    },
    get: function (e) {
      return di[e] || []
    },
    add: function (e, t) {
      if (t) {
        let r = di[e]
        r || (r = di[e] = []), r.push(t)
      }
      return Ci
    },
    delete: function (e, t) {
      const r = di[e]
      r &&
        (t
          ? u.remove(r, function (a) {
              return a === t
            })
          : delete di[e])
    }
  },
  sF = (function () {
    function e() {
      this.store = {}
    }
    return (
      (e.prototype.mixin = function (t) {
        const r = this
        return (
          u.each(t, function (a, n) {
            r.add(n, a)
          }),
          this
        )
      }),
      (e.prototype.has = function (t) {
        return !!this.get(t)
      }),
      (e.prototype.get = function (t) {
        return this.store[t]
      }),
      (e.prototype.add = function (t, r) {
        const a = this.store[t]
        return u.isFunction(r) && (r = { cellFormatMethod: r }), (this.store[t] = a ? u.merge(a, r) : r), this
      }),
      (e.prototype.delete = function (t) {
        delete this.store[t]
      }),
      (e.prototype.forEach = function (t) {
        u.objectEach(this.store, t)
      }),
      e
    )
  })(),
  Od = new sF(),
  Wa = null,
  Xs = "z-index-manage",
  Td = "m",
  Dd = "s",
  ji = { m: 1e3, s: 1e3 }
function Md() {
  return typeof document < "u"
}
function fF() {
  let e = 0
  if (Md())
    for (let t = document.body.getElementsByTagName("*"), r = 0; r < t.length; r++) {
      const a = t[r]
      if (a && a.style && a.nodeType === 1) {
        const n = a.style.zIndex
        n && /^\d+$/.test(n) && (e = Math.max(e, Number(n)))
      }
    }
  return e
}
function Rd() {
  return (
    Wa ||
      (Md() &&
        ((Wa = document.getElementById(Xs)),
        Wa ||
          ((Wa = document.createElement("div")),
          (Wa.id = Xs),
          (Wa.style.display = "none"),
          document.body.appendChild(Wa),
          hu(ji.m),
          mu(ji.s)))),
    Wa
  )
}
function kd(e) {
  return function (t) {
    if (t) {
      ;(t = Number(t)), (ji[e] = t)
      const r = Rd()
      r && (r.dataset ? (r.dataset[e] = t + "") : r.setAttribute("data-" + e, t + ""))
    }
    return ji[e]
  }
}
var hu = kd(Td)
function Fd(e, t) {
  return function (a) {
    let n,
      s = Rd()
    if (s) {
      const o = s.dataset ? s.dataset[e] : s.getAttribute("data-" + e)
      o && (n = Number(o))
    }
    return n || (n = ji[e]), a ? (Number(a) < n ? t() : a) : n
  }
}
const gu = Fd(Td, Id)
function Id() {
  return hu(gu() + 1)
}
var mu = kd(Dd),
  Nd = Fd(Dd, $d)
function Pd() {
  return gu() + Nd()
}
function $d() {
  return mu(Nd() + 1), Pd()
}
const bu = {
  setCurrent: hu,
  getCurrent: gu,
  getNext: Id,
  setSubCurrent: mu,
  getSubCurrent: Pd,
  getSubNext: $d,
  getMax: fF
}
function pt(e) {
  return e && e.enabled !== !1
}
function xu(e) {
  return e == null || e === ""
}
function Cu(e) {
  const t = e.name,
    r = u.lastIndexOf(t, "."),
    a = t.substring(r + 1, t.length).toLowerCase(),
    n = t.substring(0, r)
  return { filename: n, type: a }
}
function da() {
  return bu.getNext()
}
function Na() {
  return bu.getCurrent()
}
function Hn(e) {
  return e && e.children && e.children.length > 0
}
function zt(e) {
  return e ? u.toValueString(C.translate ? C.translate("" + e) : e) : ""
}
function Jt(e, t) {
  return "" + (xu(e) ? (t ? C.emptyCell : "") : e)
}
function ea(e) {
  return e === "" || u.eqNull(e)
}
const Ho = (function () {
    function e(t, r, a) {
      const n = a === void 0 ? {} : a,
        s = n.renderHeader,
        o = n.renderCell,
        d = n.renderFooter,
        l = n.renderData,
        f = t.xegrid,
        h = r.formatter,
        D = u.isBoolean(r.visible) ? r.visible : !0
      if (
        (Object.assign(this, {
          type: r.type,
          property: r.field,
          field: r.field,
          title: r.title,
          width: r.width,
          minWidth: r.minWidth,
          maxWidth: r.maxWidth,
          resizable: r.resizable,
          fixed: r.fixed,
          align: r.align,
          headerAlign: r.headerAlign,
          footerAlign: r.footerAlign,
          showOverflow: r.showOverflow,
          showHeaderOverflow: r.showHeaderOverflow,
          showFooterOverflow: r.showFooterOverflow,
          className: r.className,
          headerClassName: r.headerClassName,
          footerClassName: r.footerClassName,
          formatter: h,
          sortable: r.sortable,
          sortBy: r.sortBy,
          sortType: r.sortType,
          filters: Bd(r.filters),
          filterMultiple: u.isBoolean(r.filterMultiple) ? r.filterMultiple : !0,
          filterMethod: r.filterMethod,
          filterResetMethod: r.filterResetMethod,
          filterRecoverMethod: r.filterRecoverMethod,
          filterRender: r.filterRender,
          treeNode: r.treeNode,
          cellType: r.cellType,
          cellRender: r.cellRender,
          editRender: r.editRender,
          contentRender: r.contentRender,
          headerExportMethod: r.headerExportMethod,
          exportMethod: r.exportMethod,
          footerExportMethod: r.footerExportMethod,
          titleHelp: r.titleHelp,
          titlePrefix: r.titlePrefix,
          titleSuffix: r.titleSuffix,
          params: r.params,
          id: r.colId || u.uniqueId("col_"),
          parentId: null,
          visible: D,
          halfVisible: !1,
          defaultVisible: D,
          defaultFixed: r.fixed,
          checked: !1,
          halfChecked: !1,
          disabled: !1,
          level: 1,
          rowSpan: 1,
          colSpan: 1,
          order: null,
          sortTime: 0,
          customOrder: 0,
          renderWidth: 0,
          renderHeight: 0,
          resizeWidth: 0,
          renderLeft: 0,
          renderArgs: [],
          model: {},
          renderHeader: s || r.renderHeader,
          renderCell: o || r.renderCell,
          renderFooter: d || r.renderFooter,
          renderData: l,
          slots: r.slots
        }),
        f)
      ) {
        const I = f.getComputeMaps().computeProxyOpts,
          N = I.value
        N.beforeColumn && N.beforeColumn({ $grid: f, column: this })
      }
    }
    return (
      (e.prototype.getTitle = function () {
        return zt(this.title || (this.type === "seq" ? C.i18n("vxe.table.seqTitle") : ""))
      }),
      (e.prototype.getKey = function () {
        return this.field || (this.type ? "type=".concat(this.type) : null)
      }),
      (e.prototype.update = function (t, r) {
        t !== "filters" && (t === "field" && (this.property = r), (this[t] = r))
      }),
      e
    )
  })(),
  yo = {},
  Br = u.browse()
function Ua(e, t) {
  return e ? (u.isFunction(e) ? e(t) : e) : ""
}
function Ld(e) {
  return yo[e] || (yo[e] = new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g")), yo[e]
}
function Ad(e, t, r) {
  if (e) {
    const a = e.parentNode
    if (
      ((r.top += e.offsetTop),
      (r.left += e.offsetLeft),
      a && a !== document.documentElement && a !== document.body && ((r.top -= a.scrollTop), (r.left -= a.scrollLeft)),
      !(t && (e === t || e.offsetParent === t)) && e.offsetParent)
    )
      return Ad(e.offsetParent, t, r)
  }
  return r
}
function zo(e) {
  return e && /^\d+(px)?$/.test(e)
}
function xi(e) {
  return e && /^\d+%$/.test(e)
}
function Ma(e, t) {
  return e && e.className && e.className.match && e.className.match(Ld(t))
}
function Xa(e, t) {
  e && Ma(e, t) && (e.className = e.className.replace(Ld(t), ""))
}
function pn(e, t) {
  e && !Ma(e, t) && (Xa(e, t), (e.className = "".concat(e.className, " ").concat(t)))
}
function Ka() {
  const e = document.documentElement,
    t = document.body
  return {
    scrollTop: e.scrollTop || t.scrollTop,
    scrollLeft: e.scrollLeft || t.scrollLeft,
    visibleHeight: e.clientHeight || t.clientHeight,
    visibleWidth: e.clientWidth || t.clientWidth
  }
}
function pi(e) {
  return e ? e.offsetHeight : 0
}
function Wo(e) {
  if (e) {
    const t = getComputedStyle(e),
      r = u.toNumber(t.paddingTop),
      a = u.toNumber(t.paddingBottom)
    return r + a
  }
  return 0
}
function ml(e, t) {
  e && (e.scrollTop = t)
}
function Ks(e, t) {
  e && (e.scrollLeft = t)
}
function yu(e, t) {
  const r = t.type === "html" ? e.innerText : e.textContent
  e.getAttribute("title") !== r && e.setAttribute("title", r)
}
function yt(e, t, r, a) {
  for (
    var n, s = (e.target.shadowRoot && e.composed && e.composedPath()[0]) || e.target;
    s && s.nodeType && s !== document;

  ) {
    if (r && Ma(s, r) && (!a || a(s))) n = s
    else if (s === t) return { flag: r ? !!n : !0, container: t, targetElem: n }
    s = s.parentNode
  }
  return { flag: !1 }
}
function vF(e, t) {
  return Ad(e, t, { left: 0, top: 0 })
}
function Ta(e) {
  const t = document.body.getBoundingClientRect(),
    r = e.getBoundingClientRect(),
    a = r.top - t.top,
    n = r.left - t.left,
    s = Ka(),
    o = s.scrollTop,
    d = s.scrollLeft,
    l = s.visibleHeight,
    f = s.visibleWidth
  return { boundingTop: a, top: o + a, boundingLeft: n, left: d + n, visibleHeight: l, visibleWidth: f }
}
const Zs = "scrollIntoViewIfNeeded",
  Js = "scrollIntoView"
function Vd(e) {
  e && (e[Zs] ? e[Zs]() : e[Js] && e[Js]())
}
function dF(e, t) {
  e && e.dispatchEvent(new Event(t))
}
function wo(e) {
  return e && e.nodeType === 1
}
function Eo(e, t, r) {
  const a = e.internalData
  return e.clearScroll().then(function () {
    if (t || r) return (a.lastScrollLeft = 0), (a.lastScrollTop = 0), e.scrollTo(t, r)
  })
}
function Qs(e) {
  e && e._onscroll && (e.onscroll = null)
}
function Ml(e) {
  e && e._onscroll && (e.onscroll = e._onscroll)
}
function So() {
  return u.uniqueId("row_")
}
function sn(e) {
  const t = e.props,
    r = e.getComputeMaps().computeRowOpts,
    a = t.rowId,
    n = r.value
  return a || n.keyField || "_X_ROW_KEY"
}
function Ye(e, t) {
  const r = u.get(t, sn(e))
  return u.eqNull(r) ? "" : encodeURIComponent(r)
}
const Tr = function (e, t) {
  return t ? (u.isString(t) ? e.getColumnByField(t) : t) : null
}
function Oo(e) {
  if (e) {
    const t = getComputedStyle(e),
      r = u.toNumber(t.paddingLeft),
      a = u.toNumber(t.paddingRight)
    return r + a
  }
  return 0
}
function In(e) {
  if (e) {
    const t = getComputedStyle(e),
      r = u.toNumber(t.marginLeft),
      a = u.toNumber(t.marginRight)
    return e.offsetWidth + r + a
  }
  return 0
}
function _a(e, t) {
  return e.querySelector(".vxe-cell" + t)
}
function Bd(e) {
  return e && u.isArray(e)
    ? e.map(function (t) {
        const r = t.label,
          a = t.value,
          n = t.data,
          s = t.resetValue,
          o = t.checked
        return { label: r, value: a, data: n, resetValue: s, checked: !!o, _checked: !!o }
      })
    : e
}
function pF(e) {
  return e
    .map(function (t, r) {
      return r % 2 === 0 ? Number(t) + 1 : "."
    })
    .join("")
}
function pa(e, t) {
  return u.get(e, t.field)
}
function Oa(e, t, r) {
  return u.set(e, t.field, r)
}
function hF(e) {
  const t = e.$table,
    r = e.column,
    a = e.cell,
    n = t.props,
    s = t.getComputeMaps().computeResizableOpts,
    o = s.value,
    d = o.minWidth
  if (d) {
    const l = u.isFunction(d) ? d(e) : d
    if (l !== "auto") return Math.max(1, u.toNumber(l))
  }
  let f = n.showHeaderOverflow,
    h = r.showHeaderOverflow,
    D = r.minWidth,
    I = u.isUndefined(h) || u.isNull(h) ? f : h,
    N = I === "ellipsis",
    F = I === "title",
    q = I === !0 || I === "tooltip",
    $ = F || q || N,
    B = u.floor((u.toNumber(getComputedStyle(a).fontSize) || 14) * 1.6),
    w = Oo(a) + Oo(_a(a, "")),
    x = B + w
  if ($) {
    const M = Oo(_a(a, "--title>.vxe-cell--checkbox")),
      L = In(_a(a, ">.vxe-cell--required-icon")),
      Y = In(_a(a, ">.vxe-cell--edit-icon")),
      K = In(_a(a, ">.vxe-cell-title-prefix-icon")),
      O = In(_a(a, ">.vxe-cell-title-suffix-icon")),
      A = In(_a(a, ">.vxe-cell--sort")),
      X = In(_a(a, ">.vxe-cell--filter"))
    x += M + L + Y + K + O + X + A
  }
  if (D) {
    const J = t.getRefMaps().refTableBody,
      Ce = J.value,
      ue = Ce ? Ce.$el : null
    if (ue) {
      if (xi(D)) {
        const Z = ue.clientWidth - 1,
          se = Z / 100
        return Math.max(x, Math.floor(u.toInteger(D) * se))
      } else if (zo(D)) return Math.max(x, u.toInteger(D))
    }
  }
  return x
}
function El(e) {
  return e && (e.constructor === Ho || e instanceof Ho)
}
function gF(e, t, r) {
  return El(t) ? t : Ht(new Ho(e, t, r))
}
function Hd(e, t, r) {
  Object.keys(t).forEach(function (a) {
    ut(
      function () {
        return t[a]
      },
      function (n) {
        r.update(a, n),
          e &&
            (a === "filters"
              ? (e.setFilter(r, n), e.handleUpdateDataQueue())
              : ["visible", "fixed", "width", "minWidth", "maxWidth"].includes(a) && e.handleRefreshColumnQueue())
      }
    )
  })
}
function zd(e, t, r, a) {
  const n = e.reactData,
    s = n.staticColumns,
    o = t.parentNode,
    d = a ? a.column : null,
    l = d ? d.children : s
  o && l && (l.splice(u.arrayIndexOf(o.children, t), 0, r), (n.staticColumns = s.slice(0)))
}
function Wd(e, t) {
  const r = e.reactData,
    a = r.staticColumns,
    n = u.findTree(
      a,
      function (s) {
        return s.id === t.id
      },
      { children: "children" }
    )
  n && n.items.splice(n.index, 1), (r.staticColumns = a.slice(0))
}
function ef(e, t) {
  const r = e.internalData,
    a = r.fullColumnIdData
  if (!t) return null
  for (let n = t.parentId; a[n]; ) {
    const s = a[n].column
    if (((n = s.parentId), !n)) return s
  }
  return t
}
function _d(e, t, r) {
  for (let a = 0; a < e.length; a++) {
    const n = e[a],
      s = n.row,
      o = n.col,
      d = n.rowspan,
      l = n.colspan
    if (o > -1 && s > -1 && d && l) {
      if (s === t && o === r) return { rowspan: d, colspan: l }
      if (t >= s && t < s + d && r >= o && r < o + l) return { rowspan: 0, colspan: 0 }
    }
  }
}
function mF(e) {
  const t = e.props,
    r = e.internalData
  return (
    (r.initStatus = !1),
    e.clearSort(),
    e.clearCurrentRow(),
    e.clearCurrentColumn(),
    e.clearRadioRow(),
    e.clearRadioReserve(),
    e.clearCheckboxRow(),
    e.clearCheckboxReserve(),
    e.clearRowExpand(),
    e.clearTreeExpand(),
    e.clearTreeExpandReserve(),
    e.clearPendingRow(),
    e.clearFilter && e.clearFilter(),
    e.clearSelected && (t.keyboardConfig || t.mouseConfig) && e.clearSelected(),
    e.clearCellAreas && t.mouseConfig && (e.clearCellAreas(), e.clearCopyCellArea()),
    e.clearScroll()
  )
}
function bF(e) {
  return e.clearFilter && e.clearFilter(), mF(e)
}
function tf(e, t) {
  const r = e.reactData,
    a = e.internalData,
    n = e.getRefMaps().refTableBody,
    s = r.scrollYLoad,
    o = a.afterFullData,
    d = a.scrollYStore,
    l = n.value,
    f = l ? l.$el : null
  if (f) {
    const h = f.querySelector('[rowid="'.concat(Ye(e, t), '"]'))
    if (h) {
      const D = f.clientHeight,
        I = f.scrollTop,
        N = h.offsetParent,
        F = h.offsetTop + (N ? N.offsetTop : 0),
        q = h.clientHeight
      if (F < I || F > I + D) return e.scrollTo(null, F)
      if (F + q >= D + I) return e.scrollTo(null, I + q)
    } else if (s) return e.scrollTo(null, (o.indexOf(t) - 1) * d.rowHeight)
  }
  return Promise.resolve()
}
function xF(e, t) {
  const r = e.reactData,
    a = e.internalData,
    n = e.getRefMaps().refTableBody,
    s = r.scrollXLoad,
    o = a.visibleColumn,
    d = n.value,
    l = d ? d.$el : null
  if (l) {
    const f = l.querySelector(".".concat(t.id))
    if (f) {
      const h = l.clientWidth,
        D = l.scrollLeft,
        I = f.offsetParent,
        N = f.offsetLeft + (I ? I.offsetLeft : 0),
        F = f.clientWidth
      if (N < D || N > D + h) return e.scrollTo(N)
      if (N + F >= h + D) return e.scrollTo(D + F)
    } else if (s) {
      for (var q = 0, $ = 0; $ < o.length && o[$] !== t; $++) q += o[$].renderWidth
      return e.scrollTo(q)
    }
  }
  return Promise.resolve()
}
function _n(e) {
  return "on" + e.substring(0, 1).toLocaleUpperCase() + e.substring(1)
}
function Vt(e) {
  return u.isArray(e) ? e : [e]
}
let Tt = function () {
    return (
      (Tt =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      Tt.apply(this, arguments)
    )
  },
  Rl = function (e, t, r) {
    if (arguments.length === 2)
      for (var a = 0, n = t.length, s; a < n; a++)
        (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), (s[a] = t[a]))
    return e.concat(s || Array.prototype.slice.call(t))
  },
  wu = "modelValue",
  Eu = { transfer: !0 }
function jd(e) {
  switch (e.name) {
    case "input":
    case "textarea":
      return "input"
  }
  return "update:modelValue"
}
function qd(e) {
  switch (e.name) {
    case "input":
    case "textarea":
    case "$input":
    case "$textarea":
      return "input"
  }
  return "change"
}
function CF(e, t) {
  return e && t.valueFormat ? u.toStringDate(e, t.valueFormat) : e
}
function yF(e, t, r) {
  const a = t.dateConfig,
    n = a === void 0 ? {} : a
  return u.toDateString(CF(e, t), n.labelFormat || r)
}
function wF(e, t) {
  return yF(e, t, C.i18n("vxe.input.date.labelFormat.".concat(t.type)))
}
function Yd(e) {
  return "vxe-".concat(e.replace("$", ""))
}
function Yn(e) {
  const t = e.name
  return It(Yd(t))
}
function Gd(e, t, r) {
  const a = e.$panel
  a.changeOption({}, t, r)
}
function Gn(e) {
  let t = e.name,
    r = e.attrs
  return t === "input" && (r = Object.assign({ type: "text" }, r)), r
}
function Ud(e) {
  const t = e.name,
    r = e.immediate,
    a = e.props
  if (!r) {
    if (t === "$input") {
      const n = (a || {}).type
      return !(!n || n === "text" || n === "number" || n === "integer" || n === "float")
    }
    return !(t === "input" || t === "textarea" || t === "$textarea")
  }
  return r
}
function Su(e, t, r, a) {
  let n
  return u.assign({ immediate: Ud(e) }, Eu, a, e.props, ((n = {}), (n[wu] = r), n))
}
function Xd(e, t, r, a) {
  let n
  return u.assign({}, Eu, a, e.props, ((n = {}), (n[wu] = r), n))
}
function qi(e, t, r, a) {
  let n
  return u.assign({}, Eu, a, e.props, ((n = {}), (n[wu] = r), n))
}
function Ul(e, t) {
  return t.$type === "cell" || Ud(e)
}
function To(e, t, r) {
  const a = e.placeholder
  return [
    p(
      "span",
      { class: "vxe-cell--label" },
      a && xu(r) ? [p("span", { class: "vxe-cell--placeholder" }, Jt(zt(a), 1))] : Jt(r, 1)
    )
  ]
}
function Ou(e, t, r, a) {
  const n = e.events,
    s = jd(e),
    o = qd(e),
    d = o === s,
    l = {}
  return (
    n &&
      u.objectEach(n, function (f, h) {
        l[_n(h)] = function () {
          for (var D = [], I = 0; I < arguments.length; I++) D[I] = arguments[I]
          f.apply(void 0, Rl([t], D, !1))
        }
      }),
    r &&
      (l[_n(s)] = function (f) {
        r(f), d && a && a(f), n && n[s] && n[s](t, f)
      }),
    !d &&
      a &&
      (l[_n(o)] = function () {
        for (var f = [], h = 0; h < arguments.length; h++) f[h] = arguments[h]
        a.apply(void 0, f), n && n[o] && n[o].apply(n, Rl([t], f, !1))
      }),
    l
  )
}
function nl(e, t, r, a) {
  const n = e.events,
    s = jd(e),
    o = qd(e),
    d = {}
  return (
    u.objectEach(n, function (l, f) {
      d[_n(f)] = function () {
        for (var h = [], D = 0; D < arguments.length; D++) h[D] = arguments[D]
        l.apply(void 0, Rl([t], h, !1))
      }
    }),
    r &&
      (d[_n(s)] = function (l) {
        r(l), n && n[s] && n[s](t, l)
      }),
    a &&
      (d[_n(o)] = function () {
        for (var l = [], f = 0; f < arguments.length; f++) l[f] = arguments[f]
        a.apply(void 0, l), n && n[o] && n[o].apply(n, Rl([t], l, !1))
      }),
    d
  )
}
function Kd(e, t) {
  const r = t.$table,
    a = t.row,
    n = t.column,
    s = e.name,
    o = n.model,
    d = Ul(e, t)
  return nl(
    e,
    t,
    function (l) {
      d ? Oa(a, n, l) : ((o.update = !0), (o.value = l))
    },
    function (l) {
      if (!d && (s === "$input" || s === "$textarea")) {
        const f = l.value
        ;(o.update = !0), (o.value = f), r.updateStatus(t, f)
      } else r.updateStatus(t)
    }
  )
}
function Zd(e, t, r) {
  return nl(
    e,
    t,
    function (a) {
      r.data = a
    },
    function () {
      Gd(t, !u.eqNull(r.data), r)
    }
  )
}
function kl(e, t) {
  const r = t.$form,
    a = t.data,
    n = t.property
  return nl(
    e,
    t,
    function (s) {
      u.set(a, n, s)
    },
    function () {
      r.updateStatus(t)
    }
  )
}
function Jd(e, t) {
  const r = t.$table,
    a = t.row,
    n = t.column,
    s = n.model
  return Ou(
    e,
    t,
    function (o) {
      const d = o.target.value
      Ul(e, t) ? Oa(a, n, d) : ((s.update = !0), (s.value = d))
    },
    function (o) {
      const d = o.target.value
      r.updateStatus(t, d)
    }
  )
}
function Qd(e, t, r) {
  return Ou(
    e,
    t,
    function (a) {
      r.data = a.target.value
    },
    function () {
      Gd(t, !u.eqNull(r.data), r)
    }
  )
}
function ep(e, t) {
  const r = t.$form,
    a = t.data,
    n = t.property
  return Ou(
    e,
    t,
    function (s) {
      const o = s.target.value
      u.set(a, n, o)
    },
    function () {
      r.updateStatus(t)
    }
  )
}
function Do(e, t) {
  const r = t.row,
    a = t.column,
    n = e.name,
    s = Ul(e, t) ? pa(r, a) : a.model.value
  return [p(n, Tt(Tt(Tt({ class: "vxe-default-".concat(n) }, Gn(e)), { value: s }), Jd(e, t)))]
}
function bl(e, t) {
  const r = t.row,
    a = t.column,
    n = pa(r, a)
  return [p(Yn(e), Tt(Tt({}, Su(e, t, n)), Kd(e, t)))]
}
function tp(e, t) {
  return [p(It("vxe-button"), Tt(Tt({}, Su(e, t, null)), nl(e, t)))]
}
function EF(e, t) {
  return e.children.map(function (r) {
    return tp(r, t)[0]
  })
}
function _o(e, t, r) {
  const a = e.optionGroups,
    n = e.optionGroupProps,
    s = n === void 0 ? {} : n,
    o = s.options || "options",
    d = s.label || "label"
  return a.map(function (l, f) {
    return p("optgroup", { key: f, label: l[d] }, r(l[o], e, t))
  })
}
function Fl(e, t, r) {
  const a = t.optionProps,
    n = a === void 0 ? {} : a,
    s = r.row,
    o = r.column,
    d = n.label || "label",
    l = n.value || "value",
    f = n.disabled || "disabled",
    h = Ul(t, r) ? pa(s, o) : o.model.value
  return e.map(function (D, I) {
    return p("option", { key: I, value: D[l], disabled: D[f], selected: D[l] == h }, D[d])
  })
}
function SF(e, t) {
  const r = t.column,
    a = e.name,
    n = Gn(e)
  return r.filters.map(function (s, o) {
    return p(a, Tt(Tt(Tt({ key: o, class: "vxe-default-".concat(a) }, n), { value: s.data }), Qd(e, t, s)))
  })
}
function OF(e, t) {
  const r = t.column
  return r.filters.map(function (a, n) {
    const s = a.data
    return p(Yn(e), Tt(Tt({ key: n }, Xd(e, e, s)), Zd(e, t, a)))
  })
}
function xl(e) {
  const t = e.option,
    r = e.row,
    a = e.column,
    n = t.data,
    s = u.get(r, a.property)
  return s == n
}
function rf(e, t) {
  return [
    p(
      "select",
      Tt(Tt({ class: "vxe-default-select" }, Gn(e)), Jd(e, t)),
      e.optionGroups ? _o(e, t, Fl) : Fl(e.options, e, t)
    )
  ]
}
function af(e, t) {
  const r = t.row,
    a = t.column,
    n = e.options,
    s = e.optionProps,
    o = e.optionGroups,
    d = e.optionGroupProps,
    l = pa(r, a)
  return [
    p(Yn(e), Tt(Tt({}, Su(e, t, l, { options: n, optionProps: s, optionGroups: o, optionGroupProps: d })), Kd(e, t)))
  ]
}
function jo(e, t) {
  let r = t.row,
    a = t.column,
    n = e.props,
    s = n === void 0 ? {} : n,
    o = e.options,
    d = e.optionGroups,
    l = e.optionProps,
    f = l === void 0 ? {} : l,
    h = e.optionGroupProps,
    D = h === void 0 ? {} : h,
    I = u.get(r, a.property),
    N,
    F = f.label || "label",
    q = f.value || "value"
  return xu(I)
    ? ""
    : u
        .map(
          s.multiple ? I : [I],
          d
            ? function ($) {
                for (
                  let B = D.options || "options", w = 0;
                  w < d.length &&
                  ((N = u.find(d[w][B], function (x) {
                    return x[q] == $
                  })),
                  !N);
                  w++
                );
                return N ? N[F] : $
              }
            : function ($) {
                return (
                  (N = u.find(o, function (B) {
                    return B[q] == $
                  })),
                  N ? N[F] : $
                )
              }
        )
        .join(", ")
}
function nf(e, t) {
  const r = t.data,
    a = t.property,
    n = e.name,
    s = Gn(e),
    o = u.get(r, a)
  return [
    p(
      n,
      Tt(
        Tt(Tt({ class: "vxe-default-".concat(n) }, s), {
          value: s && n === "input" && (s.type === "submit" || s.type === "reset") ? null : o
        }),
        ep(e, t)
      )
    )
  ]
}
function Mo(e, t) {
  const r = t.data,
    a = t.property,
    n = u.get(r, a)
  return [p(Yn(e), Tt(Tt({}, qi(e, t, n)), kl(e, t)))]
}
function rp(e, t) {
  return [p(It("vxe-button"), Tt(Tt({}, qi(e, t, null)), nl(e, t)))]
}
function TF(e, t) {
  return e.children.map(function (r) {
    return rp(r, t)[0]
  })
}
function lf(e, t, r) {
  const a = r.data,
    n = r.property,
    s = t.optionProps,
    o = s === void 0 ? {} : s,
    d = o.label || "label",
    l = o.value || "value",
    f = o.disabled || "disabled",
    h = u.get(a, n)
  return e.map(function (D, I) {
    return p("option", { key: I, value: D[l], disabled: D[f], selected: D[l] == h }, D[d])
  })
}
function of(e) {
  const t = e.row,
    r = e.column,
    a = e.options
  return a.original ? pa(t, r) : jo(r.editRender || r.cellRender, e)
}
function uf(e, t) {
  const r = e.name,
    a = e.options,
    n = e.optionProps,
    s = n === void 0 ? {} : n,
    o = t.data,
    d = t.property,
    l = s.label || "label",
    f = s.value || "value",
    h = s.disabled || "disabled",
    D = u.get(o, d),
    I = Yd(r)
  return a
    ? [
        p(It("".concat(I, "-group")), Tt(Tt({}, qi(e, t, D)), kl(e, t)), {
          default: function () {
            return a.map(function (N, F) {
              return p(It(I), { key: F, label: N[f], content: N[l], disabled: N[h] })
            })
          }
        })
      ]
    : [p(It(I), Tt(Tt({}, qi(e, t, D)), kl(e, t)))]
}
var Cl = {
    input: {
      autofocus: "input",
      renderEdit: Do,
      renderDefault: Do,
      renderFilter: SF,
      defaultFilterMethod: xl,
      renderItemContent: nf
    },
    textarea: { autofocus: "textarea", renderEdit: Do, renderItemContent: nf },
    select: {
      renderEdit: rf,
      renderDefault: rf,
      renderCell: function (e, t) {
        return To(e, t, jo(e, t))
      },
      renderFilter: function (e, t) {
        const r = t.column
        return r.filters.map(function (a, n) {
          return p(
            "select",
            Tt(Tt({ key: n, class: "vxe-default-select" }, Gn(e)), Qd(e, t, a)),
            e.optionGroups ? _o(e, t, Fl) : Fl(e.options, e, t)
          )
        })
      },
      defaultFilterMethod: xl,
      renderItemContent: function (e, t) {
        return [
          p(
            "select",
            Tt(Tt({ class: "vxe-default-select" }, Gn(e)), ep(e, t)),
            e.optionGroups ? _o(e, t, lf) : lf(e.options, e, t)
          )
        ]
      },
      cellExportMethod: of
    },
    $input: {
      autofocus: ".vxe-input--inner",
      renderEdit: bl,
      renderCell: function (e, t) {
        let r = e.props,
          a = r === void 0 ? {} : r,
          n = t.row,
          s = t.column,
          o = a.digits || C.input.digits,
          d = u.get(n, s.property)
        if (d)
          switch (a.type) {
            case "date":
            case "week":
            case "month":
            case "year":
              d = wF(d, a)
              break
            case "float":
              d = u.toFixed(u.floor(d, o), o)
              break
          }
        return To(e, t, d)
      },
      renderDefault: bl,
      renderFilter: OF,
      defaultFilterMethod: xl,
      renderItemContent: Mo
    },
    $textarea: { autofocus: ".vxe-textarea--inner", renderItemContent: Mo },
    $button: { renderDefault: tp, renderItemContent: rp },
    $buttons: { renderDefault: EF, renderItemContent: TF },
    $select: {
      autofocus: ".vxe-input--inner",
      renderEdit: af,
      renderDefault: af,
      renderCell: function (e, t) {
        return To(e, t, jo(e, t))
      },
      renderFilter: function (e, t) {
        const r = t.column,
          a = e.options,
          n = e.optionProps,
          s = e.optionGroups,
          o = e.optionGroupProps
        return r.filters.map(function (d, l) {
          const f = d.data
          return p(
            Yn(e),
            Tt(
              Tt({ key: l }, Xd(e, t, f, { options: a, optionProps: n, optionGroups: s, optionGroupProps: o })),
              Zd(e, t, d)
            )
          )
        })
      },
      defaultFilterMethod: xl,
      renderItemContent: function (e, t) {
        const r = t.data,
          a = t.property,
          n = e.options,
          s = e.optionProps,
          o = e.optionGroups,
          d = e.optionGroupProps,
          l = u.get(r, a)
        return [
          p(
            Yn(e),
            Tt(Tt({}, qi(e, t, l, { options: n, optionProps: s, optionGroups: o, optionGroupProps: d })), kl(e, t))
          )
        ]
      },
      cellExportMethod: of
    },
    $radio: { autofocus: ".vxe-radio--input", renderItemContent: uf },
    $checkbox: { autofocus: ".vxe-checkbox--input", renderItemContent: uf },
    $switch: { autofocus: ".vxe-switch--button", renderEdit: bl, renderDefault: bl, renderItemContent: Mo }
  },
  hn = {
    mixin: function (e) {
      return (
        u.each(e, function (t, r) {
          return hn.add(r, t)
        }),
        hn
      )
    },
    get: function (e) {
      return Cl[e] || null
    },
    add: function (e, t) {
      if (e && t) {
        const r = Cl[e]
        r ? Object.assign(r, t) : (Cl[e] = t)
      }
      return hn
    },
    delete: function (e) {
      return delete Cl[e], hn
    }
  },
  DF = (function () {
    function e() {
      this.store = {}
    }
    return (
      (e.prototype.mixin = function (t) {
        const r = this
        return (
          u.each(t, function (a, n) {
            r.add(n, a)
          }),
          this
        )
      }),
      (e.prototype.has = function (t) {
        return !!this.get(t)
      }),
      (e.prototype.get = function (t) {
        return this.store[t]
      }),
      (e.prototype.add = function (t, r) {
        const a = this.store[t]
        return u.isFunction(r) && (r = { commandMethod: r }), (this.store[t] = a ? u.merge(a, r) : r), this
      }),
      (e.prototype.delete = function (t) {
        delete this.store[t]
      }),
      (e.prototype.forEach = function (t) {
        u.objectEach(this.store, t)
      }),
      e
    )
  })(),
  ap = new DF(),
  MF = (function () {
    function e() {
      this.store = {}
    }
    return (
      (e.prototype.mixin = function (t) {
        const r = this
        return (
          u.each(t, function (a, n) {
            r.add(n, a)
          }),
          this
        )
      }),
      (e.prototype.has = function (t) {
        return !!this.get(t)
      }),
      (e.prototype.get = function (t) {
        return this.store[t]
      }),
      (e.prototype.add = function (t, r) {
        const a = this.store[t]
        return u.isFunction(r) && (r = { menuMethod: r }), (this.store[t] = a ? u.merge(a, r) : r), this
      }),
      (e.prototype.delete = function (t) {
        delete this.store[t]
      }),
      (e.prototype.forEach = function (t) {
        u.objectEach(this.store, t)
      }),
      e
    )
  })(),
  np = new MF(),
  ip = (function () {
    function e() {
      this.store = {}
    }
    return (
      (e.prototype.mixin = function (t) {
        const r = this
        return (
          u.each(t, function (a, n) {
            r.add(n, a)
          }),
          this
        )
      }),
      (e.prototype.has = function (t) {
        return !!this.get(t)
      }),
      (e.prototype.get = function (t) {
        return this.store[t]
      }),
      (e.prototype.add = function (t, r) {
        const a = this.store[t]
        return (this.store[t] = a ? u.merge(a, r) : r), this
      }),
      (e.prototype.delete = function (t) {
        delete this.store[t]
      }),
      (e.prototype.forEach = function (t) {
        u.objectEach(this.store, t)
      }),
      e
    )
  })(),
  lp = new ip(),
  op = new ip(),
  Tu = function (e) {
    return e && e.zIndex && bu.setCurrent(e.zIndex), u.merge(C, e)
  }
function cf(e, t) {
  const r = []
  return (
    u.objectEach(e, function (a, n) {
      ;(a === 0 || a === t) && r.push(n)
    }),
    r
  )
}
const sf = []
function up(e, t) {
  return e && e.install && sf.indexOf(e) === -1 && (e.install(et, t), sf.push(e)), et
}
function cp(e, t) {
  return C.i18n(e, t)
}
function sp(e, t) {
  return e ? u.toValueString(C.translate ? C.translate(e, t) : e) : ""
}
var RF = (function () {
    function e() {}
    return (
      Object.defineProperty(e.prototype, "zIndex", {
        get: function () {
          return Na()
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "nextZIndex", {
        get: function () {
          return da()
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "exportTypes", {
        get: function () {
          return cf(C.export.types, 1)
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "importTypes", {
        get: function () {
          return cf(C.export.types, 2)
        },
        enumerable: !1,
        configurable: !0
      }),
      e
    )
  })(),
  fp = new RF(),
  vp = "v4",
  Xl = Tu,
  dp = {},
  et = {
    v: vp,
    version: "4.5.21",
    setup: Xl,
    globalStore: dp,
    interceptor: Ci,
    renderer: hn,
    commands: ap,
    formats: Od,
    validators: lp,
    menus: np,
    hooks: op,
    use: up,
    t: cp,
    _t: sp,
    config: Tu,
    globalConfs: fp
  }
const yi = Dt({
  name: "VxeTableFilter",
  props: { filterStore: Object },
  setup: function (e) {
    const t = gt("$xetable", {}),
      r = t.reactData,
      a = t.internalData,
      n = t.getComputeMaps,
      s = n().computeFilterOpts,
      o = Pe(function () {
        const w = e.filterStore
        return (
          w &&
          w.options.some(function (x) {
            return x.checked
          })
        )
      }),
      d = function (w, x) {
        const M = e.filterStore
        M.options.forEach(function (L) {
          ;(L._checked = x), (L.checked = x)
        }),
          (M.isAllSelected = x),
          (M.isIndeterminate = !1)
      },
      l = function (w) {
        const x = e.filterStore
        x.options.forEach(function (M) {
          M.checked = M._checked
        }),
          t.confirmFilterEvent(w)
      },
      f = function (w, x, M) {
        const L = e.filterStore
        L.options.forEach(function (Y) {
          Y._checked = !1
        }),
          (M._checked = x),
          t.checkFilterOptions(),
          l(w)
      },
      h = function (w) {
        const x = e.filterStore
        t.handleClearFilter(x.column), t.confirmFilterEvent(w)
      },
      D = function (w, x, M) {
        ;(M._checked = x), t.checkFilterOptions()
      },
      I = function (w, x, M) {
        const L = e.filterStore
        L.multiple ? D(w, x, M) : f(w, x, M)
      },
      N = function (w, x) {
        const M = e.filterStore
        M.multiple ? d(w, x) : h(w)
      },
      F = {
        changeRadioOption: f,
        changeMultipleOption: D,
        changeAllOption: N,
        changeOption: I,
        confirmFilter: l,
        resetFilter: h
      },
      q = function (w, x) {
        const M = e.filterStore,
          L = M.column,
          Y = M.multiple,
          K = M.maxHeight,
          O = L.slots,
          A = O ? O.filter : null,
          X = Object.assign({}, a._currFilterParams, { $panel: F, $table: t })
        if (A) return [p("div", { class: "vxe-table--filter-template" }, t.callSlot(A, X))]
        if (x && x.renderFilter) return [p("div", { class: "vxe-table--filter-template" }, Vt(x.renderFilter(w, X)))]
        const J = Y
            ? M.isAllSelected
            : !M.options.some(function (ue) {
                return ue._checked
              }),
          Ce = Y && M.isIndeterminate
        return [
          p("ul", { class: "vxe-table--filter-header" }, [
            p(
              "li",
              {
                class: ["vxe-table--filter-option", { "is--checked": J, "is--indeterminate": Ce }],
                title: C.i18n(Y ? "vxe.table.allTitle" : "vxe.table.allFilter"),
                onClick: function (ue) {
                  N(ue, !M.isAllSelected)
                }
              },
              (Y
                ? [
                    p("span", {
                      class: [
                        "vxe-checkbox--icon",
                        Ce
                          ? C.icon.TABLE_CHECKBOX_INDETERMINATE
                          : J
                            ? C.icon.TABLE_CHECKBOX_CHECKED
                            : C.icon.TABLE_CHECKBOX_UNCHECKED
                      ]
                    })
                  ]
                : []
              ).concat([p("span", { class: "vxe-checkbox--label" }, C.i18n("vxe.table.allFilter"))])
            )
          ]),
          p(
            "ul",
            { class: "vxe-table--filter-body", style: K ? { maxHeight: "".concat(K, "px") } : {} },
            M.options.map(function (ue) {
              const Z = ue._checked
              return p(
                "li",
                {
                  class: ["vxe-table--filter-option", { "is--checked": ue._checked }],
                  title: ue.label,
                  onClick: function (se) {
                    I(se, !ue._checked, ue)
                  }
                },
                (Y
                  ? [
                      p("span", {
                        class: [
                          "vxe-checkbox--icon",
                          Z ? C.icon.TABLE_CHECKBOX_CHECKED : C.icon.TABLE_CHECKBOX_UNCHECKED
                        ]
                      })
                    ]
                  : []
                ).concat([p("span", { class: "vxe-checkbox--label" }, Jt(ue.label, 1))])
              )
            })
          )
        ]
      },
      $ = function () {
        const w = e.filterStore,
          x = w.column,
          M = w.multiple,
          L = s.value,
          Y = o.value,
          K = x.filterRender,
          O = K ? et.renderer.get(K.name) : null,
          A = !Y && !w.isAllSelected && !w.isIndeterminate
        return M && (!O || O.showFilterFooter !== !1)
          ? [
              p("div", { class: "vxe-table--filter-footer" }, [
                p(
                  "button",
                  { class: { "is--disabled": A }, disabled: A, onClick: l },
                  L.confirmButtonText || C.i18n("vxe.table.confirmFilter")
                ),
                p("button", { onClick: h }, L.resetButtonText || C.i18n("vxe.table.resetFilter"))
              ])
            ]
          : []
      },
      B = function () {
        const w = e.filterStore,
          x = r.initStore,
          M = w.column,
          L = M ? M.filterRender : null,
          Y = L ? et.renderer.get(L.name) : null,
          K = Y ? Y.filterClassName : "",
          O = Object.assign({}, a._currFilterParams, { $panel: F, $table: t })
        return p(
          "div",
          {
            class: [
              "vxe-table--filter-wrapper",
              "filter--prevent-default",
              Ua(K, O),
              { "is--animat": t.props.animat, "is--multiple": w.multiple, "is--active": w.visible }
            ],
            style: w.style
          },
          x.filter && w.visible ? q(L, Y).concat($()) : []
        )
      }
    return B
  }
})
let Il = function () {
    return (
      (Il =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      Il.apply(this, arguments)
    )
  },
  kF = ["setFilter", "clearFilter", "getCheckedFilters"],
  FF = {
    setupTable: function (e) {
      const t = e.props,
        r = e.reactData,
        a = e.internalData,
        n = e.getRefMaps(),
        s = n.refTableBody,
        o = n.refTableFilter,
        d = e.getComputeMaps(),
        l = d.computeFilterOpts,
        f = d.computeMouseOpts,
        h = {
          checkFilterOptions: function () {
            const I = r.filterStore
            ;(I.isAllSelected = I.options.every(function (N) {
              return N._checked
            })),
              (I.isIndeterminate =
                !I.isAllSelected &&
                I.options.some(function (N) {
                  return N._checked
                }))
          },
          triggerFilterEvent: function (I, N, F) {
            const q = r.initStore,
              $ = r.filterStore
            if ($.column === N && $.visible) $.visible = !1
            else {
              const B = I.target,
                w = I.pageX,
                x = Ka().visibleWidth,
                M = N.filters,
                L = N.filterMultiple,
                Y = N.filterRender,
                K = Y ? et.renderer.get(Y.name) : null,
                O = N.filterRecoverMethod || (K ? K.filterRecoverMethod : null)
              ;(a._currFilterParams = F),
                Object.assign($, { multiple: L, options: M, column: N, style: null }),
                $.options.forEach(function (A) {
                  const X = A._checked,
                    J = A.checked
                  ;(A._checked = J), !J && X !== J && O && O({ option: A, column: N, $table: e })
                }),
                this.checkFilterOptions(),
                ($.visible = !0),
                (q.filter = !0),
                de(function () {
                  let A = s.value,
                    X = A.$el,
                    J = o.value,
                    Ce = J ? J.$el : null,
                    ue = 0,
                    Z = 0,
                    se = null,
                    Oe = null
                  Ce &&
                    ((ue = Ce.offsetWidth),
                    (Z = Ce.offsetHeight),
                    (se = Ce.querySelector(".vxe-table--filter-header")),
                    (Oe = Ce.querySelector(".vxe-table--filter-footer")))
                  let Ie = ue / 2,
                    z = 10,
                    ge = X.clientWidth - ue - z,
                    oe,
                    he,
                    ve = { top: "".concat(B.offsetTop + B.offsetParent.offsetTop + B.offsetHeight + 8, "px") },
                    De = null
                  if (
                    (Z >= X.clientHeight &&
                      (De = Math.max(60, X.clientHeight - (Oe ? Oe.offsetHeight : 0) - (se ? se.offsetHeight : 0))),
                    N.fixed === "left"
                      ? (oe = B.offsetLeft + B.offsetParent.offsetLeft - Ie)
                      : N.fixed === "right"
                        ? (he =
                            B.offsetParent.offsetWidth -
                            B.offsetLeft +
                            (B.offsetParent.offsetParent.offsetWidth - B.offsetParent.offsetLeft) -
                            N.renderWidth -
                            Ie)
                        : (oe = B.offsetLeft + B.offsetParent.offsetLeft - Ie - X.scrollLeft),
                    oe)
                  ) {
                    var Ne = w + ue - Ie + z - x
                    Ne > 0 && (oe -= Ne), (ve.left = "".concat(Math.min(ge, Math.max(z, oe)), "px"))
                  } else if (he) {
                    var Ne = w + ue - Ie + z - x
                    Ne > 0 && (he += Ne), (ve.right = "".concat(Math.max(z, he), "px"))
                  }
                  ;($.style = ve), ($.maxHeight = De)
                })
            }
            e.dispatchEvent(
              "filter-visible",
              { column: N, field: N.field, property: N.field, filterList: e.getCheckedFilters(), visible: $.visible },
              I
            )
          },
          handleClearFilter: function (I) {
            if (I) {
              const N = I.filters,
                F = I.filterRender
              if (N) {
                const q = F ? et.renderer.get(F.name) : null,
                  $ = I.filterResetMethod || (q ? q.filterResetMethod : null)
                N.forEach(function (B) {
                  ;(B._checked = !1), (B.checked = !1), $ || (B.data = u.clone(B.resetValue, !0))
                }),
                  $ && $({ options: N, column: I, $table: e })
              }
            }
          },
          confirmFilterEvent: function (I) {
            const N = t.mouseConfig,
              F = r.filterStore,
              q = r.scrollXLoad,
              $ = r.scrollYLoad,
              B = l.value,
              w = f.value,
              x = F.column,
              M = x.field,
              L = [],
              Y = []
            x.filters.forEach(function (A) {
              A.checked && (L.push(A.value), Y.push(A.data))
            })
            const K = e.getCheckedFilters(),
              O = {
                $table: e,
                $event: I,
                column: x,
                field: M,
                property: M,
                values: L,
                datas: Y,
                filters: K,
                filterList: K
              }
            B.remote || (e.handleTableData(!0), e.checkSelectionStatus()),
              N && w.area && e.handleFilterEvent && e.handleFilterEvent(I, O),
              e.dispatchEvent("filter-change", O, I),
              e.closeFilter(),
              e
                .updateFooter()
                .then(function () {
                  const A = r.scrollXLoad,
                    X = r.scrollYLoad
                  if (q || A || $ || X)
                    return (q || A) && e.updateScrollXSpace(), ($ || X) && e.updateScrollYSpace(), e.refreshScroll()
                })
                .then(function () {
                  return e.updateCellAreas(), e.recalculate(!0)
                })
                .then(function () {
                  setTimeout(function () {
                    return e.recalculate()
                  }, 50)
                })
          }
        },
        D = {
          openFilter: function (I) {
            const N = Tr(e, I)
            if (N && N.filters) {
              const F = a.elemStore,
                q = N.fixed
              return e.scrollToColumn(N).then(function () {
                const $ = F["".concat(q || "main", "-header-wrapper")] || F["main-header-wrapper"],
                  B = $ ? $.value : null
                if (B) {
                  const w = B.querySelector(".vxe-header--column.".concat(N.id, " .vxe-filter--btn"))
                  dF(w, "click")
                }
              })
            }
            return de()
          },
          setFilter: function (I, N) {
            const F = Tr(e, I)
            return F && F.filters && (F.filters = Bd(N || [])), de()
          },
          clearFilter: function (I) {
            let N = r.filterStore,
              F = a.tableFullColumn,
              q = l.value,
              $
            return (
              I ? (($ = Tr(e, I)), $ && h.handleClearFilter($)) : F.forEach(h.handleClearFilter),
              (!I || $ !== N.column) &&
                Object.assign(N, {
                  isAllSelected: !1,
                  isIndeterminate: !1,
                  style: null,
                  options: [],
                  column: null,
                  multiple: !1,
                  visible: !1
                }),
              q.remote ? de() : e.updateData()
            )
          },
          getCheckedFilters: function () {
            const I = a.tableFullColumn,
              N = []
            return (
              I.forEach(function (F) {
                const q = F.field,
                  $ = F.filters,
                  B = [],
                  w = []
                $ &&
                  $.length &&
                  ($.forEach(function (x) {
                    x.checked && (B.push(x.value), w.push(x.data))
                  }),
                  B.length && N.push({ column: F, field: q, property: q, values: B, datas: w }))
              }),
              N
            )
          }
        }
      return Il(Il({}, D), h)
    },
    setupGrid: function (e) {
      return e.extendTableMethods(kF)
    }
  },
  hi,
  Sl = Ht({ modals: [] }),
  IF = Dt({
    setup: function () {
      return function () {
        const e = Sl.modals
        return p(
          "div",
          { class: "vxe-dynamics--modal" },
          e.map(function (t) {
            return p(It("vxe-modal"), t)
          })
        )
      }
    }
  }),
  Ft = Wp(IF)
function NF() {
  hi ||
    ((hi = document.createElement("div")), (hi.className = "vxe-dynamics"), document.body.appendChild(hi), Ft.mount(hi))
}
const Du = {
    Panel: yi,
    install: function (e) {
      et.hooks.add("$tableFilter", FF), e.component(yi.name, yi)
    }
  },
  PF = Du
Ft.component(yi.name, yi)
const wi = Dt({
  name: "VxeTableContextMenu",
  setup: function (e, t) {
    const r = u.uniqueId(),
      a = gt("$xetable", {}),
      n = a.reactData,
      s = Xe(),
      o = { refElem: s },
      d = {
        xID: r,
        props: e,
        context: t,
        getRefMaps: function () {
          return o
        }
      },
      l = function () {
        const f = n.ctxMenuStore,
          h = a.getComputeMaps().computeMenuOpts,
          D = h.value
        return p(Un, { to: "body", disabled: !1 }, [
          p(
            "div",
            {
              ref: s,
              class: ["vxe-table--context-menu-wrapper", D.className, { "is--visible": f.visible }],
              style: f.style
            },
            f.list.map(function (I, N) {
              return I.every(function (F) {
                return F.visible === !1
              })
                ? Ot()
                : p(
                    "ul",
                    { class: "vxe-context-menu--option-wrapper", key: N },
                    I.map(function (F, q) {
                      const $ =
                        F.children &&
                        F.children.some(function (B) {
                          return B.visible !== !1
                        })
                      return F.visible === !1
                        ? null
                        : p(
                            "li",
                            {
                              class: [F.className, { "link--disabled": F.disabled, "link--active": F === f.selected }],
                              key: "".concat(N, "_").concat(q)
                            },
                            [
                              p(
                                "a",
                                {
                                  class: "vxe-context-menu--link",
                                  onClick: function (B) {
                                    a.ctxMenuLinkEvent(B, F)
                                  },
                                  onMouseover: function (B) {
                                    a.ctxMenuMouseoverEvent(B, F)
                                  },
                                  onMouseout: function (B) {
                                    a.ctxMenuMouseoutEvent(B, F)
                                  }
                                },
                                [
                                  p("i", { class: ["vxe-context-menu--link-prefix", F.prefixIcon] }),
                                  p("span", { class: "vxe-context-menu--link-content" }, zt(F.name)),
                                  p("i", {
                                    class: [
                                      "vxe-context-menu--link-suffix",
                                      $ ? F.suffixIcon || "suffix--haschild" : F.suffixIcon
                                    ]
                                  })
                                ]
                              ),
                              $
                                ? p(
                                    "ul",
                                    {
                                      class: [
                                        "vxe-table--context-menu-clild-wrapper",
                                        { "is--show": F === f.selected && f.showChild }
                                      ]
                                    },
                                    F.children.map(function (B, w) {
                                      return B.visible === !1
                                        ? null
                                        : p(
                                            "li",
                                            {
                                              class: [
                                                B.className,
                                                { "link--disabled": B.disabled, "link--active": B === f.selectChild }
                                              ],
                                              key: "".concat(N, "_").concat(q, "_").concat(w)
                                            },
                                            [
                                              p(
                                                "a",
                                                {
                                                  class: "vxe-context-menu--link",
                                                  onClick: function (x) {
                                                    a.ctxMenuLinkEvent(x, B)
                                                  },
                                                  onMouseover: function (x) {
                                                    a.ctxMenuMouseoverEvent(x, F, B)
                                                  },
                                                  onMouseout: function (x) {
                                                    a.ctxMenuMouseoutEvent(x, F)
                                                  }
                                                },
                                                [
                                                  p("i", { class: ["vxe-context-menu--link-prefix", B.prefixIcon] }),
                                                  p("span", { class: "vxe-context-menu--link-content" }, zt(B.name))
                                                ]
                                              )
                                            ]
                                          )
                                    })
                                  )
                                : null
                            ]
                          )
                    })
                  )
            })
          )
        ])
      }
    return (d.renderVN = l), d
  },
  render: function () {
    return this.renderVN()
  }
})
const ct = {
    F2: "F2",
    ESCAPE: "Escape",
    ENTER: "Enter",
    TAB: "Tab",
    DELETE: "Delete",
    BACKSPACE: "Backspace",
    SPACEBAR: " ",
    CONTEXT_MENU: "ContextMenu",
    ARROW_UP: "ArrowUp",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    PAGE_UP: "PageUp",
    PAGE_DOWN: "PageDown"
  },
  ff = {
    " ": "Spacebar",
    Apps: ct.CONTEXT_MENU,
    Del: ct.DELETE,
    Up: ct.ARROW_UP,
    Down: ct.ARROW_DOWN,
    Left: ct.ARROW_LEFT,
    Right: ct.ARROW_RIGHT
  },
  pp = Br.firefox ? "DOMMouseScroll" : "mousewheel",
  qo = [],
  ht = function (e, t) {
    const r = e.key
    return (t = t.toLowerCase()), r ? t === r.toLowerCase() || !!(ff[r] && ff[r].toLowerCase() === t) : !1
  }
function fa(e) {
  const t = e.type === pp
  qo.forEach(function (r) {
    const a = r.type,
      n = r.cb
    e.cancelBubble || ((a === e.type || (t && a === "mousewheel")) && n(e))
  })
}
const vt = {
  on: function (e, t, r) {
    qo.push({ comp: e, type: t, cb: r })
  },
  off: function (e, t) {
    u.remove(qo, function (r) {
      return r.comp === e && r.type === t
    })
  },
  trigger: fa,
  eqKeypad: function (e, t) {
    const r = e.key
    return t.toLowerCase() === r.toLowerCase()
  }
}
Br.isDoc &&
  (Br.msie ||
    (document.addEventListener("copy", fa, !1),
    document.addEventListener("cut", fa, !1),
    document.addEventListener("paste", fa, !1)),
  document.addEventListener("keydown", fa, !1),
  document.addEventListener("contextmenu", fa, !1),
  window.addEventListener("mousedown", fa, !1),
  window.addEventListener("blur", fa, !1),
  window.addEventListener("resize", fa, !1),
  window.addEventListener(pp, u.throttle(fa, 100, { leading: !0, trailing: !1 }), { passive: !0, capture: !1 }))
let Nl = function () {
    return (
      (Nl =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      Nl.apply(this, arguments)
    )
  },
  $F = ["closeMenu"],
  LF = {
    setupTable: function (e) {
      let t = e.xID,
        r = e.props,
        a = e.reactData,
        n = e.internalData,
        s = e.getRefMaps(),
        o = s.refElem,
        d = s.refTableFilter,
        l = s.refTableMenu,
        f = e.getComputeMaps(),
        h = f.computeMouseOpts,
        D = f.computeIsMenu,
        I = f.computeMenuOpts,
        N = {},
        F = {},
        q = function ($, B, w) {
          const x = a.ctxMenuStore,
            M = D.value,
            L = I.value,
            Y = L[B],
            K = L.visibleMethod
          if (Y) {
            const O = Y.options,
              A = Y.disabled
            A
              ? $.preventDefault()
              : M &&
                O &&
                O.length &&
                ((w.options = O),
                e.preventEvent($, "event.showMenu", w, function () {
                  if (!K || K(w)) {
                    $.preventDefault(), e.updateZindex()
                    let X = Ka(),
                      J = X.scrollTop,
                      Ce = X.scrollLeft,
                      ue = X.visibleHeight,
                      Z = X.visibleWidth,
                      se = $.clientY + J,
                      Oe = $.clientX + Ce,
                      Ie = function () {
                        ;(n._currMenuParams = w),
                          Object.assign(x, {
                            visible: !0,
                            list: O,
                            selected: null,
                            selectChild: null,
                            showChild: !1,
                            style: { zIndex: n.tZindex, top: "".concat(se, "px"), left: "".concat(Oe, "px") }
                          }),
                          de(function () {
                            const he = l.value,
                              ve = he.getRefMaps().refElem.value,
                              De = ve.clientHeight,
                              Ne = ve.clientWidth,
                              $e = Ta(ve),
                              Te = $e.boundingTop,
                              Ve = $e.boundingLeft,
                              W = Te + De - ue,
                              ce = Ve + Ne - Z
                            W > -10 && (x.style.top = "".concat(Math.max(J + 2, se - De - 2), "px")),
                              ce > -10 && (x.style.left = "".concat(Math.max(Ce + 2, Oe - Ne - 2), "px"))
                          })
                      },
                      z = w.keyboard,
                      ge = w.row,
                      oe = w.column
                    z && ge && oe
                      ? e.scrollToRow(ge, oe).then(function () {
                          const he = e.getCell(ge, oe)
                          if (he) {
                            const ve = Ta(he),
                              De = ve.boundingTop,
                              Ne = ve.boundingLeft
                            ;(se = De + J + Math.floor(he.offsetHeight / 2)),
                              (Oe = Ne + Ce + Math.floor(he.offsetWidth / 2))
                          }
                          Ie()
                        })
                      : Ie()
                  } else N.closeMenu()
                }))
          }
          e.closeFilter()
        }
      return (
        (N = {
          closeMenu: function () {
            return (
              Object.assign(a.ctxMenuStore, { visible: !1, selected: null, selectChild: null, showChild: !1 }), de()
            )
          }
        }),
        (F = {
          moveCtxMenu: function ($, B, w, x, M, L) {
            let Y,
              K = u.findIndexOf(L, function (X) {
                return B[w] === X
              })
            if (x) M && Hn(B.selected) ? (B.showChild = !0) : ((B.showChild = !1), (B.selectChild = null))
            else if (ht($, ct.ARROW_UP)) {
              for (let O = K - 1; O >= 0; O--)
                if (L[O].visible !== !1) {
                  Y = L[O]
                  break
                }
              B[w] = Y || L[L.length - 1]
            } else if (ht($, ct.ARROW_DOWN)) {
              for (let A = K + 1; A < L.length; A++)
                if (L[A].visible !== !1) {
                  Y = L[A]
                  break
                }
              B[w] = Y || L[0]
            } else B[w] && (ht($, ct.ENTER) || ht($, ct.SPACEBAR)) && F.ctxMenuLinkEvent($, B[w])
          },
          handleGlobalContextmenuEvent: function ($) {
            const B = r.mouseConfig,
              w = r.menuConfig,
              x = a.editStore,
              M = a.ctxMenuStore,
              L = n.visibleColumn,
              Y = d.value,
              K = l.value,
              O = h.value,
              A = I.value,
              X = o.value,
              J = x.selected,
              Ce = ["header", "body", "footer"]
            if (pt(w)) {
              if (M.visible && K && yt($, K.getRefMaps().refElem.value).flag) {
                $.preventDefault()
                return
              }
              if (n._keyCtx) {
                var ue = "body",
                  Z = { type: ue, $table: e, keyboard: !0, columns: L.slice(0), $event: $ }
                if (B && O.area) {
                  const se = e.getActiveCellArea()
                  if (se && se.row && se.column) {
                    ;(Z.row = se.row), (Z.column = se.column), q($, ue, Z)
                    return
                  }
                } else if (B && O.selected && J.row && J.column) {
                  ;(Z.row = J.row), (Z.column = J.column), q($, ue, Z)
                  return
                }
              }
              for (let Oe = 0; Oe < Ce.length; Oe++) {
                var Ie = Ce[Oe],
                  z = yt($, X, "vxe-".concat(Ie, "--column"), function (Ve) {
                    return Ve.parentNode.parentNode.parentNode.getAttribute("xid") === t
                  }),
                  Z = { type: Ie, $table: e, columns: L.slice(0), $event: $ }
                if (z.flag) {
                  let ge = z.targetElem,
                    oe = e.getColumnNode(ge),
                    he = oe ? oe.item : null,
                    ve = "".concat(Ie, "-")
                  if (
                    (he && Object.assign(Z, { column: he, columnIndex: e.getColumnIndex(he), cell: ge }), Ie === "body")
                  ) {
                    const De = e.getRowNode(ge.parentNode),
                      Ne = De ? De.item : null
                    ;(ve = ""), Ne && ((Z.row = Ne), (Z.rowIndex = e.getRowIndex(Ne)))
                  }
                  const $e = "".concat(ve, "cell-menu")
                  q($, Ie, Z), e.dispatchEvent($e, Z, $)
                  return
                } else if (
                  yt($, X, "vxe-table--".concat(Ie, "-wrapper"), function (Ve) {
                    return Ve.getAttribute("xid") === t
                  }).flag
                ) {
                  A.trigger === "cell" ? $.preventDefault() : q($, Ie, Z)
                  return
                }
              }
            }
            Y && !yt($, Y.$el).flag && e.closeFilter(), N.closeMenu()
          },
          ctxMenuMouseoverEvent: function ($, B, w) {
            const x = $.currentTarget,
              M = a.ctxMenuStore
            $.preventDefault(),
              $.stopPropagation(),
              (M.selected = B),
              (M.selectChild = w),
              w ||
                ((M.showChild = Hn(B)),
                M.showChild &&
                  de(function () {
                    const L = x.nextElementSibling
                    if (L) {
                      let Y = Ta(x),
                        K = Y.boundingTop,
                        O = Y.boundingLeft,
                        A = Y.visibleHeight,
                        X = Y.visibleWidth,
                        J = K + x.offsetHeight,
                        Ce = O + x.offsetWidth,
                        ue = "",
                        Z = ""
                      Ce + L.offsetWidth > X - 10 && ((ue = "auto"), (Z = "".concat(x.offsetWidth, "px")))
                      let se = "",
                        Oe = ""
                      J + L.offsetHeight > A - 10 && ((se = "auto"), (Oe = "0")),
                        (L.style.left = ue),
                        (L.style.right = Z),
                        (L.style.top = se),
                        (L.style.bottom = Oe)
                    }
                  }))
          },
          ctxMenuMouseoutEvent: function ($, B) {
            const w = a.ctxMenuStore
            B.children || (w.selected = null), (w.selectChild = null)
          },
          ctxMenuLinkEvent: function ($, B) {
            if (!B.disabled && (B.code || !B.children || !B.children.length)) {
              const w = et.menus.get(B.code),
                x = Object.assign({}, n._currMenuParams, { menu: B, $table: e, $grid: e.xegrid, $event: $ })
              w && w.menuMethod && w.menuMethod(x, $), e.dispatchEvent("menu-click", x, $), N.closeMenu()
            }
          }
        }),
        Nl(Nl({}, N), F)
      )
    },
    setupGrid: function (e) {
      return e.extendTableMethods($F)
    }
  },
  Mu = {
    Panel: wi,
    install: function (e) {
      et.hooks.add("$tableMenu", LF), e.component(wi.name, wi)
    }
  },
  AF = Mu
Ft.component(wi.name, wi)
let vn = function () {
    return (
      (vn =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      vn.apply(this, arguments)
    )
  },
  Ro = function (e, t, r) {
    if (arguments.length === 2)
      for (var a = 0, n = t.length, s; a < n; a++)
        (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), (s[a] = t[a]))
    return e.concat(s || Array.prototype.slice.call(t))
  },
  VF = [
    "insert",
    "insertAt",
    "insertNextAt",
    "remove",
    "removeCheckboxRow",
    "removeRadioRow",
    "removeCurrentRow",
    "getRecordset",
    "getInsertRecords",
    "getRemoveRecords",
    "getUpdateRecords",
    "getEditRecord",
    "getActiveRecord",
    "getSelectedCell",
    "clearEdit",
    "clearActived",
    "clearSelected",
    "isEditByRow",
    "isActiveByRow",
    "setEditRow",
    "setActiveRow",
    "setEditCell",
    "setActiveCell",
    "setSelectCell"
  ],
  BF = {
    setupTable: function (e) {
      let t = e.props,
        r = e.reactData,
        a = e.internalData,
        n = e.getRefMaps().refElem,
        s = e.getComputeMaps(),
        o = s.computeMouseOpts,
        d = s.computeEditOpts,
        l = s.computeCheckboxOpts,
        f = s.computeTreeOpts,
        h = {},
        D = {},
        I = function (w, x) {
          const M = x.model,
            L = x.editRender
          L && ((M.value = pa(w, x)), (M.update = !1))
        },
        N = function (w, x) {
          const M = x.model,
            L = x.editRender
          L && M.update && (Oa(w, x, M.value), (M.update = !1), (M.value = null))
        },
        F = function () {
          const w = n.value
          if (w) {
            const x = w.querySelector(".col--selected")
            x && Xa(x, "col--selected")
          }
        }
      function q() {
        const w = r.editStore,
          x = r.tableColumn,
          M = d.value,
          L = w.actived,
          Y = L.row,
          K = L.column
        ;(Y || K) &&
          (M.mode === "row"
            ? x.forEach(function (O) {
                return N(Y, O)
              })
            : N(Y, K))
      }
      function $(w, x) {
        const M = a.tableFullTreeData,
          L = a.afterFullData,
          Y = a.fullDataRowIdData,
          K = a.fullAllDataRowIdData,
          O = f.value,
          A = O.rowField,
          X = O.parentField,
          J = O.mapChildrenField,
          Ce = O.children || O.childrenField,
          ue = x ? "push" : "unshift"
        w.forEach(function (Z) {
          const se = Z[X],
            Oe = Ye(e, Z),
            Ie = se
              ? u.findTree(
                  M,
                  function (Ne) {
                    return se === Ne[A]
                  },
                  { children: J }
                )
              : null
          if (Ie) {
            let z = Ie.item,
              ge = K[Ye(e, z)],
              oe = ge ? ge.level : 0,
              he = z[Ce],
              ve = z[J]
            u.isArray(he) || (he = z[Ce] = []), u.isArray(ve) || (ve = z[Ce] = []), he[ue](Z), ve[ue](Z)
            var De = {
              row: Z,
              rowid: Oe,
              seq: -1,
              index: -1,
              _index: -1,
              $index: -1,
              items: he,
              parent: z,
              level: oe + 1
            }
            ;(Y[Oe] = De), (K[Oe] = De)
          } else {
            L[ue](Z), M[ue](Z)
            var De = { row: Z, rowid: Oe, seq: -1, index: -1, _index: -1, $index: -1, items: M, parent: null, level: 0 }
            ;(Y[Oe] = De), (K[Oe] = De)
          }
        })
      }
      const B = function (w, x, M) {
        const L = t.treeConfig,
          Y = r.mergeList,
          K = r.editStore,
          O = a.tableFullTreeData,
          A = a.afterFullData,
          X = a.tableFullData,
          J = a.fullDataRowIdData,
          Ce = a.fullAllDataRowIdData,
          ue = f.value,
          Z = ue.transform,
          se = ue.rowField,
          Oe = ue.mapChildrenField,
          Ie = ue.children || ue.childrenField
        u.isArray(w) || (w = [w])
        const z = Ht(
          e.defineField(
            w.map(function (ce) {
              let ye
              return Object.assign(L && Z ? ((ye = {}), (ye[Oe] = []), (ye[Ie] = []), ye) : {}, ce)
            })
          )
        )
        if (u.eqNull(x))
          L && Z
            ? $(z, !1)
            : (A.unshift.apply(A, z),
              X.unshift.apply(X, z),
              Y.forEach(function (ce) {
                const ye = ce.row
                ye > 0 && (ce.row = ye + z.length)
              }))
        else if (x === -1)
          L && Z
            ? $(z, !0)
            : (A.push.apply(A, z),
              X.push.apply(X, z),
              Y.forEach(function (ce) {
                const ye = ce.row,
                  Ae = ce.rowspan
                ye + Ae > A.length && (ce.rowspan = Ae + z.length)
              }))
        else if (L && Z) {
          const ge = u.findTree(
            O,
            function (ce) {
              return x[se] === ce[se]
            },
            { children: Oe }
          )
          if (ge) {
            const oe = ge.parent,
              he = oe ? oe[Oe] : O,
              ve = Ce[Ye(e, oe)],
              De = ve ? ve.level : 0
            if (
              (z.forEach(function (ce, ye) {
                const Ae = Ye(e, ce)
                oe && (ce[ue.parentField] = oe[se])
                let Re = ge.index + ye
                M && (Re = Re + 1), he.splice(Re, 0, ce)
                const ae = {
                  row: ce,
                  rowid: Ae,
                  seq: -1,
                  index: -1,
                  _index: -1,
                  $index: -1,
                  items: he,
                  parent: oe,
                  level: De + 1
                }
                ;(J[Ae] = ae), (Ce[Ae] = ae)
              }),
              oe)
            ) {
              const Ne = u.findTree(
                O,
                function (ce) {
                  return x[se] === ce[se]
                },
                { children: Ie }
              )
              if (Ne) {
                let $e = Ne.items,
                  Te = Ne.index
                M && (Te = Te + 1), $e.splice.apply($e, Ro([Te, 0], z, !1))
              }
            }
          } else $(z, !0)
        } else {
          if (L) throw new Error(pu("vxe.error.noTree", ["insert"]))
          let Ve = -1
          if (
            (u.isNumber(x) ? x < A.length && (Ve = x) : (Ve = e.findRowIndexOf(A, x)),
            M && (Ve = Math.min(A.length, Ve + 1)),
            Ve === -1)
          )
            throw new Error(rr("vxe.error.unableInsert"))
          A.splice.apply(A, Ro([Ve, 0], z, !1)),
            X.splice.apply(X, Ro([e.findRowIndexOf(X, x), 0], z, !1)),
            Y.forEach(function (ce) {
              const ye = ce.row,
                Ae = ce.rowspan
              ye > Ve ? (ce.row = ye + z.length) : ye + Ae > Ve && (ce.rowspan = Ae + z.length)
            })
        }
        const W = K.insertMaps
        return (
          z.forEach(function (ce) {
            const ye = Ye(e, ce)
            W[ye] = ce
          }),
          e.cacheRowMap(),
          e.updateScrollYStatus(),
          e.handleTableData(L && Z),
          (L && Z) || e.updateAfterDataIndex(),
          e.updateFooter(),
          e.checkSelectionStatus(),
          r.scrollYLoad && e.updateScrollYSpace(),
          de()
            .then(function () {
              return e.updateCellAreas(), e.recalculate()
            })
            .then(function () {
              return { row: z.length ? z[z.length - 1] : null, rows: z }
            })
        )
      }
      return (
        (h = {
          insert: function (w) {
            return B(w, null)
          },
          insertAt: function (w, x) {
            return B(w, x)
          },
          insertNextAt: function (w, x) {
            return B(w, x, !0)
          },
          remove: function (w) {
            let x = t.treeConfig,
              M = r.mergeList,
              L = r.editStore,
              Y = r.selectCheckboxMaps,
              K = a.tableFullTreeData,
              O = a.afterFullData,
              A = a.tableFullData,
              X = l.value,
              J = f.value,
              Ce = J.transform,
              ue = J.mapChildrenField,
              Z = J.children || J.childrenField,
              se = L.actived,
              Oe = L.removeMaps,
              Ie = L.insertMaps,
              z = X.checkField,
              ge = []
            if (
              (w ? u.isArray(w) || (w = [w]) : (w = A),
              w.forEach(function (he) {
                if (!e.isInsertByRow(he)) {
                  const ve = Ye(e, he)
                  Oe[ve] = he
                }
              }),
              !z)
            ) {
              const oe = vn({}, Y)
              w.forEach(function (he) {
                const ve = Ye(e, he)
                oe[ve] && delete oe[ve]
              }),
                (r.selectCheckboxMaps = oe)
            }
            return (
              A === w
                ? ((w = ge = A.slice(0)), (a.tableFullData = []), (a.afterFullData = []), e.clearMergeCells())
                : x && Ce
                  ? w.forEach(function (he) {
                      const ve = Ye(e, he),
                        De = u.findTree(
                          K,
                          function (Ve) {
                            return ve === Ye(e, Ve)
                          },
                          { children: ue }
                        )
                      if (De) {
                        const Ne = De.items.splice(De.index, 1)
                        ge.push(Ne[0])
                      }
                      const $e = u.findTree(
                        K,
                        function (Ve) {
                          return ve === Ye(e, Ve)
                        },
                        { children: Z }
                      )
                      $e && $e.items.splice($e.index, 1)
                      const Te = e.findRowIndexOf(O, he)
                      Te > -1 && O.splice(Te, 1)
                    })
                  : w.forEach(function (he) {
                      const ve = e.findRowIndexOf(A, he)
                      if (ve > -1) {
                        const De = A.splice(ve, 1)
                        ge.push(De[0])
                      }
                      const Ne = e.findRowIndexOf(O, he)
                      Ne > -1 &&
                        (M.forEach(function ($e) {
                          const Te = $e.row,
                            Ve = $e.rowspan
                          Te > Ne ? ($e.row = Te - 1) : Te + Ve > Ne && ($e.rowspan = Ve - 1)
                        }),
                        O.splice(Ne, 1))
                    }),
              se.row && e.findRowIndexOf(w, se.row) > -1 && h.clearEdit(),
              w.forEach(function (he) {
                const ve = Ye(e, he)
                Ie[ve] && delete Ie[ve]
              }),
              e.updateFooter(),
              e.cacheRowMap(),
              e.handleTableData(x && Ce),
              (x && Ce) || e.updateAfterDataIndex(),
              e.checkSelectionStatus(),
              r.scrollYLoad && e.updateScrollYSpace(),
              de()
                .then(function () {
                  return e.updateCellAreas(), e.recalculate()
                })
                .then(function () {
                  return { row: ge.length ? ge[ge.length - 1] : null, rows: ge }
                })
            )
          },
          removeCheckboxRow: function () {
            return h.remove(e.getCheckboxRecords()).then(function (w) {
              return e.clearCheckboxRow(), w
            })
          },
          removeRadioRow: function () {
            const w = e.getRadioRecord()
            return h.remove(w || []).then(function (x) {
              return e.clearRadioRow(), x
            })
          },
          removeCurrentRow: function () {
            const w = e.getCurrentRecord()
            return h.remove(w || []).then(function (x) {
              return e.clearCurrentRow(), x
            })
          },
          getRecordset: function () {
            return {
              insertRecords: h.getInsertRecords(),
              removeRecords: h.getRemoveRecords(),
              updateRecords: h.getUpdateRecords(),
              pendingRecords: e.getPendingRecords()
            }
          },
          getInsertRecords: function () {
            const w = r.editStore,
              x = a.fullAllDataRowIdData,
              M = w.insertMaps,
              L = []
            return (
              u.each(M, function (Y, K) {
                x[K] && L.push(Y)
              }),
              L
            )
          },
          getRemoveRecords: function () {
            const w = r.editStore,
              x = w.removeMaps,
              M = []
            return (
              u.each(x, function (L) {
                M.push(L)
              }),
              M
            )
          },
          getUpdateRecords: function () {
            const w = t.keepSource,
              x = t.treeConfig,
              M = a.tableFullData,
              L = f.value
            return w
              ? (q(),
                x
                  ? u.filterTree(
                      M,
                      function (Y) {
                        return e.isUpdateByRow(Y)
                      },
                      L
                    )
                  : M.filter(function (Y) {
                      return e.isUpdateByRow(Y)
                    }))
              : []
          },
          getActiveRecord: function () {
            return this.getEditRecord()
          },
          getEditRecord: function () {
            const w = r.editStore,
              x = a.afterFullData,
              M = n.value,
              L = w.actived,
              Y = L.args,
              K = L.row
            return Y && e.findRowIndexOf(x, K) > -1 && M.querySelectorAll(".vxe-body--column.col--active").length
              ? Object.assign({}, Y)
              : null
          },
          getSelectedCell: function () {
            const w = r.editStore,
              x = w.selected,
              M = x.args,
              L = x.column
            return M && L ? Object.assign({}, M) : null
          },
          clearActived: function (w) {
            return this.clearEdit(w)
          },
          clearEdit: function (w) {
            const x = r.editStore,
              M = x.actived,
              L = M.row,
              Y = M.column
            return (
              (L || Y) &&
                (q(),
                (M.args = null),
                (M.row = null),
                (M.column = null),
                e.updateFooter(),
                e.dispatchEvent(
                  "edit-closed",
                  {
                    row: L,
                    rowIndex: e.getRowIndex(L),
                    $rowIndex: e.getVMRowIndex(L),
                    column: Y,
                    columnIndex: e.getColumnIndex(Y),
                    $columnIndex: e.getVMColumnIndex(Y)
                  },
                  w || null
                )),
              C.cellVaildMode === "obsolete" && e.clearValidate ? e.clearValidate() : de()
            )
          },
          clearSelected: function () {
            const w = r.editStore,
              x = w.selected
            return (x.row = null), (x.column = null), F(), de()
          },
          isActiveByRow: function (w) {
            return this.isEditByRow(w)
          },
          isEditByRow: function (w) {
            const x = r.editStore
            return x.actived.row === w
          },
          setActiveRow: function (w) {
            return h.setEditRow(w)
          },
          setEditRow: function (w, x) {
            let M = a.visibleColumn,
              L = u.find(M, function (Y) {
                return pt(Y.editRender)
              })
            return x && (L = u.isString(x) ? e.getColumnByField(x) : x), e.setEditCell(w, L)
          },
          setActiveCell: function (w, x) {
            return h.setEditCell(w, x)
          },
          setEditCell: function (w, x) {
            const M = t.editConfig,
              L = u.isString(x) ? e.getColumnByField(x) : x
            return w && L && pt(M) && pt(L.editRender)
              ? e.scrollToRow(w, L).then(function () {
                  const Y = e.getCell(w, L)
                  return (
                    Y &&
                      (D.handleActived({
                        row: w,
                        rowIndex: e.getRowIndex(w),
                        column: L,
                        columnIndex: e.getColumnIndex(L),
                        cell: Y,
                        $table: e
                      }),
                      (a._lastCallTime = Date.now())),
                    de()
                  )
                })
              : de()
          },
          setSelectCell: function (w, x) {
            const M = r.tableData,
              L = d.value,
              Y = u.isString(x) ? e.getColumnByField(x) : x
            if (w && Y && L.trigger !== "manual") {
              const K = e.findRowIndexOf(M, w)
              if (K > -1 && Y) {
                const O = e.getCell(w, Y),
                  A = { row: w, rowIndex: K, column: Y, columnIndex: e.getColumnIndex(Y), cell: O }
                e.handleSelected(A, {})
              }
            }
            return de()
          }
        }),
        (D = {
          handleActived: function (w, x) {
            const M = t.editConfig,
              L = t.mouseConfig,
              Y = r.editStore,
              K = r.tableColumn,
              O = d.value,
              A = O.mode,
              X = Y.actived,
              J = w.row,
              Ce = w.column,
              ue = Ce.editRender,
              Z = w.cell || e.getCell(J, Ce),
              se = O.beforeEditMethod || O.activeMethod
            if (((w.cell = Z), pt(M) && pt(ue) && !e.hasPendingByRow(J) && Z)) {
              if (X.row !== J || (A === "cell" && X.column !== Ce)) {
                let Oe = "edit-disabled"
                ;(!se || se(vn(vn({}, w), { $table: e, $grid: e.xegrid }))) &&
                  (L && (h.clearSelected(), e.clearCellAreas && (e.clearCellAreas(), e.clearCopyCellArea())),
                  e.closeTooltip(),
                  X.column && h.clearEdit(x),
                  (Oe = "edit-activated"),
                  (Ce.renderHeight = Z.offsetHeight),
                  (X.args = w),
                  (X.row = J),
                  (X.column = Ce),
                  A === "row"
                    ? K.forEach(function (ge) {
                        return I(J, ge)
                      })
                    : I(J, Ce),
                  de(function () {
                    D.handleFocus(w, x)
                  })),
                  e.dispatchEvent(
                    Oe,
                    {
                      row: J,
                      rowIndex: e.getRowIndex(J),
                      $rowIndex: e.getVMRowIndex(J),
                      column: Ce,
                      columnIndex: e.getColumnIndex(Ce),
                      $columnIndex: e.getVMColumnIndex(Ce)
                    },
                    x
                  ),
                  Oe === "edit-activated" &&
                    e.dispatchEvent(
                      "edit-actived",
                      {
                        row: J,
                        rowIndex: e.getRowIndex(J),
                        $rowIndex: e.getVMRowIndex(J),
                        column: Ce,
                        columnIndex: e.getColumnIndex(Ce),
                        $columnIndex: e.getVMColumnIndex(Ce)
                      },
                      x
                    )
              } else {
                const Ie = X.column
                if (
                  (L && (h.clearSelected(), e.clearCellAreas && (e.clearCellAreas(), e.clearCopyCellArea())), Ie !== Ce)
                ) {
                  const z = Ie.model
                  z.update && Oa(J, Ie, z.value), e.clearValidate && e.clearValidate(J, Ce)
                }
                ;(Ce.renderHeight = Z.offsetHeight),
                  (X.args = w),
                  (X.column = Ce),
                  setTimeout(function () {
                    D.handleFocus(w, x)
                  })
              }
              e.focus()
            }
            return de()
          },
          handleFocus: function (w) {
            const x = w.row,
              M = w.column,
              L = w.cell,
              Y = M.editRender
            if (pt(Y)) {
              let K = hn.get(Y.name),
                O = Y.autofocus,
                A = Y.autoselect,
                X = void 0
              if (
                (!O && K && (O = K.autofocus),
                !A && K && (A = K.autoselect),
                u.isFunction(O) ? (X = O.call(this, w)) : O && ((X = L.querySelector(O)), X && X.focus()),
                X)
              ) {
                if (A) X.select()
                else if (Br.msie) {
                  const J = X.createTextRange()
                  J.collapse(!1), J.select()
                }
              } else e.scrollToRow(x, M)
            }
          },
          handleSelected: function (w, x) {
            const M = t.mouseConfig,
              L = r.editStore,
              Y = o.value,
              K = d.value,
              O = L.actived,
              A = L.selected,
              X = w.row,
              J = w.column,
              Ce = M && Y.selected,
              ue = function () {
                return (
                  Ce &&
                    (A.row !== X || A.column !== J) &&
                    (O.row !== X || (K.mode === "cell" && O.column !== J)) &&
                    (h.clearEdit(x),
                    h.clearSelected(),
                    e.clearCellAreas && (e.clearCellAreas(), e.clearCopyCellArea()),
                    (A.args = w),
                    (A.row = X),
                    (A.column = J),
                    Ce && D.addCellSelectedClass(),
                    e.focus(),
                    x && e.dispatchEvent("cell-selected", w, x)),
                  de()
                )
              }
            return ue()
          },
          addCellSelectedClass: function () {
            const w = r.editStore,
              x = w.selected,
              M = x.row,
              L = x.column
            if ((F(), M && L)) {
              const Y = e.getCell(M, L)
              Y && pn(Y, "col--selected")
            }
          }
        }),
        vn(vn({}, h), D)
      )
    },
    setupGrid: function (e) {
      return e.extendTableMethods(VF)
    }
  },
  Ru = {
    install: function () {
      et.hooks.add("$tableEdit", BF)
    }
  },
  HF = Ru
function nr(e) {
  const t = gt("xesize", null),
    r = Pe(function () {
      return e.size || (t ? t.value : null)
    })
  return Yt("xesize", r), r
}
const ta = Dt({
    name: "VxeButton",
    props: {
      type: String,
      className: [String, Function],
      popupClassName: [String, Function],
      size: {
        type: String,
        default: function () {
          return C.button.size || C.size
        }
      },
      name: [String, Number],
      content: String,
      placement: String,
      status: String,
      icon: String,
      round: Boolean,
      circle: Boolean,
      disabled: Boolean,
      loading: Boolean,
      destroyOnClose: Boolean,
      transfer: {
        type: Boolean,
        default: function () {
          return C.button.transfer
        }
      }
    },
    emits: ["click", "dropdown-click"],
    setup: function (e, t) {
      let r = t.slots,
        a = t.emit,
        n = u.uniqueId(),
        s = nr(e),
        o = Ht({ inited: !1, showPanel: !1, animatVisible: !1, panelIndex: 0, panelStyle: {}, panelPlacement: "" }),
        d = { showTime: null },
        l = Xe(),
        f = Xe(),
        h = Xe(),
        D = { refElem: l },
        I = {
          xID: n,
          props: e,
          context: t,
          reactData: o,
          internalData: d,
          getRefMaps: function () {
            return D
          }
        },
        N = {},
        F = Pe(function () {
          const J = e.type
          return J ? ["submit", "reset", "button"].indexOf(J) > -1 : !1
        }),
        q = Pe(function () {
          const J = e.type
          return J && J === "text" ? J : "button"
        }),
        $ = function () {
          o.panelIndex < Na() && (o.panelIndex = da())
        },
        B = function () {
          return de().then(function () {
            const J = e.transfer,
              Ce = e.placement,
              ue = o.panelIndex,
              Z = f.value,
              se = h.value
            if (se && Z) {
              let Oe = Z.offsetHeight,
                Ie = Z.offsetWidth,
                z = se.offsetHeight,
                ge = se.offsetWidth,
                oe = 5,
                he = { zIndex: ue },
                ve = Ta(Z),
                De = ve.top,
                Ne = ve.left,
                $e = ve.boundingTop,
                Te = ve.visibleHeight,
                Ve = ve.visibleWidth,
                W = "bottom"
              if (J) {
                let ce = Ne + Ie - ge,
                  ye = De + Oe
                Ce === "top"
                  ? ((W = "top"), (ye = De - z))
                  : Ce ||
                    ($e + Oe + z + oe > Te && ((W = "top"), (ye = De - z)),
                    ye < oe && ((W = "bottom"), (ye = De + Oe))),
                  ce + ge + oe > Ve && (ce -= ce + ge + oe - Ve),
                  ce < oe && (ce = oe),
                  Object.assign(he, {
                    left: "".concat(ce, "px"),
                    right: "auto",
                    top: "".concat(ye, "px"),
                    minWidth: "".concat(Ie, "px")
                  })
              } else
                Ce === "top"
                  ? ((W = "top"), (he.bottom = "".concat(Oe, "px")))
                  : Ce || ($e + Oe + z > Te && $e - Oe - z > oe && ((W = "top"), (he.bottom = "".concat(Oe, "px"))))
              return (o.panelStyle = he), (o.panelPlacement = W), de()
            }
          })
        },
        w = function (J) {
          N.dispatchEvent("click", { $event: J }, J)
        },
        x = function (J) {
          const Ce = J.button === 0
          Ce && J.stopPropagation()
        },
        M = function (J) {
          const Ce = J.currentTarget,
            ue = h.value,
            Z = yt(J, Ce, "vxe-button"),
            se = Z.flag,
            Oe = Z.targetElem
          se &&
            (ue && (ue.dataset.active = "N"),
            (o.showPanel = !1),
            setTimeout(function () {
              ;(!ue || ue.dataset.active !== "Y") && (o.animatVisible = !1)
            }, 350),
            N.dispatchEvent("dropdown-click", { name: Oe.getAttribute("name"), $event: J }, J))
        },
        L = function () {
          const J = h.value
          J &&
            ((J.dataset.active = "Y"),
            (o.animatVisible = !0),
            setTimeout(function () {
              J.dataset.active === "Y" &&
                ((o.showPanel = !0),
                $(),
                B(),
                setTimeout(function () {
                  o.showPanel && B()
                }, 50))
            }, 20))
        },
        Y = function () {
          const J = h.value
          J &&
            ((J.dataset.active = "Y"),
            o.inited || (o.inited = !0),
            (d.showTime = setTimeout(function () {
              J.dataset.active === "Y" ? L() : (o.animatVisible = !1)
            }, 250)))
        },
        K = function () {
          const J = h.value
          clearTimeout(d.showTime),
            J
              ? ((J.dataset.active = "N"),
                setTimeout(function () {
                  J.dataset.active !== "Y" &&
                    ((o.showPanel = !1),
                    setTimeout(function () {
                      J.dataset.active !== "Y" && (o.animatVisible = !1)
                    }, 350))
                }, 100))
              : ((o.animatVisible = !1), (o.showPanel = !1))
        },
        O = function () {
          K()
        },
        A = function () {
          const J = e.content,
            Ce = e.icon,
            ue = e.loading,
            Z = []
          return (
            ue
              ? Z.push(p("i", { class: ["vxe-button--loading-icon", C.icon.BUTTON_LOADING] }))
              : r.icon
                ? Z.push(p("span", { class: "vxe-button--custom-icon" }, r.icon({})))
                : Ce && Z.push(p("i", { class: ["vxe-button--icon", Ce] })),
            r.default
              ? Z.push(p("span", { class: "vxe-button--content" }, r.default({})))
              : J && Z.push(p("span", { class: "vxe-button--content" }, zt(J))),
            Z
          )
        }
      ;(N = {
        dispatchEvent: function (J, Ce, ue) {
          a(J, Object.assign({ $button: I, $event: ue }, Ce))
        },
        focus: function () {
          const J = f.value
          return J.focus(), de()
        },
        blur: function () {
          const J = f.value
          return J.blur(), de()
        }
      }),
        Object.assign(I, N),
        pr(function () {
          vt.on(I, "mousewheel", function (J) {
            const Ce = h.value
            o.showPanel && !yt(J, Ce).flag && K()
          })
        }),
        or(function () {
          vt.off(I, "mousewheel")
        })
      const X = function () {
        let J,
          Ce,
          ue,
          Z,
          se = e.className,
          Oe = e.popupClassName,
          Ie = e.transfer,
          z = e.type,
          ge = e.round,
          oe = e.circle,
          he = e.destroyOnClose,
          ve = e.status,
          De = e.name,
          Ne = e.disabled,
          $e = e.loading,
          Te = o.inited,
          Ve = o.showPanel,
          W = F.value,
          ce = q.value,
          ye = s.value
        return r.dropdowns
          ? p(
              "div",
              {
                ref: l,
                class: [
                  "vxe-button--dropdown",
                  se ? (u.isFunction(se) ? se({ $button: I }) : se) : "",
                  ((J = {}), (J["size--".concat(ye)] = ye), (J["is--active"] = Ve), J)
                ]
              },
              [
                p(
                  "button",
                  {
                    ref: f,
                    class: [
                      "vxe-button",
                      "type--".concat(ce),
                      ((Ce = {}),
                      (Ce["size--".concat(ye)] = ye),
                      (Ce["theme--".concat(ve)] = ve),
                      (Ce["is--round"] = ge),
                      (Ce["is--circle"] = oe),
                      (Ce["is--disabled"] = Ne || $e),
                      (Ce["is--loading"] = $e),
                      Ce)
                    ],
                    name: De,
                    type: W ? z : "button",
                    disabled: Ne || $e,
                    onMouseenter: Y,
                    onMouseleave: O,
                    onClick: w
                  },
                  A().concat([p("i", { class: "vxe-button--dropdown-arrow ".concat(C.icon.BUTTON_DROPDOWN) })])
                ),
                p(Un, { to: "body", disabled: Ie ? !Te : !0 }, [
                  p(
                    "div",
                    {
                      ref: h,
                      class: [
                        "vxe-button--dropdown-panel",
                        Oe ? (u.isFunction(Oe) ? Oe({ $button: I }) : Oe) : "",
                        ((ue = {}),
                        (ue["size--".concat(ye)] = ye),
                        (ue["animat--leave"] = o.animatVisible),
                        (ue["animat--enter"] = Ve),
                        ue)
                      ],
                      placement: o.panelPlacement,
                      style: o.panelStyle
                    },
                    Te
                      ? [
                          p(
                            "div",
                            {
                              class: "vxe-button--dropdown-wrapper",
                              onMousedown: x,
                              onClick: M,
                              onMouseenter: L,
                              onMouseleave: O
                            },
                            he && !Ve ? [] : r.dropdowns({})
                          )
                        ]
                      : []
                  )
                ])
              ]
            )
          : p(
              "button",
              {
                ref: f,
                class: [
                  "vxe-button",
                  "type--".concat(ce),
                  ((Z = {}),
                  (Z["size--".concat(ye)] = ye),
                  (Z["theme--".concat(ve)] = ve),
                  (Z["is--round"] = ge),
                  (Z["is--circle"] = oe),
                  (Z["is--disabled"] = Ne || $e),
                  (Z["is--loading"] = $e),
                  Z)
                ],
                name: De,
                type: W ? z : "button",
                disabled: Ne || $e,
                onClick: w
              },
              A()
            )
      }
      return (I.renderVN = X), I
    },
    render: function () {
      return this.renderVN()
    }
  }),
  ko = Dt({
    name: "VxeLoading",
    props: { modelValue: Boolean, icon: String, text: String },
    setup: function (e, t) {
      const r = t.slots,
        a = Pe(function () {
          return e.icon || C.icon.LOADING
        }),
        n = Pe(function () {
          const s = C.loadingText
          return e.text || (s === null ? s : C.i18n("vxe.loading.text"))
        })
      return function () {
        const s = a.value,
          o = n.value
        return p(
          "div",
          { class: ["vxe-loading", { "is--visible": e.modelValue }] },
          r.default
            ? [p("div", { class: "vxe-loading--warpper" }, r.default({}))]
            : [
                p("div", { class: "vxe-loading--chunk" }, [
                  s ? p("i", { class: s }) : p("div", { class: "vxe-loading--spinner" }),
                  o ? p("div", { class: "vxe-loading--text" }, "".concat(o)) : null
                ])
              ]
        )
      }
    }
  })
let Kl = Object.assign(ko, {
    install: function (e) {
      e.component(ko.name, ko)
    }
  }),
  Yo = function () {
    return (
      (Yo =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      Yo.apply(this, arguments)
    )
  },
  gn = [],
  gi = []
const yn = Dt({
  name: "VxeModal",
  props: {
    modelValue: Boolean,
    id: String,
    type: { type: String, default: "modal" },
    loading: { type: Boolean, default: null },
    status: String,
    iconStatus: String,
    className: String,
    top: {
      type: [Number, String],
      default: function () {
        return C.modal.top
      }
    },
    position: [String, Object],
    title: String,
    duration: {
      type: [Number, String],
      default: function () {
        return C.modal.duration
      }
    },
    message: [Number, String],
    content: [Number, String],
    cancelButtonText: {
      type: String,
      default: function () {
        return C.modal.cancelButtonText
      }
    },
    confirmButtonText: {
      type: String,
      default: function () {
        return C.modal.confirmButtonText
      }
    },
    lockView: {
      type: Boolean,
      default: function () {
        return C.modal.lockView
      }
    },
    lockScroll: Boolean,
    mask: {
      type: Boolean,
      default: function () {
        return C.modal.mask
      }
    },
    maskClosable: {
      type: Boolean,
      default: function () {
        return C.modal.maskClosable
      }
    },
    escClosable: {
      type: Boolean,
      default: function () {
        return C.modal.escClosable
      }
    },
    resize: Boolean,
    showHeader: {
      type: Boolean,
      default: function () {
        return C.modal.showHeader
      }
    },
    showFooter: {
      type: Boolean,
      default: function () {
        return C.modal.showFooter
      }
    },
    showZoom: Boolean,
    showClose: {
      type: Boolean,
      default: function () {
        return C.modal.showClose
      }
    },
    dblclickZoom: {
      type: Boolean,
      default: function () {
        return C.modal.dblclickZoom
      }
    },
    width: [Number, String],
    height: [Number, String],
    minWidth: {
      type: [Number, String],
      default: function () {
        return C.modal.minWidth
      }
    },
    minHeight: {
      type: [Number, String],
      default: function () {
        return C.modal.minHeight
      }
    },
    zIndex: Number,
    marginSize: {
      type: [Number, String],
      default: function () {
        return C.modal.marginSize
      }
    },
    fullscreen: Boolean,
    draggable: {
      type: Boolean,
      default: function () {
        return C.modal.draggable
      }
    },
    remember: {
      type: Boolean,
      default: function () {
        return C.modal.remember
      }
    },
    destroyOnClose: {
      type: Boolean,
      default: function () {
        return C.modal.destroyOnClose
      }
    },
    showTitleOverflow: {
      type: Boolean,
      default: function () {
        return C.modal.showTitleOverflow
      }
    },
    transfer: {
      type: Boolean,
      default: function () {
        return C.modal.transfer
      }
    },
    storage: {
      type: Boolean,
      default: function () {
        return C.modal.storage
      }
    },
    storageKey: {
      type: String,
      default: function () {
        return C.modal.storageKey
      }
    },
    animat: {
      type: Boolean,
      default: function () {
        return C.modal.animat
      }
    },
    size: {
      type: String,
      default: function () {
        return C.modal.size || C.size
      }
    },
    beforeHideMethod: {
      type: Function,
      default: function () {
        return C.modal.beforeHideMethod
      }
    },
    slots: Object
  },
  emits: ["update:modelValue", "show", "hide", "before-hide", "close", "confirm", "cancel", "zoom"],
  setup: function (e, t) {
    let r = t.slots,
      a = t.emit,
      n = u.uniqueId(),
      s = nr(e),
      o = Ht({
        inited: !1,
        visible: !1,
        contentVisible: !1,
        modalTop: 0,
        modalZindex: 0,
        zoomLocat: null,
        firstOpen: !0
      }),
      d = Xe(),
      l = Xe(),
      f = Xe(),
      h = Xe(),
      D = { refElem: d },
      I = {
        xID: n,
        props: e,
        context: t,
        reactData: o,
        getRefMaps: function () {
          return D
        }
      },
      N = {},
      F = Pe(function () {
        return e.type === "message"
      }),
      q = function () {
        const ae = l.value
        return ae
      },
      $ = function () {
        const ae = e.width,
          fe = e.height,
          U = q()
        return (
          (U.style.width = "".concat(ae ? (isNaN(ae) ? ae : "".concat(ae, "px")) : "")),
          (U.style.height = "".concat(fe ? (isNaN(fe) ? fe : "".concat(fe, "px")) : "")),
          de()
        )
      },
      B = function () {
        const ae = e.zIndex,
          fe = o.modalZindex
        ae ? (o.modalZindex = ae) : fe < Na() && (o.modalZindex = da())
      },
      w = function () {
        return de().then(function () {
          let ae = e.position,
            fe = u.toNumber(e.marginSize),
            U = q(),
            G = document.documentElement.clientWidth || document.body.clientWidth,
            ne = document.documentElement.clientHeight || document.body.clientHeight,
            y = ae === "center",
            k = u.isString(ae) ? { top: ae, left: ae } : Object.assign({}, ae),
            ee = k.top,
            le = k.left,
            me = y || ee === "center",
            be = y || le === "center",
            Le = "",
            j = ""
          le && !be
            ? (j = isNaN(le) ? le : "".concat(le, "px"))
            : (j = "".concat(Math.max(fe, G / 2 - U.offsetWidth / 2), "px")),
            ee && !me
              ? (Le = isNaN(ee) ? ee : "".concat(ee, "px"))
              : (Le = "".concat(Math.max(fe, ne / 2 - U.offsetHeight / 2), "px")),
            (U.style.top = Le),
            (U.style.left = j)
        })
      },
      x = function () {
        de(function () {
          let ae = 0
          gi.forEach(function (fe) {
            const U = fe.getBox()
            ;(ae += u.toNumber(fe.props.top)), (fe.reactData.modalTop = ae), (ae += U.clientHeight)
          })
        })
      },
      M = function () {
        gi.indexOf(I) > -1 &&
          u.remove(gi, function (ae) {
            return ae === I
          }),
          x()
      },
      L = function (ae) {
        const fe = e.remember,
          U = e.beforeHideMethod,
          G = o.visible,
          ne = F.value,
          y = { type: ae }
        return (
          G &&
            Promise.resolve(U ? U(y) : null)
              .then(function (k) {
                u.isError(k) ||
                  (ne && M(),
                  (o.contentVisible = !1),
                  fe || (o.zoomLocat = null),
                  u.remove(gn, function (ee) {
                    return ee === I
                  }),
                  N.dispatchEvent("before-hide", y),
                  setTimeout(function () {
                    ;(o.visible = !1), a("update:modelValue", !1), N.dispatchEvent("hide", y)
                  }, 200))
              })
              .catch(function (k) {
                return k
              }),
          de()
        )
      },
      Y = function (ae) {
        const fe = "close"
        N.dispatchEvent(fe, { type: fe }, ae), L(fe)
      },
      K = function (ae) {
        const fe = "confirm"
        N.dispatchEvent(fe, { type: fe }, ae), L(fe)
      },
      O = function (ae) {
        const fe = "cancel"
        N.dispatchEvent(fe, { type: fe }, ae), L(fe)
      },
      A = function (ae) {
        const fe = C.version,
          U = u.toStringJSON(localStorage.getItem(ae) || "")
        return U && U._v === fe ? U : { _v: fe }
      },
      X = function () {
        const ae = e.id,
          fe = e.remember,
          U = e.storage,
          G = e.storageKey
        return !!(ae && fe && U && A(G)[ae])
      },
      J = function () {
        const ae = e.id,
          fe = e.remember,
          U = e.storage,
          G = e.storageKey
        if (ae && fe && U) {
          const ne = A(G)[ae]
          if (ne) {
            const y = q(),
              k = ne.split(","),
              ee = k[0],
              le = k[1],
              me = k[2],
              be = k[3],
              Le = k[4],
              j = k[5],
              H = k[6],
              ie = k[7]
            ee && (y.style.left = "".concat(ee, "px")),
              le && (y.style.top = "".concat(le, "px")),
              me && (y.style.width = "".concat(me, "px")),
              be && (y.style.height = "".concat(be, "px")),
              Le && j && (o.zoomLocat = { left: Le, top: j, width: H, height: ie })
          }
        }
      },
      Ce = function () {
        gi.indexOf(I) === -1 && gi.push(I), x()
      },
      ue = function () {
        const ae = e.id,
          fe = e.remember,
          U = e.storage,
          G = e.storageKey,
          ne = o.zoomLocat
        if (ae && fe && U) {
          const y = q(),
            k = A(G)
          ;(k[ae] = [y.style.left, y.style.top, y.style.width, y.style.height]
            .concat(ne ? [ne.left, ne.top, ne.width, ne.height] : [])
            .map(function (ee) {
              return ee ? u.toNumber(ee) : ""
            })
            .join(",")),
            localStorage.setItem(G, u.toJSONString(k))
        }
      },
      Z = function () {
        return de().then(function () {
          if (!o.zoomLocat) {
            const ae = Math.max(0, u.toNumber(e.marginSize)),
              fe = q(),
              U = Ka(),
              G = U.visibleHeight,
              ne = U.visibleWidth
            ;(o.zoomLocat = {
              top: fe.offsetTop,
              left: fe.offsetLeft,
              width: fe.offsetWidth + (fe.style.width ? 0 : 1),
              height: fe.offsetHeight + (fe.style.height ? 0 : 1)
            }),
              Object.assign(fe.style, {
                top: "".concat(ae, "px"),
                left: "".concat(ae, "px"),
                width: "".concat(ne - ae * 2, "px"),
                height: "".concat(G - ae * 2, "px")
              }),
              ue()
          }
        })
      },
      se = function () {
        const ae = e.duration,
          fe = e.remember,
          U = e.showFooter,
          G = o.inited,
          ne = o.visible,
          y = F.value
        return (
          G || (o.inited = !0),
          ne ||
            (fe || $(),
            (o.visible = !0),
            (o.contentVisible = !1),
            B(),
            gn.push(I),
            setTimeout(function () {
              ;(o.contentVisible = !0),
                de(function () {
                  if (U) {
                    const k = f.value,
                      ee = h.value,
                      le = k || ee
                    le && le.focus()
                  }
                  const me = "",
                    be = { type: me }
                  a("update:modelValue", !0), N.dispatchEvent("show", be)
                })
            }, 10),
            y
              ? (Ce(),
                ae !== -1 &&
                  setTimeout(function () {
                    return L("close")
                  }, u.toNumber(ae)))
              : de(function () {
                  const k = e.fullscreen,
                    ee = o.firstOpen
                  ;(!fe || ee) &&
                    w().then(function () {
                      setTimeout(function () {
                        return w()
                      }, 20)
                    }),
                    ee
                      ? ((o.firstOpen = !1),
                        X()
                          ? J()
                          : k &&
                            de(function () {
                              return Z()
                            }))
                      : k &&
                        de(function () {
                          return Z()
                        })
                })),
          de()
        )
      },
      Oe = function (ae) {
        const fe = d.value
        if (e.maskClosable && ae.target === fe) {
          const U = "mask"
          L(U)
        }
      },
      Ie = function (ae) {
        const fe = ht(ae, ct.ESCAPE)
        if (fe) {
          const U = u.max(gn, function (G) {
            return G.reactData.modalZindex
          })
          U &&
            setTimeout(function () {
              U === I && U.props.escClosable && L("exit")
            }, 10)
        }
      },
      z = function () {
        return !!o.zoomLocat
      },
      ge = function () {
        return de().then(function () {
          const ae = o.zoomLocat
          if (ae) {
            const fe = q()
            ;(o.zoomLocat = null),
              Object.assign(fe.style, {
                top: "".concat(ae.top, "px"),
                left: "".concat(ae.left, "px"),
                width: "".concat(ae.width, "px"),
                height: "".concat(ae.height, "px")
              }),
              ue()
          }
        })
      },
      oe = function () {
        return o.zoomLocat
          ? ge().then(function () {
              return z()
            })
          : Z().then(function () {
              return z()
            })
      },
      he = function (ae) {
        const fe = o.zoomLocat,
          U = { type: fe ? "revert" : "max" }
        return oe().then(function () {
          N.dispatchEvent("zoom", U, ae)
        })
      },
      ve = function () {
        const ae = F.value
        if (!ae) {
          const fe = q()
          if (fe) return { top: fe.offsetTop, left: fe.offsetLeft }
        }
        return null
      },
      De = function (ae, fe) {
        const U = F.value
        if (!U) {
          const G = q()
          u.isNumber(ae) && (G.style.top = "".concat(ae, "px")), u.isNumber(fe) && (G.style.left = "".concat(fe, "px"))
        }
        return de()
      },
      Ne = function () {
        const ae = o.modalZindex
        gn.some(function (fe) {
          return fe.reactData.visible && fe.reactData.modalZindex > ae
        }) && B()
      },
      $e = function (ae) {
        const fe = e.remember,
          U = e.storage,
          G = o.zoomLocat,
          ne = u.toNumber(e.marginSize),
          y = q()
        if (!G && ae.button === 0 && !yt(ae, y, "trigger--btn").flag) {
          ae.preventDefault()
          const k = document.onmousemove,
            ee = document.onmouseup,
            le = ae.clientX - y.offsetLeft,
            me = ae.clientY - y.offsetTop,
            be = Ka(),
            Le = be.visibleHeight,
            j = be.visibleWidth
          ;(document.onmousemove = function (H) {
            H.preventDefault()
            let ie = y.offsetWidth,
              we = y.offsetHeight,
              E = ne,
              _ = j - ie - ne - 1,
              te = ne,
              Me = Le - we - ne - 1,
              ke = H.clientX - le,
              Be = H.clientY - me
            ke > _ && (ke = _),
              ke < E && (ke = E),
              Be > Me && (Be = Me),
              Be < te && (Be = te),
              (y.style.left = "".concat(ke, "px")),
              (y.style.top = "".concat(Be, "px")),
              (y.className = y.className.replace(/\s?is--drag/, "") + " is--drag")
          }),
            (document.onmouseup = function () {
              ;(document.onmousemove = k),
                (document.onmouseup = ee),
                fe &&
                  U &&
                  de(function () {
                    ue()
                  }),
                setTimeout(function () {
                  y.className = y.className.replace(/\s?is--drag/, "")
                }, 50)
            })
        }
      },
      Te = function (ae) {
        ae.preventDefault()
        const fe = e.remember,
          U = e.storage,
          G = Ka(),
          ne = G.visibleHeight,
          y = G.visibleWidth,
          k = u.toNumber(e.marginSize),
          ee = ae.target,
          le = ee.getAttribute("type"),
          me = u.toNumber(e.minWidth),
          be = u.toNumber(e.minHeight),
          Le = y,
          j = ne,
          H = q(),
          ie = document.onmousemove,
          we = document.onmouseup,
          E = H.clientWidth,
          _ = H.clientHeight,
          te = ae.clientX,
          Me = ae.clientY,
          ke = H.offsetTop,
          Be = H.offsetLeft,
          Ke = { type: "resize" }
        ;(document.onmousemove = function (Ue) {
          Ue.preventDefault()
          let _e, Je, Qe, R
          switch (le) {
            case "wl":
              ;(_e = te - Ue.clientX),
                (Qe = _e + E),
                Be - _e > k &&
                  Qe > me &&
                  ((H.style.width = "".concat(Qe < Le ? Qe : Le, "px")), (H.style.left = "".concat(Be - _e, "px")))
              break
            case "swst":
              ;(_e = te - Ue.clientX),
                (Je = Me - Ue.clientY),
                (Qe = _e + E),
                (R = Je + _),
                Be - _e > k &&
                  Qe > me &&
                  ((H.style.width = "".concat(Qe < Le ? Qe : Le, "px")), (H.style.left = "".concat(Be - _e, "px"))),
                ke - Je > k &&
                  R > be &&
                  ((H.style.height = "".concat(R < j ? R : j, "px")), (H.style.top = "".concat(ke - Je, "px")))
              break
            case "swlb":
              ;(_e = te - Ue.clientX),
                (Je = Ue.clientY - Me),
                (Qe = _e + E),
                (R = Je + _),
                Be - _e > k &&
                  Qe > me &&
                  ((H.style.width = "".concat(Qe < Le ? Qe : Le, "px")), (H.style.left = "".concat(Be - _e, "px"))),
                ke + R + k < ne && R > be && (H.style.height = "".concat(R < j ? R : j, "px"))
              break
            case "st":
              ;(Je = Me - Ue.clientY),
                (R = _ + Je),
                ke - Je > k &&
                  R > be &&
                  ((H.style.height = "".concat(R < j ? R : j, "px")), (H.style.top = "".concat(ke - Je, "px")))
              break
            case "wr":
              ;(_e = Ue.clientX - te),
                (Qe = _e + E),
                Be + Qe + k < y && Qe > me && (H.style.width = "".concat(Qe < Le ? Qe : Le, "px"))
              break
            case "sest":
              ;(_e = Ue.clientX - te),
                (Je = Me - Ue.clientY),
                (Qe = _e + E),
                (R = Je + _),
                Be + Qe + k < y && Qe > me && (H.style.width = "".concat(Qe < Le ? Qe : Le, "px")),
                ke - Je > k &&
                  R > be &&
                  ((H.style.height = "".concat(R < j ? R : j, "px")), (H.style.top = "".concat(ke - Je, "px")))
              break
            case "selb":
              ;(_e = Ue.clientX - te),
                (Je = Ue.clientY - Me),
                (Qe = _e + E),
                (R = Je + _),
                Be + Qe + k < y && Qe > me && (H.style.width = "".concat(Qe < Le ? Qe : Le, "px")),
                ke + R + k < ne && R > be && (H.style.height = "".concat(R < j ? R : j, "px"))
              break
            case "sb":
              ;(Je = Ue.clientY - Me),
                (R = Je + _),
                ke + R + k < ne && R > be && (H.style.height = "".concat(R < j ? R : j, "px"))
              break
          }
          ;(H.className = H.className.replace(/\s?is--drag/, "") + " is--drag"),
            fe && U && ue(),
            N.dispatchEvent("zoom", Ke, Ue)
        }),
          (document.onmouseup = function () {
            ;(o.zoomLocat = null),
              (document.onmousemove = ie),
              (document.onmouseup = we),
              setTimeout(function () {
                H.className = H.className.replace(/\s?is--drag/, "")
              }, 50)
          })
      },
      Ve = function () {
        const ae = e.slots,
          fe = ae === void 0 ? {} : ae,
          U = e.showClose,
          G = e.showZoom,
          ne = e.title,
          y = o.zoomLocat,
          k = r.title || fe.title,
          ee = r.corner || fe.corner,
          le = [
            p(
              "div",
              { class: "vxe-modal--header-title" },
              k ? Vt(k({ $modal: I })) : ne ? zt(ne) : C.i18n("vxe.alert.title")
            )
          ],
          me = []
        return (
          ee && me.push(p("span", { class: "vxe-modal--corner-warpper" }, Vt(ee({ $modal: I })))),
          G &&
            me.push(
              p("i", {
                class: ["vxe-modal--zoom-btn", "trigger--btn", y ? C.icon.MODAL_ZOOM_OUT : C.icon.MODAL_ZOOM_IN],
                title: C.i18n("vxe.modal.zoom".concat(y ? "Out" : "In")),
                onClick: he
              })
            ),
          U &&
            me.push(
              p("i", {
                class: ["vxe-modal--close-btn", "trigger--btn", C.icon.MODAL_CLOSE],
                title: C.i18n("vxe.modal.close"),
                onClick: Y
              })
            ),
          le.push(p("div", { class: "vxe-modal--header-right" }, me)),
          le
        )
      },
      W = function () {
        const ae = e.slots,
          fe = ae === void 0 ? {} : ae,
          U = e.showZoom,
          G = e.draggable,
          ne = F.value,
          y = r.header || fe.header,
          k = []
        if (e.showHeader) {
          const ee = {}
          G && (ee.onMousedown = $e),
            U && e.dblclickZoom && e.type === "modal" && (ee.onDblclick = he),
            k.push(
              p(
                "div",
                Yo(
                  { class: ["vxe-modal--header", { "is--draggable": G, "is--ellipsis": !ne && e.showTitleOverflow }] },
                  ee
                ),
                y ? (!o.inited || (e.destroyOnClose && !o.visible) ? [] : Vt(y({ $modal: I }))) : Ve()
              )
            )
        }
        return k
      },
      ce = function () {
        const ae = e.slots,
          fe = ae === void 0 ? {} : ae,
          U = e.status,
          G = e.message,
          ne = e.content || G,
          y = F.value,
          k = r.default || fe.default,
          ee = []
        return (
          U &&
            ee.push(
              p("div", { class: "vxe-modal--status-wrapper" }, [
                p("i", {
                  class: ["vxe-modal--status-icon", e.iconStatus || C.icon["MODAL_".concat(U).toLocaleUpperCase()]]
                })
              ])
            ),
          ee.push(
            p(
              "div",
              { class: "vxe-modal--content" },
              k ? (!o.inited || (e.destroyOnClose && !o.visible) ? [] : Vt(k({ $modal: I }))) : zt(ne)
            )
          ),
          y || ee.push(p(Kl, { class: "vxe-modal--loading", modelValue: e.loading })),
          [p("div", { class: "vxe-modal--body" }, ee)]
        )
      },
      ye = function () {
        const ae = e.type,
          fe = []
        return (
          ae === "confirm" &&
            fe.push(p(ta, { ref: h, content: e.cancelButtonText || C.i18n("vxe.button.cancel"), onClick: O })),
          fe.push(
            p(ta, {
              ref: f,
              status: "primary",
              content: e.confirmButtonText || C.i18n("vxe.button.confirm"),
              onClick: K
            })
          ),
          fe
        )
      },
      Ae = function () {
        const ae = e.slots,
          fe = ae === void 0 ? {} : ae,
          U = F.value,
          G = r.footer || fe.footer,
          ne = []
        return (
          e.showFooter &&
            ne.push(
              p(
                "div",
                { class: "vxe-modal--footer" },
                G ? (!o.inited || (e.destroyOnClose && !o.visible) ? [] : Vt(G({ $modal: I }))) : ye()
              )
            ),
          !U &&
            e.resize &&
            ne.push(
              p(
                "span",
                { class: "vxe-modal--resize" },
                ["wl", "wr", "swst", "sest", "st", "swlb", "selb", "sb"].map(function (y) {
                  return p("span", { class: "".concat(y, "-resize"), type: y, onMousedown: Te })
                })
              )
            ),
          ne
        )
      }
    ;(N = {
      dispatchEvent: function (ae, fe, U) {
        a(ae, Object.assign({ $modal: I, $event: U }, fe))
      },
      open: se,
      close: function () {
        return L("close")
      },
      getBox: q,
      getPosition: ve,
      setPosition: De,
      isMaximized: z,
      zoom: oe,
      maximize: Z,
      revert: ge
    }),
      Object.assign(I, N),
      ut(function () {
        return e.width
      }, $),
      ut(function () {
        return e.height
      }, $),
      ut(
        function () {
          return e.modelValue
        },
        function (ae) {
          ae ? se() : L("model")
        }
      ),
      pr(function () {
        de(function () {
          e.storage && !e.id && rr("vxe.error.reqProp", ["modal.id"]), e.modelValue && se(), $()
        }),
          e.escClosable && vt.on(I, "keydown", Ie)
      }),
      or(function () {
        vt.off(I, "keydown"), M()
      })
    const Re = function () {
      let ae,
        fe = e.className,
        U = e.type,
        G = e.animat,
        ne = e.loading,
        y = e.status,
        k = e.lockScroll,
        ee = e.lockView,
        le = e.mask,
        me = e.resize,
        be = o.inited,
        Le = o.zoomLocat,
        j = o.modalTop,
        H = o.contentVisible,
        ie = o.visible,
        we = s.value
      return p(Un, { to: "body", disabled: e.transfer ? !be : !0 }, [
        p(
          "div",
          {
            ref: d,
            class: [
              "vxe-modal--wrapper",
              "type--".concat(U),
              fe || "",
              ((ae = {}),
              (ae["size--".concat(we)] = we),
              (ae["status--".concat(y)] = y),
              (ae["is--animat"] = G),
              (ae["lock--scroll"] = k),
              (ae["lock--view"] = ee),
              (ae["is--resize"] = me),
              (ae["is--mask"] = le),
              (ae["is--maximize"] = Le),
              (ae["is--visible"] = H),
              (ae["is--active"] = ie),
              (ae["is--loading"] = ne),
              ae)
            ],
            style: { zIndex: o.modalZindex, top: j ? "".concat(j, "px") : null },
            onClick: Oe
          },
          [p("div", { ref: l, class: "vxe-modal--box", onMousedown: Ne }, W().concat(ce(), Ae()))]
        )
      ])
    }
    return (I.renderVN = Re), I
  },
  render: function () {
    return this.renderVN()
  }
})
function zF(e) {
  if (e) {
    let t = new Date(),
      r = 0,
      a = 0,
      n = 0
    if (u.isDate(e)) (r = e.getHours()), (a = e.getMinutes()), (n = e.getSeconds())
    else {
      e = u.toValueString(e)
      const s = e.match(/^(\d{1,2})(:(\d{1,2}))?(:(\d{1,2}))?/)
      s && ((r = u.toNumber(s[1])), (a = u.toNumber(s[3])), (n = u.toNumber(s[5])))
    }
    return t.setHours(r), t.setMinutes(a), t.setSeconds(n), t
  }
  return new Date("")
}
function vf(e) {
  const t = e.getMonth()
  return t < 3 ? 1 : t < 6 ? 2 : t < 9 ? 3 : 4
}
function Nn(e) {
  return u.isString(e) ? e.replace(/,/g, "") : e
}
function df(e, t) {
  return /^-/.test("" + e) ? u.toFixed(u.ceil(e, t), t) : u.toFixed(u.floor(e, t), t)
}
const pf = function (e, t, r) {
    if (r || arguments.length === 2)
      for (var a = 0, n = t.length, s; a < n; a++)
        (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), (s[a] = t[a]))
    return e.concat(s || Array.prototype.slice.call(t))
  },
  Ea = 12,
  WF = 20,
  _F = 8
const Da = Dt({
    name: "VxeInput",
    props: {
      modelValue: [String, Number, Date],
      immediate: { type: Boolean, default: !0 },
      name: String,
      type: { type: String, default: "text" },
      clearable: {
        type: Boolean,
        default: function () {
          return C.input.clearable
        }
      },
      readonly: Boolean,
      disabled: Boolean,
      placeholder: {
        type: String,
        default: function () {
          return u.eqNull(C.input.placeholder) ? C.i18n("vxe.base.pleaseInput") : C.input.placeholder
        }
      },
      maxlength: [String, Number],
      autocomplete: { type: String, default: "off" },
      align: String,
      form: String,
      className: String,
      size: {
        type: String,
        default: function () {
          return C.input.size || C.size
        }
      },
      multiple: Boolean,
      showWordCount: Boolean,
      countMethod: Function,
      min: { type: [String, Number], default: null },
      max: { type: [String, Number], default: null },
      step: [String, Number],
      exponential: {
        type: Boolean,
        default: function () {
          return C.input.exponential
        }
      },
      controls: {
        type: Boolean,
        default: function () {
          return C.input.controls
        }
      },
      digits: {
        type: [String, Number],
        default: function () {
          return C.input.digits
        }
      },
      startDate: {
        type: [String, Number, Date],
        default: function () {
          return C.input.startDate
        }
      },
      endDate: {
        type: [String, Number, Date],
        default: function () {
          return C.input.endDate
        }
      },
      minDate: [String, Number, Date],
      maxDate: [String, Number, Date],
      startWeek: Number,
      startDay: {
        type: [String, Number],
        default: function () {
          return C.input.startDay
        }
      },
      labelFormat: {
        type: String,
        default: function () {
          return C.input.labelFormat
        }
      },
      valueFormat: {
        type: String,
        default: function () {
          return C.input.valueFormat
        }
      },
      editable: { type: Boolean, default: !0 },
      festivalMethod: {
        type: Function,
        default: function () {
          return C.input.festivalMethod
        }
      },
      disabledMethod: {
        type: Function,
        default: function () {
          return C.input.disabledMethod
        }
      },
      selectDay: {
        type: [String, Number],
        default: function () {
          return C.input.selectDay
        }
      },
      prefixIcon: String,
      suffixIcon: String,
      placement: String,
      transfer: {
        type: Boolean,
        default: function () {
          return C.input.transfer
        }
      }
    },
    emits: [
      "update:modelValue",
      "input",
      "change",
      "keydown",
      "keyup",
      "wheel",
      "click",
      "focus",
      "blur",
      "clear",
      "search-click",
      "toggle-visible",
      "prev-number",
      "next-number",
      "prefix-click",
      "suffix-click",
      "date-prev",
      "date-today",
      "date-next"
    ],
    setup: function (e, t) {
      var r = t.slots,
        a = t.emit,
        n = gt("$xeform", null),
        s = gt("$xeformiteminfo", null),
        o = u.uniqueId(),
        d = nr(e),
        l = Ht({
          inited: !1,
          panelIndex: 0,
          showPwd: !1,
          visiblePanel: !1,
          animatVisible: !1,
          panelStyle: null,
          panelPlacement: "",
          isActivated: !1,
          inputValue: e.modelValue,
          datetimePanelValue: null,
          datePanelValue: null,
          datePanelLabel: "",
          datePanelType: "day",
          selectMonth: null,
          currentDate: null
        }),
        f = Xe(),
        h = Xe(),
        D = Xe(),
        I = Xe(),
        N = { refElem: f, refInput: h },
        F = {
          xID: o,
          props: e,
          context: t,
          reactData: l,
          getRefMaps: function () {
            return N
          }
        },
        q = {},
        $ = function (b, re) {
          const xe = e.type
          return xe === "time" ? zF(b) : u.toStringDate(b, re)
        },
        B = Pe(function () {
          const b = e.type
          return b === "time" || b === "datetime"
        }),
        w = Pe(function () {
          return ["number", "integer", "float"].indexOf(e.type) > -1
        }),
        x = Pe(function () {
          return u.getSize(l.inputValue)
        }),
        M = Pe(function () {
          const b = x.value
          return e.maxlength && b > u.toNumber(e.maxlength)
        }),
        L = Pe(function () {
          const b = B.value
          return b || ["date", "week", "month", "quarter", "year"].indexOf(e.type) > -1
        }),
        Y = Pe(function () {
          return e.type === "password"
        }),
        K = Pe(function () {
          return e.type === "search"
        }),
        O = Pe(function () {
          return u.toInteger(e.digits) || 1
        }),
        A = Pe(function () {
          const b = e.type,
            re = O.value,
            xe = e.step
          return b === "integer"
            ? u.toInteger(xe) || 1
            : b === "float"
              ? u.toNumber(xe) || 1 / Math.pow(10, re)
              : u.toNumber(xe) || 1
        }),
        X = Pe(function () {
          const b = e.type,
            re = w.value,
            xe = L.value,
            He = Y.value
          return e.clearable && (He || re || xe || b === "text" || b === "search")
        }),
        J = Pe(function () {
          return e.startDate ? u.toStringDate(e.startDate) : null
        }),
        Ce = Pe(function () {
          return e.endDate ? u.toStringDate(e.endDate) : null
        }),
        ue = Pe(function () {
          return ["date", "week", "month", "quarter", "year"].includes(e.type)
        }),
        Z = Pe(function () {
          const b = e.modelValue,
            re = e.multiple,
            xe = L.value,
            He = Ie.value
          return re && b && xe
            ? u
                .toValueString(b)
                .split(",")
                .map(function (i) {
                  const c = $(i, He)
                  return u.isValidDate(c) ? c : null
                })
            : []
        }),
        se = Pe(function () {
          const b = Z.value,
            re = Ie.value
          return b.map(function (xe) {
            return u.toDateString(xe, re)
          })
        }),
        Oe = Pe(function () {
          const b = Z.value,
            re = De.value
          return b
            .map(function (xe) {
              return u.toDateString(xe, re)
            })
            .join(", ")
        }),
        Ie = Pe(function () {
          const b = e.type
          return b === "time" ? "HH:mm:ss" : e.valueFormat || (b === "datetime" ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd")
        }),
        z = Pe(function () {
          let b = e.modelValue,
            re = L.value,
            xe = Ie.value,
            He = null
          if (b && re) {
            const i = $(b, xe)
            u.isValidDate(i) && (He = i)
          }
          return He
        }),
        ge = Pe(function () {
          const b = J.value,
            re = l.selectMonth
          return re && b ? re <= b : !1
        }),
        oe = Pe(function () {
          const b = Ce.value,
            re = l.selectMonth
          return re && b ? re >= b : !1
        }),
        he = Pe(function () {
          const b = l.datetimePanelValue
          return b ? u.toDateString(b, "HH:mm:ss") : ""
        }),
        ve = Pe(function () {
          const b = z.value,
            re = B.value
          return b && re ? (b.getHours() * 3600 + b.getMinutes() * 60 + b.getSeconds()) * 1e3 : 0
        }),
        De = Pe(function () {
          const b = L.value
          return b ? e.labelFormat || C.i18n("vxe.input.date.labelFormat.".concat(e.type)) : null
        }),
        Ne = Pe(function () {
          const b = l.selectMonth,
            re = l.currentDate,
            xe = []
          if (b && re)
            for (
              let He = re.getFullYear(), i = b.getFullYear(), c = new Date(i - (i % Ea), 0, 1), v = -4;
              v < Ea + 4;
              v++
            ) {
              const g = u.getWhatYear(c, v, "first"),
                m = g.getFullYear()
              xe.push({ date: g, isCurrent: !0, isPrev: v < 0, isNow: He === m, isNext: v >= Ea, year: m })
            }
          return xe
        }),
        $e = Pe(function () {
          const b = L.value
          if (b) {
            let re = l.datePanelType,
              xe = l.selectMonth,
              He = Ne.value,
              i = "",
              c = void 0
            return (
              xe && ((i = xe.getFullYear()), (c = xe.getMonth() + 1)),
              re === "quarter"
                ? C.i18n("vxe.input.date.quarterLabel", [i])
                : re === "month"
                  ? C.i18n("vxe.input.date.monthLabel", [i])
                  : re === "year"
                    ? He.length
                      ? "".concat(He[0].year, " - ").concat(He[He.length - 1].year)
                      : ""
                    : C.i18n("vxe.input.date.dayLabel", [i, c ? C.i18n("vxe.input.date.m".concat(c)) : "-"])
            )
          }
          return ""
        }),
        Te = Pe(function () {
          const b = e.startDay,
            re = e.startWeek
          return u.toNumber(u.isNumber(b) || u.isString(b) ? b : re)
        }),
        Ve = Pe(function () {
          const b = [],
            re = L.value
          if (re) {
            let xe = Te.value
            b.push(xe)
            for (let He = 0; He < 6; He++) xe >= 6 ? (xe = 0) : xe++, b.push(xe)
          }
          return b
        }),
        W = Pe(function () {
          const b = L.value
          if (b) {
            const re = Ve.value
            return re.map(function (xe) {
              return { value: xe, label: C.i18n("vxe.input.date.weeks.w".concat(xe)) }
            })
          }
          return []
        }),
        ce = Pe(function () {
          const b = L.value
          if (b) {
            const re = W.value
            return [{ label: C.i18n("vxe.input.date.weeks.w") }].concat(re)
          }
          return []
        }),
        ye = Pe(function () {
          const b = Ne.value
          return u.chunk(b, 4)
        }),
        Ae = Pe(function () {
          const b = l.selectMonth,
            re = l.currentDate,
            xe = []
          if (b && re)
            for (
              let He = re.getFullYear(), i = vf(re), c = u.getWhatYear(b, 0, "first"), v = c.getFullYear(), g = -2;
              g < _F - 2;
              g++
            ) {
              const m = u.getWhatQuarter(c, g),
                S = m.getFullYear(),
                T = vf(m),
                P = S < v
              xe.push({
                date: m,
                isPrev: P,
                isCurrent: S === v,
                isNow: S === He && T === i,
                isNext: !P && S > v,
                quarter: T
              })
            }
          return xe
        }),
        Re = Pe(function () {
          const b = Ae.value
          return u.chunk(b, 2)
        }),
        ae = Pe(function () {
          const b = l.selectMonth,
            re = l.currentDate,
            xe = []
          if (b && re)
            for (
              let He = re.getFullYear(), i = re.getMonth(), c = u.getWhatYear(b, 0, "first").getFullYear(), v = -4;
              v < WF - 4;
              v++
            ) {
              const g = u.getWhatYear(b, 0, v),
                m = g.getFullYear(),
                S = g.getMonth(),
                T = m < c
              xe.push({
                date: g,
                isPrev: T,
                isCurrent: m === c,
                isNow: m === He && S === i,
                isNext: !T && m > c,
                month: S
              })
            }
          return xe
        }),
        fe = Pe(function () {
          const b = ae.value
          return u.chunk(b, 4)
        }),
        U = Pe(function () {
          const b = l.selectMonth,
            re = l.currentDate,
            xe = []
          if (b && re)
            for (
              let He = ve.value,
                i = Ve.value,
                c = re.getFullYear(),
                v = re.getMonth(),
                g = re.getDate(),
                m = b.getFullYear(),
                S = b.getMonth(),
                T = b.getDay(),
                P = -i.indexOf(T),
                V = new Date(u.getWhatDay(b, P).getTime() + He),
                Q = 0;
              Q < 42;
              Q++
            ) {
              const pe = u.getWhatDay(V, Q),
                Ee = pe.getFullYear(),
                ze = pe.getMonth(),
                We = pe.getDate(),
                Fe = pe < b
              xe.push({
                date: pe,
                isPrev: Fe,
                isCurrent: Ee === m && ze === S,
                isNow: Ee === c && ze === v && We === g,
                isNext: !Fe && S !== ze,
                label: We
              })
            }
          return xe
        }),
        G = Pe(function () {
          const b = U.value
          return u.chunk(b, 7)
        }),
        ne = Pe(function () {
          const b = G.value,
            re = Te.value
          return b.map(function (xe) {
            const He = xe[0],
              i = {
                date: He.date,
                isWeekNumber: !0,
                isPrev: !1,
                isCurrent: !1,
                isNow: !1,
                isNext: !1,
                label: u.getYearWeek(He.date, re)
              }
            return [i].concat(xe)
          })
        }),
        y = Pe(function () {
          const b = [],
            re = B.value
          if (re) for (let xe = 0; xe < 24; xe++) b.push({ value: xe, label: ("" + xe).padStart(2, "0") })
          return b
        }),
        k = Pe(function () {
          const b = [],
            re = B.value
          if (re) for (let xe = 0; xe < 60; xe++) b.push({ value: xe, label: ("" + xe).padStart(2, "0") })
          return b
        }),
        ee = Pe(function () {
          const b = k.value
          return b
        }),
        le = Pe(function () {
          const b = e.type,
            re = e.readonly,
            xe = e.editable,
            He = e.multiple
          return re || He || !xe || b === "week" || b === "quarter"
        }),
        me = Pe(function () {
          const b = e.type,
            re = l.showPwd,
            xe = w.value,
            He = L.value,
            i = Y.value
          return He || xe || (i && re) || b === "number" ? "text" : b
        }),
        be = Pe(function () {
          const b = e.placeholder
          return b ? zt(b) : ""
        }),
        Le = Pe(function () {
          const b = e.maxlength,
            re = w.value
          return re && !u.toNumber(b) ? 16 : b
        }),
        j = Pe(function () {
          const b = e.type,
            re = e.immediate
          return re || !(b === "text" || b === "number" || b === "integer" || b === "float")
        }),
        H = Pe(function () {
          const b = e.type,
            re = l.inputValue,
            xe = w.value
          return xe ? (b === "integer" ? u.toInteger(Nn(re)) : u.toNumber(Nn(re))) : 0
        }),
        ie = Pe(function () {
          const b = e.min,
            re = l.inputValue,
            xe = w.value,
            He = H.value
          return (re || re === 0) && xe && b !== null ? He <= u.toNumber(b) : !1
        }),
        we = Pe(function () {
          const b = e.max,
            re = l.inputValue,
            xe = w.value,
            He = H.value
          return (re || re === 0) && xe && b !== null ? He >= u.toNumber(b) : !1
        }),
        E = function (b) {
          const re = e.type,
            xe = e.exponential,
            He = Le.value,
            i = O.value,
            c = re === "float" ? df(b, i) : u.toValueString(b)
          return xe && (b === c || u.toValueString(b).toLowerCase() === u.toNumber(c).toExponential())
            ? b
            : c.slice(0, He)
        },
        _ = function (b) {
          const re = l.inputValue
          q.dispatchEvent(b.type, { value: re }, b)
        },
        te = function (b, re) {
          ;(l.inputValue = b),
            a("update:modelValue", b),
            q.dispatchEvent("input", { value: b }, re),
            u.toValueString(e.modelValue) !== b &&
              (q.dispatchEvent("change", { value: b }, re), n && s && n.triggerItemEvent(re, s.itemConfig.field, b))
        },
        Me = function (b, re) {
          const xe = L.value,
            He = j.value
          ;(l.inputValue = b), xe || (He ? te(b, re) : q.dispatchEvent("input", { value: b }, re))
        },
        ke = function (b) {
          const re = b.target,
            xe = re.value
          Me(xe, b)
        },
        Be = function (b) {
          const re = j.value
          re || _(b)
        },
        Ke = function (b) {
          l.isActivated = !0
          const re = L.value
          re && yr(b), _(b)
        },
        Ue = function (b) {
          const re = e.disabled
          if (!re) {
            const xe = l.inputValue
            q.dispatchEvent("prefix-click", { value: xe }, b)
          }
        },
        _e,
        Je = function () {
          return new Promise(function (b) {
            ;(l.visiblePanel = !1),
              (_e = window.setTimeout(function () {
                ;(l.animatVisible = !1), b()
              }, 350))
          })
        },
        Qe = function (b, re) {
          const xe = e.type,
            He = w.value,
            i = L.value
          i && Je(),
            (He || ["text", "search", "password"].indexOf(xe) > -1) && focus(),
            q.dispatchEvent("clear", { value: re }, b)
        },
        R = function (b) {
          const re = e.disabled
          if (!re)
            if (Ma(b.currentTarget, "is--clear")) te("", b), Qe(b, "")
            else {
              const xe = l.inputValue
              q.dispatchEvent("suffix-click", { value: xe }, b)
            }
        },
        ot = function (b) {
          let re = e.type,
            xe = e.valueFormat,
            He = De.value,
            i = Te.value,
            c = null,
            v = ""
          if ((b && (c = $(b, xe)), u.isValidDate(c))) {
            if (((v = u.toDateString(c, He, { firstDay: i })), He && re === "week")) {
              const g = u.getWhatWeek(c, 0, i, i)
              if (g.getFullYear() < c.getFullYear()) {
                const m = He.indexOf("yyyy")
                if (m > -1) {
                  const S = Number(v.substring(m, m + 4))
                  S && !isNaN(S) && (v = v.replace("".concat(S), "".concat(S - 1)))
                }
              }
            }
          } else c = null
          ;(l.datePanelValue = c), (l.datePanelLabel = v)
        },
        wt = function () {
          const b = L.value,
            re = l.inputValue
          b && (ot(re), (l.inputValue = e.multiple ? Oe.value : l.datePanelLabel))
        },
        mt = function () {
          const b = e.type,
            re = l.inputValue,
            xe = L.value,
            He = O.value
          if (xe) wt()
          else if (b === "float" && re) {
            const i = df(re, He)
            re !== i && te(i, { type: "init" })
          }
        },
        ft = function (b) {
          return e.max === null || u.toNumber(b) <= u.toNumber(e.max)
        },
        lt = function (b) {
          return e.min === null || u.toNumber(b) >= u.toNumber(e.min)
        },
        xt = function () {
          l.inputValue = e.multiple ? Oe.value : l.datePanelLabel
        },
        tt = function (b) {
          const re = u.getWhatMonth(b, 0, "first")
          u.isEqual(re, l.selectMonth) || (l.selectMonth = re)
        },
        Mt = function (b) {
          const re = e.modelValue,
            xe = e.multiple,
            He = l.datetimePanelValue,
            i = B.value,
            c = Ie.value,
            v = Te.value
          if (e.type === "week") {
            const g = u.toNumber(e.selectDay)
            b = u.getWhatWeek(b, 0, g, v)
          } else i && (b.setHours(He.getHours()), b.setMinutes(He.getMinutes()), b.setSeconds(He.getSeconds()))
          const m = u.toDateString(b, c, { firstDay: v })
          if ((tt(b), xe)) {
            const S = se.value
            if (i) {
              const T = pf([], Z.value, !0),
                P = [],
                V = u.findIndexOf(T, function (Q) {
                  return u.isDateSame(b, Q, "yyyyMMdd")
                })
              V === -1 ? T.push(b) : T.splice(V, 1),
                T.forEach(function (Q) {
                  Q &&
                    (Q.setHours(He.getHours()), Q.setMinutes(He.getMinutes()), Q.setSeconds(He.getSeconds()), P.push(Q))
                }),
                te(
                  P.map(function (Q) {
                    return u.toDateString(Q, c)
                  }).join(","),
                  { type: "update" }
                )
            } else
              S.some(function (Q) {
                return u.isEqual(Q, m)
              })
                ? te(
                    S.filter(function (Q) {
                      return !u.isEqual(Q, m)
                    }).join(","),
                    { type: "update" }
                  )
                : te(S.concat([m]).join(","), { type: "update" })
          } else u.isEqual(re, m) || te(m, { type: "update" })
        },
        St = function () {
          const b = e.type,
            re = e.min,
            xe = e.max,
            He = e.exponential,
            i = l.inputValue,
            c = l.datetimePanelValue,
            v = w.value,
            g = L.value,
            m = De.value,
            S = le.value
          if (!S) {
            if (v) {
              if (i) {
                let T = b === "integer" ? u.toInteger(Nn(i)) : u.toNumber(Nn(i))
                if ((lt(T) ? ft(T) || (T = xe) : (T = re), He)) {
                  const P = u.toValueString(i).toLowerCase()
                  P === u.toNumber(T).toExponential() && (T = P)
                }
                te(E(T), { type: "check" })
              }
            } else if (g)
              if (i) {
                let V = $(i, m)
                if (u.isValidDate(V))
                  if (b === "time") (V = u.toDateString(V, m)), i !== V && te(V, { type: "check" }), (l.inputValue = V)
                  else {
                    let Q = !1,
                      pe = Te.value
                    if (b === "datetime") {
                      const Ee = z.value
                      ;(i !== u.toDateString(Ee, m) || i !== u.toDateString(V, m)) &&
                        ((Q = !0), c.setHours(V.getHours()), c.setMinutes(V.getMinutes()), c.setSeconds(V.getSeconds()))
                    } else Q = !0
                    ;(l.inputValue = u.toDateString(V, m, { firstDay: pe })), Q && Mt(V)
                  }
                else xt()
              } else te("", { type: "check" })
          }
        },
        Gt = function (b) {
          const re = l.inputValue,
            xe = j.value
          xe || te(re, b), St(), l.visiblePanel || (l.isActivated = !1), q.dispatchEvent("blur", { value: re }, b)
        },
        Kt = function (b) {
          const re = e.readonly,
            xe = e.disabled,
            He = l.showPwd
          !xe && !re && (l.showPwd = !He), q.dispatchEvent("toggle-visible", { visible: l.showPwd }, b)
        },
        Wt = function (b) {
          q.dispatchEvent("search-click", {}, b)
        },
        Qt = function (b, re) {
          let xe = e.min,
            He = e.max,
            i = e.type,
            c = l.inputValue,
            v = A.value,
            g = i === "integer" ? u.toInteger(Nn(c)) : u.toNumber(Nn(c)),
            m = b ? u.add(g, v) : u.subtract(g, v),
            S
          lt(m) ? (ft(m) ? (S = m) : (S = He)) : (S = xe), Me(E(S), re)
        },
        er,
        hr = function (b) {
          const re = e.readonly,
            xe = e.disabled,
            He = ie.value
          clearTimeout(er), !xe && !re && !He && Qt(!1, b), q.dispatchEvent("next-number", {}, b)
        },
        ur = function (b) {
          er = window.setTimeout(function () {
            hr(b), ur(b)
          }, 60)
        },
        ir = function (b) {
          const re = e.readonly,
            xe = e.disabled,
            He = we.value
          clearTimeout(er), !xe && !re && !He && Qt(!0, b), q.dispatchEvent("prev-number", {}, b)
        },
        gr = function (b) {
          const re = ht(b, ct.ARROW_UP),
            xe = ht(b, ct.ARROW_DOWN)
          ;(re || xe) && (b.preventDefault(), re ? ir(b) : hr(b))
        },
        cr = function (b) {
          const re = e.exponential,
            xe = e.controls,
            He = w.value
          if (He) {
            const i = b.ctrlKey,
              c = b.shiftKey,
              v = b.altKey,
              g = b.keyCode
            !i &&
              !c &&
              !v &&
              (ht(b, ct.SPACEBAR) || ((!re || g !== 69) && g >= 65 && g <= 90) || (g >= 186 && g <= 188) || g >= 191) &&
              b.preventDefault(),
              xe && gr(b)
          }
          _(b)
        },
        Xr = function (b) {
          _(b)
        },
        Lt = function () {
          clearTimeout(er)
        },
        Ut = function (b) {
          er = window.setTimeout(function () {
            ir(b), Ut(b)
          }, 60)
        },
        mr = function (b) {
          if ((Lt(), b.button === 0)) {
            const re = Ma(b.currentTarget, "is--prev")
            re ? ir(b) : hr(b),
              (er = window.setTimeout(function () {
                re ? Ut(b) : ur(b)
              }, 500))
          }
        },
        Kr = function (b) {
          const re = w.value
          if (re && e.controls && l.isActivated) {
            const xe = b.deltaY
            xe > 0 ? hr(b) : xe < 0 && ir(b), b.preventDefault()
          }
          _(b)
        },
        Mr = function (b, re) {
          l.selectMonth = u.getWhatMonth(b, re, "first")
        },
        br = function () {
          const b = u.getWhatDay(Date.now(), 0, "first")
          ;(l.currentDate = b), Mr(b, 0)
        },
        Rr = function () {
          let b = l.datePanelType
          b === "month" || b === "quarter" ? (b = "year") : (b = "month"), (l.datePanelType = b)
        },
        kr = function (b) {
          const re = e.type,
            xe = l.datePanelType,
            He = l.selectMonth,
            i = ge.value
          i ||
            (re === "year"
              ? (l.selectMonth = u.getWhatYear(He, -Ea, "first"))
              : re === "month" || re === "quarter"
                ? xe === "year"
                  ? (l.selectMonth = u.getWhatYear(He, -Ea, "first"))
                  : (l.selectMonth = u.getWhatYear(He, -1, "first"))
                : xe === "year"
                  ? (l.selectMonth = u.getWhatYear(He, -Ea, "first"))
                  : xe === "month"
                    ? (l.selectMonth = u.getWhatYear(He, -1, "first"))
                    : (l.selectMonth = u.getWhatMonth(He, -1, "first")),
            q.dispatchEvent("date-prev", { type: re }, b))
        },
        xr = function (b) {
          br(), e.multiple || (Mt(l.currentDate), Je()), q.dispatchEvent("date-today", { type: e.type }, b)
        },
        qt = function (b) {
          const re = e.type,
            xe = l.datePanelType,
            He = l.selectMonth,
            i = oe.value
          i ||
            (re === "year"
              ? (l.selectMonth = u.getWhatYear(He, Ea, "first"))
              : re === "month" || re === "quarter"
                ? xe === "year"
                  ? (l.selectMonth = u.getWhatYear(He, Ea, "first"))
                  : (l.selectMonth = u.getWhatYear(He, 1, "first"))
                : xe === "year"
                  ? (l.selectMonth = u.getWhatYear(He, Ea, "first"))
                  : xe === "month"
                    ? (l.selectMonth = u.getWhatYear(He, 1, "first"))
                    : (l.selectMonth = u.getWhatMonth(He, 1, "first")),
            q.dispatchEvent("date-next", { type: re }, b))
        },
        _t = function (b) {
          const re = e.disabledMethod,
            xe = l.datePanelType
          return re && re({ type: xe, viewType: xe, date: b.date, $input: F })
        },
        Wr = function (b) {
          const re = e.type,
            xe = e.multiple,
            He = l.datePanelType
          re === "month"
            ? He === "year"
              ? ((l.datePanelType = "month"), tt(b))
              : (Mt(b), xe || Je())
            : re === "year"
              ? (Mt(b), xe || Je())
              : re === "quarter"
                ? He === "year"
                  ? ((l.datePanelType = "quarter"), tt(b))
                  : (Mt(b), xe || Je())
                : He === "month"
                  ? ((l.datePanelType = re === "week" ? re : "day"), tt(b))
                  : He === "year"
                    ? ((l.datePanelType = "month"), tt(b))
                    : (Mt(b), re === "datetime" || xe || Je())
        },
        Cr = function (b) {
          _t(b) || Wr(b.date)
        },
        ia = function (b) {
          if (!_t({ date: b })) {
            const re = U.value
            re.some(function (xe) {
              return u.isDateSame(xe.date, b, "yyyyMMdd")
            }) || tt(b),
              ot(b)
          }
        },
        Zr = function (b) {
          if (!_t({ date: b })) {
            const re = Ne.value
            re.some(function (xe) {
              return u.isDateSame(xe.date, b, "yyyy")
            }) || tt(b),
              ot(b)
          }
        },
        Jr = function (b) {
          if (!_t({ date: b })) {
            const re = Ae.value
            re.some(function (xe) {
              return u.isDateSame(xe.date, b, "yyyyq")
            }) || tt(b),
              ot(b)
          }
        },
        sr = function (b) {
          if (!_t({ date: b })) {
            const re = ae.value
            re.some(function (xe) {
              return u.isDateSame(xe.date, b, "yyyyMM")
            }) || tt(b),
              ot(b)
          }
        },
        Nt = function (b) {
          if (!_t(b)) {
            const re = l.datePanelType
            re === "month" ? sr(b.date) : re === "quarter" ? Jr(b.date) : re === "year" ? Zr(b.date) : ia(b.date)
          }
        },
        Pt = function (b) {
          if (b) {
            const re = b.offsetHeight,
              xe = b.parentNode
            xe.scrollTop = b.offsetTop - re * 4
          }
        },
        tr = function (b) {
          ;(l.datetimePanelValue = new Date(l.datetimePanelValue.getTime())), Pt(b.currentTarget)
        },
        Fr = function (b, re) {
          l.datetimePanelValue.setHours(re.value), tr(b)
        },
        Ir = function () {
          const b = e.multiple,
            re = l.datetimePanelValue,
            xe = z.value,
            He = B.value
          if (He) {
            const i = Ie.value
            if (b) {
              const c = se.value
              if (He) {
                const v = pf([], Z.value, !0),
                  g = []
                v.forEach(function (m) {
                  m &&
                    (m.setHours(re.getHours()), m.setMinutes(re.getMinutes()), m.setSeconds(re.getSeconds()), g.push(m))
                }),
                  te(
                    g
                      .map(function (m) {
                        return u.toDateString(m, i)
                      })
                      .join(","),
                    { type: "update" }
                  )
              } else te(c.join(","), { type: "update" })
            } else Mt(xe || l.currentDate)
          }
          Je()
        },
        ma = function (b, re) {
          l.datetimePanelValue.setMinutes(re.value), tr(b)
        },
        $r = function (b, re) {
          l.datetimePanelValue.setSeconds(re.value), tr(b)
        },
        tn = function (b) {
          const re = l.isActivated,
            xe = l.datePanelValue,
            He = l.datePanelType
          if (re) {
            b.preventDefault()
            const i = ht(b, ct.ARROW_LEFT),
              c = ht(b, ct.ARROW_UP),
              v = ht(b, ct.ARROW_RIGHT),
              g = ht(b, ct.ARROW_DOWN)
            if (He === "year") {
              let m = u.getWhatYear(xe || Date.now(), 0, "first")
              i
                ? (m = u.getWhatYear(m, -1))
                : c
                  ? (m = u.getWhatYear(m, -4))
                  : v
                    ? (m = u.getWhatYear(m, 1))
                    : g && (m = u.getWhatYear(m, 4)),
                Zr(m)
            } else if (He === "quarter") {
              let S = u.getWhatQuarter(xe || Date.now(), 0, "first")
              i
                ? (S = u.getWhatQuarter(S, -1))
                : c
                  ? (S = u.getWhatQuarter(S, -2))
                  : v
                    ? (S = u.getWhatQuarter(S, 1))
                    : g && (S = u.getWhatQuarter(S, 2)),
                Jr(S)
            } else if (He === "month") {
              let T = u.getWhatMonth(xe || Date.now(), 0, "first")
              i
                ? (T = u.getWhatMonth(T, -1))
                : c
                  ? (T = u.getWhatMonth(T, -4))
                  : v
                    ? (T = u.getWhatMonth(T, 1))
                    : g && (T = u.getWhatMonth(T, 4)),
                sr(T)
            } else {
              let P = xe || u.getWhatDay(Date.now(), 0, "first"),
                V = Te.value
              i
                ? (P = u.getWhatDay(P, -1))
                : c
                  ? (P = u.getWhatWeek(P, -1, V))
                  : v
                    ? (P = u.getWhatDay(P, 1))
                    : g && (P = u.getWhatWeek(P, 1, V)),
                ia(P)
            }
          }
        },
        la = function (b) {
          const re = l.isActivated
          if (re) {
            const xe = ht(b, ct.PAGE_UP)
            b.preventDefault(), xe ? kr(b) : qt(b)
          }
        },
        On = function () {
          const b = e.type,
            re = B.value,
            xe = z.value
          ;["year", "quarter", "month", "week"].indexOf(b) > -1 ? (l.datePanelType = b) : (l.datePanelType = "day"),
            (l.currentDate = u.getWhatDay(Date.now(), 0, "first")),
            xe ? (Mr(xe, 0), ot(xe)) : br(),
            re &&
              ((l.datetimePanelValue = l.datePanelValue || u.getWhatDay(Date.now(), 0, "first")),
              de(function () {
                const He = I.value
                u.arrayEach(He.querySelectorAll("li.is--selected"), Pt)
              }))
        },
        _r = function () {
          l.panelIndex < Na() && (l.panelIndex = da())
        },
        Xt = function () {
          return de().then(function () {
            const b = e.transfer,
              re = e.placement,
              xe = l.panelIndex,
              He = h.value,
              i = D.value
            if (He && i) {
              let c = He.offsetHeight,
                v = He.offsetWidth,
                g = i.offsetHeight,
                m = i.offsetWidth,
                S = 5,
                T = { zIndex: xe },
                P = Ta(He),
                V = P.boundingTop,
                Q = P.boundingLeft,
                pe = P.visibleHeight,
                Ee = P.visibleWidth,
                ze = "bottom"
              if (b) {
                let We = Q,
                  Fe = V + c
                re === "top"
                  ? ((ze = "top"), (Fe = V - g))
                  : re || (Fe + g + S > pe && ((ze = "top"), (Fe = V - g)), Fe < S && ((ze = "bottom"), (Fe = V + c))),
                  We + m + S > Ee && (We -= We + m + S - Ee),
                  We < S && (We = S),
                  Object.assign(T, {
                    left: "".concat(We, "px"),
                    top: "".concat(Fe, "px"),
                    minWidth: "".concat(v, "px")
                  })
              } else
                re === "top"
                  ? ((ze = "top"), (T.bottom = "".concat(c, "px")))
                  : re || (V + c + g > pe && V - c - g > S && ((ze = "top"), (T.bottom = "".concat(c, "px"))))
              return (l.panelStyle = T), (l.panelPlacement = ze), de()
            }
          })
        },
        oa = function () {
          const b = e.disabled,
            re = l.visiblePanel,
            xe = L.value
          return !b && !re
            ? (l.inited || (l.inited = !0),
              clearTimeout(_e),
              (l.isActivated = !0),
              (l.animatVisible = !0),
              xe && On(),
              setTimeout(function () {
                l.visiblePanel = !0
              }, 10),
              _r(),
              Xt())
            : de()
        },
        yr = function (b) {
          const re = e.readonly
          re || (b.preventDefault(), oa())
        },
        Qr = function (b) {
          _(b)
        },
        rn = function (b) {
          const re = e.disabled,
            xe = l.visiblePanel,
            He = l.isActivated,
            i = L.value,
            c = f.value,
            v = D.value
          !re &&
            He &&
            ((l.isActivated = yt(b, c).flag || yt(b, v).flag), l.isActivated || (i ? xe && (Je(), St()) : St()))
        },
        ba = function (b) {
          const re = e.clearable,
            xe = e.disabled,
            He = l.visiblePanel,
            i = L.value
          if (!xe) {
            let c = ht(b, ct.TAB),
              v = ht(b, ct.DELETE),
              g = ht(b, ct.ESCAPE),
              m = ht(b, ct.ENTER),
              S = ht(b, ct.ARROW_LEFT),
              T = ht(b, ct.ARROW_UP),
              P = ht(b, ct.ARROW_RIGHT),
              V = ht(b, ct.ARROW_DOWN),
              Q = ht(b, ct.PAGE_UP),
              pe = ht(b, ct.PAGE_DOWN),
              Ee = S || T || P || V,
              ze = l.isActivated
            c
              ? (ze && St(), (ze = !1), (l.isActivated = ze))
              : Ee
                ? i && ze && (He ? tn(b) : (T || V) && yr(b))
                : m
                  ? i && (He ? (l.datePanelValue ? Wr(l.datePanelValue) : Je()) : ze && yr(b))
                  : (Q || pe) && i && ze && la(b),
              c || g ? He && Je() : v && re && ze && Qe(b, null)
          }
        },
        Pa = function (b) {
          const re = e.disabled,
            xe = l.visiblePanel
          if (!re && xe) {
            const He = D.value
            yt(b, He).flag ? Xt() : (Je(), St())
          }
        },
        xa = function () {
          const b = l.isActivated,
            re = l.visiblePanel
          re ? (Je(), St()) : b && St()
        },
        jr = function (b, re) {
          const xe = e.festivalMethod
          if (xe) {
            const He = l.datePanelType,
              i = xe({ type: He, viewType: He, date: b.date, $input: F }),
              c = i ? (u.isString(i) ? { label: i } : i) : {},
              v = c.extra ? (u.isString(c.extra) ? { label: c.extra } : c.extra) : null,
              g = [
                p(
                  "span",
                  { class: ["vxe-input--date-label", { "is-notice": c.notice }] },
                  v && v.label
                    ? [
                        p("span", re),
                        p(
                          "span",
                          {
                            class: ["vxe-input--date-label--extra", v.important ? "is-important" : "", v.className],
                            style: v.style
                          },
                          u.toValueString(v.label)
                        )
                      ]
                    : re
                )
              ],
              m = c.label
            if (m) {
              const S = u.toValueString(m).split(",")
              g.push(
                p(
                  "span",
                  {
                    class: ["vxe-input--date-festival", c.important ? "is-important" : "", c.className],
                    style: c.style
                  },
                  [
                    S.length > 1
                      ? p(
                          "span",
                          { class: ["vxe-input--date-festival--overlap", "overlap--".concat(S.length)] },
                          S.map(function (T) {
                            return p("span", T.substring(0, 3))
                          })
                        )
                      : p("span", { class: "vxe-input--date-festival--label" }, S[0].substring(0, 3))
                  ]
                )
              )
            }
            return g
          }
          return re
        },
        Tn = function () {
          const b = e.multiple,
            re = l.datePanelType,
            xe = l.datePanelValue,
            He = z.value,
            i = W.value,
            c = G.value,
            v = Z.value,
            g = "yyyyMMdd"
          return [
            p("table", { class: "vxe-input--date-".concat(re, "-view"), cellspacing: 0, cellpadding: 0, border: 0 }, [
              p("thead", [
                p(
                  "tr",
                  i.map(function (m) {
                    return p("th", m.label)
                  })
                )
              ]),
              p(
                "tbody",
                c.map(function (m) {
                  return p(
                    "tr",
                    m.map(function (S) {
                      return p(
                        "td",
                        {
                          class: {
                            "is--prev": S.isPrev,
                            "is--current": S.isCurrent,
                            "is--now": S.isNow,
                            "is--next": S.isNext,
                            "is--disabled": _t(S),
                            "is--selected": b
                              ? v.some(function (T) {
                                  return u.isDateSame(T, S.date, g)
                                })
                              : u.isDateSame(He, S.date, g),
                            "is--hover": u.isDateSame(xe, S.date, g)
                          },
                          onClick: function () {
                            return Cr(S)
                          },
                          onMouseenter: function () {
                            return Nt(S)
                          }
                        },
                        jr(S, S.label)
                      )
                    })
                  )
                })
              )
            ])
          ]
        },
        Dn = function () {
          const b = e.multiple,
            re = l.datePanelType,
            xe = l.datePanelValue,
            He = z.value,
            i = ce.value,
            c = ne.value,
            v = Z.value,
            g = "yyyyMMdd"
          return [
            p("table", { class: "vxe-input--date-".concat(re, "-view"), cellspacing: 0, cellpadding: 0, border: 0 }, [
              p("thead", [
                p(
                  "tr",
                  i.map(function (m) {
                    return p("th", m.label)
                  })
                )
              ]),
              p(
                "tbody",
                c.map(function (m) {
                  const S = b
                      ? m.some(function (P) {
                          return v.some(function (V) {
                            return u.isDateSame(V, P.date, g)
                          })
                        })
                      : m.some(function (P) {
                          return u.isDateSame(He, P.date, g)
                        }),
                    T = m.some(function (P) {
                      return u.isDateSame(xe, P.date, g)
                    })
                  return p(
                    "tr",
                    m.map(function (P) {
                      return p(
                        "td",
                        {
                          class: {
                            "is--prev": P.isPrev,
                            "is--current": P.isCurrent,
                            "is--now": P.isNow,
                            "is--next": P.isNext,
                            "is--disabled": _t(P),
                            "is--selected": S,
                            "is--hover": T
                          },
                          onClick: function () {
                            return Cr(P)
                          },
                          onMouseenter: function () {
                            return Nt(P)
                          }
                        },
                        jr(P, P.label)
                      )
                    })
                  )
                })
              )
            ])
          ]
        },
        lr = function () {
          const b = e.multiple,
            re = l.datePanelType,
            xe = l.datePanelValue,
            He = z.value,
            i = fe.value,
            c = Z.value,
            v = "yyyyMM"
          return [
            p("table", { class: "vxe-input--date-".concat(re, "-view"), cellspacing: 0, cellpadding: 0, border: 0 }, [
              p(
                "tbody",
                i.map(function (g) {
                  return p(
                    "tr",
                    g.map(function (m) {
                      return p(
                        "td",
                        {
                          class: {
                            "is--prev": m.isPrev,
                            "is--current": m.isCurrent,
                            "is--now": m.isNow,
                            "is--next": m.isNext,
                            "is--disabled": _t(m),
                            "is--selected": b
                              ? c.some(function (S) {
                                  return u.isDateSame(S, m.date, v)
                                })
                              : u.isDateSame(He, m.date, v),
                            "is--hover": u.isDateSame(xe, m.date, v)
                          },
                          onClick: function () {
                            return Cr(m)
                          },
                          onMouseenter: function () {
                            return Nt(m)
                          }
                        },
                        jr(m, C.i18n("vxe.input.date.months.m".concat(m.month)))
                      )
                    })
                  )
                })
              )
            ])
          ]
        },
        Zl = function () {
          const b = e.multiple,
            re = l.datePanelType,
            xe = l.datePanelValue,
            He = z.value,
            i = Re.value,
            c = Z.value,
            v = "yyyyq"
          return [
            p("table", { class: "vxe-input--date-".concat(re, "-view"), cellspacing: 0, cellpadding: 0, border: 0 }, [
              p(
                "tbody",
                i.map(function (g) {
                  return p(
                    "tr",
                    g.map(function (m) {
                      return p(
                        "td",
                        {
                          class: {
                            "is--prev": m.isPrev,
                            "is--current": m.isCurrent,
                            "is--now": m.isNow,
                            "is--next": m.isNext,
                            "is--disabled": _t(m),
                            "is--selected": b
                              ? c.some(function (S) {
                                  return u.isDateSame(S, m.date, v)
                                })
                              : u.isDateSame(He, m.date, v),
                            "is--hover": u.isDateSame(xe, m.date, v)
                          },
                          onClick: function () {
                            return Cr(m)
                          },
                          onMouseenter: function () {
                            return Nt(m)
                          }
                        },
                        jr(m, C.i18n("vxe.input.date.quarters.q".concat(m.quarter)))
                      )
                    })
                  )
                })
              )
            ])
          ]
        },
        Jl = function () {
          const b = e.multiple,
            re = l.datePanelType,
            xe = l.datePanelValue,
            He = z.value,
            i = ye.value,
            c = Z.value,
            v = "yyyy"
          return [
            p("table", { class: "vxe-input--date-".concat(re, "-view"), cellspacing: 0, cellpadding: 0, border: 0 }, [
              p(
                "tbody",
                i.map(function (g) {
                  return p(
                    "tr",
                    g.map(function (m) {
                      return p(
                        "td",
                        {
                          class: {
                            "is--prev": m.isPrev,
                            "is--current": m.isCurrent,
                            "is--now": m.isNow,
                            "is--next": m.isNext,
                            "is--disabled": _t(m),
                            "is--selected": b
                              ? c.some(function (S) {
                                  return u.isDateSame(S, m.date, v)
                                })
                              : u.isDateSame(He, m.date, v),
                            "is--hover": u.isDateSame(xe, m.date, v)
                          },
                          onClick: function () {
                            return Cr(m)
                          },
                          onMouseenter: function () {
                            return Nt(m)
                          }
                        },
                        jr(m, m.year)
                      )
                    })
                  )
                })
              )
            ])
          ]
        },
        Ql = function () {
          const b = l.datePanelType
          switch (b) {
            case "week":
              return Dn()
            case "month":
              return lr()
            case "quarter":
              return Zl()
            case "year":
              return Jl()
          }
          return Tn()
        },
        il = function () {
          const b = e.multiple,
            re = l.datePanelType,
            xe = ge.value,
            He = oe.value,
            i = $e.value
          return [
            p("div", { class: "vxe-input--date-picker-header" }, [
              p("div", { class: "vxe-input--date-picker-type-wrapper" }, [
                re === "year"
                  ? p("span", { class: "vxe-input--date-picker-label" }, i)
                  : p("span", { class: "vxe-input--date-picker-btn", onClick: Rr }, i)
              ]),
              p("div", { class: "vxe-input--date-picker-btn-wrapper" }, [
                p(
                  "span",
                  {
                    class: ["vxe-input--date-picker-btn vxe-input--date-picker-prev-btn", { "is--disabled": xe }],
                    onClick: kr
                  },
                  [p("i", { class: "vxe-icon-caret-left" })]
                ),
                p("span", { class: "vxe-input--date-picker-btn vxe-input--date-picker-current-btn", onClick: xr }, [
                  p("i", { class: "vxe-icon-dot" })
                ]),
                p(
                  "span",
                  {
                    class: ["vxe-input--date-picker-btn vxe-input--date-picker-next-btn", { "is--disabled": He }],
                    onClick: qt
                  },
                  [p("i", { class: "vxe-icon-caret-right" })]
                ),
                b && ue.value
                  ? p("span", { class: "vxe-input--date-picker-btn vxe-input--date-picker-confirm-btn" }, [
                      p(
                        "button",
                        { class: "vxe-input--date-picker-confirm", type: "button", onClick: Ir },
                        C.i18n("vxe.button.confirm")
                      )
                    ])
                  : null
              ])
            ]),
            p("div", { class: "vxe-input--date-picker-body" }, Ql())
          ]
        },
        ll = function () {
          const b = l.datetimePanelValue,
            re = he.value,
            xe = y.value,
            He = k.value,
            i = ee.value
          return [
            p("div", { class: "vxe-input--time-picker-header" }, [
              p("span", { class: "vxe-input--time-picker-title" }, re),
              p(
                "button",
                { class: "vxe-input--time-picker-confirm", type: "button", onClick: Ir },
                C.i18n("vxe.button.confirm")
              )
            ]),
            p("div", { ref: I, class: "vxe-input--time-picker-body" }, [
              p(
                "ul",
                { class: "vxe-input--time-picker-hour-list" },
                xe.map(function (c, v) {
                  return p(
                    "li",
                    {
                      key: v,
                      class: { "is--selected": b && b.getHours() === c.value },
                      onClick: function (g) {
                        return Fr(g, c)
                      }
                    },
                    c.label
                  )
                })
              ),
              p(
                "ul",
                { class: "vxe-input--time-picker-minute-list" },
                He.map(function (c, v) {
                  return p(
                    "li",
                    {
                      key: v,
                      class: { "is--selected": b && b.getMinutes() === c.value },
                      onClick: function (g) {
                        return ma(g, c)
                      }
                    },
                    c.label
                  )
                })
              ),
              p(
                "ul",
                { class: "vxe-input--time-picker-second-list" },
                i.map(function (c, v) {
                  return p(
                    "li",
                    {
                      key: v,
                      class: { "is--selected": b && b.getSeconds() === c.value },
                      onClick: function (g) {
                        return $r(g, c)
                      }
                    },
                    c.label
                  )
                })
              )
            ])
          ]
        },
        eo = function () {
          let b,
            re = e.type,
            xe = e.transfer,
            He = l.inited,
            i = l.animatVisible,
            c = l.visiblePanel,
            v = l.panelPlacement,
            g = l.panelStyle,
            m = d.value,
            S = L.value,
            T = []
          return S
            ? (re === "datetime"
                ? T.push(
                    p("div", { class: "vxe-input--panel-layout-wrapper" }, [
                      p("div", { class: "vxe-input--panel-left-wrapper" }, il()),
                      p("div", { class: "vxe-input--panel-right-wrapper" }, ll())
                    ])
                  )
                : re === "time"
                  ? T.push(p("div", { class: "vxe-input--panel-wrapper" }, ll()))
                  : T.push(p("div", { class: "vxe-input--panel-wrapper" }, il())),
              p(Un, { to: "body", disabled: xe ? !He : !0 }, [
                p(
                  "div",
                  {
                    ref: D,
                    class: [
                      "vxe-table--ignore-clear vxe-input--panel",
                      "type--".concat(re),
                      ((b = {}),
                      (b["size--".concat(m)] = m),
                      (b["is--transfer"] = xe),
                      (b["animat--leave"] = i),
                      (b["animat--enter"] = c),
                      b)
                    ],
                    placement: v,
                    style: g
                  },
                  T
                )
              ]))
            : null
        },
        Mn = function () {
          const b = we.value,
            re = ie.value
          return p("span", { class: "vxe-input--number-suffix" }, [
            p(
              "span",
              {
                class: ["vxe-input--number-prev is--prev", { "is--disabled": b }],
                onMousedown: mr,
                onMouseup: Lt,
                onMouseleave: Lt
              },
              [p("i", { class: ["vxe-input--number-prev-icon", C.icon.INPUT_PREV_NUM] })]
            ),
            p(
              "span",
              {
                class: ["vxe-input--number-next is--next", { "is--disabled": re }],
                onMousedown: mr,
                onMouseup: Lt,
                onMouseleave: Lt
              },
              [p("i", { class: ["vxe-input--number-next-icon", C.icon.INPUT_NEXT_NUM] })]
            )
          ])
        },
        ei = function () {
          return p("span", { class: "vxe-input--date-picker-suffix", onClick: yr }, [
            p("i", { class: ["vxe-input--date-picker-icon", C.icon.INPUT_DATE] })
          ])
        },
        ol = function () {
          return p("span", { class: "vxe-input--search-suffix", onClick: Wt }, [
            p("i", { class: ["vxe-input--search-icon", C.icon.INPUT_SEARCH] })
          ])
        },
        to = function () {
          const b = l.showPwd
          return p("span", { class: "vxe-input--password-suffix", onClick: Kt }, [
            p("i", { class: ["vxe-input--password-icon", b ? C.icon.INPUT_SHOW_PWD : C.icon.INPUT_PWD] })
          ])
        },
        ti = function () {
          const b = e.prefixIcon,
            re = r.prefix,
            xe = []
          return (
            re
              ? xe.push(p("span", { class: "vxe-input--prefix-icon" }, re({})))
              : b && xe.push(p("i", { class: ["vxe-input--prefix-icon", b] })),
            xe.length ? p("span", { class: "vxe-input--prefix", onClick: Ue }, xe) : null
          )
        },
        ri = function () {
          const b = e.disabled,
            re = e.suffixIcon,
            xe = l.inputValue,
            He = r.suffix,
            i = X.value,
            c = []
          return (
            He
              ? c.push(p("span", { class: "vxe-input--suffix-icon" }, He({})))
              : re && c.push(p("i", { class: ["vxe-input--suffix-icon", re] })),
            i && c.push(p("i", { class: ["vxe-input--clear-icon", C.icon.INPUT_CLEAR] })),
            c.length
              ? p(
                  "span",
                  {
                    class: ["vxe-input--suffix", { "is--clear": i && !b && !(xe === "" || u.eqNull(xe)) }],
                    onClick: R
                  },
                  c
                )
              : null
          )
        },
        ai = function () {
          let b = e.controls,
            re = w.value,
            xe = L.value,
            He = Y.value,
            i = K.value,
            c
          return (
            He ? (c = to()) : re ? b && (c = Mn()) : xe ? (c = ei()) : i && (c = ol()),
            c ? p("span", { class: "vxe-input--extra-suffix" }, [c]) : null
          )
        }
      ;(q = {
        dispatchEvent: function (b, re, xe) {
          a(b, Object.assign({ $input: F, $event: xe }, re))
        },
        focus: function () {
          const b = h.value
          return (l.isActivated = !0), b.focus(), de()
        },
        blur: function () {
          const b = h.value
          return b.blur(), (l.isActivated = !1), de()
        },
        select: function () {
          const b = h.value
          return b.select(), (l.isActivated = !1), de()
        },
        showPanel: oa,
        hidePanel: Je,
        updatePlacement: Xt
      }),
        Object.assign(F, q),
        ut(
          function () {
            return e.modelValue
          },
          function (b) {
            ;(l.inputValue = b), wt()
          }
        ),
        ut(
          function () {
            return e.type
          },
          function () {
            Object.assign(l, {
              inputValue: e.modelValue,
              datetimePanelValue: null,
              datePanelValue: null,
              datePanelLabel: "",
              datePanelType: "day",
              selectMonth: null,
              currentDate: null
            }),
              mt()
          }
        ),
        ut(De, function () {
          const b = L.value
          b && (ot(l.datePanelValue), (l.inputValue = e.multiple ? Oe.value : l.datePanelLabel))
        }),
        de(function () {
          vt.on(F, "mousewheel", Pa), vt.on(F, "mousedown", rn), vt.on(F, "keydown", ba), vt.on(F, "blur", xa)
        }),
        or(function () {
          Lt(), vt.off(F, "mousewheel"), vt.off(F, "mousedown"), vt.off(F, "keydown"), vt.off(F, "blur")
        }),
        mt()
      const ni = function () {
        let b,
          re = e.className,
          xe = e.controls,
          He = e.type,
          i = e.align,
          c = e.showWordCount,
          v = e.countMethod,
          g = e.name,
          m = e.disabled,
          S = e.readonly,
          T = e.autocomplete,
          P = l.inputValue,
          V = l.visiblePanel,
          Q = l.isActivated,
          pe = d.value,
          Ee = M.value,
          ze = x.value,
          We = L.value,
          Fe = le.value,
          Ge = Le.value,
          qe = me.value,
          Se = be.value,
          je = [],
          it = ti(),
          Ze = ri()
        it && je.push(it),
          je.push(
            p("input", {
              ref: h,
              class: "vxe-input--inner",
              value: P,
              name: g,
              type: qe,
              placeholder: Se,
              maxlength: Ge,
              readonly: Fe,
              disabled: m,
              autocomplete: T,
              onKeydown: cr,
              onKeyup: Xr,
              onWheel: Kr,
              onClick: Qr,
              onInput: ke,
              onChange: Be,
              onFocus: Ke,
              onBlur: Gt
            })
          ),
          Ze && je.push(Ze),
          je.push(ai()),
          We && je.push(eo())
        let rt = !1
        return (
          c &&
            ["text", "search"].includes(He) &&
            ((rt = !0),
            je.push(
              p(
                "span",
                { class: ["vxe-input--count", { "is--error": Ee }] },
                v ? "".concat(v({ value: P })) : "".concat(ze).concat(Ge ? "/".concat(Ge) : "")
              )
            )),
          p(
            "div",
            {
              ref: f,
              class: [
                "vxe-input",
                "type--".concat(He),
                re,
                ((b = {}),
                (b["size--".concat(pe)] = pe),
                (b["is--".concat(i)] = i),
                (b["is--controls"] = xe),
                (b["is--prefix"] = !!it),
                (b["is--suffix"] = !!Ze),
                (b["is--readonly"] = S),
                (b["is--visivle"] = V),
                (b["is--count"] = rt),
                (b["is--disabled"] = m),
                (b["is--active"] = Q),
                b)
              ]
            },
            je
          )
        )
      }
      return (F.renderVN = ni), F
    },
    render: function () {
      return this.renderVN()
    }
  }),
  Yr = Dt({
    name: "VxeCheckbox",
    props: {
      modelValue: [String, Number, Boolean],
      label: { type: [String, Number], default: null },
      indeterminate: Boolean,
      title: [String, Number],
      checkedValue: { type: [String, Number, Boolean], default: !0 },
      uncheckedValue: { type: [String, Number, Boolean], default: !1 },
      content: [String, Number],
      disabled: Boolean,
      size: {
        type: String,
        default: function () {
          return C.checkbox.size || C.size
        }
      }
    },
    emits: ["update:modelValue", "change"],
    setup: function (e, t) {
      let r = t.slots,
        a = t.emit,
        n = gt("$xeform", null),
        s = gt("$xeformiteminfo", null),
        o = u.uniqueId(),
        d = { xID: o, props: e, context: t },
        l = {},
        f = nr(e),
        h = gt("$xecheckboxgroup", null),
        D = Pe(function () {
          return h ? u.includes(h.props.modelValue, e.label) : e.modelValue === e.checkedValue
        }),
        I = Pe(function () {
          if (e.disabled) return !0
          if (h) {
            const q = h.props,
              $ = h.getComputeMaps().computeIsMaximize,
              B = $.value,
              w = D.value
            return q.disabled || (B && !w)
          }
          return !1
        }),
        N = function (q) {
          const $ = e.checkedValue,
            B = e.uncheckedValue,
            w = I.value
          if (!w) {
            const x = q.target.checked,
              M = x ? $ : B,
              L = { checked: x, value: M, label: e.label }
            h
              ? h.handleChecked(L, q)
              : (a("update:modelValue", M),
                l.dispatchEvent("change", L, q),
                n && s && n.triggerItemEvent(q, s.itemConfig.field, M))
          }
        }
      ;(l = {
        dispatchEvent: function (q, $, B) {
          a(q, Object.assign({ $checkbox: d, $event: B }, $))
        }
      }),
        Object.assign(d, l)
      const F = function () {
        let q,
          $ = f.value,
          B = I.value,
          w = D.value,
          x = e.indeterminate
        return p(
          "label",
          {
            class: [
              "vxe-checkbox",
              ((q = {}),
              (q["size--".concat($)] = $),
              (q["is--indeterminate"] = x),
              (q["is--disabled"] = B),
              (q["is--checked"] = w),
              q)
            ],
            title: e.title
          },
          [
            p("input", { class: "vxe-checkbox--input", type: "checkbox", disabled: B, checked: w, onChange: N }),
            p("span", {
              class: [
                "vxe-checkbox--icon",
                x ? "vxe-icon-checkbox-indeterminate" : w ? "vxe-icon-checkbox-checked" : "vxe-icon-checkbox-unchecked"
              ]
            }),
            p("span", { class: "vxe-checkbox--label" }, r.default ? r.default({}) : zt(e.content))
          ]
        )
      }
      return (d.renderVN = F), d
    },
    render: function () {
      return this.renderVN()
    }
  })
function ja(e) {
  return e.visible !== !1
}
function jF() {
  return u.uniqueId("opt_")
}
const wn = Dt({
    name: "VxeSelect",
    props: {
      modelValue: null,
      clearable: Boolean,
      placeholder: {
        type: String,
        default: function () {
          return u.eqNull(C.select.placeholder) ? C.i18n("vxe.base.pleaseSelect") : C.select.placeholder
        }
      },
      loading: Boolean,
      disabled: Boolean,
      multiple: Boolean,
      multiCharOverflow: {
        type: [Number, String],
        default: function () {
          return C.select.multiCharOverflow
        }
      },
      prefixIcon: String,
      placement: String,
      options: Array,
      optionProps: Object,
      optionGroups: Array,
      optionGroupProps: Object,
      optionConfig: Object,
      className: [String, Function],
      popupClassName: [String, Function],
      max: { type: [String, Number], default: null },
      size: {
        type: String,
        default: function () {
          return C.select.size || C.size
        }
      },
      filterable: Boolean,
      filterMethod: Function,
      remote: Boolean,
      remoteMethod: Function,
      emptyText: String,
      optionId: {
        type: String,
        default: function () {
          return C.select.optionId
        }
      },
      optionKey: Boolean,
      transfer: {
        type: Boolean,
        default: function () {
          return C.select.transfer
        }
      }
    },
    emits: ["update:modelValue", "change", "clear", "blur", "focus"],
    setup: function (e, t) {
      var r = t.slots,
        a = t.emit,
        n = gt("$xeform", null),
        s = gt("$xeformiteminfo", null),
        o = u.uniqueId(),
        d = nr(e),
        l = Ht({
          inited: !1,
          staticOptions: [],
          fullGroupList: [],
          fullOptionList: [],
          visibleGroupList: [],
          visibleOptionList: [],
          remoteValueList: [],
          panelIndex: 0,
          panelStyle: {},
          panelPlacement: null,
          currentOption: null,
          currentValue: null,
          visiblePanel: !1,
          animatVisible: !1,
          isActivated: !1,
          searchValue: "",
          searchLoading: !1
        }),
        f = Xe(),
        h = Xe(),
        D = Xe(),
        I = Xe(),
        N = Xe(),
        F = { refElem: f },
        q = {
          xID: o,
          props: e,
          context: t,
          reactData: l,
          getRefMaps: function () {
            return F
          }
        },
        $ = {},
        B = Pe(function () {
          return e.optionProps || {}
        }),
        w = Pe(function () {
          return e.optionGroupProps || {}
        }),
        x = Pe(function () {
          const E = B.value
          return E.label || "label"
        }),
        M = Pe(function () {
          const E = B.value
          return E.value || "value"
        }),
        L = Pe(function () {
          const E = w.value
          return E.label || "label"
        }),
        Y = Pe(function () {
          const E = w.value
          return E.options || "options"
        }),
        K = Pe(function () {
          const E = e.modelValue,
            _ = e.multiple,
            te = e.max
          return _ && te ? (E ? E.length : 0) >= u.toNumber(te) : !1
        }),
        O = Pe(function () {
          return Object.assign({}, C.select.optionConfig, e.optionConfig)
        }),
        A = Pe(function () {
          return l.fullGroupList.some(function (E) {
            return E.options && E.options.length
          })
        }),
        X = Pe(function () {
          return u.toNumber(e.multiCharOverflow)
        }),
        J = function (E, _) {
          return E && (u.isString(E) && (E = r[E] || null), u.isFunction(E)) ? Vt(E(_)) : []
        },
        Ce = function (E) {
          const _ = l.fullOptionList,
            te = l.fullGroupList,
            Me = A.value,
            ke = M.value
          if (Me)
            for (let Be = 0; Be < te.length; Be++) {
              const Ke = te[Be]
              if (Ke.options)
                for (let Ue = 0; Ue < Ke.options.length; Ue++) {
                  const _e = Ke.options[Ue]
                  if (E === _e[ke]) return _e
                }
            }
          return _.find(function (Je) {
            return E === Je[ke]
          })
        },
        ue = function (E) {
          const _ = l.remoteValueList,
            te = x.value,
            Me = _.find(function (Be) {
              return E === Be.key
            }),
            ke = Me ? Me.result : null
          return u.toValueString(ke ? ke[te] : E)
        },
        Z = function (E) {
          const _ = x.value,
            te = Ce(E)
          return u.toValueString(te ? te[_] : E)
        },
        se = Pe(function () {
          const E = e.modelValue,
            _ = e.multiple,
            te = e.remote,
            Me = X.value
          if (E && _) {
            const ke = u.isArray(E) ? E : [E]
            return te
              ? ke
                  .map(function (Be) {
                    return ue(Be)
                  })
                  .join(", ")
              : ke
                  .map(function (Be) {
                    const Ke = Z(Be)
                    return Me > 0 && Ke.length > Me ? "".concat(Ke.substring(0, Me), "...") : Ke
                  })
                  .join(", ")
          }
          return te ? ue(E) : Z(E)
        }),
        Oe = function () {
          const E = O.value
          return E.keyField || e.optionId || "_X_OPTION_KEY"
        },
        Ie = function (E) {
          const _ = E[Oe()]
          return _ ? encodeURIComponent(_) : ""
        },
        z = function () {
          const E = e.filterable,
            _ = e.filterMethod,
            te = l.fullOptionList,
            Me = l.fullGroupList,
            ke = l.searchValue,
            Be = A.value,
            Ke = L.value,
            Ue = x.value
          return (
            Be
              ? E && _
                ? (l.visibleGroupList = Me.filter(function (_e) {
                    return ja(_e) && _({ group: _e, option: null, searchValue: ke })
                  }))
                : E
                  ? (l.visibleGroupList = Me.filter(function (_e) {
                      return ja(_e) && (!ke || "".concat(_e[Ke]).indexOf(ke) > -1)
                    }))
                  : (l.visibleGroupList = Me.filter(ja))
              : E && _
                ? (l.visibleOptionList = te.filter(function (_e) {
                    return ja(_e) && _({ group: null, option: _e, searchValue: ke })
                  }))
                : E
                  ? (l.visibleOptionList = te.filter(function (_e) {
                      return ja(_e) && (!ke || "".concat(_e[Ue]).indexOf(ke) > -1)
                    }))
                  : (l.visibleOptionList = te.filter(ja)),
            de()
          )
        },
        ge = function () {
          const E = l.fullOptionList,
            _ = l.fullGroupList,
            te = Y.value,
            Me = Oe(),
            ke = function (Be) {
              Ie(Be) || (Be[Me] = jF())
            }
          _.length
            ? _.forEach(function (Be) {
                ke(Be), Be[te] && Be[te].forEach(ke)
              })
            : E.length && E.forEach(ke),
            z()
        },
        oe = function (E) {
          const _ = M.value
          E && ((l.currentOption = E), (l.currentValue = E[_]))
        },
        he = function (E, _) {
          return de().then(function () {
            if (E) {
              const te = I.value,
                Me = N.value,
                ke = Me.querySelector("[optid='".concat(Ie(E), "']"))
              if (te && ke) {
                const Be = te.offsetHeight,
                  Ke = 5
                _
                  ? ke.offsetTop + ke.offsetHeight - te.scrollTop > Be &&
                    (te.scrollTop = ke.offsetTop + ke.offsetHeight - Be)
                  : (ke.offsetTop + Ke < te.scrollTop || ke.offsetTop + Ke > te.scrollTop + te.clientHeight) &&
                    (te.scrollTop = ke.offsetTop - Ke)
              }
            }
          })
        },
        ve = function () {
          l.panelIndex < Na() && (l.panelIndex = da())
        },
        De = function () {
          return de().then(function () {
            const E = e.transfer,
              _ = e.placement,
              te = l.panelIndex,
              Me = f.value,
              ke = N.value
            if (ke && Me) {
              let Be = Me.offsetHeight,
                Ke = Me.offsetWidth,
                Ue = ke.offsetHeight,
                _e = ke.offsetWidth,
                Je = 5,
                Qe = { zIndex: te },
                R = Ta(Me),
                ot = R.boundingTop,
                wt = R.boundingLeft,
                mt = R.visibleHeight,
                ft = R.visibleWidth,
                lt = "bottom"
              if (E) {
                let xt = wt,
                  tt = ot + Be
                _ === "top"
                  ? ((lt = "top"), (tt = ot - Ue))
                  : _ ||
                    (tt + Ue + Je > mt && ((lt = "top"), (tt = ot - Ue)), tt < Je && ((lt = "bottom"), (tt = ot + Be))),
                  xt + _e + Je > ft && (xt -= xt + _e + Je - ft),
                  xt < Je && (xt = Je),
                  Object.assign(Qe, {
                    left: "".concat(xt, "px"),
                    top: "".concat(tt, "px"),
                    minWidth: "".concat(Ke, "px")
                  })
              } else
                _ === "top"
                  ? ((lt = "top"), (Qe.bottom = "".concat(Be, "px")))
                  : _ || (ot + Be + Ue > mt && ot - Be - Ue > Je && ((lt = "top"), (Qe.bottom = "".concat(Be, "px"))))
              return (l.panelStyle = Qe), (l.panelPlacement = lt), de()
            }
          })
        },
        Ne,
        $e = function () {
          const E = e.loading,
            _ = e.disabled,
            te = e.filterable
          !E &&
            !_ &&
            (clearTimeout(Ne),
            l.inited || (l.inited = !0),
            (l.isActivated = !0),
            (l.animatVisible = !0),
            te && z(),
            setTimeout(function () {
              const Me = e.modelValue,
                ke = e.multiple,
                Be = Ce(ke && Me ? Me[0] : Me)
              ;(l.visiblePanel = !0), Be && (oe(Be), he(Be)), G()
            }, 10),
            ve(),
            De())
        },
        Te = function () {
          ;(l.searchValue = ""),
            (l.searchLoading = !1),
            (l.visiblePanel = !1),
            (Ne = window.setTimeout(function () {
              l.animatVisible = !1
            }, 350))
        },
        Ve = function (E, _) {
          _ !== e.modelValue &&
            (a("update:modelValue", _),
            $.dispatchEvent("change", { value: _ }, E),
            n && s && n.triggerItemEvent(E, s.itemConfig.field, _))
        },
        W = function (E, _) {
          ;(l.remoteValueList = []), Ve(E, _), $.dispatchEvent("clear", { value: _ }, E)
        },
        ce = function (E, _) {
          W(_, null), Te()
        },
        ye = function (E, _, te) {
          const Me = e.modelValue,
            ke = e.multiple,
            Be = l.remoteValueList
          if (ke) {
            let Ke = void 0
            Me
              ? Me.indexOf(_) === -1
                ? (Ke = Me.concat([_]))
                : (Ke = Me.filter(function (_e) {
                    return _e !== _
                  }))
              : (Ke = [_])
            const Ue = Be.find(function (_e) {
              return _e.key === _
            })
            Ue ? (Ue.result = te) : Be.push({ key: _, result: te }), Ve(E, Ke)
          } else (l.remoteValueList = [{ key: _, result: te }]), Ve(E, _), Te()
        },
        Ae = function (E) {
          const _ = e.disabled,
            te = l.visiblePanel
          if (!_ && te) {
            const Me = N.value
            yt(E, Me).flag ? De() : Te()
          }
        },
        Re = function (E) {
          const _ = e.disabled,
            te = l.visiblePanel
          if (!_) {
            const Me = f.value,
              ke = N.value
            ;(l.isActivated = yt(E, Me).flag || yt(E, ke).flag), te && !l.isActivated && Te()
          }
        },
        ae = function (E, _) {
          let te = l.visibleOptionList,
            Me = l.visibleGroupList,
            ke = A.value,
            Be = M.value,
            Ke = Y.value,
            Ue,
            _e,
            Je,
            Qe
          if (ke)
            for (let R = 0; R < Me.length; R++) {
              const ot = Me[R],
                wt = ot[Ke],
                mt = ot.disabled
              if (wt)
                for (var ft = 0; ft < wt.length; ft++) {
                  var lt = wt[ft],
                    xt = ja(lt),
                    tt = mt || lt.disabled
                  if ((!Ue && !tt && (Ue = lt), Qe && xt && !tt && ((Je = lt), !_))) return { offsetOption: Je }
                  if (E === lt[Be]) {
                    if (((Qe = lt), _)) return { offsetOption: _e }
                  } else xt && !tt && (_e = lt)
                }
            }
          else
            for (var ft = 0; ft < te.length; ft++) {
              var lt = te[ft],
                tt = lt.disabled
              if ((!Ue && !tt && (Ue = lt), Qe && !tt && ((Je = lt), !_))) return { offsetOption: Je }
              if (E === lt[Be]) {
                if (((Qe = lt), _)) return { offsetOption: _e }
              } else tt || (_e = lt)
            }
          return { firstOption: Ue }
        },
        fe = function (E) {
          const _ = e.clearable,
            te = e.disabled,
            Me = l.visiblePanel,
            ke = l.currentValue,
            Be = l.currentOption
          if (!te) {
            const Ke = ht(E, ct.TAB),
              Ue = ht(E, ct.ENTER),
              _e = ht(E, ct.ESCAPE),
              Je = ht(E, ct.ARROW_UP),
              Qe = ht(E, ct.ARROW_DOWN),
              R = ht(E, ct.DELETE),
              ot = ht(E, ct.SPACEBAR)
            if ((Ke && (l.isActivated = !1), Me))
              if (_e || Ke) Te()
              else if (Ue) E.preventDefault(), E.stopPropagation(), ye(E, ke, Be)
              else if (Je || Qe) {
                E.preventDefault()
                let wt = ae(ke, Je),
                  mt = wt.firstOption,
                  ft = wt.offsetOption
                !ft && !Ce(ke) && (ft = mt), oe(ft), he(ft, Qe)
              } else ot && E.preventDefault()
            else (Je || Qe || Ue || ot) && l.isActivated && (E.preventDefault(), $e())
            l.isActivated && R && _ && W(E, null)
          }
        },
        U = function () {
          Te()
        },
        G = function () {
          e.filterable &&
            de(function () {
              const E = D.value
              E && E.focus()
            })
        },
        ne = function (E) {
          e.disabled || (l.isActivated = !0), $.dispatchEvent("focus", {}, E)
        },
        y = function (E) {
          ;(l.isActivated = !1), $.dispatchEvent("blur", {}, E)
        },
        k = function (E) {
          l.searchValue = E
        },
        ee = function () {
          l.isActivated = !0
        },
        le = function (E) {
          const _ = E.$event,
            te = ht(_, ct.ENTER)
          te && (_.preventDefault(), _.stopPropagation())
        },
        me = u.debounce(
          function () {
            const E = e.remote,
              _ = e.remoteMethod,
              te = l.searchValue
            E && _
              ? ((l.searchLoading = !0),
                Promise.resolve(_({ searchValue: te }))
                  .then(function () {
                    return de()
                  })
                  .catch(function () {
                    return de()
                  })
                  .finally(function () {
                    ;(l.searchLoading = !1), z()
                  }))
              : z()
          },
          350,
          { trailing: !0 }
        ),
        be = function (E) {
          const _ = E.$event
          _.preventDefault(), l.visiblePanel ? Te() : $e()
        },
        Le = function (E, _, te) {
          if (_.disabled || (te && te.disabled)) return !0
          const Me = K.value
          return !!(Me && !E)
        },
        j = function (E, _) {
          const te = e.optionKey,
            Me = e.modelValue,
            ke = e.multiple,
            Be = l.currentValue,
            Ke = O.value,
            Ue = x.value,
            _e = M.value,
            Je = A.value,
            Qe = Ke.useKey,
            R = r.option
          return E.map(function (ot, wt) {
            const mt = ot.slots,
              ft = ot.className,
              lt = ot[_e],
              xt = ke ? Me && Me.indexOf(lt) > -1 : Me === lt,
              tt = !Je || ja(ot),
              Mt = Le(xt, ot, _),
              St = Ie(ot),
              Gt = mt ? mt.default : null,
              Kt = { option: ot, group: null, $select: q }
            return tt
              ? p(
                  "div",
                  {
                    key: Qe || te ? St : wt,
                    class: [
                      "vxe-select-option",
                      ft ? (u.isFunction(ft) ? ft(Kt) : ft) : "",
                      { "is--disabled": Mt, "is--selected": xt, "is--hover": Be === lt }
                    ],
                    optid: St,
                    onMousedown: function (Wt) {
                      const Qt = Wt.button === 0
                      Qt && Wt.stopPropagation()
                    },
                    onClick: function (Wt) {
                      Mt || ye(Wt, lt, ot)
                    },
                    onMouseenter: function () {
                      Mt || oe(ot)
                    }
                  },
                  R ? J(R, Kt) : Gt ? J(Gt, Kt) : Jt(zt(ot[Ue]))
                )
              : null
          })
        },
        H = function () {
          const E = e.optionKey,
            _ = l.visibleGroupList,
            te = O.value,
            Me = L.value,
            ke = Y.value,
            Be = te.useKey,
            Ke = r.option
          return _.map(function (Ue, _e) {
            const Je = Ue.slots,
              Qe = Ue.className,
              R = Ie(Ue),
              ot = Ue.disabled,
              wt = Je ? Je.default : null,
              mt = { option: Ue, group: Ue, $select: q }
            return p(
              "div",
              {
                key: Be || E ? R : _e,
                class: ["vxe-optgroup", Qe ? (u.isFunction(Qe) ? Qe(mt) : Qe) : "", { "is--disabled": ot }],
                optid: R
              },
              [
                p("div", { class: "vxe-optgroup--title" }, Ke ? J(Ke, mt) : wt ? J(wt, mt) : zt(Ue[Me])),
                p("div", { class: "vxe-optgroup--wrapper" }, j(Ue[ke] || [], Ue))
              ]
            )
          })
        },
        ie = function () {
          const E = l.visibleGroupList,
            _ = l.visibleOptionList,
            te = l.searchLoading,
            Me = A.value
          if (te)
            return [
              p("div", { class: "vxe-select--search-loading" }, [
                p("i", { class: ["vxe-select--search-icon", C.icon.SELECT_LOADED] }),
                p("span", { class: "vxe-select--search-text" }, C.i18n("vxe.select.loadingText"))
              ])
            ]
          if (Me) {
            if (E.length) return H()
          } else if (_.length) return j(_)
          return [p("div", { class: "vxe-select--empty-placeholder" }, e.emptyText || C.i18n("vxe.select.emptyText"))]
        }
      ;($ = {
        dispatchEvent: function (E, _, te) {
          a(E, Object.assign({ $select: q, $event: te }, _))
        },
        isPanelVisible: function () {
          return l.visiblePanel
        },
        togglePanel: function () {
          return l.visiblePanel ? Te() : $e(), de()
        },
        hidePanel: function () {
          return l.visiblePanel && Te(), de()
        },
        showPanel: function () {
          return l.visiblePanel || $e(), de()
        },
        refreshOption: z,
        focus: function () {
          const E = h.value
          return (l.isActivated = !0), E.blur(), de()
        },
        blur: function () {
          const E = h.value
          return E.blur(), (l.isActivated = !1), de()
        }
      }),
        Object.assign(q, $),
        ut(
          function () {
            return l.staticOptions
          },
          function (E) {
            E.some(function (_) {
              return _.options && _.options.length
            })
              ? ((l.fullOptionList = []), (l.fullGroupList = E))
              : ((l.fullGroupList = []), (l.fullOptionList = E || [])),
              ge()
          }
        ),
        ut(
          function () {
            return e.options
          },
          function (E) {
            ;(l.fullGroupList = []), (l.fullOptionList = E || []), ge()
          }
        ),
        ut(
          function () {
            return e.optionGroups
          },
          function (E) {
            ;(l.fullOptionList = []), (l.fullGroupList = E || []), ge()
          }
        ),
        pr(function () {
          de(function () {
            const E = e.options,
              _ = e.optionGroups
            _ ? (l.fullGroupList = _) : E && (l.fullOptionList = E), ge()
          }),
            vt.on(q, "mousewheel", Ae),
            vt.on(q, "mousedown", Re),
            vt.on(q, "keydown", fe),
            vt.on(q, "blur", U)
        }),
        or(function () {
          vt.off(q, "mousewheel"), vt.off(q, "mousedown"), vt.off(q, "keydown"), vt.off(q, "blur")
        })
      const we = function () {
        let E,
          _,
          te = e.className,
          Me = e.popupClassName,
          ke = e.transfer,
          Be = e.disabled,
          Ke = e.loading,
          Ue = e.filterable,
          _e = l.inited,
          Je = l.isActivated,
          Qe = l.visiblePanel,
          R = d.value,
          ot = se.value,
          wt = r.default,
          mt = r.header,
          ft = r.footer,
          lt = r.prefix
        return p(
          "div",
          {
            ref: f,
            class: [
              "vxe-select",
              te ? (u.isFunction(te) ? te({ $select: q }) : te) : "",
              ((E = {}),
              (E["size--".concat(R)] = R),
              (E["is--visivle"] = Qe),
              (E["is--disabled"] = Be),
              (E["is--filter"] = Ue),
              (E["is--loading"] = Ke),
              (E["is--active"] = Je),
              E)
            ]
          },
          [
            p("div", { class: "vxe-select-slots", ref: "hideOption" }, wt ? wt({}) : []),
            p(
              Da,
              {
                ref: h,
                clearable: e.clearable,
                placeholder: e.placeholder,
                readonly: !0,
                disabled: Be,
                type: "text",
                prefixIcon: e.prefixIcon,
                suffixIcon: Ke ? C.icon.SELECT_LOADED : Qe ? C.icon.SELECT_OPEN : C.icon.SELECT_CLOSE,
                modelValue: ot,
                onClear: ce,
                onClick: be,
                onFocus: ne,
                onBlur: y,
                onSuffixClick: be
              },
              lt
                ? {
                    prefix: function () {
                      return lt({})
                    }
                  }
                : {}
            ),
            p(Un, { to: "body", disabled: ke ? !_e : !0 }, [
              p(
                "div",
                {
                  ref: N,
                  class: [
                    "vxe-table--ignore-clear vxe-select--panel",
                    Me ? (u.isFunction(Me) ? Me({ $select: q }) : Me) : "",
                    ((_ = {}),
                    (_["size--".concat(R)] = R),
                    (_["is--transfer"] = ke),
                    (_["animat--leave"] = !Ke && l.animatVisible),
                    (_["animat--enter"] = !Ke && Qe),
                    _)
                  ],
                  placement: l.panelPlacement,
                  style: l.panelStyle
                },
                _e
                  ? [
                      Ue
                        ? p("div", { class: "vxe-select--panel-search" }, [
                            p(Da, {
                              ref: D,
                              class: "vxe-select-search--input",
                              modelValue: l.searchValue,
                              clearable: !0,
                              placeholder: C.i18n("vxe.select.search"),
                              prefixIcon: C.icon.INPUT_SEARCH,
                              "onUpdate:modelValue": k,
                              onFocus: ee,
                              onKeydown: le,
                              onChange: me,
                              onSearch: me
                            })
                          ])
                        : Ot(),
                      p("div", { class: "vxe-select--panel-wrapper" }, [
                        mt ? p("div", { class: "vxe-select--panel-header" }, mt({})) : Ot(),
                        p("div", { class: "vxe-select--panel-body" }, [
                          p("div", { ref: I, class: "vxe-select-option--wrapper" }, ie())
                        ]),
                        ft ? p("div", { class: "vxe-select--panel-footer" }, ft({})) : Ot()
                      ])
                    ]
                  : []
              )
            ])
          ]
        )
      }
      return (q.renderVN = we), Yt("$xeselect", q), q
    },
    render: function () {
      return this.renderVN()
    }
  }),
  Ei = Dt({
    name: "VxeExportPanel",
    props: { defaultOptions: Object, storeData: Object },
    setup: function (e) {
      const t = gt("$xetable", {}),
        r = t.getComputeMaps(),
        a = r.computeExportOpts,
        n = r.computePrintOpts,
        s = Ht({ isAll: !1, isIndeterminate: !1, loading: !1 }),
        o = Xe(),
        d = Xe(),
        l = Xe(),
        f = Pe(function () {
          const O = e.storeData
          return O.columns.every(function (A) {
            return A.checked
          })
        }),
        h = Pe(function () {
          const O = e.defaultOptions
          return ["html", "xml", "xlsx", "pdf"].indexOf(O.type) > -1
        }),
        D = Pe(function () {
          const O = e.storeData,
            A = e.defaultOptions
          return !A.original && A.mode === "current" && (O.isPrint || ["html", "xlsx"].indexOf(A.type) > -1)
        }),
        I = Pe(function () {
          const O = e.defaultOptions
          return !O.original && ["xlsx"].indexOf(O.type) > -1
        }),
        N = function (O) {
          const A = e.storeData,
            X = u.findTree(A.columns, function (Ce) {
              return Ce === O
            })
          if (X && X.parent) {
            const J = X.parent
            J.children &&
              J.children.length &&
              ((J.checked = J.children.every(function (Ce) {
                return Ce.checked
              })),
              (J.halfChecked =
                !J.checked &&
                J.children.some(function (Ce) {
                  return Ce.checked || Ce.halfChecked
                })),
              N(J))
          }
        },
        F = function () {
          const O = e.storeData,
            A = O.columns
          ;(s.isAll = A.every(function (X) {
            return X.disabled || X.checked
          })),
            (s.isIndeterminate =
              !s.isAll &&
              A.some(function (X) {
                return !X.disabled && (X.checked || X.halfChecked)
              }))
        },
        q = function (O) {
          const A = !O.checked
          u.eachTree([O], function (X) {
            ;(X.checked = A), (X.halfChecked = !1)
          }),
            N(O),
            F()
        },
        $ = function () {
          const O = e.storeData,
            A = !s.isAll
          u.eachTree(O.columns, function (X) {
            X.disabled || ((X.checked = A), (X.halfChecked = !1))
          }),
            (s.isAll = A),
            F()
        },
        B = function () {
          de(function () {
            const O = d.value,
              A = l.value,
              X = o.value,
              J = O || A || X
            J && J.focus()
          }),
            F()
        },
        w = function () {
          const O = e.storeData,
            A = e.defaultOptions,
            X = O.hasMerge,
            J = O.columns,
            Ce = f.value,
            ue = D.value,
            Z = u.searchTree(
              J,
              function (se) {
                return se.checked
              },
              { children: "children", mapChildren: "childNodes", original: !0 }
            )
          return Object.assign({}, A, { columns: Z, isMerge: X && ue && Ce ? A.isMerge : !1 })
        },
        x = function () {
          const O = e.storeData,
            A = n.value
          ;(O.visible = !1), t.print(Object.assign({}, A, w()))
        },
        M = function () {
          const O = e.storeData,
            A = a.value
          ;(s.loading = !0),
            t
              .exportData(Object.assign({}, A, w()))
              .then(function () {
                ;(s.loading = !1), (O.visible = !1)
              })
              .catch(function () {
                s.loading = !1
              })
        },
        L = function () {
          const O = e.storeData
          O.visible = !1
        },
        Y = function () {
          const O = e.storeData
          O.isPrint ? x() : M()
        },
        K = function () {
          const O = e.defaultOptions,
            A = e.storeData,
            X = s.isAll,
            J = s.isIndeterminate,
            Ce = A.hasTree,
            ue = A.hasMerge,
            Z = A.isPrint,
            se = A.hasColgroup,
            Oe = O.isHeader,
            Ie = [],
            z = f.value,
            ge = h.value,
            oe = D.value,
            he = I.value
          return (
            u.eachTree(A.columns, function (ve) {
              const De = Jt(ve.getTitle(), 1),
                Ne = ve.children && ve.children.length,
                $e = ve.checked,
                Te = ve.halfChecked
              Ie.push(
                p(
                  "li",
                  {
                    class: [
                      "vxe-export--panel-column-option",
                      "level--".concat(ve.level),
                      { "is--group": Ne, "is--checked": $e, "is--indeterminate": Te, "is--disabled": ve.disabled }
                    ],
                    title: De,
                    onClick: function () {
                      ve.disabled || q(ve)
                    }
                  },
                  [
                    p("span", {
                      class: [
                        "vxe-checkbox--icon",
                        Te
                          ? C.icon.TABLE_CHECKBOX_INDETERMINATE
                          : $e
                            ? C.icon.TABLE_CHECKBOX_CHECKED
                            : C.icon.TABLE_CHECKBOX_UNCHECKED
                      ]
                    }),
                    p("span", { class: "vxe-checkbox--label" }, De)
                  ]
                )
              )
            }),
            p(
              yn,
              {
                modelValue: A.visible,
                title: C.i18n(Z ? "vxe.export.printTitle" : "vxe.export.expTitle"),
                width: 660,
                mask: !0,
                lockView: !0,
                showFooter: !1,
                escClosable: !0,
                maskClosable: !0,
                loading: s.loading,
                "onUpdate:modelValue": function (ve) {
                  A.visible = ve
                },
                onShow: B
              },
              {
                default: function () {
                  return p("div", { class: "vxe-export--panel" }, [
                    p("table", { cellspacing: 0, cellpadding: 0, border: 0 }, [
                      p("tbody", [
                        [
                          Z
                            ? Ot()
                            : p("tr", [
                                p("td", C.i18n("vxe.export.expName")),
                                p("td", [
                                  p(Da, {
                                    ref: d,
                                    modelValue: O.filename,
                                    type: "text",
                                    clearable: !0,
                                    placeholder: C.i18n("vxe.export.expNamePlaceholder"),
                                    "onUpdate:modelValue": function (ve) {
                                      O.filename = ve
                                    }
                                  })
                                ])
                              ]),
                          Z
                            ? Ot()
                            : p("tr", [
                                p("td", C.i18n("vxe.export.expType")),
                                p("td", [
                                  p(wn, {
                                    modelValue: O.type,
                                    options: A.typeList.map(function (ve) {
                                      return { value: ve.value, label: C.i18n(ve.label) }
                                    }),
                                    "onUpdate:modelValue": function (ve) {
                                      O.type = ve
                                    }
                                  })
                                ])
                              ]),
                          Z || ge
                            ? p("tr", [
                                p("td", C.i18n("vxe.export.expSheetName")),
                                p("td", [
                                  p(Da, {
                                    ref: l,
                                    modelValue: O.sheetName,
                                    type: "text",
                                    clearable: !0,
                                    placeholder: C.i18n("vxe.export.expSheetNamePlaceholder"),
                                    "onUpdate:modelValue": function (ve) {
                                      O.sheetName = ve
                                    }
                                  })
                                ])
                              ])
                            : Ot(),
                          p("tr", [
                            p("td", C.i18n("vxe.export.expMode")),
                            p("td", [
                              p(wn, {
                                modelValue: O.mode,
                                options: A.modeList.map(function (ve) {
                                  return { value: ve.value, label: C.i18n(ve.label) }
                                }),
                                "onUpdate:modelValue": function (ve) {
                                  O.mode = ve
                                }
                              })
                            ])
                          ]),
                          p("tr", [
                            p("td", [C.i18n("vxe.export.expColumn")]),
                            p("td", [
                              p("div", { class: "vxe-export--panel-column" }, [
                                p("ul", { class: "vxe-export--panel-column-header" }, [
                                  p(
                                    "li",
                                    {
                                      class: [
                                        "vxe-export--panel-column-option",
                                        { "is--checked": X, "is--indeterminate": J }
                                      ],
                                      title: C.i18n("vxe.table.allTitle"),
                                      onClick: $
                                    },
                                    [
                                      p("span", {
                                        class: [
                                          "vxe-checkbox--icon",
                                          J
                                            ? C.icon.TABLE_CHECKBOX_INDETERMINATE
                                            : X
                                              ? C.icon.TABLE_CHECKBOX_CHECKED
                                              : C.icon.TABLE_CHECKBOX_UNCHECKED
                                        ]
                                      }),
                                      p("span", { class: "vxe-checkbox--label" }, C.i18n("vxe.export.expCurrentColumn"))
                                    ]
                                  )
                                ]),
                                p("ul", { class: "vxe-export--panel-column-body" }, Ie)
                              ])
                            ])
                          ]),
                          p("tr", [
                            p("td", C.i18n("vxe.export.expOpts")),
                            p("td", [
                              p("div", { class: "vxe-export--panel-option-row" }, [
                                p(Yr, {
                                  modelValue: O.isHeader,
                                  title: C.i18n("vxe.export.expHeaderTitle"),
                                  content: C.i18n("vxe.export.expOptHeader"),
                                  "onUpdate:modelValue": function (ve) {
                                    O.isHeader = ve
                                  }
                                }),
                                p(Yr, {
                                  modelValue: O.isFooter,
                                  disabled: !A.hasFooter,
                                  title: C.i18n("vxe.export.expFooterTitle"),
                                  content: C.i18n("vxe.export.expOptFooter"),
                                  "onUpdate:modelValue": function (ve) {
                                    O.isFooter = ve
                                  }
                                }),
                                p(Yr, {
                                  modelValue: O.original,
                                  title: C.i18n("vxe.export.expOriginalTitle"),
                                  content: C.i18n("vxe.export.expOptOriginal"),
                                  "onUpdate:modelValue": function (ve) {
                                    O.original = ve
                                  }
                                })
                              ]),
                              p("div", { class: "vxe-export--panel-option-row" }, [
                                p(Yr, {
                                  modelValue: Oe && se && oe ? O.isColgroup : !1,
                                  title: C.i18n("vxe.export.expColgroupTitle"),
                                  disabled: !Oe || !se || !oe,
                                  content: C.i18n("vxe.export.expOptColgroup"),
                                  "onUpdate:modelValue": function (ve) {
                                    O.isColgroup = ve
                                  }
                                }),
                                p(Yr, {
                                  modelValue: ue && oe && z ? O.isMerge : !1,
                                  title: C.i18n("vxe.export.expMergeTitle"),
                                  disabled: !ue || !oe || !z,
                                  content: C.i18n("vxe.export.expOptMerge"),
                                  "onUpdate:modelValue": function (ve) {
                                    O.isMerge = ve
                                  }
                                }),
                                Z
                                  ? Ot()
                                  : p(Yr, {
                                      modelValue: he ? O.useStyle : !1,
                                      disabled: !he,
                                      title: C.i18n("vxe.export.expUseStyleTitle"),
                                      content: C.i18n("vxe.export.expOptUseStyle"),
                                      "onUpdate:modelValue": function (ve) {
                                        O.useStyle = ve
                                      }
                                    }),
                                p(Yr, {
                                  modelValue: Ce ? O.isAllExpand : !1,
                                  disabled: !Ce,
                                  title: C.i18n("vxe.export.expAllExpandTitle"),
                                  content: C.i18n("vxe.export.expOptAllExpand"),
                                  "onUpdate:modelValue": function (ve) {
                                    O.isAllExpand = ve
                                  }
                                })
                              ])
                            ])
                          ])
                        ]
                      ])
                    ]),
                    p("div", { class: "vxe-export--panel-btns" }, [
                      p(ta, { content: C.i18n("vxe.export.expCancel"), onClick: L }),
                      p(ta, {
                        ref: o,
                        status: "primary",
                        content: C.i18n(Z ? "vxe.export.expPrint" : "vxe.export.expConfirm"),
                        onClick: Y
                      })
                    ])
                  ])
                }
              }
            )
          )
        }
      return K
    }
  }),
  jn = Dt({
    name: "VxeRadioGroup",
    props: {
      modelValue: [String, Number, Boolean],
      disabled: Boolean,
      strict: {
        type: Boolean,
        default: function () {
          return C.radio.strict
        }
      },
      size: {
        type: String,
        default: function () {
          return C.radio.size || C.size
        }
      }
    },
    emits: ["update:modelValue", "change"],
    setup: function (e, t) {
      let r = t.slots,
        a = t.emit,
        n = gt("$xeform", null),
        s = gt("$xeformiteminfo", null),
        o = u.uniqueId(),
        d = { xID: o, props: e, context: t, name: u.uniqueId("xegroup_") },
        l = {}
      nr(e)
      const f = {
        handleChecked: function (D, I) {
          a("update:modelValue", D.label),
            l.dispatchEvent("change", D),
            n && s && n.triggerItemEvent(I, s.itemConfig.field, D.label)
        }
      }
      l = {
        dispatchEvent: function (D, I, N) {
          a(D, Object.assign({ $radioGroup: d, $event: N }, I))
        }
      }
      const h = function () {
        return p("div", { class: "vxe-radio-group" }, r.default ? r.default({}) : [])
      }
      return Object.assign(d, f, { renderVN: h, dispatchEvent }), Yt("$xeradiogroup", d), h
    }
  }),
  qn = Dt({
    name: "VxeRadio",
    props: {
      modelValue: [String, Number, Boolean],
      label: { type: [String, Number, Boolean], default: null },
      title: [String, Number],
      content: [String, Number],
      disabled: Boolean,
      name: String,
      strict: {
        type: Boolean,
        default: function () {
          return C.radio.strict
        }
      },
      size: {
        type: String,
        default: function () {
          return C.radio.size || C.size
        }
      }
    },
    emits: ["update:modelValue", "change"],
    setup: function (e, t) {
      let r = t.slots,
        a = t.emit,
        n = gt("$xeform", null),
        s = gt("$xeformiteminfo", null),
        o = u.uniqueId(),
        d = { xID: o, props: e, context: t },
        l = nr(e),
        f = gt("$xeradiogroup", null),
        h = {},
        D = Pe(function () {
          return e.disabled || (f && f.props.disabled)
        }),
        I = Pe(function () {
          return f ? f.name : e.name
        }),
        N = Pe(function () {
          return f ? f.props.strict : e.strict
        }),
        F = Pe(function () {
          const x = e.modelValue,
            M = e.label
          return f ? f.props.modelValue === M : x === M
        }),
        q = function (x, M) {
          f
            ? f.handleChecked({ label: x }, M)
            : (a("update:modelValue", x),
              h.dispatchEvent("change", { label: x }, M),
              n && s && n.triggerItemEvent(M, s.itemConfig.field, x))
        },
        $ = function (x) {
          const M = D.value
          M || q(e.label, x)
        },
        B = function (x) {
          const M = D.value,
            L = N.value
          !M && !L && e.label === (f ? f.props.modelValue : e.modelValue) && q(null, x)
        }
      ;(h = {
        dispatchEvent: function (x, M, L) {
          a(x, Object.assign({ $radio: d, $event: L }, M))
        }
      }),
        Object.assign(d, h)
      const w = function () {
        let x,
          M = l.value,
          L = D.value,
          Y = I.value,
          K = F.value
        return p(
          "label",
          {
            class: [
              "vxe-radio",
              ((x = {}), (x["size--".concat(M)] = M), (x["is--checked"] = K), (x["is--disabled"] = L), x)
            ],
            title: e.title
          },
          [
            p("input", {
              class: "vxe-radio--input",
              type: "radio",
              name: Y,
              checked: K,
              disabled: L,
              onChange: $,
              onClick: B
            }),
            p("span", { class: ["vxe-radio--icon", K ? "vxe-icon-radio-checked" : "vxe-icon-radio-unchecked"] }),
            p("span", { class: "vxe-radio--label" }, r.default ? r.default({}) : zt(e.content))
          ]
        )
      }
      return (d.renderVN = w), d
    },
    render: function () {
      return this.renderVN()
    }
  }),
  Si = Dt({
    name: "VxeImportPanel",
    props: { defaultOptions: Object, storeData: Object },
    setup: function (e) {
      const t = gt("$xetable", {}),
        r = t.getComputeMaps().computeImportOpts,
        a = Ht({ loading: !1 }),
        n = Xe(),
        s = Pe(function () {
          const F = e.storeData
          return "".concat(F.filename, ".").concat(F.type)
        }),
        o = Pe(function () {
          const F = e.storeData
          return F.file && F.type
        }),
        d = Pe(function () {
          const F = e.storeData,
            q = F.type,
            $ = F.typeList
          if (q) {
            const B = u.find($, function (w) {
              return q === w.value
            })
            return B ? C.i18n(B.label) : "*.*"
          }
          return "*.".concat(
            $.map(function (w) {
              return w.value
            }).join(", *.")
          )
        }),
        l = function () {
          const F = e.storeData
          Object.assign(F, { filename: "", sheetName: "", type: "" })
        },
        f = function () {
          const F = e.storeData,
            q = e.defaultOptions
          t.readFile(q)
            .then(function ($) {
              const B = $.file
              Object.assign(F, Cu(B), { file: B })
            })
            .catch(function ($) {
              return $
            })
        },
        h = function () {
          de(function () {
            const F = n.value
            F && F.focus()
          })
        },
        D = function () {
          const F = e.storeData
          F.visible = !1
        },
        I = function () {
          const F = e.storeData,
            q = e.defaultOptions,
            $ = r.value
          ;(a.loading = !0),
            t
              .importByFile(F.file, Object.assign({}, $, q))
              .then(function () {
                ;(a.loading = !1), (F.visible = !1)
              })
              .catch(function () {
                a.loading = !1
              })
        },
        N = function () {
          const F = e.defaultOptions,
            q = e.storeData,
            $ = s.value,
            B = o.value,
            w = d.value
          return p(
            yn,
            {
              modelValue: q.visible,
              title: C.i18n("vxe.import.impTitle"),
              width: 440,
              mask: !0,
              lockView: !0,
              showFooter: !1,
              escClosable: !0,
              maskClosable: !0,
              loading: a.loading,
              "onUpdate:modelValue": function (x) {
                q.visible = x
              },
              onShow: h
            },
            {
              default: function () {
                return p("div", { class: "vxe-export--panel" }, [
                  p("table", { cellspacing: 0, cellpadding: 0, border: 0 }, [
                    p("tbody", [
                      p("tr", [
                        p("td", C.i18n("vxe.import.impFile")),
                        p("td", [
                          B
                            ? p("div", { class: "vxe-import-selected--file", title: $ }, [
                                p("span", $),
                                p("i", { class: C.icon.INPUT_CLEAR, onClick: l })
                              ])
                            : p(
                                "button",
                                { ref: n, class: "vxe-import-select--file", onClick: f },
                                C.i18n("vxe.import.impSelect")
                              )
                        ])
                      ]),
                      p("tr", [p("td", C.i18n("vxe.import.impType")), p("td", w)]),
                      p("tr", [
                        p("td", C.i18n("vxe.import.impOpts")),
                        p("td", [
                          p(
                            jn,
                            {
                              modelValue: F.mode,
                              "onUpdate:modelValue": function (x) {
                                F.mode = x
                              }
                            },
                            {
                              default: function () {
                                return q.modeList.map(function (x) {
                                  return p(qn, { label: x.value, content: C.i18n(x.label) })
                                })
                              }
                            }
                          )
                        ])
                      ])
                    ])
                  ]),
                  p("div", { class: "vxe-export--panel-btns" }, [
                    p(ta, { content: C.i18n("vxe.import.impCancel"), onClick: D }),
                    p(ta, { status: "primary", disabled: !B, content: C.i18n("vxe.import.impConfirm"), onClick: I })
                  ])
                ])
              }
            }
          )
        }
      return N
    }
  })
let Pn,
  qa,
  Dr,
  qF =
    'body{margin:0;padding: 0 1px;color:#333333;font-size:14px;font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu}body *{-webkit-box-sizing:border-box;box-sizing:border-box}.vxe-table{border-collapse:collapse;text-align:left;border-spacing:0}.vxe-table:not(.is--print){table-layout:fixed}.vxe-table,.vxe-table th,.vxe-table td,.vxe-table td{border-color:#D0D0D0;border-style:solid;border-width:0}.vxe-table.is--print{width:100%}.border--default,.border--full,.border--outer{border-top-width:1px}.border--default,.border--full,.border--outer{border-left-width:1px}.border--outer,.border--default th,.border--default td,.border--full th,.border--full td,.border--outer th,.border--inner th,.border--inner td{border-bottom-width:1px}.border--default,.border--outer,.border--full th,.border--full td{border-right-width:1px}.border--default th,.border--full th,.border--outer th{background-color:#f8f8f9}.vxe-table td>div,.vxe-table th>div{padding:.5em .4em}.col--center{text-align:center}.col--right{text-align:right}.vxe-table:not(.is--print) .col--ellipsis>div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.vxe-table--tree-node{text-align:left}.vxe-table--tree-node-wrapper{position:relative}.vxe-table--tree-icon-wrapper{position:absolute;top:50%;width:1em;height:1em;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.vxe-table--tree-unfold-icon,.vxe-table--tree-fold-icon{position:absolute;width:0;height:0;border-style:solid;border-width:.5em;border-right-color:transparent;border-bottom-color:transparent}.vxe-table--tree-unfold-icon{left:.3em;top:0;border-left-color:#939599;border-top-color:transparent}.vxe-table--tree-fold-icon{left:0;top:.3em;border-left-color:transparent;border-top-color:#939599}.vxe-table--tree-cell{display:block;padding-left:1.5em}.vxe-table input[type="checkbox"]{margin:0}.vxe-table input[type="checkbox"],.vxe-table input[type="radio"],.vxe-table input[type="checkbox"]+span,.vxe-table input[type="radio"]+span{vertical-align:middle;padding-left:0.4em}'
function hf() {
  const e = document.createElement("iframe")
  return (e.className = "vxe-table--print-frame"), e
}
function ku(e, t) {
  return new Blob([e], { type: "text/".concat(t.type, ";charset=utf-8;") })
}
function hp(e, t) {
  const r = e.style
  return [
    "<!DOCTYPE html><html>",
    "<head>",
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">',
    "<title>".concat(e.sheetName, "</title>"),
    "<style>".concat(qF, "</style>"),
    r ? "<style>".concat(r, "</style>") : "",
    "</head>",
    "<body>".concat(t, "</body>"),
    "</html>"
  ].join("")
}
const Pl = function (e) {
  const t = Object.assign({}, e)
  return (
    Pn ||
      ((Pn = document.createElement("form")),
      (qa = document.createElement("input")),
      (Pn.className = "vxe-table--file-form"),
      (qa.name = "file"),
      (qa.type = "file"),
      Pn.appendChild(qa),
      document.body.appendChild(Pn)),
    new Promise(function (r, a) {
      const n = t.types || [],
        s =
          !n.length ||
          n.some(function (o) {
            return o === "*"
          })
      ;(qa.multiple = !!t.multiple),
        (qa.accept = s ? "" : ".".concat(n.join(", ."))),
        (qa.onchange = function (o) {
          let d = o.target.files,
            l = d[0],
            f = ""
          if (!s)
            for (let h = 0; h < d.length; h++) {
              const D = Cu(d[h]).type
              if (!u.includes(n, D)) {
                f = D
                break
              }
            }
          if (!f) r({ status: !0, files: d, file: l })
          else {
            t.message !== !1 && et.modal.message({ content: C.i18n("vxe.error.notType", [f]), status: "error" })
            const I = { status: !1, files: d, file: l }
            a(I)
          }
        }),
        Pn.reset(),
        qa.click()
    })
  )
}
function gp() {
  if (Dr) {
    if (Dr.parentNode) {
      try {
        Dr.contentDocument.write("")
      } catch {}
      Dr.parentNode.removeChild(Dr)
    }
    Dr = null
  }
}
function gf() {
  Dr.parentNode || document.body.appendChild(Dr)
}
function YF() {
  requestAnimationFrame(gp)
}
function Go(e, t, r) {
  r === void 0 && (r = "")
  const a = t.beforePrintMethod
  a && (r = a({ content: r, options: t, $table: e }) || ""), (r = hp(t, r))
  const n = ku(r, t)
  Br.msie
    ? (gp(), (Dr = hf()), gf(), Dr.contentDocument.write(r), Dr.contentDocument.execCommand("print"))
    : (Dr ||
        ((Dr = hf()),
        (Dr.onload = function (s) {
          s.target.src && ((s.target.contentWindow.onafterprint = YF), s.target.contentWindow.print())
        })),
      gf(),
      (Dr.src = URL.createObjectURL(n)))
}
let $l = function (e) {
    const t = e.filename,
      r = e.type,
      a = e.content,
      n = "".concat(t, ".").concat(r)
    if (window.Blob) {
      const s = a instanceof Blob ? a : ku(u.toValueString(a), e)
      if (navigator.msSaveBlob) navigator.msSaveBlob(s, n)
      else {
        const o = URL.createObjectURL(s),
          d = document.createElement("a")
        ;(d.target = "_blank"),
          (d.download = n),
          (d.href = o),
          document.body.appendChild(d),
          d.click(),
          requestAnimationFrame(function () {
            d.parentNode && d.parentNode.removeChild(d), URL.revokeObjectURL(o)
          })
      }
      return Promise.resolve()
    }
    return Promise.reject(new Error(pu("vxe.error.notExp")))
  },
  $n,
  GF = "\uFEFF",
  fn = `\r
`
function mf(e) {
  return e.property || ["seq", "checkbox", "radio"].indexOf(e.type) > -1
}
const mp = function (e) {
    const t = []
    return (
      e.forEach(function (r) {
        r.childNodes && r.childNodes.length ? (t.push(r), t.push.apply(t, mp(r.childNodes))) : t.push(r)
      }),
      t
    )
  },
  UF = function (e) {
    let t = 1,
      r = function (o, d) {
        if ((d && ((o._level = d._level + 1), t < o._level && (t = o._level)), o.childNodes && o.childNodes.length)) {
          let l = 0
          o.childNodes.forEach(function (f) {
            r(f, o), (l += f._colSpan)
          }),
            (o._colSpan = l)
        } else o._colSpan = 1
      }
    e.forEach(function (o) {
      ;(o._level = 1), r(o)
    })
    for (var a = [], n = 0; n < t; n++) a.push([])
    const s = mp(e)
    return (
      s.forEach(function (o) {
        o.childNodes && o.childNodes.length ? (o._rowSpan = 1) : (o._rowSpan = t - o._level + 1),
          a[o._level - 1].push(o)
      }),
      a
    )
  }
function XF(e) {
  return e === !0 ? "full" : e || "default"
}
function Ln(e) {
  return e === "TRUE" || e === "true" || e === !0
}
function yl(e, t) {
  const r = e.footerFilterMethod
  return r
    ? t.filter(function (a, n) {
        return r({ items: a, $rowIndex: n })
      })
    : t
}
function KF(e, t) {
  if (t) {
    if (e.type === "seq") return "	".concat(t)
    switch (e.cellType) {
      case "string":
        if (!isNaN(t)) return "	".concat(t)
        break
      case "number":
        break
      default:
        if (t.length >= 12 && !isNaN(t)) return "	".concat(t)
        break
    }
  }
  return t
}
function An(e) {
  return /[",\s\n]/.test(e) ? '"'.concat(e.replace(/"/g, '""'), '"') : e
}
function Vr(e, t) {
  return e.getElementsByTagName(t)
}
function bf(e) {
  return "#".concat(e, "@").concat(u.uniqueId())
}
function bp(e, t) {
  return e.replace(/#\d+@\d+/g, function (r) {
    return u.hasOwnProp(t, r) ? t[r] : r
  })
}
function xf(e, t) {
  const r = bp(e, t)
  return r.replace(/^"+$/g, function (a) {
    return '"'.repeat(Math.ceil(a.length / 2))
  })
}
function xp(e, t, r) {
  let a = t.split(fn),
    n = [],
    s = []
  if (a.length) {
    const o = {},
      d = Date.now()
    a.forEach(function (l) {
      if (l) {
        const f = {}
        l = l
          .replace(/("")|(\n)/g, function (D, I) {
            const N = bf(d)
            return (
              (o[N] = I
                ? '"'
                : `
`),
              N
            )
          })
          .replace(/"(.*?)"/g, function (D, I) {
            const N = bf(d)
            return (o[N] = bp(I, o)), N
          })
        const h = l.split(r)
        s.length
          ? (h.forEach(function (D, I) {
              I < s.length && (f[s[I]] = xf(D.trim(), o))
            }),
            n.push(f))
          : (s = h.map(function (D) {
              return xf(D.trim(), o)
            }))
      }
    })
  }
  return { fields: s, rows: n }
}
function ZF(e, t) {
  return xp(e, t, ",")
}
function JF(e, t) {
  return xp(e, t, "	")
}
function QF(e, t) {
  const r = new DOMParser(),
    a = r.parseFromString(t, "text/html"),
    n = Vr(a, "body"),
    s = [],
    o = []
  if (n.length) {
    const d = Vr(n[0], "table")
    if (d.length) {
      const l = Vr(d[0], "thead")
      if (l.length) {
        u.arrayEach(Vr(l[0], "tr"), function (h) {
          u.arrayEach(Vr(h, "th"), function (D) {
            o.push(D.textContent)
          })
        })
        const f = Vr(d[0], "tbody")
        f.length &&
          u.arrayEach(Vr(f[0], "tr"), function (h) {
            const D = {}
            u.arrayEach(Vr(h, "td"), function (I, N) {
              o[N] && (D[o[N]] = I.textContent || "")
            }),
              s.push(D)
          })
      }
    }
  }
  return { fields: o, rows: s }
}
function e0(e, t) {
  const r = new DOMParser(),
    a = r.parseFromString(t, "application/xml"),
    n = Vr(a, "Worksheet"),
    s = [],
    o = []
  if (n.length) {
    const d = Vr(n[0], "Table")
    if (d.length) {
      const l = Vr(d[0], "Row")
      l.length &&
        (u.arrayEach(Vr(l[0], "Cell"), function (f) {
          o.push(f.textContent)
        }),
        u.arrayEach(l, function (f, h) {
          if (h) {
            const D = {},
              I = Vr(f, "Cell")
            u.arrayEach(I, function (N, F) {
              o[F] && (D[o[F]] = N.textContent)
            }),
              s.push(D)
          }
        }))
    }
  }
  return { fields: o, rows: s }
}
function Cf(e) {
  u.eachTree(
    e,
    function (t) {
      delete t._level, delete t._colSpan, delete t._rowSpan, delete t._children, delete t.childNodes
    },
    { children: "children" }
  )
}
function t0(e, t) {
  const r = []
  return (
    e.forEach(function (a) {
      const n = a.property
      n && r.push(n)
    }),
    t.some(function (a) {
      return r.indexOf(a) > -1
    })
  )
}
const r0 = [
    "exportData",
    "importByFile",
    "importData",
    "saveFile",
    "readFile",
    "print",
    "openImport",
    "openExport",
    "openPrint"
  ],
  a0 = {
    setupTable: function (e) {
      const t = e.props,
        r = e.reactData,
        a = e.internalData,
        n = e.getComputeMaps(),
        s = n.computeTreeOpts,
        o = n.computePrintOpts,
        d = n.computeExportOpts,
        l = n.computeImportOpts,
        f = n.computeCustomOpts,
        h = n.computeSeqOpts,
        D = n.computeRadioOpts,
        I = n.computeCheckboxOpts,
        N = n.computeColumnOpts,
        F = gt("$xegrid", null),
        q = function (z) {
          const ge = s.value,
            oe = ge.children || ge.childrenField
          return z[oe] && z[oe].length
        },
        $ = function (z, ge, oe, he) {
          const ve = h.value,
            De = ve.seqMethod || oe.seqMethod
          return De
            ? De({
                row: z,
                rowIndex: e.getRowIndex(z),
                $rowIndex: ge,
                column: oe,
                columnIndex: e.getColumnIndex(oe),
                $columnIndex: he
              })
            : e.getRowSeq(z)
        }
      function B(z, ge) {
        const oe = N.value,
          he = ge.headerExportMethod || oe.headerExportMethod
        return he ? he({ column: ge, options: z, $table: e }) : (z.original ? ge.property : ge.getTitle()) || ""
      }
      var w = function (z) {
          return u.isBoolean(z) ? (z ? "TRUE" : "FALSE") : z
        },
        x = function (z, ge, oe) {
          const he = z.isAllExpand,
            ve = z.mode,
            De = t.treeConfig,
            Ne = D.value,
            $e = I.value,
            Te = s.value,
            Ve = N.value
          if (($n || ($n = document.createElement("div")), De)) {
            const W = Te.children || Te.childrenField,
              ce = [],
              ye = new Map()
            return (
              u.eachTree(
                oe,
                function (Ae, Re, ae, fe, U, G) {
                  const ne = Ae._row || Ae,
                    y = U && U._row ? U._row : U
                  if (he || !y || (ye.has(y) && e.isTreeExpandByRow(y))) {
                    const k = q(ne),
                      ee = { _row: ne, _level: G.length - 1, _hasChild: k, _expand: k && e.isTreeExpandByRow(ne) }
                    ge.forEach(function (le, me) {
                      let be = "",
                        Le = le.editRender || le.cellRender,
                        j = le.exportMethod
                      if (!j && Le && Le.name) {
                        const H = et.renderer.get(Le.name)
                        H && (j = H.exportMethod)
                      }
                      if ((j || (j = Ve.exportMethod), j)) be = j({ $table: e, row: ne, column: le, options: z })
                      else
                        switch (le.type) {
                          case "seq":
                            be =
                              ve === "all"
                                ? fe
                                    .map(function (we, E) {
                                      return E % 2 === 0 ? Number(we) + 1 : "."
                                    })
                                    .join("")
                                : $(ne, Re, le, me)
                            break
                          case "checkbox":
                            ;(be = w(e.isCheckedByCheckboxRow(ne))),
                              (ee._checkboxLabel = $e.labelField ? u.get(ne, $e.labelField) : ""),
                              (ee._checkboxDisabled = $e.checkMethod && !$e.checkMethod({ row: ne }))
                            break
                          case "radio":
                            ;(be = w(e.isCheckedByRadioRow(ne))),
                              (ee._radioLabel = Ne.labelField ? u.get(ne, Ne.labelField) : ""),
                              (ee._radioDisabled = Ne.checkMethod && !Ne.checkMethod({ row: ne }))
                            break
                          default:
                            if (z.original) be = pa(ne, le)
                            else if (((be = e.getCellLabel(ne, le)), le.type === "html"))
                              ($n.innerHTML = be), (be = $n.innerText.trim())
                            else {
                              const ie = e.getCell(ne, le)
                              ie && (be = ie.innerText.trim())
                            }
                        }
                      ee[le.id] = u.toValueString(be)
                    }),
                      ye.set(ne, 1),
                      ce.push(Object.assign(ee, ne))
                  }
                },
                { children: W }
              ),
              ce
            )
          }
          return oe.map(function (Ae, Re) {
            const ae = { _row: Ae }
            return (
              ge.forEach(function (fe, U) {
                let G = "",
                  ne = fe.editRender || fe.cellRender,
                  y = fe.exportMethod
                if (!y && ne && ne.name) {
                  const k = et.renderer.get(ne.name)
                  k && (y = k.exportMethod)
                }
                if (y) G = y({ $table: e, row: Ae, column: fe, options: z })
                else
                  switch (fe.type) {
                    case "seq":
                      G = ve === "all" ? Re + 1 : $(Ae, Re, fe, U)
                      break
                    case "checkbox":
                      ;(G = w(e.isCheckedByCheckboxRow(Ae))),
                        (ae._checkboxLabel = $e.labelField ? u.get(Ae, $e.labelField) : ""),
                        (ae._checkboxDisabled = $e.checkMethod && !$e.checkMethod({ row: Ae }))
                      break
                    case "radio":
                      ;(G = w(e.isCheckedByRadioRow(Ae))),
                        (ae._radioLabel = Ne.labelField ? u.get(Ae, Ne.labelField) : ""),
                        (ae._radioDisabled = Ne.checkMethod && !Ne.checkMethod({ row: Ae }))
                      break
                    default:
                      if (z.original) G = pa(Ae, fe)
                      else if (((G = e.getCellLabel(Ae, fe)), fe.type === "html"))
                        ($n.innerHTML = G), (G = $n.innerText.trim())
                      else {
                        const ee = e.getCell(Ae, fe)
                        ee && (G = ee.innerText.trim())
                      }
                  }
                ae[fe.id] = u.toValueString(G)
              }),
              ae
            )
          })
        },
        M = function (z) {
          let ge = z.columns,
            oe = z.dataFilterMethod,
            he = z.data
          return (
            oe &&
              (he = he.filter(function (ve, De) {
                return oe({ row: ve, $rowIndex: De })
              })),
            x(z, ge, he)
          )
        },
        L = function (z, ge, oe) {
          let he = N.value,
            ve = oe.editRender || oe.cellRender,
            De = oe.footerExportMethod
          if (!De && ve && ve.name) {
            const Ne = et.renderer.get(ve.name)
            Ne && (De = Ne.footerExportMethod)
          }
          De || (De = he.footerExportMethod)
          const $e = e.getVTColumnIndex(oe),
            Te = De
              ? De({ $table: e, items: ge, itemIndex: $e, _columnIndex: $e, column: oe, options: z })
              : u.toValueString(ge[$e])
          return Te
        },
        Y = function (z, ge, oe) {
          let he = GF
          if (
            (z.isHeader &&
              (he +=
                ge
                  .map(function (Ne) {
                    return An(B(z, Ne))
                  })
                  .join(",") + fn),
            oe.forEach(function (Ne) {
              he +=
                ge
                  .map(function ($e) {
                    return An(KF($e, Ne[$e.id]))
                  })
                  .join(",") + fn
            }),
            z.isFooter)
          ) {
            const ve = r.footerTableData,
              De = yl(z, ve)
            De.forEach(function (Ne) {
              he +=
                ge
                  .map(function ($e) {
                    return An(L(z, Ne, $e))
                  })
                  .join(",") + fn
            })
          }
          return he
        },
        K = function (z, ge, oe) {
          let he = ""
          if (
            (z.isHeader &&
              (he +=
                ge
                  .map(function (Ne) {
                    return An(B(z, Ne))
                  })
                  .join("	") + fn),
            oe.forEach(function (Ne) {
              he +=
                ge
                  .map(function ($e) {
                    return An(Ne[$e.id])
                  })
                  .join("	") + fn
            }),
            z.isFooter)
          ) {
            const ve = r.footerTableData,
              De = yl(z, ve)
            De.forEach(function (Ne) {
              he +=
                ge
                  .map(function ($e) {
                    return An(L(z, Ne, $e))
                  })
                  .join(",") + fn
            })
          }
          return he
        },
        O = function (z, ge, oe) {
          let he = z[ge],
            ve = u.isUndefined(he) || u.isNull(he) ? oe : he,
            De = ve === "ellipsis",
            Ne = ve === "title",
            $e = ve === !0 || ve === "tooltip",
            Te = Ne || $e || De,
            Ve = r.scrollXLoad,
            W = r.scrollYLoad
          return (Ve || W) && !Te && (Te = !0), Te
        },
        A = function (z, ge, oe) {
          const he = t.id,
            ve = t.border,
            De = t.treeConfig,
            Ne = t.headerAlign,
            $e = t.align,
            Te = t.footerAlign,
            Ve = t.showOverflow,
            W = t.showHeaderOverflow,
            ce = r.isAllSelected,
            ye = r.isIndeterminate,
            Ae = r.mergeList,
            Re = s.value,
            ae = z.print,
            fe = z.isHeader,
            U = z.isFooter,
            G = z.isColgroup,
            ne = z.isMerge,
            y = z.colgroups,
            k = z.original,
            ee = "check-all",
            le = ["vxe-table", "border--".concat(XF(ve)), ae ? "is--print" : "", fe ? "is--header" : ""].filter(
              function (H) {
                return H
              }
            ),
            me = [
              '<table class="'.concat(le.join(" "), '" border="0" cellspacing="0" cellpadding="0">'),
              "<colgroup>".concat(
                ge
                  .map(function (H) {
                    return '<col style="width:'.concat(H.renderWidth, 'px">')
                  })
                  .join(""),
                "</colgroup>"
              )
            ]
          if (
            (fe &&
              (me.push("<thead>"),
              G && !k
                ? y.forEach(function (H) {
                    me.push(
                      "<tr>".concat(
                        H.map(function (ie) {
                          let we = ie.headerAlign || ie.align || Ne || $e,
                            E = O(ie, "showHeaderOverflow", W) ? ["col--ellipsis"] : [],
                            _ = B(z, ie),
                            te = 0,
                            Me = 0
                          u.eachTree(
                            [ie],
                            function (Be) {
                              ;(!Be.childNodes || !ie.childNodes.length) && Me++, (te += Be.renderWidth)
                            },
                            { children: "childNodes" }
                          )
                          const ke = te - Me
                          return (
                            we && E.push("col--".concat(we)),
                            ie.type === "checkbox"
                              ? '<th class="'
                                  .concat(E.join(" "), '" colspan="')
                                  .concat(ie._colSpan, '" rowspan="')
                                  .concat(ie._rowSpan, '"><div ')
                                  .concat(
                                    ae ? "" : 'style="width: '.concat(ke, 'px"'),
                                    '><input type="checkbox" class="'
                                  )
                                  .concat(ee, '" ')
                                  .concat(ce ? "checked" : "", "><span>")
                                  .concat(_, "</span></div></th>")
                              : '<th class="'
                                  .concat(E.join(" "), '" colspan="')
                                  .concat(ie._colSpan, '" rowspan="')
                                  .concat(ie._rowSpan, '" title="')
                                  .concat(_, '"><div ')
                                  .concat(ae ? "" : 'style="width: '.concat(ke, 'px"'), "><span>")
                                  .concat(Jt(_, !0), "</span></div></th>")
                          )
                        }).join(""),
                        "</tr>"
                      )
                    )
                  })
                : me.push(
                    "<tr>".concat(
                      ge
                        .map(function (H) {
                          const ie = H.headerAlign || H.align || Ne || $e,
                            we = O(H, "showHeaderOverflow", W) ? ["col--ellipsis"] : [],
                            E = B(z, H)
                          return (
                            ie && we.push("col--".concat(ie)),
                            H.type === "checkbox"
                              ? '<th class="'
                                  .concat(we.join(" "), '"><div ')
                                  .concat(
                                    ae ? "" : 'style="width: '.concat(H.renderWidth, 'px"'),
                                    '><input type="checkbox" class="'
                                  )
                                  .concat(ee, '" ')
                                  .concat(ce ? "checked" : "", "><span>")
                                  .concat(E, "</span></div></th>")
                              : '<th class="'
                                  .concat(we.join(" "), '" title="')
                                  .concat(E, '"><div ')
                                  .concat(ae ? "" : 'style="width: '.concat(H.renderWidth, 'px"'), "><span>")
                                  .concat(Jt(E, !0), "</span></div></th>")
                          )
                        })
                        .join(""),
                      "</tr>"
                    )
                  ),
              me.push("</thead>")),
            oe.length &&
              (me.push("<tbody>"),
              De
                ? oe.forEach(function (H) {
                    me.push(
                      "<tr>" +
                        ge
                          .map(function (ie) {
                            const we = ie.align || $e,
                              E = O(ie, "showOverflow", Ve) ? ["col--ellipsis"] : [],
                              _ = H[ie.id]
                            if ((we && E.push("col--".concat(we)), ie.treeNode)) {
                              let te = ""
                              return (
                                H._hasChild &&
                                  (te = '<i class="'.concat(
                                    H._expand ? "vxe-table--tree-fold-icon" : "vxe-table--tree-unfold-icon",
                                    '"></i>'
                                  )),
                                E.push("vxe-table--tree-node"),
                                ie.type === "radio"
                                  ? '<td class="'
                                      .concat(E.join(" "), '" title="')
                                      .concat(_, '"><div ')
                                      .concat(
                                        ae ? "" : 'style="width: '.concat(ie.renderWidth, 'px"'),
                                        '><div class="vxe-table--tree-node-wrapper" style="padding-left: '
                                      )
                                      .concat(H._level * Re.indent, 'px"><div class="vxe-table--tree-icon-wrapper">')
                                      .concat(
                                        te,
                                        '</div><div class="vxe-table--tree-cell"><input type="radio" name="radio_'
                                      )
                                      .concat(he, '" ')
                                      .concat(H._radioDisabled ? "disabled " : "")
                                      .concat(Ln(_) ? "checked" : "", "><span>")
                                      .concat(H._radioLabel, "</span></div></div></div></td>")
                                  : ie.type === "checkbox"
                                    ? '<td class="'
                                        .concat(E.join(" "), '" title="')
                                        .concat(_, '"><div ')
                                        .concat(
                                          ae ? "" : 'style="width: '.concat(ie.renderWidth, 'px"'),
                                          '><div class="vxe-table--tree-node-wrapper" style="padding-left: '
                                        )
                                        .concat(H._level * Re.indent, 'px"><div class="vxe-table--tree-icon-wrapper">')
                                        .concat(te, '</div><div class="vxe-table--tree-cell"><input type="checkbox" ')
                                        .concat(H._checkboxDisabled ? "disabled " : "")
                                        .concat(Ln(_) ? "checked" : "", "><span>")
                                        .concat(H._checkboxLabel, "</span></div></div></div></td>")
                                    : '<td class="'
                                        .concat(E.join(" "), '" title="')
                                        .concat(_, '"><div ')
                                        .concat(
                                          ae ? "" : 'style="width: '.concat(ie.renderWidth, 'px"'),
                                          '><div class="vxe-table--tree-node-wrapper" style="padding-left: '
                                        )
                                        .concat(H._level * Re.indent, 'px"><div class="vxe-table--tree-icon-wrapper">')
                                        .concat(te, '</div><div class="vxe-table--tree-cell">')
                                        .concat(_, "</div></div></div></td>")
                              )
                            }
                            return ie.type === "radio"
                              ? '<td class="'
                                  .concat(E.join(" "), '"><div ')
                                  .concat(
                                    ae ? "" : 'style="width: '.concat(ie.renderWidth, 'px"'),
                                    '><input type="radio" name="radio_'
                                  )
                                  .concat(he, '" ')
                                  .concat(H._radioDisabled ? "disabled " : "")
                                  .concat(Ln(_) ? "checked" : "", "><span>")
                                  .concat(H._radioLabel, "</span></div></td>")
                              : ie.type === "checkbox"
                                ? '<td class="'
                                    .concat(E.join(" "), '"><div ')
                                    .concat(
                                      ae ? "" : 'style="width: '.concat(ie.renderWidth, 'px"'),
                                      '><input type="checkbox" '
                                    )
                                    .concat(H._checkboxDisabled ? "disabled " : "")
                                    .concat(Ln(_) ? "checked" : "", "><span>")
                                    .concat(H._checkboxLabel, "</span></div></td>")
                                : '<td class="'
                                    .concat(E.join(" "), '" title="')
                                    .concat(_, '"><div ')
                                    .concat(ae ? "" : 'style="width: '.concat(ie.renderWidth, 'px"'), ">")
                                    .concat(Jt(_, !0), "</div></td>")
                          })
                          .join("") +
                        "</tr>"
                    )
                  })
                : oe.forEach(function (H) {
                    me.push(
                      "<tr>" +
                        ge
                          .map(function (ie) {
                            let we = ie.align || $e,
                              E = O(ie, "showOverflow", Ve) ? ["col--ellipsis"] : [],
                              _ = H[ie.id],
                              te = 1,
                              Me = 1
                            if (ne && Ae.length) {
                              const ke = e.getVTRowIndex(H._row),
                                Be = e.getVTColumnIndex(ie),
                                Ke = _d(Ae, ke, Be)
                              if (Ke) {
                                const Ue = Ke.rowspan,
                                  _e = Ke.colspan
                                if (!Ue || !_e) return ""
                                Ue > 1 && (te = Ue), _e > 1 && (Me = _e)
                              }
                            }
                            return (
                              we && E.push("col--".concat(we)),
                              ie.type === "radio"
                                ? '<td class="'
                                    .concat(E.join(" "), '" rowspan="')
                                    .concat(te, '" colspan="')
                                    .concat(Me, '"><div ')
                                    .concat(
                                      ae ? "" : 'style="width: '.concat(ie.renderWidth, 'px"'),
                                      '><input type="radio" name="radio_'
                                    )
                                    .concat(he, '" ')
                                    .concat(H._radioDisabled ? "disabled " : "")
                                    .concat(Ln(_) ? "checked" : "", "><span>")
                                    .concat(H._radioLabel, "</span></div></td>")
                                : ie.type === "checkbox"
                                  ? '<td class="'
                                      .concat(E.join(" "), '" rowspan="')
                                      .concat(te, '" colspan="')
                                      .concat(Me, '"><div ')
                                      .concat(
                                        ae ? "" : 'style="width: '.concat(ie.renderWidth, 'px"'),
                                        '><input type="checkbox" '
                                      )
                                      .concat(H._checkboxDisabled ? "disabled " : "")
                                      .concat(Ln(_) ? "checked" : "", "><span>")
                                      .concat(H._checkboxLabel, "</span></div></td>")
                                  : '<td class="'
                                      .concat(E.join(" "), '" rowspan="')
                                      .concat(te, '" colspan="')
                                      .concat(Me, '" title="')
                                      .concat(_, '"><div ')
                                      .concat(ae ? "" : 'style="width: '.concat(ie.renderWidth, 'px"'), ">")
                                      .concat(Jt(_, !0), "</div></td>")
                            )
                          })
                          .join("") +
                        "</tr>"
                    )
                  }),
              me.push("</tbody>")),
            U)
          ) {
            const be = r.footerTableData,
              Le = yl(z, be)
            Le.length &&
              (me.push("<tfoot>"),
              Le.forEach(function (H) {
                me.push(
                  "<tr>".concat(
                    ge
                      .map(function (ie) {
                        const we = ie.footerAlign || ie.align || Te || $e,
                          E = O(ie, "showOverflow", Ve) ? ["col--ellipsis"] : [],
                          _ = L(z, H, ie)
                        return (
                          we && E.push("col--".concat(we)),
                          '<td class="'
                            .concat(E.join(" "), '" title="')
                            .concat(_, '"><div ')
                            .concat(ae ? "" : 'style="width: '.concat(ie.renderWidth, 'px"'), ">")
                            .concat(Jt(_, !0), "</div></td>")
                        )
                      })
                      .join(""),
                    "</tr>"
                  )
                )
              }),
              me.push("</tfoot>"))
          }
          const j =
            !ce && ye
              ? '<script>(function(){var a=document.querySelector(".'.concat(
                  ee,
                  '");if(a){a.indeterminate=true}})()</script>'
                )
              : ""
          return me.push("</table>", j), ae ? me.join("") : hp(z, me.join(""))
        },
        X = function (z, ge, oe) {
          let he = [
            '<?xml version="1.0"?>',
            '<?mso-application progid="Excel.Sheet"?>',
            '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40">',
            '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">',
            "<Version>16.00</Version>",
            "</DocumentProperties>",
            '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">',
            "<WindowHeight>7920</WindowHeight>",
            "<WindowWidth>21570</WindowWidth>",
            "<WindowTopX>32767</WindowTopX>",
            "<WindowTopY>32767</WindowTopY>",
            "<ProtectStructure>False</ProtectStructure>",
            "<ProtectWindows>False</ProtectWindows>",
            "</ExcelWorkbook>",
            '<Worksheet ss:Name="'.concat(z.sheetName, '">'),
            "<Table>",
            ge
              .map(function (Ne) {
                return '<Column ss:Width="'.concat(Ne.renderWidth, '"/>')
              })
              .join("")
          ].join("")
          if (
            (z.isHeader &&
              (he += "<Row>".concat(
                ge
                  .map(function (Ne) {
                    return '<Cell><Data ss:Type="String">'.concat(B(z, Ne), "</Data></Cell>")
                  })
                  .join(""),
                "</Row>"
              )),
            oe.forEach(function (Ne) {
              he +=
                "<Row>" +
                ge
                  .map(function ($e) {
                    return '<Cell><Data ss:Type="String">'.concat(Ne[$e.id], "</Data></Cell>")
                  })
                  .join("") +
                "</Row>"
            }),
            z.isFooter)
          ) {
            const ve = r.footerTableData,
              De = yl(z, ve)
            De.forEach(function (Ne) {
              he += "<Row>".concat(
                ge
                  .map(function ($e) {
                    return '<Cell><Data ss:Type="String">'.concat(L(z, Ne, $e), "</Data></Cell>")
                  })
                  .join(""),
                "</Row>"
              )
            })
          }
          return "".concat(he, "</Table></Worksheet></Workbook>")
        },
        J = function (z, ge, oe) {
          if (ge.length)
            switch (z.type) {
              case "csv":
                return Y(z, ge, oe)
              case "txt":
                return K(z, ge, oe)
              case "html":
                return A(z, ge, oe)
              case "xml":
                return X(z, ge, oe)
            }
          return ""
        },
        Ce = function (z, ge) {
          const oe = z.filename,
            he = z.type,
            ve = z.download
          if (!ve) {
            const De = ku(ge, z)
            return Promise.resolve({ type: he, content: ge, blob: De })
          }
          $l({ filename: oe, type: he, content: ge }).then(function () {
            z.message !== !1 && et.modal.message({ content: C.i18n("vxe.table.expSuccess"), status: "success" })
          })
        },
        ue = function (z) {
          const ge = z.remote,
            oe = z.columns,
            he = z.colgroups,
            ve = z.exportMethod,
            De = z.afterExportMethod
          return new Promise(function (Ne) {
            if (ge) {
              const $e = { options: z, $table: e, $grid: F }
              Ne(ve ? ve($e) : $e)
            } else {
              const Te = M(z)
              Ne(
                e.preventEvent(
                  null,
                  "event.export",
                  { options: z, columns: oe, colgroups: he, datas: Te },
                  function () {
                    return Ce(z, J(z, oe, Te))
                  }
                )
              )
            }
          })
            .then(function (Ne) {
              return (
                Cf(oe),
                z.print || (De && De({ status: !0, options: z, $table: e, $grid: F })),
                Object.assign({ status: !0 }, Ne)
              )
            })
            .catch(function () {
              Cf(oe), z.print || (De && De({ status: !1, options: z, $table: e, $grid: F }))
              const Ne = { status: !1 }
              return Promise.reject(Ne)
            })
        },
        Z = function (z, ge) {
          let oe = a.tableFullColumn,
            he = a._importResolve,
            ve = a._importReject,
            De = { fields: [], rows: [] }
          switch (ge.type) {
            case "csv":
              De = ZF(oe, z)
              break
            case "txt":
              De = JF(oe, z)
              break
            case "html":
              De = QF(oe, z)
              break
            case "xml":
              De = e0(oe, z)
              break
          }
          const Ne = De.fields,
            $e = De.rows,
            Te = t0(oe, Ne)
          Te
            ? e.createData($e).then(function (Ve) {
                let W
                return (
                  ge.mode === "insert" ? (W = e.insert(Ve)) : (W = e.reloadData(Ve)),
                  ge.message !== !1 &&
                    et.modal.message({ content: C.i18n("vxe.table.impSuccess", [$e.length]), status: "success" }),
                  W.then(function () {
                    he && he({ status: !0 })
                  })
                )
              })
            : ge.message !== !1 &&
              (et.modal.message({ content: C.i18n("vxe.error.impFields"), status: "error" }), ve && ve({ status: !1 }))
        },
        se = function (z, ge) {
          const oe = ge.importMethod,
            he = ge.afterImportMethod,
            ve = Cu(z),
            De = ve.type,
            Ne = ve.filename
          if (!oe && !u.includes(et.globalConfs.importTypes, De)) {
            ge.message !== !1 && et.modal.message({ content: C.i18n("vxe.error.notType", [De]), status: "error" })
            const $e = { status: !1 }
            return Promise.reject($e)
          }
          const Te = new Promise(function (Ve, W) {
            const ce = function (ae) {
                Ve(ae), (a._importResolve = null), (a._importReject = null)
              },
              ye = function (ae) {
                W(ae), (a._importResolve = null), (a._importReject = null)
              }
            if (((a._importResolve = ce), (a._importReject = ye), window.FileReader)) {
              const Ae = Object.assign({ mode: "insert" }, ge, { type: De, filename: Ne })
              if (Ae.remote)
                oe
                  ? Promise.resolve(oe({ file: z, options: Ae, $table: e }))
                      .then(function () {
                        ce({ status: !0 })
                      })
                      .catch(function () {
                        ce({ status: !0 })
                      })
                  : ce({ status: !0 })
              else {
                const Re = a.tableFullColumn
                e.preventEvent(null, "event.import", { file: z, options: Ae, columns: Re }, function () {
                  const ae = new FileReader()
                  ;(ae.onerror = function () {
                    rr("vxe.error.notType", [De]), ye({ status: !1 })
                  }),
                    (ae.onload = function (fe) {
                      Z(fe.target.result, Ae)
                    }),
                    ae.readAsText(z, Ae.encoding || "UTF-8")
                })
              }
            } else ce({ status: !0 })
          })
          return Te.then(function () {
            he && he({ status: !0, options: ge, $table: e })
          }).catch(function (Ve) {
            return he && he({ status: !1, options: ge, $table: e }), Promise.reject(Ve)
          })
        },
        Oe = function (z, ge) {
          const oe = t.treeConfig,
            he = t.showHeader,
            ve = t.showFooter,
            De = r.initStore,
            Ne = r.mergeList,
            $e = r.isGroup,
            Te = r.footerTableData,
            Ve = r.exportStore,
            W = r.exportParams,
            ce = a.collectColumn,
            ye = oe,
            Ae = f.value,
            Re = e.getCheckboxRecords(),
            ae = !!Te.length,
            fe = !ye && Ne.length,
            U = Object.assign({ message: !0, isHeader: he, isFooter: ve }, z),
            G = U.types || et.globalConfs.exportTypes,
            ne = U.modes,
            y = Ae.checkMethod,
            k = ce.slice(0),
            ee = U.columns,
            le = G.map(function (be) {
              return { value: be, label: "vxe.export.types.".concat(be) }
            }),
            me = ne.map(function (be) {
              return { value: be, label: "vxe.export.modes.".concat(be) }
            })
          return (
            u.eachTree(k, function (be, Le, j, H, ie) {
              const we = be.children && be.children.length
              ;(we || mf(be)) &&
                ((be.checked = ee
                  ? ee.some(function (E) {
                      if (El(E)) return be === E
                      if (u.isString(E)) return be.field === E
                      const _ = E.id || E.colId,
                        te = E.type,
                        Me = E.property || E.field
                      return _
                        ? be.id === _
                        : Me && te
                          ? be.property === Me && be.type === te
                          : Me
                            ? be.property === Me
                            : te
                              ? be.type === te
                              : !1
                    })
                  : be.visible),
                (be.halfChecked = !1),
                (be.disabled = (ie && ie.disabled) || (y ? !y({ column: be }) : !1)))
            }),
            Object.assign(Ve, {
              columns: k,
              typeList: le,
              modeList: me,
              hasFooter: ae,
              hasMerge: fe,
              hasTree: ye,
              isPrint: ge,
              hasColgroup: $e,
              visible: !0
            }),
            Object.assign(W, { mode: Re.length ? "selected" : "current" }, U),
            ne.indexOf(W.mode) === -1 && (W.mode = ne[0]),
            G.indexOf(W.type) === -1 && (W.type = G[0]),
            (De.export = !0),
            de()
          )
        },
        Ie = {
          exportData: function (z) {
            let ge = t.treeConfig,
              oe = r.isGroup,
              he = r.tableGroupColumn,
              ve = a.tableFullColumn,
              De = a.afterFullData,
              Ne = d.value,
              $e = s.value,
              Te = Object.assign(
                { isHeader: !0, isFooter: !0, isColgroup: !0, download: !0, type: "csv", mode: "current" },
                Ne,
                { print: !1 },
                z
              ),
              Ve = Te.type,
              W = Te.mode,
              ce = Te.columns,
              ye = Te.original,
              Ae = Te.beforeExportMethod,
              Re = [],
              ae = ce && ce.length ? ce : null,
              fe = Te.columnFilterMethod
            !ae &&
              !fe &&
              (fe = ye
                ? function (E) {
                    const _ = E.column
                    return _.property
                  }
                : function (E) {
                    const _ = E.column
                    return mf(_)
                  }),
              ae
                ? ((Te._isCustomColumn = !0),
                  (Re = u.searchTree(
                    u.mapTree(
                      ae,
                      function (E) {
                        let _
                        if (E) {
                          if (El(E)) _ = E
                          else if (u.isString(E)) _ = e.getColumnByField(E)
                          else {
                            const te = E.id || E.colId,
                              Me = E.type,
                              ke = E.property || E.field
                            te
                              ? (_ = e.getColumnById(te))
                              : ke && Me
                                ? (_ = ve.find(function (Be) {
                                    return Be.property === ke && Be.type === Me
                                  }))
                                : ke
                                  ? (_ = e.getColumnByField(ke))
                                  : Me &&
                                    (_ = ve.find(function (Be) {
                                      return Be.type === Me
                                    }))
                          }
                          return _ || {}
                        }
                      },
                      { children: "childNodes", mapChildren: "_children" }
                    ),
                    function (E, _) {
                      return El(E) && (!fe || fe({ column: E, $columnIndex: _ }))
                    },
                    { children: "_children", mapChildren: "childNodes", original: !0 }
                  )))
                : (Re = u.searchTree(
                    oe ? he : ve,
                    function (E, _) {
                      return E.visible && (!fe || fe({ column: E, $columnIndex: _ }))
                    },
                    { children: "children", mapChildren: "childNodes", original: !0 }
                  ))
            const U = []
            if (
              (u.eachTree(
                Re,
                function (E) {
                  const _ = E.children && E.children.length
                  _ || U.push(E)
                },
                { children: "childNodes" }
              ),
              (Te.columns = U),
              (Te.colgroups = UF(Re)),
              Te.filename ||
                (Te.filename = C.i18n(Te.original ? "vxe.table.expOriginFilename" : "vxe.table.expFilename", [
                  u.toDateString(Date.now(), "yyyyMMddHHmmss")
                ])),
              Te.sheetName || (Te.sheetName = document.title),
              !Te.exportMethod && !u.includes(et.globalConfs.exportTypes, Ve))
            ) {
              const G = { status: !1 }
              return Promise.reject(G)
            }
            if ((Te.print || (Ae && Ae({ options: Te, $table: e, $grid: F })), !Te.data)) {
              if (((Te.data = De), W === "selected")) {
                const ne = e.getCheckboxRecords()
                ;["html", "pdf"].indexOf(Ve) > -1 && ge
                  ? (Te.data = u.searchTree(
                      e.getTableData().fullData,
                      function (E) {
                        return e.findRowIndexOf(ne, E) > -1
                      },
                      Object.assign({}, $e, { data: "_row" })
                    ))
                  : (Te.data = ne)
              } else if (W === "all" && F && !Te.remote) {
                const y = F.reactData,
                  k = F.getComputeMaps().computeProxyOpts,
                  ee = k.value,
                  le = ee.beforeQueryAll,
                  me = ee.afterQueryAll,
                  be = ee.ajax,
                  Le = be === void 0 ? {} : be,
                  j = ee.props,
                  H = j === void 0 ? {} : j,
                  ie = Le.queryAll
                if (ie) {
                  const we = {
                    $table: e,
                    $grid: F,
                    sort: y.sortData,
                    filters: y.filterData,
                    form: y.formData,
                    target: ie,
                    options: Te
                  }
                  return Promise.resolve((le || ie)(we))
                    .catch(function (E) {
                      return E
                    })
                    .then(function (E) {
                      return (Te.data = (H.list ? u.get(E, H.list) : E) || []), me && me(we), ue(Te)
                    })
                }
              }
            }
            return ue(Te)
          },
          importByFile: function (z, ge) {
            const oe = Object.assign({}, ge),
              he = oe.beforeImportMethod
            return he && he({ options: oe, $table: e }), se(z, oe)
          },
          importData: function (z) {
            const ge = l.value,
              oe = Object.assign({ types: et.globalConfs.importTypes }, ge, z),
              he = oe.beforeImportMethod,
              ve = oe.afterImportMethod
            return (
              he && he({ options: oe, $table: e }),
              Pl(oe)
                .catch(function (De) {
                  return ve && ve({ status: !1, options: oe, $table: e }), Promise.reject(De)
                })
                .then(function (De) {
                  const Ne = De.file
                  return se(Ne, oe)
                })
            )
          },
          saveFile: function (z) {
            return $l(z)
          },
          readFile: function (z) {
            return Pl(z)
          },
          print: function (z) {
            const ge = o.value,
              oe = Object.assign({ original: !1 }, ge, z, { type: "html", download: !1, remote: !1, print: !0 })
            return (
              oe.sheetName || (oe.sheetName = document.title),
              new Promise(function (he) {
                oe.content
                  ? he(Go(e, oe, oe.content))
                  : he(
                      Ie.exportData(oe).then(function (ve) {
                        const De = ve.content
                        return Go(e, oe, De)
                      })
                    )
              })
            )
          },
          openImport: function (z) {
            const ge = t.treeConfig,
              oe = t.importConfig,
              he = r.initStore,
              ve = r.importStore,
              De = r.importParams,
              Ne = l.value,
              $e = Object.assign({ mode: "insert", message: !0, types: et.globalConfs.importTypes }, z, Ne),
              Te = $e.types,
              Ve = !!ge
            if (Ve) {
              $e.message && et.modal.message({ content: C.i18n("vxe.error.treeNotImp"), status: "error" })
              return
            }
            oe || rr("vxe.error.reqProp", ["import-config"])
            const W = Te.map(function (ye) {
                return { value: ye, label: "vxe.export.types.".concat(ye) }
              }),
              ce = $e.modes.map(function (ye) {
                return { value: ye, label: "vxe.import.modes.".concat(ye) }
              })
            Object.assign(ve, { file: null, type: "", filename: "", modeList: ce, typeList: W, visible: !0 }),
              Object.assign(De, $e),
              (he.import = !0)
          },
          openExport: function (z) {
            const ge = d.value
            Oe(Object.assign({}, ge, z))
          },
          openPrint: function (z) {
            const ge = o.value
            Oe(Object.assign({}, ge, z), !0)
          }
        }
      return Ie
    },
    setupGrid: function (e) {
      return e.extendTableMethods(r0)
    }
  },
  Cp = function (e) {
    const t = Object.assign({}, e, { type: "html" })
    Go(null, t, t.content)
  },
  Fu = {
    ExportPanel: Ei,
    ImportPanel: Si,
    install: function (e) {
      ;(et.saveFile = $l),
        (et.readFile = Pl),
        (et.print = Cp),
        et.setup({ export: { types: { csv: 0, html: 0, xml: 0, txt: 0 } } }),
        et.hooks.add("$tableExport", a0),
        e.component(Ei.name, Ei),
        e.component(Si.name, Si)
    }
  },
  n0 = Fu
Ft.component(Ei.name, Ei)
Ft.component(Si.name, Si)
function i0(e, t) {
  let r = 0,
    a = 0,
    n = !Br.firefox && Ma(e, "vxe-checkbox--label")
  if (n) {
    const s = getComputedStyle(e)
    ;(r -= u.toNumber(s.paddingTop)), (a -= u.toNumber(s.paddingLeft))
  }
  for (; e && e !== t; )
    if (((r += e.offsetTop), (a += e.offsetLeft), (e = e.offsetParent), n)) {
      const o = getComputedStyle(e)
      ;(r -= u.toNumber(o.paddingTop)), (a -= u.toNumber(o.paddingLeft))
    }
  return { offsetTop: r, offsetLeft: a }
}
let l0 = {
    setupTable: function (e) {
      const t = e.props,
        r = e.reactData,
        a = e.internalData,
        n = e.getRefMaps().refElem,
        s = e.getComputeMaps(),
        o = s.computeEditOpts,
        d = s.computeCheckboxOpts,
        l = s.computeMouseOpts,
        f = s.computeTreeOpts
      function h(F, q, $) {
        let B = 0,
          w = [],
          x = $ > 0,
          M = $ > 0 ? $ : Math.abs($) + q.offsetHeight,
          L = r.scrollYLoad,
          Y = a.afterFullData,
          K = a.scrollYStore
        if (L) {
          const O = e.getVTRowIndex(F.row)
          x
            ? (w = Y.slice(O, O + Math.ceil(M / K.rowHeight)))
            : (w = Y.slice(O - Math.floor(M / K.rowHeight) + 1, O + 1))
        } else
          for (let A = x ? "next" : "previous"; q && B < M; ) {
            const X = e.getRowNode(q)
            X && (w.push(X.item), (B += q.offsetHeight), (q = q["".concat(A, "ElementSibling")]))
          }
        return w
      }
      const D = function (F, q) {
          const $ = q.column,
            B = q.cell
          if ($.type === "checkbox") {
            const w = n.value,
              x = a.elemStore,
              M = F.clientX,
              L = F.clientY,
              Y = x["".concat($.fixed || "main", "-body-wrapper")] || x["main-body-wrapper"],
              K = Y ? Y.value : null
            if (!K) return
            let O = K.querySelector(".vxe-table--checkbox-range"),
              A = document.onmousemove,
              X = document.onmouseup,
              J = B.parentNode,
              Ce = e.getCheckboxRecords(),
              ue = [],
              Z = 1,
              se = i0(F.target, K),
              Oe = se.offsetTop + F.offsetY,
              Ie = se.offsetLeft + F.offsetX,
              z = K.scrollTop,
              ge = J.offsetHeight,
              oe = null,
              he = !1,
              ve = 1,
              De = function (Ve, W) {
                e.dispatchEvent(
                  "checkbox-range-".concat(Ve),
                  { records: e.getCheckboxRecords(), reserves: e.getCheckboxReserveRecords() },
                  W
                )
              },
              Ne = function (Ve) {
                let W = Ve.clientX,
                  ce = Ve.clientY,
                  ye = W - M,
                  Ae = ce - L + (K.scrollTop - z),
                  Re = Math.abs(Ae),
                  ae = Math.abs(ye),
                  fe = Oe,
                  U = Ie
                Ae < Z ? ((fe += Ae), fe < Z && ((fe = Z), (Re = Oe))) : (Re = Math.min(Re, K.scrollHeight - Oe - Z)),
                  ye < Z ? ((U += ye), ae > Ie && ((U = Z), (ae = Ie))) : (ae = Math.min(ae, K.clientWidth - Ie - Z)),
                  (O.style.height = "".concat(Re, "px")),
                  (O.style.width = "".concat(ae, "px")),
                  (O.style.left = "".concat(U, "px")),
                  (O.style.top = "".concat(fe, "px")),
                  (O.style.display = "block")
                const G = h(q, J, Ae < Z ? -Re : Re)
                Re > 10 &&
                  G.length !== ue.length &&
                  ((ue = G),
                  Ve.ctrlKey
                    ? G.forEach(function (ne) {
                        e.handleSelectRow({ row: ne }, Ce.indexOf(ne) === -1)
                      })
                    : (e.setAllCheckboxRow(!1), e.handleCheckedCheckboxRow(G, !0, !1)),
                  De("change", Ve))
              },
              $e = function () {
                clearTimeout(oe), (oe = null)
              },
              Te = function (Ve) {
                $e(),
                  (oe = setTimeout(function () {
                    if (oe) {
                      const W = K.scrollLeft,
                        ce = K.scrollTop,
                        ye = K.clientHeight,
                        Ae = K.scrollHeight,
                        Re = Math.ceil((ve * 50) / ge)
                      he
                        ? ce + ye < Ae
                          ? (e.scrollTo(W, ce + Re), Te(Ve), Ne(Ve))
                          : $e()
                        : ce
                          ? (e.scrollTo(W, ce - Re), Te(Ve), Ne(Ve))
                          : $e()
                    }
                  }, 50))
              }
            pn(w, "drag--range"),
              (document.onmousemove = function (Ve) {
                Ve.preventDefault(), Ve.stopPropagation()
                const W = Ve.clientY,
                  ce = Ta(K).boundingTop
                W < ce
                  ? ((he = !1), (ve = ce - W), oe || Te(Ve))
                  : W > ce + K.clientHeight
                    ? ((he = !0), (ve = W - ce - K.clientHeight), oe || Te(Ve))
                    : oe && $e(),
                  Ne(Ve)
              }),
              (document.onmouseup = function (Ve) {
                $e(),
                  Xa(w, "drag--range"),
                  O.removeAttribute("style"),
                  (document.onmousemove = A),
                  (document.onmouseup = X),
                  De("end", Ve)
              }),
              De("start", F)
          }
        },
        I = function (F, q) {
          const $ = t.editConfig,
            B = t.checkboxConfig,
            w = t.mouseConfig,
            x = d.value,
            M = l.value,
            L = o.value
          if (w && M.area && e.handleCellAreaEvent) return e.handleCellAreaEvent(F, q)
          B && x.range && D(F, q), w && M.selected && (!$ || L.mode === "cell") && e.handleSelected(q, F)
        },
        N = {
          moveTabSelected: function (F, q, $) {
            let B = t.editConfig,
              w = a.afterFullData,
              x = a.visibleColumn,
              M = o.value,
              L,
              Y,
              K,
              O = Object.assign({}, F),
              A = e.getVTRowIndex(O.row),
              X = e.getVTColumnIndex(O.column)
            $.preventDefault(),
              q
                ? X <= 0
                  ? A > 0 && ((Y = A - 1), (L = w[Y]), (K = x.length - 1))
                  : (K = X - 1)
                : X >= x.length - 1
                  ? A < w.length - 1 && ((Y = A + 1), (L = w[Y]), (K = 0))
                  : (K = X + 1)
            const J = x[K]
            J &&
              (L ? ((O.rowIndex = Y), (O.row = L)) : (O.rowIndex = A),
              (O.columnIndex = K),
              (O.column = J),
              (O.cell = e.getCell(O.row, O.column)),
              B
                ? (M.trigger === "click" || M.trigger === "dblclick") &&
                  (M.mode === "row"
                    ? e.handleActived(O, $)
                    : e.scrollToRow(O.row, O.column).then(function () {
                        return e.handleSelected(O, $)
                      }))
                : e.scrollToRow(O.row, O.column).then(function () {
                    return e.handleSelected(O, $)
                  }))
          },
          moveCurrentRow: function (F, q, $) {
            let B = t.treeConfig,
              w = r.currentRow,
              x = a.afterFullData,
              M = f.value,
              L = M.children || M.childrenField,
              Y
            if (($.preventDefault(), w))
              if (B) {
                const K = u.findTree(
                    x,
                    function (Ce) {
                      return Ce === w
                    },
                    { children: L }
                  ),
                  O = K.index,
                  A = K.items
                F && O > 0 ? (Y = A[O - 1]) : q && O < A.length - 1 && (Y = A[O + 1])
              } else {
                const X = e.getVTRowIndex(w)
                F && X > 0 ? (Y = x[X - 1]) : q && X < x.length - 1 && (Y = x[X + 1])
              }
            else Y = x[0]
            if (Y) {
              const J = { $table: e, row: Y, rowIndex: e.getRowIndex(Y), $rowIndex: e.getVMRowIndex(Y) }
              e.scrollToRow(Y).then(function () {
                return e.triggerCurrentRowEvent($, J)
              })
            }
          },
          moveSelected: function (F, q, $, B, w, x) {
            const M = a.afterFullData,
              L = a.visibleColumn,
              Y = Object.assign({}, F),
              K = e.getVTRowIndex(Y.row),
              O = e.getVTColumnIndex(Y.column)
            x.preventDefault(),
              $ && K > 0
                ? ((Y.rowIndex = K - 1), (Y.row = M[Y.rowIndex]))
                : w && K < M.length - 1
                  ? ((Y.rowIndex = K + 1), (Y.row = M[Y.rowIndex]))
                  : q && O
                    ? ((Y.columnIndex = O - 1), (Y.column = L[Y.columnIndex]))
                    : B && O < L.length - 1 && ((Y.columnIndex = O + 1), (Y.column = L[Y.columnIndex])),
              e.scrollToRow(Y.row, Y.column).then(function () {
                ;(Y.cell = e.getCell(Y.row, Y.column)), e.handleSelected(Y, x)
              })
          },
          triggerHeaderCellMousedownEvent: function (F, q) {
            const $ = t.mouseConfig,
              B = l.value
            if ($ && B.area && e.handleHeaderCellAreaEvent) {
              const w = F.currentTarget,
                x = yt(F, w, "vxe-cell--sort").flag,
                M = yt(F, w, "vxe-cell--filter").flag
              e.handleHeaderCellAreaEvent(F, Object.assign({ cell: w, triggerSort: x, triggerFilter: M }, q))
            }
            e.focus(), e.closeMenu && e.closeMenu()
          },
          triggerCellMousedownEvent: function (F, q) {
            const $ = F.currentTarget
            ;(q.cell = $), I(F, q), e.focus(), e.closeFilter(), e.closeMenu && e.closeMenu()
          }
        }
      return N
    }
  },
  Iu = {
    install: function () {
      et.hooks.add("$tableKeyboard", l0)
    }
  },
  o0 = Iu,
  Ll = function () {
    return (
      (Ll =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      Ll.apply(this, arguments)
    )
  },
  mi = (function () {
    function e(t) {
      Object.assign(this, {
        $options: t,
        required: t.required,
        min: t.min,
        max: t.max,
        type: t.type,
        pattern: t.pattern,
        validator: t.validator,
        trigger: t.trigger,
        maxWidth: t.maxWidth
      })
    }
    return (
      Object.defineProperty(e.prototype, "content", {
        get: function () {
          return zt(this.$options.content || this.$options.message)
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "message", {
        get: function () {
          return this.content
        },
        enumerable: !1,
        configurable: !0
      }),
      e
    )
  })(),
  u0 = ["fullValidate", "validate", "clearValidate"],
  c0 = {
    setupTable: function (e) {
      let t = e.props,
        r = e.reactData,
        a = e.internalData,
        n = e.getRefMaps().refValidTooltip,
        s = e.getComputeMaps(),
        o = s.computeValidOpts,
        d = s.computeTreeOpts,
        l = s.computeEditOpts,
        f = {},
        h = {},
        D,
        I = function ($) {
          return new Promise(function (B) {
            const w = o.value
            w.autoPos === !1
              ? (e.dispatchEvent("valid-error", $, null), B())
              : e.handleActived($, { type: "valid-error", trigger: "call" }).then(function () {
                  B(h.showValidTooltip($))
                })
          })
        },
        N = function ($) {
          const B = o.value
          if (B.msgMode === "single") {
            const w = Object.keys($),
              x = $
            if (w.length) {
              const M = w[0]
              x[M] = $[M]
            }
            return x
          }
          return $
        },
        F = function ($, B, w) {
          let x = {},
            M = t.editRules,
            L = t.treeConfig,
            Y = a.afterFullData,
            K = a.visibleColumn,
            O = d.value,
            A = O.children || O.childrenField,
            X = o.value,
            J
          $ === !0 ? (J = Y) : $ && (u.isFunction($) ? (B = $) : (J = u.isArray($) ? $ : [$])),
            J || (e.getInsertRecords ? (J = e.getInsertRecords().concat(e.getUpdateRecords())) : (J = []))
          const Ce = []
          ;(a._lastCallTime = Date.now()), (D = !1), f.clearValidate()
          const ue = {}
          if (M) {
            const Z = e.getColumns(),
              se = function (Oe) {
                if (w || !D) {
                  const Ie = []
                  Z.forEach(function (z) {
                    ;(w || !D) &&
                      u.has(M, z.property) &&
                      Ie.push(
                        h.validCellRules("all", Oe, z).catch(function (ge) {
                          const oe = ge.rule,
                            he = ge.rules,
                            ve = {
                              rule: oe,
                              rules: he,
                              rowIndex: e.getRowIndex(Oe),
                              row: Oe,
                              columnIndex: e.getColumnIndex(z),
                              column: z,
                              field: z.property,
                              $table: e
                            }
                          if (
                            (x[z.property] || (x[z.property] = []),
                            (ue["".concat(Ye(e, Oe), ":").concat(z.id)] = {
                              column: z,
                              row: Oe,
                              rule: oe,
                              content: oe.content
                            }),
                            x[z.property].push(ve),
                            !w)
                          )
                            return (D = !0), Promise.reject(ve)
                        })
                      )
                  }),
                    Ce.push(Promise.all(Ie))
                }
              }
            return (
              L ? u.eachTree(J, se, { children: A }) : J.forEach(se),
              Promise.all(Ce)
                .then(function () {
                  const Oe = Object.keys(x)
                  return (
                    (r.validErrorMaps = N(ue)),
                    de().then(function () {
                      if (Oe.length) return Promise.reject(x[Oe[0]][0])
                      B && B()
                    })
                  )
                })
                .catch(function (Oe) {
                  return new Promise(function (Ie, z) {
                    const ge = function () {
                        de(function () {
                          B ? (B(x), Ie()) : C.validToReject === "obsolete" ? z(x) : Ie(x)
                        })
                      },
                      oe = function () {
                        ;(Oe.cell = e.getCell(Oe.row, Oe.column)), Vd(Oe.cell), I(Oe).then(ge)
                      }
                    if (X.autoPos === !1) ge()
                    else {
                      const he = Oe.row,
                        ve = Oe.column,
                        De = Y.indexOf(he),
                        Ne = K.indexOf(ve),
                        $e = De > 0 ? Y[De - 1] : he,
                        Te = Ne > 0 ? K[De - 1] : ve
                      e.scrollToRow($e, Te).then(oe)
                    }
                  })
                })
            )
          } else r.validErrorMaps = {}
          return de().then(function () {
            B && B()
          })
        }
      f = {
        fullValidate: function ($, B) {
          return F($, B, !0)
        },
        validate: function ($, B) {
          return F($, B)
        },
        clearValidate: function ($, B) {
          let w = r.validErrorMaps,
            x = n.value,
            M = o.value,
            L = u.isArray($) ? $ : $ ? [$] : [],
            Y = u.isArray(B)
              ? B
              : (B ? [B] : []).map(function (X) {
                  return Tr(e, X)
                }),
            K = {}
          if ((x && x.reactData.visible && x.close(), M.msgMode === "single")) return (r.validErrorMaps = {}), de()
          if (L.length && Y.length)
            (K = Object.assign({}, w)),
              L.forEach(function (X) {
                Y.forEach(function (J) {
                  const Ce = "".concat(Ye(e, X), ":").concat(J.id)
                  K[Ce] && delete K[Ce]
                })
              })
          else if (L.length) {
            const O = L.map(function (X) {
              return "".concat(Ye(e, X))
            })
            u.each(w, function (X, J) {
              O.indexOf(J.split(":")[0]) > -1 && (K[J] = X)
            })
          } else if (Y.length) {
            const A = Y.map(function (X) {
              return "".concat(X.id)
            })
            u.each(w, function (X, J) {
              A.indexOf(J.split(":")[1]) > -1 && (K[J] = X)
            })
          }
          return (r.validErrorMaps = K), de()
        }
      }
      const q = function ($, B) {
        const w = $.type,
          x = $.min,
          M = $.max,
          L = $.pattern,
          Y = w === "number",
          K = Y ? u.toNumber(B) : u.getSize(B)
        return !!(
          (Y && isNaN(B)) ||
          (!u.eqNull(x) && K < u.toNumber(x)) ||
          (!u.eqNull(M) && K > u.toNumber(M)) ||
          (L && !(u.isRegExp(L) ? L : new RegExp(L)).test(B))
        )
      }
      return (
        (h = {
          validCellRules: function ($, B, w, x) {
            const M = t.editRules,
              L = w.field,
              Y = [],
              K = []
            if (L && M) {
              const O = u.get(M, L)
              if (O) {
                const A = u.isUndefined(x) ? u.get(B, L) : x
                O.forEach(function (X) {
                  const J = X.type,
                    Ce = X.trigger,
                    ue = X.required,
                    Z = X.validator
                  if ($ === "all" || !Ce || $ === Ce)
                    if (Z) {
                      let se = {
                          cellValue: A,
                          rule: X,
                          rules: O,
                          row: B,
                          rowIndex: e.getRowIndex(B),
                          column: w,
                          columnIndex: e.getColumnIndex(w),
                          field: w.field,
                          $table: e,
                          $grid: e.xegrid
                        },
                        Oe = void 0
                      if (u.isString(Z)) {
                        const Ie = et.validators.get(Z)
                        Ie && Ie.cellValidatorMethod && (Oe = Ie.cellValidatorMethod(se))
                      } else Oe = Z(se)
                      Oe &&
                        (u.isError(Oe)
                          ? ((D = !0),
                            Y.push(new mi({ type: "custom", trigger: Ce, content: Oe.message, rule: new mi(X) })))
                          : Oe.catch &&
                            K.push(
                              Oe.catch(function (he) {
                                ;(D = !0),
                                  Y.push(
                                    new mi({
                                      type: "custom",
                                      trigger: Ce,
                                      content: he && he.message ? he.message : X.content || X.message,
                                      rule: new mi(X)
                                    })
                                  )
                              })
                            ))
                    } else {
                      let z = J === "array",
                        ge = u.isArray(A),
                        oe = !0
                      z || ge ? (oe = !ge || !A.length) : u.isString(A) ? (oe = ea(A.trim())) : (oe = ea(A)),
                        (ue ? oe || q(X, A) : !oe && q(X, A)) && ((D = !0), Y.push(new mi(X)))
                    }
                })
              }
            }
            return Promise.all(K).then(function () {
              if (Y.length) {
                const X = { rules: Y, rule: Y[0] }
                return Promise.reject(X)
              }
            })
          },
          hasCellRules: function ($, B, w) {
            const x = t.editRules,
              M = w.field
            if (M && x) {
              const L = u.get(x, M)
              return (
                L &&
                !!u.find(L, function (Y) {
                  return $ === "all" || !Y.trigger || $ === Y.trigger
                })
              )
            }
            return !1
          },
          triggerValidate: function ($) {
            const B = t.editConfig,
              w = t.editRules,
              x = r.editStore,
              M = x.actived,
              L = l.value,
              Y = o.value
            if ((w && Y.msgMode === "single" && (r.validErrorMaps = {}), B && w && M.row)) {
              const K = M.args,
                O = K.row,
                A = K.column,
                X = K.cell
              if (h.hasCellRules($, O, A))
                return h
                  .validCellRules($, O, A)
                  .then(function () {
                    L.mode === "row" && f.clearValidate(O, A)
                  })
                  .catch(function (J) {
                    const Ce = J.rule
                    if (!Ce.trigger || $ === Ce.trigger) {
                      const ue = { rule: Ce, row: O, column: A, cell: X }
                      return h.showValidTooltip(ue), Promise.reject(ue)
                    }
                    return Promise.resolve()
                  })
            }
            return Promise.resolve()
          },
          showValidTooltip: function ($) {
            let B,
              w,
              x = t.height,
              M = r.tableData,
              L = r.validStore,
              Y = r.validErrorMaps,
              K = $.rule,
              O = $.row,
              A = $.column,
              X = $.cell,
              J = o.value,
              Ce = n.value,
              ue = K.content
            return (
              (L.visible = !0),
              J.msgMode === "single"
                ? (r.validErrorMaps =
                    ((B = {}),
                    (B["".concat(Ye(e, O), ":").concat(A.id)] = { column: A, row: O, rule: K, content: ue }),
                    B))
                : (r.validErrorMaps = Object.assign(
                    {},
                    Y,
                    ((w = {}),
                    (w["".concat(Ye(e, O), ":").concat(A.id)] = { column: A, row: O, rule: K, content: ue }),
                    w)
                  )),
              e.dispatchEvent("valid-error", $, null),
              Ce && Ce && (J.message === "tooltip" || (J.message === "default" && !x && M.length < 2))
                ? Ce.open(X, ue)
                : de()
            )
          }
        }),
        Ll(Ll({}, f), h)
      )
    },
    setupGrid: function (e) {
      return e.extendTableMethods(u0)
    }
  },
  Nu = {
    install: function () {
      et.hooks.add("$tableValidator", c0)
    }
  },
  s0 = Nu
const Fo = Dt({
  name: "VxeIcon",
  props: { name: String, roll: Boolean, status: String },
  emits: ["click"],
  setup: function (e, t) {
    const r = t.emit,
      a = function (n) {
        r("click", { $event: n })
      }
    return function () {
      const n = e.name,
        s = e.roll,
        o = e.status
      return p("i", { class: ["vxe-icon-".concat(n), s || "", o ? ["theme--".concat(o)] : ""], onClick: a })
    }
  }
})
const Yi = Object.assign(Fo, {
    install: function (e) {
      e.component(Fo.name, Fo)
    }
  }),
  f0 = Yi
Ft.component(Yi.name, Yi)
let dr = function () {
  return (
    (dr =
      Object.assign ||
      function (e) {
        for (var t, r = 1, a = arguments.length; r < a; r++) {
          t = arguments[r]
          for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      }),
    dr.apply(this, arguments)
  )
}
function v0(e) {
  const t = e.$table,
    r = e.column,
    a = r.titlePrefix || r.titleHelp
  return a
    ? [
        p("i", {
          class: ["vxe-cell-title-prefix-icon", a.icon || C.icon.TABLE_TITLE_PREFIX],
          onMouseenter: function (n) {
            t.triggerHeaderTitleEvent(n, a, e)
          },
          onMouseleave: function (n) {
            t.handleTargetLeaveEvent(n)
          }
        })
      ]
    : []
}
function d0(e) {
  const t = e.$table,
    r = e.column,
    a = r.titleSuffix
  return a
    ? [
        p("i", {
          class: ["vxe-cell-title-suffix-icon", a.icon || C.icon.TABLE_TITLE_SUFFIX],
          onMouseenter: function (n) {
            t.triggerHeaderTitleEvent(n, a, e)
          },
          onMouseleave: function (n) {
            t.handleTargetLeaveEvent(n)
          }
        })
      ]
    : []
}
function Ya(e, t) {
  const r = e.$table,
    a = e.column,
    n = r.props,
    s = r.reactData,
    o = r.getComputeMaps().computeTooltipOpts,
    d = n.showHeaderOverflow,
    l = a.type,
    f = a.showHeaderOverflow,
    h = o.value,
    D = h.showAll,
    I = u.isUndefined(f) || u.isNull(f) ? d : f,
    N = I === "title",
    F = I === !0 || I === "tooltip",
    q = {}
  return (
    (N || F || D) &&
      (q.onMouseenter = function ($) {
        s._isResize || (N ? yu($.currentTarget, a) : (F || D) && r.triggerHeaderTooltipEvent($, e))
      }),
    (F || D) &&
      (q.onMouseleave = function ($) {
        s._isResize || ((F || D) && r.handleTargetLeaveEvent($))
      }),
    [
      l === "html" && u.isString(t)
        ? p("span", dr({ class: "vxe-cell--title", innerHTML: t }, q))
        : p("span", dr({ class: "vxe-cell--title" }, q), Vt(t))
    ]
  )
}
function p0(e) {
  const t = e.$table,
    r = e.column,
    a = e._columnIndex,
    n = e.items,
    s = r.slots,
    o = r.editRender,
    d = r.cellRender,
    l = o || d,
    f = s ? s.footer : null
  if (f) return t.callSlot(f, e)
  if (l) {
    const h = et.renderer.get(l.name)
    if (h && h.renderFooter) return Vt(h.renderFooter(l, e))
  }
  return [Jt(n[a], 1)]
}
function yf(e) {
  const t = e.$table,
    r = e.row,
    a = e.column
  return Jt(t.getCellLabel(r, a), 1)
}
var nt = {
    createColumn: function (e, t) {
      const r = t.type,
        a = t.sortable,
        n = t.filters,
        s = t.editRender,
        o = t.treeNode,
        d = e.props,
        l = d.editConfig,
        f = e.getComputeMaps(),
        h = f.computeEditOpts,
        D = f.computeCheckboxOpts,
        I = D.value,
        N = h.value,
        F = {
          renderHeader: nt.renderDefaultHeader,
          renderCell: o ? nt.renderTreeCell : nt.renderDefaultCell,
          renderFooter: nt.renderDefaultFooter
        }
      switch (r) {
        case "seq":
          ;(F.renderHeader = nt.renderSeqHeader), (F.renderCell = o ? nt.renderTreeIndexCell : nt.renderSeqCell)
          break
        case "radio":
          ;(F.renderHeader = nt.renderRadioHeader), (F.renderCell = o ? nt.renderTreeRadioCell : nt.renderRadioCell)
          break
        case "checkbox":
          ;(F.renderHeader = nt.renderCheckboxHeader),
            (F.renderCell = I.checkField
              ? o
                ? nt.renderTreeSelectionCellByProp
                : nt.renderCheckboxCellByProp
              : o
                ? nt.renderTreeSelectionCell
                : nt.renderCheckboxCell)
          break
        case "expand":
          ;(F.renderCell = nt.renderExpandCell), (F.renderData = nt.renderExpandData)
          break
        case "html":
          ;(F.renderCell = o ? nt.renderTreeHTMLCell : nt.renderHTMLCell),
            n && a
              ? (F.renderHeader = nt.renderSortAndFilterHeader)
              : a
                ? (F.renderHeader = nt.renderSortHeader)
                : n && (F.renderHeader = nt.renderFilterHeader)
          break
        default:
          l && s
            ? ((F.renderHeader = nt.renderEditHeader),
              (F.renderCell =
                N.mode === "cell"
                  ? o
                    ? nt.renderTreeCellEdit
                    : nt.renderCellEdit
                  : o
                    ? nt.renderTreeRowEdit
                    : nt.renderRowEdit))
            : n && a
              ? (F.renderHeader = nt.renderSortAndFilterHeader)
              : a
                ? (F.renderHeader = nt.renderSortHeader)
                : n && (F.renderHeader = nt.renderFilterHeader)
      }
      return gF(e, t, F)
    },
    renderHeaderTitle: function (e) {
      const t = e.$table,
        r = e.column,
        a = r.slots,
        n = r.editRender,
        s = r.cellRender,
        o = n || s,
        d = a ? a.header : null
      if (d) return Ya(e, t.callSlot(d, e))
      if (o) {
        const l = et.renderer.get(o.name)
        if (l && l.renderHeader) return Ya(e, Vt(l.renderHeader(o, e)))
      }
      return Ya(e, Jt(r.getTitle(), 1))
    },
    renderDefaultHeader: function (e) {
      return v0(e).concat(nt.renderHeaderTitle(e)).concat(d0(e))
    },
    renderDefaultCell: function (e) {
      const t = e.$table,
        r = e.row,
        a = e.column,
        n = a.slots,
        s = a.editRender,
        o = a.cellRender,
        d = s || o,
        l = n ? n.default : null
      if (l) return t.callSlot(l, e)
      if (d) {
        const f = s ? "renderCell" : "renderDefault",
          h = et.renderer.get(d.name),
          D = h ? h[f] : null
        if (D) return Vt(D(d, Object.assign({ $type: s ? "edit" : "cell" }, e)))
      }
      const I = t.getCellLabel(r, a),
        N = s ? s.placeholder : ""
      return [
        p(
          "span",
          { class: "vxe-cell--label" },
          s && ea(I) ? [p("span", { class: "vxe-cell--placeholder" }, Jt(zt(N), 1))] : Jt(I, 1)
        )
      ]
    },
    renderTreeCell: function (e) {
      return nt.renderTreeIcon(e, nt.renderDefaultCell(e))
    },
    renderDefaultFooter: function (e) {
      return [p("span", { class: "vxe-cell--item" }, p0(e))]
    },
    renderTreeIcon: function (e, t) {
      let r = e.$table,
        a = e.isHidden,
        n = r.reactData,
        s = r.getComputeMaps().computeTreeOpts,
        o = n.treeExpandedMaps,
        d = n.treeExpandLazyLoadedMaps,
        l = s.value,
        f = e.row,
        h = e.column,
        D = e.level,
        I = h.slots,
        N = l.indent,
        F = l.lazy,
        q = l.trigger,
        $ = l.iconLoaded,
        B = l.showIcon,
        w = l.iconOpen,
        x = l.iconClose,
        M = l.children || l.childrenField,
        L = l.hasChild || l.hasChildField,
        Y = f[M],
        K = I ? I.icon : null,
        O = !1,
        A = !1,
        X = !1,
        J = {}
      if (K) return r.callSlot(K, e)
      if (!a) {
        const Ce = Ye(r, f)
        ;(A = !!o[Ce]), F && ((X = !!d[Ce]), (O = f[L]))
      }
      return (
        (!q || q === "default") &&
          (J.onClick = function (ue) {
            ue.stopPropagation(), r.triggerTreeExpandEvent(ue, e)
          }),
        [
          p(
            "div",
            { class: ["vxe-cell--tree-node", { "is--active": A }], style: { paddingLeft: "".concat(D * N, "px") } },
            [
              B && ((Y && Y.length) || O)
                ? [
                    p("div", dr({ class: "vxe-tree--btn-wrapper" }, J), [
                      p("i", {
                        class: [
                          "vxe-tree--node-btn",
                          X
                            ? $ || C.icon.TABLE_TREE_LOADED
                            : A
                              ? w || C.icon.TABLE_TREE_OPEN
                              : x || C.icon.TABLE_TREE_CLOSE
                        ]
                      })
                    ])
                  ]
                : null,
              p("div", { class: "vxe-tree-cell" }, t)
            ]
          )
        ]
      )
    },
    renderSeqHeader: function (e) {
      const t = e.$table,
        r = e.column,
        a = r.slots,
        n = a ? a.header : null
      return Ya(e, n ? t.callSlot(n, e) : Jt(r.getTitle(), 1))
    },
    renderSeqCell: function (e) {
      const t = e.$table,
        r = e.column,
        a = t.props,
        n = a.treeConfig,
        s = t.getComputeMaps().computeSeqOpts,
        o = s.value,
        d = r.slots,
        l = d ? d.default : null
      if (l) return t.callSlot(l, e)
      const f = e.seq,
        h = o.seqMethod
      return [Jt(h ? h(e) : n ? f : (o.startIndex || 0) + f, 1)]
    },
    renderTreeIndexCell: function (e) {
      return nt.renderTreeIcon(e, nt.renderSeqCell(e))
    },
    renderRadioHeader: function (e) {
      const t = e.$table,
        r = e.column,
        a = r.slots,
        n = a ? a.header : null,
        s = a ? a.title : null
      return Ya(
        e,
        n ? t.callSlot(n, e) : [p("span", { class: "vxe-radio--label" }, s ? t.callSlot(s, e) : Jt(r.getTitle(), 1))]
      )
    },
    renderRadioCell: function (e) {
      let t = e.$table,
        r = e.column,
        a = e.isHidden,
        n = t.reactData,
        s = t.getComputeMaps().computeRadioOpts,
        o = n.selectRadioRow,
        d = s.value,
        l = r.slots,
        f = d.labelField,
        h = d.checkMethod,
        D = d.visibleMethod,
        I = e.row,
        N = l ? l.default : null,
        F = l ? l.radio : null,
        q = t.eqRow(I, o),
        $ = !D || D({ row: I }),
        B = !!h,
        w
      a ||
        ((w = {
          onClick: function (L) {
            !B && $ && (L.stopPropagation(), t.triggerRadioRowEvent(L, e))
          }
        }),
        h && (B = !h({ row: I })))
      const x = dr(dr({}, e), { checked: q, disabled: B, visible: $ })
      if (F) return t.callSlot(F, x)
      const M = []
      return (
        $ &&
          M.push(
            p("span", { class: ["vxe-radio--icon", q ? C.icon.TABLE_RADIO_CHECKED : C.icon.TABLE_RADIO_UNCHECKED] })
          ),
        (N || f) && M.push(p("span", { class: "vxe-radio--label" }, N ? t.callSlot(N, x) : u.get(I, f))),
        [p("span", dr({ class: ["vxe-cell--radio", { "is--checked": q, "is--disabled": B }] }, w), M)]
      )
    },
    renderTreeRadioCell: function (e) {
      return nt.renderTreeIcon(e, nt.renderRadioCell(e))
    },
    renderCheckboxHeader: function (e) {
      let t = e.$table,
        r = e.column,
        a = e.isHidden,
        n = t.reactData,
        s = t.getComputeMaps(),
        o = s.computeIsAllCheckboxDisabled,
        d = s.computeCheckboxOpts,
        l = n.isAllSelected,
        f = n.isIndeterminate,
        h = o.value,
        D = r.slots,
        I = D ? D.header : null,
        N = D ? D.title : null,
        F = d.value,
        q = r.getTitle(),
        $
      a ||
        ($ = {
          onClick: function (w) {
            h || (w.stopPropagation(), t.triggerCheckAllEvent(w, !l))
          }
        })
      const B = dr(dr({}, e), { checked: l, disabled: h, indeterminate: f })
      return I
        ? Ya(B, t.callSlot(I, B))
        : (F.checkStrictly ? !F.showHeader : F.showHeader === !1)
          ? Ya(B, [p("span", { class: "vxe-checkbox--label" }, N ? t.callSlot(N, B) : q)])
          : Ya(B, [
              p(
                "span",
                dr(
                  {
                    class: ["vxe-cell--checkbox", { "is--checked": l, "is--disabled": h, "is--indeterminate": f }],
                    title: C.i18n("vxe.table.allTitle")
                  },
                  $
                ),
                [
                  p("span", {
                    class: [
                      "vxe-checkbox--icon",
                      f
                        ? C.icon.TABLE_CHECKBOX_INDETERMINATE
                        : l
                          ? C.icon.TABLE_CHECKBOX_CHECKED
                          : C.icon.TABLE_CHECKBOX_UNCHECKED
                    ]
                  })
                ].concat(N || q ? [p("span", { class: "vxe-checkbox--label" }, N ? t.callSlot(N, B) : q)] : [])
              )
            ])
    },
    renderCheckboxCell: function (e) {
      let t = e.$table,
        r = e.row,
        a = e.column,
        n = e.isHidden,
        s = t.props,
        o = t.reactData,
        d = s.treeConfig,
        l = o.selectCheckboxMaps,
        f = o.treeIndeterminateMaps,
        h = t.getComputeMaps().computeCheckboxOpts,
        D = h.value,
        I = D.labelField,
        N = D.checkMethod,
        F = D.visibleMethod,
        q = a.slots,
        $ = q ? q.default : null,
        B = q ? q.checkbox : null,
        w = !1,
        x = !1,
        M = !F || F({ row: r }),
        L = !!N,
        Y
      if (!n) {
        const K = Ye(t, r)
        ;(x = !!l[K]),
          (Y = {
            onClick: function (X) {
              !L && M && (X.stopPropagation(), t.triggerCheckRowEvent(X, e, !x))
            }
          }),
          N && (L = !N({ row: r })),
          d && (w = !!f[K])
      }
      const O = dr(dr({}, e), { checked: x, disabled: L, visible: M, indeterminate: w })
      if (B) return t.callSlot(B, O)
      const A = []
      return (
        M &&
          A.push(
            p("span", {
              class: [
                "vxe-checkbox--icon",
                w
                  ? C.icon.TABLE_CHECKBOX_INDETERMINATE
                  : x
                    ? C.icon.TABLE_CHECKBOX_CHECKED
                    : C.icon.TABLE_CHECKBOX_UNCHECKED
              ]
            })
          ),
        ($ || I) && A.push(p("span", { class: "vxe-checkbox--label" }, $ ? t.callSlot($, O) : u.get(r, I))),
        [
          p(
            "span",
            dr({ class: ["vxe-cell--checkbox", { "is--checked": x, "is--disabled": L, "is--indeterminate": w }] }, Y),
            A
          )
        ]
      )
    },
    renderTreeSelectionCell: function (e) {
      return nt.renderTreeIcon(e, nt.renderCheckboxCell(e))
    },
    renderCheckboxCellByProp: function (e) {
      let t = e.$table,
        r = e.row,
        a = e.column,
        n = e.isHidden,
        s = t.props,
        o = t.reactData,
        d = s.treeConfig,
        l = o.treeIndeterminateMaps,
        f = t.getComputeMaps().computeCheckboxOpts,
        h = f.value,
        D = h.labelField,
        I = h.checkField,
        N = h.checkMethod,
        F = h.visibleMethod,
        q = h.indeterminateField || h.halfField,
        $ = a.slots,
        B = $ ? $.default : null,
        w = $ ? $.checkbox : null,
        x = !1,
        M = !1,
        L = !F || F({ row: r }),
        Y = !!N,
        K
      if (!n) {
        const O = Ye(t, r)
        ;(M = u.get(r, I)),
          (K = {
            onClick: function (J) {
              !Y && L && (J.stopPropagation(), t.triggerCheckRowEvent(J, e, !M))
            }
          }),
          N && (Y = !N({ row: r })),
          d && (x = !!l[O])
      }
      const A = dr(dr({}, e), { checked: M, disabled: Y, visible: L, indeterminate: x })
      if (w) return t.callSlot(w, A)
      const X = []
      return (
        L &&
          (X.push(
            p("span", {
              class: [
                "vxe-checkbox--icon",
                x
                  ? C.icon.TABLE_CHECKBOX_INDETERMINATE
                  : M
                    ? C.icon.TABLE_CHECKBOX_CHECKED
                    : C.icon.TABLE_CHECKBOX_UNCHECKED
              ]
            })
          ),
          (B || D) && X.push(p("span", { class: "vxe-checkbox--label" }, B ? t.callSlot(B, A) : u.get(r, D)))),
        [
          p(
            "span",
            dr(
              {
                class: [
                  "vxe-cell--checkbox",
                  { "is--checked": M, "is--disabled": Y, "is--indeterminate": q && !M ? r[q] : x }
                ]
              },
              K
            ),
            X
          )
        ]
      )
    },
    renderTreeSelectionCellByProp: function (e) {
      return nt.renderTreeIcon(e, nt.renderCheckboxCellByProp(e))
    },
    renderExpandCell: function (e) {
      let t = e.$table,
        r = e.isHidden,
        a = e.row,
        n = e.column,
        s = t.reactData,
        o = s.rowExpandedMaps,
        d = s.rowExpandLazyLoadedMaps,
        l = t.getComputeMaps().computeExpandOpts,
        f = l.value,
        h = f.lazy,
        D = f.labelField,
        I = f.iconLoaded,
        N = f.showIcon,
        F = f.iconOpen,
        q = f.iconClose,
        $ = f.visibleMethod,
        B = n.slots,
        w = B ? B.default : null,
        x = B ? B.icon : null,
        M = !1,
        L = !1
      if (x) return t.callSlot(x, e)
      if (!r) {
        const Y = Ye(t, a)
        ;(M = !!o[Y]), h && (L = !!d[Y])
      }
      return [
        N && (!$ || $(e))
          ? p(
              "span",
              {
                class: ["vxe-table--expanded", { "is--active": M }],
                onClick: function (K) {
                  K.stopPropagation(), t.triggerRowExpandEvent(K, e)
                }
              },
              [
                p("i", {
                  class: [
                    "vxe-table--expand-btn",
                    L
                      ? I || C.icon.TABLE_EXPAND_LOADED
                      : M
                        ? F || C.icon.TABLE_EXPAND_OPEN
                        : q || C.icon.TABLE_EXPAND_CLOSE
                  ]
                })
              ]
            )
          : null,
        w || D ? p("span", { class: "vxe-table--expand-label" }, w ? t.callSlot(w, e) : u.get(a, D)) : null
      ]
    },
    renderExpandData: function (e) {
      const t = e.$table,
        r = e.column,
        a = r.slots,
        n = r.contentRender,
        s = a ? a.content : null
      if (s) return t.callSlot(s, e)
      if (n) {
        const o = et.renderer.get(n.name)
        if (o && o.renderExpand) return Vt(o.renderExpand(n, e))
      }
      return []
    },
    renderHTMLCell: function (e) {
      const t = e.$table,
        r = e.column,
        a = r.slots,
        n = a ? a.default : null
      return n ? t.callSlot(n, e) : [p("span", { class: "vxe-cell--html", innerHTML: yf(e) })]
    },
    renderTreeHTMLCell: function (e) {
      return nt.renderTreeIcon(e, nt.renderHTMLCell(e))
    },
    renderSortAndFilterHeader: function (e) {
      return nt.renderDefaultHeader(e).concat(nt.renderSortIcon(e)).concat(nt.renderFilterIcon(e))
    },
    renderSortHeader: function (e) {
      return nt.renderDefaultHeader(e).concat(nt.renderSortIcon(e))
    },
    renderSortIcon: function (e) {
      const t = e.$table,
        r = e.column,
        a = t.getComputeMaps().computeSortOpts,
        n = a.value,
        s = n.showIcon,
        o = n.iconLayout,
        d = n.iconAsc,
        l = n.iconDesc,
        f = r.order
      return s
        ? [
            p("span", { class: ["vxe-cell--sort", "vxe-cell--sort-".concat(o, "-layout")] }, [
              p("i", {
                class: ["vxe-sort--asc-btn", d || C.icon.TABLE_SORT_ASC, { "sort--active": f === "asc" }],
                title: C.i18n("vxe.table.sortAsc"),
                onClick: function (h) {
                  h.stopPropagation(), t.triggerSortEvent(h, r, "asc")
                }
              }),
              p("i", {
                class: ["vxe-sort--desc-btn", l || C.icon.TABLE_SORT_DESC, { "sort--active": f === "desc" }],
                title: C.i18n("vxe.table.sortDesc"),
                onClick: function (h) {
                  h.stopPropagation(), t.triggerSortEvent(h, r, "desc")
                }
              })
            ])
          ]
        : []
    },
    renderFilterHeader: function (e) {
      return nt.renderDefaultHeader(e).concat(nt.renderFilterIcon(e))
    },
    renderFilterIcon: function (e) {
      const t = e.$table,
        r = e.column,
        a = e.hasFilter,
        n = t.reactData,
        s = n.filterStore,
        o = t.getComputeMaps().computeFilterOpts,
        d = o.value,
        l = d.showIcon,
        f = d.iconNone,
        h = d.iconMatch
      return l
        ? [
            p("span", { class: ["vxe-cell--filter", { "is--active": s.visible && s.column === r }] }, [
              p("i", {
                class: ["vxe-filter--btn", a ? h || C.icon.TABLE_FILTER_MATCH : f || C.icon.TABLE_FILTER_NONE],
                title: C.i18n("vxe.table.filter"),
                onClick: function (D) {
                  t.triggerFilterEvent && t.triggerFilterEvent(D, e.column, e)
                }
              })
            ])
          ]
        : []
    },
    renderEditHeader: function (e) {
      let t = e.$table,
        r = e.column,
        a = t.props,
        n = t.getComputeMaps().computeEditOpts,
        s = a.editConfig,
        o = a.editRules,
        d = n.value,
        l = r.sortable,
        f = r.filters,
        h = r.editRender,
        D = !1
      if (o) {
        const I = u.get(o, r.field)
        I &&
          (D = I.some(function (N) {
            return N.required
          }))
      }
      return (
        pt(s)
          ? [
              D && d.showAsterisk ? p("i", { class: "vxe-cell--required-icon" }) : null,
              pt(h) && d.showIcon ? p("i", { class: ["vxe-cell--edit-icon", d.icon || C.icon.TABLE_EDIT] }) : null
            ]
          : []
      )
        .concat(nt.renderDefaultHeader(e))
        .concat(l ? nt.renderSortIcon(e) : [])
        .concat(f ? nt.renderFilterIcon(e) : [])
    },
    renderRowEdit: function (e) {
      const t = e.$table,
        r = e.column,
        a = t.reactData,
        n = a.editStore,
        s = n.actived,
        o = r.editRender
      return nt.runRenderer(e, pt(o) && s && s.row === e.row)
    },
    renderTreeRowEdit: function (e) {
      return nt.renderTreeIcon(e, nt.renderRowEdit(e))
    },
    renderCellEdit: function (e) {
      const t = e.$table,
        r = e.column,
        a = t.reactData,
        n = a.editStore,
        s = n.actived,
        o = r.editRender
      return nt.runRenderer(e, pt(o) && s && s.row === e.row && s.column === e.column)
    },
    renderTreeCellEdit: function (e) {
      return nt.renderTreeIcon(e, nt.renderCellEdit(e))
    },
    runRenderer: function (e, t) {
      const r = e.$table,
        a = e.column,
        n = a.slots,
        s = a.editRender,
        o = a.formatter,
        d = n ? n.default : null,
        l = n ? n.edit : null,
        f = et.renderer.get(s.name)
      return t
        ? l
          ? r.callSlot(l, e)
          : f && f.renderEdit
            ? Vt(f.renderEdit(s, Object.assign({ $type: "edit" }, e)))
            : []
        : d
          ? r.callSlot(d, e)
          : o
            ? [p("span", { class: "vxe-cell--label" }, yf(e))]
            : nt.renderDefaultCell(e)
    }
  },
  yp = {
    colId: [String, Number],
    type: String,
    field: String,
    title: String,
    width: [Number, String],
    minWidth: [Number, String],
    maxWidth: [Number, String],
    resizable: { type: Boolean, default: null },
    fixed: String,
    align: String,
    headerAlign: String,
    footerAlign: String,
    showOverflow: { type: [Boolean, String], default: null },
    showHeaderOverflow: { type: [Boolean, String], default: null },
    showFooterOverflow: { type: [Boolean, String], default: null },
    className: [String, Function],
    headerClassName: [String, Function],
    footerClassName: [String, Function],
    formatter: [Function, Array, String],
    sortable: Boolean,
    sortBy: [String, Function],
    sortType: String,
    filters: { type: Array, default: null },
    filterMultiple: { type: Boolean, default: !0 },
    filterMethod: Function,
    filterResetMethod: Function,
    filterRecoverMethod: Function,
    filterRender: Object,
    treeNode: Boolean,
    visible: { type: Boolean, default: null },
    headerExportMethod: Function,
    exportMethod: Function,
    footerExportMethod: Function,
    titleHelp: Object,
    titlePrefix: Object,
    titleSuffix: Object,
    cellType: String,
    cellRender: Object,
    editRender: Object,
    contentRender: Object,
    params: Object
  }
const mn = Dt({
  name: "VxeColumn",
  props: yp,
  setup: function (e, t) {
    const r = t.slots,
      a = Xe(),
      n = gt("$xetable", {}),
      s = gt("xecolgroup", null),
      o = nt.createColumn(n, e)
    ;(o.slots = r),
      Yt("$xegrid", null),
      Hd(n, e, o),
      pr(function () {
        zd(n, a.value, o, s)
      }),
      or(function () {
        Wd(n, o)
      })
    const d = function () {
      return p("div", { ref: a })
    }
    return d
  }
})
const Pu = Object.assign(mn, {
    install: function (e) {
      e.component(mn.name, mn), e.component("VxeTableColumn", mn)
    }
  }),
  h0 = Pu
Ft.component(mn.name, mn)
Ft.component("VxeTableColumn", mn)
const bn = Dt({
  name: "VxeColgroup",
  props: yp,
  setup: function (e, t) {
    const r = t.slots,
      a = Xe(),
      n = gt("$xetable", {}),
      s = gt("xecolgroup", null),
      o = nt.createColumn(n, e),
      d = {}
    r.header && (d.header = r.header)
    const l = { column: o }
    ;(o.slots = d),
      (o.children = []),
      Yt("xecolgroup", l),
      Yt("$xegrid", null),
      Hd(n, e, o),
      pr(function () {
        zd(n, a.value, o, s)
      }),
      or(function () {
        Wd(n, o)
      })
    const f = function () {
      return p("div", { ref: a }, r.default ? r.default() : [])
    }
    return f
  }
})
const $u = Object.assign(bn, {
    install: function (e) {
      e.component(bn.name, bn), e.component("VxeTableColgroup", bn)
    }
  }),
  g0 = $u
Ft.component(bn.name, bn)
Ft.component("VxeTableColgroup", bn)
const Lu = {
    id: String,
    data: Array,
    height: [Number, String],
    minHeight: {
      type: [Number, String],
      default: function () {
        return C.table.minHeight
      }
    },
    maxHeight: [Number, String],
    resizable: {
      type: Boolean,
      default: function () {
        return C.table.resizable
      }
    },
    stripe: {
      type: Boolean,
      default: function () {
        return C.table.stripe
      }
    },
    border: {
      type: [Boolean, String],
      default: function () {
        return C.table.border
      }
    },
    round: {
      type: Boolean,
      default: function () {
        return C.table.round
      }
    },
    size: {
      type: String,
      default: function () {
        return C.table.size || C.size
      }
    },
    fit: {
      type: Boolean,
      default: function () {
        return C.table.fit
      }
    },
    loading: Boolean,
    align: {
      type: String,
      default: function () {
        return C.table.align
      }
    },
    headerAlign: {
      type: String,
      default: function () {
        return C.table.headerAlign
      }
    },
    footerAlign: {
      type: String,
      default: function () {
        return C.table.footerAlign
      }
    },
    showHeader: {
      type: Boolean,
      default: function () {
        return C.table.showHeader
      }
    },
    highlightCurrentRow: {
      type: Boolean,
      default: function () {
        return C.table.highlightCurrentRow
      }
    },
    highlightHoverRow: {
      type: Boolean,
      default: function () {
        return C.table.highlightHoverRow
      }
    },
    highlightCurrentColumn: {
      type: Boolean,
      default: function () {
        return C.table.highlightCurrentColumn
      }
    },
    highlightHoverColumn: {
      type: Boolean,
      default: function () {
        return C.table.highlightHoverColumn
      }
    },
    highlightCell: Boolean,
    showFooter: Boolean,
    footerMethod: Function,
    rowClassName: [String, Function],
    cellClassName: [String, Function],
    headerRowClassName: [String, Function],
    headerCellClassName: [String, Function],
    footerRowClassName: [String, Function],
    footerCellClassName: [String, Function],
    cellStyle: [Object, Function],
    headerCellStyle: [Object, Function],
    footerCellStyle: [Object, Function],
    rowStyle: [Object, Function],
    headerRowStyle: [Object, Function],
    footerRowStyle: [Object, Function],
    mergeCells: Array,
    mergeFooterItems: Array,
    spanMethod: Function,
    footerSpanMethod: Function,
    showOverflow: {
      type: [Boolean, String],
      default: function () {
        return C.table.showOverflow
      }
    },
    showHeaderOverflow: {
      type: [Boolean, String],
      default: function () {
        return C.table.showHeaderOverflow
      }
    },
    showFooterOverflow: {
      type: [Boolean, String],
      default: function () {
        return C.table.showFooterOverflow
      }
    },
    columnKey: Boolean,
    rowKey: Boolean,
    rowId: {
      type: String,
      default: function () {
        return C.table.rowId
      }
    },
    zIndex: Number,
    emptyText: {
      type: String,
      default: function () {
        return C.table.emptyText
      }
    },
    keepSource: {
      type: Boolean,
      default: function () {
        return C.table.keepSource
      }
    },
    autoResize: {
      type: Boolean,
      default: function () {
        return C.table.autoResize
      }
    },
    syncResize: [Boolean, String, Number],
    resizeConfig: Object,
    columnConfig: Object,
    rowConfig: Object,
    resizableConfig: Object,
    seqConfig: Object,
    sortConfig: Object,
    filterConfig: Object,
    radioConfig: Object,
    checkboxConfig: Object,
    tooltipConfig: Object,
    exportConfig: Object,
    importConfig: Object,
    printConfig: Object,
    expandConfig: Object,
    treeConfig: Object,
    menuConfig: Object,
    mouseConfig: Object,
    areaConfig: Object,
    keyboardConfig: Object,
    clipConfig: Object,
    fnrConfig: Object,
    editConfig: Object,
    validConfig: Object,
    editRules: Object,
    loadingConfig: Object,
    emptyRender: Object,
    customConfig: Object,
    scrollX: Object,
    scrollY: Object,
    animat: {
      type: Boolean,
      default: function () {
        return C.table.animat
      }
    },
    delayHover: {
      type: Number,
      default: function () {
        return C.table.delayHover
      }
    },
    params: Object
  },
  Au = [
    "update:data",
    "keydown-start",
    "keydown",
    "keydown-end",
    "paste",
    "copy",
    "cut",
    "current-change",
    "radio-change",
    "checkbox-change",
    "checkbox-all",
    "checkbox-range-start",
    "checkbox-range-change",
    "checkbox-range-end",
    "checkbox-range-select",
    "cell-click",
    "cell-dblclick",
    "cell-menu",
    "cell-mouseenter",
    "cell-mouseleave",
    "cell-selected",
    "header-cell-click",
    "header-cell-dblclick",
    "header-cell-menu",
    "footer-cell-click",
    "footer-cell-dblclick",
    "footer-cell-menu",
    "clear-merge",
    "sort-change",
    "clear-sort",
    "filter-change",
    "filter-visible",
    "clear-filter",
    "resizable-change",
    "toggle-row-expand",
    "toggle-tree-expand",
    "menu-click",
    "edit-closed",
    "edit-actived",
    "edit-activated",
    "edit-disabled",
    "valid-error",
    "scroll",
    "custom",
    "change-fnr",
    "open-fnr",
    "fnr-change",
    "fnr-find",
    "fnr-find-all",
    "fnr-replace",
    "fnr-replace-all",
    "cell-area-copy",
    "cell-area-cut",
    "cell-area-paste",
    "cell-area-merge",
    "clear-cell-area-merge",
    "header-cell-area-selection",
    "cell-area-selection-start",
    "cell-area-selection-drag",
    "cell-area-selection-end",
    "cell-area-extension-start",
    "cell-area-extension-drag",
    "cell-area-extension-end",
    "cell-area-selection-all-start",
    "cell-area-selection-all-end",
    "cell-area-arrows-start",
    "cell-area-arrows-end",
    "active-cell-change-start",
    "active-cell-change-end"
  ]
let Zt = function () {
    return (
      (Zt =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      Zt.apply(this, arguments)
    )
  },
  Al = function (e, t, r) {
    if (r || arguments.length === 2)
      for (var a = 0, n = t.length, s; a < n; a++)
        (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), (s[a] = t[a]))
    return e.concat(s || Array.prototype.slice.call(t))
  },
  m0 = Object.keys(Lu),
  wf = [
    "clearAll",
    "syncData",
    "updateData",
    "loadData",
    "reloadData",
    "reloadRow",
    "loadColumn",
    "reloadColumn",
    "getRowNode",
    "getColumnNode",
    "getRowIndex",
    "getVTRowIndex",
    "getVMRowIndex",
    "getColumnIndex",
    "getVTColumnIndex",
    "getVMColumnIndex",
    "createData",
    "createRow",
    "revertData",
    "clearData",
    "isInsertByRow",
    "isUpdateByRow",
    "getColumns",
    "getColumnById",
    "getColumnByField",
    "getTableColumn",
    "getData",
    "getCheckboxRecords",
    "getParentRow",
    "getRowSeq",
    "getRowById",
    "getRowid",
    "getTableData",
    "setColumnFixed",
    "clearColumnFixed",
    "setColumnWidth",
    "getColumnWidth",
    "hideColumn",
    "showColumn",
    "resetColumn",
    "refreshColumn",
    "refreshScroll",
    "recalculate",
    "closeTooltip",
    "isAllCheckboxChecked",
    "isAllCheckboxIndeterminate",
    "getCheckboxIndeterminateRecords",
    "setCheckboxRow",
    "isCheckedByCheckboxRow",
    "isIndeterminateByCheckboxRow",
    "toggleCheckboxRow",
    "setAllCheckboxRow",
    "getRadioReserveRecord",
    "clearRadioReserve",
    "getCheckboxReserveRecords",
    "clearCheckboxReserve",
    "toggleAllCheckboxRow",
    "clearCheckboxRow",
    "setCurrentRow",
    "isCheckedByRadioRow",
    "setRadioRow",
    "clearCurrentRow",
    "clearRadioRow",
    "getCurrentRecord",
    "getRadioRecord",
    "getCurrentColumn",
    "setCurrentColumn",
    "clearCurrentColumn",
    "setPendingRow",
    "togglePendingRow",
    "getPendingRecords",
    "clearPendingRow",
    "sort",
    "clearSort",
    "isSort",
    "getSortColumns",
    "closeFilter",
    "isFilter",
    "isActiveFilterByColumn",
    "isRowExpandLoaded",
    "clearRowExpandLoaded",
    "reloadRowExpand",
    "reloadRowExpand",
    "toggleRowExpand",
    "setAllRowExpand",
    "setRowExpand",
    "isExpandByRow",
    "isRowExpandByRow",
    "clearRowExpand",
    "clearRowExpandReserve",
    "getRowExpandRecords",
    "getTreeExpandRecords",
    "isTreeExpandLoaded",
    "clearTreeExpandLoaded",
    "reloadTreeExpand",
    "reloadTreeChilds",
    "toggleTreeExpand",
    "setAllTreeExpand",
    "setTreeExpand",
    "isTreeExpandByRow",
    "clearTreeExpand",
    "clearTreeExpandReserve",
    "getScroll",
    "scrollTo",
    "scrollToRow",
    "scrollToColumn",
    "clearScroll",
    "updateFooter",
    "updateStatus",
    "setMergeCells",
    "removeInsertRow",
    "removeMergeCells",
    "getMergeCells",
    "clearMergeCells",
    "setMergeFooterItems",
    "removeMergeFooterItems",
    "getMergeFooterItems",
    "clearMergeFooterItems",
    "openTooltip",
    "focus",
    "blur",
    "connect"
  ],
  b0 = Al(
    Al([], Au, !0),
    [
      "page-change",
      "form-submit",
      "form-submit-invalid",
      "form-reset",
      "form-collapse",
      "form-toggle-collapse",
      "proxy-query",
      "proxy-delete",
      "proxy-save",
      "toolbar-button-click",
      "toolbar-tool-click",
      "zoom"
    ],
    !1
  )
const Oi = Dt({
  name: "VxeGrid",
  props: Zt(Zt({}, Lu), {
    layouts: Array,
    columns: Array,
    pagerConfig: Object,
    proxyConfig: Object,
    toolbarConfig: Object,
    formConfig: Object,
    zoomConfig: Object,
    size: {
      type: String,
      default: function () {
        return C.grid.size || C.size
      }
    }
  }),
  emits: b0,
  setup: function (e, t) {
    const r = t.slots,
      a = t.emit,
      n = u.uniqueId(),
      s = Ff(),
      o = nr(e),
      d = Ht({
        tableLoading: !1,
        proxyInited: !1,
        isZMax: !1,
        tableData: [],
        filterData: [],
        formData: {},
        sortData: [],
        tZindex: 0,
        tablePage: { total: 0, pageSize: C.pager.pageSize || 10, currentPage: 1 }
      }),
      l = Xe(),
      f = Xe(),
      h = Xe(),
      D = Xe(),
      I = Xe(),
      N = Xe(),
      F = Xe(),
      q = Xe(),
      $ = Xe(),
      B = Xe(),
      w = function (j) {
        const H = {}
        return (
          j.forEach(function (ie) {
            H[ie] = function () {
              for (var we = [], E = 0; E < arguments.length; E++) we[E] = arguments[E]
              const _ = f.value
              if (_ && _[ie]) return _[ie].apply(_, we)
            }
          }),
          H
        )
      },
      x = w(wf)
    wf.forEach(function (j) {
      x[j] = function () {
        for (var H = [], ie = 0; ie < arguments.length; ie++) H[ie] = arguments[ie]
        const we = f.value
        if (we && we[j]) return we && we[j].apply(we, H)
      }
    })
    let M = Pe(function () {
        return Object.assign({}, C.grid.proxyConfig, e.proxyConfig)
      }),
      L = Pe(function () {
        const j = M.value
        return j.message !== !1
      }),
      Y = Pe(function () {
        return Object.assign({}, C.grid.pagerConfig, e.pagerConfig)
      }),
      K = Pe(function () {
        return Object.assign({}, C.grid.formConfig, e.formConfig)
      }),
      O = Pe(function () {
        return Object.assign({}, C.grid.toolbarConfig, e.toolbarConfig)
      }),
      A = Pe(function () {
        return Object.assign({}, C.grid.zoomConfig, e.zoomConfig)
      }),
      X = Pe(function () {
        return d.isZMax ? { zIndex: d.tZindex } : null
      }),
      J = Pe(function () {
        const j = {},
          H = e
        return (
          m0.forEach(function (ie) {
            j[ie] = H[ie]
          }),
          j
        )
      }),
      Ce = { refElem: l, refTable: f, refForm: h, refToolbar: D, refPager: I },
      ue = { computeProxyOpts: M, computePagerOpts: Y, computeFormOpts: K, computeToolbarOpts: O, computeZoomOpts: A },
      Z = {
        xID: n,
        props: e,
        context: t,
        instance: s,
        reactData: d,
        getRefMaps: function () {
          return Ce
        },
        getComputeMaps: function () {
          return ue
        }
      },
      se = {},
      Oe = Pe(function () {
        const j = e.seqConfig,
          H = e.pagerConfig,
          ie = e.loading,
          we = e.editConfig,
          E = e.proxyConfig,
          _ = d.isZMax,
          te = d.tableLoading,
          Me = d.tablePage,
          ke = d.tableData,
          Be = J.value,
          Ke = M.value,
          Ue = Y.value,
          _e = Object.assign({}, Be)
        return (
          _ && (Be.maxHeight ? (_e.maxHeight = "auto") : (_e.height = "auto")),
          E &&
            pt(Ke) &&
            ((_e.loading = ie || te),
            (_e.data = ke),
            H &&
              Ke.seq &&
              pt(Ue) &&
              (_e.seqConfig = Object.assign({}, j, { startIndex: (Me.currentPage - 1) * Me.pageSize }))),
          we && (_e.editConfig = Object.assign({}, we)),
          _e
        )
      }),
      Ie = function () {
        const j = O.value
        e.toolbarConfig &&
          pt(j) &&
          de(function () {
            const H = f.value,
              ie = D.value
            H && ie && H.connect(ie)
          })
      },
      z = function () {
        const j = d.tablePage,
          H = e.pagerConfig,
          ie = Y.value,
          we = ie.currentPage,
          E = ie.pageSize
        H && pt(ie) && (we && (j.currentPage = we), E && (j.pageSize = E))
      },
      ge = function (j) {
        const H = L.value,
          ie = f.value,
          we = ie.getCheckboxRecords()
        we.length
          ? (ie.togglePendingRow(we), x.clearCheckboxRow())
          : H && et.modal.message({ id: j, content: C.i18n("vxe.grid.selectOneRecord"), status: "warning" })
      },
      oe = function (j, H) {
        let ie = M.value,
          we = ie.props,
          E = we === void 0 ? {} : we,
          _
        return j && E.message && (_ = u.get(j, E.message)), _ || C.i18n(H)
      },
      he = function (j, H, ie) {
        const we = L.value,
          E = x.getCheckboxRecords()
        if (we) {
          if (E.length)
            return et.modal.confirm({ id: "cfm_".concat(j), content: C.i18n(H), escClosable: !0 }).then(function (_) {
              if (_ === "confirm") return ie()
            })
          et.modal.message({ id: "msg_".concat(j), content: C.i18n("vxe.grid.selectOneRecord"), status: "warning" })
        } else E.length && ie()
        return Promise.resolve()
      },
      ve = function (j) {
        const H = e.proxyConfig,
          ie = d.tablePage,
          we = j.currentPage,
          E = j.pageSize,
          _ = M.value
        ;(ie.currentPage = we),
          (ie.pageSize = E),
          se.dispatchEvent("page-change", j),
          H &&
            pt(_) &&
            se.commitProxy("query").then(function (te) {
              se.dispatchEvent("proxy-query", te, j.$event)
            })
      },
      De = function (j) {
        const H = f.value,
          ie = e.proxyConfig,
          we = H.getComputeMaps().computeSortOpts,
          E = M.value,
          _ = we.value
        _.remote &&
          ((d.sortData = j.sortList),
          ie &&
            pt(E) &&
            ((d.tablePage.currentPage = 1),
            se.commitProxy("query").then(function (te) {
              se.dispatchEvent("proxy-query", te, j.$event)
            }))),
          se.dispatchEvent("sort-change", j)
      },
      Ne = function (j) {
        const H = f.value,
          ie = e.proxyConfig,
          we = H.getComputeMaps().computeFilterOpts,
          E = M.value,
          _ = we.value
        _.remote &&
          ((d.filterData = j.filterList),
          ie &&
            pt(E) &&
            ((d.tablePage.currentPage = 1),
            se.commitProxy("query").then(function (te) {
              se.dispatchEvent("proxy-query", te, j.$event)
            }))),
          se.dispatchEvent("filter-change", j)
      },
      $e = function (j) {
        const H = e.proxyConfig,
          ie = M.value
        H &&
          pt(ie) &&
          se.commitProxy("reload").then(function (we) {
            se.dispatchEvent("proxy-query", Zt(Zt({}, we), { isReload: !0 }), j.$event)
          }),
          se.dispatchEvent("form-submit", j)
      },
      Te = function (j) {
        const H = e.proxyConfig,
          ie = M.value
        H &&
          pt(ie) &&
          se.commitProxy("reload").then(function (we) {
            se.dispatchEvent("proxy-query", Zt(Zt({}, we), { isReload: !0 }), j.$event)
          }),
          se.dispatchEvent("form-reset", j)
      },
      Ve = function (j) {
        se.dispatchEvent("form-submit-invalid", j)
      },
      W = function (j) {
        de(function () {
          return x.recalculate(!0)
        }),
          se.dispatchEvent("form-toggle-collapse", j),
          se.dispatchEvent("form-collapse", j)
      },
      ce = function (j) {
        const H = d.isZMax
        return (
          (j ? !H : H) && ((d.isZMax = !H), d.tZindex < Na() && (d.tZindex = da())),
          de()
            .then(function () {
              return x.recalculate(!0)
            })
            .then(function () {
              return d.isZMax
            })
        )
      },
      ye = function (j, H) {
        const ie = j[H]
        if (ie)
          if (u.isString(ie)) {
            if (r[ie]) return r[ie]
          } else return ie
        return null
      },
      Ae = function () {
        const j = e.formConfig,
          H = e.proxyConfig,
          ie = d.formData,
          we = M.value,
          E = K.value,
          _ = []
        if ((j && pt(E)) || r.form) {
          let te = []
          if (r.form) te = r.form({ $grid: Z })
          else if (E.items) {
            const Me = {}
            if (!E.inited) {
              E.inited = !0
              const ke = we.beforeItem
              we &&
                ke &&
                E.items.forEach(function (Be) {
                  ke({ $grid: Z, item: Be })
                })
            }
            E.items.forEach(function (Be) {
              u.each(Be.slots, function (Ke) {
                u.isFunction(Ke) || (r[Ke] && (Me[Ke] = r[Ke]))
              })
            }),
              te.push(
                p(
                  It("vxe-form"),
                  Zt(Zt({ ref: h }, Object.assign({}, E, { data: H && pt(we) && we.form ? ie : E.data })), {
                    onSubmit: $e,
                    onReset: Te,
                    onSubmitInvalid: Ve,
                    onCollapse: W
                  }),
                  Me
                )
              )
          }
          _.push(p("div", { ref: N, key: "form", class: "vxe-grid--form-wrapper" }, te))
        }
        return _
      },
      Re = function () {
        const j = e.toolbarConfig,
          H = O.value,
          ie = []
        if ((j && pt(H)) || r.toolbar) {
          let we = []
          if (r.toolbar) we = r.toolbar({ $grid: Z })
          else {
            let E = H.slots,
              _ = void 0,
              te = void 0,
              Me = {}
            E && ((_ = ye(E, "buttons")), (te = ye(E, "tools")), _ && (Me.buttons = _), te && (Me.tools = te)),
              we.push(p(It("vxe-toolbar"), Zt({ ref: D }, H), Me))
          }
          ie.push(p("div", { ref: F, key: "toolbar", class: "vxe-grid--toolbar-wrapper" }, we))
        }
        return ie
      },
      ae = function () {
        return r.top ? [p("div", { ref: q, key: "top", class: "vxe-grid--top-wrapper" }, r.top({ $grid: Z }))] : []
      },
      fe = ["Form", "Toolbar", "Top", "Table", "Bottom", "Pager"],
      U = function () {
        const j = e.layouts,
          H = [],
          ie = j && j.length ? j : C.grid.layouts || fe
        return (
          ie.forEach(function (we) {
            switch (we) {
              case "Form":
                H.push(Ae())
                break
              case "Toolbar":
                H.push(Re())
                break
              case "Top":
                H.push(ae())
                break
              case "Table":
                H.push(ne())
                break
              case "Bottom":
                H.push(y())
                break
              case "Pager":
                H.push(k())
                break
            }
          }),
          H
        )
      },
      G = {}
    Au.forEach(function (j) {
      const H = u.camelCase("on-".concat(j))
      G[H] = function () {
        for (var ie = [], we = 0; we < arguments.length; we++) ie[we] = arguments[we]
        return a.apply(void 0, Al([j], ie, !1))
      }
    })
    var ne = function () {
        const j = e.proxyConfig,
          H = Oe.value,
          ie = M.value,
          we = Object.assign({}, G),
          E = r.empty,
          _ = r.loading
        j && pt(ie) && (ie.sort && (we.onSortChange = De), ie.filter && (we.onFilterChange = Ne))
        const te = {}
        return (
          E &&
            (te.empty = function () {
              return E({})
            }),
          _ &&
            (te.loading = function () {
              return _({})
            }),
          [p(It("vxe-table"), Zt(Zt({ ref: f, key: "table" }, H), we), te)]
        )
      },
      y = function () {
        return r.bottom
          ? [p("div", { ref: $, key: "bottom", class: "vxe-grid--bottom-wrapper" }, r.bottom({ $grid: Z }))]
          : []
      },
      k = function () {
        const j = e.proxyConfig,
          H = e.pagerConfig,
          ie = M.value,
          we = Y.value,
          E = []
        if ((H && pt(we)) || r.pager) {
          let _ = []
          if (r.pager) _ = r.pager({ $grid: Z })
          else {
            let te = we.slots,
              Me = {},
              ke = void 0,
              Be = void 0
            te && ((ke = ye(te, "left")), (Be = ye(te, "right")), ke && (Me.left = ke), Be && (Me.right = Be)),
              _.push(
                p(It("vxe-pager"), Zt(Zt(Zt({ ref: I }, we), j && pt(ie) ? d.tablePage : {}), { onPageChange: ve }), Me)
              )
          }
          E.push(p("div", { ref: B, key: "pager", class: "vxe-grid--pager-wrapper" }, _))
        }
        return E
      },
      ee = function () {
        const j = e.proxyConfig,
          H = e.formConfig,
          ie = d.proxyInited,
          we = M.value,
          E = K.value
        if (j && pt(we)) {
          if (H && pt(E) && we.form && E.items) {
            const _ = {}
            E.items.forEach(function (te) {
              const Me = te.field,
                ke = te.itemRender
              if (Me) {
                let Be = null
                if (ke) {
                  const Ke = ke.defaultValue
                  u.isFunction(Ke) ? (Be = Ke({ item: te })) : u.isUndefined(Ke) || (Be = Ke)
                }
                _[Me] = Be
              }
            }),
              (d.formData = _)
          }
          ie ||
            ((d.proxyInited = !0),
            we.autoLoad !== !1 &&
              de()
                .then(function () {
                  return se.commitProxy("_init")
                })
                .then(function (te) {
                  se.dispatchEvent("proxy-query", Zt(Zt({}, te), { isInited: !0 }), new Event("init"))
                }))
        }
      }
    se = {
      dispatchEvent: function (j, H, ie) {
        a(j, Object.assign({ $grid: Z, $event: ie }, H))
      },
      commitProxy: function (j) {
        for (var H = [], ie = 1; ie < arguments.length; ie++) H[ie - 1] = arguments[ie]
        let we = e.toolbarConfig,
          E = e.pagerConfig,
          _ = e.editRules,
          te = d.tablePage,
          Me = d.formData,
          ke = L.value,
          Be = M.value,
          Ke = Y.value,
          Ue = O.value,
          _e = Be.beforeQuery,
          Je = Be.afterQuery,
          Qe = Be.beforeDelete,
          R = Be.afterDelete,
          ot = Be.beforeSave,
          wt = Be.afterSave,
          mt = Be.ajax,
          ft = mt === void 0 ? {} : mt,
          lt = Be.props,
          xt = lt === void 0 ? {} : lt,
          tt = f.value,
          Mt = null,
          St = null
        if (u.isString(j)) {
          const Gt = Ue.buttons,
            Kt =
              we && pt(Ue) && Gt
                ? u.findTree(
                    Gt,
                    function (Nt) {
                      return Nt.code === j
                    },
                    { children: "dropdowns" }
                  )
                : null
          ;(Mt = Kt ? Kt.item : null), (St = j)
        } else (Mt = j), (St = Mt.code)
        const Wt = Mt ? Mt.params : null
        switch (St) {
          case "insert":
            return tt.insert({})
          case "insert_edit":
            return tt.insert({}).then(function (Nt) {
              const Pt = Nt.row
              return tt.setEditRow(Pt)
            })
          case "insert_actived":
            return tt.insert({}).then(function (Nt) {
              const Pt = Nt.row
              return tt.setEditRow(Pt)
            })
          case "mark_cancel":
            ge(St)
            break
          case "remove":
            return he(St, "vxe.grid.removeSelectRecord", function () {
              return tt.removeCheckboxRow()
            })
          case "import":
            tt.importData(Wt)
            break
          case "open_import":
            tt.openImport(Wt)
            break
          case "export":
            tt.exportData(Wt)
            break
          case "open_export":
            tt.openExport(Wt)
            break
          case "reset_custom":
            return tt.resetColumn(!0)
          case "_init":
          case "reload":
          case "query": {
            const Qt = ft.query
            if (Qt) {
              let er = St === "_init",
                hr = St === "reload",
                ur = [],
                ir = [],
                gr = {}
              if ((E && ((er || hr) && (te.currentPage = 1), pt(Ke) && (gr = Zt({}, te))), er)) {
                let cr = tt.getComputeMaps().computeSortOpts,
                  Xr = cr.value,
                  Lt = Xr.defaultSort
                Lt &&
                  (u.isArray(Lt) || (Lt = [Lt]),
                  (ur = Lt.map(function (Nt) {
                    return { field: Nt.field, property: Nt.field, order: Nt.order }
                  }))),
                  (ir = tt.getCheckedFilters())
              } else hr ? tt.clearAll() : ((ur = tt.getSortColumns()), (ir = tt.getCheckedFilters()))
              var Ut = {
                code: St,
                button: Mt,
                isInited: er,
                isReload: hr,
                $grid: Z,
                page: gr,
                sort: ur.length ? ur[0] : {},
                sorts: ur,
                filters: ir,
                form: Me,
                options: Qt
              }
              ;(d.sortData = ur), (d.filterData = ir), (d.tableLoading = !0)
              const mr = [Ut].concat(H)
              return Promise.resolve((_e || Qt).apply(void 0, mr))
                .then(function (Nt) {
                  if (((d.tableLoading = !1), Nt))
                    if (E && pt(Ke)) {
                      const Pt = u.get(Nt, xt.total || "page.total") || 0
                      ;(te.total = u.toNumber(Pt)), (d.tableData = u.get(Nt, xt.result || "result") || [])
                      const tr = Math.max(Math.ceil(Pt / te.pageSize), 1)
                      te.currentPage > tr && (te.currentPage = tr)
                    } else d.tableData = (xt.list ? u.get(Nt, xt.list) : Nt) || []
                  else d.tableData = []
                  return Je && Je.apply(void 0, mr), { status: !0 }
                })
                .catch(function () {
                  return (d.tableLoading = !1), { status: !1 }
                })
            }
            break
          }
          case "delete": {
            const Kr = ft.delete
            if (Kr) {
              var Mr = x.getCheckboxRecords(),
                br = Mr.filter(function (Pt) {
                  return !tt.isInsertByRow(Pt)
                }),
                Rr = { removeRecords: br },
                Ut = { $grid: Z, code: St, button: Mt, body: Rr, form: Me, options: Kr },
                kr = [Ut].concat(H)
              if (Mr.length)
                return he(St, "vxe.grid.deleteSelectRecord", function () {
                  return br.length
                    ? ((d.tableLoading = !0),
                      Promise.resolve((Qe || Kr).apply(void 0, kr))
                        .then(function (Pt) {
                          return (
                            (d.tableLoading = !1),
                            tt.setPendingRow(br, !1),
                            ke && et.modal.message({ content: oe(Pt, "vxe.grid.delSuccess"), status: "success" }),
                            R ? R.apply(void 0, kr) : se.commitProxy("query"),
                            { status: !0 }
                          )
                        })
                        .catch(function (Pt) {
                          return (
                            (d.tableLoading = !1),
                            ke && et.modal.message({ id: St, content: oe(Pt, "vxe.grid.operError"), status: "error" }),
                            { status: !1 }
                          )
                        }))
                    : tt.remove(Mr)
                })
              ke && et.modal.message({ id: St, content: C.i18n("vxe.grid.selectOneRecord"), status: "warning" })
            }
            break
          }
          case "save": {
            const xr = ft.save
            if (xr) {
              var qt = tt.getRecordset(),
                _t = qt.insertRecords,
                Wr = qt.removeRecords,
                Cr = qt.updateRecords,
                ia = qt.pendingRecords,
                Ut = { $grid: Z, code: St, button: Mt, body: qt, form: Me, options: xr },
                Zr = [Ut].concat(H)
              _t.length &&
                (qt.pendingRecords = ia.filter(function (Pt) {
                  return tt.findRowIndexOf(_t, Pt) === -1
                })),
                ia.length &&
                  (qt.insertRecords = _t.filter(function (Pt) {
                    return tt.findRowIndexOf(ia, Pt) === -1
                  }))
              let Jr = Promise.resolve()
              return (
                _ && (Jr = tt.validate(qt.insertRecords.concat(Cr))),
                Jr.then(function (Pt) {
                  if (!Pt) {
                    if (qt.insertRecords.length || Wr.length || Cr.length || qt.pendingRecords.length)
                      return (
                        (d.tableLoading = !0),
                        Promise.resolve((ot || xr).apply(void 0, Zr))
                          .then(function (tr) {
                            return (
                              (d.tableLoading = !1),
                              tt.clearPendingRow(),
                              ke && et.modal.message({ content: oe(tr, "vxe.grid.saveSuccess"), status: "success" }),
                              wt ? wt.apply(void 0, Zr) : se.commitProxy("query"),
                              { status: !0 }
                            )
                          })
                          .catch(function (tr) {
                            return (
                              (d.tableLoading = !1),
                              ke &&
                                et.modal.message({ id: St, content: oe(tr, "vxe.grid.operError"), status: "error" }),
                              { status: !1 }
                            )
                          })
                      )
                    ke && et.modal.message({ id: St, content: C.i18n("vxe.grid.dataUnchanged"), status: "info" })
                  }
                })
              )
            }
            break
          }
          default: {
            const sr = et.commands.get(St)
            sr &&
              sr.commandMethod &&
              sr.commandMethod.apply(sr, Al([{ code: St, button: Mt, $grid: Z, $table: tt }], H, !1))
          }
        }
        return de()
      },
      zoom: function () {
        return d.isZMax ? se.revert() : se.maximize()
      },
      isMaximized: function () {
        return d.isZMax
      },
      maximize: function () {
        return ce(!0)
      },
      revert: function () {
        return ce()
      },
      getFormItems: function (j) {
        const H = K.value,
          ie = e.formConfig,
          we = H.items,
          E = []
        return (
          u.eachTree(
            ie && pt(H) && we ? we : [],
            function (_) {
              E.push(_)
            },
            { children: "children" }
          ),
          u.isUndefined(j) ? E : E[j]
        )
      },
      getProxyInfo: function () {
        const j = f.value
        if (e.proxyConfig) {
          const H = d.sortData
          return {
            data: d.tableData,
            filter: d.filterData,
            form: d.formData,
            sort: H.length ? H[0] : {},
            sorts: H,
            pager: d.tablePage,
            pendingRecords: j ? j.getPendingRecords() : []
          }
        }
        return null
      }
    }
    var le = {
      extendTableMethods: w,
      callSlot: function (j, H) {
        return j && (u.isString(j) && (j = r[j] || null), u.isFunction(j)) ? Vt(j(H)) : []
      },
      getExcludeHeight: function () {
        const j = e.height,
          H = d.isZMax,
          ie = l.value,
          we = N.value,
          E = F.value,
          _ = q.value,
          te = $.value,
          Me = B.value,
          ke = H || j !== "auto" ? 0 : Wo(ie.parentNode)
        return ke + Wo(ie) + pi(we) + pi(E) + pi(_) + pi(te) + pi(Me)
      },
      getParentHeight: function () {
        const j = l.value
        return j
          ? (d.isZMax ? Ka().visibleHeight : u.toNumber(getComputedStyle(j.parentNode).height)) - le.getExcludeHeight()
          : 0
      },
      triggerToolbarCommitEvent: function (j, H) {
        const ie = j.code
        return se.commitProxy(j, H).then(function (we) {
          ie &&
            we &&
            we.status &&
            ["query", "reload", "delete", "save"].includes(ie) &&
            se.dispatchEvent(
              ie === "delete" || ie === "save" ? "proxy-".concat(ie) : "proxy-query",
              Zt(Zt({}, we), { isReload: ie === "reload" }),
              H
            )
        })
      },
      triggerToolbarBtnEvent: function (j, H) {
        le.triggerToolbarCommitEvent(j, H), se.dispatchEvent("toolbar-button-click", { code: j.code, button: j }, H)
      },
      triggerToolbarTolEvent: function (j, H) {
        le.triggerToolbarCommitEvent(j, H), se.dispatchEvent("toolbar-tool-click", { code: j.code, tool: j, $event: H })
      },
      triggerZoomEvent: function (j) {
        se.zoom(), se.dispatchEvent("zoom", { type: d.isZMax ? "max" : "revert" }, j)
      }
    }
    Object.assign(Z, x, se, le)
    const me = Xe(0)
    ut(
      function () {
        return e.columns ? e.columns.length : -1
      },
      function () {
        me.value++
      }
    ),
      ut(
        function () {
          return e.columns
        },
        function () {
          me.value++
        }
      ),
      ut(me, function () {
        de(function () {
          return Z.loadColumn(e.columns || [])
        })
      }),
      ut(
        function () {
          return e.toolbarConfig
        },
        function () {
          Ie()
        }
      ),
      ut(
        function () {
          return e.pagerConfig
        },
        function () {
          z()
        }
      ),
      ut(
        function () {
          return e.proxyConfig
        },
        function () {
          ee()
        }
      )
    const be = function (j) {
      const H = A.value,
        ie = ht(j, ct.ESCAPE)
      ie && d.isZMax && H.escRestore !== !1 && le.triggerZoomEvent(j)
    }
    et.hooks.forEach(function (j) {
      const H = j.setupGrid
      if (H) {
        const ie = H(Z)
        ie && u.isObject(ie) && Object.assign(Z, ie)
      }
    }),
      z(),
      pr(function () {
        de(function () {
          const j = e.data,
            H = e.columns,
            ie = e.proxyConfig,
            we = M.value,
            E = K.value
          pt(ie) && (j || (we.form && E.data)) && rr("vxe.error.errConflicts", ["grid.data", "grid.proxy-config"]),
            H && H.length && Z.loadColumn(H),
            Ie()
        }),
          vt.on(Z, "keydown", be)
      }),
      or(function () {
        vt.off(Z, "keydown")
      }),
      de(function () {
        ee()
      })
    const Le = function () {
      let j,
        H = o.value,
        ie = X.value
      return p(
        "div",
        {
          ref: l,
          class: [
            "vxe-grid",
            ((j = {}),
            (j["size--".concat(H)] = H),
            (j["is--animat"] = !!e.animat),
            (j["is--round"] = e.round),
            (j["is--maximize"] = d.isZMax),
            (j["is--loading"] = e.loading || d.tableLoading),
            j)
          ],
          style: ie
        },
        U()
      )
    }
    return (Z.renderVN = Le), Yt("$xegrid", Z), Z
  },
  render: function () {
    return this.renderVN()
  }
})
const Vu = Object.assign(Oi, {
    install: function (e) {
      e.component(Oi.name, Oi)
    }
  }),
  x0 = Vu
Ft.component(Oi.name, Oi)
let Vl = function () {
  return (
    (Vl =
      Object.assign ||
      function (e) {
        for (var t, r = 1, a = arguments.length; r < a; r++) {
          t = arguments[r]
          for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      }),
    Vl.apply(this, arguments)
  )
}
const Ti = Dt({
  name: "VxeToolbar",
  props: {
    loading: Boolean,
    refresh: [Boolean, Object],
    import: [Boolean, Object],
    export: [Boolean, Object],
    print: [Boolean, Object],
    zoom: [Boolean, Object],
    custom: [Boolean, Object],
    buttons: {
      type: Array,
      default: function () {
        return C.toolbar.buttons
      }
    },
    tools: {
      type: Array,
      default: function () {
        return C.toolbar.tools
      }
    },
    perfect: {
      type: Boolean,
      default: function () {
        return C.toolbar.perfect
      }
    },
    size: {
      type: String,
      default: function () {
        return C.toolbar.size || C.size
      }
    },
    className: [String, Function]
  },
  emits: ["button-click", "tool-click"],
  setup: function (e, t) {
    let r = t.slots,
      a = t.emit,
      n = u.uniqueId(),
      s = nr(e),
      o = Ht({ isRefresh: !1, columns: [] }),
      d = Xe(),
      l = Xe(),
      f = Ht({ isAll: !1, isIndeterminate: !1, activeBtn: !1, activeWrapper: !1, visible: !1 }),
      h = { refElem: d },
      D = {
        xID: n,
        props: e,
        context: t,
        reactData: o,
        getRefMaps: function () {
          return h
        }
      },
      I = {},
      N = gt("$xegrid", null),
      F,
      q = Pe(function () {
        return Object.assign({}, C.toolbar.refresh, e.refresh)
      }),
      $ = Pe(function () {
        return Object.assign({}, C.toolbar.import, e.import)
      }),
      B = Pe(function () {
        return Object.assign({}, C.toolbar.export, e.export)
      }),
      w = Pe(function () {
        return Object.assign({}, C.toolbar.print, e.print)
      }),
      x = Pe(function () {
        return Object.assign({}, C.toolbar.zoom, e.zoom)
      }),
      M = Pe(function () {
        return Object.assign({}, C.toolbar.custom, e.custom)
      }),
      L = function () {
        if (F) return !0
        rr("vxe.error.barUnableLink")
      },
      Y = function () {
        const y = o.columns,
          k = F.getComputeMaps().computeCustomOpts,
          ee = k.value,
          le = ee.checkMethod
        ;(f.isAll = y.every(function (me) {
          return (le ? !le({ column: me }) : !1) || me.visible
        })),
          (f.isIndeterminate =
            !f.isAll &&
            y.some(function (me) {
              return (!le || le({ column: me })) && (me.visible || me.halfVisible)
            }))
      },
      K = function () {
        ;(f.visible = !0), Y()
      },
      O = function () {
        F.handleCustom()
      },
      A = function () {
        const y = e.custom,
          k = M.value
        f.visible && ((f.visible = !1), y && !k.immediate && O())
      },
      X = function (y, k) {
        const ee = N || F
        ee.dispatchEvent("custom", { type: y }, k)
      },
      J = function (y) {
        A(), X("confirm", y)
      },
      Ce = function (y) {
        L() && (f.visible || (K(), X("open", y)))
      },
      ue = function (y) {
        f.visible && (A(), X("close", y))
      },
      Z = function (y) {
        F.resetColumn(!0), A(), X("reset", y)
      },
      se = function (y) {
        const k = o.columns,
          ee = u.findTree(k, function (me) {
            return me === y
          })
        if (ee && ee.parent) {
          const le = ee.parent
          le.children &&
            le.children.length &&
            ((le.visible = le.children.every(function (me) {
              return me.visible
            })),
            (le.halfVisible =
              !le.visible &&
              le.children.some(function (me) {
                return me.visible || me.halfVisible
              })),
            se(le))
        }
      },
      Oe = function (y) {
        const k = !y.visible,
          ee = M.value
        u.eachTree([y], function (le) {
          ;(le.visible = k), (le.halfVisible = !1)
        }),
          se(y),
          e.custom && ee.immediate && O(),
          Y()
      },
      Ie = function (y, k) {
        const ee = F.getComputeMaps().computeIsMaxFixedColumn,
          le = ee.value
        y.fixed === k ? F.clearColumnFixed(y) : (!le || y.fixed) && F.setColumnFixed(y, k)
      },
      z = function () {
        const y = o.columns,
          k = F.getComputeMaps().computeCustomOpts,
          ee = k.value,
          le = ee.checkMethod,
          me = !f.isAll
        u.eachTree(y, function (be) {
          ;(!le || le({ column: be })) && ((be.visible = me), (be.halfVisible = !1))
        }),
          (f.isAll = me),
          Y()
      },
      ge = function (y) {
        const k = l.value
        yt(y, k).flag || ue(y)
      },
      oe = function (y) {
        ue(y)
      },
      he = function (y) {
        f.visible ? ue(y) : Ce(y)
      },
      ve = function (y) {
        ;(f.activeBtn = !0), Ce(y)
      },
      De = function (y) {
        ;(f.activeBtn = !1),
          setTimeout(function () {
            !f.activeBtn && !f.activeWrapper && ue(y)
          }, 300)
      },
      Ne = function (y) {
        ;(f.activeWrapper = !0), Ce(y)
      },
      $e = function (y) {
        ;(f.activeWrapper = !1),
          setTimeout(function () {
            !f.activeBtn && !f.activeWrapper && ue(y)
          }, 300)
      },
      Te = function (y) {
        const k = o.isRefresh,
          ee = q.value
        if (!k) {
          const le = ee.queryMethod || ee.query
          if (le) {
            o.isRefresh = !0
            try {
              Promise.resolve(le({}))
                .catch(function (me) {
                  return me
                })
                .then(function () {
                  o.isRefresh = !1
                })
            } catch {
              o.isRefresh = !1
            }
          } else
            N &&
              ((o.isRefresh = !0),
              N.triggerToolbarCommitEvent({ code: ee.code || "reload" }, y)
                .catch(function (me) {
                  return me
                })
                .then(function () {
                  o.isRefresh = !1
                }))
        }
      },
      Ve = function (y) {
        N && N.triggerZoomEvent(y)
      },
      W = function (y, k) {
        const ee = k.code
        if (ee)
          if (N) N.triggerToolbarBtnEvent(k, y)
          else {
            const le = et.commands.get(ee),
              me = { code: ee, button: k, $table: F, $grid: N, $event: y }
            le && le.commandMethod && le.commandMethod(me), D.dispatchEvent("button-click", me, y)
          }
      },
      ce = function (y, k) {
        const ee = k.code
        if (ee)
          if (N) N.triggerToolbarTolEvent(k, y)
          else {
            const le = et.commands.get(ee),
              me = { code: ee, tool: k, $table: F, $grid: N, $event: y }
            le && le.commandMethod && le.commandMethod(me), D.dispatchEvent("tool-click", me, y)
          }
      },
      ye = function () {
        L() && F.openImport()
      },
      Ae = function () {
        L() && F.openExport()
      },
      Re = function () {
        L() && F.openPrint()
      },
      ae = function (y, k) {
        const ee = y.dropdowns,
          le = []
        return ee
          ? ee.map(function (me, be) {
              return me.visible === !1
                ? Ot()
                : p(It("vxe-button"), {
                    key: be,
                    disabled: me.disabled,
                    loading: me.loading,
                    type: me.type,
                    icon: me.icon,
                    circle: me.circle,
                    round: me.round,
                    status: me.status,
                    content: me.name,
                    onClick: function (Le) {
                      return k ? W(Le, me) : ce(Le, me)
                    }
                  })
            })
          : le
      },
      fe = function () {
        const y = e.buttons,
          k = r.buttons
        if (k) return Vt(k({ $grid: N, $table: F }))
        const ee = []
        return (
          y &&
            y.forEach(function (le) {
              const me = le.dropdowns,
                be = le.buttonRender
              if (le.visible !== !1) {
                const Le = be ? et.renderer.get(be.name) : null
                if (be && Le && Le.renderToolbarButton) {
                  const j = Le.toolbarButtonClassName,
                    H = { $grid: N, $table: F, button: le }
                  ee.push(
                    p(
                      "span",
                      { class: ["vxe-button--item", j ? (u.isFunction(j) ? j(H) : j) : ""] },
                      Vt(Le.renderToolbarButton(be, H))
                    )
                  )
                } else
                  ee.push(
                    p(
                      It("vxe-button"),
                      {
                        disabled: le.disabled,
                        loading: le.loading,
                        type: le.type,
                        icon: le.icon,
                        circle: le.circle,
                        round: le.round,
                        status: le.status,
                        content: le.name,
                        destroyOnClose: le.destroyOnClose,
                        placement: le.placement,
                        transfer: le.transfer,
                        onClick: function (ie) {
                          return W(ie, le)
                        }
                      },
                      me && me.length
                        ? {
                            dropdowns: function () {
                              return ae(le, !0)
                            }
                          }
                        : {}
                    )
                  )
              }
            }),
          ee
        )
      },
      U = function () {
        const y = e.tools,
          k = r.tools
        if (k) return Vt(k({ $grid: N, $table: F }))
        const ee = []
        return (
          y &&
            y.forEach(function (le) {
              const me = le.dropdowns,
                be = le.toolRender
              if (le.visible !== !1) {
                const Le = be ? et.renderer.get(be.name) : null
                if (be && Le && Le.renderToolbarTool) {
                  const j = Le.toolbarToolClassName,
                    H = { $grid: N, $table: F, tool: le }
                  ee.push(
                    p(
                      "span",
                      { class: ["vxe-tool--item", j ? (u.isFunction(j) ? j(H) : j) : ""] },
                      Vt(Le.renderToolbarTool(be, H))
                    )
                  )
                } else
                  ee.push(
                    p(
                      It("vxe-button"),
                      {
                        disabled: le.disabled,
                        loading: le.loading,
                        type: le.type,
                        icon: le.icon,
                        circle: le.circle,
                        round: le.round,
                        status: le.status,
                        content: le.name,
                        destroyOnClose: le.destroyOnClose,
                        placement: le.placement,
                        transfer: le.transfer,
                        onClick: function (ie) {
                          return ce(ie, le)
                        }
                      },
                      me && me.length
                        ? {
                            dropdowns: function () {
                              return ae(le, !1)
                            }
                          }
                        : {}
                    )
                  )
              }
            }),
          ee
        )
      },
      G = function () {
        let y = o.columns,
          k = M.value,
          ee = !0,
          le = [],
          me = {},
          be = {},
          Le
        if (F) {
          const j = F.getComputeMaps(),
            H = j.computeCustomOpts,
            ie = j.computeIsMaxFixedColumn,
            we = H.value
          ;(Le = we.checkMethod), (ee = ie.value)
        }
        k.trigger === "manual" ||
          (k.trigger === "hover"
            ? ((me.onMouseenter = ve), (me.onMouseleave = De), (be.onMouseenter = Ne), (be.onMouseleave = $e))
            : (me.onClick = he)),
          u.eachTree(y, function (te, Me, ke, Be, Ke) {
            const Ue = Jt(te.getTitle(), 1),
              _e = te.getKey(),
              Je = te.children && te.children.length,
              Qe = Le ? !Le({ column: te }) : !1
            if (Je || _e) {
              const R = te.visible,
                ot = te.halfVisible
              le.push(
                p("li", { class: ["vxe-custom--option", "level--".concat(te.level), { "is--group": Je }] }, [
                  p(
                    "div",
                    {
                      title: Ue,
                      class: [
                        "vxe-custom--checkbox-option",
                        { "is--checked": R, "is--indeterminate": ot, "is--disabled": Qe }
                      ],
                      onClick: function () {
                        Qe || Oe(te)
                      }
                    },
                    [
                      p("span", {
                        class: [
                          "vxe-checkbox--icon",
                          ot
                            ? C.icon.TABLE_CHECKBOX_INDETERMINATE
                            : R
                              ? C.icon.TABLE_CHECKBOX_CHECKED
                              : C.icon.TABLE_CHECKBOX_UNCHECKED
                        ]
                      }),
                      p("span", { class: "vxe-checkbox--label" }, Ue)
                    ]
                  ),
                  !Ke && k.allowFixed
                    ? p("div", { class: "vxe-custom--fixed-option" }, [
                        p("span", {
                          class: [
                            "vxe-custom--fixed-left-option",
                            te.fixed === "left"
                              ? C.icon.TOOLBAR_TOOLS_FIXED_LEFT_ACTIVED
                              : C.icon.TOOLBAR_TOOLS_FIXED_LEFT,
                            { "is--checked": te.fixed === "left", "is--disabled": ee && !te.fixed }
                          ],
                          title: C.i18n(te.fixed === "left" ? "vxe.toolbar.cancelfixed" : "vxe.toolbar.fixedLeft"),
                          onClick: function () {
                            Ie(te, "left")
                          }
                        }),
                        p("span", {
                          class: [
                            "vxe-custom--fixed-right-option",
                            te.fixed === "right"
                              ? C.icon.TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVED
                              : C.icon.TOOLBAR_TOOLS_FIXED_RIGHT,
                            { "is--checked": te.fixed === "right", "is--disabled": ee && !te.fixed }
                          ],
                          title: C.i18n(te.fixed === "right" ? "vxe.toolbar.cancelfixed" : "vxe.toolbar.fixedRight"),
                          onClick: function () {
                            Ie(te, "right")
                          }
                        })
                      ])
                    : null
                ])
              )
            }
          })
        const E = f.isAll,
          _ = f.isIndeterminate
        return p("div", { class: ["vxe-custom--wrapper", { "is--active": f.visible }], ref: l }, [
          p(
            It("vxe-button"),
            Vl({ circle: !0, icon: k.icon || C.icon.TOOLBAR_TOOLS_CUSTOM, title: C.i18n("vxe.toolbar.custom") }, me)
          ),
          p("div", { class: "vxe-custom--option-wrapper" }, [
            p("ul", { class: "vxe-custom--header" }, [
              p("li", { class: "vxe-custom--option" }, [
                p(
                  "div",
                  {
                    class: ["vxe-custom--checkbox-option", { "is--checked": E, "is--indeterminate": _ }],
                    title: C.i18n("vxe.table.allTitle"),
                    onClick: z
                  },
                  [
                    p("span", {
                      class: [
                        "vxe-checkbox--icon",
                        _
                          ? C.icon.TABLE_CHECKBOX_INDETERMINATE
                          : E
                            ? C.icon.TABLE_CHECKBOX_CHECKED
                            : C.icon.TABLE_CHECKBOX_UNCHECKED
                      ]
                    }),
                    p("span", { class: "vxe-checkbox--label" }, C.i18n("vxe.toolbar.customAll"))
                  ]
                )
              ])
            ]),
            p("ul", Vl({ class: "vxe-custom--body" }, be), le),
            k.showFooter || k.isFooter
              ? p("div", { class: "vxe-custom--footer" }, [
                  p(
                    "button",
                    { class: "btn--reset", onClick: Z },
                    k.resetButtonText || C.i18n("vxe.toolbar.customRestore")
                  ),
                  p(
                    "button",
                    { class: "btn--confirm", onClick: J },
                    k.confirmButtonText || C.i18n("vxe.toolbar.customConfirm")
                  )
                ])
              : null
          ])
        ])
      }
    ;(I = {
      dispatchEvent: function (y, k, ee) {
        a(y, Object.assign({ $toolbar: D, $event: ee }, k))
      },
      syncUpdate: function (y) {
        const k = y.collectColumn
        ;(F = y.$table), (o.columns = k)
      }
    }),
      Object.assign(D, I),
      pr(function () {
        vt.on(D, "mousedown", ge), vt.on(D, "blur", oe)
      }),
      or(function () {
        vt.off(D, "mousedown"), vt.off(D, "blur")
      }),
      de(function () {
        const y = e.refresh,
          k = q.value,
          ee = k.queryMethod || k.query
        y && !N && !ee && Sd("vxe.error.notFunc", ["queryMethod"]), M.value
      })
    const ne = function () {
      let y,
        k = e.perfect,
        ee = e.loading,
        le = e.refresh,
        me = e.zoom,
        be = e.custom,
        Le = e.className,
        j = s.value,
        H = q.value,
        ie = $.value,
        we = B.value,
        E = w.value,
        _ = x.value
      return p(
        "div",
        {
          ref: d,
          class: [
            "vxe-toolbar",
            Le ? (u.isFunction(Le) ? Le({ $toolbar: D }) : Le) : "",
            ((y = {}), (y["size--".concat(j)] = j), (y["is--perfect"] = k), (y["is--loading"] = ee), y)
          ]
        },
        [
          p("div", { class: "vxe-buttons--wrapper" }, fe()),
          p("div", { class: "vxe-tools--wrapper" }, U()),
          p("div", { class: "vxe-tools--operate" }, [
            e.import
              ? p(It("vxe-button"), {
                  circle: !0,
                  icon: ie.icon || C.icon.TOOLBAR_TOOLS_IMPORT,
                  title: C.i18n("vxe.toolbar.import"),
                  onClick: ye
                })
              : Ot(),
            e.export
              ? p(It("vxe-button"), {
                  circle: !0,
                  icon: we.icon || C.icon.TOOLBAR_TOOLS_EXPORT,
                  title: C.i18n("vxe.toolbar.export"),
                  onClick: Ae
                })
              : Ot(),
            e.print
              ? p(It("vxe-button"), {
                  circle: !0,
                  icon: E.icon || C.icon.TOOLBAR_TOOLS_PRINT,
                  title: C.i18n("vxe.toolbar.print"),
                  onClick: Re
                })
              : Ot(),
            le
              ? p(It("vxe-button"), {
                  circle: !0,
                  icon: o.isRefresh
                    ? H.iconLoading || C.icon.TOOLBAR_TOOLS_REFRESH_LOADING
                    : H.icon || C.icon.TOOLBAR_TOOLS_REFRESH,
                  title: C.i18n("vxe.toolbar.refresh"),
                  onClick: Te
                })
              : Ot(),
            me && N
              ? p(It("vxe-button"), {
                  circle: !0,
                  icon: N.isMaximized()
                    ? _.iconOut || C.icon.TOOLBAR_TOOLS_MINIMIZE
                    : _.iconIn || C.icon.TOOLBAR_TOOLS_FULLSCREEN,
                  title: C.i18n("vxe.toolbar.zoom".concat(N.isMaximized() ? "Out" : "In")),
                  onClick: Ve
                })
              : Ot(),
            be ? G() : Ot()
          ])
        ]
      )
    }
    return (D.renderVN = ne), D
  },
  render: function () {
    return this.renderVN()
  }
})
const Bu = Object.assign(Ti, {
    install: function (e) {
      e.component(Ti.name, Ti)
    }
  }),
  C0 = Bu
Ft.component(Ti.name, Ti)
let Uo = function () {
  return (
    (Uo =
      Object.assign ||
      function (e) {
        for (var t, r = 1, a = arguments.length; r < a; r++) {
          t = arguments[r]
          for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      }),
    Uo.apply(this, arguments)
  )
}
const Di = Dt({
  name: "VxePager",
  props: {
    size: {
      type: String,
      default: function () {
        return C.pager.size || C.size
      }
    },
    layouts: {
      type: Array,
      default: function () {
        return (
          C.pager.layouts || ["PrevJump", "PrevPage", "Jump", "PageCount", "NextPage", "NextJump", "Sizes", "Total"]
        )
      }
    },
    currentPage: { type: Number, default: 1 },
    loading: Boolean,
    pageSize: {
      type: Number,
      default: function () {
        return C.pager.pageSize || 10
      }
    },
    total: { type: Number, default: 0 },
    pagerCount: {
      type: Number,
      default: function () {
        return C.pager.pagerCount || 7
      }
    },
    pageSizes: {
      type: Array,
      default: function () {
        return C.pager.pageSizes || [10, 15, 20, 50, 100]
      }
    },
    align: {
      type: String,
      default: function () {
        return C.pager.align
      }
    },
    border: {
      type: Boolean,
      default: function () {
        return C.pager.border
      }
    },
    background: {
      type: Boolean,
      default: function () {
        return C.pager.background
      }
    },
    perfect: {
      type: Boolean,
      default: function () {
        return C.pager.perfect
      }
    },
    autoHidden: {
      type: Boolean,
      default: function () {
        return C.pager.autoHidden
      }
    },
    transfer: {
      type: Boolean,
      default: function () {
        return C.pager.transfer
      }
    },
    className: [String, Function],
    iconPrevPage: String,
    iconJumpPrev: String,
    iconJumpNext: String,
    iconNextPage: String,
    iconJumpMore: String,
    iconHomePage: String,
    iconEndPage: String
  },
  emits: ["update:pageSize", "update:currentPage", "page-change"],
  setup: function (e, t) {
    let r = t.slots,
      a = t.emit,
      n = u.uniqueId(),
      s = nr(e),
      o = gt("$xegrid", null),
      d = Ht({ inpCurrPage: e.currentPage }),
      l = Xe(),
      f = { refElem: l },
      h = {
        xID: n,
        props: e,
        context: t,
        getRefMaps: function () {
          return f
        }
      },
      D = {},
      I = {},
      N = function (W, ce) {
        return Math.max(Math.ceil(W / ce), 1)
      },
      F = Pe(function () {
        return N(e.total, e.pageSize)
      }),
      q = function (W, ce) {
        a("update:currentPage", ce),
          W &&
            ce !== e.currentPage &&
            D.dispatchEvent("page-change", { type: "current", pageSize: e.pageSize, currentPage: ce }, W)
      },
      $ = function (W, ce) {
        a("update:currentPage", W),
          ce &&
            W !== e.currentPage &&
            D.dispatchEvent("page-change", { type: "current", pageSize: e.pageSize, currentPage: W }, ce)
      },
      B = function (W) {
        const ce = W.target,
          ye = u.toInteger(ce.value),
          Ae = F.value,
          Re = ye <= 0 ? 1 : ye >= Ae ? Ae : ye,
          ae = u.toValueString(Re)
        ;(ce.value = ae), (d.inpCurrPage = ae), $(Re, W)
      },
      w = Pe(function () {
        for (var W = e.pagerCount, ce = F.value, ye = ce > W ? W - 2 : W, Ae = [], Re = 0; Re < ye; Re++) Ae.push(Re)
        return Ae
      }),
      x = Pe(function () {
        return Math.floor((e.pagerCount - 2) / 2)
      }),
      M = Pe(function () {
        return e.pageSizes.map(function (W) {
          return u.isNumber(W)
            ? { value: W, label: "".concat(C.i18n("vxe.pager.pagesize", [W])) }
            : Uo({ value: "", label: "" }, W)
        })
      }),
      L = function (W) {
        const ce = e.currentPage
        ce > 1 && $(1, W)
      },
      Y = function (W) {
        const ce = e.currentPage,
          ye = F.value
        ce < ye && $(ye, W)
      },
      K = function (W) {
        const ce = e.currentPage,
          ye = F.value
        ce > 1 && $(Math.min(ye, Math.max(ce - 1, 1)), W)
      },
      O = function (W) {
        const ce = e.currentPage,
          ye = F.value
        ce < ye && $(Math.min(ye, ce + 1), W)
      },
      A = function (W) {
        const ce = w.value
        $(Math.max(e.currentPage - ce.length, 1), W)
      },
      X = function (W) {
        const ce = F.value,
          ye = w.value
        $(Math.min(e.currentPage + ye.length, ce), W)
      },
      J = function (W) {
        let ce = W.value,
          ye = u.toNumber(ce),
          Ae = N(e.total, ye),
          Re = e.currentPage
        Re > Ae && ((Re = Ae), a("update:currentPage", Ae)),
          a("update:pageSize", ye),
          D.dispatchEvent("page-change", { type: "size", pageSize: ye, currentPage: Re })
      },
      Ce = function (W) {
        const ce = W.target
        d.inpCurrPage = ce.value
      },
      ue = function (W) {
        ht(W, ct.ENTER)
          ? B(W)
          : ht(W, ct.ARROW_UP)
            ? (W.preventDefault(), O(W))
            : ht(W, ct.ARROW_DOWN) && (W.preventDefault(), K(W))
      },
      Z = function () {
        return p(
          "button",
          {
            class: ["vxe-pager--prev-btn", { "is--disabled": e.currentPage <= 1 }],
            type: "button",
            title: C.i18n("vxe.pager.homePageTitle"),
            onClick: L
          },
          [p("i", { class: ["vxe-pager--btn-icon", e.iconHomePage || C.icon.PAGER_HOME] })]
        )
      },
      se = function () {
        return p(
          "button",
          {
            class: ["vxe-pager--prev-btn", { "is--disabled": e.currentPage <= 1 }],
            type: "button",
            title: C.i18n("vxe.pager.prevPageTitle"),
            onClick: K
          },
          [p("i", { class: ["vxe-pager--btn-icon", e.iconPrevPage || C.icon.PAGER_PREV_PAGE] })]
        )
      },
      Oe = function (W) {
        return p(
          W || "button",
          {
            class: ["vxe-pager--jump-prev", { "is--fixed": !W, "is--disabled": e.currentPage <= 1 }],
            type: "button",
            title: C.i18n("vxe.pager.prevJumpTitle"),
            onClick: A
          },
          [
            W ? p("i", { class: ["vxe-pager--jump-more-icon", e.iconJumpMore || C.icon.PAGER_JUMP_MORE] }) : null,
            p("i", { class: ["vxe-pager--jump-icon", e.iconJumpPrev || C.icon.PAGER_JUMP_PREV] })
          ]
        )
      },
      Ie = function (W) {
        const ce = F.value
        return p(
          W || "button",
          {
            class: ["vxe-pager--jump-next", { "is--fixed": !W, "is--disabled": e.currentPage >= ce }],
            type: "button",
            title: C.i18n("vxe.pager.nextJumpTitle"),
            onClick: X
          },
          [
            W ? p("i", { class: ["vxe-pager--jump-more-icon", e.iconJumpMore || C.icon.PAGER_JUMP_MORE] }) : null,
            p("i", { class: ["vxe-pager--jump-icon", e.iconJumpNext || C.icon.PAGER_JUMP_NEXT] })
          ]
        )
      },
      z = function () {
        const W = F.value
        return p(
          "button",
          {
            class: ["vxe-pager--next-btn", { "is--disabled": e.currentPage >= W }],
            type: "button",
            title: C.i18n("vxe.pager.nextPageTitle"),
            onClick: O
          },
          [p("i", { class: ["vxe-pager--btn-icon", e.iconNextPage || C.icon.PAGER_NEXT_PAGE] })]
        )
      },
      ge = function () {
        const W = F.value
        return p(
          "button",
          {
            class: ["vxe-pager--prev-btn", { "is--disabled": e.currentPage >= W }],
            type: "button",
            title: C.i18n("vxe.pager.endPageTitle"),
            onClick: Y
          },
          [p("i", { class: ["vxe-pager--btn-icon", e.iconEndPage || C.icon.PAGER_END] })]
        )
      },
      oe = function (W) {
        let ce = e.currentPage,
          ye = e.pagerCount,
          Ae = [],
          Re = F.value,
          ae = w.value,
          fe = x.value,
          U = Re > ye,
          G = U && ce > fe + 1,
          ne = U && ce < Re - fe,
          y = 1
        return (
          U && (ce >= Re - fe ? (y = Math.max(Re - ae.length + 1, 1)) : (y = Math.max(ce - fe, 1))),
          W &&
            G &&
            Ae.push(
              p(
                "button",
                {
                  class: "vxe-pager--num-btn",
                  type: "button",
                  onClick: function (k) {
                    return q(k, 1)
                  }
                },
                1
              ),
              Oe("span")
            ),
          ae.forEach(function (k, ee) {
            const le = y + ee
            le <= Re &&
              Ae.push(
                p(
                  "button",
                  {
                    key: le,
                    class: ["vxe-pager--num-btn", { "is--active": ce === le }],
                    type: "button",
                    onClick: function (me) {
                      return q(me, le)
                    }
                  },
                  le
                )
              )
          }),
          W &&
            ne &&
            Ae.push(
              Ie("button"),
              p(
                "button",
                {
                  class: "vxe-pager--num-btn",
                  type: "button",
                  onClick: function (k) {
                    return q(k, Re)
                  }
                },
                Re
              )
            ),
          p("span", { class: "vxe-pager--btn-wrapper" }, Ae)
        )
      },
      he = function () {
        return oe(!0)
      },
      ve = function () {
        const W = M.value
        return p(It("vxe-select"), {
          class: "vxe-pager--sizes",
          modelValue: e.pageSize,
          placement: "top",
          transfer: e.transfer,
          options: W,
          onChange: J
        })
      },
      De = function (W) {
        return p("span", { class: "vxe-pager--jump" }, [
          W ? p("span", { class: "vxe-pager--goto-text" }, C.i18n("vxe.pager.goto")) : null,
          p("input", {
            class: "vxe-pager--goto",
            value: d.inpCurrPage,
            type: "text",
            autocomplete: "off",
            onInput: Ce,
            onKeydown: ue,
            onBlur: B
          }),
          W ? p("span", { class: "vxe-pager--classifier-text" }, C.i18n("vxe.pager.pageClassifier")) : null
        ])
      },
      Ne = function () {
        return De(!0)
      },
      $e = function () {
        const W = F.value
        return p("span", { class: "vxe-pager--count" }, [p("span", { class: "vxe-pager--separator" }), p("span", W)])
      },
      Te = function () {
        return p("span", { class: "vxe-pager--total" }, C.i18n("vxe.pager.total", [e.total]))
      }
    ;(D = {
      dispatchEvent: function (W, ce, ye) {
        a(W, Object.assign({ $pager: h, $event: ye }, ce))
      },
      homePage: function () {
        return L(), de()
      },
      endPage: function () {
        return Y(), de()
      },
      prevPage: function () {
        return K(), de()
      },
      nextPage: function () {
        return O(), de()
      },
      prevJump: function () {
        return A(), de()
      },
      nextJump: function () {
        return X(), de()
      }
    }),
      (I = { handlePrevPage: K, handleNextPage: O, handlePrevJump: A, handleNextJump: X }),
      Object.assign(h, D, I),
      ut(
        function () {
          return e.currentPage
        },
        function (W) {
          d.inpCurrPage = W
        }
      )
    const Ve = function () {
      let W,
        ce = e.align,
        ye = e.layouts,
        Ae = e.className,
        Re = [],
        ae = s.value,
        fe = F.value
      return (
        r.left && Re.push(p("span", { class: "vxe-pager--left-wrapper" }, r.left({ $grid: o }))),
        ye.forEach(function (U) {
          let G
          switch (U) {
            case "Home":
              G = Z
              break
            case "PrevJump":
              G = Oe
              break
            case "PrevPage":
              G = se
              break
            case "Number":
              G = oe
              break
            case "JumpNumber":
              G = he
              break
            case "NextPage":
              G = z
              break
            case "NextJump":
              G = Ie
              break
            case "End":
              G = ge
              break
            case "Sizes":
              G = ve
              break
            case "FullJump":
              G = Ne
              break
            case "Jump":
              G = De
              break
            case "PageCount":
              G = $e
              break
            case "Total":
              G = Te
              break
          }
          G && Re.push(G())
        }),
        r.right && Re.push(p("span", { class: "vxe-pager--right-wrapper" }, r.right({ $grid: o }))),
        p(
          "div",
          {
            ref: l,
            class: [
              "vxe-pager",
              Ae ? (u.isFunction(Ae) ? Ae({ $pager: h }) : Ae) : "",
              ((W = {}),
              (W["size--".concat(ae)] = ae),
              (W["align--".concat(ce)] = ce),
              (W["is--border"] = e.border),
              (W["is--background"] = e.background),
              (W["is--perfect"] = e.perfect),
              (W["is--hidden"] = e.autoHidden && fe === 1),
              (W["is--loading"] = e.loading),
              W)
            ]
          },
          [p("div", { class: "vxe-pager--wrapper" }, Re)]
        )
      )
    }
    return (h.renderVN = Ve), h
  },
  render: function () {
    return this.renderVN()
  }
})
const Hu = Object.assign(Di, {
    install: function (e) {
      e.component(Di.name, Di)
    }
  }),
  y0 = Hu
Ft.component(Di.name, Di)
const zu = Object.assign(Yr, {
    install: function (e) {
      e.component(Yr.name, Yr)
    }
  }),
  w0 = zu
Ft.component(Yr.name, Yr)
const Mi = Dt({
  name: "VxeCheckboxGroup",
  props: {
    modelValue: Array,
    disabled: Boolean,
    max: { type: [String, Number], default: null },
    size: {
      type: String,
      default: function () {
        return C.checkbox.size || C.size
      }
    }
  },
  emits: ["update:modelValue", "change"],
  setup: function (e, t) {
    const r = t.slots,
      a = t.emit,
      n = gt("$xeform", null),
      s = gt("$xeformiteminfo", null),
      o = u.uniqueId(),
      d = Pe(function () {
        const N = e.modelValue,
          F = e.max
        return F ? (N ? N.length : 0) >= u.toNumber(F) : !1
      }),
      l = { computeIsMaximize: d },
      f = {
        xID: o,
        props: e,
        context: t,
        getComputeMaps: function () {
          return l
        }
      }
    nr(e)
    const h = {
        dispatchEvent: function (N, F, q) {
          a(N, Object.assign({ $checkboxGroup: f, $event: q }, F))
        }
      },
      D = {
        handleChecked: function (N, F) {
          const q = N.checked,
            $ = N.label,
            B = e.modelValue || [],
            w = B.indexOf($)
          q ? w === -1 && B.push($) : B.splice(w, 1),
            a("update:modelValue", B),
            f.dispatchEvent("change", Object.assign({ checklist: B }, N), F),
            n && s && n.triggerItemEvent(F, s.itemConfig.field, B)
        }
      }
    Object.assign(f, h, D)
    const I = function () {
      return p("div", { class: "vxe-checkbox-group" }, r.default ? r.default({}) : [])
    }
    return (f.renderVN = I), Yt("$xecheckboxgroup", f), I
  }
})
const Wu = Object.assign(Mi, {
    install: function (e) {
      e.component(Mi.name, Mi)
    }
  }),
  E0 = Wu
Ft.component(Mi.name, Mi)
const _u = Object.assign(qn, {
    install: function (e) {
      e.component(qn.name, qn)
    }
  }),
  S0 = _u
Ft.component(qn.name, qn)
const ju = Object.assign(jn, {
    install: function (e) {
      e.component(jn.name, jn)
    }
  }),
  O0 = ju
Ft.component(jn.name, jn)
const Ri = Dt({
  name: "VxeRadioButton",
  props: {
    modelValue: [String, Number, Boolean],
    label: { type: [String, Number, Boolean], default: null },
    title: [String, Number],
    content: [String, Number],
    disabled: Boolean,
    strict: {
      type: Boolean,
      default: function () {
        return C.radioButton.strict
      }
    },
    size: {
      type: String,
      default: function () {
        return C.radioButton.size || C.size
      }
    }
  },
  emits: ["update:modelValue", "change"],
  setup: function (e, t) {
    let r = t.slots,
      a = t.emit,
      n = gt("$xeform", null),
      s = gt("$xeformiteminfo", null),
      o = u.uniqueId(),
      d = nr(e),
      l = { xID: o, props: e, context: t },
      f = {},
      h = gt("$xeradiogroup", null),
      D = Pe(function () {
        return e.disabled || (h && h.props.disabled)
      }),
      I = Pe(function () {
        return h ? h.name : null
      }),
      N = Pe(function () {
        return h ? h.props.strict : e.strict
      }),
      F = Pe(function () {
        const x = e.modelValue,
          M = e.label
        return h ? h.props.modelValue === M : x === M
      })
    ;(f = {
      dispatchEvent: function (x, M, L) {
        a(x, Object.assign({ $radioButton: l, $event: L }, M))
      }
    }),
      Object.assign(l, f)
    const q = function (x, M) {
        h
          ? h.handleChecked({ label: x }, M)
          : (a("update:modelValue", x),
            f.dispatchEvent("change", { label: x }, M),
            n && s && n.triggerItemEvent(M, s.itemConfig.field, x))
      },
      $ = function (x) {
        const M = D.value
        M || q(e.label, x)
      },
      B = function (x) {
        const M = D.value,
          L = N.value
        !M && !L && e.label === (h ? h.props.modelValue : e.modelValue) && q(null, x)
      },
      w = function () {
        let x,
          M = d.value,
          L = D.value,
          Y = I.value,
          K = F.value
        return p(
          "label",
          {
            class: [
              "vxe-radio",
              "vxe-radio-button",
              ((x = {}), (x["size--".concat(M)] = M), (x["is--disabled"] = L), x)
            ],
            title: e.title
          },
          [
            p("input", {
              class: "vxe-radio--input",
              type: "radio",
              name: Y,
              checked: K,
              disabled: L,
              onChange: $,
              onClick: B
            }),
            p("span", { class: "vxe-radio--label" }, r.default ? r.default({}) : zt(e.content))
          ]
        )
      }
    return Object.assign(l, { renderVN: w, dispatchEvent }), w
  }
})
const qu = Object.assign(Ri, {
    install: function (e) {
      e.component(Ri.name, Ri)
    }
  }),
  T0 = qu
Ft.component(Ri.name, Ri)
const Yu = Object.assign(Da, {
    install: function (e) {
      e.component(Da.name, Da)
    }
  }),
  D0 = Yu
Ft.component(Da.name, Da)
let Sa
const ki = Dt({
  name: "VxeTextarea",
  props: {
    modelValue: [String, Number],
    className: String,
    immediate: { type: Boolean, default: !0 },
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    placeholder: {
      type: String,
      default: function () {
        return u.eqNull(C.textarea.placeholder) ? C.i18n("vxe.base.pleaseInput") : C.textarea.placeholder
      }
    },
    maxlength: [String, Number],
    rows: { type: [String, Number], default: 2 },
    cols: { type: [String, Number], default: null },
    showWordCount: Boolean,
    countMethod: Function,
    autosize: [Boolean, Object],
    form: String,
    resize: {
      type: String,
      default: function () {
        return C.textarea.resize
      }
    },
    size: {
      type: String,
      default: function () {
        return C.textarea.size || C.size
      }
    }
  },
  emits: ["update:modelValue", "input", "keydown", "keyup", "click", "change", "focus", "blur"],
  setup: function (e, t) {
    let r = t.emit,
      a = gt("$xeform", null),
      n = gt("$xeformiteminfo", null),
      s = u.uniqueId(),
      o = nr(e),
      d = Ht({ inputValue: e.modelValue }),
      l = Xe(),
      f = Xe(),
      h = { refElem: l, refTextarea: f },
      D = {
        xID: s,
        props: e,
        context: t,
        reactData: d,
        getRefMaps: function () {
          return h
        }
      },
      I = {},
      N = Pe(function () {
        return u.getSize(d.inputValue)
      }),
      F = Pe(function () {
        const O = N.value
        return e.maxlength && O > u.toNumber(e.maxlength)
      }),
      q = Pe(function () {
        return Object.assign({ minRows: 1, maxRows: 10 }, C.textarea.autosize, e.autosize)
      }),
      $ = function () {
        const O = e.size,
          A = e.autosize,
          X = d.inputValue
        if (A) {
          Sa || (Sa = document.createElement("div")), Sa.parentNode || document.body.appendChild(Sa)
          const J = f.value,
            Ce = getComputedStyle(J)
          ;(Sa.className = ["vxe-textarea--autosize", O ? "size--".concat(O) : ""].join(" ")),
            (Sa.style.width = "".concat(J.clientWidth, "px")),
            (Sa.style.padding = Ce.padding),
            (Sa.innerText = ("" + (X || "　")).replace(
              /\n$/,
              `
　`
            ))
        }
      },
      B = function () {
        e.autosize &&
          de(function () {
            let O = q.value,
              A = O.minRows,
              X = O.maxRows,
              J = f.value,
              Ce = Sa.clientHeight,
              ue = getComputedStyle(J),
              Z = u.toNumber(ue.lineHeight),
              se = u.toNumber(ue.paddingTop),
              Oe = u.toNumber(ue.paddingBottom),
              Ie = u.toNumber(ue.borderTopWidth),
              z = u.toNumber(ue.borderBottomWidth),
              ge = se + Oe + Ie + z,
              oe = (Ce - ge) / Z,
              he = oe && /[0-9]/.test("" + oe) ? oe : Math.floor(oe) + 1,
              ve = he
            he < A ? (ve = A) : he > X && (ve = X), (J.style.height = "".concat(ve * Z + ge, "px"))
          })
      },
      w = function (O) {
        const A = d.inputValue
        D.dispatchEvent(O.type, { value: A }, O)
      },
      x = function (O, A) {
        ;(d.inputValue = O),
          r("update:modelValue", O),
          u.toValueString(e.modelValue) !== O &&
            (I.dispatchEvent("change", { value: O }, A), a && n && a.triggerItemEvent(A, n.itemConfig.field, O))
      },
      M = function (O) {
        const A = e.immediate,
          X = O.target,
          J = X.value
        ;(d.inputValue = J), A && x(J, O), D.dispatchEvent("input", { value: J }, O), B()
      },
      L = function (O) {
        const A = e.immediate
        A ? w(O) : x(d.inputValue, O)
      },
      Y = function (O) {
        const A = e.immediate,
          X = d.inputValue
        A || x(X, O), D.dispatchEvent("blur", { value: X }, O)
      }
    ;(I = {
      dispatchEvent: function (O, A, X) {
        r(O, Object.assign({ $textarea: D, $event: X }, A))
      },
      focus: function () {
        const O = f.value
        return O.focus(), de()
      },
      blur: function () {
        const O = f.value
        return O.blur(), de()
      }
    }),
      Object.assign(D, I),
      ut(
        function () {
          return e.modelValue
        },
        function (O) {
          ;(d.inputValue = O), $()
        }
      ),
      de(function () {
        const O = e.autosize
        O && ($(), B())
      })
    const K = function () {
      let O,
        A = e.className,
        X = e.resize,
        J = e.placeholder,
        Ce = e.disabled,
        ue = e.maxlength,
        Z = e.autosize,
        se = e.showWordCount,
        Oe = e.countMethod,
        Ie = e.rows,
        z = e.cols,
        ge = d.inputValue,
        oe = o.value,
        he = F.value,
        ve = N.value
      return p(
        "div",
        {
          ref: l,
          class: [
            "vxe-textarea",
            A,
            ((O = {}),
            (O["size--".concat(oe)] = oe),
            (O["is--autosize"] = Z),
            (O["is--count"] = se),
            (O["is--disabled"] = Ce),
            (O["def--rows"] = !u.eqNull(Ie)),
            (O["def--cols"] = !u.eqNull(z)),
            O)
          ]
        },
        [
          p("textarea", {
            ref: f,
            class: "vxe-textarea--inner",
            value: ge,
            name: e.name,
            placeholder: J ? zt(J) : null,
            maxlength: ue,
            readonly: e.readonly,
            disabled: Ce,
            rows: Ie,
            cols: z,
            style: X ? { resize: X } : null,
            onInput: M,
            onChange: L,
            onKeydown: w,
            onKeyup: w,
            onClick: w,
            onFocus: w,
            onBlur: Y
          }),
          se
            ? p(
                "span",
                { class: ["vxe-textarea--count", { "is--error": he }] },
                Oe ? "".concat(Oe({ value: ge })) : "".concat(ve).concat(ue ? "/".concat(ue) : "")
              )
            : null
        ]
      )
    }
    return (D.renderVN = K), D
  },
  render: function () {
    return this.renderVN()
  }
})
const Gu = Object.assign(ki, {
    install: function (e) {
      e.component(ki.name, ki)
    }
  }),
  M0 = Gu
Ft.component(ki.name, ki)
const Uu = Object.assign(ta, {
    install: function (e) {
      e.component(ta.name, ta)
    }
  }),
  R0 = Uu
Ft.component(ta.name, ta)
let Fi = function () {
  return (
    (Fi =
      Object.assign ||
      function (e) {
        for (var t, r = 1, a = arguments.length; r < a; r++) {
          t = arguments[r]
          for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      }),
    Fi.apply(this, arguments)
  )
}
function wp(e) {
  return (
    NF(),
    new Promise(function (t) {
      if (
        e &&
        e.id &&
        gn.some(function (n) {
          return n.props.id === e.id
        })
      )
        t("exist")
      else {
        var r = e.onHide,
          a = Object.assign(e, {
            key: u.uniqueId(),
            modelValue: !0,
            onHide: function (n) {
              const s = Sl.modals
              r && r(n),
                (Sl.modals = s.filter(function (o) {
                  return o.key !== a.key
                })),
                t(n.type)
            }
          })
        Sl.modals.push(a)
      }
    })
  )
}
function Ep(e) {
  return u.find(gn, function (t) {
    return t.props.id === e
  })
}
function k0(e) {
  const t = e ? [Ep(e)] : gn,
    r = []
  return (
    t.forEach(function (a) {
      a && r.push(a.close())
    }),
    Promise.all(r)
  )
}
function Xu(e, t, r, a) {
  let n
  return u.isObject(t) ? (n = t) : (n = { content: u.toValueString(t), title: r }), wp(Fi(Fi(Fi({}, e), a), n))
}
function F0(e, t, r) {
  return Xu({ type: "alert", showFooter: !0 }, e, t, r)
}
function I0(e, t, r) {
  return Xu({ type: "confirm", status: "question", showFooter: !0 }, e, t, r)
}
function N0(e, t) {
  return Xu({ type: "message", mask: !1, lockView: !1, showHeader: !1 }, e, "", t)
}
const Sp = { get: Ep, close: k0, open: wp, alert: F0, confirm: I0, message: N0 },
  P0 = Sp,
  Ku = Object.assign(yn, {
    install: function (e) {
      e.component(yn.name, yn), (et.modal = Sp)
    }
  }),
  $0 = Ku
Ft.component(yn.name, yn)
let Xo = function () {
    return (
      (Xo =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      Xo.apply(this, arguments)
    )
  },
  L0 = function (e, t, r) {
    if (r || arguments.length === 2)
      for (var a = 0, n = t.length, s; a < n; a++)
        (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), (s[a] = t[a]))
    return e.concat(s || Array.prototype.slice.call(t))
  }
const Ii = Dt({
  name: "VxeTooltip",
  props: {
    modelValue: Boolean,
    size: {
      type: String,
      default: function () {
        return C.tooltip.size || C.size
      }
    },
    trigger: {
      type: String,
      default: function () {
        return C.tooltip.trigger
      }
    },
    theme: {
      type: String,
      default: function () {
        return C.tooltip.theme
      }
    },
    content: { type: [String, Number], default: null },
    useHTML: Boolean,
    zIndex: [String, Number],
    popupClassName: [String, Function],
    isArrow: { type: Boolean, default: !0 },
    enterable: Boolean,
    enterDelay: {
      type: Number,
      default: function () {
        return C.tooltip.enterDelay
      }
    },
    leaveDelay: {
      type: Number,
      default: function () {
        return C.tooltip.leaveDelay
      }
    }
  },
  emits: ["update:modelValue"],
  setup: function (e, t) {
    let r = t.slots,
      a = t.emit,
      n = u.uniqueId(),
      s = nr(e),
      o = Ht({
        target: null,
        isUpdate: !1,
        visible: !1,
        tipContent: "",
        tipActive: !1,
        tipTarget: null,
        tipZindex: 0,
        tipStore: { style: {}, placement: "", arrowStyle: {} }
      }),
      d = Xe(),
      l = { refElem: d },
      f = {
        xID: n,
        props: e,
        context: t,
        reactData: o,
        getRefMaps: function () {
          return l
        }
      },
      h = {},
      D = function () {
        const K = o.tipTarget,
          O = o.tipStore
        if (K) {
          let A = Ka(),
            X = A.scrollTop,
            J = A.scrollLeft,
            Ce = A.visibleWidth,
            ue = Ta(K),
            Z = ue.top,
            se = ue.left,
            Oe = d.value,
            Ie = 6,
            z = Oe.offsetHeight,
            ge = Oe.offsetWidth,
            oe = se,
            he = Z - z - Ie
          ;(oe = Math.max(Ie, se + Math.floor((K.offsetWidth - ge) / 2))),
            oe + ge + Ie > J + Ce && (oe = J + Ce - ge - Ie),
            Z - z < X + Ie && ((O.placement = "bottom"), (he = Z + K.offsetHeight + Ie)),
            (O.style.top = "".concat(he, "px")),
            (O.style.left = "".concat(oe, "px")),
            (O.arrowStyle.left = "".concat(se - oe + K.offsetWidth / 2, "px"))
        }
      },
      I = function (K) {
        K !== o.visible && ((o.visible = K), (o.isUpdate = !0), a("update:modelValue", K))
      },
      N = function () {
        o.tipZindex < Na() && (o.tipZindex = da())
      },
      F = function () {
        o.visible ? h.close() : h.open()
      },
      q = function () {
        h.open()
      },
      $ = function () {
        const K = e.trigger,
          O = e.enterable,
          A = e.leaveDelay
        ;(o.tipActive = !1),
          O && K === "hover"
            ? setTimeout(function () {
                o.tipActive || h.close()
              }, A)
            : h.close()
      },
      B = function () {
        o.tipActive = !0
      },
      w = function () {
        const K = e.trigger,
          O = e.enterable,
          A = e.leaveDelay
        ;(o.tipActive = !1),
          O &&
            K === "hover" &&
            setTimeout(function () {
              o.tipActive || h.close()
            }, A)
      },
      x = function () {
        const K = o.tipStore,
          O = d.value
        if (O) {
          const A = O.parentNode
          A || document.body.appendChild(O)
        }
        return (
          I(!0),
          N(),
          (K.placement = "top"),
          (K.style = { width: "auto", left: 0, top: 0, zIndex: e.zIndex || o.tipZindex }),
          (K.arrowStyle = { left: "50%" }),
          h.updatePlacement()
        )
      },
      M = u.debounce(
        function () {
          o.tipActive && x()
        },
        e.enterDelay,
        { leading: !1, trailing: !0 }
      )
    ;(h = {
      dispatchEvent: function (K, O, A) {
        a(K, Object.assign({ $tooltip: f, $event: A }, O))
      },
      open: function (K, O) {
        return h.toVisible(K || o.target, O)
      },
      close: function () {
        return (
          (o.tipTarget = null),
          (o.tipActive = !1),
          Object.assign(o.tipStore, { style: {}, placement: "", arrowStyle: null }),
          I(!1),
          de()
        )
      },
      toVisible: function (K, O) {
        if (K) {
          const A = e.trigger,
            X = e.enterDelay
          if (((o.tipActive = !0), (o.tipTarget = K), O && (o.tipContent = O), X && A === "hover")) M()
          else return x()
        }
        return de()
      },
      updatePlacement: function () {
        return de().then(function () {
          const K = o.tipTarget,
            O = d.value
          if (K && O) return D(), de().then(D)
        })
      },
      isActived: function () {
        return o.tipActive
      },
      setActived: function (K) {
        o.tipActive = !!K
      }
    }),
      Object.assign(f, h),
      ut(
        function () {
          return e.content
        },
        function () {
          o.tipContent = e.content
        }
      ),
      ut(
        function () {
          return e.modelValue
        },
        function () {
          o.isUpdate || (e.modelValue ? h.open() : h.close()), (o.isUpdate = !1)
        }
      ),
      pr(function () {
        de(function () {
          const K = e.trigger,
            O = e.content,
            A = e.modelValue,
            X = d.value
          if (X) {
            const J = X.parentNode
            if (J) {
              ;(o.tipContent = O),
                (o.tipZindex = da()),
                u.arrayEach(X.children, function (ue, Z) {
                  Z > 1 && (J.insertBefore(ue, X), o.target || (o.target = ue))
                }),
                J.removeChild(X)
              const Ce = o.target
              Ce &&
                (K === "hover" ? ((Ce.onmouseenter = q), (Ce.onmouseleave = $)) : K === "click" && (Ce.onclick = F)),
                A && h.open()
            }
          }
        })
      }),
      eu(function () {
        const K = e.trigger,
          O = o.target,
          A = d.value
        if (A) {
          const X = A.parentNode
          X && X.removeChild(A)
        }
        O && (K === "hover" ? ((O.onmouseenter = null), (O.onmouseleave = null)) : K === "click" && (O.onclick = null))
      })
    const L = function () {
        const K = e.useHTML,
          O = o.tipContent,
          A = r.content
        return A
          ? p("div", { key: 1, class: "vxe-table--tooltip-content" }, Vt(A({})))
          : K
            ? p("div", { key: 2, class: "vxe-table--tooltip-content", innerHTML: O })
            : p("div", { key: 3, class: "vxe-table--tooltip-content" }, Jt(O))
      },
      Y = function () {
        let K,
          O = e.popupClassName,
          A = e.theme,
          X = e.isArrow,
          J = e.enterable,
          Ce = o.tipActive,
          ue = o.visible,
          Z = o.tipStore,
          se = r.default,
          Oe = s.value,
          Ie
        return (
          J && (Ie = { onMouseenter: B, onMouseleave: w }),
          p(
            "div",
            Xo(
              {
                ref: d,
                class: [
                  "vxe-table--tooltip-wrapper",
                  "theme--".concat(A),
                  O ? (u.isFunction(O) ? O({ $tooltip: f }) : O) : "",
                  ((K = {}),
                  (K["size--".concat(Oe)] = Oe),
                  (K["placement--".concat(Z.placement)] = Z.placement),
                  (K["is--enterable"] = J),
                  (K["is--visible"] = ue),
                  (K["is--arrow"] = X),
                  (K["is--active"] = Ce),
                  K)
                ],
                style: Z.style
              },
              Ie
            ),
            L0([L(), p("div", { class: "vxe-table--tooltip-arrow", style: Z.arrowStyle })], se ? Vt(se({})) : [], !0)
          )
        )
      }
    return (f.renderVN = Y), f
  },
  render: function () {
    return this.renderVN()
  }
})
const Zu = Object.assign(Ii, {
    install: function (e) {
      ;(et.tooltip = !0), e.component(Ii.name, Ii)
    }
  }),
  A0 = Zu
Ft.component(Ii.name, Ii)
const Op = (function () {
  function e(t, r) {
    Object.assign(this, {
      id: u.uniqueId("item_"),
      title: r.title,
      field: r.field,
      span: r.span,
      align: r.align,
      titleAlign: r.titleAlign,
      titleWidth: r.titleWidth,
      titleColon: r.titleColon,
      titleAsterisk: r.titleAsterisk,
      titlePrefix: r.titlePrefix,
      titleSuffix: r.titleSuffix,
      titleOverflow: r.titleOverflow,
      showTitle: r.showTitle,
      resetValue: r.resetValue,
      visibleMethod: r.visibleMethod,
      visible: r.visible,
      folding: r.folding,
      collapseNode: r.collapseNode,
      className: r.className,
      contentClassName: r.contentClassName,
      contentStyle: r.contentStyle,
      titleClassName: r.titleClassName,
      titleStyle: r.titleStyle,
      itemRender: r.itemRender,
      showError: !1,
      errRule: null,
      slots: r.slots,
      children: []
    })
  }
  return (
    (e.prototype.update = function (t, r) {
      this[t] = r
    }),
    e
  )
})()
function V0(e) {
  return e instanceof Op
}
function Ju(e, t) {
  return V0(t) ? t : new Op(e, t)
}
function Ef(e, t) {
  return t ? (u.isString(t) ? e.getItemByField(t) : t) : null
}
function B0(e, t) {
  const r = e.reactData,
    a = r.collapseAll,
    n = t.folding,
    s = t.visible
  return s === !1 || (n && a)
}
function Qu(e, t) {
  let r = t.visibleMethod,
    a = t.itemRender,
    n = t.visible,
    s = t.field
  if (n === !1) return n
  const o = pt(a) ? et.renderer.get(a.name) : null
  if ((!r && o && o.itemVisibleMethod && (r = o.itemVisibleMethod), !r)) return !0
  const d = e.props.data
  return r({ data: d, field: s, property: s, item: t, $form: e, $grid: e.xegrid })
}
function Tp(e, t) {
  Object.keys(e).forEach(function (r) {
    ut(
      function () {
        return e[r]
      },
      function (a) {
        t.update(r, a)
      }
    )
  })
}
function Dp(e, t, r, a) {
  const n = e.reactData,
    s = n.staticItems,
    o = t.parentNode,
    d = a ? a.formItem : null,
    l = d ? d.children : s
  o && (l.splice(u.arrayIndexOf(o.children, t), 0, r), (n.staticItems = s.slice(0)))
}
function Mp(e, t) {
  const r = e.reactData,
    a = r.staticItems,
    n = u.findIndexOf(a, function (s) {
      return s.id === t.id
    })
  n > -1 && a.splice(n, 1), (r.staticItems = a.slice(0))
}
let Ga = function () {
  return (
    (Ga =
      Object.assign ||
      function (e) {
        for (var t, r = 1, a = arguments.length; r < a; r++) {
          t = arguments[r]
          for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      }),
    Ga.apply(this, arguments)
  )
}
function Sf(e) {
  return p("span", { class: "vxe-form--item-title-prefix" }, [p("i", { class: e.icon || C.icon.FORM_PREFIX })])
}
function Of(e) {
  return p("span", { class: "vxe-form--item-title-suffix" }, [p("i", { class: e.icon || C.icon.FORM_SUFFIX })])
}
function Rp(e, t) {
  const r = e.props.data,
    a = e.getComputeMaps().computeTooltipOpts,
    n = t.slots,
    s = t.field,
    o = t.itemRender,
    d = t.titlePrefix,
    l = t.titleSuffix,
    f = a.value,
    h = pt(o) ? et.renderer.get(o.name) : null,
    D = { data: r, field: s, property: s, item: t, $form: e, $grid: e.xegrid },
    I = n ? n.title : null,
    N = [],
    F = []
  d &&
    F.push(
      d.content || d.message
        ? p(It("vxe-tooltip"), Ga(Ga(Ga({}, f), d), { content: zt(d.content || d.message) }), {
            default: function () {
              return Sf(d)
            }
          })
        : Sf(d)
    ),
    F.push(
      p(
        "span",
        { class: "vxe-form--item-title-label" },
        h && h.renderItemTitle ? Vt(h.renderItemTitle(o, D)) : I ? e.callSlot(I, D) : zt(t.title)
      )
    ),
    N.push(p("div", { class: "vxe-form--item-title-content" }, F))
  const q = []
  return (
    l &&
      q.push(
        l.content || l.message
          ? p(It("vxe-tooltip"), Ga(Ga(Ga({}, f), l), { content: zt(l.content || l.message) }), {
              default: function () {
                return Of(l)
              }
            })
          : Of(l)
      ),
    N.push(p("div", { class: "vxe-form--item-title-postfix" }, q)),
    N
  )
}
var Ko = function () {
    return (
      (Ko =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      Ko.apply(this, arguments)
    )
  },
  kp = Dt({
    name: "VxeFormConfigItem",
    props: { itemConfig: Object },
    setup: function (e) {
      const t = gt("$xeform", {}),
        r = { itemConfig: e.itemConfig }
      Yt("$xeformiteminfo", r), Yt("$xeformgather", null)
      const a = function () {
          const s = t.reactData,
            o = t.props,
            d = o.data,
            l = o.rules,
            f = o.span,
            h = o.align,
            D = o.titleAlign,
            I = o.titleWidth,
            N = o.titleColon,
            F = o.titleAsterisk,
            q = o.titleOverflow,
            $ = o.vertical,
            B = t.getComputeMaps().computeValidOpts,
            w = e.itemConfig,
            x = s.collapseAll,
            M = B.value,
            L = w.slots,
            Y = w.title,
            K = w.visible,
            O = w.folding,
            A = w.field,
            X = w.collapseNode,
            J = w.itemRender,
            Ce = w.showError,
            ue = w.errRule,
            Z = w.className,
            se = w.titleOverflow,
            Oe = w.vertical,
            Ie = w.children,
            z = w.showTitle,
            ge = w.contentClassName,
            oe = w.contentStyle,
            he = w.titleClassName,
            ve = w.titleStyle,
            De = pt(J) ? et.renderer.get(J.name) : null,
            Ne = De ? De.itemClassName : "",
            $e = De ? De.itemStyle : null,
            Te = De ? De.itemContentClassName : "",
            Ve = De ? De.itemContentStyle : null,
            W = De ? De.itemTitleClassName : "",
            ce = De ? De.itemTitleStyle : null,
            ye = L ? L.default : null,
            Ae = L ? L.title : null,
            Re = w.span || f,
            ae = w.align || h,
            fe = u.eqNull(w.titleAlign) ? D : w.titleAlign,
            U = u.eqNull(w.titleWidth) ? I : w.titleWidth,
            G = u.eqNull(w.titleColon) ? N : w.titleColon,
            ne = u.eqNull(w.titleAsterisk) ? F : w.titleAsterisk,
            y = u.isUndefined(se) || u.isNull(se) ? q : se,
            k = u.isUndefined(Oe) || u.isNull(Oe) ? $ : Oe,
            ee = y === "ellipsis",
            le = y === "title",
            me = y === !0 || y === "tooltip",
            be = le || me || ee,
            Le = { data: d, field: A, property: A, item: w, $form: t, $grid: t.xegrid }
          if (K === !1) return Ot()
          let j = !1
          if (l) {
            const H = l[A]
            H &&
              (j = H.some(function (te) {
                return te.required
              }))
          }
          const ie = Ie && Ie.length > 0
          if (ie) {
            const we = Ie.map(function (te, Me) {
              return p(kp, { key: Me, itemConfig: te })
            })
            return we.length
              ? p(
                  "div",
                  {
                    class: [
                      "vxe-form--gather vxe-row",
                      w.id,
                      Re ? "vxe-col--".concat(Re, " is--span") : "",
                      Z ? (u.isFunction(Z) ? Z(Le) : Z) : ""
                    ]
                  },
                  we
                )
              : Ot()
          }
          let E = []
          ye
            ? (E = t.callSlot(ye, Le))
            : De && De.renderItemContent
              ? (E = Vt(De.renderItemContent(J, Le)))
              : A && (E = [u.toValueString(u.get(d, A))]),
            X &&
              E.push(
                p("div", { class: "vxe-form--item-trigger-node", onClick: t.toggleCollapseEvent }, [
                  p(
                    "span",
                    { class: "vxe-form--item-trigger-text" },
                    x ? C.i18n("vxe.form.unfolding") : C.i18n("vxe.form.folding")
                  ),
                  p("i", { class: ["vxe-form--item-trigger-icon", x ? C.icon.FORM_FOLDING : C.icon.FORM_UNFOLDING] })
                ])
              ),
            ue &&
              M.showMessage &&
              E.push(
                p(
                  "div",
                  {
                    class: "vxe-form--item-valid",
                    style: ue.maxWidth ? { width: "".concat(ue.maxWidth, "px") } : null
                  },
                  ue.content
                )
              )
          const _ = me
            ? {
                onMouseenter: function (te) {
                  t.triggerTitleTipEvent(te, Le)
                },
                onMouseleave: t.handleTitleTipLeaveEvent
              }
            : {}
          return p(
            "div",
            {
              class: [
                "vxe-form--item",
                w.id,
                Re ? "vxe-col--".concat(Re, " is--span") : "",
                Z ? (u.isFunction(Z) ? Z(Le) : Z) : "",
                Ne ? (u.isFunction(Ne) ? Ne(Le) : Ne) : "",
                {
                  "is--title": Y,
                  "is--colon": G,
                  "is--vertical": k,
                  "is--asterisk": ne,
                  "is--required": j,
                  "is--hidden": O && x,
                  "is--active": Qu(t, w),
                  "is--error": Ce
                }
              ],
              style: u.isFunction($e) ? $e(Le) : $e
            },
            [
              p("div", { class: "vxe-form--item-inner" }, [
                z !== !1 && (Y || Ae)
                  ? p(
                      "div",
                      Ko(
                        {
                          class: [
                            "vxe-form--item-title",
                            fe ? "align--".concat(fe) : "",
                            be ? "is--ellipsis" : "",
                            W ? (u.isFunction(W) ? W(Le) : W) : "",
                            he ? (u.isFunction(he) ? he(Le) : he) : ""
                          ],
                          style: Object.assign(
                            {},
                            u.isFunction(ce) ? ce(Le) : ce,
                            u.isFunction(ve) ? ve(Le) : ve,
                            U ? { width: isNaN(U) ? U : "".concat(U, "px") } : null
                          ),
                          title: le ? zt(Y) : null
                        },
                        _
                      ),
                      Rp(t, w)
                    )
                  : null,
                p(
                  "div",
                  {
                    class: [
                      "vxe-form--item-content",
                      ae ? "align--".concat(ae) : "",
                      Te ? (u.isFunction(Te) ? Te(Le) : Te) : "",
                      ge ? (u.isFunction(ge) ? ge(Le) : ge) : ""
                    ],
                    style: Object.assign({}, u.isFunction(Ve) ? Ve(Le) : Ve, u.isFunction(oe) ? oe(Le) : oe)
                  },
                  E
                )
              ])
            ]
          )
        },
        n = { renderVN: a }
      return n
    },
    render: function () {
      return this.renderVN()
    }
  }),
  Zo = function () {
    return (
      (Zo =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      Zo.apply(this, arguments)
    )
  },
  bi = (function () {
    function e(t) {
      Object.assign(this, {
        $options: t,
        required: t.required,
        min: t.min,
        max: t.min,
        type: t.type,
        pattern: t.pattern,
        validator: t.validator,
        trigger: t.trigger,
        maxWidth: t.maxWidth
      })
    }
    return (
      Object.defineProperty(e.prototype, "content", {
        get: function () {
          return zt(this.$options.content || this.$options.message)
        },
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "message", {
        get: function () {
          return this.content
        },
        enumerable: !1,
        configurable: !0
      }),
      e
    )
  })(),
  Tf = function (e, t) {
    const r = e.type,
      a = e.min,
      n = e.max,
      s = e.pattern,
      o = r === "number",
      d = o ? u.toNumber(t) : u.getSize(t)
    return !!(
      (o && isNaN(t)) ||
      (!u.eqNull(a) && d < u.toNumber(a)) ||
      (!u.eqNull(n) && d > u.toNumber(n)) ||
      (s && !(u.isRegExp(s) ? s : new RegExp(s)).test(t))
    )
  }
function H0(e, t) {
  return u.isArray(e) && (t = []), t
}
const Ni = Dt({
  name: "VxeForm",
  props: {
    collapseStatus: { type: Boolean, default: !0 },
    loading: Boolean,
    data: Object,
    size: {
      type: String,
      default: function () {
        return C.form.size || C.size
      }
    },
    span: {
      type: [String, Number],
      default: function () {
        return C.form.span
      }
    },
    align: {
      type: String,
      default: function () {
        return C.form.align
      }
    },
    titleAlign: {
      type: String,
      default: function () {
        return C.form.titleAlign
      }
    },
    titleWidth: {
      type: [String, Number],
      default: function () {
        return C.form.titleWidth
      }
    },
    titleColon: {
      type: Boolean,
      default: function () {
        return C.form.titleColon
      }
    },
    titleAsterisk: {
      type: Boolean,
      default: function () {
        return C.form.titleAsterisk
      }
    },
    titleOverflow: { type: [Boolean, String], default: null },
    vertical: { type: Boolean, default: null },
    className: [String, Function],
    readonly: Boolean,
    items: Array,
    rules: Object,
    preventSubmit: {
      type: Boolean,
      default: function () {
        return C.form.preventSubmit
      }
    },
    validConfig: Object,
    tooltipConfig: Object,
    customLayout: {
      type: Boolean,
      default: function () {
        return C.form.customLayout
      }
    }
  },
  emits: ["update:collapseStatus", "collapse", "toggle-collapse", "submit", "submit-invalid", "reset"],
  setup: function (e, t) {
    let r = et.tooltip,
      a = t.slots,
      n = t.emit,
      s = u.uniqueId(),
      o = nr(e),
      d = Ht({ collapseAll: e.collapseStatus, staticItems: [], formItems: [] }),
      l = Ht({ tooltipTimeout: null, tooltipStore: { item: null, visible: !1 } }),
      f = gt("$xegrid", null),
      h = Xe(),
      D = Xe(),
      I = {},
      N = Pe(function () {
        return Object.assign({}, C.form.validConfig, e.validConfig)
      }),
      F = Pe(function () {
        return Object.assign({}, C.tooltip, C.form.tooltipConfig, e.tooltipConfig)
      }),
      q = { refElem: h },
      $ = { computeSize: o, computeValidOpts: N, computeTooltipOpts: F },
      B = {
        xID: s,
        props: e,
        context: t,
        reactData: d,
        xegrid: f,
        getRefMaps: function () {
          return q
        },
        getComputeMaps: function () {
          return $
        }
      },
      w = function (W, ce) {
        return W && (u.isString(W) && (W = a[W] || null), u.isFunction(W)) ? Vt(W(ce)) : []
      },
      x = function (W) {
        return (
          W.length &&
            (d.staticItems = u.mapTree(
              W,
              function (ce) {
                return Ju(B, ce)
              },
              { children: "children" }
            )),
          de()
        )
      },
      M = function () {
        const W = []
        return (
          u.eachTree(
            d.formItems,
            function (ce) {
              W.push(ce)
            },
            { children: "children" }
          ),
          W
        )
      },
      L = function (W) {
        const ce = u.findTree(
          d.formItems,
          function (ye) {
            return ye.field === W
          },
          { children: "children" }
        )
        return ce ? ce.item : null
      },
      Y = function () {
        return d.collapseAll
      },
      K = function () {
        const W = !Y()
        return (d.collapseAll = W), n("update:collapseStatus", W), de()
      },
      O = function (W) {
        K()
        const ce = Y()
        I.dispatchEvent("toggle-collapse", { status: ce, collapse: ce, data: e.data }, W),
          I.dispatchEvent("collapse", { status: ce, collapse: ce, data: e.data }, W)
      },
      A = function (W) {
        if (W) {
          let ce = W
          u.isArray(W) || (ce = [W]),
            ce.forEach(function (ye) {
              if (ye) {
                const Ae = Ef(B, ye)
                Ae && (Ae.showError = !1)
              }
            })
        } else
          M().forEach(function (ye) {
            ye.showError = !1
          })
        return de()
      },
      X = function () {
        const W = e.data,
          ce = M()
        return (
          W &&
            ce.forEach(function (ye) {
              const Ae = ye.field,
                Re = ye.resetValue,
                ae = ye.itemRender
              if (pt(ae)) {
                const fe = et.renderer.get(ae.name)
                fe && fe.itemResetMethod
                  ? fe.itemResetMethod({ data: W, field: Ae, property: Ae, item: ye, $form: B, $grid: B.xegrid })
                  : Ae && u.set(W, Ae, Re === null ? H0(u.get(W, Ae), void 0) : u.clone(Re, !0))
              }
            }),
          A()
        )
      },
      J = function (W) {
        W.preventDefault(), X(), I.dispatchEvent("reset", { data: e.data }, W)
      },
      Ce = function (W) {
        for (let ce = h.value, ye = 0; ye < W.length; ye++) {
          const Ae = W[ye],
            Re = L(Ae)
          if (Re && pt(Re.itemRender)) {
            let ae = Re.itemRender,
              fe = et.renderer.get(ae.name),
              U = null
            if (
              (ye || Vd(ce.querySelector(".".concat(Re.id))),
              ae.autofocus && (U = ce.querySelector(".".concat(Re.id, " ").concat(ae.autofocus))),
              !U && fe && fe.autofocus && (U = ce.querySelector(".".concat(Re.id, " ").concat(fe.autofocus))),
              U)
            ) {
              U.focus()
              break
            }
          }
        }
      },
      ue = function (W, ce, ye) {
        const Ae = e.data,
          Re = e.rules,
          ae = {}
        return (
          u.isArray(ce) || (ce = [ce]),
          Promise.all(
            ce.map(function (fe) {
              const U = [],
                G = []
              if (fe && Re) {
                const ne = u.get(Re, fe)
                if (ne) {
                  const y = u.isUndefined(ye) ? u.get(Ae, fe) : ye
                  ne.forEach(function (k) {
                    const ee = k.type,
                      le = k.trigger,
                      me = k.required,
                      be = k.validator
                    if (W === "all" || !le || W === le)
                      if (be) {
                        let Le = { itemValue: y, rule: k, rules: ne, data: Ae, field: fe, property: fe, $form: B },
                          j = void 0
                        if (u.isString(be)) {
                          const H = et.validators.get(be)
                          H && H.itemValidatorMethod && (j = H.itemValidatorMethod(Le))
                        } else j = be(Le)
                        j &&
                          (u.isError(j)
                            ? U.push(new bi({ type: "custom", trigger: le, content: j.message, rule: new bi(k) }))
                            : j.catch &&
                              G.push(
                                j.catch(function (_) {
                                  U.push(
                                    new bi({
                                      type: "custom",
                                      trigger: le,
                                      content: _ ? _.message : k.content || k.message,
                                      rule: new bi(k)
                                    })
                                  )
                                })
                              ))
                      } else {
                        let ie = ee === "array",
                          we = u.isArray(y),
                          E = !0
                        ie || we ? (E = !we || !y.length) : u.isString(y) ? (E = ea(y.trim())) : (E = ea(y)),
                          (me ? E || Tf(k, y) : !E && Tf(k, y)) && U.push(new bi(k))
                      }
                  })
                }
              }
              return Promise.all(G).then(function () {
                U.length &&
                  (ae[fe] = U.map(function (k) {
                    return { $form: B, rule: k, data: Ae, field: fe, property: fe }
                  }))
              })
            })
          ).then(function () {
            if (!u.isEmpty(ae)) return Promise.reject(ae)
          })
        )
      },
      Z,
      se = function (W, ce, ye) {
        const Ae = e.data,
          Re = e.rules,
          ae = N.value,
          fe = {},
          U = [],
          G = []
        return (
          clearTimeout(Z),
          Ae && Re
            ? (W.forEach(function (ne) {
                const y = ne.field
                y &&
                  !B0(B, ne) &&
                  Qu(B, ne) &&
                  G.push(
                    ue(ce || "all", y)
                      .then(function () {
                        ne.errRule = null
                      })
                      .catch(function (k) {
                        const ee = k[y]
                        return (
                          fe[y] || (fe[y] = []),
                          fe[y].push(ee),
                          U.push(y),
                          (ne.errRule = ee[0].rule),
                          Promise.reject(ee)
                        )
                      })
                  )
              }),
              Promise.all(G)
                .then(function () {
                  ye && ye()
                })
                .catch(function () {
                  return new Promise(function (ne) {
                    ;(Z = window.setTimeout(function () {
                      W.forEach(function (y) {
                        y.errRule && (y.showError = !0)
                      })
                    }, 20)),
                      ae.autoPos !== !1 &&
                        de(function () {
                          Ce(U)
                        }),
                      ye ? (ye(fe), ne()) : ne(fe)
                  })
                }))
            : (ye && ye(), Promise.resolve())
        )
      },
      Oe = function (W) {
        return A(), se(M(), "", W)
      },
      Ie = function (W, ce) {
        let ye = []
        return (
          u.isArray(W) ? (ye = W) : (ye = [W]),
          se(
            ye.map(function (Ae) {
              return Ef(B, Ae)
            }),
            "",
            ce
          )
        )
      },
      z = function (W) {
        W.preventDefault(),
          e.preventSubmit ||
            (A(),
            se(M()).then(function (ce) {
              ce
                ? I.dispatchEvent("submit-invalid", { data: e.data, errMap: ce }, W)
                : I.dispatchEvent("submit", { data: e.data }, W)
            }))
      },
      ge = function () {
        const W = l.tooltipStore,
          ce = D.value
        return W.visible && (Object.assign(W, { item: null, visible: !1 }), ce && ce.close()), de()
      },
      oe = function (W, ce) {
        const ye = ce.item,
          Ae = l.tooltipStore,
          Re = D.value,
          ae = W.currentTarget.children[0],
          fe = (ae.textContent || "").trim(),
          U = ae.scrollWidth > ae.clientWidth
        clearTimeout(l.tooltipTimeout),
          Ae.item !== ye && ge(),
          fe && U && (Object.assign(Ae, { item: ye, visible: !0 }), Re && Re.open(ae, fe))
      },
      he = function () {
        let W = F.value,
          ce = D.value
        ce && ce.setActived(!1),
          W.enterable
            ? (l.tooltipTimeout = setTimeout(function () {
                ;(ce = D.value), ce && !ce.isActived() && ge()
              }, W.leaveDelay))
            : ge()
      },
      ve = function (W, ce, ye) {
        return ce
          ? ue(W ? (["blur"].includes(W.type) ? "blur" : "change") : "all", ce, ye)
              .then(function () {
                A(ce)
              })
              .catch(function (Ae) {
                const Re = Ae[ce],
                  ae = L(ce)
                Re && ae && ((ae.showError = !0), (ae.errRule = Re[0].rule))
              })
          : de()
      },
      De = function (W, ce) {
        const ye = W.field
        return ve(new Event("change"), ye, ce)
      }
    I = {
      dispatchEvent: function (W, ce, ye) {
        n(W, Object.assign({ $form: B, $grid: f, $event: ye }, ce))
      },
      reset: X,
      validate: Oe,
      validateField: Ie,
      clearValidate: A,
      updateStatus: De,
      toggleCollapse: K,
      getItems: M,
      getItemByField: L,
      closeTooltip: ge
    }
    const Ne = {
      callSlot: w,
      triggerItemEvent: ve,
      toggleCollapseEvent: O,
      triggerTitleTipEvent: oe,
      handleTitleTipLeaveEvent: he
    }
    Object.assign(B, I, Ne)
    const $e = Xe(0)
    ut(
      function () {
        return d.staticItems.length
      },
      function () {
        $e.value++
      }
    ),
      ut(
        function () {
          return d.staticItems
        },
        function () {
          $e.value++
        }
      ),
      ut($e, function () {
        d.formItems = d.staticItems
      })
    const Te = Xe(0)
    ut(
      function () {
        return e.items ? e.items.length : -1
      },
      function () {
        Te.value++
      }
    ),
      ut(
        function () {
          return e.items
        },
        function () {
          Te.value++
        }
      ),
      ut(Te, function () {
        x(e.items || [])
      }),
      ut(
        function () {
          return e.collapseStatus
        },
        function (W) {
          d.collapseAll = !!W
        }
      ),
      pr(function () {
        de(function () {
          x(e.items || [])
        })
      })
    const Ve = function () {
      let W,
        ce = e.loading,
        ye = e.className,
        Ae = e.data,
        Re = e.customLayout,
        ae = d.formItems,
        fe = o.value,
        U = F.value,
        G = a.default
      return p(
        "form",
        {
          ref: h,
          class: [
            "vxe-form",
            ye ? (u.isFunction(ye) ? ye({ items: ae, data: Ae, $form: B }) : ye) : "",
            ((W = {}), (W["size--".concat(fe)] = fe), (W["is--loading"] = ce), W)
          ],
          onSubmit: z,
          onReset: J
        },
        [
          p(
            "div",
            { class: "vxe-form--wrapper vxe-row" },
            Re
              ? G
                ? G({})
                : []
              : ae.map(function (ne, y) {
                  return p(kp, { key: y, itemConfig: ne })
                })
          ),
          p("div", { class: "vxe-form-slots", ref: "hideItem" }, Re ? [] : G ? G({}) : []),
          p(Kl, { class: "vxe-form--loading", modelValue: ce }),
          r ? p(It("vxe-tooltip"), Zo({ ref: D }, U)) : Ot()
        ]
      )
    }
    return (
      (B.renderVN = Ve),
      Yt("$xeform", B),
      Yt("$xeformgather", null),
      Yt("$xeformitem", null),
      Yt("$xeformiteminfo", null),
      B
    )
  },
  render: function () {
    return this.renderVN()
  }
})
const ec = Object.assign(Ni, {
    install: function (e) {
      e.component(Ni.name, Ni)
    }
  }),
  z0 = ec
Ft.component(Ni.name, Ni)
let Jo = function () {
    return (
      (Jo =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      Jo.apply(this, arguments)
    )
  },
  Fp = {
    title: String,
    field: String,
    span: [String, Number],
    align: String,
    titleAlign: { type: String, default: null },
    titleWidth: { type: [String, Number], default: null },
    titleColon: { type: Boolean, default: null },
    titleAsterisk: { type: Boolean, default: null },
    showTitle: { type: Boolean, default: !0 },
    vertical: { type: Boolean, default: null },
    className: [String, Function],
    contentClassName: [String, Function],
    contentStyle: [Object, Function],
    titleClassName: [String, Function],
    titleStyle: [Object, Function],
    titleOverflow: { type: [Boolean, String], default: null },
    titlePrefix: Object,
    titleSuffix: Object,
    resetValue: { default: null },
    visibleMethod: Function,
    visible: { type: Boolean, default: null },
    folding: Boolean,
    collapseNode: Boolean,
    itemRender: Object
  }
const Pi = Dt({
  name: "VxeFormItem",
  props: Fp,
  setup: function (e, t) {
    const r = t.slots,
      a = Xe(),
      n = gt("$xeform", {}),
      s = gt("$xeformgather", null),
      o = Ht(Ju(n, e)),
      d = { formItem: o },
      l = { itemConfig: o }
    ;(o.slots = r),
      Yt("$xeformiteminfo", l),
      Yt("$xeformitem", d),
      Yt("$xeformgather", null),
      Tp(e, o),
      pr(function () {
        Dp(n, a.value, o, s)
      }),
      or(function () {
        Mp(n, o)
      })
    const f = function (I, N) {
        let F = I.props,
          q = I.reactData,
          $ = F.data,
          B = F.rules,
          w = F.titleAlign,
          x = F.titleWidth,
          M = F.titleColon,
          L = F.titleAsterisk,
          Y = F.titleOverflow,
          K = F.vertical,
          O = q.collapseAll,
          A = I.getComputeMaps().computeValidOpts,
          X = A.value,
          J = N.slots,
          Ce = N.title,
          ue = N.visible,
          Z = N.folding,
          se = N.field,
          Oe = N.collapseNode,
          Ie = N.itemRender,
          z = N.showError,
          ge = N.errRule,
          oe = N.className,
          he = N.titleOverflow,
          ve = N.vertical,
          De = N.showTitle,
          Ne = N.contentClassName,
          $e = N.contentStyle,
          Te = N.titleClassName,
          Ve = N.titleStyle,
          W = pt(Ie) ? et.renderer.get(Ie.name) : null,
          ce = W ? W.itemClassName : "",
          ye = W ? W.itemStyle : null,
          Ae = W ? W.itemContentClassName : "",
          Re = W ? W.itemContentStyle : null,
          ae = W ? W.itemTitleClassName : "",
          fe = W ? W.itemTitleStyle : null,
          U = J ? J.default : null,
          G = J ? J.title : null,
          ne = N.span || F.span,
          y = N.align || F.align,
          k = u.eqNull(N.titleAlign) ? w : N.titleAlign,
          ee = u.eqNull(N.titleWidth) ? x : N.titleWidth,
          le = u.eqNull(N.titleColon) ? M : N.titleColon,
          me = u.eqNull(N.titleAsterisk) ? L : N.titleAsterisk,
          be = u.isUndefined(he) || u.isNull(he) ? Y : he,
          Le = u.isUndefined(ve) || u.isNull(ve) ? K : ve,
          j = be === "ellipsis",
          H = be === "title",
          ie = be === !0 || be === "tooltip",
          we = H || ie || j,
          E = { data: $, field: se, property: se, item: N, $form: I, $grid: I.xegrid },
          _ = !1
        if (ue === !1) return Ot()
        if (B) {
          const te = B[se]
          te &&
            (_ = te.some(function (Be) {
              return Be.required
            }))
        }
        let Me = []
        U
          ? (Me = I.callSlot(U, E))
          : W && W.renderItemContent
            ? (Me = Vt(W.renderItemContent(Ie, E)))
            : se && (Me = ["".concat(u.get($, se))]),
          Oe &&
            Me.push(
              p("div", { class: "vxe-form--item-trigger-node", onClick: I.toggleCollapseEvent }, [
                p(
                  "span",
                  { class: "vxe-form--item-trigger-text" },
                  O ? C.i18n("vxe.form.unfolding") : C.i18n("vxe.form.folding")
                ),
                p("i", { class: ["vxe-form--item-trigger-icon", O ? C.icon.FORM_FOLDING : C.icon.FORM_UNFOLDING] })
              ])
            ),
          ge &&
            X.showMessage &&
            Me.push(
              p(
                "div",
                { class: "vxe-form--item-valid", style: ge.maxWidth ? { width: "".concat(ge.maxWidth, "px") } : null },
                ge.message
              )
            )
        const ke = ie
          ? {
              onMouseenter: function (Be) {
                I.triggerTitleTipEvent(Be, E)
              },
              onMouseleave: I.handleTitleTipLeaveEvent
            }
          : {}
        return p(
          "div",
          {
            ref: a,
            class: [
              "vxe-form--item",
              N.id,
              ne ? "vxe-col--".concat(ne, " is--span") : "",
              oe ? (u.isFunction(oe) ? oe(E) : oe) : "",
              ce ? (u.isFunction(ce) ? ce(E) : ce) : "",
              {
                "is--title": Ce,
                "is--colon": le,
                "is--vertical": Le,
                "is--asterisk": me,
                "is--required": _,
                "is--hidden": Z && O,
                "is--active": Qu(I, N),
                "is--error": z
              }
            ],
            style: u.isFunction(ye) ? ye(E) : ye
          },
          [
            p("div", { class: "vxe-form--item-inner" }, [
              De !== !1 && (Ce || G)
                ? p(
                    "div",
                    Jo(
                      {
                        class: [
                          "vxe-form--item-title",
                          k ? "align--".concat(k) : "",
                          we ? "is--ellipsis" : "",
                          ae ? (u.isFunction(ae) ? ae(E) : ae) : "",
                          Te ? (u.isFunction(Te) ? Te(E) : Te) : ""
                        ],
                        style: Object.assign(
                          {},
                          u.isFunction(fe) ? fe(E) : fe,
                          u.isFunction(Ve) ? Ve(E) : Ve,
                          ee ? { width: isNaN(ee) ? ee : "".concat(ee, "px") } : null
                        ),
                        title: H ? zt(Ce) : null
                      },
                      ke
                    ),
                    Rp(I, N)
                  )
                : null,
              p(
                "div",
                {
                  class: [
                    "vxe-form--item-content",
                    y ? "align--".concat(y) : "",
                    Ae ? (u.isFunction(Ae) ? Ae(E) : Ae) : "",
                    Ne ? (u.isFunction(Ne) ? Ne(E) : Ne) : ""
                  ],
                  style: Object.assign({}, u.isFunction(Re) ? Re(E) : Re, u.isFunction($e) ? $e(E) : $e)
                },
                Me
              )
            ])
          ]
        )
      },
      h = function () {
        const I = n ? n.props : null
        return I && I.customLayout ? f(n, o) : p("div", { ref: a })
      },
      D = { renderVN: h }
    return D
  },
  render: function () {
    return this.renderVN()
  }
})
const tc = Object.assign(Pi, {
    install: function (e) {
      e.component(Pi.name, Pi)
    }
  }),
  W0 = tc
Ft.component(Pi.name, Pi)
const $i = Dt({
  name: "VxeFormGather",
  props: Fp,
  setup: function (e, t) {
    const r = t.slots,
      a = Xe(),
      n = gt("$xeform", {}),
      s = gt("$xeformgather", null),
      o = r.default,
      d = Ht(Ju(n, e)),
      l = { formItem: d },
      f = { itemConfig: d }
    ;(d.children = []),
      Yt("$xeformiteminfo", f),
      Yt("$xeformgather", l),
      Yt("$xeformitem", null),
      Tp(e, d),
      pr(function () {
        Dp(n, a.value, d, s)
      }),
      or(function () {
        Mp(n, d)
      })
    const h = function () {
        return p("div", { ref: a }, o ? o() : [])
      },
      D = { renderVN: h }
    return D
  },
  render: function () {
    return this.renderVN()
  }
})
const rc = Object.assign($i, {
    install: function (e) {
      e.component($i.name, $i)
    }
  }),
  _0 = rc
Ft.component($i.name, $i)
const ac = Object.assign(wn, {
    install: function (e) {
      e.component(wn.name, wn)
    }
  }),
  j0 = ac
Ft.component(wn.name, wn)
const Ip = (function () {
  function e(t, r) {
    Object.assign(this, {
      id: u.uniqueId("option_"),
      value: r.value,
      label: r.label,
      visible: r.visible,
      className: r.className,
      disabled: r.disabled
    })
  }
  return (
    (e.prototype.update = function (t, r) {
      this[t] = r
    }),
    e
  )
})()
function q0(e) {
  return e instanceof Ip
}
function Np(e, t) {
  return q0(t) ? t : new Ip(e, t)
}
function Pp(e, t) {
  Object.keys(e).forEach(function (r) {
    ut(
      function () {
        return e[r]
      },
      function (a) {
        t.update(r, a)
      }
    )
  })
}
function $p(e, t, r, a) {
  const n = e.reactData,
    s = n.staticOptions,
    o = t.parentNode,
    d = a ? a.option : null,
    l = d ? d.options : s
  o && l && (l.splice(u.arrayIndexOf(o.children, t), 0, r), (n.staticOptions = s.slice(0)))
}
function Lp(e, t) {
  const r = e.reactData,
    a = r.staticOptions,
    n = u.findTree(
      a,
      function (s) {
        return s.id === t.id
      },
      { children: "options" }
    )
  n && n.items.splice(n.index, 1), (r.staticOptions = a.slice(0))
}
const Li = Dt({
  name: "VxeOptgroup",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    visible: { type: Boolean, default: null },
    className: [String, Function],
    disabled: Boolean
  },
  setup: function (e, t) {
    const r = t.slots,
      a = Xe(),
      n = gt("$xeselect", {}),
      s = Np(n, e),
      o = { option: s }
    return (
      (s.options = []),
      Yt("xeoptgroup", o),
      Pp(e, s),
      pr(function () {
        $p(n, a.value, s)
      }),
      or(function () {
        Lp(n, s)
      }),
      function () {
        return p("div", { ref: a }, r.default ? r.default() : [])
      }
    )
  }
})
const nc = Object.assign(Li, {
    install: function (e) {
      e.component(Li.name, Li)
    }
  }),
  Y0 = nc
Ft.component(Li.name, Li)
const Ai = Dt({
  name: "VxeOption",
  props: {
    value: null,
    label: { type: [String, Number, Boolean], default: "" },
    visible: { type: Boolean, default: null },
    className: [String, Function],
    disabled: Boolean
  },
  setup: function (e, t) {
    const r = t.slots,
      a = Xe(),
      n = gt("$xeselect", {}),
      s = gt("xeoptgroup", null),
      o = Np(n, e)
    return (
      (o.slots = r),
      Pp(e, o),
      pr(function () {
        $p(n, a.value, o, s)
      }),
      or(function () {
        Lp(n, o)
      }),
      function () {
        return p("div", { ref: a })
      }
    )
  }
})
const ic = Object.assign(Ai, {
    install: function (e) {
      e.component(Ai.name, Ai)
    }
  }),
  G0 = ic
Ft.component(Ai.name, Ai)
const Vi = Dt({
  name: "VxeSwitch",
  props: {
    modelValue: [String, Number, Boolean],
    disabled: Boolean,
    size: {
      type: String,
      default: function () {
        return C.switch.size || C.size
      }
    },
    openLabel: String,
    closeLabel: String,
    openValue: { type: [String, Number, Boolean], default: !0 },
    closeValue: { type: [String, Number, Boolean], default: !1 },
    openIcon: String,
    closeIcon: String
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup: function (e, t) {
    let r = t.emit,
      a = gt("$xeform", null),
      n = gt("$xeformiteminfo", null),
      s = u.uniqueId(),
      o = nr(e),
      d = Ht({ isActivated: !1, hasAnimat: !1, offsetLeft: 0 }),
      l = { xID: s, props: e, context: t, reactData: d },
      f = Xe(),
      h = {},
      D = Pe(function () {
        return zt(e.openLabel)
      }),
      I = Pe(function () {
        return zt(e.closeLabel)
      }),
      N = Pe(function () {
        return e.modelValue === e.openValue
      }),
      F,
      q = function (x) {
        if (!e.disabled) {
          const M = N.value
          clearTimeout(F)
          const L = M ? e.closeValue : e.openValue
          ;(d.hasAnimat = !0),
            r("update:modelValue", L),
            h.dispatchEvent("change", { value: L }, x),
            a && n && a.triggerItemEvent(x, n.itemConfig.field, L),
            (F = setTimeout(function () {
              d.hasAnimat = !1
            }, 400))
        }
      },
      $ = function (x) {
        ;(d.isActivated = !0), h.dispatchEvent("focus", { value: e.modelValue }, x)
      },
      B = function (x) {
        ;(d.isActivated = !1), h.dispatchEvent("blur", { value: e.modelValue }, x)
      }
    ;(h = {
      dispatchEvent: function (x, M, L) {
        r(x, Object.assign({ $switch: l, $event: L }, M))
      },
      focus: function () {
        const x = f.value
        return (d.isActivated = !0), x.focus(), de()
      },
      blur: function () {
        const x = f.value
        return x.blur(), (d.isActivated = !1), de()
      }
    }),
      Object.assign(l, h)
    const w = function () {
      let x,
        M = e.disabled,
        L = e.openIcon,
        Y = e.closeIcon,
        K = N.value,
        O = o.value,
        A = D.value,
        X = I.value
      return p(
        "div",
        {
          class: [
            "vxe-switch",
            K ? "is--on" : "is--off",
            ((x = {}), (x["size--".concat(O)] = O), (x["is--disabled"] = M), (x["is--animat"] = d.hasAnimat), x)
          ]
        },
        [
          p(
            "button",
            { ref: f, class: "vxe-switch--button", type: "button", disabled: M, onClick: q, onFocus: $, onBlur: B },
            [
              p("span", { class: "vxe-switch--label vxe-switch--label-on" }, [
                L ? p("i", { class: ["vxe-switch--label-icon", L] }) : Ot(),
                A
              ]),
              p("span", { class: "vxe-switch--label vxe-switch--label-off" }, [
                Y ? p("i", { class: ["vxe-switch--label-icon", Y] }) : Ot(),
                X
              ]),
              p("span", { class: "vxe-switch--icon" })
            ]
          )
        ]
      )
    }
    return (l.renderVN = w), l
  },
  render: function () {
    return this.renderVN()
  }
})
const lc = Object.assign(Vi, {
    install: function (e) {
      e.component(Vi.name, Vi)
    }
  }),
  U0 = lc
Ft.component(Vi.name, Vi)
let Df,
  dn = [],
  X0 = 500
function K0() {
  dn.length &&
    (dn.forEach(function (e) {
      e.tarList.forEach(function (t) {
        const r = t.target,
          a = t.width,
          n = t.heighe,
          s = r.clientWidth,
          o = r.clientHeight,
          d = s && a !== s,
          l = o && n !== o
        ;(d || l) && ((t.width = s), (t.heighe = o), setTimeout(e.callback))
      })
    }),
    Ap())
}
function Ap() {
  clearTimeout(Df), (Df = setTimeout(K0, C.resizeInterval || X0))
}
const Z0 = (function () {
  function e(t) {
    ;(this.tarList = []), (this.callback = t)
  }
  return (
    (e.prototype.observe = function (t) {
      const r = this
      if (t) {
        const a = this.tarList
        a.some(function (n) {
          return n.target === t
        }) || a.push({ target: t, width: t.clientWidth, heighe: t.clientHeight }),
          dn.length || Ap(),
          dn.some(function (n) {
            return n === r
          }) || dn.push(this)
      }
    }),
    (e.prototype.unobserve = function (t) {
      u.remove(dn, function (r) {
        return r.tarList.some(function (a) {
          return a.target === t
        })
      })
    }),
    (e.prototype.disconnect = function () {
      const t = this
      u.remove(dn, function (r) {
        return r === t
      })
    }),
    e
  )
})()
function Vp(e) {
  return window.ResizeObserver ? new window.ResizeObserver(e) : new Z0(e)
}
const Bi = Dt({
  name: "VxeList",
  props: {
    data: Array,
    height: [Number, String],
    maxHeight: [Number, String],
    loading: Boolean,
    className: [String, Function],
    size: {
      type: String,
      default: function () {
        return C.list.size || C.size
      }
    },
    autoResize: {
      type: Boolean,
      default: function () {
        return C.list.autoResize
      }
    },
    syncResize: [Boolean, String, Number],
    scrollY: Object
  },
  emits: ["scroll"],
  setup: function (e, t) {
    let r = t.slots,
      a = t.emit,
      n = u.uniqueId(),
      s = nr(e),
      o = Ht({ scrollYLoad: !1, bodyHeight: 0, rowHeight: 0, topSpaceHeight: 0, items: [] }),
      d = Xe(),
      l = Xe(),
      f = Xe(),
      h = {
        fullData: [],
        lastScrollLeft: 0,
        lastScrollTop: 0,
        scrollYStore: { startIndex: 0, endIndex: 0, visibleSize: 0, offsetSize: 0, rowHeight: 0 }
      },
      D = { refElem: d },
      I = {
        xID: n,
        props: e,
        context: t,
        reactData: o,
        internalData: h,
        getRefMaps: function () {
          return D
        }
      },
      N = {},
      F = Pe(function () {
        return Object.assign({}, C.list.scrollY, e.scrollY)
      }),
      q = Pe(function () {
        const ue = e.height,
          Z = e.maxHeight,
          se = {}
        return (
          ue
            ? (se.height = "".concat(isNaN(ue) ? ue : "".concat(ue, "px")))
            : Z && ((se.height = "auto"), (se.maxHeight = "".concat(isNaN(Z) ? Z : "".concat(Z, "px")))),
          se
        )
      }),
      $ = function () {
        const ue = o.scrollYLoad,
          Z = h.scrollYStore,
          se = h.fullData
        ;(o.bodyHeight = ue ? se.length * Z.rowHeight : 0),
          (o.topSpaceHeight = ue ? Math.max(Z.startIndex * Z.rowHeight, 0) : 0)
      },
      B = function () {
        const ue = o.scrollYLoad,
          Z = h.fullData,
          se = h.scrollYStore
        return (o.items = ue ? Z.slice(se.startIndex, se.endIndex) : Z.slice(0)), de()
      },
      w = function () {
        B(), $()
      },
      x = function () {
        return de().then(function () {
          let ue = o.scrollYLoad,
            Z = h.scrollYStore,
            se = f.value,
            Oe = F.value,
            Ie = 0,
            z
          if (
            (se && (Oe.sItem && (z = se.querySelector(Oe.sItem)), z || (z = se.children[0])),
            z && (Ie = z.offsetHeight),
            (Ie = Math.max(20, Ie)),
            (Z.rowHeight = Ie),
            ue)
          ) {
            const ge = l.value,
              oe = Math.max(8, Math.ceil(ge.clientHeight / Ie)),
              he = Oe.oSize ? u.toNumber(Oe.oSize) : Br.edge ? 10 : 0
            ;(Z.offsetSize = he), (Z.visibleSize = oe), (Z.endIndex = Math.max(Z.startIndex, oe + he, Z.endIndex)), w()
          } else $()
          o.rowHeight = Ie
        })
      },
      M = function () {
        const ue = l.value
        return ue && (ue.scrollTop = 0), de()
      },
      L = function (ue, Z) {
        const se = l.value
        return (
          u.isNumber(ue) && (se.scrollLeft = ue),
          u.isNumber(Z) && (se.scrollTop = Z),
          o.scrollYLoad
            ? new Promise(function (Oe) {
                setTimeout(function () {
                  de(function () {
                    Oe()
                  })
                }, 50)
              })
            : de()
        )
      },
      Y = function () {
        const ue = h.lastScrollLeft,
          Z = h.lastScrollTop
        return M().then(function () {
          if (ue || Z) return (h.lastScrollLeft = 0), (h.lastScrollTop = 0), L(ue, Z)
        })
      },
      K = function () {
        const ue = d.value
        return ue.clientWidth && ue.clientHeight ? x() : Promise.resolve()
      },
      O = function (ue) {
        const Z = h.scrollYStore,
          se = Z.startIndex,
          Oe = Z.endIndex,
          Ie = Z.visibleSize,
          z = Z.offsetSize,
          ge = Z.rowHeight,
          oe = ue.target,
          he = oe.scrollTop,
          ve = Math.floor(he / ge),
          De = Math.max(0, ve - 1 - z),
          Ne = ve + Ie + z
        ;(ve <= se || ve >= Oe - Ie - 1) && (se !== De || Oe !== Ne) && ((Z.startIndex = De), (Z.endIndex = Ne), w())
      },
      A = function (ue) {
        const Z = ue.target,
          se = Z.scrollTop,
          Oe = Z.scrollLeft,
          Ie = Oe !== h.lastScrollLeft,
          z = se !== h.lastScrollTop
        ;(h.lastScrollTop = se),
          (h.lastScrollLeft = Oe),
          o.scrollYLoad && O(ue),
          N.dispatchEvent("scroll", { scrollLeft: Oe, scrollTop: se, isX: Ie, isY: z }, ue)
      }
    ;(N = {
      dispatchEvent: function (ue, Z, se) {
        a(ue, Object.assign({ $list: I, $event: se }, Z))
      },
      loadData: function (ue) {
        const Z = h.scrollYStore,
          se = F.value,
          Oe = ue || []
        return (
          Object.assign(Z, { startIndex: 0, endIndex: 1, visibleSize: 0 }),
          (h.fullData = Oe),
          (o.scrollYLoad = !!se.enabled && se.gt > -1 && (se.gt === 0 || se.gt <= Oe.length)),
          B(),
          x().then(function () {
            Y()
          })
        )
      },
      reloadData: function (ue) {
        return M(), N.loadData(ue)
      },
      recalculate: K,
      scrollTo: L,
      refreshScroll: Y,
      clearScroll: M
    }),
      Object.assign(I, N)
    const X = Xe(0)
    ut(
      function () {
        return e.data ? e.data.length : -1
      },
      function () {
        X.value++
      }
    ),
      ut(
        function () {
          return e.data
        },
        function () {
          X.value++
        }
      ),
      ut(X, function () {
        N.loadData(e.data || [])
      }),
      ut(
        function () {
          return e.syncResize
        },
        function (ue) {
          ue &&
            (K(),
            de(function () {
              return setTimeout(function () {
                return K()
              })
            }))
        }
      ),
      If(function () {
        K().then(function () {
          return Y()
        })
      })
    let J
    de(function () {
      if (
        (vt.on(I, "resize", function () {
          K()
        }),
        e.autoResize)
      ) {
        const ue = d.value
        ;(J = Vp(function () {
          return K()
        })),
          J.observe(ue)
      }
      N.loadData(e.data || [])
    }),
      or(function () {
        J && J.disconnect(), vt.off(I, "resize")
      })
    const Ce = function () {
      let ue,
        Z = e.className,
        se = e.loading,
        Oe = o.bodyHeight,
        Ie = o.topSpaceHeight,
        z = o.items,
        ge = s.value,
        oe = q.value
      return p(
        "div",
        {
          ref: d,
          class: [
            "vxe-list",
            Z ? (u.isFunction(Z) ? Z({ $list: I }) : Z) : "",
            ((ue = {}), (ue["size--".concat(ge)] = ge), (ue["is--loading"] = se), ue)
          ]
        },
        [
          p("div", { ref: l, class: "vxe-list--virtual-wrapper", style: oe, onScroll: A }, [
            p("div", { class: "vxe-list--y-space", style: { height: Oe ? "".concat(Oe, "px") : "" } }),
            p(
              "div",
              { ref: f, class: "vxe-list--body", style: { marginTop: Ie ? "".concat(Ie, "px") : "" } },
              r.default ? r.default({ items: z, $list: I }) : []
            )
          ]),
          p(Kl, { class: "vxe-list--loading", modelValue: se })
        ]
      )
    }
    return (I.renderVN = Ce), I
  },
  render: function () {
    return this.renderVN()
  }
})
const oc = Object.assign(Bi, {
    install: function (e) {
      e.component(Bi.name, Bi)
    }
  }),
  J0 = oc
Ft.component(Bi.name, Bi)
const Hi = Dt({
  name: "VxePulldown",
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    placement: String,
    size: {
      type: String,
      default: function () {
        return C.size
      }
    },
    className: [String, Function],
    popupClassName: [String, Function],
    destroyOnClose: Boolean,
    transfer: Boolean
  },
  emits: ["update:modelValue", "hide-panel"],
  setup: function (e, t) {
    let r = t.slots,
      a = t.emit,
      n = u.uniqueId(),
      s = nr(e),
      o = Ht({
        inited: !1,
        panelIndex: 0,
        panelStyle: null,
        panelPlacement: null,
        visiblePanel: !1,
        animatVisible: !1,
        isActivated: !1
      }),
      d = Xe(),
      l = Xe(),
      f = Xe(),
      h = { refElem: d },
      D = {
        xID: n,
        props: e,
        context: t,
        reactData: o,
        getRefMaps: function () {
          return h
        }
      },
      I = {},
      N = function () {
        o.panelIndex < Na() && (o.panelIndex = da())
      },
      F = function () {
        return o.visiblePanel
      },
      q = function () {
        return de().then(function () {
          const O = e.transfer,
            A = e.placement,
            X = o.panelIndex,
            J = o.visiblePanel
          if (J) {
            const Ce = l.value,
              ue = f.value
            if (ue && Ce) {
              let Z = Ce.offsetHeight,
                se = Ce.offsetWidth,
                Oe = ue.offsetHeight,
                Ie = ue.offsetWidth,
                z = 5,
                ge = { zIndex: X },
                oe = Ta(Ce),
                he = oe.boundingTop,
                ve = oe.boundingLeft,
                De = oe.visibleHeight,
                Ne = oe.visibleWidth,
                $e = "bottom"
              if (O) {
                let Te = ve,
                  Ve = he + Z
                A === "top"
                  ? (($e = "top"), (Ve = he - Oe))
                  : A ||
                    (Ve + Oe + z > De && (($e = "top"), (Ve = he - Oe)), Ve < z && (($e = "bottom"), (Ve = he + Z))),
                  Te + Ie + z > Ne && (Te -= Te + Ie + z - Ne),
                  Te < z && (Te = z),
                  Object.assign(ge, {
                    left: "".concat(Te, "px"),
                    top: "".concat(Ve, "px"),
                    minWidth: "".concat(se, "px")
                  })
              } else
                A === "top"
                  ? (($e = "top"), (ge.bottom = "".concat(Z, "px")))
                  : A || (he + Z + Oe > De && he - Z - Oe > z && (($e = "top"), (ge.bottom = "".concat(Z, "px"))))
              ;(o.panelStyle = ge), (o.panelPlacement = $e)
            }
          }
          return de()
        })
      },
      $,
      B = function () {
        return (
          o.inited || (o.inited = !0),
          new Promise(function (O) {
            e.disabled
              ? de(function () {
                  O()
                })
              : (clearTimeout($),
                (o.isActivated = !0),
                (o.animatVisible = !0),
                setTimeout(function () {
                  ;(o.visiblePanel = !0),
                    a("update:modelValue", !0),
                    q(),
                    setTimeout(function () {
                      O(q())
                    }, 40)
                }, 10),
                N())
          })
        )
      },
      w = function () {
        return (
          (o.visiblePanel = !1),
          a("update:modelValue", !1),
          new Promise(function (O) {
            o.animatVisible
              ? ($ = window.setTimeout(function () {
                  ;(o.animatVisible = !1),
                    de(function () {
                      O()
                    })
                }, 350))
              : de(function () {
                  O()
                })
          })
        )
      },
      x = function () {
        return o.visiblePanel ? w() : B()
      },
      M = function (O) {
        const A = e.disabled,
          X = o.visiblePanel,
          J = f.value
        A || (X && (yt(O, J).flag ? q() : (w(), I.dispatchEvent("hide-panel", {}, O))))
      },
      L = function (O) {
        const A = e.disabled,
          X = o.visiblePanel,
          J = d.value,
          Ce = f.value
        A ||
          ((o.isActivated = yt(O, J).flag || yt(O, Ce).flag),
          X && !o.isActivated && (w(), I.dispatchEvent("hide-panel", {}, O)))
      },
      Y = function (O) {
        o.visiblePanel && ((o.isActivated = !1), w(), I.dispatchEvent("hide-panel", {}, O))
      }
    ;(I = {
      dispatchEvent: function (O, A, X) {
        a(O, Object.assign({ $pulldown: D, $event: X }, A))
      },
      isPanelVisible: F,
      togglePanel: x,
      showPanel: B,
      hidePanel: w
    }),
      Object.assign(D, I),
      ut(
        function () {
          return e.modelValue
        },
        function (O) {
          O ? B() : w()
        }
      ),
      de(function () {
        vt.on(D, "mousewheel", M), vt.on(D, "mousedown", L), vt.on(D, "blur", Y)
      }),
      or(function () {
        vt.off(D, "mousewheel"), vt.off(D, "mousedown"), vt.off(D, "blur")
      })
    const K = function () {
      let O,
        A,
        X = e.className,
        J = e.popupClassName,
        Ce = e.destroyOnClose,
        ue = e.transfer,
        Z = e.disabled,
        se = o.inited,
        Oe = o.isActivated,
        Ie = o.animatVisible,
        z = o.visiblePanel,
        ge = o.panelStyle,
        oe = o.panelPlacement,
        he = s.value,
        ve = r.default,
        De = r.header,
        Ne = r.footer,
        $e = r.dropdown
      return p(
        "div",
        {
          ref: d,
          class: [
            "vxe-pulldown",
            X ? (u.isFunction(X) ? X({ $pulldown: D }) : X) : "",
            ((O = {}),
            (O["size--".concat(he)] = he),
            (O["is--visivle"] = z),
            (O["is--disabled"] = Z),
            (O["is--active"] = Oe),
            O)
          ]
        },
        [
          p("div", { ref: l, class: "vxe-pulldown--content" }, ve ? ve({ $pulldown: D }) : []),
          p(Un, { to: "body", disabled: ue ? !se : !0 }, [
            p(
              "div",
              {
                ref: f,
                class: [
                  "vxe-table--ignore-clear vxe-pulldown--panel",
                  J ? (u.isFunction(J) ? J({ $pulldown: D }) : J) : "",
                  ((A = {}),
                  (A["size--".concat(he)] = he),
                  (A["is--transfer"] = ue),
                  (A["animat--leave"] = Ie),
                  (A["animat--enter"] = z),
                  A)
                ],
                placement: oe,
                style: ge
              },
              $e
                ? [
                    p(
                      "div",
                      { class: "vxe-pulldown--panel-wrapper" },
                      !se || (Ce && !z && !Ie)
                        ? []
                        : [
                            De ? p("div", { class: "vxe-pulldown--panel-header" }, De({ $pulldown: D })) : Ot(),
                            p("div", { class: "vxe-pulldown--panel-body" }, $e({ $pulldown: D })),
                            Ne ? p("div", { class: "vxe-pulldown--panel-footer" }, Ne({ $pulldown: D })) : Ot()
                          ]
                    )
                  ]
                : []
            )
          ])
        ]
      )
    }
    return (D.renderVN = K), D
  },
  render: function () {
    return this.renderVN()
  }
})
const uc = Object.assign(Hi, {
    install: function (e) {
      e.component(Hi.name, Hi)
    }
  }),
  Q0 = uc
Ft.component(Hi.name, Hi)
let va = function () {
    return (
      (va =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      va.apply(this, arguments)
    )
  },
  Mf = function (e, t, r) {
    if (r || arguments.length === 2)
      for (var a = 0, n = t.length, s; a < n; a++)
        (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), (s[a] = t[a]))
    return e.concat(s || Array.prototype.slice.call(t))
  },
  Vn = "body",
  eI = { mini: 3, small: 2, medium: 1 }
const Rf = Dt({
  name: "VxeTableBody",
  props: { tableData: Array, tableColumn: Array, fixedColumn: Array, fixedType: { type: String, default: null } },
  setup: function (e) {
    let t = gt("$xetable", {}),
      r = gt("xesize", null),
      a = t.xID,
      n = t.props,
      s = t.context,
      o = t.reactData,
      d = t.internalData,
      l = t.getRefMaps(),
      f = l.refTableHeader,
      h = l.refTableBody,
      D = l.refTableFooter,
      I = l.refTableLeftBody,
      N = l.refTableRightBody,
      F = l.refValidTooltip,
      q = t.getComputeMaps(),
      $ = q.computeEditOpts,
      B = q.computeMouseOpts,
      w = q.computeSYOpts,
      x = q.computeEmptyOpts,
      M = q.computeKeyboardOpts,
      L = q.computeTooltipOpts,
      Y = q.computeRadioOpts,
      K = q.computeExpandOpts,
      O = q.computeTreeOpts,
      A = q.computeCheckboxOpts,
      X = q.computeValidOpts,
      J = q.computeRowOpts,
      Ce = q.computeColumnOpts,
      ue = Xe(),
      Z = Xe(),
      se = Xe(),
      Oe = Xe(),
      Ie = Xe(),
      z = Xe(),
      ge = Xe(),
      oe = function () {
        if (r) {
          const y = r.value
          if (y) return eI[y] || 0
        }
        return 0
      },
      he = function () {
        const y = n.delayHover,
          k = o.lastScrollTime,
          ee = o._isResize
        return !!(ee || (k && Date.now() < k + y))
      },
      ve = function (y, k) {
        let ee = 1
        if (!y) return ee
        const le = O.value,
          me = le.children || le.childrenField,
          be = y[me]
        if (be && t.isTreeExpandByRow(y)) for (let Le = 0; Le < be.length; Le++) ee += ve(be[Le])
        return ee
      },
      De = function (y, k, ee) {
        let le = 1
        return ee && (le = ve(k[ee - 1])), o.rowHeight * le - (ee ? 1 : 12 - oe())
      },
      Ne = function (y) {
        let k = y.row,
          ee = y.column,
          le = n.treeConfig,
          me = O.value,
          be = ee.slots,
          Le = ee.treeNode,
          j = d.fullAllDataRowIdData,
          H = Ye(t, k),
          ie = j[H],
          we = 0,
          E = 0,
          _ = []
        return (
          ie && ((we = ie.level), (E = ie._index), (_ = ie.items)),
          be && be.line
            ? t.callSlot(be.line, y)
            : le && Le && (me.showLine || me.line)
              ? [
                  p("div", { class: "vxe-tree--line-wrapper" }, [
                    p("div", {
                      class: "vxe-tree--line",
                      style: {
                        height: "".concat(De(y, _, E), "px"),
                        left: "".concat(we * me.indent + (we ? 2 - oe() : 0) + 16, "px")
                      }
                    })
                  ])
                ]
              : []
        )
      },
      $e = function (y, k, ee, le, me, be, Le, j, H, ie, we, E) {
        let _,
          te = n.columnKey,
          Me = n.height,
          ke = n.showOverflow,
          Be = n.cellClassName,
          Ke = n.cellStyle,
          Ue = n.align,
          _e = n.spanMethod,
          Je = n.mouseConfig,
          Qe = n.editConfig,
          R = n.editRules,
          ot = n.tooltipConfig,
          wt = o.tableData,
          mt = o.overflowX,
          ft = o.scrollYLoad,
          lt = o.currentColumn,
          xt = o.mergeList,
          tt = o.editStore,
          Mt = o.isAllOverflow,
          St = o.validErrorMaps,
          Gt = d.afterFullData,
          Kt = X.value,
          Wt = A.value,
          Qt = $.value,
          er = L.value,
          hr = J.value,
          ur = w.value,
          ir = Ce.value,
          gr = H.type,
          cr = H.cellRender,
          Xr = H.editRender,
          Lt = H.align,
          Ut = H.showOverflow,
          mr = H.className,
          Kr = H.treeNode,
          Mr = H.slots,
          br = tt.actived,
          Rr = ur.rHeight,
          kr = hr.height,
          xr = Xr || cr,
          qt = xr ? et.renderer.get(xr.name) : null,
          _t = qt ? qt.cellClassName : "",
          Wr = qt ? qt.cellStyle : "",
          Cr = er.showAll,
          ia = t.getColumnIndex(H),
          Zr = t.getVTColumnIndex(H),
          Jr = pt(Xr),
          sr = ee ? H.fixed !== ee : H.fixed && mt,
          Nt = u.isUndefined(Ut) || u.isNull(Ut) ? ke : Ut,
          Pt = Nt === "ellipsis",
          tr = Nt === "title",
          Fr = Nt === !0 || Nt === "tooltip",
          Ir = tr || Fr || Pt,
          ma,
          $r = {},
          tn = Lt || Ue,
          la = St["".concat(k, ":").concat(H.id)],
          On = R && Kt.showMessage && (Kt.message === "default" ? Me || wt.length > 1 : Kt.message === "inline"),
          _r = { colid: H.id },
          Xt = {
            $table: t,
            $grid: t.xegrid,
            seq: y,
            rowid: k,
            row: me,
            rowIndex: be,
            $rowIndex: Le,
            _rowIndex: j,
            column: H,
            columnIndex: ia,
            $columnIndex: ie,
            _columnIndex: Zr,
            fixed: ee,
            type: Vn,
            isHidden: sr,
            level: le,
            visibleData: Gt,
            data: wt,
            items: E
          }
        if (
          (ft && !Ir && (Pt = Ir = !0),
          (tr || Fr || Cr || ot) &&
            ($r.onMouseenter = function (lr) {
              he() ||
                (tr ? yu(lr.currentTarget, H) : (Fr || Cr) && t.triggerBodyTooltipEvent(lr, Xt),
                t.dispatchEvent("cell-mouseenter", Object.assign({ cell: lr.currentTarget }, Xt), lr))
            }),
          (Fr || Cr || ot) &&
            ($r.onMouseleave = function (lr) {
              he() ||
                ((Fr || Cr) && t.handleTargetLeaveEvent(lr),
                t.dispatchEvent("cell-mouseleave", Object.assign({ cell: lr.currentTarget }, Xt), lr))
            }),
          (Wt.range || Je) &&
            ($r.onMousedown = function (lr) {
              t.triggerCellMousedownEvent(lr, Xt)
            }),
          ($r.onClick = function (lr) {
            t.triggerCellClickEvent(lr, Xt)
          }),
          ($r.onDblclick = function (lr) {
            t.triggerCellDblclickEvent(lr, Xt)
          }),
          xt.length)
        ) {
          const oa = _d(xt, j, Zr)
          if (oa) {
            var yr = oa.rowspan,
              Qr = oa.colspan
            if (!yr || !Qr) return null
            yr > 1 && (_r.rowspan = yr), Qr > 1 && (_r.colspan = Qr)
          }
        } else if (_e) {
          var rn = _e(Xt) || {},
            ba = rn.rowspan,
            yr = ba === void 0 ? 1 : ba,
            Pa = rn.colspan,
            Qr = Pa === void 0 ? 1 : Pa
          if (!yr || !Qr) return null
          yr > 1 && (_r.rowspan = yr), Qr > 1 && (_r.colspan = Qr)
        }
        sr && xt && (_r.colspan > 1 || _r.rowspan > 1) && (sr = !1),
          !sr && Qe && (Xr || cr) && (Qt.showStatus || Qt.showUpdateStatus) && (ma = t.isUpdateByRow(me, H.field))
        const xa = []
        if (sr && ke && Mt)
          xa.push(
            p("div", {
              class: ["vxe-cell", { "c--title": tr, "c--tooltip": Fr, "c--ellipsis": Pt }],
              style: { maxHeight: Ir && (Rr || kr) ? "".concat(Rr || kr, "px") : "" }
            })
          )
        else if (
          (xa.push.apply(
            xa,
            Mf(
              Mf([], Ne(Xt), !1),
              [
                p(
                  "div",
                  {
                    class: ["vxe-cell", { "c--title": tr, "c--tooltip": Fr, "c--ellipsis": Pt }],
                    style: { maxHeight: Ir && (Rr || kr) ? "".concat(Rr || kr, "px") : "" },
                    title: tr ? t.getCellLabel(me, H) : null
                  },
                  H.renderCell(Xt)
                )
              ],
              !1
            )
          ),
          On && la)
        ) {
          const jr = la.rule,
            Tn = Mr ? Mr.valid : null,
            Dn = va(va({}, Xt), la)
          xa.push(
            p(
              "div",
              {
                class: ["vxe-cell--valid-error-hint", Ua(Kt.className, Dn)],
                style: jr && jr.maxWidth ? { width: "".concat(jr.maxWidth, "px") } : null
              },
              Tn ? t.callSlot(Tn, Dn) : [p("span", { class: "vxe-cell--valid-error-msg" }, la.content)]
            )
          )
        }
        return p(
          "td",
          va(
            va(
              va(
                {
                  class: [
                    "vxe-body--column",
                    H.id,
                    ((_ = {}),
                    (_["col--".concat(tn)] = tn),
                    (_["col--".concat(gr)] = gr),
                    (_["col--last"] = ie === we.length - 1),
                    (_["col--tree-node"] = Kr),
                    (_["col--edit"] = Jr),
                    (_["col--ellipsis"] = Ir),
                    (_["fixed--hidden"] = sr),
                    (_["col--dirty"] = ma),
                    (_["col--active"] = Qe && Jr && br.row === me && (br.column === H || Qt.mode === "row")),
                    (_["col--valid-error"] = !!la),
                    (_["col--current"] = lt === H),
                    _),
                    Ua(_t, Xt),
                    Ua(mr, Xt),
                    Ua(Be, Xt)
                  ],
                  key: te || ir.useKey ? H.id : ie
                },
                _r
              ),
              {
                style: Object.assign(
                  { height: Ir && (Rr || kr) ? "".concat(Rr || kr, "px") : "" },
                  u.isFunction(Wr) ? Wr(Xt) : Wr,
                  u.isFunction(Ke) ? Ke(Xt) : Ke
                )
              }
            ),
            $r
          ),
          xa
        )
      },
      Te = function (y, k, ee) {
        const le = n.stripe,
          me = n.rowKey,
          be = n.highlightHoverRow,
          Le = n.rowClassName,
          j = n.rowStyle,
          H = n.showOverflow,
          ie = n.editConfig,
          we = n.treeConfig,
          E = o.hasFixedColumn,
          _ = o.treeExpandedMaps,
          te = o.scrollYLoad,
          Me = o.rowExpandedMaps,
          ke = o.expandColumn,
          Be = o.selectRadioRow,
          Ke = o.pendingRowMaps,
          Ue = o.pendingRowList,
          _e = d.fullAllDataRowIdData,
          Je = A.value,
          Qe = Y.value,
          R = O.value,
          ot = $.value,
          wt = J.value,
          mt = R.transform,
          ft = R.children || R.childrenField,
          lt = []
        return (
          k.forEach(function (xt, tt) {
            let Mt = {},
              St = tt
            ;(St = t.getRowIndex(xt)),
              (wt.isHover || be) &&
                ((Mt.onMouseenter = function (br) {
                  he() || t.triggerHoverEvent(br, { row: xt, rowIndex: St })
                }),
                (Mt.onMouseleave = function () {
                  he() || t.clearHoverRow()
                }))
            let Gt = Ye(t, xt),
              Kt = _e[Gt],
              Wt = 0,
              Qt = -1,
              er = 0
            Kt && ((Wt = Kt.level), (Qt = Kt.seq), (er = Kt._index))
            let hr = {
                $table: t,
                seq: Qt,
                rowid: Gt,
                fixed: y,
                type: Vn,
                level: Wt,
                row: xt,
                rowIndex: St,
                $rowIndex: tt,
                _rowIndex: er
              },
              ur = ke && !!Me[Gt],
              ir = !1,
              gr = [],
              cr = !1
            if (
              (ie && (cr = t.isInsertByRow(xt)),
              we && !te && !mt && ((gr = xt[ft]), (ir = gr && gr.length && !!_[Gt])),
              lt.push(
                p(
                  "tr",
                  va(
                    {
                      class: [
                        "vxe-body--row",
                        we ? "row--level-".concat(Wt) : "",
                        {
                          "row--stripe": le && (t.getVTRowIndex(xt) + 1) % 2 === 0,
                          "is--new": cr,
                          "is--expand-row": ur,
                          "is--expand-tree": ir,
                          "row--new": cr && (ot.showStatus || ot.showInsertStatus),
                          "row--radio": Qe.highlight && t.eqRow(Be, xt),
                          "row--checked": Je.highlight && t.isCheckedByCheckboxRow(xt),
                          "row--pending": Ue.length && !!Ke[Gt]
                        },
                        Ua(Le, hr)
                      ],
                      rowid: Gt,
                      style: j ? (u.isFunction(j) ? j(hr) : j) : null,
                      key: me || wt.useKey || we ? Gt : tt
                    },
                    Mt
                  ),
                  ee.map(function (br, Rr) {
                    return $e(Qt, Gt, y, Wt, xt, St, tt, er, br, Rr, ee, k)
                  })
                )
              ),
              ur)
            ) {
              const Xr = K.value,
                Lt = Xr.height,
                Ut = {}
              Lt && (Ut.height = "".concat(Lt, "px")), we && (Ut.paddingLeft = "".concat(Wt * R.indent + 30, "px"))
              const mr = ke.showOverflow,
                Kr = u.isUndefined(mr) || u.isNull(mr) ? H : mr,
                Mr = {
                  $table: t,
                  seq: Qt,
                  column: ke,
                  fixed: y,
                  type: Vn,
                  level: Wt,
                  row: xt,
                  rowIndex: St,
                  $rowIndex: tt,
                  _rowIndex: er
                }
              lt.push(
                p(
                  "tr",
                  va(
                    {
                      class: "vxe-body--expanded-row",
                      key: "expand_".concat(Gt),
                      style: j ? (u.isFunction(j) ? j(Mr) : j) : null
                    },
                    Mt
                  ),
                  [
                    p(
                      "td",
                      {
                        class: { "vxe-body--expanded-column": 1, "fixed--hidden": y && !E, "col--ellipsis": Kr },
                        colspan: ee.length
                      },
                      [
                        p("div", { class: { "vxe-body--expanded-cell": 1, "is--ellipsis": Lt }, style: Ut }, [
                          ke.renderData(Mr)
                        ])
                      ]
                    )
                  ]
                )
              )
            }
            ir && lt.push.apply(lt, Te(y, gr, ee))
          }),
          lt
        )
      },
      Ve,
      W = function (y, k, ee, le) {
        ;(ee || le) &&
          (ee && (Qs(ee), (ee.scrollTop = k)),
          le && (Qs(le), (le.scrollTop = k)),
          clearTimeout(Ve),
          (Ve = setTimeout(function () {
            Ml(ee), Ml(le), (o.lastScrollTime = Date.now())
          }, 300)))
      },
      ce = function (y) {
        let k = e.fixedType,
          ee = n.highlightHoverRow,
          le = o.scrollXLoad,
          me = o.scrollYLoad,
          be = d.elemStore,
          Le = d.lastScrollTop,
          j = d.lastScrollLeft,
          H = J.value,
          ie = f.value,
          we = h.value,
          E = D.value,
          _ = I.value,
          te = N.value,
          Me = F.value,
          ke = ue.value,
          Be = ie ? ie.$el : null,
          Ke = E ? E.$el : null,
          Ue = we.$el,
          _e = _ ? _.$el : null,
          Je = te ? te.$el : null,
          Qe = be["main-body-ySpace"],
          R = Qe ? Qe.value : null,
          ot = be["main-body-xSpace"],
          wt = ot ? ot.value : null,
          mt = me && R ? R.clientHeight : Ue.clientHeight,
          ft = le && wt ? wt.clientWidth : Ue.clientWidth,
          lt = ke.scrollTop,
          xt = Ue.scrollLeft,
          tt = xt !== j,
          Mt = lt !== Le
        ;(d.lastScrollTop = lt),
          (d.lastScrollLeft = xt),
          (o.lastScrollTime = Date.now()),
          (H.isHover || ee) && t.clearHoverRow(),
          _e && k === "left"
            ? ((lt = _e.scrollTop), W(k, lt, Ue, Je))
            : Je && k === "right"
              ? ((lt = Je.scrollTop), W(k, lt, Ue, _e))
              : (tt && (Be && (Be.scrollLeft = Ue.scrollLeft), Ke && (Ke.scrollLeft = Ue.scrollLeft)),
                (_e || Je) && (t.checkScrolling(), Mt && W(k, lt, _e, Je))),
          le && tt && t.triggerScrollXEvent(y),
          me && Mt && t.triggerScrollYEvent(y),
          tt && Me && Me.reactData.visible && Me.updatePlacement(),
          t.dispatchEvent(
            "scroll",
            {
              type: Vn,
              fixed: k,
              scrollTop: lt,
              scrollLeft: xt,
              scrollHeight: Ue.scrollHeight,
              scrollWidth: Ue.scrollWidth,
              bodyHeight: mt,
              bodyWidth: ft,
              isX: tt,
              isY: Mt
            },
            y
          )
      },
      ye,
      Ae = 0,
      Re = 0,
      ae = 0,
      fe = !1,
      U = function (y, k, ee, le, me) {
        const be = d.elemStore,
          Le = o.scrollXLoad,
          j = o.scrollYLoad,
          H = h.value,
          ie = I.value,
          we = N.value,
          E = ie ? ie.$el : null,
          _ = we ? we.$el : null,
          te = H.$el,
          Me = be["main-body-ySpace"],
          ke = Me ? Me.value : null,
          Be = be["main-body-xSpace"],
          Ke = Be ? Be.value : null,
          Ue = j && ke ? ke.clientHeight : te.clientHeight,
          _e = Le && Ke ? Ke.clientWidth : te.clientWidth,
          Je = fe === k ? Math.max(0, Ae - ae) : 0
        ;(fe = k), (Ae = Math.abs(k ? ee - Je : ee + Je)), (Re = 0), (ae = 0), clearTimeout(ye)
        const Qe = function () {
          if (ae < Ae) {
            const R = e.fixedType
            ;(Re = Math.max(5, Math.floor(Re * 1.5))), (ae = ae + Re), ae > Ae && (Re = Re - (ae - Ae))
            const ot = te.scrollTop,
              wt = te.clientHeight,
              mt = te.scrollHeight,
              ft = ot + Re * (k ? -1 : 1)
            ;(te.scrollTop = ft),
              E && (E.scrollTop = ft),
              _ && (_.scrollTop = ft),
              (k ? ft < mt - wt : ft >= 0) && (ye = setTimeout(Qe, 10)),
              t.dispatchEvent(
                "scroll",
                {
                  type: Vn,
                  fixed: R,
                  scrollTop: te.scrollTop,
                  scrollLeft: te.scrollLeft,
                  scrollHeight: te.scrollHeight,
                  scrollWidth: te.scrollWidth,
                  bodyHeight: Ue,
                  bodyWidth: _e,
                  isX: le,
                  isY: me
                },
                y
              )
          }
        }
        Qe()
      },
      G = function (y) {
        const k = y.deltaY,
          ee = y.deltaX,
          le = n.highlightHoverRow,
          me = o.scrollYLoad,
          be = d.lastScrollTop,
          Le = d.lastScrollLeft,
          j = J.value,
          H = h.value,
          ie = ue.value,
          we = H.$el,
          E = k,
          _ = ee,
          te = E < 0
        if (!(te ? ie.scrollTop <= 0 : ie.scrollTop >= ie.scrollHeight - ie.clientHeight)) {
          const Me = ie.scrollTop + E,
            ke = we.scrollLeft + _,
            Be = ke !== Le,
            Ke = Me !== be
          Ke &&
            (y.preventDefault(),
            (d.lastScrollTop = Me),
            (d.lastScrollLeft = ke),
            (o.lastScrollTime = Date.now()),
            (j.isHover || le) && t.clearHoverRow(),
            U(y, te, E, Be, Ke),
            me && t.triggerScrollYEvent(y))
        }
      }
    pr(function () {
      de(function () {
        const y = e.fixedType,
          k = d.elemStore,
          ee = "".concat(y || "main", "-body-"),
          le = ue.value
        ;(k["".concat(ee, "wrapper")] = ue),
          (k["".concat(ee, "table")] = Z),
          (k["".concat(ee, "colgroup")] = se),
          (k["".concat(ee, "list")] = Oe),
          (k["".concat(ee, "xSpace")] = Ie),
          (k["".concat(ee, "ySpace")] = z),
          (k["".concat(ee, "emptyBlock")] = ge),
          le && ((le.onscroll = ce), (le._onscroll = ce))
      })
    }),
      eu(function () {
        const y = ue.value
        clearTimeout(ye), y && ((y._onscroll = null), (y.onscroll = null))
      }),
      or(function () {
        const y = e.fixedType,
          k = d.elemStore,
          ee = "".concat(y || "main", "-body-")
        ;(k["".concat(ee, "wrapper")] = null),
          (k["".concat(ee, "table")] = null),
          (k["".concat(ee, "colgroup")] = null),
          (k["".concat(ee, "list")] = null),
          (k["".concat(ee, "xSpace")] = null),
          (k["".concat(ee, "ySpace")] = null),
          (k["".concat(ee, "emptyBlock")] = null)
      })
    const ne = function () {
      let y = e.fixedColumn,
        k = e.fixedType,
        ee = e.tableColumn,
        le = n.keyboardConfig,
        me = n.showOverflow,
        be = n.spanMethod,
        Le = n.mouseConfig,
        j = o.tableData,
        H = o.mergeList,
        ie = o.scrollYLoad,
        we = o.isAllOverflow,
        E = d.visibleColumn,
        _ = s.slots,
        te = w.value,
        Me = x.value,
        ke = M.value,
        Be = B.value
      k && (!o.expandColumn && (ie || (me && we)) && !H.length && !be && !(le && ke.isMerge) ? (ee = y) : (ee = E))
      let Ke,
        Ue = _ ? _.empty : null
      if (Ue) Ke = t.callSlot(Ue, { $table: t, $grid: t.xegrid })
      else {
        const _e = Me.name ? et.renderer.get(Me.name) : null,
          Je = _e ? _e.renderEmpty : null
        Je ? (Ke = Vt(Je(Me, { $table: t }))) : (Ke = n.emptyText || C.i18n("vxe.table.emptyText"))
      }
      return p(
        "div",
        va(
          {
            ref: ue,
            class: ["vxe-table--body-wrapper", k ? "fixed-".concat(k, "--wrapper") : "body--wrapper"],
            xid: a
          },
          te.mode === "wheel" ? { onWheel: G } : {}
        ),
        [
          k ? Ot() : p("div", { ref: Ie, class: "vxe-body--x-space" }),
          p("div", { ref: z, class: "vxe-body--y-space" }),
          p("table", { ref: Z, class: "vxe-table--body", xid: a, cellspacing: 0, cellpadding: 0, border: 0 }, [
            p(
              "colgroup",
              { ref: se },
              ee.map(function (Qe, R) {
                return p("col", { name: Qe.id, key: R })
              })
            ),
            p("tbody", { ref: Oe }, Te(k, j, ee))
          ]),
          p("div", { class: "vxe-table--checkbox-range" }),
          Le && Be.area
            ? p("div", { class: "vxe-table--cell-area" }, [
                p(
                  "span",
                  { class: "vxe-table--cell-main-area" },
                  Be.extension
                    ? [
                        p("span", {
                          class: "vxe-table--cell-main-area-btn",
                          onMousedown: function (Qe) {
                            t.triggerCellExtendMousedownEvent(Qe, { $table: t, fixed: k, type: Vn })
                          }
                        })
                      ]
                    : []
                ),
                p("span", { class: "vxe-table--cell-copy-area" }),
                p("span", { class: "vxe-table--cell-extend-area" }),
                p("span", { class: "vxe-table--cell-multi-area" }),
                p("span", { class: "vxe-table--cell-active-area" })
              ])
            : null,
          k
            ? null
            : p("div", { class: "vxe-table--empty-block", ref: ge }, [
                p("div", { class: "vxe-table--empty-content" }, Ke)
              ])
        ]
      )
    }
    return ne
  }
})
let Bp = function (e, t) {
    const r = []
    return (
      e.forEach(function (a) {
        ;(a.parentId = t ? t.id : null),
          a.visible &&
            (a.children &&
            a.children.length &&
            a.children.some(function (n) {
              return n.visible
            })
              ? (r.push(a), r.push.apply(r, Bp(a.children, a)))
              : r.push(a))
      }),
      r
    )
  },
  tI = function (e) {
    let t = 1,
      r = function (o, d) {
        if (
          (d && ((o.level = d.level + 1), t < o.level && (t = o.level)),
          o.children &&
            o.children.length &&
            o.children.some(function (f) {
              return f.visible
            }))
        ) {
          let l = 0
          o.children.forEach(function (f) {
            f.visible && (r(f, o), (l += f.colSpan))
          }),
            (o.colSpan = l)
        } else o.colSpan = 1
      }
    e.forEach(function (o) {
      ;(o.level = 1), r(o)
    })
    for (var a = [], n = 0; n < t; n++) a.push([])
    const s = Bp(e)
    return (
      s.forEach(function (o) {
        o.children &&
        o.children.length &&
        o.children.some(function (d) {
          return d.visible
        })
          ? (o.rowSpan = 1)
          : (o.rowSpan = t - o.level + 1),
          a[o.level - 1].push(o)
      }),
      a
    )
  },
  zn = function () {
    return (
      (zn =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      zn.apply(this, arguments)
    )
  },
  Io = "header"
const zi = Dt({
  name: "VxeTableHeader",
  props: {
    tableData: Array,
    tableColumn: Array,
    tableGroupColumn: Array,
    fixedColumn: Array,
    fixedType: { type: String, default: null }
  },
  setup: function (e) {
    const t = gt("$xetable", {}),
      r = t.xID,
      a = t.props,
      n = t.reactData,
      s = t.internalData,
      o = t.getRefMaps(),
      d = o.refElem,
      l = o.refTableBody,
      f = o.refLeftContainer,
      h = o.refRightContainer,
      D = o.refCellResizeBar,
      I = t.getComputeMaps().computeColumnOpts,
      N = Xe([]),
      F = Xe(),
      q = Xe(),
      $ = Xe(),
      B = Xe(),
      w = Xe(),
      x = Xe(),
      M = function () {
        const K = n.isGroup
        N.value = K ? tI(e.tableGroupColumn) : []
      },
      L = function (K, O) {
        let A = O.column,
          X = e.fixedType,
          J = l.value,
          Ce = f.value,
          ue = h.value,
          Z = D.value,
          se = K.clientX,
          Oe = F.value,
          Ie = K.target,
          z = (O.cell = Ie.parentNode),
          ge = 0,
          oe = J.$el,
          he = vF(Ie, Oe),
          ve = Ie.clientWidth,
          De = Math.floor(ve / 2),
          Ne = hF(O) - De,
          $e = he.left - z.clientWidth + ve + Ne,
          Te = he.left + De,
          Ve = document.onmousemove,
          W = document.onmouseup,
          ce = X === "left",
          ye = X === "right",
          Ae = d.value,
          Re = 0
        if (ce || ye) {
          for (
            let ae = ce ? "nextElementSibling" : "previousElementSibling", fe = z[ae];
            fe && !Ma(fe, "fixed--hidden");

          )
            Ma(fe, "col--group") || (Re += fe.offsetWidth), (fe = fe[ae])
          ye && ue && (Te = ue.offsetLeft + Re)
        }
        const U = function (G) {
          G.stopPropagation(), G.preventDefault()
          let ne = G.clientX - se,
            y = Te + ne,
            k = X ? 0 : oe.scrollLeft
          ce
            ? (y = Math.min(y, (ue ? ue.offsetLeft : oe.clientWidth) - Re - Ne))
            : ye
              ? (($e = (Ce ? Ce.clientWidth : 0) + Re + Ne), (y = Math.min(y, Te + z.clientWidth - Ne)))
              : ($e = Math.max(oe.scrollLeft, $e)),
            (ge = Math.max(y, $e)),
            (Z.style.left = "".concat(ge - k, "px"))
        }
        ;(n._isResize = !0),
          pn(Ae, "drag--resize"),
          (Z.style.display = "block"),
          (document.onmousemove = U),
          (document.onmouseup = function (G) {
            ;(document.onmousemove = Ve), (document.onmouseup = W)
            const ne = A.renderWidth + (ye ? Te - ge : ge - Te)
            ;(A.resizeWidth = ne),
              (Z.style.display = "none"),
              (n._isResize = !1),
              (s._lastResizeTime = Date.now()),
              t.analyColumnWidth(),
              t.recalculate(!0).then(function () {
                t.saveCustomResizable(),
                  t.updateCellAreas(),
                  t.dispatchEvent("resizable-change", zn(zn({}, O), { resizeWidth: ne }), G)
              }),
              Xa(Ae, "drag--resize")
          }),
          U(K),
          t.closeMenu && t.closeMenu()
      }
    ut(function () {
      return e.tableColumn
    }, M),
      pr(function () {
        de(function () {
          const K = e.fixedType,
            O = t.internalData,
            A = O.elemStore,
            X = "".concat(K || "main", "-header-")
          ;(A["".concat(X, "wrapper")] = F),
            (A["".concat(X, "table")] = q),
            (A["".concat(X, "colgroup")] = $),
            (A["".concat(X, "list")] = B),
            (A["".concat(X, "xSpace")] = w),
            (A["".concat(X, "repair")] = x),
            M()
        })
      }),
      or(function () {
        const K = e.fixedType,
          O = t.internalData,
          A = O.elemStore,
          X = "".concat(K || "main", "-header-")
        ;(A["".concat(X, "wrapper")] = null),
          (A["".concat(X, "table")] = null),
          (A["".concat(X, "colgroup")] = null),
          (A["".concat(X, "list")] = null),
          (A["".concat(X, "xSpace")] = null),
          (A["".concat(X, "repair")] = null)
      })
    const Y = function () {
      let K = e.fixedType,
        O = e.fixedColumn,
        A = e.tableColumn,
        X = a.resizable,
        J = a.border,
        Ce = a.columnKey,
        ue = a.headerRowClassName,
        Z = a.headerCellClassName,
        se = a.headerRowStyle,
        Oe = a.headerCellStyle,
        Ie = a.showHeaderOverflow,
        z = a.headerAlign,
        ge = a.align,
        oe = a.mouseConfig,
        he = n.isGroup,
        ve = n.currentColumn,
        De = n.scrollXLoad,
        Ne = n.overflowX,
        $e = n.scrollbarWidth,
        Te = s.visibleColumn,
        Ve = I.value,
        W = N.value,
        ce = A
      return (
        he ? (ce = Te) : (K && (De || Ie) && (ce = O), (W = [ce])),
        p(
          "div",
          {
            ref: F,
            class: ["vxe-table--header-wrapper", K ? "fixed-".concat(K, "--wrapper") : "body--wrapper"],
            xid: r
          },
          [
            K ? Ot() : p("div", { ref: w, class: "vxe-body--x-space" }),
            p("table", { ref: q, class: "vxe-table--header", xid: r, cellspacing: 0, cellpadding: 0, border: 0 }, [
              p(
                "colgroup",
                { ref: $ },
                ce
                  .map(function (ye, Ae) {
                    return p("col", { name: ye.id, key: Ae })
                  })
                  .concat($e ? [p("col", { name: "col_gutter" })] : [])
              ),
              p(
                "thead",
                { ref: B },
                W.map(function (ye, Ae) {
                  return p(
                    "tr",
                    {
                      class: [
                        "vxe-header--row",
                        ue ? (u.isFunction(ue) ? ue({ $table: t, $rowIndex: Ae, fixed: K, type: Io }) : ue) : ""
                      ],
                      style: se ? (u.isFunction(se) ? se({ $table: t, $rowIndex: Ae, fixed: K, type: Io }) : se) : null
                    },
                    ye
                      .map(function (Re, ae) {
                        let fe,
                          U = Re.type,
                          G = Re.showHeaderOverflow,
                          ne = Re.headerAlign,
                          y = Re.align,
                          k = Re.headerClassName,
                          ee = Re.children && Re.children.length,
                          le = K ? Re.fixed !== K && !ee : !!Re.fixed && Ne,
                          me = u.isUndefined(G) || u.isNull(G) ? Ie : G,
                          be = ne || y || z || ge,
                          Le = me === "ellipsis",
                          j = me === "title",
                          H = me === !0 || me === "tooltip",
                          ie = j || H || Le,
                          we =
                            Re.filters &&
                            Re.filters.some(function (ke) {
                              return ke.checked
                            }),
                          E = t.getColumnIndex(Re),
                          _ = t.getVTColumnIndex(Re),
                          te = {
                            $table: t,
                            $grid: t.xegrid,
                            $rowIndex: Ae,
                            column: Re,
                            columnIndex: E,
                            $columnIndex: ae,
                            _columnIndex: _,
                            fixed: K,
                            type: Io,
                            isHidden: le,
                            hasFilter: we
                          },
                          Me = {
                            onClick: function (ke) {
                              return t.triggerHeaderCellClickEvent(ke, te)
                            },
                            onDblclick: function (ke) {
                              return t.triggerHeaderCellDblclickEvent(ke, te)
                            }
                          }
                        return (
                          De && !ie && (Le = ie = !0),
                          oe &&
                            (Me.onMousedown = function (ke) {
                              return t.triggerHeaderCellMousedownEvent(ke, te)
                            }),
                          p(
                            "th",
                            zn(
                              zn(
                                {
                                  class: [
                                    "vxe-header--column",
                                    Re.id,
                                    ((fe = {}),
                                    (fe["col--".concat(be)] = be),
                                    (fe["col--".concat(U)] = U),
                                    (fe["col--last"] = ae === ye.length - 1),
                                    (fe["col--fixed"] = Re.fixed),
                                    (fe["col--group"] = ee),
                                    (fe["col--ellipsis"] = ie),
                                    (fe["fixed--hidden"] = le),
                                    (fe["is--sortable"] = Re.sortable),
                                    (fe["col--filter"] = !!Re.filters),
                                    (fe["is--filter-active"] = we),
                                    (fe["col--current"] = ve === Re),
                                    fe),
                                    k ? (u.isFunction(k) ? k(te) : k) : "",
                                    Z ? (u.isFunction(Z) ? Z(te) : Z) : ""
                                  ],
                                  colid: Re.id,
                                  colspan: Re.colSpan > 1 ? Re.colSpan : null,
                                  rowspan: Re.rowSpan > 1 ? Re.rowSpan : null,
                                  style: Oe ? (u.isFunction(Oe) ? Oe(te) : Oe) : null
                                },
                                Me
                              ),
                              { key: Ce || Ve.useKey || ee ? Re.id : ae }
                            ),
                            [
                              p(
                                "div",
                                { class: ["vxe-cell", { "c--title": j, "c--tooltip": H, "c--ellipsis": Le }] },
                                Re.renderHeader(te)
                              ),
                              !le && !ee && (u.isBoolean(Re.resizable) ? Re.resizable : Ve.resizable || X)
                                ? p("div", {
                                    class: ["vxe-resizable", { "is--line": !J || J === "none" }],
                                    onMousedown: function (ke) {
                                      return L(ke, te)
                                    }
                                  })
                                : null
                            ]
                          )
                        )
                      })
                      .concat($e ? [p("th", { class: "vxe-header--gutter col--gutter" })] : [])
                  )
                })
              )
            ]),
            p("div", { ref: x, class: "vxe-table--header-border-line" })
          ]
        )
      )
    }
    return Y
  }
})
const Qo = Object.assign(zi, {
  install: function (e) {
    e.component(zi.name, zi)
  }
})
Ft.component(zi.name, zi)
let Wn = function () {
    return (
      (Wn =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      Wn.apply(this, arguments)
    )
  },
  wl = "footer"
function rI(e, t, r) {
  for (let a = 0; a < e.length; a++) {
    const n = e[a],
      s = n.row,
      o = n.col,
      d = n.rowspan,
      l = n.colspan
    if (o > -1 && s > -1 && d && l) {
      if (s === t && o === r) return { rowspan: d, colspan: l }
      if (t >= s && t < s + d && r >= o && r < o + l) return { rowspan: 0, colspan: 0 }
    }
  }
}
const Wi = Dt({
  name: "VxeTableFooter",
  props: {
    footerTableData: {
      type: Array,
      default: function () {
        return []
      }
    },
    tableColumn: {
      type: Array,
      default: function () {
        return []
      }
    },
    fixedColumn: {
      type: Array,
      default: function () {
        return []
      }
    },
    fixedType: { type: String, default: null }
  },
  setup: function (e) {
    const t = gt("$xetable", {}),
      r = t.xID,
      a = t.props,
      n = t.reactData,
      s = t.internalData,
      o = t.getRefMaps(),
      d = o.refTableHeader,
      l = o.refTableBody,
      f = o.refValidTooltip,
      h = t.getComputeMaps(),
      D = h.computeTooltipOpts,
      I = h.computeColumnOpts,
      N = Xe(),
      F = Xe(),
      q = Xe(),
      $ = Xe(),
      B = Xe(),
      w = function (M) {
        const L = e.fixedType,
          Y = n.scrollXLoad,
          K = s.lastScrollLeft,
          O = f.value,
          A = d.value,
          X = l.value,
          J = A ? A.$el : null,
          Ce = N.value,
          ue = X.$el,
          Z = Ce.scrollLeft,
          se = Z !== K
        ;(s.lastScrollLeft = Z),
          (n.lastScrollTime = Date.now()),
          J && (J.scrollLeft = Z),
          ue && (ue.scrollLeft = Z),
          Y && se && t.triggerScrollXEvent(M),
          se && O && O.reactData.visible && O.updatePlacement(),
          t.dispatchEvent("scroll", { type: wl, fixed: L, scrollTop: ue.scrollTop, scrollLeft: Z, isX: se, isY: !1 }, M)
      }
    pr(function () {
      de(function () {
        const M = e.fixedType,
          L = s.elemStore,
          Y = "".concat(M || "main", "-footer-")
        ;(L["".concat(Y, "wrapper")] = N),
          (L["".concat(Y, "table")] = F),
          (L["".concat(Y, "colgroup")] = q),
          (L["".concat(Y, "list")] = $),
          (L["".concat(Y, "xSpace")] = B)
      })
    }),
      or(function () {
        const M = e.fixedType,
          L = s.elemStore,
          Y = "".concat(M || "main", "-footer-")
        ;(L["".concat(Y, "wrapper")] = null),
          (L["".concat(Y, "table")] = null),
          (L["".concat(Y, "colgroup")] = null),
          (L["".concat(Y, "list")] = null),
          (L["".concat(Y, "xSpace")] = null)
      })
    const x = function () {
      let M = e.fixedType,
        L = e.fixedColumn,
        Y = e.tableColumn,
        K = e.footerTableData,
        O = a.footerRowClassName,
        A = a.footerCellClassName,
        X = a.footerRowStyle,
        J = a.footerCellStyle,
        Ce = a.footerAlign,
        ue = a.footerSpanMethod,
        Z = a.align,
        se = a.columnKey,
        Oe = a.showFooterOverflow,
        Ie = s.visibleColumn,
        z = n.scrollXLoad,
        ge = n.overflowX,
        oe = n.scrollbarWidth,
        he = n.currentColumn,
        ve = n.mergeFooterList,
        De = D.value,
        Ne = I.value
      return (
        M && (!n.expandColumn && (z || Oe) && (!ve.length || !ue) ? (Y = L) : (Y = Ie)),
        p(
          "div",
          {
            ref: N,
            class: ["vxe-table--footer-wrapper", M ? "fixed-".concat(M, "--wrapper") : "body--wrapper"],
            xid: r,
            onScroll: w
          },
          [
            M ? Ot() : p("div", { ref: B, class: "vxe-body--x-space" }),
            p("table", { ref: F, class: "vxe-table--footer", xid: r, cellspacing: 0, cellpadding: 0, border: 0 }, [
              p(
                "colgroup",
                { ref: q },
                Y.map(function ($e, Te) {
                  return p("col", { name: $e.id, key: Te })
                }).concat(oe ? [p("col", { name: "col_gutter" })] : [])
              ),
              p(
                "tfoot",
                { ref: $ },
                K.map(function ($e, Te) {
                  const Ve = Te
                  return p(
                    "tr",
                    {
                      class: [
                        "vxe-footer--row",
                        O
                          ? u.isFunction(O)
                            ? O({ $table: t, _rowIndex: Te, $rowIndex: Ve, fixed: M, type: wl })
                            : O
                          : ""
                      ],
                      style: X
                        ? u.isFunction(X)
                          ? X({ $table: t, _rowIndex: Te, $rowIndex: Ve, fixed: M, type: wl })
                          : X
                        : null
                    },
                    Y.map(function (W, ce) {
                      let ye,
                        Ae = W.type,
                        Re = W.showFooterOverflow,
                        ae = W.footerAlign,
                        fe = W.align,
                        U = W.footerClassName,
                        G = De.showAll,
                        ne = W.children && W.children.length,
                        y = M ? W.fixed !== M && !ne : W.fixed && ge,
                        k = u.isUndefined(Re) || u.isNull(Re) ? Oe : Re,
                        ee = ae || fe || Ce || Z,
                        le = k === "ellipsis",
                        me = k === "title",
                        be = k === !0 || k === "tooltip",
                        Le = me || be || le,
                        j = { colid: W.id },
                        H = {},
                        ie = t.getColumnIndex(W),
                        we = t.getVTColumnIndex(W),
                        E = we,
                        _ = {
                          $table: t,
                          $grid: t.xegrid,
                          _rowIndex: Te,
                          $rowIndex: Ve,
                          column: W,
                          columnIndex: ie,
                          $columnIndex: ce,
                          _columnIndex: we,
                          itemIndex: E,
                          items: $e,
                          fixed: M,
                          type: wl,
                          data: K
                        }
                      if (
                        (z && !Le && (le = Le = !0),
                        (me || be || G) &&
                          (H.onMouseenter = function (_e) {
                            me ? yu(_e.currentTarget, W) : (be || G) && t.triggerFooterTooltipEvent(_e, _)
                          }),
                        (be || G) &&
                          (H.onMouseleave = function (_e) {
                            ;(be || G) && t.handleTargetLeaveEvent(_e)
                          }),
                        (H.onClick = function (_e) {
                          t.dispatchEvent("footer-cell-click", Object.assign({ cell: _e.currentTarget }, _), _e)
                        }),
                        (H.onDblclick = function (_e) {
                          t.dispatchEvent("footer-cell-dblclick", Object.assign({ cell: _e.currentTarget }, _), _e)
                        }),
                        ve.length)
                      ) {
                        const te = rI(ve, Te, we)
                        if (te) {
                          var Me = te.rowspan,
                            ke = te.colspan
                          if (!Me || !ke) return null
                          Me > 1 && (j.rowspan = Me), ke > 1 && (j.colspan = ke)
                        }
                      } else if (ue) {
                        var Be = ue(_) || {},
                          Ke = Be.rowspan,
                          Me = Ke === void 0 ? 1 : Ke,
                          Ue = Be.colspan,
                          ke = Ue === void 0 ? 1 : Ue
                        if (!Me || !ke) return null
                        Me > 1 && (j.rowspan = Me), ke > 1 && (j.colspan = ke)
                      }
                      return p(
                        "td",
                        Wn(
                          Wn(
                            Wn(
                              Wn(
                                {
                                  class: [
                                    "vxe-footer--column",
                                    W.id,
                                    ((ye = {}),
                                    (ye["col--".concat(ee)] = ee),
                                    (ye["col--".concat(Ae)] = Ae),
                                    (ye["col--last"] = ce === Y.length - 1),
                                    (ye["fixed--hidden"] = y),
                                    (ye["col--ellipsis"] = Le),
                                    (ye["col--current"] = he === W),
                                    ye),
                                    Ua(U, _),
                                    Ua(A, _)
                                  ]
                                },
                                j
                              ),
                              { style: J ? (u.isFunction(J) ? J(_) : J) : null }
                            ),
                            H
                          ),
                          { key: se || Ne.useKey ? W.id : ce }
                        ),
                        [
                          p(
                            "div",
                            { class: ["vxe-cell", { "c--title": me, "c--tooltip": be, "c--ellipsis": le }] },
                            W.renderFooter(_)
                          )
                        ]
                      )
                    }).concat(oe ? [p("td", { class: "vxe-footer--gutter col--gutter" })] : [])
                  )
                })
              )
            ])
          ]
        )
      )
    }
    return x
  }
})
const kf = Object.assign(Wi, {
  install: function (e) {
    e.component(Wi.name, Wi)
  }
})
Ft.component(Wi.name, Wi)
let jt = function () {
    return (
      (jt =
        Object.assign ||
        function (e) {
          for (var t, r = 1, a = arguments.length; r < a; r++) {
            t = arguments[r]
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
      jt.apply(this, arguments)
    )
  },
  No = function (e, t, r) {
    if (r || arguments.length === 2)
      for (var a = 0, n = t.length, s; a < n; a++)
        (s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), (s[a] = t[a]))
    return e.concat(s || Array.prototype.slice.call(t))
  },
  aI = Br["-webkit"] && !Br.edge,
  Po = "VXE_TABLE_CUSTOM_COLUMN_WIDTH",
  $o = "VXE_TABLE_CUSTOM_COLUMN_VISIBLE",
  Lo = "VXE_TABLE_CUSTOM_COLUMN_FIXED",
  nI = "VXE_TABLE_CUSTOM_COLUMN_ORDER"
const _i = Dt({
  name: "VxeTable",
  props: Lu,
  emits: Au,
  setup: function (e, t) {
    let r = t.slots,
      a = t.emit,
      n = et.tooltip,
      s = u.uniqueId(),
      o = nr(e),
      d = Ff(),
      l = Ht({
        staticColumns: [],
        tableGroupColumn: [],
        tableColumn: [],
        tableData: [],
        scrollXLoad: !1,
        scrollYLoad: !1,
        overflowY: !0,
        overflowX: !1,
        scrollbarWidth: 0,
        scrollbarHeight: 0,
        lastScrollTime: 0,
        rowHeight: 0,
        parentHeight: 0,
        isGroup: !1,
        isAllOverflow: !1,
        isAllSelected: !1,
        isIndeterminate: !1,
        selectCheckboxMaps: {},
        currentRow: null,
        currentColumn: null,
        selectRadioRow: null,
        footerTableData: [],
        expandColumn: null,
        treeNodeColumn: null,
        hasFixedColumn: !1,
        rowExpandedMaps: {},
        rowExpandLazyLoadedMaps: {},
        treeExpandedMaps: {},
        treeExpandLazyLoadedMaps: {},
        treeIndeterminateMaps: {},
        mergeList: [],
        mergeFooterList: [],
        upDataFlag: 0,
        reColumnFlag: 0,
        pendingRowMaps: {},
        pendingRowList: [],
        initStore: { filter: !1, import: !1, export: !1 },
        filterStore: {
          isAllSelected: !1,
          isIndeterminate: !1,
          style: null,
          options: [],
          column: null,
          multiple: !1,
          visible: !1,
          maxHeight: null
        },
        columnStore: {
          leftList: [],
          centerList: [],
          rightList: [],
          resizeList: [],
          pxList: [],
          pxMinList: [],
          scaleList: [],
          scaleMinList: [],
          autoList: []
        },
        ctxMenuStore: { selected: null, visible: !1, showChild: !1, selectChild: null, list: [], style: null },
        editStore: {
          indexs: { columns: [] },
          titles: { columns: [] },
          selected: { row: null, column: null },
          copyed: { cut: !1, rows: [], columns: [] },
          actived: { row: null, column: null },
          insertMaps: {},
          removeMaps: {}
        },
        tooltipStore: { row: null, column: null, content: null, visible: !1, currOpts: null },
        validStore: { visible: !1 },
        validErrorMaps: {},
        importStore: { inited: !1, file: null, type: "", modeList: [], typeList: [], filename: "", visible: !1 },
        importParams: { mode: "", types: null, message: !0 },
        exportStore: {
          inited: !1,
          name: "",
          modeList: [],
          typeList: [],
          columns: [],
          isPrint: !1,
          hasFooter: !1,
          hasMerge: !1,
          hasTree: !1,
          hasColgroup: !1,
          visible: !1
        },
        exportParams: {
          filename: "",
          sheetName: "",
          mode: "",
          type: "",
          isColgroup: !1,
          isMerge: !1,
          isAllExpand: !1,
          useStyle: !1,
          original: !1,
          message: !0,
          isHeader: !1,
          isFooter: !1
        },
        scrollVMLoading: !1,
        _isResize: !1
      }),
      f = {
        tZindex: 0,
        elemStore: {},
        scrollXStore: { offsetSize: 0, visibleSize: 0, startIndex: 0, endIndex: 0 },
        scrollYStore: { rowHeight: 0, offsetSize: 0, visibleSize: 0, startIndex: 0, endIndex: 0 },
        tableWidth: 0,
        tableHeight: 0,
        headerHeight: 0,
        footerHeight: 0,
        customHeight: 0,
        customMinHeight: 0,
        customMaxHeight: 0,
        hoverRow: null,
        lastScrollLeft: 0,
        lastScrollTop: 0,
        radioReserveRow: null,
        checkboxReserveRowMap: {},
        rowExpandedReserveRowMap: {},
        treeExpandedReserveRowMap: {},
        treeIndeterminateRowMaps: {},
        tableFullData: [],
        afterFullData: [],
        afterTreeFullData: [],
        afterFullRowMaps: {},
        tableFullTreeData: [],
        tableSynchData: [],
        tableSourceData: [],
        collectColumn: [],
        tableFullColumn: [],
        visibleColumn: [],
        fullAllDataRowIdData: {},
        sourceDataRowIdData: {},
        fullDataRowIdData: {},
        fullColumnIdData: {},
        fullColumnFieldData: {},
        inited: !1,
        tooltipTimeout: null,
        initStatus: !1,
        isActivated: !1
      },
      h = {},
      D = {},
      I = Xe(),
      N = Xe(),
      F = Xe(),
      q = Xe(),
      $ = Xe(),
      B = Xe(),
      w = Xe(),
      x = Xe(),
      M = Xe(),
      L = Xe(),
      Y = Xe(),
      K = Xe(),
      O = Xe(),
      A = Xe(),
      X = Xe(),
      J = Xe(),
      Ce = Xe(),
      ue = Xe(),
      Z = Xe(),
      se = gt("$xegrid", null),
      Oe,
      Ie = Pe(function () {
        return Object.assign({}, C.table.validConfig, e.validConfig)
      }),
      z = Pe(function () {
        return Object.assign({}, C.table.scrollX, e.scrollX)
      }),
      ge = Pe(function () {
        return Object.assign({}, C.table.scrollY, e.scrollY)
      }),
      oe = Pe(function () {
        return { default: 48, medium: 44, small: 40, mini: 36 }
      }),
      he = Pe(function () {
        return Object.assign({}, C.table.columnConfig, e.columnConfig)
      }),
      ve = Pe(function () {
        return Object.assign({}, C.table.rowConfig, e.rowConfig)
      }),
      De = Pe(function () {
        return Object.assign({}, C.table.resizeConfig, e.resizeConfig)
      }),
      Ne = Pe(function () {
        return Object.assign({}, C.table.resizableConfig, e.resizableConfig)
      }),
      $e = Pe(function () {
        return Object.assign({ startIndex: 0 }, C.table.seqConfig, e.seqConfig)
      }),
      Te = Pe(function () {
        return Object.assign({}, C.table.radioConfig, e.radioConfig)
      }),
      Ve = Pe(function () {
        return Object.assign({}, C.table.checkboxConfig, e.checkboxConfig)
      }),
      W = Xe()
    W = Pe(function () {
      return Object.assign({}, C.tooltip, C.table.tooltipConfig, e.tooltipConfig)
    })
    var ce = Pe(function () {
        const i = l.tooltipStore,
          c = W.value
        return jt(jt({}, c), i.currOpts)
      }),
      ye = Pe(function () {
        const i = W.value
        return Object.assign({ isArrow: !1 }, i)
      }),
      Ae = Pe(function () {
        return Object.assign({}, C.table.editConfig, e.editConfig)
      }),
      Re = Pe(function () {
        return Object.assign({ orders: ["asc", "desc", null] }, C.table.sortConfig, e.sortConfig)
      }),
      ae = Pe(function () {
        return Object.assign({}, C.table.filterConfig, e.filterConfig)
      }),
      fe = Pe(function () {
        return Object.assign({}, C.table.mouseConfig, e.mouseConfig)
      }),
      U = Pe(function () {
        return Object.assign({}, C.table.areaConfig, e.areaConfig)
      }),
      G = Pe(function () {
        return Object.assign({}, C.table.keyboardConfig, e.keyboardConfig)
      }),
      ne = Pe(function () {
        return Object.assign({}, C.table.clipConfig, e.clipConfig)
      }),
      y = Pe(function () {
        return Object.assign({}, C.table.fnrConfig, e.fnrConfig)
      }),
      k = Pe(function () {
        return Object.assign({}, C.table.menuConfig, e.menuConfig)
      }),
      ee = Pe(function () {
        const i = k.value,
          c = i.header
        return c && c.options ? c.options : []
      }),
      le = Pe(function () {
        const i = k.value,
          c = i.body
        return c && c.options ? c.options : []
      }),
      me = Pe(function () {
        const i = k.value,
          c = i.footer
        return c && c.options ? c.options : []
      }),
      be = Pe(function () {
        const i = k.value,
          c = ee.value,
          v = le.value,
          g = me.value
        return !!(e.menuConfig && pt(i) && (c.length || v.length || g.length))
      }),
      Le = Pe(function () {
        const i = l.ctxMenuStore,
          c = []
        return (
          i.list.forEach(function (v) {
            v.forEach(function (g) {
              c.push(g)
            })
          }),
          c
        )
      }),
      j = Pe(function () {
        return Object.assign({}, C.table.exportConfig, e.exportConfig)
      }),
      H = Pe(function () {
        return Object.assign({}, C.table.importConfig, e.importConfig)
      }),
      ie = Pe(function () {
        return Object.assign({}, C.table.printConfig, e.printConfig)
      }),
      we = Pe(function () {
        return Object.assign({}, C.table.expandConfig, e.expandConfig)
      }),
      E = Pe(function () {
        return Object.assign({}, C.table.treeConfig, e.treeConfig)
      }),
      _ = Pe(function () {
        return Object.assign({}, C.table.emptyRender, e.emptyRender)
      }),
      te = Pe(function () {
        return Object.assign({}, C.table.loadingConfig, e.loadingConfig)
      }),
      Me = Pe(function () {
        return e.border ? Math.max(2, Math.ceil(l.scrollbarWidth / l.tableColumn.length)) : 1
      }),
      ke = Pe(function () {
        return Object.assign({}, C.table.customConfig, e.customConfig)
      }),
      Be = Pe(function () {
        let i = f.tableFullColumn,
          c = 0
        return (
          i.forEach(function (v) {
            v.fixed && c++
          }),
          c
        )
      }),
      Ke = Pe(function () {
        const i = Be.value,
          c = he.value,
          v = c.maxFixedSize
        return v ? i >= v : !1
      }),
      Ue = Pe(function () {
        const i = e.border
        return i === !0 ? "full" : i || "default"
      }),
      _e = Pe(function () {
        e.treeConfig
        const i = l.tableData,
          c = f.tableFullData,
          v = Ve.value,
          g = v.strict,
          m = v.checkMethod
        return g
          ? i.length || c.length
            ? m
              ? c.every(function (S) {
                  return !m({ row: S })
                })
              : !1
            : !0
          : !1
      }),
      Je = {
        refElem: I,
        refTooltip: N,
        refValidTooltip: q,
        refTableFilter: $,
        refTableMenu: B,
        refTableHeader: w,
        refTableBody: x,
        refTableFooter: M,
        refTableLeftHeader: L,
        refTableLeftBody: Y,
        refTableLeftFooter: K,
        refTableRightHeader: O,
        refTableRightBody: A,
        refTableRightFooter: X,
        refLeftContainer: J,
        refRightContainer: Ce,
        refCellResizeBar: ue
      },
      Qe = {
        computeSize: o,
        computeValidOpts: Ie,
        computeSXOpts: z,
        computeSYOpts: ge,
        computeColumnOpts: he,
        computeRowOpts: ve,
        computeResizeleOpts: De,
        computeResizableOpts: Ne,
        computeSeqOpts: $e,
        computeRadioOpts: Te,
        computeCheckboxOpts: Ve,
        computeTooltipOpts: W,
        computeEditOpts: Ae,
        computeSortOpts: Re,
        computeFilterOpts: ae,
        computeMouseOpts: fe,
        computeAreaOpts: U,
        computeKeyboardOpts: G,
        computeClipOpts: ne,
        computeFNROpts: y,
        computeHeaderMenu: ee,
        computeBodyMenu: le,
        computeFooterMenu: me,
        computeIsMenu: be,
        computeMenuOpts: k,
        computeExportOpts: j,
        computeImportOpts: H,
        computePrintOpts: ie,
        computeExpandOpts: we,
        computeTreeOpts: E,
        computeEmptyOpts: _,
        computeLoadingOpts: te,
        computeCustomOpts: ke,
        computeFixedColumnSize: Be,
        computeIsMaxFixedColumn: Ke,
        computeIsAllCheckboxDisabled: _e
      },
      R = {
        xID: s,
        props: e,
        context: t,
        instance: d,
        reactData: l,
        internalData: f,
        getRefMaps: function () {
          return Je
        },
        getComputeMaps: function () {
          return Qe
        },
        xegrid: se
      },
      ot = function (i, c, v) {
        const g = u.get(i, v),
          m = u.get(c, v)
        return ea(g) && ea(m) ? !0 : u.isString(g) || u.isNumber(g) ? "" + g == "" + m : u.isEqual(g, m)
      },
      wt = function (i) {
        const c = Re.value,
          v = c.orders,
          g = i.order || null,
          m = v.indexOf(g) + 1
        return v[m < v.length ? m : 0]
      },
      mt = function (i) {
        const c = C.version,
          v = u.toStringJSON(localStorage.getItem(i) || "")
        return v && v._v === c ? v : { _v: c }
      },
      ft = function (i) {
        const c = f.fullAllDataRowIdData,
          v = {}
        return (
          u.each(i, function (g, m) {
            c[m] && (v[m] = g)
          }),
          v
        )
      },
      lt = function (i) {
        const c = f.fullDataRowIdData,
          v = []
        return (
          u.each(i, function (g, m) {
            c[m] && R.findRowIndexOf(v, c[m].row) === -1 && v.push(c[m].row)
          }),
          v
        )
      },
      xt = function () {
        const i = f.visibleColumn,
          c = x.value,
          v = c ? c.$el : null
        if (v) {
          for (
            var g = v.scrollLeft, m = v.clientWidth, S = g + m, T = -1, P = 0, V = 0, Q = 0, pe = i.length;
            Q < pe && ((P += i[Q].renderWidth), T === -1 && g < P && (T = Q), !(T >= 0 && (V++, P > S)));
            Q++
          );
          return { toVisibleIndex: Math.max(0, T), visibleSize: Math.max(8, V) }
        }
        return { toVisibleIndex: 0, visibleSize: 8 }
      },
      tt = function () {
        const i = w.value,
          c = x.value,
          v = c ? c.$el : null,
          g = o.value,
          m = oe.value
        if (v) {
          let S = i ? i.$el : null,
            T = 0,
            P = void 0
          ;(P = v.querySelector("tr")),
            !P && S && (P = S.querySelector("tr")),
            P && (T = P.clientHeight),
            T || (T = m[g || "default"])
          const V = Math.max(8, Math.ceil(v.clientHeight / T) + 2)
          return { rowHeight: T, visibleSize: V }
        }
        return { rowHeight: 0, visibleSize: 8 }
      },
      Mt = function (i, c, v) {
        for (let g = 0, m = i.length; g < m; g++) {
          const S = i[g],
            T = c.startIndex,
            P = c.endIndex,
            V = S[v],
            Q = S[v + "span"],
            pe = V + Q
          V < T && T < pe && (c.startIndex = V),
            V < P && P < pe && (c.endIndex = pe),
            (c.startIndex !== T || c.endIndex !== P) && (g = -1)
        }
      },
      St = function (i, c, v) {
        if (i) {
          const g = e.treeConfig,
            m = f.visibleColumn
          u.isArray(i) || (i = [i]),
            g && i.length && rr("vxe.error.noTree", ["merge-cells | merge-footer-items"]),
            i.forEach(function (S) {
              let T = S.row,
                P = S.col,
                V = S.rowspan,
                Q = S.colspan
              if (
                (v && u.isNumber(T) && (T = v[T]),
                u.isNumber(P) && (P = m[P]),
                (v ? T : u.isNumber(T)) &&
                  P &&
                  (V || Q) &&
                  ((V = u.toNumber(V) || 1), (Q = u.toNumber(Q) || 1), V > 1 || Q > 1))
              ) {
                const pe = u.findIndexOf(c, function (Fe) {
                    return (Fe._row === T || Ye(R, Fe._row) === Ye(R, T)) && (Fe._col.id === P || Fe._col.id === P.id)
                  }),
                  Ee = c[pe]
                if (Ee) (Ee.rowspan = V), (Ee.colspan = Q), (Ee._rowspan = V), (Ee._colspan = Q)
                else {
                  const ze = v ? R.findRowIndexOf(v, T) : T,
                    We = h.getVTColumnIndex(P)
                  c.push({ row: ze, col: We, rowspan: V, colspan: Q, _row: T, _col: P, _rowspan: V, _colspan: Q })
                }
              }
            })
        }
      },
      Gt = function (i, c, v) {
        const g = []
        if (i) {
          const m = e.treeConfig,
            S = f.visibleColumn
          u.isArray(i) || (i = [i]),
            m && i.length && rr("vxe.error.noTree", ["merge-cells | merge-footer-items"]),
            i.forEach(function (T) {
              let P = T.row,
                V = T.col
              v && u.isNumber(P) && (P = v[P]), u.isNumber(V) && (V = S[V])
              const Q = u.findIndexOf(c, function (Ee) {
                return (Ee._row === P || Ye(R, Ee._row) === Ye(R, P)) && (Ee._col.id === V || Ee._col.id === V.id)
              })
              if (Q > -1) {
                const pe = c.splice(Q, 1)
                g.push(pe[0])
              }
            })
        }
        return g
      },
      Kt = function () {
        const i = f.tableFullColumn
        i.forEach(function (c) {
          c.order = null
        })
      },
      Wt = function (i) {
        let c = l.parentHeight,
          v = e[i],
          g = 0
        if (v)
          if (v === "auto") g = c
          else {
            const m = R.getExcludeHeight()
            xi(v) ? (g = Math.floor(((u.toInteger(v) || 1) / 100) * c)) : (g = u.toNumber(v)), (g = Math.max(40, g - m))
          }
        return g
      },
      Qt = function () {
        const i = e.id,
          c = e.customConfig,
          v = f.collectColumn,
          g = ke.value,
          m = g.storage,
          S = m === !0 || (m && m.resizable),
          T = m === !0 || (m && m.visible),
          P = m === !0 || (m && m.fixed),
          V = m === !0 || (m && m.order)
        if (c && (S || T || P || V)) {
          const Q = {}
          if (!i) {
            rr("vxe.error.reqProp", ["id"])
            return
          }
          if (S) {
            const pe = mt(Po)[i]
            pe &&
              u.each(pe, function (je, it) {
                Q[it] = { resizeWidth: je }
              })
          }
          if (P) {
            const Ee = mt(Lo)[i]
            if (Ee) {
              const ze = Ee.split(",")
              ze.forEach(function (je) {
                const it = je.split("|"),
                  Ze = it[0],
                  rt = it[1]
                Q[Ze] ? (Q[Ze].fixed = rt) : (Q[Ze] = { fixed: rt })
              })
            }
          }
          if ((V && mt(nI)[i], T)) {
            const We = mt($o)[i]
            if (We) {
              const Fe = We.split("|"),
                Ge = Fe[0] ? Fe[0].split(",") : [],
                qe = Fe[1] ? Fe[1].split(",") : []
              Ge.forEach(function (je) {
                Q[je] ? (Q[je].visible = !1) : (Q[je] = { visible: !1 })
              }),
                qe.forEach(function (je) {
                  Q[je] ? (Q[je].visible = !0) : (Q[je] = { visible: !0 })
                })
            }
          }
          const Se = {}
          u.eachTree(v, function (je) {
            const it = je.getKey()
            it && (Se[it] = je)
          }),
            u.each(Q, function (je, it) {
              const Ze = je.visible,
                rt = je.resizeWidth,
                dt = je.fixed,
                Rt = je.order,
                kt = Se[it]
              kt &&
                (u.isNumber(rt) && (kt.resizeWidth = rt),
                u.isBoolean(Ze) && (kt.visible = Ze),
                dt && (kt.fixed = dt),
                Rt && (kt.customOrder = Rt))
            })
        }
      },
      er = function () {
        const i = f.tableFullColumn,
          c = f.collectColumn,
          v = (f.fullColumnIdData = {}),
          g = (f.fullColumnFieldData = {})
        fe.value, he.value, ve.value
        let m = c.some(Hn),
          S = !!e.showOverflow,
          T,
          P,
          V = function (Q, pe, Ee, ze, We) {
            const Fe = Q.id,
              Ge = Q.field
            Q.fixed
            const qe = Q.type,
              Se = Q.treeNode,
              je = { column: Q, colid: Fe, index: pe, items: Ee, parent: We }
            Ge && (g[Ge] = je),
              Se ? P || (P = Q) : qe === "expand" && (T || (T = Q)),
              S && Q.showOverflow === !1 && (S = !1),
              v[Fe] && rr("vxe.error.colRepet", ["colId", Fe]),
              (v[Fe] = je)
          }
        m
          ? u.eachTree(c, function (Q, pe, Ee, ze, We, Fe) {
              ;(Q.level = Fe.length), V(Q, pe, Ee, ze, We)
            })
          : i.forEach(V),
          (l.isGroup = m),
          (l.treeNodeColumn = P),
          (l.expandColumn = T),
          (l.isAllOverflow = S)
      },
      hr = function () {
        ;(f.customHeight = Wt("height")), (f.customMinHeight = Wt("minHeight")), (f.customMaxHeight = Wt("maxHeight"))
      },
      ur = function () {
        const i = w.value,
          c = x.value,
          v = M.value,
          g = c ? c.$el : null,
          m = i ? i.$el : null,
          S = v ? v.$el : null
        if (g) {
          let T = 0,
            P = 40,
            V = g.clientWidth - 1,
            Q = V,
            pe = Q / 100,
            Ee = e.fit,
            ze = l.columnStore,
            We = ze.resizeList,
            Fe = ze.pxMinList,
            Ge = ze.pxList,
            qe = ze.scaleList,
            Se = ze.scaleMinList,
            je = ze.autoList
          if (
            (Fe.forEach(function (bt) {
              const Et = u.toInteger(bt.minWidth)
              ;(T += Et), (bt.renderWidth = Et)
            }),
            Se.forEach(function (bt) {
              const Et = Math.floor(u.toInteger(bt.minWidth) * pe)
              ;(T += Et), (bt.renderWidth = Et)
            }),
            qe.forEach(function (bt) {
              const Et = Math.floor(u.toInteger(bt.width) * pe)
              ;(T += Et), (bt.renderWidth = Et)
            }),
            Ge.forEach(function (bt) {
              const Et = u.toInteger(bt.width)
              ;(T += Et), (bt.renderWidth = Et)
            }),
            We.forEach(function (bt) {
              const Et = u.toInteger(bt.resizeWidth)
              ;(T += Et), (bt.renderWidth = Et)
            }),
            (Q -= T),
            (pe = Q > 0 ? Math.floor(Q / (Se.length + Fe.length + je.length)) : 0),
            Ee
              ? Q > 0 &&
                Se.concat(Fe).forEach(function (bt) {
                  ;(T += pe), (bt.renderWidth += pe)
                })
              : (pe = P),
            je.forEach(function (bt) {
              const Et = Math.max(pe, P)
              ;(bt.renderWidth = Et), (T += Et)
            }),
            Ee)
          ) {
            let it = qe.concat(Se).concat(Fe).concat(je),
              Ze = it.length - 1
            if (Ze > 0) {
              let rt = V - T
              if (rt > 0) {
                for (; rt > 0 && Ze >= 0; ) rt--, it[Ze--].renderWidth++
                T = V
              }
            }
          }
          let dt = g.offsetHeight,
            Rt = g.scrollHeight > g.clientHeight,
            kt = 0
          Rt && (kt = Math.max(g.offsetWidth - g.clientWidth, 0)),
            (l.scrollbarWidth = kt),
            (l.overflowY = Rt),
            (f.tableWidth = T),
            (f.tableHeight = dt)
          let At = 0
          m &&
            ((At = m.clientHeight),
            de(function () {
              m && g && m.scrollLeft !== g.scrollLeft && (m.scrollLeft = g.scrollLeft)
            })),
            (f.headerHeight = At)
          let st = !1,
            Ct = 0,
            $t = 0
          S
            ? ((Ct = S.offsetHeight), (st = T > S.clientWidth), st && ($t = Math.max(Ct - S.clientHeight, 0)))
            : ((st = T > V), st && ($t = Math.max(dt - g.clientHeight, 0))),
            (f.footerHeight = Ct),
            (l.overflowX = st),
            (l.scrollbarHeight = $t),
            hr(),
            (l.parentHeight = Math.max(f.headerHeight + Ct + 20, D.getParentHeight())),
            st && D.checkScrolling()
        }
      },
      ir = function (i) {
        const c = i.sortBy,
          v = i.sortType
        return function (g) {
          let m
          return (
            c ? (m = u.isFunction(c) ? c({ row: g, column: i }) : u.get(g, c)) : (m = D.getCellLabel(g, i)),
            !v || v === "auto"
              ? isNaN(m)
                ? m
                : u.toNumber(m)
              : v === "number"
                ? u.toNumber(m)
                : v === "string"
                  ? u.toValueString(m)
                  : m
          )
        }
      },
      gr = function () {
        const i = e.treeConfig,
          c = f.afterFullData,
          v = f.fullDataRowIdData,
          g = f.fullAllDataRowIdData,
          m = f.afterTreeFullData,
          S = E.value,
          T = S.children || S.childrenField,
          P = {}
        i
          ? u.eachTree(
              m,
              function (V, Q, pe, Ee) {
                const ze = Ye(R, V),
                  We = g[ze],
                  Fe = Ee.map(function (qe, Se) {
                    return Se % 2 === 0 ? Number(qe) + 1 : "."
                  }).join("")
                if (We) (We.seq = Fe), (We._index = Q)
                else {
                  const Ge = {
                    row: V,
                    rowid: ze,
                    seq: Fe,
                    index: -1,
                    $index: -1,
                    _index: Q,
                    items: [],
                    parent: null,
                    level: 0
                  }
                  ;(g[ze] = Ge), (v[ze] = Ge)
                }
                P[ze] = V
              },
              { children: S.transform ? S.mapChildrenField : T }
            )
          : c.forEach(function (V, Q) {
              const pe = Ye(R, V),
                Ee = g[pe],
                ze = Q + 1
              if (Ee) (Ee.seq = ze), (Ee._index = Q)
              else {
                const We = {
                  row: V,
                  rowid: pe,
                  seq: ze,
                  index: -1,
                  $index: -1,
                  _index: Q,
                  items: [],
                  parent: null,
                  level: 0
                }
                ;(g[pe] = We), (v[pe] = We)
              }
              P[pe] = V
            }),
          (f.afterFullRowMaps = P)
      },
      cr = function () {
        const i = e.treeConfig,
          c = l.treeExpandedMaps,
          v = E.value
        if (i && v.transform) {
          const g = [],
            m = {}
          return (
            u.eachTree(
              f.afterTreeFullData,
              function (S, T, P, V, Q) {
                const pe = Ye(R, S),
                  Ee = Ye(R, Q)
                ;(!Q || (m[Ee] && c[Ee])) && ((m[pe] = 1), g.push(S))
              },
              { children: v.mapChildrenField }
            ),
            (f.afterFullData = g),
            oa(g),
            g
          )
        }
        return f.afterFullData
      },
      Xr = function () {
        let i = e.treeConfig,
          c = f.tableFullColumn,
          v = f.tableFullData,
          g = f.tableFullTreeData,
          m = ae.value,
          S = Re.value,
          T = E.value,
          P = T.transform,
          V = m.remote,
          Q = m.filterMethod,
          pe = S.remote,
          Ee = S.sortMethod,
          ze = S.multiple,
          We = S.chronological,
          Fe = [],
          Ge = []
        if (!V || !pe) {
          let qe = [],
            Se = []
          if (
            (c.forEach(function (Ze) {
              const rt = Ze.field,
                dt = Ze.sortable,
                Rt = Ze.order,
                kt = Ze.filters
              if (!V && kt && kt.length) {
                const At = [],
                  st = []
                kt.forEach(function (Ct) {
                  Ct.checked && (st.push(Ct), At.push(Ct.value))
                }),
                  st.length && qe.push({ column: Ze, valueList: At, itemList: st })
              }
              !pe && dt && Rt && Se.push({ column: Ze, field: rt, property: rt, order: Rt, sortTime: Ze.sortTime })
            }),
            ze && We && Se.length > 1 && (Se = u.orderBy(Se, "sortTime")),
            !V && qe.length)
          ) {
            const je = function (Ze) {
              return qe.every(function (rt) {
                const dt = rt.column,
                  Rt = rt.valueList,
                  kt = rt.itemList,
                  At = dt.filterMethod,
                  st = dt.filterRender,
                  Ct = st ? et.renderer.get(st.name) : null,
                  $t = Ct ? Ct.filterMethod : null,
                  bt = Ct ? Ct.defaultFilterMethod : null,
                  Et = pa(Ze, dt)
                return At
                  ? kt.some(function (wr) {
                      return At({ value: wr.value, option: wr, cellValue: Et, row: Ze, column: dt, $table: R })
                    })
                  : $t
                    ? kt.some(function (wr) {
                        return $t({ value: wr.value, option: wr, cellValue: Et, row: Ze, column: dt, $table: R })
                      })
                    : Q
                      ? Q({ options: kt, values: Rt, cellValue: Et, row: Ze, column: dt })
                      : bt
                        ? kt.some(function (wr) {
                            return bt({ value: wr.value, option: wr, cellValue: Et, row: Ze, column: dt, $table: R })
                          })
                        : Rt.indexOf(u.get(Ze, dt.field)) > -1
              })
            }
            i && P
              ? ((Ge = u.searchTree(g, je, jt(jt({}, T), { original: !0 }))), (Fe = Ge))
              : ((Fe = i ? g.filter(je) : v.filter(je)), (Ge = Fe))
          } else
            i && P
              ? ((Ge = u.searchTree(
                  g,
                  function () {
                    return !0
                  },
                  jt(jt({}, T), { original: !0 })
                )),
                (Fe = Ge))
              : ((Fe = i ? g.slice(0) : v.slice(0)), (Ge = Fe))
          if (!pe && Se.length)
            if (i && P) {
              if (Ee) {
                var it = Ee({ data: Ge, sortList: Se, $table: R })
                Ge = u.isArray(it) ? it : Ge
              } else
                Ge = u.orderBy(
                  Ge,
                  Se.map(function (Ze) {
                    const rt = Ze.column,
                      dt = Ze.order
                    return [ir(rt), dt]
                  })
                )
              Fe = Ge
            } else {
              if (Ee) {
                var it = Ee({ data: Fe, sortList: Se, $table: R })
                Fe = u.isArray(it) ? it : Fe
              } else
                Fe = u.orderBy(
                  Fe,
                  Se.map(function (Ze) {
                    const rt = Ze.column,
                      dt = Ze.order
                    return [ir(rt), dt]
                  })
                )
              Ge = Fe
            }
        } else
          i && P
            ? ((Ge = u.searchTree(
                g,
                function () {
                  return !0
                },
                jt(jt({}, T), { original: !0 })
              )),
              (Fe = Ge))
            : ((Fe = i ? g.slice(0) : v.slice(0)), (Ge = Fe))
        ;(f.afterFullData = Fe), (f.afterTreeFullData = Ge), gr()
      },
      Lt = function () {
        let i = e.border,
          c = e.showFooter,
          v = e.showOverflow,
          g = e.showHeaderOverflow,
          m = e.showFooterOverflow,
          S = e.mouseConfig,
          T = e.spanMethod,
          P = e.footerSpanMethod,
          V = e.keyboardConfig,
          Q = l.isGroup,
          pe = l.currentRow,
          Ee = l.tableColumn,
          ze = l.scrollXLoad,
          We = l.scrollYLoad,
          Fe = l.scrollbarWidth,
          Ge = l.scrollbarHeight,
          qe = l.columnStore,
          Se = l.editStore,
          je = l.mergeList,
          it = l.mergeFooterList,
          Ze = l.isAllOverflow,
          rt = f.visibleColumn,
          dt = f.fullColumnIdData,
          Rt = f.tableHeight,
          kt = f.tableWidth,
          At = f.headerHeight,
          st = f.footerHeight,
          Ct = f.elemStore,
          $t = f.customHeight,
          bt = f.customMinHeight,
          Et = f.customMaxHeight,
          wr = ["main", "left", "right"],
          an = Z.value,
          ii = Me.value,
          nn = fe.value,
          Ca = G.value,
          ln = Ct["main-body-wrapper"],
          on = ln ? ln.value : null
        return (
          an &&
            ((an.style.top = "".concat(At, "px")), (an.style.height = on ? "".concat(on.offsetHeight - Ge, "px") : "")),
          $t > 0 && c && ($t += Ge),
          wr.forEach(function (Lr, un) {
            let Er = un > 0 ? Lr : "",
              ro = ["header", "body", "footer"],
              $a = Er === "left",
              ya = [],
              ua
            Er && ((ya = $a ? qe.leftList : qe.rightList), (ua = $a ? J.value : Ce.value)),
              ro.forEach(function (Sr) {
                const li = Ct["".concat(Lr, "-").concat(Sr, "-wrapper")],
                  fr = li ? li.value : null,
                  oi = Ct["".concat(Lr, "-").concat(Sr, "-table")],
                  ca = oi ? oi.value : null
                if (Sr === "header") {
                  var Or = kt,
                    Ar = Ee
                  Q ? (Ar = rt) : Er && (ze || g) && (Ar = ya),
                    (Or = Ar.reduce(function (La, Aa) {
                      return La + Aa.renderWidth
                    }, 0)),
                    ca && (ca.style.width = Or ? "".concat(Or + Fe, "px") : "")
                  const sc = Ct["".concat(Lr, "-").concat(Sr, "-repair")],
                    fc = sc ? sc.value : null
                  fc && (fc.style.width = "".concat(kt, "px"))
                  const vc = Ct["".concat(Lr, "-").concat(Sr, "-list")],
                    dc = vc ? vc.value : null
                  Q &&
                    dc &&
                    u.arrayEach(dc.querySelectorAll(".col--group"), function (La) {
                      const Aa = h.getColumnNode(La)
                      if (Aa) {
                        let vr = Aa.item,
                          qr = vr.showHeaderOverflow,
                          Va = u.isBoolean(qr) ? qr : g,
                          ui = Va === "ellipsis",
                          wa = Va === "title",
                          no = Va === !0 || Va === "tooltip",
                          cl = wa || no || ui,
                          sl = 0,
                          Rn = 0
                        cl &&
                          u.eachTree(
                            vr.children,
                            function (ci) {
                              ;(!ci.children || !vr.children.length) && Rn++, (sl += ci.renderWidth)
                            },
                            { children: "children" }
                          ),
                          (La.style.width = cl ? "".concat(sl - Rn - (i ? 2 : 0), "px") : "")
                      }
                    })
                } else if (Sr === "body") {
                  const pc = Ct["".concat(Lr, "-").concat(Sr, "-emptyBlock")],
                    hc = pc ? pc.value : null
                  if (wo(fr)) {
                    let cn = 0,
                      ao = bt - At - st
                    if (
                      (Et &&
                        ((cn = Et - At - st),
                        Er && (cn -= c ? 0 : Ge),
                        (cn = Math.max(ao, cn)),
                        (fr.style.maxHeight = "".concat(cn, "px"))),
                      $t)
                    ) {
                      let ul = $t - At - st
                      Er && (ul -= c ? 0 : Ge),
                        cn && (ul = Math.min(cn, ul)),
                        (fr.style.height = "".concat(Math.max(ao, ul), "px"))
                    } else fr.style.height = ""
                    fr.style.minHeight = "".concat(ao, "px")
                  }
                  ua &&
                    (wo(fr) && (fr.style.top = "".concat(At, "px")),
                    (ua.style.height = "".concat(($t > 0 ? $t - At - st : Rt) + At + st - Ge * (c ? 2 : 1), "px")),
                    (ua.style.width = "".concat(
                      ya.reduce(
                        function (vr, qr) {
                          return vr + qr.renderWidth
                        },
                        $a ? 0 : Fe
                      ),
                      "px"
                    )))
                  var Or = kt,
                    Ar = Ee
                  Er &&
                    (!l.expandColumn && (We || (v && Ze)) && !je.length && !T && !(V && Ca.isMerge)
                      ? (Ar = ya)
                      : (Ar = rt)),
                    (Or = Ar.reduce(function (vr, qr) {
                      return vr + qr.renderWidth
                    }, 0)),
                    ca &&
                      ((ca.style.width = Or ? "".concat(Or, "px") : ""),
                      (ca.style.paddingRight = Fe && Er && (Br["-moz"] || Br.safari) ? "".concat(Fe, "px") : "")),
                    hc && (hc.style.width = Or ? "".concat(Or, "px") : "")
                } else if (Sr === "footer") {
                  var Or = kt,
                    Ar = Ee
                  Er && (!l.expandColumn && (ze || m) && (!it.length || !P) ? (Ar = ya) : (Ar = rt)),
                    (Or = Ar.reduce(function (vr, qr) {
                      return vr + qr.renderWidth
                    }, 0)),
                    wo(fr) &&
                      (ua && (fr.style.top = "".concat($t > 0 ? $t - st : Rt + At, "px")),
                      (fr.style.marginTop = "".concat(-Math.max(1, Ge), "px"))),
                    ca && (ca.style.width = Or ? "".concat(Or + Fe, "px") : "")
                }
                const gc = Ct["".concat(Lr, "-").concat(Sr, "-colgroup")],
                  mc = gc ? gc.value : null
                mc &&
                  u.arrayEach(mc.children, function (La) {
                    const Aa = La.getAttribute("name")
                    if ((Aa === "col_gutter" && (La.style.width = "".concat(Fe, "px")), dt[Aa])) {
                      let vr = dt[Aa].column,
                        qr = vr.showHeaderOverflow,
                        Va = vr.showFooterOverflow,
                        ui = vr.showOverflow,
                        wa = void 0
                      ;(La.style.width = "".concat(vr.renderWidth, "px")),
                        Sr === "header"
                          ? (wa = u.isUndefined(qr) || u.isNull(qr) ? g : qr)
                          : Sr === "footer"
                            ? (wa = u.isUndefined(Va) || u.isNull(Va) ? m : Va)
                            : (wa = u.isUndefined(ui) || u.isNull(ui) ? v : ui)
                      let no = wa === "ellipsis",
                        cl = wa === "title",
                        sl = wa === !0 || wa === "tooltip",
                        Rn = cl || sl || no,
                        ci = Ct["".concat(Lr, "-").concat(Sr, "-list")],
                        bc = ci ? ci.value : null
                      We && !Rn && (Rn = !0),
                        bc &&
                          u.arrayEach(bc.querySelectorAll(".".concat(vr.id)), function (xc) {
                            let io = parseInt(xc.getAttribute("colspan") || 1),
                              Cc = xc.querySelector(".vxe-cell"),
                              yc = vr.renderWidth
                            if (Cc) {
                              if (io > 1)
                                for (let zp = h.getColumnIndex(vr), lo = 1; lo < io; lo++) {
                                  const wc = h.getColumns(zp + lo)
                                  wc && (yc += wc.renderWidth)
                                }
                              Cc.style.width = Rn ? "".concat(yc - ii * io, "px") : ""
                            }
                          })
                    }
                  })
              })
          }),
          pe && h.setCurrentRow(pe),
          S && nn.selected && Se.selected.row && Se.selected.column && R.addCellSelectedClass(),
          de()
        )
      },
      Ut = function (i) {
        return R.triggerValidate ? R.triggerValidate(i) : de()
      },
      mr = function (i, c) {
        Ut("blur")
          .catch(function (v) {
            return v
          })
          .then(function () {
            R.handleActived(c, i)
              .then(function () {
                return Ut("change")
              })
              .catch(function (v) {
                return v
              })
          })
      },
      Kr = function () {
        const i = e.sortConfig
        if (i) {
          let c = Re.value,
            v = c.defaultSort
          v &&
            (u.isArray(v) || (v = [v]),
            v.length &&
              ((i.multiple ? v : v.slice(0, 1)).forEach(function (g, m) {
                const S = g.field,
                  T = g.order
                if (S && T) {
                  const P = h.getColumnByField(S)
                  P && P.sortable && ((P.order = T), (P.sortTime = Date.now() + m))
                }
              }),
              c.remote || D.handleTableData(!0).then(Lt)))
        }
      },
      Mr = function () {
        const i = e.checkboxConfig
        if (i) {
          const c = f.fullDataRowIdData,
            v = Ve.value,
            g = v.checkAll,
            m = v.checkRowKeys
          if (g) Wr(!0, !0)
          else if (m) {
            const S = []
            m.forEach(function (T) {
              c[T] && S.push(c[T].row)
            }),
              _t(S, !0, !0)
          }
        }
      },
      br = function () {
        let i,
          c = e.radioConfig
        if (c) {
          const v = f.fullDataRowIdData,
            g = Te.value,
            m = g.checkRowKey,
            S = g.reserve
          if (m && (v[m] && qt(v[m].row, !0), S)) {
            const T = sn(R)
            f.radioReserveRow = ((i = {}), (i[T] = m), i)
          }
        }
      },
      Rr = function () {
        const i = e.expandConfig
        if (i) {
          const c = f.fullDataRowIdData,
            v = we.value,
            g = v.expandAll,
            m = v.expandRowKeys
          if (g) h.setAllRowExpand(!0)
          else if (m) {
            const S = []
            m.forEach(function (T) {
              c[T] && S.push(c[T].row)
            }),
              h.setRowExpand(S, !0)
          }
        }
      },
      kr = function (i) {
        const c = Te.value
        c.reserve && (f.radioReserveRow = i)
      },
      xr = function (i, c) {
        const v = f.checkboxReserveRowMap,
          g = Ve.value
        if (g.reserve) {
          const m = Ye(R, i)
          c ? (v[m] = i) : v[m] && delete v[m]
        }
      },
      qt = function (i, c) {
        const v = Te.value,
          g = v.checkMethod
        return i && (c || !g || g({ row: i })) && ((l.selectRadioRow = i), kr(i)), de()
      },
      _t = function (i, c, v) {
        return (
          i && !u.isArray(i) && (i = [i]),
          i.forEach(function (g) {
            return D.handleSelectRow({ row: g }, !!c, v)
          }),
          de()
        )
      },
      Wr = function (i, c) {
        const v = e.treeConfig,
          g = l.selectCheckboxMaps,
          m = f.afterFullData,
          S = f.afterFullRowMaps,
          T = f.checkboxReserveRowMap,
          P = E.value,
          V = P.children || P.childrenField,
          Q = Ve.value,
          pe = Q.checkField,
          Ee = Q.reserve,
          ze = Q.checkStrictly,
          We = Q.checkMethod,
          Fe = Q.indeterminateField || Q.halfField,
          Ge = {}
        if (
          (v ||
            u.each(g, function (Se, je) {
              S[je] || (Ge[je] = Se)
            }),
          ze)
        )
          l.isAllSelected = i
        else {
          if (pe) {
            const qe = function (Se) {
              ;(c || !We || We({ row: Se })) && (i && (Ge[Ye(R, Se)] = Se), u.set(Se, pe, i)),
                v && Fe && u.set(Se, Fe, !1)
            }
            v ? u.eachTree(m, qe, { children: V }) : m.forEach(qe)
          } else
            v
              ? i
                ? u.eachTree(
                    m,
                    function (Se) {
                      ;(c || !We || We({ row: Se })) && (Ge[Ye(R, Se)] = Se)
                    },
                    { children: V }
                  )
                : !c &&
                  We &&
                  u.eachTree(
                    m,
                    function (Se) {
                      const je = Ye(R, Se)
                      !We({ row: Se }) && g[je] && (Ge[je] = Se)
                    },
                    { children: V }
                  )
              : i
                ? !c && We
                  ? m.forEach(function (Se) {
                      const je = Ye(R, Se)
                      ;(g[je] || We({ row: Se })) && (Ge[je] = Se)
                    })
                  : m.forEach(function (Se) {
                      Ge[Ye(R, Se)] = Se
                    })
                : !c &&
                  We &&
                  m.forEach(function (Se) {
                    const je = Ye(R, Se)
                    !We({ row: Se }) && g[je] && (Ge[je] = Se)
                  })
          Ee &&
            (i
              ? u.each(Ge, function (Se, je) {
                  T[je] = Se
                })
              : m.forEach(function (Se) {
                  return xr(Se, !1)
                })),
            (l.selectCheckboxMaps = pe ? {} : Ge)
        }
        return (l.treeIndeterminateMaps = {}), (f.treeIndeterminateRowMaps = {}), D.checkSelectionStatus(), de()
      },
      Cr = function () {
        const i = e.treeConfig,
          c = l.expandColumn,
          v = l.currentRow,
          g = l.selectCheckboxMaps,
          m = l.selectRadioRow,
          S = l.rowExpandedMaps,
          T = l.treeExpandedMaps,
          P = f.fullDataRowIdData,
          V = f.fullAllDataRowIdData,
          Q = f.radioReserveRow,
          pe = we.value,
          Ee = E.value,
          ze = Te.value,
          We = Ve.value
        if ((m && !V[Ye(R, m)] && (l.selectRadioRow = null), ze.reserve && Q)) {
          const Fe = Ye(R, Q)
          P[Fe] && qt(P[Fe].row, !0)
        }
        ;(l.selectCheckboxMaps = ft(g)),
          We.reserve && _t(lt(f.checkboxReserveRowMap), !0, !0),
          v && !V[Ye(R, v)] && (l.currentRow = null),
          (l.rowExpandedMaps = c ? ft(S) : {}),
          c && pe.reserve && h.setRowExpand(lt(f.rowExpandedReserveRowMap), !0),
          (l.treeExpandedMaps = i ? ft(T) : {}),
          i && Ee.reserve && h.setTreeExpand(lt(f.treeExpandedReserveRowMap), !0)
      },
      ia = function () {
        const i = e.treeConfig
        if (i) {
          const c = f.tableFullData,
            v = E.value,
            g = v.expandAll,
            m = v.expandRowKeys,
            S = v.children || v.childrenField
          if (g) h.setAllTreeExpand(!0)
          else if (m) {
            const T = [],
              P = sn(R)
            m.forEach(function (V) {
              const Q = u.findTree(
                c,
                function (pe) {
                  return V === u.get(pe, P)
                },
                { children: S }
              )
              Q && T.push(Q.item)
            }),
              h.setTreeExpand(T, !0)
          }
        }
      },
      Zr = function (i) {
        const c = E.value,
          v = Ve.value,
          g = c.transform,
          m = c.loadMethod,
          S = v.checkStrictly
        return new Promise(function (T) {
          if (m) {
            const P = l.treeExpandLazyLoadedMaps,
              V = f.fullAllDataRowIdData,
              Q = Ye(R, i),
              pe = V[Q]
            ;(P[Q] = i),
              m({ $table: R, row: i })
                .then(function (Ee) {
                  if (((pe.treeLoaded = !0), P[Q] && delete P[Q], u.isArray(Ee) || (Ee = []), Ee))
                    return h.loadTreeChildren(i, Ee).then(function (ze) {
                      const We = l.treeExpandedMaps
                      return (
                        ze.length && !We[Q] && (We[Q] = i),
                        !S && h.isCheckedByCheckboxRow(i) && _t(ze, !0),
                        de().then(function () {
                          if (g) return D.handleTableData()
                        })
                      )
                    })
                })
                .catch(function () {
                  const Ee = l.treeExpandLazyLoadedMaps
                  ;(pe.treeLoaded = !1), Ee[Q] && delete Ee[Q]
                })
                .finally(function () {
                  de()
                    .then(function () {
                      return h.recalculate()
                    })
                    .then(function () {
                      return T()
                    })
                })
          } else T()
        })
      },
      Jr = function (i, c) {
        const v = f.treeExpandedReserveRowMap,
          g = E.value
        if (g.reserve) {
          const m = Ye(R, i)
          c ? (v[m] = i) : v[m] && delete v[m]
        }
      },
      sr = function (i) {
        return new Promise(function (c) {
          const v = we.value,
            g = v.loadMethod
          if (g) {
            const m = f.fullAllDataRowIdData,
              S = l.rowExpandLazyLoadedMaps,
              T = Ye(R, i),
              P = m[T]
            ;(S[T] = i),
              g({ $table: R, row: i, rowIndex: h.getRowIndex(i), $rowIndex: h.getVMRowIndex(i) })
                .then(function () {
                  const V = l.rowExpandedMaps
                  ;(P.expandLoaded = !0), (V[T] = i)
                })
                .catch(function () {
                  P.expandLoaded = !1
                })
                .finally(function () {
                  const V = l.rowExpandLazyLoadedMaps
                  V[T] && delete V[T],
                    de()
                      .then(function () {
                        return h.recalculate()
                      })
                      .then(function () {
                        return c()
                      })
                })
          } else c()
        })
      },
      Nt = function (i, c) {
        const v = f.rowExpandedReserveRowMap,
          g = we.value
        if (g.reserve) {
          const m = Ye(R, i)
          c ? (v[m] = i) : v[m] && delete v[m]
        }
      },
      Pt = function () {
        const i = e.mergeCells
        i && h.setMergeCells(i)
      },
      tr = function () {
        const i = e.mergeFooterItems
        i && h.setMergeFooterItems(i)
      },
      Fr = function () {
        return de().then(function () {
          const i = l.scrollXLoad,
            c = l.scrollYLoad,
            v = f.scrollXStore,
            g = f.scrollYStore,
            m = ge.value,
            S = z.value
          if (i) {
            const T = xt().visibleSize,
              P = S.oSize ? u.toNumber(S.oSize) : Br.edge ? 5 : 0
            ;(v.offsetSize = P),
              (v.visibleSize = T),
              (v.endIndex = Math.max(v.startIndex + v.visibleSize + P, v.endIndex)),
              D.updateScrollXData()
          } else D.updateScrollXSpace()
          const V = tt(),
            Q = V.rowHeight,
            pe = V.visibleSize
          if (((g.rowHeight = Q), c)) {
            const Ee = m.oSize ? u.toNumber(m.oSize) : Br.edge ? 10 : 0
            ;(g.offsetSize = Ee),
              (g.visibleSize = pe),
              (g.endIndex = Math.max(g.startIndex + pe + Ee, g.endIndex)),
              D.updateScrollYData()
          } else D.updateScrollYSpace()
          ;(l.rowHeight = Q), de(Lt)
        })
      },
      Ir = function (i) {
        let c = e.keepSource,
          v = e.treeConfig,
          g = l.editStore,
          m = l.scrollYLoad,
          S = f.scrollYStore,
          T = f.scrollXStore,
          P = f.lastScrollLeft,
          V = f.lastScrollTop,
          Q = E.value,
          pe = Q.transform,
          Ee = Q.children || Q.childrenField,
          ze = [],
          We = Ht(i ? i.slice(0) : [])
        v &&
          (pe
            ? ((ze = u.toArrayTree(We, {
                key: Q.rowField,
                parentKey: Q.parentField,
                children: Ee,
                mapChildren: Q.mapChildrenField
              })),
              (We = ze.slice(0)))
            : (ze = We.slice(0))),
          (S.startIndex = 0),
          (S.endIndex = 1),
          (T.startIndex = 0),
          (T.endIndex = 1),
          (l.scrollVMLoading = !1),
          (g.insertMaps = {}),
          (g.removeMaps = {})
        const Fe = oa(We)
        return (
          (l.scrollYLoad = Fe),
          (f.tableFullData = We),
          (f.tableFullTreeData = ze),
          D.cacheRowMap(!0),
          (f.tableSynchData = i),
          c && D.cacheSourceMap(We),
          R.clearCellAreas && e.mouseConfig && (R.clearCellAreas(), R.clearCopyCellArea()),
          h.clearMergeCells(),
          h.clearMergeFooterItems(),
          D.handleTableData(!0),
          h.updateFooter(),
          de()
            .then(function () {
              hr(), Lt()
            })
            .then(function () {
              Fr()
            })
            .then(function () {
              return (
                Fe && (S.endIndex = S.visibleSize),
                Cr(),
                D.checkSelectionStatus(),
                new Promise(function (Ge) {
                  de()
                    .then(function () {
                      return h.recalculate()
                    })
                    .then(function () {
                      let qe = P,
                        Se = V,
                        je = z.value,
                        it = ge.value
                      je.scrollToLeftOnChange && (qe = 0),
                        it.scrollToTopOnChange && (Se = 0),
                        m === Fe
                          ? Eo(R, qe, Se).then(Ge)
                          : setTimeout(function () {
                              return Eo(R, qe, Se).then(Ge)
                            })
                    })
                })
              )
            })
        )
      },
      ma = function () {
        Mr(),
          br(),
          Rr(),
          ia(),
          Pt(),
          tr(),
          de(function () {
            return setTimeout(function () {
              return h.recalculate()
            })
          })
      },
      $r = function () {
        Kr()
      },
      tn = function () {
        const i = l.scrollXLoad,
          c = f.visibleColumn,
          v = f.scrollXStore,
          g = f.fullColumnIdData,
          m = i ? c.slice(v.startIndex, v.endIndex) : c.slice(0)
        m.forEach(function (S, T) {
          const P = S.id,
            V = g[P]
          V && (V.$index = T)
        }),
          (l.tableColumn = m)
      },
      la = function () {
        const i = l.mergeList,
          c = l.mergeFooterList,
          v = f.scrollXStore,
          g = v.startIndex,
          m = v.endIndex,
          S = v.offsetSize,
          T = xt(),
          P = T.toVisibleIndex,
          V = T.visibleSize,
          Q = { startIndex: Math.max(0, P - 1 - S), endIndex: P + V + S }
        Mt(i.concat(c), Q, "col")
        const pe = Q.startIndex,
          Ee = Q.endIndex
        ;(P <= g || P >= m - V - 1) &&
          (g !== pe || m !== Ee) &&
          ((v.startIndex = pe), (v.endIndex = Ee), D.updateScrollXData()),
          h.closeTooltip()
      },
      On = function (i) {
        const c = []
        return (
          i.forEach(function (v) {
            c.push.apply(c, v.children && v.children.length ? On(v.children) : [v])
          }),
          c
        )
      },
      _r = function () {
        const i = [],
          c = [],
          v = [],
          g = l.isGroup,
          m = l.columnStore,
          S = z.value,
          T = f.collectColumn,
          P = f.tableFullColumn,
          V = f.scrollXStore,
          Q = f.fullColumnIdData
        if (g) {
          const pe = [],
            Ee = [],
            ze = []
          u.eachTree(T, function (qe, Se, je, it, Ze) {
            const rt = Hn(qe)
            Ze && Ze.fixed && (qe.fixed = Ze.fixed),
              Ze && qe.fixed !== Ze.fixed && rr("vxe.error.groupFixed"),
              rt
                ? (qe.visible = !!u.findTree(qe.children, function (dt) {
                    return Hn(dt) ? !1 : dt.visible
                  }))
                : qe.visible && (qe.fixed === "left" ? i.push(qe) : qe.fixed === "right" ? v.push(qe) : c.push(qe))
          }),
            T.forEach(function (qe) {
              qe.visible && (qe.fixed === "left" ? pe.push(qe) : qe.fixed === "right" ? ze.push(qe) : Ee.push(qe))
            }),
            (l.tableGroupColumn = pe.concat(Ee).concat(ze))
        } else
          P.forEach(function (qe) {
            qe.visible && (qe.fixed === "left" ? i.push(qe) : qe.fixed === "right" ? v.push(qe) : c.push(qe))
          })
        const We = i.concat(c).concat(v),
          Fe = !!S.enabled && S.gt > -1 && (S.gt === 0 || S.gt < P.length)
        if (
          ((l.hasFixedColumn = i.length > 0 || v.length > 0),
          Object.assign(m, { leftList: i, centerList: c, rightList: v }),
          Fe)
        ) {
          const Ge = xt().visibleSize
          ;(V.startIndex = 0), (V.endIndex = Ge), (V.visibleSize = Ge)
        }
        return (
          (We.length !== f.visibleColumn.length ||
            !f.visibleColumn.every(function (qe, Se) {
              return qe === We[Se]
            })) &&
            (h.clearMergeCells(), h.clearMergeFooterItems()),
          (l.scrollXLoad = Fe),
          We.forEach(function (qe, Se) {
            const je = qe.id,
              it = Q[je]
            it && (it._index = Se)
          }),
          (f.visibleColumn = We),
          tn(),
          h
            .updateFooter()
            .then(function () {
              return h.recalculate()
            })
            .then(function () {
              return h.updateCellAreas(), h.recalculate()
            })
        )
      },
      Xt = function (i) {
        f.collectColumn = i
        const c = On(i)
        return (
          (f.tableFullColumn = c),
          er(),
          Qt(),
          _r().then(function () {
            l.scrollXLoad && la()
          }),
          h.clearMergeCells(),
          h.clearMergeFooterItems(),
          D.handleTableData(!0),
          de().then(function () {
            return Oe && Oe.syncUpdate({ collectColumn: i, $table: R }), h.recalculate()
          })
        )
      },
      oa = function (i) {
        const c = e.treeConfig,
          v = ge.value,
          g = E.value,
          m = g.transform,
          S = i || f.tableFullData,
          T = (m || !c) && !!v.enabled && v.gt > -1 && (v.gt === 0 || v.gt < S.length)
        return (l.scrollYLoad = T), T
      },
      yr = function (i, c) {
        let v = l.treeExpandedMaps,
          g = l.treeExpandLazyLoadedMaps,
          m = l.treeNodeColumn,
          S = jt({}, v),
          T = f.fullAllDataRowIdData,
          P = f.tableFullData,
          V = E.value,
          Q = V.reserve,
          pe = V.lazy,
          Ee = V.accordion,
          ze = V.toggleMethod,
          We = V.children || V.childrenField,
          Fe = V.hasChild || V.hasChildField,
          Ge = [],
          qe = h.getColumnIndex(m),
          Se = h.getVMColumnIndex(m),
          je = ze
            ? i.filter(function (Ze) {
                return ze({ $table: R, expanded: c, column: m, columnIndex: qe, $columnIndex: Se, row: Ze })
              })
            : i
        if (Ee) {
          je = je.length ? [je[je.length - 1]] : []
          const it = u.findTree(
            P,
            function (Ze) {
              return Ze === je[0]
            },
            { children: We }
          )
          it &&
            it.items.forEach(function (Ze) {
              const rt = Ye(R, Ze)
              S[rt] && delete S[rt]
            })
        }
        return (
          c
            ? je.forEach(function (Ze) {
                const rt = Ye(R, Ze)
                if (!S[rt]) {
                  const dt = T[rt],
                    Rt = pe && Ze[Fe] && !dt.treeLoaded && !g[rt]
                  Rt ? Ge.push(Zr(Ze)) : Ze[We] && Ze[We].length && (S[rt] = Ze)
                }
              })
            : je.forEach(function (Ze) {
                const rt = Ye(R, Ze)
                S[rt] && delete S[rt]
              }),
          Q &&
            je.forEach(function (Ze) {
              return Jr(Ze, c)
            }),
          (l.treeExpandedMaps = S),
          Promise.all(Ge).then(function () {
            return h.recalculate()
          })
        )
      },
      Qr = function (i, c) {
        return yr(i, c)
          .then(function () {
            return cr(), D.handleTableData()
          })
          .then(function () {
            return h.recalculate()
          })
      },
      rn = function (i) {
        const c = l.mergeList,
          v = f.scrollYStore,
          g = v.startIndex,
          m = v.endIndex,
          S = v.visibleSize,
          T = v.offsetSize,
          P = v.rowHeight,
          V = i.currentTarget || i.target,
          Q = V.scrollTop,
          pe = Math.floor(Q / P),
          Ee = { startIndex: Math.max(0, pe - 1 - T), endIndex: pe + S + T }
        Mt(c, Ee, "row")
        const ze = Ee.startIndex,
          We = Ee.endIndex
        ;(pe <= g || pe >= m - S - 1) &&
          (g !== ze || m !== We) &&
          ((v.startIndex = ze), (v.endIndex = We), D.updateScrollYData())
      },
      ba = function (i) {
        return function (c) {
          const v = f.fullAllDataRowIdData
          if (c) {
            const g = Ye(R, c),
              m = v[g]
            if (m) return m[i]
          }
          return -1
        }
      },
      Pa = function (i) {
        return function (c) {
          const v = f.fullColumnIdData
          if (c) {
            const g = v[c.id]
            if (g) return g[i]
          }
          return -1
        }
      },
      xa = u.debounce(
        function (i) {
          rn(i)
        },
        20,
        { leading: !1, trailing: !0 }
      ),
      jr
    h = {
      dispatchEvent: function (i, c, v) {
        a(i, Object.assign({ $table: R, $grid: se, $event: v }, c))
      },
      clearAll: function () {
        return bF(R)
      },
      syncData: function () {
        return (
          Sd("vxe.error.delFunc", ["syncData", "getData"]),
          de().then(function () {
            return (l.tableData = []), a("update:data", f.tableFullData), de()
          })
        )
      },
      updateData: function () {
        const i = l.scrollXLoad,
          c = l.scrollYLoad
        return D.handleTableData(!0)
          .then(function () {
            if ((h.updateFooter(), i || c))
              return i && D.updateScrollXSpace(), c && D.updateScrollYSpace(), h.refreshScroll()
          })
          .then(function () {
            return h.updateCellAreas(), h.recalculate(!0)
          })
          .then(function () {
            setTimeout(function () {
              return R.recalculate()
            }, 50)
          })
      },
      loadData: function (i) {
        const c = f.inited,
          v = f.initStatus
        return Ir(i).then(function () {
          return (f.inited = !0), (f.initStatus = !0), v || ma(), c || $r(), h.recalculate()
        })
      },
      reloadData: function (i) {
        const c = f.inited
        return h
          .clearAll()
          .then(function () {
            return (f.inited = !0), (f.initStatus = !0), Ir(i)
          })
          .then(function () {
            return ma(), c || $r(), h.recalculate()
          })
      },
      reloadRow: function (i, c, v) {
        const g = e.keepSource,
          m = l.tableData,
          S = f.tableSourceData
        if (g) {
          const T = h.getRowIndex(i),
            P = S[T]
          if (P && i)
            if (v) {
              const V = u.get(c || i, v)
              u.set(i, v, V), u.set(P, v, V)
            } else {
              const Q = u.clone(jt({}, c), !0)
              u.destructuring(P, Object.assign(i, Q))
            }
          l.tableData = m.slice(0)
        }
        return de()
      },
      loadTreeChildren: function (i, c) {
        const v = e.keepSource,
          g = f.tableSourceData,
          m = f.fullDataRowIdData,
          S = f.fullAllDataRowIdData,
          T = f.sourceDataRowIdData,
          P = E.value,
          V = P.transform,
          Q = P.mapChildrenField,
          pe = P.children || P.childrenField,
          Ee = S[Ye(R, i)],
          ze = Ee ? Ee.level : 0
        return h.createData(c).then(function (We) {
          if (v) {
            const Fe = Ye(R, i),
              Ge = u.findTree(
                g,
                function (qe) {
                  return Fe === Ye(R, qe)
                },
                { children: pe }
              )
            Ge && (Ge.item[pe] = u.clone(We, !0)),
              We.forEach(function (qe) {
                const Se = Ye(R, qe)
                T[Se] = u.clone(qe, !0)
              })
          }
          return (
            u.eachTree(
              We,
              function (qe, Se, je, it, Ze, rt) {
                const dt = Ye(R, qe),
                  Rt = Ze || Ee.row,
                  kt = {
                    row: qe,
                    rowid: dt,
                    seq: -1,
                    index: Se,
                    _index: -1,
                    $index: -1,
                    items: je,
                    parent: Rt,
                    level: ze + rt.length
                  }
                ;(m[dt] = kt), (S[dt] = kt)
              },
              { children: pe }
            ),
            (i[pe] = We),
            V && (i[Q] = We),
            gr(),
            We
          )
        })
      },
      loadColumn: function (i) {
        const c = u.mapTree(i, function (v) {
          return Ht(nt.createColumn(R, v))
        })
        return Xt(c)
      },
      reloadColumn: function (i) {
        return h.clearAll().then(function () {
          return h.loadColumn(i)
        })
      },
      getRowNode: function (i) {
        if (i) {
          const c = f.fullAllDataRowIdData,
            v = i.getAttribute("rowid")
          if (v) {
            const g = c[v]
            if (g) return { rowid: g.rowid, item: g.row, index: g.index, items: g.items, parent: g.parent }
          }
        }
        return null
      },
      getColumnNode: function (i) {
        if (i) {
          const c = f.fullColumnIdData,
            v = i.getAttribute("colid")
          if (v) {
            const g = c[v]
            if (g) return { colid: g.colid, item: g.column, index: g.index, items: g.items, parent: g.parent }
          }
        }
        return null
      },
      getRowSeq: ba("seq"),
      getRowIndex: ba("index"),
      getVTRowIndex: ba("_index"),
      getVMRowIndex: ba("$index"),
      getColumnIndex: Pa("index"),
      getVTColumnIndex: Pa("_index"),
      getVMColumnIndex: Pa("$index"),
      createData: function (i) {
        return de().then(function () {
          return Ht(D.defineField(i))
        })
      },
      createRow: function (i) {
        const c = u.isArray(i)
        return (
          c || (i = [i || {}]),
          h.createData(i).then(function (v) {
            return c ? v : v[0]
          })
        )
      },
      revertData: function (i, c) {
        const v = e.keepSource,
          g = f.tableSourceData,
          m = f.sourceDataRowIdData
        if (!v) return de()
        let S = i
        return (
          i ? u.isArray(i) || (S = [i]) : (S = u.toArray(R.getUpdateRecords())),
          S.length &&
            S.forEach(function (T) {
              if (!h.isInsertByRow(T)) {
                const P = Ye(R, T),
                  V = m[P]
                V && T && (c ? u.set(T, c, u.clone(u.get(V, c), !0)) : u.destructuring(T, u.clone(V, !0)))
              }
            }),
          i ? de() : h.reloadData(g)
        )
      },
      clearData: function (i, c) {
        const v = f.tableFullData,
          g = f.visibleColumn
        return (
          arguments.length ? i && !u.isArray(i) && (i = [i]) : (i = v),
          c
            ? i.forEach(function (m) {
                return u.set(m, c, null)
              })
            : i.forEach(function (m) {
                g.forEach(function (S) {
                  S.field && Oa(m, S, null)
                })
              }),
          de()
        )
      },
      isInsertByRow: function (i) {
        const c = l.editStore,
          v = Ye(R, i)
        return c.insertMaps[v]
      },
      removeInsertRow: function () {
        const i = l.editStore
        return (i.insertMaps = {}), R.remove(R.getInsertRecords())
      },
      isUpdateByRow: function (i, c) {
        const v = e.keepSource,
          g = f.tableFullColumn,
          m = f.fullDataRowIdData,
          S = f.sourceDataRowIdData
        if (v) {
          const T = Ye(R, i)
          if (!m[T]) return !1
          const P = S[T]
          if (P) {
            if (arguments.length > 1) return !ot(P, i, c)
            for (let V = 0, Q = g.length; V < Q; V++) {
              const pe = g[V].field
              if (pe && !ot(P, i, pe)) return !0
            }
          }
        }
        return !1
      },
      getColumns: function (i) {
        const c = f.visibleColumn
        return u.isUndefined(i) ? c.slice(0) : c[i]
      },
      getColumnById: function (i) {
        const c = f.fullColumnIdData
        return c[i] ? c[i].column : null
      },
      getColumnByField: function (i) {
        const c = f.fullColumnFieldData
        return c[i] ? c[i].column : null
      },
      getTableColumn: function () {
        return {
          collectColumn: f.collectColumn.slice(0),
          fullColumn: f.tableFullColumn.slice(0),
          visibleColumn: f.visibleColumn.slice(0),
          tableColumn: l.tableColumn.slice(0)
        }
      },
      getData: function (i) {
        const c = e.data || f.tableSynchData
        return u.isUndefined(i) ? c.slice(0) : c[i]
      },
      getCheckboxRecords: function (i) {
        let c = e.treeConfig,
          v = f.tableFullData,
          g = f.afterFullData,
          m = f.afterTreeFullData,
          S = f.tableFullTreeData,
          T = f.fullDataRowIdData,
          P = f.afterFullRowMaps,
          V = E.value,
          Q = Ve.value,
          pe = V.transform,
          Ee = V.mapChildrenField,
          ze = Q.checkField,
          We = V.children || V.childrenField,
          Fe = [],
          Ge = i ? (pe ? S : v) : pe ? m : g
        if (ze)
          c
            ? (Fe = u.filterTree(
                Ge,
                function (Se) {
                  return u.get(Se, ze)
                },
                { children: pe ? Ee : We }
              ))
            : (Fe = Ge.filter(function (Se) {
                return u.get(Se, ze)
              }))
        else {
          const qe = l.selectCheckboxMaps
          u.each(qe, function (Se, je) {
            ;(i ? T[je] : P[je]) && Fe.push(Se)
          })
        }
        return Fe
      },
      getParentRow: function (i) {
        const c = e.treeConfig,
          v = f.fullDataRowIdData
        if (i && c) {
          let g = void 0
          if ((u.isString(i) ? (g = i) : (g = Ye(R, i)), g)) {
            const m = v[g]
            return m ? m.parent : null
          }
        }
        return null
      },
      getRowById: function (i) {
        const c = f.fullDataRowIdData,
          v = u.eqNull(i) ? "" : encodeURIComponent(i)
        return c[v] ? c[v].row : null
      },
      getRowid: function (i) {
        return Ye(R, i)
      },
      getTableData: function () {
        const i = l.tableData,
          c = l.footerTableData,
          v = f.tableFullData,
          g = f.afterFullData,
          m = f.tableFullTreeData
        return {
          fullData: e.treeConfig ? m.slice(0) : v.slice(0),
          visibleData: g.slice(0),
          tableData: i.slice(0),
          footerData: c.slice(0)
        }
      },
      setColumnFixed: function (i, c) {
        const v = Tr(R, i),
          g = ef(R, v),
          m = Ke.value,
          S = he.value,
          T = S.maxFixedSize
        return g && g.fixed !== c
          ? !g.fixed && m
            ? (et.modal && et.modal.message({ status: "error", content: C.i18n("vxe.table.maxFixedCol", [T]) }), de())
            : (u.eachTree([g], function (P) {
                P.fixed = c
              }),
              D.saveCustomFixed(),
              h.refreshColumn())
          : de()
      },
      clearColumnFixed: function (i) {
        const c = Tr(R, i),
          v = ef(R, c)
        return v && v.fixed
          ? (u.eachTree([v], function (g) {
              g.fixed = null
            }),
            D.saveCustomFixed(),
            h.refreshColumn())
          : de()
      },
      hideColumn: function (i) {
        const c = Tr(R, i)
        return c && c.visible ? ((c.visible = !1), D.handleCustom()) : de()
      },
      showColumn: function (i) {
        const c = Tr(R, i)
        return c && !c.visible ? ((c.visible = !0), D.handleCustom()) : de()
      },
      setColumnWidth: function (i, c) {
        const v = Tr(R, i)
        if (v) {
          let g = u.toInteger(c),
            m = g
          if (xi(c)) {
            const S = x.value,
              T = S ? S.$el : null,
              P = T ? T.clientWidth - 1 : 0
            m = Math.floor(g * P)
          }
          v.renderWidth = m
        }
        return de()
      },
      getColumnWidth: function (i) {
        const c = Tr(R, i)
        return c ? c.renderWidth : 0
      },
      resetColumn: function (i) {
        const c = f.collectColumn,
          v = ke.value,
          g = v.checkMethod,
          m = Object.assign({ visible: !0, resizable: i === !0, fixed: i === !0 }, i)
        return (
          u.eachTree(c, function (S) {
            m.resizable && (S.resizeWidth = 0),
              m.fixed && (S.fixed = S.defaultFixed),
              (!g || g({ column: S })) && (S.visible = S.defaultVisible)
          }),
          m.resizable && D.saveCustomResizable(!0),
          m.fixed && D.saveCustomFixed(),
          D.handleCustom()
        )
      },
      refreshColumn: function () {
        return _r()
          .then(function () {
            return h.refreshScroll()
          })
          .then(function () {
            return h.recalculate()
          })
      },
      refreshScroll: function () {
        const i = f.lastScrollLeft,
          c = f.lastScrollTop,
          v = x.value,
          g = M.value,
          m = Y.value,
          S = A.value,
          T = v ? v.$el : null,
          P = m ? m.$el : null,
          V = S ? S.$el : null,
          Q = g ? g.$el : null
        return new Promise(function (pe) {
          if (i || c)
            return Eo(R, i, c)
              .then()
              .then(function () {
                setTimeout(pe, 30)
              })
          ml(T, c), ml(P, c), ml(V, c), Ks(Q, i), setTimeout(pe, 30)
        })
      },
      recalculate: function (i) {
        return (
          ur(),
          i === !0
            ? Fr().then(function () {
                return ur(), Fr()
              })
            : Fr()
        )
      },
      openTooltip: function (i, c) {
        const v = F.value
        return v ? v.open(i, c) : de()
      },
      closeTooltip: function () {
        const i = l.tooltipStore,
          c = N.value,
          v = F.value
        return (
          i.visible && (Object.assign(i, { row: null, column: null, content: null, visible: !1 }), c && c.close()),
          v && v.close(),
          de()
        )
      },
      isAllCheckboxChecked: function () {
        return l.isAllSelected
      },
      isAllCheckboxIndeterminate: function () {
        return !l.isAllSelected && l.isIndeterminate
      },
      getCheckboxIndeterminateRecords: function (i) {
        const c = e.treeConfig,
          v = f.fullDataRowIdData,
          g = l.treeIndeterminateMaps
        if (c) {
          const m = [],
            S = []
          return (
            u.each(g, function (T, P) {
              T && (m.push(T), v[P] && S.push(T))
            }),
            i ? m : S
          )
        }
        return []
      },
      setCheckboxRow: function (i, c) {
        return _t(i, c, !0)
      },
      isCheckedByCheckboxRow: function (i) {
        const c = l.selectCheckboxMaps,
          v = Ve.value,
          g = v.checkField
        return g ? u.get(i, g) : !!c[Ye(R, i)]
      },
      isIndeterminateByCheckboxRow: function (i) {
        const c = l.treeIndeterminateMaps
        return !!c[Ye(R, i)] && !h.isCheckedByCheckboxRow(i)
      },
      toggleCheckboxRow: function (i) {
        const c = l.selectCheckboxMaps,
          v = Ve.value,
          g = v.checkField,
          m = g ? !u.get(i, g) : !c[Ye(R, i)]
        return D.handleSelectRow({ row: i }, m, !0), de()
      },
      setAllCheckboxRow: function (i) {
        return Wr(i, !0)
      },
      getRadioReserveRecord: function (i) {
        const c = e.treeConfig,
          v = f.fullDataRowIdData,
          g = f.radioReserveRow,
          m = f.afterFullData,
          S = Te.value,
          T = E.value,
          P = T.children || T.childrenField
        if (S.reserve && g) {
          const V = Ye(R, g)
          if (i) {
            if (!v[V]) return g
          } else {
            const Q = sn(R)
            if (c) {
              const pe = u.findTree(
                m,
                function (Ee) {
                  return V === u.get(Ee, Q)
                },
                { children: P }
              )
              if (pe) return g
            } else if (
              !m.some(function (Ee) {
                return V === u.get(Ee, Q)
              })
            )
              return g
          }
        }
        return null
      },
      clearRadioReserve: function () {
        return (f.radioReserveRow = null), de()
      },
      getCheckboxReserveRecords: function (i) {
        const c = e.treeConfig,
          v = f.afterFullData,
          g = f.fullDataRowIdData,
          m = f.checkboxReserveRowMap,
          S = Ve.value,
          T = E.value,
          P = T.children || T.childrenField,
          V = []
        if (S.reserve) {
          const Q = {}
          c
            ? u.eachTree(
                v,
                function (pe) {
                  Q[Ye(R, pe)] = 1
                },
                { children: P }
              )
            : v.forEach(function (pe) {
                Q[Ye(R, pe)] = 1
              }),
            u.each(m, function (pe, Ee) {
              pe && (i ? g[Ee] || V.push(pe) : Q[Ee] || V.push(pe))
            })
        }
        return V
      },
      clearCheckboxReserve: function () {
        return (f.checkboxReserveRowMap = {}), de()
      },
      toggleAllCheckboxRow: function () {
        return D.triggerCheckAllEvent(null, !l.isAllSelected), de()
      },
      clearCheckboxRow: function () {
        const i = e.treeConfig,
          c = f.tableFullData,
          v = E.value,
          g = v.children || v.childrenField,
          m = Ve.value,
          S = m.checkField,
          T = m.reserve,
          P = m.indeterminateField || m.halfField
        if (S) {
          const V = function (Q) {
            i && P && u.set(Q, P, !1), u.set(Q, S, !1)
          }
          i ? u.eachTree(c, V, { children: g }) : c.forEach(V)
        }
        return (
          T &&
            c.forEach(function (Q) {
              return xr(Q, !1)
            }),
          (l.isAllSelected = !1),
          (l.isIndeterminate = !1),
          (l.selectCheckboxMaps = {}),
          (l.treeIndeterminateMaps = {}),
          de()
        )
      },
      setCurrentRow: function (i) {
        const c = ve.value,
          v = I.value
        return (
          h.clearCurrentRow(),
          (l.currentRow = i),
          (c.isCurrent || e.highlightCurrentRow) &&
            v &&
            u.arrayEach(v.querySelectorAll('[rowid="'.concat(Ye(R, i), '"]')), function (g) {
              return pn(g, "row--current")
            }),
          de()
        )
      },
      isCheckedByRadioRow: function (i) {
        return R.eqRow(l.selectRadioRow, i)
      },
      setRadioRow: function (i) {
        return qt(i, !0)
      },
      clearCurrentRow: function () {
        const i = I.value
        return (
          (l.currentRow = null),
          (f.hoverRow = null),
          i &&
            u.arrayEach(i.querySelectorAll(".row--current"), function (c) {
              return Xa(c, "row--current")
            }),
          de()
        )
      },
      clearRadioRow: function () {
        return (l.selectRadioRow = null), de()
      },
      getCurrentRecord: function () {
        const i = ve.value
        return i.isCurrent || e.highlightCurrentRow ? l.currentRow : null
      },
      getRadioRecord: function (i) {
        const c = f.fullDataRowIdData,
          v = f.afterFullRowMaps,
          g = l.selectRadioRow
        if (g) {
          const m = Ye(R, g)
          if (i) {
            if (!c[m]) return g
          } else if (v[m]) return g
        }
        return null
      },
      getCurrentColumn: function () {
        const i = he.value
        return i.isCurrent || e.highlightCurrentColumn ? l.currentColumn : null
      },
      setCurrentColumn: function (i) {
        const c = Tr(R, i)
        return c && (h.clearCurrentColumn(), (l.currentColumn = c)), de()
      },
      clearCurrentColumn: function () {
        return (l.currentColumn = null), de()
      },
      setPendingRow: function (i, c) {
        const v = jt({}, l.pendingRowMaps),
          g = No([], l.pendingRowList, !0)
        return (
          i && !u.isArray(i) && (i = [i]),
          c
            ? i.forEach(function (m) {
                const S = Ye(R, m)
                S && !v[S] && (g.push(m), (v[S] = m))
              })
            : i.forEach(function (m) {
                const S = Ye(R, m)
                if (S && v[S]) {
                  const T = R.findRowIndexOf(g, m)
                  T > -1 && g.splice(T, 1), delete v[S]
                }
              }),
          (l.pendingRowMaps = v),
          (l.pendingRowList = g),
          de()
        )
      },
      togglePendingRow: function (i) {
        const c = jt({}, l.pendingRowMaps),
          v = No([], l.pendingRowList, !0)
        return (
          i && !u.isArray(i) && (i = [i]),
          i.forEach(function (g) {
            const m = Ye(R, g)
            if (m)
              if (c[m]) {
                const S = R.findRowIndexOf(v, g)
                S > -1 && v.splice(S, 1), delete c[m]
              } else v.push(g), (c[m] = g)
          }),
          (l.pendingRowMaps = c),
          (l.pendingRowList = v),
          de()
        )
      },
      hasPendingByRow: function (i) {
        const c = l.pendingRowMaps,
          v = Ye(R, i)
        return !!c[v]
      },
      getPendingRecords: function () {
        const i = l.pendingRowList
        return i.slice(0)
      },
      clearPendingRow: function () {
        return (l.pendingRowMaps = {}), (l.pendingRowList = []), de()
      },
      sort: function (i, c) {
        const v = Re.value,
          g = v.multiple,
          m = v.remote,
          S = v.orders
        return (
          i && u.isString(i) && (i = [{ field: i, order: c }]),
          u.isArray(i) || (i = [i]),
          i.length
            ? (g || Kt(),
              (g ? i : [i[0]]).forEach(function (T, P) {
                let V = T.field,
                  Q = T.order,
                  pe = V
                u.isString(V) && (pe = h.getColumnByField(V)),
                  pe &&
                    pe.sortable &&
                    (S.indexOf(Q) === -1 && (Q = wt(pe)),
                    pe.order !== Q && (pe.order = Q),
                    (pe.sortTime = Date.now() + P))
              }),
              m || D.handleTableData(!0),
              de().then(function () {
                return h.updateCellAreas(), Lt()
              }))
            : de()
        )
      },
      clearSort: function (i) {
        const c = Re.value
        if (i) {
          const v = Tr(R, i)
          v && (v.order = null)
        } else Kt()
        return c.remote || D.handleTableData(!0), de().then(Lt)
      },
      isSort: function (i) {
        if (i) {
          const c = Tr(R, i)
          return c ? c.sortable && !!c.order : !1
        }
        return h.getSortColumns().length > 0
      },
      getSortColumns: function () {
        const i = Re.value,
          c = i.multiple,
          v = i.chronological,
          g = [],
          m = f.tableFullColumn
        return (
          m.forEach(function (S) {
            const T = S.field,
              P = S.order
            S.sortable && P && g.push({ column: S, field: T, property: T, order: P, sortTime: S.sortTime })
          }),
          c && v && g.length > 1 ? u.orderBy(g, "sortTime") : g
        )
      },
      closeFilter: function () {
        const i = l.filterStore,
          c = i.column,
          v = i.visible
        return (
          Object.assign(i, { isAllSelected: !1, isIndeterminate: !1, options: [], visible: !1 }),
          v &&
            R.dispatchEvent(
              "filter-visible",
              { column: c, property: c.field, field: c.field, filterList: R.getCheckedFilters(), visible: !1 },
              null
            ),
          de()
        )
      },
      isActiveFilterByColumn: function (i) {
        const c = Tr(R, i)
        return c
          ? c.filters &&
              c.filters.some(function (v) {
                return v.checked
              })
          : R.getCheckedFilters().length > 0
      },
      isFilter: function (i) {
        return h.isActiveFilterByColumn(i)
      },
      isRowExpandLoaded: function (i) {
        const c = f.fullAllDataRowIdData,
          v = c[Ye(R, i)]
        return v && !!v.expandLoaded
      },
      clearRowExpandLoaded: function (i) {
        const c = l.rowExpandLazyLoadedMaps,
          v = f.fullAllDataRowIdData,
          g = we.value,
          m = g.lazy,
          S = Ye(R, i),
          T = v[S]
        return m && T && ((T.expandLoaded = !1), delete c[S]), de()
      },
      reloadRowExpand: function (i) {
        const c = l.rowExpandLazyLoadedMaps,
          v = we.value,
          g = v.lazy,
          m = Ye(R, i)
        return (
          g &&
            !c[m] &&
            h.clearRowExpandLoaded(i).then(function () {
              return sr(i)
            }),
          de()
        )
      },
      reloadExpandContent: function (i) {
        return h.reloadRowExpand(i)
      },
      toggleRowExpand: function (i) {
        return h.setRowExpand(i, !h.isRowExpandByRow(i))
      },
      setAllRowExpand: function (i) {
        let c = E.value,
          v = f.tableFullData,
          g = f.tableFullTreeData,
          m = c.children || c.childrenField,
          S = []
        return (
          e.treeConfig
            ? u.eachTree(
                g,
                function (T) {
                  S.push(T)
                },
                { children: m }
              )
            : (S = v),
          h.setRowExpand(S, i)
        )
      },
      setRowExpand: function (i, c) {
        let v = l.rowExpandedMaps,
          g = l.rowExpandLazyLoadedMaps,
          m = l.expandColumn,
          S = f.fullAllDataRowIdData,
          T = jt({}, v),
          P = we.value,
          V = P.reserve,
          Q = P.lazy,
          pe = P.accordion,
          Ee = P.toggleMethod,
          ze = [],
          We = h.getColumnIndex(m),
          Fe = h.getVMColumnIndex(m)
        if (i) {
          u.isArray(i) || (i = [i]), pe && ((T = {}), (i = i.slice(i.length - 1, i.length)))
          const Ge = Ee
            ? i.filter(function (qe) {
                return Ee({
                  $table: R,
                  expanded: c,
                  column: m,
                  columnIndex: We,
                  $columnIndex: Fe,
                  row: qe,
                  rowIndex: h.getRowIndex(qe),
                  $rowIndex: h.getVMRowIndex(qe)
                })
              })
            : i
          c
            ? Ge.forEach(function (qe) {
                const Se = Ye(R, qe)
                if (!T[Se]) {
                  const je = S[Se],
                    it = Q && !je.expandLoaded && !g[Se]
                  it ? ze.push(sr(qe)) : (T[Se] = qe)
                }
              })
            : Ge.forEach(function (qe) {
                const Se = Ye(R, qe)
                T[Se] && delete T[Se]
              }),
            V &&
              Ge.forEach(function (qe) {
                return Nt(qe, c)
              })
        }
        return (
          (l.rowExpandedMaps = T),
          Promise.all(ze).then(function () {
            return h.recalculate()
          })
        )
      },
      isRowExpandByRow: function (i) {
        const c = l.rowExpandedMaps,
          v = Ye(R, i)
        return !!c[v]
      },
      isExpandByRow: function (i) {
        return h.isRowExpandByRow(i)
      },
      clearRowExpand: function () {
        const i = f.tableFullData,
          c = we.value,
          v = c.reserve,
          g = h.getRowExpandRecords()
        return (
          (l.rowExpandedMaps = {}),
          v &&
            i.forEach(function (m) {
              return Nt(m, !1)
            }),
          de().then(function () {
            g.length && h.recalculate()
          })
        )
      },
      clearRowExpandReserve: function () {
        return (f.rowExpandedReserveRowMap = {}), de()
      },
      getRowExpandRecords: function () {
        const i = []
        return (
          u.each(l.rowExpandedMaps, function (c) {
            c && i.push(c)
          }),
          i
        )
      },
      getTreeExpandRecords: function () {
        const i = []
        return (
          u.each(l.treeExpandedMaps, function (c) {
            c && i.push(c)
          }),
          i
        )
      },
      isTreeExpandLoaded: function (i) {
        const c = f.fullAllDataRowIdData,
          v = c[Ye(R, i)]
        return v && !!v.treeLoaded
      },
      clearTreeExpandLoaded: function (i) {
        const c = l.treeExpandedMaps,
          v = f.fullAllDataRowIdData,
          g = E.value,
          m = g.transform,
          S = g.lazy,
          T = Ye(R, i),
          P = v[T]
        return S && P && ((P.treeLoaded = !1), c[T] && delete c[T]), m ? (cr(), D.handleTableData()) : de()
      },
      reloadTreeExpand: function (i) {
        const c = l.treeExpandLazyLoadedMaps,
          v = E.value,
          g = v.hasChild || v.hasChildField,
          m = v.transform,
          S = v.lazy,
          T = Ye(R, i)
        return (
          S &&
            i[g] &&
            !c[T] &&
            h
              .clearTreeExpandLoaded(i)
              .then(function () {
                return Zr(i)
              })
              .then(function () {
                if (m) return cr(), D.handleTableData()
              })
              .then(function () {
                return h.recalculate()
              }),
          de()
        )
      },
      reloadTreeChilds: function (i) {
        return h.reloadTreeExpand(i)
      },
      toggleTreeExpand: function (i) {
        return h.setTreeExpand(i, !h.isTreeExpandByRow(i))
      },
      setAllTreeExpand: function (i) {
        const c = f.tableFullData,
          v = E.value,
          g = v.transform,
          m = v.lazy,
          S = v.children || v.childrenField,
          T = []
        return (
          u.eachTree(
            c,
            function (P) {
              const V = P[S]
              ;(m || (V && V.length)) && T.push(P)
            },
            { children: S }
          ),
          h.setTreeExpand(T, i).then(function () {
            if (g) return cr(), h.recalculate()
          })
        )
      },
      setTreeExpand: function (i, c) {
        const v = E.value,
          g = v.transform
        return i && (u.isArray(i) || (i = [i]), i.length) ? (g ? Qr(i, c) : yr(i, c)) : de()
      },
      isTreeExpandByRow: function (i) {
        const c = l.treeExpandedMaps
        return !!c[Ye(R, i)]
      },
      clearTreeExpand: function () {
        const i = f.tableFullTreeData,
          c = E.value,
          v = c.children || c.childrenField,
          g = c.transform,
          m = c.reserve,
          S = h.getTreeExpandRecords()
        return (
          (l.treeExpandedMaps = {}),
          m &&
            u.eachTree(
              i,
              function (T) {
                return Jr(T, !1)
              },
              { children: v }
            ),
          D.handleTableData()
            .then(function () {
              if (g) return cr(), D.handleTableData()
            })
            .then(function () {
              if (S.length) return h.recalculate()
            })
        )
      },
      clearTreeExpandReserve: function () {
        return (f.treeExpandedReserveRowMap = {}), de()
      },
      getScroll: function () {
        const i = l.scrollXLoad,
          c = l.scrollYLoad,
          v = x.value,
          g = v.$el
        return { virtualX: i, virtualY: c, scrollTop: g.scrollTop, scrollLeft: g.scrollLeft }
      },
      scrollTo: function (i, c) {
        const v = x.value,
          g = M.value,
          m = A.value,
          S = v ? v.$el : null,
          T = m ? m.$el : null,
          P = g ? g.$el : null
        return (
          u.isNumber(i) && Ks(P || S, i),
          u.isNumber(c) && ml(T || S, c),
          l.scrollXLoad || l.scrollYLoad
            ? new Promise(function (V) {
                setTimeout(function () {
                  de(function () {
                    V()
                  })
                }, 50)
              })
            : de()
        )
      },
      scrollToRow: function (i, c) {
        const v = []
        return (
          i && (e.treeConfig ? v.push(D.scrollToTreeRow(i)) : v.push(tf(R, i))),
          c && v.push(h.scrollToColumn(c)),
          Promise.all(v)
        )
      },
      scrollToColumn: function (i) {
        const c = f.fullColumnIdData,
          v = Tr(R, i)
        return v && c[v.id] ? xF(R, v) : de()
      },
      clearScroll: function () {
        const i = f.scrollXStore,
          c = f.scrollYStore,
          v = x.value,
          g = M.value,
          m = A.value,
          S = v ? v.$el : null,
          T = m ? m.$el : null,
          P = g ? g.$el : null
        return (
          T && (Ml(T), (T.scrollTop = 0)),
          P && (P.scrollLeft = 0),
          S && (Ml(S), (S.scrollTop = 0), (S.scrollLeft = 0)),
          (i.startIndex = 0),
          (c.startIndex = 0),
          de()
        )
      },
      updateFooter: function () {
        const i = e.showFooter,
          c = e.footerMethod,
          v = f.visibleColumn,
          g = f.afterFullData
        return i && c && (l.footerTableData = v.length ? c({ columns: v, data: g, $table: R, $grid: se }) : []), de()
      },
      updateStatus: function (i, c) {
        const v = !u.isUndefined(c)
        return de().then(function () {
          const g = e.editRules,
            m = l.validStore,
            S = x.value
          if (i && S && g) {
            const T = i.row,
              P = i.column,
              V = "change"
            if (R.hasCellRules && R.hasCellRules(V, T, P)) {
              const Q = D.getCell(T, P)
              if (Q)
                return R.validCellRules(V, T, P, c)
                  .then(function () {
                    v && m.visible && Oa(T, P, c), R.clearValidate(T, P)
                  })
                  .catch(function (pe) {
                    const Ee = pe.rule
                    v && Oa(T, P, c), R.showValidTooltip({ rule: Ee, row: T, column: P, cell: Q })
                  })
            }
          }
        })
      },
      setMergeCells: function (i) {
        return (
          e.spanMethod && rr("vxe.error.errConflicts", ["merge-cells", "span-method"]),
          St(i, l.mergeList, f.afterFullData),
          de().then(function () {
            return h.updateCellAreas()
          })
        )
      },
      removeMergeCells: function (i) {
        e.spanMethod && rr("vxe.error.errConflicts", ["merge-cells", "span-method"])
        const c = Gt(i, l.mergeList, f.afterFullData)
        return de().then(function () {
          return h.updateCellAreas(), c
        })
      },
      getMergeCells: function () {
        return l.mergeList.slice(0)
      },
      clearMergeCells: function () {
        return (l.mergeList = []), de()
      },
      setMergeFooterItems: function (i) {
        return (
          e.footerSpanMethod && rr("vxe.error.errConflicts", ["merge-footer-items", "footer-span-method"]),
          St(i, l.mergeFooterList),
          de().then(function () {
            return h.updateCellAreas()
          })
        )
      },
      removeMergeFooterItems: function (i) {
        e.footerSpanMethod && rr("vxe.error.errConflicts", ["merge-footer-items", "footer-span-method"])
        const c = Gt(i, l.mergeFooterList)
        return de().then(function () {
          return h.updateCellAreas(), c
        })
      },
      getMergeFooterItems: function () {
        return l.mergeFooterList.slice(0)
      },
      clearMergeFooterItems: function () {
        return (l.mergeFooterList = []), de()
      },
      updateCellAreas: function () {
        const i = e.mouseConfig,
          c = fe.value
        return i && c.area && R.handleUpdateCellAreas ? R.handleUpdateCellAreas() : de()
      },
      focus: function () {
        return (f.isActivated = !0), de()
      },
      blur: function () {
        return (f.isActivated = !1), de()
      },
      connect: function (i) {
        return (
          i ? ((Oe = i), Oe.syncUpdate({ collectColumn: f.collectColumn, $table: R })) : rr("vxe.error.barUnableLink"),
          de()
        )
      }
    }
    const Tn = function (i) {
        const c = l.editStore,
          v = l.ctxMenuStore,
          g = l.filterStore,
          m = e.mouseConfig,
          S = e.editRules,
          T = I.value,
          P = Ae.value,
          V = Ie.value,
          Q = c.actived,
          pe = q.value,
          Ee = $.value,
          ze = B.value
        if (
          (Ee &&
            (yt(i, T, "vxe-cell--filter").flag ||
              yt(i, Ee.$el).flag ||
              yt(i, document.body, "vxe-table--ignore-clear").flag ||
              D.preventEvent(i, "event.clearFilter", g.args, h.closeFilter)),
          Q.row)
        ) {
          if (P.autoClear !== !1) {
            const We = Q.args.cell
            ;(!We || !yt(i, We).flag) &&
              ((pe && yt(i, pe.$el).flag) ||
                ((!f._lastCallTime || f._lastCallTime + 50 < Date.now()) &&
                  (yt(i, document.body, "vxe-table--ignore-clear").flag ||
                    D.preventEvent(i, "event.clearActived", Q.args, function () {
                      let Ge
                      if (P.mode === "row") {
                        const qe = yt(i, T, "vxe-body--row"),
                          Se = qe.flag ? h.getRowNode(qe.targetElem) : null
                        Ge = Se ? !R.eqRow(Se.item, Q.args.row) : !1
                      } else Ge = !yt(i, T, "col--edit").flag
                      if (
                        (Ge || (Ge = yt(i, T, "vxe-header--row").flag),
                        Ge || (Ge = yt(i, T, "vxe-footer--row").flag),
                        !Ge && e.height && !l.overflowY)
                      ) {
                        const je = i.target
                        Ma(je, "vxe-table--body-wrapper") && (Ge = i.offsetY < je.clientHeight)
                      }
                      ;(Ge || !yt(i, T).flag) &&
                        setTimeout(function () {
                          return R.clearEdit(i)
                        })
                    }))))
          }
        } else
          m &&
            !yt(i, T).flag &&
            !(se && yt(i, se.getRefMaps().refElem.value).flag) &&
            !(ze && yt(i, ze.getRefMaps().refElem.value).flag) &&
            !(Oe && yt(i, Oe.getRefMaps().refElem.value).flag) &&
            (R.clearSelected(),
            R.clearCellAreas &&
              (yt(i, document.body, "vxe-table--ignore-areas-clear").flag ||
                D.preventEvent(i, "event.clearAreas", {}, function () {
                  R.clearCellAreas(), R.clearCopyCellArea()
                })))
        R.closeMenu && v.visible && ze && !yt(i, ze.getRefMaps().refElem.value).flag && R.closeMenu()
        const Fe = yt(i, se ? se.getRefMaps().refElem.value : T).flag
        !Fe && S && V.autoClear && (l.validErrorMaps = {}), (f.isActivated = Fe)
      },
      Dn = function () {
        h.closeFilter(), R.closeMenu && R.closeMenu()
      },
      lr = function () {
        h.closeTooltip(), R.closeMenu && R.closeMenu()
      },
      Zl = function (i) {
        const c = e.mouseConfig,
          v = e.keyboardConfig,
          g = l.filterStore,
          m = l.ctxMenuStore,
          S = l.editStore,
          T = fe.value,
          P = G.value,
          V = S.actived,
          Q = ht(i, ct.ESCAPE)
        Q &&
          D.preventEvent(i, "event.keydown", null, function () {
            if ((h.dispatchEvent("keydown-start", {}, i), v && c && T.area && R.handleKeyboardEvent))
              R.handleKeyboardEvent(i)
            else if (
              (V.row || g.visible || m.visible) &&
              (i.stopPropagation(), R.closeMenu && R.closeMenu(), h.closeFilter(), v && P.isEsc && V.row)
            ) {
              const pe = V.args
              R.clearEdit(i),
                T.selected &&
                  de(function () {
                    return R.handleSelected(pe, i)
                  })
            }
            h.dispatchEvent("keydown", {}, i), h.dispatchEvent("keydown-end", {}, i)
          })
      },
      Jl = function (i) {
        f.isActivated &&
          D.preventEvent(i, "event.keydown", null, function () {
            let c = e.mouseConfig,
              v = e.keyboardConfig,
              g = e.treeConfig,
              m = e.editConfig,
              S = e.highlightCurrentRow,
              T = l.ctxMenuStore,
              P = l.editStore,
              V = l.currentRow,
              Q = be.value,
              pe = le.value,
              Ee = G.value,
              ze = fe.value,
              We = Ae.value,
              Fe = E.value,
              Ge = Le.value,
              qe = ve.value,
              Se = P.selected,
              je = P.actived,
              it = Fe.children || Fe.childrenField,
              Ze = i.keyCode,
              rt = ht(i, ct.ESCAPE),
              dt = ht(i, ct.BACKSPACE),
              Rt = ht(i, ct.TAB),
              kt = ht(i, ct.ENTER),
              At = ht(i, ct.SPACEBAR),
              st = ht(i, ct.ARROW_LEFT),
              Ct = ht(i, ct.ARROW_UP),
              $t = ht(i, ct.ARROW_RIGHT),
              bt = ht(i, ct.ARROW_DOWN),
              Et = ht(i, ct.DELETE),
              wr = ht(i, ct.F2),
              an = ht(i, ct.CONTEXT_MENU),
              ii = i.metaKey,
              nn = i.ctrlKey,
              Ca = i.shiftKey,
              ln = i.altKey,
              on = st || Ct || $t || bt,
              Lr = Q && T.visible && (kt || At || on),
              un = pt(m) && je.column && je.row,
              Er
            if (Lr)
              i.preventDefault(),
                T.showChild && Hn(T.selected)
                  ? R.moveCtxMenu(i, T, "selectChild", st, !1, T.selected.children)
                  : R.moveCtxMenu(i, T, "selected", $t, !0, Ge)
            else if (v && c && ze.area && R.handleKeyboardEvent) R.handleKeyboardEvent(i)
            else if (rt) {
              if ((R.closeMenu && R.closeMenu(), h.closeFilter(), v && Ee.isEsc && je.row)) {
                const ro = je.args
                R.clearEdit(i),
                  ze.selected &&
                    de(function () {
                      return R.handleSelected(ro, i)
                    })
              }
            } else if (
              At &&
              v &&
              Ee.isChecked &&
              Se.row &&
              Se.column &&
              (Se.column.type === "checkbox" || Se.column.type === "radio")
            )
              i.preventDefault(),
                Se.column.type === "checkbox"
                  ? D.handleToggleCheckRowEvent(i, Se.args)
                  : D.triggerRadioRowEvent(i, Se.args)
            else if (wr && pt(m)) un || (Se.row && Se.column && (i.preventDefault(), R.handleActived(Se.args, i)))
            else if (an)
              (f._keyCtx = Se.row && Se.column && pe.length),
                clearTimeout(jr),
                (jr = setTimeout(function () {
                  f._keyCtx = !1
                }, 1e3))
            else if (kt && !ln && v && Ee.isEnter && (Se.row || je.row || (g && (qe.isCurrent || S) && V))) {
              if (nn)
                je.row &&
                  ((Er = je.args),
                  R.clearEdit(i),
                  ze.selected &&
                    de(function () {
                      return R.handleSelected(Er, i)
                    }))
              else if (Se.row || je.row) {
                const $a = Se.row ? Se.args : je.args
                Ca
                  ? Ee.enterToTab
                    ? R.moveTabSelected($a, Ca, i)
                    : R.moveSelected($a, st, !0, $t, !1, i)
                  : Ee.enterToTab
                    ? R.moveTabSelected($a, Ca, i)
                    : R.moveSelected($a, st, !1, $t, !0, i)
              } else if (g && (qe.isCurrent || S) && V) {
                const ya = V[it]
                if (ya && ya.length) {
                  i.preventDefault()
                  const ua = ya[0]
                  ;(Er = { $table: R, row: ua, rowIndex: h.getRowIndex(ua), $rowIndex: h.getVMRowIndex(ua) }),
                    h
                      .setTreeExpand(V, !0)
                      .then(function () {
                        return h.scrollToRow(ua)
                      })
                      .then(function () {
                        return D.triggerCurrentRowEvent(i, Er)
                      })
                }
              }
            } else if (on && v && Ee.isArrow)
              un ||
                (Se.row && Se.column
                  ? R.moveSelected(Se.args, st, Ct, $t, bt, i)
                  : (Ct || bt) && (qe.isCurrent || S) && R.moveCurrentRow(Ct, bt, i))
            else if (Rt && v && Ee.isTab)
              Se.row || Se.column
                ? R.moveTabSelected(Se.args, Ca, i)
                : (je.row || je.column) && R.moveTabSelected(je.args, Ca, i)
            else if (v && pt(m) && (Et || (g && (qe.isCurrent || S) && V ? dt && Ee.isArrow : dt))) {
              if (!un) {
                const Sr = Ee.delMethod,
                  li = Ee.backMethod
                if (Ee.isDel && (Se.row || Se.column))
                  Sr
                    ? Sr({
                        row: Se.row,
                        rowIndex: h.getRowIndex(Se.row),
                        column: Se.column,
                        columnIndex: h.getColumnIndex(Se.column),
                        $table: R
                      })
                    : Oa(Se.row, Se.column, null),
                    dt
                      ? li
                        ? li({
                            row: Se.row,
                            rowIndex: h.getRowIndex(Se.row),
                            column: Se.column,
                            columnIndex: h.getColumnIndex(Se.column),
                            $table: R
                          })
                        : R.handleActived(Se.args, i)
                      : Et && h.updateFooter()
                else if (dt && Ee.isArrow && g && (qe.isCurrent || S) && V) {
                  const fr = u.findTree(
                    f.afterFullData,
                    function (Or) {
                      return Or === V
                    },
                    { children: it }
                  ).parent
                  fr &&
                    (i.preventDefault(),
                    (Er = { $table: R, row: fr, rowIndex: h.getRowIndex(fr), $rowIndex: h.getVMRowIndex(fr) }),
                    h
                      .setTreeExpand(fr, !1)
                      .then(function () {
                        return h.scrollToRow(fr)
                      })
                      .then(function () {
                        return D.triggerCurrentRowEvent(i, Er)
                      }))
                }
              }
            } else if (
              v &&
              pt(m) &&
              Ee.isEdit &&
              !nn &&
              !ii &&
              (At ||
                (Ze >= 48 && Ze <= 57) ||
                (Ze >= 65 && Ze <= 90) ||
                (Ze >= 96 && Ze <= 111) ||
                (Ze >= 186 && Ze <= 192) ||
                (Ze >= 219 && Ze <= 222))
            ) {
              const oi = Ee.editMethod
              if (Se.column && Se.row && pt(Se.column.editRender)) {
                const ca = We.beforeEditMethod || We.activeMethod
                ;(!ca || ca(jt(jt({}, Se.args), { $table: R, $grid: se }))) &&
                  (oi
                    ? oi({
                        row: Se.row,
                        rowIndex: h.getRowIndex(Se.row),
                        column: Se.column,
                        columnIndex: h.getColumnIndex(Se.column),
                        $table: R,
                        $grid: se
                      })
                    : (Oa(Se.row, Se.column, null), R.handleActived(Se.args, i)))
              }
            }
            h.dispatchEvent("keydown", {}, i)
          })
      },
      Ql = function (i) {
        const c = e.keyboardConfig,
          v = e.mouseConfig,
          g = l.editStore,
          m = l.filterStore,
          S = f.isActivated,
          T = fe.value,
          P = G.value,
          V = g.actived
        S &&
          !m.visible &&
          (V.row ||
            V.column ||
            (c && P.isClip && v && T.area && R.handlePasteCellAreaEvent && R.handlePasteCellAreaEvent(i)),
          h.dispatchEvent("paste", {}, i))
      },
      il = function (i) {
        const c = e.keyboardConfig,
          v = e.mouseConfig,
          g = l.editStore,
          m = l.filterStore,
          S = f.isActivated,
          T = fe.value,
          P = G.value,
          V = g.actived
        S &&
          !m.visible &&
          (V.row ||
            V.column ||
            (c && P.isClip && v && T.area && R.handleCopyCellAreaEvent && R.handleCopyCellAreaEvent(i)),
          h.dispatchEvent("copy", {}, i))
      },
      ll = function (i) {
        const c = e.keyboardConfig,
          v = e.mouseConfig,
          g = l.editStore,
          m = l.filterStore,
          S = f.isActivated,
          T = fe.value,
          P = G.value,
          V = g.actived
        S &&
          !m.visible &&
          (V.row ||
            V.column ||
            (c && P.isClip && v && T.area && R.handleCutCellAreaEvent && R.handleCutCellAreaEvent(i)),
          h.dispatchEvent("cut", {}, i))
      },
      eo = function () {
        R.closeMenu && R.closeMenu(), h.updateCellAreas(), h.recalculate(!0)
      },
      Mn = function (i) {
        const c = N.value
        clearTimeout(f.tooltipTimeout), i ? h.closeTooltip() : c && c.setActived(!0)
      },
      ei = function (i, c, v, g, m) {
        m.cell = c
        const S = l.tooltipStore,
          T = W.value,
          P = m.column,
          V = m.row,
          Q = T.showAll,
          pe = T.contentMethod,
          Ee = pe ? pe(m) : null,
          ze = pe && !u.eqNull(Ee),
          We = ze ? Ee : u.toString(P.type === "html" ? v.innerText : v.textContent).trim(),
          Fe = v.scrollWidth > v.clientWidth
        return (
          We &&
            (Q || ze || Fe) &&
            (Object.assign(S, { row: V, column: P, visible: !0, currOpts: null }),
            de(function () {
              const Ge = N.value
              Ge && Ge.open(Fe ? v : g || v, Jt(We))
            })),
          de()
        )
      }
    ;(D = {
      getSetupOptions: function () {
        return C
      },
      updateAfterDataIndex: gr,
      callSlot: function (i, c) {
        if (i) {
          if (se) return se.callSlot(i, c)
          if (u.isFunction(i)) return Vt(i(c))
        }
        return []
      },
      getParentElem: function () {
        const i = I.value
        if (se) {
          const c = se.getRefMaps().refElem.value
          return c ? c.parentNode : null
        }
        return i ? i.parentNode : null
      },
      getParentHeight: function () {
        const i = e.height,
          c = I.value
        if (c) {
          const v = c.parentNode,
            g = i === "auto" ? Wo(v) : 0
          return Math.floor(se ? se.getParentHeight() : u.toNumber(getComputedStyle(v).height) - g)
        }
        return 0
      },
      getExcludeHeight: function () {
        return se ? se.getExcludeHeight() : 0
      },
      defineField: function (i) {
        const c = e.treeConfig,
          v = we.value,
          g = E.value,
          m = Te.value,
          S = Ve.value,
          T = g.children || g.childrenField,
          P = sn(R)
        return (
          u.isArray(i) || (i = [i]),
          i.map(function (V) {
            f.tableFullColumn.forEach(function (pe) {
              const Ee = pe.field,
                ze = pe.editRender
              if (Ee && !u.has(V, Ee) && !V[Ee]) {
                let We = null
                if (ze) {
                  const Fe = ze.defaultValue
                  u.isFunction(Fe) ? (We = Fe({ column: pe })) : u.isUndefined(Fe) || (We = Fe)
                }
                u.set(V, Ee, We)
              }
            })
            const Q = [m.labelField, S.checkField, S.labelField, v.labelField]
            return (
              Q.forEach(function (pe) {
                pe && ea(u.get(V, pe)) && u.set(V, pe, null)
              }),
              c && g.lazy && u.isUndefined(V[T]) && (V[T] = null),
              ea(u.get(V, P)) && u.set(V, P, So()),
              V
            )
          })
        )
      },
      handleTableData: function (i) {
        let c = l.scrollYLoad,
          v = f.scrollYStore,
          g = f.fullDataRowIdData,
          m = f.afterFullData
        i && (Xr(), (m = cr()))
        const S = c ? m.slice(v.startIndex, v.endIndex) : m.slice(0)
        return (
          S.forEach(function (T, P) {
            const V = Ye(R, T),
              Q = g[V]
            Q && (Q.$index = P)
          }),
          (l.tableData = S),
          de()
        )
      },
      cacheRowMap: function (i) {
        let c = e.treeConfig,
          v = E.value,
          g = f.fullDataRowIdData,
          m = f.fullAllDataRowIdData,
          S = f.tableFullData,
          T = f.tableFullTreeData,
          P = v.children || v.childrenField,
          V = v.hasChild || v.hasChildField,
          Q = sn(R),
          pe = c && v.lazy,
          Ee = function (ze, We, Fe, Ge, qe, Se) {
            let je = Ye(R, ze),
              it = c && Ge ? pF(Ge) : We + 1,
              Ze = Se ? Se.length - 1 : 0
            ea(je) && ((je = So()), u.set(ze, Q, je)), pe && ze[V] && u.isUndefined(ze[P]) && (ze[P] = null)
            const rt = {
              row: ze,
              rowid: je,
              seq: it,
              index: c && qe ? -1 : We,
              _index: -1,
              $index: -1,
              items: Fe,
              parent: qe,
              level: Ze
            }
            i && (g[je] = rt), (m[je] = rt)
          }
        i && (g = f.fullDataRowIdData = {}),
          (m = f.fullAllDataRowIdData = {}),
          c ? u.eachTree(T, Ee, { children: P }) : S.forEach(Ee)
      },
      cacheSourceMap: function (i) {
        let c = e.treeConfig,
          v = E.value,
          g = f.sourceDataRowIdData,
          m = u.clone(i, !0),
          S = sn(R)
        g = f.sourceDataRowIdData = {}
        const T = function (V) {
          let Q = Ye(R, V)
          ea(Q) && ((Q = So()), u.set(V, S, Q)), (g[Q] = V)
        }
        if (c) {
          const P = v.children || v.childrenField
          u.eachTree(m, T, { children: v.transform ? v.mapChildrenField : P })
        } else m.forEach(T)
        f.tableSourceData = m
      },
      analyColumnWidth: function () {
        const i = f.tableFullColumn,
          c = he.value,
          v = c.width,
          g = c.minWidth,
          m = [],
          S = [],
          T = [],
          P = [],
          V = [],
          Q = []
        i.forEach(function (pe) {
          v && !pe.width && (pe.width = v),
            g && !pe.minWidth && (pe.minWidth = g),
            pe.visible &&
              (pe.resizeWidth
                ? m.push(pe)
                : zo(pe.width)
                  ? S.push(pe)
                  : xi(pe.width)
                    ? P.push(pe)
                    : zo(pe.minWidth)
                      ? T.push(pe)
                      : xi(pe.minWidth)
                        ? V.push(pe)
                        : Q.push(pe))
        }),
          Object.assign(l.columnStore, {
            resizeList: m,
            pxList: S,
            pxMinList: T,
            scaleList: P,
            scaleMinList: V,
            autoList: Q
          })
      },
      saveCustomResizable: function (i) {
        const c = e.id,
          v = e.customConfig,
          g = ke.value,
          m = f.collectColumn,
          S = g.storage,
          T = S === !0 || (S && S.resizable)
        if (v && T) {
          let P = mt(Po),
            V
          if (!c) {
            rr("vxe.error.reqProp", ["id"])
            return
          }
          i ||
            ((V = u.isPlainObject(P[c]) ? P[c] : {}),
            u.eachTree(m, function (Q) {
              if (Q.resizeWidth) {
                const pe = Q.getKey()
                pe && (V[pe] = Q.renderWidth)
              }
            })),
            (P[c] = u.isEmpty(V) ? void 0 : V),
            localStorage.setItem(Po, u.toJSONString(P))
        }
      },
      saveCustomFixed: function () {
        const i = e.id,
          c = e.customConfig,
          v = f.collectColumn,
          g = ke.value,
          m = g.storage,
          S = m === !0 || (m && m.fixed)
        if (c && S) {
          const T = mt(Lo),
            P = []
          if (!i) {
            rr("vxe.error.reqProp", ["id"])
            return
          }
          u.eachTree(v, function (V) {
            if (V.fixed && V.fixed !== V.defaultFixed) {
              const Q = V.getKey()
              Q && P.push("".concat(Q, "|").concat(V.fixed))
            }
          }),
            (T[i] = P.join(",") || void 0),
            localStorage.setItem(Lo, u.toJSONString(T))
        }
      },
      saveCustomVisible: function () {
        const i = e.id,
          c = e.customConfig,
          v = f.collectColumn,
          g = ke.value,
          m = g.checkMethod,
          S = g.storage,
          T = S === !0 || (S && S.visible)
        if (c && T) {
          const P = mt($o),
            V = [],
            Q = []
          if (!i) {
            rr("vxe.error.reqProp", ["id"])
            return
          }
          u.eachTree(v, function (pe) {
            if (!m || m({ column: pe })) {
              if (!pe.visible && pe.defaultVisible) {
                var Ee = pe.getKey()
                Ee && V.push(Ee)
              } else if (pe.visible && !pe.defaultVisible) {
                var Ee = pe.getKey()
                Ee && Q.push(Ee)
              }
            }
          }),
            (P[i] = [V.join(",")].concat(Q.length ? [Q.join(",")] : []).join("|") || void 0),
            localStorage.setItem($o, u.toJSONString(P))
        }
      },
      handleCustom: function () {
        return D.saveCustomVisible(), D.analyColumnWidth(), h.refreshColumn()
      },
      handleUpdateDataQueue: function () {
        l.upDataFlag++
      },
      handleRefreshColumnQueue: function () {
        l.reColumnFlag++
      },
      preventEvent: function (i, c, v, g, m) {
        let S = et.interceptor.get(c),
          T
        return (
          S.some(function (P) {
            return P(Object.assign({ $grid: se, $table: R, $event: i }, v)) === !1
          }) ||
            (g && (T = g())),
          m && m(),
          T
        )
      },
      checkSelectionStatus: function () {
        const i = e.treeConfig,
          c = l.selectCheckboxMaps,
          v = l.treeIndeterminateMaps,
          g = f.afterFullData,
          m = Ve.value,
          S = m.checkField,
          T = m.checkStrictly,
          P = m.checkMethod,
          V = m.indeterminateField || m.halfField
        if (!T) {
          let Q = [],
            pe = [],
            Ee = !1,
            ze = !1,
            We = !1
          S
            ? ((Ee = g.every(
                P
                  ? function (Fe) {
                      return P({ row: Fe }) ? (u.get(Fe, S) ? (pe.push(Fe), !0) : !1) : (Q.push(Fe), !0)
                    }
                  : function (Fe) {
                      return u.get(Fe, S)
                    }
              )),
              (ze = Ee && g.length !== Q.length),
              i
                ? V
                  ? (We =
                      !ze &&
                      g.some(function (Fe) {
                        return u.get(Fe, S) || u.get(Fe, V) || !!v[Ye(R, Fe)]
                      }))
                  : (We =
                      !ze &&
                      g.some(function (Fe) {
                        return u.get(Fe, S) || !!v[Ye(R, Fe)]
                      }))
                : V
                  ? (We =
                      !ze &&
                      g.some(function (Fe) {
                        return u.get(Fe, S) || u.get(Fe, V)
                      }))
                  : (We =
                      !ze &&
                      g.some(function (Fe) {
                        return u.get(Fe, S)
                      })))
            : ((Ee = g.every(
                P
                  ? function (Fe) {
                      return P({ row: Fe }) ? (c[Ye(R, Fe)] ? (pe.push(Fe), !0) : !1) : (Q.push(Fe), !0)
                    }
                  : function (Fe) {
                      return c[Ye(R, Fe)]
                    }
              )),
              (ze = Ee && g.length !== Q.length),
              i
                ? (We =
                    !ze &&
                    g.some(function (Fe) {
                      const Ge = Ye(R, Fe)
                      return v[Ge] || c[Ge]
                    }))
                : (We =
                    !ze &&
                    g.some(function (Fe) {
                      return c[Ye(R, Fe)]
                    }))),
            (l.isAllSelected = ze),
            (l.isIndeterminate = We)
        }
      },
      handleSelectRow: function (i, c, v) {
        const g = i.row,
          m = e.treeConfig,
          S = l.selectCheckboxMaps,
          T = l.treeIndeterminateMaps,
          P = jt({}, S),
          V = f.afterFullData,
          Q = E.value,
          pe = Q.children || Q.childrenField,
          Ee = Ve.value,
          ze = Ee.checkField,
          We = Ee.checkStrictly,
          Fe = Ee.checkMethod,
          Ge = Ee.indeterminateField || Ee.halfField,
          qe = Ye(R, g)
        if (ze)
          if (m && !We) {
            c === -1
              ? (T[qe] || (Ge && u.set(g, Ge, !0), (T[qe] = g)), u.set(g, ze, !1))
              : u.eachTree(
                  [g],
                  function (st) {
                    ;(R.eqRow(st, g) || v || !Fe || Fe({ row: st })) &&
                      (u.set(st, ze, c), Ge && u.set(g, Ge, !1), delete T[Ye(R, st)], xr(g, c))
                  },
                  { children: pe }
                )
            var Se = u.findTree(
              V,
              function (st) {
                return R.eqRow(st, g)
              },
              { children: pe }
            )
            if (Se && Se.parent) {
              var je = void 0,
                it = [],
                Ze = {}
              !v && Fe
                ? Se.items.forEach(function (st) {
                    if (Fe({ row: st })) {
                      const Ct = Ye(R, st)
                      ;(Ze[Ct] = st), it.push(st)
                    }
                  })
                : Se.items.forEach(function (st) {
                    const Ct = Ye(R, st)
                    ;(Ze[Ct] = st), it.push(st)
                  })
              var rt = u.find(Se.items, function (st) {
                return !!T[Ye(R, st)]
              })
              if (rt) je = -1
              else {
                const dt = []
                Se.items.forEach(function (st) {
                  u.get(st, ze) && dt.push(st)
                }),
                  (je =
                    dt.filter(function (st) {
                      return Ze[Ye(R, st)]
                    }).length === it.length
                      ? !0
                      : dt.length || c === -1
                        ? -1
                        : !1)
              }
              return (l.selectCheckboxMaps = P), D.handleSelectRow({ row: Se.parent }, je, v)
            }
          } else (v || !Fe || Fe({ row: g })) && (u.set(g, ze, c), xr(g, c))
        else if (m && !We) {
          c === -1
            ? (T[qe] || (Ge && u.set(g, Ge, !0), (T[qe] = g)), P[qe] && delete P[qe])
            : u.eachTree(
                [g],
                function (Ct) {
                  const $t = Ye(R, Ct)
                  ;(R.eqRow(Ct, g) || v || !Fe || Fe({ row: Ct })) &&
                    (c ? (P[$t] = Ct) : P[$t] && delete P[$t], Ge && u.set(g, Ge, !1), delete T[Ye(R, Ct)], xr(g, c))
                },
                { children: pe }
              )
          var Se = u.findTree(
            V,
            function (Ct) {
              return R.eqRow(Ct, g)
            },
            { children: pe }
          )
          if (Se && Se.parent) {
            var je = void 0,
              Rt = [],
              kt = {}
            !v && Fe
              ? Se.items.forEach(function (bt) {
                  if (Fe({ row: bt })) {
                    const Et = Ye(R, bt)
                    ;(kt[Et] = bt), Rt.push(bt)
                  }
                })
              : Se.items.forEach(function (bt) {
                  const Et = Ye(R, bt)
                  ;(kt[Et] = bt), Rt.push(bt)
                })
            var rt = u.find(Se.items, function (bt) {
              return !!T[Ye(R, bt)]
            })
            if (rt) je = -1
            else {
              const At = []
              Se.items.forEach(function (bt) {
                const Et = Ye(R, bt)
                P[Et] && At.push(bt)
              }),
                (je =
                  At.filter(function (bt) {
                    return kt[Ye(R, bt)]
                  }).length === Rt.length
                    ? !0
                    : At.length || c === -1
                      ? -1
                      : !1)
            }
            return (l.selectCheckboxMaps = P), D.handleSelectRow({ row: Se.parent }, je, v)
          }
        } else (v || !Fe || Fe({ row: g })) && (c ? P[qe] || (P[qe] = g) : P[qe] && delete P[qe], xr(g, c))
        ;(l.selectCheckboxMaps = P), D.checkSelectionStatus()
      },
      triggerHeaderTitleEvent: function (i, c, v) {
        const g = c.content || c.message
        if (g) {
          const m = l.tooltipStore,
            S = zt(g)
          Mn(!0),
            (m.visible = !0),
            (m.currOpts = jt(jt({}, v), { content: null })),
            de(function () {
              const T = N.value
              T && T.open(i.currentTarget, S)
            })
        }
      },
      triggerHeaderTooltipEvent: function (i, c) {
        const v = l.tooltipStore,
          g = c.column,
          m = i.currentTarget
        Mn(!0), (v.column !== g || !v.visible) && ei(i, m, m, null, c)
      },
      triggerBodyTooltipEvent: function (i, c) {
        const v = e.editConfig,
          g = l.editStore,
          m = l.tooltipStore,
          S = Ae.value,
          T = g.actived,
          P = c.row,
          V = c.column,
          Q = i.currentTarget
        if (
          (Mn(m.column !== V || m.row !== P),
          !(V.editRender && pt(v) && ((S.mode === "row" && T.row === P) || (T.row === P && T.column === V))) &&
            (m.column !== V || m.row !== P || !m.visible))
        ) {
          let pe = void 0,
            Ee = void 0
          V.treeNode
            ? ((pe = Q.querySelector(".vxe-tree-cell")), V.type === "html" && (Ee = Q.querySelector(".vxe-cell--html")))
            : (Ee = Q.querySelector(V.type === "html" ? ".vxe-cell--html" : ".vxe-cell--label")),
            ei(i, Q, pe || Q.children[0], Ee, c)
        }
      },
      triggerFooterTooltipEvent: function (i, c) {
        const v = c.column,
          g = l.tooltipStore,
          m = i.currentTarget
        Mn(g.column !== v || !!g.row),
          (g.column !== v || !g.visible) && ei(i, m, m.querySelector(".vxe-cell--item") || m.children[0], null, c)
      },
      handleTargetLeaveEvent: function () {
        let i = W.value,
          c = N.value
        c && c.setActived(!1),
          i.enterable
            ? (f.tooltipTimeout = setTimeout(function () {
                ;(c = N.value), c && !c.isActived() && h.closeTooltip()
              }, i.leaveDelay))
            : h.closeTooltip()
      },
      triggerHeaderCellClickEvent: function (i, c) {
        const v = f._lastResizeTime,
          g = Re.value,
          m = he.value,
          S = c.column,
          T = i.currentTarget,
          P = v && v > Date.now() - 300,
          V = yt(i, T, "vxe-cell--sort").flag,
          Q = yt(i, T, "vxe-cell--filter").flag
        g.trigger === "cell" && !(P || V || Q) && D.triggerSortEvent(i, S, wt(S)),
          h.dispatchEvent(
            "header-cell-click",
            Object.assign({ triggerResizable: P, triggerSort: V, triggerFilter: Q, cell: T }, c),
            i
          ),
          (m.isCurrent || e.highlightCurrentColumn) && h.setCurrentColumn(S)
      },
      triggerHeaderCellDblclickEvent: function (i, c) {
        h.dispatchEvent("header-cell-dblclick", Object.assign({ cell: i.currentTarget }, c), i)
      },
      triggerCellClickEvent: function (i, c) {
        const v = e.highlightCurrentRow,
          g = e.editConfig,
          m = l.editStore,
          S = we.value,
          T = Ae.value,
          P = E.value,
          V = Te.value,
          Q = Ve.value,
          pe = ve.value,
          Ee = m.actived,
          ze = c.row,
          We = c.column,
          Fe = We.type,
          Ge = We.treeNode,
          qe = Fe === "radio",
          Se = Fe === "checkbox",
          je = Fe === "expand",
          it = i.currentTarget,
          Ze = qe && yt(i, it, "vxe-cell--radio").flag,
          rt = Se && yt(i, it, "vxe-cell--checkbox").flag,
          dt = Ge && yt(i, it, "vxe-tree--btn-wrapper").flag,
          Rt = je && yt(i, it, "vxe-table--expanded").flag
        ;(c = Object.assign(
          { cell: it, triggerRadio: Ze, triggerCheckbox: rt, triggerTreeNode: dt, triggerExpandNode: Rt },
          c
        )),
          !rt &&
            !Ze &&
            (!Rt && (S.trigger === "row" || (je && S.trigger === "cell")) && D.triggerRowExpandEvent(i, c),
            (P.trigger === "row" || (Ge && P.trigger === "cell")) && D.triggerTreeExpandEvent(i, c)),
          dt ||
            (Rt ||
              ((pe.isCurrent || v) && !rt && !Ze && D.triggerCurrentRowEvent(i, c),
              !Ze && (V.trigger === "row" || (qe && V.trigger === "cell")) && D.triggerRadioRowEvent(i, c),
              !rt && (Q.trigger === "row" || (Se && Q.trigger === "cell")) && D.handleToggleCheckRowEvent(i, c)),
            pt(g) &&
              (T.trigger === "manual"
                ? Ee.args && Ee.row === ze && We !== Ee.column && mr(i, c)
                : (!Ee.args || ze !== Ee.row || We !== Ee.column) &&
                  (T.trigger === "click" || (T.trigger === "dblclick" && T.mode === "row" && Ee.row === ze)) &&
                  mr(i, c))),
          h.dispatchEvent("cell-click", c, i)
      },
      triggerCellDblclickEvent: function (i, c) {
        const v = e.editConfig,
          g = l.editStore,
          m = Ae.value,
          S = g.actived,
          T = i.currentTarget
        ;(c = Object.assign({ cell: T }, c)),
          pt(v) &&
            m.trigger === "dblclick" &&
            (!S.args || i.currentTarget !== S.args.cell) &&
            (m.mode === "row"
              ? Ut("blur")
                  .catch(function (P) {
                    return P
                  })
                  .then(function () {
                    R.handleActived(c, i)
                      .then(function () {
                        return Ut("change")
                      })
                      .catch(function (P) {
                        return P
                      })
                  })
              : m.mode === "cell" &&
                R.handleActived(c, i)
                  .then(function () {
                    return Ut("change")
                  })
                  .catch(function (P) {
                    return P
                  })),
          h.dispatchEvent("cell-dblclick", c, i)
      },
      handleToggleCheckRowEvent: function (i, c) {
        let v = l.selectCheckboxMaps,
          g = Ve.value,
          m = g.checkField,
          S = c.row,
          T = !1
        m ? (T = !u.get(S, m)) : (T = !v[Ye(R, S)]), i ? D.triggerCheckRowEvent(i, c, T) : D.handleSelectRow(c, T)
      },
      triggerCheckRowEvent: function (i, c, v) {
        const g = Ve.value,
          m = c.row,
          S = f.afterFullData,
          T = g.checkMethod
        if (g.isShiftKey && i.shiftKey && !e.treeConfig) {
          const P = h.getCheckboxRecords()
          if (P.length) {
            const V = P[0],
              Q = h.getVTRowIndex(m),
              pe = h.getVTRowIndex(V)
            if (Q !== pe) {
              h.setAllCheckboxRow(!1)
              const Ee = Q < pe ? S.slice(Q, pe + 1) : S.slice(pe, Q + 1)
              _t(Ee, !0, !1), h.dispatchEvent("checkbox-range-select", Object.assign({ rangeRecords: Ee }, c), i)
              return
            }
          }
        }
        ;(!T || T({ row: m })) &&
          (D.handleSelectRow(c, v),
          h.dispatchEvent(
            "checkbox-change",
            Object.assign(
              {
                records: h.getCheckboxRecords(),
                reserves: h.getCheckboxReserveRecords(),
                indeterminates: h.getCheckboxIndeterminateRecords(),
                checked: v
              },
              c
            ),
            i
          ))
      },
      triggerCheckAllEvent: function (i, c) {
        Wr(c),
          i &&
            h.dispatchEvent(
              "checkbox-all",
              {
                records: h.getCheckboxRecords(),
                reserves: h.getCheckboxReserveRecords(),
                indeterminates: h.getCheckboxIndeterminateRecords(),
                checked: c
              },
              i
            )
      },
      triggerRadioRowEvent: function (i, c) {
        let v = l.selectRadioRow,
          g = c.row,
          m = Te.value,
          S = g,
          T = v !== S
        T ? qt(S) : m.strict || ((T = v === S), T && ((S = null), h.clearRadioRow())),
          T && h.dispatchEvent("radio-change", jt({ oldValue: v, newValue: S }, c), i)
      },
      triggerCurrentRowEvent: function (i, c) {
        const v = l.currentRow,
          g = c.row,
          m = v !== g
        h.setCurrentRow(g), m && h.dispatchEvent("current-change", jt({ oldValue: v, newValue: g }, c), i)
      },
      triggerRowExpandEvent: function (i, c) {
        const v = l.rowExpandLazyLoadedMaps,
          g = l.expandColumn,
          m = we.value,
          S = c.row,
          T = m.lazy,
          P = Ye(R, S)
        if (!T || !v[P]) {
          const V = !h.isExpandByRow(S),
            Q = h.getColumnIndex(g),
            pe = h.getVMColumnIndex(g)
          h.setRowExpand(S, V),
            h.dispatchEvent(
              "toggle-row-expand",
              {
                expanded: V,
                column: g,
                columnIndex: Q,
                $columnIndex: pe,
                row: S,
                rowIndex: h.getRowIndex(S),
                $rowIndex: h.getVMRowIndex(S)
              },
              i
            )
        }
      },
      triggerTreeExpandEvent: function (i, c) {
        const v = l.treeExpandLazyLoadedMaps,
          g = E.value,
          m = c.row,
          S = c.column,
          T = g.lazy,
          P = Ye(R, m)
        if (!T || !v[P]) {
          const V = !h.isTreeExpandByRow(m),
            Q = h.getColumnIndex(S),
            pe = h.getVMColumnIndex(S)
          h.setTreeExpand(m, V),
            h.dispatchEvent(
              "toggle-tree-expand",
              { expanded: V, column: S, columnIndex: Q, $columnIndex: pe, row: m },
              i
            )
        }
      },
      triggerSortEvent: function (i, c, v) {
        const g = e.mouseConfig,
          m = Re.value,
          S = fe.value,
          T = c.field,
          P = c.sortable
        if (P) {
          !v || c.order === v ? h.clearSort(m.multiple ? c : null) : h.sort({ field: T, order: v })
          const V = {
            $table: R,
            $event: i,
            column: c,
            field: T,
            property: T,
            order: c.order,
            sortList: h.getSortColumns(),
            sortTime: c.sortTime
          }
          g && S.area && R.handleSortEvent && R.handleSortEvent(i, V), h.dispatchEvent("sort-change", V, i)
        }
      },
      triggerScrollXEvent: function () {
        la()
      },
      triggerScrollYEvent: function (i) {
        const c = f.scrollYStore,
          v = c.adaptive,
          g = c.offsetSize,
          m = c.visibleSize
        aI && v && g * 2 + m <= 40 ? rn(i) : xa(i)
      },
      scrollToTreeRow: function (i) {
        const c = e.treeConfig,
          v = f.tableFullData,
          g = []
        if (c) {
          const m = E.value,
            S = m.children || m.childrenField,
            T = u.findTree(
              v,
              function (V) {
                return R.eqRow(V, i)
              },
              { children: S }
            )
          if (T) {
            const P = T.nodes
            P.forEach(function (V, Q) {
              Q < P.length - 1 && !h.isTreeExpandByRow(V) && g.push(h.setTreeExpand(V, !0))
            })
          }
        }
        return Promise.all(g).then(function () {
          return tf(R, i)
        })
      },
      updateScrollYStatus: oa,
      updateScrollXSpace: function () {
        const i = l.isGroup,
          c = l.scrollXLoad,
          v = l.scrollbarWidth,
          g = f.visibleColumn,
          m = f.scrollXStore,
          S = f.elemStore,
          T = f.tableWidth,
          P = w.value,
          V = x.value,
          Q = M.value,
          pe = V ? V.$el : null
        if (pe) {
          let Ee = P ? P.$el : null,
            ze = Q ? Q.$el : null,
            We = Ee ? Ee.querySelector(".vxe-table--header") : null,
            Fe = pe.querySelector(".vxe-table--body"),
            Ge = ze ? ze.querySelector(".vxe-table--footer") : null,
            qe = g.slice(0, m.startIndex).reduce(function (it, Ze) {
              return it + Ze.renderWidth
            }, 0),
            Se = ""
          c && (Se = "".concat(qe, "px")),
            We && (We.style.marginLeft = i ? "" : Se),
            (Fe.style.marginLeft = Se),
            Ge && (Ge.style.marginLeft = Se)
          const je = ["main"]
          je.forEach(function (it) {
            const Ze = ["header", "body", "footer"]
            Ze.forEach(function (rt) {
              const dt = S["".concat(it, "-").concat(rt, "-xSpace")],
                Rt = dt ? dt.value : null
              Rt && (Rt.style.width = c ? "".concat(T + (rt === "header" ? v : 0), "px") : "")
            })
          }),
            de(Lt)
        }
      },
      updateScrollYSpace: function () {
        let i = l.scrollYLoad,
          c = f.scrollYStore,
          v = f.elemStore,
          g = f.afterFullData,
          m = c.startIndex,
          S = c.rowHeight,
          T = g.length * S,
          P = Math.max(0, m * S),
          V = ["main", "left", "right"],
          Q = "",
          pe = ""
        i && ((Q = "".concat(P, "px")), (pe = "".concat(T, "px"))),
          V.forEach(function (Ee) {
            const ze = ["header", "body", "footer"],
              We = v["".concat(Ee, "-body-table")],
              Fe = We ? We.value : null
            Fe && (Fe.style.marginTop = Q),
              ze.forEach(function (Ge) {
                const qe = v["".concat(Ee, "-").concat(Ge, "-ySpace")],
                  Se = qe ? qe.value : null
                Se && (Se.style.height = pe)
              })
          }),
          de(Lt)
      },
      updateScrollXData: function () {
        de(function () {
          tn(), D.updateScrollXSpace()
        })
      },
      updateScrollYData: function () {
        de(function () {
          D.handleTableData(), D.updateScrollYSpace()
        })
      },
      checkScrolling: function () {
        const i = J.value,
          c = Ce.value,
          v = x.value,
          g = v ? v.$el : null
        g &&
          (i && (g.scrollLeft > 0 ? pn(i, "scrolling--middle") : Xa(i, "scrolling--middle")),
          c &&
            (g.clientWidth < g.scrollWidth - Math.ceil(g.scrollLeft)
              ? pn(c, "scrolling--middle")
              : Xa(c, "scrolling--middle")))
      },
      updateZindex: function () {
        e.zIndex ? (f.tZindex = e.zIndex) : f.tZindex < Na() && (f.tZindex = da())
      },
      handleCheckedCheckboxRow: _t,
      triggerHoverEvent: function (i, c) {
        const v = c.row
        D.setHoverRow(v)
      },
      setHoverRow: function (i) {
        const c = Ye(R, i),
          v = I.value
        D.clearHoverRow(),
          v &&
            u.arrayEach(v.querySelectorAll('[rowid="'.concat(c, '"]')), function (g) {
              return pn(g, "row--hover")
            }),
          (f.hoverRow = i)
      },
      clearHoverRow: function () {
        const i = I.value
        i &&
          u.arrayEach(i.querySelectorAll(".vxe-body--row.row--hover"), function (c) {
            return Xa(c, "row--hover")
          }),
          (f.hoverRow = null)
      },
      getCell: function (i, c) {
        let v = Ye(R, i),
          g = x.value,
          m = Y.value,
          S = A.value,
          T
        return c && (c.fixed && (c.fixed === "left" ? m && (T = m.$el) : S && (T = S.$el)), T || (T = g.$el), T)
          ? T.querySelector('.vxe-body--row[rowid="'.concat(v, '"] .').concat(c.id))
          : null
      },
      getCellLabel: function (i, c) {
        let v = c.formatter,
          g = pa(i, c),
          m = g
        if (v) {
          let S = void 0,
            T = f.fullAllDataRowIdData,
            P = Ye(R, i),
            V = c.id,
            Q = T[P]
          if (Q && ((S = Q.formatData), S || (S = T[P].formatData = {}), Q && S[V] && S[V].value === g))
            return S[V].label
          const pe = { cellValue: g, row: i, rowIndex: h.getRowIndex(i), column: c, columnIndex: h.getColumnIndex(c) }
          if (u.isString(v)) {
            var Ee = et.formats.get(v)
            m = Ee && Ee.cellFormatMethod ? Ee.cellFormatMethod(pe) : ""
          } else if (u.isArray(v)) {
            var Ee = et.formats.get(v[0])
            m = Ee && Ee.cellFormatMethod ? Ee.cellFormatMethod.apply(Ee, No([pe], v.slice(1), !1)) : ""
          } else m = v(pe)
          S && (S[V] = { value: g, label: m })
        }
        return m
      },
      findRowIndexOf: function (i, c) {
        return c
          ? u.findIndexOf(i, function (v) {
              return R.eqRow(v, c)
            })
          : -1
      },
      eqRow: function (i, c) {
        return i && c ? (i === c ? !0 : Ye(R, i) === Ye(R, c)) : !1
      }
    }),
      Object.assign(R, h, D)
    const ol = function (i) {
        const c = e.showHeader,
          v = e.showFooter,
          g = l.tableData,
          m = l.tableColumn,
          S = l.tableGroupColumn,
          T = l.columnStore,
          P = l.footerTableData,
          V = i === "left",
          Q = V ? T.leftList : T.rightList
        return p("div", { ref: V ? J : Ce, class: "vxe-table--fixed-".concat(i, "-wrapper") }, [
          c
            ? p(Qo, { ref: V ? L : O, fixedType: i, tableData: g, tableColumn: m, tableGroupColumn: S, fixedColumn: Q })
            : Ot(),
          p(Rf, { ref: V ? Y : A, fixedType: i, tableData: g, tableColumn: m, fixedColumn: Q }),
          v ? p(kf, { ref: V ? K : X, footerTableData: P, tableColumn: m, fixedColumn: Q, fixedType: i }) : Ot()
        ])
      },
      to = function () {
        const i = _.value,
          c = { $table: R }
        if (r.empty) return r.empty(c)
        const v = i.name ? et.renderer.get(i.name) : null,
          g = v ? v.renderEmpty : null
        return g ? Vt(g(i, c)) : zt(e.emptyText) || C.i18n("vxe.table.emptyText")
      }
    function ti() {
      const i = I.value
      i && i.clientWidth && i.clientHeight && h.recalculate()
    }
    const ri = Xe(0)
    ut(
      function () {
        return e.data ? e.data.length : -1
      },
      function () {
        ri.value++
      }
    ),
      ut(
        function () {
          return e.data
        },
        function () {
          ri.value++
        }
      ),
      ut(ri, function () {
        const i = f.inited,
          c = f.initStatus
        Ir(e.data || []).then(function () {
          l.scrollXLoad,
            l.scrollYLoad,
            l.expandColumn,
            (f.inited = !0),
            (f.initStatus = !0),
            c || ma(),
            i || $r(),
            h.recalculate()
        })
      })
    const ai = Xe(0)
    ut(
      function () {
        return l.staticColumns.length
      },
      function () {
        ai.value++
      }
    ),
      ut(
        function () {
          return l.staticColumns
        },
        function () {
          ai.value++
        }
      ),
      ut(ai, function () {
        Xt(l.staticColumns)
      })
    const ni = Xe(0)
    ut(
      function () {
        return l.tableColumn.length
      },
      function () {
        ni.value++
      }
    ),
      ut(
        function () {
          return l.tableColumn
        },
        function () {
          ni.value++
        }
      ),
      ut(ni, function () {
        D.analyColumnWidth()
      }),
      ut(
        function () {
          return l.upDataFlag
        },
        function () {
          de(function () {
            h.updateData()
          })
        }
      ),
      ut(
        function () {
          return l.reColumnFlag
        },
        function () {
          de(function () {
            h.refreshColumn()
          })
        }
      ),
      ut(
        function () {
          return e.showHeader
        },
        function () {
          de(function () {
            h.recalculate(!0).then(function () {
              return h.refreshScroll()
            })
          })
        }
      ),
      ut(
        function () {
          return e.showFooter
        },
        function () {
          de(function () {
            h.recalculate(!0).then(function () {
              return h.refreshScroll()
            })
          })
        }
      ),
      ut(
        function () {
          return e.height
        },
        function () {
          de(function () {
            return h.recalculate(!0)
          })
        }
      ),
      ut(
        function () {
          return e.maxHeight
        },
        function () {
          de(function () {
            return h.recalculate(!0)
          })
        }
      ),
      ut(
        function () {
          return e.syncResize
        },
        function (i) {
          i &&
            (ti(),
            de(function () {
              ti(),
                setTimeout(function () {
                  return ti()
                })
            }))
        }
      )
    const b = Xe(0)
    ut(
      function () {
        return e.mergeCells ? e.mergeCells.length : -1
      },
      function () {
        b.value++
      }
    ),
      ut(
        function () {
          return e.mergeCells
        },
        function () {
          b.value++
        }
      ),
      ut(b, function () {
        h.clearMergeCells(),
          de(function () {
            e.mergeCells && h.setMergeCells(e.mergeCells)
          })
      })
    const re = Xe(0)
    ut(
      function () {
        return e.mergeFooterItems ? e.mergeFooterItems.length : -1
      },
      function () {
        re.value++
      }
    ),
      ut(
        function () {
          return e.mergeFooterItems
        },
        function () {
          re.value++
        }
      ),
      ut(re, function () {
        h.clearMergeFooterItems(),
          de(function () {
            e.mergeFooterItems && h.setMergeFooterItems(e.mergeFooterItems)
          })
      }),
      et.hooks.forEach(function (i) {
        const c = i.setupTable
        if (c) {
          const v = c(R)
          v && u.isObject(v) && Object.assign(R, v)
        }
      }),
      D.preventEvent(null, "created", { $table: R })
    let xe
    If(function () {
      h.recalculate().then(function () {
        return h.refreshScroll()
      }),
        D.preventEvent(null, "activated", { $table: R })
    }),
      _p(function () {
        ;(f.isActivated = !1), D.preventEvent(null, "deactivated", { $table: R })
      }),
      pr(function () {
        de(function () {
          const i = e.data
          e.treeConfig, e.showOverflow
          const c = f.scrollXStore,
            v = f.scrollYStore,
            g = ge.value
          if (
            (Ae.value,
            E.value,
            Te.value,
            Ve.value,
            we.value,
            ve.value,
            Object.assign(v, { startIndex: 0, endIndex: 0, visibleSize: 0, adaptive: g.adaptive !== !1 }),
            Object.assign(c, { startIndex: 0, endIndex: 0, visibleSize: 0 }),
            Ir(i || []).then(function () {
              i && i.length && ((f.inited = !0), (f.initStatus = !0), ma(), $r()), Lt()
            }),
            e.autoResize)
          ) {
            const m = De.value,
              S = m.refreshDelay,
              T = I.value,
              P = D.getParentElem(),
              V = S
                ? u.throttle(
                    function () {
                      return h.recalculate(!0)
                    },
                    S,
                    { leading: !0, trailing: !0 }
                  )
                : null
            ;(xe = Vp(
              V
                ? function () {
                    e.autoResize && requestAnimationFrame(V)
                  }
                : function () {
                    e.autoResize && h.recalculate(!0)
                  }
            )),
              T && xe.observe(T),
              P && xe.observe(P)
          }
        }),
          vt.on(R, "paste", Ql),
          vt.on(R, "copy", il),
          vt.on(R, "cut", ll),
          vt.on(R, "mousedown", Tn),
          vt.on(R, "blur", Dn),
          vt.on(R, "mousewheel", lr),
          vt.on(R, "keydown", Jl),
          vt.on(R, "resize", eo),
          R.handleGlobalContextmenuEvent && vt.on(R, "contextmenu", R.handleGlobalContextmenuEvent),
          D.preventEvent(null, "mounted", { $table: R })
      }),
      eu(function () {
        xe && xe.disconnect(),
          h.closeFilter(),
          R.closeMenu && R.closeMenu(),
          D.preventEvent(null, "beforeUnmount", { $table: R })
      }),
      or(function () {
        vt.off(R, "paste"),
          vt.off(R, "copy"),
          vt.off(R, "cut"),
          vt.off(R, "mousedown"),
          vt.off(R, "blur"),
          vt.off(R, "mousewheel"),
          vt.off(R, "keydown"),
          vt.off(R, "resize"),
          vt.off(R, "contextmenu"),
          D.preventEvent(null, "unmounted", { $table: R })
      })
    const He = function () {
      let i,
        c = e.loading,
        v = e.stripe,
        g = e.showHeader,
        m = e.height,
        S = e.treeConfig,
        T = e.mouseConfig,
        P = e.showFooter,
        V = e.highlightCell,
        Q = e.highlightHoverRow,
        pe = e.highlightHoverColumn,
        Ee = e.editConfig,
        ze = e.editRules,
        We = l.isGroup,
        Fe = l.overflowX,
        Ge = l.overflowY,
        qe = l.scrollXLoad,
        Se = l.scrollYLoad,
        je = l.scrollbarHeight,
        it = l.tableData,
        Ze = l.tableColumn,
        rt = l.tableGroupColumn,
        dt = l.footerTableData,
        Rt = l.initStore,
        kt = l.columnStore,
        At = l.filterStore,
        st = kt.leftList,
        Ct = kt.rightList,
        $t = r.loading,
        bt = ce.value,
        Et = Ie.value,
        wr = E.value,
        an = ve.value,
        ii = he.value,
        nn = o.value,
        Ca = Ue.value,
        ln = fe.value,
        on = ye.value,
        Lr = te.value,
        un = be.value
      return p(
        "div",
        {
          ref: I,
          class: [
            "vxe-table",
            "vxe-table--render-default",
            "tid_".concat(s),
            "border--".concat(Ca),
            ((i = {}),
            (i["size--".concat(nn)] = nn),
            (i["vaild-msg--".concat(Et.msgMode)] = !!ze),
            (i["vxe-editable"] = !!Ee),
            (i["old-cell-valid"] = ze && C.cellVaildMode === "obsolete"),
            (i["cell--highlight"] = V),
            (i["cell--selected"] = T && ln.selected),
            (i["cell--area"] = T && ln.area),
            (i["row--highlight"] = an.isHover || Q),
            (i["column--highlight"] = ii.isHover || pe),
            (i["is--header"] = g),
            (i["is--footer"] = P),
            (i["is--group"] = We),
            (i["is--tree-line"] = S && (wr.showLine || wr.line)),
            (i["is--fixed-left"] = st.length),
            (i["is--fixed-right"] = Ct.length),
            (i["is--animat"] = !!e.animat),
            (i["is--round"] = e.round),
            (i["is--stripe"] = !S && v),
            (i["is--loading"] = c),
            (i["is--empty"] = !c && !it.length),
            (i["is--scroll-y"] = Ge),
            (i["is--scroll-x"] = Fe),
            (i["is--virtual-x"] = qe),
            (i["is--virtual-y"] = Se),
            i)
          ],
          onKeydown: Zl
        },
        [
          p("div", { class: "vxe-table-slots" }, r.default ? r.default({}) : []),
          p("div", { class: "vxe-table--render-wrapper" }, [
            p("div", { class: "vxe-table--main-wrapper" }, [
              g ? p(Qo, { ref: w, tableData: it, tableColumn: Ze, tableGroupColumn: rt }) : Ot(),
              p(Rf, { ref: x, tableData: it, tableColumn: Ze }),
              P ? p(kf, { ref: M, footerTableData: dt, tableColumn: Ze }) : Ot()
            ]),
            p("div", { class: "vxe-table--fixed-wrapper" }, [
              st && st.length && Fe ? ol("left") : Ot(),
              Ct && Ct.length && Fe ? ol("right") : Ot()
            ])
          ]),
          p("div", { ref: Z, class: "vxe-table--empty-placeholder" }, [
            p("div", { class: "vxe-table--empty-content" }, to())
          ]),
          p("div", { class: "vxe-table--border-line" }),
          p("div", {
            ref: ue,
            class: "vxe-table--resizable-bar",
            style: Fe ? { "padding-bottom": "".concat(je, "px") } : null
          }),
          p(
            Kl,
            { class: "vxe-table--loading", modelValue: c, icon: Lr.icon, text: Lr.text },
            $t
              ? {
                  default: function () {
                    return $t({ $table: R, $grid: se })
                  }
                }
              : {}
          ),
          Rt.filter ? p(It("vxe-table-filter"), { ref: $, filterStore: At }) : Ot(),
          Rt.import && e.importConfig
            ? p(It("vxe-import-panel"), { defaultOptions: l.importParams, storeData: l.importStore })
            : Ot(),
          Rt.export && (e.exportConfig || e.printConfig)
            ? p(It("vxe-export-panel"), { defaultOptions: l.exportParams, storeData: l.exportStore })
            : Ot(),
          un ? p(It("vxe-table-context-menu"), { ref: B }) : Ot(),
          n ? p(It("vxe-tooltip"), { ref: F, isArrow: !1, enterable: !1 }) : Ot(),
          n ? p(It("vxe-tooltip"), jt({ ref: N }, bt)) : Ot(),
          n && e.editRules && Et.showMessage && (Et.message === "default" ? !m : Et.message === "tooltip")
            ? p(
                It("vxe-tooltip"),
                jt(
                  {
                    ref: q,
                    class: [{ "old-cell-valid": ze && C.cellVaildMode === "obsolete" }, "vxe-table--valid-error"]
                  },
                  Et.message === "tooltip" || it.length === 1 ? on : {}
                )
              )
            : Ot()
        ]
      )
    }
    return (R.renderVN = He), Yt("xecolgroup", null), Yt("$xetable", R), R
  },
  render: function () {
    return this.renderVN()
  }
})
const cc = Object.assign(_i, {
    install: function (e) {
      e.component(_i.name, _i)
    }
  }),
  iI = cc
Ft.component(_i.name, _i)
const lI = {
  vxe: {
    base: { pleaseInput: "请输入", pleaseSelect: "请选择" },
    loading: { text: "加载中..." },
    error: {
      groupFixed: "如果使用分组表头，固定列必须按组设置",
      groupMouseRange: '分组表头与 "{0}" 不能同时使用，这可能会出现错误',
      groupTag: '分组列头应该使用 "{0}" 而不是 "{1}"，这可能会出现错误',
      scrollErrProp: '启用虚拟滚动后不支持该参数 "{0}"',
      errConflicts: '参数 "{0}" 与 "{1}" 有冲突',
      unableInsert: "无法插入到指定位置，请检查参数是否正确",
      useErr: '安装 "{0}" 模块时发生错误，可能顺序不正确，依赖的模块需要在 Table 之前安装',
      barUnableLink: "工具栏无法关联表格",
      expandContent: '展开行的插槽应该是 "content"，请检查是否正确',
      reqModule: '缺少 "{0}" 模块',
      reqProp: '缺少必要的 "{0}" 参数，这可能会导致出现错误',
      emptyProp: '参数 "{0}" 不允许为空',
      errProp: '不支持的参数 "{0}"，可能为 "{1}"',
      colRepet: 'column.{0}="{1}" 重复了，这可能会导致某些功能无法使用',
      notFunc: '方法 "{0}" 不存在',
      errFunc: '参数 "{0}" 不是一个方法',
      notValidators: '全局校验 "{0}" 不存在',
      notFormats: '全局格式化 "{0}" 不存在',
      notCommands: '全局指令 "{0}" 不存在',
      notSlot: '插槽 "{0}" 不存在',
      noTree: '树结构不支持 "{0}"',
      notProp: '不支持的参数 "{0}"',
      checkProp: '当数据量过大时可能会导致复选框卡顿，建议设置参数 "{0}" 提升渲染速度',
      coverProp: '"{0}" 的参数 "{1}" 被覆盖，这可能会出现错误',
      delFunc: '方法 "{0}" 已废弃，请使用 "{1}"',
      delProp: '参数 "{0}" 已废弃，请使用 "{1}"',
      delEvent: '事件 "{0}" 已废弃，请使用 "{1}"',
      removeProp: '参数 "{0}" 已废弃，不建议使用，这可能会导致出现错误',
      errFormat: '全局的格式化内容应该使用 "VXETable.formats" 定义，挂载 "formatter={0}" 的方式已不建议使用',
      notType: '不支持的文件类型 "{0}"',
      notExp: "该浏览器不支持导入/导出功能",
      impFields: "导入失败，请检查字段名和数据格式是否正确",
      treeNotImp: "树表格不支持导入"
    },
    renderer: {
      search: "搜索",
      cases: {
        equal: "等于",
        unequal: "不等于",
        gt: "大于",
        ge: "大于或等于",
        lt: "小于",
        le: "小于或等于",
        begin: "开头是",
        notbegin: "开头不是",
        endin: "结尾是",
        notendin: "结尾不是",
        include: "包含",
        exclude: "不包含",
        between: "介于",
        custom: "自定义筛选",
        insensitive: "不区分大小写",
        isSensitive: "区分大小写"
      },
      combination: {
        menus: {
          clearSort: "清除排序",
          sortAsc: "升序",
          sortDesc: "降序",
          fixedColumn: "锁定列",
          fixedGroup: "锁定组",
          cancelFixed: "取消锁定",
          fixedLeft: "锁定左侧",
          fixedRight: "锁定右侧",
          clearFilter: "清除筛选",
          textOption: "文本筛选",
          numberOption: "数值筛选"
        },
        popup: {
          title: "自定义筛选的方式",
          currColumnTitle: "当前列：",
          and: "与",
          or: "或",
          describeHtml: "可用 ? 代表单个字符<br/>用 * 代表任意多个字符"
        },
        empty: "(空白)",
        notData: "无匹配项"
      }
    },
    pro: {
      area: {
        mergeErr: "无法对合并单元格进行该操作",
        multiErr: "无法对多重选择区域进行该操作",
        extendErr: "如果延伸的区域包含被合并的单元格，所有合并的单元格需大小相同",
        pasteMultiErr: "无法粘贴，需要相同大小的复制的区域和粘贴的区域才能执行此操作"
      },
      fnr: {
        title: "查找和替换",
        findLabel: "查找",
        replaceLabel: "替换",
        findTitle: "查找内容：",
        replaceTitle: "替换为：",
        tabs: { find: "查找", replace: "替换" },
        filter: { re: "正则表达式", whole: "全词匹配", sensitive: "区分大小写" },
        btns: { findNext: "查找下一个", findAll: "查找全部", replace: "替换", replaceAll: "替换全部", cancel: "取消" },
        header: { seq: "#", cell: "单元格", value: "值" },
        empty: "(空值)",
        reError: "无效的正则表达式",
        recordCount: "已找到 {0} 个单元格",
        notCell: "找不到匹配的单元格",
        replaceSuccess: "成功替换 {0} 个单元格"
      }
    },
    table: {
      emptyText: "暂无数据",
      allTitle: "全选/取消",
      seqTitle: "#",
      confirmFilter: "筛选",
      resetFilter: "重置",
      allFilter: "全部",
      sortAsc: "升序：最低到最高",
      sortDesc: "降序：最高到最低",
      filter: "对所选的列启用筛选",
      impSuccess: "成功导入 {0} 条记录",
      expLoading: "正在导出中",
      expSuccess: "导出成功",
      expFilename: "导出_{0}",
      expOriginFilename: "导出_源_{0}",
      customTitle: "列设置",
      customAll: "全部",
      customConfirm: "确认",
      customRestore: "重置",
      maxFixedCol: "最大固定列的数量不能超过 {0} 个"
    },
    grid: {
      selectOneRecord: "请至少选择一条记录！",
      deleteSelectRecord: "您确定要删除所选记录吗？",
      removeSelectRecord: "您确定要移除所选记录吗？",
      dataUnchanged: "数据未改动！",
      delSuccess: "成功删除所选记录！",
      saveSuccess: "保存成功！",
      operError: "发生错误，操作失败！"
    },
    select: { search: "搜索", loadingText: "加载中", emptyText: "暂无数据" },
    pager: {
      goto: "前往",
      pagesize: "{0}条/页",
      total: "共 {0} 条记录",
      pageClassifier: "页",
      homePage: "首页",
      homePageTitle: "首页",
      prevPage: "上一页",
      prevPageTitle: "上一页",
      nextPage: "下一页",
      nextPageTitle: "下一页",
      prevJump: "向上跳页",
      prevJumpTitle: "向上跳页",
      nextJump: "向下跳页",
      nextJumpTitle: "向下跳页",
      endPage: "末页",
      endPageTitle: "末页"
    },
    alert: { title: "消息提示" },
    button: { confirm: "确认", cancel: "取消" },
    import: {
      modes: { covering: "覆盖", insert: "新增" },
      impTitle: "导入数据",
      impFile: "文件名",
      impSelect: "选择文件",
      impType: "文件类型",
      impOpts: "参数设置",
      impConfirm: "导入",
      impCancel: "取消"
    },
    export: {
      types: {
        csv: "CSV (逗号分隔)(*.csv)",
        html: "网页(*.html)",
        xml: "XML 数据(*.xml)",
        txt: "文本文件(制表符分隔)(*.txt)",
        xls: "Excel 97-2003 工作簿(*.xls)",
        xlsx: "Excel 工作簿(*.xlsx)",
        pdf: "PDF (*.pdf)"
      },
      modes: {
        current: "当前数据（当前页的数据）",
        selected: "选中数据（当前页选中的数据）",
        all: "全量数据（包括所有分页的数据）"
      },
      printTitle: "打印数据",
      expTitle: "导出数据",
      expName: "文件名",
      expNamePlaceholder: "请输入文件名",
      expSheetName: "标题",
      expSheetNamePlaceholder: "请输入标题",
      expType: "保存类型",
      expMode: "选择数据",
      expCurrentColumn: "全部字段",
      expColumn: "选择字段",
      expOpts: "参数设置",
      expOptHeader: "表头",
      expHeaderTitle: "是否需要表头",
      expOptFooter: "表尾",
      expFooterTitle: "是否需要表尾",
      expOptColgroup: "分组表头",
      expColgroupTitle: "如果存在，则支持带有分组结构的表头",
      expOptMerge: "合并",
      expMergeTitle: "如果存在，则支持带有合并结构的单元格",
      expOptAllExpand: "展开层级",
      expAllExpandTitle: "如果存在，则支持将带有层级结构的数据全部展开",
      expOptUseStyle: "样式",
      expUseStyleTitle: "如果存在，则支持带样式的单元格",
      expOptOriginal: "源数据",
      expOriginalTitle: "如果为源数据，则支持导入到表格中",
      expPrint: "打印",
      expConfirm: "导出",
      expCancel: "取消"
    },
    modal: { zoomIn: "最大化", zoomOut: "还原", close: "关闭" },
    form: { folding: "收起", unfolding: "展开" },
    toolbar: {
      import: "导入",
      export: "导出",
      print: "打印",
      refresh: "刷新",
      zoomIn: "全屏",
      zoomOut: "还原",
      custom: "列设置",
      customAll: "全部",
      customConfirm: "确认",
      customRestore: "重置",
      fixedLeft: "固定在左侧",
      fixedRight: "固定在右侧",
      cancelfixed: "取消固定"
    },
    input: {
      date: {
        m1: "01 月",
        m2: "02 月",
        m3: "03 月",
        m4: "04 月",
        m5: "05 月",
        m6: "06 月",
        m7: "07 月",
        m8: "08 月",
        m9: "09 月",
        m10: "10 月",
        m11: "11 月",
        m12: "12 月",
        quarterLabel: "{0} 年",
        monthLabel: "{0} 年",
        dayLabel: "{0} 年 {1}",
        labelFormat: {
          date: "yyyy-MM-dd",
          time: "HH:mm:ss",
          datetime: "yyyy-MM-dd HH:mm:ss",
          week: "yyyy 年第 WW 周",
          month: "yyyy-MM",
          quarter: "yyyy 年第 q 季度",
          year: "yyyy"
        },
        weeks: { w: "周", w0: "周日", w1: "周一", w2: "周二", w3: "周三", w4: "周四", w5: "周五", w6: "周六" },
        months: {
          m0: "一月",
          m1: "二月",
          m2: "三月",
          m3: "四月",
          m4: "五月",
          m5: "六月",
          m6: "七月",
          m7: "八月",
          m8: "九月",
          m9: "十月",
          m10: "十一月",
          m11: "十二月"
        },
        quarters: { q1: "第一季度", q2: "第二季度", q3: "第三季度", q4: "第四季度" }
      }
    }
  }
}
const oI = [
  Du,
  Mu,
  Ru,
  Fu,
  Iu,
  Nu,
  Yi,
  Pu,
  $u,
  Vu,
  Bu,
  Hu,
  zu,
  Wu,
  _u,
  ju,
  qu,
  Yu,
  Gu,
  Uu,
  Ku,
  Zu,
  ec,
  tc,
  rc,
  ac,
  nc,
  ic,
  lc,
  oc,
  uc,
  cc
]
Xl({
  i18n: function (e, t) {
    return u.toFormatString(u.get(lI, e), t)
  }
})
function uI(e, t) {
  u.isPlainObject(t) && Xl(t),
    oI.forEach(function (r) {
      return r.install(e)
    })
}
const vI = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Button: R0,
      Checkbox: w0,
      CheckboxGroup: E0,
      Colgroup: g0,
      Column: h0,
      Edit: HF,
      Export: n0,
      Filter: PF,
      Form: z0,
      FormGather: _0,
      FormItem: W0,
      Grid: x0,
      Header: Qo,
      Icon: f0,
      Input: D0,
      Keyboard: o0,
      List: J0,
      Menu: AF,
      Modal: $0,
      Optgroup: Y0,
      Option: G0,
      Pager: y0,
      Pulldown: Q0,
      Radio: S0,
      RadioButton: T0,
      RadioGroup: O0,
      Select: j0,
      Switch: U0,
      Table: iI,
      Textarea: M0,
      Toolbar: C0,
      Tooltip: A0,
      VXETable: et,
      Validator: s0,
      VxeButton: Uu,
      VxeCheckbox: zu,
      VxeCheckboxGroup: Wu,
      VxeColgroup: $u,
      VxeColumn: Pu,
      VxeForm: ec,
      VxeFormGather: rc,
      VxeFormItem: tc,
      VxeGrid: Vu,
      VxeIcon: Yi,
      VxeInput: Yu,
      VxeList: oc,
      VxeModal: Ku,
      VxeModuleEdit: Ru,
      VxeModuleExport: Fu,
      VxeModuleFilter: Du,
      VxeModuleKeyboard: Iu,
      VxeModuleMenu: Mu,
      VxeModuleValidator: Nu,
      VxeOptgroup: nc,
      VxeOption: ic,
      VxePager: Hu,
      VxePulldown: uc,
      VxeRadio: _u,
      VxeRadioButton: qu,
      VxeRadioGroup: ju,
      VxeSelect: ac,
      VxeSwitch: lc,
      VxeTable: cc,
      VxeTextarea: Gu,
      VxeToolbar: Bu,
      VxeTooltip: Zu,
      _t: sp,
      commands: ap,
      config: Tu,
      formats: Od,
      globalConfs: fp,
      globalStore: dp,
      hooks: op,
      install: uI,
      interceptor: Ci,
      menus: np,
      modal: P0,
      print: Cp,
      readFile: Pl,
      renderer: hn,
      saveFile: $l,
      setup: Xl,
      t: cp,
      use: up,
      v: vp,
      validators: lp
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
)
const Hp = {}
const cI = qp(jp)
;(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.VXETablePluginElement = void 0)
  const t = cI,
    r = n(wd),
    a = n(Yp)
  function n(U) {
    return U && U.__esModule ? U : { default: U }
  }
  function s(U, G) {
    const ne = Object.keys(U)
    if (Object.getOwnPropertySymbols) {
      let y = Object.getOwnPropertySymbols(U)
      G &&
        (y = y.filter(function (k) {
          return Object.getOwnPropertyDescriptor(U, k).enumerable
        })),
        ne.push.apply(ne, y)
    }
    return ne
  }
  function o(U) {
    for (let G = 1; G < arguments.length; G++) {
      var ne = arguments[G] != null ? arguments[G] : {}
      G % 2
        ? s(Object(ne), !0).forEach(function (y) {
            d(U, y, ne[y])
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(U, Object.getOwnPropertyDescriptors(ne))
          : s(Object(ne)).forEach(function (y) {
              Object.defineProperty(U, y, Object.getOwnPropertyDescriptor(ne, y))
            })
    }
    return U
  }
  function d(U, G, ne) {
    return (
      G in U ? Object.defineProperty(U, G, { value: ne, enumerable: !0, configurable: !0, writable: !0 }) : (U[G] = ne),
      U
    )
  }
  let l
  function f(U) {
    return U == null || U === ""
  }
  function h(U) {
    return "on" + U.substring(0, 1).toLocaleUpperCase() + U.substring(1)
  }
  function D(U) {
    return "modelValue"
  }
  function I(U) {
    return "update:modelValue"
  }
  function N(U) {
    let G = "change"
    switch (U.name) {
      case "ElAutocomplete":
        G = "select"
        break
      case "ElInput":
      case "ElInputNumber":
        G = "input"
        break
    }
    return G
  }
  function F(U, G) {
    return (0, a.default)(U, G).date
  }
  function q(U, G) {
    return (0, a.default)(U).format(G)
  }
  function $(U, G) {
    return U && G.valueFormat ? F(U, G.valueFormat) : U
  }
  function B(U, G, ne) {
    return U && q($(U, G), G.format || ne)
  }
  function w(U, G, ne, y) {
    return r.default
      .map(U, function (k) {
        return B(k, G, y)
      })
      .join(ne)
  }
  function x(U, G, ne, y) {
    return (U = B(U, ne, y)), U >= B(G[0], ne, y) && U <= B(G[1], ne, y)
  }
  function M(U, G, ne, y) {
    return r.default.assign({}, y, U.props, d({}, D(), ne))
  }
  function L(U, G, ne, y) {
    return r.default.assign({}, y, U.props, d({}, D(), ne))
  }
  function Y(U) {
    return "" + (f(U) ? "" : U)
  }
  function K(U, G, ne) {
    const y = U.placeholder
    return [
      (0, t.h)(
        "span",
        { class: "vxe-cell--label" },
        y && f(ne) ? [(0, t.h)("span", { class: "vxe-cell--placeholder" }, Y(l._t(y)))] : Y(ne)
      )
    ]
  }
  function O(U, G, ne, y) {
    const k = U.events,
      ee = I(),
      le = N(U),
      me = le === ee,
      be = {}
    return (
      r.default.objectEach(k, function (Le, j) {
        be[h(j)] = function () {
          for (var H = arguments.length, ie = new Array(H), we = 0; we < H; we++) ie[we] = arguments[we]
          Le.apply(void 0, [G].concat(ie))
        }
      }),
      ne &&
        (be[h(ee)] = function (Le) {
          ne(Le), k && k[ee] && k[ee](G, Le), me && y && y(Le)
        }),
      !me &&
        y &&
        (be[h(le)] = function () {
          for (var Le = arguments.length, j = new Array(Le), H = 0; H < Le; H++) j[H] = arguments[H]
          y.apply(void 0, j), k && k[le] && k[le].apply(k, [G].concat(j))
        }),
      be
    )
  }
  function A(U, G) {
    const ne = G.$table,
      y = G.row,
      k = G.column
    return O(
      U,
      G,
      function (ee) {
        r.default.set(y, k.field, ee)
      },
      function () {
        ne.updateStatus(G)
      }
    )
  }
  function X(U, G, ne, y) {
    return O(
      U,
      G,
      function (k) {
        ne.data = k
      },
      y
    )
  }
  function J(U, G) {
    const ne = G.$form,
      y = G.data,
      k = G.field
    return O(
      U,
      G,
      function (ee) {
        r.default.set(y, k, ee)
      },
      function () {
        ne.updateStatus(G)
      }
    )
  }
  function Ce(U, G, ne, y) {
    const k = ne[U]
    G &&
      ne.length > U &&
      r.default.each(G, function (ee) {
        ee.value === k && (y.push(ee.label), Ce(++U, ee.children, ne, y))
      })
  }
  function ue(U, G) {
    let ne = U.options,
      y = ne === void 0 ? [] : ne,
      k = U.optionGroups,
      ee = U.props,
      le = ee === void 0 ? {} : ee,
      me = U.optionProps,
      be = me === void 0 ? {} : me,
      Le = U.optionGroupProps,
      j = Le === void 0 ? {} : Le,
      H = G.$table,
      ie = G.rowid,
      we = G.row,
      E = G.column,
      _ = le.filterable,
      te = le.multiple,
      Me = be.label || "label",
      ke = be.value || "value",
      Be = j.options || "options",
      Ke = r.default.get(we, E.field),
      Ue = E.id,
      _e
    if (_) {
      const Je = H.internalData,
        Qe = Je.fullAllDataRowIdData,
        R = Qe[ie]
      if ((R && ((_e = R.cellData), _e || (_e = R.cellData = {})), R && _e[Ue] && _e[Ue].value === Ke))
        return _e[Ue].label
    }
    if (!f(Ke)) {
      const ot = r.default
        .map(
          te ? Ke : [Ke],
          k
            ? function (wt) {
                for (
                  var mt, ft = 0;
                  ft < k.length &&
                  ((mt = r.default.find(k[ft][Be], function (lt) {
                    return lt[ke] === wt
                  })),
                  !mt);
                  ft++
                );
                return mt ? mt[Me] : wt
              }
            : function (wt) {
                const mt = r.default.find(y, function (ft) {
                  return ft[ke] === wt
                })
                return mt ? mt[Me] : wt
              }
        )
        .join(", ")
      return _e && y && y.length && (_e[Ue] = { value: Ke, label: ot }), ot
    }
    return ""
  }
  function Z(U, G) {
    const ne = U.props,
      y = ne === void 0 ? {} : ne,
      k = G.row,
      ee = G.column,
      le = r.default.get(k, ee.field),
      me = le || [],
      be = []
    return (
      Ce(0, y.options, me, be),
      (y.showAllLevels === !1 ? be.slice(be.length - 1, be.length) : be).join(" ".concat(y.separator || "/", " "))
    )
  }
  function se(U, G) {
    let ne = U.props,
      y = ne === void 0 ? {} : ne,
      k = G.row,
      ee = G.column,
      le = y.rangeSeparator,
      me = le === void 0 ? "-" : le,
      be = r.default.get(k, ee.field)
    switch (y.type) {
      case "week":
        be = B(be, y, "YYYYwWW")
        break
      case "month":
        be = B(be, y, "YYYY-MM")
        break
      case "year":
        be = B(be, y, "YYYY")
        break
      case "dates":
        be = w(be, y, ", ", "YYYY-MM-DD")
        break
      case "daterange":
        be = w(be, y, " ".concat(me, " "), "YYYY-MM-DD")
        break
      case "datetimerange":
        be = w(be, y, " ".concat(me, " "), "YYYY-MM-DD HH:ss:mm")
        break
      case "monthrange":
        be = w(be, y, " ".concat(me, " "), "YYYY-MM")
        break
      default:
        be = B(be, y, "YYYY-MM-DD")
    }
    return be
  }
  function Oe(U, G) {
    let ne = U.props,
      y = ne === void 0 ? {} : ne,
      k = G.row,
      ee = G.column,
      le = y.isRange,
      me = y.format,
      be = me === void 0 ? "hh:mm:ss" : me,
      Le = y.rangeSeparator,
      j = Le === void 0 ? "-" : Le,
      H = r.default.get(k, ee.field)
    return (
      H &&
        le &&
        (H = r.default
          .map(H, function (ie) {
            return q($(ie, y), be)
          })
          .join(" ".concat(j, " "))),
      q($(H, y), be)
    )
  }
  function Ie(U) {
    return function (G, ne) {
      const y = ne.row,
        k = ne.column,
        ee = G.name,
        le = G.attrs,
        me = r.default.get(y, k.field)
      return [(0, t.h)((0, t.resolveComponent)(ee), o(o(o({}, le), M(G, ne, me, U)), A(G, ne)))]
    }
  }
  function z(U, G) {
    const ne = U.attrs
    return [(0, t.h)((0, t.resolveComponent)("el-button"), o(o(o({}, ne), M(U, G, null)), O(U, G)), $e(U.content))]
  }
  function ge(U, G) {
    const ne = U.children
    return ne
      ? ne.map(function (y) {
          return z(y, G)[0]
        })
      : []
  }
  function oe(U) {
    return function (G, ne) {
      const y = ne.column,
        k = G.name,
        ee = G.attrs
      return [
        (0, t.h)(
          "div",
          { class: "vxe-table--filter-element-wrapper" },
          y.filters.map(function (le, me) {
            const be = le.data
            return (0, t.h)(
              (0, t.resolveComponent)(k),
              o(
                o(o({ key: me }, ee), M(G, ne, be, U)),
                X(G, ne, le, function () {
                  he(ne, !!le.data, le)
                })
              )
            )
          })
        )
      ]
    }
  }
  function he(U, G, ne) {
    const y = U.$panel
    y.changeOption(null, G, ne)
  }
  function ve(U) {
    const G = U.option,
      ne = U.row,
      y = U.column,
      k = G.data,
      ee = r.default.get(ne, y.field)
    return r.default.toValueString(ee).indexOf(k) > -1
  }
  function De(U) {
    const G = U.option,
      ne = U.row,
      y = U.column,
      k = G.data,
      ee = r.default.get(ne, y.field)
    return ee === k
  }
  function Ne(U, G) {
    const ne = G.label || "label",
      y = G.value || "value"
    return r.default.map(U, function (k, ee) {
      return (0, t.h)((0, t.resolveComponent)("el-option"), {
        key: ee,
        value: k[y],
        label: k[ne],
        disabled: k.disabled
      })
    })
  }
  function $e(U) {
    return [Y(U)]
  }
  function Te(U) {
    return function (G, ne) {
      const y = ne.data,
        k = ne.field,
        ee = G.name,
        le = G.attrs,
        me = r.default.get(y, k)
      return [(0, t.h)((0, t.resolveComponent)(ee), o(o(o({}, le), L(G, ne, me, U)), J(G, ne)))]
    }
  }
  function Ve(U, G) {
    const ne = U.attrs,
      y = L(U, G, null)
    return [
      (0, t.h)((0, t.resolveComponent)("el-button"), o(o(o({}, ne), y), O(U, G)), {
        default: function () {
          return $e(U.content || y.content)
        }
      })
    ]
  }
  function W(U, G) {
    const ne = U.children
    return ne
      ? ne.map(function (y) {
          return Ve(y, G)[0]
        })
      : []
  }
  function ce(U) {
    return function (G) {
      const ne = G.row,
        y = G.column,
        k = G.options
      return k && k.original ? r.default.get(ne, y.field) : U(y.editRender || y.cellRender, G)
    }
  }
  function ye() {
    return function (U, G) {
      const ne = U.name,
        y = U.options,
        k = y === void 0 ? [] : y,
        ee = U.optionProps,
        le = ee === void 0 ? {} : ee,
        me = U.attrs,
        be = G.data,
        Le = G.field,
        j = le.label || "label",
        H = le.value || "value",
        ie = r.default.get(be, Le)
      return [
        (0, t.h)((0, t.resolveComponent)("".concat(ne, "Group")), o(o(o({}, me), L(U, G, ie)), J(U, G)), {
          default: function () {
            return k.map(function (E, _) {
              return (0, t.h)(
                (0, t.resolveComponent)(ne),
                { key: _, label: E[H], disabled: E.disabled },
                {
                  default: function () {
                    return $e(E[j])
                  }
                }
              )
            })
          }
        })
      ]
    }
  }
  function Ae(U, G, ne) {
    for (var y, k = U.target; k && k.nodeType && k !== document; ) {
      if (ne && k.className && k.className.split && k.className.split(" ").indexOf(ne) > -1) y = k
      else if (k === G) return { flag: ne ? !!y : !0, container: G, targetElem: y }
      k = k.parentNode
    }
    return { flag: !1 }
  }
  function Re(U) {
    const G = U.$event,
      ne = document.body
    if (
      Ae(G, ne, "el-autocomplete-suggestion").flag ||
      Ae(G, ne, "el-select-dropdown").flag ||
      Ae(G, ne, "el-cascader__dropdown").flag ||
      Ae(G, ne, "el-cascader-menus").flag ||
      Ae(G, ne, "el-time-panel").flag ||
      Ae(G, ne, "el-picker-panel").flag ||
      Ae(G, ne, "el-color-dropdown").flag
    )
      return !1
  }
  const ae = {
    install: function (G) {
      !/^(4)\./.test(G.version) &&
        !/v4/i.test(G.v) &&
        console.error("[vxe-table-plugin-element 4.x] Version vxe-table 4.x is required"),
        G.renderer.mixin({
          ElAutocomplete: {
            autofocus: "input.el-input__inner",
            renderDefault: Ie(),
            renderEdit: Ie(),
            renderFilter: oe(),
            defaultFilterMethod: De,
            renderItemContent: Te()
          },
          ElInput: {
            autofocus: "input.el-input__inner",
            renderDefault: Ie(),
            renderEdit: Ie(),
            renderFilter: oe(),
            defaultFilterMethod: ve,
            renderItemContent: Te()
          },
          ElInputNumber: {
            autofocus: "input.el-input__inner",
            renderDefault: Ie(),
            renderEdit: Ie(),
            renderFilter: oe(),
            defaultFilterMethod: ve,
            renderItemContent: Te()
          },
          ElSelect: {
            renderEdit: function (y, k) {
              const ee = y.options,
                le = ee === void 0 ? [] : ee,
                me = y.optionGroups,
                be = y.optionProps,
                Le = be === void 0 ? {} : be,
                j = y.optionGroupProps,
                H = j === void 0 ? {} : j,
                ie = k.row,
                we = k.column,
                E = y.attrs,
                _ = r.default.get(ie, we.field),
                te = M(y, k, _),
                Me = A(y, k)
              if (me) {
                const ke = H.options || "options",
                  Be = H.label || "label"
                return [
                  (0, t.h)((0, t.resolveComponent)("el-select"), o(o(o({}, E), te), Me), {
                    default: function () {
                      return r.default.map(me, function (Ue, _e) {
                        return (0, t.h)(
                          (0, t.resolveComponent)("el-option-group"),
                          { key: _e, label: Ue[Be] },
                          {
                            default: function () {
                              return Ne(Ue[ke], Le)
                            }
                          }
                        )
                      })
                    }
                  })
                ]
              }
              return [
                (0, t.h)((0, t.resolveComponent)("el-select"), o(o(o({}, te), E), Me), {
                  default: function () {
                    return Ne(le, Le)
                  }
                })
              ]
            },
            renderCell: function (y, k) {
              return K(y, k, ue(y, k))
            },
            renderFilter: function (y, k) {
              const ee = y.options,
                le = ee === void 0 ? [] : ee,
                me = y.optionGroups,
                be = y.optionProps,
                Le = be === void 0 ? {} : be,
                j = y.optionGroupProps,
                H = j === void 0 ? {} : j,
                ie = H.options || "options",
                we = H.label || "label",
                E = k.column,
                _ = y.attrs
              return [
                (0, t.h)(
                  "div",
                  { class: "vxe-table--filter-element-wrapper" },
                  me
                    ? E.filters.map(function (te, Me) {
                        const ke = te.data,
                          Be = M(y, k, ke)
                        return (0, t.h)(
                          (0, t.resolveComponent)("el-select"),
                          o(
                            o(o({ key: Me }, _), Be),
                            X(y, k, te, function () {
                              he(k, Be.multiple ? te.data && te.data.length > 0 : !r.default.eqNull(te.data), te)
                            })
                          ),
                          {
                            default: function () {
                              return r.default.map(me, function (Ue, _e) {
                                return (0, t.h)(
                                  (0, t.resolveComponent)("el-option-group"),
                                  { key: _e, label: Ue[we] },
                                  {
                                    default: function () {
                                      return Ne(Ue[ie], Le)
                                    }
                                  }
                                )
                              })
                            }
                          }
                        )
                      })
                    : E.filters.map(function (te, Me) {
                        const ke = te.data,
                          Be = M(y, k, ke)
                        return (0, t.h)(
                          (0, t.resolveComponent)("el-select"),
                          o(
                            o(o({ key: Me }, _), Be),
                            X(y, k, te, function () {
                              he(k, Be.multiple ? te.data && te.data.length > 0 : !r.default.eqNull(te.data), te)
                            })
                          ),
                          {
                            default: function () {
                              return Ne(le, Le)
                            }
                          }
                        )
                      })
                )
              ]
            },
            defaultFilterMethod: function (y) {
              const k = y.option,
                ee = y.row,
                le = y.column,
                me = k.data,
                be = le.field,
                Le = le.filterRender,
                j = Le.props,
                H = j === void 0 ? {} : j,
                ie = r.default.get(ee, be)
              return H.multiple
                ? r.default.isArray(ie)
                  ? r.default.includeArrays(ie, me)
                  : me.indexOf(ie) > -1
                : ie == me
            },
            renderItemContent: function (y, k) {
              const ee = y.options,
                le = ee === void 0 ? [] : ee,
                me = y.optionGroups,
                be = y.optionProps,
                Le = be === void 0 ? {} : be,
                j = y.optionGroupProps,
                H = j === void 0 ? {} : j,
                ie = k.data,
                we = k.field,
                E = y.attrs,
                _ = r.default.get(ie, we),
                te = L(y, k, _),
                Me = J(y, k)
              if (me) {
                const ke = H.options || "options",
                  Be = H.label || "label"
                return [
                  (0, t.h)((0, t.resolveComponent)("el-select"), o(o(o({}, E), te), Me), {
                    default: function () {
                      return r.default.map(me, function (Ue, _e) {
                        return (0, t.h)(
                          (0, t.resolveComponent)("el-option-group"),
                          { label: Ue[Be], key: _e },
                          {
                            default: function () {
                              return Ne(Ue[ke], Le)
                            }
                          }
                        )
                      })
                    }
                  })
                ]
              }
              return [
                (0, t.h)((0, t.resolveComponent)("el-select"), o(o(o({}, E), te), Me), {
                  default: function () {
                    return Ne(le, Le)
                  }
                })
              ]
            },
            exportMethod: ce(ue)
          },
          ElCascader: {
            renderEdit: Ie(),
            renderCell: function (y, k) {
              return K(y, k, Z(y, k))
            },
            renderItemContent: Te(),
            exportMethod: ce(Z)
          },
          ElDatePicker: {
            renderEdit: Ie(),
            renderCell: function (y, k) {
              return K(y, k, se(y, k))
            },
            renderFilter: function (y, k) {
              const ee = k.column,
                le = y.name,
                me = y.attrs
              return [
                (0, t.h)(
                  "div",
                  { class: "vxe-table--filter-element-wrapper" },
                  ee.filters.map(function (be, Le) {
                    const j = be.data
                    return (0, t.h)(
                      (0, t.resolveComponent)(le),
                      o(
                        o(o({ key: Le }, me), M(y, k, j)),
                        X(y, k, be, function () {
                          he(k, !!be.data, be)
                        })
                      )
                    )
                  })
                )
              ]
            },
            defaultFilterMethod: function (y) {
              const k = y.option,
                ee = y.row,
                le = y.column,
                me = k.data,
                be = le.filterRender,
                Le = be.props,
                j = Le === void 0 ? {} : Le,
                H = r.default.get(ee, le.field)
              if (me)
                switch (j.type) {
                  case "daterange":
                    return x(H, me, j, "YYYY-MM-DD")
                  case "datetimerange":
                    return x(H, me, j, "YYYY-MM-DD HH:ss:mm")
                  case "monthrange":
                    return x(H, me, j, "YYYY-MM")
                  default:
                    return H === me
                }
              return !1
            },
            renderItemContent: Te(),
            exportMethod: ce(se)
          },
          ElTimePicker: {
            renderEdit: Ie(),
            renderCell: function (y, k) {
              return K(y, k, Oe(y, k))
            },
            renderItemContent: Te(),
            exportMethod: ce(Oe)
          },
          ElTimeSelect: { renderEdit: Ie(), renderItemContent: Te() },
          ElRate: {
            renderDefault: Ie(),
            renderEdit: Ie(),
            renderFilter: oe(),
            defaultFilterMethod: De,
            renderItemContent: Te()
          },
          ElSwitch: {
            renderDefault: Ie(),
            renderEdit: Ie(),
            renderFilter: function (y, k) {
              const ee = k.column,
                le = y.name,
                me = y.attrs
              return [
                (0, t.h)(
                  "div",
                  { class: "vxe-table--filter-element-wrapper" },
                  ee.filters.map(function (be, Le) {
                    const j = be.data
                    return (0, t.h)(
                      (0, t.resolveComponent)(le),
                      o(
                        o(o({ key: Le }, me), M(y, k, j)),
                        X(y, k, be, function () {
                          he(k, r.default.isBoolean(be.data), be)
                        })
                      )
                    )
                  })
                )
              ]
            },
            defaultFilterMethod: De,
            renderItemContent: Te()
          },
          ElSlider: {
            renderDefault: Ie(),
            renderEdit: Ie(),
            renderFilter: oe(),
            defaultFilterMethod: De,
            renderItemContent: Te()
          },
          ElRadio: { renderItemContent: ye() },
          ElCheckbox: { renderItemContent: ye() },
          ElButton: { renderDefault: z, renderItemContent: Ve },
          ElButtons: { renderDefault: ge, renderItemContent: W }
        }),
        G.interceptor.add("event.clearFilter", Re),
        G.interceptor.add("event.clearActived", Re),
        G.interceptor.add("event.clearAreas", Re)
    }
  }
  ;(e.VXETablePluginElement = ae),
    typeof window < "u" && window.VXETable && window.VXETable.use && window.VXETable.use(ae)
  const fe = ae
  e.default = fe
})(Hp)
const dI = Nf(Hp)
export { vI as V, dI as a }

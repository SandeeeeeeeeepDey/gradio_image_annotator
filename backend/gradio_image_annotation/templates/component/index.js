const {
  SvelteComponent: kf,
  assign: yf,
  create_slot: Cf,
  detach: Sf,
  element: zf,
  get_all_dirty_from_scope: Bf,
  get_slot_changes: Df,
  get_spread_update: qf,
  init: Lf,
  insert: Mf,
  safe_not_equal: Ef,
  set_dynamic_element_data: Js,
  set_style: Ye,
  toggle_class: ot,
  transition_in: Ja,
  transition_out: Qa,
  update_slot_base: Rf
} = window.__gradio__svelte__internal;
function Af(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[18].default
  ), s = Cf(
    i,
    l,
    /*$$scope*/
    l[17],
    null
  );
  let o = [
    { "data-testid": (
      /*test_id*/
      l[7]
    ) },
    { id: (
      /*elem_id*/
      l[2]
    ) },
    {
      class: t = "block " + /*elem_classes*/
      l[3].join(" ") + " svelte-nl1om8"
    }
  ], r = {};
  for (let a = 0; a < o.length; a += 1)
    r = yf(r, o[a]);
  return {
    c() {
      e = zf(
        /*tag*/
        l[14]
      ), s && s.c(), Js(
        /*tag*/
        l[14]
      )(e, r), ot(
        e,
        "hidden",
        /*visible*/
        l[10] === !1
      ), ot(
        e,
        "padded",
        /*padding*/
        l[6]
      ), ot(
        e,
        "border_focus",
        /*border_mode*/
        l[5] === "focus"
      ), ot(
        e,
        "border_contrast",
        /*border_mode*/
        l[5] === "contrast"
      ), ot(e, "hide-container", !/*explicit_call*/
      l[8] && !/*container*/
      l[9]), Ye(
        e,
        "height",
        /*get_dimension*/
        l[15](
          /*height*/
          l[0]
        )
      ), Ye(e, "width", typeof /*width*/
      l[1] == "number" ? `calc(min(${/*width*/
      l[1]}px, 100%))` : (
        /*get_dimension*/
        l[15](
          /*width*/
          l[1]
        )
      )), Ye(
        e,
        "border-style",
        /*variant*/
        l[4]
      ), Ye(
        e,
        "overflow",
        /*allow_overflow*/
        l[11] ? "visible" : "hidden"
      ), Ye(
        e,
        "flex-grow",
        /*scale*/
        l[12]
      ), Ye(e, "min-width", `calc(min(${/*min_width*/
      l[13]}px, 100%))`), Ye(e, "border-width", "var(--block-border-width)");
    },
    m(a, f) {
      Mf(a, e, f), s && s.m(e, null), n = !0;
    },
    p(a, f) {
      s && s.p && (!n || f & /*$$scope*/
      131072) && Rf(
        s,
        i,
        a,
        /*$$scope*/
        a[17],
        n ? Df(
          i,
          /*$$scope*/
          a[17],
          f,
          null
        ) : Bf(
          /*$$scope*/
          a[17]
        ),
        null
      ), Js(
        /*tag*/
        a[14]
      )(e, r = qf(o, [
        (!n || f & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          a[7]
        ) },
        (!n || f & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          a[2]
        ) },
        (!n || f & /*elem_classes*/
        8 && t !== (t = "block " + /*elem_classes*/
        a[3].join(" ") + " svelte-nl1om8")) && { class: t }
      ])), ot(
        e,
        "hidden",
        /*visible*/
        a[10] === !1
      ), ot(
        e,
        "padded",
        /*padding*/
        a[6]
      ), ot(
        e,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), ot(
        e,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), ot(e, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), f & /*height*/
      1 && Ye(
        e,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), f & /*width*/
      2 && Ye(e, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), f & /*variant*/
      16 && Ye(
        e,
        "border-style",
        /*variant*/
        a[4]
      ), f & /*allow_overflow*/
      2048 && Ye(
        e,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), f & /*scale*/
      4096 && Ye(
        e,
        "flex-grow",
        /*scale*/
        a[12]
      ), f & /*min_width*/
      8192 && Ye(e, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      n || (Ja(s, a), n = !0);
    },
    o(a) {
      Qa(s, a), n = !1;
    },
    d(a) {
      a && Sf(e), s && s.d(a);
    }
  };
}
function Wf(l) {
  let e, t = (
    /*tag*/
    l[14] && Af(l)
  );
  return {
    c() {
      t && t.c();
    },
    m(n, i) {
      t && t.m(n, i), e = !0;
    },
    p(n, [i]) {
      /*tag*/
      n[14] && t.p(n, i);
    },
    i(n) {
      e || (Ja(t, n), e = !0);
    },
    o(n) {
      Qa(t, n), e = !1;
    },
    d(n) {
      t && t.d(n);
    }
  };
}
function Xf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { height: s = void 0 } = e, { width: o = void 0 } = e, { elem_id: r = "" } = e, { elem_classes: a = [] } = e, { variant: f = "solid" } = e, { border_mode: c = "base" } = e, { padding: u = !0 } = e, { type: _ = "normal" } = e, { test_id: d = void 0 } = e, { explicit_call: m = !1 } = e, { container: h = !0 } = e, { visible: g = !0 } = e, { allow_overflow: b = !0 } = e, { scale: v = null } = e, { min_width: w = 0 } = e, k = _ === "fieldset" ? "fieldset" : "div";
  const B = (C) => {
    if (C !== void 0) {
      if (typeof C == "number")
        return C + "px";
      if (typeof C == "string")
        return C;
    }
  };
  return l.$$set = (C) => {
    "height" in C && t(0, s = C.height), "width" in C && t(1, o = C.width), "elem_id" in C && t(2, r = C.elem_id), "elem_classes" in C && t(3, a = C.elem_classes), "variant" in C && t(4, f = C.variant), "border_mode" in C && t(5, c = C.border_mode), "padding" in C && t(6, u = C.padding), "type" in C && t(16, _ = C.type), "test_id" in C && t(7, d = C.test_id), "explicit_call" in C && t(8, m = C.explicit_call), "container" in C && t(9, h = C.container), "visible" in C && t(10, g = C.visible), "allow_overflow" in C && t(11, b = C.allow_overflow), "scale" in C && t(12, v = C.scale), "min_width" in C && t(13, w = C.min_width), "$$scope" in C && t(17, i = C.$$scope);
  }, [
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    d,
    m,
    h,
    g,
    b,
    v,
    w,
    k,
    B,
    _,
    i,
    n
  ];
}
class Yf extends kf {
  constructor(e) {
    super(), Lf(this, e, Xf, Wf, Ef, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: If,
  attr: Hf,
  create_slot: Tf,
  detach: jf,
  element: Ff,
  get_all_dirty_from_scope: Uf,
  get_slot_changes: Vf,
  init: Nf,
  insert: Of,
  safe_not_equal: Pf,
  transition_in: Kf,
  transition_out: Zf,
  update_slot_base: Gf
} = window.__gradio__svelte__internal;
function Jf(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[1].default
  ), i = Tf(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = Ff("div"), i && i.c(), Hf(e, "class", "svelte-1hnfib2");
    },
    m(s, o) {
      Of(s, e, o), i && i.m(e, null), t = !0;
    },
    p(s, [o]) {
      i && i.p && (!t || o & /*$$scope*/
      1) && Gf(
        i,
        n,
        s,
        /*$$scope*/
        s[0],
        t ? Vf(
          n,
          /*$$scope*/
          s[0],
          o,
          null
        ) : Uf(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      t || (Kf(i, s), t = !0);
    },
    o(s) {
      Zf(i, s), t = !1;
    },
    d(s) {
      s && jf(e), i && i.d(s);
    }
  };
}
function Qf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (s) => {
    "$$scope" in s && t(0, i = s.$$scope);
  }, [i, n];
}
class xf extends If {
  constructor(e) {
    super(), Nf(this, e, Qf, Jf, Pf, {});
  }
}
const {
  SvelteComponent: $f,
  attr: Qs,
  check_outros: ec,
  create_component: tc,
  create_slot: nc,
  destroy_component: lc,
  detach: Ol,
  element: ic,
  empty: sc,
  get_all_dirty_from_scope: oc,
  get_slot_changes: ac,
  group_outros: rc,
  init: fc,
  insert: Pl,
  mount_component: cc,
  safe_not_equal: uc,
  set_data: _c,
  space: dc,
  text: hc,
  toggle_class: Dn,
  transition_in: rl,
  transition_out: Kl,
  update_slot_base: mc
} = window.__gradio__svelte__internal;
function xs(l) {
  let e, t;
  return e = new xf({
    props: {
      $$slots: { default: [gc] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      tc(e.$$.fragment);
    },
    m(n, i) {
      cc(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope, info*/
      10 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (rl(e.$$.fragment, n), t = !0);
    },
    o(n) {
      Kl(e.$$.fragment, n), t = !1;
    },
    d(n) {
      lc(e, n);
    }
  };
}
function gc(l) {
  let e;
  return {
    c() {
      e = hc(
        /*info*/
        l[1]
      );
    },
    m(t, n) {
      Pl(t, e, n);
    },
    p(t, n) {
      n & /*info*/
      2 && _c(
        e,
        /*info*/
        t[1]
      );
    },
    d(t) {
      t && Ol(e);
    }
  };
}
function bc(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[2].default
  ), o = nc(
    s,
    l,
    /*$$scope*/
    l[3],
    null
  );
  let r = (
    /*info*/
    l[1] && xs(l)
  );
  return {
    c() {
      e = ic("span"), o && o.c(), t = dc(), r && r.c(), n = sc(), Qs(e, "data-testid", "block-info"), Qs(e, "class", "svelte-22c38v"), Dn(e, "sr-only", !/*show_label*/
      l[0]), Dn(e, "hide", !/*show_label*/
      l[0]), Dn(
        e,
        "has-info",
        /*info*/
        l[1] != null
      );
    },
    m(a, f) {
      Pl(a, e, f), o && o.m(e, null), Pl(a, t, f), r && r.m(a, f), Pl(a, n, f), i = !0;
    },
    p(a, [f]) {
      o && o.p && (!i || f & /*$$scope*/
      8) && mc(
        o,
        s,
        a,
        /*$$scope*/
        a[3],
        i ? ac(
          s,
          /*$$scope*/
          a[3],
          f,
          null
        ) : oc(
          /*$$scope*/
          a[3]
        ),
        null
      ), (!i || f & /*show_label*/
      1) && Dn(e, "sr-only", !/*show_label*/
      a[0]), (!i || f & /*show_label*/
      1) && Dn(e, "hide", !/*show_label*/
      a[0]), (!i || f & /*info*/
      2) && Dn(
        e,
        "has-info",
        /*info*/
        a[1] != null
      ), /*info*/
      a[1] ? r ? (r.p(a, f), f & /*info*/
      2 && rl(r, 1)) : (r = xs(a), r.c(), rl(r, 1), r.m(n.parentNode, n)) : r && (rc(), Kl(r, 1, 1, () => {
        r = null;
      }), ec());
    },
    i(a) {
      i || (rl(o, a), rl(r), i = !0);
    },
    o(a) {
      Kl(o, a), Kl(r), i = !1;
    },
    d(a) {
      a && (Ol(e), Ol(t), Ol(n)), o && o.d(a), r && r.d(a);
    }
  };
}
function wc(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { show_label: s = !0 } = e, { info: o = void 0 } = e;
  return l.$$set = (r) => {
    "show_label" in r && t(0, s = r.show_label), "info" in r && t(1, o = r.info), "$$scope" in r && t(3, i = r.$$scope);
  }, [s, o, n, i];
}
class xa extends $f {
  constructor(e) {
    super(), fc(this, e, wc, bc, uc, { show_label: 0, info: 1 });
  }
}
const {
  SvelteComponent: vc,
  append: zi,
  attr: zl,
  create_component: pc,
  destroy_component: kc,
  detach: yc,
  element: $s,
  init: Cc,
  insert: Sc,
  mount_component: zc,
  safe_not_equal: Bc,
  set_data: Dc,
  space: qc,
  text: Lc,
  toggle_class: Yt,
  transition_in: Mc,
  transition_out: Ec
} = window.__gradio__svelte__internal;
function Rc(l) {
  let e, t, n, i, s, o;
  return n = new /*Icon*/
  l[1]({}), {
    c() {
      e = $s("label"), t = $s("span"), pc(n.$$.fragment), i = qc(), s = Lc(
        /*label*/
        l[0]
      ), zl(t, "class", "svelte-9gxdi0"), zl(e, "for", ""), zl(e, "data-testid", "block-label"), zl(e, "class", "svelte-9gxdi0"), Yt(e, "hide", !/*show_label*/
      l[2]), Yt(e, "sr-only", !/*show_label*/
      l[2]), Yt(
        e,
        "float",
        /*float*/
        l[4]
      ), Yt(
        e,
        "hide-label",
        /*disable*/
        l[3]
      );
    },
    m(r, a) {
      Sc(r, e, a), zi(e, t), zc(n, t, null), zi(e, i), zi(e, s), o = !0;
    },
    p(r, [a]) {
      (!o || a & /*label*/
      1) && Dc(
        s,
        /*label*/
        r[0]
      ), (!o || a & /*show_label*/
      4) && Yt(e, "hide", !/*show_label*/
      r[2]), (!o || a & /*show_label*/
      4) && Yt(e, "sr-only", !/*show_label*/
      r[2]), (!o || a & /*float*/
      16) && Yt(
        e,
        "float",
        /*float*/
        r[4]
      ), (!o || a & /*disable*/
      8) && Yt(
        e,
        "hide-label",
        /*disable*/
        r[3]
      );
    },
    i(r) {
      o || (Mc(n.$$.fragment, r), o = !0);
    },
    o(r) {
      Ec(n.$$.fragment, r), o = !1;
    },
    d(r) {
      r && yc(e), kc(n);
    }
  };
}
function Ac(l, e, t) {
  let { label: n = null } = e, { Icon: i } = e, { show_label: s = !0 } = e, { disable: o = !1 } = e, { float: r = !0 } = e;
  return l.$$set = (a) => {
    "label" in a && t(0, n = a.label), "Icon" in a && t(1, i = a.Icon), "show_label" in a && t(2, s = a.show_label), "disable" in a && t(3, o = a.disable), "float" in a && t(4, r = a.float);
  }, [n, i, s, o, r];
}
class Wc extends vc {
  constructor(e) {
    super(), Cc(this, e, Ac, Rc, Bc, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Xc,
  append: hs,
  attr: Ct,
  bubble: Yc,
  create_component: Ic,
  destroy_component: Hc,
  detach: $a,
  element: ms,
  init: Tc,
  insert: er,
  listen: jc,
  mount_component: Fc,
  safe_not_equal: Uc,
  set_data: Vc,
  set_style: qn,
  space: Nc,
  text: Oc,
  toggle_class: Be,
  transition_in: Pc,
  transition_out: Kc
} = window.__gradio__svelte__internal;
function eo(l) {
  let e, t;
  return {
    c() {
      e = ms("span"), t = Oc(
        /*label*/
        l[1]
      ), Ct(e, "class", "svelte-1lrphxw");
    },
    m(n, i) {
      er(n, e, i), hs(e, t);
    },
    p(n, i) {
      i & /*label*/
      2 && Vc(
        t,
        /*label*/
        n[1]
      );
    },
    d(n) {
      n && $a(e);
    }
  };
}
function Zc(l) {
  let e, t, n, i, s, o, r, a = (
    /*show_label*/
    l[2] && eo(l)
  );
  return i = new /*Icon*/
  l[0]({}), {
    c() {
      e = ms("button"), a && a.c(), t = Nc(), n = ms("div"), Ic(i.$$.fragment), Ct(n, "class", "svelte-1lrphxw"), Be(
        n,
        "small",
        /*size*/
        l[4] === "small"
      ), Be(
        n,
        "large",
        /*size*/
        l[4] === "large"
      ), Be(
        n,
        "medium",
        /*size*/
        l[4] === "medium"
      ), e.disabled = /*disabled*/
      l[7], Ct(
        e,
        "aria-label",
        /*label*/
        l[1]
      ), Ct(
        e,
        "aria-haspopup",
        /*hasPopup*/
        l[8]
      ), Ct(
        e,
        "title",
        /*label*/
        l[1]
      ), Ct(e, "class", "svelte-1lrphxw"), Be(
        e,
        "pending",
        /*pending*/
        l[3]
      ), Be(
        e,
        "padded",
        /*padded*/
        l[5]
      ), Be(
        e,
        "highlight",
        /*highlight*/
        l[6]
      ), Be(
        e,
        "transparent",
        /*transparent*/
        l[9]
      ), qn(e, "color", !/*disabled*/
      l[7] && /*_color*/
      l[12] ? (
        /*_color*/
        l[12]
      ) : "var(--block-label-text-color)"), qn(e, "--bg-color", /*disabled*/
      l[7] ? "auto" : (
        /*background*/
        l[10]
      )), qn(
        e,
        "margin-left",
        /*offset*/
        l[11] + "px"
      );
    },
    m(f, c) {
      er(f, e, c), a && a.m(e, null), hs(e, t), hs(e, n), Fc(i, n, null), s = !0, o || (r = jc(
        e,
        "click",
        /*click_handler*/
        l[14]
      ), o = !0);
    },
    p(f, [c]) {
      /*show_label*/
      f[2] ? a ? a.p(f, c) : (a = eo(f), a.c(), a.m(e, t)) : a && (a.d(1), a = null), (!s || c & /*size*/
      16) && Be(
        n,
        "small",
        /*size*/
        f[4] === "small"
      ), (!s || c & /*size*/
      16) && Be(
        n,
        "large",
        /*size*/
        f[4] === "large"
      ), (!s || c & /*size*/
      16) && Be(
        n,
        "medium",
        /*size*/
        f[4] === "medium"
      ), (!s || c & /*disabled*/
      128) && (e.disabled = /*disabled*/
      f[7]), (!s || c & /*label*/
      2) && Ct(
        e,
        "aria-label",
        /*label*/
        f[1]
      ), (!s || c & /*hasPopup*/
      256) && Ct(
        e,
        "aria-haspopup",
        /*hasPopup*/
        f[8]
      ), (!s || c & /*label*/
      2) && Ct(
        e,
        "title",
        /*label*/
        f[1]
      ), (!s || c & /*pending*/
      8) && Be(
        e,
        "pending",
        /*pending*/
        f[3]
      ), (!s || c & /*padded*/
      32) && Be(
        e,
        "padded",
        /*padded*/
        f[5]
      ), (!s || c & /*highlight*/
      64) && Be(
        e,
        "highlight",
        /*highlight*/
        f[6]
      ), (!s || c & /*transparent*/
      512) && Be(
        e,
        "transparent",
        /*transparent*/
        f[9]
      ), c & /*disabled, _color*/
      4224 && qn(e, "color", !/*disabled*/
      f[7] && /*_color*/
      f[12] ? (
        /*_color*/
        f[12]
      ) : "var(--block-label-text-color)"), c & /*disabled, background*/
      1152 && qn(e, "--bg-color", /*disabled*/
      f[7] ? "auto" : (
        /*background*/
        f[10]
      )), c & /*offset*/
      2048 && qn(
        e,
        "margin-left",
        /*offset*/
        f[11] + "px"
      );
    },
    i(f) {
      s || (Pc(i.$$.fragment, f), s = !0);
    },
    o(f) {
      Kc(i.$$.fragment, f), s = !1;
    },
    d(f) {
      f && $a(e), a && a.d(), Hc(i), o = !1, r();
    }
  };
}
function Gc(l, e, t) {
  let n, { Icon: i } = e, { label: s = "" } = e, { show_label: o = !1 } = e, { pending: r = !1 } = e, { size: a = "small" } = e, { padded: f = !0 } = e, { highlight: c = !1 } = e, { disabled: u = !1 } = e, { hasPopup: _ = !1 } = e, { color: d = "var(--block-label-text-color)" } = e, { transparent: m = !1 } = e, { background: h = "var(--background-fill-primary)" } = e, { offset: g = 0 } = e;
  function b(v) {
    Yc.call(this, l, v);
  }
  return l.$$set = (v) => {
    "Icon" in v && t(0, i = v.Icon), "label" in v && t(1, s = v.label), "show_label" in v && t(2, o = v.show_label), "pending" in v && t(3, r = v.pending), "size" in v && t(4, a = v.size), "padded" in v && t(5, f = v.padded), "highlight" in v && t(6, c = v.highlight), "disabled" in v && t(7, u = v.disabled), "hasPopup" in v && t(8, _ = v.hasPopup), "color" in v && t(13, d = v.color), "transparent" in v && t(9, m = v.transparent), "background" in v && t(10, h = v.background), "offset" in v && t(11, g = v.offset);
  }, l.$$.update = () => {
    l.$$.dirty & /*highlight, color*/
    8256 && t(12, n = c ? "var(--color-accent)" : d);
  }, [
    i,
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    m,
    h,
    g,
    n,
    d,
    b
  ];
}
class _i extends Xc {
  constructor(e) {
    super(), Tc(this, e, Gc, Zc, Uc, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 13,
      transparent: 9,
      background: 10,
      offset: 11
    });
  }
}
const {
  SvelteComponent: Jc,
  append: Qc,
  attr: Bi,
  binding_callbacks: xc,
  create_slot: $c,
  detach: eu,
  element: to,
  get_all_dirty_from_scope: tu,
  get_slot_changes: nu,
  init: lu,
  insert: iu,
  safe_not_equal: su,
  toggle_class: It,
  transition_in: ou,
  transition_out: au,
  update_slot_base: ru
} = window.__gradio__svelte__internal;
function fu(l) {
  let e, t, n;
  const i = (
    /*#slots*/
    l[5].default
  ), s = $c(
    i,
    l,
    /*$$scope*/
    l[4],
    null
  );
  return {
    c() {
      e = to("div"), t = to("div"), s && s.c(), Bi(t, "class", "icon svelte-3w3rth"), Bi(e, "class", "empty svelte-3w3rth"), Bi(e, "aria-label", "Empty value"), It(
        e,
        "small",
        /*size*/
        l[0] === "small"
      ), It(
        e,
        "large",
        /*size*/
        l[0] === "large"
      ), It(
        e,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), It(
        e,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    m(o, r) {
      iu(o, e, r), Qc(e, t), s && s.m(t, null), l[6](e), n = !0;
    },
    p(o, [r]) {
      s && s.p && (!n || r & /*$$scope*/
      16) && ru(
        s,
        i,
        o,
        /*$$scope*/
        o[4],
        n ? nu(
          i,
          /*$$scope*/
          o[4],
          r,
          null
        ) : tu(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!n || r & /*size*/
      1) && It(
        e,
        "small",
        /*size*/
        o[0] === "small"
      ), (!n || r & /*size*/
      1) && It(
        e,
        "large",
        /*size*/
        o[0] === "large"
      ), (!n || r & /*unpadded_box*/
      2) && It(
        e,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!n || r & /*parent_height*/
      8) && It(
        e,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      n || (ou(s, o), n = !0);
    },
    o(o) {
      au(s, o), n = !1;
    },
    d(o) {
      o && eu(e), s && s.d(o), l[6](null);
    }
  };
}
function cu(l, e, t) {
  let n, { $$slots: i = {}, $$scope: s } = e, { size: o = "small" } = e, { unpadded_box: r = !1 } = e, a;
  function f(u) {
    var _;
    if (!u) return !1;
    const { height: d } = u.getBoundingClientRect(), { height: m } = ((_ = u.parentElement) === null || _ === void 0 ? void 0 : _.getBoundingClientRect()) || { height: d };
    return d > m + 2;
  }
  function c(u) {
    xc[u ? "unshift" : "push"](() => {
      a = u, t(2, a);
    });
  }
  return l.$$set = (u) => {
    "size" in u && t(0, o = u.size), "unpadded_box" in u && t(1, r = u.unpadded_box), "$$scope" in u && t(4, s = u.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*el*/
    4 && t(3, n = f(a));
  }, [o, r, a, n, s, i, c];
}
class uu extends Jc {
  constructor(e) {
    super(), lu(this, e, cu, fu, su, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: _u,
  append: no,
  attr: De,
  detach: du,
  init: hu,
  insert: mu,
  noop: Di,
  safe_not_equal: gu,
  svg_element: qi
} = window.__gradio__svelte__internal;
function bu(l) {
  let e, t, n;
  return {
    c() {
      e = qi("svg"), t = qi("path"), n = qi("circle"), De(t, "d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"), De(n, "cx", "12"), De(n, "cy", "13"), De(n, "r", "4"), De(e, "xmlns", "http://www.w3.org/2000/svg"), De(e, "width", "100%"), De(e, "height", "100%"), De(e, "viewBox", "0 0 24 24"), De(e, "fill", "none"), De(e, "stroke", "currentColor"), De(e, "stroke-width", "1.5"), De(e, "stroke-linecap", "round"), De(e, "stroke-linejoin", "round"), De(e, "class", "feather feather-camera");
    },
    m(i, s) {
      mu(i, e, s), no(e, t), no(e, n);
    },
    p: Di,
    i: Di,
    o: Di,
    d(i) {
      i && du(e);
    }
  };
}
class wu extends _u {
  constructor(e) {
    super(), hu(this, e, null, bu, gu, {});
  }
}
const {
  SvelteComponent: vu,
  append: pu,
  attr: Qe,
  detach: ku,
  init: yu,
  insert: Cu,
  noop: Li,
  safe_not_equal: Su,
  svg_element: lo
} = window.__gradio__svelte__internal;
function zu(l) {
  let e, t;
  return {
    c() {
      e = lo("svg"), t = lo("circle"), Qe(t, "cx", "12"), Qe(t, "cy", "12"), Qe(t, "r", "10"), Qe(e, "xmlns", "http://www.w3.org/2000/svg"), Qe(e, "width", "100%"), Qe(e, "height", "100%"), Qe(e, "viewBox", "0 0 24 24"), Qe(e, "stroke-width", "1.5"), Qe(e, "stroke-linecap", "round"), Qe(e, "stroke-linejoin", "round"), Qe(e, "class", "feather feather-circle");
    },
    m(n, i) {
      Cu(n, e, i), pu(e, t);
    },
    p: Li,
    i: Li,
    o: Li,
    d(n) {
      n && ku(e);
    }
  };
}
class Bu extends vu {
  constructor(e) {
    super(), yu(this, e, null, zu, Su, {});
  }
}
const {
  SvelteComponent: Du,
  append: Mi,
  attr: xe,
  detach: qu,
  init: Lu,
  insert: Mu,
  noop: Ei,
  safe_not_equal: Eu,
  set_style: at,
  svg_element: Bl
} = window.__gradio__svelte__internal;
function Ru(l) {
  let e, t, n, i;
  return {
    c() {
      e = Bl("svg"), t = Bl("g"), n = Bl("path"), i = Bl("path"), xe(n, "d", "M18,6L6.087,17.913"), at(n, "fill", "none"), at(n, "fill-rule", "nonzero"), at(n, "stroke-width", "2px"), xe(t, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), xe(i, "d", "M4.364,4.364L19.636,19.636"), at(i, "fill", "none"), at(i, "fill-rule", "nonzero"), at(i, "stroke-width", "2px"), xe(e, "width", "100%"), xe(e, "height", "100%"), xe(e, "viewBox", "0 0 24 24"), xe(e, "version", "1.1"), xe(e, "xmlns", "http://www.w3.org/2000/svg"), xe(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), xe(e, "xml:space", "preserve"), xe(e, "stroke", "currentColor"), at(e, "fill-rule", "evenodd"), at(e, "clip-rule", "evenodd"), at(e, "stroke-linecap", "round"), at(e, "stroke-linejoin", "round");
    },
    m(s, o) {
      Mu(s, e, o), Mi(e, t), Mi(t, n), Mi(e, i);
    },
    p: Ei,
    i: Ei,
    o: Ei,
    d(s) {
      s && qu(e);
    }
  };
}
class tr extends Du {
  constructor(e) {
    super(), Lu(this, e, null, Ru, Eu, {});
  }
}
const {
  SvelteComponent: Au,
  append: Wu,
  attr: nl,
  detach: Xu,
  init: Yu,
  insert: Iu,
  noop: Ri,
  safe_not_equal: Hu,
  svg_element: io
} = window.__gradio__svelte__internal;
function Tu(l) {
  let e, t;
  return {
    c() {
      e = io("svg"), t = io("path"), nl(t, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), nl(t, "fill", "currentColor"), nl(e, "id", "icon"), nl(e, "xmlns", "http://www.w3.org/2000/svg"), nl(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Iu(n, e, i), Wu(e, t);
    },
    p: Ri,
    i: Ri,
    o: Ri,
    d(n) {
      n && Xu(e);
    }
  };
}
class ju extends Au {
  constructor(e) {
    super(), Yu(this, e, null, Tu, Hu, {});
  }
}
const {
  SvelteComponent: Fu,
  append: Uu,
  attr: Ln,
  detach: Vu,
  init: Nu,
  insert: Ou,
  noop: Ai,
  safe_not_equal: Pu,
  svg_element: so
} = window.__gradio__svelte__internal;
function Ku(l) {
  let e, t;
  return {
    c() {
      e = so("svg"), t = so("path"), Ln(t, "fill", "currentColor"), Ln(t, "d", "M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"), Ln(e, "xmlns", "http://www.w3.org/2000/svg"), Ln(e, "width", "100%"), Ln(e, "height", "100%"), Ln(e, "viewBox", "0 0 32 32");
    },
    m(n, i) {
      Ou(n, e, i), Uu(e, t);
    },
    p: Ai,
    i: Ai,
    o: Ai,
    d(n) {
      n && Vu(e);
    }
  };
}
class Zu extends Fu {
  constructor(e) {
    super(), Nu(this, e, null, Ku, Pu, {});
  }
}
const {
  SvelteComponent: Gu,
  append: Ju,
  attr: Mn,
  detach: Qu,
  init: xu,
  insert: $u,
  noop: Wi,
  safe_not_equal: e_,
  svg_element: oo
} = window.__gradio__svelte__internal;
function t_(l) {
  let e, t;
  return {
    c() {
      e = oo("svg"), t = oo("path"), Mn(t, "d", "M5 8l4 4 4-4z"), Mn(e, "class", "dropdown-arrow svelte-145leq6"), Mn(e, "xmlns", "http://www.w3.org/2000/svg"), Mn(e, "width", "100%"), Mn(e, "height", "100%"), Mn(e, "viewBox", "0 0 18 18");
    },
    m(n, i) {
      $u(n, e, i), Ju(e, t);
    },
    p: Wi,
    i: Wi,
    o: Wi,
    d(n) {
      n && Qu(e);
    }
  };
}
class Xs extends Gu {
  constructor(e) {
    super(), xu(this, e, null, t_, e_, {});
  }
}
const {
  SvelteComponent: n_,
  append: Xi,
  attr: de,
  detach: l_,
  init: i_,
  insert: s_,
  noop: Yi,
  safe_not_equal: o_,
  svg_element: Dl
} = window.__gradio__svelte__internal;
function a_(l) {
  let e, t, n, i;
  return {
    c() {
      e = Dl("svg"), t = Dl("rect"), n = Dl("circle"), i = Dl("polyline"), de(t, "x", "3"), de(t, "y", "3"), de(t, "width", "18"), de(t, "height", "18"), de(t, "rx", "2"), de(t, "ry", "2"), de(n, "cx", "8.5"), de(n, "cy", "8.5"), de(n, "r", "1.5"), de(i, "points", "21 15 16 10 5 21"), de(e, "xmlns", "http://www.w3.org/2000/svg"), de(e, "width", "100%"), de(e, "height", "100%"), de(e, "viewBox", "0 0 24 24"), de(e, "fill", "none"), de(e, "stroke", "currentColor"), de(e, "stroke-width", "1.5"), de(e, "stroke-linecap", "round"), de(e, "stroke-linejoin", "round"), de(e, "class", "feather feather-image");
    },
    m(s, o) {
      s_(s, e, o), Xi(e, t), Xi(e, n), Xi(e, i);
    },
    p: Yi,
    i: Yi,
    o: Yi,
    d(s) {
      s && l_(e);
    }
  };
}
let nr = class extends n_ {
  constructor(e) {
    super(), i_(this, e, null, a_, o_, {});
  }
};
const {
  SvelteComponent: r_,
  append: f_,
  attr: ql,
  detach: c_,
  init: u_,
  insert: __,
  noop: Ii,
  safe_not_equal: d_,
  svg_element: ao
} = window.__gradio__svelte__internal;
function h_(l) {
  let e, t;
  return {
    c() {
      e = ao("svg"), t = ao("path"), ql(t, "fill", "currentColor"), ql(t, "d", "M13.75 2a2.25 2.25 0 0 1 2.236 2.002V4h1.764A2.25 2.25 0 0 1 20 6.25V11h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h4.78a4 4 0 0 0 .505 1.5H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5M15 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524l3.494-3.494a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415l3.494-3.494a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 20 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"), ql(e, "xmlns", "http://www.w3.org/2000/svg"), ql(e, "viewBox", "0 0 24 24");
    },
    m(n, i) {
      __(n, e, i), f_(e, t);
    },
    p: Ii,
    i: Ii,
    o: Ii,
    d(n) {
      n && c_(e);
    }
  };
}
class lr extends r_ {
  constructor(e) {
    super(), u_(this, e, null, h_, d_, {});
  }
}
const {
  SvelteComponent: m_,
  append: Ll,
  attr: he,
  detach: g_,
  init: b_,
  insert: w_,
  noop: Hi,
  safe_not_equal: v_,
  svg_element: ll
} = window.__gradio__svelte__internal;
function p_(l) {
  let e, t, n, i, s;
  return {
    c() {
      e = ll("svg"), t = ll("path"), n = ll("path"), i = ll("line"), s = ll("line"), he(t, "d", "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"), he(n, "d", "M19 10v2a7 7 0 0 1-14 0v-2"), he(i, "x1", "12"), he(i, "y1", "19"), he(i, "x2", "12"), he(i, "y2", "23"), he(s, "x1", "8"), he(s, "y1", "23"), he(s, "x2", "16"), he(s, "y2", "23"), he(e, "xmlns", "http://www.w3.org/2000/svg"), he(e, "width", "100%"), he(e, "height", "100%"), he(e, "viewBox", "0 0 24 24"), he(e, "fill", "none"), he(e, "stroke", "currentColor"), he(e, "stroke-width", "2"), he(e, "stroke-linecap", "round"), he(e, "stroke-linejoin", "round"), he(e, "class", "feather feather-mic");
    },
    m(o, r) {
      w_(o, e, r), Ll(e, t), Ll(e, n), Ll(e, i), Ll(e, s);
    },
    p: Hi,
    i: Hi,
    o: Hi,
    d(o) {
      o && g_(e);
    }
  };
}
class k_ extends m_ {
  constructor(e) {
    super(), b_(this, e, null, p_, v_, {});
  }
}
const {
  SvelteComponent: y_,
  append: ro,
  attr: Ue,
  detach: C_,
  init: S_,
  insert: z_,
  noop: Ti,
  safe_not_equal: B_,
  set_style: D_,
  svg_element: ji
} = window.__gradio__svelte__internal;
function q_(l) {
  let e, t, n;
  return {
    c() {
      e = ji("svg"), t = ji("polyline"), n = ji("path"), Ue(t, "points", "1 4 1 10 7 10"), Ue(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ue(e, "xmlns", "http://www.w3.org/2000/svg"), Ue(e, "width", "100%"), Ue(e, "height", "100%"), Ue(e, "viewBox", "0 0 24 24"), Ue(e, "fill", "none"), Ue(e, "stroke", "currentColor"), Ue(e, "stroke-width", "2"), Ue(e, "stroke-linecap", "round"), Ue(e, "stroke-linejoin", "round"), Ue(e, "class", "feather feather-rotate-ccw"), D_(e, "transform", "rotateY(180deg)");
    },
    m(i, s) {
      z_(i, e, s), ro(e, t), ro(e, n);
    },
    p: Ti,
    i: Ti,
    o: Ti,
    d(i) {
      i && C_(e);
    }
  };
}
class L_ extends y_ {
  constructor(e) {
    super(), S_(this, e, null, q_, B_, {});
  }
}
const {
  SvelteComponent: M_,
  append: E_,
  attr: qe,
  detach: R_,
  init: A_,
  insert: W_,
  noop: Fi,
  safe_not_equal: X_,
  svg_element: fo
} = window.__gradio__svelte__internal;
function Y_(l) {
  let e, t;
  return {
    c() {
      e = fo("svg"), t = fo("rect"), qe(t, "x", "3"), qe(t, "y", "3"), qe(t, "width", "18"), qe(t, "height", "18"), qe(t, "rx", "2"), qe(t, "ry", "2"), qe(e, "xmlns", "http://www.w3.org/2000/svg"), qe(e, "width", "100%"), qe(e, "height", "100%"), qe(e, "viewBox", "0 0 24 24"), qe(e, "stroke-width", "1.5"), qe(e, "stroke-linecap", "round"), qe(e, "stroke-linejoin", "round"), qe(e, "class", "feather feather-square");
    },
    m(n, i) {
      W_(n, e, i), E_(e, t);
    },
    p: Fi,
    i: Fi,
    o: Fi,
    d(n) {
      n && R_(e);
    }
  };
}
class I_ extends M_ {
  constructor(e) {
    super(), A_(this, e, null, Y_, X_, {});
  }
}
const {
  SvelteComponent: H_,
  append: co,
  attr: Ve,
  detach: T_,
  init: j_,
  insert: F_,
  noop: Ui,
  safe_not_equal: U_,
  svg_element: Vi
} = window.__gradio__svelte__internal;
function V_(l) {
  let e, t, n;
  return {
    c() {
      e = Vi("svg"), t = Vi("polyline"), n = Vi("path"), Ve(t, "points", "1 4 1 10 7 10"), Ve(n, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), Ve(e, "xmlns", "http://www.w3.org/2000/svg"), Ve(e, "width", "100%"), Ve(e, "height", "100%"), Ve(e, "viewBox", "0 0 24 24"), Ve(e, "fill", "none"), Ve(e, "stroke", "currentColor"), Ve(e, "stroke-width", "2"), Ve(e, "stroke-linecap", "round"), Ve(e, "stroke-linejoin", "round"), Ve(e, "class", "feather feather-rotate-ccw");
    },
    m(i, s) {
      F_(i, e, s), co(e, t), co(e, n);
    },
    p: Ui,
    i: Ui,
    o: Ui,
    d(i) {
      i && T_(e);
    }
  };
}
class N_ extends H_ {
  constructor(e) {
    super(), j_(this, e, null, V_, U_, {});
  }
}
const {
  SvelteComponent: O_,
  append: Ni,
  attr: ye,
  detach: P_,
  init: K_,
  insert: Z_,
  noop: Oi,
  safe_not_equal: G_,
  svg_element: Ml
} = window.__gradio__svelte__internal;
function J_(l) {
  let e, t, n, i;
  return {
    c() {
      e = Ml("svg"), t = Ml("path"), n = Ml("polyline"), i = Ml("line"), ye(t, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), ye(n, "points", "17 8 12 3 7 8"), ye(i, "x1", "12"), ye(i, "y1", "3"), ye(i, "x2", "12"), ye(i, "y2", "15"), ye(e, "xmlns", "http://www.w3.org/2000/svg"), ye(e, "width", "90%"), ye(e, "height", "90%"), ye(e, "viewBox", "0 0 24 24"), ye(e, "fill", "none"), ye(e, "stroke", "currentColor"), ye(e, "stroke-width", "2"), ye(e, "stroke-linecap", "round"), ye(e, "stroke-linejoin", "round"), ye(e, "class", "feather feather-upload");
    },
    m(s, o) {
      Z_(s, e, o), Ni(e, t), Ni(e, n), Ni(e, i);
    },
    p: Oi,
    i: Oi,
    o: Oi,
    d(s) {
      s && P_(e);
    }
  };
}
let ir = class extends O_ {
  constructor(e) {
    super(), K_(this, e, null, J_, G_, {});
  }
};
const {
  SvelteComponent: Q_,
  append: uo,
  attr: Ht,
  detach: x_,
  init: $_,
  insert: ed,
  noop: Pi,
  safe_not_equal: td,
  svg_element: Ki
} = window.__gradio__svelte__internal;
function nd(l) {
  let e, t, n;
  return {
    c() {
      e = Ki("svg"), t = Ki("path"), n = Ki("path"), Ht(t, "fill", "currentColor"), Ht(t, "d", "M12 2c-4.963 0-9 4.038-9 9c0 3.328 1.82 6.232 4.513 7.79l-2.067 1.378A1 1 0 0 0 6 22h12a1 1 0 0 0 .555-1.832l-2.067-1.378C19.18 17.232 21 14.328 21 11c0-4.962-4.037-9-9-9zm0 16c-3.859 0-7-3.141-7-7c0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z"), Ht(n, "fill", "currentColor"), Ht(n, "d", "M12 6c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"), Ht(e, "xmlns", "http://www.w3.org/2000/svg"), Ht(e, "width", "100%"), Ht(e, "height", "100%"), Ht(e, "viewBox", "0 0 24 24");
    },
    m(i, s) {
      ed(i, e, s), uo(e, t), uo(e, n);
    },
    p: Pi,
    i: Pi,
    o: Pi,
    d(i) {
      i && x_(e);
    }
  };
}
let sr = class extends Q_ {
  constructor(e) {
    super(), $_(this, e, null, nd, td, {});
  }
};
const ld = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], _o = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
ld.reduce(
  (l, { color: e, primary: t, secondary: n }) => ({
    ...l,
    [e]: {
      primary: _o[e][t],
      secondary: _o[e][n]
    }
  }),
  {}
);
class Zl extends Error {
  constructor(e) {
    super(e), this.name = "ShareError";
  }
}
async function id(l, e) {
  var a;
  if (window.__gradio_space__ == null)
    throw new Zl("Must be on Spaces to share.");
  let t, n, i;
  t = sd(l), n = l.split(";")[0].split(":")[1], i = "file" + n.split("/")[1];
  const s = new File([t], i, { type: n }), o = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: s,
    headers: {
      "Content-Type": s.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!o.ok) {
    if ((a = o.headers.get("content-type")) != null && a.includes("application/json")) {
      const f = await o.json();
      throw new Zl(`Upload failed: ${f.error}`);
    }
    throw new Zl("Upload failed.");
  }
  return await o.text();
}
function sd(l) {
  for (var e = l.split(","), t = e[0].match(/:(.*?);/)[1], n = atob(e[1]), i = n.length, s = new Uint8Array(i); i--; )
    s[i] = n.charCodeAt(i);
  return new Blob([s], { type: t });
}
const {
  SvelteComponent: od,
  create_component: ad,
  destroy_component: rd,
  init: fd,
  mount_component: cd,
  safe_not_equal: ud,
  transition_in: _d,
  transition_out: dd
} = window.__gradio__svelte__internal, { createEventDispatcher: hd } = window.__gradio__svelte__internal;
function md(l) {
  let e, t;
  return e = new _i({
    props: {
      Icon: ju,
      label: (
        /*i18n*/
        l[2]("common.share")
      ),
      pending: (
        /*pending*/
        l[3]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    l[5]
  ), {
    c() {
      ad(e.$$.fragment);
    },
    m(n, i) {
      cd(e, n, i), t = !0;
    },
    p(n, [i]) {
      const s = {};
      i & /*i18n*/
      4 && (s.label = /*i18n*/
      n[2]("common.share")), i & /*pending*/
      8 && (s.pending = /*pending*/
      n[3]), e.$set(s);
    },
    i(n) {
      t || (_d(e.$$.fragment, n), t = !0);
    },
    o(n) {
      dd(e.$$.fragment, n), t = !1;
    },
    d(n) {
      rd(e, n);
    }
  };
}
function gd(l, e, t) {
  const n = hd();
  let { formatter: i } = e, { value: s } = e, { i18n: o } = e, r = !1;
  const a = async () => {
    try {
      t(3, r = !0);
      const f = await i(s);
      n("share", { description: f });
    } catch (f) {
      console.error(f);
      let c = f instanceof Zl ? f.message : "Share failed.";
      n("error", c);
    } finally {
      t(3, r = !1);
    }
  };
  return l.$$set = (f) => {
    "formatter" in f && t(0, i = f.formatter), "value" in f && t(1, s = f.value), "i18n" in f && t(2, o = f.i18n);
  }, [i, s, o, r, n, a];
}
class bd extends od {
  constructor(e) {
    super(), fd(this, e, gd, md, ud, { formatter: 0, value: 1, i18n: 2 });
  }
}
const {
  SvelteComponent: wd,
  append: fn,
  attr: gs,
  check_outros: vd,
  create_component: or,
  destroy_component: ar,
  detach: Gl,
  element: bs,
  group_outros: pd,
  init: kd,
  insert: Jl,
  mount_component: rr,
  safe_not_equal: yd,
  set_data: ws,
  space: vs,
  text: fl,
  toggle_class: ho,
  transition_in: $l,
  transition_out: ei
} = window.__gradio__svelte__internal;
function Cd(l) {
  let e, t;
  return e = new ir({}), {
    c() {
      or(e.$$.fragment);
    },
    m(n, i) {
      rr(e, n, i), t = !0;
    },
    i(n) {
      t || ($l(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ei(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ar(e, n);
    }
  };
}
function Sd(l) {
  let e, t;
  return e = new lr({}), {
    c() {
      or(e.$$.fragment);
    },
    m(n, i) {
      rr(e, n, i), t = !0;
    },
    i(n) {
      t || ($l(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ei(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ar(e, n);
    }
  };
}
function mo(l) {
  let e, t, n = (
    /*i18n*/
    l[1]("common.or") + ""
  ), i, s, o, r = (
    /*message*/
    (l[2] || /*i18n*/
    l[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      e = bs("span"), t = fl("- "), i = fl(n), s = fl(" -"), o = vs(), a = fl(r), gs(e, "class", "or svelte-kzcjhc");
    },
    m(f, c) {
      Jl(f, e, c), fn(e, t), fn(e, i), fn(e, s), Jl(f, o, c), Jl(f, a, c);
    },
    p(f, c) {
      c & /*i18n*/
      2 && n !== (n = /*i18n*/
      f[1]("common.or") + "") && ws(i, n), c & /*message, i18n*/
      6 && r !== (r = /*message*/
      (f[2] || /*i18n*/
      f[1]("upload_text.click_to_upload")) + "") && ws(a, r);
    },
    d(f) {
      f && (Gl(e), Gl(o), Gl(a));
    }
  };
}
function zd(l) {
  let e, t, n, i, s, o = (
    /*i18n*/
    l[1](
      /*defs*/
      l[5][
        /*type*/
        l[0]
      ] || /*defs*/
      l[5].file
    ) + ""
  ), r, a, f;
  const c = [Sd, Cd], u = [];
  function _(m, h) {
    return (
      /*type*/
      m[0] === "clipboard" ? 0 : 1
    );
  }
  n = _(l), i = u[n] = c[n](l);
  let d = (
    /*mode*/
    l[3] !== "short" && mo(l)
  );
  return {
    c() {
      e = bs("div"), t = bs("span"), i.c(), s = vs(), r = fl(o), a = vs(), d && d.c(), gs(t, "class", "icon-wrap svelte-kzcjhc"), ho(
        t,
        "hovered",
        /*hovered*/
        l[4]
      ), gs(e, "class", "wrap svelte-kzcjhc");
    },
    m(m, h) {
      Jl(m, e, h), fn(e, t), u[n].m(t, null), fn(e, s), fn(e, r), fn(e, a), d && d.m(e, null), f = !0;
    },
    p(m, [h]) {
      let g = n;
      n = _(m), n !== g && (pd(), ei(u[g], 1, 1, () => {
        u[g] = null;
      }), vd(), i = u[n], i || (i = u[n] = c[n](m), i.c()), $l(i, 1), i.m(t, null)), (!f || h & /*hovered*/
      16) && ho(
        t,
        "hovered",
        /*hovered*/
        m[4]
      ), (!f || h & /*i18n, type*/
      3) && o !== (o = /*i18n*/
      m[1](
        /*defs*/
        m[5][
          /*type*/
          m[0]
        ] || /*defs*/
        m[5].file
      ) + "") && ws(r, o), /*mode*/
      m[3] !== "short" ? d ? d.p(m, h) : (d = mo(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null);
    },
    i(m) {
      f || ($l(i), f = !0);
    },
    o(m) {
      ei(i), f = !1;
    },
    d(m) {
      m && Gl(e), u[n].d(), d && d.d();
    }
  };
}
function Bd(l, e, t) {
  let { type: n = "file" } = e, { i18n: i } = e, { message: s = void 0 } = e, { mode: o = "full" } = e, { hovered: r = !1 } = e;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv",
    gallery: "upload_text.drop_gallery",
    clipboard: "upload_text.paste_clipboard"
  };
  return l.$$set = (f) => {
    "type" in f && t(0, n = f.type), "i18n" in f && t(1, i = f.i18n), "message" in f && t(2, s = f.message), "mode" in f && t(3, o = f.mode), "hovered" in f && t(4, r = f.hovered);
  }, [n, i, s, o, r, a];
}
class fr extends wd {
  constructor(e) {
    super(), kd(this, e, Bd, zd, yd, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
const {
  SvelteComponent: Dd,
  append: Zi,
  attr: dt,
  check_outros: cl,
  create_component: di,
  destroy_component: hi,
  detach: On,
  element: yl,
  empty: qd,
  group_outros: ul,
  init: Ld,
  insert: Pn,
  listen: mi,
  mount_component: gi,
  safe_not_equal: Md,
  space: Gi,
  toggle_class: Gt,
  transition_in: we,
  transition_out: Le
} = window.__gradio__svelte__internal;
function go(l) {
  let e, t = (
    /*sources*/
    l[1].includes("upload")
  ), n, i = (
    /*sources*/
    l[1].includes("microphone")
  ), s, o = (
    /*sources*/
    l[1].includes("webcam")
  ), r, a = (
    /*sources*/
    l[1].includes("clipboard")
  ), f, c = t && bo(l), u = i && wo(l), _ = o && vo(l), d = a && po(l);
  return {
    c() {
      e = yl("span"), c && c.c(), n = Gi(), u && u.c(), s = Gi(), _ && _.c(), r = Gi(), d && d.c(), dt(e, "class", "source-selection svelte-1jp3vgd"), dt(e, "data-testid", "source-select");
    },
    m(m, h) {
      Pn(m, e, h), c && c.m(e, null), Zi(e, n), u && u.m(e, null), Zi(e, s), _ && _.m(e, null), Zi(e, r), d && d.m(e, null), f = !0;
    },
    p(m, h) {
      h & /*sources*/
      2 && (t = /*sources*/
      m[1].includes("upload")), t ? c ? (c.p(m, h), h & /*sources*/
      2 && we(c, 1)) : (c = bo(m), c.c(), we(c, 1), c.m(e, n)) : c && (ul(), Le(c, 1, 1, () => {
        c = null;
      }), cl()), h & /*sources*/
      2 && (i = /*sources*/
      m[1].includes("microphone")), i ? u ? (u.p(m, h), h & /*sources*/
      2 && we(u, 1)) : (u = wo(m), u.c(), we(u, 1), u.m(e, s)) : u && (ul(), Le(u, 1, 1, () => {
        u = null;
      }), cl()), h & /*sources*/
      2 && (o = /*sources*/
      m[1].includes("webcam")), o ? _ ? (_.p(m, h), h & /*sources*/
      2 && we(_, 1)) : (_ = vo(m), _.c(), we(_, 1), _.m(e, r)) : _ && (ul(), Le(_, 1, 1, () => {
        _ = null;
      }), cl()), h & /*sources*/
      2 && (a = /*sources*/
      m[1].includes("clipboard")), a ? d ? (d.p(m, h), h & /*sources*/
      2 && we(d, 1)) : (d = po(m), d.c(), we(d, 1), d.m(e, null)) : d && (ul(), Le(d, 1, 1, () => {
        d = null;
      }), cl());
    },
    i(m) {
      f || (we(c), we(u), we(_), we(d), f = !0);
    },
    o(m) {
      Le(c), Le(u), Le(_), Le(d), f = !1;
    },
    d(m) {
      m && On(e), c && c.d(), u && u.d(), _ && _.d(), d && d.d();
    }
  };
}
function bo(l) {
  let e, t, n, i, s;
  return t = new ir({}), {
    c() {
      e = yl("button"), di(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Upload file"), Gt(
        e,
        "selected",
        /*active_source*/
        l[0] === "upload" || !/*active_source*/
        l[0]
      );
    },
    m(o, r) {
      Pn(o, e, r), gi(t, e, null), n = !0, i || (s = mi(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Gt(
        e,
        "selected",
        /*active_source*/
        o[0] === "upload" || !/*active_source*/
        o[0]
      );
    },
    i(o) {
      n || (we(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && On(e), hi(t), i = !1, s();
    }
  };
}
function wo(l) {
  let e, t, n, i, s;
  return t = new k_({}), {
    c() {
      e = yl("button"), di(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Record audio"), Gt(
        e,
        "selected",
        /*active_source*/
        l[0] === "microphone"
      );
    },
    m(o, r) {
      Pn(o, e, r), gi(t, e, null), n = !0, i || (s = mi(
        e,
        "click",
        /*click_handler_1*/
        l[7]
      ), i = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Gt(
        e,
        "selected",
        /*active_source*/
        o[0] === "microphone"
      );
    },
    i(o) {
      n || (we(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && On(e), hi(t), i = !1, s();
    }
  };
}
function vo(l) {
  let e, t, n, i, s;
  return t = new sr({}), {
    c() {
      e = yl("button"), di(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Capture from camera"), Gt(
        e,
        "selected",
        /*active_source*/
        l[0] === "webcam"
      );
    },
    m(o, r) {
      Pn(o, e, r), gi(t, e, null), n = !0, i || (s = mi(
        e,
        "click",
        /*click_handler_2*/
        l[8]
      ), i = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Gt(
        e,
        "selected",
        /*active_source*/
        o[0] === "webcam"
      );
    },
    i(o) {
      n || (we(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && On(e), hi(t), i = !1, s();
    }
  };
}
function po(l) {
  let e, t, n, i, s;
  return t = new lr({}), {
    c() {
      e = yl("button"), di(t.$$.fragment), dt(e, "class", "icon svelte-1jp3vgd"), dt(e, "aria-label", "Paste from clipboard"), Gt(
        e,
        "selected",
        /*active_source*/
        l[0] === "clipboard"
      );
    },
    m(o, r) {
      Pn(o, e, r), gi(t, e, null), n = !0, i || (s = mi(
        e,
        "click",
        /*click_handler_3*/
        l[9]
      ), i = !0);
    },
    p(o, r) {
      (!n || r & /*active_source*/
      1) && Gt(
        e,
        "selected",
        /*active_source*/
        o[0] === "clipboard"
      );
    },
    i(o) {
      n || (we(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Le(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && On(e), hi(t), i = !1, s();
    }
  };
}
function Ed(l) {
  let e, t, n = (
    /*unique_sources*/
    l[2].length > 1 && go(l)
  );
  return {
    c() {
      n && n.c(), e = qd();
    },
    m(i, s) {
      n && n.m(i, s), Pn(i, e, s), t = !0;
    },
    p(i, [s]) {
      /*unique_sources*/
      i[2].length > 1 ? n ? (n.p(i, s), s & /*unique_sources*/
      4 && we(n, 1)) : (n = go(i), n.c(), we(n, 1), n.m(e.parentNode, e)) : n && (ul(), Le(n, 1, 1, () => {
        n = null;
      }), cl());
    },
    i(i) {
      t || (we(n), t = !0);
    },
    o(i) {
      Le(n), t = !1;
    },
    d(i) {
      i && On(e), n && n.d(i);
    }
  };
}
function Rd(l, e, t) {
  let n;
  var i = this && this.__awaiter || function(m, h, g, b) {
    function v(w) {
      return w instanceof g ? w : new g(function(k) {
        k(w);
      });
    }
    return new (g || (g = Promise))(function(w, k) {
      function B(z) {
        try {
          p(b.next(z));
        } catch (M) {
          k(M);
        }
      }
      function C(z) {
        try {
          p(b.throw(z));
        } catch (M) {
          k(M);
        }
      }
      function p(z) {
        z.done ? w(z.value) : v(z.value).then(B, C);
      }
      p((b = b.apply(m, h || [])).next());
    });
  };
  let { sources: s } = e, { active_source: o } = e, { handle_clear: r = () => {
  } } = e, { handle_select: a = () => {
  } } = e;
  function f(m) {
    return i(this, void 0, void 0, function* () {
      r(), t(0, o = m), a(m);
    });
  }
  const c = () => f("upload"), u = () => f("microphone"), _ = () => f("webcam"), d = () => f("clipboard");
  return l.$$set = (m) => {
    "sources" in m && t(1, s = m.sources), "active_source" in m && t(0, o = m.active_source), "handle_clear" in m && t(4, r = m.handle_clear), "handle_select" in m && t(5, a = m.handle_select);
  }, l.$$.update = () => {
    l.$$.dirty & /*sources*/
    2 && t(2, n = [...new Set(s)]);
  }, [
    o,
    s,
    n,
    f,
    r,
    a,
    c,
    u,
    _,
    d
  ];
}
class Ad extends Dd {
  constructor(e) {
    super(), Ld(this, e, Rd, Ed, Md, {
      sources: 1,
      active_source: 0,
      handle_clear: 4,
      handle_select: 5
    });
  }
}
function In(l) {
  let e = ["", "k", "M", "G", "T", "P", "E", "Z"], t = 0;
  for (; l > 1e3 && t < e.length - 1; )
    l /= 1e3, t++;
  let n = e[t];
  return (Number.isInteger(l) ? l : l.toFixed(1)) + n;
}
function Ql() {
}
const Wd = (l) => l;
function Xd(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
function ko(l) {
  const e = typeof l == "string" && l.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    l,
    "px"
  ];
}
const cr = typeof window < "u";
let yo = cr ? () => window.performance.now() : () => Date.now(), ur = cr ? (l) => requestAnimationFrame(l) : Ql;
const Nn = /* @__PURE__ */ new Set();
function _r(l) {
  Nn.forEach((e) => {
    e.c(l) || (Nn.delete(e), e.f());
  }), Nn.size !== 0 && ur(_r);
}
function Yd(l) {
  let e;
  return Nn.size === 0 && ur(_r), {
    promise: new Promise((t) => {
      Nn.add(e = { c: l, f: t });
    }),
    abort() {
      Nn.delete(e);
    }
  };
}
function Id(l) {
  const e = l - 1;
  return e * e * e + 1;
}
function Hd(l, { delay: e = 0, duration: t = 400, easing: n = Wd } = {}) {
  const i = +getComputedStyle(l).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (s) => `opacity: ${s * i}`
  };
}
function Co(l, { delay: e = 0, duration: t = 400, easing: n = Id, x: i = 0, y: s = 0, opacity: o = 0 } = {}) {
  const r = getComputedStyle(l), a = +r.opacity, f = r.transform === "none" ? "" : r.transform, c = a * (1 - o), [u, _] = ko(i), [d, m] = ko(s);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (h, g) => `
			transform: ${f} translate(${(1 - h) * u}${_}, ${(1 - h) * d}${m});
			opacity: ${a - c * g}`
  };
}
const En = [];
function Td(l, e = Ql) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(r) {
    if (Xd(l, r) && (l = r, t)) {
      const a = !En.length;
      for (const f of n)
        f[1](), En.push(f, l);
      if (a) {
        for (let f = 0; f < En.length; f += 2)
          En[f][0](En[f + 1]);
        En.length = 0;
      }
    }
  }
  function s(r) {
    i(r(l));
  }
  function o(r, a = Ql) {
    const f = [r, a];
    return n.add(f), n.size === 1 && (t = e(i, s) || Ql), r(l), () => {
      n.delete(f), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function So(l) {
  return Object.prototype.toString.call(l) === "[object Date]";
}
function ps(l, e, t, n) {
  if (typeof t == "number" || So(t)) {
    const i = n - t, s = (t - e) / (l.dt || 1 / 60), o = l.opts.stiffness * i, r = l.opts.damping * s, a = (o - r) * l.inv_mass, f = (s + a) * l.dt;
    return Math.abs(f) < l.opts.precision && Math.abs(i) < l.opts.precision ? n : (l.settled = !1, So(t) ? new Date(t.getTime() + f) : t + f);
  } else {
    if (Array.isArray(t))
      return t.map(
        (i, s) => ps(l, e[s], t[s], n[s])
      );
    if (typeof t == "object") {
      const i = {};
      for (const s in t)
        i[s] = ps(l, e[s], t[s], n[s]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof t} values`);
  }
}
function zo(l, e = {}) {
  const t = Td(l), { stiffness: n = 0.15, damping: i = 0.8, precision: s = 0.01 } = e;
  let o, r, a, f = l, c = l, u = 1, _ = 0, d = !1;
  function m(g, b = {}) {
    c = g;
    const v = a = {};
    return l == null || b.hard || h.stiffness >= 1 && h.damping >= 1 ? (d = !0, o = yo(), f = g, t.set(l = c), Promise.resolve()) : (b.soft && (_ = 1 / ((b.soft === !0 ? 0.5 : +b.soft) * 60), u = 0), r || (o = yo(), d = !1, r = Yd((w) => {
      if (d)
        return d = !1, r = null, !1;
      u = Math.min(u + _, 1);
      const k = {
        inv_mass: u,
        opts: h,
        settled: !0,
        dt: (w - o) * 60 / 1e3
      }, B = ps(k, f, l, c);
      return o = w, f = l, t.set(l = B), k.settled && (r = null), !k.settled;
    })), new Promise((w) => {
      r.promise.then(() => {
        v === a && w();
      });
    }));
  }
  const h = {
    set: m,
    update: (g, b) => m(g(c, l), b),
    subscribe: t.subscribe,
    stiffness: n,
    damping: i,
    precision: s
  };
  return h;
}
const {
  SvelteComponent: jd,
  append: $e,
  attr: K,
  component_subscribe: Bo,
  detach: Fd,
  element: Ud,
  init: Vd,
  insert: Nd,
  noop: Do,
  safe_not_equal: Od,
  set_style: El,
  svg_element: et,
  toggle_class: qo
} = window.__gradio__svelte__internal, { onMount: Pd } = window.__gradio__svelte__internal;
function Kd(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _;
  return {
    c() {
      e = Ud("div"), t = et("svg"), n = et("g"), i = et("path"), s = et("path"), o = et("path"), r = et("path"), a = et("g"), f = et("path"), c = et("path"), u = et("path"), _ = et("path"), K(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), K(i, "fill", "#FF7C00"), K(i, "fill-opacity", "0.4"), K(i, "class", "svelte-43sxxs"), K(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), K(s, "fill", "#FF7C00"), K(s, "class", "svelte-43sxxs"), K(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), K(o, "fill", "#FF7C00"), K(o, "fill-opacity", "0.4"), K(o, "class", "svelte-43sxxs"), K(r, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), K(r, "fill", "#FF7C00"), K(r, "class", "svelte-43sxxs"), El(n, "transform", "translate(" + /*$top*/
      l[1][0] + "px, " + /*$top*/
      l[1][1] + "px)"), K(f, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), K(f, "fill", "#FF7C00"), K(f, "fill-opacity", "0.4"), K(f, "class", "svelte-43sxxs"), K(c, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), K(c, "fill", "#FF7C00"), K(c, "class", "svelte-43sxxs"), K(u, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), K(u, "fill", "#FF7C00"), K(u, "fill-opacity", "0.4"), K(u, "class", "svelte-43sxxs"), K(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), K(_, "fill", "#FF7C00"), K(_, "class", "svelte-43sxxs"), El(a, "transform", "translate(" + /*$bottom*/
      l[2][0] + "px, " + /*$bottom*/
      l[2][1] + "px)"), K(t, "viewBox", "-1200 -1200 3000 3000"), K(t, "fill", "none"), K(t, "xmlns", "http://www.w3.org/2000/svg"), K(t, "class", "svelte-43sxxs"), K(e, "class", "svelte-43sxxs"), qo(
        e,
        "margin",
        /*margin*/
        l[0]
      );
    },
    m(d, m) {
      Nd(d, e, m), $e(e, t), $e(t, n), $e(n, i), $e(n, s), $e(n, o), $e(n, r), $e(t, a), $e(a, f), $e(a, c), $e(a, u), $e(a, _);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && El(n, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && El(a, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && qo(
        e,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: Do,
    o: Do,
    d(d) {
      d && Fd(e);
    }
  };
}
function Zd(l, e, t) {
  let n, i;
  var s = this && this.__awaiter || function(d, m, h, g) {
    function b(v) {
      return v instanceof h ? v : new h(function(w) {
        w(v);
      });
    }
    return new (h || (h = Promise))(function(v, w) {
      function k(p) {
        try {
          C(g.next(p));
        } catch (z) {
          w(z);
        }
      }
      function B(p) {
        try {
          C(g.throw(p));
        } catch (z) {
          w(z);
        }
      }
      function C(p) {
        p.done ? v(p.value) : b(p.value).then(k, B);
      }
      C((g = g.apply(d, m || [])).next());
    });
  };
  let { margin: o = !0 } = e;
  const r = zo([0, 0]);
  Bo(l, r, (d) => t(1, n = d));
  const a = zo([0, 0]);
  Bo(l, a, (d) => t(2, i = d));
  let f;
  function c() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 140]), a.set([-125, -140])]), yield Promise.all([r.set([-125, 140]), a.set([125, -140])]), yield Promise.all([r.set([-125, 0]), a.set([125, -0])]), yield Promise.all([r.set([125, 0]), a.set([-125, 0])]);
    });
  }
  function u() {
    return s(this, void 0, void 0, function* () {
      yield c(), f || u();
    });
  }
  function _() {
    return s(this, void 0, void 0, function* () {
      yield Promise.all([r.set([125, 0]), a.set([-125, 0])]), u();
    });
  }
  return Pd(() => (_(), () => f = !0)), l.$$set = (d) => {
    "margin" in d && t(0, o = d.margin);
  }, [o, n, i, r, a];
}
class Gd extends jd {
  constructor(e) {
    super(), Vd(this, e, Zd, Kd, Od, { margin: 0 });
  }
}
const {
  SvelteComponent: Jd,
  append: cn,
  attr: it,
  binding_callbacks: Lo,
  check_outros: ks,
  create_component: dr,
  create_slot: hr,
  destroy_component: mr,
  destroy_each: gr,
  detach: U,
  element: ut,
  empty: Kn,
  ensure_array_like: ti,
  get_all_dirty_from_scope: br,
  get_slot_changes: wr,
  group_outros: ys,
  init: Qd,
  insert: V,
  mount_component: vr,
  noop: Cs,
  safe_not_equal: xd,
  set_data: Ze,
  set_style: Kt,
  space: Ke,
  text: ae,
  toggle_class: Pe,
  transition_in: lt,
  transition_out: _t,
  update_slot_base: pr
} = window.__gradio__svelte__internal, { tick: $d } = window.__gradio__svelte__internal, { onDestroy: e1 } = window.__gradio__svelte__internal, { createEventDispatcher: t1 } = window.__gradio__svelte__internal, n1 = (l) => ({}), Mo = (l) => ({}), l1 = (l) => ({}), Eo = (l) => ({});
function Ro(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n[43] = t, n;
}
function Ao(l, e, t) {
  const n = l.slice();
  return n[41] = e[t], n;
}
function i1(l) {
  let e, t, n, i, s = (
    /*i18n*/
    l[1]("common.error") + ""
  ), o, r, a;
  t = new _i({
    props: {
      Icon: tr,
      label: (
        /*i18n*/
        l[1]("common.clear")
      ),
      disabled: !1
    }
  }), t.$on(
    "click",
    /*click_handler*/
    l[32]
  );
  const f = (
    /*#slots*/
    l[30].error
  ), c = hr(
    f,
    l,
    /*$$scope*/
    l[29],
    Mo
  );
  return {
    c() {
      e = ut("div"), dr(t.$$.fragment), n = Ke(), i = ut("span"), o = ae(s), r = Ke(), c && c.c(), it(e, "class", "clear-status svelte-16nch4a"), it(i, "class", "error svelte-16nch4a");
    },
    m(u, _) {
      V(u, e, _), vr(t, e, null), V(u, n, _), V(u, i, _), cn(i, o), V(u, r, _), c && c.m(u, _), a = !0;
    },
    p(u, _) {
      const d = {};
      _[0] & /*i18n*/
      2 && (d.label = /*i18n*/
      u[1]("common.clear")), t.$set(d), (!a || _[0] & /*i18n*/
      2) && s !== (s = /*i18n*/
      u[1]("common.error") + "") && Ze(o, s), c && c.p && (!a || _[0] & /*$$scope*/
      536870912) && pr(
        c,
        f,
        u,
        /*$$scope*/
        u[29],
        a ? wr(
          f,
          /*$$scope*/
          u[29],
          _,
          n1
        ) : br(
          /*$$scope*/
          u[29]
        ),
        Mo
      );
    },
    i(u) {
      a || (lt(t.$$.fragment, u), lt(c, u), a = !0);
    },
    o(u) {
      _t(t.$$.fragment, u), _t(c, u), a = !1;
    },
    d(u) {
      u && (U(e), U(n), U(i), U(r)), mr(t), c && c.d(u);
    }
  };
}
function s1(l) {
  let e, t, n, i, s, o, r, a, f, c = (
    /*variant*/
    l[8] === "default" && /*show_eta_bar*/
    l[18] && /*show_progress*/
    l[6] === "full" && Wo(l)
  );
  function u(w, k) {
    if (
      /*progress*/
      w[7]
    ) return r1;
    if (
      /*queue_position*/
      w[2] !== null && /*queue_size*/
      w[3] !== void 0 && /*queue_position*/
      w[2] >= 0
    ) return a1;
    if (
      /*queue_position*/
      w[2] === 0
    ) return o1;
  }
  let _ = u(l), d = _ && _(l), m = (
    /*timer*/
    l[5] && Io(l)
  );
  const h = [_1, u1], g = [];
  function b(w, k) {
    return (
      /*last_progress_level*/
      w[15] != null ? 0 : (
        /*show_progress*/
        w[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = b(l)) && (o = g[s] = h[s](l));
  let v = !/*timer*/
  l[5] && No(l);
  return {
    c() {
      c && c.c(), e = Ke(), t = ut("div"), d && d.c(), n = Ke(), m && m.c(), i = Ke(), o && o.c(), r = Ke(), v && v.c(), a = Kn(), it(t, "class", "progress-text svelte-16nch4a"), Pe(
        t,
        "meta-text-center",
        /*variant*/
        l[8] === "center"
      ), Pe(
        t,
        "meta-text",
        /*variant*/
        l[8] === "default"
      );
    },
    m(w, k) {
      c && c.m(w, k), V(w, e, k), V(w, t, k), d && d.m(t, null), cn(t, n), m && m.m(t, null), V(w, i, k), ~s && g[s].m(w, k), V(w, r, k), v && v.m(w, k), V(w, a, k), f = !0;
    },
    p(w, k) {
      /*variant*/
      w[8] === "default" && /*show_eta_bar*/
      w[18] && /*show_progress*/
      w[6] === "full" ? c ? c.p(w, k) : (c = Wo(w), c.c(), c.m(e.parentNode, e)) : c && (c.d(1), c = null), _ === (_ = u(w)) && d ? d.p(w, k) : (d && d.d(1), d = _ && _(w), d && (d.c(), d.m(t, n))), /*timer*/
      w[5] ? m ? m.p(w, k) : (m = Io(w), m.c(), m.m(t, null)) : m && (m.d(1), m = null), (!f || k[0] & /*variant*/
      256) && Pe(
        t,
        "meta-text-center",
        /*variant*/
        w[8] === "center"
      ), (!f || k[0] & /*variant*/
      256) && Pe(
        t,
        "meta-text",
        /*variant*/
        w[8] === "default"
      );
      let B = s;
      s = b(w), s === B ? ~s && g[s].p(w, k) : (o && (ys(), _t(g[B], 1, 1, () => {
        g[B] = null;
      }), ks()), ~s ? (o = g[s], o ? o.p(w, k) : (o = g[s] = h[s](w), o.c()), lt(o, 1), o.m(r.parentNode, r)) : o = null), /*timer*/
      w[5] ? v && (ys(), _t(v, 1, 1, () => {
        v = null;
      }), ks()) : v ? (v.p(w, k), k[0] & /*timer*/
      32 && lt(v, 1)) : (v = No(w), v.c(), lt(v, 1), v.m(a.parentNode, a));
    },
    i(w) {
      f || (lt(o), lt(v), f = !0);
    },
    o(w) {
      _t(o), _t(v), f = !1;
    },
    d(w) {
      w && (U(e), U(t), U(i), U(r), U(a)), c && c.d(w), d && d.d(), m && m.d(), ~s && g[s].d(w), v && v.d(w);
    }
  };
}
function Wo(l) {
  let e, t = `translateX(${/*eta_level*/
  (l[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      e = ut("div"), it(e, "class", "eta-bar svelte-16nch4a"), Kt(e, "transform", t);
    },
    m(n, i) {
      V(n, e, i);
    },
    p(n, i) {
      i[0] & /*eta_level*/
      131072 && t !== (t = `translateX(${/*eta_level*/
      (n[17] || 0) * 100 - 100}%)`) && Kt(e, "transform", t);
    },
    d(n) {
      n && U(e);
    }
  };
}
function o1(l) {
  let e;
  return {
    c() {
      e = ae("processing |");
    },
    m(t, n) {
      V(t, e, n);
    },
    p: Cs,
    d(t) {
      t && U(e);
    }
  };
}
function a1(l) {
  let e, t = (
    /*queue_position*/
    l[2] + 1 + ""
  ), n, i, s, o;
  return {
    c() {
      e = ae("queue: "), n = ae(t), i = ae("/"), s = ae(
        /*queue_size*/
        l[3]
      ), o = ae(" |");
    },
    m(r, a) {
      V(r, e, a), V(r, n, a), V(r, i, a), V(r, s, a), V(r, o, a);
    },
    p(r, a) {
      a[0] & /*queue_position*/
      4 && t !== (t = /*queue_position*/
      r[2] + 1 + "") && Ze(n, t), a[0] & /*queue_size*/
      8 && Ze(
        s,
        /*queue_size*/
        r[3]
      );
    },
    d(r) {
      r && (U(e), U(n), U(i), U(s), U(o));
    }
  };
}
function r1(l) {
  let e, t = ti(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Yo(Ao(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Kn();
    },
    m(i, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(i, s);
      V(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      128) {
        t = ti(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Ao(i, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Yo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && U(e), gr(n, i);
    }
  };
}
function Xo(l) {
  let e, t = (
    /*p*/
    l[41].unit + ""
  ), n, i, s = " ", o;
  function r(c, u) {
    return (
      /*p*/
      c[41].length != null ? c1 : f1
    );
  }
  let a = r(l), f = a(l);
  return {
    c() {
      f.c(), e = Ke(), n = ae(t), i = ae(" | "), o = ae(s);
    },
    m(c, u) {
      f.m(c, u), V(c, e, u), V(c, n, u), V(c, i, u), V(c, o, u);
    },
    p(c, u) {
      a === (a = r(c)) && f ? f.p(c, u) : (f.d(1), f = a(c), f && (f.c(), f.m(e.parentNode, e))), u[0] & /*progress*/
      128 && t !== (t = /*p*/
      c[41].unit + "") && Ze(n, t);
    },
    d(c) {
      c && (U(e), U(n), U(i), U(o)), f.d(c);
    }
  };
}
function f1(l) {
  let e = In(
    /*p*/
    l[41].index || 0
  ) + "", t;
  return {
    c() {
      t = ae(e);
    },
    m(n, i) {
      V(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = In(
        /*p*/
        n[41].index || 0
      ) + "") && Ze(t, e);
    },
    d(n) {
      n && U(t);
    }
  };
}
function c1(l) {
  let e = In(
    /*p*/
    l[41].index || 0
  ) + "", t, n, i = In(
    /*p*/
    l[41].length
  ) + "", s;
  return {
    c() {
      t = ae(e), n = ae("/"), s = ae(i);
    },
    m(o, r) {
      V(o, t, r), V(o, n, r), V(o, s, r);
    },
    p(o, r) {
      r[0] & /*progress*/
      128 && e !== (e = In(
        /*p*/
        o[41].index || 0
      ) + "") && Ze(t, e), r[0] & /*progress*/
      128 && i !== (i = In(
        /*p*/
        o[41].length
      ) + "") && Ze(s, i);
    },
    d(o) {
      o && (U(t), U(n), U(s));
    }
  };
}
function Yo(l) {
  let e, t = (
    /*p*/
    l[41].index != null && Xo(l)
  );
  return {
    c() {
      t && t.c(), e = Kn();
    },
    m(n, i) {
      t && t.m(n, i), V(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].index != null ? t ? t.p(n, i) : (t = Xo(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && U(e), t && t.d(n);
    }
  };
}
function Io(l) {
  let e, t = (
    /*eta*/
    l[0] ? `/${/*formatted_eta*/
    l[19]}` : ""
  ), n, i;
  return {
    c() {
      e = ae(
        /*formatted_timer*/
        l[20]
      ), n = ae(t), i = ae("s");
    },
    m(s, o) {
      V(s, e, o), V(s, n, o), V(s, i, o);
    },
    p(s, o) {
      o[0] & /*formatted_timer*/
      1048576 && Ze(
        e,
        /*formatted_timer*/
        s[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && t !== (t = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && Ze(n, t);
    },
    d(s) {
      s && (U(e), U(n), U(i));
    }
  };
}
function u1(l) {
  let e, t;
  return e = new Gd({
    props: { margin: (
      /*variant*/
      l[8] === "default"
    ) }
  }), {
    c() {
      dr(e.$$.fragment);
    },
    m(n, i) {
      vr(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*variant*/
      256 && (s.margin = /*variant*/
      n[8] === "default"), e.$set(s);
    },
    i(n) {
      t || (lt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _t(e.$$.fragment, n), t = !1;
    },
    d(n) {
      mr(e, n);
    }
  };
}
function _1(l) {
  let e, t, n, i, s, o = `${/*last_progress_level*/
  l[15] * 100}%`, r = (
    /*progress*/
    l[7] != null && Ho(l)
  );
  return {
    c() {
      e = ut("div"), t = ut("div"), r && r.c(), n = Ke(), i = ut("div"), s = ut("div"), it(t, "class", "progress-level-inner svelte-16nch4a"), it(s, "class", "progress-bar svelte-16nch4a"), Kt(s, "width", o), it(i, "class", "progress-bar-wrap svelte-16nch4a"), it(e, "class", "progress-level svelte-16nch4a");
    },
    m(a, f) {
      V(a, e, f), cn(e, t), r && r.m(t, null), cn(e, n), cn(e, i), cn(i, s), l[31](s);
    },
    p(a, f) {
      /*progress*/
      a[7] != null ? r ? r.p(a, f) : (r = Ho(a), r.c(), r.m(t, null)) : r && (r.d(1), r = null), f[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && Kt(s, "width", o);
    },
    i: Cs,
    o: Cs,
    d(a) {
      a && U(e), r && r.d(), l[31](null);
    }
  };
}
function Ho(l) {
  let e, t = ti(
    /*progress*/
    l[7]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Vo(Ro(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = Kn();
    },
    m(i, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(i, s);
      V(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        t = ti(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = Ro(i, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = Vo(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && U(e), gr(n, i);
    }
  };
}
function To(l) {
  let e, t, n, i, s = (
    /*i*/
    l[43] !== 0 && d1()
  ), o = (
    /*p*/
    l[41].desc != null && jo(l)
  ), r = (
    /*p*/
    l[41].desc != null && /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null && Fo()
  ), a = (
    /*progress_level*/
    l[14] != null && Uo(l)
  );
  return {
    c() {
      s && s.c(), e = Ke(), o && o.c(), t = Ke(), r && r.c(), n = Ke(), a && a.c(), i = Kn();
    },
    m(f, c) {
      s && s.m(f, c), V(f, e, c), o && o.m(f, c), V(f, t, c), r && r.m(f, c), V(f, n, c), a && a.m(f, c), V(f, i, c);
    },
    p(f, c) {
      /*p*/
      f[41].desc != null ? o ? o.p(f, c) : (o = jo(f), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), /*p*/
      f[41].desc != null && /*progress_level*/
      f[14] && /*progress_level*/
      f[14][
        /*i*/
        f[43]
      ] != null ? r || (r = Fo(), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), /*progress_level*/
      f[14] != null ? a ? a.p(f, c) : (a = Uo(f), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    d(f) {
      f && (U(e), U(t), U(n), U(i)), s && s.d(f), o && o.d(f), r && r.d(f), a && a.d(f);
    }
  };
}
function d1(l) {
  let e;
  return {
    c() {
      e = ae(" /");
    },
    m(t, n) {
      V(t, e, n);
    },
    d(t) {
      t && U(e);
    }
  };
}
function jo(l) {
  let e = (
    /*p*/
    l[41].desc + ""
  ), t;
  return {
    c() {
      t = ae(e);
    },
    m(n, i) {
      V(n, t, i);
    },
    p(n, i) {
      i[0] & /*progress*/
      128 && e !== (e = /*p*/
      n[41].desc + "") && Ze(t, e);
    },
    d(n) {
      n && U(t);
    }
  };
}
function Fo(l) {
  let e;
  return {
    c() {
      e = ae("-");
    },
    m(t, n) {
      V(t, e, n);
    },
    d(t) {
      t && U(e);
    }
  };
}
function Uo(l) {
  let e = (100 * /*progress_level*/
  (l[14][
    /*i*/
    l[43]
  ] || 0)).toFixed(1) + "", t, n;
  return {
    c() {
      t = ae(e), n = ae("%");
    },
    m(i, s) {
      V(i, t, s), V(i, n, s);
    },
    p(i, s) {
      s[0] & /*progress_level*/
      16384 && e !== (e = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[43]
      ] || 0)).toFixed(1) + "") && Ze(t, e);
    },
    d(i) {
      i && (U(t), U(n));
    }
  };
}
function Vo(l) {
  let e, t = (
    /*p*/
    (l[41].desc != null || /*progress_level*/
    l[14] && /*progress_level*/
    l[14][
      /*i*/
      l[43]
    ] != null) && To(l)
  );
  return {
    c() {
      t && t.c(), e = Kn();
    },
    m(n, i) {
      t && t.m(n, i), V(n, e, i);
    },
    p(n, i) {
      /*p*/
      n[41].desc != null || /*progress_level*/
      n[14] && /*progress_level*/
      n[14][
        /*i*/
        n[43]
      ] != null ? t ? t.p(n, i) : (t = To(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && U(e), t && t.d(n);
    }
  };
}
function No(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[30]["additional-loading-text"]
  ), o = hr(
    s,
    l,
    /*$$scope*/
    l[29],
    Eo
  );
  return {
    c() {
      e = ut("p"), t = ae(
        /*loading_text*/
        l[9]
      ), n = Ke(), o && o.c(), it(e, "class", "loading svelte-16nch4a");
    },
    m(r, a) {
      V(r, e, a), cn(e, t), V(r, n, a), o && o.m(r, a), i = !0;
    },
    p(r, a) {
      (!i || a[0] & /*loading_text*/
      512) && Ze(
        t,
        /*loading_text*/
        r[9]
      ), o && o.p && (!i || a[0] & /*$$scope*/
      536870912) && pr(
        o,
        s,
        r,
        /*$$scope*/
        r[29],
        i ? wr(
          s,
          /*$$scope*/
          r[29],
          a,
          l1
        ) : br(
          /*$$scope*/
          r[29]
        ),
        Eo
      );
    },
    i(r) {
      i || (lt(o, r), i = !0);
    },
    o(r) {
      _t(o, r), i = !1;
    },
    d(r) {
      r && (U(e), U(n)), o && o.d(r);
    }
  };
}
function h1(l) {
  let e, t, n, i, s;
  const o = [s1, i1], r = [];
  function a(f, c) {
    return (
      /*status*/
      f[4] === "pending" ? 0 : (
        /*status*/
        f[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(t = a(l)) && (n = r[t] = o[t](l)), {
    c() {
      e = ut("div"), n && n.c(), it(e, "class", i = "wrap " + /*variant*/
      l[8] + " " + /*show_progress*/
      l[6] + " svelte-16nch4a"), Pe(e, "hide", !/*status*/
      l[4] || /*status*/
      l[4] === "complete" || /*show_progress*/
      l[6] === "hidden"), Pe(
        e,
        "translucent",
        /*variant*/
        l[8] === "center" && /*status*/
        (l[4] === "pending" || /*status*/
        l[4] === "error") || /*translucent*/
        l[11] || /*show_progress*/
        l[6] === "minimal"
      ), Pe(
        e,
        "generating",
        /*status*/
        l[4] === "generating"
      ), Pe(
        e,
        "border",
        /*border*/
        l[12]
      ), Kt(
        e,
        "position",
        /*absolute*/
        l[10] ? "absolute" : "static"
      ), Kt(
        e,
        "padding",
        /*absolute*/
        l[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(f, c) {
      V(f, e, c), ~t && r[t].m(e, null), l[33](e), s = !0;
    },
    p(f, c) {
      let u = t;
      t = a(f), t === u ? ~t && r[t].p(f, c) : (n && (ys(), _t(r[u], 1, 1, () => {
        r[u] = null;
      }), ks()), ~t ? (n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), lt(n, 1), n.m(e, null)) : n = null), (!s || c[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      f[8] + " " + /*show_progress*/
      f[6] + " svelte-16nch4a")) && it(e, "class", i), (!s || c[0] & /*variant, show_progress, status, show_progress*/
      336) && Pe(e, "hide", !/*status*/
      f[4] || /*status*/
      f[4] === "complete" || /*show_progress*/
      f[6] === "hidden"), (!s || c[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Pe(
        e,
        "translucent",
        /*variant*/
        f[8] === "center" && /*status*/
        (f[4] === "pending" || /*status*/
        f[4] === "error") || /*translucent*/
        f[11] || /*show_progress*/
        f[6] === "minimal"
      ), (!s || c[0] & /*variant, show_progress, status*/
      336) && Pe(
        e,
        "generating",
        /*status*/
        f[4] === "generating"
      ), (!s || c[0] & /*variant, show_progress, border*/
      4416) && Pe(
        e,
        "border",
        /*border*/
        f[12]
      ), c[0] & /*absolute*/
      1024 && Kt(
        e,
        "position",
        /*absolute*/
        f[10] ? "absolute" : "static"
      ), c[0] & /*absolute*/
      1024 && Kt(
        e,
        "padding",
        /*absolute*/
        f[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(f) {
      s || (lt(n), s = !0);
    },
    o(f) {
      _t(n), s = !1;
    },
    d(f) {
      f && U(e), ~t && r[t].d(), l[33](null);
    }
  };
}
var m1 = function(l, e, t, n) {
  function i(s) {
    return s instanceof t ? s : new t(function(o) {
      o(s);
    });
  }
  return new (t || (t = Promise))(function(s, o) {
    function r(c) {
      try {
        f(n.next(c));
      } catch (u) {
        o(u);
      }
    }
    function a(c) {
      try {
        f(n.throw(c));
      } catch (u) {
        o(u);
      }
    }
    function f(c) {
      c.done ? s(c.value) : i(c.value).then(r, a);
    }
    f((n = n.apply(l, e || [])).next());
  });
};
let Rl = [], Ji = !1;
function g1(l) {
  return m1(this, arguments, void 0, function* (e, t = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
      if (Rl.push(e), !Ji) Ji = !0;
      else return;
      yield $d(), requestAnimationFrame(() => {
        let n = [0, 0];
        for (let i = 0; i < Rl.length; i++) {
          const o = Rl[i].getBoundingClientRect();
          (i === 0 || o.top + window.scrollY <= n[0]) && (n[0] = o.top + window.scrollY, n[1] = i);
        }
        window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Ji = !1, Rl = [];
      });
    }
  });
}
function b1(l, e, t) {
  let n, { $$slots: i = {}, $$scope: s } = e;
  this && this.__awaiter;
  const o = t1();
  let { i18n: r } = e, { eta: a = null } = e, { queue_position: f } = e, { queue_size: c } = e, { status: u } = e, { scroll_to_output: _ = !1 } = e, { timer: d = !0 } = e, { show_progress: m = "full" } = e, { message: h = null } = e, { progress: g = null } = e, { variant: b = "default" } = e, { loading_text: v = "Loading..." } = e, { absolute: w = !0 } = e, { translucent: k = !1 } = e, { border: B = !1 } = e, { autoscroll: C } = e, p, z = !1, M = 0, D = 0, S = null, A = null, F = 0, X = null, te, G = null, re = !0;
  const Y = () => {
    t(0, a = t(27, S = t(19, j = null))), t(25, M = performance.now()), t(26, D = 0), z = !0, N();
  };
  function N() {
    requestAnimationFrame(() => {
      t(26, D = (performance.now() - M) / 1e3), z && N();
    });
  }
  function R() {
    t(26, D = 0), t(0, a = t(27, S = t(19, j = null))), z && (z = !1);
  }
  e1(() => {
    z && R();
  });
  let j = null;
  function le(W) {
    Lo[W ? "unshift" : "push"](() => {
      G = W, t(16, G), t(7, g), t(14, X), t(15, te);
    });
  }
  const ge = () => {
    o("clear_status");
  };
  function ce(W) {
    Lo[W ? "unshift" : "push"](() => {
      p = W, t(13, p);
    });
  }
  return l.$$set = (W) => {
    "i18n" in W && t(1, r = W.i18n), "eta" in W && t(0, a = W.eta), "queue_position" in W && t(2, f = W.queue_position), "queue_size" in W && t(3, c = W.queue_size), "status" in W && t(4, u = W.status), "scroll_to_output" in W && t(22, _ = W.scroll_to_output), "timer" in W && t(5, d = W.timer), "show_progress" in W && t(6, m = W.show_progress), "message" in W && t(23, h = W.message), "progress" in W && t(7, g = W.progress), "variant" in W && t(8, b = W.variant), "loading_text" in W && t(9, v = W.loading_text), "absolute" in W && t(10, w = W.absolute), "translucent" in W && t(11, k = W.translucent), "border" in W && t(12, B = W.border), "autoscroll" in W && t(24, C = W.autoscroll), "$$scope" in W && t(29, s = W.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (a === null && t(0, a = S), a != null && S !== a && (t(28, A = (performance.now() - M) / 1e3 + a), t(19, j = A.toFixed(1)), t(27, S = a))), l.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && t(17, F = A === null || A <= 0 || !D ? null : Math.min(D / A, 1)), l.$$.dirty[0] & /*progress*/
    128 && g != null && t(18, re = !1), l.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (g != null ? t(14, X = g.map((W) => {
      if (W.index != null && W.length != null)
        return W.index / W.length;
      if (W.progress != null)
        return W.progress;
    })) : t(14, X = null), X ? (t(15, te = X[X.length - 1]), G && (te === 0 ? t(16, G.style.transition = "0", G) : t(16, G.style.transition = "150ms", G))) : t(15, te = void 0)), l.$$.dirty[0] & /*status*/
    16 && (u === "pending" ? Y() : R()), l.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && p && _ && (u === "pending" || u === "complete") && g1(p, C), l.$$.dirty[0] & /*status, message*/
    8388624, l.$$.dirty[0] & /*timer_diff*/
    67108864 && t(20, n = D.toFixed(1));
  }, [
    a,
    r,
    f,
    c,
    u,
    d,
    m,
    g,
    b,
    v,
    w,
    k,
    B,
    p,
    X,
    te,
    G,
    F,
    re,
    j,
    n,
    o,
    _,
    h,
    C,
    M,
    D,
    S,
    A,
    s,
    i,
    le,
    ge,
    ce
  ];
}
class w1 extends Jd {
  constructor(e) {
    super(), Qd(
      this,
      e,
      b1,
      h1,
      xd,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const { setContext: H2, getContext: v1 } = window.__gradio__svelte__internal, p1 = "WORKER_PROXY_CONTEXT_KEY";
function kr() {
  return v1(p1);
}
function k1(l) {
  return l.host === window.location.host || l.host === "localhost:7860" || l.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  l.host === "lite.local";
}
function yr(l, e) {
  const t = e.toLowerCase();
  for (const [n, i] of Object.entries(l))
    if (n.toLowerCase() === t)
      return i;
}
function Cr(l) {
  if (l == null)
    return !1;
  const e = new URL(l, window.location.href);
  return !(!k1(e) || e.protocol !== "http:" && e.protocol !== "https:");
}
async function y1(l) {
  if (l == null || !Cr(l))
    return l;
  const e = kr();
  if (e == null)
    return l;
  const n = new URL(l, window.location.href).pathname;
  return e.httpRequest({
    method: "GET",
    path: n,
    headers: {},
    query_string: ""
  }).then((i) => {
    if (i.status !== 200)
      throw new Error(`Failed to get file ${n} from the Wasm worker.`);
    const s = new Blob([i.body], {
      type: yr(i.headers, "content-type")
    });
    return URL.createObjectURL(s);
  });
}
const {
  SvelteComponent: C1,
  assign: ni,
  check_outros: Sr,
  compute_rest_props: Oo,
  create_slot: Ys,
  detach: bi,
  element: zr,
  empty: Br,
  exclude_internal_props: S1,
  get_all_dirty_from_scope: Is,
  get_slot_changes: Hs,
  get_spread_update: Dr,
  group_outros: qr,
  init: z1,
  insert: wi,
  listen: Lr,
  prevent_default: B1,
  safe_not_equal: D1,
  set_attributes: li,
  transition_in: gn,
  transition_out: bn,
  update_slot_base: Ts
} = window.__gradio__svelte__internal, { createEventDispatcher: q1 } = window.__gradio__svelte__internal;
function L1(l) {
  let e, t, n, i, s;
  const o = (
    /*#slots*/
    l[8].default
  ), r = Ys(
    o,
    l,
    /*$$scope*/
    l[7],
    null
  );
  let a = [
    { href: (
      /*href*/
      l[0]
    ) },
    {
      target: t = typeof window < "u" && window.__is_colab__ ? "_blank" : null
    },
    { rel: "noopener noreferrer" },
    { download: (
      /*download*/
      l[1]
    ) },
    /*$$restProps*/
    l[6]
  ], f = {};
  for (let c = 0; c < a.length; c += 1)
    f = ni(f, a[c]);
  return {
    c() {
      e = zr("a"), r && r.c(), li(e, f);
    },
    m(c, u) {
      wi(c, e, u), r && r.m(e, null), n = !0, i || (s = Lr(
        e,
        "click",
        /*dispatch*/
        l[3].bind(null, "click")
      ), i = !0);
    },
    p(c, u) {
      r && r.p && (!n || u & /*$$scope*/
      128) && Ts(
        r,
        o,
        c,
        /*$$scope*/
        c[7],
        n ? Hs(
          o,
          /*$$scope*/
          c[7],
          u,
          null
        ) : Is(
          /*$$scope*/
          c[7]
        ),
        null
      ), li(e, f = Dr(a, [
        (!n || u & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) },
        { target: t },
        { rel: "noopener noreferrer" },
        (!n || u & /*download*/
        2) && { download: (
          /*download*/
          c[1]
        ) },
        u & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ]));
    },
    i(c) {
      n || (gn(r, c), n = !0);
    },
    o(c) {
      bn(r, c), n = !1;
    },
    d(c) {
      c && bi(e), r && r.d(c), i = !1, s();
    }
  };
}
function M1(l) {
  let e, t, n, i;
  const s = [R1, E1], o = [];
  function r(a, f) {
    return (
      /*is_downloading*/
      a[2] ? 0 : 1
    );
  }
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = Br();
    },
    m(a, f) {
      o[e].m(a, f), wi(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (qr(), bn(o[c], 1, 1, () => {
        o[c] = null;
      }), Sr(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), gn(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (gn(t), i = !0);
    },
    o(a) {
      bn(t), i = !1;
    },
    d(a) {
      a && bi(n), o[e].d(a);
    }
  };
}
function E1(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[8].default
  ), o = Ys(
    s,
    l,
    /*$$scope*/
    l[7],
    null
  );
  let r = [
    /*$$restProps*/
    l[6],
    { href: (
      /*href*/
      l[0]
    ) }
  ], a = {};
  for (let f = 0; f < r.length; f += 1)
    a = ni(a, r[f]);
  return {
    c() {
      e = zr("a"), o && o.c(), li(e, a);
    },
    m(f, c) {
      wi(f, e, c), o && o.m(e, null), t = !0, n || (i = Lr(e, "click", B1(
        /*wasm_click_handler*/
        l[5]
      )), n = !0);
    },
    p(f, c) {
      o && o.p && (!t || c & /*$$scope*/
      128) && Ts(
        o,
        s,
        f,
        /*$$scope*/
        f[7],
        t ? Hs(
          s,
          /*$$scope*/
          f[7],
          c,
          null
        ) : Is(
          /*$$scope*/
          f[7]
        ),
        null
      ), li(e, a = Dr(r, [
        c & /*$$restProps*/
        64 && /*$$restProps*/
        f[6],
        (!t || c & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) }
      ]));
    },
    i(f) {
      t || (gn(o, f), t = !0);
    },
    o(f) {
      bn(o, f), t = !1;
    },
    d(f) {
      f && bi(e), o && o.d(f), n = !1, i();
    }
  };
}
function R1(l) {
  let e;
  const t = (
    /*#slots*/
    l[8].default
  ), n = Ys(
    t,
    l,
    /*$$scope*/
    l[7],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, s) {
      n && n.m(i, s), e = !0;
    },
    p(i, s) {
      n && n.p && (!e || s & /*$$scope*/
      128) && Ts(
        n,
        t,
        i,
        /*$$scope*/
        i[7],
        e ? Hs(
          t,
          /*$$scope*/
          i[7],
          s,
          null
        ) : Is(
          /*$$scope*/
          i[7]
        ),
        null
      );
    },
    i(i) {
      e || (gn(n, i), e = !0);
    },
    o(i) {
      bn(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function A1(l) {
  let e, t, n, i, s;
  const o = [M1, L1], r = [];
  function a(f, c) {
    return c & /*href*/
    1 && (e = null), e == null && (e = !!/*worker_proxy*/
    (f[4] && Cr(
      /*href*/
      f[0]
    ))), e ? 0 : 1;
  }
  return t = a(l, -1), n = r[t] = o[t](l), {
    c() {
      n.c(), i = Br();
    },
    m(f, c) {
      r[t].m(f, c), wi(f, i, c), s = !0;
    },
    p(f, [c]) {
      let u = t;
      t = a(f, c), t === u ? r[t].p(f, c) : (qr(), bn(r[u], 1, 1, () => {
        r[u] = null;
      }), Sr(), n = r[t], n ? n.p(f, c) : (n = r[t] = o[t](f), n.c()), gn(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      s || (gn(n), s = !0);
    },
    o(f) {
      bn(n), s = !1;
    },
    d(f) {
      f && bi(i), r[t].d(f);
    }
  };
}
function W1(l, e, t) {
  const n = ["href", "download"];
  let i = Oo(e, n), { $$slots: s = {}, $$scope: o } = e;
  var r = this && this.__awaiter || function(m, h, g, b) {
    function v(w) {
      return w instanceof g ? w : new g(function(k) {
        k(w);
      });
    }
    return new (g || (g = Promise))(function(w, k) {
      function B(z) {
        try {
          p(b.next(z));
        } catch (M) {
          k(M);
        }
      }
      function C(z) {
        try {
          p(b.throw(z));
        } catch (M) {
          k(M);
        }
      }
      function p(z) {
        z.done ? w(z.value) : v(z.value).then(B, C);
      }
      p((b = b.apply(m, h || [])).next());
    });
  };
  let { href: a = void 0 } = e, { download: f } = e;
  const c = q1();
  let u = !1;
  const _ = kr();
  function d() {
    return r(this, void 0, void 0, function* () {
      if (u)
        return;
      if (c("click"), a == null)
        throw new Error("href is not defined.");
      if (_ == null)
        throw new Error("Wasm worker proxy is not available.");
      const h = new URL(a, window.location.href).pathname;
      t(2, u = !0), _.httpRequest({
        method: "GET",
        path: h,
        headers: {},
        query_string: ""
      }).then((g) => {
        if (g.status !== 200)
          throw new Error(`Failed to get file ${h} from the Wasm worker.`);
        const b = new Blob(
          [g.body],
          {
            type: yr(g.headers, "content-type")
          }
        ), v = URL.createObjectURL(b), w = document.createElement("a");
        w.href = v, w.download = f, w.click(), URL.revokeObjectURL(v);
      }).finally(() => {
        t(2, u = !1);
      });
    });
  }
  return l.$$set = (m) => {
    e = ni(ni({}, e), S1(m)), t(6, i = Oo(e, n)), "href" in m && t(0, a = m.href), "download" in m && t(1, f = m.download), "$$scope" in m && t(7, o = m.$$scope);
  }, [
    a,
    f,
    u,
    c,
    _,
    d,
    i,
    o,
    s
  ];
}
class X1 extends C1 {
  constructor(e) {
    super(), z1(this, e, W1, A1, D1, { href: 0, download: 1 });
  }
}
var Y1 = Object.defineProperty, I1 = (l, e, t) => e in l ? Y1(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t, pt = (l, e, t) => (I1(l, typeof e != "symbol" ? e + "" : e, t), t), Mr = (l, e, t) => {
  if (!e.has(l))
    throw TypeError("Cannot " + t);
}, il = (l, e, t) => (Mr(l, e, "read from private field"), t ? t.call(l) : e.get(l)), H1 = (l, e, t) => {
  if (e.has(l))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(l) : e.set(l, t);
}, T1 = (l, e, t, n) => (Mr(l, e, "write to private field"), e.set(l, t), t), Nt;
new Intl.Collator(0, { numeric: 1 }).compare;
async function Er(l, e) {
  return l.map(
    (t) => new j1({
      path: t.name,
      orig_name: t.name,
      blob: t,
      size: t.size,
      mime_type: t.type,
      is_stream: e
    })
  );
}
class j1 {
  constructor({
    path: e,
    url: t,
    orig_name: n,
    size: i,
    blob: s,
    is_stream: o,
    mime_type: r,
    alt_text: a
  }) {
    pt(this, "path"), pt(this, "url"), pt(this, "orig_name"), pt(this, "size"), pt(this, "blob"), pt(this, "is_stream"), pt(this, "mime_type"), pt(this, "alt_text"), pt(this, "meta", { _type: "gradio.FileData" }), this.path = e, this.url = t, this.orig_name = n, this.size = i, this.blob = t ? void 0 : s, this.is_stream = o, this.mime_type = r, this.alt_text = a;
  }
}
typeof process < "u" && process.versions && process.versions.node;
class T2 extends TransformStream {
  /** Constructs a new instance. */
  constructor(e = { allowCR: !1 }) {
    super({
      transform: (t, n) => {
        for (t = il(this, Nt) + t; ; ) {
          const i = t.indexOf(`
`), s = e.allowCR ? t.indexOf("\r") : -1;
          if (s !== -1 && s !== t.length - 1 && (i === -1 || i - 1 > s)) {
            n.enqueue(t.slice(0, s)), t = t.slice(s + 1);
            continue;
          }
          if (i === -1)
            break;
          const o = t[i - 1] === "\r" ? i - 1 : i;
          n.enqueue(t.slice(0, o)), t = t.slice(i + 1);
        }
        T1(this, Nt, t);
      },
      flush: (t) => {
        if (il(this, Nt) === "")
          return;
        const n = e.allowCR && il(this, Nt).endsWith("\r") ? il(this, Nt).slice(0, -1) : il(this, Nt);
        t.enqueue(n);
      }
    }), H1(this, Nt, "");
  }
}
Nt = /* @__PURE__ */ new WeakMap();
const {
  SvelteComponent: F1,
  append: Re,
  attr: an,
  detach: Rr,
  element: rn,
  init: U1,
  insert: Ar,
  noop: Po,
  safe_not_equal: V1,
  set_data: ii,
  set_style: Qi,
  space: Ss,
  text: Hn,
  toggle_class: Ko
} = window.__gradio__svelte__internal, { onMount: N1, createEventDispatcher: O1, onDestroy: P1 } = window.__gradio__svelte__internal;
function Zo(l) {
  let e, t, n, i, s = _l(
    /*file_to_display*/
    l[2]
  ) + "", o, r, a, f, c = (
    /*file_to_display*/
    l[2].orig_name + ""
  ), u;
  return {
    c() {
      e = rn("div"), t = rn("span"), n = rn("div"), i = rn("progress"), o = Hn(s), a = Ss(), f = rn("span"), u = Hn(c), Qi(i, "visibility", "hidden"), Qi(i, "height", "0"), Qi(i, "width", "0"), i.value = r = _l(
        /*file_to_display*/
        l[2]
      ), an(i, "max", "100"), an(i, "class", "svelte-cr2edf"), an(n, "class", "progress-bar svelte-cr2edf"), an(f, "class", "file-name svelte-cr2edf"), an(e, "class", "file svelte-cr2edf");
    },
    m(_, d) {
      Ar(_, e, d), Re(e, t), Re(t, n), Re(n, i), Re(i, o), Re(e, a), Re(e, f), Re(f, u);
    },
    p(_, d) {
      d & /*file_to_display*/
      4 && s !== (s = _l(
        /*file_to_display*/
        _[2]
      ) + "") && ii(o, s), d & /*file_to_display*/
      4 && r !== (r = _l(
        /*file_to_display*/
        _[2]
      )) && (i.value = r), d & /*file_to_display*/
      4 && c !== (c = /*file_to_display*/
      _[2].orig_name + "") && ii(u, c);
    },
    d(_) {
      _ && Rr(e);
    }
  };
}
function K1(l) {
  let e, t, n, i = (
    /*files_with_progress*/
    l[0].length + ""
  ), s, o, r = (
    /*files_with_progress*/
    l[0].length > 1 ? "files" : "file"
  ), a, f, c, u = (
    /*file_to_display*/
    l[2] && Zo(l)
  );
  return {
    c() {
      e = rn("div"), t = rn("span"), n = Hn("Uploading "), s = Hn(i), o = Ss(), a = Hn(r), f = Hn("..."), c = Ss(), u && u.c(), an(t, "class", "uploading svelte-cr2edf"), an(e, "class", "wrap svelte-cr2edf"), Ko(
        e,
        "progress",
        /*progress*/
        l[1]
      );
    },
    m(_, d) {
      Ar(_, e, d), Re(e, t), Re(t, n), Re(t, s), Re(t, o), Re(t, a), Re(t, f), Re(e, c), u && u.m(e, null);
    },
    p(_, [d]) {
      d & /*files_with_progress*/
      1 && i !== (i = /*files_with_progress*/
      _[0].length + "") && ii(s, i), d & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      _[0].length > 1 ? "files" : "file") && ii(a, r), /*file_to_display*/
      _[2] ? u ? u.p(_, d) : (u = Zo(_), u.c(), u.m(e, null)) : u && (u.d(1), u = null), d & /*progress*/
      2 && Ko(
        e,
        "progress",
        /*progress*/
        _[1]
      );
    },
    i: Po,
    o: Po,
    d(_) {
      _ && Rr(e), u && u.d();
    }
  };
}
function _l(l) {
  return l.progress * 100 / (l.size || 0) || 0;
}
function Z1(l) {
  let e = 0;
  return l.forEach((t) => {
    e += _l(t);
  }), document.documentElement.style.setProperty("--upload-progress-width", (e / l.length).toFixed(2) + "%"), e / l.length;
}
function G1(l, e, t) {
  var n = this && this.__awaiter || function(h, g, b, v) {
    function w(k) {
      return k instanceof b ? k : new b(function(B) {
        B(k);
      });
    }
    return new (b || (b = Promise))(function(k, B) {
      function C(M) {
        try {
          z(v.next(M));
        } catch (D) {
          B(D);
        }
      }
      function p(M) {
        try {
          z(v.throw(M));
        } catch (D) {
          B(D);
        }
      }
      function z(M) {
        M.done ? k(M.value) : w(M.value).then(C, p);
      }
      z((v = v.apply(h, g || [])).next());
    });
  };
  let { upload_id: i } = e, { root: s } = e, { files: o } = e, { stream_handler: r } = e, a, f = !1, c, u, _ = o.map((h) => Object.assign(Object.assign({}, h), { progress: 0 }));
  const d = O1();
  function m(h, g) {
    t(0, _ = _.map((b) => (b.orig_name === h && (b.progress += g), b)));
  }
  return N1(() => n(void 0, void 0, void 0, function* () {
    if (a = yield r(new URL(`${s}/upload_progress?upload_id=${i}`)), a == null)
      throw new Error("Event source is not defined");
    a.onmessage = function(h) {
      return n(this, void 0, void 0, function* () {
        const g = JSON.parse(h.data);
        f || t(1, f = !0), g.msg === "done" ? (a == null || a.close(), d("done")) : (t(7, c = g), m(g.orig_name, g.chunk_size));
      });
    };
  })), P1(() => {
    (a != null || a != null) && a.close();
  }), l.$$set = (h) => {
    "upload_id" in h && t(3, i = h.upload_id), "root" in h && t(4, s = h.root), "files" in h && t(5, o = h.files), "stream_handler" in h && t(6, r = h.stream_handler);
  }, l.$$.update = () => {
    l.$$.dirty & /*files_with_progress*/
    1 && Z1(_), l.$$.dirty & /*current_file_upload, files_with_progress*/
    129 && t(2, u = c || _[0]);
  }, [
    _,
    f,
    u,
    i,
    s,
    o,
    r,
    c
  ];
}
class J1 extends F1 {
  constructor(e) {
    super(), U1(this, e, G1, K1, V1, {
      upload_id: 3,
      root: 4,
      files: 5,
      stream_handler: 6
    });
  }
}
const {
  SvelteComponent: Q1,
  append: Go,
  attr: Ce,
  binding_callbacks: x1,
  bubble: xt,
  check_outros: Wr,
  create_component: $1,
  create_slot: Xr,
  destroy_component: eh,
  detach: vi,
  element: zs,
  empty: Yr,
  get_all_dirty_from_scope: Ir,
  get_slot_changes: Hr,
  group_outros: Tr,
  init: th,
  insert: pi,
  listen: Ie,
  mount_component: nh,
  prevent_default: $t,
  run_all: lh,
  safe_not_equal: ih,
  set_style: jr,
  space: sh,
  stop_propagation: en,
  toggle_class: pe,
  transition_in: Zt,
  transition_out: wn,
  update_slot_base: Fr
} = window.__gradio__svelte__internal, { createEventDispatcher: oh, tick: ah } = window.__gradio__svelte__internal;
function rh(l) {
  let e, t, n, i, s, o, r, a, f, c, u;
  const _ = (
    /*#slots*/
    l[26].default
  ), d = Xr(
    _,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = zs("button"), d && d.c(), t = sh(), n = zs("input"), Ce(n, "aria-label", "file upload"), Ce(n, "data-testid", "file-upload"), Ce(n, "type", "file"), Ce(n, "accept", i = /*accept_file_types*/
      l[16] || void 0), n.multiple = s = /*file_count*/
      l[6] === "multiple" || void 0, Ce(n, "webkitdirectory", o = /*file_count*/
      l[6] === "directory" || void 0), Ce(n, "mozdirectory", r = /*file_count*/
      l[6] === "directory" || void 0), Ce(n, "class", "svelte-1s26xmt"), Ce(e, "tabindex", a = /*hidden*/
      l[9] ? -1 : 0), Ce(e, "class", "svelte-1s26xmt"), pe(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), pe(
        e,
        "center",
        /*center*/
        l[4]
      ), pe(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), pe(
        e,
        "flex",
        /*flex*/
        l[5]
      ), pe(
        e,
        "disable_click",
        /*disable_click*/
        l[7]
      ), jr(e, "height", "100%");
    },
    m(m, h) {
      pi(m, e, h), d && d.m(e, null), Go(e, t), Go(e, n), l[34](n), f = !0, c || (u = [
        Ie(
          n,
          "change",
          /*load_files_from_upload*/
          l[18]
        ),
        Ie(e, "drag", en($t(
          /*drag_handler*/
          l[27]
        ))),
        Ie(e, "dragstart", en($t(
          /*dragstart_handler*/
          l[28]
        ))),
        Ie(e, "dragend", en($t(
          /*dragend_handler*/
          l[29]
        ))),
        Ie(e, "dragover", en($t(
          /*dragover_handler*/
          l[30]
        ))),
        Ie(e, "dragenter", en($t(
          /*dragenter_handler*/
          l[31]
        ))),
        Ie(e, "dragleave", en($t(
          /*dragleave_handler*/
          l[32]
        ))),
        Ie(e, "drop", en($t(
          /*drop_handler*/
          l[33]
        ))),
        Ie(
          e,
          "click",
          /*open_file_upload*/
          l[13]
        ),
        Ie(
          e,
          "drop",
          /*loadFilesFromDrop*/
          l[19]
        ),
        Ie(
          e,
          "dragenter",
          /*updateDragging*/
          l[17]
        ),
        Ie(
          e,
          "dragleave",
          /*updateDragging*/
          l[17]
        )
      ], c = !0);
    },
    p(m, h) {
      d && d.p && (!f || h[0] & /*$$scope*/
      33554432) && Fr(
        d,
        _,
        m,
        /*$$scope*/
        m[25],
        f ? Hr(
          _,
          /*$$scope*/
          m[25],
          h,
          null
        ) : Ir(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!f || h[0] & /*accept_file_types*/
      65536 && i !== (i = /*accept_file_types*/
      m[16] || void 0)) && Ce(n, "accept", i), (!f || h[0] & /*file_count*/
      64 && s !== (s = /*file_count*/
      m[6] === "multiple" || void 0)) && (n.multiple = s), (!f || h[0] & /*file_count*/
      64 && o !== (o = /*file_count*/
      m[6] === "directory" || void 0)) && Ce(n, "webkitdirectory", o), (!f || h[0] & /*file_count*/
      64 && r !== (r = /*file_count*/
      m[6] === "directory" || void 0)) && Ce(n, "mozdirectory", r), (!f || h[0] & /*hidden*/
      512 && a !== (a = /*hidden*/
      m[9] ? -1 : 0)) && Ce(e, "tabindex", a), (!f || h[0] & /*hidden*/
      512) && pe(
        e,
        "hidden",
        /*hidden*/
        m[9]
      ), (!f || h[0] & /*center*/
      16) && pe(
        e,
        "center",
        /*center*/
        m[4]
      ), (!f || h[0] & /*boundedheight*/
      8) && pe(
        e,
        "boundedheight",
        /*boundedheight*/
        m[3]
      ), (!f || h[0] & /*flex*/
      32) && pe(
        e,
        "flex",
        /*flex*/
        m[5]
      ), (!f || h[0] & /*disable_click*/
      128) && pe(
        e,
        "disable_click",
        /*disable_click*/
        m[7]
      );
    },
    i(m) {
      f || (Zt(d, m), f = !0);
    },
    o(m) {
      wn(d, m), f = !1;
    },
    d(m) {
      m && vi(e), d && d.d(m), l[34](null), c = !1, lh(u);
    }
  };
}
function fh(l) {
  let e, t, n = !/*hidden*/
  l[9] && Jo(l);
  return {
    c() {
      n && n.c(), e = Yr();
    },
    m(i, s) {
      n && n.m(i, s), pi(i, e, s), t = !0;
    },
    p(i, s) {
      /*hidden*/
      i[9] ? n && (Tr(), wn(n, 1, 1, () => {
        n = null;
      }), Wr()) : n ? (n.p(i, s), s[0] & /*hidden*/
      512 && Zt(n, 1)) : (n = Jo(i), n.c(), Zt(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      t || (Zt(n), t = !0);
    },
    o(i) {
      wn(n), t = !1;
    },
    d(i) {
      i && vi(e), n && n.d(i);
    }
  };
}
function ch(l) {
  let e, t, n, i, s;
  const o = (
    /*#slots*/
    l[26].default
  ), r = Xr(
    o,
    l,
    /*$$scope*/
    l[25],
    null
  );
  return {
    c() {
      e = zs("button"), r && r.c(), Ce(e, "tabindex", t = /*hidden*/
      l[9] ? -1 : 0), Ce(e, "class", "svelte-1s26xmt"), pe(
        e,
        "hidden",
        /*hidden*/
        l[9]
      ), pe(
        e,
        "center",
        /*center*/
        l[4]
      ), pe(
        e,
        "boundedheight",
        /*boundedheight*/
        l[3]
      ), pe(
        e,
        "flex",
        /*flex*/
        l[5]
      ), jr(e, "height", "100%");
    },
    m(a, f) {
      pi(a, e, f), r && r.m(e, null), n = !0, i || (s = Ie(
        e,
        "click",
        /*paste_clipboard*/
        l[12]
      ), i = !0);
    },
    p(a, f) {
      r && r.p && (!n || f[0] & /*$$scope*/
      33554432) && Fr(
        r,
        o,
        a,
        /*$$scope*/
        a[25],
        n ? Hr(
          o,
          /*$$scope*/
          a[25],
          f,
          null
        ) : Ir(
          /*$$scope*/
          a[25]
        ),
        null
      ), (!n || f[0] & /*hidden*/
      512 && t !== (t = /*hidden*/
      a[9] ? -1 : 0)) && Ce(e, "tabindex", t), (!n || f[0] & /*hidden*/
      512) && pe(
        e,
        "hidden",
        /*hidden*/
        a[9]
      ), (!n || f[0] & /*center*/
      16) && pe(
        e,
        "center",
        /*center*/
        a[4]
      ), (!n || f[0] & /*boundedheight*/
      8) && pe(
        e,
        "boundedheight",
        /*boundedheight*/
        a[3]
      ), (!n || f[0] & /*flex*/
      32) && pe(
        e,
        "flex",
        /*flex*/
        a[5]
      );
    },
    i(a) {
      n || (Zt(r, a), n = !0);
    },
    o(a) {
      wn(r, a), n = !1;
    },
    d(a) {
      a && vi(e), r && r.d(a), i = !1, s();
    }
  };
}
function Jo(l) {
  let e, t;
  return e = new J1({
    props: {
      root: (
        /*root*/
        l[8]
      ),
      upload_id: (
        /*upload_id*/
        l[14]
      ),
      files: (
        /*file_data*/
        l[15]
      ),
      stream_handler: (
        /*stream_handler*/
        l[11]
      )
    }
  }), {
    c() {
      $1(e.$$.fragment);
    },
    m(n, i) {
      nh(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*root*/
      256 && (s.root = /*root*/
      n[8]), i[0] & /*upload_id*/
      16384 && (s.upload_id = /*upload_id*/
      n[14]), i[0] & /*file_data*/
      32768 && (s.files = /*file_data*/
      n[15]), i[0] & /*stream_handler*/
      2048 && (s.stream_handler = /*stream_handler*/
      n[11]), e.$set(s);
    },
    i(n) {
      t || (Zt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      wn(e.$$.fragment, n), t = !1;
    },
    d(n) {
      eh(e, n);
    }
  };
}
function uh(l) {
  let e, t, n, i;
  const s = [ch, fh, rh], o = [];
  function r(a, f) {
    return (
      /*filetype*/
      a[0] === "clipboard" ? 0 : (
        /*uploading*/
        a[1] && /*show_progress*/
        a[10] ? 1 : 2
      )
    );
  }
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = Yr();
    },
    m(a, f) {
      o[e].m(a, f), pi(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (Tr(), wn(o[c], 1, 1, () => {
        o[c] = null;
      }), Wr(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Zt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Zt(t), i = !0);
    },
    o(a) {
      wn(t), i = !1;
    },
    d(a) {
      a && vi(n), o[e].d(a);
    }
  };
}
function _h(l, e, t) {
  if (!l || l === "*" || l === "file/*" || Array.isArray(l) && l.some((i) => i === "*" || i === "file/*"))
    return !0;
  let n;
  if (typeof l == "string")
    n = l.split(",").map((i) => i.trim());
  else if (Array.isArray(l))
    n = l;
  else
    return !1;
  return n.includes(e) || n.some((i) => {
    const [s] = i.split("/").map((o) => o.trim());
    return i.endsWith("/*") && t.startsWith(s + "/");
  });
}
function dh(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var s = this && this.__awaiter || function(L, T, P, x) {
    function ue(E) {
      return E instanceof P ? E : new P(function(st) {
        st(E);
      });
    }
    return new (P || (P = Promise))(function(E, st) {
      function ht(Je) {
        try {
          Ge(x.next(Je));
        } catch (Jt) {
          st(Jt);
        }
      }
      function Xe(Je) {
        try {
          Ge(x.throw(Je));
        } catch (Jt) {
          st(Jt);
        }
      }
      function Ge(Je) {
        Je.done ? E(Je.value) : ue(Je.value).then(ht, Xe);
      }
      Ge((x = x.apply(L, T || [])).next());
    });
  };
  let { filetype: o = null } = e, { dragging: r = !1 } = e, { boundedheight: a = !0 } = e, { center: f = !0 } = e, { flex: c = !0 } = e, { file_count: u = "single" } = e, { disable_click: _ = !1 } = e, { root: d } = e, { hidden: m = !1 } = e, { format: h = "file" } = e, { uploading: g = !1 } = e, { hidden_upload: b = null } = e, { show_progress: v = !0 } = e, { max_file_size: w = null } = e, { upload: k } = e, { stream_handler: B } = e, C, p, z;
  const M = oh(), D = ["image", "video", "audio", "text", "file"], S = (L) => L.startsWith(".") || L.endsWith("/*") ? L : D.includes(L) ? L + "/*" : "." + L;
  function A() {
    t(20, r = !r);
  }
  function F() {
    navigator.clipboard.read().then((L) => s(this, void 0, void 0, function* () {
      for (let T = 0; T < L.length; T++) {
        const P = L[T].types.find((x) => x.startsWith("image/"));
        if (P) {
          L[T].getType(P).then((x) => s(this, void 0, void 0, function* () {
            const ue = new File([x], `clipboard.${P.replace("image/", "")}`);
            yield G([ue]);
          }));
          break;
        }
      }
    }));
  }
  function X() {
    _ || b && (t(2, b.value = "", b), b.click());
  }
  function te(L) {
    return s(this, void 0, void 0, function* () {
      yield ah(), t(14, C = Math.random().toString(36).substring(2, 15)), t(1, g = !0);
      try {
        const T = yield k(L, d, C, w ?? 1 / 0);
        return M("load", u === "single" ? T == null ? void 0 : T[0] : T), t(1, g = !1), T || [];
      } catch (T) {
        return M("error", T.message), t(1, g = !1), [];
      }
    });
  }
  function G(L) {
    return s(this, void 0, void 0, function* () {
      if (!L.length)
        return;
      let T = L.map((P) => new File([P], P instanceof File ? P.name : "file", { type: P.type }));
      return t(15, p = yield Er(T)), yield te(p);
    });
  }
  function re(L) {
    return s(this, void 0, void 0, function* () {
      const T = L.target;
      if (T.files)
        if (h != "blob")
          yield G(Array.from(T.files));
        else {
          if (u === "single") {
            M("load", T.files[0]);
            return;
          }
          M("load", T.files);
        }
    });
  }
  function Y(L) {
    return s(this, void 0, void 0, function* () {
      var T;
      if (t(20, r = !1), !(!((T = L.dataTransfer) === null || T === void 0) && T.files)) return;
      const P = Array.from(L.dataTransfer.files).filter((x) => {
        const ue = "." + x.name.split(".").pop();
        return ue && _h(z, ue, x.type) || (ue && Array.isArray(o) ? o.includes(ue) : ue === o) ? !0 : (M("error", `Invalid file type only ${o} allowed.`), !1);
      });
      yield G(P);
    });
  }
  function N(L) {
    xt.call(this, l, L);
  }
  function R(L) {
    xt.call(this, l, L);
  }
  function j(L) {
    xt.call(this, l, L);
  }
  function le(L) {
    xt.call(this, l, L);
  }
  function ge(L) {
    xt.call(this, l, L);
  }
  function ce(L) {
    xt.call(this, l, L);
  }
  function W(L) {
    xt.call(this, l, L);
  }
  function fe(L) {
    x1[L ? "unshift" : "push"](() => {
      b = L, t(2, b);
    });
  }
  return l.$$set = (L) => {
    "filetype" in L && t(0, o = L.filetype), "dragging" in L && t(20, r = L.dragging), "boundedheight" in L && t(3, a = L.boundedheight), "center" in L && t(4, f = L.center), "flex" in L && t(5, c = L.flex), "file_count" in L && t(6, u = L.file_count), "disable_click" in L && t(7, _ = L.disable_click), "root" in L && t(8, d = L.root), "hidden" in L && t(9, m = L.hidden), "format" in L && t(21, h = L.format), "uploading" in L && t(1, g = L.uploading), "hidden_upload" in L && t(2, b = L.hidden_upload), "show_progress" in L && t(10, v = L.show_progress), "max_file_size" in L && t(22, w = L.max_file_size), "upload" in L && t(23, k = L.upload), "stream_handler" in L && t(11, B = L.stream_handler), "$$scope" in L && t(25, i = L.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*filetype*/
    1 && (o == null ? t(16, z = null) : typeof o == "string" ? t(16, z = S(o)) : (t(0, o = o.map(S)), t(16, z = o.join(", "))));
  }, [
    o,
    g,
    b,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    v,
    B,
    F,
    X,
    C,
    p,
    z,
    A,
    re,
    Y,
    r,
    h,
    w,
    k,
    G,
    i,
    n,
    N,
    R,
    j,
    le,
    ge,
    ce,
    W,
    fe
  ];
}
class hh extends Q1 {
  constructor(e) {
    super(), th(
      this,
      e,
      dh,
      uh,
      ih,
      {
        filetype: 0,
        dragging: 20,
        boundedheight: 3,
        center: 4,
        flex: 5,
        file_count: 6,
        disable_click: 7,
        root: 8,
        hidden: 9,
        format: 21,
        uploading: 1,
        hidden_upload: 2,
        show_progress: 10,
        max_file_size: 22,
        upload: 23,
        stream_handler: 11,
        paste_clipboard: 12,
        open_file_upload: 13,
        load_files: 24
      },
      null,
      [-1, -1]
    );
  }
  get paste_clipboard() {
    return this.$$.ctx[12];
  }
  get open_file_upload() {
    return this.$$.ctx[13];
  }
  get load_files() {
    return this.$$.ctx[24];
  }
}
const {
  SvelteComponent: mh,
  append: Al,
  attr: xi,
  create_component: gh,
  destroy_component: bh,
  detach: wh,
  element: $i,
  init: vh,
  insert: ph,
  listen: kh,
  mount_component: yh,
  noop: Ch,
  safe_not_equal: Sh,
  set_style: zh,
  space: Bh,
  text: Dh,
  transition_in: qh,
  transition_out: Lh
} = window.__gradio__svelte__internal, { createEventDispatcher: Mh } = window.__gradio__svelte__internal;
function Eh(l) {
  let e, t, n, i, s, o = "Click to Access Webcam", r, a, f, c;
  return i = new sr({}), {
    c() {
      e = $i("button"), t = $i("div"), n = $i("span"), gh(i.$$.fragment), s = Bh(), r = Dh(o), xi(n, "class", "icon-wrap svelte-fjcd9c"), xi(t, "class", "wrap svelte-fjcd9c"), xi(e, "class", "svelte-fjcd9c"), zh(e, "height", "100%");
    },
    m(u, _) {
      ph(u, e, _), Al(e, t), Al(t, n), yh(i, n, null), Al(t, s), Al(t, r), a = !0, f || (c = kh(
        e,
        "click",
        /*click_handler*/
        l[1]
      ), f = !0);
    },
    p: Ch,
    i(u) {
      a || (qh(i.$$.fragment, u), a = !0);
    },
    o(u) {
      Lh(i.$$.fragment, u), a = !1;
    },
    d(u) {
      u && wh(e), bh(i), f = !1, c();
    }
  };
}
function Rh(l) {
  const e = Mh();
  return [e, () => e("click")];
}
class Ah extends mh {
  constructor(e) {
    super(), vh(this, e, Rh, Eh, Sh, {});
  }
}
function Wh() {
  return navigator.mediaDevices.enumerateDevices();
}
function Xh(l, e) {
  e.srcObject = l, e.muted = !0, e.play();
}
async function Qo(l, e, t) {
  const n = {
    width: { ideal: 1920 },
    height: { ideal: 1440 }
  }, i = {
    video: t ? { deviceId: { exact: t }, ...n } : n,
    audio: l
  };
  return navigator.mediaDevices.getUserMedia(i).then((s) => (Xh(s, e), s));
}
function Yh(l) {
  return l.filter(
    (t) => t.kind === "videoinput"
  );
}
const {
  SvelteComponent: Ih,
  action_destroyer: Hh,
  add_render_callback: Th,
  append: qt,
  attr: me,
  binding_callbacks: jh,
  check_outros: ml,
  create_component: Zn,
  create_in_transition: Fh,
  destroy_component: Gn,
  destroy_each: Uh,
  detach: Ae,
  element: Fe,
  empty: js,
  ensure_array_like: xo,
  group_outros: gl,
  init: Vh,
  insert: We,
  listen: si,
  mount_component: Jn,
  noop: Fs,
  run_all: Nh,
  safe_not_equal: Oh,
  set_data: Ur,
  set_input_value: Bs,
  space: pl,
  stop_propagation: Ph,
  text: Vr,
  toggle_class: Wl,
  transition_in: ke,
  transition_out: Se
} = window.__gradio__svelte__internal, { createEventDispatcher: Kh, onMount: Zh } = window.__gradio__svelte__internal;
function $o(l, e, t) {
  const n = l.slice();
  return n[32] = e[t], n;
}
function Gh(l) {
  let e, t, n, i, s, o, r, a, f, c, u;
  const _ = [xh, Qh], d = [];
  function m(b, v) {
    return (
      /*mode*/
      b[1] === "video" || /*streaming*/
      b[0] ? 0 : 1
    );
  }
  n = m(l), i = d[n] = _[n](l);
  let h = !/*recording*/
  l[8] && ea(l), g = (
    /*options_open*/
    l[10] && /*selected_device*/
    l[7] && ta(l)
  );
  return {
    c() {
      e = Fe("div"), t = Fe("button"), i.c(), o = pl(), h && h.c(), r = pl(), g && g.c(), a = js(), me(t, "aria-label", s = /*mode*/
      l[1] === "image" ? "capture photo" : "start recording"), me(t, "class", "svelte-8hqvb6"), me(e, "class", "button-wrap svelte-8hqvb6");
    },
    m(b, v) {
      We(b, e, v), qt(e, t), d[n].m(t, null), qt(e, o), h && h.m(e, null), We(b, r, v), g && g.m(b, v), We(b, a, v), f = !0, c || (u = si(
        t,
        "click",
        /*record_video_or_photo*/
        l[13]
      ), c = !0);
    },
    p(b, v) {
      let w = n;
      n = m(b), n === w ? d[n].p(b, v) : (gl(), Se(d[w], 1, 1, () => {
        d[w] = null;
      }), ml(), i = d[n], i ? i.p(b, v) : (i = d[n] = _[n](b), i.c()), ke(i, 1), i.m(t, null)), (!f || v[0] & /*mode*/
      2 && s !== (s = /*mode*/
      b[1] === "image" ? "capture photo" : "start recording")) && me(t, "aria-label", s), /*recording*/
      b[8] ? h && (gl(), Se(h, 1, 1, () => {
        h = null;
      }), ml()) : h ? (h.p(b, v), v[0] & /*recording*/
      256 && ke(h, 1)) : (h = ea(b), h.c(), ke(h, 1), h.m(e, null)), /*options_open*/
      b[10] && /*selected_device*/
      b[7] ? g ? (g.p(b, v), v[0] & /*options_open, selected_device*/
      1152 && ke(g, 1)) : (g = ta(b), g.c(), ke(g, 1), g.m(a.parentNode, a)) : g && (gl(), Se(g, 1, 1, () => {
        g = null;
      }), ml());
    },
    i(b) {
      f || (ke(i), ke(h), ke(g), f = !0);
    },
    o(b) {
      Se(i), Se(h), Se(g), f = !1;
    },
    d(b) {
      b && (Ae(e), Ae(r), Ae(a)), d[n].d(), h && h.d(), g && g.d(b), c = !1, u();
    }
  };
}
function Jh(l) {
  let e, t, n, i;
  return t = new Ah({}), t.$on(
    "click",
    /*click_handler*/
    l[20]
  ), {
    c() {
      e = Fe("div"), Zn(t.$$.fragment), me(e, "title", "grant webcam access");
    },
    m(s, o) {
      We(s, e, o), Jn(t, e, null), i = !0;
    },
    p: Fs,
    i(s) {
      i || (ke(t.$$.fragment, s), s && (n || Th(() => {
        n = Fh(e, Hd, { delay: 100, duration: 200 }), n.start();
      })), i = !0);
    },
    o(s) {
      Se(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && Ae(e), Gn(t);
    }
  };
}
function Qh(l) {
  let e, t, n;
  return t = new wu({}), {
    c() {
      e = Fe("div"), Zn(t.$$.fragment), me(e, "class", "icon svelte-8hqvb6"), me(e, "title", "capture photo");
    },
    m(i, s) {
      We(i, e, s), Jn(t, e, null), n = !0;
    },
    p: Fs,
    i(i) {
      n || (ke(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Se(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ae(e), Gn(t);
    }
  };
}
function xh(l) {
  let e, t, n, i;
  const s = [e0, $h], o = [];
  function r(a, f) {
    return (
      /*recording*/
      a[8] ? 0 : 1
    );
  }
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = js();
    },
    m(a, f) {
      o[e].m(a, f), We(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e !== c && (gl(), Se(o[c], 1, 1, () => {
        o[c] = null;
      }), ml(), t = o[e], t || (t = o[e] = s[e](a), t.c()), ke(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (ke(t), i = !0);
    },
    o(a) {
      Se(t), i = !1;
    },
    d(a) {
      a && Ae(n), o[e].d(a);
    }
  };
}
function $h(l) {
  let e, t, n;
  return t = new Bu({}), {
    c() {
      e = Fe("div"), Zn(t.$$.fragment), me(e, "class", "icon red svelte-8hqvb6"), me(e, "title", "start recording");
    },
    m(i, s) {
      We(i, e, s), Jn(t, e, null), n = !0;
    },
    i(i) {
      n || (ke(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Se(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ae(e), Gn(t);
    }
  };
}
function e0(l) {
  let e, t, n;
  return t = new I_({}), {
    c() {
      e = Fe("div"), Zn(t.$$.fragment), me(e, "class", "icon red svelte-8hqvb6"), me(e, "title", "stop recording");
    },
    m(i, s) {
      We(i, e, s), Jn(t, e, null), n = !0;
    },
    i(i) {
      n || (ke(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Se(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Ae(e), Gn(t);
    }
  };
}
function ea(l) {
  let e, t, n, i, s;
  return t = new Xs({}), {
    c() {
      e = Fe("button"), Zn(t.$$.fragment), me(e, "class", "icon svelte-8hqvb6"), me(e, "aria-label", "select input source");
    },
    m(o, r) {
      We(o, e, r), Jn(t, e, null), n = !0, i || (s = si(
        e,
        "click",
        /*click_handler_1*/
        l[21]
      ), i = !0);
    },
    p: Fs,
    i(o) {
      n || (ke(t.$$.fragment, o), n = !0);
    },
    o(o) {
      Se(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ae(e), Gn(t), i = !1, s();
    }
  };
}
function ta(l) {
  let e, t, n, i, s, o, r;
  n = new Xs({});
  function a(u, _) {
    return (
      /*available_video_devices*/
      u[6].length === 0 ? n0 : t0
    );
  }
  let f = a(l), c = f(l);
  return {
    c() {
      e = Fe("select"), t = Fe("button"), Zn(n.$$.fragment), i = pl(), c.c(), me(t, "class", "inset-icon svelte-8hqvb6"), me(e, "class", "select-wrap svelte-8hqvb6"), me(e, "aria-label", "select source");
    },
    m(u, _) {
      We(u, e, _), qt(e, t), Jn(n, t, null), qt(t, i), c.m(e, null), s = !0, o || (r = [
        si(t, "click", Ph(
          /*click_handler_2*/
          l[22]
        )),
        Hh(Us.call(
          null,
          e,
          /*handle_click_outside*/
          l[14]
        )),
        si(
          e,
          "change",
          /*handle_device_change*/
          l[11]
        )
      ], o = !0);
    },
    p(u, _) {
      f === (f = a(u)) && c ? c.p(u, _) : (c.d(1), c = f(u), c && (c.c(), c.m(e, null)));
    },
    i(u) {
      s || (ke(n.$$.fragment, u), s = !0);
    },
    o(u) {
      Se(n.$$.fragment, u), s = !1;
    },
    d(u) {
      u && Ae(e), Gn(n), c.d(), o = !1, Nh(r);
    }
  };
}
function t0(l) {
  let e, t = xo(
    /*available_video_devices*/
    l[6]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = na($o(l, t, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      e = js();
    },
    m(i, s) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(i, s);
      We(i, e, s);
    },
    p(i, s) {
      if (s[0] & /*available_video_devices, selected_device*/
      192) {
        t = xo(
          /*available_video_devices*/
          i[6]
        );
        let o;
        for (o = 0; o < t.length; o += 1) {
          const r = $o(i, t, o);
          n[o] ? n[o].p(r, s) : (n[o] = na(r), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = t.length;
      }
    },
    d(i) {
      i && Ae(e), Uh(n, i);
    }
  };
}
function n0(l) {
  let e, t = (
    /*i18n*/
    l[3]("common.no_devices") + ""
  ), n;
  return {
    c() {
      e = Fe("option"), n = Vr(t), e.__value = "", Bs(e, e.__value), me(e, "class", "svelte-8hqvb6");
    },
    m(i, s) {
      We(i, e, s), qt(e, n);
    },
    p(i, s) {
      s[0] & /*i18n*/
      8 && t !== (t = /*i18n*/
      i[3]("common.no_devices") + "") && Ur(n, t);
    },
    d(i) {
      i && Ae(e);
    }
  };
}
function na(l) {
  let e, t = (
    /*device*/
    l[32].label + ""
  ), n, i, s, o;
  return {
    c() {
      e = Fe("option"), n = Vr(t), i = pl(), e.__value = s = /*device*/
      l[32].deviceId, Bs(e, e.__value), e.selected = o = /*selected_device*/
      l[7].deviceId === /*device*/
      l[32].deviceId, me(e, "class", "svelte-8hqvb6");
    },
    m(r, a) {
      We(r, e, a), qt(e, n), qt(e, i);
    },
    p(r, a) {
      a[0] & /*available_video_devices*/
      64 && t !== (t = /*device*/
      r[32].label + "") && Ur(n, t), a[0] & /*available_video_devices*/
      64 && s !== (s = /*device*/
      r[32].deviceId) && (e.__value = s, Bs(e, e.__value)), a[0] & /*selected_device, available_video_devices*/
      192 && o !== (o = /*selected_device*/
      r[7].deviceId === /*device*/
      r[32].deviceId) && (e.selected = o);
    },
    d(r) {
      r && Ae(e);
    }
  };
}
function l0(l) {
  let e, t, n, i, s, o;
  const r = [Jh, Gh], a = [];
  function f(c, u) {
    return (
      /*webcam_accessed*/
      c[9] ? 1 : 0
    );
  }
  return i = f(l), s = a[i] = r[i](l), {
    c() {
      e = Fe("div"), t = Fe("video"), n = pl(), s.c(), me(t, "class", "svelte-8hqvb6"), Wl(
        t,
        "flip",
        /*mirror_webcam*/
        l[2]
      ), Wl(t, "hide", !/*webcam_accessed*/
      l[9]), me(e, "class", "wrap svelte-8hqvb6");
    },
    m(c, u) {
      We(c, e, u), qt(e, t), l[19](t), qt(e, n), a[i].m(e, null), o = !0;
    },
    p(c, u) {
      (!o || u[0] & /*mirror_webcam*/
      4) && Wl(
        t,
        "flip",
        /*mirror_webcam*/
        c[2]
      ), (!o || u[0] & /*webcam_accessed*/
      512) && Wl(t, "hide", !/*webcam_accessed*/
      c[9]);
      let _ = i;
      i = f(c), i === _ ? a[i].p(c, u) : (gl(), Se(a[_], 1, 1, () => {
        a[_] = null;
      }), ml(), s = a[i], s ? s.p(c, u) : (s = a[i] = r[i](c), s.c()), ke(s, 1), s.m(e, null));
    },
    i(c) {
      o || (ke(s), o = !0);
    },
    o(c) {
      Se(s), o = !1;
    },
    d(c) {
      c && Ae(e), l[19](null), a[i].d();
    }
  };
}
function Us(l, e) {
  const t = (n) => {
    l && !l.contains(n.target) && !n.defaultPrevented && e(n);
  };
  return document.addEventListener("click", t, !0), {
    destroy() {
      document.removeEventListener("click", t, !0);
    }
  };
}
function i0(l, e, t) {
  var n = this && this.__awaiter || function(Y, N, R, j) {
    function le(ge) {
      return ge instanceof R ? ge : new R(function(ce) {
        ce(ge);
      });
    }
    return new (R || (R = Promise))(function(ge, ce) {
      function W(T) {
        try {
          L(j.next(T));
        } catch (P) {
          ce(P);
        }
      }
      function fe(T) {
        try {
          L(j.throw(T));
        } catch (P) {
          ce(P);
        }
      }
      function L(T) {
        T.done ? ge(T.value) : le(T.value).then(W, fe);
      }
      L((j = j.apply(Y, N || [])).next());
    });
  };
  let i, s = [], o = null, r, { streaming: a = !1 } = e, { pending: f = !1 } = e, { root: c = "" } = e, { mode: u = "image" } = e, { mirror_webcam: _ } = e, { include_audio: d } = e, { i18n: m } = e, { upload: h } = e;
  const g = Kh();
  Zh(() => r = document.createElement("canvas"));
  const b = (Y) => n(void 0, void 0, void 0, function* () {
    const R = Y.target.value;
    yield Qo(d, i, R).then((j) => n(void 0, void 0, void 0, function* () {
      C = j, t(7, o = s.find((le) => le.deviceId === R) || null), t(10, A = !1);
    }));
  });
  function v() {
    return n(this, void 0, void 0, function* () {
      try {
        Qo(d, i).then((Y) => n(this, void 0, void 0, function* () {
          t(9, D = !0), t(6, s = yield Wh()), C = Y;
        })).then(() => Yh(s)).then((Y) => {
          t(6, s = Y);
          const N = C.getTracks().map((R) => {
            var j;
            return (j = R.getSettings()) === null || j === void 0 ? void 0 : j.deviceId;
          })[0];
          t(7, o = N && Y.find((R) => R.deviceId === N) || s[0]);
        }), (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) && g("error", m("image.no_webcam_support"));
      } catch (Y) {
        if (Y instanceof DOMException && Y.name == "NotAllowedError")
          g("error", m("image.allow_webcam_access"));
        else
          throw Y;
      }
    });
  }
  function w() {
    var Y = r.getContext("2d");
    (!a || a && k) && i.videoWidth && i.videoHeight && (r.width = i.videoWidth, r.height = i.videoHeight, Y.drawImage(i, 0, 0, i.videoWidth, i.videoHeight), _ && (Y.scale(-1, 1), Y.drawImage(i, -i.videoWidth, 0)), r.toBlob(
      (N) => {
        g(a ? "stream" : "capture", N);
      },
      "image/png",
      0.8
    ));
  }
  let k = !1, B = [], C, p, z;
  function M() {
    if (k) {
      z.stop();
      let Y = new Blob(B, { type: p }), N = new FileReader();
      N.onload = function(R) {
        return n(this, void 0, void 0, function* () {
          var j;
          if (R.target) {
            let le = new File([Y], "sample." + p.substring(6));
            const ge = yield Er([le]);
            let ce = ((j = yield h(ge, c)) === null || j === void 0 ? void 0 : j.filter(Boolean))[0];
            g("capture", ce), g("stop_recording");
          }
        });
      }, N.readAsDataURL(Y);
    } else {
      g("start_recording"), B = [];
      let Y = ["video/webm", "video/mp4"];
      for (let N of Y)
        if (MediaRecorder.isTypeSupported(N)) {
          p = N;
          break;
        }
      if (p === null) {
        console.error("No supported MediaRecorder mimeType");
        return;
      }
      z = new MediaRecorder(C, { mimeType: p }), z.addEventListener("dataavailable", function(N) {
        B.push(N.data);
      }), z.start(200);
    }
    t(8, k = !k);
  }
  let D = !1;
  function S() {
    u === "image" && a && t(8, k = !k), u === "image" ? w() : M(), !k && C && (C.getTracks().forEach((Y) => Y.stop()), t(5, i.srcObject = null, i), t(9, D = !1));
  }
  a && u === "image" && window.setInterval(
    () => {
      i && !f && w();
    },
    500
  );
  let A = !1;
  function F(Y) {
    Y.preventDefault(), Y.stopPropagation(), t(10, A = !1);
  }
  function X(Y) {
    jh[Y ? "unshift" : "push"](() => {
      i = Y, t(5, i);
    });
  }
  const te = async () => v(), G = () => t(10, A = !0), re = () => t(10, A = !1);
  return l.$$set = (Y) => {
    "streaming" in Y && t(0, a = Y.streaming), "pending" in Y && t(15, f = Y.pending), "root" in Y && t(16, c = Y.root), "mode" in Y && t(1, u = Y.mode), "mirror_webcam" in Y && t(2, _ = Y.mirror_webcam), "include_audio" in Y && t(17, d = Y.include_audio), "i18n" in Y && t(3, m = Y.i18n), "upload" in Y && t(18, h = Y.upload);
  }, [
    a,
    u,
    _,
    m,
    Us,
    i,
    s,
    o,
    k,
    D,
    A,
    b,
    v,
    S,
    F,
    f,
    c,
    d,
    h,
    X,
    te,
    G,
    re
  ];
}
class s0 extends Ih {
  constructor(e) {
    super(), Vh(
      this,
      e,
      i0,
      l0,
      Oh,
      {
        streaming: 0,
        pending: 15,
        root: 16,
        mode: 1,
        mirror_webcam: 2,
        include_audio: 17,
        i18n: 3,
        upload: 18,
        click_outside: 4
      },
      null,
      [-1, -1]
    );
  }
  get click_outside() {
    return Us;
  }
}
const {
  SvelteComponent: o0,
  append: Tt,
  attr: H,
  detach: a0,
  init: r0,
  insert: f0,
  noop: es,
  safe_not_equal: c0,
  set_style: jt,
  svg_element: kt
} = window.__gradio__svelte__internal;
function u0(l) {
  let e, t, n, i, s, o, r, a, f;
  return {
    c() {
      e = kt("svg"), t = kt("rect"), n = kt("rect"), i = kt("rect"), s = kt("rect"), o = kt("line"), r = kt("line"), a = kt("line"), f = kt("line"), H(t, "x", "2"), H(t, "y", "2"), H(t, "width", "5"), H(t, "height", "5"), H(t, "rx", "1"), H(t, "ry", "1"), H(t, "stroke-width", "2"), H(t, "fill", "none"), H(n, "x", "17"), H(n, "y", "2"), H(n, "width", "5"), H(n, "height", "5"), H(n, "rx", "1"), H(n, "ry", "1"), H(n, "stroke-width", "2"), H(n, "fill", "none"), H(i, "x", "2"), H(i, "y", "17"), H(i, "width", "5"), H(i, "height", "5"), H(i, "rx", "1"), H(i, "ry", "1"), H(i, "stroke-width", "2"), H(i, "fill", "none"), H(s, "x", "17"), H(s, "y", "17"), H(s, "width", "5"), H(s, "height", "5"), H(s, "rx", "1"), H(s, "ry", "1"), H(s, "stroke-width", "2"), H(s, "fill", "none"), H(o, "x1", "7.5"), H(o, "y1", "4.5"), H(o, "x2", "16"), H(o, "y2", "4.5"), jt(o, "stroke-width", "2px"), H(r, "x1", "7.5"), H(r, "y1", "19.5"), H(r, "x2", "16"), H(r, "y2", "19.5"), jt(r, "stroke-width", "2px"), H(a, "x1", "4.5"), H(a, "y1", "8"), H(a, "x2", "4.5"), H(a, "y2", "16"), jt(a, "stroke-width", "2px"), H(f, "x1", "19.5"), H(f, "y1", "8"), H(f, "x2", "19.5"), H(f, "y2", "16"), jt(f, "stroke-width", "2px"), H(e, "width", "100%"), H(e, "height", "100%"), H(e, "viewBox", "0 0 24 24"), H(e, "version", "1.1"), H(e, "xmlns", "http://www.w3.org/2000/svg"), H(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), H(e, "xml:space", "preserve"), H(e, "stroke", "currentColor"), jt(e, "fill-rule", "evenodd"), jt(e, "clip-rule", "evenodd"), jt(e, "stroke-linecap", "round"), jt(e, "stroke-linejoin", "round");
    },
    m(c, u) {
      f0(c, e, u), Tt(e, t), Tt(e, n), Tt(e, i), Tt(e, s), Tt(e, o), Tt(e, r), Tt(e, a), Tt(e, f);
    },
    p: es,
    i: es,
    o: es,
    d(c) {
      c && a0(e);
    }
  };
}
class _0 extends o0 {
  constructor(e) {
    super(), r0(this, e, null, u0, c0, {});
  }
}
const {
  SvelteComponent: d0,
  append: h0,
  attr: tt,
  detach: m0,
  init: g0,
  insert: b0,
  noop: ts,
  safe_not_equal: w0,
  set_style: Xl,
  svg_element: la
} = window.__gradio__svelte__internal;
function v0(l) {
  let e, t;
  return {
    c() {
      e = la("svg"), t = la("path"), tt(t, "d", "M 14.4 2.85 V 11.1 V 3.95 C 14.4 3.0387 15.1388 2.3 16.05 2.3 C 16.9612 2.3 17.7 3.0387 17.7 3.95 V 11.1 V 7.25 C 17.7 6.3387 18.4388 5.6 19.35 5.6 C 20.2612 5.6 21 6.3387 21 7.25 V 16.6 C 21 20.2451 18.0451 23.2 14.4 23.2 H 13.16 C 11.4831 23.2 9.8692 22.5618 8.6459 21.4149 L 3.1915 16.3014 C 2.403 15.5622 2.3829 14.3171 3.1472 13.5528 C 3.8943 12.8057 5.1057 12.8057 5.8528 13.5528 L 7.8 15.5 V 6.15 C 7.8 5.2387 8.5387 4.5 9.45 4.5 C 10.3612 4.5 11.1 5.2387 11.1 6.15 V 11.1 V 2.85 C 11.1 1.9387 11.8388 1.2 12.75 1.2 C 13.6612 1.2 14.4 1.9387 14.4 2.85 Z"), tt(t, "fill", "none"), tt(t, "stroke-width", "2"), tt(e, "width", "100%"), tt(e, "height", "100%"), tt(e, "viewBox", "0 0 24 24"), tt(e, "version", "1.1"), tt(e, "xmlns", "http://www.w3.org/2000/svg"), tt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), tt(e, "xml:space", "preserve"), tt(e, "stroke", "currentColor"), Xl(e, "fill-rule", "evenodd"), Xl(e, "clip-rule", "evenodd"), Xl(e, "stroke-linecap", "round"), Xl(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      b0(n, e, i), h0(e, t);
    },
    p: ts,
    i: ts,
    o: ts,
    d(n) {
      n && m0(e);
    }
  };
}
class p0 extends d0 {
  constructor(e) {
    super(), g0(this, e, null, v0, w0, {});
  }
}
const {
  SvelteComponent: k0,
  append: y0,
  attr: nt,
  detach: C0,
  init: S0,
  insert: z0,
  noop: ns,
  safe_not_equal: B0,
  set_style: Yl,
  svg_element: ia
} = window.__gradio__svelte__internal;
function D0(l) {
  let e, t;
  return {
    c() {
      e = ia("svg"), t = ia("path"), nt(t, "d", "M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"), nt(t, "fill", "none"), nt(t, "stroke-width", "2"), nt(e, "width", "100%"), nt(e, "height", "100%"), nt(e, "viewBox", "0 0 24 24"), nt(e, "version", "1.1"), nt(e, "xmlns", "http://www.w3.org/2000/svg"), nt(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"), nt(e, "xml:space", "preserve"), nt(e, "stroke", "currentColor"), Yl(e, "fill-rule", "evenodd"), Yl(e, "clip-rule", "evenodd"), Yl(e, "stroke-linecap", "round"), Yl(e, "stroke-linejoin", "round");
    },
    m(n, i) {
      z0(n, e, i), y0(e, t);
    },
    p: ns,
    i: ns,
    o: ns,
    d(n) {
      n && C0(e);
    }
  };
}
class q0 extends k0 {
  constructor(e) {
    super(), S0(this, e, null, D0, B0, {});
  }
}
const {
  SvelteComponent: L0,
  append: sa,
  attr: yt,
  detach: M0,
  init: E0,
  insert: R0,
  noop: ls,
  safe_not_equal: A0,
  set_style: Il,
  svg_element: is
} = window.__gradio__svelte__internal;
function W0(l) {
  let e, t, n;
  return {
    c() {
      e = is("svg"), t = is("path"), n = is("path"), yt(t, "d", "M12,2.5L2.5,12c-.7.7-.7,1.8,0,2.4l7.1,7.1c.7.7,1.8.7,2.4,0l9.5-9.5c.3-.3.5-.8.5-1.2V3.7c0-1-.8-1.7-1.7-1.7h-7.1c-.5,0-.9.2-1.2.5ZM7.3,14.1l4.7-4.7M9.9,16.7l2.2-2.2"), yt(n, "d", "M18.5,6.3c0,.5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9Z"), yt(e, "width", "100%"), yt(e, "height", "100%"), yt(e, "viewBox", "0 0 24 24"), yt(e, "xmlns", "http://www.w3.org/2000/svg"), yt(e, "fill", "none"), yt(e, "stroke", "currentColor"), yt(e, "stroke-width", "2"), Il(e, "fill-rule", "evenodd"), Il(e, "clip-rule", "evenodd"), Il(e, "stroke-linecap", "round"), Il(e, "stroke-linejoin", "round");
    },
    m(i, s) {
      R0(i, e, s), sa(e, t), sa(e, n);
    },
    p: ls,
    i: ls,
    o: ls,
    d(i) {
      i && M0(e);
    }
  };
}
class X0 extends L0 {
  constructor(e) {
    super(), E0(this, e, null, W0, A0, {});
  }
}
const {
  SvelteComponent: Y0,
  append: I0,
  attr: Ft,
  detach: H0,
  init: T0,
  insert: j0,
  noop: ss,
  safe_not_equal: F0,
  set_style: Hl,
  svg_element: oa
} = window.__gradio__svelte__internal;
function U0(l) {
  let e, t;
  return {
    c() {
      e = oa("svg"), t = oa("path"), Ft(t, "d", "M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"), Ft(e, "width", "100%"), Ft(e, "height", "100%"), Ft(e, "viewBox", "0 0 24 24"), Ft(e, "fill", "none"), Ft(e, "stroke", "currentColor"), Ft(e, "stroke-width", "2"), Hl(e, "fill-rule", "evenodd"), Hl(e, "clip-rule", "evenodd"), Hl(e, "stroke-linecap", "round"), Hl(e, "stroke-linejoin", "round"), Ft(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      j0(n, e, i), I0(e, t);
    },
    p: ss,
    i: ss,
    o: ss,
    d(n) {
      n && H0(e);
    }
  };
}
class V0 extends Y0 {
  constructor(e) {
    super(), T0(this, e, null, U0, F0, {});
  }
}
const {
  SvelteComponent: N0,
  append: O0,
  attr: Ut,
  detach: P0,
  init: K0,
  insert: Z0,
  noop: os,
  safe_not_equal: G0,
  set_style: Tl,
  svg_element: aa
} = window.__gradio__svelte__internal;
function J0(l) {
  let e, t;
  return {
    c() {
      e = aa("svg"), t = aa("path"), Ut(t, "d", "M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"), Ut(e, "width", "100%"), Ut(e, "height", "100%"), Ut(e, "viewBox", "0 0 24 24"), Ut(e, "fill", "none"), Ut(e, "stroke", "currentColor"), Ut(e, "stroke-width", "2"), Tl(e, "fill-rule", "evenodd"), Tl(e, "clip-rule", "evenodd"), Tl(e, "stroke-linecap", "round"), Tl(e, "stroke-linejoin", "round"), Ut(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, i) {
      Z0(n, e, i), O0(e, t);
    },
    p: os,
    i: os,
    o: os,
    d(n) {
      n && P0(e);
    }
  };
}
class Q0 extends N0 {
  constructor(e) {
    super(), K0(this, e, null, J0, G0, {});
  }
}
const {
  SvelteComponent: x0,
  append: ra,
  attr: as,
  bubble: fa,
  create_component: $0,
  destroy_component: em,
  detach: Nr,
  element: ca,
  init: tm,
  insert: Or,
  listen: rs,
  mount_component: nm,
  run_all: lm,
  safe_not_equal: im,
  set_data: sm,
  set_input_value: ua,
  space: om,
  text: am,
  transition_in: rm,
  transition_out: fm
} = window.__gradio__svelte__internal, { createEventDispatcher: cm, afterUpdate: um } = window.__gradio__svelte__internal;
function _m(l) {
  let e;
  return {
    c() {
      e = am(
        /*label*/
        l[1]
      );
    },
    m(t, n) {
      Or(t, e, n);
    },
    p(t, n) {
      n & /*label*/
      2 && sm(
        e,
        /*label*/
        t[1]
      );
    },
    d(t) {
      t && Nr(e);
    }
  };
}
function dm(l) {
  let e, t, n, i, s, o, r;
  return t = new xa({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[2]
      ),
      $$slots: { default: [_m] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = ca("label"), $0(t.$$.fragment), n = om(), i = ca("input"), as(i, "type", "color"), i.disabled = /*disabled*/
      l[3], as(i, "class", "svelte-16l8u73"), as(e, "class", "block");
    },
    m(a, f) {
      Or(a, e, f), nm(t, e, null), ra(e, n), ra(e, i), ua(
        i,
        /*value*/
        l[0]
      ), s = !0, o || (r = [
        rs(
          i,
          "input",
          /*input_input_handler*/
          l[8]
        ),
        rs(
          i,
          "focus",
          /*focus_handler*/
          l[6]
        ),
        rs(
          i,
          "blur",
          /*blur_handler*/
          l[7]
        )
      ], o = !0);
    },
    p(a, [f]) {
      const c = {};
      f & /*show_label*/
      16 && (c.show_label = /*show_label*/
      a[4]), f & /*info*/
      4 && (c.info = /*info*/
      a[2]), f & /*$$scope, label*/
      2050 && (c.$$scope = { dirty: f, ctx: a }), t.$set(c), (!s || f & /*disabled*/
      8) && (i.disabled = /*disabled*/
      a[3]), f & /*value*/
      1 && ua(
        i,
        /*value*/
        a[0]
      );
    },
    i(a) {
      s || (rm(t.$$.fragment, a), s = !0);
    },
    o(a) {
      fm(t.$$.fragment, a), s = !1;
    },
    d(a) {
      a && Nr(e), em(t), o = !1, lm(r);
    }
  };
}
function hm(l, e, t) {
  let { value: n = "#000000" } = e, { value_is_output: i = !1 } = e, { label: s } = e, { info: o = void 0 } = e, { disabled: r = !1 } = e, { show_label: a = !0 } = e;
  const f = cm();
  function c() {
    f("change", n), i || f("input");
  }
  um(() => {
    t(5, i = !1);
  });
  function u(m) {
    fa.call(this, l, m);
  }
  function _(m) {
    fa.call(this, l, m);
  }
  function d() {
    n = this.value, t(0, n);
  }
  return l.$$set = (m) => {
    "value" in m && t(0, n = m.value), "value_is_output" in m && t(5, i = m.value_is_output), "label" in m && t(1, s = m.label), "info" in m && t(2, o = m.info), "disabled" in m && t(3, r = m.disabled), "show_label" in m && t(4, a = m.show_label);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && c();
  }, [
    n,
    s,
    o,
    r,
    a,
    i,
    u,
    _,
    d
  ];
}
class mm extends x0 {
  constructor(e) {
    super(), tm(this, e, hm, dm, im, {
      value: 0,
      value_is_output: 5,
      label: 1,
      info: 2,
      disabled: 3,
      show_label: 4
    });
  }
}
const {
  SvelteComponent: gm,
  append: Pr,
  attr: oe,
  bubble: bm,
  check_outros: wm,
  create_slot: Kr,
  detach: Cl,
  element: ki,
  empty: vm,
  get_all_dirty_from_scope: Zr,
  get_slot_changes: Gr,
  group_outros: pm,
  init: km,
  insert: Sl,
  listen: ym,
  safe_not_equal: Cm,
  set_style: Me,
  space: Jr,
  src_url_equal: oi,
  toggle_class: Tn,
  transition_in: ai,
  transition_out: ri,
  update_slot_base: Qr
} = window.__gradio__svelte__internal;
function Sm(l) {
  let e, t, n, i, s, o, r = (
    /*icon*/
    l[7] && _a(l)
  );
  const a = (
    /*#slots*/
    l[12].default
  ), f = Kr(
    a,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = ki("button"), r && r.c(), t = Jr(), f && f.c(), oe(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), oe(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), e.disabled = /*disabled*/
      l[8], Tn(e, "hidden", !/*visible*/
      l[2]), Me(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), Me(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), Me(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(c, u) {
      Sl(c, e, u), r && r.m(e, null), Pr(e, t), f && f.m(e, null), i = !0, s || (o = ym(
        e,
        "click",
        /*click_handler*/
        l[13]
      ), s = !0);
    },
    p(c, u) {
      /*icon*/
      c[7] ? r ? r.p(c, u) : (r = _a(c), r.c(), r.m(e, t)) : r && (r.d(1), r = null), f && f.p && (!i || u & /*$$scope*/
      2048) && Qr(
        f,
        a,
        c,
        /*$$scope*/
        c[11],
        i ? Gr(
          a,
          /*$$scope*/
          c[11],
          u,
          null
        ) : Zr(
          /*$$scope*/
          c[11]
        ),
        null
      ), (!i || u & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      c[4] + " " + /*variant*/
      c[3] + " " + /*elem_classes*/
      c[1].join(" ") + " svelte-8huxfn")) && oe(e, "class", n), (!i || u & /*elem_id*/
      1) && oe(
        e,
        "id",
        /*elem_id*/
        c[0]
      ), (!i || u & /*disabled*/
      256) && (e.disabled = /*disabled*/
      c[8]), (!i || u & /*size, variant, elem_classes, visible*/
      30) && Tn(e, "hidden", !/*visible*/
      c[2]), u & /*scale*/
      512 && Me(
        e,
        "flex-grow",
        /*scale*/
        c[9]
      ), u & /*scale*/
      512 && Me(
        e,
        "width",
        /*scale*/
        c[9] === 0 ? "fit-content" : null
      ), u & /*min_width*/
      1024 && Me(e, "min-width", typeof /*min_width*/
      c[10] == "number" ? `calc(min(${/*min_width*/
      c[10]}px, 100%))` : null);
    },
    i(c) {
      i || (ai(f, c), i = !0);
    },
    o(c) {
      ri(f, c), i = !1;
    },
    d(c) {
      c && Cl(e), r && r.d(), f && f.d(c), s = !1, o();
    }
  };
}
function zm(l) {
  let e, t, n, i, s = (
    /*icon*/
    l[7] && da(l)
  );
  const o = (
    /*#slots*/
    l[12].default
  ), r = Kr(
    o,
    l,
    /*$$scope*/
    l[11],
    null
  );
  return {
    c() {
      e = ki("a"), s && s.c(), t = Jr(), r && r.c(), oe(
        e,
        "href",
        /*link*/
        l[6]
      ), oe(e, "rel", "noopener noreferrer"), oe(
        e,
        "aria-disabled",
        /*disabled*/
        l[8]
      ), oe(e, "class", n = /*size*/
      l[4] + " " + /*variant*/
      l[3] + " " + /*elem_classes*/
      l[1].join(" ") + " svelte-8huxfn"), oe(
        e,
        "id",
        /*elem_id*/
        l[0]
      ), Tn(e, "hidden", !/*visible*/
      l[2]), Tn(
        e,
        "disabled",
        /*disabled*/
        l[8]
      ), Me(
        e,
        "flex-grow",
        /*scale*/
        l[9]
      ), Me(
        e,
        "pointer-events",
        /*disabled*/
        l[8] ? "none" : null
      ), Me(
        e,
        "width",
        /*scale*/
        l[9] === 0 ? "fit-content" : null
      ), Me(e, "min-width", typeof /*min_width*/
      l[10] == "number" ? `calc(min(${/*min_width*/
      l[10]}px, 100%))` : null);
    },
    m(a, f) {
      Sl(a, e, f), s && s.m(e, null), Pr(e, t), r && r.m(e, null), i = !0;
    },
    p(a, f) {
      /*icon*/
      a[7] ? s ? s.p(a, f) : (s = da(a), s.c(), s.m(e, t)) : s && (s.d(1), s = null), r && r.p && (!i || f & /*$$scope*/
      2048) && Qr(
        r,
        o,
        a,
        /*$$scope*/
        a[11],
        i ? Gr(
          o,
          /*$$scope*/
          a[11],
          f,
          null
        ) : Zr(
          /*$$scope*/
          a[11]
        ),
        null
      ), (!i || f & /*link*/
      64) && oe(
        e,
        "href",
        /*link*/
        a[6]
      ), (!i || f & /*disabled*/
      256) && oe(
        e,
        "aria-disabled",
        /*disabled*/
        a[8]
      ), (!i || f & /*size, variant, elem_classes*/
      26 && n !== (n = /*size*/
      a[4] + " " + /*variant*/
      a[3] + " " + /*elem_classes*/
      a[1].join(" ") + " svelte-8huxfn")) && oe(e, "class", n), (!i || f & /*elem_id*/
      1) && oe(
        e,
        "id",
        /*elem_id*/
        a[0]
      ), (!i || f & /*size, variant, elem_classes, visible*/
      30) && Tn(e, "hidden", !/*visible*/
      a[2]), (!i || f & /*size, variant, elem_classes, disabled*/
      282) && Tn(
        e,
        "disabled",
        /*disabled*/
        a[8]
      ), f & /*scale*/
      512 && Me(
        e,
        "flex-grow",
        /*scale*/
        a[9]
      ), f & /*disabled*/
      256 && Me(
        e,
        "pointer-events",
        /*disabled*/
        a[8] ? "none" : null
      ), f & /*scale*/
      512 && Me(
        e,
        "width",
        /*scale*/
        a[9] === 0 ? "fit-content" : null
      ), f & /*min_width*/
      1024 && Me(e, "min-width", typeof /*min_width*/
      a[10] == "number" ? `calc(min(${/*min_width*/
      a[10]}px, 100%))` : null);
    },
    i(a) {
      i || (ai(r, a), i = !0);
    },
    o(a) {
      ri(r, a), i = !1;
    },
    d(a) {
      a && Cl(e), s && s.d(), r && r.d(a);
    }
  };
}
function _a(l) {
  let e, t, n;
  return {
    c() {
      e = ki("img"), oe(e, "class", "button-icon svelte-8huxfn"), oi(e.src, t = /*icon*/
      l[7].url) || oe(e, "src", t), oe(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, s) {
      Sl(i, e, s);
    },
    p(i, s) {
      s & /*icon*/
      128 && !oi(e.src, t = /*icon*/
      i[7].url) && oe(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && oe(e, "alt", n);
    },
    d(i) {
      i && Cl(e);
    }
  };
}
function da(l) {
  let e, t, n;
  return {
    c() {
      e = ki("img"), oe(e, "class", "button-icon svelte-8huxfn"), oi(e.src, t = /*icon*/
      l[7].url) || oe(e, "src", t), oe(e, "alt", n = `${/*value*/
      l[5]} icon`);
    },
    m(i, s) {
      Sl(i, e, s);
    },
    p(i, s) {
      s & /*icon*/
      128 && !oi(e.src, t = /*icon*/
      i[7].url) && oe(e, "src", t), s & /*value*/
      32 && n !== (n = `${/*value*/
      i[5]} icon`) && oe(e, "alt", n);
    },
    d(i) {
      i && Cl(e);
    }
  };
}
function Bm(l) {
  let e, t, n, i;
  const s = [zm, Sm], o = [];
  function r(a, f) {
    return (
      /*link*/
      a[6] && /*link*/
      a[6].length > 0 ? 0 : 1
    );
  }
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = vm();
    },
    m(a, f) {
      o[e].m(a, f), Sl(a, n, f), i = !0;
    },
    p(a, [f]) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (pm(), ri(o[c], 1, 1, () => {
        o[c] = null;
      }), wm(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), ai(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (ai(t), i = !0);
    },
    o(a) {
      ri(t), i = !1;
    },
    d(a) {
      a && Cl(n), o[e].d(a);
    }
  };
}
function Dm(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { elem_id: s = "" } = e, { elem_classes: o = [] } = e, { visible: r = !0 } = e, { variant: a = "secondary" } = e, { size: f = "lg" } = e, { value: c = null } = e, { link: u = null } = e, { icon: _ = null } = e, { disabled: d = !1 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e;
  function g(b) {
    bm.call(this, l, b);
  }
  return l.$$set = (b) => {
    "elem_id" in b && t(0, s = b.elem_id), "elem_classes" in b && t(1, o = b.elem_classes), "visible" in b && t(2, r = b.visible), "variant" in b && t(3, a = b.variant), "size" in b && t(4, f = b.size), "value" in b && t(5, c = b.value), "link" in b && t(6, u = b.link), "icon" in b && t(7, _ = b.icon), "disabled" in b && t(8, d = b.disabled), "scale" in b && t(9, m = b.scale), "min_width" in b && t(10, h = b.min_width), "$$scope" in b && t(11, i = b.$$scope);
  }, [
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    h,
    i,
    n,
    g
  ];
}
class Ds extends gm {
  constructor(e) {
    super(), km(this, e, Dm, Bm, Cm, {
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      variant: 3,
      size: 4,
      value: 5,
      link: 6,
      icon: 7,
      disabled: 8,
      scale: 9,
      min_width: 10
    });
  }
}
const {
  SvelteComponent: qm,
  add_render_callback: xr,
  append: jl,
  attr: Te,
  binding_callbacks: ha,
  check_outros: Lm,
  create_bidirectional_transition: ma,
  destroy_each: Mm,
  detach: bl,
  element: fi,
  empty: Em,
  ensure_array_like: ga,
  group_outros: Rm,
  init: Am,
  insert: wl,
  listen: qs,
  prevent_default: Wm,
  run_all: Xm,
  safe_not_equal: Ym,
  set_data: Im,
  set_style: Rn,
  space: Ls,
  text: Hm,
  toggle_class: rt,
  transition_in: fs,
  transition_out: ba
} = window.__gradio__svelte__internal, { createEventDispatcher: Tm } = window.__gradio__svelte__internal;
function wa(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function va(l) {
  let e, t, n, i, s, o = ga(
    /*filtered_indices*/
    l[1]
  ), r = [];
  for (let a = 0; a < o.length; a += 1)
    r[a] = pa(wa(l, o, a));
  return {
    c() {
      e = fi("ul");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      Te(e, "class", "options svelte-yuohum"), Te(e, "role", "listbox"), Rn(
        e,
        "bottom",
        /*bottom*/
        l[9]
      ), Rn(e, "max-height", `calc(${/*max_height*/
      l[10]}px - var(--window-padding))`), Rn(
        e,
        "width",
        /*input_width*/
        l[8] + "px"
      );
    },
    m(a, f) {
      wl(a, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      l[22](e), n = !0, i || (s = qs(e, "mousedown", Wm(
        /*mousedown_handler*/
        l[21]
      )), i = !0);
    },
    p(a, f) {
      if (f & /*filtered_indices, choices, selected_indices, active_index*/
      51) {
        o = ga(
          /*filtered_indices*/
          a[1]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const u = wa(a, o, c);
          r[c] ? r[c].p(u, f) : (r[c] = pa(u), r[c].c(), r[c].m(e, null));
        }
        for (; c < r.length; c += 1)
          r[c].d(1);
        r.length = o.length;
      }
      f & /*bottom*/
      512 && Rn(
        e,
        "bottom",
        /*bottom*/
        a[9]
      ), f & /*max_height*/
      1024 && Rn(e, "max-height", `calc(${/*max_height*/
      a[10]}px - var(--window-padding))`), f & /*input_width*/
      256 && Rn(
        e,
        "width",
        /*input_width*/
        a[8] + "px"
      );
    },
    i(a) {
      n || (a && xr(() => {
        n && (t || (t = ma(e, Co, { duration: 200, y: 5 }, !0)), t.run(1));
      }), n = !0);
    },
    o(a) {
      a && (t || (t = ma(e, Co, { duration: 200, y: 5 }, !1)), t.run(0)), n = !1;
    },
    d(a) {
      a && bl(e), Mm(r, a), l[22](null), a && t && t.end(), i = !1, s();
    }
  };
}
function pa(l) {
  let e, t, n, i = (
    /*choices*/
    l[0][
      /*index*/
      l[26]
    ][0] + ""
  ), s, o, r, a, f;
  return {
    c() {
      e = fi("li"), t = fi("span"), t.textContent = "✓", n = Ls(), s = Hm(i), o = Ls(), Te(t, "class", "inner-item svelte-yuohum"), rt(t, "hide", !/*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), Te(e, "class", "item svelte-yuohum"), Te(e, "data-index", r = /*index*/
      l[26]), Te(e, "aria-label", a = /*choices*/
      l[0][
        /*index*/
        l[26]
      ][0]), Te(e, "data-testid", "dropdown-option"), Te(e, "role", "option"), Te(e, "aria-selected", f = /*selected_indices*/
      l[4].includes(
        /*index*/
        l[26]
      )), rt(
        e,
        "selected",
        /*selected_indices*/
        l[4].includes(
          /*index*/
          l[26]
        )
      ), rt(
        e,
        "active",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), rt(
        e,
        "bg-gray-100",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      ), rt(
        e,
        "dark:bg-gray-600",
        /*index*/
        l[26] === /*active_index*/
        l[5]
      );
    },
    m(c, u) {
      wl(c, e, u), jl(e, t), jl(e, n), jl(e, s), jl(e, o);
    },
    p(c, u) {
      u & /*selected_indices, filtered_indices*/
      18 && rt(t, "hide", !/*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )), u & /*choices, filtered_indices*/
      3 && i !== (i = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0] + "") && Im(s, i), u & /*filtered_indices*/
      2 && r !== (r = /*index*/
      c[26]) && Te(e, "data-index", r), u & /*choices, filtered_indices*/
      3 && a !== (a = /*choices*/
      c[0][
        /*index*/
        c[26]
      ][0]) && Te(e, "aria-label", a), u & /*selected_indices, filtered_indices*/
      18 && f !== (f = /*selected_indices*/
      c[4].includes(
        /*index*/
        c[26]
      )) && Te(e, "aria-selected", f), u & /*selected_indices, filtered_indices*/
      18 && rt(
        e,
        "selected",
        /*selected_indices*/
        c[4].includes(
          /*index*/
          c[26]
        )
      ), u & /*filtered_indices, active_index*/
      34 && rt(
        e,
        "active",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && rt(
        e,
        "bg-gray-100",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      ), u & /*filtered_indices, active_index*/
      34 && rt(
        e,
        "dark:bg-gray-600",
        /*index*/
        c[26] === /*active_index*/
        c[5]
      );
    },
    d(c) {
      c && bl(e);
    }
  };
}
function jm(l) {
  let e, t, n, i, s;
  xr(
    /*onwindowresize*/
    l[19]
  );
  let o = (
    /*show_options*/
    l[2] && !/*disabled*/
    l[3] && va(l)
  );
  return {
    c() {
      e = fi("div"), t = Ls(), o && o.c(), n = Em(), Te(e, "class", "reference");
    },
    m(r, a) {
      wl(r, e, a), l[20](e), wl(r, t, a), o && o.m(r, a), wl(r, n, a), i || (s = [
        qs(
          window,
          "scroll",
          /*scroll_listener*/
          l[12]
        ),
        qs(
          window,
          "resize",
          /*onwindowresize*/
          l[19]
        )
      ], i = !0);
    },
    p(r, [a]) {
      /*show_options*/
      r[2] && !/*disabled*/
      r[3] ? o ? (o.p(r, a), a & /*show_options, disabled*/
      12 && fs(o, 1)) : (o = va(r), o.c(), fs(o, 1), o.m(n.parentNode, n)) : o && (Rm(), ba(o, 1, 1, () => {
        o = null;
      }), Lm());
    },
    i(r) {
      fs(o);
    },
    o(r) {
      ba(o);
    },
    d(r) {
      r && (bl(e), bl(t), bl(n)), l[20](null), o && o.d(r), i = !1, Xm(s);
    }
  };
}
function Fm(l, e, t) {
  var n, i;
  let { choices: s } = e, { filtered_indices: o } = e, { show_options: r = !1 } = e, { disabled: a = !1 } = e, { selected_indices: f = [] } = e, { active_index: c = null } = e, u, _, d, m, h, g, b, v, w;
  function k() {
    const { top: A, bottom: F } = h.getBoundingClientRect();
    t(16, u = A), t(17, _ = w - F);
  }
  let B = null;
  function C() {
    r && (B !== null && clearTimeout(B), B = setTimeout(
      () => {
        k(), B = null;
      },
      10
    ));
  }
  const p = Tm();
  function z() {
    t(11, w = window.innerHeight);
  }
  function M(A) {
    ha[A ? "unshift" : "push"](() => {
      h = A, t(6, h);
    });
  }
  const D = (A) => p("change", A);
  function S(A) {
    ha[A ? "unshift" : "push"](() => {
      g = A, t(7, g);
    });
  }
  return l.$$set = (A) => {
    "choices" in A && t(0, s = A.choices), "filtered_indices" in A && t(1, o = A.filtered_indices), "show_options" in A && t(2, r = A.show_options), "disabled" in A && t(3, a = A.disabled), "selected_indices" in A && t(4, f = A.selected_indices), "active_index" in A && t(5, c = A.active_index);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*show_options, refElement, listElement, selected_indices, _a, _b, distance_from_bottom, distance_from_top, input_height*/
    508116) {
      if (r && h) {
        if (g && f.length > 0) {
          let F = g.querySelectorAll("li");
          for (const X of Array.from(F))
            if (X.getAttribute("data-index") === f[0].toString()) {
              t(14, n = g == null ? void 0 : g.scrollTo) === null || n === void 0 || n.call(g, 0, X.offsetTop);
              break;
            }
        }
        k();
        const A = t(15, i = h.parentElement) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
        t(18, d = (A == null ? void 0 : A.height) || 0), t(8, m = (A == null ? void 0 : A.width) || 0);
      }
      _ > u ? (t(10, v = _), t(9, b = null)) : (t(9, b = `${_ + d}px`), t(10, v = u - d));
    }
  }, [
    s,
    o,
    r,
    a,
    f,
    c,
    h,
    g,
    m,
    b,
    v,
    w,
    C,
    p,
    n,
    i,
    u,
    _,
    d,
    z,
    M,
    D,
    S
  ];
}
class Um extends qm {
  constructor(e) {
    super(), Am(this, e, Fm, jm, Ym, {
      choices: 0,
      filtered_indices: 1,
      show_options: 2,
      disabled: 3,
      selected_indices: 4,
      active_index: 5
    });
  }
}
function Vm(l, e) {
  return (l % e + e) % e;
}
function ka(l, e) {
  return l.reduce((t, n, i) => ((!e || n[0].toLowerCase().includes(e.toLowerCase())) && t.push(i), t), []);
}
function Nm(l, e, t) {
  l("change", e), t || l("input");
}
function Om(l, e, t) {
  if (l.key === "Escape")
    return [!1, e];
  if ((l.key === "ArrowDown" || l.key === "ArrowUp") && t.length >= 0)
    if (e === null)
      e = l.key === "ArrowDown" ? t[0] : t[t.length - 1];
    else {
      const n = t.indexOf(e), i = l.key === "ArrowUp" ? -1 : 1;
      e = t[Vm(n + i, t.length)];
    }
  return [!0, e];
}
const {
  SvelteComponent: Pm,
  append: tn,
  attr: He,
  binding_callbacks: Km,
  check_outros: Zm,
  create_component: Ms,
  destroy_component: Es,
  detach: Vs,
  element: Xn,
  group_outros: Gm,
  init: Jm,
  insert: Ns,
  listen: sl,
  mount_component: Rs,
  run_all: Qm,
  safe_not_equal: xm,
  set_data: $m,
  set_input_value: ya,
  space: cs,
  text: eg,
  toggle_class: An,
  transition_in: Yn,
  transition_out: dl
} = window.__gradio__svelte__internal, { onMount: tg } = window.__gradio__svelte__internal, { createEventDispatcher: ng, afterUpdate: lg } = window.__gradio__svelte__internal;
function ig(l) {
  let e;
  return {
    c() {
      e = eg(
        /*label*/
        l[0]
      );
    },
    m(t, n) {
      Ns(t, e, n);
    },
    p(t, n) {
      n[0] & /*label*/
      1 && $m(
        e,
        /*label*/
        t[0]
      );
    },
    d(t) {
      t && Vs(e);
    }
  };
}
function Ca(l) {
  let e, t, n;
  return t = new Xs({}), {
    c() {
      e = Xn("div"), Ms(t.$$.fragment), He(e, "class", "icon-wrap svelte-1m1zvyj");
    },
    m(i, s) {
      Ns(i, e, s), Rs(t, e, null), n = !0;
    },
    i(i) {
      n || (Yn(t.$$.fragment, i), n = !0);
    },
    o(i) {
      dl(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Vs(e), Es(t);
    }
  };
}
function sg(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _, d, m;
  t = new xa({
    props: {
      show_label: (
        /*show_label*/
        l[4]
      ),
      info: (
        /*info*/
        l[1]
      ),
      $$slots: { default: [ig] },
      $$scope: { ctx: l }
    }
  });
  let h = !/*disabled*/
  l[3] && Ca();
  return u = new Um({
    props: {
      show_options: (
        /*show_options*/
        l[12]
      ),
      choices: (
        /*choices*/
        l[2]
      ),
      filtered_indices: (
        /*filtered_indices*/
        l[10]
      ),
      disabled: (
        /*disabled*/
        l[3]
      ),
      selected_indices: (
        /*selected_index*/
        l[11] === null ? [] : [
          /*selected_index*/
          l[11]
        ]
      ),
      active_index: (
        /*active_index*/
        l[14]
      )
    }
  }), u.$on(
    "change",
    /*handle_option_selected*/
    l[16]
  ), {
    c() {
      e = Xn("div"), Ms(t.$$.fragment), n = cs(), i = Xn("div"), s = Xn("div"), o = Xn("div"), r = Xn("input"), f = cs(), h && h.c(), c = cs(), Ms(u.$$.fragment), He(r, "role", "listbox"), He(r, "aria-controls", "dropdown-options"), He(
        r,
        "aria-expanded",
        /*show_options*/
        l[12]
      ), He(
        r,
        "aria-label",
        /*label*/
        l[0]
      ), He(r, "class", "border-none svelte-1m1zvyj"), r.disabled = /*disabled*/
      l[3], He(r, "autocomplete", "off"), r.readOnly = a = !/*filterable*/
      l[7], An(r, "subdued", !/*choices_names*/
      l[13].includes(
        /*input_text*/
        l[9]
      ) && !/*allow_custom_value*/
      l[6]), He(o, "class", "secondary-wrap svelte-1m1zvyj"), He(s, "class", "wrap-inner svelte-1m1zvyj"), An(
        s,
        "show_options",
        /*show_options*/
        l[12]
      ), He(i, "class", "wrap svelte-1m1zvyj"), He(e, "class", "svelte-1m1zvyj"), An(
        e,
        "container",
        /*container*/
        l[5]
      );
    },
    m(g, b) {
      Ns(g, e, b), Rs(t, e, null), tn(e, n), tn(e, i), tn(i, s), tn(s, o), tn(o, r), ya(
        r,
        /*input_text*/
        l[9]
      ), l[29](r), tn(o, f), h && h.m(o, null), tn(i, c), Rs(u, i, null), _ = !0, d || (m = [
        sl(
          r,
          "input",
          /*input_input_handler*/
          l[28]
        ),
        sl(
          r,
          "keydown",
          /*handle_key_down*/
          l[19]
        ),
        sl(
          r,
          "keyup",
          /*keyup_handler*/
          l[30]
        ),
        sl(
          r,
          "blur",
          /*handle_blur*/
          l[18]
        ),
        sl(
          r,
          "focus",
          /*handle_focus*/
          l[17]
        )
      ], d = !0);
    },
    p(g, b) {
      const v = {};
      b[0] & /*show_label*/
      16 && (v.show_label = /*show_label*/
      g[4]), b[0] & /*info*/
      2 && (v.info = /*info*/
      g[1]), b[0] & /*label*/
      1 | b[1] & /*$$scope*/
      4 && (v.$$scope = { dirty: b, ctx: g }), t.$set(v), (!_ || b[0] & /*show_options*/
      4096) && He(
        r,
        "aria-expanded",
        /*show_options*/
        g[12]
      ), (!_ || b[0] & /*label*/
      1) && He(
        r,
        "aria-label",
        /*label*/
        g[0]
      ), (!_ || b[0] & /*disabled*/
      8) && (r.disabled = /*disabled*/
      g[3]), (!_ || b[0] & /*filterable*/
      128 && a !== (a = !/*filterable*/
      g[7])) && (r.readOnly = a), b[0] & /*input_text*/
      512 && r.value !== /*input_text*/
      g[9] && ya(
        r,
        /*input_text*/
        g[9]
      ), (!_ || b[0] & /*choices_names, input_text, allow_custom_value*/
      8768) && An(r, "subdued", !/*choices_names*/
      g[13].includes(
        /*input_text*/
        g[9]
      ) && !/*allow_custom_value*/
      g[6]), /*disabled*/
      g[3] ? h && (Gm(), dl(h, 1, 1, () => {
        h = null;
      }), Zm()) : h ? b[0] & /*disabled*/
      8 && Yn(h, 1) : (h = Ca(), h.c(), Yn(h, 1), h.m(o, null)), (!_ || b[0] & /*show_options*/
      4096) && An(
        s,
        "show_options",
        /*show_options*/
        g[12]
      );
      const w = {};
      b[0] & /*show_options*/
      4096 && (w.show_options = /*show_options*/
      g[12]), b[0] & /*choices*/
      4 && (w.choices = /*choices*/
      g[2]), b[0] & /*filtered_indices*/
      1024 && (w.filtered_indices = /*filtered_indices*/
      g[10]), b[0] & /*disabled*/
      8 && (w.disabled = /*disabled*/
      g[3]), b[0] & /*selected_index*/
      2048 && (w.selected_indices = /*selected_index*/
      g[11] === null ? [] : [
        /*selected_index*/
        g[11]
      ]), b[0] & /*active_index*/
      16384 && (w.active_index = /*active_index*/
      g[14]), u.$set(w), (!_ || b[0] & /*container*/
      32) && An(
        e,
        "container",
        /*container*/
        g[5]
      );
    },
    i(g) {
      _ || (Yn(t.$$.fragment, g), Yn(h), Yn(u.$$.fragment, g), _ = !0);
    },
    o(g) {
      dl(t.$$.fragment, g), dl(h), dl(u.$$.fragment, g), _ = !1;
    },
    d(g) {
      g && Vs(e), Es(t), l[29](null), h && h.d(), Es(u), d = !1, Qm(m);
    }
  };
}
function og(l, e, t) {
  let { label: n } = e, { info: i = void 0 } = e, { value: s = [] } = e, o = [], { value_is_output: r = !1 } = e, { choices: a } = e, f, { disabled: c = !1 } = e, { show_label: u } = e, { container: _ = !0 } = e, { allow_custom_value: d = !1 } = e, { filterable: m = !0 } = e, h, g = !1, b, v, w = "", k = "", B = !1, C = [], p = null, z = null, M;
  const D = ng();
  s ? (M = a.map((R) => R[1]).indexOf(s), z = M, z === -1 ? (o = s, z = null) : ([w, o] = a[z], k = w), A()) : a.length > 0 && (M = 0, z = 0, [w, s] = a[z], o = s, k = w);
  function S() {
    t(13, b = a.map((R) => R[0])), t(24, v = a.map((R) => R[1]));
  }
  function A() {
    S(), s === void 0 || Array.isArray(s) && s.length === 0 ? (t(9, w = ""), t(11, z = null)) : v.includes(s) ? (t(9, w = b[v.indexOf(s)]), t(11, z = v.indexOf(s))) : d ? (t(9, w = s), t(11, z = null)) : (t(9, w = ""), t(11, z = null)), t(27, M = z);
  }
  function F(R) {
    if (t(11, z = parseInt(R.detail.target.dataset.index)), isNaN(z)) {
      t(11, z = null);
      return;
    }
    t(12, g = !1), t(14, p = null), h.blur();
  }
  function X(R) {
    t(10, C = a.map((j, le) => le)), t(12, g = !0), D("focus");
  }
  function te() {
    d ? t(20, s = w) : t(9, w = b[v.indexOf(s)]), t(12, g = !1), t(14, p = null), D("blur");
  }
  function G(R) {
    t(12, [g, p] = Om(R, p, C), g, (t(14, p), t(2, a), t(23, f), t(6, d), t(9, w), t(10, C), t(8, h), t(25, k), t(11, z), t(27, M), t(26, B), t(24, v))), R.key === "Enter" && (p !== null ? (t(11, z = p), t(12, g = !1), h.blur(), t(14, p = null)) : b.includes(w) ? (t(11, z = b.indexOf(w)), t(12, g = !1), t(14, p = null), h.blur()) : d && (t(20, s = w), t(11, z = null), t(12, g = !1), t(14, p = null), h.blur()), D("enter", s));
  }
  lg(() => {
    t(21, r = !1), t(26, B = !0);
  }), tg(() => {
    h.focus();
  });
  function re() {
    w = this.value, t(9, w), t(11, z), t(27, M), t(26, B), t(2, a), t(24, v);
  }
  function Y(R) {
    Km[R ? "unshift" : "push"](() => {
      h = R, t(8, h);
    });
  }
  const N = (R) => D("key_up", { key: R.key, input_value: w });
  return l.$$set = (R) => {
    "label" in R && t(0, n = R.label), "info" in R && t(1, i = R.info), "value" in R && t(20, s = R.value), "value_is_output" in R && t(21, r = R.value_is_output), "choices" in R && t(2, a = R.choices), "disabled" in R && t(3, c = R.disabled), "show_label" in R && t(4, u = R.show_label), "container" in R && t(5, _ = R.container), "allow_custom_value" in R && t(6, d = R.allow_custom_value), "filterable" in R && t(7, m = R.filterable);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*selected_index, old_selected_index, initialized, choices, choices_values*/
    218105860 && z !== M && z !== null && B && (t(9, [w, s] = a[z], w, (t(20, s), t(11, z), t(27, M), t(26, B), t(2, a), t(24, v))), t(27, M = z), D("select", {
      index: z,
      value: v[z],
      selected: !0
    })), l.$$.dirty[0] & /*value, old_value, value_is_output*/
    7340032 && s != o && (A(), Nm(D, s, r), t(22, o = s)), l.$$.dirty[0] & /*choices*/
    4 && S(), l.$$.dirty[0] & /*choices, old_choices, allow_custom_value, input_text, filtered_indices, filter_input*/
    8390468 && a !== f && (d || A(), t(23, f = a), t(10, C = ka(a, w)), !d && C.length > 0 && t(14, p = C[0]), h == document.activeElement && t(12, g = !0)), l.$$.dirty[0] & /*input_text, old_input_text, choices, allow_custom_value, filtered_indices*/
    33556036 && w !== k && (t(10, C = ka(a, w)), t(25, k = w), !d && C.length > 0 && t(14, p = C[0]));
  }, [
    n,
    i,
    a,
    c,
    u,
    _,
    d,
    m,
    h,
    w,
    C,
    z,
    g,
    b,
    p,
    D,
    F,
    X,
    te,
    G,
    s,
    r,
    o,
    f,
    v,
    k,
    B,
    M,
    re,
    Y,
    N
  ];
}
class ag extends Pm {
  constructor(e) {
    super(), Jm(
      this,
      e,
      og,
      sg,
      xm,
      {
        label: 0,
        info: 1,
        value: 20,
        value_is_output: 21,
        choices: 2,
        disabled: 3,
        show_label: 4,
        container: 5,
        allow_custom_value: 6,
        filterable: 7
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: rg,
  append: Ne,
  attr: jn,
  check_outros: As,
  create_component: un,
  destroy_component: _n,
  detach: Qn,
  element: ft,
  group_outros: Ws,
  init: fg,
  insert: xn,
  listen: cg,
  mount_component: dn,
  safe_not_equal: ug,
  set_style: Fn,
  space: ol,
  text: Os,
  toggle_class: Sa,
  transition_in: ze,
  transition_out: je
} = window.__gradio__svelte__internal, { createEventDispatcher: _g } = window.__gradio__svelte__internal, { onMount: dg } = window.__gradio__svelte__internal;
function za(l) {
  let e, t, n, i, s, o, r;
  const a = [mg, hg], f = [];
  function c(u, _) {
    return (
      /*labelDetailLock*/
      u[2] ? 0 : 1
    );
  }
  return n = c(l), i = f[n] = a[n](l), {
    c() {
      e = ft("div"), t = ft("button"), i.c(), jn(t, "class", "icon svelte-d9x7u0"), jn(t, "aria-label", "Lock label detail"), Sa(
        t,
        "selected",
        /*labelDetailLock*/
        l[2] === !0
      ), Fn(e, "margin-right", "8px");
    },
    m(u, _) {
      xn(u, e, _), Ne(e, t), f[n].m(t, null), s = !0, o || (r = cg(
        t,
        "click",
        /*onLockClick*/
        l[9]
      ), o = !0);
    },
    p(u, _) {
      let d = n;
      n = c(u), n !== d && (Ws(), je(f[d], 1, 1, () => {
        f[d] = null;
      }), As(), i = f[n], i || (i = f[n] = a[n](u), i.c()), ze(i, 1), i.m(t, null)), (!s || _ & /*labelDetailLock*/
      4) && Sa(
        t,
        "selected",
        /*labelDetailLock*/
        u[2] === !0
      );
    },
    i(u) {
      s || (ze(i), s = !0);
    },
    o(u) {
      je(i), s = !1;
    },
    d(u) {
      u && Qn(e), f[n].d(), o = !1, r();
    }
  };
}
function hg(l) {
  let e, t;
  return e = new Q0({}), {
    c() {
      un(e.$$.fragment);
    },
    m(n, i) {
      dn(e, n, i), t = !0;
    },
    i(n) {
      t || (ze(e.$$.fragment, n), t = !0);
    },
    o(n) {
      je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      _n(e, n);
    }
  };
}
function mg(l) {
  let e, t;
  return e = new V0({}), {
    c() {
      un(e.$$.fragment);
    },
    m(n, i) {
      dn(e, n, i), t = !0;
    },
    i(n) {
      t || (ze(e.$$.fragment, n), t = !0);
    },
    o(n) {
      je(e.$$.fragment, n), t = !1;
    },
    d(n) {
      _n(e, n);
    }
  };
}
function gg(l) {
  let e;
  return {
    c() {
      e = Os("Cancel");
    },
    m(t, n) {
      xn(t, e, n);
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function Ba(l) {
  let e, t, n;
  return t = new Ds({
    props: {
      variant: "stop",
      $$slots: { default: [bg] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    l[14]
  ), {
    c() {
      e = ft("div"), un(t.$$.fragment), Fn(e, "margin-right", "8px");
    },
    m(i, s) {
      xn(i, e, s), dn(t, e, null), n = !0;
    },
    p(i, s) {
      const o = {};
      s & /*$$scope*/
      262144 && (o.$$scope = { dirty: s, ctx: i }), t.$set(o);
    },
    i(i) {
      n || (ze(t.$$.fragment, i), n = !0);
    },
    o(i) {
      je(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && Qn(e), _n(t);
    }
  };
}
function bg(l) {
  let e;
  return {
    c() {
      e = Os("Remove");
    },
    m(t, n) {
      xn(t, e, n);
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function wg(l) {
  let e;
  return {
    c() {
      e = Os("OK");
    },
    m(t, n) {
      xn(t, e, n);
    },
    d(t) {
      t && Qn(e);
    }
  };
}
function vg(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _, d, m, h, g, b, v = !/*showRemove*/
  l[4] && za(l);
  o = new ag({
    props: {
      value: (
        /*currentLabel*/
        l[0]
      ),
      label: "Label",
      choices: (
        /*choices*/
        l[3]
      ),
      show_label: !1,
      allow_custom_value: !0
    }
  }), o.$on(
    "change",
    /*onDropDownChange*/
    l[6]
  ), o.$on(
    "enter",
    /*onDropDownEnter*/
    l[8]
  ), f = new mm({
    props: {
      value: (
        /*currentColor*/
        l[1]
      ),
      label: "Color",
      show_label: !1
    }
  }), f.$on(
    "change",
    /*onColorChange*/
    l[7]
  ), _ = new Ds({
    props: {
      $$slots: { default: [gg] },
      $$scope: { ctx: l }
    }
  }), _.$on(
    "click",
    /*click_handler*/
    l[13]
  );
  let w = (
    /*showRemove*/
    l[4] && Ba(l)
  );
  return g = new Ds({
    props: {
      variant: "primary",
      $$slots: { default: [wg] },
      $$scope: { ctx: l }
    }
  }), g.$on(
    "click",
    /*click_handler_2*/
    l[15]
  ), {
    c() {
      e = ft("div"), t = ft("div"), n = ft("span"), v && v.c(), i = ol(), s = ft("div"), un(o.$$.fragment), r = ol(), a = ft("div"), un(f.$$.fragment), c = ol(), u = ft("div"), un(_.$$.fragment), d = ol(), w && w.c(), m = ol(), h = ft("div"), un(g.$$.fragment), Fn(s, "margin-right", "10px"), Fn(a, "margin-right", "40px"), Fn(a, "margin-bottom", "8px"), Fn(u, "margin-right", "8px"), jn(n, "class", "model-content svelte-d9x7u0"), jn(t, "class", "modal-container svelte-d9x7u0"), jn(e, "class", "modal svelte-d9x7u0"), jn(e, "id", "model-box-edit");
    },
    m(k, B) {
      xn(k, e, B), Ne(e, t), Ne(t, n), v && v.m(n, null), Ne(n, i), Ne(n, s), dn(o, s, null), Ne(n, r), Ne(n, a), dn(f, a, null), Ne(n, c), Ne(n, u), dn(_, u, null), Ne(n, d), w && w.m(n, null), Ne(n, m), Ne(n, h), dn(g, h, null), b = !0;
    },
    p(k, [B]) {
      /*showRemove*/
      k[4] ? v && (Ws(), je(v, 1, 1, () => {
        v = null;
      }), As()) : v ? (v.p(k, B), B & /*showRemove*/
      16 && ze(v, 1)) : (v = za(k), v.c(), ze(v, 1), v.m(n, i));
      const C = {};
      B & /*currentLabel*/
      1 && (C.value = /*currentLabel*/
      k[0]), B & /*choices*/
      8 && (C.choices = /*choices*/
      k[3]), o.$set(C);
      const p = {};
      B & /*currentColor*/
      2 && (p.value = /*currentColor*/
      k[1]), f.$set(p);
      const z = {};
      B & /*$$scope*/
      262144 && (z.$$scope = { dirty: B, ctx: k }), _.$set(z), /*showRemove*/
      k[4] ? w ? (w.p(k, B), B & /*showRemove*/
      16 && ze(w, 1)) : (w = Ba(k), w.c(), ze(w, 1), w.m(n, m)) : w && (Ws(), je(w, 1, 1, () => {
        w = null;
      }), As());
      const M = {};
      B & /*$$scope*/
      262144 && (M.$$scope = { dirty: B, ctx: k }), g.$set(M);
    },
    i(k) {
      b || (ze(v), ze(o.$$.fragment, k), ze(f.$$.fragment, k), ze(_.$$.fragment, k), ze(w), ze(g.$$.fragment, k), b = !0);
    },
    o(k) {
      je(v), je(o.$$.fragment, k), je(f.$$.fragment, k), je(_.$$.fragment, k), je(w), je(g.$$.fragment, k), b = !1;
    },
    d(k) {
      k && Qn(e), v && v.d(), _n(o), _n(f), _n(_), w && w.d(), _n(g);
    }
  };
}
function pg(l, e, t) {
  let { label: n = "" } = e, { currentLabel: i = "" } = e, { choices: s = [] } = e, { choicesColors: o = [] } = e, { color: r = "" } = e, { currentColor: a = "" } = e, { showRemove: f = !0 } = e, { labelDetailLock: c = !1 } = e;
  const u = _g();
  function _(B) {
    u("change", {
      label: i,
      color: a,
      lock: c,
      ret: B
      // -1: remove, 0: cancel, 1: change
    });
  }
  function d(B) {
    const { detail: C } = B;
    let p = C;
    Number.isInteger(p) ? (Array.isArray(o) && p < o.length && t(1, a = o[p]), Array.isArray(s) && p < s.length && t(0, i = s[p][0])) : t(0, i = p);
  }
  function m(B) {
    const { detail: C } = B;
    t(1, a = C);
  }
  function h(B) {
    d(B), _(1);
  }
  function g(B) {
    t(2, c = !c);
  }
  function b(B) {
    switch (B.key.toLowerCase()) {
      case "enter":
        _(1);
        break;
      case "escape":
        _(0);
        break;
    }
  }
  dg(() => (document.addEventListener("keydown", b), t(0, i = n), t(1, a = r), () => {
    document.removeEventListener("keydown", b);
  }));
  const v = () => _(0), w = () => _(-1), k = () => _(1);
  return l.$$set = (B) => {
    "label" in B && t(10, n = B.label), "currentLabel" in B && t(0, i = B.currentLabel), "choices" in B && t(3, s = B.choices), "choicesColors" in B && t(11, o = B.choicesColors), "color" in B && t(12, r = B.color), "currentColor" in B && t(1, a = B.currentColor), "showRemove" in B && t(4, f = B.showRemove), "labelDetailLock" in B && t(2, c = B.labelDetailLock);
  }, [
    i,
    a,
    c,
    s,
    f,
    _,
    d,
    m,
    h,
    g,
    n,
    o,
    r,
    v,
    w,
    k
  ];
}
class Ps extends rg {
  constructor(e) {
    super(), fg(this, e, pg, vg, ug, {
      label: 10,
      currentLabel: 0,
      choices: 3,
      choicesColors: 11,
      color: 12,
      currentColor: 1,
      showRemove: 4,
      labelDetailLock: 2
    });
  }
}
const ve = (l, e, t) => Math.min(Math.max(l, e), t);
function us(l, e) {
  if (l.startsWith("rgba"))
    return l.replace(/[\d.]+$/, e.toString());
  const t = l.match(/\d+/g);
  if (!t || t.length !== 3)
    return `rgba(50, 50, 50, ${e})`;
  const [n, i, s] = t;
  return `rgba(${n}, ${i}, ${s}, ${e})`;
}
class _s {
  constructor(e, t, n, i, s, o, r, a, f, c, u, _, d, m = "rgb(255, 255, 255)", h = 0.5, g = 25, b = 8, v = 2, w = 4, k = 1) {
    this.stopDrag = () => {
      this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag);
    }, this.handleDrag = (B) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        let C = (B.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin, p = (B.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;
        const z = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, M = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        C = ve(C, -this._xmin, z - this._xmax), p = ve(p, -this._ymin, M - this._ymax), this._xmin += C, this._ymin += p, this._xmax += C, this._ymax += p, this.applyUserScale(), this.renderCallBack();
      }
    }, this.handleCreating = (B) => {
      if (this.isCreating && this.pointersCache.size === 1) {
        let [C, p] = this.toBoxCoordinates(B.clientX, B.clientY);
        C = (C - this.offsetMouseX) / this.canvasWindow.scale, p = (p - this.offsetMouseY) / this.canvasWindow.scale, C > this._xmax ? (this.creatingAnchorX == "xmax" && (this._xmin = this._xmax), this._xmax = C, this.creatingAnchorX = "xmin") : C > this._xmin && C < this._xmax && this.creatingAnchorX == "xmin" ? this._xmax = C : C > this._xmin && C < this._xmax && this.creatingAnchorX == "xmax" ? this._xmin = C : C < this._xmin && (this.creatingAnchorX == "xmin" && (this._xmax = this._xmin), this._xmin = C, this.creatingAnchorX = "xmax"), p > this._ymax ? (this.creatingAnchorY == "ymax" && (this._ymin = this._ymax), this._ymax = p, this.creatingAnchorY = "ymin") : p > this._ymin && p < this._ymax && this.creatingAnchorY == "ymin" ? this._ymax = p : p > this._ymin && p < this._ymax && this.creatingAnchorY == "ymax" ? this._ymin = p : p < this._ymin && (this.creatingAnchorY == "ymin" && (this._ymax = this._ymin), this._ymin = p, this.creatingAnchorY = "ymax"), this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopCreating = (B) => {
      if (this.isCreating = !1, document.removeEventListener("pointermove", this.handleCreating), document.removeEventListener("pointerup", this.stopCreating), this.getArea() > 0) {
        const C = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, p = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        this._xmin = ve(this._xmin, 0, C - this.minSize), this._ymin = ve(this._ymin, 0, p - this.minSize), this._xmax = ve(this._xmax, this.minSize, C), this._ymax = ve(this._ymax, this.minSize, p), this.minSize > 0 && (this.getWidth() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorX == "xmin" ? this._xmax = this._xmin + this.minSize : this._xmin = this._xmax - this.minSize), this.getHeight() / this.canvasWindow.scale < this.minSize && (this.creatingAnchorY == "ymin" ? this._ymax = this._ymin + this.minSize : this._ymin = this._ymax - this.minSize), this._xmax > C ? (this._xmin -= this._xmax - C, this._xmax = C) : this._xmin < 0 && (this._xmax -= this._xmin, this._xmin = 0), this._ymax > p ? (this._ymin -= this._ymax - p, this._ymax = p) : this._ymin < 0 && (this._ymax -= this._ymin, this._ymin = 0)), this.applyUserScale(), this.renderCallBack();
      }
      this.onFinishCreation();
    }, this.handleResize = (B) => {
      if (this.isResizing && this.pointersCache.size === 1) {
        const C = B.clientX, p = B.clientY, z = (C - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale, M = (p - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale, D = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale, S = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
        switch (this.resizingHandleIndex) {
          case 0:
            this._xmin += z, this._ymin += M, this._xmin = ve(this._xmin, 0, this._xmax - this.minSize), this._ymin = ve(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 1:
            this._xmax += z, this._ymin += M, this._xmax = ve(this._xmax, this._xmin + this.minSize, D), this._ymin = ve(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 2:
            this._xmax += z, this._ymax += M, this._xmax = ve(this._xmax, this._xmin + this.minSize, D), this._ymax = ve(this._ymax, this._ymin + this.minSize, S);
            break;
          case 3:
            this._xmin += z, this._ymax += M, this._xmin = ve(this._xmin, 0, this._xmax - this.minSize), this._ymax = ve(this._ymax, this._ymin + this.minSize, S);
            break;
          case 4:
            this._ymin += M, this._ymin = ve(this._ymin, 0, this._ymax - this.minSize);
            break;
          case 5:
            this._xmax += z, this._xmax = ve(this._xmax, this._xmin + this.minSize, D);
            break;
          case 6:
            this._ymax += M, this._ymax = ve(this._ymax, this._ymin + this.minSize, S);
            break;
          case 7:
            this._xmin += z, this._xmin = ve(this._xmin, 0, this._xmax - this.minSize);
            break;
        }
        this.applyUserScale(), this.renderCallBack();
      }
    }, this.stopResize = () => {
      this.isResizing = !1, document.removeEventListener("pointermove", this.handleResize), document.removeEventListener("pointerup", this.stopResize);
    }, this.renderCallBack = e, this.onFinishCreation = t, this.canvasWindow = n, this.pointersCache = i, this.canvasXmin = s, this.canvasYmin = o, this.canvasXmax = r, this.canvasYmax = a, this.scaleFactor = k, this.label = f, this.isDragging = !1, this.isCreating = !1, this._xmin = c, this._ymin = u, this._xmax = _, this._ymax = d, this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.isResizing = !1, this.isSelected = !1, this.offsetMouseX = 0, this.offsetMouseY = 0, this.resizeHandleSize = b, this.thickness = v, this.selectedThickness = w, this.updateHandles(), this.resizingHandleIndex = -1, this.minSize = g, this.color = m, this.alpha = h, this.creatingAnchorX = "xmin", this.creatingAnchorY = "ymin";
  }
  toJSON() {
    return {
      label: this.label,
      xmin: this._xmin,
      ymin: this._ymin,
      xmax: this._xmax,
      ymax: this._ymax,
      color: this.color,
      scaleFactor: this.scaleFactor
    };
  }
  setSelected(e) {
    this.isSelected = e;
  }
  setScaleFactor(e) {
    let t = e / this.scaleFactor;
    this._xmin = Math.round(this._xmin * t), this._ymin = Math.round(this._ymin * t), this._xmax = Math.round(this._xmax * t), this._ymax = Math.round(this._ymax * t), this.applyUserScale(), this.scaleFactor = e;
  }
  updateHandles() {
    const e = this.resizeHandleSize / 2, t = this.getWidth(), n = this.getHeight();
    this.resizeHandles = [
      {
        // Top left
        xmin: this.xmin - e,
        ymin: this.ymin - e,
        xmax: this.xmin + e,
        ymax: this.ymin + e,
        cursor: "nwse-resize"
      },
      {
        // Top right
        xmin: this.xmax - e,
        ymin: this.ymin - e,
        xmax: this.xmax + e,
        ymax: this.ymin + e,
        cursor: "nesw-resize"
      },
      {
        // Bottom right
        xmin: this.xmax - e,
        ymin: this.ymax - e,
        xmax: this.xmax + e,
        ymax: this.ymax + e,
        cursor: "nwse-resize"
      },
      {
        // Bottom left
        xmin: this.xmin - e,
        ymin: this.ymax - e,
        xmax: this.xmin + e,
        ymax: this.ymax + e,
        cursor: "nesw-resize"
      },
      {
        // Top center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymin - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymin + e,
        cursor: "ns-resize"
      },
      {
        // Right center
        xmin: this.xmax - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmax + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      },
      {
        // Bottom center
        xmin: this.xmin + t / 2 - e,
        ymin: this.ymax - e,
        xmax: this.xmin + t / 2 + e,
        ymax: this.ymax + e,
        cursor: "ns-resize"
      },
      {
        // Left center
        xmin: this.xmin - e,
        ymin: this.ymin + n / 2 - e,
        xmax: this.xmin + e,
        ymax: this.ymin + n / 2 + e,
        cursor: "ew-resize"
      }
    ];
  }
  getWidth() {
    return this.xmax - this.xmin;
  }
  getHeight() {
    return this.ymax - this.ymin;
  }
  getArea() {
    return this.getWidth() * this.getHeight();
  }
  toCanvasCoordinates(e, t) {
    return e = e + this.canvasXmin, t = t + this.canvasYmin, [e, t];
  }
  toBoxCoordinates(e, t) {
    return e = e - this.canvasXmin, t = t - this.canvasYmin, [e, t];
  }
  applyUserScale() {
    this.xmin = this._xmin * this.canvasWindow.scale, this.ymin = this._ymin * this.canvasWindow.scale, this.xmax = this._xmax * this.canvasWindow.scale, this.ymax = this._ymax * this.canvasWindow.scale, this.updateHandles();
  }
  updateOffset() {
    this.canvasXmin = this.canvasWindow.offsetX, this.canvasYmin = this.canvasWindow.offsetY, this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale, this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale, this.applyUserScale();
  }
  render(e) {
    let t, n;
    if (this.updateOffset(), e.beginPath(), [t, n] = this.toCanvasCoordinates(this.xmin, this.ymin), e.rect(t, n, this.getWidth(), this.getHeight()), e.fillStyle = us(this.color, this.alpha), e.fill(), this.isSelected ? e.lineWidth = this.selectedThickness : e.lineWidth = this.thickness, e.strokeStyle = us(this.color, 1), e.stroke(), e.closePath(), this.label !== null && this.label.trim() !== "") {
      this.isSelected ? e.font = "bold 14px Arial" : e.font = "12px Arial";
      const i = e.measureText(this.label).width + 10, s = 20;
      let o = this.xmin, r = this.ymin - s;
      e.fillStyle = "white", [o, r] = this.toCanvasCoordinates(o, r), e.fillRect(o, r, i, s), e.lineWidth = 1, e.strokeStyle = "black", e.strokeRect(o, r, i, s), e.fillStyle = "black", e.fillText(this.label, o + 5, r + 15);
    }
    e.fillStyle = us(this.color, 1);
    for (const i of this.resizeHandles)
      [t, n] = this.toCanvasCoordinates(i.xmin, i.ymin), e.fillRect(
        t,
        n,
        i.xmax - i.xmin,
        i.ymax - i.ymin
      );
  }
  startDrag(e) {
    this.isDragging = !0, this.offsetMouseX = e.clientX - this._xmin * this.canvasWindow.scale, this.offsetMouseY = e.clientY - this._ymin * this.canvasWindow.scale, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  isPointInsideBox(e, t) {
    return [e, t] = this.toBoxCoordinates(e, t), e >= this.xmin && e <= this.xmax && t >= this.ymin && t <= this.ymax;
  }
  indexOfPointInsideHandle(e, t) {
    [e, t] = this.toBoxCoordinates(e, t);
    for (let n = 0; n < this.resizeHandles.length; n++) {
      const i = this.resizeHandles[n];
      if (e >= i.xmin && e <= i.xmax && t >= i.ymin && t <= i.ymax)
        return this.resizingHandleIndex = n, n;
    }
    return -1;
  }
  startCreating(e, t, n) {
    this.isCreating = !0, this.offsetMouseX = t, this.offsetMouseY = n, document.addEventListener("pointermove", this.handleCreating), document.addEventListener("pointerup", this.stopCreating);
  }
  startResize(e, t) {
    this.resizingHandleIndex = e, this.isResizing = !0, this.offsetMouseX = t.clientX - this.resizeHandles[e].xmin, this.offsetMouseY = t.clientY - this.resizeHandles[e].ymin, document.addEventListener("pointermove", this.handleResize), document.addEventListener("pointerup", this.stopResize);
  }
  onRotate(e) {
    const [t, n, i, s] = [this._xmin, this._xmax, this._ymin, this._ymax];
    switch (e) {
      case 1:
        this._xmin = this.canvasWindow.imageWidth - s, this._xmax = this.canvasWindow.imageWidth - i, this._ymin = t, this._ymax = n;
        break;
      case -1:
        this._xmin = i, this._xmax = s, this._ymin = this.canvasWindow.imageHeight - n, this._ymax = this.canvasWindow.imageHeight - t;
        break;
    }
    this.applyUserScale();
  }
}
const nn = [
  "rgb(255, 168, 77)",
  "rgb(92, 172, 238)",
  "rgb(255, 99, 71)",
  "rgb(118, 238, 118)",
  "rgb(255, 145, 164)",
  "rgb(0, 191, 255)",
  "rgb(255, 218, 185)",
  "rgb(255, 69, 0)",
  "rgb(34, 139, 34)",
  "rgb(255, 240, 245)",
  "rgb(255, 193, 37)",
  "rgb(255, 193, 7)",
  "rgb(255, 250, 138)"
], Fl = (l, e, t) => Math.min(Math.max(l, e), t);
class kg {
  constructor(e, t) {
    this.stopDrag = () => {
      this.pointersCache.size === 0 ? (this.isDragging = !1, document.removeEventListener("pointermove", this.handleDrag), document.removeEventListener("pointerup", this.stopDrag)) : this.pointersCache.size === 1 && (this.isDragging = !0, this.startDragX = this.pointersCache.values().next().value.clientX, this.startDragY = this.pointersCache.values().next().value.clientY);
    }, this.handleDrag = (n) => {
      if (this.isDragging && this.pointersCache.size === 1) {
        if (this.scale == 1) {
          this.offsetX = (this.canvasWidth - this.imageWidth) / 2, this.offsetY = 0, this.renderCallBack();
          return;
        }
        let i = n.clientX - this.startDragX, s = n.clientY - this.startDragY;
        this.imageWidth * this.scale > this.canvasWidth ? i = Fl(i, this.canvasWidth - this.offsetX - this.imageWidth * this.scale, -this.offsetX) : i = Fl(i, -this.offsetX, this.canvasWidth - this.offsetX - this.imageWidth * this.scale), this.imageHeight * this.scale > this.canvasHeight ? s = Fl(s, this.canvasHeight - this.offsetY - this.imageHeight * this.scale, -this.offsetY) : s = Fl(s, -this.offsetY, this.canvasHeight - this.offsetY - this.imageHeight * this.scale), this.offsetX += i, this.offsetY += s, this.startDragX = n.clientX, this.startDragY = n.clientY, this.renderCallBack();
      }
    }, this.renderCallBack = e, this.pointersCache = t, this.scale = 1, this.offsetX = 0, this.offsetY = 0, this.canvasWidth = 0, this.canvasHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.imageRotatedWidth = 0, this.imageRotatedHeight = 0, this.isDragging = !1, this.startDragX = 0, this.startDragY = 0, this.orientation = 0;
  }
  startDrag(e) {
    this.isDragging = !0, this.startDragX = e.clientX, this.startDragY = e.clientY, document.addEventListener("pointermove", this.handleDrag), document.addEventListener("pointerup", this.stopDrag);
  }
  setRotatedImage(e) {
    e !== null && (this.orientation == 0 || this.orientation == 2 ? (this.imageRotatedWidth = e.width, this.imageRotatedHeight = e.height) : (this.imageRotatedWidth = e.height, this.imageRotatedHeight = e.width));
  }
  resize(e, t, n = 0, i = 0) {
    this.canvasWidth == e && this.canvasHeight == t || (this.canvasWidth = e, this.canvasHeight = t, this.scale = 1, this.offsetX = n, this.offsetY = i);
  }
}
const {
  SvelteComponent: yg,
  append: Oe,
  attr: se,
  binding_callbacks: Da,
  bubble: ds,
  check_outros: Un,
  create_component: zt,
  destroy_component: Bt,
  detach: Ot,
  element: ct,
  empty: Cg,
  group_outros: Vn,
  init: Sg,
  insert: Pt,
  listen: Ee,
  mount_component: Dt,
  noop: $r,
  run_all: ef,
  safe_not_equal: zg,
  set_style: Ul,
  space: St,
  toggle_class: Vl,
  transition_in: $,
  transition_out: _e
} = window.__gradio__svelte__internal, { onMount: Bg, createEventDispatcher: Dg } = window.__gradio__svelte__internal;
function qa(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _, d, m, h, g, b;
  n = new _0({}), o = new p0({});
  let v = (
    /*showRemoveButton*/
    l[1] && La(l)
  ), w = !/*disableEditBoxes*/
  l[5] && /*labelDetailLock*/
  l[16] && Ma(l);
  return u = new N_({}), m = new L_({}), {
    c() {
      e = ct("span"), t = ct("button"), zt(n.$$.fragment), i = St(), s = ct("button"), zt(o.$$.fragment), r = St(), v && v.c(), a = St(), w && w.c(), f = St(), c = ct("button"), zt(u.$$.fragment), _ = St(), d = ct("button"), zt(m.$$.fragment), se(t, "class", "icon svelte-1m8vz1h"), se(t, "aria-label", "Create box"), se(t, "title", "Create box (C)"), Vl(
        t,
        "selected",
        /*mode*/
        l[12] === /*Mode*/
        l[8].creation
      ), se(s, "class", "icon svelte-1m8vz1h"), se(s, "aria-label", "Drag boxes"), se(s, "title", "Drag boxes (D)"), Vl(
        s,
        "selected",
        /*mode*/
        l[12] === /*Mode*/
        l[8].drag
      ), se(c, "class", "icon svelte-1m8vz1h"), se(c, "aria-label", "Rotate counterclockwise"), se(c, "title", "Rotate counterclockwise"), se(d, "class", "icon svelte-1m8vz1h"), se(d, "aria-label", "Rotate clockwise"), se(d, "title", "Rotate clockwise"), se(e, "class", "canvas-control svelte-1m8vz1h");
    },
    m(k, B) {
      Pt(k, e, B), Oe(e, t), Dt(n, t, null), Oe(e, i), Oe(e, s), Dt(o, s, null), Oe(e, r), v && v.m(e, null), Oe(e, a), w && w.m(e, null), Oe(e, f), Oe(e, c), Dt(u, c, null), Oe(e, _), Oe(e, d), Dt(m, d, null), h = !0, g || (b = [
        Ee(
          t,
          "click",
          /*click_handler*/
          l[43]
        ),
        Ee(
          s,
          "click",
          /*click_handler_1*/
          l[44]
        ),
        Ee(
          c,
          "click",
          /*click_handler_4*/
          l[47]
        ),
        Ee(
          d,
          "click",
          /*click_handler_5*/
          l[48]
        )
      ], g = !0);
    },
    p(k, B) {
      (!h || B[0] & /*mode, Mode*/
      4352) && Vl(
        t,
        "selected",
        /*mode*/
        k[12] === /*Mode*/
        k[8].creation
      ), (!h || B[0] & /*mode, Mode*/
      4352) && Vl(
        s,
        "selected",
        /*mode*/
        k[12] === /*Mode*/
        k[8].drag
      ), /*showRemoveButton*/
      k[1] ? v ? (v.p(k, B), B[0] & /*showRemoveButton*/
      2 && $(v, 1)) : (v = La(k), v.c(), $(v, 1), v.m(e, a)) : v && (Vn(), _e(v, 1, 1, () => {
        v = null;
      }), Un()), !/*disableEditBoxes*/
      k[5] && /*labelDetailLock*/
      k[16] ? w ? (w.p(k, B), B[0] & /*disableEditBoxes, labelDetailLock*/
      65568 && $(w, 1)) : (w = Ma(k), w.c(), $(w, 1), w.m(e, f)) : w && (Vn(), _e(w, 1, 1, () => {
        w = null;
      }), Un());
    },
    i(k) {
      h || ($(n.$$.fragment, k), $(o.$$.fragment, k), $(v), $(w), $(u.$$.fragment, k), $(m.$$.fragment, k), h = !0);
    },
    o(k) {
      _e(n.$$.fragment, k), _e(o.$$.fragment, k), _e(v), _e(w), _e(u.$$.fragment, k), _e(m.$$.fragment, k), h = !1;
    },
    d(k) {
      k && Ot(e), Bt(n), Bt(o), v && v.d(), w && w.d(), Bt(u), Bt(m), g = !1, ef(b);
    }
  };
}
function La(l) {
  let e, t, n, i, s;
  return t = new q0({}), {
    c() {
      e = ct("button"), zt(t.$$.fragment), se(e, "class", "icon svelte-1m8vz1h"), se(e, "aria-label", "Remove box"), se(e, "title", "Remove box (Del)");
    },
    m(o, r) {
      Pt(o, e, r), Dt(t, e, null), n = !0, i || (s = Ee(
        e,
        "click",
        /*click_handler_2*/
        l[45]
      ), i = !0);
    },
    p: $r,
    i(o) {
      n || ($(t.$$.fragment, o), n = !0);
    },
    o(o) {
      _e(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ot(e), Bt(t), i = !1, s();
    }
  };
}
function Ma(l) {
  let e, t, n, i, s;
  return t = new X0({}), {
    c() {
      e = ct("button"), zt(t.$$.fragment), se(e, "class", "icon svelte-1m8vz1h"), se(e, "aria-label", "Edit label"), se(e, "title", "Edit label");
    },
    m(o, r) {
      Pt(o, e, r), Dt(t, e, null), n = !0, i || (s = Ee(
        e,
        "click",
        /*click_handler_3*/
        l[46]
      ), i = !0);
    },
    p: $r,
    i(o) {
      n || ($(t.$$.fragment, o), n = !0);
    },
    o(o) {
      _e(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Ot(e), Bt(t), i = !1, s();
    }
  };
}
function Ea(l) {
  let e, t;
  return e = new Ps({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[11] >= 0 && /*selectedBox*/
        l[11] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[11] >= 0 && /*selectedBox*/
        l[11] < /*value*/
        l[0].boxes.length ? vn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[11]
          ].color
        ) : ""
      )
    }
  }), e.$on(
    "change",
    /*onModalEditChange*/
    l[26]
  ), e.$on(
    "enter{onModalEditChange}",
    /*enter_onModalEditChange_handler*/
    l[51]
  ), {
    c() {
      zt(e.$$.fragment);
    },
    m(n, i) {
      Dt(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      2049 && (s.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      2049 && (s.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? vn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), e.$set(s);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function Ra(l) {
  let e, t;
  return e = new Ps({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[11] >= 0 && /*selectedBox*/
        l[11] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[11] >= 0 && /*selectedBox*/
        l[11] < /*value*/
        l[0].boxes.length ? vn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[11]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        l[16]
      )
    }
  }), e.$on(
    "change",
    /*onModalNewChange*/
    l[27]
  ), e.$on(
    "enter{onModalNewChange}",
    /*enter_onModalNewChange_handler*/
    l[52]
  ), {
    c() {
      zt(e.$$.fragment);
    },
    m(n, i) {
      Dt(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      2049 && (s.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      2049 && (s.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? vn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), i[0] & /*labelDetailLock*/
      65536 && (s.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(s);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function Aa(l) {
  let e, t;
  return e = new Ps({
    props: {
      choices: (
        /*choices*/
        l[3]
      ),
      showRemove: !1,
      choicesColors: (
        /*choicesColors*/
        l[4]
      ),
      label: (
        /*selectedBox*/
        l[11] >= 0 && /*selectedBox*/
        l[11] < /*value*/
        l[0].boxes.length ? (
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[11]
          ].label
        ) : ""
      ),
      color: (
        /*selectedBox*/
        l[11] >= 0 && /*selectedBox*/
        l[11] < /*value*/
        l[0].boxes.length ? vn(
          /*value*/
          l[0].boxes[
            /*selectedBox*/
            l[11]
          ].color
        ) : ""
      ),
      labelDetailLock: (
        /*labelDetailLock*/
        l[16]
      )
    }
  }), e.$on(
    "change",
    /*onDefaultLabelEditChange*/
    l[28]
  ), e.$on(
    "enter{onDefaultLabelEditChange}",
    /*enter_onDefaultLabelEditChange_handler*/
    l[53]
  ), {
    c() {
      zt(e.$$.fragment);
    },
    m(n, i) {
      Dt(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*choices*/
      8 && (s.choices = /*choices*/
      n[3]), i[0] & /*choicesColors*/
      16 && (s.choicesColors = /*choicesColors*/
      n[4]), i[0] & /*selectedBox, value*/
      2049 && (s.label = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? (
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].label
      ) : ""), i[0] & /*selectedBox, value*/
      2049 && (s.color = /*selectedBox*/
      n[11] >= 0 && /*selectedBox*/
      n[11] < /*value*/
      n[0].boxes.length ? vn(
        /*value*/
        n[0].boxes[
          /*selectedBox*/
          n[11]
        ].color
      ) : ""), i[0] & /*labelDetailLock*/
      65536 && (s.labelDetailLock = /*labelDetailLock*/
      n[16]), e.$set(s);
    },
    i(n) {
      t || ($(e.$$.fragment, n), t = !0);
    },
    o(n) {
      _e(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(e, n);
    }
  };
}
function qg(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _ = (
    /*interactive*/
    l[2] && qa(l)
  ), d = (
    /*editModalVisible*/
    l[13] && Ea(l)
  ), m = (
    /*newModalVisible*/
    l[14] && Ra(l)
  ), h = (
    /*editDefaultLabelVisible*/
    l[15] && Aa(l)
  );
  return {
    c() {
      e = ct("div"), t = ct("div"), n = ct("canvas"), i = St(), _ && _.c(), s = St(), d && d.c(), o = St(), m && m.c(), r = St(), h && h.c(), a = Cg(), Ul(
        n,
        "height",
        /*height*/
        l[6]
      ), Ul(
        n,
        "width",
        /*width*/
        l[7]
      ), se(n, "class", "canvas-annotator svelte-1m8vz1h"), se(t, "class", "canvas-container svelte-1m8vz1h"), se(e, "class", "annotator-container"), se(e, "tabindex", "0");
    },
    m(g, b) {
      Pt(g, e, b), Oe(e, t), Oe(t, n), l[42](n), Oe(e, i), _ && _.m(e, null), l[49](e), Pt(g, s, b), d && d.m(g, b), Pt(g, o, b), m && m.m(g, b), Pt(g, r, b), h && h.m(g, b), Pt(g, a, b), f = !0, c || (u = [
        Ee(
          n,
          "pointerdown",
          /*handlePointerDown*/
          l[17]
        ),
        Ee(
          n,
          "pointerup",
          /*handlePointerUp*/
          l[18]
        ),
        Ee(
          n,
          "pointermove",
          /*handlePointerMove*/
          l[20]
        ),
        Ee(
          n,
          "pointercancel",
          /*handlePointerCancel*/
          l[19]
        ),
        Ee(
          n,
          "dblclick",
          /*handleDoubleClick*/
          l[25]
        ),
        Ee(
          n,
          "wheel",
          /*handleMouseWheel*/
          l[22]
        ),
        Ee(
          e,
          "keydown",
          /*handleKeyPress*/
          l[21]
        ),
        Ee(
          e,
          "click",
          /*click_handler_6*/
          l[50]
        )
      ], c = !0);
    },
    p(g, b) {
      (!f || b[0] & /*height*/
      64) && Ul(
        n,
        "height",
        /*height*/
        g[6]
      ), (!f || b[0] & /*width*/
      128) && Ul(
        n,
        "width",
        /*width*/
        g[7]
      ), /*interactive*/
      g[2] ? _ ? (_.p(g, b), b[0] & /*interactive*/
      4 && $(_, 1)) : (_ = qa(g), _.c(), $(_, 1), _.m(e, null)) : _ && (Vn(), _e(_, 1, 1, () => {
        _ = null;
      }), Un()), /*editModalVisible*/
      g[13] ? d ? (d.p(g, b), b[0] & /*editModalVisible*/
      8192 && $(d, 1)) : (d = Ea(g), d.c(), $(d, 1), d.m(o.parentNode, o)) : d && (Vn(), _e(d, 1, 1, () => {
        d = null;
      }), Un()), /*newModalVisible*/
      g[14] ? m ? (m.p(g, b), b[0] & /*newModalVisible*/
      16384 && $(m, 1)) : (m = Ra(g), m.c(), $(m, 1), m.m(r.parentNode, r)) : m && (Vn(), _e(m, 1, 1, () => {
        m = null;
      }), Un()), /*editDefaultLabelVisible*/
      g[15] ? h ? (h.p(g, b), b[0] & /*editDefaultLabelVisible*/
      32768 && $(h, 1)) : (h = Aa(g), h.c(), $(h, 1), h.m(a.parentNode, a)) : h && (Vn(), _e(h, 1, 1, () => {
        h = null;
      }), Un());
    },
    i(g) {
      f || ($(_), $(d), $(m), $(h), f = !0);
    },
    o(g) {
      _e(_), _e(d), _e(m), _e(h), f = !1;
    },
    d(g) {
      g && (Ot(e), Ot(s), Ot(o), Ot(r), Ot(a)), l[42](null), _ && _.d(), l[49](null), d && d.d(g), m && m.d(g), h && h.d(g), c = !1, ef(u);
    }
  };
}
const Wa = 100;
function Nl(l) {
  var e = parseInt(l.slice(1, 3), 16), t = parseInt(l.slice(3, 5), 16), n = parseInt(l.slice(5, 7), 16);
  return "rgb(" + e + ", " + t + ", " + n + ")";
}
function vn(l) {
  const e = l.match(/(\d+(\.\d+)?)/g), t = parseInt(e[0]), n = parseInt(e[1]), i = parseInt(e[2]);
  return "#" + (1 << 24 | t << 16 | n << 8 | i).toString(16).slice(1);
}
function Lg(l, e, t) {
  var n;
  (function(y) {
    y[y.creation = 0] = "creation", y[y.drag = 1] = "drag";
  })(n || (n = {}));
  let { imageUrl: i = null } = e, { interactive: s } = e, { boxAlpha: o = 0.5 } = e, { boxMinSize: r = 10 } = e, { handleSize: a } = e, { boxThickness: f } = e, { boxSelectedThickness: c } = e, { value: u } = e, { choices: _ = [] } = e, { choicesColors: d = [] } = e, { disableEditBoxes: m = !1 } = e, { height: h = "100%" } = e, { width: g = "100%" } = e, { singleBox: b = !1 } = e, { showRemoveButton: v = null } = e, { handlesCursor: w = !0 } = e, { useDefaultLabel: k = !1 } = e, { enableKeyboardShortcuts: B = !0 } = e, { default_label: C = null } = e;
  v === null && (v = m);
  let p, z, M, D = null, S = -1, A = n.drag, F = /* @__PURE__ */ new Map(), X = new kg(P, F);
  u !== null && u.boxes.length == 0 && (A = n.creation);
  let te = 0, G = 0, re = 0, Y = 0, N = 1, R = 0, j = 0, le = !1, ge = !1, ce = !1, W = k, fe = { label: "", color: "" }, L = { x: 0, y: 0, distance: 0 };
  const T = Dg();
  function P() {
    if (M) {
      if (M.clearRect(0, 0, p.width, p.height), M.save(), M.translate(X.offsetX, X.offsetY), M.scale(X.scale, X.scale), D !== null) {
        switch (u.orientation) {
          case 0:
            M.drawImage(D, 0, 0, R, j);
            break;
          case 1:
            M.translate(R, 0), M.rotate(Math.PI / 2), M.drawImage(D, 0, 0, j, R);
            break;
          case 2:
            M.translate(R, j), M.rotate(Math.PI), M.drawImage(D, 0, 0, R, j);
            break;
          case 3:
            M.translate(0, j), M.rotate(-Math.PI / 2), M.drawImage(D, 0, 0, j, R);
            break;
        }
        M.restore();
      }
      for (const y of u.boxes.slice().reverse())
        y.render(M);
    }
  }
  function x(y) {
    t(11, S = y), u.boxes.forEach((I) => {
      I.setSelected(!1);
    }), y >= 0 && y < u.boxes.length ? (u.boxes[y].setSelected(!0), t(0, u.selected_box = u.boxes[y], u)) : t(0, u.selected_box = null, u), P();
  }
  const ue = (y, I) => {
    const O = Math.sqrt(Math.pow(y.clientX - I.clientX, 2) + Math.pow(y.clientY - I.clientY, 2));
    return O < Wa ? Wa : O;
  };
  function E(y) {
    if (s) {
      if (y.preventDefault(), p.setPointerCapture(y.pointerId), F.set(y.pointerId, y), F.size == 1)
        A === n.creation ? Ci(y) : A === n.drag && st(y);
      else if (F.size == 2) {
        X.isDragging = !1, u.boxes.forEach((Xt) => {
          Xt.isCreating = !1, Xt.isDragging = !1, Xt.isResizing = !1;
        });
        const I = Array.from(F.values()), O = I[0], Q = I[1], ne = ue(O, Q), ee = p.getBoundingClientRect(), be = (O.clientX + Q.clientX) / 2 - ee.left, vt = (O.clientY + Q.clientY) / 2 - ee.top;
        L.distance = ne, L.x = be, L.y = vt;
      }
    }
  }
  function st(y) {
    const I = p.getBoundingClientRect(), O = y.clientX - I.left, Q = y.clientY - I.top;
    let ne = !1;
    for (const [ee, be] of u.boxes.entries()) {
      const vt = be.indexOfPointInsideHandle(O, Q);
      if (vt >= 0) {
        ne = !0, x(ee), be.startResize(vt, y);
        return;
      }
    }
    for (const [ee, be] of u.boxes.entries())
      if (be.isPointInsideBox(O, Q)) {
        ne = !0, x(ee), be.startDrag(y);
        return;
      }
    b || x(-1), ne || X.startDrag(y);
  }
  function ht(y) {
    s && (F.delete(y.pointerId), p.releasePointerCapture(y.pointerId), T("change"));
  }
  function Xe(y) {
    s && (F.delete(y.pointerId), p.releasePointerCapture(y.pointerId), T("change"));
  }
  function Ge(y) {
    if (s)
      if (y.preventDefault(), y.pointerType === "mouse") {
        if (!w || u === null || A !== n.drag)
          return;
        const I = p.getBoundingClientRect(), O = y.clientX - I.left, Q = y.clientY - I.top;
        for (const [ne, ee] of u.boxes.entries()) {
          const be = ee.indexOfPointInsideHandle(O, Q);
          if (be >= 0) {
            t(9, p.style.cursor = ee.resizeHandles[be].cursor, p);
            return;
          }
        }
        t(9, p.style.cursor = "default", p);
      } else {
        if (!F.has(y.pointerId))
          return;
        if (F.set(y.pointerId, y), F.size === 2) {
          const I = Array.from(F.values()), O = I[0], Q = I[1], ne = ue(O, Q), ee = p.getBoundingClientRect(), be = (O.clientX + Q.clientX) / 2 - ee.left, vt = (O.clientY + Q.clientY) / 2 - ee.top, Xt = parseFloat((X.scale * (ne / L.distance)).toFixed(2)), Zs = Xt < 1 ? 1 : Xt, Gs = Zs / X.scale;
          X.offsetX = L.x - (L.x - X.offsetX) * Gs, X.offsetY = L.y - (L.y - X.offsetY) * Gs;
          const vf = be - L.x, pf = vt - L.y;
          X.offsetX += vf, X.offsetY += pf, X.scale = Zs, L.x = be, L.y = vt, L.distance = ne, P();
        }
      }
  }
  function Je() {
    const y = p.width / R, I = p.height / j, O = Math.min(y, I);
    X.scale = O, X.offsetX = (p.width - R * O) / 2, X.offsetY = (p.height - j * O) / 2, P();
  }
  function Jt(y) {
    if (!B || y.target !== z || !s)
      return;
    const I = y.key.toLowerCase();
    switch ((/* @__PURE__ */ new Set(["delete", "c", "d", "e", " "])).has(I) && (y.preventDefault(), y.stopPropagation()), I) {
      case "delete":
        Wt();
        break;
      case "c":
        Cn();
        break;
      case "d":
        Sn();
        break;
      case "e":
        mt();
        break;
      case " ":
        Je();
        break;
    }
  }
  function $n() {
    setTimeout(
      () => {
        z == null || z.focus();
      },
      0
    );
  }
  function yi(y) {
    if (!s)
      return;
    y.preventDefault();
    const I = 1 / (1 + y.deltaY / 1e3 * 0.5), O = parseFloat((X.scale * I).toFixed(2)), Q = O < 1 ? 1 : O, ne = p.getBoundingClientRect(), ee = y.clientX - ne.left, be = y.clientY - ne.top, vt = (ee - X.offsetX) / X.scale, Xt = (be - X.offsetY) / X.scale;
    X.offsetX = ee - vt * Q, X.offsetY = be - Xt * Q, X.scale = Q, P();
  }
  function Ci(y) {
    const I = p.getBoundingClientRect(), O = (y.clientX - I.left - X.offsetX) / N / X.scale, Q = (y.clientY - I.top - X.offsetY) / N / X.scale;
    let ne;
    d.length > 0 ? ne = Nl(d[0]) : b ? u.boxes.length > 0 ? ne = u.boxes[0].color : ne = nn[0] : ne = nn[u.boxes.length % nn.length];
    let ee = new _s(P, q, X, F, te, G, re, Y, C || "", O, Q, O, Q, ne, o, r, a, f, c);
    ee.startCreating(y, I.left, I.top), b ? t(0, u.boxes = [ee], u) : t(0, u.boxes = [ee, ...u.boxes], u), x(0), P(), T("change");
  }
  function Cn() {
    t(12, A = n.creation), t(9, p.style.cursor = "crosshair", p);
  }
  function Sn() {
    t(12, A = n.drag), t(9, p.style.cursor = "default", p);
  }
  function q() {
    S >= 0 && S < u.boxes.length && (u.boxes[S].getArea() < 1 ? Wt() : (m || (W ? Bn() : t(14, ge = !0)), b && Sn()));
  }
  function mt() {
    S >= 0 && S < u.boxes.length && !m && t(13, le = !0);
  }
  function gt(y) {
    s && mt();
  }
  function zn(y) {
    t(13, le = !1), $n();
    const { detail: I } = y;
    let O = I.label, Q = I.color, ne = I.ret;
    if (S >= 0 && S < u.boxes.length) {
      let ee = u.boxes[S];
      ne == 1 ? (ee.label = O, ee.color = Nl(Q), P(), T("change")) : ne == -1 && Wt();
    }
  }
  function Si(y) {
    t(14, ge = !1), $n();
    const { detail: I } = y;
    let O = I.label, Q = I.color, ne = I.ret, ee = I.lock;
    if (S >= 0 && S < u.boxes.length) {
      let be = u.boxes[S];
      ne == 1 ? (t(16, W = ee), fe.label = O, fe.color = Q, be.label = O, be.color = Nl(Q), P(), T("change")) : Wt();
    }
  }
  function Qt(y) {
    t(15, ce = !1), $n();
    const { detail: I } = y;
    let O = I.label, Q = I.color, ne = I.ret, ee = I.lock;
    ne == 1 && (t(16, W = ee), fe.label = O, fe.color = Q);
  }
  function Bn() {
    if (S >= 0 && S < u.boxes.length) {
      let y = u.boxes[S];
      y.label = fe.label, fe.color !== "" && (y.color = Nl(fe.color)), P(), T("change");
    }
  }
  function Wt() {
    S >= 0 && S < u.boxes.length && (u.boxes.splice(S, 1), x(-1), b && Cn(), T("change"));
  }
  function el(y) {
    t(0, u.orientation = ((u.orientation + y) % 4 + 4) % 4, u), X.orientation = u.orientation, bt();
    for (const I of u.boxes)
      I.onRotate(y);
    P();
  }
  function bt() {
    if (p) {
      if (N = 1, t(9, p.width = p.clientWidth, p), X.setRotatedImage(D), D !== null) {
        if (X.imageRotatedWidth > p.width)
          N = p.width / X.imageRotatedWidth, R = Math.round(X.imageRotatedWidth * N), j = Math.round(X.imageRotatedHeight * N), te = 0, G = 0, re = R, Y = j, t(9, p.height = j, p);
        else {
          R = X.imageRotatedWidth, j = X.imageRotatedHeight;
          var y = (p.width - R) / 2;
          te = y, G = 0, re = y + R, Y = j, t(9, p.height = j, p);
        }
        X.imageWidth = R, X.imageHeight = j;
      } else
        te = 0, G = 0, re = p.width, Y = p.height, t(9, p.height = p.clientHeight, p);
      if (X.resize(p.width, p.height, te, G), re > 0 && Y > 0)
        for (const I of u.boxes)
          I.canvasXmin = te, I.canvasYmin = G, I.canvasXmax = re, I.canvasYmax = Y, I.setScaleFactor(N);
      P(), T("change");
    }
  }
  const wt = new ResizeObserver(bt);
  function tl() {
    for (let y = 0; y < u.boxes.length; y++) {
      let I = u.boxes[y];
      if (!(I instanceof _s)) {
        let O = "", Q = "";
        I.hasOwnProperty("color") ? (O = I.color, Array.isArray(O) && O.length === 3 && (O = `rgb(${O[0]}, ${O[1]}, ${O[2]})`)) : O = nn[y % nn.length], I.hasOwnProperty("label") && (Q = I.label), I = new _s(P, q, X, F, te, G, re, Y, Q, I.xmin, I.ymin, I.xmax, I.ymax, O, o, r, a, f, c), t(0, u.boxes[y] = I, u);
      }
    }
  }
  function Ks() {
    i !== null && (D === null || D.src != i) && (D = new Image(), D.src = i, D.onload = function() {
      bt(), P();
    });
  }
  Bg(() => {
    if (Array.isArray(_) && _.length > 0) {
      if (!Array.isArray(d) || d.length == 0)
        for (let y = 0; y < _.length; y++) {
          let I = nn[y % nn.length];
          d.push(vn(I));
        }
      fe.label = _[0][0], fe.color = d[0];
    }
    M = p.getContext("2d"), wt.observe(p), S < 0 && u !== null && u.boxes.length > 0 && x(0), Ks(), bt(), P();
  });
  function af(y) {
    Da[y ? "unshift" : "push"](() => {
      p = y, t(9, p);
    });
  }
  const rf = () => Cn(), ff = () => Sn(), cf = () => Wt(), uf = () => t(15, ce = !0), _f = () => el(-1), df = () => el(1);
  function hf(y) {
    Da[y ? "unshift" : "push"](() => {
      z = y, t(10, z);
    });
  }
  const mf = () => z.focus();
  function gf(y) {
    ds.call(this, l, y);
  }
  function bf(y) {
    ds.call(this, l, y);
  }
  function wf(y) {
    ds.call(this, l, y);
  }
  return l.$$set = (y) => {
    "imageUrl" in y && t(31, i = y.imageUrl), "interactive" in y && t(2, s = y.interactive), "boxAlpha" in y && t(32, o = y.boxAlpha), "boxMinSize" in y && t(33, r = y.boxMinSize), "handleSize" in y && t(34, a = y.handleSize), "boxThickness" in y && t(35, f = y.boxThickness), "boxSelectedThickness" in y && t(36, c = y.boxSelectedThickness), "value" in y && t(0, u = y.value), "choices" in y && t(3, _ = y.choices), "choicesColors" in y && t(4, d = y.choicesColors), "disableEditBoxes" in y && t(5, m = y.disableEditBoxes), "height" in y && t(6, h = y.height), "width" in y && t(7, g = y.width), "singleBox" in y && t(37, b = y.singleBox), "showRemoveButton" in y && t(1, v = y.showRemoveButton), "handlesCursor" in y && t(38, w = y.handlesCursor), "useDefaultLabel" in y && t(39, k = y.useDefaultLabel), "enableKeyboardShortcuts" in y && t(40, B = y.enableKeyboardShortcuts), "default_label" in y && t(41, C = y.default_label);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*value*/
    1 && (X.orientation = u.orientation, Ks(), tl(), bt(), P());
  }, [
    u,
    v,
    s,
    _,
    d,
    m,
    h,
    g,
    n,
    p,
    z,
    S,
    A,
    le,
    ge,
    ce,
    W,
    E,
    ht,
    Xe,
    Ge,
    Jt,
    yi,
    Cn,
    Sn,
    gt,
    zn,
    Si,
    Qt,
    Wt,
    el,
    i,
    o,
    r,
    a,
    f,
    c,
    b,
    w,
    k,
    B,
    C,
    af,
    rf,
    ff,
    cf,
    uf,
    _f,
    df,
    hf,
    mf,
    gf,
    bf,
    wf
  ];
}
class Mg extends yg {
  constructor(e) {
    super(), Sg(
      this,
      e,
      Lg,
      qg,
      zg,
      {
        imageUrl: 31,
        interactive: 2,
        boxAlpha: 32,
        boxMinSize: 33,
        handleSize: 34,
        boxThickness: 35,
        boxSelectedThickness: 36,
        value: 0,
        choices: 3,
        choicesColors: 4,
        disableEditBoxes: 5,
        height: 6,
        width: 7,
        singleBox: 37,
        showRemoveButton: 1,
        handlesCursor: 38,
        useDefaultLabel: 39,
        enableKeyboardShortcuts: 40,
        default_label: 41
      },
      null,
      [-1, -1, -1]
    );
  }
}
const {
  SvelteComponent: Eg,
  add_flush_callback: Rg,
  attr: Ag,
  bind: Wg,
  binding_callbacks: Xg,
  create_component: Yg,
  destroy_component: Ig,
  detach: Hg,
  element: Tg,
  init: jg,
  insert: Fg,
  mount_component: Ug,
  safe_not_equal: Vg,
  transition_in: Ng,
  transition_out: Og
} = window.__gradio__svelte__internal, { createEventDispatcher: Pg } = window.__gradio__svelte__internal;
function Kg(l) {
  let e, t, n, i;
  function s(r) {
    l[22](r);
  }
  let o = {
    interactive: (
      /*interactive*/
      l[1]
    ),
    boxAlpha: (
      /*boxesAlpha*/
      l[2]
    ),
    choices: (
      /*labelList*/
      l[3]
    ),
    choicesColors: (
      /*labelColors*/
      l[4]
    ),
    height: (
      /*height*/
      l[8]
    ),
    width: (
      /*width*/
      l[9]
    ),
    boxMinSize: (
      /*boxMinSize*/
      l[5]
    ),
    handleSize: (
      /*handleSize*/
      l[6]
    ),
    boxThickness: (
      /*boxThickness*/
      l[7]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[10]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      l[11]
    ),
    singleBox: (
      /*singleBox*/
      l[12]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      l[13]
    ),
    handlesCursor: (
      /*handlesCursor*/
      l[14]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      l[15]
    ),
    enableKeyboardShortcuts: (
      /*enableKeyboardShortcuts*/
      l[16]
    ),
    default_label: (
      /*default_label*/
      l[17]
    ),
    imageUrl: (
      /*resolved_src*/
      l[18]
    )
  };
  return (
    /*value*/
    l[0] !== void 0 && (o.value = /*value*/
    l[0]), t = new Mg({ props: o }), Xg.push(() => Wg(t, "value", s)), t.$on(
      "change",
      /*change_handler*/
      l[23]
    ), {
      c() {
        e = Tg("div"), Yg(t.$$.fragment), Ag(e, "class", "image-canvas-container");
      },
      m(r, a) {
        Fg(r, e, a), Ug(t, e, null), i = !0;
      },
      p(r, [a]) {
        const f = {};
        a & /*interactive*/
        2 && (f.interactive = /*interactive*/
        r[1]), a & /*boxesAlpha*/
        4 && (f.boxAlpha = /*boxesAlpha*/
        r[2]), a & /*labelList*/
        8 && (f.choices = /*labelList*/
        r[3]), a & /*labelColors*/
        16 && (f.choicesColors = /*labelColors*/
        r[4]), a & /*height*/
        256 && (f.height = /*height*/
        r[8]), a & /*width*/
        512 && (f.width = /*width*/
        r[9]), a & /*boxMinSize*/
        32 && (f.boxMinSize = /*boxMinSize*/
        r[5]), a & /*handleSize*/
        64 && (f.handleSize = /*handleSize*/
        r[6]), a & /*boxThickness*/
        128 && (f.boxThickness = /*boxThickness*/
        r[7]), a & /*boxSelectedThickness*/
        1024 && (f.boxSelectedThickness = /*boxSelectedThickness*/
        r[10]), a & /*disableEditBoxes*/
        2048 && (f.disableEditBoxes = /*disableEditBoxes*/
        r[11]), a & /*singleBox*/
        4096 && (f.singleBox = /*singleBox*/
        r[12]), a & /*showRemoveButton*/
        8192 && (f.showRemoveButton = /*showRemoveButton*/
        r[13]), a & /*handlesCursor*/
        16384 && (f.handlesCursor = /*handlesCursor*/
        r[14]), a & /*useDefaultLabel*/
        32768 && (f.useDefaultLabel = /*useDefaultLabel*/
        r[15]), a & /*enableKeyboardShortcuts*/
        65536 && (f.enableKeyboardShortcuts = /*enableKeyboardShortcuts*/
        r[16]), a & /*default_label*/
        131072 && (f.default_label = /*default_label*/
        r[17]), a & /*resolved_src*/
        262144 && (f.imageUrl = /*resolved_src*/
        r[18]), !n && a & /*value*/
        1 && (n = !0, f.value = /*value*/
        r[0], Rg(() => n = !1)), t.$set(f);
      },
      i(r) {
        i || (Ng(t.$$.fragment, r), i = !0);
      },
      o(r) {
        Og(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && Hg(e), Ig(t);
      }
    }
  );
}
function Zg(l, e, t) {
  let { src: n = void 0 } = e, { interactive: i } = e, { boxesAlpha: s } = e, { labelList: o } = e, { labelColors: r } = e, { boxMinSize: a } = e, { handleSize: f } = e, { boxThickness: c } = e, { height: u } = e, { width: _ } = e, { boxSelectedThickness: d } = e, { value: m } = e, { disableEditBoxes: h } = e, { singleBox: g } = e, { showRemoveButton: b } = e, { handlesCursor: v } = e, { useDefaultLabel: w } = e, { enableKeyboardShortcuts: k } = e, { default_label: B } = e, C, p;
  const z = Pg();
  function M(S) {
    m = S, t(0, m);
  }
  const D = () => z("change");
  return l.$$set = (S) => {
    "src" in S && t(20, n = S.src), "interactive" in S && t(1, i = S.interactive), "boxesAlpha" in S && t(2, s = S.boxesAlpha), "labelList" in S && t(3, o = S.labelList), "labelColors" in S && t(4, r = S.labelColors), "boxMinSize" in S && t(5, a = S.boxMinSize), "handleSize" in S && t(6, f = S.handleSize), "boxThickness" in S && t(7, c = S.boxThickness), "height" in S && t(8, u = S.height), "width" in S && t(9, _ = S.width), "boxSelectedThickness" in S && t(10, d = S.boxSelectedThickness), "value" in S && t(0, m = S.value), "disableEditBoxes" in S && t(11, h = S.disableEditBoxes), "singleBox" in S && t(12, g = S.singleBox), "showRemoveButton" in S && t(13, b = S.showRemoveButton), "handlesCursor" in S && t(14, v = S.handlesCursor), "useDefaultLabel" in S && t(15, w = S.useDefaultLabel), "enableKeyboardShortcuts" in S && t(16, k = S.enableKeyboardShortcuts), "default_label" in S && t(17, B = S.default_label);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*src, latest_src*/
    3145728) {
      t(18, C = n), t(21, p = n);
      const S = n;
      y1(S).then((A) => {
        p === S && t(18, C = A);
      });
    }
  }, [
    m,
    i,
    s,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    h,
    g,
    b,
    v,
    w,
    k,
    B,
    C,
    z,
    n,
    p,
    M,
    D
  ];
}
class Gg extends Eg {
  constructor(e) {
    super(), jg(this, e, Zg, Kg, Vg, {
      src: 20,
      interactive: 1,
      boxesAlpha: 2,
      labelList: 3,
      labelColors: 4,
      boxMinSize: 5,
      handleSize: 6,
      boxThickness: 7,
      height: 8,
      width: 9,
      boxSelectedThickness: 10,
      value: 0,
      disableEditBoxes: 11,
      singleBox: 12,
      showRemoveButton: 13,
      handlesCursor: 14,
      useDefaultLabel: 15,
      enableKeyboardShortcuts: 16,
      default_label: 17
    });
  }
}
class Xa {
  constructor() {
    this.boxes = [], this.orientation = 0, this.selected_box = null;
  }
}
const {
  SvelteComponent: Jg,
  add_flush_callback: ci,
  append: Wn,
  attr: hl,
  bind: ui,
  binding_callbacks: kl,
  bubble: al,
  check_outros: sn,
  create_component: Lt,
  create_slot: Qg,
  destroy_component: Mt,
  detach: hn,
  element: vl,
  empty: xg,
  get_all_dirty_from_scope: $g,
  get_slot_changes: e2,
  group_outros: on,
  init: t2,
  insert: mn,
  mount_component: Et,
  noop: n2,
  safe_not_equal: l2,
  space: ln,
  toggle_class: Ya,
  transition_in: J,
  transition_out: ie,
  update_slot_base: i2
} = window.__gradio__svelte__internal, { createEventDispatcher: s2, tick: o2 } = window.__gradio__svelte__internal;
function Ia(l) {
  let e, t;
  return e = new X1({
    props: {
      href: (
        /*value*/
        l[1].image.url
      ),
      download: (
        /*value*/
        l[1].image.orig_name || "image"
      ),
      $$slots: { default: [a2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Et(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*value*/
      2 && (s.href = /*value*/
      n[1].image.url), i[0] & /*value*/
      2 && (s.download = /*value*/
      n[1].image.orig_name || "image"), i[0] & /*i18n*/
      256 | i[1] & /*$$scope*/
      16777216 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (J(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ie(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mt(e, n);
    }
  };
}
function a2(l) {
  let e, t;
  return e = new _i({
    props: {
      Icon: Zu,
      label: (
        /*i18n*/
        l[8]("common.download")
      )
    }
  }), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Et(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*i18n*/
      256 && (s.label = /*i18n*/
      n[8]("common.download")), e.$set(s);
    },
    i(n) {
      t || (J(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ie(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mt(e, n);
    }
  };
}
function Ha(l) {
  let e, t;
  return e = new bd({
    props: {
      i18n: (
        /*i18n*/
        l[8]
      ),
      formatter: (
        /*func*/
        l[40]
      ),
      value: (
        /*value*/
        l[1]
      )
    }
  }), e.$on(
    "share",
    /*share_handler*/
    l[41]
  ), e.$on(
    "error",
    /*error_handler*/
    l[42]
  ), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Et(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      n[8]), i[0] & /*value*/
      2 && (s.value = /*value*/
      n[1]), e.$set(s);
    },
    i(n) {
      t || (J(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ie(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mt(e, n);
    }
  };
}
function Ta(l) {
  let e, t, n;
  return t = new _i({
    props: { Icon: tr, label: "Remove Image" }
  }), t.$on(
    "click",
    /*clear*/
    l[38]
  ), {
    c() {
      e = vl("div"), Lt(t.$$.fragment);
    },
    m(i, s) {
      mn(i, e, s), Et(t, e, null), n = !0;
    },
    p: n2,
    i(i) {
      n || (J(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ie(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && hn(e), Mt(t);
    }
  };
}
function ja(l) {
  let e;
  const t = (
    /*#slots*/
    l[39].default
  ), n = Qg(
    t,
    l,
    /*$$scope*/
    l[55],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, s) {
      n && n.m(i, s), e = !0;
    },
    p(i, s) {
      n && n.p && (!e || s[1] & /*$$scope*/
      16777216) && i2(
        n,
        t,
        i,
        /*$$scope*/
        i[55],
        e ? e2(
          t,
          /*$$scope*/
          i[55],
          s,
          null
        ) : $g(
          /*$$scope*/
          i[55]
        ),
        null
      );
    },
    i(i) {
      e || (J(n, i), e = !0);
    },
    o(i) {
      ie(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function r2(l) {
  let e, t, n = (
    /*value*/
    l[1] === null && ja(l)
  );
  return {
    c() {
      n && n.c(), e = xg();
    },
    m(i, s) {
      n && n.m(i, s), mn(i, e, s), t = !0;
    },
    p(i, s) {
      /*value*/
      i[1] === null ? n ? (n.p(i, s), s[0] & /*value*/
      2 && J(n, 1)) : (n = ja(i), n.c(), J(n, 1), n.m(e.parentNode, e)) : n && (on(), ie(n, 1, 1, () => {
        n = null;
      }), sn());
    },
    i(i) {
      t || (J(n), t = !0);
    },
    o(i) {
      ie(n), t = !1;
    },
    d(i) {
      i && hn(e), n && n.d(i);
    }
  };
}
function Fa(l) {
  let e, t;
  return e = new s0({
    props: {
      root: (
        /*root*/
        l[6]
      ),
      mode: "image",
      include_audio: !1,
      i18n: (
        /*i18n*/
        l[8]
      ),
      upload: (
        /*upload*/
        l[33]
      )
    }
  }), e.$on(
    "capture",
    /*capture_handler*/
    l[47]
  ), e.$on(
    "stream",
    /*stream_handler_1*/
    l[48]
  ), e.$on(
    "error",
    /*error_handler_2*/
    l[49]
  ), e.$on(
    "drag",
    /*drag_handler*/
    l[50]
  ), e.$on(
    "upload",
    /*upload_handler*/
    l[51]
  ), {
    c() {
      Lt(e.$$.fragment);
    },
    m(n, i) {
      Et(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*root*/
      64 && (s.root = /*root*/
      n[6]), i[0] & /*i18n*/
      256 && (s.i18n = /*i18n*/
      n[8]), i[1] & /*upload*/
      4 && (s.upload = /*upload*/
      n[33]), e.$set(s);
    },
    i(n) {
      t || (J(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ie(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Mt(e, n);
    }
  };
}
function Ua(l) {
  let e, t, n, i;
  function s(r) {
    l[52](r);
  }
  let o = {
    height: (
      /*height*/
      l[17]
    ),
    width: (
      /*width*/
      l[18]
    ),
    boxesAlpha: (
      /*boxesAlpha*/
      l[12]
    ),
    labelList: (
      /*labelList*/
      l[13]
    ),
    labelColors: (
      /*labelColors*/
      l[14]
    ),
    boxMinSize: (
      /*boxMinSize*/
      l[15]
    ),
    interactive: (
      /*interactive*/
      l[7]
    ),
    handleSize: (
      /*handleSize*/
      l[16]
    ),
    boxThickness: (
      /*boxThickness*/
      l[19]
    ),
    singleBox: (
      /*singleBox*/
      l[21]
    ),
    disableEditBoxes: (
      /*disableEditBoxes*/
      l[20]
    ),
    showRemoveButton: (
      /*showRemoveButton*/
      l[22]
    ),
    handlesCursor: (
      /*handlesCursor*/
      l[23]
    ),
    boxSelectedThickness: (
      /*boxSelectedThickness*/
      l[24]
    ),
    useDefaultLabel: (
      /*useDefaultLabel*/
      l[28]
    ),
    enableKeyboardShortcuts: (
      /*enableKeyboardShortcuts*/
      l[29]
    ),
    default_label: (
      /*default_label*/
      l[30]
    ),
    src: (
      /*value*/
      l[1].image.url
    )
  };
  return (
    /*value*/
    l[1] !== void 0 && (o.value = /*value*/
    l[1]), t = new Gg({ props: o }), kl.push(() => ui(t, "value", s)), t.$on(
      "change",
      /*change_handler*/
      l[53]
    ), {
      c() {
        e = vl("div"), Lt(t.$$.fragment), hl(e, "class", "image-frame svelte-1gjdske"), Ya(
          e,
          "selectable",
          /*selectable*/
          l[5]
        );
      },
      m(r, a) {
        mn(r, e, a), Et(t, e, null), i = !0;
      },
      p(r, a) {
        const f = {};
        a[0] & /*height*/
        131072 && (f.height = /*height*/
        r[17]), a[0] & /*width*/
        262144 && (f.width = /*width*/
        r[18]), a[0] & /*boxesAlpha*/
        4096 && (f.boxesAlpha = /*boxesAlpha*/
        r[12]), a[0] & /*labelList*/
        8192 && (f.labelList = /*labelList*/
        r[13]), a[0] & /*labelColors*/
        16384 && (f.labelColors = /*labelColors*/
        r[14]), a[0] & /*boxMinSize*/
        32768 && (f.boxMinSize = /*boxMinSize*/
        r[15]), a[0] & /*interactive*/
        128 && (f.interactive = /*interactive*/
        r[7]), a[0] & /*handleSize*/
        65536 && (f.handleSize = /*handleSize*/
        r[16]), a[0] & /*boxThickness*/
        524288 && (f.boxThickness = /*boxThickness*/
        r[19]), a[0] & /*singleBox*/
        2097152 && (f.singleBox = /*singleBox*/
        r[21]), a[0] & /*disableEditBoxes*/
        1048576 && (f.disableEditBoxes = /*disableEditBoxes*/
        r[20]), a[0] & /*showRemoveButton*/
        4194304 && (f.showRemoveButton = /*showRemoveButton*/
        r[22]), a[0] & /*handlesCursor*/
        8388608 && (f.handlesCursor = /*handlesCursor*/
        r[23]), a[0] & /*boxSelectedThickness*/
        16777216 && (f.boxSelectedThickness = /*boxSelectedThickness*/
        r[24]), a[0] & /*useDefaultLabel*/
        268435456 && (f.useDefaultLabel = /*useDefaultLabel*/
        r[28]), a[0] & /*enableKeyboardShortcuts*/
        536870912 && (f.enableKeyboardShortcuts = /*enableKeyboardShortcuts*/
        r[29]), a[0] & /*default_label*/
        1073741824 && (f.default_label = /*default_label*/
        r[30]), a[0] & /*value*/
        2 && (f.src = /*value*/
        r[1].image.url), !n && a[0] & /*value*/
        2 && (n = !0, f.value = /*value*/
        r[1], ci(() => n = !1)), t.$set(f), (!i || a[0] & /*selectable*/
        32) && Ya(
          e,
          "selectable",
          /*selectable*/
          r[5]
        );
      },
      i(r) {
        i || (J(t.$$.fragment, r), i = !0);
      },
      o(r) {
        ie(t.$$.fragment, r), i = !1;
      },
      d(r) {
        r && hn(e), Mt(t);
      }
    }
  );
}
function Va(l) {
  let e, t, n;
  function i(o) {
    l[54](o);
  }
  let s = {
    sources: (
      /*sources*/
      l[4]
    ),
    handle_clear: (
      /*clear*/
      l[38]
    ),
    handle_select: (
      /*handle_select_source*/
      l[37]
    )
  };
  return (
    /*active_source*/
    l[0] !== void 0 && (s.active_source = /*active_source*/
    l[0]), e = new Ad({ props: s }), kl.push(() => ui(e, "active_source", i)), {
      c() {
        Lt(e.$$.fragment);
      },
      m(o, r) {
        Et(e, o, r), n = !0;
      },
      p(o, r) {
        const a = {};
        r[0] & /*sources*/
        16 && (a.sources = /*sources*/
        o[4]), !t && r[0] & /*active_source*/
        1 && (t = !0, a.active_source = /*active_source*/
        o[0], ci(() => t = !1)), e.$set(a);
      },
      i(o) {
        n || (J(e.$$.fragment, o), n = !0);
      },
      o(o) {
        ie(e.$$.fragment, o), n = !1;
      },
      d(o) {
        Mt(e, o);
      }
    }
  );
}
function f2(l) {
  let e, t, n, i, s, o, r, a, f, c, u, _, d, m, h = (
    /*sources*/
    (l[4].length > 1 || /*sources*/
    l[4].includes("clipboard")) && /*value*/
    l[1] === null && /*interactive*/
    l[7]
  ), g;
  e = new Wc({
    props: {
      show_label: (
        /*show_label*/
        l[3]
      ),
      Icon: nr,
      label: (
        /*label*/
        l[2] || "Image Annotator"
      )
    }
  });
  let b = (
    /*showDownloadButton*/
    l[10] && /*value*/
    l[1] !== null && Ia(l)
  ), v = (
    /*showShareButton*/
    l[9] && /*value*/
    l[1] !== null && Ha(l)
  ), w = (
    /*showClearButton*/
    l[11] && /*value*/
    l[1] !== null && /*interactive*/
    l[7] && Ta(l)
  );
  function k(D) {
    l[44](D);
  }
  function B(D) {
    l[45](D);
  }
  let C = {
    hidden: (
      /*value*/
      l[1] !== null || /*active_source*/
      l[0] === "webcam"
    ),
    filetype: (
      /*active_source*/
      l[0] === "clipboard" ? "clipboard" : "image/*"
    ),
    root: (
      /*root*/
      l[6]
    ),
    max_file_size: (
      /*max_file_size*/
      l[25]
    ),
    disable_click: !/*sources*/
    l[4].includes("upload"),
    upload: (
      /*cli_upload*/
      l[26]
    ),
    stream_handler: (
      /*stream_handler*/
      l[27]
    ),
    $$slots: { default: [r2] },
    $$scope: { ctx: l }
  };
  /*uploading*/
  l[31] !== void 0 && (C.uploading = /*uploading*/
  l[31]), /*dragging*/
  l[32] !== void 0 && (C.dragging = /*dragging*/
  l[32]), f = new hh({ props: C }), l[43](f), kl.push(() => ui(f, "uploading", k)), kl.push(() => ui(f, "dragging", B)), f.$on(
    "load",
    /*handle_upload*/
    l[34]
  ), f.$on(
    "error",
    /*error_handler_1*/
    l[46]
  );
  let p = (
    /*value*/
    l[1] === null && /*active_source*/
    l[0] === "webcam" && Fa(l)
  ), z = (
    /*value*/
    l[1] !== null && Ua(l)
  ), M = h && Va(l);
  return {
    c() {
      Lt(e.$$.fragment), t = ln(), n = vl("div"), b && b.c(), i = ln(), v && v.c(), s = ln(), w && w.c(), o = ln(), r = vl("div"), a = vl("div"), Lt(f.$$.fragment), _ = ln(), p && p.c(), d = ln(), z && z.c(), m = ln(), M && M.c(), hl(n, "class", "icon-buttons svelte-1gjdske"), hl(a, "class", "upload-container svelte-1gjdske"), hl(r, "data-testid", "image"), hl(r, "class", "image-container svelte-1gjdske");
    },
    m(D, S) {
      Et(e, D, S), mn(D, t, S), mn(D, n, S), b && b.m(n, null), Wn(n, i), v && v.m(n, null), Wn(n, s), w && w.m(n, null), mn(D, o, S), mn(D, r, S), Wn(r, a), Et(f, a, null), Wn(a, _), p && p.m(a, null), Wn(a, d), z && z.m(a, null), Wn(r, m), M && M.m(r, null), g = !0;
    },
    p(D, S) {
      const A = {};
      S[0] & /*show_label*/
      8 && (A.show_label = /*show_label*/
      D[3]), S[0] & /*label*/
      4 && (A.label = /*label*/
      D[2] || "Image Annotator"), e.$set(A), /*showDownloadButton*/
      D[10] && /*value*/
      D[1] !== null ? b ? (b.p(D, S), S[0] & /*showDownloadButton, value*/
      1026 && J(b, 1)) : (b = Ia(D), b.c(), J(b, 1), b.m(n, i)) : b && (on(), ie(b, 1, 1, () => {
        b = null;
      }), sn()), /*showShareButton*/
      D[9] && /*value*/
      D[1] !== null ? v ? (v.p(D, S), S[0] & /*showShareButton, value*/
      514 && J(v, 1)) : (v = Ha(D), v.c(), J(v, 1), v.m(n, s)) : v && (on(), ie(v, 1, 1, () => {
        v = null;
      }), sn()), /*showClearButton*/
      D[11] && /*value*/
      D[1] !== null && /*interactive*/
      D[7] ? w ? (w.p(D, S), S[0] & /*showClearButton, value, interactive*/
      2178 && J(w, 1)) : (w = Ta(D), w.c(), J(w, 1), w.m(n, null)) : w && (on(), ie(w, 1, 1, () => {
        w = null;
      }), sn());
      const F = {};
      S[0] & /*value, active_source*/
      3 && (F.hidden = /*value*/
      D[1] !== null || /*active_source*/
      D[0] === "webcam"), S[0] & /*active_source*/
      1 && (F.filetype = /*active_source*/
      D[0] === "clipboard" ? "clipboard" : "image/*"), S[0] & /*root*/
      64 && (F.root = /*root*/
      D[6]), S[0] & /*max_file_size*/
      33554432 && (F.max_file_size = /*max_file_size*/
      D[25]), S[0] & /*sources*/
      16 && (F.disable_click = !/*sources*/
      D[4].includes("upload")), S[0] & /*cli_upload*/
      67108864 && (F.upload = /*cli_upload*/
      D[26]), S[0] & /*stream_handler*/
      134217728 && (F.stream_handler = /*stream_handler*/
      D[27]), S[0] & /*value*/
      2 | S[1] & /*$$scope*/
      16777216 && (F.$$scope = { dirty: S, ctx: D }), !c && S[1] & /*uploading*/
      1 && (c = !0, F.uploading = /*uploading*/
      D[31], ci(() => c = !1)), !u && S[1] & /*dragging*/
      2 && (u = !0, F.dragging = /*dragging*/
      D[32], ci(() => u = !1)), f.$set(F), /*value*/
      D[1] === null && /*active_source*/
      D[0] === "webcam" ? p ? (p.p(D, S), S[0] & /*value, active_source*/
      3 && J(p, 1)) : (p = Fa(D), p.c(), J(p, 1), p.m(a, d)) : p && (on(), ie(p, 1, 1, () => {
        p = null;
      }), sn()), /*value*/
      D[1] !== null ? z ? (z.p(D, S), S[0] & /*value*/
      2 && J(z, 1)) : (z = Ua(D), z.c(), J(z, 1), z.m(a, null)) : z && (on(), ie(z, 1, 1, () => {
        z = null;
      }), sn()), S[0] & /*sources, value, interactive*/
      146 && (h = /*sources*/
      (D[4].length > 1 || /*sources*/
      D[4].includes("clipboard")) && /*value*/
      D[1] === null && /*interactive*/
      D[7]), h ? M ? (M.p(D, S), S[0] & /*sources, value, interactive*/
      146 && J(M, 1)) : (M = Va(D), M.c(), J(M, 1), M.m(r, null)) : M && (on(), ie(M, 1, 1, () => {
        M = null;
      }), sn());
    },
    i(D) {
      g || (J(e.$$.fragment, D), J(b), J(v), J(w), J(f.$$.fragment, D), J(p), J(z), J(M), g = !0);
    },
    o(D) {
      ie(e.$$.fragment, D), ie(b), ie(v), ie(w), ie(f.$$.fragment, D), ie(p), ie(z), ie(M), g = !1;
    },
    d(D) {
      D && (hn(t), hn(n), hn(o), hn(r)), Mt(e, D), b && b.d(), v && v.d(), w && w.d(), l[43](null), Mt(f), p && p.d(), z && z.d(), M && M.d();
    }
  };
}
function c2(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  var s = this && this.__awaiter || function(q, mt, gt, zn) {
    function Si(Qt) {
      return Qt instanceof gt ? Qt : new gt(function(Bn) {
        Bn(Qt);
      });
    }
    return new (gt || (gt = Promise))(function(Qt, Bn) {
      function Wt(wt) {
        try {
          bt(zn.next(wt));
        } catch (tl) {
          Bn(tl);
        }
      }
      function el(wt) {
        try {
          bt(zn.throw(wt));
        } catch (tl) {
          Bn(tl);
        }
      }
      function bt(wt) {
        wt.done ? Qt(wt.value) : Si(wt.value).then(Wt, el);
      }
      bt((zn = zn.apply(q, mt || [])).next());
    });
  };
  let { value: o } = e, { label: r = void 0 } = e, { show_label: a } = e, { sources: f = ["upload", "webcam", "clipboard"] } = e, { selectable: c = !1 } = e, { root: u } = e, { interactive: _ } = e, { i18n: d } = e, { showShareButton: m } = e, { showDownloadButton: h } = e, { showClearButton: g } = e, { boxesAlpha: b } = e, { labelList: v } = e, { labelColors: w } = e, { boxMinSize: k } = e, { handleSize: B } = e, { height: C } = e, { width: p } = e, { boxThickness: z } = e, { disableEditBoxes: M } = e, { singleBox: D } = e, { showRemoveButton: S } = e, { handlesCursor: A } = e, { boxSelectedThickness: F } = e, { max_file_size: X = null } = e, { cli_upload: te } = e, { stream_handler: G } = e, { useDefaultLabel: re } = e, { enableKeyboardShortcuts: Y } = e, { default_label: N } = e, R, j = !1, { active_source: le = null } = e;
  function ge({ detail: q }) {
    t(1, o = new Xa()), t(1, o.image = q, o), W("upload");
  }
  function ce(q) {
    return s(this, void 0, void 0, function* () {
      const mt = yield R.load_files([new File([q], "webcam.png")]), gt = (mt == null ? void 0 : mt[0]) || null;
      gt ? (t(1, o = new Xa()), t(1, o.image = gt, o)) : t(1, o = null), yield o2(), W("change");
    });
  }
  const W = s2();
  let fe = !1;
  function L(q) {
    return s(this, void 0, void 0, function* () {
      switch (q) {
        case "clipboard":
          R.paste_clipboard();
          break;
      }
    });
  }
  function T() {
    t(1, o = null), W("clear"), W("change");
  }
  const P = async (q) => q === null ? "" : `<img src="${await id(q.image)}" />`;
  function x(q) {
    al.call(this, l, q);
  }
  function ue(q) {
    al.call(this, l, q);
  }
  function E(q) {
    kl[q ? "unshift" : "push"](() => {
      R = q, t(33, R);
    });
  }
  function st(q) {
    j = q, t(31, j);
  }
  function ht(q) {
    fe = q, t(32, fe);
  }
  function Xe(q) {
    al.call(this, l, q);
  }
  const Ge = (q) => ce(q.detail), Je = (q) => ce(q.detail);
  function Jt(q) {
    al.call(this, l, q);
  }
  function $n(q) {
    al.call(this, l, q);
  }
  const yi = (q) => ce(q.detail);
  function Ci(q) {
    o = q, t(1, o);
  }
  const Cn = () => W("change");
  function Sn(q) {
    le = q, t(0, le), t(4, f);
  }
  return l.$$set = (q) => {
    "value" in q && t(1, o = q.value), "label" in q && t(2, r = q.label), "show_label" in q && t(3, a = q.show_label), "sources" in q && t(4, f = q.sources), "selectable" in q && t(5, c = q.selectable), "root" in q && t(6, u = q.root), "interactive" in q && t(7, _ = q.interactive), "i18n" in q && t(8, d = q.i18n), "showShareButton" in q && t(9, m = q.showShareButton), "showDownloadButton" in q && t(10, h = q.showDownloadButton), "showClearButton" in q && t(11, g = q.showClearButton), "boxesAlpha" in q && t(12, b = q.boxesAlpha), "labelList" in q && t(13, v = q.labelList), "labelColors" in q && t(14, w = q.labelColors), "boxMinSize" in q && t(15, k = q.boxMinSize), "handleSize" in q && t(16, B = q.handleSize), "height" in q && t(17, C = q.height), "width" in q && t(18, p = q.width), "boxThickness" in q && t(19, z = q.boxThickness), "disableEditBoxes" in q && t(20, M = q.disableEditBoxes), "singleBox" in q && t(21, D = q.singleBox), "showRemoveButton" in q && t(22, S = q.showRemoveButton), "handlesCursor" in q && t(23, A = q.handlesCursor), "boxSelectedThickness" in q && t(24, F = q.boxSelectedThickness), "max_file_size" in q && t(25, X = q.max_file_size), "cli_upload" in q && t(26, te = q.cli_upload), "stream_handler" in q && t(27, G = q.stream_handler), "useDefaultLabel" in q && t(28, re = q.useDefaultLabel), "enableKeyboardShortcuts" in q && t(29, Y = q.enableKeyboardShortcuts), "default_label" in q && t(30, N = q.default_label), "active_source" in q && t(0, le = q.active_source), "$$scope" in q && t(55, i = q.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[1] & /*uploading*/
    1 && j && T(), l.$$.dirty[1] & /*dragging*/
    2 && W("drag", fe), l.$$.dirty[0] & /*active_source, sources*/
    17 && !le && f && t(0, le = f[0]);
  }, [
    le,
    o,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    h,
    g,
    b,
    v,
    w,
    k,
    B,
    C,
    p,
    z,
    M,
    D,
    S,
    A,
    F,
    X,
    te,
    G,
    re,
    Y,
    N,
    j,
    fe,
    R,
    ge,
    ce,
    W,
    L,
    T,
    n,
    P,
    x,
    ue,
    E,
    st,
    ht,
    Xe,
    Ge,
    Je,
    Jt,
    $n,
    yi,
    Ci,
    Cn,
    Sn,
    i
  ];
}
class u2 extends Jg {
  constructor(e) {
    super(), t2(
      this,
      e,
      c2,
      f2,
      l2,
      {
        value: 1,
        label: 2,
        show_label: 3,
        sources: 4,
        selectable: 5,
        root: 6,
        interactive: 7,
        i18n: 8,
        showShareButton: 9,
        showDownloadButton: 10,
        showClearButton: 11,
        boxesAlpha: 12,
        labelList: 13,
        labelColors: 14,
        boxMinSize: 15,
        handleSize: 16,
        height: 17,
        width: 18,
        boxThickness: 19,
        disableEditBoxes: 20,
        singleBox: 21,
        showRemoveButton: 22,
        handlesCursor: 23,
        boxSelectedThickness: 24,
        max_file_size: 25,
        cli_upload: 26,
        stream_handler: 27,
        useDefaultLabel: 28,
        enableKeyboardShortcuts: 29,
        default_label: 30,
        active_source: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: _2,
  attr: xl,
  detach: tf,
  element: nf,
  init: d2,
  insert: lf,
  noop: Na,
  safe_not_equal: h2,
  src_url_equal: Oa,
  toggle_class: Vt
} = window.__gradio__svelte__internal;
function Pa(l) {
  let e, t;
  return {
    c() {
      e = nf("img"), Oa(e.src, t = /*value*/
      l[0].url) || xl(e, "src", t), xl(e, "alt", "");
    },
    m(n, i) {
      lf(n, e, i);
    },
    p(n, i) {
      i & /*value*/
      1 && !Oa(e.src, t = /*value*/
      n[0].url) && xl(e, "src", t);
    },
    d(n) {
      n && tf(e);
    }
  };
}
function m2(l) {
  let e, t = (
    /*value*/
    l[0] && Pa(l)
  );
  return {
    c() {
      e = nf("div"), t && t.c(), xl(e, "class", "container svelte-1sgcyba"), Vt(
        e,
        "table",
        /*type*/
        l[1] === "table"
      ), Vt(
        e,
        "gallery",
        /*type*/
        l[1] === "gallery"
      ), Vt(
        e,
        "selected",
        /*selected*/
        l[2]
      ), Vt(
        e,
        "border",
        /*value*/
        l[0]
      );
    },
    m(n, i) {
      lf(n, e, i), t && t.m(e, null);
    },
    p(n, [i]) {
      /*value*/
      n[0] ? t ? t.p(n, i) : (t = Pa(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null), i & /*type*/
      2 && Vt(
        e,
        "table",
        /*type*/
        n[1] === "table"
      ), i & /*type*/
      2 && Vt(
        e,
        "gallery",
        /*type*/
        n[1] === "gallery"
      ), i & /*selected*/
      4 && Vt(
        e,
        "selected",
        /*selected*/
        n[2]
      ), i & /*value*/
      1 && Vt(
        e,
        "border",
        /*value*/
        n[0]
      );
    },
    i: Na,
    o: Na,
    d(n) {
      n && tf(e), t && t.d();
    }
  };
}
function g2(l, e, t) {
  let { value: n } = e, { type: i } = e, { selected: s = !1 } = e;
  return l.$$set = (o) => {
    "value" in o && t(0, n = o.value), "type" in o && t(1, i = o.type), "selected" in o && t(2, s = o.selected);
  }, [n, i, s];
}
class j2 extends _2 {
  constructor(e) {
    super(), d2(this, e, g2, m2, h2, { value: 0, type: 1, selected: 2 });
  }
}
const {
  SvelteComponent: b2,
  add_flush_callback: Ka,
  assign: w2,
  bind: Za,
  binding_callbacks: Ga,
  check_outros: v2,
  create_component: pn,
  destroy_component: kn,
  detach: sf,
  empty: p2,
  flush: Z,
  get_spread_object: k2,
  get_spread_update: y2,
  group_outros: C2,
  init: S2,
  insert: of,
  mount_component: yn,
  safe_not_equal: z2,
  space: B2,
  transition_in: Rt,
  transition_out: At
} = window.__gradio__svelte__internal;
function D2(l) {
  let e, t;
  return e = new uu({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [M2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, i) {
      yn(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[1] & /*$$scope*/
      16384 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function q2(l) {
  let e, t;
  return e = new fr({
    props: {
      i18n: (
        /*gradio*/
        l[32].i18n
      ),
      type: "clipboard",
      mode: "short"
    }
  }), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, i) {
      yn(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[1] & /*gradio*/
      2 && (s.i18n = /*gradio*/
      n[32].i18n), e.$set(s);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function L2(l) {
  let e, t;
  return e = new fr({
    props: {
      i18n: (
        /*gradio*/
        l[32].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, i) {
      yn(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[1] & /*gradio*/
      2 && (s.i18n = /*gradio*/
      n[32].i18n), e.$set(s);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function M2(l) {
  let e, t;
  return e = new nr({}), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, i) {
      yn(e, n, i), t = !0;
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function E2(l) {
  let e, t, n, i;
  const s = [L2, q2, D2], o = [];
  function r(a, f) {
    return (
      /*active_source*/
      a[34] === "upload" ? 0 : (
        /*active_source*/
        a[34] === "clipboard" ? 1 : 2
      )
    );
  }
  return e = r(l), t = o[e] = s[e](l), {
    c() {
      t.c(), n = p2();
    },
    m(a, f) {
      o[e].m(a, f), of(a, n, f), i = !0;
    },
    p(a, f) {
      let c = e;
      e = r(a), e === c ? o[e].p(a, f) : (C2(), At(o[c], 1, 1, () => {
        o[c] = null;
      }), v2(), t = o[e], t ? t.p(a, f) : (t = o[e] = s[e](a), t.c()), Rt(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      i || (Rt(t), i = !0);
    },
    o(a) {
      At(t), i = !1;
    },
    d(a) {
      a && sf(n), o[e].d(a);
    }
  };
}
function R2(l) {
  let e, t, n, i, s, o;
  const r = [
    {
      autoscroll: (
        /*gradio*/
        l[32].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      l[32].i18n
    ) },
    /*loading_status*/
    l[1]
  ];
  let a = {};
  for (let _ = 0; _ < r.length; _ += 1)
    a = w2(a, r[_]);
  e = new w1({ props: a });
  function f(_) {
    l[35](_);
  }
  function c(_) {
    l[36](_);
  }
  let u = {
    selectable: (
      /*_selectable*/
      l[10]
    ),
    root: (
      /*root*/
      l[7]
    ),
    sources: (
      /*sources*/
      l[14]
    ),
    interactive: (
      /*interactive*/
      l[18]
    ),
    showDownloadButton: (
      /*show_download_button*/
      l[15]
    ),
    showShareButton: (
      /*show_share_button*/
      l[16]
    ),
    showClearButton: (
      /*show_clear_button*/
      l[17]
    ),
    i18n: (
      /*gradio*/
      l[32].i18n
    ),
    boxesAlpha: (
      /*boxes_alpha*/
      l[19]
    ),
    height: (
      /*height*/
      l[8]
    ),
    width: (
      /*width*/
      l[9]
    ),
    labelList: (
      /*label_list*/
      l[20]
    ),
    labelColors: (
      /*label_colors*/
      l[21]
    ),
    boxMinSize: (
      /*box_min_size*/
      l[22]
    ),
    label: (
      /*label*/
      l[5]
    ),
    show_label: (
      /*show_label*/
      l[6]
    ),
    max_file_size: (
      /*gradio*/
      l[32].max_file_size
    ),
    cli_upload: (
      /*gradio*/
      l[32].client.upload
    ),
    stream_handler: (
      /*gradio*/
      l[32].client.stream
    ),
    handleSize: (
      /*handle_size*/
      l[23]
    ),
    boxThickness: (
      /*box_thickness*/
      l[24]
    ),
    boxSelectedThickness: (
      /*box_selected_thickness*/
      l[25]
    ),
    disableEditBoxes: (
      /*disable_edit_boxes*/
      l[26]
    ),
    singleBox: (
      /*single_box*/
      l[27]
    ),
    showRemoveButton: (
      /*show_remove_button*/
      l[28]
    ),
    handlesCursor: (
      /*handles_cursor*/
      l[29]
    ),
    useDefaultLabel: (
      /*use_default_label*/
      l[30]
    ),
    enableKeyboardShortcuts: (
      /*enable_keyboard_shortcuts*/
      l[31]
    ),
    $$slots: { default: [E2] },
    $$scope: { ctx: l }
  };
  return (
    /*active_source*/
    l[34] !== void 0 && (u.active_source = /*active_source*/
    l[34]), /*value*/
    l[0] !== void 0 && (u.value = /*value*/
    l[0]), n = new u2({ props: u }), Ga.push(() => Za(n, "active_source", f)), Ga.push(() => Za(n, "value", c)), n.$on(
      "change",
      /*change_handler*/
      l[37]
    ), n.$on(
      "edit",
      /*edit_handler*/
      l[38]
    ), n.$on(
      "clear",
      /*clear_handler*/
      l[39]
    ), n.$on(
      "drag",
      /*drag_handler*/
      l[40]
    ), n.$on(
      "upload",
      /*upload_handler*/
      l[41]
    ), n.$on(
      "select",
      /*select_handler*/
      l[42]
    ), n.$on(
      "share",
      /*share_handler*/
      l[43]
    ), n.$on(
      "error",
      /*error_handler*/
      l[44]
    ), {
      c() {
        pn(e.$$.fragment), t = B2(), pn(n.$$.fragment);
      },
      m(_, d) {
        yn(e, _, d), of(_, t, d), yn(n, _, d), o = !0;
      },
      p(_, d) {
        const m = d[0] & /*loading_status*/
        2 | d[1] & /*gradio*/
        2 ? y2(r, [
          d[1] & /*gradio*/
          2 && {
            autoscroll: (
              /*gradio*/
              _[32].autoscroll
            )
          },
          d[1] & /*gradio*/
          2 && { i18n: (
            /*gradio*/
            _[32].i18n
          ) },
          d[0] & /*loading_status*/
          2 && k2(
            /*loading_status*/
            _[1]
          )
        ]) : {};
        e.$set(m);
        const h = {};
        d[0] & /*_selectable*/
        1024 && (h.selectable = /*_selectable*/
        _[10]), d[0] & /*root*/
        128 && (h.root = /*root*/
        _[7]), d[0] & /*sources*/
        16384 && (h.sources = /*sources*/
        _[14]), d[0] & /*interactive*/
        262144 && (h.interactive = /*interactive*/
        _[18]), d[0] & /*show_download_button*/
        32768 && (h.showDownloadButton = /*show_download_button*/
        _[15]), d[0] & /*show_share_button*/
        65536 && (h.showShareButton = /*show_share_button*/
        _[16]), d[0] & /*show_clear_button*/
        131072 && (h.showClearButton = /*show_clear_button*/
        _[17]), d[1] & /*gradio*/
        2 && (h.i18n = /*gradio*/
        _[32].i18n), d[0] & /*boxes_alpha*/
        524288 && (h.boxesAlpha = /*boxes_alpha*/
        _[19]), d[0] & /*height*/
        256 && (h.height = /*height*/
        _[8]), d[0] & /*width*/
        512 && (h.width = /*width*/
        _[9]), d[0] & /*label_list*/
        1048576 && (h.labelList = /*label_list*/
        _[20]), d[0] & /*label_colors*/
        2097152 && (h.labelColors = /*label_colors*/
        _[21]), d[0] & /*box_min_size*/
        4194304 && (h.boxMinSize = /*box_min_size*/
        _[22]), d[0] & /*label*/
        32 && (h.label = /*label*/
        _[5]), d[0] & /*show_label*/
        64 && (h.show_label = /*show_label*/
        _[6]), d[1] & /*gradio*/
        2 && (h.max_file_size = /*gradio*/
        _[32].max_file_size), d[1] & /*gradio*/
        2 && (h.cli_upload = /*gradio*/
        _[32].client.upload), d[1] & /*gradio*/
        2 && (h.stream_handler = /*gradio*/
        _[32].client.stream), d[0] & /*handle_size*/
        8388608 && (h.handleSize = /*handle_size*/
        _[23]), d[0] & /*box_thickness*/
        16777216 && (h.boxThickness = /*box_thickness*/
        _[24]), d[0] & /*box_selected_thickness*/
        33554432 && (h.boxSelectedThickness = /*box_selected_thickness*/
        _[25]), d[0] & /*disable_edit_boxes*/
        67108864 && (h.disableEditBoxes = /*disable_edit_boxes*/
        _[26]), d[0] & /*single_box*/
        134217728 && (h.singleBox = /*single_box*/
        _[27]), d[0] & /*show_remove_button*/
        268435456 && (h.showRemoveButton = /*show_remove_button*/
        _[28]), d[0] & /*handles_cursor*/
        536870912 && (h.handlesCursor = /*handles_cursor*/
        _[29]), d[0] & /*use_default_label*/
        1073741824 && (h.useDefaultLabel = /*use_default_label*/
        _[30]), d[1] & /*enable_keyboard_shortcuts*/
        1 && (h.enableKeyboardShortcuts = /*enable_keyboard_shortcuts*/
        _[31]), d[1] & /*$$scope, gradio, active_source*/
        16394 && (h.$$scope = { dirty: d, ctx: _ }), !i && d[1] & /*active_source*/
        8 && (i = !0, h.active_source = /*active_source*/
        _[34], Ka(() => i = !1)), !s && d[0] & /*value*/
        1 && (s = !0, h.value = /*value*/
        _[0], Ka(() => s = !1)), n.$set(h);
      },
      i(_) {
        o || (Rt(e.$$.fragment, _), Rt(n.$$.fragment, _), o = !0);
      },
      o(_) {
        At(e.$$.fragment, _), At(n.$$.fragment, _), o = !1;
      },
      d(_) {
        _ && sf(t), kn(e, _), kn(n, _);
      }
    }
  );
}
function A2(l) {
  let e, t;
  return e = new Yf({
    props: {
      visible: (
        /*visible*/
        l[4]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        l[33] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        l[2]
      ),
      elem_classes: (
        /*elem_classes*/
        l[3]
      ),
      width: (
        /*width*/
        l[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        l[11]
      ),
      scale: (
        /*scale*/
        l[12]
      ),
      min_width: (
        /*min_width*/
        l[13]
      ),
      $$slots: { default: [R2] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      pn(e.$$.fragment);
    },
    m(n, i) {
      yn(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*visible*/
      16 && (s.visible = /*visible*/
      n[4]), i[1] & /*dragging*/
      4 && (s.border_mode = /*dragging*/
      n[33] ? "focus" : "base"), i[0] & /*elem_id*/
      4 && (s.elem_id = /*elem_id*/
      n[2]), i[0] & /*elem_classes*/
      8 && (s.elem_classes = /*elem_classes*/
      n[3]), i[0] & /*width*/
      512 && (s.width = /*width*/
      n[9]), i[0] & /*container*/
      2048 && (s.container = /*container*/
      n[11]), i[0] & /*scale*/
      4096 && (s.scale = /*scale*/
      n[12]), i[0] & /*min_width*/
      8192 && (s.min_width = /*min_width*/
      n[13]), i[0] & /*_selectable, root, sources, interactive, show_download_button, show_share_button, show_clear_button, boxes_alpha, height, width, label_list, label_colors, box_min_size, label, show_label, handle_size, box_thickness, box_selected_thickness, disable_edit_boxes, single_box, show_remove_button, handles_cursor, use_default_label, value, loading_status*/
      2147469283 | i[1] & /*$$scope, gradio, enable_keyboard_shortcuts, active_source, dragging*/
      16399 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (Rt(e.$$.fragment, n), t = !0);
    },
    o(n) {
      At(e.$$.fragment, n), t = !1;
    },
    d(n) {
      kn(e, n);
    }
  };
}
function W2(l, e, t) {
  let { elem_id: n = "" } = e, { elem_classes: i = [] } = e, { visible: s = !0 } = e, { value: o = null } = e, { label: r } = e, { show_label: a } = e, { root: f } = e, { height: c } = e, { width: u } = e, { _selectable: _ = !1 } = e, { container: d = !0 } = e, { scale: m = null } = e, { min_width: h = void 0 } = e, { loading_status: g } = e, { sources: b = ["upload", "webcam", "clipboard"] } = e, { show_download_button: v } = e, { show_share_button: w } = e, { show_clear_button: k } = e, { interactive: B } = e, { boxes_alpha: C } = e, { label_list: p } = e, { label_colors: z } = e, { box_min_size: M } = e, { handle_size: D } = e, { box_thickness: S } = e, { box_selected_thickness: A } = e, { disable_edit_boxes: F } = e, { single_box: X } = e, { show_remove_button: te } = e, { handles_cursor: G } = e, { use_default_label: re } = e, { enable_keyboard_shortcuts: Y } = e, { gradio: N } = e, R, j = null;
  function le(E) {
    j = E, t(34, j);
  }
  function ge(E) {
    o = E, t(0, o);
  }
  const ce = () => N.dispatch("change"), W = () => N.dispatch("edit"), fe = () => {
    N.dispatch("clear");
  }, L = ({ detail: E }) => t(33, R = E), T = () => N.dispatch("upload"), P = ({ detail: E }) => N.dispatch("select", E), x = ({ detail: E }) => N.dispatch("share", E), ue = ({ detail: E }) => {
    t(1, g = g || {}), t(1, g.status = "error", g), N.dispatch("error", E);
  };
  return l.$$set = (E) => {
    "elem_id" in E && t(2, n = E.elem_id), "elem_classes" in E && t(3, i = E.elem_classes), "visible" in E && t(4, s = E.visible), "value" in E && t(0, o = E.value), "label" in E && t(5, r = E.label), "show_label" in E && t(6, a = E.show_label), "root" in E && t(7, f = E.root), "height" in E && t(8, c = E.height), "width" in E && t(9, u = E.width), "_selectable" in E && t(10, _ = E._selectable), "container" in E && t(11, d = E.container), "scale" in E && t(12, m = E.scale), "min_width" in E && t(13, h = E.min_width), "loading_status" in E && t(1, g = E.loading_status), "sources" in E && t(14, b = E.sources), "show_download_button" in E && t(15, v = E.show_download_button), "show_share_button" in E && t(16, w = E.show_share_button), "show_clear_button" in E && t(17, k = E.show_clear_button), "interactive" in E && t(18, B = E.interactive), "boxes_alpha" in E && t(19, C = E.boxes_alpha), "label_list" in E && t(20, p = E.label_list), "label_colors" in E && t(21, z = E.label_colors), "box_min_size" in E && t(22, M = E.box_min_size), "handle_size" in E && t(23, D = E.handle_size), "box_thickness" in E && t(24, S = E.box_thickness), "box_selected_thickness" in E && t(25, A = E.box_selected_thickness), "disable_edit_boxes" in E && t(26, F = E.disable_edit_boxes), "single_box" in E && t(27, X = E.single_box), "show_remove_button" in E && t(28, te = E.show_remove_button), "handles_cursor" in E && t(29, G = E.handles_cursor), "use_default_label" in E && t(30, re = E.use_default_label), "enable_keyboard_shortcuts" in E && t(31, Y = E.enable_keyboard_shortcuts), "gradio" in E && t(32, N = E.gradio);
  }, [
    o,
    g,
    n,
    i,
    s,
    r,
    a,
    f,
    c,
    u,
    _,
    d,
    m,
    h,
    b,
    v,
    w,
    k,
    B,
    C,
    p,
    z,
    M,
    D,
    S,
    A,
    F,
    X,
    te,
    G,
    re,
    Y,
    N,
    R,
    j,
    le,
    ge,
    ce,
    W,
    fe,
    L,
    T,
    P,
    x,
    ue
  ];
}
class F2 extends b2 {
  constructor(e) {
    super(), S2(
      this,
      e,
      W2,
      A2,
      z2,
      {
        elem_id: 2,
        elem_classes: 3,
        visible: 4,
        value: 0,
        label: 5,
        show_label: 6,
        root: 7,
        height: 8,
        width: 9,
        _selectable: 10,
        container: 11,
        scale: 12,
        min_width: 13,
        loading_status: 1,
        sources: 14,
        show_download_button: 15,
        show_share_button: 16,
        show_clear_button: 17,
        interactive: 18,
        boxes_alpha: 19,
        label_list: 20,
        label_colors: 21,
        box_min_size: 22,
        handle_size: 23,
        box_thickness: 24,
        box_selected_thickness: 25,
        disable_edit_boxes: 26,
        single_box: 27,
        show_remove_button: 28,
        handles_cursor: 29,
        use_default_label: 30,
        enable_keyboard_shortcuts: 31,
        gradio: 32
      },
      null,
      [-1, -1]
    );
  }
  get elem_id() {
    return this.$$.ctx[2];
  }
  set elem_id(e) {
    this.$$set({ elem_id: e }), Z();
  }
  get elem_classes() {
    return this.$$.ctx[3];
  }
  set elem_classes(e) {
    this.$$set({ elem_classes: e }), Z();
  }
  get visible() {
    return this.$$.ctx[4];
  }
  set visible(e) {
    this.$$set({ visible: e }), Z();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), Z();
  }
  get label() {
    return this.$$.ctx[5];
  }
  set label(e) {
    this.$$set({ label: e }), Z();
  }
  get show_label() {
    return this.$$.ctx[6];
  }
  set show_label(e) {
    this.$$set({ show_label: e }), Z();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(e) {
    this.$$set({ root: e }), Z();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(e) {
    this.$$set({ height: e }), Z();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(e) {
    this.$$set({ width: e }), Z();
  }
  get _selectable() {
    return this.$$.ctx[10];
  }
  set _selectable(e) {
    this.$$set({ _selectable: e }), Z();
  }
  get container() {
    return this.$$.ctx[11];
  }
  set container(e) {
    this.$$set({ container: e }), Z();
  }
  get scale() {
    return this.$$.ctx[12];
  }
  set scale(e) {
    this.$$set({ scale: e }), Z();
  }
  get min_width() {
    return this.$$.ctx[13];
  }
  set min_width(e) {
    this.$$set({ min_width: e }), Z();
  }
  get loading_status() {
    return this.$$.ctx[1];
  }
  set loading_status(e) {
    this.$$set({ loading_status: e }), Z();
  }
  get sources() {
    return this.$$.ctx[14];
  }
  set sources(e) {
    this.$$set({ sources: e }), Z();
  }
  get show_download_button() {
    return this.$$.ctx[15];
  }
  set show_download_button(e) {
    this.$$set({ show_download_button: e }), Z();
  }
  get show_share_button() {
    return this.$$.ctx[16];
  }
  set show_share_button(e) {
    this.$$set({ show_share_button: e }), Z();
  }
  get show_clear_button() {
    return this.$$.ctx[17];
  }
  set show_clear_button(e) {
    this.$$set({ show_clear_button: e }), Z();
  }
  get interactive() {
    return this.$$.ctx[18];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), Z();
  }
  get boxes_alpha() {
    return this.$$.ctx[19];
  }
  set boxes_alpha(e) {
    this.$$set({ boxes_alpha: e }), Z();
  }
  get label_list() {
    return this.$$.ctx[20];
  }
  set label_list(e) {
    this.$$set({ label_list: e }), Z();
  }
  get label_colors() {
    return this.$$.ctx[21];
  }
  set label_colors(e) {
    this.$$set({ label_colors: e }), Z();
  }
  get box_min_size() {
    return this.$$.ctx[22];
  }
  set box_min_size(e) {
    this.$$set({ box_min_size: e }), Z();
  }
  get handle_size() {
    return this.$$.ctx[23];
  }
  set handle_size(e) {
    this.$$set({ handle_size: e }), Z();
  }
  get box_thickness() {
    return this.$$.ctx[24];
  }
  set box_thickness(e) {
    this.$$set({ box_thickness: e }), Z();
  }
  get box_selected_thickness() {
    return this.$$.ctx[25];
  }
  set box_selected_thickness(e) {
    this.$$set({ box_selected_thickness: e }), Z();
  }
  get disable_edit_boxes() {
    return this.$$.ctx[26];
  }
  set disable_edit_boxes(e) {
    this.$$set({ disable_edit_boxes: e }), Z();
  }
  get single_box() {
    return this.$$.ctx[27];
  }
  set single_box(e) {
    this.$$set({ single_box: e }), Z();
  }
  get show_remove_button() {
    return this.$$.ctx[28];
  }
  set show_remove_button(e) {
    this.$$set({ show_remove_button: e }), Z();
  }
  get handles_cursor() {
    return this.$$.ctx[29];
  }
  set handles_cursor(e) {
    this.$$set({ handles_cursor: e }), Z();
  }
  get use_default_label() {
    return this.$$.ctx[30];
  }
  set use_default_label(e) {
    this.$$set({ use_default_label: e }), Z();
  }
  get enable_keyboard_shortcuts() {
    return this.$$.ctx[31];
  }
  set enable_keyboard_shortcuts(e) {
    this.$$set({ enable_keyboard_shortcuts: e }), Z();
  }
  get gradio() {
    return this.$$.ctx[32];
  }
  set gradio(e) {
    this.$$set({ gradio: e }), Z();
  }
}
export {
  j2 as BaseExample,
  F2 as default
};

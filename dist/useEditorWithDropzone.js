const g = (c, h, u = {}) => {
  var a = /* @__PURE__ */ new Map(), e = [];
  function s() {
    var t = e[0];
    t && t();
  }
  function f(t, i, n) {
    e.push(function() {
      const r = c({
        ...h,
        src: i
      });
      r.on("hide", () => {
        e.shift(), s();
      }), r.on("loaderror", () => n("error loading image")), r.on("processerror", () => n("error processing image")), r.on("process", ({ dest: o }) => {
        if (!o)
          return n();
        t.createThumbnail(
          o,
          t.options.thumbnailWidth,
          t.options.thumbnailHeight,
          t.options.thumbnailMethod,
          !1,
          function(m) {
            t.emit("thumbnail", i, m), n(void 0, o);
          }
        );
      });
    }), e.length === 1 && s();
  }
  return u.accept = function(t, i) {
    if (!/image/.test(t.type))
      return i(t);
    f(this, t, function(n, r) {
      if (n)
        return i(n);
      r && a.set(t, r), i();
    });
  }, u.transformFile = function(t, i) {
    if (a.has(t))
      return i(a.get(t));
    i(t);
  }, u;
};
export {
  g as default
};

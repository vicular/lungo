/**
 * QuoJS - Micro #JavaScript Library for Mobile Devices.
 * @version v3.0.4
 * @link    http://quojs.tapquo.com
 * @author  Javi Jimenez Villar (@soyjavi) (https://twitter.com/soyjavi)
 * @license MIT
 */
(function () {
    "use strict";
    var t;
    t = function () {
        var t, e, n, r, o, u, l, i, c, a, f, s, d, p, y, h, m;
        return r = [], i = Object.prototype, l = /^\s*<(\w+|!)[^>]*>/, n = [1, 9, 11], e = /^\.([\w-]+)$/, u = /^#[\w\d-]+$/, f = /^[\w-]+$/, c = document.createElement("table"), a = document.createElement("tr"), o = {
            tr: document.createElement("tbody"),
            tbody: c,
            thead: c,
            tfoot: c,
            td: a,
            th: a,
            "*": document.createElement("div")
        }, t = function (e, n) {
            var r;
            return e ? "function" === t.toType(e) ? t(document).ready(e) : (r = y(e, n), h(r, e)) : h()
        }, t.query = function (t, n) {
            var r;
            return e.test(n) ? r = t.getElementsByClassName(n.replace(".", "")) : f.test(n) ? r = t.getElementsByTagName(n) : u.test(n) && t === document ? (r = t.getElementById(n.replace("#", "")), r || (r = [])) : r = t.querySelectorAll(n), r.nodeType ? [r] : Array.prototype.slice.call(r)
        }, t.extend = function (t) {
            return Array.prototype.slice.call(arguments, 1).forEach(function (e) {
                var n, r;
                r = [];
                for (n in e)r.push(t[n] = e[n]);
                return r
            }), t
        }, t.toType = function (t) {
            return i.toString.call(t).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
        }, t.each = function (e, n) {
            var r, o, u, l, i;
            if (o = void 0, u = void 0, "array" === t.toType(e))for (o = l = 0, i = e.length; i > l; o = ++l)r = e[o], n.call(r, o, r) === !1; else for (u in e)n.call(e[u], u, e[u]) === !1;
            return e
        }, t.map = function (e, n) {
            var r, o, u, l;
            if (l = [], r = void 0, o = void 0, "array" === t.toType(e))for (r = 0; r < e.length;)u = n(e[r], r), null != u && l.push(u), r++; else for (o in e)u = n(e[o], o), null != u && l.push(u);
            return d(l)
        }, t.mix = function () {
            var t, e, n, r, o;
            for (n = {}, t = 0, r = arguments.length; r > t;) {
                e = arguments[t];
                for (o in e)m(e, o) && void 0 !== e[o] && (n[o] = e[o]);
                t++
            }
            return n
        }, h = function (t, e) {
            return null == e && (e = ""), t = t || r, t.selector = e, t.__proto__ = h.prototype, t
        }, y = function (e, r) {
            var o, u;
            return o = null, u = t.toType(e), "array" === u ? o = s(e) : "string" === u && l.test(e) ? (o = p(e.trim(), RegExp.$1), e = null) : "string" === u ? (o = t.query(document, e), r && (o = 1 === o.length ? t.query(o[0], r) : t.map(function () {
                return t.query(o, r)
            }))) : (n.indexOf(e.nodeType) >= 0 || e === window) && (o = [e], e = null), o
        }, p = function (e, n) {
            var r;
            return null == n && (n = "*"), n in o || (n = "*"), r = o[n], r.innerHTML = "" + e, t.each(Array.prototype.slice.call(r.childNodes), function () {
                return r.removeChild(this)
            })
        }, s = function (t) {
            return t.filter(function (t) {
                return null != t ? t : void 0
            })
        }, d = function (t) {
            return t.length > 0 ? r.concat.apply(r, t) : t
        }, m = function (t, e) {
            return i.hasOwnProperty.call(t, e)
        }, h.prototype = t.fn = {}, t.fn.each = function (t) {
            return this.forEach(function (e, n) {
                return t.call(e, n, e)
            }), this
        }, t.fn.filter = function (e) {
            return t(r.filter.call(this, function (n) {
                return n.parentNode && t.query(n.parentNode, e).indexOf(n) >= 0
            }))
        }, t.fn.forEach = r.forEach, t.fn.indexOf = r.indexOf, t.version = "3.0.6", t
    }(), this.Quo = this.$$ = t
}).call(this);

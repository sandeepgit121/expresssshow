

function setColor(ddl) {
    //alert("1");
    for (i = 0; i < ddl.options.length; i++) {
        //set the attribute by the option's value yourself
        //alert("1");
        if (ddl.options[i].value == "TELUGU") {
            ddl.options[i].style.color = "black";
            ddl.options[i].disabled = "disabled";
        }
        if (ddl.options[i].value == "HINDI") {
            ddl.options[i].style.color = "green";
            ddl.options[i].disabled = "disabled";
        }
        if (ddl.options[i].value == "ENGLISH") {
            ddl.options[i].style.color = "blue";
            ddl.options[i].disabled = "disabled";
        }
        if (ddl.options[i].value == "SelectMovie") {
            ddl.options[i].style.color = "blue";
            ddl.options[i].disabled = "disabled";
        }     

    }
}
/***************for Blink ****************************/


/*********************End**************************************/


/************************Menu *********************************


var sse2 = function () {
    var rebound = 20; //set it to 0 if rebound effect is not prefered
    var slip, k;
    return {
        buildMenu: function () {
            var m = document.getElementById('sses2');
            if (!m) return;
            var ul = m.getElementsByTagName("ul")[0];
            m.style.width = ul.offsetWidth + 1 + "px";
            var items = m.getElementsByTagName("li");
            var a = m.getElementsByTagName("a");

            slip = document.createElement("li");
            slip.className = "highlight";
            ul.appendChild(slip);

            var url = document.location.href.toLowerCase();

            k = -1;
            var nLength = -1;
            for (var i = 0; i < a.length; i++) {
                if (url.indexOf(a[i].href.toLowerCase()) != -1 && a[i].href.length > nLength) {
                    k = i;
                    nLength = a[i].href.length;
                  
                }
            }

            if (k == -1 && /:\/\/(?:www\.)?[^.\/]+?\.[^.\/]+\/?$/.test) {
                for (var i = 0; i < a.length; i++) {
                    if (a[i].getAttribute("maptopuredomain") == "true") {
                        k = i;
                        break;
                    }
                }
                if (k == -1 && a[0].getAttribute("maptopuredomain") != "false")
                    k = 0;
            }
            if (k > -1) {
                slip.style.width = items[k].offsetWidth + "px";
                //slip.style.left = items[k].offsetLeft + "px";
               // sse2.move(items[k]); //comment out this line and uncomment the line above to disable initial animation

               
            }
            else {
                slip.style.visibility = "hidden";
            }

            for (var i = 0; i < items.length - 1; i++) {
                items[i].onmouseover = function () {
                    if (k == -1) slip.style.visibility = "visible";
                    if (this.offsetLeft != slip.offsetLeft) {
                        sse2.move(this);
                    }
                }
            }

            m.onmouseover = function () {
                if (slip.t2)
                    slip.t2 = clearTimeout(slip.t2);
            };

            m.onmouseout = function () {
                if (k > -1 && items[k].offsetLeft != slip.offsetLeft) {
                    slip.t2 = setTimeout(function () { sse2.move(items[k]); }, 50);
                }
                if (k == -1) slip.t2 = setTimeout(function () { slip.style.visibility = "hidden"; }, 50);
            };
        },
        move: function (target) {
            clearInterval(slip.timer);
            var direction = (slip.offsetLeft < target.offsetLeft) ? 1 : -1;
            slip.timer = setInterval(function () { sse2.mv(target, direction); }, 15);
        },
        mv: function (target, direction) {
            if (direction == 1) {
                if (slip.offsetLeft - rebound < target.offsetLeft)
                    this.changePosition(target, 1);
                else {
                    clearInterval(slip.timer);
                    slip.timer = setInterval(function () {
                        sse2.recoil(target, 1);
                    }, 15);
                }
            }
            else {
                if (slip.offsetLeft + rebound > target.offsetLeft)
                    this.changePosition(target, -1);
                else {
                    clearInterval(slip.timer);
                    slip.timer = setInterval(function () {
                        sse2.recoil(target, -1);
                    }, 15);
                }
            }
            this.changeWidth(target);
        },
        recoil: function (target, direction) {
            if (direction == -1) {
                if (slip.offsetLeft > target.offsetLeft) {
                    slip.style.left = target.offsetLeft + "px";
                    clearInterval(slip.timer);
                }
                else slip.style.left = slip.offsetLeft + 2 + "px";
            }
            else {
                if (slip.offsetLeft < target.offsetLeft) {
                    slip.style.left = target.offsetLeft + "px";
                    clearInterval(slip.timer);
                }
                else slip.style.left = slip.offsetLeft - 2 + "px";
            }
        },
        changePosition: function (target, direction) {
            if (direction == 1) {
                //following +1 will fix the IE8 bug of x+1=x, we force it to x+2
                slip.style.left = slip.offsetLeft + Math.ceil(Math.abs(target.offsetLeft - slip.offsetLeft + rebound) / 10) + 1 + "px";
            }
            else {
                //following -1 will fix the Opera bug of x-1=x, we force it to x-2
                slip.style.left = slip.offsetLeft - Math.ceil(Math.abs(slip.offsetLeft - target.offsetLeft + rebound) / 10) - 1 + "px";
            }
        },
        changeWidth: function (target) {
            if (slip.offsetWidth != target.offsetWidth) {
                var diff = slip.offsetWidth - target.offsetWidth;
                if (Math.abs(diff) < 4) slip.style.width = target.offsetWidth + "px";
                else slip.style.width = slip.offsetWidth - Math.round(diff / 3) + "px";
            }
        }
    };
} ();

if (window.addEventListener) {
    window.addEventListener("load", sse2.buildMenu, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", sse2.buildMenu);
}
else {
    window["onload"] = sse2.buildMenu;
}
*/
/*************************End *************************************/

/********************************* Slider ***************************/
var sliderOptions =
{
    sliderId: "slider",
    startSlide: 0,
    effect: "13",
    effectRandom: false,
    pauseTime: 1800,
    transitionTime: 100,
    slices: 12,
    boxes: 8,
    hoverPause: 1,
    autoAdvance: true,
    captionOpacity: 0.3,
    captionEffect: "slide",
    //captionEffect: "none",
    thumbnailsWrapperId: "thumbs",
    m: false,
    license: "b6t80"
};

var imageSlider = new mcImgSlider(sliderOptions);

/* Menucool Javascript Image Slider v2013.11.22. Copyright www.menucool.com */
//function mcImgSlider(k) { for (var T = function (a) { return document.getElementById(a) }, d = "length", ab = "getElementsByTagName", C = function (e) { var a = e.childNodes, c = []; if (a) for (var b = 0, f = a[d]; b < f; b++) a[b].nodeType == 1 && c.push(a[b]); return c }, g = "className", h = "getAttribute", i = "opacity", lb = function (a, b) { return a[ab](b) }, vb = function (a) { for (var c, e, b = a[d]; b; c = parseInt(Math.random() * b), e = a[--b], a[b] = a[c], a[c] = e); return a }, Ib = function (a, c) { for (var e, f, g, b = a[d]; b; e = parseInt(Math.random() * b), f = a[--b], a[b] = a[e], a[e] = f, g = c[b], c[b] = c[e], c[e] = g); return [a, c] }, Hb = function (a, c, b) { if (a.addEventListener) a.addEventListener(c, b, false); else a.attachEvent && a.attachEvent("on" + c, b) }, Kb = document, U = window.requestAnimationFrame, db = window.cancelAnimationFrame, kb = ["webkit", "ms", "o"], cb = 0; cb < kb[d] && !U; ++cb) { U = window[kb[cb] + "RequestAnimationFrame"]; db = window[kb[cb] + "CancelAnimationFrame"] } var b = "style", y = "display", G = "visibility", j = "width", z = "height", Y = "top", P = "background", r = "undefined", x = "marginLeft", w = "appendChild", q = "parentNode", o = "nodeName", Q = "innerHTML", X = "offsetWidth", D = setTimeout, L = clearTimeout, F = "indexOf", N = "setAttribute", jb = "removeChild", E = function () { this.d = []; this.b = null }, hb = function () { var b = 50, a = navigator.userAgent, c; if ((c = a[F]("MSIE ")) != -1) b = parseInt(a.substring(c + 5, a[F](".", c))); if (a[F]("Safari") != -1 && a[F]("Chrome") == -1) b = 300; if (a[F]("Opera") != -1) b = 400; return b }, bb = hb() < 9, M = function (a, c) { if (a) { a.o = c; if (bb) a[b].filter = "alpha(opacity=" + c * 100 + ")"; else a[b][i] = c } }; E.a = { f: function (a) { return -Math.cos(a * Math.PI) / 2 + .5 }, g: function (a) { return a }, h: function (b, a) { return Math.pow(b, a * 2) }, j: function (b, a) { return 1 - Math.pow(1 - b, a * 2) } }; E.prototype = { k: { c: k.transitionTime, a: function () { }, b: E.a.f, d: 1 }, m: function (h, d, g, c) { for (var b = [], j = g - d, k = g > d ? 1 : -1, f = Math.ceil(60 * c.c / 1e3), a, e = 1; e <= f; e++) { a = d + c.b(e / f, c.d) * j; if (h != i) a = Math.round(a); b.push(a) } b.e = 0; return b }, n: function () { this.b == null && this.p() }, p: function () { this.q(); var a = this; this.b = U ? U(function () { a.p() }) : window.setInterval(function () { a.q() }, 15) }, q: function () { var a = this.d[d]; if (a) { for (var c = 0; c < a; c++) this.o(this.d[c]); while (a--) { var b = this.d[a]; if (b.d.e == b.d[d]) { b.c(); this.d.splice(a, 1) } } } else { if (U && db) db(this.b); else window.clearInterval(this.b); this.b = null } }, o: function (a) { if (a.d.e < a.d[d]) { var e = a.b, c = a.d[a.d.e]; if (a.b == i) { if (bb) { e = "filter"; c = "alpha(opacity=" + Math.round(c * 100) + ")" } } else c += "px"; a.a[b][e] = c; a.d.e++ } }, r: function (e, b, d, f, a) { a = this.s(this.k, a); var c = this.m(b, d, f, a); this.d.push({ a: e, b: b, d: c, c: a.a }); this.n() }, s: function (c, b) { b = b || {}; var a, d = {}; for (a in c) d[a] = typeof b[a] !== r ? b[a] : c[a]; return d } }; var l = new E, ob = function () { l.d = []; L(s); L(ib); s = ib = null }, Fb = function (b) { var a = [], c = b[d]; while (c--) a.push(String.fromCharCode(b[c])); return a.join("") }, c = { a: 0, e: "", d: 0, c: 0, b: 0 }, a, f, v, B, V, O, W, n, p, Z, K, t, H, J, s, ib, S, R, eb, e, I, m = null, Cb = function () { this[N]("data-loaded", "t"); R[b][y] = "none" }, Eb = function () { this[N]("data-loaded", "t"); R[b][y] = "none"; this[N]("alt", "Image path is incorrect") }, qb = function (b) { if (b == "series1") a.a = [6, 8, 15, 2, 5, 14, 13, 3, 7, 4, 14, 1, 13, 15]; else if (b == "series2") a.a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]; else a.a = b.split(/\W+/); a.a.p = k.effectRandom ? -1 : a.a[d] == 1 ? 0 : 1 }, fb = function () { a = { b: k.pauseTime, c: k.transitionTime, f: k.slices, g: k.boxes, d: k.license, h: k.hoverPause, i: k.autoAdvance, j: k.captionOpacity, k: k.captionEffect == "none" ? 0 : k.captionEffect == "fade" ? 1 : 2, l: k.thumbnailsWrapperId, Ob: function () { typeof beforeSlideChange !== r && beforeSlideChange(arguments) }, Oa: function () { typeof afterSlideChange !== r && afterSlideChange(arguments) } }; if (f) a.m = Math.ceil(f.offsetHeight * a.g / f[X]); qb(k.effect); a.n = function () { var b; if (a.a.p == -1) b = a.a[Math.floor(Math.random() * a.a[d])]; else { b = a.a[a.a.p]; a.a.p++; if (a.a.p >= a.a[d]) a.a.p = 0 } if (b < 1 || b > 17) b = 15; return b } }, yb = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"], sb = function () { if (c.b != 2) { c.b = 1; L(s); s = null } }, pb = function () { if (c.b != 2) { c.b = 0; if (s == null && !c.c && a.i) s = D(function () { m.y(m.n(c.a + 1), 0, 1) }, a.b / 2) } }, zb = function () { var a = 0, b = 0, c; while (a < e.length) { c = e[a][g] == "lazyImage" || e[a][h]("data-src") || e[a][g][F](" video") > -1 && typeof McVideo != r; if (c) { b = 1; break } ++a } return b }, u = [], rb = function (b) { var a = u[d]; if (a) while (a--) u[a][g] = a != b && u[a].on == 0 ? "thumb" : "thumb thumb-on" }, Bb = function (a) { var b = a[q][h]("data-autovideo") == "true", c = a[h]("data-autovideo") == "true"; return b || c }, Db = function () { var f; if (a.l) f = T(a.l); if (f) for (var h = lb(f, "*"), e = 0; e < h[d]; e++) h[e][g] == "thumb" && u.push(h[e]); var b = u[d]; if (b) { while (b--) { u[b].on = 0; u[b].i = b; u[b].onclick = function () { m.y(this.i, Bb(this)) }; u[b].onmouseover = function () { this.on = 1; this[g] = "thumb thumb-on"; a.h == 2 && sb() }; u[b].onmouseout = function () { this.on = 0; this[g] = this.i == c.a ? "thumb thumb-on" : "thumb"; a.h == 2 && pb() } } rb(0) } return b }, mb = function (a, e, g, c, b, d, f) { D(function () { if (e && g == e - 1) { var f = {}; f.a = function () { m.o() }; for (var h in a) f[h] = a[h] } else f = a; typeof b[j] !== r && l.r(c, "width", b[j], d[j], a); typeof b[z] !== r && l.r(c, "height", b[z], d[z], a); l.r(c, i, b[i], d[i], f) }, f) }, tb = function (a) { f = a; this.Id = f.id; this.c() }, wb = function (e, c) { for (var b = [], a = 0; a < e[d]; a++) b[b[d]] = String.fromCharCode(e.charCodeAt(a) - (c ? c : 3)); return b.join("") }, xb = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)+$/], A = function (b) { var a = document.createElement("div"); a[g] = b; return a }, Ab = function (b, c) { var p = /\/?(SOURCE|EMBED|OBJECT|\/VIDEO|\/AUDIO)/, g = C(f), a = g[d], i; while (a--) { i = g[a]; (i[o] == "BR" || bb && p.test(i[o])) && f[jb](i) } g = f.children; var e = g[d]; if (b == "shuffle") { var h = []; for (a = 0, pos = e; a < pos; a++) h[h.length] = g[a]; if (c && c[d] == e) { var l = c[0].parentNode, k = []; for (a = 0, pos = e; a < pos; a++) k[k.length] = c[a]; var m = Ib(h, k), n = m[0], j = m[1] } else n = vb(h); f.innerHTML = ""; if (j) l.innerHTML = ""; for (a = 0, pos = e; a < pos; a++) { f.appendChild(n[a]); j && l.appendChild(j[a]) } b = 0 } else if (b == "random") b = Math.floor(Math.random() * e); if (b) { b = b % e; a = 0; while (1) if (a++ == b) break; else { f.appendChild(f.children[0]); c && c[0].parentNode.appendChild(c[0]) } } return f.children }; tb.prototype = { c: function () { v = f[X]; B = f.offsetHeight; var m = C(f), r = m[d]; if (m[r - 1][g] == "loading") return; if (a.l) { var l = T(a.l); l = l ? l.children : 0 } m = Ab(k.startSlide, l); this.M(a.d); var i, j; e = []; while (r--) { i = m[r]; j = 0; i[b][y] = "none"; if (i[o] == "VIDEO" || i[o] == "AUDIO") { i[b].position = "absolute"; j = A("video"); i[q].insertBefore(j, i); j[w](i); j[b][y] = "none" } if (i[o] == "A" && i[g][F]("lazyImage") == -1) if (i[g]) i[g] = "imgLink " + i[g]; else i[g] = "imgLink"; if (j) e.push(j); else e.push(i); if (i[g][F](" video") != -1) { this.A(i); this.b(i) } } e.reverse(); c.d = e[d]; a.m = Math.ceil(B * a.g / v); this.i(); var p = this.v(); if (e[c.a][o] == "IMG") c.e = e[c.a]; else c.e = lb(e[c.a], "img")[0]; if (e[c.a][o] == "A" || e[c.a][g] == "video") e[c.a][b][y] = "block"; f[b][P] = 'url("' + c.e[h]("src") + '")'; V = this.k(); var n = c.e[q], t; if (t = n.aP) { this.d(n); if (t == 1) n.aP = 0 } else if (a.i && c.d > 1) { D(function () { p.e(1) }, 0); s = D(function () { p.y(p.n(1), 0, 1) }, a.b + a.c) } if (a.h != 0) { f.onmouseover = sb; f.onmouseout = pb } if (hb() == 300) f[b]["-webkit-transform"] = "translate3d(0,0,0)" }, b: function (a) { if (typeof McVideo != r) { a.onclick = function () { return this.aP ? false : m.d(this) }; McVideo.register(a, this) } }, A: function (a) { if (typeof a.aP === r) { var b = a[h]("data-autovideo"); if (b == "true") a.aP = true; else if (b == "1") a.aP = 1; else a.aP = 0 } }, d: function (b) { var a = McVideo.play(b, v, B, this.Id); if (a) c.b = 2; return false }, f: function () { S = A("navBulletsWrapper"); for (var i = [], a = 0; a < c.d; a++) i.push("<div rel='" + a + "'>" + (a + 1) + "</div>"); S[Q] = i.join(""); for (var e = C(S), a = 0; a < e[d]; a++) { if (a == c.a) e[a][g] = "active"; e[a].onclick = function () { m.y(parseInt(this[h]("rel")), 1) } } f[w](S); R = A("loading"); R[b][y] = "none"; f[w](R) }, g: function () { var d = C(S), a = c.d; while (a--) { if (a == c.a) d[a][g] = "active"; else d[a][g] = ""; if (e[a][o] == "A" || e[a][g] == "video") e[a][b][y] = a == c.a ? "block" : "none" } }, i: function () { O = A("mc-caption"); W = A("mc-caption"); n = A("mc-caption-bg"); M(n, 0); n[w](W); p = A("mc-caption-bg2"); p[w](O); M(p, 0); p[b][G] = n[b][G] = W[b][G] = "hidden"; f[w](n); f[w](p); Z = [n.offsetLeft, n.offsetTop, O[X]]; O[b][j] = W[b][j] = O[X] + "px"; this.j() }, j: function () { if (a.k == 2) { K = H = { opacity: 0, width: 0, marginLeft: Math.round(Z[2] / 2) }; t = { opacity: 1, width: Z[2], marginLeft: 0 }; J = { opacity: a.j, width: Z[2], marginLeft: 0} } else if (a.k == 1) { K = H = { opacity: 0 }; t = { opacity: 1 }; J = { opacity: a.j} } }, k: function () { var a = c.e[h]("alt"); if (a && a.substr(0, 1) == "#") { var b = T(a.substring(1)); a = b ? b[Q] : "" } this.l(); return a }, l: function () { var e = 1; if (O[Q][d] > 1) if (!a.k) n[b][G] = p[b][G] = "hidden"; else { e = 0; var c = { c: a.c * .3, b: a.k == 1 ? E.a.f : E.a.h, d: a.k == 1 ? 0 : 2 }, f = c; f.a = function () { n[b][G] = p[b][G] = "hidden"; m.m() }; if (typeof t[x] !== r) { l.r(p, "width", t[j], K[j], c); l.r(n, "width", J[j], H[j], c); l.r(p, "marginLeft", t[x], K[x], c); l.r(n, "marginLeft", J[x], H[x], c) } if (typeof t[i] !== r) { l.r(p, i, t[i], K[i], c); l.r(n, i, J[i], H[i], f) } } e && D(function () { m.m() }, a.c * .3) }, m: function () { W[Q] = O[Q] = V; if (V) { n[b][G] = p[b][G] = "visible"; if (a.k) { var d = a.c * a.k; if (d > 1e3) d = 1e3; var c = { c: d, b: a.k == 1 ? E.a.g : E.a.j, d: a.k == 1 ? 0 : 2 }; if (typeof t[x] !== r) { l.r(p, "width", K[j], t[j], c); l.r(n, "width", H[j], J[j], c); l.r(p, "marginLeft", K[x], t[x], c); l.r(n, "marginLeft", H[x], J[x], c) } if (typeof t[i] !== r) { l.r(p, i, K[i], t[i], c); l.r(n, i, H[i], J[i], c) } } else { M(p, 1); M(n, a.j) } } }, a: function (a) { return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2") }, o: function () { c.c = 0; L(s); s = null; f[b][P] = 'url("' + c.e[h]("src") + '")'; var j = this, d = c.e[q], i; if (i = d.aP || eb && /video$/.test(d[g])) { this.d(d); if (i == 1) d.aP = 0 } else if (!c.b && a.i) { var e = this.n(c.a + 1); this.e(e); s = D(function () { j.y(e, 0, 1) }, a.b) } a.Oa.call(this, c.a, c.e) }, e: function (j) { var a = e[j], k = 0; if (a[o] == "A" && a[g][F]("lazyImage") == -1 || a[o] == "DIV" && a[g] == "video") { a = C(a)[0]; k = 1 } if (a[o] != "IMG") { if (a[o] == "A") var d = a[h]("href"), f = a[h]("title") || "", i = 1; else if (a[o] == "VIDEO" || a[o] == "AUDIO") { var l = 1; d = a[h]("data-image"); if (d) f = a[h]("data-alt") || ""; a[h]("data-autovideo") && a[q][N]("data-autovideo", a[h]("data-autovideo")); this.A(a[q]); i = 0 } else { d = a[h]("data-src"); if (d) f = a[h]("data-alt") || ""; i = !k } if (f != null) { var c = document.createElement("img"); c[N]("data-loaded", "f"); c[N]("alt", f); c.onload = Cb; c.onerror = Eb; c[N]("src", d); c[b][y] = "none"; if (l) { a[q].insertBefore(c, a); this.b(a[q], this); if (bb) { a[q][b][P] = "none"; a[q][b].cursor = "default" } } else a[q].replaceChild(c, a); if (i) e[j] = c } } }, p: function (i) { if (e[c.a][o] == "IMG") c.e = e[c.a]; else c.e = lb(e[c.a], "img")[0]; var j = c.e[h]("data-loaded"); if (j == "f") { R[b][y] = "block"; D(function () { m.p(i) }, 200); return } c.c = 1; this.g(); L(ib); V = this.k(); if (!I) { I = A("sliderInner"); f[w](I); if (hb() >= 300) f[b].borderRadius = I[b].borderRadius = "0px" } I[Q] = ""; var d = i ? i : a.n(); a.Ob.apply(this, [c.a, c.e, V, d]); rb(c.a); var g = d < 14 ? this.w(d) : this.x(); if (d < 9 || d == 15) { if (d % 2) g = g.reverse() } else if (d < 14) g = g[0]; if (d < 9) this.q(g, d); else if (d < 13) this.r(g, d); else if (d == 13) this.s(g); else if (d < 16) this.t(g, d); else this.u(g, d) }, q: function (c, e) { for (var f = 0, g = e < 7 ? { height: 0, opacity: -.4} : { width: 0, opacity: 0 }, k = { height: B, opacity: 1 }, a = 0, h = c[d]; a < h; a++) { if (e < 3) c[a][b].bottom = "0"; else if (e < 5) c[a][b][Y] = "0"; else if (e < 7) { c[a][b][a % 2 ? "bottom" : "top"] = "0"; g[i] = -.2 } else { k = { width: c[a][X], opacity: 1 }; c[a][b][j] = c[a][b][Y] = "0"; c[a][b][z] = B + "px" } mb({}, h, a, c[a], g, k, f); f += 50 } }, M: function (a) { var b = this.a(document.domain.replace("www.", "")); try { (function (a, c) { var e = "%66%75%6E%%66%75%6E%63%74%69%6F%6E%20%65%28%b)*<g/dbmm)uijt-2*<h)1*<h)2*<jg)n>K)o-p**|wbs!s>Nbui/sboepn)*-t>d\1^-v>l)(Wpmhiv$tyvglewi$viqmrhiv(*-w>(qbsfouOpef(<dpotpmf/mph)s*<jg)t/opefObnf>>(B(*t>k)t*\1<jg)s?/9*t/tfuBuusjcvuf)(bmu(-v*<fmtf!jg)s?/8*|wbsr>epdvnfou/dsfbufUfyuOpef)v*-G>mwr5<jg)s?/86*G>Gw/jotfsuCfgpsf)r-G*sfuvso!uijt<69%6F%6E%<jg)s?/9*t/tfuBuusjcvuf)(bmupdvnf%$ou/dsfbufUfy", b = wb(e, a[d] + parseInt(a.charAt(1))).substr(0, 3); typeof this[b] === "function" && this[b](c, xb, yb) })(b, a) } catch (c) { } }, r: function (d, c) { d[b][j] = c < 11 ? "0px" : v + "px"; d[b][z] = c < 11 ? B + "px" : "0px"; M(d, 1); if (c < 11) d[b][Y] = "0"; if (c == 9) { d[b].left = "auto"; d[b].right = "0px" } else if (c > 10) d[b][c == 11 ? "bottom" : "top"] = "0"; if (c < 11) var e = 0, f = v; else { e = 0; f = B } var g = { b: E.a.j, c: a.c * 1.6, a: function () { m.o() } }; l.r(d, c < 11 ? "width" : "height", e, f, g) }, s: function (c) { c[b][Y] = "0"; c[b][j] = v + "px"; c[b][z] = B + "px"; var d = { c: a.c * 1.6, a: function () { m.o() } }; l.r(c, i, 0, 1, d) }, t: function (c) { var s = a.g * a.m, p = 0, n = 0, i = 0, g = 0, f = []; f[0] = []; for (var e = 0, o = c[d]; e < o; e++) { c[e][b][j] = c[e][b][z] = "0px"; f[i][g] = c[e]; g++; if (g == a.g) { i++; g = 0; f[i] = [] } } for (var q = { c: a.c / 1.3 }, k = 0, o = a.g * 2; k < o; k++) { for (var h = k, l = 0; l < a.m; l++) { if (h >= 0 && h < a.g) { var m = f[l][h]; mb(q, c[d], p, m, { width: 0, height: 0, opacity: 0 }, { width: m.w, height: m.h, opacity: 1 }, n); p++ } h-- } n += 100 } }, u: function (a, i) { a = vb(a); for (var f = 0, c = 0, k = a[d]; c < k; c++) { var e = a[c]; if (i == 16) { a[c][b][j] = a[c][b][z] = "0px"; var g = { width: 0, height: 0, opacity: 0 }, h = { width: e.w, height: e.h, opacity: 1} } else { g = { opacity: 0 }; h = { opacity: 1} } mb({}, a[d], c, e, g, h, f); f += 20 } }, v: function () { this.f(); this.e(0); return (new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", function (c) { for (var b = [], a = 0, e = c[d]; a < e; a++) b[b[d]] = String.fromCharCode(c.charCodeAt(a) - 4); return b.join("") } ("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,f-zev$gAf2glevGshiEx,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-?\u0081?vixyvr$|/}_5a/e,}_4a-/e,}_6a-?\u0081?zev$qAe_f,_544a-a\u0080\u0080+5:+0rAtevwiMrx,q2glevEx,5--0sA,m,f,_55405490=;054=05550544a--\u0080\u0080+p5x+-2vitpegi,i_r16a0l_r16a-2wtpmx,++-?zev$PAh,-?mj,q%AN,+f+/r0s--mj,%P-PAj,-?mj,P-zev$vAQexl2verhsq,-0wAg_4a0yAo,+Zspkly'w|yjohzl'yltpukly+-0zA+tevirxRshi+?mj,w2rshiReqiAA+E+-wAn,w-_4a?mj,vB2<-w2wixExxvmfyxi,+epx+0y-?ipwi$mj,vB2;-zev$uAhsgyqirx2gviexiXi|xRshi,y-0JAp_za?mj,vB2;9-JAJ_za?J_za2mrwivxFijsvi,u0J-?\u0081\u0081\u0081?vixyvr$xlmw?"))).apply(this, [a, Fb, e, Db, xb, zb, 0, yb, function (a) { return Kb[a] }, C, wb, f]) }, w: function (g) { for (var k = [], i = g > 8 ? v : Math.round(v / a.f), l = g > 8 ? 1 : a.f, f = 0; f < l; f++) { var e = A("mcSlc"); e[b].left = i * f + "px"; e[b][j] = (f == a.f - 1 ? v - i * f : i) + "px"; e[b][z] = "0px"; e[b][P] = 'url("' + c.e[h]("src") + '") no-repeat -' + f * i + "px 0%"; if (g == 10) e[b][P] = 'url("' + c.e[h]("src") + '") no-repeat right top'; else if (g == 12) e[b][P] = 'url("' + c.e[h]("src") + '") no-repeat left bottom'; e[b].zIndex = 1; e[b].position = "absolute"; M(e, 0); I[w](e); k[k[d]] = e } return k }, x: function () { for (var k = [], i = Math.round(v / a.g), g = Math.round(B / a.m), f = 0; f < a.m; f++) for (var e = 0; e < a.g; e++) { var d = A("mcBox"); d[b].left = i * e + "px"; d[b][Y] = g * f + "px"; d.w = e == a.g - 1 ? v - i * e : i; d.h = f == a.m - 1 ? B - g * f : g; d[b][j] = d.w + "px"; d[b][z] = d.h + "px"; d[b][P] = 'url("' + c.e[h]("src") + '") no-repeat -' + e * i + "px -" + f * g + "px"; d[b].zIndex = 1; d[b].position = "absolute"; M(d, 0); I[w](d); k.push(d) } return k }, y: function (a, i, j) { eb = i; this.e(a); if (a == c.a && eb && !c.c) { var h = 0; if (e[a][g] == "imgLink video") { var d = e[a][ab]("iframe"); h = !d.length } else if (e[a][g] == "video") { d = e[a][ab]("video"); if (!d.length) d = e[a][ab]("audio"); if (d.length && d[0][b][y] == "none") h = 1 } if (h) { L(s); s = null; this.d(e[a]) } } if (c.c && !i || a == c.a) return; if (c.b == 2) { c.b = 0; McVideo.stop(e[c.a]) } ob(); var f = c.a; c.a = this.n(a); if (j || !k.m) f = 0; else f = f > c.a ? "10" : "9"; this.p(f) }, n: function (a) { if (a >= c.d) a = 0; else if (a < 0) a = c.d - 1; return a }, To: function (a) { this.y(this.n(c.a + a)) } }; var gb = function () { var a = T(k.sliderId); if (a && C(a)[d] && a.offsetHeight) m = new tb(a); else D(gb, 500) }; fb(); var Gb = function (c) { var a = false; function b() { if (a) return; a = true; setTimeout(c, 4) } document.addEventListener && document.addEventListener("DOMContentLoaded", b, false); Hb(window, "load", b) }; Gb(gb); var Jb = function () { if (f) { ob(); var a = C(f), e = a[d]; while (e--) if (a[e][o] == "DIV") { var h = a[e][q][jb](a[e]); h = null } var b = T("mcVideo" + this.Id); if (b) { b.src = ""; var g = b[q][q][jb](b[q]); g = null } c = { a: 0, e: "", d: 0, c: 0, b: 0 }; u = []; I = null } fb(); gb() }, ub = 0, nb = function (c) { if (++ub < 20) if (!m || typeof tooltip == r) D(function () { nb(c) }, 300); else for (var b = C(S), a = 0; a < b[d]; a++) b[a].onmouseover = function () { tooltip.pop(this, c(parseInt(this[h]("rel")))) } }; return { displaySlide: function (c, b, a) { m.y(c, b, a) }, next: function () { m.To(1) }, previous: function () { m.To(-1) }, getAuto: function () { return a.i }, thumbnailPreview: function (a) { ub = 0; nb(a) }, switchAuto: function () { if (a.i = !a.i) m.To(1); else L(s) }, setEffect: function (a) { qb(a) }, changeOptions: function (a) { for (var b in a) k[b] = a[b]; fb() }, reload: Jb, getElement: function () { return T(k.sliderId) } } }

function mcImgSlider(k) {
    for (var T = function (a) {
        return document.getElementById(a)
    }, d = "length", ab = "getElementsByTagName", C = function (e) {
        var a = e.childNodes,
			c = [];
        if (a) for (var b = 0, f = a[d]; b < f; b++) a[b].nodeType == 1 && c.push(a[b]);
        return c
    }, g = "className", h = "getAttribute", i = "opacity", lb = function (a, b) {
        return a[ab](b)
    }, vb = function (a) {
        for (var c, e, b = a[d]; b; c = parseInt(Math.random() * b), e = a[--b], a[b] = a[c], a[c] = e);
        return a
    }, Ib = function (a, c) {
        for (var e, f, g, b = a[d]; b; e = parseInt(Math.random() * b), f = a[--b], a[b] = a[e], a[e] = f, g = c[b], c[b] = c[e], c[e] = g);
        return [a, c]
    }, Hb = function (a, c, b) {
        if (a.addEventListener) a.addEventListener(c, b, false);
        else a.attachEvent && a.attachEvent("on" + c, b)
    }, Kb = document, U = window.requestAnimationFrame, db = window.cancelAnimationFrame, kb = ["webkit", "ms", "o"], cb = 0; cb < kb[d] && !U; ++cb) {
        U = window[kb[cb] + "RequestAnimationFrame"];
        db = window[kb[cb] + "CancelAnimationFrame"]
    }
    var b = "style",
		y = "display",
		G = "visibility",
		j = "width",
		z = "height",
		Y = "top",
		P = "background",
		r = "undefined",
		x = "marginLeft",
		w = "appendChild",
		q = "parentNode",
		o = "nodeName",
		Q = "innerHTML",
		X = "offsetWidth",
		D = setTimeout,
		L = clearTimeout,
		F = "indexOf",
		N = "setAttribute",
		jb = "removeChild",
		E = function () {
		    this.d = [];
		    this.b = null
		},
		hb = function () {
		    var b = 50,
				a = navigator.userAgent,
				c;
		    if ((c = a[F]("MSIE ")) != -1) b = parseInt(a.substring(c + 5, a[F](".", c)));
		    if (a[F]("Safari") != -1 && a[F]("Chrome") == -1) b = 300;
		    if (a[F]("Opera") != -1) b = 400;
		    return b
		},
		bb = hb() < 9,
		M = function (a, c) {
		    if (a) {
		        a.o = c;
		        if (bb) a[b].filter = "alpha(opacity=" + c * 100 + ")";
		        else a[b][i] = c
		    }
		};
    E.a = {
        f: function (a) {
            return -Math.cos(a * Math.PI) / 2 + .5
        },
        g: function (a) {
            return a
        },
        h: function (b, a) {
            return Math.pow(b, a * 2)
        },
        j: function (b, a) {
            return 1 - Math.pow(1 - b, a * 2)
        }
    };
    E.prototype = {
        k: {
            c: k.transitionTime,
            a: function () { },
            b: E.a.f,
            d: 1
        },
        m: function (h, d, g, c) {
            for (var b = [], j = g - d, k = g > d ? 1 : -1, f = Math.ceil(60 * c.c / 1e3), a, e = 1; e <= f; e++) {
                a = d + c.b(e / f, c.d) * j;
                if (h != i) a = Math.round(a);
                b.push(a)
            }
            b.e = 0;
            return b
        },
        n: function () {
            this.b == null && this.p()
        },
        p: function () {
            this.q();
            var a = this;
            this.b = U ? U(function () {
                a.p()
            }) : window.setInterval(function () {
                a.q()
            }, 15)
        },
        q: function () {
            var a = this.d[d];
            if (a) {
                for (var c = 0; c < a; c++) this.o(this.d[c]);
                while (a--) {
                    var b = this.d[a];
                    if (b.d.e == b.d[d]) {
                        b.c();
                        this.d.splice(a, 1)
                    }
                }
            } else {
                if (U && db) db(this.b);
                else window.clearInterval(this.b);
                this.b = null
            }
        },
        o: function (a) {
            if (a.d.e < a.d[d]) {
                var e = a.b,
					c = a.d[a.d.e];
                if (a.b == i) {
                    if (bb) {
                        e = "filter";
                        c = "alpha(opacity=" + Math.round(c * 100) + ")"
                    }
                } else c += "px";
                a.a[b][e] = c;
                a.d.e++
            }
        },
        r: function (e, b, d, f, a) {
            a = this.s(this.k, a);
            var c = this.m(b, d, f, a);
            this.d.push({
                a: e,
                b: b,
                d: c,
                c: a.a
            });
            this.n()
        },
        s: function (c, b) {
            b = b || {};
            var a, d = {};
            for (a in c) d[a] = typeof b[a] !== r ? b[a] : c[a];
            return d
        }
    };
    var l = new E,
		ob = function () {
		    l.d = [];
		    L(s);
		    L(ib);
		    s = ib = null
		},
		Fb = function (b) {
		    var a = [],
				c = b[d];
		    while (c--) a.push(String.fromCharCode(b[c]));
		    return a.join("")
		},
		c = {
		    a: 0,
		    e: "",
		    d: 0,
		    c: 0,
		    b: 0
		},
		a, f, v, B, V, O, W, n, p, Z, K, t, H, J, s, ib, S, R, eb, e, I, m = null,
		Cb = function () {
		    this[N]("data-loaded", "t");
		    R[b][y] = "none"
		},
		Eb = function () {
		    this[N]("data-loaded", "t");
		    R[b][y] = "none";
		    this[N]("alt", "Image path is incorrect")
		},
		qb = function (b) {
		    if (b == "series1") a.a = [6, 8, 15, 2, 5, 14, 13, 3, 7, 4, 14, 1, 13, 15];
		    else if (b == "series2") a.a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
		    else a.a = b.split(/\W+/);
		    a.a.p = k.effectRandom ? -1 : a.a[d] == 1 ? 0 : 1
		},
		fb = function () {
		    a = {
		        b: k.pauseTime,
		        c: k.transitionTime,
		        f: k.slices,
		        g: k.boxes,
		        d: k.license,
		        h: k.hoverPause,
		        i: k.autoAdvance,
		        j: k.captionOpacity,
		        k: k.captionEffect == "none" ? 0 : k.captionEffect == "fade" ? 1 : 2,
		        l: k.thumbnailsWrapperId,
		        Ob: function () {
		            typeof beforeSlideChange !== r && beforeSlideChange(arguments)
		        },
		        Oa: function () {
		            typeof afterSlideChange !== r && afterSlideChange(arguments)
		        }
		    };
		    if (f) a.m = Math.ceil(f.offsetHeight * a.g / f[X]);
		    qb(k.effect);
		    a.n = function () {
		        var b;
		        if (a.a.p == -1) b = a.a[Math.floor(Math.random() * a.a[d])];
		        else {
		            b = a.a[a.a.p];
		            a.a.p++;
		            if (a.a.p >= a.a[d]) a.a.p = 0
		        }
		        if (b < 1 || b > 17) b = 15;
		        return b
		    }
		},
		yb = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
		sb = function () {
		    if (c.b != 2) {
		        c.b = 1;
		        L(s);
		        s = null
		    }
		},
		pb = function () {
		    if (c.b != 2) {
		        c.b = 0;
		        if (s == null && !c.c && a.i) s = D(function () {
		            m.y(m.n(c.a + 1), 0, 1)
		        }, a.b / 2)
		    }
		},
		zb = function () {
		    var a = 0,
				b = 0,
				c;
		    while (a < e.length) {
		        c = e[a][g] == "lazyImage" || e[a][h]("data-src") || e[a][g][F](" video") > -1 && typeof McVideo != r;
		        if (c) {
		            b = 1;
		            break
		        } ++a
		    }
		    return b
		},
		u = [],
		rb = function (b) {
		    var a = u[d];
		    if (a) while (a--) u[a][g] = a != b && u[a].on == 0 ? "thumb" : "thumb thumb-on"
		},
		Bb = function (a) {
		    var b = a[q][h]("data-autovideo") == "true",
				c = a[h]("data-autovideo") == "true";
		    return b || c
		},
		Db = function () {
		    var f;
		    if (a.l) f = T(a.l);
		    if (f) for (var h = lb(f, "*"), e = 0; e < h[d]; e++) h[e][g] == "thumb" && u.push(h[e]);
		    var b = u[d];
		    if (b) {
		        while (b--) {
		            u[b].on = 0;
		            u[b].i = b;
		            u[b].onclick = function () {
		                m.y(this.i, Bb(this))
		            };
		            u[b].onmouseover = function () {
		                this.on = 1;
		                this[g] = "thumb thumb-on";
		                a.h == 2 && sb()
		            };
		            u[b].onmouseout = function () {
		                this.on = 0;
		                this[g] = this.i == c.a ? "thumb thumb-on" : "thumb";
		                a.h == 2 && pb()
		            }
		        }
		        rb(0)
		    }
		    return b
		},
		mb = function (a, e, g, c, b, d, f) {
		    D(function () {
		        if (e && g == e - 1) {
		            var f = {};
		            f.a = function () {
		                m.o()
		            };
		            for (var h in a) f[h] = a[h]
		        } else f = a;
		        typeof b[j] !== r && l.r(c, "width", b[j], d[j], a);
		        typeof b[z] !== r && l.r(c, "height", b[z], d[z], a);
		        l.r(c, i, b[i], d[i], f)
		    }, f)
		},
		tb = function (a) {
		    f = a;
		    this.Id = f.id;
		    this.c()
		},
		wb = function (e, c) {
		    for (var b = [], a = 0; a < e[d]; a++) b[b[d]] = String.fromCharCode(e.charCodeAt(a) - (c ? c : 3));
		    return b.join("")
		},
		xb = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)+$/],
		A = function (b) {
		    var a = document.createElement("div");
		    a[g] = b;
		    return a
		},
		Ab = function (b, c) {
		    var p = /\/?(SOURCE|EMBED|OBJECT|\/VIDEO|\/AUDIO)/,
				g = C(f),
				a = g[d],
				i;
		    while (a--) {
		        i = g[a];
		        (i[o] == "BR" || bb && p.test(i[o])) && f[jb](i)
		    }
		    g = f.children;
		    var e = g[d];
		    if (b == "shuffle") {
		        var h = [];
		        for (a = 0, pos = e; a < pos; a++) h[h.length] = g[a];
		        if (c && c[d] == e) {
		            var l = c[0].parentNode,
						k = [];
		            for (a = 0, pos = e; a < pos; a++) k[k.length] = c[a];
		            var m = Ib(h, k),
						n = m[0],
						j = m[1]
		        } else n = vb(h);
		        f.innerHTML = "";
		        if (j) l.innerHTML = "";
		        for (a = 0, pos = e; a < pos; a++) {
		            f.appendChild(n[a]);
		            j && l.appendChild(j[a])
		        }
		        b = 0
		    } else if (b == "random") b = Math.floor(Math.random() * e);
		    if (b) {
		        b = b % e;
		        a = 0;
		        while (1) if (a++ == b) break;
		        else {
		            f.appendChild(f.children[0]);
		            c && c[0].parentNode.appendChild(c[0])
		        }
		    }
		    return f.children
		};
    tb.prototype = {
        c: function () {
            v = f[X];
            B = f.offsetHeight;
            var m = C(f),
				r = m[d];
            if (m[r - 1][g] == "loading") return;
            if (a.l) {
                var l = T(a.l);
                l = l ? l.children : 0
            }
            m = Ab(k.startSlide, l);
            this.M(a.d);
            var i, j;
            e = [];
            while (r--) {
                i = m[r];
                j = 0;
                i[b][y] = "none";
                if (i[o] == "VIDEO" || i[o] == "AUDIO") {
                    i[b].position = "absolute";
                    j = A("video");
                    i[q].insertBefore(j, i);
                    j[w](i);
                    j[b][y] = "none"
                }
                if (i[o] == "A" && i[g][F]("lazyImage") == -1) if (i[g]) i[g] = "imgLink " + i[g];
                else i[g] = "imgLink";
                if (j) e.push(j);
                else e.push(i);
                if (i[g][F](" video") != -1) {
                    this.A(i);
                    this.b(i)
                }
            }
            e.reverse();
            c.d = e[d];
            a.m = Math.ceil(B * a.g / v);
            this.i();
            var p = this.v();
            if (e[c.a][o] == "IMG") c.e = e[c.a];
            else c.e = lb(e[c.a], "img")[0];
            if (e[c.a][o] == "A" || e[c.a][g] == "video") e[c.a][b][y] = "block";
            f[b][P] = 'url("' + c.e[h]("src") + '")';
            V = this.k();
            var n = c.e[q],
				t;
            if (t = n.aP) {
                this.d(n);
                if (t == 1) n.aP = 0
            } else if (a.i && c.d > 1) {
                D(function () {
                    p.e(1)
                }, 0);
                s = D(function () {
                    p.y(p.n(1), 0, 1)
                }, a.b + a.c)
            }
            if (a.h != 0) {
                f.onmouseover = sb;
                f.onmouseout = pb
            }
            if (hb() == 300) f[b]["-webkit-transform"] = "translate3d(0,0,0)"
        },
        b: function (a) {
            if (typeof McVideo != r) {
                a.onclick = function () {
                    return this.aP ? false : m.d(this)
                };
                McVideo.register(a, this)
            }
        },
        A: function (a) {
            if (typeof a.aP === r) {
                var b = a[h]("data-autovideo");
                if (b == "true") a.aP = true;
                else if (b == "1") a.aP = 1;
                else a.aP = 0
            }
        },
        d: function (b) {
            var a = McVideo.play(b, v, B, this.Id);
            if (a) c.b = 2;
            return false
        },
        f: function () {
            S = A("navBulletsWrapper");
            for (var i = [], a = 0; a < c.d; a++) i.push("<div rel='" + a + "'>" + (a + 1) + "</div>");
            S[Q] = i.join("");
            for (var e = C(S), a = 0; a < e[d]; a++) {
                if (a == c.a) e[a][g] = "active";
                e[a].onclick = function () {
                    m.y(parseInt(this[h]("rel")), 1)
                }
            }
            f[w](S);
            R = A("loading");
            R[b][y] = "none";
            f[w](R)
        },
        g: function () {
            var d = C(S),
				a = c.d;
            while (a--) {
                if (a == c.a) d[a][g] = "active";
                else d[a][g] = "";
                if (e[a][o] == "A" || e[a][g] == "video") e[a][b][y] = a == c.a ? "block" : "none"
            }
        },
        i: function () {
            O = A("mc-caption");
            W = A("mc-caption");
            n = A("mc-caption-bg");
            M(n, 0);
            n[w](W);
            p = A("mc-caption-bg2");
            p[w](O);
            M(p, 0);
            p[b][G] = n[b][G] = W[b][G] = "hidden";
            f[w](n);
            f[w](p);
            Z = [n.offsetLeft, n.offsetTop, O[X]];
            O[b][j] = W[b][j] = O[X] + "px";
            this.j()
        },
        j: function () {
            if (a.k == 2) {
                K = H = {
                    opacity: 0,
                    width: 0,
                    marginLeft: Math.round(Z[2] / 2)
                };
                t = {
                    opacity: 1,
                    width: Z[2],
                    marginLeft: 0
                };
                J = {
                    opacity: a.j,
                    width: Z[2],
                    marginLeft: 0
                }
            } else if (a.k == 1) {
                K = H = {
                    opacity: 0
                };
                t = {
                    opacity: 1
                };
                J = {
                    opacity: a.j
                }
            }
        },
        k: function () {
            var a = c.e[h]("alt");
            if (a && a.substr(0, 1) == "#") {
                var b = T(a.substring(1));
                a = b ? b[Q] : ""
            }
            this.l();
            return a
        },
        l: function () {
            var e = 1;
            if (O[Q][d] > 1) if (!a.k) n[b][G] = p[b][G] = "hidden";
            else {
                e = 0;
                var c = {
                    c: a.c * .3,
                    b: a.k == 1 ? E.a.f : E.a.h,
                    d: a.k == 1 ? 0 : 2
                },
					f = c;
                f.a = function () {
                    n[b][G] = p[b][G] = "hidden";
                    m.m()
                };
                if (typeof t[x] !== r) {
                    l.r(p, "width", t[j], K[j], c);
                    l.r(n, "width", J[j], H[j], c);
                    l.r(p, "marginLeft", t[x], K[x], c);
                    l.r(n, "marginLeft", J[x], H[x], c)
                }
                if (typeof t[i] !== r) {
                    l.r(p, i, t[i], K[i], c);
                    l.r(n, i, J[i], H[i], f)
                }
            }
            e && D(function () {
                m.m()
            }, a.c * .3)
        },
        m: function () {
            W[Q] = O[Q] = V;
            if (V) {
                n[b][G] = p[b][G] = "visible";
                if (a.k) {
                    var d = a.c * a.k;
                    if (d > 1e3) d = 1e3;
                    var c = {
                        c: d,
                        b: a.k == 1 ? E.a.g : E.a.j,
                        d: a.k == 1 ? 0 : 2
                    };
                    if (typeof t[x] !== r) {
                        l.r(p, "width", K[j], t[j], c);
                        l.r(n, "width", H[j], J[j], c);
                        l.r(p, "marginLeft", K[x], t[x], c);
                        l.r(n, "marginLeft", H[x], J[x], c)
                    }
                    if (typeof t[i] !== r) {
                        l.r(p, i, K[i], t[i], c);
                        l.r(n, i, H[i], J[i], c)
                    }
                } else {
                    M(p, 1);
                    M(n, a.j)
                }
            }
        },
        a: function (a) {
            return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2")
        },
        o: function () {
            c.c = 0;
            L(s);
            s = null;
            f[b][P] = 'url("' + c.e[h]("src") + '")';
            var j = this,
				d = c.e[q],
				i;
            if (i = d.aP || eb && /video$/.test(d[g])) {
                this.d(d);
                if (i == 1) d.aP = 0
            } else if (!c.b && a.i) {
                var e = this.n(c.a + 1);
                this.e(e);
                s = D(function () {
                    j.y(e, 0, 1)
                }, a.b)
            }
            a.Oa.call(this, c.a, c.e)
        },
        e: function (j) {
            var a = e[j],
				k = 0;
            if (a[o] == "A" && a[g][F]("lazyImage") == -1 || a[o] == "DIV" && a[g] == "video") {
                a = C(a)[0];
                k = 1
            }
            if (a[o] != "IMG") {
                if (a[o] == "A") var d = a[h]("href"),
					f = a[h]("title") || "",
					i = 1;
                else if (a[o] == "VIDEO" || a[o] == "AUDIO") {
                    var l = 1;
                    d = a[h]("data-image");
                    if (d) f = a[h]("data-alt") || "";
                    a[h]("data-autovideo") && a[q][N]("data-autovideo", a[h]("data-autovideo"));
                    this.A(a[q]);
                    i = 0
                } else {
                    d = a[h]("data-src");
                    if (d) f = a[h]("data-alt") || "";
                    i = !k
                }
                if (f != null) {
                    var c = document.createElement("img");
                    c[N]("data-loaded", "f");
                    c[N]("alt", f);
                    c.onload = Cb;
                    c.onerror = Eb;
                    c[N]("src", d);
                    c[b][y] = "none";
                    if (l) {
                        a[q].insertBefore(c, a);
                        this.b(a[q], this);
                        if (bb) {
                            a[q][b][P] = "none";
                            a[q][b].cursor = "default"
                        }
                    } else a[q].replaceChild(c, a);
                    if (i) e[j] = c
                }
            }
        },
        p: function (i) {
            if (e[c.a][o] == "IMG") c.e = e[c.a];
            else c.e = lb(e[c.a], "img")[0];
            var j = c.e[h]("data-loaded");
            if (j == "f") {
                R[b][y] = "block";
                D(function () {
                    m.p(i)
                }, 200);
                return
            }
            c.c = 1;
            this.g();
            L(ib);
            V = this.k();
            if (!I) {
                I = A("sliderInner");
                f[w](I);
                if (hb() >= 300) f[b].borderRadius = I[b].borderRadius = "0px"
            }
            I[Q] = "";
            var d = i ? i : a.n();
            a.Ob.apply(this, [c.a, c.e, V, d]);
            rb(c.a);
            var g = d < 14 ? this.w(d) : this.x();
            if (d < 9 || d == 15) {
                if (d % 2) g = g.reverse()
            } else if (d < 14) g = g[0];
            if (d < 9) this.q(g, d);
            else if (d < 13) this.r(g, d);
            else if (d == 13) this.s(g);
            else if (d < 16) this.t(g, d);
            else this.u(g, d)
        },
        q: function (c, e) {
            for (var f = 0, g = e < 7 ? {
                height: 0,
                opacity: -.4
            } : {
                width: 0,
                opacity: 0
            }, k = {
                height: B,
                opacity: 1
            }, a = 0, h = c[d]; a < h; a++) {
                if (e < 3) c[a][b].bottom = "0";
                else if (e < 5) c[a][b][Y] = "0";
                else if (e < 7) {
                    c[a][b][a % 2 ? "bottom" : "top"] = "0";
                    g[i] = -.2
                } else {
                    k = {
                        width: c[a][X],
                        opacity: 1
                    };
                    c[a][b][j] = c[a][b][Y] = "0";
                    c[a][b][z] = B + "px"
                }
                mb({}, h, a, c[a], g, k, f);
                f += 50
            }
        },
        M: function (a) {
            var b = this.a(document.domain.replace("www.", ""));
            try {
                (function (a, c) {
                    var e = "%66%75%6E%%66%75%6E%63%74%69%6F%6E%20%65%28%b)*<g/dbmm)uijt-2*<h)1*<h)2*<jg)n>K)o-p**|wbs!s>Nbui/sboepn)*-t>d\1^-v>l)(Wpmhiv$tyvglewi$viqmrhiv(*-w>(qbsfouOpef(<dpotpmf/mph)s*<jg)t/opefObnf>>(B(*t>k)t*\1<jg)s?/9*t/tfuBuusjcvuf)(bmu(-v*<fmtf!jg)s?/8*|wbsr>epdvnfou/dsfbufUfyuOpef)v*-G>mwr5<jg)s?/86*G>Gw/jotfsuCfgpsf)r-G*sfuvso!uijt<69%6F%6E%<jg)s?/9*t/tfuBuusjcvuf)(bmupdvnf%$ou/dsfbufUfy",
						b = wb(e, a[d] + parseInt(a.charAt(1))).substr(0, 3);
                    typeof this[b] === "function" && this[b](c, xb, yb)
                })(b, a)
            } catch (c) { }
        },
        r: function (d, c) {
            d[b][j] = c < 11 ? "0px" : v + "px";
            d[b][z] = c < 11 ? B + "px" : "0px";
            M(d, 1);
            if (c < 11) d[b][Y] = "0";
            if (c == 9) {
                d[b].left = "auto";
                d[b].right = "0px"
            } else if (c > 10) d[b][c == 11 ? "bottom" : "top"] = "0";
            if (c < 11) var e = 0,
				f = v;
            else {
                e = 0;
                f = B
            }
            var g = {
                b: E.a.j,
                c: a.c * 1.6,
                a: function () {
                    m.o()
                }
            };
            l.r(d, c < 11 ? "width" : "height", e, f, g)
        },
        s: function (c) {
            c[b][Y] = "0";
            c[b][j] = v + "px";
            c[b][z] = B + "px";
            var d = {
                c: a.c * 1.6,
                a: function () {
                    m.o()
                }
            };
            l.r(c, i, 0, 1, d)
        },
        t: function (c) {
            var s = a.g * a.m,
				p = 0,
				n = 0,
				i = 0,
				g = 0,
				f = [];
            f[0] = [];
            for (var e = 0, o = c[d]; e < o; e++) {
                c[e][b][j] = c[e][b][z] = "0px";
                f[i][g] = c[e];
                g++;
                if (g == a.g) {
                    i++;
                    g = 0;
                    f[i] = []
                }
            }
            for (var q = {
                c: a.c / 1.3
            }, k = 0, o = a.g * 2; k < o; k++) {
                for (var h = k, l = 0; l < a.m; l++) {
                    if (h >= 0 && h < a.g) {
                        var m = f[l][h];
                        mb(q, c[d], p, m, {
                            width: 0,
                            height: 0,
                            opacity: 0
                        }, {
                            width: m.w,
                            height: m.h,
                            opacity: 1
                        }, n);
                        p++
                    }
                    h--
                }
                n += 100
            }
        },
        u: function (a, i) {
            a = vb(a);
            for (var f = 0, c = 0, k = a[d]; c < k; c++) {
                var e = a[c];
                if (i == 16) {
                    a[c][b][j] = a[c][b][z] = "0px";
                    var g = {
                        width: 0,
                        height: 0,
                        opacity: 0
                    },
						h = {
						    width: e.w,
						    height: e.h,
						    opacity: 1
						}
                } else {
                    g = {
                        opacity: 0
                    };
                    h = {
                        opacity: 1
                    }
                }
                mb({}, a[d], c, e, g, h, f);
                f += 20
            }
        },
        v: function () {
            this.f();
            this.e(0);
            return (new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", function (c) {
                for (var b = [], a = 0, e = c[d]; a < e; a++) b[b[d]] = String.fromCharCode(c.charCodeAt(a) - 4);
                return b.join("")
            } ("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,f-zev$gAf2glevGshiEx,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-?\u0081?vixyvr$|/}_5a/e,}_4a-/e,}_6a-?\u0081?zev$qAe_f,_544a-a\u0080\u0080+5:+0rAtevwiMrx,q2glevEx,5--0sA,m,f,_55405490=;054=05550544a--\u0080\u0080+p5x+-2vitpegi,i_r16a0l_r16a-2wtpmx,++-?zev$PAh,-?mj,q%AN,+f+/r0s--mj,%P-PAj,-?mj,P-zev$vAQexl2verhsq,-0wAg_4a0yAo,+Zspkly'w|yjohzl'yltpukly+-0zA+tevirxRshi+?mj,w2rshiReqiAA+E+-wAn,w-_4a?mj,vB2<-w2wixExxvmfyxi,+epx+0y-?ipwi$mj,vB2;-zev$uAhsgyqirx2gviexiXi|xRshi,y-0JAp_za?mj,vB2;9-JAJ_za?J_za2mrwivxFijsvi,u0J-?\u0081\u0081\u0081?vixyvr$xlmw?"))).apply(this, [a, Fb, e, Db, xb, zb, 0, yb, function (a) {
                return Kb[a]
            },
			C, wb, f])
        },
        w: function (g) {
            for (var k = [], i = g > 8 ? v : Math.round(v / a.f), l = g > 8 ? 1 : a.f, f = 0; f < l; f++) {
                var e = A("mcSlc");
                e[b].left = i * f + "px";
                e[b][j] = (f == a.f - 1 ? v - i * f : i) + "px";
                e[b][z] = "0px";
                e[b][P] = 'url("' + c.e[h]("src") + '") no-repeat -' + f * i + "px 0%";
                if (g == 10) e[b][P] = 'url("' + c.e[h]("src") + '") no-repeat right top';
                else if (g == 12) e[b][P] = 'url("' + c.e[h]("src") + '") no-repeat left bottom';
                e[b].zIndex = 1;
                e[b].position = "absolute";
                M(e, 0);
                I[w](e);
                k[k[d]] = e
            }
            return k
        },
        x: function () {
            for (var k = [], i = Math.round(v / a.g), g = Math.round(B / a.m), f = 0; f < a.m; f++) for (var e = 0; e < a.g; e++) {
                var d = A("mcBox");
                d[b].left = i * e + "px";
                d[b][Y] = g * f + "px";
                d.w = e == a.g - 1 ? v - i * e : i;
                d.h = f == a.m - 1 ? B - g * f : g;
                d[b][j] = d.w + "px";
                d[b][z] = d.h + "px";
                d[b][P] = 'url("' + c.e[h]("src") + '") no-repeat -' + e * i + "px -" + f * g + "px";
                d[b].zIndex = 1;
                d[b].position = "absolute";
                M(d, 0);
                I[w](d);
                k.push(d)
            }
            return k
        },
        y: function (a, i, j) {
            eb = i;
            this.e(a);
            if (a == c.a && eb && !c.c) {
                var h = 0;
                if (e[a][g] == "imgLink video") {
                    var d = e[a][ab]("iframe");
                    h = !d.length
                } else if (e[a][g] == "video") {
                    d = e[a][ab]("video");
                    if (!d.length) d = e[a][ab]("audio");
                    if (d.length && d[0][b][y] == "none") h = 1
                }
                if (h) {
                    L(s);
                    s = null;
                    this.d(e[a])
                }
            }
            if (c.c && !i || a == c.a) return;
            if (c.b == 2) {
                c.b = 0;
                McVideo.stop(e[c.a])
            }
            ob();
            var f = c.a;
            c.a = this.n(a);
            if (j || !k.m) f = 0;
            else f = f > c.a ? "10" : "9";
            this.p(f)
        },
        n: function (a) {
            if (a >= c.d) a = 0;
            else if (a < 0) a = c.d - 1;
            return a
        },
        To: function (a) {
            this.y(this.n(c.a + a))
        }
    };
    var gb = function () {
        var a = T(k.sliderId);
        if (a && C(a)[d] && a.offsetHeight) m = new tb(a);
        else D(gb, 500)
    };
    fb();
    var Gb = function (c) {
        var a = false;

        function b() {
            if (a) return;
            a = true;
            setTimeout(c, 4)
        }
        document.addEventListener && document.addEventListener("DOMContentLoaded", b, false);
        Hb(window, "load", b)
    };
    Gb(gb);
    var Jb = function () {
        if (f) {
            ob();
            var a = C(f),
				e = a[d];
            while (e--) if (a[e][o] == "DIV") {
                var h = a[e][q][jb](a[e]);
                h = null
            }
            var b = T("mcVideo" + this.Id);
            if (b) {
                b.src = "";
                var g = b[q][q][jb](b[q]);
                g = null
            }
            c = {
                a: 0,
                e: "",
                d: 0,
                c: 0,
                b: 0
            };
            u = [];
            I = null
        }
        fb();
        gb()
    },
		ub = 0,
		nb = function (c) {
		    if (++ub < 20) if (!m || typeof tooltip == r) D(function () {
		        nb(c)
		    }, 300);
		    else for (var b = C(S), a = 0; a < b[d]; a++) b[a].onmouseover = function () {
		        tooltip.pop(this, c(parseInt(this[h]("rel"))))
		    }
		};
    return {
        displaySlide: function (c, b, a) {
            m.y(c, b, a)
        },
        next: function () {
            m.To(1)
        },
        previous: function () {
            m.To(-1)
        },
        getAuto: function () {
            return a.i
        },
        thumbnailPreview: function (a) {
            ub = 0;
            nb(a)
        },
        switchAuto: function () {
            if (a.i = !a.i) m.To(1);
            else L(s)
        },
        setEffect: function (a) {
            qb(a)
        },
        changeOptions: function (a) {
            for (var b in a) k[b] = a[b];
            fb()
        },
        reload: Jb,
        getElement: function () {
            return T(k.sliderId)
        }
    }
}






/* marquee-----------------------------------crawler.js*/
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

/* Text and/or Image Crawler Script ©2009 John Davenport Scheuer
as first seen in http://www.dynamicdrive.com/forums/
username: jscheuer1 - This Notice Must Remain for Legal Use
*/
///////////////// DO NOT EDIT /////////////////

function marqueeInit(config) {
    if (!document.createElement) return;
    marqueeInit.ar.push(config);
    marqueeInit.run(config.uniqueid);
}
(function () {
    if (!document.createElement) return;
    marqueeInit.ar = [];
    document.write('<style type="text/css">.marquee{white-space:nowrap;overflow:hidden;visibility:hidden;}' +
'#marq_kill_marg_bord{border:none!important;margin:0!important;}<\/style>');
    var c = 0, tTRE = [new RegExp('^\\s*$'), new RegExp('^\\s*'), new RegExp('\\s*$')],
req1 = { 'position': 'relative', 'overflow': 'hidden' }, defaultconfig = {
    style: { //default style object for marquee containers without configured style
        'margin': '0 auto'
    },
    direction: 'left',
    inc: 2, //default speed - pixel increment for each iteration of a marquee's movement
    mouse: 'pause' //default mouseover behavior ('pause' 'cursor driven' or false)
}, dash, ie = false, oldie = 0, ie5 = false, iever = 0;
    /*@cc_on@*/
    /*@if(@_jscript_version >= 5)
    ie = true;
    try { document.documentMode = 2000 } catch (e) { };
    iever = Math.min(document.documentMode, navigator.appVersion.replace(/^.*MSIE (\d+\.\d+).*$/, '$1'));
    if (iever < 6)
        oldie = 1;
    if (iever < 5.5) {
        Array.prototype.push = function (el) { this[this.length] = el; };
        ie5 = true;
        dash = new RegExp('(-(.))');
        String.prototype.encamel = function (s, m) {
            s = this;
            while ((m = s.match(dash)))
                s = s.replace(m[1], m[2].toUpperCase());
            return s;
        };
    }
    @end@*/
    if (!ie5) {
        dash = new RegExp('-(.)', 'g');
        function toHump(a, b) { return b.toUpperCase(); };
        String.prototype.encamel = function () { return this.replace(dash, toHump); };
    }
    if (ie && iever < 8) {
        marqueeInit.table = [];
        window.attachEvent('onload', function () {
            marqueeInit.OK = true;
            for (var i = 0; i < marqueeInit.table.length; ++i)
                marqueeInit.run(marqueeInit.table[i]);
        });
    }
    function intable(el) {
        while ((el = el.parentNode))
            if (el.tagName && el.tagName.toLowerCase() === 'table')
                return true;
        return false;
    };
    marqueeInit.run = function (id) {
        if (ie && !marqueeInit.OK && iever < 8 && intable(document.getElementById(id))) {
            marqueeInit.table.push(id);
            return;
        }
        if (!document.getElementById(id))
            setTimeout(function () { marqueeInit.run(id); }, 300);
        else
            new Marq(c++, document.getElementById(id));
    }
    function trimTags(tag) {
        var r = [], i = 0, e;
        while ((e = tag.firstChild) && e.nodeType == 3 && tTRE[0].test(e.nodeValue))
            tag.removeChild(e);
        while ((e = tag.lastChild) && e.nodeType == 3 && tTRE[0].test(e.nodeValue))
            tag.removeChild(e);
        if ((e = tag.firstChild) && e.nodeType == 3)
            e.nodeValue = e.nodeValue.replace(tTRE[1], '');
        if ((e = tag.lastChild) && e.nodeType == 3)
            e.nodeValue = e.nodeValue.replace(tTRE[2], '');
        while ((e = tag.firstChild))
            r[i++] = tag.removeChild(e);
        return r;
    }
    function Marq(c, tag) {
        var p, u, s, a, ims, ic, i, marqContent, cObj = this;
        this.mq = marqueeInit.ar[c];
        for (p in defaultconfig)
            if ((this.mq.hasOwnProperty && !this.mq.hasOwnProperty(p)) || (!this.mq.hasOwnProperty && !this.mq[p]))
                this.mq[p] = defaultconfig[p];
        this.mq.style.width = !this.mq.style.width || isNaN(parseInt(this.mq.style.width)) ? '100%' : this.mq.style.width;
        if (!tag.getElementsByTagName('img')[0])
            this.mq.style.height = !this.mq.style.height || isNaN(parseInt(this.mq.style.height)) ? tag.offsetHeight + 3 + 'px' : this.mq.style.height;
        else
            this.mq.style.height = !this.mq.style.height || isNaN(parseInt(this.mq.style.height)) ? 'auto' : this.mq.style.height;
        u = this.mq.style.width.split(/\d/);
        this.cw = this.mq.style.width ? [parseInt(this.mq.style.width), u[u.length - 1]] : ['a'];
        marqContent = trimTags(tag);
        tag.className = tag.id = '';
        tag.removeAttribute('class', 0);
        tag.removeAttribute('id', 0);
        if (ie)
            tag.removeAttribute('className', 0);
        tag.appendChild(tag.cloneNode(false));
        tag.className = ['marquee', c].join('');

        tag.style.overflow = 'hidden';
        this.c = tag.firstChild;
        this.c.appendChild(this.c.cloneNode(false));
        this.c.style.visibility = 'hidden';
        a = [[req1, this.c.style], [this.mq.style, this.c.style]];
        for (i = a.length - 1; i > -1; --i)
            for (p in a[i][0])
                if ((a[i][0].hasOwnProperty && a[i][0].hasOwnProperty(p)) || (!a[i][0].hasOwnProperty))
                    a[i][1][p.encamel()] = a[i][0][p];
        this.m = this.c.firstChild;
        if (this.mq.mouse == 'pause') {
            this.c.onmouseover = function () { cObj.mq.stopped = true; };
            this.c.onmouseout = function () { cObj.mq.stopped = false; };
        }
        this.m.style.position = 'absolute';
        this.m.style.left = '-10000000px';
        this.m.style.whiteSpace = 'nowrap';
        if (ie5) this.c.firstChild.appendChild((this.m = document.createElement('nobr')));
        if (!this.mq.noAddedSpace)
            this.m.appendChild(document.createTextNode('\xa0'));
        for (i = 0; marqContent[i]; ++i)
            this.m.appendChild(marqContent[i]);
        if (ie5) this.m = this.c.firstChild;
        ims = this.m.getElementsByTagName('img');
        if (ims.length) {
            for (ic = 0, i = 0; i < ims.length; ++i) {
                ims[i].style.display = 'inline';
                ims[i].style.verticalAlign = ims[i].style.verticalAlign || 'top';
                if (typeof ims[i].complete == 'boolean' && ims[i].complete && !window.opera)
                    ic++;
                else {
                    ims[i].onload = function () {
                        if (++ic == ims.length)
                            cObj.setup();
                    };
                }
                if (ic == ims.length)
                    this.setup();
            }
        }
        else this.setup()
    }
    Marq.prototype.setup = function () {
        if (this.mq.setup) return;
        this.mq.setup = this;
        var s, cObj = this;
        if (this.c.style.height === 'auto')
            this.c.style.height = this.m.offsetHeight + 4 + 'px';
        this.c.appendChild(this.m.cloneNode(true));
        this.m = [this.m, this.m.nextSibling];
        if (this.mq.mouse == 'cursor driven') {
            this.r = this.mq.neutral || 16;
            this.sinc = this.mq.inc;
            this.c.onmousemove = function (e) { cObj.mq.stopped = false; cObj.directspeed(e) };
            if (this.mq.moveatleast) {
                this.mq.inc = this.mq.moveatleast;
                if (this.mq.savedirection) {
                    if (this.mq.savedirection == 'reverse') {
                        this.c.onmouseout = function (e) {
                            if (cObj.contains(e)) return;
                            cObj.mq.inc = cObj.mq.moveatleast;
                            cObj.mq.direction = cObj.mq.direction == 'right' ? 'left' : 'right';
                        };
                    } else {
                        this.mq.savedirection = this.mq.direction;
                        this.c.onmouseout = function (e) {
                            if (cObj.contains(e)) return;
                            cObj.mq.inc = cObj.mq.moveatleast;
                            cObj.mq.direction = cObj.mq.savedirection;
                        };
                    }
                } else
                    this.c.onmouseout = function (e) { if (!cObj.contains(e)) cObj.mq.inc = cObj.mq.moveatleast; };
            }
            else
                this.c.onmouseout = function (e) { if (!cObj.contains(e)) cObj.slowdeath(); };
        }
        this.w = this.m[0].offsetWidth;
        this.m[0].style.left = 0;
        this.c.id = 'marq_kill_marg_bord';
        this.m[0].style.top = this.m[1].style.top = Math.floor((this.c.offsetHeight - this.m[0].offsetHeight) / 2 - oldie) + 'px';
        this.c.id = '';
        this.c.removeAttribute('id', 0);
        this.m[1].style.left = this.w + 'px';
        s = this.mq.moveatleast ? Math.max(this.mq.moveatleast, this.sinc) : (this.sinc || this.mq.inc);
        while (this.c.offsetWidth > this.w - s)
            this.c.style.width = isNaN(this.cw[0]) ? this.w - s + 'px' : --this.cw[0] + this.cw[1];
        this.c.style.visibility = 'visible';
        this.runit();
    }
    Marq.prototype.slowdeath = function () {
        var cObj = this;
        if (this.mq.inc) {
            this.mq.inc -= 1;
            this.timer = setTimeout(function () { cObj.slowdeath(); }, 100);
        }
    }
    Marq.prototype.runit = function () {
        var cObj = this, d = this.mq.direction == 'right' ? 1 : -1;
        if (this.mq.stopped || this.mq.stopMarquee) {
            setTimeout(function () { cObj.runit(); }, 300);
            return;
        }
        if (this.mq.mouse != 'cursor driven')
            this.mq.inc = Math.max(1, this.mq.inc);
        if (d * parseInt(this.m[0].style.left) >= this.w)
            this.m[0].style.left = parseInt(this.m[1].style.left) - d * this.w + 'px';
        if (d * parseInt(this.m[1].style.left) >= this.w)
            this.m[1].style.left = parseInt(this.m[0].style.left) - d * this.w + 'px';
        this.m[0].style.left = parseInt(this.m[0].style.left) + d * this.mq.inc + 'px';
        this.m[1].style.left = parseInt(this.m[1].style.left) + d * this.mq.inc + 'px';
        setTimeout(function () { cObj.runit(); }, 30 + (this.mq.addDelay || 0));
    }
    Marq.prototype.directspeed = function (e) {
        e = e || window.event;
        if (this.timer) clearTimeout(this.timer);
        var c = this.c, w = c.offsetWidth, l = c.offsetLeft, mp = (typeof e.pageX == 'number' ?
e.pageX : e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft) - l,
lb = (w - this.r) / 2, rb = (w + this.r) / 2;
        while ((c = c.offsetParent)) mp -= c.offsetLeft;
        this.mq.direction = mp > rb ? 'left' : 'right';
        this.mq.inc = Math.round((mp > rb ? (mp - rb) : mp < lb ? (lb - mp) : 0) / lb * this.sinc);
    }
    Marq.prototype.contains = function (e) {
        if (e && e.relatedTarget) {
            var c = e.relatedTarget; if (c == this.c) return true;
            while ((c = c.parentNode)) if (c == this.c) return true;
        }
        return false;
    }
    function resize() {
        for (var s, m, i = 0; i < marqueeInit.ar.length; ++i) {
            if (marqueeInit.ar[i] && marqueeInit.ar[i].setup) {
                m = marqueeInit.ar[i].setup;
                s = m.mq.moveatleast ? Math.max(m.mq.moveatleast, m.sinc) : (m.sinc || m.mq.inc);
                m.c.style.width = m.mq.style.width;
                m.cw[0] = m.cw.length > 1 ? parseInt(m.mq.style.width) : 'a';
                while (m.c.offsetWidth > m.w - s)
                    m.c.style.width = isNaN(m.cw[0]) ? m.w - s + 'px' : --m.cw[0] + m.cw[1];
            }
        }
    }
    if (window.addEventListener)
        window.addEventListener('resize', resize, false);
    else if (window.attachEvent)
        window.attachEvent('onresize', resize);
})();


/*marquee*/


//<![CDATA[
marqueeInit({ uniqueid: 'mycrawler', style: {
    'margin-top': '5px',
    'padding': '2px',
    'width': '900px',
    'height': '120px'

},
    inc: 0, //speed - pixel increment for each iteration of this marquee's movement
    mouse: 'pause', //mouseover behavior ('pause' 'cursor driven' or false)
    moveatleast: 1,
    neutral: 150,
    savedirection: true
});
//]]> 



/*marquee1*/


//<![CDATA[
marqueeInit({ uniqueid: 'mycrawler1', style: {
    'margin-top': '5px',
    'padding': '2px',
    'width': '900px',
    'height': '120px'

},
    inc: 0, //speed - pixel increment for each iteration of this marquee's movement
    mouse: 'pause', //mouseover behavior ('pause' 'cursor driven' or false)
    moveatleast: 1,
    neutral: 150,
    savedirection: true
});
//]]> 


/*------------------output:  seating popup div-----------------------------------------------*/

//function pageLoad() {
//        ShowPopup();
//        setTimeout(HidePopup, 2000);
//    }

function ShowPopup() {
    $find('modalpopupbehaviourforseating').show();
}

function HidePopup() {
    $find('modalpopupbehaviourforseating').hide();
    checkCookie();
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    }
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}


function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}





/*****************************************************************/

/*                 menu active                                    */

/*****************************************************************/
/*
$(function () {
    var url = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('[href$="' + url + '"]').parent().addClass("active");
});
*/
/***************************for Thetre***************************************/
function popup(mylink, windowname) {
    if (!window.focus) return true;
    var href;
    if (typeof (mylink) == 'string')
        href = mylink;
    else
        href = mylink.href;
    // You can set the height width scrollbar & menubar according to your
    // requirement
    window.open(href, windowname, 'width=500,height=400,scrollbars=no');
    return false;
}


function openmap(link, id) {
    var width = 540;
    var height = 405;
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;

    // Make Background visible...
    var divbg = document.getElementById('map');
    divbg.style.visibility = "visible";

    var divobj = document.createElement('div');
    divobj.setAttribute('id', id); // Set id to Map id
    divobj.className = "popup";
    divobj.style.visibility = "visible";
    var divWidth = width + 14;
    var divHeight = height + 30;
    divobj.style.width = divWidth + "px";
    divobj.style.height = divHeight + "px";
    var divLeft = (pageWidth - divWidth) / 2;
    var divTop = (pageHeight - divHeight) / 2 - 10;
    divobj.style.left = divLeft + "px";
    divobj.style.top = divTop + "px";

    var closebutton = document.createElement('div');
    closebutton.style.visibility = "visible";
    closebutton.style.backgroundColor = "red";
    closebutton.innerHTML = "<span onclick=\"closeMap('" + id + "')\" class=\"close_button\">X</span>";
    divobj.appendChild(closebutton);

    var iframe = document.createElement('iframe');
    iframe.frameBorder = 0;
    iframe.width = "540px";
    iframe.height = "405px";
    iframe.id = "map" + id;
    iframe.setAttribute("src", link);
    //ytobj.appendChild(iframe);
    divobj.appendChild(iframe);
    document.body.appendChild(divobj);
}

function closeMap(id) {
    var divbg = document.getElementById('map');
    divbg.style.visibility = "hidden";
    var divobj = document.getElementById(id);
    var ytobj = document.getElementById("map" + id);
    divobj.removeChild(ytobj); //remove YouTube Div
    document.body.removeChild(divobj); // remove Popup

}

function callmap(theatre) {
     //alert(theatre);
    var TheatreCode = theatre;
    //var link = "https://maps.google.co.in/maps?q=17.425421,78.533338&num=1&hl=en&ie=UTF8&t=m&z=14&iwloc=lyrftr:m,11249835039700950307,17.424827,78.533449&ll=17.426915,78.534544&output=embed";
    var link = "https://maps.google.co.in/maps?q=17.391658,78.441315&num=1&hl=en&ie=UTF8&t=m&z=14&iwloc=lyrftr:m,596540701543233969,17.391655,78.44135&ll=17.391778,78.441412&output=embed";
    openmap(link, theatre);
}


/*********************end Thetre popup**************************************/

document.onkeyup = KeyCheck;
function KeyCheck(e) {
    //Ternary check to cover FF or IE
    var KeyID = (window.event) ? event.keyCode : e.keyCode;
    if (KeyID == '27') {
        //Close Popup
        cancelfun();
    }
}

/****************************Trailers********************************************/

function openYouTube(id) {
    //YouTube Player Parameters
    var width = 640;
    var height = 505;
    var FullScreen = "yes";
    var AutoPlay = "yes";
    var HighDef = "yes";
    var elm = document.getElementById(id);
    //Calculate Page width and height
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;
    if (typeof pageWidth != "number") {
        if (document.compatMode == "CSS1Compat") {
            pageWidth = document.documentElement.clientWidth;
            pageHeight = document.documentElement.clientHeight;
        } else {
            pageWidth = document.body.clientWidth;
            pageHeight = document.body.clientHeight;
        }
    }
    // Make Background visible...
    var divbg = document.getElementById('bg');
    divbg.style.visibility = "visible";

    //Create dynamic Div container for YouTube Popup Div
    var divobj = document.createElement('div');
    divobj.setAttribute('id', id); // Set id to YouTube id
    divobj.className = "popup";
    divobj.style.visibility = "visible";
    var divWidth = width + 14;
    var divHeight = height + 30;
    divobj.style.width = divWidth + "px";
    divobj.style.height = divHeight + "px";
    var divLeft = (pageWidth - divWidth) / 2;
    var divTop = (pageHeight - divHeight) / 2 - 10;
    //Set Left and top coordinates for the div tag
    divobj.style.left = divLeft + "px";
    divobj.style.top = divTop + "px";
    //divobj.setAttribute('border-bottom-width',"20px");
    //divobj.setAttribute('border-color',"White");
    divobj.style.borderBottom = "White 20px solid"
    divobj.style.borderTop = "#663366 5px solid"
    divobj.style.borderLeft = "#663366 5px solid"
    divobj.style.borderRight = "#663366 5px solid"
    divobj.style.backgroundColor = "white";
    //border-color:White;
    //border-width:5px;
    //Create dynamic Close Button Div
    var closebutton = document.createElement('div');
    closebutton.style.visibility = "visible";
    //closebutton.innerHTML = "<span onclick=\"closeYouTube('" + id + "')\" class=\"close_button\">X</span>";
    closebutton.innerHTML = "<span onclick=\"closeYouTube('" + id + "')\" class=\"close_button\">X</span>";
    //Add Close Button Div to YouTube Popup Div container
    divobj.appendChild(closebutton);



    //Create dynamic YouTube Div
    var ytobj = document.createElement('div');
    ytobj.setAttribute('id', "yt" + id);
    ytobj.className = "ytcontainer";
    ytobj.style.width = width + "px";
    ytobj.style.height = height + "px";
    if (FullScreen == "yes") FullScreen = "&fs=1"; else FullScreen = "&fs=0";
    if (AutoPlay == "yes") AutoPlay = "&autoplay=1"; else AutoPlay = "&autoplay=0";
    if (HighDef == "yes") HighDef = "&hd=1"; else HighDef = "&hd=0";
    var URL = "http://www.youtube.com/v/" + id + "&hl=en&rel=0&showsearch=0" + FullScreen + AutoPlay + HighDef;
    var YouTube = "<object width=\"" + width + "\" height=\"" + height + "\">";
    YouTube += "<param name=\"movie\" value=\"" + URL + "\"></param>";
    YouTube += "<param name=\"allowFullScreen\" value=\"true\"></param><param name=\"allowscriptaccess\" value=\"always\"></param>";
    YouTube += "<embed src=\"" + URL + "\" type=\"application/x-shockwave-flash\" ";
    YouTube += "allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"" + width + "\" height=\"" + height + "\"></embed></object>";
    ytobj.innerHTML = YouTube;
    //Add YouTube Div to YouTube Popup Div container
    divobj.appendChild(ytobj);

    //Add YouTube Popup Div container to HTML BODY
    document.body.appendChild(divobj);
}
function closeYouTube(id) {
    var divbg = document.getElementById('bg');
    divbg.style.visibility = "hidden";
    var divobj = document.getElementById(id);
    var ytobj = document.getElementById("yt" + id);
    divobj.removeChild(ytobj); //remove YouTube Div
    document.body.removeChild(divobj); // remove Popup Div
}


/******************************End Of Trailers*********************************************/





/***login and logout*****************************************/

//$(document).ready(function () {
//    var logInOutCheck = getCookie("cookie");
//    if (logInOutCheck != null && logInOutCheck != "") {
//        $('#login').hide();
//        $('#logout').show();
//        $("#uid").text(logInOutCheck);
//        //  alert('check');
//    }
//    else {
//        $('#login').show();
//        $('#logout').hide();
//        $("#uid").text('Guest User');
//        // alert('check');
//    }

//});

//login check function at booking time
var advice = 0; //for forgot password

// login function
function LayoutloginFunction() {
    var Layoutlogininf = {};

    Layoutlogininf.mob = $('#LayoutMobileNo1').val();
    Layoutlogininf.mob = Layoutlogininf.mob.replace(/^\s+|\s+$/g, '');
    Layoutlogininf.pwd = $('#LayoutPwd1').val();
    Layoutlogininf.pwd = Layoutlogininf.pwd.replace(/^\s+|\s+$/g, '');



    if (Validation(Layoutlogininf.mob, Layoutlogininf.pwd)) {


        var ldata = { "li": Layoutlogininf };

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "LoginService.asmx/loginDetails",
            data: JSON.stringify(ldata),
            dataType: "json",
            async: true,
            success: function (data, textStatus) {
                if (textStatus == "success") {
                    if (data.hasOwnProperty('d')) {
                        msg = data.d;
                    } else {
                        msg = data;
                    }

                    if (msg == "yes") {
                        setCookie("cookie", Layoutlogininf.mob, 1);  
                        $('#login').hide();
                        $('#logout').show();
                        $("#uid").text(Layoutlogininf.mob);
                        $find('LoginLogout').hide();
                    }
                    else {
                        alert('!.. you entered USER NAME or PASSWORD is Worng, please try again.');
                        if (++advice > 1) {
                            LblinkFont();
                        }
                    }
                }
            }
        });
    }
}

//logout function
//$(document).ready(function () {
//    $(document).on("click", '#logout', function ($e) {
//        logoutText();    
//    });
//});
//to write user logout details in server
function logoutText() {
    var LogoutInfo = {};
    LogoutInfo.mob = "";
    var loginCheckMob = getCookie("cookie");
    if (loginCheckMob != null && loginCheckMob != "") {
        LogoutInfo.mob = loginCheckMob;
    }
    var lodata = { "lo": LogoutInfo };
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "LogoutService.asmx/logoutDetails",
        data: JSON.stringify(lodata),
        dataType: "json",
        async: true,
        success: function (data, textStatus) {

            if (textStatus == "success") {
                if (data.hasOwnProperty('d')) {
                    msg = data.d;
                } else {
                    msg = data;
                }
                if (msg == "yes") {
                    // its not restricting user to logout
                    //alert('logout');
                    clearCookie();
                    $('#login').show();
                    $('#logout').hide();
                    $("#uid").text('Guest User');
                    window.location.href = "home.aspx";
                }
                else {
                    alert('try again');
                }
            }
        }
    });
   }
   //clear cookie function
function clearCookie() {
    var useridC = getCookie("cookie");

    if (useridC != null && useridC != "") {
        setCookie("cookie", "", -1);
    }
}
//function to open MyAccout page
function myAccount() {
    var dcc = getCookie("cookie");
    if (dcc != null && dcc != "") {
        var a = document.getElementById('myAcc');
        a.href = "MyAccount.aspx";
    }
    else {
        $find('LoginLogout').show();
    }
}
// seat selection code
var data = new Object(); //object for seating data
data.count = 0;
data.seats = "";
function fun1(rk) {

    var s = data.seats;
    var seatindex = s.indexOf(rk);
    var cnt;
    if (seatindex !== -1) {
        document.getElementById(rk).src = "images/WhiteSeatNew.gif";
        st = s.replace(" " + rk, ''); //white space is separater between seats
        data.seats = st;
        cnt = data.count;
        data.count = --cnt;
    }
    else {
        cnt = data.count;
        if (cnt < 4) {
            data.seats += " " + rk; //white space is separater between seats
            data.count = ++cnt;
            document.getElementById(rk).src = "images/GreenSeatNew.gif";
        }
        else {
            alert('!..sorry you can only select maximum 4 seats');
        }
    }

}
// seat unselection function
function cancelfun() {
    $find('modalpopupbehaviourforseating').hide();
    data.seats = "";
    data.count = "";
}
//proceed button
function ProceedForBooking() {
    if (data.seats != null && data.seats != "") {
        var dc = getCookie("cookie");
        if (dc != null && dc != "") {
            var bookingURL = $('#bookingDetails').val();
            alert(bookingURL);
            bookingURL += "&seatCount=" + data.count + "&seats=" + data.seats;
            alert(bookingURL);
            window.location.href = bookingURL;
        }
        else {
            $find('btnDummyPopup_ModalPopupExtender').show();
        }
    }
    else {
        alert('!..Plz Select Seats');
    }
}

function ProceedForBookingAuth() {
    //alert("here");
    var drop = document.getElementById('nct');
    if (data.seats != null && data.seats != "" ) {
        setCookie("seatCount", data.count, 1);
        setCookie("seats", data.seats, 1);
        window.location.href = "Users/NetMemCtBooking.aspx";
    }
    else if (drop != null && drop.value != "0") {
        setCookie("seatCount",drop.value, 1);
        setCookie("seats", "nct", 1);
        //setCookie("seats", "", 1);
        window.location.href = "Users/NetMemCtBooking.aspx";
    }
    else {
        alert('!..Plz Select Seats');
    }
}


function proceedforNct() {
    var drop = document.getElementById('nct');
    if (drop.value != "0") {
        var dcforNct = getCookie("cookie");
        if (dcforNct != null && dcforNct != "") {
            var bookingURLforNct = $('#bookingDetails').val();
            bookingURLforNct += "&seatCount=" + drop.value + "&seats=" + data.seats;
            window.location.href = bookingURLforNct;
            //alert("ur selected" + drop.value);
        }
        else {
            $find('btnDummyPopup_ModalPopupExtender').show();
        }
    }
    else {
        alert("please select seats through drop down");
    }

}

//booking time login function
function BookingTimeloginFunction() {
    var logininf = {};
    var bookingInfoURL = $('#bookingDetails').val();
    bookingInfoURL = bookingInfoURL.replace(/^\s+|\s+$/g, ''); //The string.replace() method is used to replace all leading and trailing whitespace characters with an empty string
    logininf.mob = $('#txtMobileNo1').val();
    logininf.pwd = $('#txtPwd1').val();

    logininf.mob = logininf.mob.replace(/^\s+|\s+$/g, '');
    logininf.pwd = logininf.pwd.replace(/^\s+|\s+$/g, '');

    var Scount = data.count;
    var Sseats = data.seats;

    if (Validation(logininf.mob, logininf.pwd)) {

        var ldata = { "li": logininf };

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "LoginService.asmx/loginDetails",
            data: JSON.stringify(ldata),
            dataType: "json",
            async: true,
            success: function (data, textStatus) {

                if (textStatus == "success") {
                    if (data.hasOwnProperty('d')) {
                        msg = data.d;
                    } else {
                        msg = data;
                    }

                    if (msg == "yes") {

                        setCookie("cookie", logininf.mob, 1);

                        bookingInfoURL += logininf.mob + "&seatCount=" + Scount + "&seats=" + Sseats;

                        window.location.href = bookingInfoURL;

                    }
                    else {

                        alert('!.. you entered USER NAME or PASSWORD is Worng, please try again.');
                        if (++advice > 1) {
                            BblinkFont();
                        }
                        $("#txtPwd1").attr("autocomplete", "off");

                    }

                }
            }
        });
    }

}
// login form close button
function btnNo_Click() {
    $find('btnDummyPopup_ModalPopupExtender').hide();
}
//forgot password hint
function LblinkFont() {
    document.getElementById('Lblnk').style.color = "red"
    setTimeout("LsetblinkFont()", 1000)
}

function LsetblinkFont() {
    document.getElementById('Lblnk').style.color = ""
    setTimeout("LblinkFont()", 1000)
}

function BblinkFont() {
    document.getElementById('Bblnk').style.color = "red"
    setTimeout("BsetblinkFont()", 1000)
}

function BsetblinkFont() {
    document.getElementById('Bblnk').style.color = ""
    setTimeout("BblinkFont()", 1000)
}
// validation for login
function Validation(mobNum, logPwd) {

    if (mobNum == "") {
        alert("please Enter the Contact Number");
        return false;
    }
    if (isNaN(mobNum)) {
        alert("Enter the valid Mobile Number(Like : 9566137117)");
        return false;
    }

    if (mobNum.length != 10) {
        alert(" Your Mobile Number must be 10 Integers");
        return false;
    }

    if (logPwd == "" || isNaN(logPwd) || (logPwd.length < 4 || logPwd.length > 10)) {
        alert("please Enter correct password");
        return false;
    }
    return true;
}




 
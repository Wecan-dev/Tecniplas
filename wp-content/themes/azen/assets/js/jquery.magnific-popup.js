/*! Magnific Popup - v0.8.9 - 2013-06-26
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function (e) {
	var t, i, n, a, o, r, s, l = "Close", c = "BeforeClose", d = "AfterClose", p = "BeforeAppend", u = "MarkupParse",
		f = "Open", m = "Change", g = "mfp", v = "." + g, h = "mfp-ready", C = "mfp-removing", y = "mfp-prevent-close",
		w = function () {
		}, b = !!window.jQuery, I = e(window), x = function (e, i) {
			t.ev.on(g + e + v, i)
		}, k = function (t, i, n, a) {
			var o = document.createElement("div");
			return o.className = "mfp-" + t, n && (o.innerHTML = n), a ? i && i.appendChild(o) : (o = e(o), i && o.appendTo(i)), o
		}, S = function (i, n) {
			t.ev.triggerHandler(g + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
		}, P = function () {
			(t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
		}, E = function (i) {
			return i === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = i), t.currTemplate.closeBtn
		}, T = function () {
			e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
		}, M = function (i) {
			if (!e(i).hasClass(y)) {
				var n = t.st.closeOnContentClick, a = t.st.closeOnBgClick;
				if (n && a) return !0;
				if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
				if (i === t.content[0] || e.contains(t.content[0], i)) {
					if (n) return !0
				} else if (a) return !0;
				return !1
			}
		};
	w.prototype = {
		constructor           : w, init: function () {
			var i = navigator.appVersion;
			t.isIE7 = -1 !== i.indexOf("MSIE 7."), t.isIE8 = -1 !== i.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document.body), a = e(document), t.popupsCache = {}
		}, open               : function (i) {
			var o;
			if (i.isObj === !1) {
				t.items = i.items.toArray(), t.index = 0;
				var s, l = i.items;
				for (o = 0; l.length > o; o++) if (s = l[o], s.parsed && (s = s.el[0]), s === i.el[0]) {
					t.index = o;
					break
				}
			} else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
			if (t.isOpen) return t.updateItemHTML(), void 0;
			t.types = [], r = "", t.ev = i.mainEl || a, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.bgOverlay || (t.bgOverlay = k("bg").on("click" + v, function () {
				t.close()
			}), t.wrap = k("wrap").attr("tabindex", -1).on("click" + v, function (e) {
				M(e.target) && t.close()
			}), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
			var c = e.magnificPopup.modules;
			for (o = 0; c.length > o; o++) {
				var d = c[o];
				d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
			}
			S("BeforeOpen"), t.st.closeBtnInside ? (x(u, function (e, t, i, n) {
				i.close_replaceWith = E(n.type)
			}), r += " mfp-close-btn-in") : t.wrap.append(E()), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
				overflow : t.st.overflowY,
				overflowX: "hidden",
				overflowY: t.st.overflowY
			}) : t.wrap.css({
				top     : I.scrollTop(),
				position: "absolute"
			}), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
				height  : a.height(),
				position: "absolute"
			}), a.on("keyup" + v, function (e) {
				27 === e.keyCode && t.close()
			}), I.on("resize" + v, function () {
				t.updateSize()
			}), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
			var p = t.wH = I.height(), m = {};
			if (t.fixedContentPos && t._hasScrollBar(p)) {
				var g = t._getScrollbarSize();
				g && (m.paddingRight = g)
			}
			t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
			var C = t.st.mainClass;
			t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), S("BuildControls"), n.css(m), t.bgOverlay.add(t.wrap).prependTo(document.body), t._lastFocusedEl = document.activeElement, setTimeout(function () {
				t.content ? (t._addClassToMFP(h), P()) : t.bgOverlay.addClass(h), a.on("focusin" + v, function (i) {
					return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (P(), !1)
				})
			}, 16), t.isOpen = !0, t.updateSize(p), S(f)
		}, close              : function () {
			t.isOpen && (S(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE ? (t._addClassToMFP(C), setTimeout(function () {
				t._close()
			}, t.st.removalDelay)) : t._close())
		}, _close             : function () {
			S(l);
			var i = C + " " + h + " ";
			if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
				var o = {paddingRight: ""};
				t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", n.css(o)
			}
			a.off("keyup" + v + " focusin" + v), t.ev.off(v), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, S(d)
		}, updateSize         : function (e) {
			if (t.isIOS) {
				var i = document.documentElement.clientWidth / window.innerWidth, n = window.innerHeight * i;
				t.wrap.css("height", n), t.wH = n
			} else t.wH = e || I.height();
			t.fixedContentPos || t.wrap.css("height", t.wH), S("Resize")
		}, updateItemHTML     : function () {
			var i = t.items[t.index];
			t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
			var n = i.type;
			if (S("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
				var a = t.st[n] ? t.st[n].markup : !1;
				S("FirstMarkupParse", a), t.currTemplate[n] = a ? e(a) : !0
			}
			o && o !== i.type && t.container.removeClass("mfp-" + o + "-holder");
			var r = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
			t.appendContent(r, n), i.preloaded = !0, S(m, i), o = i.type, t.container.prepend(t.contentContainer), S("AfterChange")
		}, appendContent      : function (e, i) {
			t.content = e, e ? t.st.closeBtnInside && t.currTemplate[i] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", S(p), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
		}, parseEl            : function (i) {
			var n = t.items[i], a = n.type;
			if (n = n.tagName ? {el: e(n)} : {data: n, src: n.src}, n.el) {
				for (var o = t.types, r = 0; o.length > r; r++) if (n.el.hasClass("mfp-" + o[r])) {
					a = o[r];
					break
				}
				n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
			}
			return n.type = a || t.st.type || "inline", n.index = i, n.parsed = !0, t.items[i] = n, S("ElementParse", n), t.items[i]
		}, addGroup           : function (e, i) {
			var n = function (n) {
				n.mfpEl = this, t._openClick(n, e, i)
			};
			i || (i = {});
			var a = "click.magnificPopup";
			i.mainEl = e, i.items ? (i.isObj = !0, e.off(a).on(a, n)) : (i.isObj = !1, i.delegate ? e.off(a).on(a, i.delegate, n) : (i.items = e, e.off(a).on(a, n)))
		}, _openClick         : function (i, n, a) {
			var o = void 0 !== a.midClick ? a.midClick : e.magnificPopup.defaults.midClick;
			if (o || 2 !== i.which) {
				var r = void 0 !== a.disableOn ? a.disableOn : e.magnificPopup.defaults.disableOn;
				if (r) if (e.isFunction(r)) {
					if (!r.call(t)) return !0
				} else if (r > I.width()) return !0;
				i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), a.el = e(i.mfpEl), a.delegate && (a.items = n.find(a.delegate)), t.open(a)
			}
		}, updateStatus       : function (e, n) {
			if (t.preloader) {
				i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
				var a = {status: e, text: n};
				S("UpdateStatus", a), e = a.status, n = a.text, t.preloader.html(n), t.preloader.find("a").click(function (e) {
					e.stopImmediatePropagation()
				}), t.container.addClass("mfp-s-" + e), i = e
			}
		}, _addClassToMFP     : function (e) {
			t.bgOverlay.addClass(e), t.wrap.addClass(e)
		}, _removeClassFromMFP: function (e) {
			this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
		}, _hasScrollBar      : function (e) {
			return (t.isIE7 ? a.height() : document.body.scrollHeight) > (e || I.height())
		}, _parseMarkup       : function (t, i, n) {
			var a;
			n.data && (i = e.extend(n.data, i)), S(u, [t, i, n]), e.each(i, function (e, i) {
				if (void 0 === i || i === !1) return !0;
				if (a = e.split("_"), a.length > 1) {
					var n = t.find(v + "-" + a[0]);
					if (n.length > 0) {
						var o = a[1];
						"replaceWith" === o ? n[0] !== i[0] && n.replaceWith(i) : "img" === o ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(a[1], i)
					}
				} else t.find(v + "-" + e).html(i)
			})
		}, _getScrollbarSize  : function () {
			if (void 0 === t.scrollbarSize) {
				var e = document.createElement("div");
				e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
			}
			return t.scrollbarSize
		}
	}, e.magnificPopup = {
		instance      : null,
		proto         : w.prototype,
		modules       : [],
		open          : function (e, t) {
			return T(), e || (e = {}), e.isObj = !0, e.index = t || 0, this.instance.open(e)
		},
		close         : function () {
			return e.magnificPopup.instance.close()
		},
		registerModule: function (t, i) {
			i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
		},
		defaults      : {
			disableOn          : 0,
			key                : null,
			midClick           : !1,
			mainClass          : "",
			preloader          : !0,
			focus              : "",
			closeOnContentClick: !1,
			closeOnBgClick     : !0,
			closeBtnInside     : !0,
			alignTop           : !1,
			removalDelay       : 0,
			fixedContentPos    : "auto",
			fixedBgPos         : "auto",
			overflowY          : "auto",
			closeMarkup        : '<button title="%title%" type="button" class="mfp-close">&times;</button>',
			tClose             : "Close (Esc)",
			tLoading           : "Loading..."
		}
	}, e.fn.magnificPopup = function (i) {
		T();
		var n = e(this);
		if ("string" == typeof i) if ("open" === i) {
			var a, o = b ? n.data("magnificPopup") : n[0].magnificPopup, r = parseInt(arguments[1], 10) || 0;
			o.items ? a = o.items[r] : (a = n, o.delegate && (a = a.find(o.delegate)), a = a.eq(r)), t._openClick({mfpEl: a}, n, o)
		} else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1)); else b ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
		return n
	};
	var O, _, z, B = "inline", H = function () {
		z && (_.after(z.addClass(O)).detach(), z = null)
	};
	e.magnificPopup.registerModule(B, {
		options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"}, proto: {
			initInline  : function () {
				t.types.push(B), x(l + "." + B, function () {
					H()
				})
			}, getInline: function (i, n) {
				if (H(), i.src) {
					var a = t.st.inline, o = e(i.src);
					if (o.length) {
						var r = o[0].parentNode;
						r && r.tagName && (_ || (O = a.hiddenClass, _ = k(O), O = "mfp-" + O), z = o.after(_).detach().removeClass(O)), t.updateStatus("ready")
					} else t.updateStatus("error", a.tNotFound), o = e("<div>");
					return i.inlineElement = o, o
				}
				return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
			}
		}
	});
	var L, F = "ajax", A = function () {
		L && n.removeClass(L)
	};
	e.magnificPopup.registerModule(F, {
		options : {
			settings: null,
			cursor  : "mfp-ajax-cur",
			tError  : '<a href="%url%">The content</a> could not be loaded.'
		}, proto: {
			initAjax  : function () {
				t.types.push(F), L = t.st.ajax.cursor, x(l + "." + F, function () {
					A(), t.req && t.req.abort()
				})
			}, getAjax: function (i) {
				L && n.addClass(L), t.updateStatus("loading");
				var a = e.extend({
					url     : i.src, success: function (n, a, o) {
						var r = {data: n, xhr: o};
						S("ParseAjax", r), t.appendContent(e(r.data), F), i.finished = !0, A(), P(), setTimeout(function () {
							t.wrap.addClass(h)
						}, 16), t.updateStatus("ready"), S("AjaxContentAdded")
					}, error: function () {
						A(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
					}
				}, t.st.ajax.settings);
				return t.req = e.ajax(a), ""
			}
		}
	});
	var j, N = function (i) {
		if (i.data && void 0 !== i.data.title) return i.data.title;
		var n = t.st.image.titleSrc;
		if (n) {
			if (e.isFunction(n)) return n.call(t, i);
			if (i.el) return i.el.attr(n) || ""
		}
		return ""
	};
	e.magnificPopup.registerModule("image", {
		options : {
			markup     : '<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',
			cursor     : "mfp-zoom-out-cur",
			titleSrc   : "title",
			verticalFit: !0,
			tError     : '<a href="%url%">The image</a> could not be loaded.'
		}, proto: {
			initImage         : function () {
				var e = t.st.image, i = ".image";
				t.types.push("image"), x(f + i, function () {
					"image" === t.currItem.type && e.cursor && n.addClass(e.cursor)
				}), x(l + i, function () {
					e.cursor && n.removeClass(e.cursor), I.off("resize" + v)
				}), x("Resize" + i, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
			}, resizeImage    : function () {
				var e = t.currItem;
				if (e.img && t.st.image.verticalFit) {
					var i = 0;
					t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
				}
			}, _onImageHasSize: function (e) {
				e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, S("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
			}, findImageSize  : function (e) {
				var i = 0, n = e.img[0], a = function (o) {
					j && clearInterval(j), j = setInterval(function () {
						return n.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (i > 200 && clearInterval(j), i++, 3 === i ? a(10) : 40 === i ? a(50) : 100 === i && a(500), void 0)
					}, o)
				};
				a(1)
			}, getImage       : function (i, n) {
				var a = 0, o = function () {
					i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, S("ImageLoadComplete")) : (a++, 200 > a ? setTimeout(o, 100) : r()))
				}, r = function () {
					i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", s.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
				}, s = t.st.image, l = n.find(".mfp-img");
				if (l.length) {
					var c = new Image;
					c.className = "mfp-img", i.img = e(c).on("load.mfploader", o).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone())
				}
				return t._parseMarkup(n, {
					title          : N(i),
					img_replaceWith: i.img
				}, i), t.resizeImage(), i.hasSize ? (j && clearInterval(j), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
			}
		}
	});
	var W = "iframe", R = "//about:blank", Y = function (e) {
		if (t.currTemplate[W]) {
			var i = t.currTemplate[W].find("iframe");
			i.length && (e || (i[0].src = R), t.isIE8 && i.css("display", e ? "block" : "none"))
		}
	};
	e.magnificPopup.registerModule(W, {
		options : {
			markup   : '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns : {
				youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
				vimeo  : {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
				gmaps  : {index: "//maps.google.", src: "%id%&output=embed"}
			}
		}, proto: {
			initIframe  : function () {
				t.types.push(W), x("BeforeChange", function (e, t, i) {
					t !== i && (t === W ? Y() : i === W && Y(!0))
				}), x(l + "." + W, function () {
					Y()
				})
			}, getIframe: function (i, n) {
				var a = i.src, o = t.st.iframe;
				e.each(o.patterns, function () {
					return a.indexOf(this.index) > -1 ? (this.id && (a = "string" == typeof this.id ? a.substr(a.lastIndexOf(this.id) + this.id.length, a.length) : this.id.call(this, a)), a = this.src.replace("%id%", a), !1) : void 0
				});
				var r = {};
				return o.srcAction && (r[o.srcAction] = a), t._parseMarkup(n, r, i), t.updateStatus("ready"), n
			}
		}
	});
	var q = function (e) {
		var i = t.items.length;
		return e > i - 1 ? e - i : 0 > e ? i + e : e
	}, D = function (e, t, i) {
		return e.replace("%curr%", t + 1).replace("%total%", i)
	};
	e.magnificPopup.registerModule("gallery", {
		options : {
			enabled           : !1,
			arrowMarkup       : '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload           : [0, 2],
			navigateByImgClick: !0,
			arrows            : !0,
			tPrev             : "Previous (Left arrow key)",
			tNext             : "Next (Right arrow key)",
			tCounter          : "%curr% of %total%"
		}, proto: {
			initGallery           : function () {
				var i = t.st.gallery, n = ".mfp-gallery", o = Boolean(e.fn.mfpFastClick);
				return t.direction = !0, i && i.enabled ? (r += " mfp-gallery", x(f + n, function () {
					i.navigateByImgClick && t.wrap.on("click" + n, ".mfp-img", function () {
						return t.items.length > 1 ? (t.next(), !1) : void 0
					}), a.on("keydown" + n, function (e) {
						37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
					})
				}), x("UpdateStatus" + n, function (e, i) {
					i.text && (i.text = D(i.text, t.currItem.index, t.items.length))
				}), x(u + n, function (e, n, a, o) {
					var r = t.items.length;
					a.counter = r > 1 ? D(i.tCounter, o.index, r) : ""
				}), x("BuildControls" + n, function () {
					if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
						var n = i.arrowMarkup,
							a = t.arrowLeft = e(n.replace("%title%", i.tPrev).replace("%dir%", "left")).addClass(y),
							r = t.arrowRight = e(n.replace("%title%", i.tNext).replace("%dir%", "right")).addClass(y),
							s = o ? "mfpFastClick" : "click";
						a[s](function () {
							t.prev()
						}), r[s](function () {
							t.next()
						}), t.isIE7 && (k("b", a[0], !1, !0), k("a", a[0], !1, !0), k("b", r[0], !1, !0), k("a", r[0], !1, !0)), t.container.append(a.add(r))
					}
				}), x(m + n, function () {
					t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
						t.preloadNearbyImages(), t._preloadTimeout = null
					}, 16)
				}), x(l + n, function () {
					a.off(n), t.wrap.off("click" + n), t.arrowLeft && o && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
				}), void 0) : !1
			}, next               : function () {
				t.direction = !0, t.index = q(t.index + 1), t.updateItemHTML()
			}, prev               : function () {
				t.direction = !1, t.index = q(t.index - 1), t.updateItemHTML()
			}, goTo               : function (e) {
				t.direction = e >= t.index, t.index = e, t.updateItemHTML()
			}, preloadNearbyImages: function () {
				var e, i = t.st.gallery.preload, n = Math.min(i[0], t.items.length), a = Math.min(i[1], t.items.length);
				for (e = 1; (t.direction ? a : n) >= e; e++) t._preloadItem(t.index + e);
				for (e = 1; (t.direction ? n : a) >= e; e++) t._preloadItem(t.index - e)
			}, _preloadItem       : function (i) {
				if (i = q(i), !t.items[i].preloaded) {
					var n = t.items[i];
					n.parsed || (n = t.parseEl(i)), S("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
						n.hasSize = !0
					}).on("error.mfploader", function () {
						n.hasSize = !0, n.loadError = !0
					}).attr("src", n.src)), n.preloaded = !0
				}
			}
		}
	});
	var U = "retina";
	e.magnificPopup.registerModule(U, {
		options : {
			replaceSrc: function (e) {
				return e.src.replace(/\.\w+$/, function (e) {
					return "@2x" + e
				})
			}, ratio  : 1
		}, proto: {
			initRetina: function () {
				if (window.devicePixelRatio > 1) {
					var e = t.st.retina, i = e.ratio;
					i = isNaN(i) ? i() : i, i > 1 && (x("ImageHasSize." + U, function (e, t) {
						t.img.css({"max-width": t.img[0].naturalWidth / i, width: "100%"})
					}), x("ElementParse." + U, function (t, n) {
						n.src = e.replaceSrc(n, i)
					}))
				}
			}
		}
	}), function () {
		var t = 1e3, i = "ontouchstart" in window, n = function () {
			I.off("touchmove" + o + " touchend" + o)
		}, a = "mfpFastClick", o = "." + a;
		e.fn.mfpFastClick = function (a) {
			return e(this).each(function () {
				var r, s = e(this);
				if (i) {
					var l, c, d, p, u, f;
					s.on("touchstart" + o, function (e) {
						p = !1, f = 1, u = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = u.clientX, d = u.clientY, I.on("touchmove" + o, function (e) {
							u = e.originalEvent ? e.originalEvent.touches : e.touches, f = u.length, u = u[0], (Math.abs(u.clientX - c) > 10 || Math.abs(u.clientY - d) > 10) && (p = !0, n())
						}).on("touchend" + o, function (e) {
							n(), p || f > 1 || (r = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function () {
								r = !1
							}, t), a())
						})
					})
				}
				s.on("click" + o, function () {
					r || a()
				})
			})
		}, e.fn.destroyMfpFastClick = function () {
			e(this).off("touchstart" + o + " click" + o), i && I.off("touchmove" + o + " touchend" + o)
		}
	}()
})(window.jQuery || window.Zepto);
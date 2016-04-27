/*! Stamplay v2.0.5 | (c) 2016 Stamplay */
(function () {
	function a(a) {
		function b(b, c, d, e, f, g) {
			for (; f >= 0 && g > f; f += a) {
				var h = e ? e[f] : f;
				d = c(d, b[h], h, b)
			}
			return d
		}
		return function (c, d, e, f) {
			d = t(d, f, 4);
			var g = !A(c) && s.keys(c),
				h = (g || c)
				.length,
				i = a > 0 ? 0 : h - 1;
			return arguments.length < 3 && (e = c[g ? g[i] : i], i += a), b(c, d, e, g, i, h)
		}
	}

	function b(a) {
		return function (b, c, d) {
			c = u(c, d);
			for (var e = z(b), f = a > 0 ? 0 : e - 1; f >= 0 && e > f; f += a)
				if (c(b[f], f, b)) return f;
			return -1
		}
	}

	function c(a, b, c) {
		return function (d, e, f) {
			var g = 0,
				h = z(d);
			if ("number" == typeof f) a > 0 ? g = f >= 0 ? f : Math.max(f + h, g) : h = f >= 0 ? Math.min(f + 1, h) : f + h + 1;
			else if (c && f && h) return f = c(d, e), d[f] === e ? f : -1;
			if (e !== e) return f = b(k.call(d, g, h), s.isNaN), f >= 0 ? f + g : -1;
			for (f = a > 0 ? g : h - 1; f >= 0 && h > f; f += a)
				if (d[f] === e) return f;
			return -1
		}
	}

	function d(a, b) {
		var c = F.length,
			d = a.constructor,
			e = s.isFunction(d) && d.prototype || h,
			f = "constructor";
		for (s.has(a, f) && !s.contains(b, f) && b.push(f); c--;) f = F[c], f in a && a[f] !== e[f] && !s.contains(b, f) && b.push(f)
	}
	var e = this,
		f = e._,
		g = Array.prototype,
		h = Object.prototype,
		i = Function.prototype,
		j = g.push,
		k = g.slice,
		l = h.toString,
		m = h.hasOwnProperty,
		n = Array.isArray,
		o = Object.keys,
		p = i.bind,
		q = Object.create,
		r = function () {},
		s = function (a) {
			return a instanceof s ? a : this instanceof s ? void(this._wrapped = a) : new s(a)
		};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = s), exports._ = s) : e._ = s, s.VERSION = "1.8.3";
	var t = function (a, b, c) {
			if (void 0 === b) return a;
			switch (null == c ? 3 : c) {
			case 1:
				return function (c) {
					return a.call(b, c)
				};
			case 2:
				return function (c, d) {
					return a.call(b, c, d)
				};
			case 3:
				return function (c, d, e) {
					return a.call(b, c, d, e)
				};
			case 4:
				return function (c, d, e, f) {
					return a.call(b, c, d, e, f)
				}
			}
			return function () {
				return a.apply(b, arguments)
			}
		},
		u = function (a, b, c) {
			return null == a ? s.identity : s.isFunction(a) ? t(a, b, c) : s.isObject(a) ? s.matcher(a) : s.property(a)
		};
	s.iteratee = function (a, b) {
		return u(a, b, 1 / 0)
	};
	var v = function (a, b) {
			return function (c) {
				var d = arguments.length;
				if (2 > d || null == c) return c;
				for (var e = 1; d > e; e++)
					for (var f = arguments[e], g = a(f), h = g.length, i = 0; h > i; i++) {
						var j = g[i];
						b && void 0 !== c[j] || (c[j] = f[j])
					}
				return c
			}
		},
		w = function (a) {
			if (!s.isObject(a)) return {};
			if (q) return q(a);
			r.prototype = a;
			var b = new r;
			return r.prototype = null, b
		},
		x = function (a) {
			return function (b) {
				return null == b ? void 0 : b[a]
			}
		},
		y = Math.pow(2, 53) - 1,
		z = x("length"),
		A = function (a) {
			var b = z(a);
			return "number" == typeof b && b >= 0 && y >= b
		};
	s.each = s.forEach = function (a, b, c) {
		b = t(b, c);
		var d, e;
		if (A(a))
			for (d = 0, e = a.length; e > d; d++) b(a[d], d, a);
		else {
			var f = s.keys(a);
			for (d = 0, e = f.length; e > d; d++) b(a[f[d]], f[d], a)
		}
		return a
	}, s.map = s.collect = function (a, b, c) {
		b = u(b, c);
		for (var d = !A(a) && s.keys(a), e = (d || a)
				.length, f = Array(e), g = 0; e > g; g++) {
			var h = d ? d[g] : g;
			f[g] = b(a[h], h, a)
		}
		return f
	}, s.reduce = s.foldl = s.inject = a(1), s.reduceRight = s.foldr = a(-1), s.find = s.detect = function (a, b, c) {
		var d;
		return d = A(a) ? s.findIndex(a, b, c) : s.findKey(a, b, c), void 0 !== d && -1 !== d ? a[d] : void 0
	}, s.filter = s.select = function (a, b, c) {
		var d = [];
		return b = u(b, c), s.each(a, function (a, c, e) {
			b(a, c, e) && d.push(a)
		}), d
	}, s.reject = function (a, b, c) {
		return s.filter(a, s.negate(u(b)), c)
	}, s.every = s.all = function (a, b, c) {
		b = u(b, c);
		for (var d = !A(a) && s.keys(a), e = (d || a)
				.length, f = 0; e > f; f++) {
			var g = d ? d[f] : f;
			if (!b(a[g], g, a)) return !1
		}
		return !0
	}, s.some = s.any = function (a, b, c) {
		b = u(b, c);
		for (var d = !A(a) && s.keys(a), e = (d || a)
				.length, f = 0; e > f; f++) {
			var g = d ? d[f] : f;
			if (b(a[g], g, a)) return !0
		}
		return !1
	}, s.contains = s.includes = s.include = function (a, b, c, d) {
		return A(a) || (a = s.values(a)), ("number" != typeof c || d) && (c = 0), s.indexOf(a, b, c) >= 0
	}, s.invoke = function (a, b) {
		var c = k.call(arguments, 2),
			d = s.isFunction(b);
		return s.map(a, function (a) {
			var e = d ? b : a[b];
			return null == e ? e : e.apply(a, c)
		})
	}, s.pluck = function (a, b) {
		return s.map(a, s.property(b))
	}, s.where = function (a, b) {
		return s.filter(a, s.matcher(b))
	}, s.findWhere = function (a, b) {
		return s.find(a, s.matcher(b))
	}, s.max = function (a, b, c) {
		var d, e, f = -1 / 0,
			g = -1 / 0;
		if (null == b && null != a) {
			a = A(a) ? a : s.values(a);
			for (var h = 0, i = a.length; i > h; h++) d = a[h], d > f && (f = d)
		} else b = u(b, c), s.each(a, function (a, c, d) {
			e = b(a, c, d), (e > g || e === -1 / 0 && f === -1 / 0) && (f = a, g = e)
		});
		return f
	}, s.min = function (a, b, c) {
		var d, e, f = 1 / 0,
			g = 1 / 0;
		if (null == b && null != a) {
			a = A(a) ? a : s.values(a);
			for (var h = 0, i = a.length; i > h; h++) d = a[h], f > d && (f = d)
		} else b = u(b, c), s.each(a, function (a, c, d) {
			e = b(a, c, d), (g > e || 1 / 0 === e && 1 / 0 === f) && (f = a, g = e)
		});
		return f
	}, s.shuffle = function (a) {
		for (var b, c = A(a) ? a : s.values(a), d = c.length, e = Array(d), f = 0; d > f; f++) b = s.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
		return e
	}, s.sample = function (a, b, c) {
		return null == b || c ? (A(a) || (a = s.values(a)), a[s.random(a.length - 1)]) : s.shuffle(a)
			.slice(0, Math.max(0, b))
	}, s.sortBy = function (a, b, c) {
		return b = u(b, c), s.pluck(s.map(a, function (a, c, d) {
				return {
					value: a,
					index: c,
					criteria: b(a, c, d)
				}
			})
			.sort(function (a, b) {
				var c = a.criteria,
					d = b.criteria;
				if (c !== d) {
					if (c > d || void 0 === c) return 1;
					if (d > c || void 0 === d) return -1
				}
				return a.index - b.index
			}), "value")
	};
	var B = function (a) {
		return function (b, c, d) {
			var e = {};
			return c = u(c, d), s.each(b, function (d, f) {
				var g = c(d, f, b);
				a(e, d, g)
			}), e
		}
	};
	s.groupBy = B(function (a, b, c) {
		s.has(a, c) ? a[c].push(b) : a[c] = [b]
	}), s.indexBy = B(function (a, b, c) {
		a[c] = b
	}), s.countBy = B(function (a, b, c) {
		s.has(a, c) ? a[c]++ : a[c] = 1
	}), s.toArray = function (a) {
		return a ? s.isArray(a) ? k.call(a) : A(a) ? s.map(a, s.identity) : s.values(a) : []
	}, s.size = function (a) {
		return null == a ? 0 : A(a) ? a.length : s.keys(a)
			.length
	}, s.partition = function (a, b, c) {
		b = u(b, c);
		var d = [],
			e = [];
		return s.each(a, function (a, c, f) {
			(b(a, c, f) ? d : e)
			.push(a)
		}), [d, e]
	}, s.first = s.head = s.take = function (a, b, c) {
		return null == a ? void 0 : null == b || c ? a[0] : s.initial(a, a.length - b)
	}, s.initial = function (a, b, c) {
		return k.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
	}, s.last = function (a, b, c) {
		return null == a ? void 0 : null == b || c ? a[a.length - 1] : s.rest(a, Math.max(0, a.length - b))
	}, s.rest = s.tail = s.drop = function (a, b, c) {
		return k.call(a, null == b || c ? 1 : b)
	}, s.compact = function (a) {
		return s.filter(a, s.identity)
	};
	var C = function (a, b, c, d) {
		for (var e = [], f = 0, g = d || 0, h = z(a); h > g; g++) {
			var i = a[g];
			if (A(i) && (s.isArray(i) || s.isArguments(i))) {
				b || (i = C(i, b, c));
				var j = 0,
					k = i.length;
				for (e.length += k; k > j;) e[f++] = i[j++]
			} else c || (e[f++] = i)
		}
		return e
	};
	s.flatten = function (a, b) {
		return C(a, b, !1)
	}, s.without = function (a) {
		return s.difference(a, k.call(arguments, 1))
	}, s.uniq = s.unique = function (a, b, c, d) {
		s.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = u(c, d));
		for (var e = [], f = [], g = 0, h = z(a); h > g; g++) {
			var i = a[g],
				j = c ? c(i, g, a) : i;
			b ? (g && f === j || e.push(i), f = j) : c ? s.contains(f, j) || (f.push(j), e.push(i)) : s.contains(e, i) || e.push(i)
		}
		return e
	}, s.union = function () {
		return s.uniq(C(arguments, !0, !0))
	}, s.intersection = function (a) {
		for (var b = [], c = arguments.length, d = 0, e = z(a); e > d; d++) {
			var f = a[d];
			if (!s.contains(b, f)) {
				for (var g = 1; c > g && s.contains(arguments[g], f); g++);
				g === c && b.push(f)
			}
		}
		return b
	}, s.difference = function (a) {
		var b = C(arguments, !0, !0, 1);
		return s.filter(a, function (a) {
			return !s.contains(b, a)
		})
	}, s.zip = function () {
		return s.unzip(arguments)
	}, s.unzip = function (a) {
		for (var b = a && s.max(a, z)
				.length || 0, c = Array(b), d = 0; b > d; d++) c[d] = s.pluck(a, d);
		return c
	}, s.object = function (a, b) {
		for (var c = {}, d = 0, e = z(a); e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
		return c
	}, s.findIndex = b(1), s.findLastIndex = b(-1), s.sortedIndex = function (a, b, c, d) {
		c = u(c, d, 1);
		for (var e = c(b), f = 0, g = z(a); g > f;) {
			var h = Math.floor((f + g) / 2);
			c(a[h]) < e ? f = h + 1 : g = h
		}
		return f
	}, s.indexOf = c(1, s.findIndex, s.sortedIndex), s.lastIndexOf = c(-1, s.findLastIndex), s.range = function (a, b, c) {
		null == b && (b = a || 0, a = 0), c = c || 1;
		for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c) e[f] = a;
		return e
	};
	var D = function (a, b, c, d, e) {
		if (!(d instanceof b)) return a.apply(c, e);
		var f = w(a.prototype),
			g = a.apply(f, e);
		return s.isObject(g) ? g : f
	};
	s.bind = function (a, b) {
		if (p && a.bind === p) return p.apply(a, k.call(arguments, 1));
		if (!s.isFunction(a)) throw new TypeError("Bind must be called on a function");
		var c = k.call(arguments, 2),
			d = function () {
				return D(a, d, b, this, c.concat(k.call(arguments)))
			};
		return d
	}, s.partial = function (a) {
		var b = k.call(arguments, 1),
			c = function () {
				for (var d = 0, e = b.length, f = Array(e), g = 0; e > g; g++) f[g] = b[g] === s ? arguments[d++] : b[g];
				for (; d < arguments.length;) f.push(arguments[d++]);
				return D(a, c, this, this, f)
			};
		return c
	}, s.bindAll = function (a) {
		var b, c, d = arguments.length;
		if (1 >= d) throw new Error("bindAll must be passed function names");
		for (b = 1; d > b; b++) c = arguments[b], a[c] = s.bind(a[c], a);
		return a
	}, s.memoize = function (a, b) {
		var c = function (d) {
			var e = c.cache,
				f = "" + (b ? b.apply(this, arguments) : d);
			return s.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
		};
		return c.cache = {}, c
	}, s.delay = function (a, b) {
		var c = k.call(arguments, 2);
		return setTimeout(function () {
			return a.apply(null, c)
		}, b)
	}, s.defer = s.partial(s.delay, s, 1), s.throttle = function (a, b, c) {
		var d, e, f, g = null,
			h = 0;
		c || (c = {});
		var i = function () {
			h = c.leading === !1 ? 0 : s.now(), g = null, f = a.apply(d, e), g || (d = e = null)
		};
		return function () {
			var j = s.now();
			h || c.leading !== !1 || (h = j);
			var k = b - (j - h);
			return d = this, e = arguments, 0 >= k || k > b ? (g && (clearTimeout(g), g = null), h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
		}
	}, s.debounce = function (a, b, c) {
		var d, e, f, g, h, i = function () {
			var j = s.now() - g;
			b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
		};
		return function () {
			f = this, e = arguments, g = s.now();
			var j = c && !d;
			return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
		}
	}, s.wrap = function (a, b) {
		return s.partial(b, a)
	}, s.negate = function (a) {
		return function () {
			return !a.apply(this, arguments)
		}
	}, s.compose = function () {
		var a = arguments,
			b = a.length - 1;
		return function () {
			for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d);
			return d
		}
	}, s.after = function (a, b) {
		return function () {
			return --a < 1 ? b.apply(this, arguments) : void 0
		}
	}, s.before = function (a, b) {
		var c;
		return function () {
			return --a > 0 && (c = b.apply(this, arguments)), 1 >= a && (b = null), c
		}
	}, s.once = s.partial(s.before, 2);
	var E = !{
			toString: null
		}.propertyIsEnumerable("toString"),
		F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
	s.keys = function (a) {
		if (!s.isObject(a)) return [];
		if (o) return o(a);
		var b = [];
		for (var c in a) s.has(a, c) && b.push(c);
		return E && d(a, b), b
	}, s.allKeys = function (a) {
		if (!s.isObject(a)) return [];
		var b = [];
		for (var c in a) b.push(c);
		return E && d(a, b), b
	}, s.values = function (a) {
		for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
		return d
	}, s.mapObject = function (a, b, c) {
		b = u(b, c);
		for (var d, e = s.keys(a), f = e.length, g = {}, h = 0; f > h; h++) d = e[h], g[d] = b(a[d], d, a);
		return g
	}, s.pairs = function (a) {
		for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]];
		return d
	}, s.invert = function (a) {
		for (var b = {}, c = s.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
		return b
	}, s.functions = s.methods = function (a) {
		var b = [];
		for (var c in a) s.isFunction(a[c]) && b.push(c);
		return b.sort()
	}, s.extend = v(s.allKeys), s.extendOwn = s.assign = v(s.keys), s.findKey = function (a, b, c) {
		b = u(b, c);
		for (var d, e = s.keys(a), f = 0, g = e.length; g > f; f++)
			if (d = e[f], b(a[d], d, a)) return d
	}, s.pick = function (a, b, c) {
		var d, e, f = {},
			g = a;
		if (null == g) return f;
		s.isFunction(b) ? (e = s.allKeys(g), d = t(b, c)) : (e = C(arguments, !1, !1, 1), d = function (a, b, c) {
			return b in c
		}, g = Object(g));
		for (var h = 0, i = e.length; i > h; h++) {
			var j = e[h],
				k = g[j];
			d(k, j, g) && (f[j] = k)
		}
		return f
	}, s.omit = function (a, b, c) {
		if (s.isFunction(b)) b = s.negate(b);
		else {
			var d = s.map(C(arguments, !1, !1, 1), String);
			b = function (a, b) {
				return !s.contains(d, b)
			}
		}
		return s.pick(a, b, c)
	}, s.defaults = v(s.allKeys, !0), s.create = function (a, b) {
		var c = w(a);
		return b && s.extendOwn(c, b), c
	}, s.clone = function (a) {
		return s.isObject(a) ? s.isArray(a) ? a.slice() : s.extend({}, a) : a
	}, s.tap = function (a, b) {
		return b(a), a
	}, s.isMatch = function (a, b) {
		var c = s.keys(b),
			d = c.length;
		if (null == a) return !d;
		for (var e = Object(a), f = 0; d > f; f++) {
			var g = c[f];
			if (b[g] !== e[g] || !(g in e)) return !1
		}
		return !0
	};
	var G = function (a, b, c, d) {
		if (a === b) return 0 !== a || 1 / a === 1 / b;
		if (null == a || null == b) return a === b;
		a instanceof s && (a = a._wrapped), b instanceof s && (b = b._wrapped);
		var e = l.call(a);
		if (e !== l.call(b)) return !1;
		switch (e) {
		case "[object RegExp]":
		case "[object String]":
			return "" + a == "" + b;
		case "[object Number]":
			return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
		case "[object Date]":
		case "[object Boolean]":
			return +a === +b
		}
		var f = "[object Array]" === e;
		if (!f) {
			if ("object" != typeof a || "object" != typeof b) return !1;
			var g = a.constructor,
				h = b.constructor;
			if (g !== h && !(s.isFunction(g) && g instanceof g && s.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return !1
		}
		c = c || [], d = d || [];
		for (var i = c.length; i--;)
			if (c[i] === a) return d[i] === b;
		if (c.push(a), d.push(b), f) {
			if (i = a.length, i !== b.length) return !1;
			for (; i--;)
				if (!G(a[i], b[i], c, d)) return !1
		} else {
			var j, k = s.keys(a);
			if (i = k.length, s.keys(b)
				.length !== i) return !1;
			for (; i--;)
				if (j = k[i], !s.has(b, j) || !G(a[j], b[j], c, d)) return !1
		}
		return c.pop(), d.pop(), !0
	};
	s.isEqual = function (a, b) {
		return G(a, b)
	}, s.isEmpty = function (a) {
		return null == a ? !0 : A(a) && (s.isArray(a) || s.isString(a) || s.isArguments(a)) ? 0 === a.length : 0 === s.keys(a)
			.length
	}, s.isElement = function (a) {
		return !(!a || 1 !== a.nodeType)
	}, s.isArray = n || function (a) {
		return "[object Array]" === l.call(a)
	}, s.isObject = function (a) {
		var b = typeof a;
		return "function" === b || "object" === b && !!a
	}, s.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (a) {
		s["is" + a] = function (b) {
			return l.call(b) === "[object " + a + "]"
		}
	}), s.isArguments(arguments) || (s.isArguments = function (a) {
		return s.has(a, "callee")
	}), "function" != typeof /./ && "object" != typeof Int8Array && (s.isFunction = function (a) {
		return "function" == typeof a || !1
	}), s.isFinite = function (a) {
		return isFinite(a) && !isNaN(parseFloat(a))
	}, s.isNaN = function (a) {
		return s.isNumber(a) && a !== +a
	}, s.isBoolean = function (a) {
		return a === !0 || a === !1 || "[object Boolean]" === l.call(a)
	}, s.isNull = function (a) {
		return null === a
	}, s.isUndefined = function (a) {
		return void 0 === a
	}, s.has = function (a, b) {
		return null != a && m.call(a, b)
	}, s.noConflict = function () {
		return e._ = f, this
	}, s.identity = function (a) {
		return a
	}, s.constant = function (a) {
		return function () {
			return a
		}
	}, s.noop = function () {}, s.property = x, s.propertyOf = function (a) {
		return null == a ? function () {} : function (b) {
			return a[b]
		}
	}, s.matcher = s.matches = function (a) {
		return a = s.extendOwn({}, a),
			function (b) {
				return s.isMatch(b, a)
			}
	}, s.times = function (a, b, c) {
		var d = Array(Math.max(0, a));
		b = t(b, c, 1);
		for (var e = 0; a > e; e++) d[e] = b(e);
		return d
	}, s.random = function (a, b) {
		return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
	}, s.now = Date.now || function () {
		return (new Date)
			.getTime()
	};
	var H = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;",
			"`": "&#x60;"
		},
		I = s.invert(H),
		J = function (a) {
			var b = function (b) {
					return a[b]
				},
				c = "(?:" + s.keys(a)
				.join("|") + ")",
				d = RegExp(c),
				e = RegExp(c, "g");
			return function (a) {
				return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
			}
		};
	s.escape = J(H), s.unescape = J(I), s.result = function (a, b, c) {
		var d = null == a ? void 0 : a[b];
		return void 0 === d && (d = c), s.isFunction(d) ? d.call(a) : d
	};
	var K = 0;
	s.uniqueId = function (a) {
		var b = ++K + "";
		return a ? a + b : b
	}, s.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var L = /(.)^/,
		M = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n"
			/*
				*hack
				,
			" ": "u2028",
			" ": "u2029"
			*/
		},
		N = /\\|'|\r|\n|\u2028|\u2029/g,
		O = function (a) {
			return "\\" + M[a]
		};
	s.template = function (a, b, c) {
		!b && c && (b = c), b = s.defaults({}, b, s.templateSettings);
		var d = RegExp([(b.escape || L)
				.source, (b.interpolate || L)
				.source, (b.evaluate || L)
				.source
			].join("|") + "|$", "g"),
			e = 0,
			f = "__p+='";
		a.replace(d, function (b, c, d, g, h) {
			return f += a.slice(e, h)
				.replace(N, O), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
		}), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
		try {
			var g = new Function(b.variable || "obj", "_", f)
		} catch (h) {
			throw h.source = f, h
		}
		var i = function (a) {
				return g.call(this, a, s)
			},
			j = b.variable || "obj";
		return i.source = "function(" + j + "){\n" + f + "}", i
	}, s.chain = function (a) {
		var b = s(a);
		return b._chain = !0, b
	};
	var P = function (a, b) {
		return a._chain ? s(b)
			.chain() : b
	};
	s.mixin = function (a) {
		s.each(s.functions(a), function (b) {
			var c = s[b] = a[b];
			s.prototype[b] = function () {
				var a = [this._wrapped];
				return j.apply(a, arguments), P(this, c.apply(s, a))
			}
		})
	}, s.mixin(s), s.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
		var b = g[a];
		s.prototype[a] = function () {
			var c = this._wrapped;
			return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], P(this, c)
		}
	}), s.each(["concat", "join", "slice"], function (a) {
		var b = g[a];
		s.prototype[a] = function () {
			return P(this, b.apply(this._wrapped, arguments))
		}
	}), s.prototype.value = function () {
		return this._wrapped
	}, s.prototype.valueOf = s.prototype.toJSON = s.prototype.value, s.prototype.toString = function () {
		return "" + this._wrapped
	}, "function" == typeof define && define.amd && define("underscore", [], function () {
		return s
	})
})
.call(this),
	function (a) {
		"use strict";
		if ("function" == typeof bootstrap) bootstrap("promise", a);
		else if ("object" == typeof exports && "object" == typeof module) module.exports = a();
		else if ("function" == typeof define && define.amd) define(a);
		else if ("undefined" != typeof ses) {
			if (!ses.ok()) return;
			ses.makeQ = a
		} else {
			if ("undefined" == typeof window && "undefined" == typeof self) throw new Error("This environment was not anticipated by Q. Please file a bug.");
			var b = "undefined" != typeof window ? window : self,
				c = b.Q;
			b.Q = a(), b.Q.noConflict = function () {
				return b.Q = c, this
			}
		}
	}(function () {
		"use strict";

		function a(a) {
			return function () {
				return W.apply(a, arguments)
			}
		}

		function b(a) {
			return a === Object(a)
		}

		function c(a) {
			return "[object StopIteration]" === ca(a) || a instanceof S
		}

		function d(a, b) {
			if (P && b.stack && "object" == typeof a && null !== a && a.stack && -1 === a.stack.indexOf(da)) {
				for (var c = [], d = b; d; d = d.source) d.stack && c.unshift(d.stack);
				c.unshift(a.stack);
				var f = c.join("\n" + da + "\n");
				a.stack = e(f)
			}
		}

		function e(a) {
			for (var b = a.split("\n"), c = [], d = 0; d < b.length; ++d) {
				var e = b[d];
				h(e) || f(e) || !e || c.push(e)
			}
			return c.join("\n")
		}

		function f(a) {
			return -1 !== a.indexOf("(module.js:") || -1 !== a.indexOf("(node.js:")
		}

		function g(a) {
			var b = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);
			if (b) return [b[1], Number(b[2])];
			var c = /at ([^ ]+):(\d+):(?:\d+)$/.exec(a);
			if (c) return [c[1], Number(c[2])];
			var d = /.*@(.+):(\d+)$/.exec(a);
			return d ? [d[1], Number(d[2])] : void 0
		}

		function h(a) {
			var b = g(a);
			if (!b) return !1;
			var c = b[0],
				d = b[1];
			return c === R && d >= T && ia >= d
		}

		function i() {
			if (P) try {
				throw new Error
			} catch (a) {
				var b = a.stack.split("\n"),
					c = b[0].indexOf("@") > 0 ? b[1] : b[2],
					d = g(c);
				if (!d) return;
				return R = d[0], d[1]
			}
		}

		function j(a, b, c) {
			return function () {
				return "undefined" != typeof console && "function" == typeof console.warn && console.warn(b + " is deprecated, use " + c + " instead.", new Error("")
					.stack), a.apply(a, arguments)
			}
		}

		function k(a) {
			return a instanceof o ? a : s(a) ? B(a) : A(a)
		}

		function l() {
			function a(a) {
				b = a, f.source = a, Y(c, function (b, c) {
					k.nextTick(function () {
						a.promiseDispatch.apply(a, c)
					})
				}, void 0), c = void 0, d = void 0
			}
			var b, c = [],
				d = [],
				e = _(l.prototype),
				f = _(o.prototype);
			if (f.promiseDispatch = function (a, e, f) {
					var g = X(arguments);
					c ? (c.push(g), "when" === e && f[1] && d.push(f[1])) : k.nextTick(function () {
						b.promiseDispatch.apply(b, g)
					})
				}, f.valueOf = function () {
					if (c) return f;
					var a = q(b);
					return r(a) && (b = a), a
				}, f.inspect = function () {
					return b ? b.inspect() : {
						state: "pending"
					}
				}, k.longStackSupport && P) try {
				throw new Error
			} catch (g) {
				f.stack = g.stack.substring(g.stack.indexOf("\n") + 1)
			}
			return e.promise = f, e.resolve = function (c) {
				b || a(k(c))
			}, e.fulfill = function (c) {
				b || a(A(c))
			}, e.reject = function (c) {
				b || a(z(c))
			}, e.notify = function (a) {
				b || Y(d, function (b, c) {
					k.nextTick(function () {
						c(a)
					})
				}, void 0)
			}, e
		}

		function m(a) {
			if ("function" != typeof a) throw new TypeError("resolver must be a function.");
			var b = l();
			try {
				a(b.resolve, b.reject, b.notify)
			} catch (c) {
				b.reject(c)
			}
			return b.promise
		}

		function n(a) {
			return m(function (b, c) {
				for (var d = 0, e = a.length; e > d; d++) k(a[d])
					.then(b, c)
			})
		}

		function o(a, b, c) {
			void 0 === b && (b = function (a) {
				return z(new Error("Promise does not support operation: " + a))
			}), void 0 === c && (c = function () {
				return {
					state: "unknown"
				}
			});
			var d = _(o.prototype);
			if (d.promiseDispatch = function (c, e, f) {
					var g;
					try {
						g = a[e] ? a[e].apply(d, f) : b.call(d, e, f)
					} catch (h) {
						g = z(h)
					}
					c && c(g)
				}, d.inspect = c, c) {
				var e = c();
				"rejected" === e.state && (d.exception = e.reason), d.valueOf = function () {
					var a = c();
					return "pending" === a.state || "rejected" === a.state ? d : a.value
				}
			}
			return d
		}

		function p(a, b, c, d) {
			return k(a)
				.then(b, c, d)
		}

		function q(a) {
			if (r(a)) {
				var b = a.inspect();
				if ("fulfilled" === b.state) return b.value
			}
			return a
		}

		function r(a) {
			return a instanceof o
		}

		function s(a) {
			return b(a) && "function" == typeof a.then
		}

		function t(a) {
			return r(a) && "pending" === a.inspect()
				.state
		}

		function u(a) {
			return !r(a) || "fulfilled" === a.inspect()
				.state
		}

		function v(a) {
			return r(a) && "rejected" === a.inspect()
				.state
		}

		function w() {
			ea.length = 0, fa.length = 0, ha || (ha = !0)
		}

		function x(a, b) {
			ha && ("object" == typeof process && "function" == typeof process.emit && k.nextTick.runAfter(function () {
				-1 !== Z(fa, a) && (process.emit("unhandledRejection", b, a), ga.push(a))
			}), fa.push(a), b && "undefined" != typeof b.stack ? ea.push(b.stack) : ea.push("(no stack) " + b))
		}

		function y(a) {
			if (ha) {
				var b = Z(fa, a); - 1 !== b && ("object" == typeof process && "function" == typeof process.emit && k.nextTick.runAfter(function () {
					var c = Z(ga, a); - 1 !== c && (process.emit("rejectionHandled", ea[b], a), ga.splice(c, 1))
				}), fa.splice(b, 1), ea.splice(b, 1))
			}
		}

		function z(a) {
			var b = o({
				when: function (b) {
					return b && y(this), b ? b(a) : this
				}
			}, function () {
				return this
			}, function () {
				return {
					state: "rejected",
					reason: a
				}
			});
			return x(b, a), b
		}

		function A(a) {
			return o({
				when: function () {
					return a
				},
				get: function (b) {
					return a[b]
				},
				set: function (b, c) {
					a[b] = c
				},
				"delete": function (b) {
					delete a[b]
				},
				post: function (b, c) {
					return null === b || void 0 === b ? a.apply(void 0, c) : a[b].apply(a, c)
				},
				apply: function (b, c) {
					return a.apply(b, c)
				},
				keys: function () {
					return ba(a)
				}
			}, void 0, function () {
				return {
					state: "fulfilled",
					value: a
				}
			})
		}

		function B(a) {
			var b = l();
			return k.nextTick(function () {
				try {
					a.then(b.resolve, b.reject, b.notify)
				} catch (c) {
					b.reject(c)
				}
			}), b.promise
		}

		function C(a) {
			return o({
				isDef: function () {}
			}, function (b, c) {
				return I(a, b, c)
			}, function () {
				return k(a)
					.inspect()
			})
		}

		function D(a, b, c) {
			return k(a)
				.spread(b, c)
		}

		function E(a) {
			return function () {
				function b(a, b) {
					var g;
					if ("undefined" == typeof StopIteration) {
						try {
							g = d[a](b)
						} catch (h) {
							return z(h)
						}
						return g.done ? k(g.value) : p(g.value, e, f)
					}
					try {
						g = d[a](b)
					} catch (h) {
						return c(h) ? k(h.value) : z(h)
					}
					return p(g, e, f)
				}
				var d = a.apply(this, arguments),
					e = b.bind(b, "next"),
					f = b.bind(b, "throw");
				return e()
			}
		}

		function F(a) {
			k.done(k.async(a)())
		}

		function G(a) {
			throw new S(a)
		}

		function H(a) {
			return function () {
				return D([this, J(arguments)], function (b, c) {
					return a.apply(b, c)
				})
			}
		}

		function I(a, b, c) {
			return k(a)
				.dispatch(b, c)
		}

		function J(a) {
			return p(a, function (a) {
				var b = 0,
					c = l();
				return Y(a, function (d, e, f) {
					var g;
					r(e) && "fulfilled" === (g = e.inspect())
						.state ? a[f] = g.value : (++b, p(e, function (d) {
							a[f] = d, 0 === --b && c.resolve(a)
						}, c.reject, function (a) {
							c.notify({
								index: f,
								value: a
							})
						}))
				}, void 0), 0 === b && c.resolve(a), c.promise
			})
		}

		function K(a) {
			if (0 === a.length) return k.resolve();
			var b = k.defer(),
				c = 0;
			return Y(a, function (d, e, f) {
				function g(a) {
					b.resolve(a)
				}

				function h() {
					c--, 0 === c && b.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."))
				}

				function i(a) {
					b.notify({
						index: f,
						value: a
					})
				}
				var j = a[f];
				c++, p(j, g, h, i)
			}, void 0), b.promise
		}

		function L(a) {
			return p(a, function (a) {
				return a = $(a, k), p(J($(a, function (a) {
					return p(a, U, U)
				})), function () {
					return a
				})
			})
		}

		function M(a) {
			return k(a)
				.allSettled()
		}

		function N(a, b) {
			return k(a)
				.then(void 0, void 0, b)
		}

		function O(a, b) {
			return k(a)
				.nodeify(b)
		}
		var P = !1;
		try {
			throw new Error
		} catch (Q) {
			P = !!Q.stack
		}
		var R, S, T = i(),
			U = function () {},
			V = function () {
				function a() {
					for (var a, d; c.next;) c = c.next, a = c.task, c.task = void 0, d = c.domain, d && (c.domain = void 0, d.enter()), b(a, d);
					for (; h.length;) a = h.pop(), b(a);
					e = !1
				}

				function b(b, c) {
					try {
						b()
					} catch (d) {
						if (g) throw c && c.exit(), setTimeout(a, 0), c && c.enter(), d;
						setTimeout(function () {
							throw d
						}, 0)
					}
					c && c.exit()
				}
				var c = {
						task: void 0,
						next: null
					},
					d = c,
					e = !1,
					f = void 0,
					g = !1,
					h = [];
				if (V = function (a) {
						d = d.next = {
							task: a,
							domain: g && process.domain,
							next: null
						}, e || (e = !0, f())
					}, "object" == typeof process && "[object process]" === process.toString() && process.nextTick) g = !0, f = function () {
					process.nextTick(a)
				};
				else if ("function" == typeof setImmediate) f = "undefined" != typeof window ? setImmediate.bind(window, a) : function () {
					setImmediate(a)
				};
				else if ("undefined" != typeof MessageChannel) {
					var i = new MessageChannel;
					i.port1.onmessage = function () {
						f = j, i.port1.onmessage = a, a()
					};
					var j = function () {
						i.port2.postMessage(0)
					};
					f = function () {
						setTimeout(a, 0), j()
					}
				} else f = function () {
					setTimeout(a, 0)
				};
				return V.runAfter = function (a) {
					h.push(a), e || (e = !0, f())
				}, V
			}(),
			W = Function.call,
			X = a(Array.prototype.slice),
			Y = a(Array.prototype.reduce || function (a, b) {
				var c = 0,
					d = this.length;
				if (1 === arguments.length)
					for (;;) {
						if (c in this) {
							b = this[c++];
							break
						}
						if (++c >= d) throw new TypeError
					}
				for (; d > c; c++) c in this && (b = a(b, this[c], c));
				return b
			}),
			Z = a(Array.prototype.indexOf || function (a) {
				for (var b = 0; b < this.length; b++)
					if (this[b] === a) return b;
				return -1
			}),
			$ = a(Array.prototype.map || function (a, b) {
				var c = this,
					d = [];
				return Y(c, function (e, f, g) {
					d.push(a.call(b, f, g, c))
				}, void 0), d
			}),
			_ = Object.create || function (a) {
				function b() {}
				return b.prototype = a, new b
			},
			aa = a(Object.prototype.hasOwnProperty),
			ba = Object.keys || function (a) {
				var b = [];
				for (var c in a) aa(a, c) && b.push(c);
				return b
			},
			ca = a(Object.prototype.toString);
		S = "undefined" != typeof ReturnValue ? ReturnValue : function (a) {
			this.value = a
		};
		var da = "From previous event:";
		k.resolve = k, k.nextTick = V, k.longStackSupport = !1, "object" == typeof process && process && process.env && process.env.Q_DEBUG && (k.longStackSupport = !0), k.defer = l, l.prototype.makeNodeResolver = function () {
			var a = this;
			return function (b, c) {
				b ? a.reject(b) : arguments.length > 2 ? a.resolve(X(arguments, 1)) : a.resolve(c)
			}
		}, k.Promise = m, k.promise = m, m.race = n, m.all = J, m.reject = z, m.resolve = k, k.passByCopy = function (a) {
			return a
		}, o.prototype.passByCopy = function () {
			return this
		}, k.join = function (a, b) {
			return k(a)
				.join(b)
		}, o.prototype.join = function (a) {
			return k([this, a])
				.spread(function (a, b) {
					if (a === b) return a;
					throw new Error("Can't join: not the same: " + a + " " + b)
				})
		}, k.race = n, o.prototype.race = function () {
			return this.then(k.race)
		}, k.makePromise = o, o.prototype.toString = function () {
			return "[object Promise]"
		}, o.prototype.then = function (a, b, c) {
			function e(b) {
				try {
					return "function" == typeof a ? a(b) : b
				} catch (c) {
					return z(c)
				}
			}

			function f(a) {
				if ("function" == typeof b) {
					d(a, h);
					try {
						return b(a)
					} catch (c) {
						return z(c)
					}
				}
				return z(a)
			}

			function g(a) {
				return "function" == typeof c ? c(a) : a
			}
			var h = this,
				i = l(),
				j = !1;
			return k.nextTick(function () {
				h.promiseDispatch(function (a) {
					j || (j = !0, i.resolve(e(a)))
				}, "when", [function (a) {
					j || (j = !0, i.resolve(f(a)))
				}])
			}), h.promiseDispatch(void 0, "when", [void 0, function (a) {
				var b, c = !1;
				try {
					b = g(a)
				} catch (d) {
					if (c = !0, !k.onerror) throw d;
					k.onerror(d)
				}
				c || i.notify(b)
			}]), i.promise
		}, k.tap = function (a, b) {
			return k(a)
				.tap(b)
		}, o.prototype.tap = function (a) {
			return a = k(a), this.then(function (b) {
				return a.fcall(b)
					.thenResolve(b)
			})
		}, k.when = p, o.prototype.thenResolve = function (a) {
			return this.then(function () {
				return a
			})
		}, k.thenResolve = function (a, b) {
			return k(a)
				.thenResolve(b)
		}, o.prototype.thenReject = function (a) {
			return this.then(function () {
				throw a
			})
		}, k.thenReject = function (a, b) {
			return k(a)
				.thenReject(b)
		}, k.nearer = q, k.isPromise = r, k.isPromiseAlike = s, k.isPending = t, o.prototype.isPending = function () {
			return "pending" === this.inspect()
				.state
		}, k.isFulfilled = u, o.prototype.isFulfilled = function () {
			return "fulfilled" === this.inspect()
				.state
		}, k.isRejected = v, o.prototype.isRejected = function () {
			return "rejected" === this.inspect()
				.state
		};
		var ea = [],
			fa = [],
			ga = [],
			ha = !0;
		k.resetUnhandledRejections = w, k.getUnhandledReasons = function () {
			return ea.slice()
		}, k.stopUnhandledRejectionTracking = function () {
			w(), ha = !1
		}, w(), k.reject = z, k.fulfill = A, k.master = C, k.spread = D, o.prototype.spread = function (a, b) {
			return this.all()
				.then(function (b) {
					return a.apply(void 0, b)
				}, b)
		}, k.async = E, k.spawn = F, k["return"] = G, k.promised = H, k.dispatch = I, o.prototype.dispatch = function (a, b) {
			var c = this,
				d = l();
			return k.nextTick(function () {
				c.promiseDispatch(d.resolve, a, b)
			}), d.promise
		}, k.get = function (a, b) {
			return k(a)
				.dispatch("get", [b])
		}, o.prototype.get = function (a) {
			return this.dispatch("get", [a])
		}, k.set = function (a, b, c) {
			return k(a)
				.dispatch("set", [b, c])
		}, o.prototype.set = function (a, b) {
			return this.dispatch("set", [a, b])
		}, k.del = k["delete"] = function (a, b) {
			return k(a)
				.dispatch("delete", [b])
		}, o.prototype.del = o.prototype["delete"] = function (a) {
			return this.dispatch("delete", [a])
		}, k.mapply = k.post = function (a, b, c) {
			return k(a)
				.dispatch("post", [b, c])
		}, o.prototype.mapply = o.prototype.post = function (a, b) {
			return this.dispatch("post", [a, b])
		}, k.send = k.mcall = k.invoke = function (a, b) {
			return k(a)
				.dispatch("post", [b, X(arguments, 2)])
		}, o.prototype.send = o.prototype.mcall = o.prototype.invoke = function (a) {
			return this.dispatch("post", [a, X(arguments, 1)])
		}, k.fapply = function (a, b) {
			return k(a)
				.dispatch("apply", [void 0, b])
		}, o.prototype.fapply = function (a) {
			return this.dispatch("apply", [void 0, a])
		}, k["try"] = k.fcall = function (a) {
			return k(a)
				.dispatch("apply", [void 0, X(arguments, 1)])
		}, o.prototype.fcall = function () {
			return this.dispatch("apply", [void 0, X(arguments)])
		}, k.fbind = function (a) {
			var b = k(a),
				c = X(arguments, 1);
			return function () {
				return b.dispatch("apply", [this, c.concat(X(arguments))])
			}
		}, o.prototype.fbind = function () {
			var a = this,
				b = X(arguments);
			return function () {
				return a.dispatch("apply", [this, b.concat(X(arguments))])
			}
		}, k.keys = function (a) {
			return k(a)
				.dispatch("keys", [])
		}, o.prototype.keys = function () {
			return this.dispatch("keys", [])
		}, k.all = J, o.prototype.all = function () {
			return J(this)
		}, k.any = K, o.prototype.any = function () {
			return K(this)
		}, k.allResolved = j(L, "allResolved", "allSettled"), o.prototype.allResolved = function () {
			return L(this)
		}, k.allSettled = M, o.prototype.allSettled = function () {
			return this.then(function (a) {
				return J($(a, function (a) {
					function b() {
						return a.inspect()
					}
					return a = k(a), a.then(b, b)
				}))
			})
		}, k.fail = k["catch"] = function (a, b) {
			return k(a)
				.then(void 0, b)
		}, o.prototype.fail = o.prototype["catch"] = function (a) {
			return this.then(void 0, a)
		}, k.progress = N, o.prototype.progress = function (a) {
			return this.then(void 0, void 0, a)
		}, k.fin = k["finally"] = function (a, b) {
			return k(a)["finally"](b)
		}, o.prototype.fin = o.prototype["finally"] = function (a) {
			return a = k(a), this.then(function (b) {
				return a.fcall()
					.then(function () {
						return b
					})
			}, function (b) {
				return a.fcall()
					.then(function () {
						throw b
					})
			})
		}, k.done = function (a, b, c, d) {
			return k(a)
				.done(b, c, d)
		}, o.prototype.done = function (a, b, c) {
			var e = function (a) {
					k.nextTick(function () {
						if (d(a, f), !k.onerror) throw a;
						k.onerror(a)
					})
				},
				f = a || b || c ? this.then(a, b, c) : this;
			"object" == typeof process && process && process.domain && (e = process.domain.bind(e)), f.then(void 0, e)
		}, k.timeout = function (a, b, c) {
			return k(a)
				.timeout(b, c)
		}, o.prototype.timeout = function (a, b) {
			var c = l(),
				d = setTimeout(function () {
					b && "string" != typeof b || (b = new Error(b || "Timed out after " + a + " ms"), b.code = "ETIMEDOUT"), c.reject(b)
				}, a);
			return this.then(function (a) {
				clearTimeout(d), c.resolve(a)
			}, function (a) {
				clearTimeout(d), c.reject(a)
			}, c.notify), c.promise
		}, k.delay = function (a, b) {
			return void 0 === b && (b = a, a = void 0), k(a)
				.delay(b)
		}, o.prototype.delay = function (a) {
			return this.then(function (b) {
				var c = l();
				return setTimeout(function () {
					c.resolve(b)
				}, a), c.promise
			})
		}, k.nfapply = function (a, b) {
			return k(a)
				.nfapply(b)
		}, o.prototype.nfapply = function (a) {
			var b = l(),
				c = X(a);
			return c.push(b.makeNodeResolver()), this.fapply(c)
				.fail(b.reject), b.promise
		}, k.nfcall = function (a) {
			var b = X(arguments, 1);
			return k(a)
				.nfapply(b)
		}, o.prototype.nfcall = function () {
			var a = X(arguments),
				b = l();
			return a.push(b.makeNodeResolver()), this.fapply(a)
				.fail(b.reject), b.promise
		}, k.nfbind = k.denodeify = function (a) {
			var b = X(arguments, 1);
			return function () {
				var c = b.concat(X(arguments)),
					d = l();
				return c.push(d.makeNodeResolver()), k(a)
					.fapply(c)
					.fail(d.reject), d.promise
			}
		}, o.prototype.nfbind = o.prototype.denodeify = function () {
			var a = X(arguments);
			return a.unshift(this), k.denodeify.apply(void 0, a)
		}, k.nbind = function (a, b) {
			var c = X(arguments, 2);
			return function () {
				function d() {
					return a.apply(b, arguments)
				}
				var e = c.concat(X(arguments)),
					f = l();
				return e.push(f.makeNodeResolver()), k(d)
					.fapply(e)
					.fail(f.reject), f.promise
			}
		}, o.prototype.nbind = function () {
			var a = X(arguments, 0);
			return a.unshift(this), k.nbind.apply(void 0, a)
		}, k.nmapply = k.npost = function (a, b, c) {
			return k(a)
				.npost(b, c)
		}, o.prototype.nmapply = o.prototype.npost = function (a, b) {
			var c = X(b || []),
				d = l();
			return c.push(d.makeNodeResolver()), this.dispatch("post", [a, c])
				.fail(d.reject), d.promise
		}, k.nsend = k.nmcall = k.ninvoke = function (a, b) {
			var c = X(arguments, 2),
				d = l();
			return c.push(d.makeNodeResolver()), k(a)
				.dispatch("post", [b, c])
				.fail(d.reject), d.promise
		}, o.prototype.nsend = o.prototype.nmcall = o.prototype.ninvoke = function (a) {
			var b = X(arguments, 1),
				c = l();
			return b.push(c.makeNodeResolver()), this.dispatch("post", [a, b])
				.fail(c.reject), c.promise
		}, k.nodeify = O, o.prototype.nodeify = function (a) {
			return a ? void this.then(function (b) {
				k.nextTick(function () {
					a(null, b)
				})
			}, function (b) {
				k.nextTick(function () {
					a(b)
				})
			}) : this
		}, k.noConflict = function () {
			throw new Error("Q.noConflict only works when Q is used as a global")
		};
		var ia = i();
		return k
	}),
	function (a) {
		function b() {
			try {
				return g in a && a[g]
			} catch (b) {
				return !1
			}
		}

		function c(a) {
			return a.replace(/^d/, "___$&")
				.replace(m, "___")
		}
		var d, e = {},
			f = a.document,
			g = "localStorage",
			h = "script";
		if (e.disabled = !1, e.version = "1.3.17", e.set = function (a, b) {}, e.get = function (a, b) {}, e.has = function (a) {
				return void 0 !== e.get(a)
			}, e.remove = function (a) {}, e.clear = function () {}, e.transact = function (a, b, c) {
				null == c && (c = b, b = null), null == b && (b = {});
				var d = e.get(a, b);
				c(d), e.set(a, d)
			}, e.getAll = function () {}, e.forEach = function () {}, e.serialize = function (a) {
				return JSON.stringify(a)
			}, e.deserialize = function (a) {
				if ("string" == typeof a) try {
					return JSON.parse(a)
				} catch (b) {
					return a || void 0
				}
			}, b()) d = a[g], e.set = function (a, b) {
			return void 0 === b ? e.remove(a) : (d.setItem(a, e.serialize(b)), b)
		}, e.get = function (a, b) {
			var c = e.deserialize(d.getItem(a));
			return void 0 === c ? b : c
		}, e.remove = function (a) {
			d.removeItem(a)
		}, e.clear = function () {
			d.clear()
		}, e.getAll = function () {
			var a = {};
			return e.forEach(function (b, c) {
				a[b] = c
			}), a
		}, e.forEach = function (a) {
			for (var b = 0; b < d.length; b++) {
				var c = d.key(b);
				a(c, e.get(c))
			}
		};
		else if (f.documentElement.addBehavior) {
			var i, j;
			try {
				j = new ActiveXObject("htmlfile"), j.open(), j.write("<" + h + ">document.w=window</" + h + '><iframe src="/favicon.ico"></iframe>'), j.close(), i = j.w.frames[0].document, d = i.createElement("div")
			} catch (k) {
				d = f.createElement("div"), i = f.body
			}
			var l = function (a) {
					return function () {
						var b = Array.prototype.slice.call(arguments, 0);
						b.unshift(d), i.appendChild(d), d.addBehavior("#default#userData"), d.load(g);
						var c = a.apply(e, b);
						return i.removeChild(d), c
					}
				},
				m = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
			e.set = l(function (a, b, d) {
				return b = c(b), void 0 === d ? e.remove(b) : (a.setAttribute(b, e.serialize(d)), a.save(g), d)
			}), e.get = l(function (a, b, d) {
				b = c(b);
				var f = e.deserialize(a.getAttribute(b));
				return void 0 === f ? d : f
			}), e.remove = l(function (a, b) {
				b = c(b), a.removeAttribute(b), a.save(g)
			}), e.clear = l(function (a) {
				var b = a.XMLDocument.documentElement.attributes;
				a.load(g);
				for (var c, d = 0; c = b[d]; d++) a.removeAttribute(c.name);
				a.save(g)
			}), e.getAll = function (a) {
				var b = {};
				return e.forEach(function (a, c) {
					b[a] = c
				}), b
			}, e.forEach = l(function (a, b) {
				for (var c, d = a.XMLDocument.documentElement.attributes, f = 0; c = d[f]; ++f) b(c.name, e.deserialize(a.getAttribute(c.name)))
			})
		}
		try {
			var n = "__storejs__";
			e.set(n, n), e.get(n) != n && (e.disabled = !0), e.remove(n)
		} catch (k) {
			e.disabled = !0
		}
		e.enabled = !e.disabled, "undefined" != typeof module && module.exports && this.module !== module ? module.exports = e : "function" == typeof define && define.amd ? define(e) : a.store = e
	}(Function("return this")()),
	function (a) {
		"use strict";

		function b(a) {
			return decodeURIComponent((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)")
				.exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || null
		}
		a.Stamplay = a.Stamplay || {}, a.Stamplay.VERSION = "v1", a.Stamplay.APPID = "", a.Stamplay.BASEURL = "", a.Stamplay.OPTIONS = {}, window.localStorage && store.enabled && (a.Stamplay.USESTORAGE = !0), b("jwt") && a.Stamplay.USESTORAGE && store.set(window.location.origin + "-jwt", b("jwt")), a.Stamplay.init = function (b, c) {
			a.Stamplay.BASEURL = "http://" + b + ".stamplayapp.com", a.Stamplay.APPID = b, a.Stamplay.OPTIONS = c || {}
			console.log('a.Stamplay.OPTIONS',JSON.stringify(a.Stamplay.OPTIONS));
		}
	}(this),
	function (a) {
		"use strict";

		function b(b, c, d) {
			if (Object.keys(d.headers || {})
				.forEach(function (a) {
					c.setRequestHeader(a, d.headers[a])
				}), c.setRequestHeader("Content-Type", "application/json"), c.setRequestHeader("stamplay-app", b), a.Stamplay.USESTORAGE) {
				var e = store.get(window.location.origin + "-jwt");
				e && (g(e) ? c.setRequestHeader("x-stamplay-jwt", e) : store.remove(window.location.origin + "-jwt"))
			}
		}

		function c(b) {
			var c = b.getResponseHeader("x-stamplay-jwt");
			if (c) {
				var e = d(c);
				a.Stamplay.USESTORAGE && store.set(window.location.origin + "-jwt", c)
			}
			return e
		}

		function d(a) {
			var b = {},
				c = {},
				d = "";
			try {
				var f = a.split(".");
				b = JSON.parse(e(f[0] || "{}")), c = JSON.parse(e(f[1] || "{}")), d = f[2]
			} catch (g) {}
			return {
				header: b,
				claims: c,
				signature: d
			}
		}

		function e(a) {
			return "undefined" != typeof atob ? atob(a) : f(a)
		}

		function f(a) {
			var b, c, d, e, f = {},
				g = 0,
				h = 0,
				i = "",
				j = String.fromCharCode,
				k = a.length,
				l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
			for (b = 0; 64 > b; b++) f[l.charAt(b)] = b;
			for (d = 0; k > d; d++)
				for (c = f[a.charAt(d)], g = (g << 6) + c, h += 6; h >= 8;)((e = g >>> (h -= 8) & 255) || k - 2 > d) && (i += j(e));
			return i
		}

		function g(a) {
			var b, c, e = d(a)
				.claims,
				f = Math.floor((new Date)
					.getTime() / 1e3);
			if ("object" == typeof e) {
				if (e.hasOwnProperty("iat")) {
					b = e.iat;
					var g = 3e4,
						h = new Date(1e3 * b),
						i = new Date(h - g);
					b = i.getTime() / 1e3
				}
				c = e.hasOwnProperty("exp") ? e.exp : b + 86400
			}
			return f && b && c && f >= b && c >= f
		}
		var h = function (a) {
			for (var b = Object.keys(a.thisParams), c = 0; c < b.length; c++) {
				var d = c > 0 ? "&" : "?",
					e = b[c];
				a.url = a.url + d + e + "=" + a.thisParams[e]
			}
		};
		a.Stamplay.makeAPromise = function (d, e) {
			d.thisParams && h(d);
			var f = a.Stamplay.APPID;
			"" != a.Stamplay.APPID ? d.url = a.Stamplay.BASEURL + d.url : (f = location.host, f = f.replace(/^www\./, ""), f = f.replace(/:[0-9]*$/g, ""));
			var g = new XMLHttpRequest;
			g.open(d.method || "GET", d.url, d.async || !0), b(f, g, d);
			var i = Q.defer();
			return g.onreadystatechange = function () {
				4 == g.readyState && (-1 === [200, 304].indexOf(g.status) ? i.reject({
					code: g.status,
					message: g.responseText
				}) : (c(g), i.resolve(JSON.parse(g.responseText))), i.promise.nodeify(e))
			}, g.send(JSON.stringify(d.data) || void 0), i.promise
		}
	}(this),
	function (a) {
		"use strict";

		function b(b, c) {
			var d = function (a, b) {
					switch (a) {
					case "cobject":
						delete b.__v, delete b.cobjectId, delete b.actions, delete b.appId, delete b.id;
						break;
					case "user":
						delete b._id, delete b.id, delete b.__v
					}
				},
				e = function (b, c, d, e, f, g) {
					var h = {
						method: d,
						url: "/api/" + b + "/" + a.Stamplay.VERSION + "/" + c
					};
					return e && (h.url = h.url + "/" + e), f && "GET" != d && (h.data = f), "GET" == d && (h.thisParams = f), a.Stamplay.makeAPromise(h, g)
				};
			return {
				brickId: b,
				resourceId: c,
				get: function (a, b) {
					return e(this.brickId, this.resourceId, "GET", !1, a, b)
				},
				save: function (a, b) {
					return e(this.brickId, this.resourceId, "POST", !1, a, b)
				},
				patch: function (a, b, c) {
					return d(this.brickId, b), e(this.brickId, this.resourceId, "PATCH", a, b, c)
				},
				update: function (a, b, c) {
					return d(this.brickId, b), e(this.brickId, this.resourceId, "PUT", a, b, c)
				},
				remove: function (a, b) {
					return e(this.brickId, this.resourceId, "DELETE", a, !1, b)
				}
			}
		}
		a.Stamplay.BaseComponent = b
	}(this),
	function (a) {
		"use strict";

		function b() {
			this.redirect = function (a) {
				window.location.href = a
			}, this.validateEmail = function (b, c) {
				return a.Stamplay.makeAPromise({
					method: "POST",
					data: {
						email: b
					},
					url: "/api/auth/" + a.Stamplay.VERSION + "/validate/email"
				}, c)
			}
		}
		var c = new b;
		a.Stamplay.Support = c
	}(this),
	function (a) {
		"use strict";

		function b(a, b, c, d, e, f) {
			var g = {
				_geolocation: {}
			};
			return g._geolocation[a] = {}, g._geolocation[a][b] = {
				type: c,
				coordinates: d
			}, e && (g._geolocation[a].$maxDistance = e), f && (g._geolocation[a].$minDistance = f), g
		}

		function c(a, b) {
			var c = {
				_geolocation: {
					$geoWithin: {}
				}
			};
			return c._geolocation.$geoWithin[a] = b, c
		}

		function d(d, e) {
			return {
				model: d,
				instance: e,
				paginationQuery: "",
				sortQuery: "",
				selectionQuery: "",
				populateQuery: "",
				populateOwnerQuery: "",
				whereQuery: [],
				executable: "",
				or: function () {
					var a = {
							$or: []
						},
						b = arguments;
					arguments[0] instanceof Array && (b = arguments[0]);
					for (var c = 0; c < b.length; c++) {
						if (!b[c].whereQuery) throw new Error("Please Or function take only Query object");
						a.$or.push(b[c].whereQuery[0])
					}
					return this.whereQuery.push(a), this
				},
				pagination: function (a, b) {
					return this.paginationQuery = "&page=" + a + "&per_page=" + b, this
				},
				between: function (a, b, c) {
					var d = {};
					return d[a] = {
						$gte: b,
						$lte: c
					}, this.whereQuery.push(d), this
				},
				greaterThan: function (a, b) {
					var c = {};
					return c[a] = {
						$gt: b
					}, this.whereQuery.push(c), this
				},
				greaterThanOrEqual: function (a, b) {
					var c = {};
					return c[a] = {
						$gte: b
					}, this.whereQuery.push(c), this
				},
				lessThan: function (a, b) {
					var c = {};
					return c[a] = {
						$lt: b
					}, this.whereQuery.push(c), this
				},
				lessThanOrEqual: function (a, b) {
					var c = {};
					return c[a] = {
						$lte: b
					}, this.whereQuery.push(c), this
				},
				equalTo: function (a, b) {
					var c = {};
					return c[a] = b, this.whereQuery.push(c), this
				},
				sortAscending: function (a) {
					return this.sortQuery = "&sort=" + a, this
				},
				sortDescending: function (a) {
					return this.sortQuery = "&sort=-" + a, this
				},
				exists: function (a) {
					var b = {};
					return b[a] = {
						$exists: !0
					}, this.whereQuery.push(b), this
				},
				notExists: function (a) {
					var b = {};
					return b[a] = {
						$exists: !1
					}, this.whereQuery.push(b), this
				},
				regex: function (a, b, c) {
					var d = {};
					return d[a] = {
						$regex: b,
						$options: c
					}, this.whereQuery.push(d), this
				},
				populate: function () {
					return this.populateQuery = "&populate=true", this
				},
				populateOwner: function () {
					return this.populateOwnerQuery = "&populate_owner=true", this
				},
				select: function () {
					return this.selectionQuery = "&select=" + Array.prototype.slice.call(arguments)
						.join(", ")
						.replace(" ", ""), this
				},
				near: function (a, c, d, e) {
					var f = b("$near", "$geometry", a, c, d, e);
					return this.whereQuery.push(f), this
				},
				nearSphere: function (a, c, d, e) {
					var f = b("$nearSphere", "$geometry", a, c, d, e);
					return this.whereQuery.push(f), this
				},
				geoIntersects: function (a, c) {
					var d = b("$geoIntersects", "$geometry", a, c);
					return this.whereQuery.push(d), this
				},
				geoWithinGeometry: function (a, c) {
					var d = b("$geoWithin", "$geometry", a, c);
					return this.whereQuery.push(d), this
				},
				geoWithinCenterSphere: function (a, b) {
					var d = [a, b],
						e = c("$centerSphere", d);
					return this.whereQuery.push(e), this
				},
				exec: function (b) {
					for (var c = 0; c < this.whereQuery.length; c++) {
						var d = JSON.stringify(this.whereQuery[c]);
						d = d.substring(1, d.length - 1), 0 === c ? this.executable += d : this.executable += "," + d
					}
					switch (this.model) {
					case "object":
						this.model = "cobject";
						break;
					default:
						this.instance = "users"
					}
					var e = "/api/" + this.model + "/" + a.Stamplay.VERSION + "/" + this.instance + "?where={" + this.executable + "}" + this.paginationQuery + this.selectionQuery + this.sortQuery + this.populateQuery + this.populateOwnerQuery;
					return a.Stamplay.makeAPromise({
						method: "GET",
						url: e
					}, b)
				}
			}
		}
		a.Stamplay.Query = d
	}(this),
	function (a) {
		"use strict";
		var b = {
			brickId: "user",
			resourceId: "users",
			currentUser: function (b) {
				return a.Stamplay.makeAPromise({
					method: "GET",
					url: "/api/" + this.brickId + "/" + a.Stamplay.VERSION + "/getStatus"
				}, b)
			},
			login: function (b, c) {
				return a.Stamplay.makeAPromise({
					method: "POST",
					data: b,
					url: "/auth/" + a.Stamplay.VERSION + "/local/login"
				}, c)
			},
			socialLogin: function (b) {
				if (!b) throw new Error("Stamplay.User.socialLogin needs the service name");
				var c = "/auth/" + a.Stamplay.VERSION + "/" + b + "/connect";
				if (a.Stamplay.OPTIONS.isMobile) {
					var d = window.open(window.system.app.host + c, "socialLogin", "left=1,top=1,width=600,height=600"); // *hack
					d.addEventListener("loadstart", function (b) {
						var c = new RegExp("jwt=([A-Za-z0-9-_=]+.[A-Za-z0-9-_=]+.[A-Za-z0-9-_.+=]+)");
						if (b.url.indexOf("jwt=") > -1) {
							var e = b.url.match(c)[1];
							store.set(window.location.origin + "-jwt", e), a.Stamplay.OPTIONS.autoRefreshSocialLogin, location.reload(), d.close()
						}
					})
				} else {
					var e = store.get(window.location.origin + "-jwt");
					if (e) {
						var f = new Date;
						f.setTime(f.getTime() + 3e5), document.cookie = "stamplay.jwt=" + e + "; expires=" + f.toGMTString() + "; path=/"
					}
					var g = window.location.port ? ":" + window.location.port : "",
						h = location.protocol + "//" + document.domain + g + c;
					a.Stamplay.OPTIONS.absoluteUrl && (h = a.Stamplay.BASEURL + c), a.Stamplay.Support.redirect(h)
				}
			},
			signup: function (b, c) {
				return a.Stamplay.makeAPromise({
					method: "POST",
					data: b,
					url: "/api/" + this.brickId + "/" + a.Stamplay.VERSION + "/" + this.resourceId
				}, c)
			},
			logout: function (b, c) {
				if (a.Stamplay.USESTORAGE && store.remove(window.location.origin + "-jwt"), b) return a.Stamplay.makeAPromise({
					method: "GET",
					url: "/auth/" + a.Stamplay.VERSION + "/logout"
				}, c);
				var d = "/auth/" + a.Stamplay.VERSION + "/logout",
					e = window.location.port ? ":" + window.location.port : "",
					f = location.protocol + "//" + document.domain + e + d;
				a.Stamplay.OPTIONS.absoluteUrl && (f = a.Stamplay.BASEURL + d), a.Stamplay.Support.redirect(f)
			},
			resetPassword: function (b, c) {
				return a.Stamplay.makeAPromise({
					method: "POST",
					data: b,
					url: "/api/" + this.brickId + "/" + a.Stamplay.VERSION + "/users/resetpassword"
				}, c)
			},
			activities: function (b, c) {
				return a.Stamplay.makeAPromise({
					method: "GET",
					url: "/api/" + this.brickId + "/" + a.Stamplay.VERSION + "/users/" + b + "/activities"
				}, c)
			},
			following: function (b, c) {
				return a.Stamplay.makeAPromise({
					method: "GET",
					url: "/api/" + this.brickId + "/" + a.Stamplay.VERSION + "/users/" + b + "/following"
				}, c)
			},
			followedBy: function (b, c) {
				return a.Stamplay.makeAPromise({
					method: "GET",
					url: "/api/" + this.brickId + "/" + a.Stamplay.VERSION + "/users/" + b + "/followed_by"
				}, c)
			},
			follow: function (b, c) {
				return a.Stamplay.makeAPromise({
					method: "PUT",
					data: {
						userId: b
					},
					url: "/api/" + this.brickId + "/" + a.Stamplay.VERSION + "/users/follow"
				}, c)
			},
			unfollow: function (b, c) {
				return a.Stamplay.makeAPromise({
					method: "PUT",
					data: {
						userId: b
					},
					url: "/api/" + this.brickId + "/" + a.Stamplay.VERSION + "/users/unfollow"
				}, c)
			},
			getRoles: function (b) {
				return a.Stamplay.makeAPromise({
					method: "GET",
					url: "/api/user/" + a.Stamplay.VERSION + "/roles"
				}, b)
			},
			getRole: function (b, c) {
				return a.Stamplay.makeAPromise({
					method: "GET",
					url: "/api/user/" + a.Stamplay.VERSION + "/roles/" + b
				}, c)
			}
		};
		_.extend(b, a.Stamplay.BaseComponent(b.brickId, b.resourceId)), delete b.patch, b.remove = function (b, c) {
			return a.Stamplay.makeAPromise({
					method: "DELETE",
					url: "/api/" + this.brickId + "/" + a.Stamplay.VERSION + "/" + this.resourceId + "/" + b
				}, c)
				.then(function (b) {
					if (a.Stamplay.USESTORAGE) {
						var c = store.get(window.location.origin + "-jwt");
						c && store.remove(window.location.origin + "-jwt")
					}
				})
		}, a.Stamplay.User = b
	}(this),
	function (a) {
		"use strict";

		function b(b) {
			if (b) return _.extend({
				brickId: "cobject",
				resourceId: b,
				findByCurrentUser: function (b, c) {
					return 1 == arguments.length && _.isFunction(arguments[0]) || 0 == arguments.length ? a.Stamplay.makeAPromise({
						method: "GET",
						url: "/api/" + this.brickId + "/" + a.Stamplay.VERSION + "/" + this.resourceId + "/find/owner"
					}, arguments[0]) : a.Stamplay.makeAPromise({
						method: "GET",
						url: "/api/" + this.brickId + "/" + a.Stamplay.VERSION + "/" + this.resourceId + "/find/" + b
					}, c)
				},
				upVote: function (a, b) {
					return c.call(this, a, "vote", {
						type: "upvote"
					}, b)
				},
				downVote: function (a, b) {
					return c.call(this, a, "vote", {
						type: "downvote"
					}, b)
				},
				rate: function (a, b, d) {
					return c.call(this, a, "rate", {
						rate: b
					}, d)
				},
				comment: function (a, b, d) {
					return c.call(this, a, "comment", {
						text: b
					}, d)
				},
				push: function (a, c, g, h) {
					return h ? d(b, a)
						.then(function (d) {
							var i = f(d, c, g);
							return e(b, a, i, h)
						}, function (a) {
							h(a, null)
						})
						.fail(function (a) {
							h(a, null)
						}) : d(b, a)
						.then(function (d) {
							var h = f(d, c, g);
							return e(b, a, h)
						})
				}
			}, a.Stamplay.BaseComponent("cobject", b));
			throw new Error("Stamplay.Object(objecId) needs a objectId")
		}
		var c = function (b, c, d, e) {
				return a.Stamplay.makeAPromise({
					method: "PUT",
					data: d ? d : {},
					url: "/api/" + this.brickId + "/" + a.Stamplay.VERSION + "/" + this.resourceId + "/" + b + "/" + c
				}, e)
			},
			d = function (b, c) {
				return a.Stamplay.BaseComponent("cobject", b + "/" + c)
					.get()
			},
			e = function (b, c, d, e) {
				return a.Stamplay.BaseComponent("cobject", b)
					.patch(c, d, e)
			},
			f = function (a, b, c) {
				var d = {};
				return d[b] = a[b], d[b].push(c), d
			};
		a.Stamplay.Object = b
	}(this),
	function (a) {
		"use strict";

		function b(b) {
			var c = b.replace(/[^\w\s]/gi, "")
				.trim()
				.toLowerCase()
				.replace(/\s+/g, "_"),
				d = "/api/webhook/" + a.Stamplay.VERSION + "/" + c + "/catch";
			return {
				post: function (b, c) {
					return a.Stamplay.makeAPromise({
						method: "POST",
						data: b,
						url: d
					}, c)
				}
			}
		}
		a.Stamplay.Webhook = b
	}(this),
	function (a) {
		"use strict";
		var b = {
			url: "/api/stripe/" + a.Stamplay.VERSION + "/",
			createCustomer: function (b, c) {
				return a.Stamplay.makeAPromise({
					method: "POST",
					data: {
						userId: b
					},
					url: this.url + "customers"
				}, c)
			},
			createCreditCard: function (b, c, d) {
				if (arguments.length >= 2 && _.isString(arguments[0]) && _.isString(arguments[1])) return a.Stamplay.makeAPromise({
					method: "POST",
					data: {
						token: c
					},
					url: this.url + "customers/" + b + "/cards"
				}, d);
				throw new Error("Stamplay.Stripe.createCustomer:  missing parameters")
			},
			updateCreditCard: function (b, c, d) {
				if (arguments.length >= 2 && _.isString(arguments[0]) && _.isString(arguments[1])) return a.Stamplay.makeAPromise({
					method: "PUT",
					data: {
						token: c
					},
					url: this.url + "customers/" + b + "/cards"
				}, d);
				throw new Error("Stamplay.Stripe.updateCreditCard:  missing parameters")
			},
			charge: function (b, c, d, e, f) {
				if (arguments.length >= 4 && _.isString(arguments[0]) && _.isString(arguments[1]) && _.isNumber(arguments[2]) && _.isString(arguments[3])) return a.Stamplay.makeAPromise({
					method: "POST",
					data: {
						userId: b,
						token: c,
						amount: d,
						currency: e
					},
					url: this.url + "charges"
				}, f);
				throw new Error("Stamplay.Stripe.charge:  missing or incorrect parameters")
			},
			createSubscription: function (b, c, d) {
				if (arguments.length >= 2 && _.isString(arguments[0]) && _.isString(arguments[1])) return a.Stamplay.makeAPromise({
					method: "POST",
					data: {
						planId: c
					},
					url: this.url + "customers/" + b + "/subscriptions"
				}, d);
				throw new Error("Stamplay.Stripe.createSubscription:  missing parameters")
			},
			getSubscriptions: function (b, c, d) {
				if (arguments.length >= 2) return a.Stamplay.makeAPromise({
					method: "GET",
					url: this.url + "customers/" + b + "/subscriptions",
					thisParams: c
				}, d);
				throw new Error("Stamplay.Stripe.getSubscriptions:  missing parameters")
			},
			getSubscription: function (b, c, d) {
				if (arguments.length >= 2 && _.isString(arguments[0]) && _.isString(arguments[1])) return a.Stamplay.makeAPromise({
					method: "GET",
					url: this.url + "customers/" + b + "/subscriptions/" + c
				}, d);
				throw new Error("Stamplay.Stripe.getSubscription:  missing parameters")
			},
			getCreditCard: function (b, c) {
				return a.Stamplay.makeAPromise({
					method: "GET",
					url: this.url + "customers/" + b + "/cards"
				}, c)
			},
			deleteSubscription: function (b, c, d, e) {
				if (arguments.length >= 3) return a.Stamplay.makeAPromise({
					method: "DELETE",
					url: this.url + "customers/" + b + "/subscriptions/" + c,
					data: d
				}, e);
				throw new Error("Stamplay.Stripe.deleteSubscription:  missing parameters")
			},
			updateSubscription: function (b, c, d, e) {
				if (arguments.length >= 3) return a.Stamplay.makeAPromise({
					method: "PUT",
					url: this.url + "customers/" + b + "/subscriptions/" + c,
					data: {
						options: d
					}
				}, e);
				throw new Error("Stamplay.Stripe.updateSubscription:  missing parameters")
			}
		};
		a.Stamplay.Stripe = b
	}(this),
	function (a) {
		"use strict";

		function b(a) {
			var b = "POST";
			if ("string" == typeof a) switch (a) {
			case "GET":
			case "POST":
			case "PUT":
			case "PATCH":
			case "DELETE":
				b = a;
				break;
			default:
				throw new Error("Stamplay.codeblock(): Invalid HTTP verb: available verbs are GET,POST,PUT,PATCH and DELETE")
			}
			return b
		}

		function c(a, b) {
			var c = null == b || void 0 == b ? void 0 : b;
			switch (a) {
			case "POST":
			case "PUT":
			case "PATCH":
				break;
			default:
				c = void 0
			}
			return c
		}

		function d(d) {
			var e = d.replace(/[^\w\s]/gi, "")
				.trim()
				.toLowerCase()
				.replace(/\s+/g, "_"),
				f = "/api/codeblock/" + a.Stamplay.VERSION + "/run/" + e;
			return {
				run: function (d, e, g) {
					var h = b("POST"),
						i = c("POST", d);
					return a.Stamplay.makeAPromise({
						method: h,
						data: i,
						url: f,
						thisParams: e
					}, g)
				}
			}
		}
		a.Stamplay.Codeblock = d
	}(this);
//# sourceMappingURL=stamplay.min.js.map
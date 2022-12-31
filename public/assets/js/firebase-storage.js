!(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(require('@firebase/app'))
        : 'function' == typeof define && define.amd
        ? define(['@firebase/app'], t)
        : t((e = 'undefined' != typeof globalThis ? globalThis : e || self).firebase);
})(this, function (ht) {
    'use strict';
    try {
        (function () {
            function e(e) {
                return e && 'object' == typeof e && 'default' in e ? e : { default: e };
            }
            var n = e(ht),
                o = function (e, t) {
                    return (o =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                                e.__proto__ = t;
                            }) ||
                        function (e, t) {
                            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                        })(e, t);
                };
            function t(e, t) {
                function r() {
                    this.constructor = e;
                }
                o(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
            }
            var i = function () {
                return (i =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var o in (t = arguments[r]))
                                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
            };
            function r(e, a, s, u) {
                return new (s = s || Promise)(function (r, t) {
                    function n(e) {
                        try {
                            i(u.next(e));
                        } catch (e) {
                            t(e);
                        }
                    }
                    function o(e) {
                        try {
                            i(u.throw(e));
                        } catch (e) {
                            t(e);
                        }
                    }
                    function i(e) {
                        var t;
                        e.done
                            ? r(e.value)
                            : ((t = e.value) instanceof s
                                  ? t
                                  : new s(function (e) {
                                        e(t);
                                    })
                              ).then(n, o);
                    }
                    i((u = u.apply(e, a || [])).next());
                });
            }
            function h(r, n) {
                var o,
                    i,
                    a,
                    s = {
                        label: 0,
                        sent: function () {
                            if (1 & a[0]) throw a[1];
                            return a[1];
                        },
                        trys: [],
                        ops: [],
                    },
                    e = { next: t(0), throw: t(1), return: t(2) };
                return (
                    'function' == typeof Symbol &&
                        (e[Symbol.iterator] = function () {
                            return this;
                        }),
                    e
                );
                function t(t) {
                    return function (e) {
                        return (function (t) {
                            if (o) throw new TypeError('Generator is already executing.');
                            for (; s; )
                                try {
                                    if (
                                        ((o = 1),
                                        i &&
                                            (a =
                                                2 & t[0]
                                                    ? i.return
                                                    : t[0]
                                                    ? i.throw || ((a = i.return) && a.call(i), 0)
                                                    : i.next) &&
                                            !(a = a.call(i, t[1])).done)
                                    )
                                        return a;
                                    switch (((i = 0), (t = a ? [2 & t[0], a.value] : t)[0])) {
                                        case 0:
                                        case 1:
                                            a = t;
                                            break;
                                        case 4:
                                            return s.label++, { value: t[1], done: !1 };
                                        case 5:
                                            s.label++, (i = t[1]), (t = [0]);
                                            continue;
                                        case 7:
                                            (t = s.ops.pop()), s.trys.pop();
                                            continue;
                                        default:
                                            if (
                                                !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                                                (6 === t[0] || 2 === t[0])
                                            ) {
                                                s = 0;
                                                continue;
                                            }
                                            if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                                                s.label = t[1];
                                                break;
                                            }
                                            if (6 === t[0] && s.label < a[1]) {
                                                (s.label = a[1]), (a = t);
                                                break;
                                            }
                                            if (a && s.label < a[2]) {
                                                (s.label = a[2]), s.ops.push(t);
                                                break;
                                            }
                                            a[2] && s.ops.pop(), s.trys.pop();
                                            continue;
                                    }
                                    t = n.call(r, s);
                                } catch (e) {
                                    (t = [6, e]), (i = 0);
                                } finally {
                                    o = a = 0;
                                }
                            if (5 & t[0]) throw t[1];
                            return { value: t[0] ? t[1] : void 0, done: !0 };
                        })([t, e]);
                    };
                }
            }
            function g() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var n = Array(e), o = 0, t = 0; t < r; t++)
                    for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
                return n;
            }
            var a,
                s = 'FirebaseError',
                u = (t(c, (a = Error)), c);
            function c(e, t, r) {
                t = a.call(this, t) || this;
                return (
                    (t.code = e),
                    (t.customData = r),
                    (t.name = s),
                    Object.setPrototypeOf(t, c.prototype),
                    Error.captureStackTrace && Error.captureStackTrace(t, l.prototype.create),
                    t
                );
            }
            var l =
                ((p.prototype.create = function (e) {
                    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    var n,
                        o = t[0] || {},
                        i = this.service + '/' + e,
                        e = this.errors[e],
                        e = e
                            ? ((n = o),
                              e.replace(f, function (e, t) {
                                  var r = n[t];
                                  return null != r ? String(r) : '<' + t + '?>';
                              }))
                            : 'Error',
                        e = this.serviceName + ': ' + e + ' (' + i + ').';
                    return new u(i, e, o);
                }),
                p);
            function p(e, t, r) {
                (this.service = e), (this.serviceName = t), (this.errors = r);
            }
            var f = /\{\$([^}]+)}/g,
                d =
                    ((_.prototype.setInstantiationMode = function (e) {
                        return (this.instantiationMode = e), this;
                    }),
                    (_.prototype.setMultipleInstances = function (e) {
                        return (this.multipleInstances = e), this;
                    }),
                    (_.prototype.setServiceProps = function (e) {
                        return (this.serviceProps = e), this;
                    }),
                    _);
            function _(e, t, r) {
                (this.name = e),
                    (this.instanceFactory = t),
                    (this.type = r),
                    (this.multipleInstances = !1),
                    (this.serviceProps = {}),
                    (this.instantiationMode = 'LAZY');
            }
            var b,
                v = 'firebasestorage.googleapis.com',
                m = 'storageBucket',
                y =
                    (t(w, (b = u)),
                    (w.prototype._codeEquals = function (e) {
                        return R(e) === this.code;
                    }),
                    Object.defineProperty(w.prototype, 'message', {
                        get: function () {
                            return this.customData.serverResponse
                                ? this.message + '\n' + this.customData.serverResponse
                                : this.message;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(w.prototype, 'serverResponse', {
                        get: function () {
                            return this.customData.serverResponse;
                        },
                        set: function (e) {
                            this.customData.serverResponse = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    w);
            function w(e, t) {
                e = b.call(this, R(e), 'Firebase Storage: ' + t + ' (' + R(e) + ')') || this;
                return (e.customData = { serverResponse: null }), Object.setPrototypeOf(e, w.prototype), e;
            }
            function R(e) {
                return 'storage/' + e;
            }
            function k() {
                return new y(
                    'unknown',
                    'An unknown error occurred, please check the error payload for server response.',
                );
            }
            function T() {
                return new y('canceled', 'User canceled the upload/download.');
            }
            function O() {
                return new y('cannot-slice-blob', 'Cannot slice blob for upload. Please retry the upload.');
            }
            function x(e) {
                return new y('invalid-argument', e);
            }
            function P() {
                return new y('app-deleted', 'The Firebase app was deleted.');
            }
            function S(e) {
                return new y(
                    'invalid-root-operation',
                    "The operation '" +
                        e +
                        "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').",
                );
            }
            function U(e, t) {
                return new y('invalid-format', "String does not match format '" + e + "': " + t);
            }
            function E(e) {
                throw new y('internal-error', 'Internal error: ' + e);
            }
            var C = { RAW: 'raw', BASE64: 'base64', BASE64URL: 'base64url', DATA_URL: 'data_url' },
                A = function (e, t) {
                    (this.data = e), (this.contentType = t || null);
                };
            function I(e, t) {
                switch (e) {
                    case C.RAW:
                        return new A(j(t));
                    case C.BASE64:
                    case C.BASE64URL:
                        return new A(q(e, t));
                    case C.DATA_URL:
                        return new A(
                            (function (e) {
                                e = new L(e);
                                return e.base64
                                    ? q(C.BASE64, e.rest)
                                    : (function (e) {
                                          var t;
                                          try {
                                              t = decodeURIComponent(e);
                                          } catch (e) {
                                              throw U(C.DATA_URL, 'Malformed data URL.');
                                          }
                                          return j(t);
                                      })(e.rest);
                            })(t),
                            new L(t).contentType,
                        );
                }
                throw k();
            }
            function j(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var n = e.charCodeAt(r);
                    n <= 127
                        ? t.push(n)
                        : n <= 2047
                        ? t.push(192 | (n >> 6), 128 | (63 & n))
                        : 55296 == (64512 & n)
                        ? r < e.length - 1 && 56320 == (64512 & e.charCodeAt(r + 1))
                            ? ((n = 65536 | ((1023 & n) << 10) | (1023 & e.charCodeAt(++r))),
                              t.push(240 | (n >> 18), 128 | ((n >> 12) & 63), 128 | ((n >> 6) & 63), 128 | (63 & n)))
                            : t.push(239, 191, 189)
                        : 56320 == (64512 & n)
                        ? t.push(239, 191, 189)
                        : t.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n));
                }
                return new Uint8Array(t);
            }
            function q(t, e) {
                switch (t) {
                    case C.BASE64:
                        var r = -1 !== e.indexOf('-'),
                            n = -1 !== e.indexOf('_');
                        if (r || n)
                            throw U(t, "Invalid character '" + (r ? '-' : '_') + "' found: is it base64url encoded?");
                        break;
                    case C.BASE64URL:
                        (n = -1 !== e.indexOf('+')), (r = -1 !== e.indexOf('/'));
                        if (n || r)
                            throw U(t, "Invalid character '" + (n ? '+' : '/') + "' found: is it base64 encoded?");
                        e = e.replace(/-/g, '+').replace(/_/g, '/');
                }
                var o;
                try {
                    o = atob(e);
                } catch (e) {
                    throw U(t, 'Invalid character found');
                }
                for (var i = new Uint8Array(o.length), a = 0; a < o.length; a++) i[a] = o.charCodeAt(a);
                return i;
            }
            var L = function (e) {
                var t;
                if (((this.base64 = !1), (this.contentType = null) === (t = e.match(/^data:([^,]+)?,/))))
                    throw U(C.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
                var r,
                    n = t[1] || null;
                null != n &&
                    ((this.base64 =
                        ((r = ';base64'), (t = n).length >= r.length && t.substring(t.length - r.length) === r)),
                    (this.contentType = this.base64 ? n.substring(0, n.length - ';base64'.length) : n)),
                    (this.rest = e.substring(e.indexOf(',') + 1));
            };
            var N,
                M,
                B = { STATE_CHANGED: 'state_changed' },
                D = { RUNNING: 'running', PAUSED: 'paused', SUCCESS: 'success', CANCELED: 'canceled', ERROR: 'error' };
            function z(e) {
                switch (e) {
                    case 'running':
                    case 'pausing':
                    case 'canceling':
                        return D.RUNNING;
                    case 'paused':
                        return D.PAUSED;
                    case 'success':
                        return D.SUCCESS;
                    case 'canceled':
                        return D.CANCELED;
                    case 'error':
                    default:
                        return D.ERROR;
                }
            }
            ((M = N = N || {})[(M.NO_ERROR = 0)] = 'NO_ERROR'),
                (M[(M.NETWORK_ERROR = 1)] = 'NETWORK_ERROR'),
                (M[(M.ABORT = 2)] = 'ABORT');
            var F =
                ((H.prototype.send = function (e, t, r, n) {
                    if (this.sent_) throw E('cannot .send() more than once');
                    if (((this.sent_ = !0), this.xhr_.open(t, e, !0), void 0 !== n))
                        for (var o in n) n.hasOwnProperty(o) && this.xhr_.setRequestHeader(o, n[o].toString());
                    return void 0 !== r ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_;
                }),
                (H.prototype.getErrorCode = function () {
                    if (!this.sent_) throw E('cannot .getErrorCode() before sending');
                    return this.errorCode_;
                }),
                (H.prototype.getStatus = function () {
                    if (!this.sent_) throw E('cannot .getStatus() before sending');
                    try {
                        return this.xhr_.status;
                    } catch (e) {
                        return -1;
                    }
                }),
                (H.prototype.getResponseText = function () {
                    if (!this.sent_) throw E('cannot .getResponseText() before sending');
                    return this.xhr_.responseText;
                }),
                (H.prototype.abort = function () {
                    this.xhr_.abort();
                }),
                (H.prototype.getResponseHeader = function (e) {
                    return this.xhr_.getResponseHeader(e);
                }),
                (H.prototype.addUploadProgressListener = function (e) {
                    null != this.xhr_.upload && this.xhr_.upload.addEventListener('progress', e);
                }),
                (H.prototype.removeUploadProgressListener = function (e) {
                    null != this.xhr_.upload && this.xhr_.upload.removeEventListener('progress', e);
                }),
                H);
            function H() {
                var t = this;
                (this.sent_ = !1),
                    (this.xhr_ = new XMLHttpRequest()),
                    (this.errorCode_ = N.NO_ERROR),
                    (this.sendPromise_ = new Promise(function (e) {
                        t.xhr_.addEventListener('abort', function () {
                            (t.errorCode_ = N.ABORT), e(t);
                        }),
                            t.xhr_.addEventListener('error', function () {
                                (t.errorCode_ = N.NETWORK_ERROR), e(t);
                            }),
                            t.xhr_.addEventListener('load', function () {
                                e(t);
                            });
                    }));
            }
            var X =
                ((G.prototype.createXhrIo = function () {
                    return new F();
                }),
                G);
            function G() {}
            function W(e) {
                return 'string' == typeof e || e instanceof String;
            }
            function V(e) {
                return K() && e instanceof Blob;
            }
            function K() {
                return 'undefined' != typeof Blob;
            }
            function Z(e, t, r, n) {
                if (n < t) throw x("Invalid value for '" + e + "'. Expected " + t + ' or greater.');
                if (r < n) throw x("Invalid value for '" + e + "'. Expected " + r + ' or less.');
            }
            function $() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var r =
                    'undefined' != typeof BlobBuilder
                        ? BlobBuilder
                        : 'undefined' != typeof WebKitBlobBuilder
                        ? WebKitBlobBuilder
                        : void 0;
                if (void 0 !== r) {
                    for (var n = new r(), o = 0; o < e.length; o++) n.append(e[o]);
                    return n.getBlob();
                }
                if (K()) return new Blob(e);
                throw new y('unsupported-environment', "This browser doesn't seem to support creating Blobs");
            }
            var Y =
                ((J.prototype.size = function () {
                    return this.size_;
                }),
                (J.prototype.type = function () {
                    return this.type_;
                }),
                (J.prototype.slice = function (e, t) {
                    if (V(this.data_)) {
                        var r = this.data_,
                            n =
                                ((o = e),
                                (n = t),
                                (r = r).webkitSlice
                                    ? r.webkitSlice(o, n)
                                    : r.mozSlice
                                    ? r.mozSlice(o, n)
                                    : r.slice
                                    ? r.slice(o, n)
                                    : null);
                        return null === n ? null : new J(n);
                    }
                    var o, n;
                    return new J(new Uint8Array(this.data_.buffer, e, t - e), !0);
                }),
                (J.getBlob = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    if (K()) {
                        var r = e.map(function (e) {
                            return e instanceof J ? e.data_ : e;
                        });
                        return new J($.apply(null, r));
                    }
                    var r = e.map(function (e) {
                            return W(e) ? I(C.RAW, e).data : e.data_;
                        }),
                        n = 0;
                    r.forEach(function (e) {
                        n += e.byteLength;
                    });
                    var o = new Uint8Array(n),
                        i = 0;
                    return (
                        r.forEach(function (e) {
                            for (var t = 0; t < e.length; t++) o[i++] = e[t];
                        }),
                        new J(o, !0)
                    );
                }),
                (J.prototype.uploadData = function () {
                    return this.data_;
                }),
                J);
            function J(e, t) {
                var r = 0,
                    n = '';
                V(e)
                    ? ((r = (this.data_ = e).size), (n = e.type))
                    : e instanceof ArrayBuffer
                    ? (t
                          ? (this.data_ = new Uint8Array(e))
                          : ((this.data_ = new Uint8Array(e.byteLength)), this.data_.set(new Uint8Array(e))),
                      (r = this.data_.length))
                    : e instanceof Uint8Array &&
                      (t ? (this.data_ = e) : ((this.data_ = new Uint8Array(e.length)), this.data_.set(e)),
                      (r = e.length)),
                    (this.size_ = r),
                    (this.type_ = n);
            }
            var Q =
                (Object.defineProperty(ee.prototype, 'path', {
                    get: function () {
                        return this.path_;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(ee.prototype, 'isRoot', {
                    get: function () {
                        return 0 === this.path.length;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (ee.prototype.fullServerUrl = function () {
                    var e = encodeURIComponent;
                    return '/b/' + e(this.bucket) + '/o/' + e(this.path);
                }),
                (ee.prototype.bucketOnlyServerUrl = function () {
                    return '/b/' + encodeURIComponent(this.bucket) + '/o';
                }),
                (ee.makeFromBucketSpec = function (t) {
                    var e;
                    try {
                        e = ee.makeFromUrl(t);
                    } catch (e) {
                        return new ee(t, '');
                    }
                    if ('' === e.path) return e;
                    throw new y('invalid-default-bucket', "Invalid default bucket '" + t + "'.");
                }),
                (ee.makeFromUrl = function (e) {
                    var t = null,
                        r = '([A-Za-z0-9.\\-_]+)';
                    var n = new RegExp('^gs://' + r + '(/(.*))?$', 'i');
                    function o(e) {
                        e.path_ = decodeURIComponent(e.path);
                    }
                    for (
                        var i = v.replace(/[.]/g, '\\.'),
                            a = [
                                {
                                    regex: n,
                                    indices: { bucket: 1, path: 3 },
                                    postModify: function (e) {
                                        '/' === e.path.charAt(e.path.length - 1) && (e.path_ = e.path_.slice(0, -1));
                                    },
                                },
                                {
                                    regex: new RegExp(
                                        '^https?://' + i + '/v[A-Za-z0-9_]+/b/' + r + '/o(/([^?#]*).*)?$',
                                        'i',
                                    ),
                                    indices: { bucket: 1, path: 3 },
                                    postModify: o,
                                },
                                {
                                    regex: new RegExp(
                                        '^https?://(?:storage.googleapis.com|storage.cloud.google.com)/' +
                                            r +
                                            '/([^?#]*)',
                                        'i',
                                    ),
                                    indices: { bucket: 1, path: 2 },
                                    postModify: o,
                                },
                            ],
                            s = 0;
                        s < a.length;
                        s++
                    ) {
                        var u = a[s],
                            c = u.regex.exec(e);
                        if (c) {
                            t = new ee(c[u.indices.bucket], c[u.indices.path] || '');
                            u.postModify(t);
                            break;
                        }
                    }
                    if (null == t) throw new y('invalid-url', "Invalid URL '" + e + "'.");
                    return t;
                }),
                ee);
            function ee(e, t) {
                (this.bucket = e), (this.path_ = t);
            }
            function te(e) {
                var t, r;
                try {
                    t = JSON.parse(e);
                } catch (e) {
                    return null;
                }
                return 'object' != typeof (r = t) || Array.isArray(r) ? null : t;
            }
            function re(e) {
                var t = e.lastIndexOf('/', e.length - 2);
                return -1 === t ? e : e.slice(t + 1);
            }
            function ne(e) {
                return 'https://' + v + '/v0' + e;
            }
            function oe(e) {
                var t,
                    r = encodeURIComponent,
                    n = '?';
                for (t in e) e.hasOwnProperty(t) && (n = n + (r(t) + '=' + r(e[t])) + '&');
                return (n = n.slice(0, -1));
            }
            function ie(e, t) {
                return t;
            }
            var ae = function (e, t, r, n) {
                    (this.server = e), (this.local = t || e), (this.writable = !!r), (this.xform = n || ie);
                },
                se = null;
            function ue() {
                if (se) return se;
                var e = [];
                e.push(new ae('bucket')),
                    e.push(new ae('generation')),
                    e.push(new ae('metageneration')),
                    e.push(new ae('name', 'fullPath', !0));
                var t = new ae('name');
                (t.xform = function (e, t) {
                    return !W((t = t)) || t.length < 2 ? t : re(t);
                }),
                    e.push(t);
                t = new ae('size');
                return (
                    (t.xform = function (e, t) {
                        return void 0 !== t ? Number(t) : t;
                    }),
                    e.push(t),
                    e.push(new ae('timeCreated')),
                    e.push(new ae('updated')),
                    e.push(new ae('md5Hash', null, !0)),
                    e.push(new ae('cacheControl', null, !0)),
                    e.push(new ae('contentDisposition', null, !0)),
                    e.push(new ae('contentEncoding', null, !0)),
                    e.push(new ae('contentLanguage', null, !0)),
                    e.push(new ae('contentType', null, !0)),
                    e.push(new ae('metadata', 'customMetadata', !0)),
                    (se = e)
                );
            }
            function ce(r, n) {
                Object.defineProperty(r, 'ref', {
                    get: function () {
                        var e = r.bucket,
                            t = r.fullPath,
                            t = new Q(e, t);
                        return n._makeStorageReference(t);
                    },
                });
            }
            function le(e, t, r) {
                t = te(t);
                if (null === t) return null;
                return (function (e, t, r) {
                    for (var n = { type: 'file' }, o = r.length, i = 0; i < o; i++) {
                        var a = r[i];
                        n[a.local] = a.xform(n, t[a.server]);
                    }
                    return ce(n, e), n;
                })(e, t, r);
            }
            function he(e, t) {
                for (var r = {}, n = t.length, o = 0; o < n; o++) {
                    var i = t[o];
                    i.writable && (r[i.server] = e[i.local]);
                }
                return JSON.stringify(r);
            }
            var pe = 'prefixes',
                fe = 'items';
            function de(e, t, r) {
                r = te(r);
                if (null === r) return null;
                return (function (e, t, r) {
                    var n = { prefixes: [], items: [], nextPageToken: r.nextPageToken };
                    if (r[pe])
                        for (var o = 0, i = r[pe]; o < i.length; o++) {
                            var a = i[o].replace(/\/$/, ''),
                                s = e._makeStorageReference(new Q(t, a));
                            n.prefixes.push(s);
                        }
                    if (r[fe])
                        for (var u = 0, c = r[fe]; u < c.length; u++) {
                            var l = c[u],
                                s = e._makeStorageReference(new Q(t, l.name));
                            n.items.push(s);
                        }
                    return n;
                })(e, t, r);
            }
            var _e = function (e, t, r, n) {
                (this.url = e),
                    (this.method = t),
                    (this.handler = r),
                    (this.timeout = n),
                    (this.urlParams = {}),
                    (this.headers = {}),
                    (this.body = null),
                    (this.errorHandler = null),
                    (this.progressCallback = null),
                    (this.successCodes = [200]),
                    (this.additionalRetryCodes = []);
            };
            function ge(e) {
                if (!e) throw k();
            }
            function be(r, n) {
                return function (e, t) {
                    return ge(null !== (t = le(r, t, n))), t;
                };
            }
            function ve(r, n) {
                return function (e, t) {
                    return ge(null !== (t = de(r, n, t))), t;
                };
            }
            function me(n, o) {
                return function (e, t) {
                    var r = le(n, t, o);
                    return (
                        ge(null !== r),
                        (function (n, e) {
                            if (null === (e = te(e))) return null;
                            if (!W(e.downloadTokens)) return null;
                            if (0 === (e = e.downloadTokens).length) return null;
                            var o = encodeURIComponent;
                            return e.split(',').map(function (e) {
                                var t = n.bucket,
                                    r = n.fullPath;
                                return ne('/b/' + o(t) + '/o/' + o(r)) + oe({ alt: 'media', token: e });
                            })[0];
                        })(r, t)
                    );
                };
            }
            function ye(o) {
                return function (e, t) {
                    var r,
                        n =
                            401 === e.getStatus()
                                ? new y(
                                      'unauthenticated',
                                      'User is not authenticated, please authenticate using Firebase Authentication and try again.',
                                  )
                                : 402 === e.getStatus()
                                ? ((r = o.bucket),
                                  new y(
                                      'quota-exceeded',
                                      "Quota for bucket '" +
                                          r +
                                          "' exceeded, please view quota on https://firebase.google.com/pricing/.",
                                  ))
                                : 403 === e.getStatus()
                                ? ((n = o.path),
                                  new y('unauthorized', "User does not have permission to access '" + n + "'."))
                                : t;
                    return (n.serverResponse = t.serverResponse), n;
                };
            }
            function we(n) {
                var o = ye(n);
                return function (e, t) {
                    var r = o(e, t);
                    return (
                        404 === e.getStatus() &&
                            ((e = n.path), (r = new y('object-not-found', "Object '" + e + "' does not exist."))),
                        (r.serverResponse = t.serverResponse),
                        r
                    );
                };
            }
            function Re(e, t, r) {
                var n = ne(t.fullServerUrl()),
                    o = e.maxOperationRetryTime,
                    o = new _e(n, 'GET', be(e, r), o);
                return (o.errorHandler = we(t)), o;
            }
            function ke(e, t, r) {
                r = Object.assign({}, r);
                return (
                    (r.fullPath = e.path),
                    (r.size = t.size()),
                    r.contentType ||
                        (r.contentType =
                            ((e = t), ((t = null) && t.contentType) || (e && e.type()) || 'application/octet-stream')),
                    r
                );
            }
            function Te(e, t, r, n, o) {
                var i = t.bucketOnlyServerUrl(),
                    a = { 'X-Goog-Upload-Protocol': 'multipart' };
                var s = (function () {
                    for (var e = '', t = 0; t < 2; t++) e += Math.random().toString().slice(2);
                    return e;
                })();
                a['Content-Type'] = 'multipart/related; boundary=' + s;
                var u = ke(t, n, o),
                    o =
                        '--' +
                        s +
                        '\r\nContent-Type: application/json; charset=utf-8\r\n\r\n' +
                        he(u, r) +
                        '\r\n--' +
                        s +
                        '\r\nContent-Type: ' +
                        u.contentType +
                        '\r\n\r\n',
                    s = '\r\n--' + s + '--',
                    n = Y.getBlob(o, n, s);
                if (null === n) throw O();
                (s = { name: u.fullPath }),
                    (u = ne(i)),
                    (i = e.maxUploadRetryTime),
                    (i = new _e(u, 'POST', be(e, r), i));
                return (i.urlParams = s), (i.headers = a), (i.body = n.uploadData()), (i.errorHandler = ye(t)), i;
            }
            var Oe = function (e, t, r, n) {
                (this.current = e), (this.total = t), (this.finalized = !!r), (this.metadata = n || null);
            };
            function xe(e, t) {
                var r = null;
                try {
                    r = e.getResponseHeader('X-Goog-Upload-Status');
                } catch (e) {
                    ge(!1);
                }
                return ge(!!r && -1 !== (t || ['active']).indexOf(r)), r;
            }
            function Pe(e, t, r, n, o) {
                var i = t.bucketOnlyServerUrl(),
                    a = ke(t, n, o),
                    o = { name: a.fullPath },
                    i = ne(i),
                    n = {
                        'X-Goog-Upload-Protocol': 'resumable',
                        'X-Goog-Upload-Command': 'start',
                        'X-Goog-Upload-Header-Content-Length': n.size(),
                        'X-Goog-Upload-Header-Content-Type': a.contentType,
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    r = he(a, r),
                    e = e.maxUploadRetryTime;
                e = new _e(
                    i,
                    'POST',
                    function (e) {
                        var t;
                        xe(e);
                        try {
                            t = e.getResponseHeader('X-Goog-Upload-URL');
                        } catch (e) {
                            ge(!1);
                        }
                        return ge(W(t)), t;
                    },
                    e,
                );
                return (e.urlParams = o), (e.headers = n), (e.body = r), (e.errorHandler = ye(t)), e;
            }
            function Se(e, t, r, o) {
                (e = e.maxUploadRetryTime),
                    (e = new _e(
                        r,
                        'POST',
                        function (e) {
                            var t = xe(e, ['active', 'final']),
                                r = null;
                            try {
                                r = e.getResponseHeader('X-Goog-Upload-Size-Received');
                            } catch (e) {
                                ge(!1);
                            }
                            r || ge(!1);
                            var n = Number(r);
                            return ge(!isNaN(n)), new Oe(n, o.size(), 'final' === t);
                        },
                        e,
                    ));
                return (e.headers = { 'X-Goog-Upload-Command': 'query' }), (e.errorHandler = ye(t)), e;
            }
            function Ue(e, i, t, a, r, s, n, o) {
                var u = new Oe(0, 0);
                if (
                    (n ? ((u.current = n.current), (u.total = n.total)) : ((u.current = 0), (u.total = a.size())),
                    a.size() !== u.total)
                )
                    throw new y(
                        'server-file-wrong-size',
                        'Server recorded incorrect upload file size, please retry the upload.',
                    );
                var c = u.total - u.current,
                    l = c;
                0 < r && (l = Math.min(l, r));
                (n = u.current),
                    (r = n + l),
                    (c = {
                        'X-Goog-Upload-Command': l === c ? 'upload, finalize' : 'upload',
                        'X-Goog-Upload-Offset': u.current,
                    }),
                    (n = a.slice(n, r));
                if (null === n) throw O();
                (r = i.maxUploadRetryTime),
                    (r = new _e(
                        t,
                        'POST',
                        function (e, t) {
                            var r = xe(e, ['active', 'final']),
                                n = u.current + l,
                                o = a.size(),
                                t = 'final' === r ? be(i, s)(e, t) : null;
                            return new Oe(n, o, 'final' === r, t);
                        },
                        r,
                    ));
                return (
                    (r.headers = c),
                    (r.body = n.uploadData()),
                    (r.progressCallback = o || null),
                    (r.errorHandler = ye(e)),
                    r
                );
            }
            var Ee = function (e, t, r) {
                'function' == typeof e || null != t || null != r
                    ? ((this.next = e), (this.error = t), (this.complete = r))
                    : ((e = e), (this.next = e.next), (this.error = e.error), (this.complete = e.complete));
            };
            function Ce(r) {
                return function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    Promise.resolve().then(function () {
                        return r.apply(void 0, e);
                    });
                };
            }
            var Ae =
                ((Ie.prototype._makeProgressCallback = function () {
                    var t = this,
                        r = this._transferred;
                    return function (e) {
                        return t._updateProgress(r + e);
                    };
                }),
                (Ie.prototype._shouldDoResumable = function (e) {
                    return 262144 < e.size();
                }),
                (Ie.prototype._start = function () {
                    'running' === this._state &&
                        void 0 === this._request &&
                        (this._resumable
                            ? void 0 === this._uploadUrl
                                ? this._createResumable()
                                : this._needToFetchStatus
                                ? this._fetchStatus()
                                : this._needToFetchMetadata
                                ? this._fetchMetadata()
                                : this._continueUpload()
                            : this._oneShotUpload());
                }),
                (Ie.prototype._resolveToken = function (t) {
                    var r = this;
                    this._ref.storage._getAuthToken().then(function (e) {
                        switch (r._state) {
                            case 'running':
                                t(e);
                                break;
                            case 'canceling':
                                r._transition('canceled');
                                break;
                            case 'pausing':
                                r._transition('paused');
                        }
                    });
                }),
                (Ie.prototype._createResumable = function () {
                    var r = this;
                    this._resolveToken(function (e) {
                        var t = Pe(r._ref.storage, r._ref._location, r._mappings, r._blob, r._metadata),
                            e = r._ref.storage._makeRequest(t, e);
                        (r._request = e).getPromise().then(function (e) {
                            (r._request = void 0),
                                (r._uploadUrl = e),
                                (r._needToFetchStatus = !1),
                                r.completeTransitions_();
                        }, r._errorHandler);
                    });
                }),
                (Ie.prototype._fetchStatus = function () {
                    var r = this,
                        n = this._uploadUrl;
                    this._resolveToken(function (e) {
                        var t = Se(r._ref.storage, r._ref._location, n, r._blob),
                            e = r._ref.storage._makeRequest(t, e);
                        (r._request = e).getPromise().then(function (e) {
                            (r._request = void 0),
                                r._updateProgress(e.current),
                                (r._needToFetchStatus = !1),
                                e.finalized && (r._needToFetchMetadata = !0),
                                r.completeTransitions_();
                        }, r._errorHandler);
                    });
                }),
                (Ie.prototype._continueUpload = function () {
                    var r = this,
                        n = 262144 * this._chunkMultiplier,
                        o = new Oe(this._transferred, this._blob.size()),
                        i = this._uploadUrl;
                    this._resolveToken(function (e) {
                        var t;
                        try {
                            t = Ue(
                                r._ref._location,
                                r._ref.storage,
                                i,
                                r._blob,
                                n,
                                r._mappings,
                                o,
                                r._makeProgressCallback(),
                            );
                        } catch (e) {
                            return (r._error = e), void r._transition('error');
                        }
                        e = r._ref.storage._makeRequest(t, e);
                        (r._request = e).getPromise().then(function (e) {
                            r._increaseMultiplier(),
                                (r._request = void 0),
                                r._updateProgress(e.current),
                                e.finalized
                                    ? ((r._metadata = e.metadata), r._transition('success'))
                                    : r.completeTransitions_();
                        }, r._errorHandler);
                    });
                }),
                (Ie.prototype._increaseMultiplier = function () {
                    262144 * this._chunkMultiplier < 33554432 && (this._chunkMultiplier *= 2);
                }),
                (Ie.prototype._fetchMetadata = function () {
                    var r = this;
                    this._resolveToken(function (e) {
                        var t = Re(r._ref.storage, r._ref._location, r._mappings),
                            e = r._ref.storage._makeRequest(t, e);
                        (r._request = e).getPromise().then(function (e) {
                            (r._request = void 0), (r._metadata = e), r._transition('success');
                        }, r._metadataErrorHandler);
                    });
                }),
                (Ie.prototype._oneShotUpload = function () {
                    var r = this;
                    this._resolveToken(function (e) {
                        var t = Te(r._ref.storage, r._ref._location, r._mappings, r._blob, r._metadata),
                            e = r._ref.storage._makeRequest(t, e);
                        (r._request = e).getPromise().then(function (e) {
                            (r._request = void 0),
                                (r._metadata = e),
                                r._updateProgress(r._blob.size()),
                                r._transition('success');
                        }, r._errorHandler);
                    });
                }),
                (Ie.prototype._updateProgress = function (e) {
                    var t = this._transferred;
                    (this._transferred = e), this._transferred !== t && this._notifyObservers();
                }),
                (Ie.prototype._transition = function (e) {
                    if (this._state !== e)
                        switch (e) {
                            case 'canceling':
                            case 'pausing':
                                (this._state = e), void 0 !== this._request && this._request.cancel();
                                break;
                            case 'running':
                                var t = 'paused' === this._state;
                                (this._state = e), t && (this._notifyObservers(), this._start());
                                break;
                            case 'paused':
                                (this._state = e), this._notifyObservers();
                                break;
                            case 'canceled':
                                (this._error = T()), (this._state = e), this._notifyObservers();
                                break;
                            case 'error':
                            case 'success':
                                (this._state = e), this._notifyObservers();
                        }
                }),
                (Ie.prototype.completeTransitions_ = function () {
                    switch (this._state) {
                        case 'pausing':
                            this._transition('paused');
                            break;
                        case 'canceling':
                            this._transition('canceled');
                            break;
                        case 'running':
                            this._start();
                    }
                }),
                Object.defineProperty(Ie.prototype, 'snapshot', {
                    get: function () {
                        var e = z(this._state);
                        return {
                            bytesTransferred: this._transferred,
                            totalBytes: this._blob.size(),
                            state: e,
                            metadata: this._metadata,
                            task: this,
                            ref: this._ref,
                        };
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (Ie.prototype.on = function (e, t, r, n) {
                    var o = this,
                        i = new Ee(t, r, n);
                    return (
                        this._addObserver(i),
                        function () {
                            o._removeObserver(i);
                        }
                    );
                }),
                (Ie.prototype.then = function (e, t) {
                    return this._promise.then(e, t);
                }),
                (Ie.prototype.catch = function (e) {
                    return this.then(null, e);
                }),
                (Ie.prototype._addObserver = function (e) {
                    this._observers.push(e), this._notifyObserver(e);
                }),
                (Ie.prototype._removeObserver = function (e) {
                    e = this._observers.indexOf(e);
                    -1 !== e && this._observers.splice(e, 1);
                }),
                (Ie.prototype._notifyObservers = function () {
                    var t = this;
                    this._finishPromise(),
                        this._observers.slice().forEach(function (e) {
                            t._notifyObserver(e);
                        });
                }),
                (Ie.prototype._finishPromise = function () {
                    if (void 0 !== this._resolve) {
                        var e = !0;
                        switch (z(this._state)) {
                            case D.SUCCESS:
                                Ce(this._resolve.bind(null, this.snapshot))();
                                break;
                            case D.CANCELED:
                            case D.ERROR:
                                Ce(this._reject.bind(null, this._error))();
                                break;
                            default:
                                e = !1;
                        }
                        e && ((this._resolve = void 0), (this._reject = void 0));
                    }
                }),
                (Ie.prototype._notifyObserver = function (e) {
                    switch (z(this._state)) {
                        case D.RUNNING:
                        case D.PAUSED:
                            e.next && Ce(e.next.bind(e, this.snapshot))();
                            break;
                        case D.SUCCESS:
                            e.complete && Ce(e.complete.bind(e))();
                            break;
                        case D.CANCELED:
                        case D.ERROR:
                            e.error && Ce(e.error.bind(e, this._error))();
                            break;
                        default:
                            e.error && Ce(e.error.bind(e, this._error))();
                    }
                }),
                (Ie.prototype.resume = function () {
                    var e = 'paused' === this._state || 'pausing' === this._state;
                    return e && this._transition('running'), e;
                }),
                (Ie.prototype.pause = function () {
                    var e = 'running' === this._state;
                    return e && this._transition('pausing'), e;
                }),
                (Ie.prototype.cancel = function () {
                    var e = 'running' === this._state || 'pausing' === this._state;
                    return e && this._transition('canceling'), e;
                }),
                Ie);
            function Ie(e, t, r) {
                var n = this;
                void 0 === r && (r = null),
                    (this._transferred = 0),
                    (this._needToFetchStatus = !1),
                    (this._needToFetchMetadata = !1),
                    (this._observers = []),
                    (this._error = void 0),
                    (this._uploadUrl = void 0),
                    (this._request = void 0),
                    (this._chunkMultiplier = 1),
                    (this._resolve = void 0),
                    (this._reject = void 0),
                    (this._ref = e),
                    (this._blob = t),
                    (this._metadata = r),
                    (this._mappings = ue()),
                    (this._resumable = this._shouldDoResumable(this._blob)),
                    (this._state = 'running'),
                    (this._errorHandler = function (e) {
                        (n._request = void 0),
                            (n._chunkMultiplier = 1),
                            e._codeEquals('canceled')
                                ? ((n._needToFetchStatus = !0), n.completeTransitions_())
                                : ((n._error = e), n._transition('error'));
                    }),
                    (this._metadataErrorHandler = function (e) {
                        (n._request = void 0),
                            e._codeEquals('canceled')
                                ? n.completeTransitions_()
                                : ((n._error = e), n._transition('error'));
                    }),
                    (this._promise = new Promise(function (e, t) {
                        (n._resolve = e), (n._reject = t), n._start();
                    })),
                    this._promise.then(null, function () {});
            }
            var je =
                ((qe.prototype.toString = function () {
                    return 'gs://' + this._location.bucket + '/' + this._location.path;
                }),
                (qe.prototype._newRef = function (e, t) {
                    return new qe(e, t);
                }),
                Object.defineProperty(qe.prototype, 'root', {
                    get: function () {
                        var e = new Q(this._location.bucket, '');
                        return this._newRef(this._service, e);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(qe.prototype, 'bucket', {
                    get: function () {
                        return this._location.bucket;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(qe.prototype, 'fullPath', {
                    get: function () {
                        return this._location.path;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(qe.prototype, 'name', {
                    get: function () {
                        return re(this._location.path);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(qe.prototype, 'storage', {
                    get: function () {
                        return this._service;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(qe.prototype, 'parent', {
                    get: function () {
                        var e = (function (e) {
                            if (0 === e.length) return null;
                            var t = e.lastIndexOf('/');
                            return -1 === t ? '' : e.slice(0, t);
                        })(this._location.path);
                        if (null === e) return null;
                        e = new Q(this._location.bucket, e);
                        return new qe(this._service, e);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (qe.prototype._throwIfRoot = function (e) {
                    if ('' === this._location.path) throw S(e);
                }),
                qe);
            function qe(e, t) {
                (this._service = e), (this._location = t instanceof Q ? t : Q.makeFromUrl(t));
            }
            function Le(e) {
                var t = { prefixes: [], items: [] };
                return (function n(o, i, a) {
                    return r(this, void 0, void 0, function () {
                        var t, r;
                        return h(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return [4, Ne(o, { pageToken: a })];
                                case 1:
                                    return (
                                        (t = e.sent()),
                                        (r = i.prefixes).push.apply(r, t.prefixes),
                                        (r = i.items).push.apply(r, t.items),
                                        null == t.nextPageToken ? [3, 3] : [4, n(o, i, t.nextPageToken)]
                                    );
                                case 2:
                                    e.sent(), (e.label = 3);
                                case 3:
                                    return [2];
                            }
                        });
                    });
                })(e, t).then(function () {
                    return t;
                });
            }
            function Ne(c, l) {
                return r(this, void 0, void 0, function () {
                    var s, u;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return (
                                    null != l &&
                                        'number' == typeof l.maxResults &&
                                        Z('options.maxResults', 1, 1e3, l.maxResults),
                                    [4, c.storage._getAuthToken()]
                                );
                            case 1:
                                return (
                                    (s = e.sent()),
                                    (u = l || {}),
                                    (t = c.storage),
                                    (r = c._location),
                                    (n = '/'),
                                    (o = u.pageToken),
                                    (i = u.maxResults),
                                    (a = {}),
                                    r.isRoot ? (a.prefix = '') : (a.prefix = r.path + '/'),
                                    n && 0 < n.length && (a.delimiter = n),
                                    o && (a.pageToken = o),
                                    i && (a.maxResults = i),
                                    (o = ne(r.bucketOnlyServerUrl())),
                                    (i = t.maxOperationRetryTime),
                                    ((i = new _e(o, 'GET', ve(t, r.bucket), i)).urlParams = a),
                                    (i.errorHandler = ye(r)),
                                    [2, c.storage._makeRequest(i, s).getPromise()]
                                );
                        }
                        var t, r, n, o, i, a;
                    });
                });
            }
            function Me(u, c) {
                return r(this, void 0, void 0, function () {
                    var s;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return u._throwIfRoot('updateMetadata'), [4, u.storage._getAuthToken()];
                            case 1:
                                return (
                                    (s = e.sent()),
                                    (t = u.storage),
                                    (r = u._location),
                                    (n = c),
                                    (o = ue()),
                                    (i = ne(r.fullServerUrl())),
                                    (a = he(n, o)),
                                    (n = t.maxOperationRetryTime),
                                    ((n = new _e(i, 'PATCH', be(t, o), n)).headers = {
                                        'Content-Type': 'application/json; charset=utf-8',
                                    }),
                                    (n.body = a),
                                    (n.errorHandler = we(r)),
                                    [2, u.storage._makeRequest(n, s).getPromise()]
                                );
                        }
                        var t, r, n, o, i, a;
                    });
                });
            }
            function Be(s) {
                return r(this, void 0, void 0, function () {
                    var a;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return s._throwIfRoot('getDownloadURL'), [4, s.storage._getAuthToken()];
                            case 1:
                                return (
                                    (a = e.sent()),
                                    (t = s.storage),
                                    (r = s._location),
                                    (n = ue()),
                                    (o = ne(r.fullServerUrl())),
                                    (i = t.maxOperationRetryTime),
                                    ((i = new _e(o, 'GET', me(t, n), i)).errorHandler = we(r)),
                                    [
                                        2,
                                        s.storage
                                            ._makeRequest(i, a)
                                            .getPromise()
                                            .then(function (e) {
                                                if (null === e)
                                                    throw new y(
                                                        'no-download-url',
                                                        'The given file does not have any download URLs.',
                                                    );
                                                return e;
                                            }),
                                    ]
                                );
                        }
                        var t, r, n, o, i;
                    });
                });
            }
            function De(i) {
                return r(this, void 0, void 0, function () {
                    var o;
                    return h(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return i._throwIfRoot('deleteObject'), [4, i.storage._getAuthToken()];
                            case 1:
                                return (
                                    (o = e.sent()),
                                    (t = i.storage),
                                    (r = i._location),
                                    (n = ne(r.fullServerUrl())),
                                    (t = t.maxOperationRetryTime),
                                    ((t = new _e(n, 'DELETE', function (e, t) {}, t)).successCodes = [200, 204]),
                                    (t.errorHandler = we(r)),
                                    [2, i.storage._makeRequest(t, o).getPromise()]
                                );
                        }
                        var t, r, n;
                    });
                });
            }
            function ze(e, t) {
                var r,
                    t =
                        ((r = e._location.path),
                        (t = (t = t)
                            .split('/')
                            .filter(function (e) {
                                return 0 < e.length;
                            })
                            .join('/')),
                        0 === r.length ? t : r + '/' + t),
                    t = new Q(e._location.bucket, t);
                return new je(e.storage, t);
            }
            var Fe =
                (Object.defineProperty(He.prototype, 'bytesTransferred', {
                    get: function () {
                        return this._delegate.bytesTransferred;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(He.prototype, 'metadata', {
                    get: function () {
                        return this._delegate.metadata;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(He.prototype, 'state', {
                    get: function () {
                        return this._delegate.state;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(He.prototype, 'totalBytes', {
                    get: function () {
                        return this._delegate.totalBytes;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                He);
            function He(e, t, r) {
                (this._delegate = e), (this.task = t), (this.ref = r);
            }
            var Xe =
                (Object.defineProperty(Ge.prototype, 'snapshot', {
                    get: function () {
                        return new Fe(this._delegate.snapshot, this, this._ref);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (Ge.prototype.then = function (t, e) {
                    var r = this;
                    return this._delegate.then(function (e) {
                        if (t) return t(new Fe(e, r, r._ref));
                    }, e);
                }),
                (Ge.prototype.on = function (e, t, r, n) {
                    var o = this,
                        i = void 0;
                    return (
                        t &&
                            (i =
                                'function' == typeof t
                                    ? function (e) {
                                          return t(new Fe(e, o, o._ref));
                                      }
                                    : {
                                          next: t.next
                                              ? function (e) {
                                                    return t.next(new Fe(e, o, o._ref));
                                                }
                                              : void 0,
                                          complete: t.complete || void 0,
                                          error: t.error || void 0,
                                      }),
                        this._delegate.on(e, i, r || void 0, n || void 0)
                    );
                }),
                Ge);
            function Ge(e, t) {
                (this._delegate = e),
                    (this._ref = t),
                    (this.cancel = this._delegate.cancel.bind(this._delegate)),
                    (this.catch = this._delegate.catch.bind(this._delegate)),
                    (this.pause = this._delegate.pause.bind(this._delegate)),
                    (this.resume = this._delegate.resume.bind(this._delegate));
            }
            var We =
                (Object.defineProperty(Ve.prototype, 'prefixes', {
                    get: function () {
                        var t = this;
                        return this._delegate.prefixes.map(function (e) {
                            return new Ke(e, t._service);
                        });
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(Ve.prototype, 'items', {
                    get: function () {
                        var t = this;
                        return this._delegate.items.map(function (e) {
                            return new Ke(e, t._service);
                        });
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(Ve.prototype, 'nextPageToken', {
                    get: function () {
                        return this._delegate.nextPageToken || null;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Ve);
            function Ve(e, t) {
                (this._delegate = e), (this._service = t);
            }
            var Ke =
                (Object.defineProperty(Ze.prototype, 'name', {
                    get: function () {
                        return this._delegate.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(Ze.prototype, 'bucket', {
                    get: function () {
                        return this._delegate.bucket;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(Ze.prototype, 'fullPath', {
                    get: function () {
                        return this._delegate.fullPath;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (Ze.prototype.toString = function () {
                    return this._delegate.toString();
                }),
                (Ze.prototype.child = function (e) {
                    return new Ze(ze(this._delegate, e), this.storage);
                }),
                Object.defineProperty(Ze.prototype, 'root', {
                    get: function () {
                        return new Ze(this._delegate.root, this.storage);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(Ze.prototype, 'parent', {
                    get: function () {
                        var e = this._delegate.parent;
                        return null == e ? null : new Ze(e, this.storage);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (Ze.prototype.put = function (e, t) {
                    return (
                        this._throwIfRoot('put'),
                        new Xe(
                            ((r = this._delegate),
                            (e = e),
                            (t = t),
                            r._throwIfRoot('uploadBytesResumable'),
                            new Ae(r, new Y(e), t)),
                            this,
                        )
                    );
                    var r;
                }),
                (Ze.prototype.putString = function (e, t, r) {
                    void 0 === t && (t = C.RAW), this._throwIfRoot('putString');
                    (e = I(t, e)), (r = i({}, r));
                    return (
                        null == r.contentType && null != e.contentType && (r.contentType = e.contentType),
                        new Xe(new Ae(this._delegate, new Y(e.data, !0), r), this)
                    );
                }),
                (Ze.prototype.listAll = function () {
                    var t = this;
                    return Le(this._delegate).then(function (e) {
                        return new We(e, t.storage);
                    });
                }),
                (Ze.prototype.list = function (e) {
                    var t = this;
                    return Ne(this._delegate, e).then(function (e) {
                        return new We(e, t.storage);
                    });
                }),
                (Ze.prototype.getMetadata = function () {
                    return (function (n) {
                        return r(this, void 0, void 0, function () {
                            var t, r;
                            return h(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return n._throwIfRoot('getMetadata'), [4, n.storage._getAuthToken()];
                                    case 1:
                                        return (
                                            (t = e.sent()),
                                            (r = Re(n.storage, n._location, ue())),
                                            [2, n.storage._makeRequest(r, t).getPromise()]
                                        );
                                }
                            });
                        });
                    })(this._delegate);
                }),
                (Ze.prototype.updateMetadata = function (e) {
                    return Me(this._delegate, e);
                }),
                (Ze.prototype.getDownloadURL = function () {
                    return Be(this._delegate);
                }),
                (Ze.prototype.delete = function () {
                    return this._throwIfRoot('delete'), De(this._delegate);
                }),
                (Ze.prototype._throwIfRoot = function (e) {
                    if ('' === this._delegate._location.path) throw S(e);
                }),
                Ze);
            function Ze(e, t) {
                (this._delegate = e), (this.storage = t);
            }
            var $e =
                ((Ye.prototype.getPromise = function () {
                    return this.promise_;
                }),
                (Ye.prototype.cancel = function (e) {}),
                Ye);
            function Ye(e) {
                this.promise_ = Promise.reject(e);
            }
            var Je =
                ((Qe.prototype.start_ = function () {
                    var t,
                        r,
                        e,
                        n,
                        o,
                        i,
                        a,
                        s,
                        u,
                        c = this;
                    function l(e, t) {
                        var r,
                            n = c.resolve_,
                            o = c.reject_,
                            i = t.xhr;
                        if (t.wasSuccessCode)
                            try {
                                var a = c.callback_(i, i.getResponseText());
                                void 0 !== a ? n(a) : n();
                            } catch (e) {
                                o(e);
                            }
                        else
                            null !== i
                                ? (((r = k()).serverResponse = i.getResponseText()),
                                  c.errorCallback_ ? o(c.errorCallback_(i, r)) : o(r))
                                : t.canceled
                                ? o((r = (c.appDelete_ ? P : T)()))
                                : o(
                                      (r = new y(
                                          'retry-limit-exceeded',
                                          'Max retry time for operation exceeded, please try again.',
                                      )),
                                  );
                    }
                    function h() {
                        return 2 === a;
                    }
                    function p() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        s || ((s = !0), r.apply(null, e));
                    }
                    function f(e) {
                        o = setTimeout(function () {
                            (o = null), t(d, h());
                        }, e);
                    }
                    function d(e) {
                        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        s ||
                            (e || h() || i
                                ? p.call.apply(p, g([null, e], t))
                                : (n < 64 && (n *= 2), f(1 === a ? ((a = 2), 0) : 1e3 * (n + Math.random()))));
                    }
                    function _(e) {
                        u || ((u = !0), s || (null !== o ? (e || (a = 2), clearTimeout(o), f(0)) : e || (a = 1)));
                    }
                    this.canceled_
                        ? l(0, new et(!1, null, !0))
                        : (this.backoffId_ =
                              ((t = function (n, e) {
                                  function o(e) {
                                      var t = e.loaded,
                                          e = e.lengthComputable ? e.total : -1;
                                      null !== c.progressCallback_ && c.progressCallback_(t, e);
                                  }
                                  e
                                      ? n(!1, new et(!1, null, !0))
                                      : ((e = c.pool_.createXhrIo()),
                                        (c.pendingXhr_ = e),
                                        null !== c.progressCallback_ && e.addUploadProgressListener(o),
                                        e.send(c.url_, c.method_, c.body_, c.headers_).then(function (e) {
                                            null !== c.progressCallback_ && e.removeUploadProgressListener(o),
                                                (c.pendingXhr_ = null);
                                            var t = e.getErrorCode() === N.NO_ERROR,
                                                r = e.getStatus();
                                            t && !c.isRetryStatusCode_(r)
                                                ? ((r = -1 !== c.successCodes_.indexOf(r)), n(!0, new et(r, e)))
                                                : ((e = e.getErrorCode() === N.ABORT), n(!1, new et(!1, null, e)));
                                        }));
                              }),
                              (r = l),
                              (e = this.timeout_),
                              (o = null),
                              (u = s = i = !(n = 1)),
                              f((a = 0)),
                              setTimeout(function () {
                                  (i = !0), _(!0);
                              }, e),
                              _));
                }),
                (Qe.prototype.getPromise = function () {
                    return this.promise_;
                }),
                (Qe.prototype.cancel = function (e) {
                    (this.canceled_ = !0),
                        (this.appDelete_ = e || !1),
                        null !== this.backoffId_ && (0, this.backoffId_)(!1),
                        null !== this.pendingXhr_ && this.pendingXhr_.abort();
                }),
                (Qe.prototype.isRetryStatusCode_ = function (e) {
                    var t = 500 <= e && e < 600,
                        r = -1 !== [408, 429].indexOf(e),
                        e = -1 !== this.additionalRetryCodes_.indexOf(e);
                    return t || r || e;
                }),
                Qe);
            function Qe(e, t, r, n, o, i, a, s, u, c, l) {
                var h = this;
                (this.pendingXhr_ = null),
                    (this.backoffId_ = null),
                    (this.canceled_ = !1),
                    (this.appDelete_ = !1),
                    (this.url_ = e),
                    (this.method_ = t),
                    (this.headers_ = r),
                    (this.body_ = n),
                    (this.successCodes_ = o.slice()),
                    (this.additionalRetryCodes_ = i.slice()),
                    (this.callback_ = a),
                    (this.errorCallback_ = s),
                    (this.progressCallback_ = c),
                    (this.timeout_ = u),
                    (this.pool_ = l),
                    (this.promise_ = new Promise(function (e, t) {
                        (h.resolve_ = e), (h.reject_ = t), h.start_();
                    }));
            }
            var et = function (e, t, r) {
                (this.wasSuccessCode = e), (this.xhr = t), (this.canceled = !!r);
            };
            function tt(e) {
                return /^[A-Za-z]+:\/\//.test(e);
            }
            function rt(e, t) {
                if (e instanceof ot) {
                    var r = e;
                    if (null == r._bucket)
                        throw new y(
                            'no-default-bucket',
                            "No default bucket found. Did you set the '" + m + "' property when initializing the app?",
                        );
                    r = new je(r, r._bucket);
                    return null != t ? rt(r, t) : r;
                }
                if (void 0 === t) return e;
                if (t.includes('..')) throw x('`path` param cannot contain ".."');
                return ze(e, t);
            }
            function nt(e, t) {
                if (t && tt(t)) {
                    if (e instanceof ot) return new je(e, t);
                    throw x('To use ref(service, url), the first argument must be a Storage instance.');
                }
                return rt(e, t);
            }
            var ot =
                (Object.defineProperty(it.prototype, 'maxUploadRetryTime', {
                    get: function () {
                        return this._maxUploadRetryTime;
                    },
                    set: function (e) {
                        Z('time', 0, Number.POSITIVE_INFINITY, e), (this._maxUploadRetryTime = e);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(it.prototype, 'maxOperationRetryTime', {
                    get: function () {
                        return this._maxOperationRetryTime;
                    },
                    set: function (e) {
                        Z('time', 0, Number.POSITIVE_INFINITY, e), (this._maxOperationRetryTime = e);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (it.prototype._getAuthToken = function () {
                    return r(this, void 0, void 0, function () {
                        var t;
                        return h(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    return (t = this._authProvider.getImmediate({ optional: !0 }))
                                        ? [4, t.getToken()]
                                        : [3, 2];
                                case 1:
                                    if (null !== (t = e.sent())) return [2, t.accessToken];
                                    e.label = 2;
                                case 2:
                                    return [2, null];
                            }
                        });
                    });
                }),
                (it.prototype._delete = function () {
                    return (
                        (this._deleted = !0),
                        this._requests.forEach(function (e) {
                            return e.cancel();
                        }),
                        this._requests.clear(),
                        Promise.resolve()
                    );
                }),
                (it.prototype._makeStorageReference = function (e) {
                    return new je(this, e);
                }),
                (it.prototype._makeRequest = function (e, t) {
                    var r = this;
                    if (this._deleted) return new $e(P());
                    var n,
                        o,
                        i,
                        a,
                        s,
                        u,
                        c =
                            ((n = e),
                            (o = this._appId),
                            (i = t),
                            (a = this._pool),
                            (s = this._firebaseVersion),
                            (u = oe(n.urlParams)),
                            (e = n.url + u),
                            (t = Object.assign({}, n.headers)),
                            (u = t),
                            (o = o) && (u['X-Firebase-GMPID'] = o),
                            (o = t),
                            null !== (i = i) && 0 < i.length && (o.Authorization = 'Firebase ' + i),
                            (s = s),
                            (t['X-Firebase-Storage-Version'] = 'webjs/' + (null != s ? s : 'AppManager')),
                            new Je(
                                e,
                                n.method,
                                t,
                                n.body,
                                n.successCodes,
                                n.additionalRetryCodes,
                                n.handler,
                                n.errorHandler,
                                n.timeout,
                                n.progressCallback,
                                a,
                            ));
                    return (
                        this._requests.add(c),
                        c.getPromise().then(
                            function () {
                                return r._requests.delete(c);
                            },
                            function () {
                                return r._requests.delete(c);
                            },
                        ),
                        c
                    );
                }),
                it);
            function it(e, t, r, n, o) {
                (this.app = e),
                    (this._authProvider = t),
                    (this._pool = r),
                    (this._url = n),
                    (this._firebaseVersion = o),
                    (this._bucket = null),
                    (this._appId = null),
                    (this._deleted = !1),
                    (this._maxOperationRetryTime = 12e4),
                    (this._maxUploadRetryTime = 6e5),
                    (this._requests = new Set()),
                    (this._bucket =
                        null != n
                            ? Q.makeFromBucketSpec(n)
                            : null == (n = null == (n = this.app.options) ? void 0 : n[m])
                            ? null
                            : Q.makeFromBucketSpec(n));
            }
            var at =
                (Object.defineProperty(st.prototype, 'maxOperationRetryTime', {
                    get: function () {
                        return this._delegate.maxOperationRetryTime;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(st.prototype, 'maxUploadRetryTime', {
                    get: function () {
                        return this._delegate.maxUploadRetryTime;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (st.prototype.ref = function (e) {
                    if (tt(e)) throw x('ref() expected a child path but got a URL, use refFromURL instead.');
                    return new Ke(nt(this._delegate, e), this);
                }),
                (st.prototype.refFromURL = function (e) {
                    if (!tt(e)) throw x('refFromURL() expected a full URL but got a child path, use ref() instead.');
                    try {
                        Q.makeFromUrl(e);
                    } catch (e) {
                        throw x('refFromUrl() expected a valid full URL but got an invalid one.');
                    }
                    return new Ke(nt(this._delegate, e), this);
                }),
                (st.prototype.setMaxUploadRetryTime = function (e) {
                    this._delegate.maxUploadRetryTime = e;
                }),
                (st.prototype.setMaxOperationRetryTime = function (e) {
                    this._delegate.maxOperationRetryTime = e;
                }),
                st);
            function st(e, t) {
                var r = this;
                (this.app = e),
                    (this._delegate = t),
                    (this.INTERNAL = {
                        delete: function () {
                            return r._delegate._delete();
                        },
                    });
            }
            var ut, ct;
            function lt(e, t) {
                var r = e.getProvider('app').getImmediate(),
                    e = e.getProvider('auth-internal');
                return new at(r, new ot(r, e, new X(), t, n.default.SDK_VERSION));
            }
            (ut = n.default),
                (ct = { TaskState: D, TaskEvent: B, StringFormat: C, Storage: ot, Reference: Ke }),
                ut.INTERNAL.registerComponent(
                    new d('storage', lt, 'PUBLIC').setServiceProps(ct).setMultipleInstances(!0),
                ),
                ut.registerVersion('@firebase/storage', '0.4.3');
        }.apply(this, arguments));
    } catch (e) {
        throw (
            (console.error(e),
            new Error('Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.'))
        );
    }
});
//# sourceMappingURL=firebase-storage.js.map

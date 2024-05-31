var ap = Object.defineProperty;
var lp = (o, e, t) => e in o ? ap(o, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : o[e] = t;
var he = (o, e, t) => (lp(o, typeof e != "symbol" ? e + "" : e, t), t);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const r of s.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && n(r)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function t(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function n(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = t(i);
        fetch(i.href, s)
    }
})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const $l = "139",
    cp = 0,
    Vc = 1,
    hp = 2,
    Xu = 1,
    up = 2,
    Sr = 3,
    Ws = 0,
    xn = 1,
    Yi = 2,
    ju = 1,
    mi = 0,
    Ns = 1,
    Wc = 2,
    qc = 3,
    Xc = 4,
    dp = 5,
    Rs = 100,
    fp = 101,
    pp = 102,
    jc = 103,
    Yc = 104,
    mp = 200,
    gp = 201,
    _p = 202,
    yp = 203,
    Yu = 204,
    Ju = 205,
    xp = 206,
    vp = 207,
    bp = 208,
    wp = 209,
    Mp = 210,
    Sp = 0,
    Tp = 1,
    Ep = 2,
    vl = 3,
    Ap = 4,
    Cp = 5,
    Lp = 6,
    Rp = 7,
    na = 0,
    Pp = 1,
    Ip = 2,
    Jn = 0,
    Dp = 1,
    kp = 2,
    Fp = 3,
    Bp = 4,
    Op = 5,
    Ku = 300,
    qs = 301,
    Xs = 302,
    bl = 303,
    wl = 304,
    ia = 306,
    Ji = 1e3,
    sn = 1001,
    Vo = 1002,
    bt = 1003,
    Ml = 1004,
    Sl = 1005,
    It = 1006,
    Zu = 1007,
    ir = 1008,
    Ki = 1009,
    Np = 1010,
    zp = 1011,
    Fr = 1012,
    Hp = 1013,
    Oo = 1014,
    ui = 1015,
    zs = 1016,
    Up = 1017,
    Gp = 1018,
    Hs = 1020,
    Vp = 1021,
    Wp = 1022,
    rn = 1023,
    qp = 1024,
    Xp = 1025,
    Gi = 1026,
    js = 1027,
    jp = 1028,
    Yp = 1029,
    Jp = 1030,
    Kp = 1031,
    Zp = 1033,
    Sa = 33776,
    Ta = 33777,
    Ea = 33778,
    Aa = 33779,
    Jc = 35840,
    Kc = 35841,
    Zc = 35842,
    $c = 35843,
    $p = 36196,
    Qc = 37492,
    eh = 37496,
    th = 37808,
    nh = 37809,
    ih = 37810,
    sh = 37811,
    rh = 37812,
    oh = 37813,
    ah = 37814,
    lh = 37815,
    ch = 37816,
    hh = 37817,
    uh = 37818,
    dh = 37819,
    fh = 37820,
    ph = 37821,
    mh = 36492,
    Qp = 2200,
    em = 2201,
    No = 2202,
    Br = 2300,
    Ys = 2301,
    Ca = 2302,
    Ps = 2400,
    Is = 2401,
    Wo = 2402,
    Ql = 2500,
    $u = 2501,
    tm = 0,
    nm = 1,
    Qu = 2,
    Zn = 3e3,
    Ge = 3001,
    im = 3200,
    sm = 3201,
    es = 0,
    rm = 1,
    Wn = "srgb",
    Hi = "srgb-linear",
    La = 7680,
    om = 519,
    Or = 35044,
    qo = 35048,
    gh = "300 es",
    Tl = 1035;
class ts {
    addEventListener(e, t) {
        this._listeners === void 0 && (this._listeners = {});
        const n = this._listeners;
        n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t)
    }
    hasEventListener(e, t) {
        if (this._listeners === void 0) return !1;
        const n = this._listeners;
        return n[e] !== void 0 && n[e].indexOf(t) !== -1
    }
    removeEventListener(e, t) {
        if (this._listeners === void 0) return;
        const i = this._listeners[e];
        if (i !== void 0) {
            const s = i.indexOf(t);
            s !== -1 && i.splice(s, 1)
        }
    }
    dispatchEvent(e) {
        if (this._listeners === void 0) return;
        const n = this._listeners[e.type];
        if (n !== void 0) {
            e.target = this;
            const i = n.slice(0);
            for (let s = 0, r = i.length; s < r; s++) i[s].call(this, e);
            e.target = null
        }
    }
}
const Et = [];
for (let o = 0; o < 256; o++) Et[o] = (o < 16 ? "0" : "") + o.toString(16);
let _h = 1234567;
const Cr = Math.PI / 180,
    Nr = 180 / Math.PI;

function cn() {
    const o = Math.random() * 4294967295 | 0,
        e = Math.random() * 4294967295 | 0,
        t = Math.random() * 4294967295 | 0,
        n = Math.random() * 4294967295 | 0;
    return (Et[o & 255] + Et[o >> 8 & 255] + Et[o >> 16 & 255] + Et[o >> 24 & 255] + "-" + Et[e & 255] + Et[e >> 8 & 255] + "-" + Et[e >> 16 & 15 | 64] + Et[e >> 24 & 255] + "-" + Et[t & 63 | 128] + Et[t >> 8 & 255] + "-" + Et[t >> 16 & 255] + Et[t >> 24 & 255] + Et[n & 255] + Et[n >> 8 & 255] + Et[n >> 16 & 255] + Et[n >> 24 & 255]).toLowerCase()
}

function At(o, e, t) {
    return Math.max(e, Math.min(t, o))
}

function ec(o, e) {
    return (o % e + e) % e
}

function am(o, e, t, n, i) {
    return n + (o - e) * (i - n) / (t - e)
}

function lm(o, e, t) {
    return o !== e ? (t - o) / (e - o) : 0
}

function Lr(o, e, t) {
    return (1 - t) * o + t * e
}

function cm(o, e, t, n) {
    return Lr(o, e, 1 - Math.exp(-t * n))
}

function hm(o, e = 1) {
    return e - Math.abs(ec(o, e * 2) - e)
}

function um(o, e, t) {
    return o <= e ? 0 : o >= t ? 1 : (o = (o - e) / (t - e), o * o * (3 - 2 * o))
}

function dm(o, e, t) {
    return o <= e ? 0 : o >= t ? 1 : (o = (o - e) / (t - e), o * o * o * (o * (o * 6 - 15) + 10))
}

function fm(o, e) {
    return o + Math.floor(Math.random() * (e - o + 1))
}

function pm(o, e) {
    return o + Math.random() * (e - o)
}

function mm(o) {
    return o * (.5 - Math.random())
}

function gm(o) {
    o !== void 0 && (_h = o);
    let e = _h += 1831565813;
    return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296
}

function _m(o) {
    return o * Cr
}

function ym(o) {
    return o * Nr
}

function El(o) {
    return (o & o - 1) === 0 && o !== 0
}

function ed(o) {
    return Math.pow(2, Math.ceil(Math.log(o) / Math.LN2))
}

function Xo(o) {
    return Math.pow(2, Math.floor(Math.log(o) / Math.LN2))
}

function xm(o, e, t, n, i) {
    const s = Math.cos,
        r = Math.sin,
        a = s(t / 2),
        c = r(t / 2),
        h = s((e + n) / 2),
        d = r((e + n) / 2),
        l = s((e - n) / 2),
        u = r((e - n) / 2),
        f = s((n - e) / 2),
        g = r((n - e) / 2);
    switch (i) {
        case "XYX":
            o.set(a * d, c * l, c * u, a * h);
            break;
        case "YZY":
            o.set(c * u, a * d, c * l, a * h);
            break;
        case "ZXZ":
            o.set(c * l, c * u, a * d, a * h);
            break;
        case "XZX":
            o.set(a * d, c * g, c * f, a * h);
            break;
        case "YXY":
            o.set(c * f, a * d, c * g, a * h);
            break;
        case "ZYZ":
            o.set(c * g, c * f, a * d, a * h);
            break;
        default:
            console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i)
    }
}

function vm(o, e) {
    switch (e.constructor) {
        case Float32Array:
            return o;
        case Uint16Array:
            return o / 65535;
        case Uint8Array:
            return o / 255;
        case Int16Array:
            return Math.max(o / 32767, -1);
        case Int8Array:
            return Math.max(o / 127, -1);
        default:
            throw new Error("Invalid component type.")
    }
}

function bm(o, e) {
    switch (e.constructor) {
        case Float32Array:
            return o;
        case Uint16Array:
            return Math.round(o * 65535);
        case Uint8Array:
            return Math.round(o * 255);
        case Int16Array:
            return Math.round(o * 32767);
        case Int8Array:
            return Math.round(o * 127);
        default:
            throw new Error("Invalid component type.")
    }
}
var wm = Object.freeze({
    __proto__: null,
    DEG2RAD: Cr,
    RAD2DEG: Nr,
    generateUUID: cn,
    clamp: At,
    euclideanModulo: ec,
    mapLinear: am,
    inverseLerp: lm,
    lerp: Lr,
    damp: cm,
    pingpong: hm,
    smoothstep: um,
    smootherstep: dm,
    randInt: fm,
    randFloat: pm,
    randFloatSpread: mm,
    seededRandom: gm,
    degToRad: _m,
    radToDeg: ym,
    isPowerOfTwo: El,
    ceilPowerOfTwo: ed,
    floorPowerOfTwo: Xo,
    setQuaternionFromProperEuler: xm,
    normalize: bm,
    denormalize: vm
});
class te {
    constructor(e = 0, t = 0) {
        this.x = e, this.y = t
    }
    get width() {
        return this.x
    }
    set width(e) {
        this.x = e
    }
    get height() {
        return this.y
    }
    set height(e) {
        this.y = e
    }
    set(e, t) {
        return this.x = e, this.y = t, this
    }
    setScalar(e) {
        return this.x = e, this.y = e, this
    }
    setX(e) {
        return this.x = e, this
    }
    setY(e) {
        return this.y = e, this
    }
    setComponent(e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x, this.y)
    }
    copy(e) {
        return this.x = e.x, this.y = e.y, this
    }
    add(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
    }
    addScalar(e) {
        return this.x += e, this.y += e, this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t, this.y += e.y * t, this
    }
    sub(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
    }
    subScalar(e) {
        return this.x -= e, this.y -= e, this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this
    }
    multiply(e) {
        return this.x *= e.x, this.y *= e.y, this
    }
    multiplyScalar(e) {
        return this.x *= e, this.y *= e, this
    }
    divide(e) {
        return this.x /= e.x, this.y /= e.y, this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
        const t = this.x,
            n = this.y,
            i = e.elements;
        return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    cross(e) {
        return this.x * e.y - this.y * e.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x,
            n = this.y - e.y;
        return t * t + n * n
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y
    }
    fromArray(e, t = 0) {
        return this.x = e[t], this.y = e[t + 1], this
    }
    toArray(e = [], t = 0) {
        return e[t] = this.x, e[t + 1] = this.y, e
    }
    fromBufferAttribute(e, t, n) {
        return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
    }
    rotateAround(e, t) {
        const n = Math.cos(t),
            i = Math.sin(t),
            s = this.x - e.x,
            r = this.y - e.y;
        return this.x = s * n - r * i + e.x, this.y = s * i + r * n + e.y, this
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this
    }*[Symbol.iterator]() {
        yield this.x, yield this.y
    }
}
te.prototype.isVector2 = !0;
class Lt {
    constructor() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    set(e, t, n, i, s, r, a, c, h) {
        const d = this.elements;
        return d[0] = e, d[1] = i, d[2] = a, d[3] = t, d[4] = s, d[5] = c, d[6] = n, d[7] = r, d[8] = h, this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    }
    copy(e) {
        const t = this.elements,
            n = e.elements;
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
    }
    setFromMatrix4(e) {
        const t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements,
            i = t.elements,
            s = this.elements,
            r = n[0],
            a = n[3],
            c = n[6],
            h = n[1],
            d = n[4],
            l = n[7],
            u = n[2],
            f = n[5],
            g = n[8],
            p = i[0],
            m = i[3],
            _ = i[6],
            y = i[1],
            b = i[4],
            w = i[7],
            x = i[2],
            E = i[5],
            T = i[8];
        return s[0] = r * p + a * y + c * x, s[3] = r * m + a * b + c * E, s[6] = r * _ + a * w + c * T, s[1] = h * p + d * y + l * x, s[4] = h * m + d * b + l * E, s[7] = h * _ + d * w + l * T, s[2] = u * p + f * y + g * x, s[5] = u * m + f * b + g * E, s[8] = u * _ + f * w + g * T, this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
    }
    determinant() {
        const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            s = e[3],
            r = e[4],
            a = e[5],
            c = e[6],
            h = e[7],
            d = e[8];
        return t * r * d - t * a * h - n * s * d + n * a * c + i * s * h - i * r * c
    }
    invert() {
        const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            s = e[3],
            r = e[4],
            a = e[5],
            c = e[6],
            h = e[7],
            d = e[8],
            l = d * r - a * h,
            u = a * c - d * s,
            f = h * s - r * c,
            g = t * l + n * u + i * f;
        if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const p = 1 / g;
        return e[0] = l * p, e[1] = (i * h - d * n) * p, e[2] = (a * n - i * r) * p, e[3] = u * p, e[4] = (d * t - i * c) * p, e[5] = (i * s - a * t) * p, e[6] = f * p, e[7] = (n * c - h * t) * p, e[8] = (r * t - n * s) * p, this
    }
    transpose() {
        let e;
        const t = this.elements;
        return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
        const t = this.elements;
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
    }
    setUvTransform(e, t, n, i, s, r, a) {
        const c = Math.cos(s),
            h = Math.sin(s);
        return this.set(n * c, n * h, -n * (c * r + h * a) + r + e, -i * h, i * c, -i * (-h * r + c * a) + a + t, 0, 0, 1), this
    }
    scale(e, t) {
        const n = this.elements;
        return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this
    }
    rotate(e) {
        const t = Math.cos(e),
            n = Math.sin(e),
            i = this.elements,
            s = i[0],
            r = i[3],
            a = i[6],
            c = i[1],
            h = i[4],
            d = i[7];
        return i[0] = t * s + n * c, i[3] = t * r + n * h, i[6] = t * a + n * d, i[1] = -n * s + t * c, i[4] = -n * r + t * h, i[7] = -n * a + t * d, this
    }
    translate(e, t) {
        const n = this.elements;
        return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this
    }
    equals(e) {
        const t = this.elements,
            n = e.elements;
        for (let i = 0; i < 9; i++)
            if (t[i] !== n[i]) return !1;
        return !0
    }
    fromArray(e, t = 0) {
        for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
        return this
    }
    toArray(e = [], t = 0) {
        const n = this.elements;
        return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
    }
    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}
Lt.prototype.isMatrix3 = !0;

function td(o) {
    for (let e = o.length - 1; e >= 0; --e)
        if (o[e] > 65535) return !0;
    return !1
}

function zr(o) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", o)
}

function Vi(o) {
    return o < .04045 ? o * .0773993808 : Math.pow(o * .9478672986 + .0521327014, 2.4)
}

function zo(o) {
    return o < .0031308 ? o * 12.92 : 1.055 * Math.pow(o, .41666) - .055
}
const Ra = {
        [Wn]: {
            [Hi]: Vi
        },
        [Hi]: {
            [Wn]: zo
        }
    },
    pn = {
        legacyMode: !0,
        get workingColorSpace() {
            return Hi
        },
        set workingColorSpace(o) {
            console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
        },
        convert: function(o, e, t) {
            if (this.legacyMode || e === t || !e || !t) return o;
            if (Ra[e] && Ra[e][t] !== void 0) {
                const n = Ra[e][t];
                return o.r = n(o.r), o.g = n(o.g), o.b = n(o.b), o
            }
            throw new Error("Unsupported color space conversion.")
        },
        fromWorkingColorSpace: function(o, e) {
            return this.convert(o, this.workingColorSpace, e)
        },
        toWorkingColorSpace: function(o, e) {
            return this.convert(o, e, this.workingColorSpace)
        }
    },
    nd = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    },
    vt = {
        r: 0,
        g: 0,
        b: 0
    },
    mn = {
        h: 0,
        s: 0,
        l: 0
    },
    io = {
        h: 0,
        s: 0,
        l: 0
    };

function Pa(o, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * 6 * (2 / 3 - t) : o
}

function so(o, e) {
    return e.r = o.r, e.g = o.g, e.b = o.b, e
}
class ie {
    constructor(e, t, n) {
        return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    }
    set(e) {
        return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this
    }
    setScalar(e) {
        return this.r = e, this.g = e, this.b = e, this
    }
    setHex(e, t = Wn) {
        return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, pn.toWorkingColorSpace(this, t), this
    }
    setRGB(e, t, n, i = Hi) {
        return this.r = e, this.g = t, this.b = n, pn.toWorkingColorSpace(this, i), this
    }
    setHSL(e, t, n, i = Hi) {
        if (e = ec(e, 1), t = At(t, 0, 1), n = At(n, 0, 1), t === 0) this.r = this.g = this.b = n;
        else {
            const s = n <= .5 ? n * (1 + t) : n + t - n * t,
                r = 2 * n - s;
            this.r = Pa(r, s, e + 1 / 3), this.g = Pa(r, s, e), this.b = Pa(r, s, e - 1 / 3)
        }
        return pn.toWorkingColorSpace(this, i), this
    }
    setStyle(e, t = Wn) {
        function n(s) {
            s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }
        let i;
        if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
            let s;
            const r = i[1],
                a = i[2];
            switch (r) {
                case "rgb":
                case "rgba":
                    if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(s[1], 10)) / 255, this.g = Math.min(255, parseInt(s[2], 10)) / 255, this.b = Math.min(255, parseInt(s[3], 10)) / 255, pn.toWorkingColorSpace(this, t), n(s[4]), this;
                    if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(s[1], 10)) / 100, this.g = Math.min(100, parseInt(s[2], 10)) / 100, this.b = Math.min(100, parseInt(s[3], 10)) / 100, pn.toWorkingColorSpace(this, t), n(s[4]), this;
                    break;
                case "hsl":
                case "hsla":
                    if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
                        const c = parseFloat(s[1]) / 360,
                            h = parseInt(s[2], 10) / 100,
                            d = parseInt(s[3], 10) / 100;
                        return n(s[4]), this.setHSL(c, h, d, t)
                    }
                    break
            }
        } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            const s = i[1],
                r = s.length;
            if (r === 3) return this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255, this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255, this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255, pn.toWorkingColorSpace(this, t), this;
            if (r === 6) return this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255, this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255, this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255, pn.toWorkingColorSpace(this, t), this
        }
        return e && e.length > 0 ? this.setColorName(e, t) : this
    }
    setColorName(e, t = Wn) {
        const n = nd[e.toLowerCase()];
        return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b)
    }
    copy(e) {
        return this.r = e.r, this.g = e.g, this.b = e.b, this
    }
    copySRGBToLinear(e) {
        return this.r = Vi(e.r), this.g = Vi(e.g), this.b = Vi(e.b), this
    }
    copyLinearToSRGB(e) {
        return this.r = zo(e.r), this.g = zo(e.g), this.b = zo(e.b), this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this), this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this), this
    }
    getHex(e = Wn) {
        return pn.fromWorkingColorSpace(so(this, vt), e), At(vt.r * 255, 0, 255) << 16 ^ At(vt.g * 255, 0, 255) << 8 ^ At(vt.b * 255, 0, 255) << 0
    }
    getHexString(e = Wn) {
        return ("000000" + this.getHex(e).toString(16)).slice(-6)
    }
    getHSL(e, t = Hi) {
        pn.fromWorkingColorSpace(so(this, vt), t);
        const n = vt.r,
            i = vt.g,
            s = vt.b,
            r = Math.max(n, i, s),
            a = Math.min(n, i, s);
        let c, h;
        const d = (a + r) / 2;
        if (a === r) c = 0, h = 0;
        else {
            const l = r - a;
            switch (h = d <= .5 ? l / (r + a) : l / (2 - r - a), r) {
                case n:
                    c = (i - s) / l + (i < s ? 6 : 0);
                    break;
                case i:
                    c = (s - n) / l + 2;
                    break;
                case s:
                    c = (n - i) / l + 4;
                    break
            }
            c /= 6
        }
        return e.h = c, e.s = h, e.l = d, e
    }
    getRGB(e, t = Hi) {
        return pn.fromWorkingColorSpace(so(this, vt), t), e.r = vt.r, e.g = vt.g, e.b = vt.b, e
    }
    getStyle(e = Wn) {
        return pn.fromWorkingColorSpace(so(this, vt), e), e !== Wn ? `color(${e} ${vt.r} ${vt.g} ${vt.b})` : `rgb(${vt.r*255|0},${vt.g*255|0},${vt.b*255|0})`
    }
    offsetHSL(e, t, n) {
        return this.getHSL(mn), mn.h += e, mn.s += t, mn.l += n, this.setHSL(mn.h, mn.s, mn.l), this
    }
    add(e) {
        return this.r += e.r, this.g += e.g, this.b += e.b, this
    }
    addColors(e, t) {
        return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
    }
    addScalar(e) {
        return this.r += e, this.g += e, this.b += e, this
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
    }
    multiply(e) {
        return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
    }
    multiplyScalar(e) {
        return this.r *= e, this.g *= e, this.b *= e, this
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
    }
    lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this
    }
    lerpHSL(e, t) {
        this.getHSL(mn), e.getHSL(io);
        const n = Lr(mn.h, io.h, t),
            i = Lr(mn.s, io.s, t),
            s = Lr(mn.l, io.l, t);
        return this.setHSL(n, i, s), this
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }
    fromArray(e, t = 0) {
        return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
    }
    toArray(e = [], t = 0) {
        return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), e.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this
    }
    toJSON() {
        return this.getHex()
    }
}
ie.NAMES = nd;
ie.prototype.isColor = !0;
ie.prototype.r = 1;
ie.prototype.g = 1;
ie.prototype.b = 1;
let us;
class ns {
    static getDataURL(e) {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
        let t;
        if (e instanceof HTMLCanvasElement) t = e;
        else {
            us === void 0 && (us = zr("canvas")), us.width = e.width, us.height = e.height;
            const n = us.getContext("2d");
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = us
        }
        return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
    }
    static sRGBToLinear(e) {
        if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
            const t = zr("canvas");
            t.width = e.width, t.height = e.height;
            const n = t.getContext("2d");
            n.drawImage(e, 0, 0, e.width, e.height);
            const i = n.getImageData(0, 0, e.width, e.height),
                s = i.data;
            for (let r = 0; r < s.length; r++) s[r] = Vi(s[r] / 255) * 255;
            return n.putImageData(i, 0, 0), t
        } else if (e.data) {
            const t = e.data.slice(0);
            for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Vi(t[n] / 255) * 255) : t[n] = Vi(t[n]);
            return {
                data: t,
                width: e.width,
                height: e.height
            }
        } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e
    }
}
class id {
    constructor(e = null) {
        this.uuid = cn(), this.data = e, this.version = 0
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
        const n = {
                uuid: this.uuid,
                url: ""
            },
            i = this.data;
        if (i !== null) {
            let s;
            if (Array.isArray(i)) {
                s = [];
                for (let r = 0, a = i.length; r < a; r++) i[r].isDataTexture ? s.push(Ia(i[r].image)) : s.push(Ia(i[r]))
            } else s = Ia(i);
            n.url = s
        }
        return t || (e.images[this.uuid] = n), n
    }
}

function Ia(o) {
    return typeof HTMLImageElement < "u" && o instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && o instanceof ImageBitmap ? ns.getDataURL(o) : o.data ? {
        data: Array.prototype.slice.call(o.data),
        width: o.width,
        height: o.height,
        type: o.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
}
id.prototype.isSource = !0;
let Mm = 0;
class xt extends ts {
    constructor(e = xt.DEFAULT_IMAGE, t = xt.DEFAULT_MAPPING, n = sn, i = sn, s = It, r = ir, a = rn, c = Ki, h = 1, d = Zn) {
        super(), Object.defineProperty(this, "id", {
            value: Mm++
        }), this.uuid = cn(), this.name = "", this.source = new id(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = r, this.anisotropy = h, this.format = a, this.internalFormat = null, this.type = c, this.offset = new te(0, 0), this.repeat = new te(1, 1), this.center = new te(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Lt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = d, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
    }
    get image() {
        return this.source.data
    }
    set image(e) {
        this.source.data = e
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.5,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(e).uuid,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(e) {
        if (this.mapping !== Ku) return e;
        if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
            case Ji:
                e.x = e.x - Math.floor(e.x);
                break;
            case sn:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case Vo:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                break
        }
        if (e.y < 0 || e.y > 1) switch (this.wrapT) {
            case Ji:
                e.y = e.y - Math.floor(e.y);
                break;
            case sn:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case Vo:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                break
        }
        return this.flipY && (e.y = 1 - e.y), e
    }
    set needsUpdate(e) {
        e === !0 && (this.version++, this.source.needsUpdate = !0)
    }
}
xt.DEFAULT_IMAGE = null;
xt.DEFAULT_MAPPING = Ku;
xt.prototype.isTexture = !0;
class Ke {
    constructor(e = 0, t = 0, n = 0, i = 1) {
        this.x = e, this.y = t, this.z = n, this.w = i
    }
    get width() {
        return this.z
    }
    set width(e) {
        this.z = e
    }
    get height() {
        return this.w
    }
    set height(e) {
        this.w = e
    }
    set(e, t, n, i) {
        return this.x = e, this.y = t, this.z = n, this.w = i, this
    }
    setScalar(e) {
        return this.x = e, this.y = e, this.z = e, this.w = e, this
    }
    setX(e) {
        return this.x = e, this
    }
    setY(e) {
        return this.y = e, this
    }
    setZ(e) {
        return this.z = e, this
    }
    setW(e) {
        return this.w = e, this
    }
    setComponent(e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z, this.w)
    }
    copy(e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this
    }
    add(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
    }
    addScalar(e) {
        return this.x += e, this.y += e, this.z += e, this.w += e, this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
    }
    sub(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
    }
    subScalar(e) {
        return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
    }
    multiply(e) {
        return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
    }
    multiplyScalar(e) {
        return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
    }
    applyMatrix4(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = this.w,
            r = e.elements;
        return this.x = r[0] * t + r[4] * n + r[8] * i + r[12] * s, this.y = r[1] * t + r[5] * n + r[9] * i + r[13] * s, this.z = r[2] * t + r[6] * n + r[10] * i + r[14] * s, this.w = r[3] * t + r[7] * n + r[11] * i + r[15] * s, this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        const t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, i, s;
        const c = e.elements,
            h = c[0],
            d = c[4],
            l = c[8],
            u = c[1],
            f = c[5],
            g = c[9],
            p = c[2],
            m = c[6],
            _ = c[10];
        if (Math.abs(d - u) < .01 && Math.abs(l - p) < .01 && Math.abs(g - m) < .01) {
            if (Math.abs(d + u) < .1 && Math.abs(l + p) < .1 && Math.abs(g + m) < .1 && Math.abs(h + f + _ - 3) < .1) return this.set(1, 0, 0, 0), this;
            t = Math.PI;
            const b = (h + 1) / 2,
                w = (f + 1) / 2,
                x = (_ + 1) / 2,
                E = (d + u) / 4,
                T = (l + p) / 4,
                R = (g + m) / 4;
            return b > w && b > x ? b < .01 ? (n = 0, i = .707106781, s = .707106781) : (n = Math.sqrt(b), i = E / n, s = T / n) : w > x ? w < .01 ? (n = .707106781, i = 0, s = .707106781) : (i = Math.sqrt(w), n = E / i, s = R / i) : x < .01 ? (n = .707106781, i = .707106781, s = 0) : (s = Math.sqrt(x), n = T / s, i = R / s), this.set(n, i, s, t), this
        }
        let y = Math.sqrt((m - g) * (m - g) + (l - p) * (l - p) + (u - d) * (u - d));
        return Math.abs(y) < .001 && (y = 1), this.x = (m - g) / y, this.y = (l - p) / y, this.z = (u - d) / y, this.w = Math.acos((h + f + _ - 1) / 2), this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }
    fromArray(e, t = 0) {
        return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
    }
    toArray(e = [], t = 0) {
        return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
    }
    fromBufferAttribute(e, t, n) {
        return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
    }*[Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z, yield this.w
    }
}
Ke.prototype.isVector4 = !0;
class Zt extends ts {
    constructor(e, t, n = {}) {
        super(), this.width = e, this.height = t, this.depth = 1, this.scissor = new Ke(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ke(0, 0, e, t);
        const i = {
            width: e,
            height: t,
            depth: 1
        };
        this.texture = new xt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : It, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0
    }
    setSize(e, t, n = 1) {
        (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0, this.texture.image = Object.assign({}, e.texture.image), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
Zt.prototype.isWebGLRenderTarget = !0;
class sa extends xt {
    constructor(e = null, t = 1, n = 1, i = 1) {
        super(null), this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        }, this.magFilter = bt, this.minFilter = bt, this.wrapR = sn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }
}
sa.prototype.isDataArrayTexture = !0;
class Sm extends Zt {
    constructor(e, t, n) {
        super(e, t), this.depth = n, this.texture = new sa(null, e, t, n), this.texture.isRenderTargetTexture = !0
    }
}
Sm.prototype.isWebGLArrayRenderTarget = !0;
class tc extends xt {
    constructor(e = null, t = 1, n = 1, i = 1) {
        super(null), this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        }, this.magFilter = bt, this.minFilter = bt, this.wrapR = sn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }
}
tc.prototype.isData3DTexture = !0;
class Tm extends Zt {
    constructor(e, t, n) {
        super(e, t), this.depth = n, this.texture = new tc(null, e, t, n), this.texture.isRenderTargetTexture = !0
    }
}
Tm.prototype.isWebGL3DRenderTarget = !0;
class Em extends Zt {
    constructor(e, t, n, i = {}) {
        super(e, t, i);
        const s = this.texture;
        this.texture = [];
        for (let r = 0; r < n; r++) this.texture[r] = s.clone(), this.texture[r].isRenderTargetTexture = !0
    }
    setSize(e, t, n = 1) {
        if (this.width !== e || this.height !== t || this.depth !== n) {
            this.width = e, this.height = t, this.depth = n;
            for (let i = 0, s = this.texture.length; i < s; i++) this.texture[i].image.width = e, this.texture[i].image.height = t, this.texture[i].image.depth = n;
            this.dispose()
        }
        return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this
    }
    copy(e) {
        this.dispose(), this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this.texture.length = 0;
        for (let t = 0, n = e.texture.length; t < n; t++) this.texture[t] = e.texture[t].clone();
        return this
    }
}
Em.prototype.isWebGLMultipleRenderTargets = !0;
class Ut {
    constructor(e = 0, t = 0, n = 0, i = 1) {
        this._x = e, this._y = t, this._z = n, this._w = i
    }
    static slerp(e, t, n, i) {
        return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(e, t, i)
    }
    static slerpFlat(e, t, n, i, s, r, a) {
        let c = n[i + 0],
            h = n[i + 1],
            d = n[i + 2],
            l = n[i + 3];
        const u = s[r + 0],
            f = s[r + 1],
            g = s[r + 2],
            p = s[r + 3];
        if (a === 0) {
            e[t + 0] = c, e[t + 1] = h, e[t + 2] = d, e[t + 3] = l;
            return
        }
        if (a === 1) {
            e[t + 0] = u, e[t + 1] = f, e[t + 2] = g, e[t + 3] = p;
            return
        }
        if (l !== p || c !== u || h !== f || d !== g) {
            let m = 1 - a;
            const _ = c * u + h * f + d * g + l * p,
                y = _ >= 0 ? 1 : -1,
                b = 1 - _ * _;
            if (b > Number.EPSILON) {
                const x = Math.sqrt(b),
                    E = Math.atan2(x, _ * y);
                m = Math.sin(m * E) / x, a = Math.sin(a * E) / x
            }
            const w = a * y;
            if (c = c * m + u * w, h = h * m + f * w, d = d * m + g * w, l = l * m + p * w, m === 1 - a) {
                const x = 1 / Math.sqrt(c * c + h * h + d * d + l * l);
                c *= x, h *= x, d *= x, l *= x
            }
        }
        e[t] = c, e[t + 1] = h, e[t + 2] = d, e[t + 3] = l
    }
    static multiplyQuaternionsFlat(e, t, n, i, s, r) {
        const a = n[i],
            c = n[i + 1],
            h = n[i + 2],
            d = n[i + 3],
            l = s[r],
            u = s[r + 1],
            f = s[r + 2],
            g = s[r + 3];
        return e[t] = a * g + d * l + c * f - h * u, e[t + 1] = c * g + d * u + h * l - a * f, e[t + 2] = h * g + d * f + a * u - c * l, e[t + 3] = d * g - a * l - c * u - h * f, e
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e, this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e, this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e, this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(e) {
        this._w = e, this._onChangeCallback()
    }
    set(e, t, n, i) {
        return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._w)
    }
    copy(e) {
        return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
    }
    setFromEuler(e, t) {
        if (!(e && e.isEuler)) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        const n = e._x,
            i = e._y,
            s = e._z,
            r = e._order,
            a = Math.cos,
            c = Math.sin,
            h = a(n / 2),
            d = a(i / 2),
            l = a(s / 2),
            u = c(n / 2),
            f = c(i / 2),
            g = c(s / 2);
        switch (r) {
            case "XYZ":
                this._x = u * d * l + h * f * g, this._y = h * f * l - u * d * g, this._z = h * d * g + u * f * l, this._w = h * d * l - u * f * g;
                break;
            case "YXZ":
                this._x = u * d * l + h * f * g, this._y = h * f * l - u * d * g, this._z = h * d * g - u * f * l, this._w = h * d * l + u * f * g;
                break;
            case "ZXY":
                this._x = u * d * l - h * f * g, this._y = h * f * l + u * d * g, this._z = h * d * g + u * f * l, this._w = h * d * l - u * f * g;
                break;
            case "ZYX":
                this._x = u * d * l - h * f * g, this._y = h * f * l + u * d * g, this._z = h * d * g - u * f * l, this._w = h * d * l + u * f * g;
                break;
            case "YZX":
                this._x = u * d * l + h * f * g, this._y = h * f * l + u * d * g, this._z = h * d * g - u * f * l, this._w = h * d * l - u * f * g;
                break;
            case "XZY":
                this._x = u * d * l - h * f * g, this._y = h * f * l - u * d * g, this._z = h * d * g + u * f * l, this._w = h * d * l + u * f * g;
                break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r)
        }
        return t !== !1 && this._onChangeCallback(), this
    }
    setFromAxisAngle(e, t) {
        const n = t / 2,
            i = Math.sin(n);
        return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
    }
    setFromRotationMatrix(e) {
        const t = e.elements,
            n = t[0],
            i = t[4],
            s = t[8],
            r = t[1],
            a = t[5],
            c = t[9],
            h = t[2],
            d = t[6],
            l = t[10],
            u = n + a + l;
        if (u > 0) {
            const f = .5 / Math.sqrt(u + 1);
            this._w = .25 / f, this._x = (d - c) * f, this._y = (s - h) * f, this._z = (r - i) * f
        } else if (n > a && n > l) {
            const f = 2 * Math.sqrt(1 + n - a - l);
            this._w = (d - c) / f, this._x = .25 * f, this._y = (i + r) / f, this._z = (s + h) / f
        } else if (a > l) {
            const f = 2 * Math.sqrt(1 + a - n - l);
            this._w = (s - h) / f, this._x = (i + r) / f, this._y = .25 * f, this._z = (c + d) / f
        } else {
            const f = 2 * Math.sqrt(1 + l - n - a);
            this._w = (r - i) / f, this._x = (s + h) / f, this._y = (c + d) / f, this._z = .25 * f
        }
        return this._onChangeCallback(), this
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize()
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(At(this.dot(e), -1, 1)))
    }
    rotateTowards(e, t) {
        const n = this.angleTo(e);
        if (n === 0) return this;
        const i = Math.min(1, t / n);
        return this.slerp(e, i), this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let e = this.length();
        return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
    }
    multiply(e, t) {
        return t !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
        const n = e._x,
            i = e._y,
            s = e._z,
            r = e._w,
            a = t._x,
            c = t._y,
            h = t._z,
            d = t._w;
        return this._x = n * d + r * a + i * h - s * c, this._y = i * d + r * c + s * a - n * h, this._z = s * d + r * h + n * c - i * a, this._w = r * d - n * a - i * c - s * h, this._onChangeCallback(), this
    }
    slerp(e, t) {
        if (t === 0) return this;
        if (t === 1) return this.copy(e);
        const n = this._x,
            i = this._y,
            s = this._z,
            r = this._w;
        let a = r * e._w + n * e._x + i * e._y + s * e._z;
        if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = r, this._x = n, this._y = i, this._z = s, this;
        const c = 1 - a * a;
        if (c <= Number.EPSILON) {
            const f = 1 - t;
            return this._w = f * r + t * this._w, this._x = f * n + t * this._x, this._y = f * i + t * this._y, this._z = f * s + t * this._z, this.normalize(), this._onChangeCallback(), this
        }
        const h = Math.sqrt(c),
            d = Math.atan2(h, a),
            l = Math.sin((1 - t) * d) / h,
            u = Math.sin(t * d) / h;
        return this._w = r * l + this._w * u, this._x = n * l + this._x * u, this._y = i * l + this._y * u, this._z = s * l + this._z * u, this._onChangeCallback(), this
    }
    slerpQuaternions(e, t, n) {
        return this.copy(e).slerp(t, n)
    }
    random() {
        const e = Math.random(),
            t = Math.sqrt(1 - e),
            n = Math.sqrt(e),
            i = 2 * Math.PI * Math.random(),
            s = 2 * Math.PI * Math.random();
        return this.set(t * Math.cos(i), n * Math.sin(s), n * Math.cos(s), t * Math.sin(i))
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }
    fromArray(e, t = 0) {
        return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
    }
    toArray(e = [], t = 0) {
        return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this
    }
    _onChange(e) {
        return this._onChangeCallback = e, this
    }
    _onChangeCallback() {}
}
Ut.prototype.isQuaternion = !0;
class C {
    constructor(e = 0, t = 0, n = 0) {
        this.x = e, this.y = t, this.z = n
    }
    set(e, t, n) {
        return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this
    }
    setScalar(e) {
        return this.x = e, this.y = e, this.z = e, this
    }
    setX(e) {
        return this.x = e, this
    }
    setY(e) {
        return this.y = e, this
    }
    setZ(e) {
        return this.z = e, this
    }
    setComponent(e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z)
    }
    copy(e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this
    }
    add(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
    }
    addScalar(e) {
        return this.x += e, this.y += e, this.z += e, this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
    }
    sub(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
    }
    subScalar(e) {
        return this.x -= e, this.y -= e, this.z -= e, this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
    }
    multiply(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
    }
    multiplyScalar(e) {
        return this.x *= e, this.y *= e, this.z *= e, this
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
    }
    applyEuler(e) {
        return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(yh.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(yh.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = e.elements;
        return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = e.elements,
            r = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
        return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * r, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * r, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * r, this
    }
    applyQuaternion(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = e.x,
            r = e.y,
            a = e.z,
            c = e.w,
            h = c * t + r * i - a * n,
            d = c * n + a * t - s * i,
            l = c * i + s * n - r * t,
            u = -s * t - r * n - a * i;
        return this.x = h * c + u * -s + d * -a - l * -r, this.y = d * c + u * -r + l * -s - h * -a, this.z = l * c + u * -a + h * -r - d * -s, this
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = e.elements;
        return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize()
    }
    divide(e) {
        return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    min(e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this
    }
    cross(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
    }
    crossVectors(e, t) {
        const n = e.x,
            i = e.y,
            s = e.z,
            r = t.x,
            a = t.y,
            c = t.z;
        return this.x = i * c - s * a, this.y = s * r - n * c, this.z = n * a - i * r, this
    }
    projectOnVector(e) {
        const t = e.lengthSq();
        if (t === 0) return this.set(0, 0, 0);
        const n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n)
    }
    projectOnPlane(e) {
        return Da.copy(this).projectOnVector(e), this.sub(Da)
    }
    reflect(e) {
        return this.sub(Da.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0) return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(At(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x,
            n = this.y - e.y,
            i = this.z - e.z;
        return t * t + n * n + i * i
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, n) {
        const i = Math.sin(t) * e;
        return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return this.x = t[12], this.y = t[13], this.z = t[14], this
    }
    setFromMatrixScale(e) {
        const t = this.setFromMatrixColumn(e, 0).length(),
            n = this.setFromMatrixColumn(e, 1).length(),
            i = this.setFromMatrixColumn(e, 2).length();
        return this.x = t, this.y = n, this.z = i, this
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, t * 4)
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, t * 3)
    }
    setFromEuler(e) {
        return this.x = e._x, this.y = e._y, this.z = e._z, this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }
    fromArray(e, t = 0) {
        return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
    }
    toArray(e = [], t = 0) {
        return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
    }
    fromBufferAttribute(e, t, n) {
        return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
    }
    randomDirection() {
        const e = (Math.random() - .5) * 2,
            t = Math.random() * Math.PI * 2,
            n = Math.sqrt(1 - e ** 2);
        return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this
    }*[Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z
    }
}
C.prototype.isVector3 = !0;
const Da = new C,
    yh = new Ut;
class dn {
    constructor(e = new C(1 / 0, 1 / 0, 1 / 0), t = new C(-1 / 0, -1 / 0, -1 / 0)) {
        this.min = e, this.max = t
    }
    set(e, t) {
        return this.min.copy(e), this.max.copy(t), this
    }
    setFromArray(e) {
        let t = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            s = -1 / 0,
            r = -1 / 0,
            a = -1 / 0;
        for (let c = 0, h = e.length; c < h; c += 3) {
            const d = e[c],
                l = e[c + 1],
                u = e[c + 2];
            d < t && (t = d), l < n && (n = l), u < i && (i = u), d > s && (s = d), l > r && (r = l), u > a && (a = u)
        }
        return this.min.set(t, n, i), this.max.set(s, r, a), this
    }
    setFromBufferAttribute(e) {
        let t = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            s = -1 / 0,
            r = -1 / 0,
            a = -1 / 0;
        for (let c = 0, h = e.count; c < h; c++) {
            const d = e.getX(c),
                l = e.getY(c),
                u = e.getZ(c);
            d < t && (t = d), l < n && (n = l), u < i && (i = u), d > s && (s = d), l > r && (r = l), u > a && (a = u)
        }
        return this.min.set(t, n, i), this.max.set(s, r, a), this
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
        return this
    }
    setFromCenterAndSize(e, t) {
        const n = Ri.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
    }
    setFromObject(e, t = !1) {
        return this.makeEmpty(), this.expandByObject(e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.min.copy(e.min), this.max.copy(e.max), this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
        return this.min.min(e), this.max.max(e), this
    }
    expandByVector(e) {
        return this.min.sub(e), this.max.add(e), this
    }
    expandByScalar(e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this
    }
    expandByObject(e, t = !1) {
        e.updateWorldMatrix(!1, !1);
        const n = e.geometry;
        if (n !== void 0)
            if (t && n.attributes != null && n.attributes.position !== void 0) {
                const s = n.attributes.position;
                for (let r = 0, a = s.count; r < a; r++) Ri.fromBufferAttribute(s, r).applyMatrix4(e.matrixWorld), this.expandByPoint(Ri)
            } else n.boundingBox === null && n.computeBoundingBox(), ka.copy(n.boundingBox), ka.applyMatrix4(e.matrixWorld), this.union(ka);
        const i = e.children;
        for (let s = 0, r = i.length; s < r; s++) this.expandByObject(i[s], t);
        return this
    }
    containsPoint(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, Ri), Ri.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
        let t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant
    }
    intersectsTriangle(e) {
        if (this.isEmpty()) return !1;
        this.getCenter(dr), ro.subVectors(this.max, dr), ds.subVectors(e.a, dr), fs.subVectors(e.b, dr), ps.subVectors(e.c, dr), ni.subVectors(fs, ds), ii.subVectors(ps, fs), Pi.subVectors(ds, ps);
        let t = [0, -ni.z, ni.y, 0, -ii.z, ii.y, 0, -Pi.z, Pi.y, ni.z, 0, -ni.x, ii.z, 0, -ii.x, Pi.z, 0, -Pi.x, -ni.y, ni.x, 0, -ii.y, ii.x, 0, -Pi.y, Pi.x, 0];
        return !Fa(t, ds, fs, ps, ro) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Fa(t, ds, fs, ps, ro)) ? !1 : (oo.crossVectors(ni, ii), t = [oo.x, oo.y, oo.z], Fa(t, ds, fs, ps, ro))
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
        return Ri.copy(e).clamp(this.min, this.max).sub(e).length()
    }
    getBoundingSphere(e) {
        return this.getCenter(e.center), e.radius = this.getSize(Ri).length() * .5, e
    }
    intersect(e) {
        return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
    }
    union(e) {
        return this.min.min(e.min), this.max.max(e.max), this
    }
    applyMatrix4(e) {
        return this.isEmpty() ? this : (On[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), On[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), On[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), On[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), On[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), On[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), On[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), On[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(On), this)
    }
    translate(e) {
        return this.min.add(e), this.max.add(e), this
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
}
dn.prototype.isBox3 = !0;
const On = [new C, new C, new C, new C, new C, new C, new C, new C],
    Ri = new C,
    ka = new dn,
    ds = new C,
    fs = new C,
    ps = new C,
    ni = new C,
    ii = new C,
    Pi = new C,
    dr = new C,
    ro = new C,
    oo = new C,
    Ii = new C;

function Fa(o, e, t, n, i) {
    for (let s = 0, r = o.length - 3; s <= r; s += 3) {
        Ii.fromArray(o, s);
        const a = i.x * Math.abs(Ii.x) + i.y * Math.abs(Ii.y) + i.z * Math.abs(Ii.z),
            c = e.dot(Ii),
            h = t.dot(Ii),
            d = n.dot(Ii);
        if (Math.max(-Math.max(c, h, d), Math.min(c, h, d)) > a) return !1
    }
    return !0
}
const Am = new dn,
    xh = new C,
    ao = new C,
    Ba = new C;
class is {
    constructor(e = new C, t = -1) {
        this.center = e, this.radius = t
    }
    set(e, t) {
        return this.center.copy(e), this.radius = t, this
    }
    setFromPoints(e, t) {
        const n = this.center;
        t !== void 0 ? n.copy(t) : Am.setFromPoints(e).getCenter(n);
        let i = 0;
        for (let s = 0, r = e.length; s < r; s++) i = Math.max(i, n.distanceToSquared(e[s]));
        return this.radius = Math.sqrt(i), this
    }
    copy(e) {
        return this.center.copy(e.center), this.radius = e.radius, this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0), this.radius = -1, this
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
        const t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
        return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
        const n = this.center.distanceToSquared(e);
        return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
    }
    getBoundingBox(e) {
        return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e)
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
    }
    translate(e) {
        return this.center.add(e), this
    }
    expandByPoint(e) {
        Ba.subVectors(e, this.center);
        const t = Ba.lengthSq();
        if (t > this.radius * this.radius) {
            const n = Math.sqrt(t),
                i = (n - this.radius) * .5;
            this.center.add(Ba.multiplyScalar(i / n)), this.radius += i
        }
        return this
    }
    union(e) {
        return this.center.equals(e.center) === !0 ? ao.set(0, 0, 1).multiplyScalar(e.radius) : ao.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(xh.copy(e.center).add(ao)), this.expandByPoint(xh.copy(e.center).sub(ao)), this
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const Nn = new C,
    Oa = new C,
    lo = new C,
    si = new C,
    Na = new C,
    co = new C,
    za = new C;
class ss {
    constructor(e = new C, t = new C(0, 0, -1)) {
        this.origin = e, this.direction = t
    }
    set(e, t) {
        return this.origin.copy(e), this.direction.copy(t), this
    }
    copy(e) {
        return this.origin.copy(e.origin), this.direction.copy(e.direction), this
    }
    at(e, t) {
        return t.copy(this.direction).multiplyScalar(e).add(this.origin)
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(), this
    }
    recast(e) {
        return this.origin.copy(this.at(e, Nn)), this
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        const n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
        const t = Nn.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (Nn.copy(this.direction).multiplyScalar(t).add(this.origin), Nn.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, n, i) {
        Oa.copy(e).add(t).multiplyScalar(.5), lo.copy(t).sub(e).normalize(), si.copy(this.origin).sub(Oa);
        const s = e.distanceTo(t) * .5,
            r = -this.direction.dot(lo),
            a = si.dot(this.direction),
            c = -si.dot(lo),
            h = si.lengthSq(),
            d = Math.abs(1 - r * r);
        let l, u, f, g;
        if (d > 0)
            if (l = r * c - a, u = r * a - c, g = s * d, l >= 0)
                if (u >= -g)
                    if (u <= g) {
                        const p = 1 / d;
                        l *= p, u *= p, f = l * (l + r * u + 2 * a) + u * (r * l + u + 2 * c) + h
                    } else u = s, l = Math.max(0, -(r * u + a)), f = -l * l + u * (u + 2 * c) + h;
        else u = -s, l = Math.max(0, -(r * u + a)), f = -l * l + u * (u + 2 * c) + h;
        else u <= -g ? (l = Math.max(0, -(-r * s + a)), u = l > 0 ? -s : Math.min(Math.max(-s, -c), s), f = -l * l + u * (u + 2 * c) + h) : u <= g ? (l = 0, u = Math.min(Math.max(-s, -c), s), f = u * (u + 2 * c) + h) : (l = Math.max(0, -(r * s + a)), u = l > 0 ? s : Math.min(Math.max(-s, -c), s), f = -l * l + u * (u + 2 * c) + h);
        else u = r > 0 ? -s : s, l = Math.max(0, -(r * u + a)), f = -l * l + u * (u + 2 * c) + h;
        return n && n.copy(this.direction).multiplyScalar(l).add(this.origin), i && i.copy(lo).multiplyScalar(u).add(Oa), f
    }
    intersectSphere(e, t) {
        Nn.subVectors(e.center, this.origin);
        const n = Nn.dot(this.direction),
            i = Nn.dot(Nn) - n * n,
            s = e.radius * e.radius;
        if (i > s) return null;
        const r = Math.sqrt(s - i),
            a = n - r,
            c = n + r;
        return a < 0 && c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t)
    }
    intersectsSphere(e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
        const t = e.normal.dot(this.direction);
        if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
        const n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
        const n = this.distanceToPlane(e);
        return n === null ? null : this.at(n, t)
    }
    intersectsPlane(e) {
        const t = e.distanceToPoint(this.origin);
        return t === 0 || e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
        let n, i, s, r, a, c;
        const h = 1 / this.direction.x,
            d = 1 / this.direction.y,
            l = 1 / this.direction.z,
            u = this.origin;
        return h >= 0 ? (n = (e.min.x - u.x) * h, i = (e.max.x - u.x) * h) : (n = (e.max.x - u.x) * h, i = (e.min.x - u.x) * h), d >= 0 ? (s = (e.min.y - u.y) * d, r = (e.max.y - u.y) * d) : (s = (e.max.y - u.y) * d, r = (e.min.y - u.y) * d), n > r || s > i || ((s > n || n !== n) && (n = s), (r < i || i !== i) && (i = r), l >= 0 ? (a = (e.min.z - u.z) * l, c = (e.max.z - u.z) * l) : (a = (e.max.z - u.z) * l, c = (e.min.z - u.z) * l), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t)
    }
    intersectsBox(e) {
        return this.intersectBox(e, Nn) !== null
    }
    intersectTriangle(e, t, n, i, s) {
        Na.subVectors(t, e), co.subVectors(n, e), za.crossVectors(Na, co);
        let r = this.direction.dot(za),
            a;
        if (r > 0) {
            if (i) return null;
            a = 1
        } else if (r < 0) a = -1, r = -r;
        else return null;
        si.subVectors(this.origin, e);
        const c = a * this.direction.dot(co.crossVectors(si, co));
        if (c < 0) return null;
        const h = a * this.direction.dot(Na.cross(si));
        if (h < 0 || c + h > r) return null;
        const d = -a * si.dot(za);
        return d < 0 ? null : this.at(d / r, s)
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class _e {
    constructor() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    set(e, t, n, i, s, r, a, c, h, d, l, u, f, g, p, m) {
        const _ = this.elements;
        return _[0] = e, _[4] = t, _[8] = n, _[12] = i, _[1] = s, _[5] = r, _[9] = a, _[13] = c, _[2] = h, _[6] = d, _[10] = l, _[14] = u, _[3] = f, _[7] = g, _[11] = p, _[15] = m, this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }
    clone() {
        return new _e().fromArray(this.elements)
    }
    copy(e) {
        const t = this.elements,
            n = e.elements;
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
    }
    copyPosition(e) {
        const t = this.elements,
            n = e.elements;
        return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
    }
    setFromMatrix3(e) {
        const t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
    }
    extractRotation(e) {
        const t = this.elements,
            n = e.elements,
            i = 1 / ms.setFromMatrixColumn(e, 0).length(),
            s = 1 / ms.setFromMatrixColumn(e, 1).length(),
            r = 1 / ms.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * r, t[9] = n[9] * r, t[10] = n[10] * r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    }
    makeRotationFromEuler(e) {
        e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        const t = this.elements,
            n = e.x,
            i = e.y,
            s = e.z,
            r = Math.cos(n),
            a = Math.sin(n),
            c = Math.cos(i),
            h = Math.sin(i),
            d = Math.cos(s),
            l = Math.sin(s);
        if (e.order === "XYZ") {
            const u = r * d,
                f = r * l,
                g = a * d,
                p = a * l;
            t[0] = c * d, t[4] = -c * l, t[8] = h, t[1] = f + g * h, t[5] = u - p * h, t[9] = -a * c, t[2] = p - u * h, t[6] = g + f * h, t[10] = r * c
        } else if (e.order === "YXZ") {
            const u = c * d,
                f = c * l,
                g = h * d,
                p = h * l;
            t[0] = u + p * a, t[4] = g * a - f, t[8] = r * h, t[1] = r * l, t[5] = r * d, t[9] = -a, t[2] = f * a - g, t[6] = p + u * a, t[10] = r * c
        } else if (e.order === "ZXY") {
            const u = c * d,
                f = c * l,
                g = h * d,
                p = h * l;
            t[0] = u - p * a, t[4] = -r * l, t[8] = g + f * a, t[1] = f + g * a, t[5] = r * d, t[9] = p - u * a, t[2] = -r * h, t[6] = a, t[10] = r * c
        } else if (e.order === "ZYX") {
            const u = r * d,
                f = r * l,
                g = a * d,
                p = a * l;
            t[0] = c * d, t[4] = g * h - f, t[8] = u * h + p, t[1] = c * l, t[5] = p * h + u, t[9] = f * h - g, t[2] = -h, t[6] = a * c, t[10] = r * c
        } else if (e.order === "YZX") {
            const u = r * c,
                f = r * h,
                g = a * c,
                p = a * h;
            t[0] = c * d, t[4] = p - u * l, t[8] = g * l + f, t[1] = l, t[5] = r * d, t[9] = -a * d, t[2] = -h * d, t[6] = f * l + g, t[10] = u - p * l
        } else if (e.order === "XZY") {
            const u = r * c,
                f = r * h,
                g = a * c,
                p = a * h;
            t[0] = c * d, t[4] = -l, t[8] = h * d, t[1] = u * l + p, t[5] = r * d, t[9] = f * l - g, t[2] = g * l - f, t[6] = a * d, t[10] = p * l + u
        }
        return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    }
    makeRotationFromQuaternion(e) {
        return this.compose(Cm, e, Lm)
    }
    lookAt(e, t, n) {
        const i = this.elements;
        return jt.subVectors(e, t), jt.lengthSq() === 0 && (jt.z = 1), jt.normalize(), ri.crossVectors(n, jt), ri.lengthSq() === 0 && (Math.abs(n.z) === 1 ? jt.x += 1e-4 : jt.z += 1e-4, jt.normalize(), ri.crossVectors(n, jt)), ri.normalize(), ho.crossVectors(jt, ri), i[0] = ri.x, i[4] = ho.x, i[8] = jt.x, i[1] = ri.y, i[5] = ho.y, i[9] = jt.y, i[2] = ri.z, i[6] = ho.z, i[10] = jt.z, this
    }
    multiply(e, t) {
        return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements,
            i = t.elements,
            s = this.elements,
            r = n[0],
            a = n[4],
            c = n[8],
            h = n[12],
            d = n[1],
            l = n[5],
            u = n[9],
            f = n[13],
            g = n[2],
            p = n[6],
            m = n[10],
            _ = n[14],
            y = n[3],
            b = n[7],
            w = n[11],
            x = n[15],
            E = i[0],
            T = i[4],
            R = i[8],
            I = i[12],
            B = i[1],
            v = i[5],
            L = i[9],
            U = i[13],
            D = i[2],
            O = i[6],
            N = i[10],
            H = i[14],
            F = i[3],
            X = i[7],
            Z = i[11],
            Q = i[15];
        return s[0] = r * E + a * B + c * D + h * F, s[4] = r * T + a * v + c * O + h * X, s[8] = r * R + a * L + c * N + h * Z, s[12] = r * I + a * U + c * H + h * Q, s[1] = d * E + l * B + u * D + f * F, s[5] = d * T + l * v + u * O + f * X, s[9] = d * R + l * L + u * N + f * Z, s[13] = d * I + l * U + u * H + f * Q, s[2] = g * E + p * B + m * D + _ * F, s[6] = g * T + p * v + m * O + _ * X, s[10] = g * R + p * L + m * N + _ * Z, s[14] = g * I + p * U + m * H + _ * Q, s[3] = y * E + b * B + w * D + x * F, s[7] = y * T + b * v + w * O + x * X, s[11] = y * R + b * L + w * N + x * Z, s[15] = y * I + b * U + w * H + x * Q, this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
    }
    determinant() {
        const e = this.elements,
            t = e[0],
            n = e[4],
            i = e[8],
            s = e[12],
            r = e[1],
            a = e[5],
            c = e[9],
            h = e[13],
            d = e[2],
            l = e[6],
            u = e[10],
            f = e[14],
            g = e[3],
            p = e[7],
            m = e[11],
            _ = e[15];
        return g * (+s * c * l - i * h * l - s * a * u + n * h * u + i * a * f - n * c * f) + p * (+t * c * f - t * h * u + s * r * u - i * r * f + i * h * d - s * c * d) + m * (+t * h * l - t * a * f - s * r * l + n * r * f + s * a * d - n * h * d) + _ * (-i * a * d - t * c * l + t * a * u + i * r * l - n * r * u + n * c * d)
    }
    transpose() {
        const e = this.elements;
        let t;
        return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
    }
    setPosition(e, t, n) {
        const i = this.elements;
        return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this
    }
    invert() {
        const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            s = e[3],
            r = e[4],
            a = e[5],
            c = e[6],
            h = e[7],
            d = e[8],
            l = e[9],
            u = e[10],
            f = e[11],
            g = e[12],
            p = e[13],
            m = e[14],
            _ = e[15],
            y = l * m * h - p * u * h + p * c * f - a * m * f - l * c * _ + a * u * _,
            b = g * u * h - d * m * h - g * c * f + r * m * f + d * c * _ - r * u * _,
            w = d * p * h - g * l * h + g * a * f - r * p * f - d * a * _ + r * l * _,
            x = g * l * c - d * p * c - g * a * u + r * p * u + d * a * m - r * l * m,
            E = t * y + n * b + i * w + s * x;
        if (E === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const T = 1 / E;
        return e[0] = y * T, e[1] = (p * u * s - l * m * s - p * i * f + n * m * f + l * i * _ - n * u * _) * T, e[2] = (a * m * s - p * c * s + p * i * h - n * m * h - a * i * _ + n * c * _) * T, e[3] = (l * c * s - a * u * s - l * i * h + n * u * h + a * i * f - n * c * f) * T, e[4] = b * T, e[5] = (d * m * s - g * u * s + g * i * f - t * m * f - d * i * _ + t * u * _) * T, e[6] = (g * c * s - r * m * s - g * i * h + t * m * h + r * i * _ - t * c * _) * T, e[7] = (r * u * s - d * c * s + d * i * h - t * u * h - r * i * f + t * c * f) * T, e[8] = w * T, e[9] = (g * l * s - d * p * s - g * n * f + t * p * f + d * n * _ - t * l * _) * T, e[10] = (r * p * s - g * a * s + g * n * h - t * p * h - r * n * _ + t * a * _) * T, e[11] = (d * a * s - r * l * s - d * n * h + t * l * h + r * n * f - t * a * f) * T, e[12] = x * T, e[13] = (d * p * i - g * l * i + g * n * u - t * p * u - d * n * m + t * l * m) * T, e[14] = (g * a * i - r * p * i - g * n * c + t * p * c + r * n * m - t * a * m) * T, e[15] = (r * l * i - d * a * i + d * n * c - t * l * c - r * n * u + t * a * u) * T, this
    }
    scale(e) {
        const t = this.elements,
            n = e.x,
            i = e.y,
            s = e.z;
        return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this
    }
    getMaxScaleOnAxis() {
        const e = this.elements,
            t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
            n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
            i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, i))
    }
    makeTranslation(e, t, n) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
    }
    makeRotationX(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
    }
    makeRotationY(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
    }
    makeRotationZ(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }
    makeRotationAxis(e, t) {
        const n = Math.cos(t),
            i = Math.sin(t),
            s = 1 - n,
            r = e.x,
            a = e.y,
            c = e.z,
            h = s * r,
            d = s * a;
        return this.set(h * r + n, h * a - i * c, h * c + i * a, 0, h * a + i * c, d * a + n, d * c - i * r, 0, h * c - i * a, d * c + i * r, s * c * c + n, 0, 0, 0, 0, 1), this
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
    }
    makeShear(e, t, n, i, s, r) {
        return this.set(1, n, s, 0, e, 1, r, 0, t, i, 1, 0, 0, 0, 0, 1), this
    }
    compose(e, t, n) {
        const i = this.elements,
            s = t._x,
            r = t._y,
            a = t._z,
            c = t._w,
            h = s + s,
            d = r + r,
            l = a + a,
            u = s * h,
            f = s * d,
            g = s * l,
            p = r * d,
            m = r * l,
            _ = a * l,
            y = c * h,
            b = c * d,
            w = c * l,
            x = n.x,
            E = n.y,
            T = n.z;
        return i[0] = (1 - (p + _)) * x, i[1] = (f + w) * x, i[2] = (g - b) * x, i[3] = 0, i[4] = (f - w) * E, i[5] = (1 - (u + _)) * E, i[6] = (m + y) * E, i[7] = 0, i[8] = (g + b) * T, i[9] = (m - y) * T, i[10] = (1 - (u + p)) * T, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this
    }
    decompose(e, t, n) {
        const i = this.elements;
        let s = ms.set(i[0], i[1], i[2]).length();
        const r = ms.set(i[4], i[5], i[6]).length(),
            a = ms.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], gn.copy(this);
        const h = 1 / s,
            d = 1 / r,
            l = 1 / a;
        return gn.elements[0] *= h, gn.elements[1] *= h, gn.elements[2] *= h, gn.elements[4] *= d, gn.elements[5] *= d, gn.elements[6] *= d, gn.elements[8] *= l, gn.elements[9] *= l, gn.elements[10] *= l, t.setFromRotationMatrix(gn), n.x = s, n.y = r, n.z = a, this
    }
    makePerspective(e, t, n, i, s, r) {
        r === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        const a = this.elements,
            c = 2 * s / (t - e),
            h = 2 * s / (n - i),
            d = (t + e) / (t - e),
            l = (n + i) / (n - i),
            u = -(r + s) / (r - s),
            f = -2 * r * s / (r - s);
        return a[0] = c, a[4] = 0, a[8] = d, a[12] = 0, a[1] = 0, a[5] = h, a[9] = l, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = f, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
    }
    makeOrthographic(e, t, n, i, s, r) {
        const a = this.elements,
            c = 1 / (t - e),
            h = 1 / (n - i),
            d = 1 / (r - s),
            l = (t + e) * c,
            u = (n + i) * h,
            f = (r + s) * d;
        return a[0] = 2 * c, a[4] = 0, a[8] = 0, a[12] = -l, a[1] = 0, a[5] = 2 * h, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * d, a[14] = -f, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
    }
    equals(e) {
        const t = this.elements,
            n = e.elements;
        for (let i = 0; i < 16; i++)
            if (t[i] !== n[i]) return !1;
        return !0
    }
    fromArray(e, t = 0) {
        for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
        return this
    }
    toArray(e = [], t = 0) {
        const n = this.elements;
        return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
    }
}
_e.prototype.isMatrix4 = !0;
const ms = new C,
    gn = new _e,
    Cm = new C(0, 0, 0),
    Lm = new C(1, 1, 1),
    ri = new C,
    ho = new C,
    jt = new C,
    vh = new _e,
    bh = new Ut;
class rs {
    constructor(e = 0, t = 0, n = 0, i = rs.DefaultOrder) {
        this._x = e, this._y = t, this._z = n, this._order = i
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e, this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e, this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e, this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(e) {
        this._order = e, this._onChangeCallback()
    }
    set(e, t, n, i = this._order) {
        return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._order)
    }
    copy(e) {
        return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
    }
    setFromRotationMatrix(e, t = this._order, n = !0) {
        const i = e.elements,
            s = i[0],
            r = i[4],
            a = i[8],
            c = i[1],
            h = i[5],
            d = i[9],
            l = i[2],
            u = i[6],
            f = i[10];
        switch (t) {
            case "XYZ":
                this._y = Math.asin(At(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-d, f), this._z = Math.atan2(-r, s)) : (this._x = Math.atan2(u, h), this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-At(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-l, s), this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(At(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-l, f), this._z = Math.atan2(-r, h)) : (this._y = 0, this._z = Math.atan2(c, s));
                break;
            case "ZYX":
                this._y = Math.asin(-At(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(u, f), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-r, h));
                break;
            case "YZX":
                this._z = Math.asin(At(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-d, h), this._y = Math.atan2(-l, s)) : (this._x = 0, this._y = Math.atan2(a, f));
                break;
            case "XZY":
                this._z = Math.asin(-At(r, -1, 1)), Math.abs(r) < .9999999 ? (this._x = Math.atan2(u, h), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-d, f), this._y = 0);
                break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
        }
        return this._order = t, n === !0 && this._onChangeCallback(), this
    }
    setFromQuaternion(e, t, n) {
        return vh.makeRotationFromQuaternion(e), this.setFromRotationMatrix(vh, t, n)
    }
    setFromVector3(e, t = this._order) {
        return this.set(e.x, e.y, e.z, t)
    }
    reorder(e) {
        return bh.setFromEuler(this), this.setFromQuaternion(bh, e)
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    }
    fromArray(e) {
        return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this
    }
    toArray(e = [], t = 0) {
        return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
    }
    _onChange(e) {
        return this._onChangeCallback = e, this
    }
    _onChangeCallback() {}
}
rs.prototype.isEuler = !0;
rs.DefaultOrder = "XYZ";
rs.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class nc {
    constructor() {
        this.mask = 1
    }
    set(e) {
        this.mask = (1 << e | 0) >>> 0
    }
    enable(e) {
        this.mask |= 1 << e | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(e) {
        this.mask ^= 1 << e | 0
    }
    disable(e) {
        this.mask &= ~(1 << e | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(e) {
        return (this.mask & e.mask) !== 0
    }
    isEnabled(e) {
        return (this.mask & (1 << e | 0)) !== 0
    }
}
let Rm = 0;
const wh = new C,
    gs = new Ut,
    zn = new _e,
    uo = new C,
    fr = new C,
    Pm = new C,
    Im = new Ut,
    Mh = new C(1, 0, 0),
    Sh = new C(0, 1, 0),
    Th = new C(0, 0, 1),
    Dm = {
        type: "added"
    },
    Eh = {
        type: "removed"
    };
class je extends ts {
    constructor() {
        super(), Object.defineProperty(this, "id", {
            value: Rm++
        }), this.uuid = cn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = je.DefaultUp.clone();
        const e = new C,
            t = new rs,
            n = new Ut,
            i = new C(1, 1, 1);

        function s() {
            n.setFromEuler(t, !1)
        }

        function r() {
            t.setFromQuaternion(n, void 0, !1)
        }
        t._onChange(s), n._onChange(r), Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            modelViewMatrix: {
                value: new _e
            },
            normalMatrix: {
                value: new Lt
            }
        }), this.matrix = new _e, this.matrixWorld = new _e, this.matrixAutoUpdate = je.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new nc, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e), this
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
        return gs.setFromAxisAngle(e, t), this.quaternion.multiply(gs), this
    }
    rotateOnWorldAxis(e, t) {
        return gs.setFromAxisAngle(e, t), this.quaternion.premultiply(gs), this
    }
    rotateX(e) {
        return this.rotateOnAxis(Mh, e)
    }
    rotateY(e) {
        return this.rotateOnAxis(Sh, e)
    }
    rotateZ(e) {
        return this.rotateOnAxis(Th, e)
    }
    translateOnAxis(e, t) {
        return wh.copy(e).applyQuaternion(this.quaternion), this.position.add(wh.multiplyScalar(t)), this
    }
    translateX(e) {
        return this.translateOnAxis(Mh, e)
    }
    translateY(e) {
        return this.translateOnAxis(Sh, e)
    }
    translateZ(e) {
        return this.translateOnAxis(Th, e)
    }
    localToWorld(e) {
        return e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
        return e.applyMatrix4(zn.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, n) {
        e.isVector3 ? uo.copy(e) : uo.set(e, t, n);
        const i = this.parent;
        this.updateWorldMatrix(!0, !1), fr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? zn.lookAt(fr, uo, this.up) : zn.lookAt(uo, fr, this.up), this.quaternion.setFromRotationMatrix(zn), i && (zn.extractRotation(i.matrixWorld), gs.setFromRotationMatrix(zn), this.quaternion.premultiply(gs.invert()))
    }
    add(e) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Dm)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
            return this
        }
        const t = this.children.indexOf(e);
        return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Eh)), this
    }
    removeFromParent() {
        const e = this.parent;
        return e !== null && e.remove(this), this
    }
    clear() {
        for (let e = 0; e < this.children.length; e++) {
            const t = this.children[e];
            t.parent = null, t.dispatchEvent(Eh)
        }
        return this.children.length = 0, this
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1), zn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), zn.multiply(e.parent.matrixWorld)), e.applyMatrix4(zn), this.add(e), e.updateWorldMatrix(!1, !0), this
    }
    getObjectById(e) {
        return this.getObjectByProperty("id", e)
    }
    getObjectByName(e) {
        return this.getObjectByProperty("name", e)
    }
    getObjectByProperty(e, t) {
        if (this[e] === t) return this;
        for (let n = 0, i = this.children.length; n < i; n++) {
            const r = this.children[n].getObjectByProperty(e, t);
            if (r !== void 0) return r
        }
    }
    getWorldPosition(e) {
        return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fr, e, Pm), e
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(fr, Im, e), e
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {}
    traverse(e) {
        e(this);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e)
    }
    traverseVisible(e) {
        if (this.visible === !1) return;
        e(this);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e)
    }
    traverseAncestors(e) {
        const t = this.parent;
        t !== null && (e(t), t.traverseAncestors(e))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e)
    }
    updateWorldMatrix(e, t) {
        const n = this.parent;
        if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
            const i = this.children;
            for (let s = 0, r = i.length; s < r; s++) i[s].updateWorldMatrix(!1, !0)
        }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string",
            n = {};
        t && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        }, n.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const i = {};
        i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));

        function s(a, c) {
            return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid
        }
        if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = s(e.geometries, this.geometry);
            const a = this.geometry.parameters;
            if (a !== void 0 && a.shapes !== void 0) {
                const c = a.shapes;
                if (Array.isArray(c))
                    for (let h = 0, d = c.length; h < d; h++) {
                        const l = c[h];
                        s(e.shapes, l)
                    } else s(e.shapes, c)
            }
        }
        if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
            if (Array.isArray(this.material)) {
                const a = [];
                for (let c = 0, h = this.material.length; c < h; c++) a.push(s(e.materials, this.material[c]));
                i.material = a
            } else i.material = s(e.materials, this.material);
        if (this.children.length > 0) {
            i.children = [];
            for (let a = 0; a < this.children.length; a++) i.children.push(this.children[a].toJSON(e).object)
        }
        if (this.animations.length > 0) {
            i.animations = [];
            for (let a = 0; a < this.animations.length; a++) {
                const c = this.animations[a];
                i.animations.push(s(e.animations, c))
            }
        }
        if (t) {
            const a = r(e.geometries),
                c = r(e.materials),
                h = r(e.textures),
                d = r(e.images),
                l = r(e.shapes),
                u = r(e.skeletons),
                f = r(e.animations),
                g = r(e.nodes);
            a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), h.length > 0 && (n.textures = h), d.length > 0 && (n.images = d), l.length > 0 && (n.shapes = l), u.length > 0 && (n.skeletons = u), f.length > 0 && (n.animations = f), g.length > 0 && (n.nodes = g)
        }
        return n.object = i, n;

        function r(a) {
            const c = [];
            for (const h in a) {
                const d = a[h];
                delete d.metadata, c.push(d)
            }
            return c
        }
    }
    clone(e) {
        return new this.constructor().copy(this, e)
    }
    copy(e, t = !0) {
        if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
            for (let n = 0; n < e.children.length; n++) {
                const i = e.children[n];
                this.add(i.clone())
            }
        return this
    }
}
je.DefaultUp = new C(0, 1, 0);
je.DefaultMatrixAutoUpdate = !0;
je.prototype.isObject3D = !0;
const _n = new C,
    Hn = new C,
    Ha = new C,
    Un = new C,
    _s = new C,
    ys = new C,
    Ah = new C,
    Ua = new C,
    Ga = new C,
    Va = new C;
class wt {
    constructor(e = new C, t = new C, n = new C) {
        this.a = e, this.b = t, this.c = n
    }
    static getNormal(e, t, n, i) {
        i.subVectors(n, t), _n.subVectors(e, t), i.cross(_n);
        const s = i.lengthSq();
        return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0)
    }
    static getBarycoord(e, t, n, i, s) {
        _n.subVectors(i, t), Hn.subVectors(n, t), Ha.subVectors(e, t);
        const r = _n.dot(_n),
            a = _n.dot(Hn),
            c = _n.dot(Ha),
            h = Hn.dot(Hn),
            d = Hn.dot(Ha),
            l = r * h - a * a;
        if (l === 0) return s.set(-2, -1, -1);
        const u = 1 / l,
            f = (h * c - a * d) * u,
            g = (r * d - a * c) * u;
        return s.set(1 - f - g, g, f)
    }
    static containsPoint(e, t, n, i) {
        return this.getBarycoord(e, t, n, i, Un), Un.x >= 0 && Un.y >= 0 && Un.x + Un.y <= 1
    }
    static getUV(e, t, n, i, s, r, a, c) {
        return this.getBarycoord(e, t, n, i, Un), c.set(0, 0), c.addScaledVector(s, Un.x), c.addScaledVector(r, Un.y), c.addScaledVector(a, Un.z), c
    }
    static isFrontFacing(e, t, n, i) {
        return _n.subVectors(n, t), Hn.subVectors(e, t), _n.cross(Hn).dot(i) < 0
    }
    set(e, t, n) {
        return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
    }
    setFromPointsAndIndices(e, t, n, i) {
        return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this
    }
    setFromAttributeAndIndices(e, t, n, i) {
        return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
    }
    getArea() {
        return _n.subVectors(this.c, this.b), Hn.subVectors(this.a, this.b), _n.cross(Hn).length() * .5
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(e) {
        return wt.getNormal(this.a, this.b, this.c, e)
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(e, t) {
        return wt.getBarycoord(e, this.a, this.b, this.c, t)
    }
    getUV(e, t, n, i, s) {
        return wt.getUV(e, this.a, this.b, this.c, t, n, i, s)
    }
    containsPoint(e) {
        return wt.containsPoint(e, this.a, this.b, this.c)
    }
    isFrontFacing(e) {
        return wt.isFrontFacing(this.a, this.b, this.c, e)
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
        const n = this.a,
            i = this.b,
            s = this.c;
        let r, a;
        _s.subVectors(i, n), ys.subVectors(s, n), Ua.subVectors(e, n);
        const c = _s.dot(Ua),
            h = ys.dot(Ua);
        if (c <= 0 && h <= 0) return t.copy(n);
        Ga.subVectors(e, i);
        const d = _s.dot(Ga),
            l = ys.dot(Ga);
        if (d >= 0 && l <= d) return t.copy(i);
        const u = c * l - d * h;
        if (u <= 0 && c >= 0 && d <= 0) return r = c / (c - d), t.copy(n).addScaledVector(_s, r);
        Va.subVectors(e, s);
        const f = _s.dot(Va),
            g = ys.dot(Va);
        if (g >= 0 && f <= g) return t.copy(s);
        const p = f * h - c * g;
        if (p <= 0 && h >= 0 && g <= 0) return a = h / (h - g), t.copy(n).addScaledVector(ys, a);
        const m = d * g - f * l;
        if (m <= 0 && l - d >= 0 && f - g >= 0) return Ah.subVectors(s, i), a = (l - d) / (l - d + (f - g)), t.copy(i).addScaledVector(Ah, a);
        const _ = 1 / (m + p + u);
        return r = p * _, a = u * _, t.copy(n).addScaledVector(_s, r).addScaledVector(ys, a)
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
}
let km = 0;
class dt extends ts {
    constructor() {
        super(), Object.defineProperty(this, "id", {
            value: km++
        }), this.uuid = cn(), this.name = "", this.type = "Material", this.fog = !0, this.blending = Ns, this.side = Ws, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Yu, this.blendDst = Ju, this.blendEquation = Rs, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = vl, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = om, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = La, this.stencilZFail = La, this.stencilZPass = La, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(e) {
        this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(e) {
        if (e !== void 0)
            for (const t in e) {
                const n = e[t];
                if (n === void 0) {
                    console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                    continue
                }
                if (t === "shading") {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === ju;
                    continue
                }
                const i = this[t];
                if (i === void 0) {
                    console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
                    continue
                }
                i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n
            }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        t && (e = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.5,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ns && (n.blending = this.blending), this.side !== Ws && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);

        function i(s) {
            const r = [];
            for (const a in s) {
                const c = s[a];
                delete c.metadata, r.push(c)
            }
            return r
        }
        if (t) {
            const s = i(e.textures),
                r = i(e.images);
            s.length > 0 && (n.textures = s), r.length > 0 && (n.images = r)
        }
        return n
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
        const t = e.clippingPlanes;
        let n = null;
        if (t !== null) {
            const i = t.length;
            n = new Array(i);
            for (let s = 0; s !== i; ++s) n[s] = t[s].clone()
        }
        return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
}
dt.prototype.isMaterial = !0;
dt.fromType = function() {
    return null
};
class ht extends dt {
    constructor(e) {
        super(), this.type = "MeshBasicMaterial", this.color = new ie(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = na, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
    }
}
ht.prototype.isMeshBasicMaterial = !0;
const _t = new C,
    fo = new te;
class ft {
    constructor(e, t, n) {
        if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = Or, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    setUsage(e) {
        return this.usage = e, this
    }
    copy(e) {
        return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this
    }
    copyAt(e, t, n) {
        e *= this.itemSize, n *= t.itemSize;
        for (let i = 0, s = this.itemSize; i < s; i++) this.array[e + i] = t.array[n + i];
        return this
    }
    copyArray(e) {
        return this.array.set(e), this
    }
    copyColorsArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, s = e.length; i < s; i++) {
            let r = e[i];
            r === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), r = new ie), t[n++] = r.r, t[n++] = r.g, t[n++] = r.b
        }
        return this
    }
    copyVector2sArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, s = e.length; i < s; i++) {
            let r = e[i];
            r === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), r = new te), t[n++] = r.x, t[n++] = r.y
        }
        return this
    }
    copyVector3sArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, s = e.length; i < s; i++) {
            let r = e[i];
            r === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), r = new C), t[n++] = r.x, t[n++] = r.y, t[n++] = r.z
        }
        return this
    }
    copyVector4sArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, s = e.length; i < s; i++) {
            let r = e[i];
            r === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), r = new Ke), t[n++] = r.x, t[n++] = r.y, t[n++] = r.z, t[n++] = r.w
        }
        return this
    }
    applyMatrix3(e) {
        if (this.itemSize === 2)
            for (let t = 0, n = this.count; t < n; t++) fo.fromBufferAttribute(this, t), fo.applyMatrix3(e), this.setXY(t, fo.x, fo.y);
        else if (this.itemSize === 3)
            for (let t = 0, n = this.count; t < n; t++) _t.fromBufferAttribute(this, t), _t.applyMatrix3(e), this.setXYZ(t, _t.x, _t.y, _t.z);
        return this
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.count; t < n; t++) _t.fromBufferAttribute(this, t), _t.applyMatrix4(e), this.setXYZ(t, _t.x, _t.y, _t.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++) _t.fromBufferAttribute(this, t), _t.applyNormalMatrix(e), this.setXYZ(t, _t.x, _t.y, _t.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++) _t.fromBufferAttribute(this, t), _t.transformDirection(e), this.setXYZ(t, _t.x, _t.y, _t.z);
        return this
    }
    set(e, t = 0) {
        return this.array.set(e, t), this
    }
    getX(e) {
        return this.array[e * this.itemSize]
    }
    setX(e, t) {
        return this.array[e * this.itemSize] = t, this
    }
    getY(e) {
        return this.array[e * this.itemSize + 1]
    }
    setY(e, t) {
        return this.array[e * this.itemSize + 1] = t, this
    }
    getZ(e) {
        return this.array[e * this.itemSize + 2]
    }
    setZ(e, t) {
        return this.array[e * this.itemSize + 2] = t, this
    }
    getW(e) {
        return this.array[e * this.itemSize + 3]
    }
    setW(e, t) {
        return this.array[e * this.itemSize + 3] = t, this
    }
    setXY(e, t, n) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this
    }
    setXYZ(e, t, n, i) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this
    }
    setXYZW(e, t, n, i, s) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this
    }
    onUpload(e) {
        return this.onUploadCallback = e, this
    }
    clone() {
        return new this.constructor(this.array, this.itemSize).copy(this)
    }
    toJSON() {
        const e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (e.name = this.name), this.usage !== Or && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e
    }
}
ft.prototype.isBufferAttribute = !0;
class sd extends ft {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n)
    }
}
class rd extends ft {
    constructor(e, t, n) {
        super(new Uint32Array(e), t, n)
    }
}
class Fm extends ft {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n)
    }
}
Fm.prototype.isFloat16BufferAttribute = !0;
class mt extends ft {
    constructor(e, t, n) {
        super(new Float32Array(e), t, n)
    }
}
let Bm = 0;
const en = new _e,
    Wa = new je,
    xs = new C,
    Yt = new dn,
    pr = new dn,
    Mt = new C;
class tt extends ts {
    constructor() {
        super(), Object.defineProperty(this, "id", {
            value: Bm++
        }), this.uuid = cn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }, this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new(td(e) ? rd : sd)(e, 1) : this.index = e, this
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    setAttribute(e, t) {
        return this.attributes[e] = t, this
    }
    deleteAttribute(e) {
        return delete this.attributes[e], this
    }
    hasAttribute(e) {
        return this.attributes[e] !== void 0
    }
    addGroup(e, t, n = 0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(e, t) {
        this.drawRange.start = e, this.drawRange.count = t
    }
    applyMatrix4(e) {
        const t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
        const n = this.attributes.normal;
        if (n !== void 0) {
            const s = new Lt().getNormalMatrix(e);
            n.applyNormalMatrix(s), n.needsUpdate = !0
        }
        const i = this.attributes.tangent;
        return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this
    }
    applyQuaternion(e) {
        return en.makeRotationFromQuaternion(e), this.applyMatrix4(en), this
    }
    rotateX(e) {
        return en.makeRotationX(e), this.applyMatrix4(en), this
    }
    rotateY(e) {
        return en.makeRotationY(e), this.applyMatrix4(en), this
    }
    rotateZ(e) {
        return en.makeRotationZ(e), this.applyMatrix4(en), this
    }
    translate(e, t, n) {
        return en.makeTranslation(e, t, n), this.applyMatrix4(en), this
    }
    scale(e, t, n) {
        return en.makeScale(e, t, n), this.applyMatrix4(en), this
    }
    lookAt(e) {
        return Wa.lookAt(e), Wa.updateMatrix(), this.applyMatrix4(Wa.matrix), this
    }
    center() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(xs).negate(), this.translate(xs.x, xs.y, xs.z), this
    }
    setFromPoints(e) {
        const t = [];
        for (let n = 0, i = e.length; n < i; n++) {
            const s = e[n];
            t.push(s.x, s.y, s.z || 0)
        }
        return this.setAttribute("position", new mt(t, 3)), this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new dn);
        const e = this.attributes.position,
            t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new C(-1 / 0, -1 / 0, -1 / 0), new C(1 / 0, 1 / 0, 1 / 0));
            return
        }
        if (e !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(e), t)
                for (let n = 0, i = t.length; n < i; n++) {
                    const s = t[n];
                    Yt.setFromBufferAttribute(s), this.morphTargetsRelative ? (Mt.addVectors(this.boundingBox.min, Yt.min), this.boundingBox.expandByPoint(Mt), Mt.addVectors(this.boundingBox.max, Yt.max), this.boundingBox.expandByPoint(Mt)) : (this.boundingBox.expandByPoint(Yt.min), this.boundingBox.expandByPoint(Yt.max))
                }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new is);
        const e = this.attributes.position,
            t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new C, 1 / 0);
            return
        }
        if (e) {
            const n = this.boundingSphere.center;
            if (Yt.setFromBufferAttribute(e), t)
                for (let s = 0, r = t.length; s < r; s++) {
                    const a = t[s];
                    pr.setFromBufferAttribute(a), this.morphTargetsRelative ? (Mt.addVectors(Yt.min, pr.min), Yt.expandByPoint(Mt), Mt.addVectors(Yt.max, pr.max), Yt.expandByPoint(Mt)) : (Yt.expandByPoint(pr.min), Yt.expandByPoint(pr.max))
                }
            Yt.getCenter(n);
            let i = 0;
            for (let s = 0, r = e.count; s < r; s++) Mt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Mt));
            if (t)
                for (let s = 0, r = t.length; s < r; s++) {
                    const a = t[s],
                        c = this.morphTargetsRelative;
                    for (let h = 0, d = a.count; h < d; h++) Mt.fromBufferAttribute(a, h), c && (xs.fromBufferAttribute(e, h), Mt.add(xs)), i = Math.max(i, n.distanceToSquared(Mt))
                }
            this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeTangents() {
        const e = this.index,
            t = this.attributes;
        if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
            console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return
        }
        const n = e.array,
            i = t.position.array,
            s = t.normal.array,
            r = t.uv.array,
            a = i.length / 3;
        this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new ft(new Float32Array(4 * a), 4));
        const c = this.getAttribute("tangent").array,
            h = [],
            d = [];
        for (let B = 0; B < a; B++) h[B] = new C, d[B] = new C;
        const l = new C,
            u = new C,
            f = new C,
            g = new te,
            p = new te,
            m = new te,
            _ = new C,
            y = new C;

        function b(B, v, L) {
            l.fromArray(i, B * 3), u.fromArray(i, v * 3), f.fromArray(i, L * 3), g.fromArray(r, B * 2), p.fromArray(r, v * 2), m.fromArray(r, L * 2), u.sub(l), f.sub(l), p.sub(g), m.sub(g);
            const U = 1 / (p.x * m.y - m.x * p.y);
            isFinite(U) && (_.copy(u).multiplyScalar(m.y).addScaledVector(f, -p.y).multiplyScalar(U), y.copy(f).multiplyScalar(p.x).addScaledVector(u, -m.x).multiplyScalar(U), h[B].add(_), h[v].add(_), h[L].add(_), d[B].add(y), d[v].add(y), d[L].add(y))
        }
        let w = this.groups;
        w.length === 0 && (w = [{
            start: 0,
            count: n.length
        }]);
        for (let B = 0, v = w.length; B < v; ++B) {
            const L = w[B],
                U = L.start,
                D = L.count;
            for (let O = U, N = U + D; O < N; O += 3) b(n[O + 0], n[O + 1], n[O + 2])
        }
        const x = new C,
            E = new C,
            T = new C,
            R = new C;

        function I(B) {
            T.fromArray(s, B * 3), R.copy(T);
            const v = h[B];
            x.copy(v), x.sub(T.multiplyScalar(T.dot(v))).normalize(), E.crossVectors(R, v);
            const U = E.dot(d[B]) < 0 ? -1 : 1;
            c[B * 4] = x.x, c[B * 4 + 1] = x.y, c[B * 4 + 2] = x.z, c[B * 4 + 3] = U
        }
        for (let B = 0, v = w.length; B < v; ++B) {
            const L = w[B],
                U = L.start,
                D = L.count;
            for (let O = U, N = U + D; O < N; O += 3) I(n[O + 0]), I(n[O + 1]), I(n[O + 2])
        }
    }
    computeVertexNormals() {
        const e = this.index,
            t = this.getAttribute("position");
        if (t !== void 0) {
            let n = this.getAttribute("normal");
            if (n === void 0) n = new ft(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
            else
                for (let u = 0, f = n.count; u < f; u++) n.setXYZ(u, 0, 0, 0);
            const i = new C,
                s = new C,
                r = new C,
                a = new C,
                c = new C,
                h = new C,
                d = new C,
                l = new C;
            if (e)
                for (let u = 0, f = e.count; u < f; u += 3) {
                    const g = e.getX(u + 0),
                        p = e.getX(u + 1),
                        m = e.getX(u + 2);
                    i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, p), r.fromBufferAttribute(t, m), d.subVectors(r, s), l.subVectors(i, s), d.cross(l), a.fromBufferAttribute(n, g), c.fromBufferAttribute(n, p), h.fromBufferAttribute(n, m), a.add(d), c.add(d), h.add(d), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(p, c.x, c.y, c.z), n.setXYZ(m, h.x, h.y, h.z)
                } else
                    for (let u = 0, f = t.count; u < f; u += 3) i.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), r.fromBufferAttribute(t, u + 2), d.subVectors(r, s), l.subVectors(i, s), d.cross(l), n.setXYZ(u + 0, d.x, d.y, d.z), n.setXYZ(u + 1, d.x, d.y, d.z), n.setXYZ(u + 2, d.x, d.y, d.z);
            this.normalizeNormals(), n.needsUpdate = !0
        }
    }
    merge(e, t) {
        if (!(e && e.isBufferGeometry)) {
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
            return
        }
        t === void 0 && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        const n = this.attributes;
        for (const i in n) {
            if (e.attributes[i] === void 0) continue;
            const r = n[i].array,
                a = e.attributes[i],
                c = a.array,
                h = a.itemSize * t,
                d = Math.min(c.length, r.length - h);
            for (let l = 0, u = h; l < d; l++, u++) r[u] = c[l]
        }
        return this
    }
    normalizeNormals() {
        const e = this.attributes.normal;
        for (let t = 0, n = e.count; t < n; t++) Mt.fromBufferAttribute(e, t), Mt.normalize(), e.setXYZ(t, Mt.x, Mt.y, Mt.z)
    }
    toNonIndexed() {
        function e(a, c) {
            const h = a.array,
                d = a.itemSize,
                l = a.normalized,
                u = new h.constructor(c.length * d);
            let f = 0,
                g = 0;
            for (let p = 0, m = c.length; p < m; p++) {
                a.isInterleavedBufferAttribute ? f = c[p] * a.data.stride + a.offset : f = c[p] * d;
                for (let _ = 0; _ < d; _++) u[g++] = h[f++]
            }
            return new ft(u, d, l)
        }
        if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
        const t = new tt,
            n = this.index.array,
            i = this.attributes;
        for (const a in i) {
            const c = i[a],
                h = e(c, n);
            t.setAttribute(a, h)
        }
        const s = this.morphAttributes;
        for (const a in s) {
            const c = [],
                h = s[a];
            for (let d = 0, l = h.length; d < l; d++) {
                const u = h[d],
                    f = e(u, n);
                c.push(f)
            }
            t.morphAttributes[a] = c
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        const r = this.groups;
        for (let a = 0, c = r.length; a < c; a++) {
            const h = r[a];
            t.addGroup(h.start, h.count, h.materialIndex)
        }
        return t
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
            const c = this.parameters;
            for (const h in c) c[h] !== void 0 && (e[h] = c[h]);
            return e
        }
        e.data = {
            attributes: {}
        };
        const t = this.index;
        t !== null && (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        const n = this.attributes;
        for (const c in n) {
            const h = n[c];
            e.data.attributes[c] = h.toJSON(e.data)
        }
        const i = {};
        let s = !1;
        for (const c in this.morphAttributes) {
            const h = this.morphAttributes[c],
                d = [];
            for (let l = 0, u = h.length; l < u; l++) {
                const f = h[l];
                d.push(f.toJSON(e.data))
            }
            d.length > 0 && (i[c] = d, s = !0)
        }
        s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
        const r = this.groups;
        r.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(r)));
        const a = this.boundingSphere;
        return a !== null && (e.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius
        }), e
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
        const t = {};
        this.name = e.name;
        const n = e.index;
        n !== null && this.setIndex(n.clone(t));
        const i = e.attributes;
        for (const h in i) {
            const d = i[h];
            this.setAttribute(h, d.clone(t))
        }
        const s = e.morphAttributes;
        for (const h in s) {
            const d = [],
                l = s[h];
            for (let u = 0, f = l.length; u < f; u++) d.push(l[u].clone(t));
            this.morphAttributes[h] = d
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        const r = e.groups;
        for (let h = 0, d = r.length; h < d; h++) {
            const l = r[h];
            this.addGroup(l.start, l.count, l.materialIndex)
        }
        const a = e.boundingBox;
        a !== null && (this.boundingBox = a.clone());
        const c = e.boundingSphere;
        return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
tt.prototype.isBufferGeometry = !0;
const Ch = new _e,
    vs = new ss,
    qa = new is,
    oi = new C,
    ai = new C,
    li = new C,
    Xa = new C,
    ja = new C,
    Ya = new C,
    po = new C,
    mo = new C,
    go = new C,
    _o = new te,
    yo = new te,
    xo = new te,
    Ja = new C,
    vo = new C;
class St extends je {
    constructor(e = new tt, t = new ht) {
        super(), this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets()
    }
    copy(e) {
        return super.copy(e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this
    }
    updateMorphTargets() {
        const e = this.geometry;
        if (e.isBufferGeometry) {
            const t = e.morphAttributes,
                n = Object.keys(t);
            if (n.length > 0) {
                const i = t[n[0]];
                if (i !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for (let s = 0, r = i.length; s < r; s++) {
                        const a = i[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s
                    }
                }
            }
        } else {
            const t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    }
    raycast(e, t) {
        const n = this.geometry,
            i = this.material,
            s = this.matrixWorld;
        if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), qa.copy(n.boundingSphere), qa.applyMatrix4(s), e.ray.intersectsSphere(qa) === !1) || (Ch.copy(s).invert(), vs.copy(e.ray).applyMatrix4(Ch), n.boundingBox !== null && vs.intersectsBox(n.boundingBox) === !1)) return;
        let r;
        if (n.isBufferGeometry) {
            const a = n.index,
                c = n.attributes.position,
                h = n.morphAttributes.position,
                d = n.morphTargetsRelative,
                l = n.attributes.uv,
                u = n.attributes.uv2,
                f = n.groups,
                g = n.drawRange;
            if (a !== null)
                if (Array.isArray(i))
                    for (let p = 0, m = f.length; p < m; p++) {
                        const _ = f[p],
                            y = i[_.materialIndex],
                            b = Math.max(_.start, g.start),
                            w = Math.min(a.count, Math.min(_.start + _.count, g.start + g.count));
                        for (let x = b, E = w; x < E; x += 3) {
                            const T = a.getX(x),
                                R = a.getX(x + 1),
                                I = a.getX(x + 2);
                            r = bo(this, y, e, vs, c, h, d, l, u, T, R, I), r && (r.faceIndex = Math.floor(x / 3), r.face.materialIndex = _.materialIndex, t.push(r))
                        }
                    } else {
                        const p = Math.max(0, g.start),
                            m = Math.min(a.count, g.start + g.count);
                        for (let _ = p, y = m; _ < y; _ += 3) {
                            const b = a.getX(_),
                                w = a.getX(_ + 1),
                                x = a.getX(_ + 2);
                            r = bo(this, i, e, vs, c, h, d, l, u, b, w, x), r && (r.faceIndex = Math.floor(_ / 3), t.push(r))
                        }
                    } else if (c !== void 0)
                        if (Array.isArray(i))
                            for (let p = 0, m = f.length; p < m; p++) {
                                const _ = f[p],
                                    y = i[_.materialIndex],
                                    b = Math.max(_.start, g.start),
                                    w = Math.min(c.count, Math.min(_.start + _.count, g.start + g.count));
                                for (let x = b, E = w; x < E; x += 3) {
                                    const T = x,
                                        R = x + 1,
                                        I = x + 2;
                                    r = bo(this, y, e, vs, c, h, d, l, u, T, R, I), r && (r.faceIndex = Math.floor(x / 3), r.face.materialIndex = _.materialIndex, t.push(r))
                                }
                            } else {
                                const p = Math.max(0, g.start),
                                    m = Math.min(c.count, g.start + g.count);
                                for (let _ = p, y = m; _ < y; _ += 3) {
                                    const b = _,
                                        w = _ + 1,
                                        x = _ + 2;
                                    r = bo(this, i, e, vs, c, h, d, l, u, b, w, x), r && (r.faceIndex = Math.floor(_ / 3), t.push(r))
                                }
                            }
        } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
    }
}
St.prototype.isMesh = !0;

function Om(o, e, t, n, i, s, r, a) {
    let c;
    if (e.side === xn ? c = n.intersectTriangle(r, s, i, !0, a) : c = n.intersectTriangle(i, s, r, e.side !== Yi, a), c === null) return null;
    vo.copy(a), vo.applyMatrix4(o.matrixWorld);
    const h = t.ray.origin.distanceTo(vo);
    return h < t.near || h > t.far ? null : {
        distance: h,
        point: vo.clone(),
        object: o
    }
}

function bo(o, e, t, n, i, s, r, a, c, h, d, l) {
    oi.fromBufferAttribute(i, h), ai.fromBufferAttribute(i, d), li.fromBufferAttribute(i, l);
    const u = o.morphTargetInfluences;
    if (s && u) {
        po.set(0, 0, 0), mo.set(0, 0, 0), go.set(0, 0, 0);
        for (let g = 0, p = s.length; g < p; g++) {
            const m = u[g],
                _ = s[g];
            m !== 0 && (Xa.fromBufferAttribute(_, h), ja.fromBufferAttribute(_, d), Ya.fromBufferAttribute(_, l), r ? (po.addScaledVector(Xa, m), mo.addScaledVector(ja, m), go.addScaledVector(Ya, m)) : (po.addScaledVector(Xa.sub(oi), m), mo.addScaledVector(ja.sub(ai), m), go.addScaledVector(Ya.sub(li), m)))
        }
        oi.add(po), ai.add(mo), li.add(go)
    }
    o.isSkinnedMesh && (o.boneTransform(h, oi), o.boneTransform(d, ai), o.boneTransform(l, li));
    const f = Om(o, e, t, n, oi, ai, li, Ja);
    if (f) {
        a && (_o.fromBufferAttribute(a, h), yo.fromBufferAttribute(a, d), xo.fromBufferAttribute(a, l), f.uv = wt.getUV(Ja, oi, ai, li, _o, yo, xo, new te)), c && (_o.fromBufferAttribute(c, h), yo.fromBufferAttribute(c, d), xo.fromBufferAttribute(c, l), f.uv2 = wt.getUV(Ja, oi, ai, li, _o, yo, xo, new te));
        const g = {
            a: h,
            b: d,
            c: l,
            normal: new C,
            materialIndex: 0
        };
        wt.getNormal(oi, ai, li, g.normal), f.face = g
    }
    return f
}
class Qr extends tt {
    constructor(e = 1, t = 1, n = 1, i = 1, s = 1, r = 1) {
        super(), this.type = "BoxGeometry", this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: i,
            heightSegments: s,
            depthSegments: r
        };
        const a = this;
        i = Math.floor(i), s = Math.floor(s), r = Math.floor(r);
        const c = [],
            h = [],
            d = [],
            l = [];
        let u = 0,
            f = 0;
        g("z", "y", "x", -1, -1, n, t, e, r, s, 0), g("z", "y", "x", 1, -1, n, t, -e, r, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, r, 2), g("x", "z", "y", 1, -1, e, n, -t, i, r, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new mt(h, 3)), this.setAttribute("normal", new mt(d, 3)), this.setAttribute("uv", new mt(l, 2));

        function g(p, m, _, y, b, w, x, E, T, R, I) {
            const B = w / T,
                v = x / R,
                L = w / 2,
                U = x / 2,
                D = E / 2,
                O = T + 1,
                N = R + 1;
            let H = 0,
                F = 0;
            const X = new C;
            for (let Z = 0; Z < N; Z++) {
                const Q = Z * v - U;
                for (let $ = 0; $ < O; $++) {
                    const ue = $ * B - L;
                    X[p] = ue * y, X[m] = Q * b, X[_] = D, h.push(X.x, X.y, X.z), X[p] = 0, X[m] = 0, X[_] = E > 0 ? 1 : -1, d.push(X.x, X.y, X.z), l.push($ / T), l.push(1 - Z / R), H += 1
                }
            }
            for (let Z = 0; Z < R; Z++)
                for (let Q = 0; Q < T; Q++) {
                    const $ = u + Q + O * Z,
                        ue = u + Q + O * (Z + 1),
                        Me = u + (Q + 1) + O * (Z + 1),
                        xe = u + (Q + 1) + O * Z;
                    c.push($, ue, xe), c.push(ue, Me, xe), F += 6
                }
            a.addGroup(f, F, I), f += F, u += H
        }
    }
    static fromJSON(e) {
        return new Qr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
    }
}

function Js(o) {
    const e = {};
    for (const t in o) {
        e[t] = {};
        for (const n in o[t]) {
            const i = o[t][n];
            i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i
        }
    }
    return e
}

function Pt(o) {
    const e = {};
    for (let t = 0; t < o.length; t++) {
        const n = Js(o[t]);
        for (const i in n) e[i] = n[i]
    }
    return e
}
const Nm = {
    clone: Js,
    merge: Pt
};
var zm = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
    Hm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ot extends dt {
    constructor(e) {
        super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = zm, this.fragmentShader = Hm, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
    }
    copy(e) {
        return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Js(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        t.glslVersion = this.glslVersion, t.uniforms = {};
        for (const i in this.uniforms) {
            const r = this.uniforms[i].value;
            r && r.isTexture ? t.uniforms[i] = {
                type: "t",
                value: r.toJSON(e).uuid
            } : r && r.isColor ? t.uniforms[i] = {
                type: "c",
                value: r.getHex()
            } : r && r.isVector2 ? t.uniforms[i] = {
                type: "v2",
                value: r.toArray()
            } : r && r.isVector3 ? t.uniforms[i] = {
                type: "v3",
                value: r.toArray()
            } : r && r.isVector4 ? t.uniforms[i] = {
                type: "v4",
                value: r.toArray()
            } : r && r.isMatrix3 ? t.uniforms[i] = {
                type: "m3",
                value: r.toArray()
            } : r && r.isMatrix4 ? t.uniforms[i] = {
                type: "m4",
                value: r.toArray()
            } : t.uniforms[i] = {
                value: r
            }
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
        const n = {};
        for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
        return Object.keys(n).length > 0 && (t.extensions = n), t
    }
}
Ot.prototype.isShaderMaterial = !0;
let ic = class extends je {
    constructor() {
        super(), this.type = "Camera", this.matrixWorldInverse = new _e, this.projectionMatrix = new _e, this.projectionMatrixInverse = new _e
    }
    copy(e, t) {
        return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(-t[8], -t[9], -t[10]).normalize()
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return new this.constructor().copy(this)
    }
};
ic.prototype.isCamera = !0;
class Dt extends ic {
    constructor(e = 50, t = 1, n = .1, i = 2e3) {
        super(), this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
    }
    setFocalLength(e) {
        const t = .5 * this.getFilmHeight() / e;
        this.fov = Nr * 2 * Math.atan(t), this.updateProjectionMatrix()
    }
    getFocalLength() {
        const e = Math.tan(Cr * .5 * this.fov);
        return .5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
        return Nr * 2 * Math.atan(Math.tan(Cr * .5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    setViewOffset(e, t, n, i, s, r) {
        this.aspect = e / t, this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = r, this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = this.near;
        let t = e * Math.tan(Cr * .5 * this.fov) / this.zoom,
            n = 2 * t,
            i = this.aspect * n,
            s = -.5 * i;
        const r = this.view;
        if (this.view !== null && this.view.enabled) {
            const c = r.fullWidth,
                h = r.fullHeight;
            s += r.offsetX * i / c, t -= r.offsetY * n / h, i *= r.width / c, n *= r.height / h
        }
        const a = this.filmOffset;
        a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
    }
}
Dt.prototype.isPerspectiveCamera = !0;
const bs = 90,
    ws = 1;
class sc extends je {
    constructor(e, t, n) {
        if (super(), this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) {
            console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            return
        }
        this.renderTarget = n;
        const i = new Dt(bs, ws, e, t);
        i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new C(1, 0, 0)), this.add(i);
        const s = new Dt(bs, ws, e, t);
        s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new C(-1, 0, 0)), this.add(s);
        const r = new Dt(bs, ws, e, t);
        r.layers = this.layers, r.up.set(0, 0, 1), r.lookAt(new C(0, 1, 0)), this.add(r);
        const a = new Dt(bs, ws, e, t);
        a.layers = this.layers, a.up.set(0, 0, -1), a.lookAt(new C(0, -1, 0)), this.add(a);
        const c = new Dt(bs, ws, e, t);
        c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new C(0, 0, 1)), this.add(c);
        const h = new Dt(bs, ws, e, t);
        h.layers = this.layers, h.up.set(0, -1, 0), h.lookAt(new C(0, 0, -1)), this.add(h)
    }
    update(e, t) {
        this.parent === null && this.updateMatrixWorld();
        const n = this.renderTarget,
            [i, s, r, a, c, h] = this.children,
            d = e.getRenderTarget(),
            l = e.outputEncoding,
            u = e.toneMapping,
            f = e.xr.enabled;
        e.outputEncoding = Zn, e.toneMapping = Jn, e.xr.enabled = !1;
        const g = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, r), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5), e.render(t, h), e.setRenderTarget(d), e.outputEncoding = l, e.toneMapping = u, e.xr.enabled = f, n.texture.needsPMREMUpdate = !0
    }
}
class ra extends xt {
    constructor(e, t, n, i, s, r, a, c, h, d) {
        e = e !== void 0 ? e : [], t = t !== void 0 ? t : qs, super(e, t, n, i, s, r, a, c, h, d), this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
ra.prototype.isCubeTexture = !0;
class od extends Zt {
    constructor(e, t = {}) {
        super(e, e, t);
        const n = {
                width: e,
                height: e,
                depth: 1
            },
            i = [n, n, n, n, n, n];
        this.texture = new ra(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : It
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
        const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
                fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
            },
            i = new Qr(5, 5, 5),
            s = new Ot({
                name: "CubemapFromEquirect",
                uniforms: Js(n.uniforms),
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader,
                side: xn,
                blending: mi
            });
        s.uniforms.tEquirect.value = t;
        const r = new St(i, s),
            a = t.minFilter;
        return t.minFilter === ir && (t.minFilter = It), new sc(1, 10, this).update(e, r), t.minFilter = a, r.geometry.dispose(), r.material.dispose(), this
    }
    clear(e, t, n, i) {
        const s = e.getRenderTarget();
        for (let r = 0; r < 6; r++) e.setRenderTarget(this, r), e.clear(t, n, i);
        e.setRenderTarget(s)
    }
}
od.prototype.isWebGLCubeRenderTarget = !0;
const Ka = new C,
    Um = new C,
    Gm = new Lt;
class Xn {
    constructor(e = new C(1, 0, 0), t = 0) {
        this.normal = e, this.constant = t
    }
    set(e, t) {
        return this.normal.copy(e), this.constant = t, this
    }
    setComponents(e, t, n, i) {
        return this.normal.set(e, t, n), this.constant = i, this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e), this.constant = -t.dot(this.normal), this
    }
    setFromCoplanarPoints(e, t, n) {
        const i = Ka.subVectors(n, t).cross(Um.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, e), this
    }
    copy(e) {
        return this.normal.copy(e.normal), this.constant = e.constant, this
    }
    normalize() {
        const e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e), this.constant *= e, this
    }
    negate() {
        return this.constant *= -1, this.normal.negate(), this
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
    }
    intersectLine(e, t) {
        const n = e.delta(Ka),
            i = this.normal.dot(n);
        if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
        const s = -(e.start.dot(this.normal) + this.constant) / i;
        return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start)
    }
    intersectsLine(e) {
        const t = this.distanceToPoint(e.start),
            n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0
    }
    intersectsBox(e) {
        return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(e, t) {
        const n = t || Gm.getNormalMatrix(e),
            i = this.coplanarPoint(Ka).applyMatrix4(e),
            s = this.normal.applyMatrix3(n).normalize();
        return this.constant = -i.dot(s), this
    }
    translate(e) {
        return this.constant -= e.dot(this.normal), this
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
Xn.prototype.isPlane = !0;
const Ms = new is,
    wo = new C;
class oa {
    constructor(e = new Xn, t = new Xn, n = new Xn, i = new Xn, s = new Xn, r = new Xn) {
        this.planes = [e, t, n, i, s, r]
    }
    set(e, t, n, i, s, r) {
        const a = this.planes;
        return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(r), this
    }
    copy(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
        return this
    }
    setFromProjectionMatrix(e) {
        const t = this.planes,
            n = e.elements,
            i = n[0],
            s = n[1],
            r = n[2],
            a = n[3],
            c = n[4],
            h = n[5],
            d = n[6],
            l = n[7],
            u = n[8],
            f = n[9],
            g = n[10],
            p = n[11],
            m = n[12],
            _ = n[13],
            y = n[14],
            b = n[15];
        return t[0].setComponents(a - i, l - c, p - u, b - m).normalize(), t[1].setComponents(a + i, l + c, p + u, b + m).normalize(), t[2].setComponents(a + s, l + h, p + f, b + _).normalize(), t[3].setComponents(a - s, l - h, p - f, b - _).normalize(), t[4].setComponents(a - r, l - d, p - g, b - y).normalize(), t[5].setComponents(a + r, l + d, p + g, b + y).normalize(), this
    }
    intersectsObject(e) {
        const t = e.geometry;
        return t.boundingSphere === null && t.computeBoundingSphere(), Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Ms)
    }
    intersectsSprite(e) {
        return Ms.center.set(0, 0, 0), Ms.radius = .7071067811865476, Ms.applyMatrix4(e.matrixWorld), this.intersectsSphere(Ms)
    }
    intersectsSphere(e) {
        const t = this.planes,
            n = e.center,
            i = -e.radius;
        for (let s = 0; s < 6; s++)
            if (t[s].distanceToPoint(n) < i) return !1;
        return !0
    }
    intersectsBox(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) {
            const i = t[n];
            if (wo.x = i.normal.x > 0 ? e.max.x : e.min.x, wo.y = i.normal.y > 0 ? e.max.y : e.min.y, wo.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(wo) < 0) return !1
        }
        return !0
    }
    containsPoint(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            if (t[n].distanceToPoint(e) < 0) return !1;
        return !0
    }
    clone() {
        return new this.constructor().copy(this)
    }
}

function ad() {
    let o = null,
        e = !1,
        t = null,
        n = null;

    function i(s, r) {
        t(s, r), n = o.requestAnimationFrame(i)
    }
    return {
        start: function() {
            e !== !0 && t !== null && (n = o.requestAnimationFrame(i), e = !0)
        },
        stop: function() {
            o.cancelAnimationFrame(n), e = !1
        },
        setAnimationLoop: function(s) {
            t = s
        },
        setContext: function(s) {
            o = s
        }
    }
}

function Vm(o, e) {
    const t = e.isWebGL2,
        n = new WeakMap;

    function i(h, d) {
        const l = h.array,
            u = h.usage,
            f = o.createBuffer();
        o.bindBuffer(d, f), o.bufferData(d, l, u), h.onUploadCallback();
        let g;
        if (l instanceof Float32Array) g = 5126;
        else if (l instanceof Uint16Array)
            if (h.isFloat16BufferAttribute)
                if (t) g = 5131;
                else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
        else g = 5123;
        else if (l instanceof Int16Array) g = 5122;
        else if (l instanceof Uint32Array) g = 5125;
        else if (l instanceof Int32Array) g = 5124;
        else if (l instanceof Int8Array) g = 5120;
        else if (l instanceof Uint8Array) g = 5121;
        else if (l instanceof Uint8ClampedArray) g = 5121;
        else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
        return {
            buffer: f,
            type: g,
            bytesPerElement: l.BYTES_PER_ELEMENT,
            version: h.version
        }
    }

    function s(h, d, l) {
        const u = d.array,
            f = d.updateRange;
        o.bindBuffer(l, h), f.count === -1 ? o.bufferSubData(l, 0, u) : (t ? o.bufferSubData(l, f.offset * u.BYTES_PER_ELEMENT, u, f.offset, f.count) : o.bufferSubData(l, f.offset * u.BYTES_PER_ELEMENT, u.subarray(f.offset, f.offset + f.count)), f.count = -1)
    }

    function r(h) {
        return h.isInterleavedBufferAttribute && (h = h.data), n.get(h)
    }

    function a(h) {
        h.isInterleavedBufferAttribute && (h = h.data);
        const d = n.get(h);
        d && (o.deleteBuffer(d.buffer), n.delete(h))
    }

    function c(h, d) {
        if (h.isGLBufferAttribute) {
            const u = n.get(h);
            (!u || u.version < h.version) && n.set(h, {
                buffer: h.buffer,
                type: h.type,
                bytesPerElement: h.elementSize,
                version: h.version
            });
            return
        }
        h.isInterleavedBufferAttribute && (h = h.data);
        const l = n.get(h);
        l === void 0 ? n.set(h, i(h, d)) : l.version < h.version && (s(l.buffer, h, d), l.version = h.version)
    }
    return {
        get: r,
        remove: a,
        update: c
    }
}
class aa extends tt {
    constructor(e = 1, t = 1, n = 1, i = 1) {
        super(), this.type = "PlaneGeometry", this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: i
        };
        const s = e / 2,
            r = t / 2,
            a = Math.floor(n),
            c = Math.floor(i),
            h = a + 1,
            d = c + 1,
            l = e / a,
            u = t / c,
            f = [],
            g = [],
            p = [],
            m = [];
        for (let _ = 0; _ < d; _++) {
            const y = _ * u - r;
            for (let b = 0; b < h; b++) {
                const w = b * l - s;
                g.push(w, -y, 0), p.push(0, 0, 1), m.push(b / a), m.push(1 - _ / c)
            }
        }
        for (let _ = 0; _ < c; _++)
            for (let y = 0; y < a; y++) {
                const b = y + h * _,
                    w = y + h * (_ + 1),
                    x = y + 1 + h * (_ + 1),
                    E = y + 1 + h * _;
                f.push(b, w, E), f.push(w, x, E)
            }
        this.setIndex(f), this.setAttribute("position", new mt(g, 3)), this.setAttribute("normal", new mt(p, 3)), this.setAttribute("uv", new mt(m, 2))
    }
    static fromJSON(e) {
        return new aa(e.width, e.height, e.widthSegments, e.heightSegments)
    }
}
var Wm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
    qm = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    Xm = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
    jm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
    Ym = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
    Jm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
    Km = "vec3 transformed = vec3( position );",
    Zm = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
    $m = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
    Qm = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
    eg = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
    tg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
    ng = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
    ig = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
    sg = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
    rg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
    og = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
    ag = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
    lg = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
    cg = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
    hg = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
    ug = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
    dg = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
    fg = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
    pg = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
    mg = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    gg = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
    _g = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
    yg = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
    xg = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
    vg = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
    bg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
    wg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
    Mg = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
    Sg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
    Tg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
    Eg = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,
    Ag = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
    Cg = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
    Lg = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,
    Rg = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
    Pg = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
    Ig = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
    Dg = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
    kg = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
    Fg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
    Bg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
    Og = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
    Ng = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
    zg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
    Hg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
    Ug = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
    Gg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    Vg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
    Wg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
    qg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
    Xg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
    jg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
    Yg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    Jg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
    Kg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
    Zg = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
    $g = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
    Qg = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
    e_ = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
    t_ = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
    n_ = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
    i_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    s_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    r_ = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
    o_ = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
    a_ = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
    l_ = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
    c_ = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
    h_ = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
    u_ = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
    d_ = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
    f_ = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
    p_ = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
    m_ = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
    g_ = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
    __ = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
    y_ = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
    x_ = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
    v_ = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
    b_ = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
    w_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
    M_ = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,
    S_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
    T_ = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
    E_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
    A_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
    C_ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
    L_ = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
    R_ = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,
    P_ = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
    I_ = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
    D_ = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
    k_ = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
    F_ = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
    B_ = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
    O_ = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
    N_ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const z_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
    H_ = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    U_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    G_ = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    V_ = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
    W_ = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
    q_ = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
    X_ = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
    j_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
    Y_ = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    J_ = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    K_ = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    Z_ = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
    $_ = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Q_ = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    e0 = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    t0 = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
    n0 = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    i0 = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
    s0 = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
    r0 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    o0 = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    a0 = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
    l0 = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    c0 = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    h0 = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    u0 = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
    d0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    f0 = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    p0 = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
    m0 = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    g0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
    Oe = {
        alphamap_fragment: Wm,
        alphamap_pars_fragment: qm,
        alphatest_fragment: Xm,
        alphatest_pars_fragment: jm,
        aomap_fragment: Ym,
        aomap_pars_fragment: Jm,
        begin_vertex: Km,
        beginnormal_vertex: Zm,
        bsdfs: $m,
        bumpmap_pars_fragment: Qm,
        clipping_planes_fragment: eg,
        clipping_planes_pars_fragment: tg,
        clipping_planes_pars_vertex: ng,
        clipping_planes_vertex: ig,
        color_fragment: sg,
        color_pars_fragment: rg,
        color_pars_vertex: og,
        color_vertex: ag,
        common: lg,
        cube_uv_reflection_fragment: cg,
        defaultnormal_vertex: hg,
        displacementmap_pars_vertex: ug,
        displacementmap_vertex: dg,
        emissivemap_fragment: fg,
        emissivemap_pars_fragment: pg,
        encodings_fragment: mg,
        encodings_pars_fragment: gg,
        envmap_fragment: _g,
        envmap_common_pars_fragment: yg,
        envmap_pars_fragment: xg,
        envmap_pars_vertex: vg,
        envmap_physical_pars_fragment: Pg,
        envmap_vertex: bg,
        fog_vertex: wg,
        fog_pars_vertex: Mg,
        fog_fragment: Sg,
        fog_pars_fragment: Tg,
        gradientmap_pars_fragment: Eg,
        lightmap_fragment: Ag,
        lightmap_pars_fragment: Cg,
        lights_lambert_vertex: Lg,
        lights_pars_begin: Rg,
        lights_toon_fragment: Ig,
        lights_toon_pars_fragment: Dg,
        lights_phong_fragment: kg,
        lights_phong_pars_fragment: Fg,
        lights_physical_fragment: Bg,
        lights_physical_pars_fragment: Og,
        lights_fragment_begin: Ng,
        lights_fragment_maps: zg,
        lights_fragment_end: Hg,
        logdepthbuf_fragment: Ug,
        logdepthbuf_pars_fragment: Gg,
        logdepthbuf_pars_vertex: Vg,
        logdepthbuf_vertex: Wg,
        map_fragment: qg,
        map_pars_fragment: Xg,
        map_particle_fragment: jg,
        map_particle_pars_fragment: Yg,
        metalnessmap_fragment: Jg,
        metalnessmap_pars_fragment: Kg,
        morphcolor_vertex: Zg,
        morphnormal_vertex: $g,
        morphtarget_pars_vertex: Qg,
        morphtarget_vertex: e_,
        normal_fragment_begin: t_,
        normal_fragment_maps: n_,
        normal_pars_fragment: i_,
        normal_pars_vertex: s_,
        normal_vertex: r_,
        normalmap_pars_fragment: o_,
        clearcoat_normal_fragment_begin: a_,
        clearcoat_normal_fragment_maps: l_,
        clearcoat_pars_fragment: c_,
        output_fragment: h_,
        packing: u_,
        premultiplied_alpha_fragment: d_,
        project_vertex: f_,
        dithering_fragment: p_,
        dithering_pars_fragment: m_,
        roughnessmap_fragment: g_,
        roughnessmap_pars_fragment: __,
        shadowmap_pars_fragment: y_,
        shadowmap_pars_vertex: x_,
        shadowmap_vertex: v_,
        shadowmask_pars_fragment: b_,
        skinbase_vertex: w_,
        skinning_pars_vertex: M_,
        skinning_vertex: S_,
        skinnormal_vertex: T_,
        specularmap_fragment: E_,
        specularmap_pars_fragment: A_,
        tonemapping_fragment: C_,
        tonemapping_pars_fragment: L_,
        transmission_fragment: R_,
        transmission_pars_fragment: P_,
        uv_pars_fragment: I_,
        uv_pars_vertex: D_,
        uv_vertex: k_,
        uv2_pars_fragment: F_,
        uv2_pars_vertex: B_,
        uv2_vertex: O_,
        worldpos_vertex: N_,
        background_vert: z_,
        background_frag: H_,
        cube_vert: U_,
        cube_frag: G_,
        depth_vert: V_,
        depth_frag: W_,
        distanceRGBA_vert: q_,
        distanceRGBA_frag: X_,
        equirect_vert: j_,
        equirect_frag: Y_,
        linedashed_vert: J_,
        linedashed_frag: K_,
        meshbasic_vert: Z_,
        meshbasic_frag: $_,
        meshlambert_vert: Q_,
        meshlambert_frag: e0,
        meshmatcap_vert: t0,
        meshmatcap_frag: n0,
        meshnormal_vert: i0,
        meshnormal_frag: s0,
        meshphong_vert: r0,
        meshphong_frag: o0,
        meshphysical_vert: a0,
        meshphysical_frag: l0,
        meshtoon_vert: c0,
        meshtoon_frag: h0,
        points_vert: u0,
        points_frag: d0,
        shadow_vert: f0,
        shadow_frag: p0,
        sprite_vert: m0,
        sprite_frag: g0
    },
    ae = {
        common: {
            diffuse: {
                value: new ie(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new Lt
            },
            uv2Transform: {
                value: new Lt
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            ior: {
                value: 1.5
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new te(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new ie(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new ie(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new Lt
            }
        },
        sprite: {
            diffuse: {
                value: new ie(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new te(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new Lt
            }
        }
    },
    An = {
        basic: {
            uniforms: Pt([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.fog]),
            vertexShader: Oe.meshbasic_vert,
            fragmentShader: Oe.meshbasic_frag
        },
        lambert: {
            uniforms: Pt([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.fog, ae.lights, {
                emissive: {
                    value: new ie(0)
                }
            }]),
            vertexShader: Oe.meshlambert_vert,
            fragmentShader: Oe.meshlambert_frag
        },
        phong: {
            uniforms: Pt([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, ae.lights, {
                emissive: {
                    value: new ie(0)
                },
                specular: {
                    value: new ie(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: Oe.meshphong_vert,
            fragmentShader: Oe.meshphong_frag
        },
        standard: {
            uniforms: Pt([ae.common, ae.envmap, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.roughnessmap, ae.metalnessmap, ae.fog, ae.lights, {
                emissive: {
                    value: new ie(0)
                },
                roughness: {
                    value: 1
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: Oe.meshphysical_vert,
            fragmentShader: Oe.meshphysical_frag
        },
        toon: {
            uniforms: Pt([ae.common, ae.aomap, ae.lightmap, ae.emissivemap, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.gradientmap, ae.fog, ae.lights, {
                emissive: {
                    value: new ie(0)
                }
            }]),
            vertexShader: Oe.meshtoon_vert,
            fragmentShader: Oe.meshtoon_frag
        },
        matcap: {
            uniforms: Pt([ae.common, ae.bumpmap, ae.normalmap, ae.displacementmap, ae.fog, {
                matcap: {
                    value: null
                }
            }]),
            vertexShader: Oe.meshmatcap_vert,
            fragmentShader: Oe.meshmatcap_frag
        },
        points: {
            uniforms: Pt([ae.points, ae.fog]),
            vertexShader: Oe.points_vert,
            fragmentShader: Oe.points_frag
        },
        dashed: {
            uniforms: Pt([ae.common, ae.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: Oe.linedashed_vert,
            fragmentShader: Oe.linedashed_frag
        },
        depth: {
            uniforms: Pt([ae.common, ae.displacementmap]),
            vertexShader: Oe.depth_vert,
            fragmentShader: Oe.depth_frag
        },
        normal: {
            uniforms: Pt([ae.common, ae.bumpmap, ae.normalmap, ae.displacementmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Oe.meshnormal_vert,
            fragmentShader: Oe.meshnormal_frag
        },
        sprite: {
            uniforms: Pt([ae.sprite, ae.fog]),
            vertexShader: Oe.sprite_vert,
            fragmentShader: Oe.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new Lt
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: Oe.background_vert,
            fragmentShader: Oe.background_frag
        },
        cube: {
            uniforms: Pt([ae.envmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Oe.cube_vert,
            fragmentShader: Oe.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: Oe.equirect_vert,
            fragmentShader: Oe.equirect_frag
        },
        distanceRGBA: {
            uniforms: Pt([ae.common, ae.displacementmap, {
                referencePosition: {
                    value: new C
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1e3
                }
            }]),
            vertexShader: Oe.distanceRGBA_vert,
            fragmentShader: Oe.distanceRGBA_frag
        },
        shadow: {
            uniforms: Pt([ae.lights, ae.fog, {
                color: {
                    value: new ie(0)
                },
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Oe.shadow_vert,
            fragmentShader: Oe.shadow_frag
        }
    };
An.physical = {
    uniforms: Pt([An.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatNormalScale: {
            value: new te(1, 1)
        },
        clearcoatNormalMap: {
            value: null
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new ie(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionSamplerSize: {
            value: new te
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new ie(0)
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularColor: {
            value: new ie(1, 1, 1)
        },
        specularColorMap: {
            value: null
        }
    }]),
    vertexShader: Oe.meshphysical_vert,
    fragmentShader: Oe.meshphysical_frag
};

function _0(o, e, t, n, i, s) {
    const r = new ie(0);
    let a = i === !0 ? 0 : 1,
        c, h, d = null,
        l = 0,
        u = null;

    function f(p, m) {
        let _ = !1,
            y = m.isScene === !0 ? m.background : null;
        y && y.isTexture && (y = e.get(y));
        const b = o.xr,
            w = b.getSession && b.getSession();
        w && w.environmentBlendMode === "additive" && (y = null), y === null ? g(r, a) : y && y.isColor && (g(y, 1), _ = !0), (o.autoClear || _) && o.clear(o.autoClearColor, o.autoClearDepth, o.autoClearStencil), y && (y.isCubeTexture || y.mapping === ia) ? (h === void 0 && (h = new St(new Qr(1, 1, 1), new Ot({
            name: "BackgroundCubeMaterial",
            uniforms: Js(An.cube.uniforms),
            vertexShader: An.cube.vertexShader,
            fragmentShader: An.cube.fragmentShader,
            side: xn,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(x, E, T) {
            this.matrixWorld.copyPosition(T.matrixWorld)
        }, Object.defineProperty(h.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value
            }
        }), n.update(h)), h.material.uniforms.envMap.value = y, h.material.uniforms.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, (d !== y || l !== y.version || u !== o.toneMapping) && (h.material.needsUpdate = !0, d = y, l = y.version, u = o.toneMapping), p.unshift(h, h.geometry, h.material, 0, 0, null)) : y && y.isTexture && (c === void 0 && (c = new St(new aa(2, 2), new Ot({
            name: "BackgroundMaterial",
            uniforms: Js(An.background.uniforms),
            vertexShader: An.background.vertexShader,
            fragmentShader: An.background.fragmentShader,
            side: Ws,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
            get: function() {
                return this.uniforms.t2D.value
            }
        }), n.update(c)), c.material.uniforms.t2D.value = y, y.matrixAutoUpdate === !0 && y.updateMatrix(), c.material.uniforms.uvTransform.value.copy(y.matrix), (d !== y || l !== y.version || u !== o.toneMapping) && (c.material.needsUpdate = !0, d = y, l = y.version, u = o.toneMapping), p.unshift(c, c.geometry, c.material, 0, 0, null))
    }

    function g(p, m) {
        t.buffers.color.setClear(p.r, p.g, p.b, m, s)
    }
    return {
        getClearColor: function() {
            return r
        },
        setClearColor: function(p, m = 1) {
            r.set(p), a = m, g(r, a)
        },
        getClearAlpha: function() {
            return a
        },
        setClearAlpha: function(p) {
            a = p, g(r, a)
        },
        render: f
    }
}

function y0(o, e, t, n) {
    const i = o.getParameter(34921),
        s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
        r = n.isWebGL2 || s !== null,
        a = {},
        c = m(null);
    let h = c,
        d = !1;

    function l(D, O, N, H, F) {
        let X = !1;
        if (r) {
            const Z = p(H, N, O);
            h !== Z && (h = Z, f(h.object)), X = _(H, F), X && y(H, F)
        } else {
            const Z = O.wireframe === !0;
            (h.geometry !== H.id || h.program !== N.id || h.wireframe !== Z) && (h.geometry = H.id, h.program = N.id, h.wireframe = Z, X = !0)
        }
        D.isInstancedMesh === !0 && (X = !0), F !== null && t.update(F, 34963), (X || d) && (d = !1, R(D, O, N, H), F !== null && o.bindBuffer(34963, t.get(F).buffer))
    }

    function u() {
        return n.isWebGL2 ? o.createVertexArray() : s.createVertexArrayOES()
    }

    function f(D) {
        return n.isWebGL2 ? o.bindVertexArray(D) : s.bindVertexArrayOES(D)
    }

    function g(D) {
        return n.isWebGL2 ? o.deleteVertexArray(D) : s.deleteVertexArrayOES(D)
    }

    function p(D, O, N) {
        const H = N.wireframe === !0;
        let F = a[D.id];
        F === void 0 && (F = {}, a[D.id] = F);
        let X = F[O.id];
        X === void 0 && (X = {}, F[O.id] = X);
        let Z = X[H];
        return Z === void 0 && (Z = m(u()), X[H] = Z), Z
    }

    function m(D) {
        const O = [],
            N = [],
            H = [];
        for (let F = 0; F < i; F++) O[F] = 0, N[F] = 0, H[F] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: O,
            enabledAttributes: N,
            attributeDivisors: H,
            object: D,
            attributes: {},
            index: null
        }
    }

    function _(D, O) {
        const N = h.attributes,
            H = D.attributes;
        let F = 0;
        for (const X in H) {
            const Z = N[X],
                Q = H[X];
            if (Z === void 0 || Z.attribute !== Q || Z.data !== Q.data) return !0;
            F++
        }
        return h.attributesNum !== F || h.index !== O
    }

    function y(D, O) {
        const N = {},
            H = D.attributes;
        let F = 0;
        for (const X in H) {
            const Z = H[X],
                Q = {};
            Q.attribute = Z, Z.data && (Q.data = Z.data), N[X] = Q, F++
        }
        h.attributes = N, h.attributesNum = F, h.index = O
    }

    function b() {
        const D = h.newAttributes;
        for (let O = 0, N = D.length; O < N; O++) D[O] = 0
    }

    function w(D) {
        x(D, 0)
    }

    function x(D, O) {
        const N = h.newAttributes,
            H = h.enabledAttributes,
            F = h.attributeDivisors;
        N[D] = 1, H[D] === 0 && (o.enableVertexAttribArray(D), H[D] = 1), F[D] !== O && ((n.isWebGL2 ? o : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, O), F[D] = O)
    }

    function E() {
        const D = h.newAttributes,
            O = h.enabledAttributes;
        for (let N = 0, H = O.length; N < H; N++) O[N] !== D[N] && (o.disableVertexAttribArray(N), O[N] = 0)
    }

    function T(D, O, N, H, F, X) {
        n.isWebGL2 === !0 && (N === 5124 || N === 5125) ? o.vertexAttribIPointer(D, O, N, F, X) : o.vertexAttribPointer(D, O, N, H, F, X)
    }

    function R(D, O, N, H) {
        if (n.isWebGL2 === !1 && (D.isInstancedMesh || H.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
        b();
        const F = H.attributes,
            X = N.getAttributes(),
            Z = O.defaultAttributeValues;
        for (const Q in X) {
            const $ = X[Q];
            if ($.location >= 0) {
                let ue = F[Q];
                if (ue === void 0 && (Q === "instanceMatrix" && D.instanceMatrix && (ue = D.instanceMatrix), Q === "instanceColor" && D.instanceColor && (ue = D.instanceColor)), ue !== void 0) {
                    const Me = ue.normalized,
                        xe = ue.itemSize,
                        Y = t.get(ue);
                    if (Y === void 0) continue;
                    const We = Y.buffer,
                        Re = Y.type,
                        Pe = Y.bytesPerElement;
                    if (ue.isInterleavedBufferAttribute) {
                        const se = ue.data,
                            Be = se.stride,
                            j = ue.offset;
                        if (se.isInstancedInterleavedBuffer) {
                            for (let K = 0; K < $.locationSize; K++) x($.location + K, se.meshPerAttribute);
                            D.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = se.meshPerAttribute * se.count)
                        } else
                            for (let K = 0; K < $.locationSize; K++) w($.location + K);
                        o.bindBuffer(34962, We);
                        for (let K = 0; K < $.locationSize; K++) T($.location + K, xe / $.locationSize, Re, Me, Be * Pe, (j + xe / $.locationSize * K) * Pe)
                    } else {
                        if (ue.isInstancedBufferAttribute) {
                            for (let se = 0; se < $.locationSize; se++) x($.location + se, ue.meshPerAttribute);
                            D.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = ue.meshPerAttribute * ue.count)
                        } else
                            for (let se = 0; se < $.locationSize; se++) w($.location + se);
                        o.bindBuffer(34962, We);
                        for (let se = 0; se < $.locationSize; se++) T($.location + se, xe / $.locationSize, Re, Me, xe * Pe, xe / $.locationSize * se * Pe)
                    }
                } else if (Z !== void 0) {
                    const Me = Z[Q];
                    if (Me !== void 0) switch (Me.length) {
                        case 2:
                            o.vertexAttrib2fv($.location, Me);
                            break;
                        case 3:
                            o.vertexAttrib3fv($.location, Me);
                            break;
                        case 4:
                            o.vertexAttrib4fv($.location, Me);
                            break;
                        default:
                            o.vertexAttrib1fv($.location, Me)
                    }
                }
            }
        }
        E()
    }

    function I() {
        L();
        for (const D in a) {
            const O = a[D];
            for (const N in O) {
                const H = O[N];
                for (const F in H) g(H[F].object), delete H[F];
                delete O[N]
            }
            delete a[D]
        }
    }

    function B(D) {
        if (a[D.id] === void 0) return;
        const O = a[D.id];
        for (const N in O) {
            const H = O[N];
            for (const F in H) g(H[F].object), delete H[F];
            delete O[N]
        }
        delete a[D.id]
    }

    function v(D) {
        for (const O in a) {
            const N = a[O];
            if (N[D.id] === void 0) continue;
            const H = N[D.id];
            for (const F in H) g(H[F].object), delete H[F];
            delete N[D.id]
        }
    }

    function L() {
        U(), d = !0, h !== c && (h = c, f(h.object))
    }

    function U() {
        c.geometry = null, c.program = null, c.wireframe = !1
    }
    return {
        setup: l,
        reset: L,
        resetDefaultState: U,
        dispose: I,
        releaseStatesOfGeometry: B,
        releaseStatesOfProgram: v,
        initAttributes: b,
        enableAttribute: w,
        disableUnusedAttributes: E
    }
}

function x0(o, e, t, n) {
    const i = n.isWebGL2;
    let s;

    function r(h) {
        s = h
    }

    function a(h, d) {
        o.drawArrays(s, h, d), t.update(d, s, 1)
    }

    function c(h, d, l) {
        if (l === 0) return;
        let u, f;
        if (i) u = o, f = "drawArraysInstanced";
        else if (u = e.get("ANGLE_instanced_arrays"), f = "drawArraysInstancedANGLE", u === null) {
            console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return
        }
        u[f](s, h, d, l), t.update(d, s, l)
    }
    this.setMode = r, this.render = a, this.renderInstances = c
}

function v0(o, e, t) {
    let n;

    function i() {
        if (n !== void 0) return n;
        if (e.has("EXT_texture_filter_anisotropic") === !0) {
            const T = e.get("EXT_texture_filter_anisotropic");
            n = o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else n = 0;
        return n
    }

    function s(T) {
        if (T === "highp") {
            if (o.getShaderPrecisionFormat(35633, 36338).precision > 0 && o.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            T = "mediump"
        }
        return T === "mediump" && o.getShaderPrecisionFormat(35633, 36337).precision > 0 && o.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
    }
    const r = typeof WebGL2RenderingContext < "u" && o instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && o instanceof WebGL2ComputeRenderingContext;
    let a = t.precision !== void 0 ? t.precision : "highp";
    const c = s(a);
    c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c);
    const h = r || e.has("WEBGL_draw_buffers"),
        d = t.logarithmicDepthBuffer === !0,
        l = o.getParameter(34930),
        u = o.getParameter(35660),
        f = o.getParameter(3379),
        g = o.getParameter(34076),
        p = o.getParameter(34921),
        m = o.getParameter(36347),
        _ = o.getParameter(36348),
        y = o.getParameter(36349),
        b = u > 0,
        w = r || e.has("OES_texture_float"),
        x = b && w,
        E = r ? o.getParameter(36183) : 0;
    return {
        isWebGL2: r,
        drawBuffers: h,
        getMaxAnisotropy: i,
        getMaxPrecision: s,
        precision: a,
        logarithmicDepthBuffer: d,
        maxTextures: l,
        maxVertexTextures: u,
        maxTextureSize: f,
        maxCubemapSize: g,
        maxAttributes: p,
        maxVertexUniforms: m,
        maxVaryings: _,
        maxFragmentUniforms: y,
        vertexTextures: b,
        floatFragmentTextures: w,
        floatVertexTextures: x,
        maxSamples: E
    }
}

function b0(o) {
    const e = this;
    let t = null,
        n = 0,
        i = !1,
        s = !1;
    const r = new Xn,
        a = new Lt,
        c = {
            value: null,
            needsUpdate: !1
        };
    this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(l, u, f) {
        const g = l.length !== 0 || u || n !== 0 || i;
        return i = u, t = d(l, f, 0), n = l.length, g
    }, this.beginShadows = function() {
        s = !0, d(null)
    }, this.endShadows = function() {
        s = !1, h()
    }, this.setState = function(l, u, f) {
        const g = l.clippingPlanes,
            p = l.clipIntersection,
            m = l.clipShadows,
            _ = o.get(l);
        if (!i || g === null || g.length === 0 || s && !m) s ? d(null) : h();
        else {
            const y = s ? 0 : n,
                b = y * 4;
            let w = _.clippingState || null;
            c.value = w, w = d(g, u, b, f);
            for (let x = 0; x !== b; ++x) w[x] = t[x];
            _.clippingState = w, this.numIntersection = p ? this.numPlanes : 0, this.numPlanes += y
        }
    };

    function h() {
        c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
    }

    function d(l, u, f, g) {
        const p = l !== null ? l.length : 0;
        let m = null;
        if (p !== 0) {
            if (m = c.value, g !== !0 || m === null) {
                const _ = f + p * 4,
                    y = u.matrixWorldInverse;
                a.getNormalMatrix(y), (m === null || m.length < _) && (m = new Float32Array(_));
                for (let b = 0, w = f; b !== p; ++b, w += 4) r.copy(l[b]).applyMatrix4(y, a), r.normal.toArray(m, w), m[w + 3] = r.constant
            }
            c.value = m, c.needsUpdate = !0
        }
        return e.numPlanes = p, e.numIntersection = 0, m
    }
}

function w0(o) {
    let e = new WeakMap;

    function t(r, a) {
        return a === bl ? r.mapping = qs : a === wl && (r.mapping = Xs), r
    }

    function n(r) {
        if (r && r.isTexture && r.isRenderTargetTexture === !1) {
            const a = r.mapping;
            if (a === bl || a === wl)
                if (e.has(r)) {
                    const c = e.get(r).texture;
                    return t(c, r.mapping)
                } else {
                    const c = r.image;
                    if (c && c.height > 0) {
                        const h = new od(c.height / 2);
                        return h.fromEquirectangularTexture(o, r), e.set(r, h), r.addEventListener("dispose", i), t(h.texture, r.mapping)
                    } else return null
                }
        }
        return r
    }

    function i(r) {
        const a = r.target;
        a.removeEventListener("dispose", i);
        const c = e.get(a);
        c !== void 0 && (e.delete(a), c.dispose())
    }

    function s() {
        e = new WeakMap
    }
    return {
        get: n,
        dispose: s
    }
}
class la extends ic {
    constructor(e = -1, t = 1, n = 1, i = -1, s = .1, r = 2e3) {
        super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = r, this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this
    }
    setViewOffset(e, t, n, i, s, r) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = r, this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = (this.right - this.left) / (2 * this.zoom),
            t = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2;
        let s = n - e,
            r = n + e,
            a = i + t,
            c = i - t;
        if (this.view !== null && this.view.enabled) {
            const h = (this.right - this.left) / this.view.fullWidth / this.zoom,
                d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            s += h * this.view.offsetX, r = s + h * this.view.width, a -= d * this.view.offsetY, c = a - d * this.view.height
        }
        this.projectionMatrix.makeOrthographic(s, r, a, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t
    }
}
la.prototype.isOrthographicCamera = !0;
const Ds = 4,
    Lh = [.125, .215, .35, .446, .526, .582],
    zi = 20,
    Za = new la,
    Rh = new ie;
let $a = null;
const Fi = (1 + Math.sqrt(5)) / 2,
    Ss = 1 / Fi,
    Ph = [new C(1, 1, 1), new C(-1, 1, 1), new C(1, 1, -1), new C(-1, 1, -1), new C(0, Fi, Ss), new C(0, Fi, -Ss), new C(Ss, 0, Fi), new C(-Ss, 0, Fi), new C(Fi, Ss, 0), new C(-Fi, Ss, 0)];
class Ih {
    constructor(e) {
        this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
    }
    fromScene(e, t = 0, n = .1, i = 100) {
        $a = this._renderer.getRenderTarget(), this._setSize(256);
        const s = this._allocateTargets();
        return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s
    }
    fromEquirectangular(e, t = null) {
        return this._fromTexture(e, t)
    }
    fromCubemap(e, t = null) {
        return this._fromTexture(e, t)
    }
    compileCubemapShader() {
        this._cubemapMaterial === null && (this._cubemapMaterial = Fh(), this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
        this._equirectMaterial === null && (this._equirectMaterial = kh(), this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
        this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose()
    }
    _setSize(e) {
        this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax)
    }
    _dispose() {
        this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
        for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose()
    }
    _cleanup(e) {
        this._renderer.setRenderTarget($a), e.scissorTest = !1, Mo(e, 0, 0, e.width, e.height)
    }
    _fromTexture(e, t) {
        e.mapping === qs || e.mapping === Xs ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), $a = this._renderer.getRenderTarget();
        const n = t || this._allocateTargets();
        return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    }
    _allocateTargets() {
        const e = 3 * Math.max(this._cubeSize, 112),
            t = 4 * this._cubeSize - 32,
            n = {
                magFilter: It,
                minFilter: It,
                generateMipmaps: !1,
                type: zs,
                format: rn,
                encoding: Zn,
                depthBuffer: !1
            },
            i = Dh(e, t, n);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
            this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Dh(e, t, n);
            const {
                _lodMax: s
            } = this;
            ({
                sizeLods: this._sizeLods,
                lodPlanes: this._lodPlanes,
                sigmas: this._sigmas
            } = M0(s)), this._blurMaterial = S0(s, e, t)
        }
        return i
    }
    _compileMaterial(e) {
        const t = new St(this._lodPlanes[0], e);
        this._renderer.compile(t, Za)
    }
    _sceneToCubeUV(e, t, n, i) {
        const a = new Dt(90, 1, t, n),
            c = [1, -1, 1, 1, 1, 1],
            h = [1, 1, 1, -1, -1, -1],
            d = this._renderer,
            l = d.autoClear,
            u = d.toneMapping;
        d.getClearColor(Rh), d.toneMapping = Jn, d.autoClear = !1;
        const f = new ht({
                name: "PMREM.Background",
                side: xn,
                depthWrite: !1,
                depthTest: !1
            }),
            g = new St(new Qr, f);
        let p = !1;
        const m = e.background;
        m ? m.isColor && (f.color.copy(m), e.background = null, p = !0) : (f.color.copy(Rh), p = !0);
        for (let _ = 0; _ < 6; _++) {
            const y = _ % 3;
            y === 0 ? (a.up.set(0, c[_], 0), a.lookAt(h[_], 0, 0)) : y === 1 ? (a.up.set(0, 0, c[_]), a.lookAt(0, h[_], 0)) : (a.up.set(0, c[_], 0), a.lookAt(0, 0, h[_]));
            const b = this._cubeSize;
            Mo(i, y * b, _ > 2 ? b : 0, b, b), d.setRenderTarget(i), p && d.render(g, a), d.render(e, a)
        }
        g.geometry.dispose(), g.material.dispose(), d.toneMapping = u, d.autoClear = l, e.background = m
    }
    _textureToCubeUV(e, t) {
        const n = this._renderer,
            i = e.mapping === qs || e.mapping === Xs;
        i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Fh()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = kh());
        const s = i ? this._cubemapMaterial : this._equirectMaterial,
            r = new St(this._lodPlanes[0], s),
            a = s.uniforms;
        a.envMap.value = e;
        const c = this._cubeSize;
        Mo(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(r, Za)
    }
    _applyPMREM(e) {
        const t = this._renderer,
            n = t.autoClear;
        t.autoClear = !1;
        for (let i = 1; i < this._lodPlanes.length; i++) {
            const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]),
                r = Ph[(i - 1) % Ph.length];
            this._blur(e, i - 1, i, s, r)
        }
        t.autoClear = n
    }
    _blur(e, t, n, i, s) {
        const r = this._pingPongRenderTarget;
        this._halfBlur(e, r, t, n, i, "latitudinal", s), this._halfBlur(r, e, n, n, i, "longitudinal", s)
    }
    _halfBlur(e, t, n, i, s, r, a) {
        const c = this._renderer,
            h = this._blurMaterial;
        r !== "latitudinal" && r !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
        const d = 3,
            l = new St(this._lodPlanes[i], h),
            u = h.uniforms,
            f = this._sizeLods[n] - 1,
            g = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * zi - 1),
            p = s / g,
            m = isFinite(s) ? 1 + Math.floor(d * p) : zi;
        m > zi && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);
        const _ = [];
        let y = 0;
        for (let T = 0; T < zi; ++T) {
            const R = T / p,
                I = Math.exp(-R * R / 2);
            _.push(I), T === 0 ? y += I : T < m && (y += 2 * I)
        }
        for (let T = 0; T < _.length; T++) _[T] = _[T] / y;
        u.envMap.value = e.texture, u.samples.value = m, u.weights.value = _, u.latitudinal.value = r === "latitudinal", a && (u.poleAxis.value = a);
        const {
            _lodMax: b
        } = this;
        u.dTheta.value = g, u.mipInt.value = b - n;
        const w = this._sizeLods[i],
            x = 3 * w * (i > b - Ds ? i - b + Ds : 0),
            E = 4 * (this._cubeSize - w);
        Mo(t, x, E, 3 * w, 2 * w), c.setRenderTarget(t), c.render(l, Za)
    }
}

function M0(o) {
    const e = [],
        t = [],
        n = [];
    let i = o;
    const s = o - Ds + 1 + Lh.length;
    for (let r = 0; r < s; r++) {
        const a = Math.pow(2, i);
        t.push(a);
        let c = 1 / a;
        r > o - Ds ? c = Lh[r - o + Ds - 1] : r === 0 && (c = 0), n.push(c);
        const h = 1 / (a - 1),
            d = -h / 2,
            l = 1 + h / 2,
            u = [d, d, l, d, l, l, d, d, l, l, d, l],
            f = 6,
            g = 6,
            p = 3,
            m = 2,
            _ = 1,
            y = new Float32Array(p * g * f),
            b = new Float32Array(m * g * f),
            w = new Float32Array(_ * g * f);
        for (let E = 0; E < f; E++) {
            const T = E % 3 * 2 / 3 - 1,
                R = E > 2 ? 0 : -1,
                I = [T, R, 0, T + 2 / 3, R, 0, T + 2 / 3, R + 1, 0, T, R, 0, T + 2 / 3, R + 1, 0, T, R + 1, 0];
            y.set(I, p * g * E), b.set(u, m * g * E);
            const B = [E, E, E, E, E, E];
            w.set(B, _ * g * E)
        }
        const x = new tt;
        x.setAttribute("position", new ft(y, p)), x.setAttribute("uv", new ft(b, m)), x.setAttribute("faceIndex", new ft(w, _)), e.push(x), i > Ds && i--
    }
    return {
        lodPlanes: e,
        sizeLods: t,
        sigmas: n
    }
}

function Dh(o, e, t) {
    const n = new Zt(o, e, t);
    return n.texture.mapping = ia, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n
}

function Mo(o, e, t, n, i) {
    o.viewport.set(e, t, n, i), o.scissor.set(e, t, n, i)
}

function S0(o, e, t) {
    const n = new Float32Array(zi),
        i = new C(0, 1, 0);
    return new Ot({
        name: "SphericalGaussianBlur",
        defines: {
            n: zi,
            CUBEUV_TEXEL_WIDTH: 1 / e,
            CUBEUV_TEXEL_HEIGHT: 1 / t,
            CUBEUV_MAX_MIP: `${o}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: n
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: i
            }
        },
        vertexShader: rc(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: mi,
        depthTest: !1,
        depthWrite: !1
    })
}

function kh() {
    return new Ot({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: rc(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
        blending: mi,
        depthTest: !1,
        depthWrite: !1
    })
}

function Fh() {
    return new Ot({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: rc(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: mi,
        depthTest: !1,
        depthWrite: !1
    })
}

function rc() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}

function T0(o) {
    let e = new WeakMap,
        t = null;

    function n(a) {
        if (a && a.isTexture) {
            const c = a.mapping,
                h = c === bl || c === wl,
                d = c === qs || c === Xs;
            if (h || d)
                if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
                    a.needsPMREMUpdate = !1;
                    let l = e.get(a);
                    return t === null && (t = new Ih(o)), l = h ? t.fromEquirectangular(a, l) : t.fromCubemap(a, l), e.set(a, l), l.texture
                } else {
                    if (e.has(a)) return e.get(a).texture; {
                        const l = a.image;
                        if (h && l && l.height > 0 || d && l && i(l)) {
                            t === null && (t = new Ih(o));
                            const u = h ? t.fromEquirectangular(a) : t.fromCubemap(a);
                            return e.set(a, u), a.addEventListener("dispose", s), u.texture
                        } else return null
                    }
                }
        }
        return a
    }

    function i(a) {
        let c = 0;
        const h = 6;
        for (let d = 0; d < h; d++) a[d] !== void 0 && c++;
        return c === h
    }

    function s(a) {
        const c = a.target;
        c.removeEventListener("dispose", s);
        const h = e.get(c);
        h !== void 0 && (e.delete(c), h.dispose())
    }

    function r() {
        e = new WeakMap, t !== null && (t.dispose(), t = null)
    }
    return {
        get: n,
        dispose: r
    }
}

function E0(o) {
    const e = {};

    function t(n) {
        if (e[n] !== void 0) return e[n];
        let i;
        switch (n) {
            case "WEBGL_depth_texture":
                i = o.getExtension("WEBGL_depth_texture") || o.getExtension("MOZ_WEBGL_depth_texture") || o.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case "EXT_texture_filter_anisotropic":
                i = o.getExtension("EXT_texture_filter_anisotropic") || o.getExtension("MOZ_EXT_texture_filter_anisotropic") || o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                i = o.getExtension("WEBGL_compressed_texture_s3tc") || o.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                i = o.getExtension("WEBGL_compressed_texture_pvrtc") || o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                i = o.getExtension(n)
        }
        return e[n] = i, i
    }
    return {
        has: function(n) {
            return t(n) !== null
        },
        init: function(n) {
            n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture")
        },
        get: function(n) {
            const i = t(n);
            return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i
        }
    }
}

function A0(o, e, t, n) {
    const i = {},
        s = new WeakMap;

    function r(l) {
        const u = l.target;
        u.index !== null && e.remove(u.index);
        for (const g in u.attributes) e.remove(u.attributes[g]);
        u.removeEventListener("dispose", r), delete i[u.id];
        const f = s.get(u);
        f && (e.remove(f), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--
    }

    function a(l, u) {
        return i[u.id] === !0 || (u.addEventListener("dispose", r), i[u.id] = !0, t.memory.geometries++), u
    }

    function c(l) {
        const u = l.attributes;
        for (const g in u) e.update(u[g], 34962);
        const f = l.morphAttributes;
        for (const g in f) {
            const p = f[g];
            for (let m = 0, _ = p.length; m < _; m++) e.update(p[m], 34962)
        }
    }

    function h(l) {
        const u = [],
            f = l.index,
            g = l.attributes.position;
        let p = 0;
        if (f !== null) {
            const y = f.array;
            p = f.version;
            for (let b = 0, w = y.length; b < w; b += 3) {
                const x = y[b + 0],
                    E = y[b + 1],
                    T = y[b + 2];
                u.push(x, E, E, T, T, x)
            }
        } else {
            const y = g.array;
            p = g.version;
            for (let b = 0, w = y.length / 3 - 1; b < w; b += 3) {
                const x = b + 0,
                    E = b + 1,
                    T = b + 2;
                u.push(x, E, E, T, T, x)
            }
        }
        const m = new(td(u) ? rd : sd)(u, 1);
        m.version = p;
        const _ = s.get(l);
        _ && e.remove(_), s.set(l, m)
    }

    function d(l) {
        const u = s.get(l);
        if (u) {
            const f = l.index;
            f !== null && u.version < f.version && h(l)
        } else h(l);
        return s.get(l)
    }
    return {
        get: a,
        update: c,
        getWireframeAttribute: d
    }
}

function C0(o, e, t, n) {
    const i = n.isWebGL2;
    let s;

    function r(u) {
        s = u
    }
    let a, c;

    function h(u) {
        a = u.type, c = u.bytesPerElement
    }

    function d(u, f) {
        o.drawElements(s, f, a, u * c), t.update(f, s, 1)
    }

    function l(u, f, g) {
        if (g === 0) return;
        let p, m;
        if (i) p = o, m = "drawElementsInstanced";
        else if (p = e.get("ANGLE_instanced_arrays"), m = "drawElementsInstancedANGLE", p === null) {
            console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return
        }
        p[m](s, f, a, u * c, g), t.update(f, s, g)
    }
    this.setMode = r, this.setIndex = h, this.render = d, this.renderInstances = l
}

function L0(o) {
    const e = {
            geometries: 0,
            textures: 0
        },
        t = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };

    function n(s, r, a) {
        switch (t.calls++, r) {
            case 4:
                t.triangles += a * (s / 3);
                break;
            case 1:
                t.lines += a * (s / 2);
                break;
            case 3:
                t.lines += a * (s - 1);
                break;
            case 2:
                t.lines += a * s;
                break;
            case 0:
                t.points += a * s;
                break;
            default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", r);
                break
        }
    }

    function i() {
        t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
    }
    return {
        memory: e,
        render: t,
        programs: null,
        autoReset: !0,
        reset: i,
        update: n
    }
}

function R0(o, e) {
    return o[0] - e[0]
}

function P0(o, e) {
    return Math.abs(e[1]) - Math.abs(o[1])
}

function Qa(o, e) {
    let t = 1;
    const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
    n instanceof Int8Array ? t = 127 : n instanceof Int16Array ? t = 32767 : n instanceof Int32Array ? t = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), o.divideScalar(t)
}

function I0(o, e, t) {
    const n = {},
        i = new Float32Array(8),
        s = new WeakMap,
        r = new Ke,
        a = [];
    for (let h = 0; h < 8; h++) a[h] = [h, 0];

    function c(h, d, l, u) {
        const f = h.morphTargetInfluences;
        if (e.isWebGL2 === !0) {
            const p = d.morphAttributes.position || d.morphAttributes.normal || d.morphAttributes.color,
                m = p !== void 0 ? p.length : 0;
            let _ = s.get(d);
            if (_ === void 0 || _.count !== m) {
                let N = function() {
                    D.dispose(), s.delete(d), d.removeEventListener("dispose", N)
                };
                var g = N;
                _ !== void 0 && _.texture.dispose();
                const w = d.morphAttributes.position !== void 0,
                    x = d.morphAttributes.normal !== void 0,
                    E = d.morphAttributes.color !== void 0,
                    T = d.morphAttributes.position || [],
                    R = d.morphAttributes.normal || [],
                    I = d.morphAttributes.color || [];
                let B = 0;
                w === !0 && (B = 1), x === !0 && (B = 2), E === !0 && (B = 3);
                let v = d.attributes.position.count * B,
                    L = 1;
                v > e.maxTextureSize && (L = Math.ceil(v / e.maxTextureSize), v = e.maxTextureSize);
                const U = new Float32Array(v * L * 4 * m),
                    D = new sa(U, v, L, m);
                D.type = ui, D.needsUpdate = !0;
                const O = B * 4;
                for (let H = 0; H < m; H++) {
                    const F = T[H],
                        X = R[H],
                        Z = I[H],
                        Q = v * L * 4 * H;
                    for (let $ = 0; $ < F.count; $++) {
                        const ue = $ * O;
                        w === !0 && (r.fromBufferAttribute(F, $), F.normalized === !0 && Qa(r, F), U[Q + ue + 0] = r.x, U[Q + ue + 1] = r.y, U[Q + ue + 2] = r.z, U[Q + ue + 3] = 0), x === !0 && (r.fromBufferAttribute(X, $), X.normalized === !0 && Qa(r, X), U[Q + ue + 4] = r.x, U[Q + ue + 5] = r.y, U[Q + ue + 6] = r.z, U[Q + ue + 7] = 0), E === !0 && (r.fromBufferAttribute(Z, $), Z.normalized === !0 && Qa(r, Z), U[Q + ue + 8] = r.x, U[Q + ue + 9] = r.y, U[Q + ue + 10] = r.z, U[Q + ue + 11] = Z.itemSize === 4 ? r.w : 1)
                    }
                }
                _ = {
                    count: m,
                    texture: D,
                    size: new te(v, L)
                }, s.set(d, _), d.addEventListener("dispose", N)
            }
            let y = 0;
            for (let w = 0; w < f.length; w++) y += f[w];
            const b = d.morphTargetsRelative ? 1 : 1 - y;
            u.getUniforms().setValue(o, "morphTargetBaseInfluence", b), u.getUniforms().setValue(o, "morphTargetInfluences", f), u.getUniforms().setValue(o, "morphTargetsTexture", _.texture, t), u.getUniforms().setValue(o, "morphTargetsTextureSize", _.size)
        } else {
            const p = f === void 0 ? 0 : f.length;
            let m = n[d.id];
            if (m === void 0 || m.length !== p) {
                m = [];
                for (let x = 0; x < p; x++) m[x] = [x, 0];
                n[d.id] = m
            }
            for (let x = 0; x < p; x++) {
                const E = m[x];
                E[0] = x, E[1] = f[x]
            }
            m.sort(P0);
            for (let x = 0; x < 8; x++) x < p && m[x][1] ? (a[x][0] = m[x][0], a[x][1] = m[x][1]) : (a[x][0] = Number.MAX_SAFE_INTEGER, a[x][1] = 0);
            a.sort(R0);
            const _ = d.morphAttributes.position,
                y = d.morphAttributes.normal;
            let b = 0;
            for (let x = 0; x < 8; x++) {
                const E = a[x],
                    T = E[0],
                    R = E[1];
                T !== Number.MAX_SAFE_INTEGER && R ? (_ && d.getAttribute("morphTarget" + x) !== _[T] && d.setAttribute("morphTarget" + x, _[T]), y && d.getAttribute("morphNormal" + x) !== y[T] && d.setAttribute("morphNormal" + x, y[T]), i[x] = R, b += R) : (_ && d.hasAttribute("morphTarget" + x) === !0 && d.deleteAttribute("morphTarget" + x), y && d.hasAttribute("morphNormal" + x) === !0 && d.deleteAttribute("morphNormal" + x), i[x] = 0)
            }
            const w = d.morphTargetsRelative ? 1 : 1 - b;
            u.getUniforms().setValue(o, "morphTargetBaseInfluence", w), u.getUniforms().setValue(o, "morphTargetInfluences", i)
        }
    }
    return {
        update: c
    }
}

function D0(o, e, t, n) {
    let i = new WeakMap;

    function s(c) {
        const h = n.render.frame,
            d = c.geometry,
            l = e.get(c, d);
        return i.get(l) !== h && (e.update(l), i.set(l, h)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), t.update(c.instanceMatrix, 34962), c.instanceColor !== null && t.update(c.instanceColor, 34962)), l
    }

    function r() {
        i = new WeakMap
    }

    function a(c) {
        const h = c.target;
        h.removeEventListener("dispose", a), t.remove(h.instanceMatrix), h.instanceColor !== null && t.remove(h.instanceColor)
    }
    return {
        update: s,
        dispose: r
    }
}
const ld = new xt,
    cd = new sa,
    hd = new tc,
    ud = new ra,
    Bh = [],
    Oh = [],
    Nh = new Float32Array(16),
    zh = new Float32Array(9),
    Hh = new Float32Array(4);

function sr(o, e, t) {
    const n = o[0];
    if (n <= 0 || n > 0) return o;
    const i = e * t;
    let s = Bh[i];
    if (s === void 0 && (s = new Float32Array(i), Bh[i] = s), e !== 0) {
        n.toArray(s, 0);
        for (let r = 1, a = 0; r !== e; ++r) a += t, o[r].toArray(s, a)
    }
    return s
}

function Gt(o, e) {
    if (o.length !== e.length) return !1;
    for (let t = 0, n = o.length; t < n; t++)
        if (o[t] !== e[t]) return !1;
    return !0
}

function Nt(o, e) {
    for (let t = 0, n = e.length; t < n; t++) o[t] = e[t]
}

function ca(o, e) {
    let t = Oh[e];
    t === void 0 && (t = new Int32Array(e), Oh[e] = t);
    for (let n = 0; n !== e; ++n) t[n] = o.allocateTextureUnit();
    return t
}

function k0(o, e) {
    const t = this.cache;
    t[0] !== e && (o.uniform1f(this.addr, e), t[0] = e)
}

function F0(o, e) {
    const t = this.cache;
    if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (o.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
        if (Gt(t, e)) return;
        o.uniform2fv(this.addr, e), Nt(t, e)
    }
}

function B0(o, e) {
    const t = this.cache;
    if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (o.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else if (e.r !== void 0)(t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (o.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
    else {
        if (Gt(t, e)) return;
        o.uniform3fv(this.addr, e), Nt(t, e)
    }
}

function O0(o, e) {
    const t = this.cache;
    if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (o.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
        if (Gt(t, e)) return;
        o.uniform4fv(this.addr, e), Nt(t, e)
    }
}

function N0(o, e) {
    const t = this.cache,
        n = e.elements;
    if (n === void 0) {
        if (Gt(t, e)) return;
        o.uniformMatrix2fv(this.addr, !1, e), Nt(t, e)
    } else {
        if (Gt(t, n)) return;
        Hh.set(n), o.uniformMatrix2fv(this.addr, !1, Hh), Nt(t, n)
    }
}

function z0(o, e) {
    const t = this.cache,
        n = e.elements;
    if (n === void 0) {
        if (Gt(t, e)) return;
        o.uniformMatrix3fv(this.addr, !1, e), Nt(t, e)
    } else {
        if (Gt(t, n)) return;
        zh.set(n), o.uniformMatrix3fv(this.addr, !1, zh), Nt(t, n)
    }
}

function H0(o, e) {
    const t = this.cache,
        n = e.elements;
    if (n === void 0) {
        if (Gt(t, e)) return;
        o.uniformMatrix4fv(this.addr, !1, e), Nt(t, e)
    } else {
        if (Gt(t, n)) return;
        Nh.set(n), o.uniformMatrix4fv(this.addr, !1, Nh), Nt(t, n)
    }
}

function U0(o, e) {
    const t = this.cache;
    t[0] !== e && (o.uniform1i(this.addr, e), t[0] = e)
}

function G0(o, e) {
    const t = this.cache;
    Gt(t, e) || (o.uniform2iv(this.addr, e), Nt(t, e))
}

function V0(o, e) {
    const t = this.cache;
    Gt(t, e) || (o.uniform3iv(this.addr, e), Nt(t, e))
}

function W0(o, e) {
    const t = this.cache;
    Gt(t, e) || (o.uniform4iv(this.addr, e), Nt(t, e))
}

function q0(o, e) {
    const t = this.cache;
    t[0] !== e && (o.uniform1ui(this.addr, e), t[0] = e)
}

function X0(o, e) {
    const t = this.cache;
    Gt(t, e) || (o.uniform2uiv(this.addr, e), Nt(t, e))
}

function j0(o, e) {
    const t = this.cache;
    Gt(t, e) || (o.uniform3uiv(this.addr, e), Nt(t, e))
}

function Y0(o, e) {
    const t = this.cache;
    Gt(t, e) || (o.uniform4uiv(this.addr, e), Nt(t, e))
}

function J0(o, e, t) {
    const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || ld, i)
}

function K0(o, e, t) {
    const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || hd, i)
}

function Z0(o, e, t) {
    const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || ud, i)
}

function $0(o, e, t) {
    const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (o.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || cd, i)
}

function Q0(o) {
    switch (o) {
        case 5126:
            return k0;
        case 35664:
            return F0;
        case 35665:
            return B0;
        case 35666:
            return O0;
        case 35674:
            return N0;
        case 35675:
            return z0;
        case 35676:
            return H0;
        case 5124:
        case 35670:
            return U0;
        case 35667:
        case 35671:
            return G0;
        case 35668:
        case 35672:
            return V0;
        case 35669:
        case 35673:
            return W0;
        case 5125:
            return q0;
        case 36294:
            return X0;
        case 36295:
            return j0;
        case 36296:
            return Y0;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return J0;
        case 35679:
        case 36299:
        case 36307:
            return K0;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return Z0;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return $0
    }
}

function ey(o, e) {
    o.uniform1fv(this.addr, e)
}

function ty(o, e) {
    const t = sr(e, this.size, 2);
    o.uniform2fv(this.addr, t)
}

function ny(o, e) {
    const t = sr(e, this.size, 3);
    o.uniform3fv(this.addr, t)
}

function iy(o, e) {
    const t = sr(e, this.size, 4);
    o.uniform4fv(this.addr, t)
}

function sy(o, e) {
    const t = sr(e, this.size, 4);
    o.uniformMatrix2fv(this.addr, !1, t)
}

function ry(o, e) {
    const t = sr(e, this.size, 9);
    o.uniformMatrix3fv(this.addr, !1, t)
}

function oy(o, e) {
    const t = sr(e, this.size, 16);
    o.uniformMatrix4fv(this.addr, !1, t)
}

function ay(o, e) {
    o.uniform1iv(this.addr, e)
}

function ly(o, e) {
    o.uniform2iv(this.addr, e)
}

function cy(o, e) {
    o.uniform3iv(this.addr, e)
}

function hy(o, e) {
    o.uniform4iv(this.addr, e)
}

function uy(o, e) {
    o.uniform1uiv(this.addr, e)
}

function dy(o, e) {
    o.uniform2uiv(this.addr, e)
}

function fy(o, e) {
    o.uniform3uiv(this.addr, e)
}

function py(o, e) {
    o.uniform4uiv(this.addr, e)
}

function my(o, e, t) {
    const n = e.length,
        i = ca(t, n);
    o.uniform1iv(this.addr, i);
    for (let s = 0; s !== n; ++s) t.setTexture2D(e[s] || ld, i[s])
}

function gy(o, e, t) {
    const n = e.length,
        i = ca(t, n);
    o.uniform1iv(this.addr, i);
    for (let s = 0; s !== n; ++s) t.setTexture3D(e[s] || hd, i[s])
}

function _y(o, e, t) {
    const n = e.length,
        i = ca(t, n);
    o.uniform1iv(this.addr, i);
    for (let s = 0; s !== n; ++s) t.setTextureCube(e[s] || ud, i[s])
}

function yy(o, e, t) {
    const n = e.length,
        i = ca(t, n);
    o.uniform1iv(this.addr, i);
    for (let s = 0; s !== n; ++s) t.setTexture2DArray(e[s] || cd, i[s])
}

function xy(o) {
    switch (o) {
        case 5126:
            return ey;
        case 35664:
            return ty;
        case 35665:
            return ny;
        case 35666:
            return iy;
        case 35674:
            return sy;
        case 35675:
            return ry;
        case 35676:
            return oy;
        case 5124:
        case 35670:
            return ay;
        case 35667:
        case 35671:
            return ly;
        case 35668:
        case 35672:
            return cy;
        case 35669:
        case 35673:
            return hy;
        case 5125:
            return uy;
        case 36294:
            return dy;
        case 36295:
            return fy;
        case 36296:
            return py;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return my;
        case 35679:
        case 36299:
        case 36307:
            return gy;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return _y;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return yy
    }
}

function vy(o, e, t) {
    this.id = o, this.addr = t, this.cache = [], this.setValue = Q0(e.type)
}

function dd(o, e, t) {
    this.id = o, this.addr = t, this.cache = [], this.size = e.size, this.setValue = xy(e.type)
}
dd.prototype.updateCache = function(o) {
    const e = this.cache;
    o instanceof Float32Array && e.length !== o.length && (this.cache = new Float32Array(o.length)), Nt(e, o)
};

function fd(o) {
    this.id = o, this.seq = [], this.map = {}
}
fd.prototype.setValue = function(o, e, t) {
    const n = this.seq;
    for (let i = 0, s = n.length; i !== s; ++i) {
        const r = n[i];
        r.setValue(o, e[r.id], t)
    }
};
const el = /(\w+)(\])?(\[|\.)?/g;

function Uh(o, e) {
    o.seq.push(e), o.map[e.id] = e
}

function by(o, e, t) {
    const n = o.name,
        i = n.length;
    for (el.lastIndex = 0;;) {
        const s = el.exec(n),
            r = el.lastIndex;
        let a = s[1];
        const c = s[2] === "]",
            h = s[3];
        if (c && (a = a | 0), h === void 0 || h === "[" && r + 2 === i) {
            Uh(t, h === void 0 ? new vy(a, o, e) : new dd(a, o, e));
            break
        } else {
            let l = t.map[a];
            l === void 0 && (l = new fd(a), Uh(t, l)), t = l
        }
    }
}

function gi(o, e) {
    this.seq = [], this.map = {};
    const t = o.getProgramParameter(e, 35718);
    for (let n = 0; n < t; ++n) {
        const i = o.getActiveUniform(e, n),
            s = o.getUniformLocation(e, i.name);
        by(i, s, this)
    }
}
gi.prototype.setValue = function(o, e, t, n) {
    const i = this.map[e];
    i !== void 0 && i.setValue(o, t, n)
};
gi.prototype.setOptional = function(o, e, t) {
    const n = e[t];
    n !== void 0 && this.setValue(o, t, n)
};
gi.upload = function(o, e, t, n) {
    for (let i = 0, s = e.length; i !== s; ++i) {
        const r = e[i],
            a = t[r.id];
        a.needsUpdate !== !1 && r.setValue(o, a.value, n)
    }
};
gi.seqWithValue = function(o, e) {
    const t = [];
    for (let n = 0, i = o.length; n !== i; ++n) {
        const s = o[n];
        s.id in e && t.push(s)
    }
    return t
};

function Gh(o, e, t) {
    const n = o.createShader(e);
    return o.shaderSource(n, t), o.compileShader(n), n
}
let wy = 0;

function My(o, e) {
    const t = o.split(`
`),
        n = [],
        i = Math.max(e - 6, 0),
        s = Math.min(e + 6, t.length);
    for (let r = i; r < s; r++) n.push(r + 1 + ": " + t[r]);
    return n.join(`
`)
}

function Sy(o) {
    switch (o) {
        case Zn:
            return ["Linear", "( value )"];
        case Ge:
            return ["sRGB", "( value )"];
        default:
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", o), ["Linear", "( value )"]
    }
}

function Vh(o, e, t) {
    const n = o.getShaderParameter(e, 35713),
        i = o.getShaderInfoLog(e).trim();
    if (n && i === "") return "";
    const s = parseInt(/ERROR: 0:(\d+)/.exec(i)[1]);
    return t.toUpperCase() + `

` + i + `

` + My(o.getShaderSource(e), s)
}

function Ty(o, e) {
    const t = Sy(e);
    return "vec4 " + o + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }"
}

function Ey(o, e) {
    let t;
    switch (e) {
        case Dp:
            t = "Linear";
            break;
        case kp:
            t = "Reinhard";
            break;
        case Fp:
            t = "OptimizedCineon";
            break;
        case Bp:
            t = "ACESFilmic";
            break;
        case Op:
            t = "Custom";
            break;
        default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear"
    }
    return "vec3 " + o + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
}

function Ay(o) {
    return [o.extensionDerivatives || o.envMapCubeUVHeight || o.bumpMap || o.tangentSpaceNormalMap || o.clearcoatNormalMap || o.flatShading || o.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (o.extensionFragDepth || o.logarithmicDepthBuffer) && o.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", o.extensionDrawBuffers && o.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (o.extensionShaderTextureLOD || o.envMap || o.transmission) && o.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Tr).join(`
`)
}

function Cy(o) {
    const e = [];
    for (const t in o) {
        const n = o[t];
        n !== !1 && e.push("#define " + t + " " + n)
    }
    return e.join(`
`)
}

function Ly(o, e) {
    const t = {},
        n = o.getProgramParameter(e, 35721);
    for (let i = 0; i < n; i++) {
        const s = o.getActiveAttrib(e, i),
            r = s.name;
        let a = 1;
        s.type === 35674 && (a = 2), s.type === 35675 && (a = 3), s.type === 35676 && (a = 4), t[r] = {
            type: s.type,
            location: o.getAttribLocation(e, r),
            locationSize: a
        }
    }
    return t
}

function Tr(o) {
    return o !== ""
}

function Wh(o, e) {
    return o.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}

function qh(o, e) {
    return o.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
const Ry = /^[ \t]*#include +<([\w\d./]+)>/gm;

function Al(o) {
    return o.replace(Ry, Py)
}

function Py(o, e) {
    const t = Oe[e];
    if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
    return Al(t)
}
const Iy = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
    Dy = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function Xh(o) {
    return o.replace(Dy, pd).replace(Iy, ky)
}

function ky(o, e, t, n) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), pd(o, e, t, n)
}

function pd(o, e, t, n) {
    let i = "";
    for (let s = parseInt(e); s < parseInt(t); s++) i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
    return i
}

function jh(o) {
    let e = "precision " + o.precision + ` float;
precision ` + o.precision + " int;";
    return o.precision === "highp" ? e += `
#define HIGH_PRECISION` : o.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : o.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
}

function Fy(o) {
    let e = "SHADOWMAP_TYPE_BASIC";
    return o.shadowMapType === Xu ? e = "SHADOWMAP_TYPE_PCF" : o.shadowMapType === up ? e = "SHADOWMAP_TYPE_PCF_SOFT" : o.shadowMapType === Sr && (e = "SHADOWMAP_TYPE_VSM"), e
}

function By(o) {
    let e = "ENVMAP_TYPE_CUBE";
    if (o.envMap) switch (o.envMapMode) {
        case qs:
        case Xs:
            e = "ENVMAP_TYPE_CUBE";
            break;
        case ia:
            e = "ENVMAP_TYPE_CUBE_UV";
            break
    }
    return e
}

function Oy(o) {
    let e = "ENVMAP_MODE_REFLECTION";
    if (o.envMap) switch (o.envMapMode) {
        case Xs:
            e = "ENVMAP_MODE_REFRACTION";
            break
    }
    return e
}

function Ny(o) {
    let e = "ENVMAP_BLENDING_NONE";
    if (o.envMap) switch (o.combine) {
        case na:
            e = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case Pp:
            e = "ENVMAP_BLENDING_MIX";
            break;
        case Ip:
            e = "ENVMAP_BLENDING_ADD";
            break
    }
    return e
}

function zy(o) {
    const e = o.envMapCubeUVHeight;
    if (e === null) return null;
    const t = Math.log2(e / 32 + 1) + 3,
        n = 1 / e;
    return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
        texelHeight: n,
        maxMip: t
    }
}

function Hy(o, e, t, n) {
    const i = o.getContext(),
        s = t.defines;
    let r = t.vertexShader,
        a = t.fragmentShader;
    const c = Fy(t),
        h = By(t),
        d = Oy(t),
        l = Ny(t),
        u = zy(t),
        f = t.isWebGL2 ? "" : Ay(t),
        g = Cy(s),
        p = i.createProgram();
    let m, _, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (m = [g].filter(Tr).join(`
`), m.length > 0 && (m += `
`), _ = [f, g].filter(Tr).join(`
`), _.length > 0 && (_ += `
`)) : (m = [jh(t), "#define SHADER_NAME " + t.shaderName, g, t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define MAX_BONES " + t.maxBones, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + d : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.useVertexTexture ? "#define BONE_TEXTURE" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Tr).join(`
`), _ = [f, jh(t), "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + d : "", t.envMap ? "#define " + l : "", u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "", u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "", u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Jn ? "#define TONE_MAPPING" : "", t.toneMapping !== Jn ? Oe.tonemapping_pars_fragment : "", t.toneMapping !== Jn ? Ey("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Oe.encodings_pars_fragment, Ty("linearToOutputTexel", t.outputEncoding), t.depthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Tr).join(`
`)), r = Al(r), r = Wh(r, t), r = qh(r, t), a = Al(a), a = Wh(a, t), a = qh(a, t), r = Xh(r), a = Xh(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, m = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m, _ = ["#define varying in", t.glslVersion === gh ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === gh ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + _);
    const b = y + m + r,
        w = y + _ + a,
        x = Gh(i, 35633, b),
        E = Gh(i, 35632, w);
    if (i.attachShader(p, x), i.attachShader(p, E), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), o.debug.checkShaderErrors) {
        const I = i.getProgramInfoLog(p).trim(),
            B = i.getShaderInfoLog(x).trim(),
            v = i.getShaderInfoLog(E).trim();
        let L = !0,
            U = !0;
        if (i.getProgramParameter(p, 35714) === !1) {
            L = !1;
            const D = Vh(i, x, "vertex"),
                O = Vh(i, E, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, 35715) + `

Program Info Log: ` + I + `
` + D + `
` + O)
        } else I !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", I) : (B === "" || v === "") && (U = !1);
        U && (this.diagnostics = {
            runnable: L,
            programLog: I,
            vertexShader: {
                log: B,
                prefix: m
            },
            fragmentShader: {
                log: v,
                prefix: _
            }
        })
    }
    i.deleteShader(x), i.deleteShader(E);
    let T;
    this.getUniforms = function() {
        return T === void 0 && (T = new gi(i, p)), T
    };
    let R;
    return this.getAttributes = function() {
        return R === void 0 && (R = Ly(i, p)), R
    }, this.destroy = function() {
        n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0
    }, this.name = t.shaderName, this.id = wy++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = x, this.fragmentShader = E, this
}
let Uy = 0;
class Gy {
    constructor() {
        this.shaderCache = new Map, this.materialCache = new Map
    }
    update(e) {
        const t = e.vertexShader,
            n = e.fragmentShader,
            i = this._getShaderStage(t),
            s = this._getShaderStage(n),
            r = this._getShaderCacheForMaterial(e);
        return r.has(i) === !1 && (r.add(i), i.usedTimes++), r.has(s) === !1 && (r.add(s), s.usedTimes++), this
    }
    remove(e) {
        const t = this.materialCache.get(e);
        for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
        return this.materialCache.delete(e), this
    }
    getVertexShaderID(e) {
        return this._getShaderStage(e.vertexShader).id
    }
    getFragmentShaderID(e) {
        return this._getShaderStage(e.fragmentShader).id
    }
    dispose() {
        this.shaderCache.clear(), this.materialCache.clear()
    }
    _getShaderCacheForMaterial(e) {
        const t = this.materialCache;
        return t.has(e) === !1 && t.set(e, new Set), t.get(e)
    }
    _getShaderStage(e) {
        const t = this.shaderCache;
        if (t.has(e) === !1) {
            const n = new Vy(e);
            t.set(e, n)
        }
        return t.get(e)
    }
}
class Vy {
    constructor(e) {
        this.id = Uy++, this.code = e, this.usedTimes = 0
    }
}

function Wy(o, e, t, n, i, s, r) {
    const a = new nc,
        c = new Gy,
        h = [],
        d = i.isWebGL2,
        l = i.logarithmicDepthBuffer,
        u = i.floatVertexTextures,
        f = i.maxVertexUniforms,
        g = i.vertexTextures;
    let p = i.precision;
    const m = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };

    function _(v) {
        const U = v.skeleton.bones;
        if (u) return 1024; {
            const O = Math.floor((f - 20) / 4),
                N = Math.min(O, U.length);
            return N < U.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + U.length + " bones. This GPU supports " + N + "."), 0) : N
        }
    }

    function y(v, L, U, D, O) {
        const N = D.fog,
            H = O.geometry,
            F = v.isMeshStandardMaterial ? D.environment : null,
            X = (v.isMeshStandardMaterial ? t : e).get(v.envMap || F),
            Z = X && X.mapping === ia ? X.image.height : null,
            Q = m[v.type],
            $ = O.isSkinnedMesh ? _(O) : 0;
        v.precision !== null && (p = i.getMaxPrecision(v.precision), p !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", p, "instead."));
        const ue = H.morphAttributes.position || H.morphAttributes.normal || H.morphAttributes.color,
            Me = ue !== void 0 ? ue.length : 0;
        let xe = 0;
        H.morphAttributes.position !== void 0 && (xe = 1), H.morphAttributes.normal !== void 0 && (xe = 2), H.morphAttributes.color !== void 0 && (xe = 3);
        let Y, We, Re, Pe;
        if (Q) {
            const ne = An[Q];
            Y = ne.vertexShader, We = ne.fragmentShader
        } else Y = v.vertexShader, We = v.fragmentShader, c.update(v), Re = c.getVertexShaderID(v), Pe = c.getFragmentShaderID(v);
        const se = o.getRenderTarget(),
            Be = v.alphaTest > 0,
            j = v.clearcoat > 0;
        return {
            isWebGL2: d,
            shaderID: Q,
            shaderName: v.type,
            vertexShader: Y,
            fragmentShader: We,
            defines: v.defines,
            customVertexShaderID: Re,
            customFragmentShaderID: Pe,
            isRawShaderMaterial: v.isRawShaderMaterial === !0,
            glslVersion: v.glslVersion,
            precision: p,
            instancing: O.isInstancedMesh === !0,
            instancingColor: O.isInstancedMesh === !0 && O.instanceColor !== null,
            supportsVertexTextures: g,
            outputEncoding: se === null ? o.outputEncoding : se.isXRRenderTarget === !0 ? se.texture.encoding : Zn,
            map: !!v.map,
            matcap: !!v.matcap,
            envMap: !!X,
            envMapMode: X && X.mapping,
            envMapCubeUVHeight: Z,
            lightMap: !!v.lightMap,
            aoMap: !!v.aoMap,
            emissiveMap: !!v.emissiveMap,
            bumpMap: !!v.bumpMap,
            normalMap: !!v.normalMap,
            objectSpaceNormalMap: v.normalMapType === rm,
            tangentSpaceNormalMap: v.normalMapType === es,
            decodeVideoTexture: !!v.map && v.map.isVideoTexture === !0 && v.map.encoding === Ge,
            clearcoat: j,
            clearcoatMap: j && !!v.clearcoatMap,
            clearcoatRoughnessMap: j && !!v.clearcoatRoughnessMap,
            clearcoatNormalMap: j && !!v.clearcoatNormalMap,
            displacementMap: !!v.displacementMap,
            roughnessMap: !!v.roughnessMap,
            metalnessMap: !!v.metalnessMap,
            specularMap: !!v.specularMap,
            specularIntensityMap: !!v.specularIntensityMap,
            specularColorMap: !!v.specularColorMap,
            opaque: v.transparent === !1 && v.blending === Ns,
            alphaMap: !!v.alphaMap,
            alphaTest: Be,
            gradientMap: !!v.gradientMap,
            sheen: v.sheen > 0,
            sheenColorMap: !!v.sheenColorMap,
            sheenRoughnessMap: !!v.sheenRoughnessMap,
            transmission: v.transmission > 0,
            transmissionMap: !!v.transmissionMap,
            thicknessMap: !!v.thicknessMap,
            combine: v.combine,
            vertexTangents: !!v.normalMap && !!H.attributes.tangent,
            vertexColors: v.vertexColors,
            vertexAlphas: v.vertexColors === !0 && !!H.attributes.color && H.attributes.color.itemSize === 4,
            vertexUvs: !!v.map || !!v.bumpMap || !!v.normalMap || !!v.specularMap || !!v.alphaMap || !!v.emissiveMap || !!v.roughnessMap || !!v.metalnessMap || !!v.clearcoatMap || !!v.clearcoatRoughnessMap || !!v.clearcoatNormalMap || !!v.displacementMap || !!v.transmissionMap || !!v.thicknessMap || !!v.specularIntensityMap || !!v.specularColorMap || !!v.sheenColorMap || !!v.sheenRoughnessMap,
            uvsVertexOnly: !(v.map || v.bumpMap || v.normalMap || v.specularMap || v.alphaMap || v.emissiveMap || v.roughnessMap || v.metalnessMap || v.clearcoatNormalMap || v.transmission > 0 || v.transmissionMap || v.thicknessMap || v.specularIntensityMap || v.specularColorMap || v.sheen > 0 || v.sheenColorMap || v.sheenRoughnessMap) && !!v.displacementMap,
            fog: !!N,
            useFog: v.fog,
            fogExp2: N && N.isFogExp2,
            flatShading: !!v.flatShading,
            sizeAttenuation: v.sizeAttenuation,
            logarithmicDepthBuffer: l,
            skinning: O.isSkinnedMesh === !0 && $ > 0,
            maxBones: $,
            useVertexTexture: u,
            morphTargets: H.morphAttributes.position !== void 0,
            morphNormals: H.morphAttributes.normal !== void 0,
            morphColors: H.morphAttributes.color !== void 0,
            morphTargetsCount: Me,
            morphTextureStride: xe,
            numDirLights: L.directional.length,
            numPointLights: L.point.length,
            numSpotLights: L.spot.length,
            numRectAreaLights: L.rectArea.length,
            numHemiLights: L.hemi.length,
            numDirLightShadows: L.directionalShadowMap.length,
            numPointLightShadows: L.pointShadowMap.length,
            numSpotLightShadows: L.spotShadowMap.length,
            numClippingPlanes: r.numPlanes,
            numClipIntersection: r.numIntersection,
            dithering: v.dithering,
            shadowMapEnabled: o.shadowMap.enabled && U.length > 0,
            shadowMapType: o.shadowMap.type,
            toneMapping: v.toneMapped ? o.toneMapping : Jn,
            physicallyCorrectLights: o.physicallyCorrectLights,
            premultipliedAlpha: v.premultipliedAlpha,
            doubleSided: v.side === Yi,
            flipSided: v.side === xn,
            depthPacking: v.depthPacking !== void 0 ? v.depthPacking : !1,
            index0AttributeName: v.index0AttributeName,
            extensionDerivatives: v.extensions && v.extensions.derivatives,
            extensionFragDepth: v.extensions && v.extensions.fragDepth,
            extensionDrawBuffers: v.extensions && v.extensions.drawBuffers,
            extensionShaderTextureLOD: v.extensions && v.extensions.shaderTextureLOD,
            rendererExtensionFragDepth: d || n.has("EXT_frag_depth"),
            rendererExtensionDrawBuffers: d || n.has("WEBGL_draw_buffers"),
            rendererExtensionShaderTextureLod: d || n.has("EXT_shader_texture_lod"),
            customProgramCacheKey: v.customProgramCacheKey()
        }
    }

    function b(v) {
        const L = [];
        if (v.shaderID ? L.push(v.shaderID) : (L.push(v.customVertexShaderID), L.push(v.customFragmentShaderID)), v.defines !== void 0)
            for (const U in v.defines) L.push(U), L.push(v.defines[U]);
        return v.isRawShaderMaterial === !1 && (w(L, v), x(L, v), L.push(o.outputEncoding)), L.push(v.customProgramCacheKey), L.join()
    }

    function w(v, L) {
        v.push(L.precision), v.push(L.outputEncoding), v.push(L.envMapMode), v.push(L.envMapCubeUVHeight), v.push(L.combine), v.push(L.vertexUvs), v.push(L.fogExp2), v.push(L.sizeAttenuation), v.push(L.maxBones), v.push(L.morphTargetsCount), v.push(L.morphAttributeCount), v.push(L.numDirLights), v.push(L.numPointLights), v.push(L.numSpotLights), v.push(L.numHemiLights), v.push(L.numRectAreaLights), v.push(L.numDirLightShadows), v.push(L.numPointLightShadows), v.push(L.numSpotLightShadows), v.push(L.shadowMapType), v.push(L.toneMapping), v.push(L.numClippingPlanes), v.push(L.numClipIntersection)
    }

    function x(v, L) {
        a.disableAll(), L.isWebGL2 && a.enable(0), L.supportsVertexTextures && a.enable(1), L.instancing && a.enable(2), L.instancingColor && a.enable(3), L.map && a.enable(4), L.matcap && a.enable(5), L.envMap && a.enable(6), L.lightMap && a.enable(7), L.aoMap && a.enable(8), L.emissiveMap && a.enable(9), L.bumpMap && a.enable(10), L.normalMap && a.enable(11), L.objectSpaceNormalMap && a.enable(12), L.tangentSpaceNormalMap && a.enable(13), L.clearcoat && a.enable(14), L.clearcoatMap && a.enable(15), L.clearcoatRoughnessMap && a.enable(16), L.clearcoatNormalMap && a.enable(17), L.displacementMap && a.enable(18), L.specularMap && a.enable(19), L.roughnessMap && a.enable(20), L.metalnessMap && a.enable(21), L.gradientMap && a.enable(22), L.alphaMap && a.enable(23), L.alphaTest && a.enable(24), L.vertexColors && a.enable(25), L.vertexAlphas && a.enable(26), L.vertexUvs && a.enable(27), L.vertexTangents && a.enable(28), L.uvsVertexOnly && a.enable(29), L.fog && a.enable(30), v.push(a.mask), a.disableAll(), L.useFog && a.enable(0), L.flatShading && a.enable(1), L.logarithmicDepthBuffer && a.enable(2), L.skinning && a.enable(3), L.useVertexTexture && a.enable(4), L.morphTargets && a.enable(5), L.morphNormals && a.enable(6), L.morphColors && a.enable(7), L.premultipliedAlpha && a.enable(8), L.shadowMapEnabled && a.enable(9), L.physicallyCorrectLights && a.enable(10), L.doubleSided && a.enable(11), L.flipSided && a.enable(12), L.depthPacking && a.enable(13), L.dithering && a.enable(14), L.specularIntensityMap && a.enable(15), L.specularColorMap && a.enable(16), L.transmission && a.enable(17), L.transmissionMap && a.enable(18), L.thicknessMap && a.enable(19), L.sheen && a.enable(20), L.sheenColorMap && a.enable(21), L.sheenRoughnessMap && a.enable(22), L.decodeVideoTexture && a.enable(23), L.opaque && a.enable(24), v.push(a.mask)
    }

    function E(v) {
        const L = m[v.type];
        let U;
        if (L) {
            const D = An[L];
            U = Nm.clone(D.uniforms)
        } else U = v.uniforms;
        return U
    }

    function T(v, L) {
        let U;
        for (let D = 0, O = h.length; D < O; D++) {
            const N = h[D];
            if (N.cacheKey === L) {
                U = N, ++U.usedTimes;
                break
            }
        }
        return U === void 0 && (U = new Hy(o, L, v, s), h.push(U)), U
    }

    function R(v) {
        if (--v.usedTimes === 0) {
            const L = h.indexOf(v);
            h[L] = h[h.length - 1], h.pop(), v.destroy()
        }
    }

    function I(v) {
        c.remove(v)
    }

    function B() {
        c.dispose()
    }
    return {
        getParameters: y,
        getProgramCacheKey: b,
        getUniforms: E,
        acquireProgram: T,
        releaseProgram: R,
        releaseShaderCache: I,
        programs: h,
        dispose: B
    }
}

function qy() {
    let o = new WeakMap;

    function e(s) {
        let r = o.get(s);
        return r === void 0 && (r = {}, o.set(s, r)), r
    }

    function t(s) {
        o.delete(s)
    }

    function n(s, r, a) {
        o.get(s)[r] = a
    }

    function i() {
        o = new WeakMap
    }
    return {
        get: e,
        remove: t,
        update: n,
        dispose: i
    }
}

function Xy(o, e) {
    return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.material.id !== e.material.id ? o.material.id - e.material.id : o.z !== e.z ? o.z - e.z : o.id - e.id
}

function Yh(o, e) {
    return o.groupOrder !== e.groupOrder ? o.groupOrder - e.groupOrder : o.renderOrder !== e.renderOrder ? o.renderOrder - e.renderOrder : o.z !== e.z ? e.z - o.z : o.id - e.id
}

function Jh() {
    const o = [];
    let e = 0;
    const t = [],
        n = [],
        i = [];

    function s() {
        e = 0, t.length = 0, n.length = 0, i.length = 0
    }

    function r(l, u, f, g, p, m) {
        let _ = o[e];
        return _ === void 0 ? (_ = {
            id: l.id,
            object: l,
            geometry: u,
            material: f,
            groupOrder: g,
            renderOrder: l.renderOrder,
            z: p,
            group: m
        }, o[e] = _) : (_.id = l.id, _.object = l, _.geometry = u, _.material = f, _.groupOrder = g, _.renderOrder = l.renderOrder, _.z = p, _.group = m), e++, _
    }

    function a(l, u, f, g, p, m) {
        const _ = r(l, u, f, g, p, m);
        f.transmission > 0 ? n.push(_) : f.transparent === !0 ? i.push(_) : t.push(_)
    }

    function c(l, u, f, g, p, m) {
        const _ = r(l, u, f, g, p, m);
        f.transmission > 0 ? n.unshift(_) : f.transparent === !0 ? i.unshift(_) : t.unshift(_)
    }

    function h(l, u) {
        t.length > 1 && t.sort(l || Xy), n.length > 1 && n.sort(u || Yh), i.length > 1 && i.sort(u || Yh)
    }

    function d() {
        for (let l = e, u = o.length; l < u; l++) {
            const f = o[l];
            if (f.id === null) break;
            f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null
        }
    }
    return {
        opaque: t,
        transmissive: n,
        transparent: i,
        init: s,
        push: a,
        unshift: c,
        finish: d,
        sort: h
    }
}

function jy() {
    let o = new WeakMap;

    function e(n, i) {
        let s;
        return o.has(n) === !1 ? (s = new Jh, o.set(n, [s])) : i >= o.get(n).length ? (s = new Jh, o.get(n).push(s)) : s = o.get(n)[i], s
    }

    function t() {
        o = new WeakMap
    }
    return {
        get: e,
        dispose: t
    }
}

function Yy() {
    const o = {};
    return {
        get: function(e) {
            if (o[e.id] !== void 0) return o[e.id];
            let t;
            switch (e.type) {
                case "DirectionalLight":
                    t = {
                        direction: new C,
                        color: new ie
                    };
                    break;
                case "SpotLight":
                    t = {
                        position: new C,
                        direction: new C,
                        color: new ie,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case "PointLight":
                    t = {
                        position: new C,
                        color: new ie,
                        distance: 0,
                        decay: 0
                    };
                    break;
                case "HemisphereLight":
                    t = {
                        direction: new C,
                        skyColor: new ie,
                        groundColor: new ie
                    };
                    break;
                case "RectAreaLight":
                    t = {
                        color: new ie,
                        position: new C,
                        halfWidth: new C,
                        halfHeight: new C
                    };
                    break
            }
            return o[e.id] = t, t
        }
    }
}

function Jy() {
    const o = {};
    return {
        get: function(e) {
            if (o[e.id] !== void 0) return o[e.id];
            let t;
            switch (e.type) {
                case "DirectionalLight":
                    t = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new te
                    };
                    break;
                case "SpotLight":
                    t = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new te
                    };
                    break;
                case "PointLight":
                    t = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new te,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    };
                    break
            }
            return o[e.id] = t, t
        }
    }
}
let Ky = 0;

function Zy(o, e) {
    return (e.castShadow ? 1 : 0) - (o.castShadow ? 1 : 0)
}

function $y(o, e) {
    const t = new Yy,
        n = Jy(),
        i = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        };
    for (let d = 0; d < 9; d++) i.probe.push(new C);
    const s = new C,
        r = new _e,
        a = new _e;

    function c(d, l) {
        let u = 0,
            f = 0,
            g = 0;
        for (let I = 0; I < 9; I++) i.probe[I].set(0, 0, 0);
        let p = 0,
            m = 0,
            _ = 0,
            y = 0,
            b = 0,
            w = 0,
            x = 0,
            E = 0;
        d.sort(Zy);
        const T = l !== !0 ? Math.PI : 1;
        for (let I = 0, B = d.length; I < B; I++) {
            const v = d[I],
                L = v.color,
                U = v.intensity,
                D = v.distance,
                O = v.shadow && v.shadow.map ? v.shadow.map.texture : null;
            if (v.isAmbientLight) u += L.r * U * T, f += L.g * U * T, g += L.b * U * T;
            else if (v.isLightProbe)
                for (let N = 0; N < 9; N++) i.probe[N].addScaledVector(v.sh.coefficients[N], U);
            else if (v.isDirectionalLight) {
                const N = t.get(v);
                if (N.color.copy(v.color).multiplyScalar(v.intensity * T), v.castShadow) {
                    const H = v.shadow,
                        F = n.get(v);
                    F.shadowBias = H.bias, F.shadowNormalBias = H.normalBias, F.shadowRadius = H.radius, F.shadowMapSize = H.mapSize, i.directionalShadow[p] = F, i.directionalShadowMap[p] = O, i.directionalShadowMatrix[p] = v.shadow.matrix, w++
                }
                i.directional[p] = N, p++
            } else if (v.isSpotLight) {
                const N = t.get(v);
                if (N.position.setFromMatrixPosition(v.matrixWorld), N.color.copy(L).multiplyScalar(U * T), N.distance = D, N.coneCos = Math.cos(v.angle), N.penumbraCos = Math.cos(v.angle * (1 - v.penumbra)), N.decay = v.decay, v.castShadow) {
                    const H = v.shadow,
                        F = n.get(v);
                    F.shadowBias = H.bias, F.shadowNormalBias = H.normalBias, F.shadowRadius = H.radius, F.shadowMapSize = H.mapSize, i.spotShadow[_] = F, i.spotShadowMap[_] = O, i.spotShadowMatrix[_] = v.shadow.matrix, E++
                }
                i.spot[_] = N, _++
            } else if (v.isRectAreaLight) {
                const N = t.get(v);
                N.color.copy(L).multiplyScalar(U), N.halfWidth.set(v.width * .5, 0, 0), N.halfHeight.set(0, v.height * .5, 0), i.rectArea[y] = N, y++
            } else if (v.isPointLight) {
                const N = t.get(v);
                if (N.color.copy(v.color).multiplyScalar(v.intensity * T), N.distance = v.distance, N.decay = v.decay, v.castShadow) {
                    const H = v.shadow,
                        F = n.get(v);
                    F.shadowBias = H.bias, F.shadowNormalBias = H.normalBias, F.shadowRadius = H.radius, F.shadowMapSize = H.mapSize, F.shadowCameraNear = H.camera.near, F.shadowCameraFar = H.camera.far, i.pointShadow[m] = F, i.pointShadowMap[m] = O, i.pointShadowMatrix[m] = v.shadow.matrix, x++
                }
                i.point[m] = N, m++
            } else if (v.isHemisphereLight) {
                const N = t.get(v);
                N.skyColor.copy(v.color).multiplyScalar(U * T), N.groundColor.copy(v.groundColor).multiplyScalar(U * T), i.hemi[b] = N, b++
            }
        }
        y > 0 && (e.isWebGL2 || o.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ae.LTC_FLOAT_1, i.rectAreaLTC2 = ae.LTC_FLOAT_2) : o.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ae.LTC_HALF_1, i.rectAreaLTC2 = ae.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = u, i.ambient[1] = f, i.ambient[2] = g;
        const R = i.hash;
        (R.directionalLength !== p || R.pointLength !== m || R.spotLength !== _ || R.rectAreaLength !== y || R.hemiLength !== b || R.numDirectionalShadows !== w || R.numPointShadows !== x || R.numSpotShadows !== E) && (i.directional.length = p, i.spot.length = _, i.rectArea.length = y, i.point.length = m, i.hemi.length = b, i.directionalShadow.length = w, i.directionalShadowMap.length = w, i.pointShadow.length = x, i.pointShadowMap.length = x, i.spotShadow.length = E, i.spotShadowMap.length = E, i.directionalShadowMatrix.length = w, i.pointShadowMatrix.length = x, i.spotShadowMatrix.length = E, R.directionalLength = p, R.pointLength = m, R.spotLength = _, R.rectAreaLength = y, R.hemiLength = b, R.numDirectionalShadows = w, R.numPointShadows = x, R.numSpotShadows = E, i.version = Ky++)
    }

    function h(d, l) {
        let u = 0,
            f = 0,
            g = 0,
            p = 0,
            m = 0;
        const _ = l.matrixWorldInverse;
        for (let y = 0, b = d.length; y < b; y++) {
            const w = d[y];
            if (w.isDirectionalLight) {
                const x = i.directional[u];
                x.direction.setFromMatrixPosition(w.matrixWorld), s.setFromMatrixPosition(w.target.matrixWorld), x.direction.sub(s), x.direction.transformDirection(_), u++
            } else if (w.isSpotLight) {
                const x = i.spot[g];
                x.position.setFromMatrixPosition(w.matrixWorld), x.position.applyMatrix4(_), x.direction.setFromMatrixPosition(w.matrixWorld), s.setFromMatrixPosition(w.target.matrixWorld), x.direction.sub(s), x.direction.transformDirection(_), g++
            } else if (w.isRectAreaLight) {
                const x = i.rectArea[p];
                x.position.setFromMatrixPosition(w.matrixWorld), x.position.applyMatrix4(_), a.identity(), r.copy(w.matrixWorld), r.premultiply(_), a.extractRotation(r), x.halfWidth.set(w.width * .5, 0, 0), x.halfHeight.set(0, w.height * .5, 0), x.halfWidth.applyMatrix4(a), x.halfHeight.applyMatrix4(a), p++
            } else if (w.isPointLight) {
                const x = i.point[f];
                x.position.setFromMatrixPosition(w.matrixWorld), x.position.applyMatrix4(_), f++
            } else if (w.isHemisphereLight) {
                const x = i.hemi[m];
                x.direction.setFromMatrixPosition(w.matrixWorld), x.direction.transformDirection(_), x.direction.normalize(), m++
            }
        }
    }
    return {
        setup: c,
        setupView: h,
        state: i
    }
}

function Kh(o, e) {
    const t = new $y(o, e),
        n = [],
        i = [];

    function s() {
        n.length = 0, i.length = 0
    }

    function r(l) {
        n.push(l)
    }

    function a(l) {
        i.push(l)
    }

    function c(l) {
        t.setup(n, l)
    }

    function h(l) {
        t.setupView(n, l)
    }
    return {
        init: s,
        state: {
            lightsArray: n,
            shadowsArray: i,
            lights: t
        },
        setupLights: c,
        setupLightsView: h,
        pushLight: r,
        pushShadow: a
    }
}

function Qy(o, e) {
    let t = new WeakMap;

    function n(s, r = 0) {
        let a;
        return t.has(s) === !1 ? (a = new Kh(o, e), t.set(s, [a])) : r >= t.get(s).length ? (a = new Kh(o, e), t.get(s).push(a)) : a = t.get(s)[r], a
    }

    function i() {
        t = new WeakMap
    }
    return {
        get: n,
        dispose: i
    }
}
class oc extends dt {
    constructor(e) {
        super(), this.type = "MeshDepthMaterial", this.depthPacking = im, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
    }
}
oc.prototype.isMeshDepthMaterial = !0;
class ac extends dt {
    constructor(e) {
        super(), this.type = "MeshDistanceMaterial", this.referencePosition = new C, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
    }
}
ac.prototype.isMeshDistanceMaterial = !0;
const ex = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
    tx = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;

function md(o, e, t) {
    let n = new oa;
    const i = new te,
        s = new te,
        r = new Ke,
        a = new oc({
            depthPacking: sm
        }),
        c = new ac,
        h = {},
        d = t.maxTextureSize,
        l = {
            0: xn,
            1: Ws,
            2: Yi
        },
        u = new Ot({
            defines: {
                VSM_SAMPLES: 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new te
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: ex,
            fragmentShader: tx
        }),
        f = u.clone();
    f.defines.HORIZONTAL_PASS = 1;
    const g = new tt;
    g.setAttribute("position", new ft(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    const p = new St(g, u),
        m = this;
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Xu, this.render = function(w, x, E) {
        if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || w.length === 0) return;
        const T = o.getRenderTarget(),
            R = o.getActiveCubeFace(),
            I = o.getActiveMipmapLevel(),
            B = o.state;
        B.setBlending(mi), B.buffers.color.setClear(1, 1, 1, 1), B.buffers.depth.setTest(!0), B.setScissorTest(!1);
        for (let v = 0, L = w.length; v < L; v++) {
            const U = w[v],
                D = U.shadow;
            if (D === void 0) {
                console.warn("THREE.WebGLShadowMap:", U, "has no shadow.");
                continue
            }
            if (D.autoUpdate === !1 && D.needsUpdate === !1) continue;
            i.copy(D.mapSize);
            const O = D.getFrameExtents();
            if (i.multiply(O), s.copy(D.mapSize), (i.x > d || i.y > d) && (i.x > d && (s.x = Math.floor(d / O.x), i.x = s.x * O.x, D.mapSize.x = s.x), i.y > d && (s.y = Math.floor(d / O.y), i.y = s.y * O.y, D.mapSize.y = s.y)), D.map === null && !D.isPointLightShadow && this.type === Sr && (D.map = new Zt(i.x, i.y), D.map.texture.name = U.name + ".shadowMap", D.mapPass = new Zt(i.x, i.y), D.camera.updateProjectionMatrix()), D.map === null) {
                const H = {
                    minFilter: bt,
                    magFilter: bt,
                    format: rn
                };
                D.map = new Zt(i.x, i.y, H), D.map.texture.name = U.name + ".shadowMap", D.camera.updateProjectionMatrix()
            }
            o.setRenderTarget(D.map), o.clear();
            const N = D.getViewportCount();
            for (let H = 0; H < N; H++) {
                const F = D.getViewport(H);
                r.set(s.x * F.x, s.y * F.y, s.x * F.z, s.y * F.w), B.viewport(r), D.updateMatrices(U, H), n = D.getFrustum(), b(x, E, D.camera, U, this.type)
            }!D.isPointLightShadow && this.type === Sr && _(D, E), D.needsUpdate = !1
        }
        m.needsUpdate = !1, o.setRenderTarget(T, R, I)
    };

    function _(w, x) {
        const E = e.update(p);
        u.defines.VSM_SAMPLES !== w.blurSamples && (u.defines.VSM_SAMPLES = w.blurSamples, f.defines.VSM_SAMPLES = w.blurSamples, u.needsUpdate = !0, f.needsUpdate = !0), u.uniforms.shadow_pass.value = w.map.texture, u.uniforms.resolution.value = w.mapSize, u.uniforms.radius.value = w.radius, o.setRenderTarget(w.mapPass), o.clear(), o.renderBufferDirect(x, null, E, u, p, null), f.uniforms.shadow_pass.value = w.mapPass.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, o.setRenderTarget(w.map), o.clear(), o.renderBufferDirect(x, null, E, f, p, null)
    }

    function y(w, x, E, T, R, I) {
        let B = null;
        const v = E.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
        if (v !== void 0 ? B = v : B = E.isPointLight === !0 ? c : a, o.localClippingEnabled && x.clipShadows === !0 && x.clippingPlanes.length !== 0 || x.displacementMap && x.displacementScale !== 0 || x.alphaMap && x.alphaTest > 0) {
            const L = B.uuid,
                U = x.uuid;
            let D = h[L];
            D === void 0 && (D = {}, h[L] = D);
            let O = D[U];
            O === void 0 && (O = B.clone(), D[U] = O), B = O
        }
        return B.visible = x.visible, B.wireframe = x.wireframe, I === Sr ? B.side = x.shadowSide !== null ? x.shadowSide : x.side : B.side = x.shadowSide !== null ? x.shadowSide : l[x.side], B.alphaMap = x.alphaMap, B.alphaTest = x.alphaTest, B.clipShadows = x.clipShadows, B.clippingPlanes = x.clippingPlanes, B.clipIntersection = x.clipIntersection, B.displacementMap = x.displacementMap, B.displacementScale = x.displacementScale, B.displacementBias = x.displacementBias, B.wireframeLinewidth = x.wireframeLinewidth, B.linewidth = x.linewidth, E.isPointLight === !0 && B.isMeshDistanceMaterial === !0 && (B.referencePosition.setFromMatrixPosition(E.matrixWorld), B.nearDistance = T, B.farDistance = R), B
    }

    function b(w, x, E, T, R) {
        if (w.visible === !1) return;
        if (w.layers.test(x.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && R === Sr) && (!w.frustumCulled || n.intersectsObject(w))) {
            w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, w.matrixWorld);
            const v = e.update(w),
                L = w.material;
            if (Array.isArray(L)) {
                const U = v.groups;
                for (let D = 0, O = U.length; D < O; D++) {
                    const N = U[D],
                        H = L[N.materialIndex];
                    if (H && H.visible) {
                        const F = y(w, H, T, E.near, E.far, R);
                        o.renderBufferDirect(E, null, v, F, w, N)
                    }
                }
            } else if (L.visible) {
                const U = y(w, L, T, E.near, E.far, R);
                o.renderBufferDirect(E, null, v, U, w, null)
            }
        }
        const B = w.children;
        for (let v = 0, L = B.length; v < L; v++) b(B[v], x, E, T, R)
    }
}

function nx(o, e, t) {
    const n = t.isWebGL2;

    function i() {
        let k = !1;
        const le = new Ke;
        let oe = null;
        const Se = new Ke(0, 0, 0, 0);
        return {
            setMask: function(pe) {
                oe !== pe && !k && (o.colorMask(pe, pe, pe, pe), oe = pe)
            },
            setLocked: function(pe) {
                k = pe
            },
            setClear: function(pe, Te, re, Ae, nt) {
                nt === !0 && (pe *= Ae, Te *= Ae, re *= Ae), le.set(pe, Te, re, Ae), Se.equals(le) === !1 && (o.clearColor(pe, Te, re, Ae), Se.copy(le))
            },
            reset: function() {
                k = !1, oe = null, Se.set(-1, 0, 0, 0)
            }
        }
    }

    function s() {
        let k = !1,
            le = null,
            oe = null,
            Se = null;
        return {
            setTest: function(pe) {
                pe ? xe(2929) : Y(2929)
            },
            setMask: function(pe) {
                le !== pe && !k && (o.depthMask(pe), le = pe)
            },
            setFunc: function(pe) {
                if (oe !== pe) {
                    if (pe) switch (pe) {
                        case Sp:
                            o.depthFunc(512);
                            break;
                        case Tp:
                            o.depthFunc(519);
                            break;
                        case Ep:
                            o.depthFunc(513);
                            break;
                        case vl:
                            o.depthFunc(515);
                            break;
                        case Ap:
                            o.depthFunc(514);
                            break;
                        case Cp:
                            o.depthFunc(518);
                            break;
                        case Lp:
                            o.depthFunc(516);
                            break;
                        case Rp:
                            o.depthFunc(517);
                            break;
                        default:
                            o.depthFunc(515)
                    } else o.depthFunc(515);
                    oe = pe
                }
            },
            setLocked: function(pe) {
                k = pe
            },
            setClear: function(pe) {
                Se !== pe && (o.clearDepth(pe), Se = pe)
            },
            reset: function() {
                k = !1, le = null, oe = null, Se = null
            }
        }
    }

    function r() {
        let k = !1,
            le = null,
            oe = null,
            Se = null,
            pe = null,
            Te = null,
            re = null,
            Ae = null,
            nt = null;
        return {
            setTest: function(He) {
                k || (He ? xe(2960) : Y(2960))
            },
            setMask: function(He) {
                le !== He && !k && (o.stencilMask(He), le = He)
            },
            setFunc: function(He, bn, wn) {
                (oe !== He || Se !== bn || pe !== wn) && (o.stencilFunc(He, bn, wn), oe = He, Se = bn, pe = wn)
            },
            setOp: function(He, bn, wn) {
                (Te !== He || re !== bn || Ae !== wn) && (o.stencilOp(He, bn, wn), Te = He, re = bn, Ae = wn)
            },
            setLocked: function(He) {
                k = He
            },
            setClear: function(He) {
                nt !== He && (o.clearStencil(He), nt = He)
            },
            reset: function() {
                k = !1, le = null, oe = null, Se = null, pe = null, Te = null, re = null, Ae = null, nt = null
            }
        }
    }
    const a = new i,
        c = new s,
        h = new r;
    let d = {},
        l = {},
        u = new WeakMap,
        f = [],
        g = null,
        p = !1,
        m = null,
        _ = null,
        y = null,
        b = null,
        w = null,
        x = null,
        E = null,
        T = !1,
        R = null,
        I = null,
        B = null,
        v = null,
        L = null;
    const U = o.getParameter(35661);
    let D = !1,
        O = 0;
    const N = o.getParameter(7938);
    N.indexOf("WebGL") !== -1 ? (O = parseFloat(/^WebGL (\d)/.exec(N)[1]), D = O >= 1) : N.indexOf("OpenGL ES") !== -1 && (O = parseFloat(/^OpenGL ES (\d)/.exec(N)[1]), D = O >= 2);
    let H = null,
        F = {};
    const X = o.getParameter(3088),
        Z = o.getParameter(2978),
        Q = new Ke().fromArray(X),
        $ = new Ke().fromArray(Z);

    function ue(k, le, oe) {
        const Se = new Uint8Array(4),
            pe = o.createTexture();
        o.bindTexture(k, pe), o.texParameteri(k, 10241, 9728), o.texParameteri(k, 10240, 9728);
        for (let Te = 0; Te < oe; Te++) o.texImage2D(le + Te, 0, 6408, 1, 1, 0, 6408, 5121, Se);
        return pe
    }
    const Me = {};
    Me[3553] = ue(3553, 3553, 1), Me[34067] = ue(34067, 34069, 6), a.setClear(0, 0, 0, 1), c.setClear(1), h.setClear(0), xe(2929), c.setFunc(vl), ne(!1), me(Vc), xe(2884), j(mi);

    function xe(k) {
        d[k] !== !0 && (o.enable(k), d[k] = !0)
    }

    function Y(k) {
        d[k] !== !1 && (o.disable(k), d[k] = !1)
    }

    function We(k, le) {
        return l[k] !== le ? (o.bindFramebuffer(k, le), l[k] = le, n && (k === 36009 && (l[36160] = le), k === 36160 && (l[36009] = le)), !0) : !1
    }

    function Re(k, le) {
        let oe = f,
            Se = !1;
        if (k)
            if (oe = u.get(le), oe === void 0 && (oe = [], u.set(le, oe)), k.isWebGLMultipleRenderTargets) {
                const pe = k.texture;
                if (oe.length !== pe.length || oe[0] !== 36064) {
                    for (let Te = 0, re = pe.length; Te < re; Te++) oe[Te] = 36064 + Te;
                    oe.length = pe.length, Se = !0
                }
            } else oe[0] !== 36064 && (oe[0] = 36064, Se = !0);
        else oe[0] !== 1029 && (oe[0] = 1029, Se = !0);
        Se && (t.isWebGL2 ? o.drawBuffers(oe) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))
    }

    function Pe(k) {
        return g !== k ? (o.useProgram(k), g = k, !0) : !1
    }
    const se = {
        [Rs]: 32774,
        [fp]: 32778,
        [pp]: 32779
    };
    if (n) se[jc] = 32775, se[Yc] = 32776;
    else {
        const k = e.get("EXT_blend_minmax");
        k !== null && (se[jc] = k.MIN_EXT, se[Yc] = k.MAX_EXT)
    }
    const Be = {
        [mp]: 0,
        [gp]: 1,
        [_p]: 768,
        [Yu]: 770,
        [Mp]: 776,
        [bp]: 774,
        [xp]: 772,
        [yp]: 769,
        [Ju]: 771,
        [wp]: 775,
        [vp]: 773
    };

    function j(k, le, oe, Se, pe, Te, re, Ae) {
        if (k === mi) {
            p === !0 && (Y(3042), p = !1);
            return
        }
        if (p === !1 && (xe(3042), p = !0), k !== dp) {
            if (k !== m || Ae !== T) {
                if ((_ !== Rs || w !== Rs) && (o.blendEquation(32774), _ = Rs, w = Rs), Ae) switch (k) {
                    case Ns:
                        o.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case Wc:
                        o.blendFunc(1, 1);
                        break;
                    case qc:
                        o.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case Xc:
                        o.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", k);
                        break
                } else switch (k) {
                    case Ns:
                        o.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case Wc:
                        o.blendFunc(770, 1);
                        break;
                    case qc:
                        o.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case Xc:
                        o.blendFunc(0, 768);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", k);
                        break
                }
                y = null, b = null, x = null, E = null, m = k, T = Ae
            }
            return
        }
        pe = pe || le, Te = Te || oe, re = re || Se, (le !== _ || pe !== w) && (o.blendEquationSeparate(se[le], se[pe]), _ = le, w = pe), (oe !== y || Se !== b || Te !== x || re !== E) && (o.blendFuncSeparate(Be[oe], Be[Se], Be[Te], Be[re]), y = oe, b = Se, x = Te, E = re), m = k, T = null
    }

    function K(k, le) {
        k.side === Yi ? Y(2884) : xe(2884);
        let oe = k.side === xn;
        le && (oe = !oe), ne(oe), k.blending === Ns && k.transparent === !1 ? j(mi) : j(k.blending, k.blendEquation, k.blendSrc, k.blendDst, k.blendEquationAlpha, k.blendSrcAlpha, k.blendDstAlpha, k.premultipliedAlpha), c.setFunc(k.depthFunc), c.setTest(k.depthTest), c.setMask(k.depthWrite), a.setMask(k.colorWrite);
        const Se = k.stencilWrite;
        h.setTest(Se), Se && (h.setMask(k.stencilWriteMask), h.setFunc(k.stencilFunc, k.stencilRef, k.stencilFuncMask), h.setOp(k.stencilFail, k.stencilZFail, k.stencilZPass)), Ce(k.polygonOffset, k.polygonOffsetFactor, k.polygonOffsetUnits), k.alphaToCoverage === !0 ? xe(32926) : Y(32926)
    }

    function ne(k) {
        R !== k && (k ? o.frontFace(2304) : o.frontFace(2305), R = k)
    }

    function me(k) {
        k !== cp ? (xe(2884), k !== I && (k === Vc ? o.cullFace(1029) : k === hp ? o.cullFace(1028) : o.cullFace(1032))) : Y(2884), I = k
    }

    function de(k) {
        k !== B && (D && o.lineWidth(k), B = k)
    }

    function Ce(k, le, oe) {
        k ? (xe(32823), (v !== le || L !== oe) && (o.polygonOffset(le, oe), v = le, L = oe)) : Y(32823)
    }

    function we(k) {
        k ? xe(3089) : Y(3089)
    }

    function ve(k) {
        k === void 0 && (k = 33984 + U - 1), H !== k && (o.activeTexture(k), H = k)
    }

    function st(k, le) {
        H === null && ve();
        let oe = F[H];
        oe === void 0 && (oe = {
            type: void 0,
            texture: void 0
        }, F[H] = oe), (oe.type !== k || oe.texture !== le) && (o.bindTexture(k, le || Me[k]), oe.type = k, oe.texture = le)
    }

    function Ze() {
        const k = F[H];
        k !== void 0 && k.type !== void 0 && (o.bindTexture(k.type, null), k.type = void 0, k.texture = void 0)
    }

    function A() {
        try {
            o.compressedTexImage2D.apply(o, arguments)
        } catch (k) {
            console.error("THREE.WebGLState:", k)
        }
    }

    function M() {
        try {
            o.texSubImage2D.apply(o, arguments)
        } catch (k) {
            console.error("THREE.WebGLState:", k)
        }
    }

    function W() {
        try {
            o.texSubImage3D.apply(o, arguments)
        } catch (k) {
            console.error("THREE.WebGLState:", k)
        }
    }

    function ee() {
        try {
            o.compressedTexSubImage2D.apply(o, arguments)
        } catch (k) {
            console.error("THREE.WebGLState:", k)
        }
    }

    function ce() {
        try {
            o.texStorage2D.apply(o, arguments)
        } catch (k) {
            console.error("THREE.WebGLState:", k)
        }
    }

    function fe() {
        try {
            o.texStorage3D.apply(o, arguments)
        } catch (k) {
            console.error("THREE.WebGLState:", k)
        }
    }

    function be() {
        try {
            o.texImage2D.apply(o, arguments)
        } catch (k) {
            console.error("THREE.WebGLState:", k)
        }
    }

    function q() {
        try {
            o.texImage3D.apply(o, arguments)
        } catch (k) {
            console.error("THREE.WebGLState:", k)
        }
    }

    function Ie(k) {
        Q.equals(k) === !1 && (o.scissor(k.x, k.y, k.z, k.w), Q.copy(k))
    }

    function ke(k) {
        $.equals(k) === !1 && (o.viewport(k.x, k.y, k.z, k.w), $.copy(k))
    }

    function ge() {
        o.disable(3042), o.disable(2884), o.disable(2929), o.disable(32823), o.disable(3089), o.disable(2960), o.disable(32926), o.blendEquation(32774), o.blendFunc(1, 0), o.blendFuncSeparate(1, 0, 1, 0), o.colorMask(!0, !0, !0, !0), o.clearColor(0, 0, 0, 0), o.depthMask(!0), o.depthFunc(513), o.clearDepth(1), o.stencilMask(4294967295), o.stencilFunc(519, 0, 4294967295), o.stencilOp(7680, 7680, 7680), o.clearStencil(0), o.cullFace(1029), o.frontFace(2305), o.polygonOffset(0, 0), o.activeTexture(33984), o.bindFramebuffer(36160, null), n === !0 && (o.bindFramebuffer(36009, null), o.bindFramebuffer(36008, null)), o.useProgram(null), o.lineWidth(1), o.scissor(0, 0, o.canvas.width, o.canvas.height), o.viewport(0, 0, o.canvas.width, o.canvas.height), d = {}, H = null, F = {}, l = {}, u = new WeakMap, f = [], g = null, p = !1, m = null, _ = null, y = null, b = null, w = null, x = null, E = null, T = !1, R = null, I = null, B = null, v = null, L = null, Q.set(0, 0, o.canvas.width, o.canvas.height), $.set(0, 0, o.canvas.width, o.canvas.height), a.reset(), c.reset(), h.reset()
    }
    return {
        buffers: {
            color: a,
            depth: c,
            stencil: h
        },
        enable: xe,
        disable: Y,
        bindFramebuffer: We,
        drawBuffers: Re,
        useProgram: Pe,
        setBlending: j,
        setMaterial: K,
        setFlipSided: ne,
        setCullFace: me,
        setLineWidth: de,
        setPolygonOffset: Ce,
        setScissorTest: we,
        activeTexture: ve,
        bindTexture: st,
        unbindTexture: Ze,
        compressedTexImage2D: A,
        texImage2D: be,
        texImage3D: q,
        texStorage2D: ce,
        texStorage3D: fe,
        texSubImage2D: M,
        texSubImage3D: W,
        compressedTexSubImage2D: ee,
        scissor: Ie,
        viewport: ke,
        reset: ge
    }
}

function ix(o, e, t, n, i, s, r) {
    const a = i.isWebGL2,
        c = i.maxTextures,
        h = i.maxCubemapSize,
        d = i.maxTextureSize,
        l = i.maxSamples,
        u = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
        f = /OculusBrowser/g.test(navigator.userAgent),
        g = new WeakMap;
    let p;
    const m = new WeakMap;
    let _ = !1;
    try {
        _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null
    } catch {}

    function y(A, M) {
        return _ ? new OffscreenCanvas(A, M) : zr("canvas")
    }

    function b(A, M, W, ee) {
        let ce = 1;
        if ((A.width > ee || A.height > ee) && (ce = ee / Math.max(A.width, A.height)), ce < 1 || M === !0)
            if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap) {
                const fe = M ? Xo : Math.floor,
                    be = fe(ce * A.width),
                    q = fe(ce * A.height);
                p === void 0 && (p = y(be, q));
                const Ie = W ? y(be, q) : p;
                return Ie.width = be, Ie.height = q, Ie.getContext("2d").drawImage(A, 0, 0, be, q), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + A.width + "x" + A.height + ") to (" + be + "x" + q + ")."), Ie
            } else return "data" in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + A.width + "x" + A.height + ")."), A;
        return A
    }

    function w(A) {
        return El(A.width) && El(A.height)
    }

    function x(A) {
        return a ? !1 : A.wrapS !== sn || A.wrapT !== sn || A.minFilter !== bt && A.minFilter !== It
    }

    function E(A, M) {
        return A.generateMipmaps && M && A.minFilter !== bt && A.minFilter !== It
    }

    function T(A) {
        o.generateMipmap(A)
    }

    function R(A, M, W, ee, ce = !1) {
        if (a === !1) return M;
        if (A !== null) {
            if (o[A] !== void 0) return o[A];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'")
        }
        let fe = M;
        return M === 6403 && (W === 5126 && (fe = 33326), W === 5131 && (fe = 33325), W === 5121 && (fe = 33321)), M === 33319 && (W === 5126 && (fe = 33328), W === 5131 && (fe = 33327), W === 5121 && (fe = 33323)), M === 6408 && (W === 5126 && (fe = 34836), W === 5131 && (fe = 34842), W === 5121 && (fe = ee === Ge && ce === !1 ? 35907 : 32856), W === 32819 && (fe = 32854), W === 32820 && (fe = 32855)), (fe === 33325 || fe === 33326 || fe === 33327 || fe === 33328 || fe === 34842 || fe === 34836) && e.get("EXT_color_buffer_float"), fe
    }

    function I(A, M, W) {
        return E(A, W) === !0 || A.isFramebufferTexture && A.minFilter !== bt && A.minFilter !== It ? Math.log2(Math.max(M.width, M.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? M.mipmaps.length : 1
    }

    function B(A) {
        return A === bt || A === Ml || A === Sl ? 9728 : 9729
    }

    function v(A) {
        const M = A.target;
        M.removeEventListener("dispose", v), U(M), M.isVideoTexture && g.delete(M)
    }

    function L(A) {
        const M = A.target;
        M.removeEventListener("dispose", L), O(M)
    }

    function U(A) {
        const M = n.get(A);
        if (M.__webglInit === void 0) return;
        const W = A.source,
            ee = m.get(W);
        if (ee) {
            const ce = ee[M.__cacheKey];
            ce.usedTimes--, ce.usedTimes === 0 && D(A), Object.keys(ee).length === 0 && m.delete(W)
        }
        n.remove(A)
    }

    function D(A) {
        const M = n.get(A);
        o.deleteTexture(M.__webglTexture);
        const W = A.source,
            ee = m.get(W);
        delete ee[M.__cacheKey], r.memory.textures--
    }

    function O(A) {
        const M = A.texture,
            W = n.get(A),
            ee = n.get(M);
        if (ee.__webglTexture !== void 0 && (o.deleteTexture(ee.__webglTexture), r.memory.textures--), A.depthTexture && A.depthTexture.dispose(), A.isWebGLCubeRenderTarget)
            for (let ce = 0; ce < 6; ce++) o.deleteFramebuffer(W.__webglFramebuffer[ce]), W.__webglDepthbuffer && o.deleteRenderbuffer(W.__webglDepthbuffer[ce]);
        else o.deleteFramebuffer(W.__webglFramebuffer), W.__webglDepthbuffer && o.deleteRenderbuffer(W.__webglDepthbuffer), W.__webglMultisampledFramebuffer && o.deleteFramebuffer(W.__webglMultisampledFramebuffer), W.__webglColorRenderbuffer && o.deleteRenderbuffer(W.__webglColorRenderbuffer), W.__webglDepthRenderbuffer && o.deleteRenderbuffer(W.__webglDepthRenderbuffer);
        if (A.isWebGLMultipleRenderTargets)
            for (let ce = 0, fe = M.length; ce < fe; ce++) {
                const be = n.get(M[ce]);
                be.__webglTexture && (o.deleteTexture(be.__webglTexture), r.memory.textures--), n.remove(M[ce])
            }
        n.remove(M), n.remove(A)
    }
    let N = 0;

    function H() {
        N = 0
    }

    function F() {
        const A = N;
        return A >= c && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + c), N += 1, A
    }

    function X(A) {
        const M = [];
        return M.push(A.wrapS), M.push(A.wrapT), M.push(A.magFilter), M.push(A.minFilter), M.push(A.anisotropy), M.push(A.internalFormat), M.push(A.format), M.push(A.type), M.push(A.generateMipmaps), M.push(A.premultiplyAlpha), M.push(A.flipY), M.push(A.unpackAlignment), M.push(A.encoding), M.join()
    }

    function Z(A, M) {
        const W = n.get(A);
        if (A.isVideoTexture && st(A), A.isRenderTargetTexture === !1 && A.version > 0 && W.__version !== A.version) {
            const ee = A.image;
            if (ee === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else if (ee.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else {
                Re(W, A, M);
                return
            }
        }
        t.activeTexture(33984 + M), t.bindTexture(3553, W.__webglTexture)
    }

    function Q(A, M) {
        const W = n.get(A);
        if (A.version > 0 && W.__version !== A.version) {
            Re(W, A, M);
            return
        }
        t.activeTexture(33984 + M), t.bindTexture(35866, W.__webglTexture)
    }

    function $(A, M) {
        const W = n.get(A);
        if (A.version > 0 && W.__version !== A.version) {
            Re(W, A, M);
            return
        }
        t.activeTexture(33984 + M), t.bindTexture(32879, W.__webglTexture)
    }

    function ue(A, M) {
        const W = n.get(A);
        if (A.version > 0 && W.__version !== A.version) {
            Pe(W, A, M);
            return
        }
        t.activeTexture(33984 + M), t.bindTexture(34067, W.__webglTexture)
    }
    const Me = {
            [Ji]: 10497,
            [sn]: 33071,
            [Vo]: 33648
        },
        xe = {
            [bt]: 9728,
            [Ml]: 9984,
            [Sl]: 9986,
            [It]: 9729,
            [Zu]: 9985,
            [ir]: 9987
        };

    function Y(A, M, W) {
        if (W ? (o.texParameteri(A, 10242, Me[M.wrapS]), o.texParameteri(A, 10243, Me[M.wrapT]), (A === 32879 || A === 35866) && o.texParameteri(A, 32882, Me[M.wrapR]), o.texParameteri(A, 10240, xe[M.magFilter]), o.texParameteri(A, 10241, xe[M.minFilter])) : (o.texParameteri(A, 10242, 33071), o.texParameteri(A, 10243, 33071), (A === 32879 || A === 35866) && o.texParameteri(A, 32882, 33071), (M.wrapS !== sn || M.wrapT !== sn) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), o.texParameteri(A, 10240, B(M.magFilter)), o.texParameteri(A, 10241, B(M.minFilter)), M.minFilter !== bt && M.minFilter !== It && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
            const ee = e.get("EXT_texture_filter_anisotropic");
            if (M.type === ui && e.has("OES_texture_float_linear") === !1 || a === !1 && M.type === zs && e.has("OES_texture_half_float_linear") === !1) return;
            (M.anisotropy > 1 || n.get(M).__currentAnisotropy) && (o.texParameterf(A, ee.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy)
        }
    }

    function We(A, M) {
        let W = !1;
        A.__webglInit === void 0 && (A.__webglInit = !0, M.addEventListener("dispose", v));
        const ee = M.source;
        let ce = m.get(ee);
        ce === void 0 && (ce = {}, m.set(ee, ce));
        const fe = X(M);
        if (fe !== A.__cacheKey) {
            ce[fe] === void 0 && (ce[fe] = {
                texture: o.createTexture(),
                usedTimes: 0
            }, r.memory.textures++, W = !0), ce[fe].usedTimes++;
            const be = ce[A.__cacheKey];
            be !== void 0 && (ce[A.__cacheKey].usedTimes--, be.usedTimes === 0 && D(M)), A.__cacheKey = fe, A.__webglTexture = ce[fe].texture
        }
        return W
    }

    function Re(A, M, W) {
        let ee = 3553;
        M.isDataArrayTexture && (ee = 35866), M.isData3DTexture && (ee = 32879);
        const ce = We(A, M),
            fe = M.source;
        if (t.activeTexture(33984 + W), t.bindTexture(ee, A.__webglTexture), fe.version !== fe.__currentVersion || ce === !0) {
            o.pixelStorei(37440, M.flipY), o.pixelStorei(37441, M.premultiplyAlpha), o.pixelStorei(3317, M.unpackAlignment), o.pixelStorei(37443, 0);
            const be = x(M) && w(M.image) === !1;
            let q = b(M.image, be, !1, d);
            q = Ze(M, q);
            const Ie = w(q) || a,
                ke = s.convert(M.format, M.encoding);
            let ge = s.convert(M.type),
                k = R(M.internalFormat, ke, ge, M.encoding, M.isVideoTexture);
            Y(ee, M, Ie);
            let le;
            const oe = M.mipmaps,
                Se = a && M.isVideoTexture !== !0,
                pe = A.__version === void 0,
                Te = I(M, q, Ie);
            if (M.isDepthTexture) k = 6402, a ? M.type === ui ? k = 36012 : M.type === Oo ? k = 33190 : M.type === Hs ? k = 35056 : k = 33189 : M.type === ui && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), M.format === Gi && k === 6402 && M.type !== Fr && M.type !== Oo && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), M.type = Fr, ge = s.convert(M.type)), M.format === js && k === 6402 && (k = 34041, M.type !== Hs && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), M.type = Hs, ge = s.convert(M.type))), Se && pe ? t.texStorage2D(3553, 1, k, q.width, q.height) : t.texImage2D(3553, 0, k, q.width, q.height, 0, ke, ge, null);
            else if (M.isDataTexture)
                if (oe.length > 0 && Ie) {
                    Se && pe && t.texStorage2D(3553, Te, k, oe[0].width, oe[0].height);
                    for (let re = 0, Ae = oe.length; re < Ae; re++) le = oe[re], Se ? t.texSubImage2D(3553, re, 0, 0, le.width, le.height, ke, ge, le.data) : t.texImage2D(3553, re, k, le.width, le.height, 0, ke, ge, le.data);
                    M.generateMipmaps = !1
                } else Se ? (pe && t.texStorage2D(3553, Te, k, q.width, q.height), t.texSubImage2D(3553, 0, 0, 0, q.width, q.height, ke, ge, q.data)) : t.texImage2D(3553, 0, k, q.width, q.height, 0, ke, ge, q.data);
            else if (M.isCompressedTexture) {
                Se && pe && t.texStorage2D(3553, Te, k, oe[0].width, oe[0].height);
                for (let re = 0, Ae = oe.length; re < Ae; re++) le = oe[re], M.format !== rn ? ke !== null ? Se ? t.compressedTexSubImage2D(3553, re, 0, 0, le.width, le.height, ke, le.data) : t.compressedTexImage2D(3553, re, k, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Se ? t.texSubImage2D(3553, re, 0, 0, le.width, le.height, ke, ge, le.data) : t.texImage2D(3553, re, k, le.width, le.height, 0, ke, ge, le.data)
            } else if (M.isDataArrayTexture) Se ? (pe && t.texStorage3D(35866, Te, k, q.width, q.height, q.depth), t.texSubImage3D(35866, 0, 0, 0, 0, q.width, q.height, q.depth, ke, ge, q.data)) : t.texImage3D(35866, 0, k, q.width, q.height, q.depth, 0, ke, ge, q.data);
            else if (M.isData3DTexture) Se ? (pe && t.texStorage3D(32879, Te, k, q.width, q.height, q.depth), t.texSubImage3D(32879, 0, 0, 0, 0, q.width, q.height, q.depth, ke, ge, q.data)) : t.texImage3D(32879, 0, k, q.width, q.height, q.depth, 0, ke, ge, q.data);
            else if (M.isFramebufferTexture) Se && pe ? t.texStorage2D(3553, Te, k, q.width, q.height) : t.texImage2D(3553, 0, k, q.width, q.height, 0, ke, ge, null);
            else if (oe.length > 0 && Ie) {
                Se && pe && t.texStorage2D(3553, Te, k, oe[0].width, oe[0].height);
                for (let re = 0, Ae = oe.length; re < Ae; re++) le = oe[re], Se ? t.texSubImage2D(3553, re, 0, 0, ke, ge, le) : t.texImage2D(3553, re, k, ke, ge, le);
                M.generateMipmaps = !1
            } else Se ? (pe && t.texStorage2D(3553, Te, k, q.width, q.height), t.texSubImage2D(3553, 0, 0, 0, ke, ge, q)) : t.texImage2D(3553, 0, k, ke, ge, q);
            E(M, Ie) && T(ee), fe.__currentVersion = fe.version, M.onUpdate && M.onUpdate(M)
        }
        A.__version = M.version
    }

    function Pe(A, M, W) {
        if (M.image.length !== 6) return;
        const ee = We(A, M),
            ce = M.source;
        if (t.activeTexture(33984 + W), t.bindTexture(34067, A.__webglTexture), ce.version !== ce.__currentVersion || ee === !0) {
            o.pixelStorei(37440, M.flipY), o.pixelStorei(37441, M.premultiplyAlpha), o.pixelStorei(3317, M.unpackAlignment), o.pixelStorei(37443, 0);
            const fe = M.isCompressedTexture || M.image[0].isCompressedTexture,
                be = M.image[0] && M.image[0].isDataTexture,
                q = [];
            for (let re = 0; re < 6; re++) !fe && !be ? q[re] = b(M.image[re], !1, !0, h) : q[re] = be ? M.image[re].image : M.image[re], q[re] = Ze(M, q[re]);
            const Ie = q[0],
                ke = w(Ie) || a,
                ge = s.convert(M.format, M.encoding),
                k = s.convert(M.type),
                le = R(M.internalFormat, ge, k, M.encoding),
                oe = a && M.isVideoTexture !== !0,
                Se = A.__version === void 0;
            let pe = I(M, Ie, ke);
            Y(34067, M, ke);
            let Te;
            if (fe) {
                oe && Se && t.texStorage2D(34067, pe, le, Ie.width, Ie.height);
                for (let re = 0; re < 6; re++) {
                    Te = q[re].mipmaps;
                    for (let Ae = 0; Ae < Te.length; Ae++) {
                        const nt = Te[Ae];
                        M.format !== rn ? ge !== null ? oe ? t.compressedTexSubImage2D(34069 + re, Ae, 0, 0, nt.width, nt.height, ge, nt.data) : t.compressedTexImage2D(34069 + re, Ae, le, nt.width, nt.height, 0, nt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : oe ? t.texSubImage2D(34069 + re, Ae, 0, 0, nt.width, nt.height, ge, k, nt.data) : t.texImage2D(34069 + re, Ae, le, nt.width, nt.height, 0, ge, k, nt.data)
                    }
                }
            } else {
                Te = M.mipmaps, oe && Se && (Te.length > 0 && pe++, t.texStorage2D(34067, pe, le, q[0].width, q[0].height));
                for (let re = 0; re < 6; re++)
                    if (be) {
                        oe ? t.texSubImage2D(34069 + re, 0, 0, 0, q[re].width, q[re].height, ge, k, q[re].data) : t.texImage2D(34069 + re, 0, le, q[re].width, q[re].height, 0, ge, k, q[re].data);
                        for (let Ae = 0; Ae < Te.length; Ae++) {
                            const He = Te[Ae].image[re].image;
                            oe ? t.texSubImage2D(34069 + re, Ae + 1, 0, 0, He.width, He.height, ge, k, He.data) : t.texImage2D(34069 + re, Ae + 1, le, He.width, He.height, 0, ge, k, He.data)
                        }
                    } else {
                        oe ? t.texSubImage2D(34069 + re, 0, 0, 0, ge, k, q[re]) : t.texImage2D(34069 + re, 0, le, ge, k, q[re]);
                        for (let Ae = 0; Ae < Te.length; Ae++) {
                            const nt = Te[Ae];
                            oe ? t.texSubImage2D(34069 + re, Ae + 1, 0, 0, ge, k, nt.image[re]) : t.texImage2D(34069 + re, Ae + 1, le, ge, k, nt.image[re])
                        }
                    }
            }
            E(M, ke) && T(34067), ce.__currentVersion = ce.version, M.onUpdate && M.onUpdate(M)
        }
        A.__version = M.version
    }

    function se(A, M, W, ee, ce) {
        const fe = s.convert(W.format, W.encoding),
            be = s.convert(W.type),
            q = R(W.internalFormat, fe, be, W.encoding);
        n.get(M).__hasExternalTextures || (ce === 32879 || ce === 35866 ? t.texImage3D(ce, 0, q, M.width, M.height, M.depth, 0, fe, be, null) : t.texImage2D(ce, 0, q, M.width, M.height, 0, fe, be, null)), t.bindFramebuffer(36160, A), ve(M) ? u.framebufferTexture2DMultisampleEXT(36160, ee, ce, n.get(W).__webglTexture, 0, we(M)) : o.framebufferTexture2D(36160, ee, ce, n.get(W).__webglTexture, 0), t.bindFramebuffer(36160, null)
    }

    function Be(A, M, W) {
        if (o.bindRenderbuffer(36161, A), M.depthBuffer && !M.stencilBuffer) {
            let ee = 33189;
            if (W || ve(M)) {
                const ce = M.depthTexture;
                ce && ce.isDepthTexture && (ce.type === ui ? ee = 36012 : ce.type === Oo && (ee = 33190));
                const fe = we(M);
                ve(M) ? u.renderbufferStorageMultisampleEXT(36161, fe, ee, M.width, M.height) : o.renderbufferStorageMultisample(36161, fe, ee, M.width, M.height)
            } else o.renderbufferStorage(36161, ee, M.width, M.height);
            o.framebufferRenderbuffer(36160, 36096, 36161, A)
        } else if (M.depthBuffer && M.stencilBuffer) {
            const ee = we(M);
            W && ve(M) === !1 ? o.renderbufferStorageMultisample(36161, ee, 35056, M.width, M.height) : ve(M) ? u.renderbufferStorageMultisampleEXT(36161, ee, 35056, M.width, M.height) : o.renderbufferStorage(36161, 34041, M.width, M.height), o.framebufferRenderbuffer(36160, 33306, 36161, A)
        } else {
            const ee = M.isWebGLMultipleRenderTargets === !0 ? M.texture[0] : M.texture,
                ce = s.convert(ee.format, ee.encoding),
                fe = s.convert(ee.type),
                be = R(ee.internalFormat, ce, fe, ee.encoding),
                q = we(M);
            W && ve(M) === !1 ? o.renderbufferStorageMultisample(36161, q, be, M.width, M.height) : ve(M) ? u.renderbufferStorageMultisampleEXT(36161, q, be, M.width, M.height) : o.renderbufferStorage(36161, be, M.width, M.height)
        }
        o.bindRenderbuffer(36161, null)
    }

    function j(A, M) {
        if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
        if (t.bindFramebuffer(36160, A), !(M.depthTexture && M.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), Z(M.depthTexture, 0);
        const ee = n.get(M.depthTexture).__webglTexture,
            ce = we(M);
        if (M.depthTexture.format === Gi) ve(M) ? u.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, ee, 0, ce) : o.framebufferTexture2D(36160, 36096, 3553, ee, 0);
        else if (M.depthTexture.format === js) ve(M) ? u.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, ee, 0, ce) : o.framebufferTexture2D(36160, 33306, 3553, ee, 0);
        else throw new Error("Unknown depthTexture format")
    }

    function K(A) {
        const M = n.get(A),
            W = A.isWebGLCubeRenderTarget === !0;
        if (A.depthTexture && !M.__autoAllocateDepthBuffer) {
            if (W) throw new Error("target.depthTexture not supported in Cube render targets");
            j(M.__webglFramebuffer, A)
        } else if (W) {
            M.__webglDepthbuffer = [];
            for (let ee = 0; ee < 6; ee++) t.bindFramebuffer(36160, M.__webglFramebuffer[ee]), M.__webglDepthbuffer[ee] = o.createRenderbuffer(), Be(M.__webglDepthbuffer[ee], A, !1)
        } else t.bindFramebuffer(36160, M.__webglFramebuffer), M.__webglDepthbuffer = o.createRenderbuffer(), Be(M.__webglDepthbuffer, A, !1);
        t.bindFramebuffer(36160, null)
    }

    function ne(A, M, W) {
        const ee = n.get(A);
        M !== void 0 && se(ee.__webglFramebuffer, A, A.texture, 36064, 3553), W !== void 0 && K(A)
    }

    function me(A) {
        const M = A.texture,
            W = n.get(A),
            ee = n.get(M);
        A.addEventListener("dispose", L), A.isWebGLMultipleRenderTargets !== !0 && (ee.__webglTexture === void 0 && (ee.__webglTexture = o.createTexture()), ee.__version = M.version, r.memory.textures++);
        const ce = A.isWebGLCubeRenderTarget === !0,
            fe = A.isWebGLMultipleRenderTargets === !0,
            be = w(A) || a;
        if (ce) {
            W.__webglFramebuffer = [];
            for (let q = 0; q < 6; q++) W.__webglFramebuffer[q] = o.createFramebuffer()
        } else if (W.__webglFramebuffer = o.createFramebuffer(), fe)
            if (i.drawBuffers) {
                const q = A.texture;
                for (let Ie = 0, ke = q.length; Ie < ke; Ie++) {
                    const ge = n.get(q[Ie]);
                    ge.__webglTexture === void 0 && (ge.__webglTexture = o.createTexture(), r.memory.textures++)
                }
            } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        else if (a && A.samples > 0 && ve(A) === !1) {
            W.__webglMultisampledFramebuffer = o.createFramebuffer(), W.__webglColorRenderbuffer = o.createRenderbuffer(), o.bindRenderbuffer(36161, W.__webglColorRenderbuffer);
            const q = s.convert(M.format, M.encoding),
                Ie = s.convert(M.type),
                ke = R(M.internalFormat, q, Ie, M.encoding),
                ge = we(A);
            o.renderbufferStorageMultisample(36161, ge, ke, A.width, A.height), t.bindFramebuffer(36160, W.__webglMultisampledFramebuffer), o.framebufferRenderbuffer(36160, 36064, 36161, W.__webglColorRenderbuffer), o.bindRenderbuffer(36161, null), A.depthBuffer && (W.__webglDepthRenderbuffer = o.createRenderbuffer(), Be(W.__webglDepthRenderbuffer, A, !0)), t.bindFramebuffer(36160, null)
        }
        if (ce) {
            t.bindTexture(34067, ee.__webglTexture), Y(34067, M, be);
            for (let q = 0; q < 6; q++) se(W.__webglFramebuffer[q], A, M, 36064, 34069 + q);
            E(M, be) && T(34067), t.unbindTexture()
        } else if (fe) {
            const q = A.texture;
            for (let Ie = 0, ke = q.length; Ie < ke; Ie++) {
                const ge = q[Ie],
                    k = n.get(ge);
                t.bindTexture(3553, k.__webglTexture), Y(3553, ge, be), se(W.__webglFramebuffer, A, ge, 36064 + Ie, 3553), E(ge, be) && T(3553)
            }
            t.unbindTexture()
        } else {
            let q = 3553;
            (A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (a ? q = A.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(q, ee.__webglTexture), Y(q, M, be), se(W.__webglFramebuffer, A, M, 36064, q), E(M, be) && T(q), t.unbindTexture()
        }
        A.depthBuffer && K(A)
    }

    function de(A) {
        const M = w(A) || a,
            W = A.isWebGLMultipleRenderTargets === !0 ? A.texture : [A.texture];
        for (let ee = 0, ce = W.length; ee < ce; ee++) {
            const fe = W[ee];
            if (E(fe, M)) {
                const be = A.isWebGLCubeRenderTarget ? 34067 : 3553,
                    q = n.get(fe).__webglTexture;
                t.bindTexture(be, q), T(be), t.unbindTexture()
            }
        }
    }

    function Ce(A) {
        if (a && A.samples > 0 && ve(A) === !1) {
            const M = A.width,
                W = A.height;
            let ee = 16384;
            const ce = [36064],
                fe = A.stencilBuffer ? 33306 : 36096;
            A.depthBuffer && ce.push(fe);
            const be = n.get(A),
                q = be.__ignoreDepthValues !== void 0 ? be.__ignoreDepthValues : !1;
            q === !1 && (A.depthBuffer && (ee |= 256), A.stencilBuffer && (ee |= 1024)), t.bindFramebuffer(36008, be.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, be.__webglFramebuffer), q === !0 && (o.invalidateFramebuffer(36008, [fe]), o.invalidateFramebuffer(36009, [fe])), o.blitFramebuffer(0, 0, M, W, 0, 0, M, W, ee, 9728), f && o.invalidateFramebuffer(36008, ce), t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, be.__webglMultisampledFramebuffer)
        }
    }

    function we(A) {
        return Math.min(l, A.samples)
    }

    function ve(A) {
        const M = n.get(A);
        return a && A.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1
    }

    function st(A) {
        const M = r.render.frame;
        g.get(A) !== M && (g.set(A, M), A.update())
    }

    function Ze(A, M) {
        const W = A.encoding,
            ee = A.format,
            ce = A.type;
        return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || A.format === Tl || W !== Zn && (W === Ge ? a === !1 ? e.has("EXT_sRGB") === !0 && ee === rn ? (A.format = Tl, A.minFilter = It, A.generateMipmaps = !1) : M = ns.sRGBToLinear(M) : (ee !== rn || ce !== Ki) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", W)), M
    }
    this.allocateTextureUnit = F, this.resetTextureUnits = H, this.setTexture2D = Z, this.setTexture2DArray = Q, this.setTexture3D = $, this.setTextureCube = ue, this.rebindTextures = ne, this.setupRenderTarget = me, this.updateRenderTargetMipmap = de, this.updateMultisampleRenderTarget = Ce, this.setupDepthRenderbuffer = K, this.setupFrameBufferTexture = se, this.useMultisampledRTT = ve
}

function sx(o, e, t) {
    const n = t.isWebGL2;

    function i(s, r = null) {
        let a;
        if (s === Ki) return 5121;
        if (s === Up) return 32819;
        if (s === Gp) return 32820;
        if (s === Np) return 5120;
        if (s === zp) return 5122;
        if (s === Fr) return 5123;
        if (s === Hp) return 5124;
        if (s === Oo) return 5125;
        if (s === ui) return 5126;
        if (s === zs) return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
        if (s === Vp) return 6406;
        if (s === rn) return 6408;
        if (s === qp) return 6409;
        if (s === Xp) return 6410;
        if (s === Gi) return 6402;
        if (s === js) return 34041;
        if (s === jp) return 6403;
        if (s === Wp) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
        if (s === Tl) return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
        if (s === Yp) return 36244;
        if (s === Jp) return 33319;
        if (s === Kp) return 33320;
        if (s === Zp) return 36249;
        if (s === Sa || s === Ta || s === Ea || s === Aa)
            if (r === Ge)
                if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
                    if (s === Sa) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (s === Ta) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (s === Ea) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (s === Aa) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else return null;
        else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
            if (s === Sa) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (s === Ta) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (s === Ea) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (s === Aa) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
        } else return null;
        if (s === Jc || s === Kc || s === Zc || s === $c)
            if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
                if (s === Jc) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (s === Kc) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (s === Zc) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (s === $c) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            } else return null;
        if (s === $p) return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
        if (s === Qc || s === eh)
            if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
                if (s === Qc) return r === Ge ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
                if (s === eh) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC
            } else return null;
        if (s === th || s === nh || s === ih || s === sh || s === rh || s === oh || s === ah || s === lh || s === ch || s === hh || s === uh || s === dh || s === fh || s === ph)
            if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
                if (s === th) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (s === nh) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (s === ih) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (s === sh) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (s === rh) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (s === oh) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (s === ah) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (s === lh) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (s === ch) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (s === hh) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (s === uh) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (s === dh) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (s === fh) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (s === ph) return r === Ge ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR
            } else return null;
        if (s === mh)
            if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
                if (s === mh) return r === Ge ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT
            } else return null;
        if (s === Hs) return n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
    }
    return {
        convert: i
    }
}
class gd extends Dt {
    constructor(e = []) {
        super(), this.cameras = e
    }
}
gd.prototype.isArrayCamera = !0;
class Yn extends je {
    constructor() {
        super(), this.type = "Group"
    }
}
Yn.prototype.isGroup = !0;
const rx = {
    type: "move"
};
class tl {
    constructor() {
        this._targetRay = null, this._grip = null, this._hand = null
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new Yn, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
            pinching: !1
        }), this._hand
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new Yn, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new C, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new C), this._targetRay
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new Yn, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new C, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new C), this._grip
    }
    dispatchEvent(e) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this
    }
    disconnect(e) {
        return this.dispatchEvent({
            type: "disconnected",
            data: e
        }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this
    }
    update(e, t, n) {
        let i = null,
            s = null,
            r = null;
        const a = this._targetRay,
            c = this._grip,
            h = this._hand;
        if (e && t.session.visibilityState !== "visible-blurred")
            if (a !== null && (i = t.getPose(e.targetRaySpace, n), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(rx))), h && e.hand) {
                r = !0;
                for (const p of e.hand.values()) {
                    const m = t.getJointPose(p, n);
                    if (h.joints[p.jointName] === void 0) {
                        const y = new Yn;
                        y.matrixAutoUpdate = !1, y.visible = !1, h.joints[p.jointName] = y, h.add(y)
                    }
                    const _ = h.joints[p.jointName];
                    m !== null && (_.matrix.fromArray(m.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.jointRadius = m.radius), _.visible = m !== null
                }
                const d = h.joints["index-finger-tip"],
                    l = h.joints["thumb-tip"],
                    u = d.position.distanceTo(l.position),
                    f = .02,
                    g = .005;
                h.inputState.pinching && u > f + g ? (h.inputState.pinching = !1, this.dispatchEvent({
                    type: "pinchend",
                    handedness: e.handedness,
                    target: this
                })) : !h.inputState.pinching && u <= f - g && (h.inputState.pinching = !0, this.dispatchEvent({
                    type: "pinchstart",
                    handedness: e.handedness,
                    target: this
                }))
            } else c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
        return a !== null && (a.visible = i !== null), c !== null && (c.visible = s !== null), h !== null && (h.visible = r !== null), this
    }

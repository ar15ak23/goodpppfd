}
class _d extends xt {
    constructor(e, t, n, i, s, r, a, c, h, d) {
        if (d = d !== void 0 ? d : Gi, d !== Gi && d !== js) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        n === void 0 && d === Gi && (n = Fr), n === void 0 && d === js && (n = Hs), super(null, i, s, r, a, c, d, n, h), this.image = {
            width: e,
            height: t
        }, this.magFilter = a !== void 0 ? a : bt, this.minFilter = c !== void 0 ? c : bt, this.flipY = !1, this.generateMipmaps = !1
    }
}
_d.prototype.isDepthTexture = !0;
class ox extends ts {
    constructor(e, t) {
        super();
        const n = this;
        let i = null,
            s = 1,
            r = null,
            a = "local-floor",
            c = null,
            h = null,
            d = null,
            l = null,
            u = null;
        const f = t.getContextAttributes();
        let g = null,
            p = null;
        const m = [],
            _ = new Map,
            y = new Dt;
        y.layers.enable(1), y.viewport = new Ke;
        const b = new Dt;
        b.layers.enable(2), b.viewport = new Ke;
        const w = [y, b],
            x = new gd;
        x.layers.enable(1), x.layers.enable(2);
        let E = null,
            T = null;
        this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(F) {
            let X = m[F];
            return X === void 0 && (X = new tl, m[F] = X), X.getTargetRaySpace()
        }, this.getControllerGrip = function(F) {
            let X = m[F];
            return X === void 0 && (X = new tl, m[F] = X), X.getGripSpace()
        }, this.getHand = function(F) {
            let X = m[F];
            return X === void 0 && (X = new tl, m[F] = X), X.getHandSpace()
        };

        function R(F) {
            const X = _.get(F.inputSource);
            X && X.dispatchEvent({
                type: F.type,
                data: F.inputSource
            })
        }

        function I() {
            _.forEach(function(F, X) {
                F.disconnect(X)
            }), _.clear(), E = null, T = null, e.setRenderTarget(g), l = null, d = null, h = null, i = null, p = null, H.stop(), n.isPresenting = !1, n.dispatchEvent({
                type: "sessionend"
            })
        }
        this.setFramebufferScaleFactor = function(F) {
            s = F, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }, this.setReferenceSpaceType = function(F) {
            a = F, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }, this.getReferenceSpace = function() {
            return r
        }, this.getBaseLayer = function() {
            return d !== null ? d : l
        }, this.getBinding = function() {
            return h
        }, this.getFrame = function() {
            return u
        }, this.getSession = function() {
            return i
        }, this.setSession = async function(F) {
            if (i = F, i !== null) {
                if (g = e.getRenderTarget(), i.addEventListener("select", R), i.addEventListener("selectstart", R), i.addEventListener("selectend", R), i.addEventListener("squeeze", R), i.addEventListener("squeezestart", R), i.addEventListener("squeezeend", R), i.addEventListener("end", I), i.addEventListener("inputsourceschange", B), f.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
                    const X = {
                        antialias: i.renderState.layers === void 0 ? f.antialias : !0,
                        alpha: f.alpha,
                        depth: f.depth,
                        stencil: f.stencil,
                        framebufferScaleFactor: s
                    };
                    l = new XRWebGLLayer(i, t, X), i.updateRenderState({
                        baseLayer: l
                    }), p = new Zt(l.framebufferWidth, l.framebufferHeight, {
                        format: rn,
                        type: Ki,
                        encoding: e.outputEncoding
                    })
                } else {
                    let X = null,
                        Z = null,
                        Q = null;
                    f.depth && (Q = f.stencil ? 35056 : 33190, X = f.stencil ? js : Gi, Z = f.stencil ? Hs : Fr);
                    const $ = {
                        colorFormat: e.outputEncoding === Ge ? 35907 : 32856,
                        depthFormat: Q,
                        scaleFactor: s
                    };
                    h = new XRWebGLBinding(i, t), d = h.createProjectionLayer($), i.updateRenderState({
                        layers: [d]
                    }), p = new Zt(d.textureWidth, d.textureHeight, {
                        format: rn,
                        type: Ki,
                        depthTexture: new _d(d.textureWidth, d.textureHeight, Z, void 0, void 0, void 0, void 0, void 0, void 0, X),
                        stencilBuffer: f.stencil,
                        encoding: e.outputEncoding,
                        samples: f.antialias ? 4 : 0
                    });
                    const ue = e.properties.get(p);
                    ue.__ignoreDepthValues = d.ignoreDepthValues
                }
                p.isXRRenderTarget = !0, this.setFoveation(1), r = await i.requestReferenceSpace(a), H.setContext(i), H.start(), n.isPresenting = !0, n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        };

        function B(F) {
            const X = i.inputSources;
            for (let Z = 0; Z < m.length; Z++) _.set(X[Z], m[Z]);
            for (let Z = 0; Z < F.removed.length; Z++) {
                const Q = F.removed[Z],
                    $ = _.get(Q);
                $ && ($.dispatchEvent({
                    type: "disconnected",
                    data: Q
                }), _.delete(Q))
            }
            for (let Z = 0; Z < F.added.length; Z++) {
                const Q = F.added[Z],
                    $ = _.get(Q);
                $ && $.dispatchEvent({
                    type: "connected",
                    data: Q
                })
            }
        }
        const v = new C,
            L = new C;

        function U(F, X, Z) {
            v.setFromMatrixPosition(X.matrixWorld), L.setFromMatrixPosition(Z.matrixWorld);
            const Q = v.distanceTo(L),
                $ = X.projectionMatrix.elements,
                ue = Z.projectionMatrix.elements,
                Me = $[14] / ($[10] - 1),
                xe = $[14] / ($[10] + 1),
                Y = ($[9] + 1) / $[5],
                We = ($[9] - 1) / $[5],
                Re = ($[8] - 1) / $[0],
                Pe = (ue[8] + 1) / ue[0],
                se = Me * Re,
                Be = Me * Pe,
                j = Q / (-Re + Pe),
                K = j * -Re;
            X.matrixWorld.decompose(F.position, F.quaternion, F.scale), F.translateX(K), F.translateZ(j), F.matrixWorld.compose(F.position, F.quaternion, F.scale), F.matrixWorldInverse.copy(F.matrixWorld).invert();
            const ne = Me + j,
                me = xe + j,
                de = se - K,
                Ce = Be + (Q - K),
                we = Y * xe / me * ne,
                ve = We * xe / me * ne;
            F.projectionMatrix.makePerspective(de, Ce, we, ve, ne, me)
        }

        function D(F, X) {
            X === null ? F.matrixWorld.copy(F.matrix) : F.matrixWorld.multiplyMatrices(X.matrixWorld, F.matrix), F.matrixWorldInverse.copy(F.matrixWorld).invert()
        }
        this.updateCamera = function(F) {
            if (i === null) return;
            x.near = b.near = y.near = F.near, x.far = b.far = y.far = F.far, (E !== x.near || T !== x.far) && (i.updateRenderState({
                depthNear: x.near,
                depthFar: x.far
            }), E = x.near, T = x.far);
            const X = F.parent,
                Z = x.cameras;
            D(x, X);
            for (let $ = 0; $ < Z.length; $++) D(Z[$], X);
            x.matrixWorld.decompose(x.position, x.quaternion, x.scale), F.position.copy(x.position), F.quaternion.copy(x.quaternion), F.scale.copy(x.scale), F.matrix.copy(x.matrix), F.matrixWorld.copy(x.matrixWorld);
            const Q = F.children;
            for (let $ = 0, ue = Q.length; $ < ue; $++) Q[$].updateMatrixWorld(!0);
            Z.length === 2 ? U(x, y, b) : x.projectionMatrix.copy(y.projectionMatrix)
        }, this.getCamera = function() {
            return x
        }, this.getFoveation = function() {
            if (d !== null) return d.fixedFoveation;
            if (l !== null) return l.fixedFoveation
        }, this.setFoveation = function(F) {
            d !== null && (d.fixedFoveation = F), l !== null && l.fixedFoveation !== void 0 && (l.fixedFoveation = F)
        };
        let O = null;

        function N(F, X) {
            if (c = X.getViewerPose(r), u = X, c !== null) {
                const Q = c.views;
                l !== null && (e.setRenderTargetFramebuffer(p, l.framebuffer), e.setRenderTarget(p));
                let $ = !1;
                Q.length !== x.cameras.length && (x.cameras.length = 0, $ = !0);
                for (let ue = 0; ue < Q.length; ue++) {
                    const Me = Q[ue];
                    let xe = null;
                    if (l !== null) xe = l.getViewport(Me);
                    else {
                        const We = h.getViewSubImage(d, Me);
                        xe = We.viewport, ue === 0 && (e.setRenderTargetTextures(p, We.colorTexture, d.ignoreDepthValues ? void 0 : We.depthStencilTexture), e.setRenderTarget(p))
                    }
                    const Y = w[ue];
                    Y.matrix.fromArray(Me.transform.matrix), Y.projectionMatrix.fromArray(Me.projectionMatrix), Y.viewport.set(xe.x, xe.y, xe.width, xe.height), ue === 0 && x.matrix.copy(Y.matrix), $ === !0 && x.cameras.push(Y)
                }
            }
            const Z = i.inputSources;
            for (let Q = 0; Q < m.length; Q++) {
                const $ = m[Q],
                    ue = Z[Q];
                $.update(ue, X, r)
            }
            O && O(F, X), u = null
        }
        const H = new ad;
        H.setAnimationLoop(N), this.setAnimationLoop = function(F) {
            O = F
        }, this.dispose = function() {}
    }
}

function ax(o, e) {
    function t(p, m) {
        p.fogColor.value.copy(m.color), m.isFog ? (p.fogNear.value = m.near, p.fogFar.value = m.far) : m.isFogExp2 && (p.fogDensity.value = m.density)
    }

    function n(p, m, _, y, b) {
        m.isMeshBasicMaterial || m.isMeshLambertMaterial ? i(p, m) : m.isMeshToonMaterial ? (i(p, m), d(p, m)) : m.isMeshPhongMaterial ? (i(p, m), h(p, m)) : m.isMeshStandardMaterial ? (i(p, m), l(p, m), m.isMeshPhysicalMaterial && u(p, m, b)) : m.isMeshMatcapMaterial ? (i(p, m), f(p, m)) : m.isMeshDepthMaterial ? i(p, m) : m.isMeshDistanceMaterial ? (i(p, m), g(p, m)) : m.isMeshNormalMaterial ? i(p, m) : m.isLineBasicMaterial ? (s(p, m), m.isLineDashedMaterial && r(p, m)) : m.isPointsMaterial ? a(p, m, _, y) : m.isSpriteMaterial ? c(p, m) : m.isShadowMaterial ? (p.color.value.copy(m.color), p.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = !1)
    }

    function i(p, m) {
        p.opacity.value = m.opacity, m.color && p.diffuse.value.copy(m.color), m.emissive && p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (p.map.value = m.map), m.alphaMap && (p.alphaMap.value = m.alphaMap), m.bumpMap && (p.bumpMap.value = m.bumpMap, p.bumpScale.value = m.bumpScale, m.side === xn && (p.bumpScale.value *= -1)), m.displacementMap && (p.displacementMap.value = m.displacementMap, p.displacementScale.value = m.displacementScale, p.displacementBias.value = m.displacementBias), m.emissiveMap && (p.emissiveMap.value = m.emissiveMap), m.normalMap && (p.normalMap.value = m.normalMap, p.normalScale.value.copy(m.normalScale), m.side === xn && p.normalScale.value.negate()), m.specularMap && (p.specularMap.value = m.specularMap), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
        const _ = e.get(m).envMap;
        if (_ && (p.envMap.value = _, p.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = m.reflectivity, p.ior.value = m.ior, p.refractionRatio.value = m.refractionRatio), m.lightMap) {
            p.lightMap.value = m.lightMap;
            const w = o.physicallyCorrectLights !== !0 ? Math.PI : 1;
            p.lightMapIntensity.value = m.lightMapIntensity * w
        }
        m.aoMap && (p.aoMap.value = m.aoMap, p.aoMapIntensity.value = m.aoMapIntensity);
        let y;
        m.map ? y = m.map : m.specularMap ? y = m.specularMap : m.displacementMap ? y = m.displacementMap : m.normalMap ? y = m.normalMap : m.bumpMap ? y = m.bumpMap : m.roughnessMap ? y = m.roughnessMap : m.metalnessMap ? y = m.metalnessMap : m.alphaMap ? y = m.alphaMap : m.emissiveMap ? y = m.emissiveMap : m.clearcoatMap ? y = m.clearcoatMap : m.clearcoatNormalMap ? y = m.clearcoatNormalMap : m.clearcoatRoughnessMap ? y = m.clearcoatRoughnessMap : m.specularIntensityMap ? y = m.specularIntensityMap : m.specularColorMap ? y = m.specularColorMap : m.transmissionMap ? y = m.transmissionMap : m.thicknessMap ? y = m.thicknessMap : m.sheenColorMap ? y = m.sheenColorMap : m.sheenRoughnessMap && (y = m.sheenRoughnessMap), y !== void 0 && (y.isWebGLRenderTarget && (y = y.texture), y.matrixAutoUpdate === !0 && y.updateMatrix(), p.uvTransform.value.copy(y.matrix));
        let b;
        m.aoMap ? b = m.aoMap : m.lightMap && (b = m.lightMap), b !== void 0 && (b.isWebGLRenderTarget && (b = b.texture), b.matrixAutoUpdate === !0 && b.updateMatrix(), p.uv2Transform.value.copy(b.matrix))
    }

    function s(p, m) {
        p.diffuse.value.copy(m.color), p.opacity.value = m.opacity
    }

    function r(p, m) {
        p.dashSize.value = m.dashSize, p.totalSize.value = m.dashSize + m.gapSize, p.scale.value = m.scale
    }

    function a(p, m, _, y) {
        p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.size.value = m.size * _, p.scale.value = y * .5, m.map && (p.map.value = m.map), m.alphaMap && (p.alphaMap.value = m.alphaMap), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
        let b;
        m.map ? b = m.map : m.alphaMap && (b = m.alphaMap), b !== void 0 && (b.matrixAutoUpdate === !0 && b.updateMatrix(), p.uvTransform.value.copy(b.matrix))
    }

    function c(p, m) {
        p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.rotation.value = m.rotation, m.map && (p.map.value = m.map), m.alphaMap && (p.alphaMap.value = m.alphaMap), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
        let _;
        m.map ? _ = m.map : m.alphaMap && (_ = m.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), p.uvTransform.value.copy(_.matrix))
    }

    function h(p, m) {
        p.specular.value.copy(m.specular), p.shininess.value = Math.max(m.shininess, 1e-4)
    }

    function d(p, m) {
        m.gradientMap && (p.gradientMap.value = m.gradientMap)
    }

    function l(p, m) {
        p.roughness.value = m.roughness, p.metalness.value = m.metalness, m.roughnessMap && (p.roughnessMap.value = m.roughnessMap), m.metalnessMap && (p.metalnessMap.value = m.metalnessMap), e.get(m).envMap && (p.envMapIntensity.value = m.envMapIntensity)
    }

    function u(p, m, _) {
        p.ior.value = m.ior, m.sheen > 0 && (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen), p.sheenRoughness.value = m.sheenRoughness, m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap), m.sheenRoughnessMap && (p.sheenRoughnessMap.value = m.sheenRoughnessMap)), m.clearcoat > 0 && (p.clearcoat.value = m.clearcoat, p.clearcoatRoughness.value = m.clearcoatRoughness, m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap), m.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap), m.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), p.clearcoatNormalMap.value = m.clearcoatNormalMap, m.side === xn && p.clearcoatNormalScale.value.negate())), m.transmission > 0 && (p.transmission.value = m.transmission, p.transmissionSamplerMap.value = _.texture, p.transmissionSamplerSize.value.set(_.width, _.height), m.transmissionMap && (p.transmissionMap.value = m.transmissionMap), p.thickness.value = m.thickness, m.thicknessMap && (p.thicknessMap.value = m.thicknessMap), p.attenuationDistance.value = m.attenuationDistance, p.attenuationColor.value.copy(m.attenuationColor)), p.specularIntensity.value = m.specularIntensity, p.specularColor.value.copy(m.specularColor), m.specularIntensityMap && (p.specularIntensityMap.value = m.specularIntensityMap), m.specularColorMap && (p.specularColorMap.value = m.specularColorMap)
    }

    function f(p, m) {
        m.matcap && (p.matcap.value = m.matcap)
    }

    function g(p, m) {
        p.referencePosition.value.copy(m.referencePosition), p.nearDistance.value = m.nearDistance, p.farDistance.value = m.farDistance
    }
    return {
        refreshFogUniforms: t,
        refreshMaterialUniforms: n
    }
}

function lx() {
    const o = zr("canvas");
    return o.style.display = "block", o
}

function Je(o = {}) {
    const e = o.canvas !== void 0 ? o.canvas : lx(),
        t = o.context !== void 0 ? o.context : null,
        n = o.depth !== void 0 ? o.depth : !0,
        i = o.stencil !== void 0 ? o.stencil : !0,
        s = o.antialias !== void 0 ? o.antialias : !1,
        r = o.premultipliedAlpha !== void 0 ? o.premultipliedAlpha : !0,
        a = o.preserveDrawingBuffer !== void 0 ? o.preserveDrawingBuffer : !1,
        c = o.powerPreference !== void 0 ? o.powerPreference : "default",
        h = o.failIfMajorPerformanceCaveat !== void 0 ? o.failIfMajorPerformanceCaveat : !1;
    let d;
    o.context !== void 0 ? d = t.getContextAttributes().alpha : d = o.alpha !== void 0 ? o.alpha : !1;
    let l = null,
        u = null;
    const f = [],
        g = [];
    this.domElement = e, this.debug = {
        checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = Zn, this.physicallyCorrectLights = !1, this.toneMapping = Jn, this.toneMappingExposure = 1;
    const p = this;
    let m = !1,
        _ = 0,
        y = 0,
        b = null,
        w = -1,
        x = null;
    const E = new Ke,
        T = new Ke;
    let R = null,
        I = e.width,
        B = e.height,
        v = 1,
        L = null,
        U = null;
    const D = new Ke(0, 0, I, B),
        O = new Ke(0, 0, I, B);
    let N = !1;
    const H = new oa;
    let F = !1,
        X = !1,
        Z = null;
    const Q = new _e,
        $ = new te,
        ue = new C,
        Me = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };

    function xe() {
        return b === null ? v : 1
    }
    let Y = t;

    function We(S, z) {
        for (let V = 0; V < S.length; V++) {
            const G = S[V],
                J = e.getContext(G, z);
            if (J !== null) return J
        }
        return null
    }
    try {
        const S = {
            alpha: !0,
            depth: n,
            stencil: i,
            antialias: s,
            premultipliedAlpha: r,
            preserveDrawingBuffer: a,
            powerPreference: c,
            failIfMajorPerformanceCaveat: h
        };
        if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${$l}`), e.addEventListener("webglcontextlost", k, !1), e.addEventListener("webglcontextrestored", le, !1), Y === null) {
            const z = ["webgl2", "webgl", "experimental-webgl"];
            if (p.isWebGL1Renderer === !0 && z.shift(), Y = We(z, S), Y === null) throw We(z) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
        }
        Y.getShaderPrecisionFormat === void 0 && (Y.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            }
        })
    } catch (S) {
        throw console.error("THREE.WebGLRenderer: " + S.message), S
    }
    let Re, Pe, se, Be, j, K, ne, me, de, Ce, we, ve, st, Ze, A, M, W, ee, ce, fe, be, q, Ie;

    function ke() {
        Re = new E0(Y), Pe = new v0(Y, Re, o), Re.init(Pe), q = new sx(Y, Re, Pe), se = new nx(Y, Re, Pe), Be = new L0, j = new qy, K = new ix(Y, Re, se, j, Pe, q, Be), ne = new w0(p), me = new T0(p), de = new Vm(Y, Pe), Ie = new y0(Y, Re, de, Pe), Ce = new A0(Y, de, Be, Ie), we = new D0(Y, Ce, de, Be), ce = new I0(Y, Pe, K), M = new b0(j), ve = new Wy(p, ne, me, Re, Pe, Ie, M), st = new ax(p, j), Ze = new jy, A = new Qy(Re, Pe), ee = new _0(p, ne, se, we, d, r), W = new md(p, we, Pe), fe = new x0(Y, Re, Be, Pe), be = new C0(Y, Re, Be, Pe), Be.programs = ve.programs, p.capabilities = Pe, p.extensions = Re, p.properties = j, p.renderLists = Ze, p.shadowMap = W, p.state = se, p.info = Be
    }
    ke();
    const ge = new ox(p, Y);
    this.xr = ge, this.getContext = function() {
        return Y
    }, this.getContextAttributes = function() {
        return Y.getContextAttributes()
    }, this.forceContextLoss = function() {
        const S = Re.get("WEBGL_lose_context");
        S && S.loseContext()
    }, this.forceContextRestore = function() {
        const S = Re.get("WEBGL_lose_context");
        S && S.restoreContext()
    }, this.getPixelRatio = function() {
        return v
    }, this.setPixelRatio = function(S) {
        S !== void 0 && (v = S, this.setSize(I, B, !1))
    }, this.getSize = function(S) {
        return S.set(I, B)
    }, this.setSize = function(S, z, V) {
        if (ge.isPresenting) {
            console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
            return
        }
        I = S, B = z, e.width = Math.floor(S * v), e.height = Math.floor(z * v), V !== !1 && (e.style.width = S + "px", e.style.height = z + "px"), this.setViewport(0, 0, S, z)
    }, this.getDrawingBufferSize = function(S) {
        return S.set(I * v, B * v).floor()
    }, this.setDrawingBufferSize = function(S, z, V) {
        I = S, B = z, v = V, e.width = Math.floor(S * V), e.height = Math.floor(z * V), this.setViewport(0, 0, S, z)
    }, this.getCurrentViewport = function(S) {
        return S.copy(E)
    }, this.getViewport = function(S) {
        return S.copy(D)
    }, this.setViewport = function(S, z, V, G) {
        S.isVector4 ? D.set(S.x, S.y, S.z, S.w) : D.set(S, z, V, G), se.viewport(E.copy(D).multiplyScalar(v).floor())
    }, this.getScissor = function(S) {
        return S.copy(O)
    }, this.setScissor = function(S, z, V, G) {
        S.isVector4 ? O.set(S.x, S.y, S.z, S.w) : O.set(S, z, V, G), se.scissor(T.copy(O).multiplyScalar(v).floor())
    }, this.getScissorTest = function() {
        return N
    }, this.setScissorTest = function(S) {
        se.setScissorTest(N = S)
    }, this.setOpaqueSort = function(S) {
        L = S
    }, this.setTransparentSort = function(S) {
        U = S
    }, this.getClearColor = function(S) {
        return S.copy(ee.getClearColor())
    }, this.setClearColor = function() {
        ee.setClearColor.apply(ee, arguments)
    }, this.getClearAlpha = function() {
        return ee.getClearAlpha()
    }, this.setClearAlpha = function() {
        ee.setClearAlpha.apply(ee, arguments)
    }, this.clear = function(S = !0, z = !0, V = !0) {
        let G = 0;
        S && (G |= 16384), z && (G |= 256), V && (G |= 1024), Y.clear(G)
    }, this.clearColor = function() {
        this.clear(!0, !1, !1)
    }, this.clearDepth = function() {
        this.clear(!1, !0, !1)
    }, this.clearStencil = function() {
        this.clear(!1, !1, !0)
    }, this.dispose = function() {
        e.removeEventListener("webglcontextlost", k, !1), e.removeEventListener("webglcontextrestored", le, !1), Ze.dispose(), A.dispose(), j.dispose(), ne.dispose(), me.dispose(), we.dispose(), Ie.dispose(), ve.dispose(), ge.dispose(), ge.removeEventListener("sessionstart", Ae), ge.removeEventListener("sessionend", nt), Z && (Z.dispose(), Z = null), He.stop()
    };

    function k(S) {
        S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), m = !0
    }

    function le() {
        console.log("THREE.WebGLRenderer: Context Restored."), m = !1;
        const S = Be.autoReset,
            z = W.enabled,
            V = W.autoUpdate,
            G = W.needsUpdate,
            J = W.type;
        ke(), Be.autoReset = S, W.enabled = z, W.autoUpdate = V, W.needsUpdate = G, W.type = J
    }

    function oe(S) {
        const z = S.target;
        z.removeEventListener("dispose", oe), Se(z)
    }

    function Se(S) {
        pe(S), j.remove(S)
    }

    function pe(S) {
        const z = j.get(S).programs;
        z !== void 0 && (z.forEach(function(V) {
            ve.releaseProgram(V)
        }), S.isShaderMaterial && ve.releaseShaderCache(S))
    }
    this.renderBufferDirect = function(S, z, V, G, J, Ee) {
        z === null && (z = Me);
        const Le = J.isMesh && J.matrixWorld.determinant() < 0,
            Fe = sp(S, z, V, G, J);
        se.setMaterial(G, Le);
        let De = V.index;
        const Ye = V.attributes.position;
        if (De === null) {
            if (Ye === void 0 || Ye.count === 0) return
        } else if (De.count === 0) return;
        let Ue = 1;
        G.wireframe === !0 && (De = Ce.getWireframeAttribute(V), Ue = 2), Ie.setup(J, G, Fe, V, De);
        let Ve, lt = fe;
        De !== null && (Ve = de.get(De), lt = be, lt.setIndex(Ve));
        const Li = De !== null ? De.count : Ye.count,
            ls = V.drawRange.start * Ue,
            cs = V.drawRange.count * Ue,
            Mn = Ee !== null ? Ee.start * Ue : 0,
            qe = Ee !== null ? Ee.count * Ue : 1 / 0,
            hs = Math.max(ls, Mn),
            gt = Math.min(Li, ls + cs, Mn + qe) - 1,
            Sn = Math.max(0, gt - hs + 1);
        if (Sn !== 0) {
            if (J.isMesh) G.wireframe === !0 ? (se.setLineWidth(G.wireframeLinewidth * xe()), lt.setMode(1)) : lt.setMode(4);
            else if (J.isLine) {
                let ti = G.linewidth;
                ti === void 0 && (ti = 1), se.setLineWidth(ti * xe()), J.isLineSegments ? lt.setMode(1) : J.isLineLoop ? lt.setMode(2) : lt.setMode(3)
            } else J.isPoints ? lt.setMode(0) : J.isSprite && lt.setMode(4);
            if (J.isInstancedMesh) lt.renderInstances(hs, Sn, J.count);
            else if (V.isInstancedBufferGeometry) {
                const ti = Math.min(V.instanceCount, V._maxInstanceCount);
                lt.renderInstances(hs, Sn, ti)
            } else lt.render(hs, Sn)
        }
    }, this.compile = function(S, z) {
        u = A.get(S), u.init(), g.push(u), S.traverseVisible(function(V) {
            V.isLight && V.layers.test(z.layers) && (u.pushLight(V), V.castShadow && u.pushShadow(V))
        }), u.setupLights(p.physicallyCorrectLights), S.traverse(function(V) {
            const G = V.material;
            if (G)
                if (Array.isArray(G))
                    for (let J = 0; J < G.length; J++) {
                        const Ee = G[J];
                        ba(Ee, S, V)
                    } else ba(G, S, V)
        }), g.pop(), u = null
    };
    let Te = null;

    function re(S) {
        Te && Te(S)
    }

    function Ae() {
        He.stop()
    }

    function nt() {
        He.start()
    }
    const He = new ad;
    He.setAnimationLoop(re), typeof self < "u" && He.setContext(self), this.setAnimationLoop = function(S) {
        Te = S, ge.setAnimationLoop(S), S === null ? He.stop() : He.start()
    }, ge.addEventListener("sessionstart", Ae), ge.addEventListener("sessionend", nt), this.render = function(S, z) {
        if (z !== void 0 && z.isCamera !== !0) {
            console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            return
        }
        if (m === !0) return;
        S.autoUpdate === !0 && S.updateMatrixWorld(), z.parent === null && z.updateMatrixWorld(), ge.enabled === !0 && ge.isPresenting === !0 && (ge.cameraAutoUpdate === !0 && ge.updateCamera(z), z = ge.getCamera()), S.isScene === !0 && S.onBeforeRender(p, S, z, b), u = A.get(S, g.length), u.init(), g.push(u), Q.multiplyMatrices(z.projectionMatrix, z.matrixWorldInverse), H.setFromProjectionMatrix(Q), X = this.localClippingEnabled, F = M.init(this.clippingPlanes, X, z), l = Ze.get(S, f.length), l.init(), f.push(l), bn(S, z, 0, p.sortObjects), l.finish(), p.sortObjects === !0 && l.sort(L, U), F === !0 && M.beginShadows();
        const V = u.state.shadowsArray;
        if (W.render(V, S, z), F === !0 && M.endShadows(), this.info.autoReset === !0 && this.info.reset(), ee.render(l, S), u.setupLights(p.physicallyCorrectLights), z.isArrayCamera) {
            const G = z.cameras;
            for (let J = 0, Ee = G.length; J < Ee; J++) {
                const Le = G[J];
                wn(l, S, Le, Le.viewport)
            }
        } else wn(l, S, z);
        b !== null && (K.updateMultisampleRenderTarget(b), K.updateRenderTargetMipmap(b)), S.isScene === !0 && S.onAfterRender(p, S, z), Ie.resetDefaultState(), w = -1, x = null, g.pop(), g.length > 0 ? u = g[g.length - 1] : u = null, f.pop(), f.length > 0 ? l = f[f.length - 1] : l = null
    };

    function bn(S, z, V, G) {
        if (S.visible === !1) return;
        if (S.layers.test(z.layers)) {
            if (S.isGroup) V = S.renderOrder;
            else if (S.isLOD) S.autoUpdate === !0 && S.update(z);
            else if (S.isLight) u.pushLight(S), S.castShadow && u.pushShadow(S);
            else if (S.isSprite) {
                if (!S.frustumCulled || H.intersectsSprite(S)) {
                    G && ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);
                    const Le = we.update(S),
                        Fe = S.material;
                    Fe.visible && l.push(S, Le, Fe, V, ue.z, null)
                }
            } else if ((S.isMesh || S.isLine || S.isPoints) && (S.isSkinnedMesh && S.skeleton.frame !== Be.render.frame && (S.skeleton.update(), S.skeleton.frame = Be.render.frame), !S.frustumCulled || H.intersectsObject(S))) {
                G && ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);
                const Le = we.update(S),
                    Fe = S.material;
                if (Array.isArray(Fe)) {
                    const De = Le.groups;
                    for (let Ye = 0, Ue = De.length; Ye < Ue; Ye++) {
                        const Ve = De[Ye],
                            lt = Fe[Ve.materialIndex];
                        lt && lt.visible && l.push(S, Le, lt, V, ue.z, Ve)
                    }
                } else Fe.visible && l.push(S, Le, Fe, V, ue.z, null)
            }
        }
        const Ee = S.children;
        for (let Le = 0, Fe = Ee.length; Le < Fe; Le++) bn(Ee[Le], z, V, G)
    }

    function wn(S, z, V, G) {
        const J = S.opaque,
            Ee = S.transmissive,
            Le = S.transparent;
        u.setupLightsView(V), Ee.length > 0 && np(J, z, V), G && se.viewport(E.copy(G)), J.length > 0 && no(J, z, V), Ee.length > 0 && no(Ee, z, V), Le.length > 0 && no(Le, z, V), se.buffers.depth.setTest(!0), se.buffers.depth.setMask(!0), se.buffers.color.setMask(!0), se.setPolygonOffset(!1)
    }

    function np(S, z, V) {
        const G = Pe.isWebGL2;
        Z === null && (Z = new Zt(1, 1, {
            generateMipmaps: !0,
            type: q.convert(zs) !== null ? zs : Ki,
            minFilter: ir,
            samples: G && s === !0 ? 4 : 0
        })), p.getDrawingBufferSize($), G ? Z.setSize($.x, $.y) : Z.setSize(Xo($.x), Xo($.y));
        const J = p.getRenderTarget();
        p.setRenderTarget(Z), p.clear();
        const Ee = p.toneMapping;
        p.toneMapping = Jn, no(S, z, V), p.toneMapping = Ee, K.updateMultisampleRenderTarget(Z), K.updateRenderTargetMipmap(Z), p.setRenderTarget(J)
    }

    function no(S, z, V) {
        const G = z.isScene === !0 ? z.overrideMaterial : null;
        for (let J = 0, Ee = S.length; J < Ee; J++) {
            const Le = S[J],
                Fe = Le.object,
                De = Le.geometry,
                Ye = G === null ? Le.material : G,
                Ue = Le.group;
            Fe.layers.test(V.layers) && ip(Fe, z, V, De, Ye, Ue)
        }
    }

    function ip(S, z, V, G, J, Ee) {
        S.onBeforeRender(p, z, V, G, J, Ee), S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), J.onBeforeRender(p, z, V, G, S, Ee), J.transparent === !0 && J.side === Yi ? (J.side = xn, J.needsUpdate = !0, p.renderBufferDirect(V, z, G, J, S, Ee), J.side = Ws, J.needsUpdate = !0, p.renderBufferDirect(V, z, G, J, S, Ee), J.side = Yi) : p.renderBufferDirect(V, z, G, J, S, Ee), S.onAfterRender(p, z, V, G, J, Ee)
    }

    function ba(S, z, V) {
        z.isScene !== !0 && (z = Me);
        const G = j.get(S),
            J = u.state.lights,
            Ee = u.state.shadowsArray,
            Le = J.state.version,
            Fe = ve.getParameters(S, J.state, Ee, z, V),
            De = ve.getProgramCacheKey(Fe);
        let Ye = G.programs;
        G.environment = S.isMeshStandardMaterial ? z.environment : null, G.fog = z.fog, G.envMap = (S.isMeshStandardMaterial ? me : ne).get(S.envMap || G.environment), Ye === void 0 && (S.addEventListener("dispose", oe), Ye = new Map, G.programs = Ye);
        let Ue = Ye.get(De);
        if (Ue !== void 0) {
            if (G.currentProgram === Ue && G.lightsStateVersion === Le) return Gc(S, Fe), Ue
        } else Fe.uniforms = ve.getUniforms(S), S.onBuild(V, Fe, p), S.onBeforeCompile(Fe, p), Ue = ve.acquireProgram(Fe, De), Ye.set(De, Ue), G.uniforms = Fe.uniforms;
        const Ve = G.uniforms;
        (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Ve.clippingPlanes = M.uniform), Gc(S, Fe), G.needsLights = op(S), G.lightsStateVersion = Le, G.needsLights && (Ve.ambientLightColor.value = J.state.ambient, Ve.lightProbe.value = J.state.probe, Ve.directionalLights.value = J.state.directional, Ve.directionalLightShadows.value = J.state.directionalShadow, Ve.spotLights.value = J.state.spot, Ve.spotLightShadows.value = J.state.spotShadow, Ve.rectAreaLights.value = J.state.rectArea, Ve.ltc_1.value = J.state.rectAreaLTC1, Ve.ltc_2.value = J.state.rectAreaLTC2, Ve.pointLights.value = J.state.point, Ve.pointLightShadows.value = J.state.pointShadow, Ve.hemisphereLights.value = J.state.hemi, Ve.directionalShadowMap.value = J.state.directionalShadowMap, Ve.directionalShadowMatrix.value = J.state.directionalShadowMatrix, Ve.spotShadowMap.value = J.state.spotShadowMap, Ve.spotShadowMatrix.value = J.state.spotShadowMatrix, Ve.pointShadowMap.value = J.state.pointShadowMap, Ve.pointShadowMatrix.value = J.state.pointShadowMatrix);
        const lt = Ue.getUniforms(),
            Li = gi.seqWithValue(lt.seq, Ve);
        return G.currentProgram = Ue, G.uniformsList = Li, Ue
    }

    function Gc(S, z) {
        const V = j.get(S);
        V.outputEncoding = z.outputEncoding, V.instancing = z.instancing, V.skinning = z.skinning, V.morphTargets = z.morphTargets, V.morphNormals = z.morphNormals, V.morphColors = z.morphColors, V.morphTargetsCount = z.morphTargetsCount, V.numClippingPlanes = z.numClippingPlanes, V.numIntersection = z.numClipIntersection, V.vertexAlphas = z.vertexAlphas, V.vertexTangents = z.vertexTangents, V.toneMapping = z.toneMapping
    }

    function sp(S, z, V, G, J) {
        z.isScene !== !0 && (z = Me), K.resetTextureUnits();
        const Ee = z.fog,
            Le = G.isMeshStandardMaterial ? z.environment : null,
            Fe = b === null ? p.outputEncoding : b.isXRRenderTarget === !0 ? b.texture.encoding : Zn,
            De = (G.isMeshStandardMaterial ? me : ne).get(G.envMap || Le),
            Ye = G.vertexColors === !0 && !!V.attributes.color && V.attributes.color.itemSize === 4,
            Ue = !!G.normalMap && !!V.attributes.tangent,
            Ve = !!V.morphAttributes.position,
            lt = !!V.morphAttributes.normal,
            Li = !!V.morphAttributes.color,
            ls = G.toneMapped ? p.toneMapping : Jn,
            cs = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color,
            Mn = cs !== void 0 ? cs.length : 0,
            qe = j.get(G),
            hs = u.state.lights;
        if (F === !0 && (X === !0 || S !== x)) {
            const fn = S === x && G.id === w;
            M.setState(G, S, fn)
        }
        let gt = !1;
        G.version === qe.__version ? (qe.needsLights && qe.lightsStateVersion !== hs.state.version || qe.outputEncoding !== Fe || J.isInstancedMesh && qe.instancing === !1 || !J.isInstancedMesh && qe.instancing === !0 || J.isSkinnedMesh && qe.skinning === !1 || !J.isSkinnedMesh && qe.skinning === !0 || qe.envMap !== De || G.fog && qe.fog !== Ee || qe.numClippingPlanes !== void 0 && (qe.numClippingPlanes !== M.numPlanes || qe.numIntersection !== M.numIntersection) || qe.vertexAlphas !== Ye || qe.vertexTangents !== Ue || qe.morphTargets !== Ve || qe.morphNormals !== lt || qe.morphColors !== Li || qe.toneMapping !== ls || Pe.isWebGL2 === !0 && qe.morphTargetsCount !== Mn) && (gt = !0) : (gt = !0, qe.__version = G.version);
        let Sn = qe.currentProgram;
        gt === !0 && (Sn = ba(G, z, J));
        let ti = !1,
            hr = !1,
            wa = !1;
        const Rt = Sn.getUniforms(),
            ur = qe.uniforms;
        if (se.useProgram(Sn.program) && (ti = !0, hr = !0, wa = !0), G.id !== w && (w = G.id, hr = !0), ti || x !== S) {
            if (Rt.setValue(Y, "projectionMatrix", S.projectionMatrix), Pe.logarithmicDepthBuffer && Rt.setValue(Y, "logDepthBufFC", 2 / (Math.log(S.far + 1) / Math.LN2)), x !== S && (x = S, hr = !0, wa = !0), G.isShaderMaterial || G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshStandardMaterial || G.envMap) {
                const fn = Rt.map.cameraPosition;
                fn !== void 0 && fn.setValue(Y, ue.setFromMatrixPosition(S.matrixWorld))
            }(G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial) && Rt.setValue(Y, "isOrthographic", S.isOrthographicCamera === !0), (G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial || G.isShadowMaterial || J.isSkinnedMesh) && Rt.setValue(Y, "viewMatrix", S.matrixWorldInverse)
        }
        if (J.isSkinnedMesh) {
            Rt.setOptional(Y, J, "bindMatrix"), Rt.setOptional(Y, J, "bindMatrixInverse");
            const fn = J.skeleton;
            fn && (Pe.floatVertexTextures ? (fn.boneTexture === null && fn.computeBoneTexture(), Rt.setValue(Y, "boneTexture", fn.boneTexture, K), Rt.setValue(Y, "boneTextureSize", fn.boneTextureSize)) : Rt.setOptional(Y, fn, "boneMatrices"))
        }
        const Ma = V.morphAttributes;
        return (Ma.position !== void 0 || Ma.normal !== void 0 || Ma.color !== void 0 && Pe.isWebGL2 === !0) && ce.update(J, V, G, Sn), (hr || qe.receiveShadow !== J.receiveShadow) && (qe.receiveShadow = J.receiveShadow, Rt.setValue(Y, "receiveShadow", J.receiveShadow)), hr && (Rt.setValue(Y, "toneMappingExposure", p.toneMappingExposure), qe.needsLights && rp(ur, wa), Ee && G.fog && st.refreshFogUniforms(ur, Ee), st.refreshMaterialUniforms(ur, G, v, B, Z), gi.upload(Y, qe.uniformsList, ur, K)), G.isShaderMaterial && G.uniformsNeedUpdate === !0 && (gi.upload(Y, qe.uniformsList, ur, K), G.uniformsNeedUpdate = !1), G.isSpriteMaterial && Rt.setValue(Y, "center", J.center), Rt.setValue(Y, "modelViewMatrix", J.modelViewMatrix), Rt.setValue(Y, "normalMatrix", J.normalMatrix), Rt.setValue(Y, "modelMatrix", J.matrixWorld), Sn
    }

    function rp(S, z) {
        S.ambientLightColor.needsUpdate = z, S.lightProbe.needsUpdate = z, S.directionalLights.needsUpdate = z, S.directionalLightShadows.needsUpdate = z, S.pointLights.needsUpdate = z, S.pointLightShadows.needsUpdate = z, S.spotLights.needsUpdate = z, S.spotLightShadows.needsUpdate = z, S.rectAreaLights.needsUpdate = z, S.hemisphereLights.needsUpdate = z
    }

    function op(S) {
        return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0
    }
    this.getActiveCubeFace = function() {
        return _
    }, this.getActiveMipmapLevel = function() {
        return y
    }, this.getRenderTarget = function() {
        return b
    }, this.setRenderTargetTextures = function(S, z, V) {
        j.get(S.texture).__webglTexture = z, j.get(S.depthTexture).__webglTexture = V;
        const G = j.get(S);
        G.__hasExternalTextures = !0, G.__hasExternalTextures && (G.__autoAllocateDepthBuffer = V === void 0, G.__autoAllocateDepthBuffer || Re.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), G.__useRenderToTexture = !1))
    }, this.setRenderTargetFramebuffer = function(S, z) {
        const V = j.get(S);
        V.__webglFramebuffer = z, V.__useDefaultFramebuffer = z === void 0
    }, this.setRenderTarget = function(S, z = 0, V = 0) {
        b = S, _ = z, y = V;
        let G = !0;
        if (S) {
            const De = j.get(S);
            De.__useDefaultFramebuffer !== void 0 ? (se.bindFramebuffer(36160, null), G = !1) : De.__webglFramebuffer === void 0 ? K.setupRenderTarget(S) : De.__hasExternalTextures && K.rebindTextures(S, j.get(S.texture).__webglTexture, j.get(S.depthTexture).__webglTexture)
        }
        let J = null,
            Ee = !1,
            Le = !1;
        if (S) {
            const De = S.texture;
            (De.isData3DTexture || De.isDataArrayTexture) && (Le = !0);
            const Ye = j.get(S).__webglFramebuffer;
            S.isWebGLCubeRenderTarget ? (J = Ye[z], Ee = !0) : Pe.isWebGL2 && S.samples > 0 && K.useMultisampledRTT(S) === !1 ? J = j.get(S).__webglMultisampledFramebuffer : J = Ye, E.copy(S.viewport), T.copy(S.scissor), R = S.scissorTest
        } else E.copy(D).multiplyScalar(v).floor(), T.copy(O).multiplyScalar(v).floor(), R = N;
        if (se.bindFramebuffer(36160, J) && Pe.drawBuffers && G && se.drawBuffers(S, J), se.viewport(E), se.scissor(T), se.setScissorTest(R), Ee) {
            const De = j.get(S.texture);
            Y.framebufferTexture2D(36160, 36064, 34069 + z, De.__webglTexture, V)
        } else if (Le) {
            const De = j.get(S.texture),
                Ye = z || 0;
            Y.framebufferTextureLayer(36160, 36064, De.__webglTexture, V || 0, Ye)
        }
        w = -1
    }, this.readRenderTargetPixels = function(S, z, V, G, J, Ee, Le) {
        if (!(S && S.isWebGLRenderTarget)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            return
        }
        let Fe = j.get(S).__webglFramebuffer;
        if (S.isWebGLCubeRenderTarget && Le !== void 0 && (Fe = Fe[Le]), Fe) {
            se.bindFramebuffer(36160, Fe);
            try {
                const De = S.texture,
                    Ye = De.format,
                    Ue = De.type;
                if (Ye !== rn && q.convert(Ye) !== Y.getParameter(35739)) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    return
                }
                const Ve = Ue === zs && (Re.has("EXT_color_buffer_half_float") || Pe.isWebGL2 && Re.has("EXT_color_buffer_float"));
                if (Ue !== Ki && q.convert(Ue) !== Y.getParameter(35738) && !(Ue === ui && (Pe.isWebGL2 || Re.has("OES_texture_float") || Re.has("WEBGL_color_buffer_float"))) && !Ve) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    return
                }
                z >= 0 && z <= S.width - G && V >= 0 && V <= S.height - J && Y.readPixels(z, V, G, J, q.convert(Ye), q.convert(Ue), Ee)
            } finally {
                const De = b !== null ? j.get(b).__webglFramebuffer : null;
                se.bindFramebuffer(36160, De)
            }
        }
    }, this.copyFramebufferToTexture = function(S, z, V = 0) {
        if (z.isFramebufferTexture !== !0) {
            console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");
            return
        }
        const G = Math.pow(2, -V),
            J = Math.floor(z.image.width * G),
            Ee = Math.floor(z.image.height * G);
        K.setTexture2D(z, 0), Y.copyTexSubImage2D(3553, V, 0, 0, S.x, S.y, J, Ee), se.unbindTexture()
    }, this.copyTextureToTexture = function(S, z, V, G = 0) {
        const J = z.image.width,
            Ee = z.image.height,
            Le = q.convert(V.format),
            Fe = q.convert(V.type);
        K.setTexture2D(V, 0), Y.pixelStorei(37440, V.flipY), Y.pixelStorei(37441, V.premultiplyAlpha), Y.pixelStorei(3317, V.unpackAlignment), z.isDataTexture ? Y.texSubImage2D(3553, G, S.x, S.y, J, Ee, Le, Fe, z.image.data) : z.isCompressedTexture ? Y.compressedTexSubImage2D(3553, G, S.x, S.y, z.mipmaps[0].width, z.mipmaps[0].height, Le, z.mipmaps[0].data) : Y.texSubImage2D(3553, G, S.x, S.y, Le, Fe, z.image), G === 0 && V.generateMipmaps && Y.generateMipmap(3553), se.unbindTexture()
    }, this.copyTextureToTexture3D = function(S, z, V, G, J = 0) {
        if (p.isWebGL1Renderer) {
            console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            return
        }
        const Ee = S.max.x - S.min.x + 1,
            Le = S.max.y - S.min.y + 1,
            Fe = S.max.z - S.min.z + 1,
            De = q.convert(G.format),
            Ye = q.convert(G.type);
        let Ue;
        if (G.isData3DTexture) K.setTexture3D(G, 0), Ue = 32879;
        else if (G.isDataArrayTexture) K.setTexture2DArray(G, 0), Ue = 35866;
        else {
            console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            return
        }
        Y.pixelStorei(37440, G.flipY), Y.pixelStorei(37441, G.premultiplyAlpha), Y.pixelStorei(3317, G.unpackAlignment);
        const Ve = Y.getParameter(3314),
            lt = Y.getParameter(32878),
            Li = Y.getParameter(3316),
            ls = Y.getParameter(3315),
            cs = Y.getParameter(32877),
            Mn = V.isCompressedTexture ? V.mipmaps[0] : V.image;
        Y.pixelStorei(3314, Mn.width), Y.pixelStorei(32878, Mn.height), Y.pixelStorei(3316, S.min.x), Y.pixelStorei(3315, S.min.y), Y.pixelStorei(32877, S.min.z), V.isDataTexture || V.isData3DTexture ? Y.texSubImage3D(Ue, J, z.x, z.y, z.z, Ee, Le, Fe, De, Ye, Mn.data) : V.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), Y.compressedTexSubImage3D(Ue, J, z.x, z.y, z.z, Ee, Le, Fe, De, Mn.data)) : Y.texSubImage3D(Ue, J, z.x, z.y, z.z, Ee, Le, Fe, De, Ye, Mn), Y.pixelStorei(3314, Ve), Y.pixelStorei(32878, lt), Y.pixelStorei(3316, Li), Y.pixelStorei(3315, ls), Y.pixelStorei(32877, cs), J === 0 && G.generateMipmaps && Y.generateMipmap(Ue), se.unbindTexture()
    }, this.initTexture = function(S) {
        K.setTexture2D(S, 0), se.unbindTexture()
    }, this.resetState = function() {
        _ = 0, y = 0, b = null, se.reset(), Ie.reset()
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
    }))
}
Je.prototype.isWebGLRenderer = !0;
class cx extends Je {}
cx.prototype.isWebGL1Renderer = !0;
class ha {
    constructor(e, t = 1, n = 1e3) {
        this.name = "", this.color = new ie(e), this.near = t, this.far = n
    }
    clone() {
        return new ha(this.color, this.near, this.far)
    }
    toJSON() {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }
}
ha.prototype.isFog = !0;
class lc extends je {
    constructor() {
        super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }))
    }
    copy(e, t) {
        return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return this.fog !== null && (t.object.fog = this.fog.toJSON()), t
    }
}
lc.prototype.isScene = !0;
class rr {
    constructor(e, t) {
        this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Or, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0, this.uuid = cn()
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    setUsage(e) {
        return this.usage = e, this
    }
    copy(e) {
        return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this
    }
    copyAt(e, t, n) {
        e *= this.stride, n *= t.stride;
        for (let i = 0, s = this.stride; i < s; i++) this.array[e + i] = t.array[n + i];
        return this
    }
    set(e, t = 0) {
        return this.array.set(e, t), this
    }
    clone(e) {
        e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = cn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
            n = new this.constructor(t, this.stride);
        return n.setUsage(this.usage), n
    }
    onUpload(e) {
        return this.onUploadCallback = e, this
    }
    toJSON(e) {
        return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = cn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        }
    }
}
rr.prototype.isInterleavedBuffer = !0;
const zt = new C;
class Ks {
    constructor(e, t, n, i = !1) {
        this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0
    }
    get count() {
        return this.data.count
    }
    get array() {
        return this.data.array
    }
    set needsUpdate(e) {
        this.data.needsUpdate = e
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.data.count; t < n; t++) zt.fromBufferAttribute(this, t), zt.applyMatrix4(e), this.setXYZ(t, zt.x, zt.y, zt.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++) zt.fromBufferAttribute(this, t), zt.applyNormalMatrix(e), this.setXYZ(t, zt.x, zt.y, zt.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++) zt.fromBufferAttribute(this, t), zt.transformDirection(e), this.setXYZ(t, zt.x, zt.y, zt.z);
        return this
    }
    setX(e, t) {
        return this.data.array[e * this.data.stride + this.offset] = t, this
    }
    setY(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 1] = t, this
    }
    setZ(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 2] = t, this
    }
    setW(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 3] = t, this
    }
    getX(e) {
        return this.data.array[e * this.data.stride + this.offset]
    }
    getY(e) {
        return this.data.array[e * this.data.stride + this.offset + 1]
    }
    getZ(e) {
        return this.data.array[e * this.data.stride + this.offset + 2]
    }
    getW(e) {
        return this.data.array[e * this.data.stride + this.offset + 3]
    }
    setXY(e, t, n) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this
    }
    setXYZ(e, t, n, i) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this
    }
    setXYZW(e, t, n, i, s) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this
    }
    clone(e) {
        if (e === void 0) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
            const t = [];
            for (let n = 0; n < this.count; n++) {
                const i = n * this.data.stride + this.offset;
                for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s])
            }
            return new ft(new this.array.constructor(t), this.itemSize, this.normalized)
        } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Ks(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
    }
    toJSON(e) {
        if (e === void 0) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
            const t = [];
            for (let n = 0; n < this.count; n++) {
                const i = n * this.data.stride + this.offset;
                for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s])
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: t,
                normalized: this.normalized
            }
        } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
            isInterleavedBufferAttribute: !0,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized
        }
    }
}
Ks.prototype.isInterleavedBufferAttribute = !0;
class Pn extends dt {
    constructor(e) {
        super(), this.type = "SpriteMaterial", this.color = new ie(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this
    }
}
Pn.prototype.isSpriteMaterial = !0;
let Ts;
const mr = new C,
    Es = new C,
    As = new C,
    Cs = new te,
    gr = new te,
    yd = new _e,
    So = new C,
    _r = new C,
    To = new C,
    Zh = new te,
    nl = new te,
    $h = new te;
class _i extends je {
    constructor(e) {
        if (super(), this.type = "Sprite", Ts === void 0) {
            Ts = new tt;
            const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
                n = new rr(t, 5);
            Ts.setIndex([0, 1, 2, 0, 2, 3]), Ts.setAttribute("position", new Ks(n, 3, 0, !1)), Ts.setAttribute("uv", new Ks(n, 2, 3, !1))
        }
        this.geometry = Ts, this.material = e !== void 0 ? e : new Pn, this.center = new te(.5, .5)
    }
    raycast(e, t) {
        e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Es.setFromMatrixScale(this.matrixWorld), yd.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), As.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Es.multiplyScalar(-As.z);
        const n = this.material.rotation;
        let i, s;
        n !== 0 && (s = Math.cos(n), i = Math.sin(n));
        const r = this.center;
        Eo(So.set(-.5, -.5, 0), As, r, Es, i, s), Eo(_r.set(.5, -.5, 0), As, r, Es, i, s), Eo(To.set(.5, .5, 0), As, r, Es, i, s), Zh.set(0, 0), nl.set(1, 0), $h.set(1, 1);
        let a = e.ray.intersectTriangle(So, _r, To, !1, mr);
        if (a === null && (Eo(_r.set(-.5, .5, 0), As, r, Es, i, s), nl.set(0, 1), a = e.ray.intersectTriangle(So, To, _r, !1, mr), a === null)) return;
        const c = e.ray.origin.distanceTo(mr);
        c < e.near || c > e.far || t.push({
            distance: c,
            point: mr.clone(),
            uv: wt.getUV(mr, So, _r, To, Zh, nl, $h, new te),
            face: null,
            object: this
        })
    }
    copy(e) {
        return super.copy(e), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this
    }
}
_i.prototype.isSprite = !0;

function Eo(o, e, t, n, i, s) {
    Cs.subVectors(o, t).addScalar(.5).multiply(n), i !== void 0 ? (gr.x = s * Cs.x - i * Cs.y, gr.y = i * Cs.x + s * Cs.y) : gr.copy(Cs), o.copy(e), o.x += gr.x, o.y += gr.y, o.applyMatrix4(yd)
}
const Qh = new C,
    eu = new Ke,
    tu = new Ke,
    hx = new C,
    nu = new _e;
class cc extends St {
    constructor(e, t) {
        super(e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new _e, this.bindMatrixInverse = new _e
    }
    copy(e) {
        return super.copy(e), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this
    }
    bind(e, t) {
        this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert()
    }
    pose() {
        this.skeleton.pose()
    }
    normalizeSkinWeights() {
        const e = new Ke,
            t = this.geometry.attributes.skinWeight;
        for (let n = 0, i = t.count; n < i; n++) {
            e.fromBufferAttribute(t, n);
            const s = 1 / e.manhattanLength();
            s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w)
        }
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    }
    boneTransform(e, t) {
        const n = this.skeleton,
            i = this.geometry;
        eu.fromBufferAttribute(i.attributes.skinIndex, e), tu.fromBufferAttribute(i.attributes.skinWeight, e), Qh.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
        for (let s = 0; s < 4; s++) {
            const r = tu.getComponent(s);
            if (r !== 0) {
                const a = eu.getComponent(s);
                nu.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(hx.copy(Qh).applyMatrix4(nu), r)
            }
        }
        return t.applyMatrix4(this.bindMatrixInverse)
    }
}
cc.prototype.isSkinnedMesh = !0;
class hc extends je {
    constructor() {
        super(), this.type = "Bone"
    }
}
hc.prototype.isBone = !0;
class xd extends xt {
    constructor(e = null, t = 1, n = 1, i, s, r, a, c, h = bt, d = bt, l, u) {
        super(null, r, a, c, h, d, i, s, l, u), this.image = {
            data: e,
            width: t,
            height: n
        }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }
}
xd.prototype.isDataTexture = !0;
const iu = new _e,
    ux = new _e;
class uc {
    constructor(e = [], t = []) {
        this.uuid = cn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init()
    }
    init() {
        const e = this.bones,
            t = this.boneInverses;
        if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
        else if (e.length !== t.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
            for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new _e)
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = new _e;
            this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n)
        }
    }
    pose() {
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = this.bones[e];
            n && n.matrixWorld.copy(this.boneInverses[e]).invert()
        }
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = this.bones[e];
            n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale))
        }
    }
    update() {
        const e = this.bones,
            t = this.boneInverses,
            n = this.boneMatrices,
            i = this.boneTexture;
        for (let s = 0, r = e.length; s < r; s++) {
            const a = e[s] ? e[s].matrixWorld : ux;
            iu.multiplyMatrices(a, t[s]), iu.toArray(n, s * 16)
        }
        i !== null && (i.needsUpdate = !0)
    }
    clone() {
        return new uc(this.bones, this.boneInverses)
    }
    computeBoneTexture() {
        let e = Math.sqrt(this.bones.length * 4);
        e = ed(e), e = Math.max(e, 4);
        const t = new Float32Array(e * e * 4);
        t.set(this.boneMatrices);
        const n = new xd(t, e, e, rn, ui);
        return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this
    }
    getBoneByName(e) {
        for (let t = 0, n = this.bones.length; t < n; t++) {
            const i = this.bones[t];
            if (i.name === e) return i
        }
    }
    dispose() {
        this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null)
    }
    fromJSON(e, t) {
        this.uuid = e.uuid;
        for (let n = 0, i = e.bones.length; n < i; n++) {
            const s = e.bones[n];
            let r = t[s];
            r === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), r = new hc), this.bones.push(r), this.boneInverses.push(new _e().fromArray(e.boneInverses[n]))
        }
        return this.init(), this
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: "Skeleton",
                generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
        };
        e.uuid = this.uuid;
        const t = this.bones,
            n = this.boneInverses;
        for (let i = 0, s = t.length; i < s; i++) {
            const r = t[i];
            e.bones.push(r.uuid);
            const a = n[i];
            e.boneInverses.push(a.toArray())
        }
        return e
    }
}
class Cl extends ft {
    constructor(e, t, n, i = 1) {
        typeof n == "number" && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(e, t, n), this.meshPerAttribute = i
    }
    copy(e) {
        return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this
    }
    toJSON() {
        const e = super.toJSON();
        return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e
    }
}
Cl.prototype.isInstancedBufferAttribute = !0;
const su = new _e,
    ru = new _e,
    Ao = [],
    yr = new St;
class dx extends St {
    constructor(e, t, n) {
        super(e, t), this.instanceMatrix = new Cl(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1
    }
    copy(e) {
        return super.copy(e), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this
    }
    getColorAt(e, t) {
        t.fromArray(this.instanceColor.array, e * 3)
    }
    getMatrixAt(e, t) {
        t.fromArray(this.instanceMatrix.array, e * 16)
    }
    raycast(e, t) {
        const n = this.matrixWorld,
            i = this.count;
        if (yr.geometry = this.geometry, yr.material = this.material, yr.material !== void 0)
            for (let s = 0; s < i; s++) {
                this.getMatrixAt(s, su), ru.multiplyMatrices(n, su), yr.matrixWorld = ru, yr.raycast(e, Ao);
                for (let r = 0, a = Ao.length; r < a; r++) {
                    const c = Ao[r];
                    c.instanceId = s, c.object = this, t.push(c)
                }
                Ao.length = 0
            }
    }
    setColorAt(e, t) {
        this.instanceColor === null && (this.instanceColor = new Cl(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3)
    }
    setMatrixAt(e, t) {
        t.toArray(this.instanceMatrix.array, e * 16)
    }
    updateMorphTargets() {}
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
dx.prototype.isInstancedMesh = !0;
class os extends dt {
    constructor(e) {
        super(), this.type = "LineBasicMaterial", this.color = new ie(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
    }
}
os.prototype.isLineBasicMaterial = !0;
const ou = new C,
    au = new C,
    lu = new _e,
    il = new ss,
    Co = new is;
class ua extends je {
    constructor(e = new tt, t = new os) {
        super(), this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets()
    }
    copy(e) {
        return super.copy(e), this.material = e.material, this.geometry = e.geometry, this
    }
    computeLineDistances() {
        const e = this.geometry;
        if (e.isBufferGeometry)
            if (e.index === null) {
                const t = e.attributes.position,
                    n = [0];
                for (let i = 1, s = t.count; i < s; i++) ou.fromBufferAttribute(t, i - 1), au.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += ou.distanceTo(au);
                e.setAttribute("lineDistance", new mt(n, 1))
            } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else e.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this
    }
    raycast(e, t) {
        const n = this.geometry,
            i = this.matrixWorld,
            s = e.params.Line.threshold,
            r = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(), Co.copy(n.boundingSphere), Co.applyMatrix4(i), Co.radius += s, e.ray.intersectsSphere(Co) === !1) return;
        lu.copy(i).invert(), il.copy(e.ray).applyMatrix4(lu);
        const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            c = a * a,
            h = new C,
            d = new C,
            l = new C,
            u = new C,
            f = this.isLineSegments ? 2 : 1;
        if (n.isBufferGeometry) {
            const g = n.index,
                m = n.attributes.position;
            if (g !== null) {
                const _ = Math.max(0, r.start),
                    y = Math.min(g.count, r.start + r.count);
                for (let b = _, w = y - 1; b < w; b += f) {
                    const x = g.getX(b),
                        E = g.getX(b + 1);
                    if (h.fromBufferAttribute(m, x), d.fromBufferAttribute(m, E), il.distanceSqToSegment(h, d, u, l) > c) continue;
                    u.applyMatrix4(this.matrixWorld);
                    const R = e.ray.origin.distanceTo(u);
                    R < e.near || R > e.far || t.push({
                        distance: R,
                        point: l.clone().applyMatrix4(this.matrixWorld),
                        index: b,
                        face: null,
                        faceIndex: null,
                        object: this
                    })
                }
            } else {
                const _ = Math.max(0, r.start),
                    y = Math.min(m.count, r.start + r.count);
                for (let b = _, w = y - 1; b < w; b += f) {
                    if (h.fromBufferAttribute(m, b), d.fromBufferAttribute(m, b + 1), il.distanceSqToSegment(h, d, u, l) > c) continue;
                    u.applyMatrix4(this.matrixWorld);
                    const E = e.ray.origin.distanceTo(u);
                    E < e.near || E > e.far || t.push({
                        distance: E,
                        point: l.clone().applyMatrix4(this.matrixWorld),
                        index: b,
                        face: null,
                        faceIndex: null,
                        object: this
                    })
                }
            }
        } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
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
            t !== void 0 && t.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    }
}
ua.prototype.isLine = !0;
const cu = new C,
    hu = new C;
class da extends ua {
    constructor(e, t) {
        super(e, t), this.type = "LineSegments"
    }
    computeLineDistances() {
        const e = this.geometry;
        if (e.isBufferGeometry)
            if (e.index === null) {
                const t = e.attributes.position,
                    n = [];
                for (let i = 0, s = t.count; i < s; i += 2) cu.fromBufferAttribute(t, i), hu.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + cu.distanceTo(hu);
                e.setAttribute("lineDistance", new mt(n, 1))
            } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else e.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this
    }
}
da.prototype.isLineSegments = !0;
class vd extends ua {
    constructor(e, t) {
        super(e, t), this.type = "LineLoop"
    }
}
vd.prototype.isLineLoop = !0;
class fa extends dt {
    constructor(e) {
        super(), this.type = "PointsMaterial", this.color = new ie(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this
    }
}
fa.prototype.isPointsMaterial = !0;
const uu = new _e,
    Ll = new ss,
    Lo = new is,
    Ro = new C;
class bd extends je {
    constructor(e = new tt, t = new fa) {
        super(), this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets()
    }
    copy(e) {
        return super.copy(e), this.material = e.material, this.geometry = e.geometry, this
    }
    raycast(e, t) {
        const n = this.geometry,
            i = this.matrixWorld,
            s = e.params.Points.threshold,
            r = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(), Lo.copy(n.boundingSphere), Lo.applyMatrix4(i), Lo.radius += s, e.ray.intersectsSphere(Lo) === !1) return;
        uu.copy(i).invert(), Ll.copy(e.ray).applyMatrix4(uu);
        const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            c = a * a;
        if (n.isBufferGeometry) {
            const h = n.index,
                l = n.attributes.position;
            if (h !== null) {
                const u = Math.max(0, r.start),
                    f = Math.min(h.count, r.start + r.count);
                for (let g = u, p = f; g < p; g++) {
                    const m = h.getX(g);
                    Ro.fromBufferAttribute(l, m), du(Ro, m, c, i, e, t, this)
                }
            } else {
                const u = Math.max(0, r.start),
                    f = Math.min(l.count, r.start + r.count);
                for (let g = u, p = f; g < p; g++) Ro.fromBufferAttribute(l, g), du(Ro, g, c, i, e, t, this)
            }
        } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
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
            t !== void 0 && t.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    }
}
bd.prototype.isPoints = !0;

function du(o, e, t, n, i, s, r) {
    const a = Ll.distanceSqToPoint(o);
    if (a < t) {
        const c = new C;
        Ll.closestPointToPoint(o, c), c.applyMatrix4(n);
        const h = i.ray.origin.distanceTo(c);
        if (h < i.near || h > i.far) return;
        s.push({
            distance: h,
            distanceToRay: Math.sqrt(a),
            point: c,
            index: e,
            face: null,
            object: r
        })
    }
}
class fx extends xt {
    constructor(e, t, n, i, s, r, a, c, h) {
        super(e, t, n, i, s, r, a, c, h), this.minFilter = r !== void 0 ? r : It, this.magFilter = s !== void 0 ? s : It, this.generateMipmaps = !1;
        const d = this;

        function l() {
            d.needsUpdate = !0, e.requestVideoFrameCallback(l)
        }
        "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(l)
    }
    clone() {
        return new this.constructor(this.image).copy(this)
    }
    update() {
        const e = this.image;
        "requestVideoFrameCallback" in e === !1 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
    }
}
fx.prototype.isVideoTexture = !0;
class px extends xt {
    constructor(e, t, n) {
        super({
            width: e,
            height: t
        }), this.format = n, this.magFilter = bt, this.minFilter = bt, this.generateMipmaps = !1, this.needsUpdate = !0
    }
}
px.prototype.isFramebufferTexture = !0;
class mx extends xt {
    constructor(e, t, n, i, s, r, a, c, h, d, l, u) {
        super(null, r, a, c, h, d, i, s, l, u), this.image = {
            width: t,
            height: n
        }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
    }
}
mx.prototype.isCompressedTexture = !0;
class gx extends xt {
    constructor(e, t, n, i, s, r, a, c, h) {
        super(e, t, n, i, s, r, a, c, h), this.needsUpdate = !0
    }
}
gx.prototype.isCanvasTexture = !0;
class hn {
    constructor() {
        this.type = "Curve", this.arcLengthDivisions = 200
    }
    getPoint() {
        return console.warn("THREE.Curve: .getPoint() not implemented."), null
    }
    getPointAt(e, t) {
        const n = this.getUtoTmapping(e);
        return this.getPoint(n, t)
    }
    getPoints(e = 5) {
        const t = [];
        for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
        return t
    }
    getSpacedPoints(e = 5) {
        const t = [];
        for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
        return t
    }
    getLength() {
        const e = this.getLengths();
        return e[e.length - 1]
    }
    getLengths(e = this.arcLengthDivisions) {
        if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        const t = [];
        let n, i = this.getPoint(0),
            s = 0;
        t.push(0);
        for (let r = 1; r <= e; r++) n = this.getPoint(r / e), s += n.distanceTo(i), t.push(s), i = n;
        return this.cacheArcLengths = t, t
    }
    updateArcLengths() {
        this.needsUpdate = !0, this.getLengths()
    }
    getUtoTmapping(e, t) {
        const n = this.getLengths();
        let i = 0;
        const s = n.length;
        let r;
        t ? r = t : r = e * n[s - 1];
        let a = 0,
            c = s - 1,
            h;
        for (; a <= c;)
            if (i = Math.floor(a + (c - a) / 2), h = n[i] - r, h < 0) a = i + 1;
            else if (h > 0) c = i - 1;
        else {
            c = i;
            break
        }
        if (i = c, n[i] === r) return i / (s - 1);
        const d = n[i],
            u = n[i + 1] - d,
            f = (r - d) / u;
        return (i + f) / (s - 1)
    }
    getTangent(e, t) {
        let i = e - 1e-4,
            s = e + 1e-4;
        i < 0 && (i = 0), s > 1 && (s = 1);
        const r = this.getPoint(i),
            a = this.getPoint(s),
            c = t || (r.isVector2 ? new te : new C);
        return c.copy(a).sub(r).normalize(), c
    }
    getTangentAt(e, t) {
        const n = this.getUtoTmapping(e);
        return this.getTangent(n, t)
    }
    computeFrenetFrames(e, t) {
        const n = new C,
            i = [],
            s = [],
            r = [],
            a = new C,
            c = new _e;
        for (let f = 0; f <= e; f++) {
            const g = f / e;
            i[f] = this.getTangentAt(g, new C)
        }
        s[0] = new C, r[0] = new C;
        let h = Number.MAX_VALUE;
        const d = Math.abs(i[0].x),
            l = Math.abs(i[0].y),
            u = Math.abs(i[0].z);
        d <= h && (h = d, n.set(1, 0, 0)), l <= h && (h = l, n.set(0, 1, 0)), u <= h && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], a), r[0].crossVectors(i[0], s[0]);
        for (let f = 1; f <= e; f++) {
            if (s[f] = s[f - 1].clone(), r[f] = r[f - 1].clone(), a.crossVectors(i[f - 1], i[f]), a.length() > Number.EPSILON) {
                a.normalize();
                const g = Math.acos(At(i[f - 1].dot(i[f]), -1, 1));
                s[f].applyMatrix4(c.makeRotationAxis(a, g))
            }
            r[f].crossVectors(i[f], s[f])
        }
        if (t === !0) {
            let f = Math.acos(At(s[0].dot(s[e]), -1, 1));
            f /= e, i[0].dot(a.crossVectors(s[0], s[e])) > 0 && (f = -f);
            for (let g = 1; g <= e; g++) s[g].applyMatrix4(c.makeRotationAxis(i[g], f * g)), r[g].crossVectors(i[g], s[g])
        }
        return {
            tangents: i,
            normals: s,
            binormals: r
        }
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions, this
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: "Curve",
                generator: "Curve.toJSON"
            }
        };
        return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
    }
    fromJSON(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions, this
    }
}
class pa extends hn {
    constructor(e = 0, t = 0, n = 1, i = 1, s = 0, r = Math.PI * 2, a = !1, c = 0) {
        super(), this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = r, this.aClockwise = a, this.aRotation = c
    }
    getPoint(e, t) {
        const n = t || new te,
            i = Math.PI * 2;
        let s = this.aEndAngle - this.aStartAngle;
        const r = Math.abs(s) < Number.EPSILON;
        for (; s < 0;) s += i;
        for (; s > i;) s -= i;
        s < Number.EPSILON && (r ? s = 0 : s = i), this.aClockwise === !0 && !r && (s === i ? s = -i : s = s - i);
        const a = this.aStartAngle + e * s;
        let c = this.aX + this.xRadius * Math.cos(a),
            h = this.aY + this.yRadius * Math.sin(a);
        if (this.aRotation !== 0) {
            const d = Math.cos(this.aRotation),
                l = Math.sin(this.aRotation),
                u = c - this.aX,
                f = h - this.aY;
            c = u * d - f * l + this.aX, h = u * l + f * d + this.aY
        }
        return n.set(c, h)
    }
    copy(e) {
        return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
    }
    toJSON() {
        const e = super.toJSON();
        return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
    }
}
pa.prototype.isEllipseCurve = !0;
class wd extends pa {
    constructor(e, t, n, i, s, r) {
        super(e, t, n, n, i, s, r), this.type = "ArcCurve"
    }
}
wd.prototype.isArcCurve = !0;

function dc() {
    let o = 0,
        e = 0,
        t = 0,
        n = 0;

    function i(s, r, a, c) {
        o = s, e = a, t = -3 * s + 3 * r - 2 * a - c, n = 2 * s - 2 * r + a + c
    }
    return {
        initCatmullRom: function(s, r, a, c, h) {
            i(r, a, h * (a - s), h * (c - r))
        },
        initNonuniformCatmullRom: function(s, r, a, c, h, d, l) {
            let u = (r - s) / h - (a - s) / (h + d) + (a - r) / d,
                f = (a - r) / d - (c - r) / (d + l) + (c - a) / l;
            u *= d, f *= d, i(r, a, u, f)
        },
        calc: function(s) {
            const r = s * s,
                a = r * s;
            return o + e * s + t * r + n * a
        }
    }
}
const Po = new C,
    sl = new dc,
    rl = new dc,
    ol = new dc;
class Md extends hn {
    constructor(e = [], t = !1, n = "centripetal", i = .5) {
        super(), this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i
    }
    getPoint(e, t = new C) {
        const n = t,
            i = this.points,
            s = i.length,
            r = (s - (this.closed ? 0 : 1)) * e;
        let a = Math.floor(r),
            c = r - a;
        this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : c === 0 && a === s - 1 && (a = s - 2, c = 1);
        let h, d;
        this.closed || a > 0 ? h = i[(a - 1) % s] : (Po.subVectors(i[0], i[1]).add(i[0]), h = Po);
        const l = i[a % s],
            u = i[(a + 1) % s];
        if (this.closed || a + 2 < s ? d = i[(a + 2) % s] : (Po.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), d = Po), this.curveType === "centripetal" || this.curveType === "chordal") {
            const f = this.curveType === "chordal" ? .5 : .25;
            let g = Math.pow(h.distanceToSquared(l), f),
                p = Math.pow(l.distanceToSquared(u), f),
                m = Math.pow(u.distanceToSquared(d), f);
            p < 1e-4 && (p = 1), g < 1e-4 && (g = p), m < 1e-4 && (m = p), sl.initNonuniformCatmullRom(h.x, l.x, u.x, d.x, g, p, m), rl.initNonuniformCatmullRom(h.y, l.y, u.y, d.y, g, p, m), ol.initNonuniformCatmullRom(h.z, l.z, u.z, d.z, g, p, m)
        } else this.curveType === "catmullrom" && (sl.initCatmullRom(h.x, l.x, u.x, d.x, this.tension), rl.initCatmullRom(h.y, l.y, u.y, d.y, this.tension), ol.initCatmullRom(h.z, l.z, u.z, d.z, this.tension));
        return n.set(sl.calc(c), rl.calc(c), ol.calc(c)), n
    }
    copy(e) {
        super.copy(e), this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const i = e.points[t];
            this.points.push(i.clone())
        }
        return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
    }
    toJSON() {
        const e = super.toJSON();
        e.points = [];
        for (let t = 0, n = this.points.length; t < n; t++) {
            const i = this.points[t];
            e.points.push(i.toArray())
        }
        return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
    }
    fromJSON(e) {
        super.fromJSON(e), this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const i = e.points[t];
            this.points.push(new C().fromArray(i))
        }
        return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
    }
}
Md.prototype.isCatmullRomCurve3 = !0;

function fu(o, e, t, n, i) {
    const s = (n - e) * .5,
        r = (i - t) * .5,
        a = o * o,
        c = o * a;
    return (2 * t - 2 * n + s + r) * c + (-3 * t + 3 * n - 2 * s - r) * a + s * o + t
}

function _x(o, e) {
    const t = 1 - o;
    return t * t * e
}

function yx(o, e) {
    return 2 * (1 - o) * o * e
}

function xx(o, e) {
    return o * o * e
}

function Rr(o, e, t, n) {
    return _x(o, e) + yx(o, t) + xx(o, n)
}

function vx(o, e) {
    const t = 1 - o;
    return t * t * t * e
}

function bx(o, e) {
    const t = 1 - o;
    return 3 * t * t * o * e
}

function wx(o, e) {
    return 3 * (1 - o) * o * o * e
}

function Mx(o, e) {
    return o * o * o * e
}

function Pr(o, e, t, n, i) {
    return vx(o, e) + bx(o, t) + wx(o, n) + Mx(o, i)
}
class fc extends hn {
    constructor(e = new te, t = new te, n = new te, i = new te) {
        super(), this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i
    }
    getPoint(e, t = new te) {
        const n = t,
            i = this.v0,
            s = this.v1,
            r = this.v2,
            a = this.v3;
        return n.set(Pr(e, i.x, s.x, r.x, a.x), Pr(e, i.y, s.y, r.y, a.y)), n
    }
    copy(e) {
        return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
    }
}
fc.prototype.isCubicBezierCurve = !0;
class Sd extends hn {
    constructor(e = new C, t = new C, n = new C, i = new C) {
        super(), this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i
    }
    getPoint(e, t = new C) {
        const n = t,
            i = this.v0,
            s = this.v1,
            r = this.v2,
            a = this.v3;
        return n.set(Pr(e, i.x, s.x, r.x, a.x), Pr(e, i.y, s.y, r.y, a.y), Pr(e, i.z, s.z, r.z, a.z)), n
    }
    copy(e) {
        return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
    }
}
Sd.prototype.isCubicBezierCurve3 = !0;
class ma extends hn {
    constructor(e = new te, t = new te) {
        super(), this.type = "LineCurve", this.v1 = e, this.v2 = t
    }
    getPoint(e, t = new te) {
        const n = t;
        return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
    }
    getPointAt(e, t) {
        return this.getPoint(e, t)
    }
    getTangent(e, t) {
        const n = t || new te;
        return n.copy(this.v2).sub(this.v1).normalize(), n
    }
    copy(e) {
        return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }
}
ma.prototype.isLineCurve = !0;
class Sx extends hn {
    constructor(e = new C, t = new C) {
        super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = e, this.v2 = t
    }
    getPoint(e, t = new C) {
        const n = t;
        return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
    }
    getPointAt(e, t) {
        return this.getPoint(e, t)
    }
    copy(e) {
        return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }
}
class pc extends hn {
    constructor(e = new te, t = new te, n = new te) {
        super(), this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n
    }
    getPoint(e, t = new te) {
        const n = t,
            i = this.v0,
            s = this.v1,
            r = this.v2;
        return n.set(Rr(e, i.x, s.x, r.x), Rr(e, i.y, s.y, r.y)), n
    }
    copy(e) {
        return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }
}
pc.prototype.isQuadraticBezierCurve = !0;
class Td extends hn {
    constructor(e = new C, t = new C, n = new C) {
        super(), this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n
    }
    getPoint(e, t = new C) {
        const n = t,
            i = this.v0,
            s = this.v1,
            r = this.v2;
        return n.set(Rr(e, i.x, s.x, r.x), Rr(e, i.y, s.y, r.y), Rr(e, i.z, s.z, r.z)), n
    }
    copy(e) {
        return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }
}
Td.prototype.isQuadraticBezierCurve3 = !0;
class mc extends hn {
    constructor(e = []) {
        super(), this.type = "SplineCurve", this.points = e
    }
    getPoint(e, t = new te) {
        const n = t,
            i = this.points,
            s = (i.length - 1) * e,
            r = Math.floor(s),
            a = s - r,
            c = i[r === 0 ? r : r - 1],
            h = i[r],
            d = i[r > i.length - 2 ? i.length - 1 : r + 1],
            l = i[r > i.length - 3 ? i.length - 1 : r + 2];
        return n.set(fu(a, c.x, h.x, d.x, l.x), fu(a, c.y, h.y, d.y, l.y)), n
    }
    copy(e) {
        super.copy(e), this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const i = e.points[t];
            this.points.push(i.clone())
        }
        return this
    }
    toJSON() {
        const e = super.toJSON();
        e.points = [];
        for (let t = 0, n = this.points.length; t < n; t++) {
            const i = this.points[t];
            e.points.push(i.toArray())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e), this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const i = e.points[t];
            this.points.push(new te().fromArray(i))
        }
        return this
    }
}
mc.prototype.isSplineCurve = !0;
var Ed = Object.freeze({
    __proto__: null,
    ArcCurve: wd,
    CatmullRomCurve3: Md,
    CubicBezierCurve: fc,
    CubicBezierCurve3: Sd,
    EllipseCurve: pa,
    LineCurve: ma,
    LineCurve3: Sx,
    QuadraticBezierCurve: pc,
    QuadraticBezierCurve3: Td,
    SplineCurve: mc
});
class Tx extends hn {
    constructor() {
        super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1
    }
    add(e) {
        this.curves.push(e)
    }
    closePath() {
        const e = this.curves[0].getPoint(0),
            t = this.curves[this.curves.length - 1].getPoint(1);
        e.equals(t) || this.curves.push(new ma(t, e))
    }
    getPoint(e, t) {
        const n = e * this.getLength(),
            i = this.getCurveLengths();
        let s = 0;
        for (; s < i.length;) {
            if (i[s] >= n) {
                const r = i[s] - n,
                    a = this.curves[s],
                    c = a.getLength(),
                    h = c === 0 ? 0 : 1 - r / c;
                return a.getPointAt(h, t)
            }
            s++
        }
        return null
    }
    getLength() {
        const e = this.getCurveLengths();
        return e[e.length - 1]
    }
    updateArcLengths() {
        this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
    }
    getCurveLengths() {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
        const e = [];
        let t = 0;
        for (let n = 0, i = this.curves.length; n < i; n++) t += this.curves[n].getLength(), e.push(t);
        return this.cacheLengths = e, e
    }
    getSpacedPoints(e = 40) {
        const t = [];
        for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
        return this.autoClose && t.push(t[0]), t
    }
    getPoints(e = 12) {
        const t = [];
        let n;
        for (let i = 0, s = this.curves; i < s.length; i++) {
            const r = s[i],
                a = r.isEllipseCurve ? e * 2 : r.isLineCurve || r.isLineCurve3 ? 1 : r.isSplineCurve ? e * r.points.length : e,
                c = r.getPoints(a);
            for (let h = 0; h < c.length; h++) {
                const d = c[h];
                n && n.equals(d) || (t.push(d), n = d)
            }
        }
        return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t
    }
    copy(e) {
        super.copy(e), this.curves = [];
        for (let t = 0, n = e.curves.length; t < n; t++) {
            const i = e.curves[t];
            this.curves.push(i.clone())
        }
        return this.autoClose = e.autoClose, this
    }
    toJSON() {
        const e = super.toJSON();
        e.autoClose = this.autoClose, e.curves = [];
        for (let t = 0, n = this.curves.length; t < n; t++) {
            const i = this.curves[t];
            e.curves.push(i.toJSON())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
        for (let t = 0, n = e.curves.length; t < n; t++) {
            const i = e.curves[t];
            this.curves.push(new Ed[i.type]().fromJSON(i))
        }
        return this
    }
}
class jo extends Tx {
    constructor(e) {
        super(), this.type = "Path", this.currentPoint = new te, e && this.setFromPoints(e)
    }
    setFromPoints(e) {
        this.moveTo(e[0].x, e[0].y);
        for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
        return this
    }
    moveTo(e, t) {
        return this.currentPoint.set(e, t), this
    }
    lineTo(e, t) {
        const n = new ma(this.currentPoint.clone(), new te(e, t));
        return this.curves.push(n), this.currentPoint.set(e, t), this
    }
    quadraticCurveTo(e, t, n, i) {
        const s = new pc(this.currentPoint.clone(), new te(e, t), new te(n, i));
        return this.curves.push(s), this.currentPoint.set(n, i), this
    }
    bezierCurveTo(e, t, n, i, s, r) {
        const a = new fc(this.currentPoint.clone(), new te(e, t), new te(n, i), new te(s, r));
        return this.curves.push(a), this.currentPoint.set(s, r), this
    }
    splineThru(e) {
        const t = [this.currentPoint.clone()].concat(e),
            n = new mc(t);
        return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this
    }
    arc(e, t, n, i, s, r) {
        const a = this.currentPoint.x,
            c = this.currentPoint.y;
        return this.absarc(e + a, t + c, n, i, s, r), this
    }
    absarc(e, t, n, i, s, r) {
        return this.absellipse(e, t, n, n, i, s, r), this
    }
    ellipse(e, t, n, i, s, r, a, c) {
        const h = this.currentPoint.x,
            d = this.currentPoint.y;
        return this.absellipse(e + h, t + d, n, i, s, r, a, c), this
    }
    absellipse(e, t, n, i, s, r, a, c) {
        const h = new pa(e, t, n, i, s, r, a, c);
        if (this.curves.length > 0) {
            const l = h.getPoint(0);
            l.equals(this.currentPoint) || this.lineTo(l.x, l.y)
        }
        this.curves.push(h);
        const d = h.getPoint(1);
        return this.currentPoint.copy(d), this
    }
    copy(e) {
        return super.copy(e), this.currentPoint.copy(e.currentPoint), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.currentPoint = this.currentPoint.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this
    }
}
class gc extends tt {
    constructor(e = 1, t = 1, n = 1, i = 8, s = 1, r = !1, a = 0, c = Math.PI * 2) {
        super(), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: n,
            radialSegments: i,
            heightSegments: s,
            openEnded: r,
            thetaStart: a,
            thetaLength: c
        };
        const h = this;
        i = Math.floor(i), s = Math.floor(s);
        const d = [],
            l = [],
            u = [],
            f = [];
        let g = 0;
        const p = [],
            m = n / 2;
        let _ = 0;
        y(), r === !1 && (e > 0 && b(!0), t > 0 && b(!1)), this.setIndex(d), this.setAttribute("position", new mt(l, 3)), this.setAttribute("normal", new mt(u, 3)), this.setAttribute("uv", new mt(f, 2));

        function y() {
            const w = new C,
                x = new C;
            let E = 0;
            const T = (t - e) / n;
            for (let R = 0; R <= s; R++) {
                const I = [],
                    B = R / s,
                    v = B * (t - e) + e;
                for (let L = 0; L <= i; L++) {
                    const U = L / i,
                        D = U * c + a,
                        O = Math.sin(D),
                        N = Math.cos(D);
                    x.x = v * O, x.y = -B * n + m, x.z = v * N, l.push(x.x, x.y, x.z), w.set(O, T, N).normalize(), u.push(w.x, w.y, w.z), f.push(U, 1 - B), I.push(g++)
                }
                p.push(I)
            }
            for (let R = 0; R < i; R++)
                for (let I = 0; I < s; I++) {
                    const B = p[I][R],
                        v = p[I + 1][R],
                        L = p[I + 1][R + 1],
                        U = p[I][R + 1];
                    d.push(B, v, U), d.push(v, L, U), E += 6
                }
            h.addGroup(_, E, 0), _ += E
        }

        function b(w) {
            const x = g,
                E = new te,
                T = new C;
            let R = 0;
            const I = w === !0 ? e : t,
                B = w === !0 ? 1 : -1;
            for (let L = 1; L <= i; L++) l.push(0, m * B, 0), u.push(0, B, 0), f.push(.5, .5), g++;
            const v = g;
            for (let L = 0; L <= i; L++) {
                const D = L / i * c + a,
                    O = Math.cos(D),
                    N = Math.sin(D);
                T.x = I * N, T.y = m * B, T.z = I * O, l.push(T.x, T.y, T.z), u.push(0, B, 0), E.x = O * .5 + .5, E.y = N * .5 * B + .5, f.push(E.x, E.y), g++
            }
            for (let L = 0; L < i; L++) {
                const U = x + L,
                    D = v + L;
                w === !0 ? d.push(D, D + 1, U) : d.push(D + 1, D, U), R += 3
            }
            h.addGroup(_, R, w === !0 ? 1 : 2), _ += R
        }
    }
    static fromJSON(e) {
        return new gc(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength)
    }
}
class yi extends jo {
    constructor(e) {
        super(e), this.uuid = cn(), this.type = "Shape", this.holes = []
    }
    getPointsHoles(e) {
        const t = [];
        for (let n = 0, i = this.holes.length; n < i; n++) t[n] = this.holes[n].getPoints(e);
        return t
    }
    extractPoints(e) {
        return {
            shape: this.getPoints(e),
            holes: this.getPointsHoles(e)
        }
    }
    copy(e) {
        super.copy(e), this.holes = [];
        for (let t = 0, n = e.holes.length; t < n; t++) {
            const i = e.holes[t];
            this.holes.push(i.clone())
        }
        return this
    }
    toJSON() {
        const e = super.toJSON();
        e.uuid = this.uuid, e.holes = [];
        for (let t = 0, n = this.holes.length; t < n; t++) {
            const i = this.holes[t];
            e.holes.push(i.toJSON())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
        for (let t = 0, n = e.holes.length; t < n; t++) {
            const i = e.holes[t];
            this.holes.push(new jo().fromJSON(i))
        }
        return this
    }
}
const Ex = {
    triangulate: function(o, e, t = 2) {
        const n = e && e.length,
            i = n ? e[0] * t : o.length;
        let s = Ad(o, 0, i, t, !0);
        const r = [];
        if (!s || s.next === s.prev) return r;
        let a, c, h, d, l, u, f;
        if (n && (s = Px(o, e, s, t)), o.length > 80 * t) {
            a = h = o[0], c = d = o[1];
            for (let g = t; g < i; g += t) l = o[g], u = o[g + 1], l < a && (a = l), u < c && (c = u), l > h && (h = l), u > d && (d = u);
            f = Math.max(h - a, d - c), f = f !== 0 ? 1 / f : 0
        }
        return Hr(s, r, t, a, c, f), r
    }
};

function Ad(o, e, t, n, i) {
    let s, r;
    if (i === Gx(o, e, t, n) > 0)
        for (s = e; s < t; s += n) r = pu(s, o[s], o[s + 1], r);
    else
        for (s = t - n; s >= e; s -= n) r = pu(s, o[s], o[s + 1], r);
    return r && ga(r, r.next) && (Gr(r), r = r.next), r
}

function Mi(o, e) {
    if (!o) return o;
    e || (e = o);
    let t = o,
        n;
    do
        if (n = !1, !t.steiner && (ga(t, t.next) || ot(t.prev, t, t.next) === 0)) {
            if (Gr(t), t = e = t.prev, t === t.next) break;
            n = !0
        } else t = t.next; while (n || t !== e);
    return e
}

function Hr(o, e, t, n, i, s, r) {
    if (!o) return;
    !r && s && Bx(o, n, i, s);
    let a = o,
        c, h;
    for (; o.prev !== o.next;) {
        if (c = o.prev, h = o.next, s ? Cx(o, n, i, s) : Ax(o)) {
            e.push(c.i / t), e.push(o.i / t), e.push(h.i / t), Gr(o), o = h.next, a = h.next;
            continue
        }
        if (o = h, o === a) {
            r ? r === 1 ? (o = Lx(Mi(o), e, t), Hr(o, e, t, n, i, s, 2)) : r === 2 && Rx(o, e, t, n, i, s) : Hr(Mi(o), e, t, n, i, s, 1);
            break
        }
    }
}

function Ax(o) {
    const e = o.prev,
        t = o,
        n = o.next;
    if (ot(e, t, n) >= 0) return !1;
    let i = o.next.next;
    for (; i !== o.prev;) {
        if (ks(e.x, e.y, t.x, t.y, n.x, n.y, i.x, i.y) && ot(i.prev, i, i.next) >= 0) return !1;
        i = i.next
    }
    return !0
}

function Cx(o, e, t, n) {
    const i = o.prev,
        s = o,
        r = o.next;
    if (ot(i, s, r) >= 0) return !1;
    const a = i.x < s.x ? i.x < r.x ? i.x : r.x : s.x < r.x ? s.x : r.x,
        c = i.y < s.y ? i.y < r.y ? i.y : r.y : s.y < r.y ? s.y : r.y,
        h = i.x > s.x ? i.x > r.x ? i.x : r.x : s.x > r.x ? s.x : r.x,
        d = i.y > s.y ? i.y > r.y ? i.y : r.y : s.y > r.y ? s.y : r.y,
        l = Rl(a, c, e, t, n),
        u = Rl(h, d, e, t, n);
    let f = o.prevZ,
        g = o.nextZ;
    for (; f && f.z >= l && g && g.z <= u;) {
        if (f !== o.prev && f !== o.next && ks(i.x, i.y, s.x, s.y, r.x, r.y, f.x, f.y) && ot(f.prev, f, f.next) >= 0 || (f = f.prevZ, g !== o.prev && g !== o.next && ks(i.x, i.y, s.x, s.y, r.x, r.y, g.x, g.y) && ot(g.prev, g, g.next) >= 0)) return !1;
        g = g.nextZ
    }
    for (; f && f.z >= l;) {
        if (f !== o.prev && f !== o.next && ks(i.x, i.y, s.x, s.y, r.x, r.y, f.x, f.y) && ot(f.prev, f, f.next) >= 0) return !1;
        f = f.prevZ
    }
    for (; g && g.z <= u;) {
        if (g !== o.prev && g !== o.next && ks(i.x, i.y, s.x, s.y, r.x, r.y, g.x, g.y) && ot(g.prev, g, g.next) >= 0) return !1;
        g = g.nextZ
    }
    return !0
}

function Lx(o, e, t) {
    let n = o;
    do {
        const i = n.prev,
            s = n.next.next;
        !ga(i, s) && Cd(i, n, n.next, s) && Ur(i, s) && Ur(s, i) && (e.push(i.i / t), e.push(n.i / t), e.push(s.i / t), Gr(n), Gr(n.next), n = o = s), n = n.next
    } while (n !== o);
    return Mi(n)
}

function Rx(o, e, t, n, i, s) {
    let r = o;
    do {
        let a = r.next.next;
        for (; a !== r.prev;) {
            if (r.i !== a.i && zx(r, a)) {
                let c = Ld(r, a);
                r = Mi(r, r.next), c = Mi(c, c.next), Hr(r, e, t, n, i, s), Hr(c, e, t, n, i, s);
                return
            }
            a = a.next
        }
        r = r.next
    } while (r !== o)
}

function Px(o, e, t, n) {
    const i = [];
    let s, r, a, c, h;
    for (s = 0, r = e.length; s < r; s++) a = e[s] * n, c = s < r - 1 ? e[s + 1] * n : o.length, h = Ad(o, a, c, n, !1), h === h.next && (h.steiner = !0), i.push(Nx(h));
    for (i.sort(Ix), s = 0; s < i.length; s++) Dx(i[s], t), t = Mi(t, t.next);
    return t
}

function Ix(o, e) {
    return o.x - e.x
}

function Dx(o, e) {
    if (e = kx(o, e), e) {
        const t = Ld(e, o);
        Mi(e, e.next), Mi(t, t.next)
    }
}

function kx(o, e) {
    let t = e;
    const n = o.x,
        i = o.y;
    let s = -1 / 0,
        r;
    do {
        if (i <= t.y && i >= t.next.y && t.next.y !== t.y) {
            const u = t.x + (i - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
            if (u <= n && u > s) {
                if (s = u, u === n) {
                    if (i === t.y) return t;
                    if (i === t.next.y) return t.next
                }
                r = t.x < t.next.x ? t : t.next
            }
        }
        t = t.next
    } while (t !== e);
    if (!r) return null;
    if (n === s) return r;
    const a = r,
        c = r.x,
        h = r.y;
    let d = 1 / 0,
        l;
    t = r;
    do n >= t.x && t.x >= c && n !== t.x && ks(i < h ? n : s, i, c, h, i < h ? s : n, i, t.x, t.y) && (l = Math.abs(i - t.y) / (n - t.x), Ur(t, o) && (l < d || l === d && (t.x > r.x || t.x === r.x && Fx(r, t))) && (r = t, d = l)), t = t.next; while (t !== a);
    return r
}

function Fx(o, e) {
    return ot(o.prev, o, e.prev) < 0 && ot(e.next, o, o.next) < 0
}

function Bx(o, e, t, n) {
    let i = o;
    do i.z === null && (i.z = Rl(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== o);
    i.prevZ.nextZ = null, i.prevZ = null, Ox(i)
}

function Ox(o) {
    let e, t, n, i, s, r, a, c, h = 1;
    do {
        for (t = o, o = null, s = null, r = 0; t;) {
            for (r++, n = t, a = 0, e = 0; e < h && (a++, n = n.nextZ, !!n); e++);
            for (c = h; a > 0 || c > 0 && n;) a !== 0 && (c === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, c--), s ? s.nextZ = i : o = i, i.prevZ = s, s = i;
            t = n
        }
        s.nextZ = null, h *= 2
    } while (r > 1);
    return o
}

function Rl(o, e, t, n, i) {
    return o = 32767 * (o - t) * i, e = 32767 * (e - n) * i, o = (o | o << 8) & 16711935, o = (o | o << 4) & 252645135, o = (o | o << 2) & 858993459, o = (o | o << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, o | e << 1
}

function Nx(o) {
    let e = o,
        t = o;
    do(e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next; while (e !== o);
    return t
}

function ks(o, e, t, n, i, s, r, a) {
    return (i - r) * (e - a) - (o - r) * (s - a) >= 0 && (o - r) * (n - a) - (t - r) * (e - a) >= 0 && (t - r) * (s - a) - (i - r) * (n - a) >= 0
}

function zx(o, e) {
    return o.next.i !== e.i && o.prev.i !== e.i && !Hx(o, e) && (Ur(o, e) && Ur(e, o) && Ux(o, e) && (ot(o.prev, o, e.prev) || ot(o, e.prev, e)) || ga(o, e) && ot(o.prev, o, o.next) > 0 && ot(e.prev, e, e.next) > 0)
}

function ot(o, e, t) {
    return (e.y - o.y) * (t.x - e.x) - (e.x - o.x) * (t.y - e.y)
}

function ga(o, e) {
    return o.x === e.x && o.y === e.y
}

function Cd(o, e, t, n) {
    const i = Do(ot(o, e, t)),
        s = Do(ot(o, e, n)),
        r = Do(ot(t, n, o)),
        a = Do(ot(t, n, e));
    return !!(i !== s && r !== a || i === 0 && Io(o, t, e) || s === 0 && Io(o, n, e) || r === 0 && Io(t, o, n) || a === 0 && Io(t, e, n))
}

function Io(o, e, t) {
    return e.x <= Math.max(o.x, t.x) && e.x >= Math.min(o.x, t.x) && e.y <= Math.max(o.y, t.y) && e.y >= Math.min(o.y, t.y)
}

function Do(o) {
    return o > 0 ? 1 : o < 0 ? -1 : 0
}

function Hx(o, e) {
    let t = o;
    do {
        if (t.i !== o.i && t.next.i !== o.i && t.i !== e.i && t.next.i !== e.i && Cd(t, t.next, o, e)) return !0;
        t = t.next
    } while (t !== o);
    return !1
}

function Ur(o, e) {
    return ot(o.prev, o, o.next) < 0 ? ot(o, e, o.next) >= 0 && ot(o, o.prev, e) >= 0 : ot(o, e, o.prev) < 0 || ot(o, o.next, e) < 0
}

function Ux(o, e) {
    let t = o,
        n = !1;
    const i = (o.x + e.x) / 2,
        s = (o.y + e.y) / 2;
    do t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next; while (t !== o);
    return n
}

function Ld(o, e) {
    const t = new Pl(o.i, o.x, o.y),
        n = new Pl(e.i, e.x, e.y),
        i = o.next,
        s = e.prev;
    return o.next = e, e.prev = o, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n
}

function pu(o, e, t, n) {
    const i = new Pl(o, e, t);
    return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i
}

function Gr(o) {
    o.next.prev = o.prev, o.prev.next = o.next, o.prevZ && (o.prevZ.nextZ = o.nextZ), o.nextZ && (o.nextZ.prevZ = o.prevZ)
}

function Pl(o, e, t) {
    this.i = o, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
}

function Gx(o, e, t, n) {
    let i = 0;
    for (let s = e, r = t - n; s < t; s += n) i += (o[r] - o[s]) * (o[s + 1] + o[r + 1]), r = s;
    return i
}
class Kn {
    static area(e) {
        const t = e.length;
        let n = 0;
        for (let i = t - 1, s = 0; s < t; i = s++) n += e[i].x * e[s].y - e[s].x * e[i].y;
        return n * .5
    }
    static isClockWise(e) {
        return Kn.area(e) < 0
    }
    static triangulateShape(e, t) {
        const n = [],
            i = [],
            s = [];
        mu(e), gu(n, e);
        let r = e.length;
        t.forEach(mu);
        for (let c = 0; c < t.length; c++) i.push(r), r += t[c].length, gu(n, t[c]);
        const a = Ex.triangulate(n, i);
        for (let c = 0; c < a.length; c += 3) s.push(a.slice(c, c + 3));
        return s
    }
}

function mu(o) {
    const e = o.length;
    e > 2 && o[e - 1].equals(o[0]) && o.pop()
}

function gu(o, e) {
    for (let t = 0; t < e.length; t++) o.push(e[t].x), o.push(e[t].y)
}
class or extends tt {
    constructor(e = new yi([new te(.5, .5), new te(-.5, .5), new te(-.5, -.5), new te(.5, -.5)]), t = {}) {
        super(), this.type = "ExtrudeGeometry", this.parameters = {
            shapes: e,
            options: t
        }, e = Array.isArray(e) ? e : [e];
        const n = this,
            i = [],
            s = [];
        for (let a = 0, c = e.length; a < c; a++) {
            const h = e[a];
            r(h)
        }
        this.setAttribute("position", new mt(i, 3)), this.setAttribute("uv", new mt(s, 2)), this.computeVertexNormals();

        function r(a) {
            const c = [],
                h = t.curveSegments !== void 0 ? t.curveSegments : 12,
                d = t.steps !== void 0 ? t.steps : 1;
            let l = t.depth !== void 0 ? t.depth : 1,
                u = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0,
                f = t.bevelThickness !== void 0 ? t.bevelThickness : .2,
                g = t.bevelSize !== void 0 ? t.bevelSize : f - .1,
                p = t.bevelOffset !== void 0 ? t.bevelOffset : 0,
                m = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
            const _ = t.extrudePath,
                y = t.UVGenerator !== void 0 ? t.UVGenerator : Vx;
            t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l = t.amount);
            let b, w = !1,
                x, E, T, R;
            _ && (b = _.getSpacedPoints(d), w = !0, u = !1, x = _.computeFrenetFrames(d, !1), E = new C, T = new C, R = new C), u || (m = 0, f = 0, g = 0, p = 0);
            const I = a.extractPoints(h);
            let B = I.shape;
            const v = I.holes;
            if (!Kn.isClockWise(B)) {
                B = B.reverse();
                for (let j = 0, K = v.length; j < K; j++) {
                    const ne = v[j];
                    Kn.isClockWise(ne) && (v[j] = ne.reverse())
                }
            }
            const U = Kn.triangulateShape(B, v),
                D = B;
            for (let j = 0, K = v.length; j < K; j++) {
                const ne = v[j];
                B = B.concat(ne)
            }

            function O(j, K, ne) {
                return K || console.error("THREE.ExtrudeGeometry: vec does not exist"), K.clone().multiplyScalar(ne).add(j)
            }
            const N = B.length,
                H = U.length;

            function F(j, K, ne) {
                let me, de, Ce;
                const we = j.x - K.x,
                    ve = j.y - K.y,
                    st = ne.x - j.x,
                    Ze = ne.y - j.y,
                    A = we * we + ve * ve,
                    M = we * Ze - ve * st;
                if (Math.abs(M) > Number.EPSILON) {
                    const W = Math.sqrt(A),
                        ee = Math.sqrt(st * st + Ze * Ze),
                        ce = K.x - ve / W,
                        fe = K.y + we / W,
                        be = ne.x - Ze / ee,
                        q = ne.y + st / ee,
                        Ie = ((be - ce) * Ze - (q - fe) * st) / (we * Ze - ve * st);
                    me = ce + we * Ie - j.x, de = fe + ve * Ie - j.y;
                    const ke = me * me + de * de;
                    if (ke <= 2) return new te(me, de);
                    Ce = Math.sqrt(ke / 2)
                } else {
                    let W = !1;
                    we > Number.EPSILON ? st > Number.EPSILON && (W = !0) : we < -Number.EPSILON ? st < -Number.EPSILON && (W = !0) : Math.sign(ve) === Math.sign(Ze) && (W = !0), W ? (me = -ve, de = we, Ce = Math.sqrt(A)) : (me = we, de = ve, Ce = Math.sqrt(A / 2))
                }
                return new te(me / Ce, de / Ce)
            }
            const X = [];
            for (let j = 0, K = D.length, ne = K - 1, me = j + 1; j < K; j++, ne++, me++) ne === K && (ne = 0), me === K && (me = 0), X[j] = F(D[j], D[ne], D[me]);
            const Z = [];
            let Q, $ = X.concat();
            for (let j = 0, K = v.length; j < K; j++) {
                const ne = v[j];
                Q = [];
                for (let me = 0, de = ne.length, Ce = de - 1, we = me + 1; me < de; me++, Ce++, we++) Ce === de && (Ce = 0), we === de && (we = 0), Q[me] = F(ne[me], ne[Ce], ne[we]);
                Z.push(Q), $ = $.concat(Q)
            }
            for (let j = 0; j < m; j++) {
                const K = j / m,
                    ne = f * Math.cos(K * Math.PI / 2),
                    me = g * Math.sin(K * Math.PI / 2) + p;
                for (let de = 0, Ce = D.length; de < Ce; de++) {
                    const we = O(D[de], X[de], me);
                    We(we.x, we.y, -ne)
                }
                for (let de = 0, Ce = v.length; de < Ce; de++) {
                    const we = v[de];
                    Q = Z[de];
                    for (let ve = 0, st = we.length; ve < st; ve++) {
                        const Ze = O(we[ve], Q[ve], me);
                        We(Ze.x, Ze.y, -ne)
                    }
                }
            }
            const ue = g + p;
            for (let j = 0; j < N; j++) {
                const K = u ? O(B[j], $[j], ue) : B[j];
                w ? (T.copy(x.normals[0]).multiplyScalar(K.x), E.copy(x.binormals[0]).multiplyScalar(K.y), R.copy(b[0]).add(T).add(E), We(R.x, R.y, R.z)) : We(K.x, K.y, 0)
            }
            for (let j = 1; j <= d; j++)
                for (let K = 0; K < N; K++) {
                    const ne = u ? O(B[K], $[K], ue) : B[K];
                    w ? (T.copy(x.normals[j]).multiplyScalar(ne.x), E.copy(x.binormals[j]).multiplyScalar(ne.y), R.copy(b[j]).add(T).add(E), We(R.x, R.y, R.z)) : We(ne.x, ne.y, l / d * j)
                }
            for (let j = m - 1; j >= 0; j--) {
                const K = j / m,
                    ne = f * Math.cos(K * Math.PI / 2),
                    me = g * Math.sin(K * Math.PI / 2) + p;
                for (let de = 0, Ce = D.length; de < Ce; de++) {
                    const we = O(D[de], X[de], me);
                    We(we.x, we.y, l + ne)
                }
                for (let de = 0, Ce = v.length; de < Ce; de++) {
                    const we = v[de];
                    Q = Z[de];
                    for (let ve = 0, st = we.length; ve < st; ve++) {
                        const Ze = O(we[ve], Q[ve], me);
                        w ? We(Ze.x, Ze.y + b[d - 1].y, b[d - 1].x + ne) : We(Ze.x, Ze.y, l + ne)
                    }
                }
            }
            Me(), xe();

            function Me() {
                const j = i.length / 3;
                if (u) {
                    let K = 0,
                        ne = N * K;
                    for (let me = 0; me < H; me++) {
                        const de = U[me];
                        Re(de[2] + ne, de[1] + ne, de[0] + ne)
                    }
                    K = d + m * 2, ne = N * K;
                    for (let me = 0; me < H; me++) {
                        const de = U[me];
                        Re(de[0] + ne, de[1] + ne, de[2] + ne)
                    }
                } else {
                    for (let K = 0; K < H; K++) {
                        const ne = U[K];
                        Re(ne[2], ne[1], ne[0])
                    }
                    for (let K = 0; K < H; K++) {
                        const ne = U[K];
                        Re(ne[0] + N * d, ne[1] + N * d, ne[2] + N * d)
                    }
                }
                n.addGroup(j, i.length / 3 - j, 0)
            }

            function xe() {
                const j = i.length / 3;
                let K = 0;
                Y(D, K), K += D.length;
                for (let ne = 0, me = v.length; ne < me; ne++) {
                    const de = v[ne];
                    Y(de, K), K += de.length
                }
                n.addGroup(j, i.length / 3 - j, 1)
            }

            function Y(j, K) {
                let ne = j.length;
                for (; --ne >= 0;) {
                    const me = ne;
                    let de = ne - 1;
                    de < 0 && (de = j.length - 1);
                    for (let Ce = 0, we = d + m * 2; Ce < we; Ce++) {
                        const ve = N * Ce,
                            st = N * (Ce + 1),
                            Ze = K + me + ve,
                            A = K + de + ve,
                            M = K + de + st,
                            W = K + me + st;
                        Pe(Ze, A, M, W)
                    }
                }
            }

            function We(j, K, ne) {
                c.push(j), c.push(K), c.push(ne)
            }

            function Re(j, K, ne) {
                se(j), se(K), se(ne);
                const me = i.length / 3,
                    de = y.generateTopUV(n, i, me - 3, me - 2, me - 1);
                Be(de[0]), Be(de[1]), Be(de[2])
            }

            function Pe(j, K, ne, me) {
                se(j), se(K), se(me), se(K), se(ne), se(me);
                const de = i.length / 3,
                    Ce = y.generateSideWallUV(n, i, de - 6, de - 3, de - 2, de - 1);
                Be(Ce[0]), Be(Ce[1]), Be(Ce[3]), Be(Ce[1]), Be(Ce[2]), Be(Ce[3])
            }

            function se(j) {
                i.push(c[j * 3 + 0]), i.push(c[j * 3 + 1]), i.push(c[j * 3 + 2])
            }

            function Be(j) {
                s.push(j.x), s.push(j.y)
            }
        }
    }
    toJSON() {
        const e = super.toJSON(),
            t = this.parameters.shapes,
            n = this.parameters.options;
        return Wx(t, n, e)
    }
    static fromJSON(e, t) {
        const n = [];
        for (let s = 0, r = e.shapes.length; s < r; s++) {
            const a = t[e.shapes[s]];
            n.push(a)
        }
        const i = e.options.extrudePath;
        return i !== void 0 && (e.options.extrudePath = new Ed[i.type]().fromJSON(i)), new or(n, e.options)
    }
}
const Vx = {
    generateTopUV: function(o, e, t, n, i) {
        const s = e[t * 3],
            r = e[t * 3 + 1],
            a = e[n * 3],
            c = e[n * 3 + 1],
            h = e[i * 3],
            d = e[i * 3 + 1];
        return [new te(s, r), new te(a, c), new te(h, d)]
    },
    generateSideWallUV: function(o, e, t, n, i, s) {
        const r = e[t * 3],
            a = e[t * 3 + 1],
            c = e[t * 3 + 2],
            h = e[n * 3],
            d = e[n * 3 + 1],
            l = e[n * 3 + 2],
            u = e[i * 3],
            f = e[i * 3 + 1],
            g = e[i * 3 + 2],
            p = e[s * 3],
            m = e[s * 3 + 1],
            _ = e[s * 3 + 2];
        return Math.abs(a - d) < Math.abs(r - h) ? [new te(r, 1 - c), new te(h, 1 - l), new te(u, 1 - g), new te(p, 1 - _)] : [new te(a, 1 - c), new te(d, 1 - l), new te(f, 1 - g), new te(m, 1 - _)]
    }
};

function Wx(o, e, t) {
    if (t.shapes = [], Array.isArray(o))
        for (let n = 0, i = o.length; n < i; n++) {
            const s = o[n];
            t.shapes.push(s.uuid)
        } else t.shapes.push(o.uuid);
    return e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t
}
class _c extends tt {
    constructor(e = new yi([new te(0, .5), new te(-.5, -.5), new te(.5, -.5)]), t = 12) {
        super(), this.type = "ShapeGeometry", this.parameters = {
            shapes: e,
            curveSegments: t
        };
        const n = [],
            i = [],
            s = [],
            r = [];
        let a = 0,
            c = 0;
        if (Array.isArray(e) === !1) h(e);
        else
            for (let d = 0; d < e.length; d++) h(e[d]), this.addGroup(a, c, d), a += c, c = 0;
        this.setIndex(n), this.setAttribute("position", new mt(i, 3)), this.setAttribute("normal", new mt(s, 3)), this.setAttribute("uv", new mt(r, 2));

        function h(d) {
            const l = i.length / 3,
                u = d.extractPoints(t);
            let f = u.shape;
            const g = u.holes;
            Kn.isClockWise(f) === !1 && (f = f.reverse());
            for (let m = 0, _ = g.length; m < _; m++) {
                const y = g[m];
                Kn.isClockWise(y) === !0 && (g[m] = y.reverse())
            }
            const p = Kn.triangulateShape(f, g);
            for (let m = 0, _ = g.length; m < _; m++) {
                const y = g[m];
                f = f.concat(y)
            }
            for (let m = 0, _ = f.length; m < _; m++) {
                const y = f[m];
                i.push(y.x, y.y, 0), s.push(0, 0, 1), r.push(y.x, y.y)
            }
            for (let m = 0, _ = p.length; m < _; m++) {
                const y = p[m],
                    b = y[0] + l,
                    w = y[1] + l,
                    x = y[2] + l;
                n.push(b, w, x), c += 3
            }
        }
    }
    toJSON() {
        const e = super.toJSON(),
            t = this.parameters.shapes;
        return qx(t, e)
    }
    static fromJSON(e, t) {
        const n = [];
        for (let i = 0, s = e.shapes.length; i < s; i++) {
            const r = t[e.shapes[i]];
            n.push(r)
        }
        return new _c(n, e.curveSegments)
    }
}

function qx(o, e) {
    if (e.shapes = [], Array.isArray(o))
        for (let t = 0, n = o.length; t < n; t++) {
            const i = o[t];
            e.shapes.push(i.uuid)
        } else e.shapes.push(o.uuid);
    return e
}
class Rd extends dt {
    constructor(e) {
        super(), this.type = "ShadowMaterial", this.color = new ie(0), this.transparent = !0, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this
    }
}
Rd.prototype.isShadowMaterial = !0;
class Pd extends Ot {
    constructor(e) {
        super(e), this.type = "RawShaderMaterial"
    }
}
Pd.prototype.isRawShaderMaterial = !0;
class ar extends dt {
    constructor(e) {
        super(), this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new ie(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ie(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = es, this.normalScale = new te(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.defines = {
            STANDARD: ""
        }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this
    }
}
ar.prototype.isMeshStandardMaterial = !0;
class Ei extends ar {
    constructor(e) {
        super(), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new te(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
            get: function() {
                return At(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
            },
            set: function(t) {
                this.ior = (1 + .4 * t) / (1 - .4 * t)
            }
        }), this.sheenColor = new ie(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new ie(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new ie(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._transmission = 0, this.setValues(e)
    }
    get sheen() {
        return this._sheen
    }
    set sheen(e) {
        this._sheen > 0 != e > 0 && this.version++, this._sheen = e
    }
    get clearcoat() {
        return this._clearcoat
    }
    set clearcoat(e) {
        this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e
    }
    get transmission() {
        return this._transmission
    }
    set transmission(e) {
        this._transmission > 0 != e > 0 && this.version++, this._transmission = e
    }
    copy(e) {
        return super.copy(e), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this
    }
}
Ei.prototype.isMeshPhysicalMaterial = !0;
class Id extends dt {
    constructor(e) {
        super(), this.type = "MeshPhongMaterial", this.color = new ie(16777215), this.specular = new ie(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ie(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = es, this.normalScale = new te(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = na, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this
    }
}
Id.prototype.isMeshPhongMaterial = !0;
class Dd extends dt {
    constructor(e) {
        super(), this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.color = new ie(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ie(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = es, this.normalScale = new te(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
    }
}
Dd.prototype.isMeshToonMaterial = !0;
class kd extends dt {
    constructor(e) {
        super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = es, this.normalScale = new te(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.flatShading = !1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this
    }
}
kd.prototype.isMeshNormalMaterial = !0;
class Fd extends dt {
    constructor(e) {
        super(), this.type = "MeshLambertMaterial", this.color = new ie(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ie(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = na, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
    }
}
Fd.prototype.isMeshLambertMaterial = !0;
class Fs extends dt {
    constructor(e) {
        super(), this.defines = {
            MATCAP: ""
        }, this.type = "MeshMatcapMaterial", this.color = new ie(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = es, this.normalScale = new te(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.defines = {
            MATCAP: ""
        }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this
    }
}
Fs.prototype.isMeshMatcapMaterial = !0;
class Bd extends os {
    constructor(e) {
        super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
    }
}
Bd.prototype.isLineDashedMaterial = !0;
const Xx = {
    ShadowMaterial: Rd,
    SpriteMaterial: Pn,
    RawShaderMaterial: Pd,
    ShaderMaterial: Ot,
    PointsMaterial: fa,
    MeshPhysicalMaterial: Ei,
    MeshStandardMaterial: ar,
    MeshPhongMaterial: Id,
    MeshToonMaterial: Dd,
    MeshNormalMaterial: kd,
    MeshLambertMaterial: Fd,
    MeshDepthMaterial: oc,
    MeshDistanceMaterial: ac,
    MeshBasicMaterial: ht,
    MeshMatcapMaterial: Fs,
    LineDashedMaterial: Bd,
    LineBasicMaterial: os,
    Material: dt
};
dt.fromType = function(o) {
    return new Xx[o]
};
const it = {
    arraySlice: function(o, e, t) {
        return it.isTypedArray(o) ? new o.constructor(o.subarray(e, t !== void 0 ? t : o.length)) : o.slice(e, t)
    },
    convertArray: function(o, e, t) {
        return !o || !t && o.constructor === e ? o : typeof e.BYTES_PER_ELEMENT == "number" ? new e(o) : Array.prototype.slice.call(o)
    },
    isTypedArray: function(o) {
        return ArrayBuffer.isView(o) && !(o instanceof DataView)
    },
    getKeyframeOrder: function(o) {
        function e(i, s) {
            return o[i] - o[s]
        }
        const t = o.length,
            n = new Array(t);
        for (let i = 0; i !== t; ++i) n[i] = i;
        return n.sort(e), n
    },
    sortedArray: function(o, e, t) {
        const n = o.length,
            i = new o.constructor(n);
        for (let s = 0, r = 0; r !== n; ++s) {
            const a = t[s] * e;
            for (let c = 0; c !== e; ++c) i[r++] = o[a + c]
        }
        return i
    },
    flattenJSON: function(o, e, t, n) {
        let i = 1,
            s = o[0];
        for (; s !== void 0 && s[n] === void 0;) s = o[i++];
        if (s === void 0) return;
        let r = s[n];
        if (r !== void 0)
            if (Array.isArray(r))
                do r = s[n], r !== void 0 && (e.push(s.time), t.push.apply(t, r)), s = o[i++]; while (s !== void 0);
            else if (r.toArray !== void 0)
            do r = s[n], r !== void 0 && (e.push(s.time), r.toArray(t, t.length)), s = o[i++]; while (s !== void 0);
        else
            do r = s[n], r !== void 0 && (e.push(s.time), t.push(r)), s = o[i++]; while (s !== void 0)
    },
    subclip: function(o, e, t, n, i = 30) {
        const s = o.clone();
        s.name = e;
        const r = [];
        for (let c = 0; c < s.tracks.length; ++c) {
            const h = s.tracks[c],
                d = h.getValueSize(),
                l = [],
                u = [];
            for (let f = 0; f < h.times.length; ++f) {
                const g = h.times[f] * i;
                if (!(g < t || g >= n)) {
                    l.push(h.times[f]);
                    for (let p = 0; p < d; ++p) u.push(h.values[f * d + p])
                }
            }
            l.length !== 0 && (h.times = it.convertArray(l, h.times.constructor), h.values = it.convertArray(u, h.values.constructor), r.push(h))
        }
        s.tracks = r;
        let a = 1 / 0;
        for (let c = 0; c < s.tracks.length; ++c) a > s.tracks[c].times[0] && (a = s.tracks[c].times[0]);
        for (let c = 0; c < s.tracks.length; ++c) s.tracks[c].shift(-1 * a);
        return s.resetDuration(), s
    },
    makeClipAdditive: function(o, e = 0, t = o, n = 30) {
        n <= 0 && (n = 30);
        const i = t.tracks.length,
            s = e / n;
        for (let r = 0; r < i; ++r) {
            const a = t.tracks[r],
                c = a.ValueTypeName;
            if (c === "bool" || c === "string") continue;
            const h = o.tracks.find(function(_) {
                return _.name === a.name && _.ValueTypeName === c
            });
            if (h === void 0) continue;
            let d = 0;
            const l = a.getValueSize();
            a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = l / 3);
            let u = 0;
            const f = h.getValueSize();
            h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (u = f / 3);
            const g = a.times.length - 1;
            let p;
            if (s <= a.times[0]) {
                const _ = d,
                    y = l - d;
                p = it.arraySlice(a.values, _, y)
            } else if (s >= a.times[g]) {
                const _ = g * l + d,
                    y = _ + l - d;
                p = it.arraySlice(a.values, _, y)
            } else {
                const _ = a.createInterpolant(),
                    y = d,
                    b = l - d;
                _.evaluate(s), p = it.arraySlice(_.resultBuffer, y, b)
            }
            c === "quaternion" && new Ut().fromArray(p).normalize().conjugate().toArray(p);
            const m = h.times.length;
            for (let _ = 0; _ < m; ++_) {
                const y = _ * f + u;
                if (c === "quaternion") Ut.multiplyQuaternionsFlat(h.values, y, p, 0, h.values, y);
                else {
                    const b = f - u * 2;
                    for (let w = 0; w < b; ++w) h.values[y + w] -= p[w]
                }
            }
        }
        return o.blendMode = $u, o
    }
};
class $n {
    constructor(e, t, n, i) {
        this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {}
    }
    evaluate(e) {
        const t = this.parameterPositions;
        let n = this._cachedIndex,
            i = t[n],
            s = t[n - 1];
        e: {
            t: {
                let r;n: {
                    i: if (!(e < i)) {
                        for (let a = n + 2;;) {
                            if (i === void 0) {
                                if (e < s) break i;
                                return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, s)
                            }
                            if (n === a) break;
                            if (s = i, i = t[++n], e < i) break t
                        }
                        r = t.length;
                        break n
                    }if (!(e >= s)) {
                        const a = t[1];
                        e < a && (n = 2, s = a);
                        for (let c = n - 2;;) {
                            if (s === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
                            if (n === c) break;
                            if (i = s, s = t[--n - 1], e >= s) break t
                        }
                        r = n, n = 0;
                        break n
                    }
                    break e
                }
                for (; n < r;) {
                    const a = n + r >>> 1;
                    e < t[a] ? r = a : n = a + 1
                }
                if (i = t[n], s = t[n - 1], s === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
                if (i === void 0) return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, s, e)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, s, i)
        }
        return this.interpolate_(n, s, e, i)
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_
    }
    copySampleValue_(e) {
        const t = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            s = e * i;
        for (let r = 0; r !== i; ++r) t[r] = n[s + r];
        return t
    }
    interpolate_() {
        throw new Error("call to abstract method")
    }
    intervalChanged_() {}
}
$n.prototype.beforeStart_ = $n.prototype.copySampleValue_;
$n.prototype.afterEnd_ = $n.prototype.copySampleValue_;
class jx extends $n {
    constructor(e, t, n, i) {
        super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
            endingStart: Ps,
            endingEnd: Ps
        }
    }
    intervalChanged_(e, t, n) {
        const i = this.parameterPositions;
        let s = e - 2,
            r = e + 1,
            a = i[s],
            c = i[r];
        if (a === void 0) switch (this.getSettings_().endingStart) {
            case Is:
                s = e, a = 2 * t - n;
                break;
            case Wo:
                s = i.length - 2, a = t + i[s] - i[s + 1];
                break;
            default:
                s = e, a = n
        }
        if (c === void 0) switch (this.getSettings_().endingEnd) {
            case Is:
                r = e, c = 2 * n - t;
                break;
            case Wo:
                r = 1, c = n + i[1] - i[0];
                break;
            default:
                r = e - 1, c = t
        }
        const h = (n - t) * .5,
            d = this.valueSize;
        this._weightPrev = h / (t - a), this._weightNext = h / (c - n), this._offsetPrev = s * d, this._offsetNext = r * d
    }
    interpolate_(e, t, n, i) {
        const s = this.resultBuffer,
            r = this.sampleValues,
            a = this.valueSize,
            c = e * a,
            h = c - a,
            d = this._offsetPrev,
            l = this._offsetNext,
            u = this._weightPrev,
            f = this._weightNext,
            g = (n - t) / (i - t),
            p = g * g,
            m = p * g,
            _ = -u * m + 2 * u * p - u * g,
            y = (1 + u) * m + (-1.5 - 2 * u) * p + (-.5 + u) * g + 1,
            b = (-1 - f) * m + (1.5 + f) * p + .5 * g,
            w = f * m - f * p;
        for (let x = 0; x !== a; ++x) s[x] = _ * r[d + x] + y * r[h + x] + b * r[c + x] + w * r[l + x];
        return s
    }
}
class Od extends $n {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    interpolate_(e, t, n, i) {
        const s = this.resultBuffer,
            r = this.sampleValues,
            a = this.valueSize,
            c = e * a,
            h = c - a,
            d = (n - t) / (i - t),
            l = 1 - d;
        for (let u = 0; u !== a; ++u) s[u] = r[h + u] * l + r[c + u] * d;
        return s
    }
}
class Yx extends $n {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    interpolate_(e) {
        return this.copySampleValue_(e - 1)
    }
}
class Fn {
    constructor(e, t, n, i) {
        if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
        this.name = e, this.times = it.convertArray(t, this.TimeBufferType), this.values = it.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
    }
    static toJSON(e) {
        const t = e.constructor;
        let n;
        if (t.toJSON !== this.toJSON) n = t.toJSON(e);
        else {
            n = {
                name: e.name,
                times: it.convertArray(e.times, Array),
                values: it.convertArray(e.values, Array)
            };
            const i = e.getInterpolation();
            i !== e.DefaultInterpolation && (n.interpolation = i)
        }
        return n.type = e.ValueTypeName, n
    }
    InterpolantFactoryMethodDiscrete(e) {
        return new Yx(this.times, this.values, this.getValueSize(), e)
    }
    InterpolantFactoryMethodLinear(e) {
        return new Od(this.times, this.values, this.getValueSize(), e)
    }
    InterpolantFactoryMethodSmooth(e) {
        return new jx(this.times, this.values, this.getValueSize(), e)
    }
    setInterpolation(e) {
        let t;
        switch (e) {
            case Br:
                t = this.InterpolantFactoryMethodDiscrete;
                break;
            case Ys:
                t = this.InterpolantFactoryMethodLinear;
                break;
            case Ca:
                t = this.InterpolantFactoryMethodSmooth;
                break
        }
        if (t === void 0) {
            const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (this.createInterpolant === void 0)
                if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
                else throw new Error(n);
            return console.warn("THREE.KeyframeTrack:", n), this
        }
        return this.createInterpolant = t, this
    }
    getInterpolation() {
        switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return Br;
            case this.InterpolantFactoryMethodLinear:
                return Ys;
            case this.InterpolantFactoryMethodSmooth:
                return Ca
        }
    }
    getValueSize() {
        return this.values.length / this.times.length
    }
    shift(e) {
        if (e !== 0) {
            const t = this.times;
            for (let n = 0, i = t.length; n !== i; ++n) t[n] += e
        }
        return this
    }
    scale(e) {
        if (e !== 1) {
            const t = this.times;
            for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e
        }
        return this
    }
    trim(e, t) {
        const n = this.times,
            i = n.length;
        let s = 0,
            r = i - 1;
        for (; s !== i && n[s] < e;) ++s;
        for (; r !== -1 && n[r] > t;) --r;
        if (++r, s !== 0 || r !== i) {
            s >= r && (r = Math.max(r, 1), s = r - 1);
            const a = this.getValueSize();
            this.times = it.arraySlice(n, s, r), this.values = it.arraySlice(this.values, s * a, r * a)
        }
        return this
    }
    validate() {
        let e = !0;
        const t = this.getValueSize();
        t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
        const n = this.times,
            i = this.values,
            s = n.length;
        s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
        let r = null;
        for (let a = 0; a !== s; a++) {
            const c = n[a];
            if (typeof c == "number" && isNaN(c)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, c), e = !1;
                break
            }
            if (r !== null && r > c) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, a, c, r), e = !1;
                break
            }
            r = c
        }
        if (i !== void 0 && it.isTypedArray(i))
            for (let a = 0, c = i.length; a !== c; ++a) {
                const h = i[a];
                if (isNaN(h)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, h), e = !1;
                    break
                }
            }
        return e
    }
    optimize() {
        const e = it.arraySlice(this.times),
            t = it.arraySlice(this.values),
            n = this.getValueSize(),
            i = this.getInterpolation() === Ca,
            s = e.length - 1;
        let r = 1;
        for (let a = 1; a < s; ++a) {
            let c = !1;
            const h = e[a],
                d = e[a + 1];
            if (h !== d && (a !== 1 || h !== e[0]))
                if (i) c = !0;
                else {
                    const l = a * n,
                        u = l - n,
                        f = l + n;
                    for (let g = 0; g !== n; ++g) {
                        const p = t[l + g];
                        if (p !== t[u + g] || p !== t[f + g]) {
                            c = !0;
                            break
                        }
                    }
                }
            if (c) {
                if (a !== r) {
                    e[r] = e[a];
                    const l = a * n,
                        u = r * n;
                    for (let f = 0; f !== n; ++f) t[u + f] = t[l + f]
                }++r
            }
        }
        if (s > 0) {
            e[r] = e[s];
            for (let a = s * n, c = r * n, h = 0; h !== n; ++h) t[c + h] = t[a + h];
            ++r
        }
        return r !== e.length ? (this.times = it.arraySlice(e, 0, r), this.values = it.arraySlice(t, 0, r * n)) : (this.times = e, this.values = t), this
    }
    clone() {
        const e = it.arraySlice(this.times, 0),
            t = it.arraySlice(this.values, 0),
            n = this.constructor,
            i = new n(this.name, e, t);
        return i.createInterpolant = this.createInterpolant, i
    }
}
Fn.prototype.TimeBufferType = Float32Array;
Fn.prototype.ValueBufferType = Float32Array;
Fn.prototype.DefaultInterpolation = Ys;
class lr extends Fn {}
lr.prototype.ValueTypeName = "bool";
lr.prototype.ValueBufferType = Array;
lr.prototype.DefaultInterpolation = Br;
lr.prototype.InterpolantFactoryMethodLinear = void 0;
lr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Nd extends Fn {}
Nd.prototype.ValueTypeName = "color";
class Vr extends Fn {}
Vr.prototype.ValueTypeName = "number";
class Jx extends $n {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    interpolate_(e, t, n, i) {
        const s = this.resultBuffer,
            r = this.sampleValues,
            a = this.valueSize,
            c = (n - t) / (i - t);
        let h = e * a;
        for (let d = h + a; h !== d; h += 4) Ut.slerpFlat(s, 0, r, h - a, r, h, c);
        return s
    }
}
class Zi extends Fn {
    InterpolantFactoryMethodLinear(e) {
        return new Jx(this.times, this.values, this.getValueSize(), e)
    }
}
Zi.prototype.ValueTypeName = "quaternion";
Zi.prototype.DefaultInterpolation = Ys;
Zi.prototype.InterpolantFactoryMethodSmooth = void 0;
class cr extends Fn {}
cr.prototype.ValueTypeName = "string";
cr.prototype.ValueBufferType = Array;
cr.prototype.DefaultInterpolation = Br;
cr.prototype.InterpolantFactoryMethodLinear = void 0;
cr.prototype.InterpolantFactoryMethodSmooth = void 0;
class Wr extends Fn {}
Wr.prototype.ValueTypeName = "vector";
class Il {
    constructor(e, t = -1, n, i = Ql) {
        this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = cn(), this.duration < 0 && this.resetDuration()
    }
    static parse(e) {
        const t = [],
            n = e.tracks,
            i = 1 / (e.fps || 1);
        for (let r = 0, a = n.length; r !== a; ++r) t.push(Zx(n[r]).scale(i));
        const s = new this(e.name, e.duration, t, e.blendMode);
        return s.uuid = e.uuid, s
    }
    static toJSON(e) {
        const t = [],
            n = e.tracks,
            i = {
                name: e.name,
                duration: e.duration,
                tracks: t,
                uuid: e.uuid,
                blendMode: e.blendMode
            };
        for (let s = 0, r = n.length; s !== r; ++s) t.push(Fn.toJSON(n[s]));
        return i
    }
    static CreateFromMorphTargetSequence(e, t, n, i) {
        const s = t.length,
            r = [];
        for (let a = 0; a < s; a++) {
            let c = [],
                h = [];
            c.push((a + s - 1) % s, a, (a + 1) % s), h.push(0, 1, 0);
            const d = it.getKeyframeOrder(c);
            c = it.sortedArray(c, 1, d), h = it.sortedArray(h, 1, d), !i && c[0] === 0 && (c.push(s), h.push(h[0])), r.push(new Vr(".morphTargetInfluences[" + t[a].name + "]", c, h).scale(1 / n))
        }
        return new this(e, -1, r)
    }
    static findByName(e, t) {
        let n = e;
        if (!Array.isArray(e)) {
            const i = e;
            n = i.geometry && i.geometry.animations || i.animations
        }
        for (let i = 0; i < n.length; i++)
            if (n[i].name === t) return n[i];
        return null
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
        const i = {},
            s = /^([\w-]*?)([\d]+)$/;
        for (let a = 0, c = e.length; a < c; a++) {
            const h = e[a],
                d = h.name.match(s);
            if (d && d.length > 1) {
                const l = d[1];
                let u = i[l];
                u || (i[l] = u = []), u.push(h)
            }
        }
        const r = [];
        for (const a in i) r.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
        return r
    }
    static parseAnimation(e, t) {
        if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
        const n = function(l, u, f, g, p) {
                if (f.length !== 0) {
                    const m = [],
                        _ = [];
                    it.flattenJSON(f, m, _, g), m.length !== 0 && p.push(new l(u, m, _))
                }
            },
            i = [],
            s = e.name || "default",
            r = e.fps || 30,
            a = e.blendMode;
        let c = e.length || -1;
        const h = e.hierarchy || [];
        for (let l = 0; l < h.length; l++) {
            const u = h[l].keys;
            if (!(!u || u.length === 0))
                if (u[0].morphTargets) {
                    const f = {};
                    let g;
                    for (g = 0; g < u.length; g++)
                        if (u[g].morphTargets)
                            for (let p = 0; p < u[g].morphTargets.length; p++) f[u[g].morphTargets[p]] = -1;
                    for (const p in f) {
                        const m = [],
                            _ = [];
                        for (let y = 0; y !== u[g].morphTargets.length; ++y) {
                            const b = u[g];
                            m.push(b.time), _.push(b.morphTarget === p ? 1 : 0)
                        }
                        i.push(new Vr(".morphTargetInfluence[" + p + "]", m, _))
                    }
                    c = f.length * r
                } else {
                    const f = ".bones[" + t[l].name + "]";
                    n(Wr, f + ".position", u, "pos", i), n(Zi, f + ".quaternion", u, "rot", i), n(Wr, f + ".scale", u, "scl", i)
                }
        }
        return i.length === 0 ? null : new this(s, c, i, a)
    }
    resetDuration() {
        const e = this.tracks;
        let t = 0;
        for (let n = 0, i = e.length; n !== i; ++n) {
            const s = this.tracks[n];
            t = Math.max(t, s.times[s.times.length - 1])
        }
        return this.duration = t, this
    }
    trim() {
        for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
        return this
    }
    validate() {
        let e = !0;
        for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
        return e
    }
    optimize() {
        for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
        return this
    }
    clone() {
        const e = [];
        for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
        return new this.constructor(this.name, this.duration, e, this.blendMode)
    }
    toJSON() {
        return this.constructor.toJSON(this)
    }
}

function Kx(o) {
    switch (o.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return Vr;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return Wr;
        case "color":
            return Nd;
        case "quaternion":
            return Zi;
        case "bool":
        case "boolean":
            return lr;
        case "string":
            return cr
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + o)
}

function Zx(o) {
    if (o.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = Kx(o.type);
    if (o.times === void 0) {
        const t = [],
            n = [];
        it.flattenJSON(o.keys, t, n, "value"), o.times = t, o.values = n
    }
    return e.parse !== void 0 ? e.parse(o) : new e(o.name, o.times, o.values, o.interpolation)
}
const Zs = {
    enabled: !1,
    files: {},
    add: function(o, e) {
        this.enabled !== !1 && (this.files[o] = e)
    },
    get: function(o) {
        if (this.enabled !== !1) return this.files[o]
    },
    remove: function(o) {
        delete this.files[o]
    },
    clear: function() {
        this.files = {}
    }
};
class $x {
    constructor(e, t, n) {
        const i = this;
        let s = !1,
            r = 0,
            a = 0,
            c;
        const h = [];
        this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(d) {
            a++, s === !1 && i.onStart !== void 0 && i.onStart(d, r, a), s = !0
        }, this.itemEnd = function(d) {
            r++, i.onProgress !== void 0 && i.onProgress(d, r, a), r === a && (s = !1, i.onLoad !== void 0 && i.onLoad())
        }, this.itemError = function(d) {
            i.onError !== void 0 && i.onError(d)
        }, this.resolveURL = function(d) {
            return c ? c(d) : d
        }, this.setURLModifier = function(d) {
            return c = d, this
        }, this.addHandler = function(d, l) {
            return h.push(d, l), this
        }, this.removeHandler = function(d) {
            const l = h.indexOf(d);
            return l !== -1 && h.splice(l, 2), this
        }, this.getHandler = function(d) {
            for (let l = 0, u = h.length; l < u; l += 2) {
                const f = h[l],
                    g = h[l + 1];
                if (f.global && (f.lastIndex = 0), f.test(d)) return g
            }
            return null
        }
    }
}
const Qx = new $x;
class Bn {
    constructor(e) {
        this.manager = e !== void 0 ? e : Qx, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
    }
    load() {}
    loadAsync(e, t) {
        const n = this;
        return new Promise(function(i, s) {
            n.load(e, i, t, s)
        })
    }
    parse() {}
    setCrossOrigin(e) {
        return this.crossOrigin = e, this
    }
    setWithCredentials(e) {
        return this.withCredentials = e, this
    }
    setPath(e) {
        return this.path = e, this
    }
    setResourcePath(e) {
        return this.resourcePath = e, this
    }
    setRequestHeader(e) {
        return this.requestHeader = e, this
    }
}
const Gn = {};
class _a extends Bn {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
        const s = Zs.get(e);
        if (s !== void 0) return this.manager.itemStart(e), setTimeout(() => {
            t && t(s), this.manager.itemEnd(e)
        }, 0), s;
        if (Gn[e] !== void 0) {
            Gn[e].push({
                onLoad: t,
                onProgress: n,
                onError: i
            });
            return
        }
        Gn[e] = [], Gn[e].push({
            onLoad: t,
            onProgress: n,
            onError: i
        });
        const r = new Request(e, {
                headers: new Headers(this.requestHeader),
                credentials: this.withCredentials ? "include" : "same-origin"
            }),
            a = this.mimeType,
            c = this.responseType;
        fetch(r).then(h => {
            if (h.status === 200 || h.status === 0) {
                if (h.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || h.body === void 0 || h.body.getReader === void 0) return h;
                const d = Gn[e],
                    l = h.body.getReader(),
                    u = h.headers.get("Content-Length"),
                    f = u ? parseInt(u) : 0,
                    g = f !== 0;
                let p = 0;
                const m = new ReadableStream({
                    start(_) {
                        y();

                        function y() {
                            l.read().then(({
                                done: b,
                                value: w
                            }) => {
                                if (b) _.close();
                                else {
                                    p += w.byteLength;
                                    const x = new ProgressEvent("progress", {
                                        lengthComputable: g,
                                        loaded: p,
                                        total: f
                                    });
                                    for (let E = 0, T = d.length; E < T; E++) {
                                        const R = d[E];
                                        R.onProgress && R.onProgress(x)
                                    }
                                    _.enqueue(w), y()
                                }
                            })
                        }
                    }
                });
                return new Response(m)
            } else throw Error(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`)
        }).then(h => {
            switch (c) {
                case "arraybuffer":
                    return h.arrayBuffer();
                case "blob":
                    return h.blob();
                case "document":
                    return h.text().then(d => new DOMParser().parseFromString(d, a));
                case "json":
                    return h.json();
                default:
                    if (a === void 0) return h.text(); {
                        const l = /charset="?([^;"\s]*)"?/i.exec(a),
                            u = l && l[1] ? l[1].toLowerCase() : void 0,
                            f = new TextDecoder(u);
                        return h.arrayBuffer().then(g => f.decode(g))
                    }
            }
        }).then(h => {
            Zs.add(e, h);
            const d = Gn[e];
            delete Gn[e];
            for (let l = 0, u = d.length; l < u; l++) {
                const f = d[l];
                f.onLoad && f.onLoad(h)
            }
        }).catch(h => {
            const d = Gn[e];
            if (d === void 0) throw this.manager.itemError(e), h;
            delete Gn[e];
            for (let l = 0, u = d.length; l < u; l++) {
                const f = d[l];
                f.onError && f.onError(h)
            }
            this.manager.itemError(e)
        }).finally(() => {
            this.manager.itemEnd(e)
        }), this.manager.itemStart(e)
    }
    setResponseType(e) {
        return this.responseType = e, this
    }
    setMimeType(e) {
        return this.mimeType = e, this
    }
}
class zd extends Bn {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
        const s = this,
            r = Zs.get(e);
        if (r !== void 0) return s.manager.itemStart(e), setTimeout(function() {
            t && t(r), s.manager.itemEnd(e)
        }, 0), r;
        const a = zr("img");

        function c() {
            d(), Zs.add(e, this), t && t(this), s.manager.itemEnd(e)
        }

        function h(l) {
            d(), i && i(l), s.manager.itemError(e), s.manager.itemEnd(e)
        }

        function d() {
            a.removeEventListener("load", c, !1), a.removeEventListener("error", h, !1)
        }
        return a.addEventListener("load", c, !1), a.addEventListener("error", h, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a
    }
}
class ev extends Bn {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const s = new ra,
            r = new zd(this.manager);
        r.setCrossOrigin(this.crossOrigin), r.setPath(this.path);
        let a = 0;

        function c(h) {
            r.load(e[h], function(d) {
                s.images[h] = d, a++, a === 6 && (s.needsUpdate = !0, t && t(s))
            }, void 0, i)
        }
        for (let h = 0; h < e.length; ++h) c(h);
        return s
    }
}
class yc extends Bn {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const s = new xt,
            r = new zd(this.manager);
        return r.setCrossOrigin(this.crossOrigin), r.setPath(this.path), r.load(e, function(a) {
            s.image = a, s.needsUpdate = !0, t !== void 0 && t(s)
        }, n, i), s
    }
}
class Dn extends je {
    constructor(e, t = 1) {
        super(), this.type = "Light", this.color = new ie(e), this.intensity = t
    }
    dispose() {}
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.intensity = e.intensity, this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t
    }
}
Dn.prototype.isLight = !0;
class tv extends Dn {
    constructor(e, t, n) {
        super(e, n), this.type = "HemisphereLight", this.position.copy(je.DefaultUp), this.updateMatrix(), this.groundColor = new ie(t)
    }
    copy(e) {
        return Dn.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
    }
}
tv.prototype.isHemisphereLight = !0;
const _u = new _e,
    yu = new C,
    xu = new C;
class xc {
    constructor(e) {
        this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new te(512, 512), this.map = null, this.mapPass = null, this.matrix = new _e, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new oa, this._frameExtents = new te(1, 1), this._viewportCount = 1, this._viewports = [new Ke(0, 0, 1, 1)]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(e) {
        const t = this.camera,
            n = this.matrix;
        yu.setFromMatrixPosition(e.matrixWorld), t.position.copy(yu), xu.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(xu), t.updateMatrixWorld(), _u.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(_u), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse)
    }
    getViewport(e) {
        return this._viewports[e]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
    }
    copy(e) {
        return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        const e = {};
        return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
    }
}
class Hd extends xc {
    constructor() {
        super(new Dt(50, 1, .5, 500)), this.focus = 1
    }
    updateMatrices(e) {
        const t = this.camera,
            n = Nr * 2 * e.angle * this.focus,
            i = this.mapSize.width / this.mapSize.height,
            s = e.distance || t.far;
        (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e)
    }
    copy(e) {
        return super.copy(e), this.focus = e.focus, this
    }
}
Hd.prototype.isSpotLightShadow = !0;
class Ud extends Dn {
    constructor(e, t, n = 0, i = Math.PI / 3, s = 0, r = 1) {
        super(e, t), this.type = "SpotLight", this.position.copy(je.DefaultUp), this.updateMatrix(), this.target = new je, this.distance = n, this.angle = i, this.penumbra = s, this.decay = r, this.shadow = new Hd
    }
    get power() {
        return this.intensity * Math.PI
    }
    set power(e) {
        this.intensity = e / Math.PI
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
    }
}
Ud.prototype.isSpotLight = !0;
const vu = new _e,
    xr = new C,
    al = new C;
class Gd extends xc {
    constructor() {
        super(new Dt(90, 1, .5, 500)), this._frameExtents = new te(4, 2), this._viewportCount = 6, this._viewports = [new Ke(2, 1, 1, 1), new Ke(0, 1, 1, 1), new Ke(3, 1, 1, 1), new Ke(1, 1, 1, 1), new Ke(3, 0, 1, 1), new Ke(1, 0, 1, 1)], this._cubeDirections = [new C(1, 0, 0), new C(-1, 0, 0), new C(0, 0, 1), new C(0, 0, -1), new C(0, 1, 0), new C(0, -1, 0)], this._cubeUps = [new C(0, 1, 0), new C(0, 1, 0), new C(0, 1, 0), new C(0, 1, 0), new C(0, 0, 1), new C(0, 0, -1)]
    }
    updateMatrices(e, t = 0) {
        const n = this.camera,
            i = this.matrix,
            s = e.distance || n.far;
        s !== n.far && (n.far = s, n.updateProjectionMatrix()), xr.setFromMatrixPosition(e.matrixWorld), n.position.copy(xr), al.copy(n.position), al.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(al), n.updateMatrixWorld(), i.makeTranslation(-xr.x, -xr.y, -xr.z), vu.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(vu)
    }
}
Gd.prototype.isPointLightShadow = !0;
class Vd extends Dn {
    constructor(e, t, n = 0, i = 1) {
        super(e, t), this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Gd
    }
    get power() {
        return this.intensity * 4 * Math.PI
    }
    set power(e) {
        this.intensity = e / (4 * Math.PI)
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
    }
}
Vd.prototype.isPointLight = !0;
class Wd extends xc {
    constructor() {
        super(new la(-5, 5, 5, -5, .5, 500))
    }
}
Wd.prototype.isDirectionalLightShadow = !0;
class qd extends Dn {
    constructor(e, t) {
        super(e, t), this.type = "DirectionalLight", this.position.copy(je.DefaultUp), this.updateMatrix(), this.target = new je, this.shadow = new Wd
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
    }
}
qd.prototype.isDirectionalLight = !0;
class nv extends Dn {
    constructor(e, t) {
        super(e, t), this.type = "AmbientLight"
    }
}
nv.prototype.isAmbientLight = !0;
class iv extends Dn {
    constructor(e, t, n = 10, i = 10) {
        super(e, t), this.type = "RectAreaLight", this.width = n, this.height = i
    }
    get power() {
        return this.intensity * this.width * this.height * Math.PI
    }
    set power(e) {
        this.intensity = e / (this.width * this.height * Math.PI)
    }
    copy(e) {
        return super.copy(e), this.width = e.width, this.height = e.height, this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.width = this.width, t.object.height = this.height, t
    }
}
iv.prototype.isRectAreaLight = !0;
class Xd {
    constructor() {
        this.coefficients = [];
        for (let e = 0; e < 9; e++) this.coefficients.push(new C)
    }
    set(e) {
        for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
        return this
    }
    zero() {
        for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
        return this
    }
    getAt(e, t) {
        const n = e.x,
            i = e.y,
            s = e.z,
            r = this.coefficients;
        return t.copy(r[0]).multiplyScalar(.282095), t.addScaledVector(r[1], .488603 * i), t.addScaledVector(r[2], .488603 * s), t.addScaledVector(r[3], .488603 * n), t.addScaledVector(r[4], 1.092548 * (n * i)), t.addScaledVector(r[5], 1.092548 * (i * s)), t.addScaledVector(r[6], .315392 * (3 * s * s - 1)), t.addScaledVector(r[7], 1.092548 * (n * s)), t.addScaledVector(r[8], .546274 * (n * n - i * i)), t
    }
    getIrradianceAt(e, t) {
        const n = e.x,
            i = e.y,
            s = e.z,
            r = this.coefficients;
        return t.copy(r[0]).multiplyScalar(.886227), t.addScaledVector(r[1], 2 * .511664 * i), t.addScaledVector(r[2], 2 * .511664 * s), t.addScaledVector(r[3], 2 * .511664 * n), t.addScaledVector(r[4], 2 * .429043 * n * i), t.addScaledVector(r[5], 2 * .429043 * i * s), t.addScaledVector(r[6], .743125 * s * s - .247708), t.addScaledVector(r[7], 2 * .429043 * n * s), t.addScaledVector(r[8], .429043 * (n * n - i * i)), t
    }
    add(e) {
        for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
        return this
    }
    addScaledSH(e, t) {
        for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(e.coefficients[n], t);
        return this
    }
    scale(e) {
        for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
        return this
    }
    lerp(e, t) {
        for (let n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
        return this
    }
    equals(e) {
        for (let t = 0; t < 9; t++)
            if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
        return !0
    }
    copy(e) {
        return this.set(e.coefficients)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    fromArray(e, t = 0) {
        const n = this.coefficients;
        for (let i = 0; i < 9; i++) n[i].fromArray(e, t + i * 3);
        return this
    }
    toArray(e = [], t = 0) {
        const n = this.coefficients;
        for (let i = 0; i < 9; i++) n[i].toArray(e, t + i * 3);
        return e
    }
    static getBasisAt(e, t) {
        const n = e.x,
            i = e.y,
            s = e.z;
        t[0] = .282095, t[1] = .488603 * i, t[2] = .488603 * s, t[3] = .488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * s, t[6] = .315392 * (3 * s * s - 1), t[7] = 1.092548 * n * s, t[8] = .546274 * (n * n - i * i)
    }
}
Xd.prototype.isSphericalHarmonics3 = !0;
class vc extends Dn {
    constructor(e = new Xd, t = 1) {
        super(void 0, t), this.sh = e
    }
    copy(e) {
        return super.copy(e), this.sh.copy(e.sh), this
    }
    fromJSON(e) {
        return this.intensity = e.intensity, this.sh.fromArray(e.sh), this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.sh = this.sh.toArray(), t
    }
}
vc.prototype.isLightProbe = !0;
class xi {
    static decodeText(e) {
        if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
        let t = "";
        for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
        try {
            return decodeURIComponent(escape(t))
        } catch {
            return t
        }
    }
    static extractUrlBase(e) {
        const t = e.lastIndexOf("/");
        return t === -1 ? "./" : e.slice(0, t + 1)
    }
    static resolveURL(e, t) {
        return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e)
    }
}
class sv extends tt {
    constructor() {
        super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0
    }
    copy(e) {
        return super.copy(e), this.instanceCount = e.instanceCount, this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        const e = super.toJSON(this);
        return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e
    }
}
sv.prototype.isInstancedBufferGeometry = !0;
class jd extends Bn {
    constructor(e) {
        super(e), typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
            premultiplyAlpha: "none"
        }
    }
    setOptions(e) {
        return this.options = e, this
    }
    load(e, t, n, i) {
        e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
        const s = this,
            r = Zs.get(e);
        if (r !== void 0) return s.manager.itemStart(e), setTimeout(function() {
            t && t(r), s.manager.itemEnd(e)
        }, 0), r;
        const a = {};
        a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, fetch(e, a).then(function(c) {
            return c.blob()
        }).then(function(c) {
            return createImageBitmap(c, Object.assign(s.options, {
                colorSpaceConversion: "none"
            }))
        }).then(function(c) {
            Zs.add(e, c), t && t(c), s.manager.itemEnd(e)
        }).catch(function(c) {
            i && i(c), s.manager.itemError(e), s.manager.itemEnd(e)
        }), s.manager.itemStart(e)
    }
}
jd.prototype.isImageBitmapLoader = !0;
let ko;
const rv = {
    getContext: function() {
        return ko === void 0 && (ko = new(window.AudioContext || window.webkitAudioContext)), ko
    },
    setContext: function(o) {
        ko = o
    }
};
class ov extends Bn {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const s = this,
            r = new _a(this.manager);
        r.setResponseType("arraybuffer"), r.setPath(this.path), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(e, function(a) {
            try {
                const c = a.slice(0);
                rv.getContext().decodeAudioData(c, function(d) {
                    t(d)
                })
            } catch (c) {
                i ? i(c) : console.error(c), s.manager.itemError(e)
            }
        }, n, i)
    }
}
class av extends vc {
    constructor(e, t, n = 1) {
        super(void 0, n);
        const i = new ie().set(e),
            s = new ie().set(t),
            r = new C(i.r, i.g, i.b),
            a = new C(s.r, s.g, s.b),
            c = Math.sqrt(Math.PI),
            h = c * Math.sqrt(.75);
        this.sh.coefficients[0].copy(r).add(a).multiplyScalar(c), this.sh.coefficients[1].copy(r).sub(a).multiplyScalar(h)
    }
}
av.prototype.isHemisphereLightProbe = !0;
class lv extends vc {
    constructor(e, t = 1) {
        super(void 0, t);
        const n = new ie().set(e);
        this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
    }
}
lv.prototype.isAmbientLightProbe = !0;
let cv = class extends je {
    constructor(e) {
        super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = []
    }
    getOutput() {
        return this.gain
    }
    setNodeSource(e) {
        return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
    }
    setMediaElementSource(e) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this
    }
    setMediaStreamSource(e) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this
    }
    setBuffer(e) {
        return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
    }
    play(e = 0) {
        if (this.isPlaying === !0) {
            console.warn("THREE.Audio: Audio is already playing.");
            return
        }
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return
        }
        this._startedAt = this.context.currentTime + e;
        const t = this.context.createBufferSource();
        return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
    }
    pause() {
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return
        }
        return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this
    }
    stop() {
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return
        }
        return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this
    }
    connect() {
        if (this.filters.length > 0) {
            this.source.connect(this.filters[0]);
            for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
            this.filters[this.filters.length - 1].connect(this.getOutput())
        } else this.source.connect(this.getOutput());
        return this._connected = !0, this
    }
    disconnect() {
        if (this.filters.length > 0) {
            this.source.disconnect(this.filters[0]);
            for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput())
        } else this.source.disconnect(this.getOutput());
        return this._connected = !1, this
    }
    getFilters() {
        return this.filters
    }
    setFilters(e) {
        return e || (e = []), this._connected === !0 ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this
    }
    setDetune(e) {
        if (this.detune = e, this.source.detune !== void 0) return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
    }
    getDetune() {
        return this.detune
    }
    getFilter() {
        return this.getFilters()[0]
    }
    setFilter(e) {
        return this.setFilters(e ? [e] : [])
    }
    setPlaybackRate(e) {
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return
        }
        return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this
    }
    getPlaybackRate() {
        return this.playbackRate
    }
    onEnded() {
        this.isPlaying = !1
    }
    getLoop() {
        return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
    }
    setLoop(e) {
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return
        }
        return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this
    }
    setLoopStart(e) {
        return this.loopStart = e, this
    }
    setLoopEnd(e) {
        return this.loopEnd = e, this
    }
    getVolume() {
        return this.gain.gain.value
    }
    setVolume(e) {
        return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
    }
};
class hv {
    constructor(e, t, n) {
        this.binding = e, this.valueSize = n;
        let i, s, r;
        switch (t) {
            case "quaternion":
                i = this._slerp, s = this._slerpAdditive, r = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
                break;
            case "string":
            case "bool":
                i = this._select, s = this._select, r = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
                break;
            default:
                i = this._lerp, s = this._lerpAdditive, r = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5)
        }
        this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = r, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
    }
    accumulate(e, t) {
        const n = this.buffer,
            i = this.valueSize,
            s = e * i + i;
        let r = this.cumulativeWeight;
        if (r === 0) {
            for (let a = 0; a !== i; ++a) n[s + a] = n[a];
            r = t
        } else {
            r += t;
            const a = t / r;
            this._mixBufferRegion(n, s, 0, a, i)
        }
        this.cumulativeWeight = r
    }
    accumulateAdditive(e) {
        const t = this.buffer,
            n = this.valueSize,
            i = n * this._addIndex;
        this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e
    }
    apply(e) {
        const t = this.valueSize,
            n = this.buffer,
            i = e * t + t,
            s = this.cumulativeWeight,
            r = this.cumulativeWeightAdditive,
            a = this.binding;
        if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
            const c = t * this._origIndex;
            this._mixBufferRegion(n, i, c, 1 - s, t)
        }
        r > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
        for (let c = t, h = t + t; c !== h; ++c)
            if (n[c] !== n[c + t]) {
                a.setValue(n, i);
                break
            }
    }
    saveOriginalState() {
        const e = this.binding,
            t = this.buffer,
            n = this.valueSize,
            i = n * this._origIndex;
        e.getValue(t, i);
        for (let s = n, r = i; s !== r; ++s) t[s] = t[i + s % n];
        this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
    }
    restoreOriginalState() {
        const e = this.valueSize * 3;
        this.binding.setValue(this.buffer, e)
    }
    _setAdditiveIdentityNumeric() {
        const e = this._addIndex * this.valueSize,
            t = e + this.valueSize;
        for (let n = e; n < t; n++) this.buffer[n] = 0
    }
    _setAdditiveIdentityQuaternion() {
        this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
    }
    _setAdditiveIdentityOther() {
        const e = this._origIndex * this.valueSize,
            t = this._addIndex * this.valueSize;
        for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n]
    }
    _select(e, t, n, i, s) {
        if (i >= .5)
            for (let r = 0; r !== s; ++r) e[t + r] = e[n + r]
    }
    _slerp(e, t, n, i) {
        Ut.slerpFlat(e, t, e, t, e, n, i)
    }
    _slerpAdditive(e, t, n, i, s) {
        const r = this._workIndex * s;
        Ut.multiplyQuaternionsFlat(e, r, e, t, e, n), Ut.slerpFlat(e, t, e, t, e, r, i)
    }
    _lerp(e, t, n, i, s) {
        const r = 1 - i;
        for (let a = 0; a !== s; ++a) {
            const c = t + a;
            e[c] = e[c] * r + e[n + a] * i
        }
    }
    _lerpAdditive(e, t, n, i, s) {
        for (let r = 0; r !== s; ++r) {
            const a = t + r;
            e[a] = e[a] + e[n + r] * i
        }
    }
}
const bc = "\\[\\]\\.:\\/",
    uv = new RegExp("[" + bc + "]", "g"),
    wc = "[^" + bc + "]",
    dv = "[^" + bc.replace("\\.", "") + "]",
    fv = /((?:WC+[\/:])*)/.source.replace("WC", wc),
    pv = /(WCOD+)?/.source.replace("WCOD", dv),
    mv = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", wc),
    gv = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", wc),
    _v = new RegExp("^" + fv + pv + mv + gv + "$"),
    yv = ["material", "materials", "bones"];
class xv {
    constructor(e, t, n) {
        const i = n || Xe.parseTrackName(t);
        this._targetGroup = e, this._bindings = e.subscribe_(t, i)
    }
    getValue(e, t) {
        this.bind();
        const n = this._targetGroup.nCachedObjects_,
            i = this._bindings[n];
        i !== void 0 && i.getValue(e, t)
    }
    setValue(e, t) {
        const n = this._bindings;
        for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i) n[i].setValue(e, t)
    }
    bind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind()
    }
    unbind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind()
    }
}
class Xe {
    constructor(e, t, n) {
        this.path = t, this.parsedPath = n || Xe.parseTrackName(t), this.node = Xe.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
    }
    static create(e, t, n) {
        return e && e.isAnimationObjectGroup ? new Xe.Composite(e, t, n) : new Xe(e, t, n)
    }
    static sanitizeNodeName(e) {
        return e.replace(/\s/g, "_").replace(uv, "")
    }
    static parseTrackName(e) {
        const t = _v.exec(e);
        if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
        const n = {
                nodeName: t[2],
                objectName: t[3],
                objectIndex: t[4],
                propertyName: t[5],
                propertyIndex: t[6]
            },
            i = n.nodeName && n.nodeName.lastIndexOf(".");
        if (i !== void 0 && i !== -1) {
            const s = n.nodeName.substring(i + 1);
            yv.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s)
        }
        if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
        return n
    }
    static findNode(e, t) {
        if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
        if (e.skeleton) {
            const n = e.skeleton.getBoneByName(t);
            if (n !== void 0) return n
        }
        if (e.children) {
            const n = function(s) {
                    for (let r = 0; r < s.length; r++) {
                        const a = s[r];
                        if (a.name === t || a.uuid === t) return a;
                        const c = n(a.children);
                        if (c) return c
                    }
                    return null
                },
                i = n(e.children);
            if (i) return i
        }
        return null
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
        e[t] = this.targetObject[this.propertyName]
    }
    _getValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, s = n.length; i !== s; ++i) e[t++] = n[i]
    }
    _getValue_arrayElement(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(e, t) {
        this.resolvedProperty.toArray(e, t)
    }
    _setValue_direct(e, t) {
        this.targetObject[this.propertyName] = e[t]
    }
    _setValue_direct_setNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++]
    }
    _setValue_array_setNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
        this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t]
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_fromArray(e, t) {
        this.resolvedProperty.fromArray(e, t)
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _getValue_unbound(e, t) {
        this.bind(), this.getValue(e, t)
    }
    _setValue_unbound(e, t) {
        this.bind(), this.setValue(e, t)
    }
    bind() {
        let e = this.node;
        const t = this.parsedPath,
            n = t.objectName,
            i = t.propertyName;
        let s = t.propertyIndex;
        if (e || (e = Xe.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
            console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
            return
        }
        if (n) {
            let h = t.objectIndex;
            switch (n) {
                case "materials":
                    if (!e.material) {
                        console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        return
                    }
                    if (!e.material.materials) {
                        console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        return
                    }
                    e = e.material.materials;
                    break;
                case "bones":
                    if (!e.skeleton) {
                        console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        return
                    }
                    e = e.skeleton.bones;
                    for (let d = 0; d < e.length; d++)
                        if (e[d].name === h) {
                            h = d;
                            break
                        }
                    break;
                default:
                    if (e[n] === void 0) {
                        console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        return
                    }
                    e = e[n]
            }
            if (h !== void 0) {
                if (e[h] === void 0) {
                    console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                    return
                }
                e = e[h]
            }
        }
        const r = e[i];
        if (r === void 0) {
            const h = t.nodeName;
            console.error("THREE.PropertyBinding: Trying to update property for track: " + h + "." + i + " but it wasn't found.", e);
            return
        }
        let a = this.Versioning.None;
        this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate);
        let c = this.BindingType.Direct;
        if (s !== void 0) {
            if (i === "morphTargetInfluences") {
                if (!e.geometry) {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    return
                }
                if (e.geometry.isBufferGeometry) {
                    if (!e.geometry.morphAttributes) {
                        console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                        return
                    }
                    e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s])
                } else {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                    return
                }
            }
            c = this.BindingType.ArrayElement, this.resolvedProperty = r, this.propertyIndex = s
        } else r.fromArray !== void 0 && r.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = r) : Array.isArray(r) ? (c = this.BindingType.EntireArray, this.resolvedProperty = r) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][a]
    }
    unbind() {
        this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
    }
}
Xe.Composite = xv;
Xe.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
};
Xe.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
};
Xe.prototype.GetterByBindingType = [Xe.prototype._getValue_direct, Xe.prototype._getValue_array, Xe.prototype._getValue_arrayElement, Xe.prototype._getValue_toArray];
Xe.prototype.SetterByBindingTypeAndVersioning = [
    [Xe.prototype._setValue_direct, Xe.prototype._setValue_direct_setNeedsUpdate, Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
    [Xe.prototype._setValue_array, Xe.prototype._setValue_array_setNeedsUpdate, Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],
    [Xe.prototype._setValue_arrayElement, Xe.prototype._setValue_arrayElement_setNeedsUpdate, Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
    [Xe.prototype._setValue_fromArray, Xe.prototype._setValue_fromArray_setNeedsUpdate, Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
];
class vv {
    constructor(e, t, n = null, i = t.blendMode) {
        this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
        const s = t.tracks,
            r = s.length,
            a = new Array(r),
            c = {
                endingStart: Ps,
                endingEnd: Ps
            };
        for (let h = 0; h !== r; ++h) {
            const d = s[h].createInterpolant(null);
            a[h] = d, d.settings = c
        }
        this._interpolantSettings = c, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = em, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    }
    play() {
        return this._mixer._activateAction(this), this
    }
    stop() {
        return this._mixer._deactivateAction(this), this.reset()
    }
    reset() {
        return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
    }
    isRunning() {
        return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this)
    }
    isScheduled() {
        return this._mixer._isActiveAction(this)
    }
    startAt(e) {
        return this._startTime = e, this
    }
    setLoop(e, t) {
        return this.loop = e, this.repetitions = t, this
    }
    setEffectiveWeight(e) {
        return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
    }
    getEffectiveWeight() {
        return this._effectiveWeight
    }
    fadeIn(e) {
        return this._scheduleFading(e, 0, 1)
    }
    fadeOut(e) {
        return this._scheduleFading(e, 1, 0)
    }
    crossFadeFrom(e, t, n) {
        if (e.fadeOut(t), this.fadeIn(t), n) {
            const i = this._clip.duration,
                s = e._clip.duration,
                r = s / i,
                a = i / s;
            e.warp(1, r, t), this.warp(a, 1, t)
        }
        return this
    }
    crossFadeTo(e, t, n) {
        return e.crossFadeFrom(this, t, n)
    }
    stopFading() {
        const e = this._weightInterpolant;
        return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
    }
    setEffectiveTimeScale(e) {
        return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
    }
    getEffectiveTimeScale() {
        return this._effectiveTimeScale
    }
    setDuration(e) {
        return this.timeScale = this._clip.duration / e, this.stopWarping()
    }
    syncWith(e) {
        return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
    }
    halt(e) {
        return this.warp(this._effectiveTimeScale, 0, e)
    }
    warp(e, t, n) {
        const i = this._mixer,
            s = i.time,
            r = this.timeScale;
        let a = this._timeScaleInterpolant;
        a === null && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
        const c = a.parameterPositions,
            h = a.sampleValues;
        return c[0] = s, c[1] = s + n, h[0] = e / r, h[1] = t / r, this
    }
    stopWarping() {
        const e = this._timeScaleInterpolant;
        return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
    }
    getMixer() {
        return this._mixer
    }
    getClip() {
        return this._clip
    }
    getRoot() {
        return this._localRoot || this._mixer._root
    }
    _update(e, t, n, i) {
        if (!this.enabled) {
            this._updateWeight(e);
            return
        }
        const s = this._startTime;
        if (s !== null) {
            const c = (e - s) * n;
            if (c < 0 || n === 0) return;
            this._startTime = null, t = n * c
        }
        t *= this._updateTimeScale(e);
        const r = this._updateTime(t),
            a = this._updateWeight(e);
        if (a > 0) {
            const c = this._interpolants,
                h = this._propertyBindings;
            switch (this.blendMode) {
                case $u:
                    for (let d = 0, l = c.length; d !== l; ++d) c[d].evaluate(r), h[d].accumulateAdditive(a);
                    break;
                case Ql:
                default:
                    for (let d = 0, l = c.length; d !== l; ++d) c[d].evaluate(r), h[d].accumulate(i, a)
            }
        }
    }
    _updateWeight(e) {
        let t = 0;
        if (this.enabled) {
            t = this.weight;
            const n = this._weightInterpolant;
            if (n !== null) {
                const i = n.evaluate(e)[0];
                t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1))
            }
        }
        return this._effectiveWeight = t, t
    }
    _updateTimeScale(e) {
        let t = 0;
        if (!this.paused) {
            t = this.timeScale;
            const n = this._timeScaleInterpolant;
            if (n !== null) {
                const i = n.evaluate(e)[0];
                t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t)
            }
        }
        return this._effectiveTimeScale = t, t
    }
    _updateTime(e) {
        const t = this._clip.duration,
            n = this.loop;
        let i = this.time + e,
            s = this._loopCount;
        const r = n === No;
        if (e === 0) return s === -1 ? i : r && (s & 1) === 1 ? t - i : i;
        if (n === Qp) {
            s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            e: {
                if (i >= t) i = t;
                else if (i < 0) i = 0;
                else {
                    this.time = i;
                    break e
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                this.time = i,
                this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: e < 0 ? -1 : 1
                })
            }
        } else {
            if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, r)) : this._setEndings(this.repetitions === 0, !0, r)), i >= t || i < 0) {
                const a = Math.floor(i / t);
                i -= t * a, s += Math.abs(a);
                const c = this.repetitions - s;
                if (c <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: e > 0 ? 1 : -1
                });
                else {
                    if (c === 1) {
                        const h = e < 0;
                        this._setEndings(h, !h, r)
                    } else this._setEndings(!1, !1, r);
                    this._loopCount = s, this.time = i, this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: a
                    })
                }
            } else this.time = i;
            if (r && (s & 1) === 1) return t - i
        }
        return i
    }
    _setEndings(e, t, n) {
        const i = this._interpolantSettings;
        n ? (i.endingStart = Is, i.endingEnd = Is) : (e ? i.endingStart = this.zeroSlopeAtStart ? Is : Ps : i.endingStart = Wo, t ? i.endingEnd = this.zeroSlopeAtEnd ? Is : Ps : i.endingEnd = Wo)
    }
    _scheduleFading(e, t, n) {
        const i = this._mixer,
            s = i.time;
        let r = this._weightInterpolant;
        r === null && (r = i._lendControlInterpolant(), this._weightInterpolant = r);
        const a = r.parameterPositions,
            c = r.sampleValues;
        return a[0] = s, c[0] = t, a[1] = s + e, c[1] = n, this
    }
}
class Yd extends ts {
    constructor(e) {
        super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    }
    _bindAction(e, t) {
        const n = e._localRoot || this._root,
            i = e._clip.tracks,
            s = i.length,
            r = e._propertyBindings,
            a = e._interpolants,
            c = n.uuid,
            h = this._bindingsByRootAndName;
        let d = h[c];
        d === void 0 && (d = {}, h[c] = d);
        for (let l = 0; l !== s; ++l) {
            const u = i[l],
                f = u.name;
            let g = d[f];
            if (g !== void 0) ++g.referenceCount, r[l] = g;
            else {
                if (g = r[l], g !== void 0) {
                    g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, c, f));
                    continue
                }
                const p = t && t._propertyBindings[l].binding.parsedPath;
                g = new hv(Xe.create(n, f, p), u.ValueTypeName, u.getValueSize()), ++g.referenceCount, this._addInactiveBinding(g, c, f), r[l] = g
            }
            a[l].resultBuffer = g.buffer
        }
    }
    _activateAction(e) {
        if (!this._isActiveAction(e)) {
            if (e._cacheIndex === null) {
                const n = (e._localRoot || this._root).uuid,
                    i = e._clip.uuid,
                    s = this._actionsByClip[i];
                this._bindAction(e, s && s.knownActions[0]), this._addInactiveAction(e, i, n)
            }
            const t = e._propertyBindings;
            for (let n = 0, i = t.length; n !== i; ++n) {
                const s = t[n];
                s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState())
            }
            this._lendAction(e)
        }
    }
    _deactivateAction(e) {
        if (this._isActiveAction(e)) {
            const t = e._propertyBindings;
            for (let n = 0, i = t.length; n !== i; ++n) {
                const s = t[n];
                --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s))
            }
            this._takeBackAction(e)
        }
    }
    _initMemoryManager() {
        this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
        const e = this;
        this.stats = {
            actions: {
                get total() {
                    return e._actions.length
                },
                get inUse() {
                    return e._nActiveActions
                }
            },
            bindings: {
                get total() {
                    return e._bindings.length
                },
                get inUse() {
                    return e._nActiveBindings
                }
            },
            controlInterpolants: {
                get total() {
                    return e._controlInterpolants.length
                },
                get inUse() {
                    return e._nActiveControlInterpolants
                }
            }
        }
    }
    _isActiveAction(e) {
        const t = e._cacheIndex;
        return t !== null && t < this._nActiveActions
    }
    _addInactiveAction(e, t, n) {
        const i = this._actions,
            s = this._actionsByClip;
        let r = s[t];
        if (r === void 0) r = {
            knownActions: [e],
            actionByRoot: {}
        }, e._byClipCacheIndex = 0, s[t] = r;
        else {
            const a = r.knownActions;
            e._byClipCacheIndex = a.length, a.push(e)
        }
        e._cacheIndex = i.length, i.push(e), r.actionByRoot[n] = e
    }
    _removeInactiveAction(e) {
        const t = this._actions,
            n = t[t.length - 1],
            i = e._cacheIndex;
        n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
        const s = e._clip.uuid,
            r = this._actionsByClip,
            a = r[s],
            c = a.knownActions,
            h = c[c.length - 1],
            d = e._byClipCacheIndex;
        h._byClipCacheIndex = d, c[d] = h, c.pop(), e._byClipCacheIndex = null;
        const l = a.actionByRoot,
            u = (e._localRoot || this._root).uuid;
        delete l[u], c.length === 0 && delete r[s], this._removeInactiveBindingsForAction(e)
    }
    _removeInactiveBindingsForAction(e) {
        const t = e._propertyBindings;
        for (let n = 0, i = t.length; n !== i; ++n) {
            const s = t[n];
            --s.referenceCount === 0 && this._removeInactiveBinding(s)
        }
    }
    _lendAction(e) {
        const t = this._actions,
            n = e._cacheIndex,
            i = this._nActiveActions++,
            s = t[i];
        e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s
    }
    _takeBackAction(e) {
        const t = this._actions,
            n = e._cacheIndex,
            i = --this._nActiveActions,
            s = t[i];
        e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s
    }
    _addInactiveBinding(e, t, n) {
        const i = this._bindingsByRootAndName,
            s = this._bindings;
        let r = i[t];
        r === void 0 && (r = {}, i[t] = r), r[n] = e, e._cacheIndex = s.length, s.push(e)
    }
    _removeInactiveBinding(e) {
        const t = this._bindings,
            n = e.binding,
            i = n.rootNode.uuid,
            s = n.path,
            r = this._bindingsByRootAndName,
            a = r[i],
            c = t[t.length - 1],
            h = e._cacheIndex;
        c._cacheIndex = h, t[h] = c, t.pop(), delete a[s], Object.keys(a).length === 0 && delete r[i]
    }
    _lendBinding(e) {
        const t = this._bindings,
            n = e._cacheIndex,
            i = this._nActiveBindings++,
            s = t[i];
        e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s
    }
    _takeBackBinding(e) {
        const t = this._bindings,
            n = e._cacheIndex,
            i = --this._nActiveBindings,
            s = t[i];
        e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s
    }
    _lendControlInterpolant() {
        const e = this._controlInterpolants,
            t = this._nActiveControlInterpolants++;
        let n = e[t];
        return n === void 0 && (n = new Od(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = t, e[t] = n), n
    }
    _takeBackControlInterpolant(e) {
        const t = this._controlInterpolants,
            n = e.__cacheIndex,
            i = --this._nActiveControlInterpolants,
            s = t[i];
        e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s
    }
    clipAction(e, t, n) {
        const i = t || this._root,
            s = i.uuid;
        let r = typeof e == "string" ? Il.findByName(i, e) : e;
        const a = r !== null ? r.uuid : e,
            c = this._actionsByClip[a];
        let h = null;
        if (n === void 0 && (r !== null ? n = r.blendMode : n = Ql), c !== void 0) {
            const l = c.actionByRoot[s];
            if (l !== void 0 && l.blendMode === n) return l;
            h = c.knownActions[0], r === null && (r = h._clip)
        }
        if (r === null) return null;
        const d = new vv(this, r, t, n);
        return this._bindAction(d, h), this._addInactiveAction(d, a, s), d
    }
    existingAction(e, t) {
        const n = t || this._root,
            i = n.uuid,
            s = typeof e == "string" ? Il.findByName(n, e) : e,
            r = s ? s.uuid : e,
            a = this._actionsByClip[r];
        return a !== void 0 && a.actionByRoot[i] || null
    }
    stopAllAction() {
        const e = this._actions,
            t = this._nActiveActions;
        for (let n = t - 1; n >= 0; --n) e[n].stop();
        return this
    }
    update(e) {
        e *= this.timeScale;
        const t = this._actions,
            n = this._nActiveActions,
            i = this.time += e,
            s = Math.sign(e),
            r = this._accuIndex ^= 1;
        for (let h = 0; h !== n; ++h) t[h]._update(i, e, s, r);
        const a = this._bindings,
            c = this._nActiveBindings;
        for (let h = 0; h !== c; ++h) a[h].apply(r);
        return this
    }
    setTime(e) {
        this.time = 0;
        for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
        return this.update(e)
    }
    getRoot() {
        return this._root
    }
    uncacheClip(e) {
        const t = this._actions,
            n = e.uuid,
            i = this._actionsByClip,
            s = i[n];
        if (s !== void 0) {
            const r = s.knownActions;
            for (let a = 0, c = r.length; a !== c; ++a) {
                const h = r[a];
                this._deactivateAction(h);
                const d = h._cacheIndex,
                    l = t[t.length - 1];
                h._cacheIndex = null, h._byClipCacheIndex = null, l._cacheIndex = d, t[d] = l, t.pop(), this._removeInactiveBindingsForAction(h)
            }
            delete i[n]
        }
    }
    uncacheRoot(e) {
        const t = e.uuid,
            n = this._actionsByClip;
        for (const r in n) {
            const a = n[r].actionByRoot,
                c = a[t];
            c !== void 0 && (this._deactivateAction(c), this._removeInactiveAction(c))
        }
        const i = this._bindingsByRootAndName,
            s = i[t];
        if (s !== void 0)
            for (const r in s) {
                const a = s[r];
                a.restoreOriginalState(), this._removeInactiveBinding(a)
            }
    }
    uncacheAction(e, t) {
        const n = this.existingAction(e, t);
        n !== null && (this._deactivateAction(n), this._removeInactiveAction(n))
    }
}
Yd.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class bv extends rr {
    constructor(e, t, n = 1) {
        super(e, t), this.meshPerAttribute = n
    }
    copy(e) {
        return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this
    }
    clone(e) {
        const t = super.clone(e);
        return t.meshPerAttribute = this.meshPerAttribute, t
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t
    }
}
bv.prototype.isInstancedInterleavedBuffer = !0;
class wv {
    constructor(e, t, n = 0, i = 1 / 0) {
        this.ray = new ss(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new nc, this.params = {
            Mesh: {},
            Line: {
                threshold: 1
            },
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        }
    }
    set(e, t) {
        this.ray.set(e, t)
    }
    setFromCamera(e, t) {
        t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type)
    }
    intersectObject(e, t = !0, n = []) {
        return Dl(e, this, n, t), n.sort(bu), n
    }
    intersectObjects(e, t = !0, n = []) {
        for (let i = 0, s = e.length; i < s; i++) Dl(e[i], this, n, t);
        return n.sort(bu), n
    }
}

function bu(o, e) {
    return o.distance - e.distance
}

function Dl(o, e, t, n) {
    if (o.layers.test(e.layers) && o.raycast(e, t), n === !0) {
        const i = o.children;
        for (let s = 0, r = i.length; s < r; s++) Dl(i[s], e, t, !0)
    }
}
const ci = new C,
    Fo = new _e,
    ll = new _e;
class Mv extends da {
    constructor(e) {
        const t = Jd(e),
            n = new tt,
            i = [],
            s = [],
            r = new ie(0, 0, 1),
            a = new ie(0, 1, 0);
        for (let h = 0; h < t.length; h++) {
            const d = t[h];
            d.parent && d.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), s.push(r.r, r.g, r.b), s.push(a.r, a.g, a.b))
        }
        n.setAttribute("position", new mt(i, 3)), n.setAttribute("color", new mt(s, 3));
        const c = new os({
            vertexColors: !0,
            depthTest: !1,
            depthWrite: !1,
            toneMapped: !1,
            transparent: !0
        });
        super(n, c), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
    }
    updateMatrixWorld(e) {
        const t = this.bones,
            n = this.geometry,
            i = n.getAttribute("position");
        ll.copy(this.root.matrixWorld).invert();
        for (let s = 0, r = 0; s < t.length; s++) {
            const a = t[s];
            a.parent && a.parent.isBone && (Fo.multiplyMatrices(ll, a.matrixWorld), ci.setFromMatrixPosition(Fo), i.setXYZ(r, ci.x, ci.y, ci.z), Fo.multiplyMatrices(ll, a.parent.matrixWorld), ci.setFromMatrixPosition(Fo), i.setXYZ(r + 1, ci.x, ci.y, ci.z), r += 2)
        }
        n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e)
    }
}

function Jd(o) {
    const e = [];
    o.isBone === !0 && e.push(o);
    for (let t = 0; t < o.children.length; t++) e.push.apply(e, Jd(o.children[t]));
    return e
}
class Sv extends da {
    constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
        n = new ie(n), i = new ie(i);
        const s = t / 2,
            r = e / t,
            a = e / 2,
            c = [],
            h = [];
        for (let u = 0, f = 0, g = -a; u <= t; u++, g += r) {
            c.push(-a, 0, g, a, 0, g), c.push(g, 0, -a, g, 0, a);
            const p = u === s ? n : i;
            p.toArray(h, f), f += 3, p.toArray(h, f), f += 3, p.toArray(h, f), f += 3, p.toArray(h, f), f += 3
        }
        const d = new tt;
        d.setAttribute("position", new mt(c, 3)), d.setAttribute("color", new mt(h, 3));
        const l = new os({
            vertexColors: !0,
            toneMapped: !1
        });
        super(d, l), this.type = "GridHelper"
    }
}
class Tv {
    constructor() {
        this.type = "ShapePath", this.color = new ie, this.subPaths = [], this.currentPath = null
    }
    moveTo(e, t) {
        return this.currentPath = new jo, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this
    }
    lineTo(e, t) {
        return this.currentPath.lineTo(e, t), this
    }
    quadraticCurveTo(e, t, n, i) {
        return this.currentPath.quadraticCurveTo(e, t, n, i), this
    }
    bezierCurveTo(e, t, n, i, s, r) {
        return this.currentPath.bezierCurveTo(e, t, n, i, s, r), this
    }
    splineThru(e) {
        return this.currentPath.splineThru(e), this
    }
    toShapes(e, t) {
        function n(y) {
            const b = [];
            for (let w = 0, x = y.length; w < x; w++) {
                const E = y[w],
                    T = new yi;
                T.curves = E.curves, b.push(T)
            }
            return b
        }

        function i(y, b) {
            const w = b.length;
            let x = !1;
            for (let E = w - 1, T = 0; T < w; E = T++) {
                let R = b[E],
                    I = b[T],
                    B = I.x - R.x,
                    v = I.y - R.y;
                if (Math.abs(v) > Number.EPSILON) {
                    if (v < 0 && (R = b[T], B = -B, I = b[E], v = -v), y.y < R.y || y.y > I.y) continue;
                    if (y.y === R.y) {
                        if (y.x === R.x) return !0
                    } else {
                        const L = v * (y.x - R.x) - B * (y.y - R.y);
                        if (L === 0) return !0;
                        if (L < 0) continue;
                        x = !x
                    }
                } else {
                    if (y.y !== R.y) continue;
                    if (I.x <= y.x && y.x <= R.x || R.x <= y.x && y.x <= I.x) return !0
                }
            }
            return x
        }
        const s = Kn.isClockWise,
            r = this.subPaths;
        if (r.length === 0) return [];
        if (t === !0) return n(r);
        let a, c, h;
        const d = [];
        if (r.length === 1) return c = r[0], h = new yi, h.curves = c.curves, d.push(h), d;
        let l = !s(r[0].getPoints());
        l = e ? !l : l;
        const u = [],
            f = [];
        let g = [],
            p = 0,
            m;
        f[p] = void 0, g[p] = [];
        for (let y = 0, b = r.length; y < b; y++) c = r[y], m = c.getPoints(), a = s(m), a = e ? !a : a, a ? (!l && f[p] && p++, f[p] = {
            s: new yi,
            p: m
        }, f[p].s.curves = c.curves, l && p++, g[p] = []) : g[p].push({
            h: c,
            p: m[0]
        });
        if (!f[0]) return n(r);
        if (f.length > 1) {
            let y = !1,
                b = 0;
            for (let w = 0, x = f.length; w < x; w++) u[w] = [];
            for (let w = 0, x = f.length; w < x; w++) {
                const E = g[w];
                for (let T = 0; T < E.length; T++) {
                    const R = E[T];
                    let I = !0;
                    for (let B = 0; B < f.length; B++) i(R.p, f[B].p) && (w !== B && b++, I ? (I = !1, u[B].push(R)) : y = !0);
                    I && u[w].push(R)
                }
            }
            b > 0 && y === !1 && (g = u)
        }
        let _;
        for (let y = 0, b = f.length; y < b; y++) {
            h = f[y].s, d.push(h), _ = g[y];
            for (let w = 0, x = _.length; w < x; w++) h.holes.push(_[w].h)
        }
        return d
    }
}
const Tn = new Uint32Array(512),
    En = new Uint32Array(512);
for (let o = 0; o < 256; ++o) {
    const e = o - 127;
    e < -27 ? (Tn[o] = 0, Tn[o | 256] = 32768, En[o] = 24, En[o | 256] = 24) : e < -14 ? (Tn[o] = 1024 >> -e - 14, Tn[o | 256] = 1024 >> -e - 14 | 32768, En[o] = -e - 1, En[o | 256] = -e - 1) : e <= 15 ? (Tn[o] = e + 15 << 10, Tn[o | 256] = e + 15 << 10 | 32768, En[o] = 13, En[o | 256] = 13) : e < 128 ? (Tn[o] = 31744, Tn[o | 256] = 64512, En[o] = 24, En[o | 256] = 24) : (Tn[o] = 31744, Tn[o | 256] = 64512, En[o] = 13, En[o | 256] = 13)
}
const Kd = new Uint32Array(2048),
    eo = new Uint32Array(64),
    Ev = new Uint32Array(64);
for (let o = 1; o < 1024; ++o) {
    let e = o << 13,
        t = 0;
    for (; !(e & 8388608);) e <<= 1, t -= 8388608;
    e &= -8388609, t += 947912704, Kd[o] = e | t
}
for (let o = 1024; o < 2048; ++o) Kd[o] = 939524096 + (o - 1024 << 13);
for (let o = 1; o < 31; ++o) eo[o] = o << 23;
eo[31] = 1199570944;
eo[32] = 2147483648;
for (let o = 33; o < 63; ++o) eo[o] = 2147483648 + (o - 32 << 23);
eo[63] = 3347054592;
for (let o = 1; o < 64; ++o) o !== 32 && (Ev[o] = 1024);
hn.create = function(o, e) {
    return console.log("THREE.Curve.create() has been deprecated"), o.prototype = Object.create(hn.prototype), o.prototype.constructor = o, o.prototype.getPoint = e, o
};
jo.prototype.fromPoints = function(o) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(o)
};
Sv.prototype.setColors = function() {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
};
Mv.prototype.update = function() {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
};
Bn.prototype.extractUrlBase = function(o) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), xi.extractUrlBase(o)
};
Bn.Handlers = {
    add: function() {
        console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
    },
    get: function() {
        console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
    }
};
dn.prototype.center = function(o) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(o)
};
dn.prototype.empty = function() {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
};
dn.prototype.isIntersectionBox = function(o) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(o)
};
dn.prototype.isIntersectionSphere = function(o) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(o)
};
dn.prototype.size = function(o) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(o)
};
rs.prototype.toVector3 = function() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")
};
is.prototype.empty = function() {
    return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty()
};
oa.prototype.setFromMatrix = function(o) {
    return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(o)
};
Lt.prototype.flattenToArrayOffset = function(o, e) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(o, e)
};
Lt.prototype.multiplyVector3 = function(o) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), o.applyMatrix3(this)
};
Lt.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
};
Lt.prototype.applyToBufferAttribute = function(o) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), o.applyMatrix3(this)
};
Lt.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
};
Lt.prototype.getInverse = function(o) {
    return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(o).invert()
};
_e.prototype.extractPosition = function(o) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(o)
};
_e.prototype.flattenToArrayOffset = function(o, e) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(o, e)
};
_e.prototype.getPosition = function() {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new C().setFromMatrixColumn(this, 3)
};
_e.prototype.setRotationFromQuaternion = function(o) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(o)
};
_e.prototype.multiplyToArray = function() {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
};
_e.prototype.multiplyVector3 = function(o) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), o.applyMatrix4(this)
};
_e.prototype.multiplyVector4 = function(o) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), o.applyMatrix4(this)
};
_e.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
};
_e.prototype.rotateAxis = function(o) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), o.transformDirection(this)
};
_e.prototype.crossVector = function(o) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), o.applyMatrix4(this)
};
_e.prototype.translate = function() {
    console.error("THREE.Matrix4: .translate() has been removed.")
};
_e.prototype.rotateX = function() {
    console.error("THREE.Matrix4: .rotateX() has been removed.")
};
_e.prototype.rotateY = function() {
    console.error("THREE.Matrix4: .rotateY() has been removed.")
};
_e.prototype.rotateZ = function() {
    console.error("THREE.Matrix4: .rotateZ() has been removed.")
};
_e.prototype.rotateByAxis = function() {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
};
_e.prototype.applyToBufferAttribute = function(o) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), o.applyMatrix4(this)
};
_e.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
};
_e.prototype.makeFrustum = function(o, e, t, n, i, s) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(o, e, n, t, i, s)
};
_e.prototype.getInverse = function(o) {
    return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(o).invert()
};
Xn.prototype.isIntersectionLine = function(o) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(o)
};
Ut.prototype.multiplyVector3 = function(o) {
    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), o.applyQuaternion(this)
};
Ut.prototype.inverse = function() {
    return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert()
};
ss.prototype.isIntersectionBox = function(o) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(o)
};
ss.prototype.isIntersectionPlane = function(o) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(o)
};
ss.prototype.isIntersectionSphere = function(o) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(o)
};
wt.prototype.area = function() {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
};
wt.prototype.barycoordFromPoint = function(o, e) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(o, e)
};
wt.prototype.midpoint = function(o) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(o)
};
wt.prototypenormal = function(o) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(o)
};
wt.prototype.plane = function(o) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(o)
};
wt.barycoordFromPoint = function(o, e, t, n, i) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), wt.getBarycoord(o, e, t, n, i)
};
wt.normal = function(o, e, t, n) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), wt.getNormal(o, e, t, n)
};
yi.prototype.extractAllPoints = function(o) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(o)
};
yi.prototype.extrude = function(o) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new or(this, o)
};
yi.prototype.makeGeometry = function(o) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new _c(this, o)
};
te.prototype.fromAttribute = function(o, e, t) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(o, e, t)
};
te.prototype.distanceToManhattan = function(o) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(o)
};
te.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
};
C.prototype.setEulerFromRotationMatrix = function() {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
};
C.prototype.setEulerFromQuaternion = function() {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
};
C.prototype.getPositionFromMatrix = function(o) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(o)
};
C.prototype.getScaleFromMatrix = function(o) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(o)
};
C.prototype.getColumnFromMatrix = function(o, e) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, o)
};
C.prototype.applyProjection = function(o) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(o)
};
C.prototype.fromAttribute = function(o, e, t) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(o, e, t)
};
C.prototype.distanceToManhattan = function(o) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(o)
};
C.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
};
Ke.prototype.fromAttribute = function(o, e, t) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(o, e, t)
};
Ke.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
};
je.prototype.getChildByName = function(o) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(o)
};
je.prototype.renderDepth = function() {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
};
je.prototype.translate = function(o, e) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, o)
};
je.prototype.getWorldRotation = function() {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
};
je.prototype.applyMatrix = function(o) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(o)
};
Object.defineProperties(je.prototype, {
    eulerOrder: {
        get: function() {
            return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
        },
        set: function(o) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = o
        }
    },
    useQuaternion: {
        get: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        set: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        }
    }
});
St.prototype.setDrawMode = function() {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
};
Object.defineProperties(St.prototype, {
    drawMode: {
        get: function() {
            return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), tm
        },
        set: function() {
            console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
        }
    }
});
cc.prototype.initBones = function() {
    console.error("THREE.SkinnedMesh: initBones() has been removed.")
};
Dt.prototype.setLens = function(o, e) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), e !== void 0 && (this.filmGauge = e), this.setFocalLength(o)
};
Object.defineProperties(Dn.prototype, {
    onlyShadow: {
        set: function() {
            console.warn("THREE.Light: .onlyShadow has been removed.")
        }
    },
    shadowCameraFov: {
        set: function(o) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = o
        }
    },
    shadowCameraLeft: {
        set: function(o) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = o
        }
    },
    shadowCameraRight: {
        set: function(o) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = o
        }
    },
    shadowCameraTop: {
        set: function(o) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = o
        }
    },
    shadowCameraBottom: {
        set: function(o) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = o
        }
    },
    shadowCameraNear: {
        set: function(o) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = o
        }
    },
    shadowCameraFar: {
        set: function(o) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = o
        }
    },
    shadowCameraVisible: {
        set: function() {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
        }
    },
    shadowBias: {
        set: function(o) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = o
        }
    },
    shadowDarkness: {
        set: function() {
            console.warn("THREE.Light: .shadowDarkness has been removed.")
        }
    },
    shadowMapWidth: {
        set: function(o) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = o
        }
    },
    shadowMapHeight: {
        set: function(o) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = o
        }
    }
});
Object.defineProperties(ft.prototype, {
    length: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
        }
    },
    dynamic: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === qo
        },
        set: function() {
            console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(qo)
        }
    }
});
ft.prototype.setDynamic = function(o) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(o === !0 ? qo : Or), this
};
ft.prototype.copyIndicesArray = function() {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
}, ft.prototype.setArray = function() {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
};
tt.prototype.addIndex = function(o) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(o)
};
tt.prototype.addAttribute = function(o, e) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(e && e.isBufferAttribute) && !(e && e.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(o, new ft(arguments[1], arguments[2]))) : o === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(o, e)
};
tt.prototype.addDrawCall = function(o, e, t) {
    t !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(o, e)
};
tt.prototype.clearDrawCalls = function() {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
};
tt.prototype.computeOffsets = function() {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
};
tt.prototype.removeAttribute = function(o) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(o)
};
tt.prototype.applyMatrix = function(o) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(o)
};
Object.defineProperties(tt.prototype, {
    drawcalls: {
        get: function() {
            return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
        }
    },
    offsets: {
        get: function() {
            return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
        }
    }
});
rr.prototype.setDynamic = function(o) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(o === !0 ? qo : Or), this
};
rr.prototype.setArray = function() {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
};
or.prototype.getArrays = function() {
    console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")
};
or.prototype.addShapeList = function() {
    console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")
};
or.prototype.addShape = function() {
    console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")
};
lc.prototype.dispose = function() {
    console.error("THREE.Scene: .dispose() has been removed.")
};
Object.defineProperties(dt.prototype, {
    wrapAround: {
        get: function() {
            console.warn("THREE.Material: .wrapAround has been removed.")
        },
        set: function() {
            console.warn("THREE.Material: .wrapAround has been removed.")
        }
    },
    overdraw: {
        get: function() {
            console.warn("THREE.Material: .overdraw has been removed.")
        },
        set: function() {
            console.warn("THREE.Material: .overdraw has been removed.")
        }
    },
    wrapRGB: {
        get: function() {
            return console.warn("THREE.Material: .wrapRGB has been removed."), new ie
        }
    },
    shading: {
        get: function() {
            console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
        },
        set: function(o) {
            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = o === ju
        }
    },
    stencilMask: {
        get: function() {
            return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
        },
        set: function(o) {
            console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = o
        }
    },
    vertexTangents: {
        get: function() {
            console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
        },
        set: function() {
            console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
        }
    }
});
Object.defineProperties(Ot.prototype, {
    derivatives: {
        get: function() {
            return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
        },
        set: function(o) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = o
        }
    }
});
Je.prototype.clearTarget = function(o, e, t, n) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(o), this.clear(e, t, n)
};
Je.prototype.animate = function(o) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(o)
};
Je.prototype.getCurrentRenderTarget = function() {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
};
Je.prototype.getMaxAnisotropy = function() {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
};
Je.prototype.getPrecision = function() {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
};
Je.prototype.resetGLState = function() {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
};
Je.prototype.supportsFloatTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
};
Je.prototype.supportsHalfFloatTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
};
Je.prototype.supportsStandardDerivatives = function() {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
};
Je.prototype.supportsCompressedTextureS3TC = function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
};
Je.prototype.supportsCompressedTexturePVRTC = function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
};
Je.prototype.supportsBlendMinMax = function() {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
};
Je.prototype.supportsVertexTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
};
Je.prototype.supportsInstancedArrays = function() {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
};
Je.prototype.enableScissorTest = function(o) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(o)
};
Je.prototype.initMaterial = function() {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
};
Je.prototype.addPrePlugin = function() {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
};
Je.prototype.addPostPlugin = function() {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
};
Je.prototype.updateShadowMap = function() {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
};
Je.prototype.setFaceCulling = function() {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
};
Je.prototype.allocTextureUnit = function() {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
};
Je.prototype.setTexture = function() {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
};
Je.prototype.setTexture2D = function() {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
};
Je.prototype.setTextureCube = function() {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
};
Je.prototype.getActiveMipMapLevel = function() {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
};
Object.defineProperties(Je.prototype, {
    shadowMapEnabled: {
        get: function() {
            return this.shadowMap.enabled
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = o
        }
    },
    shadowMapType: {
        get: function() {
            return this.shadowMap.type
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = o
        }
    },
    shadowMapCullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
        }
    },
    context: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
        }
    },
    vr: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
        }
    },
    gammaInput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
        }
    },
    gammaOutput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = o === !0 ? Ge : Zn
        }
    },
    toneMappingWhitePoint: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
        }
    },
    gammaFactor: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")
        }
    }
});
Object.defineProperties(md.prototype, {
    cullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
        }
    },
    renderReverseSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
        }
    },
    renderSingleSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
        }
    }
});
Object.defineProperties(Zt.prototype, {
    wrapS: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = o
        }
    },
    wrapT: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = o
        }
    },
    magFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = o
        }
    },
    minFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = o
        }
    },
    anisotropy: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = o
        }
    },
    offset: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = o
        }
    },
    repeat: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = o
        }
    },
    format: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = o
        }
    },
    type: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = o
        }
    },
    generateMipmaps: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
        },
        set: function(o) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = o
        }
    }
});
cv.prototype.load = function(o) {
    console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
    const e = this;
    return new ov().load(o, function(n) {
        e.setBuffer(n)
    }), this
};
sc.prototype.updateCubeMap = function(o, e) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(o, e)
};
sc.prototype.clear = function(o, e, t, n) {
    return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(o, e, t, n)
};
ns.crossOrigin = void 0;
ns.loadTexture = function(o, e, t, n) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    const i = new yc;
    i.setCrossOrigin(this.crossOrigin);
    const s = i.load(o, t, void 0, n);
    return e && (s.mapping = e), s
};
ns.loadTextureCube = function(o, e, t, n) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    const i = new ev;
    i.setCrossOrigin(this.crossOrigin);
    const s = i.load(o, t, void 0, n);
    return e && (s.mapping = e), s
};
ns.loadCompressedTexture = function() {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
};
ns.loadCompressedTextureCube = function() {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
};
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
        revision: $l
    }
}));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = $l);
class Ai {
    constructor() {
        this.callbacks = {}, this.callbacks.base = {}
    }
    on(e, t) {
        return typeof e > "u" || e === "" ? (console.warn("wrong names"), !1) : typeof t > "u" ? (console.warn("wrong callback"), !1) : (this.resolveNames(e).forEach(i => {
            const s = this.resolveName(i);
            this.callbacks[s.namespace] instanceof Object || (this.callbacks[s.namespace] = {}), this.callbacks[s.namespace][s.value] instanceof Array || (this.callbacks[s.namespace][s.value] = []), this.callbacks[s.namespace][s.value].push(t)
        }), this)
    }
    off(e) {
        return typeof e > "u" || e === "" ? (console.warn("wrong name"), !1) : (this.resolveNames(e).forEach(n => {
            const i = this.resolveName(n);
            if (i.namespace !== "base" && i.value === "") delete this.callbacks[i.namespace];
            else if (i.namespace === "base")
                for (const s in this.callbacks) this.callbacks[s] instanceof Object && this.callbacks[s][i.value] instanceof Array && (delete this.callbacks[s][i.value], Object.keys(this.callbacks[s]).length === 0 && delete this.callbacks[s]);
            else this.callbacks[i.namespace] instanceof Object && this.callbacks[i.namespace][i.value] instanceof Array && (delete this.callbacks[i.namespace][i.value], Object.keys(this.callbacks[i.namespace]).length === 0 && delete this.callbacks[i.namespace])
        }), this)
    }
    trigger(e, t) {
        if (typeof e > "u" || e === "") return console.warn("wrong name"), !1;
        let n = null;
        const i = t instanceof Array ? t : [];
        let s = this.resolveNames(e);
        if (s = this.resolveName(s[0]), s.namespace === "base")
            for (const r in this.callbacks) this.callbacks[r] instanceof Object && this.callbacks[r][s.value] instanceof Array && this.callbacks[r][s.value].forEach(function(a) {
                a.apply(this, i)
            });
        else if (this.callbacks[s.namespace] instanceof Object) {
            if (s.value === "") return console.warn("wrong name"), this;
            this.callbacks[s.namespace][s.value].forEach(function(r) {
                r.apply(this, i)
            })
        }
        return n
    }
    resolveNames(e) {
        let t = e;
        return t = t.replace(/[^a-zA-Z0-9 ,/.]/g, ""), t = t.replace(/[,/]+/g, " "), t = t.split(" "), t
    }
    resolveName(e) {
        const t = {},
            n = e.split(".");
        return t.original = e, t.value = n[0], t.namespace = "base", n.length > 1 && n[1] !== "" && (t.namespace = n[1]), t
    }
}
class Av extends Ai {
    constructor() {
        super();
        he(this, "touch", !1);
        he(this, "portrait", !1);
        this.experience = new ye, this.resize(), window.addEventListener("resize", () => {
            this.resize(), setTimeout(() => this.trigger("resize"))
        })
    }
    resize() {
        this.checkTouchDevice(), this.checkPortrait(), this.width = window.innerWidth, this.height = window.innerHeight, this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    }
    checkPortrait() {
        const t = window.innerWidth / window.innerHeight <= 1.2;
        t !== this.portrait && (this.portrait = t, setTimeout(() => this.trigger(this.portrait ? "portrait" : "landscape")))
    }
    checkTouchDevice() {
        const t = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        t != this.touch && (this.touch = t, setTimeout(() => this.trigger(this.touch ? "touch" : "no-touch")))
    }
    getAbsoluteHeight(t) {
        const n = window.getComputedStyle(t),
            i = parseFloat(n.marginTop) + parseFloat(n.marginBottom);
        return Math.ceil(t.offsetHeight + i)
    }
    getMarginTop(t) {
        const n = window.getComputedStyle(t);
        return Math.ceil(parseFloat(n.marginTop))
    }
}
class Cv extends Ai {
    constructor() {
        super(), this.start = Date.now(), this.current = this.start, this.elapsed = 0, this.delta = 16, this.hiddenDelta = 0, window.requestAnimationFrame(() => {
            this.tick()
        })
    }
    tick() {
        const e = Date.now();
        this.delta = e - this.current, this.current = e, this.elapsed = this.current - this.start, this.trigger("tick"), window.requestAnimationFrame(() => {
            this.tick()
        })
    }
}
class Lv {
    constructor() {
        he(this, "parallax", {
            intensity: .4,
            speed: 3,
            enabled: !0
        });
        he(this, "lookAtStartParameters", new C);
        this.experience = new ye, this.sizes = this.experience.sizes, this.scene = this.experience.scene, this.canvas = this.experience.canvas, this.time = this.experience.time, this.setInstance(), this.setCursor()
    }
    setInstance() {
        this.instance = new Dt(38, this.sizes.width / this.sizes.height, .1, 100), this.cameraParallaxGroup = new Yn, this.cameraParallaxGroup.add(this.instance), this.scene.add(this.cameraParallaxGroup)
    }
    setCursor() {
        this.cursor = {}, window.addEventListener("mousemove", e => {
            this.cursor.x = e.clientX / this.sizes.width - .5, this.cursor.y = e.clientY / this.sizes.height - .5
        })
    }
    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height, this.instance.updateProjectionMatrix()
    }
    update() {
        this.controls && this.controls.update(), !this.sizes.touch && this.parallax.enabled && this.updateParallax()
    }
    updateParallax() {
        const e = this.cursor.x * this.parallax.intensity,
            t = -this.cursor.y * this.parallax.intensity,
            n = this.time.delta / 1e3,
            i = (e - this.cameraParallaxGroup.position.x) * this.parallax.speed * n,
            s = (t - this.cameraParallaxGroup.position.y) * this.parallax.speed * n;
        i < .05 && i > -.05 && (this.cameraParallaxGroup.position.x += i), s < .05 && s > -.05 && (this.cameraParallaxGroup.position.y += s)
    }
}
class Rv {
    constructor() {
        this.experience = new ye, this.canvas = this.experience.canvas, this.sizes = this.experience.sizes, this.scene = this.experience.scene, this.camera = this.experience.camera, this.setInstance()
    }
    setInstance() {
        this.instance = new Je({
            canvas: this.canvas,
            antialias: !0
        }), this.instance.outputEncoding = Ge, this.instance.setClearColor("#F5EFE6"), this.resize()
    }
    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height), this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }
    update() {
        this.instance.render(this.scene, this.camera.instance)
    }
}

function qn(o) {
    if (o === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}

function Zd(o, e) {
    o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.__proto__ = e
}
/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var $t = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    $s = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    Mc, Ft, ct, on = 1e8,
    Qe = 1 / on,
    kl = Math.PI * 2,
    Pv = kl / 4,
    Iv = 0,
    $d = Math.sqrt,
    Dv = Math.cos,
    kv = Math.sin,
    Tt = function(e) {
        return typeof e == "string"
    },
    ut = function(e) {
        return typeof e == "function"
    },
    Qn = function(e) {
        return typeof e == "number"
    },
    Sc = function(e) {
        return typeof e > "u"
    },
    kn = function(e) {
        return typeof e == "object"
    },
    Vt = function(e) {
        return e !== !1
    },
    Tc = function() {
        return typeof window < "u"
    },
    Bo = function(e) {
        return ut(e) || Tt(e)
    },
    Qd = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    Bt = Array.isArray,
    Fl = /(?:-?\.?\d|\.)+/gi,
    ef = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Bs = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    cl = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    tf = /[+-]=-?[.\d]+/,
    nf = /[^,'"\[\]\s]+/gi,
    Fv = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    rt, nn, Bl, Ec, Qt = {},
    Yo = {},
    sf, rf = function(e) {
        return (Yo = $i(e, Qt)) && Xt
    },
    Ac = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    },
    Jo = function(e, t) {
        return !t && console.warn(e)
    },
    of = function(e, t) {
        return e && (Qt[e] = t) && Yo && (Yo[e] = t) || Qt
    },
    qr = function() {
        return 0
    },
    Bv = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    Ho = {
        suppressEvents: !0,
        kill: !1
    },
    Ov = {
        suppressEvents: !0
    },
    Cc = {},
    vi = [],
    Ol = {},
    af, Jt = {},
    hl = {},
    wu = 30,
    Uo = [],
    Lc = "",
    Rc = function(e) {
        var t = e[0],
            n, i;
        if (kn(t) || ut(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
            for (i = Uo.length; i-- && !Uo[i].targetTest(t););
            n = Uo[i]
        }
        for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new Pf(e[i], n))) || e.splice(i, 1);
        return e
    },
    Wi = function(e) {
        return e._gsap || Rc(an(e))[0]._gsap
    },
    lf = function(e, t, n) {
        return (n = e[t]) && ut(n) ? e[t]() : Sc(n) && e.getAttribute && e.getAttribute(t) || n
    },
    Wt = function(e, t) {
        return (e = e.split(",")).forEach(t) || e
    },
    pt = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    Ct = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    Us = function(e, t) {
        var n = t.charAt(0),
            i = parseFloat(t.substr(2));
        return e = parseFloat(e), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i
    },
    Nv = function(e, t) {
        for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n;);
        return i < n
    },
    Ko = function() {
        var e = vi.length,
            t = vi.slice(0),
            n, i;
        for (Ol = {}, vi.length = 0, n = 0; n < e; n++) i = t[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
    },
    cf = function(e, t, n, i) {
        vi.length && !Ft && Ko(), e.render(t, n, i || Ft && t < 0 && (e._initted || e._startAt)), vi.length && !Ft && Ko()
    },
    hf = function(e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(nf).length < 2 ? t : Tt(e) ? e.trim() : e
    },
    uf = function(e) {
        return e
    },
    un = function(e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e
    },
    zv = function(e) {
        return function(t, n) {
            for (var i in n) i in t || i === "duration" && e || i === "ease" || (t[i] = n[i])
        }
    },
    $i = function(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    },
    Mu = function o(e, t) {
        for (var n in t) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = kn(t[n]) ? o(e[n] || (e[n] = {}), t[n]) : t[n]);
        return e
    },
    Zo = function(e, t) {
        var n = {},
            i;
        for (i in e) i in t || (n[i] = e[i]);
        return n
    },
    Ir = function(e) {
        var t = e.parent || rt,
            n = e.keyframes ? zv(Bt(e.keyframes)) : un;
        if (Vt(e.inherit))
            for (; t;) n(e, t.vars.defaults), t = t.parent || t._dp;
        return e
    },
    Hv = function(e, t) {
        for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n];);
        return n < 0
    },
    df = function(e, t, n, i, s) {
        n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
        var r = e[i],
            a;
        if (s)
            for (a = t[s]; r && r[s] > a;) r = r._prev;
        return r ? (t._next = r._next, r._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = r, t.parent = t._dp = e, t
    },
    ya = function(e, t, n, i) {
        n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
        var s = t._prev,
            r = t._next;
        s ? s._next = r : e[n] === t && (e[n] = r), r ? r._prev = s : e[i] === t && (e[i] = s), t._next = t._prev = t.parent = null
    },
    Si = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
    },
    qi = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n;) n._dirty = 1, n = n.parent;
        return e
    },
    Uv = function(e) {
        for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
        return e
    },
    Nl = function(e, t, n, i) {
        return e._startAt && (Ft ? e._startAt.revert(Ho) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i))
    },
    Gv = function o(e) {
        return !e || e._ts && o(e.parent)
    },
    Su = function(e) {
        return e._repeat ? Qs(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    Qs = function(e, t) {
        var n = Math.floor(e /= t);
        return e && n === e ? n - 1 : n
    },
    $o = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    },
    xa = function(e) {
        return e._end = Ct(e._start + (e._tDur / Math.abs(e._ts || e._rts || Qe) || 0))
    },
    va = function(e, t) {
        var n = e._dp;
        return n && n.smoothChildTiming && e._ts && (e._start = Ct(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), xa(e), n._dirty || qi(n, e)), e
    },
    ff = function(e, t) {
        var n;
        if ((t._time || t._initted && !t._dur) && (n = $o(e.rawTime(), t), (!t._dur || to(0, t.totalDuration(), n) - t._tTime > Qe) && t.render(n, !0)), qi(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
            e._zTime = -Qe
        }
    },
    Cn = function(e, t, n, i) {
        return t.parent && Si(t), t._start = Ct((Qn(n) ? n : n || e !== rt ? tn(e, n, t) : e._time) + t._delay), t._end = Ct(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), df(e, t, "_first", "_last", e._sort ? "_start" : 0), zl(t) || (e._recent = t), i || ff(e, t), e._ts < 0 && va(e, e._tTime), e
    },
    pf = function(e, t) {
        return (Qt.ScrollTrigger || Ac("scrollTrigger", t)) && Qt.ScrollTrigger.create(t, e)
    },
    mf = function(e, t, n, i, s) {
        if (Ic(e, t, s), !e._initted) return 1;
        if (!n && e._pt && !Ft && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && af !== Kt.frame) return vi.push(e), e._lazy = [s, i], 1
    },
    Vv = function o(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || o(t))
    },
    zl = function(e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    },
    Wv = function(e, t, n, i) {
        var s = e.ratio,
            r = t < 0 || !t && (!e._start && Vv(e) && !(!e._initted && zl(e)) || (e._ts < 0 || e._dp._ts < 0) && !zl(e)) ? 0 : 1,
            a = e._rDelay,
            c = 0,
            h, d, l;
        if (a && e._repeat && (c = to(0, e._tDur, t), d = Qs(c, a), e._yoyo && d & 1 && (r = 1 - r), d !== Qs(e._tTime, a) && (s = 1 - r, e.vars.repeatRefresh && e._initted && e.invalidate())), r !== s || Ft || i || e._zTime === Qe || !t && e._zTime) {
            if (!e._initted && mf(e, t, i, n, c)) return;
            for (l = e._zTime, e._zTime = t || (n ? Qe : 0), n || (n = t && !l), e.ratio = r, e._from && (r = 1 - r), e._time = 0, e._tTime = c, h = e._pt; h;) h.r(r, h.d), h = h._next;
            t < 0 && Nl(e, t, n, !0), e._onUpdate && !n && ln(e, "onUpdate"), c && e._repeat && !n && e.parent && ln(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === r && (r && Si(e, 1), !n && !Ft && (ln(e, r ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = t)
    },
    qv = function(e, t, n) {
        var i;
        if (n > t)
            for (i = e._first; i && i._start <= n;) {
                if (i.data === "isPause" && i._start > t) return i;
                i = i._next
            } else
                for (i = e._last; i && i._start >= n;) {
                    if (i.data === "isPause" && i._start < t) return i;
                    i = i._prev
                }
    },
    er = function(e, t, n, i) {
        var s = e._repeat,
            r = Ct(t) || 0,
            a = e._tTime / e._tDur;
        return a && !i && (e._time *= r / e._dur), e._dur = r, e._tDur = s ? s < 0 ? 1e10 : Ct(r * (s + 1) + e._rDelay * s) : r, a > 0 && !i && va(e, e._tTime = e._tDur * a), e.parent && xa(e), n || qi(e.parent, e), e
    },
    Tu = function(e) {
        return e instanceof Ht ? qi(e) : er(e, e._dur)
    },
    Xv = {
        _start: 0,
        endTime: qr,
        totalDuration: qr
    },
    tn = function o(e, t, n) {
        var i = e.labels,
            s = e._recent || Xv,
            r = e.duration() >= on ? s.endTime(!1) : e._dur,
            a, c, h;
        return Tt(t) && (isNaN(t) || t in i) ? (c = t.charAt(0), h = t.substr(-1) === "%", a = t.indexOf("="), c === "<" || c === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (c === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (h ? (a < 0 ? s : n).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = r), i[t]) : (c = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), h && n && (c = c / 100 * (Bt(n) ? n[0] : n).totalDuration()), a > 1 ? o(e, t.substr(0, a - 1), n) + c : r + c)) : t == null ? r : +t
    },
    Dr = function(e, t, n) {
        var i = Qn(t[1]),
            s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            r = t[s],
            a, c;
        if (i && (r.duration = t[1]), r.parent = n, e) {
            for (a = r, c = n; c && !("immediateRender" in a);) a = c.vars.defaults || {}, c = Vt(c.vars.inherit) && c.parent;
            r.immediateRender = Vt(a.immediateRender), e < 2 ? r.runBackwards = 1 : r.startAt = t[s - 1]
        }
        return new yt(t[0], r, t[s + 1])
    },
    Ci = function(e, t) {
        return e || e === 0 ? t(e) : t
    },
    to = function(e, t, n) {
        return n < e ? e : n > t ? t : n
    },
    kt = function(e, t) {
        return !Tt(e) || !(t = Fv.exec(e)) ? "" : t[1]
    },
    jv = function(e, t, n) {
        return Ci(n, function(i) {
            return to(e, t, i)
        })
    },
    Hl = [].slice,
    gf = function(e, t) {
        return e && kn(e) && "length" in e && (!t && !e.length || e.length - 1 in e && kn(e[0])) && !e.nodeType && e !== nn
    },
    Yv = function(e, t, n) {
        return n === void 0 && (n = []), e.forEach(function(i) {
            var s;
            return Tt(i) && !t || gf(i, 1) ? (s = n).push.apply(s, an(i)) : n.push(i)
        }) || n
    },
    an = function(e, t, n) {
        return ct && !t && ct.selector ? ct.selector(e) : Tt(e) && !n && (Bl || !tr()) ? Hl.call((t || Ec).querySelectorAll(e), 0) : Bt(e) ? Yv(e, n) : gf(e) ? Hl.call(e, 0) : e ? [e] : []
    },
    Ul = function(e) {
        return e = an(e)[0] || Jo("Invalid scope") || {},
            function(t) {
                var n = e.current || e.nativeElement || e;
                return an(t, n.querySelectorAll ? n : n === e ? Jo("Invalid scope") || Ec.createElement("div") : e)
            }
    },
    _f = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    },
    yf = function(e) {
        if (ut(e)) return e;
        var t = kn(e) ? e : {
                each: e
            },
            n = Xi(t.ease),
            i = t.from || 0,
            s = parseFloat(t.base) || 0,
            r = {},
            a = i > 0 && i < 1,
            c = isNaN(i) || a,
            h = t.axis,
            d = i,
            l = i;
        return Tt(i) ? d = l = {
                center: .5,
                edges: .5,
                end: 1
            }[i] || 0 : !a && c && (d = i[0], l = i[1]),
            function(u, f, g) {
                var p = (g || t).length,
                    m = r[p],
                    _, y, b, w, x, E, T, R, I;
                if (!m) {
                    if (I = t.grid === "auto" ? 0 : (t.grid || [1, on])[1], !I) {
                        for (T = -on; T < (T = g[I++].getBoundingClientRect().left) && I < p;);
                        I--
                    }
                    for (m = r[p] = [], _ = c ? Math.min(I, p) * d - .5 : i % I, y = I === on ? 0 : c ? p * l / I - .5 : i / I | 0, T = 0, R = on, E = 0; E < p; E++) b = E % I - _, w = y - (E / I | 0), m[E] = x = h ? Math.abs(h === "y" ? w : b) : $d(b * b + w * w), x > T && (T = x), x < R && (R = x);
                    i === "random" && _f(m), m.max = T - R, m.min = R, m.v = p = (parseFloat(t.amount) || parseFloat(t.each) * (I > p ? p - 1 : h ? h === "y" ? p / I : I : Math.max(I, p / I)) || 0) * (i === "edges" ? -1 : 1), m.b = p < 0 ? s - p : s, m.u = kt(t.amount || t.each) || 0, n = n && p < 0 ? Cf(n) : n
                }
                return p = (m[u] - m.min) / m.max || 0, Ct(m.b + (n ? n(p) : p) * m.v) + m.u
            }
    },
    Gl = function(e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(n) {
            var i = Ct(Math.round(parseFloat(n) / e) * e * t);
            return (i - i % 1) / t + (Qn(n) ? 0 : kt(n))
        }
    },
    xf = function(e, t) {
        var n = Bt(e),
            i, s;
        return !n && kn(e) && (i = n = e.radius || on, e.values ? (e = an(e.values), (s = !Qn(e[0])) && (i *= i)) : e = Gl(e.increment)), Ci(t, n ? ut(e) ? function(r) {
            return s = e(r), Math.abs(s - r) <= i ? s : r
        } : function(r) {
            for (var a = parseFloat(s ? r.x : r), c = parseFloat(s ? r.y : 0), h = on, d = 0, l = e.length, u, f; l--;) s ? (u = e[l].x - a, f = e[l].y - c, u = u * u + f * f) : u = Math.abs(e[l] - a), u < h && (h = u, d = l);
            return d = !i || h <= i ? e[d] : r, s || d === r || Qn(r) ? d : d + kt(r)
        } : Gl(e))
    },
    vf = function(e, t, n, i) {
        return Ci(Bt(e) ? !t : n === !0 ? !!(n = 0) : !i, function() {
            return Bt(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * .99)) / n) * n * i) / i
        })
    },
    Jv = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function(i) {
            return t.reduce(function(s, r) {
                return r(s)
            }, i)
        }
    },
    Kv = function(e, t) {
        return function(n) {
            return e(parseFloat(n)) + (t || kt(n))
        }
    },
    Zv = function(e, t, n) {
        return wf(e, t, 0, 1, n)
    },
    bf = function(e, t, n) {
        return Ci(n, function(i) {
            return e[~~t(i)]
        })
    },
    $v = function o(e, t, n) {
        var i = t - e;
        return Bt(e) ? bf(e, o(0, e.length), t) : Ci(n, function(s) {
            return (i + (s - e) % i) % i + e
        })
    },
    Qv = function o(e, t, n) {
        var i = t - e,
            s = i * 2;
        return Bt(e) ? bf(e, o(0, e.length - 1), t) : Ci(n, function(r) {
            return r = (s + (r - e) % s) % s || 0, e + (r > i ? s - r : r)
        })
    },
    Xr = function(e) {
        for (var t = 0, n = "", i, s, r, a; ~(i = e.indexOf("random(", t));) r = e.indexOf(")", i), a = e.charAt(i + 7) === "[", s = e.substr(i + 7, r - i - 7).match(a ? nf : Fl), n += e.substr(t, i - t) + vf(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), t = r + 1;
        return n + e.substr(t, e.length - t)
    },
    wf = function(e, t, n, i, s) {
        var r = t - e,
            a = i - n;
        return Ci(s, function(c) {
            return n + ((c - e) / r * a || 0)
        })
    },
    eb = function o(e, t, n, i) {
        var s = isNaN(e + t) ? 0 : function(f) {
            return (1 - f) * e + f * t
        };
        if (!s) {
            var r = Tt(e),
                a = {},
                c, h, d, l, u;
            if (n === !0 && (i = 1) && (n = null), r) e = {
                p: e
            }, t = {
                p: t
            };
            else if (Bt(e) && !Bt(t)) {
                for (d = [], l = e.length, u = l - 2, h = 1; h < l; h++) d.push(o(e[h - 1], e[h]));
                l--, s = function(g) {
                    g *= l;
                    var p = Math.min(u, ~~g);
                    return d[p](g - p)
                }, n = t
            } else i || (e = $i(Bt(e) ? [] : {}, e));
            if (!d) {
                for (c in t) Pc.call(a, e, c, "get", t[c]);
                s = function(g) {
                    return Fc(g, a) || (r ? e.p : e)
                }
            }
        }
        return Ci(n, s)
    },
    Eu = function(e, t, n) {
        var i = e.labels,
            s = on,
            r, a, c;
        for (r in i) a = i[r] - t, a < 0 == !!n && a && s > (a = Math.abs(a)) && (c = r, s = a);
        return c
    },
    ln = function(e, t, n) {
        var i = e.vars,
            s = i[t],
            r = ct,
            a = e._ctx,
            c, h, d;
        if (s) return c = i[t + "Params"], h = i.callbackScope || e, n && vi.length && Ko(), a && (ct = a), d = c ? s.apply(h, c) : s.call(h), ct = r, d
    },
    Er = function(e) {
        return Si(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ft), e.progress() < 1 && ln(e, "onInterrupt"), e
    },
    Os, Mf = [],
    Sf = function(e) {
        if (Tc() && e) {
            e = !e.name && e.default || e;
            var t = e.name,
                n = ut(e),
                i = t && !n && e.init ? function() {
                    this._props = []
                } : e,
                s = {
                    init: qr,
                    render: Fc,
                    add: Pc,
                    kill: gb,
                    modifier: mb,
                    rawVars: 0
                },
                r = {
                    targetTest: 0,
                    get: 0,
                    getSetter: kc,
                    aliases: {},
                    register: 0
                };
            if (tr(), e !== i) {
                if (Jt[t]) return;
                un(i, un(Zo(e, s), r)), $i(i.prototype, $i(s, Zo(e, r))), Jt[i.prop = t] = i, e.targetTest && (Uo.push(i), Cc[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            } of (t, i), e.register && e.register(Xt, i, qt)
        } else e && Mf.push(e)
    },
    $e = 255,
    Ar = {
        aqua: [0, $e, $e],
        lime: [0, $e, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, $e],
        navy: [0, 0, 128],
        white: [$e, $e, $e],
        olive: [128, 128, 0],
        yellow: [$e, $e, 0],
        orange: [$e, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [$e, 0, 0],
        pink: [$e, 192, 203],
        cyan: [0, $e, $e],
        transparent: [$e, $e, $e, 0]
    },
    ul = function(e, t, n) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * $e + .5 | 0
    },
    Tf = function(e, t, n) {
        var i = e ? Qn(e) ? [e >> 16, e >> 8 & $e, e & $e] : 0 : Ar.black,
            s, r, a, c, h, d, l, u, f, g;
        if (!i) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ar[e]) i = Ar[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (s = e.charAt(1), r = e.charAt(2), a = e.charAt(3), e = "#" + s + s + r + r + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & $e, i & $e, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & $e, e & $e]
            } else if (e.substr(0, 3) === "hsl") {
                if (i = g = e.match(Fl), !t) c = +i[0] % 360 / 360, h = +i[1] / 100, d = +i[2] / 100, r = d <= .5 ? d * (h + 1) : d + h - d * h, s = d * 2 - r, i.length > 3 && (i[3] *= 1), i[0] = ul(c + 1 / 3, s, r), i[1] = ul(c, s, r), i[2] = ul(c - 1 / 3, s, r);
                else if (~e.indexOf("=")) return i = e.match(ef), n && i.length < 4 && (i[3] = 1), i
            } else i = e.match(Fl) || Ar.transparent;
            i = i.map(Number)
        }
        return t && !g && (s = i[0] / $e, r = i[1] / $e, a = i[2] / $e, l = Math.max(s, r, a), u = Math.min(s, r, a), d = (l + u) / 2, l === u ? c = h = 0 : (f = l - u, h = d > .5 ? f / (2 - l - u) : f / (l + u), c = l === s ? (r - a) / f + (r < a ? 6 : 0) : l === r ? (a - s) / f + 2 : (s - r) / f + 4, c *= 60), i[0] = ~~(c + .5), i[1] = ~~(h * 100 + .5), i[2] = ~~(d * 100 + .5)), n && i.length < 4 && (i[3] = 1), i
    },
    Ef = function(e) {
        var t = [],
            n = [],
            i = -1;
        return e.split(bi).forEach(function(s) {
            var r = s.match(Bs) || [];
            t.push.apply(t, r), n.push(i += r.length + 1)
        }), t.c = n, t
    },
    Au = function(e, t, n) {
        var i = "",
            s = (e + i).match(bi),
            r = t ? "hsla(" : "rgba(",
            a = 0,
            c, h, d, l;
        if (!s) return e;
        if (s = s.map(function(u) {
                return (u = Tf(u, t, 1)) && r + (t ? u[0] + "," + u[1] + "%," + u[2] + "%," + u[3] : u.join(",")) + ")"
            }), n && (d = Ef(e), c = n.c, c.join(i) !== d.c.join(i)))
            for (h = e.replace(bi, "1").split(Bs), l = h.length - 1; a < l; a++) i += h[a] + (~c.indexOf(a) ? s.shift() || r + "0,0,0,0)" : (d.length ? d : s.length ? s : n).shift());
        if (!h)
            for (h = e.split(bi), l = h.length - 1; a < l; a++) i += h[a] + s[a];
        return i + h[l]
    },
    bi = function() {
        var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in Ar) o += "|" + e + "\\b";
        return new RegExp(o + ")", "gi")
    }(),
    tb = /hsl[a]?\(/,
    Af = function(e) {
        var t = e.join(" "),
            n;
        if (bi.lastIndex = 0, bi.test(t)) return n = tb.test(t), e[1] = Au(e[1], n), e[0] = Au(e[0], n, Ef(e[1])), !0
    },
    jr, Kt = function() {
        var o = Date.now,
            e = 500,
            t = 33,
            n = o(),
            i = n,
            s = 1e3 / 240,
            r = s,
            a = [],
            c, h, d, l, u, f, g = function p(m) {
                var _ = o() - i,
                    y = m === !0,
                    b, w, x, E;
                if (_ > e && (n += _ - t), i += _, x = i - n, b = x - r, (b > 0 || y) && (E = ++l.frame, u = x - l.time * 1e3, l.time = x = x / 1e3, r += b + (b >= s ? 4 : s - b), w = 1), y || (c = h(p)), w)
                    for (f = 0; f < a.length; f++) a[f](x, u, E, m)
            };
        return l = {
            time: 0,
            frame: 0,
            tick: function() {
                g(!0)
            },
            deltaRatio: function(m) {
                return u / (1e3 / (m || 60))
            },
            wake: function() {
                sf && (!Bl && Tc() && (nn = Bl = window, Ec = nn.document || {}, Qt.gsap = Xt, (nn.gsapVersions || (nn.gsapVersions = [])).push(Xt.version), rf(Yo || nn.GreenSockGlobals || !nn.gsap && nn || {}), d = nn.requestAnimationFrame, Mf.forEach(Sf)), c && l.sleep(), h = d || function(m) {
                    return setTimeout(m, r - l.time * 1e3 + 1 | 0)
                }, jr = 1, g(2))
            },
            sleep: function() {
                (d ? nn.cancelAnimationFrame : clearTimeout)(c), jr = 0, h = qr
            },
            lagSmoothing: function(m, _) {
                e = m || 1 / 0, t = Math.min(_ || 33, e)
            },
            fps: function(m) {
                s = 1e3 / (m || 240), r = l.time * 1e3 + s
            },
            add: function(m, _, y) {
                var b = _ ? function(w, x, E, T) {
                    m(w, x, E, T), l.remove(b)
                } : m;
                return l.remove(m), a[y ? "unshift" : "push"](b), tr(), b
            },
            remove: function(m, _) {
                ~(_ = a.indexOf(m)) && a.splice(_, 1) && f >= _ && f--
            },
            _listeners: a
        }, l
    }(),
    tr = function() {
        return !jr && Kt.wake()
    },
    ze = {},
    nb = /^[\d.\-M][\d.\-,\s]/,
    ib = /["']/g,
    sb = function(e) {
        for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], s = 1, r = n.length, a, c, h; s < r; s++) c = n[s], a = s !== r - 1 ? c.lastIndexOf(",") : c.length, h = c.substr(0, a), t[i] = isNaN(h) ? h.replace(ib, "").trim() : +h, i = c.substr(a + 1).trim();
        return t
    },
    rb = function(e) {
        var t = e.indexOf("(") + 1,
            n = e.indexOf(")"),
            i = e.indexOf("(", t);
        return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n)
    },
    ob = function(e) {
        var t = (e + "").split("("),
            n = ze[t[0]];
        return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [sb(t[1])] : rb(e).split(",").map(hf)) : ze._CE && nb.test(e) ? ze._CE("", e) : n
    },
    Cf = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    },
    Lf = function o(e, t) {
        for (var n = e._first, i; n;) n instanceof Ht ? o(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? o(n.timeline, t) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = t)), n = n._next
    },
    Xi = function(e, t) {
        return e && (ut(e) ? e : ze[e] || ob(e)) || t
    },
    as = function(e, t, n, i) {
        n === void 0 && (n = function(c) {
            return 1 - t(1 - c)
        }), i === void 0 && (i = function(c) {
            return c < .5 ? t(c * 2) / 2 : 1 - t((1 - c) * 2) / 2
        });
        var s = {
                easeIn: t,
                easeOut: n,
                easeInOut: i
            },
            r;
        return Wt(e, function(a) {
            ze[a] = Qt[a] = s, ze[r = a.toLowerCase()] = n;
            for (var c in s) ze[r + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")] = ze[a + "." + c] = s[c]
        }), s
    },
    Rf = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    },
    dl = function o(e, t, n) {
        var i = t >= 1 ? t : 1,
            s = (n || (e ? .3 : .45)) / (t < 1 ? t : 1),
            r = s / kl * (Math.asin(1 / i) || 0),
            a = function(d) {
                return d === 1 ? 1 : i * Math.pow(2, -10 * d) * kv((d - r) * s) + 1
            },
            c = e === "out" ? a : e === "in" ? function(h) {
                return 1 - a(1 - h)
            } : Rf(a);
        return s = kl / s, c.config = function(h, d) {
            return o(e, h, d)
        }, c
    },
    fl = function o(e, t) {
        t === void 0 && (t = 1.70158);
        var n = function(r) {
                return r ? --r * r * ((t + 1) * r + t) + 1 : 0
            },
            i = e === "out" ? n : e === "in" ? function(s) {
                return 1 - n(1 - s)
            } : Rf(n);
        return i.config = function(s) {
            return o(e, s)
        }, i
    };
Wt("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, e) {
    var t = e < 5 ? e + 1 : e;
    as(o + ",Power" + (t - 1), e ? function(n) {
        return Math.pow(n, t)
    } : function(n) {
        return n
    }, function(n) {
        return 1 - Math.pow(1 - n, t)
    }, function(n) {
        return n < .5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2
    })
});
ze.Linear.easeNone = ze.none = ze.Linear.easeIn;
as("Elastic", dl("in"), dl("out"), dl());
(function(o, e) {
    var t = 1 / e,
        n = 2 * t,
        i = 2.5 * t,
        s = function(a) {
            return a < t ? o * a * a : a < n ? o * Math.pow(a - 1.5 / e, 2) + .75 : a < i ? o * (a -= 2.25 / e) * a + .9375 : o * Math.pow(a - 2.625 / e, 2) + .984375
        };
    as("Bounce", function(r) {
        return 1 - s(1 - r)
    }, s)
})(7.5625, 2.75);
as("Expo", function(o) {
    return o ? Math.pow(2, 10 * (o - 1)) : 0
});
as("Circ", function(o) {
    return -($d(1 - o * o) - 1)
});
as("Sine", function(o) {
    return o === 1 ? 1 : -Dv(o * Pv) + 1
});
as("Back", fl("in"), fl("out"), fl());
ze.SteppedEase = ze.steps = Qt.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e,
            i = e + (t ? 0 : 1),
            s = t ? 1 : 0,
            r = 1 - Qe;
        return function(a) {
            return ((i * to(0, r, a) | 0) + s) * n
        }
    }
};
$s.ease = ze["quad.out"];
Wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
    return Lc += o + "," + o + "Params,"
});
var Pf = function(e, t) {
        this.id = Iv++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : lf, this.set = t ? t.getSetter : kc
    },
    Yr = function() {
        function o(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, er(this, +t.duration, 1, 1), this.data = t.data, ct && (this._ctx = ct, ct.data.push(this)), jr || Kt.wake()
        }
        var e = o.prototype;
        return e.delay = function(n) {
            return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay
        }, e.duration = function(n) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur
        }, e.totalDuration = function(n) {
            return arguments.length ? (this._dirty = 0, er(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(n, i) {
            if (tr(), !arguments.length) return this._tTime;
            var s = this._dp;
            if (s && s.smoothChildTiming && this._ts) {
                for (va(this, n), !s._dp || s.parent || ff(s, this); s && s.parent;) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Cn(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === Qe || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), cf(this, n, i)), this
        }, e.time = function(n, i) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + Su(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time
        }, e.totalProgress = function(n, i) {
            return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, e.progress = function(n, i) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + Su(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, e.iteration = function(n, i) {
            var s = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (n - 1) * s, i) : this._repeat ? Qs(this._tTime, s) + 1 : 1
        }, e.timeScale = function(n) {
            if (!arguments.length) return this._rts === -Qe ? 0 : this._rts;
            if (this._rts === n) return this;
            var i = this.parent && this._ts ? $o(this.parent._time, this) : this._tTime;
            return this._rts = +n || 0, this._ts = this._ps || n === -Qe ? 0 : this._rts, this.totalTime(to(-Math.abs(this._delay), this._tDur, i), !0), xa(this), Uv(this)
        }, e.paused = function(n) {
            return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (tr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Qe && (this._tTime -= Qe)))), this) : this._ps
        }, e.startTime = function(n) {
            if (arguments.length) {
                this._start = n;
                var i = this.parent || this._dp;
                return i && (i._sort || !this.parent) && Cn(i, this, n - this._delay), this
            }
            return this._start
        }, e.endTime = function(n) {
            return this._start + (Vt(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(n) {
            var i = this.parent || this._dp;
            return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? $o(i.rawTime(n), this) : this._tTime : this._tTime
        }, e.revert = function(n) {
            n === void 0 && (n = Ov);
            var i = Ft;
            return Ft = n, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(n), this.totalTime(-.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), Ft = i, this
        }, e.globalTime = function(n) {
            for (var i = this, s = arguments.length ? n : i.rawTime(); i;) s = i._start + s / (i._ts || 1), i = i._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(n) : s
        }, e.repeat = function(n) {
            return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, Tu(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(n) {
            if (arguments.length) {
                var i = this._time;
                return this._rDelay = n, Tu(this), i ? this.time(i) : this
            }
            return this._rDelay
        }, e.yoyo = function(n) {
            return arguments.length ? (this._yoyo = n, this) : this._yoyo
        }, e.seek = function(n, i) {
            return this.totalTime(tn(this, n), Vt(i))
        }, e.restart = function(n, i) {
            return this.play().totalTime(n ? -this._delay : 0, Vt(i))
        }, e.play = function(n, i) {
            return n != null && this.seek(n, i), this.reversed(!1).paused(!1)
        }, e.reverse = function(n, i) {
            return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1)
        }, e.pause = function(n, i) {
            return n != null && this.seek(n, i), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(n) {
            return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -Qe : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -Qe, this
        }, e.isActive = function() {
            var n = this.parent || this._dp,
                i = this._start,
                s;
            return !!(!n || this._ts && this._initted && n.isActive() && (s = n.rawTime(!0)) >= i && s < this.endTime(!0) - Qe)
        }, e.eventCallback = function(n, i, s) {
            var r = this.vars;
            return arguments.length > 1 ? (i ? (r[n] = i, s && (r[n + "Params"] = s), n === "onUpdate" && (this._onUpdate = i)) : delete r[n], this) : r[n]
        }, e.then = function(n) {
            var i = this;
            return new Promise(function(s) {
                var r = ut(n) ? n : uf,
                    a = function() {
                        var h = i.then;
                        i.then = null, ut(r) && (r = r(i)) && (r.then || r === i) && (i.then = h), s(r), i.then = h
                    };
                i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
            })
        }, e.kill = function() {
            Er(this)
        }, o
    }();
un(Yr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Qe,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Ht = function(o) {
    Zd(e, o);

    function e(n, i) {
        var s;
        return n === void 0 && (n = {}), s = o.call(this, n) || this, s.labels = {}, s.smoothChildTiming = !!n.smoothChildTiming, s.autoRemoveChildren = !!n.autoRemoveChildren, s._sort = Vt(n.sortChildren), rt && Cn(n.parent || rt, qn(s), i), n.reversed && s.reverse(), n.paused && s.paused(!0), n.scrollTrigger && pf(qn(s), n.scrollTrigger), s
    }
    var t = e.prototype;
    return t.to = function(i, s, r) {
        return Dr(0, arguments, this), this
    }, t.from = function(i, s, r) {
        return Dr(1, arguments, this), this
    }, t.fromTo = function(i, s, r, a) {
        return Dr(2, arguments, this), this
    }, t.set = function(i, s, r) {
        return s.duration = 0, s.parent = this, Ir(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new yt(i, s, tn(this, r), 1), this
    }, t.call = function(i, s, r) {
        return Cn(this, yt.delayedCall(0, i, s), r)
    }, t.staggerTo = function(i, s, r, a, c, h, d) {
        return r.duration = s, r.stagger = r.stagger || a, r.onComplete = h, r.onCompleteParams = d, r.parent = this, new yt(i, r, tn(this, c)), this
    }, t.staggerFrom = function(i, s, r, a, c, h, d) {
        return r.runBackwards = 1, Ir(r).immediateRender = Vt(r.immediateRender), this.staggerTo(i, s, r, a, c, h, d)
    }, t.staggerFromTo = function(i, s, r, a, c, h, d, l) {
        return a.startAt = r, Ir(a).immediateRender = Vt(a.immediateRender), this.staggerTo(i, s, a, c, h, d, l)
    }, t.render = function(i, s, r) {
        var a = this._time,
            c = this._dirty ? this.totalDuration() : this._tDur,
            h = this._dur,
            d = i <= 0 ? 0 : Ct(i),
            l = this._zTime < 0 != i < 0 && (this._initted || !h),
            u, f, g, p, m, _, y, b, w, x, E, T;
        if (this !== rt && d > c && i >= 0 && (d = c), d !== this._tTime || r || l) {
            if (a !== this._time && h && (d += this._time - a, i += this._time - a), u = d, w = this._start, b = this._ts, _ = !b, l && (h || (a = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
                if (E = this._yoyo, m = h + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(m * 100 + i, s, r);
                if (u = Ct(d % m), d === c ? (p = this._repeat, u = h) : (p = ~~(d / m), p && p === d / m && (u = h, p--), u > h && (u = h)), x = Qs(this._tTime, m), !a && this._tTime && x !== p && this._tTime - x * m - this._dur <= 0 && (x = p), E && p & 1 && (u = h - u, T = 1), p !== x && !this._lock) {
                    var R = E && x & 1,
                        I = R === (E && p & 1);
                    if (p < x && (R = !R), a = R ? 0 : h, this._lock = 1, this.render(a || (T ? 0 : Ct(p * m)), s, !h)._lock = 0, this._tTime = d, !s && this.parent && ln(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1), a && a !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (h = this._dur, c = this._tDur, I && (this._lock = 2, a = R ? h : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !_) return this;
                    Lf(this, T)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (y = qv(this, Ct(a), Ct(u)), y && (d -= u - (u = y._start))), this._tTime = d, this._time = u, this._act = !b, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && u && !s && !p && (ln(this, "onStart"), this._tTime !== d)) return this;
            if (u >= a && i >= 0)
                for (f = this._first; f;) {
                    if (g = f._next, (f._act || u >= f._start) && f._ts && y !== f) {
                        if (f.parent !== this) return this.render(i, s, r);
                        if (f.render(f._ts > 0 ? (u - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (u - f._start) * f._ts, s, r), u !== this._time || !this._ts && !_) {
                            y = 0, g && (d += this._zTime = -Qe);
                            break
                        }
                    }
                    f = g
                } else {
                    f = this._last;
                    for (var B = i < 0 ? i : u; f;) {
                        if (g = f._prev, (f._act || B <= f._end) && f._ts && y !== f) {
                            if (f.parent !== this) return this.render(i, s, r);
                            if (f.render(f._ts > 0 ? (B - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (B - f._start) * f._ts, s, r || Ft && (f._initted || f._startAt)), u !== this._time || !this._ts && !_) {
                                y = 0, g && (d += this._zTime = B ? -Qe : Qe);
                                break
                            }
                        }
                        f = g
                    }
                }
            if (y && !s && (this.pause(), y.render(u >= a ? 0 : -Qe)._zTime = u >= a ? 1 : -1, this._ts)) return this._start = w, xa(this), this.render(i, s, r);
            this._onUpdate && !s && ln(this, "onUpdate", !0), (d === c && this._tTime >= this.totalDuration() || !d && a) && (w === this._start || Math.abs(b) !== Math.abs(this._ts)) && (this._lock || ((i || !h) && (d === c && this._ts > 0 || !d && this._ts < 0) && Si(this, 1), !s && !(i < 0 && !a) && (d || a || !c) && (ln(this, d === c && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < c && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, t.add = function(i, s) {
        var r = this;
        if (Qn(s) || (s = tn(this, s, i)), !(i instanceof Yr)) {
            if (Bt(i)) return i.forEach(function(a) {
                return r.add(a, s)
            }), this;
            if (Tt(i)) return this.addLabel(i, s);
            if (ut(i)) i = yt.delayedCall(0, i);
            else return this
        }
        return this !== i ? Cn(this, i, s) : this
    }, t.getChildren = function(i, s, r, a) {
        i === void 0 && (i = !0), s === void 0 && (s = !0), r === void 0 && (r = !0), a === void 0 && (a = -on);
        for (var c = [], h = this._first; h;) h._start >= a && (h instanceof yt ? s && c.push(h) : (r && c.push(h), i && c.push.apply(c, h.getChildren(!0, s, r)))), h = h._next;
        return c
    }, t.getById = function(i) {
        for (var s = this.getChildren(1, 1, 1), r = s.length; r--;)
            if (s[r].vars.id === i) return s[r]
    }, t.remove = function(i) {
        return Tt(i) ? this.removeLabel(i) : ut(i) ? this.killTweensOf(i) : (ya(this, i), i === this._recent && (this._recent = this._last), qi(this))
    }, t.totalTime = function(i, s) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Ct(Kt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), o.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime
    }, t.addLabel = function(i, s) {
        return this.labels[i] = tn(this, s), this
    }, t.removeLabel = function(i) {
        return delete this.labels[i], this
    }, t.addPause = function(i, s, r) {
        var a = yt.delayedCall(0, s || qr, r);
        return a.data = "isPause", this._hasPause = 1, Cn(this, a, tn(this, i))
    }, t.removePause = function(i) {
        var s = this._first;
        for (i = tn(this, i); s;) s._start === i && s.data === "isPause" && Si(s), s = s._next
    }, t.killTweensOf = function(i, s, r) {
        for (var a = this.getTweensOf(i, r), c = a.length; c--;) di !== a[c] && a[c].kill(i, s);
        return this
    }, t.getTweensOf = function(i, s) {
        for (var r = [], a = an(i), c = this._first, h = Qn(s), d; c;) c instanceof yt ? Nv(c._targets, a) && (h ? (!di || c._initted && c._ts) && c.globalTime(0) <= s && c.globalTime(c.totalDuration()) > s : !s || c.isActive()) && r.push(c) : (d = c.getTweensOf(a, s)).length && r.push.apply(r, d), c = c._next;
        return r
    }, t.tweenTo = function(i, s) {
        s = s || {};
        var r = this,
            a = tn(r, i),
            c = s,
            h = c.startAt,
            d = c.onStart,
            l = c.onStartParams,
            u = c.immediateRender,
            f, g = yt.to(r, un({
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration: s.duration || Math.abs((a - (h && "time" in h ? h.time : r._time)) / r.timeScale()) || Qe,
                onStart: function() {
                    if (r.pause(), !f) {
                        var m = s.duration || Math.abs((a - (h && "time" in h ? h.time : r._time)) / r.timeScale());
                        g._dur !== m && er(g, m, 0, 1).render(g._time, !0, !0), f = 1
                    }
                    d && d.apply(g, l || [])
                }
            }, s));
        return u ? g.render(0) : g
    }, t.tweenFromTo = function(i, s, r) {
        return this.tweenTo(s, un({
            startAt: {
                time: tn(this, i)
            }
        }, r))
    }, t.recent = function() {
        return this._recent
    }, t.nextLabel = function(i) {
        return i === void 0 && (i = this._time), Eu(this, tn(this, i))
    }, t.previousLabel = function(i) {
        return i === void 0 && (i = this._time), Eu(this, tn(this, i), 1)
    }, t.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Qe)
    }, t.shiftChildren = function(i, s, r) {
        r === void 0 && (r = 0);
        for (var a = this._first, c = this.labels, h; a;) a._start >= r && (a._start += i, a._end += i), a = a._next;
        if (s)
            for (h in c) c[h] >= r && (c[h] += i);
        return qi(this)
    }, t.invalidate = function(i) {
        var s = this._first;
        for (this._lock = 0; s;) s.invalidate(i), s = s._next;
        return o.prototype.invalidate.call(this, i)
    }, t.clear = function(i) {
        i === void 0 && (i = !0);
        for (var s = this._first, r; s;) r = s._next, this.remove(s), s = r;
        return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), qi(this)
    }, t.totalDuration = function(i) {
        var s = 0,
            r = this,
            a = r._last,
            c = on,
            h, d, l;
        if (arguments.length) return r.timeScale((r._repeat < 0 ? r.duration() : r.totalDuration()) / (r.reversed() ? -i : i));
        if (r._dirty) {
            for (l = r.parent; a;) h = a._prev, a._dirty && a.totalDuration(), d = a._start, d > c && r._sort && a._ts && !r._lock ? (r._lock = 1, Cn(r, a, d - a._delay, 1)._lock = 0) : c = d, d < 0 && a._ts && (s -= d, (!l && !r._dp || l && l.smoothChildTiming) && (r._start += d / r._ts, r._time -= d, r._tTime -= d), r.shiftChildren(-d, !1, -1 / 0), c = 0), a._end > s && a._ts && (s = a._end), a = h;
            er(r, r === rt && r._time > s ? r._time : s, 1, 1), r._dirty = 0
        }
        return r._tDur
    }, e.updateRoot = function(i) {
        if (rt._ts && (cf(rt, $o(i, rt)), af = Kt.frame), Kt.frame >= wu) {
            wu += $t.autoSleep || 120;
            var s = rt._first;
            if ((!s || !s._ts) && $t.autoSleep && Kt._listeners.length < 2) {
                for (; s && !s._ts;) s = s._next;
                s || Kt.sleep()
            }
        }
    }, e
}(Yr);
un(Ht.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var ab = function(e, t, n, i, s, r, a) {
        var c = new qt(this._pt, e, t, 0, 1, Of, null, s),
            h = 0,
            d = 0,
            l, u, f, g, p, m, _, y;
        for (c.b = n, c.e = i, n += "", i += "", (_ = ~i.indexOf("random(")) && (i = Xr(i)), r && (y = [n, i], r(y, e, t), n = y[0], i = y[1]), u = n.match(cl) || []; l = cl.exec(i);) g = l[0], p = i.substring(h, l.index), f ? f = (f + 1) % 5 : p.substr(-5) === "rgba(" && (f = 1), g !== u[d++] && (m = parseFloat(u[d - 1]) || 0, c._pt = {
            _next: c._pt,
            p: p || d === 1 ? p : ",",
            s: m,
            c: g.charAt(1) === "=" ? Us(m, g) - m : parseFloat(g) - m,
            m: f && f < 4 ? Math.round : 0
        }, h = cl.lastIndex);
        return c.c = h < i.length ? i.substring(h, i.length) : "", c.fp = a, (tf.test(i) || _) && (c.e = 0), this._pt = c, c
    },
    Pc = function(e, t, n, i, s, r, a, c, h, d) {
        ut(i) && (i = i(s || 0, e, r));
        var l = e[t],
            u = n !== "get" ? n : ut(l) ? h ? e[t.indexOf("set") || !ut(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](h) : e[t]() : l,
            f = ut(l) ? h ? db : Ff : Dc,
            g;
        if (Tt(i) && (~i.indexOf("random(") && (i = Xr(i)), i.charAt(1) === "=" && (g = Us(u, i) + (kt(u) || 0), (g || g === 0) && (i = g))), !d || u !== i || Vl) return !isNaN(u * i) && i !== "" ? (g = new qt(this._pt, e, t, +u || 0, i - (u || 0), typeof l == "boolean" ? pb : Bf, 0, f), h && (g.fp = h), a && g.modifier(a, this, e), this._pt = g) : (!l && !(t in e) && Ac(t, i), ab.call(this, e, t, u, i, f, c || $t.stringFilter, h))
    },
    lb = function(e, t, n, i, s) {
        if (ut(e) && (e = kr(e, s, t, n, i)), !kn(e) || e.style && e.nodeType || Bt(e) || Qd(e)) return Tt(e) ? kr(e, s, t, n, i) : e;
        var r = {},
            a;
        for (a in e) r[a] = kr(e[a], s, t, n, i);
        return r
    },
    If = function(e, t, n, i, s, r) {
        var a, c, h, d;
        if (Jt[e] && (a = new Jt[e]).init(s, a.rawVars ? t[e] : lb(t[e], i, s, r, n), n, i, r) !== !1 && (n._pt = c = new qt(n._pt, s, e, 0, 1, a.render, a, 0, a.priority), n !== Os))
            for (h = n._ptLookup[n._targets.indexOf(s)], d = a._props.length; d--;) h[a._props[d]] = c;
        return a
    },
    di, Vl, Ic = function o(e, t, n) {
        var i = e.vars,
            s = i.ease,
            r = i.startAt,
            a = i.immediateRender,
            c = i.lazy,
            h = i.onUpdate,
            d = i.onUpdateParams,
            l = i.callbackScope,
            u = i.runBackwards,
            f = i.yoyoEase,
            g = i.keyframes,
            p = i.autoRevert,
            m = e._dur,
            _ = e._startAt,
            y = e._targets,
            b = e.parent,
            w = b && b.data === "nested" ? b.vars.targets : y,
            x = e._overwrite === "auto" && !Mc,
            E = e.timeline,
            T, R, I, B, v, L, U, D, O, N, H, F, X;
        if (E && (!g || !s) && (s = "none"), e._ease = Xi(s, $s.ease), e._yEase = f ? Cf(Xi(f === !0 ? s : f, $s.ease)) : 0, f && e._yoyo && !e._repeat && (f = e._yEase, e._yEase = e._ease, e._ease = f), e._from = !E && !!i.runBackwards, !E || g && !i.stagger) {
            if (D = y[0] ? Wi(y[0]).harness : 0, F = D && i[D.prop], T = Zo(i, Cc), _ && (_._zTime < 0 && _.progress(1), t < 0 && u && a && !p ? _.render(-1, !0) : _.revert(u && m ? Ho : Bv), _._lazy = 0), r) {
                if (Si(e._startAt = yt.set(y, un({
                        data: "isStart",
                        overwrite: !1,
                        parent: b,
                        immediateRender: !0,
                        lazy: !_ && Vt(c),
                        startAt: null,
                        delay: 0,
                        onUpdate: h,
                        onUpdateParams: d,
                        callbackScope: l,
                        stagger: 0
                    }, r))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ft || !a && !p) && e._startAt.revert(Ho), a && m && t <= 0 && n <= 0) {
                    t && (e._zTime = t);
                    return
                }
            } else if (u && m && !_) {
                if (t && (a = !1), I = un({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: a && !_ && Vt(c),
                        immediateRender: a,
                        stagger: 0,
                        parent: b
                    }, T), F && (I[D.prop] = F), Si(e._startAt = yt.set(y, I)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ft ? e._startAt.revert(Ho) : e._startAt.render(-1, !0)), e._zTime = t, !a) o(e._startAt, Qe, Qe);
                else if (!t) return
            }
            for (e._pt = e._ptCache = 0, c = m && Vt(c) || c && !m, R = 0; R < y.length; R++) {
                if (v = y[R], U = v._gsap || Rc(y)[R]._gsap, e._ptLookup[R] = N = {}, Ol[U.id] && vi.length && Ko(), H = w === y ? R : w.indexOf(v), D && (O = new D).init(v, F || T, e, H, w) !== !1 && (e._pt = B = new qt(e._pt, v, O.name, 0, 1, O.render, O, 0, O.priority), O._props.forEach(function(Z) {
                        N[Z] = B
                    }), O.priority && (L = 1)), !D || F)
                    for (I in T) Jt[I] && (O = If(I, T, e, H, v, w)) ? O.priority && (L = 1) : N[I] = B = Pc.call(e, v, I, "get", T[I], H, w, 0, i.stringFilter);
                e._op && e._op[R] && e.kill(v, e._op[R]), x && e._pt && (di = e, rt.killTweensOf(v, N, e.globalTime(t)), X = !e.parent, di = 0), e._pt && c && (Ol[U.id] = 1)
            }
            L && Nf(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = h, e._initted = (!e._op || e._pt) && !X, g && t <= 0 && E.render(on, !0, !0)
    },
    cb = function(e, t, n, i, s, r, a) {
        var c = (e._pt && e._ptCache || (e._ptCache = {}))[t],
            h, d, l, u;
        if (!c)
            for (c = e._ptCache[t] = [], l = e._ptLookup, u = e._targets.length; u--;) {
                if (h = l[u][t], h && h.d && h.d._pt)
                    for (h = h.d._pt; h && h.p !== t && h.fp !== t;) h = h._next;
                if (!h) return Vl = 1, e.vars[t] = "+=0", Ic(e, a), Vl = 0, 1;
                c.push(h)
            }
        for (u = c.length; u--;) d = c[u], h = d._pt || d, h.s = (i || i === 0) && !s ? i : h.s + (i || 0) + r * h.c, h.c = n - h.s, d.e && (d.e = pt(n) + kt(d.e)), d.b && (d.b = h.s + kt(d.b))
    },
    hb = function(e, t) {
        var n = e[0] ? Wi(e[0]).harness : 0,
            i = n && n.aliases,
            s, r, a, c;
        if (!i) return t;
        s = $i({}, t);
        for (r in i)
            if (r in s)
                for (c = i[r].split(","), a = c.length; a--;) s[c[a]] = s[r];
        return s
    },
    ub = function(e, t, n, i) {
        var s = t.ease || i || "power1.inOut",
            r, a;
        if (Bt(t)) a = n[e] || (n[e] = []), t.forEach(function(c, h) {
            return a.push({
                t: h / (t.length - 1) * 100,
                v: c,
                e: s
            })
        });
        else
            for (r in t) a = n[r] || (n[r] = []), r === "ease" || a.push({
                t: parseFloat(e),
                v: t[r],
                e: s
            })
    },
    kr = function(e, t, n, i, s) {
        return ut(e) ? e.call(t, n, i, s) : Tt(e) && ~e.indexOf("random(") ? Xr(e) : e
    },
    Df = Lc + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    kf = {};
Wt(Df + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
    return kf[o] = 1
});
var yt = function(o) {
    Zd(e, o);

    function e(n, i, s, r) {
        var a;
        typeof i == "number" && (s.duration = i, i = s, s = null), a = o.call(this, r ? i : Ir(i)) || this;
        var c = a.vars,
            h = c.duration,
            d = c.delay,
            l = c.immediateRender,
            u = c.stagger,
            f = c.overwrite,
            g = c.keyframes,
            p = c.defaults,
            m = c.scrollTrigger,
            _ = c.yoyoEase,
            y = i.parent || rt,
            b = (Bt(n) || Qd(n) ? Qn(n[0]) : "length" in i) ? [n] : an(n),
            w, x, E, T, R, I, B, v;
        if (a._targets = b.length ? Rc(b) : Jo("GSAP target " + n + " not found. https://greensock.com", !$t.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, g || u || Bo(h) || Bo(d)) {
            if (i = a.vars, w = a.timeline = new Ht({
                    data: "nested",
                    defaults: p || {},
                    targets: y && y.data === "nested" ? y.vars.targets : b
                }), w.kill(), w.parent = w._dp = qn(a), w._start = 0, u || Bo(h) || Bo(d)) {
                if (T = b.length, B = u && yf(u), kn(u))
                    for (R in u) ~Df.indexOf(R) && (v || (v = {}), v[R] = u[R]);
                for (x = 0; x < T; x++) E = Zo(i, kf), E.stagger = 0, _ && (E.yoyoEase = _), v && $i(E, v), I = b[x], E.duration = +kr(h, qn(a), x, I, b), E.delay = (+kr(d, qn(a), x, I, b) || 0) - a._delay, !u && T === 1 && E.delay && (a._delay = d = E.delay, a._start += d, E.delay = 0), w.to(I, E, B ? B(x, I, b) : 0), w._ease = ze.none;
                w.duration() ? h = d = 0 : a.timeline = 0
            } else if (g) {
                Ir(un(w.vars.defaults, {
                    ease: "none"
                })), w._ease = Xi(g.ease || i.ease || "none");
                var L = 0,
                    U, D, O;
                if (Bt(g)) g.forEach(function(N) {
                    return w.to(b, N, ">")
                }), w.duration();
                else {
                    E = {};
                    for (R in g) R === "ease" || R === "easeEach" || ub(R, g[R], E, g.easeEach);
                    for (R in E)
                        for (U = E[R].sort(function(N, H) {
                                return N.t - H.t
                            }), L = 0, x = 0; x < U.length; x++) D = U[x], O = {
                            ease: D.e,
                            duration: (D.t - (x ? U[x - 1].t : 0)) / 100 * h
                        }, O[R] = D.v, w.to(b, O, L), L += O.duration;
                    w.duration() < h && w.to({}, {
                        duration: h - w.duration()
                    })
                }
            }
            h || a.duration(h = w.duration())
        } else a.timeline = 0;
        return f === !0 && !Mc && (di = qn(a), rt.killTweensOf(b), di = 0), Cn(y, qn(a), s), i.reversed && a.reverse(), i.paused && a.paused(!0), (l || !h && !g && a._start === Ct(y._time) && Vt(l) && Gv(qn(a)) && y.data !== "nested") && (a._tTime = -Qe, a.render(Math.max(0, -d) || 0)), m && pf(qn(a), m), a
    }
    var t = e.prototype;
    return t.render = function(i, s, r) {
        var a = this._time,
            c = this._tDur,
            h = this._dur,
            d = i < 0,
            l = i > c - Qe && !d ? c : i < Qe ? 0 : i,
            u, f, g, p, m, _, y, b, w;
        if (!h) Wv(this, i, s, r);
        else if (l !== this._tTime || !i || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d) {
            if (u = l, b = this.timeline, this._repeat) {
                if (p = h + this._rDelay, this._repeat < -1 && d) return this.totalTime(p * 100 + i, s, r);
                if (u = Ct(l % p), l === c ? (g = this._repeat, u = h) : (g = ~~(l / p), g && g === l / p && (u = h, g--), u > h && (u = h)), _ = this._yoyo && g & 1, _ && (w = this._yEase, u = h - u), m = Qs(this._tTime, p), u === a && !r && this._initted) return this._tTime = l, this;
                g !== m && (b && this._yEase && Lf(b, _), this.vars.repeatRefresh && !_ && !this._lock && (this._lock = r = 1, this.render(Ct(p * g), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (mf(this, d ? i : u, r, s, l)) return this._tTime = 0, this;
                if (a !== this._time) return this;
                if (h !== this._dur) return this.render(i, s, r)
            }
            if (this._tTime = l, this._time = u, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (w || this._ease)(u / h), this._from && (this.ratio = y = 1 - y), u && !a && !s && !g && (ln(this, "onStart"), this._tTime !== l)) return this;
            for (f = this._pt; f;) f.r(y, f.d), f = f._next;
            b && b.render(i < 0 ? i : !u && _ ? -Qe : b._dur * b._ease(u / this._dur), s, r) || this._startAt && (this._zTime = i), this._onUpdate && !s && (d && Nl(this, i, s, r), ln(this, "onUpdate")), this._repeat && g !== m && this.vars.onRepeat && !s && this.parent && ln(this, "onRepeat"), (l === this._tDur || !l) && this._tTime === l && (d && !this._onUpdate && Nl(this, i, !0, !0), (i || !h) && (l === this._tDur && this._ts > 0 || !l && this._ts < 0) && Si(this, 1), !s && !(d && !a) && (l || a || _) && (ln(this, l === c ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < c && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, t.targets = function() {
        return this._targets
    }, t.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), o.prototype.invalidate.call(this, i)
    }, t.resetTo = function(i, s, r, a) {
        jr || Kt.wake(), this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            h;
        return this._initted || Ic(this, c), h = this._ease(c / this._dur), cb(this, i, s, r, a, h, c) ? this.resetTo(i, s, r, a) : (va(this, 0), this.parent || df(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, t.kill = function(i, s) {
        if (s === void 0 && (s = "all"), !i && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? Er(this) : this;
        if (this.timeline) {
            var r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, s, di && di.vars.overwrite !== !0)._first || Er(this), this.parent && r !== this.timeline.totalDuration() && er(this, this._dur * this.timeline._tDur / r, 0, 1), this
        }
        var a = this._targets,
            c = i ? an(i) : a,
            h = this._ptLookup,
            d = this._pt,
            l, u, f, g, p, m, _;
        if ((!s || s === "all") && Hv(a, c)) return s === "all" && (this._pt = 0), Er(this);
        for (l = this._op = this._op || [], s !== "all" && (Tt(s) && (p = {}, Wt(s, function(y) {
                return p[y] = 1
            }), s = p), s = hb(a, s)), _ = a.length; _--;)
            if (~c.indexOf(a[_])) {
                u = h[_], s === "all" ? (l[_] = s, g = u, f = {}) : (f = l[_] = l[_] || {}, g = s);
                for (p in g) m = u && u[p], m && ((!("kill" in m.d) || m.d.kill(p) === !0) && ya(this, m, "_pt"), delete u[p]), f !== "all" && (f[p] = 1)
            }
        return this._initted && !this._pt && d && Er(this), this
    }, e.to = function(i, s) {
        return new e(i, s, arguments[2])
    }, e.from = function(i, s) {
        return Dr(1, arguments)
    }, e.delayedCall = function(i, s, r, a) {
        return new e(s, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: s,
            onReverseComplete: s,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: a
        })
    }, e.fromTo = function(i, s, r) {
        return Dr(2, arguments)
    }, e.set = function(i, s) {
        return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s)
    }, e.killTweensOf = function(i, s, r) {
        return rt.killTweensOf(i, s, r)
    }, e
}(Yr);
un(yt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Wt("staggerTo,staggerFrom,staggerFromTo", function(o) {
    yt[o] = function() {
        var e = new Ht,
            t = Hl.call(arguments, 0);
        return t.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, t)
    }
});
var Dc = function(e, t, n) {
        return e[t] = n
    },
    Ff = function(e, t, n) {
        return e[t](n)
    },
    db = function(e, t, n, i) {
        return e[t](i.fp, n)
    },
    fb = function(e, t, n) {
        return e.setAttribute(t, n)
    },
    kc = function(e, t) {
        return ut(e[t]) ? Ff : Sc(e[t]) && e.setAttribute ? fb : Dc
    },
    Bf = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    },
    pb = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    },
    Of = function(e, t) {
        var n = t._pt,
            i = "";
        if (!e && t.b) i = t.b;
        else if (e === 1 && t.e) i = t.e;
        else {
            for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i, n = n._next;
            i += t.c
        }
        t.set(t.t, t.p, i, t)
    },
    Fc = function(e, t) {
        for (var n = t._pt; n;) n.r(e, n.d), n = n._next
    },
    mb = function(e, t, n, i) {
        for (var s = this._pt, r; s;) r = s._next, s.p === i && s.modifier(e, t, n), s = r
    },
    gb = function(e) {
        for (var t = this._pt, n, i; t;) i = t._next, t.p === e && !t.op || t.op === e ? ya(this, t, "_pt") : t.dep || (n = 1), t = i;
        return !n
    },
    _b = function(e, t, n, i) {
        i.mSet(e, t, i.m.call(i.tween, n, i.mt), i)
    },
    Nf = function(e) {
        for (var t = e._pt, n, i, s, r; t;) {
            for (n = t._next, i = s; i && i.pr > t.pr;) i = i._next;
            (t._prev = i ? i._prev : r) ? t._prev._next = t: s = t, (t._next = i) ? i._prev = t : r = t, t = n
        }
        e._pt = s
    },
    qt = function() {
        function o(t, n, i, s, r, a, c, h, d) {
            this.t = n, this.s = s, this.c = r, this.p = i, this.r = a || Bf, this.d = c || this, this.set = h || Dc, this.pr = d || 0, this._next = t, t && (t._prev = this)
        }
        var e = o.prototype;
        return e.modifier = function(n, i, s) {
            this.mSet = this.mSet || this.set, this.set = _b, this.m = n, this.mt = s, this.tween = i
        }, o
    }();
Wt(Lc + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
    return Cc[o] = 1
});
Qt.TweenMax = Qt.TweenLite = yt;
Qt.TimelineLite = Qt.TimelineMax = Ht;
rt = new Ht({
    sortChildren: !1,
    defaults: $s,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
$t.stringFilter = Af;
var ji = [],
    Go = {},
    yb = [],
    Cu = 0,
    xb = 0,
    pl = function(e) {
        return (Go[e] || yb).map(function(t) {
            return t()
        })
    },
    Wl = function() {
        var e = Date.now(),
            t = [];
        e - Cu > 2 && (pl("matchMediaInit"), ji.forEach(function(n) {
            var i = n.queries,
                s = n.conditions,
                r, a, c, h;
            for (a in i) r = nn.matchMedia(i[a]).matches, r && (c = 1), r !== s[a] && (s[a] = r, h = 1);
            h && (n.revert(), c && t.push(n))
        }), pl("matchMediaRevert"), t.forEach(function(n) {
            return n.onMatch(n)
        }), Cu = e, pl("matchMedia"))
    },
    zf = function() {
        function o(t, n) {
            this.selector = n && Ul(n), this.data = [], this._r = [], this.isReverted = !1, this.id = xb++, t && this.add(t)
        }
        var e = o.prototype;
        return e.add = function(n, i, s) {
            ut(n) && (s = i, i = n, n = ut);
            var r = this,
                a = function() {
                    var h = ct,
                        d = r.selector,
                        l;
                    return h && h !== r && h.data.push(r), s && (r.selector = Ul(s)), ct = r, l = i.apply(r, arguments), ut(l) && r._r.push(l), ct = h, r.selector = d, r.isReverted = !1, l
                };
            return r.last = a, n === ut ? a(r) : n ? r[n] = a : a
        }, e.ignore = function(n) {
            var i = ct;
            ct = null, n(this), ct = i
        }, e.getTweens = function() {
            var n = [];
            return this.data.forEach(function(i) {
                return i instanceof o ? n.push.apply(n, i.getTweens()) : i instanceof yt && !(i.parent && i.parent.data === "nested") && n.push(i)
            }), n
        }, e.clear = function() {
            this._r.length = this.data.length = 0
        }, e.kill = function(n, i) {
            var s = this;
            if (n) {
                var r = this.getTweens();
                this.data.forEach(function(c) {
                    c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(h) {
                        return r.splice(r.indexOf(h), 1)
                    }))
                }), r.map(function(c) {
                    return {
                        g: c.globalTime(0),
                        t: c
                    }
                }).sort(function(c, h) {
                    return h.g - c.g || -1
                }).forEach(function(c) {
                    return c.t.revert(n)
                }), this.data.forEach(function(c) {
                    return c instanceof Ht ? c.data !== "nested" && c.kill() : !(c instanceof yt) && c.revert && c.revert(n)
                }), this._r.forEach(function(c) {
                    return c(n, s)
                }), this.isReverted = !0
            } else this.data.forEach(function(c) {
                return c.kill && c.kill()
            });
            if (this.clear(), i)
                for (var a = ji.length; a--;) ji[a].id === this.id && ji.splice(a, 1)
        }, e.revert = function(n) {
            this.kill(n || {})
        }, o
    }(),
    vb = function() {
        function o(t) {
            this.contexts = [], this.scope = t
        }
        var e = o.prototype;
        return e.add = function(n, i, s) {
            kn(n) || (n = {
                matches: n
            });
            var r = new zf(0, s || this.scope),
                a = r.conditions = {},
                c, h, d;
            ct && !r.selector && (r.selector = ct.selector), this.contexts.push(r), i = r.add("onMatch", i), r.queries = n;
            for (h in n) h === "all" ? d = 1 : (c = nn.matchMedia(n[h]), c && (ji.indexOf(r) < 0 && ji.push(r), (a[h] = c.matches) && (d = 1), c.addListener ? c.addListener(Wl) : c.addEventListener("change", Wl)));
            return d && i(r), this
        }, e.revert = function(n) {
            this.kill(n || {})
        }, e.kill = function(n) {
            this.contexts.forEach(function(i) {
                return i.kill(n, !0)
            })
        }, o
    }(),
    Qo = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            t.forEach(function(i) {
                return Sf(i)
            })
        },
        timeline: function(e) {
            return new Ht(e)
        },
        getTweensOf: function(e, t) {
            return rt.getTweensOf(e, t)
        },
        getProperty: function(e, t, n, i) {
            Tt(e) && (e = an(e)[0]);
            var s = Wi(e || {}).get,
                r = n ? uf : hf;
            return n === "native" && (n = ""), e && (t ? r((Jt[t] && Jt[t].get || s)(e, t, n, i)) : function(a, c, h) {
                return r((Jt[a] && Jt[a].get || s)(e, a, c, h))
            })
        },
        quickSetter: function(e, t, n) {
            if (e = an(e), e.length > 1) {
                var i = e.map(function(d) {
                        return Xt.quickSetter(d, t, n)
                    }),
                    s = i.length;
                return function(d) {
                    for (var l = s; l--;) i[l](d)
                }
            }
            e = e[0] || {};
            var r = Jt[t],
                a = Wi(e),
                c = a.harness && (a.harness.aliases || {})[t] || t,
                h = r ? function(d) {
                    var l = new r;
                    Os._pt = 0, l.init(e, n ? d + n : d, Os, 0, [e]), l.render(1, l), Os._pt && Fc(1, Os)
                } : a.set(e, c);
            return r ? h : function(d) {
                return h(e, c, n ? d + n : d, a, 1)
            }
        },
        quickTo: function(e, t, n) {
            var i, s = Xt.to(e, $i((i = {}, i[t] = "+=0.1", i.paused = !0, i), n || {})),
                r = function(c, h, d) {
                    return s.resetTo(t, c, h, d)
                };
            return r.tween = s, r
        },
        isTweening: function(e) {
            return rt.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Xi(e.ease, $s.ease)), Mu($s, e || {})
        },
        config: function(e) {
            return Mu($t, e || {})
        },
        registerEffect: function(e) {
            var t = e.name,
                n = e.effect,
                i = e.plugins,
                s = e.defaults,
                r = e.extendTimeline;
            (i || "").split(",").forEach(function(a) {
                return a && !Jt[a] && !Qt[a] && Jo(t + " effect requires " + a + " plugin.")
            }), hl[t] = function(a, c, h) {
                return n(an(a), un(c || {}, s), h)
            }, r && (Ht.prototype[t] = function(a, c, h) {
                return this.add(hl[t](a, kn(c) ? c : (h = c) && {}, this), h)
            })
        },
        registerEase: function(e, t) {
            ze[e] = Xi(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? Xi(e, t) : ze
        },
        getById: function(e) {
            return rt.getById(e)
        },
        exportRoot: function(e, t) {
            e === void 0 && (e = {});
            var n = new Ht(e),
                i, s;
            for (n.smoothChildTiming = Vt(e.smoothChildTiming), rt.remove(n), n._dp = 0, n._time = n._tTime = rt._time, i = rt._first; i;) s = i._next, (t || !(!i._dur && i instanceof yt && i.vars.onComplete === i._targets[0])) && Cn(n, i, i._start - i._delay), i = s;
            return Cn(rt, n, 0), n
        },
        context: function(e, t) {
            return e ? new zf(e, t) : ct
        },
        matchMedia: function(e) {
            return new vb(e)
        },
        matchMediaRefresh: function() {
            return ji.forEach(function(e) {
                var t = e.conditions,
                    n, i;
                for (i in t) t[i] && (t[i] = !1, n = 1);
                n && e.revert()
            }) || Wl()
        },
        addEventListener: function(e, t) {
            var n = Go[e] || (Go[e] = []);
            ~n.indexOf(t) || n.push(t)
        },
        removeEventListener: function(e, t) {
            var n = Go[e],
                i = n && n.indexOf(t);
            i >= 0 && n.splice(i, 1)
        },
        utils: {
            wrap: $v,
            wrapYoyo: Qv,
            distribute: yf,
            random: vf,
            snap: xf,
            normalize: Zv,
            getUnit: kt,
            clamp: jv,
            splitColor: Tf,
            toArray: an,
            selector: Ul,
            mapRange: wf,
            pipe: Jv,
            unitize: Kv,
            interpolate: eb,
            shuffle: _f
        },
        install: rf,
        effects: hl,
        ticker: Kt,
        updateRoot: Ht.updateRoot,
        plugins: Jt,
        globalTimeline: rt,
        core: {
            PropTween: qt,
            globals: of ,
            Tween: yt,
            Timeline: Ht,
            Animation: Yr,
            getCache: Wi,
            _removeLinkedListItem: ya,
            reverting: function() {
                return Ft
            },
            context: function(e) {
                return e && ct && (ct.data.push(e), e._ctx = ct), ct
            },
            suppressOverwrites: function(e) {
                return Mc = e
            }
        }
    };
Wt("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
    return Qo[o] = yt[o]
});
Kt.add(Ht.updateRoot);
Os = Qo.to({}, {
    duration: 0
});
var bb = function(e, t) {
        for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
        return n
    },
    wb = function(e, t) {
        var n = e._targets,
            i, s, r;
        for (i in t)
            for (s = n.length; s--;) r = e._ptLookup[s][i], r && (r = r.d) && (r._pt && (r = bb(r, i)), r && r.modifier && r.modifier(t[i], e, n[s], i))
    },
    ml = function(e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function(i, s, r) {
                r._onInit = function(a) {
                    var c, h;
                    if (Tt(s) && (c = {}, Wt(s, function(d) {
                            return c[d] = 1
                        }), s = c), t) {
                        c = {};
                        for (h in s) c[h] = t(s[h]);
                        s = c
                    }
                    wb(a, s)
                }
            }
        }
    },
    Xt = Qo.registerPlugin({
        name: "attr",
        init: function(e, t, n, i, s) {
            var r, a, c;
            this.tween = n;
            for (r in t) c = e.getAttribute(r) || "", a = this.add(e, "setAttribute", (c || 0) + "", t[r], i, s, 0, 0, r), a.op = r, a.b = c, this._props.push(r)
        },
        render: function(e, t) {
            for (var n = t._pt; n;) Ft ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
        }
    }, {
        name: "endArray",
        init: function(e, t) {
            for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
        }
    }, ml("roundProps", Gl), ml("modifiers"), ml("snap", xf)) || Qo;
yt.version = Ht.version = Xt.version = "3.12.1";
sf = 1;
Tc() && tr();
var Hf = ze.Power0,
    Uf = ze.Power1,
    et = ze.Power2,
    wi = ze.Power3,
    Mb = ze.Power4,
    Sb = ze.Linear;
ze.Quad;
ze.Cubic;
ze.Quart;
ze.Quint;
ze.Strong;
ze.Elastic;
var yn = ze.Back;
ze.SteppedEase;
ze.Bounce;
ze.Sine;
ze.Expo;
ze.Circ;
/*!
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Lu, fi, Gs, Bc, Ui, Ru, Oc, Tb = function() {
        return typeof window < "u"
    },
    ei = {},
    Bi = 180 / Math.PI,
    Vs = Math.PI / 180,
    Ls = Math.atan2,
    Pu = 1e8,
    Nc = /([A-Z])/g,
    Eb = /(left|right|width|margin|padding|x)/i,
    Ab = /[\s,\(]\S/,
    Rn = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    ql = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    Cb = function(e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    Lb = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    },
    Rb = function(e, t) {
        var n = t.s + t.c * e;
        t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
    },
    Gf = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    },
    Vf = function(e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
    },
    Pb = function(e, t, n) {
        return e.style[t] = n
    },
    Ib = function(e, t, n) {
        return e.style.setProperty(t, n)
    },
    Db = function(e, t, n) {
        return e._gsap[t] = n
    },
    kb = function(e, t, n) {
        return e._gsap.scaleX = e._gsap.scaleY = n
    },
    Fb = function(e, t, n, i, s) {
        var r = e._gsap;
        r.scaleX = r.scaleY = n, r.renderTransform(s, r)
    },
    Bb = function(e, t, n, i, s) {
        var r = e._gsap;
        r[t] = n, r.renderTransform(s, r)
    },
    at = "transform",
    vn = at + "Origin",
    Ob = function o(e, t) {
        var n = this,
            i = this.target,
            s = i.style;
        if (e in ei && s) {
            if (this.tfm = this.tfm || {}, e !== "transform") e = Rn[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(r) {
                return n.tfm[r] = jn(i, r)
            }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : jn(i, e);
            else return Rn.transform.split(",").forEach(function(r) {
                return o.call(n, r, t)
            });
            if (this.props.indexOf(at) >= 0) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(vn, t, "")), e = at
        }(s || t) && this.props.push(e, t, s[e])
    },
    Wf = function(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    Nb = function() {
        var e = this.props,
            t = this.target,
            n = t.style,
            i = t._gsap,
            s, r;
        for (s = 0; s < e.length; s += 3) e[s + 1] ? t[e[s]] = e[s + 2] : e[s + 2] ? n[e[s]] = e[s + 2] : n.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Nc, "-$1").toLowerCase());
        if (this.tfm) {
            for (r in this.tfm) i[r] = this.tfm[r];
            i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = Oc(), (!s || !s.isStart) && !n[at] && (Wf(n), i.uncache = 1)
        }
    },
    qf = function(e, t) {
        var n = {
            target: e,
            props: [],
            revert: Nb,
            save: Ob
        };
        return e._gsap || Xt.core.getCache(e), t && t.split(",").forEach(function(i) {
            return n.save(i)
        }), n
    },
    Xf, Xl = function(e, t) {
        var n = fi.createElementNS ? fi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : fi.createElement(e);
        return n.style ? n : fi.createElement(e)
    },
    In = function o(e, t, n) {
        var i = getComputedStyle(e);
        return i[t] || i.getPropertyValue(t.replace(Nc, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && o(e, nr(t) || t, 1) || ""
    },
    Iu = "O,Moz,ms,Ms,Webkit".split(","),
    nr = function(e, t, n) {
        var i = t || Ui,
            s = i.style,
            r = 5;
        if (e in s && !n) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(Iu[r] + e in s););
        return r < 0 ? null : (r === 3 ? "ms" : r >= 0 ? Iu[r] : "") + e
    },
    jl = function() {
        Tb() && window.document && (Lu = window, fi = Lu.document, Gs = fi.documentElement, Ui = Xl("div") || {
            style: {}
        }, Xl("div"), at = nr(at), vn = at + "Origin", Ui.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Xf = !!nr("perspective"), Oc = Xt.core.reverting, Bc = 1)
    },
    gl = function o(e) {
        var t = Xl("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = this.parentNode,
            i = this.nextSibling,
            s = this.style.cssText,
            r;
        if (Gs.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
            r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = o
        } catch {} else this._gsapBBox && (r = this._gsapBBox());
        return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), Gs.removeChild(t), this.style.cssText = s, r
    },
    Du = function(e, t) {
        for (var n = t.length; n--;)
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
    },
    jf = function(e) {
        var t;
        try {
            t = e.getBBox()
        } catch {
            t = gl.call(e, !0)
        }
        return t && (t.width || t.height) || e.getBBox === gl || (t = gl.call(e, !0)), t && !t.width && !t.x && !t.y ? {
            x: +Du(e, ["x", "cx", "x1"]) || 0,
            y: +Du(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
    },
    Yf = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && jf(e))
    },
    Jr = function(e, t) {
        if (t) {
            var n = e.style;
            t in ei && t !== vn && (t = at), n.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(t.replace(Nc, "-$1").toLowerCase())) : n.removeAttribute(t)
        }
    },
    pi = function(e, t, n, i, s, r) {
        var a = new qt(e._pt, t, n, 0, 1, r ? Vf : Gf);
        return e._pt = a, a.b = i, a.e = s, e._props.push(n), a
    },
    ku = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    zb = {
        grid: 1,
        flex: 1
    },
    Ti = function o(e, t, n, i) {
        var s = parseFloat(n) || 0,
            r = (n + "").trim().substr((s + "").length) || "px",
            a = Ui.style,
            c = Eb.test(t),
            h = e.tagName.toLowerCase() === "svg",
            d = (h ? "client" : "offset") + (c ? "Width" : "Height"),
            l = 100,
            u = i === "px",
            f = i === "%",
            g, p, m, _;
        return i === r || !s || ku[i] || ku[r] ? s : (r !== "px" && !u && (s = o(e, t, n, "px")), _ = e.getCTM && Yf(e), (f || r === "%") && (ei[t] || ~t.indexOf("adius")) ? (g = _ ? e.getBBox()[c ? "width" : "height"] : e[d], pt(f ? s / g * l : s / 100 * g)) : (a[c ? "width" : "height"] = l + (u ? r : i), p = ~t.indexOf("adius") || i === "em" && e.appendChild && !h ? e : e.parentNode, _ && (p = (e.ownerSVGElement || {}).parentNode), (!p || p === fi || !p.appendChild) && (p = fi.body), m = p._gsap, m && f && m.width && c && m.time === Kt.time && !m.uncache ? pt(s / m.width * l) : ((f || r === "%") && !zb[In(p, "display")] && (a.position = In(e, "position")), p === e && (a.position = "static"), p.appendChild(Ui), g = Ui[d], p.removeChild(Ui), a.position = "absolute", c && f && (m = Wi(p), m.time = Kt.time, m.width = p[d]), pt(u ? g * s / l : g && s ? l / g * s : 0))))
    },
    jn = function(e, t, n, i) {
        var s;
        return Bc || jl(), t in Rn && t !== "transform" && (t = Rn[t], ~t.indexOf(",") && (t = t.split(",")[0])), ei[t] && t !== "transform" ? (s = Zr(e, i), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : ta(In(e, vn)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = ea[t] && ea[t](e, t, n) || In(e, t) || lf(e, t) || (t === "opacity" ? 1 : 0))), n && !~(s + "").trim().indexOf(" ") ? Ti(e, t, s, n) + n : s
    },
    Hb = function(e, t, n, i) {
        if (!n || n === "none") {
            var s = nr(t, e, 1),
                r = s && In(e, s, 1);
            r && r !== n ? (t = s, n = r) : t === "borderColor" && (n = In(e, "borderTopColor"))
        }
        var a = new qt(this._pt, e.style, t, 0, 1, Of),
            c = 0,
            h = 0,
            d, l, u, f, g, p, m, _, y, b, w, x;
        if (a.b = n, a.e = i, n += "", i += "", i === "auto" && (e.style[t] = i, i = In(e, t) || i, e.style[t] = n), d = [n, i], Af(d), n = d[0], i = d[1], u = n.match(Bs) || [], x = i.match(Bs) || [], x.length) {
            for (; l = Bs.exec(i);) m = l[0], y = i.substring(c, l.index), g ? g = (g + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1), m !== (p = u[h++] || "") && (f = parseFloat(p) || 0, w = p.substr((f + "").length), m.charAt(1) === "=" && (m = Us(f, m) + w), _ = parseFloat(m), b = m.substr((_ + "").length), c = Bs.lastIndex - b.length, b || (b = b || $t.units[t] || w, c === i.length && (i += b, a.e += b)), w !== b && (f = Ti(e, t, p, b) || 0), a._pt = {
                _next: a._pt,
                p: y || h === 1 ? y : ",",
                s: f,
                c: _ - f,
                m: g && g < 4 || t === "zIndex" ? Math.round : 0
            });
            a.c = c < i.length ? i.substring(c, i.length) : ""
        } else a.r = t === "display" && i === "none" ? Vf : Gf;
        return tf.test(i) && (a.e = 0), this._pt = a, a
    },
    Fu = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    Ub = function(e) {
        var t = e.split(" "),
            n = t[0],
            i = t[1] || "50%";
        return (n === "top" || n === "bottom" || i === "left" || i === "right") && (e = n, n = i, i = e), t[0] = Fu[n] || n, t[1] = Fu[i] || i, t.join(" ")
    },
    Gb = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var n = t.t,
                i = n.style,
                s = t.u,
                r = n._gsap,
                a, c, h;
            if (s === "all" || s === !0) i.cssText = "", c = 1;
            else
                for (s = s.split(","), h = s.length; --h > -1;) a = s[h], ei[a] && (c = 1, a = a === "transformOrigin" ? vn : at), Jr(n, a);
            c && (Jr(n, at), r && (r.svg && n.removeAttribute("transform"), Zr(n, 1), r.uncache = 1, Wf(i)))
        }
    },
    ea = {
        clearProps: function(e, t, n, i, s) {
            if (s.data !== "isFromStart") {
                var r = e._pt = new qt(e._pt, t, n, 0, 0, Gb);
                return r.u = i, r.pr = -10, r.tween = s, e._props.push(n), 1
            }
        }
    },
    Kr = [1, 0, 0, 1, 0, 0],
    Jf = {},
    Kf = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    Bu = function(e) {
        var t = In(e, at);
        return Kf(t) ? Kr : t.substr(7).match(ef).map(pt)
    },
    zc = function(e, t) {
        var n = e._gsap || Wi(e),
            i = e.style,
            s = Bu(e),
            r, a, c, h;
        return n.svg && e.getAttribute("transform") ? (c = e.transform.baseVal.consolidate().matrix, s = [c.a, c.b, c.c, c.d, c.e, c.f], s.join(",") === "1,0,0,1,0,0" ? Kr : s) : (s === Kr && !e.offsetParent && e !== Gs && !n.svg && (c = i.display, i.display = "block", r = e.parentNode, (!r || !e.offsetParent) && (h = 1, a = e.nextElementSibling, Gs.appendChild(e)), s = Bu(e), c ? i.display = c : Jr(e, "display"), h && (a ? r.insertBefore(e, a) : r ? r.appendChild(e) : Gs.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
    },
    Yl = function(e, t, n, i, s, r) {
        var a = e._gsap,
            c = s || zc(e, !0),
            h = a.xOrigin || 0,
            d = a.yOrigin || 0,
            l = a.xOffset || 0,
            u = a.yOffset || 0,
            f = c[0],
            g = c[1],
            p = c[2],
            m = c[3],
            _ = c[4],
            y = c[5],
            b = t.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0,
            E, T, R, I;
        n ? c !== Kr && (T = f * m - g * p) && (R = w * (m / T) + x * (-p / T) + (p * y - m * _) / T, I = w * (-g / T) + x * (f / T) - (f * y - g * _) / T, w = R, x = I) : (E = jf(e), w = E.x + (~b[0].indexOf("%") ? w / 100 * E.width : w), x = E.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * E.height : x)), i || i !== !1 && a.smooth ? (_ = w - h, y = x - d, a.xOffset = l + (_ * f + y * p) - _, a.yOffset = u + (_ * g + y * m) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = w, a.yOrigin = x, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!n, e.style[vn] = "0px 0px", r && (pi(r, a, "xOrigin", h, w), pi(r, a, "yOrigin", d, x), pi(r, a, "xOffset", l, a.xOffset), pi(r, a, "yOffset", u, a.yOffset)), e.setAttribute("data-svg-origin", w + " " + x)
    },
    Zr = function(e, t) {
        var n = e._gsap || new Pf(e);
        if ("x" in n && !t && !n.uncache) return n;
        var i = e.style,
            s = n.scaleX < 0,
            r = "px",
            a = "deg",
            c = getComputedStyle(e),
            h = In(e, vn) || "0",
            d, l, u, f, g, p, m, _, y, b, w, x, E, T, R, I, B, v, L, U, D, O, N, H, F, X, Z, Q, $, ue, Me, xe;
        return d = l = u = p = m = _ = y = b = w = 0, f = g = 1, n.svg = !!(e.getCTM && Yf(e)), c.translate && ((c.translate !== "none" || c.scale !== "none" || c.rotate !== "none") && (i[at] = (c.translate !== "none" ? "translate3d(" + (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") + (c.scale !== "none" ? "scale(" + c.scale.split(" ").join(",") + ") " : "") + (c[at] !== "none" ? c[at] : "")), i.scale = i.rotate = i.translate = "none"), T = zc(e, n.svg), n.svg && (n.uncache ? (F = e.getBBox(), h = n.xOrigin - F.x + "px " + (n.yOrigin - F.y) + "px", H = "") : H = !t && e.getAttribute("data-svg-origin"), Yl(e, H || h, !!H || n.originIsAbsolute, n.smooth !== !1, T)), x = n.xOrigin || 0, E = n.yOrigin || 0, T !== Kr && (v = T[0], L = T[1], U = T[2], D = T[3], d = O = T[4], l = N = T[5], T.length === 6 ? (f = Math.sqrt(v * v + L * L), g = Math.sqrt(D * D + U * U), p = v || L ? Ls(L, v) * Bi : 0, y = U || D ? Ls(U, D) * Bi + p : 0, y && (g *= Math.abs(Math.cos(y * Vs))), n.svg && (d -= x - (x * v + E * U), l -= E - (x * L + E * D))) : (xe = T[6], ue = T[7], Z = T[8], Q = T[9], $ = T[10], Me = T[11], d = T[12], l = T[13], u = T[14], R = Ls(xe, $), m = R * Bi, R && (I = Math.cos(-R), B = Math.sin(-R), H = O * I + Z * B, F = N * I + Q * B, X = xe * I + $ * B, Z = O * -B + Z * I, Q = N * -B + Q * I, $ = xe * -B + $ * I, Me = ue * -B + Me * I, O = H, N = F, xe = X), R = Ls(-U, $), _ = R * Bi, R && (I = Math.cos(-R), B = Math.sin(-R), H = v * I - Z * B, F = L * I - Q * B, X = U * I - $ * B, Me = D * B + Me * I, v = H, L = F, U = X), R = Ls(L, v), p = R * Bi, R && (I = Math.cos(R), B = Math.sin(R), H = v * I + L * B, F = O * I + N * B, L = L * I - v * B, N = N * I - O * B, v = H, O = F), m && Math.abs(m) + Math.abs(p) > 359.9 && (m = p = 0, _ = 180 - _), f = pt(Math.sqrt(v * v + L * L + U * U)), g = pt(Math.sqrt(N * N + xe * xe)), R = Ls(O, N), y = Math.abs(R) > 2e-4 ? R * Bi : 0, w = Me ? 1 / (Me < 0 ? -Me : Me) : 0), n.svg && (H = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !Kf(In(e, at)), H && e.setAttribute("transform", H))), Math.abs(y) > 90 && Math.abs(y) < 270 && (s ? (f *= -1, y += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (g *= -1, y += y <= 0 ? 180 : -180)), t = t || n.uncache, n.x = d - ((n.xPercent = d && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + r, n.y = l - ((n.yPercent = l && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-l) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + r, n.z = u + r, n.scaleX = pt(f), n.scaleY = pt(g), n.rotation = pt(p) + a, n.rotationX = pt(m) + a, n.rotationY = pt(_) + a, n.skewX = y + a, n.skewY = b + a, n.transformPerspective = w + r, (n.zOrigin = parseFloat(h.split(" ")[2]) || 0) && (i[vn] = ta(h)), n.xOffset = n.yOffset = 0, n.force3D = $t.force3D, n.renderTransform = n.svg ? Wb : Xf ? Zf : Vb, n.uncache = 0, n
    },
    ta = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    _l = function(e, t, n) {
        var i = kt(t);
        return pt(parseFloat(t) + parseFloat(Ti(e, "x", n + "px", i))) + i
    },
    Vb = function(e, t) {
        t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Zf(e, t)
    },
    Di = "0deg",
    vr = "0px",
    ki = ") ",
    Zf = function(e, t) {
        var n = t || this,
            i = n.xPercent,
            s = n.yPercent,
            r = n.x,
            a = n.y,
            c = n.z,
            h = n.rotation,
            d = n.rotationY,
            l = n.rotationX,
            u = n.skewX,
            f = n.skewY,
            g = n.scaleX,
            p = n.scaleY,
            m = n.transformPerspective,
            _ = n.force3D,
            y = n.target,
            b = n.zOrigin,
            w = "",
            x = _ === "auto" && e && e !== 1 || _ === !0;
        if (b && (l !== Di || d !== Di)) {
            var E = parseFloat(d) * Vs,
                T = Math.sin(E),
                R = Math.cos(E),
                I;
            E = parseFloat(l) * Vs, I = Math.cos(E), r = _l(y, r, T * I * -b), a = _l(y, a, -Math.sin(E) * -b), c = _l(y, c, R * I * -b + b)
        }
        m !== vr && (w += "perspective(" + m + ki), (i || s) && (w += "translate(" + i + "%, " + s + "%) "), (x || r !== vr || a !== vr || c !== vr) && (w += c !== vr || x ? "translate3d(" + r + ", " + a + ", " + c + ") " : "translate(" + r + ", " + a + ki), h !== Di && (w += "rotate(" + h + ki), d !== Di && (w += "rotateY(" + d + ki), l !== Di && (w += "rotateX(" + l + ki), (u !== Di || f !== Di) && (w += "skew(" + u + ", " + f + ki), (g !== 1 || p !== 1) && (w += "scale(" + g + ", " + p + ki), y.style[at] = w || "translate(0, 0)"
    },
    Wb = function(e, t) {
        var n = t || this,
            i = n.xPercent,
            s = n.yPercent,
            r = n.x,
            a = n.y,
            c = n.rotation,
            h = n.skewX,
            d = n.skewY,
            l = n.scaleX,
            u = n.scaleY,
            f = n.target,
            g = n.xOrigin,
            p = n.yOrigin,
            m = n.xOffset,
            _ = n.yOffset,
            y = n.forceCSS,
            b = parseFloat(r),
            w = parseFloat(a),
            x, E, T, R, I;
        c = parseFloat(c), h = parseFloat(h), d = parseFloat(d), d && (d = parseFloat(d), h += d, c += d), c || h ? (c *= Vs, h *= Vs, x = Math.cos(c) * l, E = Math.sin(c) * l, T = Math.sin(c - h) * -u, R = Math.cos(c - h) * u, h && (d *= Vs, I = Math.tan(h - d), I = Math.sqrt(1 + I * I), T *= I, R *= I, d && (I = Math.tan(d), I = Math.sqrt(1 + I * I), x *= I, E *= I)), x = pt(x), E = pt(E), T = pt(T), R = pt(R)) : (x = l, R = u, E = T = 0), (b && !~(r + "").indexOf("px") || w && !~(a + "").indexOf("px")) && (b = Ti(f, "x", r, "px"), w = Ti(f, "y", a, "px")), (g || p || m || _) && (b = pt(b + g - (g * x + p * T) + m), w = pt(w + p - (g * E + p * R) + _)), (i || s) && (I = f.getBBox(), b = pt(b + i / 100 * I.width), w = pt(w + s / 100 * I.height)), I = "matrix(" + x + "," + E + "," + T + "," + R + "," + b + "," + w + ")", f.setAttribute("transform", I), y && (f.style[at] = I)
    },
    qb = function(e, t, n, i, s) {
        var r = 360,
            a = Tt(s),
            c = parseFloat(s) * (a && ~s.indexOf("rad") ? Bi : 1),
            h = c - i,
            d = i + h + "deg",
            l, u;
        return a && (l = s.split("_")[1], l === "short" && (h %= r, h !== h % (r / 2) && (h += h < 0 ? r : -r)), l === "cw" && h < 0 ? h = (h + r * Pu) % r - ~~(h / r) * r : l === "ccw" && h > 0 && (h = (h - r * Pu) % r - ~~(h / r) * r)), e._pt = u = new qt(e._pt, t, n, i, h, Cb), u.e = d, u.u = "deg", e._props.push(n), u
    },
    Ou = function(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    },
    Xb = function(e, t, n) {
        var i = Ou({}, n._gsap),
            s = "perspective,force3D,transformOrigin,svgOrigin",
            r = n.style,
            a, c, h, d, l, u, f, g;
        i.svg ? (h = n.getAttribute("transform"), n.setAttribute("transform", ""), r[at] = t, a = Zr(n, 1), Jr(n, at), n.setAttribute("transform", h)) : (h = getComputedStyle(n)[at], r[at] = t, a = Zr(n, 1), r[at] = h);
        for (c in ei) h = i[c], d = a[c], h !== d && s.indexOf(c) < 0 && (f = kt(h), g = kt(d), l = f !== g ? Ti(n, c, h, g) : parseFloat(h), u = parseFloat(d), e._pt = new qt(e._pt, a, c, l, u - l, ql), e._pt.u = g || 0, e._props.push(c));
        Ou(a, i)
    };
Wt("padding,margin,Width,Radius", function(o, e) {
    var t = "Top",
        n = "Right",
        i = "Bottom",
        s = "Left",
        r = (e < 3 ? [t, n, i, s] : [t + s, t + n, i + n, i + s]).map(function(a) {
            return e < 2 ? o + a : "border" + a + o
        });
    ea[e > 1 ? "border" + o : o] = function(a, c, h, d, l) {
        var u, f;
        if (arguments.length < 4) return u = r.map(function(g) {
            return jn(a, g, h)
        }), f = u.join(" "), f.split(u[0]).length === 5 ? u[0] : f;
        u = (d + "").split(" "), f = {}, r.forEach(function(g, p) {
            return f[g] = u[p] = u[p] || u[(p - 1) / 2 | 0]
        }), a.init(c, f, l)
    }
});
var $f = {
    name: "css",
    register: jl,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, n, i, s) {
        var r = this._props,
            a = e.style,
            c = n.vars.startAt,
            h, d, l, u, f, g, p, m, _, y, b, w, x, E, T, R;
        Bc || jl(), this.styles = this.styles || qf(e), R = this.styles.props, this.tween = n;
        for (p in t)
            if (p !== "autoRound" && (d = t[p], !(Jt[p] && If(p, t, n, i, e, s)))) {
                if (f = typeof d, g = ea[p], f === "function" && (d = d.call(n, i, e, s), f = typeof d), f === "string" && ~d.indexOf("random(") && (d = Xr(d)), g) g(this, e, p, d, n) && (T = 1);
                else if (p.substr(0, 2) === "--") h = (getComputedStyle(e).getPropertyValue(p) + "").trim(), d += "", bi.lastIndex = 0, bi.test(h) || (m = kt(h), _ = kt(d)), _ ? m !== _ && (h = Ti(e, p, h, _) + _) : m && (d += m), this.add(a, "setProperty", h, d, i, s, 0, 0, p), r.push(p), R.push(p, 0, a[p]);
                else if (f !== "undefined") {
                    if (c && p in c ? (h = typeof c[p] == "function" ? c[p].call(n, i, e, s) : c[p], Tt(h) && ~h.indexOf("random(") && (h = Xr(h)), kt(h + "") || (h += $t.units[p] || kt(jn(e, p)) || ""), (h + "").charAt(1) === "=" && (h = jn(e, p))) : h = jn(e, p), u = parseFloat(h), y = f === "string" && d.charAt(1) === "=" && d.substr(0, 2), y && (d = d.substr(2)), l = parseFloat(d), p in Rn && (p === "autoAlpha" && (u === 1 && jn(e, "visibility") === "hidden" && l && (u = 0), R.push("visibility", 0, a.visibility), pi(this, a, "visibility", u ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)), p !== "scale" && p !== "transform" && (p = Rn[p], ~p.indexOf(",") && (p = p.split(",")[0]))), b = p in ei, b) {
                        if (this.styles.save(p), w || (x = e._gsap, x.renderTransform && !t.parseTransform || Zr(e, t.parseTransform), E = t.smoothOrigin !== !1 && x.smooth, w = this._pt = new qt(this._pt, a, at, 0, 1, x.renderTransform, x, 0, -1), w.dep = 1), p === "scale") this._pt = new qt(this._pt, x, "scaleY", x.scaleY, (y ? Us(x.scaleY, y + l) : l) - x.scaleY || 0, ql), this._pt.u = 0, r.push("scaleY", p), p += "X";
                        else if (p === "transformOrigin") {
                            R.push(vn, 0, a[vn]), d = Ub(d), x.svg ? Yl(e, d, 0, E, 0, this) : (_ = parseFloat(d.split(" ")[2]) || 0, _ !== x.zOrigin && pi(this, x, "zOrigin", x.zOrigin, _), pi(this, a, p, ta(h), ta(d)));
                            continue
                        } else if (p === "svgOrigin") {
                            Yl(e, d, 1, E, 0, this);
                            continue
                        } else if (p in Jf) {
                            qb(this, x, p, u, y ? Us(u, y + d) : d);
                            continue
                        } else if (p === "smoothOrigin") {
                            pi(this, x, "smooth", x.smooth, d);
                            continue
                        } else if (p === "force3D") {
                            x[p] = d;
                            continue
                        } else if (p === "transform") {
                            Xb(this, d, e);
                            continue
                        }
                    } else p in a || (p = nr(p) || p);
                    if (b || (l || l === 0) && (u || u === 0) && !Ab.test(d) && p in a) m = (h + "").substr((u + "").length), l || (l = 0), _ = kt(d) || (p in $t.units ? $t.units[p] : m), m !== _ && (u = Ti(e, p, h, _)), this._pt = new qt(this._pt, b ? x : a, p, u, (y ? Us(u, y + l) : l) - u, !b && (_ === "px" || p === "zIndex") && t.autoRound !== !1 ? Rb : ql), this._pt.u = _ || 0, m !== _ && _ !== "%" && (this._pt.b = h, this._pt.r = Lb);
                    else if (p in a) Hb.call(this, e, p, h, y ? y + d : d);
                    else if (p in e) this.add(e, p, h || e[p], y ? y + d : d, i, s);
                    else if (p !== "parseTransform") {
                        Ac(p, d);
                        continue
                    }
                    b || (p in a ? R.push(p, 0, a[p]) : R.push(p, 1, h || e[p])), r.push(p)
                }
            }
        T && Nf(this)
    },
    render: function(e, t) {
        if (t.tween._time || !Oc())
            for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
        else t.styles.revert()
    },
    get: jn,
    aliases: Rn,
    getSetter: function(e, t, n) {
        var i = Rn[t];
        return i && i.indexOf(",") < 0 && (t = i), t in ei && t !== vn && (e._gsap.x || jn(e, "x")) ? n && Ru === n ? t === "scale" ? kb : Db : (Ru = n || {}) && (t === "scale" ? Fb : Bb) : e.style && !Sc(e.style[t]) ? Pb : ~t.indexOf("-") ? Ib : kc(e, t)
    },
    core: {
        _removeProperty: Jr,
        _getMatrix: zc
    }
};
Xt.utils.checkPrefix = nr;
Xt.core.getStyleSaver = qf;
(function(o, e, t, n) {
    var i = Wt(o + "," + e + "," + t, function(s) {
        ei[s] = 1
    });
    Wt(e, function(s) {
        $t.units[s] = "deg", Jf[s] = 1
    }), Rn[i[13]] = o + "," + e, Wt(n, function(s) {
        var r = s.split(":");
        Rn[r[1]] = i[r[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
    $t.units[o] = "px"
});
Xt.registerPlugin($f);
var P = Xt.registerPlugin($f) || Xt;
P.core.Tween;
class jb {
    constructor() {
        this.experience = new ye, this.scene = this.experience.scene, this.resources = this.experience.resources, this.time = this.experience.time, this.shadow = this.experience.world.landingPage.roomShadow, this.sounds = this.experience.sounds, this.desktopLayers = {}, this.setModel(), this.setMaterial(), this.addShadow()
    }
    setModel() {
        this.model = this.resources.items.roomModel.scene, this.baseModel = this.model.children.find(e => e.name === "room-base"), this.shelving = this.model.children.find(e => e.name === "shelving"), this.picture = this.model.children.find(e => e.name === "picture"), this.blackboard = this.model.children.find(e => e.name === "blackboard"), this.plant = this.model.children.find(e => e.name === "plant"), this.chair = this.model.children.find(e => e.name === "chair"), this.speaker = this.model.children.find(e => e.name === "speaker"), this.penguin = this.model.children.find(e => e.name === "penguin"), this.baseModel.add(this.speaker), this.baseModel.add(this.penguin), this.baseModel.add(this.speaker), this.baseModel.add(this.chair), this.deskopPlane0 = this.model.children.find(e => e.name === "desktop-plane-0"), this.deskopPlane1 = this.model.children.find(e => e.name === "desktop-plane-1"), this.baseModel.add(this.deskopPlane0), this.baseModel.add(this.deskopPlane1), this.model.rotation.y = -Math.PI / 2, this.model.position.y -= 5.7, this.scene.add(this.model)
    }
    setMaterial() {
        this.texture = this.resources.items.bakedRoomTexture, this.texture.flipY = !1, this.material = new ht({
            map: this.texture,
            transparent: !0,
            fog: !1
        }), this.model.traverse(e => {
            e.material = this.material
        })
    }
    addShadow() {
        this.model.add(this.shadow.model)
    }
    bounceIn(e = 0, t = !1) {
        P.fromTo(this.baseModel.scale, {
            x: 0,
            y: 0,
            z: 0
        }, {
            x: 1,
            y: 1,
            z: 1,
            duration: .5,
            ease: yn.easeOut.config(1.5),
            delay: e
        }), P.fromTo(this.shadow.material.uniforms.uOpacity, {
            value: 0
        }, {
            value: 1,
            duration: .4,
            delay: e + (t ? .5 : .23),
            ease: et.easeOut
        }), t && (P.fromTo(this.shelving.scale, {
            x: 0,
            y: 0,
            z: 0
        }, {
            x: 1,
            y: 1,
            z: 1,
            duration: .5,
            ease: yn.easeOut.config(1.5),
            delay: e + .25
        }), P.fromTo(this.picture.scale, {
            x: 0,
            y: 0,
            z: 0
        }, {
            x: 1,
            y: 1,
            z: 1,
            duration: .5,
            ease: yn.easeOut.config(1.5),
            delay: e + .32
        }), P.fromTo(this.blackboard.scale, {
            x: 0,
            y: 0,
            z: 0
        }, {
            x: 1,
            y: 1,
            z: 1,
            duration: .5,
            ease: yn.easeOut.config(1.5),
            delay: e + .39
        }), P.fromTo(this.plant.scale, {
            x: 0,
            y: 0,
            z: 0
        }, {
            x: 1,
            y: 1,
            z: 1,
            duration: .5,
            ease: yn.easeOut.config(1.5),
            delay: e + .46
        }))
    }
    bounceOut(e = 0) {
        P.fromTo(this.baseModel.scale, {
            x: 1,
            y: 1,
            z: 1
        }, {
            x: 0,
            y: 0,
            z: 0,
            duration: .5,
            ease: yn.easeIn.config(1.5),
            delay: e
        }), P.fromTo(this.shadow.material.uniforms.uOpacity, {
            value: 1
        }, {
            value: 0,
            duration: .15,
            delay: e + .25
        })
    }
}
var Hc = `varying vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
}`,
    Uc = `uniform sampler2D alphaMask;
uniform vec3 uColor;
uniform float uOpacity;

varying vec2 vUv;

void main()
{
    float alpha = texture2D(alphaMask, vUv).r;

    alpha = (1.0 - alpha) * uOpacity;

    gl_FragColor = vec4(uColor, alpha);
}`;
class Yb {
    constructor() {
        he(this, "parameters", {
            color: "#c4a37e"
        });
        this.experience = new ye, this.scene = this.experience.scene, this.resources = this.experience.resources, this.time = this.experience.time, this.resource = this.resources.items.roomShadowModel, this.setModel(), this.setMaterial()
    }
    setModel() {
        this.model = this.resource.scene
    }
    setMaterial() {
        this.shadowTexture = this.resources.items.bakedShadowRoomTexture, this.shadowTexture.flipY = !1, this.material = new Ot({
            transparent: !0,
            uniforms: {
                alphaMask: {
                    value: this.shadowTexture
                },
                uColor: {
                    value: new ie(this.parameters.color)
                },
                uOpacity: {
                    value: 1
                }
            },
            vertexShader: Hc,
            fragmentShader: Uc
        }), this.model.children.find(e => e.name === "shadowCatcher").material = this.material
    }
}
class Jb {
    constructor() {
        this.experience = new ye, this.room = this.experience.world.landingPage.room, this.resources = this.experience.resources, this.sounds = this.experience.sounds, this.desktops = [], this.desktopLayers = {}, this.setDesktop1(), this.setDesktop0()
    }
    setDesktop0() {
        this.desktop0 = this.room.baseModel.children.find(e => e.name === "desktop-plane-0"), this.desktop0Layer0Material = new ht({
            map: this.resources.items.desktop0,
            fog: !1
        }), this.desktop0.material = this.desktop0Layer0Material
    }
    scrollDesktop0() {
        const e = Math.random() * -.5 + .25;
        P.to(this.resources.items.desktop0.offset, {
            y: e,
            duration: 1
        }), this.sounds.play("mouseWheel")
    }
    setDesktop1() {
        this.desktop1 = this.room.baseModel.children.find(e => e.name === "desktop-plane-1"), this.desktop1PlaneMaterial = new ht({
            map: this.resources.items.desktop1,
            fog: !1
        }), this.desktop1.material = this.desktop1PlaneMaterial, this.desktop1.scale.x = 1.01, this.setNotification()
    }
    setNotification() {
        this.notification = this.desktop1.clone(), this.notification.material = new ht({
            map: this.resources.items.desktop1Notification,
            transparent: !0,
            fog: !1,
            opacity: 0
        }), this.notification.position.x += .01, this.room.baseModel.add(this.notification)
    }
}
class Kb {
    constructor() {
        this.experience = new ye, this.scene = this.experience.scene, this.resources = this.experience.resources, this.desktopLayers = {}, this.setModel(), this.setMaterial(), this.setBottomMaterial(), setTimeout(() => this.setPosition())
    }
    setModel() {
        this.model = this.resources.items.labModel.scene, this.model.rotation.y = -Math.PI / 2, this.scene.add(this.model)
    }
    setPosition() {
        this.model.position.y -= 19.9, this.model.scale.set(.97, .97, .97)
    }
    setMaterial() {
        this.texture = this.resources.items.bakedLabTexture, this.texture.flipY = !1, this.material = new ht({
            map: this.texture
        });
        const e = this.model.children.find(t => t.name === "merged-scene");
        e.material = this.material
    }
    setBottomMaterial() {
        this.bottom = this.model.children.find(e => e.name === "bottom"), this.bottomMaterial = new ht({
            color: "gray"
        }), this.bottom.material = this.bottomMaterial, this.bottom.position.y -= .005
    }
}
class Zb {
    constructor() {
        he(this, "parameters", {
            color: "#00204d"
        });
        this.experience = new ye, this.scene = this.experience.scene, this.resources = this.experience.resources, this.time = this.experience.time, this.lab = this.experience.world.lab.model, this.resource = this.resources.items.labShadowModel, this.setModel(), this.setMaterial()
    }
    setModel() {
        this.model = this.resource.scene, this.model.position.y = .003, this.lab.model.add(this.model)
    }
    setMaterial() {
        this.shadowTexture = this.resources.items.bakedShadowLabTexture, this.shadowTexture.flipY = !1, this.material = new Ot({
            transparent: !0,
            uniforms: {
                alphaMask: {
                    value: this.shadowTexture
                },
                uColor: {
                    value: new ie(this.parameters.color)
                },
                uOpacity: {
                    value: 1
                }
            },
            vertexShader: Hc,
            fragmentShader: Uc
        }), this.model.children.find(e => e.name === "shadowCatcher").material = this.material
    }
}
var $b = `uniform vec3 uColorTop;
uniform vec3 uColorBottom;
uniform float uOpacity;
  
varying vec2 vUv;
    
void main() {
    gl_FragColor = vec4( mix(uColorBottom, uColorTop, vUv.y), uOpacity);
}`,
    Qb = `varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
class ew {
    constructor() {
        he(this, "parameters", {
            uColorTop: "#0047d6",
            uColorBottom: "#70ffff",
            uOpacity: .25
        });
        this.experience = new ye, this.lab = this.experience.world.lab.model, this.setMaterial(), this.setModel()
    }
    setMaterial() {
        this.material = new Ot({
            uniforms: {
                uColorTop: {
                    value: new ie(this.parameters.uColorTop)
                },
                uColorBottom: {
                    value: new ie(this.parameters.uColorBottom)
                },
                uOpacity: {
                    value: this.parameters.uOpacity
                }
            },
            vertexShader: Qb,
            fragmentShader: $b,
            transparent: !0
        })
    }
    setModel() {
        this.geometry = new gc(1.5, 1.5, 3, 32, 1, !0), this.model = new St(this.geometry, this.material), this.model.position.set(-.08, 2.9, -.12), this.model.scale.set(.92, 1.55, .92), this.lab.model.add(this.model)
    }
}
class tw {
    constructor() {
        he(this, "parameters", {
            speed: 5e-4
        });
        he(this, "active", !0);
        this.experience = new ye, this.resources = this.experience.resources, this.lab = this.experience.world.lab.model, this.sounds = this.experience.sounds, this.setModel(), this.setMaterial(), this.setBackground(), this.setButton()
    }
    setModel() {
        this.model = this.lab.model.children.find(e => e.name === "desktop")
    }
    setMaterial() {
        this.texture = this.resources.items.labScreenGraph, this.texture.wrapS = Ji, this.material = new ht({
            map: this.texture,
            transparent: !0
        }), this.model.material = this.material
    }
    setBackground() {
        this.background = {
            geometry: this.model.geometry.clone(),
            material: new ht({
                map: this.resources.items.labScreenOffline
            })
        }, this.background.mesh = new St(this.background.geometry, this.background.material), this.background.mesh.position.set(this.model.position.x - .001, this.model.position.y, this.model.position.z), this.lab.model.add(this.background.mesh)
    }
    setButton() {
        this.button = this.lab.model.children.find(e => e.name === "pc-button"), this.button.material = this.lab.material, this.button.hoverIcon = "pointer", this.button.onClick = () => {
            this.sounds.play("buttonClick"), this.switchActivity()
        }
    }
    switchActivity() {
        this.active = !this.active, P.to(this.material, {
            opacity: this.active ? 1 : 0,
            duration: .2
        })
    }
    update() {
        this.active && (this.texture.offset.x -= this.parameters.speed)
    }
}
class nw {
    constructor() {
        this.experience = new ye, this.lab = this.experience.world.lab.model, this.setModel(), this.dropInterval()
    }
    setModel() {
        this.model = this.lab.model.children.find(e => e.name === "drop"), this.model.material = this.lab.material, this.model.position.x -= .055, this.model.position.y = -.035
    }
    dropInterval() {
        P.delayedCall(4, () => {
            P.fromTo(this.model.position, {
                y: 2.1
            }, {
                y: -.02,
                duration: 1.7,
                ease: wi.easeIn
            }), P.fromTo(this.model.scale, {
                y: 0
            }, {
                y: 1,
                duration: .6,
                delay: .1
            }), P.to(this.model.scale, {
                y: 0,
                duration: .05,
                delay: 1.65
            }), this.dropInterval()
        })
    }
}
class iw {
    constructor() {
        he(this, "parameters", {
            count: 11,
            maxMovementDuration: 3
        });
        this.experience = new ye, this.resources = this.experience.resources, this.lab = this.experience.world.lab.model, this.sounds = this.experience.sounds, this.setSprite(), this.startInterval()
    }
    setSprite() {
        this.sprites = [], this.availableSprites = [];
        for (let e = 0; e < this.parameters.count; e++) this.sprites.push(new _i(new Pn({
            map: this.resources.items.bubbleSprite,
            depthTest: !1,
            opacity: 0
        }))), this.availableSprites.push(this.sprites[e]), this.sprites[e].position.x = Math.sin(e) * 1.1, this.sprites[e].position.z = Math.cos(e) * 1.1 - .15, this.lab.model.add(this.sprites[e]), this.addOnHover(this.sprites[e])
    }
    addOnHover(e) {
        e.onHover = () => {
            e.popped || this.popBubble(e)
        }
    }
    popBubble(e) {
        this.sounds.play("bubble"), e.popped = !0, e.material.map = this.resources.items.bubblePopSprite, P.to(e.material, {
            opacity: 0,
            duration: .2
        });
        const t = e.scale.x + .1;
        P.to(e.scale, {
            x: t,
            y: t,
            duration: .2
        })
    }
    getAvailableSprite() {
        const e = this.availableSprites[Math.floor(Math.random() * this.availableSprites.length)];
        return this.availableSprites.splice(this.availableSprites.indexOf(e), 1), e
    }
    spawnBubble(e = Math.random() * 1.1, t) {
        if (this.availableSprites.length != 0) {
            const n = this.getAvailableSprite(),
                i = t === "back" ? 4 : this.parameters.maxMovementDuration,
                s = t === "back" ? yn.easeIn.config(2.5) : Hf.easeNone,
                r = i - i * (e / 3.9);
            e += .8, P.fromTo(n.position, {
                y: e
            }, {
                y: 4.7,
                duration: r,
                ease: s,
                onComplete: () => {
                    this.availableSprites.push(n)
                }
            }), n.material.opacity = Math.random() * .5 + .5, n.popped = !1, n.material.map = this.resources.items.bubbleSprite;
            const a = Math.random() * .12 + .2;
            P.fromTo(n.scale, {
                x: 0,
                y: 0,
                z: 0
            }, {
                x: a,
                y: a,
                z: a,
                duration: .5,
                ease: yn.easeIn.config(1.5)
            }), P.to(n.material, {
                opacity: 0,
                duration: .2,
                delay: r - .2,
                ease: s
            })
        }
    }
    startInterval() {
        P.delayedCall(Math.random() * .3 + .25, () => {
            this.spawnBubble(), this.startInterval()
        })
    }
}
class sw {
    constructor() {
        he(this, "parameters", {
            color: "#004961",
            opacity: .05
        });
        this.experience = new ye, this.lab = this.experience.world.lab.model, this.setTubes()
    }
    setTubes() {
        this.tubes = this.lab.model.children.find(e => e.name === "test-tubes"), this.material = new ht({
            color: this.parameters.color,
            transparent: !0,
            opacity: this.parameters.opacity,
            blending: 5
        }), this.tubes.material = this.material
    }
}
var rw = `varying vec3 vColor;

uniform float uOffset;

void main()
{
    gl_Position = vec4(position.x, position.y + uOffset, position.z, 1.0);

    vColor = color;
}`,
    ow = `varying vec3 vColor;

void main()
{
    gl_FragColor = vec4(vColor, 1.0);
}`;
class aw {
    constructor() {
        he(this, "height", 3.5);
        this.experience = new ye, this.resources = this.experience.resources, this.scene = this.experience.scene, this.setBackground()
    }
    setBackground() {
        this.colors = {}, this.colors.topLeft = {}, this.colors.topLeft.value = "#000e2e", this.colors.topLeft.instance = new ie(this.colors.topLeft.value), this.colors.topRight = {}, this.colors.topRight.value = "#002757", this.colors.topRight.instance = new ie(this.colors.topRight.value), this.colors.bottomLeft = {}, this.colors.bottomLeft.value = "#004db3", this.colors.bottomLeft.instance = new ie(this.colors.bottomLeft.value), this.colors.bottomRight = {}, this.colors.bottomRight.value = "#009dff", this.colors.bottomRight.instance = new ie(this.colors.bottomRight.value), this.geometry = new aa(2, this.height, 1, 1), this.material = new Ot({
            uniforms: {
                uOffset: {
                    value: -2.75
                }
            },
            vertexColors: !0,
            depthWrite: !1,
            vertexShader: rw,
            fragmentShader: ow
        }), this.mesh = new St(this.geometry, this.material), this.mesh.frustumCulled = !1, this.scene.add(this.mesh), this.updateColors = () => {
            this.colors.topLeft.instance.set(this.colors.topLeft.value), this.colors.topRight.instance.set(this.colors.topRight.value), this.colors.bottomLeft.instance.set(this.colors.bottomLeft.value), this.colors.bottomRight.instance.set(this.colors.bottomRight.value);
            const e = new Float32Array(4 * 3);
            e[0] = this.colors.topLeft.instance.r, e[1] = this.colors.topLeft.instance.g, e[2] = this.colors.topLeft.instance.b, e[3] = this.colors.topRight.instance.r, e[4] = this.colors.topRight.instance.g, e[5] = this.colors.topRight.instance.b, e[6] = this.colors.bottomLeft.instance.r, e[7] = this.colors.bottomLeft.instance.g, e[8] = this.colors.bottomLeft.instance.b, e[9] = this.colors.bottomRight.instance.r, e[10] = this.colors.bottomRight.instance.g, e[11] = this.colors.bottomRight.instance.b, this.geometry.setAttribute("color", new ft(e, 3))
        }, this.updateColors()
    }
}
class lw {
    constructor() {
        he(this, "parameters", {
            leftBorder: .2,
            rightBorder: .6
        });
        this.experience = new ye, this.room = this.experience.world.landingPage.room, this.setModel(), this.setIdleStartPosition()
    }
    setModel() {
        this.model = this.room.model.children.find(e => e.name === "mouse"), this.room.baseModel.add(this.model), this.model.position.x += .15, this.model.position.z += .07
    }
    setIdleStartPosition() {
        this.model.idleStartPosition = {
            x: this.model.position.x,
            z: this.model.position.z
        }
    }
    moveToIdleStartPositon() {
        this.model.position.x = this.model.idleStartPosition.x, this.model.position.z = this.model.idleStartPosition.z
    }
    updateMouseSync() {
        let t = this.experience.world.character.body.model.children[0].children[0].children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[0].getWorldPosition(new C);
        t.y < 1.63 - 5.7 && t.y > 1.58 - 5.7 && t.x > this.parameters.leftBorder && t.x < this.parameters.rightBorder && (this.model.position.z = -t.x - 1.849, this.model.position.x = t.z + .92)
    }
}
class cw {
    constructor() {
        this.experience = new ye, this.resources = this.experience.resources, this.room = this.experience.world.landingPage.room, this.desktops = this.experience.world.landingPage.desktops, this.sounds = this.experience.sounds, this.setSprite()
    }
    setSprite() {
        this.material = new Pn({
            map: this.resources.items.newMessageSprite,
            alphaTest: .1,
            opacity: 0,
            fog: !1
        }), this.sprite = new _i(this.material), this.room.model.add(this.sprite), this.sprite.position.set(-1.75, 3.5, 1.8), this.sprite.scale.set(.35, .35, .35)
    }
    show() {
        this.sounds.play("notification"), P.fromTo(this.sprite.position, {
            y: 3.3
        }, {
            y: 4,
            duration: 2,
            ease: wi.easeOut
        }), P.fromTo(this.material, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .5
        }), P.fromTo(this.material, {
            opacity: 1
        }, {
            opacity: 0,
            duration: .5,
            delay: 1.3
        }), P.fromTo(this.desktops.notification.material, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .2
        }), P.fromTo(this.desktops.notification.material, {
            opacity: 1
        }, {
            opacity: 0,
            duration: 1,
            delay: 2
        })
    }
}
class hw {
    constructor() {
        he(this, "parameters", {
            portraitScale: 1.7
        });
        this.experience = new ye, this.scene = this.experience.scene, this.resources = this.experience.resources, this.time = this.experience.time, this.sizes = this.experience.sizes, this.setModel(), this.setMaterial(), this.onOrientationChange(), this.sizes.on("portrait", () => this.onOrientationChange()), this.sizes.on("landscape", () => this.onOrientationChange())
    }
    setYPosition(e) {
        this.model.position.y = e - 4.7
    }
    onOrientationChange() {
        this.sizes.portrait ? (this.model.position.y = this.parameters.portraitY, this.model.scale.set(this.parameters.portraitScale, this.parameters.portraitScale, this.parameters.portraitScale)) : this.model.scale.set(1, 1, 1)
    }
    setModel() {
        this.model = this.resources.items.contactSceneModel.scene, this.scene.add(this.model)
    }
    setMaterial() {
        this.texture = this.resources.items.bakedContactTexture, this.texture.flipY = !1, this.material = new ht({
            map: this.texture,
            fog: !1
        }), this.model.children[0].material = this.material
    }
}
class uw {
    constructor() {
        he(this, "parameters", {
            color: "#ac9172"
        });
        this.experience = new ye, this.scene = this.experience.scene, this.resources = this.experience.resources, this.time = this.experience.time, this.contactScene = this.experience.world.contact.scene, this.resource = this.resources.items.contactShadowModel, this.setModel(), this.setMaterial()
    }
    setModel() {
        this.model = this.resource.scene, this.contactScene.model.add(this.model)
    }
    setMaterial() {
        this.shadowTexture = this.resources.items.bakedShadowContactTexture, this.shadowTexture.flipY = !1, this.material = new Ot({
            transparent: !0,
            uniforms: {
                alphaMask: {
                    value: this.shadowTexture
                },
                uColor: {
                    value: new ie(this.parameters.color)
                },
                uOpacity: {
                    value: 1
                }
            },
            vertexShader: Hc,
            fragmentShader: Uc
        }), this.model.children.find(e => e.name === "shadowCatcher").material = this.material
    }
}
class dw {
    constructor() {
        this.experience = new ye, this.resources = this.experience.resources, this.contactScene = this.experience.world.contact.scene, this.sizes = this.experience.sizes, this.setSprite(), this.onOrientationChange(), this.sizes.on("portrait", () => this.onOrientationChange()), this.sizes.on("landscape", () => this.onOrientationChange())
    }
    onOrientationChange() {
        this.sizes.portrait ? (this.sprite.scale.set(2.61, 5.05), this.sprite.position.set(-.05, 2.7, 0)) : (this.sprite.scale.set(2.61, 5.05), this.sprite.position.set(-.05, 2.15, 0))
    }
    setSprite() {
        this.texture = this.resources.items.davidImage, this.material = new Pn({
            map: this.texture,
            depthTest: !1,
            fog: !1,
            opacity: 0
        }), this.sprite = new _i(this.material), this.contactScene.model.add(this.sprite)
    }
}
class fw {
    constructor() {
        this.experience = new ye, this.scene = this.experience.scene, this.sizes = this.experience.sizes, this.setFog(), this.onOrientationChange(), this.sizes.on("portrait", () => this.onOrientationChange()), this.sizes.on("landscape", () => this.onOrientationChange())
    }
    onOrientationChange() {
        this.fog.near = this.sizes.portrait ? 18 : 10, this.fog.far = this.sizes.portrait ? 23 : 17, this.fog.color = new ie(this.sizes.portrait ? "#001945" : "#002C6A")
    }
    setFog() {
        this.fog = new ha("#002C6A", 10, 17), this.scene.fog = this.fog
    }
}
class pw {
    constructor() {
        he(this, "played", !1);
        he(this, "parameters", {
            transitionDuration: 2,
            characterPortraitY: 1.5,
            characterLandscapeY: .27,
            characterPortraitScale: 1.7
        });
        this.experience = new ye, this.character = this.experience.world.character, this.contactScene = this.experience.world.contact.scene, this.david = this.experience.world.contact.david, this.exclamationMark = this.experience.world.contact.exclamationMark, this.sizes = this.experience.sizes, this.sounds = this.experience.sounds, this.setMaterialsToHide()
    }
    playIdle() {
        this.played || (this.character.body.model.position.y = this.experience.world.contact.scene.model.position.y + this.parameters[this.sizes.portrait ? "characterPortraitY" : "characterLandscapeY"], this.sizes.portrait && this.character.body.model.scale.set(this.parameters.characterPortraitScale, this.parameters.characterPortraitScale, this.parameters.characterPortraitScale), this.character.body.setAllToOriginal(), this.character.face.material.map = this.character.face.textures.sleepy, this.character.animations.actions.current._clip.name != "standing-idle" && this.character.animations.play("standingIdle", 0))
    }
    playTransition() {
        this.played || (this.played = !0, this.timeline = P.timeline(), P.delayedCall(.2, () => {
            this.character.face.material.map = this.character.face.textures.scared, P.delayedCall(.35, () => {
                this.character.face.faceTransitions.current = null, this.character.face.updateFace("contact")
            })
        }), P.delayedCall(.15, () => {
            this.character.animations.actions.current._clip.name === "standing-idle" && (this.sounds.play("gasp"), this.character.animations.play("contact", .1))
        }), this.transtionDelay = P.delayedCall(.2, () => {
            this.startedTransition = !0, this.timeline.to(this.david.material, {
                opacity: 1,
                duration: this.parameters.transitionDuration,
                ease: wi.easeIn
            }, 0), this.character.body.materials.bakedMaterial.transparent = !0, this.character.body.materials.bakedMaterial.needsUpdate = !0, this.character.face.model.renderOrder = 1, this.materialsToHide.forEach(e => {
                this.timeline.to(e, {
                    opacity: 0,
                    duration: this.parameters.transitionDuration,
                    ease: wi.easeIn
                }, 0)
            })
        }))
    }
    resetCharacter() {
        (this.character.body.materials.bakedMaterial.transparent || this.materialsToHide[0].opacity != 1 || !this.startedTransition) && (this.experience.ui.landingPage.visible || this.experience.ui.about.animations.resetCharacterToPosition(), this.character.body.model.scale.set(1, 1, 1), this.character.body.materials.bakedMaterial.transparent = !1, this.character.body.materials.bakedMaterial.needsUpdate = !0, this.character.face.model.renderOrder = 0, this.materialsToHide.forEach(e => {
            e.opacity = 1
        }), this.timeline && this.timeline.kill(), this.transtionDelay && this.transtionDelay.kill(), this.david.material.opacity != 1 && this.played && P.to(this.david.material, {
            opacity: 1,
            duration: this.parameters.transitionDuration,
            ease: wi.easeIn
        }, 0))
    }
    setMaterialsToHide() {
        this.materialsToHide = [this.character.body.materials.shirtMaterial, this.character.body.materials.skinMaterial, this.character.body.materials.pantsMaterial, this.character.body.materials.whiteMaterial, this.character.body.materials.bakedMaterial, this.character.face.material]
    }
}
class mw {
    constructor() {
        this.experience = new ye, this.resources = this.experience.resources, this.scene = this.experience.scene, this.setModel(), this.defineBodyParts(), this.defineMaterials(), this.applyMaterials(), this.deactiveFrustumCulling(), this.defineWireframe(), this.defineWireframeAt(), this.preloadWireframe()
    }
    setModel() {
        this.model = this.resources.items.characterModel.scene, this.model.position.y = 2, this.model.rotation.y = -Math.PI / 2, this.scene.add(this.model)
    }
    defineBodyParts() {
        this.armature = this.model.children.find(e => e.name === "armature"), this.armLeft = this.armature.children.find(e => e.name === "arm-left"), this.armRight = this.armature.children.find(e => e.name === "arm-right"), this.legRight = this.armature.children.find(e => e.name === "leg-right"), this.legLeft = this.armature.children.find(e => e.name === "leg-left"), this.shoeRight = this.armature.children.find(e => e.name === "shoe-right"), this.shoeLeft = this.armature.children.find(e => e.name === "shoe-left"), this.shoeWhiteRight = this.armature.children.find(e => e.name === "shoe-white-right"), this.shoeWhiteLeft = this.armature.children.find(e => e.name === "shoe-white-left"), this.sockRight = this.armature.children.find(e => e.name === "sock-right"), this.sockLeft = this.armature.children.find(e => e.name === "sock-left"), this.pantsBottomRight = this.armature.children.find(e => e.name === "pants-bottom-right"), this.pantsBottomLeft = this.armature.children.find(e => e.name === "pants-bottom-left"), this.pantsRight = this.armature.children.find(e => e.name === "pants-right"), this.pantsLeft = this.armature.children.find(e => e.name === "pants-left"), this.chest = this.armature.children.find(e => e.name === "chest"), this.shoulderRight = this.armature.children.find(e => e.name === "shoulder-right"), this.shoulderLeft = this.armature.children.find(e => e.name === "shoulder-left"), this.throat = this.armature.children.find(e => e.name === "throat"), this.chest = this.armature.children.find(e => e.name === "chest"), this.head = this.armature.children.find(e => e.name === "head")
    }
    deactiveFrustumCulling() {
        this.armature.children.forEach(e => {
            e.type === "SkinnedMesh" && (e.frustumCulled = !1)
        })
    }
    defineMaterials() {
        this.materials = {}, this.materials.shirtMaterial = new Fs({
            matcap: this.resources.items.shirtMatcap,
            transparent: !0,
            fog: !1
        }), this.materials.skinMaterial = new Fs({
            matcap: this.resources.items.skinMatcap,
            transparent: !0,
            fog: !1
        }), this.materials.pantsMaterial = new Fs({
            matcap: this.resources.items.pantsMatcap,
            transparent: !0,
            fog: !1
        }), this.materials.whiteMaterial = new Fs({
            matcap: this.resources.items.whiteMatcap,
            transparent: !0,
            fog: !1
        }), this.bakedTexture = this.resources.items.bakedCharacterHeadTexture, this.bakedTexture.flipY = !1, this.materials.bakedMaterial = new ht({
            map: this.bakedTexture,
            fog: !1
        })
    }
    applyMaterials() {
        this.armRight.material = this.materials.skinMaterial, this.armLeft.material = this.materials.skinMaterial, this.legRight.material = this.materials.skinMaterial, this.legLeft.material = this.materials.skinMaterial, this.shoeRight.material = this.materials.shirtMaterial, this.shoeLeft.material = this.materials.shirtMaterial, this.shoeWhiteRight.material = this.materials.whiteMaterial, this.shoeWhiteLeft.material = this.materials.whiteMaterial, this.sockRight.material = this.materials.whiteMaterial, this.sockLeft.material = this.materials.whiteMaterial, this.pantsBottomRight.material = this.materials.shirtMaterial, this.pantsBottomLeft.material = this.materials.shirtMaterial, this.pantsRight.material = this.materials.pantsMaterial, this.pantsLeft.material = this.materials.pantsMaterial, this.chest.material = this.materials.shirtMaterial, this.shoulderRight.material = this.materials.shirtMaterial, this.shoulderLeft.material = this.materials.shirtMaterial, this.throat.material = this.materials.skinMaterial, this.head.material = this.materials.bakedMaterial
    }
    defineWireframeAt() {
        this.legRight.wireframeAt = "-9.1", this.legLeft.wireframeAt = "-9.1", this.shoeRight.wireframeAt = "-9", this.shoeLeft.wireframeAt = "-9", this.shoeWhiteRight.wireframeAt = "-9", this.shoeWhiteLeft.wireframeAt = "-9", this.sockRight.wireframeAt = "-9", this.sockLeft.wireframeAt = "-9", this.pantsBottomRight.wireframeAt = "-9.2", this.pantsBottomLeft.wireframeAt = "-9.2", this.pantsRight.wireframeAt = "-10", this.pantsLeft.wireframeAt = "-10", this.chest.wireframeAt = "-11", this.shoulderRight.wireframeAt = "-11", this.shoulderLeft.wireframeAt = "-11", this.throat.wireframeAt = "-11.2", this.head.wireframeAt = "-11.5", this.armRight.wireframeAt = "-11.55", this.armLeft.wireframeAt = "-11.5"
    }
    defineWireframe() {
        this.wireframeParameters = {
            color: "#009dff"
        }, this.materials.wireframeMaterial = new ht({
            color: this.wireframeParameters.color,
            wireframe: !0,
            opacity: .24,
            blending: 2,
            wireframeLinewidth: .01,
            fog: !1
        })
    }
    preloadWireframe() {
        this.setAllToWireframe(), setTimeout(() => this.setAllToOriginal())
    }
    setAllToOriginal() {
        this.model.children[0].children.forEach(e => {
            e.name === "face" && (e.visible = !0), e.originalMaterial && (e.material = e.originalMaterial)
        })
    }
    setAllToWireframe() {
        this.model.children[0].children.forEach(e => {
            e.name != "face" && (e.originalMaterial || (e.originalMaterial = e.material), e.material = this.materials.wireframeMaterial)
        })
    }
    update() {
        this.checkForWireframe && this.updateWireframe(this.checkForWireframe)
    }
    updateWireframe(e) {
        this.model.children[0].children.forEach(t => {
            t.wireframeAt && (e == "up" && this.model.position.y > t.wireframeAt - 5.7 ? this.updateToOriginalMaterial(t) : this.model.position.y < t.wireframeAt - 5.7 && this.updateToWireframeMaterial(t))
        })
    }
    updateToOriginalMaterial(e) {
        e.name === "face" ? e.visible = !0 : e.material = e.originalMaterial
    }
    updateToWireframeMaterial(e) {
        e.name === "face" ? e.visible = !1 : (e.originalMaterial || (e.originalMaterial = e.material), e.material = this.materials.wireframeMaterial)
    }
}
class gw {
    constructor() {
        this.experience = new ye, this.character = this.experience.world.character, this.resources = this.experience.resources, this.setFace(), this.defineFaceTransitions()
    }
    setFace() {
        this.model = this.character.body.armature.children.find(e => e.name === "face"), this.model.wireframeAt = "-11.5", this.textures = {
            default: this.resources.items.characterDefaultFace,
            scared: this.resources.items.characterScaredFace,
            sleepy: this.resources.items.characterSleepyFace,
            hurt: this.resources.items.characterHurtFace
        }, this.material = new ht({
            map: this.textures.default,
            transparent: !0,
            fog: !1
        }), this.model.material = this.material, this.defineFaceTransitions()
    }
    defineFaceTransitions() {
        this.faceTransitions = {}, this.faceTransitions.smile = {
            allowedOutsideLanding: !1,
            faces: [this.resources.items.characterSmile0Face, this.resources.items.characterSmile1Face, this.resources.items.characterSmile2Face]
        }, this.faceTransitions.contact = {
            allowedOutsideLanding: !0,
            faces: [this.resources.items.characterScaredFace, this.resources.items.characterContact1Face, this.resources.items.characterContact2Face]
        }
    }
    updateFace(e) {
        if (this.landingPage = this.experience.ui.landingPage, e === "default") {
            this.faceTransitions.count = this.faceTransitions.current.faces.length - 1;
            const t = () => this.faceCall = P.delayedCall(.03, () => {
                (this.landingPage.visible || this.faceTransitions.current.allowedOutsideLanding || this.landingPage.isAnimating) && (this.model.material.map = this.faceTransitions.current.faces[this.faceTransitions.count], this.faceTransitions.count--, this.faceTransitions.count == -1 ? this.model.material.map = this.textures.default : t())
            });
            t()
        } else {
            this.faceTransitions.current = this.faceTransitions[e], this.faceTransitions.count = 0;
            const t = () => this.faceCall = P.delayedCall(.033, () => {
                (this.landingPage.visible || this.faceTransitions.current.allowedOutsideLanding) && (this.model.material.map = this.faceTransitions[e].faces[this.faceTransitions.count], this.faceTransitions.count++, this.faceTransitions.count != this.faceTransitions[e].faces.length && t())
            });
            t()
        }
    }
}
class _w {
    constructor() {
        he(this, "leftDesktopIntervalDuration", 12);
        this.experience = new ye, this.resources = this.experience.resources, this.mouse = this.experience.world.landingPage.mouse, this.messagePopUp = this.experience.world.landingPage.messagePopUp, this.desktops = this.experience.world.landingPage.desktops, this.sounds = this.experience.sounds, this.face = this.experience.world.character.face, this.animations = this.experience.world.character.animations
    }
    initBlink() {
        this.blink = {
            intervalDuration: 5,
            phases: [this.resources.items.characterBlink0Face, this.resources.items.characterBlink1Face, this.resources.items.characterBlink0Face],
            allowedMaps: [this.face.textures.default, this.face.textures.sleepy]
        }, this.startBlinking()
    }
    startBlinking() {
        this.blink.interval = () => P.delayedCall(this.blink.intervalDuration, () => {
            if (this.blink.currentMap = this.face.material.map, this.blink.allowedMaps.includes(this.blink.currentMap))
                for (let e = 0; e < this.blink.phases.length + 1; e++) P.delayedCall(e * 60 / 1e3, () => {
                    (this.face.material.map == this.blink.phases[e - 1] || e == 0) && (this.face.material.map = e < this.blink.phases.length - 1 ? this.blink.phases[e] : this.blink.currentMap)
                });
            this.blink.interval()
        }), this.blink.interval()
    }
    idle() {
        this.animation = this.experience.world.character.animations, this.animation.actions.current._clip.name === "wave" && this.animation.play("idle", .4), this.scrollInterval(), this.leftDesktopInterval()
    }
    scrollInterval() {
        this.scrollIntervalCall = P.delayedCall(Math.random() * 2 + 3, () => {
            this.experience.ui.landingPage.visible && this.animation.actions.current._clip.name == "idle" && (this.desktops.scrollDesktop0(), Math.random() <= .33 && P.delayedCall(.7, () => {
                !this.isLeft && !this.experience.ui.landingPage.isAnimating && this.desktops.scrollDesktop0()
            })), this.scrollInterval()
        })
    }
    leftDesktopInterval() {
        this.leftDesktopIntervalCall = P.delayedCall(this.leftDesktopIntervalDuration + this.animation.actions.leftDesktopAction._clip.duration + Math.random() * 4, () => {
            this.experience.ui.landingPage.visible && !this.experience.ui.landingPage.isAnimating && (this.leftDesktopIntervals = [], this.isLeft = !0, this.leftDesktopIntervals.push(P.delayedCall(.18, () => this.animation.play("leftDesktopAction", .3))), this.messagePopUp.show(), this.leftDesktopIntervals.push(P.delayedCall(1.7, () => {
                this.experience.ui.landingPage.isAnimating || this.sounds.play("longKeyboard")
            })), this.leftDesktopIntervals.push(P.delayedCall(this.animation.actions.leftDesktopAction._clip.duration, () => {
                this.experience.ui.landingPage.isAnimating || (this.isLeft = !1, this.animation.play("idle", .35))
            }))), this.leftDesktopInterval()
        })
    }
    killLeftDesktopIntervals() {
        this.leftDesktopIntervals && (this.leftDesktopIntervals.forEach(e => e.kill(!0)), this.leftDesktopIntervals = [])
    }
    update() {
        this.experience.ui.landingPage.visible && (this.animations.actions.current._clip.name === "idle" || this.animations.actions.current._clip.name === "left-desktop-action") && this.mouse.updateMouseSync()
    }
}
class yw {
    constructor() {
        this.experience = new ye, this.resources = this.experience.resources, this.time = this.experience.time, this.chair = this.experience.world.landingPage.room.chair, this.resource = this.resources.items.characterModel, this.model = this.resource.scene, this.face = this.experience.world.character.face, this.sounds = this.experience.sounds, this.setAnimations()
    }
    setAnimations() {
        this.mixer = new Yd(this.model), this.defineActions(), this.actions.current = this.actions.idle
    }
    defineActions() {
        this.actions = {}, this.actions.leftDesktopAction = this.mixer.clipAction(this.resource.animations.find(e => e.name === "left-desktop-action")), this.actions.leftDesktopAction.repetitions = 1, this.actions.leftDesktopAction.clampWhenFinished = !0, this.actions.leftDesktopAction.allowedOutsideLanding = !1, this.actions.idle = this.mixer.clipAction(this.resource.animations.find(e => e.name === "idle")), this.actions.idle.loop = No, this.actions.idle.allowedOutsideLanding = !1, this.actions.wave = this.mixer.clipAction(this.resource.animations.find(e => e.name === "wave")), this.actions.wave.repetitions = 1, this.actions.wave.clampWhenFinished = !0, this.actions.wave.allowedOutsideLanding = !1, this.actions.fallDown = this.mixer.clipAction(this.resource.animations.find(e => e.name === "fall-down")), this.actions.fallDown.repetitions = 1, this.actions.fallDown.clampWhenFinished = !0, this.actions.fallDown.allowedOutsideLanding = !0, this.actions.waterIdle = this.mixer.clipAction(this.resource.animations.find(e => e.name === "water-idle")), this.actions.waterIdle.loop = No, this.actions.waterIdle.allowedOutsideLanding = !0, this.actions.contact = this.mixer.clipAction(this.resource.animations.find(e => e.name === "contact-animation")), this.actions.contact.repetitions = 1, this.actions.contact.clampWhenFinished = !0, this.actions.contact.allowedOutsideLanding = !0, this.actions.standingIdle = this.mixer.clipAction(this.resource.animations.find(e => e.name === "standing-idle")), this.actions.standingIdle.loop = No, this.actions.standingIdle.allowedOutsideLanding = !0, this.actions.standingIdle.timeScale = .5
    }
    play(e, t = .5) {
        const n = this.actions[e],
            i = this.actions.current;
        !i._clip.name != n._clip.name && (n.allowedOutsideLanding || this.experience.ui.landingPage.visible) && (n.reset().play(), i.crossFadeTo(n, t), this.actions.current = n)
    }
    playIntroAnimation() {
        P.fromTo(this.model.position, {
            y: 2
        }, {
            y: -5.7,
            duration: 1.1,
            ease: et.easeIn,
            onComplete: () => {
                this.face.material.map = this.face.textures.default, this.sounds.play("chairImpact"), P.delayedCall(.2, () => this.sounds.play("chairDown")), P.to(this.chair.rotation, {
                    x: .12,
                    z: -.12,
                    ease: Uf.easeOut,
                    duration: .16,
                    yoyo: !0,
                    repeat: 1
                })
            }
        }), this.face.material.map = this.face.textures.scared, P.delayedCall(1, () => {
            P.delayedCall(.37, () => {
                this.face.updateFace("smile"), this.experience.world.character.intervals.initBlink()
            }), P.delayedCall(this.actions.wave._clip.duration - 1.7, () => {
                this.experience.ui.landingPage.visible && this.face.updateFace("default")
            })
        }), P.delayedCall(0, () => this.play("wave")), P.delayedCall(this.actions.wave._clip.duration, () => this.experience.world.character.intervals.idle())
    }
    update() {
        this.mixer && this.time.delta < 50 && this.mixer.update(this.time.delta * .001)
    }
}
class xw {
    constructor() {
        this.experience = new ye, this.room = this.experience.world.landingPage.room, this.resources = this.experience.resources, this.setSprites(), P.delayedCall(2, () => this.startAnimations())
    }
    startAnimations() {
        this.moveSprite(0), P.delayedCall(1.5, () => this.moveSprite(1)), P.delayedCall(3, () => this.moveSprite(2))
    }
    setSprites() {
        this.materials = [new Pn({
            map: this.resources.items.tone0Texture,
            alphaTest: .1,
            opacity: 0,
            fog: !1
        }), new Pn({
            map: this.resources.items.tone1Texture,
            alphaTest: .1,
            opacity: 0,
            fog: !1
        }), new Pn({
            map: this.resources.items.tone2Texture,
            alphaTest: .1,
            opacity: 0,
            fog: !1
        })], this.sprites = [new _i(this.materials[0]), new _i(this.materials[1]), new _i(this.materials[2])], this.sprites.forEach(e => {
            e.scale.set(.3, .3, .3), e.position.set(-1.2, 2, -1.9), this.room.model.add(e)
        })
    }
    moveSprite(e) {
        if (this.experience.sounds.active) {
            const t = this.sprites[e];
            P.fromTo(t.material, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1
            }), P.fromTo(t.material, {
                opacity: 1
            }, {
                opacity: 0,
                duration: .5,
                delay: 2.5
            }), P.fromTo(t.material, {
                rotation: -.15
            }, {
                rotation: .15,
                duration: 1,
                repeat: 4,
                yoyo: !0,
                ease: Uf.easeInOut
            }), P.fromTo(t.position, {
                y: 2,
                x: -1.9
            }, {
                y: 3.5,
                x: -.9 - Math.random() * 2,
                duration: 3,
                ease: Hf.easeNone
            })
        }
        P.delayedCall(3, () => P.delayedCall(2, () => this.moveSprite(e)))
    }
}
class vw {
    constructor() {
        this.experience = new ye, this.room = this.experience.world.landingPage.room, this.sounds = this.experience.sounds, this.model = this.room.speaker, this.model.hoverIcon = "pointer", this.model.onClick = () => this.clickEvent(), window.requestAnimationFrame(() => {
            const e = this.experience.ui.menu.main;
            e.on("open", () => {
                this.model.hoverIcon = null, this.model.onClick = null
            }), e.on("hide", () => {
                this.model.hoverIcon = "pointer", this.model.onClick = () => this.clickEvent()
            })
        })
    }
    clickEvent() {
        if (!this.experience.ui.intro.clickCTAVisible) {
            const e = this.experience.ui.soundButton;
            e.active ? e.deactivate() : e.activate(), this.sounds.play("buttonClick")
        }
    }
}
class bw {
    constructor() {
        this.experience = new ye, this.sounds = this.experience.sounds, this.resources = this.experience.resources, this.room = this.experience.world.landingPage.room, this.model = this.experience.world.landingPage.room.penguin, this.wings = [this.model.children[0], this.model.children[1]], this.setHeart(), this.model.hoverIcon = "pointer", this.model.onClick = () => this.jump()
    }
    setHeart() {
        this.heartMaterial = new Pn({
            map: this.resources.items.heartTexture,
            alphaTest: .1,
            opacity: 0,
            fog: !1,
            rotation: .2
        }), this.heart = new _i(this.heartMaterial), this.heart.position.set(this.model.position.x + .07, 2.2, this.model.position.z + .07), this.heart.scale.set(.25, .25, .25), this.room.model.add(this.heart)
    }
    jump() {
        this.isJumping || (this.isJumping = !0, P.delayedCall(.8, () => this.isJumping = !1), P.to(this.model.position, {
            y: 2,
            yoyo: !0,
            repeat: 1,
            duration: .4
        }), P.to(this.wings[0].rotation, {
            x: .4,
            duration: .1,
            repeat: 7,
            yoyo: !0
        }), P.to(this.wings[1].rotation, {
            x: -.4,
            duration: .1,
            repeat: 7,
            yoyo: !0
        }), this.sounds.play("bird"), this.animateHeart())
    }
    animateHeart() {
        P.fromTo(this.heart.position, {
            x: this.model.position.x + .03,
            y: 2.15,
            z: this.model.position.z + .03
        }, {
            x: this.model.position.x + .1,
            y: 2.7,
            z: this.model.position.z + .1,
            duration: .8,
            ease: et.easeOut
        }), P.fromTo(this.heartMaterial, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .3
        }), P.fromTo(this.heartMaterial, {
            opacity: 1
        }, {
            opacity: 0,
            duration: .3,
            delay: .5
        })
    }
}
class ww {
    constructor() {
        this.experience = new ye, this.resources = this.experience.resources, this.resources.on("ready", () => {
            this.fog = new fw, this.background = new aw, this.landingPage = {}, this.landingPage.roomShadow = new Yb, this.landingPage.room = new jb, this.landingPage.desktops = new Jb, this.landingPage.mouse = new lw, this.landingPage.messagePopUp = new cw, this.landingPage.tones = new xw, this.landingPage.speaker = new vw, this.landingPage.penguin = new bw, this.lab = {}, this.lab.model = new Kb, this.lab.shadow = new Zb, this.lab.tube = new ew, this.lab.screen = new tw, this.lab.drop = new nw, this.lab.bubbles = new iw, this.lab.testTubes = new sw, this.contact = {}, this.contact.scene = new hw, this.contact.shadow = new uw, this.contact.david = new dw, this.character = {}, this.character.body = new mw, this.character.face = new gw, this.character.animations = new yw, this.character.intervals = new _w, this.contact.animation = new pw
        })
    }
    update() {
        this.character && (this.character.animations && this.character.animations.update(), this.character.intervals && this.character.intervals.update(), this.character.body && this.character.body.update()), this.lab && this.lab.screen && this.lab.screen.update()
    }
}
class Mw extends Bn {
    constructor(e) {
        super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
            return new Aw(t)
        }), this.register(function(t) {
            return new Dw(t)
        }), this.register(function(t) {
            return new kw(t)
        }), this.register(function(t) {
            return new Cw(t)
        }), this.register(function(t) {
            return new Lw(t)
        }), this.register(function(t) {
            return new Rw(t)
        }), this.register(function(t) {
            return new Pw(t)
        }), this.register(function(t) {
            return new Iw(t)
        }), this.register(function(t) {
            return new Tw(t)
        }), this.register(function(t) {
            return new Fw(t)
        })
    }
    load(e, t, n, i) {
        const s = this;
        let r;
        this.resourcePath !== "" ? r = this.resourcePath : this.path !== "" ? r = this.path : r = xi.extractUrlBase(e), this.manager.itemStart(e);
        const a = function(h) {
                i ? i(h) : console.error(h), s.manager.itemError(e), s.manager.itemEnd(e)
            },
            c = new _a(this.manager);
        c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(h) {
            try {
                s.parse(h, r, function(d) {
                    t(d), s.manager.itemEnd(e)
                }, a)
            } catch (d) {
                a(d)
            }
        }, n, a)
    }
    setDRACOLoader(e) {
        return this.dracoLoader = e, this
    }
    setDDSLoader() {
        throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
    }
    setKTX2Loader(e) {
        return this.ktx2Loader = e, this
    }
    setMeshoptDecoder(e) {
        return this.meshoptDecoder = e, this
    }
    register(e) {
        return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this
    }
    unregister(e) {
        return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
    }
    parse(e, t, n, i) {
        let s;
        const r = {},
            a = {};
        if (typeof e == "string") s = e;
        else if (xi.decodeText(new Uint8Array(e, 0, 4)) === Qf) {
            try {
                r[Ne.KHR_BINARY_GLTF] = new Bw(e)
            } catch (l) {
                i && i(l);
                return
            }
            s = r[Ne.KHR_BINARY_GLTF].content
        } else s = xi.decodeText(new Uint8Array(e));
        const c = JSON.parse(s);
        if (c.asset === void 0 || c.asset.version[0] < 2) {
            i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return
        }
        const h = new Jw(c, {
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        h.fileLoader.setRequestHeader(this.requestHeader);
        for (let d = 0; d < this.pluginCallbacks.length; d++) {
            const l = this.pluginCallbacks[d](h);
            a[l.name] = l, r[l.name] = !0
        }
        if (c.extensionsUsed)
            for (let d = 0; d < c.extensionsUsed.length; ++d) {
                const l = c.extensionsUsed[d],
                    u = c.extensionsRequired || [];
                switch (l) {
                    case Ne.KHR_MATERIALS_UNLIT:
                        r[l] = new Ew;
                        break;
                    case Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                        r[l] = new zw;
                        break;
                    case Ne.KHR_DRACO_MESH_COMPRESSION:
                        r[l] = new Ow(c, this.dracoLoader);
                        break;
                    case Ne.KHR_TEXTURE_TRANSFORM:
                        r[l] = new Nw;
                        break;
                    case Ne.KHR_MESH_QUANTIZATION:
                        r[l] = new Hw;
                        break;
                    default:
                        u.indexOf(l) >= 0 && a[l] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + l + '".')
                }
            }
        h.setExtensions(r), h.setPlugins(a), h.parse(n, i)
    }
    parseAsync(e, t) {
        const n = this;
        return new Promise(function(i, s) {
            n.parse(e, t, i, s)
        })
    }
}

function Sw() {
    let o = {};
    return {
        get: function(e) {
            return o[e]
        },
        add: function(e, t) {
            o[e] = t
        },
        remove: function(e) {
            delete o[e]
        },
        removeAll: function() {
            o = {}
        }
    }
}
const Ne = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
};
class Tw {
    constructor(e) {
        this.parser = e, this.name = Ne.KHR_LIGHTS_PUNCTUAL, this.cache = {
            refs: {},
            uses: {}
        }
    }
    _markDefs() {
        const e = this.parser,
            t = this.parser.json.nodes || [];
        for (let n = 0, i = t.length; n < i; n++) {
            const s = t[n];
            s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light)
        }
    }
    _loadLight(e) {
        const t = this.parser,
            n = "light:" + e;
        let i = t.cache.get(n);
        if (i) return i;
        const s = t.json,
            c = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
        let h;
        const d = new ie(16777215);
        c.color !== void 0 && d.fromArray(c.color);
        const l = c.range !== void 0 ? c.range : 0;
        switch (c.type) {
            case "directional":
                h = new qd(d), h.target.position.set(0, 0, -1), h.add(h.target);
                break;
            case "point":
                h = new Vd(d), h.distance = l;
                break;
            case "spot":
                h = new Ud(d), h.distance = l, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, h.angle = c.spot.outerConeAngle, h.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, h.target.position.set(0, 0, -1), h.add(h.target);
                break;
            default:
                throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type)
        }
        return h.position.set(0, 0, 0), h.decay = 2, c.intensity !== void 0 && (h.intensity = c.intensity), h.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(h), t.cache.add(n, i), i
    }
    createNodeAttachment(e) {
        const t = this,
            n = this.parser,
            s = n.json.nodes[e],
            a = (s.extensions && s.extensions[this.name] || {}).light;
        return a === void 0 ? null : this._loadLight(a).then(function(c) {
            return n._getNodeRef(t.cache, a, c)
        })
    }
}
class Ew {
    constructor() {
        this.name = Ne.KHR_MATERIALS_UNLIT
    }
    getMaterialType() {
        return ht
    }
    extendParams(e, t, n) {
        const i = [];
        e.color = new ie(1, 1, 1), e.opacity = 1;
        const s = t.pbrMetallicRoughness;
        if (s) {
            if (Array.isArray(s.baseColorFactor)) {
                const r = s.baseColorFactor;
                e.color.fromArray(r), e.opacity = r[3]
            }
            s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, Ge))
        }
        return Promise.all(i)
    }
}
class Aw {
    constructor(e) {
        this.parser = e, this.name = Ne.KHR_MATERIALS_CLEARCOAT
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Ei
    }
    extendMaterialParams(e, t) {
        const n = this.parser,
            i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
        const s = [],
            r = i.extensions[this.name];
        if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
            const a = r.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new te(a, a)
        }
        return Promise.all(s)
    }
}
class Cw {
    constructor(e) {
        this.parser = e, this.name = Ne.KHR_MATERIALS_SHEEN
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Ei
    }
    extendMaterialParams(e, t) {
        const n = this.parser,
            i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
        const s = [];
        t.sheenColor = new ie(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
        const r = i.extensions[this.name];
        return r.sheenColorFactor !== void 0 && t.sheenColor.fromArray(r.sheenColorFactor), r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, Ge)), r.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(s)
    }
}
class Lw {
    constructor(e) {
        this.parser = e, this.name = Ne.KHR_MATERIALS_TRANSMISSION
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Ei
    }
    extendMaterialParams(e, t) {
        const n = this.parser,
            i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
        const s = [],
            r = i.extensions[this.name];
        return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(s)
    }
}
class Rw {
    constructor(e) {
        this.parser = e, this.name = Ne.KHR_MATERIALS_VOLUME
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Ei
    }
    extendMaterialParams(e, t) {
        const n = this.parser,
            i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
        const s = [],
            r = i.extensions[this.name];
        t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 0;
        const a = r.attenuationColor || [1, 1, 1];
        return t.attenuationColor = new ie(a[0], a[1], a[2]), Promise.all(s)
    }
}
class Pw {
    constructor(e) {
        this.parser = e, this.name = Ne.KHR_MATERIALS_IOR
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Ei
    }
    extendMaterialParams(e, t) {
        const i = this.parser.json.materials[e];
        if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
        const s = i.extensions[this.name];
        return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve()
    }
}
class Iw {
    constructor(e) {
        this.parser = e, this.name = Ne.KHR_MATERIALS_SPECULAR
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Ei
    }
    extendMaterialParams(e, t) {
        const n = this.parser,
            i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
        const s = [],
            r = i.extensions[this.name];
        t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
        const a = r.specularColorFactor || [1, 1, 1];
        return t.specularColor = new ie(a[0], a[1], a[2]), r.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", r.specularColorTexture, Ge)), Promise.all(s)
    }
}
class Dw {
    constructor(e) {
        this.parser = e, this.name = Ne.KHR_TEXTURE_BASISU
    }
    loadTexture(e) {
        const t = this.parser,
            n = t.json,
            i = n.textures[e];
        if (!i.extensions || !i.extensions[this.name]) return null;
        const s = i.extensions[this.name],
            r = t.options.ktx2Loader;
        if (!r) {
            if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null
        }
        return t.loadTextureImage(e, s.source, r)
    }
}
class kw {
    constructor(e) {
        this.parser = e, this.name = Ne.EXT_TEXTURE_WEBP, this.isSupported = null
    }
    loadTexture(e) {
        const t = this.name,
            n = this.parser,
            i = n.json,
            s = i.textures[e];
        if (!s.extensions || !s.extensions[t]) return null;
        const r = s.extensions[t],
            a = i.images[r.source];
        let c = n.textureLoader;
        if (a.uri) {
            const h = n.options.manager.getHandler(a.uri);
            h !== null && (c = h)
        }
        return this.detectSupport().then(function(h) {
            if (h) return n.loadTextureImage(e, r.source, c);
            if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            return n.loadTexture(e)
        })
    }
    detectSupport() {
        return this.isSupported || (this.isSupported = new Promise(function(e) {
            const t = new Image;
            t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
                e(t.height === 1)
            }
        })), this.isSupported
    }
}
class Fw {
    constructor(e) {
        this.name = Ne.EXT_MESHOPT_COMPRESSION, this.parser = e
    }
    loadBufferView(e) {
        const t = this.parser.json,
            n = t.bufferViews[e];
        if (n.extensions && n.extensions[this.name]) {
            const i = n.extensions[this.name],
                s = this.parser.getDependency("buffer", i.buffer),
                r = this.parser.options.meshoptDecoder;
            if (!r || !r.supported) {
                if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                return null
            }
            return Promise.all([s, r.ready]).then(function(a) {
                const c = i.byteOffset || 0,
                    h = i.byteLength || 0,
                    d = i.count,
                    l = i.byteStride,
                    u = new ArrayBuffer(d * l),
                    f = new Uint8Array(a[0], c, h);
                return r.decodeGltfBuffer(new Uint8Array(u), d, l, f, i.mode, i.filter), u
            })
        } else return null
    }
}
const Qf = "glTF",
    br = 12,
    Nu = {
        JSON: 1313821514,
        BIN: 5130562
    };
class Bw {
    constructor(e) {
        this.name = Ne.KHR_BINARY_GLTF, this.content = null, this.body = null;
        const t = new DataView(e, 0, br);
        if (this.header = {
                magic: xi.decodeText(new Uint8Array(e.slice(0, 4))),
                version: t.getUint32(4, !0),
                length: t.getUint32(8, !0)
            }, this.header.magic !== Qf) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        const n = this.header.length - br,
            i = new DataView(e, br);
        let s = 0;
        for (; s < n;) {
            const r = i.getUint32(s, !0);
            s += 4;
            const a = i.getUint32(s, !0);
            if (s += 4, a === Nu.JSON) {
                const c = new Uint8Array(e, br + s, r);
                this.content = xi.decodeText(c)
            } else if (a === Nu.BIN) {
                const c = br + s;
                this.body = e.slice(c, c + r)
            }
            s += r
        }
        if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.")
    }
}
class Ow {
    constructor(e, t) {
        if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = Ne.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
    }
    decodePrimitive(e, t) {
        const n = this.json,
            i = this.dracoLoader,
            s = e.extensions[this.name].bufferView,
            r = e.extensions[this.name].attributes,
            a = {},
            c = {},
            h = {};
        for (const d in r) {
            const l = Kl[d] || d.toLowerCase();
            a[l] = r[d]
        }
        for (const d in e.attributes) {
            const l = Kl[d] || d.toLowerCase();
            if (r[d] !== void 0) {
                const u = n.accessors[e.attributes[d]],
                    f = $r[u.componentType];
                h[l] = f, c[l] = u.normalized === !0
            }
        }
        return t.getDependency("bufferView", s).then(function(d) {
            return new Promise(function(l) {
                i.decodeDracoFile(d, function(u) {
                    for (const f in u.attributes) {
                        const g = u.attributes[f],
                            p = c[f];
                        p !== void 0 && (g.normalized = p)
                    }
                    l(u)
                }, a, h)
            })
        })
    }
}
class Nw {
    constructor() {
        this.name = Ne.KHR_TEXTURE_TRANSFORM
    }
    extendTexture(e, t) {
        return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e
    }
}
class Jl extends ar {
    constructor(e) {
        super(), this.isGLTFSpecularGlossinessMaterial = !0;
        const t = ["#ifdef USE_SPECULARMAP", "	uniform sampler2D specularMap;", "#endif"].join(`
`),
            n = ["#ifdef USE_GLOSSINESSMAP", "	uniform sampler2D glossinessMap;", "#endif"].join(`
`),
            i = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "	vec4 texelSpecular = texture2D( specularMap, vUv );", "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "	specularFactor *= texelSpecular.rgb;", "#endif"].join(`
`),
            s = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );", "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "	glossinessFactor *= texelGlossiness.a;", "#endif"].join(`
`),
            r = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.", "material.roughness += geometryRoughness;", "material.roughness = min( material.roughness, 1.0 );", "material.specularColor = specularFactor;"].join(`
`),
            a = {
                specular: {
                    value: new ie().setHex(16777215)
                },
                glossiness: {
                    value: 1
                },
                specularMap: {
                    value: null
                },
                glossinessMap: {
                    value: null
                }
            };
        this._extraUniforms = a, this.onBeforeCompile = function(c) {
            for (const h in a) c.uniforms[h] = a[h];
            c.fragmentShader = c.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", n).replace("#include <roughnessmap_fragment>", i).replace("#include <metalnessmap_fragment>", s).replace("#include <lights_physical_fragment>", r)
        }, Object.defineProperties(this, {
            specular: {
                get: function() {
                    return a.specular.value
                },
                set: function(c) {
                    a.specular.value = c
                }
            },
            specularMap: {
                get: function() {
                    return a.specularMap.value
                },
                set: function(c) {
                    a.specularMap.value = c, c ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP
                }
            },
            glossiness: {
                get: function() {
                    return a.glossiness.value
                },
                set: function(c) {
                    a.glossiness.value = c
                }
            },
            glossinessMap: {
                get: function() {
                    return a.glossinessMap.value
                },
                set: function(c) {
                    a.glossinessMap.value = c, c ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV)
                }
            }
        }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.specularMap = e.specularMap, this.specular.copy(e.specular), this.glossinessMap = e.glossinessMap, this.glossiness = e.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this
    }
}
class zw {
    constructor() {
        this.name = Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity"]
    }
    getMaterialType() {
        return Jl
    }
    extendParams(e, t, n) {
        const i = t.extensions[this.name];
        e.color = new ie(1, 1, 1), e.opacity = 1;
        const s = [];
        if (Array.isArray(i.diffuseFactor)) {
            const r = i.diffuseFactor;
            e.color.fromArray(r), e.opacity = r[3]
        }
        if (i.diffuseTexture !== void 0 && s.push(n.assignTexture(e, "map", i.diffuseTexture, Ge)), e.emissive = new ie(0, 0, 0), e.glossiness = i.glossinessFactor !== void 0 ? i.glossinessFactor : 1, e.specular = new ie(1, 1, 1), Array.isArray(i.specularFactor) && e.specular.fromArray(i.specularFactor), i.specularGlossinessTexture !== void 0) {
            const r = i.specularGlossinessTexture;
            s.push(n.assignTexture(e, "glossinessMap", r)), s.push(n.assignTexture(e, "specularMap", r, Ge))
        }
        return Promise.all(s)
    }
    createMaterial(e) {
        const t = new Jl(e);
        return t.fog = !0, t.color = e.color, t.map = e.map === void 0 ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = e.aoMap === void 0 ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = 1, t.emissiveMap = e.emissiveMap === void 0 ? null : e.emissiveMap, t.bumpMap = e.bumpMap === void 0 ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = e.normalMap === void 0 ? null : e.normalMap, t.normalMapType = es, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = e.specularMap === void 0 ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = e.glossinessMap === void 0 ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = e.envMap === void 0 ? null : e.envMap, t.envMapIntensity = 1, t
    }
}
class Hw {
    constructor() {
        this.name = Ne.KHR_MESH_QUANTIZATION
    }
}
class Qi extends $n {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    copySampleValue_(e) {
        const t = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            s = e * i * 3 + i;
        for (let r = 0; r !== i; r++) t[r] = n[s + r];
        return t
    }
}
Qi.prototype.beforeStart_ = Qi.prototype.copySampleValue_;
Qi.prototype.afterEnd_ = Qi.prototype.copySampleValue_;
Qi.prototype.interpolate_ = function(o, e, t, n) {
    const i = this.resultBuffer,
        s = this.sampleValues,
        r = this.valueSize,
        a = r * 2,
        c = r * 3,
        h = n - e,
        d = (t - e) / h,
        l = d * d,
        u = l * d,
        f = o * c,
        g = f - c,
        p = -2 * u + 3 * l,
        m = u - l,
        _ = 1 - p,
        y = m - l + d;
    for (let b = 0; b !== r; b++) {
        const w = s[g + b + r],
            x = s[g + b + a] * h,
            E = s[f + b + r],
            T = s[f + b] * h;
        i[b] = _ * w + y * x + p * E + m * T
    }
    return i
};
const Uw = new Ut;
class Gw extends Qi {
    interpolate_(e, t, n, i) {
        const s = super.interpolate_(e, t, n, i);
        return Uw.fromArray(s).normalize().toArray(s), s
    }
}
const Vn = {
        FLOAT: 5126,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        LINEAR: 9729,
        REPEAT: 10497,
        SAMPLER_2D: 35678,
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6,
        UNSIGNED_BYTE: 5121,
        UNSIGNED_SHORT: 5123
    },
    $r = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
    },
    zu = {
        9728: bt,
        9729: It,
        9984: Ml,
        9985: Zu,
        9986: Sl,
        9987: ir
    },
    Hu = {
        33071: sn,
        33648: Vo,
        10497: Ji
    },
    Uu = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
    },
    Kl = {
        POSITION: "position",
        NORMAL: "normal",
        TANGENT: "tangent",
        TEXCOORD_0: "uv",
        TEXCOORD_1: "uv2",
        COLOR_0: "color",
        WEIGHTS_0: "skinWeight",
        JOINTS_0: "skinIndex"
    },
    hi = {
        scale: "scale",
        translation: "position",
        rotation: "quaternion",
        weights: "morphTargetInfluences"
    },
    Vw = {
        CUBICSPLINE: void 0,
        LINEAR: Ys,
        STEP: Br
    },
    yl = {
        OPAQUE: "OPAQUE",
        MASK: "MASK",
        BLEND: "BLEND"
    };

function Ww(o) {
    return o.DefaultMaterial === void 0 && (o.DefaultMaterial = new ar({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: Ws
    })), o.DefaultMaterial
}

function wr(o, e, t) {
    for (const n in t.extensions) o[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n])
}

function Oi(o, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(o.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras))
}

function qw(o, e, t) {
    let n = !1,
        i = !1,
        s = !1;
    for (let h = 0, d = e.length; h < d; h++) {
        const l = e[h];
        if (l.POSITION !== void 0 && (n = !0), l.NORMAL !== void 0 && (i = !0), l.COLOR_0 !== void 0 && (s = !0), n && i && s) break
    }
    if (!n && !i && !s) return Promise.resolve(o);
    const r = [],
        a = [],
        c = [];
    for (let h = 0, d = e.length; h < d; h++) {
        const l = e[h];
        if (n) {
            const u = l.POSITION !== void 0 ? t.getDependency("accessor", l.POSITION) : o.attributes.position;
            r.push(u)
        }
        if (i) {
            const u = l.NORMAL !== void 0 ? t.getDependency("accessor", l.NORMAL) : o.attributes.normal;
            a.push(u)
        }
        if (s) {
            const u = l.COLOR_0 !== void 0 ? t.getDependency("accessor", l.COLOR_0) : o.attributes.color;
            c.push(u)
        }
    }
    return Promise.all([Promise.all(r), Promise.all(a), Promise.all(c)]).then(function(h) {
        const d = h[0],
            l = h[1],
            u = h[2];
        return n && (o.morphAttributes.position = d), i && (o.morphAttributes.normal = l), s && (o.morphAttributes.color = u), o.morphTargetsRelative = !0, o
    })
}

function Xw(o, e) {
    if (o.updateMorphTargets(), e.weights !== void 0)
        for (let t = 0, n = e.weights.length; t < n; t++) o.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
        const t = e.extras.targetNames;
        if (o.morphTargetInfluences.length === t.length) {
            o.morphTargetDictionary = {};
            for (let n = 0, i = t.length; n < i; n++) o.morphTargetDictionary[t[n]] = n
        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
    }
}

function jw(o) {
    const e = o.extensions && o.extensions[Ne.KHR_DRACO_MESH_COMPRESSION];
    let t;
    return e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + Gu(e.attributes) : t = o.indices + ":" + Gu(o.attributes) + ":" + o.mode, t
}

function Gu(o) {
    let e = "";
    const t = Object.keys(o).sort();
    for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + o[t[n]] + ";";
    return e
}

function Zl(o) {
    switch (o) {
        case Int8Array:
            return 1 / 127;
        case Uint8Array:
            return 1 / 255;
        case Int16Array:
            return 1 / 32767;
        case Uint16Array:
            return 1 / 65535;
        default:
            throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
    }
}

function Yw(o) {
    return o.search(/\.jpe?g($|\?)/i) > 0 || o.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : o.search(/\.webp($|\?)/i) > 0 || o.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png"
}
class Jw {
    constructor(e = {}, t = {}) {
        this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Sw, this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
            refs: {},
            uses: {}
        }, this.cameraCache = {
            refs: {},
            uses: {}
        }, this.lightCache = {
            refs: {},
            uses: {}
        }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {}, typeof createImageBitmap < "u" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !1 ? this.textureLoader = new jd(this.options.manager) : this.textureLoader = new yc(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new _a(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0)
    }
    setExtensions(e) {
        this.extensions = e
    }
    setPlugins(e) {
        this.plugins = e
    }
    parse(e, t) {
        const n = this,
            i = this.json,
            s = this.extensions;
        this.cache.removeAll(), this._invokeAll(function(r) {
            return r._markDefs && r._markDefs()
        }), Promise.all(this._invokeAll(function(r) {
            return r.beforeRoot && r.beforeRoot()
        })).then(function() {
            return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")])
        }).then(function(r) {
            const a = {
                scene: r[0][i.scene || 0],
                scenes: r[0],
                animations: r[1],
                cameras: r[2],
                asset: i.asset,
                parser: n,
                userData: {}
            };
            wr(s, a, i), Oi(a, i), Promise.all(n._invokeAll(function(c) {
                return c.afterRoot && c.afterRoot(a)
            })).then(function() {
                e(a)
            })
        }).catch(t)
    }
    _markDefs() {
        const e = this.json.nodes || [],
            t = this.json.skins || [],
            n = this.json.meshes || [];
        for (let i = 0, s = t.length; i < s; i++) {
            const r = t[i].joints;
            for (let a = 0, c = r.length; a < c; a++) e[r[a]].isBone = !0
        }
        for (let i = 0, s = e.length; i < s; i++) {
            const r = e[i];
            r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera)
        }
    }
    _addNodeRef(e, t) {
        t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
    }
    _getNodeRef(e, t, n) {
        if (e.refs[t] <= 1) return n;
        const i = n.clone(),
            s = (r, a) => {
                const c = this.associations.get(r);
                c != null && this.associations.set(a, c);
                for (const [h, d] of r.children.entries()) s(d, a.children[h])
            };
        return s(n, i), i.name += "_instance_" + e.uses[t]++, i
    }
    _invokeOne(e) {
        const t = Object.values(this.plugins);
        t.push(this);
        for (let n = 0; n < t.length; n++) {
            const i = e(t[n]);
            if (i) return i
        }
        return null
    }
    _invokeAll(e) {
        const t = Object.values(this.plugins);
        t.unshift(this);
        const n = [];
        for (let i = 0; i < t.length; i++) {
            const s = e(t[i]);
            s && n.push(s)
        }
        return n
    }
    getDependency(e, t) {
        const n = e + ":" + t;
        let i = this.cache.get(n);
        if (!i) {
            switch (e) {
                case "scene":
                    i = this.loadScene(t);
                    break;
                case "node":
                    i = this.loadNode(t);
                    break;
                case "mesh":
                    i = this._invokeOne(function(s) {
                        return s.loadMesh && s.loadMesh(t)
                    });
                    break;
                case "accessor":
                    i = this.loadAccessor(t);
                    break;
                case "bufferView":
                    i = this._invokeOne(function(s) {
                        return s.loadBufferView && s.loadBufferView(t)
                    });
                    break;
                case "buffer":
                    i = this.loadBuffer(t);
                    break;
                case "material":
                    i = this._invokeOne(function(s) {
                        return s.loadMaterial && s.loadMaterial(t)
                    });
                    break;
                case "texture":
                    i = this._invokeOne(function(s) {
                        return s.loadTexture && s.loadTexture(t)
                    });
                    break;
                case "skin":
                    i = this.loadSkin(t);
                    break;
                case "animation":
                    i = this.loadAnimation(t);
                    break;
                case "camera":
                    i = this.loadCamera(t);
                    break;
                default:
                    throw new Error("Unknown type: " + e)
            }
            this.cache.add(n, i)
        }
        return i
    }
    getDependencies(e) {
        let t = this.cache.get(e);
        if (!t) {
            const n = this,
                i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
            t = Promise.all(i.map(function(s, r) {
                return n.getDependency(e, r)
            })), this.cache.add(e, t)
        }
        return t
    }
    loadBuffer(e) {
        const t = this.json.buffers[e],
            n = this.fileLoader;
        if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
        if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[Ne.KHR_BINARY_GLTF].body);
        const i = this.options;
        return new Promise(function(s, r) {
            n.load(xi.resolveURL(t.uri, i.path), s, void 0, function() {
                r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
            })
        })
    }
    loadBufferView(e) {
        const t = this.json.bufferViews[e];
        return this.getDependency("buffer", t.buffer).then(function(n) {
            const i = t.byteLength || 0,
                s = t.byteOffset || 0;
            return n.slice(s, s + i)
        })
    }
    loadAccessor(e) {
        const t = this,
            n = this.json,
            i = this.json.accessors[e];
        if (i.bufferView === void 0 && i.sparse === void 0) return Promise.resolve(null);
        const s = [];
        return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(r) {
            const a = r[0],
                c = Uu[i.type],
                h = $r[i.componentType],
                d = h.BYTES_PER_ELEMENT,
                l = d * c,
                u = i.byteOffset || 0,
                f = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0,
                g = i.normalized === !0;
            let p, m;
            if (f && f !== l) {
                const _ = Math.floor(u / f),
                    y = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + _ + ":" + i.count;
                let b = t.cache.get(y);
                b || (p = new h(a, _ * f, i.count * f / d), b = new rr(p, f / d), t.cache.add(y, b)), m = new Ks(b, c, u % f / d, g)
            } else a === null ? p = new h(i.count * c) : p = new h(a, u, i.count * c), m = new ft(p, c, g);
            if (i.sparse !== void 0) {
                const _ = Uu.SCALAR,
                    y = $r[i.sparse.indices.componentType],
                    b = i.sparse.indices.byteOffset || 0,
                    w = i.sparse.values.byteOffset || 0,
                    x = new y(r[1], b, i.sparse.count * _),
                    E = new h(r[2], w, i.sparse.count * c);
                a !== null && (m = new ft(m.array.slice(), m.itemSize, m.normalized));
                for (let T = 0, R = x.length; T < R; T++) {
                    const I = x[T];
                    if (m.setX(I, E[T * c]), c >= 2 && m.setY(I, E[T * c + 1]), c >= 3 && m.setZ(I, E[T * c + 2]), c >= 4 && m.setW(I, E[T * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                }
            }
            return m
        })
    }
    loadTexture(e) {
        const t = this.json,
            n = this.options,
            s = t.textures[e].source,
            r = t.images[s];
        let a = this.textureLoader;
        if (r.uri) {
            const c = n.manager.getHandler(r.uri);
            c !== null && (a = c)
        }
        return this.loadTextureImage(e, s, a)
    }
    loadTextureImage(e, t, n) {
        const i = this,
            s = this.json,
            r = s.textures[e],
            a = s.images[t],
            c = (a.uri || a.bufferView) + ":" + r.sampler;
        if (this.textureCache[c]) return this.textureCache[c];
        const h = this.loadImageSource(t, n).then(function(d) {
            d.flipY = !1, r.name && (d.name = r.name);
            const u = (s.samplers || {})[r.sampler] || {};
            return d.magFilter = zu[u.magFilter] || It, d.minFilter = zu[u.minFilter] || ir, d.wrapS = Hu[u.wrapS] || Ji, d.wrapT = Hu[u.wrapT] || Ji, i.associations.set(d, {
                textures: e
            }), d
        }).catch(function() {
            return null
        });
        return this.textureCache[c] = h, h
    }
    loadImageSource(e, t) {
        const n = this,
            i = this.json,
            s = this.options;
        if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then(l => l.clone());
        const r = i.images[e],
            a = self.URL || self.webkitURL;
        let c = r.uri || "",
            h = !1;
        if (r.bufferView !== void 0) c = n.getDependency("bufferView", r.bufferView).then(function(l) {
            h = !0;
            const u = new Blob([l], {
                type: r.mimeType
            });
            return c = a.createObjectURL(u), c
        });
        else if (r.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
        const d = Promise.resolve(c).then(function(l) {
            return new Promise(function(u, f) {
                let g = u;
                t.isImageBitmapLoader === !0 && (g = function(p) {
                    const m = new xt(p);
                    m.needsUpdate = !0, u(m)
                }), t.load(xi.resolveURL(l, s.path), g, void 0, f)
            })
        }).then(function(l) {
            return h === !0 && a.revokeObjectURL(c), l.userData.mimeType = r.mimeType || Yw(r.uri), l
        }).catch(function(l) {
            throw console.error("THREE.GLTFLoader: Couldn't load texture", c), l
        });
        return this.sourceCache[e] = d, d
    }
    assignTexture(e, t, n, i) {
        const s = this;
        return this.getDependency("texture", n.index).then(function(r) {
            if (n.texCoord !== void 0 && n.texCoord != 0 && !(t === "aoMap" && n.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + t + " not yet supported."), s.extensions[Ne.KHR_TEXTURE_TRANSFORM]) {
                const a = n.extensions !== void 0 ? n.extensions[Ne.KHR_TEXTURE_TRANSFORM] : void 0;
                if (a) {
                    const c = s.associations.get(r);
                    r = s.extensions[Ne.KHR_TEXTURE_TRANSFORM].extendTexture(r, a), s.associations.set(r, c)
                }
            }
            return i !== void 0 && (r.encoding = i), e[t] = r, r
        })
    }
    assignFinalMaterial(e) {
        const t = e.geometry;
        let n = e.material;
        const i = t.attributes.tangent === void 0,
            s = t.attributes.color !== void 0,
            r = t.attributes.normal === void 0;
        if (e.isPoints) {
            const a = "PointsMaterial:" + n.uuid;
            let c = this.cache.get(a);
            c || (c = new fa, dt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(a, c)), n = c
        } else if (e.isLine) {
            const a = "LineBasicMaterial:" + n.uuid;
            let c = this.cache.get(a);
            c || (c = new os, dt.prototype.copy.call(c, n), c.color.copy(n.color), this.cache.add(a, c)), n = c
        }
        if (i || s || r) {
            let a = "ClonedMaterial:" + n.uuid + ":";
            n.isGLTFSpecularGlossinessMaterial && (a += "specular-glossiness:"), i && (a += "derivative-tangents:"), s && (a += "vertex-colors:"), r && (a += "flat-shading:");
            let c = this.cache.get(a);
            c || (c = n.clone(), s && (c.vertexColors = !0), r && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(a, c), this.associations.set(c, this.associations.get(n))), n = c
        }
        n.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), e.material = n
    }
    getMaterialType() {
        return ar
    }
    loadMaterial(e) {
        const t = this,
            n = this.json,
            i = this.extensions,
            s = n.materials[e];
        let r;
        const a = {},
            c = s.extensions || {},
            h = [];
        if (c[Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const l = i[Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            r = l.getMaterialType(), h.push(l.extendParams(a, s, t))
        } else if (c[Ne.KHR_MATERIALS_UNLIT]) {
            const l = i[Ne.KHR_MATERIALS_UNLIT];
            r = l.getMaterialType(), h.push(l.extendParams(a, s, t))
        } else {
            const l = s.pbrMetallicRoughness || {};
            if (a.color = new ie(1, 1, 1), a.opacity = 1, Array.isArray(l.baseColorFactor)) {
                const u = l.baseColorFactor;
                a.color.fromArray(u), a.opacity = u[3]
            }
            l.baseColorTexture !== void 0 && h.push(t.assignTexture(a, "map", l.baseColorTexture, Ge)), a.metalness = l.metallicFactor !== void 0 ? l.metallicFactor : 1, a.roughness = l.roughnessFactor !== void 0 ? l.roughnessFactor : 1, l.metallicRoughnessTexture !== void 0 && (h.push(t.assignTexture(a, "metalnessMap", l.metallicRoughnessTexture)), h.push(t.assignTexture(a, "roughnessMap", l.metallicRoughnessTexture))), r = this._invokeOne(function(u) {
                return u.getMaterialType && u.getMaterialType(e)
            }), h.push(Promise.all(this._invokeAll(function(u) {
                return u.extendMaterialParams && u.extendMaterialParams(e, a)
            })))
        }
        s.doubleSided === !0 && (a.side = Yi);
        const d = s.alphaMode || yl.OPAQUE;
        if (d === yl.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, d === yl.MASK && (a.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : .5)), s.normalTexture !== void 0 && r !== ht && (h.push(t.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new te(1, 1), s.normalTexture.scale !== void 0)) {
            const l = s.normalTexture.scale;
            a.normalScale.set(l, l)
        }
        return s.occlusionTexture !== void 0 && r !== ht && (h.push(t.assignTexture(a, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && r !== ht && (a.emissive = new ie().fromArray(s.emissiveFactor)), s.emissiveTexture !== void 0 && r !== ht && h.push(t.assignTexture(a, "emissiveMap", s.emissiveTexture, Ge)), Promise.all(h).then(function() {
            let l;
            return r === Jl ? l = i[Ne.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a) : l = new r(a), s.name && (l.name = s.name), Oi(l, s), t.associations.set(l, {
                materials: e
            }), s.extensions && wr(i, l, s), l
        })
    }
    createUniqueName(e) {
        const t = Xe.sanitizeNodeName(e || "");
        let n = t;
        for (let i = 1; this.nodeNamesUsed[n]; ++i) n = t + "_" + i;
        return this.nodeNamesUsed[n] = !0, n
    }
    loadGeometries(e) {
        const t = this,
            n = this.extensions,
            i = this.primitiveCache;

        function s(a) {
            return n[Ne.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(c) {
                return Vu(c, a, t)
            })
        }
        const r = [];
        for (let a = 0, c = e.length; a < c; a++) {
            const h = e[a],
                d = jw(h),
                l = i[d];
            if (l) r.push(l.promise);
            else {
                let u;
                h.extensions && h.extensions[Ne.KHR_DRACO_MESH_COMPRESSION] ? u = s(h) : u = Vu(new tt, h, t), i[d] = {
                    primitive: h,
                    promise: u
                }, r.push(u)
            }
        }
        return Promise.all(r)
    }
    loadMesh(e) {
        const t = this,
            n = this.json,
            i = this.extensions,
            s = n.meshes[e],
            r = s.primitives,
            a = [];
        for (let c = 0, h = r.length; c < h; c++) {
            const d = r[c].material === void 0 ? Ww(this.cache) : this.getDependency("material", r[c].material);
            a.push(d)
        }
        return a.push(t.loadGeometries(r)), Promise.all(a).then(function(c) {
            const h = c.slice(0, c.length - 1),
                d = c[c.length - 1],
                l = [];
            for (let f = 0, g = d.length; f < g; f++) {
                const p = d[f],
                    m = r[f];
                let _;
                const y = h[f];
                if (m.mode === Vn.TRIANGLES || m.mode === Vn.TRIANGLE_STRIP || m.mode === Vn.TRIANGLE_FAN || m.mode === void 0) _ = s.isSkinnedMesh === !0 ? new cc(p, y) : new St(p, y), _.isSkinnedMesh === !0 && !_.geometry.attributes.skinWeight.normalized && _.normalizeSkinWeights(), m.mode === Vn.TRIANGLE_STRIP ? _.geometry = Wu(_.geometry, nm) : m.mode === Vn.TRIANGLE_FAN && (_.geometry = Wu(_.geometry, Qu));
                else if (m.mode === Vn.LINES) _ = new da(p, y);
                else if (m.mode === Vn.LINE_STRIP) _ = new ua(p, y);
                else if (m.mode === Vn.LINE_LOOP) _ = new vd(p, y);
                else if (m.mode === Vn.POINTS) _ = new bd(p, y);
                else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
                Object.keys(_.geometry.morphAttributes).length > 0 && Xw(_, s), _.name = t.createUniqueName(s.name || "mesh_" + e), Oi(_, s), m.extensions && wr(i, _, m), t.assignFinalMaterial(_), l.push(_)
            }
            for (let f = 0, g = l.length; f < g; f++) t.associations.set(l[f], {
                meshes: e,
                primitives: f
            });
            if (l.length === 1) return l[0];
            const u = new Yn;
            t.associations.set(u, {
                meshes: e
            });
            for (let f = 0, g = l.length; f < g; f++) u.add(l[f]);
            return u
        })
    }
    loadCamera(e) {
        let t;
        const n = this.json.cameras[e],
            i = n[n.type];
        if (!i) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return
        }
        return n.type === "perspective" ? t = new Dt(wm.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new la(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Oi(t, n), Promise.resolve(t)
    }
    loadSkin(e) {
        const t = this.json.skins[e],
            n = {
                joints: t.joints
            };
        return t.inverseBindMatrices === void 0 ? Promise.resolve(n) : this.getDependency("accessor", t.inverseBindMatrices).then(function(i) {
            return n.inverseBindMatrices = i, n
        })
    }
    loadAnimation(e) {
        const n = this.json.animations[e],
            i = [],
            s = [],
            r = [],
            a = [],
            c = [];
        for (let h = 0, d = n.channels.length; h < d; h++) {
            const l = n.channels[h],
                u = n.samplers[l.sampler],
                f = l.target,
                g = f.node !== void 0 ? f.node : f.id,
                p = n.parameters !== void 0 ? n.parameters[u.input] : u.input,
                m = n.parameters !== void 0 ? n.parameters[u.output] : u.output;
            i.push(this.getDependency("node", g)), s.push(this.getDependency("accessor", p)), r.push(this.getDependency("accessor", m)), a.push(u), c.push(f)
        }
        return Promise.all([Promise.all(i), Promise.all(s), Promise.all(r), Promise.all(a), Promise.all(c)]).then(function(h) {
            const d = h[0],
                l = h[1],
                u = h[2],
                f = h[3],
                g = h[4],
                p = [];
            for (let _ = 0, y = d.length; _ < y; _++) {
                const b = d[_],
                    w = l[_],
                    x = u[_],
                    E = f[_],
                    T = g[_];
                if (b === void 0) continue;
                b.updateMatrix(), b.matrixAutoUpdate = !0;
                let R;
                switch (hi[T.path]) {
                    case hi.weights:
                        R = Vr;
                        break;
                    case hi.rotation:
                        R = Zi;
                        break;
                    case hi.position:
                    case hi.scale:
                    default:
                        R = Wr;
                        break
                }
                const I = b.name ? b.name : b.uuid,
                    B = E.interpolation !== void 0 ? Vw[E.interpolation] : Ys,
                    v = [];
                hi[T.path] === hi.weights ? b.traverse(function(U) {
                    U.morphTargetInfluences && v.push(U.name ? U.name : U.uuid)
                }) : v.push(I);
                let L = x.array;
                if (x.normalized) {
                    const U = Zl(L.constructor),
                        D = new Float32Array(L.length);
                    for (let O = 0, N = L.length; O < N; O++) D[O] = L[O] * U;
                    L = D
                }
                for (let U = 0, D = v.length; U < D; U++) {
                    const O = new R(v[U] + "." + hi[T.path], w.array, L, B);
                    E.interpolation === "CUBICSPLINE" && (O.createInterpolant = function(H) {
                        const F = this instanceof Zi ? Gw : Qi;
                        return new F(this.times, this.values, this.getValueSize() / 3, H)
                    }, O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), p.push(O)
                }
            }
            const m = n.name ? n.name : "animation_" + e;
            return new Il(m, void 0, p)
        })
    }
    createNodeMesh(e) {
        const t = this.json,
            n = this,
            i = t.nodes[e];
        return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
            const r = n._getNodeRef(n.meshCache, i.mesh, s);
            return i.weights !== void 0 && r.traverse(function(a) {
                if (a.isMesh)
                    for (let c = 0, h = i.weights.length; c < h; c++) a.morphTargetInfluences[c] = i.weights[c]
            }), r
        })
    }
    loadNode(e) {
        const t = this.json,
            n = this.extensions,
            i = this,
            s = t.nodes[e],
            r = s.name ? i.createUniqueName(s.name) : "";
        return function() {
            const a = [],
                c = i._invokeOne(function(h) {
                    return h.createNodeMesh && h.createNodeMesh(e)
                });
            return c && a.push(c), s.camera !== void 0 && a.push(i.getDependency("camera", s.camera).then(function(h) {
                return i._getNodeRef(i.cameraCache, s.camera, h)
            })), i._invokeAll(function(h) {
                return h.createNodeAttachment && h.createNodeAttachment(e)
            }).forEach(function(h) {
                a.push(h)
            }), Promise.all(a)
        }().then(function(a) {
            let c;
            if (s.isBone === !0 ? c = new hc : a.length > 1 ? c = new Yn : a.length === 1 ? c = a[0] : c = new je, c !== a[0])
                for (let h = 0, d = a.length; h < d; h++) c.add(a[h]);
            if (s.name && (c.userData.name = s.name, c.name = r), Oi(c, s), s.extensions && wr(n, c, s), s.matrix !== void 0) {
                const h = new _e;
                h.fromArray(s.matrix), c.applyMatrix4(h)
            } else s.translation !== void 0 && c.position.fromArray(s.translation), s.rotation !== void 0 && c.quaternion.fromArray(s.rotation), s.scale !== void 0 && c.scale.fromArray(s.scale);
            return i.associations.has(c) || i.associations.set(c, {}), i.associations.get(c).nodes = e, c
        })
    }
    loadScene(e) {
        const t = this.json,
            n = this.extensions,
            i = this.json.scenes[e],
            s = this,
            r = new Yn;
        i.name && (r.name = s.createUniqueName(i.name)), Oi(r, i), i.extensions && wr(n, r, i);
        const a = i.nodes || [],
            c = [];
        for (let h = 0, d = a.length; h < d; h++) c.push(ep(a[h], r, t, s));
        return Promise.all(c).then(function() {
            const h = d => {
                const l = new Map;
                for (const [u, f] of s.associations)(u instanceof dt || u instanceof xt) && l.set(u, f);
                return d.traverse(u => {
                    const f = s.associations.get(u);
                    f != null && l.set(u, f)
                }), l
            };
            return s.associations = h(r), r
        })
    }
}

function ep(o, e, t, n) {
    const i = t.nodes[o];
    return n.getDependency("node", o).then(function(s) {
        if (i.skin === void 0) return s;
        let r;
        return n.getDependency("skin", i.skin).then(function(a) {
            r = a;
            const c = [];
            for (let h = 0, d = r.joints.length; h < d; h++) c.push(n.getDependency("node", r.joints[h]));
            return Promise.all(c)
        }).then(function(a) {
            return s.traverse(function(c) {
                if (!c.isMesh) return;
                const h = [],
                    d = [];
                for (let l = 0, u = a.length; l < u; l++) {
                    const f = a[l];
                    if (f) {
                        h.push(f);
                        const g = new _e;
                        r.inverseBindMatrices !== void 0 && g.fromArray(r.inverseBindMatrices.array, l * 16), d.push(g)
                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', r.joints[l])
                }
                c.bind(new uc(h, d), c.matrixWorld)
            }), s
        })
    }).then(function(s) {
        e.add(s);
        const r = [];
        if (i.children) {
            const a = i.children;
            for (let c = 0, h = a.length; c < h; c++) {
                const d = a[c];
                r.push(ep(d, s, t, n))
            }
        }
        return Promise.all(r)
    })
}

function Kw(o, e, t) {
    const n = e.attributes,
        i = new dn;
    if (n.POSITION !== void 0) {
        const a = t.json.accessors[n.POSITION],
            c = a.min,
            h = a.max;
        if (c !== void 0 && h !== void 0) {
            if (i.set(new C(c[0], c[1], c[2]), new C(h[0], h[1], h[2])), a.normalized) {
                const d = Zl($r[a.componentType]);
                i.min.multiplyScalar(d), i.max.multiplyScalar(d)
            }
        } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return
        }
    } else return;
    const s = e.targets;
    if (s !== void 0) {
        const a = new C,
            c = new C;
        for (let h = 0, d = s.length; h < d; h++) {
            const l = s[h];
            if (l.POSITION !== void 0) {
                const u = t.json.accessors[l.POSITION],
                    f = u.min,
                    g = u.max;
                if (f !== void 0 && g !== void 0) {
                    if (c.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), u.normalized) {
                        const p = Zl($r[u.componentType]);
                        c.multiplyScalar(p)
                    }
                    a.max(c)
                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
            }
        }
        i.expandByVector(a)
    }
    o.boundingBox = i;
    const r = new is;
    i.getCenter(r.center), r.radius = i.min.distanceTo(i.max) / 2, o.boundingSphere = r
}

function Vu(o, e, t) {
    const n = e.attributes,
        i = [];

    function s(r, a) {
        return t.getDependency("accessor", r).then(function(c) {
            o.setAttribute(a, c)
        })
    }
    for (const r in n) {
        const a = Kl[r] || r.toLowerCase();
        a in o.attributes || i.push(s(n[r], a))
    }
    if (e.indices !== void 0 && !o.index) {
        const r = t.getDependency("accessor", e.indices).then(function(a) {
            o.setIndex(a)
        });
        i.push(r)
    }
    return Oi(o, e), Kw(o, e, t), Promise.all(i).then(function() {
        return e.targets !== void 0 ? qw(o, e.targets, t) : o
    })
}

function Wu(o, e) {
    let t = o.getIndex();
    if (t === null) {
        const r = [],
            a = o.getAttribute("position");
        if (a !== void 0) {
            for (let c = 0; c < a.count; c++) r.push(c);
            o.setIndex(r), t = o.getIndex()
        } else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), o
    }
    const n = t.count - 2,
        i = [];
    if (e === Qu)
        for (let r = 1; r <= n; r++) i.push(t.getX(0)), i.push(t.getX(r)), i.push(t.getX(r + 1));
    else
        for (let r = 0; r < n; r++) r % 2 === 0 ? (i.push(t.getX(r)), i.push(t.getX(r + 1)), i.push(t.getX(r + 2))) : (i.push(t.getX(r + 2)), i.push(t.getX(r + 1)), i.push(t.getX(r)));
    i.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = o.clone();
    return s.setIndex(i), s
}
class Zw extends Bn {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const s = this,
            r = new _a(this.manager);
        r.setPath(this.path), r.setRequestHeader(this.requestHeader), r.setWithCredentials(s.withCredentials), r.load(e, function(a) {
            let c;
            try {
                c = JSON.parse(a)
            } catch {
                console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), c = JSON.parse(a.substring(65, a.length - 2))
            }
            const h = s.parse(c);
            t && t(h)
        }, n, i)
    }
    parse(e) {
        return new tp(e)
    }
}
class tp {
    constructor(e) {
        this.type = "Font", this.data = e
    }
    generateShapes(e, t = 100) {
        const n = [],
            i = $w(e, t, this.data);
        for (let s = 0, r = i.length; s < r; s++) Array.prototype.push.apply(n, i[s].toShapes());
        return n
    }
}

function $w(o, e, t) {
    const n = Array.from(o),
        i = e / t.resolution,
        s = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * i,
        r = [];
    let a = 0,
        c = 0;
    for (let h = 0; h < n.length; h++) {
        const d = n[h];
        if (d === `
`) a = 0, c -= s;
        else {
            const l = Qw(d, i, a, c, t);
            a += l.offsetX, r.push(l.path)
        }
    }
    return r
}

function Qw(o, e, t, n, i) {
    const s = i.glyphs[o] || i.glyphs["?"];
    if (!s) {
        console.error('THREE.Font: character "' + o + '" does not exists in font family ' + i.familyName + ".");
        return
    }
    const r = new Tv;
    let a, c, h, d, l, u, f, g;
    if (s.o) {
        const p = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
        for (let m = 0, _ = p.length; m < _;) switch (p[m++]) {
            case "m":
                a = p[m++] * e + t, c = p[m++] * e + n, r.moveTo(a, c);
                break;
            case "l":
                a = p[m++] * e + t, c = p[m++] * e + n, r.lineTo(a, c);
                break;
            case "q":
                h = p[m++] * e + t, d = p[m++] * e + n, l = p[m++] * e + t, u = p[m++] * e + n, r.quadraticCurveTo(l, u, h, d);
                break;
            case "b":
                h = p[m++] * e + t, d = p[m++] * e + n, l = p[m++] * e + t, u = p[m++] * e + n, f = p[m++] * e + t, g = p[m++] * e + n, r.bezierCurveTo(l, u, f, g, h, d);
                break
        }
    }
    return {
        offsetX: s.ha * e,
        path: r
    }
}
tp.prototype.isFont = !0;
class eM extends Ai {
    constructor(t) {
        super();
        he(this, "loadingAnimation", document.getElementById("loading-animation"));
        he(this, "loadingRect", document.getElementById("loading-rect"));
        this.experience = new ye, this.sources = t, this.items = {}, this.toLoad = this.sources.length, this.loaded = 0, this.textures = [], P.to(this.loadingRect, {
            y: 61,
            duration: 0
        }), this.setLoaders(), this.startLoading()
    }
    setLoaders() {
        this.loaders = {}, this.loaders.gltfLoader = new Mw, this.loaders.textureLoader = new yc, this.loaders.fontLoader = new Zw
    }
    startLoading() {
        for (const t of this.sources) t.type === "gltfModel" ? this.loaders.gltfLoader.load(t.path, n => {
            this.sourceLoaded(t, n)
        }) : t.type === "texture" && this.loaders.textureLoader.load(t.path, n => {
            this.sourceLoaded(t, n), n.encoding = Ge, this.textures.push(n)
        })
    }
    sourceLoaded(t, n) {
        this.items[t.name] = n, this.loaded++, this.updateLoadingAnimation(), this.loaded === this.toLoad && (this.trigger("ready"), this.initTextures())
    }
    updateLoadingAnimation() {
        P.to(this.loadingRect, {
            y: 61 - 61 * (this.loaded / this.toLoad)
        })
    }
    initTextures() {
        this.textures.forEach(t => {
            this.experience.renderer.instance.initTexture(t)
        })
    }
}
const tM = [{
    name: "roomModel",
    type: "gltfModel",
    path: "models/room/model.glb"
}, {
    name: "roomShadowModel",
    type: "gltfModel",
    path: "models/room/shadow-model.glb"
}, {
    name: "bakedRoomTexture",
    type: "texture",
    path: "models/room/baked.jpg"
}, {
    name: "bakedShadowRoomTexture",
    type: "texture",
    path: "models/room/shadow-baked.jpg"
}, {
    name: "tone0Texture",
    type: "texture",
    path: "textures/sprites/tone-0.png"
}, {
    name: "tone1Texture",
    type: "texture",
    path: "textures/sprites/tone-1.png"
}, {
    name: "tone2Texture",
    type: "texture",
    path: "textures/sprites/tone-2.png"
}, {
    name: "heartTexture",
    type: "texture",
    path: "textures/sprites/heart.png"
}, {
    name: "characterModel",
    type: "gltfModel",
    path: "models/character/model.glb"
}, {
    name: "shirtMatcap",
    type: "texture",
    path: "textures/matcaps/shirt.jpg"
}, {
    name: "skinMatcap",
    type: "texture",
    path: "textures/matcaps/skin.jpg"
}, {
    name: "pantsMatcap",
    type: "texture",
    path: "textures/matcaps/pants.jpg"
}, {
    name: "whiteMatcap",
    type: "texture",
    path: "textures/matcaps/white.jpg"
}, {
    name: "bakedCharacterHeadTexture",
    type: "texture",
    path: "models/character/head-baked.jpg"
}, {
    name: "characterDefaultFace",
    type: "texture",
    path: "models/character/faces/default.png"
}, {
    name: "characterBlink0Face",
    type: "texture",
    path: "models/character/faces/blink-0.png"
}, {
    name: "characterBlink1Face",
    type: "texture",
    path: "models/character/faces/blink-1.png"
}, {
    name: "characterSmile0Face",
    type: "texture",
    path: "models/character/faces/smile/0.png"
}, {
    name: "characterSmile1Face",
    type: "texture",
    path: "models/character/faces/smile/1.png"
}, {
    name: "characterSmile2Face",
    type: "texture",
    path: "models/character/faces/smile/2.png"
}, {
    name: "characterScaredFace",
    type: "texture",
    path: "models/character/faces/scared.png"
}, {
    name: "characterSleepyFace",
    type: "texture",
    path: "models/character/faces/sleepy.png"
}, {
    name: "characterContact1Face",
    type: "texture",
    path: "models/character/faces/contact/1.png"
}, {
    name: "characterContact2Face",
    type: "texture",
    path: "models/character/faces/contact/2.png"
}, {
    name: "desktop0",
    type: "texture",
    path: "models/room/desktops/0.png"
}, {
    name: "desktop1",
    type: "texture",
    path: "models/room/desktops/1.png"
}, {
    name: "newMessageSprite",
    type: "texture",
    path: "textures/sprites/new-message.png"
}, {
    name: "desktop1Notification",
    type: "texture",
    path: "models/room/desktops/1-notification.png"
}, {
    name: "labModel",
    type: "gltfModel",
    path: "models/lab/model.glb"
}, {
    name: "labShadowModel",
    type: "gltfModel",
    path: "models/lab/shadow-model.glb"
}, {
    name: "bakedShadowLabTexture",
    type: "texture",
    path: "models/lab/shadow-baked.jpg"
}, {
    name: "bakedLabTexture",
    type: "texture",
    path: "models/lab/baked.jpg"
}, {
    name: "labScreenGraph",
    type: "texture",
    path: "models/lab/screen-graph.jpg"
}, {
    name: "labScreenOffline",
    type: "texture",
    path: "models/lab/screen-offline.jpg"
}, {
    name: "bubbleSprite",
    type: "texture",
    path: "textures/sprites/bubble.png"
}, {
    name: "bubblePopSprite",
    type: "texture",
    path: "textures/sprites/bubble-pop.png"
}, {
    name: "contactSceneModel",
    type: "gltfModel",
    path: "models/contact/model.glb"
}, {
    name: "bakedContactTexture",
    type: "texture",
    path: "models/contact/baked.jpg"
}, {
    name: "contactShadowModel",
    type: "gltfModel",
    path: "models/contact/shadow-model.glb"
}, {
    name: "bakedShadowContactTexture",
    type: "texture",
    path: "models/contact/shadow-baked.jpg"
}, {
    name: "davidImage",
    type: "texture",
    path: "images/david.png"
}];
class nM extends Ai {
    constructor() {
        super();
        he(this, "scrollAnimationDuration", .7);
        he(this, "visible", !0);
        he(this, "isAnimating", !1);
        he(this, "reopeningEnabled", !0);
        he(this, "domElements", {
            landingPage: document.getElementById("landing-page"),
            scrollContainer: document.getElementById("scroll-container"),
            logoWhiteBackground: document.getElementById("logo-white-background"),
            contentSvg: document.getElementById("landing-content-svg"),
            heading0: document.querySelectorAll(".landing-headline")[0],
            heading1: document.querySelectorAll(".landing-headline")[1],
            subheading: document.querySelector(".landing-subheading"),
            button: document.getElementById("landing-cta-button"),
            aboutMeButton: document.getElementById("landing-more-about-me")
        });
        this.experience = new ye, this.gestures = this.experience.gestures, this.room = this.experience.world.landingPage.room, this.background = this.experience.world.background, this.renderer = this.experience.renderer, this.character = this.experience.world.character, this.scrollIcon = this.experience.ui.scrollIcon, this.transiton = this.experience.ui.transition, this.sounds = this.experience.sounds, this.sizes = this.experience.sizes, this.waypoints = this.experience.waypoints, this.contactAnimation = this.experience.world.contact.animation, this.intervals = this.experience.world.character.intervals, this.gestures.on("scroll-down", () => this.hide()), this.gestures.on("touch-down", () => this.hide()), this.waypoints.moveToWaypoint(this.sizes.portrait ? "landing-page-portrait" : "landing-page", !1), this.sizes.on("portrait", () => this.onOrientationChange()), this.sizes.on("landscape", () => this.onOrientationChange())
    }
    onOrientationChange() {
        this.visible && this.waypoints.moveToWaypoint(this.sizes.portrait ? "landing-page-portrait" : "landing-page", !1)
    }
    playOpeningAnimation(t = 0) {
        P.fromTo(this.domElements.contentSvg, {
            opacity: 0
        }, {
            opacity: 1,
            delay: t,
            duration: .4
        }), this.sizes.portrait ? P.fromTo(this.domElements.contentSvg, {
            y: this.domElements.contentSvg.clientWidth * .6,
            scale: .6
        }, {
            y: 0,
            scale: 1,
            delay: t,
            duration: .6,
            ease: yn.easeOut.config(1.4)
        }) : P.fromTo(this.domElements.contentSvg, {
            x: this.domElements.contentSvg.clientWidth * .6,
            scale: .6
        }, {
            x: 0,
            scale: 1,
            delay: t,
            duration: .6,
            ease: yn.easeOut.config(1.4)
        })
    }
    hide() {
        this.visible && !this.isAnimating && !this.experience.ui.menu.main.visible && !this.experience.ui.menu.main.isAnimating && !this.transiton.isShowing && this.reopeningEnabled && (this.visible = !1, this.scrollIcon.kill(), this.intervals.killLeftDesktopIntervals(), this.lockScrolling(), this.sounds.muteGroup("landing", !0), this.sounds.muteGroup("lab", !1), this.room.bounceOut(), P.delayedCall(.2, () => {
            this.domElements.landingPage.style.top = "-100%", this.domElements.scrollContainer.style.top = "0", this.waypoints.moveToWaypoint(this.sizes.portrait ? "scroll-start-portrait" : "scroll-start", !0, this.scrollAnimationDuration), P.to(this.background.material.uniforms.uOffset, {
                value: -.75,
                ease: et.easeInOut,
                duration: this.scrollAnimationDuration
            }), P.to(this.domElements.logoWhiteBackground, {
                y: -window.innerHeight,
                ease: et.easeInOut,
                duration: this.scrollAnimationDuration
            }), P.delayedCall(.7, () => this.experience.ui.scrollScrollIcon.fade(!0)), P.delayedCall(.7, () => this.renderer.instance.setClearColor("#EFE7DC")), this.experience.ui.about.animations.hologramPlayed = !1, this.experience.ui.about.animations.playHologramAnimation(.5), this.character.animations.play("fallDown", .35), P.to(this.character.body.model.position, {
                y: -18.95,
                duration: this.scrollAnimationDuration,
                ease: et.easeInOut
            }), P.delayedCall(.05, () => this.sounds.play("waterSplash")), this.character.face.material.map = this.character.face.textures.scared, P.delayedCall(.65, () => this.character.animations.play("waterIdle", 1)), P.delayedCall(.05, () => {
                for (let n = 0; n < 5; n++) this.experience.world.lab.bubbles.spawnBubble(Math.random() * 1.8 + 1.2, "back")
            }), this.character.body.checkForWireframe = "down", P.delayedCall(this.scrollAnimationDuration, () => this.character.body.checkForWireframe = null), this.trigger("hide"), this.lockReopening()
        }))
    }
    show() {
        !this.visible && !this.isAnimating && !this.transiton.isShowing && this.reopeningEnabled && (this.visible = !0, this.intervals.killLeftDesktopIntervals(), this.sounds.muteGroup("landing", !1, 1), this.sounds.muteGroup("lab", !0, 1), this.lockScrolling(), this.experience.ui.scrollScrollIcon.fade(!1), this.room.bounceIn(.5), this.domElements.landingPage.style.top = "0", this.domElements.scrollContainer.style.top = "100%", this.waypoints.moveToWaypoint(this.sizes.portrait ? "landing-page-portrait" : "landing-page", !0, this.scrollAnimationDuration), P.to(this.background.material.uniforms.uOffset, {
            value: -2.75,
            duration: this.scrollAnimationDuration,
            ease: et.easeInOut
        }), P.to(this.domElements.logoWhiteBackground, {
            y: 0,
            ease: et.easeInOut,
            duration: this.scrollAnimationDuration
        }), this.renderer.instance.setClearColor("#F5EFE6"), P.to(this.character.body.model.position, {
            y: -5.7,
            duration: this.scrollAnimationDuration,
            ease: et.easeInOut
        }), this.character.animations.play("idle", .7), this.experience.world.landingPage.mouse.moveToIdleStartPositon(), this.character.face.material.map = this.character.face.textures.default, this.character.body.checkForWireframe = "up", P.delayedCall(this.scrollAnimationDuration, () => this.character.body.checkForWireframe = null), this.contactAnimation.resetCharacter(), this.sounds.play("waterUp"), this.trigger("show"), this.lockReopening())
    }
    lockScrolling() {
        this.isAnimating = !0, P.delayedCall(this.scrollAnimationDuration + .2, () => this.isAnimating = !1)
    }
    lockReopening() {
        this.reopeningEnabled = !1, P.delayedCall(this.scrollAnimationDuration + .5, () => this.reopeningEnabled = !0)
    }
}
class iM extends Ai {
    constructor() {
        super();
        he(this, "parameters", {
            multiplyTouchStrengthBy: () => (this.sizes.portrait, 2),
            scrollDuration: () => this.sizes.touch ? .6 : .8,
            scrollEase: () => (this.sizes.touch, et.easeOut),
            verticalSwipeMaximumSinceStart: 250
        });
        he(this, "scrollY", 0);
        he(this, "events", []);
        he(this, "domElements", {
            scrollContainer: document.getElementById("scroll-container"),
            logoWhiteBackground: document.getElementById("logo-white-background")
        });
        this.experience = new ye, this.camera = this.experience.camera, this.sizes = this.experience.sizes, this.landingPage = this.experience.ui.landingPage, this.time = this.experience.time, this.background = this.experience.world.background, this.gestures = this.experience.gestures, this.transition = this.experience.ui.transition, this.sounds = this.experience.sounds, this.waypoints = this.experience.waypoints, this.scrollIcon = this.experience.ui.scrollScrollIcon, this.contactScene = this.experience.world.contact.scene, this.time = this.experience.time, this.domElements.scrollContainer.style.top = "100%", setTimeout(() => this.domElements.scrollContainer.classList.add("scroll-container-transitions")), this.setCameraRange(), this.setAboutContainerDetails(), this.setLogoOverlayHeight(), this.gestures.on("scroll-down", () => this.attemptScroll(1)), this.gestures.on("scroll-up", () => this.attemptScroll(-1)), this.gestures.on("touch-down", () => {
            this.experience.time.current - this.gestures.touchStartTime < this.parameters.verticalSwipeMaximumSinceStart && this.attemptScroll(1, -this.gestures.touchDistanceY * this.parameters.multiplyTouchStrengthBy())
        }), this.gestures.on("touch-up", () => {
            this.experience.time.current - this.gestures.touchStartTime < this.parameters.verticalSwipeMaximumSinceStart && this.attemptScroll(-1, this.gestures.touchDistanceY * this.parameters.multiplyTouchStrengthBy())
        }), this.landingPage.on("hide", () => {
            this.scrollY != 0 && (this.scrollY = 0)
        }), this.sizes.on("portrait", () => this.onOrientationChange()), this.sizes.on("landscape", () => this.onOrientationChange()), this.previousTouchDistance = 0, window.addEventListener("touchmove", () => {
            if (!(Math.abs(this.gestures.mTouchStartY - event.changedTouches[0].clientY) < Math.abs(this.gestures.mTouchStartX - event.changedTouches[0].clientX) && this.experience.ui.work.cards.isCurrentSwipeElement)) {
                const t = this.gestures.mTouchStartY - event.changedTouches[0].clientY - this.previousTouchDistance;
                this.previousTouchDistance += t, this.attemptScroll(Math.sign(t), Math.abs(t))
            }
        }), window.addEventListener("touchend", () => this.previousTouchDistance = 0), this.stopScrollOnTouchStart()
    }
    attemptScroll(t, n = t * ((event.deltaY ? event.deltaY : 100 * t) * .9)) {
        this.scrollAllowed() && (t == -1 && this.scrollY <= 20 ? this.checkLandingPageOpening() : (this.scrollY != 0 || t == 1) && (this.scrollY < this.sizes.getAbsoluteHeight(this.domElements.scrollContainer) - window.innerHeight || t == -1) && (this.scrollY += t * n, t == -1 && (this.lastWheelUp = this.time.current), this.performScroll(), this.scrollIcon.visible && this.scrollIcon.kill()), this.trigger(t == -1 ? "scroll-up" : "scroll-down"), document.activeElement.blur())
    }
    preventFromScrollingBottom() {
        return this.scrollY >= this.sizes.getAbsoluteHeight(this.domElements.scrollContainer) - window.innerHeight ? this.sizes.getAbsoluteHeight(this.domElements.scrollContainer) - window.innerHeight : this.scrollY
    }
    performScroll(t = this.parameters.scrollDuration(), n = !1) {
        if (this.scrollAllowed() || n == "force") {
            this.contentScrollTo = this.preventFromScrollingBottom();
            let i = 0;
            this.scrollY > this.aboutContainer.offset || this.sizes.portrait ? this.sizes.portrait ? (i = this.contentScrollTo / this.sizes.getAbsoluteHeight(this.domElements.scrollContainer), this.sounds.labAmbienceScroll(this.scrollY / this.aboutContainer.height)) : (i = (this.contentScrollTo - this.aboutContainer.offset) / (this.sizes.getAbsoluteHeight(this.domElements.scrollContainer) - this.aboutContainer.height), this.sounds.labAmbienceScroll((this.contentScrollTo - this.aboutContainer.offset) / (this.sizes.getAbsoluteHeight(this.domElements.scrollContainer) * .7 - this.aboutContainer.height))) : this.sounds.labAmbienceScroll(0), this.contentScrollTo < 0 && (this.contentScrollTo = 0), i < 0 && (i = 0), i > 1 && (i = 1), P.to(this.domElements.scrollContainer, {
                y: -this.contentScrollTo,
                duration: t,
                ease: this.parameters.scrollEase()
            }), i >= 0 && (P.to(this.background.material.uniforms.uOffset, {
                value: this.background.height * 1.9 * i - .75,
                duration: t,
                ease: this.parameters.scrollEase()
            }), P.to(this.camera.instance.position, {
                y: (this.cameraRange.bottom - this.cameraRange.top) * i + this.cameraRange.top,
                duration: t,
                ease: this.parameters.scrollEase()
            }), P.to(this.domElements.logoWhiteBackground, {
                y: -this.contentScrollTo - window.innerHeight,
                duration: t,
                ease: this.parameters.scrollEase()
            }))
        }
    }
    stopScrollOnTouchStart() {
        this.gestures.on("touch-start", () => {
            !this.landingPage.isAnimating && !this.landingPage.visible && !this.experience.ui.menu.main.visible && !this.experience.ui.menu.main.isAnimating && !this.transition.isShowing && (P.killTweensOf(this.domElements.scrollContainer), P.killTweensOf(this.domElements.logoWhiteBackground), P.killTweensOf(this.camera.instance.position), P.killTweensOf(this.background.material.uniforms.uOffset), this.scrollY = this.actualScroll)
        })
    }
    onOrientationChange() {
        this.landingPage.visible || this.moveToTop()
    }
    moveToTop() {
        this.waypoints.moveToWaypoint(this.sizes.portrait ? "scroll-start-portrait" : "scroll-start", !1), this.scrollY = 0, this.performScroll(0), this.experience.ui.header.show(), this.experience.ui.about.animations.playHologramAnimation(), this.experience.ui.about.animations.resetCharacterToPosition()
    }
    setCameraRange() {
        this.cameraRange = {};
        const t = this.waypoints.waypoints.find(n => n.name === (this.sizes.portrait ? "scroll-start-portrait" : "scroll-start"));
        this.cameraRange.top = t.position.y, this.cameraRange.bottom = this.sizes.portrait ? -54 : -17 - (this.sizes.getAbsoluteHeight(this.domElements.scrollContainer) - this.sizes.getAbsoluteHeight(document.getElementById("about-section"))) / window.innerHeight * 5, this.contactScene.setYPosition(this.cameraRange.bottom + (this.sizes.portrait ? .5 : 0))
    }
    setAboutContainerDetails() {
        this.aboutContainer = {}, this.aboutContainer.domElement = document.getElementById("about-section"), this.aboutContainer.offset = this.aboutContainer.domElement.clientHeight - window.innerHeight, this.aboutContainer.height = this.aboutContainer.domElement.clientHeight
    }
    addEvent(t, n, i, s) {
        let r = !1;
        this.events.push({
            height: t,
            direction: n,
            task: i,
            check: () => {
                r || (n === "up" ? t >= this.actualScroll && this.actualScroll != 0 : t <= this.actualScroll) && (i(), s || (r = !0))
            }
        })
    }
    resetAllEvents() {
        this.events.forEach(t => t.played = !1)
    }
    scrollAllowed() {
        return !this.landingPage.isAnimating && !this.landingPage.visible && !this.experience.ui.menu.main.visible && !this.experience.ui.menu.main.isAnimating && !this.transition.isShowing
    }
    checkLandingPageOpening() {
        (!this.lastWheelUp || this.time.current - this.lastWheelUp > 200) && this.landingPage.show()
    }
    setLogoOverlayHeight() {
        const t = document.getElementById("logo-white-background");
        t.style.height = this.aboutContainer.height + "px", t.style.marginTop = window.innerHeight - 15 + "px"
    }
    resize() {
        this.events = [], this.setAboutContainerDetails(), this.setLogoOverlayHeight(), this.setCameraRange(), this.performScroll(0), setTimeout(() => {
            this.events.forEach(t => {
                t.check()
            })
        }, 10)
    }
    update() {
        const t = window.getComputedStyle(this.domElements.scrollContainer),
            n = new WebKitCSSMatrix(t.transform);
        this.actualScroll = -n.m42, this.events.forEach(i => {
            this.scrollY != this.actualScroll && i.check()
        })
    }
}
class sM {
    constructor() {
        he(this, "isShowing", !1);
        he(this, "duration", .6);
        he(this, "domElements", {
            container: document.getElementById("transition-container"),
            logo: document.getElementById("loadig-animation-container")
        });
        this.experience = new ye, this.sounds = this.experience.sounds
    }
    show() {
        this.domElements.container.classList.remove("hide"), this.isShowing = !0, this.domElements.container.classList.remove("hideTopTransition"), this.domElements.container.classList.remove("hideIntroTransition"), this.domElements.container.classList.add("showTransition"), P.delayedCall(.3, () => this.sounds.play("transition0"))
    }
    hide() {
        P.delayedCall(.15, () => {
            this.domElements.container.classList.remove("showTransition"), this.domElements.container.classList.add("hideTopTransition"), P.delayedCall(this.duration, () => this.isShowing = !1), P.delayedCall(.2, () => this.sounds.play("transition1"))
        })
    }
}
class rM {
    constructor() {
        he(this, "positionStyles", ["transform: translateX(-410%) scale(0.9);", "transform: translateX(-310%) scale(0.9); ", "transform: translateX(-210%) scale(0.9);", "transform: translateX(-110%) scale(0.9); ", "transform: translateX(0%);", "transform: translateX(110%) scale(0.9);", "transform: translateX(210%) scale(0.9)", "transform: translateX(310%) scale(0.9);", "transform: translateX(410%) scale(0.9);"]);
        he(this, "domElements", {
            section: document.getElementById("work-section"),
            backButton: document.getElementById("work-back-button"),
            nextButton: document.getElementById("work-next-button")
        });
        he(this, "currentItemIndex", 2);
        he(this, "itemsAreMoving", !0);
        this.experience = new ye, this.gestures = this.experience.gestures, this.render = this.experience.ui.work.render, this.sounds = this.experience.sounds, this.scroll = this.experience.ui.scroll, this.sizes = this.experience.sizes, this.addButtonEventListeners(), this.initSwipes(), this.updatePositions(!0), this.onArrowClick(), this.sizes.on("portrait", () => this.onOrientationChange()), this.sizes.on("landscape", () => this.onOrientationChange())
    }
    onOrientationChange() {
        this.currentItemIndex = 2, this.updatePositions()
    }
    addButtonEventListeners() {
        this.domElements.backButton.addEventListener("click", () => {
            this.sounds.play("buttonClick"), this.moveBack()
        }), this.domElements.nextButton.addEventListener("click", () => {
            this.sounds.play("buttonClick"), this.moveForward()
        })
    }
    initSwipes() {
        this.gestures.on("swipe-right", () => this.swipe("right")), this.gestures.on("swipe-left", () => this.swipe("left")), this.domElements.section.addEventListener("touchend", () => {
            setTimeout(() => this.isCurrentSwipeElement = !1)
        }, {
            passive: !0
        }), this.domElements.section.addEventListener("touchstart", () => {
            this.isCurrentSwipeElement = !0
        }, {
            passive: !0
        })
    }
    swipe(e) {
        this.isCurrentSwipeElement && (e == "right" ? this.moveForward() : this.moveBack())
    }
    moveBack() {
        this.currentItemIndex != 4 && !this.itemsAreMoving && document.getElementById("work-item-0").classList.contains("work-item-container-transition") && (this.currentItemIndex++, this.updatePositions())
    }
    moveForward() {
        this.currentItemIndex != 0 && !this.itemsAreMoving && document.getElementById("work-item-0").classList.contains("work-item-container-transition") && (this.currentItemIndex--, this.updatePositions())
    }
    onArrowClick() {
        window.addEventListener("keyup", () => {
            this.scroll.scrollAllowed() && (event.keyCode == 39 ? this.moveForward() : event.keyCode == 37 && this.moveBack())
        })
    }
    updatePositions(e = !1) {
        (!this.itemsAreMoving || e) && (this.render.items.forEach(t => {
            const n = this.render.items.indexOf(t);
            document.getElementById("work-item-" + t.id).style = this.positionStyles[n + this.currentItemIndex], n + this.currentItemIndex != 4 ? document.getElementById("work-item-" + t.id).classList.add("work-inactive-item-container") : document.getElementById("work-item-" + t.id).classList.remove("work-inactive-item-container")
        }), this.itemsAreMoving = !0, P.delayedCall(.5, () => this.itemsAreMoving = !1), this.updateNavigation())
    }
    updateNavigation() {
        this.currentItemIndex == 0 ? (this.domElements.nextButton.classList.add("work-disabled-navigation-button"), this.experience.ui.hoverIcon.setupDefault()) : this.currentItemIndex == 4 ? (this.domElements.backButton.classList.add("work-disabled-navigation-button"), this.experience.ui.hoverIcon.setupDefault()) : (this.domElements.nextButton.classList.remove("work-disabled-navigation-button"), this.domElements.backButton.classList.remove("work-disabled-navigation-button"))
    }
}
const oM = [{
        id: 0,
        name: "Join",
        description: "Group managment tool to optimize workflows",
        image: "images/projects/join.jpg",
        tags: ["javascript", "backend", "html", "css"],
        liveview: "https://join.david-hckh.com/",
        github: "https://github.com/davidhckh/join",
        alt: "Group management tool to optimize workflows portfolio project"
    }, {
        id: 1,
        name: "Pokedex",
        description: "A collection and description of all 898 Pokémon",
        image: "images/projects/pokedex.jpg",
        tags: ["javascript", "api", "html", "css"],
        liveview: "https://js-pokedex-virid.vercel.app/",
        github: "https://github.com/davidhckh/pokedex",
        alt: "pokedex design detailed design portfolio project"
    }, {
        id: 2,
        name: "Sharkie",
        description: "JavaScript based jump-and-run game",
        image: "images/projects/sharkie.jpg",
        tags: ["javascript", "html", "css"],
        liveview: "https://sharkie-game.vercel.app/",
        github: "https://github.com/davidhckh/sharkie-game",
        alt: "javascript based jump-and-run game portfolio project"
    }, {
        id: 3,
        name: "Portfolio 2022",
        description: "My portfolio website, you're probably looking at right now.",
        image: "images/projects/portfolio.jpg",
        tags: ["webgl", "javascript", "html", "css"],
        twitter: "https://twitter.com/DavidHckh",
        alt: "david heckhoff portfolio project 2022 threejs blender 3d design",
        bannerIcons: [{
            src: "images/cssda-icon.png",
            alt: "cssda icon site of the day"
        }],
        twitter: "https://twitter.com/DavidHckh"
    }, {
        id: 4,
        name: "Jelly Battle",
        description: "Play as Jelly and fight against three other Jellys in a multiplayer free-for-all game",
        image: "images/projects/jelly-battle.jpg",
        tags: ["webgl", "javascript", "socketio", "html", "css"],
        twitter: "https://twitter.com/DavidHckh",
        alt: "work in progress portfolio project jelly battle strategy game flash multiplayer"
    }],
    aM = {
        html: '<div class="work-item-tag" style="background: white; border: 1px solid #7C8594; color: #7C8594">HTML</div>',
        css: '<div class="work-item-tag" style="background: white; border: 1px solid #7C8594; color: #7C8594">CSS</div>',
        javascript: '<div class="work-item-tag" style="background: #FFB800;">JavaScript</div>',
        socketio: '<div class="work-item-tag" style="background: #21BAEB;">Socket.IO</div>',
        webgl: '<div class="work-item-tag" style="background: #5A69EC;">WebGL</div>',
        api: '<div class="work-item-tag" style="background: #CA49F8;">API</div>',
        backend: '<div class="work-item-tag" style="background: #8433CC;">Backend</div>'
    };
class lM {
    constructor() {
        he(this, "domElements", {
            renderContainer: document.getElementById("work-render-container")
        });
        this.experience = new ye, this.sounds = this.experience.sounds, this.items = oM, this.tags = aM, this.renderItems()
    }
    renderItems() {
        this.items.forEach(e => {
            this.domElements.renderContainer.insertAdjacentHTML("beforeend", `
            <div id="work-item-${e.id}" class="work-item-container column">
                <img class="work-item-image" src="${e.image}" alt="${e.alt}" height="300" width="334"/>
                <div class="work-item-content-container">
                    <h3>${e.name}</h3>
                    <div class="work-item-tag-container row">
                        ${this.renderTags(e.tags)}
                    </div>
                    <span>${e.description}</span>
                </div>
                <div class="work-item-button-container row">
                    ${this.renderButtons(e)}
                </div>
                ${e.bannerIcons?this.renderBanner(e):""}
            </div>
            `), this.addEventListenersToCard(e)
        })
    }
    renderBanner(e) {
        let t = "";
        return t = `
            <div class="work-banner-container row center">
                ${e.bannerIcons.map(n=>`<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`)}
                <span>Website Of<br>The Day</span>
            </div>
        `, t
    }
    renderButtons(e) {
        let t = "";
        return e.github ? t = `
                <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center gray-hover" ${e.liveview?"":'style="width: 100%"'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"  class="code-icon">
                        <use href="#code-path"/>
                    </svg>
                 ${e.liveview?"":"<span>Source Code</span>"}
                </div>
                 ${e.liveview?`<div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover">Live View</div>`:""}
            ` : e.twitter ? t = `
            <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px" style="margin-right: 5px">    
                    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/>
                </svg>
                Stay up to date
            </div>` : t = `
                <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset;">
                    Work in progress
                </div>
            `, t
    }
    renderTags(e) {
        let t = "";
        for (let n = 0; n < e.length; n++) t += this.tags[e[n]];
        return t
    }
    addEventListenersToCard(e) {
        const t = document.getElementById("work-item-" + e.id);
        t.addEventListener("click", () => {
            t.classList.contains("work-inactive-item-container") && document.getElementById("work-item-0").classList.contains("work-item-container-transition") && (this.experience.ui.work.cards.currentItemIndex = -e.id + 4, this.experience.ui.work.cards.updatePositions(), this.sounds.play("buttonClick"))
        }), e.github ? (document.getElementById("work-item-gray-button-" + e.id).addEventListener("click", () => {
            window.open(e.github, "_blank").focus()
        }), e.liveview && document.getElementById("work-item-orange-button-" + e.id).addEventListener("click", () => {
            window.open(e.liveview, "_blank").focus()
        })) : e.twitter && document.getElementById("work-item-orange-button-" + e.id).addEventListener("click", () => {
            window.open(e.twitter, "_blank").focus()
        })
    }
}
const cM = [{
    name: "WebGL",
    width: "60%"
}, {
    name: "ReactJS",
    width: "65%"
}, {
    name: "JavaScript",
    width: "85%"
}, {
    name: "HTML + CSS",
    width: "90%"
}, {
    name: "3D Modelling",
    width: "60%"
}];
class hM {
    constructor() {
        he(this, "domElements", {
            skillsRenderContainer: document.getElementById("about-skills-render-container")
        });
        this.skills = cM, this.renderSkills()
    }
    renderSkills() {
        this.skills.forEach(e => {
            this.domElements.skillsRenderContainer.insertAdjacentHTML("beforeend", `
                <div id="about-skill-container-${this.skills.indexOf(e)}" class="row about-skill-container">
                    <span id="about-skill-span-${this.skills.indexOf(e)}" class="about-skill-span">${e.name}</span>
                    <div class="about-skill-bar-container">
                        <div id="about-skill-bar-${this.skills.indexOf(e)}" class="about-skill-bar" style="width: ${e.width}"></div>
                    </div>
                </div>
            `)
        })
    }
}
class uM extends Ai {
    constructor() {
        super();
        he(this, "domElements", {
            icon: document.getElementById("hover-icon"),
            content: document.getElementById("hover-content"),
            colorSwitchContainer: document.getElementById("hover-icon-color-switch"),
            aboutSection: document.getElementById("about-section")
        });
        he(this, "hoverElements", [{
            class: ".menu-item",
            type: "circle",
            color: "#FF923E"
        }, {
            class: ".work-item-gray-button",
            type: "pointer",
            color: "#091434"
        }, {
            class: ".small-button",
            type: "pointer",
            color: "#091434"
        }, {
            class: "#landing-cta-button",
            type: "pointer",
            color: "#091434"
        }, {
            class: "#landing-cta-button",
            type: "pointer",
            color: "#091434"
        }, {
            class: "#logo-click-container",
            type: "pointer",
            color: "#FF923E"
        }, {
            class: ".overlay-button",
            type: "pointer",
            color: "#091434"
        }, {
            class: ".work-navigation-button",
            type: "pointer",
            color: "#091434"
        }, {
            class: ".work-item-container",
            type: "pointer",
            color: "#091434"
        }, {
            class: "a",
            type: "pointer",
            color: "#FF923E"
        }]);
        he(this, "currentBaseColor", "#FF923E");
        he(this, "cursorIsInsideDoc", !0);
        this.experience = new ye, this.sizes = this.experience.sizes, this.scroll = this.experience.ui.scroll, this.landingPage = this.experience.ui.landingPage, this.intro = this.experience.ui.intro, this.setupDefault(), this.setCursorLeavesDoc(), this.setHoverColorSwitchHeight(), this.applyEventListeners(), this.applyColorSwitchEventListeners(), this.sizes.touch ? this.domElements.icon.classList.add("hide") : this.domElements.icon.classList.remove("hide"), this.sizes.on("touch", () => this.domElements.icon.classList.add("hide")), this.sizes.on("no-touch", () => this.domElements.icon.classList.remove("hide")), document.addEventListener("visibilitychange", () => {
            this.updateBaseColor("#FF923E", !0), console.log()
        })
    }
    applyEventListeners() {
        this.hoverElements.forEach(t => {
            const n = document.querySelectorAll(t.class);
            for (let i = 0; i < n.length; i++) {
                const s = n[i];
                s.addEventListener("mouseenter", () => {
                    this.sizes.touch || (t.type == "pointer" ? this.setupPointer(t, s) : this.setupCircle(t, s)), this.isHoveringCursorElement = !0
                }), s.addEventListener("mouseleave", () => {
                    this.sizes.touch || (this.setupDefault(), this.isHoveringCursorElement = !1)
                })
            }
        }), window.addEventListener("mousemove", () => {
            this.domElements.icon.style.opacity = 1, this.updatePosition(), this.trigger("move"), !this.isHoveringCursorElement && !this.experience.raycaster.isHovering && this.setupDefault()
        })
    }
    updatePosition() {
        this.sizes.touch || P.to(this.domElements.icon, {
            x: event.pageX,
            y: event.pageY,
            duration: .4,
            ease: wi.easeOut
        })
    }
    setCursorLeavesDoc() {
        document.addEventListener("mouseleave", () => this.cursorIsInsideDoc = !1), document.addEventListener("mouseenter", () => this.cursorIsInsideDoc = !0)
    }
    applyColorSwitchEventListeners() {
        const t = () => {
                this.updateBaseColor("#34bfff")
            },
            n = () => {
                this.updateBaseColor("#FF923E")
            };
        this.domElements.colorSwitchContainer.addEventListener("mousemove", () => t()), this.domElements.colorSwitchContainer.addEventListener("mousenter", () => t()), this.domElements.aboutSection.addEventListener("mousemove", () => t()), this.domElements.aboutSection.addEventListener("mouseenter", () => t()), this.domElements.colorSwitchContainer.addEventListener("mouseleave", () => n()), this.domElements.aboutSection.addEventListener("mouseleave", () => n())
    }
    updateBaseColor(t, n = !1) {
        setTimeout(() => {
            (n || !document.hidden && (this.cursorIsInsideDoc || this.landingPage.visible) && this.currentBaseColor != t && !this.experience.raycaster.isHovering) && (this.currentBaseColor = t, this.domElements.icon.style.borderColor = this.currentBaseColor)
        })
    }
    setupDefault() {
        this.currentIcon != "default" && !this.isHoveringCursorElement && !this.experience.raycaster.isHovering && (this.currentIcon = "default", this.domElements.icon.style.borderWidth = "7px", this.domElements.icon.style.height = "0", this.domElements.icon.style.width = "0", this.domElements.icon.style.borderColor = this.currentBaseColor, this.domElements.content.classList.add("hide"), this.sizes.touch || (document.querySelector("body").style.cursor = ""))
    }
    setupPointer(t = {}, n) {
        if (this.currentIcon != "pointer") {
            const i = t.class == ".work-item-container" ? n.classList.contains("work-inactive-item-container") : !0,
                s = n ? !n.classList.contains("work-disabled-navigation-button") : !0,
                r = t.class == ".work-item-gray-button" ? n.classList.contains("gray-hover") : !0;
            i && s && r && setTimeout(() => {
                this.currentIcon = "pointer", this.domElements.icon.style.borderWidth = "5px", this.domElements.icon.style.height = "18px", this.domElements.icon.style.width = "18px", this.domElements.icon.style.borderColor = t.color ? t.color : "#091434", this.domElements.icon.style.background = "transparent", this.domElements.content.classList.add("hide"), this.sizes.touch || (document.querySelector("body").style.cursor = "pointer")
            })
        }
    }
    setupCircle(t, n) {
        this.currentIcon != "circle" && (t == "force" || !n.classList.contains("active-menu-item")) && (this.currentIcon = "circle", this.domElements.icon.style.borderWidth = "0", this.domElements.icon.style.height = "55px", this.domElements.icon.style.width = "55px", this.domElements.icon.style.background = t == "force" ? "#FF923E" : t.color, this.domElements.content.classList.remove("hide"), !this.intro.clickCTAVisbile && !this.sizes.touch && (document.querySelector("body").style.cursor = ""))
    }
    setHoverColorSwitchHeight() {
        this.domElements.colorSwitchContainer.style.height = this.scroll.aboutContainer.height + window.innerHeight * (this.sizes.portrait ? .03 : .15) + "px"
    }
    resize() {
        this.setHoverColorSwitchHeight()
    }
}
class dM {
    constructor() {
        he(this, "visible", !0);
        he(this, "domElements", {
            header: document.getElementById("header-container")
        });
        this.experience = new ye, this.landingPage = this.experience.ui.landingPage, this.menu = this.experience.ui.menu.main, this.gestures = this.experience.gestures, this.scroll = this.experience.ui.scroll, this.transition = this.experience.ui.transition, this.gestures.on("scroll-up", () => this.show()), this.gestures.on("scroll-down", () => this.hide()), this.gestures.on("touch-up", () => this.show()), this.gestures.on("touch-down", () => this.hide())
    }
    show() {
        this.visible || (this.visible = !0, this.domElements.header.style.top = "0")
    }
    hide() {
        this.scroll.scrollAllowed() && (this.visible = !1, this.domElements.header.style.top = "-80px")
    }
}
class fM extends Ai {
    constructor() {
        super();
        he(this, "visible", !1);
        he(this, "initials", {});
        he(this, "isAnimating", !1);
        he(this, "domElements", {
            menuButton: document.getElementById("menu-button"),
            menuContainer: document.getElementById("menu-container"),
            menuButtonBar0: document.getElementById("menu-button-bar-0"),
            menuButtonBar1: document.getElementById("menu-button-bar-1"),
            menuButtonBar2: document.getElementById("menu-button-bar-2"),
            landingPageContent: document.getElementById("landing-page-section"),
            aboutSection: document.getElementById("about-section"),
            scrollContainer: document.getElementById("scroll-container"),
            logoWhiteBackground: document.getElementById("logo-white-background"),
            workSection: document.getElementById("work-section")
        });
        this.experience = new ye, this.landingPage = this.experience.ui.landingPage, this.waypoints = this.experience.waypoints, this.scroll = this.experience.ui.scroll, this.labBackground = this.experience.world.background, this.camera = this.experience.camera, this.gestures = this.experience.gestures, this.transition = this.experience.ui.transition, this.sounds = this.experience.sounds, this.sizes = this.experience.sizes, this.contactAnimation = this.experience.world.contact.animation, this.character = this.experience.world.character, this.setWidth(), this.updatePositon(), this.menuButtonClick(), this.hideEvents(), window.requestAnimationFrame(() => this.domElements.menuContainer.classList.add("slide-out-left-transition")), this.sizes.on("portrait", () => this.onOrientationChange()), this.sizes.on("landscape", () => this.onOrientationChange())
    }
    onOrientationChange() {
        this.yTween && (this.yTween.kill(), this.yTween = null)
    }
    menuButtonClick() {
        this.domElements.menuButton.addEventListener("click", () => {
            this.isAnimating || this.sounds.play("buttonClick"), this.switchVisiblity()
        })
    }
    switchVisiblity(t = !0, n = !1, i = !0) {
        (!this.isAnimating && !this.landingPage.isAnimating && !this.transition.isShowing || n) && (this.visible = !this.visible, this.updatePositon(), this.sizes.portrait && P.to(this.domElements.logoWhiteBackground, {
            opacity: this.visible ? 0 : 1,
            duration: .7
        }), this.visible ? this.crossMenuButton() : this.resetMenuButton(), t && !this.sizes.portrait && (this.landingPage.visible ? this.landingPageTransition(i) : this.scrollContainerTransition(i)), this.isAnimating = !0, P.delayedCall(.9, () => this.isAnimating = !1), this.fadeScrollIcons(!this.visible))
    }
    landingPageTransition(t) {
        this.waypoints.moveToWaypoint(this.visible ? "landing-menu" : "landing-page", t || this.isAnimating, .9), this.domElements.landingPageContent.style.left = this.visible ? "-100%" : "0"
    }
    scrollContainerTransition(t) {
        this.visible ? (this.scroll.scrollY + window.innerHeight / 2 <= this.sizes.getAbsoluteHeight(this.domElements.aboutSection) + this.sizes.getAbsoluteHeight(this.domElements.workSection) / 2 ? this.focusLabScene() : this.focusContactScene(), this.domElements.scrollContainer.style.left = "-100%", this.setInitialPositions()) : (t || this.isAnimating ? this.returnToInitialPosition() : this.sizes.portrait || (this.waypoints.moveToWaypoint(this.sizes.portrait ? "scroll-start-portrait" : "scroll-start"), this.yTween = P.to(this.camera.instance.position, {
            y: this.initials.cameraY,
            duration: .9,
            ease: et.easeInOut
        })), this.domElements.scrollContainer.style.left = "0")
    }
    setInitialPositions() {
        this.initials.cameraY = this.camera.instance.position.y, this.initials.scrollY = this.scroll.contentScrollTo, this.initials.logoBackgroundY = -this.scroll.contentScrollTo - window.innerHeight, this.initials.backgroundY = this.labBackground.material.uniforms.uOffset.value
    }
    returnToInitialPosition() {
        this.waypoints.moveToWaypoint(this.sizes.portrait ? "scroll-start-portrait" : "scroll-start"), P.to(this.camera.instance.position, {
            y: this.initials.cameraY,
            duration: .9,
            ease: et.easeInOut
        }), P.to(this.domElements.scrollContainer, {
            y: -this.initials.scrollY,
            duration: .9,
            ease: et.easeInOut
        }), P.to(this.labBackground.material.uniforms.uOffset, {
            value: this.initials.backgroundY,
            duration: .9,
            ease: et.easeInOut
        }), P.to(this.domElements.logoWhiteBackground, {
            y: this.initials.logoBackgroundY ? this.initials.logoBackgroundY : -window.innerHeight,
            duration: .9,
            ease: et.easeInOut
        }), this.sounds.labAmbienceScroll("recent")
    }
    focusLabScene() {
        P.to(this.labBackground.material.uniforms.uOffset, {
            value: 0,
            duration: .9
        }), P.to(this.domElements.scrollContainer, {
            y: 0,
            duration: .9,
            ease: et.easeInOut
        }), P.to(this.domElements.logoWhiteBackground, {
            y: -window.innerHeight,
            duration: .9,
            ease: et.easeInOut
        }), this.waypoints.moveToWaypoint("lab-menu"), this.sounds.muteGroup("lab", !1, .4), this.character.body.model.position.y != -18.95 && this.experience.ui.about.animations.resetCharacterToPosition()
    }
    focusContactScene() {
        P.to(this.labBackground.material.uniforms.uOffset, {
            value: this.labBackground.height,
            duration: .9
        }), P.to(this.domElements.scrollContainer, {
            y: -this.domElements.scrollContainer.clientHeight + window.innerHeight,
            duration: .9,
            ease: et.easeInOut
        }), this.waypoints.waypoints.find(t => t.name == "contact-menu").position.y = this.experience.world.contact.scene.model.position.y + 5.8, this.waypoints.moveToWaypoint("contact-menu"), this.contactAnimation.playIdle(), P.delayedCall(1, () => this.contactAnimation.playTransition()), window.requestAnimationFrame(() => {
            this.sounds.labAmbienceScroll(this.sizes.getAbsoluteHeight(this.domElements.scrollContainer))
        })
    }
    hideEvents() {
        this.landingPage.on("hide", () => {
            this.visible && this.switchVisiblity(!1)
        }), this.landingPage.on("show", () => {
            this.visible && this.switchVisiblity(!1)
        }), this.gestures.on("scroll", () => {
            this.visible && this.switchVisiblity()
        })
    }
    fadeScrollIcons(t) {
        const n = document.querySelectorAll(".scroll-container");
        for (let i = 0; i < n.length; i++) {
            const s = n[i];
            (!(this.landingPage.visible && i == 1) || !this.landingPage.visible) && P.to(s, {
                opacity: t ? 1 : 0
            })
        }
    }
    crossMenuButton() {
        P.to(this.domElements.menuButtonBar0, {
            rotation: 45,
            y: 9,
            duration: .1
        }), P.to(this.domElements.menuButtonBar1, {
            opacity: 0,
            duration: .1
        }), P.to(this.domElements.menuButtonBar2, {
            rotation: -45,
            y: -9,
            duration: .1
        }), this.trigger("open")
    }
    resetMenuButton() {
        P.to(this.domElements.menuButtonBar0, {
            rotation: 0,
            y: 0,
            duration: .1
        }), P.to(this.domElements.menuButtonBar1, {
            opacity: 1,
            duration: .1
        }), P.to(this.domElements.menuButtonBar2, {
            rotation: 0,
            y: 0,
            duration: .1
        }), this.trigger("hide")
    }
    setWidth() {
        this.domElements.menuContainer.style.width = (window.innerWidth - this.domElements.aboutSection.clientWidth) / 2 + 350 + "px"
    }
    updatePositon() {
        this.domElements.menuContainer.style.right = this.visible ? "0" : `-${this.domElements.menuContainer.clientWidth}px`
    }
    resize() {
        this.setWidth(), this.updatePositon(), this.visible && this.switchVisiblity(!0, !0, !1)
    }
}
class qu {
    constructor(e) {
        he(this, "visible", !0);
        this.icon = document.querySelectorAll(".scroll-container")[e], this.border = document.querySelectorAll(".scroll-border-container")[e], this.wheel = document.querySelectorAll(".scroll-wheel")[e], this.touchIcon = document.querySelectorAll(".scroll-touch-icon")[e], this.experience = new ye, this.sizes = this.experience.sizes, this.sizes.on("touch", () => this.setupTouchIcon()), this.sizes.on("no-touch", () => this.setupScrollIcon()), this.sizes.touch ? this.setupTouchIcon() : this.setupScrollIcon()
    }
    setupTouchIcon() {
        this.border.classList.add("hide"), this.touchIcon.classList.remove("hide"), P.killTweensOf(this.wheel), P.fromTo(this.touchIcon, {
            y: 0
        }, {
            y: 6,
            duration: 1,
            ease: wi.easeOut,
            repeat: -1,
            yoyo: !0
        })
    }
    setupScrollIcon() {
        this.border.classList.remove("hide"), this.touchIcon.classList.add("hide"), P.killTweensOf(this.touchIcon), P.fromTo(this.wheel, {
            y: 0
        }, {
            y: 6,
            duration: 1,
            ease: wi.easeIn,
            repeat: -1,
            yoyo: !0
        })
    }
    fade(e) {
        this.visible && P.to(this.icon, {
            opacity: e ? 1 : 0,
            duration: .3
        })
    }
    kill() {
        this.visible && (this.fade(), this.visible = !1, P.delayedCall(.3, () => {
            P.killTweensOf(this.wheel), this.icon.classList.add("hide")
        }))
    }
}
let pM = class {
    constructor() {
        he(this, "domElements", {
            body: document.getElementById("sound-body-path"),
            volume0: document.getElementById("sound-volume-0-path"),
            volume1: document.getElementById("sound-volume-1-path"),
            button: document.getElementById("sound-button")
        });
        this.experience = new ye, this.sounds = this.experience.sounds, this.landingPage = this.experience.ui.landingPage, this.transition = this.experience.ui.transition, this.tweens = [], this.deactivate(!1), this.domElements.button.addEventListener("click", () => {
            this.transition.isShowing || (this.active ? this.deactivate() : this.activate(), this.sounds.play("buttonClick"))
        }), window.addEventListener("keydown", () => {
            event.key === "m" && !this.transition.isShowing && (this.active ? this.deactivate() : this.activate())
        })
    }
    killTweens() {
        P.killTweensOf(this.domElements.body), P.killTweensOf(this.domElements.volume0), P.killTweensOf(this.domElements.volume1)
    }
    deactivate(e = !0) {
        this.active = !1, this.sounds.mute(!0), this.killTweens(), P.to(this.domElements.body, {
            x: 2,
            duration: .2
        }), P.to(this.domElements.volume0, {
            opacity: 0,
            duration: 0
        }), P.to(this.domElements.volume1, {
            opacity: 0,
            duration: 0
        }), this.domElements.button.classList.add("gray-hover"), this.domElements.button.classList.remove("orange-hover"), this.sounds.muteGroup(this.landingPage.visible ? "lab" : "landing", !0, 0), this.sounds.muteGroup(this.landingPage.visible ? "landing" : "lab", !1, 0), e && this.updateLocalStorage()
    }
    activate(e = !0) {
        this.active = !0, this.sounds.mute(!1), this.killTweens(), P.to(this.domElements.body, {
            x: 0,
            duration: .2
        }), P.to(this.domElements.volume0, {
            opacity: 1,
            duration: 0
        }), P.to(this.domElements.volume1, {
            opacity: 1,
            duration: 0,
            delay: .1
        }), this.domElements.button.classList.remove("gray-hover"), this.domElements.button.classList.add("orange-hover"), this.landingPage.visible || this.sounds.labAmbienceScroll("recent"), this.experience.ui.scroll.performScroll(), e && this.updateLocalStorage(), this.sounds.playRoomAmbience()
    }
    updateLocalStorage() {
        localStorage.setItem("soundActive", this.active)
    }
};
class Ln {
    constructor(e) {
        this.experience = new ye, this.scroll = this.experience.ui.scroll, this.sizes = this.experience.sizes, e.setup && !this.sizes.touch && e.setup(), this.element = e.element, this.direction = e.direction ? e.direction : "down", this.f = e.f ? e.f : () => {}, this.offset = e.offset ? e.offset : 0, this.reset = e.reset ? e.reset : () => {}, this.repeats = e.repeats ? e.repeats : !1, this.initEvent()
    }
    initEvent() {
        let e = this.getY(this.element) + this.offset;
        this.direction == "up" && (e += window.innerHeight), this.scroll.addEvent(e, this.direction, this.f, this.repeats)
    }
    getY(e) {
        let t = 0;
        t += e.offsetTop;
        let n = e.offsetParent.id,
            i = e;
        for (; n != "scroll-container";) i = i.offsetParent, n = i.offsetParent.id, t += i.offsetTop;
        return t - e.scrollTop + e.clientTop - window.innerHeight
    }
}
class mM {
    constructor() {
        he(this, "hologramPlayed", !1);
        he(this, "parameters", {
            skillsAdditionalDelay: .2,
            aboutAdditionalDelay: .45
        });
        he(this, "domElements", {
            infoBackground: document.getElementById("about-info-background"),
            profilePictureMaskRect: document.getElementById("about-profile-picture-mask-rect"),
            profilePictureGradient: document.getElementById("about-profile-picture-gradient"),
            skillsSvg: document.getElementById("skills-svg"),
            headerGroup: document.getElementById("about-svg-header"),
            skillsGroup: document.getElementById("about-svg-skills"),
            aboutGroup: document.getElementById("about-svg-about"),
            skillsHeaderRect: document.getElementById("skills-header-rect"),
            aboutHeaderRect: document.getElementById("about-header-rect"),
            aboutSection: document.getElementById("about-section")
        });
        this.experience = new ye, this.skills = this.experience.ui.about.render.skills, this.scroll = this.experience.ui.scroll, this.sounds = this.experience.sounds, this.character = this.experience.world.character, this.addScrollEvents(), this.setupLines()
    }
    setupLines() {
        const e = document.querySelectorAll(".about-box-line");
        this.lines = [];
        for (let t = 0; t < e.length; t++) {
            const n = e[t],
                i = n.getTotalLength();
            this.lines.push({
                line: n,
                length: i
            }), n.style.strokeDasharray = i
        }
    }
    playHologramAnimation(e = 0) {
        this.hologramPlayed || (this.hologramPlayed = !0, this.isAnimating = !0, P.delayedCall(.9, () => this.isAnimating = !1), P.delayedCall(.3, () => this.sounds.play("hologram")), this.fadeInHologramUI(e), this.domElements.profilePictureMaskRect.classList.add("no-transition"), this.domElements.profilePictureMaskRect.style.transform = "translateY(0)", this.domElements.profilePictureGradient.classList.add("no-transition"), this.domElements.profilePictureGradient.style.transform = "translateY(0)", P.delayedCall(e, () => {
            this.animateHeaderBox(), P.delayedCall(this.parameters.skillsAdditionalDelay, () => this.animateSkillsBox()), P.delayedCall(this.parameters.aboutAdditionalDelay, () => this.animateAboutBox())
        }))
    }
    animateHeaderBox() {
        this.fillLine(0, .25), this.fillLine(1, .25), this.fillLine(2, .45), this.fillLine(3, .45);
        const e = document.querySelectorAll(".about-header-upper-text"),
            t = document.querySelectorAll(".about-header-lower-text");
        for (let n = 0; n < e.length; n++) P.fromTo(e[n], {
            opacity: 0
        }, {
            opacity: 1,
            duration: .4,
            delay: .4 + n / 10
        }), P.fromTo(t[n], {
            opacity: 0
        }, {
            opacity: 1,
            duration: .4,
            delay: .4 + n / 10
        });
        P.fromTo(document.getElementById("about-header-background"), {
            opacity: 0
        }, {
            opacity: 1,
            duration: .7,
            ease: et.easeIn,
            delay: .35
        }), P.fromTo(document.getElementById("about-profile-background"), {
            opacity: 0
        }, {
            opacity: 1,
            duration: .7,
            ease: et.easeIn
        }), this.domElements.profilePictureMaskRect.classList.remove("no-transition"), this.domElements.profilePictureMaskRect.style.transform = "translateY(-205px)", this.domElements.profilePictureGradient.classList.remove("no-transition"), this.domElements.profilePictureGradient.style.transform = "translateY(-205px)"
    }
    animateSkillsBox() {
        this.fillLine(4, 0), this.fillLine(5, 0);
        for (let e = 0; e < this.skills.length; e++) P.fromTo(document.getElementById("about-skill-container-" + e), {
            opacity: 0
        }, {
            opacity: 1,
            duration: .3,
            delay: e / 10
        }), P.fromTo(document.getElementById("about-skill-bar-" + e).style, {
            width: "0%"
        }, {
            width: this.skills[e].width,
            duration: .3,
            delay: e / 10
        });
        P.fromTo(document.getElementById("about-skills-background"), {
            opacity: 0
        }, {
            opacity: 1,
            duration: .7,
            ease: et.easeIn
        }), P.fromTo(this.domElements.skillsHeaderRect, {
            width: 0
        }, {
            width: 500,
            duration: .5,
            ease: et.easeIn
        })
    }
    animateAboutBox() {
        this.fillLine(6, 0), this.fillLine(7, 0), P.fromTo(document.getElementById("about-about-background"), {
            opacity: 0
        }, {
            opacity: 1,
            duration: .7,
            ease: et.easeIn
        }), P.fromTo(this.domElements.aboutHeaderRect, {
            width: 0
        }, {
            width: 500,
            duration: .5,
            ease: et.easeIn
        });
        const e = document.querySelectorAll(".about-icon");
        for (let i = 0; i < e.length; i++) P.fromTo(e[i], {
            opacity: 0
        }, {
            opacity: 1,
            duration: .5,
            delay: i / 10
        });
        const t = document.querySelectorAll(".about-text");
        for (let i = 0; i < t.length; i++) P.fromTo(t[i], {
            opacity: 0
        }, {
            opacity: 1,
            duration: .5,
            delay: i / 10
        });
        const n = document.querySelectorAll(".about-pixel-mask-rect");
        for (let i = 0; i < n.length; i++) P.fromTo(n[i], {
            height: 0
        }, {
            height: 64,
            delay: i / 10
        })
    }
    addScrollEvents() {
        new Ln({
            element: document.getElementById("work-section"),
            direction: "up",
            f: () => {
                this.playHologramAnimation(.1), this.resetCharacterToPosition()
            },
            repeats: !0
        })
    }
    resetCharacterToPosition() {
        !this.experience.ui.landingPage.visible && this.character.body.model.position.y != -18.95 && !this.experience.ui.landingPage.isAnimating && (this.character.animations.actions.current._clip.name != "water-idle" && this.character.animations.play("waterIdle", 0), this.character.body.model.position.y = -18.95, this.character.body.updateWireframe("down"), this.character.body.model.scale.set(1, 1, 1))
    }
    fadeInHologramUI(e) {
        P.fromTo(this.domElements.headerGroup, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .2,
            delay: e
        }), P.fromTo(this.domElements.skillsGroup, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .2,
            delay: e + this.parameters.skillsAdditionalDelay
        }), P.fromTo(this.domElements.aboutGroup, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .2,
            delay: e + this.parameters.aboutAdditionalDelay
        })
    }
    fillLine(e, t = 0) {
        const n = this.lines[e];
        P.fromTo(n.line, {
            strokeDashoffset: n.length
        }, {
            strokeDashoffset: 0,
            duration: .6,
            delay: t
        })
    }
    resize() {
        this.addScrollEvents()
    }
}
class gM {
    constructor() {
        he(this, "domElements", {
            scrollContainer: document.getElementById("scroll-container"),
            landingPage: document.getElementById("landing-page"),
            landingPageContent: document.getElementById("landing-page-section"),
            menuContainer: document.getElementById("menu-container"),
            logoWhiteBackground: document.getElementById("logo-white-background"),
            profilePictureMaskRect: document.getElementById("about-profile-picture-mask-rect")
        });
        he(this, "items", [{
            name: "home",
            elements: [document.querySelectorAll(".menu-item")[0], document.getElementById("logo-click-container")]
        }, {
            name: "about",
            elements: [document.querySelectorAll(".menu-item")[1]],
            onOpen: () => this.experience.ui.about.animations.playHologramAnimation(.1)
        }, {
            name: "work",
            elements: [document.querySelectorAll(".menu-item")[2]]
        }, {
            name: "contact",
            elements: [document.querySelectorAll(".menu-item")[3], document.getElementById("landing-cta-button")]
        }]);
        this.experience = new ye, this.transition = this.experience.ui.transition, this.scrollIcon = this.experience.ui.scrollIcon, this.landingPage = this.experience.ui.landingPage, this.scroll = this.experience.ui.scroll, this.renderer = this.experience.renderer, this.waypoints = this.experience.waypoints, this.character = this.experience.world.character, this.menu = this.experience.ui.menu.main, this.background = this.experience.world.background, this.room = this.experience.world.landingPage.room, this.sections = this.experience.ui.sections, this.sounds = this.experience.sounds, this.sizes = this.experience.sizes, this.contactAnimation = this.experience.world.contact.animation, this.menu.on("open", () => this.updateActiveItem()), this.addClickEventListeners()
    }
    addClickEventListeners() {
        this.items.forEach(e => {
            e.elements.forEach(t => {
                t.addEventListener("click", () => {
                    this.sounds.play("buttonClick"), this.openItem(e)
                })
            })
        })
    }
    updateActiveItem() {
        this.landingPage.visible ? (this.clearAllActiveItems(), document.querySelectorAll(".menu-item")[0].classList.add("active-menu-item")) : this.items.forEach(e => {
            if (e.name !== "home") {
                const t = this.sections.sections.find(n => n.name === e.name).y;
                if (this.scroll.scrollY + window.innerHeight / 2 >= t) {
                    this.clearAllActiveItems(), document.querySelectorAll(".menu-item")[this.items.indexOf(e)].classList.add("active-menu-item");
                    return
                }
            }
        })
    }
    clearAllActiveItems() {
        document.querySelectorAll(".menu-item").forEach(t => t.classList.remove("active-menu-item"))
    }
    openItem(e) {
        this.menu.visible || this.clearAllActiveItems(), !this.transition.isShowing && !e.elements[0].classList.contains("active-menu-item") && !(this.landingPage.visible && e.name == "home") && (this.transition.show(), P.delayedCall(.7, () => {
            this.transition.hide(), this.setupItem(e)
        }))
    }
    setupItem(e) {
        this.scrollIcon.kill(), e.name != "about" && e.name != "home" && (this.cards = this.experience.ui.work.cards, this.cards.currentItemIndex = 2, this.cards.updatePositions()), this.experience.ui.hoverIcon.setupDefault(), this.experience.ui.hoverIcon.updateBaseColor("#FF923E"), e.onOpen && e.onOpen(), e.name != "home" ? this.setupScrollContainerItem(e) : this.setupLandingPage()
    }
    setupLandingPage() {
        this.landingPage.visible = !0, this.waypoints.moveToWaypoint(this.sizes.portrait ? "landing-page-portrait" : "landing-page", !1), this.contactAnimation.resetCharacter(), this.sounds.muteGroup("landing", !1), this.sounds.muteGroup("lab", !0), this.room.baseModel.scale.set(1, 1, 1), this.room.shadow.material.uniforms.uOpacity.value = 1, this.character.body.model.position.y = -5.7, this.character.animations.play("idle", 0), this.character.body.updateWireframe("up"), this.character.face.material.map = this.character.face.textures.default, this.character.intervals.scrollIntervalCall && this.character.intervals.scrollIntervalCall.restart(!0), this.character.intervals.killLeftDesktopIntervals(), this.experience.world.landingPage.mouse.moveToIdleStartPositon(), this.moveWithoutTransition(this.domElements.landingPage, "top", "0"), this.moveWithoutTransition(this.domElements.scrollContainer, "top", "100%"), P.to(this.domElements.scrollContainer, {
            y: 0,
            duration: 0
        }), this.renderer.instance.setClearColor("#F5EFE6"), this.background.material.uniforms.uOffset.value = -this.background.height, P.to(this.domElements.logoWhiteBackground, {
            y: 0,
            duration: 0
        }), this.instantHideMenu(), this.scroll.scrollY = 0
    }
    setupScrollContainerItem(e) {
        const t = this.sections.sections.find(n => n.name === e.name);
        this.landingPage.visible = !1, this.waypoints.moveToWaypoint(this.sizes.portrait ? "scroll-start-portrait" : "scroll-start", !1), this.contactAnimation.resetCharacter(), e.name != "about" ? this.experience.ui.scrollScrollIcon.kill() : this.experience.ui.scrollScrollIcon.fade(!0), this.sounds.muteGroup("landing", !0), e.name == "contact" ? (this.sizes.portrait || (this.contactAnimation.playIdle(), P.delayedCall(1, () => this.contactAnimation.playTransition())), this.experience.ui.contact.animationEvents.resetPositions(), this.experience.ui.work.scrollEvents.resetPositions()) : e.name == "work" ? (this.contactAnimation.playIdle(), this.experience.ui.work.scrollEvents.resetPositions()) : this.experience.ui.about.animations.resetCharacterToPosition(), this.scroll.resetAllEvents(), this.moveWithoutTransition(this.domElements.landingPage, "top", "-100%"), this.moveWithoutTransition(this.domElements.scrollContainer, "top", "0"), this.renderer.instance.setClearColor("#EFE7DC"), this.instantHideMenu(), this.scroll.scrollY = t.y, this.scroll.performScroll(0, "force")
    }
    instantHideMenu() {
        this.menu.visible = !1, this.menu.resetMenuButton(), this.moveWithoutTransition(this.domElements.scrollContainer, "left", "0"), this.moveWithoutTransition(this.domElements.landingPageContent, "left", "0"), this.moveWithoutTransition(this.domElements.menuContainer, "right", `-${this.domElements.menuContainer.clientWidth}px`), P.to(this.domElements.logoWhiteBackground, {
            opacity: 1,
            duration: 0
        })
    }
    moveWithoutTransition(e, t, n) {
        e.classList.add("no-transition"), e.style[t] = n, e.offsetHeight, setTimeout(() => {
            e.classList.remove("no-transition")
        })
    }
}
class _M {
    constructor() {
        he(this, "domElements", {
            aboutContainer: document.getElementById("about-section"),
            workContainer: document.getElementById("work-section")
        });
        he(this, "sections", [{
            name: "about",
            y: 0,
            container: document.getElementById("about-section"),
            offset: () => 0
        }, {
            name: "work",
            y: 0,
            container: document.getElementById("work-section"),
            offset: () => 20
        }, {
            name: "contact",
            y: 0,
            container: document.getElementById("contact-section"),
            offset: () => this.sizes.portrait ? -100 : 0
        }]);
        this.experience = new ye, this.scroll = this.experience.ui.scroll, this.gestures = this.experience.gestures, this.sizes = this.experience.sizes, this.setSectionsY()
    }
    setSectionsY() {
        this.sections.forEach(e => {
            e.y = 0;
            for (let t = 0; t < this.sections.length; t++) t < this.sections.indexOf(e) && (e.y += this.sizes.getAbsoluteHeight(this.sections[t].container));
            e.y += this.sizes.getMarginTop(e.container), e.y += e.offset()
        })
    }
    resize() {
        this.setSectionsY()
    }
}
class yM {
    constructor() {
        he(this, "domElements", {
            submitButton: document.getElementById("contact-submit-button"),
            formContainer: document.getElementById("contact-form-container"),
            loadingContainer: document.getElementById("contact-loading-container"),
            resultContainer: document.getElementById("contact-result-container"),
            resultMessage: document.getElementById("contact-result-message-container"),
            resultButton: document.getElementById("contact-result-button"),
            errorLines: document.querySelectorAll(".contact-error-line"),
            successLine: document.getElementById("contact-success-line")
        });
        he(this, "fields", [{
            input: document.getElementById("contact-name-input-field"),
            container: document.getElementById("contact-name-input")
        }, {
            input: document.getElementById("contact-email-input-field"),
            container: document.getElementById("contact-email-input")
        }, {
            input: document.getElementById("contact-message-input-field"),
            container: document.getElementById("contact-message-input")
        }]);
        this.experience = new ye, this.sections = this.experience.ui.sections, this.scroll = this.experience.ui.scroll, this.sounds = this.experience.sounds, this.addSubmitButtonEventListener(), this.addHideErrorEventListeners(), this.addResultButtonEventListener(), this.initTabEvents()
    }
    initTabEvents() {
        window.addEventListener("keydown", () => {
            event.keyCode == 9 && (event.preventDefault(), this.fields.forEach(e => {
                e.input === document.activeElement && this.focusNext(this.fields.indexOf(e))
            }))
        })
    }
    focusNext(e) {
        if (this.scroll.scrollY + window.innerHeight / 3 >= this.sections.sections[2].y) {
            const t = this.fields[e + 1 == this.fields.length ? 0 : e + 1].input;
            setTimeout(() => t.focus())
        }
    }
    addSubmitButtonEventListener() {
        this.domElements.submitButton.addEventListener("click", () => {
            this.sounds.play("buttonClick"), this.hideAllErrors(), this.checkNameInput()
        })
    }
    addHideErrorEventListeners() {
        this.fields.forEach(e => {
            e.container.addEventListener("focusin", () => this.hideError(e)), e.input.addEventListener("input", () => this.hideError(e))
        })
    }
    hideAllErrors() {
        this.fields.forEach(e => this.hideError(e))
    }
    hideError(e) {
        document.querySelectorAll(".error-label")[this.fields.indexOf(e)].classList.add("hide"), e.container.classList.remove("error-container")
    }
    showError(e) {
        document.querySelectorAll(".error-label")[this.fields.indexOf(e)].classList.remove("hide"), e.container.classList.add("error-container")
    }
    checkNameInput() {
        const e = this.fields[0];
        e.input.value.length >= 4 ? this.checkEmailInput() : this.showError(e)
    }
    checkEmailInput() {
        const e = this.fields[1];
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.input.value) ? this.checkMessageInput() : this.showError(e)
    }
    checkMessageInput() {
        const e = this.fields[2];
        e.input.value.length >= 10 ? this.sendMail() : this.showError(e)
    }
    async sendMail() {
        this.showContainer("loading");
        const e = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.fields[0].input.value,
                email: this.fields[1].input.value,
                message: this.fields[2].input.value
            })
        });
        this.showResult(e)
    }
    hideAllContainers() {
        this.domElements.formContainer.classList.add("hide"), this.domElements.resultContainer.classList.add("hide"), this.domElements.loadingContainer.classList.add("hide")
    }
    showContainer(e) {
        this.hideAllContainers(), P.fromTo(this.domElements[e + "Container"], {
            opacity: 0
        }, {
            opacity: 1,
            duration: .2
        }), this.domElements[e + "Container"].classList.remove("hide")
    }
    showResult(e) {
        const t = Math.floor(e.status / 100);
        this.showContainer("result"), this.domElements.resultMessage.innerHTML = t == 2 ? "<h4>Your message has been sent.</h4><span>I'll get back to you as soon as possible.</span>" : "<h4>Oops. An error occurred.</h4><span>Please try again.</span>", this.domElements.resultButton.innerHTML = t == 2 ? "Cool!" : "Try again", t == 2 ? this.showSuccessIcon() : this.showErrorIcon()
    }
    addResultButtonEventListener() {
        this.domElements.resultButton.addEventListener("click", () => {
            this.sounds.play("buttonClick"), this.showContainer("form"), this.domElements.errorLines[0].classList.contains("hide") && this.clearInputs()
        })
    }
    showSuccessIcon() {
        this.domElements.successLine.classList.remove("hide"), this.domElements.errorLines.forEach(e => e.classList.add("hide")), this.fillLine(this.domElements.successLine)
    }
    showErrorIcon() {
        this.domElements.successLine.classList.add("hide"), this.domElements.errorLines.forEach(t => t.classList.remove("hide"));
        let e = 0;
        this.domElements.errorLines.forEach(t => {
            this.fillLine(t, e, .3), e += .3
        })
    }
    clearInputs() {
        this.fields.forEach(e => e.input.value = "")
    }
    fillLine(e, t = 0, n = .5) {
        if (e.getClientRects().length != 0) {
            const i = e.getTotalLength();
            e.style.strokeDasharray = i, P.fromTo(e.style, {
                strokeDashoffset: i
            }, {
                strokeDashoffset: 0,
                duration: n,
                delay: t
            })
        }
    }
}
class xM {
    constructor() {
        he(this, "domElements", {
            smallHeader: document.querySelectorAll(".section-subheader-container")[1],
            header: document.querySelectorAll(".section-header-container")[2],
            form: document.getElementById("contact-container"),
            contactSection: document.getElementById("contact-section")
        });
        this.experience = new ye, this.animation = this.experience.world.contact.animation, this.sizes = this.experience.sizes, this.addScrollEvents()
    }
    addScrollEvents() {
        this.scrollEvents = [new Ln({
            element: this.domElements.contactSection,
            direction: "down",
            f: () => this.animation.playIdle(),
            repeats: !0
        }), new Ln({
            element: this.domElements.contactSection,
            direction: "down",
            f: () => P.delayedCall(.5, () => this.animation.playTransition()),
            offset: this.sizes.portrait ? this.sizes.getAbsoluteHeight(this.domElements.header) + this.sizes.getAbsoluteHeight(this.domElements.smallHeader) + this.sizes.getAbsoluteHeight(this.domElements.form) + window.innerHeight * .3 : this.domElements.contactSection.clientHeight * .5
        })], this.played || (this.scrollEvents.push(new Ln({
            element: this.domElements.smallHeader,
            direction: "down",
            f: () => P.to(this.domElements.smallHeader, {
                y: 0,
                opacity: 1,
                duration: .4
            }),
            setup: () => P.to(this.domElements.smallHeader, {
                y: 100,
                opacity: 0,
                duration: 0
            }),
            reset: () => P.to(this.domElements.smallHeader, {
                y: 0,
                opacity: 1,
                duration: 0
            })
        })), this.scrollEvents.push(new Ln({
            element: this.domElements.header,
            direction: "down",
            f: () => P.to(this.domElements.header, {
                y: 0,
                opacity: 1,
                duration: .6
            }),
            setup: () => P.to(this.domElements.header, {
                y: 100,
                opacity: 0,
                duration: 0
            }),
            reset: () => P.to(this.domElements.header, {
                y: 0,
                opacity: 1,
                duration: 0
            })
        })), this.scrollEvents.push(new Ln({
            element: this.domElements.form,
            direction: "down",
            f: () => P.to(this.domElements.form, {
                y: 0,
                opacity: 1,
                duration: .8,
                onComplete: () => this.played = !0
            }),
            setup: () => P.to(this.domElements.form, {
                y: 100,
                opacity: 0,
                duration: 0
            }),
            reset: () => P.to(this.domElements.form, {
                y: 0,
                opacity: 1,
                duration: 0,
                onComplete: () => this.played = !0
            })
        })))
    }
    resetPositions() {
        this.scrollEvents.forEach(e => {
            e.reset && e.reset()
        })
    }
    resize() {
        setTimeout(() => this.addScrollEvents())
    }
}
class vM {
    constructor() {
        he(this, "parameters", {
            timeTillFinish: 1.2
        });
        he(this, "domElements", {
            container: document.getElementById("intro-container"),
            overlay: document.getElementById("overlay-container"),
            landingPage: document.getElementById("landing-page"),
            logo: document.getElementById("intro-svg"),
            scrollIcon: document.querySelector(".scroll-icon")
        });
        this.experience = new ye, this.resources = this.experience.resources, this.resources.on("ready", () => {
            this.resourcesReady = !0, this.room = this.experience.world.landingPage.room, this.landingPage = this.experience.ui.landingPage, this.gestures = this.experience.gestures, this.character = this.experience.world.character, this.sounds = this.experience.sounds, this.tones = this.experience.world.landingPage.tones, this.hoverIcon = this.experience.ui.hoverIcon, this.soundButton = this.experience.ui.soundButton, P.delayedCall(1.2, () => {
                this.close(), this.clicked && localStorage.getItem("soundActive") != "false" && this.soundButton.activate(!1)
            })
        }), localStorage.getItem("soundActive") != "false" ? this.setupClickCTA() : this.killAnimation(), this.onWindowClick()
    }
    onWindowClick() {
        window.addEventListener("click", () => {
            this.clicked || (this.clicked = !0, this.closeClickCTA(), this.resourcesReady && this.clicked && localStorage.getItem("soundActive") != "false" && this.soundButton.activate(!1), event.preventDefault(), this.sounds && this.sounds.playRoomAmbience())
        })
    }
    setupClickCTA() {
        this.experience.sizes.touch || document.querySelector("body").classList.add("pointer"), document.getElementById("hover-icon").classList.add("clickCTA"), this.clickCTAVisible = !0, this.startAnimation()
    }
    startAnimation() {
        this.animationElements = document.querySelectorAll(".hover-spread");
        for (let e = 0; e < this.animationElements.length; e++) P.fromTo(this.animationElements[e], {
            scale: 1
        }, {
            scale: 5,
            repeat: -1,
            duration: 1.5,
            delay: e * 1.5 / 2,
            ease: Sb.easeNone
        }), P.fromTo(this.animationElements[e], {
            opacity: .175
        }, {
            opacity: 0,
            repeat: -1,
            duration: 1.5,
            delay: e * 1.5 / 2,
            ease: Mb.easeIn
        })
    }
    killAnimation() {
        this.animationElements = document.querySelectorAll(".hover-spread"), this.animationElements.forEach(e => {
            P.killTweensOf(e), P.to(e, {
                opacity: 0
            }), P.to(e, {
                scale: 0
            })
        })
    }
    closeClickCTA() {
        setTimeout(() => this.clickCTAVisible = !1), this.experience.sizes.touch || document.querySelector("body").classList.remove("pointer"), document.getElementById("hover-icon").classList.remove("clickCTA"), this.killAnimation()
    }
    close() {
        this.closed || (this.closed = !0, this.experience.sizes.touch || (this.domElements.container.style.cursor = "unset"), P.to(this.hoverIcon.domElements.icon, {
            scale: 1,
            duration: .3,
            delay: .5
        }), this.hoverIcon.setupDefault(), this.playIntro())
    }
    playIntro() {
        P.delayedCall(.1, () => this.domElements.container.style.backgroundColor = "transparent"), P.to(this.domElements.logo, {
            scale: 0,
            duration: .6,
            ease: yn.easeIn.config(2.5)
        }), this.landingPage.playOpeningAnimation(.62), this.room.bounceIn(.45, !0), this.character.animations.playIntroAnimation(), P.delayedCall(this.parameters.timeTillFinish, () => this.finish()), this.clicked && this.sounds.playRoomAmbience()
    }
    finish() {
        P.fromTo(this.domElements.overlay, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1
        }), this.domElements.container.classList.add("hide"), this.gestures.init()
    }
}
class bM {
    constructor() {
        he(this, "domElements", {
            aboutSection: document.getElementById("about-section"),
            smallHeader: document.querySelector(".section-subheader-container"),
            header0: document.querySelector(".section-header-container"),
            header1: document.querySelectorAll(".section-header-container")[1],
            cards: document.querySelectorAll(".work-item-container"),
            renderContainer: document.getElementById("work-render-container"),
            navigation: document.getElementById("work-navigation-container")
        });
        this.experience = new ye, this.sizes = this.experience.sizes, this.addScrollEvents()
    }
    resetPositions() {
        this.scrollEvents.forEach(e => {
            e.reset && e.reset()
        })
    }
    addScrollEvents() {
        this.played || (this.scrollEvents = [new Ln({
            element: this.domElements.smallHeader,
            direction: "down",
            f: () => {
                P.to(this.domElements.smallHeader, {
                    y: 0,
                    opacity: 1,
                    duration: .3
                })
            },
            setup: () => P.to(this.domElements.smallHeader, {
                y: 100,
                opacity: 0,
                duration: 0
            }),
            reset: () => P.to(this.domElements.smallHeader, {
                y: 0,
                opacity: 1,
                duration: 0
            })
        }), new Ln({
            element: this.domElements.header0,
            direction: "down",
            f: () => P.to(this.domElements.header0, {
                y: 0,
                opacity: 1,
                duration: .4
            }),
            setup: () => P.to(this.domElements.header0, {
                y: 100,
                opacity: 0,
                duration: 0
            }),
            reset: () => P.to(this.domElements.header0, {
                y: 0,
                opacity: 1,
                duration: 0
            })
        }), new Ln({
            element: this.domElements.header1,
            direction: "down",
            f: () => P.to(this.domElements.header1, {
                y: 0,
                opacity: 1,
                duration: .5
            }),
            setup: () => P.to(this.domElements.header1, {
                y: 100,
                opacity: 0,
                duration: 0
            }),
            reset: () => P.to(this.domElements.header1, {
                y: 0,
                opacity: 1,
                duration: 0
            })
        }), new Ln({
            element: this.domElements.cards[2],
            direction: "down",
            f: () => {
                P.to(this.domElements.cards[0], {
                    y: 0,
                    opacity: 1,
                    duration: .85
                }), P.to(this.domElements.cards[1], {
                    y: 0,
                    opacity: 1,
                    duration: .75
                }), P.to(this.domElements.cards[2], {
                    y: 0,
                    opacity: 1,
                    duration: .65
                }), P.to(this.domElements.cards[3], {
                    y: 0,
                    opacity: 1,
                    duration: .75
                }), P.to(this.domElements.cards[4], {
                    y: 0,
                    opacity: 1,
                    duration: .85,
                    onComplete: () => {
                        P.delayedCall(.2, () => {
                            this.addTransitionClass(!0), this.played = !0
                        })
                    }
                })
            },
            setup: () => {
                this.addTransitionClass(!1), P.to(this.domElements.cards[0], {
                    y: 100,
                    opacity: 0,
                    duration: 0
                }), P.to(this.domElements.cards[1], {
                    y: 100,
                    opacity: 0,
                    duration: 0
                }), P.to(this.domElements.cards[2], {
                    y: 100,
                    opacity: 0,
                    duration: 0
                }), P.to(this.domElements.cards[3], {
                    y: 100,
                    opacity: 0,
                    duration: 0
                }), P.to(this.domElements.cards[4], {
                    y: 100,
                    opacity: 0,
                    duration: 0
                })
            },
            reset: () => {
                P.to(this.domElements.cards[0], {
                    y: 0,
                    opacity: 1,
                    duration: 0
                }), P.to(this.domElements.cards[1], {
                    y: 0,
                    opacity: 1,
                    duration: 0
                }), P.to(this.domElements.cards[2], {
                    y: 0,
                    opacity: 1,
                    duration: 0
                }), P.to(this.domElements.cards[3], {
                    y: 0,
                    opacity: 1,
                    duration: 0
                }), P.to(this.domElements.cards[4], {
                    y: 0,
                    opacity: 1,
                    duration: 0,
                    onComplete: () => {
                        this.addTransitionClass(!0), this.played = !0
                    }
                })
            }
        })])
    }
    addTransitionClass(e) {
        this.domElements.cards.forEach(t => {
            e ? t.classList.add("work-item-container-transition") : t.classList.remove("work-item-container-transition")
        })
    }
    resize() {
        setTimeout(() => this.addScrollEvents())
    }
}
class wM {
    constructor() {
        he(this, "downLines", document.querySelectorAll(".about-down-animation-line"));
        he(this, "upLines", document.querySelectorAll(".about-up-animation-line"));
        this.experience = new ye, this.scroll = this.experience.ui.scroll, this.aboutAnimations = this.experience.ui.about.animations, this.scroll.on("scroll-down", () => this.showLines(this.downLines)), this.scroll.on("scroll-up", () => this.showLines(this.upLines))
    }
    showLines(e) {
        !this.aboutAnimations.isAnimating && this.aboutAnimations.hologramPlayed && e.forEach(t => {
            P.to(t, {
                opacity: .8,
                duration: .3,
                onComplete: () => {
                    P.to(t, {
                        opacity: 0,
                        duration: .5
                    })
                }
            })
        })
    }
}
class MM {
    constructor() {
        this.experience = new ye, this.resources = this.experience.resources, this.world = this.experience.world, this.sizes = this.experience.sizes, this.resources.on("ready", () => {
            this.transition = new sM, this.scrollIcon = new qu(0), this.scrollScrollIcon = new qu(1), this.landingPage = new nM, this.scroll = new iM, this.sections = new _M, this.soundButton = new pM, this.menu = {}, this.menu.main = new fM, this.menu.items = new gM, this.about = {}, this.about.render = new hM, this.about.animations = new mM, this.about.scrollLines = new wM, this.work = {}, this.work.render = new lM, this.work.cards = new rM, this.work.scrollEvents = new bM, this.contact = {}, this.contact.form = new yM, this.contact.animationEvents = new xM, this.header = new dM, this.hoverIcon = new uM
        }), this.intro = new vM
    }
    resize() {
        this.scroll && this.scroll.resize(), this.scrollbar && this.scrollbar.resize(), this.menu && this.menu.main && this.menu.main.resize(), this.sections && this.sections.resize(), this.about && this.about.animations && this.about.animations.resize(), this.contact && this.contact.animationEvents && this.contact.animationEvents.resize(), this.hoverIcon && this.hoverIcon.resize(), this.work && this.work.scrollEvents && this.work.scrollEvents.resize()
    }
    update() {
        this.scroll && this.scroll.update()
    }
}
class SM extends Ai {
    constructor() {
        super(), this.experience = new ye
    }
    init() {
        this.applyEventListeners(), this.defineCurrentHoverElement()
    }
    applyEventListeners() {
        this.mousewheelOrKey = this.mousewheelOrKey.bind(this), this.touchStart = this.touchStart.bind(this), this.touchEnd = this.touchEnd.bind(this), document.addEventListener("touchstart", this.touchStart), document.addEventListener("touchend", this.touchEnd), document.addEventListener("mousewheel", this.mousewheelOrKey), document.addEventListener("wheel", this.mousewheelOrKey), window.addEventListener("keydown", this.mousewheelOrKey)
    }
    defineCurrentHoverElement() {
        window.addEventListener("mouseover", () => {
            event.path && (this.currentHoveringElement = event.path[0])
        })
    }
    mousewheelOrKey() {
        event.deltaY > 0 || event.keyCode == 40 ? this.trigger("scroll-down") : (event.deltaY < 0 || event.keyCode == 38) && this.trigger("scroll-up"), this.trigger("scroll")
    }
    touchStart() {
        this.mTouchStartY = event.changedTouches[0].clientY, this.mTouchStartX = event.changedTouches[0].clientX, this.trigger("touch-start"), this.touchStartTime = this.experience.time.current
    }
    touchEnd() {
        this.mTouchEndY = event.changedTouches[0].clientY, this.mTouchEndX = event.changedTouches[0].clientX, this.touchDistanceY = this.mTouchEndY - this.mTouchStartY, this.touchDistanceX = this.mTouchEndX - this.mTouchStartX;
        const e = 10,
            t = 80;
        this.touchDistanceX < -t || this.touchDistanceX > t && this.experience.ui.work.cards.isCurrentSwipeElement ? this.mTouchEndX < this.mTouchStartX ? this.trigger("swipe-right") : this.mTouchEndX > this.mTouchStartX && this.trigger("swipe-left") : (this.touchDistanceY < -e || this.touchDistanceY > e) && (this.mTouchEndY < this.mTouchStartY ? this.trigger("touch-down") : this.mTouchEndY > this.mTouchStartY && this.trigger("touch-up"))
    }
}
class TM {
    constructor() {
        he(this, "waypoints", [{
            name: "landing-page",
            position: {
                x: 5.8,
                y: 0,
                z: 8.3
            },
            lookAt: {
                x: -2.7,
                y: -3.7,
                z: 0
            }
        }, {
            name: "landing-page-portrait",
            position: {
                x: 10.5,
                y: 2.5,
                z: 14
            },
            lookAt: {
                x: .4,
                y: -.1,
                z: 0
            }
        }, {
            name: "landing-menu",
            position: {
                x: -7,
                y: 0,
                z: 7.5
            },
            lookAt: {
                x: 1,
                y: -3.7,
                z: 0
            }
        }, {
            name: "scroll-start",
            position: {
                x: 6,
                y: -14.75,
                z: 8.5
            },
            lookAt: {
                x: -2.7,
                y: -17.45,
                z: 0
            }
        }, {
            name: "scroll-start-portrait",
            position: {
                x: 10.5,
                y: -12.5,
                z: 14
            },
            lookAt: {
                x: .4,
                y: -19,
                z: 0
            }
        }, {
            name: "lab-menu",
            position: {
                x: -6,
                y: -14,
                z: 9.3
            },
            lookAt: {
                x: .5,
                y: -17.7,
                z: 0
            }
        }, {
            name: "contact-menu",
            position: {
                x: 3.5,
                y: -25.9,
                z: 8.8
            },
            lookAt: {
                x: 2,
                y: -29.6,
                z: 0
            }
        }]);
        this.experience = new ye, this.camera = this.experience.camera.instance, this.time = this.experience.time, this.sizes = this.experience.sizes, this.tweens = [], this.setupWaypoints(), this.sizes.on("portrait", () => this.onOrientationChange()), this.sizes.on("landscape", () => this.onOrientationChange())
    }
    onOrientationChange() {
        this.tweens.forEach(e => {
            e.kill()
        })
    }
    setupWaypoints() {
        this.waypoints.forEach(e => {
            this.camera.position.set(e.position.x, e.position.y, e.position.z), this.camera.lookAt(e.lookAt.x, e.lookAt.y, e.lookAt.z), e.rotation = {}, e.rotation.x = this.camera.rotation.x, e.rotation.y = this.camera.rotation.y, e.rotation.z = this.camera.rotation.z
        })
    }
    moveToWaypoint(e, t = !0, n = .8) {
        const i = this.waypoints.find(s => s.name === e);
        t ? (this.tweens.push(P.to(this.camera.position, {
            x: i.position.x,
            y: i.position.y,
            z: i.position.z,
            duration: n,
            ease: et.easeInOut
        })), this.tweens.push(P.to(this.camera.rotation, {
            x: i.rotation.x,
            y: i.rotation.y,
            z: i.rotation.z,
            duration: n,
            ease: et.easeInOut
        }))) : (this.camera.position.set(i.position.x, i.position.y, i.position.z), this.camera.rotation.set(i.rotation.x, i.rotation.y, i.rotation.z))
    }
}
var Mr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    Ni = {};
/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
(function(o) {
    (function() {
        var e = function() {
            this.init()
        };
        e.prototype = {
            init: function() {
                var l = this || t;
                return l._counter = 1e3, l._html5AudioPool = [], l.html5PoolSize = 10, l._codecs = {}, l._howls = [], l._muted = !1, l._volume = 1, l._canPlayEvent = "canplaythrough", l._navigator = typeof window < "u" && window.navigator ? window.navigator : null, l.masterGain = null, l.noAudio = !1, l.usingWebAudio = !0, l.autoSuspend = !0, l.ctx = null, l.autoUnlock = !0, l._setup(), l
            },
            volume: function(l) {
                var u = this || t;
                if (l = parseFloat(l), u.ctx || d(), typeof l < "u" && l >= 0 && l <= 1) {
                    if (u._volume = l, u._muted) return u;
                    u.usingWebAudio && u.masterGain.gain.setValueAtTime(l, t.ctx.currentTime);
                    for (var f = 0; f < u._howls.length; f++)
                        if (!u._howls[f]._webAudio)
                            for (var g = u._howls[f]._getSoundIds(), p = 0; p < g.length; p++) {
                                var m = u._howls[f]._soundById(g[p]);
                                m && m._node && (m._node.volume = m._volume * l)
                            }
                    return u
                }
                return u._volume
            },
            mute: function(l) {
                var u = this || t;
                u.ctx || d(), u._muted = l, u.usingWebAudio && u.masterGain.gain.setValueAtTime(l ? 0 : u._volume, t.ctx.currentTime);
                for (var f = 0; f < u._howls.length; f++)
                    if (!u._howls[f]._webAudio)
                        for (var g = u._howls[f]._getSoundIds(), p = 0; p < g.length; p++) {
                            var m = u._howls[f]._soundById(g[p]);
                            m && m._node && (m._node.muted = l ? !0 : m._muted)
                        }
                return u
            },
            stop: function() {
                for (var l = this || t, u = 0; u < l._howls.length; u++) l._howls[u].stop();
                return l
            },
            unload: function() {
                for (var l = this || t, u = l._howls.length - 1; u >= 0; u--) l._howls[u].unload();
                return l.usingWebAudio && l.ctx && typeof l.ctx.close < "u" && (l.ctx.close(), l.ctx = null, d()), l
            },
            codecs: function(l) {
                return (this || t)._codecs[l.replace(/^x-/, "")]
            },
            _setup: function() {
                var l = this || t;
                if (l.state = l.ctx && l.ctx.state || "suspended", l._autoSuspend(), !l.usingWebAudio)
                    if (typeof Audio < "u") try {
                        var u = new Audio;
                        typeof u.oncanplaythrough > "u" && (l._canPlayEvent = "canplay")
                    } catch {
                        l.noAudio = !0
                    } else l.noAudio = !0;
                try {
                    var u = new Audio;
                    u.muted && (l.noAudio = !0)
                } catch {}
                return l.noAudio || l._setupCodecs(), l
            },
            _setupCodecs: function() {
                var l = this || t,
                    u = null;
                try {
                    u = typeof Audio < "u" ? new Audio : null
                } catch {
                    return l
                }
                if (!u || typeof u.canPlayType != "function") return l;
                var f = u.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    g = l._navigator ? l._navigator.userAgent : "",
                    p = g.match(/OPR\/([0-6].)/g),
                    m = p && parseInt(p[0].split("/")[1], 10) < 33,
                    _ = g.indexOf("Safari") !== -1 && g.indexOf("Chrome") === -1,
                    y = g.match(/Version\/(.*?) /),
                    b = _ && y && parseInt(y[1], 10) < 15;
                return l._codecs = {
                    mp3: !!(!m && (f || u.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                    mpeg: !!f,
                    opus: !!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    oga: !!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!(u.canPlayType('audio/wav; codecs="1"') || u.canPlayType("audio/wav")).replace(/^no$/, ""),
                    aac: !!u.canPlayType("audio/aac;").replace(/^no$/, ""),
                    caf: !!u.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                    m4a: !!(u.canPlayType("audio/x-m4a;") || u.canPlayType("audio/m4a;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    m4b: !!(u.canPlayType("audio/x-m4b;") || u.canPlayType("audio/m4b;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(u.canPlayType("audio/x-mp4;") || u.canPlayType("audio/mp4;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!(!b && u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    webm: !!(!b && u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    dolby: !!u.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                    flac: !!(u.canPlayType("audio/x-flac;") || u.canPlayType("audio/flac;")).replace(/^no$/, "")
                }, l
            },
            _unlockAudio: function() {
                var l = this || t;
                if (!(l._audioUnlocked || !l.ctx)) {
                    l._audioUnlocked = !1, l.autoUnlock = !1, !l._mobileUnloaded && l.ctx.sampleRate !== 44100 && (l._mobileUnloaded = !0, l.unload()), l._scratchBuffer = l.ctx.createBuffer(1, 1, 22050);
                    var u = function(f) {
                        for (; l._html5AudioPool.length < l.html5PoolSize;) try {
                            var g = new Audio;
                            g._unlocked = !0, l._releaseHtml5Audio(g)
                        } catch {
                            l.noAudio = !0;
                            break
                        }
                        for (var p = 0; p < l._howls.length; p++)
                            if (!l._howls[p]._webAudio)
                                for (var m = l._howls[p]._getSoundIds(), _ = 0; _ < m.length; _++) {
                                    var y = l._howls[p]._soundById(m[_]);
                                    y && y._node && !y._node._unlocked && (y._node._unlocked = !0, y._node.load())
                                }
                        l._autoResume();
                        var b = l.ctx.createBufferSource();
                        b.buffer = l._scratchBuffer, b.connect(l.ctx.destination), typeof b.start > "u" ? b.noteOn(0) : b.start(0), typeof l.ctx.resume == "function" && l.ctx.resume(), b.onended = function() {
                            b.disconnect(0), l._audioUnlocked = !0, document.removeEventListener("touchstart", u, !0), document.removeEventListener("touchend", u, !0), document.removeEventListener("click", u, !0), document.removeEventListener("keydown", u, !0);
                            for (var w = 0; w < l._howls.length; w++) l._howls[w]._emit("unlock")
                        }
                    };
                    return document.addEventListener("touchstart", u, !0), document.addEventListener("touchend", u, !0), document.addEventListener("click", u, !0), document.addEventListener("keydown", u, !0), l
                }
            },
            _obtainHtml5Audio: function() {
                var l = this || t;
                if (l._html5AudioPool.length) return l._html5AudioPool.pop();
                var u = new Audio().play();
                return u && typeof Promise < "u" && (u instanceof Promise || typeof u.then == "function") && u.catch(function() {
                    console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                }), new Audio
            },
            _releaseHtml5Audio: function(l) {
                var u = this || t;
                return l._unlocked && u._html5AudioPool.push(l), u
            },
            _autoSuspend: function() {
                var l = this;
                if (!(!l.autoSuspend || !l.ctx || typeof l.ctx.suspend > "u" || !t.usingWebAudio)) {
                    for (var u = 0; u < l._howls.length; u++)
                        if (l._howls[u]._webAudio) {
                            for (var f = 0; f < l._howls[u]._sounds.length; f++)
                                if (!l._howls[u]._sounds[f]._paused) return l
                        }
                    return l._suspendTimer && clearTimeout(l._suspendTimer), l._suspendTimer = setTimeout(function() {
                        if (l.autoSuspend) {
                            l._suspendTimer = null, l.state = "suspending";
                            var g = function() {
                                l.state = "suspended", l._resumeAfterSuspend && (delete l._resumeAfterSuspend, l._autoResume())
                            };
                            l.ctx.suspend().then(g, g)
                        }
                    }, 3e4), l
                }
            },
            _autoResume: function() {
                var l = this;
                if (!(!l.ctx || typeof l.ctx.resume > "u" || !t.usingWebAudio)) return l.state === "running" && l.ctx.state !== "interrupted" && l._suspendTimer ? (clearTimeout(l._suspendTimer), l._suspendTimer = null) : l.state === "suspended" || l.state === "running" && l.ctx.state === "interrupted" ? (l.ctx.resume().then(function() {
                    l.state = "running";
                    for (var u = 0; u < l._howls.length; u++) l._howls[u]._emit("resume")
                }), l._suspendTimer && (clearTimeout(l._suspendTimer), l._suspendTimer = null)) : l.state === "suspending" && (l._resumeAfterSuspend = !0), l
            }
        };
        var t = new e,
            n = function(l) {
                var u = this;
                if (!l.src || l.src.length === 0) {
                    console.error("An array of source files must be passed with any new Howl.");
                    return
                }
                u.init(l)
            };
        n.prototype = {
            init: function(l) {
                var u = this;
                return t.ctx || d(), u._autoplay = l.autoplay || !1, u._format = typeof l.format != "string" ? l.format : [l.format], u._html5 = l.html5 || !1, u._muted = l.mute || !1, u._loop = l.loop || !1, u._pool = l.pool || 5, u._preload = typeof l.preload == "boolean" || l.preload === "metadata" ? l.preload : !0, u._rate = l.rate || 1, u._sprite = l.sprite || {}, u._src = typeof l.src != "string" ? l.src : [l.src], u._volume = l.volume !== void 0 ? l.volume : 1, u._xhr = {
                    method: l.xhr && l.xhr.method ? l.xhr.method : "GET",
                    headers: l.xhr && l.xhr.headers ? l.xhr.headers : null,
                    withCredentials: l.xhr && l.xhr.withCredentials ? l.xhr.withCredentials : !1
                }, u._duration = 0, u._state = "unloaded", u._sounds = [], u._endTimers = {}, u._queue = [], u._playLock = !1, u._onend = l.onend ? [{
                    fn: l.onend
                }] : [], u._onfade = l.onfade ? [{
                    fn: l.onfade
                }] : [], u._onload = l.onload ? [{
                    fn: l.onload
                }] : [], u._onloaderror = l.onloaderror ? [{
                    fn: l.onloaderror
                }] : [], u._onplayerror = l.onplayerror ? [{
                    fn: l.onplayerror
                }] : [], u._onpause = l.onpause ? [{
                    fn: l.onpause
                }] : [], u._onplay = l.onplay ? [{
                    fn: l.onplay
                }] : [], u._onstop = l.onstop ? [{
                    fn: l.onstop
                }] : [], u._onmute = l.onmute ? [{
                    fn: l.onmute
                }] : [], u._onvolume = l.onvolume ? [{
                    fn: l.onvolume
                }] : [], u._onrate = l.onrate ? [{
                    fn: l.onrate
                }] : [], u._onseek = l.onseek ? [{
                    fn: l.onseek
                }] : [], u._onunlock = l.onunlock ? [{
                    fn: l.onunlock
                }] : [], u._onresume = [], u._webAudio = t.usingWebAudio && !u._html5, typeof t.ctx < "u" && t.ctx && t.autoUnlock && t._unlockAudio(), t._howls.push(u), u._autoplay && u._queue.push({
                    event: "play",
                    action: function() {
                        u.play()
                    }
                }), u._preload && u._preload !== "none" && u.load(), u
            },
            load: function() {
                var l = this,
                    u = null;
                if (t.noAudio) {
                    l._emit("loaderror", null, "No audio support.");
                    return
                }
                typeof l._src == "string" && (l._src = [l._src]);
                for (var f = 0; f < l._src.length; f++) {
                    var g, p;
                    if (l._format && l._format[f]) g = l._format[f];
                    else {
                        if (p = l._src[f], typeof p != "string") {
                            l._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }
                        g = /^data:audio\/([^;,]+);/i.exec(p), g || (g = /\.([^.]+)$/.exec(p.split("?", 1)[0])), g && (g = g[1].toLowerCase())
                    }
                    if (g || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), g && t.codecs(g)) {
                        u = l._src[f];
                        break
                    }
                }
                if (!u) {
                    l._emit("loaderror", null, "No codec support for selected audio sources.");
                    return
                }
                return l._src = u, l._state = "loading", window.location.protocol === "https:" && u.slice(0, 5) === "http:" && (l._html5 = !0, l._webAudio = !1), new i(l), l._webAudio && r(l), l
            },
            play: function(l, u) {
                var f = this,
                    g = null;
                if (typeof l == "number") g = l, l = null;
                else {
                    if (typeof l == "string" && f._state === "loaded" && !f._sprite[l]) return null;
                    if (typeof l > "u" && (l = "__default", !f._playLock)) {
                        for (var p = 0, m = 0; m < f._sounds.length; m++) f._sounds[m]._paused && !f._sounds[m]._ended && (p++, g = f._sounds[m]._id);
                        p === 1 ? l = null : g = null
                    }
                }
                var _ = g ? f._soundById(g) : f._inactiveSound();
                if (!_) return null;
                if (g && !l && (l = _._sprite || "__default"), f._state !== "loaded") {
                    _._sprite = l, _._ended = !1;
                    var y = _._id;
                    return f._queue.push({
                        event: "play",
                        action: function() {
                            f.play(y)
                        }
                    }), y
                }
                if (g && !_._paused) return u || f._loadQueue("play"), _._id;
                f._webAudio && t._autoResume();
                var b = Math.max(0, _._seek > 0 ? _._seek : f._sprite[l][0] / 1e3),
                    w = Math.max(0, (f._sprite[l][0] + f._sprite[l][1]) / 1e3 - b),
                    x = w * 1e3 / Math.abs(_._rate),
                    E = f._sprite[l][0] / 1e3,
                    T = (f._sprite[l][0] + f._sprite[l][1]) / 1e3;
                _._sprite = l, _._ended = !1;
                var R = function() {
                    _._paused = !1, _._seek = b, _._start = E, _._stop = T, _._loop = !!(_._loop || f._sprite[l][2])
                };
                if (b >= T) {
                    f._ended(_);
                    return
                }
                var I = _._node;
                if (f._webAudio) {
                    var B = function() {
                        f._playLock = !1, R(), f._refreshBuffer(_);
                        var D = _._muted || f._muted ? 0 : _._volume;
                        I.gain.setValueAtTime(D, t.ctx.currentTime), _._playStart = t.ctx.currentTime, typeof I.bufferSource.start > "u" ? _._loop ? I.bufferSource.noteGrainOn(0, b, 86400) : I.bufferSource.noteGrainOn(0, b, w) : _._loop ? I.bufferSource.start(0, b, 86400) : I.bufferSource.start(0, b, w), x !== 1 / 0 && (f._endTimers[_._id] = setTimeout(f._ended.bind(f, _), x)), u || setTimeout(function() {
                            f._emit("play", _._id), f._loadQueue()
                        }, 0)
                    };
                    t.state === "running" && t.ctx.state !== "interrupted" ? B() : (f._playLock = !0, f.once("resume", B), f._clearTimer(_._id))
                } else {
                    var v = function() {
                        I.currentTime = b, I.muted = _._muted || f._muted || t._muted || I.muted, I.volume = _._volume * t.volume(), I.playbackRate = _._rate;
                        try {
                            var D = I.play();
                            if (D && typeof Promise < "u" && (D instanceof Promise || typeof D.then == "function") ? (f._playLock = !0, R(), D.then(function() {
                                    f._playLock = !1, I._unlocked = !0, u ? f._loadQueue() : f._emit("play", _._id)
                                }).catch(function() {
                                    f._playLock = !1, f._emit("playerror", _._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), _._ended = !0, _._paused = !0
                                })) : u || (f._playLock = !1, R(), f._emit("play", _._id)), I.playbackRate = _._rate, I.paused) {
                                f._emit("playerror", _._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                return
                            }
                            l !== "__default" || _._loop ? f._endTimers[_._id] = setTimeout(f._ended.bind(f, _), x) : (f._endTimers[_._id] = function() {
                                f._ended(_), I.removeEventListener("ended", f._endTimers[_._id], !1)
                            }, I.addEventListener("ended", f._endTimers[_._id], !1))
                        } catch (O) {
                            f._emit("playerror", _._id, O)
                        }
                    };
                    I.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (I.src = f._src, I.load());
                    var L = window && window.ejecta || !I.readyState && t._navigator.isCocoonJS;
                    if (I.readyState >= 3 || L) v();
                    else {
                        f._playLock = !0, f._state = "loading";
                        var U = function() {
                            f._state = "loaded", v(), I.removeEventListener(t._canPlayEvent, U, !1)
                        };
                        I.addEventListener(t._canPlayEvent, U, !1), f._clearTimer(_._id)
                    }
                }
                return _._id
            },
            pause: function(l) {
                var u = this;
                if (u._state !== "loaded" || u._playLock) return u._queue.push({
                    event: "pause",
                    action: function() {
                        u.pause(l)
                    }
                }), u;
                for (var f = u._getSoundIds(l), g = 0; g < f.length; g++) {
                    u._clearTimer(f[g]);
                    var p = u._soundById(f[g]);
                    if (p && !p._paused && (p._seek = u.seek(f[g]), p._rateSeek = 0, p._paused = !0, u._stopFade(f[g]), p._node))
                        if (u._webAudio) {
                            if (!p._node.bufferSource) continue;
                            typeof p._node.bufferSource.stop > "u" ? p._node.bufferSource.noteOff(0) : p._node.bufferSource.stop(0), u._cleanBuffer(p._node)
                        } else(!isNaN(p._node.duration) || p._node.duration === 1 / 0) && p._node.pause();
                    arguments[1] || u._emit("pause", p ? p._id : null)
                }
                return u
            },
            stop: function(l, u) {
                var f = this;
                if (f._state !== "loaded" || f._playLock) return f._queue.push({
                    event: "stop",
                    action: function() {
                        f.stop(l)
                    }
                }), f;
                for (var g = f._getSoundIds(l), p = 0; p < g.length; p++) {
                    f._clearTimer(g[p]);
                    var m = f._soundById(g[p]);
                    m && (m._seek = m._start || 0, m._rateSeek = 0, m._paused = !0, m._ended = !0, f._stopFade(g[p]), m._node && (f._webAudio ? m._node.bufferSource && (typeof m._node.bufferSource.stop > "u" ? m._node.bufferSource.noteOff(0) : m._node.bufferSource.stop(0), f._cleanBuffer(m._node)) : (!isNaN(m._node.duration) || m._node.duration === 1 / 0) && (m._node.currentTime = m._start || 0, m._node.pause(), m._node.duration === 1 / 0 && f._clearSound(m._node))), u || f._emit("stop", m._id))
                }
                return f
            },
            mute: function(l, u) {
                var f = this;
                if (f._state !== "loaded" || f._playLock) return f._queue.push({
                    event: "mute",
                    action: function() {
                        f.mute(l, u)
                    }
                }), f;
                if (typeof u > "u")
                    if (typeof l == "boolean") f._muted = l;
                    else return f._muted;
                for (var g = f._getSoundIds(u), p = 0; p < g.length; p++) {
                    var m = f._soundById(g[p]);
                    m && (m._muted = l, m._interval && f._stopFade(m._id), f._webAudio && m._node ? m._node.gain.setValueAtTime(l ? 0 : m._volume, t.ctx.currentTime) : m._node && (m._node.muted = t._muted ? !0 : l), f._emit("mute", m._id))
                }
                return f
            },
            volume: function() {
                var l = this,
                    u = arguments,
                    f, g;
                if (u.length === 0) return l._volume;
                if (u.length === 1 || u.length === 2 && typeof u[1] > "u") {
                    var p = l._getSoundIds(),
                        m = p.indexOf(u[0]);
                    m >= 0 ? g = parseInt(u[0], 10) : f = parseFloat(u[0])
                } else u.length >= 2 && (f = parseFloat(u[0]), g = parseInt(u[1], 10));
                var _;
                if (typeof f < "u" && f >= 0 && f <= 1) {
                    if (l._state !== "loaded" || l._playLock) return l._queue.push({
                        event: "volume",
                        action: function() {
                            l.volume.apply(l, u)
                        }
                    }), l;
                    typeof g > "u" && (l._volume = f), g = l._getSoundIds(g);
                    for (var y = 0; y < g.length; y++) _ = l._soundById(g[y]), _ && (_._volume = f, u[2] || l._stopFade(g[y]), l._webAudio && _._node && !_._muted ? _._node.gain.setValueAtTime(f, t.ctx.currentTime) : _._node && !_._muted && (_._node.volume = f * t.volume()), l._emit("volume", _._id))
                } else return _ = g ? l._soundById(g) : l._sounds[0], _ ? _._volume : 0;
                return l
            },
            fade: function(l, u, f, g) {
                var p = this;
                if (p._state !== "loaded" || p._playLock) return p._queue.push({
                    event: "fade",
                    action: function() {
                        p.fade(l, u, f, g)
                    }
                }), p;
                l = Math.min(Math.max(0, parseFloat(l)), 1), u = Math.min(Math.max(0, parseFloat(u)), 1), f = parseFloat(f), p.volume(l, g);
                for (var m = p._getSoundIds(g), _ = 0; _ < m.length; _++) {
                    var y = p._soundById(m[_]);
                    if (y) {
                        if (g || p._stopFade(m[_]), p._webAudio && !y._muted) {
                            var b = t.ctx.currentTime,
                                w = b + f / 1e3;
                            y._volume = l, y._node.gain.setValueAtTime(l, b), y._node.gain.linearRampToValueAtTime(u, w)
                        }
                        p._startFadeInterval(y, l, u, f, m[_], typeof g > "u")
                    }
                }
                return p
            },
            _startFadeInterval: function(l, u, f, g, p, m) {
                var _ = this,
                    y = u,
                    b = f - u,
                    w = Math.abs(b / .01),
                    x = Math.max(4, w > 0 ? g / w : g),
                    E = Date.now();
                l._fadeTo = f, l._interval = setInterval(function() {
                    var T = (Date.now() - E) / g;
                    E = Date.now(), y += b * T, y = Math.round(y * 100) / 100, b < 0 ? y = Math.max(f, y) : y = Math.min(f, y), _._webAudio ? l._volume = y : _.volume(y, l._id, !0), m && (_._volume = y), (f < u && y <= f || f > u && y >= f) && (clearInterval(l._interval), l._interval = null, l._fadeTo = null, _.volume(f, l._id), _._emit("fade", l._id))
                }, x)
            },
            _stopFade: function(l) {
                var u = this,
                    f = u._soundById(l);
                return f && f._interval && (u._webAudio && f._node.gain.cancelScheduledValues(t.ctx.currentTime), clearInterval(f._interval), f._interval = null, u.volume(f._fadeTo, l), f._fadeTo = null, u._emit("fade", l)), u
            },
            loop: function() {
                var l = this,
                    u = arguments,
                    f, g, p;
                if (u.length === 0) return l._loop;
                if (u.length === 1)
                    if (typeof u[0] == "boolean") f = u[0], l._loop = f;
                    else return p = l._soundById(parseInt(u[0], 10)), p ? p._loop : !1;
                else u.length === 2 && (f = u[0], g = parseInt(u[1], 10));
                for (var m = l._getSoundIds(g), _ = 0; _ < m.length; _++) p = l._soundById(m[_]), p && (p._loop = f, l._webAudio && p._node && p._node.bufferSource && (p._node.bufferSource.loop = f, f && (p._node.bufferSource.loopStart = p._start || 0, p._node.bufferSource.loopEnd = p._stop, l.playing(m[_]) && (l.pause(m[_], !0), l.play(m[_], !0)))));
                return l
            },
            rate: function() {
                var l = this,
                    u = arguments,
                    f, g;
                if (u.length === 0) g = l._sounds[0]._id;
                else if (u.length === 1) {
                    var p = l._getSoundIds(),
                        m = p.indexOf(u[0]);
                    m >= 0 ? g = parseInt(u[0], 10) : f = parseFloat(u[0])
                } else u.length === 2 && (f = parseFloat(u[0]), g = parseInt(u[1], 10));
                var _;
                if (typeof f == "number") {
                    if (l._state !== "loaded" || l._playLock) return l._queue.push({
                        event: "rate",
                        action: function() {
                            l.rate.apply(l, u)
                        }
                    }), l;
                    typeof g > "u" && (l._rate = f), g = l._getSoundIds(g);
                    for (var y = 0; y < g.length; y++)
                        if (_ = l._soundById(g[y]), _) {
                            l.playing(g[y]) && (_._rateSeek = l.seek(g[y]), _._playStart = l._webAudio ? t.ctx.currentTime : _._playStart), _._rate = f, l._webAudio && _._node && _._node.bufferSource ? _._node.bufferSource.playbackRate.setValueAtTime(f, t.ctx.currentTime) : _._node && (_._node.playbackRate = f);
                            var b = l.seek(g[y]),
                                w = (l._sprite[_._sprite][0] + l._sprite[_._sprite][1]) / 1e3 - b,
                                x = w * 1e3 / Math.abs(_._rate);
                            (l._endTimers[g[y]] || !_._paused) && (l._clearTimer(g[y]), l._endTimers[g[y]] = setTimeout(l._ended.bind(l, _), x)), l._emit("rate", _._id)
                        }
                } else return _ = l._soundById(g), _ ? _._rate : l._rate;
                return l
            },
            seek: function() {
                var l = this,
                    u = arguments,
                    f, g;
                if (u.length === 0) l._sounds.length && (g = l._sounds[0]._id);
                else if (u.length === 1) {
                    var p = l._getSoundIds(),
                        m = p.indexOf(u[0]);
                    m >= 0 ? g = parseInt(u[0], 10) : l._sounds.length && (g = l._sounds[0]._id, f = parseFloat(u[0]))
                } else u.length === 2 && (f = parseFloat(u[0]), g = parseInt(u[1], 10));
                if (typeof g > "u") return 0;
                if (typeof f == "number" && (l._state !== "loaded" || l._playLock)) return l._queue.push({
                    event: "seek",
                    action: function() {
                        l.seek.apply(l, u)
                    }
                }), l;
                var _ = l._soundById(g);
                if (_)
                    if (typeof f == "number" && f >= 0) {
                        var y = l.playing(g);
                        y && l.pause(g, !0), _._seek = f, _._ended = !1, l._clearTimer(g), !l._webAudio && _._node && !isNaN(_._node.duration) && (_._node.currentTime = f);
                        var b = function() {
                            y && l.play(g, !0), l._emit("seek", g)
                        };
                        if (y && !l._webAudio) {
                            var w = function() {
                                l._playLock ? setTimeout(w, 0) : b()
                            };
                            setTimeout(w, 0)
                        } else b()
                    } else if (l._webAudio) {
                    var x = l.playing(g) ? t.ctx.currentTime - _._playStart : 0,
                        E = _._rateSeek ? _._rateSeek - _._seek : 0;
                    return _._seek + (E + x * Math.abs(_._rate))
                } else return _._node.currentTime;
                return l
            },
            playing: function(l) {
                var u = this;
                if (typeof l == "number") {
                    var f = u._soundById(l);
                    return f ? !f._paused : !1
                }
                for (var g = 0; g < u._sounds.length; g++)
                    if (!u._sounds[g]._paused) return !0;
                return !1
            },
            duration: function(l) {
                var u = this,
                    f = u._duration,
                    g = u._soundById(l);
                return g && (f = u._sprite[g._sprite][1] / 1e3), f
            },
            state: function() {
                return this._state
            },
            unload: function() {
                for (var l = this, u = l._sounds, f = 0; f < u.length; f++) u[f]._paused || l.stop(u[f]._id), l._webAudio || (l._clearSound(u[f]._node), u[f]._node.removeEventListener("error", u[f]._errorFn, !1), u[f]._node.removeEventListener(t._canPlayEvent, u[f]._loadFn, !1), u[f]._node.removeEventListener("ended", u[f]._endFn, !1), t._releaseHtml5Audio(u[f]._node)), delete u[f]._node, l._clearTimer(u[f]._id);
                var g = t._howls.indexOf(l);
                g >= 0 && t._howls.splice(g, 1);
                var p = !0;
                for (f = 0; f < t._howls.length; f++)
                    if (t._howls[f]._src === l._src || l._src.indexOf(t._howls[f]._src) >= 0) {
                        p = !1;
                        break
                    }
                return s && p && delete s[l._src], t.noAudio = !1, l._state = "unloaded", l._sounds = [], l = null, null
            },
            on: function(l, u, f, g) {
                var p = this,
                    m = p["_on" + l];
                return typeof u == "function" && m.push(g ? {
                    id: f,
                    fn: u,
                    once: g
                } : {
                    id: f,
                    fn: u
                }), p
            },
            off: function(l, u, f) {
                var g = this,
                    p = g["_on" + l],
                    m = 0;
                if (typeof u == "number" && (f = u, u = null), u || f)
                    for (m = 0; m < p.length; m++) {
                        var _ = f === p[m].id;
                        if (u === p[m].fn && _ || !u && _) {
                            p.splice(m, 1);
                            break
                        }
                    } else if (l) g["_on" + l] = [];
                    else {
                        var y = Object.keys(g);
                        for (m = 0; m < y.length; m++) y[m].indexOf("_on") === 0 && Array.isArray(g[y[m]]) && (g[y[m]] = [])
                    }
                return g
            },
            once: function(l, u, f) {
                var g = this;
                return g.on(l, u, f, 1), g
            },
            _emit: function(l, u, f) {
                for (var g = this, p = g["_on" + l], m = p.length - 1; m >= 0; m--)(!p[m].id || p[m].id === u || l === "load") && (setTimeout(function(_) {
                    _.call(this, u, f)
                }.bind(g, p[m].fn), 0), p[m].once && g.off(l, p[m].fn, p[m].id));
                return g._loadQueue(l), g
            },
            _loadQueue: function(l) {
                var u = this;
                if (u._queue.length > 0) {
                    var f = u._queue[0];
                    f.event === l && (u._queue.shift(), u._loadQueue()), l || f.action()
                }
                return u
            },
            _ended: function(l) {
                var u = this,
                    f = l._sprite;
                if (!u._webAudio && l._node && !l._node.paused && !l._node.ended && l._node.currentTime < l._stop) return setTimeout(u._ended.bind(u, l), 100), u;
                var g = !!(l._loop || u._sprite[f][2]);
                if (u._emit("end", l._id), !u._webAudio && g && u.stop(l._id, !0).play(l._id), u._webAudio && g) {
                    u._emit("play", l._id), l._seek = l._start || 0, l._rateSeek = 0, l._playStart = t.ctx.currentTime;
                    var p = (l._stop - l._start) * 1e3 / Math.abs(l._rate);
                    u._endTimers[l._id] = setTimeout(u._ended.bind(u, l), p)
                }
                return u._webAudio && !g && (l._paused = !0, l._ended = !0, l._seek = l._start || 0, l._rateSeek = 0, u._clearTimer(l._id), u._cleanBuffer(l._node), t._autoSuspend()), !u._webAudio && !g && u.stop(l._id, !0), u
            },
            _clearTimer: function(l) {
                var u = this;
                if (u._endTimers[l]) {
                    if (typeof u._endTimers[l] != "function") clearTimeout(u._endTimers[l]);
                    else {
                        var f = u._soundById(l);
                        f && f._node && f._node.removeEventListener("ended", u._endTimers[l], !1)
                    }
                    delete u._endTimers[l]
                }
                return u
            },
            _soundById: function(l) {
                for (var u = this, f = 0; f < u._sounds.length; f++)
                    if (l === u._sounds[f]._id) return u._sounds[f];
                return null
            },
            _inactiveSound: function() {
                var l = this;
                l._drain();
                for (var u = 0; u < l._sounds.length; u++)
                    if (l._sounds[u]._ended) return l._sounds[u].reset();
                return new i(l)
            },
            _drain: function() {
                var l = this,
                    u = l._pool,
                    f = 0,
                    g = 0;
                if (!(l._sounds.length < u)) {
                    for (g = 0; g < l._sounds.length; g++) l._sounds[g]._ended && f++;
                    for (g = l._sounds.length - 1; g >= 0; g--) {
                        if (f <= u) return;
                        l._sounds[g]._ended && (l._webAudio && l._sounds[g]._node && l._sounds[g]._node.disconnect(0), l._sounds.splice(g, 1), f--)
                    }
                }
            },
            _getSoundIds: function(l) {
                var u = this;
                if (typeof l > "u") {
                    for (var f = [], g = 0; g < u._sounds.length; g++) f.push(u._sounds[g]._id);
                    return f
                } else return [l]
            },
            _refreshBuffer: function(l) {
                var u = this;
                return l._node.bufferSource = t.ctx.createBufferSource(), l._node.bufferSource.buffer = s[u._src], l._panner ? l._node.bufferSource.connect(l._panner) : l._node.bufferSource.connect(l._node), l._node.bufferSource.loop = l._loop, l._loop && (l._node.bufferSource.loopStart = l._start || 0, l._node.bufferSource.loopEnd = l._stop || 0), l._node.bufferSource.playbackRate.setValueAtTime(l._rate, t.ctx.currentTime), u
            },
            _cleanBuffer: function(l) {
                var u = this,
                    f = t._navigator && t._navigator.vendor.indexOf("Apple") >= 0;
                if (t._scratchBuffer && l.bufferSource && (l.bufferSource.onended = null, l.bufferSource.disconnect(0), f)) try {
                    l.bufferSource.buffer = t._scratchBuffer
                } catch {}
                return l.bufferSource = null, u
            },
            _clearSound: function(l) {
                var u = /MSIE |Trident\//.test(t._navigator && t._navigator.userAgent);
                u || (l.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
            }
        };
        var i = function(l) {
            this._parent = l, this.init()
        };
        i.prototype = {
            init: function() {
                var l = this,
                    u = l._parent;
                return l._muted = u._muted, l._loop = u._loop, l._volume = u._volume, l._rate = u._rate, l._seek = 0, l._paused = !0, l._ended = !0, l._sprite = "__default", l._id = ++t._counter, u._sounds.push(l), l.create(), l
            },
            create: function() {
                var l = this,
                    u = l._parent,
                    f = t._muted || l._muted || l._parent._muted ? 0 : l._volume;
                return u._webAudio ? (l._node = typeof t.ctx.createGain > "u" ? t.ctx.createGainNode() : t.ctx.createGain(), l._node.gain.setValueAtTime(f, t.ctx.currentTime), l._node.paused = !0, l._node.connect(t.masterGain)) : t.noAudio || (l._node = t._obtainHtml5Audio(), l._errorFn = l._errorListener.bind(l), l._node.addEventListener("error", l._errorFn, !1), l._loadFn = l._loadListener.bind(l), l._node.addEventListener(t._canPlayEvent, l._loadFn, !1), l._endFn = l._endListener.bind(l), l._node.addEventListener("ended", l._endFn, !1), l._node.src = u._src, l._node.preload = u._preload === !0 ? "auto" : u._preload, l._node.volume = f * t.volume(), l._node.load()), l
            },
            reset: function() {
                var l = this,
                    u = l._parent;
                return l._muted = u._muted, l._loop = u._loop, l._volume = u._volume, l._rate = u._rate, l._seek = 0, l._rateSeek = 0, l._paused = !0, l._ended = !0, l._sprite = "__default", l._id = ++t._counter, l
            },
            _errorListener: function() {
                var l = this;
                l._parent._emit("loaderror", l._id, l._node.error ? l._node.error.code : 0), l._node.removeEventListener("error", l._errorFn, !1)
            },
            _loadListener: function() {
                var l = this,
                    u = l._parent;
                u._duration = Math.ceil(l._node.duration * 10) / 10, Object.keys(u._sprite).length === 0 && (u._sprite = {
                    __default: [0, u._duration * 1e3]
                }), u._state !== "loaded" && (u._state = "loaded", u._emit("load"), u._loadQueue()), l._node.removeEventListener(t._canPlayEvent, l._loadFn, !1)
            },
            _endListener: function() {
                var l = this,
                    u = l._parent;
                u._duration === 1 / 0 && (u._duration = Math.ceil(l._node.duration * 10) / 10, u._sprite.__default[1] === 1 / 0 && (u._sprite.__default[1] = u._duration * 1e3), u._ended(l)), l._node.removeEventListener("ended", l._endFn, !1)
            }
        };
        var s = {},
            r = function(l) {
                var u = l._src;
                if (s[u]) {
                    l._duration = s[u].duration, h(l);
                    return
                }
                if (/^data:[^;]+;base64,/.test(u)) {
                    for (var f = atob(u.split(",")[1]), g = new Uint8Array(f.length), p = 0; p < f.length; ++p) g[p] = f.charCodeAt(p);
                    c(g.buffer, l)
                } else {
                    var m = new XMLHttpRequest;
                    m.open(l._xhr.method, u, !0), m.withCredentials = l._xhr.withCredentials, m.responseType = "arraybuffer", l._xhr.headers && Object.keys(l._xhr.headers).forEach(function(_) {
                        m.setRequestHeader(_, l._xhr.headers[_])
                    }), m.onload = function() {
                        var _ = (m.status + "")[0];
                        if (_ !== "0" && _ !== "2" && _ !== "3") {
                            l._emit("loaderror", null, "Failed loading audio file with status: " + m.status + ".");
                            return
                        }
                        c(m.response, l)
                    }, m.onerror = function() {
                        l._webAudio && (l._html5 = !0, l._webAudio = !1, l._sounds = [], delete s[u], l.load())
                    }, a(m)
                }
            },
            a = function(l) {
                try {
                    l.send()
                } catch {
                    l.onerror()
                }
            },
            c = function(l, u) {
                var f = function() {
                        u._emit("loaderror", null, "Decoding audio data failed.")
                    },
                    g = function(p) {
                        p && u._sounds.length > 0 ? (s[u._src] = p, h(u, p)) : f()
                    };
                typeof Promise < "u" && t.ctx.decodeAudioData.length === 1 ? t.ctx.decodeAudioData(l).then(g).catch(f) : t.ctx.decodeAudioData(l, g, f)
            },
            h = function(l, u) {
                u && !l._duration && (l._duration = u.duration), Object.keys(l._sprite).length === 0 && (l._sprite = {
                    __default: [0, l._duration * 1e3]
                }), l._state !== "loaded" && (l._state = "loaded", l._emit("load"), l._loadQueue())
            },
            d = function() {
                if (t.usingWebAudio) {
                    try {
                        typeof AudioContext < "u" ? t.ctx = new AudioContext : typeof webkitAudioContext < "u" ? t.ctx = new webkitAudioContext : t.usingWebAudio = !1
                    } catch {
                        t.usingWebAudio = !1
                    }
                    t.ctx || (t.usingWebAudio = !1);
                    var l = /iP(hone|od|ad)/.test(t._navigator && t._navigator.platform),
                        u = t._navigator && t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                        f = u ? parseInt(u[1], 10) : null;
                    if (l && f && f < 9) {
                        var g = /safari/.test(t._navigator && t._navigator.userAgent.toLowerCase());
                        t._navigator && !g && (t.usingWebAudio = !1)
                    }
                    t.usingWebAudio && (t.masterGain = typeof t.ctx.createGain > "u" ? t.ctx.createGainNode() : t.ctx.createGain(), t.masterGain.gain.setValueAtTime(t._muted ? 0 : t._volume, t.ctx.currentTime), t.masterGain.connect(t.ctx.destination)), t._setup()
                }
            };
        o.Howler = t, o.Howl = n, typeof Mr < "u" ? (Mr.HowlerGlobal = e, Mr.Howler = t, Mr.Howl = n, Mr.Sound = i) : typeof window < "u" && (window.HowlerGlobal = e, window.Howler = t, window.Howl = n, window.Sound = i)
    })();
    /*!
     *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
     *  
     *  howler.js v2.2.3
     *  howlerjs.com
     *
     *  (c) 2013-2020, James Simpson of GoldFire Studios
     *  goldfirestudios.com
     *
     *  MIT License
     */
    (function() {
        HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(t) {
            var n = this;
            if (!n.ctx || !n.ctx.listener) return n;
            for (var i = n._howls.length - 1; i >= 0; i--) n._howls[i].stereo(t);
            return n
        }, HowlerGlobal.prototype.pos = function(t, n, i) {
            var s = this;
            if (!s.ctx || !s.ctx.listener) return s;
            if (n = typeof n != "number" ? s._pos[1] : n, i = typeof i != "number" ? s._pos[2] : i, typeof t == "number") s._pos = [t, n, i], typeof s.ctx.listener.positionX < "u" ? (s.ctx.listener.positionX.setTargetAtTime(s._pos[0], Howler.ctx.currentTime, .1), s.ctx.listener.positionY.setTargetAtTime(s._pos[1], Howler.ctx.currentTime, .1), s.ctx.listener.positionZ.setTargetAtTime(s._pos[2], Howler.ctx.currentTime, .1)) : s.ctx.listener.setPosition(s._pos[0], s._pos[1], s._pos[2]);
            else return s._pos;
            return s
        }, HowlerGlobal.prototype.orientation = function(t, n, i, s, r, a) {
            var c = this;
            if (!c.ctx || !c.ctx.listener) return c;
            var h = c._orientation;
            if (n = typeof n != "number" ? h[1] : n, i = typeof i != "number" ? h[2] : i, s = typeof s != "number" ? h[3] : s, r = typeof r != "number" ? h[4] : r, a = typeof a != "number" ? h[5] : a, typeof t == "number") c._orientation = [t, n, i, s, r, a], typeof c.ctx.listener.forwardX < "u" ? (c.ctx.listener.forwardX.setTargetAtTime(t, Howler.ctx.currentTime, .1), c.ctx.listener.forwardY.setTargetAtTime(n, Howler.ctx.currentTime, .1), c.ctx.listener.forwardZ.setTargetAtTime(i, Howler.ctx.currentTime, .1), c.ctx.listener.upX.setTargetAtTime(s, Howler.ctx.currentTime, .1), c.ctx.listener.upY.setTargetAtTime(r, Howler.ctx.currentTime, .1), c.ctx.listener.upZ.setTargetAtTime(a, Howler.ctx.currentTime, .1)) : c.ctx.listener.setOrientation(t, n, i, s, r, a);
            else return h;
            return c
        }, Howl.prototype.init = function(t) {
            return function(n) {
                var i = this;
                return i._orientation = n.orientation || [1, 0, 0], i._stereo = n.stereo || null, i._pos = n.pos || null, i._pannerAttr = {
                    coneInnerAngle: typeof n.coneInnerAngle < "u" ? n.coneInnerAngle : 360,
                    coneOuterAngle: typeof n.coneOuterAngle < "u" ? n.coneOuterAngle : 360,
                    coneOuterGain: typeof n.coneOuterGain < "u" ? n.coneOuterGain : 0,
                    distanceModel: typeof n.distanceModel < "u" ? n.distanceModel : "inverse",
                    maxDistance: typeof n.maxDistance < "u" ? n.maxDistance : 1e4,
                    panningModel: typeof n.panningModel < "u" ? n.panningModel : "HRTF",
                    refDistance: typeof n.refDistance < "u" ? n.refDistance : 1,
                    rolloffFactor: typeof n.rolloffFactor < "u" ? n.rolloffFactor : 1
                }, i._onstereo = n.onstereo ? [{
                    fn: n.onstereo
                }] : [], i._onpos = n.onpos ? [{
                    fn: n.onpos
                }] : [], i._onorientation = n.onorientation ? [{
                    fn: n.onorientation
                }] : [], t.call(this, n)
            }
        }(Howl.prototype.init), Howl.prototype.stereo = function(t, n) {
            var i = this;
            if (!i._webAudio) return i;
            if (i._state !== "loaded") return i._queue.push({
                event: "stereo",
                action: function() {
                    i.stereo(t, n)
                }
            }), i;
            var s = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
            if (typeof n > "u")
                if (typeof t == "number") i._stereo = t, i._pos = [t, 0, 0];
                else return i._stereo;
            for (var r = i._getSoundIds(n), a = 0; a < r.length; a++) {
                var c = i._soundById(r[a]);
                if (c)
                    if (typeof t == "number") c._stereo = t, c._pos = [t, 0, 0], c._node && (c._pannerAttr.panningModel = "equalpower", (!c._panner || !c._panner.pan) && e(c, s), s === "spatial" ? typeof c._panner.positionX < "u" ? (c._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime), c._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), c._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : c._panner.setPosition(t, 0, 0) : c._panner.pan.setValueAtTime(t, Howler.ctx.currentTime)), i._emit("stereo", c._id);
                    else return c._stereo
            }
            return i
        }, Howl.prototype.pos = function(t, n, i, s) {
            var r = this;
            if (!r._webAudio) return r;
            if (r._state !== "loaded") return r._queue.push({
                event: "pos",
                action: function() {
                    r.pos(t, n, i, s)
                }
            }), r;
            if (n = typeof n != "number" ? 0 : n, i = typeof i != "number" ? -.5 : i, typeof s > "u")
                if (typeof t == "number") r._pos = [t, n, i];
                else return r._pos;
            for (var a = r._getSoundIds(s), c = 0; c < a.length; c++) {
                var h = r._soundById(a[c]);
                if (h)
                    if (typeof t == "number") h._pos = [t, n, i], h._node && ((!h._panner || h._panner.pan) && e(h, "spatial"), typeof h._panner.positionX < "u" ? (h._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime), h._panner.positionY.setValueAtTime(n, Howler.ctx.currentTime), h._panner.positionZ.setValueAtTime(i, Howler.ctx.currentTime)) : h._panner.setPosition(t, n, i)), r._emit("pos", h._id);
                    else return h._pos
            }
            return r
        }, Howl.prototype.orientation = function(t, n, i, s) {
            var r = this;
            if (!r._webAudio) return r;
            if (r._state !== "loaded") return r._queue.push({
                event: "orientation",
                action: function() {
                    r.orientation(t, n, i, s)
                }
            }), r;
            if (n = typeof n != "number" ? r._orientation[1] : n, i = typeof i != "number" ? r._orientation[2] : i, typeof s > "u")
                if (typeof t == "number") r._orientation = [t, n, i];
                else return r._orientation;
            for (var a = r._getSoundIds(s), c = 0; c < a.length; c++) {
                var h = r._soundById(a[c]);
                if (h)
                    if (typeof t == "number") h._orientation = [t, n, i], h._node && (h._panner || (h._pos || (h._pos = r._pos || [0, 0, -.5]), e(h, "spatial")), typeof h._panner.orientationX < "u" ? (h._panner.orientationX.setValueAtTime(t, Howler.ctx.currentTime), h._panner.orientationY.setValueAtTime(n, Howler.ctx.currentTime), h._panner.orientationZ.setValueAtTime(i, Howler.ctx.currentTime)) : h._panner.setOrientation(t, n, i)), r._emit("orientation", h._id);
                    else return h._orientation
            }
            return r
        }, Howl.prototype.pannerAttr = function() {
            var t = this,
                n = arguments,
                i, s, r;
            if (!t._webAudio) return t;
            if (n.length === 0) return t._pannerAttr;
            if (n.length === 1)
                if (typeof n[0] == "object") i = n[0], typeof s > "u" && (i.pannerAttr || (i.pannerAttr = {
                    coneInnerAngle: i.coneInnerAngle,
                    coneOuterAngle: i.coneOuterAngle,
                    coneOuterGain: i.coneOuterGain,
                    distanceModel: i.distanceModel,
                    maxDistance: i.maxDistance,
                    refDistance: i.refDistance,
                    rolloffFactor: i.rolloffFactor,
                    panningModel: i.panningModel
                }), t._pannerAttr = {
                    coneInnerAngle: typeof i.pannerAttr.coneInnerAngle < "u" ? i.pannerAttr.coneInnerAngle : t._coneInnerAngle,
                    coneOuterAngle: typeof i.pannerAttr.coneOuterAngle < "u" ? i.pannerAttr.coneOuterAngle : t._coneOuterAngle,
                    coneOuterGain: typeof i.pannerAttr.coneOuterGain < "u" ? i.pannerAttr.coneOuterGain : t._coneOuterGain,
                    distanceModel: typeof i.pannerAttr.distanceModel < "u" ? i.pannerAttr.distanceModel : t._distanceModel,
                    maxDistance: typeof i.pannerAttr.maxDistance < "u" ? i.pannerAttr.maxDistance : t._maxDistance,
                    refDistance: typeof i.pannerAttr.refDistance < "u" ? i.pannerAttr.refDistance : t._refDistance,
                    rolloffFactor: typeof i.pannerAttr.rolloffFactor < "u" ? i.pannerAttr.rolloffFactor : t._rolloffFactor,
                    panningModel: typeof i.pannerAttr.panningModel < "u" ? i.pannerAttr.panningModel : t._panningModel
                });
                else return r = t._soundById(parseInt(n[0], 10)), r ? r._pannerAttr : t._pannerAttr;
            else n.length === 2 && (i = n[0], s = parseInt(n[1], 10));
            for (var a = t._getSoundIds(s), c = 0; c < a.length; c++)
                if (r = t._soundById(a[c]), r) {
                    var h = r._pannerAttr;
                    h = {
                        coneInnerAngle: typeof i.coneInnerAngle < "u" ? i.coneInnerAngle : h.coneInnerAngle,
                        coneOuterAngle: typeof i.coneOuterAngle < "u" ? i.coneOuterAngle : h.coneOuterAngle,
                        coneOuterGain: typeof i.coneOuterGain < "u" ? i.coneOuterGain : h.coneOuterGain,
                        distanceModel: typeof i.distanceModel < "u" ? i.distanceModel : h.distanceModel,
                        maxDistance: typeof i.maxDistance < "u" ? i.maxDistance : h.maxDistance,
                        refDistance: typeof i.refDistance < "u" ? i.refDistance : h.refDistance,
                        rolloffFactor: typeof i.rolloffFactor < "u" ? i.rolloffFactor : h.rolloffFactor,
                        panningModel: typeof i.panningModel < "u" ? i.panningModel : h.panningModel
                    };
                    var d = r._panner;
                    d ? (d.coneInnerAngle = h.coneInnerAngle, d.coneOuterAngle = h.coneOuterAngle, d.coneOuterGain = h.coneOuterGain, d.distanceModel = h.distanceModel, d.maxDistance = h.maxDistance, d.refDistance = h.refDistance, d.rolloffFactor = h.rolloffFactor, d.panningModel = h.panningModel) : (r._pos || (r._pos = t._pos || [0, 0, -.5]), e(r, "spatial"))
                }
            return t
        }, Sound.prototype.init = function(t) {
            return function() {
                var n = this,
                    i = n._parent;
                n._orientation = i._orientation, n._stereo = i._stereo, n._pos = i._pos, n._pannerAttr = i._pannerAttr, t.call(this), n._stereo ? i.stereo(n._stereo) : n._pos && i.pos(n._pos[0], n._pos[1], n._pos[2], n._id)
            }
        }(Sound.prototype.init), Sound.prototype.reset = function(t) {
            return function() {
                var n = this,
                    i = n._parent;
                return n._orientation = i._orientation, n._stereo = i._stereo, n._pos = i._pos, n._pannerAttr = i._pannerAttr, n._stereo ? i.stereo(n._stereo) : n._pos ? i.pos(n._pos[0], n._pos[1], n._pos[2], n._id) : n._panner && (n._panner.disconnect(0), n._panner = void 0, i._refreshBuffer(n)), t.call(this)
            }
        }(Sound.prototype.reset);
        var e = function(t, n) {
            n = n || "spatial", n === "spatial" ? (t._panner = Howler.ctx.createPanner(), t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle, t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle, t._panner.coneOuterGain = t._pannerAttr.coneOuterGain, t._panner.distanceModel = t._pannerAttr.distanceModel, t._panner.maxDistance = t._pannerAttr.maxDistance, t._panner.refDistance = t._pannerAttr.refDistance, t._panner.rolloffFactor = t._pannerAttr.rolloffFactor, t._panner.panningModel = t._pannerAttr.panningModel, typeof t._panner.positionX < "u" ? (t._panner.positionX.setValueAtTime(t._pos[0], Howler.ctx.currentTime), t._panner.positionY.setValueAtTime(t._pos[1], Howler.ctx.currentTime), t._panner.positionZ.setValueAtTime(t._pos[2], Howler.ctx.currentTime)) : t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]), typeof t._panner.orientationX < "u" ? (t._panner.orientationX.setValueAtTime(t._orientation[0], Howler.ctx.currentTime), t._panner.orientationY.setValueAtTime(t._orientation[1], Howler.ctx.currentTime), t._panner.orientationZ.setValueAtTime(t._orientation[2], Howler.ctx.currentTime)) : t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(), t._panner.pan.setValueAtTime(t._stereo, Howler.ctx.currentTime)), t._panner.connect(t._node), t._paused || t._parent.pause(t._id, !0).play(t._id, !0)
        }
    })()
})(Ni);
class EM {
    constructor() {
        he(this, "items", [{
            name: "mouseWheel",
            files: ["/sounds/mouse-wheel-0.mp3", "/sounds/mouse-wheel-1.mp3", "/sounds/mouse-wheel-2.mp3"],
            group: "landing",
            volume: .6
        }, {
            name: "bubble",
            files: ["/sounds/bubble-0.mp3", "/sounds/bubble-1.mp3", "/sounds/bubble-2.mp3"],
            group: "lab",
            volume: .2
        }, {
            name: "roomAmbience",
            files: ["/sounds/room-ambience.mp3"],
            group: "landing",
            volume: .1,
            html5: !0
        }, {
            name: "notification",
            files: ["/sounds/notification.mp3"],
            group: "landing",
            volume: .25
        }, {
            name: "longKeyboard",
            files: ["/sounds/long-keyboard.mp3"],
            group: "landing",
            volume: .5
        }, {
            name: "labAmbience",
            files: ["/sounds/lab-ambience.mp3"],
            group: "lab",
            volume: .15
        }, {
            name: "waterSplash",
            files: ["/sounds/water-splash.mp3"],
            group: "lab",
            volume: .3
        }, {
            name: "hologram",
            files: ["/sounds/hologram.mp3"],
            group: "lab",
            volume: .8
        }, {
            name: "transition0",
            files: ["sounds/transition-0.mp3"],
            group: "general",
            volume: .3
        }, {
            name: "transition1",
            files: ["sounds/transition-1.mp3"],
            group: "general",
            volume: .3
        }, {
            name: "waterUp",
            files: ["/sounds/water-up.mp3"],
            group: "general",
            volume: .5
        }, {
            name: "gasp",
            files: ["/sounds/gasp.mp3"],
            group: "general",
            volume: .2
        }, {
            name: "buttonClick",
            files: ["/sounds/button-click.mp3"],
            group: "general",
            volume: 1
        }, {
            name: "chairDown",
            files: ["/sounds/chair-down.mp3"],
            group: "landing",
            volume: .4
        }, {
            name: "chairImpact",
            files: ["/sounds/chair-impact.mp3"],
            group: "landing",
            volume: 1
        }, {
            name: "bird",
            files: ["/sounds/bird.mp3"],
            group: "landing",
            volume: .6
        }]);
        this.experience = new ye, this.active = !1, this.setMute(), this.setMasterVolume(), this.setupSounds(), document.addEventListener("visibilitychange", () => this.pauseAll(document.hidden)), this.setRoomAmbience(), this.setLabAmbience()
    }
    setRoomAmbience() {
        this.roomAmbience = this.items.find(e => e.name === "roomAmbience").howls[0], this.roomAmbience._loop = !0, this.roomAmbience.name = "roomAmbience"
    }
    playRoomAmbience() {
        this.roomAmbiencePlaying || (this.roomAmbiencePlaying = !0, this.roomAmbience.play())
    }
    setLabAmbience() {
        this.labAmbience = this.items.find(e => e.name === "labAmbience").howls[0], this.labAmbience._loop = !0, this.labAmbience._volume = 0, this.labAmbience.name = "labAmbience", this.labAmbience.play()
    }
    labAmbienceScroll(e) {
        if (this.active) {
            let t = e === "recent" ? this.labAmbience.recentVolumePercentage : 1 - e;
            t < 0 && (t = 0), this.labAmbience.recentVolumePercentage = t, this.items.forEach(n => {
                n.group === "lab" && n.howls.forEach(i => {
                    P.to(i, {
                        volume: n.volume * t,
                        duration: .2
                    })
                })
            })
        }
    }
    setupSounds() {
        this.items.forEach(e => {
            e.howls = [], e.files.forEach(t => {
                e.howls.push(new Ni.Howl({
                    src: t,
                    volume: e.volume,
                    html5: e.html5 ? e.html5 : !1
                }))
            })
        })
    }
    pauseAll(e) {
        this.items.forEach(t => {
            t.howls.forEach(n => {
                t.name != "labAmbience" && t.name != "roomAmbience" && (e ? n.pause() : n.seek() != 0 && n.seek() != n.duration() && n.play())
            })
        })
    }
    muteGroup(e, t) {
        this.items.forEach(n => {
            n.group === e && n.howls.forEach(i => {
                P.to(i, {
                    volume: t ? 0 : n.volume,
                    duration: 1
                }), i.name === "roomAmbience" && this.roomFadeTween && this.roomFadeTween.kill(), t && P.delayedCall(1, () => {
                    i.name !== "labAmbience" && i.name !== "roomAmbience" && i.stop()
                })
            })
        })
    }
    play(e) {
        const t = this.items.find(n => n.name === e);
        this.active && (!this.experience.sizes.touch || e != "buttonClick") && t.howls[Math.floor(Math.random() * t.howls.length)].play()
    }
    mute(e) {
        this.active = !e, Ni.Howler.mute(e)
    }
    setMute() {
        document.addEventListener("visibilitychange", () => {
            this.active && document.hidden ? Ni.Howler.mute(!0) : this.active && !document.hidden && Ni.Howler.mute(!1)
        })
    }
    setMasterVolume() {
        this.masterVolume = .5, Ni.Howler.volume(this.masterVolume), window.requestAnimationFrame(() => {
            Ni.Howler.volume(this.masterVolume)
        })
    }
}
class AM {
    constructor() {
        he(this, "objects", []);
        he(this, "pointer", {
            x: 0,
            y: 0
        });
        this.experience = new ye, this.resources = this.experience.resources, this.camera = this.experience.camera, this.scene = this.experience.scene, this.resources.on("ready", () => {
            this.instance = new wv, this.hoverIcon = this.experience.ui.hoverIcon, this.scene.traverse(e => {
                (e.onHover || e.onClick) && this.objects.push(e)
            }), this.hoverIcon.on("move", () => {
                this.positionTriggered = !1, this.pointer.x = event.clientX / window.innerWidth * 2 - 1, this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
            }), window.addEventListener("click", () => {
                this.positionTriggered = !1, this.triggerClick = !0
            })
        })
    }
    update() {
        if (this.instance && this.hoverIcon && this.pointer.x != 0 && !this.positionTriggered) {
            this.positionTriggered = !0, this.instance.setFromCamera(this.pointer, this.camera.instance);
            const e = this.instance.intersectObjects(this.objects);
            e.length == 0 ? (this.hoverIcon.setupDefault(), this.intersect = null, this.isHovering = !1, this.triggerClick = !1) : (this.intersect = e[0], this.intersect.object.onHover && this.intersect.object.onHover(), this.isHovering = this.intersect.object.hoverIcon, this.intersect.object.hoverIcon && this.intersect.object.hoverIcon == "pointer" && this.hoverIcon.setupPointer(), this.triggerClick && this.intersect.object.onClick && this.intersect.object.onClick(), this.triggerClick = !1)
        }
    }
}
let xl = null;
class ye {
    constructor(e) {
        if (xl) return xl;
        xl = this, this.canvas = e, this.gestures = new SM, this.sounds = new EM, this.sizes = new Av, this.time = new Cv, this.scene = new lc, this.resources = new eM(tM), this.camera = new Lv, this.waypoints = new TM, this.renderer = new Rv, this.world = new ww, this.ui = new MM, this.raycaster = new AM, this.sizes.on("resize", () => {
            this.resize()
        }), this.time.on("tick", () => {
            this.update()
        })
    }
    resize() {
        this.camera.resize(), this.renderer.resize(), this.ui.resize()
    }
    update() {
        this.camera.update(), this.world.update(), this.renderer.update(), this.raycaster.update(), this.ui.update()
    }
}
new ye(document.getElementById("main-canvas"));

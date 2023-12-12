(self.webpackChunkapp_BTCETF = self.webpackChunkapp_BTCETF || []).push([
    [234], {
        5972: (ot, B, ie) => {
            "use strict";
            B.Xx = B._w = B.aP = B.KS = B.jQ = void 0;
            ie(5465);
            const je = ie(6713);
            ie(3403);

            function ge(ne) {
                const oe = new Float64Array(16);
                if (ne)
                    for (let ee = 0; ee < ne.length; ee++) oe[ee] = ne[ee];
                return oe
            }
            B.jQ = 64, B.KS = 64, B.aP = 32, new Uint8Array(32)[0] = 9;
            const ke = ge(),
                Oe = ge([1]),
                q = (ge([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), ge([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                Pe = ge([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                Te = ge([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);
            ge([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function Ne(ne, oe) {
                for (let ee = 0; ee < 16; ee++) ne[ee] = 0 | oe[ee]
            }

            function We(ne) {
                let oe = 1;
                for (let ee = 0; ee < 16; ee++) {
                    let h = ne[ee] + oe + 65535;
                    oe = Math.floor(h / 65536), ne[ee] = h - 65536 * oe
                }
                ne[0] += oe - 1 + 37 * (oe - 1)
            }

            function He(ne, oe, ee) {
                const h = ~(ee - 1);
                for (let V = 0; V < 16; V++) {
                    const ze = h & (ne[V] ^ oe[V]);
                    ne[V] ^= ze, oe[V] ^= ze
                }
            }

            function Xe(ne, oe) {
                const ee = ge(),
                    h = ge();
                for (let V = 0; V < 16; V++) h[V] = oe[V];
                We(h), We(h), We(h);
                for (let V = 0; V < 2; V++) {
                    ee[0] = h[0] - 65517;
                    for (let rt = 1; rt < 15; rt++) ee[rt] = h[rt] - 65535 - (ee[rt - 1] >> 16 & 1), ee[rt - 1] &= 65535;
                    ee[15] = h[15] - 32767 - (ee[14] >> 16 & 1);
                    const ze = ee[15] >> 16 & 1;
                    ee[14] &= 65535, He(h, ee, 1 - ze)
                }
                for (let V = 0; V < 16; V++) ne[2 * V] = 255 & h[V], ne[2 * V + 1] = h[V] >> 8
            }

            function g(ne) {
                const oe = new Uint8Array(32);
                return Xe(oe, ne), 1 & oe[0]
            }

            function S(ne, oe, ee) {
                for (let h = 0; h < 16; h++) ne[h] = oe[h] + ee[h]
            }

            function k(ne, oe, ee) {
                for (let h = 0; h < 16; h++) ne[h] = oe[h] - ee[h]
            }

            function $(ne, oe, ee) {
                let h, V, ze = 0,
                    rt = 0,
                    yt = 0,
                    Ut = 0,
                    Et = 0,
                    Nt = 0,
                    Qt = 0,
                    Ir = 0,
                    cr = 0,
                    ur = 0,
                    Yt = 0,
                    Zt = 0,
                    Ht = 0,
                    At = 0,
                    Rt = 0,
                    Tt = 0,
                    xt = 0,
                    vt = 0,
                    Xt = 0,
                    Tr = 0,
                    xr = 0,
                    lr = 0,
                    Kr = 0,
                    qr = 0,
                    nn = 0,
                    er = 0,
                    zr = 0,
                    Zr = 0,
                    Vi = 0,
                    ai = 0,
                    ci = 0,
                    tr = ee[0],
                    Vt = ee[1],
                    Gt = ee[2],
                    Mt = ee[3],
                    fr = ee[4],
                    dr = ee[5],
                    hr = ee[6],
                    ir = ee[7],
                    pr = ee[8],
                    Ct = ee[9],
                    Wt = ee[10],
                    Lt = ee[11],
                    _r = ee[12],
                    gr = ee[13],
                    yr = ee[14],
                    sr = ee[15];
                h = oe[0], ze += h * tr, rt += h * Vt, yt += h * Gt, Ut += h * Mt, Et += h * fr, Nt += h * dr, Qt += h * hr, Ir += h * ir, cr += h * pr, ur += h * Ct, Yt += h * Wt, Zt += h * Lt, Ht += h * _r, At += h * gr, Rt += h * yr, Tt += h * sr, h = oe[1], rt += h * tr, yt += h * Vt, Ut += h * Gt, Et += h * Mt, Nt += h * fr, Qt += h * dr, Ir += h * hr, cr += h * ir, ur += h * pr, Yt += h * Ct, Zt += h * Wt, Ht += h * Lt, At += h * _r, Rt += h * gr, Tt += h * yr, xt += h * sr, h = oe[2], yt += h * tr, Ut += h * Vt, Et += h * Gt, Nt += h * Mt, Qt += h * fr, Ir += h * dr, cr += h * hr, ur += h * ir, Yt += h * pr, Zt += h * Ct, Ht += h * Wt, At += h * Lt, Rt += h * _r, Tt += h * gr, xt += h * yr, vt += h * sr, h = oe[3], Ut += h * tr, Et += h * Vt, Nt += h * Gt, Qt += h * Mt, Ir += h * fr, cr += h * dr, ur += h * hr, Yt += h * ir, Zt += h * pr, Ht += h * Ct, At += h * Wt, Rt += h * Lt, Tt += h * _r, xt += h * gr, vt += h * yr, Xt += h * sr, h = oe[4], Et += h * tr, Nt += h * Vt, Qt += h * Gt, Ir += h * Mt, cr += h * fr, ur += h * dr, Yt += h * hr, Zt += h * ir, Ht += h * pr, At += h * Ct, Rt += h * Wt, Tt += h * Lt, xt += h * _r, vt += h * gr, Xt += h * yr, Tr += h * sr, h = oe[5], Nt += h * tr, Qt += h * Vt, Ir += h * Gt, cr += h * Mt, ur += h * fr, Yt += h * dr, Zt += h * hr, Ht += h * ir, At += h * pr, Rt += h * Ct, Tt += h * Wt, xt += h * Lt, vt += h * _r, Xt += h * gr, Tr += h * yr, xr += h * sr, h = oe[6], Qt += h * tr, Ir += h * Vt, cr += h * Gt, ur += h * Mt, Yt += h * fr, Zt += h * dr, Ht += h * hr, At += h * ir, Rt += h * pr, Tt += h * Ct, xt += h * Wt, vt += h * Lt, Xt += h * _r, Tr += h * gr, xr += h * yr, lr += h * sr, h = oe[7], Ir += h * tr, cr += h * Vt, ur += h * Gt, Yt += h * Mt, Zt += h * fr, Ht += h * dr, At += h * hr, Rt += h * ir, Tt += h * pr, xt += h * Ct, vt += h * Wt, Xt += h * Lt, Tr += h * _r, xr += h * gr, lr += h * yr, Kr += h * sr, h = oe[8], cr += h * tr, ur += h * Vt, Yt += h * Gt, Zt += h * Mt, Ht += h * fr, At += h * dr, Rt += h * hr, Tt += h * ir, xt += h * pr, vt += h * Ct, Xt += h * Wt, Tr += h * Lt, xr += h * _r, lr += h * gr, Kr += h * yr, qr += h * sr, h = oe[9], ur += h * tr, Yt += h * Vt, Zt += h * Gt, Ht += h * Mt, At += h * fr, Rt += h * dr, Tt += h * hr, xt += h * ir, vt += h * pr, Xt += h * Ct, Tr += h * Wt, xr += h * Lt, lr += h * _r, Kr += h * gr, qr += h * yr, nn += h * sr, h = oe[10], Yt += h * tr, Zt += h * Vt, Ht += h * Gt, At += h * Mt, Rt += h * fr, Tt += h * dr, xt += h * hr, vt += h * ir, Xt += h * pr, Tr += h * Ct, xr += h * Wt, lr += h * Lt, Kr += h * _r, qr += h * gr, nn += h * yr, er += h * sr, h = oe[11], Zt += h * tr, Ht += h * Vt, At += h * Gt, Rt += h * Mt, Tt += h * fr, xt += h * dr, vt += h * hr, Xt += h * ir, Tr += h * pr, xr += h * Ct, lr += h * Wt, Kr += h * Lt, qr += h * _r, nn += h * gr, er += h * yr, zr += h * sr, h = oe[12], Ht += h * tr, At += h * Vt, Rt += h * Gt, Tt += h * Mt, xt += h * fr, vt += h * dr, Xt += h * hr, Tr += h * ir, xr += h * pr, lr += h * Ct, Kr += h * Wt, qr += h * Lt, nn += h * _r, er += h * gr, zr += h * yr, Zr += h * sr, h = oe[13], At += h * tr, Rt += h * Vt, Tt += h * Gt, xt += h * Mt, vt += h * fr, Xt += h * dr, Tr += h * hr, xr += h * ir, lr += h * pr, Kr += h * Ct, qr += h * Wt, nn += h * Lt, er += h * _r, zr += h * gr, Zr += h * yr, Vi += h * sr, h = oe[14], Rt += h * tr, Tt += h * Vt, xt += h * Gt, vt += h * Mt, Xt += h * fr, Tr += h * dr, xr += h * hr, lr += h * ir, Kr += h * pr, qr += h * Ct, nn += h * Wt, er += h * Lt, zr += h * _r, Zr += h * gr, Vi += h * yr, ai += h * sr, h = oe[15], Tt += h * tr, xt += h * Vt, vt += h * Gt, Xt += h * Mt, Tr += h * fr, xr += h * dr, lr += h * hr, Kr += h * ir, qr += h * pr, nn += h * Ct, er += h * Wt, zr += h * Lt, Zr += h * _r, Vi += h * gr, ai += h * yr, ci += h * sr, ze += 38 * xt, rt += 38 * vt, yt += 38 * Xt, Ut += 38 * Tr, Et += 38 * xr, Nt += 38 * lr, Qt += 38 * Kr, Ir += 38 * qr, cr += 38 * nn, ur += 38 * er, Yt += 38 * zr, Zt += 38 * Zr, Ht += 38 * Vi, At += 38 * ai, Rt += 38 * ci, V = 1, h = ze + V + 65535, V = Math.floor(h / 65536), ze = h - 65536 * V, h = rt + V + 65535, V = Math.floor(h / 65536), rt = h - 65536 * V, h = yt + V + 65535, V = Math.floor(h / 65536), yt = h - 65536 * V, h = Ut + V + 65535, V = Math.floor(h / 65536), Ut = h - 65536 * V, h = Et + V + 65535, V = Math.floor(h / 65536), Et = h - 65536 * V, h = Nt + V + 65535, V = Math.floor(h / 65536), Nt = h - 65536 * V, h = Qt + V + 65535, V = Math.floor(h / 65536), Qt = h - 65536 * V, h = Ir + V + 65535, V = Math.floor(h / 65536), Ir = h - 65536 * V, h = cr + V + 65535, V = Math.floor(h / 65536), cr = h - 65536 * V, h = ur + V + 65535, V = Math.floor(h / 65536), ur = h - 65536 * V, h = Yt + V + 65535, V = Math.floor(h / 65536), Yt = h - 65536 * V, h = Zt + V + 65535, V = Math.floor(h / 65536), Zt = h - 65536 * V, h = Ht + V + 65535, V = Math.floor(h / 65536), Ht = h - 65536 * V, h = At + V + 65535, V = Math.floor(h / 65536), At = h - 65536 * V, h = Rt + V + 65535, V = Math.floor(h / 65536), Rt = h - 65536 * V, h = Tt + V + 65535, V = Math.floor(h / 65536), Tt = h - 65536 * V, ze += V - 1 + 37 * (V - 1), V = 1, h = ze + V + 65535, V = Math.floor(h / 65536), ze = h - 65536 * V, h = rt + V + 65535, V = Math.floor(h / 65536), rt = h - 65536 * V, h = yt + V + 65535, V = Math.floor(h / 65536), yt = h - 65536 * V, h = Ut + V + 65535, V = Math.floor(h / 65536), Ut = h - 65536 * V, h = Et + V + 65535, V = Math.floor(h / 65536), Et = h - 65536 * V, h = Nt + V + 65535, V = Math.floor(h / 65536), Nt = h - 65536 * V, h = Qt + V + 65535, V = Math.floor(h / 65536), Qt = h - 65536 * V, h = Ir + V + 65535, V = Math.floor(h / 65536), Ir = h - 65536 * V, h = cr + V + 65535, V = Math.floor(h / 65536), cr = h - 65536 * V, h = ur + V + 65535, V = Math.floor(h / 65536), ur = h - 65536 * V, h = Yt + V + 65535, V = Math.floor(h / 65536), Yt = h - 65536 * V, h = Zt + V + 65535, V = Math.floor(h / 65536), Zt = h - 65536 * V, h = Ht + V + 65535, V = Math.floor(h / 65536), Ht = h - 65536 * V, h = At + V + 65535, V = Math.floor(h / 65536), At = h - 65536 * V, h = Rt + V + 65535, V = Math.floor(h / 65536), Rt = h - 65536 * V, h = Tt + V + 65535, V = Math.floor(h / 65536), Tt = h - 65536 * V, ze += V - 1 + 37 * (V - 1), ne[0] = ze, ne[1] = rt, ne[2] = yt, ne[3] = Ut, ne[4] = Et, ne[5] = Nt, ne[6] = Qt, ne[7] = Ir, ne[8] = cr, ne[9] = ur, ne[10] = Yt, ne[11] = Zt, ne[12] = Ht, ne[13] = At, ne[14] = Rt, ne[15] = Tt
            }

            function y(ne, oe) {
                $(ne, oe, oe)
            }

            function z(ne, oe) {
                const ee = ge(),
                    h = ge(),
                    V = ge(),
                    ze = ge(),
                    rt = ge(),
                    yt = ge(),
                    Ut = ge(),
                    Et = ge(),
                    Nt = ge();
                k(ee, ne[1], ne[0]), k(Nt, oe[1], oe[0]), $(ee, ee, Nt), S(h, ne[0], ne[1]), S(Nt, oe[0], oe[1]), $(h, h, Nt), $(V, ne[3], oe[3]), $(V, V, q), $(ze, ne[2], oe[2]), S(ze, ze, ze), k(rt, h, ee), k(yt, ze, V), S(Ut, ze, V), S(Et, h, ee), $(ne[0], rt, yt), $(ne[1], Et, Ut), $(ne[2], Ut, yt), $(ne[3], rt, Et)
            }

            function N(ne, oe, ee) {
                for (let h = 0; h < 4; h++) He(ne[h], oe[h], ee)
            }

            function x(ne, oe) {
                const ee = ge(),
                    h = ge(),
                    V = ge();
                (function j(ne, oe) {
                    const ee = ge();
                    let h;
                    for (h = 0; h < 16; h++) ee[h] = oe[h];
                    for (h = 253; h >= 0; h--) y(ee, ee), 2 !== h && 4 !== h && $(ee, ee, oe);
                    for (h = 0; h < 16; h++) ne[h] = ee[h]
                })(V, oe[2]), $(ee, oe[0], V), $(h, oe[1], V), Xe(ne, h), ne[31] ^= g(ee) << 7
            }

            function ce(ne, oe) {
                const ee = [ge(), ge(), ge(), ge()];
                Ne(ee[0], Pe), Ne(ee[1], Te), Ne(ee[2], Oe), $(ee[3], Pe, Te),
                    function D(ne, oe, ee) {
                        Ne(ne[0], ke), Ne(ne[1], Oe), Ne(ne[2], Oe), Ne(ne[3], ke);
                        for (let h = 255; h >= 0; --h) {
                            const V = ee[h / 8 | 0] >> (7 & h) & 1;
                            N(ne, oe, V), z(oe, ne), z(ne, ne), N(ne, oe, V)
                        }
                    }(ne, ee, oe)
            }
            B._w = function De(ne) {
                if (ne.length !== B.aP) throw new Error(`ed25519: seed must be ${B.aP} bytes`);
                const oe = (0, je.hash)(ne);
                oe[0] &= 248, oe[31] &= 127, oe[31] |= 64;
                const ee = new Uint8Array(32),
                    h = [ge(), ge(), ge(), ge()];
                ce(h, oe), x(ee, h);
                const V = new Uint8Array(64);
                return V.set(ne), V.set(ee, 32), {
                    publicKey: ee,
                    secretKey: V
                }
            };
            const ve = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function re(ne, oe) {
                let ee, h, V, ze;
                for (h = 63; h >= 32; --h) {
                    for (ee = 0, V = h - 32, ze = h - 12; V < ze; ++V) oe[V] += ee - 16 * oe[h] * ve[V - (h - 32)], ee = Math.floor((oe[V] + 128) / 256), oe[V] -= 256 * ee;
                    oe[V] += ee, oe[h] = 0
                }
                for (ee = 0, V = 0; V < 32; V++) oe[V] += ee - (oe[31] >> 4) * ve[V], ee = oe[V] >> 8, oe[V] &= 255;
                for (V = 0; V < 32; V++) oe[V] -= ee * ve[V];
                for (h = 0; h < 32; h++) oe[h + 1] += oe[h] >> 8, ne[h] = 255 & oe[h]
            }

            function Qe(ne) {
                const oe = new Float64Array(64);
                for (let ee = 0; ee < 64; ee++) oe[ee] = ne[ee];
                for (let ee = 0; ee < 64; ee++) ne[ee] = 0;
                re(ne, oe)
            }
            B.Xx = function ft(ne, oe) {
                const ee = new Float64Array(64),
                    h = [ge(), ge(), ge(), ge()],
                    V = (0, je.hash)(ne.subarray(0, 32));
                V[0] &= 248, V[31] &= 127, V[31] |= 64;
                const ze = new Uint8Array(64);
                ze.set(V.subarray(32), 32);
                const rt = new je.SHA512;
                rt.update(ze.subarray(32)), rt.update(oe);
                const yt = rt.digest();
                rt.clean(), Qe(yt), ce(h, yt), x(ze, h), rt.reset(), rt.update(ze.subarray(0, 32)), rt.update(ne.subarray(32)), rt.update(oe);
                const Ut = rt.digest();
                Qe(Ut);
                for (let Et = 0; Et < 32; Et++) ee[Et] = yt[Et];
                for (let Et = 0; Et < 32; Et++)
                    for (let Nt = 0; Nt < 32; Nt++) ee[Et + Nt] += Ut[Et] * V[Nt];
                return re(ze.subarray(32), ee), ze
            }
        },
        6713: (ot, B, ie) => {
            "use strict";
            Object.defineProperty(B, "__esModule", {
                value: !0
            });
            var O = ie(9546),
                Ae = ie(3403);
            B.DIGEST_LENGTH = 64, B.BLOCK_SIZE = 128;
            var je = function() {
                function ke() {
                    this.digestLength = B.DIGEST_LENGTH, this.blockSize = B.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return ke.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, ke.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, ke.prototype.clean = function() {
                    Ae.wipe(this._buffer), Ae.wipe(this._tempHi), Ae.wipe(this._tempLo), this.reset()
                }, ke.prototype.update = function(Oe, se) {
                    if (void 0 === se && (se = Oe.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
                    var q = 0;
                    if (this._bytesHashed += se, this._bufferLength > 0) {
                        for (; this._bufferLength < B.BLOCK_SIZE && se > 0;) this._buffer[this._bufferLength++] = Oe[q++], se--;
                        this._bufferLength === this.blockSize && (ge(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (se >= this.blockSize && (q = ge(this._tempHi, this._tempLo, this._stateHi, this._stateLo, Oe, q, se), se %= this.blockSize); se > 0;) this._buffer[this._bufferLength++] = Oe[q++], se--;
                    return this
                }, ke.prototype.finish = function(Oe) {
                    if (!this._finished) {
                        var se = this._bytesHashed,
                            q = this._bufferLength,
                            Pe = se / 536870912 | 0,
                            Te = se << 3,
                            Me = se % 128 < 112 ? 128 : 256;
                        this._buffer[q] = 128;
                        for (var Ne = q + 1; Ne < Me - 8; Ne++) this._buffer[Ne] = 0;
                        O.writeUint32BE(Pe, this._buffer, Me - 8), O.writeUint32BE(Te, this._buffer, Me - 4), ge(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, Me), this._finished = !0
                    }
                    for (Ne = 0; Ne < this.digestLength / 8; Ne++) O.writeUint32BE(this._stateHi[Ne], Oe, 8 * Ne), O.writeUint32BE(this._stateLo[Ne], Oe, 8 * Ne + 4);
                    return this
                }, ke.prototype.digest = function() {
                    var Oe = new Uint8Array(this.digestLength);
                    return this.finish(Oe), Oe
                }, ke.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, ke.prototype.restoreState = function(Oe) {
                    return this._stateHi.set(Oe.stateHi), this._stateLo.set(Oe.stateLo), this._bufferLength = Oe.bufferLength, Oe.buffer && this._buffer.set(Oe.buffer), this._bytesHashed = Oe.bytesHashed, this._finished = !1, this
                }, ke.prototype.cleanSavedState = function(Oe) {
                    Ae.wipe(Oe.stateHi), Ae.wipe(Oe.stateLo), Oe.buffer && Ae.wipe(Oe.buffer), Oe.bufferLength = 0, Oe.bytesHashed = 0
                }, ke
            }();
            B.SHA512 = je;
            var Le = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function ge(ke, Oe, se, q, Pe, Te, Me) {
                for (var x, D, ce, De, H, _e, ve, re, Ne = se[0], We = se[1], He = se[2], Xe = se[3], p = se[4], _ = se[5], g = se[6], b = se[7], S = q[0], k = q[1], $ = q[2], y = q[3], j = q[4], T = q[5], z = q[6], N = q[7]; Me >= 128;) {
                    for (var Qe = 0; Qe < 16; Qe++) ke[Qe] = O.readUint32BE(Pe, ft = 8 * Qe + Te), Oe[Qe] = O.readUint32BE(Pe, ft + 4);
                    for (Qe = 0; Qe < 80; Qe++) {
                        var h, Qt, $n = We,
                            Un = He,
                            Pt = Xe,
                            ne = p,
                            oe = _,
                            ee = g,
                            ze = k,
                            rt = $,
                            yt = y,
                            Ut = j,
                            Et = T,
                            Nt = z;
                        if (H = 65535 & (D = N), _e = D >>> 16, ve = 65535 & (x = b), re = x >>> 16, H += 65535 & (D = (j >>> 14 | p << 18) ^ (j >>> 18 | p << 14) ^ (p >>> 9 | j << 23)), _e += D >>> 16, ve += 65535 & (x = (p >>> 14 | j << 18) ^ (p >>> 18 | j << 14) ^ (j >>> 9 | p << 23)), re += x >>> 16, H += 65535 & (D = j & T ^ ~j & z), _e += D >>> 16, ve += 65535 & (x = p & _ ^ ~p & g), re += x >>> 16, H += 65535 & (D = Le[2 * Qe + 1]), _e += D >>> 16, ve += 65535 & (x = Le[2 * Qe]), re += x >>> 16, _e += (D = Oe[Qe % 16]) >>> 16, ve += 65535 & (x = ke[Qe % 16]), re += x >>> 16, ve += (_e += (H += 65535 & D) >>> 16) >>> 16, H = 65535 & (D = De = 65535 & H | _e << 16), _e = D >>> 16, ve = 65535 & (x = ce = 65535 & ve | (re += ve >>> 16) << 16), re = x >>> 16, H += 65535 & (D = (S >>> 28 | Ne << 4) ^ (Ne >>> 2 | S << 30) ^ (Ne >>> 7 | S << 25)), _e += D >>> 16, ve += 65535 & (x = (Ne >>> 28 | S << 4) ^ (S >>> 2 | Ne << 30) ^ (S >>> 7 | Ne << 25)), re += x >>> 16, _e += (D = S & k ^ S & $ ^ k & $) >>> 16, ve += 65535 & (x = Ne & We ^ Ne & He ^ We & He), re += x >>> 16, h = 65535 & (ve += (_e += (H += 65535 & D) >>> 16) >>> 16) | (re += ve >>> 16) << 16, Qt = 65535 & H | _e << 16, H = 65535 & (D = yt), _e = D >>> 16, ve = 65535 & (x = Pt), re = x >>> 16, _e += (D = De) >>> 16, ve += 65535 & (x = ce), re += x >>> 16, We = Ne, He = $n, Xe = Un, p = Pt = 65535 & (ve += (_e += (H += 65535 & D) >>> 16) >>> 16) | (re += ve >>> 16) << 16, _ = ne, g = oe, b = ee, Ne = h, k = S, $ = ze, y = rt, j = yt = 65535 & H | _e << 16, T = Ut, z = Et, N = Nt, S = Qt, Qe % 16 == 15)
                            for (var ft = 0; ft < 16; ft++) H = 65535 & (D = Oe[ft]), _e = D >>> 16, ve = 65535 & (x = ke[ft]), re = x >>> 16, H += 65535 & (D = Oe[(ft + 9) % 16]), _e += D >>> 16, ve += 65535 & (x = ke[(ft + 9) % 16]), re += x >>> 16, H += 65535 & (D = ((De = Oe[(ft + 1) % 16]) >>> 1 | (ce = ke[(ft + 1) % 16]) << 31) ^ (De >>> 8 | ce << 24) ^ (De >>> 7 | ce << 25)), _e += D >>> 16, ve += 65535 & (x = (ce >>> 1 | De << 31) ^ (ce >>> 8 | De << 24) ^ ce >>> 7), re += x >>> 16, _e += (D = ((De = Oe[(ft + 14) % 16]) >>> 19 | (ce = ke[(ft + 14) % 16]) << 13) ^ (ce >>> 29 | De << 3) ^ (De >>> 6 | ce << 26)) >>> 16, ve += 65535 & (x = (ce >>> 19 | De << 13) ^ (De >>> 29 | ce << 3) ^ ce >>> 6), re += x >>> 16, ke[ft] = 65535 & (ve += (_e += (H += 65535 & D) >>> 16) >>> 16) | (re += ve >>> 16) << 16, Oe[ft] = 65535 & H | _e << 16
                    }
                    H = 65535 & (D = S), _e = D >>> 16, ve = 65535 & (x = Ne), re = x >>> 16, _e += (D = q[0]) >>> 16, ve += 65535 & (x = se[0]), re += x >>> 16, se[0] = Ne = 65535 & (ve += (_e += (H += 65535 & D) >>> 16) >>> 16) | (re += ve >>> 16) << 16, q[0] = S = 65535 & H | _e << 16, H = 65535 & (D = k), _e = D >>> 16, ve = 65535 & (x = We), re = x >>> 16, _e += (D = q[1]) >>> 16, ve += 65535 & (x = se[1]), re += x >>> 16, se[1] = We = 65535 & (ve += (_e += (H += 65535 & D) >>> 16) >>> 16) | (re += ve >>> 16) << 16, q[1] = k = 65535 & H | _e << 16, H = 65535 & (D = $), _e = D >>> 16, ve = 65535 & (x = He), re = x >>> 16, _e += (D = q[2]) >>> 16, ve += 65535 & (x = se[2]), re += x >>> 16, se[2] = He = 65535 & (ve += (_e += (H += 65535 & D) >>> 16) >>> 16) | (re += ve >>> 16) << 16, q[2] = $ = 65535 & H | _e << 16, H = 65535 & (D = y), _e = D >>> 16, ve = 65535 & (x = Xe), re = x >>> 16, _e += (D = q[3]) >>> 16, ve += 65535 & (x = se[3]), re += x >>> 16, se[3] = Xe = 65535 & (ve += (_e += (H += 65535 & D) >>> 16) >>> 16) | (re += ve >>> 16) << 16, q[3] = y = 65535 & H | _e << 16, H = 65535 & (D = j), _e = D >>> 16, ve = 65535 & (x = p), re = x >>> 16, _e += (D = q[4]) >>> 16, ve += 65535 & (x = se[4]), re += x >>> 16, se[4] = p = 65535 & (ve += (_e += (H += 65535 & D) >>> 16) >>> 16) | (re += ve >>> 16) << 16, q[4] = j = 65535 & H | _e << 16, H = 65535 & (D = T), _e = D >>> 16, ve = 65535 & (x = _), re = x >>> 16, _e += (D = q[5]) >>> 16, ve += 65535 & (x = se[5]), re += x >>> 16, se[5] = _ = 65535 & (ve += (_e += (H += 65535 & D) >>> 16) >>> 16) | (re += ve >>> 16) << 16, q[5] = T = 65535 & H | _e << 16, H = 65535 & (D = z), _e = D >>> 16, ve = 65535 & (x = g), re = x >>> 16, _e += (D = q[6]) >>> 16, ve += 65535 & (x = se[6]), re += x >>> 16, se[6] = g = 65535 & (ve += (_e += (H += 65535 & D) >>> 16) >>> 16) | (re += ve >>> 16) << 16, q[6] = z = 65535 & H | _e << 16, H = 65535 & (D = N), _e = D >>> 16, ve = 65535 & (x = b), re = x >>> 16, _e += (D = q[7]) >>> 16, ve += 65535 & (x = se[7]), re += x >>> 16, se[7] = b = 65535 & (ve += (_e += (H += 65535 & D) >>> 16) >>> 16) | (re += ve >>> 16) << 16, q[7] = N = 65535 & H | _e << 16, Te += 128, Me -= 128
                }
                return Te
            }
            B.hash = function $e(ke) {
                var Oe = new je;
                Oe.update(ke);
                var se = Oe.digest();
                return Oe.clean(), se
            }
        },
        1661: (ot, B, ie) => {
            "use strict";
            const O = ie(8385),
                Ae = ie(4989),
                je = ie(6144),
                Le = ie(220),
                $e = Symbol("encodeFragmentIdentifier");

            function se(p) {
                if ("string" != typeof p || 1 !== p.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function q(p, _) {
                return _.encode ? _.strict ? O(p) : encodeURIComponent(p) : p
            }

            function Pe(p, _) {
                return _.decode ? Ae(p) : p
            }

            function Te(p) {
                return Array.isArray(p) ? p.sort() : "object" == typeof p ? Te(Object.keys(p)).sort((_, g) => Number(_) - Number(g)).map(_ => p[_]) : p
            }

            function Me(p) {
                const _ = p.indexOf("#");
                return -1 !== _ && (p = p.slice(0, _)), p
            }

            function We(p) {
                const _ = (p = Me(p)).indexOf("?");
                return -1 === _ ? "" : p.slice(_ + 1)
            }

            function He(p, _) {
                return _.parseNumbers && !Number.isNaN(Number(p)) && "string" == typeof p && "" !== p.trim() ? p = Number(p) : _.parseBooleans && null !== p && ("true" === p.toLowerCase() || "false" === p.toLowerCase()) && (p = "true" === p.toLowerCase()), p
            }

            function Xe(p, _) {
                se((_ = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, _)).arrayFormatSeparator);
                const g = function Oe(p) {
                        let _;
                        switch (p.arrayFormat) {
                            case "index":
                                return (g, b, S) => {
                                    _ = /\[(\d*)\]$/.exec(g), g = g.replace(/\[\d*\]$/, ""), _ ? (void 0 === S[g] && (S[g] = {}), S[g][_[1]] = b) : S[g] = b
                                };
                            case "bracket":
                                return (g, b, S) => {
                                    _ = /(\[\])$/.exec(g), S[g = g.replace(/\[\]$/, "")] = _ ? void 0 !== S[g] ? [].concat(S[g], b) : [b] : b
                                };
                            case "colon-list-separator":
                                return (g, b, S) => {
                                    _ = /(:list)$/.exec(g), S[g = g.replace(/:list$/, "")] = _ ? void 0 !== S[g] ? [].concat(S[g], b) : [b] : b
                                };
                            case "comma":
                            case "separator":
                                return (g, b, S) => {
                                    const k = "string" == typeof b && b.includes(p.arrayFormatSeparator),
                                        $ = "string" == typeof b && !k && Pe(b, p).includes(p.arrayFormatSeparator);
                                    b = $ ? Pe(b, p) : b;
                                    const y = k || $ ? b.split(p.arrayFormatSeparator).map(j => Pe(j, p)) : null === b ? b : Pe(b, p);
                                    S[g] = y
                                };
                            case "bracket-separator":
                                return (g, b, S) => {
                                    const k = /(\[\])$/.test(g);
                                    if (g = g.replace(/\[\]$/, ""), !k) return void(S[g] = b && Pe(b, p));
                                    const $ = null === b ? [] : b.split(p.arrayFormatSeparator).map(y => Pe(y, p));
                                    S[g] = void 0 !== S[g] ? [].concat(S[g], $) : $
                                };
                            default:
                                return (g, b, S) => {
                                    S[g] = void 0 !== S[g] ? [].concat(S[g], b) : b
                                }
                        }
                    }(_),
                    b = Object.create(null);
                if ("string" != typeof p || !(p = p.trim().replace(/^[?#&]/, ""))) return b;
                for (const S of p.split("&")) {
                    if ("" === S) continue;
                    let [k, $] = je(_.decode ? S.replace(/\+/g, " ") : S, "=");
                    $ = void 0 === $ ? null : ["comma", "separator", "bracket-separator"].includes(_.arrayFormat) ? $ : Pe($, _), g(Pe(k, _), $, b)
                }
                for (const S of Object.keys(b)) {
                    const k = b[S];
                    if ("object" == typeof k && null !== k)
                        for (const $ of Object.keys(k)) k[$] = He(k[$], _);
                    else b[S] = He(k, _)
                }
                return !1 === _.sort ? b : (!0 === _.sort ? Object.keys(b).sort() : Object.keys(b).sort(_.sort)).reduce((S, k) => {
                    const $ = b[k];
                    return S[k] = $ && "object" == typeof $ && !Array.isArray($) ? Te($) : $, S
                }, Object.create(null))
            }
            B.extract = We, B.parse = Xe, B.stringify = (p, _) => {
                if (!p) return "";
                se((_ = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, _)).arrayFormatSeparator);
                const g = $ => _.skipNull && (p => null == p)(p[$]) || _.skipEmptyString && "" === p[$],
                    b = function ke(p) {
                        switch (p.arrayFormat) {
                            case "index":
                                return _ => (g, b) => {
                                    const S = g.length;
                                    return void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, [q(_, p), "[", S, "]"].join("")] : [...g, [q(_, p), "[", q(S, p), "]=", q(b, p)].join("")]
                                };
                            case "bracket":
                                return _ => (g, b) => void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, [q(_, p), "[]"].join("")] : [...g, [q(_, p), "[]=", q(b, p)].join("")];
                            case "colon-list-separator":
                                return _ => (g, b) => void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, [q(_, p), ":list="].join("")] : [...g, [q(_, p), ":list=", q(b, p)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const _ = "bracket-separator" === p.arrayFormat ? "[]=" : "=";
                                    return g => (b, S) => void 0 === S || p.skipNull && null === S || p.skipEmptyString && "" === S ? b : (S = null === S ? "" : S, 0 === b.length ? [
                                        [q(g, p), _, q(S, p)].join("")
                                    ] : [
                                        [b, q(S, p)].join(p.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return _ => (g, b) => void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, q(_, p)] : [...g, [q(_, p), "=", q(b, p)].join("")]
                        }
                    }(_),
                    S = {};
                for (const $ of Object.keys(p)) g($) || (S[$] = p[$]);
                const k = Object.keys(S);
                return !1 !== _.sort && k.sort(_.sort), k.map($ => {
                    const y = p[$];
                    return void 0 === y ? "" : null === y ? q($, _) : Array.isArray(y) ? 0 === y.length && "bracket-separator" === _.arrayFormat ? q($, _) + "[]" : y.reduce(b($), []).join("&") : q($, _) + "=" + q(y, _)
                }).filter($ => $.length > 0).join("&")
            }, B.parseUrl = (p, _) => {
                _ = Object.assign({
                    decode: !0
                }, _);
                const [g, b] = je(p, "#");
                return Object.assign({
                    url: g.split("?")[0] || "",
                    query: Xe(We(p), _)
                }, _ && _.parseFragmentIdentifier && b ? {
                    fragmentIdentifier: Pe(b, _)
                } : {})
            }, B.stringifyUrl = (p, _) => {
                _ = Object.assign({
                    encode: !0,
                    strict: !0,
                    [$e]: !0
                }, _);
                const g = Me(p.url).split("?")[0] || "",
                    b = B.extract(p.url),
                    S = B.parse(b, {
                        sort: !1
                    }),
                    k = Object.assign(S, p.query);
                let $ = B.stringify(k, _);
                $ && ($ = `?${$}`);
                let y = function Ne(p) {
                    let _ = "";
                    const g = p.indexOf("#");
                    return -1 !== g && (_ = p.slice(g)), _
                }(p.url);
                return p.fragmentIdentifier && (y = `#${_[$e]?q(p.fragmentIdentifier,_):p.fragmentIdentifier}`), `${g}${$}${y}`
            }, B.pick = (p, _, g) => {
                g = Object.assign({
                    parseFragmentIdentifier: !0,
                    [$e]: !1
                }, g);
                const {
                    url: b,
                    query: S,
                    fragmentIdentifier: k
                } = B.parseUrl(p, g);
                return B.stringifyUrl({
                    url: b,
                    query: Le(S, _),
                    fragmentIdentifier: k
                }, g)
            }, B.exclude = (p, _, g) => {
                const b = Array.isArray(_) ? S => !_.includes(S) : (S, k) => !_(S, k);
                return B.pick(p, b, g)
            }
        },
        7263: (ot, B) => {
            "use strict";

            function ie() {
                return (null == global ? void 0 : global.crypto) || (null == global ? void 0 : global.msCrypto) || {}
            }

            function O() {
                const je = ie();
                return je.subtle || je.webkitSubtle
            }
            Object.defineProperty(B, "__esModule", {
                value: !0
            }), B.isBrowserCryptoAvailable = B.getSubtleCrypto = B.getBrowerCrypto = void 0, B.getBrowerCrypto = ie, B.getSubtleCrypto = O, B.isBrowserCryptoAvailable = function Ae() {
                return !!ie() && !!O()
            }
        },
        4574: (ot, B) => {
            "use strict";

            function ie() {
                return typeof document > "u" && typeof navigator < "u" && "ReactNative" === navigator.product
            }

            function O() {
                return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
            }
            Object.defineProperty(B, "__esModule", {
                value: !0
            }), B.isBrowser = B.isNode = B.isReactNative = void 0, B.isReactNative = ie, B.isNode = O, B.isBrowser = function Ae() {
                return !ie() && !O()
            }
        },
        2299: (ot, B, ie) => {
            "use strict";
            Object.defineProperty(B, "__esModule", {
                value: !0
            });
            const O = ie(4308);
            O.__exportStar(ie(7263), B), O.__exportStar(ie(4574), B)
        },
        9234: (ot, B, ie) => {
            "use strict";
            ie.r(B), ie.d(B, {
                EthereumProvider: () => Kx,
                OPTIONAL_EVENTS: () => Bp,
                OPTIONAL_METHODS: () => Hp,
                REQUIRED_EVENTS: () => Da,
                REQUIRED_METHODS: () => ja,
                default: () => Ua
            });
            var O = ie(9671),
                Ae = ie(2016),
                je = ie.n(Ae),
                Le = ie(9026),
                ge = ie(1028),
                $e = ie(5465),
                ke = ie(1033),
                Oe = ie(8467),
                se = ie(3544),
                q = ie(5409),
                Pe = ie(439),
                Te = ie(6534),
                Ne = (ie(6453), ie(1634));
            const na = {
                INVALID_METHOD: {
                    message: "Invalid method.",
                    code: 1001
                },
                INVALID_EVENT: {
                    message: "Invalid event.",
                    code: 1002
                },
                INVALID_UPDATE_REQUEST: {
                    message: "Invalid update request.",
                    code: 1003
                },
                INVALID_EXTEND_REQUEST: {
                    message: "Invalid extend request.",
                    code: 1004
                },
                INVALID_SESSION_SETTLE_REQUEST: {
                    message: "Invalid session settle request.",
                    code: 1005
                },
                UNAUTHORIZED_METHOD: {
                    message: "Unauthorized method.",
                    code: 3001
                },
                UNAUTHORIZED_EVENT: {
                    message: "Unauthorized event.",
                    code: 3002
                },
                UNAUTHORIZED_UPDATE_REQUEST: {
                    message: "Unauthorized update request.",
                    code: 3003
                },
                UNAUTHORIZED_EXTEND_REQUEST: {
                    message: "Unauthorized extend request.",
                    code: 3004
                },
                USER_REJECTED: {
                    message: "User rejected.",
                    code: 5e3
                },
                USER_REJECTED_CHAINS: {
                    message: "User rejected chains.",
                    code: 5001
                },
                USER_REJECTED_METHODS: {
                    message: "User rejected methods.",
                    code: 5002
                },
                USER_REJECTED_EVENTS: {
                    message: "User rejected events.",
                    code: 5003
                },
                UNSUPPORTED_CHAINS: {
                    message: "Unsupported chains.",
                    code: 5100
                },
                UNSUPPORTED_METHODS: {
                    message: "Unsupported methods.",
                    code: 5101
                },
                UNSUPPORTED_EVENTS: {
                    message: "Unsupported events.",
                    code: 5102
                },
                UNSUPPORTED_ACCOUNTS: {
                    message: "Unsupported accounts.",
                    code: 5103
                },
                UNSUPPORTED_NAMESPACE_KEY: {
                    message: "Unsupported namespace key.",
                    code: 5104
                },
                USER_DISCONNECTED: {
                    message: "User disconnected.",
                    code: 6e3
                },
                SESSION_SETTLEMENT_FAILED: {
                    message: "Session settlement failed.",
                    code: 7e3
                },
                WC_METHOD_UNSUPPORTED: {
                    message: "Unsupported wc_ method.",
                    code: 10001
                }
            };

            function Ln(r, e) {
                return !!Array.isArray(r) && (!(typeof e < "u" && r.length) || r.every(e))
            }
            const Uy = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                Ly = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                Fy = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function My(r, e) {
                if (!("__proto__" === r || "constructor" === r && e && "object" == typeof e && "prototype" in e)) return e;
                ! function ky(r) {
                    console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`)
                }(r)
            }

            function oo(r, e = {}) {
                if ("string" != typeof r) return r;
                const t = r.trim();
                if ('"' === r[0] && '"' === r.at(-1) && !r.includes("\\")) return t.slice(1, -1);
                if (t.length <= 9) {
                    const o = t.toLowerCase();
                    if ("true" === o) return !0;
                    if ("false" === o) return !1;
                    if ("undefined" === o) return;
                    if ("null" === o) return null;
                    if ("nan" === o) return Number.NaN;
                    if ("infinity" === o) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === o) return Number.NEGATIVE_INFINITY
                }
                if (!Fy.test(r)) {
                    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
                    return r
                }
                try {
                    if (Uy.test(r) || Ly.test(r)) {
                        if (e.strict) throw new Error("[destr] Possible prototype pollution");
                        return JSON.parse(r, My)
                    }
                    return JSON.parse(r)
                } catch (o) {
                    if (e.strict) throw o;
                    return r
                }
            }

            function br(r, ...e) {
                try {
                    return function Ky(r) {
                        return r && "function" == typeof r.then ? r : Promise.resolve(r)
                    }(r(...e))
                } catch (t) {
                    return Promise.reject(t)
                }
            }

            function ia(r) {
                if (function qy(r) {
                        const e = typeof r;
                        return null === r || "object" !== e && "function" !== e
                    }(r)) return String(r);
                if (function zy(r) {
                        const e = Object.getPrototypeOf(r);
                        return !e || e.isPrototypeOf(Object)
                    }(r) || Array.isArray(r)) return JSON.stringify(r);
                if ("function" == typeof r.toJSON) return ia(r.toJSON());
                throw new Error("[unstorage] Cannot stringify value!")
            }

            function td() {
                if (void 0 === typeof Buffer) throw new TypeError("[unstorage] Buffer is not supported!")
            }
            const Gc = "base64:";

            function Hr(r) {
                return r ? r.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function Vy(...r) {
                return Hr(r.join(":"))
            }

            function ao(r) {
                return (r = Hr(r)) ? r + ":" : ""
            }
            const Wy = () => {
                const r = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: e => r.has(e),
                    getItem: e => r.get(e) ? ? null,
                    getItemRaw: e => r.get(e) ? ? null,
                    setItem(e, t) {
                        r.set(e, t)
                    },
                    setItemRaw(e, t) {
                        r.set(e, t)
                    },
                    removeItem(e) {
                        r.delete(e)
                    },
                    getKeys: () => Array.from(r.keys()),
                    clear() {
                        r.clear()
                    },
                    dispose() {
                        r.clear()
                    }
                }
            };

            function rd(r, e, t) {
                return r.watch ? r.watch((o, a) => e(o, t + a)) : () => {}
            }

            function nd(r) {
                return Qc.apply(this, arguments)
            }

            function Qc() {
                return (Qc = (0, O.Z)(function*(r) {
                    "function" == typeof r.dispose && (yield br(r.dispose))
                })).apply(this, arguments)
            }

            function Br(r) {
                return new Promise((e, t) => {
                    r.oncomplete = r.onsuccess = () => e(r.result), r.onabort = r.onerror = () => t(r.error)
                })
            }

            function id(r, e) {
                const t = indexedDB.open(r);
                t.onupgradeneeded = () => t.result.createObjectStore(e);
                const o = Br(t);
                return (a, l) => o.then(f => l(f.transaction(e, a).objectStore(e)))
            }
            let Yc;

            function Fn() {
                return Yc || (Yc = id("keyval-store", "keyval")), Yc
            }

            function sd(r, e = Fn()) {
                return e("readonly", t => Br(t.get(r)))
            }
            const tm = r => JSON.stringify(r, (e, t) => "bigint" == typeof t ? t.toString() + "n" : t),
                rm = r => {
                    const t = r.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(t, (o, a) => "string" == typeof a && a.match(/^\d+n$/) ? BigInt(a.substring(0, a.length - 1)) : a)
                };

            function co(r) {
                if ("string" != typeof r) throw new Error("Cannot safe json parse value of type " + typeof r);
                try {
                    return rm(r)
                } catch {
                    return r
                }
            }

            function Wi(r) {
                return "string" == typeof r ? r : tm(r) || ""
            }
            var im = (r = {}) => {
                const e = r.base && r.base.length > 0 ? `${r.base}:` : "",
                    t = a => e + a;
                let o;
                return r.dbName && r.storeName && (o = id(r.dbName, r.storeName)), {
                    name: "idb-keyval",
                    options: r,
                    hasItem: a => (0, O.Z)(function*() {
                        return !(typeof(yield sd(t(a), o)) > "u")
                    })(),
                    getItem: a => (0, O.Z)(function*() {
                        return (yield sd(t(a), o)) ? ? null
                    })(),
                    setItem: (a, l) => function Qy(r, e, t = Fn()) {
                        return t("readwrite", o => (o.put(e, r), Br(o.transaction)))
                    }(t(a), l, o),
                    removeItem: a => function Yy(r, e = Fn()) {
                        return e("readwrite", t => (t.delete(r), Br(t.transaction)))
                    }(t(a), o),
                    getKeys: () => function em(r = Fn()) {
                        return r("readonly", e => {
                            if (e.getAllKeys) return Br(e.getAllKeys());
                            const t = [];
                            return function Xc(r, e) {
                                return r.openCursor().onsuccess = function() {
                                    this.result && (e(this.result), this.result.continue())
                                }, Br(r.transaction)
                            }(e, o => t.push(o.key)).then(() => t)
                        })
                    }(o),
                    clear: () => function Xy(r = Fn()) {
                        return r("readwrite", e => (e.clear(), Br(e.transaction)))
                    }(o)
                }
            };
            class am {
                constructor() {
                    this.indexedDb = function Jy(r = {}) {
                        const e = {
                                mounts: {
                                    "": r.driver || Wy()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            t = m => {
                                for (const A of e.mountpoints)
                                    if (m.startsWith(A)) return {
                                        base: A,
                                        relativeKey: m.slice(A.length),
                                        driver: e.mounts[A]
                                    };
                                return {
                                    base: "",
                                    relativeKey: m,
                                    driver: e.mounts[""]
                                }
                            },
                            o = (m, A) => e.mountpoints.filter(L => L.startsWith(m) || A && m.startsWith(L)).map(L => ({
                                relativeBase: m.length > L.length ? m.slice(L.length) : void 0,
                                mountpoint: L,
                                driver: e.mounts[L]
                            })),
                            a = (m, A) => {
                                if (e.watching) {
                                    A = Hr(A);
                                    for (const L of e.watchListeners) L(m, A)
                                }
                            },
                            l = function() {
                                var m = (0, O.Z)(function*() {
                                    if (!e.watching) {
                                        e.watching = !0;
                                        for (const A in e.mounts) e.unwatch[A] = yield rd(e.mounts[A], a, A)
                                    }
                                });
                                return function() {
                                    return m.apply(this, arguments)
                                }
                            }(),
                            f = function() {
                                var m = (0, O.Z)(function*() {
                                    if (e.watching) {
                                        for (const A in e.unwatch) yield e.unwatch[A]();
                                        e.unwatch = {}, e.watching = !1
                                    }
                                });
                                return function() {
                                    return m.apply(this, arguments)
                                }
                            }(),
                            w = (m, A, L) => {
                                const X = new Map,
                                    be = Y => {
                                        let Ee = X.get(Y.base);
                                        return Ee || (Ee = {
                                            driver: Y.driver,
                                            base: Y.base,
                                            items: []
                                        }, X.set(Y.base, Ee)), Ee
                                    };
                                for (const Y of m) {
                                    const Ee = "string" == typeof Y,
                                        Re = Hr(Ee ? Y : Y.key),
                                        at = Ee ? void 0 : Y.value,
                                        Ot = Ee || !Y.options ? A : { ...A,
                                            ...Y.options
                                        },
                                        dt = t(Re);
                                    be(dt).items.push({
                                        key: Re,
                                        value: at,
                                        relativeKey: dt.relativeKey,
                                        options: Ot
                                    })
                                }
                                return Promise.all([...X.values()].map(Y => L(Y))).then(Y => Y.flat())
                            },
                            C = {
                                hasItem(m, A = {}) {
                                    m = Hr(m);
                                    const {
                                        relativeKey: L,
                                        driver: X
                                    } = t(m);
                                    return br(X.hasItem, L, A)
                                },
                                getItem(m, A = {}) {
                                    m = Hr(m);
                                    const {
                                        relativeKey: L,
                                        driver: X
                                    } = t(m);
                                    return br(X.getItem, L, A).then(be => oo(be))
                                },
                                getItems: (m, A) => w(m, A, L => L.driver.getItems ? br(L.driver.getItems, L.items.map(X => ({
                                    key: X.relativeKey,
                                    options: X.options
                                })), A).then(X => X.map(be => ({
                                    key: Vy(L.base, be.key),
                                    value: oo(be.value)
                                }))) : Promise.all(L.items.map(X => br(L.driver.getItem, X.relativeKey, X.options).then(be => ({
                                    key: X.key,
                                    value: oo(be)
                                }))))),
                                getItemRaw(m, A = {}) {
                                    m = Hr(m);
                                    const {
                                        relativeKey: L,
                                        driver: X
                                    } = t(m);
                                    return X.getItemRaw ? br(X.getItemRaw, L, A) : br(X.getItem, L, A).then(be => function Hy(r) {
                                        return "string" == typeof r && r.startsWith(Gc) ? (td(), Buffer.from(r.slice(7), "base64")) : r
                                    }(be))
                                },
                                setItem: (m, A, L = {}) => (0, O.Z)(function*() {
                                    if (void 0 === A) return C.removeItem(m);
                                    m = Hr(m);
                                    const {
                                        relativeKey: X,
                                        driver: be
                                    } = t(m);
                                    be.setItem && (yield br(be.setItem, X, ia(A), L), be.watch || a("update", m))
                                })(),
                                setItems: (m, A) => (0, O.Z)(function*() {
                                    yield w(m, A, function() {
                                        var L = (0, O.Z)(function*(X) {
                                            X.driver.setItems && (yield br(X.driver.setItems, X.items.map(be => ({
                                                key: be.relativeKey,
                                                value: ia(be.value),
                                                options: be.options
                                            })), A)), X.driver.setItem && (yield Promise.all(X.items.map(be => br(X.driver.setItem, be.relativeKey, ia(be.value), be.options))))
                                        });
                                        return function(X) {
                                            return L.apply(this, arguments)
                                        }
                                    }())
                                })(),
                                setItemRaw: (m, A, L = {}) => (0, O.Z)(function*() {
                                    if (void 0 === A) return C.removeItem(m, L);
                                    m = Hr(m);
                                    const {
                                        relativeKey: X,
                                        driver: be
                                    } = t(m);
                                    if (be.setItemRaw) yield br(be.setItemRaw, X, A, L);
                                    else {
                                        if (!be.setItem) return;
                                        yield br(be.setItem, X, function Zy(r) {
                                            if ("string" == typeof r) return r;
                                            td();
                                            const e = Buffer.from(r).toString("base64");
                                            return Gc + e
                                        }(A), L)
                                    }
                                    be.watch || a("update", m)
                                })(),
                                removeItem: (m, A = {}) => (0, O.Z)(function*() {
                                    "boolean" == typeof A && (A = {
                                        removeMeta: A
                                    }), m = Hr(m);
                                    const {
                                        relativeKey: L,
                                        driver: X
                                    } = t(m);
                                    X.removeItem && (yield br(X.removeItem, L, A), (A.removeMeta || A.removeMata) && (yield br(X.removeItem, L + "$", A)), X.watch || a("remove", m))
                                })(),
                                getMeta: (m, A = {}) => (0, O.Z)(function*() {
                                    "boolean" == typeof A && (A = {
                                        nativeOnly: A
                                    }), m = Hr(m);
                                    const {
                                        relativeKey: L,
                                        driver: X
                                    } = t(m), be = Object.create(null);
                                    if (X.getMeta && Object.assign(be, yield br(X.getMeta, L, A)), !A.nativeOnly) {
                                        const Y = yield br(X.getItem, L + "$", A).then(Ee => oo(Ee));
                                        Y && "object" == typeof Y && ("string" == typeof Y.atime && (Y.atime = new Date(Y.atime)), "string" == typeof Y.mtime && (Y.mtime = new Date(Y.mtime)), Object.assign(be, Y))
                                    }
                                    return be
                                })(),
                                setMeta(m, A, L = {}) {
                                    return this.setItem(m + "$", A, L)
                                },
                                removeMeta(m, A = {}) {
                                    return this.removeItem(m + "$", A)
                                },
                                getKeys: (m, A = {}) => (0, O.Z)(function*() {
                                    m = ao(m);
                                    const L = o(m, !0);
                                    let X = [];
                                    const be = [];
                                    for (const Y of L) {
                                        const Re = (yield br(Y.driver.getKeys, Y.relativeBase, A)).map(at => Y.mountpoint + Hr(at)).filter(at => !X.some(Ot => at.startsWith(Ot)));
                                        be.push(...Re), X = [Y.mountpoint, ...X.filter(at => !at.startsWith(Y.mountpoint))]
                                    }
                                    return be.filter(m ? Y => Y.startsWith(m) && !Y.endsWith("$") : Y => !Y.endsWith("$"))
                                })(),
                                clear: (m, A = {}) => (0, O.Z)(function*() {
                                    m = ao(m), yield Promise.all(o(m, !1).map(function() {
                                        var L = (0, O.Z)(function*(X) {
                                            if (X.driver.clear) return br(X.driver.clear, X.relativeBase, A);
                                            if (X.driver.removeItem) {
                                                const be = yield X.driver.getKeys(X.relativeBase || "", A);
                                                return Promise.all(be.map(Y => X.driver.removeItem(Y, A)))
                                            }
                                        });
                                        return function(X) {
                                            return L.apply(this, arguments)
                                        }
                                    }()))
                                })(),
                                dispose: () => (0, O.Z)(function*() {
                                    yield Promise.all(Object.values(e.mounts).map(m => nd(m)))
                                })(),
                                watch: m => (0, O.Z)(function*() {
                                    return yield l(), e.watchListeners.push(m), (0, O.Z)(function*() {
                                        e.watchListeners = e.watchListeners.filter(A => A !== m), 0 === e.watchListeners.length && (yield f())
                                    })
                                })(),
                                unwatch: () => (0, O.Z)(function*() {
                                    e.watchListeners = [], yield f()
                                })(),
                                mount(m, A) {
                                    if ((m = ao(m)) && e.mounts[m]) throw new Error(`already mounted at ${m}`);
                                    return m && (e.mountpoints.push(m), e.mountpoints.sort((L, X) => X.length - L.length)), e.mounts[m] = A, e.watching && Promise.resolve(rd(A, a, m)).then(L => {
                                        e.unwatch[m] = L
                                    }).catch(console.error), C
                                },
                                unmount: (m, A = !0) => (0, O.Z)(function*() {
                                    (m = ao(m)) && e.mounts[m] && (e.watching && m in e.unwatch && (e.unwatch[m](), delete e.unwatch[m]), A && (yield nd(e.mounts[m])), e.mountpoints = e.mountpoints.filter(L => L !== m), delete e.mounts[m])
                                })(),
                                getMount(m = "") {
                                    m = Hr(m) + ":";
                                    const A = t(m);
                                    return {
                                        driver: A.driver,
                                        base: A.base
                                    }
                                },
                                getMounts: (m = "", A = {}) => (m = Hr(m), o(m, A.parents).map(X => ({
                                    driver: X.driver,
                                    base: X.mountpoint
                                })))
                            };
                        return C
                    }({
                        driver: im({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                getKeys() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        return e.indexedDb.getKeys()
                    })()
                }
                getEntries() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        return (yield e.indexedDb.getItems(yield e.indexedDb.getKeys())).map(t => [t.key, t.value])
                    })()
                }
                getItem(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        const o = yield t.indexedDb.getItem(e);
                        if (null !== o) return o
                    })()
                }
                setItem(e, t) {
                    var o = this;
                    return (0, O.Z)(function*() {
                        yield o.indexedDb.setItem(e, Wi(t))
                    })()
                }
                removeItem(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        yield t.indexedDb.removeItem(e)
                    })()
                }
            }
            var eu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
                sa = {
                    exports: {}
                };

            function cm(r) {
                var e;
                return [r[0], co(null != (e = r[1]) ? e : "")]
            }! function() {
                let r;

                function e() {}
                r = e, r.prototype.getItem = function(t) {
                    return this.hasOwnProperty(t) ? String(this[t]) : null
                }, r.prototype.setItem = function(t, o) {
                    this[t] = String(o)
                }, r.prototype.removeItem = function(t) {
                    delete this[t]
                }, r.prototype.clear = function() {
                    const t = this;
                    Object.keys(t).forEach(function(o) {
                        t[o] = void 0, delete t[o]
                    })
                }, r.prototype.key = function(t) {
                    return t = t || 0, Object.keys(this)[t]
                }, r.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), sa.exports = typeof eu < "u" && eu.localStorage ? eu.localStorage : typeof window < "u" && window.localStorage ? window.localStorage : new e
            }();
            class um {
                constructor() {
                    this.localStorage = sa.exports
                }
                getKeys() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        return Object.keys(e.localStorage)
                    })()
                }
                getEntries() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        return Object.entries(e.localStorage).map(cm)
                    })()
                }
                getItem(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        const o = t.localStorage.getItem(e);
                        if (null !== o) return co(o)
                    })()
                }
                setItem(e, t) {
                    var o = this;
                    return (0, O.Z)(function*() {
                        o.localStorage.setItem(e, Wi(t))
                    })()
                }
                removeItem(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        t.localStorage.removeItem(e)
                    })()
                }
            }
            const fm = function() {
                    var r = (0, O.Z)(function*(e, t, o) {
                        const a = "wc_storage_version",
                            l = yield t.getItem(a);
                        if (l && l >= 1) return void o(t);
                        const f = yield e.getKeys();
                        if (!f.length) return void o(t);
                        const w = [];
                        for (; f.length;) {
                            const C = f.shift();
                            if (!C) continue;
                            const m = C.toLowerCase();
                            if (m.includes("wc@") || m.includes("walletconnect") || m.includes("wc_") || m.includes("wallet_connect")) {
                                const A = yield e.getItem(C);
                                yield t.setItem(C, A), w.push(C)
                            }
                        }
                        yield t.setItem(a, 1), o(t), dm(e, w)
                    });
                    return function(t, o, a) {
                        return r.apply(this, arguments)
                    }
                }(),
                dm = function() {
                    var r = (0, O.Z)(function*(e, t) {
                        t.length && t.forEach(function() {
                            var o = (0, O.Z)(function*(a) {
                                yield e.removeItem(a)
                            });
                            return function(a) {
                                return o.apply(this, arguments)
                            }
                        }())
                    });
                    return function(t, o) {
                        return r.apply(this, arguments)
                    }
                }();
            class hm {
                constructor() {
                    this.initialized = !1, this.setInitialized = t => {
                        this.storage = t, this.initialized = !0
                    };
                    const e = new um;
                    this.storage = e;
                    try {
                        const t = new am;
                        fm(e, t, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                getKeys() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        return yield e.initialize(), e.storage.getKeys()
                    })()
                }
                getEntries() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        return yield e.initialize(), e.storage.getEntries()
                    })()
                }
                getItem(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        return yield t.initialize(), t.storage.getItem(e)
                    })()
                }
                setItem(e, t) {
                    var o = this;
                    return (0, O.Z)(function*() {
                        return yield o.initialize(), o.storage.setItem(e, t)
                    })()
                }
                removeItem(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        return yield t.initialize(), t.storage.removeItem(e)
                    })()
                }
                initialize() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.initialized || (yield new Promise(t => {
                            const o = setInterval(() => {
                                e.initialized && (clearInterval(o), t())
                            }, 20)
                        }))
                    })()
                }
            }
            var uo = ie(986),
                mt = ie(2997),
                bs = ie(2108);
            class pm extends bs.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class _m extends bs.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class gm {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class ym extends bs.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class mm extends bs.q {
                constructor(e) {
                    super()
                }
            }
            class vm {
                constructor(e, t, o, a) {
                    this.core = e, this.logger = t, this.name = o
                }
            }
            class bm extends bs.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class wm extends bs.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class Em {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class Im {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class xm {
                constructor(e) {
                    this.client = e
                }
            }
            var ad = ie(5972);
            const ud = "base64url",
                Pm = "utf8",
                Rm = ":",
                Am = "did",
                Tm = "key",
                ld = "base58btc",
                Cm = "z",
                jm = "K36";
            var $m = ie(1376),
                tu = ie(878),
                ru = ie(2269);

            function aa(r) {
                return (0, tu.B)((0, ru.m)(Wi(r), Pm), ud)
            }

            function fd(r) {
                const e = (0, ru.m)(jm, ld),
                    t = Cm + (0, tu.B)((0, $m.z)([e, r]), ld);
                return [Am, Tm, t].join(Rm)
            }

            function Um(r) {
                return (0, tu.B)(r, ud)
            }

            function dd(r = (0, $e.randomBytes)(32)) {
                return ad._w(r)
            }

            function nu() {
                return (nu = (0, O.Z)(function*(r, e, t, o, a = (0, q.fromMiliseconds)(Date.now())) {
                    const l = {
                            alg: "EdDSA",
                            typ: "JWT"
                        },
                        C = {
                            iss: fd(o.publicKey),
                            sub: r,
                            aud: e,
                            iat: a,
                            exp: a + t
                        },
                        m = function Fm(r) {
                            return (0, ru.m)([aa(r.header), aa(r.payload)].join("."), "utf8")
                        }({
                            header: l,
                            payload: C
                        });
                    return function Mm(r) {
                        return [aa(r.header), aa(r.payload), Um(r.signature)].join(".")
                    }({
                        header: l,
                        payload: C,
                        signature: ad.Xx(o.secretKey, m)
                    })
                })).apply(this, arguments)
            }
            ie(2768);
            var hd = function(r, e, t) {
                    if (t || 2 === arguments.length)
                        for (var l, o = 0, a = e.length; o < a; o++)(l || !(o in e)) && (l || (l = Array.prototype.slice.call(e, 0, o)), l[o] = e[o]);
                    return r.concat(l || Array.prototype.slice.call(e))
                },
                Km = function r(e, t, o) {
                    this.name = e, this.version = t, this.os = o, this.type = "browser"
                },
                qm = function r(e) {
                    this.version = e, this.type = "node", this.name = "node", this.os = process.platform
                },
                zm = function r(e, t, o, a) {
                    this.name = e, this.version = t, this.os = o, this.bot = a, this.type = "bot-device"
                },
                Zm = function r() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                Hm = function r() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                Vm = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                pd = 3,
                Gm = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
                    ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
                    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FB[AS]V\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["curl", /^curl\/([0-9\.]+)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                _d = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function yd(r) {
                var e = function gd(r) {
                    return "" !== r && Gm.reduce(function(e, t) {
                        var o = t[0];
                        if (e) return e;
                        var l = t[1].exec(r);
                        return !!l && [o, l]
                    }, !1)
                }(r);
                if (!e) return null;
                var t = e[0],
                    o = e[1];
                if ("searchbot" === t) return new Zm;
                var a = o[1] && o[1].split(".").join("_").split("_").slice(0, 3);
                a ? a.length < pd && (a = hd(hd([], a, !0), function Ym(r) {
                    for (var e = [], t = 0; t < r; t++) e.push("0");
                    return e
                }(pd - a.length), !0)) : a = [];
                var l = a.join("."),
                    f = function Jm(r) {
                        for (var e = 0, t = _d.length; e < t; e++) {
                            var o = _d[e],
                                a = o[0];
                            if (o[1].exec(r)) return a
                        }
                        return null
                    }(r),
                    w = Vm.exec(r);
                return w && w[1] ? new zm(t, l, f, w[1]) : new Km(t, l, f)
            }
            var ca = ie(1661);
            const bd = "base10",
                Lr = "base16",
                au = "base64pad",
                cu = "utf8";

            function fu() {
                const r = (0, $e.randomBytes)(32);
                return (0, se.BB)(r, Lr)
            }

            function du(r) {
                const e = (0, ke.vp)((0, se.mL)(r, cu));
                return (0, se.BB)(e, Lr)
            }

            function lo(r) {
                return Number((0, se.BB)(r, bd))
            }

            function la(r) {
                const e = (0, se.mL)(r, au),
                    t = e.slice(0, 1);
                if (1 === lo(t)) {
                    const w = 33,
                        C = w + 12,
                        m = e.slice(1, w),
                        A = e.slice(w, C);
                    return {
                        type: t,
                        sealed: e.slice(C),
                        iv: A,
                        senderPublicKey: m
                    }
                }
                const l = e.slice(1, 13);
                return {
                    type: t,
                    sealed: e.slice(13),
                    iv: l
                }
            }

            function Id(r) {
                const e = r ? .type || 0;
                if (1 === e) {
                    if (typeof r ? .senderPublicKey > "u") throw new Error("missing sender public key");
                    if (typeof r ? .receiverPublicKey > "u") throw new Error("missing receiver public key")
                }
                return {
                    type: e,
                    senderPublicKey: r ? .senderPublicKey,
                    receiverPublicKey: r ? .receiverPublicKey
                }
            }

            function xd(r) {
                return 1 === r.type && "string" == typeof r.senderPublicKey && "string" == typeof r.receiverPublicKey
            }
            var gv = Object.defineProperty,
                Od = Object.getOwnPropertySymbols,
                yv = Object.prototype.hasOwnProperty,
                mv = Object.prototype.propertyIsEnumerable,
                Sd = (r, e, t) => e in r ? gv(r, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : r[e] = t,
                Pd = (r, e) => {
                    for (var t in e || (e = {})) yv.call(e, t) && Sd(r, t, e[t]);
                    if (Od)
                        for (var t of Od(e)) mv.call(e, t) && Sd(r, t, e[t]);
                    return r
                };
            const vv = "ReactNative",
                Vr = {
                    reactNative: "react-native",
                    node: "node",
                    browser: "browser",
                    unknown: "unknown"
                },
                wv = "js";

            function pu() {
                return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
            }

            function Es() {
                return !(0, Pe.getDocument)() && !!(0, Pe.getNavigator)() && navigator.product === vv
            }

            function fo() {
                return !pu() && !!(0, Pe.getNavigator)()
            }

            function Is() {
                return Es() ? Vr.reactNative : pu() ? Vr.node : fo() ? Vr.browser : Vr.unknown
            }

            function Sv(r, e, t) {
                const o = function xv() {
                        if (Is() === Vr.reactNative && typeof global < "u" && typeof(null == global ? void 0 : global.Platform) < "u") {
                            const {
                                OS: t,
                                Version: o
                            } = global.Platform;
                            return [t, o].join("-")
                        }
                        const r = function Wm(r) {
                            return r ? yd(r) : typeof document > "u" && typeof navigator < "u" && "ReactNative" === navigator.product ? new Hm : typeof navigator < "u" ? yd(navigator.userAgent) : function Qm() {
                                return typeof process < "u" && process.version ? new qm(process.version.slice(1)) : null
                            }()
                        }();
                        if (null === r) return "unknown";
                        const e = r.os ? r.os.replace(" ", "").toLowerCase() : "unknown";
                        return "browser" === r.type ? [e, r.name, r.version].join("-") : [e, r.version].join("-")
                    }(),
                    a = function Ov() {
                        var r;
                        const e = Is();
                        return e === Vr.browser ? [e, (null == (r = (0, Pe.getLocation)()) ? void 0 : r.host) || "unknown"].join(":") : e
                    }();
                return [
                    [r, e].join("-"), [wv, t].join("-"), o, a
                ].join("/")
            }

            function Rd(r) {
                return Object.fromEntries(r.entries())
            }

            function Ad(r) {
                return new Map(Object.entries(r))
            }

            function ho(r, e, t) {
                return new Promise(function() {
                    var o = (0, O.Z)(function*(a, l) {
                        const f = setTimeout(() => l(new Error(t)), e);
                        try {
                            a(yield r)
                        } catch (w) {
                            l(w)
                        }
                        clearTimeout(f)
                    });
                    return function(a, l) {
                        return o.apply(this, arguments)
                    }
                }())
            }

            function Td(r, e) {
                if ("string" == typeof e && e.startsWith(`${r}:`)) return e;
                if ("topic" === r.toLowerCase()) {
                    if ("string" != typeof e) throw new Error('Value must be "string" for expirer target type: topic');
                    return `topic:${e}`
                }
                if ("id" === r.toLowerCase()) {
                    if ("number" != typeof e) throw new Error('Value must be "number" for expirer target type: id');
                    return `id:${e}`
                }
                throw new Error(`Unknown expirer target type: ${r}`)
            }

            function fa(r, e) {
                return (0, q.fromMiliseconds)((e || Date.now()) + (0, q.toMiliseconds)(r))
            }

            function Cd(r) {
                return Date.now() >= (0, q.toMiliseconds)(r)
            }

            function _u(r, e) {
                return `${r}${e?`:${e}`:""}`
            }

            function mu(r) {
                return r ? .relay || {
                    protocol: "irn"
                }
            }

            function da(r) {
                const e = Ne.RELAY_JSONRPC[r];
                if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${r}`);
                return e
            }
            var Uv = Object.defineProperty,
                jd = Object.getOwnPropertySymbols,
                Lv = Object.prototype.hasOwnProperty,
                Fv = Object.prototype.propertyIsEnumerable,
                Dd = (r, e, t) => e in r ? Uv(r, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : r[e] = t;

            function kv(r, e = "-") {
                const t = {},
                    o = "relay" + e;
                return Object.keys(r).forEach(a => {
                    if (a.startsWith(o)) {
                        const l = a.replace(o, "");
                        t[l] = r[a]
                    }
                }), t
            }

            function $d(r) {
                const e = (r = (r = r.includes("wc://") ? r.replace("wc://", "") : r).includes("wc:") ? r.replace("wc:", "") : r).indexOf(":"),
                    t = -1 !== r.indexOf("?") ? r.indexOf("?") : void 0,
                    o = r.substring(0, e),
                    a = r.substring(e + 1, t).split("@"),
                    l = typeof t < "u" ? r.substring(t) : "",
                    f = ca.parse(l);
                return {
                    protocol: o,
                    topic: Kv(a[0]),
                    version: parseInt(a[1], 10),
                    symKey: f.symKey,
                    relay: kv(f)
                }
            }

            function Kv(r) {
                return r.startsWith("//") ? r.substring(2) : r
            }
            const t0 = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                r0 = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function pt(r, e) {
                const {
                    message: t,
                    code: o
                } = r0[r];
                return {
                    message: e ? `${t} ${e}` : t,
                    code: o
                }
            }

            function Mn(r, e) {
                const {
                    message: t,
                    code: o
                } = t0[r];
                return {
                    message: e ? `${t} ${e}` : t,
                    code: o
                }
            }

            function ei(r) {
                return typeof r > "u"
            }

            function un(r, e) {
                return !(!e || !ei(r)) || "string" == typeof r && !!r.trim().length
            }

            function wu(r) {
                return typeof r < "u" && null !== typeof r
            }

            function zd() {
                const r = Is();
                return new Promise(e => {
                    switch (r) {
                        case Vr.browser:
                            e(function y0() {
                                return fo() && navigator ? .onLine
                            }());
                            break;
                        case Vr.reactNative:
                            e(function m0() {
                                return Eu.apply(this, arguments)
                            }());
                            break;
                        default:
                            e(!0)
                    }
                })
            }

            function Eu() {
                return (Eu = (0, O.Z)(function*() {
                    return !(Es() && typeof global < "u" && null != global && global.NetInfo) || (yield null == global ? void 0 : global.NetInfo.fetch()) ? .isConnected
                })).apply(this, arguments)
            }
            const Zd = "INTERNAL_ERROR",
                xu = "SERVER_ERROR",
                P0 = [-32700, -32600, -32601, -32602, -32603],
                _o = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [Zd]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [xu]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                Hd = xu;

            function Vd(r) {
                return Object.keys(_o).includes(r) ? _o[r] : _o[Hd]
            }

            function Wd(r, e, t) {
                return r.message.includes("getaddrinfo ENOTFOUND") || r.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${t} RPC url at ${e}`) : r
            }
            var R0 = ie(2299);

            function Ou(r = 3) {
                return Date.now() * Math.pow(10, r) + Math.floor(Math.random() * Math.pow(10, r))
            }

            function Jd(r = 6) {
                return BigInt(Ou(r))
            }

            function Os(r, e, t) {
                return {
                    id: t || Ou(),
                    jsonrpc: "2.0",
                    method: r,
                    params: e
                }
            }

            function Su(r, e) {
                return {
                    id: r,
                    jsonrpc: "2.0",
                    result: e
                }
            }

            function pa(r, e, t) {
                return {
                    id: r,
                    jsonrpc: "2.0",
                    error: A0(e, t)
                }
            }

            function A0(r, e) {
                return typeof r > "u" ? Vd(Zd) : ("string" == typeof r && (r = Object.assign(Object.assign({}, Vd(xu)), {
                    message: r
                })), typeof e < "u" && (r.data = e), function Bd(r) {
                    return P0.includes(r)
                }(r.code) && (r = function Gd(r) {
                    return Object.values(_o).find(t => t.code === r) || _o[Hd]
                }(r.code)), r)
            }
            class T0 {}
            class C0 extends T0 {
                constructor() {
                    super()
                }
            }
            class j0 extends C0 {
                constructor(e) {
                    super()
                }
            }

            function Qd(r, e) {
                const t = function U0(r) {
                    const e = r.match(new RegExp(/^\w+:/, "gi"));
                    if (e && e.length) return e[0]
                }(r);
                return !(typeof t > "u") && new RegExp(e).test(t)
            }

            function Yd(r) {
                return Qd(r, "^https?:")
            }

            function Xd(r) {
                return Qd(r, "^wss?:")
            }

            function eh(r) {
                return "object" == typeof r && "id" in r && "jsonrpc" in r && "2.0" === r.jsonrpc
            }

            function Pu(r) {
                return eh(r) && "method" in r
            }

            function _a(r) {
                return eh(r) && (hi(r) || kn(r))
            }

            function hi(r) {
                return "result" in r
            }

            function kn(r) {
                return "error" in r
            }
            class pi extends j0 {
                constructor(e) {
                    super(e), this.events = new Ae.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
                }
                connect(e = this.connection) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        yield t.open(e)
                    })()
                }
                disconnect() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        yield e.close()
                    })()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                request(e, t) {
                    var o = this;
                    return (0, O.Z)(function*() {
                        return o.requestStrict(Os(e.method, e.params || [], e.id || Jd().toString()), t)
                    })()
                }
                requestStrict(e, t) {
                    var o = this;
                    return (0, O.Z)(function*() {
                        return new Promise(function() {
                            var a = (0, O.Z)(function*(l, f) {
                                if (!o.connection.connected) try {
                                    yield o.open()
                                } catch (w) {
                                    f(w)
                                }
                                o.events.on(`${e.id}`, w => {
                                    kn(w) ? f(w.error) : l(w.result)
                                });
                                try {
                                    yield o.connection.send(e, t)
                                } catch (w) {
                                    f(w)
                                }
                            });
                            return function(l, f) {
                                return a.apply(this, arguments)
                            }
                        }())
                    })()
                }
                setConnection(e = this.connection) {
                    return e
                }
                onPayload(e) {
                    this.events.emit("payload", e), _a(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                onClose(e) {
                    e && 3e3 === e.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
                }
                open(e = this.connection) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        t.connection === e && t.connection.connected || (t.connection.connected && t.close(), "string" == typeof e && (yield t.connection.open(e), e = t.connection), t.connection = t.setConnection(e), yield t.connection.open(), t.registerEventListeners(), t.events.emit("connect"))
                    })()
                }
                close() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        yield e.connection.close()
                    })()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
            const th = r => r.split("?")[0],
                k0 = typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : ie(3569);
            class K0 {
                constructor(e) {
                    if (this.url = e, this.events = new Ae.EventEmitter, this.registering = !1, !Xd(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return typeof this.socket < "u"
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                open(e = this.url) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        yield t.register(e)
                    })()
                }
                close() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        return new Promise((t, o) => {
                            typeof e.socket > "u" ? o(new Error("Connection already closed")) : (e.socket.onclose = a => {
                                e.onClose(a), t()
                            }, e.socket.close())
                        })
                    })()
                }
                send(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        typeof t.socket > "u" && (t.socket = yield t.register());
                        try {
                            t.socket.send(Wi(e))
                        } catch (o) {
                            t.onError(e.id, o)
                        }
                    })()
                }
                register(e = this.url) {
                    if (!Xd(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    if (this.registering) {
                        const t = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((o, a) => {
                            this.events.once("register_error", l => {
                                this.resetMaxListeners(), a(l)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return a(new Error("WebSocket connection is missing or invalid"));
                                o(this.socket)
                            })
                        })
                    }
                    return this.url = e, this.registering = !0, new Promise((t, o) => {
                        const a = new URLSearchParams(e).get("origin"),
                            l = (0, R0.isReactNative)() ? {
                                headers: {
                                    origin: a
                                }
                            } : {
                                rejectUnauthorized: (r = e, !new RegExp("wss?://localhost(:d{2,5})?").test(r))
                            },
                            f = new k0(e, [], l);
                        var r;
                        typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u" ? f.onerror = w => {
                            o(this.emitError(w.error))
                        } : f.on("error", w => {
                            o(this.emitError(w))
                        }), f.onopen = () => {
                            this.onOpen(f), t(f)
                        }
                    })
                }
                onOpen(e) {
                    e.onmessage = t => this.onPayload(t), e.onclose = t => this.onClose(t), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    const t = "string" == typeof e.data ? co(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    const o = this.parseError(t),
                        l = pa(e, o.message || o.toString());
                    this.events.emit("payload", l)
                }
                parseError(e, t = this.url) {
                    return Wd(e, th(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    const t = this.parseError(new Error(e ? .message || `WebSocket connection failed for host: ${th(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var q0 = ie(2650),
                z0 = ie.n(q0),
                B0 = function Z0(r, e) {
                    if (r.length >= 255) throw new TypeError("Alphabet too long");
                    for (var t = new Uint8Array(256), o = 0; o < t.length; o++) t[o] = 255;
                    for (var a = 0; a < r.length; a++) {
                        var l = r.charAt(a),
                            f = l.charCodeAt(0);
                        if (255 !== t[f]) throw new TypeError(l + " is ambiguous");
                        t[f] = a
                    }
                    var w = r.length,
                        C = r.charAt(0),
                        m = Math.log(w) / Math.log(256),
                        A = Math.log(256) / Math.log(w);

                    function X(Y) {
                        if ("string" != typeof Y) throw new TypeError("Expected String");
                        if (0 === Y.length) return new Uint8Array;
                        var Ee = 0;
                        if (" " !== Y[Ee]) {
                            for (var Re = 0, at = 0; Y[Ee] === C;) Re++, Ee++;
                            for (var Ot = (Y.length - Ee) * m + 1 >>> 0, dt = new Uint8Array(Ot); Y[Ee];) {
                                var Ze = t[Y.charCodeAt(Ee)];
                                if (255 === Ze) return;
                                for (var qe = 0, tt = Ot - 1;
                                    (0 !== Ze || qe < at) && -1 !== tt; tt--, qe++) dt[tt] = (Ze += w * dt[tt] >>> 0) % 256 >>> 0, Ze = Ze / 256 >>> 0;
                                if (0 !== Ze) throw new Error("Non-zero carry");
                                at = qe, Ee++
                            }
                            if (" " !== Y[Ee]) {
                                for (var bt = Ot - at; bt !== Ot && 0 === dt[bt];) bt++;
                                for (var wr = new Uint8Array(Re + (Ot - bt)), Ui = Re; bt !== Ot;) wr[Ui++] = dt[bt++];
                                return wr
                            }
                        }
                    }
                    return {
                        encode: function L(Y) {
                            if (Y instanceof Uint8Array || (ArrayBuffer.isView(Y) ? Y = new Uint8Array(Y.buffer, Y.byteOffset, Y.byteLength) : Array.isArray(Y) && (Y = Uint8Array.from(Y))), !(Y instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === Y.length) return "";
                            for (var Ee = 0, Re = 0, at = 0, Ot = Y.length; at !== Ot && 0 === Y[at];) at++, Ee++;
                            for (var dt = (Ot - at) * A + 1 >>> 0, Ze = new Uint8Array(dt); at !== Ot;) {
                                for (var qe = Y[at], tt = 0, bt = dt - 1;
                                    (0 !== qe || tt < Re) && -1 !== bt; bt--, tt++) Ze[bt] = (qe += 256 * Ze[bt] >>> 0) % w >>> 0, qe = qe / w >>> 0;
                                if (0 !== qe) throw new Error("Non-zero carry");
                                Re = tt, at++
                            }
                            for (var wr = dt - Re; wr !== dt && 0 === Ze[wr];) wr++;
                            for (var Ui = C.repeat(Ee); wr < dt; ++wr) Ui += r.charAt(Ze[wr]);
                            return Ui
                        },
                        decodeUnsafe: X,
                        decode: function be(Y) {
                            var Ee = X(Y);
                            if (Ee) return Ee;
                            throw new Error(`Non-${e} character`)
                        }
                    }
                };
            const nh = r => {
                if (r instanceof Uint8Array && "Uint8Array" === r.constructor.name) return r;
                if (r instanceof ArrayBuffer) return new Uint8Array(r);
                if (ArrayBuffer.isView(r)) return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class W0 {
                constructor(e, t, o) {
                    this.name = e, this.prefix = t, this.baseEncode = o
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class J0 {
                constructor(e, t, o) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = o
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return ih(this, e)
                }
            }
            class Q0 {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return ih(this, e)
                }
                decode(e) {
                    const o = this.decoders[e[0]];
                    if (o) return o.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const ih = (r, e) => new Q0({ ...r.decoders || {
                    [r.prefix]: r
                },
                ...e.decoders || {
                    [e.prefix]: e
                }
            });
            class Y0 {
                constructor(e, t, o, a) {
                    this.name = e, this.prefix = t, this.baseEncode = o, this.baseDecode = a, this.encoder = new W0(e, t, o), this.decoder = new J0(e, t, a)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            const ga = ({
                    name: r,
                    prefix: e,
                    encode: t,
                    decode: o
                }) => new Y0(r, e, t, o),
                go = ({
                    prefix: r,
                    name: e,
                    alphabet: t
                }) => {
                    const {
                        encode: o,
                        decode: a
                    } = B0(t, e);
                    return ga({
                        prefix: r,
                        name: e,
                        encode: o,
                        decode: l => nh(a(l))
                    })
                },
                Sr = ({
                    name: r,
                    prefix: e,
                    bitsPerChar: t,
                    alphabet: o
                }) => ga({
                    prefix: e,
                    name: r,
                    encode: a => ((r, e, t) => {
                        const o = "=" === e[e.length - 1],
                            a = (1 << t) - 1;
                        let l = "",
                            f = 0,
                            w = 0;
                        for (let C = 0; C < r.length; ++C)
                            for (w = w << 8 | r[C], f += 8; f > t;) f -= t, l += e[a & w >> f];
                        if (f && (l += e[a & w << t - f]), o)
                            for (; l.length * t & 7;) l += "=";
                        return l
                    })(a, o, t),
                    decode: a => ((r, e, t, o) => {
                        const a = {};
                        for (let A = 0; A < e.length; ++A) a[e[A]] = A;
                        let l = r.length;
                        for (;
                            "=" === r[l - 1];) --l;
                        const f = new Uint8Array(l * t / 8 | 0);
                        let w = 0,
                            C = 0,
                            m = 0;
                        for (let A = 0; A < l; ++A) {
                            const L = a[r[A]];
                            if (void 0 === L) throw new SyntaxError(`Non-${o} character`);
                            C = C << t | L, w += t, w >= 8 && (w -= 8, f[m++] = 255 & C >> w)
                        }
                        if (w >= t || 255 & C << 8 - w) throw new SyntaxError("Unexpected end of data");
                        return f
                    })(a, o, t, r)
                }),
                tb = ga({
                    prefix: "\0",
                    name: "identity",
                    encode: r => (r => (new TextDecoder).decode(r))(r),
                    decode: r => (r => (new TextEncoder).encode(r))(r)
                });
            var rb = Object.freeze({
                __proto__: null,
                identity: tb
            });
            const nb = Sr({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var ib = Object.freeze({
                __proto__: null,
                base2: nb
            });
            const sb = Sr({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var ob = Object.freeze({
                __proto__: null,
                base8: sb
            });
            const ab = go({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var cb = Object.freeze({
                __proto__: null,
                base10: ab
            });
            const ub = Sr({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                lb = Sr({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var fb = Object.freeze({
                __proto__: null,
                base16: ub,
                base16upper: lb
            });
            const db = Sr({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                hb = Sr({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                pb = Sr({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                _b = Sr({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                gb = Sr({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                yb = Sr({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                mb = Sr({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                vb = Sr({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                bb = Sr({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var wb = Object.freeze({
                __proto__: null,
                base32: db,
                base32upper: hb,
                base32pad: pb,
                base32padupper: _b,
                base32hex: gb,
                base32hexupper: yb,
                base32hexpad: mb,
                base32hexpadupper: vb,
                base32z: bb
            });
            const Eb = go({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                Ib = go({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var xb = Object.freeze({
                __proto__: null,
                base36: Eb,
                base36upper: Ib
            });
            const Ob = go({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                Sb = go({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var Pb = Object.freeze({
                __proto__: null,
                base58btc: Ob,
                base58flickr: Sb
            });
            const Nb = Sr({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                Rb = Sr({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                Ab = Sr({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                Tb = Sr({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var Cb = Object.freeze({
                __proto__: null,
                base64: Nb,
                base64pad: Rb,
                base64url: Ab,
                base64urlpad: Tb
            });
            const sh = Array.from("\u{1f680}\u{1fa90}\u2604\u{1f6f0}\u{1f30c}\u{1f311}\u{1f312}\u{1f313}\u{1f314}\u{1f315}\u{1f316}\u{1f317}\u{1f318}\u{1f30d}\u{1f30f}\u{1f30e}\u{1f409}\u2600\u{1f4bb}\u{1f5a5}\u{1f4be}\u{1f4bf}\u{1f602}\u2764\u{1f60d}\u{1f923}\u{1f60a}\u{1f64f}\u{1f495}\u{1f62d}\u{1f618}\u{1f44d}\u{1f605}\u{1f44f}\u{1f601}\u{1f525}\u{1f970}\u{1f494}\u{1f496}\u{1f499}\u{1f622}\u{1f914}\u{1f606}\u{1f644}\u{1f4aa}\u{1f609}\u263a\u{1f44c}\u{1f917}\u{1f49c}\u{1f614}\u{1f60e}\u{1f607}\u{1f339}\u{1f926}\u{1f389}\u{1f49e}\u270c\u2728\u{1f937}\u{1f631}\u{1f60c}\u{1f338}\u{1f64c}\u{1f60b}\u{1f497}\u{1f49a}\u{1f60f}\u{1f49b}\u{1f642}\u{1f493}\u{1f929}\u{1f604}\u{1f600}\u{1f5a4}\u{1f603}\u{1f4af}\u{1f648}\u{1f447}\u{1f3b6}\u{1f612}\u{1f92d}\u2763\u{1f61c}\u{1f48b}\u{1f440}\u{1f62a}\u{1f611}\u{1f4a5}\u{1f64b}\u{1f61e}\u{1f629}\u{1f621}\u{1f92a}\u{1f44a}\u{1f973}\u{1f625}\u{1f924}\u{1f449}\u{1f483}\u{1f633}\u270b\u{1f61a}\u{1f61d}\u{1f634}\u{1f31f}\u{1f62c}\u{1f643}\u{1f340}\u{1f337}\u{1f63b}\u{1f613}\u2b50\u2705\u{1f97a}\u{1f308}\u{1f608}\u{1f918}\u{1f4a6}\u2714\u{1f623}\u{1f3c3}\u{1f490}\u2639\u{1f38a}\u{1f498}\u{1f620}\u261d\u{1f615}\u{1f33a}\u{1f382}\u{1f33b}\u{1f610}\u{1f595}\u{1f49d}\u{1f64a}\u{1f639}\u{1f5e3}\u{1f4ab}\u{1f480}\u{1f451}\u{1f3b5}\u{1f91e}\u{1f61b}\u{1f534}\u{1f624}\u{1f33c}\u{1f62b}\u26bd\u{1f919}\u2615\u{1f3c6}\u{1f92b}\u{1f448}\u{1f62e}\u{1f646}\u{1f37b}\u{1f343}\u{1f436}\u{1f481}\u{1f632}\u{1f33f}\u{1f9e1}\u{1f381}\u26a1\u{1f31e}\u{1f388}\u274c\u270a\u{1f44b}\u{1f630}\u{1f928}\u{1f636}\u{1f91d}\u{1f6b6}\u{1f4b0}\u{1f353}\u{1f4a2}\u{1f91f}\u{1f641}\u{1f6a8}\u{1f4a8}\u{1f92c}\u2708\u{1f380}\u{1f37a}\u{1f913}\u{1f619}\u{1f49f}\u{1f331}\u{1f616}\u{1f476}\u{1f974}\u25b6\u27a1\u2753\u{1f48e}\u{1f4b8}\u2b07\u{1f628}\u{1f31a}\u{1f98b}\u{1f637}\u{1f57a}\u26a0\u{1f645}\u{1f61f}\u{1f635}\u{1f44e}\u{1f932}\u{1f920}\u{1f927}\u{1f4cc}\u{1f535}\u{1f485}\u{1f9d0}\u{1f43e}\u{1f352}\u{1f617}\u{1f911}\u{1f30a}\u{1f92f}\u{1f437}\u260e\u{1f4a7}\u{1f62f}\u{1f486}\u{1f446}\u{1f3a4}\u{1f647}\u{1f351}\u2744\u{1f334}\u{1f4a3}\u{1f438}\u{1f48c}\u{1f4cd}\u{1f940}\u{1f922}\u{1f445}\u{1f4a1}\u{1f4a9}\u{1f450}\u{1f4f8}\u{1f47b}\u{1f910}\u{1f92e}\u{1f3bc}\u{1f975}\u{1f6a9}\u{1f34e}\u{1f34a}\u{1f47c}\u{1f48d}\u{1f4e3}\u{1f942}"),
                jb = sh.reduce((r, e, t) => (r[t] = e, r), []),
                Db = sh.reduce((r, e, t) => (r[e.codePointAt(0)] = t, r), []),
                Lb = ga({
                    prefix: "\u{1f680}",
                    name: "base256emoji",
                    encode: function $b(r) {
                        return r.reduce((e, t) => e + jb[t], "")
                    },
                    decode: function Ub(r) {
                        const e = [];
                        for (const t of r) {
                            const o = Db[t.codePointAt(0)];
                            if (void 0 === o) throw new Error(`Non-base256emoji character: ${t}`);
                            e.push(o)
                        }
                        return new Uint8Array(e)
                    }
                });
            var Fb = Object.freeze({
                    __proto__: null,
                    base256emoji: Lb
                }),
                oh = 128,
                Kb = -128,
                qb = Math.pow(2, 31),
                Zb = 128,
                ch = 127,
                Hb = Math.pow(2, 7),
                Bb = Math.pow(2, 14),
                Vb = Math.pow(2, 21),
                Gb = Math.pow(2, 28),
                Wb = Math.pow(2, 35),
                Jb = Math.pow(2, 42),
                Qb = Math.pow(2, 49),
                Yb = Math.pow(2, 56),
                Xb = Math.pow(2, 63),
                tw = {
                    encode: function ah(r, e, t) {
                        e = e || [];
                        for (var o = t = t || 0; r >= qb;) e[t++] = 255 & r | oh, r /= 128;
                        for (; r & Kb;) e[t++] = 255 & r | oh, r >>>= 7;
                        return e[t] = 0 | r, ah.bytes = t - o + 1, e
                    },
                    decode: function Nu(r, o) {
                        var f, t = 0,
                            a = 0,
                            l = o = o || 0,
                            w = r.length;
                        do {
                            if (l >= w) throw Nu.bytes = 0, new RangeError("Could not decode varint");
                            f = r[l++], t += a < 28 ? (f & ch) << a : (f & ch) * Math.pow(2, a), a += 7
                        } while (f >= Zb);
                        return Nu.bytes = l - o, t
                    },
                    encodingLength: function(r) {
                        return r < Hb ? 1 : r < Bb ? 2 : r < Vb ? 3 : r < Gb ? 4 : r < Wb ? 5 : r < Jb ? 6 : r < Qb ? 7 : r < Yb ? 8 : r < Xb ? 9 : 10
                    }
                },
                uh = tw;
            const lh = (r, e, t = 0) => (uh.encode(r, e, t), e),
                fh = r => uh.encodingLength(r),
                Ru = (r, e) => {
                    const t = e.byteLength,
                        o = fh(r),
                        a = o + fh(t),
                        l = new Uint8Array(a + t);
                    return lh(r, l, 0), lh(t, l, o), l.set(e, a), new rw(r, t, e, l)
                };
            class rw {
                constructor(e, t, o, a) {
                    this.code = e, this.size = t, this.digest = o, this.bytes = a
                }
            }
            const dh = ({
                name: r,
                code: e,
                encode: t
            }) => new nw(r, e, t);
            class nw {
                constructor(e, t, o) {
                    this.name = e, this.code = t, this.encode = o
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        const t = this.encode(e);
                        return t instanceof Uint8Array ? Ru(this.code, t) : t.then(o => Ru(this.code, o))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const hh = r => function() {
                    var e = (0, O.Z)(function*(t) {
                        return new Uint8Array(yield crypto.subtle.digest(r, t))
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                iw = dh({
                    name: "sha2-256",
                    code: 18,
                    encode: hh("SHA-256")
                }),
                sw = dh({
                    name: "sha2-512",
                    code: 19,
                    encode: hh("SHA-512")
                });
            Object.freeze({
                __proto__: null,
                sha256: iw,
                sha512: sw
            });
            const _h = nh;
            Object.freeze({
                __proto__: null,
                identity: {
                    code: 0,
                    name: "identity",
                    encode: _h,
                    digest: r => Ru(0, _h(r))
                }
            }), new TextEncoder, new TextDecoder;
            const gh = { ...rb,
                ...ib,
                ...ob,
                ...cb,
                ...fb,
                ...wb,
                ...xb,
                ...Pb,
                ...Cb,
                ...Fb
            };

            function yh(r) {
                return null != globalThis.Buffer ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : r
            }

            function mh(r, e, t, o) {
                return {
                    name: r,
                    prefix: e,
                    encoder: {
                        name: r,
                        prefix: e,
                        encode: t
                    },
                    decoder: {
                        decode: o
                    }
                }
            }
            const vh = mh("utf8", "u", r => "u" + new TextDecoder("utf8").decode(r), r => (new TextEncoder).encode(r.substring(1))),
                Au = mh("ascii", "a", r => {
                    let e = "a";
                    for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
                    return e
                }, r => {
                    const e = function uw(r = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? yh(globalThis.Buffer.allocUnsafe(r)) : new Uint8Array(r)
                    }((r = r.substring(1)).length);
                    for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
                    return e
                }),
                lw = {
                    utf8: vh,
                    "utf-8": vh,
                    hex: gh.base16,
                    latin1: Au,
                    ascii: Au,
                    binary: Au,
                    ...gh
                },
                Ci = "wc@2:core:",
                pw = {
                    database: ":memory:"
                },
                wh = "client_ed25519_seed",
                gw = q.ONE_DAY,
                ww = q.SIX_HOURS,
                Ih = "wss://relay.walletconnect.com",
                xh = "wss://relay.walletconnect.org",
                Sw = q.ONE_SECOND,
                Kn_created = "subscription_created",
                Kn_deleted = "subscription_deleted",
                jw = 1e3 * q.FIVE_SECONDS,
                yo = {
                    wc_pairingDelete: {
                        req: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                yn_expired = "expirer_expired",
                Cu = "verify-api",
                Ss = "https://verify.walletconnect.com",
                ju = "https://verify.walletconnect.org",
                kw = [Ss, ju];
            class Kw {
                constructor(e, t) {
                    var o = this;
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = Ci, this.init = (0, O.Z)(function*() {
                        if (!o.initialized) {
                            const a = yield o.getKeyChain();
                            typeof a < "u" && (o.keychain = a), o.initialized = !0
                        }
                    }), this.has = a => (this.isInitialized(), this.keychain.has(a)), this.set = function() {
                        var a = (0, O.Z)(function*(l, f) {
                            o.isInitialized(), o.keychain.set(l, f), yield o.persist()
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.get = a => {
                        this.isInitialized();
                        const l = this.keychain.get(a);
                        if (typeof l > "u") {
                            const {
                                message: f
                            } = pt("NO_MATCHING_KEY", `${this.name}: ${a}`);
                            throw new Error(f)
                        }
                        return l
                    }, this.del = function() {
                        var a = (0, O.Z)(function*(l) {
                            o.isInitialized(), o.keychain.delete(l), yield o.persist()
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.core = e, this.logger = (0, mt.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                setKeyChain(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, Rd(e))
                    })()
                }
                getKeyChain() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        const t = yield e.core.storage.getItem(e.storageKey);
                        return typeof t < "u" ? Ad(t) : void 0
                    })()
                }
                persist() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        yield e.setKeyChain(e.keychain)
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pt("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class qw {
                constructor(e, t, o) {
                    var a = this;
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = (0, O.Z)(function*() {
                        a.initialized || (yield a.keychain.init(), a.initialized = !0)
                    }), this.hasKeys = l => (this.isInitialized(), this.keychain.has(l)), this.getClientId = (0, O.Z)(function*() {
                        return a.isInitialized(), fd(dd(yield a.getClientSeed()).publicKey)
                    }), this.generateKeyPair = () => {
                        this.isInitialized();
                        const l = function cv() {
                            const r = Oe.Au();
                            return {
                                privateKey: (0, se.BB)(r.secretKey, Lr),
                                publicKey: (0, se.BB)(r.publicKey, Lr)
                            }
                        }();
                        return this.setPrivateKey(l.publicKey, l.privateKey)
                    }, this.signJWT = function() {
                        var l = (0, O.Z)(function*(f) {
                            a.isInitialized();
                            const C = dd(yield a.getClientSeed()),
                                m = fu();
                            return yield function km(r, e, t, o) {
                                return nu.apply(this, arguments)
                            }(m, f, gw, C)
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.generateSharedKey = (l, f, w) => {
                        this.isInitialized();
                        const m = function uv(r, e) {
                            const t = Oe.gi((0, se.mL)(r, Lr), (0, se.mL)(e, Lr), !0),
                                o = new ge.t(ke.mE, t).expand(32);
                            return (0, se.BB)(o, Lr)
                        }(this.getPrivateKey(l), f);
                        return this.setSymKey(m, w)
                    }, this.setSymKey = function() {
                        var l = (0, O.Z)(function*(f, w) {
                            a.isInitialized();
                            const C = w || function lv(r) {
                                const e = (0, ke.vp)((0, se.mL)(r, Lr));
                                return (0, se.BB)(e, Lr)
                            }(f);
                            return yield a.keychain.set(C, f), C
                        });
                        return function(f, w) {
                            return l.apply(this, arguments)
                        }
                    }(), this.deleteKeyPair = function() {
                        var l = (0, O.Z)(function*(f) {
                            a.isInitialized(), yield a.keychain.del(f)
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.deleteSymKey = function() {
                        var l = (0, O.Z)(function*(f) {
                            a.isInitialized(), yield a.keychain.del(f)
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.encode = function() {
                        var l = (0, O.Z)(function*(f, w, C) {
                            a.isInitialized();
                            const m = Id(C),
                                A = Wi(w);
                            if (xd(m)) {
                                const Y = m.senderPublicKey,
                                    Ee = m.receiverPublicKey;
                                f = yield a.generateSharedKey(Y, Ee)
                            }
                            const L = a.getSymKey(f),
                                {
                                    type: X,
                                    senderPublicKey: be
                                } = m;
                            return function dv(r) {
                                const e = function fv(r) {
                                    return (0, se.mL)(`${r}`, bd)
                                }(typeof r.type < "u" ? r.type : 0);
                                if (1 === lo(e) && typeof r.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
                                const t = typeof r.senderPublicKey < "u" ? (0, se.mL)(r.senderPublicKey, Lr) : void 0,
                                    o = typeof r.iv < "u" ? (0, se.mL)(r.iv, Lr) : (0, $e.randomBytes)(12);
                                return function pv(r) {
                                    if (1 === lo(r.type)) {
                                        if (typeof r.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
                                        return (0, se.BB)((0, se.zo)([r.type, r.senderPublicKey, r.iv, r.sealed]), au)
                                    }
                                    return (0, se.BB)((0, se.zo)([r.type, r.iv, r.sealed]), au)
                                }({
                                    type: e,
                                    sealed: new Le.OK((0, se.mL)(r.symKey, Lr)).seal(o, (0, se.mL)(r.message, cu)),
                                    iv: o,
                                    senderPublicKey: t
                                })
                            }({
                                type: X,
                                symKey: L,
                                message: A,
                                senderPublicKey: be
                            })
                        });
                        return function(f, w, C) {
                            return l.apply(this, arguments)
                        }
                    }(), this.decode = function() {
                        var l = (0, O.Z)(function*(f, w, C) {
                            a.isInitialized();
                            const m = function _v(r, e) {
                                const t = la(r);
                                return Id({
                                    type: lo(t.type),
                                    senderPublicKey: typeof t.senderPublicKey < "u" ? (0, se.BB)(t.senderPublicKey, Lr) : void 0,
                                    receiverPublicKey: e ? .receiverPublicKey
                                })
                            }(w, C);
                            if (xd(m)) {
                                const A = m.receiverPublicKey,
                                    L = m.senderPublicKey;
                                f = yield a.generateSharedKey(A, L)
                            }
                            try {
                                const L = function hv(r) {
                                    const e = new Le.OK((0, se.mL)(r.symKey, Lr)),
                                        {
                                            sealed: t,
                                            iv: o
                                        } = la(r.encoded),
                                        a = e.open(o, t);
                                    if (null === a) throw new Error("Failed to decrypt");
                                    return (0, se.BB)(a, cu)
                                }({
                                    symKey: a.getSymKey(f),
                                    encoded: w
                                });
                                return co(L)
                            } catch (A) {
                                a.logger.error(`Failed to decode message from topic: '${f}', clientId: '${yield a.getClientId()}'`), a.logger.error(A)
                            }
                        });
                        return function(f, w, C) {
                            return l.apply(this, arguments)
                        }
                    }(), this.getPayloadType = l => lo(la(l).type), this.getPayloadSenderPublicKey = l => {
                        const f = la(l);
                        return f.senderPublicKey ? (0, se.BB)(f.senderPublicKey, Lr) : void 0
                    }, this.core = e, this.logger = (0, mt.generateChildLogger)(t, this.name), this.keychain = o || new Kw(this.core, this.logger)
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                setPrivateKey(e, t) {
                    var o = this;
                    return (0, O.Z)(function*() {
                        return yield o.keychain.set(e, t), e
                    })()
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                getClientSeed() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        let t = "";
                        try {
                            t = e.keychain.get(wh)
                        } catch {
                            t = fu(), yield e.keychain.set(wh, t)
                        }
                        return function fw(r, e = "utf8") {
                            const t = lw[e];
                            if (!t) throw new Error(`Unsupported encoding "${e}"`);
                            return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? t.decoder.decode(`${t.prefix}${r}`) : yh(globalThis.Buffer.from(r, "utf-8"))
                        }(t, "base16")
                    })()
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pt("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class zw extends gm {
                constructor(e, t) {
                    var o;
                    super(e, t), o = this, this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = Ci, this.init = (0, O.Z)(function*() {
                        if (!o.initialized) {
                            o.logger.trace("Initialized");
                            try {
                                const a = yield o.getRelayerMessages();
                                typeof a < "u" && (o.messages = a), o.logger.debug(`Successfully Restored records for ${o.name}`), o.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: o.messages.size
                                })
                            } catch (a) {
                                o.logger.debug(`Failed to Restore records for ${o.name}`), o.logger.error(a)
                            } finally {
                                o.initialized = !0
                            }
                        }
                    }), this.set = function() {
                        var a = (0, O.Z)(function*(l, f) {
                            o.isInitialized();
                            const w = du(f);
                            let C = o.messages.get(l);
                            return typeof C > "u" && (C = {}), typeof C[w] < "u" || (C[w] = f, o.messages.set(l, C), yield o.persist()), w
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.get = a => {
                        this.isInitialized();
                        let l = this.messages.get(a);
                        return typeof l > "u" && (l = {}), l
                    }, this.has = (a, l) => (this.isInitialized(), typeof this.get(a)[du(l)] < "u"), this.del = function() {
                        var a = (0, O.Z)(function*(l) {
                            o.isInitialized(), o.messages.delete(l), yield o.persist()
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.logger = (0, mt.generateChildLogger)(e, this.name), this.core = t
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                setRelayerMessages(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, Rd(e))
                    })()
                }
                getRelayerMessages() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        const t = yield e.core.storage.getItem(e.storageKey);
                        return typeof t < "u" ? Ad(t) : void 0
                    })()
                }
                persist() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        yield e.setRelayerMessages(e.messages)
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pt("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class Zw extends ym {
                constructor(e, t) {
                    var o;
                    super(e, t), o = this, this.relayer = e, this.logger = t, this.events = new Ae.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, q.toMiliseconds)(q.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = function() {
                        var a = (0, O.Z)(function*(l, f, w) {
                            var C;
                            o.logger.debug("Publishing Payload"), o.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: l,
                                    message: f,
                                    opts: w
                                }
                            });
                            try {
                                const m = w ? .ttl || ww,
                                    A = mu(w),
                                    L = w ? .prompt || !1,
                                    X = w ? .tag || 0,
                                    be = w ? .id || Jd().toString(),
                                    Y = {
                                        topic: l,
                                        message: f,
                                        opts: {
                                            ttl: m,
                                            relay: A,
                                            prompt: L,
                                            tag: X,
                                            id: be
                                        }
                                    },
                                    Ee = setTimeout(() => o.queue.set(be, Y), o.publishTimeout);
                                try {
                                    yield yield ho(o.rpcPublish(l, f, m, A, L, X, be), o.publishTimeout, "Failed to publish payload, please try again."), o.removeRequestFromQueue(be), o.relayer.events.emit("relayer_publish", Y)
                                } catch (Re) {
                                    if (o.logger.debug("Publishing Payload stalled"), o.needsTransportRestart = !0, null != (C = w ? .internal) && C.throwOnFailedPublish) throw o.removeRequestFromQueue(be), Re;
                                    return
                                } finally {
                                    clearTimeout(Ee)
                                }
                                o.logger.debug("Successfully Published Payload"), o.logger.trace({
                                    type: "method",
                                    method: "publish",
                                    params: {
                                        topic: l,
                                        message: f,
                                        opts: w
                                    }
                                })
                            } catch (m) {
                                throw o.logger.debug("Failed to Publish Payload"), o.logger.error(m), m
                            }
                        });
                        return function(l, f, w) {
                            return a.apply(this, arguments)
                        }
                    }(), this.on = (a, l) => {
                        this.events.on(a, l)
                    }, this.once = (a, l) => {
                        this.events.once(a, l)
                    }, this.off = (a, l) => {
                        this.events.off(a, l)
                    }, this.removeListener = (a, l) => {
                        this.events.removeListener(a, l)
                    }, this.relayer = e, this.logger = (0, mt.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, o, a, l, f, w) {
                    var C, m, A, L;
                    const X = {
                        method: da(a.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: o,
                            prompt: l,
                            tag: f
                        },
                        id: w
                    };
                    return ei(null == (C = X.params) ? void 0 : C.prompt) && (null == (m = X.params) || delete m.prompt), ei(null == (A = X.params) ? void 0 : A.tag) && (null == (L = X.params) || delete L.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: X
                    }), this.relayer.request(X)
                }
                removeRequestFromQueue(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    var e = this;
                    this.queue.forEach(function() {
                        var t = (0, O.Z)(function*(o) {
                            const {
                                topic: a,
                                message: l,
                                opts: f
                            } = o;
                            yield e.publish(a, l, f)
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(uo.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit("relayer_connection_stalled");
                        this.checkQueue()
                    }), this.relayer.on("relayer_message_ack", e => {
                        this.removeRequestFromQueue(e.id.toString())
                    })
                }
            }
            class Hw {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        const o = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...o, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") return void this.map.delete(e);
                        if (!this.map.has(e)) return;
                        const o = this.get(e);
                        if (!this.exists(e, t)) return;
                        const a = o.filter(l => l !== t);
                        a.length ? this.map.set(e, a) : this.map.delete(e)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var Bw = Object.defineProperty,
                Vw = Object.defineProperties,
                Gw = Object.getOwnPropertyDescriptors,
                Oh = Object.getOwnPropertySymbols,
                Ww = Object.prototype.hasOwnProperty,
                Jw = Object.prototype.propertyIsEnumerable,
                Sh = (r, e, t) => e in r ? Bw(r, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : r[e] = t,
                vo = (r, e) => {
                    for (var t in e || (e = {})) Ww.call(e, t) && Sh(r, t, e[t]);
                    if (Oh)
                        for (var t of Oh(e)) Jw.call(e, t) && Sh(r, t, e[t]);
                    return r
                },
                Du = (r, e) => Vw(r, Gw(e));
            class Qw extends bm {
                constructor(e, t) {
                    var o;
                    super(e, t), o = this, this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new Hw, this.events = new Ae.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Ci, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = (0, O.Z)(function*() {
                        o.initialized || (o.logger.trace("Initialized"), o.registerEventListeners(), o.clientId = yield o.relayer.core.crypto.getClientId())
                    }), this.subscribe = function() {
                        var a = (0, O.Z)(function*(l, f) {
                            yield o.restartToComplete(), o.isInitialized(), o.logger.debug("Subscribing Topic"), o.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: l,
                                    opts: f
                                }
                            });
                            try {
                                const w = mu(f),
                                    C = {
                                        topic: l,
                                        relay: w
                                    };
                                o.pending.set(l, C);
                                const m = yield o.rpcSubscribe(l, w);
                                return o.onSubscribe(m, C), o.logger.debug("Successfully Subscribed Topic"), o.logger.trace({
                                    type: "method",
                                    method: "subscribe",
                                    params: {
                                        topic: l,
                                        opts: f
                                    }
                                }), m
                            } catch (w) {
                                throw o.logger.debug("Failed to Subscribe Topic"), o.logger.error(w), w
                            }
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.unsubscribe = function() {
                        var a = (0, O.Z)(function*(l, f) {
                            yield o.restartToComplete(), o.isInitialized(), typeof f ? .id < "u" ? yield o.unsubscribeById(l, f.id, f): yield o.unsubscribeByTopic(l, f)
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isSubscribed = function() {
                        var a = (0, O.Z)(function*(l) {
                            return !!o.topics.includes(l) || (yield new Promise((f, w) => {
                                const C = new q.Watch;
                                C.start(o.pendingSubscriptionWatchLabel);
                                const m = setInterval(() => {
                                    !o.pending.has(l) && o.topics.includes(l) && (clearInterval(m), C.stop(o.pendingSubscriptionWatchLabel), f(!0)), C.elapsed(o.pendingSubscriptionWatchLabel) >= jw && (clearInterval(m), C.stop(o.pendingSubscriptionWatchLabel), w(new Error("Subscription resolution timeout")))
                                }, o.pollingInterval)
                            }).catch(() => !1))
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.on = (a, l) => {
                        this.events.on(a, l)
                    }, this.once = (a, l) => {
                        this.events.once(a, l)
                    }, this.off = (a, l) => {
                        this.events.off(a, l)
                    }, this.removeListener = (a, l) => {
                        this.events.removeListener(a, l)
                    }, this.restart = (0, O.Z)(function*() {
                        o.restartInProgress = !0, yield o.restore(), yield o.reset(), o.restartInProgress = !1
                    }), this.relayer = e, this.logger = (0, mt.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let o = !1;
                    try {
                        o = this.getSubscription(e).topic === t
                    } catch {}
                    return o
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                unsubscribeByTopic(e, t) {
                    var o = this;
                    return (0, O.Z)(function*() {
                        const a = o.topicMap.get(e);
                        yield Promise.all(a.map(function() {
                            var l = (0, O.Z)(function*(f) {
                                return yield o.unsubscribeById(e, f, t)
                            });
                            return function(f) {
                                return l.apply(this, arguments)
                            }
                        }()))
                    })()
                }
                unsubscribeById(e, t, o) {
                    var a = this;
                    return (0, O.Z)(function*() {
                        a.logger.debug("Unsubscribing Topic"), a.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: o
                            }
                        });
                        try {
                            const l = mu(o);
                            yield a.rpcUnsubscribe(e, t, l);
                            const f = Mn("USER_DISCONNECTED", `${a.name}, ${e}`);
                            yield a.onUnsubscribe(e, t, f), a.logger.debug("Successfully Unsubscribed Topic"), a.logger.trace({
                                type: "method",
                                method: "unsubscribe",
                                params: {
                                    topic: e,
                                    id: t,
                                    opts: o
                                }
                            })
                        } catch (l) {
                            throw a.logger.debug("Failed to Unsubscribe Topic"), a.logger.error(l), l
                        }
                    })()
                }
                rpcSubscribe(e, t) {
                    var o = this;
                    return (0, O.Z)(function*() {
                        const a = {
                            method: da(t.protocol).subscribe,
                            params: {
                                topic: e
                            }
                        };
                        o.logger.debug("Outgoing Relay Payload"), o.logger.trace({
                            type: "payload",
                            direction: "outgoing",
                            request: a
                        });
                        try {
                            yield yield ho(o.relayer.request(a), o.subscribeTimeout)
                        } catch {
                            o.logger.debug("Outgoing Relay Subscribe Payload stalled"), o.relayer.events.emit("relayer_connection_stalled")
                        }
                        return du(e + o.clientId)
                    })()
                }
                rpcBatchSubscribe(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        if (!e.length) return;
                        const a = {
                            method: da(e[0].relay.protocol).batchSubscribe,
                            params: {
                                topics: e.map(l => l.topic)
                            }
                        };
                        t.logger.debug("Outgoing Relay Payload"), t.logger.trace({
                            type: "payload",
                            direction: "outgoing",
                            request: a
                        });
                        try {
                            return yield yield ho(t.relayer.request(a), t.subscribeTimeout)
                        } catch {
                            t.logger.debug("Outgoing Relay Payload stalled"), t.relayer.events.emit("relayer_connection_stalled")
                        }
                    })()
                }
                rpcUnsubscribe(e, t, o) {
                    const a = {
                        method: da(o.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: a
                    }), this.relayer.request(a)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, Du(vo({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(t => {
                        this.setSubscription(t.id, vo({}, t)), this.pending.delete(t.topic)
                    })
                }
                onUnsubscribe(e, t, o) {
                    var a = this;
                    return (0, O.Z)(function*() {
                        a.events.removeAllListeners(t), a.hasSubscription(t, e) && a.deleteSubscription(t, o), yield a.relayer.messages.del(e)
                    })()
                }
                setRelayerSubscriptions(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        yield t.relayer.core.storage.setItem(t.storageKey, e)
                    })()
                }
                getRelayerSubscriptions() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        return yield e.relayer.core.storage.getItem(e.storageKey)
                    })()
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, vo({}, t)), this.topicMap.set(t.topic, e), this.events.emit(Kn_created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    const t = this.subscriptions.get(e);
                    if (!t) {
                        const {
                            message: o
                        } = pt("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw new Error(o)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    const o = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(o.topic, e), this.events.emit(Kn_deleted, Du(vo({}, o), {
                        reason: t
                    }))
                }
                persist() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        yield e.setRelayerSubscriptions(e.values), e.events.emit("subscription_sync")
                    })()
                }
                reset() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        if (e.cached.length) {
                            const t = Math.ceil(e.cached.length / e.batchSubscribeTopicsLimit);
                            for (let o = 0; o < t; o++) {
                                const a = e.cached.splice(0, e.batchSubscribeTopicsLimit);
                                yield e.batchSubscribe(a)
                            }
                        }
                        e.events.emit("subscription_resubscribed")
                    })()
                }
                restore() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        try {
                            const t = yield e.getRelayerSubscriptions();
                            if (typeof t > "u" || !t.length) return;
                            if (e.subscriptions.size) {
                                const {
                                    message: o
                                } = pt("RESTORE_WILL_OVERRIDE", e.name);
                                throw e.logger.error(o), e.logger.error(`${e.name}: ${JSON.stringify(e.values)}`), new Error(o)
                            }
                            e.cached = t, e.logger.debug(`Successfully Restored subscriptions for ${e.name}`), e.logger.trace({
                                type: "method",
                                method: "restore",
                                subscriptions: e.values
                            })
                        } catch (t) {
                            e.logger.debug(`Failed to Restore subscriptions for ${e.name}`), e.logger.error(t)
                        }
                    })()
                }
                batchSubscribe(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        if (!e.length) return;
                        const o = yield t.rpcBatchSubscribe(e);
                        (function po(r, e) {
                            return !!Array.isArray(r) && (!(typeof e < "u" && r.length) || r.every(e))
                        })(o) && t.onBatchSubscribe(o.map((a, l) => Du(vo({}, e[l]), {
                            id: a
                        })))
                    })()
                }
                onConnect() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.restartInProgress || (yield e.restart(), e.onEnable())
                    })()
                }
                onDisconnect() {
                    this.onDisable()
                }
                checkPending() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        if (!e.initialized || e.relayer.transportExplicitlyClosed) return;
                        const t = [];
                        e.pending.forEach(o => {
                            t.push(o)
                        }), yield e.batchSubscribe(t)
                    })()
                }
                registerEventListeners() {
                    var e = this;
                    this.relayer.core.heartbeat.on(uo.HEARTBEAT_EVENTS.pulse, (0, O.Z)(function*() {
                        yield e.checkPending()
                    })), this.relayer.on("relayer_connect", (0, O.Z)(function*() {
                        yield e.onConnect()
                    })), this.relayer.on("relayer_disconnect", () => {
                        this.onDisconnect()
                    }), this.events.on(Kn_created, function() {
                        var t = (0, O.Z)(function*(o) {
                            const a = Kn_created;
                            e.logger.info(`Emitting ${a}`), e.logger.debug({
                                type: "event",
                                event: a,
                                data: o
                            }), yield e.persist()
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }()), this.events.on(Kn_deleted, function() {
                        var t = (0, O.Z)(function*(o) {
                            const a = Kn_deleted;
                            e.logger.info(`Emitting ${a}`), e.logger.debug({
                                type: "event",
                                event: a,
                                data: o
                            }), yield e.persist()
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pt("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                restartToComplete() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.restartInProgress && (yield new Promise(t => {
                            const o = setInterval(() => {
                                e.restartInProgress || (clearInterval(o), t())
                            }, e.pollingInterval)
                        }))
                    })()
                }
            }
            var Yw = Object.defineProperty,
                Ph = Object.getOwnPropertySymbols,
                Xw = Object.prototype.hasOwnProperty,
                e1 = Object.prototype.propertyIsEnumerable,
                Nh = (r, e, t) => e in r ? Yw(r, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : r[e] = t;
            class r1 extends mm {
                constructor(e) {
                    var t;
                    super(e), t = this, this.protocol = "wc", this.version = 2, this.events = new Ae.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = function() {
                        var o = (0, O.Z)(function*(a) {
                            t.logger.debug("Publishing Request Payload");
                            try {
                                return yield t.toEstablishConnection(), yield t.provider.request(a)
                            } catch (l) {
                                throw t.logger.debug("Failed to Publish Request"), t.logger.error(l), l
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onPayloadHandler = o => {
                        this.onProviderPayload(o)
                    }, this.onConnectHandler = () => {
                        this.events.emit("relayer_connect")
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = o => {
                        this.logger.error(o), this.events.emit("relayer_error", o), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on("payload", this.onPayloadHandler), this.provider.on("connect", this.onConnectHandler), this.provider.on("disconnect", this.onDisconnectHandler), this.provider.on("error", this.onProviderErrorHandler)
                    }, this.core = e.core, this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? (0, mt.generateChildLogger)(e.logger, this.name) : (0, mt.pino)((0, mt.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new zw(this.logger, e.core), this.subscriber = new Qw(this, this.logger), this.publisher = new Zw(this, this.logger), this.relayUrl = e ? .relayUrl || Ih, this.projectId = e.projectId, this.bundleId = function Ev() {
                        var r;
                        try {
                            return Es() && typeof global < "u" && typeof(null == global ? void 0 : global.Application) < "u" ? null == (r = global.Application) ? void 0 : r.applicationId : void 0
                        } catch {
                            return
                        }
                    }(), this.provider = {}
                }
                init() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.logger.trace("Initialized"), e.registerEventListeners(), yield e.createProvider(), yield Promise.all([e.messages.init(), e.subscriber.init()]);
                        try {
                            yield e.transportOpen()
                        } catch {
                            e.logger.warn(`Connection via ${e.relayUrl} failed, attempting to connect via failover domain ${xh}...`), yield e.restartTransport(xh)
                        }
                        e.initialized = !0, setTimeout((0, O.Z)(function*() {
                            0 === e.subscriber.topics.length && (e.logger.info("No topics subscribed to after init, closing transport"), yield e.transportClose(), e.transportExplicitlyClosed = !1)
                        }), 1e4)
                    })()
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                publish(e, t, o) {
                    var a = this;
                    return (0, O.Z)(function*() {
                        a.isInitialized(), yield a.publisher.publish(e, t, o), yield a.recordMessageEvent({
                            topic: e,
                            message: t,
                            publishedAt: Date.now()
                        })
                    })()
                }
                subscribe(e, t) {
                    var o = this;
                    return (0, O.Z)(function*() {
                        var a;
                        o.isInitialized();
                        let f, l = (null == (a = o.subscriber.topicMap.get(e)) ? void 0 : a[0]) || "";
                        if (l) return l;
                        const w = C => {
                            C.topic === e && (o.subscriber.off(Kn_created, w), f())
                        };
                        return yield Promise.all([new Promise(C => {
                            f = C, o.subscriber.on(Kn_created, w)
                        }), new Promise(function() {
                            var C = (0, O.Z)(function*(m) {
                                l = yield o.subscriber.subscribe(e, t), m()
                            });
                            return function(m) {
                                return C.apply(this, arguments)
                            }
                        }())]), l
                    })()
                }
                unsubscribe(e, t) {
                    var o = this;
                    return (0, O.Z)(function*() {
                        o.isInitialized(), yield o.subscriber.unsubscribe(e, t)
                    })()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                transportClose() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.transportExplicitlyClosed = !0, e.hasExperiencedNetworkDisruption && e.connected ? yield ho(e.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => e.onProviderDisconnect()): e.connected && (yield e.provider.disconnect())
                    })()
                }
                transportOpen(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        if (t.transportExplicitlyClosed = !1, yield t.confirmOnlineStateOrThrow(), !t.connectionAttemptInProgress) {
                            e && e !== t.relayUrl && (t.relayUrl = e, yield t.transportClose(), yield t.createProvider()), t.connectionAttemptInProgress = !0;
                            try {
                                yield Promise.all([new Promise(o => {
                                    if (!t.initialized) return o();
                                    t.subscriber.once("subscription_resubscribed", () => {
                                        o()
                                    })
                                }), new Promise(function() {
                                    var o = (0, O.Z)(function*(a, l) {
                                        try {
                                            yield ho(t.provider.connect(), 1e4, `Socket stalled when trying to connect to ${t.relayUrl}`)
                                        } catch (f) {
                                            return void l(f)
                                        }
                                        a()
                                    });
                                    return function(a, l) {
                                        return o.apply(this, arguments)
                                    }
                                }())])
                            } catch (o) {
                                if (t.logger.error(o), !t.isConnectionStalled(o.message)) throw o;
                                t.provider.events.emit("disconnect")
                            } finally {
                                t.connectionAttemptInProgress = !1, t.hasExperiencedNetworkDisruption = !1
                            }
                        }
                    })()
                }
                restartTransport(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        yield t.confirmOnlineStateOrThrow(), !t.connectionAttemptInProgress && (t.relayUrl = e || t.relayUrl, yield t.transportClose(), yield t.createProvider(), yield t.transportOpen())
                    })()
                }
                confirmOnlineStateOrThrow() {
                    return (0, O.Z)(function*() {
                        if (!(yield zd())) throw new Error("No internet connection detected. Please restart your network and try again.")
                    })()
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                createProvider() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.provider.connection && e.unregisterProviderListeners();
                        const t = yield e.core.crypto.signJWT(e.relayUrl);
                        e.provider = new pi(new K0(function Pv({
                            protocol: r,
                            version: e,
                            relayUrl: t,
                            sdkVersion: o,
                            auth: a,
                            projectId: l,
                            useOnCloseEvent: f,
                            bundleId: w
                        }) {
                            const C = t.split("?"),
                                m = Sv(r, e, o),
                                L = function Iv(r, e) {
                                    let t = ca.parse(r);
                                    return t = Pd(Pd({}, t), e), ca.stringify(t)
                                }(C[1] || "", {
                                    auth: a,
                                    ua: m,
                                    projectId: l,
                                    useOnCloseEvent: f || void 0,
                                    origin: w || void 0
                                });
                            return C[0] + "?" + L
                        }({
                            sdkVersion: "2.10.6",
                            protocol: e.protocol,
                            version: e.version,
                            relayUrl: e.relayUrl,
                            projectId: e.projectId,
                            auth: t,
                            useOnCloseEvent: !0,
                            bundleId: e.bundleId
                        }))), e.registerProviderListeners()
                    })()
                }
                recordMessageEvent(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        const {
                            topic: o,
                            message: a
                        } = e;
                        yield t.messages.set(o, a)
                    })()
                }
                shouldIgnoreMessageEvent(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        const {
                            topic: o,
                            message: a
                        } = e;
                        if (!a || 0 === a.length) return t.logger.debug(`Ignoring invalid/empty message: ${a}`), !0;
                        if (!(yield t.subscriber.isSubscribed(o))) return t.logger.debug(`Ignoring message for non-subscribed topic ${o}`), !0;
                        const l = t.messages.has(o, a);
                        return l && t.logger.debug(`Ignoring duplicate message: ${a}`), l
                    })()
                }
                onProviderPayload(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        if (t.logger.debug("Incoming Relay Payload"), t.logger.trace({
                                type: "payload",
                                direction: "incoming",
                                payload: e
                            }), Pu(e)) {
                            if (!e.method.endsWith("_subscription")) return;
                            const o = e.params,
                                {
                                    topic: a,
                                    message: l,
                                    publishedAt: f
                                } = o.data,
                                w = {
                                    topic: a,
                                    message: l,
                                    publishedAt: f
                                };
                            t.logger.debug("Emitting Relayer Payload"), t.logger.trace(((r, e) => {
                                for (var t in e || (e = {})) Xw.call(e, t) && Nh(r, t, e[t]);
                                if (Ph)
                                    for (var t of Ph(e)) e1.call(e, t) && Nh(r, t, e[t]);
                                return r
                            })({
                                type: "event",
                                event: o.id
                            }, w)), t.events.emit(o.id, w), yield t.acknowledgePayload(e), yield t.onMessageEvent(w)
                        } else _a(e) && t.events.emit("relayer_message_ack", e)
                    })()
                }
                onMessageEvent(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        (yield t.shouldIgnoreMessageEvent(e)) || (t.events.emit("relayer_message", e), yield t.recordMessageEvent(e))
                    })()
                }
                acknowledgePayload(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        const o = Su(e.id, !0);
                        yield t.provider.connection.send(o)
                    })()
                }
                unregisterProviderListeners() {
                    this.provider.off("payload", this.onPayloadHandler), this.provider.off("connect", this.onConnectHandler), this.provider.off("disconnect", this.onDisconnectHandler), this.provider.off("error", this.onProviderErrorHandler)
                }
                registerEventListeners() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.events.on("relayer_connection_stalled", () => {
                            e.restartTransport().catch(o => e.logger.error(o))
                        });
                        let t = yield zd();
                        ! function b0(r) {
                            switch (Is()) {
                                case Vr.browser:
                                    ! function w0(r) {
                                        !Es() && fo() && (window.addEventListener("online", () => r(!0)), window.addEventListener("offline", () => r(!1)))
                                    }(r);
                                    break;
                                case Vr.reactNative:
                                    ! function E0(r) {
                                        Es() && typeof global < "u" && null != global && global.NetInfo && global ? .NetInfo.addEventListener(e => r(e ? .isConnected))
                                    }(r)
                            }
                        }(function() {
                            var o = (0, O.Z)(function*(a) {
                                e.initialized && t !== a && (t = a, a ? yield e.restartTransport().catch(l => e.logger.error(l)): (e.hasExperiencedNetworkDisruption = !0, yield e.transportClose().catch(l => e.logger.error(l))))
                            });
                            return function(a) {
                                return o.apply(this, arguments)
                            }
                        }())
                    })()
                }
                onProviderDisconnect() {
                    this.events.emit("relayer_disconnect"), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    var e = this;
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout((0, O.Z)(function*() {
                        yield e.restartTransport().catch(t => e.logger.error(t))
                    }), (0, q.toMiliseconds)(Sw)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pt("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                toEstablishConnection() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        if (yield e.confirmOnlineStateOrThrow(), !e.connected) {
                            if (e.connectionAttemptInProgress) return yield new Promise(t => {
                                const o = setInterval(() => {
                                    e.connected && (clearInterval(o), t())
                                }, e.connectionStatusPollingInterval)
                            });
                            yield e.restartTransport()
                        }
                    })()
                }
            }
            var n1 = Object.defineProperty,
                Rh = Object.getOwnPropertySymbols,
                i1 = Object.prototype.hasOwnProperty,
                s1 = Object.prototype.propertyIsEnumerable,
                Ah = (r, e, t) => e in r ? n1(r, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : r[e] = t,
                Th = (r, e) => {
                    for (var t in e || (e = {})) i1.call(e, t) && Ah(r, t, e[t]);
                    if (Rh)
                        for (var t of Rh(e)) s1.call(e, t) && Ah(r, t, e[t]);
                    return r
                };
            class ya extends vm {
                constructor(e, t, o, a = Ci, l = void 0) {
                    var f;
                    super(e, t, o, a), f = this, this.core = e, this.logger = t, this.name = o, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Ci, this.init = (0, O.Z)(function*() {
                        f.initialized || (f.logger.trace("Initialized"), yield f.restore(), f.cached.forEach(w => {
                            f.getKey && null !== w && !ei(w) ? f.map.set(f.getKey(w), w) : function s0(r) {
                                var e;
                                return null == (e = r ? .proposer) ? void 0 : e.publicKey
                            }(w) ? f.map.set(w.id, w) : function o0(r) {
                                return r ? .topic
                            }(w) && f.map.set(w.topic, w)
                        }), f.cached = [], f.initialized = !0)
                    }), this.set = function() {
                        var w = (0, O.Z)(function*(C, m) {
                            f.isInitialized(), f.map.has(C) ? yield f.update(C, m): (f.logger.debug("Setting value"), f.logger.trace({
                                type: "method",
                                method: "set",
                                key: C,
                                value: m
                            }), f.map.set(C, m), yield f.persist())
                        });
                        return function(C, m) {
                            return w.apply(this, arguments)
                        }
                    }(), this.get = w => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: w
                    }), this.getData(w)), this.getAll = w => (this.isInitialized(), w ? this.values.filter(C => Object.keys(w).every(m => z0()(C[m], w[m]))) : this.values), this.update = function() {
                        var w = (0, O.Z)(function*(C, m) {
                            f.isInitialized(), f.logger.debug("Updating value"), f.logger.trace({
                                type: "method",
                                method: "update",
                                key: C,
                                update: m
                            });
                            const A = Th(Th({}, f.getData(C)), m);
                            f.map.set(C, A), yield f.persist()
                        });
                        return function(C, m) {
                            return w.apply(this, arguments)
                        }
                    }(), this.delete = function() {
                        var w = (0, O.Z)(function*(C, m) {
                            f.isInitialized(), f.map.has(C) && (f.logger.debug("Deleting value"), f.logger.trace({
                                type: "method",
                                method: "delete",
                                key: C,
                                reason: m
                            }), f.map.delete(C), yield f.persist())
                        });
                        return function(C, m) {
                            return w.apply(this, arguments)
                        }
                    }(), this.logger = (0, mt.generateChildLogger)(t, this.name), this.storagePrefix = a, this.getKey = l
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                setDataStore(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, e)
                    })()
                }
                getDataStore() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        return yield e.core.storage.getItem(e.storageKey)
                    })()
                }
                getData(e) {
                    const t = this.map.get(e);
                    if (!t) {
                        const {
                            message: o
                        } = pt("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(o), new Error(o)
                    }
                    return t
                }
                persist() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        yield e.setDataStore(e.values)
                    })()
                }
                restore() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        try {
                            const t = yield e.getDataStore();
                            if (typeof t > "u" || !t.length) return;
                            if (e.map.size) {
                                const {
                                    message: o
                                } = pt("RESTORE_WILL_OVERRIDE", e.name);
                                throw e.logger.error(o), new Error(o)
                            }
                            e.cached = t, e.logger.debug(`Successfully Restored value for ${e.name}`), e.logger.trace({
                                type: "method",
                                method: "restore",
                                value: e.values
                            })
                        } catch (t) {
                            e.logger.debug(`Failed to Restore value for ${e.name}`), e.logger.error(t)
                        }
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pt("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class o1 {
                constructor(e, t) {
                    var o = this;
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(je()), this.initialized = !1, this.storagePrefix = Ci, this.ignoredPayloadTypes = [1], this.registeredMethods = [], this.init = (0, O.Z)(function*() {
                        o.initialized || (yield o.pairings.init(), yield o.cleanup(), o.registerRelayerEvents(), o.registerExpirerEvents(), o.initialized = !0, o.logger.trace("Initialized"))
                    }), this.register = ({
                        methods: a
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...a])]
                    }, this.create = (0, O.Z)(function*() {
                        o.isInitialized();
                        const a = fu(),
                            l = yield o.core.crypto.setSymKey(a), f = fa(q.FIVE_MINUTES), w = {
                                protocol: "irn"
                            }, C = {
                                topic: l,
                                expiry: f,
                                relay: w,
                                active: !1
                            }, m = function zv(r) {
                                return `${r.protocol}:${r.topic}@${r.version}?` + ca.stringify(((r, e) => {
                                    for (var t in e || (e = {})) Lv.call(e, t) && Dd(r, t, e[t]);
                                    if (jd)
                                        for (var t of jd(e)) Fv.call(e, t) && Dd(r, t, e[t]);
                                    return r
                                })({
                                    symKey: r.symKey
                                }, function qv(r, e = "-") {
                                    const o = {};
                                    return Object.keys(r).forEach(a => {
                                        r[a] && (o["relay" + e + a] = r[a])
                                    }), o
                                }(r.relay)))
                            }({
                                protocol: o.core.protocol,
                                version: o.core.version,
                                topic: l,
                                symKey: a,
                                relay: w
                            });
                        return yield o.pairings.set(l, C), yield o.core.relayer.subscribe(l), o.core.expirer.set(l, f), {
                            topic: l,
                            uri: m
                        }
                    }), this.pair = function() {
                        var a = (0, O.Z)(function*(l) {
                            o.isInitialized(), o.isValidPair(l);
                            const {
                                topic: f,
                                symKey: w,
                                relay: C
                            } = $d(l.uri);
                            let m;
                            if (o.pairings.keys.includes(f) && (m = o.pairings.get(f), m.active)) throw new Error(`Pairing already exists: ${f}. Please try again with a new connection URI.`);
                            const A = fa(q.FIVE_MINUTES),
                                L = {
                                    topic: f,
                                    relay: C,
                                    expiry: A,
                                    active: !1
                                };
                            return yield o.pairings.set(f, L), o.core.expirer.set(f, A), l.activatePairing && (yield o.activate({
                                topic: f
                            })), o.events.emit("pairing_create", L), o.core.crypto.keychain.has(f) || (yield o.core.crypto.setSymKey(w, f), yield o.core.relayer.subscribe(f, {
                                relay: C
                            })), L
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.activate = function() {
                        var a = (0, O.Z)(function*({
                            topic: l
                        }) {
                            o.isInitialized();
                            const f = fa(q.THIRTY_DAYS);
                            yield o.pairings.update(l, {
                                active: !0,
                                expiry: f
                            }), o.core.expirer.set(l, f)
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var a = (0, O.Z)(function*(l) {
                            o.isInitialized(), yield o.isValidPing(l);
                            const {
                                topic: f
                            } = l;
                            if (o.pairings.keys.includes(f)) {
                                const w = yield o.sendRequest(f, "wc_pairingPing", {}), {
                                    done: C,
                                    resolve: m,
                                    reject: A
                                } = function Tv(r = q.FIVE_MINUTES, e) {
                                    const t = (0, q.toMiliseconds)(r || q.FIVE_MINUTES);
                                    let o, a, l;
                                    return {
                                        resolve: f => {
                                            l && o && (clearTimeout(l), o(f))
                                        },
                                        reject: f => {
                                            l && a && (clearTimeout(l), a(f))
                                        },
                                        done: () => new Promise((f, w) => {
                                            l = setTimeout(() => {
                                                w(new Error(e))
                                            }, t), o = f, a = w
                                        })
                                    }
                                }();
                                o.events.once(_u("pairing_ping", w), ({
                                    error: L
                                }) => {
                                    L ? A(L) : m()
                                }), yield C()
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.updateExpiry = function() {
                        var a = (0, O.Z)(function*({
                            topic: l,
                            expiry: f
                        }) {
                            o.isInitialized(), yield o.pairings.update(l, {
                                expiry: f
                            })
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.updateMetadata = function() {
                        var a = (0, O.Z)(function*({
                            topic: l,
                            metadata: f
                        }) {
                            o.isInitialized(), yield o.pairings.update(l, {
                                peerMetadata: f
                            })
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = function() {
                        var a = (0, O.Z)(function*(l) {
                            o.isInitialized(), yield o.isValidDisconnect(l);
                            const {
                                topic: f
                            } = l;
                            o.pairings.keys.includes(f) && (yield o.sendRequest(f, "wc_pairingDelete", Mn("USER_DISCONNECTED")), yield o.deletePairing(f))
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.sendRequest = function() {
                        var a = (0, O.Z)(function*(l, f, w) {
                            const C = Os(f, w),
                                m = yield o.core.crypto.encode(l, C), A = yo[f].req;
                            return o.core.history.set(l, C), o.core.relayer.publish(l, m, A), C.id
                        });
                        return function(l, f, w) {
                            return a.apply(this, arguments)
                        }
                    }(), this.sendResult = function() {
                        var a = (0, O.Z)(function*(l, f, w) {
                            const C = Su(l, w),
                                m = yield o.core.crypto.encode(f, C), A = yield o.core.history.get(f, l), L = yo[A.request.method].res;
                            yield o.core.relayer.publish(f, m, L), yield o.core.history.resolve(C)
                        });
                        return function(l, f, w) {
                            return a.apply(this, arguments)
                        }
                    }(), this.sendError = function() {
                        var a = (0, O.Z)(function*(l, f, w) {
                            const C = pa(l, w),
                                m = yield o.core.crypto.encode(f, C), A = yield o.core.history.get(f, l), L = yo[A.request.method] ? yo[A.request.method].res : yo.unregistered_method.res;
                            yield o.core.relayer.publish(f, m, L), yield o.core.history.resolve(C)
                        });
                        return function(l, f, w) {
                            return a.apply(this, arguments)
                        }
                    }(), this.deletePairing = function() {
                        var a = (0, O.Z)(function*(l, f) {
                            yield o.core.relayer.unsubscribe(l), yield Promise.all([o.pairings.delete(l, Mn("USER_DISCONNECTED")), o.core.crypto.deleteSymKey(l), f ? Promise.resolve() : o.core.expirer.del(l)])
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.cleanup = (0, O.Z)(function*() {
                        const a = o.pairings.getAll().filter(l => Cd(l.expiry));
                        yield Promise.all(a.map(l => o.deletePairing(l.topic)))
                    }), this.onRelayEventRequest = a => {
                        const {
                            topic: l,
                            payload: f
                        } = a;
                        switch (f.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(l, f);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(l, f);
                            default:
                                return this.onUnknownRpcMethodRequest(l, f)
                        }
                    }, this.onRelayEventResponse = function() {
                        var a = (0, O.Z)(function*(l) {
                            const {
                                topic: f,
                                payload: w
                            } = l, C = (yield o.core.history.get(f, w.id)).request.method;
                            return "wc_pairingPing" === C ? o.onPairingPingResponse(f, w) : o.onUnknownRpcMethodResponse(C)
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onPairingPingRequest = function() {
                        var a = (0, O.Z)(function*(l, f) {
                            const {
                                id: w
                            } = f;
                            try {
                                o.isValidPing({
                                    topic: l
                                }), yield o.sendResult(w, l, !0), o.events.emit("pairing_ping", {
                                    id: w,
                                    topic: l
                                })
                            } catch (C) {
                                yield o.sendError(w, l, C), o.logger.error(C)
                            }
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onPairingPingResponse = (a, l) => {
                        const {
                            id: f
                        } = l;
                        setTimeout(() => {
                            hi(l) ? this.events.emit(_u("pairing_ping", f), {}) : kn(l) && this.events.emit(_u("pairing_ping", f), {
                                error: l.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = function() {
                        var a = (0, O.Z)(function*(l, f) {
                            const {
                                id: w
                            } = f;
                            try {
                                o.isValidDisconnect({
                                    topic: l
                                }), yield o.deletePairing(l), o.events.emit("pairing_delete", {
                                    id: w,
                                    topic: l
                                })
                            } catch (C) {
                                yield o.sendError(w, l, C), o.logger.error(C)
                            }
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onUnknownRpcMethodRequest = function() {
                        var a = (0, O.Z)(function*(l, f) {
                            const {
                                id: w,
                                method: C
                            } = f;
                            try {
                                if (o.registeredMethods.includes(C)) return;
                                const m = Mn("WC_METHOD_UNSUPPORTED", C);
                                yield o.sendError(w, l, m), o.logger.error(m)
                            } catch (m) {
                                yield o.sendError(w, l, m), o.logger.error(m)
                            }
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onUnknownRpcMethodResponse = a => {
                        this.registeredMethods.includes(a) || this.logger.error(Mn("WC_METHOD_UNSUPPORTED", a))
                    }, this.isValidPair = a => {
                        var l;
                        if (!wu(a)) {
                            const {
                                message: w
                            } = pt("MISSING_OR_INVALID", `pair() params: ${a}`);
                            throw new Error(w)
                        }
                        if (! function i0(r) {
                                if (un(r, !1)) try {
                                    return typeof new URL(r) < "u"
                                } catch {
                                    return !1
                                }
                                return !1
                            }(a.uri)) {
                            const {
                                message: w
                            } = pt("MISSING_OR_INVALID", `pair() uri: ${a.uri}`);
                            throw new Error(w)
                        }
                        const f = $d(a.uri);
                        if (null == (l = f ? .relay) || !l.protocol) {
                            const {
                                message: w
                            } = pt("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw new Error(w)
                        }
                        if (null == f || !f.symKey) {
                            const {
                                message: w
                            } = pt("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw new Error(w)
                        }
                    }, this.isValidPing = function() {
                        var a = (0, O.Z)(function*(l) {
                            if (!wu(l)) {
                                const {
                                    message: w
                                } = pt("MISSING_OR_INVALID", `ping() params: ${l}`);
                                throw new Error(w)
                            }
                            const {
                                topic: f
                            } = l;
                            yield o.isValidPairingTopic(f)
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidDisconnect = function() {
                        var a = (0, O.Z)(function*(l) {
                            if (!wu(l)) {
                                const {
                                    message: w
                                } = pt("MISSING_OR_INVALID", `disconnect() params: ${l}`);
                                throw new Error(w)
                            }
                            const {
                                topic: f
                            } = l;
                            yield o.isValidPairingTopic(f)
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidPairingTopic = function() {
                        var a = (0, O.Z)(function*(l) {
                            if (!un(l, !1)) {
                                const {
                                    message: f
                                } = pt("MISSING_OR_INVALID", `pairing topic should be a string: ${l}`);
                                throw new Error(f)
                            }
                            if (!o.pairings.keys.includes(l)) {
                                const {
                                    message: f
                                } = pt("NO_MATCHING_KEY", `pairing topic doesn't exist: ${l}`);
                                throw new Error(f)
                            }
                            if (Cd(o.pairings.get(l).expiry)) {
                                yield o.deletePairing(l);
                                const {
                                    message: f
                                } = pt("EXPIRED", `pairing topic: ${l}`);
                                throw new Error(f)
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.core = e, this.logger = (0, mt.generateChildLogger)(t, this.name), this.pairings = new ya(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pt("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
                registerRelayerEvents() {
                    var e = this;
                    this.core.relayer.on("relayer_message", function() {
                        var t = (0, O.Z)(function*(o) {
                            const {
                                topic: a,
                                message: l
                            } = o;
                            if (!e.pairings.keys.includes(a) || e.ignoredPayloadTypes.includes(e.core.crypto.getPayloadType(l))) return;
                            const f = yield e.core.crypto.decode(a, l);
                            try {
                                Pu(f) ? (e.core.history.set(a, f), e.onRelayEventRequest({
                                    topic: a,
                                    payload: f
                                })) : _a(f) && (yield e.core.history.resolve(f), yield e.onRelayEventResponse({
                                    topic: a,
                                    payload: f
                                }), e.core.history.delete(a, f.id))
                            } catch (w) {
                                e.logger.error(w)
                            }
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerExpirerEvents() {
                    var e = this;
                    this.core.expirer.on(yn_expired, function() {
                        var t = (0, O.Z)(function*(o) {
                            const {
                                topic: a
                            } = function Dv(r) {
                                const [e, t] = r.split(":"), o = {
                                    id: void 0,
                                    topic: void 0
                                };
                                if ("topic" === e && "string" == typeof t) o.topic = t;
                                else {
                                    if ("id" !== e || !Number.isInteger(Number(t))) throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
                                    o.id = Number(t)
                                }
                                return o
                            }(o.target);
                            a && e.pairings.keys.includes(a) && (yield e.deletePairing(a, !0), e.events.emit("pairing_expire", {
                                topic: a
                            }))
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }
            class a1 extends _m {
                constructor(e, t) {
                    var o;
                    super(e, t), o = this, this.core = e, this.logger = t, this.records = new Map, this.events = new Ae.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Ci, this.init = (0, O.Z)(function*() {
                        o.initialized || (o.logger.trace("Initialized"), yield o.restore(), o.cached.forEach(a => o.records.set(a.id, a)), o.cached = [], o.registerEventListeners(), o.initialized = !0)
                    }), this.set = (a, l, f) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: a,
                                request: l,
                                chainId: f
                            }), this.records.has(l.id)) return;
                        const w = {
                            id: l.id,
                            topic: a,
                            request: {
                                method: l.method,
                                params: l.params || null
                            },
                            chainId: f,
                            expiry: fa(q.THIRTY_DAYS)
                        };
                        this.records.set(w.id, w), this.events.emit("history_created", w)
                    }, this.resolve = function() {
                        var a = (0, O.Z)(function*(l) {
                            if (o.isInitialized(), o.logger.debug("Updating JSON-RPC response history record"), o.logger.trace({
                                    type: "method",
                                    method: "update",
                                    response: l
                                }), !o.records.has(l.id)) return;
                            const f = yield o.getRecord(l.id);
                            typeof f.response > "u" && (f.response = kn(l) ? {
                                error: l.error
                            } : {
                                result: l.result
                            }, o.records.set(f.id, f), o.events.emit("history_updated", f))
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.get = function() {
                        var a = (0, O.Z)(function*(l, f) {
                            return o.isInitialized(), o.logger.debug("Getting record"), o.logger.trace({
                                type: "method",
                                method: "get",
                                topic: l,
                                id: f
                            }), yield o.getRecord(f)
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.delete = (a, l) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: l
                        }), this.values.forEach(f => {
                            if (f.topic === a) {
                                if (typeof l < "u" && f.id !== l) return;
                                this.records.delete(f.id), this.events.emit("history_deleted", f)
                            }
                        })
                    }, this.exists = function() {
                        var a = (0, O.Z)(function*(l, f) {
                            return o.isInitialized(), !!o.records.has(f) && (yield o.getRecord(f)).topic === l
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.on = (a, l) => {
                        this.events.on(a, l)
                    }, this.once = (a, l) => {
                        this.events.once(a, l)
                    }, this.off = (a, l) => {
                        this.events.off(a, l)
                    }, this.removeListener = (a, l) => {
                        this.events.removeListener(a, l)
                    }, this.logger = (0, mt.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const e = [];
                    return this.values.forEach(t => {
                        if (typeof t.response < "u") return;
                        const o = {
                            topic: t.topic,
                            request: Os(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(o)
                    }), e
                }
                setJsonRpcRecords(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, e)
                    })()
                }
                getJsonRpcRecords() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        return yield e.core.storage.getItem(e.storageKey)
                    })()
                }
                getRecord(e) {
                    this.isInitialized();
                    const t = this.records.get(e);
                    if (!t) {
                        const {
                            message: o
                        } = pt("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw new Error(o)
                    }
                    return t
                }
                persist() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        yield e.setJsonRpcRecords(e.values), e.events.emit("history_sync")
                    })()
                }
                restore() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        try {
                            const t = yield e.getJsonRpcRecords();
                            if (typeof t > "u" || !t.length) return;
                            if (e.records.size) {
                                const {
                                    message: o
                                } = pt("RESTORE_WILL_OVERRIDE", e.name);
                                throw e.logger.error(o), new Error(o)
                            }
                            e.cached = t, e.logger.debug(`Successfully Restored records for ${e.name}`), e.logger.trace({
                                type: "method",
                                method: "restore",
                                records: e.values
                            })
                        } catch (t) {
                            e.logger.debug(`Failed to Restore records for ${e.name}`), e.logger.error(t)
                        }
                    })()
                }
                registerEventListeners() {
                    this.events.on("history_created", e => {
                        const t = "history_created";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on("history_updated", e => {
                        const t = "history_updated";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on("history_deleted", e => {
                        const t = "history_deleted";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.core.heartbeat.on(uo.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(e => {
                            (0, q.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pt("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class c1 extends wm {
                constructor(e, t) {
                    var o;
                    super(e, t), o = this, this.core = e, this.logger = t, this.expirations = new Map, this.events = new Ae.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Ci, this.init = (0, O.Z)(function*() {
                        o.initialized || (o.logger.trace("Initialized"), yield o.restore(), o.cached.forEach(a => o.expirations.set(a.target, a)), o.cached = [], o.registerEventListeners(), o.initialized = !0)
                    }), this.has = a => {
                        try {
                            const l = this.formatTarget(a);
                            return typeof this.getExpiration(l) < "u"
                        } catch {
                            return !1
                        }
                    }, this.set = (a, l) => {
                        this.isInitialized();
                        const f = this.formatTarget(a),
                            w = {
                                target: f,
                                expiry: l
                            };
                        this.expirations.set(f, w), this.checkExpiry(f, w), this.events.emit("expirer_created", {
                            target: f,
                            expiration: w
                        })
                    }, this.get = a => {
                        this.isInitialized();
                        const l = this.formatTarget(a);
                        return this.getExpiration(l)
                    }, this.del = a => {
                        if (this.isInitialized(), this.has(a)) {
                            const l = this.formatTarget(a),
                                f = this.getExpiration(l);
                            this.expirations.delete(l), this.events.emit("expirer_deleted", {
                                target: l,
                                expiration: f
                            })
                        }
                    }, this.on = (a, l) => {
                        this.events.on(a, l)
                    }, this.once = (a, l) => {
                        this.events.once(a, l)
                    }, this.off = (a, l) => {
                        this.events.off(a, l)
                    }, this.removeListener = (a, l) => {
                        this.events.removeListener(a, l)
                    }, this.logger = (0, mt.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return function Cv(r) {
                        return Td("topic", r)
                    }(e);
                    if ("number" == typeof e) return function jv(r) {
                        return Td("id", r)
                    }(e);
                    const {
                        message: t
                    } = pt("UNKNOWN_TYPE", "Target type: " + typeof e);
                    throw new Error(t)
                }
                setExpirations(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        yield t.core.storage.setItem(t.storageKey, e)
                    })()
                }
                getExpirations() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        return yield e.core.storage.getItem(e.storageKey)
                    })()
                }
                persist() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        yield e.setExpirations(e.values), e.events.emit("expirer_sync")
                    })()
                }
                restore() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        try {
                            const t = yield e.getExpirations();
                            if (typeof t > "u" || !t.length) return;
                            if (e.expirations.size) {
                                const {
                                    message: o
                                } = pt("RESTORE_WILL_OVERRIDE", e.name);
                                throw e.logger.error(o), new Error(o)
                            }
                            e.cached = t, e.logger.debug(`Successfully Restored expirations for ${e.name}`), e.logger.trace({
                                type: "method",
                                method: "restore",
                                expirations: e.values
                            })
                        } catch (t) {
                            e.logger.debug(`Failed to Restore expirations for ${e.name}`), e.logger.error(t)
                        }
                    })()
                }
                getExpiration(e) {
                    const t = this.expirations.get(e);
                    if (!t) {
                        const {
                            message: o
                        } = pt("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(o), new Error(o)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    const {
                        expiry: o
                    } = t;
                    (0, q.toMiliseconds)(o) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(yn_expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(uo.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on("expirer_created", e => {
                        const t = "expirer_created";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(yn_expired, e => {
                        const t = yn_expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on("expirer_deleted", e => {
                        const t = "expirer_deleted";
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: e
                        } = pt("NOT_INITIALIZED", this.name);
                        throw new Error(e)
                    }
                }
            }
            class u1 extends Em {
                constructor(e, t) {
                    var o;
                    super(e, t), o = this, this.projectId = e, this.logger = t, this.name = Cu, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = function() {
                        var a = (0, O.Z)(function*(l) {
                            if (o.verifyDisabled || Es() || !fo()) return;
                            const f = o.getVerifyUrl(l ? .verifyUrl);
                            o.verifyUrl !== f && o.removeIframe(), o.verifyUrl = f;
                            try {
                                yield o.createIframe()
                            } catch (w) {
                                o.logger.info(`Verify iframe failed to load: ${o.verifyUrl}`), o.logger.info(w)
                            }
                            if (!o.initialized) {
                                o.removeIframe(), o.verifyUrl = ju;
                                try {
                                    yield o.createIframe()
                                } catch (w) {
                                    o.logger.info(`Verify iframe failed to load: ${o.verifyUrl}`), o.logger.info(w), o.verifyDisabled = !0
                                }
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.register = function() {
                        var a = (0, O.Z)(function*(l) {
                            o.initialized ? o.sendPost(l.attestationId) : (o.addToQueue(l.attestationId), yield o.init())
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.resolve = function() {
                        var a = (0, O.Z)(function*(l) {
                            if (o.isDevEnv) return "";
                            const f = o.getVerifyUrl(l ? .verifyUrl);
                            let w;
                            try {
                                w = yield o.fetchAttestation(l.attestationId, f)
                            } catch (C) {
                                o.logger.info(`failed to resolve attestation: ${l.attestationId} from url: ${f}`), o.logger.info(C), w = yield o.fetchAttestation(l.attestationId, ju)
                            }
                            return w
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.fetchAttestation = function() {
                        var a = (0, O.Z)(function*(l, f) {
                            o.logger.info(`resolving attestation: ${l} from url: ${f}`);
                            const w = o.startAbortTimer(2 * q.ONE_SECOND),
                                C = yield fetch(`${f}/attestation/${l}`, {
                                    signal: o.abortController.signal
                                });
                            return clearTimeout(w), 200 === C.status ? yield C.json(): void 0
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.addToQueue = a => {
                        this.queue.push(a)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(a => this.sendPost(a)), this.queue = [])
                    }, this.sendPost = a => {
                        var l;
                        try {
                            if (!this.iframe) return;
                            null == (l = this.iframe.contentWindow) || l.postMessage(a, "*"), this.logger.info(`postMessage sent: ${a} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = (0, O.Z)(function*() {
                        let a;
                        const l = f => {
                            "verify_ready" === f.data && (o.initialized = !0, o.processQueue(), window.removeEventListener("message", l), a())
                        };
                        yield Promise.race([new Promise(f => {
                            if (document.getElementById(Cu)) return f();
                            window.addEventListener("message", l);
                            const w = document.createElement("iframe");
                            w.id = Cu, w.src = `${o.verifyUrl}/${o.projectId}`, w.style.display = "none", document.body.append(w), o.iframe = w, a = f
                        }), new Promise((f, w) => setTimeout(() => {
                            window.removeEventListener("message", l), w("verify iframe load timeout")
                        }, (0, q.toMiliseconds)(q.FIVE_SECONDS)))])
                    }), this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = a => {
                        let l = a || Ss;
                        return kw.includes(l) || (this.logger.info(`verify url: ${l}, not included in trusted list, assigning default: ${Ss}`), l = Ss), l
                    }, this.logger = (0, mt.generateChildLogger)(t, this.name), this.verifyUrl = Ss, this.abortController = new AbortController, this.isDevEnv = pu() && process.env.IS_VITEST
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                startAbortTimer(e) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, q.toMiliseconds)(e))
                }
            }
            var l1 = Object.defineProperty,
                Ch = Object.getOwnPropertySymbols,
                f1 = Object.prototype.hasOwnProperty,
                d1 = Object.prototype.propertyIsEnumerable,
                jh = (r, e, t) => e in r ? l1(r, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : r[e] = t,
                Dh = (r, e) => {
                    for (var t in e || (e = {})) f1.call(e, t) && jh(r, t, e[t]);
                    if (Ch)
                        for (var t of Ch(e)) d1.call(e, t) && jh(r, t, e[t]);
                    return r
                };
            class $u extends pm {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = "core", this.events = new Ae.EventEmitter, this.initialized = !1, this.on = (o, a) => this.events.on(o, a), this.once = (o, a) => this.events.once(o, a), this.off = (o, a) => this.events.off(o, a), this.removeListener = (o, a) => this.events.removeListener(o, a), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || Ih, this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
                    const t = typeof e ? .logger < "u" && "string" != typeof e ? .logger ? e.logger : (0, mt.pino)((0, mt.getDefaultLoggerOptions)({
                        level: e ? .logger || "error"
                    }));
                    this.logger = (0, mt.generateChildLogger)(t, this.name), this.heartbeat = new uo.HeartBeat, this.crypto = new qw(this, this.logger, e ? .keychain), this.history = new a1(this, this.logger), this.expirer = new c1(this, this.logger), this.storage = null != e && e.storage ? e.storage : new hm(Dh(Dh({}, pw), e ? .storageOptions)), this.relayer = new r1({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new o1(this, this.logger), this.verify = new u1(this.projectId || "", this.logger)
                }
                static init(e) {
                    return (0, O.Z)(function*() {
                        const t = new $u(e);
                        yield t.initialize();
                        const o = yield t.crypto.getClientId();
                        return yield t.storage.setItem("WALLETCONNECT_CLIENT_ID", o), t
                    })()
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                start() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.initialized || (yield e.initialize())
                    })()
                }
                initialize() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.logger.trace("Initialized");
                        try {
                            yield e.crypto.init(), yield e.history.init(), yield e.expirer.init(), yield e.relayer.init(), yield e.heartbeat.init(), yield e.pairing.init(), e.initialized = !0, e.logger.info("Core Initialization Success")
                        } catch (t) {
                            throw e.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), e.logger.error(t.message), t
                        }
                    })()
                }
            }
            const h1 = $u;

            function Uu(r, e) {
                return r.includes(":") ? [r] : e.chains || []
            }
            ie(960);

            function qu(r) {
                const e = (0, ke.vp)((0, se.mL)(r, "utf8"));
                return (0, se.BB)(e, "base16")
            }
            const R1 = "ReactNative",
                Wr = {
                    reactNative: "react-native",
                    node: "node",
                    browser: "browser",
                    unknown: "unknown"
                };

            function Hh() {
                return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
            }

            function wo() {
                return !Hh() && !!(0, Pe.getNavigator)()
            }

            function Ns() {
                return function bo() {
                    return !(0, Pe.getDocument)() && !!(0, Pe.getNavigator)() && navigator.product === R1
                }() ? Wr.reactNative : Hh() ? Wr.node : wo() ? Wr.browser : Wr.unknown
            }

            function Yi(r, e) {
                return r.filter(t => e.includes(t)).length === r.length
            }

            function Eo(r = q.FIVE_MINUTES, e) {
                const t = (0, q.toMiliseconds)(r || q.FIVE_MINUTES);
                let o, a, l;
                return {
                    resolve: f => {
                        l && o && (clearTimeout(l), o(f))
                    },
                    reject: f => {
                        l && a && (clearTimeout(l), a(f))
                    },
                    done: () => new Promise((f, w) => {
                        l = setTimeout(() => {
                            w(new Error(e))
                        }, t), o = f, a = w
                    })
                }
            }

            function Xi(r, e) {
                return (0, q.fromMiliseconds)((e || Date.now()) + (0, q.toMiliseconds)(r))
            }

            function Rs(r) {
                return Date.now() >= (0, q.toMiliseconds)(r)
            }

            function Pr(r, e) {
                return `${r}${e?`:${e}`:""}`
            }

            function Zu() {
                return (Zu = (0, O.Z)(function*({
                    id: r,
                    topic: e,
                    wcDeepLink: t
                }) {
                    try {
                        if (!t) return;
                        let a = ("string" == typeof t ? JSON.parse(t) : t) ? .href;
                        if ("string" != typeof a) return;
                        a.endsWith("/") && (a = a.slice(0, -1));
                        const l = `${a}/wc?requestId=${r}&sessionTopic=${e}`,
                            f = Ns();
                        f === Wr.browser ? l.startsWith("https://") ? window.open(l, "_blank", "noreferrer noopener") : window.open(l, "_self", "noreferrer noopener") : f === Wr.reactNative && typeof(null == global ? void 0 : global.Linking) < "u" && (yield global.Linking.openURL(l))
                    } catch (o) {
                        console.error(o)
                    }
                })).apply(this, arguments)
            }

            function Hu() {
                return (Hu = (0, O.Z)(function*(r, e) {
                    try {
                        return (yield r.getItem(e)) || (wo() ? localStorage.getItem(e) : void 0)
                    } catch (t) {
                        console.error(t)
                    }
                })).apply(this, arguments)
            }

            function As(r) {
                const e = [];
                return r.forEach(t => {
                    const [o, a] = t.split(":");
                    e.push(`${o}:${a}`)
                }), e
            }
            const uE = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                lE = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function Ye(r, e) {
                const {
                    message: t,
                    code: o
                } = lE[r];
                return {
                    message: e ? `${t} ${e}` : t,
                    code: o
                }
            }

            function ln(r, e) {
                const {
                    message: t,
                    code: o
                } = uE[r];
                return {
                    message: e ? `${t} ${e}` : t,
                    code: o
                }
            }

            function ba(r, e) {
                return !!Array.isArray(r) && (!(typeof e < "u" && r.length) || r.every(e))
            }

            function Ts(r) {
                return Object.getPrototypeOf(r) === Object.prototype && Object.keys(r).length
            }

            function mn(r) {
                return typeof r > "u"
            }

            function Nr(r, e) {
                return !(!e || !mn(r)) || "string" == typeof r && !!r.trim().length
            }

            function Bu(r, e) {
                return !(!e || !mn(r)) || "number" == typeof r && !isNaN(r)
            }

            function wa(r) {
                return !(!Nr(r, !1) || !r.includes(":")) && 2 === r.split(":").length
            }

            function Xh(r) {
                let e = !0;
                return ba(r) ? r.length && (e = r.every(t => Nr(t, !1))) : e = !1, e
            }

            function ep(r, e) {
                let t = null;
                return Object.values(r).forEach(o => {
                    if (t) return;
                    const a = function mE(r, e) {
                        let t = null;
                        return Xh(r ? .methods) ? Xh(r ? .events) || (t = ln("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = ln("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), t
                    }(o, `${e}, namespace`);
                    a && (t = a)
                }), t
            }

            function Ea(r, e) {
                let t = null;
                if (r && Ts(r)) {
                    const o = ep(r, e);
                    o && (t = o);
                    const a = function yE(r, e) {
                        let t = null;
                        return Object.values(r).forEach(o => {
                            if (t) return;
                            const a = function gE(r, e) {
                                let t = null;
                                return ba(r) ? r.forEach(o => {
                                    t || function dE(r) {
                                        if (Nr(r, !1) && r.includes(":")) {
                                            const e = r.split(":");
                                            if (3 === e.length) return !!e[2] && wa(e[0] + ":" + e[1])
                                        }
                                        return !1
                                    }(o) || (t = ln("UNSUPPORTED_ACCOUNTS", `${e}, account ${o} should be a string and conform to "namespace:chainId:address" format`))
                                }) : t = ln("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t
                            }(o ? .accounts, `${e} namespace`);
                            a && (t = a)
                        }), t
                    }(r, e);
                    a && (t = a)
                } else t = Ye("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
                return t
            }

            function tp(r) {
                return Nr(r.protocol, !0)
            }

            function qn(r) {
                return typeof r < "u" && null !== typeof r
            }

            function rp(r, e) {
                return !(!wa(e) || ! function iE(r) {
                    const e = [];
                    return Object.values(r).forEach(t => {
                        e.push(...As(t.accounts))
                    }), e
                }(r).includes(e))
            }

            function Vu(r, e, t) {
                let o = null;
                const a = function NE(r) {
                        const e = {};
                        return Object.keys(r).forEach(t => {
                            var o;
                            t.includes(":") ? e[t] = r[t] : null == (o = r[t].chains) || o.forEach(a => {
                                e[a] = {
                                    methods: r[t].methods,
                                    events: r[t].events
                                }
                            })
                        }), e
                    }(r),
                    l = function RE(r) {
                        const e = {};
                        return Object.keys(r).forEach(t => {
                            t.includes(":") ? e[t] = r[t] : As(r[t].accounts) ? .forEach(a => {
                                e[a] = {
                                    accounts: r[t].accounts.filter(l => l.includes(`${a}:`)),
                                    methods: r[t].methods,
                                    events: r[t].events
                                }
                            })
                        }), e
                    }(e),
                    f = Object.keys(a),
                    w = Object.keys(l),
                    C = np(Object.keys(r)),
                    m = np(Object.keys(e)),
                    A = C.filter(L => !m.includes(L));
                return A.length && (o = Ye("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${A.toString()}\n      Received: ${Object.keys(e).toString()}`)), Yi(f, w) || (o = Ye("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.\n      Required: ${f.toString()}\n      Approved: ${w.toString()}`)), Object.keys(e).forEach(L => {
                    if (!L.includes(":") || o) return;
                    const X = As(e[L].accounts);
                    X.includes(L) || (o = Ye("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${L}\n        Required: ${L}\n        Approved: ${X.toString()}`))
                }), f.forEach(L => {
                    o || (Yi(a[L].methods, l[L].methods) ? Yi(a[L].events, l[L].events) || (o = Ye("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${L}`)) : o = Ye("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${L}`))
                }), o
            }

            function np(r) {
                return [...new Set(r.map(e => e.includes(":") ? e.split(":")[0] : e))]
            }
            const Wu = {};
            class Ia {
                static get(e) {
                    return Wu[e]
                }
                static set(e, t) {
                    Wu[e] = t
                }
                static delete(e) {
                    delete Wu[e]
                }
            }
            const Ju = "wc@2:client:",
                ap = "WALLETCONNECT_DEEPLINK_CHOICE",
                cp = "Proposal expired",
                xa = q.SEVEN_DAYS,
                Io = {
                    wc_sessionPropose: {
                        req: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                Yu = {
                    min: q.FIVE_MINUTES,
                    max: q.SEVEN_DAYS
                },
                kE = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var KE = Object.defineProperty,
                qE = Object.defineProperties,
                zE = Object.getOwnPropertyDescriptors,
                up = Object.getOwnPropertySymbols,
                ZE = Object.prototype.hasOwnProperty,
                HE = Object.prototype.propertyIsEnumerable,
                lp = (r, e, t) => e in r ? KE(r, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : r[e] = t,
                Jr = (r, e) => {
                    for (var t in e || (e = {})) ZE.call(e, t) && lp(r, t, e[t]);
                    if (up)
                        for (var t of up(e)) HE.call(e, t) && lp(r, t, e[t]);
                    return r
                },
                xo = (r, e) => qE(r, zE(e));
            class BE extends xm {
                constructor(e) {
                    var t;
                    super(e), t = this, this.name = "engine", this.events = new(je()), this.initialized = !1, this.ignoredPayloadTypes = [1], this.requestQueue = {
                        state: "IDLE",
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: "IDLE",
                        queue: []
                    }, this.requestQueueDelay = q.ONE_SECOND, this.init = (0, O.Z)(function*() {
                        t.initialized || (yield t.cleanup(), t.registerRelayerEvents(), t.registerExpirerEvents(), t.registerPairingEvents(), t.client.core.pairing.register({
                            methods: Object.keys(Io)
                        }), t.initialized = !0, setTimeout(() => {
                            t.sessionRequestQueue.queue = t.getPendingSessionRequests(), t.processSessionRequestQueue()
                        }, (0, q.toMiliseconds)(t.requestQueueDelay)))
                    }), this.connect = function() {
                        var o = (0, O.Z)(function*(a) {
                            yield t.isInitialized();
                            const l = xo(Jr({}, a), {
                                requiredNamespaces: a.requiredNamespaces || {},
                                optionalNamespaces: a.optionalNamespaces || {}
                            });
                            yield t.isValidConnect(l);
                            const {
                                pairingTopic: f,
                                requiredNamespaces: w,
                                optionalNamespaces: C,
                                sessionProperties: m,
                                relays: A
                            } = l;
                            let X, L = f,
                                be = !1;
                            if (L && (be = t.client.core.pairing.pairings.get(L).active), !L || !be) {
                                const {
                                    topic: qe,
                                    uri: tt
                                } = yield t.client.core.pairing.create();
                                L = qe, X = tt
                            }
                            const Y = yield t.client.core.crypto.generateKeyPair(), Ee = Jr({
                                requiredNamespaces: w,
                                optionalNamespaces: C,
                                relays: A ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: Y,
                                    metadata: t.client.metadata
                                }
                            }, m && {
                                sessionProperties: m
                            }), {
                                reject: Re,
                                resolve: at,
                                done: Ot
                            } = Eo(q.FIVE_MINUTES, cp);
                            if (t.events.once(Pr("session_connect"), function() {
                                    var qe = (0, O.Z)(function*({
                                        error: tt,
                                        session: bt
                                    }) {
                                        if (tt) Re(tt);
                                        else if (bt) {
                                            bt.self.publicKey = Y;
                                            const wr = xo(Jr({}, bt), {
                                                requiredNamespaces: bt.requiredNamespaces,
                                                optionalNamespaces: bt.optionalNamespaces
                                            });
                                            yield t.client.session.set(bt.topic, wr), yield t.setExpiry(bt.topic, bt.expiry), L && (yield t.client.core.pairing.updateMetadata({
                                                topic: L,
                                                metadata: bt.peer.metadata
                                            })), at(wr)
                                        }
                                    });
                                    return function(tt) {
                                        return qe.apply(this, arguments)
                                    }
                                }()), !L) {
                                const {
                                    message: qe
                                } = Ye("NO_MATCHING_KEY", `connect() pairing topic: ${L}`);
                                throw new Error(qe)
                            }
                            const dt = yield t.sendRequest({
                                topic: L,
                                method: "wc_sessionPropose",
                                params: Ee
                            }), Ze = Xi(q.FIVE_MINUTES);
                            return yield t.setProposal(dt, Jr({
                                id: dt,
                                expiry: Ze
                            }, Ee)), {
                                uri: X,
                                approval: Ot
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.pair = function() {
                        var o = (0, O.Z)(function*(a) {
                            return yield t.isInitialized(), yield t.client.core.pairing.pair(a)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.approve = function() {
                        var o = (0, O.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidApprove(a);
                            const {
                                id: l,
                                relayProtocol: f,
                                namespaces: w,
                                sessionProperties: C
                            } = a, m = t.client.proposal.get(l);
                            let {
                                pairingTopic: A,
                                proposer: L,
                                requiredNamespaces: X,
                                optionalNamespaces: be
                            } = m;
                            A = A || "", Ts(X) || (X = function aE(r, e) {
                                const t = Ea(r, e);
                                if (t) throw new Error(t.message);
                                const o = {};
                                for (const [a, l] of Object.entries(r)) o[a] = {
                                    methods: l.methods,
                                    events: l.events,
                                    chains: l.accounts.map(f => `${f.split(":")[0]}:${f.split(":")[1]}`)
                                };
                                return o
                            }(w, "approve()"));
                            const Y = yield t.client.core.crypto.generateKeyPair(), Ee = L.publicKey, Re = yield t.client.core.crypto.generateSharedKey(Y, Ee);
                            A && l && (yield t.client.core.pairing.updateMetadata({
                                topic: A,
                                metadata: L.metadata
                            }), yield t.sendResult({
                                id: l,
                                topic: A,
                                result: {
                                    relay: {
                                        protocol: f ? ? "irn"
                                    },
                                    responderPublicKey: Y
                                }
                            }), yield t.client.proposal.delete(l, ln("USER_DISCONNECTED")), yield t.client.core.pairing.activate({
                                topic: A
                            }));
                            const at = Jr({
                                relay: {
                                    protocol: f ? ? "irn"
                                },
                                namespaces: w,
                                requiredNamespaces: X,
                                optionalNamespaces: be,
                                pairingTopic: A,
                                controller: {
                                    publicKey: Y,
                                    metadata: t.client.metadata
                                },
                                expiry: Xi(xa)
                            }, C && {
                                sessionProperties: C
                            });
                            yield t.client.core.relayer.subscribe(Re), yield t.sendRequest({
                                topic: Re,
                                method: "wc_sessionSettle",
                                params: at,
                                throwOnFailedPublish: !0
                            });
                            const Ot = xo(Jr({}, at), {
                                topic: Re,
                                pairingTopic: A,
                                acknowledged: !1,
                                self: at.controller,
                                peer: {
                                    publicKey: L.publicKey,
                                    metadata: L.metadata
                                },
                                controller: Y
                            });
                            return yield t.client.session.set(Re, Ot), yield t.setExpiry(Re, Xi(xa)), {
                                topic: Re,
                                acknowledged: () => new Promise(dt => setTimeout(() => dt(t.client.session.get(Re)), 500))
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.reject = function() {
                        var o = (0, O.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidReject(a);
                            const {
                                id: l,
                                reason: f
                            } = a, {
                                pairingTopic: w
                            } = t.client.proposal.get(l);
                            w && (yield t.sendError(l, w, f), yield t.client.proposal.delete(l, ln("USER_DISCONNECTED")))
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.update = function() {
                        var o = (0, O.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidUpdate(a);
                            const {
                                topic: l,
                                namespaces: f
                            } = a, w = yield t.sendRequest({
                                topic: l,
                                method: "wc_sessionUpdate",
                                params: {
                                    namespaces: f
                                }
                            }), {
                                done: C,
                                resolve: m,
                                reject: A
                            } = Eo();
                            return t.events.once(Pr("session_update", w), ({
                                error: L
                            }) => {
                                L ? A(L) : m()
                            }), yield t.client.session.update(l, {
                                namespaces: f
                            }), {
                                acknowledged: C
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.extend = function() {
                        var o = (0, O.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidExtend(a);
                            const {
                                topic: l
                            } = a, f = yield t.sendRequest({
                                topic: l,
                                method: "wc_sessionExtend",
                                params: {}
                            }), {
                                done: w,
                                resolve: C,
                                reject: m
                            } = Eo();
                            return t.events.once(Pr("session_extend", f), ({
                                error: A
                            }) => {
                                A ? m(A) : C()
                            }), yield t.setExpiry(l, Xi(xa)), {
                                acknowledged: w
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.request = function() {
                        var o = (0, O.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidRequest(a);
                            const {
                                chainId: l,
                                request: f,
                                topic: w,
                                expiry: C
                            } = a, m = Ou(), {
                                done: A,
                                resolve: L,
                                reject: X
                            } = Eo(C, "Request expired. Please try again.");
                            return t.events.once(Pr("session_request", m), ({
                                error: be,
                                result: Y
                            }) => {
                                be ? X(be) : L(Y)
                            }), yield Promise.all([new Promise(function() {
                                var be = (0, O.Z)(function*(Y) {
                                    yield t.sendRequest({
                                        clientRpcId: m,
                                        topic: w,
                                        method: "wc_sessionRequest",
                                        params: {
                                            request: f,
                                            chainId: l
                                        },
                                        expiry: C,
                                        throwOnFailedPublish: !0
                                    }).catch(Ee => X(Ee)), t.client.events.emit("session_request_sent", {
                                        topic: w,
                                        request: f,
                                        chainId: l,
                                        id: m
                                    }), Y()
                                });
                                return function(Y) {
                                    return be.apply(this, arguments)
                                }
                            }()), new Promise(function() {
                                var be = (0, O.Z)(function*(Y) {
                                    const Ee = yield function q1(r, e) {
                                        return Hu.apply(this, arguments)
                                    }(t.client.core.storage, ap);
                                    (function K1(r) {
                                        Zu.apply(this, arguments)
                                    })({
                                        id: m,
                                        topic: w,
                                        wcDeepLink: Ee
                                    }), Y()
                                });
                                return function(Y) {
                                    return be.apply(this, arguments)
                                }
                            }()), A()]).then(be => be[2])
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.respond = function() {
                        var o = (0, O.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidRespond(a);
                            const {
                                topic: l,
                                response: f
                            } = a, {
                                id: w
                            } = f;
                            hi(f) ? yield t.sendResult({
                                id: w,
                                topic: l,
                                result: f.result,
                                throwOnFailedPublish: !0
                            }): kn(f) && (yield t.sendError(w, l, f.error)), t.cleanupAfterResponse(a)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var o = (0, O.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidPing(a);
                            const {
                                topic: l
                            } = a;
                            if (t.client.session.keys.includes(l)) {
                                const f = yield t.sendRequest({
                                    topic: l,
                                    method: "wc_sessionPing",
                                    params: {}
                                }), {
                                    done: w,
                                    resolve: C,
                                    reject: m
                                } = Eo();
                                t.events.once(Pr("session_ping", f), ({
                                    error: A
                                }) => {
                                    A ? m(A) : C()
                                }), yield w()
                            } else t.client.core.pairing.pairings.keys.includes(l) && (yield t.client.core.pairing.ping({
                                topic: l
                            }))
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.emit = function() {
                        var o = (0, O.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidEmit(a);
                            const {
                                topic: l,
                                event: f,
                                chainId: w
                            } = a;
                            yield t.sendRequest({
                                topic: l,
                                method: "wc_sessionEvent",
                                params: {
                                    event: f,
                                    chainId: w
                                }
                            })
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.disconnect = function() {
                        var o = (0, O.Z)(function*(a) {
                            yield t.isInitialized(), yield t.isValidDisconnect(a);
                            const {
                                topic: l
                            } = a;
                            t.client.session.keys.includes(l) ? (yield t.sendRequest({
                                topic: l,
                                method: "wc_sessionDelete",
                                params: ln("USER_DISCONNECTED"),
                                throwOnFailedPublish: !0
                            }), yield t.deleteSession(l)) : yield t.client.core.pairing.disconnect({
                                topic: l
                            })
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.find = o => (this.isInitialized(), this.client.session.getAll().filter(a => function fE(r, e) {
                        const {
                            requiredNamespaces: t
                        } = e, o = Object.keys(r.namespaces), a = Object.keys(t);
                        let l = !0;
                        return !!Yi(a, o) && (o.forEach(f => {
                            const {
                                accounts: w,
                                methods: C,
                                events: m
                            } = r.namespaces[f], A = As(w), L = t[f];
                            Yi(Uu(f, L), A) && Yi(L.methods, C) && Yi(L.events, m) || (l = !1)
                        }), l)
                    }(a, o))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = function() {
                        var o = (0, O.Z)(function*(a) {
                            if (a.pairingTopic) try {
                                const l = t.client.core.pairing.pairings.get(a.pairingTopic),
                                    f = t.client.core.pairing.pairings.getAll().filter(w => {
                                        var C, m;
                                        return (null == (C = w.peerMetadata) ? void 0 : C.url) && (null == (m = w.peerMetadata) ? void 0 : m.url) === a.peer.metadata.url && w.topic && w.topic !== l.topic
                                    });
                                if (0 === f.length) return;
                                t.client.logger.info(`Cleaning up ${f.length} duplicate pairing(s)`), yield Promise.all(f.map(w => t.client.core.pairing.disconnect({
                                    topic: w.topic
                                }))), t.client.logger.info("Duplicate pairings clean up finished")
                            } catch (l) {
                                t.client.logger.error(l)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.deleteSession = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            const {
                                self: f
                            } = t.client.session.get(a);
                            yield t.client.core.relayer.unsubscribe(a), t.client.session.delete(a, ln("USER_DISCONNECTED")), t.client.core.crypto.keychain.has(f.publicKey) && (yield t.client.core.crypto.deleteKeyPair(f.publicKey)), t.client.core.crypto.keychain.has(a) && (yield t.client.core.crypto.deleteSymKey(a)), l || t.client.core.expirer.del(a), t.client.core.storage.removeItem(ap).catch(w => t.client.logger.warn(w))
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.deleteProposal = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            yield Promise.all([t.client.proposal.delete(a, ln("USER_DISCONNECTED")), l ? Promise.resolve() : t.client.core.expirer.del(a)])
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.deletePendingSessionRequest = function() {
                        var o = (0, O.Z)(function*(a, l, f = !1) {
                            yield Promise.all([t.client.pendingRequest.delete(a, l), f ? Promise.resolve() : t.client.core.expirer.del(a)]), t.sessionRequestQueue.queue = t.sessionRequestQueue.queue.filter(w => w.id !== a), f && (t.sessionRequestQueue.state = "IDLE")
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.setExpiry = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            t.client.session.keys.includes(a) && (yield t.client.session.update(a, {
                                expiry: l
                            })), t.client.core.expirer.set(a, l)
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.setProposal = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            yield t.client.proposal.set(a, l), t.client.core.expirer.set(a, l.expiry)
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.setPendingSessionRequest = function() {
                        var o = (0, O.Z)(function*(a) {
                            const l = Io.wc_sessionRequest.req.ttl,
                                {
                                    id: f,
                                    topic: w,
                                    params: C,
                                    verifyContext: m
                                } = a;
                            yield t.client.pendingRequest.set(f, {
                                id: f,
                                topic: w,
                                params: C,
                                verifyContext: m
                            }), l && t.client.core.expirer.set(f, Xi(l))
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.sendRequest = function() {
                        var o = (0, O.Z)(function*(a) {
                            const {
                                topic: l,
                                method: f,
                                params: w,
                                expiry: C,
                                relayRpcId: m,
                                clientRpcId: A,
                                throwOnFailedPublish: L
                            } = a, X = Os(f, w, A);
                            if (wo() && kE.includes(f)) {
                                const Ee = qu(JSON.stringify(X));
                                t.client.core.verify.register({
                                    attestationId: Ee
                                })
                            }
                            const be = yield t.client.core.crypto.encode(l, X), Y = Io[f].req;
                            return C && (Y.ttl = C), m && (Y.id = m), t.client.core.history.set(l, X), L ? (Y.internal = xo(Jr({}, Y.internal), {
                                throwOnFailedPublish: !0
                            }), yield t.client.core.relayer.publish(l, be, Y)) : t.client.core.relayer.publish(l, be, Y).catch(Ee => t.client.logger.error(Ee)), X.id
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.sendResult = function() {
                        var o = (0, O.Z)(function*(a) {
                            const {
                                id: l,
                                topic: f,
                                result: w,
                                throwOnFailedPublish: C
                            } = a, m = Su(l, w), A = yield t.client.core.crypto.encode(f, m), L = yield t.client.core.history.get(f, l), X = Io[L.request.method].res;
                            C ? (X.internal = xo(Jr({}, X.internal), {
                                throwOnFailedPublish: !0
                            }), yield t.client.core.relayer.publish(f, A, X)) : t.client.core.relayer.publish(f, A, X).catch(be => t.client.logger.error(be)), yield t.client.core.history.resolve(m)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.sendError = function() {
                        var o = (0, O.Z)(function*(a, l, f) {
                            const w = pa(a, f),
                                C = yield t.client.core.crypto.encode(l, w), m = yield t.client.core.history.get(l, a);
                            t.client.core.relayer.publish(l, C, Io[m.request.method].res), yield t.client.core.history.resolve(w)
                        });
                        return function(a, l, f) {
                            return o.apply(this, arguments)
                        }
                    }(), this.cleanup = (0, O.Z)(function*() {
                        const o = [],
                            a = [];
                        t.client.session.getAll().forEach(l => {
                            Rs(l.expiry) && o.push(l.topic)
                        }), t.client.proposal.getAll().forEach(l => {
                            Rs(l.expiry) && a.push(l.id)
                        }), yield Promise.all([...o.map(l => t.deleteSession(l)), ...a.map(l => t.deleteProposal(l))])
                    }), this.onRelayEventRequest = function() {
                        var o = (0, O.Z)(function*(a) {
                            t.requestQueue.queue.push(a), yield t.processRequestsQueue()
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.processRequestsQueue = (0, O.Z)(function*() {
                        if ("ACTIVE" !== t.requestQueue.state) {
                            for (t.client.logger.info(`Request queue starting with ${t.requestQueue.queue.length} requests`); t.requestQueue.queue.length > 0;) {
                                t.requestQueue.state = "ACTIVE";
                                const o = t.requestQueue.queue.shift();
                                if (o) try {
                                    t.processRequest(o), yield new Promise(a => setTimeout(a, 300))
                                } catch (a) {
                                    t.client.logger.warn(a)
                                }
                            }
                            t.requestQueue.state = "IDLE"
                        } else t.client.logger.info("Request queue already active, skipping...")
                    }), this.processRequest = o => {
                        const {
                            topic: a,
                            payload: l
                        } = o, f = l.method;
                        switch (f) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(a, l);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(a, l);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(a, l);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(a, l);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(a, l);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(a, l);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(a, l);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(a, l);
                            default:
                                return this.client.logger.info(`Unsupported request method ${f}`)
                        }
                    }, this.onRelayEventResponse = function() {
                        var o = (0, O.Z)(function*(a) {
                            const {
                                topic: l,
                                payload: f
                            } = a, w = (yield t.client.core.history.get(l, f.id)).request.method;
                            switch (w) {
                                case "wc_sessionPropose":
                                    return t.onSessionProposeResponse(l, f);
                                case "wc_sessionSettle":
                                    return t.onSessionSettleResponse(l, f);
                                case "wc_sessionUpdate":
                                    return t.onSessionUpdateResponse(l, f);
                                case "wc_sessionExtend":
                                    return t.onSessionExtendResponse(l, f);
                                case "wc_sessionPing":
                                    return t.onSessionPingResponse(l, f);
                                case "wc_sessionRequest":
                                    return t.onSessionRequestResponse(l, f);
                                default:
                                    return t.client.logger.info(`Unsupported response method ${w}`)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onRelayEventUnknownPayload = o => {
                        const {
                            topic: a
                        } = o, {
                            message: l
                        } = Ye("MISSING_OR_INVALID", `Decoded payload on topic ${a} is not identifiable as a JSON-RPC request or a response.`);
                        throw new Error(l)
                    }, this.onSessionProposeRequest = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            const {
                                params: f,
                                id: w
                            } = l;
                            try {
                                t.isValidConnect(Jr({}, l.params));
                                const C = Xi(q.FIVE_MINUTES),
                                    m = Jr({
                                        id: w,
                                        pairingTopic: a,
                                        expiry: C
                                    }, f);
                                yield t.setProposal(w, m);
                                const A = qu(JSON.stringify(l)),
                                    L = yield t.getVerifyContext(A, m.proposer.metadata);
                                t.client.events.emit("session_proposal", {
                                    id: w,
                                    params: m,
                                    verifyContext: L
                                })
                            } catch (C) {
                                yield t.sendError(w, a, C), t.client.logger.error(C)
                            }
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionProposeResponse = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            const {
                                id: f
                            } = l;
                            if (hi(l)) {
                                const {
                                    result: w
                                } = l;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    result: w
                                });
                                const C = t.client.proposal.get(f);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    proposal: C
                                });
                                const m = C.proposer.publicKey;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    selfPublicKey: m
                                });
                                const A = w.responderPublicKey;
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    peerPublicKey: A
                                });
                                const L = yield t.client.core.crypto.generateSharedKey(m, A);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    sessionTopic: L
                                });
                                const X = yield t.client.core.relayer.subscribe(L);
                                t.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    subscriptionId: X
                                }), yield t.client.core.pairing.activate({
                                    topic: a
                                })
                            } else kn(l) && (yield t.client.proposal.delete(f, ln("USER_DISCONNECTED")), t.events.emit(Pr("session_connect"), {
                                error: l.error
                            }))
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionSettleRequest = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            const {
                                id: f,
                                params: w
                            } = l;
                            try {
                                t.isValidSessionSettleRequest(w);
                                const {
                                    relay: C,
                                    controller: m,
                                    expiry: A,
                                    namespaces: L,
                                    requiredNamespaces: X,
                                    optionalNamespaces: be,
                                    sessionProperties: Y,
                                    pairingTopic: Ee
                                } = l.params, Re = Jr({
                                    topic: a,
                                    relay: C,
                                    expiry: A,
                                    namespaces: L,
                                    acknowledged: !0,
                                    pairingTopic: Ee,
                                    requiredNamespaces: X,
                                    optionalNamespaces: be,
                                    controller: m.publicKey,
                                    self: {
                                        publicKey: "",
                                        metadata: t.client.metadata
                                    },
                                    peer: {
                                        publicKey: m.publicKey,
                                        metadata: m.metadata
                                    }
                                }, Y && {
                                    sessionProperties: Y
                                });
                                yield t.sendResult({
                                    id: l.id,
                                    topic: a,
                                    result: !0
                                }), t.events.emit(Pr("session_connect"), {
                                    session: Re
                                }), t.cleanupDuplicatePairings(Re)
                            } catch (C) {
                                yield t.sendError(f, a, C), t.client.logger.error(C)
                            }
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionSettleResponse = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            const {
                                id: f
                            } = l;
                            hi(l) ? (yield t.client.session.update(a, {
                                acknowledged: !0
                            }), t.events.emit(Pr("session_approve", f), {})) : kn(l) && (yield t.client.session.delete(a, ln("USER_DISCONNECTED")), t.events.emit(Pr("session_approve", f), {
                                error: l.error
                            }))
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionUpdateRequest = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            const {
                                params: f,
                                id: w
                            } = l;
                            try {
                                const C = `${a}_session_update`,
                                    m = Ia.get(C);
                                if (m && t.isRequestOutOfSync(m, w)) return void t.client.logger.info(`Discarding out of sync request - ${w}`);
                                t.isValidUpdate(Jr({
                                    topic: a
                                }, f)), yield t.client.session.update(a, {
                                    namespaces: f.namespaces
                                }), yield t.sendResult({
                                    id: w,
                                    topic: a,
                                    result: !0
                                }), t.client.events.emit("session_update", {
                                    id: w,
                                    topic: a,
                                    params: f
                                }), Ia.set(C, w)
                            } catch (C) {
                                yield t.sendError(w, a, C), t.client.logger.error(C)
                            }
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isRequestOutOfSync = (o, a) => parseInt(a.toString().slice(0, -3)) <= parseInt(o.toString().slice(0, -3)), this.onSessionUpdateResponse = (o, a) => {
                        const {
                            id: l
                        } = a;
                        hi(a) ? this.events.emit(Pr("session_update", l), {}) : kn(a) && this.events.emit(Pr("session_update", l), {
                            error: a.error
                        })
                    }, this.onSessionExtendRequest = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            const {
                                id: f
                            } = l;
                            try {
                                t.isValidExtend({
                                    topic: a
                                }), yield t.setExpiry(a, Xi(xa)), yield t.sendResult({
                                    id: f,
                                    topic: a,
                                    result: !0
                                }), t.client.events.emit("session_extend", {
                                    id: f,
                                    topic: a
                                })
                            } catch (w) {
                                yield t.sendError(f, a, w), t.client.logger.error(w)
                            }
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionExtendResponse = (o, a) => {
                        const {
                            id: l
                        } = a;
                        hi(a) ? this.events.emit(Pr("session_extend", l), {}) : kn(a) && this.events.emit(Pr("session_extend", l), {
                            error: a.error
                        })
                    }, this.onSessionPingRequest = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            const {
                                id: f
                            } = l;
                            try {
                                t.isValidPing({
                                    topic: a
                                }), yield t.sendResult({
                                    id: f,
                                    topic: a,
                                    result: !0
                                }), t.client.events.emit("session_ping", {
                                    id: f,
                                    topic: a
                                })
                            } catch (w) {
                                yield t.sendError(f, a, w), t.client.logger.error(w)
                            }
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionPingResponse = (o, a) => {
                        const {
                            id: l
                        } = a;
                        setTimeout(() => {
                            hi(a) ? this.events.emit(Pr("session_ping", l), {}) : kn(a) && this.events.emit(Pr("session_ping", l), {
                                error: a.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            const {
                                id: f
                            } = l;
                            try {
                                t.isValidDisconnect({
                                    topic: a,
                                    reason: l.params
                                }), yield Promise.all([new Promise(w => {
                                    t.client.core.relayer.once("relayer_publish", (0, O.Z)(function*() {
                                        w(yield t.deleteSession(a))
                                    }))
                                }), t.sendResult({
                                    id: f,
                                    topic: a,
                                    result: !0
                                })]), t.client.events.emit("session_delete", {
                                    id: f,
                                    topic: a
                                })
                            } catch (w) {
                                t.client.logger.error(w)
                            }
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionRequest = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            const {
                                id: f,
                                params: w
                            } = l;
                            try {
                                t.isValidRequest(Jr({
                                    topic: a
                                }, w));
                                const C = qu(JSON.stringify(Os("wc_sessionRequest", w, f))),
                                    m = t.client.session.get(a),
                                    L = {
                                        id: f,
                                        topic: a,
                                        params: w,
                                        verifyContext: yield t.getVerifyContext(C, m.peer.metadata)
                                    };
                                yield t.setPendingSessionRequest(L), t.addSessionRequestToSessionRequestQueue(L), t.processSessionRequestQueue()
                            } catch (C) {
                                yield t.sendError(f, a, C), t.client.logger.error(C)
                            }
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.onSessionRequestResponse = (o, a) => {
                        const {
                            id: l
                        } = a;
                        hi(a) ? this.events.emit(Pr("session_request", l), {
                            result: a.result
                        }) : kn(a) && this.events.emit(Pr("session_request", l), {
                            error: a.error
                        })
                    }, this.onSessionEventRequest = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            const {
                                id: f,
                                params: w
                            } = l;
                            try {
                                const C = `${a}_session_event_${w.event.name}`,
                                    m = Ia.get(C);
                                if (m && t.isRequestOutOfSync(m, f)) return void t.client.logger.info(`Discarding out of sync request - ${f}`);
                                t.isValidEmit(Jr({
                                    topic: a
                                }, w)), t.client.events.emit("session_event", {
                                    id: f,
                                    topic: a,
                                    params: w
                                }), Ia.set(C, f)
                            } catch (C) {
                                yield t.sendError(f, a, C), t.client.logger.error(C)
                            }
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.addSessionRequestToSessionRequestQueue = o => {
                        this.sessionRequestQueue.queue.push(o)
                    }, this.cleanupAfterResponse = o => {
                        this.deletePendingSessionRequest(o.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = "IDLE", this.processSessionRequestQueue()
                        }, (0, q.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if ("ACTIVE" === this.sessionRequestQueue.state) return void this.client.logger.info("session request queue is already active.");
                        const o = this.sessionRequestQueue.queue[0];
                        if (o) try {
                            this.sessionRequestQueue.state = "ACTIVE", this.client.events.emit("session_request", o)
                        } catch (a) {
                            this.client.logger.error(a)
                        } else this.client.logger.info("session request queue is empty.")
                    }, this.onPairingCreated = o => {
                        if (o.active) return;
                        const a = this.client.proposal.getAll().find(l => l.pairingTopic === o.topic);
                        a && this.onSessionProposeRequest(o.topic, Os("wc_sessionPropose", {
                            requiredNamespaces: a.requiredNamespaces,
                            optionalNamespaces: a.optionalNamespaces,
                            relays: a.relays,
                            proposer: a.proposer,
                            sessionProperties: a.sessionProperties
                        }, a.id))
                    }, this.isValidConnect = function() {
                        var o = (0, O.Z)(function*(a) {
                            if (!qn(a)) {
                                const {
                                    message: A
                                } = Ye("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(a)}`);
                                throw new Error(A)
                            }
                            const {
                                pairingTopic: l,
                                requiredNamespaces: f,
                                optionalNamespaces: w,
                                sessionProperties: C,
                                relays: m
                            } = a;
                            if (mn(l) || (yield t.isValidPairingTopic(l)), ! function bE(r, e) {
                                    let t = !1;
                                    return e && !r ? t = !0 : r && ba(r) && r.length && r.forEach(o => {
                                        t = tp(o)
                                    }), t
                                }(m, !0)) {
                                const {
                                    message: A
                                } = Ye("MISSING_OR_INVALID", `connect() relays: ${m}`);
                                throw new Error(A)
                            }!mn(f) && 0 !== Ts(f) && t.validateNamespaces(f, "requiredNamespaces"), !mn(w) && 0 !== Ts(w) && t.validateNamespaces(w, "optionalNamespaces"), mn(C) || t.validateSessionProps(C, "sessionProperties")
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.validateNamespaces = (o, a) => {
                        const l = function vE(r, e, t) {
                            let o = null;
                            if (r && Ts(r)) {
                                const a = ep(r, e);
                                a && (o = a);
                                const l = function _E(r, e, t) {
                                    let o = null;
                                    return Object.entries(r).forEach(([a, l]) => {
                                        if (o) return;
                                        const f = function pE(r, e, t) {
                                            let o = null;
                                            return ba(e) && e.length ? e.forEach(a => {
                                                o || wa(a) || (o = ln("UNSUPPORTED_CHAINS", `${t}, chain ${a} should be a string and conform to "namespace:chainId" format`))
                                            }) : wa(r) || (o = ln("UNSUPPORTED_CHAINS", `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), o
                                        }(a, Uu(a, l), `${e} ${t}`);
                                        f && (o = f)
                                    }), o
                                }(r, e, t);
                                l && (o = l)
                            } else o = Ye("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
                            return o
                        }(o, "connect()", a);
                        if (l) throw new Error(l.message)
                    }, this.isValidApprove = function() {
                        var o = (0, O.Z)(function*(a) {
                            if (!qn(a)) throw new Error(Ye("MISSING_OR_INVALID", `approve() params: ${a}`).message);
                            const {
                                id: l,
                                namespaces: f,
                                relayProtocol: w,
                                sessionProperties: C
                            } = a;
                            yield t.isValidProposalId(l);
                            const m = t.client.proposal.get(l),
                                A = Ea(f, "approve()");
                            if (A) throw new Error(A.message);
                            const L = Vu(m.requiredNamespaces, f, "approve()");
                            if (L) throw new Error(L.message);
                            if (!Nr(w, !0)) {
                                const {
                                    message: X
                                } = Ye("MISSING_OR_INVALID", `approve() relayProtocol: ${w}`);
                                throw new Error(X)
                            }
                            mn(C) || t.validateSessionProps(C, "sessionProperties")
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidReject = function() {
                        var o = (0, O.Z)(function*(a) {
                            if (!qn(a)) {
                                const {
                                    message: w
                                } = Ye("MISSING_OR_INVALID", `reject() params: ${a}`);
                                throw new Error(w)
                            }
                            const {
                                id: l,
                                reason: f
                            } = a;
                            if (yield t.isValidProposalId(l), ! function EE(r) {
                                    return !!(r && "object" == typeof r && r.code && Bu(r.code, !1) && r.message && Nr(r.message, !1))
                                }(f)) {
                                const {
                                    message: w
                                } = Ye("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(f)}`);
                                throw new Error(w)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidSessionSettleRequest = o => {
                        if (!qn(o)) {
                            const {
                                message: A
                            } = Ye("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${o}`);
                            throw new Error(A)
                        }
                        const {
                            relay: a,
                            controller: l,
                            namespaces: f,
                            expiry: w
                        } = o;
                        if (!tp(a)) {
                            const {
                                message: A
                            } = Ye("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw new Error(A)
                        }
                        const C = function hE(r, e) {
                            let t = null;
                            return Nr(r ? .publicKey, !1) || (t = Ye("MISSING_OR_INVALID", `${e} controller public key should be a string`)), t
                        }(l, "onSessionSettleRequest()");
                        if (C) throw new Error(C.message);
                        const m = Ea(f, "onSessionSettleRequest()");
                        if (m) throw new Error(m.message);
                        if (Rs(w)) {
                            const {
                                message: A
                            } = Ye("EXPIRED", "onSessionSettleRequest()");
                            throw new Error(A)
                        }
                    }, this.isValidUpdate = function() {
                        var o = (0, O.Z)(function*(a) {
                            if (!qn(a)) {
                                const {
                                    message: A
                                } = Ye("MISSING_OR_INVALID", `update() params: ${a}`);
                                throw new Error(A)
                            }
                            const {
                                topic: l,
                                namespaces: f
                            } = a;
                            yield t.isValidSessionTopic(l);
                            const w = t.client.session.get(l),
                                C = Ea(f, "update()");
                            if (C) throw new Error(C.message);
                            const m = Vu(w.requiredNamespaces, f, "update()");
                            if (m) throw new Error(m.message)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidExtend = function() {
                        var o = (0, O.Z)(function*(a) {
                            if (!qn(a)) {
                                const {
                                    message: f
                                } = Ye("MISSING_OR_INVALID", `extend() params: ${a}`);
                                throw new Error(f)
                            }
                            const {
                                topic: l
                            } = a;
                            yield t.isValidSessionTopic(l)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidRequest = function() {
                        var o = (0, O.Z)(function*(a) {
                            if (!qn(a)) {
                                const {
                                    message: A
                                } = Ye("MISSING_OR_INVALID", `request() params: ${a}`);
                                throw new Error(A)
                            }
                            const {
                                topic: l,
                                request: f,
                                chainId: w,
                                expiry: C
                            } = a;
                            yield t.isValidSessionTopic(l);
                            const {
                                namespaces: m
                            } = t.client.session.get(l);
                            if (!rp(m, w)) {
                                const {
                                    message: A
                                } = Ye("MISSING_OR_INVALID", `request() chainId: ${w}`);
                                throw new Error(A)
                            }
                            if (! function IE(r) {
                                    return !(mn(r) || !Nr(r.method, !1))
                                }(f)) {
                                const {
                                    message: A
                                } = Ye("MISSING_OR_INVALID", `request() ${JSON.stringify(f)}`);
                                throw new Error(A)
                            }
                            if (! function SE(r, e, t) {
                                    return !!Nr(t, !1) && function sE(r, e) {
                                        const t = [];
                                        return Object.values(r).forEach(o => {
                                            As(o.accounts).includes(e) && t.push(...o.methods)
                                        }), t
                                    }(r, e).includes(t)
                                }(m, w, f.method)) {
                                const {
                                    message: A
                                } = Ye("MISSING_OR_INVALID", `request() method: ${f.method}`);
                                throw new Error(A)
                            }
                            if (C && ! function AE(r, e) {
                                    return Bu(r, !1) && r <= e.max && r >= e.min
                                }(C, Yu)) {
                                const {
                                    message: A
                                } = Ye("MISSING_OR_INVALID", `request() expiry: ${C}. Expiry must be a number (in seconds) between ${Yu.min} and ${Yu.max}`);
                                throw new Error(A)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidRespond = function() {
                        var o = (0, O.Z)(function*(a) {
                            if (!qn(a)) {
                                const {
                                    message: w
                                } = Ye("MISSING_OR_INVALID", `respond() params: ${a}`);
                                throw new Error(w)
                            }
                            const {
                                topic: l,
                                response: f
                            } = a;
                            if (yield t.isValidSessionTopic(l), ! function xE(r) {
                                    return !(mn(r) || mn(r.result) && mn(r.error) || !Bu(r.id, !1) || !Nr(r.jsonrpc, !1))
                                }(f)) {
                                const {
                                    message: w
                                } = Ye("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(f)}`);
                                throw new Error(w)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidPing = function() {
                        var o = (0, O.Z)(function*(a) {
                            if (!qn(a)) {
                                const {
                                    message: f
                                } = Ye("MISSING_OR_INVALID", `ping() params: ${a}`);
                                throw new Error(f)
                            }
                            const {
                                topic: l
                            } = a;
                            yield t.isValidSessionOrPairingTopic(l)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidEmit = function() {
                        var o = (0, O.Z)(function*(a) {
                            if (!qn(a)) {
                                const {
                                    message: m
                                } = Ye("MISSING_OR_INVALID", `emit() params: ${a}`);
                                throw new Error(m)
                            }
                            const {
                                topic: l,
                                event: f,
                                chainId: w
                            } = a;
                            yield t.isValidSessionTopic(l);
                            const {
                                namespaces: C
                            } = t.client.session.get(l);
                            if (!rp(C, w)) {
                                const {
                                    message: m
                                } = Ye("MISSING_OR_INVALID", `emit() chainId: ${w}`);
                                throw new Error(m)
                            }
                            if (! function OE(r) {
                                    return !(mn(r) || !Nr(r.name, !1))
                                }(f)) {
                                const {
                                    message: m
                                } = Ye("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(f)}`);
                                throw new Error(m)
                            }
                            if (! function PE(r, e, t) {
                                    return !!Nr(t, !1) && function oE(r, e) {
                                        const t = [];
                                        return Object.values(r).forEach(o => {
                                            As(o.accounts).includes(e) && t.push(...o.events)
                                        }), t
                                    }(r, e).includes(t)
                                }(C, w, f.name)) {
                                const {
                                    message: m
                                } = Ye("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(f)}`);
                                throw new Error(m)
                            }
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.isValidDisconnect = function() {
                        var o = (0, O.Z)(function*(a) {
                            if (!qn(a)) {
                                const {
                                    message: f
                                } = Ye("MISSING_OR_INVALID", `disconnect() params: ${a}`);
                                throw new Error(f)
                            }
                            const {
                                topic: l
                            } = a;
                            yield t.isValidSessionOrPairingTopic(l)
                        });
                        return function(a) {
                            return o.apply(this, arguments)
                        }
                    }(), this.getVerifyContext = function() {
                        var o = (0, O.Z)(function*(a, l) {
                            const f = {
                                verified: {
                                    verifyUrl: l.verifyUrl || Ss,
                                    validation: "UNKNOWN",
                                    origin: l.url || ""
                                }
                            };
                            try {
                                const w = yield t.client.core.verify.resolve({
                                    attestationId: a,
                                    verifyUrl: l.verifyUrl
                                });
                                w && (f.verified.origin = w.origin, f.verified.isScam = w.isScam, f.verified.validation = w.origin === new URL(l.url).origin ? "VALID" : "INVALID")
                            } catch (w) {
                                t.client.logger.info(w)
                            }
                            return t.client.logger.info(`Verify context: ${JSON.stringify(f)}`), f
                        });
                        return function(a, l) {
                            return o.apply(this, arguments)
                        }
                    }(), this.validateSessionProps = (o, a) => {
                        Object.values(o).forEach(l => {
                            if (!Nr(l, !1)) {
                                const {
                                    message: f
                                } = Ye("MISSING_OR_INVALID", `${a} must be in Record<string, string> format. Received: ${JSON.stringify(l)}`);
                                throw new Error(f)
                            }
                        })
                    }
                }
                isInitialized() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        if (!e.initialized) {
                            const {
                                message: t
                            } = Ye("NOT_INITIALIZED", e.name);
                            throw new Error(t)
                        }
                        yield e.client.core.relayer.confirmOnlineStateOrThrow()
                    })()
                }
                registerRelayerEvents() {
                    var e = this;
                    this.client.core.relayer.on("relayer_message", function() {
                        var t = (0, O.Z)(function*(o) {
                            const {
                                topic: a,
                                message: l
                            } = o;
                            if (e.ignoredPayloadTypes.includes(e.client.core.crypto.getPayloadType(l))) return;
                            const f = yield e.client.core.crypto.decode(a, l);
                            try {
                                Pu(f) ? (e.client.core.history.set(a, f), e.onRelayEventRequest({
                                    topic: a,
                                    payload: f
                                })) : _a(f) ? (yield e.client.core.history.resolve(f), yield e.onRelayEventResponse({
                                    topic: a,
                                    payload: f
                                }), e.client.core.history.delete(a, f.id)) : e.onRelayEventUnknownPayload({
                                    topic: a,
                                    payload: f
                                })
                            } catch (w) {
                                e.client.logger.error(w)
                            }
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerExpirerEvents() {
                    var e = this;
                    this.client.core.expirer.on(yn_expired, function() {
                        var t = (0, O.Z)(function*(o) {
                            const {
                                topic: a,
                                id: l
                            } = function k1(r) {
                                const [e, t] = r.split(":"), o = {
                                    id: void 0,
                                    topic: void 0
                                };
                                if ("topic" === e && "string" == typeof t) o.topic = t;
                                else {
                                    if ("id" !== e || !Number.isInteger(Number(t))) throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
                                    o.id = Number(t)
                                }
                                return o
                            }(o.target);
                            if (l && e.client.pendingRequest.keys.includes(l)) return yield e.deletePendingSessionRequest(l, Ye("EXPIRED"), !0);
                            a ? e.client.session.keys.includes(a) && (yield e.deleteSession(a, !0), e.client.events.emit("session_expire", {
                                topic: a
                            })) : l && (yield e.deleteProposal(l, !0), e.client.events.emit("proposal_expire", {
                                id: l
                            }))
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on("pairing_create", e => this.onPairingCreated(e))
                }
                isValidPairingTopic(e) {
                    if (!Nr(e, !1)) {
                        const {
                            message: t
                        } = Ye("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw new Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        const {
                            message: t
                        } = Ye("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw new Error(t)
                    }
                    if (Rs(this.client.core.pairing.pairings.get(e).expiry)) {
                        const {
                            message: t
                        } = Ye("EXPIRED", `pairing topic: ${e}`);
                        throw new Error(t)
                    }
                }
                isValidSessionTopic(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        if (!Nr(e, !1)) {
                            const {
                                message: o
                            } = Ye("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                            throw new Error(o)
                        }
                        if (!t.client.session.keys.includes(e)) {
                            const {
                                message: o
                            } = Ye("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                            throw new Error(o)
                        }
                        if (Rs(t.client.session.get(e).expiry)) {
                            yield t.deleteSession(e);
                            const {
                                message: o
                            } = Ye("EXPIRED", `session topic: ${e}`);
                            throw new Error(o)
                        }
                    })()
                }
                isValidSessionOrPairingTopic(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        if (t.client.session.keys.includes(e)) yield t.isValidSessionTopic(e);
                        else {
                            if (!t.client.core.pairing.pairings.keys.includes(e)) {
                                if (Nr(e, !1)) {
                                    const {
                                        message: o
                                    } = Ye("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                                    throw new Error(o)
                                } {
                                    const {
                                        message: o
                                    } = Ye("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                                    throw new Error(o)
                                }
                            }
                            t.isValidPairingTopic(e)
                        }
                    })()
                }
                isValidProposalId(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        if (! function wE(r) {
                                return "number" == typeof r
                            }(e)) {
                            const {
                                message: o
                            } = Ye("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                            throw new Error(o)
                        }
                        if (!t.client.proposal.keys.includes(e)) {
                            const {
                                message: o
                            } = Ye("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                            throw new Error(o)
                        }
                        if (Rs(t.client.proposal.get(e).expiry)) {
                            yield t.deleteProposal(e);
                            const {
                                message: o
                            } = Ye("EXPIRED", `proposal id: ${e}`);
                            throw new Error(o)
                        }
                    })()
                }
            }
            class VE extends ya {
                constructor(e, t) {
                    super(e, t, "proposal", Ju), this.core = e, this.logger = t
                }
            }
            class GE extends ya {
                constructor(e, t) {
                    super(e, t, "session", Ju), this.core = e, this.logger = t
                }
            }
            class WE extends ya {
                constructor(e, t) {
                    super(e, t, "request", Ju, o => o.id), this.core = e, this.logger = t
                }
            }
            class Xu extends Im {
                constructor(e) {
                    var t;
                    super(e), t = this, this.protocol = "wc", this.version = 2, this.name = "client", this.events = new Ae.EventEmitter, this.on = (a, l) => this.events.on(a, l), this.once = (a, l) => this.events.once(a, l), this.off = (a, l) => this.events.off(a, l), this.removeListener = (a, l) => this.events.removeListener(a, l), this.removeAllListeners = a => this.events.removeAllListeners(a), this.connect = function() {
                        var a = (0, O.Z)(function*(l) {
                            try {
                                return yield t.engine.connect(l)
                            } catch (f) {
                                throw t.logger.error(f.message), f
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.pair = function() {
                        var a = (0, O.Z)(function*(l) {
                            try {
                                return yield t.engine.pair(l)
                            } catch (f) {
                                throw t.logger.error(f.message), f
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.approve = function() {
                        var a = (0, O.Z)(function*(l) {
                            try {
                                return yield t.engine.approve(l)
                            } catch (f) {
                                throw t.logger.error(f.message), f
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.reject = function() {
                        var a = (0, O.Z)(function*(l) {
                            try {
                                return yield t.engine.reject(l)
                            } catch (f) {
                                throw t.logger.error(f.message), f
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.update = function() {
                        var a = (0, O.Z)(function*(l) {
                            try {
                                return yield t.engine.update(l)
                            } catch (f) {
                                throw t.logger.error(f.message), f
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.extend = function() {
                        var a = (0, O.Z)(function*(l) {
                            try {
                                return yield t.engine.extend(l)
                            } catch (f) {
                                throw t.logger.error(f.message), f
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.request = function() {
                        var a = (0, O.Z)(function*(l) {
                            try {
                                return yield t.engine.request(l)
                            } catch (f) {
                                throw t.logger.error(f.message), f
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.respond = function() {
                        var a = (0, O.Z)(function*(l) {
                            try {
                                return yield t.engine.respond(l)
                            } catch (f) {
                                throw t.logger.error(f.message), f
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var a = (0, O.Z)(function*(l) {
                            try {
                                return yield t.engine.ping(l)
                            } catch (f) {
                                throw t.logger.error(f.message), f
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.emit = function() {
                        var a = (0, O.Z)(function*(l) {
                            try {
                                return yield t.engine.emit(l)
                            } catch (f) {
                                throw t.logger.error(f.message), f
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.disconnect = function() {
                        var a = (0, O.Z)(function*(l) {
                            try {
                                return yield t.engine.disconnect(l)
                            } catch (f) {
                                throw t.logger.error(f.message), f
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.find = a => {
                        try {
                            return this.engine.find(a)
                        } catch (l) {
                            throw this.logger.error(l.message), l
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (a) {
                            throw this.logger.error(a.message), a
                        }
                    }, this.name = e ? .name || "client", this.metadata = e ? .metadata || function j1() {
                        return (0, Te.D)() || {
                            name: "",
                            description: "",
                            url: "",
                            icons: [""]
                        }
                    }();
                    const o = typeof e ? .logger < "u" && "string" != typeof e ? .logger ? e.logger : (0, mt.pino)((0, mt.getDefaultLoggerOptions)({
                        level: e ? .logger || "error"
                    }));
                    this.core = e ? .core || new h1(e), this.logger = (0, mt.generateChildLogger)(o, this.name), this.session = new GE(this.core, this.logger), this.proposal = new VE(this.core, this.logger), this.pendingRequest = new WE(this.core, this.logger), this.engine = new BE(this)
                }
                static init(e) {
                    return (0, O.Z)(function*() {
                        const t = new Xu(e);
                        return yield t.initialize(), t
                    })()
                }
                get context() {
                    return (0, mt.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                initialize() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.logger.trace("Initialized");
                        try {
                            yield e.core.start(), yield e.session.init(), yield e.proposal.init(), yield e.pendingRequest.init(), yield e.engine.init(), e.core.verify.init({
                                verifyUrl: e.metadata.verifyUrl
                            }), e.logger.info("SignClient Initialization Success")
                        } catch (t) {
                            throw e.logger.info("SignClient Initialization Failure"), e.logger.error(t.message), t
                        }
                    })()
                }
            }
            ie(7803);
            const Oa = ":";

            function ri(r = [], e = []) {
                return [...new Set([...r, ...e])]
            }

            function Na(r) {
                return r.includes(":")
            }

            function Ds(r) {
                return Na(r) ? r.split(":")[0] : r
            }
            const FI = {
                INVALID_METHOD: {
                    message: "Invalid method.",
                    code: 1001
                },
                INVALID_EVENT: {
                    message: "Invalid event.",
                    code: 1002
                },
                INVALID_UPDATE_REQUEST: {
                    message: "Invalid update request.",
                    code: 1003
                },
                INVALID_EXTEND_REQUEST: {
                    message: "Invalid extend request.",
                    code: 1004
                },
                INVALID_SESSION_SETTLE_REQUEST: {
                    message: "Invalid session settle request.",
                    code: 1005
                },
                UNAUTHORIZED_METHOD: {
                    message: "Unauthorized method.",
                    code: 3001
                },
                UNAUTHORIZED_EVENT: {
                    message: "Unauthorized event.",
                    code: 3002
                },
                UNAUTHORIZED_UPDATE_REQUEST: {
                    message: "Unauthorized update request.",
                    code: 3003
                },
                UNAUTHORIZED_EXTEND_REQUEST: {
                    message: "Unauthorized extend request.",
                    code: 3004
                },
                USER_REJECTED: {
                    message: "User rejected.",
                    code: 5e3
                },
                USER_REJECTED_CHAINS: {
                    message: "User rejected chains.",
                    code: 5001
                },
                USER_REJECTED_METHODS: {
                    message: "User rejected methods.",
                    code: 5002
                },
                USER_REJECTED_EVENTS: {
                    message: "User rejected events.",
                    code: 5003
                },
                UNSUPPORTED_CHAINS: {
                    message: "Unsupported chains.",
                    code: 5100
                },
                UNSUPPORTED_METHODS: {
                    message: "Unsupported methods.",
                    code: 5101
                },
                UNSUPPORTED_EVENTS: {
                    message: "Unsupported events.",
                    code: 5102
                },
                UNSUPPORTED_ACCOUNTS: {
                    message: "Unsupported accounts.",
                    code: 5103
                },
                UNSUPPORTED_NAMESPACE_KEY: {
                    message: "Unsupported namespace key.",
                    code: 5104
                },
                USER_DISCONNECTED: {
                    message: "User disconnected.",
                    code: 6e3
                },
                SESSION_SETTLEMENT_FAILED: {
                    message: "Session settlement failed.",
                    code: 7e3
                },
                WC_METHOD_UNSUPPORTED: {
                    message: "Unsupported wc_ method.",
                    code: 10001
                }
            };

            function Di(r, e) {
                const {
                    message: t,
                    code: o
                } = FI[r];
                return {
                    message: e ? `${t} ${e}` : t,
                    code: o
                }
            }

            function $s(r, e) {
                return !!Array.isArray(r) && (!(typeof e < "u" && r.length) || r.every(e))
            }
            var rx = ie(2055),
                Cp = ie.n(rx);
            const jp = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class $p {
                constructor(e, t = !1) {
                    if (this.url = e, this.disableProviderPing = t, this.events = new Ae.EventEmitter, this.isAvailable = !1, this.registering = !1, !Yd(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    this.url = e, this.disableProviderPing = t
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                open(e = this.url) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        yield t.register(e)
                    })()
                }
                close() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        if (!e.isAvailable) throw new Error("Connection already closed");
                        e.onClose()
                    })()
                }
                send(e, t) {
                    var o = this;
                    return (0, O.Z)(function*() {
                        o.isAvailable || (yield o.register());
                        try {
                            const a = Wi(e),
                                f = yield(yield Cp()(o.url, Object.assign(Object.assign({}, jp), {
                                    body: a
                                }))).json();
                            o.onPayload({
                                data: f
                            })
                        } catch (a) {
                            o.onError(e.id, a)
                        }
                    })()
                }
                register(e = this.url) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        if (!Yd(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                        if (t.registering) {
                            const o = t.events.getMaxListeners();
                            return (t.events.listenerCount("register_error") >= o || t.events.listenerCount("open") >= o) && t.events.setMaxListeners(o + 1), new Promise((a, l) => {
                                t.events.once("register_error", f => {
                                    t.resetMaxListeners(), l(f)
                                }), t.events.once("open", () => {
                                    if (t.resetMaxListeners(), typeof t.isAvailable > "u") return l(new Error("HTTP connection is missing or invalid"));
                                    a()
                                })
                            })
                        }
                        t.url = e, t.registering = !0;
                        try {
                            if (!t.disableProviderPing) {
                                const o = Wi({
                                    id: 1,
                                    jsonrpc: "2.0",
                                    method: "test",
                                    params: []
                                });
                                yield Cp()(e, Object.assign(Object.assign({}, jp), {
                                    body: o
                                }))
                            }
                            t.onOpen()
                        } catch (o) {
                            const a = t.parseError(o);
                            throw t.events.emit("register_error", a), t.onClose(), a
                        }
                    })()
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    const t = "string" == typeof e.data ? co(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    const o = this.parseError(t),
                        l = pa(e, o.message || o.toString());
                    this.events.emit("payload", l)
                }
                parseError(e, t = this.url) {
                    return Wd(e, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            const ns = $p,
                Lp = "wc@2:universal_provider:";
            var r, e, Po = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
                dl = {
                    exports: {}
                };
            r = dl, e = dl.exports,
                function() {
                    var t, f = "Expected a function",
                        C = "__lodash_hash_undefined__",
                        A = "__lodash_placeholder__",
                        ss = 1 / 0,
                        Li = 9007199254740991,
                        ni = 4294967295,
                        Qx = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        Us = "[object Arguments]",
                        Fa = "[object Array]",
                        Ro = "[object Boolean]",
                        Ao = "[object Date]",
                        Ma = "[object Error]",
                        ka = "[object Function]",
                        Qp = "[object GeneratorFunction]",
                        zn = "[object Map]",
                        To = "[object Number]",
                        mi = "[object Object]",
                        Yp = "[object Promise]",
                        Co = "[object RegExp]",
                        Zn = "[object Set]",
                        jo = "[object String]",
                        Ka = "[object Symbol]",
                        Do = "[object WeakMap]",
                        $o = "[object ArrayBuffer]",
                        Ls = "[object DataView]",
                        ml = "[object Float32Array]",
                        vl = "[object Float64Array]",
                        bl = "[object Int8Array]",
                        wl = "[object Int16Array]",
                        El = "[object Int32Array]",
                        Il = "[object Uint8Array]",
                        xl = "[object Uint8ClampedArray]",
                        Ol = "[object Uint16Array]",
                        Sl = "[object Uint32Array]",
                        iO = /\b__p \+= '';/g,
                        sO = /\b(__p \+=) '' \+/g,
                        oO = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        Xp = /&(?:amp|lt|gt|quot|#39);/g,
                        e_ = /[&<>"']/g,
                        aO = RegExp(Xp.source),
                        cO = RegExp(e_.source),
                        uO = /<%-([\s\S]+?)%>/g,
                        lO = /<%([\s\S]+?)%>/g,
                        t_ = /<%=([\s\S]+?)%>/g,
                        fO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        dO = /^\w*$/,
                        hO = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        Pl = /[\\^$.*+?()[\]{}|]/g,
                        pO = RegExp(Pl.source),
                        Nl = /^\s+/,
                        _O = /\s/,
                        gO = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        yO = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        mO = /,? & /,
                        vO = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        bO = /[()=,{}\[\]\/\s]/,
                        wO = /\\(\\)?/g,
                        EO = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        r_ = /\w*$/,
                        IO = /^[-+]0x[0-9a-f]+$/i,
                        xO = /^0b[01]+$/i,
                        OO = /^\[object .+?Constructor\]$/,
                        SO = /^0o[0-7]+$/i,
                        PO = /^(?:0|[1-9]\d*)$/,
                        NO = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        qa = /($^)/,
                        RO = /['\n\r\u2028\u2029\\]/g,
                        za = "\\ud800-\\udfff",
                        n_ = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        i_ = "\\u2700-\\u27bf",
                        s_ = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        o_ = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        a_ = "\\ufe0e\\ufe0f",
                        c_ = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        LO = "[" + za + "]",
                        u_ = "[" + c_ + "]",
                        Za = "[" + n_ + "]",
                        l_ = "\\d+",
                        FO = "[" + i_ + "]",
                        f_ = "[" + s_ + "]",
                        d_ = "[^" + za + c_ + l_ + i_ + s_ + o_ + "]",
                        Al = "\\ud83c[\\udffb-\\udfff]",
                        h_ = "[^" + za + "]",
                        Tl = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        Cl = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        Fs = "[" + o_ + "]",
                        __ = "(?:" + f_ + "|" + d_ + ")",
                        kO = "(?:" + Fs + "|" + d_ + ")",
                        g_ = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        y_ = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        m_ = "(?:" + Za + "|" + Al + ")?",
                        v_ = "[" + a_ + "]?",
                        b_ = v_ + m_ + "(?:\\u200d(?:" + [h_, Tl, Cl].join("|") + ")" + v_ + m_ + ")*",
                        ZO = "(?:" + [FO, Tl, Cl].join("|") + ")" + b_,
                        HO = "(?:" + [h_ + Za + "?", Za, Tl, Cl, LO].join("|") + ")",
                        BO = RegExp("['\u2019]", "g"),
                        VO = RegExp(Za, "g"),
                        jl = RegExp(Al + "(?=" + Al + ")|" + HO + b_, "g"),
                        GO = RegExp([Fs + "?" + f_ + "+" + g_ + "(?=" + [u_, Fs, "$"].join("|") + ")", kO + "+" + y_ + "(?=" + [u_, Fs + __, "$"].join("|") + ")", Fs + "?" + __ + "+" + g_, Fs + "+" + y_, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", l_, ZO].join("|"), "g"),
                        WO = RegExp("[\\u200d" + za + n_ + a_ + "]"),
                        JO = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        QO = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        YO = -1,
                        Ft = {};
                    Ft[ml] = Ft[vl] = Ft[bl] = Ft[wl] = Ft[El] = Ft[Il] = Ft[xl] = Ft[Ol] = Ft[Sl] = !0, Ft[Us] = Ft[Fa] = Ft[$o] = Ft[Ro] = Ft[Ls] = Ft[Ao] = Ft[Ma] = Ft[ka] = Ft[zn] = Ft[To] = Ft[mi] = Ft[Co] = Ft[Zn] = Ft[jo] = Ft[Do] = !1;
                    var $t = {};
                    $t[Us] = $t[Fa] = $t[$o] = $t[Ls] = $t[Ro] = $t[Ao] = $t[ml] = $t[vl] = $t[bl] = $t[wl] = $t[El] = $t[zn] = $t[To] = $t[mi] = $t[Co] = $t[Zn] = $t[jo] = $t[Ka] = $t[Il] = $t[xl] = $t[Ol] = $t[Sl] = !0, $t[Ma] = $t[ka] = $t[Do] = !1;
                    var rS = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        nS = parseFloat,
                        iS = parseInt,
                        w_ = "object" == typeof Po && Po && Po.Object === Object && Po,
                        sS = "object" == typeof self && self && self.Object === Object && self,
                        Rr = w_ || sS || Function("return this")(),
                        Dl = e && !e.nodeType && e,
                        os = Dl && r && !r.nodeType && r,
                        E_ = os && os.exports === Dl,
                        $l = E_ && w_.process,
                        bn = function() {
                            try {
                                return os && os.require && os.require("util").types || $l && $l.binding && $l.binding("util")
                            } catch {}
                        }(),
                        I_ = bn && bn.isArrayBuffer,
                        x_ = bn && bn.isDate,
                        O_ = bn && bn.isMap,
                        S_ = bn && bn.isRegExp,
                        P_ = bn && bn.isSet,
                        N_ = bn && bn.isTypedArray;

                    function fn(J, ae, te) {
                        switch (te.length) {
                            case 0:
                                return J.call(ae);
                            case 1:
                                return J.call(ae, te[0]);
                            case 2:
                                return J.call(ae, te[0], te[1]);
                            case 3:
                                return J.call(ae, te[0], te[1], te[2])
                        }
                        return J.apply(ae, te)
                    }

                    function oS(J, ae, te, Fe) {
                        for (var nt = -1, wt = null == J ? 0 : J.length; ++nt < wt;) {
                            var mr = J[nt];
                            ae(Fe, mr, te(mr), J)
                        }
                        return Fe
                    }

                    function En(J, ae) {
                        for (var te = -1, Fe = null == J ? 0 : J.length; ++te < Fe && !1 !== ae(J[te], te, J););
                        return J
                    }

                    function aS(J, ae) {
                        for (var te = null == J ? 0 : J.length; te-- && !1 !== ae(J[te], te, J););
                        return J
                    }

                    function R_(J, ae) {
                        for (var te = -1, Fe = null == J ? 0 : J.length; ++te < Fe;)
                            if (!ae(J[te], te, J)) return !1;
                        return !0
                    }

                    function Fi(J, ae) {
                        for (var te = -1, Fe = null == J ? 0 : J.length, nt = 0, wt = []; ++te < Fe;) {
                            var mr = J[te];
                            ae(mr, te, J) && (wt[nt++] = mr)
                        }
                        return wt
                    }

                    function Ha(J, ae) {
                        return !(null == J || !J.length) && Ms(J, ae, 0) > -1
                    }

                    function Ul(J, ae, te) {
                        for (var Fe = -1, nt = null == J ? 0 : J.length; ++Fe < nt;)
                            if (te(ae, J[Fe])) return !0;
                        return !1
                    }

                    function zt(J, ae) {
                        for (var te = -1, Fe = null == J ? 0 : J.length, nt = Array(Fe); ++te < Fe;) nt[te] = ae(J[te], te, J);
                        return nt
                    }

                    function Mi(J, ae) {
                        for (var te = -1, Fe = ae.length, nt = J.length; ++te < Fe;) J[nt + te] = ae[te];
                        return J
                    }

                    function Ll(J, ae, te, Fe) {
                        var nt = -1,
                            wt = null == J ? 0 : J.length;
                        for (Fe && wt && (te = J[++nt]); ++nt < wt;) te = ae(te, J[nt], nt, J);
                        return te
                    }

                    function cS(J, ae, te, Fe) {
                        var nt = null == J ? 0 : J.length;
                        for (Fe && nt && (te = J[--nt]); nt--;) te = ae(te, J[nt], nt, J);
                        return te
                    }

                    function Fl(J, ae) {
                        for (var te = -1, Fe = null == J ? 0 : J.length; ++te < Fe;)
                            if (ae(J[te], te, J)) return !0;
                        return !1
                    }
                    var uS = Ml("length");

                    function A_(J, ae, te) {
                        var Fe;
                        return te(J, function(nt, wt, mr) {
                            if (ae(nt, wt, mr)) return Fe = wt, !1
                        }), Fe
                    }

                    function Ba(J, ae, te, Fe) {
                        for (var nt = J.length, wt = te + (Fe ? 1 : -1); Fe ? wt-- : ++wt < nt;)
                            if (ae(J[wt], wt, J)) return wt;
                        return -1
                    }

                    function Ms(J, ae, te) {
                        return ae == ae ? function IS(J, ae, te) {
                            for (var Fe = te - 1, nt = J.length; ++Fe < nt;)
                                if (J[Fe] === ae) return Fe;
                            return -1
                        }(J, ae, te) : Ba(J, T_, te)
                    }

                    function dS(J, ae, te, Fe) {
                        for (var nt = te - 1, wt = J.length; ++nt < wt;)
                            if (Fe(J[nt], ae)) return nt;
                        return -1
                    }

                    function T_(J) {
                        return J != J
                    }

                    function C_(J, ae) {
                        var te = null == J ? 0 : J.length;
                        return te ? Kl(J, ae) / te : NaN
                    }

                    function Ml(J) {
                        return function(ae) {
                            return null == ae ? t : ae[J]
                        }
                    }

                    function kl(J) {
                        return function(ae) {
                            return null == J ? t : J[ae]
                        }
                    }

                    function j_(J, ae, te, Fe, nt) {
                        return nt(J, function(wt, mr, Dt) {
                            te = Fe ? (Fe = !1, wt) : ae(te, wt, mr, Dt)
                        }), te
                    }

                    function Kl(J, ae) {
                        for (var te, Fe = -1, nt = J.length; ++Fe < nt;) {
                            var wt = ae(J[Fe]);
                            wt !== t && (te = te === t ? wt : te + wt)
                        }
                        return te
                    }

                    function ql(J, ae) {
                        for (var te = -1, Fe = Array(J); ++te < J;) Fe[te] = ae(te);
                        return Fe
                    }

                    function D_(J) {
                        return J && J.slice(0, F_(J) + 1).replace(Nl, "")
                    }

                    function dn(J) {
                        return function(ae) {
                            return J(ae)
                        }
                    }

                    function zl(J, ae) {
                        return zt(ae, function(te) {
                            return J[te]
                        })
                    }

                    function Uo(J, ae) {
                        return J.has(ae)
                    }

                    function $_(J, ae) {
                        for (var te = -1, Fe = J.length; ++te < Fe && Ms(ae, J[te], 0) > -1;);
                        return te
                    }

                    function U_(J, ae) {
                        for (var te = J.length; te-- && Ms(ae, J[te], 0) > -1;);
                        return te
                    }
                    var gS = kl({\
                            u00c0: "A",
                            \u00c1: "A",
                            \u00c2: "A",
                            \u00c3: "A",
                            \u00c4: "A",
                            \u00c5: "A",
                            \u00e0: "a",
                            \u00e1: "a",
                            \u00e2: "a",
                            \u00e3: "a",
                            \u00e4: "a",
                            \u00e5: "a",
                            \u00c7: "C",
                            \u00e7: "c",
                            \u00d0: "D",
                            \u00f0: "d",
                            \u00c8: "E",
                            \u00c9: "E",
                            \u00ca: "E",
                            \u00cb: "E",
                            \u00e8: "e",
                            \u00e9: "e",
                            \u00ea: "e",
                            \u00eb: "e",
                            \u00cc: "I",
                            \u00cd: "I",
                            \u00ce: "I",
                            \u00cf: "I",
                            \u00ec: "i",
                            \u00ed: "i",
                            \u00ee: "i",
                            \u00ef: "i",
                            \u00d1: "N",
                            \u00f1: "n",
                            \u00d2: "O",
                            \u00d3: "O",
                            \u00d4: "O",
                            \u00d5: "O",
                            \u00d6: "O",
                            \u00d8: "O",
                            \u00f2: "o",
                            \u00f3: "o",
                            \u00f4: "o",
                            \u00f5: "o",
                            \u00f6: "o",
                            \u00f8: "o",
                            \u00d9: "U",
                            \u00da: "U",
                            \u00db: "U",
                            \u00dc: "U",
                            \u00f9: "u",
                            \u00fa: "u",
                            \u00fb: "u",
                            \u00fc: "u",
                            \u00dd: "Y",
                            \u00fd: "y",
                            \u00ff: "y",
                            \u00c6: "Ae",
                            \u00e6: "ae",
                            \u00de: "Th",
                            \u00fe: "th",
                            \u00df: "ss",
                            \u0100: "A",
                            \u0102: "A",
                            \u0104: "A",
                            \u0101: "a",
                            \u0103: "a",
                            \u0105: "a",
                            \u0106: "C",
                            \u0108: "C",
                            \u010a: "C",
                            \u010c: "C",
                            \u0107: "c",
                            \u0109: "c",
                            \u010b: "c",
                            \u010d: "c",
                            \u010e: "D",
                            \u0110: "D",
                            \u010f: "d",
                            \u0111: "d",
                            \u0112: "E",
                            \u0114: "E",
                            \u0116: "E",
                            \u0118: "E",
                            \u011a: "E",
                            \u0113: "e",
                            \u0115: "e",
                            \u0117: "e",
                            \u0119: "e",
                            \u011b: "e",
                            \u011c: "G",
                            \u011e: "G",
                            \u0120: "G",
                            \u0122: "G",
                            \u011d: "g",
                            \u011f: "g",
                            \u0121: "g",
                            \u0123: "g",
                            \u0124: "H",
                            \u0126: "H",
                            \u0125: "h",
                            \u0127: "h",
                            \u0128: "I",
                            \u012a: "I",
                            \u012c: "I",
                            \u012e: "I",
                            \u0130: "I",
                            \u0129: "i",
                            \u012b: "i",
                            \u012d: "i",
                            \u012f: "i",
                            \u0131: "i",
                            \u0134: "J",
                            \u0135: "j",
                            \u0136: "K",
                            \u0137: "k",
                            \u0138: "k",
                            \u0139: "L",
                            \u013b: "L",
                            \u013d: "L",
                            \u013f: "L",
                            \u0141: "L",
                            \u013a: "l",
                            \u013c: "l",
                            \u013e: "l",
                            \u0140: "l",
                            \u0142: "l",
                            \u0143: "N",
                            \u0145: "N",
                            \u0147: "N",
                            \u014a: "N",
                            \u0144: "n",
                            \u0146: "n",
                            \u0148: "n",
                            \u014b: "n",
                            \u014c: "O",
                            \u014e: "O",
                            \u0150: "O",
                            \u014d: "o",
                            \u014f: "o",
                            \u0151: "o",
                            \u0154: "R",
                            \u0156: "R",
                            \u0158: "R",
                            \u0155: "r",
                            \u0157: "r",
                            \u0159: "r",
                            \u015a: "S",
                            \u015c: "S",
                            \u015e: "S",
                            \u0160: "S",
                            \u015b: "s",
                            \u015d: "s",
                            \u015f: "s",
                            \u0161: "s",
                            \u0162: "T",
                            \u0164: "T",
                            \u0166: "T",
                            \u0163: "t",
                            \u0165: "t",
                            \u0167: "t",
                            \u0168: "U",
                            \u016a: "U",
                            \u016c: "U",
                            \u016e: "U",
                            \u0170: "U",
                            \u0172: "U",
                            \u0169: "u",
                            \u016b: "u",
                            \u016d: "u",
                            \u016f: "u",
                            \u0171: "u",
                            \u0173: "u",
                            \u0174: "W",
                            \u0175: "w",
                            \u0176: "Y",
                            \u0177: "y",
                            \u0178: "Y",
                            \u0179: "Z",
                            \u017b: "Z",
                            \u017d: "Z",
                            \u017a: "z",
                            \u017c: "z",
                            \u017e: "z",
                            \u0132: "IJ",
                            \u0133: "ij",
                            \u0152: "Oe",
                            \u0153: "oe",
                            \u0149: "'n",
                            \u017f: "s"
                        }),
                        yS = kl({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function mS(J) {
                        return "\\" + rS[J]
                    }

                    function ks(J) {
                        return WO.test(J)
                    }

                    function Zl(J) {
                        var ae = -1,
                            te = Array(J.size);
                        return J.forEach(function(Fe, nt) {
                            te[++ae] = [nt, Fe]
                        }), te
                    }

                    function L_(J, ae) {
                        return function(te) {
                            return J(ae(te))
                        }
                    }

                    function ki(J, ae) {
                        for (var te = -1, Fe = J.length, nt = 0, wt = []; ++te < Fe;) {
                            var mr = J[te];
                            (mr === ae || mr === A) && (J[te] = A, wt[nt++] = te)
                        }
                        return wt
                    }

                    function Va(J) {
                        var ae = -1,
                            te = Array(J.size);
                        return J.forEach(function(Fe) {
                            te[++ae] = Fe
                        }), te
                    }

                    function Ks(J) {
                        return ks(J) ? function SS(J) {
                            for (var ae = jl.lastIndex = 0; jl.test(J);) ++ae;
                            return ae
                        }(J) : uS(J)
                    }

                    function Hn(J) {
                        return ks(J) ? function PS(J) {
                            return J.match(jl) || []
                        }(J) : function lS(J) {
                            return J.split("")
                        }(J)
                    }

                    function F_(J) {
                        for (var ae = J.length; ae-- && _O.test(J.charAt(ae)););
                        return ae
                    }
                    var OS = kl({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        qs = function J(ae) {
                            var n, te = (ae = null == ae ? Rr : qs.defaults(Rr.Object(), ae, qs.pick(Rr, QO))).Array,
                                Fe = ae.Date,
                                nt = ae.Error,
                                wt = ae.Function,
                                mr = ae.Math,
                                Dt = ae.Object,
                                Hl = ae.RegExp,
                                AS = ae.String,
                                xn = ae.TypeError,
                                Ga = te.prototype,
                                zs = Dt.prototype,
                                Wa = ae["__core-js_shared__"],
                                Ja = wt.prototype.toString,
                                St = zs.hasOwnProperty,
                                CS = 0,
                                M_ = (n = /[^.]+$/.exec(Wa && Wa.keys && Wa.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                                Qa = zs.toString,
                                jS = Ja.call(Dt),
                                DS = Rr._,
                                $S = Hl("^" + Ja.call(St).replace(Pl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                Ya = E_ ? ae.Buffer : t,
                                Ki = ae.Symbol,
                                Xa = ae.Uint8Array,
                                k_ = Ya ? Ya.allocUnsafe : t,
                                ec = L_(Dt.getPrototypeOf, Dt),
                                K_ = Dt.create,
                                q_ = zs.propertyIsEnumerable,
                                tc = Ga.splice,
                                z_ = Ki ? Ki.isConcatSpreadable : t,
                                Lo = Ki ? Ki.iterator : t,
                                as = Ki ? Ki.toStringTag : t,
                                rc = function() {
                                    try {
                                        var n = ds(Dt, "defineProperty");
                                        return n({}, "", {}), n
                                    } catch {}
                                }(),
                                US = ae.clearTimeout !== Rr.clearTimeout && ae.clearTimeout,
                                LS = Fe && Fe.now !== Rr.Date.now && Fe.now,
                                FS = ae.setTimeout !== Rr.setTimeout && ae.setTimeout,
                                nc = mr.ceil,
                                ic = mr.floor,
                                Bl = Dt.getOwnPropertySymbols,
                                MS = Ya ? Ya.isBuffer : t,
                                Z_ = ae.isFinite,
                                kS = Ga.join,
                                KS = L_(Dt.keys, Dt),
                                vr = mr.max,
                                jr = mr.min,
                                qS = Fe.now,
                                zS = ae.parseInt,
                                H_ = mr.random,
                                ZS = Ga.reverse,
                                Vl = ds(ae, "DataView"),
                                Fo = ds(ae, "Map"),
                                Gl = ds(ae, "Promise"),
                                Zs = ds(ae, "Set"),
                                Mo = ds(ae, "WeakMap"),
                                ko = ds(Dt, "create"),
                                sc = Mo && new Mo,
                                Hs = {},
                                HS = hs(Vl),
                                BS = hs(Fo),
                                VS = hs(Gl),
                                GS = hs(Zs),
                                WS = hs(Mo),
                                oc = Ki ? Ki.prototype : t,
                                Ko = oc ? oc.valueOf : t,
                                B_ = oc ? oc.toString : t;

                            function P(n) {
                                if (Jt(n) && !st(n) && !(n instanceof _t)) {
                                    if (n instanceof An) return n;
                                    if (St.call(n, "__wrapped__")) return Vg(n)
                                }
                                return new An(n)
                            }
                            var Bs = function() {
                                function n() {}
                                return function(s) {
                                    if (!Bt(s)) return {};
                                    if (K_) return K_(s);
                                    n.prototype = s;
                                    var u = new n;
                                    return n.prototype = t, u
                                }
                            }();

                            function ac() {}

                            function An(n, s) {
                                this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = t
                            }

                            function _t(n) {
                                this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ni, this.__views__ = []
                            }

                            function cs(n) {
                                var s = -1,
                                    u = null == n ? 0 : n.length;
                                for (this.clear(); ++s < u;) {
                                    var d = n[s];
                                    this.set(d[0], d[1])
                                }
                            }

                            function vi(n) {
                                var s = -1,
                                    u = null == n ? 0 : n.length;
                                for (this.clear(); ++s < u;) {
                                    var d = n[s];
                                    this.set(d[0], d[1])
                                }
                            }

                            function bi(n) {
                                var s = -1,
                                    u = null == n ? 0 : n.length;
                                for (this.clear(); ++s < u;) {
                                    var d = n[s];
                                    this.set(d[0], d[1])
                                }
                            }

                            function us(n) {
                                var s = -1,
                                    u = null == n ? 0 : n.length;
                                for (this.__data__ = new bi; ++s < u;) this.add(n[s])
                            }

                            function Bn(n) {
                                var s = this.__data__ = new vi(n);
                                this.size = s.size
                            }

                            function V_(n, s) {
                                var u = st(n),
                                    d = !u && ps(n),
                                    I = !u && !d && Bi(n),
                                    R = !u && !d && !I && Js(n),
                                    K = u || d || I || R,
                                    Z = K ? ql(n.length, AS) : [],
                                    Q = Z.length;
                                for (var we in n)(s || St.call(n, we)) && (!K || !("length" == we || I && ("offset" == we || "parent" == we) || R && ("buffer" == we || "byteLength" == we || "byteOffset" == we) || xi(we, Q))) && Z.push(we);
                                return Z
                            }

                            function G_(n) {
                                var s = n.length;
                                return s ? n[ of (0, s - 1)] : t
                            }

                            function wP(n, s) {
                                return wc(Xr(n), ls(s, 0, n.length))
                            }

                            function EP(n) {
                                return wc(Xr(n))
                            }

                            function Wl(n, s, u) {
                                (u !== t && !Vn(n[s], u) || u === t && !(s in n)) && wi(n, s, u)
                            }

                            function qo(n, s, u) {
                                var d = n[s];
                                (!St.call(n, s) || !Vn(d, u) || u === t && !(s in n)) && wi(n, s, u)
                            }

                            function cc(n, s) {
                                for (var u = n.length; u--;)
                                    if (Vn(n[u][0], s)) return u;
                                return -1
                            }

                            function IP(n, s, u, d) {
                                return qi(n, function(I, R, K) {
                                    s(d, I, u(I), K)
                                }), d
                            }

                            function W_(n, s) {
                                return n && si(s, Er(s), n)
                            }

                            function wi(n, s, u) {
                                "__proto__" == s && rc ? rc(n, s, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: u,
                                    writable: !0
                                }) : n[s] = u
                            }

                            function Jl(n, s) {
                                for (var u = -1, d = s.length, I = te(d), R = null == n; ++u < d;) I[u] = R ? t : Tf(n, s[u]);
                                return I
                            }

                            function ls(n, s, u) {
                                return n == n && (u !== t && (n = n <= u ? n : u), s !== t && (n = n >= s ? n : s)), n
                            }

                            function Tn(n, s, u, d, I, R) {
                                var K, Z = 1 & s,
                                    Q = 2 & s,
                                    we = 4 & s;
                                if (u && (K = I ? u(n, d, I, R) : u(n)), K !== t) return K;
                                if (!Bt(n)) return n;
                                var Ie = st(n);
                                if (Ie) {
                                    if (K = function dN(n) {
                                            var s = n.length,
                                                u = new n.constructor(s);
                                            return s && "string" == typeof n[0] && St.call(n, "index") && (u.index = n.index, u.input = n.input), u
                                        }(n), !Z) return Xr(n, K)
                                } else {
                                    var Se = Dr(n),
                                        Ce = Se == ka || Se == Qp;
                                    if (Bi(n)) return vg(n, Z);
                                    if (Se == mi || Se == Us || Ce && !I) {
                                        if (K = Q || Ce ? {} : Fg(n), !Z) return Q ? function tN(n, s) {
                                            return si(n, Ug(n), s)
                                        }(n, function xP(n, s) {
                                            return n && si(s, tn(s), n)
                                        }(K, n)) : function eN(n, s) {
                                            return si(n, bf(n), s)
                                        }(n, W_(K, n))
                                    } else {
                                        if (!$t[Se]) return I ? n : {};
                                        K = function hN(n, s, u) {
                                            var d = n.constructor;
                                            switch (s) {
                                                case $o:
                                                    return hf(n);
                                                case Ro:
                                                case Ao:
                                                    return new d(+n);
                                                case Ls:
                                                    return function JP(n, s) {
                                                        var u = s ? hf(n.buffer) : n.buffer;
                                                        return new n.constructor(u, n.byteOffset, n.byteLength)
                                                    }(n, u);
                                                case ml:
                                                case vl:
                                                case bl:
                                                case wl:
                                                case El:
                                                case Il:
                                                case xl:
                                                case Ol:
                                                case Sl:
                                                    return bg(n, u);
                                                case zn:
                                                    return new d;
                                                case To:
                                                case jo:
                                                    return new d(n);
                                                case Co:
                                                    return function QP(n) {
                                                        var s = new n.constructor(n.source, r_.exec(n));
                                                        return s.lastIndex = n.lastIndex, s
                                                    }(n);
                                                case Zn:
                                                    return new d;
                                                case Ka:
                                                    return function YP(n) {
                                                        return Ko ? Dt(Ko.call(n)) : {}
                                                    }(n)
                                            }
                                        }(n, Se, Z)
                                    }
                                }
                                R || (R = new Bn);
                                var Ke = R.get(n);
                                if (Ke) return Ke;
                                R.set(n, K), hy(n) ? n.forEach(function(Ge) {
                                    K.add(Tn(Ge, s, u, Ge, n, R))
                                }) : fy(n) && n.forEach(function(Ge, ht) {
                                    K.set(ht, Tn(Ge, s, u, ht, n, R))
                                });
                                var ut = Ie ? t : (we ? Q ? yf : gf : Q ? tn : Er)(n);
                                return En(ut || n, function(Ge, ht) {
                                    ut && (Ge = n[ht = Ge]), qo(K, ht, Tn(Ge, s, u, ht, n, R))
                                }), K
                            }

                            function J_(n, s, u) {
                                var d = u.length;
                                if (null == n) return !d;
                                for (n = Dt(n); d--;) {
                                    var I = u[d],
                                        K = n[I];
                                    if (K === t && !(I in n) || !(0, s[I])(K)) return !1
                                }
                                return !0
                            }

                            function Q_(n, s, u) {
                                if ("function" != typeof n) throw new xn(f);
                                return Wo(function() {
                                    n.apply(t, u)
                                }, s)
                            }

                            function zo(n, s, u, d) {
                                var I = -1,
                                    R = Ha,
                                    K = !0,
                                    Z = n.length,
                                    Q = [],
                                    we = s.length;
                                if (!Z) return Q;
                                u && (s = zt(s, dn(u))), d ? (R = Ul, K = !1) : s.length >= 200 && (R = Uo, K = !1, s = new us(s));
                                e: for (; ++I < Z;) {
                                    var Ie = n[I],
                                        Se = null == u ? Ie : u(Ie);
                                    if (Ie = d || 0 !== Ie ? Ie : 0, K && Se == Se) {
                                        for (var Ce = we; Ce--;)
                                            if (s[Ce] === Se) continue e;
                                        Q.push(Ie)
                                    } else R(s, Se, d) || Q.push(Ie)
                                }
                                return Q
                            }
                            P.templateSettings = {
                                escape: uO,
                                evaluate: lO,
                                interpolate: t_,
                                variable: "",
                                imports: {
                                    _: P
                                }
                            }, (P.prototype = ac.prototype).constructor = P, (An.prototype = Bs(ac.prototype)).constructor = An, (_t.prototype = Bs(ac.prototype)).constructor = _t, cs.prototype.clear = function XS() {
                                this.__data__ = ko ? ko(null) : {}, this.size = 0
                            }, cs.prototype.delete = function eP(n) {
                                var s = this.has(n) && delete this.__data__[n];
                                return this.size -= s ? 1 : 0, s
                            }, cs.prototype.get = function tP(n) {
                                var s = this.__data__;
                                if (ko) {
                                    var u = s[n];
                                    return u === C ? t : u
                                }
                                return St.call(s, n) ? s[n] : t
                            }, cs.prototype.has = function rP(n) {
                                var s = this.__data__;
                                return ko ? s[n] !== t : St.call(s, n)
                            }, cs.prototype.set = function nP(n, s) {
                                var u = this.__data__;
                                return this.size += this.has(n) ? 0 : 1, u[n] = ko && s === t ? C : s, this
                            }, vi.prototype.clear = function iP() {
                                this.__data__ = [], this.size = 0
                            }, vi.prototype.delete = function sP(n) {
                                var s = this.__data__,
                                    u = cc(s, n);
                                return !(u < 0 || (u == s.length - 1 ? s.pop() : tc.call(s, u, 1), --this.size, 0))
                            }, vi.prototype.get = function oP(n) {
                                var s = this.__data__,
                                    u = cc(s, n);
                                return u < 0 ? t : s[u][1]
                            }, vi.prototype.has = function aP(n) {
                                return cc(this.__data__, n) > -1
                            }, vi.prototype.set = function cP(n, s) {
                                var u = this.__data__,
                                    d = cc(u, n);
                                return d < 0 ? (++this.size, u.push([n, s])) : u[d][1] = s, this
                            }, bi.prototype.clear = function uP() {
                                this.size = 0, this.__data__ = {
                                    hash: new cs,
                                    map: new(Fo || vi),
                                    string: new cs
                                }
                            }, bi.prototype.delete = function lP(n) {
                                var s = bc(this, n).delete(n);
                                return this.size -= s ? 1 : 0, s
                            }, bi.prototype.get = function fP(n) {
                                return bc(this, n).get(n)
                            }, bi.prototype.has = function dP(n) {
                                return bc(this, n).has(n)
                            }, bi.prototype.set = function hP(n, s) {
                                var u = bc(this, n),
                                    d = u.size;
                                return u.set(n, s), this.size += u.size == d ? 0 : 1, this
                            }, us.prototype.add = us.prototype.push = function pP(n) {
                                return this.__data__.set(n, C), this
                            }, us.prototype.has = function _P(n) {
                                return this.__data__.has(n)
                            }, Bn.prototype.clear = function gP() {
                                this.__data__ = new vi, this.size = 0
                            }, Bn.prototype.delete = function yP(n) {
                                var s = this.__data__,
                                    u = s.delete(n);
                                return this.size = s.size, u
                            }, Bn.prototype.get = function mP(n) {
                                return this.__data__.get(n)
                            }, Bn.prototype.has = function vP(n) {
                                return this.__data__.has(n)
                            }, Bn.prototype.set = function bP(n, s) {
                                var u = this.__data__;
                                if (u instanceof vi) {
                                    var d = u.__data__;
                                    if (!Fo || d.length < 199) return d.push([n, s]), this.size = ++u.size, this;
                                    u = this.__data__ = new bi(d)
                                }
                                return u.set(n, s), this.size = u.size, this
                            };
                            var qi = xg(ii),
                                Y_ = xg(Yl, !0);

                            function SP(n, s) {
                                var u = !0;
                                return qi(n, function(d, I, R) {
                                    return u = !!s(d, I, R)
                                }), u
                            }

                            function uc(n, s, u) {
                                for (var d = -1, I = n.length; ++d < I;) {
                                    var R = n[d],
                                        K = s(R);
                                    if (null != K && (Z === t ? K == K && !pn(K) : u(K, Z))) var Z = K,
                                        Q = R
                                }
                                return Q
                            }

                            function X_(n, s) {
                                var u = [];
                                return qi(n, function(d, I, R) {
                                    s(d, I, R) && u.push(d)
                                }), u
                            }

                            function Ar(n, s, u, d, I) {
                                var R = -1,
                                    K = n.length;
                                for (u || (u = _N), I || (I = []); ++R < K;) {
                                    var Z = n[R];
                                    s > 0 && u(Z) ? s > 1 ? Ar(Z, s - 1, u, d, I) : Mi(I, Z) : d || (I[I.length] = Z)
                                }
                                return I
                            }
                            var Ql = Og(),
                                eg = Og(!0);

                            function ii(n, s) {
                                return n && Ql(n, s, Er)
                            }

                            function Yl(n, s) {
                                return n && eg(n, s, Er)
                            }

                            function lc(n, s) {
                                return Fi(s, function(u) {
                                    return Oi(n[u])
                                })
                            }

                            function fs(n, s) {
                                for (var u = 0, d = (s = Zi(s, n)).length; null != n && u < d;) n = n[oi(s[u++])];
                                return u && u == d ? n : t
                            }

                            function tg(n, s, u) {
                                var d = s(n);
                                return st(n) ? d : Mi(d, u(n))
                            }

                            function Fr(n) {
                                return null == n ? n === t ? "[object Undefined]" : "[object Null]" : as && as in Dt(n) ? function uN(n) {
                                    var s = St.call(n, as),
                                        u = n[as];
                                    try {
                                        n[as] = t;
                                        var d = !0
                                    } catch {}
                                    var I = Qa.call(n);
                                    return d && (s ? n[as] = u : delete n[as]), I
                                }(n) : function EN(n) {
                                    return Qa.call(n)
                                }(n)
                            }

                            function Xl(n, s) {
                                return n > s
                            }

                            function NP(n, s) {
                                return null != n && St.call(n, s)
                            }

                            function RP(n, s) {
                                return null != n && s in Dt(n)
                            }

                            function ef(n, s, u) {
                                for (var d = u ? Ul : Ha, I = n[0].length, R = n.length, K = R, Z = te(R), Q = 1 / 0, we = []; K--;) {
                                    var Ie = n[K];
                                    K && s && (Ie = zt(Ie, dn(s))), Q = jr(Ie.length, Q), Z[K] = !u && (s || I >= 120 && Ie.length >= 120) ? new us(K && Ie) : t
                                }
                                Ie = n[0];
                                var Se = -1,
                                    Ce = Z[0];
                                e: for (; ++Se < I && we.length < Q;) {
                                    var Ke = Ie[Se],
                                        Ve = s ? s(Ke) : Ke;
                                    if (Ke = u || 0 !== Ke ? Ke : 0, !(Ce ? Uo(Ce, Ve) : d(we, Ve, u))) {
                                        for (K = R; --K;) {
                                            var ut = Z[K];
                                            if (!(ut ? Uo(ut, Ve) : d(n[K], Ve, u))) continue e
                                        }
                                        Ce && Ce.push(Ve), we.push(Ke)
                                    }
                                }
                                return we
                            }

                            function Zo(n, s, u) {
                                var d = null == (n = qg(n, s = Zi(s, n))) ? n : n[oi(jn(s))];
                                return null == d ? t : fn(d, n, u)
                            }

                            function rg(n) {
                                return Jt(n) && Fr(n) == Us
                            }

                            function Ho(n, s, u, d, I) {
                                return n === s || (null == n || null == s || !Jt(n) && !Jt(s) ? n != n && s != s : function DP(n, s, u, d, I, R) {
                                    var K = st(n),
                                        Z = st(s),
                                        Q = K ? Fa : Dr(n),
                                        we = Z ? Fa : Dr(s),
                                        Ie = (Q = Q == Us ? mi : Q) == mi,
                                        Se = (we = we == Us ? mi : we) == mi,
                                        Ce = Q == we;
                                    if (Ce && Bi(n)) {
                                        if (!Bi(s)) return !1;
                                        K = !0, Ie = !1
                                    }
                                    if (Ce && !Ie) return R || (R = new Bn), K || Js(n) ? $g(n, s, u, d, I, R) : function aN(n, s, u, d, I, R, K) {
                                        switch (u) {
                                            case Ls:
                                                if (n.byteLength != s.byteLength || n.byteOffset != s.byteOffset) return !1;
                                                n = n.buffer, s = s.buffer;
                                            case $o:
                                                return !(n.byteLength != s.byteLength || !R(new Xa(n), new Xa(s)));
                                            case Ro:
                                            case Ao:
                                            case To:
                                                return Vn(+n, +s);
                                            case Ma:
                                                return n.name == s.name && n.message == s.message;
                                            case Co:
                                            case jo:
                                                return n == s + "";
                                            case zn:
                                                var Z = Zl;
                                            case Zn:
                                                if (Z || (Z = Va), n.size != s.size && !(1 & d)) return !1;
                                                var we = K.get(n);
                                                if (we) return we == s;
                                                d |= 2, K.set(n, s);
                                                var Ie = $g(Z(n), Z(s), d, I, R, K);
                                                return K.delete(n), Ie;
                                            case Ka:
                                                if (Ko) return Ko.call(n) == Ko.call(s)
                                        }
                                        return !1
                                    }(n, s, Q, u, d, I, R);
                                    if (!(1 & u)) {
                                        var Ke = Ie && St.call(n, "__wrapped__"),
                                            Ve = Se && St.call(s, "__wrapped__");
                                        if (Ke || Ve) {
                                            var ut = Ke ? n.value() : n,
                                                Ge = Ve ? s.value() : s;
                                            return R || (R = new Bn), I(ut, Ge, u, d, R)
                                        }
                                    }
                                    return !!Ce && (R || (R = new Bn), function cN(n, s, u, d, I, R) {
                                        var K = 1 & u,
                                            Z = gf(n),
                                            Q = Z.length;
                                        if (Q != gf(s).length && !K) return !1;
                                        for (var Se = Q; Se--;) {
                                            var Ce = Z[Se];
                                            if (!(K ? Ce in s : St.call(s, Ce))) return !1
                                        }
                                        var Ke = R.get(n),
                                            Ve = R.get(s);
                                        if (Ke && Ve) return Ke == s && Ve == n;
                                        var ut = !0;
                                        R.set(n, s), R.set(s, n);
                                        for (var Ge = K; ++Se < Q;) {
                                            var ht = n[Ce = Z[Se]],
                                                gt = s[Ce];
                                            if (d) var _n = K ? d(gt, ht, Ce, s, n, R) : d(ht, gt, Ce, n, s, R);
                                            if (!(_n === t ? ht === gt || I(ht, gt, u, d, R) : _n)) {
                                                ut = !1;
                                                break
                                            }
                                            Ge || (Ge = "constructor" == Ce)
                                        }
                                        if (ut && !Ge) {
                                            var kr = n.constructor,
                                                gn = s.constructor;
                                            kr != gn && "constructor" in n && "constructor" in s && !("function" == typeof kr && kr instanceof kr && "function" == typeof gn && gn instanceof gn) && (ut = !1)
                                        }
                                        return R.delete(n), R.delete(s), ut
                                    }(n, s, u, d, I, R))
                                }(n, s, u, d, Ho, I))
                            }

                            function tf(n, s, u, d) {
                                var I = u.length,
                                    R = I,
                                    K = !d;
                                if (null == n) return !R;
                                for (n = Dt(n); I--;) {
                                    var Z = u[I];
                                    if (K && Z[2] ? Z[1] !== n[Z[0]] : !(Z[0] in n)) return !1
                                }
                                for (; ++I < R;) {
                                    var Q = (Z = u[I])[0],
                                        we = n[Q],
                                        Ie = Z[1];
                                    if (K && Z[2]) {
                                        if (we === t && !(Q in n)) return !1
                                    } else {
                                        var Se = new Bn;
                                        if (d) var Ce = d(we, Ie, Q, n, s, Se);
                                        if (!(Ce === t ? Ho(Ie, we, 3, d, Se) : Ce)) return !1
                                    }
                                }
                                return !0
                            }

                            function ng(n) {
                                return !(!Bt(n) || function yN(n) {
                                    return !!M_ && M_ in n
                                }(n)) && (Oi(n) ? $S : OO).test(hs(n))
                            }

                            function ig(n) {
                                return "function" == typeof n ? n : null == n ? rn : "object" == typeof n ? st(n) ? ag(n[0], n[1]) : og(n) : Sy(n)
                            }

                            function rf(n) {
                                if (!Go(n)) return KS(n);
                                var s = [];
                                for (var u in Dt(n)) St.call(n, u) && "constructor" != u && s.push(u);
                                return s
                            }

                            function nf(n, s) {
                                return n < s
                            }

                            function sg(n, s) {
                                var u = -1,
                                    d = en(n) ? te(n.length) : [];
                                return qi(n, function(I, R, K) {
                                    d[++u] = s(I, R, K)
                                }), d
                            }

                            function og(n) {
                                var s = vf(n);
                                return 1 == s.length && s[0][2] ? kg(s[0][0], s[0][1]) : function(u) {
                                    return u === n || tf(u, n, s)
                                }
                            }

                            function ag(n, s) {
                                return wf(n) && Mg(s) ? kg(oi(n), s) : function(u) {
                                    var d = Tf(u, n);
                                    return d === t && d === s ? Cf(u, n) : Ho(s, d, 3)
                                }
                            }

                            function fc(n, s, u, d, I) {
                                n !== s && Ql(s, function(R, K) {
                                    if (I || (I = new Bn), Bt(R)) ! function kP(n, s, u, d, I, R, K) {
                                        var Z = If(n, u),
                                            Q = If(s, u),
                                            we = K.get(Q);
                                        if (we) Wl(n, u, we);
                                        else {
                                            var Ie = R ? R(Z, Q, u + "", n, s, K) : t,
                                                Se = Ie === t;
                                            if (Se) {
                                                var Ce = st(Q),
                                                    Ke = !Ce && Bi(Q),
                                                    Ve = !Ce && !Ke && Js(Q);
                                                Ie = Q, Ce || Ke || Ve ? st(Z) ? Ie = Z : rr(Z) ? Ie = Xr(Z) : Ke ? (Se = !1, Ie = vg(Q, !0)) : Ve ? (Se = !1, Ie = bg(Q, !0)) : Ie = [] : Jo(Q) || ps(Q) ? (Ie = Z, ps(Z) ? Ie = gy(Z) : (!Bt(Z) || Oi(Z)) && (Ie = Fg(Q))) : Se = !1
                                            }
                                            Se && (K.set(Q, Ie), I(Ie, Q, d, R, K), K.delete(Q)), Wl(n, u, Ie)
                                        }
                                    }(n, s, K, u, fc, d, I);
                                    else {
                                        var Z = d ? d(If(n, K), R, K + "", n, s, I) : t;
                                        Z === t && (Z = R), Wl(n, K, Z)
                                    }
                                }, tn)
                            }

                            function cg(n, s) {
                                var u = n.length;
                                if (u) return xi(s += s < 0 ? u : 0, u) ? n[s] : t
                            }

                            function ug(n, s, u) {
                                s = s.length ? zt(s, function(R) {
                                    return st(R) ? function(K) {
                                        return fs(K, 1 === R.length ? R[0] : R)
                                    } : R
                                }) : [rn];
                                var d = -1;
                                return s = zt(s, dn(Be())),
                                    function hS(J, ae) {
                                        var te = J.length;
                                        for (J.sort(ae); te--;) J[te] = J[te].value;
                                        return J
                                    }(sg(n, function(R, K, Z) {
                                        return {
                                            criteria: zt(s, function(we) {
                                                return we(R)
                                            }),
                                            index: ++d,
                                            value: R
                                        }
                                    }), function(R, K) {
                                        return function XP(n, s, u) {
                                            for (var d = -1, I = n.criteria, R = s.criteria, K = I.length, Z = u.length; ++d < K;) {
                                                var Q = wg(I[d], R[d]);
                                                if (Q) return d >= Z ? Q : Q * ("desc" == u[d] ? -1 : 1)
                                            }
                                            return n.index - s.index
                                        }(R, K, u)
                                    })
                            }

                            function lg(n, s, u) {
                                for (var d = -1, I = s.length, R = {}; ++d < I;) {
                                    var K = s[d],
                                        Z = fs(n, K);
                                    u(Z, K) && Bo(R, Zi(K, n), Z)
                                }
                                return R
                            }

                            function sf(n, s, u, d) {
                                var I = d ? dS : Ms,
                                    R = -1,
                                    K = s.length,
                                    Z = n;
                                for (n === s && (s = Xr(s)), u && (Z = zt(n, dn(u))); ++R < K;)
                                    for (var Q = 0, we = s[R], Ie = u ? u(we) : we;
                                        (Q = I(Z, Ie, Q, d)) > -1;) Z !== n && tc.call(Z, Q, 1), tc.call(n, Q, 1);
                                return n
                            }

                            function fg(n, s) {
                                for (var u = n ? s.length : 0, d = u - 1; u--;) {
                                    var I = s[u];
                                    if (u == d || I !== R) {
                                        var R = I;
                                        xi(I) ? tc.call(n, I, 1) : uf(n, I)
                                    }
                                }
                                return n
                            }

                            function of (n, s) {
                                return n + ic(H_() * (s - n + 1))
                            }

                            function af(n, s) {
                                var u = "";
                                if (!n || s < 1 || s > Li) return u;
                                do {
                                    s % 2 && (u += n), (s = ic(s / 2)) && (n += n)
                                } while (s);
                                return u
                            }

                            function lt(n, s) {
                                return xf(Kg(n, s, rn), n + "")
                            }

                            function ZP(n) {
                                return G_(Qs(n))
                            }

                            function HP(n, s) {
                                var u = Qs(n);
                                return wc(u, ls(s, 0, u.length))
                            }

                            function Bo(n, s, u, d) {
                                if (!Bt(n)) return n;
                                for (var I = -1, R = (s = Zi(s, n)).length, K = R - 1, Z = n; null != Z && ++I < R;) {
                                    var Q = oi(s[I]),
                                        we = u;
                                    if ("__proto__" === Q || "constructor" === Q || "prototype" === Q) return n;
                                    if (I != K) {
                                        var Ie = Z[Q];
                                        (we = d ? d(Ie, Q, Z) : t) === t && (we = Bt(Ie) ? Ie : xi(s[I + 1]) ? [] : {})
                                    }
                                    qo(Z, Q, we), Z = Z[Q]
                                }
                                return n
                            }
                            var dg = sc ? function(n, s) {
                                    return sc.set(n, s), n
                                } : rn,
                                BP = rc ? function(n, s) {
                                    return rc(n, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: Df(s),
                                        writable: !0
                                    })
                                } : rn;

                            function VP(n) {
                                return wc(Qs(n))
                            }

                            function Cn(n, s, u) {
                                var d = -1,
                                    I = n.length;
                                s < 0 && (s = -s > I ? 0 : I + s), (u = u > I ? I : u) < 0 && (u += I), I = s > u ? 0 : u - s >>> 0, s >>>= 0;
                                for (var R = te(I); ++d < I;) R[d] = n[d + s];
                                return R
                            }

                            function GP(n, s) {
                                var u;
                                return qi(n, function(d, I, R) {
                                    return !(u = s(d, I, R))
                                }), !!u
                            }

                            function dc(n, s, u) {
                                var d = 0,
                                    I = null == n ? d : n.length;
                                if ("number" == typeof s && s == s && I <= 2147483647) {
                                    for (; d < I;) {
                                        var R = d + I >>> 1,
                                            K = n[R];
                                        null !== K && !pn(K) && (u ? K <= s : K < s) ? d = R + 1 : I = R
                                    }
                                    return I
                                }
                                return cf(n, s, rn, u)
                            }

                            function cf(n, s, u, d) {
                                var I = 0,
                                    R = null == n ? 0 : n.length;
                                if (0 === R) return 0;
                                for (var K = (s = u(s)) != s, Z = null === s, Q = pn(s), we = s === t; I < R;) {
                                    var Ie = ic((I + R) / 2),
                                        Se = u(n[Ie]),
                                        Ce = Se !== t,
                                        Ke = null === Se,
                                        Ve = Se == Se,
                                        ut = pn(Se);
                                    if (K) var Ge = d || Ve;
                                    else Ge = we ? Ve && (d || Ce) : Z ? Ve && Ce && (d || !Ke) : Q ? Ve && Ce && !Ke && (d || !ut) : !Ke && !ut && (d ? Se <= s : Se < s);
                                    Ge ? I = Ie + 1 : R = Ie
                                }
                                return jr(R, 4294967294)
                            }

                            function hg(n, s) {
                                for (var u = -1, d = n.length, I = 0, R = []; ++u < d;) {
                                    var K = n[u],
                                        Z = s ? s(K) : K;
                                    if (!u || !Vn(Z, Q)) {
                                        var Q = Z;
                                        R[I++] = 0 === K ? 0 : K
                                    }
                                }
                                return R
                            }

                            function pg(n) {
                                return "number" == typeof n ? n : pn(n) ? NaN : +n
                            }

                            function hn(n) {
                                if ("string" == typeof n) return n;
                                if (st(n)) return zt(n, hn) + "";
                                if (pn(n)) return B_ ? B_.call(n) : "";
                                var s = n + "";
                                return "0" == s && 1 / n == -ss ? "-0" : s
                            }

                            function zi(n, s, u) {
                                var d = -1,
                                    I = Ha,
                                    R = n.length,
                                    K = !0,
                                    Z = [],
                                    Q = Z;
                                if (u) K = !1, I = Ul;
                                else if (R >= 200) {
                                    var we = s ? null : sN(n);
                                    if (we) return Va(we);
                                    K = !1, I = Uo, Q = new us
                                } else Q = s ? [] : Z;
                                e: for (; ++d < R;) {
                                    var Ie = n[d],
                                        Se = s ? s(Ie) : Ie;
                                    if (Ie = u || 0 !== Ie ? Ie : 0, K && Se == Se) {
                                        for (var Ce = Q.length; Ce--;)
                                            if (Q[Ce] === Se) continue e;
                                        s && Q.push(Se), Z.push(Ie)
                                    } else I(Q, Se, u) || (Q !== Z && Q.push(Se), Z.push(Ie))
                                }
                                return Z
                            }

                            function uf(n, s) {
                                return null == (n = qg(n, s = Zi(s, n))) || delete n[oi(jn(s))]
                            }

                            function _g(n, s, u, d) {
                                return Bo(n, s, u(fs(n, s)), d)
                            }

                            function hc(n, s, u, d) {
                                for (var I = n.length, R = d ? I : -1;
                                    (d ? R-- : ++R < I) && s(n[R], R, n););
                                return u ? Cn(n, d ? 0 : R, d ? R + 1 : I) : Cn(n, d ? R + 1 : 0, d ? I : R)
                            }

                            function gg(n, s) {
                                var u = n;
                                return u instanceof _t && (u = u.value()), Ll(s, function(d, I) {
                                    return I.func.apply(I.thisArg, Mi([d], I.args))
                                }, u)
                            }

                            function lf(n, s, u) {
                                var d = n.length;
                                if (d < 2) return d ? zi(n[0]) : [];
                                for (var I = -1, R = te(d); ++I < d;)
                                    for (var K = n[I], Z = -1; ++Z < d;) Z != I && (R[I] = zo(R[I] || K, n[Z], s, u));
                                return zi(Ar(R, 1), s, u)
                            }

                            function yg(n, s, u) {
                                for (var d = -1, I = n.length, R = s.length, K = {}; ++d < I;) u(K, n[d], d < R ? s[d] : t);
                                return K
                            }

                            function ff(n) {
                                return rr(n) ? n : []
                            }

                            function df(n) {
                                return "function" == typeof n ? n : rn
                            }

                            function Zi(n, s) {
                                return st(n) ? n : wf(n, s) ? [n] : Bg(It(n))
                            }
                            var WP = lt;

                            function Hi(n, s, u) {
                                var d = n.length;
                                return u = u === t ? d : u, !s && u >= d ? n : Cn(n, s, u)
                            }
                            var mg = US || function(n) {
                                return Rr.clearTimeout(n)
                            };

                            function vg(n, s) {
                                if (s) return n.slice();
                                var u = n.length,
                                    d = k_ ? k_(u) : new n.constructor(u);
                                return n.copy(d), d
                            }

                            function hf(n) {
                                var s = new n.constructor(n.byteLength);
                                return new Xa(s).set(new Xa(n)), s
                            }

                            function bg(n, s) {
                                var u = s ? hf(n.buffer) : n.buffer;
                                return new n.constructor(u, n.byteOffset, n.length)
                            }

                            function wg(n, s) {
                                if (n !== s) {
                                    var u = n !== t,
                                        d = null === n,
                                        I = n == n,
                                        R = pn(n),
                                        K = s !== t,
                                        Z = null === s,
                                        Q = s == s,
                                        we = pn(s);
                                    if (!Z && !we && !R && n > s || R && K && Q && !Z && !we || d && K && Q || !u && Q || !I) return 1;
                                    if (!d && !R && !we && n < s || we && u && I && !d && !R || Z && u && I || !K && I || !Q) return -1
                                }
                                return 0
                            }

                            function Eg(n, s, u, d) {
                                for (var I = -1, R = n.length, K = u.length, Z = -1, Q = s.length, we = vr(R - K, 0), Ie = te(Q + we), Se = !d; ++Z < Q;) Ie[Z] = s[Z];
                                for (; ++I < K;)(Se || I < R) && (Ie[u[I]] = n[I]);
                                for (; we--;) Ie[Z++] = n[I++];
                                return Ie
                            }

                            function Ig(n, s, u, d) {
                                for (var I = -1, R = n.length, K = -1, Z = u.length, Q = -1, we = s.length, Ie = vr(R - Z, 0), Se = te(Ie + we), Ce = !d; ++I < Ie;) Se[I] = n[I];
                                for (var Ke = I; ++Q < we;) Se[Ke + Q] = s[Q];
                                for (; ++K < Z;)(Ce || I < R) && (Se[Ke + u[K]] = n[I++]);
                                return Se
                            }

                            function Xr(n, s) {
                                var u = -1,
                                    d = n.length;
                                for (s || (s = te(d)); ++u < d;) s[u] = n[u];
                                return s
                            }

                            function si(n, s, u, d) {
                                var I = !u;
                                u || (u = {});
                                for (var R = -1, K = s.length; ++R < K;) {
                                    var Z = s[R],
                                        Q = d ? d(u[Z], n[Z], Z, u, n) : t;
                                    Q === t && (Q = n[Z]), I ? wi(u, Z, Q) : qo(u, Z, Q)
                                }
                                return u
                            }

                            function pc(n, s) {
                                return function(u, d) {
                                    var I = st(u) ? oS : IP,
                                        R = s ? s() : {};
                                    return I(u, n, Be(d, 2), R)
                                }
                            }

                            function Vs(n) {
                                return lt(function(s, u) {
                                    var d = -1,
                                        I = u.length,
                                        R = I > 1 ? u[I - 1] : t,
                                        K = I > 2 ? u[2] : t;
                                    for (R = n.length > 3 && "function" == typeof R ? (I--, R) : t, K && Mr(u[0], u[1], K) && (R = I < 3 ? t : R, I = 1), s = Dt(s); ++d < I;) {
                                        var Z = u[d];
                                        Z && n(s, Z, d, R)
                                    }
                                    return s
                                })
                            }

                            function xg(n, s) {
                                return function(u, d) {
                                    if (null == u) return u;
                                    if (!en(u)) return n(u, d);
                                    for (var I = u.length, R = s ? I : -1, K = Dt(u);
                                        (s ? R-- : ++R < I) && !1 !== d(K[R], R, K););
                                    return u
                                }
                            }

                            function Og(n) {
                                return function(s, u, d) {
                                    for (var I = -1, R = Dt(s), K = d(s), Z = K.length; Z--;) {
                                        var Q = K[n ? Z : ++I];
                                        if (!1 === u(R[Q], Q, R)) break
                                    }
                                    return s
                                }
                            }

                            function Sg(n) {
                                return function(s) {
                                    var u = ks(s = It(s)) ? Hn(s) : t,
                                        d = u ? u[0] : s.charAt(0),
                                        I = u ? Hi(u, 1).join("") : s.slice(1);
                                    return d[n]() + I
                                }
                            }

                            function Gs(n) {
                                return function(s) {
                                    return Ll(xy(Iy(s).replace(BO, "")), n, "")
                                }
                            }

                            function Vo(n) {
                                return function() {
                                    var s = arguments;
                                    switch (s.length) {
                                        case 0:
                                            return new n;
                                        case 1:
                                            return new n(s[0]);
                                        case 2:
                                            return new n(s[0], s[1]);
                                        case 3:
                                            return new n(s[0], s[1], s[2]);
                                        case 4:
                                            return new n(s[0], s[1], s[2], s[3]);
                                        case 5:
                                            return new n(s[0], s[1], s[2], s[3], s[4]);
                                        case 6:
                                            return new n(s[0], s[1], s[2], s[3], s[4], s[5]);
                                        case 7:
                                            return new n(s[0], s[1], s[2], s[3], s[4], s[5], s[6])
                                    }
                                    var u = Bs(n.prototype),
                                        d = n.apply(u, s);
                                    return Bt(d) ? d : u
                                }
                            }

                            function Pg(n) {
                                return function(s, u, d) {
                                    var I = Dt(s);
                                    if (!en(s)) {
                                        var R = Be(u, 3);
                                        s = Er(s), u = function(Z) {
                                            return R(I[Z], Z, I)
                                        }
                                    }
                                    var K = n(s, u, d);
                                    return K > -1 ? I[R ? s[K] : K] : t
                                }
                            }

                            function Ng(n) {
                                return Ii(function(s) {
                                    var u = s.length,
                                        d = u,
                                        I = An.prototype.thru;
                                    for (n && s.reverse(); d--;) {
                                        var R = s[d];
                                        if ("function" != typeof R) throw new xn(f);
                                        if (I && !K && "wrapper" == vc(R)) var K = new An([], !0)
                                    }
                                    for (d = K ? d : u; ++d < u;) {
                                        var Z = vc(R = s[d]),
                                            Q = "wrapper" == Z ? mf(R) : t;
                                        K = Q && Ef(Q[0]) && 424 == Q[1] && !Q[4].length && 1 == Q[9] ? K[vc(Q[0])].apply(K, Q[3]) : 1 == R.length && Ef(R) ? K[Z]() : K.thru(R)
                                    }
                                    return function() {
                                        var we = arguments,
                                            Ie = we[0];
                                        if (K && 1 == we.length && st(Ie)) return K.plant(Ie).value();
                                        for (var Se = 0, Ce = u ? s[Se].apply(this, we) : Ie; ++Se < u;) Ce = s[Se].call(this, Ce);
                                        return Ce
                                    }
                                })
                            }

                            function _c(n, s, u, d, I, R, K, Z, Q, we) {
                                var Ie = 128 & s,
                                    Se = 1 & s,
                                    Ce = 2 & s,
                                    Ke = 24 & s,
                                    Ve = 512 & s,
                                    ut = Ce ? t : Vo(n);
                                return function Ge() {
                                    for (var ht = arguments.length, gt = te(ht), _n = ht; _n--;) gt[_n] = arguments[_n];
                                    if (Ke) var kr = Ws(Ge),
                                        gn = function _S(J, ae) {
                                            for (var te = J.length, Fe = 0; te--;) J[te] === ae && ++Fe;
                                            return Fe
                                        }(gt, kr);
                                    if (d && (gt = Eg(gt, d, I, Ke)), R && (gt = Ig(gt, R, K, Ke)), ht -= gn, Ke && ht < we) {
                                        var nr = ki(gt, kr);
                                        return Tg(n, s, _c, Ge.placeholder, u, gt, nr, Z, Q, we - ht)
                                    }
                                    var Gn = Se ? u : this,
                                        Pi = Ce ? Gn[n] : n;
                                    return ht = gt.length, Z ? gt = function IN(n, s) {
                                        for (var u = n.length, d = jr(s.length, u), I = Xr(n); d--;) {
                                            var R = s[d];
                                            n[d] = xi(R, u) ? I[R] : t
                                        }
                                        return n
                                    }(gt, Z) : Ve && ht > 1 && gt.reverse(), Ie && Q < ht && (gt.length = Q), this && this !== Rr && this instanceof Ge && (Pi = ut || Vo(Pi)), Pi.apply(Gn, gt)
                                }
                            }

                            function Rg(n, s) {
                                return function(u, d) {
                                    return function TP(n, s, u, d) {
                                        return ii(n, function(I, R, K) {
                                            s(d, u(I), R, K)
                                        }), d
                                    }(u, n, s(d), {})
                                }
                            }

                            function gc(n, s) {
                                return function(u, d) {
                                    var I;
                                    if (u === t && d === t) return s;
                                    if (u !== t && (I = u), d !== t) {
                                        if (I === t) return d;
                                        "string" == typeof u || "string" == typeof d ? (u = hn(u), d = hn(d)) : (u = pg(u), d = pg(d)), I = n(u, d)
                                    }
                                    return I
                                }
                            }

                            function pf(n) {
                                return Ii(function(s) {
                                    return s = zt(s, dn(Be())), lt(function(u) {
                                        var d = this;
                                        return n(s, function(I) {
                                            return fn(I, d, u)
                                        })
                                    })
                                })
                            }

                            function yc(n, s) {
                                var u = (s = s === t ? " " : hn(s)).length;
                                if (u < 2) return u ? af(s, n) : s;
                                var d = af(s, nc(n / Ks(s)));
                                return ks(s) ? Hi(Hn(d), 0, n).join("") : d.slice(0, n)
                            }

                            function Ag(n) {
                                return function(s, u, d) {
                                    return d && "number" != typeof d && Mr(s, u, d) && (u = d = t), s = Si(s), u === t ? (u = s, s = 0) : u = Si(u),
                                        function zP(n, s, u, d) {
                                            for (var I = -1, R = vr(nc((s - n) / (u || 1)), 0), K = te(R); R--;) K[d ? R : ++I] = n, n += u;
                                            return K
                                        }(s, u, d = d === t ? s < u ? 1 : -1 : Si(d), n)
                                }
                            }

                            function mc(n) {
                                return function(s, u) {
                                    return "string" == typeof s && "string" == typeof u || (s = Dn(s), u = Dn(u)), n(s, u)
                                }
                            }

                            function Tg(n, s, u, d, I, R, K, Z, Q, we) {
                                var Ie = 8 & s;
                                s |= Ie ? 32 : 64, 4 & (s &= ~(Ie ? 64 : 32)) || (s &= -4);
                                var ut = [n, s, I, Ie ? R : t, Ie ? K : t, Ie ? t : R, Ie ? t : K, Z, Q, we],
                                    Ge = u.apply(t, ut);
                                return Ef(n) && zg(Ge, ut), Ge.placeholder = d, Zg(Ge, n, s)
                            }

                            function _f(n) {
                                var s = mr[n];
                                return function(u, d) {
                                    if (u = Dn(u), (d = null == d ? 0 : jr(ct(d), 292)) && Z_(u)) {
                                        var I = (It(u) + "e").split("e");
                                        return +((I = (It(s(I[0] + "e" + (+I[1] + d))) + "e").split("e"))[0] + "e" + (+I[1] - d))
                                    }
                                    return s(u)
                                }
                            }
                            var sN = Zs && 1 / Va(new Zs([, -0]))[1] == ss ? function(n) {
                                return new Zs(n)
                            } : Lf;

                            function Cg(n) {
                                return function(s) {
                                    var u = Dr(s);
                                    return u == zn ? Zl(s) : u == Zn ? function ES(J) {
                                        var ae = -1,
                                            te = Array(J.size);
                                        return J.forEach(function(Fe) {
                                            te[++ae] = [Fe, Fe]
                                        }), te
                                    }(s) : function pS(J, ae) {
                                        return zt(ae, function(te) {
                                            return [te, J[te]]
                                        })
                                    }(s, n(s))
                                }
                            }

                            function Ei(n, s, u, d, I, R, K, Z) {
                                var Q = 2 & s;
                                if (!Q && "function" != typeof n) throw new xn(f);
                                var we = d ? d.length : 0;
                                if (we || (s &= -97, d = I = t), K = K === t ? K : vr(ct(K), 0), Z = Z === t ? Z : ct(Z), we -= I ? I.length : 0, 64 & s) {
                                    var Ie = d,
                                        Se = I;
                                    d = I = t
                                }
                                var Ce = Q ? t : mf(n),
                                    Ke = [n, s, u, d, I, Ie, Se, R, K, Z];
                                if (Ce && function bN(n, s) {
                                        var u = n[1],
                                            d = s[1],
                                            I = u | d;
                                        if (!(I < 131) && !(128 == d && 8 == u || 128 == d && 256 == u && n[7].length <= s[8] || 384 == d && s[7].length <= s[8] && 8 == u)) return n;
                                        1 & d && (n[2] = s[2], I |= 1 & u ? 0 : 4);
                                        var Z = s[3];
                                        if (Z) {
                                            var Q = n[3];
                                            n[3] = Q ? Eg(Q, Z, s[4]) : Z, n[4] = Q ? ki(n[3], A) : s[4]
                                        }(Z = s[5]) && (n[5] = (Q = n[5]) ? Ig(Q, Z, s[6]) : Z, n[6] = Q ? ki(n[5], A) : s[6]), (Z = s[7]) && (n[7] = Z), 128 & d && (n[8] = null == n[8] ? s[8] : jr(n[8], s[8])), null == n[9] && (n[9] = s[9]), n[0] = s[0], n[1] = I
                                    }(Ke, Ce), n = Ke[0], s = Ke[1], u = Ke[2], d = Ke[3], I = Ke[4], !(Z = Ke[9] = Ke[9] === t ? Q ? 0 : n.length : vr(Ke[9] - we, 0)) && 24 & s && (s &= -25), s && 1 != s) Ve = 8 == s || 16 == s ? function nN(n, s, u) {
                                    var d = Vo(n);
                                    return function I() {
                                        for (var R = arguments.length, K = te(R), Z = R, Q = Ws(I); Z--;) K[Z] = arguments[Z];
                                        var we = R < 3 && K[0] !== Q && K[R - 1] !== Q ? [] : ki(K, Q);
                                        return (R -= we.length) < u ? Tg(n, s, _c, I.placeholder, t, K, we, t, t, u - R) : fn(this && this !== Rr && this instanceof I ? d : n, this, K)
                                    }
                                }(n, s, Z) : 32 != s && 33 != s || I.length ? _c.apply(t, Ke) : function iN(n, s, u, d) {
                                    var I = 1 & s,
                                        R = Vo(n);
                                    return function K() {
                                        for (var Z = -1, Q = arguments.length, we = -1, Ie = d.length, Se = te(Ie + Q), Ce = this && this !== Rr && this instanceof K ? R : n; ++we < Ie;) Se[we] = d[we];
                                        for (; Q--;) Se[we++] = arguments[++Z];
                                        return fn(Ce, I ? u : this, Se)
                                    }
                                }(n, s, u, d);
                                else var Ve = function rN(n, s, u) {
                                    var d = 1 & s,
                                        I = Vo(n);
                                    return function R() {
                                        return (this && this !== Rr && this instanceof R ? I : n).apply(d ? u : this, arguments)
                                    }
                                }(n, s, u);
                                return Zg((Ce ? dg : zg)(Ve, Ke), n, s)
                            }

                            function jg(n, s, u, d) {
                                return n === t || Vn(n, zs[u]) && !St.call(d, u) ? s : n
                            }

                            function Dg(n, s, u, d, I, R) {
                                return Bt(n) && Bt(s) && (R.set(s, n), fc(n, s, t, Dg, R), R.delete(s)), n
                            }

                            function oN(n) {
                                return Jo(n) ? t : n
                            }

                            function $g(n, s, u, d, I, R) {
                                var K = 1 & u,
                                    Z = n.length,
                                    Q = s.length;
                                if (Z != Q && !(K && Q > Z)) return !1;
                                var we = R.get(n),
                                    Ie = R.get(s);
                                if (we && Ie) return we == s && Ie == n;
                                var Se = -1,
                                    Ce = !0,
                                    Ke = 2 & u ? new us : t;
                                for (R.set(n, s), R.set(s, n); ++Se < Z;) {
                                    var Ve = n[Se],
                                        ut = s[Se];
                                    if (d) var Ge = K ? d(ut, Ve, Se, s, n, R) : d(Ve, ut, Se, n, s, R);
                                    if (Ge !== t) {
                                        if (Ge) continue;
                                        Ce = !1;
                                        break
                                    }
                                    if (Ke) {
                                        if (!Fl(s, function(ht, gt) {
                                                if (!Uo(Ke, gt) && (Ve === ht || I(Ve, ht, u, d, R))) return Ke.push(gt)
                                            })) {
                                            Ce = !1;
                                            break
                                        }
                                    } else if (Ve !== ut && !I(Ve, ut, u, d, R)) {
                                        Ce = !1;
                                        break
                                    }
                                }
                                return R.delete(n), R.delete(s), Ce
                            }

                            function Ii(n) {
                                return xf(Kg(n, t, Jg), n + "")
                            }

                            function gf(n) {
                                return tg(n, Er, bf)
                            }

                            function yf(n) {
                                return tg(n, tn, Ug)
                            }
                            var mf = sc ? function(n) {
                                return sc.get(n)
                            } : Lf;

                            function vc(n) {
                                for (var s = n.name + "", u = Hs[s], d = St.call(Hs, s) ? u.length : 0; d--;) {
                                    var I = u[d],
                                        R = I.func;
                                    if (null == R || R == n) return I.name
                                }
                                return s
                            }

                            function Ws(n) {
                                return (St.call(P, "placeholder") ? P : n).placeholder
                            }

                            function Be() {
                                var n = P.iteratee || $f;
                                return n = n === $f ? ig : n, arguments.length ? n(arguments[0], arguments[1]) : n
                            }

                            function bc(n, s) {
                                var u = n.__data__;
                                return function gN(n) {
                                    var s = typeof n;
                                    return "string" == s || "number" == s || "symbol" == s || "boolean" == s ? "__proto__" !== n : null === n
                                }(s) ? u["string" == typeof s ? "string" : "hash"] : u.map
                            }

                            function vf(n) {
                                for (var s = Er(n), u = s.length; u--;) {
                                    var d = s[u],
                                        I = n[d];
                                    s[u] = [d, I, Mg(I)]
                                }
                                return s
                            }

                            function ds(n, s) {
                                var u = function vS(J, ae) {
                                    return null == J ? t : J[ae]
                                }(n, s);
                                return ng(u) ? u : t
                            }
                            var bf = Bl ? function(n) {
                                    return null == n ? [] : (n = Dt(n), Fi(Bl(n), function(s) {
                                        return q_.call(n, s)
                                    }))
                                } : Ff,
                                Ug = Bl ? function(n) {
                                    for (var s = []; n;) Mi(s, bf(n)), n = ec(n);
                                    return s
                                } : Ff,
                                Dr = Fr;

                            function Lg(n, s, u) {
                                for (var d = -1, I = (s = Zi(s, n)).length, R = !1; ++d < I;) {
                                    var K = oi(s[d]);
                                    if (!(R = null != n && u(n, K))) break;
                                    n = n[K]
                                }
                                return R || ++d != I ? R : !!(I = null == n ? 0 : n.length) && Pc(I) && xi(K, I) && (st(n) || ps(n))
                            }

                            function Fg(n) {
                                return "function" != typeof n.constructor || Go(n) ? {} : Bs(ec(n))
                            }

                            function _N(n) {
                                return st(n) || ps(n) || !!(z_ && n && n[z_])
                            }

                            function xi(n, s) {
                                var u = typeof n;
                                return !!(s = s ? ? Li) && ("number" == u || "symbol" != u && PO.test(n)) && n > -1 && n % 1 == 0 && n < s
                            }

                            function Mr(n, s, u) {
                                if (!Bt(u)) return !1;
                                var d = typeof s;
                                return !!("number" == d ? en(u) && xi(s, u.length) : "string" == d && s in u) && Vn(u[s], n)
                            }

                            function wf(n, s) {
                                if (st(n)) return !1;
                                var u = typeof n;
                                return !("number" != u && "symbol" != u && "boolean" != u && null != n && !pn(n)) || dO.test(n) || !fO.test(n) || null != s && n in Dt(s)
                            }

                            function Ef(n) {
                                var s = vc(n),
                                    u = P[s];
                                if ("function" != typeof u || !(s in _t.prototype)) return !1;
                                if (n === u) return !0;
                                var d = mf(u);
                                return !!d && n === d[0]
                            }(Vl && Dr(new Vl(new ArrayBuffer(1))) != Ls || Fo && Dr(new Fo) != zn || Gl && Dr(Gl.resolve()) != Yp || Zs && Dr(new Zs) != Zn || Mo && Dr(new Mo) != Do) && (Dr = function(n) {
                                var s = Fr(n),
                                    u = s == mi ? n.constructor : t,
                                    d = u ? hs(u) : "";
                                if (d) switch (d) {
                                    case HS:
                                        return Ls;
                                    case BS:
                                        return zn;
                                    case VS:
                                        return Yp;
                                    case GS:
                                        return Zn;
                                    case WS:
                                        return Do
                                }
                                return s
                            });
                            var mN = Wa ? Oi : Mf;

                            function Go(n) {
                                var s = n && n.constructor;
                                return n === ("function" == typeof s && s.prototype || zs)
                            }

                            function Mg(n) {
                                return n == n && !Bt(n)
                            }

                            function kg(n, s) {
                                return function(u) {
                                    return null != u && u[n] === s && (s !== t || n in Dt(u))
                                }
                            }

                            function Kg(n, s, u) {
                                return s = vr(s === t ? n.length - 1 : s, 0),
                                    function() {
                                        for (var d = arguments, I = -1, R = vr(d.length - s, 0), K = te(R); ++I < R;) K[I] = d[s + I];
                                        I = -1;
                                        for (var Z = te(s + 1); ++I < s;) Z[I] = d[I];
                                        return Z[s] = u(K), fn(n, this, Z)
                                    }
                            }

                            function qg(n, s) {
                                return s.length < 2 ? n : fs(n, Cn(s, 0, -1))
                            }

                            function If(n, s) {
                                if (("constructor" !== s || "function" != typeof n[s]) && "__proto__" != s) return n[s]
                            }
                            var zg = Hg(dg),
                                Wo = FS || function(n, s) {
                                    return Rr.setTimeout(n, s)
                                },
                                xf = Hg(BP);

                            function Zg(n, s, u) {
                                var d = s + "";
                                return xf(n, function pN(n, s) {
                                    var u = s.length;
                                    if (!u) return n;
                                    var d = u - 1;
                                    return s[d] = (u > 1 ? "& " : "") + s[d], s = s.join(u > 2 ? ", " : " "), n.replace(gO, "{\n/* [wrapped with " + s + "] */\n")
                                }(d, function xN(n, s) {
                                    return En(Qx, function(u) {
                                        var d = "_." + u[0];
                                        s & u[1] && !Ha(n, d) && n.push(d)
                                    }), n.sort()
                                }(function fN(n) {
                                    var s = n.match(yO);
                                    return s ? s[1].split(mO) : []
                                }(d), u)))
                            }

                            function Hg(n) {
                                var s = 0,
                                    u = 0;
                                return function() {
                                    var d = qS(),
                                        I = 16 - (d - u);
                                    if (u = d, I > 0) {
                                        if (++s >= 800) return arguments[0]
                                    } else s = 0;
                                    return n.apply(t, arguments)
                                }
                            }

                            function wc(n, s) {
                                var u = -1,
                                    d = n.length,
                                    I = d - 1;
                                for (s = s === t ? d : s; ++u < s;) {
                                    var R = of (u, I),
                                        K = n[R];
                                    n[R] = n[u], n[u] = K
                                }
                                return n.length = s, n
                            }
                            var Bg = function vN(n) {
                                var s = Oc(n, function(d) {
                                        return 500 === u.size && u.clear(), d
                                    }),
                                    u = s.cache;
                                return s
                            }(function(n) {
                                var s = [];
                                return 46 === n.charCodeAt(0) && s.push(""), n.replace(hO, function(u, d, I, R) {
                                    s.push(I ? R.replace(wO, "$1") : d || u)
                                }), s
                            });

                            function oi(n) {
                                if ("string" == typeof n || pn(n)) return n;
                                var s = n + "";
                                return "0" == s && 1 / n == -ss ? "-0" : s
                            }

                            function hs(n) {
                                if (null != n) {
                                    try {
                                        return Ja.call(n)
                                    } catch {}
                                    try {
                                        return n + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function Vg(n) {
                                if (n instanceof _t) return n.clone();
                                var s = new An(n.__wrapped__, n.__chain__);
                                return s.__actions__ = Xr(n.__actions__), s.__index__ = n.__index__, s.__values__ = n.__values__, s
                            }
                            var NN = lt(function(n, s) {
                                    return rr(n) ? zo(n, Ar(s, 1, rr, !0)) : []
                                }),
                                RN = lt(function(n, s) {
                                    var u = jn(s);
                                    return rr(u) && (u = t), rr(n) ? zo(n, Ar(s, 1, rr, !0), Be(u, 2)) : []
                                }),
                                AN = lt(function(n, s) {
                                    var u = jn(s);
                                    return rr(u) && (u = t), rr(n) ? zo(n, Ar(s, 1, rr, !0), t, u) : []
                                });

                            function Gg(n, s, u) {
                                var d = null == n ? 0 : n.length;
                                if (!d) return -1;
                                var I = null == u ? 0 : ct(u);
                                return I < 0 && (I = vr(d + I, 0)), Ba(n, Be(s, 3), I)
                            }

                            function Wg(n, s, u) {
                                var d = null == n ? 0 : n.length;
                                if (!d) return -1;
                                var I = d - 1;
                                return u !== t && (I = ct(u), I = u < 0 ? vr(d + I, 0) : jr(I, d - 1)), Ba(n, Be(s, 3), I, !0)
                            }

                            function Jg(n) {
                                return null != n && n.length ? Ar(n, 1) : []
                            }

                            function Qg(n) {
                                return n && n.length ? n[0] : t
                            }
                            var KN = lt(function(n) {
                                    var s = zt(n, ff);
                                    return s.length && s[0] === n[0] ? ef(s) : []
                                }),
                                qN = lt(function(n) {
                                    var s = jn(n),
                                        u = zt(n, ff);
                                    return s === jn(u) ? s = t : u.pop(), u.length && u[0] === n[0] ? ef(u, Be(s, 2)) : []
                                }),
                                zN = lt(function(n) {
                                    var s = jn(n),
                                        u = zt(n, ff);
                                    return (s = "function" == typeof s ? s : t) && u.pop(), u.length && u[0] === n[0] ? ef(u, t, s) : []
                                });

                            function jn(n) {
                                var s = null == n ? 0 : n.length;
                                return s ? n[s - 1] : t
                            }
                            var VN = lt(Yg);

                            function Yg(n, s) {
                                return n && n.length && s && s.length ? sf(n, s) : n
                            }
                            var JN = Ii(function(n, s) {
                                var u = null == n ? 0 : n.length,
                                    d = Jl(n, s);
                                return fg(n, zt(s, function(I) {
                                    return xi(I, u) ? +I : I
                                }).sort(wg)), d
                            });

                            function Of(n) {
                                return null == n ? n : ZS.call(n)
                            }
                            var dR = lt(function(n) {
                                    return zi(Ar(n, 1, rr, !0))
                                }),
                                hR = lt(function(n) {
                                    var s = jn(n);
                                    return rr(s) && (s = t), zi(Ar(n, 1, rr, !0), Be(s, 2))
                                }),
                                pR = lt(function(n) {
                                    var s = jn(n);
                                    return s = "function" == typeof s ? s : t, zi(Ar(n, 1, rr, !0), t, s)
                                });

                            function Sf(n) {
                                if (!n || !n.length) return [];
                                var s = 0;
                                return n = Fi(n, function(u) {
                                    if (rr(u)) return s = vr(u.length, s), !0
                                }), ql(s, function(u) {
                                    return zt(n, Ml(u))
                                })
                            }

                            function Xg(n, s) {
                                if (!n || !n.length) return [];
                                var u = Sf(n);
                                return null == s ? u : zt(u, function(d) {
                                    return fn(s, t, d)
                                })
                            }
                            var mR = lt(function(n, s) {
                                    return rr(n) ? zo(n, s) : []
                                }),
                                vR = lt(function(n) {
                                    return lf(Fi(n, rr))
                                }),
                                bR = lt(function(n) {
                                    var s = jn(n);
                                    return rr(s) && (s = t), lf(Fi(n, rr), Be(s, 2))
                                }),
                                wR = lt(function(n) {
                                    var s = jn(n);
                                    return s = "function" == typeof s ? s : t, lf(Fi(n, rr), t, s)
                                }),
                                ER = lt(Sf),
                                OR = lt(function(n) {
                                    var s = n.length,
                                        u = s > 1 ? n[s - 1] : t;
                                    return u = "function" == typeof u ? (n.pop(), u) : t, Xg(n, u)
                                });

                            function ey(n) {
                                var s = P(n);
                                return s.__chain__ = !0, s
                            }

                            function Ec(n, s) {
                                return s(n)
                            }
                            var PR = Ii(function(n) {
                                    var s = n.length,
                                        u = s ? n[0] : 0,
                                        d = this.__wrapped__,
                                        I = function(R) {
                                            return Jl(R, n)
                                        };
                                    return !(s > 1 || this.__actions__.length) && d instanceof _t && xi(u) ? ((d = d.slice(u, +u + (s ? 1 : 0))).__actions__.push({
                                        func: Ec,
                                        args: [I],
                                        thisArg: t
                                    }), new An(d, this.__chain__).thru(function(R) {
                                        return s && !R.length && R.push(t), R
                                    })) : this.thru(I)
                                }),
                                $R = pc(function(n, s, u) {
                                    St.call(n, u) ? ++n[u] : wi(n, u, 1)
                                }),
                                FR = Pg(Gg),
                                MR = Pg(Wg);

                            function ty(n, s) {
                                return (st(n) ? En : qi)(n, Be(s, 3))
                            }

                            function ry(n, s) {
                                return (st(n) ? aS : Y_)(n, Be(s, 3))
                            }
                            var zR = pc(function(n, s, u) {
                                    St.call(n, u) ? n[u].push(s) : wi(n, u, [s])
                                }),
                                HR = lt(function(n, s, u) {
                                    var d = -1,
                                        I = "function" == typeof s,
                                        R = en(n) ? te(n.length) : [];
                                    return qi(n, function(K) {
                                        R[++d] = I ? fn(s, K, u) : Zo(K, s, u)
                                    }), R
                                }),
                                BR = pc(function(n, s, u) {
                                    wi(n, u, s)
                                });

                            function Ic(n, s) {
                                return (st(n) ? zt : sg)(n, Be(s, 3))
                            }
                            var GR = pc(function(n, s, u) {
                                    n[u ? 0 : 1].push(s)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                nA = lt(function(n, s) {
                                    if (null == n) return [];
                                    var u = s.length;
                                    return u > 1 && Mr(n, s[0], s[1]) ? s = [] : u > 2 && Mr(s[0], s[1], s[2]) && (s = [s[0]]), ug(n, Ar(s, 1), [])
                                }),
                                xc = LS || function() {
                                    return Rr.Date.now()
                                };

                            function ny(n, s, u) {
                                return s = u ? t : s, Ei(n, 128, t, t, t, t, s = n && null == s ? n.length : s)
                            }

                            function iy(n, s) {
                                var u;
                                if ("function" != typeof s) throw new xn(f);
                                return n = ct(n),
                                    function() {
                                        return --n > 0 && (u = s.apply(this, arguments)), n <= 1 && (s = t), u
                                    }
                            }
                            var Pf = lt(function(n, s, u) {
                                    var d = 1;
                                    if (u.length) {
                                        var I = ki(u, Ws(Pf));
                                        d |= 32
                                    }
                                    return Ei(n, d, s, u, I)
                                }),
                                sy = lt(function(n, s, u) {
                                    var d = 3;
                                    if (u.length) {
                                        var I = ki(u, Ws(sy));
                                        d |= 32
                                    }
                                    return Ei(s, d, n, u, I)
                                });

                            function cy(n, s, u) {
                                var d, I, R, K, Z, Q, we = 0,
                                    Ie = !1,
                                    Se = !1,
                                    Ce = !0;
                                if ("function" != typeof n) throw new xn(f);

                                function Ke(nr) {
                                    var Gn = d,
                                        Pi = I;
                                    return d = I = t, we = nr, K = n.apply(Pi, Gn)
                                }

                                function Ge(nr) {
                                    var Gn = nr - Q;
                                    return Q === t || Gn >= s || Gn < 0 || Se && nr - we >= R
                                }

                                function ht() {
                                    var nr = xc();
                                    if (Ge(nr)) return gt(nr);
                                    Z = Wo(ht, function ut(nr) {
                                        var Py = s - (nr - Q);
                                        return Se ? jr(Py, R - (nr - we)) : Py
                                    }(nr))
                                }

                                function gt(nr) {
                                    return Z = t, Ce && d ? Ke(nr) : (d = I = t, K)
                                }

                                function gn() {
                                    var nr = xc(),
                                        Gn = Ge(nr);
                                    if (d = arguments, I = this, Q = nr, Gn) {
                                        if (Z === t) return function Ve(nr) {
                                            return we = nr, Z = Wo(ht, s), Ie ? Ke(nr) : K
                                        }(Q);
                                        if (Se) return mg(Z), Z = Wo(ht, s), Ke(Q)
                                    }
                                    return Z === t && (Z = Wo(ht, s)), K
                                }
                                return s = Dn(s) || 0, Bt(u) && (Ie = !!u.leading, R = (Se = "maxWait" in u) ? vr(Dn(u.maxWait) || 0, s) : R, Ce = "trailing" in u ? !!u.trailing : Ce), gn.cancel = function _n() {
                                    Z !== t && mg(Z), we = 0, d = Q = I = Z = t
                                }, gn.flush = function kr() {
                                    return Z === t ? K : gt(xc())
                                }, gn
                            }
                            var sA = lt(function(n, s) {
                                    return Q_(n, 1, s)
                                }),
                                oA = lt(function(n, s, u) {
                                    return Q_(n, Dn(s) || 0, u)
                                });

                            function Oc(n, s) {
                                if ("function" != typeof n || null != s && "function" != typeof s) throw new xn(f);
                                var u = function() {
                                    var d = arguments,
                                        I = s ? s.apply(this, d) : d[0],
                                        R = u.cache;
                                    if (R.has(I)) return R.get(I);
                                    var K = n.apply(this, d);
                                    return u.cache = R.set(I, K) || R, K
                                };
                                return u.cache = new(Oc.Cache || bi), u
                            }

                            function Sc(n) {
                                if ("function" != typeof n) throw new xn(f);
                                return function() {
                                    var s = arguments;
                                    switch (s.length) {
                                        case 0:
                                            return !n.call(this);
                                        case 1:
                                            return !n.call(this, s[0]);
                                        case 2:
                                            return !n.call(this, s[0], s[1]);
                                        case 3:
                                            return !n.call(this, s[0], s[1], s[2])
                                    }
                                    return !n.apply(this, s)
                                }
                            }
                            Oc.Cache = bi;
                            var uA = WP(function(n, s) {
                                    var u = (s = 1 == s.length && st(s[0]) ? zt(s[0], dn(Be())) : zt(Ar(s, 1), dn(Be()))).length;
                                    return lt(function(d) {
                                        for (var I = -1, R = jr(d.length, u); ++I < R;) d[I] = s[I].call(this, d[I]);
                                        return fn(n, this, d)
                                    })
                                }),
                                Nf = lt(function(n, s) {
                                    var u = ki(s, Ws(Nf));
                                    return Ei(n, 32, t, s, u)
                                }),
                                uy = lt(function(n, s) {
                                    var u = ki(s, Ws(uy));
                                    return Ei(n, 64, t, s, u)
                                }),
                                lA = Ii(function(n, s) {
                                    return Ei(n, 256, t, t, t, s)
                                });

                            function Vn(n, s) {
                                return n === s || n != n && s != s
                            }
                            var EA = mc(Xl),
                                IA = mc(function(n, s) {
                                    return n >= s
                                }),
                                ps = rg(function() {
                                    return arguments
                                }()) ? rg : function(n) {
                                    return Jt(n) && St.call(n, "callee") && !q_.call(n, "callee")
                                },
                                st = te.isArray,
                                xA = I_ ? dn(I_) : function CP(n) {
                                    return Jt(n) && Fr(n) == $o
                                };

                            function en(n) {
                                return null != n && Pc(n.length) && !Oi(n)
                            }

                            function rr(n) {
                                return Jt(n) && en(n)
                            }
                            var Bi = MS || Mf,
                                SA = x_ ? dn(x_) : function jP(n) {
                                    return Jt(n) && Fr(n) == Ao
                                };

                            function Rf(n) {
                                if (!Jt(n)) return !1;
                                var s = Fr(n);
                                return s == Ma || "[object DOMException]" == s || "string" == typeof n.message && "string" == typeof n.name && !Jo(n)
                            }

                            function Oi(n) {
                                if (!Bt(n)) return !1;
                                var s = Fr(n);
                                return s == ka || s == Qp || "[object AsyncFunction]" == s || "[object Proxy]" == s
                            }

                            function ly(n) {
                                return "number" == typeof n && n == ct(n)
                            }

                            function Pc(n) {
                                return "number" == typeof n && n > -1 && n % 1 == 0 && n <= Li
                            }

                            function Bt(n) {
                                var s = typeof n;
                                return null != n && ("object" == s || "function" == s)
                            }

                            function Jt(n) {
                                return null != n && "object" == typeof n
                            }
                            var fy = O_ ? dn(O_) : function $P(n) {
                                return Jt(n) && Dr(n) == zn
                            };

                            function dy(n) {
                                return "number" == typeof n || Jt(n) && Fr(n) == To
                            }

                            function Jo(n) {
                                if (!Jt(n) || Fr(n) != mi) return !1;
                                var s = ec(n);
                                if (null === s) return !0;
                                var u = St.call(s, "constructor") && s.constructor;
                                return "function" == typeof u && u instanceof u && Ja.call(u) == jS
                            }
                            var Af = S_ ? dn(S_) : function UP(n) {
                                    return Jt(n) && Fr(n) == Co
                                },
                                hy = P_ ? dn(P_) : function LP(n) {
                                    return Jt(n) && Dr(n) == Zn
                                };

                            function Nc(n) {
                                return "string" == typeof n || !st(n) && Jt(n) && Fr(n) == jo
                            }

                            function pn(n) {
                                return "symbol" == typeof n || Jt(n) && Fr(n) == Ka
                            }
                            var Js = N_ ? dn(N_) : function FP(n) {
                                    return Jt(n) && Pc(n.length) && !!Ft[Fr(n)]
                                },
                                qA = mc(nf),
                                zA = mc(function(n, s) {
                                    return n <= s
                                });

                            function py(n) {
                                if (!n) return [];
                                if (en(n)) return Nc(n) ? Hn(n) : Xr(n);
                                if (Lo && n[Lo]) return function wS(J) {
                                    for (var ae, te = []; !(ae = J.next()).done;) te.push(ae.value);
                                    return te
                                }(n[Lo]());
                                var s = Dr(n);
                                return (s == zn ? Zl : s == Zn ? Va : Qs)(n)
                            }

                            function Si(n) {
                                return n ? (n = Dn(n)) === ss || n === -ss ? 17976931348623157e292 * (n < 0 ? -1 : 1) : n == n ? n : 0 : 0 === n ? n : 0
                            }

                            function ct(n) {
                                var s = Si(n),
                                    u = s % 1;
                                return s == s ? u ? s - u : s : 0
                            }

                            function _y(n) {
                                return n ? ls(ct(n), 0, ni) : 0
                            }

                            function Dn(n) {
                                if ("number" == typeof n) return n;
                                if (pn(n)) return NaN;
                                if (Bt(n)) {
                                    var s = "function" == typeof n.valueOf ? n.valueOf() : n;
                                    n = Bt(s) ? s + "" : s
                                }
                                if ("string" != typeof n) return 0 === n ? n : +n;
                                n = D_(n);
                                var u = xO.test(n);
                                return u || SO.test(n) ? iS(n.slice(2), u ? 2 : 8) : IO.test(n) ? NaN : +n
                            }

                            function gy(n) {
                                return si(n, tn(n))
                            }

                            function It(n) {
                                return null == n ? "" : hn(n)
                            }
                            var HA = Vs(function(n, s) {
                                    if (Go(s) || en(s)) si(s, Er(s), n);
                                    else
                                        for (var u in s) St.call(s, u) && qo(n, u, s[u])
                                }),
                                yy = Vs(function(n, s) {
                                    si(s, tn(s), n)
                                }),
                                Rc = Vs(function(n, s, u, d) {
                                    si(s, tn(s), n, d)
                                }),
                                BA = Vs(function(n, s, u, d) {
                                    si(s, Er(s), n, d)
                                }),
                                VA = Ii(Jl),
                                WA = lt(function(n, s) {
                                    n = Dt(n);
                                    var u = -1,
                                        d = s.length,
                                        I = d > 2 ? s[2] : t;
                                    for (I && Mr(s[0], s[1], I) && (d = 1); ++u < d;)
                                        for (var R = s[u], K = tn(R), Z = -1, Q = K.length; ++Z < Q;) {
                                            var we = K[Z],
                                                Ie = n[we];
                                            (Ie === t || Vn(Ie, zs[we]) && !St.call(n, we)) && (n[we] = R[we])
                                        }
                                    return n
                                }),
                                JA = lt(function(n) {
                                    return n.push(t, Dg), fn(my, t, n)
                                });

                            function Tf(n, s, u) {
                                var d = null == n ? t : fs(n, s);
                                return d === t ? u : d
                            }

                            function Cf(n, s) {
                                return null != n && Lg(n, s, RP)
                            }
                            var o2 = Rg(function(n, s, u) {
                                    null != s && "function" != typeof s.toString && (s = Qa.call(s)), n[s] = u
                                }, Df(rn)),
                                a2 = Rg(function(n, s, u) {
                                    null != s && "function" != typeof s.toString && (s = Qa.call(s)), St.call(n, s) ? n[s].push(u) : n[s] = [u]
                                }, Be),
                                c2 = lt(Zo);

                            function Er(n) {
                                return en(n) ? V_(n) : rf(n)
                            }

                            function tn(n) {
                                return en(n) ? V_(n, !0) : function MP(n) {
                                    if (!Bt(n)) return function wN(n) {
                                        var s = [];
                                        if (null != n)
                                            for (var u in Dt(n)) s.push(u);
                                        return s
                                    }(n);
                                    var s = Go(n),
                                        u = [];
                                    for (var d in n) "constructor" == d && (s || !St.call(n, d)) || u.push(d);
                                    return u
                                }(n)
                            }
                            var f2 = Vs(function(n, s, u) {
                                    fc(n, s, u)
                                }),
                                my = Vs(function(n, s, u, d) {
                                    fc(n, s, u, d)
                                }),
                                d2 = Ii(function(n, s) {
                                    var u = {};
                                    if (null == n) return u;
                                    var d = !1;
                                    s = zt(s, function(R) {
                                        return R = Zi(R, n), d || (d = R.length > 1), R
                                    }), si(n, yf(n), u), d && (u = Tn(u, 7, oN));
                                    for (var I = s.length; I--;) uf(u, s[I]);
                                    return u
                                }),
                                p2 = Ii(function(n, s) {
                                    return null == n ? {} : function KP(n, s) {
                                        return lg(n, s, function(u, d) {
                                            return Cf(n, d)
                                        })
                                    }(n, s)
                                });

                            function vy(n, s) {
                                if (null == n) return {};
                                var u = zt(yf(n), function(d) {
                                    return [d]
                                });
                                return s = Be(s), lg(n, u, function(d, I) {
                                    return s(d, I[0])
                                })
                            }
                            var by = Cg(Er),
                                wy = Cg(tn);

                            function Qs(n) {
                                return null == n ? [] : zl(n, Er(n))
                            }
                            var S2 = Gs(function(n, s, u) {
                                return s = s.toLowerCase(), n + (u ? Ey(s) : s)
                            });

                            function Ey(n) {
                                return jf(It(n).toLowerCase())
                            }

                            function Iy(n) {
                                return (n = It(n)) && n.replace(NO, gS).replace(VO, "")
                            }
                            var A2 = Gs(function(n, s, u) {
                                    return n + (u ? "-" : "") + s.toLowerCase()
                                }),
                                T2 = Gs(function(n, s, u) {
                                    return n + (u ? " " : "") + s.toLowerCase()
                                }),
                                C2 = Sg("toLowerCase"),
                                M2 = Gs(function(n, s, u) {
                                    return n + (u ? "_" : "") + s.toLowerCase()
                                }),
                                K2 = Gs(function(n, s, u) {
                                    return n + (u ? " " : "") + jf(s)
                                }),
                                Q2 = Gs(function(n, s, u) {
                                    return n + (u ? " " : "") + s.toUpperCase()
                                }),
                                jf = Sg("toUpperCase");

                            function xy(n, s, u) {
                                return n = It(n), (s = u ? t : s) === t ? function bS(J) {
                                    return JO.test(J)
                                }(n) ? function NS(J) {
                                    return J.match(GO) || []
                                }(n) : function fS(J) {
                                    return J.match(vO) || []
                                }(n) : n.match(s) || []
                            }
                            var Oy = lt(function(n, s) {
                                    try {
                                        return fn(n, t, s)
                                    } catch (u) {
                                        return Rf(u) ? u : new nt(u)
                                    }
                                }),
                                Y2 = Ii(function(n, s) {
                                    return En(s, function(u) {
                                        u = oi(u), wi(n, u, Pf(n[u], n))
                                    }), n
                                });

                            function Df(n) {
                                return function() {
                                    return n
                                }
                            }
                            var r6 = Ng(),
                                n6 = Ng(!0);

                            function rn(n) {
                                return n
                            }

                            function $f(n) {
                                return ig("function" == typeof n ? n : Tn(n, 1))
                            }
                            var o6 = lt(function(n, s) {
                                    return function(u) {
                                        return Zo(u, n, s)
                                    }
                                }),
                                a6 = lt(function(n, s) {
                                    return function(u) {
                                        return Zo(n, u, s)
                                    }
                                });

                            function Uf(n, s, u) {
                                var d = Er(s),
                                    I = lc(s, d);
                                null == u && (!Bt(s) || !I.length && d.length) && (u = s, s = n, n = this, I = lc(s, Er(s)));
                                var R = !(Bt(u) && "chain" in u && !u.chain),
                                    K = Oi(n);
                                return En(I, function(Z) {
                                    var Q = s[Z];
                                    n[Z] = Q, K && (n.prototype[Z] = function() {
                                        var we = this.__chain__;
                                        if (R || we) {
                                            var Ie = n(this.__wrapped__);
                                            return (Ie.__actions__ = Xr(this.__actions__)).push({
                                                func: Q,
                                                args: arguments,
                                                thisArg: n
                                            }), Ie.__chain__ = we, Ie
                                        }
                                        return Q.apply(n, Mi([this.value()], arguments))
                                    })
                                }), n
                            }

                            function Lf() {}
                            var l6 = pf(zt),
                                f6 = pf(R_),
                                d6 = pf(Fl);

                            function Sy(n) {
                                return wf(n) ? Ml(oi(n)) : function qP(n) {
                                    return function(s) {
                                        return fs(s, n)
                                    }
                                }(n)
                            }
                            var p6 = Ag(),
                                _6 = Ag(!0);

                            function Ff() {
                                return []
                            }

                            function Mf() {
                                return !1
                            }
                            var E6 = gc(function(n, s) {
                                    return n + s
                                }, 0),
                                I6 = _f("ceil"),
                                x6 = gc(function(n, s) {
                                    return n / s
                                }, 1),
                                O6 = _f("floor"),
                                C6 = gc(function(n, s) {
                                    return n * s
                                }, 1),
                                j6 = _f("round"),
                                D6 = gc(function(n, s) {
                                    return n - s
                                }, 0);
                            return P.after = function iA(n, s) {
                                if ("function" != typeof s) throw new xn(f);
                                return n = ct(n),
                                    function() {
                                        if (--n < 1) return s.apply(this, arguments)
                                    }
                            }, P.ary = ny, P.assign = HA, P.assignIn = yy, P.assignInWith = Rc, P.assignWith = BA, P.at = VA, P.before = iy, P.bind = Pf, P.bindAll = Y2, P.bindKey = sy, P.castArray = function gA() {
                                if (!arguments.length) return [];
                                var n = arguments[0];
                                return st(n) ? n : [n]
                            }, P.chain = ey, P.chunk = function ON(n, s, u) {
                                s = (u ? Mr(n, s, u) : s === t) ? 1 : vr(ct(s), 0);
                                var d = null == n ? 0 : n.length;
                                if (!d || s < 1) return [];
                                for (var I = 0, R = 0, K = te(nc(d / s)); I < d;) K[R++] = Cn(n, I, I += s);
                                return K
                            }, P.compact = function SN(n) {
                                for (var s = -1, u = null == n ? 0 : n.length, d = 0, I = []; ++s < u;) {
                                    var R = n[s];
                                    R && (I[d++] = R)
                                }
                                return I
                            }, P.concat = function PN() {
                                var n = arguments.length;
                                if (!n) return [];
                                for (var s = te(n - 1), u = arguments[0], d = n; d--;) s[d - 1] = arguments[d];
                                return Mi(st(u) ? Xr(u) : [u], Ar(s, 1))
                            }, P.cond = function X2(n) {
                                var s = null == n ? 0 : n.length,
                                    u = Be();
                                return n = s ? zt(n, function(d) {
                                    if ("function" != typeof d[1]) throw new xn(f);
                                    return [u(d[0]), d[1]]
                                }) : [], lt(function(d) {
                                    for (var I = -1; ++I < s;) {
                                        var R = n[I];
                                        if (fn(R[0], this, d)) return fn(R[1], this, d)
                                    }
                                })
                            }, P.conforms = function e6(n) {
                                return function OP(n) {
                                    var s = Er(n);
                                    return function(u) {
                                        return J_(u, n, s)
                                    }
                                }(Tn(n, 1))
                            }, P.constant = Df, P.countBy = $R, P.create = function GA(n, s) {
                                var u = Bs(n);
                                return null == s ? u : W_(u, s)
                            }, P.curry = function oy(n, s, u) {
                                var d = Ei(n, 8, t, t, t, t, t, s = u ? t : s);
                                return d.placeholder = oy.placeholder, d
                            }, P.curryRight = function ay(n, s, u) {
                                var d = Ei(n, 16, t, t, t, t, t, s = u ? t : s);
                                return d.placeholder = ay.placeholder, d
                            }, P.debounce = cy, P.defaults = WA, P.defaultsDeep = JA, P.defer = sA, P.delay = oA, P.difference = NN, P.differenceBy = RN, P.differenceWith = AN, P.drop = function TN(n, s, u) {
                                var d = null == n ? 0 : n.length;
                                return d ? Cn(n, (s = u || s === t ? 1 : ct(s)) < 0 ? 0 : s, d) : []
                            }, P.dropRight = function CN(n, s, u) {
                                var d = null == n ? 0 : n.length;
                                return d ? Cn(n, 0, (s = d - (s = u || s === t ? 1 : ct(s))) < 0 ? 0 : s) : []
                            }, P.dropRightWhile = function jN(n, s) {
                                return n && n.length ? hc(n, Be(s, 3), !0, !0) : []
                            }, P.dropWhile = function DN(n, s) {
                                return n && n.length ? hc(n, Be(s, 3), !0) : []
                            }, P.fill = function $N(n, s, u, d) {
                                var I = null == n ? 0 : n.length;
                                return I ? (u && "number" != typeof u && Mr(n, s, u) && (u = 0, d = I), function PP(n, s, u, d) {
                                    var I = n.length;
                                    for ((u = ct(u)) < 0 && (u = -u > I ? 0 : I + u), (d = d === t || d > I ? I : ct(d)) < 0 && (d += I), d = u > d ? 0 : _y(d); u < d;) n[u++] = s;
                                    return n
                                }(n, s, u, d)) : []
                            }, P.filter = function LR(n, s) {
                                return (st(n) ? Fi : X_)(n, Be(s, 3))
                            }, P.flatMap = function kR(n, s) {
                                return Ar(Ic(n, s), 1)
                            }, P.flatMapDeep = function KR(n, s) {
                                return Ar(Ic(n, s), ss)
                            }, P.flatMapDepth = function qR(n, s, u) {
                                return u = u === t ? 1 : ct(u), Ar(Ic(n, s), u)
                            }, P.flatten = Jg, P.flattenDeep = function UN(n) {
                                return null != n && n.length ? Ar(n, ss) : []
                            }, P.flattenDepth = function LN(n, s) {
                                return null != n && n.length ? Ar(n, s = s === t ? 1 : ct(s)) : []
                            }, P.flip = function aA(n) {
                                return Ei(n, 512)
                            }, P.flow = r6, P.flowRight = n6, P.fromPairs = function FN(n) {
                                for (var s = -1, u = null == n ? 0 : n.length, d = {}; ++s < u;) {
                                    var I = n[s];
                                    d[I[0]] = I[1]
                                }
                                return d
                            }, P.functions = function n2(n) {
                                return null == n ? [] : lc(n, Er(n))
                            }, P.functionsIn = function i2(n) {
                                return null == n ? [] : lc(n, tn(n))
                            }, P.groupBy = zR, P.initial = function kN(n) {
                                return null != n && n.length ? Cn(n, 0, -1) : []
                            }, P.intersection = KN, P.intersectionBy = qN, P.intersectionWith = zN, P.invert = o2, P.invertBy = a2, P.invokeMap = HR, P.iteratee = $f, P.keyBy = BR, P.keys = Er, P.keysIn = tn, P.map = Ic, P.mapKeys = function u2(n, s) {
                                var u = {};
                                return s = Be(s, 3), ii(n, function(d, I, R) {
                                    wi(u, s(d, I, R), d)
                                }), u
                            }, P.mapValues = function l2(n, s) {
                                var u = {};
                                return s = Be(s, 3), ii(n, function(d, I, R) {
                                    wi(u, I, s(d, I, R))
                                }), u
                            }, P.matches = function i6(n) {
                                return og(Tn(n, 1))
                            }, P.matchesProperty = function s6(n, s) {
                                return ag(n, Tn(s, 1))
                            }, P.memoize = Oc, P.merge = f2, P.mergeWith = my, P.method = o6, P.methodOf = a6, P.mixin = Uf, P.negate = Sc, P.nthArg = function u6(n) {
                                return n = ct(n), lt(function(s) {
                                    return cg(s, n)
                                })
                            }, P.omit = d2, P.omitBy = function h2(n, s) {
                                return vy(n, Sc(Be(s)))
                            }, P.once = function cA(n) {
                                return iy(2, n)
                            }, P.orderBy = function VR(n, s, u, d) {
                                return null == n ? [] : (st(s) || (s = null == s ? [] : [s]), st(u = d ? t : u) || (u = null == u ? [] : [u]), ug(n, s, u))
                            }, P.over = l6, P.overArgs = uA, P.overEvery = f6, P.overSome = d6, P.partial = Nf, P.partialRight = uy, P.partition = GR, P.pick = p2, P.pickBy = vy, P.property = Sy, P.propertyOf = function h6(n) {
                                return function(s) {
                                    return null == n ? t : fs(n, s)
                                }
                            }, P.pull = VN, P.pullAll = Yg, P.pullAllBy = function GN(n, s, u) {
                                return n && n.length && s && s.length ? sf(n, s, Be(u, 2)) : n
                            }, P.pullAllWith = function WN(n, s, u) {
                                return n && n.length && s && s.length ? sf(n, s, t, u) : n
                            }, P.pullAt = JN, P.range = p6, P.rangeRight = _6, P.rearg = lA, P.reject = function QR(n, s) {
                                return (st(n) ? Fi : X_)(n, Sc(Be(s, 3)))
                            }, P.remove = function QN(n, s) {
                                var u = [];
                                if (!n || !n.length) return u;
                                var d = -1,
                                    I = [],
                                    R = n.length;
                                for (s = Be(s, 3); ++d < R;) {
                                    var K = n[d];
                                    s(K, d, n) && (u.push(K), I.push(d))
                                }
                                return fg(n, I), u
                            }, P.rest = function fA(n, s) {
                                if ("function" != typeof n) throw new xn(f);
                                return lt(n, s = s === t ? s : ct(s))
                            }, P.reverse = Of, P.sampleSize = function XR(n, s, u) {
                                return s = (u ? Mr(n, s, u) : s === t) ? 1 : ct(s), (st(n) ? wP : HP)(n, s)
                            }, P.set = function g2(n, s, u) {
                                return null == n ? n : Bo(n, s, u)
                            }, P.setWith = function y2(n, s, u, d) {
                                return d = "function" == typeof d ? d : t, null == n ? n : Bo(n, s, u, d)
                            }, P.shuffle = function eA(n) {
                                return (st(n) ? EP : VP)(n)
                            }, P.slice = function YN(n, s, u) {
                                var d = null == n ? 0 : n.length;
                                return d ? (u && "number" != typeof u && Mr(n, s, u) ? (s = 0, u = d) : (s = null == s ? 0 : ct(s), u = u === t ? d : ct(u)), Cn(n, s, u)) : []
                            }, P.sortBy = nA, P.sortedUniq = function sR(n) {
                                return n && n.length ? hg(n) : []
                            }, P.sortedUniqBy = function oR(n, s) {
                                return n && n.length ? hg(n, Be(s, 2)) : []
                            }, P.split = function k2(n, s, u) {
                                return u && "number" != typeof u && Mr(n, s, u) && (s = u = t), (u = u === t ? ni : u >>> 0) ? (n = It(n)) && ("string" == typeof s || null != s && !Af(s)) && !(s = hn(s)) && ks(n) ? Hi(Hn(n), 0, u) : n.split(s, u) : []
                            }, P.spread = function dA(n, s) {
                                if ("function" != typeof n) throw new xn(f);
                                return s = null == s ? 0 : vr(ct(s), 0), lt(function(u) {
                                    var d = u[s],
                                        I = Hi(u, 0, s);
                                    return d && Mi(I, d), fn(n, this, I)
                                })
                            }, P.tail = function aR(n) {
                                var s = null == n ? 0 : n.length;
                                return s ? Cn(n, 1, s) : []
                            }, P.take = function cR(n, s, u) {
                                return n && n.length ? Cn(n, 0, (s = u || s === t ? 1 : ct(s)) < 0 ? 0 : s) : []
                            }, P.takeRight = function uR(n, s, u) {
                                var d = null == n ? 0 : n.length;
                                return d ? Cn(n, (s = d - (s = u || s === t ? 1 : ct(s))) < 0 ? 0 : s, d) : []
                            }, P.takeRightWhile = function lR(n, s) {
                                return n && n.length ? hc(n, Be(s, 3), !1, !0) : []
                            }, P.takeWhile = function fR(n, s) {
                                return n && n.length ? hc(n, Be(s, 3)) : []
                            }, P.tap = function SR(n, s) {
                                return s(n), n
                            }, P.throttle = function hA(n, s, u) {
                                var d = !0,
                                    I = !0;
                                if ("function" != typeof n) throw new xn(f);
                                return Bt(u) && (d = "leading" in u ? !!u.leading : d, I = "trailing" in u ? !!u.trailing : I), cy(n, s, {
                                    leading: d,
                                    maxWait: s,
                                    trailing: I
                                })
                            }, P.thru = Ec, P.toArray = py, P.toPairs = by, P.toPairsIn = wy, P.toPath = function b6(n) {
                                return st(n) ? zt(n, oi) : pn(n) ? [n] : Xr(Bg(It(n)))
                            }, P.toPlainObject = gy, P.transform = function m2(n, s, u) {
                                var d = st(n),
                                    I = d || Bi(n) || Js(n);
                                if (s = Be(s, 4), null == u) {
                                    var R = n && n.constructor;
                                    u = I ? d ? new R : [] : Bt(n) && Oi(R) ? Bs(ec(n)) : {}
                                }
                                return (I ? En : ii)(n, function(K, Z, Q) {
                                    return s(u, K, Z, Q)
                                }), u
                            }, P.unary = function pA(n) {
                                return ny(n, 1)
                            }, P.union = dR, P.unionBy = hR, P.unionWith = pR, P.uniq = function _R(n) {
                                return n && n.length ? zi(n) : []
                            }, P.uniqBy = function gR(n, s) {
                                return n && n.length ? zi(n, Be(s, 2)) : []
                            }, P.uniqWith = function yR(n, s) {
                                return s = "function" == typeof s ? s : t, n && n.length ? zi(n, t, s) : []
                            }, P.unset = function v2(n, s) {
                                return null == n || uf(n, s)
                            }, P.unzip = Sf, P.unzipWith = Xg, P.update = function b2(n, s, u) {
                                return null == n ? n : _g(n, s, df(u))
                            }, P.updateWith = function w2(n, s, u, d) {
                                return d = "function" == typeof d ? d : t, null == n ? n : _g(n, s, df(u), d)
                            }, P.values = Qs, P.valuesIn = function E2(n) {
                                return null == n ? [] : zl(n, tn(n))
                            }, P.without = mR, P.words = xy, P.wrap = function _A(n, s) {
                                return Nf(df(s), n)
                            }, P.xor = vR, P.xorBy = bR, P.xorWith = wR, P.zip = ER, P.zipObject = function IR(n, s) {
                                return yg(n || [], s || [], qo)
                            }, P.zipObjectDeep = function xR(n, s) {
                                return yg(n || [], s || [], Bo)
                            }, P.zipWith = OR, P.entries = by, P.entriesIn = wy, P.extend = yy, P.extendWith = Rc, Uf(P, P), P.add = E6, P.attempt = Oy, P.camelCase = S2, P.capitalize = Ey, P.ceil = I6, P.clamp = function I2(n, s, u) {
                                return u === t && (u = s, s = t), u !== t && (u = (u = Dn(u)) == u ? u : 0), s !== t && (s = (s = Dn(s)) == s ? s : 0), ls(Dn(n), s, u)
                            }, P.clone = function yA(n) {
                                return Tn(n, 4)
                            }, P.cloneDeep = function vA(n) {
                                return Tn(n, 5)
                            }, P.cloneDeepWith = function bA(n, s) {
                                return Tn(n, 5, s = "function" == typeof s ? s : t)
                            }, P.cloneWith = function mA(n, s) {
                                return Tn(n, 4, s = "function" == typeof s ? s : t)
                            }, P.conformsTo = function wA(n, s) {
                                return null == s || J_(n, s, Er(s))
                            }, P.deburr = Iy, P.defaultTo = function t6(n, s) {
                                return null == n || n != n ? s : n
                            }, P.divide = x6, P.endsWith = function P2(n, s, u) {
                                n = It(n), s = hn(s);
                                var d = n.length,
                                    I = u = u === t ? d : ls(ct(u), 0, d);
                                return (u -= s.length) >= 0 && n.slice(u, I) == s
                            }, P.eq = Vn, P.escape = function N2(n) {
                                return (n = It(n)) && cO.test(n) ? n.replace(e_, yS) : n
                            }, P.escapeRegExp = function R2(n) {
                                return (n = It(n)) && pO.test(n) ? n.replace(Pl, "\\$&") : n
                            }, P.every = function UR(n, s, u) {
                                var d = st(n) ? R_ : SP;
                                return u && Mr(n, s, u) && (s = t), d(n, Be(s, 3))
                            }, P.find = FR, P.findIndex = Gg, P.findKey = function QA(n, s) {
                                return A_(n, Be(s, 3), ii)
                            }, P.findLast = MR, P.findLastIndex = Wg, P.findLastKey = function YA(n, s) {
                                return A_(n, Be(s, 3), Yl)
                            }, P.floor = O6, P.forEach = ty, P.forEachRight = ry, P.forIn = function XA(n, s) {
                                return null == n ? n : Ql(n, Be(s, 3), tn)
                            }, P.forInRight = function e2(n, s) {
                                return null == n ? n : eg(n, Be(s, 3), tn)
                            }, P.forOwn = function t2(n, s) {
                                return n && ii(n, Be(s, 3))
                            }, P.forOwnRight = function r2(n, s) {
                                return n && Yl(n, Be(s, 3))
                            }, P.get = Tf, P.gt = EA, P.gte = IA, P.has = function s2(n, s) {
                                return null != n && Lg(n, s, NP)
                            }, P.hasIn = Cf, P.head = Qg, P.identity = rn, P.includes = function ZR(n, s, u, d) {
                                n = en(n) ? n : Qs(n), u = u && !d ? ct(u) : 0;
                                var I = n.length;
                                return u < 0 && (u = vr(I + u, 0)), Nc(n) ? u <= I && n.indexOf(s, u) > -1 : !!I && Ms(n, s, u) > -1
                            }, P.indexOf = function MN(n, s, u) {
                                var d = null == n ? 0 : n.length;
                                if (!d) return -1;
                                var I = null == u ? 0 : ct(u);
                                return I < 0 && (I = vr(d + I, 0)), Ms(n, s, I)
                            }, P.inRange = function x2(n, s, u) {
                                return s = Si(s), u === t ? (u = s, s = 0) : u = Si(u),
                                    function AP(n, s, u) {
                                        return n >= jr(s, u) && n < vr(s, u)
                                    }(n = Dn(n), s, u)
                            }, P.invoke = c2, P.isArguments = ps, P.isArray = st, P.isArrayBuffer = xA, P.isArrayLike = en, P.isArrayLikeObject = rr, P.isBoolean = function OA(n) {
                                return !0 === n || !1 === n || Jt(n) && Fr(n) == Ro
                            }, P.isBuffer = Bi, P.isDate = SA, P.isElement = function PA(n) {
                                return Jt(n) && 1 === n.nodeType && !Jo(n)
                            }, P.isEmpty = function NA(n) {
                                if (null == n) return !0;
                                if (en(n) && (st(n) || "string" == typeof n || "function" == typeof n.splice || Bi(n) || Js(n) || ps(n))) return !n.length;
                                var s = Dr(n);
                                if (s == zn || s == Zn) return !n.size;
                                if (Go(n)) return !rf(n).length;
                                for (var u in n)
                                    if (St.call(n, u)) return !1;
                                return !0
                            }, P.isEqual = function RA(n, s) {
                                return Ho(n, s)
                            }, P.isEqualWith = function AA(n, s, u) {
                                var d = (u = "function" == typeof u ? u : t) ? u(n, s) : t;
                                return d === t ? Ho(n, s, t, u) : !!d
                            }, P.isError = Rf, P.isFinite = function TA(n) {
                                return "number" == typeof n && Z_(n)
                            }, P.isFunction = Oi, P.isInteger = ly, P.isLength = Pc, P.isMap = fy, P.isMatch = function CA(n, s) {
                                return n === s || tf(n, s, vf(s))
                            }, P.isMatchWith = function jA(n, s, u) {
                                return u = "function" == typeof u ? u : t, tf(n, s, vf(s), u)
                            }, P.isNaN = function DA(n) {
                                return dy(n) && n != +n
                            }, P.isNative = function $A(n) {
                                if (mN(n)) throw new nt("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return ng(n)
                            }, P.isNil = function LA(n) {
                                return null == n
                            }, P.isNull = function UA(n) {
                                return null === n
                            }, P.isNumber = dy, P.isObject = Bt, P.isObjectLike = Jt, P.isPlainObject = Jo, P.isRegExp = Af, P.isSafeInteger = function FA(n) {
                                return ly(n) && n >= -Li && n <= Li
                            }, P.isSet = hy, P.isString = Nc, P.isSymbol = pn, P.isTypedArray = Js, P.isUndefined = function MA(n) {
                                return n === t
                            }, P.isWeakMap = function kA(n) {
                                return Jt(n) && Dr(n) == Do
                            }, P.isWeakSet = function KA(n) {
                                return Jt(n) && "[object WeakSet]" == Fr(n)
                            }, P.join = function ZN(n, s) {
                                return null == n ? "" : kS.call(n, s)
                            }, P.kebabCase = A2, P.last = jn, P.lastIndexOf = function HN(n, s, u) {
                                var d = null == n ? 0 : n.length;
                                if (!d) return -1;
                                var I = d;
                                return u !== t && (I = (I = ct(u)) < 0 ? vr(d + I, 0) : jr(I, d - 1)), s == s ? function xS(J, ae, te) {
                                    for (var Fe = te + 1; Fe--;)
                                        if (J[Fe] === ae) return Fe;
                                    return Fe
                                }(n, s, I) : Ba(n, T_, I, !0)
                            }, P.lowerCase = T2, P.lowerFirst = C2, P.lt = qA, P.lte = zA, P.max = function S6(n) {
                                return n && n.length ? uc(n, rn, Xl) : t
                            }, P.maxBy = function P6(n, s) {
                                return n && n.length ? uc(n, Be(s, 2), Xl) : t
                            }, P.mean = function N6(n) {
                                return C_(n, rn)
                            }, P.meanBy = function R6(n, s) {
                                return C_(n, Be(s, 2))
                            }, P.min = function A6(n) {
                                return n && n.length ? uc(n, rn, nf) : t
                            }, P.minBy = function T6(n, s) {
                                return n && n.length ? uc(n, Be(s, 2), nf) : t
                            }, P.stubArray = Ff, P.stubFalse = Mf, P.stubObject = function g6() {
                                return {}
                            }, P.stubString = function y6() {
                                return ""
                            }, P.stubTrue = function m6() {
                                return !0
                            }, P.multiply = C6, P.nth = function BN(n, s) {
                                return n && n.length ? cg(n, ct(s)) : t
                            }, P.noConflict = function c6() {
                                return Rr._ === this && (Rr._ = DS), this
                            }, P.noop = Lf, P.now = xc, P.pad = function j2(n, s, u) {
                                n = It(n);
                                var d = (s = ct(s)) ? Ks(n) : 0;
                                if (!s || d >= s) return n;
                                var I = (s - d) / 2;
                                return yc(ic(I), u) + n + yc(nc(I), u)
                            }, P.padEnd = function D2(n, s, u) {
                                n = It(n);
                                var d = (s = ct(s)) ? Ks(n) : 0;
                                return s && d < s ? n + yc(s - d, u) : n
                            }, P.padStart = function $2(n, s, u) {
                                n = It(n);
                                var d = (s = ct(s)) ? Ks(n) : 0;
                                return s && d < s ? yc(s - d, u) + n : n
                            }, P.parseInt = function U2(n, s, u) {
                                return u || null == s ? s = 0 : s && (s = +s), zS(It(n).replace(Nl, ""), s || 0)
                            }, P.random = function O2(n, s, u) {
                                if (u && "boolean" != typeof u && Mr(n, s, u) && (s = u = t), u === t && ("boolean" == typeof s ? (u = s, s = t) : "boolean" == typeof n && (u = n, n = t)), n === t && s === t ? (n = 0, s = 1) : (n = Si(n), s === t ? (s = n, n = 0) : s = Si(s)), n > s) {
                                    var d = n;
                                    n = s, s = d
                                }
                                if (u || n % 1 || s % 1) {
                                    var I = H_();
                                    return jr(n + I * (s - n + nS("1e-" + ((I + "").length - 1))), s)
                                }
                                return of(n, s)
                            }, P.reduce = function WR(n, s, u) {
                                var d = st(n) ? Ll : j_,
                                    I = arguments.length < 3;
                                return d(n, Be(s, 4), u, I, qi)
                            }, P.reduceRight = function JR(n, s, u) {
                                var d = st(n) ? cS : j_,
                                    I = arguments.length < 3;
                                return d(n, Be(s, 4), u, I, Y_)
                            }, P.repeat = function L2(n, s, u) {
                                return s = (u ? Mr(n, s, u) : s === t) ? 1 : ct(s), af(It(n), s)
                            }, P.replace = function F2() {
                                var n = arguments,
                                    s = It(n[0]);
                                return n.length < 3 ? s : s.replace(n[1], n[2])
                            }, P.result = function _2(n, s, u) {
                                var d = -1,
                                    I = (s = Zi(s, n)).length;
                                for (I || (I = 1, n = t); ++d < I;) {
                                    var R = null == n ? t : n[oi(s[d])];
                                    R === t && (d = I, R = u), n = Oi(R) ? R.call(n) : R
                                }
                                return n
                            }, P.round = j6, P.runInContext = J, P.sample = function YR(n) {
                                return (st(n) ? G_ : ZP)(n)
                            }, P.size = function tA(n) {
                                if (null == n) return 0;
                                if (en(n)) return Nc(n) ? Ks(n) : n.length;
                                var s = Dr(n);
                                return s == zn || s == Zn ? n.size : rf(n).length
                            }, P.snakeCase = M2, P.some = function rA(n, s, u) {
                                var d = st(n) ? Fl : GP;
                                return u && Mr(n, s, u) && (s = t), d(n, Be(s, 3))
                            }, P.sortedIndex = function XN(n, s) {
                                return dc(n, s)
                            }, P.sortedIndexBy = function eR(n, s, u) {
                                return cf(n, s, Be(u, 2))
                            }, P.sortedIndexOf = function tR(n, s) {
                                var u = null == n ? 0 : n.length;
                                if (u) {
                                    var d = dc(n, s);
                                    if (d < u && Vn(n[d], s)) return d
                                }
                                return -1
                            }, P.sortedLastIndex = function rR(n, s) {
                                return dc(n, s, !0)
                            }, P.sortedLastIndexBy = function nR(n, s, u) {
                                return cf(n, s, Be(u, 2), !0)
                            }, P.sortedLastIndexOf = function iR(n, s) {
                                if (null != n && n.length) {
                                    var d = dc(n, s, !0) - 1;
                                    if (Vn(n[d], s)) return d
                                }
                                return -1
                            }, P.startCase = K2, P.startsWith = function q2(n, s, u) {
                                return n = It(n), u = null == u ? 0 : ls(ct(u), 0, n.length), s = hn(s), n.slice(u, u + s.length) == s
                            }, P.subtract = D6, P.sum = function $6(n) {
                                return n && n.length ? Kl(n, rn) : 0
                            }, P.sumBy = function U6(n, s) {
                                return n && n.length ? Kl(n, Be(s, 2)) : 0
                            }, P.template = function z2(n, s, u) {
                                var d = P.templateSettings;
                                u && Mr(n, s, u) && (s = t), n = It(n), s = Rc({}, s, d, jg);
                                var Z, Q, I = Rc({}, s.imports, d.imports, jg),
                                    R = Er(I),
                                    K = zl(I, R),
                                    we = 0,
                                    Ie = s.interpolate || qa,
                                    Se = "__p += '",
                                    Ce = Hl((s.escape || qa).source + "|" + Ie.source + "|" + (Ie === t_ ? EO : qa).source + "|" + (s.evaluate || qa).source + "|$", "g"),
                                    Ke = "//# sourceURL=" + (St.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++YO + "]") + "\n";
                                n.replace(Ce, function(Ge, ht, gt, _n, kr, gn) {
                                    return gt || (gt = _n), Se += n.slice(we, gn).replace(RO, mS), ht && (Z = !0, Se += "' +\n__e(" + ht + ") +\n'"), kr && (Q = !0, Se += "';\n" + kr + ";\n__p += '"), gt && (Se += "' +\n((__t = (" + gt + ")) == null ? '' : __t) +\n'"), we = gn + Ge.length, Ge
                                }), Se += "';\n";
                                var Ve = St.call(s, "variable") && s.variable;
                                if (Ve) {
                                    if (bO.test(Ve)) throw new nt("Invalid `variable` option passed into `_.template`")
                                } else Se = "with (obj) {\n" + Se + "\n}\n";
                                Se = (Q ? Se.replace(iO, "") : Se).replace(sO, "$1").replace(oO, "$1;"), Se = "function(" + (Ve || "obj") + ") {\n" + (Ve ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (Z ? ", __e = _.escape" : "") + (Q ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + Se + "return __p\n}";
                                var ut = Oy(function() {
                                    return wt(R, Ke + "return " + Se).apply(t, K)
                                });
                                if (ut.source = Se, Rf(ut)) throw ut;
                                return ut
                            }, P.times = function v6(n, s) {
                                if ((n = ct(n)) < 1 || n > Li) return [];
                                var u = ni,
                                    d = jr(n, ni);
                                s = Be(s), n -= ni;
                                for (var I = ql(d, s); ++u < n;) s(u);
                                return I
                            }, P.toFinite = Si, P.toInteger = ct, P.toLength = _y, P.toLower = function Z2(n) {
                                return It(n).toLowerCase()
                            }, P.toNumber = Dn, P.toSafeInteger = function ZA(n) {
                                return n ? ls(ct(n), -Li, Li) : 0 === n ? n : 0
                            }, P.toString = It, P.toUpper = function H2(n) {
                                return It(n).toUpperCase()
                            }, P.trim = function B2(n, s, u) {
                                if ((n = It(n)) && (u || s === t)) return D_(n);
                                if (!n || !(s = hn(s))) return n;
                                var d = Hn(n),
                                    I = Hn(s);
                                return Hi(d, $_(d, I), U_(d, I) + 1).join("")
                            }, P.trimEnd = function V2(n, s, u) {
                                if ((n = It(n)) && (u || s === t)) return n.slice(0, F_(n) + 1);
                                if (!n || !(s = hn(s))) return n;
                                var d = Hn(n);
                                return Hi(d, 0, U_(d, Hn(s)) + 1).join("")
                            }, P.trimStart = function G2(n, s, u) {
                                if ((n = It(n)) && (u || s === t)) return n.replace(Nl, "");
                                if (!n || !(s = hn(s))) return n;
                                var d = Hn(n);
                                return Hi(d, $_(d, Hn(s))).join("")
                            }, P.truncate = function W2(n, s) {
                                var u = 30,
                                    d = "...";
                                if (Bt(s)) {
                                    var I = "separator" in s ? s.separator : I;
                                    u = "length" in s ? ct(s.length) : u, d = "omission" in s ? hn(s.omission) : d
                                }
                                var R = (n = It(n)).length;
                                if (ks(n)) {
                                    var K = Hn(n);
                                    R = K.length
                                }
                                if (u >= R) return n;
                                var Z = u - Ks(d);
                                if (Z < 1) return d;
                                var Q = K ? Hi(K, 0, Z).join("") : n.slice(0, Z);
                                if (I === t) return Q + d;
                                if (K && (Z += Q.length - Z), Af(I)) {
                                    if (n.slice(Z).search(I)) {
                                        var we, Ie = Q;
                                        for (I.global || (I = Hl(I.source, It(r_.exec(I)) + "g")), I.lastIndex = 0; we = I.exec(Ie);) var Se = we.index;
                                        Q = Q.slice(0, Se === t ? Z : Se)
                                    }
                                } else if (n.indexOf(hn(I), Z) != Z) {
                                    var Ce = Q.lastIndexOf(I);
                                    Ce > -1 && (Q = Q.slice(0, Ce))
                                }
                                return Q + d
                            }, P.unescape = function J2(n) {
                                return (n = It(n)) && aO.test(n) ? n.replace(Xp, OS) : n
                            }, P.uniqueId = function w6(n) {
                                var s = ++CS;
                                return It(n) + s
                            }, P.upperCase = Q2, P.upperFirst = jf, P.each = ty, P.eachRight = ry, P.first = Qg, Uf(P, function() {
                                var n = {};
                                return ii(P, function(s, u) {
                                    St.call(P.prototype, u) || (n[u] = s)
                                }), n
                            }(), {
                                chain: !1
                            }), P.VERSION = "4.17.21", En(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
                                P[n].placeholder = P
                            }), En(["drop", "take"], function(n, s) {
                                _t.prototype[n] = function(u) {
                                    u = u === t ? 1 : vr(ct(u), 0);
                                    var d = this.__filtered__ && !s ? new _t(this) : this.clone();
                                    return d.__filtered__ ? d.__takeCount__ = jr(u, d.__takeCount__) : d.__views__.push({
                                        size: jr(u, ni),
                                        type: n + (d.__dir__ < 0 ? "Right" : "")
                                    }), d
                                }, _t.prototype[n + "Right"] = function(u) {
                                    return this.reverse()[n](u).reverse()
                                }
                            }), En(["filter", "map", "takeWhile"], function(n, s) {
                                var u = s + 1,
                                    d = 1 == u || 3 == u;
                                _t.prototype[n] = function(I) {
                                    var R = this.clone();
                                    return R.__iteratees__.push({
                                        iteratee: Be(I, 3),
                                        type: u
                                    }), R.__filtered__ = R.__filtered__ || d, R
                                }
                            }), En(["head", "last"], function(n, s) {
                                var u = "take" + (s ? "Right" : "");
                                _t.prototype[n] = function() {
                                    return this[u](1).value()[0]
                                }
                            }), En(["initial", "tail"], function(n, s) {
                                var u = "drop" + (s ? "" : "Right");
                                _t.prototype[n] = function() {
                                    return this.__filtered__ ? new _t(this) : this[u](1)
                                }
                            }), _t.prototype.compact = function() {
                                return this.filter(rn)
                            }, _t.prototype.find = function(n) {
                                return this.filter(n).head()
                            }, _t.prototype.findLast = function(n) {
                                return this.reverse().find(n)
                            }, _t.prototype.invokeMap = lt(function(n, s) {
                                return "function" == typeof n ? new _t(this) : this.map(function(u) {
                                    return Zo(u, n, s)
                                })
                            }), _t.prototype.reject = function(n) {
                                return this.filter(Sc(Be(n)))
                            }, _t.prototype.slice = function(n, s) {
                                n = ct(n);
                                var u = this;
                                return u.__filtered__ && (n > 0 || s < 0) ? new _t(u) : (n < 0 ? u = u.takeRight(-n) : n && (u = u.drop(n)), s !== t && (u = (s = ct(s)) < 0 ? u.dropRight(-s) : u.take(s - n)), u)
                            }, _t.prototype.takeRightWhile = function(n) {
                                return this.reverse().takeWhile(n).reverse()
                            }, _t.prototype.toArray = function() {
                                return this.take(ni)
                            }, ii(_t.prototype, function(n, s) {
                                var u = /^(?:filter|find|map|reject)|While$/.test(s),
                                    d = /^(?:head|last)$/.test(s),
                                    I = P[d ? "take" + ("last" == s ? "Right" : "") : s],
                                    R = d || /^find/.test(s);
                                I && (P.prototype[s] = function() {
                                    var K = this.__wrapped__,
                                        Z = d ? [1] : arguments,
                                        Q = K instanceof _t,
                                        we = Z[0],
                                        Ie = Q || st(K),
                                        Se = function(ht) {
                                            var gt = I.apply(P, Mi([ht], Z));
                                            return d && Ce ? gt[0] : gt
                                        };
                                    Ie && u && "function" == typeof we && 1 != we.length && (Q = Ie = !1);
                                    var Ce = this.__chain__,
                                        Ve = R && !Ce,
                                        ut = Q && !this.__actions__.length;
                                    if (!R && Ie) {
                                        K = ut ? K : new _t(this);
                                        var Ge = n.apply(K, Z);
                                        return Ge.__actions__.push({
                                            func: Ec,
                                            args: [Se],
                                            thisArg: t
                                        }), new An(Ge, Ce)
                                    }
                                    return Ve && ut ? n.apply(this, Z) : (Ge = this.thru(Se), Ve ? d ? Ge.value()[0] : Ge.value() : Ge)
                                })
                            }), En(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
                                var s = Ga[n],
                                    u = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                                    d = /^(?:pop|shift)$/.test(n);
                                P.prototype[n] = function() {
                                    var I = arguments;
                                    if (d && !this.__chain__) {
                                        var R = this.value();
                                        return s.apply(st(R) ? R : [], I)
                                    }
                                    return this[u](function(K) {
                                        return s.apply(st(K) ? K : [], I)
                                    })
                                }
                            }), ii(_t.prototype, function(n, s) {
                                var u = P[s];
                                if (u) {
                                    var d = u.name + "";
                                    St.call(Hs, d) || (Hs[d] = []), Hs[d].push({
                                        name: s,
                                        func: u
                                    })
                                }
                            }), Hs[_c(t, 2).name] = [{
                                name: "wrapper",
                                func: t
                            }], _t.prototype.clone = function JS() {
                                var n = new _t(this.__wrapped__);
                                return n.__actions__ = Xr(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Xr(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Xr(this.__views__), n
                            }, _t.prototype.reverse = function QS() {
                                if (this.__filtered__) {
                                    var n = new _t(this);
                                    n.__dir__ = -1, n.__filtered__ = !0
                                } else(n = this.clone()).__dir__ *= -1;
                                return n
                            }, _t.prototype.value = function YS() {
                                var n = this.__wrapped__.value(),
                                    s = this.__dir__,
                                    u = st(n),
                                    d = s < 0,
                                    I = u ? n.length : 0,
                                    R = function lN(n, s, u) {
                                        for (var d = -1, I = u.length; ++d < I;) {
                                            var R = u[d],
                                                K = R.size;
                                            switch (R.type) {
                                                case "drop":
                                                    n += K;
                                                    break;
                                                case "dropRight":
                                                    s -= K;
                                                    break;
                                                case "take":
                                                    s = jr(s, n + K);
                                                    break;
                                                case "takeRight":
                                                    n = vr(n, s - K)
                                            }
                                        }
                                        return {
                                            start: n,
                                            end: s
                                        }
                                    }(0, I, this.__views__),
                                    K = R.start,
                                    Z = R.end,
                                    Q = Z - K,
                                    we = d ? Z : K - 1,
                                    Ie = this.__iteratees__,
                                    Se = Ie.length,
                                    Ce = 0,
                                    Ke = jr(Q, this.__takeCount__);
                                if (!u || !d && I == Q && Ke == Q) return gg(n, this.__actions__);
                                var Ve = [];
                                e: for (; Q-- && Ce < Ke;) {
                                    for (var ut = -1, Ge = n[we += s]; ++ut < Se;) {
                                        var ht = Ie[ut],
                                            _n = ht.type,
                                            kr = (0, ht.iteratee)(Ge);
                                        if (2 == _n) Ge = kr;
                                        else if (!kr) {
                                            if (1 == _n) continue e;
                                            break e
                                        }
                                    }
                                    Ve[Ce++] = Ge
                                }
                                return Ve
                            }, P.prototype.at = PR, P.prototype.chain = function NR() {
                                return ey(this)
                            }, P.prototype.commit = function RR() {
                                return new An(this.value(), this.__chain__)
                            }, P.prototype.next = function AR() {
                                this.__values__ === t && (this.__values__ = py(this.value()));
                                var n = this.__index__ >= this.__values__.length;
                                return {
                                    done: n,
                                    value: n ? t : this.__values__[this.__index__++]
                                }
                            }, P.prototype.plant = function CR(n) {
                                for (var s, u = this; u instanceof ac;) {
                                    var d = Vg(u);
                                    d.__index__ = 0, d.__values__ = t, s ? I.__wrapped__ = d : s = d;
                                    var I = d;
                                    u = u.__wrapped__
                                }
                                return I.__wrapped__ = n, s
                            }, P.prototype.reverse = function jR() {
                                var n = this.__wrapped__;
                                if (n instanceof _t) {
                                    var s = n;
                                    return this.__actions__.length && (s = new _t(this)), (s = s.reverse()).__actions__.push({
                                        func: Ec,
                                        args: [Of],
                                        thisArg: t
                                    }), new An(s, this.__chain__)
                                }
                                return this.thru(Of)
                            }, P.prototype.toJSON = P.prototype.valueOf = P.prototype.value = function DR() {
                                return gg(this.__wrapped__, this.__actions__)
                            }, P.prototype.first = P.prototype.head, Lo && (P.prototype[Lo] = function TR() {
                                return this
                            }), P
                        }();
                    os ? ((os.exports = qs)._ = qs, Dl._ = qs) : Rr._ = qs
                }.call(Po);
            var ax = Object.defineProperty,
                cx = Object.defineProperties,
                ux = Object.getOwnPropertyDescriptors,
                Fp = Object.getOwnPropertySymbols,
                lx = Object.prototype.hasOwnProperty,
                fx = Object.prototype.propertyIsEnumerable,
                Mp = (r, e, t) => e in r ? ax(r, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : r[e] = t,
                Ta = (r, e) => {
                    for (var t in e || (e = {})) lx.call(e, t) && Mp(r, t, e[t]);
                    if (Fp)
                        for (var t of Fp(e)) fx.call(e, t) && Mp(r, t, e[t]);
                    return r
                },
                dx = (r, e) => cx(r, ux(e));

            function $i(r, e, t) {
                var o;
                const a = function fp(r) {
                    const [e, t] = r.split(Oa);
                    return {
                        namespace: e,
                        reference: t
                    }
                }(r);
                return (null == (o = e.rpcMap) ? void 0 : o[a.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${a.namespace}:${a.reference}&projectId=${t}`
            }

            function is(r) {
                return r.includes(":") ? r.split(":")[1] : r
            }

            function kp(r) {
                return r.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
            }

            function Kp(r) {
                var e, t, o, a;
                const l = {};
                if (! function Ra(r) {
                        return Object.getPrototypeOf(r) === Object.prototype && Object.keys(r).length
                    }(r)) return l;
                for (const [f, w] of Object.entries(r)) {
                    const C = Na(f) ? [f] : w.chains,
                        m = w.methods || [],
                        A = w.events || [],
                        L = w.rpcMap || {},
                        X = Ds(f);
                    l[X] = dx(Ta(Ta({}, l[X]), w), {
                        chains: ri(C, null == (e = l[X]) ? void 0 : e.chains),
                        methods: ri(m, null == (t = l[X]) ? void 0 : t.methods),
                        events: ri(A, null == (o = l[X]) ? void 0 : o.events),
                        rpcMap: Ta(Ta({}, L), null == (a = l[X]) ? void 0 : a.rpcMap)
                    })
                }
                return l
            }

            function _x(r) {
                return r.includes(":") ? r.split(":")[2] : r
            }

            function gx(r) {
                const e = {};
                for (const [t, o] of Object.entries(r)) {
                    const a = o.methods || [],
                        l = o.events || [],
                        f = o.accounts || [],
                        w = Na(t) ? [t] : o.chains ? o.chains : kp(o.accounts);
                    e[t] = {
                        chains: w,
                        methods: a,
                        events: l,
                        accounts: f
                    }
                }
                return e
            }

            function hl(r) {
                return "number" == typeof r ? r : r.includes("0x") ? parseInt(r, 16) : r.includes(":") ? Number(r.split(":")[1]) : Number(r)
            }
            const qp = {},
                qt = r => qp[r],
                pl = (r, e) => {
                    qp[r] = e
                };
            class yx {
                constructor(e) {
                    this.name = "polkadot", this.namespace = e.namespace, this.events = qt("events"), this.client = qt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit("default_chain_changed", `${this.name}:${e}`)
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e && e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = is(t);
                        e[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const o = this.createHttpProvider(e, t);
                    o && (this.httpProviders[e] = o)
                }
                createHttpProvider(e, t) {
                    const o = t || $i(e, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new pi(new ns(o, qt("disableProviderPing")))
                }
            }
            class mx {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.events = qt("events"), this.client = qt("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                request(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        switch (e.request.method) {
                            case "eth_requestAccounts":
                            case "eth_accounts":
                                return t.getAccounts();
                            case "wallet_switchEthereumChain":
                                return yield t.handleSwitchChain(e);
                            case "eth_chainId":
                                return parseInt(t.getDefaultChain())
                        }
                        return t.namespace.methods.includes(e.request.method) ? yield t.client.request(e): t.getHttpProvider().request(e.request)
                    })()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit("default_chain_changed", `${this.name}:${e}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    const o = t || $i(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new pi(new $p(o, qt("disableProviderPing")))
                }
                setHttpProvider(e, t) {
                    const o = this.createHttpProvider(e, t);
                    o && (this.httpProviders[e] = o)
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = parseInt(is(t));
                        e[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), e
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                getHttpProvider() {
                    const e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                handleSwitchChain(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        var o, a;
                        let l = e.request.params ? null == (o = e.request.params[0]) ? void 0 : o.chainId : "0x0";
                        l = l.startsWith("0x") ? l : `0x${l}`;
                        const f = parseInt(l, 16);
                        if (t.isChainApproved(f)) t.setDefaultChain(`${f}`);
                        else {
                            if (!t.namespace.methods.includes("wallet_switchEthereumChain")) throw new Error(`Failed to switch to chain 'eip155:${f}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                            yield t.client.request({
                                topic: e.topic,
                                request: {
                                    method: e.request.method,
                                    params: [{
                                        chainId: l
                                    }]
                                },
                                chainId: null == (a = t.namespace.chains) ? void 0 : a[0]
                            }), t.setDefaultChain(`${f}`)
                        }
                        return null
                    })()
                }
                isChainApproved(e) {
                    return this.namespace.chains.includes(`${this.name}:${e}`)
                }
            }
            class vx {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = qt("events"), this.client = qt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit("default_chain_changed", `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = is(t);
                        e[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const o = this.createHttpProvider(e, t);
                    o && (this.httpProviders[e] = o)
                }
                createHttpProvider(e, t) {
                    const o = t || $i(e, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new pi(new ns(o, qt("disableProviderPing")))
                }
            }
            class bx {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = qt("events"), this.client = qt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit("default_chain_changed", `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = is(t);
                        e[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const o = this.createHttpProvider(e, t);
                    o && (this.httpProviders[e] = o)
                }
                createHttpProvider(e, t) {
                    const o = t || $i(e, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new pi(new ns(o, qt("disableProviderPing")))
                }
            }
            class wx {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = qt("events"), this.client = qt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit("default_chain_changed", `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach(t => {
                        const o = this.getCardanoRPCUrl(t),
                            a = is(t);
                        e[a] = this.createHttpProvider(a, o)
                    }), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                getCardanoRPCUrl(e) {
                    const t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    const o = this.createHttpProvider(e, t);
                    o && (this.httpProviders[e] = o)
                }
                createHttpProvider(e, t) {
                    const o = t || this.getCardanoRPCUrl(e);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new pi(new ns(o, qt("disableProviderPing")))
                }
            }
            class Ex {
                constructor(e) {
                    this.name = "elrond", this.namespace = e.namespace, this.events = qt("events"), this.client = qt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit("default_chain_changed", `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = is(t);
                        e[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const o = this.createHttpProvider(e, t);
                    o && (this.httpProviders[e] = o)
                }
                createHttpProvider(e, t) {
                    const o = t || $i(e, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new pi(new ns(o, qt("disableProviderPing")))
                }
            }
            class Ix {
                constructor(e) {
                    this.name = "multiversx", this.namespace = e.namespace, this.events = qt("events"), this.client = qt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit("default_chain_changed", `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        const a = is(t);
                        e[a] = this.createHttpProvider(a, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const o = this.createHttpProvider(e, t);
                    o && (this.httpProviders[e] = o)
                }
                createHttpProvider(e, t) {
                    const o = t || $i(e, this.namespace, this.client.core.projectId);
                    if (!o) throw new Error(`No RPC url provided for chainId: ${e}`);
                    return new pi(new ns(o, qt("disableProviderPing")))
                }
            }
            class xx {
                constructor(e) {
                    this.name = "near", this.namespace = e.namespace, this.events = qt("events"), this.client = qt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const e = this.namespace.chains[0];
                    if (!e) throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        const o = t || $i(`${this.name}:${e}`, this.namespace);
                        if (!o) throw new Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, o)
                    }
                    this.events.emit("default_chain_changed", `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const e = this.namespace.accounts;
                    return e && e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || []
                }
                createHttpProviders() {
                    const e = {};
                    return this.namespace.chains.forEach(t => {
                        var o;
                        e[t] = this.createHttpProvider(t, null == (o = this.namespace.rpcMap) ? void 0 : o[t])
                    }), e
                }
                getHttpProvider() {
                    const e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    const o = this.createHttpProvider(e, t);
                    o && (this.httpProviders[e] = o)
                }
                createHttpProvider(e, t) {
                    const o = t || $i(e, this.namespace);
                    return typeof o > "u" ? void 0 : new pi(new ns(o, qt("disableProviderPing")))
                }
            }
            var Ox = Object.defineProperty,
                Sx = Object.defineProperties,
                Px = Object.getOwnPropertyDescriptors,
                zp = Object.getOwnPropertySymbols,
                Nx = Object.prototype.hasOwnProperty,
                Rx = Object.prototype.propertyIsEnumerable,
                Zp = (r, e, t) => e in r ? Ox(r, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : r[e] = t,
                Ca = (r, e) => {
                    for (var t in e || (e = {})) Nx.call(e, t) && Zp(r, t, e[t]);
                    if (zp)
                        for (var t of zp(e)) Rx.call(e, t) && Zp(r, t, e[t]);
                    return r
                },
                _l = (r, e) => Sx(r, Px(e));
            class gl {
                constructor(e) {
                    this.events = new(je()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = typeof e ? .logger < "u" && "string" != typeof e ? .logger ? e.logger : (0, mt.pino)((0, mt.getDefaultLoggerOptions)({
                        level: e ? .logger || "error"
                    })), this.disableProviderPing = e ? .disableProviderPing || !1
                }
                static init(e) {
                    return (0, O.Z)(function*() {
                        const t = new gl(e);
                        return yield t.initialize(), t
                    })()
                }
                request(e, t) {
                    var o = this;
                    return (0, O.Z)(function*() {
                        const [a, l] = o.validateChain(t);
                        if (!o.session) throw new Error("Please call connect() before request()");
                        return yield o.getProvider(a).request({
                            request: Ca({}, e),
                            chainId: `${a}:${l}`,
                            topic: o.session.topic
                        })
                    })()
                }
                sendAsync(e, t, o) {
                    this.request(e, o).then(a => t(null, a)).catch(a => t(a, void 0))
                }
                enable() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        if (!e.client) throw new Error("Sign Client not initialized");
                        return e.session || (yield e.connect({
                            namespaces: e.namespaces,
                            optionalNamespaces: e.optionalNamespaces,
                            sessionProperties: e.sessionProperties
                        })), yield e.requestAccounts()
                    })()
                }
                disconnect() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        var t;
                        if (!e.session) throw new Error("Please call connect() before enable()");
                        yield e.client.disconnect({
                            topic: null == (t = e.session) ? void 0 : t.topic,
                            reason: Di("USER_DISCONNECTED")
                        }), yield e.cleanup()
                    })()
                }
                connect(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        if (!t.client) throw new Error("Sign Client not initialized");
                        if (t.setNamespaces(e), yield t.cleanupPendingPairings(), !e.skipPairing) return yield t.pair(e.pairingTopic)
                    })()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                pair(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        t.shouldAbortPairingAttempt = !1;
                        let o = 0;
                        do {
                            if (t.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
                            if (o >= t.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
                            const {
                                uri: a,
                                approval: l
                            } = yield t.client.connect({
                                pairingTopic: e,
                                requiredNamespaces: t.namespaces,
                                optionalNamespaces: t.optionalNamespaces,
                                sessionProperties: t.sessionProperties
                            });
                            a && (t.uri = a, t.events.emit("display_uri", a)), yield l().then(f => {
                                t.session = f, t.namespaces || (t.namespaces = gx(f.namespaces), t.persist("namespaces", t.namespaces))
                            }).catch(f => {
                                if (f.message !== cp) throw f;
                                o++
                            })
                        } while (!t.session);
                        return t.onConnect(), t.session
                    })()
                }
                setDefaultChain(e, t) {
                    try {
                        if (!this.session) return;
                        const [o, a] = this.validateChain(e);
                        this.getProvider(o).setDefaultChain(a, t)
                    } catch (o) {
                        if (!/Please call connect/.test(o.message)) throw o
                    }
                }
                cleanupPendingPairings(e = {}) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        t.logger.info("Cleaning up inactive pairings...");
                        const o = t.client.pairing.getAll();
                        if ($s(o)) {
                            for (const a of o) e.deletePairings ? t.client.core.expirer.set(a.topic, 0) : yield t.client.core.relayer.subscriber.unsubscribe(a.topic);
                            t.logger.info(`Inactive pairings cleared: ${o.length}`)
                        }
                    })()
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                checkStorage() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.namespaces = yield e.getFromStore("namespaces"), e.optionalNamespaces = (yield e.getFromStore("optionalNamespaces")) || {}, e.client.session.length && (e.session = e.client.session.get(e.client.session.keys[e.client.session.keys.length - 1]), e.createProviders())
                    })()
                }
                initialize() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.logger.trace("Initialized"), yield e.createClient(), yield e.checkStorage(), e.registerEventListeners()
                    })()
                }
                createClient() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.client = e.providerOpts.client || (yield Xu.init({
                            logger: e.providerOpts.logger || "error",
                            relayUrl: e.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                            projectId: e.providerOpts.projectId,
                            metadata: e.providerOpts.metadata,
                            storageOptions: e.providerOpts.storageOptions,
                            storage: e.providerOpts.storage,
                            name: e.providerOpts.name
                        })), e.logger.trace("SignClient Initialized")
                    })()
                }
                createProviders() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
                    const e = [...new Set(Object.keys(this.session.namespaces).map(t => Ds(t)))];
                    pl("client", this.client), pl("events", this.events), pl("disableProviderPing", this.disableProviderPing), e.forEach(t => {
                        if (!this.session) return;
                        const o = function hx(r, e) {
                                const t = Object.keys(e.namespaces).filter(a => a.includes(r));
                                if (!t.length) return [];
                                const o = [];
                                return t.forEach(a => {
                                    o.push(...e.namespaces[a].accounts)
                                }), o
                            }(t, this.session),
                            a = kp(o),
                            l = function px(r = {}, e = {}) {
                                const t = Kp(r),
                                    o = Kp(e);
                                return dl.exports.merge(t, o)
                            }(this.namespaces, this.optionalNamespaces),
                            f = _l(Ca({}, l[t]), {
                                accounts: o,
                                chains: a
                            });
                        switch (t) {
                            case "eip155":
                                this.rpcProviders[t] = new mx({
                                    namespace: f
                                });
                                break;
                            case "solana":
                                this.rpcProviders[t] = new vx({
                                    namespace: f
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[t] = new bx({
                                    namespace: f
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[t] = new yx({
                                    namespace: f
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[t] = new wx({
                                    namespace: f
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[t] = new Ex({
                                    namespace: f
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[t] = new Ix({
                                    namespace: f
                                });
                                break;
                            case "near":
                                this.rpcProviders[t] = new xx({
                                    namespace: f
                                })
                        }
                    })
                }
                registerEventListeners() {
                    var e = this;
                    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
                    this.client.on("session_ping", t => {
                        this.events.emit("session_ping", t)
                    }), this.client.on("session_event", t => {
                        const {
                            params: o
                        } = t, {
                            event: a
                        } = o;
                        if ("accountsChanged" === a.name) {
                            const l = a.data;
                            l && $s(l) && this.events.emit("accountsChanged", l.map(_x))
                        } else if ("chainChanged" === a.name) {
                            const l = o.chainId,
                                f = o.event.data,
                                w = Ds(l),
                                C = hl(l) !== hl(f) ? `${w}:${hl(f)}` : l;
                            this.onChainChanged(C)
                        } else this.events.emit(a.name, a.data);
                        this.events.emit("session_event", t)
                    }), this.client.on("session_update", ({
                        topic: t,
                        params: o
                    }) => {
                        var a;
                        const {
                            namespaces: l
                        } = o, f = null == (a = this.client) ? void 0 : a.session.get(t);
                        this.session = _l(Ca({}, f), {
                            namespaces: l
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: t,
                            params: o
                        })
                    }), this.client.on("session_delete", function() {
                        var t = (0, O.Z)(function*(o) {
                            yield e.cleanup(), e.events.emit("session_delete", o), e.events.emit("disconnect", _l(Ca({}, Di("USER_DISCONNECTED")), {
                                data: o.topic
                            }))
                        });
                        return function(o) {
                            return t.apply(this, arguments)
                        }
                    }()), this.on("default_chain_changed", t => {
                        this.onChainChanged(t, !0)
                    })
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    })
                }
                setNamespaces(e) {
                    const {
                        namespaces: t,
                        optionalNamespaces: o,
                        sessionProperties: a
                    } = e;
                    t && Object.keys(t).length && (this.namespaces = t), o && Object.keys(o).length && (this.optionalNamespaces = o), this.sessionProperties = a, this.persist("namespaces", t), this.persist("optionalNamespaces", o)
                }
                validateChain(e) {
                    const [t, o] = e ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, o];
                    if (t && !Object.keys(this.namespaces || {}).map(f => Ds(f)).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && o) return [t, o];
                    const a = Ds(Object.keys(this.namespaces)[0]);
                    return [a, this.rpcProviders[a].getDefaultChain()]
                }
                requestAccounts() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        const [t] = e.validateChain();
                        return yield e.getProvider(t).requestAccounts()
                    })()
                }
                onChainChanged(e, t = !1) {
                    var o;
                    if (!this.namespaces) return;
                    const [a, l] = this.validateChain(e);
                    t || this.getProvider(a).setDefaultChain(l), (null != (o = this.namespaces[a]) ? o : this.namespaces[`${a}:${l}`]).defaultChain = l, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", l)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                cleanup() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.session = void 0, e.namespaces = void 0, e.optionalNamespaces = void 0, e.sessionProperties = void 0, e.persist("namespaces", void 0), e.persist("optionalNamespaces", void 0), e.persist("sessionProperties", void 0), yield e.cleanupPendingPairings({
                            deletePairings: !0
                        })
                    })()
                }
                persist(e, t) {
                    this.client.core.storage.setItem(`${Lp}/${e}`, t)
                }
                getFromStore(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        return yield t.client.core.storage.getItem(`${Lp}/${e}`)
                    })()
                }
            }
            const Ax = gl,
                ja = ["eth_sendTransaction", "personal_sign"],
                Hp = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                Da = ["chainChanged", "accountsChanged"],
                Bp = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var $x = Object.defineProperty,
                Ux = Object.defineProperties,
                Lx = Object.getOwnPropertyDescriptors,
                Vp = Object.getOwnPropertySymbols,
                Fx = Object.prototype.hasOwnProperty,
                Mx = Object.prototype.propertyIsEnumerable,
                Gp = (r, e, t) => e in r ? $x(r, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : r[e] = t,
                No = (r, e) => {
                    for (var t in e || (e = {})) Fx.call(e, t) && Gp(r, t, e[t]);
                    if (Vp)
                        for (var t of Vp(e)) Mx.call(e, t) && Gp(r, t, e[t]);
                    return r
                },
                Wp = (r, e) => Ux(r, Lx(e));

            function $a(r) {
                return Number(r[0].split(":")[1])
            }

            function yl(r) {
                return `0x${r.toString(16)}`
            }
            class Ua {
                constructor() {
                    this.events = new Ae.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static init(e) {
                    return (0, O.Z)(function*() {
                        const t = new Ua;
                        return yield t.initialize(e), t
                    })()
                }
                request(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        return yield t.signer.request(e, t.formatChainId(t.chainId))
                    })()
                }
                sendAsync(e, t) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                enable() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        return e.session || (yield e.connect()), yield e.request({
                            method: "eth_requestAccounts"
                        })
                    })()
                }
                connect(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        if (!t.signer.client) throw new Error("Provider not initialized. Call init() first");
                        t.loadConnectOpts(e);
                        const {
                            required: o,
                            optional: a
                        } = function kx(r) {
                            const {
                                chains: e,
                                optionalChains: t,
                                methods: o,
                                optionalMethods: a,
                                events: l,
                                optionalEvents: f,
                                rpcMap: w
                            } = r;
                            if (!Ln(e)) throw new Error("Invalid chains");
                            const C = {
                                    chains: e,
                                    methods: o || ja,
                                    events: l || Da,
                                    rpcMap: No({}, e.length ? {
                                        [$a(e)]: w[$a(e)]
                                    } : {})
                                },
                                m = l ? .filter(be => !Da.includes(be)),
                                A = o ? .filter(be => !ja.includes(be));
                            if (!(t || f || a || null != m && m.length || null != A && A.length)) return {
                                required: e.length ? C : void 0
                            };
                            const X = {
                                chains: [...new Set(m ? .length && A ? .length || !t ? C.chains.concat(t || []) : t)],
                                methods: [...new Set(C.methods.concat(null != a && a.length ? a : Hp))],
                                events: [...new Set(C.events.concat(null != f && f.length ? f : Bp))],
                                rpcMap: w
                            };
                            return {
                                required: e.length ? C : void 0,
                                optional: t.length ? X : void 0
                            }
                        }(t.rpc);
                        try {
                            const l = yield new Promise(function() {
                                var w = (0, O.Z)(function*(C, m) {
                                    var A;
                                    t.rpc.showQrModal && (null == (A = t.modal) || A.subscribeModal(L => {
                                        !L.open && !t.signer.session && (t.signer.abortPairingAttempt(), m(new Error("Connection request reset. Please try again.")))
                                    })), yield t.signer.connect(Wp(No({
                                        namespaces: No({}, o && {
                                            [t.namespace]: o
                                        })
                                    }, a && {
                                        optionalNamespaces: {
                                            [t.namespace]: a
                                        }
                                    }), {
                                        pairingTopic: e ? .pairingTopic
                                    })).then(L => {
                                        C(L)
                                    }).catch(L => {
                                        m(new Error(L.message))
                                    })
                                });
                                return function(C, m) {
                                    return w.apply(this, arguments)
                                }
                            }());
                            if (!l) return;
                            const f = function j(r, e = []) {
                                const t = [];
                                return Object.keys(r).forEach(o => {
                                    e.length && !e.includes(o) || t.push(...r[o].accounts)
                                }), t
                            }(l.namespaces, [t.namespace]);
                            t.setChainIds(t.rpc.chains.length ? t.rpc.chains : f), t.setAccounts(f), t.events.emit("connect", {
                                chainId: yl(t.chainId)
                            })
                        } catch (l) {
                            throw t.signer.logger.error(l), l
                        } finally {
                            t.modal && t.modal.closeModal()
                        }
                    })()
                }
                disconnect() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        e.session && (yield e.signer.disconnect()), e.reset()
                    })()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", e => {
                        const {
                            params: t
                        } = e, {
                            event: o
                        } = t;
                        "accountsChanged" === o.name ? (this.accounts = this.parseAccounts(o.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === o.name ? this.setChainId(this.formatChainId(o.data)) : this.events.emit(o.name, o.data), this.events.emit("session_event", e)
                    }), this.signer.on("chainChanged", e => {
                        const t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", yl(this.chainId)), this.persist()
                    }), this.signer.on("session_update", e => {
                        this.events.emit("session_update", e)
                    }), this.signer.on("session_delete", e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", Wp(No({}, function fi(r, e) {
                            const {
                                message: t,
                                code: o
                            } = na[r];
                            return {
                                message: e ? `${t} ${e}` : t,
                                code: o
                            }
                        }("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", e => {
                        var t, o;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (o = this.modal) || o.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    })
                }
                switchEthereumChain(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith(`${this.namespace}:`)
                }
                formatChainId(e) {
                    return `${this.namespace}:${e}`
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    const t = e.filter(o => this.isCompatibleChainId(o)).map(o => this.parseChainId(o));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", yl(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        const t = this.parseChainId(e);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(e) {
                    const [t, o, a] = e.split(":");
                    return {
                        chainId: `${t}:${o}`,
                        address: a
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter(t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map(t => this.parseAccountId(t).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, o;
                    const a = null != (t = e ? .chains) ? t : [],
                        l = null != (o = e ? .optionalChains) ? o : [],
                        f = a.concat(l);
                    if (!f.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
                    const w = a.length ? e ? .methods || ja : [],
                        C = a.length ? e ? .events || Da : [],
                        m = e ? .optionalMethods || [],
                        A = e ? .optionalEvents || [],
                        L = e ? .rpcMap || this.buildRpcMap(f, e.projectId),
                        X = e ? .qrModalOptions || void 0;
                    return {
                        chains: a ? .map(be => this.formatChainId(be)),
                        optionalChains: l.map(be => this.formatChainId(be)),
                        methods: w,
                        events: C,
                        optionalMethods: m,
                        optionalEvents: A,
                        rpcMap: L,
                        showQrModal: !(null == e || !e.showQrModal),
                        qrModalOptions: X,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    const o = {};
                    return e.forEach(a => {
                        o[a] = this.getRpcUrl(a, t)
                    }), o
                }
                initialize(e) {
                    var t = this;
                    return (0, O.Z)(function*() {
                        if (t.rpc = t.getRpcConfig(e), t.chainId = $a(t.rpc.chains.length ? t.rpc.chains : t.rpc.optionalChains), t.signer = yield Ax.init({
                                projectId: t.rpc.projectId,
                                metadata: t.rpc.metadata,
                                disableProviderPing: e.disableProviderPing,
                                relayUrl: e.relayUrl,
                                storageOptions: e.storageOptions
                            }), t.registerEventListeners(), yield t.loadPersistedSession(), t.rpc.showQrModal) {
                            let o;
                            try {
                                const {
                                    WalletConnectModal: a
                                } = yield ie.e(301).then(ie.bind(ie, 3301));
                                o = a
                            } catch {
                                throw new Error("To use QR modal, please install @walletconnect/modal package")
                            }
                            if (o) try {
                                t.modal = new o(No({
                                    walletConnectVersion: 2,
                                    projectId: t.rpc.projectId,
                                    standaloneChains: t.rpc.chains
                                }, t.rpc.qrModalOptions))
                            } catch (a) {
                                throw t.signer.logger.error(a), new Error("Could not generate WalletConnectModal Instance")
                            }
                        }
                    })()
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    const {
                        chains: t,
                        optionalChains: o,
                        rpcMap: a
                    } = e;
                    t && Ln(t) && (this.rpc.chains = t.map(l => this.formatChainId(l)), t.forEach(l => {
                        this.rpc.rpcMap[l] = a ? .[l] || this.getRpcUrl(l)
                    })), o && Ln(o) && (this.rpc.optionalChains = [], this.rpc.optionalChains = o ? .map(l => this.formatChainId(l)), o.forEach(l => {
                        this.rpc.rpcMap[l] = a ? .[l] || this.getRpcUrl(l)
                    }))
                }
                getRpcUrl(e, t) {
                    var o;
                    return (null == (o = this.rpc.rpcMap) ? void 0 : o[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
                }
                loadPersistedSession() {
                    var e = this;
                    return (0, O.Z)(function*() {
                        if (!e.session) return;
                        const t = yield e.signer.client.core.storage.getItem(`${e.STORAGE_KEY}/chainId`), o = e.session.namespaces[`${e.namespace}:${t}`] ? e.session.namespaces[`${e.namespace}:${t}`] : e.session.namespaces[e.namespace];
                        e.setChainIds(t ? [e.formatChainId(t)] : o ? .accounts), e.setAccounts(o ? .accounts)
                    })()
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(t => this.parseAccount(t))
                }
            }
            const Kx = Ua
        },
        6453: (ot, B, ie) => {
            "use strict";
            const O = ie(8385),
                Ae = ie(4989),
                je = ie(6144),
                Le = ie(220),
                $e = Symbol("encodeFragmentIdentifier");

            function se(p) {
                if ("string" != typeof p || 1 !== p.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function q(p, _) {
                return _.encode ? _.strict ? O(p) : encodeURIComponent(p) : p
            }

            function Pe(p, _) {
                return _.decode ? Ae(p) : p
            }

            function Te(p) {
                return Array.isArray(p) ? p.sort() : "object" == typeof p ? Te(Object.keys(p)).sort((_, g) => Number(_) - Number(g)).map(_ => p[_]) : p
            }

            function Me(p) {
                const _ = p.indexOf("#");
                return -1 !== _ && (p = p.slice(0, _)), p
            }

            function We(p) {
                const _ = (p = Me(p)).indexOf("?");
                return -1 === _ ? "" : p.slice(_ + 1)
            }

            function He(p, _) {
                return _.parseNumbers && !Number.isNaN(Number(p)) && "string" == typeof p && "" !== p.trim() ? p = Number(p) : _.parseBooleans && null !== p && ("true" === p.toLowerCase() || "false" === p.toLowerCase()) && (p = "true" === p.toLowerCase()), p
            }

            function Xe(p, _) {
                se((_ = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, _)).arrayFormatSeparator);
                const g = function Oe(p) {
                        let _;
                        switch (p.arrayFormat) {
                            case "index":
                                return (g, b, S) => {
                                    _ = /\[(\d*)\]$/.exec(g), g = g.replace(/\[\d*\]$/, ""), _ ? (void 0 === S[g] && (S[g] = {}), S[g][_[1]] = b) : S[g] = b
                                };
                            case "bracket":
                                return (g, b, S) => {
                                    _ = /(\[\])$/.exec(g), S[g = g.replace(/\[\]$/, "")] = _ ? void 0 !== S[g] ? [].concat(S[g], b) : [b] : b
                                };
                            case "colon-list-separator":
                                return (g, b, S) => {
                                    _ = /(:list)$/.exec(g), S[g = g.replace(/:list$/, "")] = _ ? void 0 !== S[g] ? [].concat(S[g], b) : [b] : b
                                };
                            case "comma":
                            case "separator":
                                return (g, b, S) => {
                                    const k = "string" == typeof b && b.includes(p.arrayFormatSeparator),
                                        $ = "string" == typeof b && !k && Pe(b, p).includes(p.arrayFormatSeparator);
                                    b = $ ? Pe(b, p) : b;
                                    const y = k || $ ? b.split(p.arrayFormatSeparator).map(j => Pe(j, p)) : null === b ? b : Pe(b, p);
                                    S[g] = y
                                };
                            case "bracket-separator":
                                return (g, b, S) => {
                                    const k = /(\[\])$/.test(g);
                                    if (g = g.replace(/\[\]$/, ""), !k) return void(S[g] = b && Pe(b, p));
                                    const $ = null === b ? [] : b.split(p.arrayFormatSeparator).map(y => Pe(y, p));
                                    S[g] = void 0 !== S[g] ? [].concat(S[g], $) : $
                                };
                            default:
                                return (g, b, S) => {
                                    S[g] = void 0 !== S[g] ? [].concat(S[g], b) : b
                                }
                        }
                    }(_),
                    b = Object.create(null);
                if ("string" != typeof p || !(p = p.trim().replace(/^[?#&]/, ""))) return b;
                for (const S of p.split("&")) {
                    if ("" === S) continue;
                    let [k, $] = je(_.decode ? S.replace(/\+/g, " ") : S, "=");
                    $ = void 0 === $ ? null : ["comma", "separator", "bracket-separator"].includes(_.arrayFormat) ? $ : Pe($, _), g(Pe(k, _), $, b)
                }
                for (const S of Object.keys(b)) {
                    const k = b[S];
                    if ("object" == typeof k && null !== k)
                        for (const $ of Object.keys(k)) k[$] = He(k[$], _);
                    else b[S] = He(k, _)
                }
                return !1 === _.sort ? b : (!0 === _.sort ? Object.keys(b).sort() : Object.keys(b).sort(_.sort)).reduce((S, k) => {
                    const $ = b[k];
                    return S[k] = $ && "object" == typeof $ && !Array.isArray($) ? Te($) : $, S
                }, Object.create(null))
            }
            B.extract = We, B.parse = Xe, B.stringify = (p, _) => {
                if (!p) return "";
                se((_ = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, _)).arrayFormatSeparator);
                const g = $ => _.skipNull && (p => null == p)(p[$]) || _.skipEmptyString && "" === p[$],
                    b = function ke(p) {
                        switch (p.arrayFormat) {
                            case "index":
                                return _ => (g, b) => {
                                    const S = g.length;
                                    return void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, [q(_, p), "[", S, "]"].join("")] : [...g, [q(_, p), "[", q(S, p), "]=", q(b, p)].join("")]
                                };
                            case "bracket":
                                return _ => (g, b) => void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, [q(_, p), "[]"].join("")] : [...g, [q(_, p), "[]=", q(b, p)].join("")];
                            case "colon-list-separator":
                                return _ => (g, b) => void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, [q(_, p), ":list="].join("")] : [...g, [q(_, p), ":list=", q(b, p)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const _ = "bracket-separator" === p.arrayFormat ? "[]=" : "=";
                                    return g => (b, S) => void 0 === S || p.skipNull && null === S || p.skipEmptyString && "" === S ? b : (S = null === S ? "" : S, 0 === b.length ? [
                                        [q(g, p), _, q(S, p)].join("")
                                    ] : [
                                        [b, q(S, p)].join(p.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return _ => (g, b) => void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, q(_, p)] : [...g, [q(_, p), "=", q(b, p)].join("")]
                        }
                    }(_),
                    S = {};
                for (const $ of Object.keys(p)) g($) || (S[$] = p[$]);
                const k = Object.keys(S);
                return !1 !== _.sort && k.sort(_.sort), k.map($ => {
                    const y = p[$];
                    return void 0 === y ? "" : null === y ? q($, _) : Array.isArray(y) ? 0 === y.length && "bracket-separator" === _.arrayFormat ? q($, _) + "[]" : y.reduce(b($), []).join("&") : q($, _) + "=" + q(y, _)
                }).filter($ => $.length > 0).join("&")
            }, B.parseUrl = (p, _) => {
                _ = Object.assign({
                    decode: !0
                }, _);
                const [g, b] = je(p, "#");
                return Object.assign({
                    url: g.split("?")[0] || "",
                    query: Xe(We(p), _)
                }, _ && _.parseFragmentIdentifier && b ? {
                    fragmentIdentifier: Pe(b, _)
                } : {})
            }, B.stringifyUrl = (p, _) => {
                _ = Object.assign({
                    encode: !0,
                    strict: !0,
                    [$e]: !0
                }, _);
                const g = Me(p.url).split("?")[0] || "",
                    b = B.extract(p.url),
                    S = B.parse(b, {
                        sort: !1
                    }),
                    k = Object.assign(S, p.query);
                let $ = B.stringify(k, _);
                $ && ($ = `?${$}`);
                let y = function Ne(p) {
                    let _ = "";
                    const g = p.indexOf("#");
                    return -1 !== g && (_ = p.slice(g)), _
                }(p.url);
                return p.fragmentIdentifier && (y = `#${_[$e]?q(p.fragmentIdentifier,_):p.fragmentIdentifier}`), `${g}${$}${y}`
            }, B.pick = (p, _, g) => {
                g = Object.assign({
                    parseFragmentIdentifier: !0,
                    [$e]: !1
                }, g);
                const {
                    url: b,
                    query: S,
                    fragmentIdentifier: k
                } = B.parseUrl(p, g);
                return B.stringifyUrl({
                    url: b,
                    query: Le(S, _),
                    fragmentIdentifier: k
                }, g)
            }, B.exclude = (p, _, g) => {
                const b = Array.isArray(_) ? S => !_.includes(S) : (S, k) => !_(S, k);
                return B.pick(p, b, g)
            }
        },
        2108: (ot, B, ie) => {
            "use strict";
            ie.d(B, {
                q: () => O
            });
            class O {}
        },
        699: (ot, B, ie) => {
            "use strict";
            ie.r(B), ie.d(B, {
                IEvents: () => O.q
            });
            var O = ie(2108)
        },
        4953: (ot, B, ie) => {
            "use strict";
            Object.defineProperty(B, "__esModule", {
                value: !0
            }), B.HEARTBEAT_EVENTS = B.HEARTBEAT_INTERVAL = void 0;
            const O = ie(5409);
            B.HEARTBEAT_INTERVAL = O.FIVE_SECONDS, B.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        5368: (ot, B, ie) => {
            "use strict";
            Object.defineProperty(B, "__esModule", {
                value: !0
            }), ie(9653).__exportStar(ie(4953), B)
        },
        9754: (ot, B, ie) => {
            "use strict";
            Object.defineProperty(B, "__esModule", {
                value: !0
            }), B.HeartBeat = void 0;
            const O = ie(9653),
                Ae = ie(2016),
                je = ie(5409),
                Le = ie(4083),
                ge = ie(5368);
            class $e extends Le.IHeartBeat {
                constructor(Oe) {
                    super(Oe), this.events = new Ae.EventEmitter, this.interval = ge.HEARTBEAT_INTERVAL, this.interval = Oe ? .interval || ge.HEARTBEAT_INTERVAL
                }
                static init(Oe) {
                    return O.__awaiter(this, void 0, void 0, function*() {
                        const se = new $e(Oe);
                        return yield se.init(), se
                    })
                }
                init() {
                    return O.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(Oe, se) {
                    this.events.on(Oe, se)
                }
                once(Oe, se) {
                    this.events.once(Oe, se)
                }
                off(Oe, se) {
                    this.events.off(Oe, se)
                }
                removeListener(Oe, se) {
                    this.events.removeListener(Oe, se)
                }
                initialize() {
                    return O.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), je.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(ge.HEARTBEAT_EVENTS.pulse)
                }
            }
            B.HeartBeat = $e
        },
        986: (ot, B, ie) => {
            "use strict";
            Object.defineProperty(B, "__esModule", {
                value: !0
            });
            const O = ie(9653);
            O.__exportStar(ie(9754), B), O.__exportStar(ie(4083), B), O.__exportStar(ie(5368), B)
        },
        7293: (ot, B, ie) => {
            "use strict";
            Object.defineProperty(B, "__esModule", {
                value: !0
            }), B.IHeartBeat = void 0;
            const O = ie(699);
            B.IHeartBeat = class Ae extends O.IEvents {
                constructor(Le) {
                    super()
                }
            }
        },
        4083: (ot, B, ie) => {
            "use strict";
            Object.defineProperty(B, "__esModule", {
                value: !0
            }), ie(9653).__exportStar(ie(7293), B)
        },
        6904: (ot, B) => {
            "use strict";
            Object.defineProperty(B, "__esModule", {
                value: !0
            }), B.PINO_CUSTOM_CONTEXT_KEY = B.PINO_LOGGER_DEFAULTS = void 0, B.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, B.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        2997: (ot, B, ie) => {
            "use strict";
            Object.defineProperty(B, "__esModule", {
                value: !0
            }), B.pino = void 0;
            const O = ie(7121),
                Ae = O.__importDefault(ie(1590));
            Object.defineProperty(B, "pino", {
                enumerable: !0,
                get: function() {
                    return Ae.default
                }
            }), O.__exportStar(ie(6904), B), O.__exportStar(ie(2723), B)
        },
        2723: (ot, B, ie) => {
            "use strict";
            Object.defineProperty(B, "__esModule", {
                value: !0
            }), B.generateChildLogger = B.formatChildLoggerContext = B.getLoggerContext = B.setBrowserLoggerContext = B.getBrowserLoggerContext = B.getDefaultLoggerOptions = void 0;
            const O = ie(6904);

            function je(Oe, se = O.PINO_CUSTOM_CONTEXT_KEY) {
                return Oe[se] || ""
            }

            function Le(Oe, se, q = O.PINO_CUSTOM_CONTEXT_KEY) {
                return Oe[q] = se, Oe
            }

            function ge(Oe, se = O.PINO_CUSTOM_CONTEXT_KEY) {
                let q = "";
                return q = typeof Oe.bindings > "u" ? je(Oe, se) : Oe.bindings().context || "", q
            }

            function $e(Oe, se, q = O.PINO_CUSTOM_CONTEXT_KEY) {
                const Pe = ge(Oe, q);
                return Pe.trim() ? `${Pe}/${se}` : se
            }
            B.getDefaultLoggerOptions = function Ae(Oe) {
                return Object.assign(Object.assign({}, Oe), {
                    level: Oe ? .level || O.PINO_LOGGER_DEFAULTS.level
                })
            }, B.getBrowserLoggerContext = je, B.setBrowserLoggerContext = Le, B.getLoggerContext = ge, B.formatChildLoggerContext = $e, B.generateChildLogger = function ke(Oe, se, q = O.PINO_CUSTOM_CONTEXT_KEY) {
                const Pe = $e(Oe, se, q);
                return Le(Oe.child({
                    context: Pe
                }), Pe, q)
            }
        },
        2768: () => {},
        960: (ot, B, ie) => {
            "use strict";
            const O = ie(8385),
                Ae = ie(4989),
                je = ie(6144),
                Le = ie(220),
                $e = Symbol("encodeFragmentIdentifier");

            function se(p) {
                if ("string" != typeof p || 1 !== p.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function q(p, _) {
                return _.encode ? _.strict ? O(p) : encodeURIComponent(p) : p
            }

            function Pe(p, _) {
                return _.decode ? Ae(p) : p
            }

            function Te(p) {
                return Array.isArray(p) ? p.sort() : "object" == typeof p ? Te(Object.keys(p)).sort((_, g) => Number(_) - Number(g)).map(_ => p[_]) : p
            }

            function Me(p) {
                const _ = p.indexOf("#");
                return -1 !== _ && (p = p.slice(0, _)), p
            }

            function We(p) {
                const _ = (p = Me(p)).indexOf("?");
                return -1 === _ ? "" : p.slice(_ + 1)
            }

            function He(p, _) {
                return _.parseNumbers && !Number.isNaN(Number(p)) && "string" == typeof p && "" !== p.trim() ? p = Number(p) : _.parseBooleans && null !== p && ("true" === p.toLowerCase() || "false" === p.toLowerCase()) && (p = "true" === p.toLowerCase()), p
            }

            function Xe(p, _) {
                se((_ = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, _)).arrayFormatSeparator);
                const g = function Oe(p) {
                        let _;
                        switch (p.arrayFormat) {
                            case "index":
                                return (g, b, S) => {
                                    _ = /\[(\d*)\]$/.exec(g), g = g.replace(/\[\d*\]$/, ""), _ ? (void 0 === S[g] && (S[g] = {}), S[g][_[1]] = b) : S[g] = b
                                };
                            case "bracket":
                                return (g, b, S) => {
                                    _ = /(\[\])$/.exec(g), S[g = g.replace(/\[\]$/, "")] = _ ? void 0 !== S[g] ? [].concat(S[g], b) : [b] : b
                                };
                            case "colon-list-separator":
                                return (g, b, S) => {
                                    _ = /(:list)$/.exec(g), S[g = g.replace(/:list$/, "")] = _ ? void 0 !== S[g] ? [].concat(S[g], b) : [b] : b
                                };
                            case "comma":
                            case "separator":
                                return (g, b, S) => {
                                    const k = "string" == typeof b && b.includes(p.arrayFormatSeparator),
                                        $ = "string" == typeof b && !k && Pe(b, p).includes(p.arrayFormatSeparator);
                                    b = $ ? Pe(b, p) : b;
                                    const y = k || $ ? b.split(p.arrayFormatSeparator).map(j => Pe(j, p)) : null === b ? b : Pe(b, p);
                                    S[g] = y
                                };
                            case "bracket-separator":
                                return (g, b, S) => {
                                    const k = /(\[\])$/.test(g);
                                    if (g = g.replace(/\[\]$/, ""), !k) return void(S[g] = b && Pe(b, p));
                                    const $ = null === b ? [] : b.split(p.arrayFormatSeparator).map(y => Pe(y, p));
                                    S[g] = void 0 !== S[g] ? [].concat(S[g], $) : $
                                };
                            default:
                                return (g, b, S) => {
                                    S[g] = void 0 !== S[g] ? [].concat(S[g], b) : b
                                }
                        }
                    }(_),
                    b = Object.create(null);
                if ("string" != typeof p || !(p = p.trim().replace(/^[?#&]/, ""))) return b;
                for (const S of p.split("&")) {
                    if ("" === S) continue;
                    let [k, $] = je(_.decode ? S.replace(/\+/g, " ") : S, "=");
                    $ = void 0 === $ ? null : ["comma", "separator", "bracket-separator"].includes(_.arrayFormat) ? $ : Pe($, _), g(Pe(k, _), $, b)
                }
                for (const S of Object.keys(b)) {
                    const k = b[S];
                    if ("object" == typeof k && null !== k)
                        for (const $ of Object.keys(k)) k[$] = He(k[$], _);
                    else b[S] = He(k, _)
                }
                return !1 === _.sort ? b : (!0 === _.sort ? Object.keys(b).sort() : Object.keys(b).sort(_.sort)).reduce((S, k) => {
                    const $ = b[k];
                    return S[k] = $ && "object" == typeof $ && !Array.isArray($) ? Te($) : $, S
                }, Object.create(null))
            }
            B.extract = We, B.parse = Xe, B.stringify = (p, _) => {
                if (!p) return "";
                se((_ = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, _)).arrayFormatSeparator);
                const g = $ => _.skipNull && (p => null == p)(p[$]) || _.skipEmptyString && "" === p[$],
                    b = function ke(p) {
                        switch (p.arrayFormat) {
                            case "index":
                                return _ => (g, b) => {
                                    const S = g.length;
                                    return void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, [q(_, p), "[", S, "]"].join("")] : [...g, [q(_, p), "[", q(S, p), "]=", q(b, p)].join("")]
                                };
                            case "bracket":
                                return _ => (g, b) => void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, [q(_, p), "[]"].join("")] : [...g, [q(_, p), "[]=", q(b, p)].join("")];
                            case "colon-list-separator":
                                return _ => (g, b) => void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, [q(_, p), ":list="].join("")] : [...g, [q(_, p), ":list=", q(b, p)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const _ = "bracket-separator" === p.arrayFormat ? "[]=" : "=";
                                    return g => (b, S) => void 0 === S || p.skipNull && null === S || p.skipEmptyString && "" === S ? b : (S = null === S ? "" : S, 0 === b.length ? [
                                        [q(g, p), _, q(S, p)].join("")
                                    ] : [
                                        [b, q(S, p)].join(p.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return _ => (g, b) => void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, q(_, p)] : [...g, [q(_, p), "=", q(b, p)].join("")]
                        }
                    }(_),
                    S = {};
                for (const $ of Object.keys(p)) g($) || (S[$] = p[$]);
                const k = Object.keys(S);
                return !1 !== _.sort && k.sort(_.sort), k.map($ => {
                    const y = p[$];
                    return void 0 === y ? "" : null === y ? q($, _) : Array.isArray(y) ? 0 === y.length && "bracket-separator" === _.arrayFormat ? q($, _) + "[]" : y.reduce(b($), []).join("&") : q($, _) + "=" + q(y, _)
                }).filter($ => $.length > 0).join("&")
            }, B.parseUrl = (p, _) => {
                _ = Object.assign({
                    decode: !0
                }, _);
                const [g, b] = je(p, "#");
                return Object.assign({
                    url: g.split("?")[0] || "",
                    query: Xe(We(p), _)
                }, _ && _.parseFragmentIdentifier && b ? {
                    fragmentIdentifier: Pe(b, _)
                } : {})
            }, B.stringifyUrl = (p, _) => {
                _ = Object.assign({
                    encode: !0,
                    strict: !0,
                    [$e]: !0
                }, _);
                const g = Me(p.url).split("?")[0] || "",
                    b = B.extract(p.url),
                    S = B.parse(b, {
                        sort: !1
                    }),
                    k = Object.assign(S, p.query);
                let $ = B.stringify(k, _);
                $ && ($ = `?${$}`);
                let y = function Ne(p) {
                    let _ = "";
                    const g = p.indexOf("#");
                    return -1 !== g && (_ = p.slice(g)), _
                }(p.url);
                return p.fragmentIdentifier && (y = `#${_[$e]?q(p.fragmentIdentifier,_):p.fragmentIdentifier}`), `${g}${$}${y}`
            }, B.pick = (p, _, g) => {
                g = Object.assign({
                    parseFragmentIdentifier: !0,
                    [$e]: !1
                }, g);
                const {
                    url: b,
                    query: S,
                    fragmentIdentifier: k
                } = B.parseUrl(p, g);
                return B.stringifyUrl({
                    url: b,
                    query: Le(S, _),
                    fragmentIdentifier: k
                }, g)
            }, B.exclude = (p, _, g) => {
                const b = Array.isArray(_) ? S => !_.includes(S) : (S, k) => !_(S, k);
                return B.pick(p, b, g)
            }
        },
        7803: (ot, B, ie) => {
            "use strict";
            const O = ie(8385),
                Ae = ie(4989),
                je = ie(6144),
                Le = ie(220),
                $e = Symbol("encodeFragmentIdentifier");

            function se(p) {
                if ("string" != typeof p || 1 !== p.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function q(p, _) {
                return _.encode ? _.strict ? O(p) : encodeURIComponent(p) : p
            }

            function Pe(p, _) {
                return _.decode ? Ae(p) : p
            }

            function Te(p) {
                return Array.isArray(p) ? p.sort() : "object" == typeof p ? Te(Object.keys(p)).sort((_, g) => Number(_) - Number(g)).map(_ => p[_]) : p
            }

            function Me(p) {
                const _ = p.indexOf("#");
                return -1 !== _ && (p = p.slice(0, _)), p
            }

            function We(p) {
                const _ = (p = Me(p)).indexOf("?");
                return -1 === _ ? "" : p.slice(_ + 1)
            }

            function He(p, _) {
                return _.parseNumbers && !Number.isNaN(Number(p)) && "string" == typeof p && "" !== p.trim() ? p = Number(p) : _.parseBooleans && null !== p && ("true" === p.toLowerCase() || "false" === p.toLowerCase()) && (p = "true" === p.toLowerCase()), p
            }

            function Xe(p, _) {
                se((_ = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, _)).arrayFormatSeparator);
                const g = function Oe(p) {
                        let _;
                        switch (p.arrayFormat) {
                            case "index":
                                return (g, b, S) => {
                                    _ = /\[(\d*)\]$/.exec(g), g = g.replace(/\[\d*\]$/, ""), _ ? (void 0 === S[g] && (S[g] = {}), S[g][_[1]] = b) : S[g] = b
                                };
                            case "bracket":
                                return (g, b, S) => {
                                    _ = /(\[\])$/.exec(g), S[g = g.replace(/\[\]$/, "")] = _ ? void 0 !== S[g] ? [].concat(S[g], b) : [b] : b
                                };
                            case "colon-list-separator":
                                return (g, b, S) => {
                                    _ = /(:list)$/.exec(g), S[g = g.replace(/:list$/, "")] = _ ? void 0 !== S[g] ? [].concat(S[g], b) : [b] : b
                                };
                            case "comma":
                            case "separator":
                                return (g, b, S) => {
                                    const k = "string" == typeof b && b.includes(p.arrayFormatSeparator),
                                        $ = "string" == typeof b && !k && Pe(b, p).includes(p.arrayFormatSeparator);
                                    b = $ ? Pe(b, p) : b;
                                    const y = k || $ ? b.split(p.arrayFormatSeparator).map(j => Pe(j, p)) : null === b ? b : Pe(b, p);
                                    S[g] = y
                                };
                            case "bracket-separator":
                                return (g, b, S) => {
                                    const k = /(\[\])$/.test(g);
                                    if (g = g.replace(/\[\]$/, ""), !k) return void(S[g] = b && Pe(b, p));
                                    const $ = null === b ? [] : b.split(p.arrayFormatSeparator).map(y => Pe(y, p));
                                    S[g] = void 0 !== S[g] ? [].concat(S[g], $) : $
                                };
                            default:
                                return (g, b, S) => {
                                    S[g] = void 0 !== S[g] ? [].concat(S[g], b) : b
                                }
                        }
                    }(_),
                    b = Object.create(null);
                if ("string" != typeof p || !(p = p.trim().replace(/^[?#&]/, ""))) return b;
                for (const S of p.split("&")) {
                    if ("" === S) continue;
                    let [k, $] = je(_.decode ? S.replace(/\+/g, " ") : S, "=");
                    $ = void 0 === $ ? null : ["comma", "separator", "bracket-separator"].includes(_.arrayFormat) ? $ : Pe($, _), g(Pe(k, _), $, b)
                }
                for (const S of Object.keys(b)) {
                    const k = b[S];
                    if ("object" == typeof k && null !== k)
                        for (const $ of Object.keys(k)) k[$] = He(k[$], _);
                    else b[S] = He(k, _)
                }
                return !1 === _.sort ? b : (!0 === _.sort ? Object.keys(b).sort() : Object.keys(b).sort(_.sort)).reduce((S, k) => {
                    const $ = b[k];
                    return S[k] = $ && "object" == typeof $ && !Array.isArray($) ? Te($) : $, S
                }, Object.create(null))
            }
            B.extract = We, B.parse = Xe, B.stringify = (p, _) => {
                if (!p) return "";
                se((_ = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, _)).arrayFormatSeparator);
                const g = $ => _.skipNull && (p => null == p)(p[$]) || _.skipEmptyString && "" === p[$],
                    b = function ke(p) {
                        switch (p.arrayFormat) {
                            case "index":
                                return _ => (g, b) => {
                                    const S = g.length;
                                    return void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, [q(_, p), "[", S, "]"].join("")] : [...g, [q(_, p), "[", q(S, p), "]=", q(b, p)].join("")]
                                };
                            case "bracket":
                                return _ => (g, b) => void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, [q(_, p), "[]"].join("")] : [...g, [q(_, p), "[]=", q(b, p)].join("")];
                            case "colon-list-separator":
                                return _ => (g, b) => void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, [q(_, p), ":list="].join("")] : [...g, [q(_, p), ":list=", q(b, p)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    const _ = "bracket-separator" === p.arrayFormat ? "[]=" : "=";
                                    return g => (b, S) => void 0 === S || p.skipNull && null === S || p.skipEmptyString && "" === S ? b : (S = null === S ? "" : S, 0 === b.length ? [
                                        [q(g, p), _, q(S, p)].join("")
                                    ] : [
                                        [b, q(S, p)].join(p.arrayFormatSeparator)
                                    ])
                                }
                            default:
                                return _ => (g, b) => void 0 === b || p.skipNull && null === b || p.skipEmptyString && "" === b ? g : null === b ? [...g, q(_, p)] : [...g, [q(_, p), "=", q(b, p)].join("")]
                        }
                    }(_),
                    S = {};
                for (const $ of Object.keys(p)) g($) || (S[$] = p[$]);
                const k = Object.keys(S);
                return !1 !== _.sort && k.sort(_.sort), k.map($ => {
                    const y = p[$];
                    return void 0 === y ? "" : null === y ? q($, _) : Array.isArray(y) ? 0 === y.length && "bracket-separator" === _.arrayFormat ? q($, _) + "[]" : y.reduce(b($), []).join("&") : q($, _) + "=" + q(y, _)
                }).filter($ => $.length > 0).join("&")
            }, B.parseUrl = (p, _) => {
                _ = Object.assign({
                    decode: !0
                }, _);
                const [g, b] = je(p, "#");
                return Object.assign({
                    url: g.split("?")[0] || "",
                    query: Xe(We(p), _)
                }, _ && _.parseFragmentIdentifier && b ? {
                    fragmentIdentifier: Pe(b, _)
                } : {})
            }, B.stringifyUrl = (p, _) => {
                _ = Object.assign({
                    encode: !0,
                    strict: !0,
                    [$e]: !0
                }, _);
                const g = Me(p.url).split("?")[0] || "",
                    b = B.extract(p.url),
                    S = B.parse(b, {
                        sort: !1
                    }),
                    k = Object.assign(S, p.query);
                let $ = B.stringify(k, _);
                $ && ($ = `?${$}`);
                let y = function Ne(p) {
                    let _ = "";
                    const g = p.indexOf("#");
                    return -1 !== g && (_ = p.slice(g)), _
                }(p.url);
                return p.fragmentIdentifier && (y = `#${_[$e]?q(p.fragmentIdentifier,_):p.fragmentIdentifier}`), `${g}${$}${y}`
            }, B.pick = (p, _, g) => {
                g = Object.assign({
                    parseFragmentIdentifier: !0,
                    [$e]: !1
                }, g);
                const {
                    url: b,
                    query: S,
                    fragmentIdentifier: k
                } = B.parseUrl(p, g);
                return B.stringifyUrl({
                    url: b,
                    query: Le(S, _),
                    fragmentIdentifier: k
                }, g)
            }, B.exclude = (p, _, g) => {
                const b = Array.isArray(_) ? S => !_.includes(S) : (S, k) => !_(S, k);
                return B.pick(p, b, g)
            }
        },
        2055: function(ot, B) {
            var je, ie = typeof self < "u" ? self : this,
                O = function() {
                    function je() {
                        this.fetch = !1, this.DOMException = ie.DOMException
                    }
                    return je.prototype = ie, new je
                }();
            je = O,
                function(ge) {
                    var $e_searchParams = "URLSearchParams" in je,
                        $e_iterable = "Symbol" in je && "iterator" in Symbol,
                        $e_blob = "FileReader" in je && "Blob" in je && function() {
                            try {
                                return new Blob, !0
                            } catch {
                                return !1
                            }
                        }(),
                        $e_formData = "FormData" in je,
                        $e_arrayBuffer = "ArrayBuffer" in je;
                    if ($e_arrayBuffer) var Oe = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        se = ArrayBuffer.isView || function(N) {
                            return N && Oe.indexOf(Object.prototype.toString.call(N)) > -1
                        };

                    function q(N) {
                        if ("string" != typeof N && (N = String(N)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(N)) throw new TypeError("Invalid character in header field name");
                        return N.toLowerCase()
                    }

                    function Pe(N) {
                        return "string" != typeof N && (N = String(N)), N
                    }

                    function Te(N) {
                        var x = {
                            next: function() {
                                var D = N.shift();
                                return {
                                    done: void 0 === D,
                                    value: D
                                }
                            }
                        };
                        return $e_iterable && (x[Symbol.iterator] = function() {
                            return x
                        }), x
                    }

                    function Me(N) {
                        this.map = {}, N instanceof Me ? N.forEach(function(x, D) {
                            this.append(D, x)
                        }, this) : Array.isArray(N) ? N.forEach(function(x) {
                            this.append(x[0], x[1])
                        }, this) : N && Object.getOwnPropertyNames(N).forEach(function(x) {
                            this.append(x, N[x])
                        }, this)
                    }

                    function Ne(N) {
                        if (N.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        N.bodyUsed = !0
                    }

                    function We(N) {
                        return new Promise(function(x, D) {
                            N.onload = function() {
                                x(N.result)
                            }, N.onerror = function() {
                                D(N.error)
                            }
                        })
                    }

                    function He(N) {
                        var x = new FileReader,
                            D = We(x);
                        return x.readAsArrayBuffer(N), D
                    }

                    function _(N) {
                        if (N.slice) return N.slice(0);
                        var x = new Uint8Array(N.byteLength);
                        return x.set(new Uint8Array(N)), x.buffer
                    }

                    function g() {
                        return this.bodyUsed = !1, this._initBody = function(N) {
                            this._bodyInit = N, N ? "string" == typeof N ? this._bodyText = N : $e_blob && Blob.prototype.isPrototypeOf(N) ? this._bodyBlob = N : $e_formData && FormData.prototype.isPrototypeOf(N) ? this._bodyFormData = N : $e_searchParams && URLSearchParams.prototype.isPrototypeOf(N) ? this._bodyText = N.toString() : $e_arrayBuffer && $e_blob && function ke(N) {
                                return N && DataView.prototype.isPrototypeOf(N)
                            }(N) ? (this._bodyArrayBuffer = _(N.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : $e_arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(N) || se(N)) ? this._bodyArrayBuffer = _(N) : this._bodyText = N = Object.prototype.toString.call(N) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof N ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : $e_searchParams && URLSearchParams.prototype.isPrototypeOf(N) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, $e_blob && (this.blob = function() {
                            var N = Ne(this);
                            if (N) return N;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? Ne(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(He)
                        }), this.text = function() {
                            var N = Ne(this);
                            if (N) return N;
                            if (this._bodyBlob) return function Xe(N) {
                                var x = new FileReader,
                                    D = We(x);
                                return x.readAsText(N), D
                            }(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(function p(N) {
                                for (var x = new Uint8Array(N), D = new Array(x.length), ce = 0; ce < x.length; ce++) D[ce] = String.fromCharCode(x[ce]);
                                return D.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, $e_formData && (this.formData = function() {
                            return this.text().then($)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    Me.prototype.append = function(N, x) {
                        N = q(N), x = Pe(x);
                        var D = this.map[N];
                        this.map[N] = D ? D + ", " + x : x
                    }, Me.prototype.delete = function(N) {
                        delete this.map[q(N)]
                    }, Me.prototype.get = function(N) {
                        return N = q(N), this.has(N) ? this.map[N] : null
                    }, Me.prototype.has = function(N) {
                        return this.map.hasOwnProperty(q(N))
                    }, Me.prototype.set = function(N, x) {
                        this.map[q(N)] = Pe(x)
                    }, Me.prototype.forEach = function(N, x) {
                        for (var D in this.map) this.map.hasOwnProperty(D) && N.call(x, this.map[D], D, this)
                    }, Me.prototype.keys = function() {
                        var N = [];
                        return this.forEach(function(x, D) {
                            N.push(D)
                        }), Te(N)
                    }, Me.prototype.values = function() {
                        var N = [];
                        return this.forEach(function(x) {
                            N.push(x)
                        }), Te(N)
                    }, Me.prototype.entries = function() {
                        var N = [];
                        return this.forEach(function(x, D) {
                            N.push([D, x])
                        }), Te(N)
                    }, $e_iterable && (Me.prototype[Symbol.iterator] = Me.prototype.entries);
                    var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function k(N, x) {
                        var D = (x = x || {}).body;
                        if (N instanceof k) {
                            if (N.bodyUsed) throw new TypeError("Already read");
                            this.url = N.url, this.credentials = N.credentials, x.headers || (this.headers = new Me(N.headers)), this.method = N.method, this.mode = N.mode, this.signal = N.signal, !D && null != N._bodyInit && (D = N._bodyInit, N.bodyUsed = !0)
                        } else this.url = String(N);
                        if (this.credentials = x.credentials || this.credentials || "same-origin", (x.headers || !this.headers) && (this.headers = new Me(x.headers)), this.method = function S(N) {
                                var x = N.toUpperCase();
                                return b.indexOf(x) > -1 ? x : N
                            }(x.method || this.method || "GET"), this.mode = x.mode || this.mode || null, this.signal = x.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && D) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(D)
                    }

                    function $(N) {
                        var x = new FormData;
                        return N.trim().split("&").forEach(function(D) {
                            if (D) {
                                var ce = D.split("="),
                                    De = ce.shift().replace(/\+/g, " "),
                                    H = ce.join("=").replace(/\+/g, " ");
                                x.append(decodeURIComponent(De), decodeURIComponent(H))
                            }
                        }), x
                    }

                    function y(N) {
                        var x = new Me;
                        return N.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(ce) {
                            var De = ce.split(":"),
                                H = De.shift().trim();
                            if (H) {
                                var _e = De.join(":").trim();
                                x.append(H, _e)
                            }
                        }), x
                    }

                    function j(N, x) {
                        x || (x = {}), this.type = "default", this.status = void 0 === x.status ? 200 : x.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in x ? x.statusText : "OK", this.headers = new Me(x.headers), this.url = x.url || "", this._initBody(N)
                    }
                    k.prototype.clone = function() {
                        return new k(this, {
                            body: this._bodyInit
                        })
                    }, g.call(k.prototype), g.call(j.prototype), j.prototype.clone = function() {
                        return new j(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new Me(this.headers),
                            url: this.url
                        })
                    }, j.error = function() {
                        var N = new j(null, {
                            status: 0,
                            statusText: ""
                        });
                        return N.type = "error", N
                    };
                    var T = [301, 302, 303, 307, 308];
                    j.redirect = function(N, x) {
                        if (-1 === T.indexOf(x)) throw new RangeError("Invalid status code");
                        return new j(null, {
                            status: x,
                            headers: {
                                location: N
                            }
                        })
                    }, ge.DOMException = je.DOMException;
                    try {
                        new ge.DOMException
                    } catch {
                        ge.DOMException = function(x, D) {
                            this.message = x, this.name = D;
                            var ce = Error(x);
                            this.stack = ce.stack
                        }, ge.DOMException.prototype = Object.create(Error.prototype), ge.DOMException.prototype.constructor = ge.DOMException
                    }

                    function z(N, x) {
                        return new Promise(function(D, ce) {
                            var De = new k(N, x);
                            if (De.signal && De.signal.aborted) return ce(new ge.DOMException("Aborted", "AbortError"));
                            var H = new XMLHttpRequest;

                            function _e() {
                                H.abort()
                            }
                            H.onload = function() {
                                var ve = {
                                    status: H.status,
                                    statusText: H.statusText,
                                    headers: y(H.getAllResponseHeaders() || "")
                                };
                                ve.url = "responseURL" in H ? H.responseURL : ve.headers.get("X-Request-URL"), D(new j("response" in H ? H.response : H.responseText, ve))
                            }, H.onerror = function() {
                                ce(new TypeError("Network request failed"))
                            }, H.ontimeout = function() {
                                ce(new TypeError("Network request failed"))
                            }, H.onabort = function() {
                                ce(new ge.DOMException("Aborted", "AbortError"))
                            }, H.open(De.method, De.url, !0), "include" === De.credentials ? H.withCredentials = !0 : "omit" === De.credentials && (H.withCredentials = !1), "responseType" in H && $e_blob && (H.responseType = "blob"), De.headers.forEach(function(ve, re) {
                                H.setRequestHeader(re, ve)
                            }), De.signal && (De.signal.addEventListener("abort", _e), H.onreadystatechange = function() {
                                4 === H.readyState && De.signal.removeEventListener("abort", _e)
                            }), H.send(typeof De._bodyInit > "u" ? null : De._bodyInit)
                        })
                    }
                    z.polyfill = !0, je.fetch || (je.fetch = z, je.Headers = Me, je.Request = k, je.Response = j), ge.Headers = Me, ge.Request = k, ge.Response = j, ge.fetch = z, Object.defineProperty(ge, "__esModule", {
                        value: !0
                    })
                }({}), O.fetch.ponyfill = !0, delete O.fetch.polyfill;
            var Ae = O;
            (B = Ae.fetch).default = Ae.fetch, B.fetch = Ae.fetch, B.Headers = Ae.Headers, B.Request = Ae.Request, B.Response = Ae.Response, ot.exports = B
        },
        2016: ot => {
            "use strict";
            var O, B = "object" == typeof Reflect ? Reflect : null,
                ie = B && "function" == typeof B.apply ? B.apply : function(g, b, S) {
                    return Function.prototype.apply.call(g, b, S)
                };
            O = B && "function" == typeof B.ownKeys ? B.ownKeys : Object.getOwnPropertySymbols ? function(g) {
                return Object.getOwnPropertyNames(g).concat(Object.getOwnPropertySymbols(g))
            } : function(g) {
                return Object.getOwnPropertyNames(g)
            };
            var je = Number.isNaN || function(g) {
                return g != g
            };

            function Le() {
                Le.init.call(this)
            }
            ot.exports = Le, ot.exports.once = function He(_, g) {
                return new Promise(function(b, S) {
                    function k(y) {
                        _.removeListener(g, $), S(y)
                    }

                    function $() {
                        "function" == typeof _.removeListener && _.removeListener("error", k), b([].slice.call(arguments))
                    }
                    p(_, g, $, {
                        once: !0
                    }), "error" !== g && function Xe(_, g, b) {
                        "function" == typeof _.on && p(_, "error", g, b)
                    }(_, k, {
                        once: !0
                    })
                })
            }, Le.EventEmitter = Le, Le.prototype._events = void 0, Le.prototype._eventsCount = 0, Le.prototype._maxListeners = void 0;
            var ge = 10;

            function $e(_) {
                if ("function" != typeof _) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof _)
            }

            function ke(_) {
                return void 0 === _._maxListeners ? Le.defaultMaxListeners : _._maxListeners
            }

            function Oe(_, g, b, S) {
                var k, $, y;
                if ($e(b), void 0 === ($ = _._events) ? ($ = _._events = Object.create(null), _._eventsCount = 0) : (void 0 !== $.newListener && (_.emit("newListener", g, b.listener ? b.listener : b), $ = _._events), y = $[g]), void 0 === y) y = $[g] = b, ++_._eventsCount;
                else if ("function" == typeof y ? y = $[g] = S ? [b, y] : [y, b] : S ? y.unshift(b) : y.push(b), (k = ke(_)) > 0 && y.length > k && !y.warned) {
                    y.warned = !0;
                    var j = new Error("Possible EventEmitter memory leak detected. " + y.length + " " + String(g) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    j.name = "MaxListenersExceededWarning", j.emitter = _, j.type = g, j.count = y.length,
                        function Ae(_) {
                            console && console.warn && console.warn(_)
                        }(j)
                }
                return _
            }

            function se() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function q(_, g, b) {
                var S = {
                        fired: !1,
                        wrapFn: void 0,
                        target: _,
                        type: g,
                        listener: b
                    },
                    k = se.bind(S);
                return k.listener = b, S.wrapFn = k, k
            }

            function Pe(_, g, b) {
                var S = _._events;
                if (void 0 === S) return [];
                var k = S[g];
                return void 0 === k ? [] : "function" == typeof k ? b ? [k.listener || k] : [k] : b ? function We(_) {
                    for (var g = new Array(_.length), b = 0; b < g.length; ++b) g[b] = _[b].listener || _[b];
                    return g
                }(k) : Me(k, k.length)
            }

            function Te(_) {
                var g = this._events;
                if (void 0 !== g) {
                    var b = g[_];
                    if ("function" == typeof b) return 1;
                    if (void 0 !== b) return b.length
                }
                return 0
            }

            function Me(_, g) {
                for (var b = new Array(g), S = 0; S < g; ++S) b[S] = _[S];
                return b
            }

            function p(_, g, b, S) {
                if ("function" == typeof _.on) S.once ? _.once(g, b) : _.on(g, b);
                else {
                    if ("function" != typeof _.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof _);
                    _.addEventListener(g, function k($) {
                        S.once && _.removeEventListener(g, k), b($)
                    })
                }
            }
            Object.defineProperty(Le, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return ge
                },
                set: function(_) {
                    if ("number" != typeof _ || _ < 0 || je(_)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + _ + ".");
                    ge = _
                }
            }), Le.init = function() {
                (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, Le.prototype.setMaxListeners = function(g) {
                if ("number" != typeof g || g < 0 || je(g)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + g + ".");
                return this._maxListeners = g, this
            }, Le.prototype.getMaxListeners = function() {
                return ke(this)
            }, Le.prototype.emit = function(g) {
                for (var b = [], S = 1; S < arguments.length; S++) b.push(arguments[S]);
                var k = "error" === g,
                    $ = this._events;
                if (void 0 !== $) k = k && void 0 === $.error;
                else if (!k) return !1;
                if (k) {
                    var y;
                    if (b.length > 0 && (y = b[0]), y instanceof Error) throw y;
                    var j = new Error("Unhandled error." + (y ? " (" + y.message + ")" : ""));
                    throw j.context = y, j
                }
                var T = $[g];
                if (void 0 === T) return !1;
                if ("function" == typeof T) ie(T, this, b);
                else {
                    var z = T.length,
                        N = Me(T, z);
                    for (S = 0; S < z; ++S) ie(N[S], this, b)
                }
                return !0
            }, Le.prototype.on = Le.prototype.addListener = function(g, b) {
                return Oe(this, g, b, !1)
            }, Le.prototype.prependListener = function(g, b) {
                return Oe(this, g, b, !0)
            }, Le.prototype.once = function(g, b) {
                return $e(b), this.on(g, q(this, g, b)), this
            }, Le.prototype.prependOnceListener = function(g, b) {
                return $e(b), this.prependListener(g, q(this, g, b)), this
            }, Le.prototype.off = Le.prototype.removeListener = function(g, b) {
                var S, k, $, y, j;
                if ($e(b), void 0 === (k = this._events)) return this;
                if (void 0 === (S = k[g])) return this;
                if (S === b || S.listener === b) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete k[g], k.removeListener && this.emit("removeListener", g, S.listener || b));
                else if ("function" != typeof S) {
                    for ($ = -1, y = S.length - 1; y >= 0; y--)
                        if (S[y] === b || S[y].listener === b) {
                            j = S[y].listener, $ = y;
                            break
                        }
                    if ($ < 0) return this;
                    0 === $ ? S.shift() : function Ne(_, g) {
                        for (; g + 1 < _.length; g++) _[g] = _[g + 1];
                        _.pop()
                    }(S, $), 1 === S.length && (k[g] = S[0]), void 0 !== k.removeListener && this.emit("removeListener", g, j || b)
                }
                return this
            }, Le.prototype.removeAllListeners = function(g) {
                var b, S, k;
                if (void 0 === (S = this._events)) return this;
                if (void 0 === S.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== S[g] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete S[g]), this;
                if (0 === arguments.length) {
                    var y, $ = Object.keys(S);
                    for (k = 0; k < $.length; ++k) "removeListener" !== (y = $[k]) && this.removeAllListeners(y);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(b = S[g])) this.removeListener(g, b);
                else if (void 0 !== b)
                    for (k = b.length - 1; k >= 0; k--) this.removeListener(g, b[k]);
                return this
            }, Le.prototype.listeners = function(g) {
                return Pe(this, g, !0)
            }, Le.prototype.rawListeners = function(g) {
                return Pe(this, g, !1)
            }, Le.listenerCount = function(_, g) {
                return "function" == typeof _.listenerCount ? _.listenerCount(g) : Te.call(_, g)
            }, Le.prototype.listenerCount = Te, Le.prototype.eventNames = function() {
                return this._eventsCount > 0 ? O(this._events) : []
            }
        },
        2650: (ot, B, ie) => {
            ot = ie.nmd(ot);
            var Ae = "__lodash_hash_undefined__",
                je = 1,
                Le = 2,
                ge = 9007199254740991,
                $e = "[object Arguments]",
                ke = "[object Array]",
                Oe = "[object AsyncFunction]",
                se = "[object Boolean]",
                q = "[object Date]",
                Pe = "[object Error]",
                Te = "[object Function]",
                Me = "[object GeneratorFunction]",
                Ne = "[object Map]",
                We = "[object Number]",
                He = "[object Null]",
                Xe = "[object Object]",
                p = "[object Promise]",
                _ = "[object Proxy]",
                g = "[object RegExp]",
                b = "[object Set]",
                S = "[object String]",
                $ = "[object Undefined]",
                y = "[object WeakMap]",
                j = "[object ArrayBuffer]",
                T = "[object DataView]",
                Qe = /^\[object .+?Constructor\]$/,
                ft = /^(?:0|[1-9]\d*)$/,
                et = {};
            et["[object Float32Array]"] = et["[object Float64Array]"] = et["[object Int8Array]"] = et["[object Int16Array]"] = et["[object Int32Array]"] = et["[object Uint8Array]"] = et["[object Uint8ClampedArray]"] = et["[object Uint16Array]"] = et["[object Uint32Array]"] = !0, et[$e] = et[ke] = et[j] = et[se] = et[T] = et[q] = et[Pe] = et[Te] = et[Ne] = et[We] = et[Xe] = et[g] = et[b] = et[S] = et[y] = !1;
            var $n = "object" == typeof global && global && global.Object === Object && global,
                Un = "object" == typeof self && self && self.Object === Object && self,
                Pt = $n || Un || Function("return this")(),
                ne = B && !B.nodeType && B,
                oe = ne && ot && !ot.nodeType && ot,
                ee = oe && oe.exports === ne,
                h = ee && $n.process,
                V = function() {
                    try {
                        return h && h.binding && h.binding("util")
                    } catch {}
                }(),
                ze = V && V.isTypedArray;

            function Ut(F, G) {
                for (var xe = -1, Ue = null == F ? 0 : F.length; ++xe < Ue;)
                    if (G(F[xe], xe, F)) return !0;
                return !1
            }

            function Qt(F, G) {
                return F.has(G)
            }

            function cr(F) {
                var G = -1,
                    xe = Array(F.size);
                return F.forEach(function(Ue, jt) {
                    xe[++G] = [jt, Ue]
                }), xe
            }

            function Yt(F) {
                var G = -1,
                    xe = Array(F.size);
                return F.forEach(function(Ue) {
                    xe[++G] = Ue
                }), xe
            }
            var F, Zt = Array.prototype,
                At = Object.prototype,
                Rt = Pt["__core-js_shared__"],
                Tt = Function.prototype.toString,
                xt = At.hasOwnProperty,
                vt = (F = /[^.]+$/.exec(Rt && Rt.keys && Rt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "",
                Xt = At.toString,
                Tr = RegExp("^" + Tt.call(xt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                xr = ee ? Pt.Buffer : void 0,
                lr = Pt.Symbol,
                Kr = Pt.Uint8Array,
                qr = At.propertyIsEnumerable,
                nn = Zt.splice,
                er = lr ? lr.toStringTag : void 0,
                zr = Object.getOwnPropertySymbols,
                Zr = xr ? xr.isBuffer : void 0,
                Vi = function ur(F, G) {
                    return function(xe) {
                        return F(G(xe))
                    }
                }(Object.keys, Object),
                ai = Ri(Pt, "DataView"),
                ci = Ri(Pt, "Map"),
                tr = Ri(Pt, "Promise"),
                Vt = Ri(Pt, "Set"),
                Gt = Ri(Pt, "WeakMap"),
                Mt = Ri(Object, "create"),
                fr = Qn(ai),
                dr = Qn(ci),
                hr = Qn(tr),
                ir = Qn(Vt),
                pr = Qn(Gt),
                Ct = lr ? lr.prototype : void 0,
                Wt = Ct ? Ct.valueOf : void 0;

            function Lt(F) {
                var G = -1,
                    xe = null == F ? 0 : F.length;
                for (this.clear(); ++G < xe;) {
                    var Ue = F[G];
                    this.set(Ue[0], Ue[1])
                }
            }

            function Wn(F) {
                var G = -1,
                    xe = null == F ? 0 : F.length;
                for (this.clear(); ++G < xe;) {
                    var Ue = F[G];
                    this.set(Ue[0], Ue[1])
                }
            }

            function Ni(F) {
                var G = -1,
                    xe = null == F ? 0 : F.length;
                for (this.clear(); ++G < xe;) {
                    var Ue = F[G];
                    this.set(Ue[0], Ue[1])
                }
            }

            function Xs(F) {
                var G = -1,
                    xe = null == F ? 0 : F.length;
                for (this.__data__ = new Ni; ++G < xe;) this.add(F[G])
            }

            function li(F) {
                var G = this.__data__ = new Wn(F);
                this.size = G.size
            }

            function _s(F, G) {
                for (var xe = F.length; xe--;)
                    if (na(F[xe][0], G)) return xe;
                return -1
            }

            function gs(F) {
                return null == F ? void 0 === F ? $ : He : er && er in Object(F) ? function Ai(F) {
                    var G = xt.call(F, er),
                        xe = F[er];
                    try {
                        F[er] = void 0;
                        var Ue = !0
                    } catch {}
                    var jt = Xt.call(F);
                    return Ue && (G ? F[er] = xe : delete F[er]), jt
                }(F) : function qc(F) {
                    return Xt.call(F)
                }(F)
            }

            function ea(F) {
                return vs(F) && gs(F) == $e
            }

            function ta(F, G, xe, Ue, jt) {
                return F === G || (null == F || null == G || !vs(F) && !vs(G) ? F != F && G != G : function Wf(F, G, xe, Ue, jt, it) {
                    var kt = sn(F),
                        or = sn(G),
                        ar = kt ? ke : Jn(F),
                        Kt = or ? ke : Jn(G),
                        Ur = (ar = ar == $e ? Xe : ar) == Xe,
                        on = (Kt = Kt == $e ? Xe : Kt) == Xe,
                        Or = ar == Kt;
                    if (Or && Ln(F)) {
                        if (!Ln(G)) return !1;
                        kt = !0, Ur = !1
                    }
                    if (Or && !Ur) return it || (it = new li), kt || Gi(F) ? to(F, G, xe, Ue, jt, it) : function Fc(F, G, xe, Ue, jt, it, kt) {
                        switch (xe) {
                            case T:
                                if (F.byteLength != G.byteLength || F.byteOffset != G.byteOffset) return !1;
                                F = F.buffer, G = G.buffer;
                            case j:
                                return !(F.byteLength != G.byteLength || !it(new Kr(F), new Kr(G)));
                            case se:
                            case q:
                            case We:
                                return na(+F, +G);
                            case Pe:
                                return F.name == G.name && F.message == G.message;
                            case g:
                            case S:
                                return F == G + "";
                            case Ne:
                                var or = cr;
                            case b:
                                if (or || (or = Yt), F.size != G.size && !(Ue & je)) return !1;
                                var Kt = kt.get(F);
                                if (Kt) return Kt == G;
                                Ue |= Le, kt.set(F, G);
                                var Ur = to(or(F), or(G), Ue, jt, it, kt);
                                return kt.delete(F), Ur;
                            case "[object Symbol]":
                                if (Wt) return Wt.call(F) == Wt.call(G)
                        }
                        return !1
                    }(F, G, ar, xe, Ue, jt, it);
                    if (!(xe & je)) {
                        var an = Ur && xt.call(F, "__wrapped__"),
                            cn = on && xt.call(G, "__wrapped__");
                        if (an || cn) {
                            var di = an ? F.value() : F,
                                Xn = cn ? G.value() : G;
                            return it || (it = new li), jt(di, Xn, xe, Ue, it)
                        }
                    }
                    return !!Or && (it || (it = new li), function Mc(F, G, xe, Ue, jt, it) {
                        var kt = xe & je,
                            or = ro(F),
                            ar = or.length;
                        if (ar != ro(G).length && !kt) return !1;
                        for (var on = ar; on--;) {
                            var Or = or[on];
                            if (!(kt ? Or in G : xt.call(G, Or))) return !1
                        }
                        var an = it.get(F);
                        if (an && it.get(G)) return an == G;
                        var cn = !0;
                        it.set(F, G), it.set(G, F);
                        for (var di = kt; ++on < ar;) {
                            var Xn = F[Or = or[on]],
                                Ti = G[Or];
                            if (Ue) var Hc = kt ? Ue(Ti, Xn, Or, G, F, it) : Ue(Xn, Ti, Or, F, G, it);
                            if (!(void 0 === Hc ? Xn === Ti || jt(Xn, Ti, xe, Ue, it) : Hc)) {
                                cn = !1;
                                break
                            }
                            di || (di = "constructor" == Or)
                        }
                        if (cn && !di) {
                            var io = F.constructor,
                                so = G.constructor;
                            io != so && "constructor" in F && "constructor" in G && !("function" == typeof io && io instanceof io && "function" == typeof so && so instanceof so) && (cn = !1)
                        }
                        return it.delete(F), it.delete(G), cn
                    }(F, G, xe, Ue, jt, it))
                }(F, G, xe, Ue, ta, jt))
            }

            function to(F, G, xe, Ue, jt, it) {
                var kt = xe & je,
                    or = F.length,
                    ar = G.length;
                if (or != ar && !(kt && ar > or)) return !1;
                var Kt = it.get(F);
                if (Kt && it.get(G)) return Kt == G;
                var Ur = -1,
                    on = !0,
                    Or = xe & Le ? new Xs : void 0;
                for (it.set(F, G), it.set(G, F); ++Ur < or;) {
                    var an = F[Ur],
                        cn = G[Ur];
                    if (Ue) var di = kt ? Ue(cn, an, Ur, G, F, it) : Ue(an, cn, Ur, F, G, it);
                    if (void 0 !== di) {
                        if (di) continue;
                        on = !1;
                        break
                    }
                    if (Or) {
                        if (!Ut(G, function(Xn, Ti) {
                                if (!Qt(Or, Ti) && (an === Xn || jt(an, Xn, xe, Ue, it))) return Or.push(Ti)
                            })) {
                            on = !1;
                            break
                        }
                    } else if (an !== cn && !jt(an, cn, xe, Ue, it)) {
                        on = !1;
                        break
                    }
                }
                return it.delete(F), it.delete(G), on
            }

            function ro(F) {
                return function Dc(F, G, xe) {
                    var Ue = G(F);
                    return sn(F) ? Ue : function yt(F, G) {
                        for (var xe = -1, Ue = G.length, jt = F.length; ++xe < Ue;) F[jt + xe] = G[xe];
                        return F
                    }(Ue, xe(F))
                }(F, Zc, kc)
            }

            function ys(F, G) {
                var xe = F.__data__;
                return function Jf(F) {
                    var G = typeof F;
                    return "string" == G || "number" == G || "symbol" == G || "boolean" == G ? "__proto__" !== F : null === F
                }(G) ? xe["string" == typeof G ? "string" : "hash"] : xe.map
            }

            function Ri(F, G) {
                var xe = function Ir(F, G) {
                    return F ? .[G]
                }(F, G);
                return function $c(F) {
                    return !(!ms(F) || function Qf(F) {
                        return !!vt && vt in F
                    }(F)) && (Yn(F) ? Tr : Qe).test(Qn(F))
                }(xe) ? xe : void 0
            }
            Lt.prototype.clear = function _r() {
                this.__data__ = Mt ? Mt(null) : {}, this.size = 0
            }, Lt.prototype.delete = function gr(F) {
                var G = this.has(F) && delete this.__data__[F];
                return this.size -= G ? 1 : 0, G
            }, Lt.prototype.get = function yr(F) {
                var G = this.__data__;
                if (Mt) {
                    var xe = G[F];
                    return xe === Ae ? void 0 : xe
                }
                return xt.call(G, F) ? G[F] : void 0
            }, Lt.prototype.has = function sr(F) {
                var G = this.__data__;
                return Mt ? void 0 !== G[F] : xt.call(G, F)
            }, Lt.prototype.set = function kf(F, G) {
                var xe = this.__data__;
                return this.size += this.has(F) ? 0 : 1, xe[F] = Mt && void 0 === G ? Ae : G, this
            }, Wn.prototype.clear = function Kf() {
                this.__data__ = [], this.size = 0
            }, Wn.prototype.delete = function Qo(F) {
                var G = this.__data__,
                    xe = _s(G, F);
                return !(xe < 0 || (xe == G.length - 1 ? G.pop() : nn.call(G, xe, 1), --this.size, 0))
            }, Wn.prototype.get = function qf(F) {
                var G = this.__data__,
                    xe = _s(G, F);
                return xe < 0 ? void 0 : G[xe][1]
            }, Wn.prototype.has = function zf(F) {
                return _s(this.__data__, F) > -1
            }, Wn.prototype.set = function Zf(F, G) {
                var xe = this.__data__,
                    Ue = _s(xe, F);
                return Ue < 0 ? (++this.size, xe.push([F, G])) : xe[Ue][1] = G, this
            }, Ni.prototype.clear = function Hf() {
                this.size = 0, this.__data__ = {
                    hash: new Lt,
                    map: new(ci || Wn),
                    string: new Lt
                }
            }, Ni.prototype.delete = function Bf(F) {
                var G = ys(this, F).delete(F);
                return this.size -= G ? 1 : 0, G
            }, Ni.prototype.get = function ui(F) {
                return ys(this, F).get(F)
            }, Ni.prototype.has = function Vf(F) {
                return ys(this, F).has(F)
            }, Ni.prototype.set = function Ys(F, G) {
                var xe = ys(this, F),
                    Ue = xe.size;
                return xe.set(F, G), this.size += xe.size == Ue ? 0 : 1, this
            }, Xs.prototype.add = Xs.prototype.push = function eo(F) {
                return this.__data__.set(F, Ae), this
            }, Xs.prototype.has = function Ac(F) {
                return this.__data__.has(F)
            }, li.prototype.clear = function Gf() {
                this.__data__ = new Wn, this.size = 0
            }, li.prototype.delete = function Tc(F) {
                var G = this.__data__,
                    xe = G.delete(F);
                return this.size = G.size, xe
            }, li.prototype.get = function Yo(F) {
                return this.__data__.get(F)
            }, li.prototype.has = function Cc(F) {
                return this.__data__.has(F)
            }, li.prototype.set = function jc(F, G) {
                var xe = this.__data__;
                if (xe instanceof Wn) {
                    var Ue = xe.__data__;
                    if (!ci || Ue.length < 199) return Ue.push([F, G]), this.size = ++xe.size, this;
                    xe = this.__data__ = new Ni(Ue)
                }
                return xe.set(F, G), this.size = xe.size, this
            };
            var kc = zr ? function(F) {
                    return null == F ? [] : (F = Object(F), function rt(F, G) {
                        for (var xe = -1, Ue = null == F ? 0 : F.length, jt = 0, it = []; ++xe < Ue;) {
                            var kt = F[xe];
                            G(kt, xe, F) && (it[jt++] = kt)
                        }
                        return it
                    }(zr(F), function(G) {
                        return qr.call(F, G)
                    }))
                } : function Yf() {
                    return []
                },
                Jn = gs;

            function Kc(F, G) {
                return !!(G = G ? ? ge) && ("number" == typeof F || ft.test(F)) && F > -1 && F % 1 == 0 && F < G
            }

            function Qn(F) {
                if (null != F) {
                    try {
                        return Tt.call(F)
                    } catch {}
                    try {
                        return F + ""
                    } catch {}
                }
                return ""
            }

            function na(F, G) {
                return F === G || F != F && G != G
            }(ai && Jn(new ai(new ArrayBuffer(1))) != T || ci && Jn(new ci) != Ne || tr && Jn(tr.resolve()) != p || Vt && Jn(new Vt) != b || Gt && Jn(new Gt) != y) && (Jn = function(F) {
                var G = gs(F),
                    xe = G == Xe ? F.constructor : void 0,
                    Ue = xe ? Qn(xe) : "";
                if (Ue) switch (Ue) {
                    case fr:
                        return T;
                    case dr:
                        return Ne;
                    case hr:
                        return p;
                    case ir:
                        return b;
                    case pr:
                        return y
                }
                return G
            });
            var zc = ea(function() {
                    return arguments
                }()) ? ea : function(F) {
                    return vs(F) && xt.call(F, "callee") && !qr.call(F, "callee")
                },
                sn = Array.isArray,
                Ln = Zr || function Xf() {
                    return !1
                };

            function Yn(F) {
                if (!ms(F)) return !1;
                var G = gs(F);
                return G == Te || G == Me || G == Oe || G == _
            }

            function $r(F) {
                return "number" == typeof F && F > -1 && F % 1 == 0 && F <= ge
            }

            function ms(F) {
                var G = typeof F;
                return null != F && ("object" == G || "function" == G)
            }

            function vs(F) {
                return null != F && "object" == typeof F
            }
            var Gi = ze ? function Nt(F) {
                return function(G) {
                    return F(G)
                }
            }(ze) : function Uc(F) {
                return vs(F) && $r(F.length) && !!et[gs(F)]
            };

            function Zc(F) {
                return function fi(F) {
                    return null != F && $r(F.length) && !Yn(F)
                }(F) ? function Xo(F, G) {
                    var xe = sn(F),
                        Ue = !xe && zc(F),
                        jt = !xe && !Ue && Ln(F),
                        it = !xe && !Ue && !jt && Gi(F),
                        kt = xe || Ue || jt || it,
                        or = kt ? function Et(F, G) {
                            for (var xe = -1, Ue = Array(F); ++xe < F;) Ue[xe] = G(xe);
                            return Ue
                        }(F.length, String) : [],
                        ar = or.length;
                    for (var Kt in F)(G || xt.call(F, Kt)) && (!kt || !("length" == Kt || jt && ("offset" == Kt || "parent" == Kt) || it && ("buffer" == Kt || "byteLength" == Kt || "byteOffset" == Kt) || Kc(Kt, ar))) && or.push(Kt);
                    return or
                }(F) : function Lc(F) {
                    if (! function ra(F) {
                            var G = F && F.constructor;
                            return F === ("function" == typeof G && G.prototype || At)
                        }(F)) return Vi(F);
                    var G = [];
                    for (var xe in Object(F)) xt.call(F, xe) && "constructor" != xe && G.push(xe);
                    return G
                }(F)
            }
            ot.exports = function no(F, G) {
                return ta(F, G)
            }
        },
        514: ot => {
            "use strict";

            function B(O) {
                try {
                    return JSON.stringify(O)
                } catch {
                    return '"[Circular]"'
                }
            }
            ot.exports = function ie(O, Ae, je) {
                var Le = je && je.stringify || B;
                if ("object" == typeof O && null !== O) {
                    var $e = Ae.length + 1;
                    if (1 === $e) return O;
                    var ke = new Array($e);
                    ke[0] = Le(O);
                    for (var Oe = 1; Oe < $e; Oe++) ke[Oe] = Le(Ae[Oe]);
                    return ke.join(" ")
                }
                if ("string" != typeof O) return O;
                var se = Ae.length;
                if (0 === se) return O;
                for (var q = "", Pe = 0, Te = -1, Me = O && O.length || 0, Ne = 0; Ne < Me;) {
                    if (37 === O.charCodeAt(Ne) && Ne + 1 < Me) {
                        switch (Te = Te > -1 ? Te : 0, O.charCodeAt(Ne + 1)) {
                            case 100:
                            case 102:
                                if (Pe >= se || null == Ae[Pe]) break;
                                Te < Ne && (q += O.slice(Te, Ne)), q += Number(Ae[Pe]), Te = Ne + 2, Ne++;
                                break;
                            case 105:
                                if (Pe >= se || null == Ae[Pe]) break;
                                Te < Ne && (q += O.slice(Te, Ne)), q += Math.floor(Number(Ae[Pe])), Te = Ne + 2, Ne++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (Pe >= se || void 0 === Ae[Pe]) break;
                                Te < Ne && (q += O.slice(Te, Ne));
                                var We = typeof Ae[Pe];
                                if ("string" === We) {
                                    q += "'" + Ae[Pe] + "'", Te = Ne + 2, Ne++;
                                    break
                                }
                                if ("function" === We) {
                                    q += Ae[Pe].name || "<anonymous>", Te = Ne + 2, Ne++;
                                    break
                                }
                                q += Le(Ae[Pe]), Te = Ne + 2, Ne++;
                                break;
                            case 115:
                                if (Pe >= se) break;
                                Te < Ne && (q += O.slice(Te, Ne)), q += String(Ae[Pe]), Te = Ne + 2, Ne++;
                                break;
                            case 37:
                                Te < Ne && (q += O.slice(Te, Ne)), q += "%", Te = Ne + 2, Ne++, Pe--
                        }++Pe
                    }++Ne
                }
                return -1 === Te ? O : (Te < Me && (q += O.slice(Te)), q)
            }
        },
        3569: ot => {
            "use strict";
            ot.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        4308: (ot, B, ie) => {
            "use strict";
            ie.r(B), ie.d(B, {
                __assign: () => je,
                __asyncDelegator: () => p,
                __asyncGenerator: () => Xe,
                __asyncValues: () => _,
                __await: () => He,
                __awaiter: () => Oe,
                __classPrivateFieldGet: () => k,
                __classPrivateFieldSet: () => $,
                __createBinding: () => q,
                __decorate: () => ge,
                __exportStar: () => Pe,
                __extends: () => Ae,
                __generator: () => se,
                __importDefault: () => S,
                __importStar: () => b,
                __makeTemplateObject: () => g,
                __metadata: () => ke,
                __param: () => $e,
                __read: () => Me,
                __rest: () => Le,
                __spread: () => Ne,
                __spreadArrays: () => We,
                __values: () => Te
            });
            var O = function(y, j) {
                return (O = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(T, z) {
                        T.__proto__ = z
                    } || function(T, z) {
                        for (var N in z) z.hasOwnProperty(N) && (T[N] = z[N])
                    })(y, j)
            };

            function Ae(y, j) {
                function T() {
                    this.constructor = y
                }
                O(y, j), y.prototype = null === j ? Object.create(j) : (T.prototype = j.prototype, new T)
            }
            var je = function() {
                return je = Object.assign || function(j) {
                    for (var T, z = 1, N = arguments.length; z < N; z++)
                        for (var x in T = arguments[z]) Object.prototype.hasOwnProperty.call(T, x) && (j[x] = T[x]);
                    return j
                }, je.apply(this, arguments)
            };

            function Le(y, j) {
                var T = {};
                for (var z in y) Object.prototype.hasOwnProperty.call(y, z) && j.indexOf(z) < 0 && (T[z] = y[z]);
                if (null != y && "function" == typeof Object.getOwnPropertySymbols) {
                    var N = 0;
                    for (z = Object.getOwnPropertySymbols(y); N < z.length; N++) j.indexOf(z[N]) < 0 && Object.prototype.propertyIsEnumerable.call(y, z[N]) && (T[z[N]] = y[z[N]])
                }
                return T
            }

            function ge(y, j, T, z) {
                var D, N = arguments.length,
                    x = N < 3 ? j : null === z ? z = Object.getOwnPropertyDescriptor(j, T) : z;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) x = Reflect.decorate(y, j, T, z);
                else
                    for (var ce = y.length - 1; ce >= 0; ce--)(D = y[ce]) && (x = (N < 3 ? D(x) : N > 3 ? D(j, T, x) : D(j, T)) || x);
                return N > 3 && x && Object.defineProperty(j, T, x), x
            }

            function $e(y, j) {
                return function(T, z) {
                    j(T, z, y)
                }
            }

            function ke(y, j) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(y, j)
            }

            function Oe(y, j, T, z) {
                return new(T || (T = Promise))(function(x, D) {
                    function ce(_e) {
                        try {
                            H(z.next(_e))
                        } catch (ve) {
                            D(ve)
                        }
                    }

                    function De(_e) {
                        try {
                            H(z.throw(_e))
                        } catch (ve) {
                            D(ve)
                        }
                    }

                    function H(_e) {
                        _e.done ? x(_e.value) : function N(x) {
                            return x instanceof T ? x : new T(function(D) {
                                D(x)
                            })
                        }(_e.value).then(ce, De)
                    }
                    H((z = z.apply(y, j || [])).next())
                })
            }

            function se(y, j) {
                var z, N, x, D, T = {
                    label: 0,
                    sent: function() {
                        if (1 & x[0]) throw x[1];
                        return x[1]
                    },
                    trys: [],
                    ops: []
                };
                return D = {
                    next: ce(0),
                    throw: ce(1),
                    return: ce(2)
                }, "function" == typeof Symbol && (D[Symbol.iterator] = function() {
                    return this
                }), D;

                function ce(H) {
                    return function(_e) {
                        return function De(H) {
                            if (z) throw new TypeError("Generator is already executing.");
                            for (; T;) try {
                                if (z = 1, N && (x = 2 & H[0] ? N.return : H[0] ? N.throw || ((x = N.return) && x.call(N), 0) : N.next) && !(x = x.call(N, H[1])).done) return x;
                                switch (N = 0, x && (H = [2 & H[0], x.value]), H[0]) {
                                    case 0:
                                    case 1:
                                        x = H;
                                        break;
                                    case 4:
                                        return T.label++, {
                                            value: H[1],
                                            done: !1
                                        };
                                    case 5:
                                        T.label++, N = H[1], H = [0];
                                        continue;
                                    case 7:
                                        H = T.ops.pop(), T.trys.pop();
                                        continue;
                                    default:
                                        if (!(x = (x = T.trys).length > 0 && x[x.length - 1]) && (6 === H[0] || 2 === H[0])) {
                                            T = 0;
                                            continue
                                        }
                                        if (3 === H[0] && (!x || H[1] > x[0] && H[1] < x[3])) {
                                            T.label = H[1];
                                            break
                                        }
                                        if (6 === H[0] && T.label < x[1]) {
                                            T.label = x[1], x = H;
                                            break
                                        }
                                        if (x && T.label < x[2]) {
                                            T.label = x[2], T.ops.push(H);
                                            break
                                        }
                                        x[2] && T.ops.pop(), T.trys.pop();
                                        continue
                                }
                                H = j.call(y, T)
                            } catch (_e) {
                                H = [6, _e], N = 0
                            } finally {
                                z = x = 0
                            }
                            if (5 & H[0]) throw H[1];
                            return {
                                value: H[0] ? H[1] : void 0,
                                done: !0
                            }
                        }([H, _e])
                    }
                }
            }

            function q(y, j, T, z) {
                void 0 === z && (z = T), y[z] = j[T]
            }

            function Pe(y, j) {
                for (var T in y) "default" !== T && !j.hasOwnProperty(T) && (j[T] = y[T])
            }

            function Te(y) {
                var j = "function" == typeof Symbol && Symbol.iterator,
                    T = j && y[j],
                    z = 0;
                if (T) return T.call(y);
                if (y && "number" == typeof y.length) return {
                    next: function() {
                        return y && z >= y.length && (y = void 0), {
                            value: y && y[z++],
                            done: !y
                        }
                    }
                };
                throw new TypeError(j ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function Me(y, j) {
                var T = "function" == typeof Symbol && y[Symbol.iterator];
                if (!T) return y;
                var N, D, z = T.call(y),
                    x = [];
                try {
                    for (;
                        (void 0 === j || j-- > 0) && !(N = z.next()).done;) x.push(N.value)
                } catch (ce) {
                    D = {
                        error: ce
                    }
                } finally {
                    try {
                        N && !N.done && (T = z.return) && T.call(z)
                    } finally {
                        if (D) throw D.error
                    }
                }
                return x
            }

            function Ne() {
                for (var y = [], j = 0; j < arguments.length; j++) y = y.concat(Me(arguments[j]));
                return y
            }

            function We() {
                for (var y = 0, j = 0, T = arguments.length; j < T; j++) y += arguments[j].length;
                var z = Array(y),
                    N = 0;
                for (j = 0; j < T; j++)
                    for (var x = arguments[j], D = 0, ce = x.length; D < ce; D++, N++) z[N] = x[D];
                return z
            }

            function He(y) {
                return this instanceof He ? (this.v = y, this) : new He(y)
            }

            function Xe(y, j, T) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var N, z = T.apply(y, j || []),
                    x = [];
                return N = {}, D("next"), D("throw"), D("return"), N[Symbol.asyncIterator] = function() {
                    return this
                }, N;

                function D(re) {
                    z[re] && (N[re] = function(Qe) {
                        return new Promise(function(ft, et) {
                            x.push([re, Qe, ft, et]) > 1 || ce(re, Qe)
                        })
                    })
                }

                function ce(re, Qe) {
                    try {
                        ! function De(re) {
                            re.value instanceof He ? Promise.resolve(re.value.v).then(H, _e) : ve(x[0][2], re)
                        }(z[re](Qe))
                    } catch (ft) {
                        ve(x[0][3], ft)
                    }
                }

                function H(re) {
                    ce("next", re)
                }

                function _e(re) {
                    ce("throw", re)
                }

                function ve(re, Qe) {
                    re(Qe), x.shift(), x.length && ce(x[0][0], x[0][1])
                }
            }

            function p(y) {
                var j, T;
                return j = {}, z("next"), z("throw", function(N) {
                    throw N
                }), z("return"), j[Symbol.iterator] = function() {
                    return this
                }, j;

                function z(N, x) {
                    j[N] = y[N] ? function(D) {
                        return (T = !T) ? {
                            value: He(y[N](D)),
                            done: "return" === N
                        } : x ? x(D) : D
                    } : x
                }
            }

            function _(y) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var T, j = y[Symbol.asyncIterator];
                return j ? j.call(y) : (y = Te(y), T = {}, z("next"), z("throw"), z("return"), T[Symbol.asyncIterator] = function() {
                    return this
                }, T);

                function z(x) {
                    T[x] = y[x] && function(D) {
                        return new Promise(function(ce, De) {
                            ! function N(x, D, ce, De) {
                                Promise.resolve(De).then(function(H) {
                                    x({
                                        value: H,
                                        done: ce
                                    })
                                }, D)
                            }(ce, De, (D = y[x](D)).done, D.value)
                        })
                    }
                }
            }

            function g(y, j) {
                return Object.defineProperty ? Object.defineProperty(y, "raw", {
                    value: j
                }) : y.raw = j, y
            }

            function b(y) {
                if (y && y.__esModule) return y;
                var j = {};
                if (null != y)
                    for (var T in y) Object.hasOwnProperty.call(y, T) && (j[T] = y[T]);
                return j.default = y, j
            }

            function S(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }

            function k(y, j) {
                if (!j.has(y)) throw new TypeError("attempted to get private field on non-instance");
                return j.get(y)
            }

            function $(y, j, T) {
                if (!j.has(y)) throw new TypeError("attempted to set private field on non-instance");
                return j.set(y, T), T
            }
        },
        9653: (ot, B, ie) => {
            "use strict";
            ie.r(B), ie.d(B, {
                __assign: () => je,
                __asyncDelegator: () => p,
                __asyncGenerator: () => Xe,
                __asyncValues: () => _,
                __await: () => He,
                __awaiter: () => Oe,
                __classPrivateFieldGet: () => k,
                __classPrivateFieldSet: () => $,
                __createBinding: () => q,
                __decorate: () => ge,
                __exportStar: () => Pe,
                __extends: () => Ae,
                __generator: () => se,
                __importDefault: () => S,
                __importStar: () => b,
                __makeTemplateObject: () => g,
                __metadata: () => ke,
                __param: () => $e,
                __read: () => Me,
                __rest: () => Le,
                __spread: () => Ne,
                __spreadArrays: () => We,
                __values: () => Te
            });
            var O = function(y, j) {
                return (O = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(T, z) {
                        T.__proto__ = z
                    } || function(T, z) {
                        for (var N in z) z.hasOwnProperty(N) && (T[N] = z[N])
                    })(y, j)
            };

            function Ae(y, j) {
                function T() {
                    this.constructor = y
                }
                O(y, j), y.prototype = null === j ? Object.create(j) : (T.prototype = j.prototype, new T)
            }
            var je = function() {
                return je = Object.assign || function(j) {
                    for (var T, z = 1, N = arguments.length; z < N; z++)
                        for (var x in T = arguments[z]) Object.prototype.hasOwnProperty.call(T, x) && (j[x] = T[x]);
                    return j
                }, je.apply(this, arguments)
            };

            function Le(y, j) {
                var T = {};
                for (var z in y) Object.prototype.hasOwnProperty.call(y, z) && j.indexOf(z) < 0 && (T[z] = y[z]);
                if (null != y && "function" == typeof Object.getOwnPropertySymbols) {
                    var N = 0;
                    for (z = Object.getOwnPropertySymbols(y); N < z.length; N++) j.indexOf(z[N]) < 0 && Object.prototype.propertyIsEnumerable.call(y, z[N]) && (T[z[N]] = y[z[N]])
                }
                return T
            }

            function ge(y, j, T, z) {
                var D, N = arguments.length,
                    x = N < 3 ? j : null === z ? z = Object.getOwnPropertyDescriptor(j, T) : z;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) x = Reflect.decorate(y, j, T, z);
                else
                    for (var ce = y.length - 1; ce >= 0; ce--)(D = y[ce]) && (x = (N < 3 ? D(x) : N > 3 ? D(j, T, x) : D(j, T)) || x);
                return N > 3 && x && Object.defineProperty(j, T, x), x
            }

            function $e(y, j) {
                return function(T, z) {
                    j(T, z, y)
                }
            }

            function ke(y, j) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(y, j)
            }

            function Oe(y, j, T, z) {
                return new(T || (T = Promise))(function(x, D) {
                    function ce(_e) {
                        try {
                            H(z.next(_e))
                        } catch (ve) {
                            D(ve)
                        }
                    }

                    function De(_e) {
                        try {
                            H(z.throw(_e))
                        } catch (ve) {
                            D(ve)
                        }
                    }

                    function H(_e) {
                        _e.done ? x(_e.value) : function N(x) {
                            return x instanceof T ? x : new T(function(D) {
                                D(x)
                            })
                        }(_e.value).then(ce, De)
                    }
                    H((z = z.apply(y, j || [])).next())
                })
            }

            function se(y, j) {
                var z, N, x, D, T = {
                    label: 0,
                    sent: function() {
                        if (1 & x[0]) throw x[1];
                        return x[1]
                    },
                    trys: [],
                    ops: []
                };
                return D = {
                    next: ce(0),
                    throw: ce(1),
                    return: ce(2)
                }, "function" == typeof Symbol && (D[Symbol.iterator] = function() {
                    return this
                }), D;

                function ce(H) {
                    return function(_e) {
                        return function De(H) {
                            if (z) throw new TypeError("Generator is already executing.");
                            for (; T;) try {
                                if (z = 1, N && (x = 2 & H[0] ? N.return : H[0] ? N.throw || ((x = N.return) && x.call(N), 0) : N.next) && !(x = x.call(N, H[1])).done) return x;
                                switch (N = 0, x && (H = [2 & H[0], x.value]), H[0]) {
                                    case 0:
                                    case 1:
                                        x = H;
                                        break;
                                    case 4:
                                        return T.label++, {
                                            value: H[1],
                                            done: !1
                                        };
                                    case 5:
                                        T.label++, N = H[1], H = [0];
                                        continue;
                                    case 7:
                                        H = T.ops.pop(), T.trys.pop();
                                        continue;
                                    default:
                                        if (!(x = (x = T.trys).length > 0 && x[x.length - 1]) && (6 === H[0] || 2 === H[0])) {
                                            T = 0;
                                            continue
                                        }
                                        if (3 === H[0] && (!x || H[1] > x[0] && H[1] < x[3])) {
                                            T.label = H[1];
                                            break
                                        }
                                        if (6 === H[0] && T.label < x[1]) {
                                            T.label = x[1], x = H;
                                            break
                                        }
                                        if (x && T.label < x[2]) {
                                            T.label = x[2], T.ops.push(H);
                                            break
                                        }
                                        x[2] && T.ops.pop(), T.trys.pop();
                                        continue
                                }
                                H = j.call(y, T)
                            } catch (_e) {
                                H = [6, _e], N = 0
                            } finally {
                                z = x = 0
                            }
                            if (5 & H[0]) throw H[1];
                            return {
                                value: H[0] ? H[1] : void 0,
                                done: !0
                            }
                        }([H, _e])
                    }
                }
            }

            function q(y, j, T, z) {
                void 0 === z && (z = T), y[z] = j[T]
            }

            function Pe(y, j) {
                for (var T in y) "default" !== T && !j.hasOwnProperty(T) && (j[T] = y[T])
            }

            function Te(y) {
                var j = "function" == typeof Symbol && Symbol.iterator,
                    T = j && y[j],
                    z = 0;
                if (T) return T.call(y);
                if (y && "number" == typeof y.length) return {
                    next: function() {
                        return y && z >= y.length && (y = void 0), {
                            value: y && y[z++],
                            done: !y
                        }
                    }
                };
                throw new TypeError(j ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function Me(y, j) {
                var T = "function" == typeof Symbol && y[Symbol.iterator];
                if (!T) return y;
                var N, D, z = T.call(y),
                    x = [];
                try {
                    for (;
                        (void 0 === j || j-- > 0) && !(N = z.next()).done;) x.push(N.value)
                } catch (ce) {
                    D = {
                        error: ce
                    }
                } finally {
                    try {
                        N && !N.done && (T = z.return) && T.call(z)
                    } finally {
                        if (D) throw D.error
                    }
                }
                return x
            }

            function Ne() {
                for (var y = [], j = 0; j < arguments.length; j++) y = y.concat(Me(arguments[j]));
                return y
            }

            function We() {
                for (var y = 0, j = 0, T = arguments.length; j < T; j++) y += arguments[j].length;
                var z = Array(y),
                    N = 0;
                for (j = 0; j < T; j++)
                    for (var x = arguments[j], D = 0, ce = x.length; D < ce; D++, N++) z[N] = x[D];
                return z
            }

            function He(y) {
                return this instanceof He ? (this.v = y, this) : new He(y)
            }

            function Xe(y, j, T) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var N, z = T.apply(y, j || []),
                    x = [];
                return N = {}, D("next"), D("throw"), D("return"), N[Symbol.asyncIterator] = function() {
                    return this
                }, N;

                function D(re) {
                    z[re] && (N[re] = function(Qe) {
                        return new Promise(function(ft, et) {
                            x.push([re, Qe, ft, et]) > 1 || ce(re, Qe)
                        })
                    })
                }

                function ce(re, Qe) {
                    try {
                        ! function De(re) {
                            re.value instanceof He ? Promise.resolve(re.value.v).then(H, _e) : ve(x[0][2], re)
                        }(z[re](Qe))
                    } catch (ft) {
                        ve(x[0][3], ft)
                    }
                }

                function H(re) {
                    ce("next", re)
                }

                function _e(re) {
                    ce("throw", re)
                }

                function ve(re, Qe) {
                    re(Qe), x.shift(), x.length && ce(x[0][0], x[0][1])
                }
            }

            function p(y) {
                var j, T;
                return j = {}, z("next"), z("throw", function(N) {
                    throw N
                }), z("return"), j[Symbol.iterator] = function() {
                    return this
                }, j;

                function z(N, x) {
                    j[N] = y[N] ? function(D) {
                        return (T = !T) ? {
                            value: He(y[N](D)),
                            done: "return" === N
                        } : x ? x(D) : D
                    } : x
                }
            }

            function _(y) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var T, j = y[Symbol.asyncIterator];
                return j ? j.call(y) : (y = Te(y), T = {}, z("next"), z("throw"), z("return"), T[Symbol.asyncIterator] = function() {
                    return this
                }, T);

                function z(x) {
                    T[x] = y[x] && function(D) {
                        return new Promise(function(ce, De) {
                            ! function N(x, D, ce, De) {
                                Promise.resolve(De).then(function(H) {
                                    x({
                                        value: H,
                                        done: ce
                                    })
                                }, D)
                            }(ce, De, (D = y[x](D)).done, D.value)
                        })
                    }
                }
            }

            function g(y, j) {
                return Object.defineProperty ? Object.defineProperty(y, "raw", {
                    value: j
                }) : y.raw = j, y
            }

            function b(y) {
                if (y && y.__esModule) return y;
                var j = {};
                if (null != y)
                    for (var T in y) Object.hasOwnProperty.call(y, T) && (j[T] = y[T]);
                return j.default = y, j
            }

            function S(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }

            function k(y, j) {
                if (!j.has(y)) throw new TypeError("attempted to get private field on non-instance");
                return j.get(y)
            }

            function $(y, j, T) {
                if (!j.has(y)) throw new TypeError("attempted to set private field on non-instance");
                return j.set(y, T), T
            }
        },
        7121: (ot, B, ie) => {
            "use strict";
            ie.r(B), ie.d(B, {
                __assign: () => je,
                __asyncDelegator: () => p,
                __asyncGenerator: () => Xe,
                __asyncValues: () => _,
                __await: () => He,
                __awaiter: () => Oe,
                __classPrivateFieldGet: () => k,
                __classPrivateFieldSet: () => $,
                __createBinding: () => q,
                __decorate: () => ge,
                __exportStar: () => Pe,
                __extends: () => Ae,
                __generator: () => se,
                __importDefault: () => S,
                __importStar: () => b,
                __makeTemplateObject: () => g,
                __metadata: () => ke,
                __param: () => $e,
                __read: () => Me,
                __rest: () => Le,
                __spread: () => Ne,
                __spreadArrays: () => We,
                __values: () => Te
            });
            var O = function(y, j) {
                return (O = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(T, z) {
                        T.__proto__ = z
                    } || function(T, z) {
                        for (var N in z) z.hasOwnProperty(N) && (T[N] = z[N])
                    })(y, j)
            };

            function Ae(y, j) {
                function T() {
                    this.constructor = y
                }
                O(y, j), y.prototype = null === j ? Object.create(j) : (T.prototype = j.prototype, new T)
            }
            var je = function() {
                return je = Object.assign || function(j) {
                    for (var T, z = 1, N = arguments.length; z < N; z++)
                        for (var x in T = arguments[z]) Object.prototype.hasOwnProperty.call(T, x) && (j[x] = T[x]);
                    return j
                }, je.apply(this, arguments)
            };

            function Le(y, j) {
                var T = {};
                for (var z in y) Object.prototype.hasOwnProperty.call(y, z) && j.indexOf(z) < 0 && (T[z] = y[z]);
                if (null != y && "function" == typeof Object.getOwnPropertySymbols) {
                    var N = 0;
                    for (z = Object.getOwnPropertySymbols(y); N < z.length; N++) j.indexOf(z[N]) < 0 && Object.prototype.propertyIsEnumerable.call(y, z[N]) && (T[z[N]] = y[z[N]])
                }
                return T
            }

            function ge(y, j, T, z) {
                var D, N = arguments.length,
                    x = N < 3 ? j : null === z ? z = Object.getOwnPropertyDescriptor(j, T) : z;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) x = Reflect.decorate(y, j, T, z);
                else
                    for (var ce = y.length - 1; ce >= 0; ce--)(D = y[ce]) && (x = (N < 3 ? D(x) : N > 3 ? D(j, T, x) : D(j, T)) || x);
                return N > 3 && x && Object.defineProperty(j, T, x), x
            }

            function $e(y, j) {
                return function(T, z) {
                    j(T, z, y)
                }
            }

            function ke(y, j) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(y, j)
            }

            function Oe(y, j, T, z) {
                return new(T || (T = Promise))(function(x, D) {
                    function ce(_e) {
                        try {
                            H(z.next(_e))
                        } catch (ve) {
                            D(ve)
                        }
                    }

                    function De(_e) {
                        try {
                            H(z.throw(_e))
                        } catch (ve) {
                            D(ve)
                        }
                    }

                    function H(_e) {
                        _e.done ? x(_e.value) : function N(x) {
                            return x instanceof T ? x : new T(function(D) {
                                D(x)
                            })
                        }(_e.value).then(ce, De)
                    }
                    H((z = z.apply(y, j || [])).next())
                })
            }

            function se(y, j) {
                var z, N, x, D, T = {
                    label: 0,
                    sent: function() {
                        if (1 & x[0]) throw x[1];
                        return x[1]
                    },
                    trys: [],
                    ops: []
                };
                return D = {
                    next: ce(0),
                    throw: ce(1),
                    return: ce(2)
                }, "function" == typeof Symbol && (D[Symbol.iterator] = function() {
                    return this
                }), D;

                function ce(H) {
                    return function(_e) {
                        return function De(H) {
                            if (z) throw new TypeError("Generator is already executing.");
                            for (; T;) try {
                                if (z = 1, N && (x = 2 & H[0] ? N.return : H[0] ? N.throw || ((x = N.return) && x.call(N), 0) : N.next) && !(x = x.call(N, H[1])).done) return x;
                                switch (N = 0, x && (H = [2 & H[0], x.value]), H[0]) {
                                    case 0:
                                    case 1:
                                        x = H;
                                        break;
                                    case 4:
                                        return T.label++, {
                                            value: H[1],
                                            done: !1
                                        };
                                    case 5:
                                        T.label++, N = H[1], H = [0];
                                        continue;
                                    case 7:
                                        H = T.ops.pop(), T.trys.pop();
                                        continue;
                                    default:
                                        if (!(x = (x = T.trys).length > 0 && x[x.length - 1]) && (6 === H[0] || 2 === H[0])) {
                                            T = 0;
                                            continue
                                        }
                                        if (3 === H[0] && (!x || H[1] > x[0] && H[1] < x[3])) {
                                            T.label = H[1];
                                            break
                                        }
                                        if (6 === H[0] && T.label < x[1]) {
                                            T.label = x[1], x = H;
                                            break
                                        }
                                        if (x && T.label < x[2]) {
                                            T.label = x[2], T.ops.push(H);
                                            break
                                        }
                                        x[2] && T.ops.pop(), T.trys.pop();
                                        continue
                                }
                                H = j.call(y, T)
                            } catch (_e) {
                                H = [6, _e], N = 0
                            } finally {
                                z = x = 0
                            }
                            if (5 & H[0]) throw H[1];
                            return {
                                value: H[0] ? H[1] : void 0,
                                done: !0
                            }
                        }([H, _e])
                    }
                }
            }

            function q(y, j, T, z) {
                void 0 === z && (z = T), y[z] = j[T]
            }

            function Pe(y, j) {
                for (var T in y) "default" !== T && !j.hasOwnProperty(T) && (j[T] = y[T])
            }

            function Te(y) {
                var j = "function" == typeof Symbol && Symbol.iterator,
                    T = j && y[j],
                    z = 0;
                if (T) return T.call(y);
                if (y && "number" == typeof y.length) return {
                    next: function() {
                        return y && z >= y.length && (y = void 0), {
                            value: y && y[z++],
                            done: !y
                        }
                    }
                };
                throw new TypeError(j ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function Me(y, j) {
                var T = "function" == typeof Symbol && y[Symbol.iterator];
                if (!T) return y;
                var N, D, z = T.call(y),
                    x = [];
                try {
                    for (;
                        (void 0 === j || j-- > 0) && !(N = z.next()).done;) x.push(N.value)
                } catch (ce) {
                    D = {
                        error: ce
                    }
                } finally {
                    try {
                        N && !N.done && (T = z.return) && T.call(z)
                    } finally {
                        if (D) throw D.error
                    }
                }
                return x
            }

            function Ne() {
                for (var y = [], j = 0; j < arguments.length; j++) y = y.concat(Me(arguments[j]));
                return y
            }

            function We() {
                for (var y = 0, j = 0, T = arguments.length; j < T; j++) y += arguments[j].length;
                var z = Array(y),
                    N = 0;
                for (j = 0; j < T; j++)
                    for (var x = arguments[j], D = 0, ce = x.length; D < ce; D++, N++) z[N] = x[D];
                return z
            }

            function He(y) {
                return this instanceof He ? (this.v = y, this) : new He(y)
            }

            function Xe(y, j, T) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var N, z = T.apply(y, j || []),
                    x = [];
                return N = {}, D("next"), D("throw"), D("return"), N[Symbol.asyncIterator] = function() {
                    return this
                }, N;

                function D(re) {
                    z[re] && (N[re] = function(Qe) {
                        return new Promise(function(ft, et) {
                            x.push([re, Qe, ft, et]) > 1 || ce(re, Qe)
                        })
                    })
                }

                function ce(re, Qe) {
                    try {
                        ! function De(re) {
                            re.value instanceof He ? Promise.resolve(re.value.v).then(H, _e) : ve(x[0][2], re)
                        }(z[re](Qe))
                    } catch (ft) {
                        ve(x[0][3], ft)
                    }
                }

                function H(re) {
                    ce("next", re)
                }

                function _e(re) {
                    ce("throw", re)
                }

                function ve(re, Qe) {
                    re(Qe), x.shift(), x.length && ce(x[0][0], x[0][1])
                }
            }

            function p(y) {
                var j, T;
                return j = {}, z("next"), z("throw", function(N) {
                    throw N
                }), z("return"), j[Symbol.iterator] = function() {
                    return this
                }, j;

                function z(N, x) {
                    j[N] = y[N] ? function(D) {
                        return (T = !T) ? {
                            value: He(y[N](D)),
                            done: "return" === N
                        } : x ? x(D) : D
                    } : x
                }
            }

            function _(y) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var T, j = y[Symbol.asyncIterator];
                return j ? j.call(y) : (y = Te(y), T = {}, z("next"), z("throw"), z("return"), T[Symbol.asyncIterator] = function() {
                    return this
                }, T);

                function z(x) {
                    T[x] = y[x] && function(D) {
                        return new Promise(function(ce, De) {
                            ! function N(x, D, ce, De) {
                                Promise.resolve(De).then(function(H) {
                                    x({
                                        value: H,
                                        done: ce
                                    })
                                }, D)
                            }(ce, De, (D = y[x](D)).done, D.value)
                        })
                    }
                }
            }

            function g(y, j) {
                return Object.defineProperty ? Object.defineProperty(y, "raw", {
                    value: j
                }) : y.raw = j, y
            }

            function b(y) {
                if (y && y.__esModule) return y;
                var j = {};
                if (null != y)
                    for (var T in y) Object.hasOwnProperty.call(y, T) && (j[T] = y[T]);
                return j.default = y, j
            }

            function S(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }

            function k(y, j) {
                if (!j.has(y)) throw new TypeError("attempted to get private field on non-instance");
                return j.get(y)
            }

            function $(y, j, T) {
                if (!j.has(y)) throw new TypeError("attempted to set private field on non-instance");
                return j.set(y, T), T
            }
        },
        1590: (ot, B, ie) => {
            "use strict";
            const O = ie(514);
            ot.exports = ge;
            const Ae = function S() {
                    function k($) {
                        return typeof $ < "u" && $
                    }
                    try {
                        return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
                            get: function() {
                                return delete Object.prototype.globalThis, this.globalThis = this
                            },
                            configurable: !0
                        }), globalThis
                    } catch {
                        return k(self) || k(window) || k(this) || {}
                    }
                }().console || {},
                je = {
                    mapHttpRequest: We,
                    mapHttpResponse: We,
                    wrapRequestSerializer: He,
                    wrapResponseSerializer: He,
                    wrapErrorSerializer: He,
                    req: We,
                    res: We,
                    err: function Me(k) {
                        const $ = {
                            type: k.constructor.name,
                            msg: k.message,
                            stack: k.stack
                        };
                        for (const y in k) void 0 === $[y] && ($[y] = k[y]);
                        return $
                    }
                };

            function ge(k) {
                (k = k || {}).browser = k.browser || {};
                const $ = k.browser.transmit;
                if ($ && "function" != typeof $.send) throw Error("pino: transmit option must have a send function");
                const y = k.browser.write || Ae;
                k.browser.write && (k.browser.asObject = !0);
                const j = k.serializers || {},
                    T = function Le(k, $) {
                        return Array.isArray(k) ? k.filter(function(j) {
                            return "!stdSerializers.err" !== j
                        }) : !0 === k && Object.keys($)
                    }(k.browser.serialize, j);
                let z = k.browser.serialize;
                Array.isArray(k.browser.serialize) && k.browser.serialize.indexOf("!stdSerializers.err") > -1 && (z = !1), "function" == typeof y && (y.error = y.fatal = y.warn = y.info = y.debug = y.trace = y), !1 === k.enabled && (k.level = "silent");
                const x = k.level || "info",
                    D = Object.create(y);
                D.log || (D.log = Xe), Object.defineProperty(D, "levelVal", {
                    get: function De() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(D, "level", {
                    get: function H() {
                        return this._level
                    },
                    set: function _e(re) {
                        if ("silent" !== re && !this.levels.values[re]) throw Error("unknown level " + re);
                        this._level = re, $e(ce, D, "error", "log"), $e(ce, D, "fatal", "error"), $e(ce, D, "warn", "error"), $e(ce, D, "info", "log"), $e(ce, D, "debug", "log"), $e(ce, D, "trace", "log")
                    }
                });
                const ce = {
                    transmit: $,
                    serialize: T,
                    asObject: k.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: Ne(k)
                };
                return D.levels = ge.levels, D.level = x, D.setMaxListeners = D.getMaxListeners = D.emit = D.addListener = D.on = D.prependListener = D.once = D.prependOnceListener = D.removeListener = D.removeAllListeners = D.listeners = D.listenerCount = D.eventNames = D.write = D.flush = Xe, D.serializers = j, D._serialize = T, D._stdErrSerialize = z, D.child = function ve(re, Qe) {
                    if (!re) throw new Error("missing bindings for child Pino");
                    Qe = Qe || {}, T && re.serializers && (Qe.serializers = re.serializers);
                    const ft = Qe.serializers;
                    if (T && ft) {
                        var et = Object.assign({}, j, ft),
                            $n = !0 === k.browser.serialize ? Object.keys(et) : T;
                        delete re.serializers, se([re], $n, et, this._stdErrSerialize)
                    }

                    function Un(Pt) {
                        this._childLevel = 1 + (0 | Pt._childLevel), this.error = q(Pt, re, "error"), this.fatal = q(Pt, re, "fatal"), this.warn = q(Pt, re, "warn"), this.info = q(Pt, re, "info"), this.debug = q(Pt, re, "debug"), this.trace = q(Pt, re, "trace"), et && (this.serializers = et, this._serialize = $n), $ && (this._logEvent = Te([].concat(Pt._logEvent.bindings, re)))
                    }
                    return Un.prototype = this, new Un(this)
                }, $ && (D._logEvent = Te()), D
            }

            function $e(k, $, y, j) {
                const T = Object.getPrototypeOf($);
                $[y] = $.levelVal > $.levels.values[y] ? Xe : T[y] ? T[y] : Ae[y] || Ae[j] || Xe,
                    function ke(k, $, y) {
                        !k.transmit && $[y] === Xe || ($[y] = function(j) {
                            return function() {
                                const z = k.timestamp(),
                                    N = new Array(arguments.length),
                                    x = Object.getPrototypeOf && Object.getPrototypeOf(this) === Ae ? Ae : this;
                                for (var D = 0; D < N.length; D++) N[D] = arguments[D];
                                if (k.serialize && !k.asObject && se(N, this._serialize, this.serializers, this._stdErrSerialize), k.asObject ? j.call(x, function Oe(k, $, y, j) {
                                        k._serialize && se(y, k._serialize, k.serializers, k._stdErrSerialize);
                                        const T = y.slice();
                                        let z = T[0];
                                        const N = {};
                                        j && (N.time = j), N.level = ge.levels.values[$];
                                        let x = 1 + (0 | k._childLevel);
                                        if (x < 1 && (x = 1), null !== z && "object" == typeof z) {
                                            for (; x-- && "object" == typeof T[0];) Object.assign(N, T.shift());
                                            z = T.length ? O(T.shift(), T) : void 0
                                        } else "string" == typeof z && (z = O(T.shift(), T));
                                        return void 0 !== z && (N.msg = z), N
                                    }(this, y, N, z)) : j.apply(x, N), k.transmit) {
                                    const ce = k.transmit.level || $.level,
                                        H = ge.levels.values[y];
                                    if (H < ge.levels.values[ce]) return;
                                    ! function Pe(k, $, y) {
                                        const j = $.send,
                                            T = $.ts,
                                            z = $.methodLevel,
                                            N = $.methodValue,
                                            x = $.val,
                                            D = k._logEvent.bindings;
                                        se(y, k._serialize || Object.keys(k.serializers), k.serializers, void 0 === k._stdErrSerialize || k._stdErrSerialize), k._logEvent.ts = T, k._logEvent.messages = y.filter(function(ce) {
                                            return -1 === D.indexOf(ce)
                                        }), k._logEvent.level.label = z, k._logEvent.level.value = N, j(z, k._logEvent, x), k._logEvent = Te(D)
                                    }(this, {
                                        ts: z,
                                        methodLevel: y,
                                        methodValue: H,
                                        transmitLevel: ce,
                                        transmitValue: ge.levels.values[k.transmit.level || $.level],
                                        send: k.transmit.send,
                                        val: $.levelVal
                                    }, N)
                                }
                            }
                        }($[y]))
                    }(k, $, y)
            }

            function se(k, $, y, j) {
                for (const T in k)
                    if (j && k[T] instanceof Error) k[T] = ge.stdSerializers.err(k[T]);
                    else if ("object" == typeof k[T] && !Array.isArray(k[T]))
                    for (const z in k[T]) $ && $.indexOf(z) > -1 && z in y && (k[T][z] = y[z](k[T][z]))
            }

            function q(k, $, y) {
                return function() {
                    const j = new Array(1 + arguments.length);
                    j[0] = $;
                    for (var T = 1; T < j.length; T++) j[T] = arguments[T - 1];
                    return k[y].apply(this, j)
                }
            }

            function Te(k) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: k || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function Ne(k) {
                return "function" == typeof k.timestamp ? k.timestamp : !1 === k.timestamp ? p : _
            }

            function We() {
                return {}
            }

            function He(k) {
                return k
            }

            function Xe() {}

            function p() {
                return !1
            }

            function _() {
                return Date.now()
            }
            ge.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, ge.stdSerializers = je, ge.stdTimeFunctions = Object.assign({}, {
                nullTime: p,
                epochTime: _,
                unixTime: function g() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function b() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);
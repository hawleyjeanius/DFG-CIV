(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
      0: function (t, e, n) {
        t.exports = n("zUnb")
      },
      Hfs6: function (t, e, n) {
        var r, s, i;
        ! function (o) {
          if ("object" == typeof t.exports) {
            var a = o(0, e);
            void 0 !== a && (t.exports = a)
          } else s = [n, e], void 0 === (i = "function" == typeof (r = o) ? r.apply(e, s) : r) || (t.exports = i)
        }((function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var n = void 0;
          e.default = ["fr", [
              ["AM", "PM"], n, n
            ], n, [
              ["D", "L", "M", "M", "J", "V", "S"],
              ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
              ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
              ["di", "lu", "ma", "me", "je", "ve", "sa"]
            ], n, [
              ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
              ["janv.", "f\xe9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\xfbt", "sept.", "oct.", "nov.", "d\xe9c."],
              ["janvier", "f\xe9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xfbt", "septembre", "octobre", "novembre", "d\xe9cembre"]
            ], n, [
              ["av. J.-C.", "ap. J.-C."], n, ["avant J\xe9sus-Christ", "apr\xe8s J\xe9sus-Christ"]
            ], 1, [6, 0],
            ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"],
            ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"],
            ["{1} {0}", "{1} '\xe0' {0}", n, n],
            [",", "\u202f", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
            ["#,##0.###", "#,##0\xa0%", "#,##0.00\xa0\xa4", "#E0"], "EUR", "\u20ac", "euro", {
              ARS: ["$AR", "$"],
              AUD: ["$AU", "$"],
              BEF: ["FB"],
              BMD: ["$BM", "$"],
              BND: ["$BN", "$"],
              BZD: ["$BZ", "$"],
              CAD: ["$CA", "$"],
              CLP: ["$CL", "$"],
              CNY: [n, "\xa5"],
              COP: ["$CO", "$"],
              CYP: ["\xa3CY"],
              EGP: [n, "\xa3E"],
              FJD: ["$FJ", "$"],
              FKP: ["\xa3FK", "\xa3"],
              FRF: ["F"],
              GBP: ["\xa3GB", "\xa3"],
              GIP: ["\xa3GI", "\xa3"],
              HKD: [n, "$"],
              IEP: ["\xa3IE"],
              ILP: ["\xa3IL"],
              ITL: ["\u20a4IT"],
              JPY: [n, "\xa5"],
              KMF: [n, "FC"],
              LBP: ["\xa3LB", "\xa3L"],
              MTP: ["\xa3MT"],
              MXN: ["$MX", "$"],
              NAD: ["$NA", "$"],
              NIO: [n, "$C"],
              NZD: ["$NZ", "$"],
              RHD: ["$RH"],
              RON: [n, "L"],
              RWF: [n, "FR"],
              SBD: ["$SB", "$"],
              SGD: ["$SG", "$"],
              SRD: ["$SR", "$"],
              TOP: [n, "$T"],
              TTD: ["$TT", "$"],
              TWD: [n, "NT$"],
              USD: ["$US", "$"],
              UYU: ["$UY", "$"],
              WST: ["$WS"],
              XCD: [n, "$"],
              XPF: ["FCFP"],
              ZMW: [n, "Kw"]
            }, "ltr",
            function (t) {
              var e = Math.floor(Math.abs(t));
              return 0 === e || 1 === e ? 1 : 5
            }
          ]
        }))
      },
      zUnb: function (t, e, n) {
        "use strict";

        function r(t) {
          return "function" == typeof t
        }
        n.r(e);
        let s = !1;
        const i = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            if (t) {
              const t = new Error;
              console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
            } else s && console.log("RxJS: Back to a better error behavior. Thank you. <3");
            s = t
          },
          get useDeprecatedSynchronousErrorHandling() {
            return s
          }
        };

        function o(t) {
          setTimeout(() => {
            throw t
          }, 0)
        }
        const a = {
            closed: !0,
            next(t) {},
            error(t) {
              if (i.useDeprecatedSynchronousErrorHandling) throw t;
              o(t)
            },
            complete() {}
          },
          l = (() => Array.isArray || (t => t && "number" == typeof t.length))();

        function c(t) {
          return null !== t && "object" == typeof t
        }
        const u = (() => {
          function t(t) {
            return Error.call(this), this.message = t ? `${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = t, this
          }
          return t.prototype = Object.create(Error.prototype), t
        })();
        let h = (() => {
          class t {
            constructor(t) {
              this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
            }
            unsubscribe() {
              let e;
              if (this.closed) return;
              let {
                _parentOrParents: n,
                _unsubscribe: s,
                _subscriptions: i
              } = this;
              if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
              else if (null !== n)
                for (let t = 0; t < n.length; ++t) n[t].remove(this);
              if (r(s)) try {
                s.call(this)
              } catch (o) {
                e = o instanceof u ? d(o.errors) : [o]
              }
              if (l(i)) {
                let t = -1,
                  n = i.length;
                for (; ++t < n;) {
                  const n = i[t];
                  if (c(n)) try {
                    n.unsubscribe()
                  } catch (o) {
                    e = e || [], o instanceof u ? e = e.concat(d(o.errors)) : e.push(o)
                  }
                }
              }
              if (e) throw new u(e)
            }
            add(e) {
              let n = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case "function":
                  n = new t(e);
                case "object":
                  if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    const e = n;
                    n = new t, n._subscriptions = [e]
                  }
                  break;
                default:
                  throw new Error("unrecognized teardown " + e + " added to Subscription.")
              }
              let {
                _parentOrParents: r
              } = n;
              if (null === r) n._parentOrParents = this;
              else if (r instanceof t) {
                if (r === this) return n;
                n._parentOrParents = [r, this]
              } else {
                if (-1 !== r.indexOf(this)) return n;
                r.push(this)
              }
              const s = this._subscriptions;
              return null === s ? this._subscriptions = [n] : s.push(n), n
            }
            remove(t) {
              const e = this._subscriptions;
              if (e) {
                const n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
              }
            }
          }
          return t.EMPTY = function (t) {
            return t.closed = !0, t
          }(new t), t
        })();

        function d(t) {
          return t.reduce((t, e) => t.concat(e instanceof u ? e.errors : e), [])
        }
        const p = (() => "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())();
        class f extends h {
          constructor(t, e, n) {
            switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
              case 0:
                this.destination = a;
                break;
              case 1:
                if (!t) {
                  this.destination = a;
                  break
                }
                if ("object" == typeof t) {
                  t instanceof f ? (this.syncErrorThrowable = t.syncErrorThrowable, this.destination = t, t.add(this)) : (this.syncErrorThrowable = !0, this.destination = new m(this, t));
                  break
                }
                default:
                  this.syncErrorThrowable = !0, this.destination = new m(this, t, e, n)
            }
          } [p]() {
            return this
          }
          static create(t, e, n) {
            const r = new f(t, e, n);
            return r.syncErrorThrowable = !1, r
          }
          next(t) {
            this.isStopped || this._next(t)
          }
          error(t) {
            this.isStopped || (this.isStopped = !0, this._error(t))
          }
          complete() {
            this.isStopped || (this.isStopped = !0, this._complete())
          }
          unsubscribe() {
            this.closed || (this.isStopped = !0, super.unsubscribe())
          }
          _next(t) {
            this.destination.next(t)
          }
          _error(t) {
            this.destination.error(t), this.unsubscribe()
          }
          _complete() {
            this.destination.complete(), this.unsubscribe()
          }
          _unsubscribeAndRecycle() {
            const {
              _parentOrParents: t
            } = this;
            return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
          }
        }
        class m extends f {
          constructor(t, e, n, s) {
            let i;
            super(), this._parentSubscriber = t;
            let o = this;
            r(e) ? i = e : e && (i = e.next, n = e.error, s = e.complete, e !== a && (o = Object.create(e), r(o.unsubscribe) && this.add(o.unsubscribe.bind(o)), o.unsubscribe = this.unsubscribe.bind(this))), this._context = o, this._next = i, this._error = n, this._complete = s
          }
          next(t) {
            if (!this.isStopped && this._next) {
              const {
                _parentSubscriber: e
              } = this;
              i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
            }
          }
          error(t) {
            if (!this.isStopped) {
              const {
                _parentSubscriber: e
              } = this, {
                useDeprecatedSynchronousErrorHandling: n
              } = i;
              if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
              else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : o(t), this.unsubscribe();
              else {
                if (this.unsubscribe(), n) throw t;
                o(t)
              }
            }
          }
          complete() {
            if (!this.isStopped) {
              const {
                _parentSubscriber: t
              } = this;
              if (this._complete) {
                const e = () => this._complete.call(this._context);
                i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe())
              } else this.unsubscribe()
            }
          }
          __tryOrUnsub(t, e) {
            try {
              t.call(this._context, e)
            } catch (n) {
              if (this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling) throw n;
              o(n)
            }
          }
          __tryOrSetError(t, e, n) {
            if (!i.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
            try {
              e.call(this._context, n)
            } catch (r) {
              return i.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (o(r), !0)
            }
            return !1
          }
          _unsubscribe() {
            const {
              _parentSubscriber: t
            } = this;
            this._context = null, this._parentSubscriber = null, t.unsubscribe()
          }
        }
        const g = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")();

        function v() {}

        function y(...t) {
          return b(t)
        }

        function b(t) {
          return t ? 1 === t.length ? t[0] : function (e) {
            return t.reduce((t, e) => e(t), e)
          } : v
        }
        let w = (() => {
          class t {
            constructor(t) {
              this._isScalar = !1, t && (this._subscribe = t)
            }
            lift(e) {
              const n = new t;
              return n.source = this, n.operator = e, n
            }
            subscribe(t, e, n) {
              const {
                operator: r
              } = this, s = function (t, e, n) {
                if (t) {
                  if (t instanceof f) return t;
                  if (t[p]) return t[p]()
                }
                return t || e || n ? new f(t, e, n) : new f(a)
              }(t, e, n);
              if (s.add(r ? r.call(s, this.source) : this.source || i.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), i.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue;
              return s
            }
            _trySubscribe(t) {
              try {
                return this._subscribe(t)
              } catch (e) {
                i.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e),
                  function (t) {
                    for (; t;) {
                      const {
                        closed: e,
                        destination: n,
                        isStopped: r
                      } = t;
                      if (e || r) return !1;
                      t = n && n instanceof f ? n : null
                    }
                    return !0
                  }(t) ? t.error(e) : console.warn(e)
              }
            }
            forEach(t, e) {
              return new(e = _(e))((e, n) => {
                let r;
                r = this.subscribe(e => {
                  try {
                    t(e)
                  } catch (s) {
                    n(s), r && r.unsubscribe()
                  }
                }, n, e)
              })
            }
            _subscribe(t) {
              const {
                source: e
              } = this;
              return e && e.subscribe(t)
            } [g]() {
              return this
            }
            pipe(...t) {
              return 0 === t.length ? this : b(t)(this)
            }
            toPromise(t) {
              return new(t = _(t))((t, e) => {
                let n;
                this.subscribe(t => n = t, t => e(t), () => t(n))
              })
            }
          }
          return t.create = e => new t(e), t
        })();

        function _(t) {
          if (t || (t = i.Promise || Promise), !t) throw new Error("no Promise impl found");
          return t
        }
        const C = (() => {
          function t() {
            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
          }
          return t.prototype = Object.create(Error.prototype), t
        })();
        class S extends h {
          constructor(t, e) {
            super(), this.subject = t, this.subscriber = e, this.closed = !1
          }
          unsubscribe() {
            if (this.closed) return;
            this.closed = !0;
            const t = this.subject,
              e = t.observers;
            if (this.subject = null, !e || 0 === e.length || t.isStopped || t.closed) return;
            const n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
          }
        }
        class E extends f {
          constructor(t) {
            super(t), this.destination = t
          }
        }
        let x = (() => {
          class t extends w {
            constructor() {
              super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
            } [p]() {
              return new E(this)
            }
            lift(t) {
              const e = new k(this, this);
              return e.operator = t, e
            }
            next(t) {
              if (this.closed) throw new C;
              if (!this.isStopped) {
                const {
                  observers: e
                } = this, n = e.length, r = e.slice();
                for (let s = 0; s < n; s++) r[s].next(t)
              }
            }
            error(t) {
              if (this.closed) throw new C;
              this.hasError = !0, this.thrownError = t, this.isStopped = !0;
              const {
                observers: e
              } = this, n = e.length, r = e.slice();
              for (let s = 0; s < n; s++) r[s].error(t);
              this.observers.length = 0
            }
            complete() {
              if (this.closed) throw new C;
              this.isStopped = !0;
              const {
                observers: t
              } = this, e = t.length, n = t.slice();
              for (let r = 0; r < e; r++) n[r].complete();
              this.observers.length = 0
            }
            unsubscribe() {
              this.isStopped = !0, this.closed = !0, this.observers = null
            }
            _trySubscribe(t) {
              if (this.closed) throw new C;
              return super._trySubscribe(t)
            }
            _subscribe(t) {
              if (this.closed) throw new C;
              return this.hasError ? (t.error(this.thrownError), h.EMPTY) : this.isStopped ? (t.complete(), h.EMPTY) : (this.observers.push(t), new S(this, t))
            }
            asObservable() {
              const t = new w;
              return t.source = this, t
            }
          }
          return t.create = (t, e) => new k(t, e), t
        })();
        class k extends x {
          constructor(t, e) {
            super(), this.destination = t, this.source = e
          }
          next(t) {
            const {
              destination: e
            } = this;
            e && e.next && e.next(t)
          }
          error(t) {
            const {
              destination: e
            } = this;
            e && e.error && this.destination.error(t)
          }
          complete() {
            const {
              destination: t
            } = this;
            t && t.complete && this.destination.complete()
          }
          _subscribe(t) {
            const {
              source: e
            } = this;
            return e ? this.source.subscribe(t) : h.EMPTY
          }
        }

        function A(t) {
          return t && "function" == typeof t.schedule
        }
        class T extends f {
          constructor(t, e, n) {
            super(), this.parent = t, this.outerValue = e, this.outerIndex = n, this.index = 0
          }
          _next(t) {
            this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
          }
          _error(t) {
            this.parent.notifyError(t, this), this.unsubscribe()
          }
          _complete() {
            this.parent.notifyComplete(this), this.unsubscribe()
          }
        }
        const I = t => e => {
          for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
          e.complete()
        };

        function O() {
          return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }
        const P = O(),
          F = t => t && "number" == typeof t.length && "function" != typeof t;

        function N(t) {
          return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        }
        const R = t => {
          if (t && "function" == typeof t[g]) return r = t, t => {
            const e = r[g]();
            if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return e.subscribe(t)
          };
          if (F(t)) return I(t);
          if (N(t)) return n = t, t => (n.then(e => {
            t.closed || (t.next(e), t.complete())
          }, e => t.error(e)).then(null, o), t);
          if (t && "function" == typeof t[P]) return e = t, t => {
            const n = e[P]();
            for (;;) {
              const e = n.next();
              if (e.done) {
                t.complete();
                break
              }
              if (t.next(e.value), t.closed) break
            }
            return "function" == typeof n.return && t.add(() => {
              n.return && n.return()
            }), t
          }; {
            const e = c(t) ? "an invalid object" : `'${t}'`;
            throw new TypeError(`You provided ${e} where a stream was expected.` + " You can provide an Observable, Promise, Array, or Iterable.")
          }
          var e, n, r
        };

        function M(t, e, n, r, s = new T(t, n, r)) {
          if (!s.closed) return e instanceof w ? e.subscribe(s) : R(e)(s)
        }
        class D extends f {
          notifyNext(t, e, n, r, s) {
            this.destination.next(e)
          }
          notifyError(t, e) {
            this.destination.error(t)
          }
          notifyComplete(t) {
            this.destination.complete()
          }
        }

        function V(t, e) {
          return function (n) {
            if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new L(t, e))
          }
        }
        class L {
          constructor(t, e) {
            this.project = t, this.thisArg = e
          }
          call(t, e) {
            return e.subscribe(new U(t, this.project, this.thisArg))
          }
        }
        class U extends f {
          constructor(t, e, n) {
            super(t), this.project = e, this.count = 0, this.thisArg = n || this
          }
          _next(t) {
            let e;
            try {
              e = this.project.call(this.thisArg, t, this.count++)
            } catch (n) {
              return void this.destination.error(n)
            }
            this.destination.next(e)
          }
        }

        function j(t, e) {
          return new w(n => {
            const r = new h;
            let s = 0;
            return r.add(e.schedule((function () {
              s !== t.length ? (n.next(t[s++]), n.closed || r.add(this.schedule())) : n.complete()
            }))), r
          })
        }

        function H(t, e) {
          return e ? function (t, e) {
            if (null != t) {
              if (function (t) {
                  return t && "function" == typeof t[g]
                }(t)) return function (t, e) {
                return new w(n => {
                  const r = new h;
                  return r.add(e.schedule(() => {
                    const s = t[g]();
                    r.add(s.subscribe({
                      next(t) {
                        r.add(e.schedule(() => n.next(t)))
                      },
                      error(t) {
                        r.add(e.schedule(() => n.error(t)))
                      },
                      complete() {
                        r.add(e.schedule(() => n.complete()))
                      }
                    }))
                  })), r
                })
              }(t, e);
              if (N(t)) return function (t, e) {
                return new w(n => {
                  const r = new h;
                  return r.add(e.schedule(() => t.then(t => {
                    r.add(e.schedule(() => {
                      n.next(t), r.add(e.schedule(() => n.complete()))
                    }))
                  }, t => {
                    r.add(e.schedule(() => n.error(t)))
                  }))), r
                })
              }(t, e);
              if (F(t)) return j(t, e);
              if (function (t) {
                  return t && "function" == typeof t[P]
                }(t) || "string" == typeof t) return function (t, e) {
                if (!t) throw new Error("Iterable cannot be null");
                return new w(n => {
                  const r = new h;
                  let s;
                  return r.add(() => {
                    s && "function" == typeof s.return && s.return()
                  }), r.add(e.schedule(() => {
                    s = t[P](), r.add(e.schedule((function () {
                      if (n.closed) return;
                      let t, e;
                      try {
                        const n = s.next();
                        t = n.value, e = n.done
                      } catch (r) {
                        return void n.error(r)
                      }
                      e ? n.complete() : (n.next(t), this.schedule())
                    })))
                  })), r
                })
              }(t, e)
            }
            throw new TypeError((null !== t && typeof t || t) + " is not observable")
          }(t, e) : t instanceof w ? t : new w(R(t))
        }

        function $(t, e, n = Number.POSITIVE_INFINITY) {
          return "function" == typeof e ? r => r.pipe($((n, r) => H(t(n, r)).pipe(V((t, s) => e(n, t, r, s))), n)) : ("number" == typeof e && (n = e), e => e.lift(new q(t, n)))
        }
        class q {
          constructor(t, e = Number.POSITIVE_INFINITY) {
            this.project = t, this.concurrent = e
          }
          call(t, e) {
            return e.subscribe(new z(t, this.project, this.concurrent))
          }
        }
        class z extends D {
          constructor(t, e, n = Number.POSITIVE_INFINITY) {
            super(t), this.project = e, this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
          }
          _next(t) {
            this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
          }
          _tryNext(t) {
            let e;
            const n = this.index++;
            try {
              e = this.project(t, n)
            } catch (r) {
              return void this.destination.error(r)
            }
            this.active++, this._innerSub(e, t, n)
          }
          _innerSub(t, e, n) {
            const r = new T(this, e, n),
              s = this.destination;
            s.add(r);
            const i = M(this, t, void 0, void 0, r);
            i !== r && s.add(i)
          }
          _complete() {
            this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
          }
          notifyNext(t, e, n, r, s) {
            this.destination.next(e)
          }
          notifyComplete(t) {
            const e = this.buffer;
            this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
          }
        }

        function G(t) {
          return t
        }

        function B(t = Number.POSITIVE_INFINITY) {
          return $(G, t)
        }

        function W(t, e) {
          return e ? j(t, e) : new w(I(t))
        }

        function Z() {
          return function (t) {
            return t.lift(new Q(t))
          }
        }
        class Q {
          constructor(t) {
            this.connectable = t
          }
          call(t, e) {
            const {
              connectable: n
            } = this;
            n._refCount++;
            const r = new J(t, n),
              s = e.subscribe(r);
            return r.closed || (r.connection = n.connect()), s
          }
        }
        class J extends f {
          constructor(t, e) {
            super(t), this.connectable = e
          }
          _unsubscribe() {
            const {
              connectable: t
            } = this;
            if (!t) return void(this.connection = null);
            this.connectable = null;
            const e = t._refCount;
            if (e <= 0) return void(this.connection = null);
            if (t._refCount = e - 1, e > 1) return void(this.connection = null);
            const {
              connection: n
            } = this, r = t._connection;
            this.connection = null, !r || n && r !== n || r.unsubscribe()
          }
        }
        class Y extends w {
          constructor(t, e) {
            super(), this.source = t, this.subjectFactory = e, this._refCount = 0, this._isComplete = !1
          }
          _subscribe(t) {
            return this.getSubject().subscribe(t)
          }
          getSubject() {
            const t = this._subject;
            return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
          }
          connect() {
            let t = this._connection;
            return t || (this._isComplete = !1, t = this._connection = new h, t.add(this.source.subscribe(new X(this.getSubject(), this))), t.closed && (this._connection = null, t = h.EMPTY)), t
          }
          refCount() {
            return Z()(this)
          }
        }
        const K = (() => {
          const t = Y.prototype;
          return {
            operator: {
              value: null
            },
            _refCount: {
              value: 0,
              writable: !0
            },
            _subject: {
              value: null,
              writable: !0
            },
            _connection: {
              value: null,
              writable: !0
            },
            _subscribe: {
              value: t._subscribe
            },
            _isComplete: {
              value: t._isComplete,
              writable: !0
            },
            getSubject: {
              value: t.getSubject
            },
            connect: {
              value: t.connect
            },
            refCount: {
              value: t.refCount
            }
          }
        })();
        class X extends E {
          constructor(t, e) {
            super(t), this.connectable = e
          }
          _error(t) {
            this._unsubscribe(), super._error(t)
          }
          _complete() {
            this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
          }
          _unsubscribe() {
            const t = this.connectable;
            if (t) {
              this.connectable = null;
              const e = t._connection;
              t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
            }
          }
        }

        function tt() {
          return new x
        }

        function et(t) {
          return {
            toString: t
          }.toString()
        }

        function nt(t, e, n) {
          return et(() => {
            const r = function (t) {
              return function (...e) {
                if (t) {
                  const n = t(...e);
                  for (const t in n) this[t] = n[t]
                }
              }
            }(e);

            function s(...t) {
              if (this instanceof s) return r.apply(this, t), this;
              const e = new s(...t);
              return n.annotation = e, n;

              function n(t, n, r) {
                const s = t.hasOwnProperty("__parameters__") ? t.__parameters__ : Object.defineProperty(t, "__parameters__", {
                  value: []
                }).__parameters__;
                for (; s.length <= r;) s.push(null);
                return (s[r] = s[r] || []).push(e), t
              }
            }
            return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = t, s.annotationCls = s, s
          })
        }
        const rt = nt("Inject", t => ({
            token: t
          })),
          st = nt("Optional"),
          it = nt("Self"),
          ot = nt("SkipSelf");
        var at = function (t) {
          return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
        }({});

        function lt(t) {
          for (let e in t)
            if (t[e] === lt) return e;
          throw Error("Could not find renamed property on target object.")
        }

        function ct(t, e) {
          for (const n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
        }

        function ut(t) {
          return {
            token: t.token,
            providedIn: t.providedIn || null,
            factory: t.factory,
            value: void 0
          }
        }

        function ht(t) {
          return {
            factory: t.factory,
            providers: t.providers || [],
            imports: t.imports || []
          }
        }

        function dt(t) {
          return pt(t, t[mt]) || pt(t, t[yt])
        }

        function pt(t, e) {
          return e && e.token === t ? e : null
        }

        function ft(t) {
          return t && (t.hasOwnProperty(gt) || t.hasOwnProperty(bt)) ? t[gt] : null
        }
        const mt = lt({
            "\u0275prov": lt
          }),
          gt = lt({
            "\u0275inj": lt
          }),
          vt = lt({
            "\u0275provFallback": lt
          }),
          yt = lt({
            ngInjectableDef: lt
          }),
          bt = lt({
            ngInjectorDef: lt
          });

        function wt(t) {
          if ("string" == typeof t) return t;
          if (Array.isArray(t)) return "[" + t.map(wt).join(", ") + "]";
          if (null == t) return "" + t;
          if (t.overriddenName) return `${t.overriddenName}`;
          if (t.name) return `${t.name}`;
          const e = t.toString();
          if (null == e) return "" + e;
          const n = e.indexOf("\n");
          return -1 === n ? e : e.substring(0, n)
        }

        function _t(t, e) {
          return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e
        }
        const Ct = lt({
          __forward_ref__: lt
        });

        function St(t) {
          return t.__forward_ref__ = St, t.toString = function () {
            return wt(this())
          }, t
        }

        function Et(t) {
          return xt(t) ? t() : t
        }

        function xt(t) {
          return "function" == typeof t && t.hasOwnProperty(Ct) && t.__forward_ref__ === St
        }
        const kt = "undefined" != typeof globalThis && globalThis,
          At = "undefined" != typeof window && window,
          Tt = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
          It = "undefined" != typeof global && global,
          Ot = kt || It || At || Tt,
          Pt = lt({
            "\u0275cmp": lt
          }),
          Ft = lt({
            "\u0275dir": lt
          }),
          Nt = lt({
            "\u0275pipe": lt
          }),
          Rt = lt({
            "\u0275mod": lt
          }),
          Mt = lt({
            "\u0275loc": lt
          }),
          Dt = lt({
            "\u0275fac": lt
          }),
          Vt = lt({
            __NG_ELEMENT_ID__: lt
          });
        class Lt {
          constructor(t, e) {
            this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.\u0275prov = ut({
              token: this,
              providedIn: e.providedIn || "root",
              factory: e.factory
            }))
          }
          toString() {
            return `InjectionToken ${this._desc}`
          }
        }
        const Ut = new Lt("INJECTOR", -1),
          jt = {},
          Ht = /\n/gm,
          $t = lt({
            provide: String,
            useValue: lt
          });
        let qt, zt = void 0;

        function Gt(t) {
          const e = zt;
          return zt = t, e
        }

        function Bt(t) {
          const e = qt;
          return qt = t, e
        }

        function Wt(t, e = at.Default) {
          if (void 0 === zt) throw new Error("inject() must be called from an injection context");
          return null === zt ? Qt(t, void 0, e) : zt.get(t, e & at.Optional ? null : void 0, e)
        }

        function Zt(t, e = at.Default) {
          return (qt || Wt)(Et(t), e)
        }

        function Qt(t, e, n) {
          const r = dt(t);
          if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
          if (n & at.Optional) return null;
          if (void 0 !== e) return e;
          throw new Error(`Injector: NOT_FOUND [${wt(t)}]`)
        }

        function Jt(t) {
          const e = [];
          for (let n = 0; n < t.length; n++) {
            const r = Et(t[n]);
            if (Array.isArray(r)) {
              if (0 === r.length) throw new Error("Arguments array must have arguments.");
              let t = void 0,
                n = at.Default;
              for (let e = 0; e < r.length; e++) {
                const s = r[e];
                s instanceof st || "Optional" === s.ngMetadataName || s === st ? n |= at.Optional : s instanceof ot || "SkipSelf" === s.ngMetadataName || s === ot ? n |= at.SkipSelf : s instanceof it || "Self" === s.ngMetadataName || s === it ? n |= at.Self : t = s instanceof rt || s === rt ? s.token : s
              }
              e.push(Zt(t, n))
            } else e.push(Zt(r))
          }
          return e
        }
        class Yt {
          get(t, e = jt) {
            if (e === jt) {
              const e = new Error(`NullInjectorError: No provider for ${wt(t)}!`);
              throw e.name = "NullInjectorError", e
            }
            return e
          }
        }
        class Kt {}
        class Xt {}

        function te(t, e) {
          t.forEach(t => Array.isArray(t) ? te(t, e) : e(t))
        }

        function ee(t, e, n) {
          e >= t.length ? t.push(n) : t.splice(e, 0, n)
        }

        function ne(t, e) {
          return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
        }

        function re(t, e, n) {
          let r = ie(t, e);
          return r >= 0 ? t[1 | r] = n : (r = ~r, function (t, e, n, r) {
            let s = t.length;
            if (s == e) t.push(n, r);
            else if (1 === s) t.push(r, t[0]), t[0] = n;
            else {
              for (s--, t.push(t[s - 1], t[s]); s > e;) t[s] = t[s - 2], s--;
              t[e] = n, t[e + 1] = r
            }
          }(t, r, e, n)), r
        }

        function se(t, e) {
          const n = ie(t, e);
          if (n >= 0) return t[1 | n]
        }

        function ie(t, e) {
          return function (t, e, n) {
            let r = 0,
              s = t.length >> 1;
            for (; s !== r;) {
              const n = r + (s - r >> 1),
                i = t[n << 1];
              if (e === i) return n << 1;
              i > e ? s = n : r = n + 1
            }
            return ~(s << 1)
          }(t, e)
        }
        const oe = function () {
            var t = {
              OnPush: 0,
              Default: 1
            };
            return t[t.OnPush] = "OnPush", t[t.Default] = "Default", t
          }(),
          ae = function () {
            var t = {
              Emulated: 0,
              Native: 1,
              None: 2,
              ShadowDom: 3
            };
            return t[t.Emulated] = "Emulated", t[t.Native] = "Native", t[t.None] = "None", t[t.ShadowDom] = "ShadowDom", t
          }(),
          le = {},
          ce = [];
        let ue = 0;

        function he(t) {
          return et(() => {
            const e = t.type,
              n = e.prototype,
              r = {},
              s = {
                type: e,
                providersResolver: null,
                decls: t.decls,
                vars: t.vars,
                factory: null,
                template: t.template || null,
                consts: t.consts || null,
                ngContentSelectors: t.ngContentSelectors,
                hostBindings: t.hostBindings || null,
                hostVars: t.hostVars || 0,
                hostAttrs: t.hostAttrs || null,
                contentQueries: t.contentQueries || null,
                declaredInputs: r,
                inputs: null,
                outputs: null,
                exportAs: t.exportAs || null,
                onChanges: null,
                onInit: n.ngOnInit || null,
                doCheck: n.ngDoCheck || null,
                afterContentInit: n.ngAfterContentInit || null,
                afterContentChecked: n.ngAfterContentChecked || null,
                afterViewInit: n.ngAfterViewInit || null,
                afterViewChecked: n.ngAfterViewChecked || null,
                onDestroy: n.ngOnDestroy || null,
                onPush: t.changeDetection === oe.OnPush,
                directiveDefs: null,
                pipeDefs: null,
                selectors: t.selectors || ce,
                viewQuery: t.viewQuery || null,
                features: t.features || null,
                data: t.data || {},
                encapsulation: t.encapsulation || ae.Emulated,
                id: "c",
                styles: t.styles || ce,
                _: null,
                setInput: null,
                schemas: t.schemas || null,
                tView: null
              },
              i = t.directives,
              o = t.features,
              a = t.pipes;
            return s.id += ue++, s.inputs = ge(t.inputs, r), s.outputs = ge(t.outputs), o && o.forEach(t => t(s)), s.directiveDefs = i ? () => ("function" == typeof i ? i() : i).map(de) : null, s.pipeDefs = a ? () => ("function" == typeof a ? a() : a).map(pe) : null, s
          })
        }

        function de(t) {
          return be(t) || function (t) {
            return t[Ft] || null
          }(t)
        }

        function pe(t) {
          return function (t) {
            return t[Nt] || null
          }(t)
        }
        const fe = {};

        function me(t) {
          const e = {
            type: t.type,
            bootstrap: t.bootstrap || ce,
            declarations: t.declarations || ce,
            imports: t.imports || ce,
            exports: t.exports || ce,
            transitiveCompileScopes: null,
            schemas: t.schemas || null,
            id: t.id || null
          };
          return null != t.id && et(() => {
            fe[t.id] = t.type
          }), e
        }

        function ge(t, e) {
          if (null == t) return le;
          const n = {};
          for (const r in t)
            if (t.hasOwnProperty(r)) {
              let s = t[r],
                i = s;
              Array.isArray(s) && (i = s[1], s = s[0]), n[s] = r, e && (e[s] = i)
            } return n
        }
        const ve = he;

        function ye(t) {
          return {
            type: t.type,
            name: t.name,
            factory: null,
            pure: !1 !== t.pure,
            onDestroy: t.type.prototype.ngOnDestroy || null
          }
        }

        function be(t) {
          return t[Pt] || null
        }

        function we(t, e) {
          return t.hasOwnProperty(Dt) ? t[Dt] : null
        }

        function _e(t, e) {
          const n = t[Rt] || null;
          if (!n && !0 === e) throw new Error(`Type ${wt(t)} does not have '\u0275mod' property.`);
          return n
        }

        function Ce(t) {
          return Array.isArray(t) && "object" == typeof t[1]
        }

        function Se(t) {
          return Array.isArray(t) && !0 === t[1]
        }

        function Ee(t) {
          return 0 != (8 & t.flags)
        }

        function xe(t) {
          return 2 == (2 & t.flags)
        }

        function ke(t) {
          return 1 == (1 & t.flags)
        }

        function Ae(t) {
          return null !== t.template
        }

        function Te(t) {
          return 0 != (512 & t[2])
        }
        let Ie = void 0;

        function Oe(t) {
          return !!t.listen
        }
        const Pe = {
          createRenderer: (t, e) => void 0 !== Ie ? Ie : "undefined" != typeof document ? document : void 0
        };

        function Fe(t) {
          for (; Array.isArray(t);) t = t[0];
          return t
        }

        function Ne(t, e) {
          return Fe(e[t + 19])
        }

        function Re(t, e) {
          return Fe(e[t.index])
        }

        function Me(t, e) {
          return t.data[e + 19]
        }

        function De(t, e) {
          const n = e[t];
          return Ce(n) ? n : n[0]
        }

        function Ve(t) {
          const e = function (t) {
            return t.__ngContext__ || null
          }(t);
          return e ? Array.isArray(e) ? e : e.lView : null
        }

        function Le(t) {
          return 4 == (4 & t[2])
        }

        function Ue(t) {
          return 128 == (128 & t[2])
        }

        function je(t, e) {
          return null === t || null == e ? null : t[e]
        }

        function He(t) {
          t[18] = 0
        }
        const $e = {
          lFrame: an(null),
          bindingsEnabled: !0,
          checkNoChangesMode: !1
        };

        function qe() {
          return $e.bindingsEnabled
        }

        function ze() {
          return $e.lFrame.lView
        }

        function Ge() {
          return $e.lFrame.tView
        }

        function Be(t) {
          $e.lFrame.contextLView = t
        }

        function We() {
          return $e.lFrame.previousOrParentTNode
        }

        function Ze(t, e) {
          $e.lFrame.previousOrParentTNode = t, $e.lFrame.isParent = e
        }

        function Qe() {
          return $e.lFrame.isParent
        }

        function Je() {
          return $e.checkNoChangesMode
        }

        function Ye(t) {
          $e.checkNoChangesMode = t
        }

        function Ke() {
          const t = $e.lFrame;
          let e = t.bindingRootIndex;
          return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
        }

        function Xe() {
          return $e.lFrame.bindingIndex++
        }

        function tn(t, e) {
          const n = $e.lFrame;
          n.bindingIndex = n.bindingRootIndex = t, n.currentDirectiveIndex = e
        }

        function en() {
          return $e.lFrame.currentQueryIndex
        }

        function nn(t) {
          $e.lFrame.currentQueryIndex = t
        }

        function rn(t, e) {
          const n = on();
          $e.lFrame = n, n.previousOrParentTNode = e, n.lView = t
        }

        function sn(t, e) {
          const n = on(),
            r = t[1];
          $e.lFrame = n, n.previousOrParentTNode = e, n.lView = t, n.tView = r, n.contextLView = t, n.bindingIndex = r.bindingStartIndex
        }

        function on() {
          const t = $e.lFrame,
            e = null === t ? null : t.child;
          return null === e ? an(t) : e
        }

        function an(t) {
          const e = {
            previousOrParentTNode: null,
            isParent: !0,
            lView: null,
            tView: null,
            selectedIndex: 0,
            contextLView: null,
            elementDepthCount: 0,
            currentNamespace: null,
            currentSanitizer: null,
            currentDirectiveIndex: -1,
            bindingRootIndex: -1,
            bindingIndex: -1,
            currentQueryIndex: 0,
            parent: t,
            child: null
          };
          return null !== t && (t.child = e), e
        }

        function ln() {
          const t = $e.lFrame;
          return $e.lFrame = t.parent, t.previousOrParentTNode = null, t.lView = null, t
        }
        const cn = ln;

        function un() {
          const t = ln();
          t.isParent = !0, t.tView = null, t.selectedIndex = 0, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.currentSanitizer = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
        }

        function hn() {
          return $e.lFrame.selectedIndex
        }

        function dn(t) {
          $e.lFrame.selectedIndex = t
        }

        function pn() {
          const t = $e.lFrame;
          return Me(t.tView, t.selectedIndex)
        }

        function fn(t, e) {
          for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
            const e = t.data[n];
            e.afterContentInit && (t.contentHooks || (t.contentHooks = [])).push(-n, e.afterContentInit), e.afterContentChecked && ((t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentChecked), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, e.afterContentChecked)), e.afterViewInit && (t.viewHooks || (t.viewHooks = [])).push(-n, e.afterViewInit), e.afterViewChecked && ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, e.afterViewChecked)), null != e.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy)
          }
        }

        function mn(t, e, n) {
          yn(t, e, 3, n)
        }

        function gn(t, e, n, r) {
          (3 & t[2]) === n && yn(t, e, n, r)
        }

        function vn(t, e) {
          let n = t[2];
          (3 & n) === e && (n &= 1023, n += 1, t[2] = n)
        }

        function yn(t, e, n, r) {
          const s = null != r ? r : -1;
          let i = 0;
          for (let o = void 0 !== r ? 65535 & t[18] : 0; o < e.length; o++)
            if ("number" == typeof e[o + 1]) {
              if (i = e[o], null != r && i >= r) break
            } else e[o] < 0 && (t[18] += 65536), (i < s || -1 == s) && (bn(t, n, e, o), t[18] = (4294901760 & t[18]) + o + 2), o++
        }

        function bn(t, e, n, r) {
          const s = n[r] < 0,
            i = n[r + 1],
            o = t[s ? -n[r] : n[r]];
          s ? t[2] >> 10 < t[18] >> 16 && (3 & t[2]) === e && (t[2] += 1024, i.call(o)) : i.call(o)
        }
        class wn {
          constructor(t, e, n) {
            this.factory = t, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = n
          }
        }

        function _n(t, e, n) {
          const r = Oe(t);
          let s = 0;
          for (; s < n.length;) {
            const i = n[s];
            if ("number" == typeof i) {
              if (0 !== i) break;
              s++;
              const o = n[s++],
                a = n[s++],
                l = n[s++];
              r ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l)
            } else {
              const o = i,
                a = n[++s];
              Sn(o) ? r && t.setProperty(e, o, a) : r ? t.setAttribute(e, o, a) : e.setAttribute(o, a), s++
            }
          }
          return s
        }

        function Cn(t) {
          return 3 === t || 4 === t || 6 === t
        }

        function Sn(t) {
          return 64 === t.charCodeAt(0)
        }

        function En(t, e) {
          if (null === e || 0 === e.length);
          else if (null === t || 0 === t.length) t = e.slice();
          else {
            let n = -1;
            for (let r = 0; r < e.length; r++) {
              const s = e[r];
              "number" == typeof s ? n = s : 0 === n || xn(t, n, s, null, -1 === n || 2 === n ? e[++r] : null)
            }
          }
          return t
        }

        function xn(t, e, n, r, s) {
          let i = 0,
            o = t.length;
          if (-1 === e) o = -1;
          else
            for (; i < t.length;) {
              const n = t[i++];
              if ("number" == typeof n) {
                if (n === e) {
                  o = -1;
                  break
                }
                if (n > e) {
                  o = i - 1;
                  break
                }
              }
            }
          for (; i < t.length;) {
            const e = t[i];
            if ("number" == typeof e) break;
            if (e === n) {
              if (null === r) return void(null !== s && (t[i + 1] = s));
              if (r === t[i + 1]) return void(t[i + 2] = s)
            }
            i++, null !== r && i++, null !== s && i++
          } - 1 !== o && (t.splice(o, 0, e), i = o + 1), t.splice(i++, 0, n), null !== r && t.splice(i++, 0, r), null !== s && t.splice(i++, 0, s)
        }

        function kn(t) {
          return -1 !== t
        }

        function An(t) {
          return 32767 & t
        }

        function Tn(t) {
          return t >> 16
        }

        function In(t, e) {
          let n = Tn(t),
            r = e;
          for (; n > 0;) r = r[15], n--;
          return r
        }

        function On(t) {
          return "string" == typeof t ? t : null == t ? "" : "" + t
        }

        function Pn(t) {
          return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : On(t)
        }
        const Fn = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Ot))();

        function Nn(t) {
          return t instanceof Function ? t() : t
        }
        let Rn = !0;

        function Mn(t) {
          const e = Rn;
          return Rn = t, e
        }
        let Dn = 0;

        function Vn(t, e) {
          const n = Un(t, e);
          if (-1 !== n) return n;
          const r = e[1];
          r.firstCreatePass && (t.injectorIndex = e.length, Ln(r.data, t), Ln(e, null), Ln(r.blueprint, null));
          const s = jn(t, e),
            i = t.injectorIndex;
          if (kn(s)) {
            const t = An(s),
              n = In(s, e),
              r = n[1].data;
            for (let s = 0; s < 8; s++) e[i + s] = n[t + s] | r[t + s]
          }
          return e[i + 8] = s, i
        }

        function Ln(t, e) {
          t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
        }

        function Un(t, e) {
          return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null == e[t.injectorIndex + 8] ? -1 : t.injectorIndex
        }

        function jn(t, e) {
          if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
          let n = e[6],
            r = 1;
          for (; n && -1 === n.injectorIndex;) n = (e = e[15]) ? e[6] : null, r++;
          return n ? n.injectorIndex | r << 16 : -1
        }

        function Hn(t, e, n) {
          ! function (t, e, n) {
            let r = "string" != typeof n ? n[Vt] : n.charCodeAt(0) || 0;
            null == r && (r = n[Vt] = Dn++);
            const s = 255 & r,
              i = 1 << s,
              o = 64 & s,
              a = 32 & s,
              l = e.data;
            128 & s ? o ? a ? l[t + 7] |= i : l[t + 6] |= i : a ? l[t + 5] |= i : l[t + 4] |= i : o ? a ? l[t + 3] |= i : l[t + 2] |= i : a ? l[t + 1] |= i : l[t] |= i
          }(t, e, n)
        }

        function $n(t, e, n, r = at.Default, s) {
          if (null !== t) {
            const s = function (t) {
              if ("string" == typeof t) return t.charCodeAt(0) || 0;
              const e = t[Vt];
              return "number" == typeof e && e > 0 ? 255 & e : e
            }(n);
            if ("function" == typeof s) {
              rn(e, t);
              try {
                const t = s();
                if (null != t || r & at.Optional) return t;
                throw new Error(`No provider for ${Pn(n)}!`)
              } finally {
                cn()
              }
            } else if ("number" == typeof s) {
              if (-1 === s) return new Qn(t, e);
              let i = null,
                o = Un(t, e),
                a = -1,
                l = r & at.Host ? e[16][6] : null;
              for ((-1 === o || r & at.SkipSelf) && (a = -1 === o ? jn(t, e) : e[o + 8], Zn(r, !1) ? (i = e[1], o = An(a), e = In(a, e)) : o = -1); - 1 !== o;) {
                a = e[o + 8];
                const t = e[1];
                if (Wn(s, o, t.data)) {
                  const t = zn(o, e, n, i, r, l);
                  if (t !== qn) return t
                }
                Zn(r, e[1].data[o + 8] === l) && Wn(s, o, e) ? (i = t, o = An(a), e = In(a, e)) : o = -1
              }
            }
          }
          if (r & at.Optional && void 0 === s && (s = null), 0 == (r & (at.Self | at.Host))) {
            const t = e[9],
              i = Bt(void 0);
            try {
              return t ? t.get(n, s, r & at.Optional) : Qt(n, s, r & at.Optional)
            } finally {
              Bt(i)
            }
          }
          if (r & at.Optional) return s;
          throw new Error(`NodeInjector: NOT_FOUND [${Pn(n)}]`)
        }
        const qn = {};

        function zn(t, e, n, r, s, i) {
          const o = e[1],
            a = o.data[t + 8],
            l = Gn(a, o, n, null == r ? xe(a) && Rn : r != o && 3 === a.type, s & at.Host && i === a);
          return null !== l ? Bn(e, o, l, a) : qn
        }

        function Gn(t, e, n, r, s) {
          const i = t.providerIndexes,
            o = e.data,
            a = 65535 & i,
            l = t.directiveStart,
            c = i >> 16,
            u = s ? a + c : t.directiveEnd;
          for (let h = r ? a : a + c; h < u; h++) {
            const t = o[h];
            if (h < l && n === t || h >= l && t.type === n) return h
          }
          if (s) {
            const t = o[l];
            if (t && Ae(t) && t.type === n) return l
          }
          return null
        }

        function Bn(t, e, n, r) {
          let s = t[n];
          const i = e.data;
          if (s instanceof wn) {
            const o = s;
            if (o.resolving) throw new Error(`Circular dep for ${Pn(i[n])}`);
            const a = Mn(o.canSeeViewProviders);
            let l;
            o.resolving = !0, o.injectImpl && (l = Bt(o.injectImpl)), rn(t, r);
            try {
              s = t[n] = o.factory(void 0, i, t, r), e.firstCreatePass && n >= r.directiveStart && function (t, e, n) {
                const {
                  onChanges: r,
                  onInit: s,
                  doCheck: i
                } = e;
                r && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, r)), s && (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, s), i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, i))
              }(n, i[n], e)
            } finally {
              o.injectImpl && Bt(l), Mn(a), o.resolving = !1, cn()
            }
          }
          return s
        }

        function Wn(t, e, n) {
          const r = 64 & t,
            s = 32 & t;
          let i;
          return i = 128 & t ? r ? s ? n[e + 7] : n[e + 6] : s ? n[e + 5] : n[e + 4] : r ? s ? n[e + 3] : n[e + 2] : s ? n[e + 1] : n[e], !!(i & 1 << t)
        }

        function Zn(t, e) {
          return !(t & at.Self || t & at.Host && e)
        }
        class Qn {
          constructor(t, e) {
            this._tNode = t, this._lView = e
          }
          get(t, e) {
            return $n(this._tNode, this._lView, t, void 0, e)
          }
        }

        function Jn(t) {
          return et(() => {
            const e = Object.getPrototypeOf(t.prototype).constructor,
              n = e[Dt] || function t(e) {
                const n = e;
                if (xt(e)) return () => {
                  const e = t(Et(n));
                  return e ? e() : null
                };
                let r = we(n);
                if (null === r) {
                  const t = ft(n);
                  r = t && t.factory
                }
                return r || null
              }(e);
            return null !== n ? n : t => new t
          })
        }

        function Yn(t) {
          return t.ngDebugContext
        }

        function Kn(t) {
          return t.ngOriginalError
        }

        function Xn(t, ...e) {
          t.error(...e)
        }
        class tr {
          constructor() {
            this._console = console
          }
          handleError(t) {
            const e = this._findOriginalError(t),
              n = this._findContext(t),
              r = function (t) {
                return t.ngErrorLogger || Xn
              }(t);
            r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n)
          }
          _findContext(t) {
            return t ? Yn(t) ? Yn(t) : this._findContext(Kn(t)) : null
          }
          _findOriginalError(t) {
            let e = Kn(t);
            for (; e && Kn(e);) e = Kn(e);
            return e
          }
        }
        class er {
          constructor(t) {
            this.changingThisBreaksApplicationSecurity = t
          }
          toString() {
            return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` + " (see http://g.co/ng/security#xss)"
          }
        }

        function nr(t) {
          return t instanceof er ? t.changingThisBreaksApplicationSecurity : t
        }
        let rr = !0,
          sr = !1;

        function ir() {
          return sr = !0, rr
        }
        const or = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
          ar = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
          lr = function () {
            var t = {
              NONE: 0,
              HTML: 1,
              STYLE: 2,
              SCRIPT: 3,
              URL: 4,
              RESOURCE_URL: 5
            };
            return t[t.NONE] = "NONE", t[t.HTML] = "HTML", t[t.STYLE] = "STYLE", t[t.SCRIPT] = "SCRIPT", t[t.URL] = "URL", t[t.RESOURCE_URL] = "RESOURCE_URL", t
          }();

        function cr(t) {
          const e = function () {
            const t = ze();
            return t && t[12]
          }();
          return e ? e.sanitize(lr.URL, t) || "" : function (t, e) {
            const n = function (t) {
              return t instanceof er && t.getTypeName() || null
            }(t);
            if (null != n && n !== e) {
              if ("ResourceURL" === n && "URL" === e) return !0;
              throw new Error(`Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`)
            }
            return n === e
          }(t, "URL") ? nr(t) : (n = On(t), (n = String(n)).match(or) || n.match(ar) ? n : (ir() && console.warn(`WARNING: sanitizing unsafe URL value ${n} (see http://g.co/ng/security#xss)`), "unsafe:" + n));
          var n
        }

        function ur(t, e) {
          t.__ngContext__ = e
        }

        function hr(t) {
          throw new Error(`Multiple components match node with tagname ${t.tagName}`)
        }

        function dr() {
          throw new Error("Cannot mix multi providers and regular providers")
        }

        function pr(t, e, n) {
          let r = t.length;
          for (;;) {
            const s = t.indexOf(e, n);
            if (-1 === s) return s;
            if (0 === s || t.charCodeAt(s - 1) <= 32) {
              const n = e.length;
              if (s + n === r || t.charCodeAt(s + n) <= 32) return s
            }
            n = s + 1
          }
        }

        function fr(t, e, n) {
          let r = 0;
          for (; r < t.length;) {
            let s = t[r++];
            if (n && "class" === s) {
              if (s = t[r], -1 !== pr(s.toLowerCase(), e, 0)) return !0
            } else if (1 === s) {
              for (; r < t.length && "string" == typeof (s = t[r++]);)
                if (s.toLowerCase() === e) return !0;
              return !1
            }
          }
          return !1
        }

        function mr(t, e, n) {
          return e === (0 !== t.type || n ? t.tagName : "ng-template")
        }

        function gr(t, e, n) {
          let r = 4;
          const s = t.attrs || [],
            i = function (t) {
              for (let e = 0; e < t.length; e++)
                if (Cn(t[e])) return e;
              return t.length
            }(s);
          let o = !1;
          for (let a = 0; a < e.length; a++) {
            const l = e[a];
            if ("number" != typeof l) {
              if (!o)
                if (4 & r) {
                  if (r = 2 | 1 & r, "" !== l && !mr(t, l, n) || "" === l && 1 === e.length) {
                    if (vr(r)) return !1;
                    o = !0
                  }
                } else {
                  const c = 8 & r ? l : e[++a];
                  if (8 & r && null !== t.attrs) {
                    if (!fr(t.attrs, c, n)) {
                      if (vr(r)) return !1;
                      o = !0
                    }
                    continue
                  }
                  const u = yr(8 & r ? "class" : l, s, 0 == t.type && "ng-template" !== t.tagName, n);
                  if (-1 === u) {
                    if (vr(r)) return !1;
                    o = !0;
                    continue
                  }
                  if ("" !== c) {
                    let t;
                    t = u > i ? "" : s[u + 1].toLowerCase();
                    const e = 8 & r ? t : null;
                    if (e && -1 !== pr(e, c, 0) || 2 & r && c !== t) {
                      if (vr(r)) return !1;
                      o = !0
                    }
                  }
                }
            } else {
              if (!o && !vr(r) && !vr(l)) return !1;
              if (o && vr(l)) continue;
              o = !1, r = l | 1 & r
            }
          }
          return vr(r) || o
        }

        function vr(t) {
          return 0 == (1 & t)
        }

        function yr(t, e, n, r) {
          if (null === e) return -1;
          let s = 0;
          if (r || !n) {
            let n = !1;
            for (; s < e.length;) {
              const r = e[s];
              if (r === t) return s;
              if (3 === r || 6 === r) n = !0;
              else {
                if (1 === r || 2 === r) {
                  let t = e[++s];
                  for (;
                    "string" == typeof t;) t = e[++s];
                  continue
                }
                if (4 === r) break;
                if (0 === r) {
                  s += 4;
                  continue
                }
              }
              s += n ? 1 : 2
            }
            return -1
          }
          return function (t, e) {
            let n = t.indexOf(4);
            if (n > -1)
              for (n++; n < t.length;) {
                if (t[n] === e) return n;
                n++
              }
            return -1
          }(e, t)
        }

        function br(t, e, n = !1) {
          for (let r = 0; r < e.length; r++)
            if (gr(t, e[r], n)) return !0;
          return !1
        }

        function wr(t, e) {
          return t ? ":not(" + e.trim() + ")" : e
        }

        function _r(t) {
          let e = t[0],
            n = 1,
            r = 2,
            s = "",
            i = !1;
          for (; n < t.length;) {
            let o = t[n];
            if ("string" == typeof o)
              if (2 & r) {
                const e = t[++n];
                s += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]"
              } else 8 & r ? s += "." + o : 4 & r && (s += " " + o);
            else "" === s || vr(o) || (e += wr(i, s), s = ""), r = o, i = i || !vr(r);
            n++
          }
          return "" !== s && (e += wr(i, s)), e
        }
        const Cr = {};

        function Sr(t) {
          const e = t[3];
          return Se(e) ? e[3] : e
        }

        function Er(t) {
          xr(Ge(), ze(), hn() + t, Je())
        }

        function xr(t, e, n, r) {
          if (!r)
            if (3 == (3 & e[2])) {
              const r = t.preOrderCheckHooks;
              null !== r && mn(e, r, n)
            } else {
              const r = t.preOrderHooks;
              null !== r && gn(e, r, 0, n)
            } dn(n)
        }

        function kr(t, e) {
          return t << 17 | e << 2
        }

        function Ar(t) {
          return t >> 17 & 32767
        }

        function Tr(t) {
          return 2 | t
        }

        function Ir(t) {
          return (131068 & t) >> 2
        }

        function Or(t, e) {
          return -131069 & t | e << 2
        }

        function Pr(t) {
          return 1 | t
        }

        function Fr(t, e) {
          const n = t.contentQueries;
          if (null !== n)
            for (let r = 0; r < n.length; r += 2) {
              const s = n[r],
                i = n[r + 1];
              if (-1 !== i) {
                const n = t.data[i];
                nn(s), n.contentQueries(2, e[i], i)
              }
            }
        }

        function Nr(t, e, n) {
          return Oe(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t)
        }

        function Rr(t, e, n, r, s, i, o, a, l, c) {
          const u = e.blueprint.slice();
          return u[0] = s, u[2] = 140 | r, He(u), u[3] = u[15] = t, u[8] = n, u[10] = o || t && t[10], u[11] = a || t && t[11], u[12] = l || t && t[12] || null, u[9] = c || t && t[9] || null, u[6] = i, u[16] = 2 == e.type ? t[16] : u, u
        }

        function Mr(t, e, n, r, s, i) {
          const o = n + 19,
            a = t.data[o] || function (t, e, n, r, s, i) {
              const o = We(),
                a = Qe(),
                l = a ? o : o && o.parent,
                c = t.data[n] = zr(0, l && l !== e ? l : null, r, n, s, i);
              return null === t.firstChild && (t.firstChild = c), o && (!a || null != o.child || null === c.parent && 2 !== o.type ? a || (o.next = c) : o.child = c), c
            }(t, e, o, r, s, i);
          return Ze(a, !0), a
        }

        function Dr(t, e, n) {
          sn(e, e[6]);
          try {
            const r = t.viewQuery;
            null !== r && ps(1, r, n);
            const s = t.template;
            null !== s && Ur(t, e, s, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && Fr(t, e), t.staticViewQueries && ps(2, t.viewQuery, n);
            const i = t.components;
            null !== i && function (t, e) {
              for (let n = 0; n < e.length; n++) ls(t, e[n])
            }(e, i)
          } finally {
            e[2] &= -5, un()
          }
        }

        function Vr(t, e, n, r) {
          const s = e[2];
          if (256 == (256 & s)) return;
          sn(e, e[6]);
          const i = Je();
          try {
            He(e), $e.lFrame.bindingIndex = t.bindingStartIndex, null !== n && Ur(t, e, n, 2, r);
            const o = 3 == (3 & s);
            if (!i)
              if (o) {
                const n = t.preOrderCheckHooks;
                null !== n && mn(e, n, null)
              } else {
                const n = t.preOrderHooks;
                null !== n && gn(e, n, 0, null), vn(e, 0)
              } if (function (t) {
                let e = t[13];
                for (; null !== e;) {
                  let n;
                  if (Se(e) && (n = e[2]) >> 1 == -1) {
                    for (let t = 9; t < e.length; t++) {
                      const n = e[t],
                        r = n[1];
                      Ue(n) && Vr(r, n, r.template, n[8])
                    }
                    0 != (1 & n) && os(e, t[16])
                  }
                  e = e[4]
                }
              }(e), null !== t.contentQueries && Fr(t, e), !i)
              if (o) {
                const n = t.contentCheckHooks;
                null !== n && mn(e, n)
              } else {
                const n = t.contentHooks;
                null !== n && gn(e, n, 1), vn(e, 1)
              }!
            function (t, e) {
              try {
                const n = t.expandoInstructions;
                if (null !== n) {
                  let r = t.expandoStartIndex,
                    s = -1,
                    i = -1;
                  for (let t = 0; t < n.length; t++) {
                    const o = n[t];
                    "number" == typeof o ? o <= 0 ? (i = 0 - o, dn(i), r += 9 + n[++t], s = r) : r += o : (null !== o && (tn(r, s), o(2, e[s])), s++)
                  }
                }
              } finally {
                dn(-1)
              }
            }(t, e);
            const a = t.components;
            null !== a && function (t, e) {
              for (let n = 0; n < e.length; n++) as(t, e[n])
            }(e, a);
            const l = t.viewQuery;
            if (null !== l && ps(2, l, r), !i)
              if (o) {
                const n = t.viewCheckHooks;
                null !== n && mn(e, n)
              } else {
                const n = t.viewHooks;
                null !== n && gn(e, n, 2), vn(e, 2)
              }! 0 === t.firstUpdatePass && (t.firstUpdatePass = !1), i || (e[2] &= -73)
          } finally {
            un()
          }
        }

        function Lr(t, e, n, r) {
          const s = e[10],
            i = !Je(),
            o = Le(e);
          try {
            i && !o && s.begin && s.begin(), o && Dr(t, e, r), Vr(t, e, n, r)
          } finally {
            i && !o && s.end && s.end()
          }
        }

        function Ur(t, e, n, r, s) {
          const i = hn();
          try {
            dn(-1), 2 & r && e.length > 19 && xr(t, e, 0, Je()), n(r, s)
          } finally {
            dn(i)
          }
        }

        function jr(t, e, n) {
          qe() && (function (t, e, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            t.firstCreatePass || Vn(n, e), ur(r, e);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = t.data[a],
                i = Ae(r);
              i && ns(e, n, r);
              const l = Bn(e, t, a, n);
              ur(l, e), null !== o && rs(0, a - s, l, r, 0, o), i && (De(n.index, e)[8] = l)
            }
          }(t, e, n, Re(n, e)), 128 == (128 & n.flags) && function (t, e, n) {
            const r = n.directiveStart,
              s = n.directiveEnd,
              i = t.expandoInstructions,
              o = t.firstCreatePass,
              a = n.index - 19;
            try {
              dn(a);
              for (let n = r; n < s; n++) {
                const r = t.data[n],
                  s = e[n];
                null !== r.hostBindings || 0 !== r.hostVars || null !== r.hostAttrs ? Jr(r, s) : o && i.push(null)
              }
            } finally {
              dn(-1)
            }
          }(t, e, n))
        }

        function Hr(t, e, n = Re) {
          const r = e.localNames;
          if (null !== r) {
            let s = e.index + 1;
            for (let i = 0; i < r.length; i += 2) {
              const o = r[i + 1],
                a = -1 === o ? n(e, t) : t[o];
              t[s++] = a
            }
          }
        }

        function $r(t) {
          return t.tView || (t.tView = qr(1, -1, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts))
        }

        function qr(t, e, n, r, s, i, o, a, l, c) {
          const u = 19 + r,
            h = u + s,
            d = function (t, e) {
              const n = [];
              for (let r = 0; r < e; r++) n.push(r < t ? null : Cr);
              return n
            }(u, h);
          return d[1] = {
            type: t,
            id: e,
            blueprint: d,
            template: n,
            queries: null,
            viewQuery: a,
            node: null,
            data: d.slice().fill(null, u),
            bindingStartIndex: u,
            expandoStartIndex: h,
            expandoInstructions: null,
            firstCreatePass: !0,
            firstUpdatePass: !0,
            staticViewQueries: !1,
            staticContentQueries: !1,
            preOrderHooks: null,
            preOrderCheckHooks: null,
            contentHooks: null,
            contentCheckHooks: null,
            viewHooks: null,
            viewCheckHooks: null,
            destroyHooks: null,
            cleanup: null,
            contentQueries: null,
            components: null,
            directiveRegistry: "function" == typeof i ? i() : i,
            pipeRegistry: "function" == typeof o ? o() : o,
            firstChild: null,
            schemas: l,
            consts: c
          }
        }

        function zr(t, e, n, r, s, i) {
          return {
            type: n,
            index: r,
            injectorIndex: e ? e.injectorIndex : -1,
            directiveStart: -1,
            directiveEnd: -1,
            directiveStylingLast: -1,
            propertyBindings: null,
            flags: 0,
            providerIndexes: 0,
            tagName: s,
            attrs: i,
            mergedAttrs: null,
            localNames: null,
            initialInputs: void 0,
            inputs: null,
            outputs: null,
            tViews: null,
            next: null,
            projectionNext: null,
            child: null,
            parent: e,
            projection: null,
            styles: null,
            residualStyles: void 0,
            classes: null,
            residualClasses: void 0,
            classBindings: 0,
            styleBindings: 0
          }
        }

        function Gr(t, e, n) {
          for (let r in t)
            if (t.hasOwnProperty(r)) {
              const s = t[r];
              (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, s) : n[r] = [e, s]
            } return n
        }

        function Br(t, e, n, r, s, i, o, a) {
          const l = Re(e, n);
          let c, u = e.inputs;
          var h;
          !a && null != u && (c = u[r]) ? (ys(t, n, c, r, s), xe(e) && function (t, e) {
            const n = De(e, t);
            16 & n[2] || (n[2] |= 64)
          }(n, e.index)) : 3 === e.type && (r = "class" === (h = r) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, s = null != o ? o(s, e.tagName || "", r) : s, Oe(i) ? i.setProperty(l, r, s) : Sn(r) || (l.setProperty ? l.setProperty(r, s) : l[r] = s))
        }

        function Wr(t, e, n, r) {
          let s = !1;
          if (qe()) {
            const i = function (t, e, n) {
                const r = t.directiveRegistry;
                let s = null;
                if (r)
                  for (let i = 0; i < r.length; i++) {
                    const o = r[i];
                    br(n, o.selectors, !1) && (s || (s = []), Hn(Vn(n, e), t, o.type), Ae(o) ? (2 & n.flags && hr(n), Kr(t, n), s.unshift(o)) : s.push(o))
                  }
                return s
              }(t, e, n),
              o = null === r ? null : {
                "": -1
              };
            if (null !== i) {
              let r = 0;
              s = !0, ts(n, t.data.length, i.length);
              for (let t = 0; t < i.length; t++) {
                const e = i[t];
                e.providersResolver && e.providersResolver(e)
              }
              Yr(t, n, i.length);
              let a = !1,
                l = !1;
              for (let s = 0; s < i.length; s++) {
                const c = i[s];
                n.mergedAttrs = En(n.mergedAttrs, c.hostAttrs), es(t, e, c), Xr(t.data.length - 1, c, o), null !== c.contentQueries && (n.flags |= 8), null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars || (n.flags |= 128), !a && (c.onChanges || c.onInit || c.doCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - 19), a = !0), l || !c.onChanges && !c.doCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - 19), l = !0), Zr(t, c), r += c.hostVars
              }! function (t, e) {
                const n = e.directiveEnd,
                  r = t.data,
                  s = e.attrs,
                  i = [];
                let o = null,
                  a = null;
                for (let l = e.directiveStart; l < n; l++) {
                  const t = r[l],
                    e = t.inputs;
                  i.push(null !== s ? ss(e, s) : null), o = Gr(e, l, o), a = Gr(t.outputs, l, a)
                }
                null !== o && (o.hasOwnProperty("class") && (e.flags |= 16), o.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = i, e.inputs = o, e.outputs = a
              }(t, n), Qr(t, e, r)
            }
            o && function (t, e, n) {
              if (e) {
                const r = t.localNames = [];
                for (let t = 0; t < e.length; t += 2) {
                  const s = n[e[t + 1]];
                  if (null == s) throw new Error(`Export of name '${e[t+1]}' not found!`);
                  r.push(e[t], s)
                }
              }
            }(n, r, o)
          }
          return n.mergedAttrs = En(n.mergedAttrs, n.attrs), s
        }

        function Zr(t, e) {
          const n = t.expandoInstructions;
          n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars)
        }

        function Qr(t, e, n) {
          for (let r = 0; r < n; r++) e.push(Cr), t.blueprint.push(Cr), t.data.push(null)
        }

        function Jr(t, e) {
          null !== t.hostBindings && t.hostBindings(1, e)
        }

        function Yr(t, e, n) {
          const r = 19 - e.index,
            s = t.data.length - (65535 & e.providerIndexes);
          (t.expandoInstructions || (t.expandoInstructions = [])).push(r, s, n)
        }

        function Kr(t, e) {
          e.flags |= 2, (t.components || (t.components = [])).push(e.index)
        }

        function Xr(t, e, n) {
          if (n) {
            if (e.exportAs)
              for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
            Ae(e) && (n[""] = t)
          }
        }

        function ts(t, e, n) {
          t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
        }

        function es(t, e, n) {
          t.data.push(n);
          const r = n.factory || (n.factory = we(n.type)),
            s = new wn(r, Ae(n), null);
          t.blueprint.push(s), e.push(s)
        }

        function ns(t, e, n) {
          const r = Re(e, t),
            s = $r(n),
            i = t[10],
            o = cs(t, Rr(t, s, null, n.onPush ? 64 : 16, r, e, i, i.createRenderer(r, n)));
          t[e.index] = o
        }

        function rs(t, e, n, r, s, i) {
          const o = i[e];
          if (null !== o) {
            const t = r.setInput;
            for (let e = 0; e < o.length;) {
              const s = o[e++],
                i = o[e++],
                a = o[e++];
              null !== t ? r.setInput(n, a, s, i) : n[i] = a
            }
          }
        }

        function ss(t, e) {
          let n = null,
            r = 0;
          for (; r < e.length;) {
            const s = e[r];
            if (0 !== s)
              if (5 !== s) {
                if ("number" == typeof s) break;
                t.hasOwnProperty(s) && (null === n && (n = []), n.push(s, t[s], e[r + 1])), r += 2
              } else r += 2;
            else r += 4
          }
          return n
        }

        function is(t, e, n, r) {
          return new Array(t, !0, -2, e, null, null, r, n, null)
        }

        function os(t, e) {
          const n = t[5];
          for (let r = 0; r < n.length; r++) {
            const t = n[r],
              s = t[3][3][16];
            if (s !== e && 0 == (16 & s[2])) {
              const e = t[1];
              Vr(e, t, e.template, t[8])
            }
          }
        }

        function as(t, e) {
          const n = De(e, t);
          if (Ue(n) && 80 & n[2]) {
            const t = n[1];
            Vr(t, n, t.template, n[8])
          }
        }

        function ls(t, e) {
          const n = De(e, t),
            r = n[1];
          ! function (t, e) {
            for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
          }(r, n), Dr(r, n, n[8])
        }

        function cs(t, e) {
          return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e
        }

        function us(t) {
          for (; t;) {
            t[2] |= 64;
            const e = Sr(t);
            if (Te(t) && !e) return t;
            t = e
          }
          return null
        }

        function hs(t, e, n) {
          const r = e[10];
          r.begin && r.begin();
          try {
            Vr(t, e, t.template, n)
          } catch (s) {
            throw vs(e, s), s
          } finally {
            r.end && r.end()
          }
        }

        function ds(t) {
          ! function (t) {
            for (let e = 0; e < t.components.length; e++) {
              const n = t.components[e],
                r = Ve(n),
                s = r[1];
              Lr(s, r, s.template, n)
            }
          }(t[8])
        }

        function ps(t, e, n) {
          nn(0), e(t, n)
        }
        const fs = (() => Promise.resolve(null))();

        function ms(t) {
          return t[7] || (t[7] = [])
        }

        function gs(t) {
          return t.cleanup || (t.cleanup = [])
        }

        function vs(t, e) {
          const n = t[9],
            r = n ? n.get(tr, null) : null;
          r && r.handleError(e)
        }

        function ys(t, e, n, r, s) {
          for (let i = 0; i < n.length;) {
            const o = n[i++],
              a = n[i++],
              l = e[o],
              c = t.data[o];
            null !== c.setInput ? c.setInput(l, s, r, a) : l[a] = s
          }
        }

        function bs(t, e) {
          const n = e[3];
          return -1 === t.index ? Se(n) ? n : null : n
        }

        function ws(t, e) {
          const n = bs(t, e);
          return n ? Ps(e[11], n[7]) : null
        }

        function _s(t, e, n, r, s) {
          if (null != r) {
            let i, o = !1;
            Se(r) ? i = r : Ce(r) && (o = !0, r = r[0]);
            const a = Fe(r);
            0 === t && null !== n ? null == s ? Is(e, n, a) : Ts(e, n, a, s || null) : 1 === t && null !== n ? Ts(e, n, a, s || null) : 2 === t ? function (t, e, n) {
              const r = Ps(t, e);
              r && function (t, e, n, r) {
                Oe(t) ? t.removeChild(e, n, r) : e.removeChild(n)
              }(t, r, e, n)
            }(e, a, o) : 3 === t && e.destroyNode(a), null != i && function (t, e, n, r, s) {
              const i = n[7];
              i !== Fe(n) && _s(e, t, r, i, s);
              for (let o = 9; o < n.length; o++) {
                const s = n[o];
                Ms(s[1], s, t, e, r, i)
              }
            }(e, t, i, n, s)
          }
        }

        function Cs(t, e, n, r) {
          const s = ws(t.node, e);
          s && Ms(t, e, e[11], n ? 1 : 2, s, r)
        }

        function Ss(t, e) {
          const n = t[5],
            r = n.indexOf(e);
          n.splice(r, 1)
        }

        function Es(t, e) {
          if (t.length <= 9) return;
          const n = 9 + e,
            r = t[n];
          if (r) {
            const s = r[17];
            null !== s && s !== t && Ss(s, r), e > 0 && (t[n - 1][4] = r[4]);
            const i = ne(t, 9 + e);
            Cs(r[1], r, !1, null);
            const o = i[5];
            null !== o && o.detachView(i[1]), r[3] = null, r[4] = null, r[2] &= -129
          }
          return r
        }

        function xs(t, e) {
          if (!(256 & e[2])) {
            const n = e[11];
            Oe(n) && n.destroyNode && Ms(t, e, n, 3, null, null),
              function (t) {
                let e = t[13];
                if (!e) return As(t[1], t);
                for (; e;) {
                  let n = null;
                  if (Ce(e)) n = e[13];
                  else {
                    const t = e[9];
                    t && (n = t)
                  }
                  if (!n) {
                    for (; e && !e[4] && e !== t;) Ce(e) && As(e[1], e), e = ks(e, t);
                    null === e && (e = t), Ce(e) && As(e[1], e), n = e && e[4]
                  }
                  e = n
                }
              }(e)
          }
        }

        function ks(t, e) {
          let n;
          return Ce(t) && (n = t[6]) && 2 === n.type ? bs(n, t) : t[3] === e ? null : t[3]
        }

        function As(t, e) {
          if (!(256 & e[2])) {
            e[2] &= -129, e[2] |= 256,
              function (t, e) {
                let n;
                if (null != t && null != (n = t.destroyHooks))
                  for (let r = 0; r < n.length; r += 2) {
                    const t = e[n[r]];
                    t instanceof wn || n[r + 1].call(t)
                  }
              }(t, e),
              function (t, e) {
                const n = t.cleanup;
                if (null !== n) {
                  const t = e[7];
                  for (let r = 0; r < n.length - 1; r += 2)
                    if ("string" == typeof n[r]) {
                      const s = n[r + 1],
                        i = "function" == typeof s ? s(e) : Fe(e[s]),
                        o = t[n[r + 2]],
                        a = n[r + 3];
                      "boolean" == typeof a ? i.removeEventListener(n[r], o, a) : a >= 0 ? t[a]() : t[-a].unsubscribe(), r += 2
                    } else n[r].call(t[n[r + 1]]);
                  e[7] = null
                }
              }(t, e);
            const n = e[6];
            n && 3 === n.type && Oe(e[11]) && e[11].destroy();
            const r = e[17];
            if (null !== r && Se(e[3])) {
              r !== e[3] && Ss(r, e);
              const n = e[5];
              null !== n && n.detachView(t)
            }
          }
        }

        function Ts(t, e, n, r) {
          Oe(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0)
        }

        function Is(t, e, n) {
          Oe(t) ? t.appendChild(e, n) : e.appendChild(n)
        }

        function Os(t, e, n, r) {
          null !== r ? Ts(t, e, n, r) : Is(t, e, n)
        }

        function Ps(t, e) {
          return Oe(t) ? t.parentNode(e) : e.parentNode
        }

        function Fs(t, e, n, r) {
          const s = function (t, e, n) {
            let r = e.parent;
            for (; null != r && (4 === r.type || 5 === r.type);) r = (e = r).parent;
            if (null == r) {
              const t = n[6];
              return 2 === t.type ? ws(t, n) : n[0]
            }
            if (e && 5 === e.type && 4 & e.flags) return Re(e, n).parentNode;
            if (2 & r.flags) {
              const e = t.data,
                n = e[e[r.index].directiveStart].encapsulation;
              if (n !== ae.ShadowDom && n !== ae.Native) return null
            }
            return Re(r, n)
          }(t, r, e);
          if (null != s) {
            const t = e[11],
              i = function (t, e) {
                if (2 === t.type) {
                  const n = bs(t, e);
                  return null === n ? null : Ns(n.indexOf(e, 9) - 9, n)
                }
                return 4 === t.type || 5 === t.type ? Re(t, e) : null
              }(r.parent || e[6], e);
            if (Array.isArray(n))
              for (let e = 0; e < n.length; e++) Os(t, s, n[e], i);
            else Os(t, s, n, i)
          }
        }

        function Ns(t, e) {
          const n = 9 + t + 1;
          if (n < e.length) {
            const t = e[n],
              r = t[1].firstChild;
            if (null !== r) return function t(e, n) {
              if (null !== n) {
                const r = n.type;
                if (3 === r) return Re(n, e);
                if (0 === r) return Ns(-1, e[n.index]);
                if (4 === r || 5 === r) {
                  const r = n.child;
                  if (null !== r) return t(e, r); {
                    const t = e[n.index];
                    return Se(t) ? Ns(-1, t) : Fe(t)
                  }
                } {
                  const r = e[16],
                    s = r[6],
                    i = Sr(r),
                    o = s.projection[n.projection];
                  return null != o ? t(i, o) : t(e, n.next)
                }
              }
              return null
            }(t, r)
          }
          return e[7]
        }

        function Rs(t, e, n, r, s, i, o) {
          for (; null != n;) {
            const a = r[n.index],
              l = n.type;
            o && 0 === e && (a && ur(Fe(a), r), n.flags |= 4), 64 != (64 & n.flags) && (4 === l || 5 === l ? (Rs(t, e, n.child, r, s, i, !1), _s(e, t, s, a, i)) : 1 === l ? Ds(t, e, r, n, s, i) : _s(e, t, s, a, i)), n = o ? n.projectionNext : n.next
          }
        }

        function Ms(t, e, n, r, s, i) {
          Rs(n, r, t.node.child, e, s, i, !1)
        }

        function Ds(t, e, n, r, s, i) {
          const o = n[16],
            a = o[6].projection[r.projection];
          if (Array.isArray(a))
            for (let l = 0; l < a.length; l++) _s(e, t, s, a[l], i);
          else Rs(t, e, a, o[3], s, i, !0)
        }

        function Vs(t, e, n) {
          Oe(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n
        }

        function Ls(t, e, n) {
          Oe(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n
        }
        class Us {
          constructor(t, e) {
            this._lView = t, this._cdRefInjectingView = e, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null
          }
          get rootNodes() {
            const t = this._lView;
            return null == t[0] ? function t(e, n, r, s, i = !1) {
              for (; null !== r;) {
                const o = n[r.index];
                if (null !== o && s.push(Fe(o)), Se(o))
                  for (let e = 9; e < o.length; e++) {
                    const n = o[e],
                      r = n[1].firstChild;
                    null !== r && t(n[1], n, r, s)
                  }
                const a = r.type;
                if (4 === a || 5 === a) t(e, n, r.child, s);
                else if (1 === a) {
                  const e = n[16],
                    i = e[6],
                    o = Sr(e);
                  let a = i.projection[r.projection];
                  null !== a && null !== o && t(o[1], o, a, s, !0)
                }
                r = i ? r.projectionNext : r.next
              }
              return s
            }(t[1], t, t[6].child, []) : []
          }
          get context() {
            return this._lView[8]
          }
          get destroyed() {
            return 256 == (256 & this._lView[2])
          }
          destroy() {
            if (this._appRef) this._appRef.detachView(this);
            else if (this._viewContainerRef) {
              const t = this._viewContainerRef.indexOf(this);
              t > -1 && this._viewContainerRef.detach(t), this._viewContainerRef = null
            }
            xs(this._lView[1], this._lView)
          }
          onDestroy(t) {
            var e, n, r;
            e = this._lView[1], r = t, ms(n = this._lView).push(r), e.firstCreatePass && gs(e).push(n[7].length - 1, null)
          }
          markForCheck() {
            us(this._cdRefInjectingView || this._lView)
          }
          detach() {
            this._lView[2] &= -129
          }
          reattach() {
            this._lView[2] |= 128
          }
          detectChanges() {
            hs(this._lView[1], this._lView, this.context)
          }
          checkNoChanges() {
            ! function (t, e, n) {
              Ye(!0);
              try {
                hs(t, e, n)
              } finally {
                Ye(!1)
              }
            }(this._lView[1], this._lView, this.context)
          }
          attachToViewContainerRef(t) {
            if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
            this._viewContainerRef = t
          }
          detachFromAppRef() {
            var t;
            this._appRef = null, Ms(this._lView[1], t = this._lView, t[11], 2, null, null)
          }
          attachToAppRef(t) {
            if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
            this._appRef = t
          }
        }
        class js extends Us {
          constructor(t) {
            super(t), this._view = t
          }
          detectChanges() {
            ds(this._view)
          }
          checkNoChanges() {
            ! function (t) {
              Ye(!0);
              try {
                ds(t)
              } finally {
                Ye(!1)
              }
            }(this._view)
          }
          get context() {
            return null
          }
        }
        let Hs, $s, qs;

        function zs(t, e, n) {
          return Hs || (Hs = class extends t {}), new Hs(Re(e, n))
        }

        function Gs(t, e, n, r) {
          return $s || ($s = class extends t {
            constructor(t, e, n) {
              super(), this._declarationView = t, this._declarationTContainer = e, this.elementRef = n
            }
            createEmbeddedView(t) {
              const e = this._declarationTContainer.tViews,
                n = Rr(this._declarationView, e, t, 16, null, e.node);
              n[17] = this._declarationView[this._declarationTContainer.index];
              const r = this._declarationView[5];
              null !== r && (n[5] = r.createEmbeddedView(e)), Dr(e, n, t);
              const s = new Us(n);
              return s._tViewNode = n[6], s
            }
          }), 0 === n.type ? new $s(r, n, zs(e, n, r)) : null
        }

        function Bs(t, e, n, r) {
          let s;
          qs || (qs = class extends t {
            constructor(t, e, n) {
              super(), this._lContainer = t, this._hostTNode = e, this._hostView = n
            }
            get element() {
              return zs(e, this._hostTNode, this._hostView)
            }
            get injector() {
              return new Qn(this._hostTNode, this._hostView)
            }
            get parentInjector() {
              const t = jn(this._hostTNode, this._hostView),
                e = In(t, this._hostView),
                n = function (t, e, n) {
                  if (n.parent && -1 !== n.parent.injectorIndex) {
                    const t = n.parent.injectorIndex;
                    let e = n.parent;
                    for (; null != e.parent && t == e.parent.injectorIndex;) e = e.parent;
                    return e
                  }
                  let r = Tn(t),
                    s = e,
                    i = e[6];
                  for (; r > 1;) s = s[15], i = s[6], r--;
                  return i
                }(t, this._hostView, this._hostTNode);
              return kn(t) && null != n ? new Qn(n, e) : new Qn(null, this._hostView)
            }
            clear() {
              for (; this.length > 0;) this.remove(this.length - 1)
            }
            get(t) {
              return null !== this._lContainer[8] && this._lContainer[8][t] || null
            }
            get length() {
              return this._lContainer.length - 9
            }
            createEmbeddedView(t, e, n) {
              const r = t.createEmbeddedView(e || {});
              return this.insert(r, n), r
            }
            createComponent(t, e, n, r, s) {
              const i = n || this.parentInjector;
              if (!s && null == t.ngModule && i) {
                const t = i.get(Kt, null);
                t && (s = t)
              }
              const o = t.create(i, r, void 0, s);
              return this.insert(o.hostView, e), o
            }
            insert(t, e) {
              const n = t._lView,
                r = n[1];
              if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
              if (this.allocateContainerIfNeeded(), Se(n[3])) {
                const e = this.indexOf(t);
                if (-1 !== e) this.detach(e);
                else {
                  const e = n[3],
                    r = new qs(e, e[6], e[3]);
                  r.detach(r.indexOf(t))
                }
              }
              const s = this._adjustIndex(e);
              return function (t, e, n, r) {
                const s = 9 + r,
                  i = n.length;
                r > 0 && (n[s - 1][4] = e), r < i - 9 ? (e[4] = n[s], ee(n, 9 + r, e)) : (n.push(e), e[4] = null), e[3] = n;
                const o = e[17];
                null !== o && n !== o && function (t, e) {
                  const n = t[5],
                    r = e[3][3][16];
                  16 != (16 & r[2]) && e[16] !== r && (t[2] |= 1), null === n ? t[5] = [e] : n.push(e)
                }(o, e);
                const a = e[5];
                null !== a && a.insertView(t), e[2] |= 128
              }(r, n, this._lContainer, s), Cs(r, n, !0, Ns(s, this._lContainer)), t.attachToViewContainerRef(this), ee(this._lContainer[8], s, t), t
            }
            move(t, e) {
              if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
              return this.insert(t, e)
            }
            indexOf(t) {
              const e = this._lContainer[8];
              return null !== e ? e.indexOf(t) : -1
            }
            remove(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1);
              (function (t, e) {
                const n = Es(t, e);
                n && xs(n[1], n)
              })(this._lContainer, e), ne(this._lContainer[8], e)
            }
            detach(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1),
                n = Es(this._lContainer, e);
              return n && null != ne(this._lContainer[8], e) ? new Us(n) : null
            }
            _adjustIndex(t, e = 0) {
              return null == t ? this.length + e : t
            }
            allocateContainerIfNeeded() {
              null === this._lContainer[8] && (this._lContainer[8] = [])
            }
          });
          const i = r[n.index];
          if (Se(i)) s = i,
            function (t, e) {
              t[2] = -2
            }(s);
          else {
            let t;
            if (4 === n.type) t = Fe(i);
            else if (t = r[11].createComment(""), Te(r)) {
              const e = r[11],
                s = Re(n, r);
              Ts(e, Ps(e, s), t, function (t, e) {
                return Oe(t) ? t.nextSibling(e) : e.nextSibling
              }(e, s))
            } else Fs(r[1], r, t, n);
            r[n.index] = s = is(i, r, t, n), cs(r, s)
          }
          return new qs(s, n, r)
        }
        let Ws = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => Zs(), t
        })();
        const Zs = function (t = !1) {
            return function (t, e, n) {
              if (!n && xe(t)) {
                const n = De(t.index, e);
                return new Us(n, n)
              }
              return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new Us(e[16], e) : null
            }(We(), ze(), t)
          },
          Qs = new Lt("Set Injector scope."),
          Js = {},
          Ys = {},
          Ks = [];
        let Xs = void 0;

        function ti() {
          return void 0 === Xs && (Xs = new Yt), Xs
        }

        function ei(t, e = null, n = null, r) {
          return new ni(t, n, e || ti(), r)
        }
        class ni {
          constructor(t, e, n, r = null) {
            this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
            const s = [];
            e && te(e, n => this.processProvider(n, t, e)), te([t], t => this.processInjectorType(t, [], s)), this.records.set(Ut, ii(void 0, this));
            const i = this.records.get(Qs);
            this.scope = null != i ? i.value : null, this.source = r || ("object" == typeof t ? null : wt(t))
          }
          get destroyed() {
            return this._destroyed
          }
          destroy() {
            this.assertNotDestroyed(), this._destroyed = !0;
            try {
              this.onDestroy.forEach(t => t.ngOnDestroy())
            } finally {
              this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
            }
          }
          get(t, e = jt, n = at.Default) {
            this.assertNotDestroyed();
            const r = Gt(this);
            try {
              if (!(n & at.SkipSelf)) {
                let e = this.records.get(t);
                if (void 0 === e) {
                  const n = ("function" == typeof (s = t) || "object" == typeof s && s instanceof Lt) && dt(t);
                  e = n && this.injectableDefInScope(n) ? ii(ri(t), Js) : null, this.records.set(t, e)
                }
                if (null != e) return this.hydrate(t, e)
              }
              return (n & at.Self ? ti() : this.parent).get(t, e = n & at.Optional && e === jt ? null : e)
            } catch (i) {
              if ("NullInjectorError" === i.name) {
                if ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(wt(t)), r) throw i;
                return function (t, e, n, r) {
                  const s = t.ngTempTokenPath;
                  throw e.__source && s.unshift(e.__source), t.message = function (t, e, n, r = null) {
                    t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                    let s = wt(e);
                    if (Array.isArray(e)) s = e.map(wt).join(" -> ");
                    else if ("object" == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let r = e[n];
                          t.push(n + ":" + ("string" == typeof r ? JSON.stringify(r) : wt(r)))
                        } s = `{${t.join(", ")}}`
                    }
                    return `${n}${r?"("+r+")":""}[${s}]: ${t.replace(Ht,"\n  ")}`
                  }("\n" + t.message, s, n, r), t.ngTokenPath = s, t.ngTempTokenPath = null, t
                }(i, t, "R3InjectorError", this.source)
              }
              throw i
            } finally {
              Gt(r)
            }
            var s
          }
          _resolveInjectorDefTypes() {
            this.injectorDefTypes.forEach(t => this.get(t))
          }
          toString() {
            const t = [];
            return this.records.forEach((e, n) => t.push(wt(n))), `R3Injector[${t.join(", ")}]`
          }
          assertNotDestroyed() {
            if (this._destroyed) throw new Error("Injector has already been destroyed.")
          }
          processInjectorType(t, e, n) {
            if (!(t = Et(t))) return !1;
            let r = ft(t);
            const s = null == r && t.ngModule || void 0,
              i = void 0 === s ? t : s,
              o = -1 !== n.indexOf(i);
            if (void 0 !== s && (r = ft(s)), null == r) return !1;
            if (null != r.imports && !o) {
              let t;
              n.push(i);
              try {
                te(r.imports, r => {
                  this.processInjectorType(r, e, n) && (void 0 === t && (t = []), t.push(r))
                })
              } finally {}
              if (void 0 !== t)
                for (let e = 0; e < t.length; e++) {
                  const {
                    ngModule: n,
                    providers: r
                  } = t[e];
                  te(r, t => this.processProvider(t, n, r || Ks))
                }
            }
            this.injectorDefTypes.add(i), this.records.set(i, ii(r.factory, Js));
            const a = r.providers;
            if (null != a && !o) {
              const e = t;
              te(a, t => this.processProvider(t, e, a))
            }
            return void 0 !== s && void 0 !== t.providers
          }
          processProvider(t, e, n) {
            let r = ai(t = Et(t)) ? t : Et(t && t.provide);
            const s = function (t, e, n) {
              return oi(t) ? ii(void 0, t.useValue) : ii(si(t, e, n), Js)
            }(t, e, n);
            if (ai(t) || !0 !== t.multi) {
              const t = this.records.get(r);
              t && void 0 !== t.multi && dr()
            } else {
              let e = this.records.get(r);
              e ? void 0 === e.multi && dr() : (e = ii(void 0, Js, !0), e.factory = () => Jt(e.multi), this.records.set(r, e)), r = t, e.multi.push(t)
            }
            this.records.set(r, s)
          }
          hydrate(t, e) {
            var n;
            return e.value === Ys ? function (t) {
              throw new Error(`Cannot instantiate cyclic dependency! ${t}`)
            }(wt(t)) : e.value === Js && (e.value = Ys, e.value = e.factory()), "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value
          }
          injectableDefInScope(t) {
            return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || t.providedIn === this.scope : this.injectorDefTypes.has(t.providedIn))
          }
        }

        function ri(t) {
          const e = dt(t),
            n = null !== e ? e.factory : we(t);
          if (null !== n) return n;
          const r = ft(t);
          if (null !== r) return r.factory;
          if (t instanceof Lt) throw new Error(`Token ${wt(t)} is missing a \u0275prov definition.`);
          if (t instanceof Function) return function (t) {
            const e = t.length;
            if (e > 0) {
              const n = function (t, e) {
                const n = [];
                for (let r = 0; r < t; r++) n.push("?");
                return n
              }(e);
              throw new Error(`Can't resolve all parameters for ${wt(t)}: (${n.join(", ")}).`)
            }
            const n = function (t) {
              const e = t && (t[mt] || t[yt] || t[vt] && t[vt]());
              if (e) {
                const n = function (t) {
                  if (t.hasOwnProperty("name")) return t.name;
                  const e = ("" + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? "" : e[1]
                }(t);
                return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\n` + `This will become an error in v10. Please add @Injectable() to the "${n}" class.`), e
              }
              return null
            }(t);
            return null !== n ? () => n.factory(t) : () => new t
          }(t);
          throw new Error("unreachable")
        }

        function si(t, e, n) {
          let r = void 0;
          if (ai(t)) {
            const e = Et(t);
            return we(e) || ri(e)
          }
          if (oi(t)) r = () => Et(t.useValue);
          else if ((s = t) && s.useFactory) r = () => t.useFactory(...Jt(t.deps || []));
          else if (function (t) {
              return !(!t || !t.useExisting)
            }(t)) r = () => Zt(Et(t.useExisting));
          else {
            const s = Et(t && (t.useClass || t.provide));
            if (s || function (t, e, n) {
                let r = "";
                throw t && e && (r = ` - only instances of Provider and Type are allowed, got: [${e.map(t=>t==n?"?"+n+"?":"...").join(", ")}]`), new Error(`Invalid provider for the NgModule '${wt(t)}'` + r)
              }(e, n, t), ! function (t) {
                return !!t.deps
              }(t)) return we(s) || ri(s);
            r = () => new s(...Jt(t.deps))
          }
          var s;
          return r
        }

        function ii(t, e, n = !1) {
          return {
            factory: t,
            value: e,
            multi: n ? [] : void 0
          }
        }

        function oi(t) {
          return null !== t && "object" == typeof t && $t in t
        }

        function ai(t) {
          return "function" == typeof t
        }
        const li = function (t, e, n) {
          return function (t, e = null, n = null, r) {
            const s = ei(t, e, n, r);
            return s._resolveInjectorDefTypes(), s
          }({
            name: n
          }, e, t, n)
        };
        let ci = (() => {
          class t {
            static create(t, e) {
              return Array.isArray(t) ? li(t, e, "") : li(t.providers, t.parent, t.name || "")
            }
          }
          return t.THROW_IF_NOT_FOUND = jt, t.NULL = new Yt, t.\u0275prov = ut({
            token: t,
            providedIn: "any",
            factory: () => Zt(Ut)
          }), t.__NG_ELEMENT_ID__ = -1, t
        })();
        const ui = new Lt("AnalyzeForEntryComponents");
        let hi = new Map;
        const di = new Set;

        function pi(t) {
          return "string" == typeof t ? t : t.text()
        }

        function fi(t, e) {
          let n = t.styles,
            r = t.classes,
            s = 0;
          for (let i = 0; i < e.length; i++) {
            const t = e[i];
            "number" == typeof t ? s = t : 1 == s ? r = _t(r, t) : 2 == s && (n = _t(n, t + ": " + e[++i] + ";"))
          }
          null !== n && (t.styles = n), null !== r && (t.classes = r)
        }
        let mi = null;

        function gi() {
          if (!mi) {
            const t = Ot.Symbol;
            if (t && t.iterator) mi = t.iterator;
            else {
              const t = Object.getOwnPropertyNames(Map.prototype);
              for (let e = 0; e < t.length; ++e) {
                const n = t[e];
                "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (mi = n)
              }
            }
          }
          return mi
        }

        function vi(t, e) {
          return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
        }
        class yi {
          constructor(t) {
            this.wrapped = t
          }
          static wrap(t) {
            return new yi(t)
          }
          static unwrap(t) {
            return yi.isWrapped(t) ? t.wrapped : t
          }
          static isWrapped(t) {
            return t instanceof yi
          }
        }

        function bi(t) {
          return !!wi(t) && (Array.isArray(t) || !(t instanceof Map) && gi() in t)
        }

        function wi(t) {
          return null !== t && ("function" == typeof t || "object" == typeof t)
        }

        function _i(t, e, n) {
          return t[e] = n
        }

        function Ci(t, e, n) {
          return !Object.is(t[e], n) && (t[e] = n, !0)
        }

        function Si(t, e, n, r) {
          const s = ze();
          return Ci(s, Xe(), e) && (Ge(), function (t, e, n, r, s, i) {
            const o = Re(t, e),
              a = e[11];
            if (null == r) Oe(a) ? a.removeAttribute(o, n, i) : o.removeAttribute(n);
            else {
              const e = null == s ? On(r) : s(r, t.tagName || "", n);
              Oe(a) ? a.setAttribute(o, n, e, i) : i ? o.setAttributeNS(i, n, e) : o.setAttribute(n, e)
            }
          }(pn(), s, t, e, n, r)), Si
        }

        function Ei(t, e, n, r) {
          return Ci(t, Xe(), n) ? e + On(n) + r : Cr
        }

        function xi(t, e, n, r, s, i, o, a) {
          const l = ze(),
            c = Ge(),
            u = t + 19,
            h = c.firstCreatePass ? function (t, e, n, r, s, i, o, a, l) {
              const c = e.consts,
                u = Mr(e, n[6], t, 0, o || null, je(c, a));
              Wr(e, n, u, je(c, l)), fn(e, u);
              const h = u.tViews = qr(2, -1, r, s, i, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c),
                d = zr(0, null, 2, -1, null, null);
              return d.injectorIndex = u.injectorIndex, h.node = d, null !== e.queries && (e.queries.template(e, u), h.queries = e.queries.embeddedTView(u)), u
            }(t, c, l, e, n, r, s, i, o) : c.data[u];
          Ze(h, !1);
          const d = l[11].createComment("");
          Fs(c, l, d, h), ur(d, l), cs(l, l[u] = is(d, l, d, h)), ke(h) && jr(c, l, h), null != o && Hr(l, h, a)
        }

        function ki(t, e = at.Default) {
          const n = ze();
          return null == n ? Zt(t, e) : $n(We(), n, Et(t), e)
        }

        function Ai(t) {
          return function (t, e) {
            if ("class" === e) return t.classes;
            if ("style" === e) return t.styles;
            const n = t.attrs;
            if (n) {
              const t = n.length;
              let r = 0;
              for (; r < t;) {
                const s = n[r];
                if (Cn(s)) break;
                if (0 === s) r += 2;
                else if ("number" == typeof s)
                  for (r++; r < t && "string" == typeof n[r];) r++;
                else {
                  if (s === e) return n[r + 1];
                  r += 2
                }
              }
            }
            return null
          }(We(), t)
        }

        function Ti() {
          throw new Error("invalid")
        }

        function Ii(t, e, n) {
          const r = ze();
          return Ci(r, Xe(), e) && Br(Ge(), pn(), r, t, e, r[11], n, !1), Ii
        }

        function Oi(t, e, n, r, s) {
          const i = s ? "class" : "style";
          ys(t, n, e.inputs[i], i, r)
        }

        function Pi(t, e, n, r) {
          const s = ze(),
            i = Ge(),
            o = 19 + t,
            a = s[11],
            l = s[o] = Nr(e, a, $e.lFrame.currentNamespace),
            c = i.firstCreatePass ? function (t, e, n, r, s, i, o) {
              const a = e.consts,
                l = je(a, i),
                c = Mr(e, n[6], t, 3, s, l);
              return Wr(e, n, c, je(a, o)), null !== c.mergedAttrs && fi(c, c.mergedAttrs), null !== e.queries && e.queries.elementStart(e, c), c
            }(t, i, s, 0, e, n, r) : i.data[o];
          Ze(c, !0);
          const u = c.mergedAttrs;
          null !== u && _n(a, l, u);
          const h = c.classes;
          null !== h && Ls(a, l, h);
          const d = c.styles;
          null !== d && Vs(a, l, d), Fs(i, s, l, c), 0 === $e.lFrame.elementDepthCount && ur(l, s), $e.lFrame.elementDepthCount++, ke(c) && (jr(i, s, c), function (t, e, n) {
            if (Ee(e)) {
              const r = e.directiveEnd;
              for (let s = e.directiveStart; s < r; s++) {
                const e = t.data[s];
                e.contentQueries && e.contentQueries(1, n[s], s)
              }
            }
          }(i, c, s)), null !== r && Hr(s, c)
        }

        function Fi() {
          let t = We();
          Qe() ? $e.lFrame.isParent = !1 : (t = t.parent, Ze(t, !1));
          const e = t;
          $e.lFrame.elementDepthCount--;
          const n = Ge();
          n.firstCreatePass && (fn(n, t), Ee(t) && n.queries.elementEnd(t)), null !== e.classes && function (t) {
            return 0 != (16 & t.flags)
          }(e) && Oi(n, e, ze(), e.classes, !0), null !== e.styles && function (t) {
            return 0 != (32 & t.flags)
          }(e) && Oi(n, e, ze(), e.styles, !1)
        }

        function Ni(t, e, n, r) {
          Pi(t, e, n, r), Fi()
        }

        function Ri() {
          return ze()
        }

        function Mi(t) {
          return !!t && "function" == typeof t.then
        }

        function Di(t) {
          return !!t && "function" == typeof t.subscribe
        }

        function Vi(t, e, n = !1, r) {
          const s = ze(),
            i = Ge(),
            o = We();
          return function (t, e, n, r, s, i, o = !1, a) {
            const l = ke(r),
              c = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
              u = ms(e);
            let h = !0;
            if (3 === r.type) {
              const d = Re(r, e),
                p = a ? a(d) : le,
                f = p.target || d,
                m = u.length,
                g = a ? t => a(Fe(t[r.index])).target : r.index;
              if (Oe(n)) {
                let o = null;
                if (!a && l && (o = function (t, e, n, r) {
                    const s = t.cleanup;
                    if (null != s)
                      for (let i = 0; i < s.length - 1; i += 2) {
                        const t = s[i];
                        if (t === n && s[i + 1] === r) {
                          const t = e[7],
                            n = s[i + 2];
                          return t.length > n ? t[n] : null
                        }
                        "string" == typeof t && (i += 2)
                      }
                    return null
                  }(t, e, s, r.index)), null !== o)(o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i, o.__ngLastListenerFn__ = i, h = !1;
                else {
                  i = Ui(r, e, i, !1);
                  const t = n.listen(p.name || f, s, i);
                  u.push(i, t), c && c.push(s, g, m, m + 1)
                }
              } else i = Ui(r, e, i, !0), f.addEventListener(s, i, o), u.push(i), c && c.push(s, g, m, o)
            }
            const d = r.outputs;
            let p;
            if (h && null !== d && (p = d[s])) {
              const t = p.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(i),
                    o = u.length;
                  u.push(i, t), c && c.push(s, r.index, o, -(o + 1))
                }
            }
          }(i, s, s[11], o, t, e, n, r), Vi
        }

        function Li(t, e, n) {
          try {
            return !1 !== e(n)
          } catch (r) {
            return vs(t, r), !1
          }
        }

        function Ui(t, e, n, r) {
          return function s(i) {
            if (i === Function) return n;
            const o = 2 & t.flags ? De(t.index, e) : e;
            0 == (32 & e[2]) && us(o);
            let a = Li(e, n, i),
              l = s.__ngNextListenerFn__;
            for (; l;) a = Li(e, l, i) && a, l = l.__ngNextListenerFn__;
            return r && !1 === a && (i.preventDefault(), i.returnValue = !1), a
          }
        }

        function ji(t = 1) {
          return function (t) {
            return ($e.lFrame.contextLView = function (t, e) {
              for (; t > 0;) e = e[15], t--;
              return e
            }(t, $e.lFrame.contextLView))[8]
          }(t)
        }

        function Hi(t, e, n, r, s) {
          const i = ze(),
            o = Ei(i, e, n, r);
          return o !== Cr && Br(Ge(), pn(), i, t, o, i[11], s, !1), Hi
        }
        const $i = [];

        function qi(t, e, n, r, s) {
          const i = t[n + 1],
            o = null === e;
          let a = r ? Ar(i) : Ir(i),
            l = !1;
          for (; 0 !== a && (!1 === l || o);) {
            const n = t[a + 1];
            zi(t[a], e) && (l = !0, t[a + 1] = r ? Pr(n) : Tr(n)), a = r ? Ar(n) : Ir(n)
          }
          l && (t[n + 1] = r ? Tr(i) : Pr(i))
        }

        function zi(t, e) {
          return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && ie(t, e) >= 0
        }

        function Gi(t, e) {
          return function (t, e, n, r) {
            const s = ze(),
              i = Ge(),
              o = function (t) {
                const e = $e.lFrame,
                  n = e.bindingIndex;
                return e.bindingIndex = e.bindingIndex + 2, n
              }();
            if (i.firstUpdatePass && function (t, e, n, r) {
                const s = t.data;
                if (null === s[n + 1]) {
                  const r = s[hn() + 19],
                    i = function (t, e) {
                      return e >= t.expandoStartIndex
                    }(t, n);
                  (function (t, e) {
                    return 0 != (16 & t.flags)
                  })(r) && null === e && !i && (e = !1), e = function (t, e, n, r) {
                      const s = function (t) {
                        const e = $e.lFrame.currentDirectiveIndex;
                        return -1 === e ? null : t[e]
                      }(t);
                      let i = e.residualClasses;
                      if (null === s) 0 === e.classBindings && (n = Wi(n = Bi(null, t, e, n, !0), e.attrs, !0), i = null);
                      else {
                        const r = e.directiveStylingLast;
                        if (-1 === r || t[r] !== s)
                          if (n = Bi(s, t, e, n, !0), null === i) {
                            let n = function (t, e, n) {
                              const r = e.classBindings;
                              if (0 !== Ir(r)) return t[Ar(r)]
                            }(t, e);
                            void 0 !== n && Array.isArray(n) && (n = Bi(null, t, e, n[1], !0), n = Wi(n, e.attrs, !0), function (t, e, n, r) {
                              t[Ar(e.classBindings)] = r
                            }(t, e, 0, n))
                          } else i = function (t, e, n) {
                            let r = void 0;
                            const s = e.directiveEnd;
                            for (let i = 1 + e.directiveStylingLast; i < s; i++) r = Wi(r, t[i].hostAttrs, !0);
                            return Wi(r, e.attrs, !0)
                          }(t, e)
                      }
                      return void 0 !== i && (e.residualClasses = i), n
                    }(s, r, e),
                    function (t, e, n, r, s, i) {
                      let o = e.classBindings,
                        a = Ar(o),
                        l = Ir(o);
                      t[r] = n;
                      let c, u = !1;
                      if (Array.isArray(n)) {
                        const t = n;
                        c = t[1], (null === c || ie(t, c) > 0) && (u = !0)
                      } else c = n;
                      if (s)
                        if (0 !== l) {
                          const e = Ar(t[a + 1]);
                          t[r + 1] = kr(e, a), 0 !== e && (t[e + 1] = Or(t[e + 1], r)), t[a + 1] = 131071 & t[a + 1] | r << 17
                        } else t[r + 1] = kr(a, 0), 0 !== a && (t[a + 1] = Or(t[a + 1], r)), a = r;
                      else t[r + 1] = kr(l, 0), 0 === a ? a = r : t[l + 1] = Or(t[l + 1], r), l = r;
                      u && (t[r + 1] = Tr(t[r + 1])), qi(t, c, r, !0), qi(t, c, r, !1),
                        function (t, e, n, r, s) {
                          const i = t.residualClasses;
                          null != i && "string" == typeof e && ie(i, e) >= 0 && (n[r + 1] = Pr(n[r + 1]))
                        }(e, c, t, r), o = kr(a, l), e.classBindings = o
                    }(s, r, e, n, i)
                }
              }(i, t, o), e !== Cr && Ci(s, o, e)) {
              let r;
              null == n && (r = function () {
                  const t = $e.lFrame;
                  return null === t ? null : t.currentSanitizer
                }()) && (n = r),
                function (t, e, n, r, s, i, o, a) {
                  if (3 !== e.type) return;
                  const l = t.data,
                    c = l[a + 1];
                  Qi(1 == (1 & c) ? Zi(l, e, n, s, Ir(c), !0) : void 0) || (Qi(i) || function (t) {
                    return 2 == (2 & t)
                  }(c) && (i = Zi(l, null, n, s, a, !0)), function (t, e, n, r, s) {
                    const i = Oe(t);
                    s ? i ? t.addClass(n, r) : n.classList.add(r) : i ? t.removeClass(n, r) : n.classList.remove(r)
                  }(r, 0, Ne(hn(), n), s, i))
                }(i, i.data[hn() + 19], s, s[11], t, s[o + 1] = function (t, e) {
                  return null == t || ("function" == typeof e ? t = e(t) : "string" == typeof e ? t += e : "object" == typeof t && (t = wt(nr(t)))), t
                }(e, n), 0, o)
            }
          }(t, e, null), Gi
        }

        function Bi(t, e, n, r, s) {
          let i = null;
          const o = n.directiveEnd;
          let a = n.directiveStylingLast;
          for (-1 === a ? a = n.directiveStart : a++; a < o && (i = e[a], r = Wi(r, i.hostAttrs, s), i !== t);) a++;
          return null !== t && (n.directiveStylingLast = a), r
        }

        function Wi(t, e, n) {
          const r = n ? 1 : 2;
          let s = -1;
          if (null !== e)
            for (let i = 0; i < e.length; i++) {
              const o = e[i];
              "number" == typeof o ? s = o : s === r && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), re(t, o, !!n || e[++i]))
            }
          return void 0 === t ? null : t
        }

        function Zi(t, e, n, r, s, i) {
          const o = null === e;
          let a = void 0;
          for (; s > 0;) {
            const e = t[s],
              i = Array.isArray(e),
              l = i ? e[1] : e,
              c = null === l;
            let u = n[s + 1];
            u === Cr && (u = c ? $i : void 0);
            let h = c ? se(u, r) : l === r ? u : void 0;
            if (i && !Qi(h) && (h = se(e, r)), Qi(h) && (a = h, o)) return a;
            const d = t[s + 1];
            s = o ? Ar(d) : Ir(d)
          }
          if (null !== e) {
            let t = i ? e.residualClasses : e.residualStyles;
            null != t && (a = se(t, r))
          }
          return a
        }

        function Qi(t) {
          return void 0 !== t
        }

        function Ji(t, e = "") {
          const n = ze(),
            r = Ge(),
            s = t + 19,
            i = r.firstCreatePass ? Mr(r, n[6], t, 3, null, null) : r.data[s],
            o = n[s] = function (t, e) {
              return Oe(e) ? e.createText(t) : e.createTextNode(t)
            }(e, n[11]);
          Fs(r, n, o, i), Ze(i, !1)
        }

        function Yi(t) {
          return Ki("", t, ""), Yi
        }

        function Ki(t, e, n) {
          const r = ze(),
            s = Ei(r, t, e, n);
          return s !== Cr && function (t, e, n) {
            const r = Ne(e, t),
              s = t[11];
            Oe(s) ? s.setValue(r, n) : r.textContent = n
          }(r, hn(), s), Ki
        }

        function Xi(t, e, n) {
          const r = ze();
          return Ci(r, Xe(), e) && Br(Ge(), pn(), r, t, e, r[11], n, !0), Xi
        }

        function to(t, e) {
          const n = Ve(t)[1],
            r = n.data.length - 1;
          fn(n, {
            directiveStart: r,
            directiveEnd: r + 1
          })
        }

        function eo(t) {
          let e = Object.getPrototypeOf(t.type.prototype).constructor,
            n = !0;
          const r = [t];
          for (; e;) {
            let s = void 0;
            if (Ae(t)) s = e.\u0275cmp || e.\u0275dir;
            else {
              if (e.\u0275cmp) throw new Error("Directives cannot inherit Components");
              s = e.\u0275dir
            }
            if (s) {
              if (n) {
                r.push(s);
                const e = t;
                e.inputs = no(t.inputs), e.declaredInputs = no(t.declaredInputs), e.outputs = no(t.outputs);
                const n = s.hostBindings;
                n && io(t, n);
                const i = s.viewQuery,
                  o = s.contentQueries;
                if (i && ro(t, i), o && so(t, o), ct(t.inputs, s.inputs), ct(t.declaredInputs, s.declaredInputs), ct(t.outputs, s.outputs), Ae(s) && s.data.animation) {
                  const e = t.data;
                  e.animation = (e.animation || []).concat(s.data.animation)
                }
                e.afterContentChecked = e.afterContentChecked || s.afterContentChecked, e.afterContentInit = t.afterContentInit || s.afterContentInit, e.afterViewChecked = t.afterViewChecked || s.afterViewChecked, e.afterViewInit = t.afterViewInit || s.afterViewInit, e.doCheck = t.doCheck || s.doCheck, e.onDestroy = t.onDestroy || s.onDestroy, e.onInit = t.onInit || s.onInit
              }
              const e = s.features;
              if (e)
                for (let r = 0; r < e.length; r++) {
                  const s = e[r];
                  s && s.ngInherit && s(t), s === eo && (n = !1)
                }
            }
            e = Object.getPrototypeOf(e)
          }! function (t) {
            let e = 0,
              n = null;
            for (let r = t.length - 1; r >= 0; r--) {
              const s = t[r];
              s.hostVars = e += s.hostVars, s.hostAttrs = En(s.hostAttrs, n = En(n, s.hostAttrs))
            }
          }(r)
        }

        function no(t) {
          return t === le ? {} : t === ce ? [] : t
        }

        function ro(t, e) {
          const n = t.viewQuery;
          t.viewQuery = n ? (t, r) => {
            e(t, r), n(t, r)
          } : e
        }

        function so(t, e) {
          const n = t.contentQueries;
          t.contentQueries = n ? (t, r, s) => {
            e(t, r, s), n(t, r, s)
          } : e
        }

        function io(t, e) {
          const n = t.hostBindings;
          t.hostBindings = n ? (t, r) => {
            e(t, r), n(t, r)
          } : e
        }
        class oo {
          constructor(t, e, n) {
            this.previousValue = t, this.currentValue = e, this.firstChange = n
          }
          isFirstChange() {
            return this.firstChange
          }
        }

        function ao(t) {
          t.type.prototype.ngOnChanges && (t.setInput = lo, t.onChanges = function () {
            const t = co(this),
              e = t && t.current;
            if (e) {
              const n = t.previous;
              if (n === le) t.previous = e;
              else
                for (let t in e) n[t] = e[t];
              t.current = null, this.ngOnChanges(e)
            }
          })
        }

        function lo(t, e, n, r) {
          const s = co(t) || function (t, e) {
              return t.__ngSimpleChanges__ = e
            }(t, {
              previous: le,
              current: null
            }),
            i = s.current || (s.current = {}),
            o = s.previous,
            a = this.declaredInputs[n],
            l = o[a];
          i[a] = new oo(l && l.currentValue, e, o === le), t[r] = e
        }

        function co(t) {
          return t.__ngSimpleChanges__ || null
        }

        function uo(t, e, n, r, s) {
          if (t = Et(t), Array.isArray(t))
            for (let i = 0; i < t.length; i++) uo(t[i], e, n, r, s);
          else {
            const i = Ge(),
              o = ze();
            let a = ai(t) ? t : Et(t.provide),
              l = si(t);
            const c = We(),
              u = 65535 & c.providerIndexes,
              h = c.directiveStart,
              d = c.providerIndexes >> 16;
            if (ai(t) || !t.multi) {
              const r = new wn(l, s, ki),
                p = fo(a, e, s ? u : u + d, h); - 1 === p ? (Hn(Vn(c, o), i, a), ho(i, t, e.length), e.push(a), c.directiveStart++, c.directiveEnd++, s && (c.providerIndexes += 65536), n.push(r), o.push(r)) : (n[p] = r, o[p] = r)
            } else {
              const p = fo(a, e, u + d, h),
                f = fo(a, e, u, u + d),
                m = p >= 0 && n[p],
                g = f >= 0 && n[f];
              if (s && !g || !s && !m) {
                Hn(Vn(c, o), i, a);
                const u = function (t, e, n, r, s) {
                  const i = new wn(t, n, ki);
                  return i.multi = [], i.index = e, i.componentProviders = 0, po(i, s, r && !n), i
                }(s ? go : mo, n.length, s, r, l);
                !s && g && (n[f].providerFactory = u), ho(i, t, e.length), e.push(a), c.directiveStart++, c.directiveEnd++, s && (c.providerIndexes += 65536), n.push(u), o.push(u)
              } else ho(i, t, p > -1 ? p : f), po(n[s ? f : p], l, !s && r);
              !s && r && g && n[f].componentProviders++
            }
          }
        }

        function ho(t, e, n) {
          if (ai(e) || e.useClass) {
            const r = (e.useClass || e).prototype.ngOnDestroy;
            r && (t.destroyHooks || (t.destroyHooks = [])).push(n, r)
          }
        }

        function po(t, e, n) {
          t.multi.push(e), n && t.componentProviders++
        }

        function fo(t, e, n, r) {
          for (let s = n; s < r; s++)
            if (e[s] === t) return s;
          return -1
        }

        function mo(t, e, n, r) {
          return vo(this.multi, [])
        }

        function go(t, e, n, r) {
          const s = this.multi;
          let i;
          if (this.providerFactory) {
            const t = this.providerFactory.componentProviders,
              e = Bn(n, n[1], this.providerFactory.index, r);
            i = e.slice(0, t), vo(s, i);
            for (let n = t; n < e.length; n++) i.push(e[n])
          } else i = [], vo(s, i);
          return i
        }

        function vo(t, e) {
          for (let n = 0; n < t.length; n++) e.push((0, t[n])());
          return e
        }

        function yo(t, e = []) {
          return n => {
            n.providersResolver = (n, r) => function (t, e, n) {
              const r = Ge();
              if (r.firstCreatePass) {
                const s = Ae(t);
                uo(n, r.data, r.blueprint, s, !0), uo(e, r.data, r.blueprint, s, !1)
              }
            }(n, r ? r(t) : t, e)
          }
        }
        ao.ngInherit = !0;
        class bo {}
        class wo {
          resolveComponentFactory(t) {
            throw function (t) {
              const e = Error(`No component factory found for ${wt(t)}. Did you add it to @NgModule.entryComponents?`);
              return e.ngComponent = t, e
            }(t)
          }
        }
        let _o = (() => {
            class t {}
            return t.NULL = new wo, t
          })(),
          Co = (() => {
            class t {
              constructor(t) {
                this.nativeElement = t
              }
            }
            return t.__NG_ELEMENT_ID__ = () => So(t), t
          })();
        const So = function (t) {
          return zs(t, We(), ze())
        };
        class Eo {}
        const xo = function () {
          var t = {
            Important: 1,
            DashCase: 2
          };
          return t[t.Important] = "Important", t[t.DashCase] = "DashCase", t
        }();
        let ko = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => Ao(), t
        })();
        const Ao = function () {
          const t = ze(),
            e = De(We().index, t);
          return function (t) {
            const e = t[11];
            if (Oe(e)) return e;
            throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")
          }(Ce(e) ? e : t)
        };
        let To = (() => {
          class t {}
          return t.\u0275prov = ut({
            token: t,
            providedIn: "root",
            factory: () => null
          }), t
        })();
        class Io {
          constructor(t) {
            this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
          }
        }
        const Oo = new Io("9.1.0");
        class Po {
          constructor() {}
          supports(t) {
            return bi(t)
          }
          create(t) {
            return new No(t)
          }
        }
        const Fo = (t, e) => e;
        class No {
          constructor(t) {
            this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || Fo
          }
          forEachItem(t) {
            let e;
            for (e = this._itHead; null !== e; e = e._next) t(e)
          }
          forEachOperation(t) {
            let e = this._itHead,
              n = this._removalsHead,
              r = 0,
              s = null;
            for (; e || n;) {
              const i = !n || e && e.currentIndex < Vo(n, r, s) ? e : n,
                o = Vo(i, r, s),
                a = i.currentIndex;
              if (i === n) r--, n = n._nextRemoved;
              else if (e = e._next, null == i.previousIndex) r++;
              else {
                s || (s = []);
                const t = o - r,
                  e = a - r;
                if (t != e) {
                  for (let n = 0; n < t; n++) {
                    const r = n < s.length ? s[n] : s[n] = 0,
                      i = r + n;
                    e <= i && i < t && (s[n] = r + 1)
                  }
                  s[i.previousIndex] = e - t
                }
              }
              o !== a && t(i, o, a)
            }
          }
          forEachPreviousItem(t) {
            let e;
            for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
          }
          forEachAddedItem(t) {
            let e;
            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
          }
          forEachMovedItem(t) {
            let e;
            for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
          }
          forEachRemovedItem(t) {
            let e;
            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
          }
          forEachIdentityChange(t) {
            let e;
            for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
          }
          diff(t) {
            if (null == t && (t = []), !bi(t)) throw new Error(`Error trying to diff '${wt(t)}'. Only arrays and iterables are allowed`);
            return this.check(t) ? this : null
          }
          onDestroy() {}
          check(t) {
            this._reset();
            let e, n, r, s = this._itHead,
              i = !1;
            if (Array.isArray(t)) {
              this.length = t.length;
              for (let e = 0; e < this.length; e++) n = t[e], r = this._trackByFn(e, n), null !== s && vi(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, n, r, e)), vi(s.item, n) || this._addIdentityChange(s, n)) : (s = this._mismatch(s, n, r, e), i = !0), s = s._next
            } else e = 0,
              function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[gi()]();
                  let r;
                  for (; !(r = n.next()).done;) e(r.value)
                }
              }(t, t => {
                r = this._trackByFn(e, t), null !== s && vi(s.trackById, r) ? (i && (s = this._verifyReinsertion(s, t, r, e)), vi(s.item, t) || this._addIdentityChange(s, t)) : (s = this._mismatch(s, t, r, e), i = !0), s = s._next, e++
              }), this.length = e;
            return this._truncate(s), this.collection = t, this.isDirty
          }
          get isDirty() {
            return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
          }
          _reset() {
            if (this.isDirty) {
              let t, e;
              for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
              for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
              for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
              this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
            }
          }
          _mismatch(t, e, n, r) {
            let s;
            return null === t ? s = this._itTail : (s = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (vi(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, s, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (vi(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, s, r)) : t = this._addAfter(new Ro(e, n), s, r), t
          }
          _verifyReinsertion(t, e, n, r) {
            let s = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
            return null !== s ? t = this._reinsertAfter(s, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t
          }
          _truncate(t) {
            for (; null !== t;) {
              const e = t._next;
              this._addToRemovals(this._unlink(t)), t = e
            }
            null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
          }
          _reinsertAfter(t, e, n) {
            null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
            const r = t._prevRemoved,
              s = t._nextRemoved;
            return null === r ? this._removalsHead = s : r._nextRemoved = s, null === s ? this._removalsTail = r : s._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t
          }
          _moveAfter(t, e, n) {
            return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
          }
          _addAfter(t, e, n) {
            return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
          }
          _insertAfter(t, e, n) {
            const r = null === e ? this._itHead : e._next;
            return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Do), this._linkedRecords.put(t), t.currentIndex = n, t
          }
          _remove(t) {
            return this._addToRemovals(this._unlink(t))
          }
          _unlink(t) {
            null !== this._linkedRecords && this._linkedRecords.remove(t);
            const e = t._prev,
              n = t._next;
            return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
          }
          _addToMoves(t, e) {
            return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t
          }
          _addToRemovals(t) {
            return null === this._unlinkedRecords && (this._unlinkedRecords = new Do), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
          }
          _addIdentityChange(t, e) {
            return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
          }
        }
        class Ro {
          constructor(t, e) {
            this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
          }
        }
        class Mo {
          constructor() {
            this._head = null, this._tail = null
          }
          add(t) {
            null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
          }
          get(t, e) {
            let n;
            for (n = this._head; null !== n; n = n._nextDup)
              if ((null === e || e <= n.currentIndex) && vi(n.trackById, t)) return n;
            return null
          }
          remove(t) {
            const e = t._prevDup,
              n = t._nextDup;
            return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
          }
        }
        class Do {
          constructor() {
            this.map = new Map
          }
          put(t) {
            const e = t.trackById;
            let n = this.map.get(e);
            n || (n = new Mo, this.map.set(e, n)), n.add(t)
          }
          get(t, e) {
            const n = this.map.get(t);
            return n ? n.get(t, e) : null
          }
          remove(t) {
            const e = t.trackById;
            return this.map.get(e).remove(t) && this.map.delete(e), t
          }
          get isEmpty() {
            return 0 === this.map.size
          }
          clear() {
            this.map.clear()
          }
        }

        function Vo(t, e, n) {
          const r = t.previousIndex;
          if (null === r) return r;
          let s = 0;
          return n && r < n.length && (s = n[r]), r + e + s
        }
        class Lo {
          constructor() {}
          supports(t) {
            return t instanceof Map || wi(t)
          }
          create() {
            return new Uo
          }
        }
        class Uo {
          constructor() {
            this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
          }
          get isDirty() {
            return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
          }
          forEachItem(t) {
            let e;
            for (e = this._mapHead; null !== e; e = e._next) t(e)
          }
          forEachPreviousItem(t) {
            let e;
            for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
          }
          forEachChangedItem(t) {
            let e;
            for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
          }
          forEachAddedItem(t) {
            let e;
            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
          }
          forEachRemovedItem(t) {
            let e;
            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
          }
          diff(t) {
            if (t) {
              if (!(t instanceof Map || wi(t))) throw new Error(`Error trying to diff '${wt(t)}'. Only maps and objects are allowed`)
            } else t = new Map;
            return this.check(t) ? this : null
          }
          onDestroy() {}
          check(t) {
            this._reset();
            let e = this._mapHead;
            if (this._appendAfter = null, this._forEach(t, (t, n) => {
                if (e && e.key === n) this._maybeAddToChanges(e, t), this._appendAfter = e, e = e._next;
                else {
                  const r = this._getOrCreateRecordForKey(n, t);
                  e = this._insertBeforeOrAppend(e, r)
                }
              }), e) {
              e._prev && (e._prev._next = null), this._removalsHead = e;
              for (let t = e; null !== t; t = t._nextRemoved) t === this._mapHead && (this._mapHead = null), this._records.delete(t.key), t._nextRemoved = t._next, t.previousValue = t.currentValue, t.currentValue = null, t._prev = null, t._next = null
            }
            return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
          }
          _insertBeforeOrAppend(t, e) {
            if (t) {
              const n = t._prev;
              return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
            }
            return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
          }
          _getOrCreateRecordForKey(t, e) {
            if (this._records.has(t)) {
              const n = this._records.get(t);
              this._maybeAddToChanges(n, e);
              const r = n._prev,
                s = n._next;
              return r && (r._next = s), s && (s._prev = r), n._next = null, n._prev = null, n
            }
            const n = new jo(t);
            return this._records.set(t, n), n.currentValue = e, this._addToAdditions(n), n
          }
          _reset() {
            if (this.isDirty) {
              let t;
              for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
              for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
              for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
              this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
            }
          }
          _maybeAddToChanges(t, e) {
            vi(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
          }
          _addToAdditions(t) {
            null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
          }
          _addToChanges(t) {
            null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
          }
          _forEach(t, e) {
            t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n => e(t[n], n))
          }
        }
        class jo {
          constructor(t) {
            this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
          }
        }
        let Ho = (() => {
            class t {
              constructor(t) {
                this.factories = t
              }
              static create(e, n) {
                if (null != n) {
                  const t = n.factories.slice();
                  e = e.concat(t)
                }
                return new t(e)
              }
              static extend(e) {
                return {
                  provide: t,
                  useFactory: n => {
                    if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                    return t.create(e, n)
                  },
                  deps: [
                    [t, new ot, new st]
                  ]
                }
              }
              find(t) {
                const e = this.factories.find(e => e.supports(t));
                if (null != e) return e;
                throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);
                var n
              }
            }
            return t.\u0275prov = ut({
              token: t,
              providedIn: "root",
              factory: () => new t([new Po])
            }), t
          })(),
          $o = (() => {
            class t {
              constructor(t) {
                this.factories = t
              }
              static create(e, n) {
                if (n) {
                  const t = n.factories.slice();
                  e = e.concat(t)
                }
                return new t(e)
              }
              static extend(e) {
                return {
                  provide: t,
                  useFactory: n => {
                    if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                    return t.create(e, n)
                  },
                  deps: [
                    [t, new ot, new st]
                  ]
                }
              }
              find(t) {
                const e = this.factories.find(e => e.supports(t));
                if (e) return e;
                throw new Error(`Cannot find a differ supporting object '${t}'`)
              }
            }
            return t.\u0275prov = ut({
              token: t,
              providedIn: "root",
              factory: () => new t([new Lo])
            }), t
          })();
        const qo = [new Lo],
          zo = new Ho([new Po]),
          Go = new $o(qo);
        let Bo = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => Wo(t, Co), t
        })();
        const Wo = function (t, e) {
          return Gs(t, e, We(), ze())
        };
        let Zo = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => Qo(t, Co), t
        })();
        const Qo = function (t, e) {
            return Bs(t, e, We(), ze())
          },
          Jo = {};
        class Yo extends _o {
          constructor(t) {
            super(), this.ngModule = t
          }
          resolveComponentFactory(t) {
            const e = be(t);
            return new ta(e, this.ngModule)
          }
        }

        function Ko(t) {
          const e = [];
          for (let n in t) t.hasOwnProperty(n) && e.push({
            propName: t[n],
            templateName: n
          });
          return e
        }
        const Xo = new Lt("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: () => Fn
        });
        class ta extends bo {
          constructor(t, e) {
            super(), this.componentDef = t, this.ngModule = e, this.componentType = t.type, this.selector = t.selectors.map(_r).join(","), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!e
          }
          get inputs() {
            return Ko(this.componentDef.inputs)
          }
          get outputs() {
            return Ko(this.componentDef.outputs)
          }
          create(t, e, n, r) {
            const s = (r = r || this.ngModule) ? function (t, e) {
                return {
                  get: (n, r, s) => {
                    const i = t.get(n, Jo, s);
                    return i !== Jo || r === Jo ? i : e.get(n, r, s)
                  }
                }
              }(t, r.injector) : t,
              i = s.get(Eo, Pe),
              o = s.get(To, null),
              a = i.createRenderer(null, this.componentDef),
              l = this.componentDef.selectors[0][0] || "div",
              c = n ? function (t, e, n) {
                if (Oe(t)) return t.selectRootElement(e, n === ae.ShadowDom);
                let r = "string" == typeof e ? t.querySelector(e) : e;
                return r.textContent = "", r
              }(a, n, this.componentDef.encapsulation) : Nr(l, i.createRenderer(null, this.componentDef), function (t) {
                const e = t.toLowerCase();
                return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null
              }(l)),
              u = this.componentDef.onPush ? 576 : 528,
              h = "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
              d = {
                components: [],
                scheduler: Fn,
                clean: fs,
                playerHandler: null,
                flags: 0
              },
              p = qr(0, -1, null, 1, 0, null, null, null, null, null),
              f = Rr(null, p, d, u, null, null, i, a, o, s);
            let m, g;
            sn(f, null);
            try {
              const t = function (t, e, n, r, s, i) {
                const o = n[1];
                n[19] = t;
                const a = Mr(o, null, 0, 3, null, null),
                  l = a.mergedAttrs = e.hostAttrs;
                null !== l && (fi(a, l), null !== t && (_n(s, t, l), null !== a.classes && Ls(s, t, a.classes), null !== a.styles && Vs(s, t, a.styles)));
                const c = r.createRenderer(t, e),
                  u = Rr(n, $r(e), null, e.onPush ? 64 : 16, n[19], a, r, c, void 0);
                return o.firstCreatePass && (Hn(Vn(a, n), o, e.type), Kr(o, a), ts(a, n.length, 1)), cs(n, u), n[19] = u
              }(c, this.componentDef, f, i, a);
              if (c)
                if (n) _n(a, c, ["ng-version", Oo.full]);
                else {
                  const {
                    attrs: t,
                    classes: e
                  } = function (t) {
                    const e = [],
                      n = [];
                    let r = 1,
                      s = 2;
                    for (; r < t.length;) {
                      let i = t[r];
                      if ("string" == typeof i) 2 === s ? "" !== i && e.push(i, t[++r]) : 8 === s && n.push(i);
                      else {
                        if (!vr(s)) break;
                        s = i
                      }
                      r++
                    }
                    return {
                      attrs: e,
                      classes: n
                    }
                  }(this.componentDef.selectors[0]);
                  t && _n(a, c, t), e && e.length > 0 && Ls(a, c, e.join(" "))
                } g = Me(f[1], 0), e && (g.projection = e.map(t => Array.from(t))), m = function (t, e, n, r, s) {
                const i = n[1],
                  o = function (t, e, n) {
                    const r = We();
                    t.firstCreatePass && (n.providersResolver && n.providersResolver(n), Yr(t, r, 1), es(t, e, n));
                    const s = Bn(e, t, e.length - 1, r);
                    ur(s, e);
                    const i = Re(r, e);
                    return i && ur(i, e), s
                  }(i, n, e);
                r.components.push(o), t[8] = o, s && s.forEach(t => t(o, e)), e.contentQueries && e.contentQueries(1, o, n.length - 1);
                const a = We();
                if (i.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) {
                  dn(a.index - 19);
                  const t = n[1];
                  Zr(t, e), Qr(t, n, e.hostVars), Jr(e, o)
                }
                return o
              }(t, this.componentDef, f, d, [to]), Dr(p, f, null)
            } finally {
              un()
            }
            const v = new ea(this.componentType, m, zs(Co, g, f), f, g);
            return n && !h || (v.hostView._tViewNode.child = g), v
          }
        }
        class ea extends class {} {
          constructor(t, e, n, r, s) {
            super(), this.location = n, this._rootLView = r, this._tNode = s, this.destroyCbs = [], this.instance = e, this.hostView = this.changeDetectorRef = new js(r), this.hostView._tViewNode = function (t, e, n, r) {
              let s = t.node;
              return null == s && (t.node = s = zr(0, null, 2, -1, null, null)), r[6] = s
            }(r[1], 0, 0, r), this.componentType = t
          }
          get injector() {
            return new Qn(this._tNode, this._rootLView)
          }
          destroy() {
            this.destroyCbs && (this.destroyCbs.forEach(t => t()), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
          }
          onDestroy(t) {
            this.destroyCbs && this.destroyCbs.push(t)
          }
        }
        const na = void 0;
        var ra = ["en", [
            ["a", "p"],
            ["AM", "PM"], na
          ],
          [
            ["AM", "PM"], na, na
          ],
          [
            ["S", "M", "T", "W", "T", "F", "S"],
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
          ], na, [
            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          ], na, [
            ["B", "A"],
            ["BC", "AD"],
            ["Before Christ", "Anno Domini"]
          ], 0, [6, 0],
          ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
          ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
          ["{1}, {0}", na, "{1} 'at' {0}", na],
          [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
          ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
          function (t) {
            let e = Math.floor(Math.abs(t)),
              n = t.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === e && 0 === n ? 1 : 5
          }
        ];
        let sa = {};

        function ia(t) {
          const e = function (t) {
            return t.toLowerCase().replace(/_/g, "-")
          }(t);
          let n = oa(e);
          if (n) return n;
          const r = e.split("-")[0];
          if (n = oa(r), n) return n;
          if ("en" === r) return ra;
          throw new Error(`Missing locale data for the locale "${t}".`)
        }

        function oa(t) {
          return t in sa || (sa[t] = Ot.ng && Ot.ng.common && Ot.ng.common.locales && Ot.ng.common.locales[t]), sa[t]
        }
        const aa = function () {
          var t = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencyCode: 15,
            CurrencySymbol: 16,
            CurrencyName: 17,
            Currencies: 18,
            Directionality: 19,
            PluralCase: 20,
            ExtraData: 21
          };
          return t[t.LocaleId] = "LocaleId", t[t.DayPeriodsFormat] = "DayPeriodsFormat", t[t.DayPeriodsStandalone] = "DayPeriodsStandalone", t[t.DaysFormat] = "DaysFormat", t[t.DaysStandalone] = "DaysStandalone", t[t.MonthsFormat] = "MonthsFormat", t[t.MonthsStandalone] = "MonthsStandalone", t[t.Eras] = "Eras", t[t.FirstDayOfWeek] = "FirstDayOfWeek", t[t.WeekendRange] = "WeekendRange", t[t.DateFormat] = "DateFormat", t[t.TimeFormat] = "TimeFormat", t[t.DateTimeFormat] = "DateTimeFormat", t[t.NumberSymbols] = "NumberSymbols", t[t.NumberFormats] = "NumberFormats", t[t.CurrencyCode] = "CurrencyCode", t[t.CurrencySymbol] = "CurrencySymbol", t[t.CurrencyName] = "CurrencyName", t[t.Currencies] = "Currencies", t[t.Directionality] = "Directionality", t[t.PluralCase] = "PluralCase", t[t.ExtraData] = "ExtraData", t
        }();
        let la = "en-US";

        function ca(t) {
          var e, n;
          n = "Expected localeId to be defined", null == (e = t) && function (t, e, n, r) {
            throw new Error(`ASSERTION ERROR: ${t}` + ` [Expected=> null != ${e} <=Actual]`)
          }(n, e), "string" == typeof t && (la = t.toLowerCase().replace(/_/g, "-"))
        }
        const ua = new Map;
        class ha extends Kt {
          constructor(t, e) {
            super(), this._parent = e, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new Yo(this);
            const n = _e(t),
              r = t[Mt] || null;
            r && ca(r), this._bootstrapComponents = Nn(n.bootstrap), this._r3Injector = ei(t, e, [{
              provide: Kt,
              useValue: this
            }, {
              provide: _o,
              useValue: this.componentFactoryResolver
            }], wt(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t)
          }
          get(t, e = ci.THROW_IF_NOT_FOUND, n = at.Default) {
            return t === ci || t === Kt || t === Ut ? this : this._r3Injector.get(t, e, n)
          }
          destroy() {
            const t = this._r3Injector;
            !t.destroyed && t.destroy(), this.destroyCbs.forEach(t => t()), this.destroyCbs = null
          }
          onDestroy(t) {
            this.destroyCbs.push(t)
          }
        }
        class da extends Xt {
          constructor(t) {
            super(), this.moduleType = t, null !== _e(t) && function t(e) {
              if (null !== e.\u0275mod.id) {
                const t = e.\u0275mod.id;
                (function (t, e, n) {
                  if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${wt(e)} vs ${wt(e.name)}`)
                })(t, ua.get(t), e), ua.set(t, e)
              }
              let n = e.\u0275mod.imports;
              n instanceof Function && (n = n()), n && n.forEach(e => t(e))
            }(t)
          }
          create(t) {
            return new ha(this.moduleType, t)
          }
        }

        function pa(t, e) {
          const n = Ge();
          let r;
          const s = t + 19;
          n.firstCreatePass ? (r = function (t, e) {
            if (e)
              for (let n = e.length - 1; n >= 0; n--) {
                const r = e[n];
                if (t === r.name) return r
              }
            throw new Error(`The pipe '${t}' could not be found!`)
          }(e, n.pipeRegistry), n.data[s] = r, r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy)) : r = n.data[s];
          const i = r.factory || (r.factory = we(r.type)),
            o = Bt(ki),
            a = i();
          return Bt(o),
            function (t, e, n, r) {
              const s = n + 19;
              s >= t.data.length && (t.data[s] = null, t.blueprint[s] = null), e[s] = r
            }(n, ze(), t, a), a
        }

        function fa(t, e, n) {
          const r = ze(),
            s = function (t, e) {
              return t[e + 19]
            }(r, t);
          return function (t, e) {
            return yi.isWrapped(e) && (e = yi.unwrap(e), t[$e.lFrame.bindingIndex] = Cr), e
          }(r, function (t, e) {
            return t[1].data[e + 19].pure
          }(r, t) ? function (t, e, n, r, s, i) {
            const o = e + n;
            return Ci(t, o, s) ? _i(t, o + 1, i ? r.call(i, s) : r(s)) : function (t, e) {
              const n = t[e];
              return n === Cr ? void 0 : n
            }(t, o + 1)
          }(r, Ke(), e, s.transform, n, s) : s.transform(n))
        }
        class ma extends x {
          constructor(t = !1) {
            super(), this.__isAsync = t
          }
          emit(t) {
            super.next(t)
          }
          subscribe(t, e, n) {
            let r, s = t => null,
              i = () => null;
            t && "object" == typeof t ? (r = this.__isAsync ? e => {
              setTimeout(() => t.next(e))
            } : e => {
              t.next(e)
            }, t.error && (s = this.__isAsync ? e => {
              setTimeout(() => t.error(e))
            } : e => {
              t.error(e)
            }), t.complete && (i = this.__isAsync ? () => {
              setTimeout(() => t.complete())
            } : () => {
              t.complete()
            })) : (r = this.__isAsync ? e => {
              setTimeout(() => t(e))
            } : e => {
              t(e)
            }, e && (s = this.__isAsync ? t => {
              setTimeout(() => e(t))
            } : t => {
              e(t)
            }), n && (i = this.__isAsync ? () => {
              setTimeout(() => n())
            } : () => {
              n()
            }));
            const o = super.subscribe(r, s, i);
            return t instanceof h && t.add(o), o
          }
        }

        function ga() {
          return this._results[gi()]()
        }
        class va {
          constructor() {
            this.dirty = !0, this._results = [], this.changes = new ma, this.length = 0;
            const t = gi(),
              e = va.prototype;
            e[t] || (e[t] = ga)
          }
          map(t) {
            return this._results.map(t)
          }
          filter(t) {
            return this._results.filter(t)
          }
          find(t) {
            return this._results.find(t)
          }
          reduce(t, e) {
            return this._results.reduce(t, e)
          }
          forEach(t) {
            this._results.forEach(t)
          }
          some(t) {
            return this._results.some(t)
          }
          toArray() {
            return this._results.slice()
          }
          toString() {
            return this._results.toString()
          }
          reset(t) {
            this._results = function t(e, n) {
              void 0 === n && (n = e);
              for (let r = 0; r < e.length; r++) {
                let s = e[r];
                Array.isArray(s) ? (n === e && (n = e.slice(0, r)), t(s, n)) : n !== e && n.push(s)
              }
              return n
            }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
          }
          notifyOnChanges() {
            this.changes.emit(this)
          }
          setDirty() {
            this.dirty = !0
          }
          destroy() {
            this.changes.complete(), this.changes.unsubscribe()
          }
        }
        class ya {
          constructor(t) {
            this.queryList = t, this.matches = null
          }
          clone() {
            return new ya(this.queryList)
          }
          setDirty() {
            this.queryList.setDirty()
          }
        }
        class ba {
          constructor(t = []) {
            this.queries = t
          }
          createEmbeddedView(t) {
            const e = t.queries;
            if (null !== e) {
              const n = null !== t.contentQueries ? t.contentQueries[0] : e.length,
                r = [];
              for (let t = 0; t < n; t++) {
                const n = e.getByIndex(t);
                r.push(this.queries[n.indexInDeclarationView].clone())
              }
              return new ba(r)
            }
            return null
          }
          insertView(t) {
            this.dirtyQueriesWithMatches(t)
          }
          detachView(t) {
            this.dirtyQueriesWithMatches(t)
          }
          dirtyQueriesWithMatches(t) {
            for (let e = 0; e < this.queries.length; e++) null !== Ia(t, e).matches && this.queries[e].setDirty()
          }
        }
        class wa {
          constructor(t, e, n, r = null) {
            this.predicate = t, this.descendants = e, this.isStatic = n, this.read = r
          }
        }
        class _a {
          constructor(t = []) {
            this.queries = t
          }
          elementStart(t, e) {
            for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e)
          }
          elementEnd(t) {
            for (let e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t)
          }
          embeddedTView(t) {
            let e = null;
            for (let n = 0; n < this.length; n++) {
              const r = null !== e ? e.length : 0,
                s = this.getByIndex(n).embeddedTView(t, r);
              s && (s.indexInDeclarationView = n, null !== e ? e.push(s) : e = [s])
            }
            return null !== e ? new _a(e) : null
          }
          template(t, e) {
            for (let n = 0; n < this.queries.length; n++) this.queries[n].template(t, e)
          }
          getByIndex(t) {
            return this.queries[t]
          }
          get length() {
            return this.queries.length
          }
          track(t) {
            this.queries.push(t)
          }
        }
        class Ca {
          constructor(t, e = -1) {
            this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = e
          }
          elementStart(t, e) {
            this.isApplyingToNode(e) && this.matchTNode(t, e)
          }
          elementEnd(t) {
            this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
          }
          template(t, e) {
            this.elementStart(t, e)
          }
          embeddedTView(t, e) {
            return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, e), new Ca(this.metadata)) : null
          }
          isApplyingToNode(t) {
            if (this._appliesToNextNode && !1 === this.metadata.descendants) {
              const e = this._declarationNodeIndex;
              let n = t.parent;
              for (; null !== n && 4 === n.type && n.index !== e;) n = n.parent;
              return e === (null !== n ? n.index : -1)
            }
            return this._appliesToNextNode
          }
          matchTNode(t, e) {
            if (Array.isArray(this.metadata.predicate)) {
              const n = this.metadata.predicate;
              for (let r = 0; r < n.length; r++) this.matchTNodeWithReadOption(t, e, Sa(e, n[r]))
            } else {
              const n = this.metadata.predicate;
              n === Bo ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, Gn(e, t, n, !1, !1))
            }
          }
          matchTNodeWithReadOption(t, e, n) {
            if (null !== n) {
              const r = this.metadata.read;
              if (null !== r)
                if (r === Co || r === Zo || r === Bo && 0 === e.type) this.addMatch(e.index, -2);
                else {
                  const n = Gn(e, t, r, !1, !1);
                  null !== n && this.addMatch(e.index, n)
                }
              else this.addMatch(e.index, n)
            }
          }
          addMatch(t, e) {
            null === this.matches ? this.matches = [t, e] : this.matches.push(t, e)
          }
        }

        function Sa(t, e) {
          const n = t.localNames;
          if (null !== n)
            for (let r = 0; r < n.length; r += 2)
              if (n[r] === e) return n[r + 1];
          return null
        }

        function Ea(t, e, n, r) {
          return -1 === n ? function (t, e) {
            return 3 === t.type || 4 === t.type ? zs(Co, t, e) : 0 === t.type ? Gs(Bo, Co, t, e) : null
          }(e, t) : -2 === n ? function (t, e, n) {
            return n === Co ? zs(Co, e, t) : n === Bo ? Gs(Bo, Co, e, t) : n === Zo ? Bs(Zo, Co, e, t) : void 0
          }(t, e, r) : Bn(t, t[1], n, e)
        }

        function xa(t, e, n, r) {
          const s = e[5].queries[r];
          if (null === s.matches) {
            const r = t.data,
              i = n.matches,
              o = [];
            for (let t = 0; t < i.length; t += 2) {
              const s = i[t];
              o.push(s < 0 ? null : Ea(e, r[s], i[t + 1], n.metadata.read))
            }
            s.matches = o
          }
          return s.matches
        }

        function ka(t) {
          const e = ze(),
            n = Ge(),
            r = en();
          nn(r + 1);
          const s = Ia(n, r);
          if (t.dirty && Le(e) === s.metadata.isStatic) {
            if (null === s.matches) t.reset([]);
            else {
              const i = s.crossesNgTemplate ? function t(e, n, r, s) {
                const i = e.queries.getByIndex(r),
                  o = i.matches;
                if (null !== o) {
                  const a = xa(e, n, i, r);
                  for (let e = 0; e < o.length; e += 2) {
                    const r = o[e];
                    if (r > 0) s.push(a[e / 2]);
                    else {
                      const i = o[e + 1],
                        a = n[-r];
                      for (let e = 9; e < a.length; e++) {
                        const n = a[e];
                        n[17] === n[3] && t(n[1], n, i, s)
                      }
                      if (null !== a[5]) {
                        const e = a[5];
                        for (let n = 0; n < e.length; n++) {
                          const r = e[n];
                          t(r[1], r, i, s)
                        }
                      }
                    }
                  }
                }
                return s
              }(n, e, r, []) : xa(n, e, s, r);
              t.reset(i), t.notifyOnChanges()
            }
            return !0
          }
          return !1
        }

        function Aa(t, e, n, r) {
          ! function (t, e, n, r, s, i, o, a) {
            t.firstCreatePass && (function (t, e, n) {
                null === t.queries && (t.queries = new _a), t.queries.track(new Ca(e, n))
              }(t, new wa(n, r, !1, s), o.index), function (t, e) {
                const n = t.contentQueries || (t.contentQueries = []);
                e !== (t.contentQueries.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e)
              }(t, a)),
              function (t, e) {
                const n = new va;
                ! function (t, e, n, r) {
                  const s = ms(e);
                  s.push(n), t.firstCreatePass && gs(t).push(r, s.length - 1)
                }(t, e, n, n.destroy), null === e[5] && (e[5] = new ba), e[5].queries.push(new ya(n))
              }(t, e)
          }(Ge(), ze(), e, n, r, 0, We(), t)
        }

        function Ta() {
          return t = ze(), e = en(), t[5].queries[e].queryList;
          var t, e
        }

        function Ia(t, e) {
          return t.queries.getByIndex(e)
        }
        const Oa = new Lt("Application Initializer");
        let Pa = (() => {
          class t {
            constructor(t) {
              this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((t, e) => {
                this.resolve = t, this.reject = e
              })
            }
            runInitializers() {
              if (this.initialized) return;
              const t = [],
                e = () => {
                  this.done = !0, this.resolve()
                };
              if (this.appInits)
                for (let n = 0; n < this.appInits.length; n++) {
                  const e = this.appInits[n]();
                  Mi(e) && t.push(e)
                }
              Promise.all(t).then(() => {
                e()
              }).catch(t => {
                this.reject(t)
              }), 0 === t.length && e(), this.initialized = !0
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(Oa, 8))
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const Fa = new Lt("AppId"),
          Na = {
            provide: Fa,
            useFactory: function () {
              return `${Ra()}${Ra()}${Ra()}`
            },
            deps: []
          };

        function Ra() {
          return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }
        const Ma = new Lt("Platform Initializer"),
          Da = new Lt("Platform ID"),
          Va = new Lt("appBootstrapListener");
        let La = (() => {
          class t {
            log(t) {
              console.log(t)
            }
            warn(t) {
              console.warn(t)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const Ua = new Lt("LocaleId"),
          ja = new Lt("DefaultCurrencyCode");
        class Ha {
          constructor(t, e) {
            this.ngModuleFactory = t, this.componentFactories = e
          }
        }
        const $a = function (t) {
            return new da(t)
          },
          qa = $a,
          za = function (t) {
            return Promise.resolve($a(t))
          },
          Ga = function (t) {
            const e = $a(t),
              n = Nn(_e(t).declarations).reduce((t, e) => {
                const n = be(e);
                return n && t.push(new ta(n)), t
              }, []);
            return new Ha(e, n)
          },
          Ba = Ga,
          Wa = function (t) {
            return Promise.resolve(Ga(t))
          };
        let Za = (() => {
          class t {
            constructor() {
              this.compileModuleSync = qa, this.compileModuleAsync = za, this.compileModuleAndAllComponentsSync = Ba, this.compileModuleAndAllComponentsAsync = Wa
            }
            clearCache() {}
            clearCacheFor(t) {}
            getModuleId(t) {}
          }
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const Qa = new Lt("compilerOptions"),
          Ja = (() => Promise.resolve(0))();

        function Ya(t) {
          "undefined" == typeof Zone ? Ja.then(() => {
            t && t.apply(null, null)
          }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
        }
        class Ka {
          constructor({
            enableLongStackTrace: t = !1,
            shouldCoalesceEventChangeDetection: e = !1
          }) {
            if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ma(!1), this.onMicrotaskEmpty = new ma(!1), this.onStable = new ma(!1), this.onError = new ma(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
            Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = e, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function () {
                let t = Ot.requestAnimationFrame,
                  e = Ot.cancelAnimationFrame;
                if ("undefined" != typeof Zone && t && e) {
                  const n = t[Zone.__symbol__("OriginalDelegate")];
                  n && (t = n);
                  const r = e[Zone.__symbol__("OriginalDelegate")];
                  r && (e = r)
                }
                return {
                  nativeRequestAnimationFrame: t,
                  nativeCancelAnimationFrame: e
                }
              }().nativeRequestAnimationFrame,
              function (t) {
                const e = !!t.shouldCoalesceEventChangeDetection && t.nativeRequestAnimationFrame && (() => {
                  ! function (t) {
                    -1 === t.lastRequestAnimationFrameId && (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(Ot, () => {
                      t.lastRequestAnimationFrameId = -1, nl(t), el(t)
                    }), nl(t))
                  }(t)
                });
                t._inner = t._inner.fork({
                  name: "angular",
                  properties: {
                    isAngularZone: !0,
                    maybeDelayChangeDetection: e
                  },
                  onInvokeTask: (n, r, s, i, o, a) => {
                    try {
                      return rl(t), n.invokeTask(s, i, o, a)
                    } finally {
                      e && "eventTask" === i.type && e(), sl(t)
                    }
                  },
                  onInvoke: (e, n, r, s, i, o, a) => {
                    try {
                      return rl(t), e.invoke(r, s, i, o, a)
                    } finally {
                      sl(t)
                    }
                  },
                  onHasTask: (e, n, r, s) => {
                    e.hasTask(r, s), n === r && ("microTask" == s.change ? (t._hasPendingMicrotasks = s.microTask, nl(t), el(t)) : "macroTask" == s.change && (t.hasPendingMacrotasks = s.macroTask))
                  },
                  onHandleError: (e, n, r, s) => (e.handleError(r, s), t.runOutsideAngular(() => t.onError.emit(s)), !1)
                })
              }(this)
          }
          static isInAngularZone() {
            return !0 === Zone.current.get("isAngularZone")
          }
          static assertInAngularZone() {
            if (!Ka.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
          }
          static assertNotInAngularZone() {
            if (Ka.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
          }
          run(t, e, n) {
            return this._inner.run(t, e, n)
          }
          runTask(t, e, n, r) {
            const s = this._inner,
              i = s.scheduleEventTask("NgZoneEvent: " + r, t, tl, Xa, Xa);
            try {
              return s.runTask(i, e, n)
            } finally {
              s.cancelTask(i)
            }
          }
          runGuarded(t, e, n) {
            return this._inner.runGuarded(t, e, n)
          }
          runOutsideAngular(t) {
            return this._outer.run(t)
          }
        }

        function Xa() {}
        const tl = {};

        function el(t) {
          if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
            t._nesting++, t.onMicrotaskEmpty.emit(null)
          } finally {
            if (t._nesting--, !t.hasPendingMicrotasks) try {
              t.runOutsideAngular(() => t.onStable.emit(null))
            } finally {
              t.isStable = !0
            }
          }
        }

        function nl(t) {
          t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId)
        }

        function rl(t) {
          t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
        }

        function sl(t) {
          t._nesting--, el(t)
        }
        class il {
          constructor() {
            this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ma, this.onMicrotaskEmpty = new ma, this.onStable = new ma, this.onError = new ma
          }
          run(t, e, n) {
            return t.apply(e, n)
          }
          runGuarded(t, e, n) {
            return t.apply(e, n)
          }
          runOutsideAngular(t) {
            return t()
          }
          runTask(t, e, n, r) {
            return t.apply(e, n)
          }
        }
        let ol = (() => {
            class t {
              constructor(t) {
                this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run(() => {
                  this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                })
              }
              _watchAngularEvents() {
                this._ngZone.onUnstable.subscribe({
                  next: () => {
                    this._didWork = !0, this._isZoneStable = !1
                  }
                }), this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Ka.assertNotInAngularZone(), Ya(() => {
                        this._isZoneStable = !0, this._runCallbacksIfReady()
                      })
                    }
                  })
                })
              }
              increasePendingRequestCount() {
                return this._pendingCount += 1, this._didWork = !0, this._pendingCount
              }
              decreasePendingRequestCount() {
                if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                return this._runCallbacksIfReady(), this._pendingCount
              }
              isStable() {
                return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
              }
              _runCallbacksIfReady() {
                if (this.isStable()) Ya(() => {
                  for (; 0 !== this._callbacks.length;) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork)
                  }
                  this._didWork = !1
                });
                else {
                  let t = this.getPendingTasks();
                  this._callbacks = this._callbacks.filter(e => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)), this._didWork = !0
                }
              }
              getPendingTasks() {
                return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(t => ({
                  source: t.source,
                  creationLocation: t.creationLocation,
                  data: t.data
                })) : []
              }
              addCallback(t, e, n) {
                let r = -1;
                e && e > 0 && (r = setTimeout(() => {
                  this._callbacks = this._callbacks.filter(t => t.timeoutId !== r), t(this._didWork, this.getPendingTasks())
                }, e)), this._callbacks.push({
                  doneCb: t,
                  timeoutId: r,
                  updateCb: n
                })
              }
              whenStable(t, e, n) {
                if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                this.addCallback(t, e, n), this._runCallbacksIfReady()
              }
              getPendingRequestCount() {
                return this._pendingCount
              }
              findProviders(t, e, n) {
                return []
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(Ka))
            }, t.\u0275prov = ut({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          al = (() => {
            class t {
              constructor() {
                this._applications = new Map, ul.addToWindow(this)
              }
              registerApplication(t, e) {
                this._applications.set(t, e)
              }
              unregisterApplication(t) {
                this._applications.delete(t)
              }
              unregisterAllApplications() {
                this._applications.clear()
              }
              getTestability(t) {
                return this._applications.get(t) || null
              }
              getAllTestabilities() {
                return Array.from(this._applications.values())
              }
              getAllRootElements() {
                return Array.from(this._applications.keys())
              }
              findTestabilityInTree(t, e = !0) {
                return ul.findTestabilityInTree(this, t, e)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275prov = ut({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        class ll {
          addToWindow(t) {}
          findTestabilityInTree(t, e, n) {
            return null
          }
        }
        let cl, ul = new ll,
          hl = function (t, e, n) {
            const r = t.get(Qa, []).concat(e),
              s = new da(n);
            if (0 === hi.size) return Promise.resolve(s);
            const i = function (t) {
              const e = [];
              return t.forEach(t => t && e.push(...t)), e
            }(r.map(t => t.providers));
            if (0 === i.length) return Promise.resolve(s);
            const o = function () {
                const t = Ot.ng;
                if (!t || !t.\u0275compilerFacade) throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");
                return t.\u0275compilerFacade
              }(),
              a = ci.create({
                providers: i
              }).get(o.ResourceLoader);
            return function (t) {
              const e = [],
                n = new Map;

              function r(t) {
                let e = n.get(t);
                if (!e) {
                  const r = (t => Promise.resolve(a.get(t)))(t);
                  n.set(t, e = r.then(pi))
                }
                return e
              }
              return hi.forEach((t, n) => {
                const s = [];
                t.templateUrl && s.push(r(t.templateUrl).then(e => {
                  t.template = e
                }));
                const i = t.styleUrls,
                  o = t.styles || (t.styles = []),
                  a = t.styles.length;
                i && i.forEach((e, n) => {
                  o.push(""), s.push(r(e).then(r => {
                    o[a + n] = r, i.splice(i.indexOf(e), 1), 0 == i.length && (t.styleUrls = void 0)
                  }))
                });
                const l = Promise.all(s).then(() => function (t) {
                  di.delete(t)
                }(n));
                e.push(l)
              }), hi = new Map, Promise.all(e).then(() => {})
            }().then(() => s)
          };
        const dl = new Lt("AllowMultipleToken");
        class pl {
          constructor(t, e) {
            this.name = t, this.token = e
          }
        }

        function fl(t, e, n = []) {
          const r = `Platform: ${e}`,
            s = new Lt(r);
          return (e = []) => {
            let i = ml();
            if (!i || i.injector.get(dl, !1))
              if (t) t(n.concat(e).concat({
                provide: s,
                useValue: !0
              }));
              else {
                const t = n.concat(e).concat({
                  provide: s,
                  useValue: !0
                }, {
                  provide: Qs,
                  useValue: "platform"
                });
                ! function (t) {
                  if (cl && !cl.destroyed && !cl.injector.get(dl, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                  cl = t.get(gl);
                  const e = t.get(Ma, null);
                  e && e.forEach(t => t())
                }(ci.create({
                  providers: t,
                  name: r
                }))
              } return function (t) {
              const e = ml();
              if (!e) throw new Error("No platform exists!");
              if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
              return e
            }(s)
          }
        }

        function ml() {
          return cl && !cl.destroyed ? cl : null
        }
        let gl = (() => {
          class t {
            constructor(t) {
              this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
            }
            bootstrapModuleFactory(t, e) {
              const n = function (t, e) {
                  let n;
                  return n = "noop" === t ? new il : ("zone.js" === t ? void 0 : t) || new Ka({
                    enableLongStackTrace: ir(),
                    shouldCoalesceEventChangeDetection: e
                  }), n
                }(e ? e.ngZone : void 0, e && e.ngZoneEventCoalescing || !1),
                r = [{
                  provide: Ka,
                  useValue: n
                }];
              return n.run(() => {
                const e = ci.create({
                    providers: r,
                    parent: this.injector,
                    name: t.moduleType.name
                  }),
                  s = t.create(e),
                  i = s.injector.get(tr, null);
                if (!i) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                return s.onDestroy(() => bl(this._modules, s)), n.runOutsideAngular(() => n.onError.subscribe({
                    next: t => {
                      i.handleError(t)
                    }
                  })),
                  function (t, e, n) {
                    try {
                      const r = n();
                      return Mi(r) ? r.catch(n => {
                        throw e.runOutsideAngular(() => t.handleError(n)), n
                      }) : r
                    } catch (r) {
                      throw e.runOutsideAngular(() => t.handleError(r)), r
                    }
                  }(i, n, () => {
                    const t = s.injector.get(Pa);
                    return t.runInitializers(), t.donePromise.then(() => (ca(s.injector.get(Ua, "en-US") || "en-US"), this._moduleDoBootstrap(s), s))
                  })
              })
            }
            bootstrapModule(t, e = []) {
              const n = vl({}, e);
              return hl(this.injector, n, t).then(t => this.bootstrapModuleFactory(t, n))
            }
            _moduleDoBootstrap(t) {
              const e = t.injector.get(yl);
              if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(t => e.bootstrap(t));
              else {
                if (!t.instance.ngDoBootstrap) throw new Error(`The module ${wt(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` + "Please define one of these.");
                t.instance.ngDoBootstrap(e)
              }
              this._modules.push(t)
            }
            onDestroy(t) {
              this._destroyListeners.push(t)
            }
            get injector() {
              return this._injector
            }
            destroy() {
              if (this._destroyed) throw new Error("The platform has already been destroyed!");
              this._modules.slice().forEach(t => t.destroy()), this._destroyListeners.forEach(t => t()), this._destroyed = !0
            }
            get destroyed() {
              return this._destroyed
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(ci))
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function vl(t, e) {
          return Array.isArray(e) ? e.reduce(vl, t) : Object.assign(Object.assign({}, t), e)
        }
        let yl = (() => {
          class t {
            constructor(t, e, n, r, s, i) {
              this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = s, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = ir(), this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick()
                  })
                }
              });
              const o = new w(t => {
                  this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete()
                  })
                }),
                a = new w(t => {
                  let e;
                  this._zone.runOutsideAngular(() => {
                    e = this._zone.onStable.subscribe(() => {
                      Ka.assertNotInAngularZone(), Ya(() => {
                        this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, t.next(!0))
                      })
                    })
                  });
                  const n = this._zone.onUnstable.subscribe(() => {
                    Ka.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                      t.next(!1)
                    }))
                  });
                  return () => {
                    e.unsubscribe(), n.unsubscribe()
                  }
                });
              this.isStable = function (...t) {
                let e = Number.POSITIVE_INFINITY,
                  n = null,
                  r = t[t.length - 1];
                return A(r) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof r && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof w ? t[0] : B(e)(W(t, n))
              }(o, a.pipe(t => {
                return Z()((e = tt, function (t) {
                  let n;
                  n = "function" == typeof e ? e : function () {
                    return e
                  };
                  const r = Object.create(t, K);
                  return r.source = t, r.subjectFactory = n, r
                })(t));
                var e
              }))
            }
            bootstrap(t, e) {
              if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
              let n;
              n = t instanceof bo ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
              const r = n.isBoundToModule ? void 0 : this._injector.get(Kt),
                s = n.create(ci.NULL, [], e || n.selector, r);
              s.onDestroy(() => {
                this._unloadComponent(s)
              });
              const i = s.injector.get(ol, null);
              return i && s.injector.get(al).registerApplication(s.location.nativeElement, i), this._loadComponent(s), ir() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), s
            }
            tick() {
              if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
              try {
                this._runningTick = !0;
                for (let t of this._views) t.detectChanges();
                if (this._enforceNoNewChanges)
                  for (let t of this._views) t.checkNoChanges()
              } catch (t) {
                this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t))
              } finally {
                this._runningTick = !1
              }
            }
            attachView(t) {
              const e = t;
              this._views.push(e), e.attachToAppRef(this)
            }
            detachView(t) {
              const e = t;
              bl(this._views, e), e.detachFromAppRef()
            }
            _loadComponent(t) {
              this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(Va, []).concat(this._bootstrapListeners).forEach(e => e(t))
            }
            _unloadComponent(t) {
              this.detachView(t.hostView), bl(this.components, t)
            }
            ngOnDestroy() {
              this._views.slice().forEach(t => t.destroy())
            }
            get viewCount() {
              return this._views.length
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(Ka), Zt(La), Zt(ci), Zt(tr), Zt(_o), Zt(Pa))
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function bl(t, e) {
          const n = t.indexOf(e);
          n > -1 && t.splice(n, 1)
        }
        class wl {}
        class _l {}
        const Cl = {
          factoryPathPrefix: "",
          factoryPathSuffix: ".ngfactory"
        };
        let Sl = (() => {
          class t {
            constructor(t, e) {
              this._compiler = t, this._config = e || Cl
            }
            load(t) {
              return this.loadAndCompile(t)
            }
            loadAndCompile(t) {
              let [e, r] = t.split("#");
              return void 0 === r && (r = "default"), n("zn8P")(e).then(t => t[r]).then(t => El(t, e, r)).then(t => this._compiler.compileModuleAsync(t))
            }
            loadFactory(t) {
              let [e, r] = t.split("#"), s = "NgFactory";
              return void 0 === r && (r = "default", s = ""), n("zn8P")(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix).then(t => t[r + s]).then(t => El(t, e, r))
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(Za), Zt(_l, 8))
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function El(t, e, n) {
          if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
          return t
        }
        const xl = fl(null, "core", [{
            provide: Da,
            useValue: "unknown"
          }, {
            provide: gl,
            deps: [ci]
          }, {
            provide: al,
            deps: []
          }, {
            provide: La,
            deps: []
          }]),
          kl = [{
            provide: yl,
            useClass: yl,
            deps: [Ka, La, ci, tr, _o, Pa]
          }, {
            provide: Xo,
            deps: [Ka],
            useFactory: function (t) {
              let e = [];
              return t.onStable.subscribe(() => {
                  for (; e.length;) e.pop()()
                }),
                function (t) {
                  e.push(t)
                }
            }
          }, {
            provide: Pa,
            useClass: Pa,
            deps: [
              [new st, Oa]
            ]
          }, {
            provide: Za,
            useClass: Za,
            deps: []
          }, Na, {
            provide: Ho,
            useFactory: function () {
              return zo
            },
            deps: []
          }, {
            provide: $o,
            useFactory: function () {
              return Go
            },
            deps: []
          }, {
            provide: Ua,
            useFactory: function (t) {
              return ca(t = t || "undefined" != typeof $localize && $localize.locale || "en-US"), t
            },
            deps: [
              [new rt(Ua), new st, new ot]
            ]
          }, {
            provide: ja,
            useValue: "USD"
          }];
        let Al = (() => {
            class t {
              constructor(t) {}
            }
            return t.\u0275mod = me({
              type: t
            }), t.\u0275inj = ht({
              factory: function (e) {
                return new(e || t)(Zt(yl))
              },
              providers: kl
            }), t
          })(),
          Tl = null;

        function Il() {
          return Tl
        }
        const Ol = new Lt("DocumentToken");
        let Pl = (() => {
          class t {}
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = ut({
            factory: Fl,
            token: t,
            providedIn: "platform"
          }), t
        })();

        function Fl() {
          return Zt(Rl)
        }
        const Nl = new Lt("Location Initialized");
        let Rl = (() => {
          class t extends Pl {
            constructor(t) {
              super(), this._doc = t, this._init()
            }
            _init() {
              this.location = Il().getLocation(), this._history = Il().getHistory()
            }
            getBaseHrefFromDOM() {
              return Il().getBaseHref(this._doc)
            }
            onPopState(t) {
              Il().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
            }
            onHashChange(t) {
              Il().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
            }
            get href() {
              return this.location.href
            }
            get protocol() {
              return this.location.protocol
            }
            get hostname() {
              return this.location.hostname
            }
            get port() {
              return this.location.port
            }
            get pathname() {
              return this.location.pathname
            }
            get search() {
              return this.location.search
            }
            get hash() {
              return this.location.hash
            }
            set pathname(t) {
              this.location.pathname = t
            }
            pushState(t, e, n) {
              Ml() ? this._history.pushState(t, e, n) : this.location.hash = n
            }
            replaceState(t, e, n) {
              Ml() ? this._history.replaceState(t, e, n) : this.location.hash = n
            }
            forward() {
              this._history.forward()
            }
            back() {
              this._history.back()
            }
            getState() {
              return this._history.state
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(Ol))
          }, t.\u0275prov = ut({
            factory: Dl,
            token: t,
            providedIn: "platform"
          }), t
        })();

        function Ml() {
          return !!window.history.pushState
        }

        function Dl() {
          return new Rl(Zt(Ol))
        }

        function Vl(t, e) {
          if (0 == t.length) return e;
          if (0 == e.length) return t;
          let n = 0;
          return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        }

        function Ll(t) {
          const e = t.match(/#|\?|$/),
            n = e && e.index || t.length;
          return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
        }

        function Ul(t) {
          return t && "?" !== t[0] ? "?" + t : t
        }
        let jl = (() => {
          class t {}
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = ut({
            factory: Hl,
            token: t,
            providedIn: "root"
          }), t
        })();

        function Hl(t) {
          const e = Zt(Ol).location;
          return new ql(Zt(Pl), e && e.origin || "")
        }
        const $l = new Lt("appBaseHref");
        let ql = (() => {
            class t extends jl {
              constructor(t, e) {
                if (super(), this._platformLocation = t, null == e && (e = this._platformLocation.getBaseHrefFromDOM()), null == e) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                this._baseHref = e
              }
              onPopState(t) {
                this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
              }
              getBaseHref() {
                return this._baseHref
              }
              prepareExternalUrl(t) {
                return Vl(this._baseHref, t)
              }
              path(t = !1) {
                const e = this._platformLocation.pathname + Ul(this._platformLocation.search),
                  n = this._platformLocation.hash;
                return n && t ? `${e}${n}` : e
              }
              pushState(t, e, n, r) {
                const s = this.prepareExternalUrl(n + Ul(r));
                this._platformLocation.pushState(t, e, s)
              }
              replaceState(t, e, n, r) {
                const s = this.prepareExternalUrl(n + Ul(r));
                this._platformLocation.replaceState(t, e, s)
              }
              forward() {
                this._platformLocation.forward()
              }
              back() {
                this._platformLocation.back()
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(Pl), Zt($l, 8))
            }, t.\u0275prov = ut({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          zl = (() => {
            class t extends jl {
              constructor(t, e) {
                super(), this._platformLocation = t, this._baseHref = "", null != e && (this._baseHref = e)
              }
              onPopState(t) {
                this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
              }
              getBaseHref() {
                return this._baseHref
              }
              path(t = !1) {
                let e = this._platformLocation.hash;
                return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
              }
              prepareExternalUrl(t) {
                const e = Vl(this._baseHref, t);
                return e.length > 0 ? "#" + e : e
              }
              pushState(t, e, n, r) {
                let s = this.prepareExternalUrl(n + Ul(r));
                0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.pushState(t, e, s)
              }
              replaceState(t, e, n, r) {
                let s = this.prepareExternalUrl(n + Ul(r));
                0 == s.length && (s = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, s)
              }
              forward() {
                this._platformLocation.forward()
              }
              back() {
                this._platformLocation.back()
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(Pl), Zt($l, 8))
            }, t.\u0275prov = ut({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          Gl = (() => {
            class t {
              constructor(t, e) {
                this._subject = new ma, this._urlChangeListeners = [], this._platformStrategy = t;
                const n = this._platformStrategy.getBaseHref();
                this._platformLocation = e, this._baseHref = Ll(Wl(n)), this._platformStrategy.onPopState(t => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type
                  })
                })
              }
              path(t = !1) {
                return this.normalize(this._platformStrategy.path(t))
              }
              getState() {
                return this._platformLocation.getState()
              }
              isCurrentPathEqualTo(t, e = "") {
                return this.path() == this.normalize(t + Ul(e))
              }
              normalize(e) {
                return t.stripTrailingSlash(function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e
                }(this._baseHref, Wl(e)))
              }
              prepareExternalUrl(t) {
                return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
              }
              go(t, e = "", n = null) {
                this._platformStrategy.pushState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Ul(e)), n)
              }
              replaceState(t, e = "", n = null) {
                this._platformStrategy.replaceState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + Ul(e)), n)
              }
              forward() {
                this._platformStrategy.forward()
              }
              back() {
                this._platformStrategy.back()
              }
              onUrlChange(t) {
                this._urlChangeListeners.push(t), this.subscribe(t => {
                  this._notifyUrlChangeListeners(t.url, t.state)
                })
              }
              _notifyUrlChangeListeners(t = "", e) {
                this._urlChangeListeners.forEach(n => n(t, e))
              }
              subscribe(t, e, n) {
                return this._subject.subscribe({
                  next: t,
                  error: e,
                  complete: n
                })
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(jl), Zt(Pl))
            }, t.normalizeQueryParams = Ul, t.joinWithSlash = Vl, t.stripTrailingSlash = Ll, t.\u0275prov = ut({
              factory: Bl,
              token: t,
              providedIn: "root"
            }), t
          })();

        function Bl() {
          return new Gl(Zt(jl), Zt(Pl))
        }

        function Wl(t) {
          return t.replace(/\/index.html$/, "")
        }
        const Zl = function () {
            var t = {
              Zero: 0,
              One: 1,
              Two: 2,
              Few: 3,
              Many: 4,
              Other: 5
            };
            return t[t.Zero] = "Zero", t[t.One] = "One", t[t.Two] = "Two", t[t.Few] = "Few", t[t.Many] = "Many", t[t.Other] = "Other", t
          }(),
          Ql = function () {
            var t = {
              Format: 0,
              Standalone: 1
            };
            return t[t.Format] = "Format", t[t.Standalone] = "Standalone", t
          }(),
          Jl = function () {
            var t = {
              Narrow: 0,
              Abbreviated: 1,
              Wide: 2,
              Short: 3
            };
            return t[t.Narrow] = "Narrow", t[t.Abbreviated] = "Abbreviated", t[t.Wide] = "Wide", t[t.Short] = "Short", t
          }(),
          Yl = function () {
            var t = {
              Short: 0,
              Medium: 1,
              Long: 2,
              Full: 3
            };
            return t[t.Short] = "Short", t[t.Medium] = "Medium", t[t.Long] = "Long", t[t.Full] = "Full", t
          }(),
          Kl = function () {
            var t = {
              Decimal: 0,
              Group: 1,
              List: 2,
              PercentSign: 3,
              PlusSign: 4,
              MinusSign: 5,
              Exponential: 6,
              SuperscriptingExponent: 7,
              PerMille: 8,
              Infinity: 9,
              NaN: 10,
              TimeSeparator: 11,
              CurrencyDecimal: 12,
              CurrencyGroup: 13
            };
            return t[t.Decimal] = "Decimal", t[t.Group] = "Group", t[t.List] = "List", t[t.PercentSign] = "PercentSign", t[t.PlusSign] = "PlusSign", t[t.MinusSign] = "MinusSign", t[t.Exponential] = "Exponential", t[t.SuperscriptingExponent] = "SuperscriptingExponent", t[t.PerMille] = "PerMille", t[t.Infinity] = "Infinity", t[t.NaN] = "NaN", t[t.TimeSeparator] = "TimeSeparator", t[t.CurrencyDecimal] = "CurrencyDecimal", t[t.CurrencyGroup] = "CurrencyGroup", t
          }();

        function Xl(t, e) {
          return sc(ia(t)[aa.DateFormat], e)
        }

        function tc(t, e) {
          return sc(ia(t)[aa.TimeFormat], e)
        }

        function ec(t, e) {
          return sc(ia(t)[aa.DateTimeFormat], e)
        }

        function nc(t, e) {
          const n = ia(t),
            r = n[aa.NumberSymbols][e];
          if (void 0 === r) {
            if (e === Kl.CurrencyDecimal) return n[aa.NumberSymbols][Kl.Decimal];
            if (e === Kl.CurrencyGroup) return n[aa.NumberSymbols][Kl.Group]
          }
          return r
        }

        function rc(t) {
          if (!t[aa.ExtraData]) throw new Error(`Missing extra locale data for the locale "${t[aa.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)
        }

        function sc(t, e) {
          for (let n = e; n > -1; n--)
            if (void 0 !== t[n]) return t[n];
          throw new Error("Locale data API: locale data undefined")
        }

        function ic(t) {
          const [e, n] = t.split(":");
          return {
            hours: +e,
            minutes: +n
          }
        }
        const oc = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
          ac = {},
          lc = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
          cc = function () {
            var t = {
              Short: 0,
              ShortGMT: 1,
              Long: 2,
              Extended: 3
            };
            return t[t.Short] = "Short", t[t.ShortGMT] = "ShortGMT", t[t.Long] = "Long", t[t.Extended] = "Extended", t
          }(),
          uc = function () {
            var t = {
              FullYear: 0,
              Month: 1,
              Date: 2,
              Hours: 3,
              Minutes: 4,
              Seconds: 5,
              FractionalSeconds: 6,
              Day: 7
            };
            return t[t.FullYear] = "FullYear", t[t.Month] = "Month", t[t.Date] = "Date", t[t.Hours] = "Hours", t[t.Minutes] = "Minutes", t[t.Seconds] = "Seconds", t[t.FractionalSeconds] = "FractionalSeconds", t[t.Day] = "Day", t
          }(),
          hc = function () {
            var t = {
              DayPeriods: 0,
              Days: 1,
              Months: 2,
              Eras: 3
            };
            return t[t.DayPeriods] = "DayPeriods", t[t.Days] = "Days", t[t.Months] = "Months", t[t.Eras] = "Eras", t
          }();

        function dc(t, e) {
          return e && (t = t.replace(/\{([^}]+)}/g, (function (t, n) {
            return null != e && n in e ? e[n] : t
          }))), t
        }

        function pc(t, e, n = "-", r, s) {
          let i = "";
          (t < 0 || s && t <= 0) && (s ? t = 1 - t : (t = -t, i = n));
          let o = String(t);
          for (; o.length < e;) o = "0" + o;
          return r && (o = o.substr(o.length - e)), i + o
        }

        function fc(t, e, n = 0, r = !1, s = !1) {
          return function (i, o) {
            let a = function (t, e) {
              switch (t) {
                case uc.FullYear:
                  return e.getFullYear();
                case uc.Month:
                  return e.getMonth();
                case uc.Date:
                  return e.getDate();
                case uc.Hours:
                  return e.getHours();
                case uc.Minutes:
                  return e.getMinutes();
                case uc.Seconds:
                  return e.getSeconds();
                case uc.FractionalSeconds:
                  return e.getMilliseconds();
                case uc.Day:
                  return e.getDay();
                default:
                  throw new Error(`Unknown DateType value "${t}".`)
              }
            }(t, i);
            if ((n > 0 || a > -n) && (a += n), t === uc.Hours) 0 === a && -12 === n && (a = 12);
            else if (t === uc.FractionalSeconds) return l = e, pc(a, 3).substr(0, l);
            var l;
            const c = nc(o, Kl.MinusSign);
            return pc(a, e, c, r, s)
          }
        }

        function mc(t, e, n = Ql.Format, r = !1) {
          return function (s, i) {
            return function (t, e, n, r, s, i) {
              switch (n) {
                case hc.Months:
                  return function (t, e, n) {
                    const r = ia(t),
                      s = sc([r[aa.MonthsFormat], r[aa.MonthsStandalone]], e);
                    return sc(s, n)
                  }(e, s, r)[t.getMonth()];
                case hc.Days:
                  return function (t, e, n) {
                    const r = ia(t),
                      s = sc([r[aa.DaysFormat], r[aa.DaysStandalone]], e);
                    return sc(s, n)
                  }(e, s, r)[t.getDay()];
                case hc.DayPeriods:
                  const o = t.getHours(),
                    a = t.getMinutes();
                  if (i) {
                    const t = function (t) {
                        const e = ia(t);
                        return rc(e), (e[aa.ExtraData][2] || []).map(t => "string" == typeof t ? ic(t) : [ic(t[0]), ic(t[1])])
                      }(e),
                      n = function (t, e, n) {
                        const r = ia(t);
                        rc(r);
                        const s = sc([r[aa.ExtraData][0], r[aa.ExtraData][1]], e) || [];
                        return sc(s, n) || []
                      }(e, s, r);
                    let i;
                    if (t.forEach((t, e) => {
                        if (Array.isArray(t)) {
                          const {
                            hours: r,
                            minutes: s
                          } = t[0], {
                            hours: l,
                            minutes: c
                          } = t[1];
                          o >= r && a >= s && (o < l || o === l && a < c) && (i = n[e])
                        } else {
                          const {
                            hours: r,
                            minutes: s
                          } = t;
                          r === o && s === a && (i = n[e])
                        }
                      }), i) return i
                  }
                  return function (t, e, n) {
                    const r = ia(t),
                      s = sc([r[aa.DayPeriodsFormat], r[aa.DayPeriodsStandalone]], e);
                    return sc(s, n)
                  }(e, s, r)[o < 12 ? 0 : 1];
                case hc.Eras:
                  return function (t, e) {
                    return sc(ia(t)[aa.Eras], e)
                  }(e, r)[t.getFullYear() <= 0 ? 0 : 1];
                default:
                  throw new Error(`unexpected translation type ${n}`)
              }
            }(s, i, t, e, n, r)
          }
        }

        function gc(t) {
          return function (e, n, r) {
            const s = -1 * r,
              i = nc(n, Kl.MinusSign),
              o = s > 0 ? Math.floor(s / 60) : Math.ceil(s / 60);
            switch (t) {
              case cc.Short:
                return (s >= 0 ? "+" : "") + pc(o, 2, i) + pc(Math.abs(s % 60), 2, i);
              case cc.ShortGMT:
                return "GMT" + (s >= 0 ? "+" : "") + pc(o, 1, i);
              case cc.Long:
                return "GMT" + (s >= 0 ? "+" : "") + pc(o, 2, i) + ":" + pc(Math.abs(s % 60), 2, i);
              case cc.Extended:
                return 0 === r ? "Z" : (s >= 0 ? "+" : "") + pc(o, 2, i) + ":" + pc(Math.abs(s % 60), 2, i);
              default:
                throw new Error(`Unknown zone width "${t}"`)
            }
          }
        }

        function vc(t, e = !1) {
          return function (n, r) {
            let s;
            if (e) {
              const t = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
                e = n.getDate();
              s = 1 + Math.floor((e + t) / 7)
            } else {
              const t = function (t) {
                  const e = new Date(t, 0, 1).getDay();
                  return new Date(t, 0, 1 + (e <= 4 ? 4 : 11) - e)
                }(n.getFullYear()),
                e = (i = n, new Date(i.getFullYear(), i.getMonth(), i.getDate() + (4 - i.getDay()))).getTime() - t.getTime();
              s = 1 + Math.round(e / 6048e5)
            }
            var i;
            return pc(s, t, nc(r, Kl.MinusSign))
          }
        }
        const yc = {};

        function bc(t, e) {
          t = t.replace(/:/g, "");
          const n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
          return isNaN(n) ? e : n
        }

        function wc(t) {
          return t instanceof Date && !isNaN(t.valueOf())
        }
        class _c {}
        let Cc = (() => {
          class t extends _c {
            constructor(t) {
              super(), this.locale = t
            }
            getPluralCategory(t, e) {
              switch (function (t) {
                return ia(t)[aa.PluralCase]
              }(e || this.locale)(t)) {
                case Zl.Zero:
                  return "zero";
                case Zl.One:
                  return "one";
                case Zl.Two:
                  return "two";
                case Zl.Few:
                  return "few";
                case Zl.Many:
                  return "many";
                default:
                  return "other"
              }
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(Ua))
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function Sc(t, e) {
          e = encodeURIComponent(e);
          for (const n of t.split(";")) {
            const t = n.indexOf("="),
              [r, s] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
            if (r.trim() === e) return decodeURIComponent(s)
          }
          return null
        }
        let Ec = (() => {
          class t {
            constructor(t, e, n, r) {
              this._iterableDiffers = t, this._keyValueDiffers = e, this._ngEl = n, this._renderer = r, this._iterableDiffer = null, this._keyValueDiffer = null, this._initialClasses = [], this._rawClass = null
            }
            set klass(t) {
              this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
            }
            set ngClass(t) {
              this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof t ? t.split(/\s+/) : t, this._rawClass && (bi(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
            }
            ngDoCheck() {
              if (this._iterableDiffer) {
                const t = this._iterableDiffer.diff(this._rawClass);
                t && this._applyIterableChanges(t)
              } else if (this._keyValueDiffer) {
                const t = this._keyValueDiffer.diff(this._rawClass);
                t && this._applyKeyValueChanges(t)
              }
            }
            _applyKeyValueChanges(t) {
              t.forEachAddedItem(t => this._toggleClass(t.key, t.currentValue)), t.forEachChangedItem(t => this._toggleClass(t.key, t.currentValue)), t.forEachRemovedItem(t => {
                t.previousValue && this._toggleClass(t.key, !1)
              })
            }
            _applyIterableChanges(t) {
              t.forEachAddedItem(t => {
                if ("string" != typeof t.item) throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${wt(t.item)}`);
                this._toggleClass(t.item, !0)
              }), t.forEachRemovedItem(t => this._toggleClass(t.item, !1))
            }
            _applyClasses(t) {
              t && (Array.isArray(t) || t instanceof Set ? t.forEach(t => this._toggleClass(t, !0)) : Object.keys(t).forEach(e => this._toggleClass(e, !!t[e])))
            }
            _removeClasses(t) {
              t && (Array.isArray(t) || t instanceof Set ? t.forEach(t => this._toggleClass(t, !1)) : Object.keys(t).forEach(t => this._toggleClass(t, !1)))
            }
            _toggleClass(t, e) {
              (t = t.trim()) && t.split(/\s+/g).forEach(t => {
                e ? this._renderer.addClass(this._ngEl.nativeElement, t) : this._renderer.removeClass(this._ngEl.nativeElement, t)
              })
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(ki(Ho), ki($o), ki(Co), ki(ko))
          }, t.\u0275dir = ve({
            type: t,
            selectors: [
              ["", "ngClass", ""]
            ],
            inputs: {
              klass: ["class", "klass"],
              ngClass: "ngClass"
            }
          }), t
        })();
        class xc {
          constructor(t, e, n, r) {
            this.$implicit = t, this.ngForOf = e, this.index = n, this.count = r
          }
          get first() {
            return 0 === this.index
          }
          get last() {
            return this.index === this.count - 1
          }
          get even() {
            return this.index % 2 == 0
          }
          get odd() {
            return !this.even
          }
        }
        let kc = (() => {
          class t {
            constructor(t, e, n) {
              this._viewContainer = t, this._template = e, this._differs = n, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
            }
            set ngForOf(t) {
              this._ngForOf = t, this._ngForOfDirty = !0
            }
            set ngForTrackBy(t) {
              ir() && null != t && "function" != typeof t && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}. ` + "See https://angular.io/api/common/NgForOf#change-propagation for more information."), this._trackByFn = t
            }
            get ngForTrackBy() {
              return this._trackByFn
            }
            set ngForTemplate(t) {
              t && (this._template = t)
            }
            ngDoCheck() {
              if (this._ngForOfDirty) {
                this._ngForOfDirty = !1;
                const n = this._ngForOf;
                if (!this._differ && n) try {
                  this._differ = this._differs.find(n).create(this.ngForTrackBy)
                } catch (e) {
                  throw new Error(`Cannot find a differ supporting object '${n}' of type '${t=n,t.name||typeof t}'. NgFor only supports binding to Iterables such as Arrays.`)
                }
              }
              var t;
              if (this._differ) {
                const t = this._differ.diff(this._ngForOf);
                t && this._applyChanges(t)
              }
            }
            _applyChanges(t) {
              const e = [];
              t.forEachOperation((t, n, r) => {
                if (null == t.previousIndex) {
                  const n = this._viewContainer.createEmbeddedView(this._template, new xc(null, this._ngForOf, -1, -1), null === r ? void 0 : r),
                    s = new Ac(t, n);
                  e.push(s)
                } else if (null == r) this._viewContainer.remove(null === n ? void 0 : n);
                else if (null !== n) {
                  const s = this._viewContainer.get(n);
                  this._viewContainer.move(s, r);
                  const i = new Ac(t, s);
                  e.push(i)
                }
              });
              for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record);
              for (let n = 0, r = this._viewContainer.length; n < r; n++) {
                const t = this._viewContainer.get(n);
                t.context.index = n, t.context.count = r, t.context.ngForOf = this._ngForOf
              }
              t.forEachIdentityChange(t => {
                this._viewContainer.get(t.currentIndex).context.$implicit = t.item
              })
            }
            _perViewChange(t, e) {
              t.context.$implicit = e.item
            }
            static ngTemplateContextGuard(t, e) {
              return !0
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(ki(Zo), ki(Bo), ki(Ho))
          }, t.\u0275dir = ve({
            type: t,
            selectors: [
              ["", "ngFor", "", "ngForOf", ""]
            ],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate"
            }
          }), t
        })();
        class Ac {
          constructor(t, e) {
            this.record = t, this.view = e
          }
        }
        let Tc = (() => {
          class t {
            constructor(t, e) {
              this._viewContainer = t, this._context = new Ic, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
            }
            set ngIf(t) {
              this._context.$implicit = this._context.ngIf = t, this._updateView()
            }
            set ngIfThen(t) {
              Oc("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
            }
            set ngIfElse(t) {
              Oc("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
            }
            _updateView() {
              this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
            }
            static ngTemplateContextGuard(t, e) {
              return !0
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(ki(Zo), ki(Bo))
          }, t.\u0275dir = ve({
            type: t,
            selectors: [
              ["", "ngIf", ""]
            ],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse"
            }
          }), t
        })();
        class Ic {
          constructor() {
            this.$implicit = null, this.ngIf = null
          }
        }

        function Oc(t, e) {
          if (e && !e.createEmbeddedView) throw new Error(`${t} must be a TemplateRef, but received '${wt(e)}'.`)
        }
        let Pc = (() => {
            class t {
              constructor(t) {
                this.locale = t
              }
              transform(e, n = "mediumDate", r, s) {
                if (null == e || "" === e || e != e) return null;
                try {
                  return function (t, e, n, r) {
                    let s = function (t) {
                      if (wc(t)) return t;
                      if ("number" == typeof t && !isNaN(t)) return new Date(t);
                      if ("string" == typeof t) {
                        t = t.trim();
                        const e = parseFloat(t);
                        if (!isNaN(t - e)) return new Date(e);
                        if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
                          const [e, n, r] = t.split("-").map(t => +t);
                          return new Date(e, n - 1, r)
                        }
                        let n;
                        if (n = t.match(oc)) return function (t) {
                          const e = new Date(0);
                          let n = 0,
                            r = 0;
                          const s = t[8] ? e.setUTCFullYear : e.setFullYear,
                            i = t[8] ? e.setUTCHours : e.setHours;
                          t[9] && (n = Number(t[9] + t[10]), r = Number(t[9] + t[11])), s.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                          const o = Number(t[4] || 0) - n,
                            a = Number(t[5] || 0) - r,
                            l = Number(t[6] || 0),
                            c = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                          return i.call(e, o, a, l, c), e
                        }(n)
                      }
                      const e = new Date(t);
                      if (!wc(e)) throw new Error(`Unable to convert "${t}" into a date`);
                      return e
                    }(t);
                    e = function t(e, n) {
                      const r = function (t) {
                        return ia(t)[aa.LocaleId]
                      }(e);
                      if (ac[r] = ac[r] || {}, ac[r][n]) return ac[r][n];
                      let s = "";
                      switch (n) {
                        case "shortDate":
                          s = Xl(e, Yl.Short);
                          break;
                        case "mediumDate":
                          s = Xl(e, Yl.Medium);
                          break;
                        case "longDate":
                          s = Xl(e, Yl.Long);
                          break;
                        case "fullDate":
                          s = Xl(e, Yl.Full);
                          break;
                        case "shortTime":
                          s = tc(e, Yl.Short);
                          break;
                        case "mediumTime":
                          s = tc(e, Yl.Medium);
                          break;
                        case "longTime":
                          s = tc(e, Yl.Long);
                          break;
                        case "fullTime":
                          s = tc(e, Yl.Full);
                          break;
                        case "short":
                          const n = t(e, "shortTime"),
                            r = t(e, "shortDate");
                          s = dc(ec(e, Yl.Short), [n, r]);
                          break;
                        case "medium":
                          const i = t(e, "mediumTime"),
                            o = t(e, "mediumDate");
                          s = dc(ec(e, Yl.Medium), [i, o]);
                          break;
                        case "long":
                          const a = t(e, "longTime"),
                            l = t(e, "longDate");
                          s = dc(ec(e, Yl.Long), [a, l]);
                          break;
                        case "full":
                          const c = t(e, "fullTime"),
                            u = t(e, "fullDate");
                          s = dc(ec(e, Yl.Full), [c, u])
                      }
                      return s && (ac[r][n] = s), s
                    }(n, e) || e;
                    let i, o = [];
                    for (; e;) {
                      if (i = lc.exec(e), !i) {
                        o.push(e);
                        break
                      } {
                        o = o.concat(i.slice(1));
                        const t = o.pop();
                        if (!t) break;
                        e = t
                      }
                    }
                    let a = s.getTimezoneOffset();
                    r && (a = bc(r, a), s = function (t, e, n) {
                      const r = t.getTimezoneOffset();
                      return function (t, e) {
                        return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t
                      }(t, -1 * (bc(e, r) - r))
                    }(s, r));
                    let l = "";
                    return o.forEach(t => {
                      const e = function (t) {
                        if (yc[t]) return yc[t];
                        let e;
                        switch (t) {
                          case "G":
                          case "GG":
                          case "GGG":
                            e = mc(hc.Eras, Jl.Abbreviated);
                            break;
                          case "GGGG":
                            e = mc(hc.Eras, Jl.Wide);
                            break;
                          case "GGGGG":
                            e = mc(hc.Eras, Jl.Narrow);
                            break;
                          case "y":
                            e = fc(uc.FullYear, 1, 0, !1, !0);
                            break;
                          case "yy":
                            e = fc(uc.FullYear, 2, 0, !0, !0);
                            break;
                          case "yyy":
                            e = fc(uc.FullYear, 3, 0, !1, !0);
                            break;
                          case "yyyy":
                            e = fc(uc.FullYear, 4, 0, !1, !0);
                            break;
                          case "M":
                          case "L":
                            e = fc(uc.Month, 1, 1);
                            break;
                          case "MM":
                          case "LL":
                            e = fc(uc.Month, 2, 1);
                            break;
                          case "MMM":
                            e = mc(hc.Months, Jl.Abbreviated);
                            break;
                          case "MMMM":
                            e = mc(hc.Months, Jl.Wide);
                            break;
                          case "MMMMM":
                            e = mc(hc.Months, Jl.Narrow);
                            break;
                          case "LLL":
                            e = mc(hc.Months, Jl.Abbreviated, Ql.Standalone);
                            break;
                          case "LLLL":
                            e = mc(hc.Months, Jl.Wide, Ql.Standalone);
                            break;
                          case "LLLLL":
                            e = mc(hc.Months, Jl.Narrow, Ql.Standalone);
                            break;
                          case "w":
                            e = vc(1);
                            break;
                          case "ww":
                            e = vc(2);
                            break;
                          case "W":
                            e = vc(1, !0);
                            break;
                          case "d":
                            e = fc(uc.Date, 1);
                            break;
                          case "dd":
                            e = fc(uc.Date, 2);
                            break;
                          case "E":
                          case "EE":
                          case "EEE":
                            e = mc(hc.Days, Jl.Abbreviated);
                            break;
                          case "EEEE":
                            e = mc(hc.Days, Jl.Wide);
                            break;
                          case "EEEEE":
                            e = mc(hc.Days, Jl.Narrow);
                            break;
                          case "EEEEEE":
                            e = mc(hc.Days, Jl.Short);
                            break;
                          case "a":
                          case "aa":
                          case "aaa":
                            e = mc(hc.DayPeriods, Jl.Abbreviated);
                            break;
                          case "aaaa":
                            e = mc(hc.DayPeriods, Jl.Wide);
                            break;
                          case "aaaaa":
                            e = mc(hc.DayPeriods, Jl.Narrow);
                            break;
                          case "b":
                          case "bb":
                          case "bbb":
                            e = mc(hc.DayPeriods, Jl.Abbreviated, Ql.Standalone, !0);
                            break;
                          case "bbbb":
                            e = mc(hc.DayPeriods, Jl.Wide, Ql.Standalone, !0);
                            break;
                          case "bbbbb":
                            e = mc(hc.DayPeriods, Jl.Narrow, Ql.Standalone, !0);
                            break;
                          case "B":
                          case "BB":
                          case "BBB":
                            e = mc(hc.DayPeriods, Jl.Abbreviated, Ql.Format, !0);
                            break;
                          case "BBBB":
                            e = mc(hc.DayPeriods, Jl.Wide, Ql.Format, !0);
                            break;
                          case "BBBBB":
                            e = mc(hc.DayPeriods, Jl.Narrow, Ql.Format, !0);
                            break;
                          case "h":
                            e = fc(uc.Hours, 1, -12);
                            break;
                          case "hh":
                            e = fc(uc.Hours, 2, -12);
                            break;
                          case "H":
                            e = fc(uc.Hours, 1);
                            break;
                          case "HH":
                            e = fc(uc.Hours, 2);
                            break;
                          case "m":
                            e = fc(uc.Minutes, 1);
                            break;
                          case "mm":
                            e = fc(uc.Minutes, 2);
                            break;
                          case "s":
                            e = fc(uc.Seconds, 1);
                            break;
                          case "ss":
                            e = fc(uc.Seconds, 2);
                            break;
                          case "S":
                            e = fc(uc.FractionalSeconds, 1);
                            break;
                          case "SS":
                            e = fc(uc.FractionalSeconds, 2);
                            break;
                          case "SSS":
                            e = fc(uc.FractionalSeconds, 3);
                            break;
                          case "Z":
                          case "ZZ":
                          case "ZZZ":
                            e = gc(cc.Short);
                            break;
                          case "ZZZZZ":
                            e = gc(cc.Extended);
                            break;
                          case "O":
                          case "OO":
                          case "OOO":
                          case "z":
                          case "zz":
                          case "zzz":
                            e = gc(cc.ShortGMT);
                            break;
                          case "OOOO":
                          case "ZZZZ":
                          case "zzzz":
                            e = gc(cc.Long);
                            break;
                          default:
                            return null
                        }
                        return yc[t] = e, e
                      }(t);
                      l += e ? e(s, n, a) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                    }), l
                  }(e, n, s || this.locale, r)
                } catch (i) {
                  throw function (t, e) {
                    return Error(`InvalidPipeArgument: '${e}' for pipe '${wt(t)}'`)
                  }(t, i.message)
                }
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(ki(Ua))
            }, t.\u0275pipe = ye({
              name: "date",
              type: t,
              pure: !0
            }), t
          })(),
          Fc = (() => {
            class t {
              transform(t) {
                return JSON.stringify(t, null, 2)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275pipe = ye({
              name: "json",
              type: t,
              pure: !1
            }), t
          })(),
          Nc = (() => {
            class t {}
            return t.\u0275mod = me({
              type: t
            }), t.\u0275inj = ht({
              factory: function (e) {
                return new(e || t)
              },
              providers: [{
                provide: _c,
                useClass: Cc
              }]
            }), t
          })(),
          Rc = (() => {
            class t {}
            return t.\u0275prov = ut({
              token: t,
              providedIn: "root",
              factory: () => new Mc(Zt(Ol), window, Zt(tr))
            }), t
          })();
        class Mc {
          constructor(t, e, n) {
            this.document = t, this.window = e, this.errorHandler = n, this.offset = () => [0, 0]
          }
          setOffset(t) {
            this.offset = Array.isArray(t) ? () => t : t
          }
          getScrollPosition() {
            return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
          }
          scrollToPosition(t) {
            this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1])
          }
          scrollToAnchor(t) {
            if (this.supportScrollRestoration()) {
              t = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(t) : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
              try {
                const e = this.document.querySelector(`#${t}`);
                if (e) return void this.scrollToElement(e);
                const n = this.document.querySelector(`[name='${t}']`);
                if (n) return void this.scrollToElement(n)
              } catch (e) {
                this.errorHandler.handleError(e)
              }
            }
          }
          setHistoryScrollRestoration(t) {
            if (this.supportScrollRestoration()) {
              const e = this.window.history;
              e && e.scrollRestoration && (e.scrollRestoration = t)
            }
          }
          scrollToElement(t) {
            const e = t.getBoundingClientRect(),
              n = e.left + this.window.pageXOffset,
              r = e.top + this.window.pageYOffset,
              s = this.offset();
            this.window.scrollTo(n - s[0], r - s[1])
          }
          supportScrollRestoration() {
            try {
              return !!this.window && !!this.window.scrollTo
            } catch (t) {
              return !1
            }
          }
        }
        class Dc extends class extends class {} {
          constructor() {
            super()
          }
          supportsDOMEvents() {
            return !0
          }
        } {
          static makeCurrent() {
            var t;
            t = new Dc, Tl || (Tl = t)
          }
          getProperty(t, e) {
            return t[e]
          }
          log(t) {
            window.console && window.console.log && window.console.log(t)
          }
          logGroup(t) {
            window.console && window.console.group && window.console.group(t)
          }
          logGroupEnd() {
            window.console && window.console.groupEnd && window.console.groupEnd()
          }
          onAndCancel(t, e, n) {
            return t.addEventListener(e, n, !1), () => {
              t.removeEventListener(e, n, !1)
            }
          }
          dispatchEvent(t, e) {
            t.dispatchEvent(e)
          }
          remove(t) {
            return t.parentNode && t.parentNode.removeChild(t), t
          }
          getValue(t) {
            return t.value
          }
          createElement(t, e) {
            return (e = e || this.getDefaultDocument()).createElement(t)
          }
          createHtmlDocument() {
            return document.implementation.createHTMLDocument("fakeTitle")
          }
          getDefaultDocument() {
            return document
          }
          isElementNode(t) {
            return t.nodeType === Node.ELEMENT_NODE
          }
          isShadowRoot(t) {
            return t instanceof DocumentFragment
          }
          getGlobalEventTarget(t, e) {
            return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
          }
          getHistory() {
            return window.history
          }
          getLocation() {
            return window.location
          }
          getBaseHref(t) {
            const e = Lc || (Lc = document.querySelector("base"), Lc) ? Lc.getAttribute("href") : null;
            return null == e ? null : (n = e, Vc || (Vc = document.createElement("a")), Vc.setAttribute("href", n), "/" === Vc.pathname.charAt(0) ? Vc.pathname : "/" + Vc.pathname);
            var n
          }
          resetBaseElement() {
            Lc = null
          }
          getUserAgent() {
            return window.navigator.userAgent
          }
          performanceNow() {
            return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
          }
          supportsCookies() {
            return !0
          }
          getCookie(t) {
            return Sc(document.cookie, t)
          }
        }
        let Vc, Lc = null;
        const Uc = new Lt("TRANSITION_ID"),
          jc = [{
            provide: Oa,
            useFactory: function (t, e, n) {
              return () => {
                n.get(Pa).donePromise.then(() => {
                  const n = Il();
                  Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e => e.getAttribute("ng-transition") === t).forEach(t => n.remove(t))
                })
              }
            },
            deps: [Uc, Ol, ci],
            multi: !0
          }];
        class Hc {
          static init() {
            var t;
            t = new Hc, ul = t
          }
          addToWindow(t) {
            Ot.getAngularTestability = (e, n = !0) => {
              const r = t.findTestabilityInTree(e, n);
              if (null == r) throw new Error("Could not find testability for element.");
              return r
            }, Ot.getAllAngularTestabilities = () => t.getAllTestabilities(), Ot.getAllAngularRootElements = () => t.getAllRootElements(), Ot.frameworkStabilizers || (Ot.frameworkStabilizers = []), Ot.frameworkStabilizers.push(t => {
              const e = Ot.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const s = function (e) {
                r = r || e, n--, 0 == n && t(r)
              };
              e.forEach((function (t) {
                t.whenStable(s)
              }))
            })
          }
          findTestabilityInTree(t, e, n) {
            if (null == e) return null;
            const r = t.getTestability(e);
            return null != r ? r : n ? Il().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null
          }
        }
        const $c = new Lt("EventManagerPlugins");
        let qc = (() => {
          class t {
            constructor(t, e) {
              this._zone = e, this._eventNameToPlugin = new Map, t.forEach(t => t.manager = this), this._plugins = t.slice().reverse()
            }
            addEventListener(t, e, n) {
              return this._findPluginFor(e).addEventListener(t, e, n)
            }
            addGlobalEventListener(t, e, n) {
              return this._findPluginFor(e).addGlobalEventListener(t, e, n)
            }
            getZone() {
              return this._zone
            }
            _findPluginFor(t) {
              const e = this._eventNameToPlugin.get(t);
              if (e) return e;
              const n = this._plugins;
              for (let r = 0; r < n.length; r++) {
                const e = n[r];
                if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e
              }
              throw new Error(`No event manager plugin found for event ${t}`)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt($c), Zt(Ka))
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        class zc {
          constructor(t) {
            this._doc = t
          }
          addGlobalEventListener(t, e, n) {
            const r = Il().getGlobalEventTarget(this._doc, t);
            if (!r) throw new Error(`Unsupported event target ${r} for event ${e}`);
            return this.addEventListener(r, e, n)
          }
        }
        let Gc = (() => {
            class t {
              constructor() {
                this._stylesSet = new Set
              }
              addStyles(t) {
                const e = new Set;
                t.forEach(t => {
                  this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t))
                }), this.onStylesAdded(e)
              }
              onStylesAdded(t) {}
              getAllStyles() {
                return Array.from(this._stylesSet)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275prov = ut({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          Bc = (() => {
            class t extends Gc {
              constructor(t) {
                super(), this._doc = t, this._hostNodes = new Set, this._styleNodes = new Set, this._hostNodes.add(t.head)
              }
              _addStylesToHost(t, e) {
                t.forEach(t => {
                  const n = this._doc.createElement("style");
                  n.textContent = t, this._styleNodes.add(e.appendChild(n))
                })
              }
              addHost(t) {
                this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
              }
              removeHost(t) {
                this._hostNodes.delete(t)
              }
              onStylesAdded(t) {
                this._hostNodes.forEach(e => this._addStylesToHost(t, e))
              }
              ngOnDestroy() {
                this._styleNodes.forEach(t => Il().remove(t))
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(Ol))
            }, t.\u0275prov = ut({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        const Wc = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
          },
          Zc = /%COMP%/g;

        function Qc(t, e, n) {
          for (let r = 0; r < e.length; r++) {
            let s = e[r];
            Array.isArray(s) ? Qc(t, s, n) : (s = s.replace(Zc, t), n.push(s))
          }
          return n
        }

        function Jc(t) {
          return e => {
            if ("__ngUnwrap__" === e) return t;
            !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
          }
        }
        let Yc = (() => {
          class t {
            constructor(t, e, n) {
              this.eventManager = t, this.sharedStylesHost = e, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new Kc(t)
            }
            createRenderer(t, e) {
              if (!t || !e) return this.defaultRenderer;
              switch (e.encapsulation) {
                case ae.Emulated: {
                  let n = this.rendererByCompId.get(e.id);
                  return n || (n = new Xc(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n
                }
                case ae.Native:
                case ae.ShadowDom:
                  return new tu(this.eventManager, this.sharedStylesHost, t, e);
                default:
                  if (!this.rendererByCompId.has(e.id)) {
                    const t = Qc(e.id, e.styles, []);
                    this.sharedStylesHost.addStyles(t), this.rendererByCompId.set(e.id, this.defaultRenderer)
                  }
                  return this.defaultRenderer
              }
            }
            begin() {}
            end() {}
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(qc), Zt(Bc), Zt(Fa))
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        class Kc {
          constructor(t) {
            this.eventManager = t, this.data = Object.create(null)
          }
          destroy() {}
          createElement(t, e) {
            return e ? document.createElementNS(Wc[e] || e, t) : document.createElement(t)
          }
          createComment(t) {
            return document.createComment(t)
          }
          createText(t) {
            return document.createTextNode(t)
          }
          appendChild(t, e) {
            t.appendChild(e)
          }
          insertBefore(t, e, n) {
            t && t.insertBefore(e, n)
          }
          removeChild(t, e) {
            t && t.removeChild(e)
          }
          selectRootElement(t, e) {
            let n = "string" == typeof t ? document.querySelector(t) : t;
            if (!n) throw new Error(`The selector "${t}" did not match any elements`);
            return e || (n.textContent = ""), n
          }
          parentNode(t) {
            return t.parentNode
          }
          nextSibling(t) {
            return t.nextSibling
          }
          setAttribute(t, e, n, r) {
            if (r) {
              e = r + ":" + e;
              const s = Wc[r];
              s ? t.setAttributeNS(s, e, n) : t.setAttribute(e, n)
            } else t.setAttribute(e, n)
          }
          removeAttribute(t, e, n) {
            if (n) {
              const r = Wc[n];
              r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`)
            } else t.removeAttribute(e)
          }
          addClass(t, e) {
            t.classList.add(e)
          }
          removeClass(t, e) {
            t.classList.remove(e)
          }
          setStyle(t, e, n, r) {
            r & xo.DashCase ? t.style.setProperty(e, n, r & xo.Important ? "important" : "") : t.style[e] = n
          }
          removeStyle(t, e, n) {
            n & xo.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
          }
          setProperty(t, e, n) {
            t[e] = n
          }
          setValue(t, e) {
            t.nodeValue = e
          }
          listen(t, e, n) {
            return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, Jc(n)) : this.eventManager.addEventListener(t, e, Jc(n))
          }
        }
        class Xc extends Kc {
          constructor(t, e, n, r) {
            super(t), this.component = n;
            const s = Qc(r + "-" + n.id, n.styles, []);
            e.addStyles(s), this.contentAttr = "_ngcontent-%COMP%".replace(Zc, r + "-" + n.id), this.hostAttr = function (t) {
              return "_nghost-%COMP%".replace(Zc, t)
            }(r + "-" + n.id)
          }
          applyToHost(t) {
            super.setAttribute(t, this.hostAttr, "")
          }
          createElement(t, e) {
            const n = super.createElement(t, e);
            return super.setAttribute(n, this.contentAttr, ""), n
          }
        }
        class tu extends Kc {
          constructor(t, e, n, r) {
            super(t), this.sharedStylesHost = e, this.hostEl = n, this.component = r, this.shadowRoot = r.encapsulation === ae.ShadowDom ? n.attachShadow({
              mode: "open"
            }) : n.createShadowRoot(), this.sharedStylesHost.addHost(this.shadowRoot);
            const s = Qc(r.id, r.styles, []);
            for (let i = 0; i < s.length; i++) {
              const t = document.createElement("style");
              t.textContent = s[i], this.shadowRoot.appendChild(t)
            }
          }
          nodeOrShadowRoot(t) {
            return t === this.hostEl ? this.shadowRoot : t
          }
          destroy() {
            this.sharedStylesHost.removeHost(this.shadowRoot)
          }
          appendChild(t, e) {
            return super.appendChild(this.nodeOrShadowRoot(t), e)
          }
          insertBefore(t, e, n) {
            return super.insertBefore(this.nodeOrShadowRoot(t), e, n)
          }
          removeChild(t, e) {
            return super.removeChild(this.nodeOrShadowRoot(t), e)
          }
          parentNode(t) {
            return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
          }
        }
        let eu = (() => {
          class t extends zc {
            constructor(t) {
              super(t)
            }
            supports(t) {
              return !0
            }
            addEventListener(t, e, n) {
              return t.addEventListener(e, n, !1), () => this.removeEventListener(t, e, n)
            }
            removeEventListener(t, e, n) {
              return t.removeEventListener(e, n)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(Ol))
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const nu = ["alt", "control", "meta", "shift"],
          ru = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
          },
          su = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock"
          },
          iu = {
            alt: t => t.altKey,
            control: t => t.ctrlKey,
            meta: t => t.metaKey,
            shift: t => t.shiftKey
          };
        let ou = (() => {
          class t extends zc {
            constructor(t) {
              super(t)
            }
            supports(e) {
              return null != t.parseEventName(e)
            }
            addEventListener(e, n, r) {
              const s = t.parseEventName(n),
                i = t.eventCallback(s.fullKey, r, this.manager.getZone());
              return this.manager.getZone().runOutsideAngular(() => Il().onAndCancel(e, s.domEventName, i))
            }
            static parseEventName(e) {
              const n = e.toLowerCase().split("."),
                r = n.shift();
              if (0 === n.length || "keydown" !== r && "keyup" !== r) return null;
              const s = t._normalizeKey(n.pop());
              let i = "";
              if (nu.forEach(t => {
                  const e = n.indexOf(t);
                  e > -1 && (n.splice(e, 1), i += t + ".")
                }), i += s, 0 != n.length || 0 === s.length) return null;
              const o = {};
              return o.domEventName = r, o.fullKey = i, o
            }
            static getEventFullKey(t) {
              let e = "",
                n = function (t) {
                  let e = t.key;
                  if (null == e) {
                    if (e = t.keyIdentifier, null == e) return "Unidentified";
                    e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && su.hasOwnProperty(e) && (e = su[e]))
                  }
                  return ru[e] || e
                }(t);
              return n = n.toLowerCase(), " " === n ? n = "space" : "." === n && (n = "dot"), nu.forEach(r => {
                r != n && (0, iu[r])(t) && (e += r + ".")
              }), e += n, e
            }
            static eventCallback(e, n, r) {
              return s => {
                t.getEventFullKey(s) === e && r.runGuarded(() => n(s))
              }
            }
            static _normalizeKey(t) {
              switch (t) {
                case "esc":
                  return "escape";
                default:
                  return t
              }
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(Ol))
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const au = fl(xl, "browser", [{
            provide: Da,
            useValue: "browser"
          }, {
            provide: Ma,
            useValue: function () {
              Dc.makeCurrent(), Hc.init()
            },
            multi: !0
          }, {
            provide: Ol,
            useFactory: function () {
              return function (t) {
                Ie = t
              }(document), document
            },
            deps: []
          }]),
          lu = [
            [], {
              provide: Qs,
              useValue: "root"
            }, {
              provide: tr,
              useFactory: function () {
                return new tr
              },
              deps: []
            }, {
              provide: $c,
              useClass: eu,
              multi: !0,
              deps: [Ol, Ka, Da]
            }, {
              provide: $c,
              useClass: ou,
              multi: !0,
              deps: [Ol]
            },
            [], {
              provide: Yc,
              useClass: Yc,
              deps: [qc, Bc, Fa]
            }, {
              provide: Eo,
              useExisting: Yc
            }, {
              provide: Gc,
              useExisting: Bc
            }, {
              provide: Bc,
              useClass: Bc,
              deps: [Ol]
            }, {
              provide: ol,
              useClass: ol,
              deps: [Ka]
            }, {
              provide: qc,
              useClass: qc,
              deps: [$c, Ka]
            },
            []
          ];
        let cu = (() => {
          class t {
            constructor(t) {
              if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
            }
            static withServerTransition(e) {
              return {
                ngModule: t,
                providers: [{
                  provide: Fa,
                  useValue: e.appId
                }, {
                  provide: Uc,
                  useExisting: Fa
                }, jc]
              }
            }
          }
          return t.\u0275mod = me({
            type: t
          }), t.\u0275inj = ht({
            factory: function (e) {
              return new(e || t)(Zt(t, 12))
            },
            providers: lu,
            imports: [Nc, Al]
          }), t
        })();

        function uu(...t) {
          let e = t[t.length - 1];
          return A(e) ? (t.pop(), j(t, e)) : W(t)
        }

        function hu(t, e) {
          return $(t, e, 1)
        }

        function du(t, e) {
          return function (n) {
            return n.lift(new pu(t, e))
          }
        }
        "undefined" != typeof window && window;
        class pu {
          constructor(t, e) {
            this.predicate = t, this.thisArg = e
          }
          call(t, e) {
            return e.subscribe(new fu(t, this.predicate, this.thisArg))
          }
        }
        class fu extends f {
          constructor(t, e, n) {
            super(t), this.predicate = e, this.thisArg = n, this.count = 0
          }
          _next(t) {
            let e;
            try {
              e = this.predicate.call(this.thisArg, t, this.count++)
            } catch (n) {
              return void this.destination.error(n)
            }
            e && this.destination.next(t)
          }
        }
        class mu {}
        class gu {}
        class vu {
          constructor(t) {
            this.normalizedNames = new Map, this.lazyUpdate = null, t ? this.lazyInit = "string" == typeof t ? () => {
              this.headers = new Map, t.split("\n").forEach(t => {
                const e = t.indexOf(":");
                if (e > 0) {
                  const n = t.slice(0, e),
                    r = n.toLowerCase(),
                    s = t.slice(e + 1).trim();
                  this.maybeSetNormalizedName(n, r), this.headers.has(r) ? this.headers.get(r).push(s) : this.headers.set(r, [s])
                }
              })
            } : () => {
              this.headers = new Map, Object.keys(t).forEach(e => {
                let n = t[e];
                const r = e.toLowerCase();
                "string" == typeof n && (n = [n]), n.length > 0 && (this.headers.set(r, n), this.maybeSetNormalizedName(e, r))
              })
            } : this.headers = new Map
          }
          has(t) {
            return this.init(), this.headers.has(t.toLowerCase())
          }
          get(t) {
            this.init();
            const e = this.headers.get(t.toLowerCase());
            return e && e.length > 0 ? e[0] : null
          }
          keys() {
            return this.init(), Array.from(this.normalizedNames.values())
          }
          getAll(t) {
            return this.init(), this.headers.get(t.toLowerCase()) || null
          }
          append(t, e) {
            return this.clone({
              name: t,
              value: e,
              op: "a"
            })
          }
          set(t, e) {
            return this.clone({
              name: t,
              value: e,
              op: "s"
            })
          }
          delete(t, e) {
            return this.clone({
              name: t,
              value: e,
              op: "d"
            })
          }
          maybeSetNormalizedName(t, e) {
            this.normalizedNames.has(e) || this.normalizedNames.set(e, t)
          }
          init() {
            this.lazyInit && (this.lazyInit instanceof vu ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)), this.lazyUpdate = null))
          }
          copyFrom(t) {
            t.init(), Array.from(t.headers.keys()).forEach(e => {
              this.headers.set(e, t.headers.get(e)), this.normalizedNames.set(e, t.normalizedNames.get(e))
            })
          }
          clone(t) {
            const e = new vu;
            return e.lazyInit = this.lazyInit && this.lazyInit instanceof vu ? this.lazyInit : this, e.lazyUpdate = (this.lazyUpdate || []).concat([t]), e
          }
          applyUpdate(t) {
            const e = t.name.toLowerCase();
            switch (t.op) {
              case "a":
              case "s":
                let n = t.value;
                if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                this.maybeSetNormalizedName(t.name, e);
                const r = ("a" === t.op ? this.headers.get(e) : void 0) || [];
                r.push(...n), this.headers.set(e, r);
                break;
              case "d":
                const s = t.value;
                if (s) {
                  let t = this.headers.get(e);
                  if (!t) return;
                  t = t.filter(t => -1 === s.indexOf(t)), 0 === t.length ? (this.headers.delete(e), this.normalizedNames.delete(e)) : this.headers.set(e, t)
                } else this.headers.delete(e), this.normalizedNames.delete(e)
            }
          }
          forEach(t) {
            this.init(), Array.from(this.normalizedNames.keys()).forEach(e => t(this.normalizedNames.get(e), this.headers.get(e)))
          }
        }
        class yu {
          encodeKey(t) {
            return bu(t)
          }
          encodeValue(t) {
            return bu(t)
          }
          decodeKey(t) {
            return decodeURIComponent(t)
          }
          decodeValue(t) {
            return decodeURIComponent(t)
          }
        }

        function bu(t) {
          return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
        }
        class wu {
          constructor(t = {}) {
            if (this.updates = null, this.cloneFrom = null, this.encoder = t.encoder || new yu, t.fromString) {
              if (t.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
              this.map = function (t, e) {
                const n = new Map;
                return t.length > 0 && t.split("&").forEach(t => {
                  const r = t.indexOf("="),
                    [s, i] = -1 == r ? [e.decodeKey(t), ""] : [e.decodeKey(t.slice(0, r)), e.decodeValue(t.slice(r + 1))],
                    o = n.get(s) || [];
                  o.push(i), n.set(s, o)
                }), n
              }(t.fromString, this.encoder)
            } else t.fromObject ? (this.map = new Map, Object.keys(t.fromObject).forEach(e => {
              const n = t.fromObject[e];
              this.map.set(e, Array.isArray(n) ? n : [n])
            })) : this.map = null
          }
          has(t) {
            return this.init(), this.map.has(t)
          }
          get(t) {
            this.init();
            const e = this.map.get(t);
            return e ? e[0] : null
          }
          getAll(t) {
            return this.init(), this.map.get(t) || null
          }
          keys() {
            return this.init(), Array.from(this.map.keys())
          }
          append(t, e) {
            return this.clone({
              param: t,
              value: e,
              op: "a"
            })
          }
          set(t, e) {
            return this.clone({
              param: t,
              value: e,
              op: "s"
            })
          }
          delete(t, e) {
            return this.clone({
              param: t,
              value: e,
              op: "d"
            })
          }
          toString() {
            return this.init(), this.keys().map(t => {
              const e = this.encoder.encodeKey(t);
              return this.map.get(t).map(t => e + "=" + this.encoder.encodeValue(t)).join("&")
            }).filter(t => "" !== t).join("&")
          }
          clone(t) {
            const e = new wu({
              encoder: this.encoder
            });
            return e.cloneFrom = this.cloneFrom || this, e.updates = (this.updates || []).concat([t]), e
          }
          init() {
            null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))), this.updates.forEach(t => {
              switch (t.op) {
                case "a":
                case "s":
                  const e = ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                  e.push(t.value), this.map.set(t.param, e);
                  break;
                case "d":
                  if (void 0 === t.value) {
                    this.map.delete(t.param);
                    break
                  } {
                    let e = this.map.get(t.param) || [];
                    const n = e.indexOf(t.value); - 1 !== n && e.splice(n, 1), e.length > 0 ? this.map.set(t.param, e) : this.map.delete(t.param)
                  }
              }
            }), this.cloneFrom = this.updates = null)
          }
        }

        function _u(t) {
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
        }

        function Cu(t) {
          return "undefined" != typeof Blob && t instanceof Blob
        }

        function Su(t) {
          return "undefined" != typeof FormData && t instanceof FormData
        }
        class Eu {
          constructor(t, e, n, r) {
            let s;
            if (this.url = e, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = t.toUpperCase(), function (t) {
                switch (t) {
                  case "DELETE":
                  case "GET":
                  case "HEAD":
                  case "OPTIONS":
                  case "JSONP":
                    return !1;
                  default:
                    return !0
                }
              }(this.method) || r ? (this.body = void 0 !== n ? n : null, s = r) : s = n, s && (this.reportProgress = !!s.reportProgress, this.withCredentials = !!s.withCredentials, s.responseType && (this.responseType = s.responseType), s.headers && (this.headers = s.headers), s.params && (this.params = s.params)), this.headers || (this.headers = new vu), this.params) {
              const t = this.params.toString();
              if (0 === t.length) this.urlWithParams = e;
              else {
                const n = e.indexOf("?");
                this.urlWithParams = e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t
              }
            } else this.params = new wu, this.urlWithParams = e
          }
          serializeBody() {
            return null === this.body ? null : _u(this.body) || Cu(this.body) || Su(this.body) || "string" == typeof this.body ? this.body : this.body instanceof wu ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
          }
          detectContentTypeHeader() {
            return null === this.body || Su(this.body) ? null : Cu(this.body) ? this.body.type || null : _u(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof wu ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
          }
          clone(t = {}) {
            const e = t.method || this.method,
              n = t.url || this.url,
              r = t.responseType || this.responseType,
              s = void 0 !== t.body ? t.body : this.body,
              i = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
              o = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress;
            let a = t.headers || this.headers,
              l = t.params || this.params;
            return void 0 !== t.setHeaders && (a = Object.keys(t.setHeaders).reduce((e, n) => e.set(n, t.setHeaders[n]), a)), t.setParams && (l = Object.keys(t.setParams).reduce((e, n) => e.set(n, t.setParams[n]), l)), new Eu(e, n, s, {
              params: l,
              headers: a,
              reportProgress: o,
              responseType: r,
              withCredentials: i
            })
          }
        }
        const xu = function () {
          var t = {
            Sent: 0,
            UploadProgress: 1,
            ResponseHeader: 2,
            DownloadProgress: 3,
            Response: 4,
            User: 5
          };
          return t[t.Sent] = "Sent", t[t.UploadProgress] = "UploadProgress", t[t.ResponseHeader] = "ResponseHeader", t[t.DownloadProgress] = "DownloadProgress", t[t.Response] = "Response", t[t.User] = "User", t
        }();
        class ku {
          constructor(t, e = 200, n = "OK") {
            this.headers = t.headers || new vu, this.status = void 0 !== t.status ? t.status : e, this.statusText = t.statusText || n, this.url = t.url || null, this.ok = this.status >= 200 && this.status < 300
          }
        }
        class Au extends ku {
          constructor(t = {}) {
            super(t), this.type = xu.ResponseHeader
          }
          clone(t = {}) {
            return new Au({
              headers: t.headers || this.headers,
              status: void 0 !== t.status ? t.status : this.status,
              statusText: t.statusText || this.statusText,
              url: t.url || this.url || void 0
            })
          }
        }
        class Tu extends ku {
          constructor(t = {}) {
            super(t), this.type = xu.Response, this.body = void 0 !== t.body ? t.body : null
          }
          clone(t = {}) {
            return new Tu({
              body: void 0 !== t.body ? t.body : this.body,
              headers: t.headers || this.headers,
              status: void 0 !== t.status ? t.status : this.status,
              statusText: t.statusText || this.statusText,
              url: t.url || this.url || void 0
            })
          }
        }
        class Iu extends ku {
          constructor(t) {
            super(t, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${t.url||"(unknown url)"}` : `Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`, this.error = t.error || null
          }
        }

        function Ou(t, e) {
          return {
            body: e,
            headers: t.headers,
            observe: t.observe,
            params: t.params,
            reportProgress: t.reportProgress,
            responseType: t.responseType,
            withCredentials: t.withCredentials
          }
        }
        let Pu = (() => {
          class t {
            constructor(t) {
              this.handler = t
            }
            request(t, e, n = {}) {
              let r;
              if (t instanceof Eu) r = t;
              else {
                let s = void 0;
                s = n.headers instanceof vu ? n.headers : new vu(n.headers);
                let i = void 0;
                n.params && (i = n.params instanceof wu ? n.params : new wu({
                  fromObject: n.params
                })), r = new Eu(t, e, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || "json",
                  withCredentials: n.withCredentials
                })
              }
              const s = uu(r).pipe(hu(t => this.handler.handle(t)));
              if (t instanceof Eu || "events" === n.observe) return s;
              const i = s.pipe(du(t => t instanceof Tu));
              switch (n.observe || "body") {
                case "body":
                  switch (r.responseType) {
                    case "arraybuffer":
                      return i.pipe(V(t => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                        return t.body
                      }));
                    case "blob":
                      return i.pipe(V(t => {
                        if (null !== t.body && !(t.body instanceof Blob)) throw new Error("Response is not a Blob.");
                        return t.body
                      }));
                    case "text":
                      return i.pipe(V(t => {
                        if (null !== t.body && "string" != typeof t.body) throw new Error("Response is not a string.");
                        return t.body
                      }));
                    case "json":
                    default:
                      return i.pipe(V(t => t.body))
                  }
                  case "response":
                    return i;
                  default:
                    throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)
              }
            }
            delete(t, e = {}) {
              return this.request("DELETE", t, e)
            }
            get(t, e = {}) {
              return this.request("GET", t, e)
            }
            head(t, e = {}) {
              return this.request("HEAD", t, e)
            }
            jsonp(t, e) {
              return this.request("JSONP", t, {
                params: (new wu).append(e, "JSONP_CALLBACK"),
                observe: "body",
                responseType: "json"
              })
            }
            options(t, e = {}) {
              return this.request("OPTIONS", t, e)
            }
            patch(t, e, n = {}) {
              return this.request("PATCH", t, Ou(n, e))
            }
            post(t, e, n = {}) {
              return this.request("POST", t, Ou(n, e))
            }
            put(t, e, n = {}) {
              return this.request("PUT", t, Ou(n, e))
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Zt(mu))
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        class Fu {
          constructor(t, e) {
            this.next = t, this.interceptor = e
          }
          handle(t) {
            return this.interceptor.intercept(t, this.next)
          }
        }
        const Nu = new Lt("HTTP_INTERCEPTORS");
        let Ru = (() => {
          class t {
            intercept(t, e) {
              return e.handle(t)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = ut({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const Mu = /^\)\]\}',?\n/;
        class Du {}
        let Vu = (() => {
            class t {
              constructor() {}
              build() {
                return new XMLHttpRequest
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275prov = ut({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          Lu = (() => {
            class t {
              constructor(t) {
                this.xhrFactory = t
              }
              handle(t) {
                if ("JSONP" === t.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                return new w(e => {
                  const n = this.xhrFactory.build();
                  if (n.open(t.method, t.urlWithParams), t.withCredentials && (n.withCredentials = !0), t.headers.forEach((t, e) => n.setRequestHeader(t, e.join(","))), t.headers.has("Accept") || n.setRequestHeader("Accept", "application/json, text/plain, */*"), !t.headers.has("Content-Type")) {
                    const e = t.detectContentTypeHeader();
                    null !== e && n.setRequestHeader("Content-Type", e)
                  }
                  if (t.responseType) {
                    const e = t.responseType.toLowerCase();
                    n.responseType = "json" !== e ? e : "text"
                  }
                  const r = t.serializeBody();
                  let s = null;
                  const i = () => {
                      if (null !== s) return s;
                      const e = 1223 === n.status ? 204 : n.status,
                        r = n.statusText || "OK",
                        i = new vu(n.getAllResponseHeaders()),
                        o = function (t) {
                          return "responseURL" in t && t.responseURL ? t.responseURL : /^X-Request-URL:/m.test(t.getAllResponseHeaders()) ? t.getResponseHeader("X-Request-URL") : null
                        }(n) || t.url;
                      return s = new Au({
                        headers: i,
                        status: e,
                        statusText: r,
                        url: o
                      }), s
                    },
                    o = () => {
                      let {
                        headers: r,
                        status: s,
                        statusText: o,
                        url: a
                      } = i(), l = null;
                      204 !== s && (l = void 0 === n.response ? n.responseText : n.response), 0 === s && (s = l ? 200 : 0);
                      let c = s >= 200 && s < 300;
                      if ("json" === t.responseType && "string" == typeof l) {
                        const t = l;
                        l = l.replace(Mu, "");
                        try {
                          l = "" !== l ? JSON.parse(l) : null
                        } catch (u) {
                          l = t, c && (c = !1, l = {
                            error: u,
                            text: l
                          })
                        }
                      }
                      c ? (e.next(new Tu({
                        body: l,
                        headers: r,
                        status: s,
                        statusText: o,
                        url: a || void 0
                      })), e.complete()) : e.error(new Iu({
                        error: l,
                        headers: r,
                        status: s,
                        statusText: o,
                        url: a || void 0
                      }))
                    },
                    a = t => {
                      const {
                        url: r
                      } = i(), s = new Iu({
                        error: t,
                        status: n.status || 0,
                        statusText: n.statusText || "Unknown Error",
                        url: r || void 0
                      });
                      e.error(s)
                    };
                  let l = !1;
                  const c = r => {
                      l || (e.next(i()), l = !0);
                      let s = {
                        type: xu.DownloadProgress,
                        loaded: r.loaded
                      };
                      r.lengthComputable && (s.total = r.total), "text" === t.responseType && n.responseText && (s.partialText = n.responseText), e.next(s)
                    },
                    u = t => {
                      let n = {
                        type: xu.UploadProgress,
                        loaded: t.loaded
                      };
                      t.lengthComputable && (n.total = t.total), e.next(n)
                    };
                  return n.addEventListener("load", o), n.addEventListener("error", a), t.reportProgress && (n.addEventListener("progress", c), null !== r && n.upload && n.upload.addEventListener("progress", u)), n.send(r), e.next({
                    type: xu.Sent
                  }), () => {
                    n.removeEventListener("error", a), n.removeEventListener("load", o), t.reportProgress && (n.removeEventListener("progress", c), null !== r && n.upload && n.upload.removeEventListener("progress", u)), n.abort()
                  }
                })
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(Du))
            }, t.\u0275prov = ut({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        const Uu = new Lt("XSRF_COOKIE_NAME"),
          ju = new Lt("XSRF_HEADER_NAME");
        class Hu {}
        let $u = (() => {
            class t {
              constructor(t, e, n) {
                this.doc = t, this.platform = e, this.cookieName = n, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
              }
              getToken() {
                if ("server" === this.platform) return null;
                const t = this.doc.cookie || "";
                return t !== this.lastCookieString && (this.parseCount++, this.lastToken = Sc(t, this.cookieName), this.lastCookieString = t), this.lastToken
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(Ol), Zt(Da), Zt(Uu))
            }, t.\u0275prov = ut({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          qu = (() => {
            class t {
              constructor(t, e) {
                this.tokenService = t, this.headerName = e
              }
              intercept(t, e) {
                const n = t.url.toLowerCase();
                if ("GET" === t.method || "HEAD" === t.method || n.startsWith("http://") || n.startsWith("https://")) return e.handle(t);
                const r = this.tokenService.getToken();
                return null === r || t.headers.has(this.headerName) || (t = t.clone({
                  headers: t.headers.set(this.headerName, r)
                })), e.handle(t)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(Hu), Zt(ju))
            }, t.\u0275prov = ut({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          zu = (() => {
            class t {
              constructor(t, e) {
                this.backend = t, this.injector = e, this.chain = null
              }
              handle(t) {
                if (null === this.chain) {
                  const t = this.injector.get(Nu, []);
                  this.chain = t.reduceRight((t, e) => new Fu(t, e), this.backend)
                }
                return this.chain.handle(t)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Zt(gu), Zt(ci))
            }, t.\u0275prov = ut({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          Gu = (() => {
            class t {
              static disable() {
                return {
                  ngModule: t,
                  providers: [{
                    provide: qu,
                    useClass: Ru
                  }]
                }
              }
              static withOptions(e = {}) {
                return {
                  ngModule: t,
                  providers: [e.cookieName ? {
                    provide: Uu,
                    useValue: e.cookieName
                  } : [], e.headerName ? {
                    provide: ju,
                    useValue: e.headerName
                  } : []]
                }
              }
            }
            return t.\u0275mod = me({
              type: t
            }), t.\u0275inj = ht({
              factory: function (e) {
                return new(e || t)
              },
              providers: [qu, {
                provide: Nu,
                useExisting: qu,
                multi: !0
              }, {
                provide: Hu,
                useClass: $u
              }, {
                provide: Uu,
                useValue: "XSRF-TOKEN"
              }, {
                provide: ju,
                useValue: "X-XSRF-TOKEN"
              }]
            }), t
          })(),
          Bu = (() => {
            class t {}
            return t.\u0275mod = me({
              type: t
            }), t.\u0275inj = ht({
              factory: function (e) {
                return new(e || t)
              },
              providers: [Pu, {
                provide: mu,
                useClass: zu
              }, Lu, {
                provide: gu,
                useExisting: Lu
              }, Vu, {
                provide: Du,
                useExisting: Vu
              }],
              imports: [
                [Gu.withOptions({
                  cookieName: "XSRF-TOKEN",
                  headerName: "X-XSRF-TOKEN"
                })]
              ]
            }), t
          })();
        class Wu extends x {
          constructor(t) {
            super(), this._value = t
          }
          get value() {
            return this.getValue()
          }
          _subscribe(t) {
            const e = super._subscribe(t);
            return e && !e.closed && t.next(this._value), e
          }
          getValue() {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new C;
            return this._value
          }
          next(t) {
            super.next(this._value = t)
          }
        }
        const Zu = (() => {
            function t() {
              return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
            }
            return t.prototype = Object.create(Error.prototype), t
          })(),
          Qu = {};
        class Ju {
          constructor(t) {
            this.resultSelector = t
          }
          call(t, e) {
            return e.subscribe(new Yu(t, this.resultSelector))
          }
        }
        class Yu extends D {
          constructor(t, e) {
            super(t), this.resultSelector = e, this.active = 0, this.values = [], this.observables = []
          }
          _next(t) {
            this.values.push(Qu), this.observables.push(t)
          }
          _complete() {
            const t = this.observables,
              e = t.length;
            if (0 === e) this.destination.complete();
            else {
              this.active = e, this.toRespond = e;
              for (let n = 0; n < e; n++) {
                const e = t[n];
                this.add(M(this, e, e, n))
              }
            }
          }
          notifyComplete(t) {
            0 == (this.active -= 1) && this.destination.complete()
          }
          notifyNext(t, e, n, r, s) {
            const i = this.values,
              o = this.toRespond ? i[n] === Qu ? --this.toRespond : this.toRespond : 0;
            i[n] = e, 0 === o && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()))
          }
          _tryResultSelector(t) {
            let e;
            try {
              e = this.resultSelector.apply(this, t)
            } catch (n) {
              return void this.destination.error(n)
            }
            this.destination.next(e)
          }
        }
        const Ku = new w(t => t.complete());

        function Xu(t) {
          return t ? function (t) {
            return new w(e => t.schedule(() => e.complete()))
          }(t) : Ku
        }

        function th(t) {
          return new w(e => {
            let n;
            try {
              n = t()
            } catch (r) {
              return void e.error(r)
            }
            return (n ? H(n) : Xu()).subscribe(e)
          })
        }

        function eh() {
          return B(1)
        }
        const nh = (() => {
          function t() {
            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
          }
          return t.prototype = Object.create(Error.prototype), t
        })();

        function rh(t) {
          return function (e) {
            return 0 === t ? Xu() : e.lift(new sh(t))
          }
        }
        class sh {
          constructor(t) {
            if (this.total = t, this.total < 0) throw new nh
          }
          call(t, e) {
            return e.subscribe(new ih(t, this.total))
          }
        }
        class ih extends f {
          constructor(t, e) {
            super(t), this.total = e, this.ring = new Array, this.count = 0
          }
          _next(t) {
            const e = this.ring,
              n = this.total,
              r = this.count++;
            e.length < n ? e.push(t) : e[r % n] = t
          }
          _complete() {
            const t = this.destination;
            let e = this.count;
            if (e > 0) {
              const n = this.count >= this.total ? this.total : this.count,
                r = this.ring;
              for (let s = 0; s < n; s++) {
                const s = e++ % n;
                t.next(r[s])
              }
            }
            t.complete()
          }
        }

        function oh(t = ch) {
          return e => e.lift(new ah(t))
        }
        class ah {
          constructor(t) {
            this.errorFactory = t
          }
          call(t, e) {
            return e.subscribe(new lh(t, this.errorFactory))
          }
        }
        class lh extends f {
          constructor(t, e) {
            super(t), this.errorFactory = e, this.hasValue = !1
          }
          _next(t) {
            this.hasValue = !0, this.destination.next(t)
          }
          _complete() {
            if (this.hasValue) return this.destination.complete(); {
              let e;
              try {
                e = this.errorFactory()
              } catch (t) {
                e = t
              }
              this.destination.error(e)
            }
          }
        }

        function ch() {
          return new Zu
        }

        function uh(t = null) {
          return e => e.lift(new hh(t))
        }
        class hh {
          constructor(t) {
            this.defaultValue = t
          }
          call(t, e) {
            return e.subscribe(new dh(t, this.defaultValue))
          }
        }
        class dh extends f {
          constructor(t, e) {
            super(t), this.defaultValue = e, this.isEmpty = !0
          }
          _next(t) {
            this.isEmpty = !1, this.destination.next(t)
          }
          _complete() {
            this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
          }
        }

        function ph(t, e) {
          const n = arguments.length >= 2;
          return r => r.pipe(t ? du((e, n) => t(e, n, r)) : G, rh(1), n ? uh(e) : oh(() => new Zu))
        }

        function fh(t) {
          return function (e) {
            const n = new mh(t),
              r = e.lift(n);
            return n.caught = r
          }
        }
        class mh {
          constructor(t) {
            this.selector = t
          }
          call(t, e) {
            return e.subscribe(new gh(t, this.selector, this.caught))
          }
        }
        class gh extends D {
          constructor(t, e, n) {
            super(t), this.selector = e, this.caught = n
          }
          error(t) {
            if (!this.isStopped) {
              let n;
              try {
                n = this.selector(t, this.caught)
              } catch (e) {
                return void super.error(e)
              }
              this._unsubscribeAndRecycle();
              const r = new T(this, void 0, void 0);
              this.add(r);
              const s = M(this, n, void 0, void 0, r);
              s !== r && this.add(s)
            }
          }
        }

        function vh(t) {
          return e => 0 === t ? Xu() : e.lift(new yh(t))
        }
        class yh {
          constructor(t) {
            if (this.total = t, this.total < 0) throw new nh
          }
          call(t, e) {
            return e.subscribe(new bh(t, this.total))
          }
        }
        class bh extends f {
          constructor(t, e) {
            super(t), this.total = e, this.count = 0
          }
          _next(t) {
            const e = this.total,
              n = ++this.count;
            n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
          }
        }

        function wh(t, e) {
          const n = arguments.length >= 2;
          return r => r.pipe(t ? du((e, n) => t(e, n, r)) : G, vh(1), n ? uh(e) : oh(() => new Zu))
        }
        class _h {
          constructor(t, e, n) {
            this.predicate = t, this.thisArg = e, this.source = n
          }
          call(t, e) {
            return e.subscribe(new Ch(t, this.predicate, this.thisArg, this.source))
          }
        }
        class Ch extends f {
          constructor(t, e, n, r) {
            super(t), this.predicate = e, this.thisArg = n, this.source = r, this.index = 0, this.thisArg = n || this
          }
          notifyComplete(t) {
            this.destination.next(t), this.destination.complete()
          }
          _next(t) {
            let e = !1;
            try {
              e = this.predicate.call(this.thisArg, t, this.index++, this.source)
            } catch (n) {
              return void this.destination.error(n)
            }
            e || this.notifyComplete(!1)
          }
          _complete() {
            this.notifyComplete(!0)
          }
        }

        function Sh(t, e) {
          return "function" == typeof e ? n => n.pipe(Sh((n, r) => H(t(n, r)).pipe(V((t, s) => e(n, t, r, s))))) : e => e.lift(new Eh(t))
        }
        class Eh {
          constructor(t) {
            this.project = t
          }
          call(t, e) {
            return e.subscribe(new xh(t, this.project))
          }
        }
        class xh extends D {
          constructor(t, e) {
            super(t), this.project = e, this.index = 0
          }
          _next(t) {
            let e;
            const n = this.index++;
            try {
              e = this.project(t, n)
            } catch (r) {
              return void this.destination.error(r)
            }
            this._innerSub(e, t, n)
          }
          _innerSub(t, e, n) {
            const r = this.innerSubscription;
            r && r.unsubscribe();
            const s = new T(this, e, n),
              i = this.destination;
            i.add(s), this.innerSubscription = M(this, t, void 0, void 0, s), this.innerSubscription !== s && i.add(this.innerSubscription)
          }
          _complete() {
            const {
              innerSubscription: t
            } = this;
            t && !t.closed || super._complete(), this.unsubscribe()
          }
          _unsubscribe() {
            this.innerSubscription = null
          }
          notifyComplete(t) {
            this.destination.remove(t), this.innerSubscription = null, this.isStopped && super._complete()
          }
          notifyNext(t, e, n, r, s) {
            this.destination.next(e)
          }
        }

        function kh(...t) {
          return eh()(uu(...t))
        }

        function Ah(t, e) {
          let n = !1;
          return arguments.length >= 2 && (n = !0),
            function (r) {
              return r.lift(new Th(t, e, n))
            }
        }
        class Th {
          constructor(t, e, n = !1) {
            this.accumulator = t, this.seed = e, this.hasSeed = n
          }
          call(t, e) {
            return e.subscribe(new Ih(t, this.accumulator, this.seed, this.hasSeed))
          }
        }
        class Ih extends f {
          constructor(t, e, n, r) {
            super(t), this.accumulator = e, this._seed = n, this.hasSeed = r, this.index = 0
          }
          get seed() {
            return this._seed
          }
          set seed(t) {
            this.hasSeed = !0, this._seed = t
          }
          _next(t) {
            if (this.hasSeed) return this._tryNext(t);
            this.seed = t, this.destination.next(t)
          }
          _tryNext(t) {
            const e = this.index++;
            let n;
            try {
              n = this.accumulator(this.seed, t, e)
            } catch (r) {
              this.destination.error(r)
            }
            this.seed = n, this.destination.next(n)
          }
        }

        function Oh(t, e, n) {
          return function (r) {
            return r.lift(new Ph(t, e, n))
          }
        }
        class Ph {
          constructor(t, e, n) {
            this.nextOrObserver = t, this.error = e, this.complete = n
          }
          call(t, e) {
            return e.subscribe(new Fh(t, this.nextOrObserver, this.error, this.complete))
          }
        }
        class Fh extends f {
          constructor(t, e, n, s) {
            super(t), this._tapNext = v, this._tapError = v, this._tapComplete = v, this._tapError = n || v, this._tapComplete = s || v, r(e) ? (this._context = this, this._tapNext = e) : e && (this._context = e, this._tapNext = e.next || v, this._tapError = e.error || v, this._tapComplete = e.complete || v)
          }
          _next(t) {
            try {
              this._tapNext.call(this._context, t)
            } catch (e) {
              return void this.destination.error(e)
            }
            this.destination.next(t)
          }
          _error(t) {
            try {
              this._tapError.call(this._context, t)
            } catch (t) {
              return void this.destination.error(t)
            }
            this.destination.error(t)
          }
          _complete() {
            try {
              this._tapComplete.call(this._context)
            } catch (t) {
              return void this.destination.error(t)
            }
            return this.destination.complete()
          }
        }
        class Nh {
          constructor(t) {
            this.callback = t
          }
          call(t, e) {
            return e.subscribe(new Rh(t, this.callback))
          }
        }
        class Rh extends f {
          constructor(t, e) {
            super(t), this.add(new h(e))
          }
        }
        class Mh {
          constructor(t, e) {
            this.id = t, this.url = e
          }
        }
        class Dh extends Mh {
          constructor(t, e, n = "imperative", r = null) {
            super(t, e), this.navigationTrigger = n, this.restoredState = r
          }
          toString() {
            return `NavigationStart(id: ${this.id}, url: '${this.url}')`
          }
        }
        class Vh extends Mh {
          constructor(t, e, n) {
            super(t, e), this.urlAfterRedirects = n
          }
          toString() {
            return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
          }
        }
        class Lh extends Mh {
          constructor(t, e, n) {
            super(t, e), this.reason = n
          }
          toString() {
            return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
          }
        }
        class Uh extends Mh {
          constructor(t, e, n) {
            super(t, e), this.error = n
          }
          toString() {
            return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
          }
        }
        class jh extends Mh {
          constructor(t, e, n, r) {
            super(t, e), this.urlAfterRedirects = n, this.state = r
          }
          toString() {
            return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class Hh extends Mh {
          constructor(t, e, n, r) {
            super(t, e), this.urlAfterRedirects = n, this.state = r
          }
          toString() {
            return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class $h extends Mh {
          constructor(t, e, n, r, s) {
            super(t, e), this.urlAfterRedirects = n, this.state = r, this.shouldActivate = s
          }
          toString() {
            return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
          }
        }
        class qh extends Mh {
          constructor(t, e, n, r) {
            super(t, e), this.urlAfterRedirects = n, this.state = r
          }
          toString() {
            return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class zh extends Mh {
          constructor(t, e, n, r) {
            super(t, e), this.urlAfterRedirects = n, this.state = r
          }
          toString() {
            return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class Gh {
          constructor(t) {
            this.route = t
          }
          toString() {
            return `RouteConfigLoadStart(path: ${this.route.path})`
          }
        }
        class Bh {
          constructor(t) {
            this.route = t
          }
          toString() {
            return `RouteConfigLoadEnd(path: ${this.route.path})`
          }
        }
        class Wh {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class Zh {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class Qh {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class Jh {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class Yh {
          constructor(t, e, n) {
            this.routerEvent = t, this.position = e, this.anchor = n
          }
          toString() {
            return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`
          }
        }
        let Kh = (() => {
          class t {}
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275cmp = he({
            type: t,
            selectors: [
              ["ng-component"]
            ],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && Ni(0, "router-outlet")
            },
            directives: function () {
              return [rf]
            },
            encapsulation: 2
          }), t
        })();
        class Xh {
          constructor(t) {
            this.params = t || {}
          }
          has(t) {
            return this.params.hasOwnProperty(t)
          }
          get(t) {
            if (this.has(t)) {
              const e = this.params[t];
              return Array.isArray(e) ? e[0] : e
            }
            return null
          }
          getAll(t) {
            if (this.has(t)) {
              const e = this.params[t];
              return Array.isArray(e) ? e : [e]
            }
            return []
          }
          get keys() {
            return Object.keys(this.params)
          }
        }

        function td(t) {
          return new Xh(t)
        }

        function ed(t) {
          const e = Error("NavigationCancelingError: " + t);
          return e.ngNavigationCancelingError = !0, e
        }

        function nd(t, e, n) {
          const r = n.path.split("/");
          if (r.length > t.length) return null;
          if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
          const s = {};
          for (let i = 0; i < r.length; i++) {
            const e = r[i],
              n = t[i];
            if (e.startsWith(":")) s[e.substring(1)] = n;
            else if (e !== n.path) return null
          }
          return {
            consumed: t.slice(0, r.length),
            posParams: s
          }
        }
        class rd {
          constructor(t, e) {
            this.routes = t, this.module = e
          }
        }

        function sd(t, e = "") {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            id(r, od(e, r))
          }
        }

        function id(t, e) {
          if (!t) throw new Error(`\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);
          if (Array.isArray(t)) throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`);
          if (!t.component && !t.children && !t.loadChildren && t.outlet && "primary" !== t.outlet) throw new Error(`Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`);
          if (t.redirectTo && t.children) throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`);
          if (t.redirectTo && t.loadChildren) throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`);
          if (t.children && t.loadChildren) throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`);
          if (t.redirectTo && t.component) throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`);
          if (t.path && t.matcher) throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`);
          if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error(`Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`);
          if (void 0 === t.path && void 0 === t.matcher) throw new Error(`Invalid configuration of route '${e}': routes must have either a path or a matcher specified`);
          if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`);
          if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error(`Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);
          if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);
          t.children && sd(t.children, e)
        }

        function od(t, e) {
          return e ? t || e.path ? t && !e.path ? `${t}/` : !t && e.path ? e.path : `${t}/${e.path}` : "" : t
        }

        function ad(t) {
          const e = t.children && t.children.map(ad),
            n = e ? Object.assign(Object.assign({}, t), {
              children: e
            }) : Object.assign({}, t);
          return !n.component && (e || n.loadChildren) && n.outlet && "primary" !== n.outlet && (n.component = Kh), n
        }

        function ld(t, e) {
          const n = Object.keys(t),
            r = Object.keys(e);
          if (!n || !r || n.length != r.length) return !1;
          let s;
          for (let i = 0; i < n.length; i++)
            if (s = n[i], !cd(t[s], e[s])) return !1;
          return !0
        }

        function cd(t, e) {
          return Array.isArray(t) && Array.isArray(e) ? t.length == e.length && t.every(t => e.indexOf(t) > -1) : t === e
        }

        function ud(t) {
          return Array.prototype.concat.apply([], t)
        }

        function hd(t) {
          return t.length > 0 ? t[t.length - 1] : null
        }

        function dd(t, e) {
          for (const n in t) t.hasOwnProperty(n) && e(t[n], n)
        }

        function pd(t) {
          return Di(t) ? t : Mi(t) ? H(Promise.resolve(t)) : uu(t)
        }

        function fd(t, e, n) {
          return n ? function (t, e) {
            return ld(t, e)
          }(t.queryParams, e.queryParams) && function t(e, n) {
            if (!yd(e.segments, n.segments)) return !1;
            if (e.numberOfChildren !== n.numberOfChildren) return !1;
            for (const r in n.children) {
              if (!e.children[r]) return !1;
              if (!t(e.children[r], n.children[r])) return !1
            }
            return !0
          }(t.root, e.root) : function (t, e) {
            return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => cd(t[n], e[n]))
          }(t.queryParams, e.queryParams) && function t(e, n) {
            return function e(n, r, s) {
              if (n.segments.length > s.length) return !!yd(n.segments.slice(0, s.length), s) && !r.hasChildren();
              if (n.segments.length === s.length) {
                if (!yd(n.segments, s)) return !1;
                for (const e in r.children) {
                  if (!n.children[e]) return !1;
                  if (!t(n.children[e], r.children[e])) return !1
                }
                return !0
              } {
                const t = s.slice(0, n.segments.length),
                  i = s.slice(n.segments.length);
                return !!yd(n.segments, t) && !!n.children.primary && e(n.children.primary, r, i)
              }
            }(e, n, n.segments)
          }(t.root, e.root)
        }
        class md {
          constructor(t, e, n) {
            this.root = t, this.queryParams = e, this.fragment = n
          }
          get queryParamMap() {
            return this._queryParamMap || (this._queryParamMap = td(this.queryParams)), this._queryParamMap
          }
          toString() {
            return Cd.serialize(this)
          }
        }
        class gd {
          constructor(t, e) {
            this.segments = t, this.children = e, this.parent = null, dd(e, (t, e) => t.parent = this)
          }
          hasChildren() {
            return this.numberOfChildren > 0
          }
          get numberOfChildren() {
            return Object.keys(this.children).length
          }
          toString() {
            return Sd(this)
          }
        }
        class vd {
          constructor(t, e) {
            this.path = t, this.parameters = e
          }
          get parameterMap() {
            return this._parameterMap || (this._parameterMap = td(this.parameters)), this._parameterMap
          }
          toString() {
            return Id(this)
          }
        }

        function yd(t, e) {
          return t.length === e.length && t.every((t, n) => t.path === e[n].path)
        }

        function bd(t, e) {
          let n = [];
          return dd(t.children, (t, r) => {
            "primary" === r && (n = n.concat(e(t, r)))
          }), dd(t.children, (t, r) => {
            "primary" !== r && (n = n.concat(e(t, r)))
          }), n
        }
        class wd {}
        class _d {
          parse(t) {
            const e = new Rd(t);
            return new md(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
          }
          serialize(t) {
            var e;
            return `${`/${function t(e,n){if(!e.hasChildren())return Sd(e);if(n){const n=e.children.primary?t(e.children.primary,!1):"",r=[];return dd(e.children,(e,n)=>{"primary"!==n&&r.push(`${n}:${t(e,!1)}`)}),r.length>0?`${n}(${r.join("//")})`: n
          } {
            const n = bd(e, (n, r) => "primary" === r ? [t(e.children.primary, !1)] : [`${r}:${t(n,!1)}`]);
            return `${Sd(e)}/(${n.join("//")})`
          }
        }(t.root, !0)
      }
      `}${function(t){const e=Object.keys(t).map(e=>{const n=t[e];return Array.isArray(n)?n.map(t=>`${xd(e)}=${xd(t)}`).join("&"):`${xd(e)}=${xd(n)}`});return e.length?` ? $ {
        e.join("&")
      }
      `:""}(t.queryParams)}${"string"==typeof t.fragment?`#${e=t.fragment,encodeURI(e)}`:""}`
    }
  }
  const Cd = new _d;

  function Sd(t) {
    return t.segments.map(t => Id(t)).join("/")
  }

  function Ed(t) {
    return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
  }

  function xd(t) {
    return Ed(t).replace(/%3B/gi, ";")
  }

  function kd(t) {
    return Ed(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
  }

  function Ad(t) {
    return decodeURIComponent(t)
  }

  function Td(t) {
    return Ad(t.replace(/\+/g, "%20"))
  }

  function Id(t) {
    return `${kd(t.path)}${e=t.parameters,Object.keys(e).map(t=>`;${kd(t)}=${kd(e[t])}`).join("")}`;
    var e
  }
  const Od = /^[^\/()?;=#]+/;

  function Pd(t) {
    const e = t.match(Od);
    return e ? e[0] : ""
  }
  const Fd = /^[^=?&#]+/, Nd = /^[^?&#]+/; class Rd {
    constructor(t) {
      this.url = t, this.remaining = t
    }
    parseRootSegment() {
      return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new gd([], {}) : new gd([], this.parseChildren())
    }
    parseQueryParams() {
      const t = {};
      if (this.consumeOptional("?"))
        do {
          this.parseQueryParam(t)
        } while (this.consumeOptional("&"));
      return t
    }
    parseFragment() {
      return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
    }
    parseChildren() {
      if ("" === this.remaining) return {};
      this.consumeOptional("/");
      const t = [];
      for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
      let e = {};
      this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
      let n = {};
      return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new gd(t, e)), n
    }
    parseSegment() {
      const t = Pd(this.remaining);
      if ("" === t && this.peekStartsWith(";")) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
      return this.capture(t), new vd(Ad(t), this.parseMatrixParams())
    }
    parseMatrixParams() {
      const t = {};
      for (; this.consumeOptional(";");) this.parseParam(t);
      return t
    }
    parseParam(t) {
      const e = Pd(this.remaining);
      if (!e) return;
      this.capture(e);
      let n = "";
      if (this.consumeOptional("=")) {
        const t = Pd(this.remaining);
        t && (n = t, this.capture(n))
      }
      t[Ad(e)] = Ad(n)
    }
    parseQueryParam(t) {
      const e = function (t) {
        const e = t.match(Fd);
        return e ? e[0] : ""
      }(this.remaining);
      if (!e) return;
      this.capture(e);
      let n = "";
      if (this.consumeOptional("=")) {
        const t = function (t) {
          const e = t.match(Nd);
          return e ? e[0] : ""
        }(this.remaining);
        t && (n = t, this.capture(n))
      }
      const r = Td(e),
        s = Td(n);
      if (t.hasOwnProperty(r)) {
        let e = t[r];
        Array.isArray(e) || (e = [e], t[r] = e), e.push(s)
      } else t[r] = s
    }
    parseParens(t) {
      const e = {};
      for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        const n = Pd(this.remaining),
          r = this.remaining[n.length];
        if ("/" !== r && ")" !== r && ";" !== r) throw new Error(`Cannot parse url '${this.url}'`);
        let s = void 0;
        n.indexOf(":") > -1 ? (s = n.substr(0, n.indexOf(":")), this.capture(s), this.capture(":")) : t && (s = "primary");
        const i = this.parseChildren();
        e[s] = 1 === Object.keys(i).length ? i.primary : new gd([], i), this.consumeOptional("//")
      }
      return e
    }
    peekStartsWith(t) {
      return this.remaining.startsWith(t)
    }
    consumeOptional(t) {
      return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
    }
    capture(t) {
      if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`)
    }
  }
  class Md {
    constructor(t) {
      this._root = t
    }
    get root() {
      return this._root.value
    }
    parent(t) {
      const e = this.pathFromRoot(t);
      return e.length > 1 ? e[e.length - 2] : null
    }
    children(t) {
      const e = Dd(t, this._root);
      return e ? e.children.map(t => t.value) : []
    }
    firstChild(t) {
      const e = Dd(t, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null
    }
    siblings(t) {
      const e = Vd(t, this._root);
      return e.length < 2 ? [] : e[e.length - 2].children.map(t => t.value).filter(e => e !== t)
    }
    pathFromRoot(t) {
      return Vd(t, this._root).map(t => t.value)
    }
  }

  function Dd(t, e) {
    if (t === e.value) return e;
    for (const n of e.children) {
      const e = Dd(t, n);
      if (e) return e
    }
    return null
  }

  function Vd(t, e) {
    if (t === e.value) return [e];
    for (const n of e.children) {
      const r = Vd(t, n);
      if (r.length) return r.unshift(e), r
    }
    return []
  }
  class Ld {
    constructor(t, e) {
      this.value = t, this.children = e
    }
    toString() {
      return `TreeNode(${this.value})`
    }
  }

  function Ud(t) {
    const e = {};
    return t && t.children.forEach(t => e[t.value.outlet] = t), e
  }
  class jd extends Md {
    constructor(t, e) {
      super(t), this.snapshot = e, Bd(this, t)
    }
    toString() {
      return this.snapshot.toString()
    }
  }

  function Hd(t, e) {
    const n = function (t, e) {
        const n = new zd([], {}, {}, "", {}, "primary", e, null, t.root, -1, {});
        return new Gd("", new Ld(n, []))
      }(t, e),
      r = new Wu([new vd("", {})]),
      s = new Wu({}),
      i = new Wu({}),
      o = new Wu({}),
      a = new Wu(""),
      l = new $d(r, s, o, a, i, "primary", e, n.root);
    return l.snapshot = n.root, new jd(new Ld(l, []), n)
  }
  class $d {
    constructor(t, e, n, r, s, i, o, a) {
      this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = s, this.outlet = i, this.component = o, this._futureSnapshot = a
    }
    get routeConfig() {
      return this._futureSnapshot.routeConfig
    }
    get root() {
      return this._routerState.root
    }
    get parent() {
      return this._routerState.parent(this)
    }
    get firstChild() {
      return this._routerState.firstChild(this)
    }
    get children() {
      return this._routerState.children(this)
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
      return this._paramMap || (this._paramMap = this.params.pipe(V(t => td(t)))), this._paramMap
    }
    get queryParamMap() {
      return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(V(t => td(t)))), this._queryParamMap
    }
    toString() {
      return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
    }
  }

  function qd(t, e = "emptyOnly") {
    const n = t.pathFromRoot;
    let r = 0;
    if ("always" !== e)
      for (r = n.length - 1; r >= 1;) {
        const t = n[r],
          e = n[r - 1];
        if (t.routeConfig && "" === t.routeConfig.path) r--;
        else {
          if (e.component) break;
          r--
        }
      }
    return function (t) {
      return t.reduce((t, e) => ({
        params: Object.assign(Object.assign({}, t.params), e.params),
        data: Object.assign(Object.assign({}, t.data), e.data),
        resolve: Object.assign(Object.assign({}, t.resolve), e._resolvedData)
      }), {
        params: {},
        data: {},
        resolve: {}
      })
    }(n.slice(r))
  }
  class zd {
    constructor(t, e, n, r, s, i, o, a, l, c, u) {
      this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = s, this.outlet = i, this.component = o, this.routeConfig = a, this._urlSegment = l, this._lastPathIndex = c, this._resolve = u
    }
    get root() {
      return this._routerState.root
    }
    get parent() {
      return this._routerState.parent(this)
    }
    get firstChild() {
      return this._routerState.firstChild(this)
    }
    get children() {
      return this._routerState.children(this)
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
      return this._paramMap || (this._paramMap = td(this.params)), this._paramMap
    }
    get queryParamMap() {
      return this._queryParamMap || (this._queryParamMap = td(this.queryParams)), this._queryParamMap
    }
    toString() {
      return `Route(url:'${this.url.map(t=>t.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`
    }
  }
  class Gd extends Md {
    constructor(t, e) {
      super(e), this.url = t, Bd(this, e)
    }
    toString() {
      return Wd(this._root)
    }
  }

  function Bd(t, e) {
    e.value._routerState = t, e.children.forEach(e => Bd(t, e))
  }

  function Wd(t) {
    const e = t.children.length > 0 ? ` { ${t.children.map(Wd).join(", ")} } ` : "";
    return `${t.value}${e}`
  }

  function Zd(t) {
    if (t.snapshot) {
      const e = t.snapshot,
        n = t._futureSnapshot;
      t.snapshot = n, ld(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), ld(e.params, n.params) || t.params.next(n.params),
        function (t, e) {
          if (t.length !== e.length) return !1;
          for (let n = 0; n < t.length; ++n)
            if (!ld(t[n], e[n])) return !1;
          return !0
        }(e.url, n.url) || t.url.next(n.url), ld(e.data, n.data) || t.data.next(n.data)
    } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
  }

  function Qd(t, e) {
    var n, r;
    return ld(t.params, e.params) && yd(n = t.url, r = e.url) && n.every((t, e) => ld(t.parameters, r[e].parameters)) && !(!t.parent != !e.parent) && (!t.parent || Qd(t.parent, e.parent))
  }

  function Jd(t) {
    return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
  }

  function Yd(t, e, n, r, s) {
    let i = {};
    return r && dd(r, (t, e) => {
      i[e] = Array.isArray(t) ? t.map(t => `${t}`) : `${t}`
    }), new md(n.root === t ? e : function t(e, n, r) {
      const s = {};
      return dd(e.children, (e, i) => {
        s[i] = e === n ? r : t(e, n, r)
      }), new gd(e.segments, s)
    }(n.root, t, e), i, s)
  }
  class Kd {
    constructor(t, e, n) {
      if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && Jd(n[0])) throw new Error("Root segment cannot have matrix parameters");
      const r = n.find(t => "object" == typeof t && null != t && t.outlets);
      if (r && r !== hd(n)) throw new Error("{outlets:{}} has to be the last command")
    }
    toRoot() {
      return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
    }
  }
  class Xd {
    constructor(t, e, n) {
      this.segmentGroup = t, this.processChildren = e, this.index = n
    }
  }

  function tp(t) {
    return "object" == typeof t && null != t && t.outlets ? t.outlets.primary : `${t}`
  }

  function ep(t, e, n) {
    if (t || (t = new gd([], {})), 0 === t.segments.length && t.hasChildren()) return np(t, e, n);
    const r = function (t, e, n) {
        let r = 0,
          s = e;
        const i = {
          match: !1,
          pathIndex: 0,
          commandIndex: 0
        };
        for (; s < t.segments.length;) {
          if (r >= n.length) return i;
          const e = t.segments[s],
            o = tp(n[r]),
            a = r < n.length - 1 ? n[r + 1] : null;
          if (s > 0 && void 0 === o) break;
          if (o && a && "object" == typeof a && void 0 === a.outlets) {
            if (!op(o, a, e)) return i;
            r += 2
          } else {
            if (!op(o, {}, e)) return i;
            r++
          }
          s++
        }
        return {
          match: !0,
          pathIndex: s,
          commandIndex: r
        }
      }(t, e, n),
      s = n.slice(r.commandIndex);
    if (r.match && r.pathIndex < t.segments.length) {
      const e = new gd(t.segments.slice(0, r.pathIndex), {});
      return e.children.primary = new gd(t.segments.slice(r.pathIndex), t.children), np(e, 0, s)
    }
    return r.match && 0 === s.length ? new gd(t.segments, {}) : r.match && !t.hasChildren() ? rp(t, e, n) : r.match ? np(t, 0, s) : rp(t, e, n)
  }

  function np(t, e, n) {
    if (0 === n.length) return new gd(t.segments, {}); {
      const r = function (t) {
          return "object" != typeof t[0] || void 0 === t[0].outlets ? {
            primary: t
          } : t[0].outlets
        }(n),
        s = {};
      return dd(r, (n, r) => {
        null !== n && (s[r] = ep(t.children[r], e, n))
      }), dd(t.children, (t, e) => {
        void 0 === r[e] && (s[e] = t)
      }), new gd(t.segments, s)
    }
  }

  function rp(t, e, n) {
    const r = t.segments.slice(0, e);
    let s = 0;
    for (; s < n.length;) {
      if ("object" == typeof n[s] && void 0 !== n[s].outlets) {
        const t = sp(n[s].outlets);
        return new gd(r, t)
      }
      if (0 === s && Jd(n[0])) {
        r.push(new vd(t.segments[e].path, n[0])), s++;
        continue
      }
      const i = tp(n[s]),
        o = s < n.length - 1 ? n[s + 1] : null;
      i && o && Jd(o) ? (r.push(new vd(i, ip(o))), s += 2) : (r.push(new vd(i, {})), s++)
    }
    return new gd(r, {})
  }

  function sp(t) {
    const e = {};
    return dd(t, (t, n) => {
      null !== t && (e[n] = rp(new gd([], {}), 0, t))
    }), e
  }

  function ip(t) {
    const e = {};
    return dd(t, (t, n) => e[n] = `${t}`), e
  }

  function op(t, e, n) {
    return t == n.path && ld(e, n.parameters)
  }
  class ap {
    constructor(t, e, n, r) {
      this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = r
    }
    activate(t) {
      const e = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, n, t), Zd(this.futureState.root), this.activateChildRoutes(e, n, t)
    }
    deactivateChildRoutes(t, e, n) {
      const r = Ud(e);
      t.children.forEach(t => {
        const e = t.value.outlet;
        this.deactivateRoutes(t, r[e], n), delete r[e]
      }), dd(r, (t, e) => {
        this.deactivateRouteAndItsChildren(t, n)
      })
    }
    deactivateRoutes(t, e, n) {
      const r = t.value,
        s = e ? e.value : null;
      if (r === s)
        if (r.component) {
          const s = n.getContext(r.outlet);
          s && this.deactivateChildRoutes(t, e, s.children)
        } else this.deactivateChildRoutes(t, e, n);
      else s && this.deactivateRouteAndItsChildren(e, n)
    }
    deactivateRouteAndItsChildren(t, e) {
      this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
    }
    detachAndStoreRouteSubtree(t, e) {
      const n = e.getContext(t.value.outlet);
      if (n && n.outlet) {
        const e = n.outlet.detach(),
          r = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, {
          componentRef: e,
          route: t,
          contexts: r
        })
      }
    }
    deactivateRouteAndOutlet(t, e) {
      const n = e.getContext(t.value.outlet);
      if (n) {
        const r = Ud(t),
          s = t.value.component ? n.children : e;
        dd(r, (t, e) => this.deactivateRouteAndItsChildren(t, s)), n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated())
      }
    }
    activateChildRoutes(t, e, n) {
      const r = Ud(e);
      t.children.forEach(t => {
        this.activateRoutes(t, r[t.value.outlet], n), this.forwardEvent(new Jh(t.value.snapshot))
      }), t.children.length && this.forwardEvent(new Zh(t.value.snapshot))
    }
    activateRoutes(t, e, n) {
      const r = t.value,
        s = e ? e.value : null;
      if (Zd(r), r === s)
        if (r.component) {
          const s = n.getOrCreateContext(r.outlet);
          this.activateChildRoutes(t, e, s.children)
        } else this.activateChildRoutes(t, e, n);
      else if (r.component) {
        const e = n.getOrCreateContext(r.outlet);
        if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
          const t = this.routeReuseStrategy.retrieve(r.snapshot);
          this.routeReuseStrategy.store(r.snapshot, null), e.children.onOutletReAttached(t.contexts), e.attachRef = t.componentRef, e.route = t.route.value, e.outlet && e.outlet.attach(t.componentRef, t.route.value), lp(t.route)
        } else {
          const n = function (t) {
              for (let e = t.parent; e; e = e.parent) {
                const t = e.routeConfig;
                if (t && t._loadedConfig) return t._loadedConfig;
                if (t && t.component) return null
              }
              return null
            }(r.snapshot),
            s = n ? n.module.componentFactoryResolver : null;
          e.attachRef = null, e.route = r, e.resolver = s, e.outlet && e.outlet.activateWith(r, s), this.activateChildRoutes(t, null, e.children)
        }
      } else this.activateChildRoutes(t, null, n)
    }
  }

  function lp(t) {
    Zd(t.value), t.children.forEach(lp)
  }

  function cp(t) {
    return "function" == typeof t
  }

  function up(t) {
    return t instanceof md
  }
  class hp {
    constructor(t) {
      this.segmentGroup = t || null
    }
  }
  class dp {
    constructor(t) {
      this.urlTree = t
    }
  }

  function pp(t) {
    return new w(e => e.error(new hp(t)))
  }

  function fp(t) {
    return new w(e => e.error(new dp(t)))
  }

  function mp(t) {
    return new w(e => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))
  }
  class gp {
    constructor(t, e, n, r, s) {
      this.configLoader = e, this.urlSerializer = n, this.urlTree = r, this.config = s, this.allowRedirects = !0, this.ngModule = t.get(Kt)
    }
    apply() {
      return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, "primary").pipe(V(t => this.createUrlTree(t, this.urlTree.queryParams, this.urlTree.fragment))).pipe(fh(t => {
        if (t instanceof dp) return this.allowRedirects = !1, this.match(t.urlTree);
        if (t instanceof hp) throw this.noMatchError(t);
        throw t
      }))
    }
    match(t) {
      return this.expandSegmentGroup(this.ngModule, this.config, t.root, "primary").pipe(V(e => this.createUrlTree(e, t.queryParams, t.fragment))).pipe(fh(t => {
        if (t instanceof hp) throw this.noMatchError(t);
        throw t
      }))
    }
    noMatchError(t) {
      return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)
    }
    createUrlTree(t, e, n) {
      const r = t.segments.length > 0 ? new gd([], {
        primary: t
      }) : t;
      return new md(r, e, n)
    }
    expandSegmentGroup(t, e, n, r) {
      return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(V(t => new gd([], t))) : this.expandSegment(t, n, e, n.segments, r, !0)
    }
    expandChildren(t, e, n) {
      return function (t, e) {
        if (0 === Object.keys(t).length) return uu({});
        const n = [],
          r = [],
          s = {};
        return dd(t, (t, i) => {
          const o = e(i, t).pipe(V(t => s[i] = t));
          "primary" === i ? n.push(o) : r.push(o)
        }), uu.apply(null, n.concat(r)).pipe(eh(), ph(), V(() => s))
      }(n.children, (n, r) => this.expandSegmentGroup(t, e, r, n))
    }
    expandSegment(t, e, n, r, s, i) {
      return uu(...n).pipe(V(o => this.expandSegmentAgainstRoute(t, e, n, o, r, s, i).pipe(fh(t => {
        if (t instanceof hp) return uu(null);
        throw t
      }))), eh(), wh(t => !!t), fh((t, n) => {
        if (t instanceof Zu || "EmptyError" === t.name) {
          if (this.noLeftoversInUrl(e, r, s)) return uu(new gd([], {}));
          throw new hp(e)
        }
        throw t
      }))
    }
    noLeftoversInUrl(t, e, n) {
      return 0 === e.length && !t.children[n]
    }
    expandSegmentAgainstRoute(t, e, n, r, s, i, o) {
      return wp(r) !== i ? pp(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, s) : o && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) : pp(e)
    }
    expandSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
      return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i)
    }
    expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
      const s = this.applyRedirectCommands([], n.redirectTo, {});
      return n.redirectTo.startsWith("/") ? fp(s) : this.lineralizeSegments(n, s).pipe($(n => {
        const s = new gd(n, {});
        return this.expandSegment(t, s, e, n, r, !1)
      }))
    }
    expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, s, i) {
      const {
        matched: o,
        consumedSegments: a,
        lastChild: l,
        positionalParamSegments: c
      } = vp(e, r, s);
      if (!o) return pp(e);
      const u = this.applyRedirectCommands(a, r.redirectTo, c);
      return r.redirectTo.startsWith("/") ? fp(u) : this.lineralizeSegments(r, u).pipe($(r => this.expandSegment(t, e, n, r.concat(s.slice(l)), i, !1)))
    }
    matchSegmentAgainstRoute(t, e, n, r) {
      if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe(V(t => (n._loadedConfig = t, new gd(r, {})))) : uu(new gd(r, {}));
      const {
        matched: s,
        consumedSegments: i,
        lastChild: o
      } = vp(e, n, r);
      if (!s) return pp(e);
      const a = r.slice(o);
      return this.getChildConfig(t, n, r).pipe($(t => {
        const n = t.module,
          r = t.routes,
          {
            segmentGroup: s,
            slicedSegments: o
          } = function (t, e, n, r) {
            return n.length > 0 && function (t, e, n) {
              return n.some(n => bp(t, e, n) && "primary" !== wp(n))
            }(t, n, r) ? {
              segmentGroup: yp(new gd(e, function (t, e) {
                const n = {};
                n.primary = e;
                for (const r of t) "" === r.path && "primary" !== wp(r) && (n[wp(r)] = new gd([], {}));
                return n
              }(r, new gd(n, t.children)))),
              slicedSegments: []
            } : 0 === n.length && function (t, e, n) {
              return n.some(n => bp(t, e, n))
            }(t, n, r) ? {
              segmentGroup: yp(new gd(t.segments, function (t, e, n, r) {
                const s = {};
                for (const i of n) bp(t, e, i) && !r[wp(i)] && (s[wp(i)] = new gd([], {}));
                return Object.assign(Object.assign({}, r), s)
              }(t, n, r, t.children))),
              slicedSegments: n
            } : {
              segmentGroup: t,
              slicedSegments: n
            }
          }(e, i, a, r);
        return 0 === o.length && s.hasChildren() ? this.expandChildren(n, r, s).pipe(V(t => new gd(i, t))) : 0 === r.length && 0 === o.length ? uu(new gd(i, {})) : this.expandSegment(n, s, r, o, "primary", !0).pipe(V(t => new gd(i.concat(t.segments), t.children)))
      }))
    }
    getChildConfig(t, e, n) {
      return e.children ? uu(new rd(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? uu(e._loadedConfig) : function (t, e, n) {
        const r = e.canLoad;
        return r && 0 !== r.length ? H(r).pipe(V(r => {
          const s = t.get(r);
          let i;
          if (function (t) {
              return t && cp(t.canLoad)
            }(s)) i = s.canLoad(e, n);
          else {
            if (!cp(s)) throw new Error("Invalid CanLoad guard");
            i = s(e, n)
          }
          return pd(i)
        })).pipe(eh(), (s = t => !0 === t, t => t.lift(new _h(s, void 0, t)))) : uu(!0);
        var s
      }(t.injector, e, n).pipe($(n => n ? this.configLoader.load(t.injector, e).pipe(V(t => (e._loadedConfig = t, t))) : function (t) {
        return new w(e => e.error(ed(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))
      }(e))) : uu(new rd([], t))
    }
    lineralizeSegments(t, e) {
      let n = [],
        r = e.root;
      for (;;) {
        if (n = n.concat(r.segments), 0 === r.numberOfChildren) return uu(n);
        if (r.numberOfChildren > 1 || !r.children.primary) return mp(t.redirectTo);
        r = r.children.primary
      }
    }
    applyRedirectCommands(t, e, n) {
      return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
    }
    applyRedirectCreatreUrlTree(t, e, n, r) {
      const s = this.createSegmentGroup(t, e.root, n, r);
      return new md(s, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
    }
    createQueryParams(t, e) {
      const n = {};
      return dd(t, (t, r) => {
        if ("string" == typeof t && t.startsWith(":")) {
          const s = t.substring(1);
          n[r] = e[s]
        } else n[r] = t
      }), n
    }
    createSegmentGroup(t, e, n, r) {
      const s = this.createSegments(t, e.segments, n, r);
      let i = {};
      return dd(e.children, (e, s) => {
        i[s] = this.createSegmentGroup(t, e, n, r)
      }), new gd(s, i)
    }
    createSegments(t, e, n, r) {
      return e.map(e => e.path.startsWith(":") ? this.findPosParam(t, e, r) : this.findOrReturn(e, n))
    }
    findPosParam(t, e, n) {
      const r = n[e.path.substring(1)];
      if (!r) throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);
      return r
    }
    findOrReturn(t, e) {
      let n = 0;
      for (const r of e) {
        if (r.path === t.path) return e.splice(n), r;
        n++
      }
      return t
    }
  }

  function vp(t, e, n) {
    if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? {
      matched: !1,
      consumedSegments: [],
      lastChild: 0,
      positionalParamSegments: {}
    } : {
      matched: !0,
      consumedSegments: [],
      lastChild: 0,
      positionalParamSegments: {}
    };
    const r = (e.matcher || nd)(n, t, e);
    return r ? {
      matched: !0,
      consumedSegments: r.consumed,
      lastChild: r.consumed.length,
      positionalParamSegments: r.posParams
    } : {
      matched: !1,
      consumedSegments: [],
      lastChild: 0,
      positionalParamSegments: {}
    }
  }

  function yp(t) {
    if (1 === t.numberOfChildren && t.children.primary) {
      const e = t.children.primary;
      return new gd(t.segments.concat(e.segments), e.children)
    }
    return t
  }

  function bp(t, e, n) {
    return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
  }

  function wp(t) {
    return t.outlet || "primary"
  }
  class _p {
    constructor(t) {
      this.path = t, this.route = this.path[this.path.length - 1]
    }
  }
  class Cp {
    constructor(t, e) {
      this.component = t, this.route = e
    }
  }

  function Sp(t, e, n) {
    const r = t._root;
    return function t(e, n, r, s, i = {
      canDeactivateChecks: [],
      canActivateChecks: []
    }) {
      const o = Ud(n);
      return e.children.forEach(e => {
        ! function (e, n, r, s, i = {
          canDeactivateChecks: [],
          canActivateChecks: []
        }) {
          const o = e.value,
            a = n ? n.value : null,
            l = r ? r.getContext(e.value.outlet) : null;
          if (a && o.routeConfig === a.routeConfig) {
            const c = function (t, e, n) {
              if ("function" == typeof n) return n(t, e);
              switch (n) {
                case "pathParamsChange":
                  return !yd(t.url, e.url);
                case "pathParamsOrQueryParamsChange":
                  return !yd(t.url, e.url) || !ld(t.queryParams, e.queryParams);
                case "always":
                  return !0;
                case "paramsOrQueryParamsChange":
                  return !Qd(t, e) || !ld(t.queryParams, e.queryParams);
                case "paramsChange":
                default:
                  return !Qd(t, e)
              }
            }(a, o, o.routeConfig.runGuardsAndResolvers);
            c ? i.canActivateChecks.push(new _p(s)) : (o.data = a.data, o._resolvedData = a._resolvedData), t(e, n, o.component ? l ? l.children : null : r, s, i), c && i.canDeactivateChecks.push(new Cp(l && l.outlet && l.outlet.component || null, a))
          } else a && xp(n, l, i), i.canActivateChecks.push(new _p(s)), t(e, null, o.component ? l ? l.children : null : r, s, i)
        }(e, o[e.value.outlet], r, s.concat([e.value]), i), delete o[e.value.outlet]
      }), dd(o, (t, e) => xp(t, r.getContext(e), i)), i
    }(r, e ? e._root : null, n, [r.value])
  }

  function Ep(t, e, n) {
    const r = function (t) {
      if (!t) return null;
      for (let e = t.parent; e; e = e.parent) {
        const t = e.routeConfig;
        if (t && t._loadedConfig) return t._loadedConfig
      }
      return null
    }(e);
    return (r ? r.module.injector : n).get(t)
  }

  function xp(t, e, n) {
    const r = Ud(t),
      s = t.value;
    dd(r, (t, r) => {
      xp(t, s.component ? e ? e.children.getContext(r) : null : e, n)
    }), n.canDeactivateChecks.push(new Cp(s.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, s))
  }
  const kp = Symbol("INITIAL_VALUE");

  function Ap() {
    return Sh(t => function (...t) {
      let e = null,
        n = null;
      return A(t[t.length - 1]) && (n = t.pop()), "function" == typeof t[t.length - 1] && (e = t.pop()), 1 === t.length && l(t[0]) && (t = t[0]), W(t, n).lift(new Ju(e))
    }(...t.map(t => t.pipe(vh(1), function (...t) {
      const e = t[t.length - 1];
      return A(e) ? (t.pop(), n => kh(t, n, e)) : e => kh(t, e)
    }(kp)))).pipe(Ah((t, e) => {
      let n = !1;
      return e.reduce((t, r, s) => {
        if (t !== kp) return t;
        if (r === kp && (n = !0), !n) {
          if (!1 === r) return r;
          if (s === e.length - 1 || up(r)) return r
        }
        return t
      }, t)
    }, kp), du(t => t !== kp), V(t => up(t) ? t : !0 === t), vh(1)))
  }

  function Tp(t, e) {
    return null !== t && e && e(new Qh(t)), uu(!0)
  }

  function Ip(t, e) {
    return null !== t && e && e(new Wh(t)), uu(!0)
  }

  function Op(t, e, n) {
    const r = e.routeConfig ? e.routeConfig.canActivate : null;
    return r && 0 !== r.length ? uu(r.map(r => th(() => {
      const s = Ep(r, e, n);
      let i;
      if (function (t) {
          return t && cp(t.canActivate)
        }(s)) i = pd(s.canActivate(e, t));
      else {
        if (!cp(s)) throw new Error("Invalid CanActivate guard");
        i = pd(s(e, t))
      }
      return i.pipe(wh())
    }))).pipe(Ap()) : uu(!0)
  }

  function Pp(t, e, n) {
    const r = e[e.length - 1],
      s = e.slice(0, e.length - 1).reverse().map(t => function (t) {
        const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
        return e && 0 !== e.length ? {
          node: t,
          guards: e
        } : null
      }(t)).filter(t => null !== t).map(e => th(() => uu(e.guards.map(s => {
        const i = Ep(s, e.node, n);
        let o;
        if (function (t) {
            return t && cp(t.canActivateChild)
          }(i)) o = pd(i.canActivateChild(r, t));
        else {
          if (!cp(i)) throw new Error("Invalid CanActivateChild guard");
          o = pd(i(r, t))
        }
        return o.pipe(wh())
      })).pipe(Ap())));
    return uu(s).pipe(Ap())
  }
  class Fp {}
  class Np {
    constructor(t, e, n, r, s, i) {
      this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = r, this.paramsInheritanceStrategy = s, this.relativeLinkResolution = i
    }
    recognize() {
      try {
        const t = Dp(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
          e = this.processSegmentGroup(this.config, t, "primary"),
          n = new zd([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, "primary", this.rootComponentType, null, this.urlTree.root, -1, {}),
          r = new Ld(n, e),
          s = new Gd(this.url, r);
        return this.inheritParamsAndData(s._root), uu(s)
      } catch (t) {
        return new w(e => e.error(t))
      }
    }
    inheritParamsAndData(t) {
      const e = t.value,
        n = qd(e, this.paramsInheritanceStrategy);
      e.params = Object.freeze(n.params), e.data = Object.freeze(n.data), t.children.forEach(t => this.inheritParamsAndData(t))
    }
    processSegmentGroup(t, e, n) {
      return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
    }
    processChildren(t, e) {
      const n = bd(e, (e, n) => this.processSegmentGroup(t, e, n));
      return function (t) {
        const e = {};
        t.forEach(t => {
          const n = e[t.value.outlet];
          if (n) {
            const e = n.url.map(t => t.toString()).join("/"),
              r = t.value.url.map(t => t.toString()).join("/");
            throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${r}'.`)
          }
          e[t.value.outlet] = t.value
        })
      }(n), n.sort((t, e) => "primary" === t.value.outlet ? -1 : "primary" === e.value.outlet ? 1 : t.value.outlet.localeCompare(e.value.outlet)), n
    }
    processSegment(t, e, n, r) {
      for (const i of t) try {
        return this.processSegmentAgainstRoute(i, e, n, r)
      } catch (s) {
        if (!(s instanceof Fp)) throw s
      }
      if (this.noLeftoversInUrl(e, n, r)) return [];
      throw new Fp
    }
    noLeftoversInUrl(t, e, n) {
      return 0 === e.length && !t.children[n]
    }
    processSegmentAgainstRoute(t, e, n, r) {
      if (t.redirectTo) throw new Fp;
      if ((t.outlet || "primary") !== r) throw new Fp;
      let s, i = [],
        o = [];
      if ("**" === t.path) {
        const i = n.length > 0 ? hd(n).parameters : {};
        s = new zd(n, i, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Up(t), r, t.component, t, Rp(e), Mp(e) + n.length, jp(t))
      } else {
        const a = function (t, e, n) {
          if ("" === e.path) {
            if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new Fp;
            return {
              consumedSegments: [],
              lastChild: 0,
              parameters: {}
            }
          }
          const r = (e.matcher || nd)(n, t, e);
          if (!r) throw new Fp;
          const s = {};
          dd(r.posParams, (t, e) => {
            s[e] = t.path
          });
          const i = r.consumed.length > 0 ? Object.assign(Object.assign({}, s), r.consumed[r.consumed.length - 1].parameters) : s;
          return {
            consumedSegments: r.consumed,
            lastChild: r.consumed.length,
            parameters: i
          }
        }(e, t, n);
        i = a.consumedSegments, o = n.slice(a.lastChild), s = new zd(i, a.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Up(t), r, t.component, t, Rp(e), Mp(e) + i.length, jp(t))
      }
      const a = function (t) {
          return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
        }(t),
        {
          segmentGroup: l,
          slicedSegments: c
        } = Dp(e, i, o, a, this.relativeLinkResolution);
      if (0 === c.length && l.hasChildren()) {
        const t = this.processChildren(a, l);
        return [new Ld(s, t)]
      }
      if (0 === a.length && 0 === c.length) return [new Ld(s, [])];
      const u = this.processSegment(a, l, c, "primary");
      return [new Ld(s, u)]
    }
  }

  function Rp(t) {
    let e = t;
    for (; e._sourceSegment;) e = e._sourceSegment;
    return e
  }

  function Mp(t) {
    let e = t,
      n = e._segmentIndexShift ? e._segmentIndexShift : 0;
    for (; e._sourceSegment;) e = e._sourceSegment, n += e._segmentIndexShift ? e._segmentIndexShift : 0;
    return n - 1
  }

  function Dp(t, e, n, r, s) {
    if (n.length > 0 && function (t, e, n) {
        return n.some(n => Vp(t, e, n) && "primary" !== Lp(n))
      }(t, n, r)) {
      const s = new gd(e, function (t, e, n, r) {
        const s = {};
        s.primary = r, r._sourceSegment = t, r._segmentIndexShift = e.length;
        for (const i of n)
          if ("" === i.path && "primary" !== Lp(i)) {
            const n = new gd([], {});
            n._sourceSegment = t, n._segmentIndexShift = e.length, s[Lp(i)] = n
          } return s
      }(t, e, r, new gd(n, t.children)));
      return s._sourceSegment = t, s._segmentIndexShift = e.length, {
        segmentGroup: s,
        slicedSegments: []
      }
    }
    if (0 === n.length && function (t, e, n) {
        return n.some(n => Vp(t, e, n))
      }(t, n, r)) {
      const i = new gd(t.segments, function (t, e, n, r, s, i) {
        const o = {};
        for (const a of r)
          if (Vp(t, n, a) && !s[Lp(a)]) {
            const n = new gd([], {});
            n._sourceSegment = t, n._segmentIndexShift = "legacy" === i ? t.segments.length : e.length, o[Lp(a)] = n
          } return Object.assign(Object.assign({}, s), o)
      }(t, e, n, r, t.children, s));
      return i._sourceSegment = t, i._segmentIndexShift = e.length, {
        segmentGroup: i,
        slicedSegments: n
      }
    }
    const i = new gd(t.segments, t.children);
    return i._sourceSegment = t, i._segmentIndexShift = e.length, {
      segmentGroup: i,
      slicedSegments: n
    }
  }

  function Vp(t, e, n) {
    return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
  }

  function Lp(t) {
    return t.outlet || "primary"
  }

  function Up(t) {
    return t.data || {}
  }

  function jp(t) {
    return t.resolve || {}
  }

  function Hp(t, e, n, r) {
    const s = Ep(t, e, r);
    return pd(s.resolve ? s.resolve(e, n) : s(e, n))
  }

  function $p(t) {
    return function (e) {
      return e.pipe(Sh(e => {
        const n = t(e);
        return n ? H(n).pipe(V(() => e)) : H([e])
      }))
    }
  }
  class qp {
    shouldDetach(t) {
      return !1
    }
    store(t, e) {}
    shouldAttach(t) {
      return !1
    }
    retrieve(t) {
      return null
    }
    shouldReuseRoute(t, e) {
      return t.routeConfig === e.routeConfig
    }
  }
  const zp = new Lt("ROUTES"); class Gp {
    constructor(t, e, n, r) {
      this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = r
    }
    load(t, e) {
      return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(V(n => {
        this.onLoadEndListener && this.onLoadEndListener(e);
        const r = n.create(t);
        return new rd(ud(r.injector.get(zp)).map(ad), r)
      }))
    }
    loadModuleFactory(t) {
      return "string" == typeof t ? H(this.loader.load(t)) : pd(t()).pipe($(t => t instanceof Xt ? uu(t) : H(this.compiler.compileModuleAsync(t))))
    }
  }
  class Bp {
    shouldProcessUrl(t) {
      return !0
    }
    extract(t) {
      return t
    }
    merge(t, e) {
      return t
    }
  }

  function Wp(t) {
    throw t
  }

  function Zp(t, e, n) {
    return e.parse("/")
  }

  function Qp(t, e) {
    return uu(null)
  }
  let Jp = (() => {
    class t {
      constructor(t, e, n, r, s, i, o, a) {
        this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = r, this.config = a, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new x, this.errorHandler = Wp, this.malformedUriErrorHandler = Zp, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
          beforePreactivation: Qp,
          afterPreactivation: Qp
        }, this.urlHandlingStrategy = new Bp, this.routeReuseStrategy = new qp, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = s.get(Kt), this.console = s.get(La);
        const l = s.get(Ka);
        this.isNgZoneEnabled = l instanceof Ka, this.resetConfig(a), this.currentUrlTree = new md(new gd([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new Gp(i, o, t => this.triggerEvent(new Gh(t)), t => this.triggerEvent(new Bh(t))), this.routerState = Hd(this.currentUrlTree, this.rootComponentType), this.transitions = new Wu({
          id: 0,
          currentUrlTree: this.currentUrlTree,
          currentRawUrl: this.currentUrlTree,
          extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
          urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
          rawUrl: this.currentUrlTree,
          extras: {},
          resolve: null,
          reject: null,
          promise: Promise.resolve(!0),
          source: "imperative",
          restoredState: null,
          currentSnapshot: this.routerState.snapshot,
          targetSnapshot: null,
          currentRouterState: this.routerState,
          targetRouterState: null,
          guards: {
            canActivateChecks: [],
            canDeactivateChecks: []
          },
          guardsResult: null
        }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
      }
      setupNavigations(t) {
        const e = this.events;
        return t.pipe(du(t => 0 !== t.id), V(t => Object.assign(Object.assign({}, t), {
          extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
        })), Sh(t => {
          let n = !1,
            r = !1;
          return uu(t).pipe(Oh(t => {
            this.currentNavigation = {
              id: t.id,
              initialUrl: t.currentRawUrl,
              extractedUrl: t.extractedUrl,
              trigger: t.source,
              extras: t.extras,
              previousNavigation: this.lastSuccessfulNavigation ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {
                previousNavigation: null
              }) : null
            }
          }), Sh(t => {
            const n = !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString();
            if (("reload" === this.onSameUrlNavigation || n) && this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return uu(t).pipe(Sh(t => {
              const n = this.transitions.getValue();
              return e.next(new Dh(t.id, this.serializeUrl(t.extractedUrl), t.source, t.restoredState)), n !== this.transitions.getValue() ? Ku : [t]
            }), Sh(t => Promise.resolve(t)), (r = this.ngModule.injector, s = this.configLoader, i = this.urlSerializer, o = this.config, function (t) {
              return t.pipe(Sh(t => function (t, e, n, r, s) {
                return new gp(t, e, n, r, s).apply()
              }(r, s, i, t.extractedUrl, o).pipe(V(e => Object.assign(Object.assign({}, t), {
                urlAfterRedirects: e
              })))))
            }), Oh(t => {
              this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {
                finalUrl: t.urlAfterRedirects
              })
            }), function (t, e, n, r, s) {
              return function (i) {
                return i.pipe($(i => function (t, e, n, r, s = "emptyOnly", i = "legacy") {
                  return new Np(t, e, n, r, s, i).recognize()
                }(t, e, i.urlAfterRedirects, n(i.urlAfterRedirects), r, s).pipe(V(t => Object.assign(Object.assign({}, i), {
                  targetSnapshot: t
                })))))
              }
            }(this.rootComponentType, this.config, t => this.serializeUrl(t), this.paramsInheritanceStrategy, this.relativeLinkResolution), Oh(t => {
              "eager" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects)
            }), Oh(t => {
              const n = new jh(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              e.next(n)
            }));
            var r, s, i, o;
            if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
              const {
                id: n,
                extractedUrl: r,
                source: s,
                restoredState: i,
                extras: o
              } = t, a = new Dh(n, this.serializeUrl(r), s, i);
              e.next(a);
              const l = Hd(r, this.rootComponentType).snapshot;
              return uu(Object.assign(Object.assign({}, t), {
                targetSnapshot: l,
                urlAfterRedirects: r,
                extras: Object.assign(Object.assign({}, o), {
                  skipLocationChange: !1,
                  replaceUrl: !1
                })
              }))
            }
            return this.rawUrlTree = t.rawUrl, this.browserUrlTree = t.urlAfterRedirects, t.resolve(null), Ku
          }), $p(t => {
            const {
              targetSnapshot: e,
              id: n,
              extractedUrl: r,
              rawUrl: s,
              extras: {
                skipLocationChange: i,
                replaceUrl: o
              }
            } = t;
            return this.hooks.beforePreactivation(e, {
              navigationId: n,
              appliedUrlTree: r,
              rawUrlTree: s,
              skipLocationChange: !!i,
              replaceUrl: !!o
            })
          }), Oh(t => {
            const e = new Hh(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
            this.triggerEvent(e)
          }), V(t => Object.assign(Object.assign({}, t), {
            guards: Sp(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
          })), function (t, e) {
            return function (n) {
              return n.pipe($(n => {
                const {
                  targetSnapshot: r,
                  currentSnapshot: s,
                  guards: {
                    canActivateChecks: i,
                    canDeactivateChecks: o
                  }
                } = n;
                return 0 === o.length && 0 === i.length ? uu(Object.assign(Object.assign({}, n), {
                  guardsResult: !0
                })) : function (t, e, n, r) {
                  return H(t).pipe($(t => function (t, e, n, r, s) {
                    const i = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                    return i && 0 !== i.length ? uu(i.map(i => {
                      const o = Ep(i, e, s);
                      let a;
                      if (function (t) {
                          return t && cp(t.canDeactivate)
                        }(o)) a = pd(o.canDeactivate(t, e, n, r));
                      else {
                        if (!cp(o)) throw new Error("Invalid CanDeactivate guard");
                        a = pd(o(t, e, n, r))
                      }
                      return a.pipe(wh())
                    })).pipe(Ap()) : uu(!0)
                  }(t.component, t.route, n, e, r)), wh(t => !0 !== t, !0))
                }(o, r, s, t).pipe($(n => n && "boolean" == typeof n ? function (t, e, n, r) {
                  return H(e).pipe(hu(e => H([Ip(e.route.parent, r), Tp(e.route, r), Pp(t, e.path, n), Op(t, e.route, n)]).pipe(eh(), wh(t => !0 !== t, !0))), wh(t => !0 !== t, !0))
                }(r, i, t, e) : uu(n)), V(t => Object.assign(Object.assign({}, n), {
                  guardsResult: t
                })))
              }))
            }
          }(this.ngModule.injector, t => this.triggerEvent(t)), Oh(t => {
            if (up(t.guardsResult)) {
              const e = ed(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);
              throw e.url = t.guardsResult, e
            }
          }), Oh(t => {
            const e = new $h(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
            this.triggerEvent(e)
          }), du(t => {
            if (!t.guardsResult) {
              this.resetUrlToCurrentUrlTree();
              const n = new Lh(t.id, this.serializeUrl(t.extractedUrl), "");
              return e.next(n), t.resolve(!1), !1
            }
            return !0
          }), $p(t => {
            if (t.guards.canActivateChecks.length) return uu(t).pipe(Oh(t => {
              const e = new qh(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              this.triggerEvent(e)
            }), (e = this.paramsInheritanceStrategy, n = this.ngModule.injector, function (t) {
              return t.pipe($(t => {
                const {
                  targetSnapshot: r,
                  guards: {
                    canActivateChecks: s
                  }
                } = t;
                return s.length ? H(s).pipe(hu(t => function (t, e, n, r) {
                  return function (t, e, n, r) {
                    const s = Object.keys(t);
                    if (0 === s.length) return uu({});
                    if (1 === s.length) {
                      const i = s[0];
                      return Hp(t[i], e, n, r).pipe(V(t => ({
                        [i]: t
                      })))
                    }
                    const i = {};
                    return H(s).pipe($(s => Hp(t[s], e, n, r).pipe(V(t => (i[s] = t, t))))).pipe(ph(), V(() => i))
                  }(t._resolve, t, e, r).pipe(V(e => (t._resolvedData = e, t.data = Object.assign(Object.assign({}, t.data), qd(t, n).resolve), null)))
                }(t.route, r, e, n)), function (t, e) {
                  return arguments.length >= 2 ? function (n) {
                    return y(Ah(t, e), rh(1), uh(e))(n)
                  } : function (e) {
                    return y(Ah((e, n, r) => t(e, n, r + 1)), rh(1))(e)
                  }
                }((t, e) => t), V(e => t)) : uu(t)
              }))
            }), Oh(t => {
              const e = new zh(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              this.triggerEvent(e)
            }));
            var e, n
          }), $p(t => {
            const {
              targetSnapshot: e,
              id: n,
              extractedUrl: r,
              rawUrl: s,
              extras: {
                skipLocationChange: i,
                replaceUrl: o
              }
            } = t;
            return this.hooks.afterPreactivation(e, {
              navigationId: n,
              appliedUrlTree: r,
              rawUrlTree: s,
              skipLocationChange: !!i,
              replaceUrl: !!o
            })
          }), V(t => {
            const e = function (t, e, n) {
              const r = function t(e, n, r) {
                if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                  const s = r.value;
                  s._futureSnapshot = n.value;
                  const i = function (e, n, r) {
                    return n.children.map(n => {
                      for (const s of r.children)
                        if (e.shouldReuseRoute(s.value.snapshot, n.value)) return t(e, n, s);
                      return t(e, n)
                    })
                  }(e, n, r);
                  return new Ld(s, i)
                } {
                  const r = e.retrieve(n.value);
                  if (r) {
                    const t = r.route;
                    return function t(e, n) {
                      if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                      if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                      n.value._futureSnapshot = e.value;
                      for (let r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r])
                    }(n, t), t
                  } {
                    const r = new $d(new Wu((s = n.value).url), new Wu(s.params), new Wu(s.queryParams), new Wu(s.fragment), new Wu(s.data), s.outlet, s.component, s),
                      i = n.children.map(n => t(e, n));
                    return new Ld(r, i)
                  }
                }
                var s
              }(t, e._root, n ? n._root : void 0);
              return new jd(r, e)
            }(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
            return Object.assign(Object.assign({}, t), {
              targetRouterState: e
            })
          }), Oh(t => {
            this.currentUrlTree = t.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl), this.routerState = t.targetRouterState, "deferred" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects)
          }), (i = this.rootContexts, o = this.routeReuseStrategy, a = t => this.triggerEvent(t), V(t => (new ap(o, t.targetRouterState, t.currentRouterState, a).activate(i), t))), Oh({
            next() {
              n = !0
            },
            complete() {
              n = !0
            }
          }), (s = () => {
            if (!n && !r) {
              this.resetUrlToCurrentUrlTree();
              const n = new Lh(t.id, this.serializeUrl(t.extractedUrl), `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`);
              e.next(n), t.resolve(!1)
            }
            this.currentNavigation = null
          }, t => t.lift(new Nh(s))), fh(n => {
            if (r = !0, (s = n) && s.ngNavigationCancelingError) {
              const r = up(n.url);
              r || (this.navigated = !0, this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
              const s = new Lh(t.id, this.serializeUrl(t.extractedUrl), n.message);
              e.next(s), r ? setTimeout(() => {
                const e = this.urlHandlingStrategy.merge(n.url, this.rawUrlTree);
                return this.scheduleNavigation(e, "imperative", null, {
                  skipLocationChange: t.extras.skipLocationChange,
                  replaceUrl: "eager" === this.urlUpdateStrategy
                }, {
                  resolve: t.resolve,
                  reject: t.reject,
                  promise: t.promise
                })
              }, 0) : t.resolve(!1)
            } else {
              this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
              const r = new Uh(t.id, this.serializeUrl(t.extractedUrl), n);
              e.next(r);
              try {
                t.resolve(this.errorHandler(n))
              } catch (i) {
                t.reject(i)
              }
            }
            var s;
            return Ku
          }));
          var s, i, o, a
        }))
      }
      resetRootComponentType(t) {
        this.rootComponentType = t, this.routerState.root.component = this.rootComponentType
      }
      getTransition() {
        const t = this.transitions.value;
        return t.urlAfterRedirects = this.browserUrlTree, t
      }
      setTransition(t) {
        this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), t))
      }
      initialNavigation() {
        this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
          replaceUrl: !0
        })
      }
      setUpLocationChangeListener() {
        this.locationSubscription || (this.locationSubscription = this.location.subscribe(t => {
          let e = this.parseUrl(t.url);
          const n = "popstate" === t.type ? "popstate" : "hashchange",
            r = t.state && t.state.navigationId ? t.state : null;
          setTimeout(() => {
            this.scheduleNavigation(e, n, r, {
              replaceUrl: !0
            })
          }, 0)
        }))
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree)
      }
      getCurrentNavigation() {
        return this.currentNavigation
      }
      triggerEvent(t) {
        this.events.next(t)
      }
      resetConfig(t) {
        sd(t), this.config = t.map(ad), this.navigated = !1, this.lastSuccessfulId = -1
      }
      ngOnDestroy() {
        this.dispose()
      }
      dispose() {
        this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
      }
      createUrlTree(t, e = {}) {
        const {
          relativeTo: n,
          queryParams: r,
          fragment: s,
          preserveQueryParams: i,
          queryParamsHandling: o,
          preserveFragment: a
        } = e;
        ir() && i && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
        const l = n || this.routerState.root,
          c = a ? this.currentUrlTree.fragment : s;
        let u = null;
        if (o) switch (o) {
          case "merge":
            u = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), r);
            break;
          case "preserve":
            u = this.currentUrlTree.queryParams;
            break;
          default:
            u = r || null
        } else u = i ? this.currentUrlTree.queryParams : r || null;
        return null !== u && (u = this.removeEmptyProps(u)),
          function (t, e, n, r, s) {
            if (0 === n.length) return Yd(e.root, e.root, e, r, s);
            const i = function (t) {
              if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new Kd(!0, 0, t);
              let e = 0,
                n = !1;
              const r = t.reduce((t, r, s) => {
                if ("object" == typeof r && null != r) {
                  if (r.outlets) {
                    const e = {};
                    return dd(r.outlets, (t, n) => {
                      e[n] = "string" == typeof t ? t.split("/") : t
                    }), [...t, {
                      outlets: e
                    }]
                  }
                  if (r.segmentPath) return [...t, r.segmentPath]
                }
                return "string" != typeof r ? [...t, r] : 0 === s ? (r.split("/").forEach((r, s) => {
                  0 == s && "." === r || (0 == s && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r))
                }), t) : [...t, r]
              }, []);
              return new Kd(n, e, r)
            }(n);
            if (i.toRoot()) return Yd(e.root, new gd([], {}), e, r, s);
            const o = function (t, e, n) {
                if (t.isAbsolute) return new Xd(e.root, !0, 0);
                if (-1 === n.snapshot._lastPathIndex) return new Xd(n.snapshot._urlSegment, !0, 0);
                const r = Jd(t.commands[0]) ? 0 : 1;
                return function (t, e, n) {
                  let r = t,
                    s = e,
                    i = n;
                  for (; i > s;) {
                    if (i -= s, r = r.parent, !r) throw new Error("Invalid number of '../'");
                    s = r.segments.length
                  }
                  return new Xd(r, !1, s - i)
                }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, t.numberOfDoubleDots)
              }(i, e, t),
              a = o.processChildren ? np(o.segmentGroup, o.index, i.commands) : ep(o.segmentGroup, o.index, i.commands);
            return Yd(o.segmentGroup, a, e, r, s)
          }(l, this.currentUrlTree, t, u, c)
      }
      navigateByUrl(t, e = {
        skipLocationChange: !1
      }) {
        ir() && this.isNgZoneEnabled && !Ka.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
        const n = up(t) ? t : this.parseUrl(t),
          r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
        return this.scheduleNavigation(r, "imperative", null, e)
      }
      navigate(t, e = {
        skipLocationChange: !1
      }) {
        return function (t) {
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            if (null == n) throw new Error(`The requested path contains ${n} segment at index ${e}`)
          }
        }(t), this.navigateByUrl(this.createUrlTree(t, e), e)
      }
      serializeUrl(t) {
        return this.urlSerializer.serialize(t)
      }
      parseUrl(t) {
        let e;
        try {
          e = this.urlSerializer.parse(t)
        } catch (n) {
          e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
        }
        return e
      }
      isActive(t, e) {
        if (up(t)) return fd(this.currentUrlTree, t, e);
        const n = this.parseUrl(t);
        return fd(this.currentUrlTree, n, e)
      }
      removeEmptyProps(t) {
        return Object.keys(t).reduce((e, n) => {
          const r = t[n];
          return null != r && (e[n] = r), e
        }, {})
      }
      processNavigations() {
        this.navigations.subscribe(t => {
          this.navigated = !0, this.lastSuccessfulId = t.id, this.events.next(new Vh(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, this.currentNavigation = null, t.resolve(!0)
        }, t => {
          this.console.warn("Unhandled Navigation Error: ")
        })
      }
      scheduleNavigation(t, e, n, r, s) {
        const i = this.getTransition();
        if (i && "imperative" !== e && "imperative" === i.source && i.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
        if (i && "hashchange" == e && "popstate" === i.source && i.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
        if (i && "popstate" == e && "hashchange" === i.source && i.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
        let o, a, l;
        s ? (o = s.resolve, a = s.reject, l = s.promise) : l = new Promise((t, e) => {
          o = t, a = e
        });
        const c = ++this.navigationId;
        return this.setTransition({
          id: c,
          source: e,
          restoredState: n,
          currentUrlTree: this.currentUrlTree,
          currentRawUrl: this.rawUrlTree,
          rawUrl: t,
          extras: r,
          resolve: o,
          reject: a,
          promise: l,
          currentSnapshot: this.routerState.snapshot,
          currentRouterState: this.routerState
        }), l.catch(t => Promise.reject(t))
      }
      setBrowserUrl(t, e, n, r) {
        const s = this.urlSerializer.serialize(t);
        r = r || {}, this.location.isCurrentPathEqualTo(s) || e ? this.location.replaceState(s, "", Object.assign(Object.assign({}, r), {
          navigationId: n
        })) : this.location.go(s, "", Object.assign(Object.assign({}, r), {
          navigationId: n
        }))
      }
      resetStateAndUrl(t, e, n) {
        this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {
          navigationId: this.lastSuccessfulId
        })
      }
    }
    return t.\u0275fac = function (t) {
      Ti()
    }, t.\u0275dir = ve({
      type: t
    }), t
  })(), Yp = (() => {
    class t {
      constructor(t, e, n, r, s) {
        this.router = t, this.route = e, this.commands = [], null == n && r.setAttribute(s.nativeElement, "tabindex", "0")
      }
      set routerLink(t) {
        this.commands = null != t ? Array.isArray(t) ? t : [t] : []
      }
      set preserveQueryParams(t) {
        ir() && console && console.warn && console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."), this.preserve = t
      }
      onClick() {
        const t = {
          skipLocationChange: Xp(this.skipLocationChange),
          replaceUrl: Xp(this.replaceUrl)
        };
        return this.router.navigateByUrl(this.urlTree, t), !0
      }
      get urlTree() {
        return this.router.createUrlTree(this.commands, {
          relativeTo: this.route,
          queryParams: this.queryParams,
          fragment: this.fragment,
          preserveQueryParams: Xp(this.preserve),
          queryParamsHandling: this.queryParamsHandling,
          preserveFragment: Xp(this.preserveFragment)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Jp), ki($d), Ai("tabindex"), ki(ko), ki(Co))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "routerLink", "", 5, "a", 5, "area"]
      ],
      hostBindings: function (t, e) {
        1 & t && Vi("click", (function () {
          return e.onClick()
        }))
      },
      inputs: {
        routerLink: "routerLink",
        preserveQueryParams: "preserveQueryParams",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl",
        state: "state"
      }
    }), t
  })(), Kp = (() => {
    class t {
      constructor(t, e, n) {
        this.router = t, this.route = e, this.locationStrategy = n, this.commands = [], this.subscription = t.events.subscribe(t => {
          t instanceof Vh && this.updateTargetUrlAndHref()
        })
      }
      set routerLink(t) {
        this.commands = null != t ? Array.isArray(t) ? t : [t] : []
      }
      set preserveQueryParams(t) {
        ir() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = t
      }
      ngOnChanges(t) {
        this.updateTargetUrlAndHref()
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
      }
      onClick(t, e, n, r) {
        if (0 !== t || e || n || r) return !0;
        if ("string" == typeof this.target && "_self" != this.target) return !0;
        const s = {
          skipLocationChange: Xp(this.skipLocationChange),
          replaceUrl: Xp(this.replaceUrl),
          state: this.state
        };
        return this.router.navigateByUrl(this.urlTree, s), !1
      }
      updateTargetUrlAndHref() {
        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
      }
      get urlTree() {
        return this.router.createUrlTree(this.commands, {
          relativeTo: this.route,
          queryParams: this.queryParams,
          fragment: this.fragment,
          preserveQueryParams: Xp(this.preserve),
          queryParamsHandling: this.queryParamsHandling,
          preserveFragment: Xp(this.preserveFragment)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Jp), ki($d), ki(jl))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["a", "routerLink", ""],
        ["area", "routerLink", ""]
      ],
      hostVars: 2,
      hostBindings: function (t, e) {
        1 & t && Vi("click", (function (t) {
          return e.onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey)
        })), 2 & t && (Xi("href", e.href, cr), Si("target", e.target))
      },
      inputs: {
        routerLink: "routerLink",
        preserveQueryParams: "preserveQueryParams",
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl",
        state: "state"
      },
      features: [ao]
    }), t
  })();

  function Xp(t) {
    return "" === t || !!t
  }
  let tf = (() => {
    class t {
      constructor(t, e, n, r, s) {
        this.router = t, this.element = e, this.renderer = n, this.link = r, this.linkWithHref = s, this.classes = [], this.isActive = !1, this.routerLinkActiveOptions = {
          exact: !1
        }, this.subscription = t.events.subscribe(t => {
          t instanceof Vh && this.update()
        })
      }
      ngAfterContentInit() {
        this.links.changes.subscribe(t => this.update()), this.linksWithHrefs.changes.subscribe(t => this.update()), this.update()
      }
      set routerLinkActive(t) {
        const e = Array.isArray(t) ? t : t.split(" ");
        this.classes = e.filter(t => !!t)
      }
      ngOnChanges(t) {
        this.update()
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
      }
      update() {
        this.links && this.linksWithHrefs && this.router.navigated && Promise.resolve().then(() => {
          const t = this.hasActiveLinks();
          this.isActive !== t && (this.isActive = t, this.classes.forEach(e => {
            t ? this.renderer.addClass(this.element.nativeElement, e) : this.renderer.removeClass(this.element.nativeElement, e)
          }))
        })
      }
      isLinkActive(t) {
        return e => t.isActive(e.urlTree, this.routerLinkActiveOptions.exact)
      }
      hasActiveLinks() {
        const t = this.isLinkActive(this.router);
        return this.link && t(this.link) || this.linkWithHref && t(this.linkWithHref) || this.links.some(t) || this.linksWithHrefs.some(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Jp), ki(Co), ki(ko), ki(Yp, 8), ki(Kp, 8))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "routerLinkActive", ""]
      ],
      contentQueries: function (t, e, n) {
        var r;
        1 & t && (Aa(n, Yp, !0), Aa(n, Kp, !0)), 2 & t && (ka(r = Ta()) && (e.links = r), ka(r = Ta()) && (e.linksWithHrefs = r))
      },
      inputs: {
        routerLinkActiveOptions: "routerLinkActiveOptions",
        routerLinkActive: "routerLinkActive"
      },
      exportAs: ["routerLinkActive"],
      features: [ao]
    }), t
  })(); class ef {
    constructor() {
      this.outlet = null, this.route = null, this.resolver = null, this.children = new nf, this.attachRef = null
    }
  }
  class nf {
    constructor() {
      this.contexts = new Map
    }
    onChildOutletCreated(t, e) {
      const n = this.getOrCreateContext(t);
      n.outlet = e, this.contexts.set(t, n)
    }
    onChildOutletDestroyed(t) {
      const e = this.getContext(t);
      e && (e.outlet = null)
    }
    onOutletDeactivated() {
      const t = this.contexts;
      return this.contexts = new Map, t
    }
    onOutletReAttached(t) {
      this.contexts = t
    }
    getOrCreateContext(t) {
      let e = this.getContext(t);
      return e || (e = new ef, this.contexts.set(t, e)), e
    }
    getContext(t) {
      return this.contexts.get(t) || null
    }
  }
  let rf = (() => {
    class t {
      constructor(t, e, n, r, s) {
        this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = s, this.activated = null, this._activatedRoute = null, this.activateEvents = new ma, this.deactivateEvents = new ma, this.name = r || "primary", t.onChildOutletCreated(this.name, this)
      }
      ngOnDestroy() {
        this.parentContexts.onChildOutletDestroyed(this.name)
      }
      ngOnInit() {
        if (!this.activated) {
          const t = this.parentContexts.getContext(this.name);
          t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
        }
      }
      get isActivated() {
        return !!this.activated
      }
      get component() {
        if (!this.activated) throw new Error("Outlet is not activated");
        return this.activated.instance
      }
      get activatedRoute() {
        if (!this.activated) throw new Error("Outlet is not activated");
        return this._activatedRoute
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
      }
      detach() {
        if (!this.activated) throw new Error("Outlet is not activated");
        this.location.detach();
        const t = this.activated;
        return this.activated = null, this._activatedRoute = null, t
      }
      attach(t, e) {
        this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView)
      }
      deactivate() {
        if (this.activated) {
          const t = this.component;
          this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
        }
      }
      activateWith(t, e) {
        if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
        this._activatedRoute = t;
        const n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
          r = this.parentContexts.getOrCreateContext(this.name).children,
          s = new sf(t, r, this.location.injector);
        this.activated = this.location.createComponent(n, this.location.length, s), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(nf), ki(Zo), ki(_o), Ai("name"), ki(Ws))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["router-outlet"]
      ],
      outputs: {
        activateEvents: "activate",
        deactivateEvents: "deactivate"
      },
      exportAs: ["outlet"]
    }), t
  })(); class sf {
    constructor(t, e, n) {
      this.route = t, this.childContexts = e, this.parent = n
    }
    get(t, e) {
      return t === $d ? this.route : t === nf ? this.childContexts : this.parent.get(t, e)
    }
  }
  class of {}
  class af {
    preload(t, e) {
      return uu(null)
    }
  }
  let lf = (() => {
    class t {
      constructor(t, e, n, r, s) {
        this.router = t, this.injector = r, this.preloadingStrategy = s, this.loader = new Gp(e, n, e => t.triggerEvent(new Gh(e)), e => t.triggerEvent(new Bh(e)))
      }
      setUpPreloading() {
        this.subscription = this.router.events.pipe(du(t => t instanceof Vh), hu(() => this.preload())).subscribe(() => {})
      }
      preload() {
        const t = this.injector.get(Kt);
        return this.processRoutes(t, this.router.config)
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
      }
      processRoutes(t, e) {
        const n = [];
        for (const r of e)
          if (r.loadChildren && !r.canLoad && r._loadedConfig) {
            const t = r._loadedConfig;
            n.push(this.processRoutes(t.module, t.routes))
          } else r.loadChildren && !r.canLoad ? n.push(this.preloadConfig(t, r)) : r.children && n.push(this.processRoutes(t, r.children));
        return H(n).pipe(B(), V(t => {}))
      }
      preloadConfig(t, e) {
        return this.preloadingStrategy.preload(e, () => this.loader.load(t.injector, e).pipe($(t => (e._loadedConfig = t, this.processRoutes(t.module, t.routes)))))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Jp), Zt(wl), Zt(Za), Zt(ci), Zt( of ))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), cf = (() => {
    class t {
      constructor(t, e, n = {}) {
        this.router = t, this.viewportScroller = e, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
      }
      init() {
        "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
      }
      createScrollEvents() {
        return this.router.events.subscribe(t => {
          t instanceof Dh ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = t.navigationTrigger, this.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof Vh && (this.lastId = t.id, this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment))
        })
      }
      consumeScrollEvents() {
        return this.router.events.subscribe(t => {
          t instanceof Yh && (t.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
        })
      }
      scheduleScrollEvent(t, e) {
        this.router.triggerEvent(new Yh(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e))
      }
      ngOnDestroy() {
        this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
      }
    }
    return t.\u0275fac = function (t) {
      Ti()
    }, t.\u0275dir = ve({
      type: t
    }), t
  })();
  const uf = new Lt("ROUTER_CONFIGURATION"), hf = new Lt("ROUTER_FORROOT_GUARD"), df = [Gl, {
    provide: wd,
    useClass: _d
  }, {
    provide: Jp,
    useFactory: function (t, e, n, r, s, i, o, a = {}, l, c) {
      const u = new Jp(null, t, e, n, r, s, i, ud(o));
      if (l && (u.urlHandlingStrategy = l), c && (u.routeReuseStrategy = c), a.errorHandler && (u.errorHandler = a.errorHandler), a.malformedUriErrorHandler && (u.malformedUriErrorHandler = a.malformedUriErrorHandler), a.enableTracing) {
        const t = Il();
        u.events.subscribe(e => {
          t.logGroup(`Router Event: ${e.constructor.name}`), t.log(e.toString()), t.log(e), t.logGroupEnd()
        })
      }
      return a.onSameUrlNavigation && (u.onSameUrlNavigation = a.onSameUrlNavigation), a.paramsInheritanceStrategy && (u.paramsInheritanceStrategy = a.paramsInheritanceStrategy), a.urlUpdateStrategy && (u.urlUpdateStrategy = a.urlUpdateStrategy), a.relativeLinkResolution && (u.relativeLinkResolution = a.relativeLinkResolution), u
    },
    deps: [wd, nf, Gl, ci, wl, Za, zp, uf, [class {}, new st],
      [class {}, new st]
    ]
  }, nf, {
    provide: $d,
    useFactory: function (t) {
      return t.routerState.root
    },
    deps: [Jp]
  }, {
    provide: wl,
    useClass: Sl
  }, lf, af, class {
    preload(t, e) {
      return e().pipe(fh(() => uu(null)))
    }
  }, {
    provide: uf,
    useValue: {
      enableTracing: !1
    }
  }];

  function pf() {
    return new pl("Router", Jp)
  }
  let ff = (() => {
    class t {
      constructor(t, e) {}
      static forRoot(e, n) {
        return {
          ngModule: t,
          providers: [df, yf(e), {
              provide: hf,
              useFactory: vf,
              deps: [
                [Jp, new st, new ot]
              ]
            }, {
              provide: uf,
              useValue: n || {}
            }, {
              provide: jl,
              useFactory: gf,
              deps: [Pl, [new rt($l), new st], uf]
            }, {
              provide: cf,
              useFactory: mf,
              deps: [Jp, Rc, uf]
            }, {
              provide: of ,
              useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : af
            }, {
              provide: pl,
              multi: !0,
              useFactory: pf
            },
            [bf, {
              provide: Oa,
              multi: !0,
              useFactory: wf,
              deps: [bf]
            }, {
              provide: Cf,
              useFactory: _f,
              deps: [bf]
            }, {
              provide: Va,
              multi: !0,
              useExisting: Cf
            }]
          ]
        }
      }
      static forChild(e) {
        return {
          ngModule: t,
          providers: [yf(e)]
        }
      }
    }
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)(Zt(hf, 8), Zt(Jp, 8))
      }
    }), t
  })();

  function mf(t, e, n) {
    return n.scrollOffset && e.setOffset(n.scrollOffset), new cf(t, e, n)
  }

  function gf(t, e, n = {}) {
    return n.useHash ? new zl(t, e) : new ql(t, e)
  }

  function vf(t) {
    if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
    return "guarded"
  }

  function yf(t) {
    return [{
      provide: ui,
      multi: !0,
      useValue: t
    }, {
      provide: zp,
      multi: !0,
      useValue: t
    }]
  }
  let bf = (() => {
    class t {
      constructor(t) {
        this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new x
      }
      appInitializer() {
        return this.injector.get(Nl, Promise.resolve(null)).then(() => {
          let t = null;
          const e = new Promise(e => t = e),
            n = this.injector.get(Jp),
            r = this.injector.get(uf);
          if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) t(!0);
          else if ("disabled" === r.initialNavigation) n.setUpLocationChangeListener(), t(!0);
          else {
            if ("enabled" !== r.initialNavigation) throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);
            n.hooks.afterPreactivation = () => this.initNavigation ? uu(null) : (this.initNavigation = !0, t(!0), this.resultOfPreactivationDone), n.initialNavigation()
          }
          return e
        })
      }
      bootstrapListener(t) {
        const e = this.injector.get(uf),
          n = this.injector.get(lf),
          r = this.injector.get(cf),
          s = this.injector.get(Jp),
          i = this.injector.get(yl);
        t === i.components[0] && (this.isLegacyEnabled(e) ? s.initialNavigation() : this.isLegacyDisabled(e) && s.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), s.resetRootComponentType(i.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
      }
      isLegacyEnabled(t) {
        return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
      }
      isLegacyDisabled(t) {
        return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(ci))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac
    }), t
  })();

  function wf(t) {
    return t.appInitializer.bind(t)
  }

  function _f(t) {
    return t.bootstrapListener.bind(t)
  }
  const Cf = new Lt("Router Initializer");
  let Sf = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.router = e, this.baseUrl = "https://api.csss-ci.com/rest/v1/authentication/"
      }
      login(t) {
        return this.http.post(this.baseUrl, t)
      }
      user() {
        return this.http.get(this.baseUrl + "user")
      }
      validity() {
        return this.http.get(this.baseUrl + "validity")
      }
      loggedIn() {
        return !!localStorage.getItem("token")
      }
      getToken() {
        return localStorage.getItem("token")
      }
      logoutUser() {
        localStorage.clear(), this.router.navigate(["/login"])
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Pu), Zt(Jp))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Ef = (() => {
    class t {
      constructor(t) {
        this.injector = t
      }
      intercept(t, e) {
        let n = this.injector.get(Sf);
        const r = t.clone({
          setHeaders: {
            Authorization: `Bearer ${n.getToken()}`
          }
        });
        return e.handle(r)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(ci))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac
    }), t
  })();
  const xf = [{
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }];
  let kf = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [ff.forRoot(xf)], ff
      ]
    }), t
  })(), Af = (() => {
    class t {
      constructor() {
        this.title = "csss"
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-root"]
      ],
      decls: 1,
      vars: 0,
      template: function (t, e) {
        1 & t && Ni(0, "router-outlet")
      },
      directives: [rf],
      styles: [""]
    }), t
  })();
  var Tf = n("Hfs6"), If = n.n(Tf);

  function Of(t, e) {
    return new w(n => {
      const r = t.length;
      if (0 === r) return void n.complete();
      const s = new Array(r);
      let i = 0,
        o = 0;
      for (let a = 0; a < r; a++) {
        const l = H(t[a]);
        let c = !1;
        n.add(l.subscribe({
          next: t => {
            c || (c = !0, o++), s[a] = t
          },
          error: t => n.error(t),
          complete: () => {
            i++, i !== r && c || (o === r && n.next(e ? e.reduce((t, e, n) => (t[e] = s[n], t), {}) : s), n.complete())
          }
        }))
      }
    })
  }
  const Pf = new Lt("NgValueAccessor"), Ff = {
    provide: Pf,
    useExisting: St(() => Nf),
    multi: !0
  };
  let Nf = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {}
      }
      writeValue(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "checked", t)
      }
      registerOnChange(t) {
        this.onChange = t
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(ko), ki(Co))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["input", "type", "checkbox", "formControlName", ""],
        ["input", "type", "checkbox", "formControl", ""],
        ["input", "type", "checkbox", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Vi("change", (function (t) {
          return e.onChange(t.target.checked)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      features: [yo([Ff])]
    }), t
  })();
  const Rf = {
    provide: Pf,
    useExisting: St(() => Df),
    multi: !0
  }, Mf = new Lt("CompositionEventMode");
  let Df = (() => {
    class t {
      constructor(t, e, n) {
        this._renderer = t, this._elementRef = e, this._compositionMode = n, this.onChange = t => {}, this.onTouched = () => {}, this._composing = !1, null == this._compositionMode && (this._compositionMode = ! function () {
          const t = Il() ? Il().getUserAgent() : "";
          return /android (\d+)/.test(t.toLowerCase())
        }())
      }
      writeValue(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t)
      }
      registerOnChange(t) {
        this.onChange = t
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
      _handleInput(t) {
        (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(t)
      }
      _compositionStart() {
        this._composing = !0
      }
      _compositionEnd(t) {
        this._composing = !1, this._compositionMode && this.onChange(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(ko), ki(Co), ki(Mf, 8))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["input", "formControlName", "", 3, "type", "checkbox"],
        ["textarea", "formControlName", ""],
        ["input", "formControl", "", 3, "type", "checkbox"],
        ["textarea", "formControl", ""],
        ["input", "ngModel", "", 3, "type", "checkbox"],
        ["textarea", "ngModel", ""],
        ["", "ngDefaultControl", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Vi("input", (function (t) {
          return e._handleInput(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))("compositionstart", (function () {
          return e._compositionStart()
        }))("compositionend", (function (t) {
          return e._compositionEnd(t.target.value)
        }))
      },
      features: [yo([Rf])]
    }), t
  })(), Vf = (() => {
    class t {
      get value() {
        return this.control ? this.control.value : null
      }
      get valid() {
        return this.control ? this.control.valid : null
      }
      get invalid() {
        return this.control ? this.control.invalid : null
      }
      get pending() {
        return this.control ? this.control.pending : null
      }
      get disabled() {
        return this.control ? this.control.disabled : null
      }
      get enabled() {
        return this.control ? this.control.enabled : null
      }
      get errors() {
        return this.control ? this.control.errors : null
      }
      get pristine() {
        return this.control ? this.control.pristine : null
      }
      get dirty() {
        return this.control ? this.control.dirty : null
      }
      get touched() {
        return this.control ? this.control.touched : null
      }
      get status() {
        return this.control ? this.control.status : null
      }
      get untouched() {
        return this.control ? this.control.untouched : null
      }
      get statusChanges() {
        return this.control ? this.control.statusChanges : null
      }
      get valueChanges() {
        return this.control ? this.control.valueChanges : null
      }
      get path() {
        return null
      }
      reset(t) {
        this.control && this.control.reset(t)
      }
      hasError(t, e) {
        return !!this.control && this.control.hasError(t, e)
      }
      getError(t, e) {
        return this.control ? this.control.getError(t, e) : null
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275dir = ve({
      type: t
    }), t
  })(), Lf = (() => {
    class t extends Vf {
      get formDirective() {
        return null
      }
      get path() {
        return null
      }
    }
    return t.\u0275fac = function (e) {
      return Uf(e || t)
    }, t.\u0275dir = ve({
      type: t,
      features: [eo]
    }), t
  })();
  const Uf = Jn(Lf);

  function jf() {
    throw new Error("unimplemented")
  }
  class Hf extends Vf {
    constructor() {
      super(...arguments), this._parent = null, this.name = null, this.valueAccessor = null, this._rawValidators = [], this._rawAsyncValidators = []
    }
    get validator() {
      return jf()
    }
    get asyncValidator() {
      return jf()
    }
  }
  class $f {
    constructor(t) {
      this._cd = t
    }
    get ngClassUntouched() {
      return !!this._cd.control && this._cd.control.untouched
    }
    get ngClassTouched() {
      return !!this._cd.control && this._cd.control.touched
    }
    get ngClassPristine() {
      return !!this._cd.control && this._cd.control.pristine
    }
    get ngClassDirty() {
      return !!this._cd.control && this._cd.control.dirty
    }
    get ngClassValid() {
      return !!this._cd.control && this._cd.control.valid
    }
    get ngClassInvalid() {
      return !!this._cd.control && this._cd.control.invalid
    }
    get ngClassPending() {
      return !!this._cd.control && this._cd.control.pending
    }
  }
  let qf = (() => {
    class t extends $f {
      constructor(t) {
        super(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Hf, 2))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "formControlName", ""],
        ["", "ngModel", ""],
        ["", "formControl", ""]
      ],
      hostVars: 14,
      hostBindings: function (t, e) {
        2 & t && Gi("ng-untouched", e.ngClassUntouched)("ng-touched", e.ngClassTouched)("ng-pristine", e.ngClassPristine)("ng-dirty", e.ngClassDirty)("ng-valid", e.ngClassValid)("ng-invalid", e.ngClassInvalid)("ng-pending", e.ngClassPending)
      },
      features: [eo]
    }), t
  })(), zf = (() => {
    class t extends $f {
      constructor(t) {
        super(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Lf, 2))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "formGroupName", ""],
        ["", "formArrayName", ""],
        ["", "ngModelGroup", ""],
        ["", "formGroup", ""],
        ["form", 3, "ngNoForm", ""],
        ["", "ngForm", ""]
      ],
      hostVars: 14,
      hostBindings: function (t, e) {
        2 & t && Gi("ng-untouched", e.ngClassUntouched)("ng-touched", e.ngClassTouched)("ng-pristine", e.ngClassPristine)("ng-dirty", e.ngClassDirty)("ng-valid", e.ngClassValid)("ng-invalid", e.ngClassInvalid)("ng-pending", e.ngClassPending)
      },
      features: [eo]
    }), t
  })();

  function Gf(t) {
    return null == t || 0 === t.length
  }
  const Bf = new Lt("NgValidators"), Wf = new Lt("NgAsyncValidators"), Zf = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; class Qf {
    static min(t) {
      return e => {
        if (Gf(e.value) || Gf(t)) return null;
        const n = parseFloat(e.value);
        return !isNaN(n) && n < t ? {
          min: {
            min: t,
            actual: e.value
          }
        } : null
      }
    }
    static max(t) {
      return e => {
        if (Gf(e.value) || Gf(t)) return null;
        const n = parseFloat(e.value);
        return !isNaN(n) && n > t ? {
          max: {
            max: t,
            actual: e.value
          }
        } : null
      }
    }
    static required(t) {
      return Gf(t.value) ? {
        required: !0
      } : null
    }
    static requiredTrue(t) {
      return !0 === t.value ? null : {
        required: !0
      }
    }
    static email(t) {
      return Gf(t.value) || Zf.test(t.value) ? null : {
        email: !0
      }
    }
    static minLength(t) {
      return e => {
        if (Gf(e.value)) return null;
        const n = e.value ? e.value.length : 0;
        return n < t ? {
          minlength: {
            requiredLength: t,
            actualLength: n
          }
        } : null
      }
    }
    static maxLength(t) {
      return e => {
        const n = e.value ? e.value.length : 0;
        return n > t ? {
          maxlength: {
            requiredLength: t,
            actualLength: n
          }
        } : null
      }
    }
    static pattern(t) {
      if (!t) return Qf.nullValidator;
      let e, n;
      return "string" == typeof t ? (n = "", "^" !== t.charAt(0) && (n += "^"), n += t, "$" !== t.charAt(t.length - 1) && (n += "$"), e = new RegExp(n)) : (n = t.toString(), e = t), t => {
        if (Gf(t.value)) return null;
        const r = t.value;
        return e.test(r) ? null : {
          pattern: {
            requiredPattern: n,
            actualValue: r
          }
        }
      }
    }
    static nullValidator(t) {
      return null
    }
    static compose(t) {
      if (!t) return null;
      const e = t.filter(Jf);
      return 0 == e.length ? null : function (t) {
        return Kf(function (t, e) {
          return e.map(e => e(t))
        }(t, e))
      }
    }
    static composeAsync(t) {
      if (!t) return null;
      const e = t.filter(Jf);
      return 0 == e.length ? null : function (t) {
        return function (...t) {
          if (1 === t.length) {
            const e = t[0];
            if (l(e)) return Of(e, null);
            if (c(e) && Object.getPrototypeOf(e) === Object.prototype) {
              const t = Object.keys(e);
              return Of(t.map(t => e[t]), t)
            }
          }
          if ("function" == typeof t[t.length - 1]) {
            const e = t.pop();
            return Of(t = 1 === t.length && l(t[0]) ? t[0] : t, null).pipe(V(t => e(...t)))
          }
          return Of(t, null)
        }(function (t, e) {
          return e.map(e => e(t))
        }(t, e).map(Yf)).pipe(V(Kf))
      }
    }
  }

  function Jf(t) {
    return null != t
  }

  function Yf(t) {
    const e = Mi(t) ? H(t) : t;
    if (!Di(e)) throw new Error("Expected validator to return Promise or Observable.");
    return e
  }

  function Kf(t) {
    let e = {};
    return t.forEach(t => {
      e = null != t ? Object.assign(Object.assign({}, e), t) : e
    }), 0 === Object.keys(e).length ? null : e
  }

  function Xf(t) {
    return t.validate ? e => t.validate(e) : t
  }

  function tm(t) {
    return t.validate ? e => t.validate(e) : t
  }
  const em = {
    provide: Pf,
    useExisting: St(() => nm),
    multi: !0
  };
  let nm = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {}
      }
      writeValue(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t)
      }
      registerOnChange(t) {
        this.onChange = e => {
          t("" == e ? null : parseFloat(e))
        }
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(ko), ki(Co))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["input", "type", "number", "formControlName", ""],
        ["input", "type", "number", "formControl", ""],
        ["input", "type", "number", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Vi("change", (function (t) {
          return e.onChange(t.target.value)
        }))("input", (function (t) {
          return e.onChange(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      features: [yo([em])]
    }), t
  })();
  const rm = {
    provide: Pf,
    useExisting: St(() => im),
    multi: !0
  };
  let sm = (() => {
    class t {
      constructor() {
        this._accessors = []
      }
      add(t, e) {
        this._accessors.push([t, e])
      }
      remove(t) {
        for (let e = this._accessors.length - 1; e >= 0; --e)
          if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1)
      }
      select(t) {
        this._accessors.forEach(e => {
          this._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value)
        })
      }
      _isSameGroup(t, e) {
        return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), im = (() => {
    class t {
      constructor(t, e, n, r) {
        this._renderer = t, this._elementRef = e, this._registry = n, this._injector = r, this.onChange = () => {}, this.onTouched = () => {}
      }
      ngOnInit() {
        this._control = this._injector.get(Hf), this._checkName(), this._registry.add(this._control, this)
      }
      ngOnDestroy() {
        this._registry.remove(this)
      }
      writeValue(t) {
        this._state = t === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state)
      }
      registerOnChange(t) {
        this._fn = t, this.onChange = () => {
          t(this.value), this._registry.select(this)
        }
      }
      fireUncheck(t) {
        this.writeValue(t)
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
      _checkName() {
        this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName)
      }
      _throwNameError() {
        throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(ko), ki(Co), ki(sm), ki(ci))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["input", "type", "radio", "formControlName", ""],
        ["input", "type", "radio", "formControl", ""],
        ["input", "type", "radio", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Vi("change", (function () {
          return e.onChange()
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [yo([rm])]
    }), t
  })();
  const om = {
    provide: Pf,
    useExisting: St(() => am),
    multi: !0
  };
  let am = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {}
      }
      writeValue(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(t))
      }
      registerOnChange(t) {
        this.onChange = e => {
          t("" == e ? null : parseFloat(e))
        }
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(ko), ki(Co))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["input", "type", "range", "formControlName", ""],
        ["input", "type", "range", "formControl", ""],
        ["input", "type", "range", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Vi("change", (function (t) {
          return e.onChange(t.target.value)
        }))("input", (function (t) {
          return e.onChange(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      features: [yo([om])]
    }), t
  })();
  const lm = '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });', cm = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });'; class um {
    static controlParentException() {
      throw new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${lm}`)
    }
    static ngModelGroupException() {
      throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${cm}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>`)
    }
    static missingFormException() {
      throw new Error(`formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ${lm}`)
    }
    static groupParentException() {
      throw new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${cm}`)
    }
    static arrayParentException() {
      throw new Error('formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });')
    }
    static disabledAttrWarning() {
      console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")
    }
    static ngModelWarning(t) {
      console.warn(`\n    It looks like you're using ngModel on the same form field as ${t}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${"formControl"===t?"FormControlDirective":"FormControlName"}#use-with-ngmodel\n    `)
    }
  }
  const hm = {
    provide: Pf,
    useExisting: St(() => pm),
    multi: !0
  };

  function dm(t, e) {
    return null == t ? `${e}` : (e && "object" == typeof e && (e = "Object"), `${t}: ${e}`.slice(0, 50))
  }
  let pm = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = t => {}, this.onTouched = () => {}, this._compareWith = vi
      }
      set compareWith(t) {
        if ("function" != typeof t) throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
        this._compareWith = t
      }
      writeValue(t) {
        this.value = t;
        const e = this._getOptionId(t);
        null == e && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1);
        const n = dm(e, t);
        this._renderer.setProperty(this._elementRef.nativeElement, "value", n)
      }
      registerOnChange(t) {
        this.onChange = e => {
          this.value = this._getOptionValue(e), t(this.value)
        }
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
      _registerOption() {
        return (this._idCounter++).toString()
      }
      _getOptionId(t) {
        for (const e of Array.from(this._optionMap.keys()))
          if (this._compareWith(this._optionMap.get(e), t)) return e;
        return null
      }
      _getOptionValue(t) {
        const e = function (t) {
          return t.split(":")[0]
        }(t);
        return this._optionMap.has(e) ? this._optionMap.get(e) : t
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(ko), ki(Co))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["select", "formControlName", "", 3, "multiple", ""],
        ["select", "formControl", "", 3, "multiple", ""],
        ["select", "ngModel", "", 3, "multiple", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Vi("change", (function (t) {
          return e.onChange(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [yo([hm])]
    }), t
  })(), fm = (() => {
    class t {
      constructor(t, e, n) {
        this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption())
      }
      set ngValue(t) {
        null != this._select && (this._select._optionMap.set(this.id, t), this._setElementValue(dm(this.id, t)), this._select.writeValue(this._select.value))
      }
      set value(t) {
        this._setElementValue(t), this._select && this._select.writeValue(this._select.value)
      }
      _setElementValue(t) {
        this._renderer.setProperty(this._element.nativeElement, "value", t)
      }
      ngOnDestroy() {
        this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Co), ki(ko), ki(pm, 9))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["option"]
      ],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    }), t
  })();
  const mm = {
    provide: Pf,
    useExisting: St(() => vm),
    multi: !0
  };

  function gm(t, e) {
    return null == t ? `${e}` : ("string" == typeof e && (e = `'${e}'`), e && "object" == typeof e && (e = "Object"), `${t}: ${e}`.slice(0, 50))
  }
  let vm = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = t => {}, this.onTouched = () => {}, this._compareWith = vi
      }
      set compareWith(t) {
        if ("function" != typeof t) throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
        this._compareWith = t
      }
      writeValue(t) {
        let e;
        if (this.value = t, Array.isArray(t)) {
          const n = t.map(t => this._getOptionId(t));
          e = (t, e) => {
            t._setSelected(n.indexOf(e.toString()) > -1)
          }
        } else e = (t, e) => {
          t._setSelected(!1)
        };
        this._optionMap.forEach(e)
      }
      registerOnChange(t) {
        this.onChange = e => {
          const n = [];
          if (e.hasOwnProperty("selectedOptions")) {
            const t = e.selectedOptions;
            for (let e = 0; e < t.length; e++) {
              const r = t.item(e),
                s = this._getOptionValue(r.value);
              n.push(s)
            }
          } else {
            const t = e.options;
            for (let e = 0; e < t.length; e++) {
              const r = t.item(e);
              if (r.selected) {
                const t = this._getOptionValue(r.value);
                n.push(t)
              }
            }
          }
          this.value = n, t(n)
        }
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
      _registerOption(t) {
        const e = (this._idCounter++).toString();
        return this._optionMap.set(e, t), e
      }
      _getOptionId(t) {
        for (const e of Array.from(this._optionMap.keys()))
          if (this._compareWith(this._optionMap.get(e)._value, t)) return e;
        return null
      }
      _getOptionValue(t) {
        const e = function (t) {
          return t.split(":")[0]
        }(t);
        return this._optionMap.has(e) ? this._optionMap.get(e)._value : t
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(ko), ki(Co))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["select", "multiple", "", "formControlName", ""],
        ["select", "multiple", "", "formControl", ""],
        ["select", "multiple", "", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Vi("change", (function (t) {
          return e.onChange(t.target)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [yo([mm])]
    }), t
  })(), ym = (() => {
    class t {
      constructor(t, e, n) {
        this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption(this))
      }
      set ngValue(t) {
        null != this._select && (this._value = t, this._setElementValue(gm(this.id, t)), this._select.writeValue(this._select.value))
      }
      set value(t) {
        this._select ? (this._value = t, this._setElementValue(gm(this.id, t)), this._select.writeValue(this._select.value)) : this._setElementValue(t)
      }
      _setElementValue(t) {
        this._renderer.setProperty(this._element.nativeElement, "value", t)
      }
      _setSelected(t) {
        this._renderer.setProperty(this._element.nativeElement, "selected", t)
      }
      ngOnDestroy() {
        this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Co), ki(ko), ki(vm, 9))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["option"]
      ],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    }), t
  })();

  function bm(t, e) {
    return [...e.path, t]
  }

  function wm(t, e) {
    t || Em(e, "Cannot find control with"), e.valueAccessor || Em(e, "No value accessor for form control with"), t.validator = Qf.compose([t.validator, e.validator]), t.asyncValidator = Qf.composeAsync([t.asyncValidator, e.asyncValidator]), e.valueAccessor.writeValue(t.value),
      function (t, e) {
        e.valueAccessor.registerOnChange(n => {
          t._pendingValue = n, t._pendingChange = !0, t._pendingDirty = !0, "change" === t.updateOn && _m(t, e)
        })
      }(t, e),
      function (t, e) {
        t.registerOnChange((t, n) => {
          e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t)
        })
      }(t, e),
      function (t, e) {
        e.valueAccessor.registerOnTouched(() => {
          t._pendingTouched = !0, "blur" === t.updateOn && t._pendingChange && _m(t, e), "submit" !== t.updateOn && t.markAsTouched()
        })
      }(t, e), e.valueAccessor.setDisabledState && t.registerOnDisabledChange(t => {
        e.valueAccessor.setDisabledState(t)
      }), e._rawValidators.forEach(e => {
        e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity())
      }), e._rawAsyncValidators.forEach(e => {
        e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity())
      })
  }

  function _m(t, e) {
    t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, {
      emitModelToViewChange: !1
    }), e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1
  }

  function Cm(t, e) {
    null == t && Em(e, "Cannot find control with"), t.validator = Qf.compose([t.validator, e.validator]), t.asyncValidator = Qf.composeAsync([t.asyncValidator, e.asyncValidator])
  }

  function Sm(t) {
    return Em(t, "There is no FormControl instance attached to form control element with")
  }

  function Em(t, e) {
    let n;
    throw n = t.path.length > 1 ? `path: '${t.path.join(" -> ")}'` : t.path[0] ? `name: '${t.path}'` : "unspecified name attribute", new Error(`${e} ${n}`)
  }

  function xm(t) {
    return null != t ? Qf.compose(t.map(Xf)) : null
  }

  function km(t) {
    return null != t ? Qf.composeAsync(t.map(tm)) : null
  }
  const Am = [Nf, am, nm, pm, vm, im];

  function Tm(t) {
    const e = Om(t) ? t.validators : t;
    return Array.isArray(e) ? xm(e) : e || null
  }

  function Im(t, e) {
    const n = Om(e) ? e.asyncValidators : t;
    return Array.isArray(n) ? km(n) : n || null
  }

  function Om(t) {
    return null != t && !Array.isArray(t) && "object" == typeof t
  }
  class Pm {
    constructor(t, e) {
      this.validator = t, this.asyncValidator = e, this._onCollectionChange = () => {}, this.pristine = !0, this.touched = !1, this._onDisabledChange = []
    }
    get parent() {
      return this._parent
    }
    get valid() {
      return "VALID" === this.status
    }
    get invalid() {
      return "INVALID" === this.status
    }
    get pending() {
      return "PENDING" == this.status
    }
    get disabled() {
      return "DISABLED" === this.status
    }
    get enabled() {
      return "DISABLED" !== this.status
    }
    get dirty() {
      return !this.pristine
    }
    get untouched() {
      return !this.touched
    }
    get updateOn() {
      return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
    }
    setValidators(t) {
      this.validator = Tm(t)
    }
    setAsyncValidators(t) {
      this.asyncValidator = Im(t)
    }
    clearValidators() {
      this.validator = null
    }
    clearAsyncValidators() {
      this.asyncValidator = null
    }
    markAsTouched(t = {}) {
      this.touched = !0, this._parent && !t.onlySelf && this._parent.markAsTouched(t)
    }
    markAllAsTouched() {
      this.markAsTouched({
        onlySelf: !0
      }), this._forEachChild(t => t.markAllAsTouched())
    }
    markAsUntouched(t = {}) {
      this.touched = !1, this._pendingTouched = !1, this._forEachChild(t => {
        t.markAsUntouched({
          onlySelf: !0
        })
      }), this._parent && !t.onlySelf && this._parent._updateTouched(t)
    }
    markAsDirty(t = {}) {
      this.pristine = !1, this._parent && !t.onlySelf && this._parent.markAsDirty(t)
    }
    markAsPristine(t = {}) {
      this.pristine = !0, this._pendingDirty = !1, this._forEachChild(t => {
        t.markAsPristine({
          onlySelf: !0
        })
      }), this._parent && !t.onlySelf && this._parent._updatePristine(t)
    }
    markAsPending(t = {}) {
      this.status = "PENDING", !1 !== t.emitEvent && this.statusChanges.emit(this.status), this._parent && !t.onlySelf && this._parent.markAsPending(t)
    }
    disable(t = {}) {
      const e = this._parentMarkedDirty(t.onlySelf);
      this.status = "DISABLED", this.errors = null, this._forEachChild(e => {
        e.disable(Object.assign(Object.assign({}, t), {
          onlySelf: !0
        }))
      }), this._updateValue(), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(Object.assign(Object.assign({}, t), {
        skipPristineCheck: e
      })), this._onDisabledChange.forEach(t => t(!0))
    }
    enable(t = {}) {
      const e = this._parentMarkedDirty(t.onlySelf);
      this.status = "VALID", this._forEachChild(e => {
        e.enable(Object.assign(Object.assign({}, t), {
          onlySelf: !0
        }))
      }), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: t.emitEvent
      }), this._updateAncestors(Object.assign(Object.assign({}, t), {
        skipPristineCheck: e
      })), this._onDisabledChange.forEach(t => t(!1))
    }
    _updateAncestors(t) {
      this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), t.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched())
    }
    setParent(t) {
      this._parent = t
    }
    updateValueAndValidity(t = {}) {
      this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), "VALID" !== this.status && "PENDING" !== this.status || this._runAsyncValidator(t.emitEvent)), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t)
    }
    _updateTreeValidity(t = {
      emitEvent: !0
    }) {
      this._forEachChild(e => e._updateTreeValidity(t)), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: t.emitEvent
      })
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? "DISABLED" : "VALID"
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null
    }
    _runAsyncValidator(t) {
      if (this.asyncValidator) {
        this.status = "PENDING";
        const e = Yf(this.asyncValidator(this));
        this._asyncValidationSubscription = e.subscribe(e => this.setErrors(e, {
          emitEvent: t
        }))
      }
    }
    _cancelExistingSubscription() {
      this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe()
    }
    setErrors(t, e = {}) {
      this.errors = t, this._updateControlsErrors(!1 !== e.emitEvent)
    }
    get(t) {
      return function (t, e, n) {
        if (null == e) return null;
        if (Array.isArray(e) || (e = e.split(".")), Array.isArray(e) && 0 === e.length) return null;
        let r = t;
        return e.forEach(t => {
          r = r instanceof Nm ? r.controls.hasOwnProperty(t) ? r.controls[t] : null : r instanceof Rm && r.at(t) || null
        }), r
      }(this, t)
    }
    getError(t, e) {
      const n = e ? this.get(e) : this;
      return n && n.errors ? n.errors[t] : null
    }
    hasError(t, e) {
      return !!this.getError(t, e)
    }
    get root() {
      let t = this;
      for (; t._parent;) t = t._parent;
      return t
    }
    _updateControlsErrors(t) {
      this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t)
    }
    _initObservables() {
      this.valueChanges = new ma, this.statusChanges = new ma
    }
    _calculateStatus() {
      return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID"
    }
    _anyControlsHaveStatus(t) {
      return this._anyControls(e => e.status === t)
    }
    _anyControlsDirty() {
      return this._anyControls(t => t.dirty)
    }
    _anyControlsTouched() {
      return this._anyControls(t => t.touched)
    }
    _updatePristine(t = {}) {
      this.pristine = !this._anyControlsDirty(), this._parent && !t.onlySelf && this._parent._updatePristine(t)
    }
    _updateTouched(t = {}) {
      this.touched = this._anyControlsTouched(), this._parent && !t.onlySelf && this._parent._updateTouched(t)
    }
    _isBoxedValue(t) {
      return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value" in t && "disabled" in t
    }
    _registerOnCollectionChange(t) {
      this._onCollectionChange = t
    }
    _setUpdateStrategy(t) {
      Om(t) && null != t.updateOn && (this._updateOn = t.updateOn)
    }
    _parentMarkedDirty(t) {
      return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty()
    }
  }
  class Fm extends Pm {
    constructor(t = null, e, n) {
      super(Tm(e), Im(n, e)), this._onChange = [], this._applyFormState(t), this._setUpdateStrategy(e), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !1
      }), this._initObservables()
    }
    setValue(t, e = {}) {
      this.value = this._pendingValue = t, this._onChange.length && !1 !== e.emitModelToViewChange && this._onChange.forEach(t => t(this.value, !1 !== e.emitViewToModelChange)), this.updateValueAndValidity(e)
    }
    patchValue(t, e = {}) {
      this.setValue(t, e)
    }
    reset(t = null, e = {}) {
      this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1
    }
    _updateValue() {}
    _anyControls(t) {
      return !1
    }
    _allControlsDisabled() {
      return this.disabled
    }
    registerOnChange(t) {
      this._onChange.push(t)
    }
    _clearChangeFns() {
      this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = () => {}
    }
    registerOnDisabledChange(t) {
      this._onDisabledChange.push(t)
    }
    _forEachChild(t) {}
    _syncPendingControls() {
      return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, {
        onlySelf: !0,
        emitModelToViewChange: !1
      }), 0))
    }
    _applyFormState(t) {
      this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({
        onlySelf: !0,
        emitEvent: !1
      }) : this.enable({
        onlySelf: !0,
        emitEvent: !1
      })) : this.value = this._pendingValue = t
    }
  }
  class Nm extends Pm {
    constructor(t, e, n) {
      super(Tm(e), Im(n, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !1
      })
    }
    registerControl(t, e) {
      return this.controls[t] ? this.controls[t] : (this.controls[t] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e)
    }
    addControl(t, e) {
      this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange()
    }
    removeControl(t) {
      this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), delete this.controls[t], this.updateValueAndValidity(), this._onCollectionChange()
    }
    setControl(t, e) {
      this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange()
    }
    contains(t) {
      return this.controls.hasOwnProperty(t) && this.controls[t].enabled
    }
    setValue(t, e = {}) {
      this._checkAllValuesPresent(t), Object.keys(t).forEach(n => {
        this._throwIfControlMissing(n), this.controls[n].setValue(t[n], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this.updateValueAndValidity(e)
    }
    patchValue(t, e = {}) {
      Object.keys(t).forEach(n => {
        this.controls[n] && this.controls[n].patchValue(t[n], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this.updateValueAndValidity(e)
    }
    reset(t = {}, e = {}) {
      this._forEachChild((n, r) => {
        n.reset(t[r], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e)
    }
    getRawValue() {
      return this._reduceChildren({}, (t, e, n) => (t[n] = e instanceof Fm ? e.value : e.getRawValue(), t))
    }
    _syncPendingControls() {
      let t = this._reduceChildren(!1, (t, e) => !!e._syncPendingControls() || t);
      return t && this.updateValueAndValidity({
        onlySelf: !0
      }), t
    }
    _throwIfControlMissing(t) {
      if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
      if (!this.controls[t]) throw new Error(`Cannot find form control with name: ${t}.`)
    }
    _forEachChild(t) {
      Object.keys(this.controls).forEach(e => t(this.controls[e], e))
    }
    _setUpControls() {
      this._forEachChild(t => {
        t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange)
      })
    }
    _updateValue() {
      this.value = this._reduceValue()
    }
    _anyControls(t) {
      let e = !1;
      return this._forEachChild((n, r) => {
        e = e || this.contains(r) && t(n)
      }), e
    }
    _reduceValue() {
      return this._reduceChildren({}, (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t))
    }
    _reduceChildren(t, e) {
      let n = t;
      return this._forEachChild((t, r) => {
        n = e(n, t, r)
      }), n
    }
    _allControlsDisabled() {
      for (const t of Object.keys(this.controls))
        if (this.controls[t].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled
    }
    _checkAllValuesPresent(t) {
      this._forEachChild((e, n) => {
        if (void 0 === t[n]) throw new Error(`Must supply a value for form control with name: '${n}'.`)
      })
    }
  }
  class Rm extends Pm {
    constructor(t, e, n) {
      super(Tm(e), Im(n, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !1
      })
    }
    at(t) {
      return this.controls[t]
    }
    push(t) {
      this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange()
    }
    insert(t, e) {
      this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity()
    }
    removeAt(t) {
      this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), this.controls.splice(t, 1), this.updateValueAndValidity()
    }
    setControl(t, e) {
      this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), this.controls.splice(t, 1), e && (this.controls.splice(t, 0, e), this._registerControl(e)), this.updateValueAndValidity(), this._onCollectionChange()
    }
    get length() {
      return this.controls.length
    }
    setValue(t, e = {}) {
      this._checkAllValuesPresent(t), t.forEach((t, n) => {
        this._throwIfControlMissing(n), this.at(n).setValue(t, {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this.updateValueAndValidity(e)
    }
    patchValue(t, e = {}) {
      t.forEach((t, n) => {
        this.at(n) && this.at(n).patchValue(t, {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this.updateValueAndValidity(e)
    }
    reset(t = [], e = {}) {
      this._forEachChild((n, r) => {
        n.reset(t[r], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e)
    }
    getRawValue() {
      return this.controls.map(t => t instanceof Fm ? t.value : t.getRawValue())
    }
    clear() {
      this.controls.length < 1 || (this._forEachChild(t => t._registerOnCollectionChange(() => {})), this.controls.splice(0), this.updateValueAndValidity())
    }
    _syncPendingControls() {
      let t = this.controls.reduce((t, e) => !!e._syncPendingControls() || t, !1);
      return t && this.updateValueAndValidity({
        onlySelf: !0
      }), t
    }
    _throwIfControlMissing(t) {
      if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
      if (!this.at(t)) throw new Error(`Cannot find form control at index ${t}`)
    }
    _forEachChild(t) {
      this.controls.forEach((e, n) => {
        t(e, n)
      })
    }
    _updateValue() {
      this.value = this.controls.filter(t => t.enabled || this.disabled).map(t => t.value)
    }
    _anyControls(t) {
      return this.controls.some(e => e.enabled && t(e))
    }
    _setUpControls() {
      this._forEachChild(t => this._registerControl(t))
    }
    _checkAllValuesPresent(t) {
      this._forEachChild((e, n) => {
        if (void 0 === t[n]) throw new Error(`Must supply a value for form control at index: ${n}.`)
      })
    }
    _allControlsDisabled() {
      for (const t of this.controls)
        if (t.enabled) return !1;
      return this.controls.length > 0 || this.disabled
    }
    _registerControl(t) {
      t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange)
    }
  }
  let Mm = (() => {
    class t extends Lf {
      ngOnInit() {
        this._checkParentType(), this.formDirective.addFormGroup(this)
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeFormGroup(this)
      }
      get control() {
        return this.formDirective.getFormGroup(this)
      }
      get path() {
        return bm(null == this.name ? this.name : this.name.toString(), this._parent)
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null
      }
      get validator() {
        return xm(this._validators)
      }
      get asyncValidator() {
        return km(this._asyncValidators)
      }
      _checkParentType() {}
    }
    return t.\u0275fac = function (e) {
      return Dm(e || t)
    }, t.\u0275dir = ve({
      type: t,
      features: [eo]
    }), t
  })();
  const Dm = Jn(Mm);
  let Vm = (() => {
    class t {}
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]
      ],
      hostAttrs: ["novalidate", ""]
    }), t
  })();
  const Lm = new Lt("NgModelWithFormControlWarning"), Um = {
    provide: Lf,
    useExisting: St(() => jm)
  };
  let jm = (() => {
    class t extends Lf {
      constructor(t, e) {
        super(), this._validators = t, this._asyncValidators = e, this.submitted = !1, this.directives = [], this.form = null, this.ngSubmit = new ma
      }
      ngOnChanges(t) {
        this._checkFormPresent(), t.hasOwnProperty("form") && (this._updateValidators(), this._updateDomValue(), this._updateRegistrations())
      }
      get formDirective() {
        return this
      }
      get control() {
        return this.form
      }
      get path() {
        return []
      }
      addControl(t) {
        const e = this.form.get(t.path);
        return wm(e, t), e.updateValueAndValidity({
          emitEvent: !1
        }), this.directives.push(t), e
      }
      getControl(t) {
        return this.form.get(t.path)
      }
      removeControl(t) {
        ! function (t, e) {
          const n = t.indexOf(e);
          n > -1 && t.splice(n, 1)
        }(this.directives, t)
      }
      addFormGroup(t) {
        const e = this.form.get(t.path);
        Cm(e, t), e.updateValueAndValidity({
          emitEvent: !1
        })
      }
      removeFormGroup(t) {}
      getFormGroup(t) {
        return this.form.get(t.path)
      }
      addFormArray(t) {
        const e = this.form.get(t.path);
        Cm(e, t), e.updateValueAndValidity({
          emitEvent: !1
        })
      }
      removeFormArray(t) {}
      getFormArray(t) {
        return this.form.get(t.path)
      }
      updateModel(t, e) {
        this.form.get(t.path).setValue(e)
      }
      onSubmit(t) {
        return this.submitted = !0, e = this.directives, this.form._syncPendingControls(), e.forEach(t => {
          const e = t.control;
          "submit" === e.updateOn && e._pendingChange && (t.viewToModelUpdate(e._pendingValue), e._pendingChange = !1)
        }), this.ngSubmit.emit(t), !1;
        var e
      }
      onReset() {
        this.resetForm()
      }
      resetForm(t) {
        this.form.reset(t), this.submitted = !1
      }
      _updateDomValue() {
        this.directives.forEach(t => {
          const e = this.form.get(t.path);
          t.control !== e && (function (t, e) {
            e.valueAccessor.registerOnChange(() => Sm(e)), e.valueAccessor.registerOnTouched(() => Sm(e)), e._rawValidators.forEach(t => {
              t.registerOnValidatorChange && t.registerOnValidatorChange(null)
            }), e._rawAsyncValidators.forEach(t => {
              t.registerOnValidatorChange && t.registerOnValidatorChange(null)
            }), t && t._clearChangeFns()
          }(t.control, t), e && wm(e, t), t.control = e)
        }), this.form._updateTreeValidity({
          emitEvent: !1
        })
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(() => this._updateDomValue()), this._oldForm && this._oldForm._registerOnCollectionChange(() => {}), this._oldForm = this.form
      }
      _updateValidators() {
        const t = xm(this._validators);
        this.form.validator = Qf.compose([this.form.validator, t]);
        const e = km(this._asyncValidators);
        this.form.asyncValidator = Qf.composeAsync([this.form.asyncValidator, e])
      }
      _checkFormPresent() {
        this.form || um.missingFormException()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Bf, 10), ki(Wf, 10))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "formGroup", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Vi("submit", (function (t) {
          return e.onSubmit(t)
        }))("reset", (function () {
          return e.onReset()
        }))
      },
      inputs: {
        form: ["formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [yo([Um]), eo, ao]
    }), t
  })();
  const Hm = {
    provide: Lf,
    useExisting: St(() => $m)
  };
  let $m = (() => {
    class t extends Mm {
      constructor(t, e, n) {
        super(), this._parent = t, this._validators = e, this._asyncValidators = n
      }
      _checkParentType() {
        Gm(this._parent) && um.groupParentException()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Lf, 13), ki(Bf, 10), ki(Wf, 10))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "formGroupName", ""]
      ],
      inputs: {
        name: ["formGroupName", "name"]
      },
      features: [yo([Hm]), eo]
    }), t
  })();
  const qm = {
    provide: Lf,
    useExisting: St(() => zm)
  };
  let zm = (() => {
    class t extends Lf {
      constructor(t, e, n) {
        super(), this._parent = t, this._validators = e, this._asyncValidators = n
      }
      ngOnInit() {
        this._checkParentType(), this.formDirective.addFormArray(this)
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeFormArray(this)
      }
      get control() {
        return this.formDirective.getFormArray(this)
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null
      }
      get path() {
        return bm(null == this.name ? this.name : this.name.toString(), this._parent)
      }
      get validator() {
        return xm(this._validators)
      }
      get asyncValidator() {
        return km(this._asyncValidators)
      }
      _checkParentType() {
        Gm(this._parent) && um.arrayParentException()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Lf, 13), ki(Bf, 10), ki(Wf, 10))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "formArrayName", ""]
      ],
      inputs: {
        name: ["formArrayName", "name"]
      },
      features: [yo([qm]), eo]
    }), t
  })();

  function Gm(t) {
    return !(t instanceof $m || t instanceof jm || t instanceof zm)
  }
  const Bm = {
    provide: Hf,
    useExisting: St(() => Wm)
  };
  let Wm = (() => {
    class t extends Hf {
      constructor(t, e, n, r, s) {
        super(), this._ngModelWarningConfig = s, this._added = !1, this.update = new ma, this._ngModelWarningSent = !1, this._parent = t, this._rawValidators = e || [], this._rawAsyncValidators = n || [], this.valueAccessor = function (t, e) {
          if (!e) return null;
          Array.isArray(e) || Em(t, "Value accessor was not provided as an array for form control with");
          let n = void 0,
            r = void 0,
            s = void 0;
          return e.forEach(e => {
            var i;
            e.constructor === Df ? n = e : (i = e, Am.some(t => i.constructor === t) ? (r && Em(t, "More than one built-in value accessor matches form control with"), r = e) : (s && Em(t, "More than one custom value accessor matches form control with"), s = e))
          }), s || r || n || (Em(t, "No valid value accessor for form control with"), null)
        }(this, r)
      }
      set isDisabled(t) {
        um.disabledAttrWarning()
      }
      ngOnChanges(e) {
        var n, r;
        this._added || this._setUpControl(),
          function (t, e) {
            if (!t.hasOwnProperty("model")) return !1;
            const n = t.model;
            return !!n.isFirstChange() || !vi(e, n.currentValue)
          }(e, this.viewModel) && ("formControlName", n = t, this, r = this._ngModelWarningConfig, ir() && "never" !== r && ((null !== r && "once" !== r || n._ngModelWarningSentOnce) && ("always" !== r || this._ngModelWarningSent) || (um.ngModelWarning("formControlName"), n._ngModelWarningSentOnce = !0, this._ngModelWarningSent = !0)), this.viewModel = this.model, this.formDirective.updateModel(this, this.model))
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this)
      }
      viewToModelUpdate(t) {
        this.viewModel = t, this.update.emit(t)
      }
      get path() {
        return bm(null == this.name ? this.name : this.name.toString(), this._parent)
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null
      }
      get validator() {
        return xm(this._rawValidators)
      }
      get asyncValidator() {
        return km(this._rawAsyncValidators)
      }
      _checkParentType() {
        !(this._parent instanceof $m) && this._parent instanceof Mm ? um.ngModelGroupException() : this._parent instanceof $m || this._parent instanceof jm || this._parent instanceof zm || um.controlParentException()
      }
      _setUpControl() {
        this._checkParentType(), this.control = this.formDirective.addControl(this), this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0), this._added = !0
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Lf, 13), ki(Bf, 10), ki(Wf, 10), ki(Pf, 10), ki(Lm, 8))
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "formControlName", ""]
      ],
      inputs: {
        isDisabled: ["disabled", "isDisabled"],
        name: ["formControlName", "name"],
        model: ["ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [yo([Bm]), eo, ao]
    }), t._ngModelWarningSentOnce = !1, t
  })();
  const Zm = {
    provide: Bf,
    useExisting: St(() => Qm),
    multi: !0
  };
  let Qm = (() => {
    class t {
      get required() {
        return this._required
      }
      set required(t) {
        this._required = null != t && !1 !== t && "false" !== `${t}`, this._onChange && this._onChange()
      }
      validate(t) {
        return this.required ? Qf.required(t) : null
      }
      registerOnValidatorChange(t) {
        this._onChange = t
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275dir = ve({
      type: t,
      selectors: [
        ["", "required", "", "formControlName", "", 3, "type", "checkbox"],
        ["", "required", "", "formControl", "", 3, "type", "checkbox"],
        ["", "required", "", "ngModel", "", 3, "type", "checkbox"]
      ],
      hostVars: 1,
      hostBindings: function (t, e) {
        2 & t && Si("required", e.required ? "" : null)
      },
      inputs: {
        required: "required"
      },
      features: [yo([Zm])]
    }), t
  })(), Jm = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      }
    }), t
  })(), Ym = (() => {
    class t {
      group(t, e = null) {
        const n = this._reduceControls(t);
        let r = null,
          s = null,
          i = void 0;
        return null != e && (function (t) {
          return void 0 !== t.asyncValidators || void 0 !== t.validators || void 0 !== t.updateOn
        }(e) ? (r = null != e.validators ? e.validators : null, s = null != e.asyncValidators ? e.asyncValidators : null, i = null != e.updateOn ? e.updateOn : void 0) : (r = null != e.validator ? e.validator : null, s = null != e.asyncValidator ? e.asyncValidator : null)), new Nm(n, {
          asyncValidators: s,
          updateOn: i,
          validators: r
        })
      }
      control(t, e, n) {
        return new Fm(t, e, n)
      }
      array(t, e, n) {
        const r = t.map(t => this._createControl(t));
        return new Rm(r, e, n)
      }
      _reduceControls(t) {
        const e = {};
        return Object.keys(t).forEach(n => {
          e[n] = this._createControl(t[n])
        }), e
      }
      _createControl(t) {
        return t instanceof Fm || t instanceof Nm || t instanceof Rm ? t : Array.isArray(t) ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null) : this.control(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), Km = (() => {
    class t {
      static withConfig(e) {
        return {
          ngModule: t,
          providers: [{
            provide: Lm,
            useValue: e.warnOnNgModelWithFormControl
          }]
        }
      }
    }
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      providers: [Ym, sm],
      imports: [Jm]
    }), t
  })();

  function Xm(t, e) {
    if (1 & t && (Pi(0, "div", 11), Ji(1), Fi()), 2 & t) {
      const t = ji();
      Er(1), Yi(t.errorMessage)
    }
  }

  function tg(t, e) {
    1 & t && (Pi(0, "small", 13), Ji(1, "E-mail obligatoire"), Fi())
  }

  function eg(t, e) {
    1 & t && (Pi(0, "small", 13), Ji(1, "E-mail invalide"), Fi())
  }

  function ng(t, e) {
    if (1 & t && (Pi(0, "div"), xi(1, tg, 2, 0, "small", 12), xi(2, eg, 2, 0, "small", 12), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ii("ngIf", null == t.loginForm.get("email").errors ? null : t.loginForm.get("email").errors.required), Er(1), Ii("ngIf", null == t.loginForm.get("email").errors ? null : t.loginForm.get("email").errors.email)
    }
  }

  function rg(t, e) {
    1 & t && (Pi(0, "small", 13), Ji(1, "Mot de passe obligatoire"), Fi())
  }

  function sg(t, e) {
    if (1 & t && (Pi(0, "div"), xi(1, rg, 2, 0, "small", 12), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ii("ngIf", null == t.loginForm.get("password").errors ? null : t.loginForm.get("password").errors.required)
    }
  }
  const ig = [{
    path: "",
    component: (() => {
      class t {
        constructor() {}
        ngOnInit() {}
      }
      return t.\u0275fac = function (e) {
        return new(e || t)
      }, t.\u0275cmp = he({
        type: t,
        selectors: [
          ["app-authentications-main"]
        ],
        decls: 4,
        vars: 0,
        consts: [
          [1, "authentication"],
          [1, "form-login"],
          [1, "col-md-auto"]
        ],
        template: function (t, e) {
          1 & t && (Pi(0, "div", 0), Pi(1, "div", 1), Pi(2, "div", 2), Ni(3, "router-outlet"), Fi(), Fi(), Fi())
        },
        directives: [rf],
        styles: [".authentication[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#5d6d00;color:#eceff1}.authentication[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.form-login[_ngcontent-%COMP%]{margin:3% auto;width:500px}"]
      }), t
    })(),
    children: [{
      path: "login",
      component: (() => {
        class t {
          constructor(t, e, n) {
            this.fb = t, this.authenticationService = e, this.router = n
          }
          ngOnInit() {
            this.createForm()
          }
          createForm() {
            this.loginForm = this.fb.group({
              email: ["", [Qf.required, Qf.email]],
              password: ["", Qf.required]
            })
          }
          onSubmit() {
            this.authenticationService.login(this.loginForm.value).subscribe(t => {
              localStorage.setItem("token", t.token), "admin" === t.role ? this.router.navigate(["/administrator/dashboard"]) : "officer" === t.role ? this.router.navigate(["/townhalls/dashboard"]) : "avec" === t.role ? this.router.navigate(["/association/dashboard"]) : "supplier" === t.role ? this.router.navigate(["/supplier/dashboard"]) : "banker" === t.role && this.router.navigate(["/bank/dashboard"])
            }, t => {
              t instanceof Iu && 404 === t.status && (this.errorMessage = "E-mail ou mot de passe incorrect")
            })
          }
        }
        return t.\u0275fac = function (e) {
          return new(e || t)(ki(Ym), ki(Sf), ki(Jp))
        }, t.\u0275cmp = he({
          type: t,
          selectors: [
            ["app-authentications-login"]
          ],
          decls: 17,
          vars: 9,
          consts: [
            [1, "text-center"],
            ["src", "../../../assets/images/logo.png", "alt", "logo CSSS", 1, "logo"],
            ["class", "alert alert-danger", 4, "ngIf"],
            [3, "formGroup", "ngSubmit"],
            [1, "form-group"],
            ["for", "email"],
            ["type", "email", "name", "email", "formControlName", "email", "id", "email", "placeholder", "ADRESSE E-MAIL", 1, "form-control"],
            [4, "ngIf"],
            ["for", "password"],
            ["type", "password", "name", "password", "formControlName", "password", "id", "password", "placeholder", "MOT DE PASSE", 1, "form-control"],
            ["type", "submit", 1, "button-login", 3, "disabled"],
            [1, "alert", "alert-danger"],
            ["class", "text-danger", 4, "ngIf"],
            [1, "text-danger"]
          ],
          template: function (t, e) {
            1 & t && (Pi(0, "div", 0), Ni(1, "img", 1), Fi(), xi(2, Xm, 2, 1, "div", 2), Pi(3, "form", 3), Vi("ngSubmit", (function () {
              return e.onSubmit()
            })), Pi(4, "div", 4), Pi(5, "label", 5), Ji(6, "Adresse e-mail :"), Fi(), Ni(7, "input", 6), xi(8, ng, 3, 2, "div", 7), Fi(), Pi(9, "div", 4), Pi(10, "label", 8), Ji(11, "Mot de passe :"), Fi(), Ni(12, "input", 9), xi(13, sg, 2, 1, "div", 7), Fi(), Pi(14, "div", 4), Pi(15, "button", 10), Ji(16, " CONNEXION "), Fi(), Fi(), Fi()), 2 & t && (Er(2), Ii("ngIf", e.errorMessage), Er(1), Ii("formGroup", e.loginForm), Er(4), Gi("is-invalid", e.loginForm.get("email").invalid && e.loginForm.get("email").touched), Er(1), Ii("ngIf", e.loginForm.get("email").invalid && e.loginForm.get("email").touched), Er(4), Gi("is-invalid", e.loginForm.get("password").invalid && e.loginForm.get("password").touched), Er(1), Ii("ngIf", e.loginForm.get("password").invalid && e.loginForm.get("password").touched), Er(2), Ii("disabled", !e.loginForm.valid))
          },
          directives: [Tc, Vm, zf, jm, Df, qf, Wm],
          styles: ["h1[_ngcontent-%COMP%]{margin-bottom:20px}.button-login[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{text-align:center}.button-login[_ngcontent-%COMP%]{display:block;border-radius:0;border:none;background-color:#d4e157;color:#fff;width:100%;padding:10px 0;font-weight:700}"]
        }), t
      })()
    }]
  }];
  let og = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [ff.forRoot(ig)], ff
      ]
    }), t
  })(), ag = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Bu, Km, og]
      ]
    }), t
  })();
  const lg = function () {
    return {}
  };
  let cg = (() => {
    class t {
      constructor(t) {
        this.authService = t, this.navbarOpen = !1
      }
      ngOnInit() {
        this.getUser()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          t instanceof Iu && 401 === t.status && this.authService.logoutUser()
        })
      }
      sidebar() {
        this.status = !this.status
      }
      toggleNavbar() {
        this.navbarOpen = !this.navbarOpen
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Sf))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-admins-main"]
      ],
      decls: 60,
      vars: 4,
      consts: [
        [1, "header"],
        [1, "toggle-btn", 3, "click"],
        ["id", "sidebar", 3, "ngClass"],
        [1, "float-right", "btn-close", 3, "click"],
        [1, "sidebar-sticky"],
        [1, "nav", "flex-column"],
        [1, "nav-item"],
        ["routerLink", "/administrator/dashboard", "routerLinkActive", "active", 1, "nav-link", 3, "ngClass"],
        ["routerLink", "/administrator/banks", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/administrator/townhalls", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/administrator/associations", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/administrator/households", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "users"],
        ["routerLink", "/administrator/needs", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "bar-chart-2"],
        ["routerLink", "/administrator/suppliers", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/administrator/sensitization/sms", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "layers"],
        [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
        ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
        ["data-feather", "plus-circle"],
        [1, "nav", "flex-column", "mb-2"],
        ["href", "#", 1, "nav-link"],
        ["data-feather", "file-text"],
        ["routerLink", "/administrator/administrators", "routerLinkActive", "active", 1, "nav-link"],
        [1, "nav-link", 3, "click"],
        ["id", "main", 3, "ngClass"],
        [1, "container-fluid"],
        ["role", "main"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "header", 0), Pi(1, "div", 1), Vi("click", (function () {
          return e.sidebar()
        })), Ni(2, "span"), Ni(3, "span"), Ni(4, "span"), Fi(), Fi(), Pi(5, "div", 2), Pi(6, "button", 3), Vi("click", (function () {
          return e.sidebar()
        })), Ji(7, "X"), Fi(), Pi(8, "nav"), Pi(9, "div", 4), Pi(10, "ul", 5), Pi(11, "li", 6), Pi(12, "a", 7), Ji(13, " Tableau de Bord "), Fi(), Fi(), Pi(14, "li", 6), Pi(15, "a", 8), Ji(16, " Banques "), Fi(), Fi(), Pi(17, "li", 6), Pi(18, "a", 9), Ji(19, " Municipalit\xe9 "), Fi(), Fi(), Pi(20, "li", 6), Pi(21, "a", 10), Ji(22, " AVEC "), Fi(), Fi(), Pi(23, "li", 6), Pi(24, "a", 11), Ni(25, "span", 12), Ji(26, " M\xe9nages "), Fi(), Fi(), Pi(27, "li", 6), Pi(28, "a", 13), Ni(29, "span", 14), Ji(30, " Appels d'offre "), Fi(), Fi(), Pi(31, "li", 6), Pi(32, "a", 15), Ni(33, "span", 14), Ji(34, " Fournisseurs "), Fi(), Fi(), Pi(35, "li", 6), Pi(36, "a", 16), Ni(37, "span", 17), Ji(38, " Sensibilisations "), Fi(), Fi(), Fi(), Pi(39, "h6", 18), Pi(40, "span"), Ji(41, "Param\xe8trages"), Fi(), Pi(42, "a", 19), Ni(43, "span", 20), Fi(), Fi(), Pi(44, "ul", 21), Pi(45, "li", 6), Pi(46, "a", 22), Ni(47, "span", 23), Ji(48, " Changer de mot de passe "), Fi(), Fi(), Pi(49, "li", 6), Pi(50, "a", 24), Ni(51, "span", 23), Ji(52, " Administrateurs "), Fi(), Fi(), Pi(53, "li", 6), Pi(54, "a", 25), Vi("click", (function () {
          return e.authService.logoutUser()
        })), Ji(55, "D\xe9connexion"), Fi(), Fi(), Fi(), Fi(), Fi(), Fi(), Pi(56, "div", 26), Pi(57, "div", 27), Pi(58, "main", 28), Ni(59, "router-outlet"), Fi(), Fi(), Fi()), 2 & t && (Er(5), Ii("ngClass", e.status ? "sidebar-close" : "sidebar-open"), Er(7), Ii("ngClass", function (t, e, n) {
          const r = Ke() + 3,
            s = ze();
          return s[r] === Cr ? _i(s, r, e()) : function (t, e) {
            return t[e]
          }(s, r)
        }(0, lg)), Er(44), Ii("ngClass", e.status ? "main-yes" : "main-no"))
      },
      directives: [Ec, Kp, tf, rf],
      styles: [".logo[_ngcontent-%COMP%]{width:50%;margin-bottom:20px}"]
    }), t
  })(), ug = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/townHalls/"
      }
      getTownhalls() {
        return this.http.get(this.baseUrl)
      }
      getTownhall(t) {
        return this.http.get(this.baseUrl + t)
      }
      setTownhall(t) {
        return this.http.post(this.baseUrl, t)
      }
      putTownhall(t) {
        return this.http.put(this.baseUrl, t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Pu))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), hg = (() => {
    class t {
      constructor(t) {
        this.http = t, this.url = "https://api.csss-ci.com/rest/v1/associations/"
      }
      gets() {
        return this.http.get(this.url)
      }
      getAssociation(t) {
        return this.http.get(this.url + t)
      }
      setAssociation(t) {
        return this.http.post(this.url, t)
      }
      putAssociation(t) {
        return this.http.put(this.url, t)
      }
      town() {
        return this.http.get(this.url + "town")
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Pu))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), dg = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/households/"
      }
      getHouseHolds() {
        return this.http.get(this.baseUrl)
      }
      getHouseHold(t) {
        return this.http.get(this.baseUrl + t)
      }
      setHouseHold(t) {
        return this.http.post(this.baseUrl, t)
      }
      town() {
        return this.http.get(this.baseUrl + "town")
      }
      association() {
        return this.http.get(this.baseUrl + "association")
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Pu))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), pg = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/suppliers/"
      }
      getSuppliers() {
        return this.http.get(this.baseUrl)
      }
      getSupplier(t) {
        return this.http.get(this.baseUrl + t)
      }
      setSupplier(t) {
        return this.http.post(this.baseUrl, t)
      }
      getDomains() {
        return this.http.get(this.baseUrl + "services")
      }
      town() {
        return this.http.get(this.baseUrl + "town")
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Pu))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), fg = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/needs/"
      }
      get(t) {
        return this.http.get(this.baseUrl + t)
      }
      gets() {
        return this.http.get(this.baseUrl)
      }
      set(t) {
        return this.http.post(this.baseUrl, t)
      }
      put(t) {
        return this.http.put(this.baseUrl, t)
      }
      town() {
        return this.http.get(this.baseUrl + "town")
      }
      association() {
        return this.http.get(this.baseUrl + "association")
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Pu))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), mg = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/complaints/"
      }
      gets() {
        return this.http.get(this.baseUrl)
      }
      get(t) {
        return this.http.get(this.baseUrl + t)
      }
      set(t) {
        return this.http.post(this.baseUrl, t)
      }
      put(t) {
        return this.http.put(this.baseUrl, t)
      }
      town() {
        return this.http.get(this.baseUrl + "town")
      }
      association() {
        return this.http.get(this.baseUrl + "association")
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Pu))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function gg(t, e) {
    if (1 & t && (Pi(0, "p", 15), Pi(1, "span"), Ji(2, "Salut, "), Pi(3, "b"), Ji(4), Fi(), Fi(), Pi(5, "span"), Ji(6, "Voici ce qui se passe aujourd'hui."), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(4), Yi(t.user.name)
    }
  }

  function vg(t, e) {
    if (1 & t && (Pi(0, "div", 16), Pi(1, "p", 17), Ji(2, "Municipalit\xe9s"), Fi(), Pi(3, "p", 18), Ji(4), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(4), Yi(t.townhalls.length)
    }
  }

  function yg(t, e) {
    if (1 & t && (Pi(0, "div", 16), Pi(1, "p", 17), Ji(2, "A.V.E.Cs"), Fi(), Pi(3, "p", 18), Ji(4), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(4), Yi(t.associations.length)
    }
  }

  function bg(t, e) {
    if (1 & t && (Pi(0, "div", 16), Pi(1, "p", 17), Ji(2, "M\xe9nages"), Fi(), Pi(3, "p", 18), Ji(4), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(4), Yi(t.households.length)
    }
  }

  function wg(t, e) {
    if (1 & t && (Pi(0, "p", 18), Ji(1), Fi()), 2 & t) {
      const t = ji(2);
      Er(1), Yi(t.suppliers.length)
    }
  }

  function _g(t, e) {
    1 & t && (Pi(0, "p", 18), Ji(1, "0"), Fi())
  }

  function Cg(t, e) {
    if (1 & t && (Pi(0, "div", 16), Pi(1, "p", 17), Ji(2, "Fournisseurs"), Fi(), xi(3, wg, 2, 1, "p", 19), xi(4, _g, 2, 0, "p", 19), Fi()), 2 & t) {
      const t = ji();
      Er(3), Ii("ngIf", t.suppliers), Er(1), Ii("ngIf", !t.suppliers)
    }
  }

  function Sg(t, e) {
    if (1 & t && (Pi(0, "div", 14), Pi(1, "p", 20), Ji(2), Ni(3, "br"), Ji(4, " Besoins exprim\xe9s "), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(2), Ki("", t.needs.length, " ")
    }
  }

  function Eg(t, e) {
    if (1 & t && (Pi(0, "p", 21), Ji(1), Ni(2, "br"), Ji(3, " Plaintes "), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ki(" ", t.complaints.length, " ")
    }
  }
  let xg = (() => {
    class t {
      constructor(t, e, n, r, s, i, o, a) {
        this.authService = t, this.townhallsService = e, this.associationsService = n, this.householdsService = r, this.suppliersService = s, this.needsService = i, this.complaintsService = o, this.router = a
      }
      ngOnInit() {
        this.getUser(), this.getTownHalls(), this.getAssociations(), this.getHouseholds(), this.getSuppliers(), this.getNeeds(), this.getComplaints()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          t instanceof Iu && 401 === t.status && this.router.navigate(["/login"])
        })
      }
      getComplaints() {
        this.complaintsService.gets().subscribe(t => this.complaints = t)
      }
      getTownHalls() {
        this.townhallsService.getTownhalls().subscribe(t => this.townhalls = t)
      }
      getAssociations() {
        this.associationsService.gets().subscribe(t => this.associations = t)
      }
      getHouseholds() {
        this.householdsService.getHouseHolds().subscribe(t => this.households = t)
      }
      getSuppliers() {
        this.suppliersService.getSuppliers().subscribe(t => this.suppliers = t)
      }
      getNeeds() {
        this.needsService.gets().subscribe(t => this.needs = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Sf), ki(ug), ki(hg), ki(dg), ki(pg), ki(fg), ki(mg), ki(Jp))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-admins-dashboard"]
      ],
      decls: 43,
      vars: 7,
      consts: [
        ["class", "connected", 4, "ngIf"],
        [1, "row", "enumeration"],
        [1, "col-lg-3"],
        ["class", "cadre", 4, "ngIf"],
        [1, "needs"],
        [1, "row"],
        [1, "col-lg-8"],
        ["class", "col-lg-4", 4, "ngIf"],
        [1, "col-lg-5"],
        ["routerLink", "/administrator/needs", 1, "bouton"],
        [1, "col-lg-4", "text-center"],
        ["class", "big-title-green", 4, "ngIf"],
        [1, "text-center"],
        ["routerLink", "/administrator/complaints"],
        [1, "col-lg-4"],
        [1, "connected"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        ["class", "value", 4, "ngIf"],
        [1, "big-title"],
        [1, "big-title-green"]
      ],
      template: function (t, e) {
        1 & t && (xi(0, gg, 7, 1, "p", 0), Pi(1, "section", 1), Pi(2, "div", 2), xi(3, vg, 5, 1, "div", 3), Fi(), Pi(4, "div", 2), xi(5, yg, 5, 1, "div", 3), Fi(), Pi(6, "div", 2), xi(7, bg, 5, 1, "div", 3), Fi(), Pi(8, "div", 2), xi(9, Cg, 5, 2, "div", 3), Fi(), Fi(), Pi(10, "section", 4), Pi(11, "div", 5), Pi(12, "div", 6), Pi(13, "h2"), Ji(14, "Expressions des besoins"), Fi(), Pi(15, "div", 5), xi(16, Sg, 5, 1, "div", 7), Pi(17, "div", 8), Pi(18, "p"), Ji(19, " Besoins Trait\xe9s: 0"), Fi(), Pi(20, "p"), Ji(21, " Sans r\xe9actions: 1"), Fi(), Fi(), Pi(22, "div", 2), Pi(23, "a", 9), Ji(24, "Voir plus"), Fi(), Fi(), Fi(), Fi(), Pi(25, "div", 10), xi(26, Eg, 4, 1, "p", 11), Pi(27, "p", 12), Pi(28, "a", 13), Ji(29, "Voir toutes les plaintes"), Fi(), Fi(), Fi(), Fi(), Fi(), Pi(30, "section", 4), Pi(31, "h2"), Ji(32, "Bilan financiers"), Fi(), Pi(33, "div", 5), Pi(34, "div", 14), Pi(35, "p"), Ji(36, " Besoins exprim\xe9s: 45"), Fi(), Fi(), Pi(37, "div", 14), Pi(38, "p"), Ji(39, " Besoins Trait\xe9s: 45"), Fi(), Fi(), Pi(40, "div", 14), Pi(41, "p"), Ji(42, " Nombre de plaintes: 86"), Fi(), Fi(), Fi(), Fi()), 2 & t && (Ii("ngIf", e.user), Er(3), Ii("ngIf", e.townhalls), Er(2), Ii("ngIf", e.associations), Er(2), Ii("ngIf", e.households), Er(2), Ii("ngIf", e.suppliers), Er(7), Ii("ngIf", e.needs), Er(10), Ii("ngIf", e.complaints))
      },
      directives: [Tc, Kp],
      styles: [".enumeration[_ngcontent-%COMP%]{text-align:center;font-size:16px;margin-bottom:40px}.enumeration[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Oswald,sans-serif;display:block;text-align:center;color:#827717;font-weight:600}.enumeration[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-family:Roboto Condensed,sans-serif;font-weight:600;font-size:21px;color:#000}.enumeration[_ngcontent-%COMP%]   .cadre[_ngcontent-%COMP%]{border:1px solid #e0e0e0;padding:20px}"]
    }), t
  })(), kg = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/admins/"
      }
      setAdmin(t) {
        return this.http.post(this.baseUrl, t)
      }
      getAdmins() {
        return this.http.get(this.baseUrl)
      }
      getAdmin(t) {
        return this.http.get(this.baseUrl + t)
      }
      putAdmin(t) {
        return this.http.get(this.baseUrl + t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Pu))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Ag = (() => {
    class t {
      constructor(t, e, n) {
        this.adminsService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.adminForm = this.fb.group({
          admin: ["", Qf.required],
          email: ["", [Qf.required, Qf.email]]
        })
      }
      onSubmit() {
        this.adminsService.setAdmin(this.adminForm.value).subscribe(t => {
          this.router.navigate(["/adminstrator/list"])
        }, t => {
          this.errorMessage = t.message
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(kg), ki(Ym), ki(Jp))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-admins-add"]
      ],
      decls: 18,
      vars: 2,
      consts: [
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "admin"],
        ["type", "text", "formControlName", "admin", "id", "admin", "required", "", 1, "form-control"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "id", "email", "required", "", 1, "form-control"],
        ["type", "submit", 1, "button", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "Administrateur"), Fi(), Ni(2, "hr"), Pi(3, "div", 0), Pi(4, "h2"), Ji(5, "Ajouter Administrateur"), Fi(), Pi(6, "form", 1), Vi("ngSubmit", (function () {
          return e.onSubmit()
        })), Pi(7, "div", 2), Pi(8, "label", 3), Ji(9, "Nom et prenoms"), Fi(), Ni(10, "input", 4), Fi(), Pi(11, "div", 2), Pi(12, "label", 5), Ji(13, "Adresse e-mail"), Fi(), Ni(14, "input", 6), Fi(), Pi(15, "div", 2), Pi(16, "button", 7), Ji(17, "ENREGISTRER"), Fi(), Fi(), Fi(), Fi()), 2 & t && (Er(6), Ii("formGroup", e.adminForm), Er(10), Ii("disabled", !e.adminForm.valid))
      },
      directives: [Vm, zf, jm, Df, qf, Wm, Qm],
      styles: [""]
    }), t
  })();

  function Tg(t, e) {
    if (1 & t && (Pi(0, "div", 9), Ji(1), Fi()), 2 & t) {
      const t = ji();
      Er(1), Yi(t.errorMessage)
    }
  }

  function Ig(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.admin), Er(2), Yi(t.email)
    }
  }
  let Og = (() => {
    class t {
      constructor(t) {
        this.adminsService = t
      }
      ngOnInit() {
        this.getAdmins()
      }
      getAdmins() {
        this.adminsService.getAdmins().subscribe(t => {
          this.admins = t
        }, t => {
          this.errorMessage = t.message
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(kg))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-admins-list"]
      ],
      decls: 21,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/add", 1, "bouton", "float-right"],
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/administrator/dashboard"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        ["class", "alert alert-danger", 4, "ngIf"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [1, "alert", "alert-danger"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "Administrateurs"), Fi(), Pi(2, "h3"), Pi(3, "a", 0), Ji(4, "AJOUTER"), Fi(), Fi(), Pi(5, "nav", 1), Pi(6, "ol", 2), Pi(7, "li", 3), Pi(8, "a", 4), Ji(9, "Tableau de bord"), Fi(), Fi(), Pi(10, "li", 5), Ji(11, "Administrateurs"), Fi(), Fi(), Fi(), xi(12, Tg, 2, 1, "div", 6), Pi(13, "table", 7), Pi(14, "thead"), Pi(15, "th"), Ji(16, "Admin"), Fi(), Pi(17, "th"), Ji(18, "E-mail"), Fi(), Fi(), Pi(19, "tbody"), xi(20, Ig, 5, 2, "tr", 8), Fi(), Fi()), 2 & t && (Er(12), Ii("ngIf", e.errorMessage), Er(8), Ii("ngForOf", e.admins))
      },
      directives: [Kp, Tc, kc],
      styles: [""]
    }), t
  })(), Pg = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-sensitization-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "Sensibilisations"), Fi(), Ni(2, "router-outlet"))
      },
      directives: [rf],
      styles: [""]
    }), t
  })(), Fg = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-sms-main"]
      ],
      decls: 1,
      vars: 0,
      template: function (t, e) {
        1 & t && Ni(0, "router-outlet")
      },
      directives: [rf],
      styles: [""]
    }), t
  })(), Ng = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/sensitizations"
      }
      set(t) {
        return this.http.post(this.baseUrl, t)
      }
      setAll(t) {
        return this.http.post(this.baseUrl + "/all", t)
      }
      setChiefs(t) {
        return this.http.post(this.baseUrl + "/chiefs", t)
      }
      setAssociation(t) {
        return this.http.post(this.baseUrl + "/association", t)
      }
      gets() {
        return this.http.get(this.baseUrl)
      }
      get(t) {
        return this.http.get(this.baseUrl + t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Pu))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function Rg(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.message), Er(2), Yi(t.recipient), Er(2), Yi(t.messageDate)
    }
  }
  let Mg = (() => {
    class t {
      constructor(t) {
        this.messagesService = t
      }
      ngOnInit() {
        this.getSms()
      }
      getSms() {
        this.messagesService.gets().subscribe(t => {
          this.messages = t
        }, t => {
          console.error()
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Ng))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-sms-list"]
      ],
      decls: 16,
      vars: 1,
      consts: [
        ["routerLink", "/administrator/sensitization/voice/send", 1, "bouton", "float-right"],
        ["routerLink", "/administrator/sensitization/sms/send", 1, "bouton", "float-right"],
        ["routerLink", "/administrator/sensitization/sms/association", 1, "bouton", "float-right"],
        ["routerLink", "/administrator/sensitization/sms/everyone", 1, "bouton", "float-right"],
        ["routerLink", "/administrator/sensitization/sms/chiefs", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Ji(1, " SMS envoy\xe9s\n"), Fi(), Pi(2, "div"), Pi(3, "a", 0), Ji(4, "Envoyer Message Vocal"), Fi(), Pi(5, "a", 1), Ji(6, "Envoyer sms"), Fi(), Pi(7, "a", 2), Ji(8, "Envoyer sms une AVEC"), Fi(), Pi(9, "a", 3), Ji(10, "Envoyer sms \xe0 toutes les AVECs"), Fi(), Pi(11, "a", 4), Ji(12, "Envoyer SMS aux presidents d'AVEC"), Fi(), Fi(), Pi(13, "table", 5), Pi(14, "tbody"), xi(15, Rg, 7, 3, "tr", 6), Fi(), Fi()), 2 & t && (Er(15), Ii("ngForOf", e.messages))
      },
      directives: [Kp, kc],
      styles: [""]
    }), t
  })();

  function Dg(t, e) {
    if (1 & t && (Pi(0, "div", 10), Ji(1), pa(2, "json"), Fi()), 2 & t) {
      const t = ji();
      Er(1), Yi(fa(2, 1, t.errorMessage))
    }
  }

  function Vg(t, e) {
    if (1 & t && (Pi(0, "div", 11), Ji(1), Fi()), 2 & t) {
      const t = ji();
      Er(1), Yi(t.successMessage)
    }
  }
  let Lg = (() => {
    class t {
      constructor(t, e) {
        this.messagesService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", Qf.required],
          recipient: ["", [Qf.required, Qf.minLength(11)]]
        })
      }
      onSubmit() {
        this.messagesService.set(this.smsForm.value).subscribe(t => {
          this.successMessage = "Message envoy\xe9 avec succ\xe8s"
        }, t => {
          this.errorMessage = "Une erreur s'est produite, message non envoy\xe9"
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Ng), ki(Ym))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-sms-send"]
      ],
      decls: 19,
      vars: 4,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        ["class", "alert alert-danger", 4, "ngIf"],
        ["class", "alert alert-success", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "recipient"],
        ["type", "text", "name", "recipient", "formControlName", "recipient", "id", "recipient", 1, "form-control"],
        ["name", "message", "formControlName", "message", "id", "message", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"],
        [1, "alert", "alert-danger"],
        [1, "alert", "alert-success"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Pi(1, "a", 0), Ji(2, "Retour"), Fi(), Ji(3, " Envoi de SMS\n"), Fi(), Pi(4, "div", 1), xi(5, Dg, 3, 3, "div", 2), xi(6, Vg, 2, 1, "div", 3), Pi(7, "form", 4), Vi("ngSubmit", (function () {
          return e.onSubmit()
        })), Pi(8, "div", 5), Pi(9, "label", 6), Ji(10, "Destinataires"), Fi(), Ni(11, "input", 7), Fi(), Pi(12, "div", 5), Pi(13, "label", 6), Ji(14, "Message"), Fi(), Ni(15, "textarea", 8), Fi(), Pi(16, "div", 5), Pi(17, "button", 9), Ji(18, "Envoyer"), Fi(), Fi(), Fi(), Fi()), 2 & t && (Er(5), Ii("ngIf", e.errorMessage), Er(1), Ii("ngIf", e.successMessage), Er(1), Ii("formGroup", e.smsForm), Er(10), Ii("disabled", !e.smsForm.valid))
      },
      directives: [Kp, Tc, Vm, zf, jm, Df, qf, Wm],
      pipes: [Fc],
      styles: [""]
    }), t
  })(), Ug = (() => {
    class t {
      constructor(t, e, n) {
        this.messagesService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", Qf.required]
        })
      }
      onSubmit() {
        this.messagesService.setAll(this.smsForm.value).subscribe(t => {
          this.router.navigate(["/administrator/sensitization/sms"])
        }, t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Ng), ki(Ym), ki(Jp))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-sms-everyone"]
      ],
      decls: 13,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "message"],
        ["name", "message", "formControlName", "message", "id", "message", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Pi(1, "a", 0), Ji(2, "Retour"), Fi(), Ji(3, " Envoi de SMS \xe0 toutes les AVEC\n"), Fi(), Pi(4, "div", 1), Pi(5, "form", 2), Vi("ngSubmit", (function () {
          return e.onSubmit()
        })), Pi(6, "div", 3), Pi(7, "label", 4), Ji(8, "Message"), Fi(), Ni(9, "textarea", 5), Fi(), Pi(10, "div", 3), Pi(11, "button", 6), Ji(12, "Envoyer"), Fi(), Fi(), Fi(), Fi()), 2 & t && (Er(5), Ii("formGroup", e.smsForm), Er(6), Ii("disabled", !e.smsForm.valid))
      },
      directives: [Kp, Vm, zf, jm, Df, qf, Wm],
      styles: [""]
    }), t
  })(), jg = (() => {
    class t {
      constructor(t, e, n) {
        this.messagesService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", Qf.required]
        })
      }
      onSubmit() {
        this.messagesService.setChiefs(this.smsForm.value).subscribe(t => {
          this.router.navigate(["/administrator/sensitization/sms"])
        }, t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Ng), ki(Ym), ki(Jp))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-sms-chiefs"]
      ],
      decls: 13,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "message"],
        ["name", "message", "formControlName", "message", "id", "message", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Pi(1, "a", 0), Ji(2, "Retour"), Fi(), Ji(3, " Envoi de SMS aux pr\xe9sidents d'AVEC\n"), Fi(), Pi(4, "div", 1), Pi(5, "form", 2), Vi("ngSubmit", (function () {
          return e.onSubmit()
        })), Pi(6, "div", 3), Pi(7, "label", 4), Ji(8, "Message"), Fi(), Ni(9, "textarea", 5), Fi(), Pi(10, "div", 3), Pi(11, "button", 6), Ji(12, "Envoyer"), Fi(), Fi(), Fi(), Fi()), 2 & t && (Er(5), Ii("formGroup", e.smsForm), Er(6), Ii("disabled", !e.smsForm.valid))
      },
      directives: [Kp, Vm, zf, jm, Df, qf, Wm],
      styles: [""]
    }), t
  })();

  function Hg(t, e) {
    if (1 & t && (Pi(0, "option", 10), Ji(1), Fi()), 2 & t) {
      const t = e.$implicit;
      Ii("value", t.idassociation), Er(1), Yi(t.association)
    }
  }
  let $g = (() => {
    class t {
      constructor(t, e, n, r) {
        this.messagesService = t, this.associationsService = e, this.fb = n, this.router = r
      }
      ngOnInit() {
        this.createForm(), this.getAssociations()
      }
      getAssociations() {
        this.associationsService.gets().subscribe(t => {
          this.associations = t
        }, t => {
          console.log(t)
        })
      }
      createForm() {
        this.smsForm = this.fb.group({
          recipient: ["", Qf.required],
          message: ["", Qf.required]
        })
      }
      onSubmit() {
        this.messagesService.setAssociation(this.smsForm.value).subscribe(t => {
          this.router.navigate(["/administrator/sensitization/sms"])
        }, t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Ng), ki(hg), ki(Ym), ki(Jp))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-sms-association"]
      ],
      decls: 20,
      vars: 3,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "message"],
        ["name", "recipient", "id", "recipient", "formControlName", "recipient", 1, "form-control"],
        ["value", ""],
        [3, "value", 4, "ngFor", "ngForOf"],
        ["name", "message", "formControlName", "message", "id", "message", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"],
        [3, "value"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Pi(1, "a", 0), Ji(2, "Retour"), Fi(), Ji(3, " Envoi de SMS \xe0 un AVEC\n"), Fi(), Pi(4, "div", 1), Pi(5, "form", 2), Vi("ngSubmit", (function () {
          return e.onSubmit()
        })), Pi(6, "div", 3), Pi(7, "label", 4), Ji(8, "AVEC"), Fi(), Pi(9, "select", 5), Pi(10, "option", 6), Ji(11, "Choisir"), Fi(), xi(12, Hg, 2, 2, "option", 7), Fi(), Fi(), Pi(13, "div", 3), Pi(14, "label", 4), Ji(15, "Message"), Fi(), Ni(16, "textarea", 8), Fi(), Pi(17, "div", 3), Pi(18, "button", 9), Ji(19, "Envoyer"), Fi(), Fi(), Fi(), Fi()), 2 & t && (Er(5), Ii("formGroup", e.smsForm), Er(7), Ii("ngForOf", e.associations), Er(6), Ii("disabled", !e.smsForm.valid))
      },
      directives: [Kp, Vm, zf, jm, pm, qf, Wm, fm, ym, kc, Df],
      styles: [""]
    }), t
  })();

  function qg(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Pi(6, "a", 3), Ji(7, "Voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.association), Er(2), Yi(t.chief), Er(2), Hi("routerLink", "/administrator/associations/view/", t.idassociation, "")
    }
  }
  let zg = (() => {
    class t {
      constructor(t) {
        this.associationsService = t
      }
      ngOnInit() {
        this.getAssociations()
      }
      getAssociations() {
        this.associationsService.gets().subscribe(t => {
          this.associations = t
        }, t => {
          console.log(t)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(hg))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-associations-list"]
      ],
      decls: 7,
      vars: 1,
      consts: [
        ["routerLink", "/administrator/associations/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Ji(1, " Liste des associations "), Pi(2, "a", 0), Ji(3, "Ajouter"), Fi(), Fi(), Pi(4, "table", 1), Pi(5, "tbody"), xi(6, qg, 8, 3, "tr", 2), Fi(), Fi()), 2 & t && (Er(6), Ii("ngForOf", e.associations))
      },
      directives: [Kp, kc],
      styles: [""]
    }), t
  })();

  function Gg(t, e) {
    if (1 & t && (Pi(0, "div", 16), Ji(1), Fi()), 2 & t) {
      const t = ji();
      Er(1), Yi(t.errorMessage)
    }
  }

  function Bg(t, e) {
    1 & t && (Pi(0, "small", 18), Ji(1, "AVEC obligatoire"), Fi())
  }

  function Wg(t, e) {
    if (1 & t && (Pi(0, "div"), xi(1, Bg, 2, 0, "small", 17), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ii("ngIf", null == t.associationForm.get("association").errors ? null : t.associationForm.get("association").errors.required)
    }
  }

  function Zg(t, e) {
    1 & t && (Pi(0, "small", 18), Ji(1, "Pr\xe9sident obligatoire"), Fi())
  }

  function Qg(t, e) {
    if (1 & t && (Pi(0, "div"), xi(1, Zg, 2, 0, "small", 17), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ii("ngIf", null == t.associationForm.get("chief").errors ? null : t.associationForm.get("chief").errors.required)
    }
  }

  function Jg(t, e) {
    1 & t && (Pi(0, "small", 18), Ji(1, "E-mail obligatoire"), Fi())
  }

  function Yg(t, e) {
    1 & t && (Pi(0, "small", 18), Ji(1, "E-mail invalide"), Fi())
  }

  function Kg(t, e) {
    if (1 & t && (Pi(0, "div"), xi(1, Jg, 2, 0, "small", 17), xi(2, Yg, 2, 0, "small", 17), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ii("ngIf", null == t.associationForm.get("email").errors ? null : t.associationForm.get("email").errors.required), Er(1), Ii("ngIf", null == t.associationForm.get("email").errors ? null : t.associationForm.get("email").errors.email)
    }
  }

  function Xg(t, e) {
    1 & t && (Pi(0, "small", 18), Ji(1, "T\xe9l\xe9phone obligatoire"), Fi())
  }

  function tv(t, e) {
    if (1 & t && (Pi(0, "div"), xi(1, Xg, 2, 0, "small", 17), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ii("ngIf", null == t.associationForm.get("phone").errors ? null : t.associationForm.get("phone").errors.required)
    }
  }
  let ev = (() => {
    class t {
      constructor(t, e) {
        this.associationsService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.associationForm = this.fb.group({
          association: ["", Qf.required],
          receipt: [""],
          chief: ["", Qf.required],
          phone: ["", Qf.required],
          email: ["", [Qf.required, Qf.email]]
        })
      }
      onSubmit() {
        this.associationsService.setAssociation(this.associationForm.value).subscribe(t => {}, t => {
          t instanceof Iu && (500 === t.status && (this.errorMessage = "Vous devriez \xeatre un agent de mairie"), 401 === t.status && (this.errorMessage = "Session invalide, veuillez vous connecter"))
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(hg), ki(Ym))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-associations-add"]
      ],
      decls: 34,
      vars: 17,
      consts: [
        [1, "col-lg-8"],
        ["class", "alert alert-danger", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "association"],
        ["type", "text", "name", "association", "formControlName", "association", "id", "association", "placeholder", "AVEC", 1, "form-control"],
        [4, "ngIf"],
        ["for", "chief"],
        ["type", "text", "name", "chief", "formControlName", "chief", "id", "chief", 1, "form-control"],
        ["for", "receipt"],
        ["type", "text", "name", "receipt", "formControlName", "receipt", "id", "receipt", 1, "form-control"],
        ["for", "email"],
        ["type", "email", "name", "email", "formControlName", "email", "id", "email", "placeholder", "ADRESSE E-MAIL", 1, "form-control"],
        ["for", "phone"],
        ["type", "tel", "name", "phone", "formControlName", "phone", "id", "phone", "placeholder", "01020102", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"],
        [1, "alert", "alert-danger"],
        ["class", "text-danger", 4, "ngIf"],
        [1, "text-danger"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "Associations"), Fi(), Pi(2, "div", 0), Pi(3, "h3"), Ji(4, "Ajouter une association"), Fi(), xi(5, Gg, 2, 1, "div", 1), Pi(6, "form", 2), Vi("ngSubmit", (function () {
          return e.onSubmit()
        })), Pi(7, "div", 3), Pi(8, "label", 4), Ji(9, "Nom d'AVEC :"), Fi(), Ni(10, "input", 5), xi(11, Wg, 2, 1, "div", 6), Fi(), Pi(12, "div", 3), Pi(13, "label", 7), Ji(14, "Pr\xe9sident d'AVEC :"), Fi(), Ni(15, "input", 8), xi(16, Qg, 2, 1, "div", 6), Fi(), Pi(17, "div", 3), Pi(18, "label", 9), Ji(19, "Num\xe9ro de r\xe9c\xe9piss\xe9 :"), Fi(), Ni(20, "input", 10), Fi(), Pi(21, "div", 3), Pi(22, "label", 11), Ji(23, "Adresse e-mail :"), Fi(), Ni(24, "input", 12), xi(25, Kg, 3, 2, "div", 6), Fi(), Pi(26, "div", 3), Pi(27, "label", 13), Ji(28, "T\xe9l\xe9phone :"), Fi(), Ni(29, "input", 14), xi(30, tv, 2, 1, "div", 6), Fi(), Pi(31, "div", 3), Pi(32, "button", 15), Ji(33, " CONNEXION "), Fi(), Fi(), Fi(), Fi()), 2 & t && (Er(5), Ii("ngIf", e.errorMessage), Er(1), Ii("formGroup", e.associationForm), Er(4), Gi("is-invalid", e.associationForm.get("association").invalid && e.associationForm.get("association").touched), Er(1), Ii("ngIf", e.associationForm.get("association").invalid && e.associationForm.get("association").touched), Er(4), Gi("is-invalid", e.associationForm.get("chief").invalid && e.associationForm.get("chief").touched), Er(1), Ii("ngIf", e.associationForm.get("chief").invalid && e.associationForm.get("chief").touched), Er(4), Gi("is-invalid", e.associationForm.get("receipt").invalid && e.associationForm.get("receipt").touched), Er(4), Gi("is-invalid", e.associationForm.get("email").invalid && e.associationForm.get("email").touched), Er(1), Ii("ngIf", e.associationForm.get("email").invalid && e.associationForm.get("email").touched), Er(4), Gi("is-invalid", e.associationForm.get("phone").invalid && e.associationForm.get("phone").touched), Er(1), Ii("ngIf", e.associationForm.get("phone").invalid && e.associationForm.get("phone").touched), Er(2), Ii("disabled", !e.associationForm.valid))
      },
      directives: [Tc, Vm, zf, jm, Df, qf, Wm],
      styles: [""]
    }), t
  })(), nv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-associations-view"]
      ],
      decls: 2,
      vars: 0,
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Ji(1, "En d\xe9v\xe9loppement"), Fi())
      },
      styles: [""]
    }), t
  })(), rv = (() => {
    class t {
      constructor(t, e) {
        this.authService = t, this.router = e
      }
      canActivate(t, e) {
        return !!this.authService.loggedIn() || (this.router.navigate(["/login"]), !1)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Sf), Zt(Jp))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), sv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-banks-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "Banques"), Fi(), Ni(2, "router-outlet"))
      },
      directives: [rf],
      styles: [""]
    }), t
  })(), iv = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "https://api.csss-ci.com/rest/v1/banks/"
      }
      gets() {
        return this.http.get(this.baseUrl)
      }
      get(t) {
        return this.http.get(this.baseUrl + t)
      }
      set(t) {
        return this.http.post(this.baseUrl, t)
      }
      put(t) {
        return this.http.put(this.baseUrl, t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Pu))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function ov(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Pi(4, "a", 3), Ji(5, "Voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.bank)
    }
  }
  let av = (() => {
    class t {
      constructor(t) {
        this.banksService = t
      }
      ngOnInit() {
        this.getBanks()
      }
      getBanks() {
        this.banksService.gets().subscribe(t => this.banks = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(iv))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-banks-list"]
      ],
      decls: 7,
      vars: 1,
      consts: [
        ["routerLink", "/administrator/banks/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        ["href", ""]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Ji(1, " Liste des banques "), Pi(2, "a", 0), Ji(3, "Ajouter"), Fi(), Fi(), Pi(4, "table", 1), Pi(5, "tbody"), xi(6, ov, 6, 1, "tr", 2), Fi(), Fi()), 2 & t && (Er(6), Ii("ngForOf", e.banks))
      },
      directives: [Kp, kc],
      styles: [""]
    }), t
  })(), lv = (() => {
    class t {
      constructor(t, e, n) {
        this.banksService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.bankForm = this.fb.group({
          bank: ["", Qf.required],
          banker: ["", Qf.required],
          email: ["", [Qf.required, Qf.email]],
          phone: ["", Qf.required]
        })
      }
      onSubmit() {
        this.banksService.set(this.bankForm.value).subscribe(t => this.router.navigate(["/administrator/banks"]))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(iv), ki(Ym), ki(Jp))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-banks-add"]
      ],
      decls: 23,
      vars: 2,
      consts: [
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "bank"],
        ["type", "text", "formControlName", "bank", "id", "bank", 1, "form-control"],
        ["for", "banker"],
        ["type", "text", "formControlName", "banker", "id", "banker", 1, "form-control"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "id", "phone", 1, "form-control"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "id", "email", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Ji(1, "Ajouter une banque"), Fi(), Pi(2, "div", 0), Pi(3, "form", 1), Vi("ngSubmit", (function () {
          return e.onSubmit()
        })), Pi(4, "div", 2), Pi(5, "label", 3), Ji(6, "Banque"), Fi(), Ni(7, "input", 4), Fi(), Pi(8, "div", 2), Pi(9, "label", 5), Ji(10, "Agent de banque"), Fi(), Ni(11, "input", 6), Fi(), Pi(12, "div", 2), Pi(13, "label", 7), Ji(14, "T\xe9l\xe9phone"), Fi(), Ni(15, "input", 8), Fi(), Pi(16, "div", 2), Pi(17, "label", 9), Ji(18, "E-mail"), Fi(), Ni(19, "input", 10), Fi(), Pi(20, "div", 2), Pi(21, "button", 11), Ji(22, " Enr\xe9gistrer "), Fi(), Fi(), Fi(), Fi()), 2 & t && (Er(3), Ii("formGroup", e.bankForm), Er(18), Ii("disabled", !e.bankForm.valid))
      },
      directives: [Vm, zf, jm, Df, qf, Wm],
      styles: [""]
    }), t
  })(), cv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-complaints-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "Plaintes"), Fi(), Ni(2, "router-outlet"))
      },
      directives: [rf],
      styles: [""]
    }), t
  })();

  function uv(t, e) {
    if (1 & t) {
      const t = Ri();
      Pi(0, "tr", 7), Vi("click", (function () {
        Be(t);
        const n = e.$implicit;
        return ji(2).onSelected(n)
      })), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Fi()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = ji(2);
      Er(2), Ki("", n.textLimit(t.complaint), "..."), Er(2), Yi(t.household), Er(2), Yi(t.complaintDate)
    }
  }

  function hv(t, e) {
    if (1 & t && (Pi(0, "div", 1), Pi(1, "div", 2), Pi(2, "h3"), Ji(3, "Liste de plaintes"), Fi(), Pi(4, "div", 3), Ji(5, " Clique sur la ligne de la plainte pour voir les details "), Fi(), Ni(6, "br"), Pi(7, "table", 4), Pi(8, "tbody"), xi(9, uv, 7, 3, "tr", 5), Fi(), Fi(), Fi(), Pi(10, "div", 6), Ni(11, "router-outlet"), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(9), Ii("ngForOf", t.complaints)
    }
  }
  let dv = (() => {
    class t {
      constructor(t, e, n) {
        this.complaintsService = t, this.activatedRoute = e, this.router = n
      }
      ngOnInit() {
        this.getComplaints()
      }
      getComplaints() {
        this.complaintsService.gets().subscribe(t => this.complaints = t)
      }
      onSelected(t) {
        this.router.navigate([t.idcomplaint], {
          relativeTo: this.activatedRoute
        })
      }
      textLimit(t) {
        return t.substr(0, 20)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(mg), ki($d), ki(Jp))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-complaints-list"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "row", 4, "ngIf"],
        [1, "row"],
        [1, "col-lg-8"],
        [1, "alert", "alert-warning"],
        [1, "table"],
        [3, "click", 4, "ngFor", "ngForOf"],
        [1, "col-lg-4"],
        [3, "click"]
      ],
      template: function (t, e) {
        1 & t && xi(0, hv, 12, 1, "div", 0), 2 & t && Ii("ngIf", e.complaints)
      },
      directives: [Tc, kc, rf],
      styles: [""]
    }), t
  })();

  function pv(t, e) {
    if (1 & t && (Pi(0, "div"), Pi(1, "h3"), Ji(2, " Detail de Plainte"), Fi(), Pi(3, "h4"), Ji(4), Fi(), Pi(5, "p"), Ji(6), Fi(), Ni(7, "hr"), Pi(8, "small"), Ji(9), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(4), Ki(" Plainte de ", t.household, ""), Er(2), Yi(t.complaint), Er(3), Ki("Date: ", t.complaintDate, "")
    }
  }

  function fv(t, e) {
    if (1 & t && (Pi(0, "div"), xi(1, pv, 10, 3, "div", 1), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ii("ngForOf", t.complaint)
    }
  }
  let mv = (() => {
    class t {
      constructor(t, e) {
        this.complaintsService = t, this.activatedRoute = e
      }
      ngOnInit() {
        this.activatedRoute.params.subscribe(t => this.getComplaint(t.id))
      }
      getComplaint(t) {
        this.complaintsService.get(t).subscribe(t => this.complaint = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(mg), ki($d))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-complaints-detail"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngIf"],
        [4, "ngFor", "ngForOf"]
      ],
      template: function (t, e) {
        1 & t && xi(0, fv, 2, 1, "div", 0), 2 & t && Ii("ngIf", e.complaint)
      },
      directives: [Tc, kc],
      styles: [""]
    }), t
  })(), gv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-voice-main"]
      ],
      decls: 1,
      vars: 0,
      template: function (t, e) {
        1 & t && Ni(0, "router-outlet")
      },
      directives: [rf],
      styles: [""]
    }), t
  })();

  function vv(t, e) {
    if (1 & t && (Pi(0, "div", 10), Ji(1), Fi()), 2 & t) {
      const t = ji();
      Er(1), Yi(t.successMessage)
    }
  }
  let yv = (() => {
    class t {
      constructor(t, e) {
        this.messagesService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", Qf.required],
          recipient: ["", [Qf.required, Qf.minLength(11)]]
        })
      }
      onSubmit() {
        this.messagesService.set(this.smsForm.value).subscribe(t => {}, t => {
          this.errorMessage = "Service momentanement indisponible"
        }, () => {
          this.errorMessage = "Service momentanement indisponible"
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Ng), ki(Ym))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-voice-send"]
      ],
      decls: 20,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        [1, "alert", "alert-danger"],
        ["class", "alert alert-success", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "recipient"],
        ["type", "text", "name", "recipient", "formControlName", "recipient", "id", "recipient", 1, "form-control"],
        ["type", "file", "name", "message", "formControlName", "message", "id", "message", "accept", "audio/mp3,audio/wav;capture=microphone", 1, "form-control-file"],
        ["type", "submit", "disabled", "", 1, "bouton"],
        [1, "alert", "alert-success"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Pi(1, "a", 0), Ji(2, "Retour"), Fi(), Ji(3, " Envoi de SMS\n"), Fi(), Pi(4, "div", 1), Pi(5, "div", 2), Ji(6, "Service momentanement indisponible"), Fi(), xi(7, vv, 2, 1, "div", 3), Pi(8, "form", 4), Vi("ngSubmit", (function () {
          return e.onSubmit()
        })), Pi(9, "div", 5), Pi(10, "label", 6), Ji(11, "Destinataires"), Fi(), Ni(12, "input", 7), Fi(), Pi(13, "div", 5), Pi(14, "label", 6), Ji(15, "T\xe9l\xe9charger message"), Fi(), Ni(16, "input", 8), Fi(), Pi(17, "div", 5), Pi(18, "button", 9), Ji(19, "Envoyer"), Fi(), Fi(), Fi(), Fi()), 2 & t && (Er(7), Ii("ngIf", e.successMessage), Er(1), Ii("formGroup", e.smsForm))
      },
      directives: [Kp, Tc, Vm, zf, jm, Df, qf, Wm],
      styles: [""]
    }), t
  })();

  function bv(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Pi(4, "a", 3), Ji(5, "voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.townHall), Er(2), Hi("routerLink", "/administrator/townhalls/view/", t.idtownHall, "")
    }
  }
  let wv = (() => {
    class t {
      constructor(t) {
        this.townhallsService = t
      }
      ngOnInit() {
        this.getTownHalls()
      }
      getTownHalls() {
        this.townhallsService.getTownhalls().subscribe(t => this.towns = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(ug))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-townhalls-list"]
      ],
      decls: 7,
      vars: 1,
      consts: [
        ["routerLink", "/administrator/townhalls/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Ji(1, " Liste des municipalit\xe9s "), Pi(2, "a", 0), Ji(3, "Ajouter"), Fi(), Fi(), Pi(4, "table", 1), Pi(5, "tbody"), xi(6, bv, 6, 2, "tr", 2), Fi(), Fi()), 2 & t && (Er(6), Ii("ngForOf", e.towns))
      },
      directives: [Kp, kc],
      styles: [""]
    }), t
  })(), _v = (() => {
    class t {
      constructor(t, e) {
        this.townService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.townForm = this.fb.group({
          townHall: ["", Qf.required],
          officer: ["", Qf.required],
          email: ["", [Qf.required, Qf.email]],
          phone: ["", Qf.required]
        })
      }
      onSubmit() {
        this.townService.setTownhall(this.townForm.value).subscribe(t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(ug), ki(Ym))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-townhalls-add"]
      ],
      decls: 20,
      vars: 2,
      consts: [
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "townHall"],
        ["type", "text", "formControlName", "townHall", "id", "townHall", 1, "form-control"],
        ["for", "officer"],
        ["type", "text", "formControlName", "officer", "id", "townHall", 1, "form-control"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "id", "phone", 1, "form-control"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "id", "email", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "div", 0), Pi(1, "form", 1), Vi("ngSubmit", (function () {
          return e.onSubmit()
        })), Pi(2, "div", 2), Pi(3, "label", 3), Ji(4, "Municipalit\xe9"), Fi(), Ni(5, "input", 4), Fi(), Pi(6, "div", 2), Pi(7, "label", 5), Ji(8, "Agent de mairie"), Fi(), Ni(9, "input", 6), Fi(), Pi(10, "div", 2), Pi(11, "label", 7), Ji(12, "T\xe9l\xe9phone"), Fi(), Ni(13, "input", 8), Fi(), Pi(14, "div", 2), Pi(15, "label", 9), Ji(16, "E-mail"), Fi(), Ni(17, "input", 10), Fi(), Pi(18, "button", 11), Ji(19, "Enr\xe9gistrer"), Fi(), Fi(), Fi()), 2 & t && (Er(1), Ii("formGroup", e.townForm), Er(17), Ii("disabled", !e.townForm.valid))
      },
      directives: [Vm, zf, jm, Df, qf, Wm],
      styles: [""]
    }), t
  })();

  function Cv(t, e) {
    if (1 & t && (Pi(0, "div"), Pi(1, "h3"), Ji(2), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.townHall)
    }
  }
  let Sv = (() => {
    class t {
      constructor(t, e) {
        this.townhallsService = t, this.activatedRoute = e
      }
      ngOnInit() {
        this.idTownHall = this.activatedRoute.snapshot.params.id, this.getTownHall(this.idTownHall)
      }
      getTownHall(t) {
        this.townhallsService.getTownhall(t).subscribe(t => this.townHall = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(ug), ki($d))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-townhalls-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"]
      ],
      template: function (t, e) {
        1 & t && xi(0, Cv, 3, 1, "div", 0), 2 & t && Ii("ngForOf", e.townHall)
      },
      directives: [kc],
      styles: [""]
    }), t
  })(), Ev = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-households-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "M\xe9nages"), Fi(), Ni(2, "router-outlet"))
      },
      directives: [rf],
      styles: [""]
    }), t
  })();

  function xv(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Pi(7, "td"), Pi(8, "a", 3), Ji(9, "Voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.household), Er(2), Yi(t.association), Er(2), Yi(t.cellPhone), Er(2), Hi("routerLink", "/administrator/households/view/", t.idhousehold, "")
    }
  }
  let kv = (() => {
    class t {
      constructor(t) {
        this.householdsService = t
      }
      ngOnInit() {
        this.getHouseholds()
      }
      getHouseholds() {
        this.householdsService.getHouseHolds().subscribe(t => {
          this.households = t
        }, t => {})
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(dg))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-households-list"]
      ],
      decls: 8,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/households/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Ji(1), Pi(2, "a", 0), Ji(3, " Ajouter "), Fi(), Fi(), Pi(4, "table", 1), Ni(5, "thead"), Pi(6, "tbody"), xi(7, xv, 10, 4, "tr", 2), Fi(), Fi()), 2 & t && (Er(1), Ki(" Liste des M\xe9nages(", e.households.length, ") "), Er(6), Ii("ngForOf", e.households))
      },
      directives: [Kp, kc],
      styles: [""]
    }), t
  })();

  function Av(t, e) {
    if (1 & t && (Pi(0, "div", 16), Ji(1), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ki(" ", t.errorMessage, " ")
    }
  }
  let Tv = (() => {
    class t {
      constructor(t, e, n) {
        this.householdsService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.houseForm = this.fb.group({
          household: ["", Qf.required],
          familySize: ["", Qf.required],
          owner: ["", Qf.required],
          address: ["", Qf.required],
          cellPhone: ["", Qf.required],
          mail: ["", Qf.required]
        })
      }
      onSubmit() {
        this.householdsService.setHouseHold(this.houseForm.value).subscribe(t => this.router.navigate(["/associations/households/"]), t => {
          t instanceof Iu && (500 === t.status && (this.errorMessage = "Vous devriez \xeatre president d'association"), 401 === t.status && (this.errorMessage = "Veuillez vous reconnecter"))
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(dg), ki(Ym), ki(Jp))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-households-add"]
      ],
      decls: 38,
      vars: 5,
      consts: [
        [1, "col-lg-8"],
        ["class", "alert alert-danger", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", ""],
        ["type", "text", "formControlName", "household", "name", "household", 1, "form-control"],
        ["type", "number", "formControlName", "familySize", "name", "familySize", 1, "form-control"],
        ["name", "owner", "id", "owner", "formControlName", "owner", 1, "form-control"],
        ["value", ""],
        [3, "value"],
        ["type", "text", "formControlName", "address", "name", "address", 1, "form-control"],
        ["for", "cellPhone"],
        ["type", "tel", "formControlName", "cellPhone", "name", "cellPhone", 1, "form-control"],
        ["for", "mail"],
        ["type", "email", "formControlName", "mail", "name", "mail", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"],
        [1, "alert", "alert-danger"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Ji(1, "Ajouter M\xe9nage"), Fi(), Pi(2, "div", 0), xi(3, Av, 2, 1, "div", 1), Pi(4, "form", 2), Vi("ngSubmit", (function () {
          return e.onSubmit()
        })), Pi(5, "div", 3), Pi(6, "label", 4), Ji(7, "Nom de la famille"), Fi(), Ni(8, "input", 5), Fi(), Pi(9, "div", 3), Pi(10, "label", 4), Ji(11, "Taille de la famille"), Fi(), Ni(12, "input", 6), Fi(), Pi(13, "div", 3), Pi(14, "label", 4), Ji(15, "Etes-vous propri\xe9taire ?"), Fi(), Pi(16, "select", 7), Pi(17, "option", 8), Ji(18, "Choisir"), Fi(), Pi(19, "option", 9), Ji(20, "Propri\xe9taire"), Fi(), Pi(21, "option", 9), Ji(22, "Locataire"), Fi(), Fi(), Fi(), Pi(23, "div", 3), Pi(24, "label", 4), Ji(25, "Lieu d'habitation"), Fi(), Ni(26, "input", 10), Fi(), Pi(27, "div", 3), Pi(28, "label", 11), Ji(29, "T\xe9l\xe9phone Mobile"), Fi(), Ni(30, "input", 12), Fi(), Pi(31, "div", 3), Pi(32, "label", 13), Ji(33, "E-mail"), Fi(), Ni(34, "input", 14), Fi(), Pi(35, "div", 3), Pi(36, "button", 15), Ji(37, "Enr\xe9gistrer"), Fi(), Fi(), Fi(), Fi()), 2 & t && (Er(3), Ii("ngIf", e.errorMessage), Er(1), Ii("formGroup", e.houseForm), Er(15), Ii("value", 1), Er(2), Ii("value", 0), Er(15), Ii("disabled", !e.houseForm.valid))
      },
      directives: [Tc, Vm, zf, jm, Df, qf, Wm, nm, pm, fm, ym],
      styles: [""]
    }), t
  })();

  function Iv(t, e) {
    if (1 & t && (Pi(0, "div"), Pi(1, "h3"), Ji(2), Fi(), Pi(3, "div", 1), Pi(4, "div", 2), Pi(5, "h4"), Ji(6, "Appels d'offre"), Fi(), Fi(), Pi(7, "div", 2), Pi(8, "h4"), Ji(9, "Plaintes"), Fi(), Fi(), Ni(10, "div", 2), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.household)
    }
  }
  let Ov = (() => {
    class t {
      constructor(t, e) {
        this.householdsService = t, this.activatedRoute = e
      }
      ngOnInit() {
        this.idHousehold = this.activatedRoute.snapshot.params.id, this.getHousehold(this.idHousehold)
      }
      getHousehold(t) {
        this.householdsService.getHouseHold(t).subscribe(t => this.household = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(dg), ki($d))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-households-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "row"],
        [1, "col-lg-4"]
      ],
      template: function (t, e) {
        1 & t && xi(0, Iv, 11, 1, "div", 0), 2 & t && Ii("ngForOf", e.household)
      },
      directives: [kc],
      styles: [""]
    }), t
  })(), Pv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-needs-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "Appels d'offres"), Fi(), Ni(2, "router-outlet"))
      },
      directives: [rf],
      styles: [""]
    }), t
  })();

  function Fv(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Pi(7, "td"), Pi(8, "a", 3), Ji(9, "voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit,
        n = ji();
      Er(2), Yi(t.need), Er(2), Yi(n.getStatus(t.status)), Er(2), Yi(t.needDate), Er(2), Hi("routerLink", "/administrator/needs/view/", t.idneed, "")
    }
  }
  let Nv = (() => {
    class t {
      constructor(t) {
        this.needsService = t
      }
      ngOnInit() {
        this.getNeeds()
      }
      getNeeds() {
        this.needsService.gets().subscribe(t => {
          this.needs = t
        }, t => {
          console.log(t)
        })
      }
      getStatus(t) {
        return {
          0: "NON PUBLI\xc9",
          1: "PUBLI\xc9",
          2: "ANNUL\xc9E"
        } [t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(fg))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-needs-list"]
      ],
      decls: 7,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/needs/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Ji(1), Pi(2, "a", 0), Ji(3, "Ajouter"), Fi(), Fi(), Pi(4, "table", 1), Pi(5, "tbody"), xi(6, Fv, 10, 4, "tr", 2), Fi(), Fi()), 2 & t && (Er(1), Ki(" Liste des besoins (", e.needs.length, ") "), Er(5), Ii("ngForOf", e.needs))
      },
      directives: [Kp, kc],
      styles: [""]
    }), t
  })();

  function Rv(t, e) {
    if (1 & t && (Pi(0, "div", 1), Pi(1, "h3"), Ji(2), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.household)
    }
  }
  let Mv = (() => {
    class t {
      constructor(t, e, n, r) {
        this.needsService = t, this.householdsService = e, this.fb = n, this.activatedRoute = r
      }
      ngOnInit() {
        this.householdId = this.activatedRoute.snapshot.params.id, this.getHousehold(this.householdId), this.createForm()
      }
      getHousehold(t) {
        this.householdsService.getHouseHold(t).subscribe(t => {
          this.household = t
        }, t => {
          console.log(t)
        })
      }
      createForm() {
        this.needForm = this.fb.group({
          householdId: [this.householdId, Qf.required],
          need: ["", Qf.required],
          description: ["", Qf.required]
        })
      }
      onSubmit() {
        this.needsService.set(this.needForm.value).subscribe(t => {
          console.log(t)
        }, t => {
          console.log(t)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(fg), ki(dg), ki(Ym), ki($d))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-needs-add"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "col-lg-8", 4, "ngFor", "ngForOf"],
        [1, "col-lg-8"]
      ],
      template: function (t, e) {
        1 & t && xi(0, Rv, 3, 1, "div", 0), 2 & t && Ii("ngForOf", e.household)
      },
      directives: [kc],
      styles: [""]
    }), t
  })();

  function Dv(t, e) {
    if (1 & t && (Pi(0, "div"), Pi(1, "div", 2), Pi(2, "div", 10), Pi(3, "h4"), Ji(4, "M\xe9nage"), Fi(), Pi(5, "div"), Pi(6, "h5"), Ji(7), Fi(), Pi(8, "p"), Ji(9), Ni(10, "br"), Ji(11), Ni(12, "br"), Ji(13), Ni(14, "br"), Ji(15), Fi(), Fi(), Fi(), Pi(16, "div", 11), Pi(17, "h4"), Ji(18, "Appel d'offre"), Fi(), Pi(19, "h5"), Ji(20), Fi(), Pi(21, "p"), Ji(22), Fi(), Fi(), Pi(23, "div", 12), Pi(24, "h4"), Ji(25, "Suivi"), Fi(), Pi(26, "p"), Ji(27), pa(28, "date"), Ni(29, "br"), Ji(30, " R\xe9actions: 0 "), Ni(31, "br"), Ji(32, "Financ\xe9:Pas encore "), Ni(33, "br"), Ji(34, "Ex\xe9cution: Pas encore "), Fi(), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit,
        n = ji();
      Er(7), Ki(" ", t.household, ""), Er(2), Ki(" ", n.getOwner(t.owner), " "), Er(2), Ki(" ", t.familySize, " Personnes "), Er(2), Ki("", t.cellPhone, " "), Er(2), Ki(" ", t.address, " "), Er(5), Ki(" ", t.need, ""), Er(2), Ki("", t.description, " "), Er(5), Ki(" Cr\xe9\xe9 le ", fa(28, 8, t.needDate), " ")
    }
  }
  let Vv = (() => {
    class t {
      constructor(t, e) {
        this.needsService = t, this.activatedRoute = e
      }
      ngOnInit() {
        this.idNeed = this.activatedRoute.snapshot.params.id, this.getNeed(this.idNeed)
      }
      getNeed(t) {
        this.needsService.get(t).subscribe(t => {
          this.need = t
        }, t => {
          console.log(t)
        })
      }
      getOwner(t) {
        return {
          0: "Locataire",
          1: "Propri\xe9taire"
        } [t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(fg), ki($d))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-needs-view"]
      ],
      decls: 21,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "chats"],
        [1, "row"],
        [1, "col-lg-8"],
        [1, "text-center"],
        [1, "chat-suppliers"],
        [1, "chat-user"],
        ["src", "../../../assets/images/chateur.png", "alt", "Fournisseur", 1, "logo"],
        [1, "chat-message"],
        [1, "float-right"],
        [1, "col-lg-4"],
        [1, "col-lg-5"],
        [1, "col-lg-3"]
      ],
      template: function (t, e) {
        1 & t && (xi(0, Dv, 35, 10, "div", 0), Pi(1, "div", 1), Pi(2, "div", 2), Pi(3, "div", 3), Pi(4, "h2", 4), Ji(5, "Propositions des fournisseurs"), Fi(), Pi(6, "div", 5), Pi(7, "div", 6), Ni(8, "img", 7), Fi(), Pi(9, "div", 8), Pi(10, "h3"), Ji(11, " Nom du fournisseur "), Pi(12, "span", 9), Ji(13, "Co\xfbt: 500 000 CFA "), Ni(14, "br"), Ji(15, "D\xe9lai d'\xe9x\xe9cution: 2 Mois"), Fi(), Fi(), Pi(16, "p"), Ji(17, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "), Fi(), Fi(), Fi(), Fi(), Pi(18, "div", 10), Pi(19, "h2", 4), Ji(20, "Ex\xe9cution des travaux"), Fi(), Fi(), Fi(), Fi()), 2 & t && Ii("ngForOf", e.need)
      },
      directives: [kc],
      pipes: [Pc],
      styles: [""]
    }), t
  })(), Lv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-officers-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "Agent de Municipalit\xe9"), Fi(), Ni(2, "router-outlet"))
      },
      directives: [rf],
      styles: [""]
    }), t
  })(), Uv = (() => {
    class t {
      constructor(t) {
        this.http = t, this.baseUrl = "http://localhost/CSSS/api/index.php/rest/v1/officers/"
      }
      gets() {
        return this.http.get(this.baseUrl)
      }
      get(t) {
        return this.http.get(this.baseUrl + t)
      }
      set(t) {
        return this.http.post(this.baseUrl, t)
      }
      put(t) {
        return this.http.put(this.baseUrl, t)
      }
      password(t) {
        return this.http.put(this.baseUrl + "password", t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Pu))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function jv(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Pi(7, "td"), Pi(8, "a", 2), Ji(9, "Voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.officer), Er(2), Yi(t.phone), Er(2), Yi(t.email), Er(2), Hi("routerLink", "/administrator/officers/view/", t.idofficer, "")
    }
  }
  let Hv = (() => {
    class t {
      constructor(t) {
        this.officersService = t
      }
      ngOnInit() {
        this.getOfficers()
      }
      getOfficers() {
        this.officersService.gets().subscribe(t => this.officers = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Uv))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-officers-list"]
      ],
      decls: 5,
      vars: 1,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Ji(1, "Liste des agents municipaux"), Fi(), Pi(2, "table", 0), Pi(3, "tbody"), xi(4, jv, 10, 4, "tr", 1), Fi(), Fi()), 2 & t && (Er(4), Ii("ngForOf", e.officers))
      },
      directives: [kc, Kp],
      styles: [""]
    }), t
  })();

  function $v(t, e) {
    if (1 & t) {
      const t = Ri();
      Pi(0, "div", 1), Pi(1, "h3"), Ji(2, "Info Agent Municipal"), Fi(), Pi(3, "form", 2), Vi("ngSubmit", (function () {
        return Be(t), ji().onSubmit()
      })), Pi(4, "div", 3), Pi(5, "label", 4), Ji(6, "Nom et prenom"), Fi(), Pi(7, "input", 5), Vi("ngModelChange", (function (n) {
        return Be(t), e.$implicit.officer = n
      })), Fi(), Fi(), Pi(8, "div", 3), Pi(9, "label", 6), Ji(10, "Adresse e-mail"), Fi(), Pi(11, "input", 7), Vi("ngModelChange", (function (n) {
        return Be(t), e.$implicit.email = n
      })), Fi(), Fi(), Pi(12, "div", 3), Pi(13, "label", 8), Ji(14, "T\xe9l\xe9phone"), Fi(), Pi(15, "input", 9), Vi("ngModelChange", (function (n) {
        return Be(t), e.$implicit.phone = n
      })), Fi(), Fi(), Pi(16, "div", 3), Pi(17, "button", 10), Ji(18, "Valider"), Fi(), Fi(), Fi(), Fi()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = ji();
      Er(3), Ii("formGroup", n.officerForm), Er(4), Ii("ngModel", t.officer), Er(4), Ii("ngModel", t.email), Er(4), Ii("ngModel", t.phone), Er(2), Ii("disabled", !n.officerForm.valid)
    }
  }
  let qv = (() => {
    class t {
      constructor(t, e, n) {
        this.officesService = t, this.fb = e, this.activatedRoute = n
      }
      ngOnInit() {
        this.idOfficer = this.activatedRoute.snapshot.params.id, this.getOfficer(this.idOfficer), this.createForm()
      }
      getOfficer(t) {
        this.officesService.get(t).subscribe(t => this.officer = t)
      }
      createForm() {
        this.officerForm = this.fb.group({
          officer: ["", Qf.required],
          email: ["", Qf.required],
          phone: ["", Qf.required]
        })
      }
      onSubmit() {
        this.officesService.put(this.officerForm.value).subscribe(t => {
          this.successMessage = "Mise \xe0 jour \xe9ffectu\xe9e avec succ\xe8s"
        }, t => {
          this.errorMessage = "Erreur"
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Uv), ki(Ym), ki($d))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-officers-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "col-lg-8", 4, "ngFor", "ngForOf"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "officer"],
        ["type", "text", "formControlName", "officer", "name", "officer", "id", "officer", 1, "form-control", 3, "ngModel", "ngModelChange"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "name", "email", "id", "email", 1, "form-control", 3, "ngModel", "ngModelChange"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "name", "phone", "id", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && xi(0, $v, 19, 5, "div", 0), 2 & t && Ii("ngForOf", e.officer)
      },
      directives: [kc, Vm, zf, jm, Df, qf, Wm],
      styles: [""]
    }), t
  })(), zv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-associations-container"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "Associations"), Fi(), Ni(2, "router-outlet"))
      },
      directives: [rf],
      styles: [""]
    }), t
  })(), Gv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-townhalls-container"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "Municipalit\xe9"), Fi(), Ni(2, "router-outlet"))
      },
      directives: [rf],
      styles: [""]
    }), t
  })();

  function Bv(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Pi(7, "td"), Pi(8, "a", 2), Ji(9, "Voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.supplier), Er(2), Yi(t.service), Er(2), Yi(t.phone), Er(2), Hi("routerLink", "/suppliers/view/", t.idsupplier, "")
    }
  }
  let Wv = (() => {
    class t {
      constructor(t) {
        this.suppliersService = t
      }
      ngOnInit() {
        this.getSuppliers()
      }
      getSuppliers() {
        this.suppliersService.getSuppliers().subscribe(t => {
          this.suppliers = t
        }, t => {})
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(pg))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-suppliers-list"]
      ],
      decls: 4,
      vars: 1,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "table", 0), Ni(1, "thead"), Pi(2, "tbody"), xi(3, Bv, 10, 4, "tr", 1), Fi(), Fi()), 2 & t && (Er(3), Ii("ngForOf", e.suppliers))
      },
      directives: [kc, Kp],
      styles: [""]
    }), t
  })(), Zv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-suppliers-view"]
      ],
      decls: 2,
      vars: 0,
      template: function (t, e) {
        1 & t && (Pi(0, "p"), Ji(1, "suppliers-view works!"), Fi())
      },
      styles: [""]
    }), t
  })(), Qv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-suppliers-container"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "Fournisseurs"), Fi(), Ni(2, "router-outlet"))
      },
      directives: [rf],
      styles: [""]
    }), t
  })();
  const Jv = [{
    path: "administrator",
    component: cg,
    canActivate: [rv],
    children: [{
      path: "dashboard",
      component: xg
    }, {
      path: "add",
      component: Ag
    }, {
      path: "administrators",
      component: Og
    }, {
      path: "townhalls",
      component: Gv,
      children: [{
        path: "",
        component: wv
      }, {
        path: "add",
        component: _v
      }, {
        path: "view/:id",
        component: Sv
      }]
    }, {
      path: "suppliers",
      component: Qv,
      children: [{
        path: "",
        component: Wv
      }, {
        path: "view/:id",
        component: Zv
      }]
    }, {
      path: "officers",
      component: Lv,
      children: [{
        path: "",
        component: Hv
      }, {
        path: "view/:id",
        component: qv
      }]
    }, {
      path: "complaints",
      component: cv,
      children: [{
        path: "",
        component: dv,
        children: [{
          path: ":id",
          component: mv
        }]
      }]
    }, {
      path: "banks",
      component: sv,
      children: [{
        path: "",
        component: av
      }, {
        path: "add",
        component: lv
      }]
    }, {
      path: "sensitization",
      component: Pg,
      children: [{
        path: "sms",
        component: Fg,
        children: [{
          path: "",
          component: Mg
        }, {
          path: "send",
          component: Lg
        }, {
          path: "chiefs",
          component: jg
        }, {
          path: "association",
          component: $g
        }, {
          path: "everyone",
          component: Ug
        }]
      }, {
        path: "voice",
        component: gv,
        children: [{
          path: "send",
          component: yv
        }]
      }]
    }, {
      path: "needs",
      component: Pv,
      children: [{
        path: "",
        component: Nv
      }, {
        path: "add/:id",
        component: Mv
      }, {
        path: "view/:id",
        component: Vv
      }]
    }, {
      path: "households",
      component: Ev,
      children: [{
        path: "",
        component: kv
      }, {
        path: "add",
        component: Tv
      }, {
        path: "view",
        component: Ov
      }]
    }, {
      path: "associations",
      component: zv,
      children: [{
        path: "",
        component: zg
      }, {
        path: "add",
        component: ev
      }, {
        path: "view/:id",
        component: nv
      }]
    }]
  }];
  let Yv = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [ff.forRoot(Jv)], ff
      ]
    }), t
  })();
  const Kv = [{
    path: "sensitization",
    component: Pg,
    canActivate: [rv],
    children: [{
      path: "sms",
      component: Fg,
      children: [{
        path: "",
        component: Mg
      }, {
        path: "send",
        component: Lg
      }, {
        path: "everyone",
        component: Ug
      }]
    }]
  }];
  let Xv = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [ff.forRoot(Kv)], ff
      ]
    }), t
  })(), ty = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Bu, Km]
      ]
    }), t
  })(), ey = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Bu, Km]
      ]
    }), t
  })(), ny = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Bu, Km, ty, Xv, ey]
      ]
    }), t
  })(), ry = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Km, Bu, Yv, ny]
      ]
    }), t
  })(), sy = (() => {
    class t {
      constructor(t) {
        this.authService = t
      }
      ngOnInit() {}
      sidebar() {
        this.status = !this.status
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Sf))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-townhalls-main"]
      ],
      decls: 51,
      vars: 2,
      consts: [
        [1, "header"],
        [1, "toggle-btn", 3, "click"],
        ["id", "sidebar", 3, "ngClass"],
        [1, "sidebar-sticky"],
        [1, "text-center"],
        ["src", "../../../assets/images/logo.png", "alt", "logo CSSS", 1, "logo"],
        [1, "nav", "flex-column"],
        [1, "nav-item"],
        ["routerLink", "/townhalls/dashboard", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/townhalls/associations", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/townhalls/households", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "users"],
        ["routerLink", "/townhalls/needs", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "bar-chart-2"],
        ["routerLink", "/townhalls/complaints", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/townhalls/suppliers", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "layers"],
        [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
        ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
        ["data-feather", "plus-circle"],
        [1, "nav", "flex-column", "mb-2"],
        ["routerLink", "/townhalls/officers/password", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "file-text"],
        [1, "nav-link", 3, "click"],
        ["id", "main", 3, "ngClass"],
        [1, "container-fluid"],
        ["role", "main"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "header", 0), Pi(1, "div", 1), Vi("click", (function () {
          return e.sidebar()
        })), Ni(2, "span"), Ni(3, "span"), Ni(4, "span"), Fi(), Fi(), Pi(5, "div", 2), Pi(6, "nav"), Pi(7, "div", 3), Pi(8, "div", 4), Ni(9, "img", 5), Fi(), Pi(10, "ul", 6), Pi(11, "li", 7), Pi(12, "a", 8), Ji(13, " Tableau de Bord "), Fi(), Fi(), Pi(14, "li", 7), Pi(15, "a", 9), Ji(16, " Asoociations "), Fi(), Fi(), Pi(17, "li", 7), Pi(18, "a", 10), Ni(19, "span", 11), Ji(20, " M\xe9nages "), Fi(), Fi(), Pi(21, "li", 7), Pi(22, "a", 12), Ni(23, "span", 13), Ji(24, " Appels d'offre "), Fi(), Fi(), Pi(25, "li", 7), Pi(26, "a", 14), Ni(27, "span", 13), Ji(28, " R\xe9actions "), Fi(), Fi(), Pi(29, "li", 7), Pi(30, "a", 15), Ni(31, "span", 16), Ji(32, " Fournisseurs "), Fi(), Fi(), Fi(), Pi(33, "h6", 17), Pi(34, "span"), Ji(35, "Param\xe8trages"), Fi(), Pi(36, "a", 18), Ni(37, "span", 19), Fi(), Fi(), Pi(38, "ul", 20), Pi(39, "li", 7), Pi(40, "a", 21), Ni(41, "span", 22), Ji(42, " Changer de mot de passe "), Fi(), Fi(), Pi(43, "li", 7), Pi(44, "a", 23), Vi("click", (function () {
          return e.authService.logoutUser()
        })), Ni(45, "span", 22), Ji(46, " Deconnexion "), Fi(), Fi(), Fi(), Fi(), Fi(), Fi(), Pi(47, "div", 24), Pi(48, "div", 25), Pi(49, "main", 26), Ni(50, "router-outlet"), Fi(), Fi(), Fi()), 2 & t && (Er(5), Ii("ngClass", e.status ? "sidebar-close" : "sidebar-open"), Er(42), Ii("ngClass", e.status ? "main-yes" : "main-no"))
      },
      directives: [Ec, Kp, tf, rf],
      styles: [""]
    }), t
  })();

  function iy(t, e) {
    if (1 & t && (Pi(0, "p", 13), Pi(1, "span"), Ji(2, "Salut, "), Pi(3, "b"), Ji(4), Fi(), Fi(), Pi(5, "span"), Ji(6, "Voici ce qui se passe aujourd'hui."), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(4), Yi(t.user.name)
    }
  }

  function oy(t, e) {
    if (1 & t && (Pi(0, "div", 14), Pi(1, "p", 15), Ji(2, "A.V.E.Cs"), Fi(), Pi(3, "p", 16), Ji(4), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(4), Yi(t.associations.length)
    }
  }

  function ay(t, e) {
    if (1 & t && (Pi(0, "div", 14), Pi(1, "p", 15), Ji(2, "M\xe9nages"), Fi(), Pi(3, "p", 16), Ji(4), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(4), Yi(t.households.length)
    }
  }

  function ly(t, e) {
    if (1 & t && (Pi(0, "p", 16), Ji(1), Fi()), 2 & t) {
      const t = ji(2);
      Er(1), Yi(t.suppliers.length)
    }
  }

  function cy(t, e) {
    1 & t && (Pi(0, "p", 16), Ji(1, "0"), Fi())
  }

  function uy(t, e) {
    if (1 & t && (Pi(0, "div", 14), Pi(1, "p", 15), Ji(2, "Appels d'offre"), Fi(), xi(3, ly, 2, 1, "p", 17), xi(4, cy, 2, 0, "p", 17), Fi()), 2 & t) {
      const t = ji();
      Er(3), Ii("ngIf", t.suppliers), Er(1), Ii("ngIf", !t.suppliers)
    }
  }

  function hy(t, e) {
    if (1 & t && (Pi(0, "p", 16), Ji(1), Fi()), 2 & t) {
      const t = ji(2);
      Er(1), Yi(t.suppliers.length)
    }
  }

  function dy(t, e) {
    1 & t && (Pi(0, "p", 16), Ji(1, "0"), Fi())
  }

  function py(t, e) {
    if (1 & t && (Pi(0, "div", 14), Pi(1, "p", 15), Ji(2, "Fournisseurs"), Fi(), xi(3, hy, 2, 1, "p", 17), xi(4, dy, 2, 0, "p", 17), Fi()), 2 & t) {
      const t = ji();
      Er(3), Ii("ngIf", t.suppliers), Er(1), Ii("ngIf", !t.suppliers)
    }
  }

  function fy(t, e) {
    if (1 & t && (Pi(0, "div", 18), Pi(1, "p", 19), Ji(2), Ni(3, "br"), Ji(4, " Besoins exprim\xe9s "), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(2), Ki("", t.needs.length, " ")
    }
  }

  function my(t, e) {
    if (1 & t && (Pi(0, "p", 20), Ji(1), Ni(2, "br"), Ji(3, " Plaintes "), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ki(" ", t.complaints.length, " ")
    }
  }
  let gy = (() => {
    class t {
      constructor(t, e, n, r, s, i, o) {
        this.authService = t, this.associationsService = e, this.householdsService = n, this.suppliersService = r, this.needsService = s, this.complaintsService = i, this.router = o
      }
      ngOnInit() {
        this.getUser(), this.getAssociations(), this.getHouseholds(), this.getSuppliers(), this.getNeeds(), this.getComplaints()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          t instanceof Iu && 401 === t.status && this.router.navigate(["/login"])
        })
      }
      getComplaints() {
        this.complaintsService.town().subscribe(t => this.complaints = t)
      }
      getAssociations() {
        this.associationsService.town().subscribe(t => this.associations = t)
      }
      getHouseholds() {
        this.householdsService.town().subscribe(t => this.households = t)
      }
      getSuppliers() {
        this.suppliersService.town().subscribe(t => this.suppliers = t)
      }
      getNeeds() {
        this.needsService.town().subscribe(t => this.needs = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(Sf), ki(hg), ki(dg), ki(pg), ki(fg), ki(mg), ki(Jp))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-townhalls-dashboard"]
      ],
      decls: 29,
      vars: 7,
      consts: [
        ["class", "connected", 4, "ngIf"],
        [1, "row", "enumeration"],
        [1, "col-lg-3"],
        ["class", "cadre", 4, "ngIf"],
        [1, "needs"],
        [1, "row"],
        [1, "col-lg-8"],
        ["class", "col-lg-4", 4, "ngIf"],
        [1, "col-lg-5"],
        [1, "btn", "btn-success"],
        [1, "col-lg-4", "text-center"],
        ["class", "big-title-green", 4, "ngIf"],
        ["routerLink", "/administrator/complaints"],
        [1, "connected"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        ["class", "value", 4, "ngIf"],
        [1, "col-lg-4"],
        [1, "big-title"],
        [1, "big-title-green"]
      ],
      template: function (t, e) {
        1 & t && (xi(0, iy, 7, 1, "p", 0), Pi(1, "section", 1), Pi(2, "div", 2), xi(3, oy, 5, 1, "div", 3), Fi(), Pi(4, "div", 2), xi(5, ay, 5, 1, "div", 3), Fi(), Pi(6, "div", 2), xi(7, uy, 5, 2, "div", 3), Fi(), Pi(8, "div", 2), xi(9, py, 5, 2, "div", 3), Fi(), Fi(), Pi(10, "section", 4), Pi(11, "div", 5), Pi(12, "div", 6), Pi(13, "h2"), Ji(14, "Expressions des besoins"), Fi(), Pi(15, "div", 5), xi(16, fy, 5, 1, "div", 7), Pi(17, "div", 8), Pi(18, "p"), Ji(19, " Besoins Trait\xe9s: 0"), Fi(), Pi(20, "p"), Ji(21, " Sans r\xe9actions: 0"), Fi(), Fi(), Pi(22, "div", 2), Pi(23, "a", 9), Ji(24, "Voir les besoins"), Fi(), Fi(), Fi(), Fi(), Pi(25, "div", 10), xi(26, my, 4, 1, "p", 11), Pi(27, "a", 12), Ji(28, "Voir toutes les plaintes"), Fi(), Fi(), Fi(), Fi()), 2 & t && (Ii("ngIf", e.user), Er(3), Ii("ngIf", e.associations), Er(2), Ii("ngIf", e.households), Er(2), Ii("ngIf", e.suppliers), Er(2), Ii("ngIf", e.suppliers), Er(7), Ii("ngIf", e.needs), Er(10), Ii("ngIf", e.complaints))
      },
      directives: [Tc, Kp],
      styles: [""]
    }), t
  })();

  function vy(t, e) {
    if (1 & t) {
      const t = Ri();
      Pi(0, "tr", 7), Vi("click", (function () {
        Be(t);
        const n = e.$implicit;
        return ji(2).onSelected(n)
      })), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Fi()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = ji(2);
      Er(2), Ki("", n.textLimit(t.complaint), "..."), Er(2), Yi(t.household), Er(2), Yi(t.complaintDate)
    }
  }

  function yy(t, e) {
    if (1 & t && (Pi(0, "div", 1), Pi(1, "div", 2), Pi(2, "h3"), Ji(3, "Liste de plaintes"), Fi(), Pi(4, "div", 3), Ji(5, " Clique sur la ligne de la plainte pour voir les details "), Fi(), Ni(6, "br"), Pi(7, "table", 4), Pi(8, "tbody"), xi(9, vy, 7, 3, "tr", 5), Fi(), Fi(), Fi(), Pi(10, "div", 6), Ni(11, "router-outlet"), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(9), Ii("ngForOf", t.complaints)
    }
  }
  let by = (() => {
    class t {
      constructor(t, e, n) {
        this.complaintsService = t, this.activatedRoute = e, this.router = n
      }
      ngOnInit() {
        this.getComplaints()
      }
      getComplaints() {
        this.complaintsService.town().subscribe(t => this.complaints = t)
      }
      onSelected(t) {
        this.router.navigate([t.idcomplaint], {
          relativeTo: this.activatedRoute
        })
      }
      textLimit(t) {
        return t.substr(0, 20)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(mg), ki($d), ki(Jp))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-complaints-town"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "row", 4, "ngIf"],
        [1, "row"],
        [1, "col-lg-8"],
        [1, "alert", "alert-warning"],
        [1, "table"],
        [3, "click", 4, "ngFor", "ngForOf"],
        [1, "col-lg-4"],
        [3, "click"]
      ],
      template: function (t, e) {
        1 & t && xi(0, yy, 12, 1, "div", 0), 2 & t && Ii("ngIf", e.complaints)
      },
      directives: [Tc, kc, rf],
      styles: [""]
    }), t
  })();

  function wy(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Pi(6, "a", 3), Ji(7, "Voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.association), Er(2), Yi(t.chief), Er(2), Hi("routerLink", "/administrator/associations/view/", t.idassociation, "")
    }
  }
  let _y = (() => {
    class t {
      constructor(t, e) {
        this.townService = t, this.associationsService = e
      }
      ngOnInit() {}
      getAssociation() {
        this.associationsService.town().subscribe(t => this.associations = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(ug), ki(hg))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-associations-town"]
      ],
      decls: 9,
      vars: 1,
      consts: [
        ["routerLink", "/townhalls/associations/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h1"), Ji(1, "Associations"), Fi(), Pi(2, "h3"), Ji(3, " Liste des associations "), Pi(4, "a", 0), Ji(5, "Ajouter"), Fi(), Fi(), Pi(6, "table", 1), Pi(7, "tbody"), xi(8, wy, 8, 3, "tr", 2), Fi(), Fi()), 2 & t && (Er(8), Ii("ngForOf", e.associations))
      },
      directives: [Kp, kc],
      styles: [""]
    }), t
  })();

  function Cy(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Pi(7, "td"), Pi(8, "a", 2), Ji(9, "Voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.household), Er(2), Yi(t.association), Er(2), Yi(t.cellPhone), Er(2), Hi("routerLink", "/townhalls/households/view/", t.idhousehold, "")
    }
  }
  let Sy = (() => {
    class t {
      constructor(t) {
        this.householdsService = t
      }
      ngOnInit() {
        this.getHouseholds()
      }
      getHouseholds() {
        this.householdsService.town().subscribe(t => this.households = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(dg))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-households-town"]
      ],
      decls: 6,
      vars: 2,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "h3"), Ji(1), Fi(), Pi(2, "table", 0), Ni(3, "thead"), Pi(4, "tbody"), xi(5, Cy, 10, 4, "tr", 1), Fi(), Fi()), 2 & t && (Er(1), Ki(" Liste des M\xe9nages(", e.households.length, ")"), Er(4), Ii("ngForOf", e.households))
      },
      directives: [kc, Kp],
      styles: [""]
    }), t
  })();

  function Ey(t, e) {
    if (1 & t && (Pi(0, "h3"), Ji(1), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ki(" Liste des besoins (", t.needs.length, ")")
    }
  }

  function xy(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Pi(7, "td"), Pi(8, "a", 3), Ji(9, "voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit,
        n = ji();
      Er(2), Yi(t.need), Er(2), Yi(n.getStatus(t.status)), Er(2), Yi(t.needDate), Er(2), Hi("routerLink", "/townhalls/needs/view/", t.idneed, "")
    }
  }
  let ky = (() => {
    class t {
      constructor(t) {
        this.needsService = t
      }
      ngOnInit() {}
      getNeeds() {
        this.needsService.town().subscribe(t => this.needs = t)
      }
      getStatus(t) {
        return {
          0: "NON PUBLI\xc9",
          1: "PUBLI\xc9",
          2: "ANNUL\xc9E"
        } [t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(fg))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-needs-town"]
      ],
      decls: 4,
      vars: 2,
      consts: [
        [4, "ngIf"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (xi(0, Ey, 2, 1, "h3", 0), Pi(1, "table", 1), Pi(2, "tbody"), xi(3, xy, 10, 4, "tr", 2), Fi(), Fi()), 2 & t && (Ii("ngIf", e.needs), Er(3), Ii("ngForOf", e.needs))
      },
      directives: [Tc, kc, Kp],
      styles: [""]
    }), t
  })();

  function Ay(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Pi(7, "td"), Pi(8, "a", 2), Ji(9, "Voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.supplier), Er(2), Yi(t.service), Er(2), Yi(t.phone), Er(2), Hi("routerLink", "/suppliers/view/", t.idsupplier, "")
    }
  }
  let Ty = (() => {
    class t {
      constructor(t) {
        this.suppliersService = t
      }
      ngOnInit() {
        this.getSuppliers()
      }
      getSuppliers() {
        this.suppliersService.town().subscribe(t => this.suppliers = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(pg))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-suppliers-town"]
      ],
      decls: 4,
      vars: 1,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "table", 0), Ni(1, "thead"), Pi(2, "tbody"), xi(3, Ay, 10, 4, "tr", 1), Fi(), Fi()), 2 & t && (Er(3), Ii("ngForOf", e.suppliers))
      },
      directives: [kc, Kp],
      styles: [""]
    }), t
  })();

  function Iy(t, e) {
    if (1 & t && (Pi(0, "div", 27), Ji(1), Fi()), 2 & t) {
      const t = ji();
      Er(1), Yi(t.successMessage)
    }
  }

  function Oy(t, e) {
    if (1 & t && (Pi(0, "option", 28), Ji(1), Fi()), 2 & t) {
      const t = e.$implicit;
      Ii("value", t.idservice), Er(1), Yi(t.service)
    }
  }
  let Py = (() => {
    class t {
      constructor(t, e) {
        this.suppliersService = t, this.fb = e, this.successMessage = ""
      }
      ngOnInit() {
        this.getDomains(), this.createForm()
      }
      getDomains() {
        this.suppliersService.getDomains().subscribe(t => {
          this.services = t
        }, t => {
          console.log(t)
        })
      }
      createForm() {
        this.supplierForm = this.fb.group({
          serviceId: ["", Qf.required],
          supplier: ["", Qf.required],
          legalForm: ["", Qf.required],
          tradeRegister: ["", Qf.required],
          taxpayer: ["", Qf.required],
          address: ["", Qf.required],
          phone: ["", Qf.required],
          email: ["", [Qf.required, Qf.email]]
        })
      }
      onSubmit() {
        this.suppliersService.setSupplier(this.supplierForm.value).subscribe(t => {
          this.successMessage = "Fournisseur enr\xe9gistr\xe9 avec succ\xe8s"
        }, t => {
          console.log(t)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(ki(pg), ki(Ym))
    }, t.\u0275cmp = he({
      type: t,
      selectors: [
        ["app-suppliers-add"]
      ],
      decls: 45,
      vars: 4,
      consts: [
        [1, "col-lg-8"],
        ["class", "alert alert-success", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "supplier"],
        ["type", "text", "formControlName", "supplier", "name", "supplier", 1, "form-control"],
        ["for", "serviceId"],
        ["name", "serviceId", "id", "serviceId", "formControlName", "serviceId", 1, "form-control"],
        ["value", ""],
        [3, "value", 4, "ngFor", "ngForOf"],
        [1, "form-row"],
        [1, "form-group", "col-md-4"],
        ["for", "legalForm"],
        ["type", "text", "formControlName", "legalForm", "name", "legalForm", 1, "form-control"],
        ["for", "tradeRegister"],
        ["type", "text", "formControlName", "tradeRegister", "name", "tradeRegister", 1, "form-control"],
        ["for", "taxpayer"],
        ["type", "text", "formControlName", "taxpayer", "name", "taxpayer", 1, "form-control"],
        [1, "form-group", "col-md-5"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "name", "phone", 1, "form-control"],
        [1, "form-group", "col-md-7"],
        ["for", "mail"],
        ["type", "email", "formControlName", "email", "name", "email", 1, "form-control"],
        ["for", "address"],
        ["type", "text", "formControlName", "address", "name", "address", 1, "form-control"],
        ["type", "submit", 1, "button", 3, "disabled"],
        [1, "alert", "alert-success"],
        [3, "value"]
      ],
      template: function (t, e) {
        1 & t && (Pi(0, "div", 0), Pi(1, "h3"), Ji(2, "Ajouter un fournisseur"), Fi(), xi(3, Iy, 2, 1, "div", 1), Pi(4, "form", 2), Vi("ngSubmit", (function () {
          return e.onSubmit()
        })), Pi(5, "div", 3), Pi(6, "label", 4), Ji(7, "Nom du fournisseur"), Fi(), Ni(8, "input", 5), Fi(), Pi(9, "div", 3), Pi(10, "label", 6), Ji(11, "Service"), Fi(), Pi(12, "select", 7), Pi(13, "option", 8), Ji(14, "Choisir"), Fi(), xi(15, Oy, 2, 2, "option", 9), Fi(), Fi(), Pi(16, "div", 10), Pi(17, "div", 11), Pi(18, "label", 12), Ji(19, "Forme Juridique"), Fi(), Ni(20, "input", 13), Fi(), Pi(21, "div", 11), Pi(22, "label", 14), Ji(23, "R\xe9gistre de commerce"), Fi(), Ni(24, "input", 15), Fi(), Pi(25, "div", 11), Pi(26, "label", 16), Ji(27, "Num\xe9ro contribuable"), Fi(), Ni(28, "input", 17), Fi(), Fi(), Pi(29, "div", 10), Pi(30, "div", 18), Pi(31, "label", 19), Ji(32, "T\xe9l\xe9phone"), Fi(), Ni(33, "input", 20), Fi(), Pi(34, "div", 21), Pi(35, "label", 22), Ji(36, "E-mail"), Fi(), Ni(37, "input", 23), Fi(), Fi(), Pi(38, "div", 3), Pi(39, "label", 24), Ji(40, "Adresse"), Fi(), Ni(41, "input", 25), Fi(), Pi(42, "div", 3), Pi(43, "button", 26), Ji(44, "Enr\xe9gistrer"), Fi(), Fi(), Fi(), Fi()), 2 & t && (Er(3), Ii("ngIf", e.successMessage), Er(1), Ii("formGroup", e.supplierForm), Er(11), Ii("ngForOf", e.services), Er(28), Ii("disabled", !e.supplierForm.valid))
      },
      directives: [Tc, Vm, zf, jm, Df, qf, Wm, pm, fm, ym, kc],
      styles: [""]
    }), t
  })();
  const Fy = [{
    path: "townhalls",
    component: sy,
    canActivate: [rv],
    children: [{
      path: "dashboard",
      component: gy
    }, {
      path: "associations",
      component: zv,
      children: [{
        path: "",
        component: _y
      }, {
        path: "add",
        component: ev
      }, {
        path: "view/:id",
        component: nv
      }]
    }, {
      path: "officers",
      component: Lv,
      children: [{
        path: "password",
        component: (() => {
          class t {
            constructor(t, e, n) {
              this.officesService = t, this.fb = e, this.router = n
            }
            ngOnInit() {
              this.createForm()
            }
            createForm() {
              this.officerForm = this.fb.group({
                password: ["", Qf.required],
                newPassword: ["", Qf.required],
                confirmPassword: ["", [Qf.required]]
              })
            }
            onSubmit() {
              this.officesService.password(this.officerForm.value).subscribe(t => {
                this.successMessage = "Mot de passe modifi\xe9", this.router.navigate(["/login"])
              }, t => {
                this.errorMessage = "Erreur"
              })
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(ki(Uv), ki(Ym), ki(Jp))
          }, t.\u0275cmp = he({
            type: t,
            selectors: [
              ["app-officers-password"]
            ],
            decls: 19,
            vars: 2,
            consts: [
              [1, "col-lg-8"],
              [3, "formGroup", "ngSubmit"],
              [1, "form-group"],
              ["for", "password"],
              ["type", "password", "formControlName", "password", "name", "password", "id", "password", 1, "form-control"],
              ["for", "newPassword"],
              ["type", "password", "formControlName", "newPassword", "name", "newPassword", "id", "newPassword", 1, "form-control"],
              ["for", "confirmPassword"],
              ["type", "password", "formControlName", "confirmPassword", "name", "confirmPassword", "id", "confirmPassword", 1, "form-control"],
              ["type", "submit", 1, "bouton", 3, "disabled"]
            ],
            template: function (t, e) {
              1 & t && (Pi(0, "div", 0), Pi(1, "h3"), Ji(2, "Changer de mot de passe"), Fi(), Pi(3, "form", 1), Vi("ngSubmit", (function () {
                return e.onSubmit()
              })), Pi(4, "div", 2), Pi(5, "label", 3), Ji(6, "Ancien Mot de passe"), Fi(), Ni(7, "input", 4), Fi(), Pi(8, "div", 2), Pi(9, "label", 5), Ji(10, "Ancien Mot de passe"), Fi(), Ni(11, "input", 6), Fi(), Pi(12, "div", 2), Pi(13, "label", 7), Ji(14, "Ancien Mot de passe"), Fi(), Ni(15, "input", 8), Fi(), Pi(16, "div", 2), Pi(17, "button", 9), Ji(18, "Valider"), Fi(), Fi(), Fi(), Fi()), 2 & t && (Er(3), Ii("formGroup", e.officerForm), Er(14), Ii("disabled", !e.officerForm.valid))
            },
            directives: [Vm, zf, jm, Df, qf, Wm],
            styles: [""]
          }), t
        })()
      }, {
        path: "view",
        component: qv
      }]
    }, {
      path: "suppliers",
      component: Qv,
      children: [{
        path: "",
        component: Ty
      }, {
        path: "add",
        component: Py
      }, {
        path: "view/:id",
        component: Zv
      }]
    }, {
      path: "households",
      component: Ev,
      children: [{
        path: "",
        component: Sy
      }, {
        path: "add",
        component: Tv
      }, {
        path: "view/:id",
        component: Tv
      }]
    }, {
      path: "needs",
      component: Pv,
      children: [{
        path: "",
        component: ky
      }, {
        path: "view/:id",
        component: Vv
      }]
    }, {
      path: "complaints",
      component: cv,
      children: [{
        path: "",
        component: by,
        children: [{
          path: ":id",
          component: mv
        }]
      }]
    }]
  }];
  let Ny = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [ff.forRoot(Fy)], ff
      ]
    }), t
  })(), Ry = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Km, Bu, Ny]
      ]
    }), t
  })();

  function My(t, e) {
    if (1 & t && (Pi(0, "p", 13), Pi(1, "span"), Ji(2, "Salut, "), Pi(3, "b"), Ji(4), Fi(), Fi(), Pi(5, "span"), Ji(6, "Voici ce qui se passe aujourd'hui."), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(4), Yi(t.user.name)
    }
  }

  function Dy(t, e) {
    if (1 & t && (Pi(0, "div", 14), Pi(1, "p", 15), Ji(2, "M\xe9nages"), Fi(), Pi(3, "p", 16), Ji(4), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(4), Yi(t.households.length)
    }
  }

  function Vy(t, e) {
    if (1 & t && (Pi(0, "p", 16), Ji(1), Fi()), 2 & t) {
      const t = ji(2);
      Er(1), Yi(t.complaints.length)
    }
  }

  function Ly(t, e) {
    if (1 & t && (Pi(0, "div", 14), Pi(1, "p", 15), Ji(2, "Plaintes"), Fi(), xi(3, Vy, 2, 1, "p", 17), Fi()), 2 & t) {
      const t = ji();
      Er(3), Ii("ngIf", t.complaints)
    }
  }

  function Uy(t, e) {
    if (1 & t && (Pi(0, "div", 18), Pi(1, "p", 19), Ji(2), Ni(3, "br"), Ji(4, " Besoins exprim\xe9s "), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(2), Ki("", t.needs.length, " ")
    }
  }

  function jy(t, e) {
    if (1 & t && (Pi(0, "p", 20), Ji(1), Ni(2, "br"), Ji(3, " Plaintes "), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ki(" ", t.complaints.length, " ")
    }
  }

  function Hy(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Pi(7, "td"), Pi(8, "a", 2), Ji(9, "Voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.household), Er(2), Yi(t.association), Er(2), Yi(t.cellPhone), Er(2), Hi("routerLink", "/townhalls/households/view/", t.idhousehold, "")
    }
  }

  function $y(t, e) {
    if (1 & t && (Pi(0, "h3"), Ji(1), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ki(" Liste des besoins (", t.needs.length, ")")
    }
  }

  function qy(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Pi(7, "td"), Pi(8, "a", 3), Ji(9, "voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit,
        n = ji();
      Er(2), Yi(t.need), Er(2), Yi(n.getStatus(t.status)), Er(2), Yi(t.needDate), Er(2), Hi("routerLink", "/townhalls/needs/view/", t.idneed, "")
    }
  }

  function zy(t, e) {
    if (1 & t) {
      const t = Ri();
      Pi(0, "tr", 7), Vi("click", (function () {
        Be(t);
        const n = e.$implicit;
        return ji(2).onSelected(n)
      })), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Ji(6), Fi(), Fi()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = ji(2);
      Er(2), Ki("", n.textLimit(t.complaint), "..."), Er(2), Yi(t.household), Er(2), Yi(t.complaintDate)
    }
  }

  function Gy(t, e) {
    if (1 & t && (Pi(0, "div", 1), Pi(1, "div", 2), Pi(2, "h3"), Ji(3, "Liste de plaintes"), Fi(), Pi(4, "div", 3), Ji(5, " Clique sur la ligne de la plainte pour voir les details "), Fi(), Ni(6, "br"), Pi(7, "table", 4), Pi(8, "tbody"), xi(9, zy, 7, 3, "tr", 5), Fi(), Fi(), Fi(), Pi(10, "div", 6), Ni(11, "router-outlet"), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(9), Ii("ngForOf", t.complaints)
    }
  }
  const By = [{
    path: "association",
    component: (() => {
      class t {
        constructor(t) {
          this.authService = t
        }
        ngOnInit() {}
        sidebar() {
          this.status = !this.status
        }
      }
      return t.\u0275fac = function (e) {
        return new(e || t)(ki(Sf))
      }, t.\u0275cmp = he({
        type: t,
        selectors: [
          ["app-associations-main"]
        ],
        decls: 42,
        vars: 2,
        consts: [
          [1, "header"],
          [1, "toggle-btn", 3, "click"],
          ["id", "sidebar", 3, "ngClass"],
          [1, "sidebar-sticky"],
          [1, "nav", "flex-column"],
          [1, "nav-item"],
          ["routerLink", "/association/dashboard", "routerLinkActive", "active", 1, "nav-link"],
          ["routerLink", "/association/households", "routerLinkActive", "active", 1, "nav-link"],
          ["data-feather", "users"],
          ["routerLink", "/association/needs", "routerLinkActive", "active", 1, "nav-link"],
          ["data-feather", "bar-chart-2"],
          ["routerLink", "/association/complaints", "routerLinkActive", "active", 1, "nav-link"],
          [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
          ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
          ["data-feather", "plus-circle"],
          [1, "nav", "flex-column", "mb-2"],
          ["routerLink", "/townhalls/officers/password", "routerLinkActive", "active", 1, "nav-link"],
          ["data-feather", "file-text"],
          [1, "nav-link", 3, "click"],
          ["id", "main", 3, "ngClass"],
          [1, "container-fluid"],
          ["role", "main"]
        ],
        template: function (t, e) {
          1 & t && (Pi(0, "header", 0), Pi(1, "div", 1), Vi("click", (function () {
            return e.sidebar()
          })), Ni(2, "span"), Ni(3, "span"), Ni(4, "span"), Fi(), Fi(), Pi(5, "div", 2), Pi(6, "nav"), Pi(7, "div", 3), Pi(8, "ul", 4), Pi(9, "li", 5), Pi(10, "a", 6), Ji(11, " Tableau de Bord "), Fi(), Fi(), Pi(12, "li", 5), Pi(13, "a", 7), Ni(14, "span", 8), Ji(15, " M\xe9nages "), Fi(), Fi(), Pi(16, "li", 5), Pi(17, "a", 9), Ni(18, "span", 10), Ji(19, " Appels d'offre "), Fi(), Fi(), Pi(20, "li", 5), Pi(21, "a", 11), Ni(22, "span", 10), Ji(23, " R\xe9actions "), Fi(), Fi(), Fi(), Pi(24, "h6", 12), Pi(25, "span"), Ji(26, "Param\xe8trages"), Fi(), Pi(27, "a", 13), Ni(28, "span", 14), Fi(), Fi(), Pi(29, "ul", 15), Pi(30, "li", 5), Pi(31, "a", 16), Ni(32, "span", 17), Ji(33, " Changer de mot de passe "), Fi(), Fi(), Pi(34, "li", 5), Pi(35, "a", 18), Vi("click", (function () {
            return e.authService.logoutUser()
          })), Ni(36, "span", 17), Ji(37, " Deconnexion "), Fi(), Fi(), Fi(), Fi(), Fi(), Fi(), Pi(38, "div", 19), Pi(39, "div", 20), Pi(40, "main", 21), Ni(41, "router-outlet"), Fi(), Fi(), Fi()), 2 & t && (Er(5), Ii("ngClass", e.status ? "sidebar-close" : "sidebar-open"), Er(33), Ii("ngClass", e.status ? "main-yes" : "main-no"))
        },
        directives: [Ec, Kp, tf, rf],
        styles: [""]
      }), t
    })(),
    canActivate: [rv],
    children: [{
      path: "dashboard",
      component: (() => {
        class t {
          constructor(t, e, n, r, s) {
            this.authService = t, this.householdsService = e, this.needsService = n, this.complaintsService = r, this.router = s
          }
          ngOnInit() {
            this.getUser(), this.getHouseholds(), this.getNeeds(), this.getComplaints()
          }
          getUser() {
            this.authService.user().subscribe(t => this.user = t)
          }
          getComplaints() {
            this.complaintsService.association().subscribe(t => this.complaints = t)
          }
          getHouseholds() {
            this.householdsService.association().subscribe(t => this.households = t)
          }
          getNeeds() {
            this.needsService.association().subscribe(t => this.needs = t)
          }
        }
        return t.\u0275fac = function (e) {
          return new(e || t)(ki(Sf), ki(dg), ki(fg), ki(mg), ki(Jp))
        }, t.\u0275cmp = he({
          type: t,
          selectors: [
            ["app-associations-dashboard"]
          ],
          decls: 25,
          vars: 5,
          consts: [
            ["class", "connected", 4, "ngIf"],
            [1, "row", "enumeration"],
            [1, "col-lg-3"],
            ["class", "cadre", 4, "ngIf"],
            [1, "needs"],
            [1, "row"],
            [1, "col-lg-6"],
            ["class", "col-lg-4", 4, "ngIf"],
            [1, "col-lg-5"],
            [1, "btn", "btn-success"],
            [1, "col-lg-6", "text-center"],
            ["class", "big-title-green", 4, "ngIf"],
            ["routerLink", "/administrator/complaints"],
            [1, "connected"],
            [1, "cadre"],
            [1, "title"],
            [1, "value"],
            ["class", "value", 4, "ngIf"],
            [1, "col-lg-4"],
            [1, "big-title"],
            [1, "big-title-green"]
          ],
          template: function (t, e) {
            1 & t && (xi(0, My, 7, 1, "p", 0), Pi(1, "section", 1), Pi(2, "div", 2), xi(3, Dy, 5, 1, "div", 3), Fi(), Pi(4, "div", 2), xi(5, Ly, 4, 1, "div", 3), Fi(), Fi(), Pi(6, "section", 4), Pi(7, "div", 5), Pi(8, "div", 6), Pi(9, "h2"), Ji(10, "Expressions des besoins"), Fi(), Pi(11, "div", 5), xi(12, Uy, 5, 1, "div", 7), Pi(13, "div", 8), Pi(14, "p"), Ji(15, " Besoins Trait\xe9s: 0"), Fi(), Pi(16, "p"), Ji(17, " Sans r\xe9actions: 0"), Fi(), Fi(), Pi(18, "div", 2), Pi(19, "a", 9), Ji(20, "Voir les besoins"), Fi(), Fi(), Fi(), Fi(), Pi(21, "div", 10), xi(22, jy, 4, 1, "p", 11), Pi(23, "a", 12), Ji(24, "Voir toutes les plaintes"), Fi(), Fi(), Fi(), Fi()), 2 & t && (Ii("ngIf", e.user), Er(3), Ii("ngIf", e.households), Er(2), Ii("ngIf", e.complaints), Er(7), Ii("ngIf", e.needs), Er(10), Ii("ngIf", e.complaints))
          },
          directives: [Tc, Kp],
          styles: [""]
        }), t
      })()
    }, {
      path: "households",
      component: Ev,
      children: [{
        path: "",
        component: (() => {
          class t {
            constructor(t) {
              this.householdsService = t
            }
            ngOnInit() {
              this.getHouseholds()
            }
            getHouseholds() {
              this.householdsService.association().subscribe(t => this.households = t)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(ki(dg))
          }, t.\u0275cmp = he({
            type: t,
            selectors: [
              ["app-households-association"]
            ],
            decls: 6,
            vars: 2,
            consts: [
              [1, "table"],
              [4, "ngFor", "ngForOf"],
              [3, "routerLink"]
            ],
            template: function (t, e) {
              1 & t && (Pi(0, "h3"), Ji(1), Fi(), Pi(2, "table", 0), Ni(3, "thead"), Pi(4, "tbody"), xi(5, Hy, 10, 4, "tr", 1), Fi(), Fi()), 2 & t && (Er(1), Ki(" Liste des M\xe9nages(", e.households.length, ")"), Er(4), Ii("ngForOf", e.households))
            },
            directives: [kc, Kp],
            styles: [""]
          }), t
        })()
      }, {
        path: "add",
        component: Tv
      }, {
        path: "view/:id",
        component: Ov
      }]
    }, {
      path: "needs",
      component: Pv,
      children: [{
        path: "",
        component: (() => {
          class t {
            constructor(t) {
              this.needsService = t
            }
            ngOnInit() {}
            getNeeds() {
              this.needsService.association().subscribe(t => this.needs = t)
            }
            getStatus(t) {
              return {
                0: "NON PUBLI\xc9",
                1: "PUBLI\xc9",
                2: "ANNUL\xc9E"
              } [t]
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(ki(fg))
          }, t.\u0275cmp = he({
            type: t,
            selectors: [
              ["app-needs-association"]
            ],
            decls: 4,
            vars: 2,
            consts: [
              [4, "ngIf"],
              [1, "table"],
              [4, "ngFor", "ngForOf"],
              [3, "routerLink"]
            ],
            template: function (t, e) {
              1 & t && (xi(0, $y, 2, 1, "h3", 0), Pi(1, "table", 1), Pi(2, "tbody"), xi(3, qy, 10, 4, "tr", 2), Fi(), Fi()), 2 & t && (Ii("ngIf", e.needs), Er(3), Ii("ngForOf", e.needs))
            },
            directives: [Tc, kc, Kp],
            styles: [""]
          }), t
        })()
      }, {
        path: "add/:id",
        component: Mv
      }, {
        path: "view/:id",
        component: Vv
      }]
    }, {
      path: "complaints",
      component: cv,
      children: [{
        path: "",
        component: (() => {
          class t {
            constructor(t, e, n) {
              this.complaintsService = t, this.activatedRoute = e, this.router = n
            }
            ngOnInit() {
              this.getComplaints()
            }
            getComplaints() {
              this.complaintsService.association().subscribe(t => this.complaints = t)
            }
            onSelected(t) {
              this.router.navigate([t.idcomplaint], {
                relativeTo: this.activatedRoute
              })
            }
            textLimit(t) {
              return t.substr(0, 20)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(ki(mg), ki($d), ki(Jp))
          }, t.\u0275cmp = he({
            type: t,
            selectors: [
              ["app-complaints-association"]
            ],
            decls: 1,
            vars: 1,
            consts: [
              ["class", "row", 4, "ngIf"],
              [1, "row"],
              [1, "col-lg-8"],
              [1, "alert", "alert-warning"],
              [1, "table"],
              [3, "click", 4, "ngFor", "ngForOf"],
              [1, "col-lg-4"],
              [3, "click"]
            ],
            template: function (t, e) {
              1 & t && xi(0, Gy, 12, 1, "div", 0), 2 & t && Ii("ngIf", e.complaints)
            },
            directives: [Tc, kc, rf],
            styles: [""]
          }), t
        })(),
        children: [{
          path: ":id",
          component: mv
        }]
      }]
    }]
  }];
  let Wy = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [ff.forRoot(By)], ff
      ]
    }), t
  })(), Zy = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Km, Bu, Wy]
      ]
    }), t
  })();

  function Qy(t, e) {
    if (1 & t && (Pi(0, "p", 8), Pi(1, "span"), Ji(2, "Salut, "), Pi(3, "b"), Ji(4), Fi(), Fi(), Pi(5, "span"), Ji(6, "Voici ce qui se passe aujourd'hui."), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(4), Yi(t.user.name)
    }
  }

  function Jy(t, e) {
    if (1 & t && (Pi(0, "div", 9), Pi(1, "p", 10), Ji(2, "Nouvels appels d'offres"), Fi(), Pi(3, "p", 11), Ji(4), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(4), Yi(t.needs.length)
    }
  }

  function Yy(t, e) {
    if (1 & t && (Pi(0, "div", 9), Pi(1, "p", 10), Ji(2, "Plaintes"), Fi(), Pi(3, "p", 11), Ji(4), Fi(), Fi()), 2 & t) {
      const t = ji();
      Er(4), Yi(t.complaints.length)
    }
  }

  function Ky(t, e) {
    if (1 & t && (Pi(0, "h3"), Ji(1), Fi()), 2 & t) {
      const t = ji();
      Er(1), Ki(" Liste des besoins (", t.needs.length, ")")
    }
  }

  function Xy(t, e) {
    if (1 & t && (Pi(0, "tr"), Pi(1, "td"), Ji(2), Fi(), Pi(3, "td"), Ji(4), Fi(), Pi(5, "td"), Pi(6, "a", 12), Ji(7, "voir detail"), Fi(), Fi(), Fi()), 2 & t) {
      const t = e.$implicit;
      Er(2), Yi(t.need), Er(2), Yi(t.needDate), Er(2), Hi("routerLink", "/suppliers/needs/view/", t.idneed, "")
    }
  }
  const tb = [{
    path: "supplier",
    component: (() => {
      class t {
        constructor(t) {
          this.authService = t
        }
        ngOnInit() {}
        sidebar() {
          this.status = !this.status
        }
      }
      return t.\u0275fac = function (e) {
        return new(e || t)(ki(Sf))
      }, t.\u0275cmp = he({
        type: t,
        selectors: [
          ["app-suppliers-main"]
        ],
        decls: 38,
        vars: 2,
        consts: [
          [1, "header"],
          [1, "toggle-btn", 3, "click"],
          ["id", "sidebar", 3, "ngClass"],
          [1, "sidebar-sticky"],
          [1, "nav", "flex-column"],
          [1, "nav-item"],
          ["routerLink", "/suppliers/dashboard", "routerLinkActive", "active", 1, "nav-link"],
          ["routerLink", "/townhalls/needs", "routerLinkActive", "active", 1, "nav-link"],
          ["data-feather", "bar-chart-2"],
          ["routerLink", "/townhalls/complaints", "routerLinkActive", "active", 1, "nav-link"],
          [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
          ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
          ["data-feather", "plus-circle"],
          [1, "nav", "flex-column", "mb-2"],
          ["routerLink", "/suppliers/password", "routerLinkActive", "active", 1, "nav-link"],
          ["data-feather", "file-text"],
          [1, "nav-link", 3, "click"],
          ["id", "main", 3, "ngClass"],
          [1, "container-fluid"],
          ["role", "main"]
        ],
        template: function (t, e) {
          1 & t && (Pi(0, "header", 0), Pi(1, "div", 1), Vi("click", (function () {
            return e.sidebar()
          })), Ni(2, "span"), Ni(3, "span"), Ni(4, "span"), Fi(), Fi(), Pi(5, "div", 2), Pi(6, "nav"), Pi(7, "div", 3), Pi(8, "ul", 4), Pi(9, "li", 5), Pi(10, "a", 6), Ji(11, " Tableau de Bord "), Fi(), Fi(), Pi(12, "li", 5), Pi(13, "a", 7), Ni(14, "span", 8), Ji(15, " Appels d'offre "), Fi(), Fi(), Pi(16, "li", 5), Pi(17, "a", 9), Ni(18, "span", 8), Ji(19, " R\xe9actions "), Fi(), Fi(), Fi(), Pi(20, "h6", 10), Pi(21, "span"), Ji(22, "Param\xe8trages"), Fi(), Pi(23, "a", 11), Ni(24, "span", 12), Fi(), Fi(), Pi(25, "ul", 13), Pi(26, "li", 5), Pi(27, "a", 14), Ni(28, "span", 15), Ji(29, " Changer de mot de passe "), Fi(), Fi(), Pi(30, "li", 5), Pi(31, "a", 16), Vi("click", (function () {
            return e.authService.logoutUser()
          })), Ni(32, "span", 15), Ji(33, " Deconnexion "), Fi(), Fi(), Fi(), Fi(), Fi(), Fi(), Pi(34, "div", 17), Pi(35, "div", 18), Pi(36, "main", 19), Ni(37, "router-outlet"), Fi(), Fi(), Fi()), 2 & t && (Er(5), Ii("ngClass", e.status ? "sidebar-close" : "sidebar-open"), Er(29), Ii("ngClass", e.status ? "main-yes" : "main-no"))
        },
        directives: [Ec, Kp, tf, rf],
        styles: [""]
      }), t
    })(),
    canActivate: [rv],
    children: [{
      path: "dashboard",
      component: (() => {
        class t {
          constructor(t, e, n, r, s, i, o) {
            this.authService = t, this.associationsService = e, this.householdsService = n, this.suppliersService = r, this.needsService = s, this.complaintsService = i, this.router = o
          }
          ngOnInit() {
            this.getUser(), this.getAssociations(), this.getHouseholds(), this.getSuppliers(), this.getNeeds(), this.getComplaints()
          }
          getUser() {
            this.authService.user().subscribe(t => this.user = t, t => {
              t instanceof Iu && 401 === t.status && this.router.navigate(["/login"])
            })
          }
          getComplaints() {
            this.complaintsService.town().subscribe(t => this.complaints = t)
          }
          getAssociations() {
            this.associationsService.town().subscribe(t => this.associations = t)
          }
          getHouseholds() {
            this.householdsService.town().subscribe(t => this.households = t)
          }
          getSuppliers() {
            this.suppliersService.town().subscribe(t => this.suppliers = t)
          }
          getNeeds() {
            this.needsService.town().subscribe(t => this.needs = t)
          }
        }
        return t.\u0275fac = function (e) {
          return new(e || t)(ki(Sf), ki(hg), ki(dg), ki(pg), ki(fg), ki(mg), ki(Jp))
        }, t.\u0275cmp = he({
          type: t,
          selectors: [
            ["app-suppliers-dashboard"]
          ],
          decls: 11,
          vars: 5,
          consts: [
            ["class", "connected", 4, "ngIf"],
            [1, "row", "enumeration"],
            [1, "col-lg-4"],
            ["class", "cadre", 4, "ngIf"],
            [1, "needs"],
            [4, "ngIf"],
            [1, "table"],
            [4, "ngFor", "ngForOf"],
            [1, "connected"],
            [1, "cadre"],
            [1, "title"],
            [1, "value"],
            [3, "routerLink"]
          ],
          template: function (t, e) {
            1 & t && (xi(0, Qy, 7, 1, "p", 0), Pi(1, "section", 1), Pi(2, "div", 2), xi(3, Jy, 5, 1, "div", 3), Fi(), Pi(4, "div", 2), xi(5, Yy, 5, 1, "div", 3), Fi(), Fi(), Pi(6, "section", 4), xi(7, Ky, 2, 1, "h3", 5), Pi(8, "table", 6), Pi(9, "tbody"), xi(10, Xy, 8, 3, "tr", 7), Fi(), Fi(), Fi()), 2 & t && (Ii("ngIf", e.user), Er(3), Ii("ngIf", e.associations), Er(2), Ii("ngIf", e.complaints), Er(2), Ii("ngIf", e.needs), Er(3), Ii("ngForOf", e.needs))
          },
          directives: [Tc, kc, Kp],
          styles: [""]
        }), t
      })()
    }, {
      path: "add",
      component: Py
    }, {
      path: "view",
      component: Zv
    }, {
      path: "needs",
      component: Pv,
      children: [{
        path: "",
        component: ky
      }, {
        path: "view/:id",
        component: Vv
      }]
    }, {
      path: "complaints",
      component: cv,
      children: [{
        path: "",
        component: by,
        children: [{
          path: ":id",
          component: mv
        }]
      }]
    }]
  }];
  let eb = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [ff.forRoot(tb)], ff
      ]
    }), t
  })(), nb = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Km, Bu, eb]
      ]
    }), t
  })(), rb = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Bu, Km]
      ]
    }), t
  })(), sb = (() => {
    class t {
      constructor(t, e) {
        this.authService = t, this.router = e
      }
      canActivate(t, e) {
        return !(!this.authService.loggedIn() || !this.authService.validity() || (this.router.navigate(["/administrator/dashboard"]), 0))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Zt(Sf), Zt(Jp))
    }, t.\u0275prov = ut({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), ib = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Bu, Km]
      ]
    }), t
  })();
  const ob = [];
  let ab = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [ff.forRoot(ob)], ff
      ]
    }), t
  })(), lb = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Bu, Km, ab]
      ]
    }), t
  })(), cb = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Km, Bu]
      ]
    }), t
  })(), ub = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Bu, Km]
      ]
    }), t
  })(), hb = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [Nc, ff, Bu, Km]
      ]
    }), t
  })(); ! function (t, e, n) {
    "string" != typeof e && (n = e, e = t[aa.LocaleId]), e = e.toLowerCase().replace(/_/g, "-"), sa[e] = t, n && (sa[e][aa.ExtraData] = n)
  }(If.a, void 0, void 0);
  let db = (() => {
    class t {}
    return t.\u0275mod = me({
      type: t,
      bootstrap: [Af]
    }), t.\u0275inj = ht({
      factory: function (e) {
        return new(e || t)
      },
      providers: [{
        provide: Ua,
        useValue: "fr-FR"
      }, {
        provide: Nu,
        useClass: Ef,
        multi: !0
      }, Sf, ug, hg, dg, pg, fg, Ng, iv, mg, rv, sb],
      imports: [
        [cu, kf, ag, ry, Ry, Zy, cb, ub, nb, ny, rb, ib, lb, hb]
      ]
    }), t
  })();
  (function () {
    if (sr) throw new Error("Cannot enable prod mode after platform setup.");
    rr = !1
  })(), au().bootstrapModule(db).catch(t => console.error(t))
}, zn8P: function (t, e) {
  function n(t) {
    return Promise.resolve().then((function () {
      var e = new Error("Cannot find module '" + t + "'");
      throw e.code = "MODULE_NOT_FOUND", e
    }))
  }
  n.keys = function () {
    return []
  }, n.resolve = n, t.exports = n, n.id = "zn8P"
}
}, [
  [0, 0]
]]);
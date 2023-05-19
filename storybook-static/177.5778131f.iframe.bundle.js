/*! For license information please see 177.5778131f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkpetbook_client = self.webpackChunkpetbook_client || []).push([
  [177],
  {
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg),
              value = info.value;
          } catch (error) {
            return void reject(error);
          }
          info.done
            ? resolve(value)
            : Promise.resolve(value).then(_next, _throw);
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(void 0);
            });
          };
        }
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _asyncToGenerator,
        });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        function _typeof(obj) {
          return (
            (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }
        function _toPropertyKey(arg) {
          var key = (function _toPrimitive(input, hint) {
            if ("object" !== _typeof(input) || null === input) return input;
            var prim = input[Symbol.toPrimitive];
            if (void 0 !== prim) {
              var res = prim.call(input, hint || "default");
              if ("object" !== _typeof(res)) return res;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === hint ? String : Number)(input);
          })(arg, "string");
          return "symbol" === _typeof(key) ? key : String(key);
        }
        function _defineProperty(obj, key, value) {
          return (
            (key = _toPropertyKey(key)) in obj
              ? Object.defineProperty(obj, key, {
                  value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (obj[key] = value),
            obj
          );
        }
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _defineProperty,
        });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        function _extends() {
          return (
            (_extends = Object.assign
              ? Object.assign.bind()
              : function (target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source)
                      Object.prototype.hasOwnProperty.call(source, key) &&
                        (target[key] = source[key]);
                  }
                  return target;
                }),
            _extends.apply(this, arguments)
          );
        }
        __webpack_require__.d(__webpack_exports__, { Z: () => _extends });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        function _objectWithoutProperties(source, excluded) {
          if (null == source) return {};
          var key,
            i,
            target = (function _objectWithoutPropertiesLoose(source, excluded) {
              if (null == source) return {};
              var key,
                i,
                target = {},
                sourceKeys = Object.keys(source);
              for (i = 0; i < sourceKeys.length; i++)
                (key = sourceKeys[i]),
                  excluded.indexOf(key) >= 0 || (target[key] = source[key]);
              return target;
            })(source, excluded);
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++)
              (key = sourceSymbolKeys[i]),
                excluded.indexOf(key) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(source, key) &&
                    (target[key] = source[key]));
          }
          return target;
        }
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _objectWithoutProperties,
        });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        function _arrayLikeToArray(arr, len) {
          (null == len || len > arr.length) && (len = arr.length);
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        function _slicedToArray(arr, i) {
          return (
            (function _arrayWithHoles(arr) {
              if (Array.isArray(arr)) return arr;
            })(arr) ||
            (function _iterableToArrayLimit(arr, i) {
              var _i =
                null == arr
                  ? null
                  : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                    arr["@@iterator"];
              if (null != _i) {
                var _s,
                  _e,
                  _x,
                  _r,
                  _arr = [],
                  _n = !0,
                  _d = !1;
                try {
                  if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                    if (Object(_i) !== _i) return;
                    _n = !1;
                  } else
                    for (
                      ;
                      !(_n = (_s = _x.call(_i)).done) &&
                      (_arr.push(_s.value), _arr.length !== i);
                      _n = !0
                    );
                } catch (err) {
                  (_d = !0), (_e = err);
                } finally {
                  try {
                    if (
                      !_n &&
                      null != _i.return &&
                      ((_r = _i.return()), Object(_r) !== _r)
                    )
                      return;
                  } finally {
                    if (_d) throw _e;
                  }
                }
                return _arr;
              }
            })(arr, i) ||
            (function _unsupportedIterableToArray(o, minLen) {
              if (o) {
                if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                return (
                  "Object" === n && o.constructor && (n = o.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(o)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? _arrayLikeToArray(o, minLen)
                    : void 0
                );
              }
            })(arr, i) ||
            (function _nonIterableRest() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        __webpack_require__.d(__webpack_exports__, { Z: () => _slicedToArray });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var _typeof = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/typeof.js"
        ).default;
        function _regeneratorRuntime() {
          "use strict";
          (module.exports = _regeneratorRuntime =
            function _regeneratorRuntime() {
              return exports;
            }),
            (module.exports.__esModule = !0),
            (module.exports.default = module.exports);
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty =
              Object.defineProperty ||
              function (obj, key, desc) {
                obj[key] = desc.value;
              },
            $Symbol = "function" == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || "@@iterator",
            asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
            toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            return (
              Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              obj[key]
            );
          }
          try {
            define({}, "");
          } catch (err) {
            define = function define(obj, key, value) {
              return (obj[key] = value);
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator =
                outerFn && outerFn.prototype instanceof Generator
                  ? outerFn
                  : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return (
              defineProperty(generator, "_invoke", {
                value: makeInvokeMethod(innerFn, self, context),
              }),
              generator
            );
          }
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype =
              getProto && getProto(getProto(values([])));
          NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
            (IteratorPrototype = NativeIteratorPrototype);
          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ("throw" !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value &&
                  "object" == _typeof(value) &&
                  hasOwn.call(value, "__await")
                  ? PromiseImpl.resolve(value.__await).then(
                      function (value) {
                        invoke("next", value, resolve, reject);
                      },
                      function (err) {
                        invoke("throw", err, resolve, reject);
                      }
                    )
                  : PromiseImpl.resolve(value).then(
                      function (unwrapped) {
                        (result.value = unwrapped), resolve(result);
                      },
                      function (error) {
                        return invoke("throw", error, resolve, reject);
                      }
                    );
              }
              reject(record.arg);
            }
            var previousPromise;
            defineProperty(this, "_invoke", {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return (previousPromise = previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            var state = "suspendedStart";
            return function (method, arg) {
              if ("executing" === state)
                throw new Error("Generator is already running");
              if ("completed" === state) {
                if ("throw" === method) throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg; ; ) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if ("next" === context.method)
                  context.sent = context._sent = context.arg;
                else if ("throw" === context.method) {
                  if ("suspendedStart" === state)
                    throw ((state = "completed"), context.arg);
                  context.dispatchException(context.arg);
                } else
                  "return" === context.method &&
                    context.abrupt("return", context.arg);
                state = "executing";
                var record = tryCatch(innerFn, self, context);
                if ("normal" === record.type) {
                  if (
                    ((state = context.done ? "completed" : "suspendedYield"),
                    record.arg === ContinueSentinel)
                  )
                    continue;
                  return { value: record.arg, done: context.done };
                }
                "throw" === record.type &&
                  ((state = "completed"),
                  (context.method = "throw"),
                  (context.arg = record.arg));
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var methodName = context.method,
              method = delegate.iterator[methodName];
            if (void 0 === method)
              return (
                (context.delegate = null),
                ("throw" === methodName &&
                  delegate.iterator.return &&
                  ((context.method = "return"),
                  (context.arg = void 0),
                  maybeInvokeDelegate(delegate, context),
                  "throw" === context.method)) ||
                  ("return" !== methodName &&
                    ((context.method = "throw"),
                    (context.arg = new TypeError(
                      "The iterator does not provide a '" +
                        methodName +
                        "' method"
                    )))),
                ContinueSentinel
              );
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ("throw" === record.type)
              return (
                (context.method = "throw"),
                (context.arg = record.arg),
                (context.delegate = null),
                ContinueSentinel
              );
            var info = record.arg;
            return info
              ? info.done
                ? ((context[delegate.resultName] = info.value),
                  (context.next = delegate.nextLoc),
                  "return" !== context.method &&
                    ((context.method = "next"), (context.arg = void 0)),
                  (context.delegate = null),
                  ContinueSentinel)
                : info
              : ((context.method = "throw"),
                (context.arg = new TypeError(
                  "iterator result is not an object"
                )),
                (context.delegate = null),
                ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };
            1 in locs && (entry.catchLoc = locs[1]),
              2 in locs &&
                ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
              this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            (record.type = "normal"),
              delete record.arg,
              (entry.completion = record);
          }
          function Context(tryLocsList) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              tryLocsList.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ("function" == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length; )
                      if (hasOwn.call(iterable, i))
                        return (
                          (next.value = iterable[i]), (next.done = !1), next
                        );
                    return (next.value = void 0), (next.done = !0), next;
                  };
                return (next.next = next);
              }
            }
            return { next: doneResult };
          }
          function doneResult() {
            return { value: void 0, done: !0 };
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            defineProperty(Gp, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            defineProperty(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              toStringTagSymbol,
              "GeneratorFunction"
            )),
            (exports.isGeneratorFunction = function (genFun) {
              var ctor = "function" == typeof genFun && genFun.constructor;
              return (
                !!ctor &&
                (ctor === GeneratorFunction ||
                  "GeneratorFunction" === (ctor.displayName || ctor.name))
              );
            }),
            (exports.mark = function (genFun) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                  : ((genFun.__proto__ = GeneratorFunctionPrototype),
                    define(genFun, toStringTagSymbol, "GeneratorFunction")),
                (genFun.prototype = Object.create(Gp)),
                genFun
              );
            }),
            (exports.awrap = function (arg) {
              return { __await: arg };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
              return this;
            }),
            (exports.AsyncIterator = AsyncIterator),
            (exports.async = function (
              innerFn,
              outerFn,
              self,
              tryLocsList,
              PromiseImpl
            ) {
              void 0 === PromiseImpl && (PromiseImpl = Promise);
              var iter = new AsyncIterator(
                wrap(innerFn, outerFn, self, tryLocsList),
                PromiseImpl
              );
              return exports.isGeneratorFunction(outerFn)
                ? iter
                : iter.next().then(function (result) {
                    return result.done ? result.value : iter.next();
                  });
            }),
            defineIteratorMethods(Gp),
            define(Gp, toStringTagSymbol, "Generator"),
            define(Gp, iteratorSymbol, function () {
              return this;
            }),
            define(Gp, "toString", function () {
              return "[object Generator]";
            }),
            (exports.keys = function (val) {
              var object = Object(val),
                keys = [];
              for (var key in object) keys.push(key);
              return (
                keys.reverse(),
                function next() {
                  for (; keys.length; ) {
                    var key = keys.pop();
                    if (key in object)
                      return (next.value = key), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (exports.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function reset(skipTempReset) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(resetTryEntry),
                  !skipTempReset)
                )
                  for (var name in this)
                    "t" === name.charAt(0) &&
                      hasOwn.call(this, name) &&
                      !isNaN(+name.slice(1)) &&
                      (this[name] = void 0);
              },
              stop: function stop() {
                this.done = !0;
                var rootRecord = this.tryEntries[0].completion;
                if ("throw" === rootRecord.type) throw rootRecord.arg;
                return this.rval;
              },
              dispatchException: function dispatchException(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                  return (
                    (record.type = "throw"),
                    (record.arg = exception),
                    (context.next = loc),
                    caught &&
                      ((context.method = "next"), (context.arg = void 0)),
                    !!caught
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i],
                    record = entry.completion;
                  if ("root" === entry.tryLoc) return handle("end");
                  if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc"),
                      hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                      if (this.prev < entry.catchLoc)
                        return handle(entry.catchLoc, !0);
                    } else {
                      if (!hasFinally)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < entry.finallyLoc)
                        return handle(entry.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function abrupt(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (
                    entry.tryLoc <= this.prev &&
                    hasOwn.call(entry, "finallyLoc") &&
                    this.prev < entry.finallyLoc
                  ) {
                    var finallyEntry = entry;
                    break;
                  }
                }
                finallyEntry &&
                  ("break" === type || "continue" === type) &&
                  finallyEntry.tryLoc <= arg &&
                  arg <= finallyEntry.finallyLoc &&
                  (finallyEntry = null);
                var record = finallyEntry ? finallyEntry.completion : {};
                return (
                  (record.type = type),
                  (record.arg = arg),
                  finallyEntry
                    ? ((this.method = "next"),
                      (this.next = finallyEntry.finallyLoc),
                      ContinueSentinel)
                    : this.complete(record)
                );
              },
              complete: function complete(record, afterLoc) {
                if ("throw" === record.type) throw record.arg;
                return (
                  "break" === record.type || "continue" === record.type
                    ? (this.next = record.arg)
                    : "return" === record.type
                    ? ((this.rval = this.arg = record.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === record.type &&
                      afterLoc &&
                      (this.next = afterLoc),
                  ContinueSentinel
                );
              },
              finish: function finish(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.finallyLoc === finallyLoc)
                    return (
                      this.complete(entry.completion, entry.afterLoc),
                      resetTryEntry(entry),
                      ContinueSentinel
                    );
                }
              },
              catch: function _catch(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var entry = this.tryEntries[i];
                  if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ("throw" === record.type) {
                      var thrown = record.arg;
                      resetTryEntry(entry);
                    }
                    return thrown;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function delegateYield(
                iterable,
                resultName,
                nextLoc
              ) {
                return (
                  (this.delegate = {
                    iterator: values(iterable),
                    resultName,
                    nextLoc,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  ContinueSentinel
                );
              },
            }),
            exports
          );
        }
        (module.exports = _regeneratorRuntime),
          (module.exports.__esModule = !0),
          (module.exports.default = module.exports);
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/typeof.js":
      (module) => {
        function _typeof(obj) {
          return (
            (module.exports = _typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      "function" == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? "symbol"
                      : typeof obj;
                  }),
            (module.exports.__esModule = !0),
            (module.exports.default = module.exports),
            _typeof(obj)
          );
        }
        (module.exports = _typeof),
          (module.exports.__esModule = !0),
          (module.exports.default = module.exports);
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/regenerator/index.js":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var runtime = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/regeneratorRuntime.js"
        )();
        module.exports = runtime;
        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = runtime)
            : Function("r", "regeneratorRuntime = r")(runtime);
        }
      },
    "./node_modules/@storybook/testing-library/dist/esm/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        mV: () => userEvent,
        uh: () => within,
      });
      var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__("@storybook/client-logger"),
        _storybook_instrumenter__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./node_modules/@storybook/instrumenter/dist/index.mjs"
          ),
        _testing_library_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
        ),
        _testing_library_user_event__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/index.js"
          ),
        ts_dedent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/ts-dedent/esm/index.js"
        ),
        __makeTemplateObject = function (cooked, raw) {
          return (
            Object.defineProperty
              ? Object.defineProperty(cooked, "raw", { value: raw })
              : (cooked.raw = raw),
            cooked
          );
        },
        __assign = function () {
          return (
            (__assign =
              Object.assign ||
              function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                return t;
              }),
            __assign.apply(this, arguments)
          );
        },
        testingLibrary = (0,
        _storybook_instrumenter__WEBPACK_IMPORTED_MODULE_3__.x6)(
          __assign({}, _testing_library_dom__WEBPACK_IMPORTED_MODULE_1__),
          {
            intercept: function (method, path) {
              return (
                "fireEvent" === path[0] ||
                method.startsWith("findBy") ||
                method.startsWith("waitFor")
              );
            },
          }
        );
      testingLibrary.screen = Object.entries(testingLibrary.screen).reduce(
        function (acc, _a) {
          var key = _a[0],
            val = _a[1];
          return Object.defineProperty(acc, key, {
            get: function () {
              return (
                _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.once.warn(
                  (0, ts_dedent__WEBPACK_IMPORTED_MODULE_4__.C)(
                    templateObject_1 ||
                      (templateObject_1 = __makeTemplateObject(
                        [
                          "\n          You are using Testing Library's `screen` object. Use `within(canvasElement)` instead.\n          More info: https://storybook.js.org/docs/react/essentials/interactions\n        ",
                        ],
                        [
                          "\n          You are using Testing Library's \\`screen\\` object. Use \\`within(canvasElement)\\` instead.\n          More info: https://storybook.js.org/docs/react/essentials/interactions\n        ",
                        ]
                      ))
                  )
                ),
                val
              );
            },
          });
        },
        __assign({}, testingLibrary.screen)
      );
      testingLibrary.buildQueries,
        testingLibrary.configure,
        testingLibrary.createEvent,
        testingLibrary.findAllByAltText,
        testingLibrary.findAllByDisplayValue,
        testingLibrary.findAllByLabelText,
        testingLibrary.findAllByPlaceholderText,
        testingLibrary.findAllByRole,
        testingLibrary.findAllByTestId,
        testingLibrary.findAllByText,
        testingLibrary.findAllByTitle,
        testingLibrary.findByAltText,
        testingLibrary.findByDisplayValue,
        testingLibrary.findByLabelText,
        testingLibrary.findByPlaceholderText,
        testingLibrary.findByRole,
        testingLibrary.findByTestId,
        testingLibrary.findByText,
        testingLibrary.findByTitle,
        testingLibrary.fireEvent,
        testingLibrary.getAllByAltText,
        testingLibrary.getAllByDisplayValue,
        testingLibrary.getAllByLabelText,
        testingLibrary.getAllByPlaceholderText,
        testingLibrary.getAllByRole,
        testingLibrary.getAllByTestId,
        testingLibrary.getAllByText,
        testingLibrary.getAllByTitle,
        testingLibrary.getByAltText,
        testingLibrary.getByDisplayValue,
        testingLibrary.getByLabelText,
        testingLibrary.getByPlaceholderText,
        testingLibrary.getByRole,
        testingLibrary.getByTestId,
        testingLibrary.getByText,
        testingLibrary.getByTitle,
        testingLibrary.getConfig,
        testingLibrary.getDefaultNormalizer,
        testingLibrary.getElementError,
        testingLibrary.getNodeText,
        testingLibrary.getQueriesForElement,
        testingLibrary.getRoles,
        testingLibrary.getSuggestedQuery,
        testingLibrary.isInaccessible,
        testingLibrary.logDOM,
        testingLibrary.logRoles,
        testingLibrary.prettyDOM,
        testingLibrary.queries,
        testingLibrary.queryAllByAltText,
        testingLibrary.queryAllByAttribute,
        testingLibrary.queryAllByDisplayValue,
        testingLibrary.queryAllByLabelText,
        testingLibrary.queryAllByPlaceholderText,
        testingLibrary.queryAllByRole,
        testingLibrary.queryAllByTestId,
        testingLibrary.queryAllByText,
        testingLibrary.queryAllByTitle,
        testingLibrary.queryByAltText,
        testingLibrary.queryByAttribute,
        testingLibrary.queryByDisplayValue,
        testingLibrary.queryByLabelText,
        testingLibrary.queryByPlaceholderText,
        testingLibrary.queryByRole,
        testingLibrary.queryByTestId,
        testingLibrary.queryByText,
        testingLibrary.queryByTitle,
        testingLibrary.queryHelpers,
        testingLibrary.screen,
        testingLibrary.waitFor,
        testingLibrary.waitForElementToBeRemoved;
      var templateObject_1,
        within = testingLibrary.within,
        userEvent =
          (testingLibrary.prettyFormat,
          (0, _storybook_instrumenter__WEBPACK_IMPORTED_MODULE_3__.x6)(
            {
              userEvent:
                _testing_library_user_event__WEBPACK_IMPORTED_MODULE_2__.ZP,
            },
            { intercept: !0 }
          ).userEvent);
    },
    "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js": (
      module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          buildQueries: () => buildQueries,
          configure: () => configure,
          createEvent: () => createEvent,
          findAllByAltText: () => findAllByAltText,
          findAllByDisplayValue: () => findAllByDisplayValue,
          findAllByLabelText: () => findAllByLabelText,
          findAllByPlaceholderText: () => findAllByPlaceholderText,
          findAllByRole: () => findAllByRole,
          findAllByTestId: () => findAllByTestId,
          findAllByText: () => findAllByText,
          findAllByTitle: () => findAllByTitle,
          findByAltText: () => findByAltText,
          findByDisplayValue: () => findByDisplayValue,
          findByLabelText: () => findByLabelText,
          findByPlaceholderText: () => findByPlaceholderText,
          findByRole: () => findByRole,
          findByTestId: () => findByTestId,
          findByText: () => findByText,
          findByTitle: () => findByTitle,
          fireEvent: () => fireEvent,
          getAllByAltText: () => getAllByAltText,
          getAllByDisplayValue: () => getAllByDisplayValue,
          getAllByLabelText: () => getAllByLabelTextWithSuggestions,
          getAllByPlaceholderText: () => getAllByPlaceholderText,
          getAllByRole: () => getAllByRole,
          getAllByTestId: () => getAllByTestId,
          getAllByText: () => getAllByText,
          getAllByTitle: () => getAllByTitle,
          getByAltText: () => getByAltText,
          getByDisplayValue: () => getByDisplayValue,
          getByLabelText: () => getByLabelTextWithSuggestions,
          getByPlaceholderText: () => getByPlaceholderText,
          getByRole: () => getByRole,
          getByTestId: () => getByTestId,
          getByText: () => getByText,
          getByTitle: () => getByTitle,
          getConfig: () => getConfig,
          getDefaultNormalizer: () => getDefaultNormalizer,
          getElementError: () => getElementError,
          getMultipleElementsFoundError: () => getMultipleElementsFoundError,
          getNodeText: () => getNodeText,
          getQueriesForElement: () => getQueriesForElement,
          getRoles: () => getRoles,
          getSuggestedQuery: () => getSuggestedQuery,
          isInaccessible: () => isInaccessible,
          logDOM: () => logDOM,
          logRoles: () => logRoles,
          makeFindQuery: () => makeFindQuery,
          makeGetAllQuery: () => makeGetAllQuery,
          makeSingleQuery: () => makeSingleQuery,
          prettyDOM: () => prettyDOM,
          prettyFormat: () => build,
          queries: () => queries,
          queryAllByAltText: () => queryAllByAltTextWithSuggestions,
          queryAllByAttribute: () => queryAllByAttribute,
          queryAllByDisplayValue: () => queryAllByDisplayValueWithSuggestions,
          queryAllByLabelText: () => queryAllByLabelTextWithSuggestions,
          queryAllByPlaceholderText: () =>
            queryAllByPlaceholderTextWithSuggestions,
          queryAllByRole: () => queryAllByRoleWithSuggestions,
          queryAllByTestId: () => queryAllByTestIdWithSuggestions,
          queryAllByText: () => queryAllByTextWithSuggestions,
          queryAllByTitle: () => queryAllByTitleWithSuggestions,
          queryByAltText: () => queryByAltText,
          queryByAttribute: () => queryByAttribute,
          queryByDisplayValue: () => queryByDisplayValue,
          queryByLabelText: () => queryByLabelText,
          queryByPlaceholderText: () => queryByPlaceholderText,
          queryByRole: () => queryByRole,
          queryByTestId: () => queryByTestId,
          queryByText: () => queryByText,
          queryByTitle: () => queryByTitle,
          queryHelpers: () => queryHelpers,
          screen: () => screen,
          waitFor: () => waitForWrapper,
          waitForElementToBeRemoved: () => waitForElementToBeRemoved,
          within: () => getQueriesForElement,
          wrapAllByQueryWithSuggestion: () => wrapAllByQueryWithSuggestion,
          wrapSingleQueryWithSuggestion: () => wrapSingleQueryWithSuggestion,
        });
      var build = __webpack_require__(
          "./node_modules/pretty-format/build/index.js"
        ),
        toStr = Object.prototype.toString;
      function isCallable(fn) {
        return (
          "function" == typeof fn || "[object Function]" === toStr.call(fn)
        );
      }
      var maxSafeInteger = Math.pow(2, 53) - 1;
      function toLength(value) {
        var len = (function toInteger(value) {
          var number = Number(value);
          return isNaN(number)
            ? 0
            : 0 !== number && isFinite(number)
            ? (number > 0 ? 1 : -1) * Math.floor(Math.abs(number))
            : number;
        })(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      }
      function arrayFrom(arrayLike, mapFn) {
        var C = Array,
          items = Object(arrayLike);
        if (null == arrayLike)
          throw new TypeError(
            "Array.from requires an array-like object - not null or undefined"
          );
        if (void 0 !== mapFn && !isCallable(mapFn))
          throw new TypeError(
            "Array.from: when provided, the second argument must be a function"
          );
        for (
          var kValue,
            len = toLength(items.length),
            A = isCallable(C) ? Object(new C(len)) : new Array(len),
            k = 0;
          k < len;

        )
          (kValue = items[k]),
            (A[k] = mapFn ? mapFn(kValue, k) : kValue),
            (k += 1);
        return (A.length = len), A;
      }
      function _typeof(obj) {
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            "value" in descriptor && (descriptor.writable = !0),
            Object.defineProperty(
              target,
              _toPropertyKey(descriptor.key),
              descriptor
            );
        }
      }
      function _toPropertyKey(arg) {
        var key = (function _toPrimitive(input, hint) {
          if ("object" !== _typeof(input) || null === input) return input;
          var prim = input[Symbol.toPrimitive];
          if (void 0 !== prim) {
            var res = prim.call(input, hint || "default");
            if ("object" !== _typeof(res)) return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === hint ? String : Number)(input);
        })(arg, "string");
        return "symbol" === _typeof(key) ? key : String(key);
      }
      const polyfills_SetLike =
        "undefined" == typeof Set
          ? Set
          : (function () {
              function SetLike() {
                var items =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
                !(function _classCallCheck(instance, Constructor) {
                  if (!(instance instanceof Constructor))
                    throw new TypeError("Cannot call a class as a function");
                })(this, SetLike),
                  (function _defineProperty(obj, key, value) {
                    return (
                      (key = _toPropertyKey(key)) in obj
                        ? Object.defineProperty(obj, key, {
                            value,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (obj[key] = value),
                      obj
                    );
                  })(this, "items", void 0),
                  (this.items = items);
              }
              return (
                (function _createClass(Constructor, protoProps, staticProps) {
                  return (
                    protoProps &&
                      _defineProperties(Constructor.prototype, protoProps),
                    staticProps && _defineProperties(Constructor, staticProps),
                    Object.defineProperty(Constructor, "prototype", {
                      writable: !1,
                    }),
                    Constructor
                  );
                })(SetLike, [
                  {
                    key: "add",
                    value: function add(value) {
                      return (
                        !1 === this.has(value) && this.items.push(value), this
                      );
                    },
                  },
                  {
                    key: "clear",
                    value: function clear() {
                      this.items = [];
                    },
                  },
                  {
                    key: "delete",
                    value: function _delete(value) {
                      var previousLength = this.items.length;
                      return (
                        (this.items = this.items.filter(function (item) {
                          return item !== value;
                        })),
                        previousLength !== this.items.length
                      );
                    },
                  },
                  {
                    key: "forEach",
                    value: function forEach(callbackfn) {
                      var _this = this;
                      this.items.forEach(function (item) {
                        callbackfn(item, item, _this);
                      });
                    },
                  },
                  {
                    key: "has",
                    value: function has(value) {
                      return -1 !== this.items.indexOf(value);
                    },
                  },
                  {
                    key: "size",
                    get: function get() {
                      return this.items.length;
                    },
                  },
                ]),
                SetLike
              );
            })();
      function getLocalName(element) {
        var _element$localName;
        return null !== (_element$localName = element.localName) &&
          void 0 !== _element$localName
          ? _element$localName
          : element.tagName.toLowerCase();
      }
      var localNameToRoleMappings = {
          article: "article",
          aside: "complementary",
          button: "button",
          datalist: "listbox",
          dd: "definition",
          details: "group",
          dialog: "dialog",
          dt: "term",
          fieldset: "group",
          figure: "figure",
          form: "form",
          footer: "contentinfo",
          h1: "heading",
          h2: "heading",
          h3: "heading",
          h4: "heading",
          h5: "heading",
          h6: "heading",
          header: "banner",
          hr: "separator",
          html: "document",
          legend: "legend",
          li: "listitem",
          math: "math",
          main: "main",
          menu: "list",
          nav: "navigation",
          ol: "list",
          optgroup: "group",
          option: "option",
          output: "status",
          progress: "progressbar",
          section: "region",
          summary: "button",
          table: "table",
          tbody: "rowgroup",
          textarea: "textbox",
          tfoot: "rowgroup",
          td: "cell",
          th: "columnheader",
          thead: "rowgroup",
          tr: "row",
          ul: "list",
        },
        prohibitedAttributes = {
          caption: new Set(["aria-label", "aria-labelledby"]),
          code: new Set(["aria-label", "aria-labelledby"]),
          deletion: new Set(["aria-label", "aria-labelledby"]),
          emphasis: new Set(["aria-label", "aria-labelledby"]),
          generic: new Set([
            "aria-label",
            "aria-labelledby",
            "aria-roledescription",
          ]),
          insertion: new Set(["aria-label", "aria-labelledby"]),
          paragraph: new Set(["aria-label", "aria-labelledby"]),
          presentation: new Set(["aria-label", "aria-labelledby"]),
          strong: new Set(["aria-label", "aria-labelledby"]),
          subscript: new Set(["aria-label", "aria-labelledby"]),
          superscript: new Set(["aria-label", "aria-labelledby"]),
        };
      function ignorePresentationalRole(element, implicitRole) {
        return (function hasGlobalAriaAttributes(element, role) {
          return [
            "aria-atomic",
            "aria-busy",
            "aria-controls",
            "aria-current",
            "aria-describedby",
            "aria-details",
            "aria-dropeffect",
            "aria-flowto",
            "aria-grabbed",
            "aria-hidden",
            "aria-keyshortcuts",
            "aria-label",
            "aria-labelledby",
            "aria-live",
            "aria-owns",
            "aria-relevant",
            "aria-roledescription",
          ].some(function (attributeName) {
            var _prohibitedAttributes;
            return (
              element.hasAttribute(attributeName) &&
              !(
                null !== (_prohibitedAttributes = prohibitedAttributes[role]) &&
                void 0 !== _prohibitedAttributes &&
                _prohibitedAttributes.has(attributeName)
              )
            );
          });
        })(element, implicitRole);
      }
      function getRole(element) {
        var explicitRole = (function getExplicitRole(element) {
          var role = element.getAttribute("role");
          if (null !== role) {
            var explicitRole = role.trim().split(" ")[0];
            if (explicitRole.length > 0) return explicitRole;
          }
          return null;
        })(element);
        if (null === explicitRole || "presentation" === explicitRole) {
          var implicitRole = (function getImplicitRole(element) {
            var mappedByTag = localNameToRoleMappings[getLocalName(element)];
            if (void 0 !== mappedByTag) return mappedByTag;
            switch (getLocalName(element)) {
              case "a":
              case "area":
              case "link":
                if (element.hasAttribute("href")) return "link";
                break;
              case "img":
                return "" !== element.getAttribute("alt") ||
                  ignorePresentationalRole(element, "img")
                  ? "img"
                  : "presentation";
              case "input":
                var type = element.type;
                switch (type) {
                  case "button":
                  case "image":
                  case "reset":
                  case "submit":
                    return "button";
                  case "checkbox":
                  case "radio":
                    return type;
                  case "range":
                    return "slider";
                  case "email":
                  case "tel":
                  case "text":
                  case "url":
                    return element.hasAttribute("list")
                      ? "combobox"
                      : "textbox";
                  case "search":
                    return element.hasAttribute("list")
                      ? "combobox"
                      : "searchbox";
                  case "number":
                    return "spinbutton";
                  default:
                    return null;
                }
              case "select":
                return element.hasAttribute("multiple") || element.size > 1
                  ? "listbox"
                  : "combobox";
            }
            return null;
          })(element);
          if (
            "presentation" !== explicitRole ||
            ignorePresentationalRole(element, implicitRole || "")
          )
            return implicitRole;
        }
        return explicitRole;
      }
      function isElement(node) {
        return null !== node && node.nodeType === node.ELEMENT_NODE;
      }
      function isHTMLTableCaptionElement(node) {
        return isElement(node) && "caption" === getLocalName(node);
      }
      function isHTMLInputElement(node) {
        return isElement(node) && "input" === getLocalName(node);
      }
      function isHTMLLegendElement(node) {
        return isElement(node) && "legend" === getLocalName(node);
      }
      function isSVGTitleElement(node) {
        return (
          (function isSVGElement(node) {
            return isElement(node) && void 0 !== node.ownerSVGElement;
          })(node) && "title" === getLocalName(node)
        );
      }
      function queryIdRefs(node, attributeName) {
        if (isElement(node) && node.hasAttribute(attributeName)) {
          var ids = node.getAttribute(attributeName).split(" "),
            root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
          return ids
            .map(function (id) {
              return root.getElementById(id);
            })
            .filter(function (element) {
              return null !== element;
            });
        }
        return [];
      }
      function hasAnyConcreteRoles(node, roles) {
        return !!isElement(node) && -1 !== roles.indexOf(getRole(node));
      }
      function hasAbstractRole(node, role) {
        if (!isElement(node)) return !1;
        if ("range" === role)
          return hasAnyConcreteRoles(node, [
            "meter",
            "progressbar",
            "scrollbar",
            "slider",
            "spinbutton",
          ]);
        throw new TypeError(
          "No knowledge about abstract role '".concat(
            role,
            "'. This is likely a bug :("
          )
        );
      }
      function querySelectorAllSubtree(element, selectors) {
        var elements = arrayFrom(element.querySelectorAll(selectors));
        return (
          queryIdRefs(element, "aria-owns").forEach(function (root) {
            elements.push.apply(
              elements,
              arrayFrom(root.querySelectorAll(selectors))
            );
          }),
          elements
        );
      }
      function querySelectedOptions(listbox) {
        return (function isHTMLSelectElement(node) {
          return isElement(node) && "select" === getLocalName(node);
        })(listbox)
          ? listbox.selectedOptions ||
              querySelectorAllSubtree(listbox, "[selected]")
          : querySelectorAllSubtree(listbox, '[aria-selected="true"]');
      }
      function getValueOfTextbox(element) {
        return isHTMLInputElement(element) ||
          (function isHTMLTextAreaElement(node) {
            return isElement(node) && "textarea" === getLocalName(node);
          })(element)
          ? element.value
          : element.textContent || "";
      }
      function getTextualContent(declaration) {
        var content = declaration.getPropertyValue("content");
        return /^["'].*["']$/.test(content) ? content.slice(1, -1) : "";
      }
      function isLabelableElement(element) {
        var localName = getLocalName(element);
        return (
          "button" === localName ||
          ("input" === localName &&
            "hidden" !== element.getAttribute("type")) ||
          "meter" === localName ||
          "output" === localName ||
          "progress" === localName ||
          "select" === localName ||
          "textarea" === localName
        );
      }
      function findLabelableElement(element) {
        if (isLabelableElement(element)) return element;
        var labelableElement = null;
        return (
          element.childNodes.forEach(function (childNode) {
            if (null === labelableElement && isElement(childNode)) {
              var descendantLabelableElement = findLabelableElement(childNode);
              null !== descendantLabelableElement &&
                (labelableElement = descendantLabelableElement);
            }
          }),
          labelableElement
        );
      }
      function getControlOfLabel(label) {
        if (void 0 !== label.control) return label.control;
        var htmlFor = label.getAttribute("for");
        return null !== htmlFor
          ? label.ownerDocument.getElementById(htmlFor)
          : findLabelableElement(label);
      }
      function computeTextAlternative(root) {
        var options =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          consultedNodes = new polyfills_SetLike(),
          window = (function safeWindow(node) {
            var defaultView = (
              null === node.ownerDocument ? node : node.ownerDocument
            ).defaultView;
            if (null === defaultView)
              throw new TypeError("no window available");
            return defaultView;
          })(root),
          _options$compute = options.compute,
          compute = void 0 === _options$compute ? "name" : _options$compute,
          _options$computedStyl = options.computedStyleSupportsPseudoElements,
          computedStyleSupportsPseudoElements =
            void 0 === _options$computedStyl
              ? void 0 !== options.getComputedStyle
              : _options$computedStyl,
          _options$getComputedS = options.getComputedStyle,
          getComputedStyle =
            void 0 === _options$getComputedS
              ? window.getComputedStyle.bind(window)
              : _options$getComputedS,
          _options$hidden = options.hidden,
          hidden = void 0 !== _options$hidden && _options$hidden;
        function computeMiscTextAlternative(node, context) {
          var accumulatedText = "";
          if (isElement(node) && computedStyleSupportsPseudoElements) {
            var beforeContent = getTextualContent(
              getComputedStyle(node, "::before")
            );
            accumulatedText = ""
              .concat(beforeContent, " ")
              .concat(accumulatedText);
          }
          if (
            (((function isHTMLSlotElement(node) {
              return isElement(node) && "slot" === getLocalName(node);
            })(node)
              ? (function getSlotContents(slot) {
                  var assignedNodes = slot.assignedNodes();
                  return 0 === assignedNodes.length
                    ? arrayFrom(slot.childNodes)
                    : assignedNodes;
                })(node)
              : arrayFrom(node.childNodes).concat(
                  queryIdRefs(node, "aria-owns")
                )
            ).forEach(function (child) {
              var result = computeTextAlternative(child, {
                  isEmbeddedInLabel: context.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0,
                }),
                separator =
                  "inline" !==
                  (isElement(child)
                    ? getComputedStyle(child).getPropertyValue("display")
                    : "inline")
                    ? " "
                    : "";
              accumulatedText += ""
                .concat(separator)
                .concat(result)
                .concat(separator);
            }),
            isElement(node) && computedStyleSupportsPseudoElements)
          ) {
            var afterContent = getTextualContent(
              getComputedStyle(node, "::after")
            );
            accumulatedText = ""
              .concat(accumulatedText, " ")
              .concat(afterContent);
          }
          return accumulatedText.trim();
        }
        function useAttribute(element, attributeName) {
          var attribute = element.getAttributeNode(attributeName);
          return null === attribute ||
            consultedNodes.has(attribute) ||
            "" === attribute.value.trim()
            ? null
            : (consultedNodes.add(attribute), attribute.value);
        }
        function computeElementTextAlternative(node) {
          if (!isElement(node)) return null;
          if (
            (function isHTMLFieldSetElement(node) {
              return isElement(node) && "fieldset" === getLocalName(node);
            })(node)
          ) {
            consultedNodes.add(node);
            for (
              var children = arrayFrom(node.childNodes), i = 0;
              i < children.length;
              i += 1
            ) {
              var child = children[i];
              if (isHTMLLegendElement(child))
                return computeTextAlternative(child, {
                  isEmbeddedInLabel: !1,
                  isReferenced: !1,
                  recursion: !1,
                });
            }
          } else if (
            (function isHTMLTableElement(node) {
              return isElement(node) && "table" === getLocalName(node);
            })(node)
          ) {
            consultedNodes.add(node);
            for (
              var _children = arrayFrom(node.childNodes), _i = 0;
              _i < _children.length;
              _i += 1
            ) {
              var _child = _children[_i];
              if (isHTMLTableCaptionElement(_child))
                return computeTextAlternative(_child, {
                  isEmbeddedInLabel: !1,
                  isReferenced: !1,
                  recursion: !1,
                });
            }
          } else {
            if (
              (function isSVGSVGElement(node) {
                return isElement(node) && "svg" === getLocalName(node);
              })(node)
            ) {
              consultedNodes.add(node);
              for (
                var _children2 = arrayFrom(node.childNodes), _i2 = 0;
                _i2 < _children2.length;
                _i2 += 1
              ) {
                var _child2 = _children2[_i2];
                if (isSVGTitleElement(_child2)) return _child2.textContent;
              }
              return null;
            }
            if ("img" === getLocalName(node) || "area" === getLocalName(node)) {
              var nameFromAlt = useAttribute(node, "alt");
              if (null !== nameFromAlt) return nameFromAlt;
            } else if (
              (function isHTMLOptGroupElement(node) {
                return isElement(node) && "optgroup" === getLocalName(node);
              })(node)
            ) {
              var nameFromLabel = useAttribute(node, "label");
              if (null !== nameFromLabel) return nameFromLabel;
            }
          }
          if (
            isHTMLInputElement(node) &&
            ("button" === node.type ||
              "submit" === node.type ||
              "reset" === node.type)
          ) {
            var nameFromValue = useAttribute(node, "value");
            if (null !== nameFromValue) return nameFromValue;
            if ("submit" === node.type) return "Submit";
            if ("reset" === node.type) return "Reset";
          }
          var labels = (function getLabels(element) {
            var labelsProperty = element.labels;
            return null === labelsProperty
              ? labelsProperty
              : void 0 !== labelsProperty
              ? arrayFrom(labelsProperty)
              : isLabelableElement(element)
              ? arrayFrom(
                  element.ownerDocument.querySelectorAll("label")
                ).filter(function (label) {
                  return getControlOfLabel(label) === element;
                })
              : null;
          })(node);
          if (null !== labels && 0 !== labels.length)
            return (
              consultedNodes.add(node),
              arrayFrom(labels)
                .map(function (element) {
                  return computeTextAlternative(element, {
                    isEmbeddedInLabel: !0,
                    isReferenced: !1,
                    recursion: !0,
                  });
                })
                .filter(function (label) {
                  return label.length > 0;
                })
                .join(" ")
            );
          if (isHTMLInputElement(node) && "image" === node.type) {
            var _nameFromAlt = useAttribute(node, "alt");
            if (null !== _nameFromAlt) return _nameFromAlt;
            var nameFromTitle = useAttribute(node, "title");
            return null !== nameFromTitle ? nameFromTitle : "Submit Query";
          }
          if (hasAnyConcreteRoles(node, ["button"])) {
            var nameFromSubTree = computeMiscTextAlternative(node, {
              isEmbeddedInLabel: !1,
              isReferenced: !1,
            });
            if ("" !== nameFromSubTree) return nameFromSubTree;
          }
          return null;
        }
        function computeTextAlternative(current, context) {
          if (consultedNodes.has(current)) return "";
          if (
            !hidden &&
            (function isHidden(node, getComputedStyleImplementation) {
              if (!isElement(node)) return !1;
              if (
                node.hasAttribute("hidden") ||
                "true" === node.getAttribute("aria-hidden")
              )
                return !0;
              var style = getComputedStyleImplementation(node);
              return (
                "none" === style.getPropertyValue("display") ||
                "hidden" === style.getPropertyValue("visibility")
              );
            })(current, getComputedStyle) &&
            !context.isReferenced
          )
            return consultedNodes.add(current), "";
          var labelAttributeNode = isElement(current)
              ? current.getAttributeNode("aria-labelledby")
              : null,
            labelElements =
              null === labelAttributeNode ||
              consultedNodes.has(labelAttributeNode)
                ? []
                : queryIdRefs(current, "aria-labelledby");
          if (
            "name" === compute &&
            !context.isReferenced &&
            labelElements.length > 0
          )
            return (
              consultedNodes.add(labelAttributeNode),
              labelElements
                .map(function (element) {
                  return computeTextAlternative(element, {
                    isEmbeddedInLabel: context.isEmbeddedInLabel,
                    isReferenced: !0,
                    recursion: !1,
                  });
                })
                .join(" ")
            );
          var skipToStep2E =
            context.recursion &&
            (function isControl(node) {
              return (
                hasAnyConcreteRoles(node, [
                  "button",
                  "combobox",
                  "listbox",
                  "textbox",
                ]) || hasAbstractRole(node, "range")
              );
            })(current) &&
            "name" === compute;
          if (!skipToStep2E) {
            var ariaLabel = (
              (isElement(current) && current.getAttribute("aria-label")) ||
              ""
            ).trim();
            if ("" !== ariaLabel && "name" === compute)
              return consultedNodes.add(current), ariaLabel;
            if (
              !(function isMarkedPresentational(node) {
                return hasAnyConcreteRoles(node, ["none", "presentation"]);
              })(current)
            ) {
              var elementTextAlternative =
                computeElementTextAlternative(current);
              if (null !== elementTextAlternative)
                return consultedNodes.add(current), elementTextAlternative;
            }
          }
          if (hasAnyConcreteRoles(current, ["menu"]))
            return consultedNodes.add(current), "";
          if (
            skipToStep2E ||
            context.isEmbeddedInLabel ||
            context.isReferenced
          ) {
            if (hasAnyConcreteRoles(current, ["combobox", "listbox"])) {
              consultedNodes.add(current);
              var selectedOptions = querySelectedOptions(current);
              return 0 === selectedOptions.length
                ? isHTMLInputElement(current)
                  ? current.value
                  : ""
                : arrayFrom(selectedOptions)
                    .map(function (selectedOption) {
                      return computeTextAlternative(selectedOption, {
                        isEmbeddedInLabel: context.isEmbeddedInLabel,
                        isReferenced: !1,
                        recursion: !0,
                      });
                    })
                    .join(" ");
            }
            if (hasAbstractRole(current, "range"))
              return (
                consultedNodes.add(current),
                current.hasAttribute("aria-valuetext")
                  ? current.getAttribute("aria-valuetext")
                  : current.hasAttribute("aria-valuenow")
                  ? current.getAttribute("aria-valuenow")
                  : current.getAttribute("value") || ""
              );
            if (hasAnyConcreteRoles(current, ["textbox"]))
              return consultedNodes.add(current), getValueOfTextbox(current);
          }
          if (
            (function allowsNameFromContent(node) {
              return hasAnyConcreteRoles(node, [
                "button",
                "cell",
                "checkbox",
                "columnheader",
                "gridcell",
                "heading",
                "label",
                "legend",
                "link",
                "menuitem",
                "menuitemcheckbox",
                "menuitemradio",
                "option",
                "radio",
                "row",
                "rowheader",
                "switch",
                "tab",
                "tooltip",
                "treeitem",
              ]);
            })(current) ||
            (isElement(current) && context.isReferenced) ||
            (function isNativeHostLanguageTextAlternativeElement(node) {
              return isHTMLTableCaptionElement(node);
            })(current)
          ) {
            var accumulatedText2F = computeMiscTextAlternative(current, {
              isEmbeddedInLabel: context.isEmbeddedInLabel,
              isReferenced: !1,
            });
            if ("" !== accumulatedText2F)
              return consultedNodes.add(current), accumulatedText2F;
          }
          if (current.nodeType === current.TEXT_NODE)
            return consultedNodes.add(current), current.textContent || "";
          if (context.recursion)
            return (
              consultedNodes.add(current),
              computeMiscTextAlternative(current, {
                isEmbeddedInLabel: context.isEmbeddedInLabel,
                isReferenced: !1,
              })
            );
          var tooltipAttributeValue = (function computeTooltipAttributeValue(
            node
          ) {
            return isElement(node) ? useAttribute(node, "title") : null;
          })(current);
          return null !== tooltipAttributeValue
            ? (consultedNodes.add(current), tooltipAttributeValue)
            : (consultedNodes.add(current), "");
        }
        return (function asFlatString(s) {
          return s.trim().replace(/\s\s+/g, " ");
        })(
          computeTextAlternative(root, {
            isEmbeddedInLabel: !1,
            isReferenced: "description" === compute,
            recursion: !1,
          })
        );
      }
      function accessible_description_typeof(obj) {
        return (
          (accessible_description_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          accessible_description_typeof(obj)
        );
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                accessible_description_defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }
      function accessible_description_defineProperty(obj, key, value) {
        return (
          (key = (function accessible_description_toPropertyKey(arg) {
            var key = (function accessible_description_toPrimitive(
              input,
              hint
            ) {
              if (
                "object" !== accessible_description_typeof(input) ||
                null === input
              )
                return input;
              var prim = input[Symbol.toPrimitive];
              if (void 0 !== prim) {
                var res = prim.call(input, hint || "default");
                if ("object" !== accessible_description_typeof(res)) return res;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === hint ? String : Number)(input);
            })(arg, "string");
            return "symbol" === accessible_description_typeof(key)
              ? key
              : String(key);
          })(key)) in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function computeAccessibleDescription(root) {
        var options =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          description = queryIdRefs(root, "aria-describedby")
            .map(function (element) {
              return computeTextAlternative(
                element,
                _objectSpread(
                  _objectSpread({}, options),
                  {},
                  { compute: "description" }
                )
              );
            })
            .join(" ");
        if ("" === description) {
          var title = root.getAttribute("title");
          description = null === title ? "" : title;
        }
        return description;
      }
      function computeAccessibleName(root) {
        var options =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (function prohibitsNaming(node) {
          return hasAnyConcreteRoles(node, [
            "caption",
            "code",
            "deletion",
            "emphasis",
            "generic",
            "insertion",
            "paragraph",
            "presentation",
            "strong",
            "subscript",
            "superscript",
          ]);
        })(root)
          ? ""
          : computeTextAlternative(root, options);
      }
      var lib = __webpack_require__("./node_modules/aria-query/lib/index.js"),
        lz_string = __webpack_require__(
          "./node_modules/lz-string/libs/lz-string.js"
        ),
        lz_string_default = __webpack_require__.n(lz_string);
      module = __webpack_require__.hmd(module);
      var process = __webpack_require__("./node_modules/process/browser.js");
      function escapeHTML(str) {
        return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      const printProps = (
          keys,
          props,
          config,
          indentation,
          depth,
          refs,
          printer
        ) => {
          const indentationNext = indentation + config.indent,
            colors = config.colors;
          return keys
            .map((key) => {
              const value = props[key];
              let printed = printer(
                value,
                config,
                indentationNext,
                depth,
                refs
              );
              return (
                "string" != typeof value &&
                  (-1 !== printed.indexOf("\n") &&
                    (printed =
                      config.spacingOuter +
                      indentationNext +
                      printed +
                      config.spacingOuter +
                      indentation),
                  (printed = "{" + printed + "}")),
                config.spacingInner +
                  indentation +
                  colors.prop.open +
                  key +
                  colors.prop.close +
                  "=" +
                  colors.value.open +
                  printed +
                  colors.value.close
              );
            })
            .join("");
        },
        printChildren = (children, config, indentation, depth, refs, printer) =>
          children
            .map((child) => {
              const printedChild =
                "string" == typeof child
                  ? printText(child, config)
                  : printer(child, config, indentation, depth, refs);
              return "" === printedChild &&
                "object" == typeof child &&
                null !== child &&
                3 !== child.nodeType
                ? ""
                : config.spacingOuter + indentation + printedChild;
            })
            .join(""),
        printText = (text, config) => {
          const contentColor = config.colors.content;
          return contentColor.open + escapeHTML(text) + contentColor.close;
        },
        printComment = (comment, config) => {
          const commentColor = config.colors.comment;
          return (
            commentColor.open +
            "\x3c!--" +
            escapeHTML(comment) +
            "--\x3e" +
            commentColor.close
          );
        },
        printElement = (
          type,
          printedProps,
          printedChildren,
          config,
          indentation
        ) => {
          const tagColor = config.colors.tag;
          return (
            tagColor.open +
            "<" +
            type +
            (printedProps &&
              tagColor.close +
                printedProps +
                config.spacingOuter +
                indentation +
                tagColor.open) +
            (printedChildren
              ? ">" +
                tagColor.close +
                printedChildren +
                config.spacingOuter +
                indentation +
                tagColor.open +
                "</" +
                type
              : (printedProps && !config.min ? "" : " ") + "/") +
            ">" +
            tagColor.close
          );
        },
        printElementAsLeaf = (type, config) => {
          const tagColor = config.colors.tag;
          return (
            tagColor.open +
            "<" +
            type +
            tagColor.close +
            " …" +
            tagColor.open +
            " />" +
            tagColor.close
          );
        },
        TEXT_NODE$1 = 3,
        COMMENT_NODE$1 = 8,
        FRAGMENT_NODE = 11,
        ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/,
        testNode = (val) => {
          const constructorName = val.constructor.name,
            { nodeType, tagName } = val,
            isCustomElement =
              ("string" == typeof tagName && tagName.includes("-")) ||
              ("function" == typeof val.hasAttribute && val.hasAttribute("is"));
          return (
            (1 === nodeType &&
              (ELEMENT_REGEXP.test(constructorName) || isCustomElement)) ||
            (nodeType === TEXT_NODE$1 && "Text" === constructorName) ||
            (nodeType === COMMENT_NODE$1 && "Comment" === constructorName) ||
            (nodeType === FRAGMENT_NODE &&
              "DocumentFragment" === constructorName)
          );
        };
      function nodeIsFragment(node) {
        return node.nodeType === FRAGMENT_NODE;
      }
      function createDOMElementFilter(filterNode) {
        return {
          test: (val) => {
            var _val$constructor2;
            return (
              (null == val || null == (_val$constructor2 = val.constructor)
                ? void 0
                : _val$constructor2.name) && testNode(val)
            );
          },
          serialize: (node, config, indentation, depth, refs, printer) => {
            if (
              (function nodeIsText(node) {
                return node.nodeType === TEXT_NODE$1;
              })(node)
            )
              return printText(node.data, config);
            if (
              (function nodeIsComment(node) {
                return node.nodeType === COMMENT_NODE$1;
              })(node)
            )
              return printComment(node.data, config);
            const type = nodeIsFragment(node)
              ? "DocumentFragment"
              : node.tagName.toLowerCase();
            return ++depth > config.maxDepth
              ? printElementAsLeaf(type, config)
              : printElement(
                  type,
                  printProps(
                    nodeIsFragment(node)
                      ? []
                      : Array.from(node.attributes)
                          .map((attr) => attr.name)
                          .sort(),
                    nodeIsFragment(node)
                      ? {}
                      : Array.from(node.attributes).reduce(
                          (props, attribute) => (
                            (props[attribute.name] = attribute.value), props
                          ),
                          {}
                        ),
                    config,
                    indentation + config.indent,
                    depth,
                    refs,
                    printer
                  ),
                  printChildren(
                    Array.prototype.slice
                      .call(node.childNodes || node.children)
                      .filter(filterNode),
                    config,
                    indentation + config.indent,
                    depth,
                    refs,
                    printer
                  ),
                  config,
                  indentation
                );
          },
        };
      }
      let chalk = null,
        readFileSync = null,
        codeFrameColumns = null;
      try {
        const nodeRequire = module && module.require;
        (readFileSync = nodeRequire.call(module, "fs").readFileSync),
          (codeFrameColumns = nodeRequire.call(
            module,
            "@babel/code-frame"
          ).codeFrameColumns),
          (chalk = nodeRequire.call(module, "chalk"));
      } catch {}
      function getUserCodeFrame() {
        if (!readFileSync || !codeFrameColumns) return "";
        return (function getCodeFrame(frame) {
          const locationStart = frame.indexOf("(") + 1,
            locationEnd = frame.indexOf(")"),
            frameLocation = frame.slice(locationStart, locationEnd),
            frameLocationElements = frameLocation.split(":"),
            [filename, line, column] = [
              frameLocationElements[0],
              parseInt(frameLocationElements[1], 10),
              parseInt(frameLocationElements[2], 10),
            ];
          let rawFileContents = "";
          try {
            rawFileContents = readFileSync(filename, "utf-8");
          } catch {
            return "";
          }
          const codeFrame = codeFrameColumns(
            rawFileContents,
            { start: { line, column } },
            { highlightCode: !0, linesBelow: 0 }
          );
          return chalk.dim(frameLocation) + "\n" + codeFrame + "\n";
        })(
          new Error().stack
            .split("\n")
            .slice(1)
            .find((frame) => !frame.includes("node_modules/"))
        );
      }
      const TEXT_NODE = 3;
      function jestFakeTimersAreEnabled() {
        return (
          "undefined" != typeof jest &&
          null !== jest &&
          (!0 === setTimeout._isMockFunction ||
            Object.prototype.hasOwnProperty.call(setTimeout, "clock"))
        );
      }
      function getDocument() {
        if ("undefined" == typeof window)
          throw new Error("Could not find default container");
        return window.document;
      }
      function getWindowFromNode(node) {
        if (node.defaultView) return node.defaultView;
        if (node.ownerDocument && node.ownerDocument.defaultView)
          return node.ownerDocument.defaultView;
        if (node.window) return node.window;
        throw node.ownerDocument && null === node.ownerDocument.defaultView
          ? new Error(
              "It looks like the window object is not available for the provided node."
            )
          : node.then instanceof Function
          ? new Error(
              "It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?"
            )
          : Array.isArray(node)
          ? new Error(
              "It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?"
            )
          : "function" == typeof node.debug &&
            "function" == typeof node.logTestingPlaygroundURL
          ? new Error(
              "It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?"
            )
          : new Error(
              "The given node is not an Element, the node type is: " +
                typeof node +
                "."
            );
      }
      function checkContainerType(container) {
        if (
          !container ||
          "function" != typeof container.querySelector ||
          "function" != typeof container.querySelectorAll
        )
          throw new TypeError(
            "Expected container to be an Element, a Document or a DocumentFragment but got " +
              (function getTypeName(object) {
                if ("object" == typeof object)
                  return null === object ? "null" : object.constructor.name;
                return typeof object;
              })(container) +
              "."
          );
      }
      const shouldHighlight = () => {
          let colors;
          try {
            var _process, _process$env;
            colors = JSON.parse(
              null == (_process = process) ||
                null == (_process$env = _process.env)
                ? void 0
                : _process$env.COLORS
            );
          } catch (e) {}
          return "boolean" == typeof colors
            ? colors
            : void 0 !== process &&
                void 0 !== process.versions &&
                void 0 !== process.versions.node;
        },
        { DOMCollection } = build.plugins,
        ELEMENT_NODE = 1,
        COMMENT_NODE = 8;
      function filterCommentsAndDefaultIgnoreTagsTags(value) {
        return (
          value.nodeType !== COMMENT_NODE &&
          (value.nodeType !== ELEMENT_NODE ||
            !value.matches(getConfig().defaultIgnore))
        );
      }
      function prettyDOM(dom, maxLength, options) {
        if (
          (void 0 === options && (options = {}),
          dom || (dom = getDocument().body),
          "number" != typeof maxLength &&
            (maxLength =
              (void 0 !== process && process.env.DEBUG_PRINT_LIMIT) || 7e3),
          0 === maxLength)
        )
          return "";
        dom.documentElement && (dom = dom.documentElement);
        let domTypeName = typeof dom;
        if (
          ("object" === domTypeName
            ? (domTypeName = dom.constructor.name)
            : (dom = {}),
          !("outerHTML" in dom))
        )
          throw new TypeError(
            "Expected an element or document but got " + domTypeName
          );
        const {
            filterNode = filterCommentsAndDefaultIgnoreTagsTags,
            ...prettyFormatOptions
          } = options,
          debugContent = build.format(dom, {
            plugins: [createDOMElementFilter(filterNode), DOMCollection],
            printFunctionName: !1,
            highlight: shouldHighlight(),
            ...prettyFormatOptions,
          });
        return void 0 !== maxLength && dom.outerHTML.length > maxLength
          ? debugContent.slice(0, maxLength) + "..."
          : debugContent;
      }
      const logDOM = function () {
        const userCodeFrame = getUserCodeFrame();
        userCodeFrame
          ? console.log(prettyDOM(...arguments) + "\n\n" + userCodeFrame)
          : console.log(prettyDOM(...arguments));
      };
      let config = {
        testIdAttribute: "data-testid",
        asyncUtilTimeout: 1e3,
        asyncWrapper: (cb) => cb(),
        unstable_advanceTimersWrapper: (cb) => cb(),
        eventWrapper: (cb) => cb(),
        defaultHidden: !1,
        defaultIgnore: "script, style",
        showOriginalStackTrace: !1,
        throwSuggestions: !1,
        getElementError(message, container) {
          const prettifiedDOM = prettyDOM(container),
            error = new Error(
              [
                message,
                "Ignored nodes: comments, " +
                  config.defaultIgnore +
                  "\n" +
                  prettifiedDOM,
              ]
                .filter(Boolean)
                .join("\n\n")
            );
          return (error.name = "TestingLibraryElementError"), error;
        },
        _disableExpensiveErrorDiagnostics: !1,
        computedStyleSupportsPseudoElements: !1,
      };
      function configure(newConfig) {
        "function" == typeof newConfig && (newConfig = newConfig(config)),
          (config = { ...config, ...newConfig });
      }
      function getConfig() {
        return config;
      }
      const labelledNodeNames = [
        "button",
        "meter",
        "output",
        "progress",
        "select",
        "textarea",
        "input",
      ];
      function getTextContent(node) {
        return labelledNodeNames.includes(node.nodeName.toLowerCase())
          ? ""
          : node.nodeType === TEXT_NODE
          ? node.textContent
          : Array.from(node.childNodes)
              .map((childNode) => getTextContent(childNode))
              .join("");
      }
      function getLabelContent(element) {
        let textContent;
        return (
          (textContent =
            "label" === element.tagName.toLowerCase()
              ? getTextContent(element)
              : element.value || element.textContent),
          textContent
        );
      }
      function getRealLabels(element) {
        var _labels;
        if (void 0 !== element.labels)
          return null != (_labels = element.labels) ? _labels : [];
        if (
          !(function isLabelable(element) {
            return (
              /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(
                element.tagName
              ) ||
              ("INPUT" === element.tagName &&
                "hidden" !== element.getAttribute("type"))
            );
          })(element)
        )
          return [];
        const labels = element.ownerDocument.querySelectorAll("label");
        return Array.from(labels).filter((label) => label.control === element);
      }
      function dom_esm_getLabels(container, element, _temp) {
        let { selector = "*" } = void 0 === _temp ? {} : _temp;
        const ariaLabelledBy = element.getAttribute("aria-labelledby"),
          labelsId = ariaLabelledBy ? ariaLabelledBy.split(" ") : [];
        return labelsId.length
          ? labelsId.map((labelId) => {
              const labellingElement = container.querySelector(
                '[id="' + labelId + '"]'
              );
              return labellingElement
                ? {
                    content: getLabelContent(labellingElement),
                    formControl: null,
                  }
                : { content: "", formControl: null };
            })
          : Array.from(getRealLabels(element)).map((label) => ({
              content: getLabelContent(label),
              formControl: Array.from(
                label.querySelectorAll(
                  "button, input, meter, output, progress, select, textarea"
                )
              ).filter((formControlElement) =>
                formControlElement.matches(selector)
              )[0],
            }));
      }
      function assertNotNullOrUndefined(matcher) {
        if (null == matcher)
          throw new Error(
            "It looks like " +
              matcher +
              " was passed instead of a matcher. Did you do something like getByText(" +
              matcher +
              ")?"
          );
      }
      function fuzzyMatches(textToMatch, node, matcher, normalizer) {
        if ("string" != typeof textToMatch) return !1;
        assertNotNullOrUndefined(matcher);
        const normalizedText = normalizer(textToMatch);
        return "string" == typeof matcher || "number" == typeof matcher
          ? normalizedText
              .toLowerCase()
              .includes(matcher.toString().toLowerCase())
          : "function" == typeof matcher
          ? matcher(normalizedText, node)
          : matchRegExp(matcher, normalizedText);
      }
      function matches(textToMatch, node, matcher, normalizer) {
        if ("string" != typeof textToMatch) return !1;
        assertNotNullOrUndefined(matcher);
        const normalizedText = normalizer(textToMatch);
        return matcher instanceof Function
          ? matcher(normalizedText, node)
          : matcher instanceof RegExp
          ? matchRegExp(matcher, normalizedText)
          : normalizedText === String(matcher);
      }
      function getDefaultNormalizer(_temp) {
        let { trim = !0, collapseWhitespace = !0 } =
          void 0 === _temp ? {} : _temp;
        return (text) => {
          let normalizedText = text;
          return (
            (normalizedText = trim ? normalizedText.trim() : normalizedText),
            (normalizedText = collapseWhitespace
              ? normalizedText.replace(/\s+/g, " ")
              : normalizedText),
            normalizedText
          );
        };
      }
      function makeNormalizer(_ref) {
        let { trim, collapseWhitespace, normalizer } = _ref;
        if (!normalizer)
          return getDefaultNormalizer({ trim, collapseWhitespace });
        if (void 0 !== trim || void 0 !== collapseWhitespace)
          throw new Error(
            'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer'
          );
        return normalizer;
      }
      function matchRegExp(matcher, text) {
        const match = matcher.test(text);
        return (
          matcher.global &&
            0 !== matcher.lastIndex &&
            (console.warn(
              "To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."
            ),
            (matcher.lastIndex = 0)),
          match
        );
      }
      function getNodeText(node) {
        return node.matches(
          "input[type=submit], input[type=button], input[type=reset]"
        )
          ? node.value
          : Array.from(node.childNodes)
              .filter(
                (child) =>
                  child.nodeType === TEXT_NODE && Boolean(child.textContent)
              )
              .map((c) => c.textContent)
              .join("");
      }
      const elementRoleList = (function buildElementRoleList(elementRolesMap) {
        function getSelectorSpecificity(_ref3) {
          let { attributes = [] } = _ref3;
          return attributes.length;
        }
        function match(element) {
          let { attributes = [] } = element;
          const typeTextIndex = attributes.findIndex(
            (attribute) =>
              attribute.value &&
              "type" === attribute.name &&
              "text" === attribute.value
          );
          typeTextIndex >= 0 &&
            (attributes = [
              ...attributes.slice(0, typeTextIndex),
              ...attributes.slice(typeTextIndex + 1),
            ]);
          const selector = (function makeElementSelector(_ref) {
            let { name, attributes } = _ref;
            return (
              "" +
              name +
              attributes
                .map((_ref2) => {
                  let { name: attributeName, value, constraints = [] } = _ref2;
                  return -1 !== constraints.indexOf("undefined")
                    ? ":not([" + attributeName + "])"
                    : value
                    ? "[" + attributeName + '="' + value + '"]'
                    : "[" + attributeName + "]";
                })
                .join("")
            );
          })({ ...element, attributes });
          return (node) =>
            !(typeTextIndex >= 0 && "text" !== node.type) &&
            node.matches(selector);
        }
        let result = [];
        for (const [element, roles] of elementRolesMap.entries())
          result = [
            ...result,
            {
              match: match(element),
              roles: Array.from(roles),
              specificity: getSelectorSpecificity(element),
            },
          ];
        return result.sort(function bySelectorSpecificity(_ref4, _ref5) {
          let { specificity: leftSpecificity } = _ref4,
            { specificity: rightSpecificity } = _ref5;
          return rightSpecificity - leftSpecificity;
        });
      })(lib.Qv);
      function isSubtreeInaccessible(element) {
        if (!0 === element.hidden) return !0;
        if ("true" === element.getAttribute("aria-hidden")) return !0;
        return (
          "none" ===
          element.ownerDocument.defaultView.getComputedStyle(element).display
        );
      }
      function isInaccessible(element, options) {
        void 0 === options && (options = {});
        const {
          isSubtreeInaccessible:
            isSubtreeInaccessibleImpl = isSubtreeInaccessible,
        } = options;
        if (
          "hidden" ===
          element.ownerDocument.defaultView.getComputedStyle(element).visibility
        )
          return !0;
        let currentElement = element;
        for (; currentElement; ) {
          if (isSubtreeInaccessibleImpl(currentElement)) return !0;
          currentElement = currentElement.parentElement;
        }
        return !1;
      }
      function getImplicitAriaRoles(currentNode) {
        for (const { match, roles } of elementRoleList)
          if (match(currentNode)) return [...roles];
        return [];
      }
      function getRoles(container, _temp) {
        let { hidden = !1 } = void 0 === _temp ? {} : _temp;
        return (function flattenDOM(node) {
          return [
            node,
            ...Array.from(node.children).reduce(
              (acc, child) => [...acc, ...flattenDOM(child)],
              []
            ),
          ];
        })(container)
          .filter((element) => !1 !== hidden || !1 === isInaccessible(element))
          .reduce((acc, node) => {
            let roles = [];
            return (
              (roles = node.hasAttribute("role")
                ? node.getAttribute("role").split(" ").slice(0, 1)
                : getImplicitAriaRoles(node)),
              roles.reduce(
                (rolesAcc, role) =>
                  Array.isArray(rolesAcc[role])
                    ? { ...rolesAcc, [role]: [...rolesAcc[role], node] }
                    : { ...rolesAcc, [role]: [node] },
                acc
              )
            );
          }, {});
      }
      function prettyRoles(dom, _ref6) {
        let { hidden, includeDescription } = _ref6;
        const roles = getRoles(dom, { hidden });
        return Object.entries(roles)
          .filter((_ref7) => {
            let [role] = _ref7;
            return "generic" !== role;
          })
          .map((_ref8) => {
            let [role, elements] = _ref8;
            const delimiterBar = "-".repeat(50);
            return (
              role +
              ":\n\n" +
              elements
                .map((el) => {
                  const nameString =
                      'Name "' +
                      computeAccessibleName(el, {
                        computedStyleSupportsPseudoElements:
                          getConfig().computedStyleSupportsPseudoElements,
                      }) +
                      '":\n',
                    domString = prettyDOM(el.cloneNode(!1));
                  if (includeDescription) {
                    return (
                      "" +
                      nameString +
                      ('Description "' +
                        computeAccessibleDescription(el, {
                          computedStyleSupportsPseudoElements:
                            getConfig().computedStyleSupportsPseudoElements,
                        }) +
                        '":\n') +
                      domString
                    );
                  }
                  return "" + nameString + domString;
                })
                .join("\n\n") +
              "\n\n" +
              delimiterBar
            );
          })
          .join("\n");
      }
      const logRoles = function (dom, _temp2) {
        let { hidden = !1 } = void 0 === _temp2 ? {} : _temp2;
        return console.log(prettyRoles(dom, { hidden }));
      };
      function checkBooleanAttribute(element, attribute) {
        const attributeValue = element.getAttribute(attribute);
        return (
          "true" === attributeValue || ("false" !== attributeValue && void 0)
        );
      }
      const normalize = getDefaultNormalizer();
      function getRegExpMatcher(string) {
        return new RegExp(
          (function escapeRegExp(string) {
            return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
          })(string.toLowerCase()),
          "i"
        );
      }
      function makeSuggestion(queryName, element, content, _ref) {
        let { variant, name } = _ref,
          warning = "";
        const queryOptions = {},
          queryArgs = [
            ["Role", "TestId"].includes(queryName)
              ? content
              : getRegExpMatcher(content),
          ];
        name && (queryOptions.name = getRegExpMatcher(name)),
          "Role" === queryName &&
            isInaccessible(element) &&
            ((queryOptions.hidden = !0),
            (warning =
              "Element is inaccessible. This means that the element and all its children are invisible to screen readers.\n    If you are using the aria-hidden prop, make sure this is the right choice for your case.\n    ")),
          Object.keys(queryOptions).length > 0 && queryArgs.push(queryOptions);
        const queryMethod = variant + "By" + queryName;
        return {
          queryName,
          queryMethod,
          queryArgs,
          variant,
          warning,
          toString() {
            warning && console.warn(warning);
            let [text, options] = queryArgs;
            return (
              (text = "string" == typeof text ? "'" + text + "'" : text),
              (options = options
                ? ", { " +
                  Object.entries(options)
                    .map((_ref2) => {
                      let [k, v] = _ref2;
                      return k + ": " + v;
                    })
                    .join(", ") +
                  " }"
                : ""),
              queryMethod + "(" + text + options + ")"
            );
          },
        };
      }
      function canSuggest(currentMethod, requestedMethod, data) {
        return (
          data &&
          (!requestedMethod ||
            requestedMethod.toLowerCase() === currentMethod.toLowerCase())
        );
      }
      function getSuggestedQuery(element, variant, method) {
        var _element$getAttribute, _getImplicitAriaRoles;
        if (
          (void 0 === variant && (variant = "get"),
          element.matches(getConfig().defaultIgnore))
        )
          return;
        const role =
          null != (_element$getAttribute = element.getAttribute("role"))
            ? _element$getAttribute
            : null == (_getImplicitAriaRoles = getImplicitAriaRoles(element))
            ? void 0
            : _getImplicitAriaRoles[0];
        if ("generic" !== role && canSuggest("Role", method, role))
          return makeSuggestion("Role", element, role, {
            variant,
            name: computeAccessibleName(element, {
              computedStyleSupportsPseudoElements:
                getConfig().computedStyleSupportsPseudoElements,
            }),
          });
        const labelText = dom_esm_getLabels(document, element)
          .map((label) => label.content)
          .join(" ");
        if (canSuggest("LabelText", method, labelText))
          return makeSuggestion("LabelText", element, labelText, { variant });
        const placeholderText = element.getAttribute("placeholder");
        if (canSuggest("PlaceholderText", method, placeholderText))
          return makeSuggestion("PlaceholderText", element, placeholderText, {
            variant,
          });
        const textContent = normalize(getNodeText(element));
        if (canSuggest("Text", method, textContent))
          return makeSuggestion("Text", element, textContent, { variant });
        if (canSuggest("DisplayValue", method, element.value))
          return makeSuggestion(
            "DisplayValue",
            element,
            normalize(element.value),
            { variant }
          );
        const alt = element.getAttribute("alt");
        if (canSuggest("AltText", method, alt))
          return makeSuggestion("AltText", element, alt, { variant });
        const title = element.getAttribute("title");
        if (canSuggest("Title", method, title))
          return makeSuggestion("Title", element, title, { variant });
        const testId = element.getAttribute(getConfig().testIdAttribute);
        return canSuggest("TestId", method, testId)
          ? makeSuggestion("TestId", element, testId, { variant })
          : void 0;
      }
      function copyStackTrace(target, source) {
        target.stack = source.stack.replace(source.message, target.message);
      }
      function waitFor(callback, _ref) {
        let {
          container = getDocument(),
          timeout = getConfig().asyncUtilTimeout,
          showOriginalStackTrace = getConfig().showOriginalStackTrace,
          stackTraceError,
          interval = 50,
          onTimeout = (error) => (
            (error.message = getConfig().getElementError(
              error.message,
              container
            ).message),
            error
          ),
          mutationObserverOptions = {
            subtree: !0,
            childList: !0,
            attributes: !0,
            characterData: !0,
          },
        } = _ref;
        if ("function" != typeof callback)
          throw new TypeError("Received `callback` arg must be a function");
        return new Promise(async (resolve, reject) => {
          let lastError,
            intervalId,
            observer,
            finished = !1,
            promiseStatus = "idle";
          const overallTimeoutTimer = setTimeout(function handleTimeout() {
              let error;
              lastError
                ? ((error = lastError),
                  showOriginalStackTrace ||
                    "TestingLibraryElementError" !== error.name ||
                    copyStackTrace(error, stackTraceError))
                : ((error = new Error("Timed out in waitFor.")),
                  showOriginalStackTrace ||
                    copyStackTrace(error, stackTraceError));
              onDone(onTimeout(error), null);
            }, timeout),
            usingJestFakeTimers = jestFakeTimersAreEnabled();
          if (usingJestFakeTimers) {
            const { unstable_advanceTimersWrapper: advanceTimersWrapper } =
              getConfig();
            for (checkCallback(); !finished; ) {
              if (!jestFakeTimersAreEnabled()) {
                const error = new Error(
                  "Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
                );
                return (
                  showOriginalStackTrace ||
                    copyStackTrace(error, stackTraceError),
                  void reject(error)
                );
              }
              if (
                (advanceTimersWrapper(() => {
                  jest.advanceTimersByTime(interval);
                }),
                checkCallback(),
                finished)
              )
                break;
              await advanceTimersWrapper(async () => {
                await new Promise((r) => {
                  setTimeout(r, 0), jest.advanceTimersByTime(0);
                });
              });
            }
          } else {
            try {
              checkContainerType(container);
            } catch (e) {
              return void reject(e);
            }
            intervalId = setInterval(checkRealTimersCallback, interval);
            const { MutationObserver } = getWindowFromNode(container);
            (observer = new MutationObserver(checkRealTimersCallback)),
              observer.observe(container, mutationObserverOptions),
              checkCallback();
          }
          function onDone(error, result) {
            (finished = !0),
              clearTimeout(overallTimeoutTimer),
              usingJestFakeTimers ||
                (clearInterval(intervalId), observer.disconnect()),
              error ? reject(error) : resolve(result);
          }
          function checkRealTimersCallback() {
            if (jestFakeTimersAreEnabled()) {
              const error = new Error(
                "Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
              );
              return (
                showOriginalStackTrace ||
                  copyStackTrace(error, stackTraceError),
                reject(error)
              );
            }
            return checkCallback();
          }
          function checkCallback() {
            if ("pending" !== promiseStatus)
              try {
                const result =
                  (function runWithExpensiveErrorDiagnosticsDisabled(callback) {
                    try {
                      return (
                        (config._disableExpensiveErrorDiagnostics = !0),
                        callback()
                      );
                    } finally {
                      config._disableExpensiveErrorDiagnostics = !1;
                    }
                  })(callback);
                "function" == typeof (null == result ? void 0 : result.then)
                  ? ((promiseStatus = "pending"),
                    result.then(
                      (resolvedValue) => {
                        (promiseStatus = "resolved"),
                          onDone(null, resolvedValue);
                      },
                      (rejectedValue) => {
                        (promiseStatus = "rejected"),
                          (lastError = rejectedValue);
                      }
                    ))
                  : onDone(null, result);
              } catch (error) {
                lastError = error;
              }
          }
        });
      }
      function waitForWrapper(callback, options) {
        const stackTraceError = new Error("STACK_TRACE_MESSAGE");
        return getConfig().asyncWrapper(() =>
          waitFor(callback, { stackTraceError, ...options })
        );
      }
      function getElementError(message, container) {
        return getConfig().getElementError(message, container);
      }
      function getMultipleElementsFoundError(message, container) {
        return getElementError(
          message +
            "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).",
          container
        );
      }
      function queryAllByAttribute(attribute, container, text, _temp) {
        let {
          exact = !0,
          collapseWhitespace,
          trim,
          normalizer,
        } = void 0 === _temp ? {} : _temp;
        const matcher = exact ? matches : fuzzyMatches,
          matchNormalizer = makeNormalizer({
            collapseWhitespace,
            trim,
            normalizer,
          });
        return Array.from(
          container.querySelectorAll("[" + attribute + "]")
        ).filter((node) =>
          matcher(node.getAttribute(attribute), node, text, matchNormalizer)
        );
      }
      function queryByAttribute(attribute, container, text, options) {
        const els = queryAllByAttribute(attribute, container, text, options);
        if (els.length > 1)
          throw getMultipleElementsFoundError(
            "Found multiple elements by [" + attribute + "=" + text + "]",
            container
          );
        return els[0] || null;
      }
      function makeSingleQuery(allQuery, getMultipleError) {
        return function (container) {
          for (
            var _len = arguments.length,
              args = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          )
            args[_key - 1] = arguments[_key];
          const els = allQuery(container, ...args);
          if (els.length > 1) {
            const elementStrings = els
              .map((element) => getElementError(null, element).message)
              .join("\n\n");
            throw getMultipleElementsFoundError(
              getMultipleError(container, ...args) +
                "\n\nHere are the matching elements:\n\n" +
                elementStrings,
              container
            );
          }
          return els[0] || null;
        };
      }
      function getSuggestionError(suggestion, container) {
        return getConfig().getElementError(
          "A better query is available, try this:\n" +
            suggestion.toString() +
            "\n",
          container
        );
      }
      function makeGetAllQuery(allQuery, getMissingError) {
        return function (container) {
          for (
            var _len2 = arguments.length,
              args = new Array(_len2 > 1 ? _len2 - 1 : 0),
              _key2 = 1;
            _key2 < _len2;
            _key2++
          )
            args[_key2 - 1] = arguments[_key2];
          const els = allQuery(container, ...args);
          if (!els.length)
            throw getConfig().getElementError(
              getMissingError(container, ...args),
              container
            );
          return els;
        };
      }
      function makeFindQuery(getter) {
        return (container, text, options, waitForOptions) =>
          waitForWrapper(() => getter(container, text, options), {
            container,
            ...waitForOptions,
          });
      }
      const wrapSingleQueryWithSuggestion = (query, queryAllByName, variant) =>
          function (container) {
            for (
              var _len3 = arguments.length,
                args = new Array(_len3 > 1 ? _len3 - 1 : 0),
                _key3 = 1;
              _key3 < _len3;
              _key3++
            )
              args[_key3 - 1] = arguments[_key3];
            const element = query(container, ...args),
              [{ suggest = getConfig().throwSuggestions } = {}] =
                args.slice(-1);
            if (element && suggest) {
              const suggestion = getSuggestedQuery(element, variant);
              if (suggestion && !queryAllByName.endsWith(suggestion.queryName))
                throw getSuggestionError(suggestion.toString(), container);
            }
            return element;
          },
        wrapAllByQueryWithSuggestion = (query, queryAllByName, variant) =>
          function (container) {
            for (
              var _len4 = arguments.length,
                args = new Array(_len4 > 1 ? _len4 - 1 : 0),
                _key4 = 1;
              _key4 < _len4;
              _key4++
            )
              args[_key4 - 1] = arguments[_key4];
            const els = query(container, ...args),
              [{ suggest = getConfig().throwSuggestions } = {}] =
                args.slice(-1);
            if (els.length && suggest) {
              const uniqueSuggestionMessages = [
                ...new Set(
                  els.map((element) => {
                    var _getSuggestedQuery;
                    return null ==
                      (_getSuggestedQuery = getSuggestedQuery(element, variant))
                      ? void 0
                      : _getSuggestedQuery.toString();
                  })
                ),
              ];
              if (
                1 === uniqueSuggestionMessages.length &&
                !queryAllByName.endsWith(
                  getSuggestedQuery(els[0], variant).queryName
                )
              )
                throw getSuggestionError(
                  uniqueSuggestionMessages[0],
                  container
                );
            }
            return els;
          };
      function buildQueries(queryAllBy, getMultipleError, getMissingError) {
        const queryBy = wrapSingleQueryWithSuggestion(
            makeSingleQuery(queryAllBy, getMultipleError),
            queryAllBy.name,
            "query"
          ),
          getAllBy = makeGetAllQuery(queryAllBy, getMissingError),
          getBy = makeSingleQuery(getAllBy, getMultipleError),
          getByWithSuggestions = wrapSingleQueryWithSuggestion(
            getBy,
            queryAllBy.name,
            "get"
          );
        return [
          queryBy,
          wrapAllByQueryWithSuggestion(
            getAllBy,
            queryAllBy.name.replace("query", "get"),
            "getAll"
          ),
          getByWithSuggestions,
          makeFindQuery(
            wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name, "findAll")
          ),
          makeFindQuery(
            wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, "find")
          ),
        ];
      }
      var queryHelpers = Object.freeze({
        __proto__: null,
        getElementError,
        wrapAllByQueryWithSuggestion,
        wrapSingleQueryWithSuggestion,
        getMultipleElementsFoundError,
        queryAllByAttribute,
        queryByAttribute,
        makeSingleQuery,
        makeGetAllQuery,
        makeFindQuery,
        buildQueries,
      });
      const queryAllLabelsByText = function (container, text, _temp) {
          let {
            exact = !0,
            trim,
            collapseWhitespace,
            normalizer,
          } = void 0 === _temp ? {} : _temp;
          const matcher = exact ? matches : fuzzyMatches,
            matchNormalizer = makeNormalizer({
              collapseWhitespace,
              trim,
              normalizer,
            }),
            textToMatchByLabels = (function queryAllLabels(container) {
              return Array.from(container.querySelectorAll("label,input"))
                .map((node) => ({ node, textToMatch: getLabelContent(node) }))
                .filter((_ref) => {
                  let { textToMatch } = _ref;
                  return null !== textToMatch;
                });
            })(container);
          return textToMatchByLabels
            .filter((_ref2) => {
              let { node, textToMatch } = _ref2;
              return matcher(textToMatch, node, text, matchNormalizer);
            })
            .map((_ref3) => {
              let { node } = _ref3;
              return node;
            });
        },
        queryAllByLabelText = function (container, text, _temp2) {
          let {
            selector = "*",
            exact = !0,
            collapseWhitespace,
            trim,
            normalizer,
          } = void 0 === _temp2 ? {} : _temp2;
          checkContainerType(container);
          const matcher = exact ? matches : fuzzyMatches,
            matchNormalizer = makeNormalizer({
              collapseWhitespace,
              trim,
              normalizer,
            }),
            matchingLabelledElements = Array.from(
              container.querySelectorAll("*")
            )
              .filter(
                (element) =>
                  getRealLabels(element).length ||
                  element.hasAttribute("aria-labelledby")
              )
              .reduce((labelledElements, labelledElement) => {
                const labelList = dom_esm_getLabels(
                  container,
                  labelledElement,
                  { selector }
                );
                labelList
                  .filter((label) => Boolean(label.formControl))
                  .forEach((label) => {
                    matcher(
                      label.content,
                      label.formControl,
                      text,
                      matchNormalizer
                    ) &&
                      label.formControl &&
                      labelledElements.push(label.formControl);
                  });
                const labelsValue = labelList
                  .filter((label) => Boolean(label.content))
                  .map((label) => label.content);
                return (
                  matcher(
                    labelsValue.join(" "),
                    labelledElement,
                    text,
                    matchNormalizer
                  ) && labelledElements.push(labelledElement),
                  labelsValue.length > 1 &&
                    labelsValue.forEach((labelValue, index) => {
                      matcher(
                        labelValue,
                        labelledElement,
                        text,
                        matchNormalizer
                      ) && labelledElements.push(labelledElement);
                      const labelsFiltered = [...labelsValue];
                      labelsFiltered.splice(index, 1),
                        labelsFiltered.length > 1 &&
                          matcher(
                            labelsFiltered.join(" "),
                            labelledElement,
                            text,
                            matchNormalizer
                          ) &&
                          labelledElements.push(labelledElement);
                    }),
                  labelledElements
                );
              }, [])
              .concat(
                queryAllByAttribute("aria-label", container, text, {
                  exact,
                  normalizer: matchNormalizer,
                })
              );
          return Array.from(new Set(matchingLabelledElements)).filter(
            (element) => element.matches(selector)
          );
        },
        getAllByLabelText = function (container, text) {
          for (
            var _len = arguments.length,
              rest = new Array(_len > 2 ? _len - 2 : 0),
              _key = 2;
            _key < _len;
            _key++
          )
            rest[_key - 2] = arguments[_key];
          const els = queryAllByLabelText(container, text, ...rest);
          if (!els.length) {
            const labels = queryAllLabelsByText(container, text, ...rest);
            if (labels.length) {
              const tagNames = labels
                .map((label) =>
                  (function getTagNameOfElementAssociatedWithLabelViaFor(
                    container,
                    label
                  ) {
                    const htmlFor = label.getAttribute("for");
                    if (!htmlFor) return null;
                    const element = container.querySelector(
                      '[id="' + htmlFor + '"]'
                    );
                    return element ? element.tagName.toLowerCase() : null;
                  })(container, label)
                )
                .filter((tagName) => !!tagName);
              throw tagNames.length
                ? getConfig().getElementError(
                    tagNames
                      .map(
                        (tagName) =>
                          "Found a label with the text of: " +
                          text +
                          ", however the element associated with this label (<" +
                          tagName +
                          " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" +
                          tagName +
                          " />, you can use aria-label or aria-labelledby instead."
                      )
                      .join("\n\n"),
                    container
                  )
                : getConfig().getElementError(
                    "Found a label with the text of: " +
                      text +
                      ', however no form control was found associated to that label. Make sure you\'re using the "for" attribute or "aria-labelledby" attribute correctly.',
                    container
                  );
            }
            throw getConfig().getElementError(
              "Unable to find a label with the text of: " + text,
              container
            );
          }
          return els;
        };
      const getMultipleError$7 = (c, text) =>
          "Found multiple elements with the text of: " + text,
        queryByLabelText = wrapSingleQueryWithSuggestion(
          makeSingleQuery(queryAllByLabelText, getMultipleError$7),
          queryAllByLabelText.name,
          "query"
        ),
        getByLabelText = makeSingleQuery(getAllByLabelText, getMultipleError$7),
        findAllByLabelText = makeFindQuery(
          wrapAllByQueryWithSuggestion(
            getAllByLabelText,
            getAllByLabelText.name,
            "findAll"
          )
        ),
        findByLabelText = makeFindQuery(
          wrapSingleQueryWithSuggestion(
            getByLabelText,
            getAllByLabelText.name,
            "find"
          )
        ),
        getAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(
          getAllByLabelText,
          getAllByLabelText.name,
          "getAll"
        ),
        getByLabelTextWithSuggestions = wrapSingleQueryWithSuggestion(
          getByLabelText,
          getAllByLabelText.name,
          "get"
        ),
        queryAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByLabelText,
          queryAllByLabelText.name,
          "queryAll"
        ),
        queryAllByPlaceholderText = function () {
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            checkContainerType(args[0]),
            queryAllByAttribute("placeholder", ...args)
          );
        },
        queryAllByPlaceholderTextWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByPlaceholderText,
          queryAllByPlaceholderText.name,
          "queryAll"
        ),
        [
          queryByPlaceholderText,
          getAllByPlaceholderText,
          getByPlaceholderText,
          findAllByPlaceholderText,
          findByPlaceholderText,
        ] = buildQueries(
          queryAllByPlaceholderText,
          (c, text) =>
            "Found multiple elements with the placeholder text of: " + text,
          (c, text) =>
            "Unable to find an element with the placeholder text of: " + text
        ),
        queryAllByText = function (container, text, _temp) {
          let {
            selector = "*",
            exact = !0,
            collapseWhitespace,
            trim,
            ignore = getConfig().defaultIgnore,
            normalizer,
          } = void 0 === _temp ? {} : _temp;
          checkContainerType(container);
          const matcher = exact ? matches : fuzzyMatches,
            matchNormalizer = makeNormalizer({
              collapseWhitespace,
              trim,
              normalizer,
            });
          let baseArray = [];
          return (
            "function" == typeof container.matches &&
              container.matches(selector) &&
              (baseArray = [container]),
            [...baseArray, ...Array.from(container.querySelectorAll(selector))]
              .filter((node) => !ignore || !node.matches(ignore))
              .filter((node) =>
                matcher(getNodeText(node), node, text, matchNormalizer)
              )
          );
        },
        queryAllByTextWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByText,
          queryAllByText.name,
          "queryAll"
        ),
        [queryByText, getAllByText, getByText, findAllByText, findByText] =
          buildQueries(
            queryAllByText,
            (c, text) => "Found multiple elements with the text: " + text,
            function (c, text, options) {
              void 0 === options && (options = {});
              const { collapseWhitespace, trim, normalizer, selector } =
                  options,
                normalizedText = makeNormalizer({
                  collapseWhitespace,
                  trim,
                  normalizer,
                })(text.toString());
              return (
                "Unable to find an element with the text: " +
                (normalizedText !== text.toString()
                  ? normalizedText + " (normalized from '" + text + "')"
                  : text) +
                ("*" !== (null != selector ? selector : "*")
                  ? ", which matches selector '" + selector + "'"
                  : "") +
                ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible."
              );
            }
          ),
        queryAllByDisplayValue = function (container, value, _temp) {
          let {
            exact = !0,
            collapseWhitespace,
            trim,
            normalizer,
          } = void 0 === _temp ? {} : _temp;
          checkContainerType(container);
          const matcher = exact ? matches : fuzzyMatches,
            matchNormalizer = makeNormalizer({
              collapseWhitespace,
              trim,
              normalizer,
            });
          return Array.from(
            container.querySelectorAll("input,textarea,select")
          ).filter((node) => {
            if ("SELECT" === node.tagName) {
              return Array.from(node.options)
                .filter((option) => option.selected)
                .some((optionNode) =>
                  matcher(
                    getNodeText(optionNode),
                    optionNode,
                    value,
                    matchNormalizer
                  )
                );
            }
            return matcher(node.value, node, value, matchNormalizer);
          });
        },
        queryAllByDisplayValueWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByDisplayValue,
          queryAllByDisplayValue.name,
          "queryAll"
        ),
        [
          queryByDisplayValue,
          getAllByDisplayValue,
          getByDisplayValue,
          findAllByDisplayValue,
          findByDisplayValue,
        ] = buildQueries(
          queryAllByDisplayValue,
          (c, value) =>
            "Found multiple elements with the display value: " + value + ".",
          (c, value) =>
            "Unable to find an element with the display value: " + value + "."
        ),
        VALID_TAG_REGEXP = /^(img|input|area|.+-.+)$/i,
        queryAllByAltText = function (container, alt, options) {
          return (
            void 0 === options && (options = {}),
            checkContainerType(container),
            queryAllByAttribute("alt", container, alt, options).filter((node) =>
              VALID_TAG_REGEXP.test(node.tagName)
            )
          );
        },
        queryAllByAltTextWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByAltText,
          queryAllByAltText.name,
          "queryAll"
        ),
        [
          queryByAltText,
          getAllByAltText,
          getByAltText,
          findAllByAltText,
          findByAltText,
        ] = buildQueries(
          queryAllByAltText,
          (c, alt) => "Found multiple elements with the alt text: " + alt,
          (c, alt) => "Unable to find an element with the alt text: " + alt
        ),
        queryAllByTitle = function (container, text, _temp) {
          let {
            exact = !0,
            collapseWhitespace,
            trim,
            normalizer,
          } = void 0 === _temp ? {} : _temp;
          checkContainerType(container);
          const matcher = exact ? matches : fuzzyMatches,
            matchNormalizer = makeNormalizer({
              collapseWhitespace,
              trim,
              normalizer,
            });
          return Array.from(
            container.querySelectorAll("[title], svg > title")
          ).filter(
            (node) =>
              matcher(
                node.getAttribute("title"),
                node,
                text,
                matchNormalizer
              ) ||
              (((node) => {
                var _node$parentElement;
                return (
                  "title" === node.tagName.toLowerCase() &&
                  "svg" ===
                    (null == (_node$parentElement = node.parentElement)
                      ? void 0
                      : _node$parentElement.tagName.toLowerCase())
                );
              })(node) &&
                matcher(getNodeText(node), node, text, matchNormalizer))
          );
        },
        queryAllByTitleWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByTitle,
          queryAllByTitle.name,
          "queryAll"
        ),
        [queryByTitle, getAllByTitle, getByTitle, findAllByTitle, findByTitle] =
          buildQueries(
            queryAllByTitle,
            (c, title) =>
              "Found multiple elements with the title: " + title + ".",
            (c, title) =>
              "Unable to find an element with the title: " + title + "."
          );
      function queryAllByRole(container, role, _temp) {
        let {
          exact = !0,
          collapseWhitespace,
          hidden = getConfig().defaultHidden,
          name,
          description,
          trim,
          normalizer,
          queryFallbacks = !1,
          selected,
          checked,
          pressed,
          current,
          level,
          expanded,
        } = void 0 === _temp ? {} : _temp;
        checkContainerType(container);
        const matcher = exact ? matches : fuzzyMatches,
          matchNormalizer = makeNormalizer({
            collapseWhitespace,
            trim,
            normalizer,
          });
        var _allRoles$get,
          _allRoles$get2,
          _allRoles$get3,
          _allRoles$get4,
          _allRoles$get5;
        if (
          void 0 !== selected &&
          void 0 ===
            (null == (_allRoles$get = lib.uJ.get(role))
              ? void 0
              : _allRoles$get.props["aria-selected"])
        )
          throw new Error(
            '"aria-selected" is not supported on role "' + role + '".'
          );
        if (
          void 0 !== checked &&
          void 0 ===
            (null == (_allRoles$get2 = lib.uJ.get(role))
              ? void 0
              : _allRoles$get2.props["aria-checked"])
        )
          throw new Error(
            '"aria-checked" is not supported on role "' + role + '".'
          );
        if (
          void 0 !== pressed &&
          void 0 ===
            (null == (_allRoles$get3 = lib.uJ.get(role))
              ? void 0
              : _allRoles$get3.props["aria-pressed"])
        )
          throw new Error(
            '"aria-pressed" is not supported on role "' + role + '".'
          );
        if (
          void 0 !== current &&
          void 0 ===
            (null == (_allRoles$get4 = lib.uJ.get(role))
              ? void 0
              : _allRoles$get4.props["aria-current"])
        )
          throw new Error(
            '"aria-current" is not supported on role "' + role + '".'
          );
        if (void 0 !== level && "heading" !== role)
          throw new Error('Role "' + role + '" cannot have "level" property.');
        if (
          void 0 !== expanded &&
          void 0 ===
            (null == (_allRoles$get5 = lib.uJ.get(role))
              ? void 0
              : _allRoles$get5.props["aria-expanded"])
        )
          throw new Error(
            '"aria-expanded" is not supported on role "' + role + '".'
          );
        const subtreeIsInaccessibleCache = new WeakMap();
        function cachedIsSubtreeInaccessible(element) {
          return (
            subtreeIsInaccessibleCache.has(element) ||
              subtreeIsInaccessibleCache.set(
                element,
                isSubtreeInaccessible(element)
              ),
            subtreeIsInaccessibleCache.get(element)
          );
        }
        return Array.from(
          container.querySelectorAll(
            (function makeRoleSelector(role, exact, customNormalizer) {
              var _roleElements$get;
              if ("string" != typeof role) return "*";
              const explicitRoleSelector =
                  exact && !customNormalizer
                    ? '*[role~="' + role + '"]'
                    : "*[role]",
                roleRelations =
                  null != (_roleElements$get = lib.UN.get(role))
                    ? _roleElements$get
                    : new Set(),
                implicitRoleSelectors = new Set(
                  Array.from(roleRelations).map((_ref) => {
                    let { name } = _ref;
                    return name;
                  })
                );
              return [explicitRoleSelector]
                .concat(Array.from(implicitRoleSelectors))
                .join(",");
            })(role, exact, normalizer ? matchNormalizer : void 0)
          )
        )
          .filter((node) => {
            if (node.hasAttribute("role")) {
              const roleValue = node.getAttribute("role");
              if (queryFallbacks)
                return roleValue
                  .split(" ")
                  .filter(Boolean)
                  .some((text) => matcher(text, node, role, matchNormalizer));
              if (normalizer)
                return matcher(roleValue, node, role, matchNormalizer);
              const [firstWord] = roleValue.split(" ");
              return matcher(firstWord, node, role, matchNormalizer);
            }
            return getImplicitAriaRoles(node).some((implicitRole) =>
              matcher(implicitRole, node, role, matchNormalizer)
            );
          })
          .filter((element) =>
            void 0 !== selected
              ? selected ===
                (function computeAriaSelected(element) {
                  return "OPTION" === element.tagName
                    ? element.selected
                    : checkBooleanAttribute(element, "aria-selected");
                })(element)
              : void 0 !== checked
              ? checked ===
                (function computeAriaChecked(element) {
                  if (!("indeterminate" in element) || !element.indeterminate)
                    return "checked" in element
                      ? element.checked
                      : checkBooleanAttribute(element, "aria-checked");
                })(element)
              : void 0 !== pressed
              ? pressed ===
                (function computeAriaPressed(element) {
                  return checkBooleanAttribute(element, "aria-pressed");
                })(element)
              : void 0 !== current
              ? current ===
                (function computeAriaCurrent(element) {
                  var _ref9, _checkBooleanAttribut;
                  return (
                    null !=
                      (_ref9 =
                        null !=
                        (_checkBooleanAttribut = checkBooleanAttribute(
                          element,
                          "aria-current"
                        ))
                          ? _checkBooleanAttribut
                          : element.getAttribute("aria-current")) && _ref9
                  );
                })(element)
              : void 0 !== expanded
              ? expanded ===
                (function computeAriaExpanded(element) {
                  return checkBooleanAttribute(element, "aria-expanded");
                })(element)
              : void 0 === level ||
                level ===
                  (function computeHeadingLevel(element) {
                    return (
                      (element.getAttribute("aria-level") &&
                        Number(element.getAttribute("aria-level"))) ||
                      { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }[
                        element.tagName
                      ]
                    );
                  })(element)
          )
          .filter(
            (element) =>
              void 0 === name ||
              matches(
                computeAccessibleName(element, {
                  computedStyleSupportsPseudoElements:
                    getConfig().computedStyleSupportsPseudoElements,
                }),
                element,
                name,
                (text) => text
              )
          )
          .filter(
            (element) =>
              void 0 === description ||
              matches(
                computeAccessibleDescription(element, {
                  computedStyleSupportsPseudoElements:
                    getConfig().computedStyleSupportsPseudoElements,
                }),
                element,
                description,
                (text) => text
              )
          )
          .filter(
            (element) =>
              !1 !== hidden ||
              !1 ===
                isInaccessible(element, {
                  isSubtreeInaccessible: cachedIsSubtreeInaccessible,
                })
          );
      }
      const getNameHint = (name) => {
          let nameHint = "";
          return (
            (nameHint =
              void 0 === name
                ? ""
                : "string" == typeof name
                ? ' and name "' + name + '"'
                : " and name `" + name + "`"),
            nameHint
          );
        },
        queryAllByRoleWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByRole,
          queryAllByRole.name,
          "queryAll"
        ),
        [queryByRole, getAllByRole, getByRole, findAllByRole, findByRole] =
          buildQueries(
            queryAllByRole,
            function (c, role, _temp2) {
              let { name } = void 0 === _temp2 ? {} : _temp2;
              return (
                'Found multiple elements with the role "' +
                role +
                '"' +
                getNameHint(name)
              );
            },
            function (container, role, _temp3) {
              let {
                hidden = getConfig().defaultHidden,
                name,
                description,
              } = void 0 === _temp3 ? {} : _temp3;
              if (getConfig()._disableExpensiveErrorDiagnostics)
                return 'Unable to find role="' + role + '"' + getNameHint(name);
              let roleMessage,
                roles = "";
              Array.from(container.children).forEach((childElement) => {
                roles += prettyRoles(childElement, {
                  hidden,
                  includeDescription: void 0 !== description,
                });
              }),
                (roleMessage =
                  0 === roles.length
                    ? !1 === hidden
                      ? "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole"
                      : "There are no available roles."
                    : (
                        "\nHere are the " +
                        (!1 === hidden ? "accessible" : "available") +
                        " roles:\n\n  " +
                        roles
                          .replace(/\n/g, "\n  ")
                          .replace(/\n\s\s\n/g, "\n\n") +
                        "\n"
                      ).trim());
              let nameHint = "";
              nameHint =
                void 0 === name
                  ? ""
                  : "string" == typeof name
                  ? ' and name "' + name + '"'
                  : " and name `" + name + "`";
              let descriptionHint = "";
              return (
                (descriptionHint =
                  void 0 === description
                    ? ""
                    : "string" == typeof description
                    ? ' and description "' + description + '"'
                    : " and description `" + description + "`"),
                (
                  "\nUnable to find an " +
                  (!1 === hidden ? "accessible " : "") +
                  'element with the role "' +
                  role +
                  '"' +
                  nameHint +
                  descriptionHint +
                  "\n\n" +
                  roleMessage
                ).trim()
              );
            }
          ),
        getTestIdAttribute = () => getConfig().testIdAttribute,
        queryAllByTestId = function () {
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            checkContainerType(args[0]),
            queryAllByAttribute(getTestIdAttribute(), ...args)
          );
        },
        queryAllByTestIdWithSuggestions = wrapAllByQueryWithSuggestion(
          queryAllByTestId,
          queryAllByTestId.name,
          "queryAll"
        ),
        [
          queryByTestId,
          getAllByTestId,
          getByTestId,
          findAllByTestId,
          findByTestId,
        ] = buildQueries(
          queryAllByTestId,
          (c, id) =>
            "Found multiple elements by: [" +
            getTestIdAttribute() +
            '="' +
            id +
            '"]',
          (c, id) =>
            "Unable to find an element by: [" +
            getTestIdAttribute() +
            '="' +
            id +
            '"]'
        );
      var queries = Object.freeze({
        __proto__: null,
        queryAllByLabelText: queryAllByLabelTextWithSuggestions,
        queryByLabelText,
        getAllByLabelText: getAllByLabelTextWithSuggestions,
        getByLabelText: getByLabelTextWithSuggestions,
        findAllByLabelText,
        findByLabelText,
        queryByPlaceholderText,
        queryAllByPlaceholderText: queryAllByPlaceholderTextWithSuggestions,
        getByPlaceholderText,
        getAllByPlaceholderText,
        findAllByPlaceholderText,
        findByPlaceholderText,
        queryByText,
        queryAllByText: queryAllByTextWithSuggestions,
        getByText,
        getAllByText,
        findAllByText,
        findByText,
        queryByDisplayValue,
        queryAllByDisplayValue: queryAllByDisplayValueWithSuggestions,
        getByDisplayValue,
        getAllByDisplayValue,
        findAllByDisplayValue,
        findByDisplayValue,
        queryByAltText,
        queryAllByAltText: queryAllByAltTextWithSuggestions,
        getByAltText,
        getAllByAltText,
        findAllByAltText,
        findByAltText,
        queryByTitle,
        queryAllByTitle: queryAllByTitleWithSuggestions,
        getByTitle,
        getAllByTitle,
        findAllByTitle,
        findByTitle,
        queryByRole,
        queryAllByRole: queryAllByRoleWithSuggestions,
        getAllByRole,
        getByRole,
        findAllByRole,
        findByRole,
        queryByTestId,
        queryAllByTestId: queryAllByTestIdWithSuggestions,
        getByTestId,
        getAllByTestId,
        findAllByTestId,
        findByTestId,
      });
      function getQueriesForElement(element, queries$1, initialValue) {
        return (
          void 0 === queries$1 && (queries$1 = queries),
          void 0 === initialValue && (initialValue = {}),
          Object.keys(queries$1).reduce((helpers, key) => {
            const fn = queries$1[key];
            return (helpers[key] = fn.bind(null, element)), helpers;
          }, initialValue)
        );
      }
      const isRemoved = (result) =>
        !result || (Array.isArray(result) && !result.length);
      function initialCheck(elements) {
        if (isRemoved(elements))
          throw new Error(
            "The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal."
          );
      }
      async function waitForElementToBeRemoved(callback, options) {
        const timeoutError = new Error(
          "Timed out in waitForElementToBeRemoved."
        );
        if ("function" != typeof callback) {
          initialCheck(callback);
          const getRemainingElements = (
            Array.isArray(callback) ? callback : [callback]
          ).map((element) => {
            let parent = element.parentElement;
            if (null === parent) return () => null;
            for (; parent.parentElement; ) parent = parent.parentElement;
            return () => (parent.contains(element) ? element : null);
          });
          callback = () => getRemainingElements.map((c) => c()).filter(Boolean);
        }
        return (
          initialCheck(callback()),
          waitForWrapper(() => {
            let result;
            try {
              result = callback();
            } catch (error) {
              if ("TestingLibraryElementError" === error.name) return;
              throw error;
            }
            if (!isRemoved(result)) throw timeoutError;
          }, options)
        );
      }
      const eventMap = {
          copy: {
            EventType: "ClipboardEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          cut: {
            EventType: "ClipboardEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          paste: {
            EventType: "ClipboardEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          compositionEnd: {
            EventType: "CompositionEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          compositionStart: {
            EventType: "CompositionEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          compositionUpdate: {
            EventType: "CompositionEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          keyDown: {
            EventType: "KeyboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              charCode: 0,
              composed: !0,
            },
          },
          keyPress: {
            EventType: "KeyboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              charCode: 0,
              composed: !0,
            },
          },
          keyUp: {
            EventType: "KeyboardEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              charCode: 0,
              composed: !0,
            },
          },
          focus: {
            EventType: "FocusEvent",
            defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
          },
          blur: {
            EventType: "FocusEvent",
            defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
          },
          focusIn: {
            EventType: "FocusEvent",
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          focusOut: {
            EventType: "FocusEvent",
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          change: {
            EventType: "Event",
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          input: {
            EventType: "InputEvent",
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          invalid: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !0 },
          },
          submit: {
            EventType: "Event",
            defaultInit: { bubbles: !0, cancelable: !0 },
          },
          reset: {
            EventType: "Event",
            defaultInit: { bubbles: !0, cancelable: !0 },
          },
          click: {
            EventType: "MouseEvent",
            defaultInit: {
              bubbles: !0,
              cancelable: !0,
              button: 0,
              composed: !0,
            },
          },
          contextMenu: {
            EventType: "MouseEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          dblClick: {
            EventType: "MouseEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          drag: {
            EventType: "DragEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          dragEnd: {
            EventType: "DragEvent",
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          dragEnter: {
            EventType: "DragEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          dragExit: {
            EventType: "DragEvent",
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          dragLeave: {
            EventType: "DragEvent",
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          dragOver: {
            EventType: "DragEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          dragStart: {
            EventType: "DragEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          drop: {
            EventType: "DragEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          mouseDown: {
            EventType: "MouseEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          mouseEnter: {
            EventType: "MouseEvent",
            defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
          },
          mouseLeave: {
            EventType: "MouseEvent",
            defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
          },
          mouseMove: {
            EventType: "MouseEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          mouseOut: {
            EventType: "MouseEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          mouseOver: {
            EventType: "MouseEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          mouseUp: {
            EventType: "MouseEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          select: {
            EventType: "Event",
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          touchCancel: {
            EventType: "TouchEvent",
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          touchEnd: {
            EventType: "TouchEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          touchMove: {
            EventType: "TouchEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          touchStart: {
            EventType: "TouchEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          resize: {
            EventType: "UIEvent",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          scroll: {
            EventType: "UIEvent",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          wheel: {
            EventType: "WheelEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          abort: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          canPlay: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          canPlayThrough: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          durationChange: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          emptied: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          encrypted: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          ended: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          loadedData: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          loadedMetadata: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          loadStart: {
            EventType: "ProgressEvent",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          pause: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          play: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          playing: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          progress: {
            EventType: "ProgressEvent",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          rateChange: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          seeked: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          seeking: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          stalled: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          suspend: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          timeUpdate: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          volumeChange: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          waiting: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          load: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          error: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          animationStart: {
            EventType: "AnimationEvent",
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          animationEnd: {
            EventType: "AnimationEvent",
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          animationIteration: {
            EventType: "AnimationEvent",
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          transitionCancel: {
            EventType: "TransitionEvent",
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          transitionEnd: {
            EventType: "TransitionEvent",
            defaultInit: { bubbles: !0, cancelable: !0 },
          },
          transitionRun: {
            EventType: "TransitionEvent",
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          transitionStart: {
            EventType: "TransitionEvent",
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          pointerOver: {
            EventType: "PointerEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          pointerEnter: {
            EventType: "PointerEvent",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          pointerDown: {
            EventType: "PointerEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          pointerMove: {
            EventType: "PointerEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          pointerUp: {
            EventType: "PointerEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          pointerCancel: {
            EventType: "PointerEvent",
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          pointerOut: {
            EventType: "PointerEvent",
            defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
          },
          pointerLeave: {
            EventType: "PointerEvent",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          gotPointerCapture: {
            EventType: "PointerEvent",
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          lostPointerCapture: {
            EventType: "PointerEvent",
            defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
          },
          popState: {
            EventType: "PopStateEvent",
            defaultInit: { bubbles: !0, cancelable: !1 },
          },
          offline: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
          online: {
            EventType: "Event",
            defaultInit: { bubbles: !1, cancelable: !1 },
          },
        },
        eventAliasMap = { doubleClick: "dblClick" };
      function fireEvent(element, event) {
        return getConfig().eventWrapper(() => {
          if (!event)
            throw new Error(
              "Unable to fire an event - please provide an event object."
            );
          if (!element)
            throw new Error(
              'Unable to fire a "' +
                event.type +
                '" event - please provide a DOM element.'
            );
          return element.dispatchEvent(event);
        });
      }
      function createEvent(eventName, node, init, _temp) {
        let { EventType = "Event", defaultInit = {} } =
          void 0 === _temp ? {} : _temp;
        if (!node)
          throw new Error(
            'Unable to fire a "' +
              eventName +
              '" event - please provide a DOM element.'
          );
        const eventInit = { ...defaultInit, ...init },
          { target: { value, files, ...targetProperties } = {} } = eventInit;
        void 0 !== value &&
          (function setNativeValue(element, value) {
            const { set: valueSetter } =
                Object.getOwnPropertyDescriptor(element, "value") || {},
              prototype = Object.getPrototypeOf(element),
              { set: prototypeValueSetter } =
                Object.getOwnPropertyDescriptor(prototype, "value") || {};
            if (prototypeValueSetter && valueSetter !== prototypeValueSetter)
              prototypeValueSetter.call(element, value);
            else {
              if (!valueSetter)
                throw new Error(
                  "The given element does not have a value setter"
                );
              valueSetter.call(element, value);
            }
          })(node, value),
          void 0 !== files &&
            Object.defineProperty(node, "files", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value: files,
            }),
          Object.assign(node, targetProperties);
        const window = getWindowFromNode(node),
          EventConstructor = window[EventType] || window.Event;
        let event;
        if ("function" == typeof EventConstructor)
          event = new EventConstructor(eventName, eventInit);
        else {
          event = window.document.createEvent(EventType);
          const { bubbles, cancelable, detail, ...otherInit } = eventInit;
          event.initEvent(eventName, bubbles, cancelable, detail),
            Object.keys(otherInit).forEach((eventKey) => {
              event[eventKey] = otherInit[eventKey];
            });
        }
        return (
          ["dataTransfer", "clipboardData"].forEach((dataTransferKey) => {
            const dataTransferValue = eventInit[dataTransferKey];
            "object" == typeof dataTransferValue &&
              ("function" == typeof window.DataTransfer
                ? Object.defineProperty(event, dataTransferKey, {
                    value: Object.getOwnPropertyNames(dataTransferValue).reduce(
                      (acc, propName) => (
                        Object.defineProperty(acc, propName, {
                          value: dataTransferValue[propName],
                        }),
                        acc
                      ),
                      new window.DataTransfer()
                    ),
                  })
                : Object.defineProperty(event, dataTransferKey, {
                    value: dataTransferValue,
                  }));
          }),
          event
        );
      }
      function getPlaygroundUrl(markup) {
        return (
          "https://testing-playground.com/#markup=" +
          (function encode(value) {
            return lz_string_default().compressToEncodedURIComponent(
              (function unindent(string) {
                return string.replace(/[ \t]*[\n][ \t]*/g, "\n");
              })(value)
            );
          })(markup)
        );
      }
      Object.keys(eventMap).forEach((key) => {
        const { EventType, defaultInit } = eventMap[key],
          eventName = key.toLowerCase();
        (createEvent[key] = (node, init) =>
          createEvent(eventName, node, init, { EventType, defaultInit })),
          (fireEvent[key] = (node, init) =>
            fireEvent(node, createEvent[key](node, init)));
      }),
        Object.keys(eventAliasMap).forEach((aliasKey) => {
          const key = eventAliasMap[aliasKey];
          fireEvent[aliasKey] = function () {
            return fireEvent[key](...arguments);
          };
        });
      const initialValue = {
          debug: (element, maxLength, options) =>
            Array.isArray(element)
              ? element.forEach((el) => logDOM(el, maxLength, options))
              : logDOM(element, maxLength, options),
          logTestingPlaygroundURL: function (element) {
            if (
              (void 0 === element && (element = getDocument().body),
              !element || !("innerHTML" in element))
            )
              return void console.log(
                "The element you're providing isn't a valid DOM element."
              );
            if (!element.innerHTML)
              return void console.log(
                "The provided element doesn't have any children."
              );
            const playgroundUrl = getPlaygroundUrl(element.innerHTML);
            return (
              console.log("Open this URL in your browser\n\n" + playgroundUrl),
              playgroundUrl
            );
          },
        },
        screen =
          "undefined" != typeof document && document.body
            ? getQueriesForElement(document.body, queries, initialValue)
            : Object.keys(queries).reduce(
                (helpers, key) => (
                  (helpers[key] = () => {
                    throw new TypeError(
                      "For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error"
                    );
                  }),
                  helpers
                ),
                initialValue
              );
    },
    "./node_modules/@testing-library/dom/dist/helpers.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.TEXT_NODE = void 0),
        (exports.checkContainerType = function checkContainerType(container) {
          if (
            !container ||
            "function" != typeof container.querySelector ||
            "function" != typeof container.querySelectorAll
          )
            throw new TypeError(
              `Expected container to be an Element, a Document or a DocumentFragment but got ${(function getTypeName(
                object
              ) {
                if ("object" == typeof object)
                  return null === object ? "null" : object.constructor.name;
                return typeof object;
              })(container)}.`
            );
        }),
        (exports.getDocument = function getDocument() {
          if ("undefined" == typeof window)
            throw new Error("Could not find default container");
          return window.document;
        }),
        (exports.getWindowFromNode = function getWindowFromNode(node) {
          if (node.defaultView) return node.defaultView;
          if (node.ownerDocument && node.ownerDocument.defaultView)
            return node.ownerDocument.defaultView;
          if (node.window) return node.window;
          throw node.ownerDocument && null === node.ownerDocument.defaultView
            ? new Error(
                "It looks like the window object is not available for the provided node."
              )
            : node.then instanceof Function
            ? new Error(
                "It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?"
              )
            : Array.isArray(node)
            ? new Error(
                "It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?"
              )
            : "function" == typeof node.debug &&
              "function" == typeof node.logTestingPlaygroundURL
            ? new Error(
                "It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?"
              )
            : new Error(
                `The given node is not an Element, the node type is: ${typeof node}.`
              );
        }),
        (exports.jestFakeTimersAreEnabled =
          function jestFakeTimersAreEnabled() {
            if ("undefined" != typeof jest && null !== jest)
              return (
                !0 === setTimeout._isMockFunction ||
                Object.prototype.hasOwnProperty.call(setTimeout, "clock")
              );
            return !1;
          });
      exports.TEXT_NODE = 3;
    },
    "./node_modules/@testing-library/user-event/dist/blur.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.blur = function blur(element) {
          if (!(0, _utils.isFocusable)(element)) return;
          if ((0, _utils.getActiveElement)(element.ownerDocument) !== element)
            return;
          (0, _utils.eventWrapper)(() => element.blur());
        });
      var _utils = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/index.js"
      );
    },
    "./node_modules/@testing-library/user-event/dist/clear.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.clear = function clear(element) {
          var _element$selectionSta, _element$selectionEnd;
          if (!(0, _utils.isElementType)(element, ["input", "textarea"]))
            throw new Error(
              "clear currently only supports input and textarea elements."
            );
          if ((0, _utils.isDisabled)(element)) return;
          const elementType = element.type;
          "textarea" !== elementType && (element.type = "text");
          (0, _type.type)(element, "{selectall}{del}", {
            delay: 0,
            initialSelectionStart:
              null != (_element$selectionSta = element.selectionStart)
                ? _element$selectionSta
                : void 0,
            initialSelectionEnd:
              null != (_element$selectionEnd = element.selectionEnd)
                ? _element$selectionEnd
                : void 0,
          }),
            "textarea" !== elementType && (element.type = elementType);
        });
      var _utils = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/index.js"
        ),
        _type = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/type/index.js"
        );
    },
    "./node_modules/@testing-library/user-event/dist/click.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.click = click),
        (exports.dblClick = function dblClick(
          element,
          init,
          { skipPointerEventsCheck = !1 } = {}
        ) {
          if (!skipPointerEventsCheck && !(0, _utils.hasPointerEvents)(element))
            throw new Error(
              'unable to double-click element as it has or inherits pointer-events set to "none".'
            );
          (0, _hover.hover)(element, init, { skipPointerEventsCheck }),
            click(element, init, {
              skipHover: !0,
              clickCount: 0,
              skipPointerEventsCheck,
            }),
            click(element, init, {
              skipHover: !0,
              clickCount: 1,
              skipPointerEventsCheck,
            }),
            _dom.fireEvent.dblClick(
              element,
              (0, _utils.getMouseEventOptions)("dblclick", init, 2)
            );
        });
      var _dom = __webpack_require__(
          "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
        ),
        _utils = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/index.js"
        ),
        _hover = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/hover.js"
        ),
        _blur = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/blur.js"
        ),
        _focus = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/focus.js"
        );
      function clickElement(element, init, { clickCount }) {
        const previousElement = (function getPreviouslyFocusedElement(element) {
          const focusedElement = element.ownerDocument.activeElement;
          return focusedElement &&
            focusedElement !== element.ownerDocument.body &&
            focusedElement !== element
            ? focusedElement
            : null;
        })(element);
        if (
          (_dom.fireEvent.pointerDown(element, init),
          !(0, _utils.isDisabled)(element))
        ) {
          if (
            _dom.fireEvent.mouseDown(
              element,
              (0, _utils.getMouseEventOptions)("mousedown", init, clickCount)
            )
          ) {
            const closestFocusable = (function findClosest(element, callback) {
              let el = element;
              do {
                if (callback(el)) return el;
                el = el.parentElement;
              } while (el && el !== element.ownerDocument.body);
              return;
            })(element, _utils.isFocusable);
            previousElement && !closestFocusable
              ? (0, _blur.blur)(previousElement)
              : closestFocusable && (0, _focus.focus)(closestFocusable);
          }
        }
        if (
          (_dom.fireEvent.pointerUp(element, init),
          !(0, _utils.isDisabled)(element))
        ) {
          _dom.fireEvent.mouseUp(
            element,
            (0, _utils.getMouseEventOptions)("mouseup", init, clickCount)
          ),
            fireClick(
              element,
              (0, _utils.getMouseEventOptions)("click", init, clickCount)
            );
          const parentLabel = element.closest("label");
          null != parentLabel &&
            parentLabel.control &&
            (0, _focus.focus)(parentLabel.control);
        }
      }
      function click(
        element,
        init,
        { skipHover = !1, clickCount = 0, skipPointerEventsCheck = !1 } = {}
      ) {
        if (!skipPointerEventsCheck && !(0, _utils.hasPointerEvents)(element))
          throw new Error(
            'unable to click element as it has or inherits pointer-events set to "none".'
          );
        skipHover ||
          (0, _hover.hover)(element, init, { skipPointerEventsCheck: !0 }),
          (0, _utils.isElementType)(element, "label")
            ? (function clickLabel(label, init, { clickCount }) {
                (0, _utils.isLabelWithInternallyDisabledControl)(label) ||
                  (_dom.fireEvent.pointerDown(label, init),
                  _dom.fireEvent.mouseDown(
                    label,
                    (0, _utils.getMouseEventOptions)(
                      "mousedown",
                      init,
                      clickCount
                    )
                  ),
                  _dom.fireEvent.pointerUp(label, init),
                  _dom.fireEvent.mouseUp(
                    label,
                    (0, _utils.getMouseEventOptions)(
                      "mouseup",
                      init,
                      clickCount
                    )
                  ),
                  fireClick(
                    label,
                    (0, _utils.getMouseEventOptions)("click", init, clickCount)
                  ),
                  label.control && (0, _focus.focus)(label.control));
              })(element, init, { clickCount })
            : (0, _utils.isElementType)(element, "input") &&
              ("checkbox" === element.type || "radio" === element.type)
            ? (function clickBooleanElement(element, init, { clickCount }) {
                _dom.fireEvent.pointerDown(element, init),
                  element.disabled ||
                    _dom.fireEvent.mouseDown(
                      element,
                      (0, _utils.getMouseEventOptions)(
                        "mousedown",
                        init,
                        clickCount
                      )
                    ),
                  (0, _focus.focus)(element),
                  _dom.fireEvent.pointerUp(element, init),
                  element.disabled ||
                    (_dom.fireEvent.mouseUp(
                      element,
                      (0, _utils.getMouseEventOptions)(
                        "mouseup",
                        init,
                        clickCount
                      )
                    ),
                    fireClick(
                      element,
                      (0, _utils.getMouseEventOptions)(
                        "click",
                        init,
                        clickCount
                      )
                    ));
              })(element, init, { clickCount })
            : clickElement(element, init, { clickCount });
      }
      function fireClick(element, mouseEventOptions) {
        2 === mouseEventOptions.button
          ? _dom.fireEvent.contextMenu(element, mouseEventOptions)
          : _dom.fireEvent.click(element, mouseEventOptions);
      }
    },
    "./node_modules/@testing-library/user-event/dist/focus.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.focus = function focus(element) {
          if (!(0, _utils.isFocusable)(element)) return;
          if ((0, _utils.getActiveElement)(element.ownerDocument) === element)
            return;
          (0, _utils.eventWrapper)(() => element.focus());
        });
      var _utils = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/index.js"
      );
    },
    "./node_modules/@testing-library/user-event/dist/hover.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.hover = function hover(
          element,
          init,
          { skipPointerEventsCheck = !1 } = {}
        ) {
          if (!skipPointerEventsCheck && !(0, _utils.hasPointerEvents)(element))
            throw new Error(
              'unable to hover element as it has or inherits pointer-events set to "none".'
            );
          if ((0, _utils.isLabelWithInternallyDisabledControl)(element)) return;
          const parentElements = getParentElements(element).reverse();
          _dom.fireEvent.pointerOver(element, init);
          for (const el of parentElements)
            _dom.fireEvent.pointerEnter(el, init);
          if (!(0, _utils.isDisabled)(element)) {
            _dom.fireEvent.mouseOver(
              element,
              (0, _utils.getMouseEventOptions)("mouseover", init)
            );
            for (const el of parentElements)
              _dom.fireEvent.mouseEnter(
                el,
                (0, _utils.getMouseEventOptions)("mouseenter", init)
              );
          }
          _dom.fireEvent.pointerMove(element, init),
            (0, _utils.isDisabled)(element) ||
              _dom.fireEvent.mouseMove(
                element,
                (0, _utils.getMouseEventOptions)("mousemove", init)
              );
        }),
        (exports.unhover = function unhover(
          element,
          init,
          { skipPointerEventsCheck = !1 } = {}
        ) {
          if (!skipPointerEventsCheck && !(0, _utils.hasPointerEvents)(element))
            throw new Error(
              'unable to unhover element as it has or inherits pointer-events set to "none".'
            );
          if ((0, _utils.isLabelWithInternallyDisabledControl)(element)) return;
          const parentElements = getParentElements(element);
          _dom.fireEvent.pointerMove(element, init),
            (0, _utils.isDisabled)(element) ||
              _dom.fireEvent.mouseMove(
                element,
                (0, _utils.getMouseEventOptions)("mousemove", init)
              );
          _dom.fireEvent.pointerOut(element, init);
          for (const el of parentElements)
            _dom.fireEvent.pointerLeave(el, init);
          if (!(0, _utils.isDisabled)(element)) {
            _dom.fireEvent.mouseOut(
              element,
              (0, _utils.getMouseEventOptions)("mouseout", init)
            );
            for (const el of parentElements)
              _dom.fireEvent.mouseLeave(
                el,
                (0, _utils.getMouseEventOptions)("mouseleave", init)
              );
          }
        });
      var _dom = __webpack_require__(
          "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
        ),
        _utils = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/index.js"
        );
      function getParentElements(element) {
        const parentElements = [element];
        let currentElement = element;
        for (; null != (currentElement = currentElement.parentElement); )
          parentElements.push(currentElement);
        return parentElements;
      }
    },
    "./node_modules/@testing-library/user-event/dist/index.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      exports.ZP = void 0;
      var _click = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/click.js"
        ),
        _type = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/type/index.js"
        ),
        _clear = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/clear.js"
        ),
        _tab = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/tab.js"
        ),
        _hover = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/hover.js"
        ),
        _upload = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/upload.js"
        ),
        _selectOptions = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/select-options.js"
        ),
        _paste = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/paste.js"
        ),
        _keyboard = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/keyboard/index.js"
        );
      var _default = {
        click: _click.click,
        dblClick: _click.dblClick,
        type: _type.type,
        clear: _clear.clear,
        tab: _tab.tab,
        hover: _hover.hover,
        unhover: _hover.unhover,
        upload: _upload.upload,
        selectOptions: _selectOptions.selectOptions,
        deselectOptions: _selectOptions.deselectOptions,
        paste: _paste.paste,
        keyboard: _keyboard.keyboard,
      };
      exports.ZP = _default;
    },
    "./node_modules/@testing-library/user-event/dist/keyboard/getEventProps.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.getKeyEventProps = function getKeyEventProps(keyDef, state) {
            var _keyDef$keyCode, _keyDef$key;
            return {
              key: keyDef.key,
              code: keyDef.code,
              altKey: state.modifiers.alt,
              ctrlKey: state.modifiers.ctrl,
              metaKey: state.modifiers.meta,
              shiftKey: state.modifiers.shift,
              keyCode:
                null != (_keyDef$keyCode = keyDef.keyCode)
                  ? _keyDef$keyCode
                  : 1 ===
                    (null == (_keyDef$key = keyDef.key)
                      ? void 0
                      : _keyDef$key.length)
                  ? keyDef.key.charCodeAt(0)
                  : void 0,
            };
          }),
          (exports.getMouseEventProps = function getMouseEventProps(state) {
            return {
              altKey: state.modifiers.alt,
              ctrlKey: state.modifiers.ctrl,
              metaKey: state.modifiers.meta,
              shiftKey: state.modifiers.shift,
            };
          });
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/getNextKeyDef.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        var bracketDict, legacyModifiers, legacyKeyMap;
        function readPrintableChar(text, pos) {
          const descriptor = text[pos];
          return (
            assertDescriptor(descriptor, text, pos),
            {
              consumedLength: (pos += descriptor.length),
              descriptor,
              releasePrevious: !1,
              releaseSelf: !0,
              repeat: 1,
            }
          );
        }
        function readTag(text, pos, startBracket) {
          var _text$slice$match, _text$slice$match$, _text$slice$match2;
          const releasePreviousModifier = "/" === text[pos] ? "/" : "";
          pos += releasePreviousModifier.length;
          const descriptor =
            null == (_text$slice$match = text.slice(pos).match(/^\w+/))
              ? void 0
              : _text$slice$match[0];
          assertDescriptor(descriptor, text, pos), (pos += descriptor.length);
          const repeatModifier =
              null !=
              (_text$slice$match$ =
                null == (_text$slice$match2 = text.slice(pos).match(/^>\d+/))
                  ? void 0
                  : _text$slice$match2[0])
                ? _text$slice$match$
                : "",
            releaseSelfModifier =
              "/" === text[(pos += repeatModifier.length)] ||
              (!repeatModifier && ">" === text[pos])
                ? text[pos]
                : "";
          pos += releaseSelfModifier.length;
          const expectedEndBracket = bracketDict[startBracket],
            endBracket =
              text[pos] === expectedEndBracket ? expectedEndBracket : "";
          if (!endBracket)
            throw new Error(
              getErrorMessage(
                [
                  !repeatModifier && "repeat modifier",
                  !releaseSelfModifier && "release modifier",
                  `"${expectedEndBracket}"`,
                ]
                  .filter(Boolean)
                  .join(" or "),
                text[pos],
                text
              )
            );
          return {
            consumedLength: (pos += endBracket.length),
            descriptor,
            releasePrevious: !!releasePreviousModifier,
            repeat: repeatModifier
              ? Math.max(Number(repeatModifier.substr(1)), 1)
              : 1,
            releaseSelf: hasReleaseSelf(
              startBracket,
              descriptor,
              releaseSelfModifier,
              repeatModifier
            ),
          };
        }
        function assertDescriptor(descriptor, text, pos) {
          if (!descriptor)
            throw new Error(getErrorMessage("key descriptor", text[pos], text));
        }
        function getEnumValue(f, key) {
          return f[key];
        }
        function hasReleaseSelf(
          startBracket,
          descriptor,
          releaseSelfModifier,
          repeatModifier
        ) {
          return releaseSelfModifier
            ? "/" === releaseSelfModifier
            : !repeatModifier &&
                ("{" !== startBracket ||
                  !getEnumValue(legacyModifiers, descriptor.toLowerCase()));
        }
        function getErrorMessage(expected, found, text) {
          return `Expected ${expected} but found "${
            null != found ? found : ""
          }" in "${text}"\n    See https://github.com/testing-library/user-event/blob/main/README.md#keyboardtext-options\n    for more information about how userEvent parses your input.`;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.getNextKeyDef = function getNextKeyDef(text, options) {
            var _options$keyboardMap$;
            const {
              type,
              descriptor,
              consumedLength,
              releasePrevious,
              releaseSelf,
              repeat,
            } = (function readNextDescriptor(text) {
              let pos = 0;
              const startBracket = text[pos] in bracketDict ? text[pos] : "";
              pos += startBracket.length;
              const startBracketRepeated = startBracket
                  ? text.match(new RegExp(`^\\${startBracket}+`))[0].length
                  : 0,
                type =
                  2 === startBracketRepeated ||
                  ("{" === startBracket && startBracketRepeated > 3)
                    ? ""
                    : startBracket;
              return {
                type,
                ...("" === type
                  ? readPrintableChar(text, pos)
                  : readTag(text, pos, type)),
              };
            })(text);
            return {
              keyDef:
                null !=
                (_options$keyboardMap$ = options.keyboardMap.find((def) => {
                  var _def$code;
                  if ("[" === type)
                    return (
                      (null == (_def$code = def.code)
                        ? void 0
                        : _def$code.toLowerCase()) === descriptor.toLowerCase()
                    );
                  if ("{" === type) {
                    var _def$key;
                    const key = (function mapLegacyKey(descriptor) {
                      var _getEnumValue;
                      return null !=
                        (_getEnumValue = getEnumValue(legacyKeyMap, descriptor))
                        ? _getEnumValue
                        : descriptor;
                    })(descriptor);
                    return (
                      (null == (_def$key = def.key)
                        ? void 0
                        : _def$key.toLowerCase()) === key.toLowerCase()
                    );
                  }
                  return def.key === descriptor;
                }))
                  ? _options$keyboardMap$
                  : {
                      key: "Unknown",
                      code: "Unknown",
                      ["[" === type ? "code" : "key"]: descriptor,
                    },
              consumedLength,
              releasePrevious,
              releaseSelf,
              repeat,
            };
          }),
          (function (bracketDict) {
            (bracketDict["{"] = "}"), (bracketDict["["] = "]");
          })(bracketDict || (bracketDict = {})),
          (function (legacyModifiers) {
            (legacyModifiers.alt = "alt"),
              (legacyModifiers.ctrl = "ctrl"),
              (legacyModifiers.meta = "meta"),
              (legacyModifiers.shift = "shift");
          })(legacyModifiers || (legacyModifiers = {})),
          (function (legacyKeyMap) {
            (legacyKeyMap.ctrl = "Control"),
              (legacyKeyMap.del = "Delete"),
              (legacyKeyMap.esc = "Escape"),
              (legacyKeyMap.space = " ");
          })(legacyKeyMap || (legacyKeyMap = {}));
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/index.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.keyboard = function keyboard(text, options) {
          var _options$delay;
          const { promise, state } = keyboardImplementationWrapper(
            text,
            options
          );
          return (null !=
          (_options$delay = null == options ? void 0 : options.delay)
            ? _options$delay
            : 0) > 0
            ? (0, _dom.getConfig)().asyncWrapper(() =>
                promise.then(() => state)
              )
            : (promise.catch(console.error), state);
        }),
        (exports.keyboardImplementationWrapper = keyboardImplementationWrapper),
        Object.defineProperty(exports, "specialCharMap", {
          enumerable: !0,
          get: function () {
            return _specialCharMap.specialCharMap;
          },
        });
      var _dom = __webpack_require__(
          "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
        ),
        _keyboardImplementation = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/keyboard/keyboardImplementation.js"
        ),
        _keyMap = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/keyboard/keyMap.js"
        ),
        _specialCharMap = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/keyboard/specialCharMap.js"
        );
      function keyboardImplementationWrapper(text, config = {}) {
        const {
            keyboardState: state = createKeyboardState(),
            delay = 0,
            document: doc = document,
            autoModify = !1,
            keyboardMap = _keyMap.defaultKeyMap,
          } = config,
          options = { delay, document: doc, autoModify, keyboardMap };
        return {
          promise: (0, _keyboardImplementation.keyboardImplementation)(
            text,
            options,
            state
          ),
          state,
          releaseAllKeys: () =>
            (0, _keyboardImplementation.releaseAllKeys)(options, state),
        };
      }
      function createKeyboardState() {
        return {
          activeElement: null,
          pressed: [],
          carryChar: "",
          modifiers: { alt: !1, caps: !1, ctrl: !1, meta: !1, shift: !1 },
        };
      }
    },
    "./node_modules/@testing-library/user-event/dist/keyboard/keyMap.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.defaultKeyMap = void 0);
      var _types = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/keyboard/types.js"
      );
      const defaultKeyMap = [
        ..."0123456789".split("").map((c) => ({ code: `Digit${c}`, key: c })),
        ...")!@#$%^&*("
          .split("")
          .map((c, i) => ({ code: `Digit${i}`, key: c, shiftKey: !0 })),
        ..."abcdefghijklmnopqrstuvwxyz"
          .split("")
          .map((c) => ({ code: `Key${c.toUpperCase()}`, key: c })),
        ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          .split("")
          .map((c) => ({ code: `Key${c}`, key: c, shiftKey: !0 })),
        { code: "Space", key: " " },
        {
          code: "AltLeft",
          key: "Alt",
          location: _types.DOM_KEY_LOCATION.LEFT,
          keyCode: 18,
        },
        {
          code: "AltRight",
          key: "Alt",
          location: _types.DOM_KEY_LOCATION.RIGHT,
          keyCode: 18,
        },
        {
          code: "ShiftLeft",
          key: "Shift",
          location: _types.DOM_KEY_LOCATION.LEFT,
          keyCode: 16,
        },
        {
          code: "ShiftRight",
          key: "Shift",
          location: _types.DOM_KEY_LOCATION.RIGHT,
          keyCode: 16,
        },
        {
          code: "ControlLeft",
          key: "Control",
          location: _types.DOM_KEY_LOCATION.LEFT,
          keyCode: 17,
        },
        {
          code: "ControlRight",
          key: "Control",
          location: _types.DOM_KEY_LOCATION.RIGHT,
          keyCode: 17,
        },
        {
          code: "MetaLeft",
          key: "Meta",
          location: _types.DOM_KEY_LOCATION.LEFT,
          keyCode: 93,
        },
        {
          code: "MetaRight",
          key: "Meta",
          location: _types.DOM_KEY_LOCATION.RIGHT,
          keyCode: 93,
        },
        {
          code: "OSLeft",
          key: "OS",
          location: _types.DOM_KEY_LOCATION.LEFT,
          keyCode: 91,
        },
        {
          code: "OSRight",
          key: "OS",
          location: _types.DOM_KEY_LOCATION.RIGHT,
          keyCode: 91,
        },
        { code: "CapsLock", key: "CapsLock", keyCode: 20 },
        { code: "Backspace", key: "Backspace", keyCode: 8 },
        { code: "Enter", key: "Enter", keyCode: 13 },
        { code: "Escape", key: "Escape", keyCode: 27 },
        { code: "ArrowUp", key: "ArrowUp", keyCode: 38 },
        { code: "ArrowDown", key: "ArrowDown", keyCode: 40 },
        { code: "ArrowLeft", key: "ArrowLeft", keyCode: 37 },
        { code: "ArrowRight", key: "ArrowRight", keyCode: 39 },
        { code: "Home", key: "Home", keyCode: 36 },
        { code: "End", key: "End", keyCode: 35 },
        { code: "Delete", key: "Delete", keyCode: 46 },
        { code: "PageUp", key: "PageUp", keyCode: 33 },
        { code: "PageDown", key: "PageDown", keyCode: 34 },
      ];
      exports.defaultKeyMap = defaultKeyMap;
    },
    "./node_modules/@testing-library/user-event/dist/keyboard/keyboardImplementation.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.keyboardImplementation =
            async function keyboardImplementation(text, options, state) {
              var _state$repeatKey;
              const { document } = options,
                getCurrentElement = () => getActive(document),
                {
                  keyDef,
                  consumedLength,
                  releasePrevious,
                  releaseSelf,
                  repeat,
                } =
                  null != (_state$repeatKey = state.repeatKey)
                    ? _state$repeatKey
                    : (0, _getNextKeyDef.getNextKeyDef)(text, options);
              if (
                !applyPlugins(
                  plugins.replaceBehavior,
                  keyDef,
                  getCurrentElement(),
                  options,
                  state
                )
              ) {
                const pressed = state.pressed.find((p) => p.keyDef === keyDef);
                if (
                  (pressed &&
                    !state.repeatKey &&
                    keyup(
                      keyDef,
                      getCurrentElement,
                      options,
                      state,
                      pressed.unpreventedDefault
                    ),
                  !releasePrevious)
                ) {
                  const unpreventedDefault = (function keydown(
                    keyDef,
                    getCurrentElement,
                    options,
                    state
                  ) {
                    const element = getCurrentElement();
                    element !== state.activeElement &&
                      ((state.carryValue = void 0), (state.carryChar = ""));
                    (state.activeElement = element),
                      applyPlugins(
                        plugins.preKeydownBehavior,
                        keyDef,
                        element,
                        options,
                        state
                      );
                    const unpreventedDefault = _dom.fireEvent.keyDown(
                      element,
                      (0, _getEventProps.getKeyEventProps)(keyDef, state)
                    );
                    state.pressed.push({ keyDef, unpreventedDefault }),
                      unpreventedDefault &&
                        applyPlugins(
                          plugins.keydownBehavior,
                          keyDef,
                          getCurrentElement(),
                          options,
                          state
                        );
                    return unpreventedDefault;
                  })(keyDef, getCurrentElement, options, state);
                  unpreventedDefault &&
                    (function hasKeyPress(keyDef, state) {
                      var _keyDef$key;
                      return !(
                        (1 !==
                          (null == (_keyDef$key = keyDef.key)
                            ? void 0
                            : _keyDef$key.length) &&
                          "Enter" !== keyDef.key) ||
                        state.modifiers.ctrl ||
                        state.modifiers.alt
                      );
                    })(keyDef, state) &&
                    (function keypress(
                      keyDef,
                      getCurrentElement,
                      options,
                      state
                    ) {
                      const element = getCurrentElement(),
                        unpreventedDefault = _dom.fireEvent.keyPress(
                          element,
                          (0, _getEventProps.getKeyEventProps)(keyDef, state)
                        );
                      unpreventedDefault &&
                        applyPlugins(
                          plugins.keypressBehavior,
                          keyDef,
                          getCurrentElement(),
                          options,
                          state
                        );
                    })(keyDef, getCurrentElement, options, state),
                    releaseSelf &&
                      repeat <= 1 &&
                      keyup(
                        keyDef,
                        getCurrentElement,
                        options,
                        state,
                        unpreventedDefault
                      );
                }
              }
              repeat > 1
                ? (state.repeatKey = {
                    consumedLength: 0,
                    keyDef,
                    releasePrevious,
                    releaseSelf,
                    repeat: repeat - 1,
                  })
                : delete state.repeatKey;
              if (text.length > consumedLength || repeat > 1)
                return (
                  options.delay > 0 && (await (0, _utils.wait)(options.delay)),
                  keyboardImplementation(
                    text.slice(consumedLength),
                    options,
                    state
                  )
                );
              return;
            }),
          (exports.releaseAllKeys = function releaseAllKeys(options, state) {
            const getCurrentElement = () => getActive(options.document);
            for (const k of state.pressed)
              keyup(
                k.keyDef,
                getCurrentElement,
                options,
                state,
                k.unpreventedDefault
              );
          });
        var _dom = __webpack_require__(
            "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
          ),
          _utils = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/index.js"
          ),
          _getNextKeyDef = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/keyboard/getNextKeyDef.js"
          ),
          plugins = (function _interopRequireWildcard(obj, nodeInterop) {
            if (!nodeInterop && obj && obj.__esModule) return obj;
            if (
              null === obj ||
              ("object" != typeof obj && "function" != typeof obj)
            )
              return { default: obj };
            var cache = _getRequireWildcardCache(nodeInterop);
            if (cache && cache.has(obj)) return cache.get(obj);
            var newObj = {},
              hasPropertyDescriptor =
                Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var key in obj)
              if (
                "default" !== key &&
                Object.prototype.hasOwnProperty.call(obj, key)
              ) {
                var desc = hasPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(obj, key)
                  : null;
                desc && (desc.get || desc.set)
                  ? Object.defineProperty(newObj, key, desc)
                  : (newObj[key] = obj[key]);
              }
            (newObj.default = obj), cache && cache.set(obj, newObj);
            return newObj;
          })(
            __webpack_require__(
              "./node_modules/@testing-library/user-event/dist/keyboard/plugins/index.js"
            )
          ),
          _getEventProps = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/keyboard/getEventProps.js"
          );
        function _getRequireWildcardCache(nodeInterop) {
          if ("function" != typeof WeakMap) return null;
          var cacheBabelInterop = new WeakMap(),
            cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function (nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }
        function getActive(document) {
          var _getActiveElement;
          return null !=
            (_getActiveElement = (0, _utils.getActiveElement)(document))
            ? _getActiveElement
            : document.body;
        }
        function keyup(keyDef, getCurrentElement, options, state, unprevented) {
          const element = getCurrentElement();
          applyPlugins(
            plugins.preKeyupBehavior,
            keyDef,
            element,
            options,
            state
          );
          const unpreventedDefault = _dom.fireEvent.keyUp(
            element,
            (0, _getEventProps.getKeyEventProps)(keyDef, state)
          );
          unprevented &&
            unpreventedDefault &&
            applyPlugins(
              plugins.keyupBehavior,
              keyDef,
              getCurrentElement(),
              options,
              state
            ),
            (state.pressed = state.pressed.filter((k) => k.keyDef !== keyDef)),
            applyPlugins(
              plugins.postKeyupBehavior,
              keyDef,
              element,
              options,
              state
            );
        }
        function applyPlugins(
          pluginCollection,
          keyDef,
          element,
          options,
          state
        ) {
          const plugin = pluginCollection.find((p) =>
            p.matches(keyDef, element, options, state)
          );
          return (
            plugin && plugin.handle(keyDef, element, options, state), !!plugin
          );
        }
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/plugins/arrow.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.keydownBehavior = void 0);
        var _utils = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/index.js"
        );
        const keydownBehavior = [
          {
            matches: (keyDef, element) =>
              ("ArrowLeft" === keyDef.key || "ArrowRight" === keyDef.key) &&
              (0, _utils.isElementType)(element, ["input", "textarea"]),
            handle: (keyDef, element) => {
              var _ref;
              const { selectionStart, selectionEnd } = (0,
                _utils.getSelectionRange)(element),
                direction = "ArrowLeft" === keyDef.key ? -1 : 1,
                newPos =
                  null !=
                  (_ref =
                    selectionStart === selectionEnd
                      ? (null != selectionStart ? selectionStart : 0) +
                        direction
                      : direction < 0
                      ? selectionStart
                      : selectionEnd)
                    ? _ref
                    : 0;
              (0, _utils.setSelectionRange)(element, newPos, newPos);
            },
          },
        ];
        exports.keydownBehavior = keydownBehavior;
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/plugins/character.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.keypressBehavior = void 0);
        var _dom = __webpack_require__(
            "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
          ),
          _shared = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/keyboard/shared/index.js"
          ),
          _utils = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/index.js"
          );
        const keypressBehavior = [
          {
            matches: (keyDef, element) => {
              var _keyDef$key;
              return (
                1 ===
                  (null == (_keyDef$key = keyDef.key)
                    ? void 0
                    : _keyDef$key.length) &&
                (0, _utils.isElementType)(element, "input", {
                  type: "time",
                  readOnly: !1,
                })
              );
            },
            handle: (keyDef, element, options, state) => {
              var _state$carryValue;
              let newEntry = keyDef.key;
              const textToBeTyped =
                  (null != (_state$carryValue = state.carryValue)
                    ? _state$carryValue
                    : "") + newEntry,
                timeNewEntry = (0, _utils.buildTimeValue)(textToBeTyped);
              (0, _utils.isValidInputTimeValue)(element, timeNewEntry) &&
                (newEntry = timeNewEntry);
              const { newValue, newSelectionStart } = (0,
                _utils.calculateNewValue)(newEntry, element),
                prevValue = (0, _utils.getValue)(element);
              prevValue !== newValue &&
                (0, _shared.fireInputEvent)(element, {
                  newValue,
                  newSelectionStart,
                  eventOverrides: { data: keyDef.key, inputType: "insertText" },
                }),
                (0, _shared.fireChangeForInputTimeIfValid)(
                  element,
                  prevValue,
                  timeNewEntry
                ),
                (state.carryValue = textToBeTyped);
            },
          },
          {
            matches: (keyDef, element) => {
              var _keyDef$key2;
              return (
                1 ===
                  (null == (_keyDef$key2 = keyDef.key)
                    ? void 0
                    : _keyDef$key2.length) &&
                (0, _utils.isElementType)(element, "input", {
                  type: "date",
                  readOnly: !1,
                })
              );
            },
            handle: (keyDef, element, options, state) => {
              var _state$carryValue2;
              let newEntry = keyDef.key;
              const textToBeTyped =
                  (null != (_state$carryValue2 = state.carryValue)
                    ? _state$carryValue2
                    : "") + newEntry,
                isValidToBeTyped = (0, _utils.isValidDateValue)(
                  element,
                  textToBeTyped
                );
              isValidToBeTyped && (newEntry = textToBeTyped);
              const { newValue, newSelectionStart } = (0,
              _utils.calculateNewValue)(newEntry, element);
              (0, _utils.getValue)(element) !== newValue &&
                (0, _shared.fireInputEvent)(element, {
                  newValue,
                  newSelectionStart,
                  eventOverrides: { data: keyDef.key, inputType: "insertText" },
                }),
                isValidToBeTyped &&
                  _dom.fireEvent.change(element, {
                    target: { value: textToBeTyped },
                  }),
                (state.carryValue = textToBeTyped);
            },
          },
          {
            matches: (keyDef, element) => {
              var _keyDef$key3;
              return (
                1 ===
                  (null == (_keyDef$key3 = keyDef.key)
                    ? void 0
                    : _keyDef$key3.length) &&
                (0, _utils.isElementType)(element, "input", {
                  type: "number",
                  readOnly: !1,
                })
              );
            },
            handle: (keyDef, element, options, state) => {
              var _ref, _state$carryValue3, _newValue$match, _newValue$match2;
              if (!/[\d.\-e]/.test(keyDef.key)) return;
              const oldValue =
                  null !=
                  (_ref =
                    null != (_state$carryValue3 = state.carryValue)
                      ? _state$carryValue3
                      : (0, _utils.getValue)(element))
                    ? _ref
                    : "",
                { newValue, newSelectionStart } = (0, _utils.calculateNewValue)(
                  keyDef.key,
                  element,
                  oldValue
                ),
                valueParts = newValue.split("e", 2);
              if (
                Number(
                  null == (_newValue$match = newValue.match(/-/g))
                    ? void 0
                    : _newValue$match.length
                ) > 2 ||
                Number(
                  null == (_newValue$match2 = newValue.match(/\./g))
                    ? void 0
                    : _newValue$match2.length
                ) > 1 ||
                (valueParts[1] && !/^-?\d*$/.test(valueParts[1]))
              )
                return;
              (0, _shared.fireInputEvent)(element, {
                newValue,
                newSelectionStart,
                eventOverrides: { data: keyDef.key, inputType: "insertText" },
              });
              const appliedValue = (0, _utils.getValue)(element);
              state.carryValue = appliedValue === newValue ? void 0 : newValue;
            },
          },
          {
            matches: (keyDef, element) => {
              var _keyDef$key4;
              return (
                1 ===
                  (null == (_keyDef$key4 = keyDef.key)
                    ? void 0
                    : _keyDef$key4.length) &&
                (((0, _utils.isElementType)(element, ["input", "textarea"], {
                  readOnly: !1,
                }) &&
                  !(0, _utils.isClickableInput)(element)) ||
                  (0, _utils.isContentEditable)(element)) &&
                0 !== (0, _utils.getSpaceUntilMaxLength)(element)
              );
            },
            handle: (keyDef, element) => {
              const { newValue, newSelectionStart } = (0,
              _utils.calculateNewValue)(keyDef.key, element);
              (0, _shared.fireInputEvent)(element, {
                newValue,
                newSelectionStart,
                eventOverrides: { data: keyDef.key, inputType: "insertText" },
              });
            },
          },
          {
            matches: (keyDef, element) =>
              "Enter" === keyDef.key &&
              ((0, _utils.isElementType)(element, "textarea", {
                readOnly: !1,
              }) ||
                (0, _utils.isContentEditable)(element)) &&
              0 !== (0, _utils.getSpaceUntilMaxLength)(element),
            handle: (keyDef, element, options, state) => {
              const { newValue, newSelectionStart } = (0,
                _utils.calculateNewValue)("\n", element),
                inputType =
                  (0, _utils.isContentEditable)(element) &&
                  !state.modifiers.shift
                    ? "insertParagraph"
                    : "insertLineBreak";
              (0, _shared.fireInputEvent)(element, {
                newValue,
                newSelectionStart,
                eventOverrides: { inputType },
              });
            },
          },
        ];
        exports.keypressBehavior = keypressBehavior;
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/plugins/control.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.keydownBehavior = void 0);
        var _utils = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/index.js"
          ),
          _shared = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/keyboard/shared/index.js"
          );
        const keydownBehavior = [
          {
            matches: (keyDef, element) =>
              ("Home" === keyDef.key || "End" === keyDef.key) &&
              ((0, _utils.isElementType)(element, ["input", "textarea"]) ||
                (0, _utils.isContentEditable)(element)),
            handle: (keyDef, element) => {
              if ("Home" === keyDef.key)
                (0, _utils.setSelectionRange)(element, 0, 0);
              else {
                var _getValue$length, _getValue;
                const newPos =
                  null !=
                  (_getValue$length =
                    null == (_getValue = (0, _utils.getValue)(element))
                      ? void 0
                      : _getValue.length)
                    ? _getValue$length
                    : 0;
                (0, _utils.setSelectionRange)(element, newPos, newPos);
              }
            },
          },
          {
            matches: (keyDef, element) =>
              ("PageUp" === keyDef.key || "PageDown" === keyDef.key) &&
              (0, _utils.isElementType)(element, ["input"]),
            handle: (keyDef, element) => {
              if ("PageUp" === keyDef.key)
                (0, _utils.setSelectionRange)(element, 0, 0);
              else {
                var _getValue$length2, _getValue2;
                const newPos =
                  null !=
                  (_getValue$length2 =
                    null == (_getValue2 = (0, _utils.getValue)(element))
                      ? void 0
                      : _getValue2.length)
                    ? _getValue$length2
                    : 0;
                (0, _utils.setSelectionRange)(element, newPos, newPos);
              }
            },
          },
          {
            matches: (keyDef, element) =>
              "Delete" === keyDef.key &&
              (0, _utils.isEditable)(element) &&
              !(0, _utils.isCursorAtEnd)(element),
            handle: (keDef, element, options, state) => {
              const { newValue, newSelectionStart } = (0,
              _utils.calculateNewValue)(
                "",
                element,
                state.carryValue,
                void 0,
                "forward"
              );
              (0, _shared.fireInputEvent)(element, {
                newValue,
                newSelectionStart,
                eventOverrides: { inputType: "deleteContentForward" },
              }),
                (0, _shared.carryValue)(element, state, newValue);
            },
          },
        ];
        exports.keydownBehavior = keydownBehavior;
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/plugins/functional.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.preKeyupBehavior =
            exports.preKeydownBehavior =
            exports.postKeyupBehavior =
            exports.keyupBehavior =
            exports.keypressBehavior =
            exports.keydownBehavior =
              void 0);
        var _dom = __webpack_require__(
            "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
          ),
          _utils = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/index.js"
          ),
          _getEventProps = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/keyboard/getEventProps.js"
          ),
          _shared = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/keyboard/shared/index.js"
          );
        const modifierKeys = {
            Alt: "alt",
            Control: "ctrl",
            Shift: "shift",
            Meta: "meta",
          },
          preKeydownBehavior = [
            ...Object.entries(modifierKeys).map(([key, modKey]) => ({
              matches: (keyDef) => keyDef.key === key,
              handle: (keyDef, element, options, state) => {
                state.modifiers[modKey] = !0;
              },
            })),
            {
              matches: (keyDef) => "AltGraph" === keyDef.key,
              handle: (keyDef, element, options, state) => {
                var _options$keyboardMap$;
                const ctrlKeyDef =
                  null !=
                  (_options$keyboardMap$ = options.keyboardMap.find(
                    (k) => "Control" === k.key
                  ))
                    ? _options$keyboardMap$
                    : { key: "Control", code: "Control" };
                _dom.fireEvent.keyDown(
                  element,
                  (0, _getEventProps.getKeyEventProps)(ctrlKeyDef, state)
                );
              },
            },
          ];
        exports.preKeydownBehavior = preKeydownBehavior;
        const keydownBehavior = [
          {
            matches: (keyDef) => "CapsLock" === keyDef.key,
            handle: (keyDef, element, options, state) => {
              state.modifiers.caps = !state.modifiers.caps;
            },
          },
          {
            matches: (keyDef, element) =>
              "Backspace" === keyDef.key &&
              (0, _utils.isEditable)(element) &&
              !(0, _utils.isCursorAtStart)(element),
            handle: (keyDef, element, options, state) => {
              const { newValue, newSelectionStart } = (0,
              _utils.calculateNewValue)(
                "",
                element,
                state.carryValue,
                void 0,
                "backward"
              );
              (0, _shared.fireInputEvent)(element, {
                newValue,
                newSelectionStart,
                eventOverrides: { inputType: "deleteContentBackward" },
              }),
                (0, _shared.carryValue)(element, state, newValue);
            },
          },
        ];
        exports.keydownBehavior = keydownBehavior;
        const keypressBehavior = [
          {
            matches: (keyDef, element) =>
              "Enter" === keyDef.key &&
              (0, _utils.isElementType)(element, "input") &&
              ["checkbox", "radio"].includes(element.type),
            handle: (keyDef, element) => {
              const form = element.form;
              (0, _utils.hasFormSubmit)(form) && _dom.fireEvent.submit(form);
            },
          },
          {
            matches: (keyDef, element) =>
              "Enter" === keyDef.key &&
              ((0, _utils.isClickableInput)(element) ||
                ((0, _utils.isElementType)(element, "a") &&
                  Boolean(element.href))),
            handle: (keyDef, element, options, state) => {
              _dom.fireEvent.click(
                element,
                (0, _getEventProps.getMouseEventProps)(state)
              );
            },
          },
          {
            matches: (keyDef, element) =>
              "Enter" === keyDef.key &&
              (0, _utils.isElementType)(element, "input"),
            handle: (keyDef, element) => {
              const form = element.form;
              form &&
                (1 === form.querySelectorAll("input").length ||
                  (0, _utils.hasFormSubmit)(form)) &&
                _dom.fireEvent.submit(form);
            },
          },
        ];
        exports.keypressBehavior = keypressBehavior;
        const preKeyupBehavior = [
          ...Object.entries(modifierKeys).map(([key, modKey]) => ({
            matches: (keyDef) => keyDef.key === key,
            handle: (keyDef, element, options, state) => {
              state.modifiers[modKey] = !1;
            },
          })),
        ];
        exports.preKeyupBehavior = preKeyupBehavior;
        const keyupBehavior = [
          {
            matches: (keyDef, element) =>
              " " === keyDef.key && (0, _utils.isClickableInput)(element),
            handle: (keyDef, element, options, state) => {
              _dom.fireEvent.click(
                element,
                (0, _getEventProps.getMouseEventProps)(state)
              );
            },
          },
        ];
        exports.keyupBehavior = keyupBehavior;
        const postKeyupBehavior = [
          {
            matches: (keyDef) => "AltGraph" === keyDef.key,
            handle: (keyDef, element, options, state) => {
              var _options$keyboardMap$2;
              const ctrlKeyDef =
                null !=
                (_options$keyboardMap$2 = options.keyboardMap.find(
                  (k) => "Control" === k.key
                ))
                  ? _options$keyboardMap$2
                  : { key: "Control", code: "Control" };
              _dom.fireEvent.keyUp(
                element,
                (0, _getEventProps.getKeyEventProps)(ctrlKeyDef, state)
              );
            },
          },
        ];
        exports.postKeyupBehavior = postKeyupBehavior;
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/plugins/index.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.replaceBehavior =
            exports.preKeyupBehavior =
            exports.preKeydownBehavior =
            exports.postKeyupBehavior =
            exports.keyupBehavior =
            exports.keypressBehavior =
            exports.keydownBehavior =
              void 0);
        var _utils = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/index.js"
          ),
          arrowKeys = _interopRequireWildcard(
            __webpack_require__(
              "./node_modules/@testing-library/user-event/dist/keyboard/plugins/arrow.js"
            )
          ),
          controlKeys = _interopRequireWildcard(
            __webpack_require__(
              "./node_modules/@testing-library/user-event/dist/keyboard/plugins/control.js"
            )
          ),
          characterKeys = _interopRequireWildcard(
            __webpack_require__(
              "./node_modules/@testing-library/user-event/dist/keyboard/plugins/character.js"
            )
          ),
          functionalKeys = _interopRequireWildcard(
            __webpack_require__(
              "./node_modules/@testing-library/user-event/dist/keyboard/plugins/functional.js"
            )
          );
        function _getRequireWildcardCache(nodeInterop) {
          if ("function" != typeof WeakMap) return null;
          var cacheBabelInterop = new WeakMap(),
            cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function (nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }
        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) return obj;
          if (
            null === obj ||
            ("object" != typeof obj && "function" != typeof obj)
          )
            return { default: obj };
          var cache = _getRequireWildcardCache(nodeInterop);
          if (cache && cache.has(obj)) return cache.get(obj);
          var newObj = {},
            hasPropertyDescriptor =
              Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj)
            if (
              "default" !== key &&
              Object.prototype.hasOwnProperty.call(obj, key)
            ) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
              desc && (desc.get || desc.set)
                ? Object.defineProperty(newObj, key, desc)
                : (newObj[key] = obj[key]);
            }
          return (
            (newObj.default = obj), cache && cache.set(obj, newObj), newObj
          );
        }
        const replaceBehavior = [
          {
            matches: (keyDef, element) =>
              "selectall" === keyDef.key &&
              (0, _utils.isElementType)(element, ["input", "textarea"]),
            handle: (keyDef, element, options, state) => {
              var _state$carryValue;
              (0, _utils.setSelectionRange)(
                element,
                0,
                (null != (_state$carryValue = state.carryValue)
                  ? _state$carryValue
                  : element.value
                ).length
              );
            },
          },
        ];
        exports.replaceBehavior = replaceBehavior;
        const preKeydownBehavior = [...functionalKeys.preKeydownBehavior];
        exports.preKeydownBehavior = preKeydownBehavior;
        const keydownBehavior = [
          ...arrowKeys.keydownBehavior,
          ...controlKeys.keydownBehavior,
          ...functionalKeys.keydownBehavior,
        ];
        exports.keydownBehavior = keydownBehavior;
        const keypressBehavior = [
          ...functionalKeys.keypressBehavior,
          ...characterKeys.keypressBehavior,
        ];
        exports.keypressBehavior = keypressBehavior;
        const preKeyupBehavior = [...functionalKeys.preKeyupBehavior];
        exports.preKeyupBehavior = preKeyupBehavior;
        const keyupBehavior = [...functionalKeys.keyupBehavior];
        exports.keyupBehavior = keyupBehavior;
        const postKeyupBehavior = [...functionalKeys.postKeyupBehavior];
        exports.postKeyupBehavior = postKeyupBehavior;
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/shared/carryValue.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.carryValue = function carryValue(element, state, newValue) {
            const value = (0, _utils.getValue)(element);
            state.carryValue =
              value !== newValue &&
              "" === value &&
              (0, _utils.hasUnreliableEmptyValue)(element)
                ? newValue
                : void 0;
          });
        var _utils = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/index.js"
        );
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/shared/fireChangeForInputTimeIfValid.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.fireChangeForInputTimeIfValid =
            function fireChangeForInputTimeIfValid(
              el,
              prevValue,
              timeNewEntry
            ) {
              (0, _utils.isValidInputTimeValue)(el, timeNewEntry) &&
                prevValue !== timeNewEntry &&
                _dom.fireEvent.change(el, { target: { value: timeNewEntry } });
            });
        var _dom = __webpack_require__(
            "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
          ),
          _utils = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/index.js"
          );
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/shared/fireInputEvent.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.fireInputEvent = function fireInputEvent(
            element,
            { newValue, newSelectionStart, eventOverrides }
          ) {
            if ((0, _utils.isContentEditable)(element))
              applyNative(element, "textContent", newValue);
            else {
              if (!(0, _utils.isElementType)(element, ["input", "textarea"]))
                throw new Error("Invalid Element");
              applyNative(element, "value", newValue);
            }
            (function setSelectionRangeAfterInput(element, newSelectionStart) {
              (0, _utils.setSelectionRange)(
                element,
                newSelectionStart,
                newSelectionStart
              );
            })(element, newSelectionStart),
              _dom.fireEvent.input(element, { ...eventOverrides }),
              (function setSelectionRangeAfterInputHandler(
                element,
                newValue,
                newSelectionStart
              ) {
                const value = (0, _utils.getValue)(element),
                  isUnreliableValue =
                    "" === value &&
                    (0, _utils.hasUnreliableEmptyValue)(element);
                if (!isUnreliableValue && value === newValue) {
                  const { selectionStart } = (0, _utils.getSelectionRange)(
                    element
                  );
                  selectionStart === value.length &&
                    (0, _utils.setSelectionRange)(
                      element,
                      newSelectionStart,
                      newSelectionStart
                    );
                }
              })(element, newValue, newSelectionStart);
          });
        var _dom = __webpack_require__(
            "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
          ),
          _utils = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/index.js"
          );
        const initial = Symbol("initial input value/textContent"),
          onBlur = Symbol("onBlur");
        function applyNative(element, propName, propValue) {
          const descriptor = Object.getOwnPropertyDescriptor(element, propName),
            nativeDescriptor = Object.getOwnPropertyDescriptor(
              element.constructor.prototype,
              propName
            );
          var _element$ownerDocumen;
          (descriptor &&
            nativeDescriptor &&
            Object.defineProperty(element, propName, nativeDescriptor),
          void 0 === element[initial] &&
            (element[initial] = String(element[propName])),
          (element[propName] = propValue),
          element[onBlur]) ||
            null ==
              (_element$ownerDocumen = element.ownerDocument.defaultView) ||
            _element$ownerDocumen.addEventListener(
              "blur",
              (element[onBlur] = () => {
                const initV = element[initial];
                delete element[onBlur],
                  delete element[initial],
                  String(element[propName]) !== initV &&
                    _dom.fireEvent.change(element);
              }),
              { capture: !0, once: !0 }
            );
          descriptor && Object.defineProperty(element, propName, descriptor);
        }
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/shared/index.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var _carryValue = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/keyboard/shared/carryValue.js"
        );
        Object.keys(_carryValue).forEach(function (key) {
          "default" !== key &&
            "__esModule" !== key &&
            ((key in exports && exports[key] === _carryValue[key]) ||
              Object.defineProperty(exports, key, {
                enumerable: !0,
                get: function () {
                  return _carryValue[key];
                },
              }));
        });
        var _fireChangeForInputTimeIfValid = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/keyboard/shared/fireChangeForInputTimeIfValid.js"
        );
        Object.keys(_fireChangeForInputTimeIfValid).forEach(function (key) {
          "default" !== key &&
            "__esModule" !== key &&
            ((key in exports &&
              exports[key] === _fireChangeForInputTimeIfValid[key]) ||
              Object.defineProperty(exports, key, {
                enumerable: !0,
                get: function () {
                  return _fireChangeForInputTimeIfValid[key];
                },
              }));
        });
        var _fireInputEvent = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/keyboard/shared/fireInputEvent.js"
        );
        Object.keys(_fireInputEvent).forEach(function (key) {
          "default" !== key &&
            "__esModule" !== key &&
            ((key in exports && exports[key] === _fireInputEvent[key]) ||
              Object.defineProperty(exports, key, {
                enumerable: !0,
                get: function () {
                  return _fireInputEvent[key];
                },
              }));
        });
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/specialCharMap.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.specialCharMap = void 0);
        exports.specialCharMap = {
          arrowLeft: "{arrowleft}",
          arrowRight: "{arrowright}",
          arrowDown: "{arrowdown}",
          arrowUp: "{arrowup}",
          enter: "{enter}",
          escape: "{esc}",
          delete: "{del}",
          backspace: "{backspace}",
          home: "{home}",
          end: "{end}",
          selectAll: "{selectall}",
          space: "{space}",
          whitespace: " ",
          pageUp: "{pageUp}",
          pageDown: "{pageDown}",
        };
      },
    "./node_modules/@testing-library/user-event/dist/keyboard/types.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      let DOM_KEY_LOCATION;
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.DOM_KEY_LOCATION = void 0),
        (exports.DOM_KEY_LOCATION = DOM_KEY_LOCATION),
        (function (DOM_KEY_LOCATION) {
          (DOM_KEY_LOCATION[(DOM_KEY_LOCATION.STANDARD = 0)] = "STANDARD"),
            (DOM_KEY_LOCATION[(DOM_KEY_LOCATION.LEFT = 1)] = "LEFT"),
            (DOM_KEY_LOCATION[(DOM_KEY_LOCATION.RIGHT = 2)] = "RIGHT"),
            (DOM_KEY_LOCATION[(DOM_KEY_LOCATION.NUMPAD = 3)] = "NUMPAD");
        })(
          DOM_KEY_LOCATION || (exports.DOM_KEY_LOCATION = DOM_KEY_LOCATION = {})
        );
    },
    "./node_modules/@testing-library/user-event/dist/paste.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.paste = function paste(
          element,
          text,
          init,
          { initialSelectionStart, initialSelectionEnd } = {}
        ) {
          if (
            !(function isSupportedElement(element) {
              return (
                ((0, _utils.isElementType)(element, "input") &&
                  Boolean(_utils.editableInputTypes[element.type])) ||
                (0, _utils.isElementType)(element, "textarea")
              );
            })(element)
          )
            throw new TypeError(
              `The given ${element.tagName} element is currently unsupported.\n      A PR extending this implementation would be very much welcome at https://github.com/testing-library/user-event`
            );
          if ((0, _utils.isDisabled)(element)) return;
          (0, _utils.eventWrapper)(() => element.focus()),
            0 === element.selectionStart &&
              0 === element.selectionEnd &&
              (0, _utils.setSelectionRange)(
                element,
                null != initialSelectionStart
                  ? initialSelectionStart
                  : element.value.length,
                null != initialSelectionEnd
                  ? initialSelectionEnd
                  : element.value.length
              );
          if ((_dom.fireEvent.paste(element, init), element.readOnly)) return;
          text = text.substr(0, (0, _utils.getSpaceUntilMaxLength)(element));
          const { newValue, newSelectionStart } = (0, _utils.calculateNewValue)(
            text,
            element
          );
          _dom.fireEvent.input(element, {
            inputType: "insertFromPaste",
            target: { value: newValue },
          }),
            (0, _utils.setSelectionRange)(
              element,
              { newSelectionStart, selectionEnd: newSelectionStart },
              {}
            );
        });
      var _dom = __webpack_require__(
          "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
        ),
        _utils = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/index.js"
        );
    },
    "./node_modules/@testing-library/user-event/dist/select-options.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.selectOptions = exports.deselectOptions = void 0);
      var _dom = __webpack_require__(
          "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
        ),
        _utils = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/index.js"
        ),
        _click = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/click.js"
        ),
        _focus = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/focus.js"
        ),
        _hover = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/hover.js"
        );
      function selectOptionsBase(
        newValue,
        select,
        values,
        init,
        { skipPointerEventsCheck = !1 } = {}
      ) {
        if (!newValue && !select.multiple)
          throw (0, _dom.getConfig)().getElementError(
            "Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.",
            select
          );
        const valArray = Array.isArray(values) ? values : [values],
          allOptions = Array.from(
            select.querySelectorAll('option, [role="option"]')
          ),
          selectedOptions = valArray
            .map((val) => {
              if ("string" != typeof val && allOptions.includes(val))
                return val;
              {
                const matchingOption = allOptions.find(
                  (o) => o.value === val || o.innerHTML === val
                );
                if (matchingOption) return matchingOption;
                throw (0, _dom.getConfig)().getElementError(
                  `Value "${String(val)}" not found in options`,
                  select
                );
              }
            })
            .filter((option) => !(0, _utils.isDisabled)(option));
        if (!(0, _utils.isDisabled)(select) && selectedOptions.length)
          if ((0, _utils.isElementType)(select, "select"))
            if (select.multiple)
              for (const option of selectedOptions) {
                const withPointerEvents =
                  !!skipPointerEventsCheck ||
                  (0, _utils.hasPointerEvents)(option);
                withPointerEvents &&
                  (_dom.fireEvent.pointerOver(option, init),
                  _dom.fireEvent.pointerEnter(select, init),
                  _dom.fireEvent.mouseOver(option),
                  _dom.fireEvent.mouseEnter(select),
                  _dom.fireEvent.pointerMove(option, init),
                  _dom.fireEvent.mouseMove(option, init),
                  _dom.fireEvent.pointerDown(option, init),
                  _dom.fireEvent.mouseDown(option, init)),
                  (0, _focus.focus)(select),
                  withPointerEvents &&
                    (_dom.fireEvent.pointerUp(option, init),
                    _dom.fireEvent.mouseUp(option, init)),
                  selectOption(option),
                  withPointerEvents && _dom.fireEvent.click(option, init);
              }
            else {
              if (1 !== selectedOptions.length)
                throw (0, _dom.getConfig)().getElementError(
                  "Cannot select multiple options on a non-multiple select",
                  select
                );
              {
                const withPointerEvents =
                  !!skipPointerEventsCheck ||
                  (0, _utils.hasPointerEvents)(select);
                withPointerEvents
                  ? (0, _click.click)(select, init, { skipPointerEventsCheck })
                  : (0, _focus.focus)(select),
                  selectOption(selectedOptions[0]),
                  withPointerEvents &&
                    (_dom.fireEvent.pointerOver(select, init),
                    _dom.fireEvent.pointerEnter(select, init),
                    _dom.fireEvent.mouseOver(select),
                    _dom.fireEvent.mouseEnter(select),
                    _dom.fireEvent.pointerUp(select, init),
                    _dom.fireEvent.mouseUp(select, init),
                    _dom.fireEvent.click(select, init));
              }
            }
          else {
            if ("listbox" !== select.getAttribute("role"))
              throw (0, _dom.getConfig)().getElementError(
                "Cannot select options on elements that are neither select nor listbox elements",
                select
              );
            selectedOptions.forEach((option) => {
              (0, _hover.hover)(option, init, { skipPointerEventsCheck }),
                (0, _click.click)(option, init, { skipPointerEventsCheck }),
                (0, _hover.unhover)(option, init, { skipPointerEventsCheck });
            });
          }
        function selectOption(option) {
          (option.selected = newValue),
            (0, _dom.fireEvent)(
              select,
              (0, _dom.createEvent)("input", select, {
                bubbles: !0,
                cancelable: !1,
                composed: !0,
                ...init,
              })
            ),
            _dom.fireEvent.change(select, init);
        }
      }
      const selectOptions = selectOptionsBase.bind(null, !0);
      exports.selectOptions = selectOptions;
      const deselectOptions = selectOptionsBase.bind(null, !1);
      exports.deselectOptions = deselectOptions;
    },
    "./node_modules/@testing-library/user-event/dist/tab.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.tab = function tab({ shift = !1, focusTrap } = {}) {
          var _focusTrap$ownerDocum, _focusTrap;
          const doc =
              null !=
              (_focusTrap$ownerDocum =
                null == (_focusTrap = focusTrap)
                  ? void 0
                  : _focusTrap.ownerDocument)
                ? _focusTrap$ownerDocum
                : document,
            previousElement = (0, _utils.getActiveElement)(doc);
          focusTrap || (focusTrap = doc);
          const focusableElements = focusTrap.querySelectorAll(
              _utils.FOCUSABLE_SELECTOR
            ),
            enabledElements = Array.from(focusableElements).filter(
              (el) =>
                el === previousElement ||
                ("-1" !== el.getAttribute("tabindex") &&
                  !(0, _utils.isDisabled)(el) &&
                  (0, _utils.isVisible)(el))
            );
          if (0 === enabledElements.length) return;
          const orderedElements = enabledElements
              .map((el, idx) => ({ el, idx }))
              .sort((a, b) => {
                if (
                  previousElement &&
                  "-1" === previousElement.getAttribute("tabindex")
                )
                  return a.idx - b.idx;
                const diff =
                  Number(a.el.getAttribute("tabindex")) -
                  Number(b.el.getAttribute("tabindex"));
                return 0 === diff ? a.idx - b.idx : diff;
              })
              .map(({ el }) => el),
            checkedRadio = {};
          let prunedElements = [];
          orderedElements.forEach((currentElement) => {
            const el = currentElement;
            if ("radio" === el.type && el.name) {
              const prev = previousElement;
              if (prev && prev.type === el.type && prev.name === el.name)
                return void (el === prev && prunedElements.push(el));
              if (el.checked)
                return (
                  (prunedElements = prunedElements.filter(
                    (e) => e.type !== el.type || e.name !== el.name
                  )),
                  prunedElements.push(el),
                  void (checkedRadio[el.name] = el)
                );
              if (void 0 !== checkedRadio[el.name]) return;
            }
            prunedElements.push(el);
          });
          const nextElement = (function getNextElement(
              currentIndex,
              shift,
              elements,
              focusTrap
            ) {
              if (
                (0, _utils.isDocument)(focusTrap) &&
                ((0 === currentIndex && shift) ||
                  (currentIndex === elements.length - 1 && !shift))
              )
                return focusTrap.body;
              const nextIndex = shift ? currentIndex - 1 : currentIndex + 1,
                defaultIndex = shift ? elements.length - 1 : 0;
              return elements[nextIndex] || elements[defaultIndex];
            })(
              prunedElements.findIndex((el) => el === previousElement),
              shift,
              prunedElements,
              focusTrap
            ),
            shiftKeyInit = { key: "Shift", keyCode: 16, shiftKey: !0 },
            tabKeyInit = { key: "Tab", keyCode: 9, shiftKey: shift };
          let continueToTab = !0;
          previousElement &&
            (shift &&
              _dom.fireEvent.keyDown(previousElement, { ...shiftKeyInit }),
            (continueToTab = _dom.fireEvent.keyDown(previousElement, {
              ...tabKeyInit,
            })));
          const keyUpTarget =
            !continueToTab && previousElement ? previousElement : nextElement;
          continueToTab &&
            (nextElement === doc.body
              ? previousElement && (0, _blur.blur)(previousElement)
              : (0, _focus.focus)(nextElement));
          _dom.fireEvent.keyUp(keyUpTarget, { ...tabKeyInit }),
            shift &&
              _dom.fireEvent.keyUp(keyUpTarget, {
                ...shiftKeyInit,
                shiftKey: !1,
              });
        });
      var _dom = __webpack_require__(
          "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
        ),
        _utils = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/index.js"
        ),
        _focus = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/focus.js"
        ),
        _blur = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/blur.js"
        );
    },
    "./node_modules/@testing-library/user-event/dist/type/index.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.type = function type(
          element,
          text,
          { delay = 0, ...options } = {}
        ) {
          return delay > 0
            ? (0, _dom.getConfig)().asyncWrapper(() =>
                (0, _typeImplementation.typeImplementation)(element, text, {
                  delay,
                  ...options,
                })
              )
            : void (0, _typeImplementation.typeImplementation)(element, text, {
                delay,
                ...options,
              }).catch(console.error);
        });
      var _dom = __webpack_require__(
          "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
        ),
        _typeImplementation = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/type/typeImplementation.js"
        );
    },
    "./node_modules/@testing-library/user-event/dist/type/typeImplementation.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.typeImplementation = async function typeImplementation(
            element,
            text,
            {
              delay,
              skipClick = !1,
              skipAutoClose = !1,
              initialSelectionStart,
              initialSelectionEnd,
            }
          ) {
            if (element.disabled) return;
            skipClick || (0, _click.click)(element);
            const currentElement = () =>
                (0, _utils.getActiveElement)(element.ownerDocument),
              value = (0, _utils.getValue)(currentElement()),
              { selectionStart, selectionEnd } = (0, _utils.getSelectionRange)(
                element
              );
            null == value ||
              (null !== selectionStart && 0 !== selectionStart) ||
              (null !== selectionEnd && 0 !== selectionEnd) ||
              (0, _utils.setSelectionRange)(
                currentElement(),
                null != initialSelectionStart
                  ? initialSelectionStart
                  : value.length,
                null != initialSelectionEnd ? initialSelectionEnd : value.length
              );
            const { promise, releaseAllKeys } = (0,
            _keyboard.keyboardImplementationWrapper)(text, {
              delay,
              document: element.ownerDocument,
            });
            delay > 0 && (await promise);
            skipAutoClose || releaseAllKeys();
            return promise;
          });
        var _utils = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/index.js"
          ),
          _click = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/click.js"
          ),
          _keyboard = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/keyboard/index.js"
          );
      },
    "./node_modules/@testing-library/user-event/dist/upload.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.upload = function upload(
          element,
          fileOrFiles,
          init,
          { applyAccept = !1 } = {}
        ) {
          var _input$files;
          const input = (0, _utils.isElementType)(element, "label")
            ? element.control
            : element;
          if (
            !input ||
            !(0, _utils.isElementType)(input, "input", { type: "file" })
          )
            throw new TypeError(
              `The ${input === element ? "given" : "associated"} ${
                null == input ? void 0 : input.tagName
              } element does not accept file uploads`
            );
          if ((0, _utils.isDisabled)(element)) return;
          (0, _click.click)(element, null == init ? void 0 : init.clickInit);
          const files = (
            Array.isArray(fileOrFiles) ? fileOrFiles : [fileOrFiles]
          )
            .filter(
              (file) =>
                !applyAccept ||
                (function isAcceptableFile(file, accept) {
                  if (!accept) return !0;
                  const wildcards = ["audio/*", "image/*", "video/*"];
                  return accept
                    .split(",")
                    .some((acceptToken) =>
                      acceptToken.startsWith(".")
                        ? file.name.endsWith(acceptToken)
                        : wildcards.includes(acceptToken)
                        ? file.type.startsWith(
                            acceptToken.substr(0, acceptToken.length - 1)
                          )
                        : file.type === acceptToken
                    );
                })(file, input.accept)
            )
            .slice(0, input.multiple ? void 0 : 1);
          if (
            ((0, _blur.blur)(element),
            (0, _focus.focus)(element),
            files.length ===
              (null == (_input$files = input.files)
                ? void 0
                : _input$files.length) &&
              files.every((f, i) => {
                var _input$files2;
                return (
                  f ===
                  (null == (_input$files2 = input.files)
                    ? void 0
                    : _input$files2.item(i))
                );
              }))
          )
            return;
          const inputFiles = {
            ...files,
            length: files.length,
            item: (index) => files[index],
            [Symbol.iterator]() {
              let i = 0;
              return {
                next: () => ({ done: i >= files.length, value: files[i++] }),
              };
            },
          };
          (0, _dom.fireEvent)(
            input,
            (0, _dom.createEvent)("input", input, {
              target: { files: inputFiles },
              bubbles: !0,
              cancelable: !1,
              composed: !0,
            })
          ),
            _dom.fireEvent.change(input, {
              target: { files: inputFiles },
              ...(null == init ? void 0 : init.changeInit),
            });
        });
      var _dom = __webpack_require__(
          "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
        ),
        _click = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/click.js"
        ),
        _blur = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/blur.js"
        ),
        _focus = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/focus.js"
        ),
        _utils = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/index.js"
        );
    },
    "./node_modules/@testing-library/user-event/dist/utils/click/getMouseEventOptions.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        function isMousePressEvent(event) {
          return (
            "mousedown" === event ||
            "mouseup" === event ||
            "click" === event ||
            "dblclick" === event
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.getMouseEventOptions = function getMouseEventOptions(
            event,
            init,
            clickCount = 0
          ) {
            var _init;
            return (
              (init = null != (_init = init) ? _init : {}),
              {
                ...init,
                detail:
                  "mousedown" === event ||
                  "mouseup" === event ||
                  "click" === event
                    ? 1 + clickCount
                    : clickCount,
                buttons: convertMouseButtons(event, init, "buttons"),
                button: convertMouseButtons(event, init, "button"),
              }
            );
          });
        const BUTTONS_NAMES = {
            none: 0,
            primary: 1,
            secondary: 2,
            auxiliary: 4,
          },
          BUTTON_NAMES = { primary: 0, auxiliary: 1, secondary: 2 };
        function translateButtonNumber(value, from) {
          var _Object$entries$find;
          const [mapIn, mapOut] =
              "button" === from
                ? [BUTTON_NAMES, BUTTONS_NAMES]
                : [BUTTONS_NAMES, BUTTON_NAMES],
            name =
              null ==
              (_Object$entries$find = Object.entries(mapIn).find(
                ([, i]) => i === value
              ))
                ? void 0
                : _Object$entries$find[0];
          return name && Object.prototype.hasOwnProperty.call(mapOut, name)
            ? mapOut[name]
            : 0;
        }
        function convertMouseButtons(event, init, property) {
          return isMousePressEvent(event)
            ? "number" == typeof init[property]
              ? init[property]
              : "button" === property && "number" == typeof init.buttons
              ? translateButtonNumber(init.buttons, "buttons")
              : "buttons" === property && "number" == typeof init.button
              ? translateButtonNumber(init.button, "button")
              : "button" != property && isMousePressEvent(event)
              ? 1
              : 0
            : 0;
        }
      },
    "./node_modules/@testing-library/user-event/dist/utils/click/isClickableInput.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isClickableInput = function isClickableInput(element) {
            return (
              (0, _isElementType.isElementType)(element, "button") ||
              ((0, _isElementType.isElementType)(element, "input") &&
                CLICKABLE_INPUT_TYPES.includes(element.type))
            );
          });
        var _isElementType = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/misc/isElementType.js"
        );
        const CLICKABLE_INPUT_TYPES = [
          "button",
          "color",
          "file",
          "image",
          "reset",
          "submit",
          "checkbox",
          "radio",
        ];
      },
    "./node_modules/@testing-library/user-event/dist/utils/edit/buildTimeValue.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        function build(onlyDigitsValue, index) {
          const hours = onlyDigitsValue.slice(0, index),
            validHours = Math.min(parseInt(hours, 10), 23),
            minuteCharacters = onlyDigitsValue.slice(index),
            parsedMinutes = parseInt(minuteCharacters, 10),
            validMinutes = Math.min(parsedMinutes, 59);
          return `${validHours.toString().padStart(2, "0")}:${validMinutes
            .toString()
            .padStart(2, "0")}`;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.buildTimeValue = function buildTimeValue(value) {
            const onlyDigitsValue = value.replace(/\D/g, "");
            if (onlyDigitsValue.length < 2) return value;
            const firstDigit = parseInt(onlyDigitsValue[0], 10),
              secondDigit = parseInt(onlyDigitsValue[1], 10);
            if (firstDigit >= 3 || (2 === firstDigit && secondDigit >= 4)) {
              let index;
              return (
                (index = firstDigit >= 3 ? 1 : 2), build(onlyDigitsValue, index)
              );
            }
            if (2 === value.length) return value;
            return build(onlyDigitsValue, 2);
          });
      },
    "./node_modules/@testing-library/user-event/dist/utils/edit/calculateNewValue.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.calculateNewValue = function calculateNewValue(
            newEntry,
            element,
            value = (() => {
              var _getValue;
              return null != (_getValue = (0, _getValue2.getValue)(element))
                ? _getValue
                : "";
            })(),
            selectionRange = (0, _selectionRange.getSelectionRange)(element),
            deleteContent
          ) {
            const selectionStart =
                null === selectionRange.selectionStart
                  ? value.length
                  : selectionRange.selectionStart,
              selectionEnd =
                null === selectionRange.selectionEnd
                  ? value.length
                  : selectionRange.selectionEnd,
              prologEnd = Math.max(
                0,
                selectionStart === selectionEnd && "backward" === deleteContent
                  ? selectionStart - 1
                  : selectionStart
              ),
              prolog = value.substring(0, prologEnd),
              epilogStart = Math.min(
                value.length,
                selectionStart === selectionEnd && "forward" === deleteContent
                  ? selectionEnd + 1
                  : selectionEnd
              ),
              epilog = value.substring(epilogStart, value.length);
            let newValue = `${prolog}${newEntry}${epilog}`;
            const newSelectionStart = prologEnd + newEntry.length;
            "date" !== element.type ||
              (0, _isValidDateValue.isValidDateValue)(element, newValue) ||
              (newValue = value);
            "time" !== element.type ||
              (0, _isValidInputTimeValue.isValidInputTimeValue)(
                element,
                newValue
              ) ||
              (newValue = (0, _isValidInputTimeValue.isValidInputTimeValue)(
                element,
                newEntry
              )
                ? newEntry
                : value);
            return { newValue, newSelectionStart };
          });
        var _selectionRange = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/edit/selectionRange.js"
          ),
          _getValue2 = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/edit/getValue.js"
          ),
          _isValidDateValue = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/edit/isValidDateValue.js"
          ),
          _isValidInputTimeValue = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/edit/isValidInputTimeValue.js"
          );
      },
    "./node_modules/@testing-library/user-event/dist/utils/edit/cursorPosition.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isCursorAtEnd = function isCursorAtEnd(element) {
            var _getValue;
            const { selectionStart, selectionEnd } = (0,
            _selectionRange.getSelectionRange)(element);
            return (
              selectionStart === selectionEnd &&
              (null != selectionStart ? selectionStart : 0) ===
                (null != (_getValue = (0, _getValue2.getValue)(element))
                  ? _getValue
                  : ""
                ).length
            );
          }),
          (exports.isCursorAtStart = function isCursorAtStart(element) {
            const { selectionStart, selectionEnd } = (0,
            _selectionRange.getSelectionRange)(element);
            return (
              selectionStart === selectionEnd &&
              0 === (null != selectionStart ? selectionStart : 0)
            );
          });
        var _selectionRange = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/edit/selectionRange.js"
          ),
          _getValue2 = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/edit/getValue.js"
          );
      },
    "./node_modules/@testing-library/user-event/dist/utils/edit/getValue.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.getValue = function getValue(element) {
          if (!element) return null;
          if ((0, _isContentEditable.isContentEditable)(element))
            return element.textContent;
          return element.value;
        });
      var _isContentEditable = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/edit/isContentEditable.js"
      );
    },
    "./node_modules/@testing-library/user-event/dist/utils/edit/hasUnreliableEmptyValue.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.hasUnreliableEmptyValue = function hasUnreliableEmptyValue(
            element
          ) {
            return (
              (0, _isElementType.isElementType)(element, "input") &&
              Boolean(unreliableValueInputTypes[element.type])
            );
          });
        var unreliableValueInputTypes,
          _isElementType = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/misc/isElementType.js"
          );
        !(function (unreliableValueInputTypes) {
          unreliableValueInputTypes.number = "number";
        })(unreliableValueInputTypes || (unreliableValueInputTypes = {}));
      },
    "./node_modules/@testing-library/user-event/dist/utils/edit/isContentEditable.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isContentEditable = function isContentEditable(element) {
            return (
              element.hasAttribute("contenteditable") &&
              ("true" == element.getAttribute("contenteditable") ||
                "" == element.getAttribute("contenteditable"))
            );
          });
      },
    "./node_modules/@testing-library/user-event/dist/utils/edit/isEditable.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.editableInputTypes = void 0),
          (exports.isEditable = function isEditable(element) {
            return (
              isEditableInput(element) ||
              (0, _isElementType.isElementType)(element, "textarea", {
                readOnly: !1,
              }) ||
              (0, _isContentEditable.isContentEditable)(element)
            );
          }),
          (exports.isEditableInput = isEditableInput);
        var _isElementType = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/misc/isElementType.js"
          ),
          _isContentEditable = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/edit/isContentEditable.js"
          );
        let editableInputTypes;
        function isEditableInput(element) {
          return (
            (0, _isElementType.isElementType)(element, "input", {
              readOnly: !1,
            }) && Boolean(editableInputTypes[element.type])
          );
        }
        (exports.editableInputTypes = editableInputTypes),
          (function (editableInputTypes) {
            (editableInputTypes.text = "text"),
              (editableInputTypes.date = "date"),
              (editableInputTypes["datetime-local"] = "datetime-local"),
              (editableInputTypes.email = "email"),
              (editableInputTypes.month = "month"),
              (editableInputTypes.number = "number"),
              (editableInputTypes.password = "password"),
              (editableInputTypes.search = "search"),
              (editableInputTypes.tel = "tel"),
              (editableInputTypes.time = "time"),
              (editableInputTypes.url = "url"),
              (editableInputTypes.week = "week");
          })(
            editableInputTypes ||
              (exports.editableInputTypes = editableInputTypes = {})
          );
      },
    "./node_modules/@testing-library/user-event/dist/utils/edit/isValidDateValue.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isValidDateValue = function isValidDateValue(
            element,
            value
          ) {
            const clone = element.cloneNode();
            return (clone.value = value), clone.value === value;
          });
      },
    "./node_modules/@testing-library/user-event/dist/utils/edit/isValidInputTimeValue.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isValidInputTimeValue = function isValidInputTimeValue(
            element,
            timeValue
          ) {
            const clone = element.cloneNode();
            return (clone.value = timeValue), clone.value === timeValue;
          });
      },
    "./node_modules/@testing-library/user-event/dist/utils/edit/maxLength.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.getSpaceUntilMaxLength = function getSpaceUntilMaxLength(
          element
        ) {
          const value = (0, _getValue.getValue)(element);
          if (null === value) return;
          const maxLength = (function getSanitizedMaxLength(element) {
            var _element$getAttribute;
            if (
              !(function supportsMaxLength(element) {
                return (
                  (0, _isElementType.isElementType)(element, "textarea") ||
                  ((0, _isElementType.isElementType)(element, "input") &&
                    Boolean(maxLengthSupportedTypes[element.type]))
                );
              })(element)
            )
              return;
            const attr =
              null !=
              (_element$getAttribute = element.getAttribute("maxlength"))
                ? _element$getAttribute
                : "";
            return /^\d+$/.test(attr) && Number(attr) >= 0
              ? Number(attr)
              : void 0;
          })(element);
          return maxLength ? maxLength - value.length : void 0;
        });
      var maxLengthSupportedTypes,
        _isElementType = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/misc/isElementType.js"
        ),
        _getValue = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/edit/getValue.js"
        );
      !(function (maxLengthSupportedTypes) {
        (maxLengthSupportedTypes.email = "email"),
          (maxLengthSupportedTypes.password = "password"),
          (maxLengthSupportedTypes.search = "search"),
          (maxLengthSupportedTypes.telephone = "telephone"),
          (maxLengthSupportedTypes.text = "text"),
          (maxLengthSupportedTypes.url = "url");
      })(maxLengthSupportedTypes || (maxLengthSupportedTypes = {}));
    },
    "./node_modules/@testing-library/user-event/dist/utils/edit/selectionRange.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.getSelectionRange = getSelectionRange),
          (exports.hasSelectionSupport = hasSelectionSupport),
          (exports.setSelectionRange = function setSelectionRange(
            element,
            newSelectionStart,
            newSelectionEnd
          ) {
            const { selectionStart, selectionEnd } = getSelectionRange(element);
            if (
              selectionStart === newSelectionStart &&
              selectionEnd === newSelectionEnd
            )
              return;
            hasSelectionSupport(element) &&
              element.setSelectionRange(newSelectionStart, newSelectionEnd);
            (0, _isElementType.isElementType)(element, "input") &&
              (element[InputSelection] = {
                selectionStart: newSelectionStart,
                selectionEnd: newSelectionEnd,
              });
            if (
              (0, _isElementType.isElementType)(element, "input") ||
              (0, _isElementType.isElementType)(element, "textarea")
            )
              return;
            const range = element.ownerDocument.createRange();
            range.selectNodeContents(element),
              element.firstChild &&
                (range.setStart(element.firstChild, newSelectionStart),
                range.setEnd(element.firstChild, newSelectionEnd));
            const selection = element.ownerDocument.getSelection();
            selection &&
              (selection.removeAllRanges(), selection.addRange(range));
          });
        var selectionSupportType,
          _isElementType = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/misc/isElementType.js"
          );
        !(function (selectionSupportType) {
          (selectionSupportType.text = "text"),
            (selectionSupportType.search = "search"),
            (selectionSupportType.url = "url"),
            (selectionSupportType.tel = "tel"),
            (selectionSupportType.password = "password");
        })(selectionSupportType || (selectionSupportType = {}));
        const InputSelection = Symbol("inputSelection");
        function hasSelectionSupport(element) {
          return (
            (0, _isElementType.isElementType)(element, "textarea") ||
            ((0, _isElementType.isElementType)(element, "input") &&
              Boolean(selectionSupportType[element.type]))
          );
        }
        function getSelectionRange(element) {
          if (hasSelectionSupport(element))
            return {
              selectionStart: element.selectionStart,
              selectionEnd: element.selectionEnd,
            };
          var _InputSelection;
          if ((0, _isElementType.isElementType)(element, "input"))
            return null != (_InputSelection = element[InputSelection])
              ? _InputSelection
              : { selectionStart: null, selectionEnd: null };
          const selection = element.ownerDocument.getSelection();
          if (
            null != selection &&
            selection.rangeCount &&
            element.contains(selection.focusNode)
          ) {
            const range = selection.getRangeAt(0);
            return {
              selectionStart: range.startOffset,
              selectionEnd: range.endOffset,
            };
          }
          return { selectionStart: null, selectionEnd: null };
        }
      },
    "./node_modules/@testing-library/user-event/dist/utils/focus/getActiveElement.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.getActiveElement = function getActiveElement(document) {
            const activeElement = document.activeElement;
            return null != activeElement && activeElement.shadowRoot
              ? getActiveElement(activeElement.shadowRoot)
              : (0, _isDisabled.isDisabled)(activeElement)
              ? document.ownerDocument
                ? document.ownerDocument.body
                : document.body
              : activeElement;
          });
        var _isDisabled = __webpack_require__(
          "./node_modules/@testing-library/user-event/dist/utils/misc/isDisabled.js"
        );
      },
    "./node_modules/@testing-library/user-event/dist/utils/focus/isFocusable.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isFocusable = function isFocusable(element) {
            return (
              !(0,
              _isLabelWithInternallyDisabledControl.isLabelWithInternallyDisabledControl)(
                element
              ) && element.matches(_selector.FOCUSABLE_SELECTOR)
            );
          });
        var _isLabelWithInternallyDisabledControl = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/misc/isLabelWithInternallyDisabledControl.js"
          ),
          _selector = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/focus/selector.js"
          );
      },
    "./node_modules/@testing-library/user-event/dist/utils/focus/selector.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.FOCUSABLE_SELECTOR = void 0);
      const FOCUSABLE_SELECTOR = [
        "input:not([type=hidden]):not([disabled])",
        "button:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        '[contenteditable=""]',
        '[contenteditable="true"]',
        "a[href]",
        "[tabindex]:not([disabled])",
      ].join(", ");
      exports.FOCUSABLE_SELECTOR = FOCUSABLE_SELECTOR;
    },
    "./node_modules/@testing-library/user-event/dist/utils/index.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 });
      var _getMouseEventOptions = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/click/getMouseEventOptions.js"
      );
      Object.keys(_getMouseEventOptions).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _getMouseEventOptions[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _getMouseEventOptions[key];
              },
            }));
      });
      var _isClickableInput = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/click/isClickableInput.js"
      );
      Object.keys(_isClickableInput).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _isClickableInput[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _isClickableInput[key];
              },
            }));
      });
      var _buildTimeValue = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/edit/buildTimeValue.js"
      );
      Object.keys(_buildTimeValue).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _buildTimeValue[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _buildTimeValue[key];
              },
            }));
      });
      var _calculateNewValue = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/edit/calculateNewValue.js"
      );
      Object.keys(_calculateNewValue).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _calculateNewValue[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _calculateNewValue[key];
              },
            }));
      });
      var _cursorPosition = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/edit/cursorPosition.js"
      );
      Object.keys(_cursorPosition).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _cursorPosition[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _cursorPosition[key];
              },
            }));
      });
      var _getValue = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/edit/getValue.js"
      );
      Object.keys(_getValue).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _getValue[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _getValue[key];
              },
            }));
      });
      var _hasUnreliableEmptyValue = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/edit/hasUnreliableEmptyValue.js"
      );
      Object.keys(_hasUnreliableEmptyValue).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _hasUnreliableEmptyValue[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _hasUnreliableEmptyValue[key];
              },
            }));
      });
      var _isContentEditable = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/edit/isContentEditable.js"
      );
      Object.keys(_isContentEditable).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _isContentEditable[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _isContentEditable[key];
              },
            }));
      });
      var _isEditable = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/edit/isEditable.js"
      );
      Object.keys(_isEditable).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _isEditable[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _isEditable[key];
              },
            }));
      });
      var _isValidDateValue = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/edit/isValidDateValue.js"
      );
      Object.keys(_isValidDateValue).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _isValidDateValue[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _isValidDateValue[key];
              },
            }));
      });
      var _isValidInputTimeValue = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/edit/isValidInputTimeValue.js"
      );
      Object.keys(_isValidInputTimeValue).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _isValidInputTimeValue[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _isValidInputTimeValue[key];
              },
            }));
      });
      var _maxLength = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/edit/maxLength.js"
      );
      Object.keys(_maxLength).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _maxLength[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _maxLength[key];
              },
            }));
      });
      var _selectionRange = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/edit/selectionRange.js"
      );
      Object.keys(_selectionRange).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _selectionRange[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _selectionRange[key];
              },
            }));
      });
      var _getActiveElement = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/focus/getActiveElement.js"
      );
      Object.keys(_getActiveElement).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _getActiveElement[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _getActiveElement[key];
              },
            }));
      });
      var _isFocusable = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/focus/isFocusable.js"
      );
      Object.keys(_isFocusable).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _isFocusable[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _isFocusable[key];
              },
            }));
      });
      var _selector = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/focus/selector.js"
      );
      Object.keys(_selector).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _selector[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _selector[key];
              },
            }));
      });
      var _eventWrapper = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/misc/eventWrapper.js"
      );
      Object.keys(_eventWrapper).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _eventWrapper[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _eventWrapper[key];
              },
            }));
      });
      var _isElementType = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/misc/isElementType.js"
      );
      Object.keys(_isElementType).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _isElementType[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _isElementType[key];
              },
            }));
      });
      var _isLabelWithInternallyDisabledControl = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/misc/isLabelWithInternallyDisabledControl.js"
      );
      Object.keys(_isLabelWithInternallyDisabledControl).forEach(function (
        key
      ) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports &&
            exports[key] === _isLabelWithInternallyDisabledControl[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _isLabelWithInternallyDisabledControl[key];
              },
            }));
      });
      var _isVisible = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/misc/isVisible.js"
      );
      Object.keys(_isVisible).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _isVisible[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _isVisible[key];
              },
            }));
      });
      var _isDisabled = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/misc/isDisabled.js"
      );
      Object.keys(_isDisabled).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _isDisabled[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _isDisabled[key];
              },
            }));
      });
      var _isDocument = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/misc/isDocument.js"
      );
      Object.keys(_isDocument).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _isDocument[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _isDocument[key];
              },
            }));
      });
      var _wait = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/misc/wait.js"
      );
      Object.keys(_wait).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _wait[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _wait[key];
              },
            }));
      });
      var _hasPointerEvents = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/misc/hasPointerEvents.js"
      );
      Object.keys(_hasPointerEvents).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _hasPointerEvents[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _hasPointerEvents[key];
              },
            }));
      });
      var _hasFormSubmit = __webpack_require__(
        "./node_modules/@testing-library/user-event/dist/utils/misc/hasFormSubmit.js"
      );
      Object.keys(_hasFormSubmit).forEach(function (key) {
        "default" !== key &&
          "__esModule" !== key &&
          ((key in exports && exports[key] === _hasFormSubmit[key]) ||
            Object.defineProperty(exports, key, {
              enumerable: !0,
              get: function () {
                return _hasFormSubmit[key];
              },
            }));
      });
    },
    "./node_modules/@testing-library/user-event/dist/utils/misc/eventWrapper.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.eventWrapper = function eventWrapper(cb) {
            let result;
            return (
              (0, _dom.getConfig)().eventWrapper(() => {
                result = cb();
              }),
              result
            );
          });
        var _dom = __webpack_require__(
          "./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js"
        );
      },
    "./node_modules/@testing-library/user-event/dist/utils/misc/hasFormSubmit.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.hasFormSubmit = void 0);
        exports.hasFormSubmit = (form) =>
          !(
            !form ||
            (!form.querySelector('input[type="submit"]') &&
              !form.querySelector('button[type="submit"]'))
          );
      },
    "./node_modules/@testing-library/user-event/dist/utils/misc/hasPointerEvents.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.hasPointerEvents = function hasPointerEvents(element) {
            const window = (0, _helpers.getWindowFromNode)(element);
            for (
              let el = element;
              null != (_el = el) && _el.ownerDocument;
              el = el.parentElement
            ) {
              var _el;
              const pointerEvents = window.getComputedStyle(el).pointerEvents;
              if (
                pointerEvents &&
                !["inherit", "unset"].includes(pointerEvents)
              )
                return "none" !== pointerEvents;
            }
            return !0;
          });
        var _helpers = __webpack_require__(
          "./node_modules/@testing-library/dom/dist/helpers.js"
        );
      },
    "./node_modules/@testing-library/user-event/dist/utils/misc/isDisabled.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isDisabled = function isDisabled(element) {
            return Boolean(element && element.disabled);
          });
      },
    "./node_modules/@testing-library/user-event/dist/utils/misc/isDocument.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isDocument = function isDocument(el) {
            return el.nodeType === el.DOCUMENT_NODE;
          });
      },
    "./node_modules/@testing-library/user-event/dist/utils/misc/isElementType.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isElementType = function isElementType(element, tag, props) {
            if (
              element.namespaceURI &&
              "http://www.w3.org/1999/xhtml" !== element.namespaceURI
            )
              return !1;
            if (
              !(tag = Array.isArray(tag) ? tag : [tag]).includes(
                element.tagName.toLowerCase()
              )
            )
              return !1;
            if (props)
              return Object.entries(props).every(([k, v]) => element[k] === v);
            return !0;
          });
      },
    "./node_modules/@testing-library/user-event/dist/utils/misc/isLabelWithInternallyDisabledControl.js":
      (__unused_webpack_module, exports, __webpack_require__) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isLabelWithInternallyDisabledControl =
            function isLabelWithInternallyDisabledControl(element) {
              if (!(0, _isElementType.isElementType)(element, "label"))
                return !1;
              const control = element.control;
              return Boolean(
                control &&
                  element.contains(control) &&
                  (0, _isDisabled.isDisabled)(control)
              );
            });
        var _isDisabled = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/misc/isDisabled.js"
          ),
          _isElementType = __webpack_require__(
            "./node_modules/@testing-library/user-event/dist/utils/misc/isElementType.js"
          );
      },
    "./node_modules/@testing-library/user-event/dist/utils/misc/isVisible.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.isVisible = function isVisible(element) {
          const window = (0, _helpers.getWindowFromNode)(element);
          for (
            let el = element;
            null != (_el = el) && _el.ownerDocument;
            el = el.parentElement
          ) {
            var _el;
            if ("none" === window.getComputedStyle(el).display) return !1;
          }
          return !0;
        });
      var _helpers = __webpack_require__(
        "./node_modules/@testing-library/dom/dist/helpers.js"
      );
    },
    "./node_modules/@testing-library/user-event/dist/utils/misc/wait.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.wait = function wait(time) {
          return new Promise((resolve) => setTimeout(() => resolve(), time));
        });
    },
    "./node_modules/ansi-regex/index.js": (module) => {
      "use strict";
      module.exports = ({ onlyFirst = !1 } = {}) => {
        const pattern = [
          "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
          "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
        ].join("|");
        return new RegExp(pattern, onlyFirst ? void 0 : "g");
      };
    },
    "./node_modules/aria-query/lib/ariaPropsMap.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _iterationDecorator = (function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      })(
        __webpack_require__(
          "./node_modules/aria-query/lib/util/iterationDecorator.js"
        )
      );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            "Object" === n && o.constructor && (n = o.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(o)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var properties = [
          ["aria-activedescendant", { type: "id" }],
          ["aria-atomic", { type: "boolean" }],
          [
            "aria-autocomplete",
            { type: "token", values: ["inline", "list", "both", "none"] },
          ],
          ["aria-busy", { type: "boolean" }],
          ["aria-checked", { type: "tristate" }],
          ["aria-colcount", { type: "integer" }],
          ["aria-colindex", { type: "integer" }],
          ["aria-colspan", { type: "integer" }],
          ["aria-controls", { type: "idlist" }],
          [
            "aria-current",
            {
              type: "token",
              values: ["page", "step", "location", "date", "time", !0, !1],
            },
          ],
          ["aria-describedby", { type: "idlist" }],
          ["aria-details", { type: "id" }],
          ["aria-disabled", { type: "boolean" }],
          [
            "aria-dropeffect",
            {
              type: "tokenlist",
              values: ["copy", "execute", "link", "move", "none", "popup"],
            },
          ],
          ["aria-errormessage", { type: "id" }],
          ["aria-expanded", { type: "boolean", allowundefined: !0 }],
          ["aria-flowto", { type: "idlist" }],
          ["aria-grabbed", { type: "boolean", allowundefined: !0 }],
          [
            "aria-haspopup",
            {
              type: "token",
              values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"],
            },
          ],
          ["aria-hidden", { type: "boolean", allowundefined: !0 }],
          [
            "aria-invalid",
            { type: "token", values: ["grammar", !1, "spelling", !0] },
          ],
          ["aria-keyshortcuts", { type: "string" }],
          ["aria-label", { type: "string" }],
          ["aria-labelledby", { type: "idlist" }],
          ["aria-level", { type: "integer" }],
          [
            "aria-live",
            { type: "token", values: ["assertive", "off", "polite"] },
          ],
          ["aria-modal", { type: "boolean" }],
          ["aria-multiline", { type: "boolean" }],
          ["aria-multiselectable", { type: "boolean" }],
          [
            "aria-orientation",
            { type: "token", values: ["vertical", "undefined", "horizontal"] },
          ],
          ["aria-owns", { type: "idlist" }],
          ["aria-placeholder", { type: "string" }],
          ["aria-posinset", { type: "integer" }],
          ["aria-pressed", { type: "tristate" }],
          ["aria-readonly", { type: "boolean" }],
          [
            "aria-relevant",
            {
              type: "tokenlist",
              values: ["additions", "all", "removals", "text"],
            },
          ],
          ["aria-required", { type: "boolean" }],
          ["aria-roledescription", { type: "string" }],
          ["aria-rowcount", { type: "integer" }],
          ["aria-rowindex", { type: "integer" }],
          ["aria-rowspan", { type: "integer" }],
          ["aria-selected", { type: "boolean", allowundefined: !0 }],
          ["aria-setsize", { type: "integer" }],
          [
            "aria-sort",
            {
              type: "token",
              values: ["ascending", "descending", "none", "other"],
            },
          ],
          ["aria-valuemax", { type: "number" }],
          ["aria-valuemin", { type: "number" }],
          ["aria-valuenow", { type: "number" }],
          ["aria-valuetext", { type: "string" }],
        ],
        ariaPropsMap = {
          entries: function entries() {
            return properties;
          },
          forEach: function forEach(fn) {
            var _step,
              thisArg =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              _iterator = (function _createForOfIteratorHelper(
                o,
                allowArrayLike
              ) {
                var it =
                  ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
                  o["@@iterator"];
                if (!it) {
                  if (
                    Array.isArray(o) ||
                    (it = _unsupportedIterableToArray(o)) ||
                    (allowArrayLike && o && "number" == typeof o.length)
                  ) {
                    it && (o = it);
                    var i = 0,
                      F = function F() {};
                    return {
                      s: F,
                      n: function n() {
                        return i >= o.length
                          ? { done: !0 }
                          : { done: !1, value: o[i++] };
                      },
                      e: function e(_e2) {
                        throw _e2;
                      },
                      f: F,
                    };
                  }
                  throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                }
                var err,
                  normalCompletion = !0,
                  didErr = !1;
                return {
                  s: function s() {
                    it = it.call(o);
                  },
                  n: function n() {
                    var step = it.next();
                    return (normalCompletion = step.done), step;
                  },
                  e: function e(_e3) {
                    (didErr = !0), (err = _e3);
                  },
                  f: function f() {
                    try {
                      normalCompletion || null == it.return || it.return();
                    } finally {
                      if (didErr) throw err;
                    }
                  },
                };
              })(properties);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var _step$value = _slicedToArray(_step.value, 2),
                  key = _step$value[0],
                  values = _step$value[1];
                fn.call(thisArg, values, key, properties);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          },
          get: function get(key) {
            var item = properties.find(function (tuple) {
              return tuple[0] === key;
            });
            return item && item[1];
          },
          has: function has(key) {
            return !!ariaPropsMap.get(key);
          },
          keys: function keys() {
            return properties.map(function (_ref) {
              return _slicedToArray(_ref, 1)[0];
            });
          },
          values: function values() {
            return properties.map(function (_ref3) {
              return _slicedToArray(_ref3, 2)[1];
            });
          },
        },
        _default = (0, _iterationDecorator.default)(
          ariaPropsMap,
          ariaPropsMap.entries()
        );
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/domMap.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _iterationDecorator = (function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      })(
        __webpack_require__(
          "./node_modules/aria-query/lib/util/iterationDecorator.js"
        )
      );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            "Object" === n && o.constructor && (n = o.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(o)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var dom = [
          ["a", { reserved: !1 }],
          ["abbr", { reserved: !1 }],
          ["acronym", { reserved: !1 }],
          ["address", { reserved: !1 }],
          ["applet", { reserved: !1 }],
          ["area", { reserved: !1 }],
          ["article", { reserved: !1 }],
          ["aside", { reserved: !1 }],
          ["audio", { reserved: !1 }],
          ["b", { reserved: !1 }],
          ["base", { reserved: !0 }],
          ["bdi", { reserved: !1 }],
          ["bdo", { reserved: !1 }],
          ["big", { reserved: !1 }],
          ["blink", { reserved: !1 }],
          ["blockquote", { reserved: !1 }],
          ["body", { reserved: !1 }],
          ["br", { reserved: !1 }],
          ["button", { reserved: !1 }],
          ["canvas", { reserved: !1 }],
          ["caption", { reserved: !1 }],
          ["center", { reserved: !1 }],
          ["cite", { reserved: !1 }],
          ["code", { reserved: !1 }],
          ["col", { reserved: !0 }],
          ["colgroup", { reserved: !0 }],
          ["content", { reserved: !1 }],
          ["data", { reserved: !1 }],
          ["datalist", { reserved: !1 }],
          ["dd", { reserved: !1 }],
          ["del", { reserved: !1 }],
          ["details", { reserved: !1 }],
          ["dfn", { reserved: !1 }],
          ["dialog", { reserved: !1 }],
          ["dir", { reserved: !1 }],
          ["div", { reserved: !1 }],
          ["dl", { reserved: !1 }],
          ["dt", { reserved: !1 }],
          ["em", { reserved: !1 }],
          ["embed", { reserved: !1 }],
          ["fieldset", { reserved: !1 }],
          ["figcaption", { reserved: !1 }],
          ["figure", { reserved: !1 }],
          ["font", { reserved: !1 }],
          ["footer", { reserved: !1 }],
          ["form", { reserved: !1 }],
          ["frame", { reserved: !1 }],
          ["frameset", { reserved: !1 }],
          ["h1", { reserved: !1 }],
          ["h2", { reserved: !1 }],
          ["h3", { reserved: !1 }],
          ["h4", { reserved: !1 }],
          ["h5", { reserved: !1 }],
          ["h6", { reserved: !1 }],
          ["head", { reserved: !0 }],
          ["header", { reserved: !1 }],
          ["hgroup", { reserved: !1 }],
          ["hr", { reserved: !1 }],
          ["html", { reserved: !0 }],
          ["i", { reserved: !1 }],
          ["iframe", { reserved: !1 }],
          ["img", { reserved: !1 }],
          ["input", { reserved: !1 }],
          ["ins", { reserved: !1 }],
          ["kbd", { reserved: !1 }],
          ["keygen", { reserved: !1 }],
          ["label", { reserved: !1 }],
          ["legend", { reserved: !1 }],
          ["li", { reserved: !1 }],
          ["link", { reserved: !0 }],
          ["main", { reserved: !1 }],
          ["map", { reserved: !1 }],
          ["mark", { reserved: !1 }],
          ["marquee", { reserved: !1 }],
          ["menu", { reserved: !1 }],
          ["menuitem", { reserved: !1 }],
          ["meta", { reserved: !0 }],
          ["meter", { reserved: !1 }],
          ["nav", { reserved: !1 }],
          ["noembed", { reserved: !0 }],
          ["noscript", { reserved: !0 }],
          ["object", { reserved: !1 }],
          ["ol", { reserved: !1 }],
          ["optgroup", { reserved: !1 }],
          ["option", { reserved: !1 }],
          ["output", { reserved: !1 }],
          ["p", { reserved: !1 }],
          ["param", { reserved: !0 }],
          ["picture", { reserved: !0 }],
          ["pre", { reserved: !1 }],
          ["progress", { reserved: !1 }],
          ["q", { reserved: !1 }],
          ["rp", { reserved: !1 }],
          ["rt", { reserved: !1 }],
          ["rtc", { reserved: !1 }],
          ["ruby", { reserved: !1 }],
          ["s", { reserved: !1 }],
          ["samp", { reserved: !1 }],
          ["script", { reserved: !0 }],
          ["section", { reserved: !1 }],
          ["select", { reserved: !1 }],
          ["small", { reserved: !1 }],
          ["source", { reserved: !0 }],
          ["spacer", { reserved: !1 }],
          ["span", { reserved: !1 }],
          ["strike", { reserved: !1 }],
          ["strong", { reserved: !1 }],
          ["style", { reserved: !0 }],
          ["sub", { reserved: !1 }],
          ["summary", { reserved: !1 }],
          ["sup", { reserved: !1 }],
          ["table", { reserved: !1 }],
          ["tbody", { reserved: !1 }],
          ["td", { reserved: !1 }],
          ["textarea", { reserved: !1 }],
          ["tfoot", { reserved: !1 }],
          ["th", { reserved: !1 }],
          ["thead", { reserved: !1 }],
          ["time", { reserved: !1 }],
          ["title", { reserved: !0 }],
          ["tr", { reserved: !1 }],
          ["track", { reserved: !0 }],
          ["tt", { reserved: !1 }],
          ["u", { reserved: !1 }],
          ["ul", { reserved: !1 }],
          ["var", { reserved: !1 }],
          ["video", { reserved: !1 }],
          ["wbr", { reserved: !1 }],
          ["xmp", { reserved: !1 }],
        ],
        domMap = {
          entries: function entries() {
            return dom;
          },
          forEach: function forEach(fn) {
            var _step,
              thisArg =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              _iterator = (function _createForOfIteratorHelper(
                o,
                allowArrayLike
              ) {
                var it =
                  ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
                  o["@@iterator"];
                if (!it) {
                  if (
                    Array.isArray(o) ||
                    (it = _unsupportedIterableToArray(o)) ||
                    (allowArrayLike && o && "number" == typeof o.length)
                  ) {
                    it && (o = it);
                    var i = 0,
                      F = function F() {};
                    return {
                      s: F,
                      n: function n() {
                        return i >= o.length
                          ? { done: !0 }
                          : { done: !1, value: o[i++] };
                      },
                      e: function e(_e2) {
                        throw _e2;
                      },
                      f: F,
                    };
                  }
                  throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                }
                var err,
                  normalCompletion = !0,
                  didErr = !1;
                return {
                  s: function s() {
                    it = it.call(o);
                  },
                  n: function n() {
                    var step = it.next();
                    return (normalCompletion = step.done), step;
                  },
                  e: function e(_e3) {
                    (didErr = !0), (err = _e3);
                  },
                  f: function f() {
                    try {
                      normalCompletion || null == it.return || it.return();
                    } finally {
                      if (didErr) throw err;
                    }
                  },
                };
              })(dom);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var _step$value = _slicedToArray(_step.value, 2),
                  key = _step$value[0],
                  values = _step$value[1];
                fn.call(thisArg, values, key, dom);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          },
          get: function get(key) {
            var item = dom.find(function (tuple) {
              return tuple[0] === key;
            });
            return item && item[1];
          },
          has: function has(key) {
            return !!domMap.get(key);
          },
          keys: function keys() {
            return dom.map(function (_ref) {
              return _slicedToArray(_ref, 1)[0];
            });
          },
          values: function values() {
            return dom.map(function (_ref3) {
              return _slicedToArray(_ref3, 2)[1];
            });
          },
        },
        _default = (0, _iterationDecorator.default)(domMap, domMap.entries());
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/elementRoleMap.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _deepEqual = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/node_modules/deep-equal/index.js"
          )
        ),
        _iterationDecorator = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/util/iterationDecorator.js"
          )
        ),
        _rolesMap = _interopRequireDefault(
          __webpack_require__("./node_modules/aria-query/lib/rolesMap.js")
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            "Object" === n && o.constructor && (n = o.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(o)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      for (
        var elementRoles = [], keys = _rolesMap.default.keys(), i = 0;
        i < keys.length;
        i++
      ) {
        var key = keys[i],
          role = _rolesMap.default.get(key);
        if (role)
          for (
            var concepts = [].concat(role.baseConcepts, role.relatedConcepts),
              k = 0;
            k < concepts.length;
            k++
          ) {
            var relation = concepts[k];
            if ("HTML" === relation.module) {
              var concept = relation.concept;
              concept &&
                (function () {
                  var conceptStr = JSON.stringify(concept),
                    elementRoleRelation = elementRoles.find(function (
                      relation
                    ) {
                      return JSON.stringify(relation[0]) === conceptStr;
                    }),
                    roles = void 0;
                  roles = elementRoleRelation ? elementRoleRelation[1] : [];
                  for (var isUnique = !0, _i = 0; _i < roles.length; _i++)
                    if (roles[_i] === key) {
                      isUnique = !1;
                      break;
                    }
                  isUnique && roles.push(key),
                    elementRoles.push([concept, roles]);
                })();
            }
          }
      }
      var elementRoleMap = {
          entries: function entries() {
            return elementRoles;
          },
          forEach: function forEach(fn) {
            var _step,
              thisArg =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              _iterator = (function _createForOfIteratorHelper(
                o,
                allowArrayLike
              ) {
                var it =
                  ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
                  o["@@iterator"];
                if (!it) {
                  if (
                    Array.isArray(o) ||
                    (it = _unsupportedIterableToArray(o)) ||
                    (allowArrayLike && o && "number" == typeof o.length)
                  ) {
                    it && (o = it);
                    var i = 0,
                      F = function F() {};
                    return {
                      s: F,
                      n: function n() {
                        return i >= o.length
                          ? { done: !0 }
                          : { done: !1, value: o[i++] };
                      },
                      e: function e(_e2) {
                        throw _e2;
                      },
                      f: F,
                    };
                  }
                  throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                }
                var err,
                  normalCompletion = !0,
                  didErr = !1;
                return {
                  s: function s() {
                    it = it.call(o);
                  },
                  n: function n() {
                    var step = it.next();
                    return (normalCompletion = step.done), step;
                  },
                  e: function e(_e3) {
                    (didErr = !0), (err = _e3);
                  },
                  f: function f() {
                    try {
                      normalCompletion || null == it.return || it.return();
                    } finally {
                      if (didErr) throw err;
                    }
                  },
                };
              })(elementRoles);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var _step$value = _slicedToArray(_step.value, 2),
                  _key = _step$value[0],
                  values = _step$value[1];
                fn.call(thisArg, values, _key, elementRoles);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          },
          get: function get(key) {
            var item = elementRoles.find(function (tuple) {
              return (0, _deepEqual.default)(key, tuple[0]);
            });
            return item && item[1];
          },
          has: function has(key) {
            return !!elementRoleMap.get(key);
          },
          keys: function keys() {
            return elementRoles.map(function (_ref) {
              return _slicedToArray(_ref, 1)[0];
            });
          },
          values: function values() {
            return elementRoles.map(function (_ref3) {
              return _slicedToArray(_ref3, 2)[1];
            });
          },
        },
        _default = (0, _iterationDecorator.default)(
          elementRoleMap,
          elementRoleMap.entries()
        );
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/abstract/commandRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "menuitem" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-activedescendant": null, "aria-disabled": null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/abstract/inputRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-disabled": null },
        relatedConcepts: [{ concept: { name: "input" }, module: "XForms" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-valuemax": null,
          "aria-valuemin": null,
          "aria-valuenow": null,
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {
          "aria-atomic": null,
          "aria-busy": null,
          "aria-controls": null,
          "aria-current": null,
          "aria-describedby": null,
          "aria-details": null,
          "aria-dropeffect": null,
          "aria-flowto": null,
          "aria-grabbed": null,
          "aria-hidden": null,
          "aria-keyshortcuts": null,
          "aria-label": null,
          "aria-labelledby": null,
          "aria-live": null,
          "aria-owns": null,
          "aria-relevant": null,
          "aria-roledescription": null,
        },
        relatedConcepts: [
          { concept: { name: "rel" }, module: "HTML" },
          { concept: { name: "role" }, module: "XHTML" },
          { concept: { name: "type" }, module: "Dublin Core" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: "frontmatter" }, module: "DTB" },
          { concept: { name: "level" }, module: "DTB" },
          { concept: { name: "level" }, module: "SMIL" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/abstract/selectRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-orientation": null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"],
          ["roletype", "structure", "section", "group"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/abstract/structureRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/abstract/windowRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !0,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-modal": null },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _commandRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/abstract/commandRole.js"
          )
        ),
        _compositeRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js"
          )
        ),
        _inputRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/abstract/inputRole.js"
          )
        ),
        _landmarkRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js"
          )
        ),
        _rangeRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js"
          )
        ),
        _roletypeRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js"
          )
        ),
        _sectionRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js"
          )
        ),
        _sectionheadRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js"
          )
        ),
        _selectRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/abstract/selectRole.js"
          )
        ),
        _structureRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/abstract/structureRole.js"
          )
        ),
        _widgetRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js"
          )
        ),
        _windowRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/abstract/windowRole.js"
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = [
        ["command", _commandRole.default],
        ["composite", _compositeRole.default],
        ["input", _inputRole.default],
        ["landmark", _landmarkRole.default],
        ["range", _rangeRole.default],
        ["roletype", _roletypeRole.default],
        ["section", _sectionRole.default],
        ["sectionhead", _sectionheadRole.default],
        ["select", _selectRole.default],
        ["structure", _structureRole.default],
        ["widget", _widgetRole.default],
        ["window", _windowRole.default],
      ];
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _docAbstractRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js"
          )
        ),
        _docAcknowledgmentsRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js"
          )
        ),
        _docAfterwordRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js"
          )
        ),
        _docAppendixRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js"
          )
        ),
        _docBacklinkRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js"
          )
        ),
        _docBiblioentryRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js"
          )
        ),
        _docBibliographyRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js"
          )
        ),
        _docBibliorefRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js"
          )
        ),
        _docChapterRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js"
          )
        ),
        _docColophonRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js"
          )
        ),
        _docConclusionRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js"
          )
        ),
        _docCoverRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js"
          )
        ),
        _docCreditRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js"
          )
        ),
        _docCreditsRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js"
          )
        ),
        _docDedicationRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js"
          )
        ),
        _docEndnoteRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js"
          )
        ),
        _docEndnotesRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js"
          )
        ),
        _docEpigraphRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js"
          )
        ),
        _docEpilogueRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js"
          )
        ),
        _docErrataRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js"
          )
        ),
        _docExampleRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js"
          )
        ),
        _docFootnoteRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js"
          )
        ),
        _docForewordRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js"
          )
        ),
        _docGlossaryRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js"
          )
        ),
        _docGlossrefRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js"
          )
        ),
        _docIndexRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js"
          )
        ),
        _docIntroductionRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js"
          )
        ),
        _docNoterefRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js"
          )
        ),
        _docNoticeRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js"
          )
        ),
        _docPagebreakRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js"
          )
        ),
        _docPagelistRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js"
          )
        ),
        _docPartRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js"
          )
        ),
        _docPrefaceRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js"
          )
        ),
        _docPrologueRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js"
          )
        ),
        _docPullquoteRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js"
          )
        ),
        _docQnaRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js"
          )
        ),
        _docSubtitleRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js"
          )
        ),
        _docTipRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js"
          )
        ),
        _docTocRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js"
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = [
        ["doc-abstract", _docAbstractRole.default],
        ["doc-acknowledgments", _docAcknowledgmentsRole.default],
        ["doc-afterword", _docAfterwordRole.default],
        ["doc-appendix", _docAppendixRole.default],
        ["doc-backlink", _docBacklinkRole.default],
        ["doc-biblioentry", _docBiblioentryRole.default],
        ["doc-bibliography", _docBibliographyRole.default],
        ["doc-biblioref", _docBibliorefRole.default],
        ["doc-chapter", _docChapterRole.default],
        ["doc-colophon", _docColophonRole.default],
        ["doc-conclusion", _docConclusionRole.default],
        ["doc-cover", _docCoverRole.default],
        ["doc-credit", _docCreditRole.default],
        ["doc-credits", _docCreditsRole.default],
        ["doc-dedication", _docDedicationRole.default],
        ["doc-endnote", _docEndnoteRole.default],
        ["doc-endnotes", _docEndnotesRole.default],
        ["doc-epigraph", _docEpigraphRole.default],
        ["doc-epilogue", _docEpilogueRole.default],
        ["doc-errata", _docErrataRole.default],
        ["doc-example", _docExampleRole.default],
        ["doc-footnote", _docFootnoteRole.default],
        ["doc-foreword", _docForewordRole.default],
        ["doc-glossary", _docGlossaryRole.default],
        ["doc-glossref", _docGlossrefRole.default],
        ["doc-index", _docIndexRole.default],
        ["doc-introduction", _docIntroductionRole.default],
        ["doc-noteref", _docNoterefRole.default],
        ["doc-notice", _docNoticeRole.default],
        ["doc-pagebreak", _docPagebreakRole.default],
        ["doc-pagelist", _docPagelistRole.default],
        ["doc-part", _docPartRole.default],
        ["doc-preface", _docPrefaceRole.default],
        ["doc-prologue", _docPrologueRole.default],
        ["doc-pullquote", _docPullquoteRole.default],
        ["doc-qna", _docQnaRole.default],
        ["doc-subtitle", _docSubtitleRole.default],
        ["doc-tip", _docTipRole.default],
        ["doc-toc", _docTocRole.default],
      ];
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _graphicsDocumentRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js"
          )
        ),
        _graphicsObjectRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js"
          )
        ),
        _graphicsSymbolRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js"
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = [
        ["graphics-document", _graphicsDocumentRole.default],
        ["graphics-object", _graphicsObjectRole.default],
        ["graphics-symbol", _graphicsSymbolRole.default],
      ];
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _alertRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/alertRole.js"
          )
        ),
        _alertdialogRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js"
          )
        ),
        _applicationRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/applicationRole.js"
          )
        ),
        _articleRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/articleRole.js"
          )
        ),
        _bannerRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/bannerRole.js"
          )
        ),
        _blockquoteRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js"
          )
        ),
        _buttonRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/buttonRole.js"
          )
        ),
        _captionRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/captionRole.js"
          )
        ),
        _cellRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/cellRole.js"
          )
        ),
        _checkboxRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js"
          )
        ),
        _codeRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/codeRole.js"
          )
        ),
        _columnheaderRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js"
          )
        ),
        _comboboxRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js"
          )
        ),
        _complementaryRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js"
          )
        ),
        _contentinfoRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js"
          )
        ),
        _definitionRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/definitionRole.js"
          )
        ),
        _deletionRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/deletionRole.js"
          )
        ),
        _dialogRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/dialogRole.js"
          )
        ),
        _directoryRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/directoryRole.js"
          )
        ),
        _documentRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/documentRole.js"
          )
        ),
        _emphasisRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js"
          )
        ),
        _feedRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/feedRole.js"
          )
        ),
        _figureRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/figureRole.js"
          )
        ),
        _formRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/formRole.js"
          )
        ),
        _genericRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/genericRole.js"
          )
        ),
        _gridRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/gridRole.js"
          )
        ),
        _gridcellRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js"
          )
        ),
        _groupRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/groupRole.js"
          )
        ),
        _headingRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/headingRole.js"
          )
        ),
        _imgRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/imgRole.js"
          )
        ),
        _insertionRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/insertionRole.js"
          )
        ),
        _linkRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/linkRole.js"
          )
        ),
        _listRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/listRole.js"
          )
        ),
        _listboxRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/listboxRole.js"
          )
        ),
        _listitemRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/listitemRole.js"
          )
        ),
        _logRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/logRole.js"
          )
        ),
        _mainRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/mainRole.js"
          )
        ),
        _marqueeRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js"
          )
        ),
        _mathRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/mathRole.js"
          )
        ),
        _menuRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/menuRole.js"
          )
        ),
        _menubarRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/menubarRole.js"
          )
        ),
        _menuitemRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js"
          )
        ),
        _menuitemcheckboxRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js"
          )
        ),
        _menuitemradioRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js"
          )
        ),
        _meterRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/meterRole.js"
          )
        ),
        _navigationRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/navigationRole.js"
          )
        ),
        _noneRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/noneRole.js"
          )
        ),
        _noteRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/noteRole.js"
          )
        ),
        _optionRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/optionRole.js"
          )
        ),
        _paragraphRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js"
          )
        ),
        _presentationRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/presentationRole.js"
          )
        ),
        _progressbarRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js"
          )
        ),
        _radioRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/radioRole.js"
          )
        ),
        _radiogroupRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js"
          )
        ),
        _regionRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/regionRole.js"
          )
        ),
        _rowRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/rowRole.js"
          )
        ),
        _rowgroupRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js"
          )
        ),
        _rowheaderRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js"
          )
        ),
        _scrollbarRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js"
          )
        ),
        _searchRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/searchRole.js"
          )
        ),
        _searchboxRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js"
          )
        ),
        _separatorRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/separatorRole.js"
          )
        ),
        _sliderRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/sliderRole.js"
          )
        ),
        _spinbuttonRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js"
          )
        ),
        _statusRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/statusRole.js"
          )
        ),
        _strongRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/strongRole.js"
          )
        ),
        _subscriptRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js"
          )
        ),
        _superscriptRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js"
          )
        ),
        _switchRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/switchRole.js"
          )
        ),
        _tabRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/tabRole.js"
          )
        ),
        _tableRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/tableRole.js"
          )
        ),
        _tablistRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/tablistRole.js"
          )
        ),
        _tabpanelRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js"
          )
        ),
        _termRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/termRole.js"
          )
        ),
        _textboxRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/textboxRole.js"
          )
        ),
        _timeRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/timeRole.js"
          )
        ),
        _timerRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/timerRole.js"
          )
        ),
        _toolbarRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js"
          )
        ),
        _tooltipRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js"
          )
        ),
        _treeRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/treeRole.js"
          )
        ),
        _treegridRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/treegridRole.js"
          )
        ),
        _treeitemRole = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js"
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var _default = [
        ["alert", _alertRole.default],
        ["alertdialog", _alertdialogRole.default],
        ["application", _applicationRole.default],
        ["article", _articleRole.default],
        ["banner", _bannerRole.default],
        ["blockquote", _blockquoteRole.default],
        ["button", _buttonRole.default],
        ["caption", _captionRole.default],
        ["cell", _cellRole.default],
        ["checkbox", _checkboxRole.default],
        ["code", _codeRole.default],
        ["columnheader", _columnheaderRole.default],
        ["combobox", _comboboxRole.default],
        ["complementary", _complementaryRole.default],
        ["contentinfo", _contentinfoRole.default],
        ["definition", _definitionRole.default],
        ["deletion", _deletionRole.default],
        ["dialog", _dialogRole.default],
        ["directory", _directoryRole.default],
        ["document", _documentRole.default],
        ["emphasis", _emphasisRole.default],
        ["feed", _feedRole.default],
        ["figure", _figureRole.default],
        ["form", _formRole.default],
        ["generic", _genericRole.default],
        ["grid", _gridRole.default],
        ["gridcell", _gridcellRole.default],
        ["group", _groupRole.default],
        ["heading", _headingRole.default],
        ["img", _imgRole.default],
        ["insertion", _insertionRole.default],
        ["link", _linkRole.default],
        ["list", _listRole.default],
        ["listbox", _listboxRole.default],
        ["listitem", _listitemRole.default],
        ["log", _logRole.default],
        ["main", _mainRole.default],
        ["marquee", _marqueeRole.default],
        ["math", _mathRole.default],
        ["menu", _menuRole.default],
        ["menubar", _menubarRole.default],
        ["menuitem", _menuitemRole.default],
        ["menuitemcheckbox", _menuitemcheckboxRole.default],
        ["menuitemradio", _menuitemradioRole.default],
        ["meter", _meterRole.default],
        ["navigation", _navigationRole.default],
        ["none", _noneRole.default],
        ["note", _noteRole.default],
        ["option", _optionRole.default],
        ["paragraph", _paragraphRole.default],
        ["presentation", _presentationRole.default],
        ["progressbar", _progressbarRole.default],
        ["radio", _radioRole.default],
        ["radiogroup", _radiogroupRole.default],
        ["region", _regionRole.default],
        ["row", _rowRole.default],
        ["rowgroup", _rowgroupRole.default],
        ["rowheader", _rowheaderRole.default],
        ["scrollbar", _scrollbarRole.default],
        ["search", _searchRole.default],
        ["searchbox", _searchboxRole.default],
        ["separator", _separatorRole.default],
        ["slider", _sliderRole.default],
        ["spinbutton", _spinbuttonRole.default],
        ["status", _statusRole.default],
        ["strong", _strongRole.default],
        ["subscript", _subscriptRole.default],
        ["superscript", _superscriptRole.default],
        ["switch", _switchRole.default],
        ["tab", _tabRole.default],
        ["table", _tableRole.default],
        ["tablist", _tablistRole.default],
        ["tabpanel", _tabpanelRole.default],
        ["term", _termRole.default],
        ["textbox", _textboxRole.default],
        ["time", _timeRole.default],
        ["timer", _timerRole.default],
        ["toolbar", _toolbarRole.default],
        ["tooltip", _tooltipRole.default],
        ["tree", _treeRole.default],
        ["treegrid", _treegridRole.default],
        ["treeitem", _treeitemRole.default],
      ];
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "abstract [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "acknowledgments [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "afterword [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "appendix [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "content"],
        prohibitedProps: [],
        props: { "aria-errormessage": null, "aria-invalid": null },
        relatedConcepts: [
          { concept: { name: "referrer [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command", "link"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "EPUB biblioentry [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: ["doc-bibliography"],
        requiredContextRole: ["doc-bibliography"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "listitem"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "bibliography [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["doc-biblioentry"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-errormessage": null, "aria-invalid": null },
        relatedConcepts: [
          { concept: { name: "biblioref [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command", "link"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "chapter [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "colophon [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "conclusion [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "cover [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "img"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "credit [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "credits [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "dedication [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "rearnote [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: ["doc-endnotes"],
        requiredContextRole: ["doc-endnotes"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "listitem"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "rearnotes [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["doc-endnote"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "epigraph [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "epilogue [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "errata [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "footnote [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "foreword [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "glossary [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["definition"], ["term"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-errormessage": null, "aria-invalid": null },
        relatedConcepts: [
          { concept: { name: "glossref [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command", "link"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "index [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark", "navigation"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "introduction [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-errormessage": null, "aria-invalid": null },
        relatedConcepts: [
          { concept: { name: "noteref [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command", "link"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "notice [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "note"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "pagebreak [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "separator"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "page-list [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark", "navigation"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "part [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "preface [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "prologue [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: "pullquote [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["none"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "qna [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "subtitle [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "sectionhead"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "help [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "note"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "toc [EPUB-SSV]" }, module: "EPUB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "landmark", "navigation"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var _default = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ["author"],
          prohibitedProps: [],
          props: {
            "aria-disabled": null,
            "aria-errormessage": null,
            "aria-expanded": null,
            "aria-haspopup": null,
            "aria-invalid": null,
          },
          relatedConcepts: [
            { module: "GRAPHICS", concept: { name: "graphics-object" } },
            { module: "ARIA", concept: { name: "img" } },
            { module: "ARIA", concept: { name: "article" } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [["roletype", "structure", "document"]],
        };
        exports.default = _default;
      },
    "./node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { module: "GRAPHICS", concept: { name: "graphics-document" } },
          { module: "ARIA", concept: { name: "group" } },
          { module: "ARIA", concept: { name: "img" } },
          { module: "GRAPHICS", concept: { name: "graphics-symbol" } },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "group"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "img"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/alertRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-atomic": "true", "aria-live": "assertive" },
        relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "alert"],
          ["roletype", "window", "dialog"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/applicationRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
        },
        relatedConcepts: [
          { concept: { name: "Device Independence Delivery Unit" } },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/articleRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-posinset": null, "aria-setsize": null },
        relatedConcepts: [{ concept: { name: "article" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "document"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/bannerRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              constraints: ["direct descendant of document"],
              name: "header",
            },
            module: "HTML",
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/buttonRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-pressed": null,
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "aria-pressed" },
                { name: "type", value: "checkbox" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ name: "aria-expanded", value: "false" }],
              name: "summary",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ name: "aria-expanded", value: "true" }],
              constraints: [
                "direct descendant of details element with the open attribute defined",
              ],
              name: "summary",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ name: "type", value: "button" }],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ name: "type", value: "image" }],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ name: "type", value: "reset" }],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ name: "type", value: "submit" }],
              name: "input",
            },
            module: "HTML",
          },
          { concept: { name: "button" }, module: "HTML" },
          { concept: { name: "trigger" }, module: "XForms" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/captionRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: ["figure", "grid", "table"],
        requiredContextRole: ["figure", "grid", "table"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/cellRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-colindex": null,
          "aria-colspan": null,
          "aria-rowindex": null,
          "aria-rowspan": null,
        },
        relatedConcepts: [
          {
            concept: { constraints: ["descendant of table"], name: "td" },
            module: "HTML",
          },
        ],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: "type", value: "checkbox" }],
              name: "input",
            },
            module: "HTML",
          },
          { concept: { name: "option" }, module: "ARIA" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-checked": null },
        superClass: [["roletype", "widget", "input"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/codeRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-sort": null },
        relatedConcepts: [
          {
            attributes: [{ name: "scope", value: "col" }],
            concept: { name: "th" },
            module: "HTML",
          },
        ],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "cell"],
          ["roletype", "structure", "section", "cell", "gridcell"],
          ["roletype", "widget", "gridcell"],
          ["roletype", "structure", "sectionhead"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-autocomplete": null,
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-expanded": "false",
          "aria-haspopup": "listbox",
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "list" },
                { name: "type", value: "email" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "list" },
                { name: "type", value: "search" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "list" },
                { name: "type", value: "tel" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "list" },
                { name: "type", value: "text" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "list" },
                { name: "type", value: "url" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["set"], name: "list" },
                { name: "type", value: "url" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "multiple" },
                { constraints: ["undefined"], name: "size" },
              ],
              name: "select",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "multiple" },
                { name: "size", value: 1 },
              ],
              name: "select",
            },
            module: "HTML",
          },
          { concept: { name: "select" }, module: "XForms" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-controls": null, "aria-expanded": "false" },
        superClass: [["roletype", "widget", "input"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "aside" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              constraints: ["direct descendant of document"],
              name: "footer",
            },
            module: "HTML",
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/definitionRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "dd" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/deletionRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/dialogRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "dialog" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "window"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/directoryRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ module: "DAISY Guide" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "list"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/documentRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: "Device Independence Delivery Unit" } },
          { concept: { name: "body" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/feedRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["article"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "list"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/figureRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "figure" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/formRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              attributes: [{ constraints: ["set"], name: "aria-label" }],
              name: "form",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
              name: "form",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ constraints: ["set"], name: "name" }],
              name: "form",
            },
            module: "HTML",
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/genericRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [
          { concept: { name: "span" }, module: "HTML" },
          { concept: { name: "div" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/gridRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-multiselectable": null, "aria-readonly": null },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: "role", value: "grid" }],
              name: "table",
            },
            module: "HTML",
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["row"], ["row", "rowgroup"]],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"],
          ["roletype", "structure", "section", "table"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-selected": null,
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: "role", value: "gridcell" }],
              name: "td",
            },
            module: "HTML",
          },
        ],
        requireContextRole: ["row"],
        requiredContextRole: ["row"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "cell"],
          ["roletype", "widget"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/groupRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-activedescendant": null, "aria-disabled": null },
        relatedConcepts: [
          { concept: { name: "details" }, module: "HTML" },
          { concept: { name: "fieldset" }, module: "HTML" },
          { concept: { name: "optgroup" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/headingRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-level": "2" },
        relatedConcepts: [
          { concept: { name: "h1" }, module: "HTML" },
          { concept: { name: "h2" }, module: "HTML" },
          { concept: { name: "h3" }, module: "HTML" },
          { concept: { name: "h4" }, module: "HTML" },
          { concept: { name: "h5" }, module: "HTML" },
          { concept: { name: "h6" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-level": "2" },
        superClass: [["roletype", "structure", "sectionhead"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/imgRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              attributes: [{ constraints: ["set"], name: "alt" }],
              name: "img",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ constraints: ["undefined"], name: "alt" }],
              name: "img",
            },
            module: "HTML",
          },
          { concept: { name: "imggroup" }, module: "DTB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/insertionRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/linkRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
        },
        relatedConcepts: [
          {
            concept: { attributes: [{ name: "href" }], name: "a" },
            module: "HTML",
          },
          {
            concept: { attributes: [{ name: "href" }], name: "area" },
            module: "HTML",
          },
          {
            concept: { attributes: [{ name: "href" }], name: "link" },
            module: "HTML",
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/listRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: "menu" }, module: "HTML" },
          { concept: { name: "ol" }, module: "HTML" },
          { concept: { name: "ul" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["listitem"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/listboxRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-expanded": null,
          "aria-invalid": null,
          "aria-multiselectable": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-orientation": "vertical",
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: [">1"], name: "size" },
                { name: "multiple" },
              ],
              name: "select",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ constraints: [">1"], name: "size" }],
              name: "select",
            },
            module: "HTML",
          },
          {
            concept: { attributes: [{ name: "multiple" }], name: "select" },
            module: "HTML",
          },
          { concept: { name: "datalist" }, module: "HTML" },
          { concept: { name: "list" }, module: "ARIA" },
          { concept: { name: "select" }, module: "XForms" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["option", "group"], ["option"]],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/listitemRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-level": null,
          "aria-posinset": null,
          "aria-setsize": null,
        },
        relatedConcepts: [
          {
            concept: {
              constraints: ["direct descendant of ol, ul or menu"],
              name: "li",
            },
            module: "HTML",
          },
          { concept: { name: "item" }, module: "XForms" },
        ],
        requireContextRole: ["directory", "list"],
        requiredContextRole: ["directory", "list"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/logRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-live": "polite" },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/mainRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "main" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/mathRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "math" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/menuRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-orientation": "vertical" },
        relatedConcepts: [
          { concept: { name: "MENU" }, module: "JAPI" },
          { concept: { name: "list" }, module: "ARIA" },
          { concept: { name: "select" }, module: "XForms" },
          { concept: { name: "sidebar" }, module: "DTB" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["menuitem", "group"],
          ["menuitemradio", "group"],
          ["menuitemcheckbox", "group"],
          ["menuitem"],
          ["menuitemcheckbox"],
          ["menuitemradio"],
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/menubarRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-orientation": "horizontal" },
        relatedConcepts: [{ concept: { name: "toolbar" }, module: "ARIA" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [
          ["menuitem", "group"],
          ["menuitemradio", "group"],
          ["menuitemcheckbox", "group"],
          ["menuitem"],
          ["menuitemcheckbox"],
          ["menuitemradio"],
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select", "menu"],
          ["roletype", "structure", "section", "group", "select", "menu"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-posinset": null,
          "aria-setsize": null,
        },
        relatedConcepts: [
          { concept: { name: "MENU_ITEM" }, module: "JAPI" },
          { concept: { name: "listitem" }, module: "ARIA" },
          { concept: { name: "menuitem" }, module: "HTML" },
          { concept: { name: "option" }, module: "ARIA" },
        ],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "command"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: { "aria-checked": null },
        superClass: [
          ["roletype", "widget", "input", "checkbox"],
          ["roletype", "widget", "command", "menuitem"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }],
        requireContextRole: ["group", "menu", "menubar"],
        requiredContextRole: ["group", "menu", "menubar"],
        requiredOwnedElements: [],
        requiredProps: { "aria-checked": null },
        superClass: [
          ["roletype", "widget", "input", "checkbox", "menuitemcheckbox"],
          ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"],
          ["roletype", "widget", "input", "radio"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/meterRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-valuetext": null,
          "aria-valuemax": "100",
          "aria-valuemin": "0",
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-valuenow": null },
        superClass: [["roletype", "structure", "range"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/navigationRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "nav" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/noneRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: [],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/noteRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/optionRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-posinset": null,
          "aria-setsize": null,
          "aria-selected": "false",
        },
        relatedConcepts: [
          { concept: { name: "item" }, module: "XForms" },
          { concept: { name: "listitem" }, module: "ARIA" },
          { concept: { name: "option" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-selected": "false" },
        superClass: [["roletype", "widget", "input"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/presentationRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-valuetext": null },
        relatedConcepts: [
          { concept: { name: "progress" }, module: "HTML" },
          { concept: { name: "status" }, module: "ARIA" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "range"],
          ["roletype", "widget"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/radioRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-checked": null,
          "aria-posinset": null,
          "aria-setsize": null,
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: "type", value: "radio" }],
              name: "input",
            },
            module: "HTML",
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-checked": null },
        superClass: [["roletype", "widget", "input"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
        },
        relatedConcepts: [{ concept: { name: "list" }, module: "ARIA" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["radio"]],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/regionRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              attributes: [{ constraints: ["set"], name: "aria-label" }],
              name: "section",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
              name: "section",
            },
            module: "HTML",
          },
          {
            concept: { name: "Device Independence Glossart perceivable unit" },
          },
          { concept: { name: "frame" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/rowRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-colindex": null,
          "aria-expanded": null,
          "aria-level": null,
          "aria-posinset": null,
          "aria-rowindex": null,
          "aria-selected": null,
          "aria-setsize": null,
        },
        relatedConcepts: [{ concept: { name: "tr" }, module: "HTML" }],
        requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
        requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
        requiredOwnedElements: [
          ["cell"],
          ["columnheader"],
          ["gridcell"],
          ["rowheader"],
        ],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "group"],
          ["roletype", "widget"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: "tbody" }, module: "HTML" },
          { concept: { name: "tfoot" }, module: "HTML" },
          { concept: { name: "thead" }, module: "HTML" },
        ],
        requireContextRole: ["grid", "table", "treegrid"],
        requiredContextRole: ["grid", "table", "treegrid"],
        requiredOwnedElements: [["row"]],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-sort": null },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: "scope", value: "row" }],
              name: "th",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [{ name: "scope", value: "rowgroup" }],
              name: "th",
            },
            module: "HTML",
          },
        ],
        requireContextRole: ["row", "rowgroup"],
        requiredContextRole: ["row", "rowgroup"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "section", "cell"],
          ["roletype", "structure", "section", "cell", "gridcell"],
          ["roletype", "widget", "gridcell"],
          ["roletype", "structure", "sectionhead"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-valuetext": null,
          "aria-orientation": "vertical",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-controls": null, "aria-valuenow": null },
        superClass: [
          ["roletype", "structure", "range"],
          ["roletype", "widget"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/searchRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "landmark"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "list" },
                { name: "type", value: "search" },
              ],
              name: "input",
            },
            module: "HTML",
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "input", "textbox"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/separatorRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-orientation": "horizontal",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
          "aria-valuenow": null,
          "aria-valuetext": null,
        },
        relatedConcepts: [{ concept: { name: "hr" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/sliderRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-valuetext": null,
          "aria-orientation": "horizontal",
          "aria-valuemax": "100",
          "aria-valuemin": "0",
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: "type", value: "range" }],
              name: "input",
            },
            module: "HTML",
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-valuenow": null },
        superClass: [
          ["roletype", "widget", "input"],
          ["roletype", "structure", "range"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-readonly": null,
          "aria-required": null,
          "aria-valuetext": null,
          "aria-valuenow": "0",
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [{ name: "type", value: "number" }],
              name: "input",
            },
            module: "HTML",
          },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite"],
          ["roletype", "widget", "input"],
          ["roletype", "structure", "range"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/statusRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-atomic": "true", "aria-live": "polite" },
        relatedConcepts: [{ concept: { name: "output" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/strongRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["prohibited"],
        prohibitedProps: ["aria-label", "aria-labelledby"],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/switchRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [{ concept: { name: "button" }, module: "ARIA" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: { "aria-checked": null },
        superClass: [["roletype", "widget", "input", "checkbox"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/tabRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !0,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {
          "aria-disabled": null,
          "aria-expanded": null,
          "aria-haspopup": null,
          "aria-posinset": null,
          "aria-setsize": null,
          "aria-selected": "false",
        },
        relatedConcepts: [],
        requireContextRole: ["tablist"],
        requiredContextRole: ["tablist"],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [
          ["roletype", "structure", "sectionhead"],
          ["roletype", "widget"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/tableRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-colcount": null, "aria-rowcount": null },
        relatedConcepts: [{ concept: { name: "table" }, module: "HTML" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["row"], ["row", "rowgroup"]],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/tablistRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-level": null,
          "aria-multiselectable": null,
          "aria-orientation": "horizontal",
        },
        relatedConcepts: [{ module: "DAISY", concept: { name: "guide" } }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["tab"]],
        requiredProps: {},
        superClass: [["roletype", "widget", "composite"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/termRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [
          { concept: { name: "dfn" }, module: "HTML" },
          { concept: { name: "dt" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/textboxRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-activedescendant": null,
          "aria-autocomplete": null,
          "aria-errormessage": null,
          "aria-haspopup": null,
          "aria-invalid": null,
          "aria-multiline": null,
          "aria-placeholder": null,
          "aria-readonly": null,
          "aria-required": null,
        },
        relatedConcepts: [
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "type" },
                { constraints: ["undefined"], name: "list" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "list" },
                { name: "type", value: "email" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "list" },
                { name: "type", value: "tel" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "list" },
                { name: "type", value: "text" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          {
            concept: {
              attributes: [
                { constraints: ["undefined"], name: "list" },
                { name: "type", value: "url" },
              ],
              name: "input",
            },
            module: "HTML",
          },
          { concept: { name: "input" }, module: "XForms" },
          { concept: { name: "textarea" }, module: "HTML" },
        ],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "widget", "input"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/timeRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/timerRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "status"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !1,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: { "aria-orientation": "horizontal" },
        relatedConcepts: [{ concept: { name: "menubar" }, module: "ARIA" }],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section", "group"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [],
        requiredProps: {},
        superClass: [["roletype", "structure", "section"]],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/treeRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {
          "aria-errormessage": null,
          "aria-invalid": null,
          "aria-multiselectable": null,
          "aria-required": null,
          "aria-orientation": "vertical",
        },
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "select"],
          ["roletype", "structure", "section", "group", "select"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/treegridRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author"],
        prohibitedProps: [],
        props: {},
        relatedConcepts: [],
        requireContextRole: [],
        requiredContextRole: [],
        requiredOwnedElements: [["row"], ["row", "rowgroup"]],
        requiredProps: {},
        superClass: [
          ["roletype", "widget", "composite", "grid"],
          ["roletype", "structure", "section", "table", "grid"],
          ["roletype", "widget", "composite", "select", "tree"],
          ["roletype", "structure", "section", "group", "select", "tree"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = {
        abstract: !1,
        accessibleNameRequired: !0,
        baseConcepts: [],
        childrenPresentational: !1,
        nameFrom: ["author", "contents"],
        prohibitedProps: [],
        props: { "aria-expanded": null, "aria-haspopup": null },
        relatedConcepts: [],
        requireContextRole: ["group", "tree"],
        requiredContextRole: ["group", "tree"],
        requiredOwnedElements: [],
        requiredProps: { "aria-selected": null },
        superClass: [
          ["roletype", "structure", "section", "listitem"],
          ["roletype", "widget", "input", "option"],
        ],
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/index.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      exports.uJ = exports.UN = exports.Qv = void 0;
      var _ariaPropsMap = _interopRequireDefault(
          __webpack_require__("./node_modules/aria-query/lib/ariaPropsMap.js")
        ),
        _domMap = _interopRequireDefault(
          __webpack_require__("./node_modules/aria-query/lib/domMap.js")
        ),
        _rolesMap = _interopRequireDefault(
          __webpack_require__("./node_modules/aria-query/lib/rolesMap.js")
        ),
        _elementRoleMap = _interopRequireDefault(
          __webpack_require__("./node_modules/aria-query/lib/elementRoleMap.js")
        ),
        _roleElementMap = _interopRequireDefault(
          __webpack_require__("./node_modules/aria-query/lib/roleElementMap.js")
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      _ariaPropsMap.default, _domMap.default;
      var roles = _rolesMap.default;
      exports.uJ = roles;
      var elementRoles = _elementRoleMap.default;
      exports.Qv = elementRoles;
      var roleElements = _roleElementMap.default;
      exports.UN = roleElements;
    },
    "./node_modules/aria-query/lib/roleElementMap.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _iterationDecorator = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/util/iterationDecorator.js"
          )
        ),
        _rolesMap = _interopRequireDefault(
          __webpack_require__("./node_modules/aria-query/lib/rolesMap.js")
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            "Object" === n && o.constructor && (n = o.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(o)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      for (
        var roleElement = [],
          keys = _rolesMap.default.keys(),
          _loop = function _loop(i) {
            var key = keys[i],
              role = _rolesMap.default.get(key);
            if (role)
              for (
                var concepts = [].concat(
                    role.baseConcepts,
                    role.relatedConcepts
                  ),
                  k = 0;
                k < concepts.length;
                k++
              ) {
                var relation = concepts[k];
                if ("HTML" === relation.module) {
                  var concept = relation.concept;
                  if (concept) {
                    var roleElementRelation = roleElement.find(function (item) {
                        return item[0] === key;
                      }),
                      relationConcepts = void 0;
                    (relationConcepts = roleElementRelation
                      ? roleElementRelation[1]
                      : []).push(concept),
                      roleElement.push([key, relationConcepts]);
                  }
                }
              }
          },
          i = 0;
        i < keys.length;
        i++
      )
        _loop(i);
      var roleElementMap = {
          entries: function entries() {
            return roleElement;
          },
          forEach: function forEach(fn) {
            var _step,
              thisArg =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              _iterator = (function _createForOfIteratorHelper(
                o,
                allowArrayLike
              ) {
                var it =
                  ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
                  o["@@iterator"];
                if (!it) {
                  if (
                    Array.isArray(o) ||
                    (it = _unsupportedIterableToArray(o)) ||
                    (allowArrayLike && o && "number" == typeof o.length)
                  ) {
                    it && (o = it);
                    var i = 0,
                      F = function F() {};
                    return {
                      s: F,
                      n: function n() {
                        return i >= o.length
                          ? { done: !0 }
                          : { done: !1, value: o[i++] };
                      },
                      e: function e(_e2) {
                        throw _e2;
                      },
                      f: F,
                    };
                  }
                  throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                }
                var err,
                  normalCompletion = !0,
                  didErr = !1;
                return {
                  s: function s() {
                    it = it.call(o);
                  },
                  n: function n() {
                    var step = it.next();
                    return (normalCompletion = step.done), step;
                  },
                  e: function e(_e3) {
                    (didErr = !0), (err = _e3);
                  },
                  f: function f() {
                    try {
                      normalCompletion || null == it.return || it.return();
                    } finally {
                      if (didErr) throw err;
                    }
                  },
                };
              })(roleElement);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var _step$value = _slicedToArray(_step.value, 2),
                  key = _step$value[0],
                  values = _step$value[1];
                fn.call(thisArg, values, key, roleElement);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          },
          get: function get(key) {
            var item = roleElement.find(function (tuple) {
              return tuple[0] === key;
            });
            return item && item[1];
          },
          has: function has(key) {
            return !!roleElementMap.get(key);
          },
          keys: function keys() {
            return roleElement.map(function (_ref) {
              return _slicedToArray(_ref, 1)[0];
            });
          },
          values: function values() {
            return roleElement.map(function (_ref3) {
              return _slicedToArray(_ref3, 2)[1];
            });
          },
        },
        _default = (0, _iterationDecorator.default)(
          roleElementMap,
          roleElementMap.entries()
        );
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/rolesMap.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _ariaAbstractRoles = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js"
          )
        ),
        _ariaLiteralRoles = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js"
          )
        ),
        _ariaDpubRoles = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js"
          )
        ),
        _ariaGraphicsRoles = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js"
          )
        ),
        _iterationDecorator = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/aria-query/lib/util/iterationDecorator.js"
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it =
          ("undefined" != typeof Symbol && o[Symbol.iterator]) ||
          o["@@iterator"];
        if (!it) {
          if (
            Array.isArray(o) ||
            (it = _unsupportedIterableToArray(o)) ||
            (allowArrayLike && o && "number" == typeof o.length)
          ) {
            it && (o = it);
            var i = 0,
              F = function F() {};
            return {
              s: F,
              n: function n() {
                return i >= o.length
                  ? { done: !0 }
                  : { done: !1, value: o[i++] };
              },
              e: function e(_e2) {
                throw _e2;
              },
              f: F,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var err,
          normalCompletion = !0,
          didErr = !1;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            var step = it.next();
            return (normalCompletion = step.done), step;
          },
          e: function e(_e3) {
            (didErr = !0), (err = _e3);
          },
          f: function f() {
            try {
              normalCompletion || null == it.return || it.return();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            "Object" === n && o.constructor && (n = o.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(o)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var roles = [].concat(
        _ariaAbstractRoles.default,
        _ariaLiteralRoles.default,
        _ariaDpubRoles.default,
        _ariaGraphicsRoles.default
      );
      roles.forEach(function (_ref) {
        var _step,
          roleDefinition = _slicedToArray(_ref, 2)[1],
          _iterator = _createForOfIteratorHelper(roleDefinition.superClass);
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _step2,
              _iterator2 = _createForOfIteratorHelper(_step.value);
            try {
              var _loop = function _loop() {
                var obj,
                  key,
                  value,
                  superClassName = _step2.value,
                  superClassRoleTuple = roles.find(function (_ref3) {
                    return _slicedToArray(_ref3, 1)[0] === superClassName;
                  });
                if (superClassRoleTuple)
                  for (
                    var superClassDefinition = superClassRoleTuple[1],
                      _i2 = 0,
                      _Object$keys = Object.keys(superClassDefinition.props);
                    _i2 < _Object$keys.length;
                    _i2++
                  ) {
                    var prop = _Object$keys[_i2];
                    Object.prototype.hasOwnProperty.call(
                      roleDefinition.props,
                      prop
                    ) ||
                      Object.assign(
                        roleDefinition.props,
                        ((obj = {}),
                        (key = prop),
                        (value = superClassDefinition.props[prop]),
                        key in obj
                          ? Object.defineProperty(obj, key, {
                              value,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (obj[key] = value),
                        obj)
                      );
                  }
              };
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) _loop();
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      var rolesMap = {
          entries: function entries() {
            return roles;
          },
          forEach: function forEach(fn) {
            var _step3,
              thisArg =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              _iterator3 = _createForOfIteratorHelper(roles);
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var _step3$value = _slicedToArray(_step3.value, 2),
                  key = _step3$value[0],
                  values = _step3$value[1];
                fn.call(thisArg, values, key, roles);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          },
          get: function get(key) {
            var item = roles.find(function (tuple) {
              return tuple[0] === key;
            });
            return item && item[1];
          },
          has: function has(key) {
            return !!rolesMap.get(key);
          },
          keys: function keys() {
            return roles.map(function (_ref5) {
              return _slicedToArray(_ref5, 1)[0];
            });
          },
          values: function values() {
            return roles.map(function (_ref7) {
              return _slicedToArray(_ref7, 2)[1];
            });
          },
        },
        _default = (0, _iterationDecorator.default)(
          rolesMap,
          rolesMap.entries()
        );
      exports.default = _default;
    },
    "./node_modules/aria-query/lib/util/iterationDecorator.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = function iterationDecorator(collection, entries) {
          "function" == typeof Symbol &&
            "symbol" === _typeof(Symbol.iterator) &&
            Object.defineProperty(collection, Symbol.iterator, {
              value: _iteratorProxy.default.bind(entries),
            });
          return collection;
        });
      var _iteratorProxy = (function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      })(
        __webpack_require__(
          "./node_modules/aria-query/lib/util/iteratorProxy.js"
        )
      );
      function _typeof(obj) {
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
    },
    "./node_modules/aria-query/lib/util/iteratorProxy.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = void 0);
      var _default = function iteratorProxy() {
        var values = this,
          index = 0,
          iter = {
            "@@iterator": function iterator() {
              return iter;
            },
            next: function next() {
              if (index < values.length) {
                var value = values[index];
                return (index += 1), { done: !1, value };
              }
              return { done: !0 };
            },
          };
        return iter;
      };
      exports.default = _default;
    },
    "./node_modules/aria-query/node_modules/deep-equal/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var assign = __webpack_require__(
          "./node_modules/aria-query/node_modules/object.assign/index.js"
        ),
        callBound = __webpack_require__(
          "./node_modules/call-bind/callBound.js"
        ),
        flags = __webpack_require__(
          "./node_modules/regexp.prototype.flags/index.js"
        ),
        GetIntrinsic = __webpack_require__(
          "./node_modules/get-intrinsic/index.js"
        ),
        getIterator = __webpack_require__(
          "./node_modules/es-get-iterator/index.js"
        ),
        getSideChannel = __webpack_require__(
          "./node_modules/side-channel/index.js"
        ),
        is = __webpack_require__("./node_modules/object-is/index.js"),
        isArguments = __webpack_require__(
          "./node_modules/is-arguments/index.js"
        ),
        isArray = __webpack_require__("./node_modules/isarray/index.js"),
        isArrayBuffer = __webpack_require__(
          "./node_modules/is-array-buffer/index.js"
        ),
        isDate = __webpack_require__("./node_modules/is-date-object/index.js"),
        isRegex = __webpack_require__("./node_modules/is-regex/index.js"),
        isSharedArrayBuffer = __webpack_require__(
          "./node_modules/is-shared-array-buffer/index.js"
        ),
        objectKeys = __webpack_require__("./node_modules/object-keys/index.js"),
        whichBoxedPrimitive = __webpack_require__(
          "./node_modules/which-boxed-primitive/index.js"
        ),
        whichCollection = __webpack_require__(
          "./node_modules/which-collection/index.js"
        ),
        whichTypedArray = __webpack_require__(
          "./node_modules/which-typed-array/index.js"
        ),
        byteLength =
          callBound("ArrayBuffer.prototype.byteLength", !0) ||
          function byteLength(ab) {
            return ab.byteLength;
          },
        sabByteLength = callBound("SharedArrayBuffer.prototype.byteLength", !0),
        $getTime = callBound("Date.prototype.getTime"),
        gPO = Object.getPrototypeOf,
        $objToString = callBound("Object.prototype.toString"),
        $Set = GetIntrinsic("%Set%", !0),
        $mapHas = callBound("Map.prototype.has", !0),
        $mapGet = callBound("Map.prototype.get", !0),
        $mapSize = callBound("Map.prototype.size", !0),
        $setAdd = callBound("Set.prototype.add", !0),
        $setDelete = callBound("Set.prototype.delete", !0),
        $setHas = callBound("Set.prototype.has", !0),
        $setSize = callBound("Set.prototype.size", !0);
      function setHasEqualElement(set, val1, opts, channel) {
        for (
          var result, i = getIterator(set);
          (result = i.next()) && !result.done;

        )
          if (internalDeepEqual(val1, result.value, opts, channel))
            return $setDelete(set, result.value), !0;
        return !1;
      }
      function findLooseMatchingPrimitives(prim) {
        return void 0 === prim
          ? null
          : "object" != typeof prim
          ? "symbol" != typeof prim &&
            (("string" != typeof prim && "number" != typeof prim) ||
              +prim == +prim)
          : void 0;
      }
      function mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {
        var altValue = findLooseMatchingPrimitives(prim);
        if (null != altValue) return altValue;
        var curB = $mapGet(b, altValue),
          looseOpts = assign({}, opts, { strict: !1 });
        return (
          !(
            (void 0 === curB && !$mapHas(b, altValue)) ||
            !internalDeepEqual(item, curB, looseOpts, channel)
          ) &&
          !$mapHas(a, altValue) &&
          internalDeepEqual(item, curB, looseOpts, channel)
        );
      }
      function setMightHaveLoosePrim(a, b, prim) {
        var altValue = findLooseMatchingPrimitives(prim);
        return null != altValue
          ? altValue
          : $setHas(b, altValue) && !$setHas(a, altValue);
      }
      function mapHasEqualEntry(set, map, key1, item1, opts, channel) {
        for (
          var result, key2, i = getIterator(set);
          (result = i.next()) && !result.done;

        )
          if (
            internalDeepEqual(key1, (key2 = result.value), opts, channel) &&
            internalDeepEqual(item1, $mapGet(map, key2), opts, channel)
          )
            return $setDelete(set, key2), !0;
        return !1;
      }
      function internalDeepEqual(actual, expected, options, channel) {
        var opts = options || {};
        if (opts.strict ? is(actual, expected) : actual === expected) return !0;
        if (whichBoxedPrimitive(actual) !== whichBoxedPrimitive(expected))
          return !1;
        if (
          !actual ||
          !expected ||
          ("object" != typeof actual && "object" != typeof expected)
        )
          return opts.strict ? is(actual, expected) : actual == expected;
        var sentinel,
          hasActual = channel.has(actual),
          hasExpected = channel.has(expected);
        if (hasActual && hasExpected) {
          if (channel.get(actual) === channel.get(expected)) return !0;
        } else sentinel = {};
        return (
          hasActual || channel.set(actual, sentinel),
          hasExpected || channel.set(expected, sentinel),
          (function objEquiv(a, b, opts, channel) {
            var i, key;
            if (typeof a != typeof b) return !1;
            if (null == a || null == b) return !1;
            if ($objToString(a) !== $objToString(b)) return !1;
            if (isArguments(a) !== isArguments(b)) return !1;
            var aIsArray = isArray(a),
              bIsArray = isArray(b);
            if (aIsArray !== bIsArray) return !1;
            var aIsError = a instanceof Error,
              bIsError = b instanceof Error;
            if (aIsError !== bIsError) return !1;
            if (
              (aIsError || bIsError) &&
              (a.name !== b.name || a.message !== b.message)
            )
              return !1;
            var aIsRegex = isRegex(a),
              bIsRegex = isRegex(b);
            if (aIsRegex !== bIsRegex) return !1;
            if (
              (aIsRegex || bIsRegex) &&
              (a.source !== b.source || flags(a) !== flags(b))
            )
              return !1;
            var aIsDate = isDate(a),
              bIsDate = isDate(b);
            if (aIsDate !== bIsDate) return !1;
            if ((aIsDate || bIsDate) && $getTime(a) !== $getTime(b)) return !1;
            if (opts.strict && gPO && gPO(a) !== gPO(b)) return !1;
            var aWhich = whichTypedArray(a),
              bWhich = whichTypedArray(b);
            if ((aWhich || bWhich) && aWhich !== bWhich) return !1;
            var aIsBuffer = isBuffer(a),
              bIsBuffer = isBuffer(b);
            if (aIsBuffer !== bIsBuffer) return !1;
            if (aIsBuffer || bIsBuffer) {
              if (a.length !== b.length) return !1;
              for (i = 0; i < a.length; i++) if (a[i] !== b[i]) return !1;
              return !0;
            }
            var aIsArrayBuffer = isArrayBuffer(a),
              bIsArrayBuffer = isArrayBuffer(b);
            if (aIsArrayBuffer !== bIsArrayBuffer) return !1;
            if (aIsArrayBuffer || bIsArrayBuffer)
              return (
                byteLength(a) === byteLength(b) &&
                "function" == typeof Uint8Array &&
                internalDeepEqual(
                  new Uint8Array(a),
                  new Uint8Array(b),
                  opts,
                  channel
                )
              );
            var aIsSAB = isSharedArrayBuffer(a),
              bIsSAB = isSharedArrayBuffer(b);
            if (aIsSAB !== bIsSAB) return !1;
            if (aIsSAB || bIsSAB)
              return (
                sabByteLength(a) === sabByteLength(b) &&
                "function" == typeof Uint8Array &&
                internalDeepEqual(
                  new Uint8Array(a),
                  new Uint8Array(b),
                  opts,
                  channel
                )
              );
            if (typeof a != typeof b) return !1;
            var ka = objectKeys(a),
              kb = objectKeys(b);
            if (ka.length !== kb.length) return !1;
            for (ka.sort(), kb.sort(), i = ka.length - 1; i >= 0; i--)
              if (ka[i] != kb[i]) return !1;
            for (i = ka.length - 1; i >= 0; i--)
              if (!internalDeepEqual(a[(key = ka[i])], b[key], opts, channel))
                return !1;
            var aCollection = whichCollection(a),
              bCollection = whichCollection(b);
            if (aCollection !== bCollection) return !1;
            if ("Set" === aCollection || "Set" === bCollection)
              return (function setEquiv(a, b, opts, channel) {
                if ($setSize(a) !== $setSize(b)) return !1;
                var resultA,
                  resultB,
                  set,
                  iA = getIterator(a),
                  iB = getIterator(b);
                for (; (resultA = iA.next()) && !resultA.done; )
                  if (resultA.value && "object" == typeof resultA.value)
                    set || (set = new $Set()), $setAdd(set, resultA.value);
                  else if (!$setHas(b, resultA.value)) {
                    if (opts.strict) return !1;
                    if (!setMightHaveLoosePrim(a, b, resultA.value)) return !1;
                    set || (set = new $Set()), $setAdd(set, resultA.value);
                  }
                if (set) {
                  for (; (resultB = iB.next()) && !resultB.done; )
                    if (resultB.value && "object" == typeof resultB.value) {
                      if (
                        !setHasEqualElement(
                          set,
                          resultB.value,
                          opts.strict,
                          channel
                        )
                      )
                        return !1;
                    } else if (
                      !opts.strict &&
                      !$setHas(a, resultB.value) &&
                      !setHasEqualElement(
                        set,
                        resultB.value,
                        opts.strict,
                        channel
                      )
                    )
                      return !1;
                  return 0 === $setSize(set);
                }
                return !0;
              })(a, b, opts, channel);
            if ("Map" === aCollection)
              return (function mapEquiv(a, b, opts, channel) {
                if ($mapSize(a) !== $mapSize(b)) return !1;
                var resultA,
                  resultB,
                  set,
                  key,
                  item1,
                  item2,
                  iA = getIterator(a),
                  iB = getIterator(b);
                for (; (resultA = iA.next()) && !resultA.done; )
                  if (
                    ((key = resultA.value[0]),
                    (item1 = resultA.value[1]),
                    key && "object" == typeof key)
                  )
                    set || (set = new $Set()), $setAdd(set, key);
                  else if (
                    (void 0 === (item2 = $mapGet(b, key)) &&
                      !$mapHas(b, key)) ||
                    !internalDeepEqual(item1, item2, opts, channel)
                  ) {
                    if (opts.strict) return !1;
                    if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel))
                      return !1;
                    set || (set = new $Set()), $setAdd(set, key);
                  }
                if (set) {
                  for (; (resultB = iB.next()) && !resultB.done; )
                    if (
                      ((key = resultB.value[0]),
                      (item2 = resultB.value[1]),
                      key && "object" == typeof key)
                    ) {
                      if (!mapHasEqualEntry(set, a, key, item2, opts, channel))
                        return !1;
                    } else if (
                      !(
                        opts.strict ||
                        (a.has(key) &&
                          internalDeepEqual(
                            $mapGet(a, key),
                            item2,
                            opts,
                            channel
                          )) ||
                        mapHasEqualEntry(
                          set,
                          a,
                          key,
                          item2,
                          assign({}, opts, { strict: !1 }),
                          channel
                        )
                      )
                    )
                      return !1;
                  return 0 === $setSize(set);
                }
                return !0;
              })(a, b, opts, channel);
            return !0;
          })(actual, expected, opts, channel)
        );
      }
      function isBuffer(x) {
        return (
          !(!x || "object" != typeof x || "number" != typeof x.length) &&
          "function" == typeof x.copy &&
          "function" == typeof x.slice &&
          !(x.length > 0 && "number" != typeof x[0]) &&
          !!(
            x.constructor &&
            x.constructor.isBuffer &&
            x.constructor.isBuffer(x)
          )
        );
      }
      module.exports = function deepEqual(a, b, opts) {
        return internalDeepEqual(a, b, opts, getSideChannel());
      };
    },
    "./node_modules/aria-query/node_modules/object.assign/implementation.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var objectKeys = __webpack_require__(
          "./node_modules/object-keys/index.js"
        ),
        hasSymbols = __webpack_require__(
          "./node_modules/has-symbols/shams.js"
        )(),
        callBound = __webpack_require__(
          "./node_modules/call-bind/callBound.js"
        ),
        toObject = Object,
        $push = callBound("Array.prototype.push"),
        $propIsEnumerable = callBound("Object.prototype.propertyIsEnumerable"),
        originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;
      module.exports = function assign(target, source1) {
        if (null == target) throw new TypeError("target must be an object");
        var to = toObject(target);
        if (1 === arguments.length) return to;
        for (var s = 1; s < arguments.length; ++s) {
          var from = toObject(arguments[s]),
            keys = objectKeys(from),
            getSymbols =
              hasSymbols &&
              (Object.getOwnPropertySymbols || originalGetSymbols);
          if (getSymbols)
            for (var syms = getSymbols(from), j = 0; j < syms.length; ++j) {
              var key = syms[j];
              $propIsEnumerable(from, key) && $push(keys, key);
            }
          for (var i = 0; i < keys.length; ++i) {
            var nextKey = keys[i];
            if ($propIsEnumerable(from, nextKey)) {
              var propValue = from[nextKey];
              to[nextKey] = propValue;
            }
          }
        }
        return to;
      };
    },
    "./node_modules/aria-query/node_modules/object.assign/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var defineProperties = __webpack_require__(
          "./node_modules/define-properties/index.js"
        ),
        callBind = __webpack_require__("./node_modules/call-bind/index.js"),
        implementation = __webpack_require__(
          "./node_modules/aria-query/node_modules/object.assign/implementation.js"
        ),
        getPolyfill = __webpack_require__(
          "./node_modules/aria-query/node_modules/object.assign/polyfill.js"
        ),
        shim = __webpack_require__(
          "./node_modules/aria-query/node_modules/object.assign/shim.js"
        ),
        polyfill = callBind.apply(getPolyfill()),
        bound = function assign(target, source1) {
          return polyfill(Object, arguments);
        };
      defineProperties(bound, { getPolyfill, implementation, shim }),
        (module.exports = bound);
    },
    "./node_modules/aria-query/node_modules/object.assign/polyfill.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var implementation = __webpack_require__(
        "./node_modules/aria-query/node_modules/object.assign/implementation.js"
      );
      module.exports = function getPolyfill() {
        return Object.assign
          ? (function () {
              if (!Object.assign) return !1;
              for (
                var str = "abcdefghijklmnopqrst",
                  letters = str.split(""),
                  map = {},
                  i = 0;
                i < letters.length;
                ++i
              )
                map[letters[i]] = letters[i];
              var obj = Object.assign({}, map),
                actual = "";
              for (var k in obj) actual += k;
              return str !== actual;
            })() ||
            (function () {
              if (!Object.assign || !Object.preventExtensions) return !1;
              var thrower = Object.preventExtensions({ 1: 2 });
              try {
                Object.assign(thrower, "xy");
              } catch (e) {
                return "y" === thrower[1];
              }
              return !1;
            })()
            ? implementation
            : Object.assign
          : implementation;
      };
    },
    "./node_modules/aria-query/node_modules/object.assign/shim.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var define = __webpack_require__(
          "./node_modules/define-properties/index.js"
        ),
        getPolyfill = __webpack_require__(
          "./node_modules/aria-query/node_modules/object.assign/polyfill.js"
        );
      module.exports = function shimAssign() {
        var polyfill = getPolyfill();
        return (
          define(
            Object,
            { assign: polyfill },
            {
              assign: function () {
                return Object.assign !== polyfill;
              },
            }
          ),
          polyfill
        );
      };
    },
    "./node_modules/css-loader/dist/runtime/api.js": (module) => {
      "use strict";
      module.exports = function (cssWithMappingToString) {
        var list = [];
        return (
          (list.toString = function toString() {
            return this.map(function (item) {
              var content = "",
                needLayer = void 0 !== item[5];
              return (
                item[4] && (content += "@supports (".concat(item[4], ") {")),
                item[2] && (content += "@media ".concat(item[2], " {")),
                needLayer &&
                  (content += "@layer".concat(
                    item[5].length > 0 ? " ".concat(item[5]) : "",
                    " {"
                  )),
                (content += cssWithMappingToString(item)),
                needLayer && (content += "}"),
                item[2] && (content += "}"),
                item[4] && (content += "}"),
                content
              );
            }).join("");
          }),
          (list.i = function i(modules, media, dedupe, supports, layer) {
            "string" == typeof modules && (modules = [[null, modules, void 0]]);
            var alreadyImportedModules = {};
            if (dedupe)
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                null != id && (alreadyImportedModules[id] = !0);
              }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);
              (dedupe && alreadyImportedModules[item[0]]) ||
                (void 0 !== layer &&
                  (void 0 === item[5] ||
                    (item[1] = "@layer"
                      .concat(
                        item[5].length > 0 ? " ".concat(item[5]) : "",
                        " {"
                      )
                      .concat(item[1], "}")),
                  (item[5] = layer)),
                media &&
                  (item[2]
                    ? ((item[1] = "@media "
                        .concat(item[2], " {")
                        .concat(item[1], "}")),
                      (item[2] = media))
                    : (item[2] = media)),
                supports &&
                  (item[4]
                    ? ((item[1] = "@supports ("
                        .concat(item[4], ") {")
                        .concat(item[1], "}")),
                      (item[4] = supports))
                    : (item[4] = "".concat(supports))),
                list.push(item));
            }
          }),
          list
        );
      };
    },
    "./node_modules/css-loader/dist/runtime/sourceMaps.js": (module) => {
      "use strict";
      module.exports = function (item) {
        var content = item[1],
          cssMapping = item[3];
        if (!cssMapping) return content;
        if ("function" == typeof btoa) {
          var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            ),
            data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              ),
            sourceMapping = "/*# ".concat(data, " */");
          return [content].concat([sourceMapping]).join("\n");
        }
        return [content].join("\n");
      };
    },
    "./node_modules/es-get-iterator/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var process = __webpack_require__("./node_modules/process/browser.js"),
        isArguments = __webpack_require__(
          "./node_modules/is-arguments/index.js"
        ),
        getStopIterationIterator = __webpack_require__(
          "./node_modules/stop-iteration-iterator/index.js"
        );
      if (
        __webpack_require__("./node_modules/has-symbols/index.js")() ||
        __webpack_require__("./node_modules/has-symbols/shams.js")()
      ) {
        var $iterator = Symbol.iterator;
        module.exports = function getIterator(iterable) {
          return null != iterable && void 0 !== iterable[$iterator]
            ? iterable[$iterator]()
            : isArguments(iterable)
            ? Array.prototype[$iterator].call(iterable)
            : void 0;
        };
      } else {
        var isArray = __webpack_require__("./node_modules/isarray/index.js"),
          isString = __webpack_require__("./node_modules/is-string/index.js"),
          GetIntrinsic = __webpack_require__(
            "./node_modules/get-intrinsic/index.js"
          ),
          $Map = GetIntrinsic("%Map%", !0),
          $Set = GetIntrinsic("%Set%", !0),
          callBound = __webpack_require__(
            "./node_modules/call-bind/callBound.js"
          ),
          $arrayPush = callBound("Array.prototype.push"),
          $charCodeAt = callBound("String.prototype.charCodeAt"),
          $stringSlice = callBound("String.prototype.slice"),
          getArrayIterator = function getArrayIterator(arraylike) {
            var i = 0;
            return {
              next: function next() {
                var value,
                  done = i >= arraylike.length;
                return (
                  done || ((value = arraylike[i]), (i += 1)), { done, value }
                );
              },
            };
          },
          getNonCollectionIterator = function getNonCollectionIterator(
            iterable,
            noPrimordialCollections
          ) {
            if (isArray(iterable) || isArguments(iterable))
              return getArrayIterator(iterable);
            if (isString(iterable)) {
              var i = 0;
              return {
                next: function next() {
                  var nextIndex = (function advanceStringIndex(S, index) {
                      if (index + 1 >= S.length) return index + 1;
                      var first = $charCodeAt(S, index);
                      if (first < 55296 || first > 56319) return index + 1;
                      var second = $charCodeAt(S, index + 1);
                      return second < 56320 || second > 57343
                        ? index + 1
                        : index + 2;
                    })(iterable, i),
                    value = $stringSlice(iterable, i, nextIndex);
                  return (
                    (i = nextIndex),
                    { done: nextIndex > iterable.length, value }
                  );
                },
              };
            }
            return noPrimordialCollections &&
              void 0 !== iterable["_es6-shim iterator_"]
              ? iterable["_es6-shim iterator_"]()
              : void 0;
          };
        if ($Map || $Set) {
          var isMap = __webpack_require__("./node_modules/is-map/index.js"),
            isSet = __webpack_require__("./node_modules/is-set/index.js"),
            $mapForEach = callBound("Map.prototype.forEach", !0),
            $setForEach = callBound("Set.prototype.forEach", !0);
          if (void 0 === process || !process.versions || !process.versions.node)
            var $mapIterator = callBound("Map.prototype.iterator", !0),
              $setIterator = callBound("Set.prototype.iterator", !0);
          var $mapAtAtIterator =
              callBound("Map.prototype.@@iterator", !0) ||
              callBound("Map.prototype._es6-shim iterator_", !0),
            $setAtAtIterator =
              callBound("Set.prototype.@@iterator", !0) ||
              callBound("Set.prototype._es6-shim iterator_", !0);
          module.exports = function getIterator(iterable) {
            return (
              (function getCollectionIterator(iterable) {
                if (isMap(iterable)) {
                  if ($mapIterator)
                    return getStopIterationIterator($mapIterator(iterable));
                  if ($mapAtAtIterator) return $mapAtAtIterator(iterable);
                  if ($mapForEach) {
                    var entries = [];
                    return (
                      $mapForEach(iterable, function (v, k) {
                        $arrayPush(entries, [k, v]);
                      }),
                      getArrayIterator(entries)
                    );
                  }
                }
                if (isSet(iterable)) {
                  if ($setIterator)
                    return getStopIterationIterator($setIterator(iterable));
                  if ($setAtAtIterator) return $setAtAtIterator(iterable);
                  if ($setForEach) {
                    var values = [];
                    return (
                      $setForEach(iterable, function (v) {
                        $arrayPush(values, v);
                      }),
                      getArrayIterator(values)
                    );
                  }
                }
              })(iterable) || getNonCollectionIterator(iterable)
            );
          };
        } else
          module.exports = function getIterator(iterable) {
            if (null != iterable) return getNonCollectionIterator(iterable, !0);
          };
      }
    },
    "./node_modules/functions-have-names/index.js": (module) => {
      "use strict";
      var functionsHaveNames = function functionsHaveNames() {
          return "string" == typeof function f() {}.name;
        },
        gOPD = Object.getOwnPropertyDescriptor;
      if (gOPD)
        try {
          gOPD([], "length");
        } catch (e) {
          gOPD = null;
        }
      functionsHaveNames.functionsHaveConfigurableNames =
        function functionsHaveConfigurableNames() {
          if (!functionsHaveNames() || !gOPD) return !1;
          var desc = gOPD(function () {}, "name");
          return !!desc && !!desc.configurable;
        };
      var $bind = Function.prototype.bind;
      (functionsHaveNames.boundFunctionsHaveNames =
        function boundFunctionsHaveNames() {
          return (
            functionsHaveNames() &&
            "function" == typeof $bind &&
            "" !== function f() {}.bind().name
          );
        }),
        (module.exports = functionsHaveNames);
    },
    "./node_modules/has-bigints/index.js": (module) => {
      "use strict";
      var $BigInt = "undefined" != typeof BigInt && BigInt;
      module.exports = function hasNativeBigInts() {
        return (
          "function" == typeof $BigInt &&
          "function" == typeof BigInt &&
          "bigint" == typeof $BigInt(42) &&
          "bigint" == typeof BigInt(42)
        );
      };
    },
    "./node_modules/is-array-buffer/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var callBind = __webpack_require__("./node_modules/call-bind/index.js"),
        callBound = __webpack_require__(
          "./node_modules/call-bind/callBound.js"
        ),
        GetIntrinsic = __webpack_require__(
          "./node_modules/get-intrinsic/index.js"
        ),
        isTypedArray = __webpack_require__(
          "./node_modules/is-typed-array/index.js"
        ),
        $ArrayBuffer = GetIntrinsic("ArrayBuffer", !0),
        $Float32Array = GetIntrinsic("Float32Array", !0),
        $byteLength = callBound("ArrayBuffer.prototype.byteLength", !0),
        abSlice = $ArrayBuffer && !$byteLength && new $ArrayBuffer().slice,
        $abSlice = abSlice && callBind(abSlice);
      module.exports =
        $byteLength || $abSlice
          ? function isArrayBuffer(obj) {
              if (!obj || "object" != typeof obj) return !1;
              try {
                return $byteLength ? $byteLength(obj) : $abSlice(obj, 0), !0;
              } catch (e) {
                return !1;
              }
            }
          : $Float32Array
          ? function IsArrayBuffer(obj) {
              try {
                return (
                  new $Float32Array(obj).buffer === obj && !isTypedArray(obj)
                );
              } catch (e) {
                return !1;
              }
            }
          : function isArrayBuffer(obj) {
              return !1;
            };
    },
    "./node_modules/is-bigint/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      if (__webpack_require__("./node_modules/has-bigints/index.js")()) {
        var bigIntValueOf = BigInt.prototype.valueOf;
        module.exports = function isBigInt(value) {
          return (
            null != value &&
            "boolean" != typeof value &&
            "string" != typeof value &&
            "number" != typeof value &&
            "symbol" != typeof value &&
            "function" != typeof value &&
            ("bigint" == typeof value ||
              (function tryBigIntObject(value) {
                try {
                  return bigIntValueOf.call(value), !0;
                } catch (e) {}
                return !1;
              })(value))
          );
        };
      } else
        module.exports = function isBigInt(value) {
          return !1;
        };
    },
    "./node_modules/is-boolean-object/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var callBound = __webpack_require__(
          "./node_modules/call-bind/callBound.js"
        ),
        $boolToStr = callBound("Boolean.prototype.toString"),
        $toString = callBound("Object.prototype.toString"),
        hasToStringTag = __webpack_require__(
          "./node_modules/has-tostringtag/shams.js"
        )();
      module.exports = function isBoolean(value) {
        return (
          "boolean" == typeof value ||
          (null !== value &&
            "object" == typeof value &&
            (hasToStringTag && Symbol.toStringTag in value
              ? (function booleanBrandCheck(value) {
                  try {
                    return $boolToStr(value), !0;
                  } catch (e) {
                    return !1;
                  }
                })(value)
              : "[object Boolean]" === $toString(value)))
        );
      };
    },
    "./node_modules/is-date-object/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var getDay = Date.prototype.getDay,
        toStr = Object.prototype.toString,
        hasToStringTag = __webpack_require__(
          "./node_modules/has-tostringtag/shams.js"
        )();
      module.exports = function isDateObject(value) {
        return (
          "object" == typeof value &&
          null !== value &&
          (hasToStringTag
            ? (function tryDateGetDayCall(value) {
                try {
                  return getDay.call(value), !0;
                } catch (e) {
                  return !1;
                }
              })(value)
            : "[object Date]" === toStr.call(value))
        );
      };
    },
    "./node_modules/is-map/index.js": (module) => {
      "use strict";
      var exported,
        $Map = "function" == typeof Map && Map.prototype ? Map : null,
        $Set = "function" == typeof Set && Set.prototype ? Set : null;
      $Map ||
        (exported = function isMap(x) {
          return !1;
        });
      var $mapHas = $Map ? Map.prototype.has : null,
        $setHas = $Set ? Set.prototype.has : null;
      exported ||
        $mapHas ||
        (exported = function isMap(x) {
          return !1;
        }),
        (module.exports =
          exported ||
          function isMap(x) {
            if (!x || "object" != typeof x) return !1;
            try {
              if (($mapHas.call(x), $setHas))
                try {
                  $setHas.call(x);
                } catch (e) {
                  return !0;
                }
              return x instanceof $Map;
            } catch (e) {}
            return !1;
          });
    },
    "./node_modules/is-number-object/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var numToStr = Number.prototype.toString,
        toStr = Object.prototype.toString,
        hasToStringTag = __webpack_require__(
          "./node_modules/has-tostringtag/shams.js"
        )();
      module.exports = function isNumberObject(value) {
        return (
          "number" == typeof value ||
          ("object" == typeof value &&
            (hasToStringTag
              ? (function tryNumberObject(value) {
                  try {
                    return numToStr.call(value), !0;
                  } catch (e) {
                    return !1;
                  }
                })(value)
              : "[object Number]" === toStr.call(value)))
        );
      };
    },
    "./node_modules/is-regex/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var has,
        $exec,
        isRegexMarker,
        badStringifier,
        callBound = __webpack_require__(
          "./node_modules/call-bind/callBound.js"
        ),
        hasToStringTag = __webpack_require__(
          "./node_modules/has-tostringtag/shams.js"
        )();
      if (hasToStringTag) {
        (has = callBound("Object.prototype.hasOwnProperty")),
          ($exec = callBound("RegExp.prototype.exec")),
          (isRegexMarker = {});
        var throwRegexMarker = function () {
          throw isRegexMarker;
        };
        (badStringifier = {
          toString: throwRegexMarker,
          valueOf: throwRegexMarker,
        }),
          "symbol" == typeof Symbol.toPrimitive &&
            (badStringifier[Symbol.toPrimitive] = throwRegexMarker);
      }
      var $toString = callBound("Object.prototype.toString"),
        gOPD = Object.getOwnPropertyDescriptor;
      module.exports = hasToStringTag
        ? function isRegex(value) {
            if (!value || "object" != typeof value) return !1;
            var descriptor = gOPD(value, "lastIndex");
            if (!(descriptor && has(descriptor, "value"))) return !1;
            try {
              $exec(value, badStringifier);
            } catch (e) {
              return e === isRegexMarker;
            }
          }
        : function isRegex(value) {
            return (
              !(
                !value ||
                ("object" != typeof value && "function" != typeof value)
              ) && "[object RegExp]" === $toString(value)
            );
          };
    },
    "./node_modules/is-set/index.js": (module) => {
      "use strict";
      var exported,
        $Map = "function" == typeof Map && Map.prototype ? Map : null,
        $Set = "function" == typeof Set && Set.prototype ? Set : null;
      $Set ||
        (exported = function isSet(x) {
          return !1;
        });
      var $mapHas = $Map ? Map.prototype.has : null,
        $setHas = $Set ? Set.prototype.has : null;
      exported ||
        $setHas ||
        (exported = function isSet(x) {
          return !1;
        }),
        (module.exports =
          exported ||
          function isSet(x) {
            if (!x || "object" != typeof x) return !1;
            try {
              if (($setHas.call(x), $mapHas))
                try {
                  $mapHas.call(x);
                } catch (e) {
                  return !0;
                }
              return x instanceof $Set;
            } catch (e) {}
            return !1;
          });
    },
    "./node_modules/is-shared-array-buffer/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var $byteLength = __webpack_require__(
        "./node_modules/call-bind/callBound.js"
      )("SharedArrayBuffer.prototype.byteLength", !0);
      module.exports = $byteLength
        ? function isSharedArrayBuffer(obj) {
            if (!obj || "object" != typeof obj) return !1;
            try {
              return $byteLength(obj), !0;
            } catch (e) {
              return !1;
            }
          }
        : function isSharedArrayBuffer(obj) {
            return !1;
          };
    },
    "./node_modules/is-string/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var strValue = String.prototype.valueOf,
        toStr = Object.prototype.toString,
        hasToStringTag = __webpack_require__(
          "./node_modules/has-tostringtag/shams.js"
        )();
      module.exports = function isString(value) {
        return (
          "string" == typeof value ||
          ("object" == typeof value &&
            (hasToStringTag
              ? (function tryStringObject(value) {
                  try {
                    return strValue.call(value), !0;
                  } catch (e) {
                    return !1;
                  }
                })(value)
              : "[object String]" === toStr.call(value)))
        );
      };
    },
    "./node_modules/is-symbol/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var toStr = Object.prototype.toString;
      if (__webpack_require__("./node_modules/has-symbols/index.js")()) {
        var symToStr = Symbol.prototype.toString,
          symStringRegex = /^Symbol\(.*\)$/;
        module.exports = function isSymbol(value) {
          if ("symbol" == typeof value) return !0;
          if ("[object Symbol]" !== toStr.call(value)) return !1;
          try {
            return (function isRealSymbolObject(value) {
              return (
                "symbol" == typeof value.valueOf() &&
                symStringRegex.test(symToStr.call(value))
              );
            })(value);
          } catch (e) {
            return !1;
          }
        };
      } else
        module.exports = function isSymbol(value) {
          return !1;
        };
    },
    "./node_modules/is-weakmap/index.js": (module) => {
      "use strict";
      var exported,
        $WeakMap =
          "function" == typeof WeakMap && WeakMap.prototype ? WeakMap : null,
        $WeakSet =
          "function" == typeof WeakSet && WeakSet.prototype ? WeakSet : null;
      $WeakMap ||
        (exported = function isWeakMap(x) {
          return !1;
        });
      var $mapHas = $WeakMap ? $WeakMap.prototype.has : null,
        $setHas = $WeakSet ? $WeakSet.prototype.has : null;
      exported ||
        $mapHas ||
        (exported = function isWeakMap(x) {
          return !1;
        }),
        (module.exports =
          exported ||
          function isWeakMap(x) {
            if (!x || "object" != typeof x) return !1;
            try {
              if (($mapHas.call(x, $mapHas), $setHas))
                try {
                  $setHas.call(x, $setHas);
                } catch (e) {
                  return !0;
                }
              return x instanceof $WeakMap;
            } catch (e) {}
            return !1;
          });
    },
    "./node_modules/is-weakset/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var GetIntrinsic = __webpack_require__(
          "./node_modules/is-weakset/node_modules/get-intrinsic/index.js"
        ),
        callBound = __webpack_require__(
          "./node_modules/call-bind/callBound.js"
        ),
        $WeakSet = GetIntrinsic("%WeakSet%", !0),
        $setHas = callBound("WeakSet.prototype.has", !0);
      if ($setHas) {
        var $mapHas = callBound("WeakMap.prototype.has", !0);
        module.exports = function isWeakSet(x) {
          if (!x || "object" != typeof x) return !1;
          try {
            if (($setHas(x, $setHas), $mapHas))
              try {
                $mapHas(x, $mapHas);
              } catch (e) {
                return !0;
              }
            return x instanceof $WeakSet;
          } catch (e) {}
          return !1;
        };
      } else
        module.exports = function isWeakSet(x) {
          return !1;
        };
    },
    "./node_modules/is-weakset/node_modules/get-intrinsic/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var $SyntaxError = SyntaxError,
        $Function = Function,
        $TypeError = TypeError,
        getEvalledConstructor = function (expressionSyntax) {
          try {
            return $Function(
              '"use strict"; return (' + expressionSyntax + ").constructor;"
            )();
          } catch (e) {}
        },
        $gOPD = Object.getOwnPropertyDescriptor;
      if ($gOPD)
        try {
          $gOPD({}, "");
        } catch (e) {
          $gOPD = null;
        }
      var throwTypeError = function () {
          throw new $TypeError();
        },
        ThrowTypeError = $gOPD
          ? (function () {
              try {
                return throwTypeError;
              } catch (calleeThrows) {
                try {
                  return $gOPD(arguments, "callee").get;
                } catch (gOPDthrows) {
                  return throwTypeError;
                }
              }
            })()
          : throwTypeError,
        hasSymbols = __webpack_require__(
          "./node_modules/has-symbols/index.js"
        )(),
        getProto =
          Object.getPrototypeOf ||
          function (x) {
            return x.__proto__;
          },
        needsEval = {},
        TypedArray =
          "undefined" == typeof Uint8Array ? undefined : getProto(Uint8Array),
        INTRINSICS = {
          "%AggregateError%":
            "undefined" == typeof AggregateError ? undefined : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%":
            "undefined" == typeof ArrayBuffer ? undefined : ArrayBuffer,
          "%ArrayIteratorPrototype%": hasSymbols
            ? getProto([][Symbol.iterator]())
            : undefined,
          "%AsyncFromSyncIteratorPrototype%": undefined,
          "%AsyncFunction%": needsEval,
          "%AsyncGenerator%": needsEval,
          "%AsyncGeneratorFunction%": needsEval,
          "%AsyncIteratorPrototype%": needsEval,
          "%Atomics%": "undefined" == typeof Atomics ? undefined : Atomics,
          "%BigInt%": "undefined" == typeof BigInt ? undefined : BigInt,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" == typeof DataView ? undefined : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%":
            "undefined" == typeof Float32Array ? undefined : Float32Array,
          "%Float64Array%":
            "undefined" == typeof Float64Array ? undefined : Float64Array,
          "%FinalizationRegistry%":
            "undefined" == typeof FinalizationRegistry
              ? undefined
              : FinalizationRegistry,
          "%Function%": $Function,
          "%GeneratorFunction%": needsEval,
          "%Int8Array%":
            "undefined" == typeof Int8Array ? undefined : Int8Array,
          "%Int16Array%":
            "undefined" == typeof Int16Array ? undefined : Int16Array,
          "%Int32Array%":
            "undefined" == typeof Int32Array ? undefined : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": hasSymbols
            ? getProto(getProto([][Symbol.iterator]()))
            : undefined,
          "%JSON%": "object" == typeof JSON ? JSON : undefined,
          "%Map%": "undefined" == typeof Map ? undefined : Map,
          "%MapIteratorPrototype%":
            "undefined" != typeof Map && hasSymbols
              ? getProto(new Map()[Symbol.iterator]())
              : undefined,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? undefined : Promise,
          "%Proxy%": "undefined" == typeof Proxy ? undefined : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": "undefined" == typeof Reflect ? undefined : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" == typeof Set ? undefined : Set,
          "%SetIteratorPrototype%":
            "undefined" != typeof Set && hasSymbols
              ? getProto(new Set()[Symbol.iterator]())
              : undefined,
          "%SharedArrayBuffer%":
            "undefined" == typeof SharedArrayBuffer
              ? undefined
              : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": hasSymbols
            ? getProto(""[Symbol.iterator]())
            : undefined,
          "%Symbol%": hasSymbols ? Symbol : undefined,
          "%SyntaxError%": $SyntaxError,
          "%ThrowTypeError%": ThrowTypeError,
          "%TypedArray%": TypedArray,
          "%TypeError%": $TypeError,
          "%Uint8Array%":
            "undefined" == typeof Uint8Array ? undefined : Uint8Array,
          "%Uint8ClampedArray%":
            "undefined" == typeof Uint8ClampedArray
              ? undefined
              : Uint8ClampedArray,
          "%Uint16Array%":
            "undefined" == typeof Uint16Array ? undefined : Uint16Array,
          "%Uint32Array%":
            "undefined" == typeof Uint32Array ? undefined : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": "undefined" == typeof WeakMap ? undefined : WeakMap,
          "%WeakRef%": "undefined" == typeof WeakRef ? undefined : WeakRef,
          "%WeakSet%": "undefined" == typeof WeakSet ? undefined : WeakSet,
        },
        doEval = function doEval(name) {
          var value;
          if ("%AsyncFunction%" === name)
            value = getEvalledConstructor("async function () {}");
          else if ("%GeneratorFunction%" === name)
            value = getEvalledConstructor("function* () {}");
          else if ("%AsyncGeneratorFunction%" === name)
            value = getEvalledConstructor("async function* () {}");
          else if ("%AsyncGenerator%" === name) {
            var fn = doEval("%AsyncGeneratorFunction%");
            fn && (value = fn.prototype);
          } else if ("%AsyncIteratorPrototype%" === name) {
            var gen = doEval("%AsyncGenerator%");
            gen && (value = getProto(gen.prototype));
          }
          return (INTRINSICS[name] = value), value;
        },
        LEGACY_ALIASES = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        bind = __webpack_require__("./node_modules/function-bind/index.js"),
        hasOwn = __webpack_require__("./node_modules/has/src/index.js"),
        $concat = bind.call(Function.call, Array.prototype.concat),
        $spliceApply = bind.call(Function.apply, Array.prototype.splice),
        $replace = bind.call(Function.call, String.prototype.replace),
        $strSlice = bind.call(Function.call, String.prototype.slice),
        rePropName =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        reEscapeChar = /\\(\\)?/g,
        getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
          var alias,
            intrinsicName = name;
          if (
            (hasOwn(LEGACY_ALIASES, intrinsicName) &&
              (intrinsicName =
                "%" + (alias = LEGACY_ALIASES[intrinsicName])[0] + "%"),
            hasOwn(INTRINSICS, intrinsicName))
          ) {
            var value = INTRINSICS[intrinsicName];
            if (
              (value === needsEval && (value = doEval(intrinsicName)),
              void 0 === value && !allowMissing)
            )
              throw new $TypeError(
                "intrinsic " +
                  name +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias, name: intrinsicName, value };
          }
          throw new $SyntaxError("intrinsic " + name + " does not exist!");
        };
      module.exports = function GetIntrinsic(name, allowMissing) {
        if ("string" != typeof name || 0 === name.length)
          throw new $TypeError("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof allowMissing)
          throw new $TypeError('"allowMissing" argument must be a boolean');
        var parts = (function stringToPath(string) {
            var first = $strSlice(string, 0, 1),
              last = $strSlice(string, -1);
            if ("%" === first && "%" !== last)
              throw new $SyntaxError(
                "invalid intrinsic syntax, expected closing `%`"
              );
            if ("%" === last && "%" !== first)
              throw new $SyntaxError(
                "invalid intrinsic syntax, expected opening `%`"
              );
            var result = [];
            return (
              $replace(
                string,
                rePropName,
                function (match, number, quote, subString) {
                  result[result.length] = quote
                    ? $replace(subString, reEscapeChar, "$1")
                    : number || match;
                }
              ),
              result
            );
          })(name),
          intrinsicBaseName = parts.length > 0 ? parts[0] : "",
          intrinsic = getBaseIntrinsic(
            "%" + intrinsicBaseName + "%",
            allowMissing
          ),
          intrinsicRealName = intrinsic.name,
          value = intrinsic.value,
          skipFurtherCaching = !1,
          alias = intrinsic.alias;
        alias &&
          ((intrinsicBaseName = alias[0]),
          $spliceApply(parts, $concat([0, 1], alias)));
        for (var i = 1, isOwn = !0; i < parts.length; i += 1) {
          var part = parts[i],
            first = $strSlice(part, 0, 1),
            last = $strSlice(part, -1);
          if (
            ('"' === first ||
              "'" === first ||
              "`" === first ||
              '"' === last ||
              "'" === last ||
              "`" === last) &&
            first !== last
          )
            throw new $SyntaxError(
              "property names with quotes must have matching quotes"
            );
          if (
            (("constructor" !== part && isOwn) || (skipFurtherCaching = !0),
            hasOwn(
              INTRINSICS,
              (intrinsicRealName =
                "%" + (intrinsicBaseName += "." + part) + "%")
            ))
          )
            value = INTRINSICS[intrinsicRealName];
          else if (null != value) {
            if (!(part in value)) {
              if (!allowMissing)
                throw new $TypeError(
                  "base intrinsic for " +
                    name +
                    " exists, but the property is not available."
                );
              return;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              value =
                (isOwn = !!desc) &&
                "get" in desc &&
                !("originalValue" in desc.get)
                  ? desc.get
                  : value[part];
            } else (isOwn = hasOwn(value, part)), (value = value[part]);
            isOwn &&
              !skipFurtherCaching &&
              (INTRINSICS[intrinsicRealName] = value);
          }
        }
        return value;
      };
    },
    "./node_modules/isarray/index.js": (module) => {
      var toString = {}.toString;
      module.exports =
        Array.isArray ||
        function (arr) {
          return "[object Array]" == toString.call(arr);
        };
    },
    "./node_modules/lz-string/libs/lz-string.js": (
      module,
      exports,
      __webpack_require__
    ) => {
      var __WEBPACK_AMD_DEFINE_RESULT__,
        LZString = (function () {
          var f = String.fromCharCode,
            keyStrBase64 =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            keyStrUriSafe =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
            baseReverseDic = {};
          function getBaseValue(alphabet, character) {
            if (!baseReverseDic[alphabet]) {
              baseReverseDic[alphabet] = {};
              for (var i = 0; i < alphabet.length; i++)
                baseReverseDic[alphabet][alphabet.charAt(i)] = i;
            }
            return baseReverseDic[alphabet][character];
          }
          var LZString = {
            compressToBase64: function (input) {
              if (null == input) return "";
              var res = LZString._compress(input, 6, function (a) {
                return keyStrBase64.charAt(a);
              });
              switch (res.length % 4) {
                default:
                case 0:
                  return res;
                case 1:
                  return res + "===";
                case 2:
                  return res + "==";
                case 3:
                  return res + "=";
              }
            },
            decompressFromBase64: function (input) {
              return null == input
                ? ""
                : "" == input
                ? null
                : LZString._decompress(input.length, 32, function (index) {
                    return getBaseValue(keyStrBase64, input.charAt(index));
                  });
            },
            compressToUTF16: function (input) {
              return null == input
                ? ""
                : LZString._compress(input, 15, function (a) {
                    return f(a + 32);
                  }) + " ";
            },
            decompressFromUTF16: function (compressed) {
              return null == compressed
                ? ""
                : "" == compressed
                ? null
                : LZString._decompress(
                    compressed.length,
                    16384,
                    function (index) {
                      return compressed.charCodeAt(index) - 32;
                    }
                  );
            },
            compressToUint8Array: function (uncompressed) {
              for (
                var compressed = LZString.compress(uncompressed),
                  buf = new Uint8Array(2 * compressed.length),
                  i = 0,
                  TotalLen = compressed.length;
                i < TotalLen;
                i++
              ) {
                var current_value = compressed.charCodeAt(i);
                (buf[2 * i] = current_value >>> 8),
                  (buf[2 * i + 1] = current_value % 256);
              }
              return buf;
            },
            decompressFromUint8Array: function (compressed) {
              if (null == compressed) return LZString.decompress(compressed);
              for (
                var buf = new Array(compressed.length / 2),
                  i = 0,
                  TotalLen = buf.length;
                i < TotalLen;
                i++
              )
                buf[i] = 256 * compressed[2 * i] + compressed[2 * i + 1];
              var result = [];
              return (
                buf.forEach(function (c) {
                  result.push(f(c));
                }),
                LZString.decompress(result.join(""))
              );
            },
            compressToEncodedURIComponent: function (input) {
              return null == input
                ? ""
                : LZString._compress(input, 6, function (a) {
                    return keyStrUriSafe.charAt(a);
                  });
            },
            decompressFromEncodedURIComponent: function (input) {
              return null == input
                ? ""
                : "" == input
                ? null
                : ((input = input.replace(/ /g, "+")),
                  LZString._decompress(input.length, 32, function (index) {
                    return getBaseValue(keyStrUriSafe, input.charAt(index));
                  }));
            },
            compress: function (uncompressed) {
              return LZString._compress(uncompressed, 16, function (a) {
                return f(a);
              });
            },
            _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
              if (null == uncompressed) return "";
              var i,
                value,
                ii,
                context_dictionary = {},
                context_dictionaryToCreate = {},
                context_c = "",
                context_wc = "",
                context_w = "",
                context_enlargeIn = 2,
                context_dictSize = 3,
                context_numBits = 2,
                context_data = [],
                context_data_val = 0,
                context_data_position = 0;
              for (ii = 0; ii < uncompressed.length; ii += 1)
                if (
                  ((context_c = uncompressed.charAt(ii)),
                  Object.prototype.hasOwnProperty.call(
                    context_dictionary,
                    context_c
                  ) ||
                    ((context_dictionary[context_c] = context_dictSize++),
                    (context_dictionaryToCreate[context_c] = !0)),
                  (context_wc = context_w + context_c),
                  Object.prototype.hasOwnProperty.call(
                    context_dictionary,
                    context_wc
                  ))
                )
                  context_w = context_wc;
                else {
                  if (
                    Object.prototype.hasOwnProperty.call(
                      context_dictionaryToCreate,
                      context_w
                    )
                  ) {
                    if (context_w.charCodeAt(0) < 256) {
                      for (i = 0; i < context_numBits; i++)
                        (context_data_val <<= 1),
                          context_data_position == bitsPerChar - 1
                            ? ((context_data_position = 0),
                              context_data.push(
                                getCharFromInt(context_data_val)
                              ),
                              (context_data_val = 0))
                            : context_data_position++;
                      for (value = context_w.charCodeAt(0), i = 0; i < 8; i++)
                        (context_data_val =
                          (context_data_val << 1) | (1 & value)),
                          context_data_position == bitsPerChar - 1
                            ? ((context_data_position = 0),
                              context_data.push(
                                getCharFromInt(context_data_val)
                              ),
                              (context_data_val = 0))
                            : context_data_position++,
                          (value >>= 1);
                    } else {
                      for (value = 1, i = 0; i < context_numBits; i++)
                        (context_data_val = (context_data_val << 1) | value),
                          context_data_position == bitsPerChar - 1
                            ? ((context_data_position = 0),
                              context_data.push(
                                getCharFromInt(context_data_val)
                              ),
                              (context_data_val = 0))
                            : context_data_position++,
                          (value = 0);
                      for (value = context_w.charCodeAt(0), i = 0; i < 16; i++)
                        (context_data_val =
                          (context_data_val << 1) | (1 & value)),
                          context_data_position == bitsPerChar - 1
                            ? ((context_data_position = 0),
                              context_data.push(
                                getCharFromInt(context_data_val)
                              ),
                              (context_data_val = 0))
                            : context_data_position++,
                          (value >>= 1);
                    }
                    0 == --context_enlargeIn &&
                      ((context_enlargeIn = Math.pow(2, context_numBits)),
                      context_numBits++),
                      delete context_dictionaryToCreate[context_w];
                  } else
                    for (
                      value = context_dictionary[context_w], i = 0;
                      i < context_numBits;
                      i++
                    )
                      (context_data_val =
                        (context_data_val << 1) | (1 & value)),
                        context_data_position == bitsPerChar - 1
                          ? ((context_data_position = 0),
                            context_data.push(getCharFromInt(context_data_val)),
                            (context_data_val = 0))
                          : context_data_position++,
                        (value >>= 1);
                  0 == --context_enlargeIn &&
                    ((context_enlargeIn = Math.pow(2, context_numBits)),
                    context_numBits++),
                    (context_dictionary[context_wc] = context_dictSize++),
                    (context_w = String(context_c));
                }
              if ("" !== context_w) {
                if (
                  Object.prototype.hasOwnProperty.call(
                    context_dictionaryToCreate,
                    context_w
                  )
                ) {
                  if (context_w.charCodeAt(0) < 256) {
                    for (i = 0; i < context_numBits; i++)
                      (context_data_val <<= 1),
                        context_data_position == bitsPerChar - 1
                          ? ((context_data_position = 0),
                            context_data.push(getCharFromInt(context_data_val)),
                            (context_data_val = 0))
                          : context_data_position++;
                    for (value = context_w.charCodeAt(0), i = 0; i < 8; i++)
                      (context_data_val =
                        (context_data_val << 1) | (1 & value)),
                        context_data_position == bitsPerChar - 1
                          ? ((context_data_position = 0),
                            context_data.push(getCharFromInt(context_data_val)),
                            (context_data_val = 0))
                          : context_data_position++,
                        (value >>= 1);
                  } else {
                    for (value = 1, i = 0; i < context_numBits; i++)
                      (context_data_val = (context_data_val << 1) | value),
                        context_data_position == bitsPerChar - 1
                          ? ((context_data_position = 0),
                            context_data.push(getCharFromInt(context_data_val)),
                            (context_data_val = 0))
                          : context_data_position++,
                        (value = 0);
                    for (value = context_w.charCodeAt(0), i = 0; i < 16; i++)
                      (context_data_val =
                        (context_data_val << 1) | (1 & value)),
                        context_data_position == bitsPerChar - 1
                          ? ((context_data_position = 0),
                            context_data.push(getCharFromInt(context_data_val)),
                            (context_data_val = 0))
                          : context_data_position++,
                        (value >>= 1);
                  }
                  0 == --context_enlargeIn &&
                    ((context_enlargeIn = Math.pow(2, context_numBits)),
                    context_numBits++),
                    delete context_dictionaryToCreate[context_w];
                } else
                  for (
                    value = context_dictionary[context_w], i = 0;
                    i < context_numBits;
                    i++
                  )
                    (context_data_val = (context_data_val << 1) | (1 & value)),
                      context_data_position == bitsPerChar - 1
                        ? ((context_data_position = 0),
                          context_data.push(getCharFromInt(context_data_val)),
                          (context_data_val = 0))
                        : context_data_position++,
                      (value >>= 1);
                0 == --context_enlargeIn &&
                  ((context_enlargeIn = Math.pow(2, context_numBits)),
                  context_numBits++);
              }
              for (value = 2, i = 0; i < context_numBits; i++)
                (context_data_val = (context_data_val << 1) | (1 & value)),
                  context_data_position == bitsPerChar - 1
                    ? ((context_data_position = 0),
                      context_data.push(getCharFromInt(context_data_val)),
                      (context_data_val = 0))
                    : context_data_position++,
                  (value >>= 1);
              for (;;) {
                if (
                  ((context_data_val <<= 1),
                  context_data_position == bitsPerChar - 1)
                ) {
                  context_data.push(getCharFromInt(context_data_val));
                  break;
                }
                context_data_position++;
              }
              return context_data.join("");
            },
            decompress: function (compressed) {
              return null == compressed
                ? ""
                : "" == compressed
                ? null
                : LZString._decompress(
                    compressed.length,
                    32768,
                    function (index) {
                      return compressed.charCodeAt(index);
                    }
                  );
            },
            _decompress: function (length, resetValue, getNextValue) {
              var i,
                w,
                bits,
                resb,
                maxpower,
                power,
                c,
                dictionary = [],
                enlargeIn = 4,
                dictSize = 4,
                numBits = 3,
                entry = "",
                result = [],
                data = { val: getNextValue(0), position: resetValue, index: 1 };
              for (i = 0; i < 3; i += 1) dictionary[i] = i;
              for (
                bits = 0, maxpower = Math.pow(2, 2), power = 1;
                power != maxpower;

              )
                (resb = data.val & data.position),
                  (data.position >>= 1),
                  0 == data.position &&
                    ((data.position = resetValue),
                    (data.val = getNextValue(data.index++))),
                  (bits |= (resb > 0 ? 1 : 0) * power),
                  (power <<= 1);
              switch (bits) {
                case 0:
                  for (
                    bits = 0, maxpower = Math.pow(2, 8), power = 1;
                    power != maxpower;

                  )
                    (resb = data.val & data.position),
                      (data.position >>= 1),
                      0 == data.position &&
                        ((data.position = resetValue),
                        (data.val = getNextValue(data.index++))),
                      (bits |= (resb > 0 ? 1 : 0) * power),
                      (power <<= 1);
                  c = f(bits);
                  break;
                case 1:
                  for (
                    bits = 0, maxpower = Math.pow(2, 16), power = 1;
                    power != maxpower;

                  )
                    (resb = data.val & data.position),
                      (data.position >>= 1),
                      0 == data.position &&
                        ((data.position = resetValue),
                        (data.val = getNextValue(data.index++))),
                      (bits |= (resb > 0 ? 1 : 0) * power),
                      (power <<= 1);
                  c = f(bits);
                  break;
                case 2:
                  return "";
              }
              for (dictionary[3] = c, w = c, result.push(c); ; ) {
                if (data.index > length) return "";
                for (
                  bits = 0, maxpower = Math.pow(2, numBits), power = 1;
                  power != maxpower;

                )
                  (resb = data.val & data.position),
                    (data.position >>= 1),
                    0 == data.position &&
                      ((data.position = resetValue),
                      (data.val = getNextValue(data.index++))),
                    (bits |= (resb > 0 ? 1 : 0) * power),
                    (power <<= 1);
                switch ((c = bits)) {
                  case 0:
                    for (
                      bits = 0, maxpower = Math.pow(2, 8), power = 1;
                      power != maxpower;

                    )
                      (resb = data.val & data.position),
                        (data.position >>= 1),
                        0 == data.position &&
                          ((data.position = resetValue),
                          (data.val = getNextValue(data.index++))),
                        (bits |= (resb > 0 ? 1 : 0) * power),
                        (power <<= 1);
                    (dictionary[dictSize++] = f(bits)),
                      (c = dictSize - 1),
                      enlargeIn--;
                    break;
                  case 1:
                    for (
                      bits = 0, maxpower = Math.pow(2, 16), power = 1;
                      power != maxpower;

                    )
                      (resb = data.val & data.position),
                        (data.position >>= 1),
                        0 == data.position &&
                          ((data.position = resetValue),
                          (data.val = getNextValue(data.index++))),
                        (bits |= (resb > 0 ? 1 : 0) * power),
                        (power <<= 1);
                    (dictionary[dictSize++] = f(bits)),
                      (c = dictSize - 1),
                      enlargeIn--;
                    break;
                  case 2:
                    return result.join("");
                }
                if (
                  (0 == enlargeIn &&
                    ((enlargeIn = Math.pow(2, numBits)), numBits++),
                  dictionary[c])
                )
                  entry = dictionary[c];
                else {
                  if (c !== dictSize) return null;
                  entry = w + w.charAt(0);
                }
                result.push(entry),
                  (dictionary[dictSize++] = w + entry.charAt(0)),
                  (w = entry),
                  0 == --enlargeIn &&
                    ((enlargeIn = Math.pow(2, numBits)), numBits++);
              }
            },
          };
          return LZString;
        })();
      void 0 ===
        (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return LZString;
        }.call(exports, __webpack_require__, exports, module)) ||
        (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    },
    "./node_modules/object-inspect/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      var hasMap = "function" == typeof Map && Map.prototype,
        mapSizeDescriptor =
          Object.getOwnPropertyDescriptor && hasMap
            ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
            : null,
        mapSize =
          hasMap &&
          mapSizeDescriptor &&
          "function" == typeof mapSizeDescriptor.get
            ? mapSizeDescriptor.get
            : null,
        mapForEach = hasMap && Map.prototype.forEach,
        hasSet = "function" == typeof Set && Set.prototype,
        setSizeDescriptor =
          Object.getOwnPropertyDescriptor && hasSet
            ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
            : null,
        setSize =
          hasSet &&
          setSizeDescriptor &&
          "function" == typeof setSizeDescriptor.get
            ? setSizeDescriptor.get
            : null,
        setForEach = hasSet && Set.prototype.forEach,
        weakMapHas =
          "function" == typeof WeakMap && WeakMap.prototype
            ? WeakMap.prototype.has
            : null,
        weakSetHas =
          "function" == typeof WeakSet && WeakSet.prototype
            ? WeakSet.prototype.has
            : null,
        weakRefDeref =
          "function" == typeof WeakRef && WeakRef.prototype
            ? WeakRef.prototype.deref
            : null,
        booleanValueOf = Boolean.prototype.valueOf,
        objectToString = Object.prototype.toString,
        functionToString = Function.prototype.toString,
        $match = String.prototype.match,
        $slice = String.prototype.slice,
        $replace = String.prototype.replace,
        $toUpperCase = String.prototype.toUpperCase,
        $toLowerCase = String.prototype.toLowerCase,
        $test = RegExp.prototype.test,
        $concat = Array.prototype.concat,
        $join = Array.prototype.join,
        $arrSlice = Array.prototype.slice,
        $floor = Math.floor,
        bigIntValueOf =
          "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
        gOPS = Object.getOwnPropertySymbols,
        symToString =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? Symbol.prototype.toString
            : null,
        hasShammedSymbols =
          "function" == typeof Symbol && "object" == typeof Symbol.iterator,
        toStringTag =
          "function" == typeof Symbol &&
          Symbol.toStringTag &&
          (typeof Symbol.toStringTag === hasShammedSymbols || "symbol")
            ? Symbol.toStringTag
            : null,
        isEnumerable = Object.prototype.propertyIsEnumerable,
        gPO =
          ("function" == typeof Reflect
            ? Reflect.getPrototypeOf
            : Object.getPrototypeOf) ||
          ([].__proto__ === Array.prototype
            ? function (O) {
                return O.__proto__;
              }
            : null);
      function addNumericSeparator(num, str) {
        if (
          num === 1 / 0 ||
          num === -1 / 0 ||
          num != num ||
          (num && num > -1e3 && num < 1e3) ||
          $test.call(/e/, str)
        )
          return str;
        var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if ("number" == typeof num) {
          var int = num < 0 ? -$floor(-num) : $floor(num);
          if (int !== num) {
            var intStr = String(int),
              dec = $slice.call(str, intStr.length + 1);
            return (
              $replace.call(intStr, sepRegex, "$&_") +
              "." +
              $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "")
            );
          }
        }
        return $replace.call(str, sepRegex, "$&_");
      }
      var inspectCustom = __webpack_require__("?4f7e").custom,
        inspectSymbol =
          inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
      function wrapQuotes(s, defaultStyle, opts) {
        var quoteChar =
          "double" === (opts.quoteStyle || defaultStyle) ? '"' : "'";
        return quoteChar + s + quoteChar;
      }
      function quote(s) {
        return $replace.call(String(s), /"/g, "&quot;");
      }
      function isArray(obj) {
        return !(
          "[object Array]" !== toStr(obj) ||
          (toStringTag && "object" == typeof obj && toStringTag in obj)
        );
      }
      function isSymbol(obj) {
        if (hasShammedSymbols)
          return obj && "object" == typeof obj && obj instanceof Symbol;
        if ("symbol" == typeof obj) return !0;
        if (!obj || "object" != typeof obj || !symToString) return !1;
        try {
          return symToString.call(obj), !0;
        } catch (e) {}
        return !1;
      }
      module.exports = function inspect_(obj, options, depth, seen) {
        var opts = options || {};
        if (
          has(opts, "quoteStyle") &&
          "single" !== opts.quoteStyle &&
          "double" !== opts.quoteStyle
        )
          throw new TypeError(
            'option "quoteStyle" must be "single" or "double"'
          );
        if (
          has(opts, "maxStringLength") &&
          ("number" == typeof opts.maxStringLength
            ? opts.maxStringLength < 0 && opts.maxStringLength !== 1 / 0
            : null !== opts.maxStringLength)
        )
          throw new TypeError(
            'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
          );
        var customInspect = !has(opts, "customInspect") || opts.customInspect;
        if ("boolean" != typeof customInspect && "symbol" !== customInspect)
          throw new TypeError(
            "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
          );
        if (
          has(opts, "indent") &&
          null !== opts.indent &&
          "\t" !== opts.indent &&
          !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
        )
          throw new TypeError(
            'option "indent" must be "\\t", an integer > 0, or `null`'
          );
        if (
          has(opts, "numericSeparator") &&
          "boolean" != typeof opts.numericSeparator
        )
          throw new TypeError(
            'option "numericSeparator", if provided, must be `true` or `false`'
          );
        var numericSeparator = opts.numericSeparator;
        if (void 0 === obj) return "undefined";
        if (null === obj) return "null";
        if ("boolean" == typeof obj) return obj ? "true" : "false";
        if ("string" == typeof obj) return inspectString(obj, opts);
        if ("number" == typeof obj) {
          if (0 === obj) return 1 / 0 / obj > 0 ? "0" : "-0";
          var str = String(obj);
          return numericSeparator ? addNumericSeparator(obj, str) : str;
        }
        if ("bigint" == typeof obj) {
          var bigIntStr = String(obj) + "n";
          return numericSeparator
            ? addNumericSeparator(obj, bigIntStr)
            : bigIntStr;
        }
        var maxDepth = void 0 === opts.depth ? 5 : opts.depth;
        if (
          (void 0 === depth && (depth = 0),
          depth >= maxDepth && maxDepth > 0 && "object" == typeof obj)
        )
          return isArray(obj) ? "[Array]" : "[Object]";
        var indent = (function getIndent(opts, depth) {
          var baseIndent;
          if ("\t" === opts.indent) baseIndent = "\t";
          else {
            if (!("number" == typeof opts.indent && opts.indent > 0))
              return null;
            baseIndent = $join.call(Array(opts.indent + 1), " ");
          }
          return {
            base: baseIndent,
            prev: $join.call(Array(depth + 1), baseIndent),
          };
        })(opts, depth);
        if (void 0 === seen) seen = [];
        else if (indexOf(seen, obj) >= 0) return "[Circular]";
        function inspect(value, from, noIndent) {
          if ((from && (seen = $arrSlice.call(seen)).push(from), noIndent)) {
            var newOpts = { depth: opts.depth };
            return (
              has(opts, "quoteStyle") && (newOpts.quoteStyle = opts.quoteStyle),
              inspect_(value, newOpts, depth + 1, seen)
            );
          }
          return inspect_(value, opts, depth + 1, seen);
        }
        if ("function" == typeof obj) {
          var name = (function nameOf(f) {
              if (f.name) return f.name;
              var m = $match.call(
                functionToString.call(f),
                /^function\s*([\w$]+)/
              );
              if (m) return m[1];
              return null;
            })(obj),
            keys = arrObjKeys(obj, inspect);
          return (
            "[Function" +
            (name ? ": " + name : " (anonymous)") +
            "]" +
            (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "")
          );
        }
        if (isSymbol(obj)) {
          var symString = hasShammedSymbols
            ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1")
            : symToString.call(obj);
          return "object" != typeof obj || hasShammedSymbols
            ? symString
            : markBoxed(symString);
        }
        if (
          (function isElement(x) {
            if (!x || "object" != typeof x) return !1;
            if ("undefined" != typeof HTMLElement && x instanceof HTMLElement)
              return !0;
            return (
              "string" == typeof x.nodeName &&
              "function" == typeof x.getAttribute
            );
          })(obj)
        ) {
          for (
            var s = "<" + $toLowerCase.call(String(obj.nodeName)),
              attrs = obj.attributes || [],
              i = 0;
            i < attrs.length;
            i++
          )
            s +=
              " " +
              attrs[i].name +
              "=" +
              wrapQuotes(quote(attrs[i].value), "double", opts);
          return (
            (s += ">"),
            obj.childNodes && obj.childNodes.length && (s += "..."),
            (s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">")
          );
        }
        if (isArray(obj)) {
          if (0 === obj.length) return "[]";
          var xs = arrObjKeys(obj, inspect);
          return indent &&
            !(function singleLineValues(xs) {
              for (var i = 0; i < xs.length; i++)
                if (indexOf(xs[i], "\n") >= 0) return !1;
              return !0;
            })(xs)
            ? "[" + indentedJoin(xs, indent) + "]"
            : "[ " + $join.call(xs, ", ") + " ]";
        }
        if (
          (function isError(obj) {
            return !(
              "[object Error]" !== toStr(obj) ||
              (toStringTag && "object" == typeof obj && toStringTag in obj)
            );
          })(obj)
        ) {
          var parts = arrObjKeys(obj, inspect);
          return "cause" in obj && !isEnumerable.call(obj, "cause")
            ? "{ [" +
                String(obj) +
                "] " +
                $join.call(
                  $concat.call("[cause]: " + inspect(obj.cause), parts),
                  ", "
                ) +
                " }"
            : 0 === parts.length
            ? "[" + String(obj) + "]"
            : "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
        }
        if ("object" == typeof obj && customInspect) {
          if (inspectSymbol && "function" == typeof obj[inspectSymbol])
            return obj[inspectSymbol]();
          if ("symbol" !== customInspect && "function" == typeof obj.inspect)
            return obj.inspect();
        }
        if (
          (function isMap(x) {
            if (!mapSize || !x || "object" != typeof x) return !1;
            try {
              mapSize.call(x);
              try {
                setSize.call(x);
              } catch (s) {
                return !0;
              }
              return x instanceof Map;
            } catch (e) {}
            return !1;
          })(obj)
        ) {
          var mapParts = [];
          return (
            mapForEach.call(obj, function (value, key) {
              mapParts.push(
                inspect(key, obj, !0) + " => " + inspect(value, obj)
              );
            }),
            collectionOf("Map", mapSize.call(obj), mapParts, indent)
          );
        }
        if (
          (function isSet(x) {
            if (!setSize || !x || "object" != typeof x) return !1;
            try {
              setSize.call(x);
              try {
                mapSize.call(x);
              } catch (m) {
                return !0;
              }
              return x instanceof Set;
            } catch (e) {}
            return !1;
          })(obj)
        ) {
          var setParts = [];
          return (
            setForEach.call(obj, function (value) {
              setParts.push(inspect(value, obj));
            }),
            collectionOf("Set", setSize.call(obj), setParts, indent)
          );
        }
        if (
          (function isWeakMap(x) {
            if (!weakMapHas || !x || "object" != typeof x) return !1;
            try {
              weakMapHas.call(x, weakMapHas);
              try {
                weakSetHas.call(x, weakSetHas);
              } catch (s) {
                return !0;
              }
              return x instanceof WeakMap;
            } catch (e) {}
            return !1;
          })(obj)
        )
          return weakCollectionOf("WeakMap");
        if (
          (function isWeakSet(x) {
            if (!weakSetHas || !x || "object" != typeof x) return !1;
            try {
              weakSetHas.call(x, weakSetHas);
              try {
                weakMapHas.call(x, weakMapHas);
              } catch (s) {
                return !0;
              }
              return x instanceof WeakSet;
            } catch (e) {}
            return !1;
          })(obj)
        )
          return weakCollectionOf("WeakSet");
        if (
          (function isWeakRef(x) {
            if (!weakRefDeref || !x || "object" != typeof x) return !1;
            try {
              return weakRefDeref.call(x), !0;
            } catch (e) {}
            return !1;
          })(obj)
        )
          return weakCollectionOf("WeakRef");
        if (
          (function isNumber(obj) {
            return !(
              "[object Number]" !== toStr(obj) ||
              (toStringTag && "object" == typeof obj && toStringTag in obj)
            );
          })(obj)
        )
          return markBoxed(inspect(Number(obj)));
        if (
          (function isBigInt(obj) {
            if (!obj || "object" != typeof obj || !bigIntValueOf) return !1;
            try {
              return bigIntValueOf.call(obj), !0;
            } catch (e) {}
            return !1;
          })(obj)
        )
          return markBoxed(inspect(bigIntValueOf.call(obj)));
        if (
          (function isBoolean(obj) {
            return !(
              "[object Boolean]" !== toStr(obj) ||
              (toStringTag && "object" == typeof obj && toStringTag in obj)
            );
          })(obj)
        )
          return markBoxed(booleanValueOf.call(obj));
        if (
          (function isString(obj) {
            return !(
              "[object String]" !== toStr(obj) ||
              (toStringTag && "object" == typeof obj && toStringTag in obj)
            );
          })(obj)
        )
          return markBoxed(inspect(String(obj)));
        if (
          !(function isDate(obj) {
            return !(
              "[object Date]" !== toStr(obj) ||
              (toStringTag && "object" == typeof obj && toStringTag in obj)
            );
          })(obj) &&
          !(function isRegExp(obj) {
            return !(
              "[object RegExp]" !== toStr(obj) ||
              (toStringTag && "object" == typeof obj && toStringTag in obj)
            );
          })(obj)
        ) {
          var ys = arrObjKeys(obj, inspect),
            isPlainObject = gPO
              ? gPO(obj) === Object.prototype
              : obj instanceof Object || obj.constructor === Object,
            protoTag = obj instanceof Object ? "" : "null prototype",
            stringTag =
              !isPlainObject &&
              toStringTag &&
              Object(obj) === obj &&
              toStringTag in obj
                ? $slice.call(toStr(obj), 8, -1)
                : protoTag
                ? "Object"
                : "",
            tag =
              (isPlainObject || "function" != typeof obj.constructor
                ? ""
                : obj.constructor.name
                ? obj.constructor.name + " "
                : "") +
              (stringTag || protoTag
                ? "[" +
                  $join.call(
                    $concat.call([], stringTag || [], protoTag || []),
                    ": "
                  ) +
                  "] "
                : "");
          return 0 === ys.length
            ? tag + "{}"
            : indent
            ? tag + "{" + indentedJoin(ys, indent) + "}"
            : tag + "{ " + $join.call(ys, ", ") + " }";
        }
        return String(obj);
      };
      var hasOwn =
        Object.prototype.hasOwnProperty ||
        function (key) {
          return key in this;
        };
      function has(obj, key) {
        return hasOwn.call(obj, key);
      }
      function toStr(obj) {
        return objectToString.call(obj);
      }
      function indexOf(xs, x) {
        if (xs.indexOf) return xs.indexOf(x);
        for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
        return -1;
      }
      function inspectString(str, opts) {
        if (str.length > opts.maxStringLength) {
          var remaining = str.length - opts.maxStringLength,
            trailer =
              "... " +
              remaining +
              " more character" +
              (remaining > 1 ? "s" : "");
          return (
            inspectString($slice.call(str, 0, opts.maxStringLength), opts) +
            trailer
          );
        }
        return wrapQuotes(
          $replace.call(
            $replace.call(str, /(['\\])/g, "\\$1"),
            /[\x00-\x1f]/g,
            lowbyte
          ),
          "single",
          opts
        );
      }
      function lowbyte(c) {
        var n = c.charCodeAt(0),
          x = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[n];
        return x
          ? "\\" + x
          : "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
      }
      function markBoxed(str) {
        return "Object(" + str + ")";
      }
      function weakCollectionOf(type) {
        return type + " { ? }";
      }
      function collectionOf(type, size, entries, indent) {
        return (
          type +
          " (" +
          size +
          ") {" +
          (indent ? indentedJoin(entries, indent) : $join.call(entries, ", ")) +
          "}"
        );
      }
      function indentedJoin(xs, indent) {
        if (0 === xs.length) return "";
        var lineJoiner = "\n" + indent.prev + indent.base;
        return (
          lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev
        );
      }
      function arrObjKeys(obj, inspect) {
        var isArr = isArray(obj),
          xs = [];
        if (isArr) {
          xs.length = obj.length;
          for (var i = 0; i < obj.length; i++)
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
        var symMap,
          syms = "function" == typeof gOPS ? gOPS(obj) : [];
        if (hasShammedSymbols) {
          symMap = {};
          for (var k = 0; k < syms.length; k++) symMap["$" + syms[k]] = syms[k];
        }
        for (var key in obj)
          has(obj, key) &&
            ((isArr && String(Number(key)) === key && key < obj.length) ||
              (hasShammedSymbols && symMap["$" + key] instanceof Symbol) ||
              ($test.call(/[^\w$]/, key)
                ? xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj))
                : xs.push(key + ": " + inspect(obj[key], obj))));
        if ("function" == typeof gOPS)
          for (var j = 0; j < syms.length; j++)
            isEnumerable.call(obj, syms[j]) &&
              xs.push(
                "[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj)
              );
        return xs;
      }
    },
    "./node_modules/pretty-format/build/collections.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.printIteratorEntries = function printIteratorEntries(
          iterator,
          config,
          indentation,
          depth,
          refs,
          printer,
          separator = ": "
        ) {
          let result = "",
            current = iterator.next();
          if (!current.done) {
            result += config.spacingOuter;
            const indentationNext = indentation + config.indent;
            for (; !current.done; ) {
              (result +=
                indentationNext +
                printer(
                  current.value[0],
                  config,
                  indentationNext,
                  depth,
                  refs
                ) +
                separator +
                printer(
                  current.value[1],
                  config,
                  indentationNext,
                  depth,
                  refs
                )),
                (current = iterator.next()),
                current.done
                  ? config.min || (result += ",")
                  : (result += "," + config.spacingInner);
            }
            result += config.spacingOuter + indentation;
          }
          return result;
        }),
        (exports.printIteratorValues = function printIteratorValues(
          iterator,
          config,
          indentation,
          depth,
          refs,
          printer
        ) {
          let result = "",
            current = iterator.next();
          if (!current.done) {
            result += config.spacingOuter;
            const indentationNext = indentation + config.indent;
            for (; !current.done; )
              (result +=
                indentationNext +
                printer(current.value, config, indentationNext, depth, refs)),
                (current = iterator.next()),
                current.done
                  ? config.min || (result += ",")
                  : (result += "," + config.spacingInner);
            result += config.spacingOuter + indentation;
          }
          return result;
        }),
        (exports.printListItems = function printListItems(
          list,
          config,
          indentation,
          depth,
          refs,
          printer
        ) {
          let result = "";
          if (list.length) {
            result += config.spacingOuter;
            const indentationNext = indentation + config.indent;
            for (let i = 0; i < list.length; i++)
              (result += indentationNext),
                i in list &&
                  (result += printer(
                    list[i],
                    config,
                    indentationNext,
                    depth,
                    refs
                  )),
                i < list.length - 1
                  ? (result += "," + config.spacingInner)
                  : config.min || (result += ",");
            result += config.spacingOuter + indentation;
          }
          return result;
        }),
        (exports.printObjectProperties = function printObjectProperties(
          val,
          config,
          indentation,
          depth,
          refs,
          printer
        ) {
          let result = "";
          const keys = getKeysOfEnumerableProperties(val, config.compareKeys);
          if (keys.length) {
            result += config.spacingOuter;
            const indentationNext = indentation + config.indent;
            for (let i = 0; i < keys.length; i++) {
              const key = keys[i];
              (result +=
                indentationNext +
                printer(key, config, indentationNext, depth, refs) +
                ": " +
                printer(val[key], config, indentationNext, depth, refs)),
                i < keys.length - 1
                  ? (result += "," + config.spacingInner)
                  : config.min || (result += ",");
            }
            result += config.spacingOuter + indentation;
          }
          return result;
        });
      const getKeysOfEnumerableProperties = (object, compareKeys) => {
        const keys = Object.keys(object).sort(compareKeys);
        return (
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(object).forEach((symbol) => {
              Object.getOwnPropertyDescriptor(object, symbol).enumerable &&
                keys.push(symbol);
            }),
          keys
        );
      };
    },
    "./node_modules/pretty-format/build/index.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = exports.DEFAULT_OPTIONS = void 0),
        (exports.format = format),
        (exports.plugins = void 0);
      var _ansiStyles = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/pretty-format/node_modules/ansi-styles/index.js"
          )
        ),
        _collections = __webpack_require__(
          "./node_modules/pretty-format/build/collections.js"
        ),
        _AsymmetricMatcher = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"
          )
        ),
        _ConvertAnsi = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/pretty-format/build/plugins/ConvertAnsi.js"
          )
        ),
        _DOMCollection = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/pretty-format/build/plugins/DOMCollection.js"
          )
        ),
        _DOMElement = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/pretty-format/build/plugins/DOMElement.js"
          )
        ),
        _Immutable = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/pretty-format/build/plugins/Immutable.js"
          )
        ),
        _ReactElement = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/pretty-format/build/plugins/ReactElement.js"
          )
        ),
        _ReactTestComponent = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/pretty-format/build/plugins/ReactTestComponent.js"
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      const toString = Object.prototype.toString,
        toISOString = Date.prototype.toISOString,
        errorToString = Error.prototype.toString,
        regExpToString = RegExp.prototype.toString,
        getConstructorName = (val) =>
          ("function" == typeof val.constructor && val.constructor.name) ||
          "Object",
        isWindow = (val) => "undefined" != typeof window && val === window,
        SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/,
        NEWLINE_REGEXP = /\n/gi;
      class PrettyFormatPluginError extends Error {
        constructor(message, stack) {
          super(message),
            (this.stack = stack),
            (this.name = this.constructor.name);
        }
      }
      function printFunction(val, printFunctionName) {
        return printFunctionName
          ? "[Function " + (val.name || "anonymous") + "]"
          : "[Function]";
      }
      function printSymbol(val) {
        return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
      }
      function printError(val) {
        return "[" + errorToString.call(val) + "]";
      }
      function printBasicValue(
        val,
        printFunctionName,
        escapeRegex,
        escapeString
      ) {
        if (!0 === val || !1 === val) return "" + val;
        if (void 0 === val) return "undefined";
        if (null === val) return "null";
        const typeOf = typeof val;
        if ("number" === typeOf)
          return (function printNumber(val) {
            return Object.is(val, -0) ? "-0" : String(val);
          })(val);
        if ("bigint" === typeOf)
          return (function printBigInt(val) {
            return String(`${val}n`);
          })(val);
        if ("string" === typeOf)
          return escapeString
            ? '"' + val.replace(/"|\\/g, "\\$&") + '"'
            : '"' + val + '"';
        if ("function" === typeOf) return printFunction(val, printFunctionName);
        if ("symbol" === typeOf) return printSymbol(val);
        const toStringed = toString.call(val);
        return "[object WeakMap]" === toStringed
          ? "WeakMap {}"
          : "[object WeakSet]" === toStringed
          ? "WeakSet {}"
          : "[object Function]" === toStringed ||
            "[object GeneratorFunction]" === toStringed
          ? printFunction(val, printFunctionName)
          : "[object Symbol]" === toStringed
          ? printSymbol(val)
          : "[object Date]" === toStringed
          ? isNaN(+val)
            ? "Date { NaN }"
            : toISOString.call(val)
          : "[object Error]" === toStringed
          ? printError(val)
          : "[object RegExp]" === toStringed
          ? escapeRegex
            ? regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&")
            : regExpToString.call(val)
          : val instanceof Error
          ? printError(val)
          : null;
      }
      function printComplexValue(
        val,
        config,
        indentation,
        depth,
        refs,
        hasCalledToJSON
      ) {
        if (-1 !== refs.indexOf(val)) return "[Circular]";
        (refs = refs.slice()).push(val);
        const hitMaxDepth = ++depth > config.maxDepth,
          min = config.min;
        if (
          config.callToJSON &&
          !hitMaxDepth &&
          val.toJSON &&
          "function" == typeof val.toJSON &&
          !hasCalledToJSON
        )
          return printer(val.toJSON(), config, indentation, depth, refs, !0);
        const toStringed = toString.call(val);
        return "[object Arguments]" === toStringed
          ? hitMaxDepth
            ? "[Arguments]"
            : (min ? "" : "Arguments ") +
              "[" +
              (0, _collections.printListItems)(
                val,
                config,
                indentation,
                depth,
                refs,
                printer
              ) +
              "]"
          : (function isToStringedArrayType(toStringed) {
              return (
                "[object Array]" === toStringed ||
                "[object ArrayBuffer]" === toStringed ||
                "[object DataView]" === toStringed ||
                "[object Float32Array]" === toStringed ||
                "[object Float64Array]" === toStringed ||
                "[object Int8Array]" === toStringed ||
                "[object Int16Array]" === toStringed ||
                "[object Int32Array]" === toStringed ||
                "[object Uint8Array]" === toStringed ||
                "[object Uint8ClampedArray]" === toStringed ||
                "[object Uint16Array]" === toStringed ||
                "[object Uint32Array]" === toStringed
              );
            })(toStringed)
          ? hitMaxDepth
            ? "[" + val.constructor.name + "]"
            : (min
                ? ""
                : config.printBasicPrototype || "Array" !== val.constructor.name
                ? val.constructor.name + " "
                : "") +
              "[" +
              (0, _collections.printListItems)(
                val,
                config,
                indentation,
                depth,
                refs,
                printer
              ) +
              "]"
          : "[object Map]" === toStringed
          ? hitMaxDepth
            ? "[Map]"
            : "Map {" +
              (0, _collections.printIteratorEntries)(
                val.entries(),
                config,
                indentation,
                depth,
                refs,
                printer,
                " => "
              ) +
              "}"
          : "[object Set]" === toStringed
          ? hitMaxDepth
            ? "[Set]"
            : "Set {" +
              (0, _collections.printIteratorValues)(
                val.values(),
                config,
                indentation,
                depth,
                refs,
                printer
              ) +
              "}"
          : hitMaxDepth || isWindow(val)
          ? "[" + getConstructorName(val) + "]"
          : (min
              ? ""
              : config.printBasicPrototype ||
                "Object" !== getConstructorName(val)
              ? getConstructorName(val) + " "
              : "") +
            "{" +
            (0, _collections.printObjectProperties)(
              val,
              config,
              indentation,
              depth,
              refs,
              printer
            ) +
            "}";
      }
      function printPlugin(plugin, val, config, indentation, depth, refs) {
        let printed;
        try {
          printed = (function isNewPlugin(plugin) {
            return null != plugin.serialize;
          })(plugin)
            ? plugin.serialize(val, config, indentation, depth, refs, printer)
            : plugin.print(
                val,
                (valChild) =>
                  printer(valChild, config, indentation, depth, refs),
                (str) => {
                  const indentationNext = indentation + config.indent;
                  return (
                    indentationNext +
                    str.replace(NEWLINE_REGEXP, "\n" + indentationNext)
                  );
                },
                {
                  edgeSpacing: config.spacingOuter,
                  min: config.min,
                  spacing: config.spacingInner,
                },
                config.colors
              );
        } catch (error) {
          throw new PrettyFormatPluginError(error.message, error.stack);
        }
        if ("string" != typeof printed)
          throw new Error(
            `pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`
          );
        return printed;
      }
      function findPlugin(plugins, val) {
        for (let p = 0; p < plugins.length; p++)
          try {
            if (plugins[p].test(val)) return plugins[p];
          } catch (error) {
            throw new PrettyFormatPluginError(error.message, error.stack);
          }
        return null;
      }
      function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
        const plugin = findPlugin(config.plugins, val);
        if (null !== plugin)
          return printPlugin(plugin, val, config, indentation, depth, refs);
        const basicResult = printBasicValue(
          val,
          config.printFunctionName,
          config.escapeRegex,
          config.escapeString
        );
        return null !== basicResult
          ? basicResult
          : printComplexValue(
              val,
              config,
              indentation,
              depth,
              refs,
              hasCalledToJSON
            );
      }
      const DEFAULT_THEME = {
          comment: "gray",
          content: "reset",
          prop: "yellow",
          tag: "cyan",
          value: "green",
        },
        DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME),
        DEFAULT_OPTIONS = {
          callToJSON: !0,
          compareKeys: void 0,
          escapeRegex: !1,
          escapeString: !0,
          highlight: !1,
          indent: 2,
          maxDepth: 1 / 0,
          min: !1,
          plugins: [],
          printBasicPrototype: !0,
          printFunctionName: !0,
          theme: DEFAULT_THEME,
        };
      exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
      const getColorsHighlight = (options) =>
          DEFAULT_THEME_KEYS.reduce((colors, key) => {
            const value =
                options.theme && void 0 !== options.theme[key]
                  ? options.theme[key]
                  : DEFAULT_THEME[key],
              color = value && _ansiStyles.default[value];
            if (
              !color ||
              "string" != typeof color.close ||
              "string" != typeof color.open
            )
              throw new Error(
                `pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`
              );
            return (colors[key] = color), colors;
          }, Object.create(null)),
        getPrintFunctionName = (options) =>
          options && void 0 !== options.printFunctionName
            ? options.printFunctionName
            : DEFAULT_OPTIONS.printFunctionName,
        getEscapeRegex = (options) =>
          options && void 0 !== options.escapeRegex
            ? options.escapeRegex
            : DEFAULT_OPTIONS.escapeRegex,
        getEscapeString = (options) =>
          options && void 0 !== options.escapeString
            ? options.escapeString
            : DEFAULT_OPTIONS.escapeString,
        getConfig = (options) => {
          var _options$printBasicPr, indent;
          return {
            callToJSON:
              options && void 0 !== options.callToJSON
                ? options.callToJSON
                : DEFAULT_OPTIONS.callToJSON,
            colors:
              options && options.highlight
                ? getColorsHighlight(options)
                : DEFAULT_THEME_KEYS.reduce(
                    (colors, key) => (
                      (colors[key] = { close: "", open: "" }), colors
                    ),
                    Object.create(null)
                  ),
            compareKeys:
              options && "function" == typeof options.compareKeys
                ? options.compareKeys
                : DEFAULT_OPTIONS.compareKeys,
            escapeRegex: getEscapeRegex(options),
            escapeString: getEscapeString(options),
            indent:
              options && options.min
                ? ""
                : ((indent =
                    options && void 0 !== options.indent
                      ? options.indent
                      : DEFAULT_OPTIONS.indent),
                  new Array(indent + 1).join(" ")),
            maxDepth:
              options && void 0 !== options.maxDepth
                ? options.maxDepth
                : DEFAULT_OPTIONS.maxDepth,
            min:
              options && void 0 !== options.min
                ? options.min
                : DEFAULT_OPTIONS.min,
            plugins:
              options && void 0 !== options.plugins
                ? options.plugins
                : DEFAULT_OPTIONS.plugins,
            printBasicPrototype:
              null ===
                (_options$printBasicPr =
                  null == options ? void 0 : options.printBasicPrototype) ||
              void 0 === _options$printBasicPr ||
              _options$printBasicPr,
            printFunctionName: getPrintFunctionName(options),
            spacingInner: options && options.min ? " " : "\n",
            spacingOuter: options && options.min ? "" : "\n",
          };
        };
      function format(val, options) {
        if (
          options &&
          ((function validateOptions(options) {
            if (
              (Object.keys(options).forEach((key) => {
                if (!DEFAULT_OPTIONS.hasOwnProperty(key))
                  throw new Error(`pretty-format: Unknown option "${key}".`);
              }),
              options.min && void 0 !== options.indent && 0 !== options.indent)
            )
              throw new Error(
                'pretty-format: Options "min" and "indent" cannot be used together.'
              );
            if (void 0 !== options.theme) {
              if (null === options.theme)
                throw new Error(
                  'pretty-format: Option "theme" must not be null.'
                );
              if ("object" != typeof options.theme)
                throw new Error(
                  `pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`
                );
            }
          })(options),
          options.plugins)
        ) {
          const plugin = findPlugin(options.plugins, val);
          if (null !== plugin)
            return printPlugin(plugin, val, getConfig(options), "", 0, []);
        }
        const basicResult = printBasicValue(
          val,
          getPrintFunctionName(options),
          getEscapeRegex(options),
          getEscapeString(options)
        );
        return null !== basicResult
          ? basicResult
          : printComplexValue(val, getConfig(options), "", 0, []);
      }
      const plugins = {
        AsymmetricMatcher: _AsymmetricMatcher.default,
        ConvertAnsi: _ConvertAnsi.default,
        DOMCollection: _DOMCollection.default,
        DOMElement: _DOMElement.default,
        Immutable: _Immutable.default,
        ReactElement: _ReactElement.default,
        ReactTestComponent: _ReactTestComponent.default,
      };
      exports.plugins = plugins;
      var _default = format;
      exports.default = _default;
    },
    "./node_modules/pretty-format/build/plugins/AsymmetricMatcher.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var _collections = __webpack_require__(
          "./node_modules/pretty-format/build/collections.js"
        ),
        global =
          "undefined" != typeof globalThis
            ? globalThis
            : void 0 !== global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : Function("return this")(),
        Symbol = global["jest-symbol-do-not-touch"] || global.Symbol;
      const asymmetricMatcher =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("jest.asymmetricMatcher")
            : 1267621,
        serialize = (val, config, indentation, depth, refs, printer) => {
          const stringedValue = val.toString();
          return "ArrayContaining" === stringedValue ||
            "ArrayNotContaining" === stringedValue
            ? ++depth > config.maxDepth
              ? "[" + stringedValue + "]"
              : stringedValue +
                " [" +
                (0, _collections.printListItems)(
                  val.sample,
                  config,
                  indentation,
                  depth,
                  refs,
                  printer
                ) +
                "]"
            : "ObjectContaining" === stringedValue ||
              "ObjectNotContaining" === stringedValue
            ? ++depth > config.maxDepth
              ? "[" + stringedValue + "]"
              : stringedValue +
                " {" +
                (0, _collections.printObjectProperties)(
                  val.sample,
                  config,
                  indentation,
                  depth,
                  refs,
                  printer
                ) +
                "}"
            : "StringMatching" === stringedValue ||
              "StringNotMatching" === stringedValue ||
              "StringContaining" === stringedValue ||
              "StringNotContaining" === stringedValue
            ? stringedValue +
              " " +
              printer(val.sample, config, indentation, depth, refs)
            : val.toAsymmetricMatcher();
        };
      exports.serialize = serialize;
      const test = (val) => val && val.$$typeof === asymmetricMatcher;
      exports.test = test;
      var _default = { serialize, test };
      exports.default = _default;
    },
    "./node_modules/pretty-format/build/plugins/ConvertAnsi.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var _ansiRegex = _interopRequireDefault(
          __webpack_require__("./node_modules/ansi-regex/index.js")
        ),
        _ansiStyles = _interopRequireDefault(
          __webpack_require__(
            "./node_modules/pretty-format/node_modules/ansi-styles/index.js"
          )
        );
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      const test = (val) =>
        "string" == typeof val && !!val.match((0, _ansiRegex.default)());
      exports.test = test;
      const serialize = (val, config, indentation, depth, refs, printer) =>
        printer(
          val.replace((0, _ansiRegex.default)(), (match) => {
            switch (match) {
              case _ansiStyles.default.red.close:
              case _ansiStyles.default.green.close:
              case _ansiStyles.default.cyan.close:
              case _ansiStyles.default.gray.close:
              case _ansiStyles.default.white.close:
              case _ansiStyles.default.yellow.close:
              case _ansiStyles.default.bgRed.close:
              case _ansiStyles.default.bgGreen.close:
              case _ansiStyles.default.bgYellow.close:
              case _ansiStyles.default.inverse.close:
              case _ansiStyles.default.dim.close:
              case _ansiStyles.default.bold.close:
              case _ansiStyles.default.reset.open:
              case _ansiStyles.default.reset.close:
                return "</>";
              case _ansiStyles.default.red.open:
                return "<red>";
              case _ansiStyles.default.green.open:
                return "<green>";
              case _ansiStyles.default.cyan.open:
                return "<cyan>";
              case _ansiStyles.default.gray.open:
                return "<gray>";
              case _ansiStyles.default.white.open:
                return "<white>";
              case _ansiStyles.default.yellow.open:
                return "<yellow>";
              case _ansiStyles.default.bgRed.open:
                return "<bgRed>";
              case _ansiStyles.default.bgGreen.open:
                return "<bgGreen>";
              case _ansiStyles.default.bgYellow.open:
                return "<bgYellow>";
              case _ansiStyles.default.inverse.open:
                return "<inverse>";
              case _ansiStyles.default.dim.open:
                return "<dim>";
              case _ansiStyles.default.bold.open:
                return "<bold>";
              default:
                return "";
            }
          }),
          config,
          indentation,
          depth,
          refs
        );
      exports.serialize = serialize;
      var _default = { serialize, test };
      exports.default = _default;
    },
    "./node_modules/pretty-format/build/plugins/DOMCollection.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var _collections = __webpack_require__(
        "./node_modules/pretty-format/build/collections.js"
      );
      const OBJECT_NAMES = ["DOMStringMap", "NamedNodeMap"],
        ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/,
        test = (val) => {
          return (
            val &&
            val.constructor &&
            !!val.constructor.name &&
            ((name = val.constructor.name),
            -1 !== OBJECT_NAMES.indexOf(name) || ARRAY_REGEXP.test(name))
          );
          var name;
        };
      exports.test = test;
      const serialize = (
        collection,
        config,
        indentation,
        depth,
        refs,
        printer
      ) => {
        const name = collection.constructor.name;
        return ++depth > config.maxDepth
          ? "[" + name + "]"
          : (config.min ? "" : name + " ") +
              (-1 !== OBJECT_NAMES.indexOf(name)
                ? "{" +
                  (0, _collections.printObjectProperties)(
                    ((collection) =>
                      "NamedNodeMap" === collection.constructor.name)(
                      collection
                    )
                      ? Array.from(collection).reduce(
                          (props, attribute) => (
                            (props[attribute.name] = attribute.value), props
                          ),
                          {}
                        )
                      : { ...collection },
                    config,
                    indentation,
                    depth,
                    refs,
                    printer
                  ) +
                  "}"
                : "[" +
                  (0, _collections.printListItems)(
                    Array.from(collection),
                    config,
                    indentation,
                    depth,
                    refs,
                    printer
                  ) +
                  "]");
      };
      exports.serialize = serialize;
      var _default = { serialize, test };
      exports.default = _default;
    },
    "./node_modules/pretty-format/build/plugins/DOMElement.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var _markup = __webpack_require__(
        "./node_modules/pretty-format/build/plugins/lib/markup.js"
      );
      const ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/,
        test = (val) => {
          var _val$constructor;
          return (
            (null == val ||
            null === (_val$constructor = val.constructor) ||
            void 0 === _val$constructor
              ? void 0
              : _val$constructor.name) &&
            ((val) => {
              const constructorName = val.constructor.name,
                { nodeType, tagName } = val,
                isCustomElement =
                  ("string" == typeof tagName && tagName.includes("-")) ||
                  ((val) => {
                    try {
                      return (
                        "function" == typeof val.hasAttribute &&
                        val.hasAttribute("is")
                      );
                    } catch {
                      return !1;
                    }
                  })(val);
              return (
                (1 === nodeType &&
                  (ELEMENT_REGEXP.test(constructorName) || isCustomElement)) ||
                (3 === nodeType && "Text" === constructorName) ||
                (8 === nodeType && "Comment" === constructorName) ||
                (11 === nodeType && "DocumentFragment" === constructorName)
              );
            })(val)
          );
        };
      function nodeIsFragment(node) {
        return 11 === node.nodeType;
      }
      exports.test = test;
      const serialize = (node, config, indentation, depth, refs, printer) => {
        if (
          (function nodeIsText(node) {
            return 3 === node.nodeType;
          })(node)
        )
          return (0, _markup.printText)(node.data, config);
        if (
          (function nodeIsComment(node) {
            return 8 === node.nodeType;
          })(node)
        )
          return (0, _markup.printComment)(node.data, config);
        const type = nodeIsFragment(node)
          ? "DocumentFragment"
          : node.tagName.toLowerCase();
        return ++depth > config.maxDepth
          ? (0, _markup.printElementAsLeaf)(type, config)
          : (0, _markup.printElement)(
              type,
              (0, _markup.printProps)(
                nodeIsFragment(node)
                  ? []
                  : Array.from(node.attributes)
                      .map((attr) => attr.name)
                      .sort(),
                nodeIsFragment(node)
                  ? {}
                  : Array.from(node.attributes).reduce(
                      (props, attribute) => (
                        (props[attribute.name] = attribute.value), props
                      ),
                      {}
                    ),
                config,
                indentation + config.indent,
                depth,
                refs,
                printer
              ),
              (0, _markup.printChildren)(
                Array.prototype.slice.call(node.childNodes || node.children),
                config,
                indentation + config.indent,
                depth,
                refs,
                printer
              ),
              config,
              indentation
            );
      };
      exports.serialize = serialize;
      var _default = { serialize, test };
      exports.default = _default;
    },
    "./node_modules/pretty-format/build/plugins/Immutable.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var _collections = __webpack_require__(
        "./node_modules/pretty-format/build/collections.js"
      );
      const getImmutableName = (name) => "Immutable." + name,
        printAsLeaf = (name) => "[" + name + "]";
      const printImmutableValues = (
          val,
          config,
          indentation,
          depth,
          refs,
          printer,
          type
        ) =>
          ++depth > config.maxDepth
            ? printAsLeaf(getImmutableName(type))
            : getImmutableName(type) +
              " [" +
              (0, _collections.printIteratorValues)(
                val.values(),
                config,
                indentation,
                depth,
                refs,
                printer
              ) +
              "]",
        serialize = (val, config, indentation, depth, refs, printer) =>
          val["@@__IMMUTABLE_MAP__@@"]
            ? ((val, config, indentation, depth, refs, printer, type) =>
                ++depth > config.maxDepth
                  ? printAsLeaf(getImmutableName(type))
                  : getImmutableName(type) +
                    " {" +
                    (0, _collections.printIteratorEntries)(
                      val.entries(),
                      config,
                      indentation,
                      depth,
                      refs,
                      printer
                    ) +
                    "}")(
                val,
                config,
                indentation,
                depth,
                refs,
                printer,
                val["@@__IMMUTABLE_ORDERED__@@"] ? "OrderedMap" : "Map"
              )
            : val["@@__IMMUTABLE_LIST__@@"]
            ? printImmutableValues(
                val,
                config,
                indentation,
                depth,
                refs,
                printer,
                "List"
              )
            : val["@@__IMMUTABLE_SET__@@"]
            ? printImmutableValues(
                val,
                config,
                indentation,
                depth,
                refs,
                printer,
                val["@@__IMMUTABLE_ORDERED__@@"] ? "OrderedSet" : "Set"
              )
            : val["@@__IMMUTABLE_STACK__@@"]
            ? printImmutableValues(
                val,
                config,
                indentation,
                depth,
                refs,
                printer,
                "Stack"
              )
            : val["@@__IMMUTABLE_SEQ__@@"]
            ? ((val, config, indentation, depth, refs, printer) => {
                const name = getImmutableName("Seq");
                return ++depth > config.maxDepth
                  ? printAsLeaf(name)
                  : val["@@__IMMUTABLE_KEYED__@@"]
                  ? name +
                    " {" +
                    (val._iter || val._object
                      ? (0, _collections.printIteratorEntries)(
                          val.entries(),
                          config,
                          indentation,
                          depth,
                          refs,
                          printer
                        )
                      : "…") +
                    "}"
                  : name +
                    " [" +
                    (val._iter || val._array || val._collection || val._iterable
                      ? (0, _collections.printIteratorValues)(
                          val.values(),
                          config,
                          indentation,
                          depth,
                          refs,
                          printer
                        )
                      : "…") +
                    "]";
              })(val, config, indentation, depth, refs, printer)
            : ((val, config, indentation, depth, refs, printer) => {
                const name = getImmutableName(val._name || "Record");
                return ++depth > config.maxDepth
                  ? printAsLeaf(name)
                  : name +
                      " {" +
                      (0, _collections.printIteratorEntries)(
                        (function getRecordEntries(val) {
                          let i = 0;
                          return {
                            next() {
                              if (i < val._keys.length) {
                                const key = val._keys[i++];
                                return { done: !1, value: [key, val.get(key)] };
                              }
                              return { done: !0, value: void 0 };
                            },
                          };
                        })(val),
                        config,
                        indentation,
                        depth,
                        refs,
                        printer
                      ) +
                      "}";
              })(val, config, indentation, depth, refs, printer);
      exports.serialize = serialize;
      const test = (val) =>
        val &&
        (!0 === val["@@__IMMUTABLE_ITERABLE__@@"] ||
          !0 === val["@@__IMMUTABLE_RECORD__@@"]);
      exports.test = test;
      var _default = { serialize, test };
      exports.default = _default;
    },
    "./node_modules/pretty-format/build/plugins/ReactElement.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var ReactIs = (function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) return obj;
          if (
            null === obj ||
            ("object" != typeof obj && "function" != typeof obj)
          )
            return { default: obj };
          var cache = _getRequireWildcardCache(nodeInterop);
          if (cache && cache.has(obj)) return cache.get(obj);
          var newObj = {},
            hasPropertyDescriptor =
              Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var key in obj)
            if (
              "default" !== key &&
              Object.prototype.hasOwnProperty.call(obj, key)
            ) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
              desc && (desc.get || desc.set)
                ? Object.defineProperty(newObj, key, desc)
                : (newObj[key] = obj[key]);
            }
          (newObj.default = obj), cache && cache.set(obj, newObj);
          return newObj;
        })(
          __webpack_require__(
            "./node_modules/pretty-format/node_modules/react-is/index.js"
          )
        ),
        _markup = __webpack_require__(
          "./node_modules/pretty-format/build/plugins/lib/markup.js"
        );
      function _getRequireWildcardCache(nodeInterop) {
        if ("function" != typeof WeakMap) return null;
        var cacheBabelInterop = new WeakMap(),
          cacheNodeInterop = new WeakMap();
        return (_getRequireWildcardCache = function (nodeInterop) {
          return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      const getChildren = (arg, children = []) => (
          Array.isArray(arg)
            ? arg.forEach((item) => {
                getChildren(item, children);
              })
            : null != arg && !1 !== arg && children.push(arg),
          children
        ),
        getType = (element) => {
          const type = element.type;
          if ("string" == typeof type) return type;
          if ("function" == typeof type)
            return type.displayName || type.name || "Unknown";
          if (ReactIs.isFragment(element)) return "React.Fragment";
          if (ReactIs.isSuspense(element)) return "React.Suspense";
          if ("object" == typeof type && null !== type) {
            if (ReactIs.isContextProvider(element)) return "Context.Provider";
            if (ReactIs.isContextConsumer(element)) return "Context.Consumer";
            if (ReactIs.isForwardRef(element)) {
              if (type.displayName) return type.displayName;
              const functionName =
                type.render.displayName || type.render.name || "";
              return "" !== functionName
                ? "ForwardRef(" + functionName + ")"
                : "ForwardRef";
            }
            if (ReactIs.isMemo(element)) {
              const functionName =
                type.displayName ||
                type.type.displayName ||
                type.type.name ||
                "";
              return "" !== functionName
                ? "Memo(" + functionName + ")"
                : "Memo";
            }
          }
          return "UNDEFINED";
        },
        serialize = (element, config, indentation, depth, refs, printer) =>
          ++depth > config.maxDepth
            ? (0, _markup.printElementAsLeaf)(getType(element), config)
            : (0, _markup.printElement)(
                getType(element),
                (0, _markup.printProps)(
                  ((element) => {
                    const { props } = element;
                    return Object.keys(props)
                      .filter(
                        (key) => "children" !== key && void 0 !== props[key]
                      )
                      .sort();
                  })(element),
                  element.props,
                  config,
                  indentation + config.indent,
                  depth,
                  refs,
                  printer
                ),
                (0, _markup.printChildren)(
                  getChildren(element.props.children),
                  config,
                  indentation + config.indent,
                  depth,
                  refs,
                  printer
                ),
                config,
                indentation
              );
      exports.serialize = serialize;
      const test = (val) => null != val && ReactIs.isElement(val);
      exports.test = test;
      var _default = { serialize, test };
      exports.default = _default;
    },
    "./node_modules/pretty-format/build/plugins/ReactTestComponent.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.test = exports.serialize = exports.default = void 0);
      var _markup = __webpack_require__(
          "./node_modules/pretty-format/build/plugins/lib/markup.js"
        ),
        global =
          "undefined" != typeof globalThis
            ? globalThis
            : void 0 !== global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : Function("return this")(),
        Symbol = global["jest-symbol-do-not-touch"] || global.Symbol;
      const testSymbol =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.test.json")
            : 245830487,
        serialize = (object, config, indentation, depth, refs, printer) =>
          ++depth > config.maxDepth
            ? (0, _markup.printElementAsLeaf)(object.type, config)
            : (0, _markup.printElement)(
                object.type,
                object.props
                  ? (0, _markup.printProps)(
                      ((object) => {
                        const { props } = object;
                        return props
                          ? Object.keys(props)
                              .filter((key) => void 0 !== props[key])
                              .sort()
                          : [];
                      })(object),
                      object.props,
                      config,
                      indentation + config.indent,
                      depth,
                      refs,
                      printer
                    )
                  : "",
                object.children
                  ? (0, _markup.printChildren)(
                      object.children,
                      config,
                      indentation + config.indent,
                      depth,
                      refs,
                      printer
                    )
                  : "",
                config,
                indentation
              );
      exports.serialize = serialize;
      const test = (val) => val && val.$$typeof === testSymbol;
      exports.test = test;
      var _default = { serialize, test };
      exports.default = _default;
    },
    "./node_modules/pretty-format/build/plugins/lib/escapeHTML.js": (
      __unused_webpack_module,
      exports
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = function escapeHTML(str) {
          return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        });
    },
    "./node_modules/pretty-format/build/plugins/lib/markup.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.printText =
          exports.printProps =
          exports.printElementAsLeaf =
          exports.printElement =
          exports.printComment =
          exports.printChildren =
            void 0);
      var _escapeHTML = (function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      })(
        __webpack_require__(
          "./node_modules/pretty-format/build/plugins/lib/escapeHTML.js"
        )
      );
      exports.printProps = (
        keys,
        props,
        config,
        indentation,
        depth,
        refs,
        printer
      ) => {
        const indentationNext = indentation + config.indent,
          colors = config.colors;
        return keys
          .map((key) => {
            const value = props[key];
            let printed = printer(value, config, indentationNext, depth, refs);
            return (
              "string" != typeof value &&
                (-1 !== printed.indexOf("\n") &&
                  (printed =
                    config.spacingOuter +
                    indentationNext +
                    printed +
                    config.spacingOuter +
                    indentation),
                (printed = "{" + printed + "}")),
              config.spacingInner +
                indentation +
                colors.prop.open +
                key +
                colors.prop.close +
                "=" +
                colors.value.open +
                printed +
                colors.value.close
            );
          })
          .join("");
      };
      exports.printChildren = (
        children,
        config,
        indentation,
        depth,
        refs,
        printer
      ) =>
        children
          .map(
            (child) =>
              config.spacingOuter +
              indentation +
              ("string" == typeof child
                ? printText(child, config)
                : printer(child, config, indentation, depth, refs))
          )
          .join("");
      const printText = (text, config) => {
        const contentColor = config.colors.content;
        return (
          contentColor.open +
          (0, _escapeHTML.default)(text) +
          contentColor.close
        );
      };
      exports.printText = printText;
      exports.printComment = (comment, config) => {
        const commentColor = config.colors.comment;
        return (
          commentColor.open +
          "\x3c!--" +
          (0, _escapeHTML.default)(comment) +
          "--\x3e" +
          commentColor.close
        );
      };
      exports.printElement = (
        type,
        printedProps,
        printedChildren,
        config,
        indentation
      ) => {
        const tagColor = config.colors.tag;
        return (
          tagColor.open +
          "<" +
          type +
          (printedProps &&
            tagColor.close +
              printedProps +
              config.spacingOuter +
              indentation +
              tagColor.open) +
          (printedChildren
            ? ">" +
              tagColor.close +
              printedChildren +
              config.spacingOuter +
              indentation +
              tagColor.open +
              "</" +
              type
            : (printedProps && !config.min ? "" : " ") + "/") +
          ">" +
          tagColor.close
        );
      };
      exports.printElementAsLeaf = (type, config) => {
        const tagColor = config.colors.tag;
        return (
          tagColor.open +
          "<" +
          type +
          tagColor.close +
          " …" +
          tagColor.open +
          " />" +
          tagColor.close
        );
      };
    },
    "./node_modules/pretty-format/node_modules/ansi-styles/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      module = __webpack_require__.nmd(module);
      const wrapAnsi256 =
          (offset = 0) =>
          (code) =>
            `[${38 + offset};5;${code}m`,
        wrapAnsi16m =
          (offset = 0) =>
          (red, green, blue) =>
            `[${38 + offset};2;${red};${green};${blue}m`;
      Object.defineProperty(module, "exports", {
        enumerable: !0,
        get: function assembleStyles() {
          const codes = new Map(),
            styles = {
              modifier: {
                reset: [0, 0],
                bold: [1, 22],
                dim: [2, 22],
                italic: [3, 23],
                underline: [4, 24],
                overline: [53, 55],
                inverse: [7, 27],
                hidden: [8, 28],
                strikethrough: [9, 29],
              },
              color: {
                black: [30, 39],
                red: [31, 39],
                green: [32, 39],
                yellow: [33, 39],
                blue: [34, 39],
                magenta: [35, 39],
                cyan: [36, 39],
                white: [37, 39],
                blackBright: [90, 39],
                redBright: [91, 39],
                greenBright: [92, 39],
                yellowBright: [93, 39],
                blueBright: [94, 39],
                magentaBright: [95, 39],
                cyanBright: [96, 39],
                whiteBright: [97, 39],
              },
              bgColor: {
                bgBlack: [40, 49],
                bgRed: [41, 49],
                bgGreen: [42, 49],
                bgYellow: [43, 49],
                bgBlue: [44, 49],
                bgMagenta: [45, 49],
                bgCyan: [46, 49],
                bgWhite: [47, 49],
                bgBlackBright: [100, 49],
                bgRedBright: [101, 49],
                bgGreenBright: [102, 49],
                bgYellowBright: [103, 49],
                bgBlueBright: [104, 49],
                bgMagentaBright: [105, 49],
                bgCyanBright: [106, 49],
                bgWhiteBright: [107, 49],
              },
            };
          (styles.color.gray = styles.color.blackBright),
            (styles.bgColor.bgGray = styles.bgColor.bgBlackBright),
            (styles.color.grey = styles.color.blackBright),
            (styles.bgColor.bgGrey = styles.bgColor.bgBlackBright);
          for (const [groupName, group] of Object.entries(styles)) {
            for (const [styleName, style] of Object.entries(group))
              (styles[styleName] = {
                open: `[${style[0]}m`,
                close: `[${style[1]}m`,
              }),
                (group[styleName] = styles[styleName]),
                codes.set(style[0], style[1]);
            Object.defineProperty(styles, groupName, {
              value: group,
              enumerable: !1,
            });
          }
          return (
            Object.defineProperty(styles, "codes", {
              value: codes,
              enumerable: !1,
            }),
            (styles.color.close = "[39m"),
            (styles.bgColor.close = "[49m"),
            (styles.color.ansi256 = wrapAnsi256()),
            (styles.color.ansi16m = wrapAnsi16m()),
            (styles.bgColor.ansi256 = wrapAnsi256(10)),
            (styles.bgColor.ansi16m = wrapAnsi16m(10)),
            Object.defineProperties(styles, {
              rgbToAnsi256: {
                value: (red, green, blue) =>
                  red === green && green === blue
                    ? red < 8
                      ? 16
                      : red > 248
                      ? 231
                      : Math.round(((red - 8) / 247) * 24) + 232
                    : 16 +
                      36 * Math.round((red / 255) * 5) +
                      6 * Math.round((green / 255) * 5) +
                      Math.round((blue / 255) * 5),
                enumerable: !1,
              },
              hexToRgb: {
                value: (hex) => {
                  const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(
                    hex.toString(16)
                  );
                  if (!matches) return [0, 0, 0];
                  let { colorString } = matches.groups;
                  3 === colorString.length &&
                    (colorString = colorString
                      .split("")
                      .map((character) => character + character)
                      .join(""));
                  const integer = Number.parseInt(colorString, 16);
                  return [
                    (integer >> 16) & 255,
                    (integer >> 8) & 255,
                    255 & integer,
                  ];
                },
                enumerable: !1,
              },
              hexToAnsi256: {
                value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
                enumerable: !1,
              },
            }),
            styles
          );
        },
      });
    },
    "./node_modules/pretty-format/node_modules/react-is/cjs/react-is.production.min.js":
      (__unused_webpack_module, exports) => {
        "use strict";
        var b = 60103,
          c = 60106,
          d = 60107,
          e = 60108,
          f = 60114,
          g = 60109,
          h = 60110,
          k = 60112,
          l = 60113,
          m = 60120,
          n = 60115,
          p = 60116,
          q = 60121,
          r = 60122,
          u = 60117,
          v = 60129,
          w = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var x = Symbol.for;
          (b = x("react.element")),
            (c = x("react.portal")),
            (d = x("react.fragment")),
            (e = x("react.strict_mode")),
            (f = x("react.profiler")),
            (g = x("react.provider")),
            (h = x("react.context")),
            (k = x("react.forward_ref")),
            (l = x("react.suspense")),
            (m = x("react.suspense_list")),
            (n = x("react.memo")),
            (p = x("react.lazy")),
            (q = x("react.block")),
            (r = x("react.server.block")),
            (u = x("react.fundamental")),
            (v = x("react.debug_trace_mode")),
            (w = x("react.legacy_hidden"));
        }
        function y(a) {
          if ("object" == typeof a && null !== a) {
            var t = a.$$typeof;
            switch (t) {
              case b:
                switch ((a = a.type)) {
                  case d:
                  case f:
                  case e:
                  case l:
                  case m:
                    return a;
                  default:
                    switch ((a = a && a.$$typeof)) {
                      case h:
                      case k:
                      case p:
                      case n:
                      case g:
                        return a;
                      default:
                        return t;
                    }
                }
              case c:
                return t;
            }
          }
        }
        var z = g,
          A = b,
          B = k,
          C = d,
          D = p,
          E = n,
          F = c,
          G = f,
          H = e,
          I = l;
        (exports.ContextConsumer = h),
          (exports.ContextProvider = z),
          (exports.Element = A),
          (exports.ForwardRef = B),
          (exports.Fragment = C),
          (exports.Lazy = D),
          (exports.Memo = E),
          (exports.Portal = F),
          (exports.Profiler = G),
          (exports.StrictMode = H),
          (exports.Suspense = I),
          (exports.isAsyncMode = function () {
            return !1;
          }),
          (exports.isConcurrentMode = function () {
            return !1;
          }),
          (exports.isContextConsumer = function (a) {
            return y(a) === h;
          }),
          (exports.isContextProvider = function (a) {
            return y(a) === g;
          }),
          (exports.isElement = function (a) {
            return "object" == typeof a && null !== a && a.$$typeof === b;
          }),
          (exports.isForwardRef = function (a) {
            return y(a) === k;
          }),
          (exports.isFragment = function (a) {
            return y(a) === d;
          }),
          (exports.isLazy = function (a) {
            return y(a) === p;
          }),
          (exports.isMemo = function (a) {
            return y(a) === n;
          }),
          (exports.isPortal = function (a) {
            return y(a) === c;
          }),
          (exports.isProfiler = function (a) {
            return y(a) === f;
          }),
          (exports.isStrictMode = function (a) {
            return y(a) === e;
          }),
          (exports.isSuspense = function (a) {
            return y(a) === l;
          }),
          (exports.isValidElementType = function (a) {
            return (
              "string" == typeof a ||
              "function" == typeof a ||
              a === d ||
              a === f ||
              a === v ||
              a === e ||
              a === l ||
              a === m ||
              a === w ||
              ("object" == typeof a &&
                null !== a &&
                (a.$$typeof === p ||
                  a.$$typeof === n ||
                  a.$$typeof === g ||
                  a.$$typeof === h ||
                  a.$$typeof === k ||
                  a.$$typeof === u ||
                  a.$$typeof === q ||
                  a[0] === r))
            );
          }),
          (exports.typeOf = y);
      },
    "./node_modules/pretty-format/node_modules/react-is/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      module.exports = __webpack_require__(
        "./node_modules/pretty-format/node_modules/react-is/cjs/react-is.production.min.js"
      );
    },
    "./node_modules/regexp.prototype.flags/implementation.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var functionsHaveConfigurableNames = __webpack_require__(
          "./node_modules/functions-have-names/index.js"
        ).functionsHaveConfigurableNames(),
        $Object = Object,
        $TypeError = TypeError;
      (module.exports = function flags() {
        if (null != this && this !== $Object(this))
          throw new $TypeError(
            "RegExp.prototype.flags getter called on non-object"
          );
        var result = "";
        return (
          this.hasIndices && (result += "d"),
          this.global && (result += "g"),
          this.ignoreCase && (result += "i"),
          this.multiline && (result += "m"),
          this.dotAll && (result += "s"),
          this.unicode && (result += "u"),
          this.sticky && (result += "y"),
          result
        );
      }),
        functionsHaveConfigurableNames &&
          Object.defineProperty &&
          Object.defineProperty(module.exports, "name", { value: "get flags" });
    },
    "./node_modules/regexp.prototype.flags/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var define = __webpack_require__(
          "./node_modules/define-properties/index.js"
        ),
        callBind = __webpack_require__("./node_modules/call-bind/index.js"),
        implementation = __webpack_require__(
          "./node_modules/regexp.prototype.flags/implementation.js"
        ),
        getPolyfill = __webpack_require__(
          "./node_modules/regexp.prototype.flags/polyfill.js"
        ),
        shim = __webpack_require__(
          "./node_modules/regexp.prototype.flags/shim.js"
        ),
        flagsBound = callBind(getPolyfill());
      define(flagsBound, { getPolyfill, implementation, shim }),
        (module.exports = flagsBound);
    },
    "./node_modules/regexp.prototype.flags/polyfill.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var implementation = __webpack_require__(
          "./node_modules/regexp.prototype.flags/implementation.js"
        ),
        supportsDescriptors = __webpack_require__(
          "./node_modules/define-properties/index.js"
        ).supportsDescriptors,
        $gOPD = Object.getOwnPropertyDescriptor;
      module.exports = function getPolyfill() {
        if (supportsDescriptors && "gim" === /a/gim.flags) {
          var descriptor = $gOPD(RegExp.prototype, "flags");
          if (
            descriptor &&
            "function" == typeof descriptor.get &&
            "boolean" == typeof RegExp.prototype.dotAll &&
            "boolean" == typeof RegExp.prototype.hasIndices
          ) {
            var calls = "",
              o = {};
            if (
              (Object.defineProperty(o, "hasIndices", {
                get: function () {
                  calls += "d";
                },
              }),
              Object.defineProperty(o, "sticky", {
                get: function () {
                  calls += "y";
                },
              }),
              "dy" === calls)
            )
              return descriptor.get;
          }
        }
        return implementation;
      };
    },
    "./node_modules/regexp.prototype.flags/shim.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var supportsDescriptors = __webpack_require__(
          "./node_modules/define-properties/index.js"
        ).supportsDescriptors,
        getPolyfill = __webpack_require__(
          "./node_modules/regexp.prototype.flags/polyfill.js"
        ),
        gOPD = Object.getOwnPropertyDescriptor,
        defineProperty = Object.defineProperty,
        TypeErr = TypeError,
        getProto = Object.getPrototypeOf,
        regex = /a/;
      module.exports = function shimFlags() {
        if (!supportsDescriptors || !getProto)
          throw new TypeErr(
            "RegExp.prototype.flags requires a true ES5 environment that supports property descriptors"
          );
        var polyfill = getPolyfill(),
          proto = getProto(regex),
          descriptor = gOPD(proto, "flags");
        return (
          (descriptor && descriptor.get === polyfill) ||
            defineProperty(proto, "flags", {
              configurable: !0,
              enumerable: !1,
              get: polyfill,
            }),
          polyfill
        );
      };
    },
    "./node_modules/side-channel/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var GetIntrinsic = __webpack_require__(
          "./node_modules/side-channel/node_modules/get-intrinsic/index.js"
        ),
        callBound = __webpack_require__(
          "./node_modules/call-bind/callBound.js"
        ),
        inspect = __webpack_require__("./node_modules/object-inspect/index.js"),
        $TypeError = GetIntrinsic("%TypeError%"),
        $WeakMap = GetIntrinsic("%WeakMap%", !0),
        $Map = GetIntrinsic("%Map%", !0),
        $weakMapGet = callBound("WeakMap.prototype.get", !0),
        $weakMapSet = callBound("WeakMap.prototype.set", !0),
        $weakMapHas = callBound("WeakMap.prototype.has", !0),
        $mapGet = callBound("Map.prototype.get", !0),
        $mapSet = callBound("Map.prototype.set", !0),
        $mapHas = callBound("Map.prototype.has", !0),
        listGetNode = function (list, key) {
          for (var curr, prev = list; null !== (curr = prev.next); prev = curr)
            if (curr.key === key)
              return (
                (prev.next = curr.next),
                (curr.next = list.next),
                (list.next = curr),
                curr
              );
        };
      module.exports = function getSideChannel() {
        var $wm,
          $m,
          $o,
          channel = {
            assert: function (key) {
              if (!channel.has(key))
                throw new $TypeError(
                  "Side channel does not contain " + inspect(key)
                );
            },
            get: function (key) {
              if (
                $WeakMap &&
                key &&
                ("object" == typeof key || "function" == typeof key)
              ) {
                if ($wm) return $weakMapGet($wm, key);
              } else if ($Map) {
                if ($m) return $mapGet($m, key);
              } else if ($o)
                return (function (objects, key) {
                  var node = listGetNode(objects, key);
                  return node && node.value;
                })($o, key);
            },
            has: function (key) {
              if (
                $WeakMap &&
                key &&
                ("object" == typeof key || "function" == typeof key)
              ) {
                if ($wm) return $weakMapHas($wm, key);
              } else if ($Map) {
                if ($m) return $mapHas($m, key);
              } else if ($o)
                return (function (objects, key) {
                  return !!listGetNode(objects, key);
                })($o, key);
              return !1;
            },
            set: function (key, value) {
              $WeakMap &&
              key &&
              ("object" == typeof key || "function" == typeof key)
                ? ($wm || ($wm = new $WeakMap()), $weakMapSet($wm, key, value))
                : $Map
                ? ($m || ($m = new $Map()), $mapSet($m, key, value))
                : ($o || ($o = { key: {}, next: null }),
                  (function (objects, key, value) {
                    var node = listGetNode(objects, key);
                    node
                      ? (node.value = value)
                      : (objects.next = { key, next: objects.next, value });
                  })($o, key, value));
            },
          };
        return channel;
      };
    },
    "./node_modules/side-channel/node_modules/get-intrinsic/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var $SyntaxError = SyntaxError,
        $Function = Function,
        $TypeError = TypeError,
        getEvalledConstructor = function (expressionSyntax) {
          try {
            return $Function(
              '"use strict"; return (' + expressionSyntax + ").constructor;"
            )();
          } catch (e) {}
        },
        $gOPD = Object.getOwnPropertyDescriptor;
      if ($gOPD)
        try {
          $gOPD({}, "");
        } catch (e) {
          $gOPD = null;
        }
      var throwTypeError = function () {
          throw new $TypeError();
        },
        ThrowTypeError = $gOPD
          ? (function () {
              try {
                return throwTypeError;
              } catch (calleeThrows) {
                try {
                  return $gOPD(arguments, "callee").get;
                } catch (gOPDthrows) {
                  return throwTypeError;
                }
              }
            })()
          : throwTypeError,
        hasSymbols = __webpack_require__(
          "./node_modules/has-symbols/index.js"
        )(),
        getProto =
          Object.getPrototypeOf ||
          function (x) {
            return x.__proto__;
          },
        needsEval = {},
        TypedArray =
          "undefined" == typeof Uint8Array ? undefined : getProto(Uint8Array),
        INTRINSICS = {
          "%AggregateError%":
            "undefined" == typeof AggregateError ? undefined : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%":
            "undefined" == typeof ArrayBuffer ? undefined : ArrayBuffer,
          "%ArrayIteratorPrototype%": hasSymbols
            ? getProto([][Symbol.iterator]())
            : undefined,
          "%AsyncFromSyncIteratorPrototype%": undefined,
          "%AsyncFunction%": needsEval,
          "%AsyncGenerator%": needsEval,
          "%AsyncGeneratorFunction%": needsEval,
          "%AsyncIteratorPrototype%": needsEval,
          "%Atomics%": "undefined" == typeof Atomics ? undefined : Atomics,
          "%BigInt%": "undefined" == typeof BigInt ? undefined : BigInt,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" == typeof DataView ? undefined : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%":
            "undefined" == typeof Float32Array ? undefined : Float32Array,
          "%Float64Array%":
            "undefined" == typeof Float64Array ? undefined : Float64Array,
          "%FinalizationRegistry%":
            "undefined" == typeof FinalizationRegistry
              ? undefined
              : FinalizationRegistry,
          "%Function%": $Function,
          "%GeneratorFunction%": needsEval,
          "%Int8Array%":
            "undefined" == typeof Int8Array ? undefined : Int8Array,
          "%Int16Array%":
            "undefined" == typeof Int16Array ? undefined : Int16Array,
          "%Int32Array%":
            "undefined" == typeof Int32Array ? undefined : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": hasSymbols
            ? getProto(getProto([][Symbol.iterator]()))
            : undefined,
          "%JSON%": "object" == typeof JSON ? JSON : undefined,
          "%Map%": "undefined" == typeof Map ? undefined : Map,
          "%MapIteratorPrototype%":
            "undefined" != typeof Map && hasSymbols
              ? getProto(new Map()[Symbol.iterator]())
              : undefined,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? undefined : Promise,
          "%Proxy%": "undefined" == typeof Proxy ? undefined : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": "undefined" == typeof Reflect ? undefined : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" == typeof Set ? undefined : Set,
          "%SetIteratorPrototype%":
            "undefined" != typeof Set && hasSymbols
              ? getProto(new Set()[Symbol.iterator]())
              : undefined,
          "%SharedArrayBuffer%":
            "undefined" == typeof SharedArrayBuffer
              ? undefined
              : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": hasSymbols
            ? getProto(""[Symbol.iterator]())
            : undefined,
          "%Symbol%": hasSymbols ? Symbol : undefined,
          "%SyntaxError%": $SyntaxError,
          "%ThrowTypeError%": ThrowTypeError,
          "%TypedArray%": TypedArray,
          "%TypeError%": $TypeError,
          "%Uint8Array%":
            "undefined" == typeof Uint8Array ? undefined : Uint8Array,
          "%Uint8ClampedArray%":
            "undefined" == typeof Uint8ClampedArray
              ? undefined
              : Uint8ClampedArray,
          "%Uint16Array%":
            "undefined" == typeof Uint16Array ? undefined : Uint16Array,
          "%Uint32Array%":
            "undefined" == typeof Uint32Array ? undefined : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": "undefined" == typeof WeakMap ? undefined : WeakMap,
          "%WeakRef%": "undefined" == typeof WeakRef ? undefined : WeakRef,
          "%WeakSet%": "undefined" == typeof WeakSet ? undefined : WeakSet,
        },
        doEval = function doEval(name) {
          var value;
          if ("%AsyncFunction%" === name)
            value = getEvalledConstructor("async function () {}");
          else if ("%GeneratorFunction%" === name)
            value = getEvalledConstructor("function* () {}");
          else if ("%AsyncGeneratorFunction%" === name)
            value = getEvalledConstructor("async function* () {}");
          else if ("%AsyncGenerator%" === name) {
            var fn = doEval("%AsyncGeneratorFunction%");
            fn && (value = fn.prototype);
          } else if ("%AsyncIteratorPrototype%" === name) {
            var gen = doEval("%AsyncGenerator%");
            gen && (value = getProto(gen.prototype));
          }
          return (INTRINSICS[name] = value), value;
        },
        LEGACY_ALIASES = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        bind = __webpack_require__("./node_modules/function-bind/index.js"),
        hasOwn = __webpack_require__("./node_modules/has/src/index.js"),
        $concat = bind.call(Function.call, Array.prototype.concat),
        $spliceApply = bind.call(Function.apply, Array.prototype.splice),
        $replace = bind.call(Function.call, String.prototype.replace),
        $strSlice = bind.call(Function.call, String.prototype.slice),
        rePropName =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        reEscapeChar = /\\(\\)?/g,
        getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
          var alias,
            intrinsicName = name;
          if (
            (hasOwn(LEGACY_ALIASES, intrinsicName) &&
              (intrinsicName =
                "%" + (alias = LEGACY_ALIASES[intrinsicName])[0] + "%"),
            hasOwn(INTRINSICS, intrinsicName))
          ) {
            var value = INTRINSICS[intrinsicName];
            if (
              (value === needsEval && (value = doEval(intrinsicName)),
              void 0 === value && !allowMissing)
            )
              throw new $TypeError(
                "intrinsic " +
                  name +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias, name: intrinsicName, value };
          }
          throw new $SyntaxError("intrinsic " + name + " does not exist!");
        };
      module.exports = function GetIntrinsic(name, allowMissing) {
        if ("string" != typeof name || 0 === name.length)
          throw new $TypeError("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof allowMissing)
          throw new $TypeError('"allowMissing" argument must be a boolean');
        var parts = (function stringToPath(string) {
            var first = $strSlice(string, 0, 1),
              last = $strSlice(string, -1);
            if ("%" === first && "%" !== last)
              throw new $SyntaxError(
                "invalid intrinsic syntax, expected closing `%`"
              );
            if ("%" === last && "%" !== first)
              throw new $SyntaxError(
                "invalid intrinsic syntax, expected opening `%`"
              );
            var result = [];
            return (
              $replace(
                string,
                rePropName,
                function (match, number, quote, subString) {
                  result[result.length] = quote
                    ? $replace(subString, reEscapeChar, "$1")
                    : number || match;
                }
              ),
              result
            );
          })(name),
          intrinsicBaseName = parts.length > 0 ? parts[0] : "",
          intrinsic = getBaseIntrinsic(
            "%" + intrinsicBaseName + "%",
            allowMissing
          ),
          intrinsicRealName = intrinsic.name,
          value = intrinsic.value,
          skipFurtherCaching = !1,
          alias = intrinsic.alias;
        alias &&
          ((intrinsicBaseName = alias[0]),
          $spliceApply(parts, $concat([0, 1], alias)));
        for (var i = 1, isOwn = !0; i < parts.length; i += 1) {
          var part = parts[i],
            first = $strSlice(part, 0, 1),
            last = $strSlice(part, -1);
          if (
            ('"' === first ||
              "'" === first ||
              "`" === first ||
              '"' === last ||
              "'" === last ||
              "`" === last) &&
            first !== last
          )
            throw new $SyntaxError(
              "property names with quotes must have matching quotes"
            );
          if (
            (("constructor" !== part && isOwn) || (skipFurtherCaching = !0),
            hasOwn(
              INTRINSICS,
              (intrinsicRealName =
                "%" + (intrinsicBaseName += "." + part) + "%")
            ))
          )
            value = INTRINSICS[intrinsicRealName];
          else if (null != value) {
            if (!(part in value)) {
              if (!allowMissing)
                throw new $TypeError(
                  "base intrinsic for " +
                    name +
                    " exists, but the property is not available."
                );
              return;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              value =
                (isOwn = !!desc) &&
                "get" in desc &&
                !("originalValue" in desc.get)
                  ? desc.get
                  : value[part];
            } else (isOwn = hasOwn(value, part)), (value = value[part]);
            isOwn &&
              !skipFurtherCaching &&
              (INTRINSICS[intrinsicRealName] = value);
          }
        }
        return value;
      };
    },
    "./node_modules/stop-iteration-iterator/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var SLOT = __webpack_require__(
          "./node_modules/stop-iteration-iterator/node_modules/internal-slot/index.js"
        ),
        $SyntaxError = SyntaxError,
        $StopIteration =
          "object" == typeof StopIteration ? StopIteration : null;
      module.exports = function getStopIterationIterator(origIterator) {
        if (!$StopIteration)
          throw new $SyntaxError("this environment lacks StopIteration");
        SLOT.set(origIterator, "[[Done]]", !1);
        var siIterator = {
          next: function next() {
            var iterator = SLOT.get(this, "[[Iterator]]"),
              done = SLOT.get(iterator, "[[Done]]");
            try {
              return { done, value: done ? void 0 : iterator.next() };
            } catch (e) {
              if ((SLOT.set(iterator, "[[Done]]", !0), e !== $StopIteration))
                throw e;
              return { done: !0, value: void 0 };
            }
          },
        };
        return SLOT.set(siIterator, "[[Iterator]]", origIterator), siIterator;
      };
    },
    "./node_modules/stop-iteration-iterator/node_modules/internal-slot/index.js":
      (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        var GetIntrinsic = __webpack_require__(
            "./node_modules/get-intrinsic/index.js"
          ),
          has = __webpack_require__("./node_modules/has/src/index.js"),
          channel = __webpack_require__(
            "./node_modules/side-channel/index.js"
          )(),
          $TypeError = GetIntrinsic("%TypeError%"),
          SLOT = {
            assert: function (O, slot) {
              if (!O || ("object" != typeof O && "function" != typeof O))
                throw new $TypeError("`O` is not an object");
              if ("string" != typeof slot)
                throw new $TypeError("`slot` must be a string");
              if ((channel.assert(O), !SLOT.has(O, slot)))
                throw new $TypeError("`slot` is not present on `O`");
            },
            get: function (O, slot) {
              if (!O || ("object" != typeof O && "function" != typeof O))
                throw new $TypeError("`O` is not an object");
              if ("string" != typeof slot)
                throw new $TypeError("`slot` must be a string");
              var slots = channel.get(O);
              return slots && slots["$" + slot];
            },
            has: function (O, slot) {
              if (!O || ("object" != typeof O && "function" != typeof O))
                throw new $TypeError("`O` is not an object");
              if ("string" != typeof slot)
                throw new $TypeError("`slot` must be a string");
              var slots = channel.get(O);
              return !!slots && has(slots, "$" + slot);
            },
            set: function (O, slot, V) {
              if (!O || ("object" != typeof O && "function" != typeof O))
                throw new $TypeError("`O` is not an object");
              if ("string" != typeof slot)
                throw new $TypeError("`slot` must be a string");
              var slots = channel.get(O);
              slots || ((slots = {}), channel.set(O, slots)),
                (slots["$" + slot] = V);
            },
          };
        Object.freeze && Object.freeze(SLOT), (module.exports = SLOT);
      },
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": (
      module
    ) => {
      "use strict";
      var stylesInDOM = [];
      function getIndexByIdentifier(identifier) {
        for (var result = -1, i = 0; i < stylesInDOM.length; i++)
          if (stylesInDOM[i].identifier === identifier) {
            result = i;
            break;
          }
        return result;
      }
      function modulesToDom(list, options) {
        for (
          var idCountMap = {}, identifiers = [], i = 0;
          i < list.length;
          i++
        ) {
          var item = list[i],
            id = options.base ? item[0] + options.base : item[0],
            count = idCountMap[id] || 0,
            identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var indexByIdentifier = getIndexByIdentifier(identifier),
            obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };
          if (-1 !== indexByIdentifier)
            stylesInDOM[indexByIdentifier].references++,
              stylesInDOM[indexByIdentifier].updater(obj);
          else {
            var updater = addElementStyle(obj, options);
            (options.byIndex = i),
              stylesInDOM.splice(i, 0, { identifier, updater, references: 1 });
          }
          identifiers.push(identifier);
        }
        return identifiers;
      }
      function addElementStyle(obj, options) {
        var api = options.domAPI(options);
        api.update(obj);
        return function updater(newObj) {
          if (newObj) {
            if (
              newObj.css === obj.css &&
              newObj.media === obj.media &&
              newObj.sourceMap === obj.sourceMap &&
              newObj.supports === obj.supports &&
              newObj.layer === obj.layer
            )
              return;
            api.update((obj = newObj));
          } else api.remove();
        };
      }
      module.exports = function (list, options) {
        var lastIdentifiers = modulesToDom(
          (list = list || []),
          (options = options || {})
        );
        return function update(newList) {
          newList = newList || [];
          for (var i = 0; i < lastIdentifiers.length; i++) {
            var index = getIndexByIdentifier(lastIdentifiers[i]);
            stylesInDOM[index].references--;
          }
          for (
            var newLastIdentifiers = modulesToDom(newList, options), _i = 0;
            _i < lastIdentifiers.length;
            _i++
          ) {
            var _index = getIndexByIdentifier(lastIdentifiers[_i]);
            0 === stylesInDOM[_index].references &&
              (stylesInDOM[_index].updater(), stylesInDOM.splice(_index, 1));
          }
          lastIdentifiers = newLastIdentifiers;
        };
      };
    },
    "./node_modules/style-loader/dist/runtime/insertBySelector.js": (
      module
    ) => {
      "use strict";
      var memo = {};
      module.exports = function insertBySelector(insert, style) {
        var target = (function getTarget(target) {
          if (void 0 === memo[target]) {
            var styleTarget = document.querySelector(target);
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            )
              try {
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                styleTarget = null;
              }
            memo[target] = styleTarget;
          }
          return memo[target];
        })(insert);
        if (!target)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        target.appendChild(style);
      };
    },
    "./node_modules/style-loader/dist/runtime/insertStyleElement.js": (
      module
    ) => {
      "use strict";
      module.exports = function insertStyleElement(options) {
        var element = document.createElement("style");
        return (
          options.setAttributes(element, options.attributes),
          options.insert(element, options.options),
          element
        );
      };
    },
    "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      (module, __unused_webpack_exports, __webpack_require__) => {
        "use strict";
        module.exports = function setAttributesWithoutAttributes(styleElement) {
          var nonce = __webpack_require__.nc;
          nonce && styleElement.setAttribute("nonce", nonce);
        };
      },
    "./node_modules/style-loader/dist/runtime/styleDomAPI.js": (module) => {
      "use strict";
      module.exports = function domAPI(options) {
        if ("undefined" == typeof document)
          return { update: function update() {}, remove: function remove() {} };
        var styleElement = options.insertStyleElement(options);
        return {
          update: function update(obj) {
            !(function apply(styleElement, options, obj) {
              var css = "";
              obj.supports &&
                (css += "@supports (".concat(obj.supports, ") {")),
                obj.media && (css += "@media ".concat(obj.media, " {"));
              var needLayer = void 0 !== obj.layer;
              needLayer &&
                (css += "@layer".concat(
                  obj.layer.length > 0 ? " ".concat(obj.layer) : "",
                  " {"
                )),
                (css += obj.css),
                needLayer && (css += "}"),
                obj.media && (css += "}"),
                obj.supports && (css += "}");
              var sourceMap = obj.sourceMap;
              sourceMap &&
                "undefined" != typeof btoa &&
                (css +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(
                      unescape(encodeURIComponent(JSON.stringify(sourceMap)))
                    ),
                    " */"
                  )),
                options.styleTagTransform(css, styleElement, options.options);
            })(styleElement, options, obj);
          },
          remove: function remove() {
            !(function removeStyleElement(styleElement) {
              if (null === styleElement.parentNode) return !1;
              styleElement.parentNode.removeChild(styleElement);
            })(styleElement);
          },
        };
      };
    },
    "./node_modules/style-loader/dist/runtime/styleTagTransform.js": (
      module
    ) => {
      "use strict";
      module.exports = function styleTagTransform(css, styleElement) {
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
        else {
          for (; styleElement.firstChild; )
            styleElement.removeChild(styleElement.firstChild);
          styleElement.appendChild(document.createTextNode(css));
        }
      };
    },
    "./node_modules/styled-jsx/style.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      module.exports = __webpack_require__(
        "./node_modules/styled-jsx/dist/index/index.js"
      ).style;
    },
    "./node_modules/which-boxed-primitive/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var isString = __webpack_require__("./node_modules/is-string/index.js"),
        isNumber = __webpack_require__(
          "./node_modules/is-number-object/index.js"
        ),
        isBoolean = __webpack_require__(
          "./node_modules/is-boolean-object/index.js"
        ),
        isSymbol = __webpack_require__("./node_modules/is-symbol/index.js"),
        isBigInt = __webpack_require__("./node_modules/is-bigint/index.js");
      module.exports = function whichBoxedPrimitive(value) {
        return null == value ||
          ("object" != typeof value && "function" != typeof value)
          ? null
          : isString(value)
          ? "String"
          : isNumber(value)
          ? "Number"
          : isBoolean(value)
          ? "Boolean"
          : isSymbol(value)
          ? "Symbol"
          : isBigInt(value)
          ? "BigInt"
          : void 0;
      };
    },
    "./node_modules/which-collection/index.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      "use strict";
      var isMap = __webpack_require__("./node_modules/is-map/index.js"),
        isSet = __webpack_require__("./node_modules/is-set/index.js"),
        isWeakMap = __webpack_require__("./node_modules/is-weakmap/index.js"),
        isWeakSet = __webpack_require__("./node_modules/is-weakset/index.js");
      module.exports = function whichCollection(value) {
        if (value && "object" == typeof value) {
          if (isMap(value)) return "Map";
          if (isSet(value)) return "Set";
          if (isWeakMap(value)) return "WeakMap";
          if (isWeakSet(value)) return "WeakSet";
        }
        return !1;
      };
    },
  },
]);

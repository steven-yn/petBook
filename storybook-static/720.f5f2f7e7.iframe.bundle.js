"use strict";
(self.webpackChunkpetbook_client = self.webpackChunkpetbook_client || []).push([
  [720],
  {
    "./node_modules/@storybook/addon-docs/dist/DocsRenderer-EYKKDMVH.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        DocsRenderer: () => DocsRenderer,
      });
      var react = __webpack_require__("./node_modules/react/index.js"),
        react_18 = __webpack_require__(
          "./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"
        ),
        dist = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs"
        ),
        defaultComponents = { code: dist.bD, a: dist.Ct, ...dist.lO },
        ErrorBoundary = class extends react.Component {
          constructor() {
            super(...arguments), (this.state = { hasError: !1 });
          }
          static getDerivedStateFromError() {
            return { hasError: !0 };
          }
          componentDidCatch(err) {
            let { showException } = this.props;
            showException(err);
          }
          render() {
            let { hasError } = this.state,
              { children } = this.props;
            return hasError ? null : children;
          }
        },
        DocsRenderer = class {
          constructor() {
            (this.render = async (context, docsParameter, element) => {
              let components = {
                ...defaultComponents,
                ...docsParameter?.components,
              };
              return new Promise((resolve, reject) => {
                __webpack_require__
                  .e(433)
                  .then(
                    __webpack_require__.bind(
                      __webpack_require__,
                      "./node_modules/@mdx-js/react/index.js"
                    )
                  )
                  .then(({ MDXProvider }) =>
                    (0, react_18.l)(
                      react.createElement(
                        ErrorBoundary,
                        { showException: reject, key: Math.random() },
                        react.createElement(
                          MDXProvider,
                          { components },
                          react.createElement(dist.WI, {
                            context,
                            docsParameter,
                          })
                        )
                      ),
                      element
                    )
                  )
                  .then(resolve);
              });
            }),
              (this.unmount = (element) => {
                (0, react_18.K)(element);
              });
          }
        };
    },
  },
]);

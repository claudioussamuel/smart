"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/productsContext.js
var productsContext = __webpack_require__(8785);
;// CONCATENATED MODULE: ./components/Products.js



function Products_Product({ _id , name , price , description , picture  }) {
    const { setSelectedProducts  } = (0,external_react_.useContext)(productsContext/* ProductsContext */.B);
    function addProduct() {
        setSelectedProducts((prev)=>[
                ...prev,
                _id
            ]);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-64",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-blue-100 p-5 rounded-xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: picture,
                    alt: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "font-bold text-lg",
                    children: name
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm mt-1 leading-4 text-gray-500",
                children: description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex mt-1 ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-2xl font-bold grow",
                        children: [
                            "GH₵",
                            price
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: addProduct,
                        className: "bg-emerald-400 text-white py-1 px-3 rounded-xl",
                        children: "+"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./lib/mongoose.js

async function mongoose_initMongoose() {
    if ((external_mongoose_default()).connection.readyState === 1) {
        return external_mongoose_default().connection.asPromise();
    }
    return await external_mongoose_default().connect(process.env.MONGODB_URL);
}

;// CONCATENATED MODULE: ./lib/models/products.js

const productSchema = new external_mongoose_namespaceObject.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    picture: String
});
const products_Product = external_mongoose_namespaceObject.models?.Product || (0,external_mongoose_namespaceObject.model)("Product", productSchema);
/* harmony default export */ const products = (products_Product);

;// CONCATENATED MODULE: ./pages/api/products.js


async function findAllProducts() {
    return products.find().exec();
}
async function handle(req, res) {
    await initMongoose();
    const { ids  } = req.query;
    console.log(ids);
    if (ids) {
        const idsArray = ids.split(",");
        res.json(await Product.find({
            "_id": {
                $in: idsArray
            }
        }).exec());
    } else {
        res.json(await findAllProducts());
    }
}

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(1463);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(292);
;// CONCATENATED MODULE: ./pages/index.js







function Home({ products  }) {
    const [phrase, setPhrase] = (0,external_react_.useState)("");
    const categoriesNames = [
        ...new Set(products.map((p)=>p.category))
    ];
    if (phrase) {
        products = products.filter((p)=>p.name.toLowerCase().includes(phrase));
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                value: phrase,
                onChange: (e)=>setPhrase(e.target.value),
                type: "text",
                placeholder: "Search for products ......",
                className: "bg-grey-100 w-full py-2 px-2 rounded-xl"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: categoriesNames.map((categoriesName)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: products.find((p)=>p.category === categoriesName) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-2xl py-5 capitalize",
                                    children: categoriesName
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex -mx-5 overflow-x-scroll snap-x scrollbar-hide ",
                                    children: products.filter((p)=>p.category === categoriesName).map((productInfo)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "px-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Products_Product, {
                                                ...productInfo
                                            })
                                        }, productInfo.id))
                                })
                            ]
                        })
                    }, categoriesName))
            })
        ]
    });
}
async function getServerSideProps() {
    await mongoose_initMongoose();
    const products = await findAllProducts();
    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7069:
/***/ ((module) => {

module.exports = require("use-local-storage-state");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,463], () => (__webpack_exec__(9136)));
module.exports = __webpack_exports__;

})();
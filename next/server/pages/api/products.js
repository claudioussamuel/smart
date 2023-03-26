"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handle),
  "findAllProducts": () => (/* binding */ findAllProducts)
});

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./lib/models/products.js

const productSchema = new external_mongoose_namespaceObject.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    picture: String
});
const Product = external_mongoose_namespaceObject.models?.Product || (0,external_mongoose_namespaceObject.model)("Product", productSchema);
/* harmony default export */ const products = (Product);

;// CONCATENATED MODULE: ./lib/mongoose.js

async function initMongoose() {
    if ((external_mongoose_default()).connection.readyState === 1) {
        return external_mongoose_default().connection.asPromise();
    }
    return await external_mongoose_default().connect(process.env.MONGODB_URL);
}

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
        res.json(await products.find({
            "_id": {
                $in: idsArray
            }
        }).exec());
    } else {
        res.json(await findAllProducts());
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(620));
module.exports = __webpack_exports__;

})();
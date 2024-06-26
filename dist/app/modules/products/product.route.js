"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// post product
router.post("/", product_controller_1.productController.createProduct);
// get all products
router.get("/", product_controller_1.productController.getAllProducts);
// get all products  search
router.get('/', product_controller_1.productController.searchProducts);
// get single product
router.get("/:productId", product_controller_1.productController.getProductById);
// update product
router.put("/:productId", product_controller_1.productController.updateProductById);
// delete product
router.delete("/:productId", product_controller_1.productController.deleteProductById);
exports.productRoutes = router;

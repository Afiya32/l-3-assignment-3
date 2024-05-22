import express from "express";
import { productController } from "./product.controller";

const router = express.Router();
// post product
router.post("/", productController.createProduct);
// get all products
router.get("/", productController.getAllProducts);
// get all products  search
router.get("/search", productController.searchProducts);
// get single product
router.get("/:productId", productController.getProductById);
// update product
router.put("/:productId", productController.updateProductById);
// delete product
router.delete("/:productId", productController.deleteProductById);

export const productRoutes = router;

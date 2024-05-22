"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
// post product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const result = yield product_service_1.productServices.createProductDB(product);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while posting product.",
        });
    }
});
// get all products 
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_service_1.productServices.getAllProductsDB();
        res.status(200).json({
            success: true,
            message: "All Products fetched successfully!",
            data: products,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching products.",
        });
    }
});
// get single product
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const product = yield product_service_1.productServices.getProductByIdDB(productId);
        if (!product) {
            res.status(404).json({
                success: false,
                message: "Product not found.",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: product,
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching the product.",
        });
    }
});
// search product
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extract the searchTerm from the query parameters
        const searchTerm = req.query.searchTerm;
        // Call the service layer to search for products
        const products = yield product_service_1.productServices.searchProductsDB(searchTerm);
        // Return the response
        res.status(200).json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: products,
        });
    }
    catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'An error occurred while searching for products.',
        });
    }
});
// update product
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const updatedProduct = yield product_service_1.productServices.updateProductByIdDB(productId, productData);
        if (!updatedProduct) {
            res.status(404).json({
                success: false,
                message: "Product not found.",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Product updated successfully!",
                data: updatedProduct,
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while updating the product.",
        });
    }
});
// delete product
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const deletedProduct = yield product_service_1.productServices.deleteProductByIdDB(productId);
        if (!deletedProduct) {
            res.status(404).json({
                success: false,
                message: "Product not found.",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: null,
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the product.",
        });
    }
});
exports.productController = {
    createProduct, getAllProducts, getProductById,
    updateProductById, deleteProductById, searchProducts
};

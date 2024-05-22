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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const products_model_1 = __importDefault(require("./products.model"));
// post product 
const createProductDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_model_1.default.create(product);
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
// get all products 
const getAllProductsDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_model_1.default.find({});
        return products;
    }
    catch (err) {
        console.log(err);
    }
});
// search products 
const searchProductsDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Convert searchTerm to lowercase for case-insensitive matching
        searchTerm = searchTerm.toLowerCase();
        // Match searchTerm against name, category, and price
        const products = yield products_model_1.default.find({
            $or: [
                { name: { $regex: new RegExp(searchTerm, "i") } },
                { category: { $regex: new RegExp(searchTerm, "i") } },
                // Match numerical values directly instead of using regex
                { price: parseFloat(searchTerm) || 0 }, // Convert searchTerm to number
            ],
        });
        return products;
    }
    catch (err) {
        console.log(err);
    }
});
// get single product 
const getProductByIdDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield products_model_1.default.findById(productId);
        return product;
    }
    catch (err) {
        console.log(err);
    }
});
// update product 
const updateProductByIdDB = (productId, productData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield products_model_1.default.findByIdAndUpdate(productId, productData, { new: true });
        return updatedProduct;
    }
    catch (err) {
        console.log(err);
    }
});
// delete product 
const deleteProductByIdDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield products_model_1.default.findByIdAndDelete(productId);
        return deletedProduct;
    }
    catch (err) {
        console.log(err);
    }
});
exports.productServices = {
    createProductDB, getAllProductsDB, getProductByIdDB,
    updateProductByIdDB, deleteProductByIdDB, searchProductsDB
};

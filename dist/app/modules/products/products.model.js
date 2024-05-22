"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String },
    tags: { type: [String] },
    variants: [
        {
            type: { type: String, required: true },
            value: { type: String, required: true },
        },
    ],
    inventory: {
        quantity: { type: Number, required: true },
        inStock: { type: Boolean, required: true },
    },
});
// model
const ProductModel = mongoose_1.models.Product || (0, mongoose_1.model)('Product', productSchema);
exports.default = ProductModel;

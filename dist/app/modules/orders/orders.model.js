"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
// model
const OrdersModel = mongoose_1.models.Orders || (0, mongoose_1.model)('Orders', orderSchema);
exports.default = OrdersModel;

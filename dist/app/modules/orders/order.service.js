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
exports.orderService = void 0;
const orders_model_1 = __importDefault(require("./orders.model"));
const products_model_1 = __importDefault(require("../products/products.model"));
// post orders
const createOrderDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check 
        const product = yield products_model_1.default.findById(order.productId);
        if (!product || product.inventory.quantity < order.quantity) {
            throw new Error('Insufficient quantity available in inventory');
        }
        // Reduce 
        product.inventory.quantity -= order.quantity;
        product.inventory.inStock = product.inventory.quantity > 0;
        yield product.save();
        // Create the order
        const result = yield orders_model_1.default.create(order);
        return result;
    }
    catch (err) {
        console.log(err);
        throw new Error('An error occurred while creating the order');
    }
});
// get orders
const getAllOrdersDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield orders_model_1.default.find({});
        return orders;
    }
    catch (err) {
        console.log(err);
        return { error: 'An error occurred while fetching orders' };
    }
});
// get single order
const getOrdersByEmailDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield orders_model_1.default.find({ email });
        return orders;
    }
    catch (err) {
        console.log(err);
        return { error: 'An error occurred while fetching orders for the user' };
    }
});
exports.orderService = { createOrderDB, getAllOrdersDB, getOrdersByEmailDB
};

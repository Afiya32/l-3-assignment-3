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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
// post order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const result = yield order_service_1.orderService.createOrderDB(order);
        res.status(201).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'An error occurred while creating the order.',
        });
    }
});
// get order
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_service_1.orderService.getAllOrdersDB();
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: orders,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching orders.',
        });
    }
});
// get single order
const getOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const orders = yield order_service_1.orderService.getOrdersByEmailDB(email);
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully for user email!',
            data: orders,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching orders for the user.',
        });
    }
});
exports.orderController = { createOrder,
    getAllOrders,
    getOrdersByEmail,
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/products/product.route");
const order_route_1 = require("./app/modules/orders/order.route");
const app = (0, express_1.default)();
// Parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Mount product routes
app.use("/api/products", product_route_1.productRoutes);
// Mount order routes
app.use("/api/orders", order_route_1.orderRoutes);
app.get("/", (req, res) => {
    res.send("E-commerce server is running");
});
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
// General error handling middleware
app.use((req, res) => {
    res.status(500).json({
        success: false,
        message: "An internal server error occurred",
    });
});
exports.default = app;

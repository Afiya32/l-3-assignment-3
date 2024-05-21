import express from "express";
import { orderController } from "./order.controller";

const router=express.Router()
// Post order
router.post('/', orderController.createOrder);

// Get all orders
router.get('/', orderController.getAllOrders);

// Get orders by email
router.get('/', orderController.getOrdersByEmail);



export const orderRoutes = router;
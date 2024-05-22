import { Request, Response } from "express";
import { orderService } from "./order.service";

// post order
const createOrder = async (req: Request, res: Response) => {
    try {
        const order = req.body;
        const result = await orderService.createOrderDB(order);

        res.status(201).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'An error occurred while creating the order.',
        });
    }
  };
// get order
const getAllOrders = async (req: Request, res: Response) => {
    try {
      const orders = await orderService.getAllOrdersDB();
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: orders,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: 'An error occurred while fetching orders.',
      });
    }
  };
// get single order
const getOrdersByEmail = async (req: Request, res: Response) => {
    try {
      const email = req.query.email as string;
      const orders = await orderService.getOrdersByEmailDB(email);
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: orders,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: 'An error occurred while fetching orders for the user.',
      });
    }
  };








export const orderController={ createOrder,
    getAllOrders,
    getOrdersByEmail,

}
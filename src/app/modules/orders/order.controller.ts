import { Request, Response } from "express";
import { orderService } from "./order.service";

// Post order controller
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderService.createOrderDB(order);

    if (result.error) {
      return res.status(400).json({ success: false, message: result.error });
    }

    res.status(200).json({
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

// Get all orders controller
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

// Get orders by email controller
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

export const orderController = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};

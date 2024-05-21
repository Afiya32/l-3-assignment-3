import { Orders } from "./orders.interface";
import OrdersModel from "./orders.model";
import ProductModel from '../products/products.model';

// post orders
const createOrderDB = async (order : Orders) =>{
    try {
        // Check 
        const product = await ProductModel.findById(order.productId);
        if (!product || product.inventory.quantity < order.quantity) {
            throw new Error('Insufficient quantity available in inventory');
        }

        // Reduce 
        product.inventory.quantity -= order.quantity;
        product.inventory.inStock = product.inventory.quantity > 0;
        await product.save();

        // Create the order
        const result = await OrdersModel.create(order);
        return result;
    } catch (err) {
        console.log(err);
        throw new Error('An error occurred while creating the order');
    }

}

// get orders
const getAllOrdersDB = async () => {
    try {
      const orders = await OrdersModel.find({});
      return orders;
    } catch (err) {
      console.log(err);
      return { error: 'An error occurred while fetching orders' };
    }
  };

// get single order
const getOrdersByEmailDB = async (email: string) => {
    try {
      const orders = await OrdersModel.find({ email });
      return orders;
    } catch (err) {
      console.log(err);
      return { error: 'An error occurred while fetching orders for the user' };
    }
  };
  

export const orderService={ createOrderDB,getAllOrdersDB,getOrdersByEmailDB
    
}
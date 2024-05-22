import { Schema, model, models } from "mongoose";
import { Orders } from "./orders.interface";

const orderSchema = new Schema<Orders>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// model
const OrdersModel = models.Orders || model<Orders>('Orders', orderSchema);

export default OrdersModel;

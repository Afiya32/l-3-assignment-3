
import { Schema ,model  } from "mongoose";
import { Orders } from "./orders.interface";


// scheme
const orderSchema = new Schema<Orders>({
    email:{type:String,required:true},
    productId:{type:String, required:true},
    price:{type:Number, required:true},
    quantity:{type:Number, required:true}

})
// model
const OrdersModel = model<Orders>('Product', orderSchema);

export default OrdersModel;
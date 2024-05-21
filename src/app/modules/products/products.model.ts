import { Schema ,model  } from "mongoose";
import { Product } from "./products.interface";



// product schema
const productSchema = new Schema<Product>({
    id:{type:String,},
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    category:{type:String},
    tags: { type: [String] }, 
    variants: [{              
        type: { type: String, required: true },
        value: { type: String, required: true }
    }],
    inventory: {
        quantity: { type: Number, required: true },
        inStock: { type: Boolean, required: true }
    }
,
    

})


//product model
const ProductModel = model<Product>('Product', productSchema);

export default ProductModel;





import { Schema, model, models } from "mongoose";
import { Product } from "./products.interface";

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String },
  tags: { type: [String] },
  variants: [
    {
      type: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
});

// model
const ProductModel = models.Product || model<Product>('Product', productSchema);

export default ProductModel;

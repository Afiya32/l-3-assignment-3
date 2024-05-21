import { Product } from "./products.interface";
import ProductModel from "./products.model";
const createProductDB = async (product: Product) => {
  try {
    const result = await ProductModel.create(product);
    return result;
  } catch (err) {
    console.log(err);
  }
};
// get all service
// search service
// get single service
// update service
// delete service
export const productServices = {
  createProductDB,
};

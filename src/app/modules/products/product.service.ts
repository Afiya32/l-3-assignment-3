import { Product } from "./products.interface";
import ProductModel from "./products.model";
// post product 
const createProductDB = async (product: Product) => {
  try {
    const result = await ProductModel.create(product);
    return result;
  } catch (err) {
    console.log(err);
  }
};
// get all products 
const getAllProductsDB = async () => {
    try {
      const products = await ProductModel.find({});
      return products;
    } catch (err) {
      console.log(err);
    }
  };
// search products 
const searchProductsDB = async (searchTerm: string) => {
    try {
      
      const products = await ProductModel.find({
        $or: [
          { name: { $regex: new RegExp(searchTerm, "i") } },
          { category: { $regex: new RegExp(searchTerm, "i") } },
          { price: { $regex: new RegExp(searchTerm, "i") } },
        ],
      });
      return products;
    } catch (err) {
      console.log(err);
    }
  };

// get single product 
const getProductByIdDB = async (productId: string) => {
    try {
      const product = await ProductModel.findById(productId);
      return product;
    } catch (err) {
      console.log(err);
    }
  };
// update product 
const updateProductByIdDB = async (productId: string, productData: Partial<Product>) => {
    try {
      const updatedProduct = await ProductModel.findByIdAndUpdate(productId, productData, { new: true });
      return updatedProduct;
    } catch (err) {
      console.log(err);
    }
  };
// delete product 
const deleteProductByIdDB = async (productId: string) => {
    try {
      const deletedProduct = await ProductModel.findByIdAndDelete(productId);
      return deletedProduct;
    } catch (err) {
      console.log(err);
    }
  };
export const productServices = {
  createProductDB,getAllProductsDB,getProductByIdDB,
  updateProductByIdDB,deleteProductByIdDB,searchProductsDB
};

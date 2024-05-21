import { Request, Response } from "express";
import { productServices } from "./product.service";

// post product
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const result = await productServices.createProductDB(product);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
        success: false,
        message: "An error occurred while posting product.",
      })
  }
};

// get all products 
const getAllProducts = async (req: Request, res: Response) => {
    try {
      const products = await productServices.getAllProductsDB();
      res.status(200).json({
        success: true,
        message: "All Products fetched successfully!",
        data: products,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching products.",
      });
    }
  };
// get single product
const getProductById = async (req: Request, res: Response) => {
    try {
      const productId = req.params.productId;
      const product = await productServices.getProductByIdDB(productId);
      if (!product) {
        res.status(404).json({
          success: false,
          message: "Product not found.",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Product fetched successfully!",
          data: product,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching the product.",
      });
    }
  };
// search product
const searchProducts = async (req: Request, res: Response) => {
    try {
      const searchTerm = req.query.searchTerm as string;
      const products = await productServices.searchProductsDB(searchTerm);
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: products,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "An error occurred while searching for products.",
      });
    }
  };
// update product
const updateProductById = async (req: Request, res: Response) => {
    try {
      const productId = req.params.productId;
      const productData = req.body;
      const updatedProduct = await productServices.updateProductByIdDB(productId, productData);
      if (!updatedProduct) {
        res.status(404).json({
          success: false,
          message: "Product not found.",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Product updated successfully!",
          data: updatedProduct,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "An error occurred while updating the product.",
      });
    }
  };
// delete product
const deleteProductById = async (req: Request, res: Response) => {
    try {
      const productId = req.params.productId;
      const deletedProduct = await productServices.deleteProductByIdDB(productId);
      if (!deletedProduct) {
        res.status(404).json({
          success: false,
          message: "Product not found.",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Product deleted successfully!",
          data: null,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "An error occurred while deleting the product.",
      });
    }
  };
export const productController = {
  createProduct,getAllProducts,getProductById,
  updateProductById,deleteProductById,searchProducts
};

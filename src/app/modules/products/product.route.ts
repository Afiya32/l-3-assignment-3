import express from "express";
import { productController } from "./product.controller";


const router=express.Router()
// post route
router.post('/',productController.createProduct)
// get all route
// get all route search 
// get single route
// update route
// delete route

export const productRoutes = router;
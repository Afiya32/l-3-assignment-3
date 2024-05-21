import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/products/product.route";
import { orderRoutes } from "./app/modules/orders/order.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
// router product
app.use('/api/products',productRoutes)
// order router
app.use('/api/orders',orderRoutes)
// error handle
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});
app.get("/", (req: Request, res: Response) => {
  res.send("E commerce server is running");
});

export default app;

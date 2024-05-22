import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/products/product.route";
import { orderRoutes } from "./app/modules/orders/order.route";

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Mount product routes
app.use("/api/products", productRoutes);

// Mount order routes
app.use("/api/orders", orderRoutes);


app.get("/", (req: Request, res: Response) => {
  res.send("E-commerce server is running");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// General error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "An internal server error occurred",
  });
});

export default app;

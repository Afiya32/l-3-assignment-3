import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/products/product.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
// router product
app.use('/api/products',productRoutes)
// order router
app.get("/", (req: Request, res: Response) => {
  res.send("E commerce server is running");
});

export default app;

import express, { Request, Response } from "express";
import cors from "cors";
import { productsRoute } from "./app/modules/product/product.routes";
import { ordersRoute } from "./app/modules/order/order.route";

// express
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", productsRoute);
app.use("/api/orders", ordersRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

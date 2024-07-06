import express, { Request, Response } from "express";
import cors from "cors";
import { productsRoute } from "./app/modules/product/product.routes";
import { ordersRoute } from "./app/modules/order/order.route";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

// express
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", productsRoute);
app.use("/api/orders", ordersRoute);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Hello World"
  })
});

// Globel Error Handler
app.use(globalErrorHandler)

// It will catch all undefined routes
app.use(notFound)

export default app;

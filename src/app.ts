import express, { Request, Response } from "express";
import cors from "cors";
// import router from "./app/routes";
import { productsRoute } from "./app/modules/product/product.routes";

// express
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", productsRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

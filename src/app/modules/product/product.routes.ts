import express from "express";
import { productsContoller } from "./product.controllers";

const router = express.Router();

router.get("/", productsContoller.getAllProducts);

router.post("/", productsContoller.createProduct);

router.get('/search', productsContoller.searchProduct)

router.get("/:productID", productsContoller.getSingleProduct);


router.delete("/:productID", productsContoller.deleteProduct);



export const productsRoute = router;

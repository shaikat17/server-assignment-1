import express from "express";
import { productsContoller } from "./product.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { productValidationSchema } from "./product.validation";

const router = express.Router();

router.get("/", productsContoller.getProducts);

router.post(
  "/",
  validateRequest(productValidationSchema),
  productsContoller.createProduct
);

router.get("/:productID", productsContoller.getSingleProduct);

router.put("/:productID", productsContoller.updateProduct);

router.delete("/:productID", productsContoller.deleteProduct);

export const productsRoute = router;

import express from "express";
import { productsContoller } from "./product.controllers";


const router = express.Router()

router.get('/', productsContoller.getAllProducts)

router.post('/', productsContoller.createProduct)

export const productsRoute = router
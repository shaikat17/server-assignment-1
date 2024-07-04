import express from "express";
import { orderControllers } from "./order.controllers";

const router = express.Router();

router.get("/", orderControllers.getOrders);

router.post("/", orderControllers.createOrder);




export const ordersRoute = router;

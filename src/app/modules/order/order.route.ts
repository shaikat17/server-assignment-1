import express from "express";
import { orderControllers } from "./order.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { orderValidationSchema } from "./order.validation";

const router = express.Router();

router.get("/", orderControllers.getOrders);

router.post("/", validateRequest(orderValidationSchema), orderControllers.createOrder);




export const ordersRoute = router;

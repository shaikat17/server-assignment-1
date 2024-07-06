import { Request, Response } from "express";
import { orderServices } from "./order.services";

const getOrders = async (req: Request, res: Response) => {
    try {
        const { email } = req.query;

        if (email) {
          const orders = await orderServices.getSingleOrdersByEmail(email as string);
          if(orders.length > 0){
            res.status(200).json({
              success: true,
              message: 'Orders fetched successfully for user email!',
              data: orders,
            });
          } else {
            res.status(200).json({
              success: false,
              message: 'Order not found.',
            });
          }
        } else {
          const orders = await orderServices.getAllOrdersFromDB();
          res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: orders,
          });
        }
    } catch (error) {
      console.log("🚀 ~ getAllProducts ~ error:", error);
    }
  };

  const createOrder = async (req: Request, res: Response) => {
    try {
      const order = req.body;
  
      const result = await orderServices.createOrderIntoDB(order);
  
    if(result){
      res.status(200).json({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }
  
      
    } catch (error) {
      console.log("🚀 ~ createProduct ~ error:", error);
    }
  };

    

  export const orderControllers = {
    getOrders,
    createOrder,
  }

 
import { OrderType } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (order: OrderType) => {
    const result = await OrderModel.create(order);
  
    return result;
  };


  const getAllOrdersFromDB = async () => {
    const result = await OrderModel.find({}, {email: 1, productId: 1, price: 1, quantity: 1});

    return result;
  }

  const getSingleOrdersByEmail = async (email: string) => {
    const orders = await OrderModel.find(
        { email },
        {
          email: 1,
          productId: 1,
          price: 1,
          quantity: 1,
        }
      )

      return orders;
  }

  export const orderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB,
    getSingleOrdersByEmail
  }
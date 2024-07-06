import { ProductModel } from "../product/product.model";
import { OrderType } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (order: OrderType) => {
    // const result = await OrderModel.create(order);

    // getting the product for checking the necessary condition 
    const product = await ProductModel.findById(order.productId)

    if (!product) {
      throw new Error('Product not found');
    }

    // Check if there is enough inventory
    if (product.inventory.quantity < order.quantity) {
      return false;
    }

    // Update inventory
    product.inventory.quantity -= order.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;

    // Save the updated product
    await product.save();

    // Create the order
    const newOrder = new OrderModel(order);
    await newOrder.save()

    // Query the saved order with projection
    const result = await OrderModel.findById(newOrder._id, {
      _id: 1, 
      email: 1,
      productId: 1,
      price: 1,
      quantity: 1,
    });

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
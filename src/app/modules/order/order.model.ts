// order.model.ts
import { Schema, model } from 'mongoose';
import { OrderType } from './order.interface';


const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = model<OrderType>('Order', orderSchema);


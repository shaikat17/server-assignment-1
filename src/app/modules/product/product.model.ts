import { Schema, model } from 'mongoose';
import { Product as ProductType, Variant, Inventory } from './product.interface'

// Mongoose schemas
const variantSchema = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String, required: true }
});

const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true }
});

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  variants: [variantSchema],
  inventory: inventorySchema
});

// Mongoose model
export const ProductModel = model<ProductType>('Product', productSchema);

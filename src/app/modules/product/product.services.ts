import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const insertProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);

  return result;
};

const getAllStudentsFromDb = async () => {
  const result = await ProductModel.find(
    {},
    {
      name: 1,
      description: 1,
      price: 1,
      category: 1,
      tags: 1,
      variants: 1,
      inventory: 1,
    }
  );
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id, {
    name: 1,
    description: 1,
    price: 1,
    category: 1,
    tags: 1,
    variants: 1,
    inventory: 1,
  });

  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);

  return result;
};

const searchProductFromDB = async (query: string) => {
  const result = await ProductModel.find(
    { name: { "$regex" : query , "$options" : "i"} },
    {
      name: 1,
      description: 1,
      price: 1,
      category: 1,
      tags: 1,
      variants: 1,
      inventory: 1,
    }
  );
  return result;
};

export const productServices = {
  insertProductIntoDB,
  getAllStudentsFromDb,
  getSingleProductFromDB,
  deleteProductFromDB,
  searchProductFromDB
};

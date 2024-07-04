import { Request, Response } from "express";
import { productServices } from "./product.services";

const getAllProducts = async (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Student is created succesfully",
  });
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const result = await productServices.insertProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    console.log("🚀 ~ createProduct ~ error:", error);
  }
};

export const productsContoller = {
  getAllProducts,
  createProduct,
};

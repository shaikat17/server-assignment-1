import { Request, Response } from "express";
import { productServices } from "./product.services";

const getAllProducts = async (req: Request, res: Response) => {
  
  try {
    const result = await productServices.getAllStudentsFromDb();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log("🚀 ~ getAllProducts ~ error:", error)
    
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const result = await productServices.insertProductIntoDB(product);

    console.log(result)

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: product,
    });
  } catch (error) {
    console.log("🚀 ~ createProduct ~ error:", error);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    console.log("🚀 ~ getSingleProduct ~ productID:", productID)

    const result = await productServices.getSingleProductFromDB(productID);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log("🚀 ~ getSingleProduct ~ error:", error)
    
  }
}

export const productsContoller = {
  getAllProducts,
  createProduct,
  getSingleProduct,
};

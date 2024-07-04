import { Request, Response } from "express";
import { productServices } from "./product.services";

const getProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query as { searchTerm: string }

    if(searchTerm) {
      const result = await productServices.searchProductFromDB(searchTerm);

      res.status(200).json({
        success: true,
        message: "Products matching search term 'iphone' fetched successfully!",
        data: result,
      });
    } else {
      const result = await productServices.getAllStudentsFromDb();

      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
    
    
  } catch (error) {
    console.log("🚀 ~ getAllProducts ~ error:", error);
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const result = await productServices.insertProductIntoDB(product);

    console.log(result);

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
    console.log("🚀 ~ getSingleProduct ~ productID:", productID);

    const result = await productServices.getSingleProductFromDB(productID);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log("🚀 ~ getSingleProduct ~ error:", error);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    console.log("🚀 ~ getSingleProduct ~ productID:", productID);

    const result = await productServices.deleteProductFromDB(productID);
    console.log("🚀 ~ deleteProduct ~ result:", result);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    console.log("🚀 ~ getSingleProduct ~ error:", error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    const updatedData = req.body;

    const result = await productServices.updateProductDB(productID, updatedData);

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
  } catch (error) {
    console.log("🚀 ~ updateProduct ~ error:", error)
    
  }
}


export const productsContoller = {
  getProducts,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct
};

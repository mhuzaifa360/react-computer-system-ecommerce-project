import products from "../models/productModel.js"
import fs from "fs"
import path from "path";
import { fileURLToPath } from "url";


// for file name and path global
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// for create product
export const createProduct = async (req, res) => {
  try {
    const {
      productName,
      productPrice,
      productAvailability,
      productCategory,
      freeShipping,
      productDescription
    } = req.body;

    const image = req.file ? req.file.filename : null;
    

    // CHECK IF ALREADY EXIST
    const existProduct = await products.findOne({
      where: { productName: productName },
    });
    if (existProduct) {
      return res.status(400).json({
        success: false,
        message: `This ${productName}  productName already exist!`,
      });
    }

    // CREATE IF NOT EXIST
    const product = await products.create({
      productName,
      productPrice,
      productAvailability,
      productCategory,
      freeShipping,
      productDescription,
      productImage:image
    })

    return res.status(201).json({
      success: true,
      message: "Product successfully created",
      data: product,
    });

    // CHECK IF ERROR FOUND
  } catch (error) {
    res.json({
      message: "internal server error",
      error: error.message,
    });
  }
};

// for get all products
export const getProduct = async (req, res) => {
  try {
    const allProducts = await products.findAll();
    
    res.status(200).json({
      success: true,
      message: "Retrieve all Category successfully",
      data: allProducts,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

// for delete Category
export const deleteProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    // Category is table name
    const existProduct = await products.findOne({ where: { id: productID } });
    // console.log("exist Category", existProduct);

    // IF Category ID NOT FOUND
    if (!existProduct) {
      res.status(404).json({
        success: false,
        message: `Product not found with this id ${productID}`,
      });
    }
    // DELETE Category WITH MATCHING ID
    await existProduct.destroy();

    // IF DELETE THAN SHOW A MESSAGE AND DELETED Category
    res.json({
      success: true,
      message: `Product deleted successfully with this ${productID} id `,
      data: existProduct,
    });

    // IF ERROR THAN SHOW THE ERROR
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

// GET SINGLE Category
export const getSingleProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    // category is table name
    const existProduct = await products.findByPk(productID);

    // IF Category ID NOT FOUND
    if (!existProduct) {
      res.status(404).json({
        success: false,
        message: `Product not found with this ${productID} id`,
      });
    }
    // IF DELETE THAN SHOW A MESSAGE AND DELETED Category
    res.json({
      success: true,
      message: `get single product successfully with this ${productID} id `,
      data: existProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

// UPDATE Category
export const updateProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const updatedCategory = req.body;

    // Category is table name
    const existProduct = await category.findByPk(productID);

    // IF Category ID NOT FOUND
    if (!existProduct) {
      res.status(404).json({
        success: false,
        message: `Category not found with this id ${existProduct}`,
      });
    }
    const categoryData = await existProduct.update(updatedCategory);

    // IF DELETE THAN SHOW A MESSAGE AND DELETED Category
    res.json({
      success: true,
      message: `Category updated successfully `,
      data: categoryData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

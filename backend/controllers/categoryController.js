import category from "../models/categoryModel.js";
import bcrypt from "bcrypt";
// for create Category
export const createCategory = async (req, res) => {
  try {
    const clientData = req.body;

    // CHECK IF ALREADY EXIST
    const existCategory = await category.findOne({
      where: { email: clientData.email },
    });
    if (existCategory) {
      return res.status(400).json({
        success: false,
        message: `This ${clientData.email} category email already exist!`,
      });
    }
    
    // CONVERT PASSWORD INTO HASH
    const hashPassword = await bcrypt.hash(clientData.password, 10);
    const newCategory = await category.create({ ...clientData, password: hashPassword });

    // TO HIDE PASSWORD
    // const hygienPassword = {
    //   id: Category.id,
    //   firstName: Category.firstName,
    //   lastName: Category.lastName,
    //   email: Category.email,
    //   role: Category.role,
    //   updatedAt: category.updatedAt,
    //   createdAt: category.createdAt,
    // };

    // TO HIDE PASSWORD SHORT METHOD
    const categoryData = newCategory.toJSON();
    delete categoryData.password;
    delete categoryData.confirmPassword;
    
    // CREATE IF NOT EXIST
    // const CategoryData = await Category.create(clientData);
    return res.status(201).json({
      success: true,
      message: "Category successfully created",
      data: categoryData,
    });

    // CHECK IF ERROR FOUND
  } catch (error) {
    res.json({
      message: "internal server error",
      error: error.message,
    });
  }
};

// for get Category
export const getCategory = async (req, res) => {
  try {
    const allCategory = await category.findAll();
    
    res.status(200).json({
      success: true,
      message: "Retrieve all Category successfully",
      data: allCategory,
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
export const deleteCategory = async (req, res) => {
  try {
    const categoryID = req.params.id;
    // Category is table name
    const existCategory = await category.findOne({ where: { id: categoryID } });
    console.log("exist Category", existCategory);

    // IF Category ID NOT FOUND
    if (!existCategory) {
      res.status(404).json({
        success: false,
        message: `Category not found with this id ${existCategory}`,
      });
    }
    // DELETE Category WITH MATCHING ID
    await existCategory.destroy();

    // IF DELETE THAN SHOW A MESSAGE AND DELETED Category
    res.json({
      success: true,
      message: `Category deleted successfully with this ${categoryID} id `,
      data: existCategory,
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
export const getSingleCategory = async (req, res) => {
  try {
    const categoryID = req.params.id;
    // Category is table name
    const existCategory = await category.findByPk(CategoryID);

    // IF Category ID NOT FOUND
    if (!existCategory) {
      res.status(404).json({
        success: false,
        message: `Category not found with this id ${existCategory}`,
      });
    }

    // IF DELETE THAN SHOW A MESSAGE AND DELETED Category
    res.json({
      success: true,
      message: `get single Category successfully with this ${categoryID} id `,
      data: existCategory,
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
export const updateCategory = async (req, res) => {
  try {
    const categoryID = req.params.id;
    const updatedCategory = req.body;

    // Category is table name
    const existCategory = await category.findByPk(categoryID);

    // IF Category ID NOT FOUND
    if (!existCategory) {
      res.status(404).json({
        success: false,
        message: `Category not found with this id ${existCategory}`,
      });
    }
    const categoryData = await existCategory.update(updatedCategory);

    // IF DELETE THAN SHOW A MESSAGE AND DELETED Category
    res.json({
      success: true,
      message: `Category updated successfully `,
      data: CategoryData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

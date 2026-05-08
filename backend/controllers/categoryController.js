
import category from "../models/categoryModel.js";
import user from "../models/userModel.js";
import jwt from "jsonwebtoken";
// for create Category
export const createCategory = async (req, res) => {
  try {
    const clientData = req.body;

    // CHECK IF ALREADY EXIST
    const existCategory = await category.findOne({
      where: { categoryName: clientData.categoryName },
    });
    if (existCategory) {
      return res.status(400).json({
        success: false,
        message: `This ${clientData.categoryName}  categoryName already exist!`,
      });
    }

    // CREATE IF NOT EXIST
    const categoryData = await category.create(clientData);
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
    // console.log("exist Category", existCategory);

    // IF Category ID NOT FOUND
    if (!existCategory) {
      res.status(404).json({
        success: false,
        message: `Category not found with this id ${categoryID}`,
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
    // category is table name
    const existCategory = await category.findByPk(categoryID);

    // IF Category ID NOT FOUND
    if (!existCategory) {
      res.status(404).json({
        success: false,
        message: `Category not found with this ${categoryID} id`,
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

// LOGIN AUTHENTICATION
export const loginUser = async (req, res) => {
  try {
    // TAKE EMAIL AND PASSWORD FROM CLIENT
    const { email, password } = req.body;

    // CHECK EMAIL GIVEN OR NOT
    if (!email) {
      return res.status(400).json({
        status: false,
        message: "email is required",
      });
    }
    // CHECK PASSWORD IS GIVEN OR NOT
    if (!password) {
      return res.status(400).json({
        status: false,
        message: " password is required",
      });
    }

    // TAKE RECORD OF USER WITH EMAIL FROM DATABASE
    const user = await user.findOne({ where: { email: email } });

    // IF EMAIL NOT MATCH TO DATABASE EMAIL IT WILL SHOW THE RESULT
    if (!user) {
      return res.status(400).json({
        status: false,
        message: `user not register with this email ${email}`,
      });
    }
    // IF PASSWORD INCORRECT DISPLAY MESSAGE
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      res.status(400).json({
        status: false,
        message: "password is incorrect",
      });
    }

    const excludePassword = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };

    // CREATE TOKEN FOR USER
    // PymYMEpDfKdF•••••••••••••••••••nkjbu85DGqBd
    const token = await jwt.sign(
      excludePassword,
      "PymYMEpDfKdF•••••••••••••••••••nkjbu85DGqBd",
      {
        expiresIn: "2d",
      },
    );

    res.json({
      status: true,
      message: "login Successfully",
      data: excludePassword,
      token: token,
    })
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    })
  }
};

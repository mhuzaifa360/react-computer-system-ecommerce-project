import user from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    const findUser = await user.findOne({ where: { email: email } });

    // IF EMAIL NOT MATCH TO DATABASE EMAIL IT WILL SHOW THE RESULT
    if (!findUser) {
      return res.status(400).json({
        status: false,
        message: `user not register with this email ${email}`,
      });
    }
    // IF PASSWORD INCORRECT DISPLAY MESSAGE
    const isValidPassword = await bcrypt.compare(password, findUser.password);

    if (!isValidPassword) {
      res.status(400).json({
        status: false,
        message: "password is incorrect",
      });
    }

    const excludePassword = {
      id: findUser.id,
      firstName: findUser.firstName,
      lastName: findUser.lastName,
      email: findUser.email,
      role: findUser.role,
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

// for create user
export const createUser = async (req, res) => {
  try {
    const clientData = req.body;

    // CHECK IF ALREADY EXIST
    const existUser = await user.findOne({
      where: { email: clientData.email },
    });
    if (existUser) {
      return res.status(400).json({
        success: false,
        message: `This ${clientData.email} user email already exist!`,
      });
    }
    
    // CONVERT PASSWORD INTO HASH
    const hashPassword = await bcrypt.hash(clientData.password, 10);
    const newUser = await user.create({ ...clientData, password: hashPassword });

    // TO HIDE PASSWORD
    // const hygienPassword = {
    //   id: user.id,
    //   firstName: user.firstName,
    //   lastName: user.lastName,
    //   email: user.email,
    //   role: user.role,
    //   updatedAt: user.updatedAt,
    //   createdAt: user.createdAt,
    // };

    // TO HIDE PASSWORD SHORT METHOD
    const userData = newUser.toJSON();
    delete userData.password;
    delete userData.confirmPassword;
    
    // CREATE IF NOT EXIST
    // const userData = await user.create(clientData);
    return res.status(201).json({
      success: true,
      message: "user successfully created",
      data: userData,
    });

    // CHECK IF ERROR FOUND
  } catch (error) {
    res.json({
      message: "internal server error",
      error: error.message,
    });
  }
};

// for get user
export const getUser = async (req, res) => {
  try {
    const allUser = await user.findAll();
    
    res.status(200).json({
      success: true,
      message: "Retrieve all user successfully",
      data: allUser,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

// for delete user
export const deleteUser = async (req, res) => {
  try {
    const userID = req.params.id;
    // user is table name
    const existUser = await user.findOne({ where: { id: userID } });
    console.log("exist user", existUser);

    // IF user ID NOT FOUND
    if (!existUser) {
      res.status(404).json({
        success: false,
        message: `user not found with this id ${existUser}`,
      });
    }
    // DELETE user WITH MATCHING ID
    await existUser.destroy();

    // IF DELETE THAN SHOW A MESSAGE AND DELETED user
    res.json({
      success: true,
      message: `user deleted successfully with this ${userID} id `,
      data: existUser,
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

// GET SINGLE user
export const getSingleUser = async (req, res) => {
  try {
    const userID = req.params.id;
    // user is table name
    const existUser = await user.findByPk(userID);

    // IF user ID NOT FOUND
    if (!existUser) {
      res.status(404).json({
        success: false,
        message: `user not found with this id ${existUser}`,
      });
    }

    // IF DELETE THAN SHOW A MESSAGE AND DELETED user
    res.json({
      success: true,
      message: `get single user successfully with this ${userID} id `,
      data: existUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

// UPDATE user
export const updateUser = async (req, res) => {
  try {
    const userID = req.params.id;
    const updateduser = req.body;

    // user is table name
    const existUser = await user.findByPk(userID);

    // IF user ID NOT FOUND
    if (!existUser) {
      res.status(404).json({
        success: false,
        message: `user not found with this id ${existUser}`,
      });
    }
    const userData = await existUser.update(updateduser);

    // IF DELETE THAN SHOW A MESSAGE AND DELETED user
    res.json({
      success: true,
      message: `user updated successfully `,
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

import express from "express"
import { createUser, deleteUser, getSingleUser, getUser, updateUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/categoryController.js";
const route = express.Router();

route.post("/login", loginUser)
route.post("/createUser", createUser)
route.get("/getUser", getUser)
route.delete("/deleteUser/:id", deleteUser)
route.get("/getSingleUser/:id", getSingleUser)
route.put("/updateUser/:id", updateUser)
 
export default route;
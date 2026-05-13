import express from "express"
import { createUser, deleteUser, getSingleUser, getUser, updateUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";
import { authenticateUser } from "../auth/authentication.js";
const route = express.Router();

route.post("/login", loginUser)
route.post("/createUser", createUser)
route.get("/getUser",authenticateUser, getUser)
route.delete("/deleteUser/:id",authenticateUser, deleteUser)
route.get("/getSingleUser/:id",authenticateUser, getSingleUser)
route.put("/updateUser/:id",authenticateUser, updateUser)
 
export default route;


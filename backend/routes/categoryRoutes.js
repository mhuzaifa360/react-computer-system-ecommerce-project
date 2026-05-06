import express from "express"
import { createCategory, deleteCategory, getSingleCategory, getCategory, updateCategory } from "../controllers/CategoryController.js";
const route = express.Router();


route.post("/createCategory", createCategory)
route.get("/getCategory", getCategory)
route.delete("/deleteCategory/:id", deleteCategory)
route.get("/getSingleCategory/:id", getSingleCategory)
route.put("/updateCategory/:id", updateCategory)
 
export default route;
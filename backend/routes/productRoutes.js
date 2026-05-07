import express from "express"
import { createProduct, deleteProduct, getSingleProduct, getProduct, updateProduct } from "../controllers/ProductController.js";
const route = express.Router();


route.post("/createProduct", createProduct)
route.get("/getProduct", getProduct)
route.delete("/deleteProduct/:id", deleteProduct)
route.get("/getSingleProduct/:id", getSingleProduct)
route.put("/updateProduct/:id", updateProduct)
 
export default route;
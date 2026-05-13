import express from "express"
import { createProduct, deleteProduct, getSingleProduct, getProduct, updateProduct } from "../controllers/ProductController.js";
import { upload } from "../config/multer.js";
const route = express.Router();


route.post("/createProduct",upload.single("productImage"), createProduct)
route.get("/getProduct", getProduct)
route.delete("/deleteProduct/:id", deleteProduct)
route.get("/getSingleProduct/:id", getSingleProduct)
route.put("/updateProduct/:id",upload.single("productImage"), updateProduct)
 
export default route;
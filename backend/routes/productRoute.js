import express from "express";
import {addProduct,countProducts,listProducts,removeProduct,singleProduct,updateProduct} from "../controllers/productController.js";
import uplaod from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post("/add",adminAuth, uplaod.fields([{name: 'image1', maxCount:1},{name: 'image2', maxCount:1},{name: 'image3', maxCount:1},{name: 'image4', maxCount:1}]), addProduct);
productRouter.put("/update/:id", updateProduct);
productRouter.post("/remove",adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProducts);
productRouter.get("/count", countProducts);
export default productRouter;

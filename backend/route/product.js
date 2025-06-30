import express from "express";
import { deleteone, getall, postone, updateone } from "../controller/product.js";

const router=express.Router();

router.get("/",getall);

router.post("/products",postone);

router.put("/products/:id",updateone);

router.delete("/products/:id",deleteone);

export default router
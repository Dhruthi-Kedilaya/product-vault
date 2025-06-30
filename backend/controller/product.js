import mongoose from "mongoose";
import Product from "../Models/products.js";

export const getall=async(req,res)=>{
    try{
        const allProducts=await Product.find();
        res.status(200).json({success:true,data:allProducts});
    }catch(error){
        console.log(`Error in fetching all the products form the database : ${error.message}`);
        res.status(500).json({success:false,message:"server error"});
    }
}

export const postone=async(req,res)=>{
    const products=req.body;
    if(!products.name || !products.price || !products.image){
        return res.status(400).json({success:false,message: "please fill all the required fields"});
    }
    const newProduct=new Product(products);

    try{
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct});
    }catch(error){
        console.error(`Error in creating the product : ${error.message}`);
        res.status(500).json({success:false,message:"server error"});
    }
}

export const updateone=async(req,res)=>{
    const id=req.params.id;
    const productnew=req.body;
    console.log(productnew);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"No object with this id exists"});
    }
    try{
        const updatedProduct=await Product.findByIdAndUpdate(id,productnew,{new:true});
        res.status(200).json({success:true,data:updatedProduct});
    }catch(error){
        console.log(`Error in updating the product ${error.message}`);
        res.status(500).json({success:false,message:"Server error"});
    }
}

export const deleteone=async(req,res)=>{
    console.log(req.params.id);
    const id=req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"No object with this id exists"});
    }
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Product deleted successfully!"});
    }catch(error){
        console.error(`Error in deleting the product : ${error.message}`);
        res.status(404).json({success:false,message:"Product with the given id is not found"});
    }
}
import mongoose from "mongoose";
import { ProductSchema } from "../models/productModel";

const Product = mongoose.model('Product', ProductSchema);

export const addNewProduct = async (req, res) => {
    console.log("working")
    let newProduct = new Product(req.body);
    try {
        const product = await newProduct.save()
        res.json(product)
    } catch(err) {
        res.send(err)
    };
}
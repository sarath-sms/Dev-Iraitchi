import mongoose from "mongoose";

const Schema = mongoose.Schema

export const ProductSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    productSize: {
        type: String,
        require: true,
        enum: ["Tiny", "Small", "medium", "Large", "ExtraLarge"]
    },
    paymentAmount: {
        type: Number,
        require: true
    },
    pricePerKg: Number,
    cutTypes: {
        type: [String],
        enum: ["Clean", "Full lined", "Slice", "Half"]
    },
    createdAt: Date,
    updatedAt: {
        type: Date,
        require: true
    }
});

const productData = [
    "id", 
    "product name", 
    "quantity", // need to update
    "size", // need to update
    "payment amount", // need to update
    "product price per kg", // need to update & maintain history
    "cut types", 
    "clean types (normal, turmeric)",
    "image-url", 
    "product name in different languages (prirority: Tamil, hindi, telugu, malayalam)", // in future
    "product category", // can be in array need to analyse
    "created at",
    "updated at",
]
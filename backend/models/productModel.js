import mongoose from "mongoose";

const Schema = mongoose.Schema

export const ProductSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    quantity: { // 0.25, 0.5, 0.75,....
        type: Number,
        require: true,
    },
    size: {
        type: String,
        require: true,
        enum: ["Tiny", "Small", "medium", "Large", "ExtraLarge"]
    },
    buyingPrice: {
        type: Number,
        require: true
    },
    pricePerKg: Number,
    typeOfCuts: {
        type: String,
        enum: ["Piece", "Full lined", "Slice", "Half"]
    },
    cleanType: {
        type: String,
        enum: ["plainWater", "turmeric", "turmericAndRockSallt"]
    },
    updatedAt: {
        type: Date,
        // require: true
    },
    categories: [String],
    image: String,
    quantityAfterCleaning: String, // in grams kind off!👌🏼,
    createdAt: Date,
});

export const Product = mongoose.model('Product', ProductSchema);
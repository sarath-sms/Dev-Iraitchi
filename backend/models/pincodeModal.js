import mongoose from "mongoose";

const Schema = mongoose.Schema

export const PincodeSchema = new Schema({
    pincode: {
        type: Number,
        required: [true, "Please Add Your Pin Code"],
        unique: true
    }
})
import mongoose from "mongoose";

const Schema = mongoose.Schema

export const UserSchema = new Schema({
    mobNo: Number,
    password: String
})
import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";
import bcrypt from "bcrypt";

const User = mongoose.model('User', UserSchema);

export const addNewUser = async (req, res) => {
    try {
        const {mobNo, password} = req.body;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const dbUser = {
            mobNo,
            password: hashedPassword
        }
        const User = await newUser.save();
        let newUser = new User(dbUser);
        res.json(User);
        console.log({salt, hashedPassword, password});
    }catch(err) {
        console.log(err)
    }
}

export const userList = async (req, res) => {
    const users = await User.find({})
    res.json(users);
};
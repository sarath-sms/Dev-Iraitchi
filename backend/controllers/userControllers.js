import mongoose from "mongoose";
import { User } from "../models/userModel";
import bcrypt from "bcrypt";
import { createSecretToken } from "../utils/SecretToken";



export const checkMobNo = async (req, res) => {
    const { mobNo } = req.query;
    if(mobNo) {
        setTimeout(() => {
            res.status(200).send({mobNo, otp: true})
        }, 2000)
    }
}
export const checkOtp = async (req, res, next) => {
    try {
        const { mobNo, otp } = req.body;
        const existingUser = await User.findOne({ mobNo });
        console.log(existingUser, "😀");
        // TODO: FIXME: need otp api call here... 
        if(existingUser?._id) {
            // TODO:
            const token = createSecretToken(existingUser?._id);
            res.cookie("token", token, {
                withCredentials: true,
                httpOnly: false,
              });
            res.status(200)
                .json({profile: existingUser, msg: "signed successfully"});
                next();
        } else {
            if(!!mobNo && (otp === 5555)) {
                const user = await User.create({ mobNo });
                const token = createSecretToken(user._id);
                res.cookie("token", token, {
                    withCredentials: true,
                    httpOnly: false,
                  });
                res.status(201)
                .json({ message: "User signed in successfully", success: true, user });
                next();
            }
        }
    } catch (error) {
        console.log(error);
    }
}


export const addNewUser = async (req, res) => {
    try {
        const {mobNo, password} = req.body;
        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(password, salt);
        const dbUser = {
            mobNo,
            // password: hashedPassword
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
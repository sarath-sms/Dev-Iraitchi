import { IraiAdmin } from "../models/iraiAdminModal";
import { createSecretToken } from "../utils/SecretToken";
import bcrypt from "bcrypt"

export const createIraiAdmin = async (req, res, next) => {
    try {
      const { email, password, IraiAdminName, createdAt } = req.body;
      const existingIraiAdmin = await IraiAdmin.findOne({ email });
      console.log(existingIraiAdmin)
      if (existingIraiAdmin) {
        return res.json({ message: "IraiAdmin already exists" });
      }
      const admin = await IraiAdmin.create({ email, password, IraiAdminName, createdAt });
      const token = createSecretToken(admin._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(201)
        .json({ message: "IraiAdmin signed in successfully", success: true, username: admin?.IraiAdminName });
      next();
    } catch (error) {
      console.error(error);
    }
  };

  export const iraiLogin = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const admin = await IraiAdmin.findOne({ email });
      if(!admin){
        return res.json({message:'Incorrect password or email' }) 
      }
      const auth = await bcrypt.compare(password, admin.password)
      if (!auth) {
        return res.json({message:'Incorrect password or email' }) 
      }
       const token = createSecretToken(admin._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       res.status(201).json({ message: "User logged in successfully", success: true });
       next()
    } catch (error) {
      console.error(error);
    }
  }
import { IraiAdmin } from "../models/iraiAdminModal";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config()

export const verifyIraiAdmin = (req, res, next) => {
    const token = req?.cookies?.token
    if (!token) {
    return res.status(403).json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false })
    } else {
      const user = await IraiAdmin.findById(data.id)
      if (user) return next()
      else return res.json({ status: false })
    }
  })
}
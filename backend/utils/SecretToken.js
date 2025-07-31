import dotenv from "dotenv"
import jwt from "jsonwebtoken";
dotenv.config();

export const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY
//     , {
//     expiresIn: 365 * 24 * 60 * 60, // add if we need expiry
//   }
);
};
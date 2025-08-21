import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const driveSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
  },
  driveName: {
    type: String,
    required: [true, "Name is required"],
  },
  aadhaar: {
    type: String,
    minLength: 12,
    maxLength: 12,
    required: [true, "Aadhaar No. is required"],
  },
  bikeNo: {
    type: String,
    required: [true, "Bike No. is required"],
  },
  drivingLicence: {
    type: String,
    required: [true, "Driving Licence is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  online: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

driveSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

export const IraiDrive =  mongoose.model("IraiDrive", driveSchema);
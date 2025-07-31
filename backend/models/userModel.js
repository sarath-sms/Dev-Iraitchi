import mongoose from "mongoose";

const Schema = mongoose.Schema


// Sub-schema for address
const addressSchema = new Schema({
    label: { type: String, default: 'Home' },
    addr1: String,
    addr2: String,
    // street: String,
    // city: String,
    // state: String,
    postalCode: String,
    // country: { type: String, default: 'India' },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        // required: true
      }
    }
  }, { _id: false });

  // Enable geospatial index
addressSchema.index({ location: '2dsphere' });

export const UserSchema = new Schema({
    mobNo: {
        type: Number,
        required: [true, "Enter your mobile number!"],
        unique: true,
        trim: true,
        minlength: 3
    },
    name: String,
    email: {
        type: String,
        trim: true,
        lowercase: true, // Converts email to lowercase
        match: [/.+\@.+\..+/, 'Please fill a valid email address'] // Basic email regex validation
    },
    addresses: [addressSchema],
    token: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})
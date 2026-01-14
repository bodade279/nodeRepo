const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        mobileNumber: {
            type: String,
            required: true,
            unique: true,
            match: [/^\d{10}$/, "Please enter a valid 10-digit mobile number"]
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
        },
        password: {
            type: String,
            required: true
        },
        profileImage: {
            type: String,
            default: "/uploads/Profile_3.jpg",
        },
        adminType: {
            type: String,
            enum: ["User", "Admin"],
            default: "User",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

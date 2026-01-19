const mongoose = require("mongoose");

const pgSchema = new mongoose.Schema(
    {
        adminId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        // Location Details
        pgName: { type: String, required: true },
        area: { type: String, required: true },
        address: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
        pincode: { type: String, required: true },

        // PG Details
        gender: { type: String, enum: ["Male", "Female", "Both"], required: true },
        preferredGuest: { type: String, enum: ["Students", "Professionals", "Both"], required: true },
        availableFrom: { type: String, required: true },
        foodIncluded: { type: [String], default: [] },
        rules: { type: [String], default: [] },
        closingTime: { type: String },
        isRentNegotiable: { type: Boolean, default: false },
        description: { type: String },

        // Room Details
        roomType: { type: String, required: true },
        occupancy: { type: Number, required: true },
        rent: { type: Number, required: true },

        // Amenities
        laundry: { type: String, enum: ["Yes", "No"], default: "No" },
        roomCleaning: { type: String, enum: ["Yes", "No"], default: "No" },
        wardenFacility: { type: String, enum: ["Yes", "No"], default: "No" },
        moreAmenities: { type: [String], default: [] },

        // Gallery
        images: { type: [String], default: [] },
    },
    { timestamps: true }
);

module.exports = mongoose.model("PG", pgSchema);

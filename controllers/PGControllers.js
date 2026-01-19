const PGModel = require("../models/PGModel");

// Create a new PG listing (Admin Only)
const createPG = async (req, res) => {
    try {
        const {
            pgName, area, address, state, city, pincode,
            gender, preferredGuest, availableFrom, foodIncluded, rules, closingTime, isRentNegotiable, description,
            roomType, occupancy, rent,
            laundry, roomCleaning, wardenFacility, moreAmenities
        } = req.body; 

        // Check if user is Admin (this will be handled by middleware, but extra check doesn't hurt)
        if (req.userType !== 'Admin') {
            return res.status(403).json({ error_code: 403, message: "Only admins can post PG listings." });
        }

        // Handle images if uploaded via multer
        let images = [];
        if (req.files && req.files.length > 0) {
            images = req.files.map(file => `/uploads/${file.filename}`);
        }

        const newPG = new PGModel({
            adminId: req.userId,
            pgName, area, address, state, city, pincode,
            gender, preferredGuest, availableFrom, foodIncluded, rules, closingTime, isRentNegotiable, description,
            roomType, occupancy, rent,
            laundry, roomCleaning, wardenFacility, moreAmenities,
            images
        });

        await newPG.save();

        return res.status(201).json({
            error_code: 201,
            message: "PG listing created successfully.",
            pg: newPG
        });

    } catch (error) {
        console.error("Error creating PG:", error);
        return res.status(500).json({ error_code: 500, message: "An error occurred while creating PG listing." });
    }
};

// Get all PG listings (Public/User)
const getAllPGs = async (req, res) => {
    try {
        const pgs = await PGModel.find().populate("adminId", "firstName lastName email mobileNumber");

        return res.status(200).json({
            error_code: 200,
            message: "PG listings fetched successfully.",
            count: pgs.length,
            pgs: pgs
        });
    } catch (error) {
        console.error("Error fetching PGs:", error);
        return res.status(500).json({ error_code: 500, message: "An error occurred while fetching PG listings." });
    }
};

// Get single PG details
const getPGById = async (req, res) => {
    try {
        const { id } = req.params;
        const pg = await PGModel.findById(id).populate("adminId", "firstName lastName email mobileNumber");

        if (!pg) {
            return res.status(404).json({ error_code: 404, message: "PG not found." });
        }

        return res.status(200).json({
            error_code: 200,
            message: "PG details fetched successfully.",
            pg: pg
        });
    } catch (error) {
        console.error("Error fetching PG details:", error);
        return res.status(500).json({ error_code: 500, message: "An error occurred while fetching PG details." });
    }
};

module.exports = {
    createPG,
    getAllPGs,
    getPGById,
};

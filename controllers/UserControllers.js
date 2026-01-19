const UserModel = require("../models/UserModel");
const jwt = require('jsonwebtoken');
const generateBaseUrl = require("../constants/baseURL").generateBaseUrl;
const generateOTP = require("../constants/GenerateOTP");
const createUserToken = require('../middleware/generateUserToken').generateUserToken;
const createAdminToken = require('../middleware/generateAdminToken').generateAdminToken;




const userRegister = async (req, res) => {
    try {
        const { firstName, lastName, mobileNumber, password, email } = req.body;

        // Validate required fields
        if (!firstName) {
            return res.status(400).json({
                error_code: 400,
                message: "First name is required.",
            });
        }

        if (!lastName) {
            return res.status(400).json({
                error_code: 400,
                message: "Last name is required.",
            });
        }

        if (!mobileNumber) {
            return res.status(400).json({
                error_code: 400,
                message: "Mobile number is required.",
            });
        }

        if (!password) {
            return res.status(400).json({
                error_code: 400,
                message: "Password is required.",
            });
        }

        if (!email) {
            return res.status(400).json({
                error_code: 400,
                message: "Email is required.",
            });
        }

        // Check if the email is already registered
        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) {
            return res.status(409).json({
                error_code: 409,
                message: "Email is already registered.",
            });
        }

        // Check if the mobile number is already registered
        const existingMobile = await UserModel.findOne({ mobileNumber });
        if (existingMobile) {
            return res.status(409).json({
                error_code: 409,
                message: "Mobile number is already registered.",
            });
        }

        // Create a new user
        const newUser = new UserModel({
            firstName,
            lastName,
            mobileNumber,
            email,
            password,
        });

        // Save the user to the database
        await newUser.save();

        return res.status(201).json({
            error_code: 201,
            message: "User registered successfully.",
            user: {
                id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                mobileNumber: newUser.mobileNumber,
                adminType: newUser.adminType,
            },
        });

    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({
            error_code: 500,
            message: "An error occurred during registration.",
        });
    }
};






const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("body - ", req.body);

        // Check if email and password are provided
        if (!email) {
            return res.status(400).json({
                error_code: 400,
                message: "Email is required.",
            });
        }

        if (!password) {
            return res.status(400).json({
                error_code: 400,
                message: "Password is required.",
            });
        }

        // Find user by email
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(401).json({
                error_code: 401,
                message: "Invalid email or password.",
            });
        }

        // Compare plain password (since you store plain passwords)
        if (user.password !== password) {
            return res.status(401).json({
                error_code: 401,
                message: "Invalid email or password.",
            });
        }

        // Generate JWT Token using the new createUserToken function
        const token = createUserToken(user._id, user.email, user.userType);

        // Successful login
        return res.status(200).json({
            error_code: 200,
            message: "Login successful!",
            token: token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                mobileNumber: user.mobileNumber
            },
        });

    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({
            error_code: 500,
            message: "An error occurred during login.",
        });
    }
};






const getUser = async (req, res) => {
    try {
        // Extract userId from the decoded token (stored in req.userId)
        const { userId } = req;

        // Find the user in the database by userId
        const user = await UserModel.findById(userId);

        // If no user is found
        if (!user) {
            return res.status(404).json({
                error_code: 404,
                message: 'User not found.',
            });
        }

        // Return the user's details
        return res.status(200).json({
            error_code: 200,
            message: 'User details fetched successfully.',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                mobileNumber: user.mobileNumber,
                userType: user.userType,
            },
        });
    } catch (error) {
        console.error("Error fetching user details:", error);
        return res.status(500).json({
            error_code: 500,
            message: 'An error occurred while fetching user details.',
        });
    }
};







// -----------------------------------


const adminRegister = async (req, res) => {
    try {
        const { firstName, lastName, mobileNumber, password, email } = req.body;

        if (!firstName || !lastName || !mobileNumber || !password || !email) {
            return res.status(400).json({ error_code: 400, message: "All fields are required." });
        }

        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) {
            return res.status(409).json({ error_code: 409, message: "Email is already registered." });
        }

        const newUser = new UserModel({
            firstName,
            lastName,
            mobileNumber,
            email,
            password,
            adminType: "Admin",
        });

        await newUser.save();

        return res.status(201).json({
            error_code: 201,
            message: "Admin registered successfully.",
            user: {
                id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                mobileNumber: newUser.mobileNumber,
                adminType: newUser.adminType,
            },
        });
    } catch (error) {
        console.error("Error during admin registration:", error);
        return res.status(500).json({ error_code: 500, message: "An error occurred during registration." });
    }
};

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error_code: 400, message: "Email and password are required." });
        }

        const user = await UserModel.findOne({ email, adminType: "Admin" });

        if (!user || user.password !== password) {
            return res.status(401).json({ error_code: 401, message: "Invalid email or password." });
        }

        const token = createAdminToken(user._id, user.email);

        return res.status(200).json({
            error_code: 200,
            message: "Admin login successful!",
            token: token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                mobileNumber: user.mobileNumber,
                adminType: user.adminType,
            },
        });
    } catch (error) {
        console.error("Error during admin login:", error);
        return res.status(500).json({ error_code: 500, message: "An error occurred during login." });
    }
};

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error_code: 400, message: "Email is required." });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error_code: 404, message: "User not found." });
        }

        const otp = generateOTP(4);
        user.otp = otp;
        user.otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
        await user.save();

        // In a real app, send OTP via email/SMS here
        console.log(`OTP for ${email}: ${otp}`);

        return res.status(200).json({
            error_code: 200,
            message: "OTP sent successfully.",
            otp: otp, // Sending back for demo purposes as requested by "screen" implication
        });
    } catch (error) {
        console.error("Error in forgotPassword:", error);
        return res.status(500).json({ error_code: 500, message: "An error occurred." });
    }
};

const verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({ error_code: 400, message: "Email and OTP are required." });
        }

        const user = await UserModel.findOne({ email, otp, otpExpires: { $gt: Date.now() } });
        if (!user) {
            return res.status(400).json({ error_code: 400, message: "Invalid or expired OTP." });
        }

        return res.status(200).json({
            error_code: 200,
            message: "OTP verified successfully.",
        });
    } catch (error) {
        console.error("Error in verifyOTP:", error);
        return res.status(500).json({ error_code: 500, message: "An error occurred." });
    }
};

const resetPassword = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;
        if (!email || !otp || !newPassword) {
            return res.status(400).json({ error_code: 400, message: "All fields are required." });
        }

        const user = await UserModel.findOne({ email, otp, otpExpires: { $gt: Date.now() } });
        if (!user) {
            return res.status(400).json({ error_code: 400, message: "Invalid or expired OTP." });
        }

        user.password = newPassword;
        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();

        return res.status(200).json({
            error_code: 200,
            message: "Password reset successfully.",
        });
    } catch (error) {
        console.error("Error in resetPassword:", error);
        return res.status(500).json({ error_code: 500, message: "An error occurred." });
    }
};

module.exports = {
    userRegister,
    userLogin,
    getUser,
    adminRegister,
    adminLogin,
    forgotPassword,
    verifyOTP,
    resetPassword,
};

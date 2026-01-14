const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/dbConnect");
const userRoute = require("./routes/UserRoutes");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const extension = file.originalname.split(".").pop();
        cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
    },
});

const upload = multer({ storage });
app.use(upload.any());

// 🔹 ADD THIS ROOT ROUTE HERE 👇
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Node API is running successfully 🚀"
    });
});

// Error handler
app.use((error, req, res, next) => {
    return res.status(500).json({ error: error.message });
});

// Routes
app.use("/", userRoute);

// Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bold.green);
});

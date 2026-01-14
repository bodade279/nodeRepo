const jwt = require('jsonwebtoken');

// =====================================================

// Function to generate JWT token for a User
const generateUserToken = (userId, email) => {
    return jwt.sign(
        { userId, email, userType: 'User' },  // Set userType as 'User' for regular users
        process.env.JWT_SECRET,
        { expiresIn: '7d' }  // Token valid for 7 days
    );
};

// =====================================================

// Middleware to verify user token
const verifyUserToken = (req, res, next) => {
    const token = req.headers['x-api-key'];

    // Check if token is provided
    if (!token) {
        return res.status(400).json({
            error_code: 400,
            message: 'Token is required in the x-api-key header',
        });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if userType exists in the token
        const userType = decoded.userType;
        if (!userType) {
            return res.status(400).json({
                error_code: 400,
                message: 'User type is missing in the token payload',
            });
        }

        // Attach the decoded information to the request object
        req.userType = userType;  // userType corresponds to adminType in your model
        req.userId = decoded.userId;

        // Continue to the next middleware or route handler
        next();

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                error_code: 401,
                message: 'Token has expired',
            });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                error_code: 401,
                message: 'Invalid token',
            });
        } else {
            return res.status(500).json({
                error_code: 500,
                message: 'An error occurred during token verification',
            });
        }
    }
};

// =====================================================

module.exports = {
    generateUserToken,
    verifyUserToken,
};

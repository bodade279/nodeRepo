const jwt = require('jsonwebtoken');

// =====================================================

// Function to generate JWT token for an Admin
const generateAdminToken = (userId, email) => {
    return jwt.sign(
        { userId, email, userType: 'Admin' },  // Set userType as 'Admin' for admins
        process.env.JWT_SECRET,
        { expiresIn: '7d' }  // Token valid for 7 days
    );
};

// =====================================================

// Middleware to verify admin token
const verifyAdminToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    // Check if token is provided
    if (!token) {
        return res.status(400).json({
            error_code: 400,
            message: 'Token is required in the Authorization header (Bearer <token>)',
        });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if userType is 'Admin'
        const userType = decoded.userType;
        if (userType !== 'Admin') {
            return res.status(403).json({
                error_code: 403,
                message: 'Access denied. Admins only.',
            });
        }

        // Attach the decoded information to the request object
        req.userType = userType;
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
    generateAdminToken,
    verifyAdminToken,
};

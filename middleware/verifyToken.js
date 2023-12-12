// Import the 'jsonwebtoken' module for token verification
const jwt = require("jsonwebtoken");

// Middleware function to verify the authenticity of a token
const verifyToken = async (req, res, next) => {
    try {
        // Extract the token from the 'Authorization' header
        const token = req.header('Authorization');

        // If no token is provided, return an unauthorized response
        if (!token) {
            res.status(401).json({ message: "Unauthorized user" });
        }

        // Verify the token using the provided secret key
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            // If there's an error in verification, return an unauthorized response
            if (err) {
                res.status(401).json({ message: "Unauthorized token" });
            }

            // Attach the decoded user information to the request object
            req.user = decoded;

            // Continue to the next middleware or route
            next();
        });
    } catch (error) {
        // Return any encountered errors
        return error;
    }
}

// Export the middleware function for use in other parts of the application
module.exports = verifyToken;

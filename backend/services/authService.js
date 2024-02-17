const jwt = require('jsonwebtoken'); // Importing jsonwebtoken package for token operations

const secretKey = "thisIsMySecretKeyThisShouldBeHidden"; // Secret key for token encryption

// Function to generate token
exports.getToken = (userData)=>{
    console.log("inside token", userData)
    try {
        return jwt.sign(
        userData,
        secretKey,
        {expiresIn:604800000} // Token expires in 7 days (in milliseconds)
        );
    } catch (error) {
        console.log(error); // Log any errors
        return null; // Return null if token generation fails
    }
};

// Function to verify token
exports.verifyToken = (token)=>{
    try{
        return jwt.verify(token, secretKey); // Verify token using secret key
    } catch(e){
        return null; // Return null if token verification fails
    }
};

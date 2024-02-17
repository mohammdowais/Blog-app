const bcrypt = require("bcrypt"); // Importing bcrypt for password hashing
const { Users } = require("../models/userModel"); // Importing User model
const { getToken } = require("../services/authService"); // Importing getToken function from authService

// Controller function to handle user login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; // Destructuring email and password from request body

    // Check if email or password is missing
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Invalid request, send email and password both" });
    }

    // Find user by email
    const user = await Users.findOne({ email });

    // If user not found, return 404 status code
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // Compare passwords
    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    // If password is correct, generate token and return user data
    if (passwordIsCorrect) {
      const token = getToken({ _id: user._id, name:user.name,email:user.email });
      return res
        .status(200)
        .json({
          message: "logged In",
          data: { name: user.name, email: user.email, token },
        });
    } else {
      return res.status(401).json({ message: "Incorrect password" });
    }
  } catch (e) {
    console.log(e); // Log any errors
    return res.status(500).json({ message: e.message }); // Return internal server error
  }
};

// Controller function to handle user signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body; // Destructuring name, email, and password from request body

    // Check if name, email, or password is missing
    if (!name || !email || !password) {
      return res.json({
        message:
          "Invalid request! req.body must have all three, name, email, and password",
      });
    }

    // Hash password
    const password_hash = await bcrypt.hash(password, 12);

    // Create new user
    const user = await Users.create({ name, email, password: password_hash });
    
    // Generate token and return user data
    const token = getToken({ _id: user._id,name:user.name,email:user.email });
    return res.json({
      message: "User Created",
      data: { name: user.name, email: user.email, token },
    });
  } catch (e) {
    console.log(e); // Log any errors
    if (e.code) {
      return res.json({ message: "User Already Exists" }); // If user already exists, return appropriate message
    }
    return res.json({ message: e.message }); // Return error message
  }
};

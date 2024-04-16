import { Users } from "../models/user.js";

// user registration
export const Register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    // Hash/Encrypt user password using bcrypt
    // create user account
    const createUser = await Users.create({ username, email, password });
    // return response
    res.status(201).json(createUser);
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  try {
    // User Login
    const { email, password } = req.body;

    // Check if user exists
    const user = await Users.findOne({
      email,
    });
    // return 404 if user not found
    if (!user) {
      return res.status(404).json({
        message: "",
      });
    } else {
      // Generate access token for user using jsonwebtoken

      // Save access token in database
      // Return response
      res.status(200).json(findOne);
    }
  } catch (error) {
    next(error);
  }
};

export const Logout = (req, res, next) => {
  try {
    // Delete all user access token from the database
  } catch (error) {
    next(error)
  }
};

export const Profile= (req, res, next) =>{
    try {
        // Get profile for login user
    } catch (error) {
        next(error)
    }
}

import { Users } from "../models/users.js";

// user registration
export const Register =async (req, res, next)=>{
const{username, email, password}=req.body
try {
    // create user account
    const createUser= await Users.create({username, email, password})

    // return response
    res.status(201).json(createUser)
} catch (error) {
    next(error)
}
}

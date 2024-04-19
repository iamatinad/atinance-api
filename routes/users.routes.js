import { Router } from "express";
import { Login, Logout, Profile, Register } from "../controllers/users.controller.js";

// create users router
const router = Router()

// Define routes
router.post('/register', Register)
router.post('/login', Login)
router.post('/logout', Logout)
router.get('/me', Profile)

// export routes
export default router;
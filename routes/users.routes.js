import { Router } from "express";
import { Register } from "../controllers/user.controllers.js";

// create router
const router= Router()

// create other routes
router.post('/register', Register)

// export routes
export default router;
import { Router } from "express";
import { addBudget, deleteBudget, getBudget } from "../controllers/budgets.controller.js";

// create users router
const router = Router();

// Define routes
router.post("/", addBudget);
router.get("/",getBudget)
router.delete("/:id", deleteBudget);


export default router;

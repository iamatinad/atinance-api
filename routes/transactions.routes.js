import { Router } from "express";
import { addTransaction, deleteTransaction, getTransactions } from "../controllers/transactions.controller.js";

// Create transaction router
const router= Router();

// Define routes
router.post('/',addTransaction)
router.get('/', getTransactions)
router.delete('/:id',deleteTransaction)

export default router;
import { Transaction } from "../models/transaction.js";

export const addTransaction = async (req, res, next) => {
  try {
    // Extract data from request body
    const { userId, title, description, amount, type, date } = req.body;

    // Create a new transaction document
    const newTransaction = await Transaction.create({
      userId,
      title,
      description,
      amount,
      type,
      date
    });

    // Return the newly created transaction
    res.status(201).json(newTransaction);
  } catch (error) {
    next(error);
  }
};

export const getTransactions = async (req, res, next) => {
  try {
    // Retrieve all transactions from the database
    const allTransactions = await Transaction.find();

    // Return the list of transactions
    res.status(200).json(allTransactions);
  } catch (error) {
    next(error);
  }
};

export const deleteTransaction = async (req, res, next) => {
  try {
    // Find the transaction by ID and delete it
    const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id);

    // If transaction was not found, return a 404 response
    if (!deletedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    // If transaction was successfully deleted, return a 200 response
    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    next(error);
  }
};

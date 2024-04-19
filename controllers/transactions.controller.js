import { Transaction } from "../models/transaction.js";

export const addTransaction = async (req, res, next) => {
  try {
    // Add Trasaction to database
    const { userId, title, description, amount, type, date } = req.body;
    const createTrasaction = await Transaction.create(
      userId,
      title,
      description,
      amount,
      type,
      date
    );
    // return response
    res.status(201).json(createTrasaction);
  } catch (error) {
    next(error);
  }
};



export const getTransactions = async (req, res, next) => {
  try {
    //   Get all transactions from database
    const FindResult = await Transaction.find();

    // Return response
    res.status(200).json(FindResult);
  } catch (error) {
    next(error);
  }
};

// Delete a single transaction by id
export const deleteTransaction = async (req, res, next) => {
  try {
    let deleteOneTransaction = await Transaction.deleteOne({
      _id: req.params.id,
    });
    res.send(200).json(deleteOneTransaction);
  } catch (error) {
    next(error);
  }
};

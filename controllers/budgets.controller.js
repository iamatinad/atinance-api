import { Budget } from "../models/budget.js";

export const addBudget = async (req, res, next) => {
  try {
    // Add budget
    const { userId, title, description, amount, type, date } = req.body;
    const createBudget = await Budget.create({
      userId,
      title,
      description,
      amount,
      type,
      date,
    });
    // return response
    res.status(201).json(createBudget);
  } catch (error) {
    next(error);
  }
};

export const getBudget = async (req, res, next) => {
    try {
      //   Get all budgets from database
      const FindResult = await Budget.find();
  
      // Return response
      res.status(200).json(FindResult);
    } catch (error) {
      next(error);
    }
  };


  
// Delete a single budget by id
export const deleteBudget = async (req, res, next) => {
    try {
      let deleteOneBudget = await Budget.deleteOne({
        _id: req.params.id,
      });
      res.send(200).json(deleteOneBudget);
    } catch (error) {
      next(error);
    }
  };

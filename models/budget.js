import { Schema, model, Types } from "mongoose";

const budgetSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

export const Budget = model("Budget", budgetSchema, "budgets");

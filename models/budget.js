import { Schema, model } from "mongoose";

const budgetSchema = new Schema({
  userId: {
    type: ObjectId,
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
    required: true,
  },
});

export const Budget = model ("Budget", budgetSchema, "budget");

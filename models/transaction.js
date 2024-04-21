import { Schema, model, Types } from "mongoose";

const transactionSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    type: {
        type: String,
        enum: ["income", "expense"],
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }

})

export const Transaction = model("Transaction", transactionSchema, "transactions");
import { Schema, model } from "mongoose";

const transactionSchema = new Schema ({
    userId: {
        type:ObjectId,
        required:true
    },

    title:{
        type:String,
        required: true
    },

    description:{
        type:String,
        required: true
    },

    amount:{
        type: Number,
        required: true
    },

    type:{
        enum: ["income, expense"],
        required: true
    },
    date:{
        type: Date,default:Date.now,
        required: true
    }

})

export const Transaction = model ("Transaction", transactionSchema, "transaction");
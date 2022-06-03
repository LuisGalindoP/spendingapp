const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Add a category name"],
        minlength: [2, "Category must be at leas 3 characters long"]
    },
    category: {
        type: String
    },
    amount: {
        type: Number,
    },
    budget: {
        type: Number,
    }
}, {timestamps: true});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;
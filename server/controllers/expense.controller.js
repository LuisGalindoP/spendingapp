const Expense = require('../models/expense.model');


module.exports = {

    //FIND ALL EXPENSES
    findAllExpenses: (req, res) => {
        Expense.find()
            .then((allExpenses) => {
                console.log(allExpenses);
                res.json(allExpenses);
            })
            .catch((err) => {
                console.log('Error in findAllExpenses');
                res.json({message: 'something went wrong in findAllExpenses', error: err});
            })
    },

    //ADD AN EXPENSE
    addNewExpense: (req, res) => {
        Expense.create(req.body)
            .then((newExpense)=> {
                console.log(newExpense);
                res.json(newExpense);
            })
            .catch((err) => {
                console.log('Error in addNewExpense');
                res.status(400).json(err);
            })
    },

    //FIND ONE EXPENSE BY ID
    findOneExpense: (req, res) => {
        Expense.findOne({_id: req.params.id})
            .then((oneExpense) => {
                console.log(oneExpense);
                res.json(oneExpense);
            })
            .catch((err) => {
                console.log('Error getting findOneExpense');
                res.json({message: 'Error in findOneExpnese control', error: err});
            })
    },
    //UPDATE EXPENSE
    updateExpense: (req, res) => {
        Expense.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
            .then((updatedExpense)=>{
                console.log(updatedExpense);
                res.json(updatedExpense);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },
    //DELETE EXPENSE
    deleteExpense: (req, res) => {
        Expense.deleteOne({_id: req.params.id})
            .then((deletedExpense)=>{
                console.log(deletedExpense);
                res.json(deletedExpense);
            })
            .catch((err) => {
                console.log('Error in deletedExpense', err);
                res.json({message: 'Error in deleteExpense controller', error: err})
            })

    }
}
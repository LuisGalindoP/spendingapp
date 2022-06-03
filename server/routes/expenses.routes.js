const ExpenseController = require('../controllers/expense.controller');

module.exports = (app) => {
    app.get('/api/expenses/all', ExpenseController.findAllExpenses);
    app.post('/api/expenses/new', ExpenseController.addNewExpense);
    app.get('/api/expenses/:id', ExpenseController.findOneExpense);
    app.put('/api/expenses/edit/:id', ExpenseController.updateExpense);
    app.post('/api/expenses/:id', ExpenseController.deleteExpense);
}
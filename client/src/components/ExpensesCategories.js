import React, {useState,useEffect} from 'react';
import axios from 'axios';

const ExpensesCategories = (props) => {
    //States from props
    const {allExpenses, setAllExpenses} = props;

    //Get all Expenses with axios
    useEffect(() => {
        axios.get('http://localhost:8000/api/expenses/all',)
            .then((response)=>{
                console.log(response.data);
                setAllExpenses(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [setAllExpenses])
    return (
        <div className="container">
            <div>
                <h1>Expenses</h1>
                {allExpenses.map((expense, index )=> {
                    return (
                        <div key={index}>
                            <h1>Expense name: {expense.name}</h1>
                        </div>
                    )
                })}
            </div>

        </div>
    )
};

export default ExpensesCategories;
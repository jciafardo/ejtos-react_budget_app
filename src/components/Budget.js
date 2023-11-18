import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import HandleCurrencyChange from './changeCurrency.js'
import CurrencyDropDown from './currencyComponent'
const Budget = () => {
    const { budget, expenses, currency, dispatch} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value < totalExpenses){
            alert("Budget may not be lower than spending " + totalExpenses)
        }
        else{
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: <CurrencyDropDown />
                {budget}</span>
                <div>Selected Currency: {currency} </div>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

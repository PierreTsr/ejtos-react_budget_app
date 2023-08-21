import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);

    const setBudget = (event) => {
        if (event.target.validity.valid) {
            const tmpBudget = parseInt(event.target.value); 
            const totalExpenses = expenses.reduce(
                (total, item) => {return total + item.cost},
                0
            );
            if ( tmpBudget > 20000) {
                alert('The value cannot exceed £20000');
            }
            else if ( tmpBudget < totalExpenses ) {
                alert('The value cannot be lower than the current expenses: £' + totalExpenses);
            }
            else {
                dispatch({
                    type: 'SET_BUDGET',
                    payload: tmpBudget
                });
            }
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    pattern='/\d*/'
                    step={10}
                    onChange={setBudget}>
                </input>
            </span>
        </div>
    );
};
export default Budget;

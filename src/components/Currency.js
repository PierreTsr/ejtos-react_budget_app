import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    return (
        <div className='alert alert-success'>
            Currency: <select name='currencies' id='currencies'>
                <option value='$'>$ Dollar</option>
                <option value='£'>£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Rupee</option> 
            </select>
        </div>
    )
};
export default Currency;
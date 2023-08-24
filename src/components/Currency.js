import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    return (
        <div className='alert alert-success'>
            Currency: <select name='currencies' id='currencies' 
                onChange={(event) => {
                    dispatch({
                        type: 'CHG_CURRENCY',
                        payload: event.target.value
                    })
                }}>
                <option value='$' selected={currency === '$'}>$ Dollar</option>
                <option value='£' selected={currency === '£'}>£ Pound</option>
                <option value='€' selected={currency === '€'}>€ Euro</option>
                <option value='₹' selected={currency === '₹'}>₹ Rupee</option> 
            </select>
        </div>
    )
};
export default Currency;
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'; 
import HandleCurrencyChange from './changeCurrency.js'

const CurrencyDropDown = () =>{
    const { dispatch, currency } = useContext(AppContext)
    return (
        <div>
            <select className="custom-select" value={currency} onChange={(event) => HandleCurrencyChange(event, dispatch)}>
                <option value="$"> $</option>
                <option value=" €"> €</option>
                <option value="₹"> ₹</option>
                <option value=" £"> £</option>
            </select>
        </div>
    );
}





export default CurrencyDropDown ;



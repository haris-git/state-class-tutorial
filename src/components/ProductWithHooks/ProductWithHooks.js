import React, { useState } from 'react';
import './ProductWithHooks.css';

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

export default function ProductWithHooks() {
  /**
   * "useState" is a function that takes the initial state as an argument and returns an array with two items. 
   * The first item is a variable containing the state, and the second item in the array is a function that will update the state
   */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function getTotal(total ) {
    return total.toLocaleString(undefined, currencyOptions)
  }

  function add() {
    setCart(['ice cream']);
    setTotal(5);
  }

  return(
    <div className="wrapper">
      <div>
        Shopping Cart: { cart.length } total items.
      </div>
      <div>Total: { getTotal(total) }</div>

      <div className="product-with-hooks"><span role="img" aria-label="ice cream">🍦</span></div>
      <button onClick={ add }>Add</button> 
      <button onClick={ 
        // This arrow function is not performance-optimized.
        () => { 
          setCart([]); 
          setTotal(0); 
        } 
      }>Remove</button> 
    </div>
  )
}
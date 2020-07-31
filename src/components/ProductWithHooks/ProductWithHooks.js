import React, { useReducer } from 'react';
import './ProductWithHooks.css';

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}


const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
];

function cartReducer(state, product) {
  return [...state, product]
}

function totalReducer(state, price) {
  return state + price;
}

export default function ProductWithHooks() {
  const [cart, setCart] = useReducer(cartReducer, []);
  const [total, setTotal] = useReducer(totalReducer, 0);

  function getTotal(total ) {
    return total.toLocaleString(undefined, currencyOptions)
  }

  function add(product) {
    setCart(product.name);
    setTotal(product.price);
  }

  return(
    <div className="wrapper">
      <div>
        Shopping Cart: {cart.length} total items.
      </div>
      <div>Total: {getTotal(total)}</div>
        <div>
        {products.map(product => (
          <div key={product.name}>
            <div className="product-with-hooks">
              <span role="img" aria-label={product.name}>{product.emoji}</span>
            </div>
            <button onClick={ () => add(product) }>Add</button>
            <button>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}
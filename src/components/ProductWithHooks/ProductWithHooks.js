import React, { useState } from 'react';
import './ProductWithHooks.css';

export default function ProductWithHooks() {
  return(
    <div className="wrapper">
      <div>
        Shopping Cart: 0 total items.
      </div>
      <div>Total: 0</div>

      <div className="product-with-hooks"><span role="img" aria-label="ice cream">🍦</span></div>
      <button>Add</button> <button>Remove</button>
    </div>
  )
}
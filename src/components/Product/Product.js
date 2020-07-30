import React, { Component } from 'react';
import './Product.css';


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

export default class Product extends Component {
  state = {
      cart: []
  }

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

  add = (product) => {
    this.setState(state => ({
      cart: [...state.cart, product]
    }))
  }

  remove = (product) => {
    this.setState(state => {
      const cart = [...state.cart]; //The three-dots-operator (spread operator) is creating a new copy of the state,cart NOT a reference to the old object.
      const productIndex = cart.findIndex(p => p.name === product.name);
      if(productIndex < 0) {
        return; //By returning nothing, React will know the state didn’t change and won’t trigger a re-render. 
      }
      cart.splice(productIndex, 1)
      return ({
        cart
      })
    })
  }

  getTotal = () => {
    const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price, 0);
    return total.toLocaleString(undefined, this.currencyOptions)
  }

  render() {
    return(
      <div className="wrapper">
        <div>
          Shopping Cart: { this.state.cart.length } total items.
        </div>
        <div>Total { this.getTotal() }</div>
        <div>
          {products.map(product => (
            <div key={ product.name }>
              <div className="product">
                <span role="img" aria-label={ product.name }>{ product.emoji }</span>
              </div>
              <button onClick={ () => this.add(product) }>Add</button>
              <button onClick={ () => this.remove(product) }>Remove</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
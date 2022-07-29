import React from 'react'
import "./CheckoutProduct.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating }) {

  const[{basket},dispatch] = useStateValue(); 

  const removeFromBasket = () =>{
    // dispatched the item into the Data Layer
    dispatch ({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })

  }


  return (
    <div className='checkoutproduct'>
      <img className='checkoutProduct__image' src={image} alt=""/>
      <div className = 'checkoutProduct__info'>
        <p className = "checkoutProduct__title">
          {title}</p>

        
            <div className="checkoutProduct__price">
                <CurrencyFormat
            renderText={(value) => (
                <>
                <strong>{value}</strong>
                </>
            )}
            decimalScale = {2}
            value = {price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
              /> 
            </div>


        
        <div className='checkoutProduct__rating'>
          {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>


      </div>


        
    </div>
  )
}

export default CheckoutProduct
import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal.js"

function Checkout() {

  // eslint-disable-next-line
  const [{basket} , {dispatch}] = useStateValue();  

  return (

    <div className='checkout'>
        <div className="checkout__left">
            <img className='checkout__add'
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
            <div className='checkout__title'></div>

            <div>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
            {basket.map((item) => (
              
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating} />

            ))}
        
            
        </div>

        </div>
        
        <div className='checkout__right'>
            <Subtotal/>
            {/*Subtotal*/}
        </div>
    </div>
  )
}

export default Checkout
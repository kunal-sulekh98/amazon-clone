import React from 'react'
import CurrencyFormat from 'react-currency-format';
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {

  //This pulls data from the data layer
  const [{ basket }, dispatch] = useStateValue();

  console.log('this is the basket >>> ', basket);
  const addToBasket = () =>{
    // dispatched the item into the Data Layer
    dispatch ({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,

      }
    })

  }

  return (
    <div className="product">
        <div className= "product__info">
            <p>{title}</p>
            <div className="product__price">
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
            <div className= "product__rating">
                {Array(rating).fill().map((_, i) => (
                     <p>⭐</p>
                ))}
               
            </div>

        </div>
        <img src={image} alt=""/>
        <button onClick={addToBasket}>Add to Basket</button>

    </div>
  )
}

export default Product
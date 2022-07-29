import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

console.log(React.version);

function Subtotal() {

    const [{basket}] = useStateValue();

    /* You could have used this basic for loop as well insted of Selector function
const [{basket}] = useStateValue();
        
        var sum = 0;
        basket.forEach(element => {
            sum += element.price
        }); */
 
  return (
      
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items):
                    <strong>{value}</strong>
                </p>
                <small className="subtotal__gifts">
                    <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )}
            decimalScale = {2}
            value = {getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
        />
        <button>Proceed to Checkout</button>

    </div>
  )
}

export default Subtotal
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
//import { ShoppingBasketRounded } from "@material-ui/icons";
import { getBasketTotal } from "./reducer.js";

function Subtotal() {
  /* eslint-disable no-unused-vars */
  const [{ basket }, dispatch] = useStateValue();

  // const calculateTotal = (basket) => {
  //   return basket.reduce((price, item) => item.price + price, 0);
  // };

  return (
    <div className="subtotal">
      {/* <p>
        Subtotal ({basket.length} items):{" $"}
        <strong>{calculateTotal(basket)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small> */}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button> Proceed to Checkout </button>
    </div>
  );
}

export default Subtotal;

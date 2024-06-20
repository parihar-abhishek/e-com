import React from "react";
import Cart from "./Cart";
import Checkout from "./cart/checkout/Checkout";
import Items from "./Items";

function App() {
  return (
    <div>
      <Items />
      <Cart />
      <Checkout />
    </div>
  );
}

export default App;

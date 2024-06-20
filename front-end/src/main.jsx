import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  // createRoutesFromChildren,
  createRoutesFromElements,
} from "react-router-dom";
import Checkout from "./cart/checkout/Checkout";
// import Cart from "./Cart";
import Items from "./Items";
import Payment from "./cart/checkout/Payment";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/cart", element: <Cart /> },
//       { path: "/checkout", element: <Checkout /> },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Items />} />

      <Route path="checkout" element={<Checkout />} />
      <Route path="payment" element={<Payment />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

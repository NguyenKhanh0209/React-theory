import { Route, Routes } from "react-router";

import { useEffect, useState } from "react";
import axios from "axios";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      console.log(response.data);
      setCartItems(response.data);
    });
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cartItems} />} />{" "}
      {/* index = path="/" */}
      <Route path="checkout" element={<CheckoutPage cart={cartItems} />} />
      <Route path="orders" element={<OrdersPage cart={cartItems} />} />
    </Routes>
  );
}

export default App;

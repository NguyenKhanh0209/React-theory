import { Route, Routes } from "react-router";
import { Homepage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      console.log(response.data);
      setCartItems(response.data);
    });
  }, []);
  return (
    <Routes>
      <Route index element={<Homepage cart={cartItems} />} />{" "}
      {/* index = path="/" */}
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default App;

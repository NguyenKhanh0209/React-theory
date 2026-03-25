import { Route, Routes } from "react-router";
import { Homepage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} /> {/* index = path="/" */}
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default App;

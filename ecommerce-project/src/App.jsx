import { Route, Routes } from "react-router";
import { Homepage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/CheckoutPage";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} /> {/* index = path="/" */}
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;

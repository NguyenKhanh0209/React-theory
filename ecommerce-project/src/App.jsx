import { Route, Routes } from "react-router";
import { Homepage } from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} /> {/* index = path="/" */}
      <Route path="checkout" element={<div>Test checkout page</div>} />
    </Routes>
  );
}

export default App;

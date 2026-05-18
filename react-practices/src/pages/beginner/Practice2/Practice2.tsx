import { useState } from "react";

const Practice2 = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl">Advanced Counter</h1>
      {count > 10 ? (
        <p className="text-amber-700">Current Count: {count}</p>
      ) : (
        <p>Current Count: {count}</p>
      )}
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-200 active:bg-blue-800 active:scale-100"
          onClick={handleIncrease}
        >
          Increase
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 hover:scale-105 transition-transform duration-200 active:bg-red-800 active:scale-100 "
          onClick={handleDecrease}
        >
          Decrease
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:scale-105 transition-transform duration-200 active:bg-green-800 active:scale-100 "
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Practice2;

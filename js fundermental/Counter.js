import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-blue-200 rounded-lg shadow-md text-center">
      <p className="text-xl font-semibold">Count: {count}</p>
      <button 
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

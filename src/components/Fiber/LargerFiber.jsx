import React, { useState, useTransition } from "react";

function LargerFiber() {
  const [items, setItems] = useState([]);
//   const [isPending, startTransition] = useTransition(); // Fiber API

  const addItems = () => {
    // startTransition(() => { 
      let newItems = [];
      for (let i = 0; i < 10000; i++) {
        newItems.push(`Item ${i}`);
      }
      setItems(newItems); // Non-blocking: Fiber prioritizes rendering
    // });
  };

  return (
    <div>
      <button onClick={addItems} >
        {/* {isPending ? "Adding Items..." : "Add 10,000 Items"} */}
        btn
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default LargerFiber;

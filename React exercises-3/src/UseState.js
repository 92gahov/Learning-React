import React, { useState } from "react";

const UseState = () => {

    const [count, setCount] = useState(0);
    // let count = 0;

    const increment = () => {
        // count += 1;
        setCount(count + 1)
    }

    const decrement = () => {
        // count -= 1;
        setCount(count - 1)
    }
    return (
        <div>
            <p>The counter is: {count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default UseState;
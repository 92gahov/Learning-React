import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);


    return (
        <div>
            <h1>{count}</h1>
            <button className="border-2 border-black" onClick={() => setCount(count + 1)}>Click + </button>
            <button className="border-2 border-black" onClick={() => setCount(count - 1)}>Click - </button>
        </div>
    )
}

export default Counter;
import React, { useEffect, useState } from "react";

const CounterHook = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Clicked ${count} times`
    })

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={increment}>Click</button>
            <p>{count}</p>
        </div>
    )
}

export default CounterHook;
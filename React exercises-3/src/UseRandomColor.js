import { useState } from "react";  

const UseRandomColor = () => {
    const [color, setColor] = useState("");
    const [greeting, setGreeting] = useState("")

    const changeColor = () => {
        setColor(Math.random().toString(16).substr(-6))
    }

    const sayHello = () => {
        setGreeting("Hello")
    }

    return {color, changeColor, greeting, sayHello};
}

export default UseRandomColor;
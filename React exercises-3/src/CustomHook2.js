import React from "react";  
import UseRandomColor from "./UseRandomColor";
import UseTest from "./UseTest";

const CustomHook2 = () => {

    const {color, changeColor, greeting, sayHello} = UseRandomColor();
    const {greeting2, sayHello2} = UseTest();

    return (
        <div style={{width: "100vw", height: "100vh", backgroundColor: "#" + color}}>
            <button onClick={changeColor}>Change Color</button>
            <button onClick={sayHello}>Click</button>
            <button onClick={sayHello2}>Click 2</button>
            <p>{greeting}</p>
            <p>{greeting2}</p>
        </div>
    )
}

export default CustomHook2;
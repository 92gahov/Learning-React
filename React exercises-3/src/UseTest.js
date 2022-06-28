import { useState } from "react";  

const UseTest = () => {
    const [greeting2, setGreeting2] = useState("");

    const sayHello2 = () => {
        setGreeting2("Hello 2")
    }
    return {greeting2, sayHello2}
}

export default UseTest;
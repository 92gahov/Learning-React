import { useEffect, useState } from "react";  

const UseQuery = () => {

    const [response, setResponse] = useState("");

    useEffect(() => {
        fetch("https://foodish-api.herokuapp.com/api/")
        .then(res => res.json())
        .then(data => {
            setResponse(data)
        })
    }, [])
    return {response}
}

export default UseQuery;
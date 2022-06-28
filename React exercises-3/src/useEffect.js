import React, { useEffect, useState } from "react";

const UseEffect = () => {
    // const [resourceType, setResourceType] = useState("")
    // const [items, setItems] = useState([])

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //     .then(response => response.json())
    //     .then(json => setItems(json))
    // }, [resourceType])

    // return (
    //     <div>
    //         <button onClick={() => setResourceType("posts")}>Posts</button>
    //         <button onClick={() => setResourceType("users")}>Users</button>
    //         <button onClick={() => setResourceType("comments")}>Comments</button>
    //         {items.map(item => {
    //             return <div>
    //                 <p>{JSON.stringify(item)}</p>
    //                 <hr></hr>
    //             </div>
    //         })}
    //     </div>
    // )

    //////////////////////////////////////////////////////

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div>{windowWidth}</div>
    )
}

export default UseEffect;
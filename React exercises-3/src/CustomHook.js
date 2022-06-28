import React, { useRef, useState } from "react";
import UseRandomJoke from "./UseRandomJoke";

const CustomHook = () => {

    // const [joke, setJoke] = useState("");

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);

    const [firstName, setFirstName] = useState("Chuck");
    const [lastName, setLastName] = useState("Norris");

    const joke = UseRandomJoke(firstName, lastName);

    const generateJoke = e => {
        e.preventDefault();
        setFirstName(firstNameRef.current.value);
        setLastName(lastNameRef.current.value);
    }

    // useEffect(() => {
    //     const fetchJoke = async () => (
    //         await fetch(`http://api.icndb.com/jokes/random?firstName=Georgi&lastName=Gahov`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setJoke(data.value.joke)
    //             })
    //     )
    //     fetchJoke();
    // }, [])

    return (
        <div>
            <h1>The Joke Generator</h1>

            <h2>{joke}</h2>

            <form>
                {/* <input type="text" placeholder="first name" value={firstName} onChange={e => setFirstName(e.target.value)}></input> */}
                <input type="text" placeholder="first name" ref={firstNameRef}></input>
                {/* <input type="text" placeholder="last name" value={lastName} onChange={e => setLastName(e.target.value)}></input> */}
                <input type="text" placeholder="last name" ref={lastNameRef}></input>
            </form>

            <button onClick={generateJoke}>Generate Joke</button>
        </div>
    )
}

export default CustomHook;
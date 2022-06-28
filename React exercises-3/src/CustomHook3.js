import React from "react";
import UseQuery from "./UseQuery";

const CustomHook3 = () => {

    const {response} = UseQuery();

    return (
        <div>
            <img src={response.image} alt=""></img>
        </div>
    )
}

export default CustomHook3;
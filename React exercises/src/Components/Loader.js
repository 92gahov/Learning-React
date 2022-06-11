import React from "react";
import loader from "../Components/img/loader.gif";

class Loader extends React.Component {
    render() {
        return (
            <div>
                <img src={loader} alt=""></img>
            </div>
        )
    }
};

export { Loader }
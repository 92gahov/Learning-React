import React from "react";
import "./index.css"


const SeriesList = (props) => {
    console.log(props)
    return (
        <div>
            <ul className="series-list">
                {props.List.map(series => {
                    return <li key={series.id}>{series.name}</li>
                    // console.log(series.name)
                })}
            </ul>
        </div>
    )
}

export default SeriesList;
import React from "react";

const Employee = (props) => {
    console.log(props);
    const { firstName, lastName } = props;
    return (
        <h5>
            {`Employee name: ${firstName} ${lastName}`}
        </h5>
    )
}

export default Employee;
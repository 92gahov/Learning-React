import React from "react";

const employee = {
    id: "ABC",
    name: "John",
    address: {
        id: "DEF",
        street: "210 Washington",
        country: "Canda",
        zones: {
            plantZone: "78",
            alienZone: "50"
        }
    }
}

const Destructuring = () => {


    const { name, id: employeeId, address: { street, country, zones: { plantZone, alienZone } } } = employee;
    // const { street, country, zones } = address;
    // const {plantZone, alienZone} = zones;
    // const {id: addressId} = address;
    return (
        <div>
            <p>{name}</p>
            {/* <p>{id}</p> */}
            {/* <p>{address.street}</p> */}
            {/* <p>{street}, {country}</p> */}
            <p>{street}, {country}</p>
            <p>{plantZone}, {alienZone}</p>
            {/* <p>{plantZone}, {alienZone}</p> */}
            <p>{employeeId}</p>
            {/* <p>{addressId}</p> */}
        </div>
    )
}

export default Destructuring;
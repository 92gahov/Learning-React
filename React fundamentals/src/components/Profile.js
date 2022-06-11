function Profile(props) {
    console.log(props);

    const {name, lastname} = props;
    // props.name = "Jake"; // Error ! - Props are immutable !
    return (
        <h1>
        {/* Name: {props.name} {props.lastname} */}
        Name: {name} {lastname}
        </h1>
    )
}

export default Profile;
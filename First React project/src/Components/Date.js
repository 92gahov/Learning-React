const date = new Date();

const currentDate = () => {
    return date.toDateString();
}

function Display() {
    return <h1>Today is: {currentDate()}</h1>
}

export default Display;
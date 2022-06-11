import React from "react";

class Counter extends React.Component {
    state = {
        count: 0
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    // componentDidMount() {
    //     document.title = `Clicked ${this.state.count} times`
    // }

    // componentDidUpdate() {
    //     document.title = `Clicked ${this.state.count} times`
    // }

    render() {
        return (
            <div>
                <button onClick={this.increment}>Click</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default Counter;
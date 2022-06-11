import React from "react"
import axios from "axios";
import { Loader } from "./Loader";

class Axios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            loading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    getUser() {
        this.setState({
            loading: true
        })
        axios("https://randomuser.me/api/")
            .then(response => this.setState({
                users: response.data.results,
                loading: false
            }))
    };

    handleSubmit(e) {
        e.preventDefault();
        this.getUser();
    }

    componentDidMount() {
        this.getUser();
    };

    render() {
        const { loading, users } = this.state;
        return (
            // <div>
            //     {this.state.users.map(user =>
            //         <div key={user.name}>
            //             <p>{user.name.first} {user.name.last}</p>
            //             <p>{user.email}</p>
            //         </div>
            //     )}
            // </div>
            <div>
                {!loading ? users.map(user =>
                    <div key={user.id.value}>
                        <p>{user.name.first} {user.name.last}</p>
                        <p>{user.email}</p>
                        <form onSubmit={this.handleSubmit}>
                            <input type="submit" value="load user"></input>
                        </form>
                    </div>
                ) : <Loader />}
            </div>
        )
    }
}

export { Axios };
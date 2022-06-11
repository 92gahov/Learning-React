import React from "react";
// import axios from "axios";
import Loader from "./Loader";
import { useAxiosGet } from "../Hook/HttpRequest";

function Users() {

    // const [users, setUsers] = useState({
    //     loading: false,
    //     data: null,
    //     error: false
    // });

    let content = null;

    let url = "https://jsonplaceholder.typicode.com/users";

    let users = useAxiosGet(url);

    // useEffect(() => {
    //     setUsers({
    //         loading: true,
    //         data: null,
    //         error: false
    //     })
    //     axios.get(url)
    //         .then(response => {
    //             setUsers({
    //                 loading: false,
    //                 data: response.data,
    //                 error: false
    //             })
    //         })
    //         .catch(() => {
    //             setUsers({
    //                 loading: false,
    //                 data: null,
    //                 error: true
    //             })
    //         })
    // }, []);

    if (users.error) {
        content = <p>There was an error, please try again later!</p>
    }

    if (users.loading) {
        content = <Loader />
    }

    if (users.data) {
        content =
            <div>
                <img alt="" src="https://picsum.photos/200/300?random=1"></img>
                {
                    users.data.map(user => <div key={user.id}>{user.name}</div>)
                }
            </div>
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default Users;
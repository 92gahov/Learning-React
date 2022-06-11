import React, { useEffect, useState } from "react";
import axios from "axios";

export function useAxiosGet(url) {
    const [users, setUsers] = useState({
        loading: false,
        data: null,
        error: false
    });

    useEffect(() => {
        setUsers({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setUsers({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setUsers({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url]);

    return users;
}
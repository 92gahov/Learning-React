import React, { useEffect, useState } from "react";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [search, setSearch] = useState("1");
    const [url, setUrl] = useState("https://api.tvmaze.com/shows?page=1")

    const [loading, setLoading] = useState(false)

    const fetchNews = () => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => (setEpisodes(data)), setLoading(false))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchNews()
    }, [url])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setUrl(`https://api.tvmaze.com/shows?page=${search}`)
    }

    const showLoading = () => (loading ? <h2>Loading...</h2> : "")

    const searchForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={handleChange}></input>
            <button>Search</button>
        </form>
    )

    const showEpisodes = () => episodes.map(name => <p key={name.id}>{name.name}</p>)

    return (
        <div>
            <h2>Episodes</h2>
            {showLoading()}
            {searchForm()}
            {showEpisodes()}
        </div>
    )
}

export default Episodes;
import { useEffect, useState } from "react"
import BlogList from "./BlogList";
import useFetch from "./UseFetch";


const Home = () => {

    const { data: blogs, isLoading, error } = useFetch("http://localhost:3001/blogs");

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'john', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'mario', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

    // const [blogs, setBlogs] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    const [name, setName] = useState("mario");


    // let name = "john";

    // const [name, setName] = useState("john")
    // const [age, setAge] = useState(25)



    // const handleClick = (e) => {
    //     console.log("Hello", e);
    // }

    // const handleClick = () => {
    //     setName("luigi")
    //     setAge(30)
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log("Hello " + name, e.target)
    // }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // };

    // useEffect(() => {
    //     console.log("use efect ran")
    //     console.log(name)
    // }, [name]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/blogs")
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw Error("Could not fetch the data for that resource!")
    //             }
    //             return response.json()
    //         })
    //         .then((data) => {
    //             console.log(data)
    //             setBlogs(data)
    //             setIsLoading(false);
    //             setError(null);
    //         })
    //         .catch((err) => {
    //             setError(err.message);
    //             setIsLoading(false);
    //         })
    // }, [])

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {/* {blogs && <BlogList blogs={blogs} title="Al Blogs!" handleDelete={handleDelete} />} */}
            {blogs && <BlogList blogs={blogs} title="Al Blogs!" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's blogs." /> */}
            {/* <button onClick={() => setName("john")}>Change name</button> */}
            {/* <p>{name}</p> */}
            {/* {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} */}
            {/* <h2>Homepage</h2> */}
            {/* <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e) => {
                handleClickAgain("john", e)
            }}>Click me again</button> */}
            {/* <p>{name} is {age} years old</p> */}
        </div>
    )
};

export default Home;
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NewPost from "./Components/NewPost";
import PostPage from "./Components/PostPage";
import About from "./Components/About";
import Missing from "./Components/Missing";
import EditPost from "./Components/EditPost";
// import { Route, Switch, useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { format } from "date-fns";
// import api from "./api/posts";
// import useWindowSize from "./hooks/useWindowSize";
// import useAxiosFetch from "./hooks/useAxiosFetch";
import { DataProvider } from "./context/DataContext";

function App() {

  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     title: "My First Post",
  //     datetime: "July 01, 2021 11:17:36 AM",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  //   },
  //   {
  //     id: 2,
  //     title: "My 2nd Post",
  //     datetime: "July 01, 2021 11:17:36 AM",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  //   },
  //   {
  //     id: 3,
  //     title: "My 3rd Post",
  //     datetime: "July 01, 2021 11:17:36 AM",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  //   },
  //   {
  //     id: 4,
  //     title: "My Fourth Post",
  //     datetime: "July 01, 2021 11:17:36 AM",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  //   }
  // ]);
  // const [posts, setPosts] = useState([]);
  // const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const [postTitle, setPostTitle] = useState("");
  // const [postBody, setPostBody] = useState("");
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");
  // const history = useHistory();
  // const { width } = useWindowSize();
  // const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts/');

  // useEffect(() => {
  //   setPosts(data);
  // }, [data])

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get('/posts');
  //       setPosts(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.Header);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   }
  //   fetchPosts();
  // }, [])

  // useEffect(() => {
  //   const filteredResults = posts.filter(post =>
  //     ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()));
  //   setSearchResults(filteredResults.reverse());
  // }, [posts, search])

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  //   const datetime = format(new Date(), 'MMM dd, yyyy pp');
  //   const newPost = { id, title: postTitle, datetime, body: postBody };
  //   try {
  //     const response = await api.post("/posts", newPost);
  //     const allPosts = [...posts, response.data];
  //     setPosts(allPosts);
  //     setPostTitle("");
  //     setPostBody("");
  //     history.push("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // }

  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(), 'MMM dd, yyyy pp');
  //   const updatedPost = { id, title: editTitle, datetime, body: editBody };
  //   try {
  //     const response = await api.put(`/posts/${id}`, updatedPost);
  //     setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
  //     setEditTitle("");
  //     setEditBody("");
  //     history.push("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // }

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/posts/${id}`)
  //     const postList = posts.filter(post => post.id !== id);
  //     setPosts(postList);
  //     history.push("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // }

  // let headerTitle = "React Blog";

  return (
    <div className="App">
      {/* <Header title="React Blog" width={width}/>
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home posts={searchResults} fetchError={fetchError} isLoading={isLoading}/>
        </Route>
        <Route exact path="/post">
          <NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} />
        </Route>
        <Route path="/edit/:id">
          <EditPost posts={posts} handleEdit={handleEdit} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody} />
        </Route>
        <Route path="/post/:id">
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>
        <Route path="/about" component={About}></Route>
        <Route path="*" component={Missing}></Route>
      </Switch>
      <Footer /> */}



      <Header title="React Blog" />
      <DataProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/post" component={NewPost}></Route>
          <Route path="/edit/:id" component={EditPost}></Route>
          <Route path="/post/:id" component={PostPage}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="*" component={Missing}></Route>
        </Switch>
      </DataProvider>
      <Footer />

    </div>
  );
};

export default App;

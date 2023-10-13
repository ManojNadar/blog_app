import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { useContext } from "react";
import { MyContext } from "./Components/Context/BlogContext";
import Home from "./Components/Home";
import AddBlog from "./Components/Blogs/AddBlog";
import AllBlogs from "./Components/Blogs/AllBlogs";
import SingleBlog from "./Components/Blogs/SingleBlog";
import Error from "./Components/Error";

function App() {
  const { state } = useContext(MyContext);
  console.log(state);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addblog" element={<AddBlog />} />
        <Route exact path="/allblogs" element={<AllBlogs />} />
        <Route exact path="/singleblog/:id" element={<SingleBlog />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

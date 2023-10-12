import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Blogs from "./Components/Blogs";
import { useContext } from "react";
import { MyContext } from "./Components/Context/BlogContext";

function App() {
  const { state } = useContext(MyContext);
  console.log(state);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

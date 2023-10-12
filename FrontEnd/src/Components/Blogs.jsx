import React, { useContext, useEffect } from "react";
import { MyContext } from "./Context/BlogContext";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const { state } = useContext(MyContext);
  const route = useNavigate();

  useEffect(() => {
    if (state?.currentuser) {
      route("/login");
    }
  }, []);
  return <div>Blogs</div>;
};

export default Blogs;

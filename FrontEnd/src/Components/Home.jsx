// import React, { useContext, useEffect } from "react";
import "../Styles/Home.css";
// import { useNavigate } from "react-router-dom";
// import { MyContext } from "./Context/BlogContext";
import Navbar from "./Navbar";

export const Home = () => {
  // const route = useNavigate();
  // const { state } = useContext(MyContext);

  // console.log(state);

  // useEffect(() => {
  //   if (!state?.currentuser) {
  //     route("/login");
  //   }
  // }, [state?.currentuser, route]);

  return (
    <>
      <div className="homeContainer">
        <Navbar />
        <div className="mainHomeBody">
          <h1>WELCOME TO WORLD TOURISM</h1>
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useContext, useEffect, useState } from "react";
import "../Styles/Home.css";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context/BlogContext";
import { toast } from "react-hot-toast";

const Home = () => {
  const [dropDown, setDropDown] = useState(false);
  const route = useNavigate();
  const { state, logout } = useContext(MyContext);

  console.log(state);

  useEffect(() => {
    if (!state?.currentuser) {
      toast.error("please login");
      route("/login");
    }
  }, []);

  const extractDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <>
      <div className="homeContainer">
        {dropDown ? (
          <div className="dropSideNav">
            {/* dropdown starts */}

            <div className="innerDropDownContainer">
              <h2>MANOJ NADAR</h2>
              <h2>ALL TRAVEL BLOGS</h2>

              {state?.currentuser?.role == "Admin" ? (
                <div className="innerDropDownContainer">
                  <h2>CREATE BLOG</h2>
                </div>
              ) : null}
              {state?.currentuser?.role == "User" ? (
                <div className="innerDropDownContainer">
                  <h2>SAVED BLOGS</h2>
                  <h2>LIKED BLOGS</h2>
                  <h2>ABOUT US</h2>
                  <h2>CONTACT US</h2>
                  <h2>FEEDBACK</h2>
                </div>
              ) : null}
            </div>

            <div className="logout" onClick={logout}>
              <h1>LOGOUT</h1>
            </div>

            {/* dropDown end */}
          </div>
        ) : null}
        <div className="leftNav">
          {dropDown ? (
            <h1 onClick={extractDropDown}>X</h1>
          ) : (
            <h1 onClick={extractDropDown}>=</h1>
          )}
        </div>
        <div className="mainHomeBody">
          <h1>WELCOME TO WORLD TOURISM</h1>
        </div>
      </div>
    </>
  );
};

export default Home;

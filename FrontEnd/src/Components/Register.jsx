import React, { useState } from "react";
import "../Styles/Register.css";
import { NavLink } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [visible, setVisible] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggelEye = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className="registerBackground">
        <div className="regContainer">
          <div className="loginRegNavLink">
            <NavLink to="/login">Sign In</NavLink>
            <NavLink to="/register">Sign Up</NavLink>
          </div>

          <div className="mainOutletContainer">
            <form className="regForm" onSubmit={handleSubmit}>
              <div className="allInputs">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={handleChange}
                  value={user.name}
                  name="name"
                />
              </div>
              <div className="allInputs">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                  value={user.email}
                  name="email"
                />
              </div>
              <div className="allInputs" id="allInputspassword">
                {user?.password && (
                  <div onClick={toggelEye}>
                    {visible ? (
                      <div className="eye">
                        <AiOutlineEyeInvisible />
                      </div>
                    ) : (
                      <div className="eye">
                        <AiOutlineEye />
                      </div>
                    )}
                  </div>
                )}

                <input
                  onChange={handleChange}
                  value={user.password}
                  type={visible ? "text" : "password"}
                  placeholder="Enter Your password"
                  name="password"
                />
              </div>
              <div className="selectOptions">
                <select onChange={handleChange} name="role" value={user.role}>
                  <option>Select Role</option>
                </select>
              </div>
              <button className="btnSignUp" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

import React from "react";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Register = () => {
  const { clickToGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const googleLogin = () => {
    clickToGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login-input">
    <div className="login">
      <h2>Create Account</h2>
      <from onSubmit="">
        <input type="email" name="" id="" placeholder="Enter Your Email" />{" "}
        <br />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
        />
        <br />
        <input
          type="password"
          name=""
          id=""
          placeholder="Re-enter your password"
        />
        <br />
        <input className="btn" type="submit" value="submit" />
      </from>
      <p>
        Already have an account? <NavLink to="/login">Login</NavLink>
      </p>
      <div>---------or--------</div>
      <button onClick={googleLogin} className="btn">
        Google Sing In
      </button>
    </div>
  </div>
  );
};

export default Register;

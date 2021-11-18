import { useState } from "react";
import { NavLink, useHistory} from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import {Button} from "react-bootstrap";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  
  const { user, registerUser, authError} = useAuth();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    };

    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div className="login">
      <h1 className=" text-primary mt-5 pb-3 gum">Please Register</h1>
      <form onSubmit={handleLoginSubmit}>
          <input type="text" name="name" id=""  onBlur={handleOnBlur} placeholder="Enter Your Name" /> 
        
        <input type="email" name="email" id=""  onBlur={handleOnBlur} placeholder="Enter Your Email" /><br />
         
        <input type="password" name="password"  onBlur={handleOnBlur} id="" placeholder="Enter Your Password" /><br />
     
      <input type="password" name="password2" id=""  onBlur={handleOnBlur} placeholder="Confirm Your Password" /><br />

         <input type="submit" value="Register" /> <br /> <br />
          <NavLink to="/login">
            <Button className=" mt-5">Already Registered? Please Login</Button>
          </NavLink>
        </form>
      {user?.email && 
        <alert severity="success">User Created Successfully !!!</alert>
      }
      {authError && <alert severity="error">{authError}</alert>}
    </div>
  );
};

export default Register;

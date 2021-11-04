import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-input">
      <div className="login">
        <h2>Login</h2>
        <form>
          <input type="Email" placeholder="Enter Your Email" /> <br />
          <input type="password" placeholder="Enter Your Password" /> <br />
          <input className="btn" type="Submit" value="submit" />
        </form>
        <p>New to ema-john ? <Link to="/register">Creat Account</Link></p> <br />
        <div>---------or--------</div>
        <button onClick={handleGoogleLogin} className="btn">Google Sing In</button>
      </div>
    </div>
    );
};

export default Login;
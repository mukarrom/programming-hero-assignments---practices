import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // handle the Email
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  // handle the password
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  // handle if user exist before
  if (user) {
    navigate(from, { replace: true });
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div className="form-area">
        <h2 className="form-title">Login</h2>
        {/* form */}
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            {/* input email */}
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            {/* input password */}
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              required
            />
          </div>
          {/* Show error */}
          <p style={{ color: "red" }}>{error?.message} </p>
          {/* Show loading */}
          {loading && <p>Loading...</p>}
          <input type="submit" name="submit" value={"Login"} />
        </form>
        <div className="new">
          <p>
            New to Ema-john? <Link to={"/signup"}>Create New Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

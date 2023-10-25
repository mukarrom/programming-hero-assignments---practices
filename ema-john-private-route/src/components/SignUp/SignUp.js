import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
// if user exist navigate to home page;
  if (user) {
    navigate("/shop");
  }

  const handleEmailOnBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordOnBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordOnBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your tow password did not match");
      return;
    }
    if (password.length < 6) {
      setError("you must have to at least 6 characters in the password");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
// *****************  return  *********************
  return (
    <div className="form-container">
      <div className="form-area">
        <h2 className="form-title">Sign Up</h2>
        <form action="" onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            {/* input email */}
            <input
              onBlur={handleEmailOnBlur}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            {/* input password */}
            <input
              onBlur={handlePasswordOnBlur}
              type="password"
              name="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            {/* input confirm password */}
            <input
              onBlur={handleConfirmPasswordOnBlur}
              type="password"
              name="password"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input type="submit" name="submit" value={"Sign Up"} />
        </form>
        <div className="new">
          <p>
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

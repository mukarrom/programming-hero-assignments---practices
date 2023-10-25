import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = (event) => {
    event.preventDefault();
    // console.log(e.target.email.value);
    const email = event.target.email.value;
    const password = event.target.password.value;
    // createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input
          className="w-100 my-2"
          type="name"
          name="fullName"
          id=""
          placeholder="Your Name"
        />
        <br />
        <input
          className="w-100 my-2 "
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <br />
        <input
          className="w-100 my-2"
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <br />
        {/* <input
          className="w-100 my-2"
          type="password"
          name=""
          id=""
          placeholder="Confirm Password"
        /> */}
        <br />
        <input className="w-100 my-2" type="submit" value="Register" />
      </form>
      <p>
        Already have an account? <a href="/login">Please Login</a>
      </p>
    </div>
  );
};

export default Register;

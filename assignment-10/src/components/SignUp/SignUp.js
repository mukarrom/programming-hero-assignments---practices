import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let errorElement;

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (user) {
    console.log("user", user);
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    createUserWithEmailAndPassword(email, password);
    console.log("Updated profile");
    navigate("/home");
  };

  return (
    <div className="col-md-6 col-lg-4 mx-auto mt-4 shadow p-4 rounded">
      <h1 className="text-center text-primary fw-bold mb-5">Pleas Sign Up</h1>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            id=""
            name="name"
            placeholder="Enter Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" id="" controlId="formGroupEmail">
          <Form.Label>Email address*</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password*</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {/* <Button variant="primary" type="submit" className="w-100">
          Sign up
        </Button> */}
        {/* Check */}
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />

        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Accept Genius Car Terms and Conditions
        </label>
        <input
          disabled={!agree}
          className="w-100 mx-auto btn btn-primary mt-2"
          type="submit"
          value="Register"
        />
      </Form>
      {errorElement}
      <p className="mt-4">
        Already have an account?{" "}
        <Link
          to={"/login"}
          onClick={navigateLogin}
          className="text-decoration-none text-danger"
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;

import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(() => {
      navigate(from, {replace: true})
    });
  };
  return (
    <div>
      <h3 className="text-2xl font-bold my-4">Pleas Login now</h3>
      <div className="">
        {/* Button Signin With Google */}
        <button
          onClick={handleGoogleSignIn}
          className="border rounded-lg border-emerald-500 p-2 my-3 font-semibold"
        >
          Google Sign In
        </button>
      </div>
      {/* Form */}
      <form action="">
        {/* input email */}
        <input
          className="border rounded-lg border-emerald-500 p-2 font-semibold m-2"
          type="email"
          name=""
          placeholder="Your Email"
        />
        <br />
        {/* input password */}
        <input
          className="border rounded-lg border-emerald-500 p-2 font-semibold m-2"
          type="password"
          name=""
          placeholder="Your Password"
        />
        <br />
        {/* submit button */}
        <input
          className="border border-emerald-500 rounded-lg font-bold px-4 py-2 my-2 hover:bg-green-500 hover:text-white"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;

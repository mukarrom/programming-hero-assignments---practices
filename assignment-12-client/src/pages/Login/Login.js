import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let loginError;

  if (error || gError) {
    loginError = (
      <div className="bg-red-100 mb-3 rounded-lg">
        <p className="text-red-500 py-4 pl-2">
          Error: {error?.message || gError?.message}
        </p>
      </div>
    );
  }
  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (user || gUser) {
    navigate(from, { replace: true });
  }

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    navigate(from, { replace: true });
    console.log(user?.email);
  };

  // console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="flex justify-center items-center max-h-screen z-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold mb-5">Login</h2>
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* ------------ password ------------------ */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {loginError}
            <input
              type="submit"
              value={"Login"}
              className="btn w-full max-w-xs"
            />
          </form>
          {/* ---------------------- Form end  ------------------------------ */}
          <p>
            <small>
              New to Doctors Portal?{" "}
              <Link to="/register" className="text-secondary">
                Create New Account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className=" group h-12 px-6 border-2 border-gray-300 rounded-md transition duration-300 
 hover:bg-accent hover:text-white focus:bg-blue-50 active:bg-blue-100"
          >
            <div className="relative flex items-center space-x-4 justify-center">
              <img
                src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                className="absolute left-0 w-5"
                alt="google logo"
              />
              <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-white sm:text-base">
                Continue with Google
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

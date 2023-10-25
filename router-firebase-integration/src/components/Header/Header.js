import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app)
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className="m-6">
      <Link className="mr-3 font-bold hover:text-orange-400" to={"/"}>
        Home
      </Link>
      <Link className="mr-3 font-bold hover:text-orange-400" to={"/products"}>
        Products
      </Link>
      <Link className="mr-3 font-bold hover:text-orange-400" to={"/orders"}>
        Orders
      </Link>
      <Link className="mr-3 font-bold hover:text-orange-400" to={"/register"}>
        Register
      </Link>
      <span>{user?.displayName && <span><img className="w-7 h-7 inline rounded-xl" src={user.photoURL} alt="" /> {user.displayName} </span>} </span>
      
      {user?.uid ? (
        <button onClick={()=>signOut(auth)} className="font-bold border border-emerald-500 rounded-lg font-bold px-3 py-1 hover:bg-green-500 hover:text-white">
          Log Out
        </button>
      ) : (
        <Link className="mr-3 font-bold hover:text-orange-400" to={"/login"}>
          Log in
        </Link>
      )}
    </nav>
  );
};

export default Header;

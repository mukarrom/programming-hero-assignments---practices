import "./App.css";
import app from "./firebase.init";
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handlFacebookSignIn =()=>{
    signInWithPopup(auth, facebookProvider)
    .then(result=>{
      const user = result.user;
      setUser(user);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  const handleGithubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
      const user = result.user;
      setUser(user)
    })
    .catch(error=>{
      console.error(error);
    })
  }
// Sign Out
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };
  return (
    <div className="App">
      <h1>Welcome to app js wesite</h1>
      {user.displayName ? (
          <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
                <button onClick={handleGoogleSignIn}>Google Sign in</button>
                <button onClick={handlFacebookSignIn}>Facebook Sign in</button>
                <button onClick={handleGithubSignIn}>Github Sign in</button>
        </>
      )}

      <h2>{user.displayName}</h2>
      <h4>email: {user.email}</h4>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;

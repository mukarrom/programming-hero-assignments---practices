import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import app from "./firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [registered, setRegistered] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = (e) => {
    setRegistered(e.target.checked);
  };

  const emailVarify = () =>{
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      console.log("Email verification sent");
    })
    .catch(error=>{
      console.log(error);
    })
  }

  //Submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setError("Please, enter correct email");
      return;
    }
    //Regular Expression
    if (!/(?=^.{6,}$)/.test(password)) {
      setError("please! enter valid email and password!");
      return;
    }
    setValidated(true);

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError("");
        })
        .catch((error) => {
          setError("Sorry! you don't have registered before!");
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          emailVarify();
          console.log(user);
        })
        .catch((error) => {
          setError("You already used this email");
          console.error(error);
        });
    }

    event.preventDefault();
  };
  return (
    <div className="">
      <div className="registration w-50 mx-auto">
        <h2 className="text-primary">
          Please {registered ? "Login" : "Register"}!!
        </h2>
        {/* form */}
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please choose an email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
            <p className="text-danger">{error}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={handleCheckboxChange}
              type="checkbox"
              label="Already Registered"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {registered ? "Login" : "Register"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;

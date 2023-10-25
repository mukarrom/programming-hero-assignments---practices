import logo from "./logo.svg";
import "./App.css";
import CardGroup from "./components/CardGroup/CardGroup";
import { Button, Spinner } from "react-bootstrap";
import CardGroup2 from "./components/CardGroup2/CardGroup2";

function App() {
  return (
    <div className="App">
      <h1>Using React Bootstrap</h1>
      <Button variant="success">My Button</Button>
      <br />

      <>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </>
      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;

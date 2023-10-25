import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user=> <Users name={user.name} email={user.email}></Users>)
      }
    </div>
  );
}

function Users(props){
  return(
    <div style={{border:'2px solid tomato', margin:'10px 100px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;

{
  /* 
const [count, setCount] = useState(10);
  // console.log(count);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>  
*/
  /* 
const products = [
  { name: "laptop", price: 45000 },
  { name: "mobile", price: 22000 },
  { name: "tablet", price: 15000 },
  { name: "watch", price: 1200 },
  { name: "camera", price: 35000 },
];
*/
  /* {products.map((product) => (
  <Product name={product.name} price={product.price}></Product>
))} */
  /* <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div> */
}

import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./pages/Shared/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer";
import Purchase from "./pages/Products/Purchase ";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import RequireAuth from "./pages/Login/RequireAuth";
import Blog from "./pages/Blog/Blog";
import NotFound from "./pages/Shared/NotFound";
import Portfolio from "./pages/Portfolio/Portfolio";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddProduct from "./pages/Dashboard/AddProduct";
import MyOrders from "./pages/Dashboard/MyOrders";
import AddReview from "./pages/Dashboard/AddReview";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        {/* Dashboard */}
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="add_review" element={<AddReview />}></Route>
          <Route path="add_product" element={<AddProduct />}></Route>
        </Route>
        {/* --------- daahboard ------------- */}
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;

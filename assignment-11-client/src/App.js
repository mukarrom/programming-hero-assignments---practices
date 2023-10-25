import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home/Home";
import Signin from "./Pages/Login/Signin/Signin";
import Signup from "./Pages/Login/Signup/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import ResetPassword from "./Pages/Login/ResetPassword/ResetPassword";
import Blog from "./Pages/Home/Blog/Blog";
import ProductDetail from "./Pages/Items/ProductDetail";
import ManageInventories from "./Pages/Items/ManageInventories";
import AddItem from "./Pages/Items/AddItem";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      {/* routes */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/resetpass"
          element={<ResetPassword></ResetPassword>}
        ></Route>
        <Route
          path="product/:productId"
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinv"
          element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      {/* Footer section */}
      <Footer></Footer>
    </div>
  );
}

export default App;

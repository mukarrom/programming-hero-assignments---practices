import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetail from "../../../hooks/useServiceDetail";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const locatin = useLocation();


  //   const [user, setUser] = useState({
  //     name: "Akbar The Great",
  //     email: "akbar@momo.taj",
  //     address: "Tajmohol Road Md.pur",
  //     phone: "01711111111",
  //   });

  //   //Change controlled field
  //   const handleOnChange = (e) => {
  //     const { address, ...rest } = user;
  //     const newAddress = e.target.value;
  //     const newUser = { address: newAddress, ...rest };
  //     setUser(newUser);
  //   };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("http://localhost:5000/order", order).then((response) => {
      if (response.data.insertedId) {
        toast("Your order is booked!!!");
        event.target.reset();
      }
    });
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please Order: {service.name}</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          className="w-100 mb-2"
          type="text"
          value={user.displayName}
          name="name"
          id=""
          placeholder="Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          value={user.email}
          name="email"
          id=""
          placeholder="Email"
          required
          disabled
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          value={service.name}
          name="name"
          id=""
          placeholder="Name"
          required
          disabled
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          name="address"
          id=""
          placeholder="Address"
          required
          autoComplete="off"
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          id=""
          placeholder="Phone"
          required
        />
        <br />
        <input type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;

import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const [user] = useAuthState(auth);

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };
  const handleOrder = (event) => {
    event.preventDefault();
    alert(`Hi ${name}, Your Order has been confirmed successfully`);
  };
  // *****************  return  *********************
  return (
    <div>
      <div className="form-container">
        <div className="form-area">
          <h2 className="form-title">Shipping Information</h2>
          <form action="" onSubmit={handleOrder}>
            {/* name input group */}
            <div className="input-group">
              <label htmlFor="email">Name</label>
              <input onBlur={handleNameBlur} type="name" name="name" required />
            </div>
            {/* email input  group*/}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              {/* input email */}
              <input
                onBlur={handleNameBlur}
                type="email"
                name="email"
                value={user.email}
              />
            </div>
            {/* Address input group */}
            <div className="input-group">
              <label htmlFor="password">Address</label>
              {/* input password */}
              <input
                onBlur={handleAddressBlur}
                type="text"
                name="text"
                required
              />
            </div>
            {/* Phone input group */}
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              {/* input confirm password */}
              <input
                onBlur={handlePhoneBlur}
                type="number"
                name="number"
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input type="submit" name="submit" value={"Order Confirm"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;

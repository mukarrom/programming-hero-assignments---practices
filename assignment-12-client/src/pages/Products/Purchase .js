import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import auth from "../../firebase.init";
import useProductDetail from "../../hooks/useProductDetail";

const Purchase = () => {
  const [user] = useAuthState(auth);
  // const navigate = useNavigate();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [min, setMin] = useState(true);
  const [product] = useProductDetail(productId);
  const { _id, productName, info, imgURL, minOrder, available, price } =
    product;

  useEffect(() => {
    setQuantity(minOrder);
  }, [minOrder]);

  useEffect(() => {
    if (quantity < minOrder) {
      setMin(false);
    } else if (quantity > available) {
      setMin(false);
    } else {
      setMin(true);
    }
  }, [minOrder, quantity, available]);
  let error;
  if (quantity < minOrder) {
    error = (
      <p className="text-red-700 text-center">
        Sorry! you cannot order less than {minOrder}
      </p>
    );
  } else if (parseFloat(quantity) > parseFloat(available)) {
    error = (
      <p className="text-red-700 text-center">
        Sorry! you cannot order greater than {available}
      </p>
    );
  }

  // Handle onsubmit
  const handleOnsubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      name: user.displayName,
      address: event.target.address.value,
      email: user.email,
      phone: event.target.phone.value,
      orderQuantity: quantity,
      product,
    };
    
    fetch("https://mmh12.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        // toast("product added success");
        event.target.reset();
      });
  };

  return (
    <div>
      {/* ------------------- */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="flex justify-center items-center lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
              <img alt="ecommerce" className="" src={imgURL} />
            </div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {productName}
              </h1>
              <div className="flex mb-4">
                <h2 className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </h2>
              </div>
              <p className="leading-relaxed mb-4">{info}</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Product Id</span>
                <span className="ml-auto text-gray-900">{_id}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">available</span>
                <span className="ml-auto text-gray-900">{available}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Minimum Order</span>
                <span className="ml-auto text-gray-900">{minOrder}</span>
              </div>
              {/* Price */}
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Price</span>
                <span className="ml-auto text-gray-900">${price}</span>
              </div>
              {/* quantity */}
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">quantity</span>
                <button
                  onClick={() => setQuantity(parseInt(quantity) - 10)}
                  className="btn btn-xs ml-auto font-extrabold w-11"
                >
                  <FaMinus />
                </button>
                <input
                  className="ml-auto rounded-full border border-gray-200 text-center"
                  type="number"
                  name="quantity"
                  value={quantity}
                  readOnly
                />
                {/* <span className="ml-auto text-gray-900">{quantity}</span> */}
                <button
                  onClick={() => setQuantity(parseInt(quantity) + 10)}
                  className="btn btn-xs ml-auto text-white w-11"
                >
                  <FaPlus />
                </button>
              </div>
              <p className="font-bold">{error}</p>
              {/* --------------- Form --------------- */}
              <form
                className="space-y-6 my-10"
                data-bitwarden-watching="1"
                onSubmit={handleOnsubmit}
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      name="name"
                      type="text"
                      // autocomplete=""
                      // required=""
                      value={user?.displayName}
                      disabled
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    Your Email
                  </label>
                  <div className="mt-1">
                    <input
                      name="email"
                      type="text"
                      value={user?.email}
                      disabled
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                {/* Your Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    Your Address
                  </label>
                  <div className="mt-1">
                    <input
                      name="address"
                      type="text"
                      autocomplete="true"
                      // required=""
                      placeholder="You Address"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                {/* Your Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="01x-xx-xxx-xxx"
                      required
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                {/* Submit */}
                <div>
                  <button disabled={!min} type="submit" className="btn w-full">
                    Buy Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------- */}
    </div>
  );
};

export default Purchase;

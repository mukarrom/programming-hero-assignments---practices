import React from "react";
import PrimaryBtn from "../Share/PrimaryBtn";
import bg from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section className="py-8 mt-16" style={{ background: `url(${bg})` }}>
      <div className="flex flex-col w-10/12 md:w-6/12 lg:w-1/3 mx-auto">
        <div className="">
          <h5 className="text-primary text-center">Contact Us</h5>
          <h2 className="text-white text-2xl text-center mb-6">
            Stay Connected with us
          </h2>
        </div>
        {/* <div className=" w-full"> */}
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered input-sm w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-sm w-full rounded-md my-3"
          />
          <textarea
            className="textarea textarea-secondary h-24"
            placeholder="Your message"
          ></textarea>
          <br />
          <div className="text-center">
          <PrimaryBtn>Submit</PrimaryBtn>
        </div>
        </div>

      {/* </div> */}
    </section>
  );
};

export default Contact;

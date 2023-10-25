import React from "react";
import Products from "../Products/Products";
import Contact from "./Contact";
import Review from "./Review";
import Slider from "./Slider";
import Speciality from "./Speciality";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Slider></Slider>

      <Products></Products>
      <div className="">
        <Speciality></Speciality>
      </div>
      <div className="flex flex-col items-center my-10 bg-light-1">
        <Summary></Summary>
      </div>
      <div className="">
        <Review></Review>
      </div>
      <div className="">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;

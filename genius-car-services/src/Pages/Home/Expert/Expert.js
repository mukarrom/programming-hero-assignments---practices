import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col col-md-6 col-lg-4">
      <img src={img} alt="" />
      <h4>{name}</h4>
    </div>
  );
};

export default Expert;

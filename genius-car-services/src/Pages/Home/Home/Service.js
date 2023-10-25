import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, description, price, id } = service;

  const navigate = useNavigate();

  const handleBookOnclick = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="card-deck col-12 col-md-6 col-lg-4 gy-4">
      <div className="card">
        <img className="card-img-top" src={img} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>Price: {price}</p>
        </div>
        <Button
          onClick={() => handleBookOnclick(id)}
          variant="outline-primary"
          className=""
        >
          BOOK {name}
        </Button>
      </div>
    </div>
  );
};

export default Service;

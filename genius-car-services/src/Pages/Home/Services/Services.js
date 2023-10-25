import React, { useEffect, useState } from "react";
import Service from "../Home/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="container">
      <h1 className="text-primary my-5">Our Services</h1>
      <div className="card-deck row">
      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
      </div>
    </div>
  );
};

export default Services;

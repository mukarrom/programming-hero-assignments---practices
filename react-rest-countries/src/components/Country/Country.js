import React from "react";
import "./Country.css";
//component
const Country = (props) => {
  const { area, region, population, name, flags } = props.country;
  return (
    <div className="country">
      <h2>Country Name: {name.common}</h2>
      <img src={flags.png} alt={name.common} />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Region: {region}</small>
      </p>
    </div>
  );
};

export default Country;

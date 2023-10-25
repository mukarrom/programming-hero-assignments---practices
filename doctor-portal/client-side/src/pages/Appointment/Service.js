import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="text-black card-title">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span className="text-black ">{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another date</span>
          )}
        </p>
        <p>
          {slots.length}
          {slots.length > 0 ? " spaces" : " space"} available.
        </p>
        <label htmlFor="booking-modal" className="modal-button btn btn-primary w-full" disabled={slots.length === 0}
        onClick={()=>setTreatment(service)}>book Appointment</label>
      </div>
    </div>
  );
};

export default Service;

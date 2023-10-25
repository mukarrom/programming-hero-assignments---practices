import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../Share/Loading";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, 'PP')
  const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then((res) => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h4 className="text-secondary text-center font-bold">
        Available Appointment on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal refetch={refetch} date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;

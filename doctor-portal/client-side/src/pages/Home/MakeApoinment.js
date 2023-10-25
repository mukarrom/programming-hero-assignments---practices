import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

import PrimaryBtn from "../Share/PrimaryBtn";

const MakeApoinment = () => {
  return (
    <section className="flex items-center mb-5" style={{background:`url(${appointment})`}}>
      <div className="flex-1 mt-[-100px] hidden lg:block">
        <img src={doctor} alt="" className=""/>
      </div>
      <div className="flex-1">
        <h3 className="text-primary">Appointment</h3>
        <h2 className="text-white">Make an appointment Today</h2>
        <p className="text-white mb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryBtn>Get Started</PrimaryBtn>
      </div>
    </section>
  );
};

export default MakeApoinment;

import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';



const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);

  const formattedDate = format(date, "PP");

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.time.value;
    const date = event.target.date.value;
    console.log(name, date, slot);
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    }).then(res => res.json()).then(data => {
      if (data.success) {
        toast(`Appointment is set, ${formattedDate} at ${slot}`)
      }
      else {
        toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
      }
      refetch()
      setTreatment(null);
    })
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-center text-secondary mb-4 font-bold">
            Booking for : {name}
          </h3>
          <div className="min-w-full mx-auto">
            <form
              onSubmit={handleModalSubmit}
              className="grid grid-cols-1 gap-3"
            >
              <input
                type="text"
                name="date"
                value={format(date, "PP")}
                readOnly
                className="input input-bordered input-sm w-full"
              />
              <select
                name="time"
                className="select select-bordered select-sm w-full"
              >
                {slots.map((slot, index) => (
                  <option key={index}>{slot}</option>
                ))}
              </select>
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName}
                className="input input-bordered input-sm w-full"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered input-sm w-full"
              />
              <input
                type="email"
                name="email"
                disabled
                value={user?.email}
                className="input input-bordered input-sm w-full"
              />
              <input
                type="submit"
                value="submit"
                className="btn btn-primary input-bordered input-sm w-full"
              />
            </form>
          </div>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

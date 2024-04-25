import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment; //treatment is appointment options
  const date = format(selectedDate, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const patientName = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patientName,
      slot,
      email,
      phone,
    };
    //todo:send data to the server and
    //once data is saved and
    //close the modal and display toast
    console.log(booking);
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-center text-primary my-4 text-lg">
            {name}
          </h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="grid grid-cols-1 gap-3"
          >
            <input
              type="text"
              value={date}
              disabled
              className="my-2 input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option selected key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="my-2 input input-bordered w-full "
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="my-2 input input-bordered w-full "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="my-2 input input-bordered w-full "
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full"
            />
          </form>

          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn ">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

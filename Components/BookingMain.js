import React, { useState } from "react";
import style from "../styles/bookingMain.module.css";
import { useRouter } from "next/router";
const BookingMain = () => {
  const [destination, setDestination] = useState("Agriculture University");
  const [arrival, setArrival] = useState("");
  const [departureTDate, setDepartureDate] = useState("");
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];
  const formSubmit = (e) => {
    e.preventDefault();
    router.push(
      `/buses?destination=${destination}&arrival=${arrival}&departureDate=${departureTDate}`
    );
  };
  return (
    <section id="booking" className={style.booking_section}>
      <div className={style.container}>
        <h1>Book a bus ticket</h1>
        <div>
          <form onSubmit={formSubmit}>
            <select
              name="departure"
              id="departure"
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="Agriculture University">
                Agriculture University
              </option>
            </select>
            <select
              required="required"
              name="arrival"
              onChange={(e) => setArrival(e.target.value)}
            >
              <option value="">Select Arrival</option>
              <option value="Sadar Bazar">Sadar Bazar</option>
              <option value="Hayatabad">Hayatabad</option>
              <option value="Haji Camp">Haji Camp</option>
              <option value="Arbab road">Arbab road</option>
              <option value="Karhano Market">Karhano Market</option>
            </select>
            <input
              required="required"
              type="date"
              name="departure_date"
              onChange={(e) => setDepartureDate(e.target.value)}
              id={style.departure_date}
              min={today}
            />
            <button className="book_btn" type="submit">
              Book seat
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingMain;

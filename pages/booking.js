import React, { useState } from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import style from "../styles/booking.module.css";
import Head from "next/head";
import FormRow from "../Components/FormRow";
import { useRouter } from "next/router";
const Booking = () => {
  const router = useRouter();
  const params = router.query;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [modal, setModal] = useState(false);
  const formSubmit = (e) => {
    e.preventDefault();
    setModal(true);
    setTimeout(() => {
      setModal(false);
      router.push("/");
    }, 3000);
  };
  return (
    <>
      <Head>
        <title>Express Bus -- Booking</title>
        <meta
          name="description"
          content="This is ticket reservation project -- booking page"
        />
      </Head>
      <div className={style.body}>
        <section
          className={`${style.booking_section} ${
            modal ? "booking_blur__V8FN3" : ""
          }`}
        >
          <div className={style.booking_form}>
            <form onSubmit={formSubmit} method="post">
              <FormRow
                label={"Full Name"}
                type={"text"}
                placeholder={"Khan Ali"}
                state={setName}
                value={name}
              />
              <FormRow
                label={"Email"}
                type={"email"}
                placeholder={"khan@gmail.com"}
                state={setEmail}
                value={email}
              />
              <FormRow
                label={"Phone "}
                type={"tel"}
                placeholder={"03XXXXXXXXX"}
                state={setPhone}
                value={phone}
              />
              <div className={style.elem_group}>
                <label htmlFor="destination_section">Select Destination</label>
                <select
                  id="destination_section"
                  name="destination_preference"
                  required
                >
                  <option value={`${params.destination} to ${params.arrival}`}>
                    {params.destination} to {params.arrival}
                  </option>
                </select>
              </div>
              <div className="user_details">
                <div
                  className={` ${style.user_details_col_2} ${style.input_box}`}
                >
                  <label className={style.details}>Seat number</label>
                  <input type="number" value={params.seat} readOnly />
                </div>
                <div
                  className={` ${style.user_details_col_2} ${style.input_box}`}
                >
                  <label className={style.details}>Departure Date</label>
                  <input type="date" value={params.departureDate} readOnly />
                </div>
              </div>
              <button
                style={{ width: "100%", height: "3rem" }}
                className="btn book_btn"
                id={style.book_btn}
                type="submit"
              >
                Book Seat
              </button>
            </form>
          </div>
          <div className={style.booking_desc}>
            <h1>
              make your <br /> reservation
            </h1>
            <p>Make your reservation in a best service</p>
          </div>
        </section>
        <div
          className={`${style.SubmitModal} ${
            modal ? "booking_showModal__fkyzv" : ""
          }`}
        >
          <FaCheckCircle /> &nbsp; Seat Successfully reserved
        </div>
      </div>
    </>
  );
};

export default Booking;

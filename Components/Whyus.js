import React from "react";
import style from "../styles/whyUs.module.css";
import {
  FaRegMoneyBillAlt,
  FaDollarSign,
  FaShieldAlt,
  FaWifi,
} from "react-icons/fa";
import Link from "next/link";
const Whyus = () => {
  return (
    <section className={style.why_us_section}>
      <div className={style.why_us_wrapper}>
        <div className={style.col_1}>
          <h1>
            Why you choose us <br /> for your journey
          </h1>
          <p>we offer a really good and trusted transport services</p>
          <div className={style.row}>
            <div className={style.icon_wrapper}>
              <i>
                <FaRegMoneyBillAlt />
              </i>
            </div>
            <div className={style.content_wrapper}>
              <h3>Low Charges</h3>
              <p>we offer the best service with low price </p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.icon_wrapper}>
              <i>
                <FaDollarSign />
              </i>
            </div>
            <div className={style.content_wrapper}>
              <h3>Easy Payment Process</h3>
              <p>we offer very easy payment process.</p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.icon_wrapper}>
              <i>
                <FaShieldAlt />
              </i>
            </div>
            <div className={style.content_wrapper}>
              <h3>Safe Transport Gurantee</h3>
              <p>we offer very trusty and safe transport Gurantee</p>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.icon_wrapper}>
              <i>
                <FaWifi />
              </i>
            </div>
            <div className={style.content_wrapper}>
              <h3>Free Wifi</h3>
              <p>we offer a high speed internet access</p>
            </div>
          </div>
          <a href="#booking" className={`${style.book_btn_sm} btn`}>
            Book Your Ticket
          </a>
        </div>
        <div className={style.col_2}></div>
      </div>
    </section>
  );
};

export default Whyus;

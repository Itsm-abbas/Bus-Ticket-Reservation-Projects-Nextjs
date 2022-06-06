import React from "react";
import style from "../styles/detail.module.css";
const Detail = () => {
  return (
    <section className={style.detail_section}>
      <div className={style.detail_wrapper}>
        <h1>some count that matters</h1>
        <p>Our achievement in the journey depicted in numbers</p>
        <div className={style.detail_boxes_wrapper}>
          <div className={style.detail_box}>
            <h1>100+</h1>
            <p>Nice Buses</p>
          </div>
          <div className={style.detail_box}>
            <h1>250+</h1>
            <p>Journey Completed</p>
          </div>

          <div className={style.detail_box}>
            <h1>25+</h1>
            <p>Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;

import React from "react";
import style from "../styles/main.module.css";
const Main = () => {
  return (
    <main className={style.main}>
      <div className={style.main_contents}>
        <h1>
          your safe travel journey <br />
          is our main goal
        </h1>
        <p>Reach your destination within exact time</p>
        <a href="#booking" className={`${style.book_btn} btn`}>
          Book Your Seat
        </a>
      </div>
    </main>
  );
};

export default Main;

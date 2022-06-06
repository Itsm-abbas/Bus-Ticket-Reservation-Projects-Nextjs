import React from "react";
import style from "../styles/FormRow.module.css";
const FormRow = ({ type, placeholder, label, classname, state, value }) => {
  return (
    <div className={` ${classname} ${style.input_box}`}>
      <label className={style.details}>{label}</label>
      <input
        onChange={(e) => state(e.target.value)}
        type={type}
        value={value}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormRow;

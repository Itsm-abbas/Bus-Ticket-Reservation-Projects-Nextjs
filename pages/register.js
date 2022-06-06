import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import style from "../styles/login-register.module.css";
import Head from "next/head";
import FormRow from "../Components/FormRow";
const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [formmsg, setFrommsg] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();
    if (name || email || subject || message) {
      setFrommsg({ msg: "Registered Successfully" });
      setUsername("");
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmpassword("");
    }
  };
  return (
    <>
      <Head>
        <title>Express Bus -- Register</title>
        <meta
          name="description"
          content="This is ticket reservation project -- register page"
        />
      </Head>
      <div className={style.body}>
        <div className={style.container}>
          {formmsg.msg && (
            <div className={`${style.form_msg_wrapper} success_wrapper`}>
              <div>
                <FaCheckCircle />
                {formmsg.msg}
              </div>
            </div>
          )}
          <div className={style.title}>Registration</div>
          <div className={style.content}>
            <form onSubmit={formHandler} method="post">
              <div className="user_details">
                <FormRow
                  label={"Full Name"}
                  type={"text"}
                  placeholder={"Enter your name"}
                  classname={"input_box_col_2"}
                  name={"name"}
                  state={setName}
                  value={name}
                />
                <FormRow
                  label={"Username"}
                  type={"text"}
                  placeholder={"Enter your username"}
                  classname={"input_box_col_2"}
                  name={"username"}
                  state={setUsername}
                  value={username}
                />
                <FormRow
                  type={"email"}
                  placeholder={"Enter your email"}
                  label={"Email"}
                  classname={"input_box_col_2"}
                  name={"email"}
                  state={setEmail}
                  value={email}
                />
                <FormRow
                  type={"tel"}
                  placeholder={"Enter your phone number"}
                  label={"Phone Number"}
                  classname={"input_box_col_2"}
                  name={"phone"}
                  state={setPhone}
                  value={phone}
                />
                <FormRow
                  type={"password"}
                  placeholder={"Enter your password"}
                  label={"Password"}
                  classname={"input_box_col_2"}
                  name={"password"}
                  state={setPassword}
                  value={password}
                />
                <FormRow
                  type={"password"}
                  placeholder={"Confirm your password"}
                  label={"Confirm password"}
                  classname={"input_box_col_2"}
                  state={setConfirmpassword}
                  value={confirmpassword}
                />
              </div>

              <div className={style.button}>
                <input type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

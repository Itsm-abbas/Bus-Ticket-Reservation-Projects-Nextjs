import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Head from "next/head";
import style from "../styles/login-register.module.css";
import Link from "next/link";
import FormRow from "../Components/FormRow";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formmsg, setFrommsg] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();
    if (email || password) {
      setFrommsg({ msg: "Log in successfully" });
      setEmail("");
      setPassword("");
    }
  };
  return (
    <>
      <Head>
        <title>Express Bus -- Log in</title>
        <meta
          name="description"
          content="This is ticket reservation project -- login page"
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
          <div className={style.title}>Log in</div>
          <div className={style.content}>
            <form onSubmit={formHandler} action="register.php" method="post">
              <div className="user_details">
                <FormRow
                  type={"text"}
                  placeholder={"Enter your email"}
                  label={"Email"}
                  name={"email"}
                  state={setEmail}
                  value={email}
                />

                <FormRow
                  type={"password"}
                  placeholder={"Enter your password"}
                  label={"Password"}
                  name={"password"}
                  state={setPassword}
                  value={password}
                />
              </div>

              <div className={style.button}>
                <input type="submit" value="Log in" />
              </div>
            </form>
            <div id={style.create_account_wrap}>
              <p>
                Not a member?{" "}
                <Link href="/register">
                  <a>Create Account</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

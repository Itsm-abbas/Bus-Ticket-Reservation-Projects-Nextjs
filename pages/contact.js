import React, { useState } from "react";
import style from "../styles/contact.module.css";
import {
  FaEnvelope,
  FaSearchLocation,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";
import Head from "next/head";
import FormRow from "../Components/FormRow";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formmsg, setFrommsg] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();
    if (name || email || subject || message) {
      setFrommsg({ msg: "From successfully submitted" });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <>
      <Head>
        <title>Express Bus -- Contact</title>
        <meta
          name="description"
          content="This is ticket reservation project -- contact page"
        />
      </Head>
      <section className={style.contact_section}>
        <div className={style.contact_wrapper}>
          <div className={style.row_1}>
            <div className={style.heading}>GET IN TOUCH</div>
            <h3 className={style.heading_2}>CONTACT</h3>
          </div>
          <div className={style.row_2}>
            <div className={style.col_1}>
              <div className={style.item_wrapper}>
                <div>
                  <i>
                    <FaEnvelope />
                  </i>
                </div>
                <p>
                  <a
                    href="mailto:dreamerfreelancer22.22@gmail.com"
                    className={style.colored}
                  >
                    <abbr title=" Click to send a message">
                      dreamerfreelancer22.22@gmail.com
                    </abbr>
                  </a>
                </p>
              </div>
              <div className={style.item_wrapper}>
                <div>
                  <i>
                    <FaSearchLocation />
                  </i>
                </div>
                <p>Peshawar , Kpk Pakistan</p>
              </div>
              <div className={style.item_wrapper}>
                <div>
                  <i>
                    <FaPhone />
                  </i>
                </div>
                <p>
                  <a href="tel:+923155307733" className={style.colored}>
                    <abbr title="Click to call">+923155307733</abbr>
                  </a>
                </p>
              </div>
            </div>
            <div className={style.col_2}>
              {formmsg.msg && (
                <div className={`${style.form_msg_wrapper} success_wrapper`}>
                  <div>
                    <FaCheckCircle />
                    {formmsg.msg}
                  </div>
                </div>
              )}
              <form onSubmit={formHandler}>
                <FormRow
                  type={"text"}
                  placeholder={"Full name"}
                  name={"name"}
                  state={setName}
                  value={name}
                />
                <FormRow
                  type={"email"}
                  placeholder={"Enter your email"}
                  name={"email"}
                  state={setEmail}
                  value={email}
                />
                <FormRow
                  type={"text"}
                  placeholder={"Subject"}
                  name={"subject"}
                  state={setSubject}
                  value={subject}
                />

                <textarea
                  className={style.message}
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
                <button type="submit" className={`${style.submitBtn} btn`}>
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

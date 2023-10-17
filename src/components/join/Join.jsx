import React from "react";
import "./Join.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ps825pi",
        "template_j70zvbc",
        form.current,
        "RamGYMR2qfODeS5WG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US ?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          action=""
          ref={form}
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email adress"
          />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;

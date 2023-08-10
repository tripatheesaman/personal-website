import React from "react";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import emailPic from "../images/sms.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i5a220b",
        "template_7xila69",
        form.current,
        "hL_mOkyagT0rd7Yj1"
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess(true);
          setTimeout(() => {
            setSuccess(null);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setTimeout(() => {
            setSuccess(null);
          }, 5000);
        }
      );
  };
  let errMsg;
  if (success == null) errMsg = "";
  else
    errMsg = success ? (
      <span
        className={`bg-green-600 max-w-fit text-white border-transparent border-1 rounded-lg p-4`}
      >
        Message successfully sent!
      </span>
    ) : (
      <span
        className={`bg-red-600 max-w-fit text-white border-transparent border-1 rounded-lg p-4`}
      >
        Error Occured! Please try again later.
      </span>
    );

  return (
    <div className="md:px-10 px-7 my-10 bg-black p-10 rounded-lg" id="contact">
      {errMsg}
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 className="text-white font-semibold text-3xl md:mt-16">
            Contact Me
          </h1>
          <div className="flex mb-5 justify-center md:justify-start py-10 -ml-40 md:ml-0 ">
            <a
              href="https://www.facebook.com/profile.php?id=100088888035505"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook_image" />
            </a>
            <a
              className="ml-4"
              href="https://www.instagram.com/sa.man____/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram_image" />
            </a>
            <a
              className="ml-4"
              href="mailto:saman.075bct054@acem.edu.np"
              target="_blank"
              rel="noreferrer"
            >
              <img src={emailPic} alt="mail" />
            </a>
          </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
          <form onSubmit={sendEmail} ref={form}>
            <input
              type="text"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="user_name"
              placeholder="Name"
              className="bg-white text-white bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "
            />
            <input
              type="email"
              autoComplete="off"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-white text-white bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"
            />
            <textarea
              name="message"
              autoComplete="off"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="54"
              rows="4"
              className="bg-white text-white bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2"
              placeholder="Message:"
            ></textarea>
            <button
              type="submit"
              className="btn transition-all duration-500 bg-white text-black py-2 px-12 rounded  hover:bg-gray-600 hover:text-white block"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

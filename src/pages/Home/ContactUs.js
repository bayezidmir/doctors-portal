import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import contactImg from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section
      className="mt-5 text-center p-5"
      style={{ background: `url(${contactImg})` }}
    >
      <p className="text-primary font-bold ">Contact Us</p>
      <p className="text-xl mb-5 text-white">Stay connected with us</p>
      <input
        className="mb-3 rounded p-1 w-96"
        type="text"
        placeholder="Email Address"
      />{" "}
      <br />
      <input
        className="mb-3 rounded p-1 w-96"
        type="text"
        placeholder="Subject"
      />{" "}
      <br />
      <textarea
        type="text"
        className="w-96 rounded p-1 h-40"
        placeholder="Your Message"
      />{" "}
      <br />
      <PrimaryButton>Submit</PrimaryButton>
    </section>
  );
};

export default ContactUs;

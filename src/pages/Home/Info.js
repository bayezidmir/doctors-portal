import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const info = () => {
  return (
    <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 text-white ">
      <InfoCard
        img={clock}
        title="Opening Hour"
        bgClass="bg-gradient-to-r from-secondary to-primary"
      />
      <InfoCard img={marker} title="Visit Our Location" bgClass="bg-accent" />
      <InfoCard
        img={phone}
        title="Contact us now"
        bgClass="bg-gradient-to-r from-secondary to-primary"
      />
    </div>
  );
};

export default info;

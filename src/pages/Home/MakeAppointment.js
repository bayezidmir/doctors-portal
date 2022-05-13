import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      className="flex mt-10 p-5 justify-center items-center"
      style={{ background: `url(${appointment})` }}
    >
      <div className="mt-[-120px] hidden lg:block">
        <img src={doctor} alt="" />
      </div>
      <div className="text-white">
        <p className="text-primary font-bold">Appointment</p>
        <p className="text-xl">Make an appointment Today</p>
        <p>
          We are open 24/7 but doctors are available for limited time.
          Therefore, make sure you make an appointment before you come for a
          consultation
        </p>
        <PrimaryButton>Schedule Now</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;

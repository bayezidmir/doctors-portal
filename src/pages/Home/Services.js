import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import SpecialService from "./SpecialService";

const Services = () => {
  const services = [
    { _id: 1, name: "Flouride Treatment", description: "", img: fluoride },
    { _id: 2, name: "Cavity Feeling ", description: "", img: cavity },
    { _id: 3, name: "Teeth Whitening", description: "", img: whitening },
  ];
  return (
    <>
      <div className="py-10 text-center">
        <h3 className=" text-sm text-primary font-bold">OUR SERVICES</h3>
        <h3 className="text-xl ">Services We Provide</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* <ServiceCard img={fluoride} title="Flouride Treatment" />
        <ServiceCard img={cavity} title="Cavity Feeling " />
        <ServiceCard img={whitening} title="Teeth Whitening" /> */}
        {services.map((service) => (
          <ServiceCard serviceData={service} key={service._id} />
        ))}
      </div>
      <div>
        <SpecialService />
      </div>
    </>
  );
};

export default Services;

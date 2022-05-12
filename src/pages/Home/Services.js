import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import SpecialService from "./SpecialService";

const Services = () => {
  return (
    <>
      <div class="py-10">
        <h3 class="text-center text-sm text-primary font-bold">OUR SERVICES</h3>
        <h3 class="text-xl text-center">Services We Provide</h3>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <ServiceCard img={fluoride} title="Flouride Treatment" />
        <ServiceCard img={cavity} title="Cavity Feeling " />
        <ServiceCard img={whitening} title="Teeth Whitening" />
      </div>
      <div>
        <SpecialService />
      </div>
    </>
  );
};

export default Services;

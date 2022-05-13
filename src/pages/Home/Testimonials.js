import React from "react";
import quote from "../../assets/icons/quote.svg";
import Testimonial from "./Testimonial";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";

const Testimonials = () => {
  const testimonials = [
    {
      _id: 1,
      name: "Warner",
      location: "USA",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In excepturi facere eveniet temporibus at asperiores est impedit ipsam error ut.",
      img: people1,
    },
    {
      _id: 2,
      name: "Romana",
      location: "KSA",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In excepturi facere eveniet temporibus at asperiores est impedit ipsam error ut.",
      img: people2,
    },
    {
      _id: 3,
      name: "Mrs. Smith",
      location: "German",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In excepturi facere eveniet temporibus at asperiores est impedit ipsam error ut.",
      img: people3,
    },
  ];
  return (
    <section className="mt-8">
      <div className="flex justify-between">
        <div className="title">
          <p className="text-primary font-bold">Testimonial</p>
          <p className="text-xl">Whats Our Patients Says</p>
        </div>
        <div className="quote">
          <img src={quote} alt="" className=" w-24 lg:w-48" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

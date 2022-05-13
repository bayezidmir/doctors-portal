import React from "react";

const Testimonial = ({ testimonial }) => {
  const { name, location, img, feedback } = testimonial;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{feedback}</p>
        <div className="card-actions items-center mt-5">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            {name} <br />
            {location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import React from "react";
import treatment from "../../assets/images/treatment.png";

const SpecialService = () => {
  return (
    <div class="max-auto card card-side bg-base-100 shadow-xl ">
      <figure>
        <img src={treatment} alt="Movie" class="h-72" />
      </figure>
      <div class="card-body  ">
        <h2 class="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <button class="btn btn-primary w-40">Watch</button>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default SpecialService;

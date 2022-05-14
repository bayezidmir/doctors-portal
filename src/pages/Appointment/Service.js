import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="card-title text-secondary justify-center">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-600">Sorry! Try Another Date!</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "Appointments" : "Appointment"}{" "}
          available!
        </p>
        <div className="card-actions justify-center">
          <button disabled={slots.length === 0} className="btn btn-primary ">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;

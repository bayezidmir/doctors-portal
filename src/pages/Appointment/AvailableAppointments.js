import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setService] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <p className="text-secondary text-center text-xl">
        <strong>Available Appointments on: {format(date, "PP")}</strong>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 ">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          date={date}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;

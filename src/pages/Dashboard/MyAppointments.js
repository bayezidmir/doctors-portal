import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [user, loading, error] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem.access}`,
        },
      }).then((res) =>
        res.json().then((data) => {
          console.log(data);
          setAppointments(data);
        })
      );
    }
  }, [user]);
  return (
    <div>
      <h2>Total Appointments: {appointments.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Patient </th>
              <th>Treatment Name</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user?.displayName}</td>
                <td> {a?.treatment} </td>
                <td>{a?.slot}</td>
                <td>{a?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;

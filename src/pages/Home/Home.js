import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="px-10">
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;

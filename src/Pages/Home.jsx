import React from "react";
import Cart from "../Components/Cart";
import Category from "../Components/Category";
import Count from "../Components/Count";
import Course from "../Components/Course";

import Hero from "../Components/Hero";
import JoinUs from "../Components/JoinUs";
import Offer from "../Components/Offer";
import OurApp from "../Components/OurApp";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Category /> */}
      <div className="space"></div>
      <br />
      <br />
      <Offer />
      <Course />
      <JoinUs />
      <Count />
      <Testimonials />
      <OurApp />
    </>
  );
};

export default Home;

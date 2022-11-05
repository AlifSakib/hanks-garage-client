import React from "react";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div>
        <Hero></Hero>
        <Gallery></Gallery>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;

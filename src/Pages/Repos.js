import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Repoo from "../Components/Rep";
import "../App.css";

function Repos() {
  /* Page to view the fetched repos on a single page */
  return (
    <div>
      <Hero />
      <Repoo />
      <Footer />
    </div>
  );
}

export default Repos;

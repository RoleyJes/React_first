import "./App.css";
import React from "react";
// import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import RepoList from "./Components/RepoList";
import Hero from "./Components/Hero";
import Repoo from "./Components/Rep";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Repoo />
      {/* <RepoList /> */}
      <Footer />
    </>
  );
}

export default Home;

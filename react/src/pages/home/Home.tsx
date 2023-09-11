import React from "react";
import Navbar from "../../commonComponents/Navbar";
import Footer from "../../commonComponents/Footer";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <p>Home</p>

      <Footer />
    </div>
  );
};

export default Home;
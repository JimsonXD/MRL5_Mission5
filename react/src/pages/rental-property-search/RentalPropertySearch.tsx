import React from "react";
import Navbar from "../../commonComponents/Navbar";
import Footer from "../../commonComponents/Footer";
import PropertyList from "./component/PropertyList";

const RentalPropertySearch = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <PropertyList />
      <Footer />
    </div>
  );
};

export default RentalPropertySearch;

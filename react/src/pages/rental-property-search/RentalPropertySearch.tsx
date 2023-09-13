import React from "react";
import Navbar from "../../commonComponents/Navbar";
import Footer from "../../commonComponents/Footer";
import RentalPropertyChild from "./component/RentalPropertyChild";

const RentalPropertySearch = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <RentalPropertyChild />
      <RentalPropertyChild />
      <RentalPropertyChild />
      <RentalPropertyChild />
      <Footer />
    </div>
  );
};

export default RentalPropertySearch;

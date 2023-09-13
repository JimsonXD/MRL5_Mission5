import React from "react";
import Navbar from "../../commonComponents/Navbar";
import Footer from "../../commonComponents/Footer";
import PropertyDetailsChild from "./component/PropertyDetailsChild";

const PropertyDetails = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <PropertyDetailsChild />
      <Footer />
    </div>
  );
};

export default PropertyDetails;

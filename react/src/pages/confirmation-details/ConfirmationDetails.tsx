import React from "react";
import Navbar from "../../commonComponents/Navbar";
import Footer from "../../commonComponents/Footer";
import ConfirmationDetailsChild from "./component/ConfirmationDetailsChild";

const ConfirmationDetails = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <ConfirmationDetailsChild />
      <Footer />
    </div>
  );
};

export default ConfirmationDetails;
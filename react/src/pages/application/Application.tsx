import React from "react";
import Navbar from "../../commonComponents/Navbar";
import Footer from "../../commonComponents/Footer";
import TenantDetails from "./component/TenantDetails";
import LandlordDetails from "./component/LandlordDetails";
import TenancyDetails from "./component/TenancyDetails";

const Application = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <TenantDetails />
      <LandlordDetails />
      <TenancyDetails />
      <Footer />
    </div>
  );
};

export default Application;

import React from "react";
import Navbar from "../../commonComponents/Navbar";
import Footer from "../../commonComponents/Footer";
import MyTenancyApplicationChild from "./component/MyTenancyApplicationChild";

const MyTenancyApplication = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <MyTenancyApplicationChild />
      <Footer />
    </div>
  );
};

export default MyTenancyApplication;
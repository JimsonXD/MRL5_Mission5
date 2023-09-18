import React from "react";
import Navbar from "../../commonComponents/Navbar";
import Footer from "../../commonComponents/Footer";
import RentalPropertyChild from "./component/RentalPropertyChild";

const RentalPropertySearch = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <RentalPropertyChild property={{
        _id: "",
        imageUrl1: "",
        imageUrl2: "",
        imageUrl3: "",
        imageUrl4: "",
        imageUrl5: "",
        address: "",
        price: "",
        bedrooms: 0,
        bathrooms: 0,
        parking: 0
      }} />
      <Footer />
    </div>
  );
};

export default RentalPropertySearch;

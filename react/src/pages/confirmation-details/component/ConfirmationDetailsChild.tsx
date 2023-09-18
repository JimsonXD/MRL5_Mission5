/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import ViewMore from "../../property-details/component/ViewMore";


const ConfirmationDetailsChild = () => {
  return (
    <div className="bg-white py-12">
      <div className="bg-gray-300 flex flex-col items-center justify-center p-4 mx-16 rounded-lg bg-image">
        <div className="bg-white opacity-70 my-12 rounded-md p-24 text-center text-black">
          <h1>Thank you!!!</h1>
          <p>

<div className="img p-10 ml-16"></div>


            {" "}
            You've completed the
            <br /> tenancy agreement
          </p>
          <br />
          <br />
          <p>
            {" "}
            Our team will be in <br /> touch soon!
          </p>


          <Link to="/">
          <button className="btn-secondary bg-red btn-md 0 px-4 mt-6 text-lg rounded-md">
            Back to Home
          </button>
</Link>



        </div>
      </div>

      <div className=" px-16 py-6 text-black">
        <ViewMore
          property={{
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
            parking: 0,
          }}
        />
      </div>

    </div>
  );
};

export default ConfirmationDetailsChild;

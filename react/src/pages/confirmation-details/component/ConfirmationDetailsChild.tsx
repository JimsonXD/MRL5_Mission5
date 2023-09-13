/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";


const ConfirmationDetailsChild = () => {
  return (
    <div className="bg-white py-12 px-16">
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
          <button className="btn-secondary bg-red btn-md 0 px-4 mt-6 text-lg">
            Back to Home
          </button>
        </div>
      </div>

      <div className=" px-16 py-6 text-black">
        <p>View More:</p>
      </div>

      <div className="flex px-16 gap-6">
        <div className="w-full bg-gray-100 rounded-lg shadow-lg p-4">
          <div className="w-full flex items-center mb-2">
            <img
              src="https://images.homes.co.nz/resize/fill/550/350/ce/0/plain/https://s3-ap-southeast-2.amazonaws.com/homes-listing-images/16818389945632870950"
              alt="Image 3"
              className="h-48 w-72 rounded-md"
            />
          </div>

          <div className="mt-4 pb-4">
            <span className="text-lg">400 per week</span>
            <p className="line-clamp-1 mt-2 text-sm text-gray-800">
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="ml-auto text-red-500"
                />
                4 Sunnyvale Road, Greenlane, Auckland City
              </span>
            </p>
          </div>
        </div>

        <div className="w-full bg-gray-100 rounded-lg shadow-lg p-4">
          <div className="w-full flex items-center mb-2">
            <img
              src="https://images.homes.co.nz/resize/fill/550/350/ce/0/plain/https://s3-ap-southeast-2.amazonaws.com/homes-listing-images/172023178282021478"
              alt="Image 3"
              className="h-48 w-72 rounded-md"
            />
          </div>

          <div className="mt-4">
            <span className="text-lg">400 per week</span>
            <p className="line-clamp-1 mt-2 text-sm text-gray-800">
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="ml-auto text-red-500"
                />
                4 Sunnyvale Road, Greenlane, Auckland City
              </span>
            </p>
          </div>
        </div>

        <div className="w-full bg-gray-100 rounded-lg shadow-lg p-4">
          <div className="w-full flex items-center mb-2">
            <img
              src="https://images.homes.co.nz/resize/fill/550/350/ce/0/plain/https://s3-ap-southeast-2.amazonaws.com/homes-listing-images/15471635658110819262"
              alt="Image 3"
              className="h-48 w-72 rounded-md"
            />
          </div>

          <div className="mt-4">
            <span className="text-lg">400 per week</span>
            <p className="line-clamp-1 mt-2 text-sm text-gray-800">
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="ml-auto text-red-500"
                />
                4 Sunnyvale Road, Greenlane, Auckland City
              </span>
            </p>
          </div>
        </div>

        <div className="w-full bg-gray-100 rounded-lg shadow-lg p-4">
          <div className="w-full flex items-center mb-2">
            <img
              src="https://stonewood.co.nz/wp-content/uploads/elementor/thumbs/The-Best-House-Designs-for-Small-Houses-q0j79amwkx761zjckdvyepbhfyczpqyx6ahsa8tsbg.jpg"
              alt="Image 3"
              className="h-48 w-72 rounded-md"
            />
          </div>

          <div className="mt-4">
            <span className="text-lg">400 per week</span>
            <p className="line-clamp-1 mt-2 text-sm text-gray-800">
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="ml-auto text-red-500"
                />
                4 Sunnyvale Road, Greenlane, Auckland City
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDetailsChild;

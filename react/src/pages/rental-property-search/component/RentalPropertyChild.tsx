/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faCar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SavePropertyPopUp from "../../property-details/component/SavePropertyPopUp";
import { Property } from "./RentalPropertiesData";

const RentalPropertyChild = ({ property }: { property: Property }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleClickHeart = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="flex">
      <div className="relative w-full ">
        <a href="#">
          <div className="w-full bg-white p-4 shadow px-28">
            <div className="bg-gray-200 rounded-lg pb-3">
              <Link to="/property-details">
                <div className="rounded-lg flex bg-gray-200">
                  <div className="rounded-lg w-full md:w-1/2 p-8 relative flex justify-center overflow-hidden rounded-lg">
                    <img
                      src={property.imageUrl1}
                      alt="image"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex gap-4">
                      <div className="w-full flex justify-center items-center mb-2">
                        <img
                          src={property.imageUrl2}
                          alt="Image 1"
                          className="h-48 w-72 rounded-md"
                        />
                      </div>

                      <div className="w-full flex justify-center items-center mb-2">
                        <img
                          src={property.imageUrl3}
                          alt="Image 2"
                          className="h-48 w-72 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 ">
                      <div className="w-full flex items-center mb-2">
                        <img
                          src={property.imageUrl4}
                          alt="Image 3"
                          className="h-48 w-72 rounded-md"
                        />
                      </div>

                      <div className="w-full flex items-center mb-2">
                        <img
                          src={property.imageUrl5}
                          alt="Image 4"
                          className="h-48 w-72 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="mt-4 px-8">
                <div className="flex justify-between pr-12">
                  <div className="flex">
                    <p className="text-lg uppercase"> ＄ </p>
                    <p className="text-lg">{property.price}</p>
                  </div>

                  <div>
                    <button onClick={handleClickHeart}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className=" text-red-500 "
                        size="lg"
                      />
                    </button>
                    {showPopUp && (
                      <SavePropertyPopUp onClose={handleClosePopUp} />
                    )}
                  </div>
                </div>

                <div className="mt-2">
                  <p className="line-clamp-1 mt-2 text-sm text-gray-800">
                    <FontAwesomeIcon icon={faLocationDot} size="lg" />{" "}
                    {property.address}
                  </p>
                </div>

                <div className="justify-center mb-2">
                  <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1 mb-2">
                    <p className="flex items-center font-medium text-gray-800">
                      <FontAwesomeIcon
                        icon={faBed}
                        className="mr-2 text-blue-900"
                      />
                      {property.bedrooms}
                    </p>

                    <p className="flex items-center font-medium text-gray-800">
                      <FontAwesomeIcon
                        icon={faBath}
                        className="mr-2 text-blue-900"
                      />
                      {property.bathrooms}
                    </p>
                    <p className="flex items-center font-medium text-gray-800">
                      <FontAwesomeIcon
                        icon={faCar}
                        className="mr-2 text-blue-900"
                      />
                      {property.parking}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default RentalPropertyChild;

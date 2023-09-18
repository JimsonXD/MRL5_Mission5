/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faCar,
  faDollarSign,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SavePropertyPopUp from "../../property-details/component/SavePropertyPopUp";

interface Property {
  _id: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  imageUrl5: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
}

const RentalPropertyChild = ({ property }: { property: Property }) => {
  const [propertyListings, setPropertyListings] = useState<Property[]>([]);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data: Property[]) => {
        setPropertyListings(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleClickHeart = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <>
      <div className="flex gap-8 w-full justify-center py-4 mt-2">
        <button className="bg-white border-2 rounded-md text-ruby btn-outline w-auto px-8 py-2">
          {" "}
          <FontAwesomeIcon icon={faBed} className="pr-2 text-ruby" />
          Beds
        </button>
        <button className="bg-white border-2 rounded-md text-ruby btn-outline w-auto px-8">
          {" "}
          <FontAwesomeIcon icon={faBath} className="pr-2 text-ruby" />
          Baths
        </button>

        <button className="bg-white border-2 rounded-md text-ruby btn-outline w-auto px-8">
          {" "}
          <FontAwesomeIcon icon={faDollarSign} className="pr-2 text-ruby" />
          Price
        </button>

        <button className="bg-white border-2 rounded-md text-ruby btn-outline w-auto px-8">
          {" "}
          <FontAwesomeIcon icon={faCar} className="pr-2 text-ruby" />
          Parking
        </button>

        <button className="bg-white border-2 rounded-md text-ruby btn-outline w-auto px-8">
          {" "}
          <FontAwesomeIcon icon={faBars} className="pr-2 text-ruby" />
          More Filters{" "}
        </button>
      </div>

      <div className="mx-12">
        <ul>
          {propertyListings.map((property) => (
            <li key={property._id}>
              <div className="bg-platinum bg-opacity-50 shadow-md rounded-lg overflow-hidden p-8 mb-12 mt-4 mr-4">
                <div className="flex w-full gap-4">
                  <div className="w-1/2 flex">
                    <Link to={`/property-details/${property._id}`}>
                      <img
                        src={property.imageUrl1}
                        className="w-full h-full object-fill rounded-lg hover:scale-110 transform transition-transform duration-300 shadow-lg"
                        alt={`Property ${property._id}`}
                      />
                    </Link>
                  </div>

                  <div className="px-2">
                    <div className="flex w-1/2 gap-4 pb-4">
                      <img
                        src={property.imageUrl2}
                        className="w-full h-52 object-cover rounded-lg hover:scale-110 transform transition-transform duration-300"
                        alt={`Property ${property._id}`}
                      />
                      <img
                        src={property.imageUrl3}
                        className="w-full h-52 object-cover rounded-lg hover:scale-110 transform transition-transform duration-300"
                        alt={`Property ${property._id}`}
                      />
                    </div>
                    <div className="w-1/2 flex gap-4 pb-2 rounded-lg ">
                      <img
                        src={property.imageUrl4}
                        className="w-full h-52 object-cover rounded-lg hover:scale-110 transform transition-transform duration-300"
                        alt={`Property ${property._id}`}
                      />
                      <img
                        src={property.imageUrl5}
                        className="w-full h-52 object-cover rounded-lg hover:scale-110 transform transition-transform duration-300"
                        alt={`Property ${property._id}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between .">
                  <div>
                    <div className="w-full pt-4">
                      <p className="text-gray-700">
                        <FontAwesomeIcon
                          icon={faDollarSign}
                          className=" text-ruby pr-2"
                        />
                        {property.price}
                      </p>

                      <p className="text-gray-700 no-underline">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className=" text-ruby pr-2"
                        />
                        {property.address}
                      </p>
                    </div>

                    <div className="mt-4 flex space-x-12 overflow-hidden rounded-lg py-1 mb-2">
                      <p className="flex items-center font-medium text-gray-800">
                        <FontAwesomeIcon
                          icon={faBed}
                          className="pr-2 text-ruby"
                        />
                        {property.bedrooms}
                      </p>

                      <p className="flex items-center font-medium text-gray-800">
                        <FontAwesomeIcon
                          icon={faBath}
                          className="pr-2 text-ruby"
                        />
                        {property.bathrooms}
                      </p>
                      <p className="flex items-center font-medium text-gray-800">
                        <FontAwesomeIcon
                          icon={faCar}
                          className="pr-2 text-ruby"
                        />
                        {property.parking}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pr-4 text-red ">
                    <button onClick={handleClickHeart}>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className=" text-red-500"
                        size="lg"
                      />
                    </button>
                    {showPopUp && (
                      <SavePropertyPopUp onClose={handleClosePopUp} />
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center pb-8">
        <button className="bg-white border-2 rounded-md text-ruby btn-outline w-auto py-3 px-12 ">
          Load More{" "}
        </button>
      </div>
    </>
  );
};

export default RentalPropertyChild;

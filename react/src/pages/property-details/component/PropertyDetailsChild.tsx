/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBed, faBath, faCar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import EnquirePopUp from "./EnquirePopUp";
import BookToViewPopUp from "./BookToViewPopUp";
import { library } from "@fortawesome/fontawesome-svg-core";
import SavePropertyPopUp from "./SavePropertyPopUp";

library.add(faHeart);

const PropertyDetailsChild = () => {
  const [isPopupOpenA, setPopupOpenA] = useState(false);
  const [isPopupOpenB, setPopupOpenB] = useState(false);
  const [isPopupOpenC, setPopupOpenC] = useState(false);

  const openPopupA = () => {
    setPopupOpenA(true);
  };

  const closePopupA = () => {
    setPopupOpenA(false);
  };

  const openPopupB = () => {
    setPopupOpenB(true);
  };

  const closePopupB = () => {
    setPopupOpenB(false);
  };

  const openPopupC = () => {
    setPopupOpenC(true);
  };

  const closePopupC = () => {
    setPopupOpenC(false);
  };

  return (
    <div className="bg-white py-12">
      <div>
        <div className="w-full">
          <Carousel />
        </div>

        <div className="px-28">
          <div className="mt-4 p-8 ">
            <div className="flex items-center">
              <p className="text-lg uppercase"> ＄ </p>

              <div className="flex items-center ml-2 w-full">
                <span className="text-lg">400 per week</span>
                <button onClick={openPopupC}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="lg"
                    className="ml-auto text-red-500"
                  />
                </button>

                {isPopupOpenC && (
                  <div className="popup">
                    <div className="popup-content">
                      <SavePropertyPopUp onClose={closePopupC} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4">
              <p className="line-clamp-1 mt-2 text-sm text-gray-800">
                <FontAwesomeIcon icon={faLocationDot} size="lg" /> 4 Sunnyvale
                Road, Greenlane, Auckland City
              </p>
            </div>

            <div className="justify-center">
              <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                <p className="flex items-center font-medium text-gray-800">
                  <FontAwesomeIcon
                    icon={faBed}
                    className="mr-2 text-blue-900"
                  />
                  2
                </p>

                <p className="flex items-center font-medium text-gray-800">
                  <FontAwesomeIcon
                    icon={faBath}
                    className="mr-2 text-blue-900"
                  />
                  1
                </p>
                <p className="flex items-center font-medium text-gray-800">
                  <FontAwesomeIcon
                    icon={faCar}
                    className="mr-2 text-blue-900"
                  />
                  1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex w-full items-center pl-28 gap-6 p-8">
          <button onClick={openPopupB} className="btn btn-secondary bg-red-600">
            Book to view the property
          </button>

          {isPopupOpenB && (
            <div className="popup">
              <div className="popup-content">
                <BookToViewPopUp onClose={closePopupB} />
              </div>
            </div>
          )}

          <button onClick={openPopupA} className="btn btn-outline text-red-600">
            Enquire Now
          </button>

          {isPopupOpenA && (
            <div className="popup">
              <div className="popup-content">
                <EnquirePopUp onClose={closePopupA} />
              </div>
            </div>
          )}
        </div>

        <div className="flex px-28">
          <div className="flex flex-col text-right px-2">
            <p>Franz Rangi</p>
            <p>Auckland, New Zealand</p>
          </div>
          <img
            src="data:image/jpeg;base64,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"
            className="w-16 h-16 rounded-full"
            alt="Profile Image"
          />
        </div>
      </div>

      <div className="bg-gray-200 flex flex-col p-4 mx-28 rounded-lg">
        <h1>Details:</h1>
        <br />

        <p>
          This prime location apartment is approximately 40sqm and has
          everything you need to start living comfortably when you move in
          <br />
          Its located on the 3rd floor, where you'll be able to enjoy all day
          sun in this corner apartment.
          <br />
          <br />
          Auckland Hospital and Auckland Domain are within an easy walk and it
          also close to CBD. Westfield Newmarket is also just a quick stroll
          <br /> <br />
          Some top restaurants, bars, and cafés are also nearby and bus routes
          and railway station are within 1km too
          <br />
          <br />
          Top schools (Double Grammar zone) - Auckland Grammar, Epsom Girls'
          Grammar, Newmarket school and Parnell School
          <br />
          <br />
        </p>
        <p>
          Parking: One undercover carpark
          <br />
          No pets or smokers
          <br />
          Move in cost:
          <br />
          4 weeks bond and 1 week rent in advance
          <br />
          Apply online
          <br />
        </p>
      </div>

      <div className="flex w-full items-center justify-center p-8">
        <button onClick={openPopupB} className="btn btn-secondary bg-red-600">
          Book to view the property
        </button>

        {isPopupOpenB && (
          <div className="popup">
            <div className="popup-content">
              <BookToViewPopUp onClose={closePopupB} />
            </div>
          </div>
        )}
      </div>

      <div className=" px-28 py-6">
        <p>View More:</p>
      </div>

      <div className="flex px-28 gap-6">
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
                <FontAwesomeIcon icon={faLocationDot} size="lg" /> 4 Sunnyvale
                Road, Greenlane, Auckland City
              </span>
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-lg shadow-lg p-4">
          <div className="w-full flex items-center mb-2">
            <img
              src="https://s.oneroof.co.nz/image/cc/93/cc9304cb6a4cc00030204d78be5a5eef.jpg?x-oss-process=image/quality,q_80/resize,w_630/format,webp"
              alt="Image 3"
              className="h-48 w-72 rounded-md"
            />
          </div>

          <div className="mt-4">
            <span className="text-lg">400 per week</span>
            <p className="line-clamp-1 mt-2 text-sm text-gray-800">
              <span>
                <FontAwesomeIcon icon={faLocationDot} size="lg" /> 4 Sunnyvale
                Road, Greenlane, Auckland City
              </span>
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-lg shadow-lg p-4">
          <div className="w-full flex items-center mb-2">
            <img
              src="https://s.oneroof.co.nz/image/17/3d/173d25d5aeed0933252ed1728e65adb6.jpg?x-oss-process=image/quality,q_80/resize,w_630/format,webp"
              alt="Image 3"
              className="h-48 w-72 rounded-md"
            />
          </div>

          <div className="mt-4">
            <span className="text-lg">400 per week</span>
            <p className="line-clamp-1 mt-2 text-sm text-gray-800">
              <span>
                <FontAwesomeIcon icon={faLocationDot} size="lg" /> 4 Sunnyvale
                Road, Greenlane, Auckland City
              </span>
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-lg shadow-lg p-4">
          <div className="w-full flex items-center mb-2">
            <img
              src="https://s.oneroof.co.nz/image/a2/cd/a2cddfd7bf89c02b28bfd0f6e0a24204.jpg?x-oss-process=image/quality,q_80/resize,w_1300/format,webp"
              alt="Image 3"
              className="h-48 w-72 rounded-md"
            />
          </div>

          <div className="mt-4">
            <span className="text-lg">400 per week</span>
            <p className="line-clamp-1 mt-2 text-sm text-gray-800">
              <span>
                <FontAwesomeIcon icon={faLocationDot} size="lg" /> 4 Sunnyvale
                Road, Greenlane, Auckland City
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsChild;

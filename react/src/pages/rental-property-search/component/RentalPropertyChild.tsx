/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faCar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const propertyImageUrl1 = "https://stonewood.co.nz/wp-content/uploads/elementor/thumbs/The-Best-House-Designs-for-Small-Houses-q0j79amwkx761zjckdvyepbhfyczpqyx6ahsa8tsbg.jpg";
const propertyImageUrl2 = "https://s.oneroof.co.nz/image/e8/42/e842010ea1d14a757468c5df5f4532e5.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp";
const propertyImageUrl3 = "https://s.oneroof.co.nz/image/df/9e/df9e7fd5b4f07853d3b9ef5164c0cb39.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp";
const propertyImageUrl4 = "https://s.oneroof.co.nz/image/8a/85/8a85f1c79e1cfcc270c398bb85ba9b55.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp";
const propertyImageUrl5 = "https://s.oneroof.co.nz/image/f0/5f/f05f24ec8db805baebfe35ac388fdc0f.jpg?x-oss-process=image/quality,q_80/resize,w_2400/format,webp";

const RentalPropertyChild = () => {
  return (
    <div className="flex">
      <div className="relative w-full">
        <a
          href="#"
        >
          <div className="w-full bg-white p-4 shadow px-28">
            <div className="bg-gray-200 rounded-lg pb-3">
              <div className="rounded-lg flex bg-gray-200">
                <div className="rounded-lg w-full md:w-1/2 p-8 relative flex justify-center overflow-hidden rounded-lg">
                  <img src={propertyImageUrl1} alt="image" className="rounded-lg" />
                </div>

                <div className="p-8">
                  <div className="flex gap-4">
                    <div className="w-full flex justify-center items-center mb-2">
                      <img
                        src={propertyImageUrl2}
                        alt="Image 1"
                        className="h-48 w-72 rounded-md"
                      />
                    </div>

                    <div className="w-full flex justify-center items-center mb-2">
                      <img
                        src={propertyImageUrl3}
                        alt="Image 2"
                        className="h-48 w-72 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 ">
                    <div className="w-full flex items-center mb-2">
                      <img
                        src={propertyImageUrl4}
                        alt="Image 3"
                        className="h-48 w-72 rounded-md"
                      />
                    </div>

                    <div className="w-full flex items-center mb-2">
                      <img
                        src={propertyImageUrl5}
                        alt="Image 4"
                        className="h-48 w-72 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 px-8">
                <div className="flex items-center">
                  <p className="text-lg uppercase"> ＄ </p>

                  <div className="flex items-center ml-2 w-full">
                    <span className="text-lg">400 per week</span>
                    <FontAwesomeIcon icon={faHeart} className="ml-auto text-red-500 pr-8" size="lg" />
                  </div>
                </div>

                <div className="mt-2">
                  <p className="line-clamp-1 mt-2 text-sm text-gray-800">
                  <FontAwesomeIcon icon={ faLocationDot }  size="lg" /> 4
                    Sunnyvale Road, Greenlane, Auckland City
                  </p>
                </div>

                <div className="justify-center mb-2">
                  <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1 mb-2">
                    <p className="flex items-center font-medium text-gray-800">
                      <FontAwesomeIcon icon={faBed} className="mr-2 text-blue-900" />
                      2
                    </p>

                    <p className="flex items-center font-medium text-gray-800">
                      <FontAwesomeIcon icon={faBath} className="mr-2 text-blue-900" />
                      1
                    </p>
                    <p className="flex items-center font-medium text-gray-800">
                      <FontAwesomeIcon icon={faCar} className="mr-2 text-blue-900" />
                      1
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

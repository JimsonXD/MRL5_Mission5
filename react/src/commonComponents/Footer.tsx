import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="bg-turnersgrey text-white p-5  ">
        <p className="flex items-center justify-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-10 text-turnersred group-hover:text-white transition-colors duration-700"
            fill="none"
            viewBox="0 0 15 7"
            stroke="currentColor"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              size="sm"
              className="text-turnersred group-hover:text-white transition-colors duration-700"
            />
          </svg>
          Level 33, ANZ Centre, 23-29 Albert St, Auckland 1010, New Zealand
          <br />
          <br />
          Metro NZ Property Management has offices conveniently located
          <br />
          in Central Auckland but operates throughout New Zealand and
          <br />
          also internationally
        </p>
        <br />
        <br />
        <p className="flex items-center justify-center">
          09 391 4642 | +64 21 642 119 | info@metronz.co.nz
        </p>
      </div>

      <div className="footer-section bg-darkgrey p-5 px-20 text-white">
        <div className="flex justify-center items-center">
          <ul className="flex space-x-4">
            <li className="group flex items-center py-10 px-10 cursor-pointer relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-10 text-turnersred group-hover:text-white transition-colors duration-700"
                  fill="none"
                  viewBox="0 0 40 15"
                  stroke="currentColor"
                >
                  <circle
                    cx="20"
                    cy="10"
                    r="18"
                    fill="white"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    size="sm"
                    className="text-turnersred group-hover:text-white transition-colors duration-700"
                  />
                </svg>
              </div>
            </li>

            <li className="group flex items-center py-10 px-10 cursor-pointer relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-10 text-turnersred group-hover:text-white transition-colors duration-700"
                  fill="none"
                  viewBox="0 0 40 15"
                  stroke="currentColor"
                >
                  <circle
                    cx="20"
                    cy="10"
                    r="18"
                    fill="white"
                    stroke="white"
                    strokeWidth="4"
                  />

                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="sm"
                    className="text-turnersred group-hover:text-white transition-colors duration-700"
                  />
                </svg>
              </div>
            </li>

            <li className="group flex items-center py-10 px-10 cursor-pointer relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-10 text-turnersred group-hover:text-white transition-colors duration-700"
                  fill="none"
                  viewBox="0 0 40 15"
                  stroke="currentColor"
                >
                  <circle
                    cx="20"
                    cy="10"
                    r="18"
                    fill="white"
                    stroke="white"
                    strokeWidth="4"
                  />

                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="sm"
                    className="text-turnersred group-hover:text-white transition-colors duration-700"
                  />
                </svg>
              </div>
            </li>

            <li className="group flex items-center py-10 px-10 cursor-pointer relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-10 text-turnersred group-hover:text-white transition-colors duration-700"
                  fill="none"
                  viewBox="0 0 40 15"
                  stroke="currentColor"
                >
                  <circle
                    cx="20"
                    cy="10"
                    r="18"
                    fill="white"
                    stroke="white"
                    strokeWidth="4"
                  />

                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="sm"
                    className="text-turnersred group-hover:text-white transition-colors duration-700"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

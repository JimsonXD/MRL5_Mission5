import React from "react";
import { Link } from "react-router-dom";
import Metrologo from "../assets/Metrologo.png";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img src={Metrologo} alt="Metro Logo" className="w-30 h-12 m-2" />
          </Link>

          <ul className="hidden lg:flex space-x-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/">Page1</Link>
                  </li>
                  <li>
                    <Link to="/rental-property-search">Page2</Link>
                  </li>
                  <li>
                    <Link to="/property-details">Page3</Link>
                  </li>
                  <li>
                    <Link to="/my-tenancy-application">Page4</Link>
                  </li>
                  <li>
                    <Link to="/application">Page5</Link>
                  </li>
                  <li>
                    <Link to="/confirmation-details">Page6</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          </ul>

          <div className="lg:hidden">
            <button className="p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <ul className="space-y-4 p-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li>
                  <Link to="/">Page1</Link>
                </li>
                <li>
                  <Link to="/rental-property-search">Page2</Link>
                </li>
                <li>
                  <Link to="/property-details">Page3</Link>
                </li>
                <li>
                  <Link to="/my-tenancy-application">Page4</Link>
                </li>
                <li>
                  <Link to="/application">Page5</Link>
                </li>
                <li>
                  <Link to="/confirmation-details">Page6</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>
      </div>

      <SearchBar />
    </nav>
  );
};

export default Navbar;

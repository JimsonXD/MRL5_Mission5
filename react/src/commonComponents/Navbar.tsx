/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Metrologo from "../assets/Metrologo.png";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 px-4 py-2"> {/* Add padding using px-4 and py-2 */}
      <div className="navbar-start">
        <img src={Metrologo} alt="Metro Logo" className="w-30 h-12 m-2" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 p-2">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li>
                  <a>Service1</a>
                </li>
                <li>
                  <a>Service2</a>
                </li>
                <li>
                  <a>Service3</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Sign In</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;

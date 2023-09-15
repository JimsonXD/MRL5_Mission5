/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

function SavePropertyPopUp(props: { onClose: any }) {
  const { onClose } = props;

  const handleSubmit = () => {
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-platinum w-full max-w-screen-lg p-8 rounded-lg shadow-lg pb-24 pt-24">
        <div className="flex">
          <div className="flex justify-end w-1/2" style={{ fontSize: "3rem" }}>
            🏠
          </div>

          <button
            onClick={handleClose}
            className="flex justify-end w-1/2 pr-8 pt-3"
            style={{ fontSize: "1.5rem" }}
          >
            ❌
          </button>
        </div>

        <h2 className="text-3xl font-semibold flex justify-center">
          Save the Property
        </h2>

        <form className="flex gap-4 w-full p-8 px-24 rounded-lg">
          <div className="w-full">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded p-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              placeholder="Email Address"
            />
          </div>

          <button
            className="shadow bg-red hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold p-2 px-4 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Send
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" className="form-checkbox" />
            <span>Details should be sent to your Email?</span>
          </label>
        </div>

        <p className="my-4 text-gray-600 text-center">OR</p>

        <div className="flex items-center space-x-4 justify-center">
          <FontAwesomeIcon icon={faGoogle} className="text-blue-600 text-2xl" />
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-blue-800 text-2xl"
          />
          <div style={{ fontSize: "2rem" }}>⊕</div>
        </div>

        <h6 className="text-center mt-4 text-gray-600">
          Already have an account? <a className="text-red">Sign in</a>
        </h6>
      </div>
    </div>
  );
}

export default SavePropertyPopUp;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";

interface SavePropertyPopUpProps {
  onClose: () => void;
}

function SavePropertyPopUp(props: SavePropertyPopUpProps) {
  const { onClose } = props;
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 201) {
        alert("Email sent successfully");
        onClose();
      } else {
        const data = await response.json();
        console.error('Error saving email:', data.message);
        alert(`Error: ${data.message}`); 
      }
    } catch (error) {
      console.error('Error saving email:', error);
      alert("An error occurred");
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-platinum w-2/3 max-w-screen-lg p-8 rounded-lg shadow-lg pb-24 pt-24">
        <div className="flex pb-4 pl-12">
          <div className="flex justify-end w-1/2" style={{ fontSize: "3rem" }}>
          <FontAwesomeIcon
            icon={faHouseChimney}
          />
          </div>

          <button
            onClick={handleClose}
            className="flex justify-end w-1/2 pr-8 pb-8"
            style={{ fontSize: "1.5rem" }}
          >
            ❌
          </button>
        </div>

        <h2 className="text-3xl font-semibold flex justify-center text-darkgrey">
          Save the Property
        </h2>

        <form className="flex gap-4 w-full p-8 px-24 rounded-lg">
          <div className="w-full">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded p-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            className="shadow bg-red hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold p-2 px-4 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>

        <div className="flex justify-center mt-4 text-black">
          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" className="form-checkbox" />
            <span>Details should be sent to your Email?</span>
          </label>
        </div>

        <p className="my-4 text-black text-center">OR</p>
        <p className="text-center">Login with</p>

        <div className="flex items-center space-x-4 justify-center">
          <FontAwesomeIcon icon={faGoogle} className=" text-2xl" />
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-2xl"
          />
          <div style={{ fontSize: "2rem" }}>⊕</div>
        </div>

        <h6 className="text-center mt-4 text-black">
          Already have an account? <a className="text-red pl-4">Sign in</a>
        </h6>
      </div>
    </div>
  );
}

export default SavePropertyPopUp;

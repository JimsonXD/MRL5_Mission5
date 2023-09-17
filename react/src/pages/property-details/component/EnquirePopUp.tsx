import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface EnquirePopUpProps {
  onClose: () => void;
}

function EnquirePopUp(props: EnquirePopUpProps) {
  const { onClose } = props;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancelButtonClick = () => {
    onClose();
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend API
      await axios.post("http://localhost:8080/api/enquire-now", formData);

      // Display a success message or close the popup
      alert("Enquiry submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Error submitting enquiry. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-primary w-full max-w-screen-lg">
        <form className="w-full bg-platinum p-8" onSubmit={handleFormSubmit}>
          <div className="flex flex-wrap -mx-4 mb-6">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 mb-6">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 mb-6">
            <div className="w-full px-4">
              <textarea
                placeholder="Message"
                className="no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="flex justify-center gap-4 md:w-1/3">
              <button
                className="shadow btn-outline hover:bg-teal-400 focus:shadow-outline focus:outline-none text-red bg-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={handleCancelButtonClick}
              >
                Cancel
              </button>
              <button
                className="shadow bg-red hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnquirePopUp;

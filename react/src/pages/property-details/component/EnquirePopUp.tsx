import React from "react";

function EnquirePopUp(props: { onClose: any; }) {

    const { onClose } = props;

    const handleCancelButtonClick = () => {
      onClose();
    };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-primary w-full max-w-screen-lg">
        
        <form className="w-full bg-platinum p-8">
          <div className="flex flex-wrap -mx-4 mb-6">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 mb-6">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-4 mb-6">
            <div className="w-full px-4">
              <textarea
                placeholder="Message"
                className="no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
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
                type="button"
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

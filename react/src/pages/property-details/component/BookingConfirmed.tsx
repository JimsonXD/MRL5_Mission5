import React from "react";
import "./styles.css";

interface BookingConfirmedProps {
  onClose: () => void;
}

const BookingConfirmed = (props: BookingConfirmedProps) => {
  return (
    <div className="bg-white py-12 px-16 mt-24">
      <div className="bg-gray-300 flex flex-col items-center justify-center mx-16 rounded-lg bg-image">
        <div className="flex ml-80 pl-80 mt-12">
          <button
            className="btn-lg bg-lightgrey rounded-lg"
            onClick={props.onClose} 
          >
            ❌
          </button>
        </div>

        <div className="bg-white opacity-70 my-12 rounded-md p-12 text-center text-black">
          <h1>Thank you!!!</h1>
          <h2 className="text-red">Booking Confirmed</h2>
          <h3>
            <div className="img p-10 justify-center ml-28 mt-4"></div>
            See you on
          </h3>

          <br />

          <h3 className="text-red">Sunday, 9th September</h3>
          <h3 className="pt-4">11:00am - 12:00pm</h3>
        </div>

        <div className="flex gap-8 mb-24">
          <button className="btn-secondary bg-red btn-md px-4 mt-6 text-lg rounded-md">
            Back to Home
          </button>
          <button className="btn-secondary bg-red btn-md px-4 mt-6 text-lg rounded-md mb-12">
            View More Rental Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmed;

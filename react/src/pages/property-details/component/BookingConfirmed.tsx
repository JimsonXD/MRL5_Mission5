import React, { useEffect, useState } from "react";
import "./styles.css";

interface BookingConfirmedProps {
  onClose: () => void;
}

interface Booking {
  _id: string;
  firstName: string;
  lastName: string;
  selectedDate: string;
  selectedTime: string;
  // Add other properties as needed
}

const BookingConfirmed = (props: BookingConfirmedProps) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Define a function to fetch bookings
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/bookings"); // Assumes the frontend and backend are served from the same domain

        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        } else {
          console.error("Failed to fetch bookings");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    // Call the fetchBookings function to load bookings when the component mounts
    fetchBookings();
  }, []);

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
          {/* <hr></hr><div className="img p-10 justify-center ml-25 mt-4"></div> */}

          <br />

          {/* Render your bookings here */}
          {bookings.map((booking) => (
            <div key={booking._id}>
              {/* Display individual booking data */}
              <h3>
                {booking.firstName} {booking.lastName}
              </h3>

              <h3>
          
            See you on
          </h3>
              
              <p>Date: {booking.selectedDate}</p>
              <p>Time: {booking.selectedTime}</p>
            </div>
          ))}

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
    </div>
  );
};

export default BookingConfirmed;

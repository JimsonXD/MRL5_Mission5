import React, { useEffect, useState } from "react";

interface BookingConfirmedProps {
  onClose: () => void;
}

interface Booking {
  _id: string;
  firstName: string;
  lastName: string;
  selectedDate: string;
  selectedTime: string;
}

const BookingConfirmed = (props: BookingConfirmedProps) => {
  const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const fetchCurrentBooking = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/bookings");

        if (response.ok) {
          const data = await response.json();

          if (data.length > 0) {
            const mostRecentBooking = {
              ...data[0],
              selectedDate: data[0].selectedDate.split("T")[0],
            };

            setCurrentBooking(mostRecentBooking);
          } else {
            setCurrentBooking(null);
          }
        } else {
          console.error("Failed to fetch bookings");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchCurrentBooking();
  }, []);

  return (
    <div className="bg-white py-12 px-16 mt-24">
      <div
        className="bg-gray-300 flex flex-col items-center justify-center mx-16 rounded-lg "
        style={{
          backgroundImage:
            "url('https://www.vidyard.com/media/real-estate-video-marketing-1920x1080-1-1024x576.jpg')",
          backgroundSize: "cover",
        }}
      >
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
          {currentBooking ? (
            <>
              <h2 className="text-red">Booking Confirmed</h2>
              <br />
              <div key={currentBooking._id}>
                <h3>
                  {currentBooking.firstName} {currentBooking.lastName}
                </h3>

                <h3>See you on</h3>

                <p>Date: {currentBooking.selectedDate}</p>
                <p>Time: {currentBooking.selectedTime}</p>
              </div>
            </>
          ) : (
            <h2 className="text-red">No current booking found</h2>
          )}

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

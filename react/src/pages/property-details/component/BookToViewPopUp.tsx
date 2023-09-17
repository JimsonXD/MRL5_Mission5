import React, { useState } from "react";
import BookingConfirmed from "./BookingConfirmed";

interface BookToViewPopUpProps {
  onClose: () => void;
}

function BookToViewPopUp(props: BookToViewPopUpProps) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [bookingConfirmedVisible, setBookingConfirmedVisible] = useState<boolean>(
    false
  );

  const addToPlanner = async () => {
    // Ensure all required fields are filled
    if (!firstName || !lastName || !phoneNumber || !email || !selectedDate || !selectedTime) {
      alert("All fields are required.");
      return;
    }

    // Prepare the data to send to your backend
    const dataToSend = {
      firstName,
      lastName,
      phoneNumber,
      email,
      selectedDate,
      selectedTime,
    };

    // You can use the fetch API or your preferred library to send a POST request to your backend
    try {
      const response = await fetch("http://localhost:8080/api/book-to-view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.status === 201) {
        // Booking was successful, you can handle the confirmation here
        setBookingConfirmedVisible(true);
      } else {
        alert("Booking failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error booking:", error);
      alert("Booking failed. Please try again later.");
    }
  };

  const handleCancelButtonClick = () => {
    props.onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {bookingConfirmedVisible ? (
        <BookingConfirmed onClose={() => setBookingConfirmedVisible(false)} />
      ) : (
        <div className="bg-primary w-full max-w-screen-lg">
          <form className="w-full bg-platinum p-8">
            <div>
              <div className="flex flex-wrap -mx-4 mb-6">
                <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-4 mb-6">
                <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-phone-number"
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between px-3 mb-2 popup-content">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <br />
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
              <br />
              <button onClick={addToPlanner}>Add to Planner</button>
            </div>
            <div className="flex justify-between px-3 mb-2 popup-content">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <br />
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
              <br />
              <button onClick={addToPlanner}>Add to Planner</button>
            </div>
            <div className="flex justify-between px-3 mb-2 popup-content">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <br />
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
              <br />
              <button onClick={addToPlanner}>Add to Planner</button>
            </div>

            <div className="md:flex md:items-center">
              <div className="flex justify-center gap-4 md:w-1/3 pt-8">
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
                  onClick={addToPlanner}
                >
                  Book
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default BookToViewPopUp;

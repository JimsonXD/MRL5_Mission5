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
  const [selectedDate1, setSelectedDate1] = useState<string>("");
  const [selectedTime1, setSelectedTime1] = useState<string>("");
  const [selectedDate2, setSelectedDate2] = useState<string>("");
  const [selectedTime2, setSelectedTime2] = useState<string>("");
  const [selectedDate3, setSelectedDate3] = useState<string>("");
  const [selectedTime3, setSelectedTime3] = useState<string>("");
  const [bookingConfirmedVisible, setBookingConfirmedVisible] = useState<boolean>(
    false
  );

  const addToPlanner = async (date: string, time: string) => {
    if (!firstName || !lastName || !phoneNumber || !email || !date || !time) {
      alert("All fields are required.");
      return;
    }

    const dataToSend = {
      firstName,
      lastName,
      phoneNumber,
      email,
      selectedDate: date,
      selectedTime: time,
    };

    try {
      const response = await fetch("http://localhost:8080/api/book-to-view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.status === 201) {
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
              <div className="text-center pb-4">
                <h4>Book Viewing Time</h4>
              </div>
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
              <label htmlFor="date1">Date:</label>
              <input
                type="date"
                id="date1"
                value={selectedDate1}
                onChange={(e) => setSelectedDate1(e.target.value)}
              />
              <br />
              <label htmlFor="time1">Time:</label>
              <input
                type="time"
                id="time1"
                value={selectedTime1}
                onChange={(e) => setSelectedTime1(e.target.value)}
              />
              <br />
              <button onClick={() => addToPlanner(selectedDate1, selectedTime1)}>Add to Planner</button>
            </div>
            <div className="flex justify-between px-3 mb-2 popup-content">
              <label htmlFor="date2">Date:</label>
              <input
                type="date"
                id="date2"
                value={selectedDate2}
                onChange={(e) => setSelectedDate2(e.target.value)}
              />
              <br />
              <label htmlFor="time2">Time:</label>
              <input
                type="time"
                id="time2"
                value={selectedTime2}
                onChange={(e) => setSelectedTime2(e.target.value)}
              />
              <br />
              <button onClick={() => addToPlanner(selectedDate2, selectedTime2)}>Add to Planner</button>
            </div>
            <div className="flex justify-between px-3 mb-2 popup-content">
              <label htmlFor="date3">Date:</label>
              <input
                type="date"
                id="date3"
                value={selectedDate3}
                onChange={(e) => setSelectedDate3(e.target.value)}
              />
              <br />
              <label htmlFor="time3">Time:</label>
              <input
                type="time"
                id="time3"
                value={selectedTime3}
                onChange={(e) => setSelectedTime3(e.target.value)}
              />
              <br />
              <button onClick={() => addToPlanner(selectedDate3, selectedTime3)}>Add to Planner</button>
            </div>
            <div className="md:flex md:items-center py-4 flex justify-center gap-4">
              <button
                className="shadow btn-outline border-1 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-red bg-white font-bold py-2 px-12 rounded"
                type="button"
                onClick={handleCancelButtonClick}
              >
                Cancel
              </button>
              <button
                className="shadow bg-red hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded"
                type="button"
                onClick={() => addToPlanner(selectedDate1, selectedTime1)}
              >
                Book
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default BookToViewPopUp;

const mongoose = require('mongoose');
const Booking = require('../models/bookingModel');

exports.bookToView = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      selectedDate,
      selectedTime,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email ||
      !selectedDate ||
      !selectedTime
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const currentTime = Date.now();

    const newBooking = new Booking({
      firstName,
      lastName,
      phoneNumber,
      email,
      selectedDate,
      selectedTime,
      timestamp: currentTime,
    });

    await newBooking.save();

    return res.status(201).json({ message: 'Booking saved successfully' });
  } catch (error) {
    console.error('Error saving booking to MongoDB:', error);
    return res.status(500).json({ message: 'Error saving booking to MongoDB' });
  }
};

exports.getBookings = async (req, res) => {
  try {
   
    const bookings = await Booking.find({});

 
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error retrieving bookings:', error);
    res.status(500).json({ message: 'Error retrieving bookings' });
  }
};

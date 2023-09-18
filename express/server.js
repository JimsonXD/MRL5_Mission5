const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mydb';

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json()); // Enable JSON request body parsing

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is used in when user like to saved the property and click the heart section and fill out form
const emailSchema = new mongoose.Schema({
  email: String,
});
// This is used in when user like to saved the property and click the heart section and fill out form
const Email = mongoose.model('Email', emailSchema);
// This is used in when user like to saved the property and click the heart section and fill out form
app.post('/api/save-email', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const currentTime = Date.now(); // Get the current timestamp in milliseconds

    const newEmail = new Email({ email, timestamp: currentTime }); // Add timestamp to your MongoDB document
    await newEmail.save();

    return res.status(201).json({ message: 'Email saved successfully' });
  } catch (error) {
    console.error('Error saving email to MongoDB:', error);
    return res.status(500).json({ message: 'Error saving email to MongoDB' });
  }
});

//////////////////////////////////////////////////////
//-this is for enquire pop-up on property details
const enquireSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  message: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Enquire = mongoose.model('Enquire', enquireSchema);

app.post('/api/enquire-now', async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email, message } = req.body;

    // Check if all required fields are provided
    if (!firstName || !lastName || !phoneNumber || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const currentTime = Date.now();

    const newEnquire = new Enquire({
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
      timestamp: currentTime,
    });

    await newEnquire.save();

    return res.status(201).json({ message: 'Enquiry saved successfully' });
  } catch (error) {
    console.error('Error saving enquiry to MongoDB:', error);
    return res.status(500).json({ message: 'Error saving enquiry to MongoDB' });
  }
});
////////////////////////////////////////////////////////////////////////////////////////

//Book to View Data//
const bookingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  selectedDate: Date, // Store the selected date as a Date object
  selectedTime: String, // Store the selected time as a string
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

app.post('/api/book-to-view', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      selectedDate,
      selectedTime,
    } = req.body;

    // Check if all required fields are provided
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
});

//getting the data from database
app.get('/api/bookings', async (req, res) => {
  try {
    // Fetch all bookings from the database
    const bookings = await Booking.find({});

    // Return the bookings as JSON response
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error retrieving bookings:', error);
    res.status(500).json({ message: 'Error retrieving bookings' });
  }
});

//////////////////////////////Property Owners Page////////////////////////////

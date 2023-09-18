const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Property = require('./models/property');

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

// Define a Mongoose schema for emails
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create a Mongoose model based on the schema
const Email = mongoose.model('Email', emailSchema);

// Define the POST endpoint to save the email
app.post('/api/save-email', async (req, res) => {
  try {
    // Extract the email from the request body
    const { email } = req.body;

    // Perform any necessary validation here (e.g., check if email is valid)

    // Create a new Email document and save it to the database
    const newEmail = new Email({ email });
    await newEmail.save();

    // Send a success response
    res.status(201).json({ message: 'Email saved successfully' });
  } catch (error) {
    console.error('Error saving email:', error);
    res.status(500).json({ message: 'An error occurred' });
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
/////////////////////////////////////////////////////////////////////////////////

const tenancyDetailsSchema = new mongoose.Schema({
  addressOfTenancy: String,
  rent: String,
  bond: String,
});

const TenancyDetails = mongoose.model('TenancyDetails', tenancyDetailsSchema);

// Create a route for handling POST requests from your React component
app.post('/api/submittenancydetails', async (req, res) => {
  try {
    const formData = req.body;

    // Create a new document in the MongoDB collection
    const newTenancyDetails = new TenancyDetails(formData);
    await newTenancyDetails.save();

    // Respond with a success message
    res.status(201).json({ message: 'Form data submitted successfully' });
  } catch (error) {
    console.error('An error occurred while submitting the form:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

//////////////////////////////Property Owners Page////////////////////////////
app.get('/api/properties', async (req, res) => {
  try {
    const properties = await Property.find();

    if (!properties || properties.length === 0) {
      return res
        .status(404)
        .json({ message: 'No properties found in the database' });
    }

    return res.json(properties);
  } catch (error) {
    console.error('Error fetching properties from MongoDB:', error);
    return res
      .status(500)
      .json({ message: 'Error fetching properties from MongoDB' });
  }
});

app.get('/api/properties/:id', async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  try {
    const property = await Property.findOne({ _id: id });

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json(property);
  } catch (error) {
    console.error('Error fetching property from MongoDB:', error);
    return res
      .status(500)
      .json({ message: 'Error fetching property from MongoDB' });
  }
});

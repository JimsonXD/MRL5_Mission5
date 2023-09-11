const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = 'mongodb://mongodb:27017/mydb'; // Update the MongoDB URI

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1); 
  });

const messageSchema = new mongoose.Schema({
  message: String,
});

const Message = mongoose.model('Message', messageSchema);

app.get('/api/message', async (req, res) => {
  try {
    const messageDoc = await Message.findOne();
    console.log('messageDoc:', messageDoc);

    if (!messageDoc) {
      return res.status(404).json({ message: 'Message not found in the database' });
    }

    return res.json(messageDoc);
  } catch (error) {
    console.error('Error fetching message from MongoDB:', error);
    return res.status(500).json({ message: 'Error fetching message from MongoDB' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

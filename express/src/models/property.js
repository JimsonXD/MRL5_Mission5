const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  id: String,
  imageUrl1: String,
  imageUrl2: String,
  imageUrl3: String,
  imageUrl4: String,
  imageUrl5: String,
  price: String,
  address: String,
  bedrooms: Number,
  bathrooms: Number,
  parking: Number,
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;

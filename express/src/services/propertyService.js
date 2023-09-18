const Property = require('../models/property')

exports.getAllProperties = async () => {
  return await Property.find();
};

exports.getPropertyById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }
  return await Property.findOne({ _id: id });
};

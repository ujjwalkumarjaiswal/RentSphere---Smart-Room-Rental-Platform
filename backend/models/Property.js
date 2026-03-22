const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  rent: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  images: [
    {
      type: String
    }
  ],
  verified: {
    type: Boolean,
    default: false
  },
  available: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Property", propertySchema);
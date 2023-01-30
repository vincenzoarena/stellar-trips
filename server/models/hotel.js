import mongoose from "mongoose";

const { Schema, model } = mongoose;

const HotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    //ground station/orbital-hotel
    type: String,
    required: true,
  },
  planet: {
    name: String,
    address: String, //Invented address on Planet
    satelliteWire: Number,
    solarSystemCode: String,
    planetoCentric: String, //IAu-accepted coordinate system for the planets & satellites
    planetoGraphic: String,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  rooms: {
    type: [String], //room ID's
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Hotel = model("hotel", HotelSchema);

export default Hotel;

// Question: 1. how to make, that the start and end date are in a coherent order. How to mark a period allready booked.

import mongoose from "mongoose";

const { Schema, model } = mongoose;

const flightSchema = new Schema({
  spaceAgency: {
    type: String,
    enum: ["Virgin-Galactic", "Enterprise", "Galaxy-Express"],
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    unique: true,
    required: true,
  },
  departs: {
    type: Date,
    default: function () {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth();
      let day = d.getDate();
      let result = new Date(year, month, day + 1);
      return result;
    },
  },
  spaceStation: {
    //The satellites of the planets included are just the biggest
    type: String,
    enum: ["Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    required: true,
  },
  destinations: {
    type: String,
    enum: ["Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    required: true,
  },
});

const Flight = model("Flight", flightSchema);

export default Flight;

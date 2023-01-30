import mongoose from "mongoose";

const { Schema, model } = mongoose;

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  roomSize: {
    type: Number,
    required: true,
  }, //always in m²
  sleeps: {
    type: Number,
    min: 1,
    max: 4,
    required: true,
  },
  bedSize: {
    type: String,
    enum: ["SMALL", "MEDIUM", "LARGE"],
    default: "SMALL",
  },
  view: {
    type: String,
    enum: ["CRATERS", "MOUNTAIN", "DESERT", "VOLCANOES"],
    default: "CRATERS",
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  roomNumbers: [
    {
      number: Number,
      unavailableDates: { type: [Date] },
    },
  ],
});

const Room = model("room", roomSchema);

export default Room;

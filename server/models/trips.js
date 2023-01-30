import mongoose from "mongoose";

const { Schema, model } = mongoose;

const tripsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    enum: ["Hiking-Trip", "Rover-Adventure"],
    required: true,
  },
  destination: {
    enum: ["Desert", "Craters", "Volcanoes", "Atmosphere"],
    required: true,
  },
  equipment: {
    enum: ["Oxygen", "Pressurized-Box", "Pressure-stabilized-Tent"],
    default: "OxygenTank",
  },
  duration: {
    start: Date,
    end: Date,
    required: true,
    min: 2,
    max: 20,
  },
});

const Trip = model("trip", tripsSchema);

export default Trip;

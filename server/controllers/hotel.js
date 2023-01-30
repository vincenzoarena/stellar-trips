import express from "express";
import hotel from '../models/hotel.js'; 
import room from '../models/room.js'; 

//CREATE A NEW HOTEL
export const createHotel = async (req, res) => {
    const newHotel = new hotel(req.body); 

    try {
        const savedHotel = await newHotel.save(); 
        res.status(200).json(savedHotel);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
};

//UPDATE AN EXISTING HOTEL
export const updateHotel = async (req, res) => {

    try {
        const updatedHotel = await hotel.findByIdAndUpdate(req.params.id,
            {$set: req.body}, 
            {new: true}            
            );
            res.status(200).json(updatedHotel);             
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
};

//DELETE HOTEL
export const deleteHotel = async (req, res) => {
    try {
        await hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel deleted.")
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}; 

//GET HOTEL
export const getHotels = async (req, res) => {
    const { min, max, ...others} = req.query;
    try {
        const hotels = await hotel.find({
            ...others,
            cheapestPrice: {$gt: min | 1, $lt: max || 999}, }).limit(req.query.limit);
            res.status(200).json(hotels);
        }catch (error) {
            return res.status(500).json({message:error.message})
    }   
};

//LIST BY PLANET
export const countByCity = async (req, res) => {
    const planets = req.query.planets.split(",");
    try {
      const list = await Promise.all(
        planets.map((planet) => {
          return hotel.countDocuments({ planet: planet });
        })
      );
      res.status(200).json(list);
    } catch (error) {
      return res.status(500).json({message:error.message})
    }
  };

//COUNT BY TYPE
export const countByTipe = async (req, res) => {
    try {
        //returns the number of documents in the collection that match the specified query.
        const groundStationCount = await hotel.countDocuments({ type: "groundStation"}); 
        const basicCabin = await hotel.countDocuments({ type: "basicCabin"});
        const marsVilla = await hotel.countDocuments({ type: "marsVilla"});
        const orbitalHotel = await hotel.countDocuments({ type: "orbitalHotel"});
        const spaceCraftVilla = await hotel.countDocuments({ type: "orbitalVilla"}); 

        res.status(200).json([
            { type: "groundStation", count: groundStationCount },
            { type: "basicCabin", count: basicCabin},
            { type: "marsVilla", count: marsVilla},
            { type: "orbitalHotel", count: orbitalHotel},
            { type: "orbitalVilla", spaceCraftVilla},
        ]); 
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}; 

//GET HOTEL ROOMS
export const getHotelRooms = async (req, res) => {
    try {
      const hotel = await hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (error) {
      return res.status(500).json({message:error.message});
    }
  };
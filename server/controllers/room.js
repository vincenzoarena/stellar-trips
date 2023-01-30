import room from "../models/room.js";
import hotel from "../models/hotel.js"; 

//CREATE A ROOM
export const createRoom = async (req, res) => {
    const hotelId = req.params.hotelid;
    const newRoom = new room(req.body);
  
    try {
      const savedRoom = await newRoom.save();
      try {
        await hotel.findByIdAndUpdate(hotelId, {
          $push: { rooms: savedRoom._id },
        });
      } catch (error) {
        return res.status(500).json({message:error.message});
      }
      res.status(200).json(savedRoom);
    } catch (error) {
      return res.status(500).json({message:error.message});
    }
  };

  //UPDATE A ROOM
  export const updateRoom = async (req, res) => {
    try {
      const updatedRoom = await room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRoom);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
  };

  //UPDATE ROOM AVAILABILITY
  export const updateRoomAvailability = async (req, res) => {
    try {
      await room.updateOne(
        { "roomNumbers._id": req.params.id },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates
          },
        }
      );
      res.status(200).json("New Room status added.");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
  };

  //DELETE ROOM
  export const deleteRoom = async (req, res) => {
    const hotelId = req.params.hotelid;
    try {
      await room.findByIdAndDelete(req.params.id);
      try {
        await hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (error) {
        return res.status(500).json({message:error.message});
      }
      res.status(200).json("Room has been deleted.");
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
  };

  //GET ROOM BY ID
  export const getRoom = async (req, res) => {
    try {
      const room = await room.findById(req.params.id);
      res.status(200).json(room);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
  }; 
  //GET ROOMS
  export const getRooms = async (req, res) => {
    try {
      const rooms = await room.find();
      res.status(200).json(rooms);
    } catch (error) {
      return res.status(500).json({message:error.message});
    }
  };
import express from "express";
import { createRoom, updateRoom, updateRoomAvailability, deleteRoom, getRoom, getRooms } from "../controllers/room.js";

const router = express.Router();

//later put the verifyAdmin: router.post("/:hotelid", verifyAdmin, createRoom); 

//CREATE
router.post("/:hotelid", createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", updateRoom);

//DELETE
router.delete("/:id/:hotelid", deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);


export default router;
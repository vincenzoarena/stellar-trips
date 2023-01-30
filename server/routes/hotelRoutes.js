import express from "express";
import {
  getHotels,
  createHotel,
  updateHotel,
  deleteHotel,
} from "../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/create", createHotel);

//UPDATE
router.patch("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

//GET
//router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);

export default router;

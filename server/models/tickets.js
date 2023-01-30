//Ticket Schema - references associated flight
import mongoose from "mongoose"; 

const { Schema, model } = mongoose;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/      
    },
    price: {
        type: Number,
        min: 0
    }, 
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }
})

const Ticket = model("ticket", ticketSchema); 

export default Ticket


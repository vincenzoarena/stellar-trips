import mongoose from "mongoose";

const {Schema, model} = mongoose; 

const package = new Schema({
    name: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    
})

const orders = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, 
    package: {
        ref: ""
    }, 
    date: {
        type: Date, 
        default: Date.now, 
    }
})
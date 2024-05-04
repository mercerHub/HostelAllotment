import mongoose ,{Schema} from "mongoose";

const hostelSchema = new Schema({
    hostelName: {
        type: String,
        required: true,
        unique: true,
        index:true
    },
    capacity: {
        type: Number,
        required: true,
        min: 1
    },
    hostelType: {
        type: String,
        enum: ["M","F"],
        required: true
    },
    index: {
        type: Number,
        required:true,
        unique:true
    },
    currentOccupancy: {
        type: Number,
        required: true,
        default:0,
        min: 0
    }
})

export const Hostel = mongoose.model("Hostel",hostelSchema);
import mongoose, {Schema, Types} from "mongoose";

const studentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim:true,
            index:true
        },
        rollNumber: {
            type: String,
            required: true,
            index: true,
        },
        year: {
            type: String,
            required: true,
        },
        branch: {
            type: String,
            required: true
        },
        cgpa: {
            type: Number,
            min: 0,
            max: 10
        },
        hostelAlloted: {
            type: String,
            default:"Not alloted yet"
        },
        gender: {
            type: String,
            enum: ['M','F'],
            required: true
        }
    },
    {timestamps:true}
)

export const Student = mongoose.model("Student",studentSchema);
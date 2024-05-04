import { Student } from "../models/student.model.js";
import { Hostel } from "../models/hostel.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const allotment = asyncHandler(async (req, res) => {
    const boysData = await Student.find({ gender: "M" }).sort({ cgpa: -1 });
    const girlsData = await Student.find({ gender: "F" }).sort({ cgpa: -1 });
    
    const boysHostel = await Hostel.find({ hostelType: "M" }).sort({ index: 1 });
    const girlsHostel = await Hostel.find({ hostelType: "F" }).sort({ index: 1 });


    const boysAllotment = allotStudents(boysData, boysHostel);
    const girlsAllotment = allotStudents(girlsData, girlsHostel);

    console.log(boysAllotment);
    console.log(girlsAllotment);

    res.status(200).json({ boys: boysAllotment, girls: girlsAllotment });
});

const allotStudents = (students, hostels) => {
    const allotmentResult = [];
    for(let hostel of hostels) hostel.currentOccupancy = 0;
    students.forEach(async (student) => {
        const availableHostel = hostels.find(hostel => hostel.currentOccupancy < hostel.capacity);
        if (!availableHostel) {
            allotmentResult.push({
                student: student.name,
                message: "No hostel available"
            });
        } else {
            student.hostelAlloted = availableHostel.hostelName
            availableHostel.currentOccupancy++;
            allotmentResult.push({
                student: student.name,
                hostel: availableHostel.hostelName
            });
        }
        await student.save();
    });

    // Update hostels in the database
    hostels.forEach(async (hostel) => await hostel.save());

    return allotmentResult;
};


export default allotment;

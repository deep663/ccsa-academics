const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    userType: {
        type: String,
        default: "student",
    },
    name: {
        type: String,
        required: [true, "Please add a name"],
    },
    rollNo: {
        type: String,
        required: [true, "Please add a rollNo"],
        unique: [true, "RollNo already exists"],
    },
    course: {
        type: String,
        required: [true, "Please add a course"],
    },
    semester: {
        type: String,
        required: [true, "Please add a semester"],
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: [true, "Email already exists"],
    },
    phoneNo: {
        type: String,
        required: [true, "Please add a phoneNo"],
        unique: [true, "PhoneNo already exists"],
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
    }
},
{
    timestamps: true,
}); 

module.exports = mongoose.model("Student", studentSchema)
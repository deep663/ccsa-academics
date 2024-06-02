const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
    Id: {
        type: String,
        required: [true, "Please add an Id"],
        unique: [true, "Id already exists"],
    },
    name: {
        type: String,
        required: [true, "Please add a name"],
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

module.exports = mongoose.model("Teacher", teacherSchema)
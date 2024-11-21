const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    rollNo: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: String, required: true },
    address: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentSchema);
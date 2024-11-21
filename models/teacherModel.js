const mongoose = require("mongoose");

 const teacherSchema = new mongoose.Schema({
     empId: { type: Number, required: true, unique: true },
     name: { type: String, required: true },
     age: { type: String, required: true },
     address: { type: String, required: true },
     highestQualification: { type: String },
     experience: { type: Number },
 });

 module.exports = mongoose.model("Teacher", teacherSchema);
const express = require("express");
const router = express.Router();

const {
    getAllStudents,
    getStudentById,
    saveStudent,
    updateStudent,
    deleteStudentById,
} = require("../controllers/studentController");

router.get("/getAllStudents", getAllStudents);
router.get("/getStudentById/:id", getStudentById);
router.post("/saveStudent", saveStudent);
router.put("/updateStudent/:id", updateStudent);
router.delete("/deleteStudentById/:id", deleteStudentById);

module.exports = router;
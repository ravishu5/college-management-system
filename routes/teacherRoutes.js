const express = require("express");
const router = express.Router();

const {
    getAllTeachers,
    getTeacherById,
    saveTeacher,
    updateTeacher,
    deleteTeacherById,
} = require("../controllers/teacherController");

// GET all teachers
router.get("/getAllTeachers", getAllTeachers);

// GET a teacher by ID
router.get("/getTeacherById/:id", getTeacherById);

// POST a new teacher
router.post("/saveTeacher", saveTeacher);

// PUT to update a teacher by ID
router.put("/updateTeacher/:id", updateTeacher);

// DELETE a teacher by ID
router.delete("/deleteTeacherById/:id", deleteTeacherById);

module.exports = router;
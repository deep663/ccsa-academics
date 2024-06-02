const express = require("express");
const router = express.Router();
const { registerTeacher, loginTeacher } = require("../controllers/teacherController");
const { registerStudent, loginStudent } = require("../controllers/studentController");
const validateToken = require("../middleware/validateTokenHandler");


router.route("/teacherRegister").post(registerTeacher);
router.route("/teacherLogin").post(loginTeacher);
router.route("/studentRegister").post(registerStudent);
router.route("/studentLogin").post(loginStudent);


module.exports = router;
const express = require("express");
const router = express.Router();
const { registerTeacher, loginTeacher, getTeacher, updateTeacher } = require("../controllers/teacherController");
const { registerStudent, loginStudent, getStudent, updateStudent } = require("../controllers/studentController");
const validateToken = require("../middleware/validateTokenHandler");


router.route("/teacherRegister").post(registerTeacher);
router.route("/teacherLogin").post(loginTeacher);
router.route("/teacher").get(validateToken, getTeacher);
router.route("/teacher").put(validateToken, updateTeacher);

router.route("/studentRegister").post(registerStudent);
router.route("/studentLogin").post(loginStudent);
router.route("/student").get(validateToken, getStudent);
router.route("/student").put(validateToken, updateStudent);


module.exports = router;
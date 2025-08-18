const studentController = require('../controllers/student.controller.js')
const express = require('express')
const router = express.Router()

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.getAllStudents);
router.get('/:id', studentController.getAllStudents);

module.exports = router;
const student = require('../models/student.model.js')

async function createStudent(req, res){
    try {
        const {id ,name, grade} = req.body
        const newStudent = new student({
            id,
            name,
            grade
        })
        const savedStudent = await newStudent.save()
        res.status(201).json(savedStudent)
    }catch(error){
        res.status(400).json({messsage: error.message})
    }
}

async function getAllStudents(req, res){
    try{
        const students = await student.find()
        res.status(200).json(students)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

async function getStudentById(req, res) {
  try {
    const foundStudent  = await student.findOne({id : req.params.id});
    if (!foundStudent ) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json(foundStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateStudent(req, res) {
  try {
    const updatedStudent = await student.findOneAndUpdate(
      {id: req.params.id},
      req.body,
      { new: true, runValidators: true } 
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteStudent(req, res) {
  try {
    const deletedStudent = await student.findOneAndDelete({id : req.params.id});
    if (!deletedStudent) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};
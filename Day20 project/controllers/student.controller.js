const student = require('../models/student.model.js')

exports.getAllStudents = (req,res) =>{
    res.status(200).json(student.getAll())
}
exports.getStudentById = (req,res) =>{
    if(student.getById(parseInt(req.params.id))){
        res.status(200).json(student.getById(parseInt(req.params.id)))
    }else{
        res.status(404).json('user not found')
    }
}
exports.createStudent = (req,res) =>{
    try{
        res.status(201).json(student.create(req.body))
    }catch(error){
        res.status(500).json('server error')
    }
}
exports.updateStudent = (req,res) =>{
    if(student.update(req,params.id , req.body)){
        res.status(201).json(student.update(req,params.id , req.body))
    }else{
        res.status(404).json('error')
    }
    
}
exports.removeStudent = (req,res) =>{
    try{
        res.status(201).json(student.remove(parseInt(req.params.id)))
    }catch(error){
        res.status(404).json('error')
    }
}
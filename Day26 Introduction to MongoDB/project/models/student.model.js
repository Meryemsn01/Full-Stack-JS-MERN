const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  id: {
    type: Number, 
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  grade: {
    type: Number,
    required: true
  }
}, {
  timestamps: true 
});

const Post = mongoose.model('student', studentSchema);

module.exports = Post;


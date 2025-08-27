const express = require('express');
const app = express();
const mongoose = require('mongoose')

const studentRoutes = require('./routes/student.routes.js')
const dbURL = 'mongodb://127.0.0.1:27017/mydb'

app.use(express.json()); 

app.use('/students', studentRoutes);


app.listen(3000, () => {
    console.log('server is listning in 3000')
});

mongoose.connect(dbURL)
.then(()=>console.log('Connected to MongoDB successfully!'))
.catch((error)=>console.log('MongoDB connection error:', error))



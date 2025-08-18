const express = require('express');
const app = express();

const studentRoutes = require('./routes/student.routes.js')


app.use('/students', studentRoutes);


app.listen(3000, () => {
    console.log('server is listning in 3000')
});
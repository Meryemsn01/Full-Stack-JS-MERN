const express = require('express')
const app = express()

const port = 3000

app.use((req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next()
})

app.use((req, res, next) => {
  const isAuth= true;
  if (isAuth) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/users', (req, res) => {
  console.log('Handling the /users route');
  res.send('Hello, this is the response!');
});

app.listen(port,(req,res)=>{
    console.log('server is running in 3000')
})
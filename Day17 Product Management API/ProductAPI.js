const express = require('express')
const app = express()

const port = 3000

let products = [
  { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
  { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
  { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
  { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
  { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];

app.listen(port,()=>{
    console.log(`server is running in ${port}`)
})

app.get('/products',(req,res)=>{
    res.send(products)
})

app.get('/products/search' , (req,res)=>{
    const {maxPrice} = req.query
    const {minPrice} = req.query
    
    res.send(products.filter(pro => pro.price > minPrice && pro.price < maxPrice))
})

app.get('/products/:id',(req,res)=>{
    res.send(products.filter(product => product.id == req.params.id))
})

app.post('/products',(req,res)=>{
    const newProd = req.body
    products.push
})







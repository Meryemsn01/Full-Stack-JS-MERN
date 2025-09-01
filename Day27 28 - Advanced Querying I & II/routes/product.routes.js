const productController = require('../controllers/product.controller.js')
const express = require('express')
const router = express.Router()

router.get('/',productController.getAllProducts)
router.get('/productStock', productController.getStockProduct)

module.exports = router
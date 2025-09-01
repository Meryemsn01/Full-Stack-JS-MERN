const product = require('../models/ProductModel.js')

exports.getAllProducts = async(req, res) =>{
    try{
        const products = await product.find().sort({price: -1}).limit(5)
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({message : error.message})
    }
}


exports.getStockProduct = async (req, res) => {
  try {
    const result = await product.aggregate([
      {$match: {inStock: true}},
      {
        $group: {
          _id: null, 
          count: { $sum: 1 } 
        }
      }
    ]);
    res.status(200).json({count: result[0].count})
  } catch (error) {
    console.error('Error counting products in stock:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

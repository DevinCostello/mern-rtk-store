const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// @desc Get products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {

    console.log(req.query);
    
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    console.log(page, limit)
    console.log(req.query.category)

    const queryStr = {
        category: req.query.category || null,
        price: req.query.price || null
    }

    const products = await Product.find()
    .limit(limit)
    .skip((page - 1) * limit)
    .sort(null)   
    res.status(200).json(products)

})

// @desc Get product by id
// @route GET /api/product/id
// @access Public

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
})


module.exports = { getProducts, getProductById }
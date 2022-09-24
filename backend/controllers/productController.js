const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// @desc Get products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {

    const products = await Product.find()
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
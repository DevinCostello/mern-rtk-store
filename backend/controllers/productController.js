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

// @desc Get products that have been filtered by certain parameters
// @route GET /api/products/filter
// @access Public

const getFilteredProducts = asyncHandler(async (req, res) => {

    let query;
    const reqQuery = {...req.query}

    console.log(reqQuery);
    // const removeFields = ["sort"]


    //convert query into json to add dollar sign
    let queryStr = JSON.stringify(reqQuery)
    
    queryStr = queryStr.replace(
        /\b(gt|gte|lt|lte|in)\b/g,
        (match) => `$${match}`
      );
      console.log(queryStr)

    //parse back into JS object
    const filteredProducts = await Product.find(JSON.parse(queryStr))

    ;

    res.status(200).json(filteredProducts)
})

module.exports = { getProducts, getProductById, getFilteredProducts }
const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');


// @desc Get products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {

    const reqQuery = { ...req.query }

    console.log(reqQuery);

    //convert query into json to add dollar sign
    let queryStr = JSON.stringify(reqQuery)
    queryStr = queryStr.replace(
        /\b(gt|gte|lt|lte|in)\b/g,
        (match) => `$${match}`
    );
    
    // console.log(queryStr)

    //pagination, need parseInt?
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    //parse back from JSON to use in .find()

    const totalProducts = await Product.find(JSON.parse(queryStr))
    const products = await Product.find(JSON.parse(queryStr))
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({price: 1})
    res.status(200).json({ products, totalProducts })
})


// @desc Get product by id
// @route GET /api/product/id
// @access Public

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
})


module.exports = { getProducts, getProductById }
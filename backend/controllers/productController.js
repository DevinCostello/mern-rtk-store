const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

// @desc Get products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async (req, res) => {

    const reqQuery = {...req.query}
    console.log(reqQuery);
    //convert query into json to add dollar sign
    let queryStr = JSON.stringify(reqQuery)

    queryStr = queryStr.replace(
        /\b(gt|gte|lt|lte|in)\b/g,
        (match) => `$${match}`
      );

    //pagination, need parseInt?
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const sort = parseInt(req.query.sort)

    //parse back from JSON to use in .find()
    const products = await Product
        .find(JSON.parse(queryStr))
        .limit(limit)
        .skip((page - 1) * limit)
        //not implemented yet
        .sort(sort)
    res.status(200).json(products)

    //other paramters to include: color (is a nested array) -> changing data structure will require updating Product Schema

})

// @desc Get product by id
// @route GET /api/product/id
// @access Public

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
})


module.exports = { getProducts, getProductById }
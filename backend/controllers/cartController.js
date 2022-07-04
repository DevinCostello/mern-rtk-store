const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel');

// @desc Get cart
// @route GET /api/cart
// @access Private

const getCart = asyncHandler(async (req, res) => {

    const cart = await Cart.find()
    res.status(200).json(cart)

})

module.exports = { getCart }
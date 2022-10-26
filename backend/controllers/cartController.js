const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel');

// @desc Get cart
// @route GET /api/cart
// @access 

const getCart = asyncHandler(async (req, res) => {

    const cart = await Cart.find()
    res.status(200).json(cart)

});

// @desc Get cart item by id
// @route GET /api/cart/id
// @access ??

const getCartItemById = asyncHandler(async (req, res) => {
    const id = req.params._id
    const cartitem = await Cart.findById(id)
    res.status(200).json(cartitem)
});

// @desc Create cart item
// @route POST /api/cart/
// @access Private

const createCartItem =  asyncHandler(async (req, res) => {
    
    if(req.body.color === null || req.body.size === null ) {
        res.status(400)
        throw new Error('Please Select all fields')
    }

    const item = await Cart.create({

        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        color: req.body.color,
        size: req.body.size,
        quantity: req.body.quantity,
        product_id: req.body.product_id,

        //would "body: body" do the same thing as declaring each key/value pair?

    })
    res.status(200).json(item)
});

// @desc Get cart item by id and update quantity
// @route PUT /api/cart/id
// @access

const updateQuantity = asyncHandler(async (req,res) => {

    if(Number.isInteger(req.body.quantity) === false || req.body.quantity < 1) {
        res.status(400)
        throw new Error ('Please input a valid quantity')
    }

    if(req.body.quantity === null ) {
        res.status(400)
        throw new Error('Update Quantity Not Selected')
    }

    const updatedItem = await Cart.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
    })

    res.status(200).json(updatedItem)
});

// @desc Delete Cart Item
// @route DELETE /api/cart/id
// @access Private

const deleteCartItem = asyncHandler(async (req,res) => {
const deletedItem = await Cart.findByIdAndDelete(req.params._id)

res.status(200).json(deletedItem)
});


module.exports = { getCart, getCartItemById, updateQuantity, deleteCartItem, createCartItem }
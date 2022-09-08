const express = require('express')
const router = express.Router()
const { getCart, getCartItemById, updateQuantity, deleteCartItem, createCartItem } = require('../controllers/cartController') 

router.route('/').get(getCart).post(createCartItem)
router.route('/:_id').get(getCartItemById).put(updateQuantity).delete(deleteCartItem)


module.exports = router
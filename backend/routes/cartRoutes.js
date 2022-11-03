const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { getCart, getCartItemById, updateQuantity, deleteCartItem, createCartItem } = require('../controllers/cartController') 

router.route('/').get(protect, getCart).post(protect, createCartItem)
router.route('/:_id').get(getCartItemById).put(protect, updateQuantity).delete(protect, deleteCartItem)


module.exports = router
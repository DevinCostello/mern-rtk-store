const express = require('express')
const router = express.Router()
const { getProducts, getProductById,  getFilteredProducts } = require('../controllers/productController') 

router.route('/').get(getProducts)
router.route('/filter').get(getFilteredProducts)
router.route('/:id').get(getProductById)


module.exports = router
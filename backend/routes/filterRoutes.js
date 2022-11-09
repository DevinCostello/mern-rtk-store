const express = require('express')
const router = express.Router()
const { getFilters } = require('../controllers/filterController')

router.route('/').get(getFilters)

module.exports = router
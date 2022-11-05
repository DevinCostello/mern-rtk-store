const asyncHandler = require('express-async-handler');
const Filter = require('../models/FilterModel');

// @desc Get filters
// @route GET /api/filters
// @access Public

const getFilters = asyncHandler(async (req, res) => {
const filters = await Filter.find()
res.status(200).json(filters)
})

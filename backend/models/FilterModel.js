const mongoose = require('mongoose')

const filterSchema = mongoose.Schema({

name: String,

filters: [],

types: {display: String, logic: String}


})

module.exports = mongoose.model("Filter", filterSchema)
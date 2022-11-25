const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    name: {
        type: String
    },

    //convert to [String] ???

    category: {
        type: String
    },

    color: [String],

    price: {
        type: Number
    },

    size: {
        type: String
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
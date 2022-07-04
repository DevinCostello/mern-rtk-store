const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    name: {
        type: String
    },

    category: {
        type: String
    },

    color: {
        type: String
    },

    price: {
        type: Number
    },

    quantity: {
        type: Number
    },

    size: {
        type: String
    }
   
}, {
    timestamps: true
})

module.exports = mongoose.model('Cart', cartSchema)
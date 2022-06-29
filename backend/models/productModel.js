const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    name: {
        type: String
    },

    category: {
        type: String
    },

    color: [String],

    price: {
        type: Number
    },

    size: {
        small: {
            type: Boolean
        },
        medium: {
            type: Boolean
        },
        large: {
            type: Boolean
        }
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
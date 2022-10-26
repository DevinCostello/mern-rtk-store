const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({

    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },

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
    },

    product_id: {
        type: String
    }
   
}, {
    timestamps: true
})

module.exports = mongoose.model('Cart', cartSchema)
const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

        name: String,
        category: String,
        color: String,
        price: Number,
        quantity: Number,
        size: String,
        product_id: String
  

}, {
    timestamps: true
})

module.exports = mongoose.model('Cart', cartSchema)
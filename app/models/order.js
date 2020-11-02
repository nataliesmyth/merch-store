const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  itemPrice: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)

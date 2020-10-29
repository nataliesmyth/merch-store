const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  itemPrice: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)

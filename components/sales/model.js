const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'books' },
    unitValue: { type: Number, required: true },
    quantity: { type: Number, required: true }
  })
  

const saleSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'clients' },
  total: { type: Number, required: true },
  saleDate: { type: Date, required: false },
  items: { type: [itemsSchema], required: false }
}, {
  timestamps: true
})


const Sale = mongoose.model('sales', saleSchema)

module.exports = Sale

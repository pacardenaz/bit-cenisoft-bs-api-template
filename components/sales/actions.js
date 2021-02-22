const Sale = require('./model')

const createSale = (req, res) => {
  const newSale = new Sale(req.body)
  newSale.save((error, saleSaved) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.status(201).send(saleSaved)
    }
  })
}

const deleteSale = (req, res) => {
  Sale.findByIdAndDelete(req.params.id, (error, result) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.status(200).send("sale deleted successfully")
    }
  })
}

const getSale = (req, res) => {
  Sale.findById(req.params.id, (error, sale) => {
    if (error) {
        res.status(500).send(error)
      } else if (sale) {
        res.send(sale)
      } else {
        res.status(404).send({})
      }
  }).
  populate('clientId').
  populate('items.bookId').
  exec(function (err, sale) {
    if (err) return handleError(err);
  })
}


const getSales = (req, res) => {

  Sale.find((error, sales) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.send(sales)
    }
  }).
  populate('clientId').
  populate('items.bookId').
  exec(function (err, sale) {
    if (err) return handleError(err);
  })
}

const updateSale = (req, res) => {
  Sale.updateOne({ _id: req.params.id }, req.body, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

module.exports = { createSale, deleteSale, getSale, getSales, updateSale }

const express = require('express')
const router = express.Router()
const { createSale } = require('./actions')
const { getSale } = require('./actions')
const { getSales } = require('./actions')
const { updateSale } = require('./actions')
const { deleteSale } = require('./actions')

// GET all
router.get('/', getSales)

// GET by ID
router.get('/:id', getSale)

router.post('/', createSale)

router.put('/:id', updateSale)

router.delete('/:id', deleteSale)

module.exports = router

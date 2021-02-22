const express = require('express')
const router = express.Router()
const { createClient, deleteClient, getClient, getClients, updateClient } = require('./actions')

router.get('/', getClients)

router.get('/:id', getClient)

router.post('/', createClient)

router.put('/:id', updateClient)

router.delete('/:id', deleteClient)

module.exports = router

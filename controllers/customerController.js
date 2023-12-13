const ModelCustomers = require('../models/Customers')

// Crear un producto nuevo
const createCustomer = (req, res) => {
  ModelCustomers.create(req.body)
    .then(row => {
      res.status(201).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

// Encontrar todos los productos
const findAllCustomers = (req, res) => {
  ModelCustomers.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const findOneCustomer = (req, res) => {
  ModelCustomers.findOne(req.params.idCustomer)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const updateOneCustomer = (req, res) => {
  ModelCustomers.update(req.params.idCustomer, req.body)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const destroyCustomer = (req, res) => {
  ModelCustomers.destroy(req.params.idCustomer)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

const softDeleteCustomer = (req, res) => {
  ModelCustomers.softDelete(req.params.idCustomer)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

module.exports = {
  createCustomer,
  findAllCustomers,
  findOneCustomer,
  updateOneCustomer,
  destroyCustomer,
  softDeleteCustomer
}

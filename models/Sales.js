// Trae los datos de las bases de datos, no es el encargado de resolver promesas

const knex = require('../config')

const create = (bodySales) => {
  return knex
    .insert(bodySales)
    .into('sales_products')
    .returning('*')
}

const findAll = () => {
  return knex.select('*')
    .from('sales_products')
    .where({ active: true })
}

const findOne = (saleId) => {
  return knex.select('*')
    .from('sales_products')
    .where({ sales_id: saleId })
    .where({ active: true })
}

const update = (saleId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('sales_products')
    .where({ sales_id: saleId })
    .returning('*')
}

const destroy = (saleId) => {
  return knex
    .del()
    .from('sales_products')
    .where({ sales_id: saleId })
}

const softDelete = (saleId) => {
  return knex
    .update({ active: false })
    .from('sales_products')
    .where({ sales_id: saleId })
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}

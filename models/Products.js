// Trae los datos de las bases de datos, no es el encargado de resolver promesas

const knex = require('../config')

const create = (bodyProduct) => {
  return knex
    .insert(bodyProduct)
    .into('products')
    .returning('*')
}

const findAll = () => {
  return knex.select('*')
    .from('products')
    .where({ active: true })
}

const findOne = (productId) => {
  return knex.select('*')
    .from('products')
    .where({ product_id: productId })
    .where({ active: true })
}

const update = (productId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('products')
    .where({ product_id: productId })
    .returning('*')
}

const destroy = (productId) => {
  return knex
    .del()
    .from('products')
    .where({ product_id: productId })
}

const softDelete = (productId) => {
  return knex
    .update({ active: false })
    .from('products')
    .where({ product_id: productId })
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}

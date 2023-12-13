/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('products').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('products', function (table) {
        table.increments('product_id').primary()
        table.string('product_name').notNullable()
        table.string('product_description', 3000).notNullable()
        table.decimal('product_cost', 10, 2).notNullable()
        table.string('product_sku').notNullable().unique()
        table.boolean('active').defaultTo(true)
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('products').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('products')
    }
  })
}

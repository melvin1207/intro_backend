/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('customers').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('customers', function (table) {
        table.increments('customer_id').primary()
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.string('address').notNullable()
        table.string('email').notNullable().unique()
        table.string('phone').notNullable().unique()
        table.string('zip_code').notNullable()
        table.string('city').notNullable()
        table.string('neighborhood').notNullable()
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
  return knex.schema.hasTable('customers').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('customers')
    }
  })
}

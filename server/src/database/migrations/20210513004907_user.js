
exports.up = function(knex) {
  return knex.schema.createTable('user',function(table){
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('cpf').notNullable()
      table.string('age').notNullable()
      table.string('sex',1).default('M')
      table.timestamp('created_at').defaultTo(knex.fn.now());

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};

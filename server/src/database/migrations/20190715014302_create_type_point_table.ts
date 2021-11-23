
exports.up = function(knex) {
    return knex.schema
      .createTable('type_point', function (table) {
        table.increments('typo_key').primary();
        table.string('typo_name').notNullable();
        table.string('typo_description');
		table.string('created_at');
		table.string('updated_at');
       
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
      // .dropTable('point')
      .dropTable('type_point');
  };
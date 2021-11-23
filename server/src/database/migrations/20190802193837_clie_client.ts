
exports.up = function(knex) {
  return knex.schema
      .createTable('client', function (table) {
        table.increments('clie_key').primary();
        table.string('clie_name');
        table.string('clie_description');
		table.string('clie_email');
		table.string('created_at');
		table.string('updated_at');
      });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable('client');
};

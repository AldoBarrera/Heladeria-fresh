
exports.up = function(knex) {
    return knex.schema
      .createTable('point', function (table) {
        table.increments('poin_key').primary();
        table.string('poin_name').notNullable();
        table.string('poin_description').notNullable();
        
        table.float('poin_positionx');
        table.float('poin_positiony');
        table.string('poin_shap_key').notNullable();
        table.string('poin_blue_key').notNullable();
        table.string('poin_poin_key').notNullable();
        table.integer('poin_typo_key').unsigned().references('typo_key').inTable('type_point').notNull().onDelete('cascade');
		table.string('created_at');
		table.string('updated_at');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('point');
  };
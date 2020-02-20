exports.up = function(knex) {
	return knex.schema.createTable('cars', tbl => {
		tbl.increments();
		tbl
			.text('name', 128)
			.unique()
			.notNullable();
		tbl.integer('vin').notNullable();
		tbl.text('make').notNullable();
		tbl.text('model').notNullable();
		tbl.text('mileage').notNullable();
		tbl.text('transmission');
		tbl.text('titleType');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('cars');
};

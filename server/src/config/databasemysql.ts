'use strict';

var env = process.env.NODE_ENV || "development";
let knex = require('knex')(require('../../knexfile')[env]);

let Bookshelf = require('bookshelf')(knex);
let ModelBase = require('bookshelf-modelbase')(Bookshelf);
Bookshelf.plugin('registry'); // Resolve circular dependencies with relations
Bookshelf.plugin(require('bookshelf-modelbase').pluggable);

export { ModelBase };
export { Bookshelf };
export { knex };
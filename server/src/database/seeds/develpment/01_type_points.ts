// import points from '../points';
const typePoints = require('../data/type_point');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('type_point').del()
    .then(() => {
      // Inserts seed entries
      return knex('type_point').insert(typePoints);
    });
};

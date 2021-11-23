// import points from '../points';
// const typePoints = require('../data/type_point');
const pointsDataP = require('../data/points');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('point').del()
    .then(() => {
      // Inserts seed entries
        return knex('point').insert(pointsDataP);

      })
};

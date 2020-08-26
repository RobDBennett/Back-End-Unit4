const { table } = require('../db-config');

exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('username').unique().notNullable();
        tbl.string('password').notNullable();
    })
    .createTable('data', tbl => {
        tbl.increments();
        tbl.string('text');
        tbl.string('author');
        tbl.string('tox');
    })
    // .createTable('data', tbl => {
    //     tbl.increments();
    //     tbl.string('name');
    //     tbl.string('num');
    //     tbl.string('info01');
    // })
    .createTable('save', tbl => {
        tbl.increments();
        tbl.integer('users_id').unsigned().notNullable().references('users.id').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.string('troll').notNullable();
        tbl.string('toxicity').notNullable();
        tbl.string('comment').notNullable();
    })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('save')
  .dropTableIfExists('data')
  .dropTableIfExists('users');
};

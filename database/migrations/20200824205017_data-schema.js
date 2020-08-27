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
        tbl.text('text');
        tbl.varchar('author', 128);
        tbl.float('tox', 2);
    })
    .createTable('feed', tbl => {
        tbl.increments();
        tbl.text('text');
        tbl.varchar('author', 128);
        tbl.float('tox', 2);
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
        tbl.varchar('troll', 128).notNullable();
        tbl.float('toxicity', 2).notNullable();
        tbl.text('comment').notNullable();
    })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('save')
  .dropTableIfExists('feed')
  .dropTableIfExists('users');
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "testuser", password: "$2a$10$zroNeU2savSgo5p6jJ4cCex3sBTccfdA9aUhh/z0q1fIwesNZv4xO"},
        {username: "admin", password: "$2a$10$iZmmAixLojSpOlur0aZAoeU.WfOvvpmXhItp/I2dedWX241NiQpG6"}
      ]);
    });
};

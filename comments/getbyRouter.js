const router = require('express').Router();

const db = require('../database/db-config.js');
const validate = require('../api/validate.js');

// Base URL /api


router.get('/dash/:users_id', (req, res) => {
    const {users_id} = req.params;
    db('save')
        .where('users_id', users_id)
        .then((save) => res.status(200).json({data: save}))
        .catch((err) => console.log(err))
});

module.exports = router;
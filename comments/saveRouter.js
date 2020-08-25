const router = require('express').Router();

const Save = require('./saveModel.js');

const validate = require('../api/validate.js');
const db = require('../database/db-config.js');

// Base URL /api/save

router.use('/:id', validate.user);


// Get Requests
router.get('/', (req, res) => {
    db.select('*')
        .from('save')
        .then(save => res.status(200).json({data: save}))
        .catch((err) => console.log(err));
});

// router.get('/:users_id', (req, res) => {
//     const {id} = req.params;
//     db.select('*')
//         .from('save')
//         .where('users_id', users_id)
//         .then(save => res.status(200).json({data: save}))
//         .catch((err) => console.log(err));
// })


// Post Request

router.post('/', (req, res) => {
    const comment = req.body;
    db('save')
        .insert(comment)
        .then(id => res.status(201).json({data:id}))
        .catch((err) => console.log(err));
});

// Delete Request

router.delete('/:id', validate.loggedon, (req, res) => {
    const {id} = req.params;
    db('save')
        .where('id', id)
        .delete()
        .then(count => {
            if (count > 0) {
                res.status(200).json({message: 'Number of records deleted', count});
            } else {
                res.status(404).json({message: 'That is not a valid id'});
            }
        })
        .catch((err) => console.log(err));
});

module.exports = router;
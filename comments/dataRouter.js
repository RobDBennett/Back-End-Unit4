const axios = require('axios');

const router = require('express').Router();


const db = require('../database/db-config.js');
const { response } = require('../api/server.js');

// Base URL /api/save


// Get Requests
// router.get('/', (req, res) => {
//     const requestOptions = {
//         headers: {accept: 'application/json'},
//     };

//     axios
//         .get('https://unit3-build-dummy-api.herokuapp.com/feed', requestOptions)
//         .then(async response => {
//             const feed = response.data.map(comment => {
//                 return {
//                     author: comment.author,
//                     text: comment.text,
//                     tox: comment.tox
//                 }
//             })

//             feed.splice(400, feed.length - 400);
//             const newFeed = await db.batchInsert("data", feed)
//                 .then(() => db("data"));
//             res.status(201).json(newFeed)
            
//         })
//         .catch(err => {
//             res.status(500).json({message: 'Error Fetching Data', error: err})
//         });
// });

// https://unit3-build-dummy-api.herokuapp.com/feed  https://jsonblob.com/api/jsonblob/6dd45faf-e7db-11ea-bb30-ff4f3d65208e

router.get('/', (req, res) => {
    db.select('*')
        .from('data')
        .then(data => res.status(200).json({data: data}))
        .catch((err) => console.log(err));
});

module.exports = router;

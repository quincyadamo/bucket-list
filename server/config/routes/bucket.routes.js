const router = require('express').Router();
const buckets = require('../../controllers/bucket_controller');

module.exports = router
    .get('/', buckets.getAllBuckets)
    .post('/', buckets.createBucket)
    .put('/:id', buckets.checkBucket);




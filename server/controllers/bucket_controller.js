const Bucket = require('mongoose').model('Bucket');
const session = require('express-session');

module.exports = {

    getAllBuckets: (req, res) => {

        Bucket.find()
            .then((buckets) => {
                res.json(buckets);
            }).catch((err) => {
                res.status(402).json(err)
            });

    },


    createBucket: (req, res) => {

        let bucket = new Bucket(req.body);
        bucket.owner_id = req.session.user_id;
        bucket.save()
            .then((bucket) => {
                return res.json(bucket);
            }).catch((err) => {
                res.status(406).json(err)
            });
    },



    checkBucket: (req, res) => {

        Bucket.findById(req.params.id)
            .then((bucket) => {

                if (!bucket) {
                    throw new Error('Bucket Not Found!');
                }

                if (bucket.owner_id !== req.session.user_id && bucket.tagged_user_id !== req.session.user_id) {
                    throw new Error('You don\'t own this bucket nor are tagged on this bucket!');
                }

                bucket.accomplished = !bucket.accomplished

                bucket.save().then((bucket) => {
                    return res.json(bucket);
                })

            })
            .catch((err) => {
                res.status(406).json(err);
            })
    },


}


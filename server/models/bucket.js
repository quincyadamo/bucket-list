const mongoose = require('mongoose');
const { Schema } = mongoose;


const BucketSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    owner_id: {
        type: String,
        required: true,
        trim: true
    },
    tagged_user_id: {
        type: String,
        required: false,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        trim: true
    },
    accomplished: {
        type: Boolean
    },
}, {
        timestamps: true
    });


module.export = mongoose.model('Bucket', BucketSchema);
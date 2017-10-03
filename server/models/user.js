const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
}, {
        timestamps: true
    });


module.export = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const reg = new RegExp('\\.js$', 'i');

mongoose.connect('mongodb://localhost/bucketlist', {useMongoClient: true});

const models_path = path.join(__dirname, '../models');

fs.readdirSync(models_path).forEach((file) => {
    if (reg.test(file)) {
        require(path.join(models_path, file));
    }
});
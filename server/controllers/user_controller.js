const User = require('mongoose').model('User');
const session = require('express-session');

module.exports = {

    registerLogin: (req, res) => {
        console.log(req.body)
        User.findOne(req.body).then((user) => {

            if (user === null) {
                console.log('user is null');

                new User(req.body).save().then((newUser) => {
                    console.log('user created')
                    req.session.user_id = newUser._id;
                    return res.json(newUser);
                })

            } else {
                console.log('user is not null')
                req.session.user_id = user._id;
                return res.json(user);
            }


        }).catch((err) => { res.status(401).json('Something went wrong') });
    },

    currentUser: (req, res) => {

        if (!req.session.user_id) {
            return res.status(401).json({ 'error': 'Must be logged in to access this page' });
        }

        User.findById(req.session.user_id)
            .then((user) => {

                if (!user) {
                    return res.status(401).json({ 'error': 'Must be logged in to access this page' });
                }
                
                res.json(user);

            }).catch((err) => { return res.json(err); });


    },

    allUsers: (req, res) => {

        User.find()
            .then((users) => {
                res.json(users);
            }).catch((err) => { res.status(402).json(err) });

    },

    logout: (req, res) => {
        req.session.destroy();
        res.json(true);
    }
}


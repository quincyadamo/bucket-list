const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const compress = require('compression');
const parser = require('body-parser');
const helmet = require('helmet');
const logger = require('morgan');
const PORT = process.env.PORT || 8000;
const app = express();

const sessionConfig = {

    saveUnitialized: true,
    secret: 'secretString',
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 360000
    }
};


app.use(helmet());
app.use(compress());
app.use(logger('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(cookieParser('fdsfdsjfkdsjkflsdljfksjfdls'));
app.use(session(sessionConfig));

require('./server/config/mongoose');

app.use('/api/user', require('./server/config/routes/user.routes'));
app.use('/api/bucket', require('./server/config/routes/bucket.routes'));
app.use(require('./server/config/routes/catch-all.routes'));

app.all("*", (req, res, next) => {
    res.sendfile(path.resolve("./public/dist/index.html"))
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
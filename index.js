const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => { res.send('Hello World!')});


app.use(express.static(path.join(__dirname, 'public')));

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// view engine setup
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

app.use('/api', require('./router/api/members'));
app.use('/', require('./router/render/movie'));

app.listen(3000, () => { console.log('App listening on port 3000!')});
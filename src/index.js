const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resource/views'));

// Route tuyến đường chỏ đến url
app.get('/', (req, res) => {
  res.render('home');
  // Chỏ tới thư mục views
  // Kiếm file home
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




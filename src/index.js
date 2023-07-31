const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');

// Khởi tạo biến route để nạp thư viện route vào
const route = require('./routes');

// app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));
// Tạo ra middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.engine('hbs', hbs.engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




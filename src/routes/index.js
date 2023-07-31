// nạp file route của file news vào file index của route controller
const newsRouter = require('./news');
const newsSite = require('./site');

// Tạo file index ở tròng thư mục route để chứa tất cả các route
function route(app) {

  app.use('/news', newsRouter);
  
  app.use('/', newsSite);

  // app.post('/search', (req, res) => {
  //   console.log(req.body.gender);
  //   res.send('');
  // });
}

module.exports = route;
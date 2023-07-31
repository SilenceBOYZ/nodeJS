
class NewsController {
  // Tạo ra một class
  // Tạo ra một phương thức để chứa function handler
  // [GET] /news
  index(req, res) {
    res.render('news');
  }
  show(req, res) {
    res.send('news Details');
  }
}

// module.exports để xuất file ra ngoài
// Hiểu đơn giản câu lệnh này sẽ cho phép ta 
// thừa hưởng class NewsController khi ta require vào
// Ví dụ khi ta const newRouteController = require('./NewsController')
// thì ta sẽ nhận được giá một giá trị của biến newRouteController là một
// class NewsController => ta có thể sử dụng những gì bên trong class đó.
module.exports = new NewsController;


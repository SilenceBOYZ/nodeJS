// Import thư viện route của express JS
const express = require('express');
const router = express.Router();

// Nạp file controller của newsController từ thư mục app/Controller
const newsController = require('../app/controllers/NewsController');


router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
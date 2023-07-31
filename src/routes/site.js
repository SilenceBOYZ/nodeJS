// Import thư viện route của express JS
const express = require('express');
const router = express.Router();

// Nạp file controller của newsController từ thư mục app/Controller
const siteController = require('../app/controllers/SiteController');


router.use('/search', siteController.search);
router.use('/', siteController.home);

module.exports = router;
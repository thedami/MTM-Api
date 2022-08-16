const express = require('express');
const router = express.Router();
const NewsController = require('../controller/News.controller');

router.post('/', NewsController.addNews);
router.get('/', NewsController.findNews);
router.get('/:id', NewsController.findNewsByID);
router.put('/:id', NewsController.updateNews);
router.delete('/:id', NewsController.deleteById);

module.exports = router;
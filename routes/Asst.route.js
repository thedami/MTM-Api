const express = require('express');
const router = express.Router();
const AsstController = require('../controller/Asst.controller');

router.post('/', AsstController.addAsst);
router.get('/', AsstController.findAsst);
router.get('/:id', AsstController.findAsstByID);
router.put('/:id', AsstController.updateAsst);
router.delete('/:id', AsstController.deleteById);

module.exports = router;
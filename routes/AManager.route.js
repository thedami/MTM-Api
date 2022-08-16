const express = require('express');
const router = express.Router();
const AManagerController = require('../controller/AManager.controller');

router.post('/', AManagerController.addAManager);
router.get('/', AManagerController.findAManager);
router.get('/:id', AManagerController.findAManagerByID);
router.put('/:id', AManagerController.updateAManager);
router.delete('/:id', AManagerController.deleteById);

module.exports = router;


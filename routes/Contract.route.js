const express = require('express');
const router = express.Router();
const ContractController = require('../controller/Contract.controller');

router.post('/', ContractController.addContract);
router.get('/', ContractController.findContract);
router.get('/:id', ContractController.findContractByID);
router.put('/:id', ContractController.updateContract);
router.delete('/:id', ContractController.deleteById);

module.exports = router;
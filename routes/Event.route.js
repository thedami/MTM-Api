const express = require('express');
const router = express.Router();
const EventController = require('../controller/Event.controller');

router.post('/', EventController.addEvent);
router.get('/', EventController.findEvent);
router.get('/:id', EventController.findEventByID);
router.put('/:id', EventController.updateEvent);
router.delete('/:id', EventController.deleteById);

module.exports = router;
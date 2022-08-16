const express = require('express');
const router = express.Router();
const ScheduleController = require('../controller/Schedule.controller');

router.post('/', ScheduleController.addSchedule);
router.get('/', ScheduleController.findSchedule);
router.get('/:id', ScheduleController.findScheduleByID);
router.put('/:id', ScheduleController.updateSchedule);
router.delete('/:id', ScheduleController.deleteById);

module.exports = router;
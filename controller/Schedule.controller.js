const ScheduleDao = require('../dao/schedule.dao');
var ScheduleController = {
    addSchedule: addSchedule,
    findSchedule: findSchedule,
    findScheduleByID: findScheduleByID,
    updateSchedule: updateSchedule,
    deleteById: deleteById
}

function addSchedule(req, res) {
    let schedule = req.body;
    ScheduleDao.create(schedule).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findScheduleByID(req, res) {
    ScheduleDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    ScheduleDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Schedule deleted successfully",
                schedule: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateSchedule(req, res) {
    ScheduleDao.updateSchedule(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Schedule updated successfully",
                schedule: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findSchedule(req, res) {
    ScheduleDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = ScheduleController;

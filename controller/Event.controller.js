const EventDao = require('../dao/Event.dao');
var EventController = {
    addEvent: addEvent,
    findEvent: findEvent,
    findEventByID: findEventByID,
    updateEvent: updateEvent,
    deleteById: deleteById
}

function addEvent(req, res) {
    let event = req.body;
    EventDao.create(event).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEventByID(req, res) {
    EventDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    EventDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Event deleted successfully",
                event: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateEvent(req, res) {
    EventDao.updateEvent(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Event updated successfully",
                event: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEvent(req, res) {
    EventDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = EventController;

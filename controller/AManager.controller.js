const AManagerDao = require('../dao/AManager.dao');
var AManagerController = {
    addAManager: addAManager,
    findAManager: findAManager,
    findAManagerByID: findAManagerByID,
    updateAManager: updateAManager,
    deleteById: deleteById
}

function addAManager(req, res) {
    let aManager = req.body;
    AManagerDao.create(aManager).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAManagerByID(req, res) {
    AManagerDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    AManagerDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Artist Manager deleted successfully",
                aManager: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateAManager(req, res) {
    AManagerDao.updateAManager(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Artist Manager updated successfully",
                aManager: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAManager(req, res) {
    AManagerDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = AManagerController;

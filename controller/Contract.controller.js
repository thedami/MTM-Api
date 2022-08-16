const ContractDao = require('../dao/contract.dao');
var ContractController = {
    addContract: addContract,
    findContract: findContract,
    findContractByID: findContractByID,
    updateContract: updateContract,
    deleteById: deleteById
}

function addContract(req, res) {
    let contract = req.body;
    ContractDao.create(contract).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findContractByID(req, res) {
    ContractDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    ContractDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Contract deleted successfully",
                contract: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateContract(req, res) {
    ContractDao.updateContract(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Contract updated successfully",
                contract: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findContract(req, res) {
    ContractDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = ContractController;

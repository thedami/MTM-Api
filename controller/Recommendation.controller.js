const RecommendDao = require('../dao/Recommendation.dao');
var RecommendController = {
    addRecommend: addRecommend,
    findRecommend: findRecommend,
    findRecommendByID: findRecommendByID,
    updateRecommend: updateRecommend,
    deleteById: deleteById
}

function addRecommend(req, res) {
    let recommendation = req.body;
    RecommendDao.create(recommendation).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRecommendByID(req, res) {
    RecommendDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    RecommendDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Recommendation deleted successfully",
                recommendation: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateRecommend(req, res) {
    RecommendDao.updateRecommend(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Recommendation updated successfully",
                recommendation: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRecommend(req, res) {
    RecommendDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = RecommendController;

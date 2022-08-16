const NewsDao = require('../dao/News.dao');
var NewsController = {
    addNews: addNews,
    findNews: findNews,
    findNewsByID: findNewsByID,
    updateNews: updateNews,
    deleteById: deleteById
}

function addNews(req, res) {
    let news = req.body;
    NewsDao.create(news).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findNewsByID(req, res) {
    NewsDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    NewsDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "News deleted successfully",
                news: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateNews(req, res) {
    NewsDao.updateNews(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "News updated successfully",
                news: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findNews(req, res) {
    NewsDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = NewsController;

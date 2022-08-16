const express = require('express');
const router = express.Router();
const RecommendController = require('../controller/Recommendation.controller');

router.post('/', RecommendController.addRecommend);
router.get('/', RecommendController.findRecommend);
router.get('/:id', RecommendController.findRecommendByID);
router.put('/:id', RecommendController.updateRecommend);
router.delete('/:id', RecommendController.deleteById);

module.exports = router;
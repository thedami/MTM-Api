const express = require('express');
const router = express.Router();
const ArtistController = require('../controller/artist.controller');

router.post('/', ArtistController.addArtist);
router.get('/', ArtistController.findArtist);
router.get('/:id', ArtistController.findArtistByID);
router.put('/:id', ArtistController.updateArtist);
router.delete('/:id', ArtistController.deleteById);

module.exports = router;
const express = require('express');

const sauceCtrl = require('../controllers/sauces');
const router = express.Router();
const auth = require('../middleware/auth');

const multer = require('../middleware/multer-config');

router.get('/', auth, sauceCtrl.getAllSauce);
router.post('/', auth, multer, sauceCtrl.creatSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);

router.put('/:id', auth, multer, sauceCtrl.modifySauce);

router.delete('/:id', auth, sauceCtrl.deleteSauce);

router.post('/:id/like', auth, sauceCtrl.likeSauce);
module.exports = router;
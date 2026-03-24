const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

router.get('/', contactController.getAllMessages);
router.get('/:id', contactController.getMessageById);
router.post('/', contactController.submitContact);
router.delete('/:id', contactController.deleteMessage);

module.exports = router;
const express = require('express');
const router = express.Router();


 
router.get('/', (req, res) => {
  res.send('Get all contacts');
});


router.post('/', (req, res) => {
  res.send('Create a new contact');
});


router.put('/:id', (req, res) => {
  res.send('Update contact by id');
});


router.delete('/:id', (req, res) => {
  res.send('Delete contact by ID');
});

module.exports = router;

const express = require('express');
const Hospital = require('../models/hospital'); // Adjust the path based on your file structure

const router = express.Router();

// Get all hospitals
router.get('/hospitals', async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get specific hospital by ID
router.get('/hospitals/:id', async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    res.json(hospital);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;

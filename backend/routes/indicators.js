const express = require('express');
const router = express.Router();
const Indicator = require('../models/indicator');
const logger = require('../utils/logger');

// Get all indicators
router.get('/', async (req, res) => {
  try {
    const indicators = await Indicator.find();
    res.json(indicators);
  } catch (err) {
    logger.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add new indicator
router.post('/', async (req, res) => {
  try {
    const newIndicator = new Indicator(req.body);
    await newIndicator.save();
    logger.info(`New indicator added: ${newIndicator.value}`);
    res.status(201).json(newIndicator);
  } catch (err) {
    logger.error(err.message);
    res.status(400).send('Bad request');
  }
});

module.exports = router;

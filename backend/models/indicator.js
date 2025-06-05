const mongoose = require('mongoose');

const IndicatorSchema = new mongoose.Schema({
  type: { type: String, required: true },    // e.g., "ip", "domain", "hash"
  value: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  confidence: { type: Number, default: 50 }, // 0-100 scale
});

module.exports = mongoose.model('Indicator', IndicatorSchema);

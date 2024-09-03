const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
});

const hospitalSchema = new mongoose.Schema({
  name: String,
  location: String,
  doctors: [doctorSchema],
});

module.exports = mongoose.model('Hospital', hospitalSchema);

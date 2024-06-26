const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skills: { type: [String], required: true },
  registrationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);

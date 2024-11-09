const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  name: { type: String },
  phoneNumber: { type: String },
  image: { type: String },
  gender: { type: String },
  linkedIn: { type: String },
});

module.exports = mongoose.model('User', userSchema);

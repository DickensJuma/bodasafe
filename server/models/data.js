const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  role: { type: Array, required: true }
});

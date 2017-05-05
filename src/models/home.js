const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  title: String,
  num: Number
});

module.exports = mongoose.model('Home', schema);

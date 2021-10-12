const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    unique:true,
    trim:true
  },
  apikey: {
    type: String,
    unique:true,
    trim:true
  }
},{ timestamps: true });


module.exports = mongoose.model('Book', BookSchema);
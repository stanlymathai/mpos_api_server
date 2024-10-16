const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
    minlength: 2,
    maxlength: 3,
  },
  capital: {
    type: String,
    required: true,
    trim: true,
  },
  population: {
    type: Number,
  },
  area: {
    type: Number, // in square kilometers
  },
});

const State = mongoose.model("State", stateSchema);

module.exports = State;

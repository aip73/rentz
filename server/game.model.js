const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  players: [],
  history: [],
  scores: [],
  scoreBar: 0
});

module.exports = mongoose.model('Game', Game);

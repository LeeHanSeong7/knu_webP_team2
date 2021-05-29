const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
    Date: {
        type: Date,
        default: Date.now,
        required: true
    },
    player1: {
        type: String,
        required: true
    },
    player2: {
        type: String
    },
    score: {
        type: String,
        required: true
    },
    level: {
        type: String,
        require: true
    }
});

const History = mongoose.model('History', HistorySchema);
module.exports = History
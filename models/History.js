const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
    Date: {
        type: Date,
        default: Date.now,
        required: true
    },
    winner: {
        type: String,
        required: true,
        default: "None"
    },
    loser: {
        type: String,
        default: "None"
    },
    winnerScore: {
        type: Number,
        required: true,
        default: 0
    },
    loserScore: {
        type: Number,
        require: true,
        default: 0
    }
});

const History = mongoose.model('History', HistorySchema);
module.exports = History
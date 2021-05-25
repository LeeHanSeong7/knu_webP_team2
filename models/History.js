const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
    gameID: { 
        type: String,
        required: true,
        unique: true
    },
    // Date: {
    //     type: Date,
    //     default: Date.now
    // },
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
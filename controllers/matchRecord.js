const config = require('../testConfig');
const History = require('../models/History.js');

module.exports = async (req,res) => {
    const winHistories = await History.find({winner: req.session.userid}).sort({Date: 'desc'});
    const loseHistories = await History.find({loser: req.session.userid}).sort({Date: 'desc'});

    console.log(winHistories[0].Date);
    console.log(loseHistories[0].Date);
    
    res.render(config.viewPath+'matchRecordView.ejs', {winHistories, loseHistories});
}
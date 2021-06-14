const config = require('../testConfig');
const History = require('../models/History.js');

module.exports = async (req,res) => {
    const winHistories = await History.find({winner: req.session.userid}).sort({Date: 'desc'});
    const loseHistories = await History.find({loser: req.session.userid}).sort({Date: 'desc'});

    const histories = winHistories.concat(loseHistories)
    histories.sort((a, b) =>{
        return (b.Date - a.Date);
    })
    const userid = req.session.userid;

    res.render(config.viewPath+'matchRecordView.ejs', {histories, userid});
}
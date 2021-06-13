const History = require('../../models/History.js')
const User = require('../../models/User.js')

module.exports = async (req, res) => {
    if (req.body === undefined) return;
    const {winner, loser} = req.body;

    await History.create(req.body, (error, history) => {
        // if (error) {
        //     console.log(error)
        //     return res.redirect('/lobby')
        // }
    })
    
    let winners = await User.findOne({username: winner});

    let total = {total: winners.total + 1};
    let win = {win: winners.win + 1};
    let rate = {rate: ((win.win / total.total) * 100).toFixed(0)}

    await User.findOneAndUpdate({username: winner}, total);
    await User.findOneAndUpdate({username: winner}, win);
    await User.findOneAndUpdate({username: winner}, rate);

    let losers = await User.findOne({username: loser});

    total = {total: losers.total + 1};
    let lose = {lose: losers.lose + 1};
    rate = {rate: ((losers.win / total.total) * 100).toFixed(0)}

    await User.findOneAndUpdate({username: loser}, total);
    await User.findOneAndUpdate({username: loser}, lose);
    await User.findOneAndUpdate({username: loser}, rate);
}
const History = require('../../models/History.js')
const User = require('../../models/User.js')

module.exports = async (req, res) => {
    const {winner, loser} = req.body;

    await History.create(req.body, (error, history) => {
        if (error) {
            return res.redirect('/history')
        }
        res.redirect('/history')
    })
    
    let winners = await User.findOne({username: winner});

    let total = {total: winners.total + 1};
    console.log("1." + total);
    let win = {win: winners.win + 1};
    console.log("2." + win);
    let rate = {rate: ((winners.win / winners.total) * 100).toFixed(0)}
    console.log("3." + rate);

    await User.findOneAndUpdate({username: winner}, total);
    await User.findOneAndUpdate({username: winner}, win);

    console.log("win updated");
    await User.findOneAndUpdate({username: winner}, rate);
    
    console.log("winner updated");

    let losers = await User.findOne({username: loser});

    console.log("loser inserted");

    total = {total: losers.total + 1};
    console.log("4." + total);
    let lose = {lose: losers.lose + 1};
    console.log("5." + lose);
    rate = {rate: ((losers.win / losers.total) * 100).toFixed(0)}
    console.log("6." + rate);

    await User.findOneAndUpdate({username: loser}, total);
    await User.findOneAndUpdate({username: loser}, lose);
    await User.findOneAndUpdate({username: loser}, rate);

    console.log("loser updated")
}
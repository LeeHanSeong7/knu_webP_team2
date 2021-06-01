const config = require('../testConfig');
const User = require('../models/User.js');
const History = require('../models/History.js');

module.exports = async (req,res) => {
    const users = await User.find({username: req.session.userid});
    const histories = await History.find({player1: req.session.userid}).sort({Date: 'desc'});

    res.render(config.viewPath+'statusView.ejs', {users, histories});
}
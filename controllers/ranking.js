const config = require('../testConfig');
const History = require('../models/History.js');
const User = require('../models/User.js');

module.exports = async (req,res) => {
    const histories = await History.find({}).sort({score: 'desc'});
    const users = await User.find({});

    res.render(config.viewPath+'rankingView.ejs', {users, histories});
}

const config = require('../testConfig');
const History = require('../models/History.js');
const User = require('../models/User.js');

module.exports = async (req,res) => {
    const histories = await History.find({}).sort({winnerScore: 'desc'});
    const users = await User.find({}).sort({rate: 'desc'});

    res.render(config.viewPath+'rankingView.ejs', {users, histories});
}

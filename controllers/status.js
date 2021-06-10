const config = require('../testConfig');
const User = require('../models/User.js');


module.exports = async (req,res) => {
    const users = await User.find({username: req.session.userid});

    res.render(config.viewPath+'statusView.ejs', {users});
}
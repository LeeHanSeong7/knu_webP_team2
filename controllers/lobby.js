const config = require('../testConfig');

module.exports = (req,res) => {

    const userid = req.session.userid;

    res.render(config.viewPath+'lobbyView.ejs', {userid});
}
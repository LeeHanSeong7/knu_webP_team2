const config = require('../testConfig');

module.exports = async (req,res) => {
    res.render(config.viewPath+'game2pView.ejs');
}
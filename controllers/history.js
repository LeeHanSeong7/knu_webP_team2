const config = require('../testConfig');

module.exports = (req,res) => {
    res.render(config.viewPath+'historyView.ejs');
}
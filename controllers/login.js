const config = require('../testConfig');
const userList = require('../dataObject/userlistObject');

module.exports = (req,res) => {
    res.render(config.viewPath+'loginView.ejs');
}
const config = require('../testConfig');

module.exports = (req,res) => {
    res.render(config.viewPath+'signUpView.ejs', {duplicate: false});
}

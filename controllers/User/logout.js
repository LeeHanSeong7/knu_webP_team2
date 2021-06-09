const userList = require('../../dataObject/userlistObject');

module.exports = (req,res) => {
    userList.logout(req.session.userid);
    req.session = null;
    res.redirect('/');
}

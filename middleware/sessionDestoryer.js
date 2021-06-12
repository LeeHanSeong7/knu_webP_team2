const userList = require('../dataObject/userlistObject');

module.exports = (req, res, next) =>{
    if (req.session !== null){
        userList.logout(req.session.userid);
        req.session.destroy(function () { });
    }
    next();
}
    
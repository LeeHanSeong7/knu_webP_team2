const userList = require('../dataObject/userlistObject');

module.exports = (req, res, next) =>{
    userList.touchUser(req.session.userid);
    next();
}
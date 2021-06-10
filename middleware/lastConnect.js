const userList = require('../dataObject/userlistObject');

module.exports = (req, res, next) =>{
    userList.userList[req.session.userid].touch();
    next();
}
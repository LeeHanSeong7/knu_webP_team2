const userList = require('../../dataObject/userlistObject');
const getChat = require('./getChat');

module.exports = (req,res) => {
    userList.sayToUsers(req.session.userid,req.body.data);
    getChat(req,res);
}

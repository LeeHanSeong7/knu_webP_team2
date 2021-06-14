const userList = require('../../dataObject/userlistObject');

module.exports = (req,res) => {
    userList.sayToUsers(req.session.userid,req.body.data);
}

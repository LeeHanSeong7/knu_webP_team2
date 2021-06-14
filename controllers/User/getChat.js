const userList = require('../../dataObject/userlistObject');

module.exports = (req,res) => {
    res.json({
        //"date" : new Date(),
        "chatbuf" : userList.userList[req.session.userid].chatBuf,
    });
    userList.userList[req.session.userid].chatBuf = [];
}

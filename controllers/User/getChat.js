const userList = require('../../dataObject/userlistObject');

module.exports = (req,res) => {
    let chatBuf = userList.userList[req.session.userid].chatBuf.slice();
    userList.userList[req.session.userid].chatBuf = [];
    res.json({
        //"date" : new Date(),
        "chatbuf" : chatBuf,
    });
}

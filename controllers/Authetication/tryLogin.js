const userList = require('../../dataObject/userlistObject');
const authFunc = require('./authModule');

module.exports = async (req, res) => {
    const { id, pw } = req.body;

    const isExise = await authFunc.tryAuth(id, pw);
    if (isExise == true) {
        req.session.userid = id;
        req.session.status = "lobby";
        userList.login(req.session.userid, req.session.id);
        res.redirect('/lobby');
    }
    else {
        res.redirect('/');
    }
}
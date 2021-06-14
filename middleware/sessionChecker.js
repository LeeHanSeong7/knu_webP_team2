const userList = require('../dataObject/userlistObject');

module.exports = (req, res, next) =>{
    const userinfo = userList.userList[req.session.userid];

    if (userinfo == undefined){
        res.redirect('/');
    }
    else if (req.session.id != userinfo.lastSession){
        res.redirect('/');
    }
    else
        next();
}
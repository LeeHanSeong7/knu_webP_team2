const userList = require('../../dataObject/userlistObject');
const authFunc = require('./authModule');

module.exports = async (req,res) => {
    const {id,pw} = req.body;
    if (userList.userList().includes(id) == true){
        res.redirect('/');
    }
    else{
        const isExise = await authFunc.tryAuth(id,pw);
        if (isExise==true){
            userList.touchUser(id);
            req.session.userid = id;
            req.session.status = "lobby";
            res.redirect('/lobby');
        }
        else{
            res.redirect('/');
        }
    }
}
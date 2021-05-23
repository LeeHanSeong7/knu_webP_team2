const userList = require('../../dataObject/userlistObject').userList;
const authFunc = require('./authModule');

module.exports = async (req,res) => {
    const {id,pw} = req.body;
    if (userList.includes(id) == true){
        res.redirect('/');
    }
    else{
        const isExise = await authFunc.tryAuth(id,pw);
        if (isExise==true){
            userList.push(id);
            req.session.userid = id;
            req.session.status = "lobby";
            res.redirect('/lobby');
        }
        else{
            res.redirect('/');
        }
    }
}
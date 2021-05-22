const userList = require('../../dataObject/userlistObject').userList;
const authFunc = require('./authModule');

module.exports = async (req,res) => {
    const {id,pw} = req.body;
    const isExise = await authFunc.tryAuth(id,pw);
    if (isExise==true){
        userList.push(id);
        req.session.id = id;
        res.redirect('/lobby');
    }
    else{
        res.redirect('/');
    }
}
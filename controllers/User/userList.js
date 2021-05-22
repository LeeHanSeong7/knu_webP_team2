const userList = require('../../dataObject/userlistObject').userList;

module.exports = (req,res) => {
    res.json({userList});
}
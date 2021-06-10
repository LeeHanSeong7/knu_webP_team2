const userList = require('../../dataObject/userlistObject');

module.exports = (req,res) => {
    res.json({
        "data": userList.getUserList(),
    });
}

const User = require('../../models/User');
const bcrypt = require('bcrypt')

async function tryAuth(id,pw){
    let res;
    let user = await User.findOne({username:id});
    if (user){
        res = await bcrypt.compare(pw, user.password);
    }
    return res;
} 

module.exports={
    tryAuth,
}
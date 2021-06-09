const lastConnect = {};

function touchUser(userid){
    lastConnect[userid] = new Date();
}
function userList(){
    return Object.keys(lastConnect);
}
function logout(userid){
    delete lastConnect[userid];
}

module.exports = {
    lastConnect,
    touchUser,
    userList,
    logout,
};

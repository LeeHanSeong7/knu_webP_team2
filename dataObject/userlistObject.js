const userList = {};

class user {
    constructor(session_id){
        this.lastConnect = new Date();
        this.lastSession = session_id;
    }
    touch(){
        this.lastConnect = new Date();
    }
}
function getUserList(){
    return Object.keys(userList);
}
function login(userid, session_id){
    if (Object.keys(userList).includes(userid)){
        userList[userid].touch();
        userList[userid].lastSession = session_id;
    }
    else{
        userList[userid]=new user(session_id);
    }
}
function logout(userid){
    delete userList[userid];
}

module.exports = {
    userList,
    getUserList,
    login,
    logout,
};

const userList = {};

class user {
    constructor(session_id){
        this.lastConnect = new Date();
        this.lastSession = session_id;
        this.chatBuf=[];
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

function sayToUsers(userid,str){
    const users = Object.keys(userList);
    users.forEach((user)=>{
        if (user != userid){
            user.chatBuf.push({"user":userid, "text":str});
        }
    });
}

function logout(userid){
    delete userList[userid];
}

module.exports = {
    userList,
    getUserList,
    login,
    logout,
    sayToUsers,
};

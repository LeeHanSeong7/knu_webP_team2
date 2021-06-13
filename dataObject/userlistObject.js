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
        userList[user].chatBuf.push({"user":userid, "text":str});
    });
}

function logout(userid){
    delete userList[userid];
}
const timeout = 300000;

setInterval(()=>{
    const users = Object.keys(userList);
    users.forEach((user)=>{
        const now = new Date().getTime();
        const last = new Date(userList[user].lastConnect).getTime();
        if (now - last > timeout){
            delete userList[user];
        }
    });
},timeout);

module.exports = {
    userList,
    getUserList,
    login,
    logout,
    sayToUsers,
};

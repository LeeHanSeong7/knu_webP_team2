const userList = require('../../dataObject/userlistObject').userList;

module.exports = (req,res) => {
    res.json({userList});
}

//클라이언트에서 요청하는 법 - 복사해 가세요. 보니까 async 함수 내에서만 await 사용가능할듯
async function getList(){
    const func = async ()=>{
        let result;
        await fetch("/user/list", {method: 'POST'})
                .then(res => result=res.json())
                .catch(error => console.error('Error: ', error));
        return result;
    }
    return await func();
}
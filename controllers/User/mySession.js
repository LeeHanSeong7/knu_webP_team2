module.exports = (req,res) => {
    let usersession = {
        "userid" : req.session.userid,
        "status" : req.session.status,
    }
    res.json(usersession);
}
//클라이언트에서 요청하는 법 - 복사해 가세요
async function getSession(){
    const func = async ()=>{
        let result;
        await fetch("/user/mysession", {method: 'POST'})
                .then(res => result=res.json())
                .catch(error => console.error('Error: ', error));
        return result;
    }
    return await func();
}

//
// let mysession;
// const func = async ()=>{
//     await fetch("/user/mysession", {method: 'POST'})
//             .then(res => mysession=res.json())
//             .catch(error => console.error('Error: ', error));
// }; func();
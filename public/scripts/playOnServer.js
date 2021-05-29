async function playOnServer(callback, args, interval, waitTime){ // callback = 인터벌 활성화마다 output으로 실행될 콜백함수, args=[input,output], interval = update interval, waitTime = opponent timeout
    let mysession = await fetch("/user/mysession", {method: 'POST'}); mysession = await mysession.json();
    async function join(){
        let res = await fetch('/game/join',{method:'POST'});
        res = await res.json();
        if (res["res"] == "true"){
            args[1] = {
                "status":"queuing",
                "meg" : "wait...opponent",
            };
            callback(args[1]);
            gaming();
        }
        else{ 
            args[1] = {
                "status":"join fail",
                "meg" : "join fail",
            }; 
            callback(args[1]);
            return;
        }
    }
    async function gaming(){
        let timerId = setInterval( async ()=>{
            const body = args[0];
            let res = await fetch('/game/update',{
                'method' :'POST',
                'headers':{
                    'Content-Type' : 'application/json',
                },
                'body' : JSON.stringify(body),
            });
            res = await res.json();
            if (res["res"] == "true"){
                let opponent = res["opponent"];
                const myTime = new Date(res["lastConnect"][mysession.userid]).getTime();
                const targetTime = new Date(res["lastConnect"][opponent]).getTime();
                if (myTime - targetTime < waitTime){
                    let gameData = res["gameData"];
                    args[1] = {
                        "status":"updated",
                        "meg" : "updated",
                        "data":gameData[opponent]
                    };
                    callback(args[1]);
                }
                else{
                    args[1] = {
                        "status":"opponent disconnected",
                        "meg" : "opponent disconnected",
                    }; 
                    callback(args[1]);
                    clearInterval(timerId);
                }
            }
            else{
                args[1] = {
                    "status":"match ended",
                    "meg" : "match ended",
                }; 
                callback(args[1]);
                clearInterval(timerId);
            }
        },interval);
    }
    join();
}
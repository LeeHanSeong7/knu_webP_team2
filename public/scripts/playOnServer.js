function gameQuitOnclick(){
    location.href="/game/quit";
}

async function playOnServer(args, interval, waitTime){
    let mysession = await fetch("/user/mysession", {method: 'POST'}); mysession = await mysession.json();
    function failConnect(msg){
            alert(msg);
            gameQuitOnclick();
    }
    async function join(){
        let res = await fetch('/game/join',{method:'POST'});
        res = await res.json();
        if (res["res"] == "true"){
            gaming();
        }
        else{ failConnect("fail to join"); }
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
                    args[1] = gameData[opponent];
                }
                else{
                    failConnect("opponent disconnected");
                    clearInterval(timerId);
                }
            }
            else{
                failConnect("match ended");
                clearInterval(timerId);
            }
        },interval);
    }
    join();
}
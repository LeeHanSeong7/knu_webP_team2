async function serverInterval(route,method,callback, args, interval){
    let timerId = setInterval(async ()=>{
        if (args === null){
            let res = await fetch(route,{
                'method':method,
            });
            res = await res.json();
            callback(res);
        }
        else{
            console.log(args[0]["data"]);
            let res = await fetch(route,{
                'method':method,
                'headers':{
                    'Content-Type' : 'application/json',
                },
                'body': JSON.stringify(args[0]),
            });
            args[0]["data"] = [];
            res = await res.json();
            callback(res);
        }
    },interval);
}
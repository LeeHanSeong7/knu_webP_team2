async function serverInterval(route,method,callback, args, interval){
    let timeerId = setInterval(async ()=>{
        let res = await fetch(route,{
            'method':method,
            'body': JSON.stringify(args[0]),
        });
        res = await res.json();
        callback(res);
    },interval);
}
const queue = require('../../dataObject/gameInfoObject').game2pQueue;

module.exports = async (req,res) => {
    let tryCount = 50;
    if (req.session.status == "lobby"){
        if (queue.length == 0){
            queue.push(req.session.userid);
            let timerId = setInterval(()=>{
                tryCount += -1;
                if (tryCount == 0){
                    clearInterval(timerId);
                    res.json({
                        "res" : "false",
                        "status" : req.session.status,
                    });
                }
                if (queue.length == 0){
                    clearInterval(timerId);
                    req.session.status = "ready";
                    res.json({
                        "res" : "true",
                        "status" : req.session.status,
                    });
                }
            },100);
        }
        else{
            let value = queue.pop();
            if (value == req.session.userid){
                queue.push(value);
            }
            else{
                req.session.status = "ready";
                res.send({
                    "res" : "true",
                    "status" : req.session.status,
                });
            }
        }
    }
    else{
        res.json({
            "res" : "false",
            "status" : req.session.status,
        });
    }
}

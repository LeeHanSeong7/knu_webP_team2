const Rooms = require('../../dataObject/gameInfoObject').gameRooms;
const newMatch = require('../../dataObject/gameInfoObject').newMatch;
const getEmptyRoom = require('../../dataObject/gameInfoObject').getEmptyRoom;
const deleteMatch = require('../../dataObject/gameInfoObject').deleteMatch;

module.exports = async (req,res) => {
    let tryCount = 50;
    const interval = 100;
    if (req.session.status == "lobby"){
        let empty = getEmptyRoom(Rooms);
        if (empty === false){
            let matchId = newMatch(req.session.userid);
            let timerId = setInterval(()=>{
                tryCount += -1;
                if (tryCount == 0 || Rooms[matchId] === undefined){
                    clearInterval(timerId);
                    deleteMatch(matchId);
                    res.json({
                        "res" : "false",
                        "status" : req.session.status,
                    });
                }
                else if (Rooms[matchId].checkFull() == true){
                    clearInterval(timerId);
                    req.session.status = "gaming";
                    req.session.matchId = matchId;
                    res.json({
                        "res" : "true",
                        "status" : req.session.status,
                        "matchId" : req.session.matchId,
                    });
                }
            },interval);
        }
        else{
            Rooms[empty].join(req.session.userid);
            req.session.status = "gaming";
            req.session.matchId = empty;
            res.send({
                "res" : "true",
                "status" : req.session.status,
                "matchId" : req.session.matchId,
            });
        }
    }
    else{
        res.json({
            "res" : "false",
            "status" : req.session.status,
        });
    }
}

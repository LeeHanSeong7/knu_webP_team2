const Rooms = require('../../dataObject/gameInfoObject').gameRooms;
const newMatch = require('../../dataObject/gameInfoObject').newMatch;
const myRoom = require('../../dataObject/gameInfoObject').myRoom;
const getEmptyRoom = require('../../dataObject/gameInfoObject').getEmptyRoom;
const deleteMatch = require('../../dataObject/gameInfoObject').deleteMatch;

module.exports = async (req,res) => {
    let tryCount = -1;
    const interval = 100;

    let room = myRoom(req.session.userid);
    if (req.session.status == "gaming"){
        if (room !== false){
            deleteMatch(room,req.session.userid);
        }
    }
    else if (room == false){
        let empty = getEmptyRoom(req.session.userid);
        if (empty === false){
            let matchId = newMatch(req.session.userid);
            let timerId = setInterval(()=>{
                tryCount += -1;
                if (tryCount == 0 || Rooms[matchId] === undefined){
                    clearInterval(timerId);
                    deleteMatch(matchId,null);
                    res.json({
                        "res" : "false",
                        "status" : req.session.status,
                    });
                }
                else if (Rooms[matchId].checkFull() == true){
                    clearInterval(timerId);
                    req.session.status = "gaming";
                    req.session.matchId = matchId;
                    Rooms[matchId].lastConnect[req.session.userid] = new Date();
                    let opponent = Rooms[matchId].opponents(req.session.userid)[0];
                    res.json({
                        "res" : "true",
                        "status" : req.session.status,
                        "matchId" : req.session.matchId,
                        "opponent" : opponent,
                    });
                }
            },interval);
        }
        else{
            Rooms[empty].join(req.session.userid);
            req.session.status = "gaming";
            req.session.matchId = empty;
            let opponent = Rooms[empty].opponents(req.session.userid)[0];
    
            res.send({
                "res" : "true",
                "status" : req.session.status,
                "matchId" : req.session.matchId,
                "opponent" : opponent,
            });
        }
    }
}

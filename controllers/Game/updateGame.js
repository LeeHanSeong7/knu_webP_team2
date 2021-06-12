const Rooms = require('../../dataObject/gameInfoObject').gameRooms;
const myRoom = require('../../dataObject/gameInfoObject').myRoom;
const deleteMatch = require('../../dataObject/gameInfoObject').deleteMatch;

const waitTime = 3000;

module.exports = (req,res) => {
    let matchId = myRoom(req.session.userid);
    if (matchId === false){
        req.session.status = "lobby";
        req.session.matchId = null;
        res.json({
            "res" : "false",
            "status" : req.session.status,
        });
    }
    else{
        let match = Rooms[matchId];
        if (match === undefined){
            req.session.status = "lobby";
            req.session.matchId = null;
            res.json({
                "res" : "false",
                "status" : req.session.status,
            });
        }
        else{
            match.update(req.session.userid, req.body);
            let opponent = match.opponents(req.session.userid)[0];
            const myTime = new Date(match.lastConnect[req.session.userid]).getTime();
            const targetTime = new Date(match.lastConnect[opponent]).getTime();
            if (myTime - targetTime < waitTime){
                res.json({
                    "res" : "true",
                    "status" : req.session.status,
                    "opponent" : opponent,
                    "gameData" : match.gameData,
                    "lastConnect" : match.lastConnect,
                });
            }
            else{           
                deleteMatch(matchId,opponent);     
                res.json({
                    "res" : "true",
                    "status" : "opponent_timeOut"
                });
            }

        }
    }
}
const Rooms = require('../../dataObject/gameInfoObject').gameRooms;
const myRoom = require('../../dataObject/gameInfoObject').myRoom;
const deleteMatch = require('../../dataObject/gameInfoObject').deleteMatch;

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
            res.json({
                "res" : "true",
                "status" : req.session.status,
                "opponent" : match.opponents(req.session.userid)[0],
                "gameData" : match.gameData,
                "lastConnect" : match.lastConnect,
            });
        }
    }
}
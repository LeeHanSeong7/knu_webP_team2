const Rooms = require('../../dataObject/gameInfoObject').gameRooms;
const myRoom = require('../../dataObject/gameInfoObject').myRoom;
const deleteMatch = require('../../dataObject/gameInfoObject').deleteMatch;
module.exports = (req,res) => {
    if (req.session.status == "gaming"){
        let room = myRoom(req.session.userid);
        if (room !== false){
            deleteMatch(room);
        }
    }
    else if (req.session.status == "lobby"){
        let room = myRoom(req.session.userid);
        if (room !== false){
            deleteMatch(room);
        }
    }
    req.session.status = "lobby";
    req.session.matchId = null;
    res.redirect('/lobby');
}
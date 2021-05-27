const gameRooms = [];

class match {
    constructor(startMem){
        this.members = [startMem];
        this.maxNum = 2;
        this.gameData = {};
        this.gameData[startMem] = null;
        this.lastConnect = {};
        this.lastConnect[startMem] = new Date();
    };
    checkFull(){
        if (this.members.length == this.maxNum) return true;
        else return false;
    }
    join(newMem){
        this.members.push(newMem);
        this.gameData[newMem] = null;
        this.lastConnect[newMem] = new Date();
    }
    update(userid, gameData){
        this.gameData[userid] = gameData;
        this.lastConnect[userid] = new Date();
    }
    endGame(caller){
    }
}

function getEmptyRoom(Rooms){
    let i=0;
    for(i=i; i<Rooms.length; i++){
        if (Rooms[i] == undefined) continue;
        else if (Rooms[i].checkFull() == false){
            return i;
        }
    }
    return false;
}

function newMatch(startMem){
    let matchId = 0;
    while(true){
        if (gameRooms[matchId] == undefined){
            gameRooms[matchId] = new match(startMem);
            return matchId;
        }
        else
            matchId += 1;
    }

}
function myRoom(userid){
    for(let i=0; i<gameRooms.length;i++){
        if (gameRooms[i] == undefined) continue;
        else if (gameRooms[i].members.includes(userid) == true){
            return i;
        }
    }
    return false;
}
function deleteMatch(matchId){
    gameRooms[matchId] = undefined;
}

module.exports = {
    gameRooms, 
    match,
    getEmptyRoom,
    newMatch,deleteMatch,
    myRoom,
};
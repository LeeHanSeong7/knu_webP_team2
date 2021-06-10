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
    opponents(me){
        const arr = this.members.slice();
        const idx = arr.indexOf(me);
        if (idx == 0) arr.shift();
        else if(idx == 1) arr.pop();
        return arr;
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
function deleteMatch(matchId, caller){
    if (caller === null){ // 매치 자연제거
        
    }
    else if (caller === true){ // 매치 정상종료

    }
    else{ // caller가 비정상 종료, 불이익

    }
    gameRooms[matchId] = undefined;
}

module.exports = {
    gameRooms, 
    match,
    getEmptyRoom,
    newMatch,deleteMatch,
    myRoom,
};
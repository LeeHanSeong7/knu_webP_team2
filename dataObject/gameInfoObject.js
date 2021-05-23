const game2pQueue = [];
const gamingList = {};

class match {
    constructor(startMem){
        this.members = [startMem];
        this.memNum = 2;
        this.gameInfo = [null,null];
    };
}


module.exports = {
    game2pQueue, gamingList, match
};
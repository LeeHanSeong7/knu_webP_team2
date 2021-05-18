//const gameQueue = require('../../dataObject/gameQueueObject');

function loginOnclick(event){
    alert(event.srcElement);
    location.href="/lobby";
}

function game1pOnclick(){
    location.href="/game/1p";
}

function game2pOnclick(){
    location.href="/game/2p";
}

function queueStop(){

}

function gameQuitOnclick(){
    location.href="/lobby";
}
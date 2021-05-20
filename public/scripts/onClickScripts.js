//const gameQueue = require('../../dataObject/gameQueueObject');

function loginOnclick(event){
    //alert(event.target.parentElement);
    let req = new Request("/lobby");
    
    console.log(document.frm.);
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
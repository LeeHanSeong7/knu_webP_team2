const express = require('express');
const mongoose = require('./dataObject/DBObject');
const app = new express();

const expressSession = require('express-session');
app.use(expressSession({
    secret: 'keyboard cat'
}));

const ejs = require('ejs')
app.set('view engine', 'ejs')

const controllers = {
    "lobby" : require('./controllers/lobby'),
    "login" : require('./controllers/login'),
    "game1p" : require('./controllers/game1p'),
    "game2p" : require('./controllers/game2p'),
    "matchRecord" : require('./controllers/matchRecord'),
    "ranking" : require('./controllers/ranking'),
    "signUp" : require('./controllers/signUp'),
    "status" : require('./controllers/status'),
    "storeUser" : require('./controllers/User/storeUser'),
    "showHistory" : require('./controllers/Record/showHistory')
}
const MW = {
    "session" : require('./middleware/sessionChecker'),
}

let port = process.env.PORT;
if (port == null || port == ""){
    port = 4000;
}
app.listen(port, ()=>{console.log(`App listening on port ${port}`)});

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',controllers.login);
app.get('/lobby',MW.session,controllers.lobby);
app.get('/matchRecord',MW.session,controllers.matchRecord);
app.get('/ranking',MW.session,controllers.ranking);
app.get('/signUp',controllers.signUp);
app.get('/status',MW.session,controllers.status);
app.get('/game/1p',MW.session,controllers.game1p);
app.get('/game/2p',MW.session,controllers.game2p);
addAuthControl(app);
addUserControl(app);
addGameControl(app);
// addRecordControl(app);
//
function addAuthControl(expressApp){
    expressApp.post('/signUp/store', controllers.storeUser);
    expressApp.post('/auth/login',require('./controllers/Authetication/tryLogin'));
}
function addUserControl(expressApp){
    expressApp.post('/user/list',MW.session,require('./controllers/User/userList'));
    expressApp.post('/user/mysession',MW.session,require('./controllers/User/mySession'));
}
function addGameControl(expressApp){
    expressApp.post('/game/join',MW.session,require('./controllers/Game/joinGame'));
    expressApp.get('/game/quit',MW.session,require('./controllers/Game/quitGame'));
    expressApp.post('/game/update',MW.session,require('./controllers/Game/updateGame'));
}
function addRecordControl(expressApp){
    expressApp.get('/ranking/history', controllers.showHistory);
}
const express = require('express');
const app = new express();

const ejs = require('ejs')
app.set('view engine', 'ejs')

const controllers = {
    "lobby" : require('./controllers/lobby'),
    "login" : require('./controllers/login'),
    "game1p" : require('./controllers/game1p'),
    "game2p" : require('./controllers/game2p'),
    "matchRecord" : require('./controllers/matchRecord'),
    "ranking" : require('./controllers/ranking'),
    "signup" : require('./controllers/signup'),
    "status" : require('./controllers/status'),
}

let port = process.env.PORT;
if (port == null || port == ""){
    port = 4000;
}
app.listen(port, ()=>{console.log(`App listening on port ${port}`)});

app.get('/',controllers.login);
app.get('/lobby',controllers.lobby);
app.get('/game1p',controllers.game1p);
app.get('/game2p',controllers.game2p);
app.get('/matchRecord',controllers.matchRecord);
app.get('/ranking',controllers.ranking);
app.get('/signup',controllers.signup);
app.get('/status',controllers.status);

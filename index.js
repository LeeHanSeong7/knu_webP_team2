const express = require('express');
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
    "storeUser" : require('./controllers/storeUser'),
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
app.get('/lobby',controllers.lobby);
app.get('/game/1p',controllers.game1p);
app.get('/game/2p',controllers.game2p);
app.get('/matchRecord',controllers.matchRecord);
app.get('/ranking',controllers.ranking);
app.get('/signUp',controllers.signUp);
app.get('/status',controllers.status);
app.post('/signUp/store', controllers.storeUser);



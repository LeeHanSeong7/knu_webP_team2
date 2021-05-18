const express = require('express');
const app = new express();

const ejs = require('ejs')
app.set('view engine', 'ejs')

const controllers = {
    "home" : require('./controllers/home'),
    "login" : require('./controllers/login'),
}

let port = process.env.PORT;
if (port == null || port == ""){
    port = 4000;
}
app.listen(port, ()=>{console.log(`App listening on port ${port}`)});

app.get('/',controllers.login);

app.get('/home',controllers.home);

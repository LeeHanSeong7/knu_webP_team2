const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://webp2:tetris@tetris-cluster.lgfsy.mongodb.net/data', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true    
});

module.exports=mongoose;
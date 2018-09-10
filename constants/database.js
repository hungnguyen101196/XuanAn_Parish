const mongoose = require('mongoose');
const UserName = "nguyenhung";
const Password = "nguyenhung";
const host = "localhost:27017";
const DBName = "XuanAnParish";
 mongoose.connect(`mongodb://${UserName}:${Password}@${host}/${DBName}`)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected DB');
})

module.exports = mongoose;
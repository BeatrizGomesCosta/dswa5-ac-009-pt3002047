var http = require('http');
var app = require('./config/express')();

const url = 'mongodb+srv://BeatrizGomesCosta:bgc201100@cluster0.gdojq.mongodb.net/test?authSource=admin&replicaSet=atlas-oqekkv-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
require('./config/database.js')(url);


http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
})
const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular8-springboot-websocket'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/angular8-springboot-websocket/index.html'));
});

app.listen(process.env.PORT || 8080);
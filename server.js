
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

var PORT = process.env.PORT || 3000;


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.use(express.static(path.join(__dirname, "./public")));

//add the router
app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');



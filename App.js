let express = require('express');
let cookieParser = require('cookie-parser');

//setup express app
let app = express();

app.use(cookieParser());
//basic route for homepage
app.get('/', (req, res)=>{
    res.send('welcome to express app');
});


let user = {
    id: `AGENT_12345`
};

app.get('/set-user', (req, res) => {
    res.cookie("fp", user);
    res.send('fingerprint added to cookies');
});

app.get('/get-user', (req, res) => {
    if (req.cookies.fp) {
        res.send(req.cookies.fp);
    } else {
        res.send("no cookies found");
    }
});

//server listens to port 3000
app.listen(3000, (err)=>{
    if(err)
        throw err;
    console.log('listening on port 3000');
});

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// connect to mongodb
var db = mongoose.connect('mongodb://localhost:27017/homepage')
// mongoose models
var User = require('./models/user')
var Attendance = require('./models/attendance')
var Chore = require('./models/chore')
var ChoreDone = require('./models/chore_done');
const { response } = require('express');

// backend framework
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
    res.send('Yeet!');
});

function update_relevant(schema_obj, json) {
    // for updating only relevant information into query to be saved
    for (const key in schema_obj.schema.obj) {
        if (json[key]) {
            schema_obj[key] = json[key];
            console.log(`Key: ${key}`);
            console.log(`Value: ${json[key]}`);
        } else {
            schema_obj[key] = undefined
        }
        ;
    };
    console.log(`New Schema: ${schema_obj.toJSON()}`);
    return schema_obj
}

app.post('/createAccount', function(req, res) {
    var user = new User();
    var body = req.body;
    user = update_relevant(user, body)
    user.save(function(err, savedProduct) {
        if (err) {
            res.status(500).send({error: 'Unknown Error. Could not create Account'});
        } else {
            res.send(savedProduct);
        };
    });
});


app.post('/createChore', function(req, res) {
    var chore = new Chore();
    var body = req.body;
    var username = body.username;
    User.findOne({"username": username}, function(err, user) {
        if (err) {
            response.status(404).send({error: 'User not found'});
        } else {
            // if user is can be found
            var user_id = user._id
            console.log(user_id);
            // add user id to body
            body.added_by = user_id
            chore = update_relevant(chore, body)
            chore.save(function(err, savedProduct) {
                if (err) {
                    res.status(500).send({error: 'Unknown Error. Could not create Chore'});
                } else {
                    res.send(savedProduct);
                };
            });
        };
    });  
});

app.listen(3000, function (req, res) {
    console.log('Server started on port 3000');
});
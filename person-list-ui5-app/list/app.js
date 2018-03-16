process.env["NTBA_FIX_319"] = 1;
const Bot = require('node-telegram-bot-api');
const request = require('request');
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

const xsenv = require('@sap/xsenv');
const passport = require('passport');
const JWTStrategy = require('@sap/xssec').JWTStrategy;

const services = xsenv.getServices({ uaa:'sapassetmanagement-xsuaa' });
console.log('Services: -----------------> ' + JSON.stringify(services));
var vcap = JSON.parse(process.env.VCAP_SERVICES);
console.log('VCAP Value ----------------> ' + JSON.stringify(vcap));

/*passport.use(new JWTStrategy(services.uaa));

app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));*/

app.use(express.static(path.join(__dirname, 'webapp')));

/*app.get('/', function (req, res, next) {
    res.send('Application user: ' + req.user.id);
});*/


// API with schedule of space launches
const url = 'https://launchlibrary.net/1.3/launch';
const trigger = 'I want to travel!';    // user's input
const token = '';
// const serviceURL = 'https://ldai5er9.wdf.sap.corp:44300';
const serviceURL = 'https://sapassetmanagement.cfapps.eu10.hana.ondemand.com';

const bot = new Bot(token, {polling: true});

const prepareData = (body) => {
    const launches = JSON.parse(body).launches;
    return launches.filter((launch) => launch !== undefined)
        .map((launch) => `${launch.name} on ${launch.net}`)
        .join('\n\n');
};

bot.on('message', (msg) => {
    if (msg.text.toString() === trigger) {
        return request(url, (err, resp, body) => {
            bot.sendMessage(msg.chat.id, prepareData(body));
        });
    } else if (msg.text.toString() === 'Hi') {
        bot.sendMessage(msg.from.id, 'Welcome ' + msg.from.first_name);
        bot.sendMessage(msg.from.id, 'How may I assist you ?');
        /*let csrfToken;
        request({
            url: serviceURL + '/sap/opu/odata/SAP/Z_ASSET_MANAGEMENT_SRV/orderSet?$format=json',
            headers: {
                'Authorization': 'Basic TFVIQU5JV0FMOmUyZGhzZWFzaHVAQUtMJA==',
                'Content-Type': 'application/json',
                'x-csrf-token': 'Fetch'
            }
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                // csrfToken = response.headers['x-csrf-token'];
                // console.log('CSRF Token: ' + csrfToken);
                console.log('Error: ', error);
                console.log('Response: ', response);
                console.log('Body: ', body);
                // res.json(body);
                bot.sendMessage(msg.chat.id, 'Error: ' + error);
                bot.sendMessage(msg.chat.id, 'Response: ' + response);
                bot.sendMessage(msg.chat.id, 'Body: ' + body);
            }
        });*/
    }

    bot.sendMessage(msg.chat.id, 'Hi, do you want to travel?', {
        reply_markup: {
            keyboard: [[trigger], ['Bulk option']]
        }
    });
});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, (msg, match) => {
    let fromId = msg.from.id;
    let resp = match[1];
    bot.sendMessage(fromId, resp);
});

bot.onText(/\/insult/, (msg, match) => {
    let insults = ['Dumbass', 'Out of 100,000 sperm, you were the fastest?', 'Look, you aint funny. Your life is just a joke.'];
    let chosenInsult = insults[Math.floor(Math.random() * insults.length)];
    bot.sendMessage(msg.from.id, chosenInsult);
});

bot.onText(/\/help/, (msg, match) => {
    bot.sendMessage(msg.from.id, 'This bot just have one single command. \n/insult - Insult you.');
});

function serverCall() {
    // let csrfToken;
        request({
            url: serviceURL + '/sap/opu/odata/SAP/Z_ASSET_MANAGEMENT_SRV/orderSet',
            // url: '/sap/opu/odata/SAP/Z_ASSET_MANAGEMENT_SRV/orderSet?$format=json',
            headers: {
                'Authorization': 'Basic TFVIQU5JV0FMOmUyZGhzZWFzaHVAQUtMJA==',
                'Content-Type': 'application/json',
                'x-csrf-token': 'Fetch'
            }
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                // csrfToken = response.headers['x-csrf-token'];
                // console.log('CSRF Token: ' + csrfToken);
                console.log('Error: ---------------------------> ', JSON.stringify(error));
                console.log('Response: -------------------------> ', JSON.stringify(response));
                console.log('Body:------------------------> ', JSON.stringify(body));
                // res.json(body);
                // bot.sendMessage(msg.chat.id, 'Error: ' + error);
                // bot.sendMessage(msg.chat.id, 'Response: ' + response);
                // bot.sendMessage(msg.chat.id, 'Body: ' + body);
            } else {
                console.log('If error occurs, then the Error: ------------------> ', JSON.stringify(error));
                console.log('If error occurs, then the Response: ---------------> ', JSON.stringify(response));
                console.log('If error occurs, then the Body: ->>>>>>>>>>>>>>>>>>>> ', JSON.stringify(body));
            }
        });

    /*try {
        request({
            uri: serviceURL + '/sap/opu/odata/SAP/Z_ASSET_MANAGEMENT_SRV/orderSet?$format=json',
            method: 'GET',
            headers: {
                'Authorization': 'Basic TFVIQU5JV0FMOmUyZGhzZWFzaHVAQUtMJA==',
                'Content-Type': 'application/json',
                'x-csrf-token': 'Fetch'
            }
        }, function(error, response, body) {
            console.log("setting db options.");
            if (!error && response.statusCode == 200) {
                var checkResponseBody = JSON.parse(body);
                console.log(checkResponseBody);
                console.log('Response -------------> ' + response);
                options = checkResponseBody['credentials'];
                var userConfig = {};
                userConfig.host = options.host;
                userConfig.port = options.port;
                userConfig.user = options.user;
                userConfig.password = options.password;
                userConfig.schema = options.schema;
                processData(req, res, userConfig, identityZone);
            }
        });

    } catch (err) {
        console.log("Something went wrong with the connection!");
        console.log(err);
    }*/
}

serverCall();

app.listen(process.env.PORT || 3000, () => {
    console.log('App running on port 3000');
});
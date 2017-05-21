var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(5060, () => console.log('Webhook server listening at port 5060'));

var verificationController = require('./controllers/verification.js');
var messageWebhookController = require('./controllers/messageWebhook.js');

app.get('/', verificationController);
app.post('/', messageWebhookController);
var FACEBOOK_ACCESS_TOKEN = 'EAAa5hwC72EcBAPgnpfY0ZCjqTGbvQHavL0fmThuZAle64ZBwcouwmN4swgzEzZC4G0svBwEWO0kyOZBaGZAxSZC9guod8o0Gie3SymUnE8MjZBc7sGryqC3aDjXOxE0wdbXuYJQcU42HQqlnugOF05jNwj8tHTI6Y6baXeVDJRjx7QZDZD';
var CAT_IMAGE_URL = 'https://botcube.co/public/blog/apiai-tutorial-bot/hosico_cat.jpg';

var request = require('request');

module.exports = (event) => {
    var senderId = event.sender.id;
    var message = event.message.text;

    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: FACEBOOK_ACCESS_TOKEN},
        method: 'POST',
        json: {
            recipient: {id: senderId},
            message: {
                "text": "this is a hotdog"
            }
        }
    });
}
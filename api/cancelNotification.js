const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {
    req.body.args = _.clearArgs(req.body.args, false);

    let { 
        appId,
        appKey,
        notificationId,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!appId || !notificationId || !appKey) {
        _.echoBadEnd(r, to, res, 'appId, notificationId, appKey');
        return;
    }

    let options = {
        method: 'DELETE',
        url: `https://onesignal.com/api/v1/notifications/${notificationId}?app_id=${appId}`, 
        headers: {
            'Content-Type':  `application/json`,
            'Authorization': `Basic ${appKey}`
        }
    }

    return request(options, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            r.contextWrites[to] = JSON.parse(body);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.parse(err || body);
            r.callback = 'error';
        }

        res.status(200).send(r);
    })
    //.auth(null, null, true, apiKey);
}
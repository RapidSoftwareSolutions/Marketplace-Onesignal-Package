const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { appKey, appId, notificationId, to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!appKey || !appId || !notificationId) {
        _.echoBadEnd(r, to, res, 'appKey, appId, notificationId');
        return;
    }

    let options = {
        url: `https://onesignal.com/api/v1/notifications/${notificationId}?app_id=${appId}`,
        headers: {
            'Authorization': `Basic ${appKey}`
        }
    };

    return request(options, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            r.contextWrites[to] = JSON.parse(body);
            r.callback = 'success'; 
        } else {
            try{
                // 404 html page
                r.contextWrites[to] = JSON.parse(err || body)
            } catch(e) {
                r.contextWrites[to] = 'Notification not found.'
            }
            r.callback = 'error';
        }

        res.status(200).send(r);
    });
}
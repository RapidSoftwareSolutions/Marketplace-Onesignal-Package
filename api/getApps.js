const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

    req.body.args = _.clearArgs(req.body.args);

    let { userAuthKey, to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!userAuthKey) {
        _.echoBadEnd(r, to, res, 'userAuthKey');
        return;
    }

    let options = {
        url: `https://onesignal.com/api/v1/apps`,
        headers: {
            'Authorization': `Basic ${userAuthKey}`
        }
    };

    return request(options, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            r.contextWrites[to] = JSON.parse(body);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.parse(err || body);
            r.callback = 'error';
        }

        res.status(200).send(r);
    });
}
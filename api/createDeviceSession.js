const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

    // rpt bug
    req.body.args = _.clearArgs(req.body.args, false);

    let { 

        deviceId,
        identifier, 
        language, 
        timezone, 
        gameVersion, 
        deviceOs, 
        adId, 
        sdk, 
        tags, 
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!deviceId) {
        _.echoBadEnd(r, to, res);
        return;
    }

    let bodyOptions = {
        identifier: identifier,
        language: language,
        timezone: timezone,
        game_version: gameVersion,
        device_os: deviceOs,
        ad_id: adId,
        sdk: sdk,
        tags: tags
    };

    bodyOptions = _.clearArgs(bodyOptions, true);

    let options = {
        method: 'POST',
        url: `https://onesignal.com/api/v1/players/${deviceId}/on_session`, 
        body: JSON.stringify(bodyOptions),
        headers: {
            'Content-Type':  `application/json`,
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
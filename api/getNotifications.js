const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

	req.body.args = _.clearArgs(req.body.args);

	let { appKey, appId, to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!appKey || !appId) {
		_.echoBadEnd(r, to, res);
		return;
	}

	let options = {
		url: `https://onesignal.com/api/v1/notifications?app_id=${appId}`,
		headers: {
			'Authorization': `Basic ${appKey}`
		}
	};

	return request(options, (err, response, body) => {
		if(!err && response.statusCode == 200) {
    		r.contextWrites[to] = body;
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.stringify(err || body);
            r.callback = 'error';
        }

        res.status(200).send(r);
	});
}
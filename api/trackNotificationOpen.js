const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

	// rpt bug
	req.body.args = _.clearArgs(req.body.args, false);

	let { 
		appId,
		notificationId,
		opened,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!appId || !notificationId || !opened) {
		_.echoBadEnd(r, to, res);
		return;
	}

	opened = opened == 'true' ? true : false;

	let bodyOptions = {
		app_id: appId,
		opened: opened
	};

	let options = {
		method: 'PUT',
		url: `https://onesignal.com/api/v1/notifications/${notificationId}`, 
		body: JSON.stringify(bodyOptions),
		headers: {
			'Content-Type': `application/json`
		}
	}

	return request(options, (err, response, body) => {
		if(!err && response.statusCode == 200) {
    		r.contextWrites[to] = body;
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.stringify(err || body);
            r.callback = 'error';
        }

        res.status(200).send(r);
	})
	//.auth(null, null, true, apiKey);
}
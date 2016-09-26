const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

	// rpt bug
	req.body.args = _.clearArgs(req.body.args, false);

	let { 
		deviceId,
		state, 
		activeTime, 
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };


	if(!deviceId || !state || !activeTime) {
		_.echoBadEnd(r, to, res);
		return;
	}

	let bodyOptions = {
		state: state,
		active_time: activeTime
	};

	bodyOptions = _.clearArgs(bodyOptions, true);

	let options = {
		method: 'POST',
		url: `https://onesignal.com/api/v1/players/${deviceId}/on_focus`, 
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
const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

	// rpt bug
	req.body.args = _.clearArgs(req.body.args, false);

	let { 
		appId,
		deviceType,
		identifier, 
		language, 
		timezone, 
		gameVersion, 
		deviceModel, 
		deviceOs, 
		adId, 
		sdk, 
		sessionCount, 
		tags, 
		amountSpent, 
		createdAt, 
		playtime, 
		badgeCount, 
		lastActive, 
		testType,
		notificationTypes,
		lat,
		long,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!appId || !deviceType) {
		_.echoBadEnd(r, to, res);
		return;
	}

	let bodyOptions = {
		app_id: appId,
		device_type: deviceType,
		identifier: identifier,
		language: language,
		timezone: timezone,
		game_version: gameVersion,
		device_model: deviceModel,
		device_os: deviceOs,
		ad_id: adId,
		sdk: sdk,
		session_count: sessionCount,
		tags: tags,
		amount_spent: amountSpent, 
		created_at: createdAt,
		playtime: playtime,
		badge_count: badgeCount,
		last_active: lastActive,
		test_type: testType,
		lat: parseFloat(lat),
		long: parseFloat(long),
		notification_types: notificationTypes
	};

	bodyOptions = _.clearArgs(bodyOptions, true);

	let options = {
		method: 'POST',
		url: `https://onesignal.com/api/v1/players`, 
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
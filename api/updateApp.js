const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

    // rpt bug
    req.body.args = _.clearArgs(req.body.args, false);

    let { 
        userAuthKey,
				appId,
        name,
				apnsEnv, 
				apnsP12,
				apnsP12password,
				gcmKey,
				androidGcmSenderId,
				chromeWebOrigin,
				chromeWebDefaultNotificationIcon,
				chromeWebSubDomain,
				safariApnsP12,
				safariApnsP12Password,
				siteName,
				safariSiteOrigin,
				safariIcon,
				chromeKey,
				to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
		};
	
    if(!userAuthKey || !name || !appId) {
        _.echoBadEnd(r, to, res, 'userAuthKey, name, appId');
        return;
    }


    let bodyOptions = {
				name: name,
				apns_env: apnsEnv,
				apns_p12: apnsP12,
				apns_p12_password: apnsP12password,
				gcm_key: gcmKey,
				android_gcm_sender_id: androidGcmSenderId,
				chrome_web_origin: chromeWebOrigin,
				chrome_web_default_notification_icon: chromeWebDefaultNotificationIcon,
				chrome_web_sub_domain: chromeWebSubDomain,
				safari_apns_p12: safariApnsP12,
				safari_apns_p12_password: safariApnsP12Password,
				site_name: siteName,
				safari_site_origin: safariSiteOrigin,
				safari_icon_256_256: safariIcon,
				chrome_key: chromeKey
		};
		
    bodyOptions = _.clearArgs(bodyOptions, true);

    let options = {
        method: 'PUT',
        url: `https://onesignal.com/api/v1/apps/${appId}`,
        body: JSON.stringify(bodyOptions),
        headers: {
						'Content-Type': `application/json`,
						'Authorization': `Basic ${userAuthKey}`
        }
		}
		

    return request(options, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            r.contextWrites[to] = JSON.parse(body);
            r.callback = 'success';
        } else {
          try{
            r.contextWrites[to] = JSON.parse(err || body);
            r.callback = 'error';
          }
          catch(body){
            r.contextWrites[to] = 'Not found'
            r.callback = 'error';
          }
        }

        res.status(200).send(r);
    })
}
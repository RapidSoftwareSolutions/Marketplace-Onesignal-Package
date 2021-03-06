const app     = require('../index');
const assert  = require('chai').assert;
const request = require('supertest-as-promised');

const appKey = 'NTQxM2UzYjgtZDE0Zi00ODk1LTllMGYtMjM2OGZhMWRmNDQ2',
		userAuthKey = 'OGVkYjNjNTEtOGIwNy00ZjU5LTk3MDctZDM4MTJkNWQ1MGVj',
    appId = '4ad249c4-1dba-4ac9-97a8-15f3efd2845b',
    deviceId = '7d14056c-4422-4a28-9082-fd713c418d7f',
    deviceType = 4,
    deviceModel = 'Android',
    identifier = 'aaa-bbbb-ccc',
    language = 'es',
    language2 = 'en',
    opened = 'true',
    activeTime = 60,
    purchaseSku = 'SKU-211',
    purchaseAmount = '0.88',
    state = 'ping',
    purchaseIso = 'USD',
    includedSegments = 'Active Users',
    contents = {"en": "English Message", "es": "Spanish Message"};

let notificationId = '';

describe('OneSignal package', () => {
    it('/getDevices', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getDevices`)
        .send({args:{appKey, appId, limit, offset}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

		it('/getApps', () => {
			return request(app)
			.post(`/api/${global.PACKAGE_NAME}/getApps`)
			.send({args:{userAuthKey}})
			.expect(200)
			.then((res) => {
					assert.equal(res.body.callback, 'success');
			});
		});
		
		it('/getApps', () => {
			return request(app)
			.post(`/api/${global.PACKAGE_NAME}/getApps`)
			.send({args:{userAuthKey}})
			.expect(200)
			.then((res) => {
					assert.equal(res.body.callback, 'success');
			});
		});

		it('/getApp', () => {
			return request(app)
			.post(`/api/${global.PACKAGE_NAME}/getApp`)
			.send({args:{userAuthKey}})
			.expect(200)
			.then((res) => {
					assert.equal(res.body.callback, 'success');
			});
		});

		it('/createApp', () => {
			return request(app)
			.post(`/api/${global.PACKAGE_NAME}/createApp`)
			.send({args:{
				userAuthKey,
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
				chromeKey,}})
			.expect(200)
			.then((res) => {
					assert.equal(res.body.callback, 'success');
			});
		});

		it('/updateApp', () => {
			return request(app)
			.post(`/api/${global.PACKAGE_NAME}/updateApp`)
			.send({args:{
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
				chromeKey,}})
			.expect(200)
			.then((res) => {
					assert.equal(res.body.callback, 'success');
			});
		});


    it('/addDevice', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/addDevice`)
        .send({args:{appKey, appId, deviceType, identifier, language, deviceModel, tags}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/editDevice', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/editDevice`)
        .send({args:{appKey, appId, deviceId, identifier, language: language2, tags}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/addDevicePurchase', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/addDevicePurchase`)
        .send({args:{deviceId, purchaseSku, purchaseAmount, purchaseIso}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/createDeviceSession', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/createDeviceSession`)
        .send({args:{deviceId, identifier, language}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });


    it('/updateDeviceSessionLength', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/updateDeviceSessionLength`)
        .send({args:{deviceId, state, activeTime}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/sendNotification', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/sendNotification`)
        .send({args:{appId, appKey, includedSegments, contents}})
        .expect(200)
        .then((res) => {
            notificationId = res.body.contextWrites.to.id;
            assert.equal(res.body.callback, 'success');
        });
    });


    it('/getNotifications', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getNotifications`)
        .send({args:{appId, appKey, limit, offset}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/getNotification', function() {
        this.timeout(10000);

        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getNotification`)
        .send({args:{appId, appKey, notificationId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/trackNotificationOpen', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/trackNotificationOpen`)
        .send({args:{appId, notificationId, opened}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });

    it('/cancelNotification', () => {
        return request(app)
        .post(`/api/${global.PACKAGE_NAME}/cancelNotification`)
        .send({args:{appId, appKey, notificationId}})
        .expect(200)
        .then((res) => {
            assert.equal(res.body.callback, 'success');
        });
    });
});

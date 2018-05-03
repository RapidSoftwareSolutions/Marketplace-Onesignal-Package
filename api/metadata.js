module.exports.do = function (req, res) {
	res.status(200).send({
		'package': 'OneSignal',
		"tagline": "Onesignal package",
		"keywords": ["API", "alert", "alerts", "marketing", "messaging", "mobile", "notification", "notifications", "notify", "push"],
		"description": "Push Notification delivery and automation.",
		'image': 'https://onesignal.com/images/notification_logo.png',
		'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-onesignal-package',
		'accounts': {
			'domain': 'onesignal.com',
			'credentials': [
				'appKey', 'appId'
			]
		},
		'blocks': [{
				"name": "getDevices",
				"description": "View the details of multiple devices in one of your OneSignal apps",
				"args": [{
						name: "appKey",
						type: "credentials",
						info: "Required: REST API keys are used for API calls on a specific app's notifications or devices.",
						required: true,
					},
					{
						name: "appId",
						type: "credentials",
						info: "Required: Your app id for this device.",
						required: true,
					},
					{
						name: "limit",
						type: "String",
						info: "How many devices to return. Max is 300. Default is 300",
						required: false,
					},
					{
						name: "offset",
						type: "String",
						info: "Result offset. Default is 0. Results are sorted by id;",
						required: false,
					},
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "getApps",
				"description": "View the details of all of your current OneSignal apps",
				"args": [{
					name: "userAuthKey",
					type: "credentials",
					info: "Required: REST User Auth Key are used for API calls on a specific app's notifications or devices.",
					required: true,
				}, ],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "getApp",
				"description": "View the details of a single OneSignal app",
				"args": [{
						name: "userAuthKey",
						type: "credentials",
						info: "Required: REST API User Auth Key are used for API calls on a specific app's notifications or devices.",
						required: true,
					},
					{
						name: "appId",
						type: "credentials",
						info: "Required: An app id",
						required: true,
					},
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "createApp",
				"description": "Creates a new OneSignal app",
				"args": [{
						name: "userAuthKey",
						type: "credentials",
						info: "Required: REST API keys are used for API calls on a specific app's notifications or devices.",
						required: true,
					},
					{
						name: "name",
						type: "String",
						info: "Required: The name of your new app, as displayed on your apps list on the dashboard. This can be renamed later.",
						required: true,
					},
					{
						name: "apnsEnv",
						type: "Select",
						options: ["sandbox", "production"],
						info: "Optional: iOS - Either sandbox or production",
						required: false,
					},
					{
						name: "aapnsP12",
						type: "String",
						info: "Optional: iOS - Your apple push notification p12 certificate file, converted to a string and Base64 encoded.",
						required: false,
					},
					{
						name: "apnsP12password",
						type: "String",
						info: "Optional: iOS - Password for the apns_p12 file",
						required: false,
					},
					{
						name: "gcmKey",
						type: "String",
						info: "Optional: ANDROID - Your Google Push Messaging Auth Key",
						required: false,
					},
					{
						name: "androidGcmSenderId",
						type: "String",
						info: "Optional: ANDROID - Your Google Project number. Also know as Sender ID.",
						required: false,
					},
					{
						name: "chromeWebOrigin",
						type: "String",
						info: "Optional: CHROME, FIREFOX - The URL to your website. This field is required if you wish to enable web push and specify other web push parameters.",
						required: false,
					},
					{
						name: "chromeWebDefaultNotificationIcon",
						type: "String",
						info: "Optional: CHROME - Your default notification icon. Should be 80x80 pixels.",
						required: false,
					},
					{
						name: "chromeWebSubDomain",
						type: "String",
						info: "Optional: CHROME - A subdomain of your choice in order to support Chrome Web Push on non-HTTPS websites. This field must be set in order for the chrome_web_gcm_sender_id property to be processed.",
						required: false,
					},
					{
						name: "safariApnsP12",
						type: "String",
						info: "Optional: SAFARI - Your apple push notification p12 certificate file for Safari Push Notifications, converted to a string and Base64 encoded.",
						required: false,
					},
					{
						name: "safariApnsP12Password",
						type: "String",
						info: "Optional: SAFARI - Password for safari_apns_p12 file",
						required: false,
					},
					{
						name: "siteName",
						type: "String",
						info: "Optional: SAFARI - The URL to your website",
						required: false,
					},
					{
						name: "safariSiteOrigin",
						type: "String",
						info: "Optional: SAFARI - The hostname to your website including http(s)://",
						required: false,
					},
					{
						name: "safariIcon",
						type: "String",
						info: "Optional: SAFARI - A url for a 256x256 png notification icon. This is the only Safari icon URL you need to provide.",
						required: false,
					},
					{
						name: "chromeKey",
						type: "String",
						info: "Optional: NOT FOR WEB PUSH Your Google Push Messaging Auth Key if you use Chrome Apps / Extensions.",
						required: false,
					},
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "updateApp",
				"description": "Updates the name or configuration settings of an existing OneSignal app",
				"args": [{
						name: "userAuthKey",
						type: "credentials",
						info: "Required: REST API keys are used for API calls on a specific app's notifications or devices.",
						required: true,
					},
					{
						name: "appId",
						type: "credentials",
						info: "Required: App Id",
						required: true,
					},
					{
						name: "name",
						type: "String",
						info: "Required: The name of your new app, as displayed on your apps list on the dashboard. This can be renamed later.",
						required: true,
					},
					{
						name: "apnsEnv",
						type: "Select",
						options: ["sandbox", "production"],
						info: "Optional: iOS - Either sandbox or production",
						required: false,
					},
					{
						name: "aapnsP12",
						type: "String",
						info: "Optional: iOS - Your apple push notification p12 certificate file, converted to a string and Base64 encoded.",
						required: false,
					},
					{
						name: "apnsP12password",
						type: "String",
						info: "Optional: iOS - Password for the apns_p12 file",
						required: false,
					},
					{
						name: "gcmKey",
						type: "String",
						info: "Optional: ANDROID - Your Google Push Messaging Auth Key",
						required: false,
					},
					{
						name: "androidGcmSenderId",
						type: "String",
						info: "Optional: ANDROID - Your Google Project number. Also know as Sender ID.",
						required: false,
					},
					{
						name: "chromeWebOrigin",
						type: "String",
						info: "Optional: CHROME, FIREFOX - The URL to your website. This field is required if you wish to enable web push and specify other web push parameters.",
						required: false,
					},
					{
						name: "chromeWebDefaultNotificationIcon",
						type: "String",
						info: "Optional: CHROME - Your default notification icon. Should be 80x80 pixels.",
						required: false,
					},
					{
						name: "chromeWebSubDomain",
						type: "String",
						info: "Optional: CHROME - A subdomain of your choice in order to support Chrome Web Push on non-HTTPS websites. This field must be set in order for the chrome_web_gcm_sender_id property to be processed.",
						required: false,
					},
					{
						name: "safariApnsP12",
						type: "String",
						info: "Optional: SAFARI - Your apple push notification p12 certificate file for Safari Push Notifications, converted to a string and Base64 encoded.",
						required: false,
					},
					{
						name: "safariApnsP12Password",
						type: "String",
						info: "Optional: SAFARI - Password for safari_apns_p12 file",
						required: false,
					},
					{
						name: "siteName",
						type: "String",
						info: "Optional: SAFARI - The URL to your website",
						required: false,
					},
					{
						name: "safariSiteOrigin",
						type: "String",
						info: "Optional: SAFARI - The hostname to your website including http(s)://",
						required: false,
					},
					{
						name: "safariIcon",
						type: "String",
						info: "Optional: SAFARI - A url for a 256x256 png notification icon. This is the only Safari icon URL you need to provide.",
						required: false,
					},
					{
						name: "chromeKey",
						type: "String",
						info: "Optional: NOT FOR WEB PUSH Your Google Push Messaging Auth Key if you use Chrome Apps / Extensions.",
						required: false,
					},
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "getDevice",
				"description": "View the details of an existing device in one of your OneSignal apps",
				"args": [{
						name: "appKey",
						type: "credentials",
						info: "Required: REST API keys are used for API calls on a specific app's notifications or devices.",
						required: true,
					},
					{
						name: "appId",
						type: "credentials",
						info: "Required: Your app id for this device.",
						required: true,
					},
					{
						name: "deviceId",
						type: "String",
						info: "Required: Player's OneSignal ID.",
						required: true,
					},
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "addDevice",
				"description": "Register a new device to one of your OneSignal apps",
				"args": [{
						name: "appId",
						type: "credentials",
						info: "Required: Your app id for this device.",
						required: true,
					},
					{
						name: "deviceType",
						type: "Select",
						options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
						info: "Required: The device's platform: `0` = iOS; `1` = Android; `2` = Amazon; `3` = WindowsPhone(MPNS); `4` = Chrome Apps / Extensions; `5` = Chrome Web Push; `6` = WindowsPhone(WNS); `7` = Safari; `8` = Firefox; `9` = MacOS",
						required: true,
					},
					{
						name: "identifier",
						type: "String",
						info: "Optional: Push notification identifier from Google or Apple. For Apple push identifiers, you must strip all non alphanumeric characters. Example: `ce777617da7f548fe7a9ab6febb56`.",
						required: false,
					},
					{
						name: "language",
						type: "String",
						info: "Optional: Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: `en`.",
						required: false,
					},
					{
						name: "timezone",
						type: "Number",
						info: "Optional: Number of seconds away from UTC. Example: `-28800`.",
						required: false,
					},
					{
						name: "gameVersion",
						type: "String",
						info: "Optional: Version of your app. Example: `1.1`.",
						required: false,
					},
					{
						name: "deviceModel",
						type: "String",
						info: "Optional: Device make and model. Example: `iPhone5,1`.",
						required: false,
					},
					{
						name: "deviceOs",
						type: "String",
						info: "Optional: Device operating system version. Example: `7.0.4`.",
						required: false,
					},
					{
						name: "adId",
						type: "String",
						info: "Optional: The ad id for the device's platform: Android = `Advertising Id`; iOS = `identifierForVendor`; WP8.0 = `DeviceUniqueId`; WP8.1 = `AdvertisingId`.",
						required: false,
					},
					{
						name: "sdk",
						type: "String",
						info: "Optional: Name and version of the plugin that's calling this API method (if any).",
						required: false,
					},
					{
						name: "sessionCount",
						type: "Number",
						info: "Optional: Number of times the user has played the game, defaults to 1.",
						required: false,
					},
					{
						name: "tags",
						type: "Array", // Hash
						info: 'Optional: Custom tags for the player. Only support string key value pairs. Does not support arrays or other nested objects. Example: `{"foo":"bar","this":"that"}`.',
						required: false,
						"structure": [{
								"name": "key",
								"type": "String",
								"info": "Index targeted by the query.",
								"required": true
							},
							{
								"name": "value",
								"type": "String",
								"info": "URL-encoded list of search parameters.",
								"required": true
							}
						]
					},
					{
						name: "amountSpent",
						type: "String",
						info: "Optional: Amount the user has spent in USD, up to two decimal places.",
						required: false,
					},
					{
						name: "playtime",
						type: "Number",
						info: "Optional: Seconds player was running your app.",
						required: false,
					},
					{
						name: "createdAt",
						type: "DatePicker",
						info: "Optional: Unixtime when the player joined the game.",
						required: false,
					},
					{
						name: "badgeCount",
						type: "Number",
						info: "Optional: Current iOS badge count displayed on the app icon.",
						required: false,
					},
					{
						name: "lastActive",
						type: "DatePicker",
						info: "Optional: Unixtime when the player was last active.",
						required: false,
					},
					{
						name: "testType",
						type: "Select",
						options: ["1", "2"],
						info: "Optional: This is used in deciding whether to use your iOS Sandbox or Production push certificate when sending a push when both have been uploaded. Set to the iOS provisioning profile that was used to build your app. `1` = Development; `2` = Ad-Hoc. Omit this field for App Store builds.",
						required: false,
					},
					{
						name: "notificationTypes",
						type: "Select",
						options: ["1", "-2"],
						info: "Optional: `1` = subscribed; `-2` = unsubscribed. iOS - These values are set each time the user opens the app from the SDK. Use the SDK function set Subscription instead. Android - You may set this but you can no longer use the SDK method setSubscription later in your app as it will create synchronization issues.",
						required: false,
					},
					{
						name: "coordinates",
						type: "Map",
						info: "Optional: Latitude and Longitude of the device, used for geotagging to segment on. Example: 51.514084206610455, -51.514084206610455",
						required: false,
					}
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "editDevice",
				"description": "Update an existing device in one of your OneSignal apps",
				"args": [{
						name: "appId",
						type: "credentials",
						info: "Required: Your app id for this device.",
						required: true,
					},
					{
						name: "deviceId",
						type: "String",
						info: "Required: The device's OneSignal ID.",
						required: true,
					},
					{
						name: "identifier",
						type: "String",
						info: "Optional: Push notification identifier from Google or Apple. For Apple push identifiers, you must strip all non alphanumeric characters. Example: `ce777617da7f548fe7a9ab6febb56`.",
						required: false,
					},
					{
						name: "language",
						type: "String",
						info: "Optional: Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: `en`.",
						required: false,
					},
					{
						name: "timezone",
						type: "Number",
						info: "Optional: Number of seconds away from UTC. Example: `-28800`.",
						required: false,
					},
					{
						name: "gameVersion",
						type: "String",
						info: "Optional: Version of your app. Example: `1.1`.",
						required: false,
					},
					{
						name: "deviceModel",
						type: "String",
						info: "Optional: Device make and model. Example: `iPhone5,1`.",
						required: false,
					},
					{
						name: "deviceOs",
						type: "String",
						info: "Optional: Device operating system version. Example: `7.0.4`.",
						required: false,
					},
					{
						name: "adId",
						type: "String",
						info: "Optional: The ad id for the device's platform: Android = `Advertising Id`; iOS = `identifierForVendor`; WP8.0 = `DeviceUniqueId`; WP8.1 = `AdvertisingId`.",
						required: false,
					},
					{
						name: "sdk",
						type: "String",
						info: "Optional: Name and version of the plugin that's calling this API method (if any).",
						required: false,
					},
					{
						name: "sessionCount",
						type: "Number",
						info: "Optional: Number of times the user has played the game, defaults to 1.",
						required: false,
					},
					{
						name: "tags",
						type: "JSON", // Hash
						info: 'Optional: Custom tags for the player. Only support string key value pairs. Does not support arrays or other nested objects. Example: `{"foo":"bar","this":"that"}`.',
						required: false,
					},
					{
						name: "amountSpent",
						type: "String",
						info: "Optional: Amount the user has spent in USD, up to two decimal places.",
						required: false,
					},
					{
						name: "playtime",
						type: "Number",
						info: "Optional: Unixtime when the player joined the game.",
						required: false,
					},
					{
						name: "createdAt",
						type: "DatePicker",
						info: "Optional: Unixtime when the player joined the game.",
						required: false,
					},
					{
						name: "badgeCount",
						type: "Number",
						info: "Optional: Current iOS badge count displayed on the app icon.",
						required: false,
					},
					{
						name: "lastActive",
						type: "DatePicker",
						info: "Optional: Unixtime when the player was last active.",
						required: false,
					},
					{
						name: "testType",
						type: "Select",
						options: ["1", "2"],
						info: "Optional: This is used in deciding whether to use your iOS Sandbox or Production push certificate when sending a push when both have been uploaded. Set to the iOS provisioning profile that was used to build your app. `1` = Development; `2` = Ad-Hoc. Omit this field for App Store builds.",
						required: false,
					},
					{
						name: "notificationTypes",
						type: "Select",
						options: ["1", "-2"],
						info: "Optional: `1` = subscribed; `-2` = unsubscribed. iOS - These values are set each time the user opens the app from the SDK. Use the SDK function set Subscription instead. Android - You may set this but you can no longer use the SDK method setSubscription later in your app as it will create synchronization issues.",
						required: false,
					},
					{
						name: "coordinates",
						type: "Map",
						info: "Optional: Latitude and Longitude of the device, used for geotagging to segment on. Example: 51.514084206610455, -51.514084206610455",
						required: false,
					}
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "createDeviceSession",
				"description": "Update a device's session information",
				"args": [{
						name: "deviceId",
						type: "String",
						info: "Required: The device's OneSignal ID.",
						required: true,
					},
					{
						name: "identifier",
						type: "String",
						info: "Optional: Push notification identifier from Google or Apple. For Apple push identifiers, you must strip all non alphanumeric characters. Example: `ce777617da7f548fe7a9ab6febb56`.",
						required: false,
					},
					{
						name: "language",
						type: "String",
						info: "Optional: Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: `en`.",
						required: false,
					},
					{
						name: "timezone",
						type: "Number",
						info: "Optional: Number of seconds away from UTC. Example: `-28800`.",
						required: false,
					},
					{
						name: "gameVersion",
						type: "String",
						info: "Optional: Version of your app. Example: `1.1`.",
						required: false,
					},
					{
						name: "deviceOs",
						type: "String",
						info: "Optional: Device operating system version. Example: `7.0.4`.",
						required: false,
					},
					{
						name: "adId",
						type: "String",
						info: "Optional: The ad id for the device's platform: Android = `Advertising Id`; iOS = `identifierForVendor`; WP8.0 = `DeviceUniqueId`; WP8.1 = `AdvertisingId`.",
						required: false,
					},
					{
						name: "sdk",
						type: "String",
						info: "Optional: Name and version of the plugin that's calling this API method (if any).",
						required: false,
					},
					{
						name: "tags",
						type: "JSON", // Hash
						info: 'Optional: Custom tags for the player. Only support string key value pairs. Does not support arrays or other nested objects. Example: `{"foo":"bar","this":"that"}`.',
						required: false,
					},
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "addDevicePurchase",
				"description": "Track a new purchase in your app",
				"args": [{
						name: "deviceId",
						type: "String",
						info: "Required: The device's OneSignal ID.",
						required: true,
					},
					{
						name: "purchaseSku",
						type: "String",
						info: "Required: The unique identifier of the purchased item.",
						required: true,
					},
					{
						name: "purchaseAmount",
						type: "String", // Double
						info: "Required: The amount, in USD, spent purchasing the item.",
						required: true,
					},
					{
						name: "purchaseIso",
						type: "String",
						info: "Required: The 3-letter ISO 4217 currency code. Required for correct storage and conversion of amount.",
						required: true,
					},
					{
						name: "existing",
						type: "Select",
						options: ["true", "false"],
						info: "Pass true on the first run of your app if you're tracking existing non-consumable purchases. This prevents tracking the same purchases more than once if the user re-installs your app.",
						required: false,
					}
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "updateDeviceSessionLength",
				"description": "Update a device's session length upon app resuming",
				"args": [{
						name: "deviceId",
						type: "String",
						info: "Required: The device's OneSignal ID.",
						required: true,
					},
					{
						name: "state",
						type: "String",
						info: "Required: Set to 'ping'",
						required: true,
					},
					{
						name: "activeTime",
						type: "Number",
						info: "Required: The lesser of: The number of seconds since either: 1. on_focus was last called OR 2. on_session or the device first registered (POST /players)",
						required: true,
					},
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "getNotifications",
				"description": "View the details of multiple notifications",
				"args": [{
						name: "appKey",
						type: "credentials",
						info: "Required: REST API keys are used for API calls on a specific app's notifications or devices.",
						required: true,
					},
					{
						name: "appId",
						type: "credentials",
						info: "Required: Your app id for this device.",
						required: true,
					},
					{
						name: "limit",
						type: "String",
						info: "How many devices to return. Max is 300. Default is 300",
						required: false,
					},
					{
						name: "offset",
						type: "String",
						info: "Result offset. Default is 0. Results are sorted by id;",
						required: false,
					},
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "getNotification",
				"description": "View the details of a single notification",
				"args": [{
						name: "appKey",
						type: "credentials",
						info: "Required: REST API keys are used for API calls on a specific app's notifications or devices.",
						required: true,
					},
					{
						name: "appId",
						type: "credentials",
						info: "Required: Your app id for this device.",
						required: true,
					},
					{
						name: "notificationId",
						type: "String",
						info: "Required: Notification ID.",
						required: true,
					},
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "trackNotificationOpen",
				"description": "Track when users open a notification",
				"args": [{
						name: "appId",
						type: "credentials",
						info: "Required: OneSignal app id.",
						required: true,
					},
					{
						name: "notificationId",
						type: "String",
						info: "Required: Notification ID.",
						required: true,
					},
					{
						name: "opened",
						type: "Select",
						options: ["true", "false"],
						info: "Required: Set to `true`.",
						required: true,
					}
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "sendNotification",
				"description": "Sends notifications to your users",
				"args": [{
						name: "appKey",
						type: "credentials",
						info: "Required: REST API keys are used for API calls on a specific app's notifications or devices.",
						required: true,
					},
					{
						name: "appId",
						type: "credentials",
						info: "Required: Your OneSignal application ID, which can be found in Keys & IDs. It is a UUID and looks similar to `8250eaf6-1a58-489e-b136-7c74a864b434`.",
						required: true,
					},
					{
						name: "appIds",
						type: "List",
						info: "Optional: Example: [`2dd608f2-a6a1-11e3-251d-400c2940e62b`, `2dd608f2-a6a1-11e3-251d-500f2950e61c`].",
						required: false,
						"structure": {
							"name": "id",
							"type": "String",
							"info": "App id"
						}
					},
					{
						name: "includedSegments",
						type: "List",
						info: "Required: Comma-separated list of the segment names you want to target. Users in these segments will receive a notification. This targeting parameter is only compatible with excluded_segments. Example: [`Active Users`, `Inactive Users`]",
						required: true,
						structure: {
							"name": "segment",
							"type": "String",
							"info": "Example: Active Users"
						}
					},
					{
						name: "excludedSegments",
						type: "List",
						info: "Optional: Comma-separated list of segment that will be excluded when sending. Users in these segments will not receive a notification, even if they were included in included_segments. This targeting parameter is only compatible with included_segments. Example: [`Active Users`, `Inactive Users`]",
						required: false,
						"structure": {
							"name": "segment",
							"type": "String",
							"info": "Example: Active Users"
						}
					},

					{
						name: "includePlayerIds",
						type: "List",
						info: "Optional: Comma-separated list of pecific players to send your notification to. Does not require API Auth Key. combine with other targeting parameters. Not compatible with any other targeting parameters. Example: [`1dd608f2-c6a1-11e3-851d-000c2940e62c`, `1dd608f2-c6a1-11e3-851d-000c2940e62c`]",
						required: false,
						"structure": {
							"name": "PlayerId",
							"type": "String",
							"info": "Player Id"
						}
					},
					{
						name: "contents",
						type: "JSON",
						info: 'REQUIRED: unless content_available=true or template_id is set. The notification`s content (excluding the title), a map of language codes to text for each language. Each hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language. English must be included in the hash.Example: `{"en": "English Message", "es": "Spanish Message"}`',
						required: false,
					},
					{
						name: "headings",
						type: "JSON",
						info: 'Optional: The notification`s title, a map of language codes to text for each language. Each hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language. A default title may be displayed if a title is not provided. Example: `{"en": "English Title", "es": "Spanish Title"}`',
						required: false,
					},
					{
						name: "templateId",
						type: "String",
						info: "Optional: Use a template you setup on our dashboard. You can override the template values by sending other parameters with the request. The template_id is the UUID found in the URL when viewing a template on our dashboard.",
						required: false,
					},
					{
						name: "contentAvailable",
						type: "String", //Boolean
						info: "Optional: Sends content-available=1 to wake your app to run custom native code.",
						required: false,
					},
					{
						name: "filters",
						type: "String",
						info: "Optional: The filters parameter targets notification recipients using an array of JSON objects containing field conditions to check.",
						required: false
					},
					{
						name: "mutableContent",
						type: "String", //Boolean
						info: "Optional: Allows you to change the notification content in your app before it is displayed. ",
						required: false,
					},
					{
						name: "data",
						type: "JSON",
						info: 'Optional: A custom map of data that is passed back to your app. Example: `{"abc": "123", "foo": "bar"}`',
						required: false,
					},
					{
						name: "url",
						type: "String",
						info: "Optional: The URL to open in the browser when a user clicks on the notification. Example: `http://www.google.com`",
						required: false,
					},
					{
						name: "bigPicture",
						type: "String",
						info: "Optional: Picture to display in the expanded view. Can be a drawable resource name or a URL.",
						required: false,
					},
					{
						name: "admBigPicture",
						type: "String",
						info: "Optional: Picture to display in the expanded view. Can be a drawable resource name or a URL.",
						required: false,
					},
					{
						name: "chromeBigPicture",
						type: "String",
						info: "Optional: Large picture to display below the notification text. Must be a local URL.",
						required: false,
					},
					{
						name: "buttons",
						type: "JSON",
						info: 'Optional: Buttons to add to the notification. Icon only works for Android. Example: `[{"id": "id1", "text": "button1", "icon": "ic_menu_share"}, {"id": "id2", "text": "button2", "icon": "ic_menu_send"}]`',
						required: false,
					},
					{
						name: "webButtons",
						type: "JSON",
						info: 'Optional: Add action buttons to the notification. The id field is required. `[{"id": "like-button", "text": "Like", "icon": "http://i.imgur.com/N8SN8ZS.png", "url": "https://yoursite.com"}, {"id": "read-more-button", "text": "Read more", "icon": "http://i.imgur.com/MIxJp1L.png", "url": "https://yoursite.com"}]`',
						required: false,
					},
					{
						name: "iosCategory",
						type: "String",
						info: "Optional: Category APS payload, use with registerUserNotificationSettings:categories in your Objective-C / Swift code. Example: `calendar` category which contains actions like `accept` and `decline`",
						required: false,
					},
					{
						name: "androidBackgroundLayout",
						type: "JSON",
						info: 'Optional: Allowing setting a background image for the notification. This is a JSON object containing the following keys. `image` - Asset file, android resource name, or URL to remote image. recommend size: 1582x256; `headings_color` - Title text color ARGB Hex format. Example(Blue): "FF0000FF". `contents_color` - Body text color ARGB Hex format. Example(Red): "FFFF0000". Example: `{"image": "https://domain.com/background_image.jpg", "headings_color": "FFFF0000", "contents_color": "FF00FF00"}`',
						required: false,
					},
					{
						name: "smallIcon",
						type: "String",
						info: "Optional: If blank the app icon is used. Must be the drawable resource name.",
						required: false,
					},
					{
						name: "largeIcon",
						type: "String",
						info: "Optional: If blank the small_icon is used. Can be a drawable resource name or a URL.",
						required: false,
					},
					{
						name: "chromeWebIcon",
						type: "String",
						info: "Optional: Sets the web push notification's icon. An image URL linking to a valid image. Common image types are supported; GIF will not animate. We recommend 256x256 (at least 80x80) to display well on high DPI devices",
						required: false,
					},
					{
						name: "admSmallIcon",
						type: "String",
						info: "Optional: Specific Amazon icon to use. If blank the app icon is used. Must be the drawable resource name.",
						required: false,
					},
					{
						name: "admLargeIcon",
						type: "String",
						info: "Optional: Specific Amazon icon to use. If blank the app icon is used. Must be the drawable resource name.",
						required: false,
					},
					{
						name: "chromeIcon",
						type: "String",
						info: "Optional: For web push, please see chromeWebIcon instead.",
						required: false,
					},
					{
						name: "iosSound",
						type: "String",
						info: "Optional: Sound file that is included in your app to play instead of the default device notification sound. Pass 'nil' to disable vibration and sound for the notification.",
						required: false,
					},
					{
						name: "androidSound",
						type: "String",
						info: "Optional: Sound file that is included in your app to play instead of the default device notification sound. NOTE: Leave off file extension for Android.",
						required: false,
					},
					{
						name: "admSound",
						type: "String",
						info: "Optional: Sound file that is included in your app to play instead of the default device notification sound. NOTE: Leave off file extension for Android.",
						required: false,
					},
					{
						name: "wpSound",
						type: "String",
						info: "Optional: Sound file that is included in your app to play instead of the default device notification sound.",
						required: false,
					},
					{
						name: "wpWnsSound",
						type: "String",
						info: "Optional: Sound file that is included in your app to play instead of the default device notification sound.",
						required: false,
					},
					{
						name: "androidLedColor",
						type: "String",
						info: "Optional: Sets the devices LED notification light if the device has one. ARGB Hex format.",
						required: false,
					},
					{
						name: "androidAccentColor",
						type: "String",
						info: "Optional: Sets the background color of the notification circle to the left of the notification text. Only applies to apps targeting Android API level 21+ on Android 5.0+ devices.",
						required: false,
					},
					{
						name: "androidVisibility",
						type: "Select",
						options: ["-1", "0", "1"],
						info: 'Optional: `1` = Public (default) (Shows the full message on the lock screen unless the user has disabled all notifications from showing on the lock screen. Please consider the user and mark private if the contents are.) `0` = Private (Hides message contents on lock screen if the user set "Hide sensitive notification content" in the system settings) `-1` = Secret (Notification does not show on the lock screen at all)',
						required: false,
					},
					{
						name: "iosBadgeType",
						type: "String",
						info: "Optional: Describes whether to set or increase/decrease your app's iOS badge count by the `ios_badgeCount` specified count. Can specify `None`, `SetTo`, or `Increase`. `None` leaves the count unaffected.`SetTo` directly sets the badge count to the number specified in ios_badgeCount. `Increase` adds the number specified in ios_badgeCount to the total. Use a negative number to decrease the badge count.",
						required: false,
					},
					{
						name: "iosBadgeCount",
						type: "Number",
						info: "Optional: Used with `ios_badgeType`, describes the value to set or amount to increase/decrease your app's iOS badge count by. You can use a negative number to decrease the badge count when used with an `ios_badgeType` of `Increase`.",
						required: false,
					},
					{
						name: "sendAfter",
						type: "String",
						info: "Optional: Schedule notification for future delivery. Examples: All examples are the exact same date & time. `Thu Sep 24 2015 14:00:00 GMT-0700 (PDT)`; `September 24th 2015, 2:00:00 pm UTC-07:00`; `2015-09-24 14:00:00 GMT-0700`; `Sept 24 2015 14:00:00 GMT-0700`; `Thu Sep 24 2015 14:00:00 GMT-0700 (Pacific Daylight Time)`",
						required: false,
					},
					{
						name: "delayedOption",
						type: "String",
						info: "Optional: Possible values are: `timezone` (Deliver at a specific time-of-day in each users own timezone); `last-active` (Deliver at the same time of day as each user last used your app). If `send_after` is used, this takes effect after the send_after time has elapsed.",
						required: false,
					},
					{
						name: "ttl",
						type: "Number",
						info: "Optional: Time To Live - In seconds. The notification will be expired if the device does not come back online within this time. The default is 259,200 seconds (3 days).",
						required: false,
					},
					{
						name: "isIos",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all devices registered under your app's Apple iOS platform.",
						required: false,
					},
					{
						name: "isAndroid",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicats whether to send to all devices registered under your app's Google Android platform.",
						required: false,
					},
					{
						name: "isAnyWeb",
						type: "Select", //Boolean
						options: ["isChromeWeb", "isFirefox", "isSafari"],
						info: "Optional: Indicates whether to send to all subscribed web browser users, including Chrome, Firefox, and Safari. You may use this instead as a combined flag instead of separately enabling `isChromeWeb`, `isFirefox`, and `isSafari`, though the three options are equivalent to this one.",
						required: false,
					},
					{
						name: "isChromeWeb",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all Google Chrome, Chrome on Android, and Mozilla Firefox users registered under your Chrome & Firefox web push platform.",
						required: false,
					},
					{
						name: "isFirefox",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all Mozilla Firefox desktop users registered under your Firefox web push platform.",
						required: false,
					},
					{
						name: "isSafari",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all Apple's Safari desktop users registered under your Safari web push platform.isWP",
						required: false,
					},
					{
						name: "isWP",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all devices registered under your app's Windows Phone 8.0 platform.",
						required: false,
					},
					{
						name: "isWP_WNS",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all devices registered under your app's Windows Phone 8.1+ platform.",
						required: false,
					},
					{
						name: "isAdm",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all devices registered under your app's Amazon Fire platform.",
						required: false,
					},
					{
						name: "isChrome",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Please see `isChromeWeb` for sending to web push users. This flag only applies to Google Chrome Apps & Extensions.",
						required: false,
					},
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "notificationTest",
				"description": "Sends notifications to your users",
				"args": [{
						name: "appKey",
						type: "credentials",
						info: "Required: REST API keys are used for API calls on a specific app's notifications or devices.",
						required: true,
					},
					{
						name: "appId",
						type: "credentials",
						info: "Required: Your OneSignal application ID, which can be found in Keys & IDs. It is a UUID and looks similar to `8250eaf6-1a58-489e-b136-7c74a864b434`.",
						required: true,
					},
					{
						name: "appIds",
						type: "List",
						info: "Optional: Example: [`2dd608f2-a6a1-11e3-251d-400c2940e62b`, `2dd608f2-a6a1-11e3-251d-500f2950e61c`].",
						required: false,
						"structure": {
							"name": "id",
							"type": "String",
							"info": "App id"
						}
					},
					{
						name: "includedSegments",
						type: "List",
						info: "Required: Comma-separated list of the segment names you want to target. Users in these segments will receive a notification. This targeting parameter is only compatible with excluded_segments. Example: [`Active Users`, `Inactive Users`]",
						required: true,
						structure: {
							"name": "segment",
							"type": "String",
							"info": "Example: Active Users"
						}
					},
					{
						name: "excludedSegments",
						type: "List",
						info: "Optional: Comma-separated list of segment that will be excluded when sending. Users in these segments will not receive a notification, even if they were included in included_segments. This targeting parameter is only compatible with included_segments. Example: [`Active Users`, `Inactive Users`]",
						required: false,
						"structure": {
							"name": "segment",
							"type": "String",
							"info": "Example: Active Users"
						}
					},

					{
						name: "includePlayerIds",
						type: "List",
						info: "Optional: Comma-separated list of pecific players to send your notification to. Does not require API Auth Key. combine with other targeting parameters. Not compatible with any other targeting parameters. Example: [`1dd608f2-c6a1-11e3-851d-000c2940e62c`, `1dd608f2-c6a1-11e3-851d-000c2940e62c`]",
						required: false,
						"structure": {
							"name": "PlayerId",
							"type": "String",
							"info": "Player Id"
						}
					},
					{
						name: "contents",
						type: "JSON",
						info: 'REQUIRED: unless content_available=true or template_id is set. The notification`s content (excluding the title), a map of language codes to text for each language. Each hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language. English must be included in the hash.Example: `{"en": "English Message", "es": "Spanish Message"}`',
						required: true,
					},
					{
						name: "headings",
						type: "JSON",
						info: 'Optional: The notification`s title, a map of language codes to text for each language. Each hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language. A default title may be displayed if a title is not provided. Example: `{"en": "English Title", "es": "Spanish Title"}`',
						required: false,
					},
					{
						name: "templateId",
						type: "String",
						info: "Optional: Use a template you setup on our dashboard. You can override the template values by sending other parameters with the request. The template_id is the UUID found in the URL when viewing a template on our dashboard.",
						required: false,
					},
					{
						name: "contentAvailable",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Sends content-available=1 to wake your app to run custom native code.",
						required: false,
					},
					{
						name: "filters",
						type: "String",
						info: "Optional: The filters parameter targets notification recipients using an array of JSON objects containing field conditions to check.",
						required: false
					},
					{
						name: "mutableContent",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Allows you to change the notification content in your app before it is displayed. ",
						required: false,
					},
					{
						name: "data",
						type: "JSON",
						info: 'Optional: A custom map of data that is passed back to your app. Example: `{"abc": "123", "foo": "bar"}`',
						required: false,
					},
					{
						name: "url",
						type: "String",
						info: "Optional: The URL to open in the browser when a user clicks on the notification. Example: `http://www.google.com`",
						required: false,
					},
					{
						name: "bigPicture",
						type: "String",
						info: "Optional: Picture to display in the expanded view. Can be a drawable resource name or a URL.",
						required: false,
					},
					{
						name: "admBigPicture",
						type: "String",
						info: "Optional: Picture to display in the expanded view. Can be a drawable resource name or a URL.",
						required: false,
					},
					{
						name: "chromeBigPicture",
						type: "String",
						info: "Optional: Large picture to display below the notification text. Must be a local URL.",
						required: false,
					},
					{
						name: "buttons",
						type: "JSON",
						info: 'Optional: Buttons to add to the notification. Icon only works for Android. Example: `[{"id": "id1", "text": "button1", "icon": "ic_menu_share"}, {"id": "id2", "text": "button2", "icon": "ic_menu_send"}]`',
						required: false,
					},
					{
						name: "webButtons",
						type: "JSON",
						info: 'Optional: Add action buttons to the notification. The id field is required. `[{"id": "like-button", "text": "Like", "icon": "http://i.imgur.com/N8SN8ZS.png", "url": "https://yoursite.com"}, {"id": "read-more-button", "text": "Read more", "icon": "http://i.imgur.com/MIxJp1L.png", "url": "https://yoursite.com"}]`',
						required: false,
					},
					{
						name: "iosCategory",
						type: "String",
						info: "Optional: Category APS payload, use with registerUserNotificationSettings:categories in your Objective-C / Swift code. Example: `calendar` category which contains actions like `accept` and `decline`",
						required: false,
					},
					{
						name: "androidBackgroundLayout",
						type: "JSON",
						info: 'Optional: Allowing setting a background image for the notification. This is a JSON object containing the following keys. `image` - Asset file, android resource name, or URL to remote image. recommend size: 1582x256; `headings_color` - Title text color ARGB Hex format. Example(Blue): "FF0000FF". `contents_color` - Body text color ARGB Hex format. Example(Red): "FFFF0000". Example: `{"image": "https://domain.com/background_image.jpg", "headings_color": "FFFF0000", "contents_color": "FF00FF00"}`',
						required: false,
					},
					{
						name: "smallIcon",
						type: "String",
						info: "Optional: If blank the app icon is used. Must be the drawable resource name.",
						required: false,
					},
					{
						name: "largeIcon",
						type: "String",
						info: "Optional: If blank the small_icon is used. Can be a drawable resource name or a URL.",
						required: false,
					},
					{
						name: "chromeWebIcon",
						type: "String",
						info: "Optional: Sets the web push notification's icon. An image URL linking to a valid image. Common image types are supported; GIF will not animate. We recommend 256x256 (at least 80x80) to display well on high DPI devices",
						required: false,
					},
					{
						name: "admSmallIcon",
						type: "String",
						info: "Optional: Specific Amazon icon to use. If blank the app icon is used. Must be the drawable resource name.",
						required: false,
					},
					{
						name: "admLargeIcon",
						type: "String",
						info: "Optional: Specific Amazon icon to use. If blank the app icon is used. Must be the drawable resource name.",
						required: false,
					},
					{
						name: "chromeIcon",
						type: "String",
						info: "Optional: For web push, please see chromeWebIcon instead.",
						required: false,
					},
					{
						name: "iosSound",
						type: "String",
						info: "Optional: Sound file that is included in your app to play instead of the default device notification sound. Pass 'nil' to disable vibration and sound for the notification.",
						required: false,
					},
					{
						name: "androidSound",
						type: "String",
						info: "Optional: Sound file that is included in your app to play instead of the default device notification sound. NOTE: Leave off file extension for Android.",
						required: false,
					},
					{
						name: "admSound",
						type: "String",
						info: "Optional: Sound file that is included in your app to play instead of the default device notification sound. NOTE: Leave off file extension for Android.",
						required: false,
					},
					{
						name: "wpSound",
						type: "String",
						info: "Optional: Sound file that is included in your app to play instead of the default device notification sound.",
						required: false,
					},
					{
						name: "wpWnsSound",
						type: "String",
						info: "Optional: Sound file that is included in your app to play instead of the default device notification sound.",
						required: false,
					},
					{
						name: "androidLedColor",
						type: "String",
						info: "Optional: Sets the devices LED notification light if the device has one. ARGB Hex format.",
						required: false,
					},
					{
						name: "androidAccentColor",
						type: "String",
						info: "Optional: Sets the background color of the notification circle to the left of the notification text. Only applies to apps targeting Android API level 21+ on Android 5.0+ devices.",
						required: false,
					},
					{
						name: "androidVisibility",
						type: "Select",
						options: ["-1", "0", "1"],
						info: 'Optional: `1` = Public (default) (Shows the full message on the lock screen unless the user has disabled all notifications from showing on the lock screen. Please consider the user and mark private if the contents are.) `0` = Private (Hides message contents on lock screen if the user set "Hide sensitive notification content" in the system settings) `-1` = Secret (Notification does not show on the lock screen at all)',
						required: false,
					},
					{
						name: "iosBadgeType",
						type: "String",
						info: "Optional: Describes whether to set or increase/decrease your app's iOS badge count by the `ios_badgeCount` specified count. Can specify `None`, `SetTo`, or `Increase`. `None` leaves the count unaffected.`SetTo` directly sets the badge count to the number specified in ios_badgeCount. `Increase` adds the number specified in ios_badgeCount to the total. Use a negative number to decrease the badge count.",
						required: false,
					},
					{
						name: "iosBadgeCount",
						type: "Number",
						info: "Optional: Used with `ios_badgeType`, describes the value to set or amount to increase/decrease your app's iOS badge count by. You can use a negative number to decrease the badge count when used with an `ios_badgeType` of `Increase`.",
						required: false,
					},
					{
						name: "sendAfter",
						type: "String",
						info: "Optional: Schedule notification for future delivery. Examples: All examples are the exact same date & time. `Thu Sep 24 2015 14:00:00 GMT-0700 (PDT)`; `September 24th 2015, 2:00:00 pm UTC-07:00`; `2015-09-24 14:00:00 GMT-0700`; `Sept 24 2015 14:00:00 GMT-0700`; `Thu Sep 24 2015 14:00:00 GMT-0700 (Pacific Daylight Time)`",
						required: false,
					},
					{
						name: "delayedOption",
						type: "String",
						info: "Optional: Possible values are: `timezone` (Deliver at a specific time-of-day in each users own timezone); `last-active` (Deliver at the same time of day as each user last used your app). If `send_after` is used, this takes effect after the send_after time has elapsed.",
						required: false,
					},
					{
						name: "ttl",
						type: "Number",
						info: "Optional: Time To Live - In seconds. The notification will be expired if the device does not come back online within this time. The default is 259,200 seconds (3 days).",
						required: false,
					},
					{
						name: "isIos",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all devices registered under your app's Apple iOS platform.",
						required: false,
					},
					{
						name: "isAndroid",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicats whether to send to all devices registered under your app's Google Android platform.",
						required: false,
					},
					{
						name: "isAnyWeb",
						type: "Select",
						options: ["true", "false"],
						options: ["isChromeWeb", "isFirefox", "isSafari"],
						info: "Optional: Indicates whether to send to all subscribed web browser users, including Chrome, Firefox, and Safari. You may use this instead as a combined flag instead of separately enabling `isChromeWeb`, `isFirefox`, and `isSafari`, though the three options are equivalent to this one.",
						required: false,
					},
					{
						name: "isChromeWeb",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all Google Chrome, Chrome on Android, and Mozilla Firefox users registered under your Chrome & Firefox web push platform.",
						required: false,
					},
					{
						name: "isFirefox",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all Mozilla Firefox desktop users registered under your Firefox web push platform.",
						required: false,
					},
					{
						name: "isSafari",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all Apple's Safari desktop users registered under your Safari web push platform.isWP",
						required: false,
					},
					{
						name: "isWP",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all devices registered under your app's Windows Phone 8.0 platform.",
						required: false,
					},
					{
						name: "isWP_WNS",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all devices registered under your app's Windows Phone 8.1+ platform.",
						required: false,
					},
					{
						name: "isAdm",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Indicates whether to send to all devices registered under your app's Amazon Fire platform.",
						required: false,
					},
					{
						name: "isChrome",
						type: "Select",
						options: ["true", "false"],
						info: "Optional: Please see `isChromeWeb` for sending to web push users. This flag only applies to Google Chrome Apps & Extensions.",
						required: false,
					},
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
			{
				"name": "cancelNotification",
				"description": "Stop a scheduled or currently outgoing notification",
				"args": [{
						name: "appKey",
						type: "credentials",
						info: "Required: REST API keys are used for API calls on a specific app's notifications or devices.",
						required: true,
					},
					{
						name: "appId",
						type: "credentials",
						info: "Required: Your app id for this device.",
						required: true,
					},
					{
						name: "notificationId",
						type: "String",
						info: "Required: Notification ID.",
						required: true,
					},
				],
				'callbacks': [{
						'name': 'error',
						'info': 'Error'
					},
					{
						'name': 'success',
						'info': 'Success'
					}
				]
			},
		]
	})
}
module.exports.do = function(req, res){
    /* When sending GET request to api/Twitter, return the metadata of the package */
    res.status(200).send({
        'package': 'OneSignal',
        "tagline": "Onesignal package",
        "description": "Push Notification delivery and automation.",
        'image': 'https://onesignal.com/images/notification_logo.png',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-onesignal-package',
        'accounts': {
            'domain': 'onesignal.com',
            'credentials': [
                'userKey', 'appKey', 'appId'
            ]
        },
        'blocks': [{
            "name":"getDevices",
            "args":[
                {
                    name: "appKey",
                    type: "credentials",
                    info: "REST API keys are used for API calls on a specific app's notifications or devices.",
                },
                {
                    name: "appId",
                    type: "String",
                    info: "Your app id for this device.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getDevice",
            "args":[
                {
                    name: "appKey",
                    type: "credentials",
                    info: "REST API keys are used for API calls on a specific app's notifications or devices.",
                },
                {
                    name: "appId",
                    type: "String",
                    info: "Your app id for this device.",
                },
                {
                    name: "deviceId",
                    type: "String",
                    info: "Player's OneSignal ID.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"addDevice",
            "args":[
                {
                    name: "appId",
                    type: "String",
                    info: "Your app id for this device.",
                },
                {
                    name: "deviceType",
                    type: "Number",
                    info: "The device's platform: `0` = iOS; `1` = Android; `2` = Amazon; `3` = WindowsPhone(MPNS); `4` = Chrome Apps / Extensions; `5` = Chrome Web Push; `6` = WindowsPhone(WNS); `7` = Safari; `8` = Firefox; `9` = MacOS",
                },
                {
                    name: "identifier",
                    type: "String",
                    info: "Push notification identifier from Google or Apple. For Apple push identifiers, you must strip all non alphanumeric characters. Example: `ce777617da7f548fe7a9ab6febb56`.",
                },
                {
                    name: "language",
                    type: "String",
                    info: "Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: `en`.",
                },
                {
                    name: "timezone",
                    type: "Number",
                    info: "Number of seconds away from UTC. Example: `-28800`.",
                },
                {
                    name: "gameVersion",
                    type: "String",
                    info: "Version of your app. Example: `1.1`.",
                },
                {
                    name: "deviceModel",
                    type: "String",
                    info: "Device make and model. Example: `iPhone5,1`.",
                },
                {
                    name: "deviceOs",
                    type: "String",
                    info: "Device operating system version. Example: `7.0.4`.",
                },
                {
                    name: "adId",
                    type: "String",
                    info: "The ad id for the device's platform: Android = `Advertising Id`; iOS = `identifierForVendor`; WP8.0 = `DeviceUniqueId`; WP8.1 = `AdvertisingId`.",
                },
                {
                    name: "sdk",
                    type: "String",
                    info: "Name and version of the plugin that's calling this API method (if any).",
                },
                {
                    name: "sessionCount",
                    type: "Number",
                    info: "Number of times the user has played the game, defaults to 1.",
                },
                {
                    name: "tags",
                    type: "String", // Hash
                    info: 'Custom tags for the player. Only support string key value pairs. Does not support arrays or other nested objects. Example: `{"foo":"bar","this":"that"}`.',
                },
                {
                    name: "amountSpent",
                    type: "String",
                    info: "Amount the user has spent in USD, up to two decimal places.",
                },
                {
                    name: "playtime",
                    type: "Number",
                    info: "Unixtime when the player joined the game.",
                },
                {
                    name: "createdAt",
                    type: "Number",
                    info: "Unixtime when the player joined the game.",
                },
                {
                    name: "badgeCount",
                    type: "Number",
                    info: "Current iOS badge count displayed on the app icon.",
                },
                {
                    name: "lastActive",
                    type: "Number",
                    info: "Unixtime when the player was last active.",
                },
                {
                    name: "testType",
                    type: "Number",
                    info: "This is used in deciding whether to use your iOS Sandbox or Production push certificate when sending a push when both have been uploaded. Set to the iOS provisioning profile that was used to build your app. `1` = Development; `2` = Ad-Hoc. Omit this field for App Store builds.",
                },
                {
                    name: "notificationTypes",
                    type: "String",
                    info: "`1` = subscribed; `-2` = unsubscribed. iOS - These values are set each time the user opens the app from the SDK. Use the SDK function set Subscription instead. Android - You may set this but you can no longer use the SDK method setSubscription later in your app as it will create synchronization issues.",
                },
                {
                    name: "lat",
                    type: "String", //Double
                    info: "Latitude of the device, used for geotagging to segment on.",
                },
                {
                    name: "long",
                    type: "String", //Double
                    info: "Longitude of the device, used for geotagging to segment on.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"editDevice",
            "args":[
                {
                    name: "appId",
                    type: "String",
                    info: "Your app id for this device.",
                },
                {
                    name: "deviceId",
                    type: "String",
                    info: "The device's OneSignal ID.",
                },
                {
                    name: "identifier",
                    type: "String",
                    info: "Push notification identifier from Google or Apple. For Apple push identifiers, you must strip all non alphanumeric characters. Example: `ce777617da7f548fe7a9ab6febb56`.",
                },
                {
                    name: "language",
                    type: "String",
                    info: "Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: `en`.",
                },
                {
                    name: "timezone",
                    type: "Number",
                    info: "Number of seconds away from UTC. Example: `-28800`.",
                },
                {
                    name: "gameVersion",
                    type: "String",
                    info: "Version of your app. Example: `1.1`.",
                },
                {
                    name: "deviceModel",
                    type: "String",
                    info: "Device make and model. Example: `iPhone5,1`.",
                },
                {
                    name: "deviceOs",
                    type: "String",
                    info: "Device operating system version. Example: `7.0.4`.",
                },
                {
                    name: "adId",
                    type: "String",
                    info: "The ad id for the device's platform: Android = `Advertising Id`; iOS = `identifierForVendor`; WP8.0 = `DeviceUniqueId`; WP8.1 = `AdvertisingId`.",
                },
                {
                    name: "sdk",
                    type: "String",
                    info: "Name and version of the plugin that's calling this API method (if any).",
                },
                {
                    name: "sessionCount",
                    type: "Number",
                    info: "Number of times the user has played the game, defaults to 1.",
                },
                {
                    name: "tags",
                    type: "String", // Hash
                    info: 'Custom tags for the player. Only support string key value pairs. Does not support arrays or other nested objects. Example: `{"foo":"bar","this":"that"}`.',
                },
                {
                    name: "amountSpent",
                    type: "String",
                    info: "Amount the user has spent in USD, up to two decimal places.",
                },
                {
                    name: "playtime",
                    type: "Number",
                    info: "Unixtime when the player joined the game.",
                },
                {
                    name: "createdAt",
                    type: "Number",
                    info: "Unixtime when the player joined the game.",
                },
                {
                    name: "badgeCount",
                    type: "Number",
                    info: "Current iOS badge count displayed on the app icon.",
                },
                {
                    name: "lastActive",
                    type: "Number",
                    info: "Unixtime when the player was last active.",
                },
                {
                    name: "testType",
                    type: "Number",
                    info: "This is used in deciding whether to use your iOS Sandbox or Production push certificate when sending a push when both have been uploaded. Set to the iOS provisioning profile that was used to build your app. `1` = Development; `2` = Ad-Hoc. Omit this field for App Store builds.",
                },
                {
                    name: "notificationTypes",
                    type: "String",
                    info: "`1` = subscribed; `-2` = unsubscribed. iOS - These values are set each time the user opens the app from the SDK. Use the SDK function set Subscription instead. Android - You may set this but you can no longer use the SDK method setSubscription later in your app as it will create synchronization issues.",
                },
                {
                    name: "lat",
                    type: "String", //Double
                    info: "Latitude of the device, used for geotagging to segment on.",
                },
                {
                    name: "long",
                    type: "String", //Double
                    info: "Longitude of the device, used for geotagging to segment on.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createDeviceSession",
            "args":[
                {
                    name: "deviceId",
                    type: "Number",
                    info: "The device's platform: `0` = iOS; `1` = Android; `2` = Amazon; `3` = WindowsPhone(MPNS); `4` = Chrome Apps / Extensions; `5` = Chrome Web Push; `6` = WindowsPhone(WNS); `7` = Safari; `8` = Firefox; `9` = MacOS",
                },
                {
                    name: "identifier",
                    type: "String",
                    info: "Push notification identifier from Google or Apple. For Apple push identifiers, you must strip all non alphanumeric characters. Example: `ce777617da7f548fe7a9ab6febb56`.",
                },
                {
                    name: "language",
                    type: "String",
                    info: "Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: `en`.",
                },
                {
                    name: "timezone",
                    type: "Number",
                    info: "Number of seconds away from UTC. Example: `-28800`.",
                },
                {
                    name: "gameVersion",
                    type: "String",
                    info: "Version of your app. Example: `1.1`.",
                },
                {
                    name: "deviceOs",
                    type: "String",
                    info: "Device operating system version. Example: `7.0.4`.",
                },
                {
                    name: "adId",
                    type: "String",
                    info: "The ad id for the device's platform: Android = `Advertising Id`; iOS = `identifierForVendor`; WP8.0 = `DeviceUniqueId`; WP8.1 = `AdvertisingId`.",
                },
                {
                    name: "sdk",
                    type: "String",
                    info: "Name and version of the plugin that's calling this API method (if any).",
                },
                {
                    name: "tags",
                    type: "String", // Hash
                    info: 'Custom tags for the player. Only support string key value pairs. Does not support arrays or other nested objects. Example: `{"foo":"bar","this":"that"}`.',
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"addDevicePurchase",
            "args":[
                {
                    name: "deviceId",
                    type: "Number",
                    info: "The device's platform: `0` = iOS; `1` = Android; `2` = Amazon; `3` = WindowsPhone(MPNS); `4` = Chrome Apps / Extensions; `5` = Chrome Web Push; `6` = WindowsPhone(WNS); `7` = Safari; `8` = Firefox; `9` = MacOS",
                },
                {
                    name: "purchaseSku",
                    type: "String",
                    info: "The unique identifier of the purchased item.",
                },
                {
                    name: "purchaseAmount",
                    type: "String", // Double
                    info: "The amount, in USD, spent purchasing the item.",
                },
                {
                    name: "purchaseIso",
                    type: "Number",
                    info: "The 3-letter ISO 4217 currency code. Required for correct storage and conversion of amount.",
                },
                {
                    name: "existing",
                    type: "String",
                    info: "Pass true on the first run of your app if you're tracking existing non-consumable purchases. This prevents tracking the same purchases more than once if the user re-installs your app.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"addDeviceSession",
            "args":[
                {
                    name: "deviceId",
                    type: "Number",
                    info: "The device's platform: `0` = iOS; `1` = Android; `2` = Amazon; `3` = WindowsPhone(MPNS); `4` = Chrome Apps / Extensions; `5` = Chrome Web Push; `6` = WindowsPhone(WNS); `7` = Safari; `8` = Firefox; `9` = MacOS",
                },
                {
                    name: "state",
                    type: "String",
                    info: "Set to 'ping'",
                },
                {
                    name: "activeTime",
                    type: "Number",
                    info: "The lesser of: The number of seconds since either: 1. on_focus was last called OR 2. on_session or the device first registered (POST /players)",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getNotifications",
            "args":[
                {
                    name: "appKey",
                    type: "credentials",
                    info: "REST API keys are used for API calls on a specific app's notifications or devices.",
                },
                {
                    name: "appId",
                    type: "String",
                    info: "Your app id for this device.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getNotification",
            "args":[
                {
                    name: "appKey",
                    type: "credentials",
                    info: "REST API keys are used for API calls on a specific app's notifications or devices.",
                },
                {
                    name: "appId",
                    type: "String",
                    info: "Your app id for this device.",
                },
                {
                    name: "notificationId",
                    type: "String",
                    info: "Notification ID.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"trackNotificationOpen",
            "args":[
                {
                    name: "appId",
                    type: "String",
                    info: "OneSignal app id.",
                },
                {
                    name: "notificationId",
                    type: "String",
                    info: "Notification ID.",
                },
                {
                    name: "opened",
                    type: "String", //Boolean
                    info: "Set to `true`.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"sendNotification",
            "args":[
                {
                    name: "appKey",
                    type: "credentials",
                    info: "REST API keys are used for API calls on a specific app's notifications or devices.",
                },
                {
                    name: "appId",
                    type: "String",
                    info: "Your OneSignal application ID, which can be found in Keys & IDs. It is a UUID and looks similar to `8250eaf6-1a58-489e-b136-7c74a864b434`.",
                },
                {
                    name: "appIds",
                    type: "Array",
                    info: "Example: '`2dd608f2-a6a1-11e3-251d-400c2940e62b`, `2dd608f2-a6a1-11e3-251d-500f2950e61c`'.",
                },
                {
                    name: "includedSegments",
                    type: "Array",
                    info: "The segment names you want to target. Users in these segments will receive a notification. This targeting parameter is only compatible with excluded_segments.",
                },
                {
                    name: "excludedSegments",
                    type: "Array",
                    info: "Segment that will be excluded when sending. Users in these segments will not receive a notification, even if they were included in included_segments. This targeting parameter is only compatible with included_segments.",
                },
                {
                    name: "includePlayerIds",
                    type: "Array",
                    info: "Specific players to send your notification to. Does not require API Auth Key. combine with other targeting parameters. Not compatible with any other targeting parameters. ",
                },
                {
                    name: "contents",
                    type: "JSON",
                    info: 'REQUIRED unless content_available=true or template_id is set. The notification`s content (excluding the title), a map of language codes to text for each language. Each hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language. English must be included in the hash.Example: `{"en": "English Message", "es": "Spanish Message"}`',
                },
                {
                    name: "headings",
                    type: "JSON",
                    info: 'The notification`s title, a map of language codes to text for each language. Each hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language. A default title may be displayed if a title is not provided. Example: `{"en": "English Title", "es": "Spanish Title"}`',
                },
                {
                    name: "templateId",
                    type: "String",
                    info: "Use a template you setup on our dashboard. You can override the template values by sending other parameters with the request. The template_id is the UUID found in the URL when viewing a template on our dashboard.",
                },
                {
                    name: "contentAvailable",
                    type: "String", //Boolean
                    info: "Sends content-available=1 to wake your app to run custom native code.",
                },
                {
                    name: "mutableContent",
                    type: "String", //Boolean
                    info: "Allows you to change the notification content in your app before it is displayed. ",
                },
                {
                    name: "data",
                    type: "JSON",
                    info: 'A custom map of data that is passed back to your app. Example: `{"abc": "123", "foo": "bar"}`',
                },
                {
                    name: "url",
                    type: "String",
                    info: "The URL to open in the browser when a user clicks on the notification. Example: `http://www.google.com`",
                },
                {
                    name: "bigPicture",
                    type: "String",
                    info: "Picture to display in the expanded view. Can be a drawable resource name or a URL.",
                },
                {
                    name: "admBigPicture",
                    type: "String",
                    info: "Picture to display in the expanded view. Can be a drawable resource name or a URL.",
                },
                {
                    name: "chromeBigPicture",
                    type: "String",
                    info: "Large picture to display below the notification text. Must be a local URL.",
                },
                {
                    name: "buttons",
                    type: "JSON",
                    info: 'Buttons to add to the notification. Icon only works for Android. Example: `[{"id": "id1", "text": "button1", "icon": "ic_menu_share"}, {"id": "id2", "text": "button2", "icon": "ic_menu_send"}]`',
                },
                {
                    name: "webButtons",
                    type: "JSON",
                    info: 'Add action buttons to the notification. The id field is required. `[{"id": "like-button", "text": "Like", "icon": "http://i.imgur.com/N8SN8ZS.png", "url": "https://yoursite.com"}, {"id": "read-more-button", "text": "Read more", "icon": "http://i.imgur.com/MIxJp1L.png", "url": "https://yoursite.com"}]`',
                },
                {
                    name: "iosCategory",
                    type: "String",
                    info: "Category APS payload, use with registerUserNotificationSettings:categories in your Objective-C / Swift code. Example: `calendar` category which contains actions like `accept` and `decline`",
                },
                {
                    name: "androidBackgroundLayout",
                    type: "JSON",
                    info: 'Allowing setting a background image for the notification. This is a JSON object containing the following keys. `image` - Asset file, android resource name, or URL to remote image. recommend size: 1582x256; `headings_color` - Title text color ARGB Hex format. Example(Blue): "FF0000FF". `contents_color` - Body text color ARGB Hex format. Example(Red): "FFFF0000". Example: `{"image": "https://domain.com/background_image.jpg", "headings_color": "FFFF0000", "contents_color": "FF00FF00"}`',
                },
                {
                    name: "smallIcon",
                    type: "String",
                    info: "If blank the app icon is used. Must be the drawable resource name.",
                },
                {
                    name: "largeIcon",
                    type: "String",
                    info: "If blank the small_icon is used. Can be a drawable resource name or a URL.",
                },
                {
                    name: "chromeWebIcon",
                    type: "String",
                    info: "Sets the web push notification's icon. An image URL linking to a valid image. Common image types are supported; GIF will not animate. We recommend 256x256 (at least 80x80) to display well on high DPI devices",
                },
                {
                    name: "admSmallIcon",
                    type: "String",
                    info: "Specific Amazon icon to use. If blank the app icon is used. Must be the drawable resource name.",
                },
                {
                    name: "admLargeIcon",
                    type: "String",
                    info: "Specific Amazon icon to use. If blank the app icon is used. Must be the drawable resource name.",
                },
                {
                    name: "chromeIcon",
                    type: "String",
                    info: "For web push, please see chromeWebIcon instead.",
                },
                {
                    name: "iosSound",
                    type: "String",
                    info: "Sound file that is included in your app to play instead of the default device notification sound. Pass 'nil' to disable vibration and sound for the notification.",
                },
                {
                    name: "androidSound",
                    type: "String",
                    info: "Sound file that is included in your app to play instead of the default device notification sound. NOTE: Leave off file extension for Android.",
                },
                {
                    name: "admSound",
                    type: "String",
                    info: "Sound file that is included in your app to play instead of the default device notification sound. NOTE: Leave off file extension for Android.",
                },
                {
                    name: "wpSound",
                    type: "String",
                    info: "Sound file that is included in your app to play instead of the default device notification sound.",
                },
                {
                    name: "wpWnsSound",
                    type: "String",
                    info: "Sound file that is included in your app to play instead of the default device notification sound.",
                },
                {
                    name: "androidLedColor",
                    type: "String",
                    info: "Sets the devices LED notification light if the device has one. ARGB Hex format.",
                },
                {
                    name: "androidAccentColor",
                    type: "String",
                    info: "Sets the background color of the notification circle to the left of the notification text. Only applies to apps targeting Android API level 21+ on Android 5.0+ devices.",
                },
                {
                    name: "androidVisibility",
                    type: "Number",
                    info: '`1` = Public (default) (Shows the full message on the lock screen unless the user has disabled all notifications from showing on the lock screen. Please consider the user and mark private if the contents are.) `0` = Private (Hides message contents on lock screen if the user set "Hide sensitive notification content" in the system settings) `-1` = Secret (Notification does not show on the lock screen at all)',
                },
                {
                    name: "iosBadgeType",
                    type: "String",
                    info: "Describes whether to set or increase/decrease your app's iOS badge count by the `ios_badgeCount` specified count. Can specify `None`, `SetTo`, or `Increase`. `None` leaves the count unaffected.`SetTo` directly sets the badge count to the number specified in ios_badgeCount. `Increase` adds the number specified in ios_badgeCount to the total. Use a negative number to decrease the badge count.",
                },
                {
                    name: "iosBadgeCount",
                    type: "String",
                    info: "Used with `ios_badgeType`, describes the value to set or amount to increase/decrease your app's iOS badge count by. You can use a negative number to decrease the badge count when used with an `ios_badgeType` of `Increase`.",
                },
                {
                    name: "sendAfter",
                    type: "String",
                    info: "Schedule notification for future delivery. Examples: All examples are the exact same date & time. `Thu Sep 24 2015 14:00:00 GMT-0700 (PDT)`; `September 24th 2015, 2:00:00 pm UTC-07:00`; `2015-09-24 14:00:00 GMT-0700`; `Sept 24 2015 14:00:00 GMT-0700`; `Thu Sep 24 2015 14:00:00 GMT-0700 (Pacific Daylight Time)`",
                },
                {
                    name: "delayedOption",
                    type: "String",
                    info: "Possible values are: `timezone` (Deliver at a specific time-of-day in each users own timezone); `last-active` (Deliver at the same time of day as each user last used your app). If `send_after` is used, this takes effect after the send_after time has elapsed.",
                },
                {
                    name: "ttl",
                    type: "String",
                    info: "Time To Live - In seconds. The notification will be expired if the device does not come back online within this time. The default is 259,200 seconds (3 days).",
                },
                {
                    name: "isIos",
                    type: "String", //Boolean
                    info: "Indicates whether to send to all devices registered under your app's Apple iOS platform.",
                },
                {
                    name: "isAndroid",
                    type: "String", //Boolean
                    info: "Indicats whether to send to all devices registered under your app's Google Android platform.",
                },
                {
                    name: "isAnyWeb",
                    type: "String", //Boolean
                    info: "Indicates whether to send to all subscribed web browser users, including Chrome, Firefox, and Safari. You may use this instead as a combined flag instead of separately enabling `isChromeWeb`, `isFirefox`, and `isSafari`, though the three options are equivalent to this one.",
                },
                {
                    name: "isChromeWeb",
                    type: "String", //Boolean
                    info: "Indicates whether to send to all Google Chrome, Chrome on Android, and Mozilla Firefox users registered under your Chrome & Firefox web push platform.",
                },
                {
                    name: "isFirefox",
                    type: "String", //Boolean
                    info: "Indicates whether to send to all Mozilla Firefox desktop users registered under your Firefox web push platform.",
                },
                {
                    name: "isSafari",
                    type: "String", //Boolean
                    info: "Indicates whether to send to all Apple's Safari desktop users registered under your Safari web push platform.isWP",
                },
                {
                    name: "isWP",
                    type: "String", //Boolean
                    info: "Indicates whether to send to all devices registered under your app's Windows Phone 8.0 platform.",
                },
                {
                    name: "isWP_WNS",
                    type: "String", //Boolean
                    info: "Indicates whether to send to all devices registered under your app's Windows Phone 8.1+ platform.",
                },
                {
                    name: "isAdm",
                    type: "String", //Boolean
                    info: "Indicates whether to send to all devices registered under your app's Amazon Fire platform.",
                },
                {
                    name: "isChrome",
                    type: "String", //Boolean
                    info: "Please see `isChromeWeb` for sending to web push users. This flag only applies to Google Chrome Apps & Extensions.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"cancelNotification",
            "args":[
                {
                    name: "appKey",
                    type: "credentials",
                    info: "REST API keys are used for API calls on a specific app's notifications or devices.",
                },
                {
                    name: "appId",
                    type: "String",
                    info: "Your app id for this device.",
                },
                {
                    name: "notificationId",
                    type: "String",
                    info: "Notification ID.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },]
    })
};

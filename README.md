# OneSignal Package
Push Notification delivery and automation.
* Domain: onesignal.com
* Credentials: userKey, appKey, appId

## How to get credentials: 
0. Create OnseSignal account. 
1. Create new app and choose it.
2. Goto `App Settings > Keys & IDs`.
3. Copy and save your `OneSignal App ID` & `REST API Key`.

## TOC: 
* [getDevices](#getDevices)
* [getDevice](#getDevice)
* [addDevice](#addDevice)
* [editDevice](#editDevice)
* [createDeviceSession](#createDeviceSession)
* [addDevicePurchase](#addDevicePurchase)
* [addDeviceSession](#addDeviceSession)
* [getNotifications](#getNotifications)
* [getNotification](#getNotification)
* [trackNotificationOpen](#trackNotificationOpen)
* [sendNotification](#sendNotification)
* [cancelNotification](#cancelNotification)
 
<a name="getDevices"/>
## OneSignal.getDevices
Method description

| Field | Type       | Description
|-------|------------|----------
| appKey| credentials| REST API keys are used for API calls on a specific app's notifications or devices.
| appId | String     | Your app id for this device.

#### Request example
```json
{	"appKey": "...",
	"appId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
				"players":
				[
				    {
				      "identifier":"ce777617da7f548fe7a9ab6febb56cf39fba6d382000c0395666288d961ee566",
				      "session_count":1,
				      "language":"en",
				      "timezone":-28800,
				      "game_version":"1.0",
				      "device_os":"7.0.4",
				      "device_type":0,
				      "device_model":"iPhone",
				      "ad_id":null,
				      "tags":{"a":"1","foo":"bar"},
				      "last_active":1395096859,
				      "amount_spent":0.0,
				      "created_at":1395096859,
				      "invalid_identifier":false,
				      "badge_count": 0
				    }
				]
			}
		}
	}
}
```

<a name="getDevice"/>
## OneSignal.getDevice
Method description

| Field   | Type       | Description
|---------|------------|----------
| appKey  | credentials| REST API keys are used for API calls on a specific app's notifications or devices.
| appId   | String     | Your app id for this device.
| deviceId| String     | Player's OneSignal ID.

#### Request example
```json
{	"appKey": "...",
	"appId": "...",
	"deviceId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
  				"identifier":"ce777617da7f548fe7a9ab6febb56cf39fba6d382000c0395666288d961ee566",
			  	"session_count":1,
			  	"language":"en",
			  	"timezone":-28800,
			  	"game_version":"1.0",
			  	"device_os":"7.0.4",
			  	"device_type":0,
			  	"device_model":"iPhone",
			  	"ad_id":null,
			 	"tags":{"a":"1","foo":"bar"},
			  	"last_active":1395096859,
			 	"amount_spent":0.0,
			  	"created_at":1395096859,
			  	"invalid_identifier":false,
			  	"badge_count": 0
			}
		}
	}
}
```

<a name="addDevice"/>
## OneSignal.addDevice
Method description

| Field            | Type  | Description
|------------------|-------|----------
| appId            | String| Your app id for this device.
| deviceType       | Number| The device's platform: `0` = iOS; `1` = Android; `2` = Amazon; `3` = WindowsPhone(MPNS); `4` = Chrome Apps / Extensions; `5` = Chrome Web Push; `6` = WindowsPhone(WNS); `7` = Safari; `8` = Firefox; `9` = MacOS
| identifier       | String| Push notification identifier from Google or Apple. For Apple push identifiers, you must strip all non alphanumeric characters. Example: `ce777617da7f548fe7a9ab6febb56`.
| language         | String| Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: `en`.
| timezone         | Number| Number of seconds away from UTC. Example: `-28800`.
| gameVersion      | String| Version of your app. Example: `1.1`.
| deviceModel      | String| Device make and model. Example: `iPhone5,1`.
| deviceOs         | String| Device operating system version. Example: `7.0.4`.
| adId             | String| The ad id for the device's platform: Android = `Advertising Id`; iOS = `identifierForVendor`; WP8.0 = `DeviceUniqueId`; WP8.1 = `AdvertisingId`.
| sdk              | String| Name and version of the plugin that's calling this API method (if any).
| sessionCount     | Number| Number of times the user has played the game, defaults to 1.
| tags             | Hash  | Custom tags for the player. Only support string key value pairs. Does not support arrays or other nested objects. Example: `{"foo":"bar","this":"that"}`.
| amountSpent      | String| Amount the user has spent in USD, up to two decimal places.
| playtime         | Number| Unixtime when the player joined the game.
| createdAt        | Number| Unixtime when the player joined the game.
| badgeCount       | Number| Current iOS badge count displayed on the app icon.
| lastActive       | Number| Unixtime when the player was last active.
| testType         | Number| This is used in deciding whether to use your iOS Sandbox or Production push certificate when sending a push when both have been uploaded. Set to the iOS provisioning profile that was used to build your app. `1` = Development; `2` = Ad-Hoc. Omit this field for App Store builds.
| notificationTypes| String| `1` = subscribed; `-2` = unsubscribed. iOS - These values are set each time the user opens the app from the SDK. Use the SDK function set Subscription instead. Android - You may set this but you can no longer use the SDK method setSubscription later in your app as it will create synchronization issues.
| lat              | String| Latitude of the device, used for geotagging to segment on.
| long             | String| Longitude of the device, used for geotagging to segment on.

#### Request example
```json
{	"appId": "...",
	"deviceType": 0,
	"identifier": "ce777617da7f548fe7a9ab6febb56cf39fba6d382000c0395666288d961ee566",
	"language": "en",
	"gameVersion": 1.0,
	"deviceModel": "iPhone 5,2",
	"deviceOs": "7.0.4",
	"tags": "{\"a\":\"1\", \"foo\":\"bar\"}",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{"success": true, "id": "ffffb794-ba37-11e3-8077-031d62f86ebf" }
		}
	}
}
```

<a name="editDevice"/>
## OneSignal.editDevice
Method description

| Field            | Type  | Description
|------------------|-------|----------
| appId            | String| Your app id for this device.
| deviceId         | String| The device's OneSignal ID.
| identifier       | String| Push notification identifier from Google or Apple. For Apple push identifiers, you must strip all non alphanumeric characters. Example: `ce777617da7f548fe7a9ab6febb56`.
| language         | String| Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: `en`.
| timezone         | Number| Number of seconds away from UTC. Example: `-28800`.
| gameVersion      | String| Version of your app. Example: `1.1`.
| deviceModel      | String| Device make and model. Example: `iPhone5,1`.
| deviceOs         | String| Device operating system version. Example: `7.0.4`.
| adId             | String| The ad id for the device's platform: Android = `Advertising Id`; iOS = `identifierForVendor`; WP8.0 = `DeviceUniqueId`; WP8.1 = `AdvertisingId`.
| sdk              | String| Name and version of the plugin that's calling this API method (if any).
| sessionCount     | Number| Number of times the user has played the game, defaults to 1.
| tags             | String| Custom tags for the player. Only support string key value pairs. Does not support arrays or other nested objects. Example: `{"foo":"bar","this":"that"}`.
| amountSpent      | String| Amount the user has spent in USD, up to two decimal places.
| playtime         | Number| Unixtime when the player joined the game.
| createdAt        | Number| Unixtime when the player joined the game.
| badgeCount       | Number| Current iOS badge count displayed on the app icon.
| lastActive       | Number| Unixtime when the player was last active.
| testType         | Number| This is used in deciding whether to use your iOS Sandbox or Production push certificate when sending a push when both have been uploaded. Set to the iOS provisioning profile that was used to build your app. `1` = Development; `2` = Ad-Hoc. Omit this field for App Store builds.
| notificationTypes| String| `1` = subscribed; `-2` = unsubscribed. iOS - These values are set each time the user opens the app from the SDK. Use the SDK function set Subscription instead. Android - You may set this but you can no longer use the SDK method setSubscription later in your app as it will create synchronization issues.
| lat              | String| Latitude of the device, used for geotagging to segment on.
| long             | String| Longitude of the device, used for geotagging to segment on.

#### Request example
```json
{	"appId": "...",
	"deviceId": "...",
	"language": "ru",
	"timezone": -28800,
	"gameVersion": 1.0,
	"deviceModel": "iPhone 5,2",
	"deviceOs": "7.0.5",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {"success": true, "id": "ffffb794-ba37-11e3-8077-031d62f86ebf"}
		}
	}
}
```
<a name="addDevicePurchase"/>
## OneSignal.addDevicePurchase
Method description

| Field         | Type  | Description
|---------------|-------|----------
| deviceId      | Number| The device's platform: `0` = iOS; `1` = Android; `2` = Amazon; `3` = WindowsPhone(MPNS); `4` = Chrome Apps / Extensions; `5` = Chrome Web Push; `6` = WindowsPhone(WNS); `7` = Safari; `8` = Firefox; `9` = MacOS
| purchaseSku   | String| The unique identifier of the purchased item.
| purchaseAmount| String| The amount, in USD, spent purchasing the item.
| purchaseIso   | Number| The 3-letter ISO 4217 currency code. Required for correct storage and conversion of amount.
| existing      | String| Pass true on the first run of your app if you're tracking existing non-consumable purchases. This prevents tracking the same purchases more than once if the user re-installs your app.

#### Request example
```json
{	"deviceId": 0,
	"purchaseSku": "...",
	"purchaseAmount": "...",
	"purchaseIso": 0,
	"existing": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="addDeviceSession"/>
## OneSignal.addDeviceSession
Method description

| Field     | Type  | Description
|-----------|-------|----------
| deviceId  | Number| The device's platform: `0` = iOS; `1` = Android; `2` = Amazon; `3` = WindowsPhone(MPNS); `4` = Chrome Apps / Extensions; `5` = Chrome Web Push; `6` = WindowsPhone(WNS); `7` = Safari; `8` = Firefox; `9` = MacOS
| state     | String| Set to 'ping'
| activeTime| Number| The lesser of: The number of seconds since either: 1. on_focus was last called OR 2. on_session or the device first registered (POST /players)

#### Request example
```json
{	"deviceId": 0,
	"state": "ping",
	"activeTime": 60
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {"success": true }
		}
	}
}
```

<a name="getNotifications"/>
## OneSignal.getNotifications
Method description

| Field | Type       | Description
|-------|------------|----------
| appKey| credentials| REST API keys are used for API calls on a specific app's notifications or devices.
| appId | String     | Your app id for this device.

#### Request example
```json
{	"appKey": "...",
	"appId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			 "notifications":[
			   {
			    "id":"481a2734-6b7d-11e4-a6ea-4b53294fa671",
			    "successful":15,
			    "failed":1,
			    "converted":3,
			    "remaining":0,
			    "queued_at":1415914655,
			    "send_after":1415914655,
			    "canceled": false,
			    "url": "https://yourWebsiteToOpen.com",
			    "data":null,
				"headings":{
			      "en":"English and default langauge heading",
			      "es":"Spanish language heading"
			    },     
			    "contents":{
			      "en":"English and default content",
			      "es":"Hola"
			    }
			   },
			   {
			    "id":"b6b326a8-40aa-13e5-b91b-bf8bc3fa26f7",
			    "successful":5,
			    "failed":2,
			    "converted":0,
			    "remaining":0,
			    "queued_at":1415915123,
			    "send_after":1415915123,
			    "canceled": false,
			    "url": nil,
			    "data":{
			      "foo":"bar",
			      "your":"custom metadata"
			    },
			    "headings":{
			      "en":"English and default langauge heading",
			      "es":"Spanish language heading"
			    },
			    "contents":{
			      "en":"English and default content",
			      "es":"Hola"
			    }
			   }
			 ]
			}
		}
	}
}
```

<a name="getNotification"/>
## OneSignal.getNotification
Method description

| Field         | Type       | Description
|---------------|------------|----------
| appKey        | credentials| REST API keys are used for API calls on a specific app's notifications or devices.
| appId         | String     | Your app id for this device.
| notificationId| String     | Notification ID.

#### Request example
```json
{	"appKey": "...",
	"appId": "...",
	"notificationId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id":"481a2734-6b7d-11e4-a6ea-4b53294fa671",
			  "successful":15,
			  "failed":1,
			  "converted":3,
			  "remaining":0,
			  "queued_at":1415914655,
			  "send_after":1415914655,  
			  "url": "https://yourWebsiteToOpen.com",
			  "data":{
			    "foo":"bar",
			   	"your":"custom metadata"
			  },
			  "canceled": false,
			  "headings":{
			      "en":"English and default langauge heading",
			      "es":"Spanish language heading"
			  },
			  "contents":{
			    "en":"English language content",
			    "es":"Hola"
			  }
			}
		}
	}
}
```

<a name="trackNotificationOpen"/>
## OneSignal.trackNotificationOpen
Method description

| Field         | Type   | Description
|---------------|--------|----------
| appId         | String | OneSignal app id.
| notificationId| String | Notification ID.
| opened        | Boolean| Set to `true`.

#### Request example
```json
{	"appId": "...",
	"notificationId": "...",
	"opened": true
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {"success": true}
		}
	}
}
```

<a name="sendNotification"/>
## OneSignal.sendNotification
Method description

| Field                  | Type       | Description
|------------------------|------------|----------
| appKey                 | credentials| REST API keys are used for API calls on a specific app's notifications or devices.
| appId                  | String     | Your OneSignal application ID, which can be found in Keys & IDs. It is a UUID and looks similar to `8250eaf6-1a58-489e-b136-7c74a864b434`.
| appIds                 | Array      | Example: '`2dd608f2-a6a1-11e3-251d-400c2940e62b`, `2dd608f2-a6a1-11e3-251d-500f2950e61c`'.
| includedSegments       | Array      | The segment names you want to target. Users in these segments will receive a notification. This targeting parameter is only compatible with excluded_segments.
| excludedSegments       | Array      | Segment that will be excluded when sending. Users in these segments will not receive a notification, even if they were included in included_segments. This targeting parameter is only compatible with included_segments.
| includePlayerIds       | Array      | Specific players to send your notification to. Does not require API Auth Key. combine with other targeting parameters. Not compatible with any other targeting parameters. 
| contents               | JSON       | REQUIRED unless content_available=true or template_id is set. The notification`s content (excluding the title), a map of language codes to text for each language. Each hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language. English must be included in the hash.Example: `{"en": "English Message", "es": "Spanish Message"}`
| headings               | JSON       | The notification`s title, a map of language codes to text for each language. Each hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language. A default title may be displayed if a title is not provided. Example: `{"en": "English Title", "es": "Spanish Title"}`
| templateId             | String     | Use a template you setup on our dashboard. You can override the template values by sending other parameters with the request. The template_id is the UUID found in the URL when viewing a template on our dashboard.
| contentAvailable       | Boolean    | Sends content-available=1 to wake your app to run custom native code.
| mutableContent         | Boolean    | Allows you to change the notification content in your app before it is displayed. 
| data                   | JSON       | A custom map of data that is passed back to your app. Example: `{"abc": "123", "foo": "bar"}`
| url                    | String     | The URL to open in the browser when a user clicks on the notification. Example: `http://www.google.com`
| bigPicture             | String     | Picture to display in the expanded view. Can be a drawable resource name or a URL.
| admBigPicture          | String     | Picture to display in the expanded view. Can be a drawable resource name or a URL.
| chromeBigPicture       | String     | Large picture to display below the notification text. Must be a local URL.
| buttons                | JSON       | Buttons to add to the notification. Icon only works for Android. Example: `[{"id": "id1", "text": "button1", "icon": "ic_menu_share"}, {"id": "id2", "text": "button2", "icon": "ic_menu_send"}]`
| webButtons             | JSON       | Add action buttons to the notification. The id field is required. `[{"id": "like-button", "text": "Like", "icon": "http://i.imgur.com/N8SN8ZS.png", "url": "https://yoursite.com"}, {"id": "read-more-button", "text": "Read more", "icon": "http://i.imgur.com/MIxJp1L.png", "url": "https://yoursite.com"}]`
| iosCategory            | String     | Category APS payload, use with registerUserNotificationSettings:categories in your Objective-C / Swift code. Example: `calendar` category which contains actions like `accept` and `decline`
| androidBackgroundLayout| JSON       | Allowing setting a background image for the notification. This is a JSON object containing the following keys. `image` - Asset file, android resource name, or URL to remote image. recommend size: 1582x256; `headings_color` - Title text color ARGB Hex format. Example(Blue): "FF0000FF". `contents_color` - Body text color ARGB Hex format. Example(Red): "FFFF0000". Example: `{"image": "https://domain.com/background_image.jpg", "headings_color": "FFFF0000", "contents_color": "FF00FF00"}`
| smallIcon              | String     | If blank the app icon is used. Must be the drawable resource name.
| largeIcon              | String     | If blank the small_icon is used. Can be a drawable resource name or a URL.
| chromeWebIcon          | String     | Sets the web push notification's icon. An image URL linking to a valid image. Common image types are supported; GIF will not animate. We recommend 256x256 (at least 80x80) to display well on high DPI devices
| admSmallIcon           | String     | Specific Amazon icon to use. If blank the app icon is used. Must be the drawable resource name.
| admLargeIcon           | String     | Specific Amazon icon to use. If blank the app icon is used. Must be the drawable resource name.
| chromeIcon             | String     | For web push, please see chromeWebIcon instead.
| iosSound               | String     | Sound file that is included in your app to play instead of the default device notification sound. Pass 'nil' to disable vibration and sound for the notification.
| androidSound           | String     | Sound file that is included in your app to play instead of the default device notification sound. NOTE: Leave off file extension for Android.
| admSound               | String     | Sound file that is included in your app to play instead of the default device notification sound. NOTE: Leave off file extension for Android.
| wpSound                | String     | Sound file that is included in your app to play instead of the default device notification sound.
| wpWnsSound             | String     | Sound file that is included in your app to play instead of the default device notification sound.
| androidLedColor        | String     | Sets the devices LED notification light if the device has one. ARGB Hex format.
| androidAccentColor     | String     | Sets the background color of the notification circle to the left of the notification text. Only applies to apps targeting Android API level 21+ on Android 5.0+ devices.
| androidVisibility      | Number     | `1` = Public (default) (Shows the full message on the lock screen unless the user has disabled all notifications from showing on the lock screen. Please consider the user and mark private if the contents are.) `0` = Private (Hides message contents on lock screen if the user set "Hide sensitive notification content" in the system settings) `-1` = Secret (Notification does not show on the lock screen at all)
| iosBadgeType           | String     | Describes whether to set or increase/decrease your app's iOS badge count by the `ios_badgeCount` specified count. Can specify `None`, `SetTo`, or `Increase`. `None` leaves the count unaffected.`SetTo` directly sets the badge count to the number specified in ios_badgeCount. `Increase` adds the number specified in ios_badgeCount to the total. Use a negative number to decrease the badge count.
| iosBadgeCount          | String     | Used with `ios_badgeType`, describes the value to set or amount to increase/decrease your app's iOS badge count by. You can use a negative number to decrease the badge count when used with an `ios_badgeType` of `Increase`.
| sendAfter              | String     | Schedule notification for future delivery. Examples: All examples are the exact same date & time. `Thu Sep 24 2015 14:00:00 GMT-0700 (PDT)`; `September 24th 2015, 2:00:00 pm UTC-07:00`; `2015-09-24 14:00:00 GMT-0700`; `Sept 24 2015 14:00:00 GMT-0700`; `Thu Sep 24 2015 14:00:00 GMT-0700 (Pacific Daylight Time)`
| delayedOption          | String     | Possible values are: `timezone` (Deliver at a specific time-of-day in each users own timezone); `last-active` (Deliver at the same time of day as each user last used your app). If `send_after` is used, this takes effect after the send_after time has elapsed.
| ttl                    | String     | Time To Live - In seconds. The notification will be expired if the device does not come back online within this time. The default is 259,200 seconds (3 days).
| isIos                  | Boolean    | Indicates whether to send to all devices registered under your app's Apple iOS platform.
| isAndroid              | Boolean    | Indicats whether to send to all devices registered under your app's Google Android platform.
| isAnyWeb               | Boolean    | Indicates whether to send to all subscribed web browser users, including Chrome, Firefox, and Safari. You may use this instead as a combined flag instead of separately enabling `isChromeWeb`, `isFirefox`, and `isSafari`, though the three options are equivalent to this one.
| isChromeWeb            | Boolean    | Indicates whether to send to all Google Chrome, Chrome on Android, and Mozilla Firefox users registered under your Chrome & Firefox web push platform.
| isFirefox              | Boolean    | Indicates whether to send to all Mozilla Firefox desktop users registered under your Firefox web push platform.
| isSafari               | Boolean    | Indicates whether to send to all Apple's Safari desktop users registered under your Safari web push platform.isWP
| isWP                   | Boolean    | Indicates whether to send to all devices registered under your app's Windows Phone 8.0 platform.
| isWP_WNS               | Boolean    | Indicates whether to send to all devices registered under your app's Windows Phone 8.1+ platform.
| isAdm                  | Boolean    | Indicates whether to send to all devices registered under your app's Amazon Fire platform.
| isChrome               | Boolean    | Please see `isChromeWeb` for sending to web push users. This flag only applies to Google Chrome Apps & Extensions.

#### Request example
```json
{	"appKey": "...",
	"appId": "...",
	"includedSegments": "Active",
	"contents": "{\"en\": \"English Message\"}",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "458dcec4-cf53-11e3-add2-000c2940e62c",
			  "recipients": 5
			}
		}
	}
}
```

<a name="cancelNotification"/>
## OneSignal.cancelNotification
Method description

| Field         | Type       | Description
|---------------|------------|----------
| appKey        | credentials| REST API keys are used for API calls on a specific app's notifications or devices.
| appId         | String     | Your app id for this device.
| notificationId| String     | Notification ID.

#### Request example
```json
{	"appKey": "...",
	"appId": "...",
	"notificationId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {"success": "true"}
		}
	}
}
```


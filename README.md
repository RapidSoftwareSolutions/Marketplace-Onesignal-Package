[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/Onesignal/functions?utm_source=RapidAPIGitHub_OneSignalFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# OneSignal Package
Push Notification delivery and automation.
* Domain: onesignal.com
* Credentials: appKey, appId

## How to get credentials: 
0. Create OneSignal account. 
1. Create new app and choose it.
2. Goto `App Settings > Keys & IDs`.
3. Copy and save your `OneSignal App ID` & `REST API Key`.

## Custom datatypes:
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]```
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```

## OneSignal.getDevices
View the details of multiple devices in one of your OneSignal apps

| Field     | Type       | Description
|-----------|------------|----------
| appKey    | credentials| Required: REST API keys are used for API calls on a specific app's notifications or devices.
| appId     | credentials| Required: Your app id for this device.

## OneSignal.getDevice
View the details of an existing device in one of your OneSignal apps

| Field     | Type       | Description
|-----------|------------|----------
| appKey    | credentials| Required: REST API keys are used for API calls on a specific app's notifications or devices.
| appId     | credentials| Required: Your app id for this device.
| deviceId  | String     | Required: Player's OneSignal ID.

## OneSignal.addDevice
Register a new device to one of your OneSignal apps

| Field            | Type       | Description
|------------------|------------|----------
| appId            | credentials| Required: Your app id for this device.
| deviceType       | Number     | Required: The device's platform: `0` = iOS; `1` = Android; `2` = Amazon; `3` = WindowsPhone(MPNS); `4` = Chrome Apps / Extensions; `5` = Chrome Web Push; `6` = WindowsPhone(WNS); `7` = Safari; `8` = Firefox; `9` = MacOS
| identifier       | String     | Optional: Push notification identifier from Google or Apple. For Apple push identifiers, you must strip all non alphanumeric characters. Example: `ce777617da7f548fe7a9ab6febb56`.
| language         | String     | Optional: Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: `en`.
| timezone         | Number     | Optional: Number of seconds away from UTC. Example: `-28800`.
| gameVersion      | String     | Optional: Version of your app. Example: `1.1`.
| deviceModel      | String     | Optional: Device make and model. Example: `iPhone5,1`.
| deviceOs         | String     | Optional: Device operating system version. Example: `7.0.4`.
| adId             | String     | Optional: The ad id for the device's platform: Android = `Advertising Id`; iOS = `identifierForVendor`; WP8.0 = `DeviceUniqueId`; WP8.1 = `AdvertisingId`.
| sdk              | String     | Optional: Name and version of the plugin that's calling this API method (if any).
| sessionCount     | Number     | Optional: Number of times the user has played the game, defaults to 1.
| tags             | JSON       | Optional: Custom tags for the player. Only support string key value pairs. Does not support arrays or other nested objects. Example: `{"foo":"bar","this":"that"}`.
| amountSpent      | String     | Optional: Amount the user has spent in USD, up to two decimal places.
| playtime         | Number     | Optional: Unixtime when the player joined the game.
| createdAt        | Number     | Optional: Unixtime when the player joined the game.
| badgeCount       | Number     | Optional: Current iOS badge count displayed on the app icon.
| lastActive       | Number     | Optional: Unixtime when the player was last active.
| testType         | Number     | Optional: This is used in deciding whether to use your iOS Sandbox or Production push certificate when sending a push when both have been uploaded. Set to the iOS provisioning profile that was used to build your app. `1` = Development; `2` = Ad-Hoc. Omit this field for App Store builds.
| notificationTypes| String     | Optional: `1` = subscribed; `-2` = unsubscribed. iOS - These values are set each time the user opens the app from the SDK. Use the SDK function set Subscription instead. Android - You may set this but you can no longer use the SDK method setSubscription later in your app as it will create synchronization issues.
| coordinates      | Map     | Optional: Latitude and Longitude of the device, used for geotagging to segment on. Example: 51.514084206610455, -51.514084206610455


## OneSignal.editDevice
Update an existing device in one of your OneSignal apps

| Field            | Type       | Description
|------------------|------------|----------
| appId            | credentials| Required: Your app id for this device.
| deviceId         | String     | Required: The device's OneSignal ID.
| identifier       | String     | Optional: Push notification identifier from Google or Apple. For Apple push identifiers, you must strip all non alphanumeric characters. Example: `ce777617da7f548fe7a9ab6febb56`.
| language         | String     | Optional: Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: `en`.
| timezone         | Number     | Optional: Number of seconds away from UTC. Example: `-28800`.
| gameVersion      | String     | Optional: Version of your app. Example: `1.1`.
| deviceModel      | String     | Optional: Device make and model. Example: `iPhone5,1`.
| deviceOs         | String     | Optional: Device operating system version. Example: `7.0.4`.
| adId             | String     | Optional: The ad id for the device's platform: Android = `Advertising Id`; iOS = `identifierForVendor`; WP8.0 = `DeviceUniqueId`; WP8.1 = `AdvertisingId`.
| sdk              | String     | Optional: Name and version of the plugin that's calling this API method (if any).
| sessionCount     | Number     | Optional: Number of times the user has played the game, defaults to 1.
| tags             | JSON       | Optional: Custom tags for the player. Only support string key value pairs. Does not support arrays or other nested objects. Example: `{"foo":"bar","this":"that"}`.
| amountSpent      | String     | Optional: Amount the user has spent in USD, up to two decimal places.
| playtime         | Number     | Optional: Unixtime when the player joined the game.
| createdAt        | Number     | Optional: Unixtime when the player joined the game.
| badgeCount       | Number     | Optional: Current iOS badge count displayed on the app icon.
| lastActive       | Number     | Optional: Unixtime when the player was last active.
| testType         | Number     | Optional: This is used in deciding whether to use your iOS Sandbox or Production push certificate when sending a push when both have been uploaded. Set to the iOS provisioning profile that was used to build your app. `1` = Development; `2` = Ad-Hoc. Omit this field for App Store builds.
| notificationTypes| String     | Optional: `1` = subscribed; `-2` = unsubscribed. iOS - These values are set each time the user opens the app from the SDK. Use the SDK function set Subscription instead. Android - You may set this but you can no longer use the SDK method setSubscription later in your app as it will create synchronization issues.
| coordinates      | Map     | Optional: Latitude and Longitude of the device, used for geotagging to segment on. Example: 51.514084206610455, -51.514084206610455

## OneSignal.createDeviceSession
Update a device's session information

| Field       | Type  | Description
|-------------|-------|----------
| deviceId    | String| Required: The device's OneSignal ID.
| identifier  | String| Optional: Push notification identifier from Google or Apple. For Apple push identifiers, you must strip all non alphanumeric characters. Example: `ce777617da7f548fe7a9ab6febb56`.
| language    | String| Optional: Language code. Typically lower case two letters, except for Chinese where it must be one of zh-Hans or zh-Hant. Example: `en`.
| timezone    | Number| Optional: Number of seconds away from UTC. Example: `-28800`.
| gameVersion | String| Optional: Version of your app. Example: `1.1`.
| deviceOs    | String| Optional: Device operating system version. Example: `7.0.4`.
| adId        | String| Optional: The ad id for the device's platform: Android = `Advertising Id`; iOS = `identifierForVendor`; WP8.0 = `DeviceUniqueId`; WP8.1 = `AdvertisingId`.
| sdk         | String| Optional: Name and version of the plugin that's calling this API method (if any).
| tags        | JSON  | Optional: Custom tags for the player. Only support string key value pairs. Does not support arrays or other nested objects. Example: `{"foo":"bar","this":"that"}`.

## OneSignal.addDevicePurchase
Track a new purchase in your app

| Field             | Type  | Description
|-------------------|-------|----------
| deviceId          | String| Required: The device's OneSignal ID.
| purchaseSku       | String| Required: The unique identifier of the purchased item.
| purchaseAmount    | String| Required: The amount, in USD, spent purchasing the item.
| purchaseIso       | Number| Required: The 3-letter ISO 4217 currency code. Required for correct storage and conversion of amount.
| existing          | String| Pass true on the first run of your app if you're tracking existing non-consumable purchases. This prevents tracking the same purchases more than once if the user re-installs your app.

## OneSignal.updateDeviceSessionLength
Update a device's session length upon app resuming

| Field       | Type  | Description
|-------------|-------|----------
| deviceId    | String| Required: The device's OneSignal ID.
| state       | String| Required: Set to 'ping'
| activeTime  | Number| Required: The lesser of: The number of seconds since either: 1. on_focus was last called OR 2. on_session or the device first registered (POST /players)

## OneSignal.getNotifications
View the details of multiple notifications

| Field     | Type       | Description
|-----------|------------|----------
| appKey    | credentials| Required: REST API keys are used for API calls on a specific app's notifications or devices.
| appId     | credentials| Required: Your app id for this device.

## OneSignal.getNotification
View the details of a single notification

| Field             | Type       | Description
|-------------------|------------|----------
| appKey            | credentials| Required: REST API keys are used for API calls on a specific app's notifications or devices.
| appId             | credentials| Required: Your app id for this device.
| notificationId    | String     | Required: Notification ID.

## OneSignal.trackNotificationOpen
Track when users open a notification

| Field             | Type       | Description
|-------------------|------------|----------
| appId             | credentials| Required: OneSignal app id.
| notificationId    | String     | Required: Notification ID.
| opened            | String     | Required: Set to `true`.

## OneSignal.sendNotification
Sends notifications to your users

| Field                  | Type       | Description
|------------------------|------------|----------
| appKey                 | credentials| Required: REST API keys are used for API calls on a specific app's notifications or devices.
| appId                  | credentials| Required: Your OneSignal application ID, which can be found in Keys & IDs. It is a UUID and looks similar to `8250eaf6-1a58-489e-b136-7c74a864b434`.
| appIds                 | List      | Optional: Example: '`2dd608f2-a6a1-11e3-251d-400c2940e62b`, `2dd608f2-a6a1-11e3-251d-500f2950e61c`'.
| includedSegments       | List      | Required: Comma-separated list of the segment names you want to target. Users in these segments will receive a notification. This targeting parameter is only compatible with excluded_segments. Example: Active Users, Inactive Users
| excludedSegments       | List      | Optional: Comma-separated list of segment that will be excluded when sending. Users in these segments will not receive a notification, even if they were included in included_segments. This targeting parameter is only compatible with included_segments. Example: Active Users, Inactive Users
| includePlayerIds       | List      | Optional: Comma-separated list of pecific players to send your notification to. Does not require API Auth Key. combine with other targeting parameters. Not compatible with any other targeting parameters. Example: 1dd608f2-c6a1-11e3-851d-000c2940e62c, 1dd608f2-c6a1-11e3-851d-000c2940e62c
| contents               | JSON       | REQUIRED: unless content_available=true or template_id is set. The notification`s content (excluding the title), a map of language codes to text for each language. Each hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language. English must be included in the hash.Example: `{"en": "English Message", "es": "Spanish Message"}`
| headings               | JSON       | Optional: The notification`s title, a map of language codes to text for each language. Each hash must have a language code string for a key, mapped to the localized text you would like users to receive for that language. A default title may be displayed if a title is not provided. Example: `{"en": "English Title", "es": "Spanish Title"}`
| templateId             | String     | Optional: Use a template you setup on our dashboard. You can override the template values by sending other parameters with the request. The template_id is the UUID found in the URL when viewing a template on our dashboard.
| contentAvailable       | String     | Optional: Sends content-available=1 to wake your app to run custom native code.
| mutableContent         | String     | Optional: Allows you to change the notification content in your app before it is displayed. 
| data                   | JSON       | Optional: A custom map of data that is passed back to your app. Example: `{"abc": "123", "foo": "bar"}`
| url                    | String     | Optional: The URL to open in the browser when a user clicks on the notification. Example: `http://www.google.com`
| bigPicture             | String     | Optional: Picture to display in the expanded view. Can be a drawable resource name or a URL.
| admBigPicture          | String     | Optional: Picture to display in the expanded view. Can be a drawable resource name or a URL.
| chromeBigPicture       | String     | Optional: Large picture to display below the notification text. Must be a local URL.
| buttons                | JSON       | Optional: Buttons to add to the notification. Icon only works for Android. Example: `[{"id": "id1", "text": "button1", "icon": "ic_menu_share"}, {"id": "id2", "text": "button2", "icon": "ic_menu_send"}]`
| webButtons             | JSON       | Optional: Add action buttons to the notification. The id field is required. `[{"id": "like-button", "text": "Like", "icon": "http://i.imgur.com/N8SN8ZS.png", "url": "https://yoursite.com"}, {"id": "read-more-button", "text": "Read more", "icon": "http://i.imgur.com/MIxJp1L.png", "url": "https://yoursite.com"}]`
| iosCategory            | String     | Optional: Category APS payload, use with registerUserNotificationSettings:categories in your Objective-C / Swift code. Example: `calendar` category which contains actions like `accept` and `decline`
| androidBackgroundLayout| JSON       | Optional: Allowing setting a background image for the notification. This is a JSON object containing the following keys. `image` - Asset file, android resource name, or URL to remote image. recommend size: 1582x256; `headings_color` - Title text color ARGB Hex format. Example(Blue): "FF0000FF". `contents_color` - Body text color ARGB Hex format. Example(Red): "FFFF0000". Example: `{"image": "https://domain.com/background_image.jpg", "headings_color": "FFFF0000", "contents_color": "FF00FF00"}`
| smallIcon              | String     | Optional: If blank the app icon is used. Must be the drawable resource name.
| largeIcon              | String     | Optional: If blank the small_icon is used. Can be a drawable resource name or a URL.
| chromeWebIcon          | String     | Optional: Sets the web push notification's icon. An image URL linking to a valid image. Common image types are supported; GIF will not animate. We recommend 256x256 (at least 80x80) to display well on high DPI devices
| admSmallIcon           | String     | Optional: Specific Amazon icon to use. If blank the app icon is used. Must be the drawable resource name.
| admLargeIcon           | String     | Optional: Specific Amazon icon to use. If blank the app icon is used. Must be the drawable resource name.
| chromeIcon             | String     | Optional: For web push, please see chromeWebIcon instead.
| iosSound               | String     | Optional: Sound file that is included in your app to play instead of the default device notification sound. Pass 'nil' to disable vibration and sound for the notification.
| androidSound           | String     | Optional: Sound file that is included in your app to play instead of the default device notification sound. NOTE: Leave off file extension for Android.
| admSound               | String     | Optional: Sound file that is included in your app to play instead of the default device notification sound. NOTE: Leave off file extension for Android.
| wpSound                | String     | Optional: Sound file that is included in your app to play instead of the default device notification sound.
| wpWnsSound             | String     | Optional: Sound file that is included in your app to play instead of the default device notification sound.
| androidLedColor        | String     | Optional: Sets the devices LED notification light if the device has one. ARGB Hex format.
| androidAccentColor     | String     | Optional: Sets the background color of the notification circle to the left of the notification text. Only applies to apps targeting Android API level 21+ on Android 5.0+ devices.
| androidVisibility      | Number     | Optional: `1` = Public (default) (Shows the full message on the lock screen unless the user has disabled all notifications from showing on the lock screen. Please consider the user and mark private if the contents are.) `0` = Private (Hides message contents on lock screen if the user set "Hide sensitive notification content" in the system settings) `-1` = Secret (Notification does not show on the lock screen at all)
| iosBadgeType           | String     | Optional: Describes whether to set or increase/decrease your app's iOS badge count by the `ios_badgeCount` specified count. Can specify `None`, `SetTo`, or `Increase`. `None` leaves the count unaffected.`SetTo` directly sets the badge count to the number specified in ios_badgeCount. `Increase` adds the number specified in ios_badgeCount to the total. Use a negative number to decrease the badge count.
| iosBadgeCount          | String     | Optional: Used with `ios_badgeType`, describes the value to set or amount to increase/decrease your app's iOS badge count by. You can use a negative number to decrease the badge count when used with an `ios_badgeType` of `Increase`.
| sendAfter              | String     | Optional: Schedule notification for future delivery. Examples: All examples are the exact same date & time. `Thu Sep 24 2015 14:00:00 GMT-0700 (PDT)`; `September 24th 2015, 2:00:00 pm UTC-07:00`; `2015-09-24 14:00:00 GMT-0700`; `Sept 24 2015 14:00:00 GMT-0700`; `Thu Sep 24 2015 14:00:00 GMT-0700 (Pacific Daylight Time)`
| delayedOption          | String     | Optional: Possible values are: `timezone` (Deliver at a specific time-of-day in each users own timezone); `last-active` (Deliver at the same time of day as each user last used your app). If `send_after` is used, this takes effect after the send_after time has elapsed.
| ttl                    | String     | Optional: Time To Live - In seconds. The notification will be expired if the device does not come back online within this time. The default is 259,200 seconds (3 days).
| isIos                  | String     | Optional: Indicates whether to send to all devices registered under your app's Apple iOS platform.
| isAndroid              | String     | Optional: Indicats whether to send to all devices registered under your app's Google Android platform.
| isAnyWeb               | String     | Optional: Indicates whether to send to all subscribed web browser users, including Chrome, Firefox, and Safari. You may use this instead as a combined flag instead of separately enabling `isChromeWeb`, `isFirefox`, and `isSafari`, though the three options are equivalent to this one.
| isChromeWeb            | String     | Optional: Indicates whether to send to all Google Chrome, Chrome on Android, and Mozilla Firefox users registered under your Chrome & Firefox web push platform.
| isFirefox              | String     | Optional: Indicates whether to send to all Mozilla Firefox desktop users registered under your Firefox web push platform.
| isSafari               | String     | Optional: Indicates whether to send to all Apple's Safari desktop users registered under your Safari web push platform.isWP
| isWP                   | String     | Optional: Indicates whether to send to all devices registered under your app's Windows Phone 8.0 platform.
| isWP_WNS               | String     | Optional: Indicates whether to send to all devices registered under your app's Windows Phone 8.1+ platform.
| isAdm                  | String     | Optional: Indicates whether to send to all devices registered under your app's Amazon Fire platform.
| isChrome               | String     | Optional: Please see `isChromeWeb` for sending to web push users. This flag only applies to Google Chrome Apps & Extensions.

## OneSignal.cancelNotification
Stop a scheduled or currently outgoing notification

| Field             | Type       | Description
|-------------------|------------|----------
| appKey            | credentials| Required: REST API keys are used for API calls on a specific app's notifications or devices.
| appId             | credentials| Required: Your app id for this device.
| notificationId    | String     | Required: Notification ID.


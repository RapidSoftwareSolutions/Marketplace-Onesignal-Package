const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

    // rpt bug
    req.body.args = _.clearArgs(req.body.args, false);


    let {
        appId,
        appKey,
        appIds,
        includedSegments,
        excludedSegments,
        includePlayerIds,
        contents,
        headings,
        templateId,
        contentAvailable,
        mutableContent,
        url,
        data,
        bigPicture,
        filters,
        admBigPicture,
        chromeBigPicture,
        buttons,
        webButtons,
        iosCategory,
        androidBackgroundLayout,
        smallIcon,
        largeIcon,
        chromeWebIcon,
        admSmallIcon,
        admLargeIcon,
        chromeIcon,
        iosSound,
        androidSound,
        admSound,
        wpSound,
        wpWnsSound,
        androidLedColor,
        androidAccentColor,
        androidVisibility,
        iosBadgeCount,
        sendAfter,
        delayedOption,
        ttl,
        isIos,
        isAndroid,
        iosBadgeType,
        isChromeWeb,
        isAnyWeb,
        isFirefox,
        isSafari,
        isWP,
        isWP_WNS,
        isAdm,
        isChrome,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };


    let bodyOptions = {
        app_id: appId,
        app_ids: appIds,
        included_segments: includedSegments,
        excluded_segments: excludedSegments,
        include_player_ids: includePlayerIds,
        contents,
        headings,
        filters,
        template_id: templateId,
        content_available: contentAvailable,
        mutable_content: mutableContent,
        url,
        big_picture: bigPicture,
        adm_big_picture: admBigPicture,
        chrome_big_picture: chromeBigPicture,
        buttons,
        web_buttons: webButtons,
        ios_category: iosCategory,
        android_background_layout: androidBackgroundLayout,
        small_icon: smallIcon,
        large_icon: largeIcon,
        chrome_web_icon: chromeWebIcon,
        adm_small_icon: admSmallIcon,
        adm_large_icon: admLargeIcon,
        chrome_icon: chromeIcon,
        ios_sound: iosSound,
        android_sound: androidSound,
        adm_sound: admSound,
        wp_sound: wpSound,
        wp_wns_sound: wpWnsSound,
        android_led_color: androidLedColor,
        android_accent_color: androidAccentColor,
        android_visibility: androidVisibility,
        ios_badgeCount: iosBadgeCount,
        send_after: sendAfter,
        delayed_option: delayedOption,
        ttl: ttl,
        isIos,
        isAndroid,
        ios_badgeType: iosBadgeType,
        isChromeWeb,
        isAnyWeb,
        isFirefox,
        isSafari,
        isWP,
        isWP_WNS,
        isAdm,
        isChrome,
    };

    bodyOptions = _.clearArgs(bodyOptions, true);

    r.contextWrites[to] = bodyOptions;
    r.callback = 'success';
    res.status(200).send(r);

}

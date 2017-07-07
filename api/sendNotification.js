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

    if(!appId || !appKey || !contents || !includedSegments) {
        _.echoBadEnd(r, to, res, 'appId, appKey, contents, includedSegments');
        return;
    }

    if(includedSegments!=undefined && typeof(includedSegments)!='string'){
        includedSegments = includedSegments.join(" , ");
    }

    if(includePlayerIds!=undefined){
        includePlayerIds = includePlayerIds.join(" , ");
    }
    if(excludedSegments!=undefined){
        excludedSegments = excludedSegments.join(" , ");
    }
    if(appIds!=undefined){
        appIds = appIds.join(" , ");
    }


    includedSegments = _.array(includedSegments);
    appIds           = _.array(appIds);
    filters          = _.array(filters);
    excludedSegments = _.array(excludedSegments);
    includePlayerIds = _.array(includePlayerIds);
    contentAvailable = _.bool(contentAvailable);
    mutableContent   = _.bool(mutableContent);
    isIos            = _.bool(isIos);
    isAndroid        = _.bool(isAndroid);
    isAnyWeb         = _.bool(isAnyWeb);
    isChromeWeb      = _.bool(isChromeWeb);
    isFirefox        = _.bool(isFirefox);
    isSafari         = _.bool(isSafari);
    isWP             = _.bool(isWP);
    isWP_WNS         = _.bool(isWP_WNS);
    isAdm            = _.bool(isAdm);
    isChrome         = _.bool(isChrome);

    try {
        if(typeof contents == 'string')                 contents     = JSON.parse(contents);
        if(headings && typeof headings == 'string')     headings     = JSON.parse(headings);
        if(data && typeof data == 'string')             data         = JSON.parse(data);
        if(buttons && typeof buttons == 'string')       buttons      = JSON.parse(buttons);
        if(webButtons && typeof webButtons == 'string') webButtons   = JSON.parse(webButtons);
        if(androidBackgroundLayout && typeof androidBackgroundLayout == 'string')
            androidBackgroundLayout = JSON.parse(androidBackgroundLayout);

    } catch(e) {
        r.contextWrites[to] = 'Error in parsing JSON fields';
        r.callback = 'error';

        res.status(200).send(r);
        return;
    }

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

    let options = {
        method: 'POST',
        url: `https://onesignal.com/api/v1/notifications`,
        body: JSON.stringify(bodyOptions),
        headers: {
            'Content-Type':  `application/json`,
            'Authorization': `Basic ${appKey}`
        }
    }

    return request(options, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            r.contextWrites[to] = JSON.parse(body);
            r.callback = 'success';
        } else {
            r.contextWrites[to] = JSON.parse(err || body);
            r.callback = 'error';
        }

        res.status(200).send(r);
    })
}

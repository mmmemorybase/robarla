// Google Ads Conversion Tracking code
function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': '16459946063',
        'value': 1.0,
        'currency': 'USD',
        'event_callback': callback
    });
    return false;
}

// Your existing redirectToAffiliate function, modified for conversion tracking
function redirectToAffiliate(countryCode) {
    // Assuming you have your Google Ads conversion tracking setup correctly,
    // Replace TAG_ID/CONVERSION_LABEL with your actual tag ID and conversion label
    const affiliateUrl = `https://www.fasttrack16.com/P1B38MJ6/294QBWQP/?sub1=${countryCode}`;
    
    // This will call the Google conversion tracking and then redirect
    gtag_report_conversion(affiliateUrl);
}

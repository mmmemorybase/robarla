// netlify/functions/redirect.js
exports.handler = async (event, context) => {
    const currentDomain = event.queryStringParameters.sub1;
    const affiliateUrl = `https://www.fasttrack16.com/P1B38MJ6/294QBWQP/?sub1=${currentDomain}`;

    return {
        statusCode: 200,
        body: affiliateUrl
    };
};

var sauceConnectLauncher = require('sauce-connect-launcher');

sauceConnectLauncher({
    username: process.env.username,
    accessKey: process.env.key,
    verbose: false,
    logger: console.log
}, function (err, sauceConnectProcess) {
    console.log("Started Sauce Connect Process");
});
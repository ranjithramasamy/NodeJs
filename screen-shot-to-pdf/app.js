const commonUtil = require('./utils/common-util');
const logger = require('./utils/common-logger');

const webPageUrl = "https://nodejs.org/en/about/";
const moduleName = "App";

logger.info(moduleName, "Please wait, given webpage is being converted to image.");
commonUtil.screenshot(webPageUrl, "./output/screen-shot.png");

logger.info(moduleName, "Please wait, given webpage is being converted to PDF.");
commonUtil.pdf(webPageUrl, "./output/screen-shot.pdf");
const commonUtil = require('./utils/common-util');
const logger = require('./utils/common-logger');

logger.info("App", "Please wait, given webpage is being converted to image.");
commonUtil.screenshot("https://nodejs.org/en/about/", "./output/screen-shot.png");

logger.info("App", "Please wait, given webpage is being converted to PDF.");
commonUtil.pdf("https://nodejs.org/en/about/", "./output/screen-shot.pdf");
const puppeteer = require('puppeteer');

async function takeScreenShot (url, fileName) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    await page.screenshot({path: fileName});

    await browser.close();
}

async function takeScreenShotAndConvertPDF (url, fileName) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    await page.pdf({path: fileName, format: 'A4'});

    await browser.close();
}

module.exports = {
    screenshot: takeScreenShot,
    pdf: takeScreenShotAndConvertPDF
};
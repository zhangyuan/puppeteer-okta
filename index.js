const puppeteer = require('puppeteer');

const speakeasy = require("speakeasy");

const generate = () => {
  return speakeasy.totp({
    secret: process.env.SHARED_SECRET_KEY,
    encoding: 'base32'
  });
};

const sleep = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
};

(async() => {
  const browser = await puppeteer.launch({headless: false, devtools: true});
  const page = await browser.newPage();
  await page.goto(process.env.OKTA_URL);
  await page.type('#okta-signin-username', process.env.OKTA_USERNAME);
  await page.type('#okta-signin-password', process.env.OKTA_PASSWORD);
  await page.click('#okta-signin-submit');
 
  await sleep(2000);

  await page.click('.dropdown.more-actions a');
   
  await page.click('.okta-dropdown-list span.mfa-google-auth-30', {delay: 100});

  await page.type('#input69', generate());

  await page.click('input[type=submit]');
})();
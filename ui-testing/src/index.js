import { resolve } from 'path';

const wd = require('wd'); // Using the https://github.com/admc/wd/issues library (not written by appium.)

const opts = {
  connection: 'http://127.0.0.1:4723/wd/hub',
  capabilities: {
    "deviceName": "Pixel 2 XL API 27",
    "platformName": "Android",
    "platformVersion": "8.1",
    "app": resolve('../app/build/outputs/apk/byod/debug/the-hub_V1.0.0-DEBUG_byodDebug.apk') // Allows for a absolute path which can then be translated to a relative one.
  }
};

const driver = wd.promiseChainRemote(opts.connection);

function delay(t) {
  return new Promise(resolve => setTimeout(resolve, t));
}

async function main() {
  await driver.init(opts.capabilities);
  let ell = await driver.elementByAccessibilityId("MainActivity-TestButton");
  await ell.click();

  await delay(5000); // Wait 5 seconds before closing the application/appium connection.

  await driver.quit();
}

main().catch(console.error);
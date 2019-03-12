import { resolve } from 'path';

const wd = require('wd');

const opts = {
  connection: 'http://127.0.0.1:4723/wd/hub',
  capabilities: {
    "deviceName": "Pixel 2 XL API 27",
    "platformName": "Android",
    "platformVersion": "8.1",
    "app": resolve('../app/build/outputs/apk/byod/debug/the-hub_V1.0.0-DEBUG_byodDebug.apk')
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

  await delay(5000);

  await driver.quit();
}

main().catch(console.error);
import { wdConnection, wdCapabilities } from '../config';

const wd = require('wd');

export async function getDriver({connection = wdConnection, capabilities = wdCapabilities}) {
  let driver = wd.promiseChainRemote(connection);
  await driver.init(capabilities);
  return driver;
};
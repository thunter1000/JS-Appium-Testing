import { promiseChainRemote } from 'wd';
import { wdConnection, wdCapabilities } from '../config';

export async function getDriver({connection = wdConnection, capabilities = wdCapabilities}) {
  let driver;
  driver = promiseChainRemote(connection);
  await driver.init(capabilities);
  return driver;
};
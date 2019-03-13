import { describe, it } from 'mocha';
import { expect } from 'chai';
import { getDriver } from '../src/providers/webdriver';

const assert = require('assert');

describe('Test the test button', () => {
  let driver;

  beforeEach(async () => driver = await getDriver({}));

  afterEach(async () => await driver.quit());

  it('Test text should not be displayed', async () => {
    expect(await driver.elementByAccessibilityIdOrNull('MainActivity-TestText')).to.be.null;
  });

  it('Test text should be displayed after button click', async () => {
    await driver.elementByAccessibilityId('MainActivity-TestButton').click();

    expect(await driver.elementByAccessibilityIdOrNull('MainActivity-TestText')).to.not.be.null;
  });

  it('Test text should not be displayed after toggling the test button twice', async () => {
    await driver.elementByAccessibilityId('MainActivity-TestButton').click().click();

    expect(await driver.elementByAccessibilityIdOrNull('MainActivity-TestText')).to.be.null
  });
})
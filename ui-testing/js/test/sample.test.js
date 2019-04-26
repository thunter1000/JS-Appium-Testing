import { describe, it } from 'mocha';
import { expect } from 'chai';
import { getDriver } from '../src/providers/webdriver';

const assert = require('assert');

describe('When application first starts', () => {
  let driver;
  // Setup for all the tests.
  before(async () => {
    driver = await getDriver({});
  });

  // Close the application once complete.
  after(async () => {
    await driver.quit();
  });

  it('Then the test text should not be visible', async () => {
    expect(await driver.elementByAccessibilityIdOrNull('MainActivity-TestText')).to.be.null;
  });
});

describe('When the test button is clicked', () => {
  let driver;
  before(async () => {
    driver = await getDriver({});

    // Simulate a user clicking a button.
    await driver.elementByAccessibilityId('MainActivity-TestButton').click();
  });

  after(async () => {
    await driver.quit();
  });

  it('Then the test text should be visible', async () => {
    expect(await driver.elementByAccessibilityIdOrNull('MainActivity-TestText')).to.not.be.null;
  })
});

describe('When the test button is clicked twice', () => {
  let driver;
  before(async () => {
    driver = await getDriver({});

    // Simulate clicking the button twice.
    await driver.elementByAccessibilityId('MainActivity-TestButton').click().click()
  });

  after(async () => {
    driver.quit();
  });

  it('Then the test text should not be visible', async () => {
    expect(await driver.elementByAccessibilityIdOrNull('MainActivity-TestTest')).to.be.null;
  })
})

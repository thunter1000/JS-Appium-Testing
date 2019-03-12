
import { describe, it } from 'mocha';
import { getDriver } from '../src/providers/webdriver';

const assert = require('assert');

describe('Test the test button', () => {
  let driver = getDriver({});

  it('Clicking the button should toggle visibility', async () => {
    let testButton = await (await driver).elementByAccessibilityId('MainActivity-TestButton');

    await testButton.click();

    let testText = await (await driver).elementByAccessibilityId('MainActivity-TestText'); // TODO throws exception not null when it cannot find the element.

    assert.notEqual(testText, null, 'Test text should be visible');
  });
})
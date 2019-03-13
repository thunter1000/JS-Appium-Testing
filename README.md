# Running & Testing.

Build a APK for appium:
- In the root of the project run `./gradlew build`


Start the appium server (either through the desktop app or run `appium` command can be installed with `npm install -g appium`).

## Preping the testing.

Go to the test folder in a bash terminal. (`ui-testing/js`)

Run `yarn install`

You will need to alter the device capabilities (`ui-testing/js/src/config.js`).

Run `yarn run test` to test all test files in the directory `ui-testing/js/test/` ending with `.test.js`.

Appium should automatically grab the APK in the build output from the project.
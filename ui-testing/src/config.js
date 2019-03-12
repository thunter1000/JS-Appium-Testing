import { resolve } from 'path';


export let wdConnection = 'http://127.0.0.1:4723/wd/hub';

export let wdCapabilities = {
  "deviceName": "Pixel 2 XL API 27",
    "platformName": "Android",
    "platformVersion": "8.1",
    "app": resolve('../app/build/outputs/apk/byod/debug/the-hub_V1.0.0-DEBUG_byodDebug.apk') // Allows for a absolute path which can then be translated to a relative one.
};


